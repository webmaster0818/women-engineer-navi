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
