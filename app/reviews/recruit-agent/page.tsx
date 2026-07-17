import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "リクルートエージェントの口コミ・評判｜女性ITエンジニアの求人数は？",
  description:
    "リクルートエージェントを女性エンジニア目線で徹底レビュー。非公開含む約100万件（2026年6月時点）の求人・IT求人多数など、リアルな口コミと評判を紹介。",
  keywords:
    "リクルートエージェント 口コミ, リクルートエージェント 評判, リクルートエージェント 女性, リクルートエージェント エンジニア",
  alternates: { canonical: "/reviews/recruit-agent/" },
  openGraph: {
    title: "リクルートエージェントの口コミ・評判｜女性ITエンジニアの求人数は？",
    description: "リクルートエージェントを女性エンジニア目線で徹底レビュー。非公開含む約100万件（2026年6月時点）の求人の実力を検証。",
    url: "https://women-engineer.com/reviews/recruit-agent/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "リクルートエージェントの口コミ・評判｜女性ITエンジニアの求人数は？",
  datePublished: "2026-04-27",
  dateModified: "2026-07-17",
  author: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  description: "リクルートエージェントを女性エンジニア目線で徹底レビュー。非公開含む約100万件（2026年6月時点）の求人の実力を検証。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/reviews/recruit-agent/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "リクルートエージェントのIT・エンジニア求人数はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "リクルートエージェントは公開・非公開をあわせて約100万件（2026年6月時点の公式表記）の求人を保有しており、そのうちIT・エンジニア系の求人は数万件規模です。大手SIer、メーカー系IT企業、Web系企業、コンサルティングファームなど幅広い企業の求人があります。",
      },
    },
    {
      "@type": "Question",
      name: "女性担当者を指名できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "登録時や面談時に女性のキャリアアドバイザーを希望する旨を伝えることができます（対応可否は状況により異なるため担当窓口に要確認）。ライフイベントを踏まえたキャリア相談がしやすくなります。",
      },
    },
    {
      "@type": "Question",
      name: "リクルートエージェントの非公開求人とは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "非公開求人は、一般には公開されていない求人のことです。リクルートエージェントは公開約75万件に加えて非公開求人を約27万件保有しています（2026年6月時点の公式表記）。大手企業の重要ポジションや、競合に知られたくない採用案件などが含まれます。登録しないとアクセスできない点が特徴です。",
      },
    },
    {
      "@type": "Question",
      name: "リクルートエージェントは転職活動が初めてでも大丈夫ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、転職支援実績No.1のリクルートエージェントは、転職活動が初めての方へのサポートにも定評があります。履歴書・職務経歴書の書き方から、面接の基本マナー、退職の進め方まで、一通りのサポートが受けられます。",
      },
    },
    {
      "@type": "Question",
      name: "リクルートエージェントの面談はオンラインでもできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、オンライン面談（電話・ビデオ通話）に対応しています。全国に拠点がありますが、来社が難しい場合はオンラインでの面談が可能です。面談時間は約60〜90分が目安です。",
      },
    },
  ],
};

