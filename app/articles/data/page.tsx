import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "女性ITエンジニアの転職データ集｜年収・割合・育休・求人倍率【出典つき2026年】",
  description:
    "女性ITエンジニアの平均年収（年代別・言語別）、業界の女性比率、IT人材の求人倍率、情報通信業の育休取得率・テレワーク導入率を、公的統計や調査の出典つきでまとめたデータ集。転職判断やキャリア設計の根拠としてご活用ください。",
  alternates: { canonical: "/articles/data/" },
  openGraph: {
    title: "女性ITエンジニアの転職データ集｜年収・割合・育休・求人倍率【出典つき】",
    description:
      "女性ITエンジニアの年収・女性比率・求人倍率・育休取得率を出典つきで集約したデータ集。",
    url: "https://women-engineer.com/articles/data/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性ITエンジニアの転職データ集（年収・割合・育休・求人倍率）",
  description:
    "女性ITエンジニアの年収・女性比率・求人倍率・育休取得率を公的統計・調査の出典つきで集約したデータ集。",
  datePublished: "2026-06-21",
  dateModified: "2026-06-21",
  author: { "@type": "Organization", name: "CareeHUB for woman 編集部" },
  publisher: {
    "@type": "Organization",
    name: "CareeHUB for woman",
    url: "https://women-engineer.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/data/",
  },
};

const th = "px-3 py-2 text-left text-xs font-bold text-white";
const td = "px-3 py-2 text-sm";

