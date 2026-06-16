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
