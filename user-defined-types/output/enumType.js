"use strict";
// ============= enum Type =============
// can not store any duplicate data it store only constants
// ========== number enum ===========
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 5] = "readData";
    RequestType[RequestType["saveData"] = 9] = "saveData";
    RequestType[RequestType["deleteData"] = 10] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType.readData);
var RequestType2;
(function (RequestType2) {
    RequestType2[RequestType2["readData"] = 0] = "readData";
    RequestType2[RequestType2["saveData"] = 1] = "saveData";
    RequestType2[RequestType2["deleteData"] = 2] = "deleteData";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2);
// ========= string enum ==========
var RequestTypeString;
(function (RequestTypeString) {
    RequestTypeString["readData"] = "READ_DATA";
    RequestTypeString["saveData"] = "SAVE_DATA";
    RequestTypeString["deleteDta"] = "DELETE_DATA";
})(RequestTypeString || (RequestTypeString = {}));
// console.log(RequestTypeString);
var RequestTypeString2;
(function (RequestTypeString2) {
    RequestTypeString2["readData"] = "Hello";
    RequestTypeString2["saveData"] = "World";
})(RequestTypeString2 || (RequestTypeString2 = {}));
// console.log(RequestTypeString2["saveData"]);
// ========== heterogeneous enum =========
var RequestTypeMixed;
(function (RequestTypeMixed) {
    RequestTypeMixed["readData"] = "READ_DATA";
    RequestTypeMixed["saveData"] = "SAVE_DATA";
    RequestTypeMixed[RequestTypeMixed["id"] = 235] = "id";
})(RequestTypeMixed || (RequestTypeMixed = {}));
console.log(RequestTypeMixed);
