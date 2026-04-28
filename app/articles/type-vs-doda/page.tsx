import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "type女性 vs doda比較｜女性エンジニアにおすすめはどっち？",
  description:
    "type女性の転職エージェントとdodaを徹底比較。求人数・サポート体制・女性向け制度の充実度など、女性エンジニアが転職先を選ぶ際に知っておきたいポイントを詳しく解説します。",
  alternates: { canonical: "/articles/type-vs-doda/" },
  openGraph: {
    title: "type女性 vs doda比較｜女性エンジニアにおすすめはどっち？",
    description:
      "type女性の転職エージェントとdodaを徹底比較。求人数・サポート体制・女性向け制度の充実度など、女性エンジニアが転職先を選ぶ際に知っておきたいポイントを詳しく解説します。",
    url: "https://women-engineer-navi.pages.dev/articles/type-vs-doda/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "type女性 vs doda比較｜女性エンジニアにおすすめはどっち？",
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
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
    "type女性の転職エージェントとdodaを徹底比較。求人数・サポート体制・女性向け制度の充実度など、女性エンジニアが転職先を選ぶ際に知っておきたいポイントを詳しく解説します。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer-navi.pages.dev/articles/type-vs-doda/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "type女性の転職エージェントとdodaはどちらが女性エンジニアにおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "女性ならではの悩みや条件を重視するならtype女性の転職エージェントがおすすめです。女性専任のアドバイザーが在籍し、産休育休やリモートワークなど女性のニーズに合った提案をしてくれます。一方、求人数の多さや幅広い業界を比較検討したい場合はdodaが適しています。理想は両方に登録して比較することです。",
      },
    },
    {
      "@type": "Question",
      name: "type女性の転職エージェントの強みは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "type女性の転職エージェントの最大の強みは、女性のキャリアに特化したサポート体制です。女性アドバイザーが多く在籍しており、結婚・出産・育児などのライフイベントを考慮したキャリアプランを提案してくれます。また、女性が活躍している企業の情報に詳しく、職場の雰囲気や女性管理職比率などのリアルな情報を提供してくれます。",
      },
    },
    {
      "@type": "Question",
      name: "dodaの女性エンジニア向け求人の特徴は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "dodaは業界最大級の求人数を誇り、IT・エンジニア求人も豊富です。女性活躍推進企業の特集ページや、リモートワーク・フレックスタイム制の求人検索が充実しています。また、年収査定ツールやキャリアタイプ診断など、自己分析ツールも充実しているため、転職活動の初期段階で自分の市場価値を把握しやすいのが特徴です。",
      },
    },
    {
      "@type": "Question",
      name: "type女性とdodaを併用するメリットはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "併用のメリットは大きいです。type女性で女性視点のきめ細かいサポートを受けつつ、dodaの豊富な求人から幅広く選択肢を探せます。エージェントごとに独占求人があるため、併用することで出会える求人が増えます。また、複数のアドバイザーから異なる視点のアドバイスをもらうことで、より客観的な判断ができます。",
      },
    },
    {
      "@type": "Question",
      name: "どちらのエージェントも無料で利用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、type女性の転職エージェントもdodaも完全無料で利用できます。転職エージェントは企業側から成功報酬を受け取るビジネスモデルのため、転職者に費用は一切かかりません。キャリア相談だけの利用も可能なので、転職するか迷っている段階でも気軽に登録・相談できます。",
      },
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://women-engineer-navi.pages.dev",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "転職コラム",
      item: "https://women-engineer-navi.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "type女性 vs doda比較",
      item: "https://women-engineer-navi.pages.dev/articles/type-vs-doda/",
    },
  ],
};