export default function RecruitAgentReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fff7ed 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "エージェントレビュー", href: "/reviews/" }, { label: "リクルートエージェント" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>総合型</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              リクルートエージェントの口コミ・評判
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">女性ITエンジニアの求人数は？徹底検証</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月17日（口コミセクションを公式サイト掲載の利用者の声ベースに刷新）</p>
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
                  <span className="text-5xl font-bold" style={{ color: "#7c3a55" }}>4.2</span>
                  <span className="text-text-light text-lg">/ 5.0</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-2xl" style={{ color: star <= 4 ? "#f59e0b" : "#d9c7b8" }}>★</span>
                  ))}
                </div>
                <p className="text-text-light text-sm">
                  非公開含む約100万件（2026年6月時点）の求人数と転職支援実績No.1を誇る最大手エージェント。大手企業の求人に強く、福利厚生が充実した企業への転職に有利です。
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "求人数", score: 5 },
                  { label: "転職実績", score: 5 },
                  { label: "大手求人", score: 5 },
                  { label: "IT特化度", score: 3 },
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
                  ["サービス名", "リクルートエージェント"],
                  ["運営会社", "株式会社インディードリクルートパートナーズ（2025年4月に株式会社リクルートから分社）"],
                  ["設立", "1977年11月（リクルートキャリア設立）"],
                  ["タイプ", "総合型転職エージェント"],
                  ["求人数", "約100万件（公開約75万件+非公開約27万件・2026年6月時点）"],
                  ["対応エリア", "全国・海外"],
                  ["対応職種", "IT・営業・事務・企画・経営・医療・建築など全職種"],
                  ["利用料金", "無料"],
                  ["女性アドバイザー", "在籍あり（希望は伝達可能・指名可否は要確認）"],
                  ["リモート求人", "リモート対応求人あり（割合は公式サイトで要確認）"],
                  ["産休育休", "大手企業中心に産休育休実績豊富な求人多数"],
                  ["公式サイト", "r-agent.com"],
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
          <h2 className="text-2xl font-bold mb-6">リクルートエージェントとは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              リクルートエージェントは、株式会社インディードリクルートパートナーズ（2025年4月に株式会社リクルートの人材紹介事業を分社化）が運営する業界最大手の転職エージェントです。非公開を含め約100万件（2026年6月時点）という圧倒的な求人数を誇り、転職支援実績もNo.1を記録しています。IT・エンジニア系の求人も数万件規模で保有しており、大手SIer、メーカー系IT企業、Web系企業、コンサルティングファームなど幅広い選択肢があります。
            </p>
            <p>
              長年にわたる転職支援で蓄積された面接対策ノウハウは質が高く、過去の面接質問データベースを基にした対策が受けられます。書類添削のクオリティも高く、転職活動の基礎から丁寧にサポートしてくれるため、初めての転職の方にも安心です。
            </p>
            <p>
              女性特化のサービスは少ないものの、大手企業の求人が多いため、産休育休制度・時短勤務制度・福利厚生が充実した企業への転職に有利です。女性のキャリアアドバイザーを希望する旨を伝えれば、女性担当者に変更してもらうことも可能です。
            </p>
            <p>
              非公開求人を約27万件（2026年6月時点）保有しており、登録しないとアクセスできない求人が大量にあります。業界最大手ならではの企業ネットワークで、他社にはない独自の求人にも出会えるチャンスがあります。
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
                title: "圧倒的な求人数で選択肢が広い",
                desc: "非公開含む約100万件（2026年6月時点）の求人から、産休育休制度や時短勤務制度が充実した企業を探すことができます。IT・エンジニア系だけでも選択肢が豊富です。",
              },
              {
                title: "大手企業の充実した福利厚生",
                desc: "大手企業の求人が多いため、産休育休実績が豊富で福利厚生が充実した企業への転職がしやすいです。女性管理職の登用実績がある企業も多数紹介可能です。",
              },
              {
                title: "女性担当者の指名が可能",
                desc: "女性のキャリアアドバイザーを希望すれば担当変更が可能。ライフイベントに関する相談もしやすくなります。",
              },
              {
                title: "面接対策データベースの質の高さ",
                desc: "長年の転職支援で蓄積された面接質問データベースが充実。企業ごとの過去の質問傾向を基にした面接対策が受けられます。",
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
          <h2 className="text-2xl font-bold mb-2">リクルートエージェントの口コミ・評判</h2>
          <p className="text-xs text-text-light mb-8">
            ※以下はリクルートエージェント公式サイト（トップページ）に掲載されている「ご利用者の声」を要約・再構成したものです。出典元の原文とは異なります。利用者の属性は出典に記載されている範囲（年齢・職種）のみを記載しており、性別の記載は出典にありません。サービス内容は調査時点（2026年7月）のものであり、変更される場合があります。
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3a55" }}>公式サイト掲載の利用者の声（要約）</h3>
          <div className="space-y-4 mb-3">
            {[
              {
                reviewer: "29歳 システムエンジニア（公式サイト掲載）",
                text: "「なんとかして転職させよう」という感じではなく、まず転職すべきかどうかという部分から一緒に考えてくれたので、非常に信頼できた。",
              },
              {
                reviewer: "31歳 建築エンジニア（公式サイト掲載）",
                text: "模擬面接を通して「何をメインに伝えたらよいか」「企業側はどういう考えか」など、本番の面接で役に立ったことを学べた。",
              },
              {
                reviewer: "27歳 SE（公式サイト掲載）",
                text: "本番の面接前に、過去の質問例や面接の雰囲気などを教えてもらえたので、しっかり対策を練ることができて助かった。",
              },
            ].map((review, i) => (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #ecdcce" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "#7c3a55" }}>{review.reviewer}</p>
                <p className="text-sm text-text-light leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-light mb-8">
            出典: <a href="https://www.r-agent.com/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">リクルートエージェント公式サイト トップページ「ご利用者の声」</a>（2026年7月参照）。公式サイトが発信している内容の要約のため、中立的な第三者の評価とは性質が異なります。
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#c15f47" }}>利用前に知っておきたい注意点（編集部）</h3>
          <div className="space-y-4 mb-6">
            {[
              {
                reviewer: "総合型のため、IT専門特化のアドバイザーとは限らない",
                text: "リクルートエージェントは全職種対応の総合型エージェントで、担当アドバイザーがITエンジニア領域の専門とは限りません。技術スタックを踏まえた深い相談を重視する場合は、レバテックキャリアなどIT特化型エージェントとの併用が安心です。",
              },
              {
                reviewer: "求人数が膨大なぶん、自分での取捨選択も必要",
                text: "非公開含む約100万件（2026年6月時点の公式表記）という規模のため、紹介・検索で出てくる求人の精査に時間がかかることがあります。面談でリモート可否・産休育休実績などの希望条件を具体的に伝えて、絞り込んで提案してもらうのがポイントです。",
              },
              {
                reviewer: "上記の利用者の声は公式サイト掲載のもの",
                text: "公式サイトが選んで掲載している内容のため、良い評価が中心です。第三者の投稿はみん評などの口コミサイトで確認できます。実際のサポートや担当者との相性は、無料面談で確かめるのが確実です。",
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
              <li><a href="https://www.r-agent.com/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">リクルートエージェント公式サイト</a></li>
              <li><a href="https://minhyo.jp/r-agent" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">みん評 - リクルートエージェントの口コミ・評判</a></li>
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
                  "非公開含む約100万件（2026年6月時点）の求人数で、あらゆる選択肢を比較検討できる",
                  "転職支援実績No.1で、面接対策や書類添削のノウハウが質・量ともに業界トップ",
                  "大手企業の求人が豊富で、産休育休制度や福利厚生が充実した企業への転職に強い",
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
                  "担当者が抱える求職者数が多く、個別対応が薄くなる場合がある",
                  "求人数が膨大でエンジニア以外の求人も多いため、自分で求人を精査する必要がある",
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
              { step: "1", title: "無料会員登録", desc: "公式サイトから基本情報・職歴・希望条件を入力して登録。約5分で完了します。" },
              { step: "2", title: "キャリアアドバイザーとの面談", desc: "担当アドバイザーとの面談（対面・オンライン選択可）。女性アドバイザーの希望があればこの段階で伝えましょう。キャリアの棚卸しと希望条件のヒアリングを行います。" },
              { step: "3", title: "求人紹介", desc: "面談内容をもとに、マッチする求人を紹介。約27万件の非公開求人を含む豊富な選択肢から提案されます。" },
              { step: "4", title: "書類添削・面接対策", desc: "職務経歴書の添削と、過去の面接質問データベースを活用した面接対策を実施。企業ごとの対策が受けられます。" },
              { step: "5", title: "内定・入社", desc: "内定後は年収交渉・入社日調整をアドバイザーが代行。退職交渉のアドバイスも受けられます。" },
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
                  "大手企業・有名企業への転職を希望する女性エンジニア",
                  "福利厚生が充実した企業で長期的に働きたい方",
                  "転職活動が初めてで丁寧なサポートを受けたい方",
                  "幅広い業界の選択肢を見たい方",
                  "非公開求人にアクセスしたい方",
                  "面接対策に不安がある方",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light"><span style={{ color: "#7c3a55" }}>●</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#c15f47" }}>向いていない方</h3>
              <ul className="space-y-2">
                {[
                  "IT分野に特化した専門的なサポートを求める方（レバテックキャリア推奨）",
                  "手厚い個別対応を重視する方",
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
            <Link href="/articles/age-40s/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} 40代女性エンジニアの転職ガイド</Link>
            <Link href="/articles/workport-vs-recruit/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} ワークポート vs リクルートエージェント徹底比較</Link>
            <Link href="/articles/salary/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} 女性エンジニアの年収ガイド｜平均年収と年収アップの方法</Link>
            <Link href="/articles/career-path/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"\u2192"} キャリアパス設計ガイド｜5年後・10年後のキャリア設計</Link>
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
          <h2 className="text-2xl font-bold mb-4">リクルートエージェントで大手企業への転職を</h2>
          <p className="text-text-light mb-6">業界No.1の求人数で、あなたの理想の企業がきっと見つかります。まずは無料相談から。</p>
          <a href="https://www.r-agent.com/" target="_blank" rel="noopener noreferrer" className="btn-cta">リクルートエージェントに無料相談する</a>
        </div>
      </section>
    </>
  );
}
