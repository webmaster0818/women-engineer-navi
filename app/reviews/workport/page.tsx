import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ワークポートの口コミ・評判｜女性ITエンジニア育成事業受託の実力",
  description:
    "ワークポートを女性エンジニア目線で徹底レビュー。IT特化+全国47拠点・東京都女性ITエンジニア育成事業受託・未経験OKなど、リアルな口コミと評判を紹介。",
  keywords:
    "ワークポート 口コミ, ワークポート 評判, ワークポート 女性, ワークポート エンジニア 未経験",
  alternates: { canonical: "/reviews/workport/" },
  openGraph: {
    title: "ワークポートの口コミ・評判｜女性ITエンジニア育成事業受託の実力",
    description:
      "ワークポートを女性エンジニア目線で徹底レビュー。IT特化+全国47拠点・東京都女性ITエンジニア育成事業受託の実力を検証。",
    url: "https://women-engineer-navi.pages.dev/reviews/workport/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ワークポートの口コミ・評判｜女性ITエンジニア育成事業受託の実力",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  description: "ワークポートを女性エンジニア目線で徹底レビュー。IT特化+全国47拠点・未経験OKの実力を検証。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/reviews/workport/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ワークポートは未経験からエンジニア転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ワークポートは未経験からのエンジニア転職に強みがあります。無料プログラミングスクール「みんスク」を運営しており、基礎スキルを習得してから転職活動に臨めます。未経験歓迎の求人も多数保有しています。",
      },
    },
    {
      "@type": "Question",
      name: "東京都の女性ITエンジニア育成事業とは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "東京都が主催する女性のIT業界参入を支援するための事業で、ワークポートが受託しています。ITスキル研修や就職支援を一体的に提供し、女性のデジタル人材育成に取り組んでいます。行政から信頼を得ている証拠と言えます。",
      },
    },
    {
      "@type": "Question",
      name: "ワークポートの全国対応とはどの程度ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "全国47都道府県に拠点を持ち、地方在住の方でも対面でのサポートが受けられます。各拠点で地元企業の求人も扱っているため、U・Iターン転職にも対応しています。オンライン面談も可能です。",
      },
    },
    {
      "@type": "Question",
      name: "ワークポートのみんスクとは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "みんスクは、ワークポートが提供する完全無料のプログラミングスクールです。PHP、Java、インフラなどのコースがあり、未経験からITスキルを習得できます。受講後の転職活動もワークポートが一貫してサポートします。",
      },
    },
    {
      "@type": "Question",
      name: "ワークポートの対応スピードは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "業界でもトップクラスの対応スピードが評判です。登録後の面談設定や求人紹介が非常に迅速で、急ぎの転職にも対応できます。専用のeコンシェルジュアプリでリアルタイムにやり取りができる点も好評です。",
      },
    },
  ],
};

