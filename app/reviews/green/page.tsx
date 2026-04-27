import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Greenの口コミ・評判｜女性エンジニアのカジュアル転職に最適？",
  description:
    "Green（グリーン）を女性エンジニア目線で徹底レビュー。IT特化転職サイト・カジュアル面談・スタートアップ/ベンチャー豊富・スカウト型など、リアルな口コミと評判を紹介。",
  keywords: "Green 口コミ, グリーン 評判, Green 女性, Green エンジニア 転職",
  alternates: { canonical: "/reviews/green/" },
  openGraph: {
    title: "Greenの口コミ・評判｜女性エンジニアのカジュアル転職に最適？",
    description: "Green（グリーン）を女性エンジニア目線で徹底レビュー。カジュアル面談・スカウト型の実力を検証。",
    url: "https://women-engineer-navi.pages.dev/reviews/green/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Greenの口コミ・評判｜女性エンジニアのカジュアル転職に最適？",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  description: "Green（グリーン）を女性エンジニア目線で徹底レビュー。カジュアル面談・スカウト型の実力を検証。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/reviews/green/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Greenのカジュアル面談とは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "カジュアル面談は、正式な選考とは異なる企業との気軽な対話の場です。応募前に企業の雰囲気や仕事内容を確認でき、ミスマッチを防ぐのに役立ちます。選考を受けるかどうかはカジュアル面談後に判断できるため、気軽に企業と接点を持つことができます。",
      },
    },
    {
      "@type": "Question",
      name: "Greenはエージェント型ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ、Greenはプラットフォーム型（転職サイト型）のサービスです。専任のキャリアアドバイザーは付きませんが、自分のペースで自由に転職活動を進められます。企業から直接スカウトが届く仕組みで、企業と求職者が直接マッチングします。",
      },
    },
    {
      "@type": "Question",
      name: "Greenにはどんな企業の求人がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT・Web業界に特化しており、スタートアップ・ベンチャー企業の求人が特に豊富です。メガベンチャーやSaaS企業、ゲーム会社なども掲載されています。大手企業の求人は他のサービスと比べると少ない傾向があります。",
      },
    },
    {
      "@type": "Question",
      name: "Greenは女性エンジニアにも使いやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、使いやすいサービスです。リモートワーク対応求人が約50%と多く、企業ページで福利厚生や社員口コミを確認できます。カジュアル面談で事前に職場の雰囲気を確認できるため、女性が気になる職場環境のチェックがしやすい点も魅力です。",
      },
    },
    {
      "@type": "Question",
      name: "Greenの利用料金はかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "求職者は完全無料で利用できます。プロフィール登録、求人検索、カジュアル面談、応募など、すべての機能が無料です。費用は求人掲載企業側が負担します。",
      },
    },
  ],
};

