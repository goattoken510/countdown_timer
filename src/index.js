window.addEventListener("load",load);
/** ロード時処理 */
function load() {
  /** 表示時の時間 */
  const start = new Date();
  // console.log(`start: ${start}`);
  window.timerid = setInterval(goTimer, 10, start);
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
 */
const goTimer = start => {
  /** 現在の時 */
  const now = new Date();
  /** 経過した時 */
  const time = now.getTime() - start.getTime();
  /** 経過したミリ秒 */
  const point = Math.floor(time / 10);
  /** 経過した秒 */
  const sec = Math.floor(time / 1000);
  /** 経過した分 */
  const min = Math.floor(sec / 60);
  /** 経過した時間 */
  const hour = Math.floor(min / 60);
  /** 残り分数 */
  const remainingMin = addZero(2 - (min - hour * 60));
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
  //2分で終わる
  if(point >= 17999) clearInterval(window.timerid);
}
/**
 * 10未満なら10の位を0埋め
 * @param {number} value 数値
 * @return {string} 0埋めされた数値
 */
const addZero = value => value < 10 ? `0${value}` : String(value);