export default function WorkportReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #eff6ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "エージェントレビュー", href: "/reviews/" }, { label: "ワークポート" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
              IT特化+総合型
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              ワークポートの口コミ・評判
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性ITエンジニア育成事業受託の実力を検証
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
                  <span className="text-5xl font-bold" style={{ color: "#0891b2" }}>4.4</span>
                  <span className="text-text-light text-lg">/ 5.0</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-2xl" style={{ color: star <= 4 ? "#f59e0b" : "#d1dce5" }}>★</span>
                  ))}
                </div>
                <p className="text-text-light text-sm">
                  元IT特化型エージェントの知見を活かしつつ総合型に転身。未経験からのエンジニア転職に強く、全国47拠点のサポート体制が魅力。
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "未経験対応", score: 5 },
                  { label: "対応スピード", score: 5 },
                  { label: "全国対応", score: 5 },
                  { label: "IT求人の専門性", score: 4 },
                  { label: "女性への配慮", score: 4 },
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
                  ["サービス名", "ワークポート"],
                  ["運営会社", "株式会社ワークポート"],
                  ["設立", "2003年3月"],
                  ["タイプ", "IT特化+総合型転職エージェント"],
                  ["求人数", "95,000件以上"],
                  ["対応エリア", "全国47都道府県に拠点あり"],
                  ["対応職種", "ITエンジニア・営業・事務・クリエイティブなど幅広い職種"],
                  ["利用料金", "無料"],
                  ["女性アドバイザー", "在籍あり"],
                  ["リモート求人", "約40%がリモートワーク対応"],
                  ["産休育休", "紹介先企業情報として提供"],
                  ["公式サイト", "workport.co.jp"],
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
          <h2 className="text-2xl font-bold mb-6">ワークポートとは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ワークポートは、2003年に設立された転職エージェントです。当初はIT業界に特化した専門エージェントとしてスタートし、その後2014年に総合型に転身しました。IT業界への深い知見を保ちながら、幅広い業界の求人を扱う独自のポジションを確立しています。
            </p>
            <p>
              95,000件以上の求人を保有し、全国47都道府県に拠点を展開。地方在住の方でも対面でのサポートが受けられる体制が整っています。元IT特化型の強みを活かし、IT・Web系の求人には特に深い知見を持っています。
            </p>
            <p>
              特筆すべきは、東京都の「女性ITエンジニア育成事業」を受託している点です。行政から女性のIT人材育成について信頼を得ていることの証であり、女性のIT業界への参入やキャリアアップに対する本気度がうかがえます。
            </p>
            <p>
              未経験者向けには無料プログラミングスクール「みんスク」を運営しており、PHP・Java・インフラなどの基礎スキルを習得してから転職活動に臨めます。スキル習得から転職まで一貫したサポートが受けられるのは大きな強みです。
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
                title: "東京都女性ITエンジニア育成事業を受託",
                desc: "東京都から女性のIT人材育成事業を受託しており、女性のIT業界参入を本格的にサポートしています。行政から信頼を得ている実績が安心材料です。",
              },
              {
                title: "無料プログラミングスクール「みんスク」",
                desc: "完全無料でプログラミングが学べるスクールを運営。PHP・Java・インフラなどのコースがあり、未経験からエンジニアを目指す女性を強力にサポートします。",
              },
              {
                title: "全国47拠点で地方在住でも安心",
                desc: "全国に拠点があるため、地方在住の女性でも対面でのキャリア相談が可能。U・Iターン転職にも柔軟に対応してくれます。",
              },
              {
                title: "スピーディーな対応",
                desc: "登録後の面談設定や求人紹介が非常に迅速。専用のeコンシェルジュアプリでリアルタイムにやり取りができ、忙しい女性でも効率的に転職活動を進められます。",
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
          <h2 className="text-2xl font-bold mb-2">ワークポートの口コミ・評判</h2>
          <p className="text-xs text-text-light mb-8">
            ※掲載している口コミは、公式サイト・みん評・OpenWork等の投稿を参考に要約・再構成したものです。出典元の原文とは異なります。サービス内容は調査時点のものであり、変更される場合があります。
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>良い口コミ</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                reviewer: "20代女性（未経験からエンジニア転職）",
                text: "事務職からエンジニアへの転職で利用しました。みんスクでJavaの基礎を学んでから転職活動を始めたのですが、スクールと転職支援が一体化しているのでとてもスムーズでした。担当の方の対応がとにかく速く、登録翌日には面談、その週には求人紹介がありました。",
              },
              {
                reviewer: "30代女性エンジニア（地方在住でUターン転職）",
                text: "地方のオフィスで対面相談ができたのが良かったです。地元企業のIT求人も扱っていて、東京から地方へのUターン転職をスムーズに進められました。IT業界に詳しいアドバイザーが地方にもいるのは心強いです。",
              },
              {
                reviewer: "20代後半女性（販売職からITエンジニアへ）",
                text: "全くの異業種からの転身で不安でしたが、東京都の女性ITエンジニア育成事業のことも教えてもらい、研修とセットでサポートしてもらえました。未経験でも応募できる求人を多く紹介してもらえて、無事にSEとして内定をもらえました。",
              },
              {
                reviewer: "30代女性エンジニア（時短勤務希望）",
                text: "子どもが小さいので時短勤務ができる企業を探していました。eコンシェルジュアプリでやり取りできるので、仕事の合間や子どもが寝た後に連絡でき、効率的に転職活動ができました。希望通り時短勤務OKの企業に転職できました。",
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
                reviewer: "30代女性エンジニア（経験5年以上）",
                text: "求人数は多いですが、質にばらつきを感じました。中にはSESの案件が多く含まれていて、希望と合わないものも紹介されました。求人を精査する手間がかかったので、経験者は他のIT特化型と併用した方がいいかもしれません。",
              },
              {
                reviewer: "20代女性エンジニア（担当者との相性）",
                text: "対応は速いのですが、やや押しが強いと感じることがありました。自分のペースでじっくり転職活動を進めたい方は、その旨を最初に伝えておいた方がいいと思います。担当者の変更もお願いすれば対応してもらえます。",
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
              <li><a href="https://www.workport.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">ワークポート公式サイト</a></li>
              <li><a href="https://minhyo.jp/workport" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">みん評 - ワークポートの口コミ・評判</a></li>
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
                  "未経験からのエンジニア転職に強く、無料プログラミングスクール「みんスク」でスキル習得から転職まで一貫サポート",
                  "全国47都道府県に拠点があり、地方在住でも対面でのキャリア相談が可能",
                  "東京都の女性ITエンジニア育成事業を受託しており、女性のIT転職支援に実績がある",
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
                  "求人数が多い分、質にばらつきがあり、SES案件も含まれている場合がある",
                  "対応が速い反面、やや押しが強いと感じる場合がある",
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
              { step: "1", title: "無料会員登録", desc: "公式サイトから基本情報を入力して登録。最短30秒で完了します。" },
              { step: "2", title: "転職コンシェルジュとの面談", desc: "専任の転職コンシェルジュと面談（対面・オンライン選択可）。経歴・スキル・希望条件をヒアリングします。未経験の方はみんスクの案内も受けられます。" },
              { step: "3", title: "求人紹介", desc: "面談内容をもとに、マッチする求人を紹介。eコンシェルジュアプリでリアルタイムに新着求人を確認できます。" },
              { step: "4", title: "書類添削・面接対策", desc: "職務経歴書の添削と面接対策を実施。未経験転職の場合はポテンシャルのアピール方法もアドバイスしてもらえます。" },
              { step: "5", title: "内定・入社", desc: "内定後の条件交渉、入社日の調整、現職の円満退社に関するアドバイスまでサポートしてくれます。" },
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
                  "未経験からエンジニアを目指す女性",
                  "地方在住で対面サポートを受けたい方",
                  "東京都の女性IT支援事業を活用したい方",
                  "スピーディーに転職活動を進めたい方",
                  "無料でプログラミングを学びたい方",
                  "U・Iターン転職を検討している方",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light"><span style={{ color: "#0891b2" }}>●</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#f97066" }}>向いていない方</h3>
              <ul className="space-y-2">
                {[
                  "ハイクラスのIT求人のみを求める経験者（レバテックキャリア推奨）",
                  "じっくり自分のペースで転職活動を進めたい方",
                  "フルリモート特化で探したい方（ReWorks推奨）",
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
            <Link href="/articles/beginner/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} 未経験からエンジニアを目指す方へ</Link>
            <Link href="/articles/age-20s/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} 20代女性エンジニアの転職ガイド</Link>
            <Link href="/articles/workport-vs-recruit/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} ワークポート vs リクルートエージェント徹底比較</Link>
            <Link href="/articles/certification/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} 女性エンジニアにおすすめの資格10選</Link>
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
      <section className="py-12" style={{ backgroundColor: "#ecfeff" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">ワークポートで新しいキャリアを始めよう</h2>
          <p className="text-text-light mb-6">未経験からのエンジニア転職も強力サポート。まずは無料相談から始めてみませんか？</p>
          <a href="https://www.workport.co.jp/" target="_blank" rel="noopener noreferrer" className="btn-cta">ワークポートに無料相談する</a>
        </div>
      </section>
    </>
  );
}
