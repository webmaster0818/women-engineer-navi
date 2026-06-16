import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの需要はなぜ高い？統計データで見る市場価値【2026年最新】",
  description:
    "女性エンジニアの需要を統計データで検証。IT人材は2030年に最大約79万人不足（経産省）、エンジニア求人倍率10.68倍（doda）、日本の女性エンジニア比率18.8%はOECD平均以下。人材不足×低い女性比率×ダイバーシティ要請×政策の後押しという構造的理由と、需要を年収・キャリアに変える方法を全数値出典付きで解説します。",
  alternates: { canonical: "/articles/demand/" },
  openGraph: {
    title: "女性エンジニアの需要はなぜ高い？統計データで見る市場価値【2026年最新】",
    description:
      "IT人材は2030年に最大約79万人不足（経産省）、エンジニア求人倍率10.68倍（doda）、女性エンジニア比率18.8%。女性エンジニアの需要が高い構造的理由を統計データと出典で論証し、需要を市場価値に変える方法まで解説します。",
    url: "https://women-engineer.com/articles/demand/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの需要はなぜ高い？統計データで見る市場価値【2026年最新】",
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
    "IT人材は2030年に最大約79万人不足（経済産業省）、エンジニア求人倍率10.68倍（doda）、日本の女性エンジニア比率18.8%（ヒューマンリソシア）。女性エンジニアの需要が高い構造的理由を公的統計・公開調査の出典付きで論証したデータ記事。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/demand/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性エンジニアの需要は本当に高いのですか？データはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "あります。まず職種全体として、エンジニア（IT・通信）の転職求人倍率は10.68倍（パーソルキャリア「doda転職求人倍率レポート」2026年3月、全職種平均2.39倍）で、1人の転職希望者に約10件の求人がある状態です。背景には経済産業省「IT人材需給に関する調査」が示す2030年に最大約79万人のIT人材不足という構造的な需給ギャップがあります。さらにIPA「DX動向2025」では、DXを推進する人材が量的に不足していると答えた日本企業は85.1%に達します。この「全体需要の高さ」に、女性比率18.8%という少数派ゆえのダイバーシティ採用の動きが重なるのが、女性エンジニアの需要の実態です。",
      },
    },
    {
      "@type": "Question",
      name: "なぜ企業は女性エンジニアの採用・登用を強化しているのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "理由は大きく3つです。(1)人材不足への対応：2030年に最大約79万人のIT人材不足（経済産業省）が見込まれる中、女性比率18.8%のIT業界には未開拓の採用母集団が残っています。(2)法令・開示要請：2026年4月施行の改正女性活躍推進法により、男女間賃金差異と女性管理職比率の公表義務が常時雇用101人以上の企業に拡大され、女性の採用・登用実績が外部から見える時代になりました。(3)政府目標：女性版骨太の方針2023は東証プライム上場企業の女性役員比率を2030年までに30%以上とする目標を掲げています。採用・登用の実績づくりが企業の経営課題になっているのが現状です。",
      },
    },
    {
      "@type": "Question",
      name: "日本の女性エンジニア比率はどのくらいですか？海外と比べて低いのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ヒューマンリソシア「データで見る世界のITエンジニアレポート」によると、日本のITエンジニアに占める女性比率は18.8%（2023年データ）で、OECD平均の20.6%を下回り、比較33カ国中17位です。約5人に1人未満という少数派であることが、逆に「女性エンジニアを増やしたい」という企業・政府双方の動きを生んでいます。なお、この比率は調査によって定義（対象職種の範囲）が異なるため、出典とセットで読むことが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもエンジニア需要の恩恵を受けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "受けられますが、条件があります。求人倍率10.68倍（doda、2026年3月）は経験者を含むIT・通信全体の値で、未経験者向け求人の倍率はこれより低くなります。一方で政府は「女性デジタル人材育成プラン」（2022年4月・男女共同参画会議決定）でデジタルスキル習得支援と就労支援を推進しており、自治体の無料講座や東京都の女性向けIT育成事業など、未経験から学べる公的支援が整っています。需要の恩恵を受けるには、3〜6か月程度の学習でポートフォリオを作り、需要の高い分野のスキルを示せる状態にすることが前提です。",
      },
    },
    {
      "@type": "Question",
      name: "特に需要が高い職種・スキルは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "年収データから逆算すると、上流工程・クラウド・AI・セキュリティ分野の需要が突出しています。dodaの「平均年収ランキング2025」では技術系（IT/通信）の最高はプロジェクトマネジャーの707万円で、セキュリティコンサルタント/アナリスト649万円、プリセールス642万円が続きます。高い年収は採用競争の激しさ＝需要の強さの表れです。IPA「DX動向2025」でもDX推進人材の量が「大幅に不足」とする企業が58.5%に上り、DX文脈のスキル（クラウド、データ活用、AI）は今後も需要が続くと読めます。",
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
              { label: "女性エンジニアの需要データ" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              データ・統計
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの需要はなぜ高い？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                統計データで見る市場価値【2026年最新】
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
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>結論：データで見る女性エンジニアの需要</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>IT人材は<strong>2030年に最大約79万人不足</strong>の試算（出典: 経済産業省「IT人材需給に関する調査」）。エンジニア（IT・通信）の転職求人倍率は<strong>10.68倍</strong>と全職種平均2.39倍の4倍超です（出典: doda転職求人倍率レポート・2026年3月）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>日本のITエンジニアの女性比率は<strong>18.8%</strong>で、OECD平均20.6%を下回る33カ国中17位（出典: ヒューマンリソシア）。<strong>人材不足なのに女性が少ない</strong>＝企業にとって最大の未開拓採用層です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>政策も後押し。「<strong>女性デジタル人材育成プラン</strong>」（2022年・男女共同参画会議）に加え、<strong>2026年4月施行の改正女性活躍推進法</strong>で男女間賃金差異・女性管理職比率の公表義務が101人以上の企業へ拡大。女性の採用・登用が企業の開示項目になりました。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>ただし需要は「女性だから」ではなく<strong>スキルとセット</strong>で発生します。需要を年収に変える職種・スキル戦略は本文6章へ。</span>
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
              <li>
                <a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>
                  1. IT人材不足の現状 — 経産省試算と求人倍率データ
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>
                  2. 女性エンジニア比率の統計 — 日本とOECDの比較
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>
                  3. 需要が高い4つの構造的理由（データで論証）
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>
                  4. 政策の後押し — 女性デジタル人材育成プランと改正女性活躍推進法
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>
                  5. 企業のダイバーシティ採用はどこまで本気か
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>
                  6. 需要を市場価値に変える方法 — 職種選択とスキル投資
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>
                  7. データを読むときの3つの注意点
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>
                  8. おすすめ転職エージェント
                </a>
              </li>
              <li>
                <a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>
                  9. よくある質問
                </a>
              </li>
              <li>
                <a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>
                  10. 出典・参考資料
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 IT人材不足 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">IT人材不足の現状 — 経産省試算と求人倍率データ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              女性エンジニアの需要を語る出発点は、IT人材全体の需給ギャップです。経済産業省「IT人材需給に関する調査」（みずほ情報総研、2019年4月公表）は、IT需要の伸びと労働生産性の変化に応じた3つのシナリオで2030年のIT人材不足数を試算しています。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>シナリオ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>前提（IT需要の伸び率）</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>2030年の不足数</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>低位シナリオ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約1%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約16万人</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>中位シナリオ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約2〜5%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約45万人</td>
                </tr>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>高位シナリオ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約3〜9%</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>最大約79万人</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 経済産業省「IT人材需給に関する調査」（みずほ情報総研、2019年4月公表）（2026年6月参照）。よく引用される「79万人不足」は高位シナリオの値です。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              この需給ギャップは、転職市場の数値にそのまま表れています。パーソルキャリア「doda転職求人倍率レポート」（2026年4月発行版）によると、2026年3月の転職求人倍率は全職種平均2.39倍に対し、<strong>エンジニア（IT・通信）は10.68倍</strong>。転職希望者1人に対して約10件の求人がある計算で、全職種の中でも突出した売り手市場です。
            </p>
            <p>
              さらに企業側の実感を示すのがIPA（情報処理推進機構）「DX動向2025」です。DXを推進する人材の「量」が不足していると答えた日本企業は<strong>85.1%</strong>（「大幅に不足している」だけで58.5%）。米国の23.8%、ドイツの44.6%と比べても、日本の人材不足感は突出しています。
            </p>
            <p>
              つまり「エンジニアの需要が高い」は感覚論ではなく、<strong>政府試算・求人倍率・企業調査の3系統のデータが揃って示す事実</strong>です。この大きな需要の中に、女性エンジニア固有の需要構造が乗っています。次章で見ていきます。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 女性比率 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニア比率の統計 — 日本とOECDの比較</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ヒューマンリソシア「データで見る世界のITエンジニアレポート」によると、日本のITエンジニアに占める女性比率は<strong>18.8%</strong>（2023年データ）です。OECD平均の20.6%を下回り、比較対象の33カ国中17位。エンジニアの約5人に4人以上が男性という構成は、他の主要職種と比べても女性が明確な少数派であることを示します。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>指標</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>数値</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>出典</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>日本のITエンジニア女性比率</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>18.8%（2023年データ）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ヒューマンリソシア「データで見る世界のITエンジニアレポート」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>OECD平均の女性比率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>20.6%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>同上</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>日本の国際順位</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>比較33カ国中17位</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>同上</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: ヒューマンリソシア「データで見る世界のITエンジニアレポート」（2026年6月参照）。女性比率は調査ごとに対象職種の定義が異なるため、数値は出典とセットで参照してください。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              重要なのは、この「18.8%」を人材不足（前章）と重ねて読むことです。エンジニアが79万人規模で足りなくなる試算がある一方、<strong>労働力の半分を占める女性がエンジニア職では2割弱しかいない</strong>。企業から見れば、女性は採用市場に残された最大の未開拓層であり、政府から見れば、デジタル分野のジェンダーギャップ解消と人材確保を同時に達成できる政策ターゲットです。
            </p>
            <p>
              実際、この構図が4章で扱う「女性デジタル人材育成プラン」の出発点になっています。少数派であることは現場で心細さにつながる面もありますが、<strong>需要の観点では明確に追い風</strong>──これがデータから言える結論です。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 構造的理由 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">需要が高い4つの構造的理由（データで論証）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              ここまでのデータを整理すると、女性エンジニアの需要は「一時的なブーム」ではなく、4つの要因が重なった<strong>構造的なもの</strong>だと分かります。それぞれに数値の裏付けがあります。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>理由1: IT人材の絶対数が足りない</h3>
              <p className="text-sm text-text-light">
                2030年に最大約79万人不足（出典: 経済産業省）、求人倍率10.68倍（出典: doda・2026年3月）、企業の85.1%がDX人材の量不足を認識（出典: IPA「DX動向2025」）。<strong>性別以前に、エンジニアという職種全体が長期の売り手市場</strong>です。需要の土台はここにあります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>理由2: 女性比率18.8%＝最大の未開拓採用層</h3>
              <p className="text-sm text-text-light">
                人材が足りないのに、女性はエンジニアの2割弱しかいません（出典: ヒューマンリソシア）。男性エンジニアの獲得競争が激化する中、<strong>女性の採用母集団を広げることが人材確保の合理的な戦略</strong>になっており、女性向け採用イベントやリターン採用（復職者向け採用）を行う企業が増えています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>理由3: ダイバーシティが「開示される経営指標」になった</h3>
              <p className="text-sm text-text-light">
                2026年4月施行の改正女性活躍推進法で、<strong>男女間賃金差異と女性管理職比率の公表義務が常時雇用101人以上の企業に拡大</strong>（出典: 厚生労働省）。女性版骨太の方針2023は東証プライム上場企業の女性役員比率を<strong>2030年までに30%以上</strong>とする目標を設定（出典: 内閣府男女共同参画局）。女性の採用・登用は「善意の取り組み」から「外部に開示される経営指標」へ変わり、実績づくりの需要が生まれています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>理由4: 政府が予算をつけて女性デジタル人材を育成している</h3>
              <p className="text-sm text-text-light">
                「女性デジタル人材育成プラン」（2022年4月・男女共同参画会議決定）により、デジタルスキル習得支援と就労支援が国・自治体の事業として展開されています（出典: 内閣府男女共同参画局）。<strong>学習段階から公的支援がある職種は他にほとんどなく</strong>、未経験からの参入ルートが制度として整備されているのが特徴です（詳細は次章）。
              </p>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              まとめると、<strong>「人材不足（需要の土台）×低い女性比率（未開拓層）×開示義務化（企業の動機）×政策の後押し（参入支援）」</strong>の4つが同時に働いているのが2026年の状況です。一つの要因が崩れても他が残る多重構造のため、需要は短期では消えにくいと考えられます。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 政策 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">政策の後押し — 女性デジタル人材育成プランと改正女性活躍推進法</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              女性エンジニアに関係する政策は、実在する公的文書で確認できます。代表的な3つを整理します。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>政策</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>内容</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>出典</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>女性デジタル人材育成プラン<br />（2022年4月26日決定）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>男女共同参画会議で決定。就労に直結するデジタルスキルの習得支援と、デジタル分野への就労支援を政府一体で集中的に推進。自治体の無料・低額講座等の事業に展開</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>内閣府男女共同参画局</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>改正女性活躍推進法<br />（2026年4月1日施行）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>男女間賃金差異の公表義務を常時雇用101人以上の企業に拡大し、女性管理職比率の公表を新たに義務化（101〜300人企業は計3項目以上の公表が必要）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>厚生労働省</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>女性版骨太の方針2023<br />（2023年6月決定）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>東証プライム上場企業の女性役員比率を2030年までに30%以上とする目標。2025年をめどに女性役員最低1人の選任を促す（努力義務）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>内閣府男女共同参画局</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 内閣府男女共同参画局「女性デジタル人材育成プラン」、厚生労働省「改正女性活躍推進法」関連資料（いずれも2026年6月参照）。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              転職者の視点で重要なのは2点です。第一に、<strong>未経験者には学習段階の公的支援がある</strong>こと。女性デジタル人材育成プランに基づく事業として、自治体の女性向けITスキル講座が各地で実施されており、東京都の事例は<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>東京都の女性ITエンジニア育成事業の記事</a>で詳しく解説しています。
            </p>
            <p>
              第二に、<strong>経験者には「開示時代の選社眼」が持てる</strong>こと。2026年4月以降、101人以上の企業は男女間賃金差異と女性管理職比率を公表するため、応募前に企業の実態を数値で比較できます。賃金差が小さく女性管理職比率が高い企業の見極め方は<a href="/articles/women-friendly-companies/" className="underline" style={{ color: "#7c3a55" }}>女性が働きやすいIT企業の記事</a>を参照してください。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 ダイバーシティ採用動向 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">企業のダイバーシティ採用はどこまで本気か</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「ダイバーシティ採用」は掛け声だけの企業と、実態が伴う企業に分かれます。本気度を測る客観的な手がかりは、<strong>企業が外部に公表している数値</strong>です。
            </p>
            <p>
              まず制度面では、女性活躍推進法に基づき常時雇用101人以上の企業は行動計画の策定・情報公表が義務で、厚生労働省「女性の活躍推進企業データベース」で<strong>企業名から女性採用比率・女性管理職比率・男女別の育休取得率などを無料検索</strong>できます。2026年4月の改正施行後は男女間賃金差異・女性管理職比率の公表対象が101人以上へ広がるため、比較できる企業数はさらに増えます。
            </p>
            <p>
              上場企業については、2023年3月期から有価証券報告書で女性管理職比率・男性育休取得率・男女間賃金差異の開示が義務化されており（出典: 金融庁・企業内容等の開示に関する内閣府令の改正）、投資家もこれらの数値で企業を評価します。<strong>採用ページの言葉ではなく、開示数値の推移で本気度を判断できる</strong>時代です。
            </p>
            <p>
              なお、IT業界はこの文脈で有利な実態データを持っています。情報通信業の育休取得率は女性94.4%・男性58.1%と全産業平均（女性86.6%・男性40.5%）を大きく上回り（出典: 厚生労働省「令和6年度雇用均等基本調査」）、テレワーク導入率は94.3%と全産業トップ（出典: 総務省「令和6年通信利用動向調査」）。<strong>「長く働き続けられる環境」の整備が他業界より進んでいる</strong>ことが、女性のキャリア継続と需要の好循環を支えています。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 市場価値に変える */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">需要を市場価値に変える方法 — 職種選択とスキル投資</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              需要が高くても、それが自動的に年収やキャリアに変わるわけではありません。需要の強い分野に自分のスキルを寄せることで初めて市場価値になります。判断材料として、dodaの「平均年収ランキング2025」による技術系（IT/通信）の高年収職種を見てみます。<strong>年収の高さは、採用競争の激しさ＝需要の強さの代理指標</strong>です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>職種（技術系 IT/通信）</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均年収</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>需要の背景</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>プロジェクトマネジャー</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>707万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>DX案件の増加に対し上流人材が恒常的に不足</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>セキュリティコンサルタント/アナリスト</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>649万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>サイバー攻撃対策・法令対応で需要が拡大</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>プリセールス</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>642万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>SaaS拡大で技術×提案の複合人材が希少</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: パーソルキャリア「doda平均年収ランキング2025」技術系（IT/通信）（2026年6月参照）。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              スキル面では、IPA「DX動向2025」が示すとおりDX推進人材（クラウド・データ活用・AI関連）の不足感が最も強く、この領域のスキル投資は需要に直結します。女性ITエンジニアの平均年収419万円（出典: doda「平均年収ランキング2025」）に対し、上記の高需要職種は200万円以上高い水準にあり、<strong>職種選択そのものが最大の年収戦略</strong>です。年収データの全体像は<a href="/articles/salary/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</a>で詳しく整理しています。
            </p>
            <p>
              キャリアの組み立て方は段階によって異なります。未経験から参入するなら、公的支援を活用しつつ3〜6か月の学習でポートフォリオを作るのが現実的なルートです（<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験から女性エンジニアになる方法</a>）。経験者なら、マネジメント・スペシャリスト・フリーランスなどの選択肢を5年単位で設計することで需要を長期の市場価値に変えられます（<a href="/articles/career-path/" className="underline" style={{ color: "#7c3a55" }}>キャリアパス設計ガイド</a>）。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 注意点 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データを読むときの3つの注意点</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 「79万人不足」は最大シナリオの値</h3>
              <p className="text-sm text-text-light">
                経産省の試算は低位約16万人・中位約45万人・高位約79万人の3シナリオで、79万人は最も需要が伸びるケースです。また2019年公表の試算であり、AIによる生産性向上などで実際の数値は変わりえます。「最大で79万人という試算がある」という読み方が正確です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 求人倍率10.68倍は「経験者を含むIT・通信全体」の単月値</h3>
              <p className="text-sm text-text-light">
                doda転職求人倍率レポートの値は月次で変動し、経験者向け求人が大半を占めます。未経験者向け・地方・特定職種に絞ると倍率は下がるため、「自分の条件での需要」はエージェント経由で個別に確認するのが確実です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 需要は「女性だから」ではなく「スキル×女性比率の文脈」で生まれる</h3>
              <p className="text-sm text-text-light">
                開示義務や政府目標は採用の追い風ですが、選考で評価されるのはスキルと実績です。「女性優遇で採用される」と読むのは誤りで、「同等のスキルなら需要構造が有利に働く」が正しい理解です。だからこそ6章のとおり、需要の強い分野へのスキル投資が市場価値を決めます。
              </p>
            </div>
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

      {/* sec9 FAQ */}
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

      {/* sec10 出典 */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>・出典: 経済産業省「IT人材需給に関する調査」（みずほ情報総研、2019年4月公表）（2026年6月参照）— 2030年のIT人材不足試算：低位約16万人・中位約45万人・高位最大約79万人</li>
            <li>・出典: パーソルキャリア「doda転職求人倍率レポート」2026年4月発行版（2026年6月参照）— 2026年3月の転職求人倍率：全体2.39倍、エンジニア（IT・通信）10.68倍</li>
            <li>・出典: ヒューマンリソシア「データで見る世界のITエンジニアレポート」（2026年6月参照）— 日本のITエンジニア女性比率18.8%（2023年データ）、OECD平均20.6%、比較33カ国中17位</li>
            <li>・出典: IPA（独立行政法人情報処理推進機構）「DX動向2025」（2026年6月参照）— DX推進人材の量が不足とする日本企業85.1%（「大幅に不足」58.5%）、米国23.8%・ドイツ44.6%</li>
            <li>・出典: 内閣府男女共同参画局「女性デジタル人材育成プラン」（2022年4月26日男女共同参画会議決定）（2026年6月参照）— デジタルスキル習得支援・就労支援の政府一体推進</li>
            <li>・出典: 厚生労働省「改正女性活躍推進法」関連資料（2026年6月参照）— 2026年4月1日施行：男女間賃金差異の公表義務を101人以上に拡大、女性管理職比率の公表を新規義務化</li>
            <li>・出典: 内閣府男女共同参画局「女性活躍・男女共同参画の重点方針2023（女性版骨太の方針2023）」（2026年6月参照）— 東証プライム上場企業の女性役員比率を2030年までに30%以上とする目標</li>
            <li>・出典: 金融庁「企業内容等の開示に関する内閣府令」改正（2026年6月参照）— 2023年3月期から有価証券報告書で女性管理職比率・男性育休取得率・男女間賃金差異の開示義務化</li>
            <li>・出典: 厚生労働省「令和6年度雇用均等基本調査」（2026年6月参照）— 情報通信業の育休取得率 女性94.4%・男性58.1%（全産業平均 女性86.6%・男性40.5%）</li>
            <li>・出典: 総務省「令和6年通信利用動向調査」（2026年6月参照）— テレワーク導入率：情報通信業94.3%、企業全体47.3%</li>
            <li>・出典: パーソルキャリア「doda平均年収ランキング2025」（2026年6月参照）— 技術系（IT/通信）女性平均419万円、プロジェクトマネジャー707万円、セキュリティコンサルタント/アナリスト649万円、プリセールス642万円</li>
          </ul>
          <p className="text-xs text-text-light mt-4">
            ※ 本記事の統計値はすべて上記の公的統計および公開調査に基づきます。「79万人不足」は複数シナリオのうち最大値、求人倍率は月次変動のある単月値です。女性比率は調査ごとに対象職種の定義が異なるため、数値は出典とセットでご参照ください。最新の制度・数値は各出典元をご確認ください。
          </p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/salary/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                女性エンジニアの年収ガイド
              </h3>
              <p className="text-sm text-text-light">平均年収の実データと年収アップ戦略</p>
            </a>
            <a
              href="/articles/beginner/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                未経験から女性エンジニアになる方法
              </h3>
              <p className="text-sm text-text-light">現実的な学習期間と転職活動の進め方</p>
            </a>
            <a
              href="/articles/career-path/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                キャリアパス設計ガイド
              </h3>
              <p className="text-sm text-text-light">5年後・10年後のキャリア設計</p>
            </a>
            <a
              href="/articles/tokyo-women-training/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                東京都の女性ITエンジニア育成事業
              </h3>
              <p className="text-sm text-text-light">無料で学べる公的支援の内容と申込方法</p>
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
