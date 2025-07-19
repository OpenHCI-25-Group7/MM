module.register("MMM-InfoPage", {
    getDom() {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
        <div class="row" style="margin: 0;">
        <!-- 📅 左側日曆 -->
        <div class="col s4" style="background: #f5f5f5; height: 100vh; padding: 1rem;">
            <h5>Jul 2025</h5>
            <ul class="collection">
            <li class="collection-item">S 23 <span class="new badge red" data-badge-caption=""></span></li>
            <li class="collection-item">M 24</li>
            <li class="collection-item">T 25</li>
            <li class="collection-item">W 26 <span class="new badge red" data-badge-caption=""></span></li>
            <li class="collection-item">R 27 <span class="new badge red" data-badge-caption=""></span></li>
            <li class="collection-item active">S 29</li>
            <li class="collection-item">S 30</li>
            <li class="collection-item">M 31</li>
            </ul>
            <h5>Aug 2025</h5>
            <ul class="collection">
            <li class="collection-item">T 01</li>
            <li class="collection-item">W 02 <span class="new badge red" data-badge-caption=""></span></li>
            <li class="collection-item">R 03 <span class="new badge red" data-badge-caption=""></span></li>
            </ul>
        </div>

        <!-- 📝 右側偏見紀錄 -->
        <div class="col s8" style="padding: 2rem;">
            <div class="card white z-depth-2">
            <div class="card-content">
                <span class="grey-text text-darken-1" style="font-size: 0.9rem;">偏見事件紀錄</span>
                <span class="card-title">Jul 29 星期六</span>
                <ul style="padding-left: 1rem; list-style-type: disc;">
                <li>叔叔說「他講話怪怪的像外勞」，全場尷尬沉默。</li>
                <li>媽媽說「隔壁小明都第一名」，孩子情緒下降。</li>
                </ul>
            </div>
            <div class="card-action">
                <a class="btn white black-text z-depth-1" style="border-radius: 8px;">完成</a>
            </div>
            </div>
        </div>
        </div>
    `;
    return wrapper;
},
    getStyles() {
        return ["MMM-InfoPage.css"];
    }
});