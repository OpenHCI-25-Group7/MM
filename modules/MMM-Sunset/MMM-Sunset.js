Module.register("MMM-Sunset", {
  getScripts() {
  return ["suncalc.js"];
  },
  
  getDom() {
    const wrapper = document.createElement("div");
    wrapper.className = "sunset-block";

    const now = new Date();
    const lat = this.config.latitude || 25.0330;
    const lon = this.config.longitude || 121.5654;

    const times = SunCalc.getTimes(now, lat, lon);
    const sunset = times.sunset;
    const sunsetStr = sunset.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

    wrapper.innerHTML = `
      <div class="sun-time-title">
        <img class="sun-icon" src="modules/MMM-Sunset/icons/sunset.svg">
        <div class="sun-text-block">
          <div class="sun-label">日落</div>
          <div class="sun-time">${sunsetStr}</div>
        </div>
      </div>
    `;
    return wrapper;
  },

  getStyles() {
    return ["MMM-Sunset.css"];
  },

  defaults: {
    latitude: null,
    longitude: null,
  }
});
