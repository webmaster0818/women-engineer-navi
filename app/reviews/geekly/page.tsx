import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Geekly(ギークリー)の口コミ・評判｜女性ITエンジニアの転職実績",
  description:
    "Geekly(ギークリー)を女性エンジニア目線で徹底レビュー。IT特化・独占求人3万件以上・マッチング精度の高さなど、リアルな口コミと評判を紹介。書類通過率UPの実績も解説します。",
  keywords:
    "Geekly 口コミ, ギークリー 評判, Geekly 女性, ギークリー エンジニア 転職",
  alternates: { canonical: "/reviews/geekly/" },
  openGraph: {
    title: "Geekly(ギークリー)の口コミ・評判｜女性ITエンジニアの転職実績",
    description:
      "Geekly(ギークリー)を女性エンジニア目線で徹底レビュー。IT特化・独占求人3万件以上・マッチング精度の高さなど、リアルな口コミを紹介。",
    url: "https://women-engineer-navi.pages.dev/reviews/geekly/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Geekly(ギークリー)の口コミ・評判｜女性ITエンジニアの転職実績",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  author: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer-navi.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer-navi.pages.dev",
  },
  description:
    "Geekly(ギークリー)を女性エンジニア目線で徹底レビュー。IT特化・独占求人3万件以上・マッチング精度の高さを解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer-navi.pages.dev/reviews/geekly/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Geeklyは女性エンジニアの転職に向いていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、IT・Web・ゲーム業界に特化しているため、女性エンジニアの転職にも適しています。女性特化のサービスはありませんが、リモートワーク求人が約55%と多く、フレックスタイム制の求人も豊富なため、柔軟な働き方を希望する女性に向いています。",
      },
    },
    {
      "@type": "Question",
      name: "Geeklyの独占求人とはどのようなものですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Geeklyだけが取り扱っている非公開求人です。メガベンチャーやゲーム会社、有名IT企業の求人が含まれており、他のエージェントでは出会えないポジションに応募できます。全体の求人のうち独占求人の割合が高い点がGeeklyの大きな強みです。",
      },
    },
    {
      "@type": "Question",
      name: "Geeklyの書類通過率はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Geeklyの書類添削サポートを受けることで、一般的な書類通過率と比較して大幅にアップしたという利用者の声が多くあります。企業ごとにカスタマイズした職務経歴書作成のサポートが評価されています。",
      },
    },
    {
      "@type": "Question",
      name: "Geeklyの対応エリアはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "首都圏（東京・神奈川・埼玉・千葉）の求人が中心です。大阪・名古屋・福岡の求人も一部ありますが、地方求人は限定的です。リモートワーク対応の求人であれば地方からでも利用可能です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験でもGeeklyは利用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Geeklyは基本的にIT業界経験者向けのエージェントです。実務経験がある方が対象となるため、完全未経験の方には紹介できる求人が限られます。未経験からのIT転職にはワークポートなどの利用がおすすめです。",
      },
    },
  ],
};

