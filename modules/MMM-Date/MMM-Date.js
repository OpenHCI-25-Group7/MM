Module.register("MMM-Date", {
  getDom() {
    const wrapper = document.createElement("div");
    wrapper.className = "date-block";

    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
    const weekdayStr = "週" + weekdays[now.getDay()];
    const dateStr = `${month}月${day}日，${weekdayStr}`;

    wrapper.innerHTML = `
      <div class="date-subtitle">${dateStr}</div>
    `;
    return wrapper;
  },

  getStyles() {
    return ["MMM-Date.css"];
  }
});
