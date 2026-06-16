import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "IT業界の育休取得率・復帰率データまとめ【2026年最新】企業の調べ方つき",
  description:
    "IT業界（情報通信業）の育休取得率は女性94.4%・男性58.1%（厚生労働省・令和6年度雇用均等基本調査）。全産業との比較、年次推移、男女別データ、IT企業の公開実績、育児休業給付金の制度数値まで全数値出典付きで整理。厚労省データベースで企業ごとの実績を調べる方法も解説します。",
  alternates: { canonical: "/articles/maternity-leave-rate/" },
  openGraph: {
    title: "IT業界の育休取得率・復帰率データまとめ【2026年最新】企業の調べ方つき",
    description:
      "IT業界（情報通信業）の育休取得率は女性94.4%・男性58.1%（令和6年度雇用均等基本調査）。全産業比較・年次推移・男女別・企業公開値を出典付きで整理し、企業ごとの実績の調べ方も解説します。",
    url: "https://women-engineer.com/articles/maternity-leave-rate/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IT業界の育休取得率・復帰率データまとめ【2026年最新】企業の調べ方つき",
  datePublished: "2026-04-27",
  dateModified: "2026-06-12",
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
    "IT業界（情報通信業）の育休取得率は女性94.4%・男性58.1%（厚生労働省・令和6年度雇用均等基本調査）。全産業との比較、年次推移、男女別データ、IT企業の公開実績、育児休業給付金の制度数値を全数値出典付きで整理したデータ記事。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/maternity-leave-rate/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "IT業界（情報通信業）の育休取得率は何%ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省「令和6年度雇用均等基本調査」の産業別データ（付属統計表第1表）によると、情報通信業の育児休業取得率は女性94.4%・男性58.1%です。全産業平均（女性86.6%・男性40.5%）をいずれも大きく上回り、女性は製造業（94.4%）と並ぶ高水準、男性は金融業・保険業（63.6%）、学術研究・専門技術サービス業（60.7%）に次ぐ水準です。なお産業別の値は事業所調査のため年度ごとの振れが大きい点には注意が必要です。",
      },
    },
    {
      "@type": "Question",
      name: "IT業界の「育休復帰率」を示す公的統計はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "産業別（情報通信業）の育休復帰率は、2026年6月時点で公的統計としては公表されていません。代わりに使える指標が2つあります。1つは国立社会保障・人口問題研究所「第16回出生動向基本調査」の第1子出産前後の妻の就業継続率69.5%（2015〜19年出産）で、全産業ベースの実態を示します。もう1つは企業が自主公開する復帰率で、例えばDeNAは育児休業復職率98.3%（2025年3月期）、サイバーエージェントは産休育休後の復帰率97.2%（単体）を公式サイトで公表しています。",
      },
    },
    {
      "@type": "Question",
      name: "応募先企業の育休取得率・復帰実績はどこで調べられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省が運営する2つの無料データベースが基本です。「女性の活躍推進企業データベース」では、女性活躍推進法に基づき企業が公表する男女別の育児休業取得率や平均勤続年数などを企業名で検索できます。「両立支援のひろば」では、育児・介護休業法に基づく男性育休取得率の公表状況や、くるみん認定の有無を確認できます。加えて上場企業ならサステナビリティページのESGデータ集に取得率・復職率を掲載している場合が多く、求人票に出ない運用実態は転職エージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "企業に育休取得率の公表義務はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "あります。育児・介護休業法により、男性の育児休業取得率等の公表は2023年4月から従業員1,000人超の企業に義務化され、2025年4月からは300人超の企業に対象が拡大されました。また女性活躍推進法により、常時雇用101人以上の企業は行動計画の策定・届出と女性活躍に関する情報公表が義務です。つまり中堅以上のIT企業であれば、男性育休取得率は原則として公開情報から確認できます（出典: 厚生労働省）。",
      },
    },
    {
      "@type": "Question",
      name: "育休中の収入はどのくらい保障されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "雇用保険の育児休業給付金として、育休開始から180日目までは休業開始時賃金の67%、181日目以降は50%が支給されます。さらに2025年4月創設の出生後休業支援給付金により、子の出生直後の一定期間に夫婦がともに14日以上の育休を取得するなどの要件を満たすと、最大28日間は13%が上乗せされ賃金の80%に。育休中は社会保険料が免除され給付金は非課税のため、この期間は手取りで約10割相当になります（出典: 厚生労働省）。",
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
              { label: "IT業界の育休取得率・復帰率データ" },
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
              IT業界の育休取得率・復帰率データまとめ
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                【2026年最新】公的統計＋企業公開値・企業の調べ方つき
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
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>結論：最新データの即答</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>IT業界（情報通信業）の育休取得率は<strong>女性94.4%・男性58.1%</strong>。全産業平均（女性86.6%・男性40.5%）を男女とも大きく上回ります（出典: 厚生労働省「令和6年度雇用均等基本調査」）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>「IT業界の復帰率」を直接示す公的統計は<strong>公表されていません</strong>。代理指標は第1子出産前後の妻の就業継続率<strong>69.5%</strong>（出典: 国立社会保障・人口問題研究所）と、企業公開値（DeNA復職率<strong>98.3%</strong>、サイバーエージェント復帰率<strong>97.2%</strong>など）です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>育休中の収入は給付金で<strong>賃金の67%→50%</strong>、2025年4月からは要件を満たせば最大28日間<strong>80%（手取り約10割相当）</strong>に（出典: 厚生労働省）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>企業ごとの実績は厚労省「<strong>女性の活躍推進企業データベース</strong>」「<strong>両立支援のひろば</strong>」で無料検索できます。調べ方は本文6章へ。</span>
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
                  1. 育休取得率の最新値と年次推移（全産業・男女別）
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>
                  2. IT業界（情報通信業）の育休取得率 — 産業別データ
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>
                  3. 復帰率のデータはどこまで分かるか
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>
                  4. IT企業が公開している育休取得率・復帰率の実例
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>
                  5. 育休中のお金 — 育児休業給付金の制度数値
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>
                  6. 企業ごとの実績の調べ方（公的データベース活用法）
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

      {/* sec1 全産業の取得率と推移 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育休取得率の最新値と年次推移（全産業・男女別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              育休取得率の公的統計の基本は、厚生労働省が毎年公表する「雇用均等基本調査」です。最新の令和6年度調査（2024年10月1日時点）によると、育児休業取得率は<strong>女性86.6%</strong>（前年度84.1%）、<strong>男性40.5%</strong>（前年度30.1%）。男性は前年度から10.4ポイント上昇し、初めて4割を超えて過去最高を更新しました。
            </p>
            <p>
              取得率の定義は「調査前々年10月1日〜前年9月30日の1年間に出産した者（男性は配偶者が出産した者）のうち、調査時点までに育児休業を開始した者（申出をしている者を含む）の割合」です。男性には2022年10月創設の産後パパ育休（出生時育児休業）が含まれます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年度</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>女性の育休取得率</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>男性の育休取得率</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>2019年度（令和元）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>83.0%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>7.48%</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>2020年度（令和2）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>81.6%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>12.65%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>2021年度（令和3）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>85.1%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>13.97%</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>2022年度（令和4）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>80.2%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>17.13%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>2023年度（令和5）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>84.1%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>30.1%</td>
                </tr>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>2024年度（令和6・最新）</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>86.6%</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40.5%（過去最高）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「令和6年度雇用均等基本調査」結果概要・図1「育児休業取得率の推移」（2026年6月参照）。令和5年度以降の男性は産後パパ育休を含む。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              推移を見ると、女性は8割台で高止まりしている一方、男性は2019年度の7.48%から5年で40.5%へと約5倍に急伸しています。背景には2022年の産後パパ育休創設と、取得率の公表義務化（後述）があります。ただし取得期間には男女差が残り、同調査では<strong>女性は9割以上が6か月以上</strong>取得しているのに対し、<strong>男性は約4割が2週間未満</strong>の短期取得です。
            </p>
            <p>
              また、雇用形態による差もあります。有期契約労働者の育休取得率は<strong>女性73.2%・男性33.2%</strong>（令和6年度・同調査表1）で、全体平均より女性で約13ポイント低くなっています。転職時に正社員か契約社員かで取得のしやすさに差が出うる点は押さえておきましょう。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 産業別データ */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">IT業界（情報通信業）の育休取得率 — 産業別データ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              雇用均等基本調査は産業別の集計（付属統計表第1表）も公表しています。IT業界が属する<strong>情報通信業の育休取得率は女性94.4%・男性58.1%</strong>（令和6年度）。女性は製造業と並んで全産業トップクラス、男性は金融業・保険業（63.6%）、学術研究・専門技術サービス業（60.7%）に次ぐ高水準で、<strong>男女とも全産業平均を大きく上回ります</strong>。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>産業</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>女性</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>男性</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>情報通信業（IT業界）</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>94.4%</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>58.1%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>全産業（総数）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>86.6%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>40.5%</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>金融業・保険業</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>98.8%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>63.6%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>学術研究・専門・技術サービス業</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>93.8%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>60.7%</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>製造業</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>94.4%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>48.7%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>医療・福祉</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>90.9%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>49.7%</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>卸売業・小売業</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>83.1%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>29.9%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>宿泊業・飲食サービス業</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>57.3%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>33.3%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「令和6年度雇用均等基本調査」付属統計表第1表「育児休業者割合（産業別）」（2026年6月参照）。産業別の値は事業所調査のサンプルに基づくため、年度間の振れが大きい点に注意。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              規模別データも企業選びの参考になります。同調査では事業所規模<strong>500人以上で女性97.6%・男性53.8%</strong>、5〜29人では女性76.0%・男性25.1%と、<strong>規模が大きいほど取得率が高い</strong>傾向が明確です。IT業界でも、スタートアップより中堅以上の企業のほうが制度運用が安定している可能性が高いと読めます。
            </p>
            <p>
              IT業界の数値が高い背景としては、テレワーク導入率が<strong>94.3%と全産業トップ</strong>（全産業平均47.3%、出典: 総務省「令和6年通信利用動向調査」）であること、人材獲得競争の中で両立支援を採用広報に使う企業が多いことが挙げられます。育児と両立しやすい働き方の実態は<a href="/articles/mama-engineer/" className="underline" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 復帰率 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">復帰率のデータはどこまで分かるか</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「取得率」と並んで気になるのが「復帰率（復職率）」ですが、ここは正直に書きます。<strong>情報通信業に限定した育休復帰率は、2026年6月時点で公的統計として公表されていません</strong>。検索すると産業別復帰率を断定するページも見かけますが、一次ソースのない数値です。確認できる範囲では、次の2系統のデータが使えます。
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
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>第1子出産前後の妻の就業継続率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>69.5%（2015〜19年出産。継続者の79.2%が育休利用）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>国立社会保障・人口問題研究所「第16回出生動向基本調査」</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>企業が自主公開する復帰率・復職率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>大手IT企業の公開値は概ね97〜100%（次章の実例参照）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>各社の公式サステナビリティ／ESGデータページ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              就業継続率69.5%は全産業の値で、「出産した女性の約7割が仕事を続けている」ことを示します。かつて5割前後だったこの数値は大きく改善しました。一方、企業公開値の復帰率97〜100%は「育休を取った人のうち復職した人」の割合であり、母数も定義も異なるため、両者を直接比較はできません。
            </p>
            <p>
              実務的な結論はこうです。<strong>業界平均の復帰率は存在しないので、応募する企業ごとの公開値・実績を個別に確認する</strong>のが唯一の正攻法です。確認手段は4章（企業公開値）と6章（公的データベース）で具体的に解説します。復帰後のキャリアの組み立て方は<a href="/articles/after-maternity/" className="underline" style={{ color: "#7c3a55" }}>産休・育休後のキャリアの記事</a>を参照してください。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 企業公開値 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">IT企業が公開している育休取得率・復帰率の実例</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              主要IT企業は、公式のサステナビリティ／ESGデータページで育休関連の実績を公開しています。以下は2026年6月時点で各社公式サイトに掲載されている公開値の実例です（<strong>当サイトによる推計や口コミ値は一切含みません</strong>）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>企業</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>公開している実績</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>出典（公式）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>DeNA</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>育休取得率 女性100%・男性64.5%、育児休業復職率98.3%（いずれも2025年3月期）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>DeNA サステナビリティサイト「ESGデータ」</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>サイバーエージェント</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>産休・育休後の復帰率97.2%（単体）。女性活躍支援制度「macalonパッケージ」を運用</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>公式「データで見るサイバーエージェント」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>NTTデータ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>男性社員の育休取得率99.8%・平均取得日数100.3日（2024年度）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>NTTデータグループ公式トピックス（2025年9月）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>富士通</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>育児休職後の復職率100%（男女とも、2021年度）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>富士通グループ サステナビリティデータブック2022</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 各社公式サイト（2026年6月参照）。集計対象（単体／グループ）・算出方法・対象期間は各社で異なるため、横並びの単純比較はできません。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              ここから読み取れるのは、<strong>大手IT企業の公開値は産業別統計（女性94.4%・男性58.1%）よりさらに高い水準</strong>にあるということです。特に復職率97〜100%という公開値は「育休を取ったら戻れない」という不安が大手では既に過去のものになりつつあることを示します。一方で、こうした数値を公開しているのは体力のある企業に偏るため、<strong>非公開の企業ほど面接前の確認が重要</strong>になります。制度が充実した企業の選び方は<a href="/articles/women-friendly-companies/" className="underline" style={{ color: "#7c3a55" }}>女性が働きやすいIT企業の記事</a>にまとめています。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 給付金 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育休中のお金 — 育児休業給付金の制度数値</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              取得率・復帰率と並ぶ重要データが「育休中の収入」です。雇用保険の育児休業給付金と、2025年4月に創設された関連給付の数値を整理します。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>給付</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>支給率・内容</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>主な要件</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>育児休業給付金</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>休業開始時賃金の<strong>67%</strong>（開始〜180日）→ <strong>50%</strong>（181日目以降）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>雇用保険被保険者で、原則1歳未満（保育所に入れない場合等は最長2歳まで延長）の子の育休</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>出生後休業支援給付金<br />（2025年4月創設）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>最大28日間、<strong>13%を上乗せし合計80%</strong>。社会保険料免除・非課税のため<strong>手取り約10割相当</strong></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>子の出生直後の一定期間に<strong>夫婦ともに14日以上</strong>の育休取得（配偶者が専業主婦（夫）の場合等は単独取得でも対象）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>育児時短就業給付金<br />（2025年4月創設）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>時短勤務中の賃金の<strong>原則10%</strong>を支給</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2歳未満の子を育てて時短勤務する雇用保険被保険者</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「育児休業給付について」「出生後休業支援給付金リーフレット」「育児時短就業給付金リーフレット」（2026年6月参照）。支給率は休業開始時賃金日額に対する割合で、上限額・下限額の定めがあります。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              ポイントは、育休中は<strong>社会保険料（健康保険・厚生年金）が免除され、給付金が非課税</strong>であるため、額面の支給率以上に手取りベースの実質保障が厚いことです。67%支給の期間でも手取り比では約8割に相当するとされます。なお産前産後休業（産前6週・産後8週）中は、健康保険から出産手当金（標準報酬日額の3分の2）が支給されます。復帰後の時短勤務と収入の関係は<a href="/articles/short-time/" className="underline" style={{ color: "#7c3a55" }}>時短勤務エンジニアの記事</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 調べ方 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">企業ごとの実績の調べ方（公的データベース活用法）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              業界平均より大事なのは「応募するその企業」の実績です。法律上、<strong>男性育休取得率等の公表は2023年4月から従業員1,000人超、2025年4月からは300人超の企業に義務化</strong>されており（育児・介護休業法）、中堅以上の企業なら公開情報で確認できます。無料で使える公式の調べ方を4つ紹介します。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 女性の活躍推進企業データベース（厚生労働省）</h3>
              <p className="text-sm text-text-light">
                女性活躍推進法に基づき企業が公表するデータを、<strong>企業名・業種・地域で横断検索</strong>できる公式データベースです。男女別の育児休業取得率のほか、女性管理職比率・平均勤続年数の男女差・残業時間などを確認できます。常時雇用101人以上の企業は行動計画の策定・情報公表が義務のため、掲載企業数も多いのが強みです。使い方は「業種＝情報通信業」で絞り込み、候補企業の「男女別の育児休業取得率」欄を比較するのが基本です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 両立支援のひろば（厚生労働省）</h3>
              <p className="text-sm text-text-light">
                育児・介護休業法に基づく<strong>男性の育休取得率等の公表</strong>と、企業の一般事業主行動計画を検索できるサイトです。「くるみん」「プラチナくるみん」（子育てサポート企業としての厚労省認定）の認定企業も検索でき、認定の有無は両立支援の体制を測る客観的な目安になります。女性の活躍推進企業データベースに載っていない企業はこちらも確認しましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 各社のサステナビリティ／ESGデータページ</h3>
              <p className="text-sm text-text-light">
                上場IT企業の多くは、公式サイトのサステナビリティページに人的資本データ（育休取得率・復職率・女性管理職比率など）を掲載しています。4章の実例のように<strong>「復帰率」まで公開しているのは現状このルートだけ</strong>です。「企業名＋ESGデータ」「企業名＋サステナビリティ＋育児休業」で検索すると見つかります。有価証券報告書の「従業員の状況」欄にも男女別育休取得率の記載が進んでいます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 転職エージェント経由で運用実態を確認する</h3>
              <p className="text-sm text-text-light">
                数値で分かるのは「制度と実績」までです。<strong>復帰後に元のポジションへ戻れるか、時短中の評価はどうか、子の急病時に在宅へ切り替えられるか</strong>といった運用実態は、企業内部の情報を持つエージェント経由で確認するのが確実です。数値の確認（1〜3）と運用の確認（4）をセットにすると、入社後のギャップを最小化できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 注意点 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データを読むときの3つの注意点</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 「取得率100%超」がありうる</h3>
              <p className="text-sm text-text-light">
                取得率は「当年度の出産者数」を分母、「当年度に育休を開始した人数」を分子に計算されるのが一般的です。前年度に出産して当年度に育休を開始した人がいると分子が膨らみ、100%を超えることがあります。企業公開値で100%超を見ても誤りとは限らず、逆に単年の数値だけで判断しないことが重要です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 「取得率」と「取得期間」はセットで見る</h3>
              <p className="text-sm text-text-light">
                男性取得率40.5%（全産業）の内実は、約4割が2週間未満の短期取得です（出典: 厚生労働省「令和6年度雇用均等基本調査」）。「男性育休取得率が高い＝家庭と両立しやすい職場」とは限らないため、NTTデータの「平均取得日数100.3日」のように<strong>平均取得日数まで公開している企業</strong>はより信頼度の高いシグナルと読めます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 産業別の数値は年度間の振れが大きい</h3>
              <p className="text-sm text-text-light">
                雇用均等基本調査の産業別データは事業所のサンプル調査のため、年度によって数値が大きく動きます。情報通信業の女性94.4%・男性58.1%も「単年の調査値」であり、毎年この水準が保証されるものではありません。傾向としては「IT業界は男女とも全産業平均より高い」という読み方に留めるのが正確です。
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
            <li>・出典: 厚生労働省「令和6年度雇用均等基本調査」結果概要・付属統計表（2026年6月参照）— 育児休業取得率 女性86.6%・男性40.5%、年次推移、産業別（情報通信業 女性94.4%・男性58.1%）、規模別、有期契約労働者の取得率、取得期間の分布</li>
            <li>・出典: 国立社会保障・人口問題研究所「第16回出生動向基本調査（結婚と出産に関する全国調査）」（2026年6月参照）— 第1子出産前後の妻の就業継続率69.5%、就業継続者の育休利用79.2%</li>
            <li>・出典: 総務省「令和6年通信利用動向調査」（2026年6月参照）— テレワーク導入率：企業全体47.3%、情報通信業94.3%</li>
            <li>・出典: 厚生労働省「育児休業給付について」「出生後休業支援給付金」「育児時短就業給付金」各リーフレット（2026年6月参照）— 給付率67%／50%、上乗せ13%（合計80%・最大28日）、時短就業給付10%</li>
            <li>・出典: 厚生労働省「育児・介護休業法 改正ポイントのご案内」（2026年6月参照）— 男性育休取得率等の公表義務（2023年4月〜1,000人超、2025年4月〜300人超）</li>
            <li>・出典: 厚生労働省「女性の活躍推進企業データベース」「両立支援のひろば」（2026年6月参照）— 企業別の育休取得率等の公表データ検索</li>
            <li>・出典: 株式会社ディー・エヌ・エー サステナビリティサイト「ESGデータ」（2026年6月参照）— 育休取得率 女性100%・男性64.5%、復職率98.3%（2025年3月期）</li>
            <li>・出典: 株式会社サイバーエージェント「データで見るサイバーエージェント」（2026年6月参照）— 産休・育休後の復帰率97.2%（単体）</li>
            <li>・出典: 株式会社NTTデータグループ 公式トピックス「NTT DATAの男性育休取得推進の取り組みについて」（2025年9月公開、2026年6月参照）— 男性育休取得率99.8%・平均取得日数100.3日（2024年度）</li>
            <li>・出典: 富士通株式会社「富士通グループ サステナビリティデータブック2022」（2026年6月参照）— 育児休職後の復職率100%（2021年度・男女とも）</li>
          </ul>
          <p className="text-xs text-text-light mt-4">
            ※ 本記事の統計値はすべて上記の公的統計および各社公式公開資料に基づきます。企業公開値は集計対象・算出方法が各社で異なるため単純比較はできません。産業別の復帰率など、一次ソースを確認できない数値は本記事には掲載していません。最新の制度・数値は各出典元をご確認ください。
          </p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
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
              href="/articles/after-maternity/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                産休・育休後のキャリア
              </h3>
              <p className="text-sm text-text-light">復帰後のキャリアの組み立て方</p>
            </a>
            <a
              href="/articles/women-friendly-companies/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                女性が働きやすいIT企業
              </h3>
              <p className="text-sm text-text-light">制度と実態で選ぶ企業の見極め方</p>
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
