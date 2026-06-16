import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの年収はいくら？年代・職種別の実データと年収アップ術【2026年】",
  description:
    "女性エンジニアの平均年収を実データで解説。女性ITエンジニアの平均は419万円（doda）、女性SEは約497万円（賃金構造基本統計調査ベース）。年代別・職種別の年収表、男女賃金差の実態、差を埋める年収交渉・職種選択・スキル戦略まで2026年最新データで紹介します。",
  alternates: { canonical: "/articles/salary/" },
  openGraph: {
    title: "女性エンジニアの年収はいくら？年代・職種別の実データと年収アップ術【2026年】",
    description:
      "女性ITエンジニアの平均年収は419万円、女性SEは約497万円。年代別・職種別の実データと男女賃金差、年収アップの具体策を2026年最新データで解説。",
    url: "https://women-engineer.com/articles/salary/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの年収はいくら？年代・職種別の実データと年収アップ術【2026年】",
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
    "女性ITエンジニアの平均年収は419万円、女性SEは約497万円。年代別・職種別の実データと男女賃金差、年収アップの具体策を2026年最新データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/salary/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性エンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "転職サービスdodaの「平均年収ランキング2025」では、技術系（IT/通信）職種の女性の平均年収は419万円です。また厚生労働省「賃金構造基本統計調査」をもとにした集計では、女性システムエンジニアの平均年収は約497万円とされています。調査の母集団によって差はありますが、おおむね420万〜500万円が目安で、日本の女性全体の平均年収370万円（doda調べ）を大きく上回ります。",
      },
    },
    {
      "@type": "Question",
      name: "女性エンジニアと男性エンジニアの年収差はどのくらいありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "賃金構造基本統計調査をもとにした集計では、男性SEの平均約584万円に対し女性SEは約497万円で、女性は男性の約85%の水準です。全産業の男女間賃金格差（男性100に対し女性75.8、令和6年調査）と比べると、ITエンジニアは男女差が小さい職種といえます。特に20代では差がほとんどなく、20〜24歳では女性が男性をわずかに上回るデータもあります。差が広がるのは30代以降で、ライフイベントと昇給カーブの重なりが主な要因です。",
      },
    },
    {
      "@type": "Question",
      name: "女性エンジニアの年収が高い職種はどれですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "dodaの「平均年収ランキング2025」によると、技術系（IT/通信）で最も平均年収が高いのはプロジェクトマネジャーの707万円で、セキュリティコンサルタント/アナリスト649万円、プリセールス642万円が続きます。各種調査の代表値では、SRE/クラウドエンジニア約660万円、データサイエンティスト約650万円〜、セキュリティエンジニア約629万円も高水準です。上流工程・クラウド・AI・セキュリティなど希少スキルに近い職種ほど年収が高くなる傾向があります。",
      },
    },
    {
      "@type": "Question",
      name: "女性エンジニアが年収を上げるにはどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "効果が大きいのは3つです。(1)転職時にエージェント経由で年収交渉をする。Forkwellの調査では転職時の昇給額に男女差（男性平均139万円、女性平均85万円）があり、交渉の有無が差に直結します。(2)高年収職種（PM・SRE・データ・セキュリティ）へ職種をずらす。(3)クラウド（AWS等）・AI関連・上流工程のスキルに投資する。加えて、企業規模1,000人以上では女性エンジニアの平均が約688万円という集計もあり、勤務先選びも年収を大きく左右します。",
      },
    },
    {
      "@type": "Question",
      name: "女性エンジニアでも年収1000万円は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。ただしForkwellの調査では年収800万円以上の女性エンジニアは回答者の4%と、現状では少数派です。現実的なルートは、(1)プロジェクトマネジャーやエンジニアリングマネージャーなどマネジメント職（PMの平均は707万円で、大手や外資では1,000万円超も）、(2)外資系・大手SaaS企業のシニアエンジニア、(3)高需要スキル（クラウド・AI・セキュリティ）の専門家、(4)フリーランスとして高単価案件を継続受注する、の4つです。30代までに上流・専門性の実績を作ることが近道になります。",
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
              { label: "女性エンジニアの年収ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              キャリア知識
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの年収はいくら？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年代・職種別の実データと年収アップ術【2026年】
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
            className="rounded-xl p-6 md:p-8"
            style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}
          >
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
              結論：女性エンジニアの平均年収は約420万〜500万円
            </h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>転職サービスdodaの集計では、技術系（IT/通信）の女性の平均年収は<strong>419万円</strong>。女性全体の平均370万円を約50万円上回ります</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>厚生労働省「賃金構造基本統計調査」をもとにした集計では、女性システムエンジニアの平均年収は<strong>約497万円</strong>（男性SEは約584万円）</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>20代の男女差はほぼゼロ</strong>。差が開くのは30代以降で、職種選択・スキル・年収交渉で十分に縮められます</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: doda「平均年収ランキング2025」（パーソルキャリア、2026年6月参照）／厚生労働省「賃金構造基本統計調査」をもとにしたレバテックの集計（2026年6月参照）
            </p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 女性エンジニアの平均年収【最新データ】</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 年代別の年収相場（男女比較表）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 職種別の年収相場</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 言語・スキル別の年収傾向</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 男女賃金格差の実データ</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 男女差を埋める3つの具体策</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 年収1000万円は目指せる？</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 平均年収データ */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアの平均年収【最新データ】</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              女性エンジニアの平均年収は、調査の母集団によって数字が変わります。まず押さえたいのは次の2つの公開データです。
            </p>
            <p>
              1つ目は転職サービスdodaの「平均年収ランキング2025」（2024年9月〜2025年8月に登録した正社員約60万人のデータ）。<strong>技術系（IT/通信）職種の女性の平均年収は419万円</strong>で、これは女性の職種分類別ランキングで3位に入る高さです。日本の正社員全体の平均は429万円、女性全体の平均は370万円なので、女性エンジニアは<strong>女性平均より約50万円高い</strong>ことになります。出典: doda「平均年収ランキング2025」（パーソルキャリア、2026年6月参照）
            </p>
            <p>
              2つ目は公的統計です。厚生労働省「賃金構造基本統計調査」をもとにした集計では、<strong>女性システムエンジニアの平均年収は約497万円</strong>（男性SEは約584万円）。転職サービス登録者より年齢層の広い母集団で見ても、女性エンジニアの年収は女性全体の水準を大きく上回ります。出典: 厚生労働省「賃金構造基本統計調査」をもとにしたレバテックの集計（2026年6月参照）
            </p>
            <p>
              つまり「女性エンジニアの平均年収はいくらか」への答えは、<strong>おおむね420万〜500万円</strong>。若手中心の転職市場データで419万円、経験者を含む公的統計ベースで約497万円、というのが2026年6月時点の実態です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>主要データまとめ（2026年6月参照）</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>技術系（IT/通信）の女性平均年収: <strong>419万円</strong>（doda「平均年収ランキング2025」）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>女性SEの平均年収: <strong>約497万円</strong>／男性SE: 約584万円（賃金構造基本統計調査ベース）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>女性全体の平均年収: <strong>370万円</strong>／正社員全体: 429万円（doda）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ITエンジニア全体（技術系IT/通信）の平均: <strong>469万円</strong>（doda）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>日本のITエンジニアの女性比率: <strong>18.8%</strong>（OECD加盟国中17位。ヒューマンホールディングス調査、2026年6月参照）</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 年代別 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年代別の年収相場（男女比較表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              年代別に見ると、女性エンジニアの年収カーブには明確な特徴があります。下表は厚生労働省「賃金構造基本統計調査」をもとにレバテックが集計したシステムエンジニアの年齢階級別・男女別の平均年収です。出典: 厚生労働省「賃金構造基本統計調査」をもとにしたレバテックの集計（2026年6月参照）
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年齢階級</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>女性SE</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>男性SE</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>男女差</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20〜24歳</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約343万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約339万円</td><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>女性が上回る</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>25〜29歳</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約442万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約447万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ほぼ差なし</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30〜34歳</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約496万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約546万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約50万円</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>35〜39歳</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約506万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約598万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約92万円</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40〜44歳</td><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>約613万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約658万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約44万円</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>45〜49歳</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約549万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約670万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約121万円</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>50〜54歳</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約611万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約727万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約116万円</td></tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              注目すべきは、<strong>20代では男女差がほとんどない</strong>こと（20〜24歳ではむしろ女性が上回ります）。差が開き始めるのは30代で、出産・育児というライフイベントが昇給カーブの急になる時期と重なることが大きな要因です。逆に言えば、30代をどう設計するかで40代以降の年収（女性のピークは40代前半の約613万円）が大きく変わります。
            </p>
            <p className="text-sm">
              ※年代ごとの詳しい実額・戦略は <a href="/articles/salary-by-age/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性エンジニアの年代別年収【20代〜50代】</a> で解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 職種別 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">職種別の年収相場</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              同じ「エンジニア」でも、職種によって平均年収は100万〜200万円以上の差があります。dodaの「平均年収ランキング2025」では、技術系（IT/通信）の職種別1位は<strong>プロジェクトマネジャーの707万円</strong>。2位はセキュリティコンサルタント/アナリストの649万円、3位はプリセールスの642万円でした。出典: doda「平均年収ランキング2025」（パーソルキャリア、2026年6月参照）
            </p>
            <p>
              各種調査の代表値をまとめると、職種別の目安は次の通りです（男女計。企業・地域・スキルで変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>職種</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>特徴</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>プロジェクトマネジャー</td><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>707万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>技術系（IT/通信）の職種別1位（doda 2025）。女性が年収を伸ばす王道ルート</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>SRE / クラウドエンジニア</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約660万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>クラウド移行で慢性的に人材不足。リモート求人が多い</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データサイエンティスト</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約650万円〜</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>AI需要で上昇傾向。スキルにより1,000万円超も</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>セキュリティエンジニア</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約629万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>人材不足で需要安定。資格が評価されやすい</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ITコンサルタント</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約595万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>最上流。コンサルティングファームではさらに高水準</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フロントエンドエンジニア</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約523万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>求人が多く、リモート・時短と両立しやすい</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>システムエンジニア / 社内SE</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約516万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>社内SEは残業が少なく両立しやすいと女性に人気</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>バックエンドエンジニア</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約500万〜520万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>スキルが長く通用しブランク復帰しやすい</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>インフラエンジニア</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約497万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>未経験から入りやすい。クラウド/SREへの登竜門</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ※平均年収は各種調査の代表値です。職種ごとの詳しい比較・キャリアの組み立て方は <a href="/articles/salary-by-job/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性エンジニアの職種別年収比較</a> をご覧ください。
          </p>
        </div>
      </section>

      {/* sec4 言語・スキル別 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">言語・スキル別の年収傾向</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              年収は「職種」だけでなく「扱う技術」でも変わります。2026年時点で年収が上がりやすいのは、<strong>Python（AI・データ活用・LLM/RAG開発）</strong>と<strong>Go（マイクロサービス・SaaS）</strong>を中心とした高需要言語、そして<strong>クラウド（AWS/GCP/Azure）</strong>の設計・構築スキルです。
            </p>
            <p>
              dodaの「平均年収ランキング2025」でも、技術系（IT/通信）は21職種のうち15職種で平均年収が前年から上昇しており、最も上昇幅が大きかったのはセキュリティコンサルタント/アナリスト（33万円アップ）でした。セキュリティ・クラウド・AIといった「足りない領域」のスキルを持つ人ほど、年収が上がりやすい市場が続いています。出典: doda「平均年収ランキング2025」（パーソルキャリア、2026年6月参照）
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収が上がりやすいスキル</h3>
              <p className="text-text-light text-sm leading-relaxed">Python×AI/データ、Go×SaaS、クラウド設計（AWS等）、セキュリティ。求人需要に対して人材が不足しており、転職市場で評価されやすい領域です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>掛け合わせで差がつく</h3>
              <p className="text-text-light text-sm leading-relaxed">「言語×クラウド」「開発×上流工程」のように2つ以上を掛け合わせると希少性が一気に上がります。1つの言語を深めた後に隣接領域を足すのが効率的です。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ※言語ごとの年収比較と学習戦略は <a href="/articles/salary-by-language/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性エンジニアの言語別年収比較</a> で詳しく解説しています。
          </p>
        </div>
      </section>

      {/* sec5 男女賃金格差 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">男女賃金格差の実データ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              厚生労働省の「令和6年賃金構造基本統計調査」によると、一般労働者の賃金（月額）は男性363,100円・女性275,300円で、男性を100としたときの女性の賃金は<strong>75.8</strong>。これは比較可能な1976年以降で最も格差が縮小した数字ですが、それでも約24%の差が残っています。出典: 厚生労働省「令和6年賃金構造基本統計調査」（2026年6月参照）
            </p>
            <p>
              一方、ITエンジニアに絞ると格差は小さくなります。賃金構造基本統計調査ベースの集計では女性SE約497万円・男性SE約584万円で、女性は男性の<strong>約85%</strong>の水準。エンジニア向けサービスForkwellの調査（有効回答260件）でも、ITエンジニアの平均年収は男性600万円・女性490万円で格差は81.7と、一般労働者の格差より小さいという結果でした。<strong>ITは「成果が可視化されやすく、男女差が比較的小さい職種」</strong>だといえます。出典: Forkwell「ITエンジニアの男女間賃金格差調査」（2026年6月参照）
            </p>
            <p>
              ただし、同じForkwellの調査では見過ごせないデータもあります。<strong>年収800万円以上の割合は男性23%に対し女性は4%</strong>。また転職時の昇給額は男性平均139万円に対し女性平均85万円と、高年収帯への到達と「転職・交渉での上げ幅」に差が出ています。つまり差の正体は「同じ仕事での賃金差」よりも、<strong>高年収ポジションへの到達率と交渉行動の差</strong>にあります。これは戦略次第で埋められる差です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>男女差データの要点</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>全産業の男女間賃金格差: <strong>75.8</strong>（過去最小。令和6年賃金構造基本統計調査）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>SEの男女比: 女性約497万円／男性約584万円 = <strong>約85%</strong>（同調査ベースの集計）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ITエンジニアの格差: <strong>81.7</strong>（男性600万円／女性490万円。Forkwell調査）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>年収800万円以上: 男性23%／<strong>女性4%</strong>（Forkwell調査）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>転職時の昇給額: 男性平均139万円／<strong>女性平均85万円</strong>（Forkwell調査）</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec6 差を埋める具体策 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">男女差を埋める3つの具体策</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              データが示す通り、差の多くは「到達ポジション」と「交渉行動」で生まれています。裏を返せば、次の3つを実行すれば差は縮められます。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 転職時に必ず年収交渉をする（エージェント経由が確実）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                転職時の昇給額に男女で約54万円の差（男性139万円／女性85万円・Forkwell調査）があるのは、希望年収の提示額と交渉の有無が影響していると考えられます。自分で言い出しにくい交渉は、転職エージェントに代行してもらうのが確実です。市場価値を客観的な相場データで示してもらい、現年収ではなく「市場価値ベース」で希望額を設定しましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 高年収職種・上流工程へ職種をずらす</h3>
              <p className="text-sm text-text-light leading-relaxed">
                同じ実務経験でも、PM（707万円）・SRE/クラウド（約660万円）・データ・セキュリティといった高年収職種に軸足を移すだけで年収レンジが変わります。実装だけでなく要件定義・設計・進行管理に関わると評価軸が一段上がり、マネジメント路線は女性が40代で年収を大きく伸ばす王道ルートです。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 「足りないスキル」に投資し、企業規模・環境も選ぶ</h3>
              <p className="text-sm text-text-light leading-relaxed">
                クラウド（AWS等）・AI・セキュリティは需要過多が続く領域で、資格や実務経験が年収に直結します。また企業規模1,000人以上に勤める女性エンジニアの平均年収は約688万円という集計もあり（賃金構造基本統計調査をもとにした集計、2026年6月参照）、同じスキルでも「どこで働くか」で年収は大きく変わります。リモート・時短など継続しやすい環境を選ぶことも、30代以降の年収カーブを守る重要な戦略です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 1000万 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収1000万円は目指せる？</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              結論、<strong>女性エンジニアでも年収1000万円は到達可能</strong>です。ただしForkwellの調査では年収800万円以上の女性エンジニアは回答者の4%にとどまり、現状では狭き門であることも事実です。出典: Forkwell「ITエンジニアの男女間賃金格差調査」（2026年6月参照）
            </p>
            <p>
              現実的なルートは4つ。(1)<strong>マネジメント職</strong>（PM・エンジニアリングマネージャー。PMの平均は707万円で、大手・外資では1,000万円超も）、(2)<strong>外資系・大手SaaSのシニアエンジニア</strong>、(3)<strong>高需要スキルの専門家</strong>（クラウドアーキテクト・AI・セキュリティ）、(4)<strong>フリーランスでの高単価案件</strong>。いずれも共通するのは、30代までに「上流・専門性の実績」を作っておくことです。
            </p>
            <p className="text-sm">
              ※具体的な職種・スキル・5つの戦略は <a href="/articles/salary-1000man/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性エンジニアが年収1000万を目指す方法</a> で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* おすすめ転職エージェント */}
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

      {/* 成功事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                転職成功者Aさん（30代前半）
              </h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">中小IT企業のエンジニア / 年収400万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p>
                  <p className="text-sm font-bold">大手Web企業のシニアエンジニア / 年収580万円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">
                IT特化型エージェントを活用し、技術力を正当に評価してくれる企業に出会いました。年収180万円アップに加え、フルリモート勤務が可能になり、ワークライフバランスが大幅に改善。「エージェントに相談して本当に良かった」と語っています。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                転職成功者Bさん（20代後半）
              </h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">SES企業のエンジニア / 年収350万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p>
                  <p className="text-sm font-bold">自社開発企業のエンジニア / 年収480万円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">
                女性特化型のエージェントを利用し、産休育休制度が充実した自社開発企業に転職。年収130万円アップと働きやすい環境の両方を手に入れました。「女性の悩みに寄り添ったサポートが心強かった」とのこと。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/salary-by-age/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年代別年収</h3>
              <p className="text-sm text-text-light">20代〜50代の実額と年代別戦略</p>
            </a>
            <a href="/articles/salary-by-job/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの職種別年収比較</h3>
              <p className="text-sm text-text-light">フロントからデータサイエンスまで一覧</p>
            </a>
            <a href="/articles/salary-by-language/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの言語別年収比較</h3>
              <p className="text-sm text-text-light">Go・Python・TypeScriptで稼げる言語</p>
            </a>
            <a href="/articles/salary-1000man/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアが年収1000万を目指す方法</h3>
              <p className="text-sm text-text-light">届く職種・スキル・5つの戦略</p>
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
