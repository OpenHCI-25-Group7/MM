
Module.register("MMM-BackgroundVideo", {
  getDom: function () {
    const video = document.createElement("video");
    video.id = "video-background";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.src = this.file("bg.mp4");
    return video;
  },
  getStyles: function () {
    return ["MMM-BackgroundVideo.css"];
  }
});
