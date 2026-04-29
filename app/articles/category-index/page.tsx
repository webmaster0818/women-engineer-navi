import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "記事カテゴリ一覧｜女性エンジニアの転職に役立つ情報",
  description:
    "女性エンジニアの転職に役立つ記事をカテゴリ別に一覧表示。年代別ガイド・エージェント比較・スキルアップ・働き方・キャリア設計・職種ガイド・業界ガイドなど、すべての記事にアクセスできます。",
  alternates: { canonical: "/articles/category-index/" },
  openGraph: {
    title: "記事カテゴリ一覧｜女性エンジニアの転職に役立つ情報",
    description: "女性エンジニアの転職に役立つ記事をカテゴリ別に一覧表示。すべての記事にアクセスできるハブページです。",
    url: "https://women-engineer-navi.pages.dev/articles/category-index/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "記事カテゴリ一覧｜女性エンジニアの転職に役立つ情報",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  description: "女性エンジニアの転職に役立つ記事をカテゴリ別に一覧表示。すべての記事にアクセスできるハブページです。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/articles/category-index/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "どの記事から読むべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "まずは自分の年代に合った年代別ガイド（20代・30代・40代）から読むことをおすすめします。その後、興味のある職種や業界のガイドを読み、最後にエージェント比較記事で転職エージェントを選ぶ流れが効率的です。",
      },
    },
    {
      "@type": "Question",
      name: "エンジニア未経験でも参考になる記事はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、「未経験からエンジニアを目指す方へ」の記事や、プログラミングスクールの選び方、おすすめ資格の記事が参考になります。キャリアパス設計ガイドも合わせて読むことで、将来の見通しが立てやすくなります。",
      },
    },
    {
      "@type": "Question",
      name: "転職エージェントの比較記事はどれですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「比較」カテゴリにレバテックvsGeekly、type女性vsdoda、ワークポートvsリクルートエージェント、Greenvsリワークスなどの詳細比較記事があります。各エージェントの個別レビュー記事もありますので、合わせて参考にしてください。",
      },
    },
    {
      "@type": "Question",
      name: "リモートワークについての記事はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、「働き方」カテゴリにリモートワーク求人ガイドやワークライフバランスの記事があります。また、各業界ガイド（Web系・SIer・ゲーム業界）でもリモートワークの実態について詳しく解説しています。",
      },
    },
    {
      "@type": "Question",
      name: "年収に関する記事はどこにありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「キャリア」カテゴリに年収ガイドや年収交渉術の記事があります。また、各業界ガイドや職種別ガイドでも業界・職種ごとの年収相場を詳しく解説しています。",
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
    { "@type": "ListItem", position: 3, name: "記事カテゴリ一覧", item: "https://women-engineer-navi.pages.dev/articles/category-index/" },
  ],
};

