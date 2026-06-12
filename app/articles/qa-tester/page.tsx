import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性QAエンジニア・テスター転職ガイド｜年収・未経験からのキャリアラダー【2026年】",
  description:
    "女性QAエンジニア・テスターの転職ガイド。テスター350万〜500万円、QAエンジニア400万〜600万円、自動化エンジニア・SDETは700万円超の求人例まで、段階別の年収相場を出典付きで解説。JSTQB資格の合格率、テスト自動化でのステップアップ戦略、AI時代のQA職の変化、未経験からの参入実態まで2026年の実データでまとめました。",
  alternates: { canonical: "/articles/qa-tester/" },
  openGraph: {
    title: "女性QAエンジニア・テスター転職ガイド｜年収・未経験からのキャリアラダー【2026年】",
    description:
      "テスター→QAエンジニア→自動化エンジニアの段階別年収、JSTQB資格、AI時代のQA職の変化を実データ・出典付きで解説。未経験女性の入口職種としての現実も率直に。",
    url: "https://women-engineer.com/articles/qa-tester/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性QAエンジニア・テスター転職ガイド｜年収・未経験からのキャリアラダー【2026年】",
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
    "女性QAエンジニア・テスターの段階別年収相場・JSTQB資格・テスト自動化でのキャリアアップ・AI時代のQA職の変化を実データと出典付きで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/qa-tester/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "QAエンジニアとテスターの違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "テスターは作成済みのテストケースに沿ってテストを実行し、バグを報告する役割が中心です。QAエンジニアはテスト計画・テスト設計から品質基準の策定、開発プロセスの改善まで「品質保証」全体を担います。年収もテスター（手動テスト中心）が350万〜500万円程度なのに対し、QAエンジニアは400万〜600万円程度と10〜15%高い傾向です。テスターからスタートしてテスト設計・自動化へ業務範囲を広げ、QAエンジニアへステップアップするのが一般的なキャリアラダーです。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもQAエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "なれます。QA・テスト職はIT職種の中でも未経験歓迎求人が多く、プログラミング経験がなくても「仕様どおりに動くか確認する」テスト実行から入れるため、エンジニア職の現実的な入口です。未経験・新卒の初年度年収は370万〜450万円程度が目安です。ただしテスト実行だけを続けても年収は伸びにくいため、入社後1〜2年でJSTQB Foundation Levelを取得し、テスト設計・テスト自動化へ業務を広げる計画を最初から持っておくことが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "QAエンジニア・テスターの年収はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "手動テスト中心のテスターは350万〜500万円、QAエンジニアは400万〜600万円が目安です。レバテックキャリアの求人データではテストエンジニアの平均年収426万円に対しQAエンジニアは481万円と差があります。テスト自動化エンジニア・SDETになると大きく上がり、SET（Software Engineer in Test）で年収701万〜1,200万円という求人例もあります。QAリード・マネージャー層は700万〜900万円以上が目安で、「どの段階まで登るか」で年収が大きく変わる職種です。",
      },
    },
    {
      "@type": "Question",
      name: "JSTQB資格は取るべきですか？難易度はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QA職でキャリアを作るなら取得をおすすめします。JSTQBは国際資格ISTQBと相互認証されている日本のテスト技術者資格で、入門のFoundation Levelは2025年度の合格率63.72%（受験者4,013名）、累計では70.30%と、計画的に学習すれば未経験からでも十分合格できる難易度です。上位のAdvanced Levelはテストマネジメント41.76%、テストアナリスト38.61%（いずれも2025年度）と難しくなりますが、その分テスト設計力の客観的な証明になり、転職市場での評価につながります。",
      },
    },
    {
      "@type": "Question",
      name: "AIの普及でQAエンジニアの仕事はなくなりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "単純なテスト実行はAI・自動化ツールによる代替が進みますが、QAという仕事自体はむしろ重要性が増しています。AIがコードを書く時代には生成されたコードの品質を保証する工程がボトルネックになるためです。ISTQB/JSTQBにもAIテスティング（CT-AI）という専門資格が新設されています。手動テストの実行だけにとどまるリスクは高い一方、テスト設計・自動化・品質戦略を担えるQA人材の需要は続く見込みで、「AIを使いこなして品質を保証する側」に回ることが重要です。",
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
              { label: "QAエンジニア・テスター転職ガイド" },
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
              女性QAエンジニア・テスター転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収・未経験からのキャリアラダーを実データで解説【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="pt-8">
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
                ・QA・テスト職は<strong>未経験女性のIT転職の入口として現実的</strong>。プログラミング経験ゼロでもテスト実行から入れる（初年度370万〜450万円程度）
              </li>
              <li>
                ・ただし<strong>手動テストの実行だけを続けると年収350万〜500万円で頭打ち</strong>になりやすい。AI・自動化ツールによる代替リスクも最も高い層
              </li>
              <li>
                ・<strong>JSTQB資格＋テスト自動化スキル</strong>でQAエンジニア（400万〜600万円）→自動化エンジニア・SDET（700万円超の求人例あり）→QAリード（700万〜900万円以上）へ登るキャリアラダーを最初から設計するのが成功パターン
              </li>
              <li>
                ・AI時代は品質保証の重要性がむしろ増しており、<strong>「AIを使って品質を保証する側」のQA人材</strong>の需要は続く見込み
              </li>
            </ul>
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. QAエンジニア・テスターとは（仕事内容と違い）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 未経験女性の入口として現実的な理由と注意点</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 年収相場（テスター→QA→自動化のラダー別）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 「テスター止まり」を避けるステップアップ戦略</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. JSTQB資格の実データ（合格率・活かし方）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 求人動向とAI時代のQA職の変化</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 未経験からQAエンジニアになるロードマップ</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">QAエンジニア・テスターとは（仕事内容と違い）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              QA（Quality Assurance＝品質保証）エンジニア・テスターは、ソフトウェアが「仕様どおりに、安全に動くこと」を保証する職種です。リリース前の製品をテストしてバグを見つけるだけでなく、どこにリスクがあるかを分析してテストを設計し、開発プロセス自体を改善して「そもそもバグを作り込まない」仕組みをつくるところまでが守備範囲です。
            </p>
            <p>
              「テスター」と「QAエンジニア」は混同されがちですが、担当範囲が異なります。<strong>テスター</strong>は用意されたテストケース（確認手順書）に沿ってテストを実行し、結果やバグを報告する役割が中心。<strong>QAエンジニア</strong>はその上流にあたるテスト計画・テスト設計・品質基準の策定・自動化の導入・品質データの分析までを担います。この業務範囲の違いがそのまま年収差になっており、QAエンジニアはテスターより年収が10〜15%ほど高い傾向です（出典: ウィルオブテック「QAエンジニアの年収」2026年6月参照）。
            </p>
            <div
              className="rounded-xl border p-6 mt-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>
                キャリアラダー（下から上へ登る職種）
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>STEP1 テスター</strong>: テストケースに沿ったテスト実行・バグ報告。未経験の入口</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>STEP2 QAエンジニア</strong>: テスト計画・テスト設計・品質分析。JSTQBが評価材料に</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>STEP3 テスト自動化エンジニア / SDET</strong>: コードでテストを自動化。開発者並みの待遇</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>STEP4 QAリード / QAマネージャー</strong>: 品質戦略の策定・チームマネジメント</span>
                </li>
              </ul>
            </div>
            <p>
              つまりQA・テスト職は「1つの職種」ではなく<strong>梯子（ラダー）状のキャリア</strong>です。どの段で立ち止まるかで年収も将来性も大きく変わる――これがこの記事全体を貫くポイントです。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 入口として現実的な理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験女性の入口として現実的な理由と注意点</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              QA・テスト職は、IT未経験の女性がエンジニアの世界に入る入口として、開発職よりハードルが低い現実的な選択肢です。doda・マイナビ転職などの大手求人サイトには「QAエンジニア・テスター」の職種カテゴリで業種未経験歓迎の求人が常時掲載されており、プログラミングスキルを問わないテスト実行ポジションから入れます（出典: doda 求人検索「QAエンジニア・テスター」区分、2026年6月参照）。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>1. プログラミング不要で始められる</h3>
              <p className="text-text-light text-sm leading-relaxed">
                テスト実行はコードを書かない業務から始まります。「仕様書を正確に読む」「手順どおりに確認する」「気づいた違和感を言語化して報告する」という、事務職・接客職で培った正確さやコミュニケーション力がそのまま活きます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>2. 開発現場を内側から学べる</h3>
              <p className="text-text-light text-sm leading-relaxed">
                テストを通じて仕様書・バグ管理・リリースフローなど開発の全工程に触れるため、働きながらIT知識が身につきます。ここから開発・自動化・PMへ進む人も多く、「キャリアの起点」になる職種です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>3. 残業が比較的少なく両立しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">
                テストは計画に沿って進む工程のため、突発対応が比較的少なく、時短・リモートと組み合わせやすい働き方ができます。リリース直前は忙しくなるものの、業務の繁閑が読みやすいのは育児との両立でも利点です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>4. 「品質に対する視点」が評価資産になる</h3>
              <p className="text-text-light text-sm leading-relaxed">
                ユーザー視点での違和感の発見やドキュメントの正確さは、経験を積むほど評価される専門性です。テスト設計の考え方（JSTQBで体系化されている）は流行に左右されにくく、長く通用するスキルになります。
              </p>
            </div>
          </div>
          <div
            className="rounded-xl p-6 mt-6"
            style={{ backgroundColor: "#fff7ed", border: "2px solid #f97066" }}
          >
            <h3 className="text-lg font-bold mb-3" style={{ color: "#f97066" }}>ただし、ここに注意</h3>
            <p className="text-sm text-text-light leading-relaxed">
              入りやすさの裏返しとして、<strong>手動テストの実行だけを何年続けても年収はほとんど上がりません</strong>。テスター（手動中心）の年収帯は350万〜500万円にとどまり（出典: ウィルオブテック、2026年6月参照）、さらに単純なテスト実行はAI・自動化ツールによる代替が最も進みやすい領域です。「テスターとして入る」こと自体は合理的ですが、<strong>入社後1〜2年でテスト設計・自動化へ業務を広げる前提</strong>でキャリアを設計してください。具体策はこの後のセクションで解説します。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 年収 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収相場（テスター→QA→自動化のラダー別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              QA・テスト職の年収は「ラダーのどの段にいるか」でほぼ決まります。下表は2026年6月時点で確認できる各種データをラダー別に整理したものです（企業規模・地域・スキルにより変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>キャリア段階</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>テスター（手動テスト中心）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>350万〜500万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>未経験・初年度は370万〜450万円程度</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>QAエンジニア（テスト設計・品質改善）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>400万〜600万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>求人データ平均481万円（レバテックキャリア・2025年1月時点）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>テスト自動化エンジニア / SDET</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>600万円〜</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>SET職で701万〜1,200万円の求人例あり。開発者並みの待遇</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>QAリード / QAマネージャー</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>700万〜900万円以上</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>QAマネージャーで570万〜1,125万円の求人例あり</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3 leading-relaxed">
            出典: ウィルオブテック「QAエンジニアの年収は低い？」（2026年6月参照）／レバテックキャリア「テストエンジニアの平均年収・給料の統計」掲載求人データ（2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              参考値として、レバテックキャリアの統計では<strong>テストエンジニアの平均年収426万円・中央値450万円</strong>で、エンジニア全体の平均504万円より78万円低い水準です。一方、同社データで<strong>QAエンジニアは平均481万円</strong>と、同じ「テスト系」でも業務範囲の違いで55万円の差がついています（出典: レバテックキャリア、2026年6月参照）。また、マイナビエージェントは厚生労働省「令和5年賃金構造基本統計調査」をもとにテストエンジニアの平均年収を557.6万円と紹介していますが、これは品質管理系職種を広く含む統計のため高めに出ている点に注意が必要です（出典: マイナビエージェント、2026年6月参照）。
            </p>
            <p>
              重要なのは、<strong>同じ「QA・テスト職」という名前でも、手動テスト実行のままだと400万円台前半、自動化を担えると700万円超</strong>という二極化がすでに求人票に表れていることです。職種別の年収比較は<a href="/articles/salary-by-job/" className="underline" style={{ color: "#0891b2" }}>職種別年収ガイド</a>でも詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 ステップアップ戦略 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">「テスター止まり」を避けるステップアップ戦略</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              前のセクションで見たとおり、手動テストの実行にとどまる限り年収350万〜500万円の壁を越えるのは難しいのが実態です。逆に言えば、<strong>「テスト設計」と「テスト自動化」の2つを身につければ、QA職は年収600万円以上を狙える専門職に変わります</strong>。戦略は次の2軸です。
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>軸1: JSTQBでテスト設計力を証明する（知識の縦軸）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                テスト実行者と設計者を分けるのは「なぜこのテストをするのか」を説明できるかどうかです。境界値分析・同値分割・デシジョンテーブルといったテスト設計技法は、JSTQB認定テスト技術者資格（次セクションで詳述）のシラバスで体系的に学べます。実務でテストケースを「こなす」段階から、「自分で作り、過不足を判断する」段階に上がることが、テスター→QAエンジニアへの昇格・転職の必須条件です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>軸2: テスト自動化でコードを書けるQAになる（技術の横軸）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                Playwright・Selenium・AppiumなどのツールとPython/TypeScriptあたりの言語でE2Eテストを自動化できると、市場価値が一段跳ね上がります。CI/CD（テストをリリースフローに組み込む仕組み）まで扱えるSDET/SET人材は希少で、レバテックキャリアには年収701万〜1,200万円のSET求人も掲載されています（2026年6月参照）。最初の一歩はノーコード自動化ツールでも構いません。実際「ノーコード・ローコードツールを活用したテスト自動化」を掲げる求人も出ており、コードに自信がない段階からでも自動化キャリアに入れます。
              </p>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>現実的な3年プラン（例）</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>1年目</strong>: テスト実行で現場経験＋JSTQB Foundation Level取得（合格率6〜7割、未経験でも到達可能）</li>
              <li>② <strong>2年目</strong>: テストケース作成・テスト設計に参画＋ノーコード自動化ツールに触れる</li>
              <li>③ <strong>3年目</strong>: Playwright等での自動化実績を作り、QAエンジニア／自動化エンジニアとして転職・昇格交渉</li>
            </ul>
            <p className="text-sm text-text-light mt-3 leading-relaxed">
              プログラミングの基礎固めには<a href="/articles/cert-kihonjoho/" className="underline" style={{ color: "#0891b2" }}>基本情報技術者試験</a>の学習も有効です。また、自動化エンジニアとして開発寄りの選考を受ける場合は<a href="/articles/coding-test/" className="underline" style={{ color: "#0891b2" }}>コーディングテスト対策</a>も視野に入れておきましょう。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 JSTQB */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">JSTQB資格の実データ（合格率・活かし方）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              JSTQB認定テスト技術者資格は、国際的なソフトウェアテスト資格<strong>ISTQB</strong>（International Software Testing Qualifications Board）と相互認証されている日本のQA系定番資格で、一般財団法人日本科学技術連盟がパートナーとして試験を実施しています。2023年10月以降はCBT方式でいつでも受験でき、働きながらでも挑戦しやすくなりました（出典: JSTQB公式サイト、2026年6月参照）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>試験</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>2025年度 受験者数</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>2025年度 合格率</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>累計合格率</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>Foundation Level（入門）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>4,013名</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>63.72%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>70.30%</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>Advanced Level テストマネジメント</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>340名</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>41.76%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>35.34%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>Advanced Level テストアナリスト</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>518名</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>38.61%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>39.27%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3 leading-relaxed">
            出典: 日本科学技術連盟「JSTQB認定テスト技術者資格 試験実施結果」（2026年6月参照）※累計はCBT方式移行後の集計
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              入門のFoundation Levelは合格率6〜7割で、テスト実務の経験がなくてもシラバス（公式に無料公開）と市販テキストの学習で合格可能です。<strong>未経験転職の応募書類で「学習意欲と基礎知識」を客観的に示せる数少ない材料</strong>であり、QA職を狙うなら最初に取るべき資格と言えます。一方、Advanced Levelは合格率35〜42%と難易度が上がり、テストアナリストはテスト設計の専門性、テストマネジメントはQAリードへの昇格でそれぞれ強い武器になります。
            </p>
            <p>
              なお、JSTQB/ISTQBには<strong>AIテスティング（CT-AI）</strong>・アジャイルテスト（CTFL-AT）・モバイルアプリテスト（CT-MAT）・自動車ソフトウェアテスト（CT-AuT）などの専門資格（Testing Specialist）も整備されています（出典: JSTQB公式サイト、2026年6月参照）。AI関連の品質保証資格が公式に存在すること自体が、次セクションで述べる「AI時代のQA」の方向性を示しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 求人動向とAI時代 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向とAI時代のQA職の変化</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              2026年のQA求人市場は、はっきりと「自動化シフト」が進んでいます。大手求人媒体では手動テスト中心の求人が依然として数の上では多い一方、レバテックキャリアのテストエンジニア求人の年収分布は400万〜500万円帯がボリュームゾーンで、600万円以上の求人はSET・自動化・QAマネジメント系に偏っています（出典: レバテックキャリア、2026年6月参照）。アクセンチュアなど大手コンサルもSDET（Software Development Engineer in Test）職を常時採用しており、「テストコードを書ける開発者」としてのQA人材の需要は今後も拡大が見込まれます。
            </p>
            <h3 className="text-xl font-bold mt-8 mb-3">AIはQAの仕事を奪うのか</h3>
            <p>
              結論から言うと、<strong>「テスト実行」は代替が進み、「品質保証」はむしろ重要になる</strong>というのが2026年時点の冷静な見立てです。
            </p>
            <p>
              生成AIやコーディングエージェントによる開発が広がるにつれ、AIが書いたコードの品質を誰がどう保証するかが開発全体のボトルネックになりつつあり、QAの役割は「最後に合否判定する検査」から「最初から品質が落ちない仕組みを設計する」方向へ広がっています（出典: エンジニアtype「AI時代の開発は『品質保証』がボトルネックに」、2026年6月参照）。日本総合研究所も、生成AIで作られたソフトウェアはバグの発生傾向が従来の統計的予測に乗りにくく、品質保証の進化とQA組織・エンジニアの真価が問われると指摘しています（出典: 日本総合研究所「生成AIが変革するソフトウェア品質保証の未来」、2026年6月参照）。
            </p>
            <p>
              つまりリスクとチャンスは表裏一体です。<strong>手順書どおりの手動テストだけを続ける働き方はAI代替リスクが最も高い</strong>一方、AIツールを使ってテストを設計・自動化し、AIが作ったものの品質に責任を持てる人材は希少性が増していきます。前述のCT-AI資格の新設も含め、QA職は「AIに置き換えられる側」と「AIを使いこなす側」への分岐点にあり、この記事で繰り返してきたステップアップ戦略は、年収のためだけでなく雇用の安定のためにも必須になっています。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 未経験ロードマップ */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験からQAエンジニアになるロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              QA職は「先に就職して、働きながら学ぶ」が成立しやすい職種です。開発職のように転職前に長期の学習・ポートフォリオ作成は必須ではありません。次の順序が現実的です。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "ITの基礎用語を押さえる", "Webアプリの仕組み・バグ・リリースなどの基礎概念を書籍や無料教材で2〜4週間ほど学習。IT業界の全体像は入門ガイドも参考にしてください。"],
              ["STEP2", "JSTQB Foundation Levelの学習を始める", "公式シラバスは無料公開。テスト設計技法の基礎を学べば、面接で「テスト実行しかできない人」と差がつきます。在職中に取得できればベスト。"],
              ["STEP3", "未経験歓迎のQA・テスト求人に応募", "第三者検証会社・SaaS企業のQAアシスタントなどが入口。正確さ・報告の丁寧さ・前職での品質改善経験（事務のチェック業務等も可）をアピール。"],
              ["STEP4", "現場でテスト実行→テストケース作成へ", "1年目はテスト実行で経験を積みつつ、テストケースの作成・レビューに手を挙げて業務範囲を広げます。"],
              ["STEP5", "自動化ツールに触れる", "ノーコード自動化ツールから始め、PlaywrightなどコードベースのE2E自動化へ。社内の自動化プロジェクトには積極的に参加を。"],
              ["STEP6", "QAエンジニアとして転職・昇格交渉", "テスト設計＋自動化の実績が揃ったら、エージェント経由で市場価値を確認。400万円台から600万円台へのジャンプはこのタイミングで起きます。"],
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
          <p className="text-sm text-text-light leading-relaxed mt-6">
            未経験からのIT転職全般の進め方は<a href="/articles/beginner/" className="underline" style={{ color: "#0891b2" }}>未経験からエンジニアになる完全ガイド</a>を、QAと並ぶもう一つの入口職種については<a href="/articles/support-engineer/" className="underline" style={{ color: "#0891b2" }}>サポートエンジニア転職ガイド</a>をあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* おすすめ転職エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
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
      <section id="sec9" className="py-10">
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

      {/* 出典 */}
      <section className="py-6" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-lg font-bold mb-3">主な出典・参考データ</h2>
          <ul className="space-y-1 text-xs text-text-light leading-relaxed">
            <li>・ウィルオブテック「QAエンジニアの年収は低い？平均給料を超えるキャリアアップ戦略」（2026年6月参照）</li>
            <li>・レバテックキャリア「テストエンジニアの平均年収・給料の統計」（2026年6月参照）</li>
            <li>・マイナビエージェント「テストエンジニアの平均年収」※厚生労働省「令和5年賃金構造基本統計調査」に基づく（2026年6月参照）</li>
            <li>・一般財団法人日本科学技術連盟「JSTQB認定テスト技術者資格 試験実施結果」（2026年6月参照）</li>
            <li>・JSTQB公式サイト（資格体系・ISTQB相互認証・CT-AI等のTesting Specialist資格）（2026年6月参照）</li>
            <li>・エンジニアtype「AI時代の開発は『品質保証』がボトルネックに」（2026年6月参照）</li>
            <li>・日本総合研究所「生成AIが変革するソフトウェア品質保証の未来」（2026年6月参照）</li>
          </ul>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/beginner/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                未経験からエンジニアになる完全ガイド
              </h3>
              <p className="text-sm text-text-light">学習方法から求人選びまでの全体像</p>
            </a>
            <a
              href="/articles/support-engineer/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                サポートエンジニア転職ガイド
              </h3>
              <p className="text-sm text-text-light">QAと並ぶ未経験の入口職種</p>
            </a>
            <a
              href="/articles/salary-by-job/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                職種別年収ガイド
              </h3>
              <p className="text-sm text-text-light">エンジニア職種ごとの年収を比較</p>
            </a>
            <a
              href="/articles/cert-kihonjoho/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                基本情報技術者試験ガイド
              </h3>
              <p className="text-sm text-text-light">IT基礎力の証明に定番の国家試験</p>
            </a>
            <a
              href="/articles/coding-test/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                コーディングテスト対策ガイド
              </h3>
              <p className="text-sm text-text-light">自動化エンジニア選考の準備に</p>
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
