// 1. 夕飯の候補リスト（配列）を用意する
const dinners = [
  "麻婆春雨🔥",
  "無印ストック👀",
  "パスタ🍝",
  "冷凍うどん🥢",
  "くら寿司 🍣",
  "親子丼🍚",
  "ラーメン🍜"
];

// 2. HTMLの部品を「背番号（id）」を使って探して取得する
const btn = document.getElementById("omikuji-btn");
const result = document.getElementById("result");

// 3. ボタンがクリックされた時の動き（イベント）を設定する
btn.addEventListener("click", function() {
  // ランダムな数字（0〜リストの最後の番号まで）をつくる
  const randomIndex = Math.floor(Math.random() * dinners.length);
  
  // 選ばれた料理名を取り出す
  const chosenDinner = dinners[randomIndex];
  
  // 画面の結果表示部分（pタグ）の文字を書き換える
  result.textContent = chosenDinner;
});