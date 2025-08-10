// pertonal - 共通ロジックファイル

const personalityColors = {
    "C": { "code": "#FF3232" }, "cm": { "code": "#4C0099" }, "D♭": { "code": "#3298FF" },
    "c♯m": { "code": "#009900" }, "D": { "code": "#FEFF32" }, "dm": { "code": "#99004C" },
    "E♭": { "code": "#9832FF" }, "e♭m": { "code": "#009899" }, "E": { "code": "#32FF32" },
    "em": { "code": "#994C00" }, "F": { "code": "#FF3299" }, "fm": { "code": "#000099" },
    "F♯": { "code": "#32FEFF" }, "f♯m": { "code": "#4C9900" }, "G": { "code": "#FF9932" },
    "gm": { "code": "#990098" }, "A♭": { "code": "#3232FF" }, "g♯m": { "code": "#00994C" },
    "A": { "code": "#99FF32" }, "am": { "code": "#990000" }, "B♭": { "code": "#FF32FE" },
    "b♭m": { "code": "#004C99" }, "B": { "code": "#32FF99" }, "bm": { "code": "#989900" }
};

function renderPageLayout(resultKey) {
  const container = document.getElementById('app-container');
  if (!container) {
    console.error('Error: #app-container element not found.');
    return;
  }

  container.innerHTML = `
    <header>
      <nav class="header-nav">
        <a href="./about.html">パートナルとは</a><span class="divider">|</span>
        <a href="./faq.html">よくある質問</a><span class="divider">|</span>
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
    <footer>
      <nav class="footer-nav">
        <a href="./terms.html">利用規約</a><span class="divider">|</span>
        <a href="./privacy.html">プライバシーポリシー</a><span class="divider">|</span>
        <a href="./operator.html">運営者情報</a>
      </nav>
      <p class="copyright">&copy; 2025 pertonal by mera takeru. All rights reserved.</p>
    </footer>
  `;

  renderResultContent(resultKey);
  addEventListeners(resultKey);
}

function renderResultContent(resultKey) {
  const resultTextDiv = document.getElementById('resultText');
  const resultImageDiv = document.getElementById('resultImage');
  
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

  // ★★★ ここからが変更箇所 ★★★
  const songList = famousSongs[resultKey] || [];
  const selectedSongs = [...songList].sort(() => 0.5 - Math.random()).slice(0, 4);
  const songsHTML = selectedSongs.length > 0 ? selectedSongs.map(song => {
    const parts = song.split('-');
    const title = parts[0];
    const artist = parts.slice(1).join('-');
    return `
      <div class="playlist-track">
        <span class="track-icon">🎵</span>
        <div class="track-info">
          <span class="track-title">${title}</span>
          <span class="track-artist">${artist}</span>
        </div>
      </div>
    `;
  }).join('') : '<p>情報が見つかりませんでした。</p>';
  // ★★★ ここまでが変更箇所 ★★★

  resultImageDiv.innerHTML = `<img src="${displayImageUrl}" alt="${resultKey}の画像">`;
  
  resultTextDiv.innerHTML = `
    <div class="accordion">
      <span class="title" style="background-color: ${colorInfo.code}; color: #FFF;">${characterTitle}</span>
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

function addEventListeners(resultKey) {
  document.getElementById('shareXBtn').addEventListener('click', () => {
    const characterTitle = getCharacterTitle(resultKey);
    const shareText = `私は${characterTitle}でした♪\nMBTIの次はコレ！✨\n音と色でわかる、新感覚の性格診断「#パートナル」🎼\nあなたは何型？🌈@pertonal_jp\n`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(location.href)}`;
    window.open(shareUrl, '_blank');
  });

  document.getElementById('goodsBtn').addEventListener('click', () => { window.open('https://suzuri.jp/pertonal', '_blank'); });
  document.getElementById('restartBtn').onclick = () => { window.location.href = './index.html'; };

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

function getCharacterTitle(key) {
  const description = characterDescriptions[key];
  if (!description) return `【${key}型】`;
  const match = description.match(/<span class="title"[^>]*>(.*?)<\/span>/);
  return match ? match[1] : `【${key}型】`;
}
