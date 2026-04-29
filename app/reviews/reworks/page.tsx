import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ReWorks(リワークス)の口コミ・評判｜フルリモート×女性エンジニア",
  description:
    "ReWorks(リワークス)を女性エンジニア目線で徹底レビュー。フルリモート特化・女性向けサポート・SE/エンジニア求人豊富・キャリア相談無料など、リアルな口コミと評判を紹介。",
  keywords:
    "ReWorks 口コミ, リワークス 評判, ReWorks 女性, リワークス エンジニア フルリモート",
  alternates: { canonical: "/reviews/reworks/" },
  openGraph: {
    title: "ReWorks(リワークス)の口コミ・評判｜フルリモート×女性エンジニア",
    description: "ReWorks(リワークス)を女性エンジニア目線で徹底レビュー。フルリモート特化の実力を検証。",
    url: "https://women-engineer-navi.pages.dev/reviews/reworks/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ReWorks(リワークス)の口コミ・評判｜フルリモート×女性エンジニア",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  description: "ReWorks(リワークス)を女性エンジニア目線で徹底レビュー。フルリモート特化の実力を検証。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/reviews/reworks/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ReWorksの求人は本当にすべてフルリモートですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ReWorksに掲載されている求人は100%フルリモートです。出社の必要がなく、自宅やコワーキングスペースなど場所を問わず働けます。地方在住の方や海外在住の方でも応募可能な求人が揃っています。",
      },
    },
    {
      "@type": "Question",
      name: "ReWorksは未経験でも利用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、未経験者向けの無料研修制度があります。Webデザインやマーケティング、データ入力などの基礎スキルを習得してから転職活動に臨めます。ただし、SE/エンジニア職の求人は実務経験がある方向けのものが多いです。",
      },
    },
    {
      "@type": "Question",
      name: "ReWorksのキャリア相談は本当に無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、キャリアカウンセリングは完全無料です。フルリモートワークに適したスキルの棚卸しや、在宅勤務でのキャリアアップ戦略について相談できます。求人紹介や応募サポートもすべて無料です。",
      },
    },
    {
      "@type": "Question",
      name: "ReWorksにはどんなエンジニア求人がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SE/プログラマー、Webエンジニア、インフラエンジニアなどの求人があります。また、SEOエンジニアやデータアナリスト、Webマーケティング系のテクニカル職も豊富です。すべてフルリモート対応です。",
      },
    },
    {
      "@type": "Question",
      name: "ReWorksは男性でも利用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ReWorksは性別を問わず利用できます。ただし、女性向けのサポートに力を入れており、キャリアカウンセリングや研修制度は特に女性のニーズに配慮した内容になっています。",
      },
    },
  ],
};

