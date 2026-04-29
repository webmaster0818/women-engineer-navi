import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの技術面接対策｜コーディングテスト・設計課題の準備法",
  description:
    "女性エンジニアの技術面接対策ガイド。コーディングテスト・システム設計課題・技術質問の対策法を徹底解説。面接で聞かれる質問例と回答のポイント、事前準備の進め方も紹介します。",
  alternates: { canonical: "/articles/technical-interview/" },
  openGraph: {
    title: "女性エンジニアの技術面接対策｜コーディングテスト・設計課題の準備法",
    description: "女性エンジニアの技術面接対策ガイド。コーディングテスト・システム設計課題・技術質問の対策法を徹底解説。",
    url: "https://women-engineer-navi.pages.dev/articles/technical-interview/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの技術面接対策｜コーディングテスト・設計課題の準備法",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  description: "女性エンジニアの技術面接対策ガイド。コーディングテスト・システム設計課題・技術質問の対策法を徹底解説。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/articles/technical-interview/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "技術面接ではどんな質問が出ますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "技術面接では主に3種類の質問が出ます。(1)技術的な知識を問う質問（使用言語・フレームワーク・設計パターンなど）、(2)過去のプロジェクト経験に関する深掘り質問、(3)技術的な課題解決力を測る質問（コーディングテスト・設計課題）です。企業によってはホワイトボードコーディングやライブコーディングが実施されることもあります。",
      },
    },
    {
      "@type": "Question",
      name: "技術面接の準備にどのくらいの期間が必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一般的に2週間〜1ヶ月程度の準備期間を確保することをおすすめします。コーディングテスト対策には毎日1〜2問のアルゴリズム問題を解くことが効果的です。システム設計は書籍やオンライン教材で1〜2週間学習し、実際に設計図を描く練習をしましょう。在職中の場合は、1日30分〜1時間の学習を継続するのが現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "女性エンジニアならではの面接対策はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "技術面接の内容自体に性別による差はありません。しかし、面接の場でキャリアプランについて聞かれた際に、産休育休の取得予定や時短勤務の希望を率直に伝えることは問題ありません。むしろ、制度が整っている企業かどうかを確認する良い機会です。転職エージェント経由なら、事前に企業の女性活躍状況を確認できます。",
      },
    },
    {
      "@type": "Question",
      name: "コーディングテストが苦手ですが対策法はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "コーディングテストが苦手な場合、LeetCodeやAtCoderで段階的に練習するのが効果的です。まずはEasy問題を50問程度解き、基本的なデータ構造とアルゴリズムを身につけましょう。その後Medium問題に挑戦し、解法パターンを蓄積していきます。模擬面接を受けることで、時間制限下での解答力も向上します。",
      },
    },
    {
      "@type": "Question",
      name: "システム設計の面接ではどんな問題が出ますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "システム設計面接では「URLの短縮サービスを設計してください」「チャットアプリのバックエンドを設計してください」「SNSのタイムライン機能を設計してください」などの問題が出ます。スケーラビリティ・可用性・データ整合性などの非機能要件をどう考慮するかが評価ポイントです。",
      },
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer-navi.pages.dev" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer-navi.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "技術面接対策", item: "https://women-engineer-navi.pages.dev/articles/technical-interview/" },
  ],
};

