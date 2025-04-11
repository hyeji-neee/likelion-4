const btn = document.querySelector("#btn");

const handleClick1 = () => {
  console.log("첫 번째 함수");
};

const handleClick2 = () => {
  console.log("두 번째 함수");
};

btn.addEventListener("click", handleClick1);
btn.addEventListener("click", handleClick2);

btn.removeEventListener("click", handleClick1);
