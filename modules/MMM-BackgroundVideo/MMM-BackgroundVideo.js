Module.register("MMM-BackgroundVideo", {
  videoElement: null,

  getDom: function () {
    const video = document.createElement("video");
    video.id = "video-background";
    video.src = this.file("bg.mp4");

    video.autoplay = false;
    video.loop = false;
    video.controls = false;
    video.muted = true;
    video.playsInline = true;

    // 載入後停在第一幀
    video.addEventListener("loadeddata", () => {
      video.currentTime = 0;
      video.pause();
    });

    // 播放完後停在最後一幀
    video.onended = () => {
      video.pause();
      video.currentTime = video.duration;
    };

    this.videoElement = video;
    return video;
  },

  // 提供外部可呼叫的方法
  notificationReceived(notification, payload, sender) {
    if (notification === "PLAY_BACKGROUND_VIDEO" && this.videoElement) {
      this.videoElement.currentTime = 0;
      this.videoElement.play();
    }
  },

  getStyles: function () {
    return ["MMM-BackgroundVideo.css"];
  }
});
