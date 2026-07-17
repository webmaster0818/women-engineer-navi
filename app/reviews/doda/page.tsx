import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "dodaの口コミ・評判｜女性エンジニアの転職にdodaは使える？",
  description:
    "dodaを女性エンジニア目線で徹底レビュー。総合型・求人数業界2位・Women's Career運営・エンジニア求人も充実など、リアルな口コミと評判を紹介。",
  keywords: "doda 口コミ, doda 評判, doda 女性, doda エンジニア 転職",
  alternates: { canonical: "/reviews/doda/" },
  openGraph: {
    title: "dodaの口コミ・評判｜女性エンジニアの転職にdodaは使える？",
    description: "dodaを女性エンジニア目線で徹底レビュー。求人数業界2位・Women's Career運営の実力を検証。",
    url: "https://women-engineer.com/reviews/doda/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "dodaの口コミ・評判｜女性エンジニアの転職にdodaは使える？",
  datePublished: "2026-04-27",
  dateModified: "2026-07-17",
  author: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  description: "dodaを女性エンジニア目線で徹底レビュー。求人数業界2位・Women's Career運営の実力を検証。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/reviews/doda/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "dodaは女性エンジニアの転職に向いていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、dodaは女性エンジニアの転職にも適しています。業界2位の求人数240,000件以上を保有しており、IT・エンジニア系の求人も数万件規模です。Woman Careerという女性向けコンテンツも運営しており、産休育休実績ありやリモートワーク可などの条件で求人を絞り込めます。",
      },
    },
    {
      "@type": "Question",
      name: "dodaのWoman Careerとはどんなサービスですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Woman Careerは、dodaが運営する女性向けの転職支援コンテンツです。女性のキャリアに関するコラムやインタビュー記事、年収査定ツール、女性向け転職イベントなどを提供しています。女性のキャリアアップに役立つ情報が充実しています。",
      },
    },
    {
      "@type": "Question",
      name: "dodaのエージェントサービスとスカウトサービスの違いは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "エージェントサービスは専任のアドバイザーが付いて求人紹介・書類添削・面接対策を行うサービスです。スカウトサービスは職務経歴を登録すると企業から直接オファーが届く仕組みです。両方を併用することで、効率的に転職活動を進められます。",
      },
    },
    {
      "@type": "Question",
      name: "dodaで産休育休実績のある企業を探せますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、dodaの求人検索では「産休・育休取得実績あり」「リモートワーク可」「フレックスタイム制」「女性活躍推進企業」などの条件でフィルタリングできます。女性が重視する条件で効率的に求人を探すことが可能です。",
      },
    },
    {
      "@type": "Question",
      name: "dodaの利用料金はかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "dodaのすべてのサービス（エージェントサービス・スカウトサービス・転職サイト機能）は完全無料で利用できます。費用は採用企業側が負担する仕組みです。",
      },
    },
  ],
};

