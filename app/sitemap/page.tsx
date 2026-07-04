import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { categories } from "../lib/categories";

export const metadata: Metadata = {
  title: "サイトマップ｜CareeHUB for woman 全ページ一覧",
  description:
    "CareeHUB for womanの全ページ一覧（サイトマップ）です。転職エージェント比較ランキング・無料診断・データ集・エージェントレビュー・全記事をカテゴリ別にまとめています。",
  alternates: { canonical: "/sitemap/" },
};

const mainPages: { href: string; label: string }[] = [
  { href: "/ranking/", label: "女性エンジニアにおすすめの転職エージェント・転職サイト比較ランキング" },
  { href: "/diagnosis/", label: "エージェント無料診断（8つの質問）" },
  { href: "/articles/data/", label: "女性ITエンジニア データ集（年収・需給・育休の公的統計）" },
  { href: "/articles/category-index/", label: "記事カテゴリ一覧（全記事ガイド）" },
  { href: "/articles/faq-all/", label: "女性エンジニア転職のFAQ総まとめ" },
  { href: "/articles/tokyo-women-training/", label: "東京都 女性ITエンジニア育成事業の解説" },
  { href: "/articles/women-it-support-map/", label: "全国の女性向けIT訓練・支援まとめ" },
];

const reviews: { name: string; slug: string }[] = [
  { name: "ワークポート", slug: "workport" },
  { name: "ReWorks（リワークス）", slug: "reworks" },
  { name: "type女性の転職エージェント", slug: "type-woman" },
  { name: "レバテックキャリア", slug: "levtech" },
  { name: "リクルートエージェント", slug: "recruit-agent" },
  { name: "doda", slug: "doda" },
  { name: "Geekly（ギークリー）", slug: "geekly" },
  { name: "Green（グリーン）", slug: "green" },
  { name: "テックゴー（TechGo）", slug: "techgo" },
];

export default function SitemapPage() {
  return (
    <>
      <section className="relative py-12" style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "サイトマップ" }]} />
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">サイトマップ</h1>
          <p className="mt-4 text-text-light">CareeHUB for womanの全ページ一覧です。目的のページを一覧から探せます。</p>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-4 py-10">
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2" style={{ borderBottom: "2px solid #7c3a55" }}>主要ページ・ツール</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {mainPages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-sm underline-offset-2 hover:underline" style={{ color: "#7c3a55" }}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2" style={{ borderBottom: "2px solid #7c3a55" }}>エージェントレビュー（{reviews.length}社）</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {reviews.map((r) => (
              <li key={r.slug}>
                <Link href={`/reviews/${r.slug}/`} className="text-sm underline-offset-2 hover:underline" style={{ color: "#7c3a55" }}>{r.name}の口コミ・評判</Link>
              </li>
            ))}
          </ul>
        </section>

        {categories.map((c) => (
          <section key={c.id} className="mb-10">
            <h2 className="text-xl font-bold mb-4 pb-2" style={{ borderBottom: "2px solid #7c3a55" }}>{c.name}</h2>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {c.articles.map((a) => (
                <li key={a.href}>
                  <Link href={a.href} className="text-sm underline-offset-2 hover:underline" style={{ color: "#7c3a55" }}>{a.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-4 pb-2" style={{ borderBottom: "2px solid #7c3a55" }}>サイト情報</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <li><Link href="/content-policy/" className="text-sm underline-offset-2 hover:underline" style={{ color: "#7c3a55" }}>コンテンツポリシー</Link></li>
            <li><Link href="/privacy-policy/" className="text-sm underline-offset-2 hover:underline" style={{ color: "#7c3a55" }}>プライバシーポリシー</Link></li>
            <li><Link href="/terms/" className="text-sm underline-offset-2 hover:underline" style={{ color: "#7c3a55" }}>利用規約</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
