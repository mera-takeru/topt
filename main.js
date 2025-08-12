// pertonal - 共通ロジックファイル

/**
 * ページ全体のレイアウトを描画するメイン関数
 * @param {string} resultKey - 表示する結果のキー (例: "C", "cm")
 */
function renderPageLayout(resultKey) {
  const container = document.getElementById('app-container');
  if (!container) {
    console.error('Error: #app-container element not found.');
    return;
  }

  // ページ全体のHTML構造を動的に生成
  container.innerHTML = `
    <header>
      <nav class="header-nav">
        <a href="/about/">パートナルとは</a><span class="divider">|</span>
        <a href="/faq/">よくある質問</a><span class="divider">|</span>
        <a href="https://forms.gle/PstFm54KustR4zKs6">お問い合わせ</a>
      </nav>
    </header>
    <div class="container">
      <h1>
        <span class="title-topt">
          <span class="title-english">pertonal</span><span class="title-japanese"> -パートナル-</span>
        </span>
        <span class="title-sub">「音」×「色」＝ New「性格診断」</span>
      </h1>
      <div id="resultScreen">
        <div id="resultImage" class="result-image"></div>
        <h3>あなたの調性格（パートナル）</h3>
        <div id="resultText"></div>
        <div class="share-row"><button id="shareXBtn">Xでシェアする</button></div>
        <div class="goods-row"><button id="goodsBtn">公式グッズを見る</button></div>
        <div class="restart-row"><button id="restartBtn">もう一度診断する</button></div>
      </div>
    </div>
  `;

  // 結果コンテンツを描画
  renderResultContent(resultKey);

  // ボタンにイベントリスナーを設定
  addEventListeners(resultKey);
}

/**
 * 結果コンテンツをページに描画する
 * @param {string} resultKey 
 */
function renderResultContent(resultKey) {
  const resultTextDiv = document.getElementById('resultText');
  const resultImageDiv = document.getElementById('resultImage');

  resultImageDiv.classList.add('shine-effect');

  // data.jsから必要なデータを取得
  const colorInfo = personalityColors[resultKey];
  const displayImageUrl = displayImageUrls[resultKey];
  const characterTitle = getCharacterTitle(resultKey);
  const firstSentence = customFirstLines[resultKey];
  const fullDescription = characterDescriptions[resultKey];
  const remainingDescription = fullDescription.replace(/<span class="title"[^>]*>.*?<\/span>/, '');
  
  const compatibleHTML = (compatibleKeys[resultKey] || []).map(key => {
    const title = getCharacterTitle(key);
    const colorCode = personalityColors[key].code;
    const fileName = key.replace('♯', 's').replace('♭', 'b');
    return `<a href="./${fileName}.html" target="_blank" rel="noopener noreferrer"><span class="compatible-tag" style="background-color: ${colorCode};">${title}</span></a>`;
  }).join('');

  const songList = famousSongs[resultKey] || [];
  const selectedSongs = [...songList].sort(() => 0.5 - Math.random()).slice(0, 3);
  const songsHTML = selectedSongs.length > 0 
    ? selectedSongs.join('') 
    : '<p>情報が見つかりませんでした。</p>';

  resultImageDiv.innerHTML = `<img src="${displayImageUrl}" alt="${resultKey}の画像">`;
  
  resultTextDiv.innerHTML = `
    <div class="accordion">
      <span class="title shine-effect" style="background-color: ${colorInfo.code}; color: #FFF;">${characterTitle}</span>
      <p class="result-description-first">${firstSentence}</p>
      <button class="accordion-toggle">詳しく見る <span class="arrow">▼</span></button>
      <div class="accordion-content">${remainingDescription}</div>
    </div>
    <hr>
    <h3>あなたのパートナルカラー</h3>
    <p><span class="color-name" style="background-color: ${colorInfo.code} !important; color: #FFF !important; display: inline-block;">${colorInfo.name}</span> ${colorInfo.code}</p>
    <hr>
    <h3>あなたと相性の良いパートナル</h3>
    <div class="compatible-types-container">${compatibleHTML}</div>
    <hr>
    <h3>あなたのパートナルの人気曲</h3>
    <div class="playlist">${songsHTML}</div>
  `;
}

/**
 * ページ内のボタンにイベントリスナーを設定する
 * @param {string} resultKey 
 */
function addEventListeners(resultKey) {
  document.getElementById('shareXBtn').addEventListener('click', () => {
    const characterTitle = getCharacterTitle(resultKey);
    const shareText = `私は${characterTitle}でした♪\nMBTIの次はコレ！✨\n音と色でわかる、新感覚の性格診断「#パートナル」🎼\nあなたは何型？🌈@pertonal_jp\n`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(location.href)}`;
    window.open(shareUrl, '_blank');
  });

  document.getElementById('goodsBtn').addEventListener('click', () => { window.open('https://suzuri.jp/pertonal', '_blank'); });
  document.getElementById('restartBtn').onclick = () => { window.location.href = '/'; };

  const accordionButton = document.querySelector('.accordion-toggle');
  if (accordionButton) {
    accordionButton.addEventListener('click', () => {
      const content = accordionButton.nextElementSibling;
      const arrow = accordionButton.querySelector('.arrow');
      if (content.classList.toggle('open')) {
        arrow.textContent = '▲';
      } else {
        arrow.textContent = '▼';
      }
    });
  }
}

/**
 * 結果キーからキャラクターの称号を取得する
 * @param {string} key 
 * @returns {string}
 */
function getCharacterTitle(key) {
  const description = characterDescriptions[key];
  if (!description) return `【${key}型】`;
  const match = description.match(/<span class="title"[^>]*>(.*?)<\/span>/);
  return match ? match[1] : `【${key}型】`;
}
