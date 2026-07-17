import type { Metadata } from "next";
import Link from "next/link";
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
    url: "https://women-engineer.com/reviews/green/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Greenの口コミ・評判｜女性エンジニアのカジュアル転職に最適？",
  datePublished: "2026-04-27",
  dateModified: "2026-07-17",
  author: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  description: "Green（グリーン）を女性エンジニア目線で徹底レビュー。カジュアル面談・スカウト型の実力を検証。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/reviews/green/" },
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
        text: "はい、使いやすいサービスです。リモートワーク条件での求人検索ができ（割合は公式サイトで要確認）、企業ページで福利厚生や社員口コミを確認できます。カジュアル面談で事前に職場の雰囲気を確認できるため、女性が気になる職場環境のチェックがしやすい点も魅力です。",
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
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfdf5 0%, #f1e8de 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "エージェントレビュー", href: "/reviews/" }, { label: "Green（グリーン）" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Green（グリーン）の口コミ・評判
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">女性エンジニアのカジュアル転職に最適？徹底検証</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月17日（口コミセクションを公式サイトの公開情報に基づき再構成）</p>
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
                  <span className="text-5xl font-bold" style={{ color: "#7c3a55" }}>4.1</span>
                  <span className="text-text-light text-lg">/ 5.0</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-2xl" style={{ color: star <= 4 ? "#f59e0b" : "#d9c7b8" }}>★</span>
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
                  ["サービス名", "Green（グリーン）"],
                  ["運営会社", "株式会社Atrae（アトラエ）"],
                  ["設立", "2003年10月"],
                  ["タイプ", "IT業界特化型転職プラットフォーム（転職サイト型）"],
                  ["求人数", "約28,000件（2026年7月公式サイト確認）"],
                  ["対応エリア", "全国（首都圏中心、リモート可の求人で全国対応）"],
                  ["対応職種", "エンジニア・デザイナー・PM・マーケターなどIT関連職種"],
                  ["利用料金", "無料"],
                  ["女性アドバイザー", "プラットフォーム型のため該当なし"],
                  ["リモート求人", "リモート条件で検索可能（割合は公式サイトで要確認）"],
                  ["産休育休", "企業ページで福利厚生情報を確認可能"],
                  ["公式サイト", "green-japan.com"],
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
          <h2 className="text-2xl font-bold mb-6">Green（グリーン）とは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Green（グリーン）は、株式会社Atrae（アトラエ）が運営するIT業界に特化した転職プラットフォームです。エージェント型ではなく転職サイト型のサービスで、企業と求職者が直接マッチングする仕組みになっています。約28,000件（2026年7月時点）のIT求人を掲載しています。
            </p>
            <p>
              最大の特徴は「カジュアル面談」機能です。正式な選考に進む前に、企業と気軽に話すことができる仕組みで、応募前に企業の雰囲気や仕事内容を確認できます。選考を受けるかどうかはカジュアル面談後に判断できるため、ミスマッチを防ぐのに非常に有効です。
            </p>
            <p>
              スタートアップやベンチャー企業の求人が特に豊富で、裁量の大きいポジションや最新技術を使ったプロジェクトに参画したい方に最適です。企業から直接スカウトが届く仕組みもあり、自分の市場価値を客観的に把握することができます。
            </p>
            <p>
              プラットフォーム型のため専任のキャリアアドバイザーは付きませんが、その分自分のペースで自由に転職活動を進められます。企業ページには社員口コミやカルチャー情報も掲載されており、企業選びの参考になります。リモートワーク条件での検索にも対応しています（割合は公式サイトで要確認）。
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
                title: "カジュアル面談で職場の雰囲気を事前確認",
                desc: "正式な選考前に企業と気軽に話せるカジュアル面談機能。女性の働きやすさや職場の雰囲気を事前に確認でき、入社後のギャップを最小限に抑えられます。",
              },
              {
                title: "リモートワーク条件で探しやすい",
                desc: "リモートワーク条件での検索に対応（割合は公式サイトで要確認）。スタートアップやベンチャー企業はフレキシブルな働き方を推進している企業が多く、ワークライフバランスを重視する女性に適しています。",
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
          <h2 className="text-2xl font-bold mb-2">Greenの口コミ・評判</h2>
          <p className="text-xs text-text-light mb-8">
            ※当セクションはGreen公式サイトの公開情報に基づく編集部の解説です。サービス内容は調査時点（2026年7月）のものであり、変更される場合があります。
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3a55" }}>利用者の声について</h3>
          <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0" }}>
            <p className="text-sm text-text-light leading-relaxed">
              Green公式サイト（green-japan.com）には、サービス利用者の声・転職成功事例のまとまった掲載は確認できませんでした（2026年7月時点）。Greenはエージェント型ではなく、企業と求職者が直接やり取りする転職サイト型のサービスで、公式サイトは求人検索・スカウト機能が中心の構成になっています。第三者の口コミを確認したい方は、下記のみん評などの口コミサイトを参照のうえ、最終的には実際に無料登録して求人内容やスカウトを自分の目で確かめるのが確実です。
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#c15f47" }}>利用前に知っておきたい注意点</h3>
          <div className="space-y-4 mb-6">
            {[
              {
                reviewer: "エージェントのような伴走サポートはない",
                text: "Greenはスカウト型の転職サイトであり、専任キャリアアドバイザーによる書類添削・面接対策・年収交渉の代行はありません。応募書類の準備や条件交渉は自分で行う必要があるため、手厚いサポートを受けながら進めたい方はエージェント型サービスとの併用が安心です。",
              },
              {
                reviewer: "スタートアップ・ベンチャー中心で大手求人は少なめ",
                text: "IT・Web業界のスタートアップ・ベンチャー企業の求人が豊富な一方、大手企業の求人は他のサービスと比べると少ない傾向があります。安定した大手企業を中心に探したい方は、総合型の転職サービスとの併用がおすすめです。",
              },
              {
                reviewer: "スカウトはプロフィールの充実度に左右される",
                text: "企業からのスカウトは登録プロフィールを見て送られる仕組みのため、職歴・スキルの記載が薄いとスカウトが届きにくくなります。登録時にプロフィールをしっかり作り込むことが、Greenを活かす前提条件になります。",
              },
            ].map((review, i) => (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "#c15f47" }}>{review.reviewer}</p>
                <p className="text-sm text-text-light leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="text-xs text-text-light mt-4 space-y-1">
            <p>※上記の注意点は、Green公式サイトの公開情報（サービスの仕組み・掲載求人の傾向）から編集部が整理したものです（2026年7月参照）。根拠のない評判・体験談は掲載していません。</p>
            <p>出典・参考:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="https://www.green-japan.com/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">Green公式サイト</a>（2026年7月参照）</li>
              <li><a href="https://minhyo.jp/green-japan" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">みん評 - Greenの口コミ・評判</a></li>
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
                  "カジュアル面談機能で、応募前に企業の雰囲気や仕事内容を気軽に確認でき、ミスマッチを防げる",
                  "スタートアップ・ベンチャー企業の求人が豊富で、裁量の大きい仕事に就ける",
                  "企業から直接スカウトが届き、自分の市場価値を客観的に把握できる",
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
                  "エージェント型ではないため、書類添削や面接対策などの手厚いサポートは受けられない",
                  "大手企業の求人は他のサービスと比べて少なく、安定志向の方には物足りない",
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
              { step: "1", title: "無料会員登録", desc: "公式サイトから基本情報・職歴・スキルを入力してプロフィールを作成。充実したプロフィールほどスカウトが届きやすくなります。" },
              { step: "2", title: "求人検索・スカウト受信", desc: "IT業界の求人を技術スタックや勤務条件で検索。プロフィールを見た企業からスカウトも届きます。" },
              { step: "3", title: "カジュアル面談", desc: "気になる企業にカジュアル面談を申し込み。選考前に企業の雰囲気や仕事内容を確認できます。" },
              { step: "4", title: "正式応募・選考", desc: "カジュアル面談で相性が良ければ正式に応募。書類選考・面接を経て選考が進みます。" },
              { step: "5", title: "内定・入社", desc: "内定後は企業と直接条件交渉。入社日の調整も企業と直接行います。" },
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
                  "スタートアップやベンチャー企業で働きたい女性エンジニア",
                  "カジュアルに企業と話してから応募を判断したい方",
                  "自分のペースでじっくり転職活動を進めたい方",
                  "自分の市場価値を把握したい方",
                  "裁量の大きい仕事に挑戦したい方",
                  "最新技術を使ったプロジェクトに参画したい方",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light"><span style={{ color: "#7c3a55" }}>●</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#c15f47" }}>向いていない方</h3>
              <ul className="space-y-2">
                {[
                  "書類添削や面接対策など手厚いサポートを求める方（レバテックキャリア推奨）",
                  "大手企業・安定企業への転職を希望する方（リクルートエージェント推奨）",
                  "女性特化のきめ細かいサポートを求める方（type女性推奨）",
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
            <Link href="/articles/startup/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} スタートアップ転職ガイド</Link>
            <Link href="/articles/web-industry/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} Web系企業への転職ガイド｜女性エンジニアが活躍する理由</Link>
            <Link href="/articles/green-vs-reworks/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} Green vs リワークス徹底比較</Link>
            <Link href="/articles/side-job/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} エンジニアの副業ガイド</Link>
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
