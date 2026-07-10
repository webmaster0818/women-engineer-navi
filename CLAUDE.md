@AGENTS.md

## 2026-06-12 成長戦略まとめ依頼（MediaXAI, Discord ch:1497147522118848693）
- GSC実績: 露出6/1開始、週4→10表示の最初期。新47本(6/10公開)は評価形成前。/ranking/が「東京都 女性itエンジニア育成事業 口コミ」12位。
- 戦略提案送信済み: ①既存66本の定型文リライト最優先（サイト全体品質リスク）②東京都育成事業の専用記事化③一次データDB（公開統計の体系化）。承認待ち。

## 2026-06-12 既存リライト実装開始（MediaXAI承認「優先リスト作成の上、実装をどんどん進めて」）
- 優先リスト: ~/.openclaw/workspace/women-engineer-rewrite-priority.md（S8本/A16本/B29本、ranking・reviews・トップは要相談で対象外）
- バッチ1(Tier S): salary/beginner/mama-engineer/remote-jobs/age-30s/women-friendly-companies/coding-test リライト + tokyo-women-training新規
- 方式: 47本と同じ並列サブエージェント（実データ・出典・backend準拠テンプレ）

## 2026-06-12 バッチ1完了✅（Tier S 8本）
- リライト7: salary/beginner/mama-engineer/remote-jobs/age-30s/women-friendly-companies/coding-test（実データ・出典付き、エージェント紹介/CTA文言は原文維持、架空事例削除）
- 新規1: tokyo-women-training（東京都「女性ITエンジニア育成事業」実在確認済・令和8年度アデコ受託）
- sitemap 113→114URL、GSC再送信errors:0、本番反映を全URL確認済み。Discord報告済み。
- バッチ2着手: age-20s/age-40s/after-maternity/return-to-work/maternity-leave-rate/frontend/javascript-career/python-career（比較系5本はエージェント文言保護のため後バッチで慎重対応）

## 2026-06-12 バッチ2・3完了✅（Tier A 16本）
- バッチ2: age-20s/age-40s/after-maternity/return-to-work/maternity-leave-rate/frontend/javascript-career/python-career
- バッチ3: ai-ml-career/data-scientist/aws-career/infrastructure/qa-tester/web-designer/pm-director/specialized-vs-general
- 全て実データ・出典付き（厚労省PDF直接抽出含む）、エージェント紹介/CTA原文維持、架空事例削除、sitemap lastmod更新
- 進捗: 24/54本完了（バッチ1含む）。残り: 比較系5本(agent-vs-site/type-vs-doda/levtech-vs-geekly/green-vs-reworks/workport-vs-recruit※エージェント文言保護で慎重対応)+Tier B 25本
- 注意: CF Pages反映に数分ラグあり。検証は反映確認後に行う

## 2026-06-12 バッチ4完了✅（比較系5本+ハブ3本）
- 比較系5本（agent-vs-site/type-vs-doda/levtech-vs-geekly/green-vs-reworks/workport-vs-recruit）: 公式公開値のみ・優劣断定なし・架空口コミ全削除・保護ブロックはdiff検証で原文一致確認
- ハブ3本: how-to-choose（許可事業者・法定公開実績の確認方法軸）/certification（資格マップ、cert-6ページの親ハブ化）/career-path（5類型マップ、本日リライト分と数値整合）
- 重要発見: リクルートエージェント運営は2025/4から「インディードリクルートパートナーズ」（分割設立）。cert-pythonデータ分析学割を公式値5,500円に修正
- 進捗: 32/54本完了。残りTier B 22本（freelance/long-career-tips等career-pathからリンクされる定型文を優先推奨）

## 2026-06-12 バッチ5完了✅（選考クラスタ+α 8本）
- portfolio/resume-guide/interview-guide/technical-interview/negotiation/freelance/programming-school/success-stories
- success-storiesは架空体験談集→統計ベース「成功パターン分析」へ全面転換（モデルケースは三重注記）
- programming-schoolは特定スクール優劣なし「選び方基準+給付金活用」軸へ転換
- 進捗: 40/54本+新規1本。残りTier B 14本: harassment/work-life-balance/side-job/startup/game-industry/web-industry/sier-industry/ses-vs-jisha/community/demand/schedule/work-abroad/category-index/faq-all

## 2026-06-12 バッチ6・7完了✅【既存53本リライト全完了】
- バッチ6: faq-all(19問FAQハブ)/ses-vs-jisha/web-industry/sier-industry/game-industry/work-life-balance/harassment(カスハラ2026年10月施行を正確に)/side-job
- バッチ7(最終): startup(SO税制正確)/community(実在確認済み10件・WWC解散2024を訂正)/demand(統計データ記事)/schedule/work-abroad/category-index(全100記事ハブ)
- sitemapのage-30s/mama-engineer lastmod漏れも修正。これで既存53本+新規1本=54本すべて実データ・出典付き完了
- 残課題: ranking/reviews/トップ（保護ルールのため要相談・未着手）、cert-python実践系の学割表記（未検証のため未修正）

