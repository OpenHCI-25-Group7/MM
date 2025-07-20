Module.register("MMM-ProximityPageSwitcher", {
  defaults: {
    endpoint: "http://172.20.10.3:5000/display_content/distance",
    checkInterval: 3000,
    threshold: 100, // 小於這距離算「靠近」
  },

  start() {
    this.currentPage = null;
    this.checkDistance();
    setInterval(() => {
      this.checkDistance();
    }, this.config.checkInterval);
  },

  checkDistance() {
    fetch(this.config.endpoint)
      .then((res) => res.json())
      .then((data) => {
        const distance = data.distance;
        const isNear = distance <= this.config.threshold;

        const newPage = isNear ? 0 : 1;
        if (this.currentPage !== newPage) {
          this.sendNotification("PAGE_CHANGED", newPage);
          this.currentPage = newPage;
        }
      })
      .catch((err) => {
        console.error("❌ 無法取得距離：", err);
      });
  }
});
