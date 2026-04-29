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
    url: "https://women-engineer-navi.pages.dev/reviews/doda/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "dodaの口コミ・評判｜女性エンジニアの転職にdodaは使える？",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  description: "dodaを女性エンジニア目線で徹底レビュー。求人数業界2位・Women's Career運営の実力を検証。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/reviews/doda/" },
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
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "エージェントレビュー", href: "/reviews/" }, { label: "doda" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#0891b2" }}>総合型</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              dodaの口コミ・評判
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">女性エンジニアの転職にdodaは使える？徹底検証</span>
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
                  <span className="text-5xl font-bold" style={{ color: "#0891b2" }}>4.3</span>
                  <span className="text-text-light text-lg">/ 5.0</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-2xl" style={{ color: star <= 4 ? "#f59e0b" : "#d1dce5" }}>★</span>
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
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
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
          <h2 className="text-2xl font-bold mb-2">dodaの口コミ・評判</h2>
          <p className="text-xs text-text-light mb-8">
            ※掲載している口コミは、公式サイト・みん評・OpenWork等の投稿を参考に要約・再構成したものです。出典元の原文とは異なります。サービス内容は調査時点のものであり、変更される場合があります。
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>良い口コミ</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                reviewer: "30代女性エンジニア（バックエンド・転職2回目）",
                text: "求人数がとにかく多くて、自分の希望条件に合う企業をたくさん比較できました。産休育休実績ありのフィルターが便利で、子育て支援が充実した企業を効率的に探せました。スカウト機能で大手IT企業からオファーが来たのは驚きでした。",
              },
              {
                reviewer: "20代女性（IT営業からエンジニアへ転職）",
                text: "IT営業からエンジニアへのキャリアチェンジで利用しました。Woman Careerのコラムでキャリアチェンジした先輩の体験談を読めたのが参考になりました。アドバイザーの方が転職の全体像を丁寧に説明してくれて、初めての転職でも安心して進められました。",
              },
              {
                reviewer: "30代女性エンジニア（フルリモート希望）",
                text: "リモートワーク可の条件で検索したらたくさんの求人が出てきて、選択肢の多さに驚きました。エージェントとスカウトを併用して、効率的に転職活動ができました。面接対策セミナーも無料で参加でき、とても勉強になりました。",
              },
              {
                reviewer: "20代後半女性エンジニア（年収アップ目的）",
                text: "前職の年収に不満があり転職を決意。dodaのスカウト機能で自分の市場価値を確認した上で、アドバイザーと一緒に年収交渉の戦略を立てられました。結果的に年収50万円アップで転職できました。大手ならではの安心感があります。",
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
                reviewer: "30代女性エンジニア（専門性に不満）",
                text: "求人数は多いのですが、IT分野に特化したアドバイザーとは限らず、技術的な会話が深くできない場面がありました。KubernetesやTerraformなどの専門技術を理解してもらうのに苦労しました。IT特化型のエージェントと併用した方が良いです。",
              },
              {
                reviewer: "20代女性エンジニア（求人の多さに迷う）",
                text: "求人が多すぎて、どれを選べばいいか分からなくなってしまいました。自分で求人を精査する必要があり、忙しい中での転職活動はやや大変でした。もう少し絞り込んだ提案があると嬉しかったです。",
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
              <li><a href="https://doda.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">doda公式サイト</a></li>
              <li><a href="https://minhyo.jp/doda" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">みん評 - dodaの口コミ・評判</a></li>
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
                  "業界2位の求人数240,000件以上を保有し、IT・エンジニア系の求人も数万件規模で充実している",
                  "Woman Careerなど女性向けの転職支援コンテンツが充実しており、産休育休実績でフィルタリングも可能",
                  "エージェント・スカウト・転職サイトの3つの機能を自由に使い分けられ、自分のペースで活動できる",
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
                  "総合型のため、IT特化型と比べてエンジニア領域の専門性ではやや劣る場合がある",
                  "求人数が多すぎて自分に合った求人を見つけにくいと感じることがある",
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
              { step: "1", title: "無料会員登録", desc: "公式サイトから基本情報・職歴・希望条件を入力して登録。エージェント・スカウト・転職サイトの3つのサービスを同時に利用開始できます。" },
              { step: "2", title: "キャリアアドバイザーとの面談", desc: "エージェントサービスを利用する場合、担当アドバイザーとの面談（オンライン・電話対応）を行います。希望条件やキャリアプランをヒアリングします。" },
              { step: "3", title: "求人紹介・スカウト受信", desc: "アドバイザーからの求人紹介に加えて、スカウトサービスにより企業からの直接オファーも届きます。自分でも転職サイトで求人検索が可能です。" },
              { step: "4", title: "書類添削・面接対策", desc: "職務経歴書の添削と面接対策を受けられます。面接対策セミナーなどの無料イベントにも参加できます。" },
              { step: "5", title: "内定・入社", desc: "内定後は年収交渉や入社日の調整をアドバイザーが代行。円満退社のアドバイスも受けられます。" },
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
                  "幅広い選択肢から比較検討したい女性エンジニア",
                  "エージェントとスカウトを併用して効率的に活動したい方",
                  "大手企業や福利厚生充実の企業を希望する方",
                  "産休育休実績のある企業を条件で絞り込みたい方",
                  "自分のペースでじっくり転職活動を進めたい方",
                  "転職活動が初めてで全体像を把握したい方",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light"><span style={{ color: "#0891b2" }}>●</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#f97066" }}>向いていない方</h3>
              <ul className="space-y-2">
                {[
                  "IT分野の高度な専門性を求めるエンジニア（レバテックキャリア推奨）",
                  "求人を厳選して少数精鋭で紹介してほしい方",
                  "女性特化のきめ細かいサポートを求める方（type女性推奨）",
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
            <Link href="/articles/age-30s/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} 30代女性エンジニアの転職ガイド</Link>
            <Link href="/articles/type-vs-doda/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} type女性の転職エージェント vs doda徹底比較</Link>
            <Link href="/articles/career-path/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} キャリアパス設計ガイド｜5年後・10年後のキャリア設計</Link>
            <Link href="/articles/sier-industry/" className="text-sm text-gray-700 hover:text-[#0891b2] transition-colors">{"\u2192"} SIer（システムインテグレーター）への転職ガイド</Link>
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
          <h2 className="text-2xl font-bold mb-4">dodaで理想の転職先を見つけよう</h2>
          <p className="text-text-light mb-6">業界2位の豊富な求人数で、あなたに最適な企業が見つかります。まずは無料登録から。</p>
          <a href="https://doda.jp/" target="_blank" rel="noopener noreferrer" className="btn-cta">dodaに無料登録する</a>
        </div>
      </section>
    </>
  );
}
