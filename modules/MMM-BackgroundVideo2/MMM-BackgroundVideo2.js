
Module.register("MMM-BackgroundVideo2", {
  getDom: function () {
    const video = document.createElement("video");
    video.id = "video-background-2";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.src = this.file("bg2.mp4");
    return video;
  },
  getStyles: function () {
    return ["MMM-BackgroundVideo2.css"];
  }
});