const categories = [
  {
    name: "年代別ガイド",
    color: "#0891b2",
    articles: [
      { href: "/articles/age-20s/", title: "20代女性エンジニアの転職ガイド" },
      { href: "/articles/age-30s/", title: "30代女性エンジニアの転職ガイド" },
      { href: "/articles/age-40s/", title: "40代女性エンジニアの転職ガイド" },
    ],
  },
  {
    name: "比較",
    color: "#7c3aed",
    articles: [
      { href: "/articles/levtech-vs-geekly/", title: "レバテックキャリア vs Geekly比較" },
      { href: "/articles/type-vs-doda/", title: "type女性の転職 vs doda比較" },
      { href: "/articles/workport-vs-recruit/", title: "ワークポート vs リクルートエージェント比較" },
      { href: "/articles/green-vs-reworks/", title: "Green vs リワークス比較" },
      { href: "/articles/specialized-vs-general/", title: "特化型 vs 総合型エージェント比較" },
      { href: "/articles/agent-vs-site/", title: "転職エージェント vs 転職サイト比較" },
      { href: "/articles/ses-vs-jisha/", title: "SES vs 自社開発比較" },
    ],
  },
  {
    name: "スキル・選考対策",
    color: "#f97066",
    articles: [
      { href: "/articles/beginner/", title: "未経験からエンジニアを目指す方へ" },
      { href: "/articles/programming-school/", title: "プログラミングスクールの選び方" },
      { href: "/articles/portfolio/", title: "ポートフォリオ作成ガイド" },
      { href: "/articles/resume-guide/", title: "職務経歴書の書き方" },
      { href: "/articles/interview-guide/", title: "面接対策ガイド" },
      { href: "/articles/technical-interview/", title: "技術面接対策" },
      { href: "/articles/coding-test/", title: "コーディングテスト対策" },
      { href: "/articles/certification/", title: "おすすめ資格10選" },
      { href: "/articles/negotiation/", title: "年収交渉術" },
    ],
  },
  {
    name: "働き方",
    color: "#10b981",
    articles: [
      { href: "/articles/remote-jobs/", title: "リモートワーク求人ガイド" },
      { href: "/articles/work-life-balance/", title: "ワークライフバランスガイド" },
      { href: "/articles/mama-engineer/", title: "ママエンジニアの働き方" },
      { href: "/articles/after-maternity/", title: "産休育休後の転職ガイド" },
      { href: "/articles/maternity-leave-rate/", title: "産休育休取得率で選ぶ企業" },
      { href: "/articles/schedule/", title: "エンジニアの1日のスケジュール" },
      { href: "/articles/side-job/", title: "エンジニアの副業ガイド" },
      { href: "/articles/freelance/", title: "フリーランスエンジニアガイド" },
      { href: "/articles/return-to-work/", title: "ブランクからの復帰ガイド" },
      { href: "/articles/harassment/", title: "職場のハラスメント対策" },
      { href: "/articles/women-friendly-companies/", title: "女性に優しい企業の選び方" },
    ],
  },
  {
    name: "キャリア",
    color: "#0891b2",
    articles: [
      { href: "/articles/salary/", title: "女性エンジニアの年収ガイド" },
      { href: "/articles/career-path/", title: "キャリアパス設計ガイド" },
      { href: "/articles/demand/", title: "女性エンジニアの需要動向" },
      { href: "/articles/how-to-choose/", title: "エージェントの選び方" },
      { href: "/articles/success-stories/", title: "転職成功事例集" },
      { href: "/articles/community/", title: "女性エンジニアコミュニティ" },
      { href: "/articles/startup/", title: "スタートアップ転職ガイド" },
      { href: "/articles/work-abroad/", title: "海外で働くエンジニアガイド" },
    ],
  },
  {
    name: "職種ガイド",
    color: "#7c3aed",
    articles: [
      { href: "/articles/frontend/", title: "フロントエンドエンジニア転職" },
      { href: "/articles/infrastructure/", title: "インフラエンジニア転職" },
      { href: "/articles/data-scientist/", title: "データサイエンティスト転職" },
      { href: "/articles/pm-director/", title: "PM・ディレクター転職" },
      { href: "/articles/web-designer/", title: "Webデザイナー転職" },
      { href: "/articles/qa-tester/", title: "QA・テストエンジニア転職" },
      { href: "/articles/ai-ml-career/", title: "AI・機械学習エンジニア転職" },
      { href: "/articles/python-career/", title: "Pythonエンジニア転職" },
      { href: "/articles/javascript-career/", title: "JavaScriptエンジニア転職" },
      { href: "/articles/aws-career/", title: "AWSエンジニア転職" },
    ],
  },
  {
    name: "業界ガイド",
    color: "#f97066",
    articles: [
      { href: "/articles/web-industry/", title: "Web系企業への転職ガイド" },
      { href: "/articles/sier-industry/", title: "SIerへの転職ガイド" },
      { href: "/articles/game-industry/", title: "ゲーム業界への転職ガイド" },
    ],
  },
];

