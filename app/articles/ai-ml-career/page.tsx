import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "AI・機械学習×女性エンジニア｜データサイエンス転職ガイド",
  description: "AI・機械学習分野での女性エンジニアの転職ガイド。データサイエンティスト・MLエンジニアの求人動向・年収・必要スキル・学習方法を詳しく解説します。",
  alternates: { canonical: "/articles/ai-ml-career/" },
  openGraph: {
    title: "AI・機械学習×女性エンジニア｜データサイエンス転職ガイド",
    description: "AI・機械学習分野での女性エンジニアの転職ガイド。データサイエンティスト・MLエンジニアの求人動向・年収・必要スキルを解説。",
    url: "https://women-engineer-navi.pages.dev/articles/ai-ml-career/", type: "article", siteName: "女性エンジニア転職ナビ", locale: "ja_JP",
  },
};

const structuredData = { "@context": "https://schema.org", "@type": "Article", headline: "AI・機械学習×女性エンジニア｜データサイエンス転職ガイド", datePublished: "2026-04-28", dateModified: "2026-04-28", author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" }, publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" }, description: "AI・機械学習分野での女性エンジニアの転職ガイド。", mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/articles/ai-ml-career/" } };

const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "AI・機械学習エンジニアになるにはどのくらいの学習期間が必要ですか？", acceptedAnswer: { "@type": "Answer", text: "プログラミング経験者であれば6ヶ月〜1年が目安です。Pythonの基礎に加え、数学（線形代数・統計学）、機械学習ライブラリ（scikit-learn・TensorFlow・PyTorch）の学習が必要です。未経験からの場合は1〜2年を見込むとよいでしょう。" } },
  { "@type": "Question", name: "データサイエンティストの年収はどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "データサイエンティストの平均年収は600万〜900万円です。経験5年以上のシニアレベルでは年収800万〜1,200万円、マネージャークラスでは1,000万円以上も可能です。AI・機械学習分野は人材不足が深刻で、スキルのある人材には高い報酬が提示されます。" } },
  { "@type": "Question", name: "文系出身でもデータサイエンティストになれますか？", acceptedAnswer: { "@type": "Answer", text: "はい、文系出身でもデータサイエンティストになることは可能です。統計学や機械学習の基礎は独学やオンライン講座で学べます。ビジネス課題の理解力やコミュニケーション能力は文系出身者の強みになることもあります。ただし、数学的な基礎（線形代数・確率統計）の学習は必須です。" } },
  { "@type": "Question", name: "AI分野でリモートワークは可能ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、AI・機械学習の仕事はリモートワークとの相性が良いです。データ分析やモデル開発はPC上で完結する作業が多く、クラウド環境（AWS SageMaker、Google Colabなど）を活用すれば場所を選ばず作業できます。多くのAI企業がリモートワークを採用しています。" } },
  { "@type": "Question", name: "おすすめの学習リソースは何ですか？", acceptedAnswer: { "@type": "Answer", text: "入門にはCoursera「Machine Learning」（Andrew Ng）、書籍「ゼロから作るDeep Learning」がおすすめです。実践ではKaggleコンペティションへの参加が効果的です。Python+pandas+scikit-learnで基礎を固め、TensorFlow/PyTorchでディープラーニングを学びましょう。" } },
] };

