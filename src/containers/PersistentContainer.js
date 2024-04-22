import LifecycleEnum from "../constants/LifecycleEnum";
import ContainerHasClassWithInvalidLifecycle from "../errors/ContainerHasClassWithInvalidLifecycle";
import SimpleContainer from "./SimpleContainer";
import InstancesMap from "./helpers/InstancesMap";
import PersistentInstanceProxyFactory from './helpers/PersistentInstanceProxyFactory';

class PersistentContainer extends SimpleContainer {
    constructor(parent, classTreeList = []) {
        const classWithInvalidLifecycle = classTreeList.find(cls => cls.baseNode.lifecycle.id !== LifecycleEnum.Persistent);
        if (classWithInvalidLifecycle) {
            throw new ContainerHasClassWithInvalidLifecycle('Persistent', classWithInvalidLifecycle);
        }
        super(classTreeList);
        this.#parent = parent;
        this.#init();
    }

    #parent;
    #instances = new InstancesMap();

    #init() {
        // ToDo logs
        this.classTreeList.forEach(cls => {
            // if (this.#instances.hasBySymbol(cls.baseNode.key.key)) {
            //     return;
            // }
            // const key = cls.baseNode.key.key;
            // const persistedValue = localStorage.getItem(key);
            // if (persistedValue) {
            //     const instance = this.#generateInstanceByPersistedValue(key, persistedValue);
            // }
            if (this.#instances.has(key)) {
                return;
            }
            console.log(key);
            this.#buildInstance(cls);
        });
    }

    #buildInstance(clazz) {
        const instance = this._buildInstance(clazz);
        return instance;
    }

    addInstance(key, instance) {
        localStorage.setItem(key.key, JSON.stringify(instance));
        this.#instances.set(key.key, PersistentInstanceProxyFactory.create(instance, key.key));
    }

    #generateInstanceByPersistedValue(key, persistedValue) {
        const clsTree = this.classTreeList.find(cls => cls.baseNode.key.key === key);

    }

    getInstance(key) {
        // return this.#instances.getBySymbol(key.key);
        return this.#instances.get(key.key);
    }

    getParent() {
        return this.#parent;
    }
}

export default PersistentContainer;