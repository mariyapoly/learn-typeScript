// ============= enum Type =============

// can not store any duplicate data it store only constants

// ========== number enum ===========
enum RequestType {
  readData = 5,
  saveData = 9,
  deleteData,
}
// console.log(RequestType.readData);

enum RequestType2 {
  readData,
  saveData,
  deleteData,
}
// console.log(RequestType2);

// ========= string enum ==========
enum RequestTypeString {
  readData = "READ_DATA",
  saveData = "SAVE_DATA",
  deleteDta = "DELETE_DATA",
}
// console.log(RequestTypeString);

enum RequestTypeString2 {
  readData = "Hello",
  saveData = "World",
}
// console.log(RequestTypeString2["saveData"]);

// ========== heterogeneous enum =========
enum RequestTypeMixed {
  readData = "READ_DATA",
  saveData = "SAVE_DATA",
  id = 235,
}
console.log(RequestTypeMixed);