## 2026-06-15 内部リンクハブ強化✅（MediaXAI「進めてください」承認・戦略①の実装）
- 🐛切れリンク3件修正: Header navの/age-guide/・/column/（実在せず全114ページのstickyヘッダーで404）+トップHero「年代別ガイドを見る」/age-guide/。→記事一覧(category-index)・FAQ(faq-all)・お役立ち記事へ張替
- Header: トップ/おすすめエージェント/記事一覧(/articles/category-index/)/よくある質問(/articles/faq-all/)に再構成
- トップに「目的から記事を探す」セクション新設: 8クラスタ導線(職種career-path/年収salary/資格certification/未経験beginner/年代age-30s/リモートremote-jobs/産育mama-engineer/選考interview-guide)+全記事・FAQ CTA。全リンク実在確認済
- Footer: 「カテゴリから探す」列追加(career-path/certification/age-30s/remote-jobs/mama-engineer)、コンテンツ列にcategory-index・faq-all追加、grid-cols-3→4
- 料金・エージェント紹介文・ranking/reviewsは一切不変更。sitemap114(homepage lastmod2026-06-15)。deploy=women-engineer-navi-deploy、本番(women-engineer.com)で切れリンク0・hub200・クラスタ導線をcurl検証。GSC再送信
- 残: GSC観測後CTR改善/資格クラスタ拡張、一次データDB・ロールモデル(中期)、ranking/reviews/トップ刷新(要承認・保留)

