import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "type女性の転職エージェントの口コミ・評判｜女性エンジニアへの対応は？",
  description:
    "type女性の転職エージェントを女性エンジニア目線で徹底レビュー。女性特化・年間5,000名カウンセリング・全員女性アドバイザーなど、リアルな口コミと評判を紹介。",
  keywords:
    "type女性の転職エージェント 口コミ, type女性の転職エージェント 評判, type 女性 エンジニア",
  alternates: { canonical: "/reviews/type-woman/" },
  openGraph: {
    title:
      "type女性の転職エージェントの口コミ・評判｜女性エンジニアへの対応は？",
    description:
      "type女性の転職エージェントを女性エンジニア目線で徹底レビュー。女性特化・全員女性アドバイザーなど、リアルな口コミと評判を紹介。",
    url: "https://women-engineer-navi.pages.dev/reviews/type-woman/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "type女性の転職エージェントの口コミ・評判｜女性エンジニアへの対応は？",
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
    "type女性の転職エージェントを女性エンジニア目線で徹底レビュー。女性特化・年間5,000名カウンセリング・全員女性アドバイザー。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer-navi.pages.dev/reviews/type-woman/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "type女性の転職エージェントはエンジニア転職にも対応していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、IT・Web系のエンジニア求人も取り扱っています。特にWebデザイナーやフロントエンドエンジニアなどクリエイティブ寄りのIT職種に強みがあります。ただし、IT特化型エージェントと比較すると高度な技術職の求人数ではやや劣ります。",
      },
    },
    {
      "@type": "Question",
      name: "アドバイザーは本当に全員女性ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、type女性の転職エージェントのアドバイザーは全員女性です。女性ならではのキャリアの悩みや、結婚・出産・育児などのライフイベントを踏まえた相談がしやすい体制が整っています。",
      },
    },
    {
      "@type": "Question",
      name: "type女性の転職エージェントの対応エリアは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "首都圏（東京・神奈川・埼玉・千葉）の求人が中心です。地方の求人は少なめですが、リモートワーク可能な求人も扱っているため、地方在住でもリモート前提なら利用可能です。",
      },
    },
    {
      "@type": "Question",
      name: "年間5,000名のカウンセリングとはどのような内容ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "キャリアカウンセリングでは、これまでの経歴・スキルの棚卸し、希望条件の整理、転職市場の動向説明、キャリアプランの設計などを行います。女性のライフステージに合わせた長期的なキャリアビジョンを一緒に考えてくれます。",
      },
    },
    {
      "@type": "Question",
      name: "type女性の転職エージェントの利用料金は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "完全無料で利用できます。求人紹介、書類添削、面接対策、年収交渉など、すべてのサービスが無料です。費用は採用企業側が負担する仕組みです。",
      },
    },
  ],
};

