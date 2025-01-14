import ContextContainer from "./ContextContainer.js"; // need to be before import of AbstractContextContainerFactory (why so?)
import AbstractContextContainerFactory from "./AbstractContextContainerFactory.js";
import generateRandomString from "../utils/generateRandomString.js";
import InvalidContextContainerNameType from "../errors/InvalidContextContainerNameType.js";
import NotUniqueContextContainerName from "../errors/NotUniqueContextContainerName.js";
import DIObjectKeyFactory from "./helpers/DIObjectKeyFactory.js";
// eslint-disable-next-line no-unused-vars
import { DIObjectConfig } from "../DIObjectConfig.js";
// import { parseType } from "../../ReflectionJs/index.js";

/**
 * @template T
 * @typedef {T extends abstract new (...args: any[]) => infer P ? P : T extends Function ? FunctionWrapper<T> : any} GetInstanceReturnType<T>
 */

/**
 * @template {Function} T
 * @param {T} diObjectType
 * @param {ContextContainer} ctx
 * @returns {GetInstanceReturnType<T>}
 */
export function createDIObjectClassConstructor(diObjectType, ctx) {
	return function DIObject() {
		if (new.target) {
			return ctx.getInstance(diObjectType);
		}
		return new DIObject();
	};
}

/**
 * @template {Function} T
 * @param {T} diObjectType
 * @param {ContextContainer} ctx
 * @returns {GetInstanceReturnType<T>}
 */
export function createDIObjectFunctionConstructor(diObjectType, ctx) {
	return () => ctx.getInstance(diObjectType).call;
}

/** Class for creation of ContextContainer - ContextContainerFactory.
 *
 * @class
 * @extends AbstractContextContainerFactory
 */
class ContextContainerFactory extends AbstractContextContainerFactory {
	static #names = new Set();
	static #addName(name) {
		if (typeof name !== "string") {
			throw new InvalidContextContainerNameType();
		}
		if (ContextContainerFactory.#names.has(name)) {
			throw new NotUniqueContextContainerName(name);
		}
		ContextContainerFactory.#names.add(name);
	}

	/** Returns new ContextContainer.
	 * @static
	 * @param {DIObjectConfig[]} [config=[]] - list of di objects configs
	 * @param {string} [name=""] - name of context
	 * @param {ContextContainer} [parent=null] - parent context
	 * @param {DIObjectKeyFactory} [keyFactory=new DIObjectKeyFactory()] - Keys Factory
	 * @returns {ContextContainer}
	 */
	static createContainer(config = [], name = "", parent = null, keyFactory = new DIObjectKeyFactory()) {
		if (name === "") {
			name = generateRandomString(7);
		}
		if (super.validateContainerParams(config, name, parent, keyFactory)) {
			const context = new ContextContainer(config, name, parent, keyFactory);
			context.setParent(parent);
			ContextContainerFactory.#addName(name);
			return context;
		}
		return null;
	}
}

export default ContextContainerFactory;
