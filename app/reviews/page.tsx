import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職エージェント・サービスレビュー一覧｜女性エンジニア目線で検証",
  description:
    "女性エンジニア目線で検証した転職エージェント・転職サービスのレビュー一覧。IT特化型・女性特化型・総合型・ハイキャリア型まで、公式確認済みの情報と出典付きの口コミで比較できます。",
  alternates: { canonical: "/reviews/" },
  openGraph: {
    title: "転職エージェント・サービスレビュー一覧｜女性エンジニア目線で検証",
    description:
      "女性エンジニア目線で検証した転職エージェント・サービスのレビュー一覧。公式確認済みの情報と出典付きの口コミで比較。",
    url: "https://women-engineer.com/reviews/",
    type: "website",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const groups = [
  {
    title: "IT特化型",
    desc: "エンジニアの実務経験を活かした転職・年収アップに強いタイプ。",
    items: [
      { href: "/reviews/levtech/", name: "レバテックキャリア", note: "IT・Web特化。公開求人約58,000件（2026年7月時点）" },
      { href: "/reviews/techgo/", name: "テックゴー（TechGo）", note: "年収交渉の実績数値を公表するIT特化型" },
      { href: "/reviews/geekly/", name: "Geekly（ギークリー）", note: "IT・Web・ゲーム業界特化。首都圏中心" },
      { href: "/reviews/green/", name: "Green", note: "スカウト型のIT転職サイト。カジュアル面談が特徴" },
    ],
  },
  {
    title: "女性特化・働き方特化型",
    desc: "女性のキャリア支援やリモートワークに軸足を置くタイプ。",
    items: [
      { href: "/reviews/type-woman/", name: "type女性の転職エージェント", note: "女性の転職支援に特化。首都圏中心" },
      { href: "/reviews/reworks/", name: "ReWorks", note: "フルリモート求人特化の転職サイト" },
    ],
  },
  {
    title: "総合型",
    desc: "求人数の多さと幅広い選択肢が強み。IT以外も含めて比較したい方向け。",
    items: [
      { href: "/reviews/recruit-agent/", name: "リクルートエージェント", note: "非公開含む約100万件の求人規模" },
      { href: "/reviews/doda/", name: "doda", note: "エージェントとサイトの両機能を持つ総合型" },
      { href: "/reviews/workport/", name: "ワークポート", note: "未経験支援に実績。東京都の女性向け育成事業も受託" },
    ],
  },
  {
    title: "ハイキャリア・キャリアチェンジ型",
    desc: "エンジニア経験を活かしてコンサル・M&Aなど別領域へ転身したい方向け。",
    items: [
      { href: "/reviews/meiko-career/", name: "明光キャリアパートナーズ", note: "M&A・コンサル・ファンド領域の人材紹介（IT実務エージェントではない）" },
    ],
  },
];

export default function ReviewsIndexPage() {
  return (
    <>
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "エージェントレビュー" }]} />
          <div className="mt-4">
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">転職エージェント・サービスレビュー一覧</h1>
            <p className="mt-4 text-text-light max-w-2xl">
              女性エンジニア目線で検証したレビューの一覧です。掲載情報は各社公式サイトで確認した内容に基づき、口コミはすべて出典リンク付きの実在ソースのみを掲載しています（架空の口コミはありません）。
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 space-y-10">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-2xl font-bold mb-2">{g.title}</h2>
              <p className="text-sm text-text-light mb-4">{g.desc}</p>
              <div className="grid gap-4 md:grid-cols-2">
                {g.items.map((it) => (
                  <Link key={it.href} href={it.href} className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
                    <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>{it.name}</h3>
                    <p className="text-sm text-text-light">{it.note}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12" style={{ backgroundColor: "#efe3d8" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">どれを選ぶか迷ったら</h2>
          <p className="text-text-light mb-6">8つの質問であなたに合うエージェントを絞り込める無料診断と、編集部の比較ランキングをご用意しています。</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/diagnosis/" className="btn-cta">無料診断をはじめる</Link>
            <Link href="/ranking/" className="inline-block rounded-full px-6 py-3 text-sm font-bold underline" style={{ color: "#7c3a55" }}>おすすめランキングを見る</Link>
          </div>
        </div>
      </section>
    </>
  );
}
