Module.register("MMM-InfoPage", {
    getDom() {
        const wrapper = document.createElement("div");
        wrapper.className = "MMM-InfoPage";
        wrapper.innerHTML = `
            <div class="container-box">
                <!-- 📅 左側日曆 -->
                <div class="calendar">
                    <h5>Jul 2025</h5>
                    <ul class="collection">
                        <li class="collection-item">S 23 <span class="dot"></span></li>
                        <li class="collection-item">M 24</li>
                        <li class="collection-item">T 25</li>
                        <li class="collection-item">W 26 <span class="dot"></span></li>
                        <li class="collection-item">R 27 <span class="dot"></span></li>
                        <li class="collection-item">F 27 <span class="dot"></span></li>
                        <li class="collection-item">S 30</li>
                        <li class="collection-item">M 31</li>
                    </ul>

                    <h5>Aug 2025</h5>
                    <ul class="collection">
                        <li class="collection-item">T 01</li>
                        <li class="collection-item">W 02 <span class="dot"></span></li>
                        <li class="collection-item">R 03 <span class="dot"></span></li>
                    </ul>
                </div>

                <!-- 📖 右側內容 -->
                <div class="record">
                    <div>
                        <span class="grey-text">偏見事件記錄</span>
                        <h6>Jul 29 星期六</h6>
                        <ul>
                            <li>叔叔說「他講話怪怪的像外勞」，全場尷尬沉默。</li>
                            <li>媽媽說「隔壁小明都第一名」，孩子情緒下降。</li>
                        </ul>
                    </div>
                    <button class="btn-flat custom">完成</button>
                </div>
            </div>
        `;
        return wrapper;
    },

    getStyles() {
        return ["MMM-InfoPage.css"];
    }
});