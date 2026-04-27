import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "レバテックキャリアの口コミ・評判｜女性エンジニアの転職に使える？",
  description:
    "レバテックキャリアを女性エンジニア目線で徹底レビュー。IT特化・求人48,000件以上・年収70万UP実績など、リアルな口コミと評判を紹介。産休育休やリモートワーク対応の求人情報も詳しく解説します。",
  keywords:
    "レバテックキャリア 口コミ, レバテックキャリア 評判, レバテックキャリア 女性, レバテックキャリア エンジニア",
  alternates: { canonical: "/reviews/levtech/" },
  openGraph: {
    title: "レバテックキャリアの口コミ・評判｜女性エンジニアの転職に使える？",
    description:
      "レバテックキャリアを女性エンジニア目線で徹底レビュー。IT特化・求人48,000件以上・年収70万UP実績など、リアルな口コミと評判を紹介。",
    url: "https://women-engineer-navi.pages.dev/reviews/levtech/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "レバテックキャリアの口コミ・評判｜女性エンジニアの転職に使える？",
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
    "レバテックキャリアを女性エンジニア目線で徹底レビュー。IT特化・求人48,000件以上・年収70万UP実績など、リアルな口コミと評判を紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer-navi.pages.dev/reviews/levtech/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "レバテックキャリアは女性エンジニアでも使いやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、女性エンジニアにも使いやすいサービスです。女性アドバイザーの指名が可能で、紹介先企業の産休育休取得率やリモートワーク率なども事前に確認できます。IT業界に特化しているため、技術力を正当に評価した求人提案が受けられます。",
      },
    },
    {
      "@type": "Question",
      name: "レバテックキャリアの求人数はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "レバテックキャリアはIT・Web業界に特化し、48,000件以上のエンジニア求人を保有しています。そのうち約60%がリモートワーク対応の求人です。非公開求人も多く含まれています。",
      },
    },
    {
      "@type": "Question",
      name: "レバテックキャリアで年収アップは期待できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "年収70万円以上アップの実績が多数あります。IT業界に精通したアドバイザーが市場相場を踏まえた年収交渉を行ってくれるため、スキルに見合った年収アップが期待できます。",
      },
    },
    {
      "@type": "Question",
      name: "未経験でもレバテックキャリアは利用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "レバテックキャリアはIT経験者向けのサービスのため、完全未経験の方には向いていません。実務経験が1年以上ある方からの利用が推奨されています。未経験の方はワークポートなど未経験OK のエージェントの併用がおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "レバテックキャリアの登録から内定までの流れは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイトから無料登録後、キャリアアドバイザーとの面談（オンライン可）、求人紹介、書類添削・面接対策、企業面接、内定・年収交渉という流れです。最短2週間での内定実績もあります。",
      },
    },
  ],
};

