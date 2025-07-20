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
      }else if (e.key === "4") {
        this.sendNotification("PAGE_CHANGED", 3); // 切到第 4 頁
        console.log("👉 切換到第 4 頁");
      }else if (e.key === "5") {
        this.sendNotification("PAGE_CHANGED", 4); // 切到第 5 頁
        console.log("👉 切換到第 5 頁");
      }else if (e.key === "6") {
        this.sendNotification("PAGE_CHANGED", 5); // 切到第 5 頁
        console.log("👉 切換到第 6 頁");
      }
    });
  },
})
// Module.register("MMM-KeyboardPageSwitcher", {
//   // 初始狀態變數
//   personNear: true,
//   weather: "晴天",
//   rainDuration: 0,
//   crackShown: false,
//   mode: 1,
//   lastPage: null,
//   manualOverrideUntil: 0, // ⬅️ 加入這行：手動優先期截止時間

//   start() {
//     console.log("✅ MMM-KeyboardPageSwitcher 啟動成功");

//     // ➤ 1. 手動切頁功能：保留原邏輯
//     document.addEventListener("keydown", (e) => {
//       const key = parseInt(e.key);
//       if (!isNaN(key) && key >= 1 && key <= 6) {
//         const pageIndex = key - 1;
//         this.sendNotification("PAGE_CHANGED", pageIndex);
//         //console.log(`👉 手動切換到第 ${pageIndex + 1} 頁`);
//         this.manualOverrideUntil = Date.now() + 10000; // ⏱ 10 秒手動優先
//       }
//     });

//     // ➤ 2. 每 2 秒自動檢查後端狀態
//     this.stateInterval = setInterval(this.fetchAndUpdateState.bind(this), 3000);
//   },

//   // 從後端抓狀態 + 套用邏輯
//   fetchAndUpdateState() {
//     fetch("http://172.20.10.3:5000:5000/display_content")
//       .then((res) => res.json())
//       .then((data) => {
//         // 從後端取得資料更新狀態
//         this.personNear = data.personNear;
//         this.weather = data.weather;
//         this.rainDuration = data.rainDuration;
//         this.mode = data.mode;

//         // 應用邏輯切換頁面
//         this.handleMirrorState();
//       })
//       .catch((err) => {
//         console.error("❌ 無法取得狀態資料:", err);
//       });
//   },

//   // 狀態邏輯處理（自動切頁）
//   handleMirrorState() {
//     // 若沒人 → 回天氣影片頁
//     if (!this.personNear) {
//       this.playWeatherVideo(this.weather);
//       this.switchPage(0);
//       return;
//     }

//     // 雨天持續超過兩分鐘 → 裂痕動畫
//     if ((this.weather === "小雨" || this.weather === "暴雨") && this.rainDuration > 120) {
//       if (!this.crackShown) {
//         this.crackShown = true;
//         this.playCrackAnimation();
//         this.logEvent("crackAnimation");
//       }
//       this.switchPage(1); // 頁面 1：裂痕頁
//       return;
//     }

//     // 天氣轉晴 → 消除裂痕動畫
//     if (this.crackShown && this.weather === "晴天") {
//       this.crackShown = false;
//       this.fadeOutCrackAnimation();
//       this.logEvent("crackFadeOut");
//       this.switchPage(0); // 回到影片頁
//       return;
//     }

//     // 晴天／陰天時 → 依據 mode 切換頁面
//     if (this.weather === "晴天" || this.weather === "陰天") {
//       switch (this.mode) {
//         case 1:
//           this.playWeatherVideo(this.weather);
//           this.switchPage(0);
//           break;
//         case 2:
//           this.showMirrorPage();
//           this.switchPage(1);
//           break;
//         case 3:
//           this.openBiasRecordPage();
//           this.logEvent("biasEventRecord");
//           this.switchPage(2);
//           break;
//         default:
//           this.keepUnchanged();
//       }
//     }
//   },

//   // 切換頁面 + 防止重複切換
//   switchPage(index) {
//     if (this.lastPage === index) return;
//     this.sendNotification("PAGE_CHANGED", index);
//     console.log(`🌀 自動切換到第 ${index + 1} 頁`);
//     this.lastPage = index;
//   },

//   // 視覺動作 & 後端紀錄（可串 UI 動畫）
//   playWeatherVideo(weather) {
//     console.log(`🌤 播放 ${weather} 影片與字幕`);
//   },
//   playCrackAnimation() {
//     console.log("💥 播放裂痕動畫");
//   },
//   fadeOutCrackAnimation() {
//     console.log("💨 裂痕動畫消失");
//   },
//   showMirrorPage() {
//     console.log("🪞 顯示鏡子互動頁面");
//   },
//   openBiasRecordPage() {
//     console.log("📘 顯示偏見事件紀錄頁面");
//   },
//   keepUnchanged() {
//     console.log("🔲 保持當前頁面不變");
//   },

//   logEvent(eventName) {
//     fetch("http://172.20.10.3:5000/log", {
//       method: "POST",
//       checkInterval: 3000,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         timestamp: new Date().toISOString(),
//         event: eventName,
//         weather: this.weather,
//         person_near: this.personNear,
//       }),
//     }).then(() => console.log(`✅ 已紀錄事件: ${eventName}`));
//   },

//   // 清除定時器（暫停／重啟模組用）
//   suspend() {
//     clearInterval(this.stateInterval);
//   },
//   resume() {
//     this.start();
//   }
// });