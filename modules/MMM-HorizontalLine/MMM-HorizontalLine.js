Module.register("MMM-HorizontalLine", {
  getStyles() {
    return ["MMM-HorizontalLine.css"];
  },

  getDom() {
  const wrapper = document.createElement("div");
  wrapper.style.position = "relative"; // 加這行，建立定位上下文

  const line = document.createElement("div");
  line.className = "horizontal-line";

  wrapper.appendChild(line);
  return wrapper;
  }
});
