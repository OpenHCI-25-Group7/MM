
Module.register("MMM-BackgroundVideo4", {
  getDom: function () {
    const video = document.createElement("video");
    video.id = "video-background-4";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.src = this.file("test.mp4");
    return video;
  },
  getStyles: function () {
    return ["MMM-BackgroundVideo4.css"];
  }
});
