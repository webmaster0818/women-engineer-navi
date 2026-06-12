import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアが海外で働くには？年収比較・ビザ・4つのルート【2026年】",
  description:
    "女性エンジニアが海外で働く方法を実データで解説。米国BLS統計・Levels.fyi公表値による国別年収比較、H-1B・Express Entry・EUブルーカード等の就労ビザの基礎、駐在・外資日本法人・現地採用・海外フルリモートの4ルートの違い、職種別に見る英語力の現実的なラインまで網羅します。",
  alternates: { canonical: "/articles/work-abroad/" },
  openGraph: {
    title: "女性エンジニアが海外で働くには？年収比較・ビザ・4つのルート【2026年】",
    description:
      "国別年収比較（出典付き）・就労ビザの基礎・海外で働く4つのルート・英語力の現実的なラインを実データで解説。",
    url: "https://women-engineer.com/articles/work-abroad/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアが海外で働くには？年収比較・ビザ・4つのルート【2026年】",
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
    "女性エンジニアが海外で働く方法を実データで解説。国別年収比較・就労ビザの基礎・4つのルート・英語力の現実的なライン。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/work-abroad/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "海外で働くのに英語力はどのくらい必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "用途によって2種類に分かれます。ビザ・永住権の申請ではIELTSなど公式テストのスコアが要件になる場合があり、たとえばカナダのExpress Entryでは言語テストの結果がポイント（CRSスコア）に直結します。一方、採用選考で見られるのは「英語で技術を説明できるか」という実践力です。目安として、開発職（バックエンド・インフラ等）はドキュメントの読み書き＋会議に参加できるCEFR B2程度、PM・EMなど調整業務が多い職種はC1相当が求められる傾向です。完璧な発音より、技術面接を英語で通過できる準備のほうが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "アメリカで働く一番現実的な方法は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2026年時点では、日本国内で外資系企業に転職し、実績を積んでから企業内転勤ビザ（L-1）で米国オフィスへ異動するルートが現実的とされます。新規就労ビザの代表であるH-1Bは年間85,000件の上限（うち20,000件は米国の修士号以上保持者枠）に対して抽選制で、2025年9月の大統領布告により米国外からの新規H-1B申請に10万ドルの手数料が課される措置が導入されました（訴訟係属中で今後変わる可能性あり）。さらに2026年2月発効の規則で、FY2027以降は賃金水準を加重した選抜方式に移行します。最新の要件は必ずUSCIS公式サイトで確認してください。",
      },
    },
    {
      "@type": "Question",
      name: "子育て中でも海外で働く選択肢はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "あります。移住を伴わない「海外フルリモート」なら、日本で生活基盤を維持したまま海外企業の仕事に参加できます。米国企業は時差13〜17時間でミーティングが早朝・深夜になりがちな一方、欧州企業は時差7〜9時間のため会議が夕方以降に設定されやすく、日中を育児や自分の作業に充てる働き方と両立しやすい傾向です。契約はコントラクター（業務委託）型が多いため、確定申告や社会保険を自分で管理する必要がある点には注意が必要です。",
      },
    },
    {
      "@type": "Question",
      name: "海外で働くと手取りは本当に増えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "額面ほどは増えないことが多いです。米国のソフトウェア開発者の年収中央値は133,080ドル（米国労働統計局・2024年5月時点）と日本の2倍以上ですが、所得税・社会保障費に加え、サンフランシスコやニューヨークなどテック都市の家賃・物価は日本の主要都市を大きく上回ります。一方シンガポールは所得税率が比較的低く手取りが残りやすいなど、国によって構造が異なります。額面の年収比較だけでなく、税・社会保険・住居費・教育費まで含めた可処分所得で比較し、為替変動の影響も織り込んで判断しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "日本にいながら海外企業でフルリモート勤務する際の注意点は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "主な注意点は4つです。(1)契約形態：コントラクター（業務委託）が多く、日本では個人事業主として確定申告が必要になります。(2)社会保険：会社の健康保険・厚生年金ではなく、国民健康保険・国民年金へ自分で加入します（EOR=雇用代行サービス経由で現地法人雇用に近い形を取る企業もあります）。(3)為替リスク：外貨建て報酬は円換算額が変動します。(4)雇用保護：日本の労働法の解雇規制が及ばない契約が多く、契約終了リスクを織り込んだ貯蓄・スキル管理が大切です。",
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
    { "@type": "ListItem", position: 3, name: "女性エンジニアが海外で働くには", item: "https://women-engineer.com/articles/work-abroad/" },
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
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "女性エンジニアが海外で働くには" },
            ]}
          />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>
              働き方
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアが海外で働くには？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収比較・ビザの基礎・4つのルート【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border-2 p-6" style={{ borderColor: "#0891b2", backgroundColor: "#ecfeff" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>この記事の結論</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li>
                ① 米国のソフトウェア開発者の<strong>年収中央値は133,080ドル（約2,130万円）</strong>と日本の2倍以上（米国労働統計局・2024年5月時点、1ドル=160円換算）。ただし税・物価・家賃を引いた手取り差は額面ほど大きくない。
              </li>
              <li>
                ② 海外で働くルートは<strong>「日本企業の海外駐在」「外資系日本法人から海外異動」「現地採用」「海外フルリモート」の4つ</strong>。難易度・英語要件・準備がそれぞれ異なる。
              </li>
              <li>
                ③ 就労ビザは国ごとに制度が大きく違う（米H-1B/L-1、加Express Entry、独EUブルーカード、豪Skills in Demand、シンガポールEP）。<strong>IT職は多くの国で優遇</strong>されるが、要件は頻繁に変わるため公式サイトでの確認が必須。
              </li>
              <li>
                ④ 英語力は「ビザ申請に必要な公式スコア」と「採用選考を通る実践力」を分けて考える。開発職なら<strong>CEFR B2程度＋英語の技術面接対策</strong>が現実的なライン。
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. 海外で働く4つのルート（比較表）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 国別エンジニア年収比較（出典付き）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. ルート別の進め方と向いている人</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 就労ビザの基礎知識（主要5カ国）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 必要な英語力の現実的なライン</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 海外を見据えた準備ステップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. おすすめの転職サービス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 4ルート */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">海外で働く4つのルート（比較表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「海外で働く」と一口に言っても、入口は大きく4つに分かれます。<strong>どのルートを選ぶかで、必要な英語力・ビザの扱い・年収水準・リスクがまったく変わる</strong>ため、まず全体像を押さえましょう。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>ルート</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>難易度</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>英語要件の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>主な準備</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>① 日本企業の海外駐在</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>低〜中（社内選抜次第）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>業務によりB1〜B2</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>海外拠点を持つ企業への転職・社内公募への応募</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>② 外資系日本法人 → 海外異動</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>中</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>B2（社内公用語が英語の場合あり）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>外資系日本法人への転職→実績→社内トランスファー（米国はL-1等）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>③ 現地採用（直接応募）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>高</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>B2〜C1＋英語の技術面接</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>英文レジュメ・LinkedIn・コーディング面接対策・ビザスポンサー企業探し</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>④ 海外フルリモート（日本在住）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>中〜高（ビザ不要）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>B2（非同期の読み書きが中心）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>リモート求人プラットフォーム・業務委託契約と税務の知識</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ※ 難易度・英語要件は一般的な傾向の目安です。CEFR（ヨーロッパ言語共通参照枠）のB2は「自分の専門分野の議論に参加できる」レベル、C1は「複雑な話題でも流暢にやり取りできる」レベルに相当します。ライフイベントとの両立を重視するなら、移住を伴わない④から始めて③へ進む段階的な戦略も有効です。キャリア全体の設計は<a href="/articles/career-path/" className="underline" style={{ color: "#0891b2" }}>キャリアパス設計ガイド</a>も参考にしてください。
          </p>
        </div>
      </section>

      {/* sec2 年収比較 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">国別エンジニア年収比較（出典付き）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              公的統計と給与データプラットフォームの公表値をもとに、主要国のソフトウェアエンジニアの年収水準を比較します。米国は<strong>米国労働統計局（BLS）の職業統計</strong>、その他はエンジニア給与データベース<strong>Levels.fyi</strong>の国別公表値を使用しています。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>国</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>公表値</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>円換算の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>出典・注記</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>米国（全体）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>年収中央値 133,080ドル</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約2,130万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>BLS「Software Developers」2024年5月時点。上位10%は211,450ドル超</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>米国（テック大手中心）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>総報酬 約192,000ドル</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約3,070万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Levels.fyi。株式報酬・賞与込み。投稿ベースで大手テック寄りに高めに出る点に注意</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>カナダ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約10.1万〜18.4万カナダドル</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約1,160万〜2,110万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Levels.fyiのレンジ。トロント・バンクーバーに求人が集中</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>ドイツ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>総報酬 約82,400ユーロ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約1,520万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Levels.fyi。ベルリン・ミュンヘンが中心。労働時間規制・休暇が手厚い</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>シンガポール</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>総報酬 約114,000シンガポールドル</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約1,430万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Levels.fyi。所得税率が比較的低く手取りが残りやすい</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>日本（参考）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>総報酬 約849万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>—</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Levels.fyi日本。外資・大手テック投稿が中心で国内平均より高め</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>この表を読むときの3つの注意</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>為替前提</strong>: 1ドル=160円、1ユーロ=184円、1カナダドル=115円、1シンガポールドル=125円の概算（2026年6月時点）。為替が10%動けば円換算額も10%変わります。</li>
              <li>② <strong>手取りは税・社会保険・物価で大きく変わる</strong>: 米国テック都市の家賃・保険・教育費は非常に高く、額面の差ほど可処分所得の差は開かないことが多いです。</li>
              <li>③ <strong>データの性質</strong>: Levels.fyiはユーザー投稿ベースで大手テック企業に偏りがあり、各国の「平均的な企業」より高めに出ます。米国のBLS中央値が市場全体の実勢に近い指標です。</li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            なお、日本国内でも外資系企業や大手テックなら年収1,000万円台は十分に狙えます。海外移住と国内高年収の比較は<a href="/articles/salary-1000man/" className="underline" style={{ color: "#0891b2" }}>年収1000万円を目指す方法</a>で詳しく解説しています。
          </p>
        </div>
      </section>

      {/* sec3 ルート別の進め方 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ルート別の進め方と向いている人</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>① 日本企業の海外駐在 ── リスク最小で海外経験を積む</h3>
              <p className="text-sm text-text-light leading-relaxed">
                日本本社の雇用を維持したまま海外拠点へ赴任するルートです。ビザ手続きは会社が企業内転勤系の枠組みで進め、住居・赴任手当などのサポートも受けられるため、<strong>生活リスクが最も小さい</strong>のが特徴です。一方で赴任先・時期を自分で選びにくく、給与体系は日本基準＋手当が基本です。海外拠点を持つメーカー・SIer・大手Web企業に転職し、社内公募に手を挙げるのが入口になります。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>② 外資系日本法人 → 海外異動 ── 米国を目指すなら本命</h3>
              <p className="text-sm text-text-light leading-relaxed">
                まず外資系企業の日本法人に転職し、1〜2年以上の実績を作ってから社内トランスファーで海外オフィスへ移るルートです。米国の場合、抽選制のH-1Bと異なり<strong>企業内転勤ビザ（L-1）は抽選がなく</strong>、勤続1年以上などの要件を満たせば会社主導で申請できます。日本にいる間に英語環境・評価制度・社内ネットワークに慣れられるため、後述するH-1Bの不確実性が高まっている2026年時点では、米国を目指す最有力ルートといえます。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>③ 現地採用 ── 年収・キャリアの天井が最も高い</h3>
              <p className="text-sm text-text-light leading-relaxed">
                海外企業の求人にLinkedInや企業採用ページから直接応募するルートです。現地水準の報酬を得られる反面、<strong>英文レジュメ（日本の履歴書と形式が異なる）・英語のコーディング面接・システムデザイン面接・行動面接</strong>の対策が必要で、ビザスポンサーをしてくれる企業を見つけるハードルもあります。移民受け入れに積極的なカナダ、IT人材の枠組みが整ったドイツ、英語が公用語で日本から近いシンガポールなどは、米国より入口が広い選択肢です。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>④ 海外フルリモート ── 移住もビザも不要</h3>
              <p className="text-sm text-text-light leading-relaxed">
                日本に住んだまま海外企業の開発に参加するルートです。就労ビザが不要で、生活基盤を変えずに外貨建ての報酬を得られるため、<strong>育児・介護と両立したい人や、移住前の助走として試したい人</strong>に向いています。契約はコントラクター（業務委託）型が多く、確定申告・社会保険の自己管理が必要です。時差は欧州企業（7〜9時間）のほうが米国企業（13〜17時間）より調整しやすい傾向です。国内のフルリモート企業と比較検討したい場合は<a href="/articles/fullremote-companies/" className="underline" style={{ color: "#0891b2" }}>フルリモート企業ガイド</a>も参考になります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 ビザ */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">就労ビザの基礎知識（主要5カ国）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              就労ビザは海外で働く最大の関門です。IT職は多くの国で「不足職種」「高度人材」として優遇されますが、<strong>制度・金額要件は毎年のように改定されます</strong>。以下は2026年6月時点で確認できる制度名と骨子です。応募・申請前に必ず各国政府の公式サイトで最新要件を確認してください。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>国</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>主な制度</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>2026年時点の骨子</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>米国</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>H-1B（専門職）／L-1（企業内転勤）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>H-1Bは年間85,000件上限（うち2万件は米国修士以上枠）の抽選制。2025年9月の大統領布告で国外からの新規申請に10万ドルの手数料（訴訟係属中）。2026年2月発効の規則でFY2027から賃金水準を加重した選抜へ。L-1は抽選なしで企業主導</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>カナダ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Express Entry（永住権）／就労許可</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>学歴・職歴・年齢・言語力をポイント化（CRS）し、高得点者に永住権申請の招待。STEM職種を対象としたカテゴリー別選抜の枠組みがあり、2026年からSTEMカテゴリーの必要職歴が6カ月→1年に変更。IELTS等の言語スコアが得点に直結</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>ドイツ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>EUブルーカード</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>高度人材向け滞在許可。2026年の年収下限は標準50,700ユーロ、IT等の不足職種は45,934.20ユーロに引き下げ。大学学位のないIT人材も直近7年で3年以上の実務経験があれば対象になり得る</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>オーストラリア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Skills in Demand ビザ（サブクラス482）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>旧TSSビザを再編した雇用主スポンサー型。Specialist Skills／Core Skills等のストリーム制で有効期間4年、永住権（ENS）への移行パスあり。必要職歴は直近5年内の1年以上に緩和</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>シンガポール</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Employment Pass（EP）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>専門職向け就労パス。最低月給5,600シンガポールドル（金融は6,200）に加え、給与・学歴・国籍多様性などを点数化するCOMPASS制度で40点以上が必要。2027年1月から最低月給は6,000シンガポールドルへ引き上げ予定</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>実務上のポイント</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・就労ビザの申請は<strong>原則として雇用主（スポンサー企業）が主体</strong>です。内定前に個人でできるのは、要件の把握と語学スコアなどの準備です。</li>
              <li>・カナダのExpress Entryは例外的に<strong>雇用オファーなしでも永住権を申請できる</strong>制度で、エンジニアには使いやすい選択肢です。</li>
              <li>・米国の新規H-1Bは2025〜2026年の制度変更で不確実性が増しており、<strong>L-1（企業内転勤）ルートの相対的な価値が上がっています</strong>。</li>
              <li>・本記事は制度の概要であり、個別の可否は移民弁護士・公式窓口へ。<strong>金額・要件は必ず公式サイトで最新版を確認</strong>してください。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 英語力 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要な英語力の現実的なライン</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              英語力は「ビザ・永住権申請のための公式スコア」と「採用選考・実務を乗り切る実践力」の2つに分けて考えると整理できます。前者はカナダExpress EntryのようにIELTS等のスコアが直接ポイント化される制度があり、後者は試験スコアより<strong>英語で技術を説明できるか</strong>が問われます。海外企業の採用でTOEICが基準に使われることはほぼありません。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>職種・働き方</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>現実的なライン（CEFR目安）</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>理由</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>バックエンド／インフラ／SRE</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>B2</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>成果物がコード・設計で評価される。読解とテキストコミュニケーションの比重が高い</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>海外フルリモート（非同期中心）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>B2（書く力重視）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ドキュメント・PR・Slackなど書き言葉が主戦場。会話量は移住より少ない</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>フロントエンド／デザイン連携が多い職種</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>B2〜C1</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>仕様のすり合わせ・ユーザー視点の議論など口頭での調整がやや多い</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>PM／EM／コンサル系</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>C1</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>交渉・利害調整・登壇など、言語そのものが武器になる職種</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              採用選考の山場は<strong>英語の技術面接</strong>です。コーディング面接（LeetCode形式）・システムデザイン面接・行動面接（Behavioral Interview）を英語で受ける練習が、汎用的な英会話学習よりも合否に直結します。「自分の書いたコードを英語で説明する」「過去のプロジェクトをSTAR形式（状況・課題・行動・結果）で話す」練習から始めるのが効率的です。
            </p>
            <p>
              完璧な英語は必要ありません。世界のテックチームは非ネイティブだらけで、訛りより「技術的に正確で簡潔なコミュニケーション」が評価されます。まず国内の外資系・英語使用企業で実務の英語に慣れる、というステップを挟むと無理がありません。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 準備ステップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">海外を見据えた準備ステップ</h2>
          <div className="space-y-4">
            {[
              ["STEP1", "ルートを決める", "4つのルートから現実的な入口を選ぶ。育児・介護との両立重視なら④海外リモート、米国志向なら②外資日本法人経由が定石です。"],
              ["STEP2", "英文レジュメとLinkedInを整える", "日本の履歴書と異なり、成果を数字で書く1〜2枚のレジュメが標準。LinkedInを英語で充実させるとリクルーターからの接触も増えます。"],
              ["STEP3", "英語の技術面接対策", "コーディング面接・システムデザイン・行動面接を英語で練習。自分のコードとキャリアを英語で説明できることが最優先です。"],
              ["STEP4", "ビザ要件の確認と語学スコア取得", "目標国の公式サイトで最新要件を確認。カナダ志向ならIELTSなどポイントに直結するスコアを先に確保しておくと有利です。"],
              ["STEP5", "国内の外資・グローバル企業で助走", "いきなり海外現地採用が難しければ、まず国内で英語を使う環境に移るのが確実な一歩。市場価値の確認はエージェントの無料面談が手軽です。"],
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
            海外経験は帰国後のキャリアにも効きます。長期的なキャリア戦略は<a href="/articles/long-career-tips/" className="underline" style={{ color: "#0891b2" }}>長く活躍し続けるためのヒント</a>もあわせてどうぞ。
          </p>
        </div>
      </section>

      {/* sec7 おすすめの転職サービス */}
      <section id="sec7" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">おすすめの転職サービス</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>海外転職に強い転職エージェントとしては、JACリクルートメント（海外転職に実績豊富）、Robert Walters（外資系・グローバル企業に強い）、Michael Page（世界的な転職エージェント）がおすすめです。</p>
        <p>求人サイトでは、LinkedIn（海外転職の必須ツール）、Glassdoor（企業の口コミ・年収情報が充実）、AngelList/Wellfound（スタートアップ求人に強い）を活用しましょう。LinkedInのプロフィールを英語で充実させることは、海外転職の第一歩です。</p>
        <p>日本にいながら海外企業にリモートで働きたい場合は、Toptal、Turing、Remote.coなどのリモートジョブプラットフォームが役立ちます。これらのプラットフォームでは、世界中のリモートポジションを探すことができます。</p>
        <p>まずは国内のIT特化型エージェントで市場価値を確認してから、海外転職にチャレンジするのも良い戦略です。レバテックキャリアやGeeklyで外資系IT企業の求人を紹介してもらうこともできます。</p>
      </div></div>
      </section>

      {/* sec8 FAQ */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
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
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>キャリアパス設計ガイド</h3><p className="text-sm text-text-light">5年後・10年後のキャリア設計</p></a>
            <a href="/articles/salary-1000man/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>年収1000万円を目指す方法</h3><p className="text-sm text-text-light">国内で高年収を実現するルート</p></a>
            <a href="/articles/fullremote-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>フルリモート企業ガイド</h3><p className="text-sm text-text-light">場所にとらわれない働き方の選択肢</p></a>
            <a href="/articles/long-career-tips/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>長く活躍し続けるためのヒント</h3><p className="text-sm text-text-light">ライフイベントと両立するキャリア戦略</p></a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考データ</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 米国労働統計局（BLS）「Occupational Outlook Handbook: Software Developers」年収中央値133,080ドル（2024年5月時点データ、2026年6月参照）</li>
            <li>出典: Levels.fyi「Software Engineer Salary」各国別ページ（米国・日本・ドイツ・シンガポール・カナダ、2026年6月参照）</li>
            <li>出典: 米国市民権・移民業務局（USCIS）「H-1B Cap Season」「H-1B Electronic Registration Process」（2026年6月参照）</li>
            <li>出典: カナダ移民・難民・市民権省（IRCC）「Express Entry: Category-based selection」（2026年6月参照）</li>
            <li>出典: ドイツ連邦政府ポータル「Make it in Germany: EU Blue Card」（2026年6月参照）</li>
            <li>出典: オーストラリア内務省「Skills in Demand visa (subclass 482)」（2026年6月参照）</li>
            <li>出典: シンガポール人材省（MOM）「Eligibility for Employment Pass」（2026年6月参照）</li>
          </ul>
          <p className="text-xs text-text-light mt-4">
            ※ 円換算は1ドル=160円、1ユーロ=184円、1カナダドル=115円、1シンガポールドル=125円（2026年6月時点の概算）で計算しています。為替・各国制度は変動するため、最新情報は必ず公式サイトでご確認ください。
          </p>
        </div>
      </section>

      <section className="py-12"><div className="mx-auto max-w-4xl px-4 text-center"><div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}><h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2><p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p><a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a></div></div>
      </section>
    </>
  );
}
