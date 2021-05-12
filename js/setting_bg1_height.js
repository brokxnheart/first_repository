const wrap = document.querySelector(".wrap");
const bg1 = document.querySelector("#bg1");
const wrapHeight = wrap.offsetHeight; // Высота с рамками

function callOnLoad() {
  // `${}` ИНТЕРПОЛЯЦИЯ
  const calcHeight = wrapHeight - 1340;
  bg1.style.height = calcHeight + "px";
}

window.onload = callOnLoad();
