import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Webデザイナーから女性エンジニアへ｜年収差・キャリアチェンジの現実的ルート【2026年】",
  description:
    "Webデザイナーからエンジニアへのキャリアチェンジを実データで解説。平均年収はWebデザイナー約423万円に対しフロントエンドエンジニア約446万円（求人ボックス）。AI時代に価値が上がる「デザインもコードも分かる人材」への現実的ルート、学習ロードマップ、活かせる強みを紹介します。",
  alternates: { canonical: "/articles/web-designer/" },
  openGraph: {
    title: "Webデザイナーから女性エンジニアへ｜年収差・キャリアチェンジの現実的ルート【2026年】",
    description:
      "Webデザイナーとエンジニアの年収差、AIによるデザイナー職の変化、デザイン経験が強みになる領域、学習ロードマップを実データ・出典付きで解説。",
    url: "https://women-engineer.com/articles/web-designer/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Webデザイナーから女性エンジニアへ｜年収差・キャリアチェンジの現実的ルート【2026年】",
  datePublished: "2026-04-27",
  dateModified: "2026-07-09",
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
    "Webデザイナーとエンジニアの年収差、AIによるデザイナー職の変化、デザイン経験が強みになる領域、学習ロードマップを実データ・出典付きで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/web-designer/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Webデザイナーとフロントエンドエンジニアの年収差はどれくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "求人ボックス 給料ナビ（2026年6月参照）によると、Webデザイナーの平均年収は約423万円、フロントエンドエンジニアは約446万円です。平均の差は20万円強ですが、年収レンジに大きな違いがあります。Webデザイナーの給料分布はおよそ309万〜834万円でボリュームゾーンは375万〜440万円、フロントエンドは336万〜971万円とスキル次第で上限が大きく伸びます。dodaの調査ではWebデザイナーの平均は378万円で年収400万円未満が約6割を占めており、エンジニアスキルを足すことが年収の頭打ちを破る現実的な手段になっています。",
      },
    },
    {
      "@type": "Question",
      name: "Webデザイナーの経験はエンジニア転職で評価されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "評価されます。特にUI実装の品質（余白・タイポグラフィ・色のセンスをコードで再現できる力）、Figmaのデザインデータを正確に読み解いてコンポーネント化する力、デザインシステムの構築・運用への理解は、デザイナー出身者ならではの強みです。デザイナーとエンジニアの橋渡しができる「デザインエンジニアリング」領域は国内でも注目が高まっており、両方の言葉が分かる人材はチーム開発で重宝されます。職務経歴書では「デザインだけ」ではなく「実装を意識したデザイン経験」として整理すると効果的です。",
      },
    },
    {
      "@type": "Question",
      name: "WebデザイナーはAIに仕事を奪われますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「なくなる」のではなく「中身が変わる」というのが現場の見方です。Figmaはプロンプトからコードを生成するFigma MakeなどAI機能を本格導入しており、Figma Japanのカントリーマネージャーは「制作の最初の70%はAIで速く進むが、残りの30%が非常に難しく、人間のセンスと細部へのこだわりが必要」と述べています（出典: ギズモード・ジャパン 2026年3月）。単純なバナー制作や量産コーディングはAIに置き換わりやすい一方、AIの出力を評価する審美眼と、それを製品品質に仕上げる実装力を併せ持つ人材の価値はむしろ上がっています。",
      },
    },
    {
      "@type": "Question",
      name: "コーディングがほぼ未経験でもエンジニアにキャリアチェンジできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。Webデザイナーであれば、HTML/CSSの基礎やWebの仕組みに触れた経験がある分、完全未経験よりスタートが有利です。学習順序はHTML/CSSの再整理 → JavaScriptの基礎 → React/TypeScript → 自分のデザインを自分で実装したポートフォリオ、が王道です。1日2〜3時間の学習で半年〜1年が目安。自作デザインを自分でコーディングした制作物は「デザインも実装もできる」ことの何よりの証明になり、選考で強く評価されます。",
      },
    },
    {
      "@type": "Question",
      name: "UXデザイナーとフロントエンドエンジニア、どちらを目指すべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「なぜ使いやすいかを設計したい」ならUXデザイナー、「手を動かして画面を作り込みたい」ならフロントエンドエンジニアが向いています。年収面では、求人ボックスの平均はUXデザイナー約404万円・フロントエンド約446万円ですが、UXは上流職（UXリサーチャー等）で538万〜631万円、フロントエンドはスキル次第で900万円超と、どちらも伸びしろがあります。コードを書く時間を増やしたいか減らしたいかが分かれ目です。UXデザイナーの詳細は当サイトのUXデザイナー転職ガイドで解説しています。",
      },
    },
    {
      "@type": "Question",
      name: "Webデザイナーは子育てと両立しやすい仕事ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "制作業務は在宅で完結しやすく、時短・フリーランス・副業など柔軟な働き方を選びやすい職種である一方、納期前の集中やクライアント都合の修正対応が突発的に発生しやすい面もあります。両立のしやすさは「事業会社のインハウスか受託制作か」「スケジュールの裁量がどれだけあるか」で大きく変わるのが実態です。長期的には、年収レンジの広いエンジニア側へスキルを広げておくと、成果物で評価されやすくなり、時短勤務やリモート勤務を含めた働き方の選択肢が増えます。",
      },
    },
    {
      "@type": "Question",
      name: "女性のWebデザイナーは多いですか？エンジニアへ転身する人は実際にいますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Webデザイナーは一般に、IT系職種の中でも女性の割合が高い傾向があるとされる職種です。ただし職種別の公的な女性比率統計は少ないため、関連する統計データは当サイトの「女性エンジニアのデータ集」で出典付きで整理しています。デザイナーからフロントエンドエンジニアへの転身は確立されたルートの一つで、HTML/CSSやFigmaの経験を土台にJavaScript・React・TypeScriptを積み上げる学習パスが定番です。デザインと実装の両方が分かる人材への需要は高まっており、キャリアチェンジ先としての現実性は十分あります。",
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
              { label: "Webデザイナーからエンジニアへ" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              職種別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Webデザイナーから女性エンジニアへ
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収差・キャリアチェンジの現実的ルート【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月9日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}
          >
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>
              この記事の結論
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>
                  平均年収はWebデザイナー<strong>約423万円</strong>に対しフロントエンドエンジニア<strong>約446万円</strong>。平均差以上に重要なのは年収レンジで、フロントエンドは<strong>971万円</strong>まで伸びる（求人ボックス）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>
                  AIの普及で「作るだけ」のデザイン業務は縮小傾向。一方で<strong>デザインもコードも分かる人材</strong>（デザインエンジニアリング領域）の価値は上昇中
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>
                  デザイナー経験は<strong>UI実装・デザインシステム</strong>でそのまま強みになる。HTML/CSS経験がある分、完全未経験より有利で、学習期間の目安は<strong>半年〜1年</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>
                  「使いやすさの設計」に軸足を移したい人はUXデザイナーという選択肢も。詳しくは
                  <a href="/articles/ux-designer/" className="underline font-bold" style={{ color: "#7c3a55" }}>UXデザイナー転職ガイド</a>
                  へ
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. Webデザイナーという職の現在地（年収・働き方の実態）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 年収比較：Webデザイナー vs フロントエンド vs UX系職種</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. AIはデザイナーの仕事をどう変えているか</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. デザイナー経験が強みになるエンジニア領域</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. キャリアチェンジの学習ロードマップ</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. キャリアチェンジ後のキャリアパス</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 転職活動のポイント（女性のキャリア視点）</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec-women" className="hover:underline" style={{ color: "#7c3a55" }}>9. 女性がWebデザイナーとして働くリアル</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 現在地 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Webデザイナーという職の現在地（年収・働き方の実態）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Webデザイナーは、Webサイトやサービスの見た目――レイアウト・配色・タイポグラフィ・バナーやLPのビジュアル――を設計・制作する職種です。女性比率が高くクリエイティブ職の入口として人気がある一方、年収データを見ると「頭打ち」の構造がはっきり表れています。
            </p>
            <p>
              求人ボックス 給料ナビによると、Webデザイナーの平均年収は<strong>約423万円</strong>（東京都では約460万円、最も低い地域では342万円）。給料分布はおよそ309万〜834万円ですが、ボリュームゾーンは<strong>375万〜440万円</strong>に集中しています。さらにdodaの調査では平均<strong>378万円</strong>で、<strong>年収400万円未満が全体の約6割</strong>を占めるとされています。「経験を積んでも単価が上がりにくい」のがWebデザイナー職の構造的な課題です。
            </p>
            <p className="text-sm">
              出典: 求人ボックス 給料ナビ「Webデザイナーの仕事の年収・時給」（2026年6月参照）／doda「Webデザイナーの平均年収」（2026年6月参照）
            </p>
            <p>
              この頭打ちを破るルートは大きく2つあります。1つはアートディレクターやWebディレクターなど<strong>ディレクション側に上がる道</strong>。もう1つが、この記事のテーマである<strong>エンジニア側へ軸足を移す道</strong>です。デザイン制作で培った感覚はUI実装でそのまま活き、エンジニアとしての年収レンジ（後述）に乗り換えられます。また「見た目」より「使いやすさの設計」に関心がある人には<a href="/articles/ux-designer/" className="underline" style={{ color: "#7c3a55" }}>UXデザイナーへの転身</a>という第3の道もあります。本記事はエンジニアルートを中心に解説します。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>Webデザイナー年収の実態（要点）</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>平均年収 約423万円・ボリュームゾーン375万〜440万円（求人ボックス）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>doda調査では平均378万円、年収400万円未満が約6割</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>東京都460万円 vs 地方最低342万円と地域差が大きい（求人ボックス）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>年収を上げる主ルートは「ディレクション側」か「エンジニア側」への展開</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 年収比較 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収比較：Webデザイナー vs フロントエンド vs UX系職種</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              同じ「Webの画面を作る」仕事でも、デザイン側とエンジニア側では年収構造が異なります。平均値の差は20万円強ですが、注目すべきは<strong>上限の伸び方</strong>です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>職種</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均年収</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年収レンジ・備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Webデザイナー</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約423万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>分布309万〜834万円。ボリュームゾーン375万〜440万円。東京都460万円</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フロントエンドエンジニア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約446万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>分布336万〜971万円。東京都474万円。在宅ワーク条件の求人は全体比+20%程度</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>UXデザイナー</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約404万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>UXリサーチャーなど上流・専門職は538万〜631万円</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>UI/UXデザイナー（参考: Indeed調査）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>648万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>事業会社の専門職中心の集計（2025年10月時点）。実装を含む上位層は高水準</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            出典: 求人ボックス 給料ナビ（2026年6月参照）／ContactEARTH for Expert「UI/UXデザイナーの平均年収」内Indeed調査（2026年6月参照）
          </p>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>この表の読み方</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① Webデザイナーは<strong>分布の中心が400万円前後に固定</strong>されやすい。一方フロントエンドは<strong>900万円台までレンジが伸びる</strong></li>
              <li>② フロントエンドは<strong>在宅ワーク条件の求人が全体比+20%程度</strong>と、リモートと年収を両立しやすい（求人ボックス）</li>
              <li>③ デザイン経験×実装力を併せ持つUI/UX上位層・デザインエンジニア層は、専門職として高い水準に到達しうる</li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-4">
            エンジニア職種全体の年収比較は<a href="/articles/salary-by-job/" className="underline" style={{ color: "#7c3a55" }}>職種別年収ガイド</a>で詳しく解説しています。
          </p>
        </div>
      </section>

      {/* sec3 AIの影響 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">AIはデザイナーの仕事をどう変えているか</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              キャリアチェンジを考えるうえで避けて通れないのがAIの影響です。デザインツールの標準であるFigmaは、プロンプトからUIやコードを生成する<strong>Figma Make</strong>、画像をベクターデータ化する<strong>Figma Draw</strong>、AIエージェントと連携する<strong>Figma MCP Server</strong>などAI機能を本格導入しました。Figma Japanのカントリーマネージャーは「制作の<strong>最初の70%はAIで速く進む</strong>ようになるが、<strong>残りの30%が非常に難しい</strong>。そこに人間が文脈を与え、細部までこだわる必要がある」と述べ、「仕事がなくなるのではなく、仕事の中身が変わる」という見方を示しています。
            </p>
            <p className="text-sm">
              出典: ギズモード・ジャパン「FigmaがAI機能を本格導入。デザイナーの仕事は減るの？」2026年3月13日（2026年6月参照）
            </p>
            <p>
              この変化は、Webデザイナーのキャリアに2つの意味を持ちます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>縮小する仕事</h3>
              <p className="text-text-light text-sm leading-relaxed">
                バナーの量産、テンプレート的なLP制作、デザインカンプの単純コーディング。AIが「最初の70%」を担う領域で、発注者自身がAIツールで試作できるようになり、単価と件数の両方に下押し圧力がかかっています。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>価値が上がる仕事</h3>
              <p className="text-text-light text-sm leading-relaxed">
                AIの出力を評価・選別する<strong>審美眼</strong>と、それを製品品質に仕上げる<strong>実装力</strong>。AI生成のUIは似通いやすく差別化が難しいため、「なぜこのデザインか」を判断し、コードで細部を作り込める人材の需要はむしろ高まっています。
              </p>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              つまりAI時代の安全地帯は「デザインだけ」でも「コードだけ」でもなく、<strong>両方を行き来できる人材</strong>です。国内でも、デザインとエンジニアリングの交差領域で問題解決を行う「デザインエンジニアリング」という業務領域への注目が高まっており、プロトタイピングの高速化やデザイナー・エンジニア間の協働を担う専門人材のポジションが生まれています。Webデザイナーからエンジニアへのキャリアチェンジは、この潮流に最も乗りやすいルートです。
            </p>
            <p className="text-sm">
              出典: ROUTE06「デザインエンジニアリングへの注目の高まり」（2026年6月参照）
            </p>
          </div>
        </div>
      </section>

      {/* sec4 強みになる領域 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">デザイナー経験が強みになるエンジニア領域</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              キャリアチェンジというと「ゼロからやり直し」を想像しがちですが、Webデザイナーの経験は次の領域でそのまま強みになります。完全未経験者には真似できない差別化ポイントです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. UI実装の品質</h3>
              <p className="text-text-light text-sm leading-relaxed">
                余白・行間・タイポグラフィ・色のコントラストといった「デザインの解像度」を持ったままコードを書けるのは大きな武器。デザインカンプの意図を汲んだピクセル単位の再現や、レスポンシブ時の崩れへの感度は、デザイナー出身エンジニアが最も評価される点です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. デザインシステムの構築・運用</h3>
              <p className="text-text-light text-sm leading-relaxed">
                色・余白・コンポーネントをルール化するデザインシステムは、デザインとコードの両方の理解が必須の領域。Figmaのコンポーネント設計経験は、Reactのコンポーネント設計とそのまま対応します。デザイントークンの整備やStorybookでのUIカタログ運用は、デザイナー出身者の独壇場です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. デザイナーとエンジニアの橋渡し</h3>
              <p className="text-text-light text-sm leading-relaxed">
                「この表現は実装コストが高い」「ここはCSSで再現できる」という翻訳ができる人は、チーム開発の摩擦を減らす存在として重宝されます。Figmaのデザインデータを正確に読み解ける（オートレイアウト・コンポーネントの構造が分かる）ことは、フロントエンド実務で毎日活きるスキルです。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. AI活用の目利き</h3>
              <p className="text-text-light text-sm leading-relaxed">
                AIにUIやコードを生成させる開発が一般化するほど、「出てきたものの良し悪しを判断する目」が問われます。デザインの審美眼を持つエンジニアは、AI生成UIの違和感を見抜き、製品レベルに引き上げられる稀少な人材です。
              </p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6">
            主戦場となるフロントエンドエンジニアの仕事内容・年収・将来性は<a href="/articles/frontend/" className="underline" style={{ color: "#7c3a55" }}>フロントエンドエンジニア転職ガイド</a>で詳しく解説しています。
          </p>
        </div>
      </section>

      {/* sec5 ロードマップ */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">キャリアチェンジの学習ロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              Webデザイナーは「HTMLとCSSに触れたことがある」「Webの仕組みを肌感覚で知っている」分、完全未経験よりスタート地点が前にあります。1日2〜3時間の学習で<strong>半年〜1年</strong>が目安です。プログラミング学習全般の進め方は<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験からエンジニアになる完全ガイド</a>も参考にしてください。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "HTML/CSSを「実装者の視点」で再整理する", "デザイナーとして触れてきたHTML/CSSを、Flexbox・Grid・レスポンシブ設計まで体系的に学び直します。自分の過去デザインを1枚、完全に自力でコーディングしてみるのが最良の練習です。"],
              ["STEP2", "JavaScriptの基礎を固める", "変数・関数・配列・DOM操作・イベント処理まで。デザインに動きを付ける（モーダル、タブ、スクロール連動）題材だと、デザイナー出身者はモチベーションを保ちやすいです。"],
              ["STEP3", "ReactとTypeScriptを習得する", "現在のフロントエンド求人の中心。Figmaのコンポーネント概念がそのままReactコンポーネントに対応するため、デザイナー出身者は概念理解が速い傾向があります。学習手順はTypeScript×React学習ガイドを参照。"],
              ["STEP4", "Git・デザイン連携ツールに慣れる", "GitHubでのコード管理は必須。加えてFigmaのDev Mode、Storybookなど「デザインとコードをつなぐツール」を押さえると、デザイナー出身の強みが際立ちます。"],
              ["STEP5", "「自分でデザインして自分で実装した」ポートフォリオを作る", "デザインカンプ（Figma）と実装（公開URL＋GitHub）をセットで提示できるのは、デザイナー出身者だけの武器。架空サービスのLPやWebアプリを1〜2本、細部まで作り込みます。"],
              ["STEP6", "実務に近い経験を積んで転職活動へ", "現職でコーディングを巻き取る、副業で小さな実装案件を受けるなど、実務接点を作ってから転職活動へ。「デザイナー」ではなく「UI実装に強いエンジニア」として職務経歴書を再構成します。"],
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
          <p className="text-text-light leading-relaxed mt-6">
            STEP3のReact/TypeScriptは求人数・年収の両面で投資効果が最も高い領域です。具体的な学習手順は<a href="/articles/typescript-react/" className="underline" style={{ color: "#7c3a55" }}>TypeScript×Reactエンジニアへの道</a>で解説しています。
          </p>
        </div>
      </section>

      {/* sec6 キャリアパス */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">キャリアチェンジ後のキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              デザイン×実装のハイブリッドキャリアは、転身後の選択肢が広いのが魅力です。代表的な進路は次の4つです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>フロントエンドを極める</h3>
              <p className="text-sm text-text-light">React/TypeScriptを深め、シニアフロントエンド→テックリードへ。フロントエンドの年収分布は971万円まで伸び、在宅条件の求人も多い領域です（求人ボックス、2026年6月参照）。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>デザインエンジニア／UXエンジニア</h3>
              <p className="text-sm text-text-light">デザインシステム構築・プロトタイピング・デザインとコードの橋渡しを専門に。両領域を行き来できる人材は希少で、事業会社の専門職として高く評価される潮流があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>UX・上流設計へ</h3>
              <p className="text-sm text-text-light">実装が分かるUXデザイナー・UXリサーチャーへ。UX上流職は538万〜631万円水準で、実装知識は要件の実現可能性を判断できる強みになります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>フリーランス・副業</h3>
              <p className="text-sm text-text-light">「デザインから実装まで一気通貫」で受けられる人は単価交渉力が高く、案件の幅も広い。リモート中心の働き方を組み立てやすく、ライフイベントとの両立にも向きます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 転職活動のポイント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職活動のポイント（女性のキャリア視点）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              デザイナーからエンジニアへの転身では、選考の見られ方が変わります。次の3点を押さえると成功率が上がります。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>「実装できるデザイナー」ではなく「デザインが分かるエンジニア」として売り込む。</strong>職務経歴書の主語をデザイン実績からUI実装・コーディング実績に置き換え、ポートフォリオは公開URL＋GitHubで提示します。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>ポテンシャル採用の門が開いている自社開発・SaaS企業を狙う。</strong>デザインシステムを持つ企業ほどデザイナー出身エンジニアの価値を理解しており、ミスマッチが起きにくい傾向があります。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>長く働ける環境かを必ず確認する。</strong>産休育休の取得・復帰実績、リモートワークの運用実態、時短勤務の可否は求人票だけでは分かりません。女性のキャリアに詳しいエージェント経由で内情を確認するのが確実です。</span>
                </li>
              </ul>
            </div>
            <p>
              なお、IT人材は構造的な不足が続くと見込まれており（経済産業省「IT人材需給に関する調査」では2030年に最大約79万人の不足を試算。2026年6月参照）、学習を経てエンジニア側に立つこと自体が、長期のキャリア安定につながります。
            </p>
          </div>
        </div>
      </section>

      {/* sec8 おすすめ転職エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績が光ります。スピーディーなマッチングで、最短2週間での内定実績も。年収交渉力にも定評があります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                  女性特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介してくれるため、長期的なキャリア形成に最適。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT業界の転職支援に強み。未経験からベテランまで幅広い層の求人を保有しています。レスポンスの速さと手厚いサポートに定評があり、特に若手エンジニアの転職支援実績が豊富です。
              </p>
            </div>
          </div>
          <div
            className="mt-8 rounded-xl p-6 text-center"
            style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}
          >
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">
              複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#c15f47" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>

      {/* 女性が働くリアル */}
      <section id="sec-women" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がWebデザイナーとして働くリアル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              エンジニアへの転身ルートを解説してきましたが、ここで一度、「女性がWebデザイナーという職種で働き続けるとどうなのか」を、良い面も注意点も含めて整理します。今の職種の構造を正しく理解しておくことが、キャリアチェンジするかどうかの判断材料になるからです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 職種との相性: 始めやすいが、競争も激しい</h3>
              <p className="text-text-light text-sm leading-relaxed">スクールや独学教材など学習環境が豊富で未経験から始めやすく、在宅・副業案件も見つけやすい傾向のある人気職種です。ただし参入しやすさの裏返しとして担い手が多く、単価競争が起きやすい構造があります。本文で見たとおり年収のボリュームゾーンが400万円前後に固定されやすいのは、この構造によるものです。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 産休育休・時短との相性</h3>
              <p className="text-text-light text-sm leading-relaxed">制作業務は在宅で完結しやすく、時短・フリーランス・副業と組み合わせて稼働を調整しやすいのは大きな利点です。一方で、納期前の集中やクライアント都合の急な修正対応が発生しやすく、スケジュールの裁量が小さい受託制作の現場では両立の負荷が高くなることもあります。一般に、事業会社のインハウスデザイナーの方が時間をコントロールしやすい傾向があります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. キャリアパス: 3方向に広げられる</h3>
              <p className="text-text-light text-sm leading-relaxed">長く働くための展開先は、ディレクション側（アートディレクター・Webディレクター）、実装側（<a href="/articles/frontend/" className="underline" style={{ color: "#7c3a55" }}>フロントエンドエンジニア</a>）、設計側（<a href="/articles/ux-designer/" className="underline" style={{ color: "#7c3a55" }}>UXデザイナー</a>）の3方向です。年収レンジとリモート求人の広さでは、本文で比較したとおりエンジニア側への展開が最も伸びしろのあるルートです。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>4. 現実的な注意点</h3>
              <p className="text-text-light text-sm leading-relaxed">バナー量産やテンプレート的なLP制作など、AIで代替されやすい業務から縮小が進む傾向にあります。「デザインだけ」のスキルセットのままでは、年収も仕事の幅も頭打ちになりやすいのが正直なところです。実装・UX・ディレクションのいずれかを掛け算して「代替されにくい専門性」を作ることが、この職種で長く働くための現実的な戦略です。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <p className="text-sm text-text-light leading-relaxed">
              女性比率や年収などの具体的な数値は、<a href="/articles/data/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアのデータ集</a>・<a href="/articles/salary-by-job/" className="underline" style={{ color: "#7c3a55" }}>職種別年収ガイド</a>・<a href="/articles/demand/" className="underline" style={{ color: "#7c3a55" }}>IT人材の需要データ</a>で出典付きで整理しています。エンジニア転身を含めた進路に迷う場合は<a href="/diagnosis/" className="underline" style={{ color: "#7c3a55" }}>転職エージェント無料診断</a>で相性を確かめ、具体的な求人は<a href="/ranking/" className="underline" style={{ color: "#7c3a55" }}>おすすめエージェントランキング</a>から探してみてください。
            </p>
          </div>
        </div>
      </section>

      {/* sec9 FAQ */}
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

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/frontend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>フロントエンドエンジニア転職ガイド</h3>
              <p className="text-sm text-text-light">キャリアチェンジの主戦場。年収・スキル・将来性</p>
            </a>
            <a href="/articles/ux-designer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>UXデザイナー転職ガイド</h3>
              <p className="text-sm text-text-light">「使いやすさの設計」に進む第3の道</p>
            </a>
            <a href="/articles/typescript-react/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>TypeScript×Reactエンジニアへの道</h3>
              <p className="text-sm text-text-light">求人の中心スキルの学習手順</p>
            </a>
            <a href="/articles/salary-by-job/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>職種別年収ガイド</h3>
              <p className="text-sm text-text-light">エンジニア職種の年収を横断比較</p>
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
              background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)",
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
              style={{ backgroundColor: "#c15f47", color: "#ffffff" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
