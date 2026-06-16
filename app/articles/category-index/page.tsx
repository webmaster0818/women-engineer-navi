import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "記事カテゴリ一覧｜女性エンジニア転職ナビの歩き方【全記事ガイド】",
  description:
    "女性エンジニア転職ナビの全100記事を13カテゴリに整理した記事ハブ。はじめての方向けガイドから職種・言語・資格・年収・働き方・両立・年代別・地域・選考対策・業界研究・エージェント比較・キャリアまで、目的の記事がすぐ見つかります。",
  alternates: { canonical: "/articles/category-index/" },
  openGraph: {
    title: "記事カテゴリ一覧｜女性エンジニア転職ナビの歩き方【全記事ガイド】",
    description:
      "全100記事を13カテゴリに整理した記事ハブ。職種・言語・資格・年収・働き方・両立・選考対策など、目的の記事がすぐ見つかります。",
    url: "https://women-engineer.com/articles/category-index/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "記事カテゴリ一覧｜女性エンジニア転職ナビの歩き方【全記事ガイド】",
  datePublished: "2026-04-29",
  dateModified: "2026-06-12",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer.com" },
  description:
    "女性エンジニア転職ナビの全100記事を13カテゴリに整理した記事ハブ。目的別スタートガイドつきで、読むべき記事がすぐ見つかります。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/articles/category-index/" },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer.com" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer.com/articles/" },
    { "@type": "ListItem", position: 3, name: "記事カテゴリ一覧", item: "https://women-engineer.com/articles/category-index/" },
  ],
};

type CategoryArticle = { href: string; title: string };

type Category = {
  id: string;
  name: string;
  color: string;
  desc: string;
  articles: CategoryArticle[];
};

