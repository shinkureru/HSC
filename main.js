import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';



  // -----------------------------定義各城市對應的鄉鎮區域資料
  const districtData = {
    "1": ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"],

    "2": ["板橋區", "三重區", "中和區", "永和區", "新莊區", "新店區", "樹林區", "鶯歌區", "三峽區", "淡水區", "汐止區", "瑞芳區", "土城區", "蘆洲區", "五股區", "泰山區", "林口區", "深坑區", "石碇區", "坪林區", "三芝區", "石門區", "八里區", "平溪區", "雙溪區", "貢寮區", "金山區", "萬里區", "烏來區"],

    "3": ["桃園區", "中壢區", "平鎮區", "八德區", "楊梅區", "蘆竹區", "大溪區", "龍潭區", "龜山區", "大園區", "觀音區", "新屋區", "復興區"],

    "4": ["中區", "東區", "南區", "西區", "北區", "北屯區", "西屯區", "南屯區", "太平區", "大里區", "霧峰區", "烏日區", "豐原區", "后里區", "石岡區", "東勢區", "和平區", "新社區", "潭子區", "大雅區", "神岡區", "大肚區", "沙鹿區", "龍井區", "梧棲區", "清水區", "大甲區", "外埔區", "后里區"],

    "5": ["中西區", "東區", "南區", "北區", "安平區", "安南區", "永康區", "歸仁區", "新化區", "左鎮區", "玉井區", "楠西區", "南化區", "仁德區", "關廟區", "龍崎區", "官田區", "麻豆區", "佳里區", "西港區", "七股區", "將軍區", "學甲區", "北門區", "新營區", "後壁區", "白河區", "東山區", "六甲區", "下營區", "柳營區", "鹽水區", "善化區", "大內區", "山上區", "新市區", "安定區"],

    "6": ["新興區", "前金區", "苓雅區", "鹽埕區", "鼓山區", "旗津區", "前鎮區", "三民區", "左營區", "楠梓區", "小港區", "苓雅區", "大寮區", "大樹區", "大社區", "仁武區", "鳥松區", "岡山區", "橋頭區", "燕巢區", "田寮區", "阿蓮區", "路竹區", "湖內區", "茄萣區", "永安區", "彌陀區", "梓官區", "旗山區", "美濃區", "六龜區", "甲仙區", "杉林區", "內門區", "茂林區", "桃源區", "那瑪夏區"],

    "7": ["中正區", "七堵區", "暖暖區", "中山區", "安樂區", "信義區", "仁愛區"],

    "8": ["東區", "北區", "香山區"],

    "9": ["東區", "西區"],

    "10": ["宜蘭市", "羅東鎮", "蘇澳鎮", "頭城鎮", "礁溪鄉", "壯圍鄉", "員山鄉", "冬山鄉", "五結鄉", "三星鄉", "大同鄉", "南澳鄉"],

    "11": ["竹北市", "竹東鎮", "新埔鎮", "關西鎮", "湖口鄉", "橫山鄉", "尖石鄉", "北埔鄉", "芎林鄉", "寶山鄉", "峨眉鄉", "五峰鄉"],

    "12": ["苗栗市", "頭份市", "苑裡鎮", "通霄鎮", "竹南鎮", "後龍鎮", "卓蘭鎮", "大湖鄉", "公館鄉", "銅鑼鄉", "南庄鄉", "頭屋鄉", "三義鄉", "西湖鄉", "造橋鄉", "三灣鄉", "獅潭鄉", "泰安鄉"],

    "13": ["彰化市", "鹿港鎮", "和美鎮", "員林市", "溪湖鎮", "二林鎮", "田中鎮", "北斗鎮", "花壇鄉", "芬園鄉", "大村鄉", "永靖鄉", "伸港鄉", "線西鄉", "福興鄉", "秀水鄉", "埔心鄉", "埔鹽鄉", "大城鄉", "芳苑鄉", "竹塘鄉", "社頭鄉", "二水鄉", "田尾鄉"],

    "14": ["南投市", "草屯鎮", "埔里鎮", "竹山鎮", "集集鎮", "名間鄉", "鹿谷鄉", "中寮鄉", "魚池鄉", "國姓鄉", "水里鄉", "信義鄉", "仁愛鄉"],

    "15": ["斗六市", "斗南鎮", "虎尾鎮", "西螺鎮", "土庫鎮", "北港鎮", "古坑鄉", "大埤鄉", "莿桐鄉", "林內鄉", "二崙鄉", "崙背鄉", "麥寮鄉", "東勢鄉", "褒忠鄉", "臺西鄉", "元長鄉", "水林鄉", "四湖鄉", "口湖鄉"],

    "16": ["太保市", "朴子市", "布袋鎮", "大林鎮", "民雄鄉", "溪口鄉", "新港鄉", "六腳鄉", "東石鄉", "義竹鄉", "鹿草鄉", "水上鄉", "中埔鄉", "竹崎鄉", "梅山鄉", "番路鄉", "大埔鄉", "阿里山鄉"],

    "17": ["屏東市", "潮州鎮", "東港鎮", "恆春鎮", "萬丹鄉", "長治鄉", "麟洛鄉", "九如鄉", "里港鄉", "高樹鄉", "鹽埔鄉", "萬巒鄉", "內埔鄉", "竹田鄉", "新埤鄉", "枋寮鄉", "新園鄉", "崁頂鄉", "林邊鄉", "南州鄉", "佳冬鄉", "琉球鄉", "車城鄉", "滿州鄉", "枋山鄉", "霧台鄉", "瑪家鄉", "泰武鄉", "來義鄉", "春日鄉", "獅子鄉", "牡丹鄉", "三地門鄉"],

    "18": ["台東市", "成功鎮", "關山鎮", "卑南鄉", "鹿野鄉", "池上鄉", "東河鄉", "長濱鄉", "太麻里鄉", "金峰鄉", "大武鄉", "達仁鄉", "綠島鄉", "蘭嶼鄉", "延平鄉", "海端鄉"],

    "19": ["花蓮市", "鳳林鎮", "玉里鎮", "新城鄉", "吉安鄉", "壽豐鄉", "秀林鄉", "光復鄉", "豐濱鄉", "瑞穗鄉", "萬榮鄉", "卓溪鄉"]
};