export default function ArticlePage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
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
              { label: "転職コラム", href: "/articles/" },
              { label: "type女性 vs doda比較" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#f97066" }}
            >
              エージェント比較
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              type女性 vs doda比較
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性エンジニアにおすすめはどっち？
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月28日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}
          >
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li>
                <a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>
                  1. type女性の転職エージェントとdodaの基本情報
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>
                  2. 求人数・求人の質を比較
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>
                  3. 女性エンジニア向けサポート体制の違い
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>
                  4. 年収アップ実績の比較
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>
                  5. IT・エンジニア求人の特徴
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>
                  6. 利用者の口コミ・評判を比較
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>
                  7. タイプ別おすすめの選び方
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>
                  8. 併用がおすすめなケース
                </a>
              </li>
              <li>
                <a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>
                  9. 登録から内定までの流れ
                </a>
              </li>
              <li>
                <a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>
                  10. よくある質問
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1: 基本情報 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">type女性の転職エージェントとdodaの基本情報</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              女性エンジニアが転職を考えるとき、まず気になるのが「どのエージェントを使えばいいのか」という点です。type女性の転職エージェントとdodaは、どちらも多くの女性エンジニアに利用されている人気サービスですが、特徴や強みは大きく異なります。
            </p>
            <p>
              type女性の転職エージェントは、株式会社キャリアデザインセンターが運営する女性特化型の転職支援サービスです。2026年現在、女性の転職支援に特化して20年以上の実績を持ち、女性のライフステージに寄り添ったキャリア提案が最大の強みです。女性アドバイザーが多数在籍しており、産休・育休からの復帰やワーキングマザーの転職など、女性ならではの悩みに対して的確なアドバイスを提供しています。
            </p>
            <p>
              一方、dodaはパーソルキャリア株式会社が運営する総合型の転職サービスです。業界最大級の求人数を誇り、IT・エンジニア職だけでも数万件の求人を常時掲載しています。転職サイトとしての機能と、エージェントサービスを併用できるのが特徴で、自分のペースで求人を探しながら、必要に応じてアドバイザーのサポートを受けることができます。
            </p>
            <p>
              両者を選ぶ際に重要なのは、自分の転職における優先順位を明確にすることです。女性ならではの細やかなサポートを重視するのか、それとも圧倒的な求人数から幅広く選びたいのかによって、最適な選択は変わってきます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>比較項目</th>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>type女性の転職エージェント</th>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>doda</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>運営会社</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>キャリアデザインセンター</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>パーソルキャリア</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>タイプ</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>女性特化型</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>総合型</td>
                </tr>
                <tr>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>求人数</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>約10,000件</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>約200,000件以上</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>IT求人</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>女性向けIT求人が充実</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>業界最大級のIT求人数</td>
                </tr>
                <tr>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>女性サポート</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>女性専任アドバイザー</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>女性活躍企業特集あり</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>料金</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>完全無料</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>完全無料</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* sec2: 求人数・質 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人数・求人の質を比較</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              求人数で見ると、dodaが圧倒的に多いのは事実です。しかし、女性エンジニアにとって重要なのは「量」だけではなく「質」です。type女性の転職エージェントでは、すべての求人が女性のキャリアを考慮して厳選されており、企業の女性活躍実績や制度の運用状況まで確認した上で紹介されます。
            </p>
            <p>
              dodaのIT・エンジニア求人は、大手企業からスタートアップまで幅広くカバーしています。求人検索機能が充実しており、「リモートワーク可」「フレックスタイム制」「女性活躍推進企業」などの条件で絞り込みが可能です。エンジニアに特化した専門アドバイザーも在籍しており、技術的なマッチングの精度も高いと評判です。
            </p>
            <p>
              type女性の転職エージェントの求人は、dodaと比べると数こそ少ないものの、女性が長く働ける環境が整った企業を中心にラインナップされています。産休育休の取得率が高い企業、女性管理職の比率が高い企業、時短勤務制度がしっかり運用されている企業など、女性が気になるポイントを事前にチェックした求人が多いのが特徴です。
            </p>
            <p>
              IT業界の求人に関しては、dodaはSIer・SES・Web系・自社開発など幅広い企業の求人を保有しています。一方、type女性の転職エージェントは、特にWeb系・自社開発企業の求人に強みがあり、女性エンジニアが技術力を活かしながら働きやすい企業を紹介してくれます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                type女性の求人の特徴
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                女性向けに厳選された求人が中心です。企業の女性活躍実績を事前に確認しており、産休育休取得率や女性管理職比率などのデータも把握しています。非公開求人も多く、type女性でしか出会えない求人もあります。面接対策では、女性ならではの質問への回答方法もアドバイスしてくれます。
              </p>
            </div>
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                dodaの求人の特徴
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                業界最大級の求人数で、IT・エンジニア求人も数万件規模です。大手企業からスタートアップまで幅広くカバーしており、年収600万円以上のハイクラス求人も豊富です。転職サイト機能と併用できるため、自分で求人を探しながらエージェントサービスも受けられるのが強みです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3: 女性エンジニア向けサポート体制 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニア向けサポート体制の違い</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              サポート体制は、type女性の転職エージェントが一歩リードしています。女性のキャリアに特化した知識を持つアドバイザーが多く、結婚・出産・育児といったライフイベントを踏まえたキャリアプランの提案に定評があります。
            </p>
            <p>
              type女性の転職エージェントでは、女性アドバイザーを指名できるケースもあり、同性ならではの共感を持ったサポートが受けられます。「時短勤務でも技術力を活かせる企業」「育休復帰後も昇進できる企業」など、女性エンジニアの具体的なニーズに合った提案をしてくれます。また、面接対策では、女性ならではの質問（結婚予定や出産計画など）への対処法もアドバイスしてくれます。
            </p>
            <p>
              dodaのサポート体制も充実しており、IT専門のアドバイザーが技術面でのマッチングをしっかりサポートしてくれます。年収交渉や入社日調整など、転職に関わる交渉全般を代行してくれるのも心強いポイントです。また、職務経歴書の添削サービスや、企業ごとの面接対策など、実践的なサポートが充実しています。
            </p>
            <p>
              特にエンジニア転職においては、技術スキルの棚卸しが重要です。dodaではエンジニア出身のアドバイザーが、技術的な強みを引き出してくれます。type女性の転職エージェントでも技術に詳しいアドバイザーはいますが、IT特化型エージェントほどの専門性はないケースもあります。
            </p>
          </div>
          <div
            className="rounded-xl border p-6 mt-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>
              サポート体制の比較ポイント
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                  &#10003;
                </span>
                <span>type女性：女性専任アドバイザーによるライフイベント対応のキャリア提案</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                  &#10003;
                </span>
                <span>doda：IT専門アドバイザーによる技術面のマッチング</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                  &#10003;
                </span>
                <span>type女性：面接での女性特有の質問への対策サポート</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                  &#10003;
                </span>
                <span>doda：年収査定ツール・キャリアタイプ診断などの自己分析ツール</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                  &#10003;
                </span>
                <span>両社とも年収交渉・入社日調整などの条件交渉を代行</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec4: 年収アップ実績 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収アップ実績の比較</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              転職で年収アップを目指す女性エンジニアにとって、エージェントの年収交渉力は重要な判断材料です。type女性の転職エージェントでは、女性の市場価値を正しく評価した上での年収交渉が特徴で、「女性だから」という理由で低い年収を提示されるケースを防いでくれます。
            </p>
            <p>
              dodaでは、膨大な転職データに基づいた年収査定が可能で、自分の市場価値を客観的に把握できます。年収交渉においても、業界の相場データを根拠に企業と交渉してくれるため、納得感のある年収アップが期待できます。
            </p>
            <p>
              実際の年収アップ事例を見ると、type女性の転職エージェントでは平均50〜80万円の年収アップを実現した女性エンジニアが多くいます。特に、SESから自社開発企業への転職や、二次受けから一次受けSIerへの転職など、業態を変えることで大幅な年収アップを実現しているケースが目立ちます。
            </p>
            <p>
              dodaでも、エンジニアの転職で年収アップを実現するケースは多く、特に経験3年以上のミドルレベルエンジニアの年収アップ実績が豊富です。dodaの強みは、幅広い求人の中から最も条件の良い企業を選べる点で、複数の内定を得て条件を比較するという戦略が取りやすいことです。
            </p>
          </div>
        </div>
      </section>

      {/* sec5: IT・エンジニア求人 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">IT・エンジニア求人の特徴</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT・エンジニア求人に関して、両サービスそれぞれに異なる強みがあります。dodaはIT業界全般の求人を幅広くカバーしており、インフラエンジニア、バックエンドエンジニア、フロントエンドエンジニア、データサイエンティストなど、職種別の求人も充実しています。
            </p>
            <p>
              type女性の転職エージェントは、IT企業の中でも特に女性が活躍している企業の求人を中心に保有しています。Web系・SaaS企業の求人に強みがあり、リモートワーク可能な求人やフレックスタイム制の求人が多いのが特徴です。また、プログラミング未経験からITエンジニアを目指す女性向けの求人も取り扱っています。
            </p>
            <p>
              技術スタック別に見ると、dodaではJava、Python、JavaScript、AWS、Azureなど、あらゆる技術に対応した求人が見つかります。type女性の転職エージェントでは、特にWeb系の技術（React、TypeScript、Python、Ruby on Railsなど）を使う企業の求人が多い傾向にあります。
            </p>
            <p>
              年収レンジで見ると、dodaは年収400万円〜1,000万円以上まで幅広い求人がある一方、type女性の転職エージェントは年収400万円〜700万円がボリュームゾーンです。ただし、type女性の転職エージェントでも年収800万円以上のハイクラス求人は増加傾向にあり、経験豊富な女性エンジニアへの対応も強化しています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                type女性のIT求人の強み
              </h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・Web系・SaaS企業の求人が豊富</li>
                <li>・リモートワーク可の求人が多い</li>
                <li>・女性活躍企業の実態を把握済み</li>
                <li>・未経験からのIT転職にも対応</li>
                <li>・産休育休取得率の高い企業を厳選</li>
              </ul>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                dodaのIT求人の強み
              </h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・IT求人数が業界トップクラス</li>
                <li>・大手企業からスタートアップまで幅広い</li>
                <li>・ハイクラス求人（800万円以上）が豊富</li>
                <li>・あらゆる技術スタックに対応</li>
                <li>・エンジニア専門アドバイザーが在籍</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec6: 口コミ・評判 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">利用者の口コミ・評判を比較</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              実際にtype女性の転職エージェントとdodaを利用した女性エンジニアの声を見てみましょう。両サービスともに高い評価を得ていますが、評価のポイントが異なっています。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>type女性利用者 / 28歳 / フロントエンドエンジニア</p>
              <p className="text-sm text-text-light leading-relaxed">
                「女性のアドバイザーさんが、私の将来のライフプランも踏まえて企業を提案してくれました。産休育休の取得率だけでなく、復帰後の時短勤務の実態まで教えてくれたのが心強かったです。結果、リモートワーク中心のWeb系企業に転職でき、年収も50万円アップしました。」
              </p>
            </div>
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: "#7c3aed" }}>doda利用者 / 32歳 / バックエンドエンジニア</p>
              <p className="text-sm text-text-light leading-relaxed">
                「求人数の多さが圧倒的でした。自分で気になる求人を検索しながら、エージェントからの紹介も受けられるので効率的に転職活動ができました。技術面のマッチングも的確で、Pythonの経験を活かせる自社開発企業に転職。年収は80万円アップしました。」
              </p>
            </div>
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>type女性利用者 / 35歳 / PM</p>
              <p className="text-sm text-text-light leading-relaxed">
                「育児と両立しながらの転職活動でしたが、面談の時間帯も柔軟に対応してもらえました。女性管理職が多い企業を中心に紹介してもらい、マネジメント経験を活かしてPMポジションで転職できました。子育て中の女性エンジニアには特におすすめです。」
              </p>
            </div>
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: "#7c3aed" }}>doda利用者 / 30歳 / インフラエンジニア</p>
              <p className="text-sm text-text-light leading-relaxed">
                「年収査定ツールで自分の市場価値を知れたのが大きかったです。それを基にアドバイザーと相談し、AWSの経験を武器にクラウドインフラの求人に絞って活動しました。複数の内定をもらって条件を比較でき、最終的に年収100万円アップの企業に決めました。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec7: タイプ別おすすめ */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">タイプ別おすすめの選び方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              女性エンジニアのタイプ別に、type女性の転職エージェントとdodaのどちらがおすすめかを解説します。自分の状況や転職の目的に合わせて、最適なエージェントを選びましょう。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                type女性がおすすめの人
              </h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・結婚・出産を控えている、またはワーキングマザーとして転職を考えている</li>
                <li>・女性のアドバイザーに相談したい</li>
                <li>・女性が活躍している企業を重点的に探したい</li>
                <li>・産休育休制度の実態を事前に詳しく知りたい</li>
                <li>・時短勤務やフレックスタイム制で働きたい</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                dodaがおすすめの人
              </h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・できるだけ多くの求人から選びたい</li>
                <li>・自分でも求人を検索しながら転職活動を進めたい</li>
                <li>・年収800万円以上のハイクラス求人を探している</li>
                <li>・技術力をしっかり評価してほしい</li>
                <li>・大手企業への転職を目指している</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec8: 併用 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">併用がおすすめなケース</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              結論から言うと、type女性の転職エージェントとdodaの併用は非常におすすめです。両方に登録することで、女性向けのきめ細かいサポートと、幅広い求人の両方を活用できます。
            </p>
            <p>
              併用する場合は、メインのエージェントを1つ決めておくとスムーズです。例えば、type女性の転職エージェントをメインに据えて、女性視点のキャリアプランを軸にしながら、dodaで幅広く求人をチェックするという使い方がおすすめです。
            </p>
            <p>
              エージェントの併用は転職業界では一般的で、失礼にあたることはありません。むしろ、複数のエージェントを比較して自分に合ったサービスを見極めることは、賢い転職活動の進め方と言えます。ただし、同じ企業に複数のエージェントから応募することは避けましょう。
            </p>
            <p>
              併用を特におすすめしたいのは、転職が初めての女性エンジニアです。初めての転職では、何を基準に企業を選べばいいか分からないことも多いもの。type女性の転職エージェントで女性ならではの視点のアドバイスを受けつつ、dodaの豊富な求人で選択肢を広げることで、後悔のない転職を実現できます。
            </p>
          </div>
        </div>
      </section>

      {/* sec9: 登録から内定 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">登録から内定までの流れ</h2>
          <div className="space-y-4">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                STEP 1：会員登録（両社とも5分程度）
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                type女性の転職エージェントもdodaも、Webサイトから簡単に登録できます。氏名、連絡先、現在の職種と経験年数、希望条件などを入力するだけで完了します。type女性は女性向けの質問項目があり、ライフプランに関する情報も登録段階で伝えることができます。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                STEP 2：キャリアカウンセリング
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                登録後、アドバイザーとの面談が設定されます。オンライン面談に対応しているため、在職中でも利用しやすいです。面談ではこれまでの経験や技術スキル、転職の目的、希望条件などを詳しくヒアリングされます。type女性の転職エージェントでは、ライフプランに関する相談もこの段階で行えます。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                STEP 3：求人紹介・応募
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                カウンセリング後、条件に合った求人を紹介されます。dodaでは自分で検索した求人についてもアドバイザーに相談できます。応募書類の添削サポートを受けて、企業への応募を進めましょう。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                STEP 4：面接・内定・年収交渉
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                面接日程の調整はエージェントが代行してくれます。企業ごとの面接対策も受けられるので、事前準備も万全です。内定後の年収交渉もエージェントが代行し、納得のいく条件で入社できるようサポートしてくれます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
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
                  className="group rounded-xl border overflow-hidden"
                  style={{ borderColor: "#d1dce5" }}
                >
                  <summary
                    className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50"
                    style={{ color: "#0891b2" }}
                  >
                    <span className="pr-4">{faq.name}</span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9662;
                    </span>
                  </summary>
                  <div
                    className="px-6 pb-4 text-sm text-text-light leading-relaxed"
                    style={{ borderTop: "1px solid #d1dce5" }}
                  >
                    <p className="pt-4">{faq.acceptedAnswer.text}</p>
                  </div>
                </details>
              )
            )}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/levtech-vs-geekly/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                レバテック vs Geekly比較
              </h3>
              <p className="text-sm text-text-light">IT特化型エージェントの徹底比較</p>
            </a>
            <a
              href="/articles/workport-vs-recruit/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                ワークポート vs リクルートエージェント
              </h3>
              <p className="text-sm text-text-light">女性IT転職向けの比較ガイド</p>
            </a>
            <a
              href="/articles/how-to-choose/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                エージェント選び方ガイド
              </h3>
              <p className="text-sm text-text-light">失敗しない5つのポイント</p>
            </a>
            <a
              href="/articles/salary/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                女性エンジニアの年収ガイド
              </h3>
              <p className="text-sm text-text-light">平均年収と年収アップの方法を解説</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              理想の転職を実現しましょう
            </h2>
            <p className="text-white/90 mb-6">
              まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#f97066", color: "#ffffff" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
