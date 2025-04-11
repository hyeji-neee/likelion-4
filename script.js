const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector("#toDoInput");
const toDoList = document.querySelector("#toDoList");

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault(); // 새로고침 방지

  const toDoText = toDoInput.value.trim(); // trim() -> 좌우 공백 없앰
  if (toDoText == "") return;

  const toDoItem = document.createElement("li");
  toDoItem.innerText = toDoText;
  toDoItem.className = "toDoItem"; // CSS 설정을 하기위해서 className을 줌

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "삭제";
  deleteBtn.className = "deleteBtn";

  deleteBtn.addEventListener("click", () => {
    toDoList.removeChild(toDoItem);
  });

  toDoItem.appendChild(deleteBtn);
  toDoList.appendChild(toDoItem);
  toDoInput.value = "";
});