const categories: Category[] = [
  {
    id: "start",
    name: "はじめての方へ",
    color: "#7c3a55",
    desc: "転職活動の全体像をつかむための入門記事です。未経験からのロードマップ、エージェントの選び方、活動期間の目安など、最初に読むと後の記事が理解しやすくなります。",
    articles: [
      { href: "/articles/beginner/", title: "未経験から女性エンジニアになるには？現実のロードマップ" },
      { href: "/articles/how-to-choose/", title: "転職エージェントの選び方｜7つのチェックポイント" },
      { href: "/articles/schedule/", title: "転職活動のスケジュールと期間の目安" },
      { href: "/articles/demand/", title: "女性エンジニアの需要と将来性" },
      { href: "/articles/programming-school/", title: "プログラミングスクールの選び方と給付金活用" },
      { href: "/articles/faq-all/", title: "女性エンジニア転職のFAQ総まとめ" },
    ],
  },
  {
    id: "shokushu",
    name: "職種を知る",
    color: "#7c3a55",
    desc: "エンジニアと一口に言っても職種ごとに仕事内容・年収・未経験ハードルは大きく異なります。開発系からデータ・セキュリティ・マネジメント・デザイン系まで17職種を解説しています。",
    articles: [
      { href: "/articles/frontend/", title: "フロントエンドエンジニア転職ガイド" },
      { href: "/articles/backend/", title: "バックエンドエンジニア転職ガイド" },
      { href: "/articles/infrastructure/", title: "インフラエンジニア転職ガイド" },
      { href: "/articles/mobile-app/", title: "モバイルアプリエンジニア転職ガイド" },
      { href: "/articles/data-scientist/", title: "データサイエンティスト転職ガイド" },
      { href: "/articles/data-engineer/", title: "データエンジニア転職ガイド" },
      { href: "/articles/ai-ml-career/", title: "AI・機械学習エンジニア転職ガイド" },
      { href: "/articles/security/", title: "セキュリティエンジニア転職ガイド" },
      { href: "/articles/sre-devops/", title: "SRE・DevOpsエンジニア転職ガイド" },
      { href: "/articles/embedded/", title: "組み込み・IoTエンジニア転職ガイド" },
      { href: "/articles/qa-tester/", title: "QAエンジニア・テスター転職ガイド" },
      { href: "/articles/internal-se/", title: "社内SE転職ガイド" },
      { href: "/articles/it-consultant/", title: "ITコンサルタント転職ガイド" },
      { href: "/articles/support-engineer/", title: "テクニカルサポート・カスタマーサクセス転職ガイド" },
      { href: "/articles/pm-director/", title: "PM・Webディレクター転職ガイド" },
      { href: "/articles/web-designer/", title: "Webデザイナーからエンジニアへのキャリアチェンジ" },
      { href: "/articles/ux-designer/", title: "UXデザイナー転職ガイド" },
    ],
  },
  {
    id: "skill",
    name: "言語・スキルから選ぶ",
    color: "#c15f47",
    desc: "学ぶ言語・スキルで目指せる職種と年収レンジが変わります。主要8言語に加えて、クラウド（AWS・GCP・Azure）やデータベースのスキル軸でも転職戦略を解説しています。",
    articles: [
      { href: "/articles/javascript-career/", title: "JavaScriptで転職する" },
      { href: "/articles/typescript-react/", title: "TypeScript・Reactエンジニア転職" },
      { href: "/articles/python-career/", title: "Pythonで転職する" },
      { href: "/articles/java-career/", title: "Javaエンジニア転職" },
      { href: "/articles/ruby-career/", title: "Rubyエンジニア転職" },
      { href: "/articles/php-career/", title: "PHPエンジニア転職" },
      { href: "/articles/go-career/", title: "Goエンジニア転職" },
      { href: "/articles/csharp-career/", title: "C#エンジニア転職" },
      { href: "/articles/aws-career/", title: "AWSエンジニア転職" },
      { href: "/articles/cloud-gcp-azure/", title: "クラウドエンジニア転職（GCP・Azure）" },
      { href: "/articles/sql-database/", title: "データベースエンジニア（DBA）転職" },
    ],
  },
  {
    id: "cert",
    name: "資格",
    color: "#10b981",
    desc: "資格は転職の必須条件ではありませんが、未経験者の学習証明やキャリアアップの武器になります。まず資格マップで全体像を確認し、目的に合う個別資格の記事へ進んでください。",
    articles: [
      { href: "/articles/certification/", title: "資格ガイド｜目的別おすすめ資格マップ" },
      { href: "/articles/cert-kihonjoho/", title: "基本情報技術者試験ガイド" },
      { href: "/articles/cert-oyojoho/", title: "応用情報技術者試験ガイド" },
      { href: "/articles/cert-aws/", title: "AWS認定資格ガイド" },
      { href: "/articles/cert-lpic/", title: "LPIC・LinuC資格ガイド" },
      { href: "/articles/cert-python/", title: "Python資格ガイド" },
      { href: "/articles/cert-database/", title: "データベース資格ガイド" },
    ],
  },
  {
    id: "salary",
    name: "年収",
    color: "#7c3a55",
    desc: "公的統計・公開調査に基づく年収の実データを、年代別・職種別・言語別の3つの切り口で整理しています。年収1000万への道筋と、転職時に重要な年収交渉の実践方法もこちらです。",
    articles: [
      { href: "/articles/salary/", title: "女性エンジニアの年収はいくら？実データと年収アップ術" },
      { href: "/articles/salary-by-age/", title: "年代別年収【20代〜50代】" },
      { href: "/articles/salary-by-job/", title: "職種別年収比較" },
      { href: "/articles/salary-by-language/", title: "言語別年収比較" },
      { href: "/articles/salary-1000man/", title: "年収1000万を目指す方法" },
      { href: "/articles/negotiation/", title: "年収交渉術｜タイミングと伝え方" },
    ],
  },
  {
    id: "hatarakikata",
    name: "働き方",
    color: "#7c3a55",
    desc: "リモートワーク・時短・週3〜4日勤務・副業・フリーランス・派遣など、雇用形態と働き方の選択肢を比較できます。フルリモート企業の見極め方や契約社員からの正社員化もこちらです。",
    articles: [
      { href: "/articles/remote-jobs/", title: "在宅・リモート転職ガイド" },
      { href: "/articles/fullremote-companies/", title: "フルリモート企業の見極め方" },
      { href: "/articles/short-time/", title: "時短勤務で転職・継続するガイド" },
      { href: "/articles/short-week/", title: "週3・週4・時短で働ける求人の探し方" },
      { href: "/articles/work-life-balance/", title: "ワークライフバランスの実態データ" },
      { href: "/articles/side-job/", title: "副業の始め方と単価相場" },
      { href: "/articles/freelance/", title: "フリーランスエンジニアの始め方" },
      { href: "/articles/dispatch/", title: "派遣エンジニアという働き方" },
      { href: "/articles/contract-to-perm/", title: "契約社員から正社員を目指す" },
    ],
  },
  {
    id: "ryoritsu",
    name: "両立・ライフイベント",
    color: "#c15f47",
    desc: "出産・育児とエンジニアキャリアの両立をテーマにした記事群です。育休取得率の実データ、復職ロードマップ、育休中のリスキリング、両立家庭のリアルな1日まで網羅しています。",
    articles: [
      { href: "/articles/mama-engineer/", title: "ママエンジニアの働き方ガイド" },
      { href: "/articles/after-maternity/", title: "産休・育休後の転職｜復帰と転職の判断基準" },
      { href: "/articles/maternity-leave-rate/", title: "IT業界の育休取得率・復帰率データ" },
      { href: "/articles/return-to-work/", title: "ブランクからの復職ロードマップ" },
      { href: "/articles/work-childcare-day/", title: "育児と両立する1日のタイムスケジュール" },
      { href: "/articles/reskilling-leave/", title: "育休中のスキルアップ・リスキリング" },
    ],
  },
  {
    id: "nendai",
    name: "年代別",
    color: "#10b981",
    desc: "20代のポテンシャル採用、30代の両立とキャリアアップ、40代の経験の活かし方。年代によって転職市場での評価軸は変わります。自分の年代のガイドから読み始めるのが近道です。",
    articles: [
      { href: "/articles/age-20s/", title: "20代女性エンジニアの転職ガイド" },
      { href: "/articles/age-30s/", title: "30代女性エンジニアの転職ガイド" },
      { href: "/articles/age-40s/", title: "40代女性エンジニアの転職ガイド" },
    ],
  },
  {
    id: "chiiki",
    name: "地域から探す",
    color: "#7c3a55",
    desc: "東京・大阪・名古屋・福岡の求人動向と年収相場に加え、地方在住×フルリモートという選択肢も解説。東京都の女性ITエンジニア育成事業（公的支援）の記事もこちらです。",
    articles: [
      { href: "/articles/tokyo/", title: "東京の転職ガイド" },
      { href: "/articles/tokyo-women-training/", title: "東京都の女性ITエンジニア育成事業とは" },
      { href: "/articles/osaka/", title: "大阪・関西の転職ガイド" },
      { href: "/articles/nagoya/", title: "名古屋・東海の転職ガイド" },
      { href: "/articles/fukuoka/", title: "福岡の転職ガイド" },
      { href: "/articles/regional-remote/", title: "地方在住×フルリモートで転職する" },
    ],
  },
  {
    id: "senko",
    name: "選考対策",
    color: "#7c3a55",
    desc: "書類作成から面接・コーディングテスト・オファー面談・退職交渉まで、選考プロセスを時系列でカバーしています。在職中の活動の進め方と円満退職の記事も含みます。",
    articles: [
      { href: "/articles/resume-guide/", title: "職務経歴書・スキルシートの書き方" },
      { href: "/articles/portfolio/", title: "ポートフォリオ作成ガイド" },
      { href: "/articles/casual-interview/", title: "カジュアル面談の対策" },
      { href: "/articles/interview-guide/", title: "転職面接対策｜流れと頻出質問" },
      { href: "/articles/technical-interview/", title: "技術面接の対策" },
      { href: "/articles/coding-test/", title: "コーディングテスト対策" },
      { href: "/articles/reverse-questions/", title: "面接の逆質問 例文集" },
      { href: "/articles/offer-meeting/", title: "オファー面談で確認すべきこと" },
      { href: "/articles/job-hunting-while-employed/", title: "在職中の転職活動の進め方" },
      { href: "/articles/amicable-resignation/", title: "円満退職・退職交渉の進め方" },
    ],
  },
  {
    id: "gyokai",
    name: "業界研究",
    color: "#c15f47",
    desc: "同じエンジニアでも、Web系・SIer・ゲーム業界・スタートアップでは文化も年収もキャリアパスも異なります。SESと自社開発の違いはキャリアへの影響が大きいので要チェックです。",
    articles: [
      { href: "/articles/web-industry/", title: "Web業界で働くリアル" },
      { href: "/articles/sier-industry/", title: "SIerで働くリアル" },
      { href: "/articles/game-industry/", title: "ゲーム業界で働くリアル" },
      { href: "/articles/startup/", title: "スタートアップ転職の魅力とリスク" },
      { href: "/articles/ses-vs-jisha/", title: "SESと自社開発の違いと見極め方" },
    ],
  },
  {
    id: "hikaku",
    name: "エージェント・サービス比較",
    color: "#10b981",
    desc: "転職エージェントと転職サイトの違い、特化型と総合型の使い分けから、主要サービス同士の具体的な比較まで。公式公開値に基づいて違いを整理しています。",
    articles: [
      { href: "/articles/agent-vs-site/", title: "転職エージェントと転職サイトの違い" },
      { href: "/articles/specialized-vs-general/", title: "IT特化型と総合型の使い分け" },
      { href: "/articles/levtech-vs-geekly/", title: "レバテックキャリアとGeeklyの違い" },
      { href: "/articles/type-vs-doda/", title: "type女性の転職エージェントとdodaの違い" },
      { href: "/articles/workport-vs-recruit/", title: "ワークポートとリクルートエージェントの違い" },
      { href: "/articles/green-vs-reworks/", title: "GreenとReWorksの違い" },
    ],
  },
  {
    id: "career",
    name: "キャリア・職場環境",
    color: "#7c3a55",
    desc: "5年後・10年後を見据えたキャリア設計と、長く働き続けるための職場環境の見極め方。管理職への道、働きやすい企業の選び方、ハラスメント対処、海外転職までカバーしています。",
    articles: [
      { href: "/articles/career-path/", title: "キャリアパス完全マップ｜5つの方向性" },
      { href: "/articles/women-manager/", title: "管理職・マネージャーを目指すガイド" },
      { href: "/articles/long-career-tips/", title: "長く働き続けるコツ" },
      { href: "/articles/women-friendly-companies/", title: "女性が働きやすいIT企業の見極め方" },
      { href: "/articles/harassment/", title: "職場のハラスメント対処ガイド" },
      { href: "/articles/success-stories/", title: "転職成功パターン分析" },
      { href: "/articles/community/", title: "コミュニティ・勉強会一覧" },
      { href: "/articles/work-abroad/", title: "海外転職ガイド" },
    ],
  },
];

