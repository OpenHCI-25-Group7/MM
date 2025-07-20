
Module.register("MMM-BackgroundVideo5", {
  getDom: function () {
    const video = document.createElement("video");
    video.id = "video-background-5";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.src = this.file("bg5.mp4");
    return video;
  },
  getStyles: function () {
    return ["MMM-BackgroundVideo5.css"];
  }
});