export default function TechnicalInterviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "技術面接対策" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#f97066" }}>面接・選考</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの技術面接対策
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">コーディングテスト・設計課題の準備法を徹底解説</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月29日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. 技術面接の種類と流れ</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. コーディングテストの対策</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. システム設計面接の対策</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 技術質問・経験深掘りの対策</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. ポートフォリオの活用法</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 面接当日のポイント</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. よく出る技術質問30選</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. 女性エンジニア特有の質問への対処</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. おすすめ対策リソース</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* 技術面接の種類 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">技術面接の種類と流れ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              エンジニアの転職面接では、一般的な面接に加えて技術的な評価が行われます。企業によって形式は異なりますが、主に以下の3つの種類があります。選考プロセスを理解し、それぞれに対応した準備を行うことが重要です。
            </p>
            <p>
              一般的なエンジニア転職の選考フローは、書類選考 → コーディングテスト（オンライン） → 技術面接（1〜2回） → 最終面接（役員・人事）という流れです。Web系企業やメガベンチャーほど技術面接の比重が高い傾向があります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            {[
              { title: "コーディングテスト", desc: "アルゴリズム・データ構造の問題をオンラインで解答します。制限時間内にコードを書き、テストケースを通過させる形式が一般的です。HackerRank・Codility・自社開発の問題を使用する企業が多いです。", color: "#0891b2" },
              { title: "システム設計面接", desc: "大規模システムのアーキテクチャを設計する面接です。面接官とディスカッションしながら、要件の整理から設計の詳細化まで行います。主にシニアレベル以上で実施されます。", color: "#7c3aed" },
              { title: "技術質問・経験深掘り", desc: "過去のプロジェクト経験や技術的な意思決定について深掘りされます。使用技術の選定理由、直面した課題とその解決方法、チームでの役割などが聞かれます。", color: "#f97066" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* コーディングテスト対策 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">コーディングテストの対策</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              コーディングテストは多くのIT企業で実施されており、特にWeb系企業やメガベンチャーでは重要な選考ステップです。アルゴリズムとデータ構造の基礎知識が問われるため、計画的な準備が必要です。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { title: "基本データ構造の復習", desc: "配列・リスト・スタック・キュー・ハッシュマップ・ツリー・グラフなどの基本データ構造の特性と操作を理解しましょう。各データ構造の計算量（O記法）も押さえておくことが重要です。特にハッシュマップとツリーは頻出です。" },
              { title: "主要アルゴリズムの習得", desc: "ソート（クイックソート・マージソート）、探索（二分探索・BFS・DFS）、動的計画法、貪欲法、スライディングウィンドウなどの定番アルゴリズムを実装できるようにしましょう。解法パターンを覚えることで、初見の問題にも対応しやすくなります。" },
              { title: "練習問題を毎日解く", desc: "LeetCode・AtCoder・HackerRankで毎日1〜2問ずつ練習しましょう。最初はEasyレベルから始め、慣れてきたらMediumに進みます。2週間で30〜50問解けば、基本的なパターンをカバーできます。" },
              { title: "時間を計って解く練習", desc: "本番では制限時間があるため、時間を意識した練習が重要です。Easy問題は15〜20分、Medium問題は30〜40分を目安に解く練習をしましょう。解けなかった問題は解説を読んで理解し、翌日に再挑戦します。" },
              { title: "コードの品質にも注意", desc: "正解を出すだけでなく、変数名の命名・コードの読みやすさ・エッジケースの処理なども評価されます。コメントで思考プロセスを示すことも有効です。実務で書くコードと同じ品質を意識しましょう。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>{i + 1}. {item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* システム設計面接 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">システム設計面接の対策</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              システム設計面接は、主にシニアエンジニアやテックリード候補に対して実施されます。正解が一つではない問題に対して、面接官とディスカッションしながら設計を進めるプロセスが評価されます。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>システム設計面接の進め方</h3>
            <div className="space-y-4">
              {[
                { step: "1. 要件の明確化（5分）", desc: "機能要件・非機能要件を面接官に質問して確認します。ユーザー数・リクエスト数・データ量などの規模感を把握しましょう。" },
                { step: "2. 概要設計（10分）", desc: "全体のアーキテクチャを描きます。クライアント・API・データベース・キャッシュなどのコンポーネントを配置し、データの流れを示します。" },
                { step: "3. 詳細設計（15分）", desc: "各コンポーネントの詳細を議論します。APIエンドポイント設計・データベーススキーマ・キャッシュ戦略などを具体的に説明します。" },
                { step: "4. スケーラビリティ（10分）", desc: "ユーザー数の増加にどう対応するかを議論します。水平スケーリング・ロードバランシング・データベースシャーディングなどの戦略を提案します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="inline-block rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-white flex-shrink-0 mt-1" style={{ backgroundColor: "#0891b2" }}>{i + 1}</span>
                  <div>
                    <h4 className="font-bold text-sm">{item.step}</h4>
                    <p className="text-sm text-text-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3aed" }}>よく出るシステム設計のテーマ</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                "URL短縮サービス（TinyURL）",
                "チャットアプリ（Slack風）",
                "SNSのタイムライン設計",
                "ECサイトの注文システム",
                "動画配信プラットフォーム",
                "検索エンジンの設計",
                "通知システムの設計",
                "ファイルストレージサービス",
              ].map((topic, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-text-light">
                  <span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span>
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 技術質問対策 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">技術質問・経験深掘りの対策</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              技術面接では、過去のプロジェクト経験を深掘りされることが多いです。STAR法（Situation・Task・Action・Result）を使って、具体的かつ論理的に説明する準備をしましょう。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { title: "プロジェクト経験の整理", desc: "過去2〜3年の主要プロジェクトについて、使用技術・自分の役割・チーム規模・成果を整理します。技術的な課題とその解決方法は特に詳しく話せるように準備しましょう。「なぜその技術を選んだのか」「他の選択肢との比較」なども聞かれます。" },
              { title: "技術的な意思決定の説明", desc: "アーキテクチャの選定理由、パフォーマンス改善の手法、技術的負債の解消方法など、技術的な意思決定について論理的に説明できるようにします。トレードオフを理解し、メリット・デメリットを客観的に述べることが重要です。" },
              { title: "失敗経験の共有", desc: "技術的な失敗やトラブル対応の経験も聞かれます。重要なのは失敗自体ではなく、そこから何を学び、どう改善したかです。インシデント対応や障害復旧の経験は、責任感と問題解決力のアピールになります。" },
              { title: "チーム開発での役割", desc: "コードレビューの取り組み、後輩の指導、チーム内での技術的なリーダーシップなど、個人の技術力だけでなくチームへの貢献もアピールポイントになります。特にシニアポジションでは重視されます。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ポートフォリオ */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ポートフォリオの活用法</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ポートフォリオは技術面接で大きなアドバンテージとなります。GitHubリポジトリや個人プロジェクトを通じて、コードの品質や技術的な判断力を事前にアピールできます。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>効果的なポートフォリオの要素</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>実際に動作するWebアプリケーション（デプロイ済み）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>きれいなREADME（概要・技術選定理由・アーキテクチャ図）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>テストコードの充実（ユニットテスト・E2Eテスト）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>CI/CDパイプラインの構築（GitHub Actions等）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>技術ブログでの情報発信</span></li>
            </ul>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              ポートフォリオは完璧なものを作る必要はありません。大切なのは、技術に対する情熱と学習意欲を示すことです。小さなアプリケーションでも、テストやドキュメントがしっかりしていれば高く評価されます。
            </p>
            <p>
              面接時にはポートフォリオの技術選定理由やアーキテクチャについて説明を求められることがあります。なぜその技術を選んだのか、どんな課題をどう解決したのかを説明できるようにしておきましょう。
            </p>
          </div>
        </div>
      </section>

      {/* 面接当日のポイント */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">面接当日のポイント</h2>
          <div className="space-y-4 mt-4">
            {[
              { title: "思考プロセスを声に出す", desc: "コーディングテストや設計面接では、考えていることを声に出して説明しましょう。正解にたどり着けなくても、思考プロセスが評価されます。「まずは愚直な解法を考えます」「計算量を改善するために...」など、思考の流れを共有することが大切です。" },
              { title: "分からないことは正直に伝える", desc: "知らない技術について質問された場合、知ったかぶりをするのではなく、正直に伝えた上で「類似の技術では〇〇の経験があります」と関連知識をアピールしましょう。学習意欲や正直さも評価ポイントです。" },
              { title: "質問を恐れない", desc: "技術面接では面接官に質問することが推奨されています。要件の確認・制約条件の確認・エッジケースの確認など、適切な質問ができることは実務能力の証明になります。「この問題の入力範囲は？」「データの更新頻度は？」など具体的に質問しましょう。" },
              { title: "テスト環境の事前確認", desc: "オンライン面接の場合は、事前にカメラ・マイク・ネットワークの動作を確認しましょう。コーディング環境（IDE・エディタ）も事前に確認し、使い慣れた設定で臨めるようにしておきます。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* よく出る技術質問 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よく出る技術質問30選</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>技術面接でよく聞かれる質問を分野別にまとめました。回答の方向性を準備しておくと、面接で落ち着いて答えられます。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            {[
              { category: "プログラミング基礎", questions: ["オブジェクト指向の3つの特徴は？", "RESTful APIの設計原則は？", "SQLのJOINの種類と違いは？", "デザインパターンで使ったことのあるものは？", "非同期処理の実装方法は？"] },
              { category: "Web技術", questions: ["HTTPメソッドの種類と使い分けは？", "認証・認可の違いは？", "CORSとは何か説明してください", "キャッシュの戦略について", "WebSocketとHTTPの違いは？"] },
              { category: "インフラ・DevOps", questions: ["コンテナとVMの違いは？", "CI/CDの構築経験を教えてください", "ロードバランサーの種類は？", "データベースのインデックスの仕組みは？", "マイクロサービスのメリットとデメリットは？"] },
              { category: "経験・キャリア", questions: ["最も技術的に難しかったプロジェクトは？", "コードレビューで重視するポイントは？", "技術選定の際に重視する基準は？", "パフォーマンス改善の経験を教えてください", "今後学びたい技術は何ですか？"] },
              { category: "設計・アーキテクチャ", questions: ["モノリスとマイクロサービスの判断基準は？", "データベースの正規化について", "スケーラビリティの確保方法は？", "障害対策・リカバリーの設計は？", "テスト戦略の考え方は？"] },
              { category: "チーム・プロセス", questions: ["アジャイル開発の実践経験は？", "チーム内の技術的な意見対立の解消法は？", "技術的負債への取り組み方は？", "後輩の育成やメンタリング経験は？", "リモートでのチーム開発の工夫は？"] },
            ].map((group, i) => (
              <div key={i} className="rounded-xl border bg-white p-5" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-base font-bold mb-3" style={{ color: "#0891b2" }}>{group.category}</h3>
                <ul className="space-y-2 text-sm text-text-light">
                  {group.questions.map((q, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="font-bold" style={{ color: "#7c3aed" }}>{i * 5 + j + 1}.</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 女性特有の質問 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニア特有の質問への対処</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              技術面接の内容自体に性別による差はありませんが、キャリアに関する質問では女性エンジニアならではの視点で答える場面があるかもしれません。以下のポイントを押さえておきましょう。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { title: "キャリアプランについて", desc: "「今後のキャリアプランは？」と聞かれた際に、技術的な成長目標を中心に話しましょう。ライフイベント（結婚・出産等）について聞かれた場合は、企業の制度を確認する良い機会と捉え、率直にコミュニケーションを取ることをおすすめします。" },
              { title: "働き方の希望について", desc: "リモートワークや時短勤務の希望がある場合は、面接の場で確認しても問題ありません。ただし、転職エージェントを通じて事前に企業の制度を確認しておくことで、面接では技術的な話題に集中できます。" },
              { title: "ロールモデルとしての期待", desc: "女性エンジニアとしてのロールモデルや、ダイバーシティへの考え方について聞かれることがあります。自分の経験や価値観を素直に伝えれば問題ありません。チームの多様性がプロダクトの品質向上に繋がるという視点は好印象です。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめリソース */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ対策リソース</h2>
          <div className="grid gap-6 md:grid-cols-2 mt-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>コーディング練習</h3>
              <ul className="text-sm text-text-light space-y-2">
                <li>- LeetCode（アルゴリズム練習の定番）</li>
                <li>- AtCoder（日本語対応の競技プログラミング）</li>
                <li>- HackerRank（多言語対応の練習サイト）</li>
                <li>- Codility（実際の選考でも使われる）</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>システム設計</h3>
              <ul className="text-sm text-text-light space-y-2">
                <li>- 「System Design Interview」書籍</li>
                <li>- Grokking the System Design Interview</li>
                <li>- System Design Primer（GitHub）</li>
                <li>- 技術ブログの事例記事</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#f97066" }}>書籍</h3>
              <ul className="text-sm text-text-light space-y-2">
                <li>- 「世界で闘うプログラミング力を鍛える本」</li>
                <li>- 「アルゴリズム実技検定 公式テキスト」</li>
                <li>- 「Web技術の基本」</li>
                <li>- 「達人に学ぶDB設計」</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#10b981" }}>模擬面接</h3>
              <ul className="text-sm text-text-light space-y-2">
                <li>- 転職エージェントの面接対策</li>
                <li>- Pramp（ペア模擬面接サービス）</li>
                <li>- エンジニア勉強会での練習</li>
                <li>- 同僚・友人との模擬面接</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d1dce5" }}>
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                  <span><span style={{ color: "#0891b2" }} className="mr-2">Q.</span>{faq.name}</span>
                  <span className="text-text-light group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                  <p className="pt-4"><span style={{ color: "#f97066" }} className="font-bold mr-2">A.</span>{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 面接後のフォローアップ */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">面接後のフォローアップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              技術面接が終わった後のフォローアップも重要です。以下のポイントを押さえることで、合格率を高めることができます。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { title: "面接の振り返りを記録する", desc: "面接終了後すぐに、聞かれた質問・自分の回答・手応えを記録しましょう。次の面接に活かせるだけでなく、同じ企業の二次面接に向けた準備にもなります。解けなかった問題は後で復習し、解法を身につけておきましょう。" },
              { title: "エージェントへのフィードバック共有", desc: "面接の内容や雰囲気をエージェントに報告することで、次回以降の面接対策がより精度の高いものになります。企業側のフィードバックもエージェント経由で確認でき、改善ポイントが明確になります。" },
              { title: "技術課題のフォローアップ", desc: "面接で出された課題に対して追加で調べたことや、より良い解法を思いついた場合は、エージェント経由で企業に伝えてもらうことも可能です。技術への探究心をアピールできます。" },
              { title: "複数企業の選考を並行して進める", desc: "1社に絞らず、2〜3社の選考を並行して進めることで、内定時の条件交渉で有利になります。面接経験を積むことで実力も向上するため、第一志望以外の企業も積極的に受けましょう。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/coding-test/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>コーディングテスト対策</h3>
              <p className="text-sm text-text-light">頻出問題と解き方ガイド</p>
            </a>
            <a href="/articles/portfolio/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>ポートフォリオ作成ガイド</h3>
              <p className="text-sm text-text-light">エンジニア転職に効くポートフォリオ</p>
            </a>
            <a href="/articles/resume-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>職務経歴書の書き方</h3>
              <p className="text-sm text-text-light">技術力をアピールする書き方</p>
            </a>
            <a href="/articles/interview-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>面接ガイド</h3>
              <p className="text-sm text-text-light">エンジニア面接の全体像</p>
            </a>
          </div>
        </div>
      </section>

      {/* まとめチェックリスト */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">技術面接準備チェックリスト</h2>
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
            <div className="space-y-3">
              {[
                "過去のプロジェクト経験を3つ以上整理した",
                "各プロジェクトでの技術的な課題と解決方法を説明できる",
                "使用技術の選定理由を論理的に述べられる",
                "アルゴリズムとデータ構造の基礎を復習した",
                "LeetCodeまたはAtCoderで20問以上解いた",
                "システム設計の基本パターンを学習した",
                "模擬面接を少なくとも1回は実施した",
                "ポートフォリオを最新の状態に更新した",
                "面接環境（カメラ・マイク・ネットワーク）を確認した",
                "逆質問の準備をした（企業の技術スタック・チーム構成・開発文化等）",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-text-light">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded border flex-shrink-0 mt-0.5" style={{ borderColor: "#d1dce5" }}>
                    <span style={{ color: "#0891b2" }} className="font-bold text-xs">&#10003;</span>
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">エージェントの面接対策を活用しよう</h2>
            <p className="text-white/90 mb-6">IT特化型エージェントなら、企業ごとの技術面接の傾向をアドバイスしてもらえます。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