// 監聽第一個下拉選單的變更事件
document.getElementById('city-select').addEventListener('change', function() {
    const cityValue = this.value; // 取得選中的城市 value
    const districtSelect = document.getElementById('district-select');

    // 清空原本的鄉鎮區域選項
    districtSelect.innerHTML = '<option selected>選擇鄉鎮</option>';

    // 檢查是否有對應的鄉鎮資料
    if (districtData[cityValue]) {
        // 動態生成對應城市的鄉鎮選項
        districtData[cityValue].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
});





//-----------------------------計算文字內容的字數
const textarea = document.getElementById('form-side-section2');
const charCount = document.getElementById('char-count');

textarea.addEventListener('input', function() {
    const currentLength = textarea.value.length;
    const maxLength = textarea.getAttribute('maxlength');
    charCount.textContent = `(${currentLength}/${maxLength})`;
});





//-----------------------------上傳檔案

document.getElementById('upload-btn').addEventListener('click', function () {
    document.getElementById('file-input').click();  // 點擊按鈕觸發文件選擇框
});

const fileInput = document.getElementById('file-input');
const fileList = document.getElementById('file-list');
const fileCount = document.getElementById('file-count');
let filesArray = [];

// 當檔案變更時觸發
fileInput.addEventListener('change', function () {
    const files = Array.from(fileInput.files);
    filesArray = [...filesArray, ...files];  // 合併新舊檔案
    updateFileList();  // 更新檔案列表
});

// 更新檔案列表
function updateFileList() {
    fileList.innerHTML = '';  // 清空檔案列表

    filesArray.forEach((file, index) => {
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');

        // 檔案名稱截斷並附上刪除按鈕
        fileItem.innerHTML = `
            <span class="file-name">${truncateFileName(file.name)}</span>
            <span class="remove-btn" data-index="${index}">×</span>
        `;

        fileList.appendChild(fileItem);
    });

    updateFileCount();  // 更新檔案數量

    // 綁定刪除按鈕事件
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            filesArray.splice(index, 1);  // 刪除對應的檔案
            updateFileList();  // 刷新列表
        });
    });
}

// 更新檔案數量
function updateFileCount() {
    fileCount.textContent = `${filesArray.length}/4`;  // 更新文件計數
    if (filesArray.length >= 4) {
        fileInput.disabled = true;  // 達到上限禁用上傳
    } else {
        fileInput.disabled = false;
    }
}

// 檔案名稱截斷，顯示最多15個字元，並加上省略號
function truncateFileName(fileName) {
    const maxLength = 15;
    if (fileName.length > maxLength) {
        return fileName.substring(0, maxLength) + '...';
    }
    return fileName;
}


//-----------------------------動態地圖