export default function ReworksReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "エージェントレビュー", href: "/reviews/" }, { label: "ReWorks（リワークス）" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>フルリモート特化型</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              ReWorks（リワークス）の口コミ・評判
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">フルリモート×女性エンジニアの転職を徹底検証</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月27日</p>
          </div>
        </div>
      </section>

      {/* 総合評価 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6 md:p-8" style={{ borderColor: "#d1dce5" }}>
            <h2 className="text-2xl font-bold mb-6">総合評価</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-bold" style={{ color: "#7c3aed" }}>4.0</span>
                  <span className="text-text-light text-lg">/ 5.0</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-2xl" style={{ color: star <= 4 ? "#f59e0b" : "#d1dce5" }}>★</span>
                  ))}
                </div>
                <p className="text-text-light text-sm">
                  フルリモート求人100%という明確な強みを持つ転職サイト。女性向けのサポートも充実しており、場所を問わず働きたい女性エンジニアに最適です。
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "フルリモート特化", score: 5 },
                  { label: "女性への配慮", score: 5 },
                  { label: "キャリア相談", score: 4 },
                  { label: "エンジニア求人", score: 3 },
                  { label: "求人数", score: 2 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="w-36 text-sm font-medium">{item.label}</span>
                    <div className="h-2 flex-1 rounded-full" style={{ backgroundColor: "#e2e8f0" }}>
                      <div className="h-2 rounded-full" style={{ width: `${(item.score / 5) * 100}%`, backgroundColor: "#7c3aed" }} />
                    </div>
                    <span className="text-sm font-bold" style={{ color: "#7c3aed" }}>{item.score}.0</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 基本情報テーブル */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <tbody>
                {[
                  ["サービス名", "ReWorks（リワークス）"],
                  ["運営会社", "株式会社デイトラ"],
                  ["タイプ", "フルリモート特化型転職サイト"],
                  ["求人数", "非公開"],
                  ["対応エリア", "全国（フルリモートのため場所不問）"],
                  ["対応職種", "SE・プログラマー・Webデザイナー・マーケター・事務・カスタマーサポートなど"],
                  ["利用料金", "無料"],
                  ["女性アドバイザー", "在籍あり"],
                  ["リモート求人", "100%（フルリモート特化）"],
                  ["産休育休", "フルリモート企業のため柔軟な制度が多い"],
                  ["研修制度", "未経験者向け無料研修あり"],
                  ["公式サイト", "reworks.jp"],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
                    <th className="px-4 py-3 text-left text-sm font-bold w-40" style={{ borderBottom: "1px solid #d1dce5", color: "#7c3aed" }}>{label}</th>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ReWorks（リワークス）とは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ReWorks（リワークス）は、フルリモート求人に100%特化した転職サイトです。掲載されているすべての求人がフルリモートワーク対応で、出社の必要がありません。地方在住の方、海外在住の方、育児中で通勤が難しい方でも、場所を問わず働ける求人だけが集まっています。
            </p>
            <p>
              女性向けの転職サポートに力を入れている点も大きな特徴です。キャリアカウンセリングは無料で受けられ、フルリモート環境でのキャリア構築やスキルアップ戦略について相談できます。在宅ワークに適したスキルの棚卸しから、リモート面接の対策まで、フルリモート転職に特化したサポートが充実しています。
            </p>
            <p>
              SE・プログラマー、Webエンジニア、インフラエンジニアなどのIT職種の求人も取り扱っています。また、SEOやWebマーケティング、データ分析などテクニカルなマーケティング職の求人も豊富で、IT×マーケティングのスキルを持つ女性にも適しています。
            </p>
            <p>
              未経験者向けには無料の研修制度も提供しており、Webデザインやマーケティングの基礎スキルを習得してから転職活動に臨むことも可能です。フルリモート特化という明確な強みがある一方、求人数は大手エージェントと比較すると少ない点は理解しておく必要があります。
            </p>
          </div>
        </div>
      </section>

      {/* 女性エンジニアへの強み */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアに対する強み</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "フルリモート求人100%",
                desc: "すべての求人がフルリモートワーク対応。出社不要で自宅やコワーキングスペースから働けるため、育児や介護との両立がしやすく、地方や海外からでも応募可能です。",
              },
              {
                title: "無料キャリアカウンセリング",
                desc: "フルリモートワークに特化したキャリアカウンセリングが無料で受けられます。在宅勤務でのキャリアアップ戦略やスキルの棚卸し、リモート面接対策などを相談できます。",
              },
              {
                title: "未経験者向け無料研修制度",
                desc: "Webデザインやマーケティングなどの基礎スキルを無料で習得できる研修制度があります。スキルを身につけてからフルリモートの仕事に就きたい方に最適です。",
              },
              {
                title: "柔軟な働き方を実現する企業が中心",
                desc: "フルリモートを導入している企業は、フレックスタイム制や成果主義を採用していることが多く、時間の融通が利きやすい環境です。女性のライフスタイルに合った働き方が実現できます。",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6" style={{ border: "1px solid #d1dce5" }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 口コミ・評判 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-2">ReWorksの口コミ・評判</h2>
          <p className="text-xs text-text-light mb-8">
            ※掲載している口コミは、公式サイト・みん評・OpenWork等の投稿を参考に要約・再構成したものです。出典元の原文とは異なります。サービス内容は調査時点のものであり、変更される場合があります。
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3aed" }}>良い口コミ</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                reviewer: "30代女性エンジニア（育児中・地方在住）",
                text: "子どもが小さくて通勤が難しかったのですが、ReWorksのおかげでフルリモートのエンジニア職に就けました。地方在住でも東京の企業で働けるのは本当にありがたいです。キャリアカウンセリングで在宅勤務のコツも教えてもらえて助かりました。",
              },
              {
                reviewer: "20代女性（未経験からリモートワーク）",
                text: "事務職からの転身でスキルに自信がなかったのですが、無料の研修制度でWebマーケティングの基礎を学べました。研修後にフルリモートのマーケティングアシスタントの仕事を紹介してもらい、無事に転職できました。",
              },
              {
                reviewer: "30代女性エンジニア（介護との両立）",
                text: "親の介護をしながらエンジニアとして働ける環境を探していました。すべての求人がフルリモートなので、介護の合間に自宅で作業できる求人だけに絞って探せたのが効率的でした。フレックスタイム制の企業を紹介してもらい、介護と仕事を両立できています。",
              },
              {
                reviewer: "20代後半女性（海外在住エンジニア）",
                text: "パートナーの海外赴任に帯同するため、日本企業のフルリモート求人を探していました。ReWorksには海外からでも応募できる求人があり、時差を考慮した勤務が可能な企業を見つけられました。日本の社会保険にも加入できる企業で安心です。",
              },
            ].map((review, i) => (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#faf5ff", border: "1px solid #e9d5ff" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "#7c3aed" }}>{review.reviewer}</p>
                <p className="text-sm text-text-light leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#f97066" }}>気になる口コミ</h3>
          <div className="space-y-4 mb-6">
            {[
              {
                reviewer: "30代女性エンジニア（求人数に不満）",
                text: "フルリモート特化は魅力的ですが、大手エージェントと比べると求人数が少ないです。特にバックエンドエンジニアの求人は限られていました。他のエージェントも併用して、リモート可の求人を幅広く探した方が良いかもしれません。",
              },
              {
                reviewer: "20代女性エンジニア（フルリモート以外も検討したい）",
                text: "フルリモートの求人しかないため、たまに出社してもOKという柔軟な選択肢がありません。ハイブリッドワーク（週数回出社）も含めて検討したい方は、他のサービスとの併用が必要です。",
              },
            ].map((review, i) => (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "#f97066" }}>{review.reviewer}</p>
                <p className="text-sm text-text-light leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="text-xs text-text-light mt-4 space-y-1">
            <p>出典・参考:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="https://reworks.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">ReWorks公式サイト</a></li>
              <li><a href="https://minhyo.jp/reworks" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">みん評 - ReWorksの口コミ・評判</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">メリット・デメリット</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6" style={{ border: "2px solid #7c3aed" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3aed" }}>メリット</h3>
              <ul className="space-y-3">
                {[
                  "すべての求人がフルリモートで、場所を問わず働ける環境が確実に手に入る",
                  "女性向けのキャリアカウンセリングが無料で受けられ、フルリモート転職に特化したアドバイスが得られる",
                  "未経験者向けの無料研修制度があり、スキル習得から転職まで一貫したサポートが受けられる",
                ].map((merit, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span style={{ color: "#7c3aed" }} className="font-bold shrink-0">◎</span>
                    <span className="text-text-light">{merit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "2px solid #f97066" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#f97066" }}>デメリット</h3>
              <ul className="space-y-3">
                {[
                  "求人数は大手エージェントと比べて少なく、職種によっては選択肢が限られる",
                  "フルリモート以外（ハイブリッドワークなど）の求人は取り扱いがない",
                ].map((demerit, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span style={{ color: "#f97066" }} className="font-bold shrink-0">△</span>
                    <span className="text-text-light">{demerit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 利用の流れ */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">利用の流れ</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "無料会員登録", desc: "公式サイトから基本情報・職歴・希望条件を入力して登録。約3分で完了します。" },
              { step: "2", title: "キャリアカウンセリング（任意）", desc: "希望者は無料のキャリアカウンセリングを受けられます。フルリモートワークに適したスキルの棚卸しやキャリアプランの設計を行います。" },
              { step: "3", title: "求人検索・応募", desc: "フルリモート求人の中から、職種・スキル・条件で検索して応募します。すべてフルリモートなので場所の心配は不要です。" },
              { step: "4", title: "選考・面接", desc: "オンラインでの書類選考・面接を経て選考が進みます。リモート面接のコツもカウンセリングでアドバイスが受けられます。" },
              { step: "5", title: "内定・入社", desc: "内定後は入社手続きのサポートも。フルリモートでの業務開始に向けた環境整備のアドバイスも受けられます。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold" style={{ backgroundColor: "#7c3aed" }}>{item.step}</div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-text-light mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめ・向いていない */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">こんな女性におすすめ / 向いていない人</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3aed" }}>おすすめの方</h3>
              <ul className="space-y-2">
                {[
                  "フルリモートで働きたい女性エンジニア",
                  "地方や海外在住で場所を問わず働きたい方",
                  "育児や介護と両立しながら働きたい方",
                  "通勤時間をゼロにしたい方",
                  "未経験からリモートワークを始めたい方",
                  "フレキシブルな働き方を最優先にする方",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light"><span style={{ color: "#7c3aed" }}>●</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#f97066" }}>向いていない方</h3>
              <ul className="space-y-2">
                {[
                  "豊富な求人数から選びたい方（doda・リクルートエージェント推奨）",
                  "ハイブリッドワークや出社も視野に入れたい方",
                  "IT特化の専門的なキャリアサポートを求める方（レバテックキャリア推奨）",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light"><span style={{ color: "#f97066" }}>●</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <div className="mx-auto max-w-4xl px-4">
        <div className="bg-[#f8fafb] border border-[#d1dce5] rounded-lg p-5 my-8">
          <h3 className="text-base font-bold text-[#0891b2] mb-3">関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Link href="/articles/remote-jobs/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} リモートワーク求人ガイド</Link>
            <Link href="/articles/mama-engineer/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} ママエンジニアの働き方ガイド</Link>
            <Link href="/articles/green-vs-reworks/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} Green vs リワークス徹底比較</Link>
            <Link href="/articles/freelance/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} フリーランスエンジニアガイド</Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d1dce5" }}>
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                  <span><span style={{ color: "#7c3aed" }} className="mr-2">Q.</span>{faq.name}</span>
                  <span className="text-text-light group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                  <p className="pt-4"><span style={{ color: "#f97066" }} className="font-bold mr-2">A.</span>{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: "#faf5ff" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">ReWorksでフルリモートの理想の働き方を</h2>
          <p className="text-text-light mb-6">すべての求人がフルリモート。場所を選ばない新しい働き方を始めてみませんか？</p>
          <a href="https://reworks.jp/" target="_blank" rel="noopener noreferrer" className="btn-cta">ReWorksに無料登録する</a>
        </div>
      </section>
    </>
  );
}