export default function GreenReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfdf5 0%, #f0fdfa 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "エージェントレビュー", href: "/reviews/" }, { label: "Green（グリーン）" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Green（グリーン）の口コミ・評判
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">女性エンジニアのカジュアル転職に最適？徹底検証</span>
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
                  <span className="text-5xl font-bold" style={{ color: "#0891b2" }}>4.1</span>
                  <span className="text-text-light text-lg">/ 5.0</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-2xl" style={{ color: star <= 4 ? "#f59e0b" : "#d1dce5" }}>★</span>
                  ))}
                </div>
                <p className="text-text-light text-sm">
                  IT業界に特化したカジュアル転職プラットフォーム。スタートアップやベンチャー企業の求人が豊富で、カジュアル面談機能が最大の魅力です。
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "カジュアル面談", score: 5 },
                  { label: "スタートアップ求人", score: 5 },
                  { label: "スカウト機能", score: 4 },
                  { label: "リモート求人", score: 4 },
                  { label: "サポート体制", score: 2 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="w-36 text-sm font-medium">{item.label}</span>
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
                  ["サービス名", "Green（グリーン）"],
                  ["運営会社", "株式会社Atrae（アトラエ）"],
                  ["設立", "2003年10月"],
                  ["タイプ", "IT業界特化型転職プラットフォーム（転職サイト型）"],
                  ["求人数", "30,000件以上"],
                  ["対応エリア", "全国（首都圏中心、リモート可の求人で全国対応）"],
                  ["対応職種", "エンジニア・デザイナー・PM・マーケターなどIT関連職種"],
                  ["利用料金", "無料"],
                  ["女性アドバイザー", "プラットフォーム型のため該当なし"],
                  ["リモート求人", "約50%がリモートワーク対応"],
                  ["産休育休", "企業ページで福利厚生情報を確認可能"],
                  ["公式サイト", "green-japan.com"],
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
          <h2 className="text-2xl font-bold mb-6">Green（グリーン）とは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Green（グリーン）は、株式会社Atrae（アトラエ）が運営するIT業界に特化した転職プラットフォームです。エージェント型ではなく転職サイト型のサービスで、企業と求職者が直接マッチングする仕組みになっています。30,000件以上のIT求人を掲載しています。
            </p>
            <p>
              最大の特徴は「カジュアル面談」機能です。正式な選考に進む前に、企業と気軽に話すことができる仕組みで、応募前に企業の雰囲気や仕事内容を確認できます。選考を受けるかどうかはカジュアル面談後に判断できるため、ミスマッチを防ぐのに非常に有効です。
            </p>
            <p>
              スタートアップやベンチャー企業の求人が特に豊富で、裁量の大きいポジションや最新技術を使ったプロジェクトに参画したい方に最適です。企業から直接スカウトが届く仕組みもあり、自分の市場価値を客観的に把握することができます。
            </p>
            <p>
              プラットフォーム型のため専任のキャリアアドバイザーは付きませんが、その分自分のペースで自由に転職活動を進められます。企業ページには社員口コミやカルチャー情報も掲載されており、企業選びの参考になります。リモートワーク対応求人も約50%と高い水準です。
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
                title: "カジュアル面談で職場の雰囲気を事前確認",
                desc: "正式な選考前に企業と気軽に話せるカジュアル面談機能。女性の働きやすさや職場の雰囲気を事前に確認でき、入社後のギャップを最小限に抑えられます。",
              },
              {
                title: "リモートワーク対応求人が約50%",
                desc: "全体の約50%がリモートワーク対応。スタートアップやベンチャー企業はフレキシブルな働き方を推進している企業が多く、ワークライフバランスを重視する女性に適しています。",
              },
              {
                title: "企業カルチャー情報が充実",
                desc: "企業ページに社員口コミ、カルチャー情報、オフィス写真などが掲載されており、女性比率や働く環境を事前にリサーチできます。",
              },
              {
                title: "スカウトで市場価値を把握",
                desc: "企業から直接スカウトが届くため、自分のスキルや経験がどの程度の市場価値を持つかを客観的に把握できます。年収交渉の材料にもなります。",
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
          <h2 className="text-2xl font-bold mb-2">Greenの口コミ・評判</h2>
          <p className="text-xs text-text-light mb-8">
            ※掲載している口コミは、公式サイト・みん評・OpenWork等の投稿を参考に要約・再構成したものです。出典元の原文とは異なります。サービス内容は調査時点のものであり、変更される場合があります。
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>良い口コミ</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                reviewer: "20代女性エンジニア（スタートアップ転職）",
                text: "カジュアル面談がとても良かったです。いきなり選考ではなく、まず会社の雰囲気を感じ取れるので安心感があります。3社とカジュアル面談をした結果、一番フィーリングの合ったスタートアップに転職しました。女性エンジニアも多い職場で、働きやすさに満足しています。",
              },
              {
                reviewer: "30代女性エンジニア（フルリモート希望）",
                text: "フルリモートの求人を探していて、Greenにはリモートワーク可能な求人が多くて助かりました。企業ページで社員の口コミや福利厚生を確認できるので、応募前のリサーチがしやすいです。スカウトも結構来て、自分の市場価値が分かりました。",
              },
              {
                reviewer: "20代後半女性（Webエンジニア）",
                text: "自分のペースで転職活動を進めたかったのでGreenを選びました。エージェントのように急かされることなく、気になった企業にカジュアル面談を申し込める気軽さが良かったです。最終的にSaaS企業に転職し、技術的にも成長できる環境を手に入れました。",
              },
              {
                reviewer: "30代女性（PM・マネージャー職）",
                text: "スカウト機能が優秀で、自分のプロフィールを見た企業から直接声がかかりました。CTO自らスカウトメッセージを送ってくれた企業もあり、入社前から信頼関係を築けた点が良かったです。ベンチャー企業のマネージャーポジションに転職できました。",
              },
            ].map((review, i) => (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>{review.reviewer}</p>
                <p className="text-sm text-text-light leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#f97066" }}>気になる口コミ</h3>
          <div className="space-y-4 mb-6">
            {[
              {
                reviewer: "20代女性エンジニア（サポート不足を感じた）",
                text: "プラットフォーム型なのでキャリアアドバイザーがいません。書類の添削や面接対策を受けたい方にはサポートが足りないと感じるかもしれません。初めての転職ではエージェント型と併用した方が安心です。",
              },
              {
                reviewer: "30代女性エンジニア（大手企業希望）",
                text: "スタートアップやベンチャー企業の求人は多いのですが、大手企業の求人は少ない印象です。安定した大手企業を希望する方には物足りないかもしれません。大手企業を希望するなら他のサービスとの併用がおすすめです。",
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
              <li><a href="https://www.green-japan.com/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">Green公式サイト</a></li>
              <li><a href="https://minhyo.jp/green" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">みん評 - Greenの口コミ・評判</a></li>
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
                  "カジュアル面談機能で、応募前に企業の雰囲気や仕事内容を気軽に確認でき、ミスマッチを防げる",
                  "スタートアップ・ベンチャー企業の求人が豊富で、裁量の大きい仕事に就ける",
                  "企業から直接スカウトが届き、自分の市場価値を客観的に把握できる",
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
                  "エージェント型ではないため、書類添削や面接対策などの手厚いサポートは受けられない",
                  "大手企業の求人は他のサービスと比べて少なく、安定志向の方には物足りない",
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
              { step: "1", title: "無料会員登録", desc: "公式サイトから基本情報・職歴・スキルを入力してプロフィールを作成。充実したプロフィールほどスカウトが届きやすくなります。" },
              { step: "2", title: "求人検索・スカウト受信", desc: "IT業界の求人を技術スタックや勤務条件で検索。プロフィールを見た企業からスカウトも届きます。" },
              { step: "3", title: "カジュアル面談", desc: "気になる企業にカジュアル面談を申し込み。選考前に企業の雰囲気や仕事内容を確認できます。" },
              { step: "4", title: "正式応募・選考", desc: "カジュアル面談で相性が良ければ正式に応募。書類選考・面接を経て選考が進みます。" },
              { step: "5", title: "内定・入社", desc: "内定後は企業と直接条件交渉。入社日の調整も企業と直接行います。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold" style={{ backgroundColor: "#0891b2" }}>{item.step}</div>
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
                  "スタートアップやベンチャー企業で働きたい女性エンジニア",
                  "カジュアルに企業と話してから応募を判断したい方",
                  "自分のペースでじっくり転職活動を進めたい方",
                  "自分の市場価値を把握したい方",
                  "裁量の大きい仕事に挑戦したい方",
                  "最新技術を使ったプロジェクトに参画したい方",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light"><span style={{ color: "#0891b2" }}>●</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#f97066" }}>向いていない方</h3>
              <ul className="space-y-2">
                {[
                  "書類添削や面接対策など手厚いサポートを求める方（レバテックキャリア推奨）",
                  "大手企業・安定企業への転職を希望する方（リクルートエージェント推奨）",
                  "女性特化のきめ細かいサポートを求める方（type女性推奨）",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light"><span style={{ color: "#f97066" }}>●</span>{item}</li>
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
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d1dce5" }}>
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                  <span><span style={{ color: "#0891b2" }} className="mr-2">Q.</span>{faq.name}</span>
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
      <section className="py-12" style={{ backgroundColor: "#ecfdf5" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Greenでカジュアルに転職活動を始めよう</h2>
          <p className="text-text-light mb-6">カジュアル面談で企業と気軽に話せる。まずは無料登録から始めてみませんか？</p>
          <a href="https://www.green-japan.com/" target="_blank" rel="noopener noreferrer" className="btn-cta">Greenに無料登録する</a>
        </div>
      </section>
    </>
  );
}
