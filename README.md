# RelationDeck


## 中英文版本

中文（zh-TW）在根路徑 `/`，英文在 `/en/`，作法與 explorestamp.github.io 相同。

- 首頁字串用 `<Translate>` / `translate()`，英文在 `i18n/en/code.json`；導覽列與 footer 在 `i18n/en/docusaurus-theme-classic/`。
- 頁面、文章與文件的英文版放在 `i18n/en/docusaurus-plugin-content-{pages,blog,docs}/`，檔名與路徑跟中文版相同。
- 題目與牌組名稱的英文一律取自 App 的 `decks.json`，不要另外翻譯。
- 新增字串後執行 `npm run write-translations -- --locale en`，再補上英文。
- 本機預覽英文版：`npm start -- --locale en`。
