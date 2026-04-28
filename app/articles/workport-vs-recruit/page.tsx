import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ワークポート vs リクルートエージェント比較｜女性IT転職向け",
  description:
    "ワークポートとリクルートエージェントを女性エンジニア視点で徹底比較。IT求人の質・サポート体制・年収アップ実績など、転職先選びに必要な情報を詳しく解説します。",
  alternates: { canonical: "/articles/workport-vs-recruit/" },
  openGraph: {
    title: "ワークポート vs リクルートエージェント比較｜女性IT転職向け",
    description:
      "ワークポートとリクルートエージェントを女性エンジニア視点で徹底比較。IT求人の質・サポート体制・年収アップ実績など、転職先選びに必要な情報を詳しく解説します。",
    url: "https://women-engineer-navi.pages.dev/articles/workport-vs-recruit/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ワークポート vs リクルートエージェント比較｜女性IT転職向け",
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
    "ワークポートとリクルートエージェントを女性エンジニア視点で徹底比較。IT求人の質・サポート体制・年収アップ実績など、転職先選びに必要な情報を詳しく解説します。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer-navi.pages.dev/articles/workport-vs-recruit/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ワークポートとリクルートエージェントはどちらがIT転職に強いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT・Web業界に特化した転職を考えるなら、ワークポートがおすすめです。IT業界出身のコンシェルジュが多数在籍しており、技術的な理解に基づいた求人提案をしてくれます。リクルートエージェントは総合力が高く、IT以外の業界も含めた幅広い選択肢を提供してくれます。両方に登録して比較するのがベストです。",
      },
    },
    {
      "@type": "Question",
      name: "ワークポートは未経験からのIT転職に対応していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ワークポートは未経験からのIT転職支援に強みを持っています。無料のプログラミングスクール「みんスク」を運営しており、学習からIT転職までを一貫してサポートしてくれます。未経験可のIT求人も多く保有しているため、キャリアチェンジを考える女性にもおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "リクルートエージェントの女性向けサポートは充実していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "リクルートエージェントは総合型ですが、女性の転職支援にも力を入れています。女性向けの転職コラムや、女性活躍企業の特集ページを提供しているほか、女性アドバイザーも多数在籍しています。求人数が業界最大級のため、女性が活躍できるIT企業の選択肢も豊富です。",
      },
    },
    {
      "@type": "Question",
      name: "転職までのスピードはどちらが速いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "スピード転職を重視するなら、ワークポートがおすすめです。登録後の対応が非常に速く、早ければ登録当日に求人紹介を受けられます。ワークポートの「スピード感のある対応」は口コミでも高く評価されています。リクルートエージェントも丁寧なサポートを提供しますが、カウンセリングの予約に少し時間がかかる場合があります。",
      },
    },
    {
      "@type": "Question",
      name: "年収交渉はどちらのエージェントが強いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "年収交渉力はリクルートエージェントに定評があります。業界最大級の転職支援実績に基づく交渉ノウハウと、企業との強固な関係性を活かした交渉が強みです。ワークポートもIT業界の相場を熟知した交渉を行ってくれますが、リクルートブランドの交渉力は業界トップクラスです。",
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
      name: "ワークポート vs リクルートエージェント比較",
      item: "https://women-engineer-navi.pages.dev/articles/workport-vs-recruit/",
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
              { label: "ワークポート vs リクルートエージェント比較" },
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
              ワークポート vs リクルートエージェント比較
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性IT転職向けの徹底比較ガイド
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
                  1. ワークポートとリクルートエージェントの基本情報
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>
                  2. IT・エンジニア求人数の比較
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>
                  3. 女性エンジニアへのサポート体制
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>
                  4. 未経験からのIT転職支援
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>
                  5. 年収アップ・年収交渉力の比較
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>
                  6. 口コミ・評判の比較
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>
                  7. 対応スピードと使いやすさ
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>
                  8. タイプ別おすすめ判定
                </a>
              </li>
              <li>
                <a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>
                  9. 併用のすすめと注意点
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

      {/* sec1 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ワークポートとリクルートエージェントの基本情報</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ワークポートは、IT・Web業界に強い転職エージェントとして知られています。もともとIT特化型のエージェントとしてスタートし、現在は総合型にサービスを拡大していますが、IT業界への転職支援は依然として最大の強みです。転職コンシェルジュと呼ばれるアドバイザーが、IT業界の最新動向に精通した求人提案を行います。
            </p>
            <p>
              リクルートエージェントは、リクルートグループが運営する国内最大級の転職エージェントです。非公開求人を含めた圧倒的な求人数と、長年の転職支援で培ったノウハウが強みです。IT・エンジニア職専門のアドバイザーチームも備えており、技術職の転職にも高い専門性で対応しています。
            </p>
            <p>
              女性エンジニアがこの2社を比較する際に重要なのは、IT業界への専門性を重視するか、総合力と求人数を重視するかという点です。ワークポートはIT業界の「空気感」を理解したアドバイザーが多く、技術的な会話が通じやすいという声が多いです。一方、リクルートエージェントは企業との太いパイプを活かした独占求人や、交渉力の強さが魅力です。
            </p>
            <p>
              2026年のIT業界は人材不足が続いており、女性エンジニアの需要は高まる一方です。どちらのエージェントを選んでも、しっかりとしたサポートを受けながら転職活動を進めることができます。自分の優先順位に合わせて、メインで使うエージェントを選びましょう。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>比較項目</th>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>ワークポート</th>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>リクルートエージェント</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>タイプ</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>IT特化寄りの総合型</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>総合型（最大手）</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>求人数</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>約80,000件</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>約300,000件以上</td>
                </tr>
                <tr>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>IT求人の強み</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>Web・ゲーム・IT企業に強い</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>大手SIer・社内SEに強い</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>対応速度</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>非常に速い</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>標準的</td>
                </tr>
                <tr>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>年収交渉</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>IT業界の相場に精通</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>交渉力が業界トップ</td>
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

      {/* sec2 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">IT・エンジニア求人数の比較</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT・エンジニア求人に関して、リクルートエージェントは総数で圧倒的ですが、ワークポートはIT業界に特化した求人のクオリティに定評があります。ワークポートのIT求人は全体の約7割を占めており、Web系・ゲーム業界・スタートアップなど、成長企業の求人が多いのが特徴です。
            </p>
            <p>
              リクルートエージェントのIT求人は、大手SIer、メーカー系SI、社内SE、外資系IT企業など、安定志向の求人が充実しています。非公開求人の数も業界最大級で、リクルートエージェントでしか出会えない求人も多数あります。女性エンジニアの場合、大手企業は福利厚生が充実していることが多いため、リクルートエージェントの求人は働きやすさの面でもメリットがあります。
            </p>
            <p>
              ワークポートは、特にWeb系企業やSaaS企業の求人に強みがあります。React、TypeScript、Python、Go言語など、モダンな技術スタックを使う企業の求人が多く、技術志向の女性エンジニアにとっては魅力的なラインナップです。また、リモートワーク可能な求人の割合も高く、柔軟な働き方を求める女性に適しています。
            </p>
            <p>
              年収レンジで見ると、リクルートエージェントは年収800万円以上のハイクラス求人が豊富です。ワークポートは年収400万円〜700万円がボリュームゾーンですが、スキルの高いエンジニアには年収800万円以上の求人も提案してくれます。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアへのサポート体制</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              女性エンジニアへのサポートについて、両社のアプローチは異なります。ワークポートはIT業界の専門知識を活かしたサポートが中心で、技術面での適切なマッチングに強みがあります。女性に特化したサービスではありませんが、女性コンシェルジュも在籍しており、女性ならではの相談にも対応してくれます。
            </p>
            <p>
              リクルートエージェントは、女性の転職支援にも力を入れており、女性活躍推進企業の特集ページや、ワーキングマザー向けの求人特集を提供しています。また、リクルートグループ自体がダイバーシティを重視しており、女性のキャリアに理解のあるアドバイザーが多いのも特徴です。
            </p>
            <p>
              両社ともにオンライン面談に対応しており、在職中の転職活動もスムーズに進められます。特にワークポートは土日や夜間の対応にも柔軟で、忙しい女性エンジニアにとって利用しやすい環境が整っています。
            </p>
            <p>
              職務経歴書や履歴書の添削サポートも両社ともに充実しています。エンジニアの場合、技術スキルの棚卸しと、それを分かりやすく伝える書類作成が重要ですが、IT業界に精通したアドバイザーが的確なアドバイスを提供してくれます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                ワークポートのサポート
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                IT業界出身のコンシェルジュが技術面のマッチングを徹底サポート。対応スピードが速く、登録当日に求人紹介を受けられることも。無料プログラミングスクール「みんスク」で未経験者の学習もサポートしています。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                リクルートエージェントのサポート
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                業界最大手の信頼感と、企業との強固な関係性を活かしたサポートが特徴です。非公開求人の紹介、年収交渉、面接対策まで一貫してサポート。女性活躍推進企業の情報も豊富に保有しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験からのIT転職支援</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              未経験からIT業界への転職を考える女性にとって、ワークポートは非常に心強いパートナーです。無料のプログラミングスクール「みんスク」を運営しており、学習からIT転職までを一貫してサポートしてくれます。PHP、Java、Pythonなど、未経験者でも学びやすい言語を中心にカリキュラムが組まれています。
            </p>
            <p>
              リクルートエージェントでも未経験可のIT求人は取り扱っていますが、ワークポートほど未経験者支援に特化したサービスは提供していません。ただし、求人数の多さを活かして、未経験からでも挑戦できるポジション（ヘルプデスク、テスター、ITサポートなど）を幅広く紹介してくれます。
            </p>
            <p>
              女性が未経験からIT業界に入る場合、最初のステップとして品質管理（QA）やIT事務、テクニカルサポートなどのポジションからスタートし、徐々に開発やインフラへステップアップしていくキャリアパスが一般的です。ワークポートはこうしたステップアップのプランを含めた提案をしてくれます。
            </p>
            <p>
              経験者の転職では、リクルートエージェントの方がハイクラス求人や大手企業の求人が豊富なため、キャリアアップを目指す女性エンジニアにはリクルートエージェントもおすすめです。経験年数や目指すキャリアに応じて使い分けるとよいでしょう。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収アップ・年収交渉力の比較</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              年収交渉力では、リクルートエージェントが一歩リードしています。業界最大手としての交渉力は圧倒的で、企業との長年の関係性を活かした年収交渉が可能です。特に大手企業への転職では、リクルートブランドの影響力が年収交渉にもプラスに働きます。
            </p>
            <p>
              ワークポートの年収交渉は、IT業界の相場に基づいた的確な提案が特徴です。技術スキルの市場価値を正しく評価し、スキルに見合った年収を引き出してくれます。Web系企業やスタートアップでは、年収テーブルに柔軟性がある場合が多く、ワークポートのコンシェルジュがうまく交渉してくれるケースも少なくありません。
            </p>
            <p>
              女性エンジニアの場合、年収交渉に苦手意識を持つ方も多いですが、エージェントに任せることで適正な市場価値で転職できます。自分の技術スキルと経験を正しく評価してもらい、性別に関係なく公正な年収を得るためにも、エージェントの活用は有効です。
            </p>
            <p>
              実績としては、リクルートエージェント経由の転職で年収100万円以上アップを実現したエンジニアも多数います。ワークポート経由でも、SES企業から自社開発企業への転職で年収80万円〜150万円アップした事例が報告されています。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">口コミ・評判の比較</h2>
          <div className="space-y-4 mt-2">
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>ワークポート利用者 / 27歳 / Webエンジニア</p>
              <p className="text-sm text-text-light leading-relaxed">
                「登録してすぐに電話がかかってきて、その日のうちに面談を設定してもらえました。対応のスピードが圧倒的。コンシェルジュがIT業界に詳しく、技術的な話が通じるのが嬉しかったです。結果、モダンな技術スタックを使うSaaS企業に転職でき、年収も60万円アップしました。」
              </p>
            </div>
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: "#7c3aed" }}>リクルートエージェント利用者 / 33歳 / インフラエンジニア</p>
              <p className="text-sm text-text-light leading-relaxed">
                「求人数が本当に多くて、自分では見つけられなかった企業を多数紹介してもらえました。特に大手企業の非公開求人は魅力的でした。年収交渉もしっかりやってもらい、年収120万円アップで大手SIerに転職できました。女性管理職が多い企業を条件に加えたら、しっかり対応してもらえました。」
              </p>
            </div>
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>ワークポート利用者 / 25歳 / 未経験からIT転職</p>
              <p className="text-sm text-text-light leading-relaxed">
                「事務職からITエンジニアへのキャリアチェンジでお世話になりました。みんスクでプログラミングの基礎を学び、ワークポートから未経験OKの開発企業を紹介してもらいました。女性でも未経験から挑戦できる環境があると知れて、一歩踏み出す勇気をもらえました。」
              </p>
            </div>
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: "#7c3aed" }}>リクルートエージェント利用者 / 29歳 / バックエンドエンジニア</p>
              <p className="text-sm text-text-light leading-relaxed">
                「担当のアドバイザーがとても丁寧で、私のキャリアプランを一緒に考えてくれました。複数の内定をもらった後の条件交渉でも、最適な選択ができるようアドバイスしてくれました。リモートワーク可で、女性エンジニアが多い企業に転職できて満足しています。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">対応スピードと使いやすさ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              対応スピードでは、ワークポートが圧倒的に速いと評判です。登録後すぐに連絡がもらえ、早ければ当日中にキャリアカウンセリングを設定してもらえます。急いで転職したい方や、短期間で転職を決めたい方にはワークポートが向いています。
            </p>
            <p>
              リクルートエージェントは登録から初回面談まで数日〜1週間程度かかることがありますが、面談後のサポートは非常に丁寧です。じっくりとキャリアプランを練りたい方、複数の選択肢を慎重に比較したい方にはリクルートエージェントが向いています。
            </p>
            <p>
              使いやすさの面では、ワークポート独自の転職活動管理ツール「eコンシェル」が便利です。応募状況や面接スケジュールを一元管理でき、コンシェルジュとのやり取りもツール上で行えます。リクルートエージェントも専用のマイページが用意されており、求人の閲覧や応募管理がオンラインで完結します。
            </p>
            <p>
              在職中の女性エンジニアにとっては、スマートフォンでの操作性も重要なポイントです。両社ともにスマホ対応していますが、ワークポートのeコンシェルはスマホアプリの使い勝手が良いと評価されています。
            </p>
          </div>
        </div>
      </section>

      {/* sec8 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">タイプ別おすすめ判定</h2>
          <div className="space-y-4 mt-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                ワークポートがおすすめの人
              </h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・Web系・SaaS企業でモダンな技術を使いたい</li>
                <li>・スピード感を持って転職活動を進めたい</li>
                <li>・未経験からIT業界に挑戦したい</li>
                <li>・IT業界に詳しいアドバイザーに相談したい</li>
                <li>・リモートワーク可能な求人を探している</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                リクルートエージェントがおすすめの人
              </h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・できるだけ多くの求人から比較検討したい</li>
                <li>・大手企業や安定した企業への転職を目指している</li>
                <li>・年収交渉力の高いエージェントを利用したい</li>
                <li>・じっくりとキャリアプランを考えたい</li>
                <li>・ハイクラス求人（年収800万円以上）を探している</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec9 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">併用のすすめと注意点</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ワークポートとリクルートエージェントの併用は、女性エンジニアの転職活動において非常に効果的です。ワークポートのIT専門性とスピード感、リクルートエージェントの求人数と交渉力、それぞれの強みを活かすことで、より良い転職先を見つけやすくなります。
            </p>
            <p>
              併用する際の注意点として、同じ企業に複数のエージェントから応募しないようにしましょう。企業側に不信感を与えてしまう可能性があります。また、各エージェントにはそれぞれ他のエージェントも利用していることを伝えておくと、よりスムーズにサポートを受けられます。
            </p>
            <p>
              併用の効果的な使い方としては、ワークポートでWeb系・スタートアップの求人を探しながら、リクルートエージェントで大手企業・安定企業の求人もチェックするという方法がおすすめです。異なるタイプの企業を比較することで、自分に本当に合った環境が見えてきます。
            </p>
            <p>
              さらに、IT特化型のレバテックキャリアやGeeklyを加えて3社併用するのも一つの手です。IT特化型と総合型をバランスよく活用することで、転職の成功率を高めることができます。
            </p>
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
              href="/articles/type-vs-doda/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                type女性 vs doda比較
              </h3>
              <p className="text-sm text-text-light">女性エンジニアにおすすめはどっち？</p>
            </a>
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
              href="/articles/green-vs-reworks/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                Green vs ReWorks比較
              </h3>
              <p className="text-sm text-text-light">リモート重視の女性エンジニア向け</p>
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
