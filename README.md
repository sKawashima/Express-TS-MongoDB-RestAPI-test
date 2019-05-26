# Express - TypeScript - MongoDB - RestAPI - test

なんとなくサーバーサイドの練習と勉強

## 実質の教科書

* [サルでも分かるExpressでのjsonAPIサーバーの作り方 - Qiita](https://qiita.com/leafia78/items/73cc7160d002a4989416)

## 参考

* [TypeScriptでExpress.js開発するときにやることまとめ (docker/lint/format/tsのまま実行/autoreload) - Qiita](https://qiita.com/yuukive/items/012bdf1b9ff3881546b3)
* [Typescript学習メモ①(ExportとImport、require("xxx")とmodule.exports) - Qiita](https://qiita.com/zuzuwen/items/2577680a5432f5b15247)
* [Mongodbの使い方 - Qiita](https://qiita.com/pipi_taro/items/259ddc85d5a035f23968)
  * [mongoose.connect()時のエラー - Qiita](https://qiita.com/SatoMaru/items/8d7b4c7c54509155c74e)

## できるようにしたいこと

- [x] Expressの起動
- [x] TypeScript環境構築
- [x] Standard対応
- [x] ExpressでのAPI返答
- [x] MongoDBとの連携
- [ ] リアルタイムログ共有
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
* MongoDBとの連携
  * `$ brew install mongodb` した
  * MongoDB起動は `$ sudo mongod --dbpath /data/db/mongodb/`
  * MongoDBへアクセスするためのモジュール`mongoose`を導入
  * mongoDBにアクセスして使える状態にするコードは↓で確定
  * `model/*.ts`にてデータ形式を宣言/定義し、それを`api/`にて呼び出して使用する
  * データの確認方法
    * `$ mongo`でコンソールを開く
    * `$ show collections`でデータベース一覧を確認
    * `$ db.usermodels.find()`で全データ表示
  * 要素が抜けててもエラーは出ない（判定してないので）
  * `:id`のように取得すると、`/api/user/5ce~`の`5ce~`を`req.params.id`で呼び出せる
  * 全データ取得は`find()`、他に`findById()`が使える
  * [MongoDB コマンドメモとか書き - Qiita](https://qiita.com/svjunic/items/285e9cf20169d70aa1fa#%E9%87%8D%E8%A4%87%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E9%99%A4%E5%8E%BBdistinct)

```js
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/ExpressAPI', { useNewUrlParser: true })
mongoose.connection.on('error', (err: string) => {
  console.error('MongoDB connection error: ' + err)
  process.exit(-1);
})
```
