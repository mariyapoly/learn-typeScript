// ================== union data type ========================
let userId: number | string | boolean;

userId = 256;
userId = "jhfhf";
userId = true;

function displayUserInfo(userInfoId: number | string) {
  console.log(userId);
}
displayUserInfo(122);
displayUserInfo("122");
