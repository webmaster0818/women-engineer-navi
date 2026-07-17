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
    url: "https://women-engineer.com/reviews/reworks/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ReWorks(リワークス)の口コミ・評判｜フルリモート×女性エンジニア",
  datePublished: "2026-04-27",
  dateModified: "2026-07-17",
  author: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  description: "ReWorks(リワークス)を女性エンジニア目線で徹底レビュー。フルリモート特化の実力を検証。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/reviews/reworks/" },
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
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #f6e9de 0%, #efdccf 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "エージェントレビュー", href: "/reviews/" }, { label: "ReWorks（リワークス）" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>フルリモート特化型</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              ReWorks（リワークス）の口コミ・評判
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">フルリモート×女性エンジニアの転職を徹底検証</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月17日（口コミセクションを公式サイト確認に基づき再構成）</p>
          </div>
        </div>
      </section>

      {/* 総合評価 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6 md:p-8" style={{ borderColor: "#d9c7b8" }}>
            <h2 className="text-2xl font-bold mb-6">総合評価</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-bold" style={{ color: "#7c3a55" }}>4.0</span>
                  <span className="text-text-light text-lg">/ 5.0</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-2xl" style={{ color: star <= 4 ? "#f59e0b" : "#d9c7b8" }}>★</span>
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
                    <div className="h-2 flex-1 rounded-full" style={{ backgroundColor: "#e4d6c8" }}>
                      <div className="h-2 rounded-full" style={{ width: `${(item.score / 5) * 100}%`, backgroundColor: "#7c3a55" }} />
                    </div>
                    <span className="text-sm font-bold" style={{ color: "#7c3a55" }}>{item.score}.0</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 基本情報テーブル */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <tbody>
                {[
                  ["サービス名", "ReWorks（リワークス）"],
                  ["運営会社", "株式会社アイドマ・ホールディングス"],
                  ["タイプ", "フルリモート特化型転職サイト"],
                  ["求人数", "非公開"],
                  ["対応エリア", "全国（フルリモートのため場所不問）"],
                  ["対応職種", "SE・プログラマー・Webデザイナー・マーケター・事務・カスタマーサポートなど"],
                  ["利用料金", "無料"],
                  ["女性アドバイザー", "在籍あり"],
                  ["リモート求人", "100%（フルリモート特化）"],
                  ["産休育休", "フルリモート企業のため柔軟な制度が多い"],
                  ["研修制度", "未経験者向け無料研修あり"],
                  ["公式サイト", "rework-s.com"],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f0e7dd" } : {}}>
                    <th className="px-4 py-3 text-left text-sm font-bold w-40" style={{ borderBottom: "1px solid #d9c7b8", color: "#7c3a55" }}>{label}</th>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d9c7b8" }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3">※基本情報は2026年7月に各社公式サイトで確認しています。求人数・サービス内容は変動するため、最新情報は公式サイトをご確認ください。</p>
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
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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
              <div key={item.title} className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>{item.title}</h3>
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
            ※当セクションは、公式サイトの公開情報と当ページに掲載している確認済みの事実のみに基づいて構成しています。実在を確認できない体験談は掲載していません。サービス内容は調査時点（2026年7月）のものであり、変更される場合があります。
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3a55" }}>利用者の声について</h3>
          <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "#f4e7da", border: "1px solid #e4d2c4" }}>
            <p className="text-sm text-text-light leading-relaxed">
              ReWorks公式サイト（rework-s.com）には、利用者の声・転職成功事例のまとまった掲載は確認できませんでした（2026年7月時点）。そのため当ページでは利用者の体験談は掲載せず、公式サイトの公開情報から確認できる事実と注意点のみを紹介します。第三者の口コミを確認したい方は、みん評などの口コミサイトをご参照ください。
            </p>
            <p className="text-xs text-text-light mt-3">
              出典:{" "}
              <a
                href="https://rework-s.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline hover:text-primary"
              >
                ReWorks公式サイト
              </a>
              （2026年7月参照）
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#c15f47" }}>利用前に知っておきたい注意点</h3>
          <div className="space-y-4 mb-6">
            {[
              {
                reviewer: "求人数は非公開で、大手と比べると選択肢が限られる可能性",
                text: "公式サイトに求人総数の公表はありません（2026年7月時点）。フルリモートに特化している分、大手総合エージェントと比べると母数は限られるため、職種によっては選択肢が少ない可能性があります。求人を幅広く比較したい方はdodaやリクルートエージェントとの併用が安心です。",
              },
              {
                reviewer: "フルリモート求人のみで、ハイブリッド勤務は探せない",
                text: "掲載求人はフルリモートに特化しているため、「週数回は出社したい」といったハイブリッドワークの求人は取り扱いがありません。出社も視野に入れて検討したい方は、リモート可の求人を扱う他のサービスとの併用が必要です。",
              },
              {
                reviewer: "SE・エンジニア職は実務経験者向けの求人が中心",
                text: "未経験者向けの無料研修制度はWebデザインやマーケティングなどの基礎スキルが対象で、SE・エンジニア職の求人は実務経験がある方向けのものが多い傾向です。未経験からエンジニアを目指す方は、未経験支援に実績のあるワークポートなどとの併用がおすすめです。",
              },
            ].map((review, i) => (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "#c15f47" }}>{review.reviewer}</p>
                <p className="text-sm text-text-light leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="text-xs text-text-light mt-4 space-y-1">
            <p>出典・参考:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="https://rework-s.com/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">ReWorks公式サイト</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">メリット・デメリット</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6" style={{ border: "2px solid #7c3a55" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>メリット</h3>
              <ul className="space-y-3">
                {[
                  "すべての求人がフルリモートで、場所を問わず働ける環境が確実に手に入る",
                  "女性向けのキャリアカウンセリングが無料で受けられ、フルリモート転職に特化したアドバイスが得られる",
                  "未経験者向けの無料研修制度があり、スキル習得から転職まで一貫したサポートが受けられる",
                ].map((merit, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span style={{ color: "#7c3a55" }} className="font-bold shrink-0">◎</span>
                    <span className="text-text-light">{merit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "2px solid #c15f47" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#c15f47" }}>デメリット</h3>
              <ul className="space-y-3">
                {[
                  "求人数は大手エージェントと比べて少なく、職種によっては選択肢が限られる",
                  "フルリモート以外（ハイブリッドワークなど）の求人は取り扱いがない",
                ].map((demerit, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span style={{ color: "#c15f47" }} className="font-bold shrink-0">△</span>
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold" style={{ backgroundColor: "#7c3a55" }}>{item.step}</div>
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
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">こんな女性におすすめ / 向いていない人</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>おすすめの方</h3>
              <ul className="space-y-2">
                {[
                  "フルリモートで働きたい女性エンジニア",
                  "地方や海外在住で場所を問わず働きたい方",
                  "育児や介護と両立しながら働きたい方",
                  "通勤時間をゼロにしたい方",
                  "未経験からリモートワークを始めたい方",
                  "フレキシブルな働き方を最優先にする方",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light"><span style={{ color: "#7c3a55" }}>●</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#c15f47" }}>向いていない方</h3>
              <ul className="space-y-2">
                {[
                  "豊富な求人数から選びたい方（doda・リクルートエージェント推奨）",
                  "ハイブリッドワークや出社も視野に入れたい方",
                  "IT特化の専門的なキャリアサポートを求める方（レバテックキャリア推奨）",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light"><span style={{ color: "#c15f47" }}>●</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <div className="mx-auto max-w-4xl px-4">
        <div className="bg-[#f0e7dd] border border-[#d9c7b8] rounded-lg p-5 my-8">
          <h3 className="text-base font-bold text-[#7c3a55] mb-3">関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Link href="/articles/remote-jobs/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} リモートワーク求人ガイド</Link>
            <Link href="/articles/mama-engineer/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} ママエンジニアの働き方ガイド</Link>
            <Link href="/articles/green-vs-reworks/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} Green vs リワークス徹底比較</Link>
            <Link href="/articles/freelance/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} フリーランスエンジニアガイド</Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d9c7b8" }}>
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                  <span><span style={{ color: "#7c3a55" }} className="mr-2">Q.</span>{faq.name}</span>
                  <span className="text-text-light group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d9c7b8" }}>
                  <p className="pt-4"><span style={{ color: "#c15f47" }} className="font-bold mr-2">A.</span>{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: "#f4e7da" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">ReWorksでフルリモートの理想の働き方を</h2>
          <p className="text-text-light mb-6">すべての求人がフルリモート。場所を選ばない新しい働き方を始めてみませんか？</p>
          <a href="https://rework-s.com/" target="_blank" rel="noopener noreferrer" className="btn-cta">ReWorksに無料登録する</a>
        </div>
      </section>
    </>
  );
}