export default function DodaReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #f4e7da 0%, #f4e7da 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "エージェントレビュー", href: "/reviews/" }, { label: "doda" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>総合型</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              dodaの口コミ・評判
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">女性エンジニアの転職にdodaは使える？徹底検証</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月17日（口コミセクションを確認済み情報ベースに刷新）</p>
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
                  <span className="text-5xl font-bold" style={{ color: "#7c3a55" }}>4.3</span>
                  <span className="text-text-light text-lg">/ 5.0</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-2xl" style={{ color: star <= 4 ? "#f59e0b" : "#d9c7b8" }}>★</span>
                  ))}
                </div>
                <p className="text-text-light text-sm">
                  業界2位の圧倒的な求人数を誇る総合型エージェント。エージェント・スカウト・転職サイトの3機能を兼ね備え、自分のペースで転職活動ができます。
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "求人数", score: 5 },
                  { label: "検索機能", score: 5 },
                  { label: "女性向け機能", score: 4 },
                  { label: "IT求人の充実度", score: 4 },
                  { label: "サポート体制", score: 3 },
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
                  ["サービス名", "doda（デューダ）"],
                  ["運営会社", "パーソルキャリア株式会社"],
                  ["設立", "1989年6月"],
                  ["タイプ", "総合型転職エージェント"],
                  ["求人数", "240,000件以上（非公開求人含む）"],
                  ["対応エリア", "全国・海外"],
                  ["対応職種", "IT・営業・事務・企画・クリエイティブなど全職種対応"],
                  ["利用料金", "無料"],
                  ["女性アドバイザー", "在籍あり"],
                  ["リモート求人", "約35%がリモートワーク対応"],
                  ["産休育休", "検索フィルターで産休育休実績あり企業を絞り込み可能"],
                  ["公式サイト", "doda.jp"],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f0e7dd" } : {}}>
                    <th className="px-4 py-3 text-left text-sm font-bold w-40" style={{ borderBottom: "1px solid #d9c7b8", color: "#7c3a55" }}>{label}</th>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d9c7b8" }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          <p className="text-xs text-text-light mt-3">※基本情報は当サイト調査時点のものです。求人数・サービス内容は変動するため、最新情報はdoda公式サイトをご確認ください。</p>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">dodaとは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              dodaは、パーソルキャリア株式会社が運営する業界2位の求人数を誇る総合型転職サービスです。240,000件以上の求人を保有し、IT・エンジニア系だけでも数万件規模の求人があります。エージェントサービス、スカウトサービス、転職サイト機能の3つを1つのプラットフォームで利用できるのが大きな特徴です。
            </p>
            <p>
              女性向けの取り組みとして「Woman Career」を運営しており、女性のキャリアに関するコラムやインタビュー記事、転職イベントなどを提供しています。求人検索機能も充実しており、産休育休実績あり・リモートワーク可・フレックスタイム制・女性活躍推進企業などの条件でフィルタリングできます。
            </p>
            <p>
              エージェントサービスでは専任のキャリアアドバイザーが付き、書類添削や面接対策、年収交渉までサポートしてくれます。一方、スカウトサービスでは職務経歴を登録すると企業から直接オファーが届く仕組みで、自分の市場価値を把握するのにも役立ちます。
            </p>
            <p>
              総合型ならではの幅広い選択肢が魅力で、大手企業からスタートアップまで多様な企業の求人を比較検討できます。ただし、IT特化型と比べるとエンジニア領域の専門性ではやや劣る面もあるため、IT特化型エージェントとの併用がおすすめです。
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
                title: "Woman Careerの充実したコンテンツ",
                desc: "女性のキャリアに特化したコラム、先輩インタビュー、年収査定ツールなどを提供。転職活動の参考になる情報が豊富に揃っています。",
              },
              {
                title: "産休育休実績で求人検索可能",
                desc: "求人検索で産休育休取得実績あり・リモートワーク可・フレックスタイム制・女性活躍推進企業などの条件で絞り込みが可能。女性が重視する条件で効率的に探せます。",
              },
              {
                title: "3つのサービスを自由に使い分け",
                desc: "エージェント・スカウト・転職サイトの3機能を状況に応じて使い分けられます。育児中でも自分のペースで転職活動を進められる柔軟性があります。",
              },
              {
                title: "大手企業の充実した求人",
                desc: "大手企業の求人が豊富で、福利厚生が充実した企業への転職に有利。産休育休制度や時短勤務制度が整った企業が多いのが魅力です。",
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
          <h2 className="text-2xl font-bold mb-2">dodaの口コミ・評判</h2>
          <p className="text-xs text-text-light mb-8">
            ※当サイトでは、実際に内容を確認できた情報のみを掲載する方針です。確認できていない口コミ・体験談は掲載していません。サービス内容は調査時点（2026年7月）のものであり、変更される場合があります。
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3a55" }}>公式サイト掲載の利用者の声について</h3>
          <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "#efe3d8", border: "1px solid #ecdcce" }}>
            <p className="text-sm text-text-light leading-relaxed">
              doda公式サイト（doda.jp）は当サイトの調査環境からページを取得できない状態が続いており、公式サイトに利用者の声・転職成功者インタビューのまとまった掲載があるかを確認できませんでした（2026年7月時点）。そのため、本ページでは利用者の声の引用・要約は掲載していません。第三者の投稿は下記のみん評などの口コミサイトでご確認ください。実際のサポートや担当者との相性は、無料登録後の面談で確かめるのが確実です。
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#c15f47" }}>利用前に知っておきたい注意点（編集部）</h3>
          <div className="space-y-4 mb-6">
            {[
              {
                reviewer: "総合型のため、IT専門特化のアドバイザーとは限らない",
                text: "dodaは全職種対応の総合型サービスで、担当アドバイザーがITエンジニア領域の専門とは限りません。技術スタックを踏まえた深い相談を重視する場合は、レバテックキャリアなどIT特化型エージェントとの併用が安心です。",
              },
              {
                reviewer: "求人数が多いぶん、自分での取捨選択も必要",
                text: "240,000件以上という求人規模のため、紹介・検索・スカウトで届く求人の精査に時間がかかることがあります。産休育休実績あり・リモートワーク可などの検索フィルターを活用し、面談でも希望条件を具体的に伝えて絞り込むのがポイントです。",
              },
              {
                reviewer: "最新のサービス内容は公式サイトで直接確認を",
                text: "前述のとおり、当サイトの調査環境からdoda公式サイトの表示を確認できない状態が続いているため、本ページの情報の一部は最新の公式表記との突合ができていません。登録前に必ず公式サイトで最新のサービス内容・求人数をご確認ください。",
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
              <li><a href="https://doda.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">doda公式サイト</a></li>
              <li><a href="https://minhyo.jp/doda" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">みん評 - dodaの口コミ・評判</a></li>
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
                  "業界2位の求人数240,000件以上を保有し、IT・エンジニア系の求人も数万件規模で充実している",
                  "Woman Careerなど女性向けの転職支援コンテンツが充実しており、産休育休実績でフィルタリングも可能",
                  "エージェント・スカウト・転職サイトの3つの機能を自由に使い分けられ、自分のペースで活動できる",
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
                  "総合型のため、IT特化型と比べてエンジニア領域の専門性ではやや劣る場合がある",
                  "求人数が多すぎて自分に合った求人を見つけにくいと感じることがある",
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
              { step: "1", title: "無料会員登録", desc: "公式サイトから基本情報・職歴・希望条件を入力して登録。エージェント・スカウト・転職サイトの3つのサービスを同時に利用開始できます。" },
              { step: "2", title: "キャリアアドバイザーとの面談", desc: "エージェントサービスを利用する場合、担当アドバイザーとの面談（オンライン・電話対応）を行います。希望条件やキャリアプランをヒアリングします。" },
              { step: "3", title: "求人紹介・スカウト受信", desc: "アドバイザーからの求人紹介に加えて、スカウトサービスにより企業からの直接オファーも届きます。自分でも転職サイトで求人検索が可能です。" },
              { step: "4", title: "書類添削・面接対策", desc: "職務経歴書の添削と面接対策を受けられます。面接対策セミナーなどの無料イベントにも参加できます。" },
              { step: "5", title: "内定・入社", desc: "内定後は年収交渉や入社日の調整をアドバイザーが代行。円満退社のアドバイスも受けられます。" },
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
                  "幅広い選択肢から比較検討したい女性エンジニア",
                  "エージェントとスカウトを併用して効率的に活動したい方",
                  "大手企業や福利厚生充実の企業を希望する方",
                  "産休育休実績のある企業を条件で絞り込みたい方",
                  "自分のペースでじっくり転職活動を進めたい方",
                  "転職活動が初めてで全体像を把握したい方",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light"><span style={{ color: "#7c3a55" }}>●</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#c15f47" }}>向いていない方</h3>
              <ul className="space-y-2">
                {[
                  "IT分野の高度な専門性を求めるエンジニア（レバテックキャリア推奨）",
                  "求人を厳選して少数精鋭で紹介してほしい方",
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
            <Link href="/articles/age-30s/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} 30代女性エンジニアの転職ガイド</Link>
            <Link href="/articles/type-vs-doda/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} type女性の転職エージェント vs doda徹底比較</Link>
            <Link href="/articles/career-path/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} キャリアパス設計ガイド｜5年後・10年後のキャリア設計</Link>
            <Link href="/articles/sier-industry/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} SIer（システムインテグレーター）への転職ガイド</Link>
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
      <section className="py-12" style={{ backgroundColor: "#efe3d8" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">dodaで理想の転職先を見つけよう</h2>
          <p className="text-text-light mb-6">業界2位の豊富な求人数で、あなたに最適な企業が見つかります。まずは無料登録から。</p>
          <a href="https://doda.jp/" target="_blank" rel="noopener noreferrer" className="btn-cta">dodaに無料登録する</a>
        </div>
      </section>
    </>
  );
}
