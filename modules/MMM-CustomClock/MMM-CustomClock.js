Module.register("MMM-CustomClock", {
  defaults: {
    updateInterval: 1000, // 每秒更新
  },

  start() {
    this.currentTime = this.getCurrentTime();
    this.timer = setInterval(() => {
      this.currentTime = this.getCurrentTime();
      this.updateDom();
    }, this.config.updateInterval);
  },

  getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  },

  getDom() {
    const wrapper = document.createElement("div");
    wrapper.className = "custom-clock-wrapper";
    wrapper.innerText = this.currentTime;
    return wrapper;
  },

  getStyles() {
    return ["MMM-CustomClock.css"];
  }
});
