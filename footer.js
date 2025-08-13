document.addEventListener('DOMContentLoaded', function() {
  const footerHTML = `
  <footer>
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-about">
          <h4>pertonal -パートナル-</h4>
          <p>「音」と「色」でわかる新感覚の性格診断。<br>24タイプのパートナルの中から本当のあなたを見つけてみませんか？</p>
        </div>
        <div class="footer-sitemap">
          <h4>サイトマップ</h4>
          <ul>
            <li><a href="/">トップページ</a></li>
            <li><a href="/about/">パートナルとは</a></li>
            <li><a href="/faq/">よくある質問</a></li>
            <li><a href="/compatibility/">パートナル相性診断</a></li>
            <li><a href="/blog/">開発者ブログ</a></li>
            <li><a href="https://forms.gle/nmsCdZtsjdprxSwY9">お問い合わせ</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-secondary">
        <nav class="footer-nav">
          <a href="/terms/">利用規約</a>
          <span class="divider">|</span>
          <a href="/privacy/">プライバシーポリシー</a>
          <span class="divider">|</span>
          <a href="/operator/">運営者情報</a>
        </nav>
        <p class="copyright">&copy; 2025 pertonal by mera takeru. All rights reserved.</p>
      </div>
    </div>
  </footer>
  `;
  // <body>タグの最後にフッターを挿入します
  document.body.insertAdjacentHTML('beforeend', footerHTML);
});
