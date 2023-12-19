  function drawOmikuji() {
    // ローカルストレージから引いた回数を取得
    let drawCount = localStorage.getItem('drawCount') || 0;
  
    // 一年に一度しか引けない場合の処理
    if (drawCount >= 1) {
      alert('一年に一度しか引けません。');
      return;
    }
  
    // 入力された情報を取得
    const bestBout = document.getElementById('best_bout').value;
    const nextYearGoal = document.getElementById('next_year_goal').value;
    const wishlist = document.getElementById('wishlist').value;
  
    // 各項目ごとにランダムな文章を生成
    const lovePhrase = generateRandomPhrase(lovePhrases);
    const lostItemPhrase = generateRandomPhrase(lostItemPhrases);
    const waitingPersonPhrase = generateRandomPhrase(waitingPersonPhrases);
    const studyPhrase = generateRandomPhrase(studyPhrases);
    const wishPhrase = generateRandomPhrase(wishPhrases);
    const healthPhrase = generateRandomPhrase(healthPhrases);
    const businessPhrase = generateRandomPhrase(businessPhrases);
  
    // おみくじの結果を取得
    const omikujiResult = omikujiPhrases[Math.floor(Math.random() * omikujiPhrases.length)];
  
    // 結果を表示
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `
      <p>恋愛：${lovePhrase}</p>
      <p>失物：${lostItemPhrase}</p>
      <p>待人：${waitingPersonPhrase}</p>
      <p>勉学：${studyPhrase}</p>
      <p>願望：${wishPhrase}</p>
      <p>健康：${healthPhrase}</p>
      <p>商売：${businessPhrase}</p>
      <p>運勢：${omikujiResult}</p>
    `;
  
    // 引いた回数を更新し、ローカルストレージに保存
    drawCount++;
    localStorage.setItem('drawCount', drawCount);
  }
  
  function generateRandomPhrase(phrases) {
    return phrases[Math.floor(Math.random() * phrases.length)];
  }
  
  function resetDrawCount() {
    // 引いた回数をリセット
    localStorage.removeItem('drawCount');
    alert('引き直しの回数がリセットされました。');
  }
  
  function tweetResults() {
    const lovePhrase = generateRandomPhrase(lovePhrases);
    const lostItemPhrase = generateRandomPhrase(lostItemPhrases);
    const waitingPersonPhrase = generateRandomPhrase(waitingPersonPhrases);
    const studyPhrase = generateRandomPhrase(studyPhrases);
    const wishPhrase = generateRandomPhrase(wishPhrases);
    const healthPhrase = generateRandomPhrase(healthPhrases);
    const businessPhrase = generateRandomPhrase(businessPhrases);
    const omikujiResult = omikujiPhrases[Math.floor(Math.random() * omikujiPhrases.length)];
  
    const tweetText = `今年のベストバウト: ${document.getElementById('best_bout').value}
来年の目標: ${document.getElementById('next_year_goal').value}
ほしいもの: ${document.getElementById('wishlist').value}
運勢: ${omikujiResult}
https://kuhenagi.github.io/omikuji2023 `;
  
    // ツイート用のURL
    const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  
    // 新しいウィンドウでツイート画面を開く
    window.open(tweetURL, '_blank');
  }
  
  // 各項目ごとのランダムな文章
  const lovePhrases = [
    "倒すつもりでしまっていこう",
    "後悔しないようにしまっていこう",
    "流れに身を任せてしまっていこう"
  ];
  
  const lostItemPhrases = [
    "忘れたときに見つかるかも",
    "見つけたら思わず突っ込んでしまうような場所にあるかも",
    "落とし物に気をつけてほしいかも"
  ];
  
  const waitingPersonPhrases = [
    "待ち人が良い方向に動いたり...",
    "あなたを待っている人がいたり...",
    "辛抱が報われる時が近づいてたり..."
  ];
  
  const studyPhrases = [
    "常にトップを目指して勉強しよう",
    "あたらしいことに挑戦しよう",
    "目標を目指して努力しよう"
  ];
  
  const wishPhrases = [
    "動かなければ叶わない",
    "人に頼んでも叶わない",
    "言い訳をするな"
  ];
  
  const healthPhrases = [
    "運動しよう",
    "部屋を片付けよう",
    "病は気から"
  ];
  
  const businessPhrases = [
    "繁盛",
    "挑戦",
    "好機"
  ];
  
  // おみくじの吉凶
  const omikujiPhrases = ['大凶', '凶', '末吉', '小吉', '吉', '中吉', '大吉'];
  