export default function LevtechReviewPage() {
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
          background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "エージェントレビュー", href: "/reviews/" },
              { label: "レバテックキャリア" },
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
              レバテックキャリアの口コミ・評判
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性エンジニアの転職に使える？徹底検証
              </span>
            </h1>
            <p className="mt-4 text-text-light">
              最終更新: 2026年4月27日
            </p>
          </div>
        </div>
      </section>

      {/* 総合評価 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6 md:p-8"
            style={{ borderColor: "#d1dce5" }}
          >
            <h2 className="text-2xl font-bold mb-6">総合評価</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-5xl font-bold"
                    style={{ color: "#0891b2" }}
                  >
                    4.8
                  </span>
                  <span className="text-text-light text-lg">/ 5.0</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="text-2xl"
                      style={{ color: star <= 4 ? "#f59e0b" : "#d1dce5" }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-text-light text-sm">
                  IT・Web業界のエンジニア転職において業界トップクラスの実績を誇るエージェント。技術に精通したアドバイザーによる的確な求人提案と年収交渉力が強みです。
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "求人の質", score: 5 },
                  { label: "サポート体制", score: 4 },
                  { label: "女性への配慮", score: 4 },
                  { label: "年収アップ実績", score: 5 },
                  { label: "リモート求人", score: 5 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="w-28 text-sm font-medium">
                      {item.label}
                    </span>
                    <div
                      className="h-2 flex-1 rounded-full"
                      style={{ backgroundColor: "#e2e8f0" }}
                    >
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${(item.score / 5) * 100}%`,
                          backgroundColor: "#0891b2",
                        }}
                      />
                    </div>
                    <span className="text-sm font-bold" style={{ color: "#0891b2" }}>
                      {item.score}.0
                    </span>
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
                  ["サービス名", "レバテックキャリア"],
                  ["運営会社", "レバテック株式会社"],
                  ["設立", "2017年8月（レバレジーズグループは2005年設立）"],
                  ["タイプ", "IT・Web業界特化型転職エージェント"],
                  ["求人数", "48,000件以上（非公開求人含む）"],
                  ["対応エリア", "全国（東京・大阪・名古屋・福岡に拠点）"],
                  ["対応職種", "ITエンジニア・Webデザイナー・PM/PL・ITコンサルなど"],
                  ["利用料金", "無料"],
                  ["女性アドバイザー", "在籍あり（指名可能）"],
                  ["リモート求人", "約60%がリモートワーク対応"],
                  ["産休育休", "紹介先企業の取得率を事前に確認可能"],
                  ["公式サイト", "career.levtech.jp"],
                ].map(([label, value], i) => (
                  <tr
                    key={label}
                    className={i % 2 === 0 ? "bg-white" : ""}
                    style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}
                  >
                    <th
                      className="px-4 py-3 text-left text-sm font-bold w-40"
                      style={{
                        borderBottom: "1px solid #d1dce5",
                        color: "#0891b2",
                      }}
                    >
                      {label}
                    </th>
                    <td
                      className="px-4 py-3 text-sm"
                      style={{ borderBottom: "1px solid #d1dce5" }}
                    >
                      {value}
                    </td>
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
          <h2 className="text-2xl font-bold mb-6">レバテックキャリアとは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              レバテックキャリアは、レバテック株式会社が運営するIT・Web業界に特化した転職エージェントです。親会社であるレバレジーズグループは2005年に設立され、IT人材サービスを中心に急成長してきた企業グループです。
            </p>
            <p>
              レバテックキャリアの最大の特徴は、IT・Web業界に完全特化している点です。エンジニア、デザイナー、PM/PLなどのIT職種に絞り込むことで、業界知識と求人の質の両面で高い専門性を実現しています。保有求人数は48,000件以上と業界トップクラスで、大手企業からスタートアップまで幅広い企業の求人を取り揃えています。
            </p>
            <p>
              キャリアアドバイザーはIT業界出身者や技術に精通した人材が揃っており、エンジニアの技術スタックやキャリアパスを深く理解した上での提案が受けられます。年収70万円以上アップの実績も多数あり、適正な市場価値での転職を強力にサポートしてくれます。
            </p>
            <p>
              女性エンジニアの転職支援にも注力しており、女性アドバイザーの指名が可能です。紹介先企業の産休育休取得率やリモートワーク率、女性管理職比率なども事前に共有してくれるため、女性のライフプランに配慮した転職活動が行えます。
            </p>
          </div>
        </div>
      </section>

      {/* 女性エンジニアへの強み */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">
            女性エンジニアに対する強み
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "女性アドバイザー指名制度",
                desc: "女性のキャリアアドバイザーを指名できる制度があり、ライフイベントを考慮したキャリア相談がしやすい環境が整っています。結婚・出産後のキャリアプランについても安心して相談できます。",
              },
              {
                title: "産休育休取得率の事前確認",
                desc: "紹介先企業の産休育休取得率や復帰率を事前に確認できます。制度はあっても取得実績がない企業を避けたい方にとって、非常に有用な情報です。",
              },
              {
                title: "リモートワーク求人が約60%",
                desc: "保有求人の約60%がリモートワーク対応。フレックスタイム制やフルリモートなど、柔軟な働き方ができる求人が豊富で、ワークライフバランスを重視する女性に適しています。",
              },
              {
                title: "技術力を正当に評価する提案",
                desc: "技術に精通したアドバイザーが、スキルセットに基づいた適正な市場価値を提示。性別に関係なく技術力で評価される企業への転職をサポートしてくれます。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6"
                style={{ border: "1px solid #d1dce5" }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#0891b2" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 口コミ・評判 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-2">
            レバテックキャリアの口コミ・評判
          </h2>
          <p className="text-xs text-text-light mb-8">
            ※掲載している口コミは、公式サイト・みん評・OpenWork等の投稿を参考に要約・再構成したものです。出典元の原文とは異なります。サービス内容は調査時点のものであり、変更される場合があります。
          </p>

          {/* 良い口コミ */}
          <h3 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
            良い口コミ
          </h3>
          <div className="space-y-4 mb-8">
            {[
              {
                reviewer: "30代女性エンジニア（バックエンド）",
                text: "アドバイザーがJavaやSpring Bootの実務経験まで理解してくれて驚きました。技術的な話が通じるので、求人のミスマッチがほとんどなかったです。紹介先の産休育休取得率も教えてもらえて、安心して応募できました。結果的に年収が80万円アップしました。",
              },
              {
                reviewer: "20代女性エンジニア（フロントエンド）",
                text: "女性のアドバイザーさんを指名できたのが良かったです。将来の出産を見据えたキャリア相談ができ、リモートワーク可能でフレックスタイム制の企業を中心に紹介してもらえました。書類添削もとても丁寧で、職務経歴書のBefore/Afterを見て自分でも感動しました。",
              },
              {
                reviewer: "30代女性エンジニア（インフラ）",
                text: "AWSやTerraformのスキルに合った求人をピンポイントで提案してくれました。前職ではスキルに対して年収が低かったのですが、市場相場を教えてもらい、最終的に年収100万円近くアップできました。技術力で正当に評価してくれる企業に出会えたことが一番うれしいです。",
              },
              {
                reviewer: "20代後半女性（Webエンジニア転職2回目）",
                text: "2回目の転職で利用しましたが、前回使った大手総合型と比べて圧倒的に専門性が高いと感じました。面接対策でも技術面接のポイントを細かく教えてもらえ、自信を持って臨めました。内定後の年収交渉でも頼りになり、希望通りの条件で入社できました。",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: "#ecfeff",
                  border: "1px solid #cffafe",
                }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>
                  {review.reviewer}
                </p>
                <p className="text-sm text-text-light leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>

          {/* 悪い口コミ */}
          <h3 className="text-xl font-bold mb-4" style={{ color: "#f97066" }}>
            気になる口コミ
          </h3>
          <div className="space-y-4 mb-6">
            {[
              {
                reviewer: "20代女性（未経験からエンジニア転職希望）",
                text: "プログラミングスクールを卒業してすぐに登録しましたが、実務経験がないため紹介できる求人が少ないと言われました。IT特化だからこそ経験者向けの求人が中心で、未経験者には厳しい印象です。他のエージェントとの併用をすすめられました。",
              },
              {
                reviewer: "30代女性エンジニア（地方在住）",
                text: "地方在住のためリモート求人を希望しましたが、東京本社への出社が必要な求人も多く、完全フルリモートの選択肢は思ったより限られていました。拠点が都市部中心なので、地方の方はその点を理解して利用した方がいいと思います。",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: "#fef2f2",
                  border: "1px solid #fecaca",
                }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: "#f97066" }}>
                  {review.reviewer}
                </p>
                <p className="text-sm text-text-light leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>

          {/* 出典リンク */}
          <div className="text-xs text-text-light mt-4 space-y-1">
            <p>出典・参考:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <a
                  href="https://career.levtech.jp/service/reviews/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="underline hover:text-primary"
                >
                  レバテックキャリア公式 利用者の声
                </a>
              </li>
              <li>
                <a
                  href="https://minhyo.jp/levtech-career"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="underline hover:text-primary"
                >
                  みん評 - レバテックキャリアの口コミ・評判
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
            {/* メリット */}
            <div
              className="rounded-xl bg-white p-6"
              style={{ border: "2px solid #0891b2" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>
                メリット
              </h3>
              <ul className="space-y-3">
                {[
                  "IT業界に特化した48,000件以上の質の高い求人を保有しており、エンジニアにとって最も専門性の高いエージェントの一つ",
                  "技術に精通したアドバイザーがスキルマッチした求人を提案してくれるため、入社後のミスマッチが少ない",
                  "年収70万円以上アップの実績が豊富で、適正な市場価値での転職が期待できる",
                ].map((merit, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span style={{ color: "#0891b2" }} className="font-bold shrink-0">
                      ◎
                    </span>
                    <span className="text-text-light">{merit}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* デメリット */}
            <div
              className="rounded-xl bg-white p-6"
              style={{ border: "2px solid #f97066" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#f97066" }}>
                デメリット
              </h3>
              <ul className="space-y-3">
                {[
                  "IT業界以外の求人は一切取り扱いがなく、異業種への転職を検討している方には利用できない",
                  "地方の求人は都市部と比べて少なく、完全フルリモートの求人も限定的な場合がある",
                ].map((demerit, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span style={{ color: "#f97066" }} className="font-bold shrink-0">
                      △
                    </span>
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
              {
                step: "1",
                title: "無料会員登録",
                desc: "公式サイトから基本情報・職歴・希望条件を入力して登録します。所要時間は約3分です。",
              },
              {
                step: "2",
                title: "キャリアアドバイザーとの面談",
                desc: "登録後、担当アドバイザーから連絡があり、オンラインまたは電話で面談を行います。女性アドバイザーの指名もこの段階で可能です。技術スキル・希望条件・キャリアプランをヒアリングされます。",
              },
              {
                step: "3",
                title: "求人紹介・書類添削",
                desc: "面談の内容をもとに、マッチする求人が紹介されます。職務経歴書の添削では、企業ごとにカスタマイズされたアドバイスが受けられます。",
              },
              {
                step: "4",
                title: "面接対策・企業面接",
                desc: "技術面接のポイントや想定質問への回答練習など、企業ごとの面接対策を実施。面接日程の調整もアドバイザーが代行してくれます。",
              },
              {
                step: "5",
                title: "内定・年収交渉・入社",
                desc: "内定後はアドバイザーが年収交渉を代行。入社日の調整や現職の円満退社に向けたアドバイスも受けられます。",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold"
                  style={{ backgroundColor: "#0891b2" }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-text-light mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめ・向いていない */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">
            こんな女性におすすめ / 向いていない人
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div
              className="rounded-xl bg-white p-6"
              style={{ border: "1px solid #d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>
                おすすめの方
              </h3>
              <ul className="space-y-2">
                {[
                  "IT・Web業界で実務経験がある女性エンジニア",
                  "年収アップを実現したい方",
                  "技術力を正当に評価してほしい方",
                  "リモートワーク・フレックス制の企業に転職したい方",
                  "女性アドバイザーにキャリア相談したい方",
                  "産休育休取得率の高い企業を探している方",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light">
                    <span style={{ color: "#0891b2" }}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-xl bg-white p-6"
              style={{ border: "1px solid #d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#f97066" }}>
                向いていない方
              </h3>
              <ul className="space-y-2">
                {[
                  "IT業界未経験でエンジニア転職を目指す方（ワークポート推奨）",
                  "IT以外の業界への転職を検討している方",
                  "地方在住で完全フルリモートにこだわる方（ReWorks推奨）",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light">
                    <span style={{ color: "#f97066" }}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map(
              (
                faq: { name: string; acceptedAnswer: { text: string } },
                i: number
              ) => (
                <details
                  key={i}
                  className="group rounded-xl bg-white"
                  style={{ border: "1px solid #d1dce5" }}
                >
                  <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                    <span>
                      <span style={{ color: "#0891b2" }} className="mr-2">
                        Q.
                      </span>
                      {faq.name}
                    </span>
                    <span className="text-text-light group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div
                    className="px-6 pb-4 text-sm text-text-light leading-relaxed"
                    style={{ borderTop: "1px solid #d1dce5" }}
                  >
                    <p className="pt-4">
                      <span style={{ color: "#f97066" }} className="font-bold mr-2">
                        A.
                      </span>
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                </details>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: "#ecfeff" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            レバテックキャリアで理想の転職を実現しよう
          </h2>
          <p className="text-text-light mb-6">
            IT・Web業界のエンジニア転職に強い専門エージェント。まずは無料相談から始めてみませんか？
          </p>
          <a
            href="https://career.levtech.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            レバテックキャリアに無料相談する
          </a>
        </div>
      </section>
    </>
  );
}