const totalArticles = categories.reduce((sum, c) => sum + c.articles.length, 0);

const startGuides = [
  {
    label: "未経験からエンジニアを目指す方",
    color: "#7c3a55",
    desc: "まず現実的なロードマップで全体像をつかみ、学習手段と作品づくり、エージェント選びへ進みましょう。",
    steps: [
      { href: "/articles/beginner/", title: "未経験からのロードマップ" },
      { href: "/articles/programming-school/", title: "スクールの要否と給付金活用" },
      { href: "/articles/portfolio/", title: "ポートフォリオの作り方" },
      { href: "/articles/how-to-choose/", title: "エージェントの選び方" },
    ],
  },
  {
    label: "経験者でキャリア・年収を上げたい方",
    color: "#7c3a55",
    desc: "キャリアの方向性と年収の実データで現在地を確認し、職務経歴書と年収交渉で市場価値を最大化しましょう。",
    steps: [
      { href: "/articles/career-path/", title: "キャリアパス完全マップ" },
      { href: "/articles/salary/", title: "年収の実データを確認" },
      { href: "/articles/resume-guide/", title: "職務経歴書の書き方" },
      { href: "/articles/negotiation/", title: "年収交渉術" },
    ],
  },
  {
    label: "育休・ブランクから復職したい方",
    color: "#c15f47",
    desc: "復職ロードマップと支援制度を押さえ、復帰か転職かの判断基準、両立しやすい働き方の順で読み進めましょう。",
    steps: [
      { href: "/articles/return-to-work/", title: "復職ロードマップと支援制度" },
      { href: "/articles/reskilling-leave/", title: "育休中のリスキリング" },
      { href: "/articles/after-maternity/", title: "復帰と転職の判断基準" },
      { href: "/articles/short-time/", title: "時短勤務での転職・継続" },
    ],
  },
];

