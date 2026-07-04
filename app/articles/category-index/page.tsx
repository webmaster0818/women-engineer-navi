import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import { categories } from "../../lib/categories";

export const metadata: Metadata = {
  title: "記事カテゴリ一覧｜CareeHUB for womanの歩き方【全記事ガイド】",
  description:
    "CareeHUB for womanの全100記事を13カテゴリに整理した記事ハブ。はじめての方向けガイドから職種・言語・資格・年収・働き方・両立・年代別・地域・選考対策・業界研究・エージェント比較・キャリアまで、目的の記事がすぐ見つかります。",
  alternates: { canonical: "/articles/category-index/" },
  openGraph: {
    title: "記事カテゴリ一覧｜CareeHUB for womanの歩き方【全記事ガイド】",
    description:
      "全100記事を13カテゴリに整理した記事ハブ。職種・言語・資格・年収・働き方・両立・選考対策など、目的の記事がすぐ見つかります。",
    url: "https://women-engineer.com/articles/category-index/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "記事カテゴリ一覧｜CareeHUB for womanの歩き方【全記事ガイド】",
  datePublished: "2026-04-29",
  dateModified: "2026-06-12",
  author: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  description:
    "CareeHUB for womanの全100記事を13カテゴリに整理した記事ハブ。目的別スタートガイドつきで、読むべき記事がすぐ見つかります。",
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
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">CareeHUB for womanの歩き方【全{totalArticles}記事】</span>
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
              CareeHUB for womanの全{totalArticles}記事を、13のカテゴリに整理した記事ハブです。何から読むか迷ったら、まず下の「目的別スタートガイド」から自分に近いパターンを選んでください。読みたいテーマが決まっている方は、カテゴリ別目次から該当カテゴリへジャンプできます。各記事は公的統計・公開調査の実データと出典に基づいて作成しています。
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
