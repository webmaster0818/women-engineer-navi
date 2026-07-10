import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの言語別年収比較｜Go・Python・TypeScriptで稼げる言語の選び方",
  description:
    "女性エンジニア向けにプログラミング言語別の年収を徹底比較。Go723万円・TypeScript714万円・Ruby689万円など主要11言語の平均年収とフリーランス単価を一覧表で解説。高単価言語の理由、女性が年収を上げる言語選び、未経験から狙える言語、言語を変えて年収アップした事例まで実データで紹介します。",
  alternates: { canonical: "/articles/salary-by-language/" },
  openGraph: {
    title: "女性エンジニアの言語別年収比較｜稼げる言語の選び方",
    description:
      "主要プログラミング言語の平均年収・フリーランス単価を比較。高単価言語の理由、女性が年収を上げる言語選び、未経験から狙える言語を実データで解説。",
    url: "https://women-engineer.com/articles/salary-by-language/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの言語別年収比較｜Go・Python・TypeScriptで稼げる言語の選び方",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
  author: {
    "@type": "Organization",
    name: "CareeHUB for woman",
    url: "https://women-engineer.com",
  },
  publisher: {
    "@type": "Organization",
    name: "CareeHUB for woman",
    url: "https://women-engineer.com",
  },
  description:
    "女性エンジニア向けにプログラミング言語別の平均年収・フリーランス単価を比較し、年収を上げる言語の選び方を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/salary-by-language/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性エンジニアが一番年収を上げやすいプログラミング言語は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "提示年収のデータ（paiza 2025年版調査）では、Goが723万円で3年連続1位、TypeScriptが714万円で2位、Rubyが689万円で3位です。フリーランスでも、エン・ジャパン「フリーランススタート」調査でRust・Goが高単価上位に入ります。ただし求人数自体はJavaScript・Java・PHPが多く、いきなり希少言語だけを狙うと案件にたどり着きにくいこともあります。女性が現実的に年収を上げやすいのは、求人が多く学びやすいPythonやTypeScriptを軸にしつつ、需要が高くリモート求人も多いGoへステップアップしていくルートです。",
      },
    },
    {
      "@type": "Question",
      name: "なぜGoやRust、Scalaは年収が高いのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go・Rust・Scala・TypeScriptなどは、SaaS・スタートアップのマイクロサービスやAI基盤、大規模データ処理といった「新しく単価の高い領域」で使われる一方、習得しているエンジニアの割合が全体の1〜3%程度と少なく、希少性が高いためです。需要が供給を上回るほど企業は高い年収を提示します。特にRustはAI推論の高速化やWebAssembly、システム基盤の領域で『Pythonと組み合わせる第二言語』として伸び、フリーランス単価が5カ月連続で上昇するなど勢いがあります。希少性×新領域が高単価の正体です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でも年収を狙える言語はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "あります。未経験から学びやすく、かつ年収・将来性のバランスが良いのはPythonとTypeScriptです。PythonはAI・データ活用・LLM/RAG開発の中心言語で、求人が多く文法もシンプル。TypeScriptはフロントからバックまで幅広く使え、提示年収ランキングでも上位です。Ruby（Ruby on Rails）も学習しやすく自社開発企業の求人が多めで、提示年収・フリーランス単価ともに高い水準です。いきなりGoやRustを狙うより、まずこの3つのいずれかで土台を作り、実務経験を積んでから高単価言語に広げるのが堅実です。",
      },
    },
    {
      "@type": "Question",
      name: "求人数が多い言語と年収が高い言語は違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "違います。提示年収が高いのはGo・TypeScript・Ruby・Scala・Kotlinなどモダンな言語ですが、求人数（企業ニーズ）が多いのはJavaScript・Java・PHPです。これは既存システムの保守や大規模サービスを支える人材が大量に必要なためです。女性が転職で失敗しないコツは、この『需給ギャップ』を理解すること。求人が多い言語は採用されやすく未経験の入り口に向き、年収が高い言語はスキルアップ後の伸びしろになります。KotlinやGoは『需要が高いのに扱える人が少ない穴場言語』で、狙う価値があります。",
      },
    },
    {
      "@type": "Question",
      name: "今使っている言語の年収が低い場合、転職で言語を変えるべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "必ずしも言語をゼロから変える必要はありません。たとえばPHPやJavaの経験者がGoやTypeScriptに軸足を移すと、サーバーサイドの設計力やDB知識をそのまま活かせるため、年収100万〜200万円アップを実現する女性も少なくありません。一方、まったく未経験の言語に飛び込むと一時的に評価が下がることもあります。おすすめは、今の言語で実務経験を積みながら、副業や個人開発で高単価言語に触れて実績を作り、エージェント経由で『経験+新言語』として売り込む方法です。市場価値の客観評価はIT特化型エージェントに相談すると確実です。",
      },
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

      {/* Hero */}
      <section
        className="relative py-12 md:py-16"
        style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "言語別エンジニア年収比較" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              年収ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの言語別年収比較
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                Go・Python・TypeScriptなど主要11言語の年収を実データで比較し、稼げる言語の選び方を解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月10日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 言語選びで年収はどれだけ変わるのか</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 主要11言語の年収・単価比較表（大表）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 高単価な言語とその理由（Go・Rust・TypeScript）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 女性が選ぶべき言語の考え方</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 未経験でも年収を狙える言語</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 言語を変えて年収アップした女性の事例</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 言語別に年収を上げるロードマップ</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 言語と年収の関係 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">言語選びで年収はどれだけ変わるのか</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              エンジニアの年収は、職種や経験年数だけでなく「どのプログラミング言語を扱えるか」で大きく変わります。paizaの「プログラミング言語に関する調査（2025年版）」では、提示年収1位のGoが<strong>723万円</strong>であるのに対し、求人数の多いPHPやJavaScriptは平均で500万円台前半。<strong>同じ実務経験でも、言語が違うだけで100万〜200万円の差</strong>が生まれることも珍しくありません。
            </p>
            <p>
              これは「言語そのものの難しさ」だけで決まるのではなく、<strong>その言語が使われる領域の単価</strong>と<strong>扱えるエンジニアの希少性</strong>で決まります。たとえばGo・TypeScript・Scalaは、SaaSやスタートアップのモダンな開発・AI基盤・大規模データ処理など単価の高い領域で使われ、習得者が全体の1〜3%程度と少ないため、企業が高い年収を提示してでも確保しようとします。
            </p>
            <p>
              女性エンジニアにとって、この構造を理解することは「働き方の自由」にも直結します。高単価でリモート求人が多い言語を選べば、<strong>育児や介護と両立しながら年収を維持・向上</strong>させやすくなるからです。この記事では主要11言語の平均年収とフリーランス単価を比較し、女性が現実的に年収を上げるための言語選びを解説します。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>年収を左右する3つの軸</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>領域の単価</strong>：AI・SaaS・マイクロサービスなど新しい領域ほど高い</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>希少性</strong>：Go・Rust・Scalaなど扱える人が少ない言語は高単価</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>求人数（需給ギャップ）</strong>：JavaScript・Javaは求人が多く入りやすい</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 言語別年収比較表（大表） */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">主要11言語の年収・単価比較表（大表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              下表は、提示年収（paiza 2025年版調査）とフリーランス月額単価（エン・ジャパン「フリーランススタート」2025年調査ほか各社データ）をもとにした、主要11言語の年収・単価の目安です。数値は調査・時期・スキルにより変動しますが、<strong>言語間の相対的な高低</strong>をつかむ参考になります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>言語</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均年収の目安</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>FL月額単価</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>主な領域・特徴</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Go</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約723万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約80万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>SaaS・マイクロサービス。3年連続提示年収1位</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>TypeScript</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約714万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約75万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>フロント〜バック横断。求人も豊富で伸びしろ大</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Ruby</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約689万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約80〜94万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>Rails中心の自社開発。学習しやすく高単価</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Scala</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約668〜680万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約83万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>大規模データ処理。習得者が少なく希少</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Kotlin</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約665万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約75万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>Androidアプリ・サーバー。需給ギャップの穴場</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Rust</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約650〜700万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>上昇中（上位）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>AI推論高速化・基盤。単価が連続上昇中で急騰</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Python</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約600〜700万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約87万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>AI・データ・LLM/RAG。求人多く未経験向き</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>C#</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約550〜600万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約70万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>業務システム・Unityゲーム。安定需要</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Java</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約550万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約69万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>大規模・金融系。求人数が多く安定（企業ニーズ上位）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>PHP</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約500〜550万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約72万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>Web制作・CMS。求人が多く未経験の入り口</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>JavaScript</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約500〜550万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約70万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>あらゆるWeb。求人数1位。TypeScript化で年収UP</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ※ フリーランス月額平均単価は2025年時点で全体平均が約76万円。Go・Rust・Ruby・Scala・Pythonが平均を上回る高単価ゾーンです。上の年収は提示年収（求人で提示される額）であり、実際の支給額は経験・企業により変動します。
          </p>
        </div>
      </section>

      {/* sec3 高単価な言語と理由 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">高単価な言語とその理由（Go・Rust・TypeScript）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              年収ランキング上位の言語には共通点があります。それは<strong>「新しく単価の高い領域で使われ」「扱えるエンジニアが少ない」</strong>こと。代表的な高単価言語を、なぜ稼げるのかという理由とともに見ていきましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Go（提示年収1位・約723万円）</h3>
              <p className="text-text-light text-sm leading-relaxed">SaaSやスタートアップのマイクロサービス開発の定番。処理速度と並行処理に強く、クラウドネイティブ開発の中心です。3年連続で提示年収1位を維持。求人も増えているのに扱える人が追いつかず、リモート高単価案件が豊富です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Rust（フリーランス単価が連続上昇）</h3>
              <p className="text-text-light text-sm leading-relaxed">AI推論の高速化・WebAssembly・システム基盤の3領域で需要が急増。「Pythonと組み合わせる第二言語」として注目され、フリーランス月額単価が2025年に5カ月連続で上昇。習得難度は高いものの、できる人が極端に少なく希少価値が大きい言語です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>TypeScript（提示年収2位・約714万円）</h3>
              <p className="text-text-light text-sm leading-relaxed">JavaScriptに型を加えた言語で、フロントエンドからNode.jsのバックエンドまで横断的に使えるのが強み。求人数も多く、JavaScript経験者がTypeScript化スキルを身につけるだけで年収が上がりやすい、コスパの良い高単価言語です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Scala・Kotlin（希少性が高い穴場）</h3>
              <p className="text-text-light text-sm leading-relaxed">Scalaは大規模データ処理、KotlinはモダンなサーバーサイドやAndroidで使われます。いずれも提示年収が高く、特にKotlinは「需要が高いのに扱える人が少ない穴場言語」の上位。AI関連スキルを掛け合わせると、業界平均より20〜50%高い年収も狙えます。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong style={{ color: "#7c3a55" }}>ポイント：</strong>高単価言語はいずれも「習得者が全体の1〜3%」と希少です。だからこそ、女性が早めにこうした言語へ軸足を移すと、ライフイベントで一時的にペースを落としても市場価値が下がりにくく、復帰後の年収交渉でも有利になります。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 女性が選ぶべき言語 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が選ぶべき言語の考え方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「一番年収が高いからGoやRustを選ぶ」のは、必ずしも正解ではありません。女性エンジニアが長期的に年収とキャリアを両立させるには、<strong>年収・求人数・学習しやすさ・働き方（リモート可否）</strong>のバランスで言語を選ぶのが現実的です。ライフステージに合わせて軸足を移せる柔軟さも重要です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 求人数と年収の両取りを狙う</h3>
              <p className="text-text-light text-sm leading-relaxed">高単価でも求人が極端に少ない言語だけだと、転職先が限られ条件交渉もしにくくなります。TypeScriptやPythonのように「年収も高く求人も多い」言語を軸にすると、働きやすい会社を選びやすくなります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. リモート求人が多い言語を選ぶ</h3>
              <p className="text-text-light text-sm leading-relaxed">Go・Python・TypeScriptが使われるSaaS・AI領域はフルリモート求人が豊富。育児や介護と両立しながら高年収を維持しやすく、通勤負担も減らせます。働き方は年収と同じくらい大切な選択軸です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 「軸言語＋第二言語」で伸ばす</h3>
              <p className="text-text-light text-sm leading-relaxed">学びやすいPythonやTypeScriptで土台を作り、実務に慣れたらGoやRustを第二言語として足す。一気に高単価言語へ飛ぶより挫折しにくく、ブランク後も復帰しやすい積み上げ方です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. AIスキルを掛け合わせる</h3>
              <p className="text-text-light text-sm leading-relaxed">どの言語でも、AI・LLM/RAGなどのスキルを掛け合わせると年収プレミアムが付きます。AI関連スキルを持つ人は業界平均より20〜50%高い年収を得やすく、Pythonとの相性が特に良好です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 未経験でも年収を狙える言語 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験でも年収を狙える言語</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              未経験から始めるなら、<strong>学習しやすさと年収・将来性のバランス</strong>が良い言語が狙い目です。いきなりGoやRustに挑むより、まず次の言語で実務経験を積み、その後に高単価言語へ広げるルートが堅実です。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>言語</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>学びやすさ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>未経験におすすめの理由</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Python</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>★★★★★</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>文法がシンプルで読みやすい。AI・データ領域で需要が高く、求人も豊富。学んだ先の年収天井が高い</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Ruby</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>★★★★★</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Railsで短期間にWebアプリを作れる。自社開発企業の求人が多く、提示年収・単価ともに高水準</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>TypeScript</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>★★★★☆</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>JavaScriptから入りやすく、フロント〜バック横断で使える。提示年収2位で伸びしろが大きい</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>PHP</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>★★★★☆</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>求人数が多く未経験可の入り口に最適。年収は中位だが実務経験を積みやすく、次の言語への足場になる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong style={{ color: "#7c3a55" }}>未経験の王道ルート：</strong>PythonまたはRubyで基礎＋ポートフォリオ → 求人の多い言語で実務経験を1〜2年 → GoやTypeScript、AIスキルを足して年収アップ。最初の1社に入る入りやすさと、その後の年収の伸びしろの<strong>両方</strong>を意識すると失敗しません。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 言語を変えて年収アップした事例 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">言語を変えて年収アップした女性の事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Aさん（30代前半・PHP→Go）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">受託開発のPHPエンジニア / 年収440万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SaaS企業のGoエンジニア / 年収620万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">PHPで培ったDB設計とAPIの経験を土台に、副業でGoのマイクロサービスに触れて実績を作成。IT特化型エージェント経由で「PHP経験＋Go」として売り込み、年収180万円アップとフルリモートを同時に実現しました。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Bさん（20代後半・JavaScript→TypeScript）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">制作会社のフロントエンド（JavaScript）/ 年収380万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">自社開発企業のフロントエンド（TypeScript/React）/ 年収520万円</p></div>
              </div>
              <p className="text-sm text-text-light">既存のJavaScriptスキルにTypeScriptの型設計を上乗せし、Reactの実務に応用。新言語をゼロから学ぶのではなく、得意分野の延長で高単価化したことで、ブランクのリスクを抑えつつ年収140万円アップを達成しました。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代後半・Java→Python×AI）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SIerの業務システム開発（Java）/ 年収520万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">事業会社のデータ・AI領域（Python）/ 年収680万円・時短可</p></div>
              </div>
              <p className="text-sm text-text-light">Javaの設計力を活かしつつ、育休中にPythonとLLM/RAGの学習を進めて社内案件で実績化。AIスキルの年収プレミアムを取り込み、時短勤務でも年収160万円アップ。ライフイベントを言語転換のチャンスに変えた好例です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 ロードマップ */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">言語別に年収を上げるロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>未経験から、あるいは現職の言語から、年収を伸ばすための現実的なステップです。一気に高単価言語へ飛ぶのではなく、足場を固めながら積み上げます。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "学びやすい軸言語を1つ決める", "Python・Ruby・TypeScriptなど、学習しやすく求人も多い言語を1つ選ぶ。あれこれ手を出さず、まず1言語を深く。"],
              ["STEP2", "ポートフォリオで実務に入る", "CRUDやAPIを備えた小さなWebアプリを公開し、求人の多い言語で1社目に入る。最初の入りやすさを優先する。"],
              ["STEP3", "実務経験を1〜2年積む", "DB設計・API・Gitなど、言語を問わず通用する土台スキルを固める。これが高単価言語への移行を楽にする。"],
              ["STEP4", "高単価の第二言語を足す", "副業・個人開発でGo・TypeScript・Rustなどに触れ、小さくても実績を作る。『現言語＋新言語』の掛け算が市場価値を上げる。"],
              ["STEP5", "AIスキルを掛け合わせる", "PythonでLLM/RAGやデータ活用に触れる。AI関連スキルは業界平均より20〜50%高い年収プレミアムが付きやすい。"],
              ["STEP6", "エージェントで年収交渉", "IT特化型エージェントに市場価値を客観評価してもらい、『経験＋新言語＋AI』として高単価・リモート求人に応募する。"],
            ].map(([step, title, desc], i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
                <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>{step}</span>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>言語を軸にした年収アップ・年収交渉を成功させるには、技術を理解したIT特化型と、働き方を重視する女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。Go・TypeScript・Pythonなど言語ごとの市場価値を理解したアドバイザーが、年収交渉まで踏み込んで提案してくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。高単価言語の案件に詳しく、スピーディーなマッチングと年収交渉力に定評があります。言語を軸にしたキャリアチェンジの相談先に向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。高単価言語の求人を「働き方の条件」で絞り込みたい人に最適です。年収と働きやすさを両立したい女性におすすめ。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">言語を軸にした年収アップは情報戦</p>
            <p className="text-sm text-text-light mb-4">複数登録して、高単価言語の求人と適正年収を見極めましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl border overflow-hidden" style={{ borderColor: "#d9c7b8" }}>
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50" style={{ color: "#7c3a55" }}>
                  <span className="pr-4">{faq.name}</span>
                  <span className="transition-transform group-open:rotate-180">&#9662;</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d9c7b8" }}>
                  <p className="pt-4">{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">言語・スキル別の記事一覧</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <a href="/articles/javascript-career/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>JavaScriptで転職する</p></a>
            <a href="/articles/typescript-react/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>TypeScript・Reactエンジニア転職</p></a>
            <a href="/articles/java-career/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>Javaエンジニア転職</p></a>
            <a href="/articles/ruby-career/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>Rubyエンジニア転職</p></a>
            <a href="/articles/php-career/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>PHPエンジニア転職</p></a>
            <a href="/articles/csharp-career/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>C#エンジニア転職</p></a>
            <a href="/articles/aws-career/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>AWSエンジニア転職</p></a>
            <a href="/articles/cloud-gcp-azure/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>クラウドエンジニア転職（GCP・Azure）</p></a>
            <a href="/articles/sql-database/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>データベースエンジニア（DBA）転職</p></a>
          </div>
        </div>
      </section>


      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法を解説</p></a>
            <a href="/articles/salary-by-job/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>職種別エンジニア年収比較</h3><p className="text-sm text-text-light">職種ごとの年収相場を徹底比較</p></a>
            <a href="/articles/python-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>Pythonエンジニアのキャリア</h3><p className="text-sm text-text-light">需要の高いPythonで広がる道</p></a>
            <a href="/articles/go-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>Goエンジニアのキャリア</h3><p className="text-sm text-text-light">提示年収1位の高単価言語</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">稼げる言語で理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたのスキルに合った高単価言語のキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
