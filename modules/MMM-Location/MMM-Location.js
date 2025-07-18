Module.register("MMM-Location", {
  getDom() {
    const wrapper = document.createElement("div");
    wrapper.className = "location-block";

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const regionRaw = tz.split("/")[1] || "未知地區";
    const regionMap = {
      Taipei: "台北",
      Tokyo: "東京",
      Hong_Kong: "香港",
      Shanghai: "上海",
      New_York: "紐約",
      London: "倫敦"
    };
    const region = regionMap[regionRaw] || regionRaw.replace("_", "");

    wrapper.innerHTML = `
      <div class="location-title">
        <img src="modules/MMM-Location/icons/custom-location.svg" class="location-icon">
        ${region}
      </div>
    `;

    return wrapper;
  },

  getStyles() {
    return ["MMM-Location.css"];
  }
});