export default function DataPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumb items={[{ label: "女性ITエンジニア データ集" }]} />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="eyebrow">Data Reference</p>
        <h1 className="mt-3 text-2xl md:text-[1.9rem] text-text leading-snug">
          女性ITエンジニアの転職データ集
        </h1>
        <p className="mt-4 text-sm md:text-base text-text-light leading-[2]">
          女性ITエンジニアの年収・業界での割合・求人倍率・育休取得率などを、公的統計や調査の<strong>出典つき</strong>で1ページにまとめました。転職するかどうかの判断や、キャリア設計の根拠としてご活用ください。数値はすべて出典・参照時期を明記しています（参照：2026年6月）。
        </p>

        {/* 年収 */}
        <section className="mt-10">
          <h2 className="text-xl text-text">1. 女性ITエンジニアの年収</h2>
          <p className="mt-3 text-sm text-text-light leading-[1.9]">
            女性ITエンジニアの平均年収は<strong>約419万円</strong>、女性システムエンジニアは<strong>約497万円</strong>とされています（出典：doda「平均年収ランキング2025」、厚生労働省「賃金構造基本統計調査」）。年代・使用言語によって差があります。
          </p>

          <h3 className="mt-6 text-base font-bold text-text">年代別の年収目安（女性）</h3>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary"><th className={th}>年代</th><th className={th}>年収の目安</th></tr></thead>
              <tbody>
                <tr className="border-b border-border bg-white"><td className={td}>20代前半</td><td className={td}>約376万円</td></tr>
                <tr className="border-b border-border bg-[#f0e7dd]"><td className={td}>30代前半</td><td className={td}>約500万円</td></tr>
                <tr className="border-b border-border bg-white"><td className={td}>40代前半</td><td className={td}>約600万円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-text-light">出典：厚生労働省「賃金構造基本統計調査」をもとに作成（参照：2026年6月）。</p>

          <h3 className="mt-6 text-base font-bold text-text">使用言語別の年収目安</h3>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary"><th className={th}>言語</th><th className={th}>年収の目安</th></tr></thead>
              <tbody>
                {[["Go","約723万円"],["TypeScript","約714万円"],["Ruby","約689万円"],["Python","約680万円"],["Java","約520万円"],["JavaScript","約500万円"]].map(([l,v],i)=>(
                  <tr key={l} className={`border-b border-border ${i%2?"bg-[#f0e7dd]":"bg-white"}`}><td className={td}>{l}</td><td className={td}>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-text-light">出典：各言語の求人・フリーランス単価調査（2025年版）をもとに作成（参照：2026年6月）。</p>
          <p className="mt-3 text-sm text-text-light">
            職種別の年収は
            <Link href="/articles/salary-by-job/" className="link-underline text-primary font-medium">職種別の年収ガイド</Link>
            、年代別の詳細は
            <Link href="/articles/salary-by-age/" className="link-underline text-primary font-medium">年代別の年収ガイド</Link>
            で解説しています。
          </p>
        </section>

        {/* 市場 */}
        <section className="mt-10">
          <h2 className="text-xl text-text">2. 業界での女性比率・IT人材の需給</h2>
          <div className="mt-3 grid sm:grid-cols-3 gap-3">
            {[["18.8%","エンジニアに占める女性の割合","doda"],["10.68倍","IT・通信エンジニアの求人倍率","doda"],["最大約79万人","2030年のIT人材不足の試算","経済産業省"]].map(([n,l,src])=>(
              <div key={l} className="card">
                <p className="numeral text-2xl">{n}</p>
                <p className="mt-1 text-sm text-text">{l}</p>
                <p className="mt-1 text-xs text-text-light">出典：{src}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-text-light leading-[1.9]">
            女性エンジニアはまだ少数派ですが、IT人材は慢性的に不足しており、求人倍率は高水準です。需要の詳細は
            <Link href="/articles/demand/" className="link-underline text-primary font-medium">女性エンジニアの需要データ</Link>
            をご覧ください。
          </p>
        </section>

        {/* ライフイベント */}
        <section className="mt-10">
          <h2 className="text-xl text-text">3. 育休取得率・働き方（情報通信業）</h2>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary"><th className={th}>指標</th><th className={th}>数値</th><th className={th}>出典</th></tr></thead>
              <tbody>
                <tr className="border-b border-border bg-white"><td className={td}>育児休業取得率（女性・情報通信業）</td><td className={td}>94.4%</td><td className={td}>厚労省 令和6年度雇用均等基本調査</td></tr>
                <tr className="border-b border-border bg-[#f0e7dd]"><td className={td}>育児休業取得率（男性・情報通信業）</td><td className={td}>58.1%</td><td className={td}>厚労省 令和6年度雇用均等基本調査</td></tr>
                <tr className="border-b border-border bg-white"><td className={td}>テレワーク導入率（情報通信業）</td><td className={td}>94.3%</td><td className={td}>総務省 通信利用動向調査</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-text-light">参照：2026年6月。</p>
          <p className="mt-3 text-sm text-text-light leading-[1.9]">
            情報通信業は育休取得率・テレワーク導入率ともに全産業平均より高く、ライフイベントと両立しやすい環境が比較的整っています。詳しくは
            <Link href="/articles/mama-engineer/" className="link-underline text-primary font-medium">ママエンジニアの働き方</Link>
            ・
            <Link href="/articles/remote-jobs/" className="link-underline text-primary font-medium">リモートワーク事情</Link>
            で解説しています。
          </p>
        </section>

        {/* 出典・注記 */}
        <section className="mt-10 bg-[#f0e7dd] border border-border rounded-sm p-5">
          <h2 className="text-base font-bold text-text">データについて</h2>
          <p className="mt-2 text-xs text-text-light leading-[1.9]">
            本ページの数値は、厚生労働省・経済産業省・総務省などの公的統計および各種公開調査をもとに、当編集部が整理・要約したものです。調査の定義・対象・時期により数値は変動するため、目安としてご利用ください（参照：2026年6月）。最新の一次情報は各出典元でご確認いただけます。
          </p>
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <p className="text-text-light text-sm">データをふまえて、次のキャリアを相談してみませんか？</p>
          <Link href="/ranking/" className="btn-cta mt-4 inline-flex">
            女性に強い転職エージェントを見る
          </Link>
        </section>
      </article>
    </>
  );
}
