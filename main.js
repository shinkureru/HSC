import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';



  // -----------------------------定義各城市對應的鄉鎮區域資料
  const districtData = {
    "1": ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"],

    "2": ["板橋區", "三重區", "中和區", "永和區", "新莊區", "新店區", "樹林區", "鶯歌區", "三峽區", "淡水區", "汐止區", "瑞芳區", "土城區", "蘆洲區", "五股區", "泰山區", "林口區", "深坑區", "石碇區", "坪林區", "三芝區", "石門區", "八里區", "平溪區", "雙溪區", "貢寮區", "金山區", "萬里區", "烏來區"],

    "3": ["桃園區", "中壢區", "平鎮區", "八德區", "楊梅區", "蘆竹區", "大溪區", "龍潭區", "龜山區", "大園區", "觀音區", "新屋區", "復興區"],

    "4": ["中區", "東區", "南區", "西區", "北區", "北屯區", "西屯區", "南屯區", "太平區", "大里區", "霧峰區", "烏日區", "豐原區", "后里區", "石岡區", "東勢區", "和平區", "新社區", "潭子區", "大雅區", "神岡區", "大肚區", "沙鹿區", "龍井區", "梧棲區", "清水區", "大甲區", "外埔區", "后里區"],

    "5": ["新興區", "前金區", "苓雅區", "鹽埕區", "鼓山區", "旗津區", "前鎮區", "三民區", "左營區", "楠梓區", "小港區", "苓雅區", "大寮區", "大樹區", "大社區", "仁武區", "鳥松區", "岡山區", "橋頭區", "燕巢區", "田寮區", "阿蓮區", "路竹區", "湖內區", "茄萣區", "永安區", "彌陀區", "梓官區", "旗山區", "美濃區", "六龜區", "甲仙區", "杉林區", "內門區", "茂林區", "桃源區", "那瑪夏區"],

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

 // 取得 input 和 file-list 元素的參照
 const fileInput = document.getElementById('formFileMultiple');
 const fileList = document.getElementById('file-list');

 // 監聽 input 變化事件（用戶選擇檔案後觸發）
 fileInput.addEventListener('change', function() {
   // 清空先前的檔案列表
   fileList.innerHTML = '';
   
   // 遍歷選擇的檔案
   Array.from(fileInput.files).forEach((file, index) => {
     // 建立一個列表項來顯示檔案名
     const listItem = document.createElement('li');
     listItem.textContent = file.name;
     
     // 建立一個 "刪除" 按鈕
     const deleteButton = document.createElement('button');
     deleteButton.textContent = 'X';
     
     // 當點擊刪除按鈕時，移除該檔案項目
     deleteButton.addEventListener('click', function() {
       listItem.remove(); // 從列表中移除該項
       // 更新 input 中的檔案
       removeFile(index);
     });

     // 將刪除按鈕加入到列表項目中
     listItem.appendChild(deleteButton);
     // 將列表項目加入到檔案列表
     fileList.appendChild(listItem);
   });
 });

 // 移除指定索引的檔案，並更新 input 的檔案列表
 function removeFile(indexToRemove) {
   const dt = new DataTransfer(); // 建立新的 DataTransfer 物件
   // 將剩下的檔案重新加入
   Array.from(fileInput.files)
     .filter((_, index) => index !== indexToRemove) // 過濾掉要刪除的檔案
     .forEach(file => dt.items.add(file)); // 將剩下的檔案加入 DataTransfer

   fileInput.files = dt.files; // 更新 input 的檔案列表
 }

