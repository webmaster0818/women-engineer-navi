import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの在宅・リモート転職ガイド｜職種別の実態と求人の探し方【2026年】",
  description:
    "女性エンジニアの在宅・リモート転職ガイド。情報通信業のテレワーク導入率は94.3%と全産業トップ（総務省調査）。職種別のリモートのしやすさ、フルリモート求人の動向と出社回帰の実態、求人の探し方を公的統計・公開調査の実データで解説します。",
  alternates: { canonical: "/articles/remote-jobs/" },
  openGraph: {
    title: "女性エンジニアの在宅・リモート転職ガイド｜職種別の実態と求人の探し方【2026年】",
    description:
      "情報通信業のテレワーク導入率94.3%（全産業47.3%）。職種別のリモートのしやすさ、フルリモート求人動向、出社回帰の実態を実データで解説。",
    url: "https://women-engineer.com/articles/remote-jobs/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの在宅・リモート転職ガイド｜職種別の実態と求人の探し方【2026年】",
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
    "情報通信業のテレワーク導入率94.3%（全産業47.3%）。職種別のリモートのしやすさ、フルリモート求人動向、出社回帰の実態を公的統計・公開調査の実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/remote-jobs/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ITエンジニアはどのくらいリモートワークできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT業界はリモートワークが最も浸透している業界です。総務省「令和6年通信利用動向調査」では、情報通信業のテレワーク導入率は94.3%と全産業（47.3%）の約2倍で産業別トップ。パーソル総合研究所の2025年7月調査でも、情報通信業の正社員テレワーク実施率は56.3%と業種別で最も高い水準です（全体平均は22.5%）。ただし働き方の主流は「週2〜3日出社のハイブリッド型」で、完全在宅のフルリモートは企業・職種を選ぶ必要があります。",
      },
    },
    {
      "@type": "Question",
      name: "フルリモート求人は減っていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "減少傾向にあるのは事実です。レバレジーズ「IT人材の正社員転職市場動向（2025年6月）」によると、フルリモート求人はピークだった2023年6月比で約30%減少し、「原則出社」の求人は2年で約3.4倍に増えました。一方で、同レポートのIT人材の転職求人倍率は11.2倍と強い売り手市場が続いており、フルリモート前提の企業も一定数存在します。数が絞られたぶん、フルリモート特化の求人サイトやIT特化型エージェントで効率的に探すことが重要になっています。",
      },
    },
    {
      "@type": "Question",
      name: "リモートワークしやすいエンジニア職種はどれですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "業務がオンラインで完結しやすいバックエンド、フロントエンド、SRE・DevOps、データエンジニアなどの開発・クラウド系職種はリモートと相性が良い職種です。一方、物理サーバーの作業があるインフラ運用、実機検証を伴うQA・テスター、現場対応のある社内SE・ヘルプデスク、常駐先の方針に従うSES（客先常駐）は出社が必要になる場面が比較的多くなります。リモート重視の転職なら、自社開発・SaaS企業の開発系職種を狙うのが近道です。",
      },
    },
    {
      "@type": "Question",
      name: "出社回帰の流れでリモート転職は不利になりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "求人の選択肢は狭まりましたが、不可能にはなっていません。レバレジーズの2025年7月調査（ITエンジニア654人）では、出社頻度が増えた人は23.2%いる一方、リモート勤務者の約8割が継続を希望し、「出社回帰の方針が出たら同職種で転職を考えるきっかけになる」と答えた人は43.7%（30代は過半数）に上ります。人材確保のためにリモートを維持する企業も多く、二極化が進んでいる状況です。だからこそ「制度の有無」ではなく「実際の出社頻度・チームの利用実態」を入社前に確認することが以前より重要になっています。",
      },
    },
    {
      "@type": "Question",
      name: "育児中の女性エンジニアでもリモートワークは可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。ただし仕事に集中するためには保育園などの保育環境の確保が前提になります。リモート＋フレックスを組み合わせれば、通勤時間（往復1〜2時間）がなくなるうえ、保育園の送迎に合わせた勤務時間の調整がしやすく、育児との両立の難易度が大きく下がります。パーソル総合研究所の調査でもテレワーク実施者の82.2%が継続を希望しており、特に時間制約のある子育て期には効果の大きい働き方です。産休育休の取得実績や時短勤務の運用実態と合わせて、エージェント経由で事前に確認しましょう。",
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
              { label: "在宅・リモート転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              状況別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの在宅・リモート転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                職種別の実態と求人の探し方【2026年】
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
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>結論：エンジニアはリモート転職しやすい職種。ただし主流は「ハイブリッド型」</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li>・<strong>情報通信業のテレワーク導入率は94.3%</strong>で産業別トップ。全産業平均（47.3%）の約2倍（総務省・令和6年通信利用動向調査）</li>
              <li>・働く側で見ても、情報通信業の正社員テレワーク実施率は<strong>56.3%</strong>と業種別最高（全体平均22.5%。パーソル総合研究所・2025年7月調査）</li>
              <li>・ただし<strong>フルリモート求人はピーク比約30%減</strong>で出社回帰の動きもあり、現在の主流は「週2〜3日出社のハイブリッド型」（レバレジーズ調査）</li>
              <li>・狙い目は<strong>オンラインで業務が完結しやすい開発系職種</strong>（バックエンド・フロントエンド・SRE・データ系）×自社開発・SaaS企業</li>
            </ul>
            <p className="mt-3 text-xs text-text-light">出典: 総務省「令和6年通信利用動向調査」、パーソル総合研究所「第十回・テレワークに関する調査」、レバレジーズ「IT人材の正社員転職市場動向 2025年6月」（いずれも2026年6月参照）</p>
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. ITエンジニアのテレワーク実施率（統計データ）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 職種別・リモートのしやすさ比較</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. フルリモート・ハイブリッド・出社の実態</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 出社回帰トレンドの実態と注意点</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. リモート求人の効率的な探し方</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. リモートワーク求人を見極めるチェックポイント</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. リモートで評価される働き方・スキル</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 統計 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ITエンジニアのテレワーク実施率（統計データ）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「エンジニアになればリモートで働けるのか」――公的統計で見ると、答えはかなり明確です。IT業界（情報通信業）は<strong>企業のテレワーク導入率・働く人の実施率ともに全業種でトップ</strong>であり、リモートワークを軸に転職先を選びやすい業界です。
            </p>
            <p>
              総務省の「令和6年通信利用動向調査」（2025年5月公表）によると、テレワークを導入している企業は全産業で47.3%。これに対して<strong>情報通信業は94.3%</strong>と、ほぼすべての企業が導入しており、2位の金融・保険業（84.5%）を引き離して産業別1位です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>指標</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>IT業界（情報通信業）</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>全産業・全体</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>出典</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>企業のテレワーク導入率</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>94.3%（産業別1位）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>47.3%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>総務省「令和6年通信利用動向調査」</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>正社員のテレワーク実施率</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>56.3%（業種別1位）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>22.5%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>パーソル総合研究所「第十回・テレワークに関する調査」（2025年7月）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>雇用型テレワーカーの割合</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>情報通信業は7割超で業種別1位（令和5年度調査で72.8%）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>24.6%（前年度比0.2pt減で下げ止まり）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>国土交通省「令和6年度テレワーク人口実態調査」</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              ポイントは2つあります。1つ目は、<strong>IT業界のテレワーク水準は全産業平均の2倍以上</strong>であること。「在宅で働きたいからエンジニアを選ぶ」という判断は、統計的にも合理的です。
            </p>
            <p>
              2つ目は、コロナ禍ピーク時より全体の実施率は下がったものの、<strong>直近は下げ止まり傾向</strong>にあることです。国土交通省の調査では雇用型テレワーカーの割合は24.6%で前年度からわずか0.2ポイント減にとどまり、パーソル総合研究所の調査でも実施率は22.5%と横ばい。テレワーク実施者の<strong>82.2%が「続けたい」</strong>と回答しており（過去最高）、リモートワークは一過性ではなく定着した働き方になっています。
            </p>
            <p className="text-xs">
              出典: 総務省「令和6年通信利用動向調査」（2025年5月公表）、国土交通省「令和6年度テレワーク人口実態調査」（2025年3月公表）、パーソル総合研究所「第十回・テレワークに関する調査」（2025年8月発表）（いずれも2026年6月参照）
            </p>
          </div>
        </div>
      </section>

      {/* sec2 職種別 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">職種別・リモートのしやすさ比較</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              同じ「エンジニア」でも、リモートのしやすさは職種でかなり差があります。分かれ目はシンプルで、<strong>業務がオンラインで完結するか、物理的な現場（実機・客先・社内対応）があるか</strong>です。リモート重視で職種を選ぶなら、下表を目安にしてください。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>職種</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>リモートのしやすさ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>理由・補足</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}><a href="/articles/backend/" className="hover:underline" style={{ color: "#7c3a55" }}>バックエンド</a></td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>◎ 非常にしやすい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>開発・レビュー・デプロイまでオンラインで完結。フルリモート求人が最も見つけやすい職種のひとつ</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}><a href="/articles/frontend/" className="hover:underline" style={{ color: "#7c3a55" }}>フロントエンド</a></td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>◎ 非常にしやすい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>成果物（UI）が画面共有で確認でき、デザイナーとの連携もオンラインツールで完結しやすい</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}><a href="/articles/sre-devops/" className="hover:underline" style={{ color: "#7c3a55" }}>SRE・DevOps</a></td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>◎ しやすい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>クラウド前提の運用はフルリモートと好相性。オンコール当番がある点は要確認</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}><a href="/articles/data-engineer/" className="hover:underline" style={{ color: "#7c3a55" }}>データエンジニア</a></td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>◎ しやすい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>データ基盤構築はクラウド上の作業が中心。需要増でリモート可の求人も多い</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}><a href="/articles/infrastructure/" className="hover:underline" style={{ color: "#7c3a55" }}>インフラエンジニア</a></td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>○ 案件次第</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>クラウド案件はリモート可が多い一方、物理サーバー・データセンター作業や常駐案件は出社必須</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}><a href="/articles/qa-tester/" className="hover:underline" style={{ color: "#7c3a55" }}>QA・テスター</a></td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>○ 案件次第</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Webサービスのテストはリモート可が多いが、実機・ハードウェア検証は出社が必要</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>社内SE・ヘルプデスク</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>△ しにくい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>社員のPC・機器対応など現場業務が残りやすく、出社前提の求人が中心</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>SES（客先常駐）</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>△ 常駐先次第</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自社ではなく常駐先の方針に従うため、リモート可否を自分でコントロールしにくい</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              ◎の職種に共通するのは、コード・設計・ドキュメントといった<strong>成果物がすべてオンライン上に残る</strong>ことです。成果が可視化されるため、在宅でも時短でも評価されやすく、ライフイベントと両立したい女性エンジニアにとって相性の良い領域です。各職種の年収や必要スキルは、リンク先の職種別ガイドで詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 働き方の実態 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">フルリモート・ハイブリッド・出社の実態</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「リモート可」と一口に言っても、実際の働き方は大きく3つに分かれます。レバレジーズが2025年7月に実施したITエンジニア654人への調査では、現在の働き方は<strong>「ハイブリッド型勤務」が44.6%で最多</strong>。ハイブリッド勤務者の中では「週2〜3日出社」（45.2%）が最も多くなっています。「毎日フルリモート」は少数派になりつつあり、<strong>現在の主流は週2〜3日出社のハイブリッド型</strong>です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>フルリモート</h3>
              <p className="text-text-light text-sm leading-relaxed">出社義務なし（または年数回のオフサイトのみ）。通勤ゼロで居住地も自由になり、育児・介護との両立や地方在住に最適。求人数は絞られるため、探し方の工夫が必要です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ハイブリッド（主流）</h3>
              <p className="text-text-light text-sm leading-relaxed">週1〜3日出社＋在宅の組み合わせ。対面のチームビルディングと在宅の集中時間を両立でき、現在最も求人が多い形態。「週何日・固定か自由か」の運用差が大きい点に注意。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>原則出社</h3>
              <p className="text-text-light text-sm leading-relaxed">毎日出社が基本。対面でのOJTを重視する企業や、セキュリティ要件の厳しい案件・常駐案件に多い形態。未経験入社の最初の1〜2年はこの形でスキルを積むケースもあります。</p>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              重要なのは、<strong>同じ「リモート可」表記でも実態がまったく違う</strong>ことです。「フルリモートだと思って入社したら週3出社だった」というミスマッチを防ぐには、求人票の表記だけでなく、配属チームの実際の出社頻度まで確認する必要があります（確認方法はセクション6で解説します）。
            </p>
            <p className="text-xs">
              出典: レバレジーズ「ITエンジニアのリモートワークに関する実態調査」（2025年8月発表、2026年6月参照）
            </p>
          </div>
        </div>
      </section>

      {/* sec4 出社回帰 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出社回帰トレンドの実態と注意点</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              リモート転職を考えるなら、良い面だけでなく<strong>「出社回帰」の流れも正確に知っておくべき</strong>です。データで見ると、求人市場では次の変化が起きています。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>出社回帰を示すデータ</h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>フルリモート求人はピーク（2023年6月）比で約30%減少</strong>。「原則出社」の求人は同期間で約3.4倍に増加（レバレジーズ「IT人材の正社員転職市場動向 2025年6月」）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ITエンジニアの<strong>23.2%が「出社頻度が増えた」</strong>と回答（レバレジーズ・2025年7月調査）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>全産業の企業テレワーク導入率は47.3%と、2022年以降ゆるやかな低下傾向（総務省「令和6年通信利用動向調査」）</span></li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-4" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>一方で、リモートが消えない理由を示すデータ</h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>IT人材の転職求人倍率は<strong>11.2倍</strong>（2025年6月時点・レバレジーズ）。深刻な人材不足の中、リモートは採用競争力として機能し続けている</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>リモート勤務中のITエンジニアの<strong>約8割が継続を希望</strong>。出社回帰の方針が出た場合「同職種での転職を考えるきっかけになる」が<strong>43.7%</strong>（30代では過半数）と、企業側も安易に出社へ戻せない状況（レバレジーズ・2025年7月調査）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>テレワーク実施者の継続希望は<strong>82.2%で過去最高</strong>。実施率自体も22.5%で下げ止まり（パーソル総合研究所・2025年7月調査）</span></li>
            </ul>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              つまり現状は「リモートの消滅」ではなく<strong>「企業ごとの二極化」</strong>です。出社回帰に舵を切る企業と、フルリモートを採用の武器として明確に打ち出す企業に分かれてきています。転職者にとっては、<strong>リモート方針が文化として根付いている企業を見極められるかどうか</strong>が以前より重要になりました。働き方の条件は入社後に変わる可能性もあるため、「制度」だけでなく「経営陣の方針・これまでの運用実績」まで確認するのが安全です。
            </p>
            <p className="text-xs">
              出典: レバレジーズ「IT人材の正社員転職市場動向 2025年6月」「ITエンジニアのリモートワークに関する実態調査」、総務省「令和6年通信利用動向調査」、パーソル総合研究所「第十回・テレワークに関する調査」（いずれも2026年6月参照）
            </p>
          </div>
        </div>
      </section>

      {/* sec5 探し方 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">リモート求人の効率的な探し方</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              フルリモート求人が絞られてきた今こそ、闇雲に求人サイトを眺めるのではなく、<strong>「リモートに強い経路」から探す</strong>のが効率的です。主なルートは次の4つです。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["方法1", "IT特化型エージェントで「リモート条件」を指定する", "IT特化型エージェントはリモート可求人の取り扱いが多く、求人票に出ない「実際の出社頻度」「チームのリモート率」まで把握しています。条件を伝えれば実態ベースで絞り込んでもらえるのが最大の利点です。"],
              ["方法2", "フルリモート特化の求人サービスを併用する", "掲載求人がフルリモート前提のサービスなら「入社したら出社だった」というミスマッチ自体が起きません。確実に完全在宅で働きたい人は、一般の転職サイトと併用しましょう。"],
              ["方法3", "フルリモート企業を直接リストアップして狙う", "全社フルリモートを宣言している企業は、制度ではなく文化としてリモートが根付いており、出社回帰リスクが低いのが特徴です。狙い目企業の探し方は別記事で詳しく解説しています。"],
              ["方法4", "職種・企業タイプで母数を増やす", "前述の通り、バックエンド・フロントエンド・SRE・データ系×自社開発・SaaS企業はリモート可率が高い組み合わせです。職種スキルを寄せていくこと自体が、リモート求人へのアクセスを広げます。"],
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
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <a href="/articles/fullremote-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>フルリモート企業の探し方ガイド &rarr;</h3>
              <p className="text-sm text-text-light">全社リモートを掲げる企業の特徴と見つけ方を詳しく解説</p>
            </a>
            <a href="/articles/regional-remote/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>地方在住×リモート転職ガイド &rarr;</h3>
              <p className="text-sm text-text-light">地方に住みながら都市部水準の年収で働く方法はこちら</p>
            </a>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              なお、国土交通省の調査では雇用型テレワーカーの割合は首都圏で3割超に対し地方都市圏は2割前後と地域差があります。裏を返せば、<strong>フルリモート求人は地方在住者が首都圏水準の求人・年収にアクセスできる手段</strong>でもあります。地方在住の方は上の地方在住向けガイドもあわせてご覧ください。
            </p>
            <p className="text-xs">出典: 国土交通省「令和6年度テレワーク人口実態調査」（2026年6月参照）</p>
          </div>
        </div>
      </section>

      {/* sec6 チェックポイント */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">リモートワーク求人を見極めるチェックポイント</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>「リモート可」と「フルリモート」の違いを確認</h3>
              <p className="text-sm text-text-light">
                求人票に「リモート可」と書かれていても、実際には週1〜2回の出社が必要なケースが少なくありません。「フルリモート」であれば完全在宅勤務ですが、「リモート可」は出社頻度が企業やチームによって異なります。転職前に「実際の出社頻度はどのくらいか」をエージェント経由で必ず確認しましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>リモート率の実態を確認する</h3>
              <p className="text-sm text-text-light">
                求人票に「リモートワーク制度あり」と記載されていても、実際の利用率が低い企業もあります。制度の有無だけでなく、「チーム全体でのリモート利用率」「上司や同僚の在宅勤務状況」など、実態を把握することが重要です。転職エージェントは企業の内部事情に詳しいため、こうしたリアルな情報を提供してくれます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>フルリモート特化型エージェントの活用</h3>
              <p className="text-sm text-text-light">
                確実にフルリモートの求人だけを探したい場合は、ReWorksのようなフルリモート特化型の転職サイトが最適です。ReWorksに掲載されている求人はすべてフルリモート案件のため、「入社してみたらリモートではなかった」というミスマッチを防げます。地方在住の方や、育児・介護で出社が難しい方に特におすすめです。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>出社回帰リスクを面接で確認する</h3>
              <p className="text-sm text-text-light">
                働き方の方針は入社後に変わることがあります。「リモート制度はいつから・どんな経緯で導入されたか」「経営陣はリモートをどう位置づけているか」「過去に出社方針へ変更されたことはあるか」を面接やカジュアル面談で確認しましょう。コロナ禍以前からリモートを運用している企業や、全国採用・地方在住社員が多い企業は、出社回帰リスクが構造的に低いと判断できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 スキル */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">リモートで評価される働き方・スキル</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              リモート求人の選考では、技術力に加えて<strong>「離れていても安心して任せられるか」</strong>が見られます。次の4点を職務経歴書・面接でアピールできると、リモート枠での採用可能性が大きく上がります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. テキストコミュニケーション力</h3>
              <p className="text-text-light text-sm leading-relaxed">リモートの情報伝達はSlack・ドキュメントなどテキストが中心。結論から書く、経緯を構造化して残す、非同期でも誤解なく伝える力は、リモート選考で最も重視されるソフトスキルです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. セルフマネジメント力</h3>
              <p className="text-text-light text-sm leading-relaxed">タスクを自分で分解し、進捗・詰まりを自発的に共有できること。「指示待ちにならず、見えないところでも進められる」実績（リモート勤務経験・個人開発の完遂など）が証拠になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 成果を可視化する習慣</h3>
              <p className="text-text-light text-sm leading-relaxed">プルリクエスト・設計ドキュメント・改善数値など、アウトプットを形に残す習慣。時短勤務やブランクがあっても「成果で評価される」土台になり、女性のキャリア継続とも好相性です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. リモート開発ツールの実務経験</h3>
              <p className="text-text-light text-sm leading-relaxed">Git/GitHubでのコードレビュー、Slack・Zoom・Notionなどでの非同期協働、CI/CDの運用経験。ツール自体は入社後にも学べますが、経験があると即戦力として評価されます。</p>
            </div>
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
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>転職成功者Aさん（30代前半）</h3>
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
              <p className="text-sm text-text-light">IT特化型エージェントを活用し、技術力を正当に評価してくれる企業に転職。年収180万円アップに加えフルリモート勤務が可能に。ワークライフバランスが大幅に改善し、「エージェントに相談して本当に良かった」と語っています。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>転職成功者Bさん（20代後半）</h3>
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
              <p className="text-sm text-text-light">女性特化型エージェントを利用し、産休育休制度が充実した自社開発企業に転職。年収130万円アップと働きやすい環境の両方を手に入れました。「女性の悩みに寄り添ったサポートが心強かった」とのこと。</p>
            </div>
          </div>
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

      {/* 出典一覧 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">本記事の出典</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 総務省「令和6年通信利用動向調査」（2025年5月公表）――企業のテレワーク導入率（全産業47.3%、情報通信業94.3%、金融・保険業84.5%）（2026年6月参照）</li>
            <li>出典: 国土交通省「令和6年度テレワーク人口実態調査」（2025年3月公表）――雇用型テレワーカーの割合24.6%（前年度比0.2pt減）、地域差、令和5年度調査の業種別データ（情報通信業72.8%）（2026年6月参照）</li>
            <li>出典: パーソル総合研究所「第十回・テレワークに関する調査」（2025年8月発表）――正社員テレワーク実施率22.5%、情報通信業56.3%、継続希望82.2%（2026年6月参照）</li>
            <li>出典: レバレジーズ「IT人材の正社員転職市場動向 2025年6月」――フルリモート求人ピーク比約30%減、原則出社求人約3.4倍、転職求人倍率11.2倍（2026年6月参照）</li>
            <li>出典: レバレジーズ「ITエンジニアのリモートワークに関する実態調査」（2025年8月発表、正社員ITエンジニア654人）――ハイブリッド型44.6%、出社頻度増加23.2%、出社回帰時に転職検討43.7%（2026年6月参照）</li>
          </ul>
          <p className="mt-4 text-xs text-text-light">※ 統計値は各調査の公表時点のものです。最新の数値は各機関の公式サイトをご確認ください。</p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/fullremote-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>フルリモート企業の探し方</h3>
              <p className="text-sm text-text-light">全社リモート企業の特徴と見つけ方</p>
            </a>
            <a href="/articles/regional-remote/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>地方在住×リモート転職ガイド</h3>
              <p className="text-sm text-text-light">地方から都市部水準で働く方法</p>
            </a>
            <a href="/articles/mama-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</h3>
              <p className="text-sm text-text-light">育児とエンジニアキャリアの両立</p>
            </a>
            <a href="/articles/how-to-choose/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>エージェント選び方ガイド</h3>
              <p className="text-sm text-text-light">失敗しない5つのポイント</p>
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
