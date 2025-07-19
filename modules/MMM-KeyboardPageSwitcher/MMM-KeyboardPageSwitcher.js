Module.register("MMM-KeyboardPageSwitcher", {
  // 1. 初始狀態
  personNear: true,
  weather: "暴雨",      // 可由外部通知更新
  rainDuration: 120,   // 秒
  buttonPressed: false,
  crackShown: false,

  start() {
    console.log("✅ MMM-KeyboardPageSwitcher 啟動成功");

    // 2. 手動切換：鍵盤 1/2/3
    document.addEventListener("keydown", (e) => {
      if (e.key === "1") {
        this.sendNotification("PAGE_CHANGED", 0);
        console.log("👉 手動切換到第 1 頁");
      } else if (e.key === "2") {
        this.sendNotification("PAGE_CHANGED", 1);
        console.log("👉 手動切換到第 2 頁");
      } else if (e.key === "3") {
        this.sendNotification("PAGE_CHANGED", 2);
        console.log("👉 手動切換到第 3 頁");
      }
    });

    // 3. 自動切換：每 2 秒檢查一次鏡子狀態
    this.handleInterval = setInterval(this.handleMirrorState.bind(this), 2000);
  },

  // 4. 外部通知接收：更新感測狀態或按鈕狀態
  notificationReceived(notification, payload) {
    if (notification === "BUTTON_PRESSED") {
      this.buttonPressed = true;
    }
    else if (notification === "UPDATE_SENSOR_STATE") {
      // payload 範例：{ personNear: false, weather: "晴天", rainDuration: 0 }
      Object.assign(this, payload);
    }
  },

  // 5. 核心邏輯：根據狀態決定播放動畫、發送切頁通知
  handleMirrorState() {
    // 5.1 沒人靠近：顯示天氣頁（頁面 0）
    if (!this.personNear) {
      this.playWeatherVideo(this.weather);
      this.sendNotification("PAGE_CHANGED", 0);
      return;
    }

    // 5.2 雨天且超過 120 秒：播放裂痕（頁面 1）
    if ((this.weather === "小雨" || this.weather === "暴雨") && this.rainDuration > 120) {
      if (!this.crackShown) {
        this.crackShown = true;
        this.playCrackAnimation();
        this.logEvent("crackAnimation");
        this.sendNotification("PAGE_CHANGED", 1);
      }
      return;
    }

    // 5.3 若已顯示裂痕，但天氣轉晴：淡出裂痕，回天氣頁（頁面 0）
    if (this.crackShown && this.weather === "晴天") {
      this.crackShown = false;
      this.fadeOutCrackAnimation();
      this.logEvent("crackFadeOut");
      this.sendNotification("PAGE_CHANGED", 0);
      return;
    }

    // 5.4 晴天／陰天 且按鈕已按：進入偏見紀錄（頁面 2）
    if (this.weather === "晴天" || this.weather === "陰天") {
      if (this.buttonPressed) {
        this.openBiasRecordPage();
        this.logEvent("biasEventRecord");
        this.sendNotification("PAGE_CHANGED", 2);
        this.buttonPressed = false; // 重置按鈕狀態
      } else {
        this.keepUnchanged();
      }
    }
  },

  // 6. 功能函式
  playWeatherVideo(weather) {
    console.log(`🌤 播放 ${weather} 影片與字幕`);
  },
  playCrackAnimation() {
    console.log("💥 播放裂痕動畫");
  },
  fadeOutCrackAnimation() {
    console.log("💨 裂痕動畫消失");
  },
  openBiasRecordPage() {
    console.log("📘 進入偏見事件紀錄頁面");
  },
  keepUnchanged() {
    console.log("🔲 畫面不變化");
  },

  // 7. 後端紀錄
  logEvent(eventName) {
    fetch("http://localhost:8000/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        event: eventName,
        weather: this.weather,
        person_near: this.personNear,
      }),
    }).then(() => console.log(`✅ 已紀錄事件: ${eventName}`));
  }
});
  // getDom: function () {
  //   const pageSwitcher = document.createElement("pageSwitcher");
  //   pageSwitcher.id = "page-switcher-display";
  //   pageSwitcher.innerHTML = `
  //     <div class="pageSwitcher-content">
  //     5555555555
  //     </div>
  //   `;
  // },
  // getStyles() {
  //   return ["MMM-KeyboardPageSwitcher.css"];
  // }




