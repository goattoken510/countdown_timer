//ロード時
window.addEventListener("load",start);
/** スタートボタン */
const startBtn = document.querySelector('.js-start');
//スタートボタンクリック時
startBtn.addEventListener("click",start);
/**
 * 時間計算用
 */
const calc = {
  day: 1000 * 60 * 60 * 24,
  hour: 1000 * 60 * 60,
  min: 1000 * 60,
  sec: 1000,
  point: 10
};

/** タイマースタート */
function start() {
  /**
   * 入力された値
   */
  const input = {
    day: parseFloat(document.querySelector('input[name="day"]').value),
    hour: parseFloat(document.querySelector('input[name="hour"]').value),
    min: parseFloat(document.querySelector('input[name="min"]').value),
    sec: parseFloat(document.querySelector('input[name="sec"]').value),
    point: parseFloat(document.querySelector('input[name="point"]').value)
  }
  /** 終了日時計算用 */
  const endTime = (input.day * calc.day) + (input.hour * calc.hour) + (input.min * calc.min) + (input.sec * calc.sec) + (input.point * calc.point);
  //入力が不正ならアラート
  if(endTime < 1) {
    document.querySelector('.js-alert').innerHTML = "1以上の数値を入力してください";
    return;
  } else {
    document.querySelector('.js-alert').innerHTML = "";
  }
  //タイマーが二重にならないようにリセット
  clearInterval(window.timerid);
  /** スタート時の時間 */
  const start = Date.now();
  // console.log(start);
  /** 終了日時 */
  const end = start + endTime;
  // console.log(end);
  // console.log(`start: ${start}`);

  //タイマースタート
  window.timerid = setInterval(goTimer, 10, end);
}
/**
 * カウント反映用HTML
 */
const html = {
  day: document.querySelector('.js-day'),
  hour: document.querySelector('.js-hour'),
  min: document.querySelector('.js-min'),
  sec: document.querySelector('.js-sec'),
  point: document.querySelector('.js-point')
}
/**
 * タイマーを動かす
 * @param {Object} start 開始時
 * @param {number} countDownSec カウントダウンする秒数
 */
const goTimer = (end) => {
  /** 現在の日時 */
  const now = Date.now();
  /** 残り日時 */
  let reamingTime = end - now;
  // console.log('残り時間: ' + reamingTime);

  //残り時間が0以下ならタイマー止める
  if(reamingTime <= 0){
    clearInterval(window.timerid);
    return;
  }

  /** 残り日数 */
  const reamingDay = Math.floor(reamingTime / calc.day);
  reamingTime -= reamingDay * calc.day;
  // console.log('日: ' + reamingDay);

  /** 残り時間 */
  const reamingHour = Math.floor(reamingTime / calc.hour);
  reamingTime -= reamingHour * calc.hour;
  // console.log('時間: ' + reamingHour);

  /** 残り分数 */
  const reamingMin = Math.floor(reamingTime / calc.min);
  reamingTime -= reamingMin * calc.min;
  // console.log('分: ' + reamingMin);

  /** 残り秒数 */
  const reamingSec = Math.floor(reamingTime / calc.sec);
  reamingTime -= reamingSec * calc.sec;
  // console.log('秒: ' + reamingSec);

  /** 残りミリ秒 */
  const reamingPoint = Math.floor(reamingTime / calc.point);
  // console.log('ミリ: ' + reamingPoint);

  //それぞれのカウント用タグに適用
  html.day.innerHTML = addZeroDay(reamingDay);
  html.hour.innerHTML = addZero(reamingHour);
  html.min.innerHTML = addZero(reamingMin);
  html.sec.innerHTML = addZero(reamingSec);
  html.point.innerHTML = addZero(reamingPoint);
}
/**
 * 10未満なら10の位を0埋め
 * @param {number} value 数値
 * @return {string} 0埋めされた数値
 */
const addZero = value => value < 10 ? `0${value}` : String(value);
/**
 * 100未満なら100の位を0埋め
 * @param {number} value 数値
 * @return {string} 0埋めされた数値
 */
const addZeroDay = value => {
  if(value < 10) {
    return `00${value}`;
  } else if (value < 100) {
    return `0${value}`;
  }
  return String(value);
}