export default function CategoryIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "記事カテゴリ一覧" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#0891b2" }}>まとめ</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              記事カテゴリ一覧
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">女性エンジニアの転職に役立つ情報を網羅</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月29日</p>
          </div>
        </div>
      </section>

      {/* カテゴリ説明 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <p className="text-text-light leading-relaxed">
              女性エンジニア転職ナビでは、女性エンジニアの転職に役立つ記事を多数掲載しています。年代別のガイド、エージェント比較、スキルアップ、働き方、キャリア設計、職種別・業界別のガイドなど、カテゴリ別に整理しています。気になるカテゴリから記事を探してみてください。
            </p>
          </div>
        </div>
      </section>

      {/* 統計データ */}
      <section className="py-8" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-4">サイトの記事数</h2>
          <div className="grid gap-4 md:grid-cols-4 mt-4">
            {[
              { count: "50+", label: "コラム記事", color: "#0891b2" },
              { count: "8", label: "エージェントレビュー", color: "#7c3aed" },
              { count: "7", label: "比較記事", color: "#f97066" },
              { count: "10", label: "職種ガイド", color: "#10b981" },
            ].map((stat, i) => (
              <div key={i} className="rounded-xl border bg-white p-4 text-center" style={{ borderColor: "#d1dce5" }}>
                <p className="text-2xl font-bold mb-1" style={{ color: stat.color }}>{stat.count}</p>
                <p className="text-xs text-text-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* カテゴリ一覧 */}
      {categories.map((category, i) => (
        <section key={i} className="py-8" style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
          <div className="mx-auto max-w-4xl px-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-1 h-8 rounded-full" style={{ backgroundColor: category.color }} />
              <h2 className="text-2xl font-bold">{category.name}</h2>
              <span className="text-sm text-text-light">（{category.articles.length}記事）</span>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {category.articles.map((article, j) => (
                <a
                  key={j}
                  href={article.href}
                  className="block rounded-xl border bg-white p-4 transition-all hover:shadow-md"
                  style={{ borderColor: "#d1dce5" }}
                >
                  <div className="flex items-start gap-2">
                    <span style={{ color: category.color }} className="mt-0.5 font-bold text-sm">&#9654;</span>
                    <span className="text-sm font-medium hover:underline" style={{ color: "#0891b2" }}>{article.title}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* その他の記事 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-1 h-8 rounded-full" style={{ backgroundColor: "#0891b2" }} />
            <h2 className="text-2xl font-bold">その他</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <a href="/articles/faq-all/" className="block rounded-xl border bg-white p-4 transition-all hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold text-sm">&#9654;</span>
                <span className="text-sm font-medium hover:underline" style={{ color: "#0891b2" }}>女性エンジニアの転職よくある質問30選</span>
              </div>
            </a>
            <a href="/articles/category-index/" className="block rounded-xl border bg-white p-4 transition-all hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold text-sm">&#9654;</span>
                <span className="text-sm font-medium hover:underline" style={{ color: "#0891b2" }}>記事カテゴリ一覧（このページ）</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* エージェントレビュー */}
      <section className="py-8" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-1 h-8 rounded-full" style={{ backgroundColor: "#f97066" }} />
            <h2 className="text-2xl font-bold">エージェントレビュー</h2>
            <span className="text-sm text-text-light">（8記事）</span>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/reviews/levtech/", title: "レバテックキャリア" },
              { href: "/reviews/type-woman/", title: "type女性の転職エージェント" },
              { href: "/reviews/geekly/", title: "Geekly" },
              { href: "/reviews/workport/", title: "ワークポート" },
              { href: "/reviews/doda/", title: "doda" },
              { href: "/reviews/recruit-agent/", title: "リクルートエージェント" },
              { href: "/reviews/green/", title: "Green" },
              { href: "/reviews/reworks/", title: "リワークス" },
            ].map((review, i) => (
              <a key={i} href={review.href} className="block rounded-xl border bg-white p-4 transition-all hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-start gap-2">
                  <span style={{ color: "#f97066" }} className="mt-0.5 font-bold text-sm">&#9654;</span>
                  <span className="text-sm font-medium hover:underline" style={{ color: "#0891b2" }}>{review.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめ記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">はじめての方におすすめの記事</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>転職活動をこれから始める方向けに、まず読んでほしい記事をまとめました。これらの記事を読むことで、女性エンジニアの転職に関する全体像を把握できます。</p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { href: "/articles/how-to-choose/", title: "転職エージェントの選び方ガイド", desc: "IT特化型・女性特化型・総合型エージェントの違いと、自分に合ったエージェントの選び方を解説。まずはここから始めましょう。", badge: "STEP 1", color: "#0891b2" },
              { href: "/articles/salary/", title: "女性エンジニアの年収ガイド", desc: "年代別・職種別の年収データと、年収アップの具体的な方法を紹介。市場価値を把握して転職に活かしましょう。", badge: "STEP 2", color: "#7c3aed" },
              { href: "/articles/career-path/", title: "キャリアパス設計ガイド", desc: "5年後・10年後のキャリアを見据えた転職戦略を解説。マネジメントとスペシャリスト、どちらの道を選ぶか考えましょう。", badge: "STEP 3", color: "#f97066" },
              { href: "/articles/resume-guide/", title: "職務経歴書の書き方ガイド", desc: "女性エンジニアの転職に効く職務経歴書の書き方を具体例付きで解説。技術力と実績をアピールする方法を学びましょう。", badge: "STEP 4", color: "#10b981" },
              { href: "/articles/interview-guide/", title: "面接対策ガイド", desc: "エンジニア面接の流れと、よく聞かれる質問への回答例を紹介。技術面接の対策もカバーしています。", badge: "STEP 5", color: "#0891b2" },
            ].map((item, i) => (
              <a key={i} href={item.href} className="block rounded-xl border bg-white p-6 transition-all hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: item.color }}>{item.badge}</span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 目的別おすすめ記事 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">目的別おすすめ記事</h2>
          <div className="grid gap-6 md:grid-cols-2 mt-4">
            {[
              { purpose: "年収をアップしたい", articles: [{ href: "/articles/salary/", title: "年収ガイド" }, { href: "/articles/negotiation/", title: "年収交渉術" }, { href: "/articles/certification/", title: "おすすめ資格10選" }], color: "#0891b2" },
              { purpose: "未経験から転職したい", articles: [{ href: "/articles/beginner/", title: "未経験者向けガイド" }, { href: "/articles/programming-school/", title: "スクールの選び方" }, { href: "/articles/portfolio/", title: "ポートフォリオ作成" }], color: "#7c3aed" },
              { purpose: "育児と両立したい", articles: [{ href: "/articles/mama-engineer/", title: "ママエンジニア" }, { href: "/articles/remote-jobs/", title: "リモートワーク求人" }, { href: "/articles/work-life-balance/", title: "ワークライフバランス" }], color: "#f97066" },
              { purpose: "業界を変えたい", articles: [{ href: "/articles/web-industry/", title: "Web系転職ガイド" }, { href: "/articles/sier-industry/", title: "SIer転職ガイド" }, { href: "/articles/game-industry/", title: "ゲーム業界転職" }], color: "#10b981" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-base font-bold mb-3" style={{ color: item.color }}>{item.purpose}</h3>
                <ul className="space-y-2">
                  {item.articles.map((article, j) => (
                    <li key={j}>
                      <a href={article.href} className="text-sm hover:underline" style={{ color: "#0891b2" }}>{"\u2192"} {article.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 人気記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">人気記事ランキング</h2>
          <div className="space-y-3 mt-4">
            {[
              { rank: 1, href: "/articles/salary/", title: "女性エンジニアの年収ガイド" },
              { rank: 2, href: "/articles/remote-jobs/", title: "リモートワーク求人ガイド" },
              { rank: 3, href: "/articles/beginner/", title: "未経験からエンジニアを目指す方へ" },
              { rank: 4, href: "/articles/levtech-vs-geekly/", title: "レバテックキャリア vs Geekly比較" },
              { rank: 5, href: "/articles/age-30s/", title: "30代女性エンジニアの転職ガイド" },
              { rank: 6, href: "/articles/mama-engineer/", title: "ママエンジニアの働き方ガイド" },
              { rank: 7, href: "/articles/career-path/", title: "キャリアパス設計ガイド" },
              { rank: 8, href: "/articles/how-to-choose/", title: "エージェントの選び方" },
              { rank: 9, href: "/articles/web-industry/", title: "Web系企業への転職ガイド" },
              { rank: 10, href: "/articles/coding-test/", title: "コーディングテスト対策" },
            ].map((item) => (
              <a key={item.rank} href={item.href} className="flex items-center gap-4 rounded-xl border bg-white p-4 transition-all hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white flex-shrink-0" style={{ backgroundColor: item.rank <= 3 ? "#0891b2" : "#7c3aed" }}>{item.rank}</span>
                <span className="text-sm font-medium" style={{ color: "#0891b2" }}>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
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

      {/* 転職お役立ち情報 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">新着記事</h2>
          <div className="grid gap-4 md:grid-cols-2 mb-8">
            {[
              { href: "/articles/web-industry/", title: "Web系企業への転職ガイド", desc: "女性エンジニアが活躍する理由を徹底解説", date: "2026.04.29" },
              { href: "/articles/sier-industry/", title: "SIerへの転職ガイド", desc: "SIerの種類・年収・キャリアパスを解説", date: "2026.04.29" },
              { href: "/articles/game-industry/", title: "ゲーム業界への転職ガイド", desc: "女性エンジニアの需要と年収を紹介", date: "2026.04.29" },
              { href: "/articles/technical-interview/", title: "技術面接対策", desc: "コーディングテスト・設計課題の準備法", date: "2026.04.29" },
              { href: "/articles/coding-test/", title: "コーディングテスト対策", desc: "頻出問題と解き方ガイド", date: "2026.04.29" },
              { href: "/articles/certification/", title: "おすすめ資格10選", desc: "転職で有利になる資格を紹介", date: "2026.04.29" },
            ].map((article, i) => (
              <a key={i} href={article.href} className="block rounded-xl border bg-white p-5 transition-all hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-sm" style={{ color: "#0891b2" }}>{article.title}</h3>
                  <span className="text-xs text-text-light">{article.date}</span>
                </div>
                <p className="text-xs text-text-light">{article.desc}</p>
              </a>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-6">転職に役立つ統計データ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>女性エンジニアの転職市場に関する最新の統計データを紹介します。転職活動の参考にしてください。</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            {[
              { label: "IT業界の有効求人倍率", value: "3.2倍", note: "2026年4月時点", color: "#0891b2" },
              { label: "女性エンジニア比率", value: "約22%", note: "年々増加傾向", color: "#7c3aed" },
              { label: "リモートワーク対応率", value: "約65%", note: "IT業界の求人", color: "#f97066" },
              { label: "平均転職期間", value: "2〜4ヶ月", note: "エンジニアの場合", color: "#10b981" },
              { label: "年収アップ率", value: "約70%", note: "エージェント経由の転職", color: "#0891b2" },
              { label: "産休育休取得率", value: "約85%", note: "IT大手企業の平均", color: "#7c3aed" },
            ].map((stat, i) => (
              <div key={i} className="rounded-xl border bg-white p-5 text-center" style={{ borderColor: "#d1dce5" }}>
                <p className="text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-sm font-bold mb-1">{stat.label}</p>
                <p className="text-xs text-text-light">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* サイトマップ的な追加セクション */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">記事の活用方法</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              当サイトの記事は、転職活動の各段階に合わせて体系的に構成されています。以下のステップに沿って記事を読み進めることで、効率的に転職準備を進められます。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { phase: "情報収集フェーズ", desc: "まずは年代別ガイドと年収ガイドで自分の立ち位置を把握します。業界ガイド（Web系・SIer・ゲーム）で転職先の候補を検討し、職種ガイドで目指すポジションを明確にしましょう。", articles: "年代別ガイド / 年収ガイド / 業界ガイド / 職種ガイド" },
              { phase: "エージェント選びフェーズ", desc: "エージェントの選び方ガイドで基本を学び、比較記事で自分に合ったエージェントを見つけます。レビュー記事で各エージェントの詳細を確認し、2〜3社に登録しましょう。", articles: "エージェント選び方 / 比較記事 / レビュー記事" },
              { phase: "選考対策フェーズ", desc: "職務経歴書の書き方、ポートフォリオ作成、技術面接対策、コーディングテスト対策の記事で選考に備えます。資格取得も検討しましょう。", articles: "職務経歴書 / ポートフォリオ / 技術面接 / コーディングテスト" },
              { phase: "働き方検討フェーズ", desc: "リモートワークや時短勤務など、自分の希望する働き方に関する記事を読み、転職先の条件を明確にします。ママエンジニアの記事も参考になります。", articles: "リモートワーク / ワークライフバランス / ママエンジニア" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>PHASE {i + 1}</span>
                  <h3 className="text-lg font-bold">{item.phase}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed mb-2">{item.desc}</p>
                <p className="text-xs text-text-light">関連カテゴリ: {item.articles}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
