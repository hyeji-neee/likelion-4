let count = 0;

const countBtn = document.querySelector("#countBtn");
const resetBtn = document.querySelector("#resetBtn");

countBtn.innerText = count;

countBtn.addEventListener("click", () => {
  countBtn.innerText = ++count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countBtn.innerText = count;
});

const colorSelect = document.querySelector("#colorSelect");
const colorBox = document.querySelector("#colorBox");

colorBox.style.width = "100px";
colorBox.style.height = "100px";
colorBox.style.backgroundColor = "gray";
colorBox.style.marginTop = "10px";

colorSelect.addEventListener("change", (e) => {
  console.log(e);
  colorBox.style.backgroundColor = e.target.value;
});

const nameForm = document.querySelector("#nameForm");
const nameInput = document.querySelector("#nameInput");
const submitResult = document.querySelector("#submitResult");

nameForm.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  submitResult.innerText = `안녕하세요, ${nameInput.value}님!`;
});
