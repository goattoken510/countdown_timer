window.addEventListener("load",start);
const startBtn = document.querySelector('.js-start');
startBtn.addEventListener("click",start);
/** タイマースタート */
function start() {
  const countDownSec = parseFloat(document.querySelector('input[name="second"]').value);
  if(countDownSec < 1) {
    document.querySelector('.js-alert').innerHTML = "1以上の数を入力してください";
    return;
  } else {
    document.querySelector('.js-alert').innerHTML = "";
  }
  clearInterval(window.timerid);
  /** スタート時の時間 */
  const start = new Date();
  // console.log(`start: ${start}`);
  window.timerid = setInterval(goTimer, 10, start, countDownSec);
}
/** 分HTML */
const minHtml = document.querySelector('.js-min');
/** 秒HTML */
const secHtml = document.querySelector('.js-sec');
/** ミリ秒HTML */
const pointHtml = document.querySelector('.js-point');
/**
 * タイマーを動かす
 * @param {Object} start 開始時
 * @param {number} countDownSec カウントダウンする秒数
 */
const goTimer = (start, countDownSec) => {
  /** 現在の時 */
  const now = new Date();
  /** 経過した時 */
  const time = now.getTime() - start.getTime();
  /** 経過したミリ秒 */
  const point = Math.floor(time / 10);
  // console.log(`point: ${point}`);
  /** 経過した秒 */
  const sec = Math.floor(time / 1000);
  // console.log(`sec: ${sec}`);
  /** 経過した分 */
  const min = Math.floor(sec / 60);
  // console.log(`min: ${min}`);
  /** 経過した時間 */
  const hour = Math.floor(min / 60);
  // console.log(`hour: ${hour}`);
  /** 残り分数計算用 */
  const countDownMin = Math.floor(countDownSec / 60) - 1;
  /** 残り分数 */
  const remainingMin = addZero(countDownMin - (min - hour * 60));
  /** 残り秒数 */
  const remainingSec = addZero(59 - (sec - min * 60));
  /** 残りミリ秒数 */
  const remainingPoint = addZero(99 - (point - sec * 100));
  //残り分数を表示
  minHtml.innerHTML = remainingMin;
  //残り秒数を表示
  secHtml.innerHTML = remainingSec;
  //残りミリ秒数を表示
  pointHtml.innerHTML = remainingPoint;
  //指定した秒数でストップ
  if(point >= (countDownSec * 100) - 1) clearInterval(window.timerid);
}
/**
 * 10未満なら10の位を0埋め
 * @param {number} value 数値
 * @return {string} 0埋めされた数値
 */
const addZero = value => value < 10 ? `0${value}` : String(value);