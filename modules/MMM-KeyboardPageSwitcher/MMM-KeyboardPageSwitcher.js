Module.register("MMM-KeyboardPageSwitcher", {
  start() {
    console.log("✅ MMM-KeyboardPageSwitcher 啟動成功");

    document.addEventListener("keydown", (e) => {
      if (e.key === "1") {
        this.sendNotification("PAGE_CHANGED", 0); // 切到第 1 頁
        console.log("👉 切換到第 1 頁");
      } else if (e.key === "2") {
        this.sendNotification("PAGE_CHANGED", 1); // 切到第 2 頁
        console.log("👉 切換到第 2 頁");
      }else if (e.key === "3") {
        this.sendNotification("PAGE_CHANGED", 2); // 切到第 3 頁
        console.log("👉 切換到第 3 頁");
      }
    });
  },
})
