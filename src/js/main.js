/**
 * スクロールすると画像ファイル名が連番で変わる処理
 * @param {}
 * @return {}
 */
const scrollMovie = () => {

  // 画像の要素を取得する
  const img = document.querySelector('#scrollIMG');
  const srcPath = './assets/image/';
  let currentIMG = 1;
  const switchAmount = 10; // IMGを切り替えるスクロール量
  let nowPosition = window.pageYOffset;

  window.addEventListener('scroll', () => {
    // スクロール量を取得
    const newPosition = window.pageYOffset;
    // なんか計算 nowPosition
    if(newPosition - nowPosition > switchAmount) {
      const fileNumber = ( '000' + currentIMG ).slice( -3 );
      currentIMG++

      // 画像ファイル名を書き換え
      const newSrc = `${srcPath}image${fileNumber}.png`;
      img.setAttribute('src', newSrc);

      // 初期化
      nowPosition = newPosition;
    }
  })
};

// 実行
scrollMovie();
