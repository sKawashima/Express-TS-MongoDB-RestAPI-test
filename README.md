# Express - TypeScript - MongoDB - RestAPI - test

なんとなくサーバーサイドの練習と勉強

## 参考

* [TypeScriptでExpress.js開発するときにやることまとめ (docker/lint/format/tsのまま実行/autoreload) - Qiita](https://qiita.com/yuukive/items/012bdf1b9ff3881546b3)
* [サルでも分かるExpressでのjsonAPIサーバーの作り方 - Qiita](https://qiita.com/leafia78/items/73cc7160d002a4989416)

## できるようにしたいこと

- [x] Expressの起動
- [x] TypeScript環境構築
- [x] Standard対応
- [x] ExpressでのAPI返答
- [ ] MongoDBとの連携
- [ ] テスト環境整える

## メモ

* Express導入まで
  * 流れ作業
  * express standard
* TypeScript導入
  * typescript ts-node @types/express nodemon
  * 単にts-nodeで実行するだけではオートリロードされないのでnodemonをdevにかませる
* Standard対応
  * [これ](https://standardjs.com/#can-i-use-a-javascript-language-variant-like-flow-or-typescript)よくわからんかったからスルー
* ExpressでのAPI返答
  * `get`と`post`、もといそれぞれのqueryの取得はできた
  * [ここ](https://qiita.com/leafia78/items/73cc7160d002a4989416#helloworld)に出てくる `body-parser` の役割がよくわからない
  * `export`と`import`を使ったファイル分割
    * TypeScriptでの`export`はその場所に書く
    * TypeScriptでは`require`でなく`import`で書く