export default function TypeWomanReviewPage() {
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
          background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "エージェントレビュー", href: "/reviews/" },
              { label: "type女性の転職エージェント" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              女性特化型
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              type女性の転職エージェントの口コミ・評判
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性エンジニアへの対応は？徹底検証
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月27日</p>
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
                  <span className="text-5xl font-bold" style={{ color: "#7c3aed" }}>
                    4.7
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
                  女性の転職支援に25年以上の実績を持つ老舗エージェント。アドバイザーが全員女性で、ライフイベントを考慮したきめ細かなサポートが魅力です。
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "女性への配慮", score: 5 },
                  { label: "サポート体制", score: 5 },
                  { label: "IT求人の充実度", score: 3 },
                  { label: "面接対策", score: 5 },
                  { label: "カウンセリング", score: 5 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="w-32 text-sm font-medium">{item.label}</span>
                    <div className="h-2 flex-1 rounded-full" style={{ backgroundColor: "#e2e8f0" }}>
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${(item.score / 5) * 100}%`,
                          backgroundColor: "#7c3aed",
                        }}
                      />
                    </div>
                    <span className="text-sm font-bold" style={{ color: "#7c3aed" }}>
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
                  ["サービス名", "type女性の転職エージェント"],
                  ["運営会社", "株式会社キャリアデザインセンター"],
                  ["設立", "1993年7月"],
                  ["タイプ", "女性特化型転職エージェント"],
                  ["求人数", "29,000件以上（非公開求人含む）"],
                  ["対応エリア", "首都圏中心（東京・神奈川・埼玉・千葉）"],
                  ["対応職種", "営業・事務・IT・クリエイティブ・販売など幅広い職種"],
                  ["利用料金", "無料"],
                  ["女性アドバイザー", "全員女性アドバイザー"],
                  ["リモート求人", "約45%がリモートワーク対応"],
                  ["産休育休", "女性が働きやすい企業を厳選して紹介"],
                  ["公式サイト", "type.woman-agent.jp"],
                ].map(([label, value], i) => (
                  <tr
                    key={label}
                    className={i % 2 === 0 ? "bg-white" : ""}
                    style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}
                  >
                    <th
                      className="px-4 py-3 text-left text-sm font-bold w-40"
                      style={{ borderBottom: "1px solid #d1dce5", color: "#7c3aed" }}
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
          <h2 className="text-2xl font-bold mb-6">type女性の転職エージェントとは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              type女性の転職エージェントは、株式会社キャリアデザインセンターが運営する女性に特化した転職エージェントです。1993年の設立以来、30年以上にわたって転職支援サービスを提供してきた実績があります。
            </p>
            <p>
              最大の特徴は、アドバイザーが全員女性である点です。結婚・出産・育児・介護といったライフイベントを経験した、あるいは深く理解しているアドバイザーが、女性のキャリアに寄り添った提案を行います。年間5,000名以上のキャリアカウンセリング実績を持ち、豊富なノウハウが蓄積されています。
            </p>
            <p>
              IT・Web系の求人も取り扱っており、エンジニアやWebデザイナーなどの技術職での転職にも対応しています。特にワークライフバランスを重視する企業の求人を厳選しており、産休育休制度が充実した企業や、時短勤務・フレックスタイム制を導入している企業の紹介に強みがあります。
            </p>
            <p>
              面接対策では、女性が面接で聞かれやすい質問（結婚・出産に関する質問など）への対策も行っており、女性ならではの不安を解消してくれます。企業との条件交渉でも、女性が働きやすい環境を確保するための交渉を積極的に行ってくれるのが心強い点です。
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
                title: "全員女性のアドバイザー体制",
                desc: "アドバイザーが全員女性のため、産休育休の取りやすさや、女性が活躍できる職場環境について気兼ねなく相談できます。同じ女性の視点からのアドバイスが得られます。",
              },
              {
                title: "年間5,000名超のカウンセリング実績",
                desc: "年間5,000名以上の女性のキャリアカウンセリングを実施。膨大な転職事例データから、あなたのスキルと希望に合った最適な提案を受けられます。",
              },
              {
                title: "女性が面接で聞かれやすい質問への対策",
                desc: "結婚予定や出産予定に関する質問への回答方法など、女性特有の面接対策が充実。不安を解消した状態で面接に臨めます。",
              },
              {
                title: "働きやすい企業を厳選して紹介",
                desc: "産休育休制度の取得実績、時短勤務制度、女性管理職の割合など、女性の働きやすさを重視した企業を厳選して紹介してくれます。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6"
                style={{ border: "1px solid #d1dce5" }}
              >
                <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 口コミ・評判 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-2">
            type女性の転職エージェントの口コミ・評判
          </h2>
          <p className="text-xs text-text-light mb-8">
            ※掲載している口コミは、公式サイト・みん評・OpenWork等の投稿を参考に要約・再構成したものです。出典元の原文とは異なります。サービス内容は調査時点のものであり、変更される場合があります。
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3aed" }}>
            良い口コミ
          </h3>
          <div className="space-y-4 mb-8">
            {[
              {
                reviewer: "30代女性エンジニア（Webデザイナー兼フロントエンド）",
                text: "女性のアドバイザーさんに相談できたのが一番良かったです。出産後の復帰を見据えた転職だったのですが、時短勤務可能でリモートワークもOKな企業を中心に紹介してもらえました。面接で結婚や出産について聞かれたときの回答も一緒に準備してもらえて心強かったです。",
              },
              {
                reviewer: "20代女性（事務職からエンジニアへ転職）",
                text: "事務職からエンジニアへのキャリアチェンジで不安でしたが、同様の転職事例を多数持っていて、どのようなスキルをアピールすべきか具体的にアドバイスしてもらえました。カウンセリングが丁寧で、自分のキャリアの方向性が明確になりました。",
              },
              {
                reviewer: "30代女性エンジニア（育休明けの転職）",
                text: "育休から復帰した直後に転職を考え始めたのですが、子育てと両立できる職場を優先して探してもらえました。女性の気持ちをよく理解してくれるアドバイザーさんで、焦らず自分のペースで活動できたのが良かったです。最終的に在宅勤務可能な企業に内定をいただけました。",
              },
              {
                reviewer: "20代後半女性（IT企業の社内SE）",
                text: "他のエージェントでは技術の話が通じにくかったのですが、typeさんはIT業界の求人もしっかり扱っていて、女性の働きやすさとIT求人の両方の視点でマッチングしてもらえました。書類添削も細かくて、通過率が上がった実感があります。",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ backgroundColor: "#faf5ff", border: "1px solid #e9d5ff" }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: "#7c3aed" }}>
                  {review.reviewer}
                </p>
                <p className="text-sm text-text-light leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#f97066" }}>
            気になる口コミ
          </h3>
          <div className="space-y-4 mb-6">
            {[
              {
                reviewer: "20代女性エンジニア（バックエンド志望）",
                text: "女性特化のサポートは素晴らしいのですが、バックエンドエンジニアとしての高度な技術求人は少なかった印象です。IT特化型のエージェントと比べると、技術面の深い知識を持ったアドバイザーは少ないかもしれません。IT特化型との併用がおすすめです。",
              },
              {
                reviewer: "30代女性エンジニア（地方在住）",
                text: "首都圏の求人がメインで、地方在住の私にとっては選択肢が限られました。リモート可の求人もありますが、首都圏に比べると数が少なく、地方の方は他のサービスとの併用が必要かもしれません。",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="rounded-xl p-6"
                style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca" }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: "#f97066" }}>
                  {review.reviewer}
                </p>
                <p className="text-sm text-text-light leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="text-xs text-text-light mt-4 space-y-1">
            <p>出典・参考:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <a
                  href="https://type.woman-agent.jp/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="underline hover:text-primary"
                >
                  type女性の転職エージェント公式サイト
                </a>
              </li>
              <li>
                <a
                  href="https://minhyo.jp/type-woman-agent"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="underline hover:text-primary"
                >
                  みん評 - type女性の転職エージェントの口コミ・評判
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
            <div className="rounded-xl bg-white p-6" style={{ border: "2px solid #7c3aed" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3aed" }}>メリット</h3>
              <ul className="space-y-3">
                {[
                  "アドバイザーが全員女性で、ライフイベントを考慮した転職相談がしやすい環境が整っている",
                  "年間5,000名以上のカウンセリング実績から蓄積されたノウハウで、的確なキャリア提案が受けられる",
                  "面接対策では女性特有の質問への対策も万全で、安心して面接に臨める",
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
                  "IT特化型ではないため、高度な技術職の求人数はIT専門エージェントに劣る場合がある",
                  "首都圏中心の求人が多く、地方在住の方は選択肢が限られる",
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
              {
                step: "1",
                title: "無料会員登録",
                desc: "公式サイトから氏名・連絡先・現在の職種・希望条件などを入力して登録。約1分で完了します。",
              },
              {
                step: "2",
                title: "キャリアカウンセリング",
                desc: "女性アドバイザーとの面談（オンライン・対面選択可）。キャリアの棚卸し、転職の軸の明確化、ライフプランを踏まえたキャリア設計を行います。",
              },
              {
                step: "3",
                title: "求人紹介",
                desc: "カウンセリングの内容をもとに、女性が働きやすい企業を中心に厳選した求人を紹介。非公開求人も含まれます。",
              },
              {
                step: "4",
                title: "書類添削・面接対策",
                desc: "職務経歴書の添削と、女性特有の質問への対策を含む面接練習を実施。企業ごとのポイントも教えてもらえます。",
              },
              {
                step: "5",
                title: "内定・条件交渉・入社",
                desc: "内定後は年収や勤務条件の交渉をアドバイザーが代行。入社後のフォローアップも行っています。",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold"
                  style={{ backgroundColor: "#7c3aed" }}
                >
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
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3aed" }}>おすすめの方</h3>
              <ul className="space-y-2">
                {[
                  "女性アドバイザーにキャリア相談したい方",
                  "結婚・出産・育児を見据えた転職をしたい方",
                  "産休育休取得率の高い企業を探している方",
                  "面接対策を丁寧にサポートしてほしい方",
                  "首都圏でIT関連の仕事を探している方",
                  "キャリアチェンジを考えている女性",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light">
                    <span style={{ color: "#7c3aed" }}>●</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#f97066" }}>向いていない方</h3>
              <ul className="space-y-2">
                {[
                  "高度な技術職に特化した求人を求めるエンジニア（レバテックキャリア推奨）",
                  "地方在住で出社前提の求人を探している方",
                  "大量の求人から自分で選びたい方（doda推奨）",
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

      {/* FAQ */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map(
              (faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
                <details
                  key={i}
                  className="group rounded-xl bg-white"
                  style={{ border: "1px solid #d1dce5" }}
                >
                  <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                    <span>
                      <span style={{ color: "#7c3aed" }} className="mr-2">Q.</span>
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
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: "#faf5ff" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            type女性の転職エージェントで安心の転職を
          </h2>
          <p className="text-text-light mb-6">
            女性アドバイザーがあなたのキャリアに寄り添います。まずは無料カウンセリングから。
          </p>
          <a
            href="https://type.woman-agent.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            type女性の転職エージェントに無料相談する
          </a>
        </div>
      </section>
    </>
  );
}
