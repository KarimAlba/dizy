function cov_21ui4z6jox(){var path="D:\\Programming\\xyz\\dizy\\src\\test\\DependencyTreeFactory.test.js";var hash="14731c37d3de68614d781fc7ad56ae3047835cd8";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Programming\\xyz\\dizy\\src\\test\\DependencyTreeFactory.test.js",statementMap:{"0":{start:{line:6,column:0},end:{line:51,column:3}},"1":{start:{line:7,column:1},end:{line:50,column:4}},"2":{start:{line:8,column:2},end:{line:11,column:5}},"3":{start:{line:9,column:27},end:{line:9,column:77}},"4":{start:{line:9,column:33},end:{line:9,column:77}},"5":{start:{line:10,column:3},end:{line:10,column:120}},"6":{start:{line:13,column:2},end:{line:20,column:5}},"7":{start:{line:14,column:27},end:{line:14,column:112}},"8":{start:{line:14,column:33},end:{line:14,column:112}},"9":{start:{line:15,column:3},end:{line:19,column:5}},"10":{start:{line:22,column:2},end:{line:29,column:5}},"11":{start:{line:23,column:27},end:{line:23,column:112}},"12":{start:{line:23,column:33},end:{line:23,column:112}},"13":{start:{line:24,column:3},end:{line:28,column:5}},"14":{start:{line:31,column:2},end:{line:39,column:5}},"15":{start:{line:32,column:27},end:{line:33,column:107}},"16":{start:{line:33,column:4},end:{line:33,column:107}},"17":{start:{line:34,column:3},end:{line:38,column:5}},"18":{start:{line:41,column:2},end:{line:49,column:5}},"19":{start:{line:42,column:3},end:{line:48,column:5}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:6,column:34},end:{line:6,column:35}},loc:{start:{line:6,column:40},end:{line:51,column:1}},line:6},"1":{name:"(anonymous_1)",decl:{start:{line:7,column:58},end:{line:7,column:59}},loc:{start:{line:7,column:64},end:{line:50,column:2}},line:7},"2":{name:"(anonymous_2)",decl:{start:{line:8,column:69},end:{line:8,column:70}},loc:{start:{line:8,column:75},end:{line:11,column:3}},line:8},"3":{name:"(anonymous_3)",decl:{start:{line:9,column:27},end:{line:9,column:28}},loc:{start:{line:9,column:33},end:{line:9,column:77}},line:9},"4":{name:"(anonymous_4)",decl:{start:{line:13,column:55},end:{line:13,column:56}},loc:{start:{line:13,column:61},end:{line:20,column:3}},line:13},"5":{name:"(anonymous_5)",decl:{start:{line:14,column:27},end:{line:14,column:28}},loc:{start:{line:14,column:33},end:{line:14,column:112}},line:14},"6":{name:"(anonymous_6)",decl:{start:{line:22,column:68},end:{line:22,column:69}},loc:{start:{line:22,column:74},end:{line:29,column:3}},line:22},"7":{name:"(anonymous_7)",decl:{start:{line:23,column:27},end:{line:23,column:28}},loc:{start:{line:23,column:33},end:{line:23,column:112}},line:23},"8":{name:"(anonymous_8)",decl:{start:{line:31,column:89},end:{line:31,column:90}},loc:{start:{line:31,column:95},end:{line:39,column:3}},line:31},"9":{name:"(anonymous_9)",decl:{start:{line:32,column:27},end:{line:32,column:28}},loc:{start:{line:33,column:4},end:{line:33,column:107}},line:33},"10":{name:"(anonymous_10)",decl:{start:{line:41,column:52},end:{line:41,column:53}},loc:{start:{line:41,column:58},end:{line:49,column:3}},line:41}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"14731c37d3de68614d781fc7ad56ae3047835cd8"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_21ui4z6jox=function(){return actualCoverage;};}return actualCoverage;}cov_21ui4z6jox();import{assert}from"chai";import DependencyTreeFactory from"../containers/helpers/DependencyTreeFactory.js";import DependencyTreeFixture from"./fixtures/DependencyTreeFixture.js";import DependencyTree from"../containers/helpers/DependencyTree.js";cov_21ui4z6jox().s[0]++;describe("DependencyTreeFactory",()=>{cov_21ui4z6jox().f[0]++;cov_21ui4z6jox().s[1]++;describe("DependencyTreeFactory.createDependencyTree()",()=>{cov_21ui4z6jox().f[1]++;cov_21ui4z6jox().s[2]++;it("createDependencyTree() without arguments will throw an error",()=>{cov_21ui4z6jox().f[2]++;cov_21ui4z6jox().s[3]++;const funcThrowsError=()=>{cov_21ui4z6jox().f[3]++;cov_21ui4z6jox().s[4]++;return DependencyTreeFactory.createDependencyTree();};cov_21ui4z6jox().s[5]++;assert.throws(funcThrowsError,Error,"Argument 'baseClazz' is invalid. 'baseClazz' must be an instance of DIClazz");});cov_21ui4z6jox().s[6]++;it("createDependencyTree() with empty allClasses[]",()=>{cov_21ui4z6jox().f[4]++;cov_21ui4z6jox().s[7]++;const funcThrowsError=()=>{cov_21ui4z6jox().f[5]++;cov_21ui4z6jox().s[8]++;return DependencyTreeFactory.createDependencyTree(DependencyTreeFixture.baseClazz,[]);};cov_21ui4z6jox().s[9]++;assert.throws(funcThrowsError,Error,"Argument 'allClasses' is invalid. 'allClasses' must be a not empty array of DIClazz instances");});cov_21ui4z6jox().s[10]++;it("createDependencyTree() with allClasses, that's not an array",()=>{cov_21ui4z6jox().f[6]++;cov_21ui4z6jox().s[11]++;const funcThrowsError=()=>{cov_21ui4z6jox().f[7]++;cov_21ui4z6jox().s[12]++;return DependencyTreeFactory.createDependencyTree(DependencyTreeFixture.baseClazz,{});};cov_21ui4z6jox().s[13]++;assert.throws(funcThrowsError,Error,"Argument 'allClasses' is invalid. 'allClasses' must be a not empty array of DIClazz instances");});cov_21ui4z6jox().s[14]++;it("createDependencyTree() with allClasses, that's an array of not DIClazz instances",()=>{cov_21ui4z6jox().f[8]++;cov_21ui4z6jox().s[15]++;const funcThrowsError=()=>{cov_21ui4z6jox().f[9]++;cov_21ui4z6jox().s[16]++;return DependencyTreeFactory.createDependencyTree(DependencyTreeFixture.baseClazz,[{test:1},{test:2}]);};cov_21ui4z6jox().s[17]++;assert.throws(funcThrowsError,Error,"Argument 'allClasses' is invalid. 'allClasses' must be a not empty array of DIClazz instances");});cov_21ui4z6jox().s[18]++;it("createDependencyTree() with valid arguments",()=>{cov_21ui4z6jox().f[10]++;cov_21ui4z6jox().s[19]++;assert.deepEqual(DependencyTreeFactory.createDependencyTree(DependencyTreeFixture.baseClazz,[DependencyTreeFixture.baseClazz,DependencyTreeFixture.derivedClazz]),new DependencyTree(DependencyTreeFixture.baseNode));});});});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjF1aTR6NmpveCIsImFjdHVhbENvdmVyYWdlIiwiYXNzZXJ0IiwiRGVwZW5kZW5jeVRyZWVGYWN0b3J5IiwiRGVwZW5kZW5jeVRyZWVGaXh0dXJlIiwiRGVwZW5kZW5jeVRyZWUiLCJzIiwiZGVzY3JpYmUiLCJmIiwiaXQiLCJmdW5jVGhyb3dzRXJyb3IiLCJjcmVhdGVEZXBlbmRlbmN5VHJlZSIsInRocm93cyIsIkVycm9yIiwiYmFzZUNsYXp6IiwidGVzdCIsImRlZXBFcXVhbCIsImRlcml2ZWRDbGF6eiIsImJhc2VOb2RlIl0sInNvdXJjZXMiOlsiRGVwZW5kZW5jeVRyZWVGYWN0b3J5LnRlc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSBcImNoYWlcIjtcclxuaW1wb3J0IERlcGVuZGVuY3lUcmVlRmFjdG9yeSBmcm9tIFwiLi4vY29udGFpbmVycy9oZWxwZXJzL0RlcGVuZGVuY3lUcmVlRmFjdG9yeS5qc1wiO1xyXG5pbXBvcnQgRGVwZW5kZW5jeVRyZWVGaXh0dXJlIGZyb20gXCIuL2ZpeHR1cmVzL0RlcGVuZGVuY3lUcmVlRml4dHVyZS5qc1wiO1xyXG5pbXBvcnQgRGVwZW5kZW5jeVRyZWUgZnJvbSBcIi4uL2NvbnRhaW5lcnMvaGVscGVycy9EZXBlbmRlbmN5VHJlZS5qc1wiO1xyXG5cclxuZGVzY3JpYmUoXCJEZXBlbmRlbmN5VHJlZUZhY3RvcnlcIiwgKCkgPT4ge1xyXG5cdGRlc2NyaWJlKFwiRGVwZW5kZW5jeVRyZWVGYWN0b3J5LmNyZWF0ZURlcGVuZGVuY3lUcmVlKClcIiwgKCkgPT4ge1xyXG5cdFx0aXQoXCJjcmVhdGVEZXBlbmRlbmN5VHJlZSgpIHdpdGhvdXQgYXJndW1lbnRzIHdpbGwgdGhyb3cgYW4gZXJyb3JcIiwgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBmdW5jVGhyb3dzRXJyb3IgPSAoKSA9PiBEZXBlbmRlbmN5VHJlZUZhY3RvcnkuY3JlYXRlRGVwZW5kZW5jeVRyZWUoKTtcclxuXHRcdFx0YXNzZXJ0LnRocm93cyhmdW5jVGhyb3dzRXJyb3IsIEVycm9yLCBcIkFyZ3VtZW50ICdiYXNlQ2xhenonIGlzIGludmFsaWQuICdiYXNlQ2xhenonIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgRElDbGF6elwiKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGl0KFwiY3JlYXRlRGVwZW5kZW5jeVRyZWUoKSB3aXRoIGVtcHR5IGFsbENsYXNzZXNbXVwiLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGZ1bmNUaHJvd3NFcnJvciA9ICgpID0+IERlcGVuZGVuY3lUcmVlRmFjdG9yeS5jcmVhdGVEZXBlbmRlbmN5VHJlZShEZXBlbmRlbmN5VHJlZUZpeHR1cmUuYmFzZUNsYXp6LCBbXSk7XHJcblx0XHRcdGFzc2VydC50aHJvd3MoXHJcblx0XHRcdFx0ZnVuY1Rocm93c0Vycm9yLFxyXG5cdFx0XHRcdEVycm9yLFxyXG5cdFx0XHRcdFwiQXJndW1lbnQgJ2FsbENsYXNzZXMnIGlzIGludmFsaWQuICdhbGxDbGFzc2VzJyBtdXN0IGJlIGEgbm90IGVtcHR5IGFycmF5IG9mIERJQ2xhenogaW5zdGFuY2VzXCIsXHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRpdChcImNyZWF0ZURlcGVuZGVuY3lUcmVlKCkgd2l0aCBhbGxDbGFzc2VzLCB0aGF0J3Mgbm90IGFuIGFycmF5XCIsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgZnVuY1Rocm93c0Vycm9yID0gKCkgPT4gRGVwZW5kZW5jeVRyZWVGYWN0b3J5LmNyZWF0ZURlcGVuZGVuY3lUcmVlKERlcGVuZGVuY3lUcmVlRml4dHVyZS5iYXNlQ2xhenosIHt9KTtcclxuXHRcdFx0YXNzZXJ0LnRocm93cyhcclxuXHRcdFx0XHRmdW5jVGhyb3dzRXJyb3IsXHJcblx0XHRcdFx0RXJyb3IsXHJcblx0XHRcdFx0XCJBcmd1bWVudCAnYWxsQ2xhc3NlcycgaXMgaW52YWxpZC4gJ2FsbENsYXNzZXMnIG11c3QgYmUgYSBub3QgZW1wdHkgYXJyYXkgb2YgRElDbGF6eiBpbnN0YW5jZXNcIixcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGl0KFwiY3JlYXRlRGVwZW5kZW5jeVRyZWUoKSB3aXRoIGFsbENsYXNzZXMsIHRoYXQncyBhbiBhcnJheSBvZiBub3QgRElDbGF6eiBpbnN0YW5jZXNcIiwgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBmdW5jVGhyb3dzRXJyb3IgPSAoKSA9PlxyXG5cdFx0XHRcdERlcGVuZGVuY3lUcmVlRmFjdG9yeS5jcmVhdGVEZXBlbmRlbmN5VHJlZShEZXBlbmRlbmN5VHJlZUZpeHR1cmUuYmFzZUNsYXp6LCBbeyB0ZXN0OiAxIH0sIHsgdGVzdDogMiB9XSk7XHJcblx0XHRcdGFzc2VydC50aHJvd3MoXHJcblx0XHRcdFx0ZnVuY1Rocm93c0Vycm9yLFxyXG5cdFx0XHRcdEVycm9yLFxyXG5cdFx0XHRcdFwiQXJndW1lbnQgJ2FsbENsYXNzZXMnIGlzIGludmFsaWQuICdhbGxDbGFzc2VzJyBtdXN0IGJlIGEgbm90IGVtcHR5IGFycmF5IG9mIERJQ2xhenogaW5zdGFuY2VzXCIsXHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRpdChcImNyZWF0ZURlcGVuZGVuY3lUcmVlKCkgd2l0aCB2YWxpZCBhcmd1bWVudHNcIiwgKCkgPT4ge1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKFxyXG5cdFx0XHRcdERlcGVuZGVuY3lUcmVlRmFjdG9yeS5jcmVhdGVEZXBlbmRlbmN5VHJlZShEZXBlbmRlbmN5VHJlZUZpeHR1cmUuYmFzZUNsYXp6LCBbXHJcblx0XHRcdFx0XHREZXBlbmRlbmN5VHJlZUZpeHR1cmUuYmFzZUNsYXp6LFxyXG5cdFx0XHRcdFx0RGVwZW5kZW5jeVRyZWVGaXh0dXJlLmRlcml2ZWRDbGF6eixcclxuXHRcdFx0XHRdKSxcclxuXHRcdFx0XHRuZXcgRGVwZW5kZW5jeVRyZWUoRGVwZW5kZW5jeVRyZWVGaXh0dXJlLmJhc2VOb2RlKSxcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5c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