const cityMaps = {
    1: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115631.5722585441!2d121.47910017113324!3d25.085383347991307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac6b61dbbd8b%3A0xbcd1baad5c06a482!2z5Y-w5YyX5biC!5e0!3m2!1szh-TW!2stw!4v1728116817556!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    2: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462898.1309488244!2d121.31514172296362!3d24.98680456523488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d5538b0b6645f%3A0x5aa90dfa6620edc0!2z5paw5YyX5biC!5e0!3m2!1szh-TW!2stw!4v1728116978640!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    3: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463395.22586989246!2d120.90253745216235!3d24.85444867783326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34683d0eceda863f%3A0x54e44f52583a486a!2z5qGD5ZyS5biC!5e0!3m2!1szh-TW!2stw!4v1728117000719!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    4: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232935.97344686996!2d120.46992109180279!3d24.184895464375046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d65575df2d1%3A0x8dd494fb51747b0a!2z5Y-w5Lit5biC5YyX5Y2A6Ie65Lit!5e0!3m2!1szh-TW!2stw!4v1728117039487!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    5: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469573.8294577664!2d120.01236947127515!3d23.15028099487726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7ccc953ffe13%3A0xd47f4caaa5dc764e!2z5Y-w5Y2X5biC!5e0!3m2!1szh-TW!2stw!4v1728117060040!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    6: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235569.33870583997!2d120.16627846694253!3d22.69957031354935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04fd209f4835%3A0x54511e7d86c87c09!2z6auY6ZuE5biC6byT5bGx5Y2A6auY6ZuE!5e0!3m2!1szh-TW!2stw!4v1728116756503!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    7: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115595.0400108313!2d121.63522292230058!3d25.124024472417375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d4dfdb8837495%3A0x9ef76baa45f26568!2z5Z-66ZqG5biC!5e0!3m2!1szh-TW!2stw!4v1728117141950!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    8: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57957.59655660243!2d120.92548402700079!3d24.783473412554738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346835db1a4b4b11%3A0xd409dcbcb5d33b0c!2z5paw56u55biC5paw56u5!5e0!3m2!1szh-TW!2stw!4v1728117188231!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    9: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58551.79644425417!2d120.40809681768613!3d23.478952087052324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e9431bd030075%3A0x30666786f16c696e!2zNjAw5ZiJ576p5biC!5e0!3m2!1szh-TW!2stw!4v1728117276611!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    10: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57973.75260018984!2d121.6806702908049!3d24.748858945472065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467e4ddc31c0ddf%3A0x1c84d5c90c224c22!2zMjYw5a6c6Jit57ij5a6c6Jit5biC!5e0!3m2!1szh-TW!2stw!4v1728117320934!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    11: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232010.54807128359!2d121.00739655321809!3d24.68686049855301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468412ca1674fd5%3A0x4061145f0e1f1fc9!2z5paw56u557ij!5e0!3m2!1szh-TW!2stw!4v1728117371175!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    12: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232329.9242031872!2d120.77692043202494!3d24.51471616385842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468548a0b5ad393%3A0xcca86fee4f60881b!2z6IuX5qCX57ij!5e0!3m2!1szh-TW!2stw!4v1728117513398!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    13: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233287.11888559666!2d120.29834346849451!3d23.99184889691016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469491eb5791475%3A0xd6e84b58ba347f27!2z5b2w5YyW57ij!5e0!3m2!1szh-TW!2stw!4v1728117539433!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    14: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467121.1446756255!2d120.65287007114833!3d23.8404963533947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468d6aa1a5d49ad%3A0x1348fba95f17f6da!2z5Y2X5oqV57ij!5e0!3m2!1szh-TW!2stw!4v1728117553161!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    15: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233859.08166637935!2d120.26978243052335!3d23.674235981762457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346eba2773c7f341%3A0x7ae4c47c03d12a95!2z6Zuy5p6X57ij!5e0!3m2!1szh-TW!2stw!4v1728117573490!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    16: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468605.6956816016!2d120.2078968594088!3d23.425017469419743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346eeb57bfbbaa51%3A0x97e5ee9d562a7635!2z5ZiJ576p57ij!5e0!3m2!1szh-TW!2stw!4v1728117586889!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    17: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472194.5510365208!2d120.29877159715178!3d22.3906061003629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471d94ee1742281%3A0xed215194b3a68355!2z5bGP5p2x57ij!5e0!3m2!1szh-TW!2stw!4v1728117603362!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    18: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942133.376511653!2d120.51072686248202!3d22.720490393479157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346fb8d2a52a0401%3A0xcf6871e475b3f2ff!2z5Y-w5p2x57ij!5e0!3m2!1szh-TW!2stw!4v1728117623846!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    19: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935016.7699227233!2d120.7206965747341!3d23.732781015756828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468b3c174281203%3A0x5ade37c6eafc1d73!2z6Iqx6JOu57ij!5e0!3m2!1szh-TW!2stw!4v1728117643197!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,

    
};


const citySelect = document.getElementById('city-select');
const mapContainer = document.getElementById('map-container');

// 根據城市選擇更新地圖
citySelect.addEventListener('change', function() {
    const selectedCity = citySelect.value; // 這裡的 selectedCity 是數字或者字符串都可以

    // 開始淡出
    mapContainer.classList.add('hidden');

    // 等待淡出效果完成後再更新地圖
    setTimeout(() => {
        if (cityMaps[selectedCity]) {  // 檢查 cityMaps 是否有對應的地圖
            mapContainer.innerHTML = cityMaps[selectedCity]; // 更新地圖 iframe
        } else {
            mapContainer.innerHTML = ''; // 如果沒有對應的城市，清空地圖
        }
        // 淡入新的地圖
        mapContainer.classList.remove('hidden');
    }, 500); // 等待與 CSS 中的 transition 時間相同
});




//-----------------------------表單驗證系統


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()