import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアのワークライフバランス実態｜残業・有給・柔軟な働き方のデータ【2026年】",
  description:
    "女性エンジニアのワークライフバランス実態をデータで解説。IT業界（情報通信業）の残業は月16.5時間（全産業13.2時間）、有給取得率66.9%、フレックスタイム制導入率35.9%で産業別トップ——厚労省・総務省の公的統計を出典付きで整理し、WLBの良い職場の見極め方まで紹介します。",
  alternates: { canonical: "/articles/work-life-balance/" },
  openGraph: {
    title: "女性エンジニアのワークライフバランス実態｜残業・有給・柔軟な働き方のデータ【2026年】",
    description:
      "IT業界の残業は月16.5時間（全産業13.2時間）、有給取得率66.9%、フレックス導入率35.9%で産業別トップ。公的統計でWLBの実態と職場の見極め方を解説。",
    url: "https://women-engineer.com/articles/work-life-balance/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアのワークライフバランス実態｜残業・有給・柔軟な働き方のデータ【2026年】",
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
    "IT業界（情報通信業）の残業は月16.5時間（全産業13.2時間）、有給取得率66.9%、フレックスタイム制導入率35.9%で産業別トップ。厚労省・総務省の公的統計でワークライフバランスの実態と職場の見極め方を解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/work-life-balance/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "IT業界は残業が多いというのは本当ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「平均よりやや多いが、突出してはいない」が統計上の答えです。厚生労働省「毎月勤労統計調査」の2025年分結果速報によると、情報通信業の一般労働者の所定外労働時間（残業）は月16.5時間で、全産業平均（13.2時間）より月3時間ほど多く、16産業中3番目の水準です。一方、月間総実労働時間は160.4時間と全産業平均（160.5時間）とほぼ同じで、所定労働時間が短い分、トータルの労働時間は平均並みです。ただしこれは平均値であり、企業の業態（自社開発・SIer・SES）や職種、開発フェーズによる差が大きい点に注意が必要です。",
      },
    },
    {
      "@type": "Question",
      name: "IT業界では有給休暇は取りやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省「令和7年就労条件総合調査」によると、情報通信業の年次有給休暇取得率は66.9%で、全産業平均（66.9%・昭和59年以降の最高値）とちょうど同じ水準です。付与日数は18.9日・取得日数は12.7日と、全産業平均（付与18.1日・取得12.1日）よりわずかに多くなっています。「ITだから特別取りやすい」わけではありませんが、業界として平均水準は確保されており、実際の取りやすさは企業ごとの文化に左右されます。応募先の有給取得率は厚労省「女性の活躍推進企業データベース」などで公表している企業もあるため、応募前の確認がおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "フレックスタイム制はIT業界でどのくらい普及していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "情報通信業のフレックスタイム制導入率は35.9%で、全産業平均（8.2%）の4倍以上、産業別で最も高い水準です（厚生労働省「令和4年就労条件総合調査」）。さらにテレワーク導入率も94.3%と全産業トップ（総務省「令和6年通信利用動向調査」）で、IT業界は「時間と場所の柔軟性」の両面で他産業より有利です。ただしフレックスにはコアタイム（必ず勤務すべき時間帯）の有無・長さに企業差があるため、求人票では「コアタイムなしのフルフレックスか」「中抜けが可能か」まで確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "ワークライフバランスの良いIT企業はどう見極めればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "①求人票で固定残業代（みなし残業）の時間数・年間休日数（全産業の労働者平均は116.6日）・フレックスのコアタイムを確認する、②厚労省「女性の活躍推進企業データベース」などで平均残業時間や有給取得率の公開データを見る、③面接で「配属チームの直近の平均残業時間」「繁忙期の頻度」「夜間・休日対応（オンコール）の有無」を具体的に質問する、の3段階が基本です。求人票に出ない実態（チームごとの残業差・制度の利用しやすさ）は転職エージェント経由で事前確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "育児中でなくても、ワークライフバランス重視で転職するのはわがままですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "わがままではありません。エンジニアにとって業務外の学習時間はキャリアを維持する投資そのものであり、介護・健康管理・趣味のための時間確保も含めて、WLBは長く働き続けるための合理的な条件です。法制度の面でも、2025年施行の改正育児・介護休業法では育児だけでなく介護との両立支援（介護に直面した労働者への個別周知・意向確認の義務化、介護休暇の勤続要件緩和、テレワークの努力義務など）が強化されました。IT人材の転職求人倍率は11.2倍（レバレジーズ・2025年6月）と強い売り手市場が続いており、働き方の条件を妥協せずに選びやすい環境です。",
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
              { label: "ワークライフバランス実態" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              ワークライフ
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアのワークライフバランス実態
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                残業・有給・柔軟な働き方のデータ【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>この記事の結論</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>IT業界（情報通信業）の残業は<strong>月16.5時間で全産業平均（13.2時間）よりやや多い</strong>ものの、月間総実労働時間は<strong>160.4時間とほぼ平均並み</strong>（出典: 厚生労働省「毎月勤労統計調査」2025年分結果速報・一般労働者）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>有給取得率は<strong>66.9%で全産業平均と同水準</strong>。一方、フレックスタイム制導入率は<strong>35.9%で全産業平均（8.2%）の4倍以上・産業別トップ</strong>、テレワーク導入率も<strong>94.3%で全産業トップ</strong>。ITのWLBの強みは「労働時間の短さ」より<strong>「時間と場所の柔軟性」</strong>にあります。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>「ITはWLBが良い/悪い」と一括りにはできません。<strong>業態（自社開発・SIer・SES）×職種×開発フェーズ</strong>で実態が大きく変わるため、構造を知って企業単位で見極めることが重要です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>見極めは<strong>求人票（固定残業代・年間休日・コアタイム）→公開データ→面接での具体質問</strong>の3段階で。育児に限らず、自己研鑽・介護・健康のための時間確保も含めて条件を整理しましょう。</span>
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. データで見るIT業界のワークライフバランス（労働時間・残業・有給）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 「ITはWLBが良いのか悪いのか」——答えは構造で決まる</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. フレックス・裁量労働・テレワーク——柔軟な働き方のデータ</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. WLBの良い職場の見極め方（求人票・公開データ・面接）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 育児だけじゃないWLB（自己研鑽・介護・趣味・健康）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. WLBとキャリアアップは両立できるか</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 転職でWLBを改善する4ステップ</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. 出典・参考資料</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 データ */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データで見るIT業界のワークライフバランス（労働時間・残業・有給）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「エンジニアは激務」というイメージと「ITはWLBが良い」という評判、どちらが正しいのでしょうか。まず公的統計で、IT業界（情報通信業）の労働時間・残業・有給の実態を全産業と比較します。
            </p>
            <p>
              厚生労働省「毎月勤労統計調査」の2025年分結果速報（事業所規模5人以上・一般労働者）によると、情報通信業の月間総実労働時間は<strong>160.4時間</strong>で、全産業平均（160.5時間）と<strong>ほぼ同じ</strong>です。一方、所定外労働時間（残業）は<strong>月16.5時間</strong>と全産業平均（13.2時間）より3時間ほど多く、運輸業・郵便業（24.1時間）、電気・ガス業（16.8時間）に次ぐ水準です。つまり「残業はやや多めだが、所定労働時間が短い分、トータルの労働時間は平均並み」というのが統計上の実像です。
            </p>
            <p>
              有給休暇はどうでしょうか。厚生労働省「令和7年就労条件総合調査」によると、情報通信業の年次有給休暇取得率は<strong>66.9%</strong>で、全産業平均（66.9%・昭和59年以降の最高値）と同水準。付与日数18.9日・取得日数12.7日は全産業平均（18.1日・12.1日）よりわずかに多くなっています。また、週所定労働時間は情報通信業が<strong>39時間02分</strong>と全産業平均（39時間24分）より短めです。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>指標</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>IT業界（情報通信業）</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>全産業</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>出典</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>月間総実労働時間（一般労働者）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>160.4時間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>160.5時間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>厚労省「毎月勤労統計調査」2025年分結果速報</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>月間所定外労働時間（残業・一般労働者）</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>16.5時間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>13.2時間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>同上</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>年次有給休暇取得率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>66.9%（付与18.9日・取得12.7日）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>66.9%（付与18.1日・取得12.1日）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>厚労省「令和7年就労条件総合調査」</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>週所定労働時間（1企業平均）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>39時間02分</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>39時間24分</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>同上</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フレックスタイム制の導入率</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>35.9%（産業別1位）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>8.2%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>厚労省「令和4年就労条件総合調査」</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>テレワーク導入率</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>94.3%（産業別1位）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>47.3%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>総務省「令和6年通信利用動向調査」</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「毎月勤労統計調査 令和7年分結果速報」「令和7年就労条件総合調査」「令和4年就労条件総合調査」、総務省「令和6年通信利用動向調査」（いずれも2026年6月参照）
          </p>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>データの読み方：ITのWLBの強みは「時間の短さ」より「柔軟性」</h3>
            <p className="text-sm text-text-light leading-relaxed">
              労働時間・有給だけ見ると、IT業界は「全産業の平均並み（残業はやや多め）」です。しかしフレックスタイム制35.9%・テレワーク導入率94.3%という<strong>柔軟性の指標は他産業を大きく引き離して1位</strong>。同じ労働時間でも「何時に・どこで働くかを自分で調整できる」ことがITのWLBの本質的な強みであり、通院・送迎・学習・介護など生活との組み合わせやすさに直結します。リモートワークの実態は<a href="/articles/remote-jobs/" className="underline" style={{ color: "#7c3a55" }}>在宅・リモート転職ガイド</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 構造 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">「ITはWLBが良いのか悪いのか」——答えは構造で決まる</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              月16.5時間という残業時間はあくまで<strong>業界全体の平均値</strong>です。実際には「ほぼ定時のチーム」と「恒常的に残業が多い現場」が混在しており、平均だけを見て入社先を決めるとミスマッチが起きます。WLBの実態を分けるのは、主に次の3つの構造要因です。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>要因1：業態——納期と顧客の「コントロール権」が誰にあるか</h3>
              <p className="text-sm text-text-light leading-relaxed">
                <strong>自社開発・SaaS企業</strong>は開発スケジュールを自社で決められるため、リリース計画の調整余地が大きく、フレックスやリモートも自社判断で運用できます。<strong>SIer（受託開発）</strong>は顧客との契約納期に縛られ、プロジェクト終盤に負荷が集中しやすい構造です。<strong>SES（客先常駐）</strong>は労働時間のルールも休暇の取りやすさも常駐先に依存するため、案件が変わるたびにWLBが変動するリスクがあります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>要因2：職種——「突発対応」があるかどうか</h3>
              <p className="text-sm text-text-light leading-relaxed">
                Web開発（バックエンド・フロントエンド）は業務がオンラインで完結し時間も読みやすい一方、<strong>インフラ・SREは障害対応や夜間・休日のオンコール当番</strong>の有無が生活リズムを左右します。QA・テストエンジニアや社内SEはスケジュールが立てやすい傾向があります。「平均残業時間」より「突発対応の頻度と当番体制」を確認するほうが、生活への影響を正確に予測できます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>要因3：フェーズ——同じ会社でも時期で変わる</h3>
              <p className="text-sm text-text-light leading-relaxed">
                リリース直前・大型障害・期末の検収前は、どんな企業でも一時的に負荷が上がります。また、立ち上げ期のスタートアップは裁量が大きい反面、人員に余裕がなく一人あたりの負荷が高くなりがちです。確認すべきは「繁忙期があるか」ではなく、<strong>「繁忙期がどのくらいの頻度・期間で発生し、その後に回復期間が確保されるか」</strong>です。
              </p>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              まとめると、「IT業界か否か」よりも<strong>「どの業態の、どの職種で、どんな体制のチームに入るか」</strong>がWLBを決めます。だからこそ次のセクションで解説する「制度データ」と「企業単位の見極め」が重要になります。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 柔軟な働き方 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">フレックス・裁量労働・テレワーク——柔軟な働き方のデータ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT業界のWLBを支えているのは、柔軟な労働時間制度の普及率の高さです。厚生労働省「令和4年就労条件総合調査」によると、フレックスタイム制を採用している企業は全産業で8.2%にとどまる一方、<strong>情報通信業は35.9%と4倍以上の水準で産業別トップ</strong>です。また、業務の遂行方法を労働者の裁量に委ねる専門業務型裁量労働制は、対象業務に「情報処理システムの分析・設計」が含まれており、IT業界で採用の多い制度です（2024年4月の法改正で本人同意の取得などが要件化されています）。
            </p>
            <p>
              場所の柔軟性も同様です。総務省「令和6年通信利用動向調査」では情報通信業のテレワーク導入率は<strong>94.3%（全産業47.3%）</strong>、パーソル総合研究所の2025年7月調査でも情報通信業の正社員テレワーク実施率は<strong>56.3%（全体22.5%）</strong>と、いずれも業種別トップです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>フレックスタイム制</h3>
              <p className="text-text-light text-sm leading-relaxed">始業・終業時刻を自分で決められる制度。導入率は情報通信業35.9%で産業別1位。<strong>コアタイムの有無・長さ・中抜け可否</strong>は企業ごとに異なるため、求人票と面接で必ず確認を。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>裁量労働制</h3>
              <p className="text-text-light text-sm leading-relaxed">あらかじめ定めた時間を働いたとみなす制度で、システム設計などが対象。時間配分の自由度が高い反面、<strong>みなし時間と実労働の乖離</strong>が起きると長時間労働の温床になるため、運用実態の確認が重要です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>テレワーク</h3>
              <p className="text-text-light text-sm leading-relaxed">導入率94.3%で産業別1位。通勤時間（往復1〜2時間）がそのまま生活時間に変わるためWLBへの効果が最も大きい一方、フルリモート求人はピーク比約30%減で<strong>主流は週2〜3日出社のハイブリッド型</strong>（レバレジーズ調査）。</p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「令和4年就労条件総合調査」、総務省「令和6年通信利用動向調査」、パーソル総合研究所「第十回・テレワークに関する調査」、レバレジーズ「IT人材の正社員転職市場動向 2025年6月」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              注意したいのは、<strong>「制度がある」ことと「自分のチームで使えている」ことは別</strong>だという点です。フレックスもテレワークも、導入率の統計は「制度を持つ企業の割合」であり、利用のしやすさはチームの文化に依存します。リモートワークの実態と求人の探し方は<a href="/articles/remote-jobs/" className="underline" style={{ color: "#7c3a55" }}>在宅・リモート転職ガイド</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 見極め方 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">WLBの良い職場の見極め方（求人票・公開データ・面接）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              WLBの見極めは「求人票→公開データ→面接」の3段階で精度を上げていくのが効率的です。それぞれの段階で確認すべきポイントを整理します。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ステップ1：求人票で「数字」を確認する</h3>
              <ul className="space-y-2 text-sm text-text-light leading-relaxed">
                <li>・<strong>固定残業代（みなし残業）の時間数</strong>——「月45時間分を含む」のような長時間のみなし設定は、恒常的な残業を前提にしている可能性のあるシグナルです。</li>
                <li>・<strong>年間休日数</strong>——全産業の労働者平均は116.6日（厚労省「令和7年就労条件総合調査」）。120日以上なら完全週休2日＋祝日相当が目安です。</li>
                <li>・<strong>フレックスのコアタイム</strong>——「フレックスあり」だけでなく、コアタイムなしのフルフレックスか、中抜けが可能かまで読み取りましょう。</li>
                <li>・<strong>リモートの条件</strong>——「リモート可」と「フルリモート」は別物。週何日の出社が前提かを確認します。</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ステップ2：公開データで「裏取り」する</h3>
              <p className="text-sm text-text-light leading-relaxed">
                厚生労働省「女性の活躍推進企業データベース」では、平均残業時間や有給取得率、女性管理職比率などを公表している企業を無料で確認できます。求人票の記載と公開データに食い違いがないかを照合しましょう。えるぼし・くるみんなどの公的認定やデータベースの具体的な使い方は<a href="/articles/women-friendly-companies/" className="underline" style={{ color: "#7c3a55" }}>女性が働きやすいIT企業の見極め方</a>で詳しく解説しています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ステップ3：面接・カジュアル面談で「実態」を質問する</h3>
              <ul className="space-y-2 text-sm text-text-light leading-relaxed">
                <li>・「配属予定チームの直近3か月の平均残業時間はどのくらいですか」——会社平均ではなくチーム単位で聞くのがコツです。</li>
                <li>・「繁忙期はどの時期に、どのくらいの期間ありますか」——頻度と回復期間まで確認します。</li>
                <li>・「夜間・休日の障害対応（オンコール）はありますか。当番制ですか」——インフラ・SRE系では特に重要です。</li>
                <li>・「フレックスやリモートは、チームの皆さんは実際どのように使っていますか」——制度ではなく利用実態を尋ねます。</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>補足：聞きにくいことはエージェント経由で</h3>
              <p className="text-sm text-text-light leading-relaxed">
                残業や休暇の質問を面接で重ねることに気が引ける場合は、転職エージェント経由で事前に確認するのが現実的です。エージェントは企業ごとの残業実態・制度の利用状況・離職理由といった内部情報を蓄積しており、応募前のスクリーニングに使えます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 育児以外のWLB */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育児だけじゃないWLB（自己研鑽・介護・趣味・健康）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ワークライフバランスは「育児との両立」の文脈で語られがちですが、エンジニアにとっての「ライフ」はそれだけではありません。育児以外の4つの観点も、働き方を選ぶ基準に含めましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 自己研鑽——学習時間はキャリアの生命線</h3>
              <p className="text-text-light text-sm leading-relaxed">
                技術の移り変わりが速いエンジニアにとって、業務外の学習時間は趣味ではなく<strong>キャリアを維持するための投資</strong>です。恒常的な残業で学習時間がゼロになる職場は、目先の収入が同じでも数年後の市場価値に差がつきます。「残業が少ない＝楽」ではなく「学び続けられる環境」として評価しましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 介護——2025年改正で両立支援が義務化</h3>
              <p className="text-text-light text-sm leading-relaxed">
                2025年4月施行の改正育児・介護休業法では、<strong>介護に直面した労働者への両立支援制度の個別周知・意向確認が義務化</strong>され、介護休暇を取得できる勤続要件が緩和、介護期のテレワークも努力義務になりました（出典: 厚生労働省「育児・介護休業法 改正ポイント」、2026年6月参照）。40代以降に直面しやすい介護は、リモート・フレックスとの相性が特に良い領域です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 健康——通院・メンテナンスの時間を確保できるか</h3>
              <p className="text-text-light text-sm leading-relaxed">
                婦人科系の通院や不妊治療、メンタルヘルスのケアなど、定期的な通院と働き方の両立は多くの女性にとって現実的なテーマです。<strong>時間単位の有給・中抜け可能なフレックス・在宅勤務</strong>の組み合わせがあると、休暇を丸1日消費せずに通院でき、心理的なハードルも下がります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 趣味・生活——「定時で帰れる日」が予測できるか</h3>
              <p className="text-text-light text-sm leading-relaxed">
                習い事・運動・友人との予定は「残業がない日」ではなく「<strong>残業がないと事前にわかる日</strong>」がないと続きません。突発対応が少なく勤務時間が予測できる職場かどうかは、有給取得率と並んで生活の質を左右する指標です。
              </p>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              なお、育児との両立については、女性の育児休業取得率86.6%（厚生労働省「令和6年度雇用均等基本調査」）などのデータと2025年施行の法改正を<a href="/articles/mama-engineer/" className="underline" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</a>で、時短勤務の制度と収入への影響は<a href="/articles/short-time/" className="underline" style={{ color: "#7c3a55" }}>時短勤務エンジニアの記事</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 キャリアとの両立 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">WLBとキャリアアップは両立できるか</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「WLBを優先するとキャリアが止まるのでは」という不安はよく聞かれますが、エンジニアは<strong>WLBとキャリアの両立がしやすい職種</strong>です。理由は、コード・設計書・プルリクエストといった成果物がすべてオンラインに残り、<strong>働いた時間ではなく成果で評価されやすい</strong>からです。時短やリモートでも、アウトプットが可視化されていれば評価を維持できます。
            </p>
            <p>
              一方で注意点もあります。WLB「だけ」を基準に、技術的な挑戦のない環境を選び続けると、スキルの停滞によって将来の選択肢が狭まり、結果的に長期的なWLB（働く場所・条件を選べる力）を損なうことがあります。おすすめの考え方は、<strong>「今の生活フェーズで譲れない条件」と「5年後も市場価値を保つための条件」を分けて整理する</strong>ことです。
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>生活フェーズの条件（短期）</strong>——残業上限・リモート日数・フレックス・通院や送迎との両立など。ライフイベントに合わせて見直す前提で設定します。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>市場価値の条件（長期）</strong>——技術的な挑戦の機会・レビュー文化・学習支援など。ここを確保しておくと、フェーズが変わったときに働き方を選び直せます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>評価制度の確認</strong>——時短・リモート勤務者の昇給・昇格事例があるかは、両立できる会社かを測る実態指標です。</span>
              </li>
            </ul>
            <p className="mt-4">
              ライフイベントを挟みながら長くエンジニアを続けるための具体的な戦略は、<a href="/articles/long-career-tips/" className="underline" style={{ color: "#7c3a55" }}>長くエンジニアを続けるコツ</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 転職で改善する手順 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職でWLBを改善する4ステップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              今の職場のWLBに不満がある場合、感覚のまま転職活動を始めるのではなく、データで現状を整理してから動くと失敗が減ります。IT人材の転職求人倍率は11.2倍（レバレジーズ「IT人材の正社員転職市場動向 2025年6月」、2026年6月参照）と強い売り手市場が続いており、働き方の条件を妥協せずに選びやすい環境です。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "現状を数値化する", "直近3か月の残業時間・有給取得日数・突発対応の回数を記録します。「つらい」という感覚を数字にすることで、転職の判断基準と面接での説明材料になります。"],
              ["STEP2", "業界水準と比較する", "残業が月16.5時間（情報通信業平均）を大きく超えている、有給取得率が66.9%（全産業平均）を大きく下回っている場合は、業界全体ではなく今の職場固有の問題である可能性が高く、転職での改善余地が大きいと判断できます。"],
              ["STEP3", "条件に優先順位をつける", "残業上限・リモート日数・フレックス・年収・技術環境をすべて満たす求人は多くありません。「絶対条件」「できれば」「不問」の3段階に整理しておくと、求人選定と年収交渉の軸がぶれません。"],
              ["STEP4", "エージェントで実態を確認して応募する", "セクション4のチェックポイント（固定残業代・年間休日・コアタイム・オンコール・チームの残業実態）をエージェント経由で確認し、条件に合う企業だけに応募します。面接で聞きにくい質問を代行してもらえるのもエージェント活用の利点です。"],
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
                  style={{ borderColor: "#d9c7b8" }}
                >
                  <summary
                    className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50"
                    style={{ color: "#7c3a55" }}
                  >
                    <span className="pr-4">{faq.name}</span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9662;
                    </span>
                  </summary>
                  <div
                    className="px-6 pb-4 text-sm text-text-light leading-relaxed"
                    style={{ borderTop: "1px solid #d9c7b8" }}
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
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>・出典: 厚生労働省「毎月勤労統計調査 令和7年分結果速報」（2026年6月参照）— 一般労働者の月間総実労働時間（情報通信業160.4時間・調査産業計160.5時間）、所定外労働時間（情報通信業16.5時間・調査産業計13.2時間）ほか産業別データ</li>
            <li>・出典: 厚生労働省「令和7年就労条件総合調査」（2026年6月参照）— 年次有給休暇取得率（全体66.9%・情報通信業66.9%、付与・取得日数）、週所定労働時間（情報通信業39時間02分・全体39時間24分）、年間休日総数（労働者平均116.6日）</li>
            <li>・出典: 厚生労働省「令和4年就労条件総合調査」（2026年6月参照）— フレックスタイム制を採用している企業割合（情報通信業35.9%・全産業8.2%）</li>
            <li>・出典: 総務省「令和6年通信利用動向調査」（2026年6月参照）— テレワーク導入率（情報通信業94.3%・全産業47.3%）</li>
            <li>・出典: パーソル総合研究所「第十回・テレワークに関する調査」（2025年発表、2026年6月参照）— 正社員テレワーク実施率（情報通信業56.3%・全体22.5%）</li>
            <li>・出典: レバレジーズ「IT人材の正社員転職市場動向 2025年6月」「ITエンジニアのリモートワークに関する実態調査」（2026年6月参照）— IT人材の転職求人倍率11.2倍、フルリモート求人ピーク比約30%減、ハイブリッド型勤務が主流</li>
            <li>・出典: 厚生労働省「令和6年度雇用均等基本調査」（2026年6月参照）— 女性の育児休業取得率86.6%</li>
            <li>・出典: 厚生労働省「育児・介護休業法 改正ポイントのご案内（令和7年4月1日・10月1日施行）」（2026年6月参照）— 介護両立支援制度の個別周知・意向確認の義務化、介護期テレワークの努力義務ほか</li>
          </ul>
          <p className="text-xs text-text-light mt-4">
            ※ 本記事の統計値は上記の公的統計・公開調査に基づきます。統計値は各調査の公表時点のものであり、最新の数値は各機関の公式サイトをご確認ください。業態・職種ごとの傾向は一般的な構造を整理したもので、個別の企業により異なります。
          </p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/remote-jobs/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                在宅・リモート転職ガイド
              </h3>
              <p className="text-sm text-text-light">職種別の実態と求人の探し方</p>
            </a>
            <a
              href="/articles/mama-engineer/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                ママエンジニアの働き方ガイド
              </h3>
              <p className="text-sm text-text-light">時短・在宅の実態と両立できる職種</p>
            </a>
            <a
              href="/articles/women-friendly-companies/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                女性が働きやすいIT企業の見極め方
              </h3>
              <p className="text-sm text-text-light">認定制度と公開データの読み方</p>
            </a>
            <a
              href="/articles/short-time/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                時短勤務エンジニアガイド
              </h3>
              <p className="text-sm text-text-light">時短の制度・収入・キャリアへの影響</p>
            </a>
            <a
              href="/articles/long-career-tips/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                長くエンジニアを続けるコツ
              </h3>
              <p className="text-sm text-text-light">ライフイベントと両立する長期戦略</p>
            </a>
            <a
              href="/articles/how-to-choose/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
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
