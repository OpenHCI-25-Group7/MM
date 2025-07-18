Module.register("MMM-Sunrise", {
  getScripts() {
    return ["suncalc.js"];
  },

  getDom() {
  const wrapper = document.createElement("div");
  wrapper.className = "sunrise-block";

  const now = new Date();
  const lat = 25.038;
  const lng = 121.5645;
  const times = SunCalc.getTimes(now, lat, lng);
  const sunrise = times.sunrise;

  const hour = sunrise.getHours().toString().padStart(2, "0");
  const minute = sunrise.getMinutes().toString().padStart(2, "0");
  const sunriseTime = `上午 ${hour}:${minute}`;

  // 建立圖示
  const icon = document.createElement("img");
  icon.className = "sun-icon";
  icon.src = "modules/MMM-Sunrise/icons/sunrise.png";

  // 建立文字區塊
  const textBlock = document.createElement("div");
  textBlock.className = "sun-text-block";

  const label = document.createElement("div");
  label.className = "sun-label";
  label.innerText = "日出";

  const time = document.createElement("div");
  time.className = "sun-time";
  time.innerText = sunriseTime;

  textBlock.appendChild(label);
  textBlock.appendChild(time);

  wrapper.appendChild(icon);
  wrapper.appendChild(textBlock);

  return wrapper;
},


  getStyles() {
    return ["MMM-Sunrise.css"];
  }
});