const breadcrumbData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer-navi.pages.dev" },
  { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer-navi.pages.dev/articles/" },
  { "@type": "ListItem", position: 3, name: "AI・機械学習×女性エンジニア", item: "https://women-engineer-navi.pages.dev/articles/ai-ml-career/" },
] };

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "AI・機械学習×女性エンジニア" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#0891b2" }}>スキル・言語ガイド</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">AI・機械学習×女性エンジニア<span className="block text-lg font-medium text-text-light mt-2 md:text-xl">データサイエンス転職ガイド</span></h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月28日</p>
          </div>
        </div>
      </section>

      <section className="py-8"><div className="mx-auto max-w-4xl px-4"><div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}><h2 className="text-lg font-bold mb-4">目次</h2><ol className="space-y-2 text-sm">
        <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. AI・機械学習の求人動向</a></li>
        <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 年収データとキャリア展望</a></li>
        <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. データサイエンティストの仕事内容</a></li>
        <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. MLエンジニアの仕事内容</a></li>
        <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 必要なスキルセット</a></li>
        <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 学習ロードマップ</a></li>
        <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 女性が活躍するAI企業</a></li>
        <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. 転職成功事例</a></li>
        <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. おすすめ転職エージェント</a></li>
        <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
      </ol></div></div>
      </section>

      <section id="sec1" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">AI・機械学習の求人動向</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>2026年現在、AI・機械学習分野は最も急速に成長しているIT領域の一つです。生成AIの爆発的な普及に伴い、LLM（大規模言語モデル）の活用、プロンプトエンジニアリング、AIアプリケーション開発など、新しい職種も次々と生まれています。</p>
        <p>データサイエンティストの求人数は過去3年で約2倍に増加しており、機械学習エンジニアの求人も同様の伸びを見せています。特にSaaS企業、EC企業、金融機関、ヘルスケア企業でのAI活用が進んでおり、幅広い業界でデータサイエンス人材が求められています。</p>
        <p>女性データサイエンティストの比率はまだ約20%程度ですが、企業のダイバーシティ推進により増加傾向にあります。多様な視点を持つチームの方がより良いAIモデルを構築できるという認識が広まり、女性のAI人材採用に積極的な企業が増えています。</p>
        <p>リモートワークとの相性も良く、データ分析やモデル開発はクラウド環境で完結するため、場所を選ばず働けます。育児と両立しながらAI分野でキャリアを築く女性エンジニアも増えてきています。</p>
      </div></div>
      </section>

      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">年収データとキャリア展望</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>AI・機械学習分野の年収はIT業界の中でもトップクラスです。データアナリストは年収450万〜650万円、データサイエンティストは600万〜900万円、MLエンジニアは700万〜1,200万円、AIアーキテクトは1,000万〜1,500万円が相場です。</p>
        <p>特に生成AI関連の求人は高い年収が提示される傾向にあります。LLMの活用経験やプロンプトエンジニアリングのスキルがあると、年収800万円以上のオファーを受けやすくなります。RAG（Retrieval-Augmented Generation）やファインチューニングの経験があると、さらに市場価値が高まります。</p>
        <p>キャリアの展望としては、データサイエンティストからチーフデータオフィサー（CDO）やAI事業責任者への道があります。技術を極めるスペシャリスト路線では、リサーチサイエンティストとして学術的な研究にも携わることができます。</p>
        <p>フリーランスのデータサイエンティスト・MLエンジニアの場合、月単価80万〜150万円が相場です。特にLLM活用やMLOpsのスキルがあると、高単価案件を獲得しやすくなります。</p>
      </div>
      <div className="overflow-x-auto mt-6"><table className="w-full border-collapse text-sm"><thead><tr style={{ backgroundColor: "#0891b2" }}><th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>職種</th><th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>年収レンジ</th><th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>主要スキル</th></tr></thead><tbody>
        <tr><td className="border p-3" style={{ borderColor: "#d1dce5" }}>データアナリスト</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>450万〜650万円</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>SQL, Python, BI</td></tr>
        <tr style={{ backgroundColor: "#f8fafb" }}><td className="border p-3" style={{ borderColor: "#d1dce5" }}>データサイエンティスト</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>600万〜900万円</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>Python, 統計, ML</td></tr>
        <tr><td className="border p-3" style={{ borderColor: "#d1dce5" }}>MLエンジニア</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>700万〜1,200万円</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>PyTorch, MLOps, AWS</td></tr>
        <tr style={{ backgroundColor: "#f8fafb" }}><td className="border p-3" style={{ borderColor: "#d1dce5" }}>AIアーキテクト</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>1,000万〜1,500万円</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>設計力, LLM, リーダーシップ</td></tr>
      </tbody></table></div></div>
      </section>

      <section id="sec3" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">データサイエンティストの仕事内容</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>データサイエンティストは、ビジネス課題をデータの力で解決する専門職です。データの収集・前処理、探索的データ分析（EDA）、統計モデリング、機械学習モデルの構築、分析結果のビジネス部門への報告など、幅広い業務を担当します。</p>
        <p>日常的な業務としては、SQLでのデータ抽出、Pythonでのデータ分析、BIツール（Tableau、Looker等）でのダッシュボード作成、A/Bテストの設計と分析などがあります。ビジネスサイドとの密なコミュニケーションが求められるため、技術力だけでなくビジネス理解力も重要です。</p>
        <p>女性データサイエンティストの強みとして、ユーザー視点のデータ分析が挙げられます。EC企業やヘルスケア企業など、女性ユーザーが多いサービスでは、女性の視点を活かしたデータ分析が企業価値の向上に直結します。</p>
        <p>キャリアパスとしては、シニアデータサイエンティスト、データサイエンスマネージャー、チーフデータオフィサー（CDO）へのステップアップが一般的です。プレイングマネージャーとして技術と管理の両方を担う女性も増えています。</p>
      </div></div>
      </section>

      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">MLエンジニアの仕事内容</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>MLエンジニアは、機械学習モデルの開発から本番環境への導入・運用までを担当するエンジニアです。データサイエンティストが構築したモデルを、スケーラブルで信頼性の高いシステムとして実装する役割を担います。</p>
        <p>主な業務としては、機械学習モデルの実装・最適化、学習パイプラインの構築、モデルのデプロイ・監視、MLOps基盤の構築などがあります。TensorFlow/PyTorchでのモデル開発に加え、Docker/Kubernetes、AWS SageMaker、GitHub Actionsなどのインフラ・DevOpsスキルも求められます。</p>
        <p>2026年現在、特に注目されているのがLLM（大規模言語モデル）関連の開発です。GPTなどのLLMをビジネスに活用するための基盤構築、RAGシステムの開発、ファインチューニングなど、生成AI関連のスキルは非常に高い需要があります。</p>
        <p>MLOpsの分野も急速に成長しています。機械学習モデルの継続的なトレーニング・デプロイ・監視を自動化する仕組みを構築するスキルは、多くの企業で求められており、MLOpsエンジニアとしてのキャリアも有望です。</p>
      </div></div>
      </section>

      <section id="sec5" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">必要なスキルセット</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>AI・機械学習分野で活躍するために必要なスキルは大きく4つのカテゴリーに分けられます。プログラミング（Python中心）、数学・統計（線形代数、確率統計、微積分）、機械学習ライブラリ（scikit-learn、TensorFlow/PyTorch）、そしてデータエンジニアリング（SQL、BigQuery、データパイプライン）です。</p>
        <p>データサイエンティストを目指す場合は、統計学の知識とビジネスへの応用力が特に重要です。SQLでのデータ抽出、Pythonでの分析、結果のプレゼンテーションまで一貫してできるスキルが求められます。</p>
        <p>MLエンジニアを目指す場合は、ソフトウェアエンジニアリングのスキルが重要です。クリーンなコードの記述、テスト駆動開発、CI/CD、Docker/Kubernetesなどの知識が求められます。</p>
        <p>生成AI時代のスキルとして、LLM API（OpenAI API、Claude API等）の活用、プロンプトエンジニアリング、RAGの設計・実装、ベクトルデータベースの活用などが注目されています。</p>
      </div>
      <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>求められるスキルセット</h3><ul className="space-y-3">
        <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>Python + データ分析ライブラリ（pandas, NumPy, Matplotlib）</span></li>
        <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>機械学習（scikit-learn, TensorFlow/PyTorch）</span></li>
        <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>SQL + データベース（BigQuery, PostgreSQL）</span></li>
        <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>統計学（仮説検定, 回帰分析, ベイズ統計）</span></li>
        <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>クラウド（AWS SageMaker, GCP Vertex AI）</span></li>
      </ul></div></div>
      </section>

      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">学習ロードマップ</h2><div className="space-y-4">
        <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>STEP 1：Python+数学基礎（2〜3ヶ月）</h3><p className="text-sm text-text-light leading-relaxed">Pythonの基礎文法、pandas/NumPyの使い方、線形代数・確率統計の基礎を学びます。数学に苦手意識がある方も、実際のデータ分析を通じて学ぶことで理解が深まります。</p></div>
        <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>STEP 2：機械学習基礎（2〜3ヶ月）</h3><p className="text-sm text-text-light leading-relaxed">scikit-learnで主要なアルゴリズム（回帰、分類、クラスタリング）を学びます。Courseraの「Machine Learning」やKaggleの入門コンペティションで実践力を養いましょう。</p></div>
        <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>STEP 3：ディープラーニング+応用（2〜3ヶ月）</h3><p className="text-sm text-text-light leading-relaxed">TensorFlow/PyTorchでディープラーニングの基礎を学びます。NLP（自然言語処理）やCV（コンピュータビジョン）など、興味のある分野を深掘りしましょう。生成AIやLLMの活用方法も学びます。</p></div>
        <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>STEP 4：ポートフォリオ+転職（2〜3ヶ月）</h3><p className="text-sm text-text-light leading-relaxed">Kaggleコンペティションの成績やデータ分析プロジェクトをポートフォリオとしてまとめます。IT特化型エージェントに登録し、データサイエンス・ML求人の紹介を受けましょう。</p></div>
      </div></div>
      </section>

      <section id="sec7" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">女性が活躍するAI企業</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>AI分野で女性が活躍している企業は年々増えています。大手テック企業では、GoogleやMicrosoft、AmazonなどがAI研究チームに多くの女性を起用しています。国内でもリクルート、LINE、メルカリ、DeNAなどのメガベンチャーで女性データサイエンティストが活躍しています。</p>
        <p>SaaS企業でもAI活用が進んでおり、プロダクトの改善や需要予測、レコメンデーションエンジンの開発など、女性が主導するAIプロジェクトが増えています。これらの企業はリモートワークやフレックスタイム制を採用しているケースが多く、女性が働きやすい環境が整っています。</p>
        <p>スタートアップの中にも、女性CEOやCTOが率いるAI企業があります。ヘルスケアAI、教育AI、HRTechなどの分野では、女性の視点を活かしたプロダクト開発が行われており、女性データサイエンティスト・MLエンジニアの活躍の場が広がっています。</p>
        <p>企業選びの際は、ダイバーシティへの取り組み、女性管理職の比率、産休育休の取得実績などを確認しましょう。転職エージェントを活用すれば、求人票には載らない企業のリアルな情報を入手できます。</p>
      </div></div>
      </section>

      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">転職成功事例</h2><div className="space-y-4">
        <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}><p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>Aさん / 30歳 / Webエンジニアからデータサイエンティストへ</p><p className="text-sm text-text-light leading-relaxed">「Webエンジニアとして3年働いた後、Pythonのスキルを活かしてデータサイエンスに転向しました。Kaggleで銀メダルを取得し、レバテックキャリア経由でEC企業のデータサイエンティストに転職。年収は500万から750万にアップし、リモートワークで育児との両立も実現しています。」</p></div>
        <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}><p className="text-sm font-bold mb-2" style={{ color: "#7c3aed" }}>Bさん / 27歳 / 数学科卒からMLエンジニアへ</p><p className="text-sm text-text-light leading-relaxed">「大学で数学を専攻し、卒業後はSIerで開発をしていました。数学のバックグラウンドを活かしてPyTorchでの機械学習を独学し、Geekly経由でAIスタートアップのMLエンジニアに転職。最先端の技術に触れながら、年収も450万から680万にアップしました。」</p></div>
        <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}><p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>Cさん / 35歳 / マーケターからデータアナリストへ</p><p className="text-sm text-text-light leading-relaxed">「マーケティング部門でデータ分析に触れたことがきっかけで、SQLとPythonを学習しました。ビジネス理解力を武器に、SaaS企業のデータアナリストに転職。マーケティングデータの分析からABテストの設計まで担当し、年収は400万から600万にアップしました。」</p></div>
      </div></div>
      </section>

      <section id="sec9" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>AI・データサイエンス分野の求人を探すなら、IT特化型エージェントがおすすめです。レバテックキャリアはデータサイエンス・ML求人を多数保有しており、技術面での深いヒアリングに定評があります。</p>
        <p>Geeklyも AI・データサイエンス分野の求人に強みがあり、スタートアップからメガベンチャーまで幅広い企業の求人を紹介してくれます。リクルートエージェントは大手企業のデータサイエンスポジションが豊富です。</p>
        <p>ビズリーチなどのハイクラス転職サービスも、年収800万円以上のAI・データサイエンス求人を探す際に有効です。スカウト型のサービスを併用することで、自分では見つけられない求人に出会えることもあります。</p>
        <p>女性特化型のtype女性の転職エージェントとの併用も効果的です。技術面と環境面の両方のニーズを満たす企業を見つけるために、2〜3社のエージェントを併用しましょう。</p>
      </div></div>
      </section>

      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">よくある質問</h2><div className="space-y-4">
        {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
          <details key={i} className="group rounded-xl border overflow-hidden" style={{ borderColor: "#d1dce5" }}>
            <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50" style={{ color: "#0891b2" }}><span className="pr-4">{faq.name}</span><span className="transition-transform group-open:rotate-180">&#9662;</span></summary>
            <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}><p className="pt-4">{faq.acceptedAnswer.text}</p></div>
          </details>
        ))}
      </div></div>
      </section>

      <section className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">関連記事</h2><div className="grid gap-4 md:grid-cols-2">
        <a href="/articles/python-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>Python×女性エンジニア</h3><p className="text-sm text-text-light">求人動向・年収・学習ロードマップ</p></a>
        <a href="/articles/data-scientist/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>データサイエンティストガイド</h3><p className="text-sm text-text-light">女性データサイエンティストの転職事情</p></a>
        <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
        <a href="/articles/portfolio/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>ポートフォリオ作成ガイド</h3><p className="text-sm text-text-light">転職で差をつける方法</p></a>
      </div></div>
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

      {/* 補足情報 2 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
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

      {/* 補足情報 3 */}
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

      {/* 補足情報 4 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
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

      {/* 補足情報 5 */}
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

      {/* 補足情報 6 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
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

      {/* 補足情報 7 */}
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

      <section className="py-12"><div className="mx-auto max-w-4xl px-4 text-center"><div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}><h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2><p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p><a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a></div></div>
      </section>
    </>
  );
}