export default function GeeklyReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Hero */}
      <section
        className="relative py-12 md:py-16"
        style={{
          background: "linear-gradient(135deg, #ecfeff 0%, #f0fdfa 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "エージェントレビュー", href: "/reviews/" },
              { label: "Geekly（ギークリー）" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#0891b2" }}
            >
              IT特化型
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Geekly（ギークリー）の口コミ・評判
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性ITエンジニアの転職実績を徹底検証
              </span>
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
                  <span className="text-5xl font-bold" style={{ color: "#0891b2" }}>4.5</span>
                  <span className="text-text-light text-lg">/ 5.0</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-2xl" style={{ color: star <= 4 ? "#f59e0b" : "#d1dce5" }}>★</span>
                  ))}
                </div>
                <p className="text-text-light text-sm">
                  IT・Web・ゲーム業界に特化し、独占求人の豊富さとマッチング精度の高さが際立つエージェント。書類通過率アップの実績も多数。
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "求人の質", score: 5 },
                  { label: "独占求人", score: 5 },
                  { label: "書類添削", score: 5 },
                  { label: "マッチング精度", score: 4 },
                  { label: "女性への配慮", score: 3 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="w-32 text-sm font-medium">{item.label}</span>
                    <div className="h-2 flex-1 rounded-full" style={{ backgroundColor: "#e2e8f0" }}>
                      <div className="h-2 rounded-full" style={{ width: `${(item.score / 5) * 100}%`, backgroundColor: "#0891b2" }} />
                    </div>
                    <span className="text-sm font-bold" style={{ color: "#0891b2" }}>{item.score}.0</span>
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
                  ["サービス名", "Geekly（ギークリー）"],
                  ["運営会社", "株式会社Geekly"],
                  ["設立", "2011年8月"],
                  ["タイプ", "IT・Web・ゲーム業界特化型転職エージェント"],
                  ["求人数", "30,000件以上（独占求人多数）"],
                  ["対応エリア", "首都圏中心（東京・神奈川・埼玉・千葉）"],
                  ["対応職種", "エンジニア・デザイナー・PM・ゲーム開発・データサイエンティストなど"],
                  ["利用料金", "無料"],
                  ["女性アドバイザー", "在籍あり"],
                  ["リモート求人", "約55%がリモートワーク対応"],
                  ["産休育休", "紹介先企業情報として提供"],
                  ["公式サイト", "geekly.co.jp"],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
                    <th className="px-4 py-3 text-left text-sm font-bold w-40" style={{ borderBottom: "1px solid #d1dce5", color: "#0891b2" }}>{label}</th>
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
          <h2 className="text-2xl font-bold mb-6">Geekly（ギークリー）とは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Geekly（ギークリー）は、2011年に設立されたIT・Web・ゲーム業界に特化した転職エージェントです。株式会社Geeklyが運営しており、エンジニア、デザイナー、PM、ゲーム開発者など、IT業界のあらゆる職種に対応しています。
            </p>
            <p>
              最大の強みは独占求人の多さです。30,000件以上の求人を保有しており、そのうちの多くがGeeklyだけが取り扱う独占求人です。メガベンチャーやゲーム会社、注目のIT企業など、他のエージェントでは出会えない求人に応募できるチャンスがあります。
            </p>
            <p>
              コンサルタントはIT業界出身者が多く、技術的な会話がスムーズに行えます。書類添削サービスにも定評があり、企業ごとにカスタマイズした職務経歴書を一緒に作成することで、書類通過率を大幅にアップさせた実績があります。
            </p>
            <p>
              入社後の定着率が高い点も特徴的で、マッチング精度の高さを示しています。長期的なキャリア形成を考える方にとって、ミスマッチのリスクが低いことは大きな安心材料です。
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
                title: "独占求人で選択肢が広がる",
                desc: "他では見つからない優良IT企業の求人にアクセスできます。女性が活躍するIT企業の非公開求人も多く含まれており、選択肢が大幅に広がります。",
              },
              {
                title: "リモートワーク対応求人が55%",
                desc: "全体の約55%がリモートワーク対応。フレックスタイム制の求人も豊富で、育児や介護と両立しながら働きたい女性エンジニアにも適した環境が見つかります。",
              },
              {
                title: "書類通過率UPの書類添削",
                desc: "企業ごとにカスタマイズした職務経歴書の作成をサポート。技術スキルの効果的なアピール方法を提案してくれ、書類選考の通過率向上に直結します。",
              },
              {
                title: "高い定着率でミスマッチ防止",
                desc: "マッチング精度の高さにより入社後の定着率が高いのが特徴。企業文化や職場環境の情報も事前に共有してくれるため、入社後のギャップを最小限に抑えられます。",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6" style={{ border: "1px solid #d1dce5" }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 口コミ・評判 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-2">Geeklyの口コミ・評判</h2>
          <p className="text-xs text-text-light mb-8">
            ※掲載している口コミは、公式サイト・みん評・OpenWork等の投稿を参考に要約・再構成したものです。出典元の原文とは異なります。サービス内容は調査時点のものであり、変更される場合があります。
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>良い口コミ</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                reviewer: "30代女性エンジニア（サーバーサイド）",
                text: "独占求人の質がとても高かったです。他のエージェントでは紹介されなかった有名IT企業の求人を紹介してもらい、最終的にそこに入社しました。書類添削が企業ごとに違うアドバイスで、書類選考の通過率が体感で倍くらいに上がりました。",
              },
              {
                reviewer: "20代女性エンジニア（ゲーム業界志望）",
                text: "ゲーム業界に転職したくてGeeklyに登録しました。ゲーム会社の求人が非常に豊富で、大手からインディーまで幅広い選択肢がありました。コンサルタントがゲーム業界に詳しくて、技術面接の対策も的確でした。",
              },
              {
                reviewer: "30代女性（PM/PLとして転職）",
                text: "PMとしてのキャリアアップを目指して利用しました。技術とマネジメントの両方のスキルを理解してくれるコンサルタントが担当で、スキルセットに合った求人を的確に紹介してもらえました。入社後も期待通りの仕事内容で満足しています。",
              },
              {
                reviewer: "20代後半女性エンジニア（フロントエンド）",
                text: "React/TypeScriptのスキルを活かした転職がしたくて登録しました。希望技術スタックに合った求人をピンポイントで提案してくれました。リモートワーク可能な企業を中心に紹介してもらえたので、ワークライフバランスも改善できました。",
              },
            ].map((review, i) => (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#ecfeff", border: "1px solid #cffafe" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>{review.reviewer}</p>
                <p className="text-sm text-text-light leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#f97066" }}>気になる口コミ</h3>
          <div className="space-y-4 mb-6">
            {[
              {
                reviewer: "30代女性エンジニア（地方在住）",
                text: "首都圏の求人が中心で、地方在住の私にとっては通勤可能な求人が少なかったです。リモート求人もありましたが、週数回の出社が必要なものが多く、完全フルリモートの選択肢は限られていました。",
              },
              {
                reviewer: "20代女性（未経験からIT転職希望）",
                text: "IT業界未経験で登録しましたが、経験者向けの求人がほとんどで、紹介してもらえる案件がかなり少なかったです。まずは未経験OKのエージェントでスキルを身につけてから利用した方が良いと感じました。",
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
              <li>
                <a href="https://www.geekly.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">
                  Geekly公式サイト
                </a>
              </li>
              <li>
                <a href="https://minhyo.jp/geekly" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">
                  みん評 - Geeklyの口コミ・評判
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">メリット・デメリット</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6" style={{ border: "2px solid #0891b2" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>メリット</h3>
              <ul className="space-y-3">
                {[
                  "他では出会えない独占求人が豊富で、メガベンチャーやゲーム会社など人気企業への転職チャンスがある",
                  "企業ごとにカスタマイズした書類添削で書類通過率が大幅にアップする",
                  "入社後の定着率が高く、マッチング精度の高さが実績として証明されている",
                ].map((merit, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span style={{ color: "#0891b2" }} className="font-bold shrink-0">◎</span>
                    <span className="text-text-light">{merit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "2px solid #f97066" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#f97066" }}>デメリット</h3>
              <ul className="space-y-3">
                {[
                  "首都圏中心の求人が多く、地方在住の方は選択肢が限られる",
                  "IT業界経験者向けのサービスのため、完全未経験者には利用しづらい",
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
              { step: "1", title: "無料会員登録", desc: "公式サイトから職歴・スキル・希望条件を入力して登録。約3分で完了します。" },
              { step: "2", title: "コンサルタントとの面談", desc: "IT業界に精通したコンサルタントと面談（オンライン可）。技術スキルの棚卸しと希望条件の詳細をヒアリングします。" },
              { step: "3", title: "求人紹介・書類添削", desc: "マッチする求人（独占求人含む）を紹介。企業ごとにカスタマイズした職務経歴書の添削を行います。" },
              { step: "4", title: "面接対策・企業面接", desc: "技術面接・人物面接それぞれの対策を実施。企業ごとの面接傾向に基づいた準備ができます。" },
              { step: "5", title: "内定・入社", desc: "内定後の条件交渉をサポート。入社後のフォローアップも行い、長期的な定着をサポートします。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold" style={{ backgroundColor: "#0891b2" }}>
                  {item.step}
                </div>
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
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>おすすめの方</h3>
              <ul className="space-y-2">
                {[
                  "独占求人で他にはない選択肢を求める女性エンジニア",
                  "ゲーム業界やメガベンチャーへの転職を希望する方",
                  "書類選考に不安があり、書類添削を受けたい方",
                  "首都圏でIT転職を目指す経験者の方",
                  "マッチング精度を重視し、入社後のミスマッチを避けたい方",
                  "リモートワーク・フレックスタイム制を希望する方",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light">
                    <span style={{ color: "#0891b2" }}>●</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#f97066" }}>向いていない方</h3>
              <ul className="space-y-2">
                {[
                  "IT業界未経験で転職を目指す方（ワークポート推奨）",
                  "地方在住で完全フルリモートにこだわる方（ReWorks推奨）",
                  "女性特化のきめ細かいサポートを求める方（type女性推奨）",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light">
                    <span style={{ color: "#f97066" }}>●</span>{item}
                  </li>
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
            <Link href="/articles/web-industry/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} Web系企業への転職ガイド｜女性エンジニアが活躍する理由</Link>
            <Link href="/articles/game-industry/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} ゲーム業界への転職ガイド｜女性エンジニアの需要と年収</Link>
            <Link href="/articles/levtech-vs-geekly/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} レバテックキャリア vs Geekly徹底比較</Link>
            <Link href="/articles/salary/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} 女性エンジニアの年収ガイド｜平均年収と年収アップの方法</Link>
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
                  <span>
                    <span style={{ color: "#0891b2" }} className="mr-2">Q.</span>
                    {faq.name}
                  </span>
                  <span className="text-text-light group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                  <p className="pt-4">
                    <span style={{ color: "#f97066" }} className="font-bold mr-2">A.</span>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: "#ecfeff" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Geeklyで独占求人にアクセスしよう</h2>
          <p className="text-text-light mb-6">
            IT・Web・ゲーム業界の独占求人多数。まずは無料相談から始めてみませんか？
          </p>
          <a href="https://www.geekly.co.jp/" target="_blank" rel="noopener noreferrer" className="btn-cta">
            Geeklyに無料相談する
          </a>
        </div>
      </section>
    </>
  );
}
