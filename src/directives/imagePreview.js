export const imagePreview = {
  inserted(el) {
    var img = new Image();
    img.src = el.firstChild.src;

    if (!el.firstChild.src) return;

    // 创建一个loading
    let loadImg = document.createElement("img");
    loadImg.classList.add("img-loading");
    loadImg.src = require("../assets/loading.gif");
    el.appendChild(loadImg);
    el.style.background = "#F0F4F8";
    // 原图片加载出错
    img.onerror = () => {
      // 故意做的延时方便展示
      setTimeout(() => {
        el.classList.add("display-flex");
        el.style.background = "#333";
        el.innerHTML = `<span style="color: #fff;">图片已过期<br>无法查看</span>`;
      }, 1000)
    };
    img.onload = () => {
      el.removeChild(loadImg);
      el.style.background = "";
    };
  },
  update(el) {
    var img = new Image();
    img.src = el.firstChild.src;
    img.onerror = () => {
      el.classList.add("display-flex");
      el.style.background = "#333";
      el.innerHTML = `<span style="color: #fff;">图片已过期<br>无法查看</span>`;
    };
  }
};