## 2026-06-16 デザイン全面刷新✅（MediaXAI「デザイン改良・女性らしい風合い+働く楽しさ・AI感排除・凝った感・絵文字不使用」）
- コンセプト=エディトリアル・アトリエ: 温かみのあるクリーム紙(#f7f1ea)+ローズプラム(#7c3a55)+テラコッタ(#c15f47)+ゴールド(#bd8a3c)、紙グレインテクスチャ
- フォント: 見出し=Shippori Mincho(明朝で工芸・上品さ)、本文=Zen Kaku Gothic New、Latin装飾=Fraunces italic(eyebrow/numeral)。Noto Sans廃止
- globals.css配色トークン全刷新→.card/.btn/.section/.text-gradientが全117ページに波及。旧シアン×紫グラデ(AI感)を全廃
- 記事100+本の直書きhex(旧#0891b2/#7c3aed/#d1dce5等)を温色へ一括置換13029箇所/112ファイル。teal/blueクラスも置換。残存0を検証。意味のあるstatus色(緑/赤/琥珀)は保持
- Header/Footer/トップ再設計: 明朝ワードマーク+Fraunces英字ラベル、非対称ヒーロー+マニフェストパネル+装飾アンパサンド、番号付き理由(01/02/03)、明朝の数字スタッツ、ダークプラムCTA。絵文字不使用(◆等の活字記号のみ)
- Chrome headlessでPC/モバイル/記事の描画を目視検証→本番(women-engineer.com)反映確認・font読込OK・旧シアン0。deploy=women-engineer-navi-deploy、sitemap lastmod更新
- 料金/エージェント紹介文/ranking/reviewsの文言は不変更(視覚のみ刷新)。★☆=レビュー星(絵文字でなく活字記号)は機能上保持

## 2026-06-22 ④収益核 ranking目的別入口ナビ✅（MediaXAI「君の推奨で進めて」承認）
- rankingヒーロー直下に「あなたの状況から選ぶ｜タイプ別おすすめ」入口ナビ新設。未経験→workport(育成事業/みんスク)/フルリモート→reworks(100%特化)/女性特化サポート→type-woman/IT専門・年収→levtech、と各社の事実ベースで状況→相性の良いエージェントへ誘導
- review pageへ送客=CV導線＋ranking→reviewsの内部リンク欠落も補完(従来ranking→reviewsリンク0だった)。料金・エージェント紹介文言は不変更・追加要素のみ
- 本番200/入口ナビ・reviews4リンクをcurl検証(CF cache遅延に注意・cache-bust再確認)。sitemap lastmod更新
- 残④: ranking入口の他状況(年収/産育/年代/職種別)拡張・reviewsへの導線太化。残: GSC観測後の刈り取り(育成事業タイトル最適化の効果確認)・③DB職種別完全表

## 2026-06-23 診断ツール新設✅（MediaXAI「診断ツール行こう」）
- /diagnosis/ 新設: app/diagnosis/Diagnosis.tsx(use client・6問スコアリング→転職エージェント8社から相性提案)+page.tsx(metadata/FAQ schema/8社特徴グリッド/CTA)。質問=経験段階/重視サポート/働き方/領域/進め方/状況→各社の事実ベース特徴(workport=未経験育成/reworks=フルリモート/type-woman=女性特化/levtech=IT専門/recruit=求人数/doda=総合/geekly=ゲーム/green=カジュアル)で加点
- 診断結果→各社レビュー(/reviews/<slug>/)+ランキングへ送客=CV導線。クライアント側完結=コストゼロ。「相性の目安/個人差/2〜3社併用」明記で景表法配慮
- 導線: Headerナビに「エージェント診断」追加(全120ページ)、トップヒーロー2ボタン目を診断に、ranking状況ナビ末に診断CTA
- デザインはエディトリアル(クリーム×ローズプラム×ゴールド)に統一・絵文字不使用。sole-lab診断と同手法
- 本番200/PC・スマホ実機スクショ/送客先8社200/sitemap116(/diagnosis/追加)をcurl検証。deploy=women-engineer-navi-deploy両push済
- 残: 質問拡充・GSC観測後の結果ページ最適化・④ranking他状況拡張

## 2026-06-27 次工程A+B（MediaXAI「AB進めよう」＝戦略次工程のA収益核強化+B一次データmoat）✅
- B(推奨/moat): /articles/data/ に「職種別の年収目安（主要IT職種12種）」完全表を新設。SRE/クラウド660・データサイエンティスト650〜・セキュリティ629・ITコンサル595・PM550-750・QA550-700・データエンジニア544・フロントエンド523・社内SE516・ソフトウェア511・バックエンド500-520・インフラ497万。★数値は既存 salary-by-job のcanonical表と同一の出典(求人ボックス・Morgan McKinley・2026)で統一＝架空ゼロ・矛盾なし。metadata/構造化dateModified更新。これで年代別/言語別/職種別/女性比率/求人倍率/育休を束ねる一次データの核に
- A(収益核): ranking状況別ナビに「産休・育休と両立→type女性」を追加(8→9状況・reviews導線+1)。ナビ直下に「年代・職種から相場を知ってから選ぶ」入口(salary-by-age/salary-by-job/data へ)を新設＝収益核rankingとB一次データDBを接続。★年代別/職種別は1社に紐付けると不正確なため相場ガイド入口として実装(産育両立のみtype女性へ正確マッピング)
- 架空データなし・料金/エージェント紹介文言/ranking・reviews本体不変更(追加のみ)。build/sitemap lastmod2件(data,ranking)・deploy=women-engineer-navi-deploy両push・本番200をcache回避curl検証・GSC再送信
- 残: A状況ナビさらに拡張(年収アップ/時短)/Bに職種別需要・求人状況を出典つき追加(公開統計の範囲)/GSC観測後の刈り取り

## 2026-06-28 次工程A+B第2弾（MediaXAI「AとBともに進めたい」）✅
- B: /articles/data/ 需給セクションに「職種・分野別の需要シグナル」表を新設。DX推進人材(クラウド/データ/AI)が量的「大幅に不足」企業58.5%(IPA DX動向2025)・IT人材2030年最大79万人不足/低位45万人(経産省)・転職求人倍率10.68倍(doda 2026年3月)・高需要職種は平均年収より約200万円高い(doda)。★職種別の公的求人倍率は細分データ無→数値捏造せず「不足度/年収プレミアム」の出典ある需給シグナルで表現。demand記事と同一出典で整合。dateModified 2026-06-28
- A: ranking状況ナビに「時短・WLB→ReWorks」「年収交渉・ハイクラス→levtech」追加(9→11状況)。全8社に状況入口・reworks/type-woman/levtechは2入口=reviews導線増。各マッピングは事実ベース・誇張なし
- 架空データなし・料金/エージェント文言/ranking・reviews本体不変更(追加のみ)。build/sitemap lastmod2件(data,ranking)→2026-06-28・deploy両push・本番200 cache回避curl検証・GSC再送信
- 残: A=地方/Uターン・第二新卒等の状況追加や診断設問拡充/B=ロールモデル・資格×年収/GSC観測後の刈り取り

## 2026-06-28 A 診断ツール設問拡充6→8問（MediaXAI「Aで！」）✅
- ★判断: 地方/Uターン・第二新卒は ranking状況ナビ(11状況で飽和)に追加せず診断設問に入れた(多因子で効く条件は診断向き・不正確な1対1マッピング量産を回避)
- Diagnosis.tsx に2問追加: Q7「希望する勤務地・住まいの状況」(地方/Uターン→reworks/doda・都市部→recruit/doda・場所問わず→green/levtech)、Q8「現在の就業状況」(在職中→green/doda・早く決めたい→recruit/workport・第二新卒→workport/doda)。入口の弱かったdoda/recruit/green/workportへ自然分散しスコア精度UP
- 「6つの質問」→「8つの質問」を全箇所統一(diagnosis page meta/FAQ/h・ranking CTA)。Diagnosis.tsxはQUESTIONS.length動的なので進捗バー/件数は自動。クライアント完結=コストゼロ
- 架空データなし・料金/エージェント文言不変更。build/sitemap lastmod(diagnosis,ranking)→2026-06-28・deploy両push・本番200+診断JSチャンク(0udr...)に新設問反映をcurl検証・GSC再送信
- 残: 診断結果ページ最適化(結果別2社目提案等)/A状況ナビは飽和で据置推奨/GSC観測後の刈り取り(育成事業・データ集・診断の順位変化)

## 2026-07-04 戦略v3 P3: reviews公式突合+確認日（MediaXAI「p3進めてok」）✅→修正承認待ち
- agent4体で8社の基本情報を公式実突合→7社に「2026年7月に公式サイトで確認」注記付与(本文不変更)。**doda=公式が全手段(curl/headless/WebFetch)で応答拒否→虚偽の確認日を書かず見送り・後日再試行**
- ⚠️差異一覧をDiscordで承認依頼(id 1522812096319062077): 【実害】ReWorks運営会社誤り(デイトラ→アイドマHD)+公式URL誤り(reworks.jp=現在は無関係企業・CTA2箇所が誤誘導→正rework-s.com)【法令】type-woman「全員女性アドバイザー」公式根拠なし(男性掲載)・Green「30,000件以上」→28,668件で過大【乖離】recruit運営会社旧表記・「非公開80%」→実26%【過小】workport/geekly/levtech求人数【裏取り不能】各社「リモート求人◯%」全社→削除推奨
- sitemap lastmod7件・deploy両push・本番注記検証・GSC再送信。承認後に公式現在値(出典付き)で一括修正予定

## 2026-07-05 施策2: 発見性工事（MediaXAI「2すすめて」）✅
- /sitemap/ 新設: 主要7+レビュー9+全記事14カテゴリ索引(記事リンク100本超)。categories配列をcategory-index/page.tsxからapp/lib/categories.tsへ抽出し単一ソース化(factoringのarticleCategoriesパターン)
- Footer全ページに「エージェント無料診断」「サイトマップ」導線追加。sitemap.xml 123→124・deploy両push・本番(200/footerリンク/記事リンク104本)検証・GSC再送信
- ※検証メモ: minified HTMLはgrep -cが行数カウントで偽陰性→`grep -o ... | sort -u | wc -l`で個数を数える
- 残: 1.登録リクエスト20URL(MediaXAI)→実施後3-4日で再計測

## 2026-07-05 残タスク消化+実測→次アクション提案（MediaXAI「残タスク残ってる？」）
- doda再突合: 依然全手段で到達不可→虚偽の確認日なしの標準変動注記のみ付与しデプロイ(残タスクゼロ化)
- 優先20URL再検査: **インデックス4/20のみ・14件が「検出-未登録」=登録リクエスト未実施と判明**。factoringは同作業で33%→72%に倍増した実証あり
- 次アクション提案(id 1523067234057195632): 1.登録リクエスト20URL実施(MediaXAI・最優先) 2.factoringの発見性工事移植(HTMLサイトマップ/sitemap/新設+トップ・aboutから核直リンク=承認待ち) 3.実施後3-4日で再計測

## 2026-07-04 P3差異修正（MediaXAI「裏付けないものは公式サイト要確認としよう」承認）✅
- 裏付けあり誤り→公式現在値(出典/確認日付き): ReWorks(運営会社アイドマHD/URL・出典・CTA→rework-s.com=誤誘導解消)/type-woman(全員女性→公式表現全箇所・5,000→15,000名2024実績・29,000→38,000件)/Green(30,000→約28,000件)/recruit(運営会社インディードリクルートパートナーズ・非公開80%→公開75万+非公開27万・74万→約100万件、metaと本文カード含む全箇所)/geekly(30,000→46,000件・ギークリー・独占求人断定解消)/levtech(48,000→約58,000件・全4箇所)
- 裏付け不能→要確認化: 全社リモート%撤去(6社)・levtech指名/産育休事前確認・recruit指名FAQ・workport求人数注記
- ⚠️置換の教訓: 同一文字列がmeta descriptionに2回ある場合replace(,1)では1箇所しか直らない→残存grepで全箇所検証必須。「15,000名」は「5,000名」を部分文字列として含むためcountでの検証は偽陽性になる
- doda=公式応答拒否継続で未修正(到達次第対応)。tsc/build/deploy両push・本番残存ゼロ検証・GSC再送信

## 2026-07-04 戦略v3 P2: 診断結果最適化（MediaXAI「p2進めよう」）✅
- Diagnosis.tsx結果画面に①2社目の候補(スコア次点をtagline付き提案・併用推奨の根拠文+レビュー送客=CV接点1→2)②結果別関連記事2本(RELATED map: 8社×固有マッピング、全slug実在確認)を追加。紹介文言・スコアリング不変更
- ⚠️検証の教訓: client機能の本番確認は「HTMLからチャンクURL列挙→grep」だと拾えないことがある→**ローカルoutでgrep -rlして該当チャンクファイルを特定→そのURLを直接curl**が確実
- sitemap lastmod(diagnosis)・deploy両push・GSC再送信。残: P3(reviews確認日=保護ルール判断待ち)/来週観測

## 2026-07-04 戦略v3 P1: 公的支援クラスタ5本新設（MediaXAI「p1進めて」）✅
- 並列agent5体で新設(全て一次情報到達確認・2026年7月参照・架空ゼロ): women-it-support-map(全国ハブ・埼玉県事業実在確認/福岡終了事業はラベル付き/SSL切れ不掲載/大阪愛知は未確認と正直記載)/women-digital-college(令和8年度実施中・大原学園・定員670名・入門はテキスト2,640円のみ自己負担/基礎応用は完全無料・7/1付募集状況)/training-benefit-it(現行給付率20/40-50/50-80%を厚労省確認・meti到達不可のためReスキル講座は不使用)/hello-training-it(給付金月10万の要件公式準拠・変動額は公式誘導・託児こだわり検索案内)/manabi-dx(777講座/無料49の実測値+変動注記・開設年は一次未確認で不掲載)
- 5本+tokyo-women-training(勝ちページ)を相互リンクで束ね、category-indexに「公的支援・給付金で学ぶ」カテゴリ新設(13→14カテゴリ)
- sitemap 118→123・deploy両push・本番5/5+カテゴリ+sitemap検証・GSC再送信。残: P2診断結果最適化(承認待ち)/P3 reviews確認日(保護ルールで要判断)/登録リクエスト状況確認→来週観測

## 2026-07-03 戦略v2実装（MediaXAI「進めてください」承認）✅
- 診断(7/2実測): 28日6c/399i・URL検査32/118=インデックス50%/検出未登録41%(data/career-path/diagnosis/salary/category-index等の核が未登録)。勝ち筋=育成事業クラスタ(口コミ10.1位・tokyo-women-training 9.7位)だが**トップ/ranking/beginnerから0リンクで孤立**
- 1.育成事業クラスタ制圧: Footer「カテゴリから探す」に追加(全122頁)・beginner/reskilling-leave関連記事・tokyo本文リンク化・rankingに「未経験は公的支援もチェック」入口=導線5本。公式サイト実確認で「最新の募集状況(2026-07-02確認: 前期2期生7月初旬/プログラミング残りわずか/後期1期生8/1両コース募集中)」boxを追加・参照日7月化・dateModified更新
- 3.ranking整合: title/h1「転職エージェント・転職サイト8選」(9.8位クエリの語順一致)・鮮度ラベル2026年7月更新。※エージェント紹介文言・料金・順位は不変更
- 4.data引用資産化: 引用転載セクション+クレジット例+コピー用HTMLスニペット(factoring survey方式)
- 2.登録リクエスト優先20URL(1日10件×2日)をDiscord提示(id 1522322320486830130)=MediaXAI作業待ち
- sitemap lastmod6件(118URL)・deploy両push・本番4項目cache回避curl検証・GSC再送信。残: 5.来週GSC APIで育成事業/テックゴー観測→次の刈り取り確定

## 2026-07-02 テックゴー掲載✅（MediaXAI「テックゴーを掲載したい+無料キャリア面談KWで上位表示ページ」）
- 新規2ページ: /reviews/techgo/（口コミ・評判レビュー、既存8社と同テンプレ）+ /articles/techgo-career-mendan/（KW「テックゴー 無料キャリア面談」「テックゴー キャリア面談 無料」対策記事）
- 全事実は一次ソース tech-go.jp から取得（curl直取得・JSレンダリング回避）: 運営=株式会社MyVision(虎ノ門・許可番号13-ユ-314719・資本金1億・従業員388名)、求人1万件以上、平均年収UP138万円(※2025年6-7月実績注記付き)、交渉成功率100%(※2025年9月時点)、20代120万/30代160万、5STEPの流れ、登録最短60秒。設立年は一次ソース未確認のため不掲載
- 口コミは公式「ご利用者の声」の要約と明記（第三者口コミ僅少・未経験サポート記載なし・女性専用プログラム記載なし、も正直に記載→type-woman/workport併用導線）
- 内部リンク: 記事⇔レビュー相互 + category-index「エージェント・サービス比較」に記事追加。ranking/診断への組み込みは収益核保護のため未実施（要相談）
- sitemap116→118(category-index lastmod更新)。両repo push・本番200/内容/sitemap118をcache-bust curl検証・GSC再送信済
- 残: テックゴーをranking(9社目)・診断(9社目スコアリング)に組み込むか要MediaXAI判断。アフィリエイトリンク支給あればCTA差替(現在は公式サイト直リンク)

## 2026-07-05 戦略v4 P2: ITパスポート試験ガイド新設（MediaXAI「p2進めよう」）✅
- /articles/cert-itpassport/ 新設。全事実はIPA公式を一次確認(2026年7月): 国家試験(情報処理促進法)・CBT随時47都道府県・7,500円税込・100問120分四肢択一(評価92問)・ストラテジ35/マネジメント20/テクノロジ45・合格基準=総合600+分野別各300(IRT)・シラバスVer.6.5(2026年1月掲載)・生成AI項目対応
- ★合格率は推移表Excel(202605_ip_01_suiihyo.xlsx)から令和7年度通年を自算: 応募307,266/受験271,352(受験率88.3%)/合格132,012=**48.6%**(月次44〜53%変動も記載)。勉強時間の相場は無出典のため書かず(STEP型勉強法+IPA公式過去問/CBT疑似体験ソフト誘導で代替)。女性比率統計は公式に無いため不使用
- 差別化=正直路線: 「単体でエンジニア転職の決め手にならない・本命は基本情報」を明記し場面別の効き方表。エントリーシート活用の広がりはIPA公式記載を出典に
- クラスタ接続: sec6公的支援(manabi-dx/training-benefit-it/hello-training-it)+sec9→cert-kihonjoho/certification+関連4枚。逆リンク=cert-kihonjoho本文のITパスポート言及をリンク化+lib/categories.ts資格カテゴリ追加(category-index・/sitemap/に自動反映)
- sitemap 124→125(cert-kihonjoho/category-index/sitemapのlastmodも更新)・tsc0・build成功・deploy両push・本番検証(200/48.6%/7,500円/導線3箇所/sitemap125)・GSC再送信
- 残: v4 P1(テックゴーranking/診断組み込み=要判断)/P3(公的支援第2弾=GSC観測後)/P4(登録リクエスト後の再計測)

## 2026-07-05 戦略v4 P1: テックゴー収益動線組み込み（MediaXAI「p1進めて」）✅
- ranking 8社→9社化: agents配列にrank9テックゴー追加(公式確認値7/2のみ: MyVision/許可番号/1万件/年収UP138万・2025年6-7月実績/交渉成功率100%・2025年9月時点/20代+120万・30代+160万)。産休育休/リモート/女性アドバイザーは公式記載なし→「要確認」と正直記載。title/h1/比較表/状況ナビ(+年収交渉行)/typeRecommendations(+年収交渉ブロック)/トップ紹介文を9社/9選へ
- 診断ツール9社化: Diagnosis.tsxにtechgo Key/AGENTS/RELATED(面談記事+negotiation)/ZERO追加、スコアはQ1経験者+1/Q3年収最優先+2/Q5専門特化+1/Q6 30代+1の控えめ設計(既存バランス維持)。diagnosis/page.tsxのmeta/グリッド/CTAも9社化
- ★同時に7/4承認済み差異修正のranking未反映分を整合: levtech 48,000→約58,000(本文含む)/type-woman 29,000→38,000/geekly 30,000→46,000/green 30,000→約28,000/recruit 740,000→非公開含む約100万件(2026年6月時点・本文含む)。裏付け不能のリモート%を表・remoteRate・FAQ・levtech本文から撤去→「公式サイトに記載なし（要確認）」(reworks 100%特化のみ維持)。doda 240,000は公式到達不可のため据え置き
- 🐛教訓: python挿入で`rfind('];')`が型定義`values: string[];`の`];`に誤マッチし配列外挿入→ビルド失敗。**配列末尾への挿入はユニークな前後アンカー文字列(直前要素+閉じ)で行う**
- sitemap lastmod3件(/,ranking,diagnosis)・tsc0・build成功・deploy両push・本番検証(9社/9選・旧値0・診断JSチャンク直接curl・sitemap)・GSC再送信
- 残: v4 P3(公的支援第2弾=GSC観測後)/P4(登録リクエスト後再計測)/テックゴーのアフィリンク支給あればCTA差し替え

## 2026-07-05 戦略v4 P3: 公的支援クラスタ第2弾3本（MediaXAI「p3進めよう」）✅
- 並列agent3体で新設(全て一次到達確認・出典/参照日付き・架空ゼロ): saitama-women-training(埼玉県女性デジタル人材育成推進事業=公式全ページcurl確認: 無料/在職可/年齢制限記載なし/基礎応用月1,000名/実践46時間2期制/自営型テレワーク新設8月〜/窓口=県女性キャリアセンター。託児は記載なしと正直記載)/hitorioya-it-training(こども家庭庁一次: 高等職業訓練促進給付金 月10万円[課税世帯70,500円]最終年+4万・シスコ/LPI等デジタル分野が制度本体の対象資格例・自立支援教育訓練給付金60%最大240万円。「恒久化」の語は公式表現でないため不使用)/women-digital-plan(内閣府「新・女性デジタル人材育成プラン」令和7年6月10日両本部決定=PDF表紙で裏取り・4パターン支援・個人窓口がない事実を結論に据え既存記事への橋渡しハブに)
- 推測URL2件(cfa.go.jp/gender.go.jp)が404→WebSearchで正URL特定後に到達確認してからagent起動(推測URL排除の運用が機能)
- ハブwomen-it-support-mapに導線3本(埼玉カード内詳細リンク+関連カード2枚)・categories公的支援カテゴリ+3(category-index/sitemapページ自動反映)・sitemap 125→128
- tsc0・build成功・deploy両push・本番3/3 200+ハブ導線+sitemap128+主要事実grep検証・GSC再送信
- 残: v4 P4(登録リクエスト後再計測)/第1弾5本+第2弾3本のGSC観測(7月中旬)→第3弾判断

## 2026-07-06 テックゴーアフィリンク設定（MediaXAI依頼・moshimo）✅
- 差し替え対象の判断: CTAボタン2箇所のみアフィリ化(reviews/techgo:「テックゴーに無料相談する」/techgo-career-mendan:「無料キャリア面談を予約する」)。**出典リンク(tech-go.jp/service等)は検証可能性のため直リンク維持**(アフィリURLは個別ページに飛べない)。TOP Pickup/ranking/診断は内部リンクのみで対象外
- 実装: moshimoクリックURL+インプレッションピクセル(width/height 1・loading lazy)+rel="nofollow noopener"+referrerPolicy+attributionsrc(JSXでは`{...({attributionsrc:""} as any)}`のspreadで付与=TS型エラー回避)。**ステマ規制対応でCTA直下に「PR（アフィリエイト広告）・公式サイトへ移動します」を明記**(サイト初のアフィリのためページ内PR表記が無かった)
- 検証: 本番2ページでクリックURL/ピクセル/attributionsrc/PR表記を確認+アフィリリンクの遷移先がform.tech-go.jp(moshimo計測パラメータ付き)に到達することをcurlで確認。dateModified/sitemap lastmod更新・GSC再送信

## 2026-07-07 戦略v5 P1: knowクラスタ深掘り（MediaXAI「p1進めよう」）✅
- GSC実測でknow系は既存ページが20〜50位で頭打ち(コーディングテスト対策39位/カジュアル面談逆質問26位/逆質問)と判明→新規量産でなく「近い順位の既存3本を追記深掘り＋クラスタ内部リンク」に方針決定(sole-lab P3/factoringトピッククラスタと同じ"あと一歩を刈る"判断)
- agent1体で既存文を書き換えず追記のみ: coding-test(頻出パターン別対策6型+当日の時間配分・目次6→10・FAQ+2)/reverse-questions(カジュアル面談での逆質問+働き方見極め4観点・女性視点・目次9→11)/casual-interview(面談後の見極め4軸・目次10→11)。dateModified 2026-07-07
- ★内部リンク配線: 3本すべてに/diagnosis/(従来0本)+/ranking/+兄弟know記事(casual↔reverse↔interview-guide↔offer-meeting、coding↔technical-interview)を追加=知識クラスタのハブ&スポーク強化。全slug実在確認
- 架空統計/体験談なし・料金/エージェント文言不変更。sitemap lastmod3件・deploy両push・本番3/3(追記セクション+診断導線)cache回避curl検証・GSC再送信
- 残: v5 P2(テックゴー年収動線)/P4(育成事業刈り取り)/P3(ビッグKW権威底上げ)。※クラスタ全体のハブ&スポーク配線はfactoringトピッククラスタ戦略と同じ思想で横展開余地

## 2026-07-07 戦略v5 P2: テックゴー年収動線（MediaXAI「p2進めて」）✅
- 年収系記事は充実(negotiation/salary/salary-by-age/salary-by-job)なのに**テックゴー導線が0本**と判明→「年収交渉に強いテックゴー」への送客を配線。指名検索が小さい新サービスを広い"年収を上げたい"意図から流し込む設計
- negotiation「おすすめエージェント」節にテックゴーを先頭カード追加(年収交渉成功率100%/平均UP138万円・公式2026年7月確認・/reviews/techgo/へ内部リンク=アフィリCTAはレビュー側に集約し内部送客)
- salary/salary-by-age/salary-by-jobの年収交渉文脈に「年収交渉をプロに任せたいなら」calloutを追加(/reviews/techgo/+/ranking/へ)
- 🐛ついで是正: negotiation内のレバテック旧値「48,000件」「リモート約60%」(7/5ランキング是正の漏れ)を「約58,000件」「リモート%削除」へ。7/4承認の差異修正クラスと同種
- dateModified 4件・表示最終更新日も07-07へ・sitemap lastmod4件・deploy両push・本番検証(テックゴー導線4/4・旧値消滅)・GSC再送信
- 残: v5 P4(育成事業刈り取り)/P3(ビッグKW権威底上げ)。※テックゴーのアフィリは/reviews/techgo/と/articles/techgo-career-mendan/のCTAに設定済み(7/6)

## 2026-07-07 戦略v5 P3: ビッグKW=E-E-A-T実体化（MediaXAI「p3進めて」）✅
- ビッグKW(女性エンジニア転職29位等)は新規ドメインの評価天井が主因→半年スパンの土台づくりとしてE-E-A-T実体化を実施(factoring/kimonoと共通の底上げ策)
- Organization schema(layout)を強化: publisher配下にparentOrganization=株式会社MediaX(東京都渋谷区)・publishingPrinciples→/content-policy/・knowsAbout(女性エンジニア転職/IT転職/年収/資格/未経験)を追加。**sameAsは実在の公式SNS URLが無いため捏造せず不追加**(必要ならMediaXAIからURL支給後に追加)
- Footer全ページに運営者(株式会社MediaX)+情報メディア明示+確認日運用+ランキングは広告非影響、の編集方針文を追加(content-policyへリンク)=shoenehou/kimono/factoring型の透明化。content-policy自体は既に運営/編集体制/確認方針が充実
- sitemap lastmod・deploy両push・本番(Footer運営表記・schema parentOrganization/publishingPrinciples)cache回避curl検証・GSC再送信
- 残: v5 P4(育成事業刈り取り)。※sameAsはMediaXAIの公式SNS URL待ち。ビッグKW順位は権威蓄積後(数ヶ月)に観測

## 2026-07-08 戦略v5 P4: 育成事業クラスタ刈り取り（MediaXAI「p4進めて」）✅
- 勝ちページ tokyo-women-training(「育成事業 口コミ」10位)を5位内へ: ①鮮度更新=公式(women-tokyo-en.metro.tokyo.lg.jp)を7/8再確認し募集状況を更新(**前期2期生は両コース募集終了・後期1期生8/1が両コース募集中**=7/2時点から変化を正確反映)+最終更新日6/12→7/8+dateModified+出典参照日7/8。虚偽の日付でなく実確認に基づく更新
- ②内部リンク集約: 公的支援クラスタ→勝ちページの唯一の穴だったhitorioya-it-training→tokyo追加+after-maternity(産育休学び直し文脈)→tokyo追加。ranking/beginner/reskilling-leaveは既にリンク済み
- sitemap lastmod3件・deploy両push・本番(募集状況7/8・最終更新・クラスタ集約2本)cache回避curl検証・GSC再送信
- ★v5完遂(P1know深掘り/P2テックゴー年収動線/P3 E-E-A-T/P4育成事業刈り取り)。残: 登録リクエスト後のインデックス再計測(MediaXAI作業待ち)/sameAs用SNS URL待ち/育成事業10→5位・know順位の観測

## 2026-07-09 v6策定（MediaXAI「ネクストアクション策定して欲しい」）→承認待ち
- 実測(6/25-7/8): 「女性エンジニア 転職サイト おすすめ」**3.0位**(収益クエリがP1上位到達)・**職種×女性が勝ち筋実証**(データベースエンジニア女性6.2位/転職女性社内se20位)・育成事業口コミ11位台(P4反映待ち)・ビッグ30位・python資格50代32位
- 提案(id 1524694029898485791): P1=職種×女性クラスタ強化(既存職種~15本に「女性が働くリアル」深掘り+相互配線+診断導線=sole-lab症状4本と同型) P2=トピッククラスタ配線監査+穴埋め(factoring手法移植・14カテゴリ×ピラーup/down機械分析) P3=資格×年代(python資格50代32位→cert-pythonに年代別セクション+学び直し接続) P4=登録リクエスト実施確認→再計測+育成事業/know観測
- ★全4サイトの勝ち筋が確定: factoring=地域+指名ニッチ/sole-lab=症状ロングテール/kimono=産地織物×実売/women-engineer=職種×女性+公的支援。「実証面への集中投資+クラスタ配線+E-E-A-T」の共通型

## 2026-07-09 v6 P1: 職種×女性クラスタ強化（MediaXAI「p1よろしく！」）✅
- 着手前実測で「クラウドエンジニア 女性」**1位**(cloud-gcp-azure)も発見→勝ち面3実証(1位/DB6位=sql-database/社内SE19位)
- 並列agent4体で15職種ページに「女性が{職種}として働くリアル」を追記のみで深掘り(internal-se/backend/data-engineer/data-scientist/frontend/infrastructure/qa-tester/web-designer/cloud-gcp-azure/sre-devops/security/ai-ml-career/embedded/game-industry/sql-database)。構成=①相性(リモート/夜間/文化) ②産育休・時短との相性 ③キャリアパス ④正直な注意点(QA単調/組み込み男性多め/名ばかりSRE等)+FAQ各2(schema自動反映)+診断・ランキング導線+職種相互リンク
- 品質: 1位/6位ページは既存構造完全維持(FAQ後挿入・diffで既存行変更3行のみ機械確認)・**無出典の女性比率等は一切書かず**/articles/data/等への内部リンク委譲・「一般に/傾向」明示で断定回避
- sitemap lastmod15/15・deploy両push・本番15/15(リアル節+診断導線)検証・GSC再送信
- 残: v6 P2(クラスタ配線監査)/P3(資格×年代)/P4(登録リクエスト確認→再計測)。職種×女性の順位変化は2-4週で観測
