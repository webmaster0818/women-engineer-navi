import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性データサイエンティスト転職ガイド｜年収・必要スキル・未経験からの道筋【2026年】",
  description:
    "女性データサイエンティストの転職ガイド。平均年収556万円（doda）・厚労省job tagでは611.9万円という実データをもとに、必要なスキル3領域（統計・エンジニアリング・ビジネス）、統計検定・DS検定、データアナリストとの違い、未経験からの段階的キャリアルートを出典付きで解説します。",
  alternates: { canonical: "/articles/data-scientist/" },
  openGraph: {
    title: "女性データサイエンティスト転職ガイド｜年収・必要スキル・未経験からの道筋【2026年】",
    description:
      "女性データサイエンティストの年収相場・必要スキル3領域・統計検定/DS検定・データアナリストとの違い・未経験からの段階的キャリアルートを実データと出典付きで解説。",
    url: "https://women-engineer.com/articles/data-scientist/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性データサイエンティスト転職ガイド｜年収・必要スキル・未経験からの道筋【2026年】",
  datePublished: "2026-04-27",
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
    "女性データサイエンティストの年収相場・必要スキル3領域・統計検定/DS検定・データアナリストとの違い・未経験からの段階的キャリアルートを実データと出典付きで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/data-scientist/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "データサイエンティストの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "転職サービスdodaの職種別平均年収ランキングではデータサイエンティストの平均年収は556万円、厚生労働省の職業情報提供サイトjob tagでは611.9万円（令和7年時点）です。dodaの年代別データでは20代480万円・30代644万円・40代709万円と経験に応じて大きく伸び、正社員全体の平均429万円（doda・2025年発表）を全年代で上回ります。統計モデリングや機械学習の実装まで担える人材、ビジネス課題を定義できるリード級は800万〜1,000万円超も狙えます。",
      },
    },
    {
      "@type": "Question",
      name: "データアナリストとデータサイエンティストの違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "データアナリストは既にあるデータをSQLやBIツールで集計・可視化し、現状を分析・報告するのが主な役割です。一方データサイエンティストは、統計学や機械学習を使って予測モデルや施策を構築し、ビジネス課題の解決まで踏み込みます。求められる数学・統計の深さとモデリングスキルが大きな違いで、年収水準もデータサイエンティストの方が高い傾向です。実務ではアナリストとして集計・可視化の経験を積み、統計と機械学習を学んでデータサイエンティストへ進む段階的キャリアが王道です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験・文系からでもデータサイエンティストになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能ですが、完全未経験からいきなりデータサイエンティストになるのは難易度が高いため、段階的ルートが現実的です。具体的には、(1)SQLとExcel/BIツールを習得してデータアナリストや営業企画・マーケティングのデータ担当として実務経験を積む、(2)並行して統計検定2級レベルの統計学とPython（pandas/scikit-learn）を学ぶ、(3)分析実績をポートフォリオ化してデータサイエンティスト職に応募する、という2段階の転職です。社内のデータ活用部署への異動から始める方法もあります。",
      },
    },
    {
      "@type": "Question",
      name: "データサイエンティストに役立つ資格はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "代表的なのは統計検定2級（日本統計学会公式認定、CBT受験料は一般7,000円・学割5,000円）と、データサイエンティスト検定リテラシーレベル（DS検定、データサイエンティスト協会主催、受験料は一般10,000円税抜・100問100分）です。統計検定2級は大学基礎課程レベルの統計学力の証明として採用現場での評価が定着しており、DS検定は協会のスキルチェックリストに基づきデータサイエンス力・データエンジニアリング力・ビジネス力を網羅的に問います。資格は知識の証明にはなりますが、採用ではSQL・Pythonでの分析実績の方が重視されるため、学習の指針として活用するのがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "女性のデータサイエンティストは少ないですか？働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "データサイエンティスト協会の調査では、日本のデータサイエンティストの女性比率は約1割（2019年調査で13%、2021年調査では男女比およそ9:1）とまだ少数派です。ただし職種としては、有効求人倍率11.88倍（厚労省job tag・令和6年度）という強い売り手市場で、分析業務はリモートワークと相性が良く、成果がアウトプットで可視化されるため時短勤務でも評価されやすいのが特徴です。女性が少ないからこそ採用・登用に積極的な企業も多く、長期的なキャリアを築きやすい職種といえます。",
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
        style={{
          background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "データサイエンティスト転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              職種別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性データサイエンティスト転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収・必要スキル・未経験からの道筋を実データで解説【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}
          >
            <h2 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
              この記事の結論
            </h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li>
                ・データサイエンティストの平均年収は<strong>556万円（doda職種別ランキング）</strong>、厚労省job tagでは<strong>611.9万円</strong>。正社員全体の平均429万円を大きく上回る高年収職種
              </li>
              <li>
                ・有効求人倍率は<strong>11.88倍（厚労省job tag・令和6年度）</strong>。AI活用の広がりで需要が供給を大きく上回る売り手市場
              </li>
              <li>
                ・必要スキルは<strong>統計（データサイエンス力）×エンジニアリング×ビジネス理解</strong>の3領域。データサイエンティスト協会のスキル定義に対応
              </li>
              <li>
                ・女性比率は約1割（データサイエンティスト協会調査）とまだ少数派だが、リモート・成果評価と相性が良く長く働きやすい
              </li>
              <li>
                ・未経験は<strong>データアナリスト→データサイエンティスト</strong>の段階的ルートが現実的。統計検定2級・DS検定が学習の指針になる
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}
          >
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. データサイエンティストとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. データアナリストとの違い・近接職種との整理</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 女性データサイエンティストの現状と働きやすさ</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 必要なスキル3領域（統計・エンジニアリング・ビジネス）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. データサイエンティストの年収相場（出典付き）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 求人動向と将来性</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 役立つ資格（統計検定・DS検定）</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. 未経験からの段階的キャリアルート（アナリスト→DS）</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. データサイエンティストのキャリアパス</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. おすすめ転職エージェント</a></li>
              <li><a href="#sec11" className="hover:underline" style={{ color: "#0891b2" }}>11. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データサイエンティストとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              データサイエンティストは、統計学や機械学習を使ってビジネス課題をデータで解決する職種です。「売上を予測して在庫を最適化したい」「解約しそうな顧客を事前に見つけたい」といった課題に対し、データの収集・分析からモデル構築、施策提案までを一気通貫で担います。
            </p>
            <p>
              データサイエンティスト協会は、この職種に必要な力を<strong>ビジネス力・データサイエンス力・データエンジニアリング力</strong>の3つと定義しています。つまり「分析が得意な人」ではなく、「分析結果をビジネスの意思決定につなげられる人」がデータサイエンティストです。数字に強いだけでなく、現場の人と対話しながら課題を翻訳する力が求められるため、コミュニケーション力を強みにしたい人にも向いています。
            </p>
            <p>
              なお、分析基盤（データパイプライン）の構築を専門とする職種は<a href="/articles/data-engineer/" className="underline" style={{ color: "#0891b2" }}>データエンジニア</a>、機械学習モデルの実装・運用に特化する職種は<a href="/articles/ai-ml-career/" className="underline" style={{ color: "#0891b2" }}>AI・機械学習エンジニア</a>として別記事で解説しています。本記事は「ビジネス課題を分析で解く」データサイエンティスト職に絞って解説します。
            </p>
            <div
              className="rounded-xl border p-6 mt-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>
                データサイエンティストの主な業務
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>ビジネス課題のヒアリングと「分析できる問い」への変換（課題定義）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>SQL・Pythonによるデータ抽出・前処理・探索的分析</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>統計解析・仮説検定・A/Bテストの設計と評価</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>機械学習モデル（需要予測・離反予測・レコメンド等）の構築</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>分析結果の可視化・レポーティングと経営層・事業部門への提言</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>施策実行後の効果検証と改善サイクルの運用</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 アナリストとの違い */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データアナリストとの違い・近接職種との整理</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              求人票では「データアナリスト」「データサイエンティスト」が混同されがちですが、役割の重心が異なります。転職活動では求人タイトルではなく<strong>業務内容（集計・可視化中心か、モデリング・施策設計まで含むか）</strong>で見極めることが重要です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>職種</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>役割の重心</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>主なツール・スキル</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>データアナリスト</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>既存データの集計・可視化で「現状を把握」する。レポーティングが中心</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>SQL / Excel / BIツール（Tableau・Looker等）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>データサイエンティスト</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>統計・機械学習で「予測・最適化」し、課題解決の施策まで設計する</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Python / R / SQL / 統計学 / 機械学習ライブラリ</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>データエンジニア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>分析の土台となるデータ基盤・パイプラインを構築・運用する</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>SQL / クラウド（BigQuery等）/ ETL / Python</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>AI・機械学習エンジニア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>機械学習モデルをプロダクトに実装し、システムとして運用する</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Python / 深層学習 / MLOps / ソフトウェア開発</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              この違いはキャリア戦略上とても重要です。アナリストは統計・機械学習の要求水準が相対的に低く、未経験者の入口になりやすい一方、データサイエンティストは年収水準が高い代わりに統計学とモデリングの実力が問われます。だからこそ、<strong>アナリストで実務経験を積みながら統計を学び、データサイエンティストへステップアップする</strong>のが王道ルートです（詳しくは<a href="#sec8" className="underline" style={{ color: "#0891b2" }}>8章</a>）。
            </p>
            <p>
              データエンジニアの仕事内容は<a href="/articles/data-engineer/" className="underline" style={{ color: "#0891b2" }}>データエンジニア転職ガイド</a>、機械学習エンジニアは<a href="/articles/ai-ml-career/" className="underline" style={{ color: "#0891b2" }}>AI・機械学習キャリアガイド</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 女性の現状 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性データサイエンティストの現状と働きやすさ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              データサイエンティスト協会の会員調査によると、日本のデータサイエンティストの女性比率は<strong>2019年調査で13%</strong>、2021年11月の調査では<strong>男女比およそ9:1</strong>と、約1割にとどまっています。IT業界全体の女性比率（約2割）と比べても低く、ロールモデルが少ないのが現状です。
            </p>
            <p className="text-sm">
              出典: 一般社団法人データサイエンティスト協会「Data of DataScientest vol.1」・会員向け調査（2026年6月参照）
            </p>
            <p>
              一方で、これは「女性が活躍できない職種」という意味ではありません。むしろ深刻な人材不足（有効求人倍率11.88倍・厚労省job tag令和6年度）を背景に、女性データ人材の採用・育成に積極的な企業が増えており、少数派であることがかえって希少価値になりやすい局面です。働き方の面でも、次の特徴があります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>1. 分析業務はリモートと相性が良い</h3>
              <p className="text-text-light text-sm leading-relaxed">データ分析はPCとクラウド環境があれば場所を選ばず、リモート可の求人が多い領域です。通勤負担を減らし、育児・介護と両立しやすい働き方を選べます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>2. 成果がアウトプットで可視化される</h3>
              <p className="text-text-light text-sm leading-relaxed">分析レポート・モデルの精度・施策の効果など成果が客観的に残るため、労働時間の長さではなく成果で評価されやすく、時短勤務でも実力が認められます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>3. 統計・分析の知識は陳腐化しにくい</h3>
              <p className="text-text-light text-sm leading-relaxed">流行のツールは変わっても、統計学・実験計画・因果推論といった土台の知識は長く通用します。産休・育休のブランクがあっても復帰しやすいスキル資産です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>4. ビジネス職の経験を活かせる</h3>
              <p className="text-text-light text-sm leading-relaxed">営業・マーケ・企画などの経験は「ビジネス力」としてそのまま武器になります。文系出身・異職種出身の女性が現場理解を強みに活躍している職種です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 スキル3領域 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキル3領域（統計・エンジニアリング・ビジネス）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              データサイエンティスト協会のスキルチェックリストでは、必要な力を<strong>データサイエンス力・データエンジニアリング力・ビジネス力</strong>の3領域で定義しています。3つすべてを最初から極める必要はなく、転職市場では「3領域をバランスよく＋どれか1つを強みに」が評価されます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>スキル領域</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>具体的な内容</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>学習の目安</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>データサイエンス力<br /><span className="font-normal text-xs">（統計・数学）</span></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>記述統計・推測統計・仮説検定・回帰分析・機械学習の基礎理論・実験計画（A/Bテスト）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>統計検定2級レベルが一つの基準。検定・回帰を「説明できる」レベルまで</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>データエンジニアリング力<br /><span className="font-normal text-xs">（実装）</span></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>SQLでのデータ抽出・Python（pandas / scikit-learn）での前処理・分析・可視化、Git、クラウドDWHの基礎</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>SQLは必須中の必須。Pythonは公開データで分析を一通り再現できるレベルまで</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>ビジネス力<br /><span className="font-normal text-xs">（課題解決）</span></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>課題定義・仮説思考・KPI設計・分析結果を意思決定につなげる提案力・ドキュメンテーション</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>現職の業務知識がそのまま武器に。「分析で何の意思決定を変えたいか」を語れるように</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-light mt-3">
            出典: 一般社団法人データサイエンティスト協会 スキルチェックリスト（2026年6月参照）をもとに当サイト作成
          </p>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>学習リソースの選び方</h3>
            <p className="text-sm text-text-light leading-relaxed">
              エンジニアリング領域のうち、Pythonの学習ロードマップは<a href="/articles/python-career/" className="underline" style={{ color: "#0891b2" }}>Pythonエンジニアのキャリアガイド</a>、SQL・データベースの基礎は<a href="/articles/sql-database/" className="underline" style={{ color: "#0891b2" }}>SQL・データベーススキルガイド</a>で詳しく解説しています。データサイエンティスト志望なら「SQL→統計→Python」の順で固めるのが遠回りに見えて最短です。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 年収 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データサイエンティストの年収相場（出典付き）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              転職サービスdodaの職種別平均年収ランキングによると、データサイエンティストの平均年収は<strong>556万円</strong>。厚生労働省の職業情報提供サイトjob tagでは<strong>611.9万円</strong>（令和7年時点の賃金データ）とされています。dodaの正社員全体の平均年収429万円（2025年12月発表「平均年収ランキング2025」）と比べると、120万〜180万円ほど高い水準です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>平均年収</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>出典</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>全体平均</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>556万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>doda 職種別平均年収ランキング</td></tr>
                <tr style={{ backgroundColor: "#f8fafb" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>全体平均（公的統計）</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>611.9万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>厚生労働省 job tag（令和7年）</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約480万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>doda（年代別）</td></tr>
                <tr style={{ backgroundColor: "#f8fafb" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約644万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>doda（年代別）</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約709万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>doda（年代別）</td></tr>
                <tr style={{ backgroundColor: "#f8fafb" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>参考: 正社員全体</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>429万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>doda 平均年収ランキング2025</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-light mt-3">
            出典: doda「平均年収ランキング（職種別）」・パーソルキャリア「平均年収ランキング2025」・厚生労働省 職業情報提供サイトjob tag「データサイエンティスト」（いずれも2026年6月参照）
          </p>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>モデリングまで担う</strong>: 集計・可視化中心から、予測モデル構築・効果検証設計まで踏み込むと評価が一段上がる</li>
              <li>② <strong>ドメイン×データの掛け算</strong>: 金融・医療・小売など業界知識との掛け合わせで希少人材になる</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>: 職種の定義が曖昧な分、市場価値の客観評価と交渉が特に効く職種</li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            他のIT職種との年収比較は<a href="/articles/salary-by-job/" className="underline" style={{ color: "#0891b2" }}>職種別年収ガイド</a>で一覧にしています。
          </p>
        </div>
      </section>

      {/* sec6 求人動向 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向と将来性</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              厚生労働省の職業情報提供サイトjob tagによると、データサイエンティストの有効求人倍率は<strong>11.88倍（令和6年度）</strong>。求職者1人に対して10件以上の求人がある計算で、IT職種の中でも際立った売り手市場です。就業者数は79,260人（令和2年国勢調査ベース）とまだ少なく、需要に供給が追いついていません。
            </p>
            <p>
              背景には、経済産業省「IT人材需給に関する調査」が示した、2030年に最大79万人のIT人材が不足するという試算があります。中でもAI・データ分析を担う先端IT人材の不足は深刻とされ、生成AIの業務活用が広がった現在は「AIの出力を統計的に評価できる人材」「データで意思決定を設計できる人材」の価値がさらに高まっています。
            </p>
            <p>
              採用が活発なのは、コンサルティングファーム・事業会社のデータ活用部門（小売・金融・製造・ヘルスケア）・Web/SaaS企業の3つ。特に事業会社は「アナリスト出身でビジネスがわかるデータ人材」を求める傾向が強く、異職種出身者にもチャンスが広がっています。一方で、生成AIの普及により単純な集計・レポーティング業務は自動化が進むため、<strong>課題定義と統計的評価ができる人材</strong>への需要シフトが進む見込みです。
            </p>
            <p className="text-sm">
              出典: 厚生労働省 職業情報提供サイトjob tag「データサイエンティスト」・経済産業省「IT人材需給に関する調査」（いずれも2026年6月参照）
            </p>
          </div>
        </div>
      </section>

      {/* sec7 資格 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">役立つ資格（統計検定・DS検定）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              データサイエンティストに必須資格はありませんが、体系的な学習の指針・知識の証明として実在する代表的な検定が2つあります。未経験からの転職では「学習の本気度」を示す材料にもなります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>資格</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>主催・概要</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>受験料・形式</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>統計検定2級</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>日本統計学会公式認定。大学基礎課程レベルの統計学（推定・検定・回帰など）。データサイエンス力の土台の証明として評価が定着</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>CBT方式・一般7,000円（学割5,000円）。全国の会場で随時受験可</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>データサイエンティスト検定<br />リテラシーレベル（DS検定）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>一般社団法人データサイエンティスト協会主催。スキルチェックリストver.6に基づき、データサイエンス・データエンジニアリング・ビジネスの3領域＋基盤を網羅的に出題</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>CBT方式・100問100分。一般10,000円／学生5,000円（税抜）。2026年は6月・11月に実施</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-light mt-3">
            出典: 統計検定公式サイト・一般社団法人データサイエンティスト協会 DS検定公式ページ（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              学習順序としては、まず<strong>DS検定で全体像をつかみ、統計検定2級で統計の土台を固める</strong>のがおすすめです。ただし採用選考で最終的に評価されるのは、SQL・Pythonを使った分析の実績（ポートフォリオや業務での分析事例）です。資格はゴールではなく、学習のマイルストーンとして使いましょう。
            </p>
          </div>
        </div>
      </section>

      {/* sec8 段階的キャリアルート */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験からの段階的キャリアルート（アナリスト→DS）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              完全未経験からいきなりデータサイエンティストを目指すのは、統計・実装・ビジネスの3領域を同時に証明する必要があり難易度が高めです。現実的なのは、<strong>データアナリスト（または現職のデータ活用担当）を経由する2段階ルート</strong>。1段目で実務経験を作り、2段目でモデリングスキルを上乗せします。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "SQL・Excel/BIツールを習得する", "まずSQLでのデータ抽出と、Excel・BIツール（Tableau等）での集計・可視化を習得。データを「触れる」状態になることが最初の関門です。学習期間の目安は2〜3カ月。"],
              ["STEP2", "データアナリスト職 or 社内のデータ担当になる", "未経験可のアナリスト求人、マーケティング・営業企画のデータ分析担当、現職での分析業務の巻き取りなど、「データで意思決定に関わった実務」を作ります。現職の業務知識が使える社内異動は特に有効です。"],
              ["STEP3", "統計学を体系的に学ぶ", "実務と並行して統計検定2級レベル（推定・検定・回帰分析）を学習。「なぜその分析手法を選ぶのか」を説明できることが、アナリストとDSの分水嶺になります。"],
              ["STEP4", "Pythonで分析を再現できるようにする", "pandasでの前処理、scikit-learnでの予測モデル構築、matplotlibでの可視化まで。公開データ（官公庁統計・Kaggle等）で分析プロセスを一通り再現できるレベルが目標です。"],
              ["STEP5", "分析実績をポートフォリオ化する", "業務での分析事例（課題→手法→結果→意思決定への影響）を整理し、公開できるものはNotebookとしてまとめます。「ビジネス成果につながった分析」が最強の実績です。"],
              ["STEP6", "データサイエンティスト職へ転職する", "アナリスト実務＋統計＋Pythonがそろえば、ジュニアDSポジションに十分挑戦できます。IT特化型エージェントで「モデリングまで任せてもらえる求人か」を見極めて応募しましょう。"],
            ].map(([step, title, desc], i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d1dce5" }}>
                <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>{step}</span>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            STEP1〜STEP4の技術学習は、<a href="/articles/sql-database/" className="underline" style={{ color: "#0891b2" }}>SQL・データベーススキルガイド</a>と<a href="/articles/python-career/" className="underline" style={{ color: "#0891b2" }}>Pythonエンジニアのキャリアガイド</a>も参考にしてください。
          </p>
        </div>
      </section>

      {/* sec9 キャリアパス */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データサイエンティストのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>データサイエンティストは「統計×実装×ビジネス」の交差点にいるため、その後のキャリアの広がりが大きい職種です。代表的な進路は次の4つです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>分析の専門性を深める</h3><p className="text-sm text-text-light">シニアDS／リードDSとして、因果推論・実験設計・高度なモデリングの専門家へ。コンサルや研究開発寄りのポジションで高年収を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>機械学習エンジニアへ</h3><p className="text-sm text-text-light">モデルのプロダクト実装・MLOpsへ軸足を移す道。エンジニアリングが好きな人向け。詳しくは<a href="/articles/ai-ml-career/" className="underline" style={{ color: "#0891b2" }}>AI・機械学習キャリアガイド</a>へ。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>データ組織のマネジメント</h3><p className="text-sm text-text-light">アナリティクスマネージャー／データ部門責任者として、分析チームとデータ戦略をリードする道。ビジネス力が強い人に向いています。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>事業側・独立へ</h3><p className="text-sm text-text-light">プロダクトマネージャーや事業企画、フリーランスの分析顧問へ。データで意思決定できる人材はどの事業部門でも重宝されます。</p></div>
          </div>
        </div>
      </section>

      {/* sec10 おすすめ転職エージェント */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績が光ります。スピーディーなマッチングで、最短2週間での内定実績も。年収交渉力にも定評があります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>
                  女性特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介してくれるため、長期的なキャリア形成に最適。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
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
            style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}
          >
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">
              複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#f97066" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec11" className="py-10">
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

      {/* 出典一覧 */}
      <section className="py-6">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-3">本記事の出典</h2>
            <ul className="space-y-1 text-xs text-text-light">
              <li>・doda「平均年収ランキング（職種別）」・パーソルキャリア「平均年収ランキング2025」（2026年6月参照）</li>
              <li>・厚生労働省 職業情報提供サイトjob tag「データサイエンティスト」（2026年6月参照）</li>
              <li>・一般社団法人データサイエンティスト協会 スキルチェックリスト・DS検定公式ページ・会員向け調査（2026年6月参照）</li>
              <li>・統計検定公式サイト（日本統計学会公式認定）（2026年6月参照）</li>
              <li>・経済産業省「IT人材需給に関する調査」（2026年6月参照）</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/data-engineer/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                データエンジニア転職ガイド
              </h3>
              <p className="text-sm text-text-light">分析を支えるデータ基盤の専門職</p>
            </a>
            <a
              href="/articles/ai-ml-career/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                AI・機械学習キャリアガイド
              </h3>
              <p className="text-sm text-text-light">MLエンジニアへの道筋を解説</p>
            </a>
            <a
              href="/articles/python-career/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                Pythonエンジニアのキャリア
              </h3>
              <p className="text-sm text-text-light">データ分析にも必須のPython</p>
            </a>
            <a
              href="/articles/salary-by-job/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                職種別年収ガイド
              </h3>
              <p className="text-sm text-text-light">IT職種の年収を横断比較</p>
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
