# da-yoshi-k.github.io

![OGP preview](public/ogp.png)

よしだの自己紹介ページ（リンク集/プロフィール）です。

## 公開ページ

- URL: https://da-yoshi-k.github.io/

## 技術スタック

- Astro
- TypeScript
- Tailwind CSS

## ローカル起動

```bash
npm install
npm run dev
```

## カスタマイズ方法

### プロフィール情報の編集

`src/content/profile/index.md` を編集してプロフィール情報を変更できます。

```markdown
---
name: あなたの名前
handleName: "@your-handle"
bio: 自己紹介文をここに記入
skills: あなたのスキル / 興味のある技術
---
```

### リンクカードの追加・編集

`src/content/links/*.md` を追加・編集するとリンクカードが更新されます。

```markdown
---
title: サービス名
url: https://example.com/your-profile
description: 説明文
faviconDomain: example.com
order: 1
gaLabel: example
---
```

### その他のカスタマイズ

- `src/components/` でカードやプロフィール表示のデザインを調整できます。
- `public/prof.png` を差し替えるとプロフィール画像が変更されます。
