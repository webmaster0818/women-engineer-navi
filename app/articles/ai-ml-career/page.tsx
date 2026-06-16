import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性AI・機械学習エンジニア転職ガイド｜年収・必要スキル・現実的な道筋【2026年】",
  description:
    "女性AI・機械学習エンジニアの転職ガイド。求人統計に基づく年収相場（AIエンジニア平均569万円・MLエンジニア630万円前後）、生成AI関連求人の急増データ、数学・統計の現実的な必要ライン、未経験から段階的に目指すルートを出典付きで解説します。",
  alternates: { canonical: "/articles/ai-ml-career/" },
  openGraph: {
    title: "女性AI・機械学習エンジニア転職ガイド｜年収・必要スキル・現実的な道筋【2026年】",
    description:
      "AI・機械学習エンジニアの年収相場・求人急増データ・必要スキル・未経験からの現実的な段階ルートを、求人統計と公的調査の出典付きで解説。",
    url: "https://women-engineer.com/articles/ai-ml-career/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性AI・機械学習エンジニア転職ガイド｜年収・必要スキル・現実的な道筋【2026年】",
  datePublished: "2026-04-28",
  dateModified: "2026-06-12",
  author: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer.com",
  },
  publisher: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer.com",
  },
  description:
    "AI・機械学習エンジニアの年収相場・求人動向・必要スキル・未経験からの現実的な段階ルートを、求人統計と公的調査の出典付きで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/ai-ml-career/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "AI・機械学習エンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "求人ボックス給料ナビ（2026年5月集計）によると、AIエンジニア求人の平均年収は569万円で、求人のボリュームゾーンは352万〜451万円、上位では1,000万円を超える求人もあります。機械学習エンジニアに限ると平均630万円前後とやや高く、IT特化型エージェントの保有求人では平均700万円台というデータもあります。LLM・生成AIの開発経験があると年収800万円以上のオファーも現実的で、経験・スキルによる差が非常に大きい職種です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験からいきなり機械学習エンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "正直に言うと難しいルートです。機械学習エンジニアの中途求人の多くは「機械学習モデルの開発・運用経験」や「Pythonでの実務経験」を応募条件としており、完全未経験を採用する求人はごく少数です。また経済産業省の調査では新人・初級者レベル（スキル標準レベル1）のIT人材の平均年収は437.8万円で、未経験入社では高年収は期待できません。現実的なのは、データアナリスト・データエンジニア・Pythonを使うバックエンド開発などで1〜3年の実務経験を積み、社内異動や2回目の転職でML領域へ進む段階ルートです。",
      },
    },
    {
      "@type": "Question",
      name: "数学が苦手でもAI・機械学習の仕事に就けますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "職種によります。研究開発やモデル開発を担う機械学習エンジニアには、大学教養レベルの線形代数・微分・確率統計の理解が実務で必要です。一方、LLM API（OpenAI API・Claude APIなど）やRAGを使ってAI機能をアプリに組み込む「AIエンジニア（LLMアプリ開発）」は、ソフトウェア開発スキルが主体で、高度な数学よりもPython・API設計・プロンプト設計の力が問われます。数学に不安がある場合は、まず統計の基礎（平均・分散・仮説検定・回帰）を押さえてLLMアプリ開発側から入るのが現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "AIエンジニアと機械学習エンジニアは何が違うのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "明確な業界統一の定義はありませんが、2026年時点の求人では、機械学習エンジニアは「モデルの学習・評価・MLOps（学習パイプラインや本番運用）」を担う職種、AIエンジニアは「既存のLLMや学習済みモデルを活用してAI機能・AIアプリを開発する」職種として募集される傾向があります。後者はRAG構築・プロンプト設計・LLM APIの組み込みが中心で、Webエンジニアからの転身がしやすい領域です。生成AI関連求人は約1年で約4倍（doda調べ）に増えており、特にLLM活用型のAIエンジニア求人の伸びが顕著です。",
      },
    },
    {
      "@type": "Question",
      name: "文系・異職種の女性がAI分野を目指す現実的なルートは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いきなりMLエンジニアを狙わず、(1)SQL＋Pythonを学びデータアナリスト・データ活用ポジションへ転職、(2)実務でデータ基盤や分析の経験を1〜3年積む、(3)機械学習案件のあるチームへ社内異動または転職、という3段階が王道です。事務・営業・マーケティングなどでデータに触れた経験は分析職への転職で評価されます。Python3エンジニア認定データ分析試験や統計検定2級などの資格は、学習の証明として未経験転職の補強材料になります。",
      },
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer.com" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer.com/articles/" },
    { "@type": "ListItem", position: 3, name: "AI・機械学習エンジニア転職ガイド", item: "https://women-engineer.com/articles/ai-ml-career/" },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "AI・機械学習エンジニア転職ガイド" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>職種別ガイド</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性AI・機械学習エンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">年収・必要スキル・未経験からの現実的な道筋【2026年】</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border-2 p-6" style={{ borderColor: "#7c3a55", backgroundColor: "#efe3d8" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>この記事の結論</h2>
            <ul className="space-y-3 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>年収</strong>：AIエンジニア求人の平均は<strong>569万円</strong>（求人ボックス・2026年5月集計）、機械学習エンジニアは<strong>630万円前後</strong>。LLM・生成AI経験者は800万円超も現実的だが、求人のボリュームゾーンは352万〜451万円で、経験による差が極端に大きい。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>求人</strong>：生成AI関連求人は<strong>約1年で約4倍</strong>（doda）、フリーランスの生成AI関連案件は<strong>前年同月比410%</strong>（レバテック・2024年6月）と急増中。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>現実</strong>：未経験からいきなり機械学習エンジニアは<strong>難路</strong>。中途求人の多くは実務経験が条件。データアナリスト／<a href="/articles/data-engineer/" className="underline" style={{ color: "#7c3a55" }}>データエンジニア</a>などで経験を積んでからML領域へ進む<strong>段階ルート</strong>が現実的。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>チャンス</strong>：高度な数学が必須でない<strong>LLMアプリ開発（RAG・プロンプト設計・API組み込み）</strong>の求人が拡大しており、Web開発からの転身ルートが開けている。</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. AI・機械学習エンジニアとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. AIエンジニアとMLエンジニアの違い｜LLM時代の職種変化</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 年収相場（求人統計・出典付き）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 求人動向と将来性（データで見る需要）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 必要なスキル｜数学・統計はどこまで必要か</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験からの現実と段階ルート</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 学習ロードマップ</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 女性が長く働きやすい理由とキャリアパス</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. おすすめ転職エージェント</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">AI・機械学習エンジニアとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              AI・機械学習エンジニアは、データから学習するモデル（機械学習モデル）や、LLM（大規模言語モデル）などのAI技術を使って、予測・分類・自動化・対話などの機能を作る職種です。需要予測、レコメンド、不正検知、画像認識、チャットボット、社内ナレッジ検索など、活躍の場はあらゆる業界に広がっています。
            </p>
            <p>
              具体的な業務は、(1)データの収集・前処理、(2)モデルの選定・学習・評価、(3)学習パイプラインの構築、(4)モデルの本番環境へのデプロイと監視（MLOps）、(5)LLM APIやRAG（検索拡張生成）を使ったAIアプリケーション開発など。データサイエンティストが「分析して示唆を出す」役割だとすれば、AI・機械学習エンジニアは「動くAIシステムとして実装し、運用し続ける」役割です（データサイエンティストとの違いは<a href="/articles/data-scientist/" className="underline" style={{ color: "#7c3a55" }}>データサイエンティストガイド</a>で詳しく解説しています）。
            </p>
            <p>
              使用言語はPythonが事実上の標準で、PyTorchなどの深層学習フレームワーク、scikit-learn、SQL、クラウド（AWS/GCP）のML基盤を組み合わせて開発します。<a href="/articles/python-career/" className="underline" style={{ color: "#7c3a55" }}>Pythonエンジニアのキャリア</a>の中でも、最も専門性と年収レンジが高い領域のひとつです。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>機械学習モデルの開発・学習・評価（Python / PyTorch / scikit-learn）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>データの前処理・特徴量設計（pandas / SQL）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>MLOps：学習パイプライン・デプロイ・モデル監視の自動化</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>LLMアプリ開発：RAG構築・プロンプト設計・LLM API組み込み</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>クラウドML基盤（AWS SageMaker / GCP Vertex AI）の構築・運用</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 AIエンジニアとMLエンジニアの違い */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">AIエンジニアとMLエンジニアの違い｜LLM時代の職種変化</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ChatGPT以降の生成AIブームで、求人市場の「AI人材」の中身は大きく変わりました。従来は「自分でモデルを学習させる機械学習エンジニア」が中心でしたが、2026年現在は<strong>既存のLLMを活用してAI機能を作る「AIエンジニア（LLMアプリ開発）」</strong>の求人が急増しています。業界統一の定義はないものの、求人票では概ね次のように使い分けられています。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>&nbsp;</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>機械学習（ML）エンジニア</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>AIエンジニア（LLMアプリ開発）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>主な仕事</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>モデルの学習・評価・MLOps（学習パイプライン・本番運用）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>LLM API・学習済みモデルを使ったAI機能・AIアプリの開発</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>中核スキル</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Python / PyTorch / 統計・数学 / MLOps / クラウドML基盤</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Python / API設計 / RAG・ベクトルDB / プロンプト設計 / Web開発</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>数学の必要度</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>高い（線形代数・微分・確率統計を実務で使う）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>比較的低い（統計の基礎＋評価設計の理解で入れる）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>転身しやすい前職</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>データエンジニア / データサイエンティスト / 理系研究職</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Web・バックエンドエンジニア / アプリ開発者</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              この変化を裏付けるデータとして、レバテックの市場調査では<strong>生成AI関連の新規案件数が前年同月比410%</strong>（2024年6月末時点）に急増したことが報告されています。またdoda（パーソルキャリア）の転職市場予測でも、<strong>生成AI関連求人は約1年で約4倍</strong>に拡大したとされ、企業側の生成AI導入率も57.7%（野村総合研究所・2025年調査）に達しています。「モデルを作る人」だけでなく「AIをプロダクトに組み込める人」への需要が、求人市場の新しい主戦場になっています。
            </p>
            <p className="text-sm">
              出典: レバテック「ITエンジニア転職・採用市場動向（2024年6月）」、パーソルキャリア「doda転職市場予測2025下半期」、野村総合研究所「IT活用実態調査（2025年）」（いずれも2026年6月参照）
            </p>
          </div>
        </div>
      </section>

      {/* sec3 年収 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収相場（求人統計・出典付き）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              AI・機械学習エンジニアの年収は「平均は高いが、ばらつきが極端に大きい」のが実態です。求人ボックス給料ナビ（2026年5月集計）によると、AIエンジニア求人の平均年収は<strong>569万円</strong>。ただし求人のボリュームゾーンは<strong>352万〜451万円</strong>で、上位は1,147万円程度まで分布しています。つまり「AIエンジニアになれば即高年収」ではなく、<strong>経験とスキルで年収が大きく分かれる職種</strong>です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>出典</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>AIエンジニア（求人平均）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>平均569万円（ボリュームゾーン352万〜451万円）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>求人ボックス 給料ナビ（2026年5月集計）</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>機械学習エンジニア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>平均630万円前後</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>レバテックフリーランス「機械学習エンジニアの平均年収」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データサイエンティスト</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>平均617万円（IT職種別ランキング3位）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>パーソルキャリア「ITエンジニア職×スキル別平均年収」（2024年8月発表）</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>未経験〜初級（参考）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>平均437.8万円（ITスキル標準レベル1）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>経済産業省「IT関連産業の給与等に関する実態調査」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス（ML案件）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月単価平均81万円（年換算約970万円）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>レバテックフリーランス掲載案件より算出</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-light mt-3">出典: 求人ボックス 給料ナビ「AIエンジニアの年収・時給」、レバテックフリーランス、パーソルキャリア プレスリリース、経済産業省「IT関連産業の給与等に関する実態調査」（いずれも2026年6月参照）。金額は求人・調査時点の統計値であり、企業・地域・スキルにより変動します。</p>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>LLM・生成AIの実務経験</strong>を作る（RAG構築・LLMアプリの本番運用は2026年時点で最も希少性が高い）</li>
              <li>② <strong>MLOps・クラウドML基盤</strong>（SageMaker / Vertex AI）まで担えるようになる</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>する。AI領域は相場の変化が速く、市場価値の客観評価が特に効く</li>
            </ul>
            <p className="text-sm text-text-light mt-3">年収1,000万円を狙う具体的な戦略は<a href="/articles/salary-1000man/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアが年収1000万円を目指す方法</a>で詳しく解説しています。</p>
          </div>
        </div>
      </section>

      {/* sec4 求人動向 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向と将来性（データで見る需要）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              AI関連求人の伸びは、IT職種の中でも突出しています。公開されている調査データを整理すると次の通りです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>約4倍</p>
              <p className="font-bold mt-1">生成AI関連求人の増加（約1年間）</p>
              <p className="text-sm text-text-light mt-2">dodaの転職市場予測では、生成AI関連求人が約1年で約4倍に拡大。AI・DX人材ニーズの増加が転職市場全体を押し上げています。</p>
              <p className="text-xs text-text-light mt-2">出典: パーソルキャリア「doda転職市場予測2025下半期」（2026年6月参照）</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>410%</p>
              <p className="font-bold mt-1">生成AI関連の新規案件数（前年同月比）</p>
              <p className="text-sm text-text-light mt-2">レバテックの調査（2024年6月末時点）では、フリーランス向け生成AI関連案件が前年同月比410%。ITエンジニア正社員の求人倍率も10.2倍と高水準です。</p>
              <p className="text-xs text-text-light mt-2">出典: レバテック「ITエンジニア転職・採用市場動向」（2026年6月参照）</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>57.7%</p>
              <p className="font-bold mt-1">生成AIを導入済みの企業の割合</p>
              <p className="text-sm text-text-light mt-2">野村総合研究所の調査では、生成AI導入済み企業が2023年度33.8%→2025年度57.7%へ拡大。導入後の「活用・内製化」フェーズでAI人材の採用が続きます。</p>
              <p className="text-xs text-text-light mt-2">出典: 野村総合研究所「IT活用実態調査（2025年）」（2026年6月参照）</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>約12.4万人</p>
              <p className="font-bold mt-1">2030年のAI人材の需給ギャップ（試算）</p>
              <p className="text-sm text-text-light mt-2">経済産業省の試算では、需要の伸びが平均シナリオの場合、AI人材は2030年に約12.4万人不足。IT人材全体では最大約79万人の不足が見込まれています。</p>
              <p className="text-xs text-text-light mt-2">出典: 経済産業省「IT人材需給に関する調査」（2026年6月参照）</p>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              注意点もあります。求人の伸びの中心は「生成AIをプロダクトや業務に組み込む」実装寄りのポジションで、研究開発職（リサーチャー）は依然として修士・博士や論文実績を求める狭き門です。転職でAI領域を目指すなら、<strong>LLMアプリ開発・MLOps・データ基盤</strong>といった実装側から入るのが現実的です。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 スキル */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキル｜数学・統計はどこまで必要か</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「AI＝高度な数学が必須」と思われがちですが、実際に必要な数学レベルは<strong>目指すポジションによって大きく異なります</strong>。すべてを完璧にしてから転職活動を始める必要はありません。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>スキル領域</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>具体例</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>必要なライン</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Python</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>pandas / NumPy / scikit-learn</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>全ポジション必須。データ処理を自力で書けるレベル</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>SQL・データ基盤</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>BigQuery / PostgreSQL</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>必須。実務データの大半はSQLで取り出すところから始まる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>統計の基礎</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>平均・分散・仮説検定・回帰</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>全ポジション必須。統計検定2級程度が一つの目安</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>数学（線形代数・微分）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>行列演算 / 勾配降下法の理解</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>モデル開発職は大学教養レベルが必要。LLMアプリ開発は概念理解でも可</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>深層学習</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>PyTorch / Transformer の仕組み</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>MLエンジニアは必須。AIエンジニアは仕組みの理解＋活用力</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>LLM活用</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>LLM API / RAG / ベクトルDB / プロンプト設計</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2026年の求人で最も伸びている領域。小さくても動くものを作った経験が効く</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>エンジニアリング基礎</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Git / Docker / クラウド（AWS・GCP）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>本番運用（MLOps）を担うなら必須。年収アップに直結</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>数学が不安な人への現実的なアドバイス</h3>
            <p className="text-sm text-text-light leading-relaxed">
              文系出身・数学にブランクがある場合でも、<strong>統計の基礎（統計検定2級レベル）＋Python＋SQL</strong>まで固めれば、データ分析職やLLMアプリ開発のポジションには十分挑戦できます。線形代数や微分は「モデルの中身を改良する仕事」に進む段階で学び直せば間に合います。学習の証明としては<a href="/articles/cert-python/" className="underline" style={{ color: "#7c3a55" }}>Python3エンジニア認定試験（データ分析試験）</a>が未経験転職の補強材料として使いやすい資格です。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 未経験からの現実 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験からの現実と段階ルート</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              最初に正直にお伝えします。<strong>IT未経験からいきなり機械学習エンジニアになるのは難路です。</strong>転職サイトで機械学習エンジニアの中途求人を確認すると、応募条件の大半が「機械学習モデルの開発・運用経験」「Pythonでの実務経験」「データ基盤構築の経験」を求めており、完全未経験を対象とした求人はごく少数です。研究開発職に至っては修士・博士や論文実績が前提となるケースが一般的です。
            </p>
            <p>
              年収面でも、未経験入社が該当しやすいITスキル標準レベル1（新人・初級者）の平均年収は<strong>437.8万円</strong>（出典: 経済産業省「IT関連産業の給与等に関する実態調査」、2026年6月参照）で、「AI転職で即高年収」という宣伝文句とは距離があります。スクールの広告などで「未経験から年収800万円」といった訴求を見かけたら、その根拠を必ず確認してください。
            </p>
            <p>
              一方で、悲観する必要はありません。AI領域は<strong>隣接職種からの段差の小さい階段</strong>が用意されている分野です。実際にMLエンジニアの多くは、データ分析・データ基盤・バックエンド開発のいずれかを経由しています。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>段階1</span>
              <div>
                <h3 className="font-bold mb-1">データに触れる職種へ転職する（0〜1年目）</h3>
                <p className="text-sm text-text-light leading-relaxed">SQL＋Python＋統計基礎を学び、データアナリスト・データ活用ポジション・Pythonを使う開発職へ。前職が事務・営業・マーケティングでも、「業務でデータを扱った経験」は分析職への転職で評価されます。</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>段階2</span>
              <div>
                <h3 className="font-bold mb-1">データ基盤・分析の実務経験を積む（1〜3年目）</h3>
                <p className="text-sm text-text-light leading-relaxed">データパイプライン構築や分析業務で実績を作ります。<a href="/articles/data-engineer/" className="underline" style={{ color: "#7c3a55" }}>データエンジニア</a>はML基盤と地続きで、MLエンジニアへの最短経路のひとつ。分析からの深掘りなら<a href="/articles/data-scientist/" className="underline" style={{ color: "#7c3a55" }}>データサイエンティスト</a>ルートもあります。</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>段階3</span>
              <div>
                <h3 className="font-bold mb-1">ML案件・AI機能開発へ移る（社内異動 or 2回目の転職）</h3>
                <p className="text-sm text-text-light leading-relaxed">実務経験を土台に、機械学習チームへの社内異動や、ML・LLMアプリ開発ポジションへの転職を狙います。この段階では「実務×ML学習実績（Kaggle・個人開発）」の組み合わせが評価され、年収レンジも一気に上がります。</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Webエンジニア経験者なら近道がある</h3>
            <p className="text-sm text-text-light leading-relaxed">
              すでに開発経験がある人は、LLM API＋RAGを使ったAI機能開発（LLMアプリ開発）から入るのが2026年時点の最短ルートです。求人の急増領域（生成AI関連求人は約1年で約4倍・doda調べ）でありながら、高度な数学より「動くものを作って運用できる」エンジニアリング力が評価されるため、バックエンド経験との相性が抜群です。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 学習ロードマップ */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">学習ロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>段階1（データ職への転職）に到達するまでの学習の目安です。1日2〜3時間の学習で<strong>6ヶ月〜1年</strong>を見込んでください。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "Python＋統計の基礎（2〜3ヶ月）", "Pythonの基本文法、pandas/NumPyでのデータ処理、統計の基礎（平均・分散・仮説検定・回帰）。統計検定2級・Python3エンジニア認定データ分析試験が到達度の目安になります。"],
              ["STEP2", "SQLとデータの扱い（1〜2ヶ月）", "SELECT・JOIN・集計を自力で書けるレベルまで。実務のデータ仕事はSQLから始まるため、ここを飛ばすと転職後に苦労します。"],
              ["STEP3", "機械学習の基礎（2〜3ヶ月）", "scikit-learnで回帰・分類・クラスタリングを一通り実装し、交差検証・評価指標（精度・再現率など）を理解。Kaggleの入門コンペで手を動かすのが近道です。"],
              ["STEP4", "深層学習またはLLM活用（2〜3ヶ月）", "モデル開発志向ならPyTorchで基礎を実装。LLMアプリ志向ならLLM APIとRAG（ベクトル検索＋生成）を使った小さなアプリを作ります。両方を浅くやるより、どちらかに絞る方が転職では効きます。"],
              ["STEP5", "ポートフォリオを作る", "「データ取得→前処理→モデル/LLM→評価→公開」まで一気通貫の小さなプロジェクトを1本。Kaggleの実績やGitHub公開は、学歴・職歴より雄弁な実務能力の証明になります。"],
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

      {/* sec8 女性が働きやすい理由とキャリアパス */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が長く働きやすい理由とキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              AI・機械学習はリモートワークとの相性が良い職種です。データ分析もモデル開発もクラウド環境（SageMaker・Vertex AI・Colabなど）で完結しやすく、成果がモデルの精度や改善数値として客観的に残るため、時短勤務でも評価されやすい構造があります。需給ギャップ（経済産業省試算で2030年に約12.4万人不足）を背景に求人の選択肢が多いことも、産休育休実績やリモート運用などの「働きやすさの条件」で企業を選びやすい要因です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>技術を深める</h3><p className="text-sm text-text-light">シニアMLエンジニア → MLアーキテクト／MLOpsスペシャリスト。モデル開発と基盤設計の専門家として高年収を狙う道。</p></div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>マネジメント</h3><p className="text-sm text-text-light">MLチームのリード／AIプロダクトマネージャー。技術とビジネスの橋渡し役は希少で、市場価値が高い進路です。</p></div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>領域を広げる</h3><p className="text-sm text-text-light">データサイエンティスト／データエンジニア／LLMアプリ開発へ。データ系職種は相互に行き来しやすく、ライフステージに合わせた選択ができます。</p></div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>独立・柔軟な働き方</h3><p className="text-sm text-text-light">フリーランスML案件は月単価平均81万円（レバテックフリーランス掲載案件より算出）。実務経験3年以上で現実的な選択肢になります。</p></div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              企業選びでは、AIチームの規模・データ基盤の成熟度に加えて、産休育休の取得実績・復帰率、リモートの運用実態を必ず確認しましょう。求人票に出ない実態は、IT領域に詳しい転職エージェント経由で確認するのが確実です。
            </p>
          </div>
        </div>
      </section>

      {/* sec9 エージェント */}
      <section id="sec9" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>AI・データサイエンス分野の求人を探すなら、IT特化型エージェントがおすすめです。レバテックキャリアはデータサイエンス・ML求人を多数保有しており、技術面での深いヒアリングに定評があります。</p>
        <p>Geeklyも AI・データサイエンス分野の求人に強みがあり、スタートアップからメガベンチャーまで幅広い企業の求人を紹介してくれます。リクルートエージェントは大手企業のデータサイエンスポジションが豊富です。</p>
        <p>ビズリーチなどのハイクラス転職サービスも、年収800万円以上のAI・データサイエンス求人を探す際に有効です。スカウト型のサービスを併用することで、自分では見つけられない求人に出会えることもあります。</p>
        <p>女性特化型のtype女性の転職エージェントとの併用も効果的です。技術面と環境面の両方のニーズを満たす企業を見つけるために、2〜3社のエージェントを併用しましょう。</p>
      </div></div>
      </section>

      {/* sec10 FAQ */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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

      {/* 出典一覧 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">本記事の主な出典</h2>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・求人ボックス 給料ナビ「AIエンジニアの仕事の年収・時給」（2026年5月集計、2026年6月参照）</li>
              <li>・レバテック「ITエンジニア転職・採用市場動向（2024年6月）」（2026年6月参照）</li>
              <li>・パーソルキャリア「doda転職市場予測2025下半期」（2026年6月参照）</li>
              <li>・パーソルキャリア「最新版ITエンジニア職×スキルの平均年収」（2024年8月発表、2026年6月参照）</li>
              <li>・レバテックフリーランス「機械学習エンジニアの平均年収」（2026年6月参照）</li>
              <li>・経済産業省「IT人材需給に関する調査」（2026年6月参照）</li>
              <li>・経済産業省「IT関連産業の給与等に関する実態調査」（2026年6月参照）</li>
              <li>・野村総合研究所「IT活用実態調査（2025年）」（2026年6月参照）</li>
            </ul>
            <p className="text-xs text-text-light mt-4">※年収・求人数は各調査時点の統計値です。最新の相場は転職エージェント等でご確認ください。</p>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/python-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>Pythonエンジニアのキャリア</h3><p className="text-sm text-text-light">AI時代の中核言語Pythonで広がる道</p></a>
            <a href="/articles/data-scientist/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>データサイエンティスト転職ガイド</h3><p className="text-sm text-text-light">分析からAIへ進むキャリアの起点</p></a>
            <a href="/articles/data-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>データエンジニア転職ガイド</h3><p className="text-sm text-text-light">MLエンジニアへの最短経路のひとつ</p></a>
            <a href="/articles/cert-python/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>Python資格ガイド</h3><p className="text-sm text-text-light">データ分析試験など学習の証明に使える資格</p></a>
            <a href="/articles/salary-1000man/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>年収1000万円を目指す方法</h3><p className="text-sm text-text-light">AI・ML経験を年収に変える戦略</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
          </div>
        </div>
      </section>

      <section className="py-12"><div className="mx-auto max-w-4xl px-4 text-center"><div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}><h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2><p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p><a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a></div></div>
      </section>
    </>
  );
}
