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
