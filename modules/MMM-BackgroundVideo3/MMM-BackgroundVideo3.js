
Module.register("MMM-BackgroundVideo3", {
  getDom: function () {
    const video = document.createElement("video");
    video.id = "video-background-3";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.src = this.file("test.mp4");
    return video;
  },
  getStyles: function () {
    return ["MMM-BackgroundVideo3.css"];
  }
});
