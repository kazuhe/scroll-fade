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

  // 画像の外枠で高さ（スクロール量を確保）
  const imgWrap = document.querySelector('#imgWrap');
  const imgHeight = img.clientHeight;

  // 高さを切り替える関数
  const changeHeight = (current, now) => {
    const scroll = now || 0;
    const stock = imgHeight + Number(scroll) + (window.innerHeight *2);

    if(current < 300) {
      imgWrap.style.height = stock + 'px';
    } else {
      imgWrap.style.height = imgHeight;
    }
  }
  changeHeight(currentIMG);


  // ファイル名書き換えの関数
  const changeImg = val => {
    const fileNumber = ( '000' + val ).slice( -3 );
    const newSrc = `${srcPath}image${fileNumber}.png`;
    img.setAttribute('src', newSrc);
  }

  window.addEventListener('scroll', () => {
    // スクロール量を取得
    const newPosition = window.pageYOffset;

    // 計算 nowPosition
    if(newPosition - nowPosition > switchAmount) {
      // 画像が最大になったら処理しない
      if(currentIMG >= 300) {
        return
      }

      window.requestAnimationFrame(() => {
        // 枠の高さを変えてスクロールできるようにする
        changeHeight(currentIMG, nowPosition);
        // 画像ファイル名を書き換え
        changeImg(currentIMG);
      });

      // 番号を追加
      currentIMG++

      // 初期化
      nowPosition = newPosition;
    }
  })
};

// 実行
scrollMovie();