const reviews = [
  { href: "/reviews/levtech/", title: "レバテックキャリア" },
  { href: "/reviews/type-woman/", title: "type女性の転職エージェント" },
  { href: "/reviews/geekly/", title: "Geekly" },
  { href: "/reviews/workport/", title: "ワークポート" },
  { href: "/reviews/doda/", title: "doda" },
  { href: "/reviews/recruit-agent/", title: "リクルートエージェント" },
  { href: "/reviews/green/", title: "Green" },
  { href: "/reviews/reworks/", title: "リワークス" },
];

export default function CategoryIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "記事カテゴリ一覧" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>全記事ガイド</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              記事カテゴリ一覧
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">女性エンジニア転職ナビの歩き方【全{totalArticles}記事】</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* このページの使い方 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>このページの使い方</h2>
            <p className="text-sm text-text-light leading-relaxed">
              女性エンジニア転職ナビの全{totalArticles}記事を、13のカテゴリに整理した記事ハブです。何から読むか迷ったら、まず下の「目的別スタートガイド」から自分に近いパターンを選んでください。読みたいテーマが決まっている方は、カテゴリ別目次から該当カテゴリへジャンプできます。各記事は公的統計・公開調査の実データと出典に基づいて作成しています。
            </p>
          </div>
        </div>
      </section>

      {/* 迷ったらここから：目的別スタートガイド */}
      <section className="py-8" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-2">迷ったらここから｜目的別スタートガイド</h2>
          <p className="text-sm text-text-light mb-6">自分の状況に近いパターンを選ぶと、読むべき記事の順番がわかります。</p>
          <div className="grid gap-6 md:grid-cols-3">
            {startGuides.map((guide, i) => (
              <div key={i} className="rounded-xl border bg-white p-6 flex flex-col" style={{ borderColor: "#d9c7b8" }}>
                <h3 className="text-base font-bold mb-2" style={{ color: guide.color }}>{guide.label}</h3>
                <p className="text-xs text-text-light leading-relaxed mb-4">{guide.desc}</p>
                <ol className="space-y-2 mt-auto">
                  {guide.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold text-white flex-shrink-0 mt-0.5" style={{ backgroundColor: guide.color }}>{j + 1}</span>
                      <a href={step.href} className="text-sm hover:underline" style={{ color: "#7c3a55" }}>{step.title}</a>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* カテゴリ別目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">カテゴリ別 目次</h2>
            <ol className="grid gap-2 text-sm md:grid-cols-2">
              {categories.map((cat, i) => (
                <li key={cat.id}>
                  <a href={`#${cat.id}`} className="hover:underline" style={{ color: "#7c3a55" }}>
                    {i + 1}. {cat.name}（{cat.articles.length}記事）
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* カテゴリ一覧 */}
      {categories.map((category, i) => (
        <section key={category.id} id={category.id} className="py-10" style={i % 2 !== 0 ? { backgroundColor: "#f0e7dd" } : {}}>
          <div className="mx-auto max-w-4xl px-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-1 h-8 rounded-full" style={{ backgroundColor: category.color }} />
              <h2 className="text-2xl font-bold">{category.name}</h2>
              <span className="text-sm text-text-light">（{category.articles.length}記事）</span>
            </div>
            <p className="text-sm text-text-light leading-relaxed mb-6">{category.desc}</p>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {category.articles.map((article, j) => (
                <a
                  key={j}
                  href={article.href}
                  className="block rounded-xl border bg-white p-4 transition-all hover:shadow-md"
                  style={{ borderColor: "#d9c7b8" }}
                >
                  <div className="flex items-start gap-2">
                    <span style={{ color: category.color }} className="mt-0.5 font-bold text-sm">&#9654;</span>
                    <span className="text-sm font-medium hover:underline" style={{ color: "#7c3a55" }}>{article.title}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* エージェントレビュー */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block w-1 h-8 rounded-full" style={{ backgroundColor: "#c15f47" }} />
            <h2 className="text-2xl font-bold">エージェント・サービス個別レビュー</h2>
            <span className="text-sm text-text-light">（{reviews.length}件）</span>
          </div>
          <p className="text-sm text-text-light leading-relaxed mb-6">
            比較記事とあわせて読みたい、各転職エージェント・転職サイトの個別レビューページです。
          </p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review, i) => (
              <a key={i} href={review.href} className="block rounded-xl border bg-white p-4 transition-all hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
                <div className="flex items-start gap-2">
                  <span style={{ color: "#c15f47" }} className="mt-0.5 font-bold text-sm">&#9654;</span>
                  <span className="text-sm font-medium hover:underline" style={{ color: "#7c3a55" }}>{review.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
