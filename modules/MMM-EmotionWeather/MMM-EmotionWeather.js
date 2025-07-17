Module.register("MMM-EmotionWeather", {
  defaults: {
    // 初始預設值，如果後續成功取得新內容，config 就會被更新
    emotionData: {
      emotion: "未知",
      weather: "未知",
      comment: "等待更新..."
    }
  },
    // 模組啟動時呼叫 (不要忘記不要直接用 arrow function，因為要保留 this)
  start() {
    console.log("✅ MMM-EmotionWeather 模組已載入！");
    // 初始呼叫一次
    this.updateContent();
    // 每分鐘呼叫一次 (60000 毫秒)
    setInterval(() => {
      this.updateContent();
    }, 60000);
  },
    // 定義發送 HTTP POST 並處理回傳資料的函數
  updateContent() {
    fetch('http://localhost:5000/display_content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // 如果你需要送出特定的資料，可在這裡調整
      body: JSON.stringify({ query: "getDisplayContent" })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (data.result) {
        const result = data.result;

        this.config.emotionData = {
          emotion: result.emotion || "未知",
          weather: result.weather || "未知",
          comment: result.fortune + " " + result.headline
        };

        this.updateDom();
      }
    })
    .catch(error => {
      console.error("Error fetching display content:", error);
    });
  },
    getDom() {
    const wrapper = document.createElement("div");
    const e = this.config.emotionData;

    if (e.weather === "未知" && e.emotion === "未知") {
      wrapper.innerHTML = `<div style="font-size: 24px; color: gray;">載入中...</div>`;
    } else {
      wrapper.innerHTML = `
        <div style="font-size: 48px; color: white;">家庭情緒天氣：${e.weather}（${e.emotion}）</div>
        <div style="font-size: 24px; color: gray;">${e.comment}</div>
      `;
    }

    return wrapper;
  }   
});
