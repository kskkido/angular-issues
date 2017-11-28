## フロントエンド実装課題

githubの公開APIを使って、以下の2ページをSingle Page Applicationとして実装してください。

1. issue一覧ページ
    - urlは　`/issues`
    - こちらのendpointを使って、１ページに10件ずつissueを表示する　 https://api.github.com/repos/angular/protractor/issues?page=1&per_page=10 
    - 一覧に表示する各issueの表示要素は、「issue番号」と、「タイトル」とする
    - URLクエリパラメータでpage指定ができるようにする (`/issues?page=1` のように)
    - 一覧の各issueをクリックしたら詳細ページに遷移する
2. issue詳細ページ
    - urlは `/issues/:number`
    - 詳細ページの表示要素は、「issue番号」「タイトル」「本文」とする
3. 一覧ページに、Pagination UIを追加する
    - 最初のページ、前のページ、次のページ、最後のページ、に移動できるリンクがあること
    - 上記を満たせばUIは自由

つまり、
https://github.com/angular/protractor/issues
このページの簡易版のようなものを作ると考えてください。

### 条件

・クライアントサイドでroutingを処理する、Single Page Applicationであること

・React / Angular / Vue.js いずれかのフレームワークを用いること (versionは問いません)


### 注意事項

・それ以外のライブラリも必要に応じて自由に使ってください。

・UIは自由に考えてください。（デザイン的な完成度ではなく、使いやすさを重視しますので、UIに関するライブラリなども自由に利用してください。）


### 提出物と方法

1. ソースコード
    - githubの公開リポジトリでソースコードが見られるようにするか、zipなどでまとめて提出してください。

2. 動作するURL
    - 動作するページが見られるような環境を用意して、URLを教えてください。

※時間がなくてできなかった場合は、途中までのソースでも結構ですので、予定していた実装方針などを教えてください。


### APIについて

※githubの公開APIは、1時間に送れるのは60リクエストに制限されているので、開発の際はご注意ください。
https://developer.github.com/v3/#rate-limiting


### APIドキュメント

基本仕様ドキュメントはこちら  
https://developer.github.com/v3/

・issuesの取得に関するAPI  
https://developer.github.com/v3/issues/

・ページングに関する仕様  
https://developer.github.com/v3/#pagination
