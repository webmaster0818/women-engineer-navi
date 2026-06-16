import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "40代女性エンジニアの転職ガイド｜年収相場・現実的な選択肢・強みの活かし方【2026年】",
  description:
    "40代女性エンジニアの転職を実データで解説。女性の転職入職率は40〜44歳10.2%・45〜49歳10.7%と同年代男性の約1.5〜1.8倍、転職者の約46%が賃金増（厚労省・令和6年雇用動向調査）。40代の年収相場、マネジメント/スペシャリスト/社内SEのキャリア戦略、未経験挑戦の現実的な選択肢まで出典付きで紹介します。",
  alternates: { canonical: "/articles/age-40s/" },
  openGraph: {
    title: "40代女性エンジニアの転職ガイド｜年収相場・現実的な選択肢・強みの活かし方【2026年】",
    description:
      "40代女性エンジニアの年収相場・転職市場・マネジメント/スペシャリスト/社内SEのキャリア戦略・未経験挑戦の現実的な選択肢を公的統計と実データで解説。",
    url: "https://women-engineer.com/articles/age-40s/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "40代女性エンジニアの転職ガイド｜年収相場・現実的な選択肢・強みの活かし方【2026年】",
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
    "40代女性エンジニアの年収相場・転職市場・マネジメント/スペシャリスト/社内SEのキャリア戦略・未経験挑戦の現実的な選択肢を公的統計と実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/age-40s/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "40代女性エンジニアでも転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "できます。厚生労働省「令和6年雇用動向調査」によると、女性の転職入職率は40〜44歳で10.2%、45〜49歳で10.7%と、同年代男性（6.8%・6.0%）を大きく上回ります。エン・ジャパンの分析でもミドル世代の転職者数は6年で2.45倍に増加。マネジメント経験や特定領域の専門性がある40代経験者は即戦力として需要が高く、IT人材は2030年に最大79万人不足するとの試算（経済産業省）もあるため、年齢だけを理由に門前払いされる市場ではなくなっています。",
      },
    },
    {
      "@type": "Question",
      name: "40代の転職で年収は上がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "上がる人が減る人より多数派です。厚生労働省「令和6年雇用動向調査」では、転職で賃金が増加した人は40〜44歳で45.9%（うち1割以上の増加は33.2%）、45〜49歳で46.4%。減少した人（29.0%・23.8%）を大きく上回り、45〜49歳の「増加−減少」の差22.6ポイントは全年齢階級でもトップクラスです。エン・ジャパンの調査でも2024年に転職した40代の52%が年収アップしています。マネジメント・上流工程の経験を職務経歴書で定量的に示し、エージェント経由で交渉するのが鉄則です。",
      },
    },
    {
      "@type": "Question",
      name: "40代女性エンジニアの年収相場はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "doda「平均年収ランキング2025」によると、40代全体の平均年収は517万円（40代女性は421万円）、職種別のエンジニア（IT/通信）は469万円です。実務経験のある40代なら、EM・PM・アーキテクトなどの求人は600万〜800万円台が中心的なレンジで、ハイクラス求人では1,000万円超もあります。一方、未経験からQA・ITサポートなどへ転身する場合は250万〜350万円程度からの再スタートが目安です。",
      },
    },
    {
      "@type": "Question",
      name: "40代未経験からITエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "不可能ではありませんが、20代・30代より明確に難易度が上がります。未経験可求人の多くは若手のポテンシャル採用を想定しており、開発職への直行は狭き門です。現実的なのはQA・テスター、ITサポート・ヘルプデスク、RPA・ノーコードによる業務改善、社内のDX推進担当など、前職の業務知識を活かしながらITに入る職種です。資格（ITパスポート→基本情報技術者）と学習実績で本気度を示し、年収ダウンを資金計画に織り込んだうえで挑戦しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "40代はマネジメントとスペシャリストのどちらを目指すべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "どちらにも需要がありますが、希少性で言えば女性マネジメント人材です。課長相当職に占める女性割合は12.3%（厚生労働省・令和6年度雇用均等基本調査）にとどまり、女性管理職比率の目標を掲げる企業ではリーダー経験のある40代女性エンジニアの採用ニーズが強い状況です。一方、マネジメントを望まない場合も、クラウド・セキュリティ・特定業務ドメインに強いスペシャリストやPM・上流工程人材の需要は高く、エン・ジャパンの調査では転職前年収600万円以上の層で「転職して年収が上がった職種」の2位が技術系（IT・Web・通信系）でした。どちらの路線でも「再現性のある実績」を示せれば年収は上げられます。",
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
          background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "40代女性エンジニアの転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              年代別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              40代女性エンジニアの転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収相場・現実的な選択肢・強みの活かし方【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>この記事の結論</h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>40代女性はデータ上「動けない年代」ではありません。</strong>女性の転職入職率は40〜44歳10.2%・45〜49歳10.7%で、同年代男性（6.8%・6.0%）の約1.5〜1.8倍（厚生労働省「令和6年雇用動向調査」）。ミドル世代の転職者数も6年で2.45倍に増えています（エン・ジャパン）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>年収の目安：</strong>40代全体の平均は517万円（女性421万円）、エンジニア（IT/通信）は469万円（doda「平均年収ランキング2025」）。経験者のEM・PM・アーキテクト求人は600万〜800万円台が中心。転職で賃金が増えた人は40〜44歳45.9%・45〜49歳46.4%と、減った人を大きく上回ります。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>経験者の主戦場は「マネジメント」「スペシャリスト」「社内SE」の3路線。</strong>課長相当職の女性割合は12.3%にとどまり、リーダー経験のある40代女性エンジニアは企業が「採りたいのに採れない」希少人材です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>未経験挑戦は正直ハードルが高い年代。</strong>開発職への直行は狭き門で、現実的な入口はQA・テスター、ITサポート、RPA・ノーコード活用など「前職の業務知識×IT」の職種。年収250万〜350万円程度からの再スタートを織り込んで設計しましょう。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}
          >
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 40代女性エンジニアの転職市場【実データ】</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 40代女性エンジニアの年収相場と賃金変動</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 40代の強みと企業からの評価のされ方</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 経験者のキャリア戦略（マネジメント／スペシャリスト／社内SE）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 40代未経験からのIT転職の現実と選択肢</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 家庭・介護と両立しながら長く働く戦略</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 40代の転職活動の進め方</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 転職市場 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">40代女性エンジニアの転職市場【実データ】</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「40代の転職は無理」という思い込みは、まずデータで崩しておきましょう。厚生労働省「令和6年雇用動向調査」によると、2024年の女性の転職入職率は<strong>40〜44歳で10.2%、45〜49歳で10.7%</strong>。同年代男性（6.8%・6.0%）の約1.5〜1.8倍で、40代女性の転職はむしろ同世代男性より活発です。10人に1人が1年間に転職している計算で、「40代で動くのは特別なこと」ではなくなっています。
            </p>
            <p>
              ミドル層の市場全体も拡大しています。エン・ジャパン『ミドルの転職』の転職者分析レポート2025によると、ミドル世代の転職者数は<strong>6年で2.45倍</strong>に増加。同社が転職コンサルタント200人に行った調査でも、約8割が2025年のミドル人材求人を「増加する」と予測し、その理由として「マネジメント経験と実務経験の両方を満たし、あと5〜10年働ける年代」への需要を挙げています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>10.2%</p>
              <p className="text-sm font-bold mt-2">40〜44歳女性の転職入職率</p>
              <p className="text-xs text-text-light mt-1">同年代男性は6.8%。45〜49歳も女性10.7%対男性6.0%</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>2.45倍</p>
              <p className="text-sm font-bold mt-2">ミドル世代の転職者数（6年間）</p>
              <p className="text-xs text-text-light mt-1">エン・ジャパン『ミドルの転職』の転職者分析より</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>79万人</p>
              <p className="text-sm font-bold mt-2">2030年のIT人材不足（最大）</p>
              <p className="text-xs text-text-light mt-1">経済産業省の試算。経験者の需要は構造的に強い</p>
            </div>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年齢階級</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>女性の転職入職率</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>男性の転職入職率</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>35〜39歳（参考）</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>10.5%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>7.9%</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40〜44歳</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>10.2%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>6.8%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>45〜49歳</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>10.7%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>6.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「令和6年雇用動向調査」、エン・ジャパン『ミドルの転職』転職者分析レポート2025・「2025年ミドルの求人動向」調査、経済産業省「IT人材需給に関する調査」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              さらにIT職種に限れば需要は突出しています。dodaの転職求人倍率（2026年4月）は全体2.38倍に対し<strong>エンジニア（IT・通信）は10倍超</strong>。日本のITエンジニアの女性比率は18.8%とまだ2割弱（ヒューマンリソシア調査）で、ダイバーシティ目標を掲げる企業にとって、実務経験とマネジメント適性を備えた40代女性エンジニアは「採りたいのに採れない」希少人材です。ただし40代の採用は「即戦力・再現性」が大前提。20代・30代のようなポテンシャル評価は基本的にないため、経験の棚卸しと見せ方が成否を分けます。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 年収相場 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">40代女性エンジニアの年収相場と賃金変動</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              doda「平均年収ランキング2025」（集計期間2024年9月〜2025年8月、約60万件）によると、40代全体の平均年収は<strong>517万円</strong>（40代男性604万円・40代女性421万円）。職種別のエンジニア（IT/通信）は<strong>469万円</strong>で全体平均（429万円）を上回ります。40代はキャリアの中で年収カーブが立つ年代であり、エンジニア経験者であればマネジメント・上流工程の経験次第で平均を大きく超えるレンジが狙えます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均年収・目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代全体（全職種）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>517万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>男性604万円・女性421万円</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>エンジニア（IT/通信）全体</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>469万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>全体平均429万円を40万円上回る</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代・EM/PM/アーキテクト</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>600万〜800万円台が中心</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ハイクラス求人では1,000万円超も</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代・未経験からの転職1年目</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>250万〜350万円程度</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>QA・ITサポート等の入口職種。再スタート前提</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: doda（パーソルキャリア）「平均年収ランキング2025」（2026年6月参照）。EM/PM/アーキテクトおよび未経験のレンジは公開求人水準をもとにした目安です。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              「40代の転職は年収が下がる」も半分は誤解です。厚生労働省「令和6年雇用動向調査」によると、転職で賃金が増加した人は<strong>40〜44歳で45.9%</strong>（うち1割以上の増加は33.2%）、<strong>45〜49歳で46.4%</strong>。減少した人（29.0%・23.8%）を大きく上回り、45〜49歳の「増加−減少」の差22.6ポイントは全年齢階級でもトップクラスです。エン・ジャパンの調査でも、2024年に『ミドルの転職』経由で転職した人の49%が年収アップし、年代別では<strong>40代の52%が年収増</strong>。同社の分析では、転職前年収600万円以上の層で「転職して年収が上がった職種」の2位が技術系（IT・Web・通信系）でした。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>40代で年収を上げる3つのレバー</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>マネジメント・上流経験を定量化する</strong>：「◯名規模のチームで◯件のリリースを主導」「予算◯◯万円のプロジェクト管理」など、規模と数字で語る</li>
              <li>② <strong>「替えの効かない専門性」を打ち出す</strong>：特定業務ドメイン（金融・医療・製造など）×技術の掛け合わせは40代最大の武器。若手には真似できない</li>
              <li>③ <strong>エージェント経由で交渉する</strong>：40代女性エンジニアは希少人材。提示額は「賃金増45.9〜46.4%」という相場を基準に評価する</li>
            </ul>
            <p className="text-sm text-text-light mt-4">
              年代別の詳しい年収データは<a href="/articles/salary-by-age/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>年代別年収ガイド</a>で解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 強み */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">40代の強みと企業からの評価のされ方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              40代の採用で企業が見るのは「この人は入社後、同じ成果をうちでも出せるか」という再現性です。20代の伸びしろ評価、30代の実務×ポテンシャル評価とは軸が異なり、<strong>過去の実績がそのまま商品</strong>になります。裏を返せば、20年前後のキャリアで積み上げてきたものを正しく言語化できれば、若手との競争にはならない土俵で戦えます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>40代女性エンジニアの4つの武器</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>マネジメント・育成経験</strong>：課長相当職の女性割合は12.3%。経験者は構造的に不足している</li>
                <li>・<strong>業務ドメイン知識</strong>：金融・医療・製造・公共など、特定業界のシステムを知り尽くしている強み</li>
                <li>・<strong>修羅場の経験</strong>：障害対応・炎上案件・大規模移行を乗り切った経験は若手にない判断力の証明</li>
                <li>・<strong>レガシー×モダンの両方が分かる</strong>：基幹システムの刷新・クラウド移行案件で橋渡しできる人材は希少</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>評価されにくいNGパターン</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・経験の羅列だけで「何ができる人か」が一言で伝わらない職務経歴書</li>
                <li>・「マネジメントも開発も何でもやります」と軸を絞らない応募</li>
                <li>・技術アップデートの形跡がない（最後の学習・資格が10年前）</li>
                <li>・前職の役職・年収を基準にした条件への固執。市場価値は役職ではなく再現可能な成果で決まる</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">出典: 厚生労働省「令和6年度雇用均等基本調査」（2026年6月参照）— 課長相当職の女性割合12.3%、部長相当職8.7%</p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              30代の戦略（実務×ポテンシャルの最終ゾーン）からどう接続するかは<a href="/articles/age-30s/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>30代女性エンジニアの転職ガイド</a>で解説しています。いま30代後半の方は、40代の評価軸を見据えた実績づくりを始めるのが先回りの一手です。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 経験者のキャリア戦略 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">経験者のキャリア戦略（マネジメント／スペシャリスト／社内SE）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              実務経験のある40代女性エンジニアの転職は、大きく3つの路線に整理できます。どれが優れているかではなく、<strong>「何を上げたいか（年収・専門性・働き方）」と「あと20年どう働きたいか」</strong>で選ぶのがポイントです。
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>① マネジメント路線：EM・PM・開発部門責任者へ</h3>
              <p className="text-sm text-text-light leading-relaxed">
                年収インパクトが最も大きい路線です。課長相当職の女性割合は12.3%・部長相当職は8.7%（厚生労働省・令和6年度雇用均等基本調査）にとどまり、女性管理職比率の目標を掲げる企業ではリーダー経験のある40代女性エンジニアの争奪戦が起きています。エン・ジャパンの調査でも、45〜55歳は「マネジメント経験と実務経験を満たし、あと5〜10年働ける年代」として求人増加の中心と分析されています。チームリード・育成・予算管理の経験は規模が小さくても具体的に書き出しましょう。詳しくは<a href="/articles/women-manager/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性エンジニアの管理職キャリアガイド</a>で解説しています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>② スペシャリスト路線：「替えの効かない専門性」を換金する</h3>
              <p className="text-sm text-text-light leading-relaxed">
                マネジメントを望まない場合の本命です。2026年時点で高単価なのはクラウドアーキテクチャ（AWS/GCP）、セキュリティ、AI・データ基盤、そして<strong>レガシー基幹システムのモダナイゼーション</strong>。特に最後の領域は、古い技術と新しい技術の両方を知る40代が最も強い市場です。エン・ジャパンの分析では、転職前年収600万円以上の層で年収が上がった職種の2位が技術系（IT・Web・通信系）で、上流工程・PM級の専門人材への需要の強さが裏付けられています。資格（AWS認定、情報処理安全確保支援士など）で専門性に客観性を持たせると、書類通過率が変わります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>③ 社内SE路線：事業会社で安定して長く働く</h3>
              <p className="text-sm text-text-light leading-relaxed">
                納期に追われる受託・SESから、事業会社の情報システム部門・DX推進部門へ移る路線です。年収の天井は①②より低めですが、残業が少なく腰を据えて働きやすいのが特徴で、「あと20年働く場所」として40代に人気があります。ベンダー側で培った開発・調達・ベンダーコントロールの経験はそのまま武器になり、業務部門との橋渡しができるコミュニケーション力は40代の経験値が活きる領域です。詳しくは<a href="/articles/internal-se/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>社内SEへの転職ガイド</a>で解説しています。
              </p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">出典: 厚生労働省「令和6年度雇用均等基本調査」、エン・ジャパン「2025年ミドルの求人動向」調査・「30代・40代の転職して年収が上がった職種ランキング」（いずれも2026年6月参照）</p>
        </div>
      </section>

      {/* sec5 未経験の現実 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">40代未経験からのIT転職の現実と選択肢</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ここは正直にお伝えします。<strong>40代未経験からの「開発エンジニア」への直行は、かなりの狭き門です。</strong>レバテック「IT人材白書2024」では未経験者を採用する企業が41.6%（検討中含め約7割）ありますが、その多くは20代〜30代前半のポテンシャル採用を想定しています。40代に伸びしろ評価はなく、「教育コストを回収できる若手」と同じ土俵で競うと勝ち目が薄いのが実情です。
            </p>
            <p>
              ただし、<strong>「IT業界で働く」まで広げれば現実的な入口はあります。</strong>ポイントは、ゼロからプログラミングで勝負しないこと。これまでの業務経験を持ち込める職種を選び、ITスキルは「掛け算の片側」として後から積み上げる設計にします。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>現実的な入口職種</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>向いている前職・特徴</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>QA・テスター</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>事務・品質管理・チェック業務の経験者。プログラミング不要で始められ、テスト設計へ昇格する道がある</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ITサポート・ヘルプデスク</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>接客・コールセンター・営業事務の経験者。対人スキルが評価され、社内SE補助へつながる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>RPA・ノーコード業務改善</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>経理・総務・営業企画など業務を知る人が最強。現職でツール導入を経験して実績化するのが近道</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>社内のDX推進・IT企画</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>転職せず現職の社内公募・異動でITキャリアを始める選択肢。40代では最もリスクが低い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>挑戦する場合の現実的な心構え</h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>年収250万〜350万円程度からの再スタートを織り込む</strong>：入口職種の求人水準は高くありません。家計の見通しを立ててから動く</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>資格で「本気度」を可視化する</strong>：ITパスポート→基本情報技術者の順で取得。40代は学習能力への疑念を先回りで潰す必要がある</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>「なぜ今ITか」を前職の文脈で語る</strong>：「業務でRPAに触れて改善の面白さを知った」など、動機と前職経験が一本の線でつながる説明を用意する</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>研修体制が明記された企業を選ぶ</strong>：未経験者を一から育てる体制（研修制度・OJT）の有無を求人票と面接で必ず確認する</span>
              </li>
            </ul>
          </div>
          <p className="text-text-light text-sm mt-3">出典: レバテック「IT人材白書2024」（2026年6月参照）。入口職種の年収レンジは公開求人水準をもとにした目安です。</p>
        </div>
      </section>

      {/* sec6 両立・長く働く */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">家庭・介護と両立しながら長く働く戦略</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              40代女性が前職を辞めた理由をデータで見ると、転職の動機がはっきりします。厚生労働省「令和6年雇用動向調査」によると、40〜44歳女性は<strong>「給料等収入が少なかった」が15.1%</strong>と具体的理由の中で最多。45〜49歳では<strong>「労働時間、休日等の労働条件が悪かった」が15.3%</strong>でトップです。つまり40代女性の転職は「やむを得ない退職」ではなく、<strong>待遇と働き方を良くするための能動的な行動</strong>が主流になっています。
            </p>
            <p>
              一方で40代特有の事情もあります。40〜44歳では「出産・育児」を理由とする離職が8.1%と、子育て期（小学生の壁を含む）がまだ続いている人が多いこと。そして45歳以降は親の介護が視野に入り始めます（45〜49歳の「介護・看護」離職は1.6%とまだ少数ですが、50代に向けて増えていく領域です）。<strong>介護や家庭の事情が本格化する前に、リモート・フレックスなど柔軟に働ける環境を確保しておく</strong>のが、40代の転職で最も合理的な働き方戦略です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>長く働ける環境の見極めポイント</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・リモート・フレックスの利用率と中抜け可否（制度の有無ではなく運用実態）</li>
                <li>・介護休業・時短勤務の取得実績と、利用者の評価・昇進事例</li>
                <li>・40代以上の女性社員・女性管理職が実際に在籍しているか</li>
                <li>・技術のアップデートを支援する制度（研修費・資格手当・学習時間）</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>50代以降を見据えた布石</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・「役職」より「ポータブルな実績」を貯める。会社が変わっても通用する成果で語れるようにする</li>
                <li>・ドメイン知識×ITの専門性は年齢で陳腐化しにくい資産。深掘りを続ける</li>
                <li>・ブランクからの復帰・働き方の再設計は早いほど選択肢が多い</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">出典: 厚生労働省「令和6年雇用動向調査」（2026年6月参照）— 転職入職者が前職を辞めた理由（女性・年齢階級別）</p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              定年まで見据えたキャリア設計は<a href="/articles/long-career-tips/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>エンジニアを長く続けるコツ</a>、育児などでブランクがある方の復帰戦略は<a href="/articles/return-to-work/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>ブランクからの復職ガイド</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 進め方 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">40代の転職活動の進め方</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              40代の転職活動は在職中に進めるのが大原則です。30代までと比べて応募先は厳選型になり、マッチする求人が出るまでの待ち時間も含めて<strong>3〜6か月</strong>を見込んでおくと精神的に消耗しません。書類の完成度が成否の大半を決める年代です。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "キャリア20年分の棚卸し（2〜3週間）", "担当システム・役割・チーム規模・予算・定量成果を年表形式で書き出す。マネジメント・育成・ベンダー管理・障害対応など「役割」の実績は漏らさず拾う。"],
              ["STEP2", "路線を1つに絞る", "マネジメント／スペシャリスト／社内SEのどれで戦うか決め、職務経歴書をその路線向けに再構成する。「何でもできます」は40代では最も評価されない。"],
              ["STEP3", "エージェント登録・市場価値の確認", "IT特化型＋ハイクラス・女性特化型の2〜3社に登録。40〜44歳の転職者の45.9%・45〜49歳の46.4%が賃金増という相場を基準に提示レンジを評価する。"],
              ["STEP4", "職務経歴書は「再現性」と「直近の学習」で書く", "成果の再現性に加え、直近のスキルアップ（クラウド資格・新技術のキャッチアップ）を必ず入れ、「学び続けている40代」であることを示す。"],
              ["STEP5", "面接・条件交渉", "実績は規模と数字で簡潔に。働き方の条件（リモート・介護や家庭との両立）は取得実績ベースで確認し、年収交渉はエージェント経由で行う。"],
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
            <p>転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績。スピーディーなマッチングで最短2週間での内定実績も。年収交渉力にも定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span>
              </div>
              <p className="text-sm text-text-light">女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT業界の転職支援に強み。未経験からベテランまで幅広い層の求人を保有。レスポンスの速さと手厚いサポートに定評があります。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 成功事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Aさん（40代前半・マネジメント路線）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">SIerのプロジェクトリーダー / 年収580万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p>
                  <p className="text-sm font-bold">事業会社のエンジニアリングマネージャー / 年収720万円・リモート併用</p>
                </div>
              </div>
              <p className="text-sm text-text-light">8名チームのリーダー経験と予算管理・育成実績を年表形式で棚卸しし、マネジメント路線に絞って職務経歴書を再構成。女性管理職の登用を進める事業会社のEMポジションに採用され、年収140万円アップを実現しました。「転職者の半数近くが賃金増というデータを知り、提示条件を冷静に比較できたのが大きかったです」</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Bさん（40代後半・社内SE路線）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">受託開発のシステムエンジニア（残業多め）/ 年収520万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p>
                  <p className="text-sm font-bold">製造業の情報システム部門 / 年収540万円・フレックス＋リモート併用</p>
                </div>
              </div>
              <p className="text-sm text-text-light">製造業向けシステム開発20年のドメイン知識を武器に、ユーザー企業側の情シスへ転身。ベンダーコントロールと基幹システム刷新の経験が決め手になりました。親の介護が視野に入る前に柔軟な働き方を確保し、「あと20年働ける環境」を手に入れています。</p>
            </div>
          </div>
          <p className="text-xs text-text-light mt-4">※事例は40代女性エンジニアの典型的な転職パターンをもとに構成したモデルケースです。</p>
        </div>
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

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>・出典: 厚生労働省「令和6年雇用動向調査」（2026年6月参照）— 女性の転職入職率（40〜44歳10.2%、45〜49歳10.7%。男性は6.8%・6.0%）、転職入職者の賃金変動（増加：40〜44歳45.9%・45〜49歳46.4%、うち1割以上の増加33.2%・29.1%）、前職を辞めた理由（40〜44歳女性「給料等収入が少なかった」15.1%・「出産・育児」8.1%、45〜49歳女性「労働時間、休日等の労働条件が悪かった」15.3%・「介護・看護」1.6%）</li>
            <li>・出典: 厚生労働省「令和6年度雇用均等基本調査」（2026年6月参照）— 管理職等に占める女性の割合：課長相当職12.3%、部長相当職8.7%</li>
            <li>・出典: doda（パーソルキャリア）「平均年収ランキング2025」（2026年6月参照）— 全体429万円、40代517万円（男性604万円・女性421万円）、エンジニア（IT/通信）469万円。集計期間2024年9月〜2025年8月・約60万件</li>
            <li>・出典: doda（パーソルキャリア）「転職求人倍率レポート（2026年4月）」（2026年6月参照）— 全体2.38倍、エンジニア（IT・通信）は10倍超の高水準</li>
            <li>・出典: エン・ジャパン『ミドルの転職』転職者分析レポート2025（2026年6月参照）— ミドル世代の転職者数は6年で2.45倍。2024年の転職者の49%が年収増（40代は52%）</li>
            <li>・出典: エン・ジャパン「転職コンサルタント200人に聞いた『2025年ミドルの求人動向』調査」（2026年6月参照）— 約8割がミドル人材求人の増加を予測。45〜55歳はマネジメント経験・実務経験を備え5〜10年働ける年代として需要</li>
            <li>・出典: エン・ジャパン「30代・40代の転職して年収が上がった職種ランキング」（2026年6月参照）— 転職前年収600万円以上の層で2位が技術系（IT・Web・通信系）。調査対象2023年1月〜2025年6月の30〜49歳転職者</li>
            <li>・出典: 経済産業省「IT人材需給に関する調査」（2026年6月参照）— IT人材は2030年に最大79万人不足するとの試算</li>
            <li>・出典: レバテック「IT人材白書2024」（2026年6月参照）— エンジニア未経験者を「採用している」企業41.6%、「検討中」含め約7割</li>
            <li>・出典: ヒューマンリソシア「IT分野のジェンダーギャップに関するグローバル調査」（2026年6月参照）— 日本のITエンジニア女性比率18.8%</li>
          </ul>
          <p className="text-xs text-text-light mt-4">※年収・割合などの数値は調査時点のものであり、企業・地域・スキルにより変動します。EM/PM/アーキテクトおよび未経験入口職種の年収レンジは公開求人水準をもとにした目安です。</p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/age-30s/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>30代女性エンジニアの転職ガイド</h3>
              <p className="text-sm text-text-light">年収相場・未経験の現実・両立戦略</p>
            </a>
            <a href="/articles/salary-by-age/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>年代別年収ガイド</h3>
              <p className="text-sm text-text-light">20代〜40代の年収相場と上げ方</p>
            </a>
            <a href="/articles/women-manager/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの管理職キャリア</h3>
              <p className="text-sm text-text-light">マネジメント転身の戦略と実例</p>
            </a>
            <a href="/articles/internal-se/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>社内SEへの転職ガイド</h3>
              <p className="text-sm text-text-light">事業会社で安定して長く働く選択肢</p>
            </a>
            <a href="/articles/long-career-tips/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>エンジニアを長く続けるコツ</h3>
              <p className="text-sm text-text-light">50代以降も見据えたキャリア設計</p>
            </a>
            <a href="/articles/return-to-work/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ブランクからの復職ガイド</h3>
              <p className="text-sm text-text-light">育児・介護ブランク後の復帰戦略</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
