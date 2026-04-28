import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Python×女性エンジニア｜求人動向・年収・学習ロードマップ",
  description:
    "Pythonを活かした女性エンジニアの転職ガイド。求人動向・平均年収・学習ロードマップを詳しく解説。Web開発からデータサイエンスまで、Pythonで広がるキャリアの可能性を紹介します。",
  alternates: { canonical: "/articles/python-career/" },
  openGraph: {
    title: "Python×女性エンジニア｜求人動向・年収・学習ロードマップ",
    description:
      "Pythonを活かした女性エンジニアの転職ガイド。求人動向・平均年収・学習ロードマップを詳しく解説。Web開発からデータサイエンスまで、Pythonで広がるキャリアの可能性を紹介します。",
    url: "https://women-engineer-navi.pages.dev/articles/python-career/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Python×女性エンジニア｜求人動向・年収・学習ロードマップ",
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  description:
    "Pythonを活かした女性エンジニアの転職ガイド。求人動向・平均年収・学習ロードマップを詳しく解説。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/articles/python-career/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Python未経験から転職は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、Python未経験からでも転職は可能です。Pythonは学習しやすい言語として知られており、3〜6ヶ月の学習で基礎スキルを身につけられます。ポートフォリオを作成し、IT特化型の転職エージェントを活用することで、未経験からPythonエンジニアへのキャリアチェンジを実現した女性も多くいます。",
      },
    },
    {
      "@type": "Question",
      name: "Pythonエンジニアの平均年収はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pythonエンジニアの平均年収は約550万〜700万円です。Web開発では500万〜650万円、データサイエンス・機械学習分野では600万〜900万円が相場です。経験3年以上になると年収600万円以上、リードエンジニアやデータサイエンティストでは年収800万〜1,000万円以上も期待できます。",
      },
    },
    {
      "@type": "Question",
      name: "PythonとJavaScript、どちらを先に学ぶべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "目指すキャリアによって異なります。Web開発のフロントエンドを志望するならJavaScript、バックエンド開発やデータ分析・機械学習に興味があるならPythonがおすすめです。Pythonは文法がシンプルで初心者にも学びやすく、応用範囲が広いため、プログラミング初心者の最初の言語としても人気があります。",
      },
    },
    {
      "@type": "Question",
      name: "Pythonの求人でリモートワーク可能な割合はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Python求人のうち、リモートワーク可能な求人は約50〜60%と高い割合です。特にWeb開発やデータ分析の分野ではリモートワークとの相性が良く、フルリモートの求人も増加しています。女性エンジニアにとって、Pythonスキルを持つことはリモートワークの選択肢を広げることにもつながります。",
      },
    },
    {
      "@type": "Question",
      name: "Python学習におすすめのリソースは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "入門段階ではProgate、ドットインストール、Udemyのオンライン講座がおすすめです。基礎を学んだ後は、実際にWebアプリケーションやデータ分析プロジェクトを作って実践力を養いましょう。Django・Flask（Web開発）やpandas・scikit-learn（データ分析）など、目指す分野のフレームワークを学ぶのも重要です。",
      },
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer-navi.pages.dev" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer-navi.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "Python×女性エンジニア", item: "https://women-engineer-navi.pages.dev/articles/python-career/" },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "Python×女性エンジニア" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#0891b2" }}>スキル・言語ガイド</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Python×女性エンジニア
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">求人動向・年収・学習ロードマップ</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月28日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. Pythonエンジニアの求人動向</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. Python×女性エンジニアの年収データ</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. Pythonで活躍できる職種</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. Python学習ロードマップ</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. Web開発分野のキャリアパス</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. データサイエンス分野のキャリアパス</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. Python転職で有利な資格・スキル</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. 女性Pythonエンジニアの転職成功事例</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. おすすめ転職エージェント</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Pythonエンジニアの求人動向</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              2026年現在、Pythonは最も需要の高いプログラミング言語の一つです。Web開発、データサイエンス、機械学習、自動化、API開発など、幅広い分野で活用されており、Python関連の求人は年々増加しています。特にAI・機械学習ブームの影響で、データ分析やMLエンジニアリングの求人が急増しています。
            </p>
            <p>
              女性エンジニアにとってPythonは特に魅力的な選択肢です。Pythonを使う企業はWeb系やスタートアップが多く、リモートワークやフレックスタイム制を導入している企業が多い傾向にあります。また、Pythonの文法はシンプルで読みやすいため、他言語からの転向やプログラミング初学者にも学びやすいのが特徴です。
            </p>
            <p>
              求人市場を見ると、Python求人は大きく3つのカテゴリーに分けられます。Web開発（Django・Flask・FastAPI）、データサイエンス・機械学習（pandas・scikit-learn・TensorFlow・PyTorch）、そしてインフラ・DevOps（自動化スクリプト・AWS Lambda）です。それぞれの分野で求められるスキルセットは異なりますが、Pythonの基礎スキルはすべての分野で共通して求められます。
            </p>
            <p>
              企業規模別に見ると、スタートアップやメガベンチャーではPythonを主要言語として使うケースが多く、大手企業ではデータ分析やAI・機械学習のプロジェクトでPythonが採用されるケースが増えています。どちらの環境でも女性エンジニアの活躍の場は広がっています。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Python×女性エンジニアの年収データ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Pythonエンジニアの年収は、他の言語と比較しても高水準です。経験年数別の平均年収を見ると、経験1〜2年で400万〜500万円、経験3〜5年で550万〜700万円、経験5年以上で700万〜1,000万円が目安となります。
            </p>
            <p>
              特にデータサイエンスや機械学習の分野では、高い年収が期待できます。データサイエンティストの平均年収は600万〜900万円、MLエンジニアでは700万〜1,200万円の求人も珍しくありません。Web開発分野でも、Django/FlaskのバックエンドエンジニアとしてPythonを使う場合、年収500万〜800万円が相場です。
            </p>
            <p>
              女性Pythonエンジニアの年収は、男性と比べてまだ差があるのが現状ですが、転職エージェントを活用した適正な年収交渉や、スキルアップによるキャリアアップで、この差は縮まりつつあります。特にIT特化型エージェントでは、技術力を正当に評価した年収提示が行われるため、性別に関係なく実力に見合った待遇を得やすいです。
            </p>
            <p>
              年収アップを目指すなら、Web開発スキルに加えてデータ分析・機械学習のスキルを身につけるのが効果的です。Pythonのフルスタックエンジニア（Web+データ分析）は市場価値が高く、年収800万円以上のオファーを受けるケースも増えています。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>分野</th>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>年収レンジ</th>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>リモート率</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>Web開発（Django/Flask）</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>500万〜800万円</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>約60%</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>データサイエンス</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>600万〜900万円</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>約55%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>機械学習エンジニア</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>700万〜1,200万円</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>約50%</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>自動化・DevOps</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>550万〜800万円</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>約45%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* sec3 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Pythonで活躍できる職種</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Pythonスキルを活かせる職種は多岐にわたります。バックエンドエンジニアとしてDjango・Flask・FastAPIを使ったWebアプリケーション開発、データサイエンティストとしてpandas・NumPyを使ったデータ分析、MLエンジニアとしてTensorFlow・PyTorchを使った機械学習モデルの開発など、キャリアの選択肢は非常に広いです。
            </p>
            <p>
              女性エンジニアに人気の職種としては、データアナリストやデータサイエンティストが挙げられます。分析思考力やコミュニケーション能力が求められる職種で、ビジネスサイドとの橋渡し役として活躍する女性が多いです。リモートワークとの相性も良く、育児と両立しながら高い年収を得られるのも魅力です。
            </p>
            <p>
              Web開発分野では、バックエンドエンジニアとしてDjangoやFastAPIを使った開発が主流です。フロントエンドのReact/TypeScriptと組み合わせたフルスタック開発ができると、市場価値がさらに高まります。SaaS企業やスタートアップでは、Pythonバックエンド+Reactフロントエンドの構成が多く、この組み合わせのスキルがあると求人の選択肢が広がります。
            </p>
            <p>
              DevOps・SREの分野でも、Pythonは自動化スクリプトやインフラ管理ツールの開発に使われています。AWS LambdaやTerraformとの組み合わせでクラウドインフラの自動化を行うスキルは需要が高く、インフラに興味のある女性エンジニアにもおすすめの分野です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>Web開発系の職種</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・バックエンドエンジニア（Django/Flask/FastAPI）</li>
                <li>・フルスタックエンジニア（Python+React）</li>
                <li>・API開発エンジニア</li>
                <li>・テックリード・アーキテクト</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>データ・AI系の職種</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・データサイエンティスト</li>
                <li>・データアナリスト</li>
                <li>・機械学習エンジニア</li>
                <li>・MLOpsエンジニア</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Python学習ロードマップ</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>STEP 1：Python基礎（1〜2ヶ月）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                変数、データ型、条件分岐、ループ、関数、クラスなどの基本文法を学びます。Progateやドットインストールでの入門学習がおすすめです。並行して、pip（パッケージ管理）やvenv（仮想環境）の使い方も覚えましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>STEP 2：専門分野の選択と学習（2〜3ヶ月）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                Web開発ならDjango/Flask/FastAPI、データ分析ならpandas/NumPy/Matplotlib、機械学習ならscikit-learn/TensorFlowを学びます。Udemyの実践講座や書籍を活用して、フレームワークの基礎を身につけましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>STEP 3：ポートフォリオ作成（1〜2ヶ月）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                学んだスキルを活かして、実際のプロジェクトを作成します。WebアプリケーションやデータダッシュボードなどをGitHubで公開しましょう。転職の際にアピールポイントとなるため、README.mdも丁寧に書くことが重要です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>STEP 4：転職活動開始（1〜3ヶ月）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                IT特化型の転職エージェント（レバテックキャリア、Geekly等）に登録し、Python求人を紹介してもらいます。ポートフォリオとGitHubアカウントをアピール材料にして、技術面接の準備も進めましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Web開発分野のキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              PythonでのWeb開発キャリアは、バックエンドエンジニアからスタートするのが一般的です。Django、Flask、FastAPIなどのフレームワークを使ったAPI開発やWebアプリケーション開発が主な業務になります。
            </p>
            <p>
              キャリアアップの道筋としては、バックエンドエンジニアからシニアエンジニア、リードエンジニア、テックリードへとステップアップしていくパターンが一般的です。マネジメントに進む場合は、テックリードからエンジニアリングマネージャー、CTOへの道もあります。
            </p>
            <p>
              女性エンジニアの場合、技術力を維持しながらマネジメントにも携わるプレイングマネージャーとして活躍するケースが増えています。Python×Web開発のスキルに加え、チームマネジメントやプロジェクト管理のスキルを身につけることで、市場価値をさらに高めることができます。
            </p>
            <p>
              フリーランスとして独立する道もあります。PythonのWebバックエンド開発は、フリーランス案件でも需要が高く、月単価60万〜100万円の案件も珍しくありません。リモートワーク可能な案件も多いため、ライフスタイルに合わせた柔軟な働き方が可能です。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データサイエンス分野のキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              データサイエンスは、Pythonスキルを活かして高年収を目指せる有望な分野です。データアナリストからスタートし、データサイエンティスト、シニアデータサイエンティスト、チーフデータオフィサー（CDO）へとキャリアアップしていくパターンが一般的です。
            </p>
            <p>
              データサイエンティストに必要なスキルは、Pythonのプログラミング力に加え、統計学の知識、SQLによるデータ抽出、BIツールを使ったデータ可視化などが求められます。ビジネス課題をデータで解決するコミュニケーション力も重要で、技術とビジネスの橋渡しができる人材は特に重宝されます。
            </p>
            <p>
              機械学習エンジニアとしてのキャリアパスもあります。TensorFlowやPyTorchを使ったモデル開発、MLOps（機械学習モデルの運用基盤構築）など、より技術的な専門性を追求する道です。この分野は需要に対して人材が不足しており、高い年収が期待できます。
            </p>
            <p>
              女性データサイエンティストは増加傾向にあり、多くの企業がダイバーシティの観点から女性の採用に積極的です。分析スキルとコミュニケーション力を兼ね備えた女性データサイエンティストは、企業にとって非常に貴重な存在です。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Python転職で有利な資格・スキル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Python転職を有利に進めるための資格やスキルをご紹介します。まず、Python関連の資格としてはPython3エンジニア認定基礎試験、Python3エンジニア認定データ分析試験があります。基礎的な知識を証明する資格で、未経験からの転職時に役立ちます。
            </p>
            <p>
              データサイエンス分野を目指す場合は、統計検定2級やG検定（ジェネラリスト検定）が有効です。AWS認定機械学習やGoogle Cloud Professional Machine Learning Engineerなど、クラウドベンダーの資格も市場価値を高めます。
            </p>
            <p>
              資格以上に重要なのは、実務で使えるスキルとポートフォリオです。GitHubでのコード公開、技術ブログの執筆、Kaggleコンペティションへの参加など、自分のスキルを外部に示す活動が転職時の評価を大きく左右します。
            </p>
            <p>
              Python以外の周辺スキルとしては、SQL、Git、Docker、AWS/GCPなどのクラウドサービス、CI/CDの知識があると転職時に有利です。特にDockerとAWSの基礎スキルは、多くのPython求人で求められています。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>転職で評価されるスキルセット</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span>Python+Webフレームワーク（Django/Flask/FastAPI）</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span>SQL+データベース設計（PostgreSQL/MySQL）</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span>Git/GitHub+CI/CD（GitHub Actions等）</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span>Docker+コンテナ技術</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span>AWS/GCP基礎（EC2, S3, Lambda等）</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec8 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性Pythonエンジニアの転職成功事例</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>Aさん / 28歳 / 事務職からPythonエンジニアへ</p>
              <p className="text-sm text-text-light leading-relaxed">
                「Excelでのデータ集計がきっかけでPythonに興味を持ちました。6ヶ月間の独学でDjangoを使ったWebアプリを作り、ポートフォリオとして提出。IT特化型エージェントのサポートで、SaaS企業のバックエンドエンジニアに転職できました。年収は事務職時代の350万円から500万円にアップしました。」
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#7c3aed" }}>Bさん / 33歳 / SES企業からデータサイエンティストへ</p>
              <p className="text-sm text-text-light leading-relaxed">
                「SES企業でJavaの開発をしていましたが、データ分析に興味があり、独学でPython+pandas+scikit-learnを学習。Kaggleにも参加してポートフォリオを充実させました。レバテックキャリア経由で、大手EC企業のデータサイエンティストに転職。年収は450万円から700万円に大幅アップしました。」
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>Cさん / 30歳 / PHPエンジニアからPythonエンジニアへ</p>
              <p className="text-sm text-text-light leading-relaxed">
                「PHPからPythonへのスキルチェンジを考え、FastAPIでのAPI開発スキルを習得。育児と両立するためにリモートワーク可能な企業を条件に転職活動を行いました。Geekly経由でフルリモートのFinTech企業に転職し、年収520万円から650万円にアップ。育児との両立も実現できています。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec9 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Python求人を探すなら、IT特化型の転職エージェントがおすすめです。技術に詳しいアドバイザーがPythonのスキルを正しく評価し、最適な求人を紹介してくれます。
            </p>
            <p>
              レバテックキャリアは、エンジニア転職に特化したエージェントでPython求人も豊富です。技術面での深いヒアリングが特徴で、Pythonのどのフレームワークが使えるか、データ分析の経験はあるかなど、詳細なスキルマッチングを行ってくれます。
            </p>
            <p>
              GeeklyもIT・Web業界に強いエージェントで、Python+Web開発やデータサイエンスの求人を多数保有しています。企業とのマッチング精度が高く、入社後のミスマッチが少ないと評判です。
            </p>
            <p>
              女性特化型のtype女性の転職エージェントでは、女性が働きやすい環境のPython求人を紹介してもらえます。IT特化型と女性特化型のエージェントを併用することで、技術面と環境面の両方のニーズを満たす企業を見つけやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl border overflow-hidden" style={{ borderColor: "#d1dce5" }}>
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50" style={{ color: "#0891b2" }}>
                  <span className="pr-4">{faq.name}</span>
                  <span className="transition-transform group-open:rotate-180">&#9662;</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                  <p className="pt-4">{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/javascript-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>JavaScript×女性エンジニア</h3>
              <p className="text-sm text-text-light">フロントエンド転職の始め方</p>
            </a>
            <a href="/articles/ai-ml-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>AI・機械学習×女性エンジニア</h3>
              <p className="text-sm text-text-light">データサイエンス転職ガイド</p>
            </a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの年収ガイド</h3>
              <p className="text-sm text-text-light">平均年収と年収アップの方法</p>
            </a>
            <a href="/articles/portfolio/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>ポートフォリオ作成ガイド</h3>
              <p className="text-sm text-text-light">転職で差をつける方法</p>
            </a>
          </div>
        </div>
      </section>

      
      {/* 補足情報 1 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#0891b2" }}
            >
              押さえておくべきポイント
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  最新の市場動向を把握し、自分のスキルとの適合度を確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  複数の転職エージェントを活用して求人情報を幅広く収集する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  女性ならではの視点で企業の働きやすさを事前に確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  産休育休制度の取得実績やリモートワークの運用実態をチェックする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  長期的なキャリアプランを見据えた判断をする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  先輩女性エンジニアの体験談やロールモデルから学ぶ
                </span>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0891b2" }}
              >
                メリット
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                IT業界は技術力で評価される実力主義の傾向が強く、性別に関係なくスキルに応じた公正な待遇を受けやすい環境です。転職エージェントを活用することで、自分の市場価値を客観的に把握し、最適な条件での転職を実現できます。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#7c3aed" }}
              >
                注意点
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度の充実度やリモートワークの可否、女性管理職の比率なども含めて総合的に評価しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
