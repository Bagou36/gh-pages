// 獲取側邊菜單和按鈕
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const offCanvas = document.querySelector(".off-canvas");
const mainCanvas = document.querySelector(".dialog-off-canvas-main-canvas");

// 開啟側邊菜單
openBtn.addEventListener("click", () => {
    offCanvas.style.left = "0";  // 顯示側邊菜單
    mainCanvas.classList.add("menu-open");  // 主內容區偏移
});

// 關閉側邊菜單
closeBtn.addEventListener("click", () => {
    offCanvas.style.left = "-250px";  // 隱藏側邊菜單
    mainCanvas.classList.remove("menu-open");  // 恢復主內容區位置
});
