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
    url: "https://women-engineer.com/reviews/geekly/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Geekly(ギークリー)の口コミ・評判｜女性ITエンジニアの転職実績",
  datePublished: "2026-04-27",
  dateModified: "2026-07-17",
  author: {
    "@type": "Organization",
    name: "CareeHUB for woman",
    url: "https://women-engineer.com",
  },
  publisher: {
    "@type": "Organization",
    name: "CareeHUB for woman",
    url: "https://women-engineer.com",
  },
  description:
    "Geekly(ギークリー)を女性エンジニア目線で徹底レビュー。IT特化・独占求人3万件以上・マッチング精度の高さを解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/reviews/geekly/",
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
        text: "はい、IT・Web・ゲーム業界に特化しているため、女性エンジニアの転職にも適しています。女性特化のサービスはありませんが、リモートワーク求人の特集もあり（割合は公式サイトで要確認）、柔軟な働き方の求人を探しやすいサービスです。",
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
          background: "linear-gradient(135deg, #efe3d8 0%, #f1e8de 100%)",
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
              style={{ backgroundColor: "#7c3a55" }}
            >
              IT特化型
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Geekly（ギークリー）の口コミ・評判
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性ITエンジニアの転職実績を徹底検証
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月17日（口コミセクションを公式サイト掲載の声に基づき再構成）</p>
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
                  <span className="text-5xl font-bold" style={{ color: "#7c3a55" }}>4.5</span>
                  <span className="text-text-light text-lg">/ 5.0</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-2xl" style={{ color: star <= 4 ? "#f59e0b" : "#d9c7b8" }}>★</span>
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
                  ["サービス名", "Geekly（ギークリー）"],
                  ["運営会社", "株式会社ギークリー（Geekly, Inc.）"],
                  ["設立", "2011年8月"],
                  ["タイプ", "IT・Web・ゲーム業界特化型転職エージェント"],
                  ["求人数", "46,000件以上（非公開含む・2026年6月時点の公式表記）"],
                  ["対応エリア", "首都圏中心（東京・神奈川・埼玉・千葉）"],
                  ["対応職種", "エンジニア・デザイナー・PM・ゲーム開発・データサイエンティストなど"],
                  ["利用料金", "無料"],
                  ["女性アドバイザー", "在籍あり"],
                  ["リモート求人", "リモート対応求人あり（割合は公式サイトで要確認）"],
                  ["産休育休", "紹介先企業情報として提供"],
                  ["公式サイト", "geekly.co.jp"],
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
          <h2 className="text-2xl font-bold mb-6">Geekly（ギークリー）とは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Geekly（ギークリー）は、2011年に設立されたIT・Web・ゲーム業界に特化した転職エージェントです。株式会社Geeklyが運営しており、エンジニア、デザイナー、PM、ゲーム開発者など、IT業界のあらゆる職種に対応しています。
            </p>
            <p>
              最大の強みは求人の専門性です。46,000件以上（非公開含む・2026年6月時点の公式表記）の求人を保有しており、IT・Web・ゲーム業界に絞った提案を受けられます。メガベンチャーやゲーム会社、注目のIT企業など、他のエージェントでは出会えない求人に応募できるチャンスがあります。
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
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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
                desc: "リモートワーク対応求人の特集があり（割合は公式サイトで要確認）、フレックスタイム制の求人も豊富。育児や介護と両立しながら働きたい女性エンジニアにも適した環境が見つかります。",
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
          <h2 className="text-2xl font-bold mb-2">Geeklyの口コミ・評判</h2>
          <p className="text-xs text-text-light mb-8">
            ※以下はGeekly公式サイト「転職成功事例・お客様の声」ページに掲載されている内容を要約・再構成したものです。出典元の原文とは異なります。公式サイトでの発信である点に留意してください。サービス内容は調査時点（2026年7月）のものであり、変更される場合があります。
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3a55" }}>公式サイト掲載の利用者の声（要約）</h3>
          <p className="text-sm text-text-light mb-4 leading-relaxed">
            公式サイトの「転職成功事例・お客様の声」ページには、利用者の評判・口コミが職種ごとに「良かった点」「気になる点」の両方で掲載されています。同ページでは職場定着率97%（2024年3月時点）、「友人にも紹介したい」と答えた方95%（2023年3月時点・カウンセリングアンケート）という数字も公表されています。
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                reviewer: "業務系SE・PG（SI・受託）・26歳女性（2024年4月・カウンセリングについて）",
                text: "希望条件に合致する求人を紹介してもらえた。丁寧なヒアリングのおかげで、自分がどんな希望を持っているのか曖昧だったところも整理できた。",
              },
              {
                reviewer: "Web系SE・PG（SI・受託）・29歳女性（2024年2月・カウンセリングについて）",
                text: "履歴書・職務経歴書作成のサポートや、求人の選定・応募の代行など、働きながらの転職活動で一番面倒な作業へのサポートが手厚い。自分の作業を最大限減らして良い機会を得たいというニーズに合っていた。",
              },
              {
                reviewer: "データベースエンジニア・38歳男性（2024年5月・カウンセリングについて）",
                text: "希望に沿う求人はそれほど多くないだろうと思っていたが、他のエージェントからは紹介されなかったような求人をたくさん紹介してもらえた。対面での面談はオンラインより密度の高い情報共有ができた。",
              },
              {
                reviewer: "コーダー/マークアップエンジニア・43歳女性（2024年4月・カウンセリングについて）",
                text: "フルリモートで探していて、なかなか無いと感じていたなかで求人の量に驚いた。",
              },
            ].map((review, i) => (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #ecdcce" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "#7c3a55" }}>{review.reviewer}</p>
                <p className="text-sm text-text-light leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#c15f47" }}>利用前に知っておきたい注意点</h3>
          <div className="space-y-4 mb-6">
            {[
              {
                reviewer: "求人は首都圏中心",
                text: "Geeklyの求人は首都圏（東京・神奈川・埼玉・千葉）が中心で、地方求人は限定的です。地方在住でフルリモートにこだわる場合は、フルリモート特化のエージェントとの併用も検討しましょう。",
              },
              {
                reviewer: "IT業界の実務経験者向けのサービス",
                text: "IT・Web・ゲーム業界の経験者向けサービスのため、完全未経験の方には紹介できる求人が限られます。未経験からのIT転職を目指す方は、未経験支援に実績のあるエージェント（ワークポートなど）の利用が現実的です。",
              },
              {
                reviewer: "紹介求人数の多さ・スピード感は人を選ぶ",
                text: "公式サイト掲載の「気になる点」にも、紹介される求人数が多く吟味する時間がもっと欲しい、スピーディーすぎて圧倒された、といった声が掲載されています。じっくり比較検討したい方は、面談時に自分のペースや希望の進め方を先に伝えておくとスムーズです。",
              },
            ].map((review, i) => (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "#c15f47" }}>{review.reviewer}</p>
                <p className="text-sm text-text-light leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="text-xs text-text-light mt-4 space-y-1">
            <p>出典・参考（利用者の声はいずれも2026年7月参照。公式サイト掲載内容の要約であり、公式発信の内容です）:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <a href="https://www.geekly.co.jp/services/reviews/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">
                  Geekly公式サイト - 転職成功事例・お客様の声
                </a>
                （2026年7月参照）
              </li>
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
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">メリット・デメリット</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6" style={{ border: "2px solid #7c3a55" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>メリット</h3>
              <ul className="space-y-3">
                {[
                  "他では出会えない独占求人が豊富で、メガベンチャーやゲーム会社など人気企業への転職チャンスがある",
                  "企業ごとにカスタマイズした書類添削で書類通過率が大幅にアップする",
                  "入社後の定着率が高く、マッチング精度の高さが実績として証明されている",
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
                  "首都圏中心の求人が多く、地方在住の方は選択肢が限られる",
                  "IT業界経験者向けのサービスのため、完全未経験者には利用しづらい",
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
              { step: "1", title: "無料会員登録", desc: "公式サイトから職歴・スキル・希望条件を入力して登録。約3分で完了します。" },
              { step: "2", title: "コンサルタントとの面談", desc: "IT業界に精通したコンサルタントと面談（オンライン可）。技術スキルの棚卸しと希望条件の詳細をヒアリングします。" },
              { step: "3", title: "求人紹介・書類添削", desc: "マッチする求人（独占求人含む）を紹介。企業ごとにカスタマイズした職務経歴書の添削を行います。" },
              { step: "4", title: "面接対策・企業面接", desc: "技術面接・人物面接それぞれの対策を実施。企業ごとの面接傾向に基づいた準備ができます。" },
              { step: "5", title: "内定・入社", desc: "内定後の条件交渉をサポート。入社後のフォローアップも行い、長期的な定着をサポートします。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold" style={{ backgroundColor: "#7c3a55" }}>
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
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">こんな女性におすすめ / 向いていない人</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>おすすめの方</h3>
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
                    <span style={{ color: "#7c3a55" }}>●</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#c15f47" }}>向いていない方</h3>
              <ul className="space-y-2">
                {[
                  "IT業界未経験で転職を目指す方（ワークポート推奨）",
                  "地方在住で完全フルリモートにこだわる方（ReWorks推奨）",
                  "女性特化のきめ細かいサポートを求める方（type女性推奨）",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light">
                    <span style={{ color: "#c15f47" }}>●</span>{item}
                  </li>
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
            <Link href="/articles/web-industry/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} Web系企業への転職ガイド｜女性エンジニアが活躍する理由</Link>
            <Link href="/articles/game-industry/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} ゲーム業界への転職ガイド｜女性エンジニアの需要と年収</Link>
            <Link href="/articles/levtech-vs-geekly/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} レバテックキャリア vs Geekly徹底比較</Link>
            <Link href="/articles/salary/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} 女性エンジニアの年収ガイド｜平均年収と年収アップの方法</Link>
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
                  <span>
                    <span style={{ color: "#7c3a55" }} className="mr-2">Q.</span>
                    {faq.name}
                  </span>
                  <span className="text-text-light group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d9c7b8" }}>
                  <p className="pt-4">
                    <span style={{ color: "#c15f47" }} className="font-bold mr-2">A.</span>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: "#efe3d8" }}>
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
