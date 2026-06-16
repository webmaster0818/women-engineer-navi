import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの副業ガイド｜始め方・単価相場・税金と会社規定の注意【2026年】",
  description:
    "女性エンジニアの副業を実データで解説。企業の副業容認率64.0%（パーソル総合研究所2025）・正社員の副業実施率11.0%、副業の平均時給3,617円、形態別の単価目安、「所得20万円以下は確定申告不要」ルールの正確な中身（住民税の申告は別途必要=国税庁）、就業規則・競業避止の注意、転職市場での副業実績の活かし方まで出典付きで紹介します。",
  alternates: { canonical: "/articles/side-job/" },
  openGraph: {
    title: "女性エンジニアの副業ガイド｜始め方・単価相場・税金と会社規定の注意【2026年】",
    description:
      "副業容認企業64.0%・副業実施率11.0%・平均時給3,617円（パーソル総合研究所2025）。形態別単価、20万円ルールの正確な税務、就業規則の注意点を実データで解説。",
    url: "https://women-engineer.com/articles/side-job/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの副業ガイド｜始め方・単価相場・税金と会社規定の注意【2026年】",
  datePublished: "2026-04-28",
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
    "副業容認企業64.0%・副業実施率11.0%・平均時給3,617円（パーソル総合研究所2025）。形態別単価、20万円ルールの正確な税務、就業規則の注意点を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/side-job/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "エンジニアの副業はどのくらい稼げますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "パーソル総合研究所「第四回 副業の実態・意識に関する定量調査」（2025年）によると、副業の時給は平均3,617円・中央値2,083円、副業の平均月間時間は23.0時間です。エンジニアの開発系副業案件はフリーランスエージェント経由で時給2,000〜6,000円程度が目安とされ（ITプロパートナーズ「ITプロマガジン」）、週末などに月20時間前後稼働するモデルなら月5万〜10万円台が現実的なラインです。技術顧問・コードレビューなど経験を売るスポット型はさらに高時給になる一方、クラウドソーシングの実装案件は時給換算1,000〜3,000円程度と低めで、稼ぎ方によって大きな差が出ます。",
      },
    },
    {
      "@type": "Question",
      name: "副業所得が20万円以下なら、何も手続きしなくていいのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ。「20万円以下なら申告不要」は所得税（確定申告）だけのルールです。国税庁タックスアンサーNo.1900によると、給与を1か所から受けていて年末調整を受けている会社員は、給与所得・退職所得以外の所得（副業の収入から経費を引いた額）の合計が20万円を超える場合に確定申告が必要です。20万円以下なら所得税の確定申告は不要ですが、住民税にはこの特例がないため、市区町村への住民税の申告は金額にかかわらず必要です。また、医療費控除などで確定申告をする場合は、20万円以下の副業所得も含めてすべて申告しなければなりません。",
      },
    },
    {
      "@type": "Question",
      name: "就業規則で副業が禁止されている場合、絶対にできませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "まず自社の就業規則と届出手続きの確認が大前提です。厚生労働省のモデル就業規則は2018年1月の改定で「原則禁止」から「届出制で原則容認」へ転換しており、制限できるのは①労務提供上の支障がある場合②企業秘密が漏洩する場合③会社の名誉・信用を損なう行為や信頼関係を破壊する行為がある場合④競業により企業の利益を害する場合、の4類型が目安とされています。裁判例でも労働時間外の時間の使い方は本来労働者の自由とされていますが、無断副業や競合先での副業は懲戒の対象になり得ます。隠れて始めるのではなく、規定を確認し、必要な届出をしてから始めるのが安全です。",
      },
    },
    {
      "@type": "Question",
      name: "副業は会社にバレますか？住民税で分かると聞きました。",
      acceptedAnswer: {
        "@type": "Answer",
        text: "勤務先に副業収入が推測される代表的な経路は住民税です。住民税は通常、前年の所得をもとに計算された額が給与から天引き（特別徴収）されるため、給与額に対して住民税が不自然に多いと経理担当者が気づく可能性があります。確定申告書や住民税申告書で、給与・公的年金以外の所得分の住民税を「自分で納付（普通徴収）」にすると天引き額への上乗せを避けられる場合がありますが、自治体によって取り扱いが異なり確実な方法ではありません。そもそも就業規則違反の状態で隠し通すことを前提にするのはリスクが大きいため、届出制であれば正式に届け出てから始めることを強くおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "副業の実績は転職でどう活かせますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "副業は「社外でも通用するスキルの証明」として職務経歴書に書ける実績になります。本業では触れない技術スタックや、要件整理〜納品まで一人称で回した経験は、ポートフォリオと面接の具体エピソードの両方に使えます。実際、パーソル総合研究所の調査（2025年）では副業経験者の6.7%が副業先へ転職しており、20代では13.6%に上ります。副業が実質的な「お試し転職」として機能しているということです。守秘義務に反しない範囲で成果物・役割・使用技術を整理し、ポートフォリオに組み込んでおきましょう。",
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
    { "@type": "ListItem", position: 3, name: "女性エンジニアの副業ガイド", item: "https://women-engineer.com/articles/side-job/" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
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
              { label: "女性エンジニアの副業ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              働き方
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの副業ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                始め方・単価相場・税金と会社規定の注意【2026年】
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
                <span><strong>副業を認める企業は64.0%で過去最高、正社員の副業実施率は11.0%。</strong>経団連の会員企業調査でも「認めている・認める予定」が70.5%。副業はもう特別な働き方ではありません（パーソル総合研究所2025・経団連2022）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>副業の時給は平均3,617円・中央値2,083円（パーソル総合研究所2025）。</strong>エンジニアの開発案件はエージェント経由で時給2,000〜6,000円程度が目安で、月20時間前後の稼働なら月5万〜10万円台が現実的なラインです。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>「所得20万円以下は申告不要」は所得税だけのルール。</strong>20万円以下でも住民税の申告は市区町村に必要です（国税庁タックスアンサーNo.1900・各自治体）。ここの誤解が最も多い注意点です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>始める順番は「就業規則の確認」が必ず最初。</strong>厚労省モデル就業規則は届出制で原則容認へ転換済みですが、競業・秘密漏洩などは制限対象です。無断で始めず、届け出てから小さく始めましょう。</span>
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. エンジニア副業の現在地【実データ】</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 副業の形態比較表（単価目安つき）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 始め方4ステップ（就業規則確認→小さく開始→確定申告）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 副業の税金：「20万円ルール」の正確な中身</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 就業規則・競業避止・情報管理の注意点</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 本業との両立とバーンアウト対策</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 副業実績を転職市場で活かす方法</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 現在地 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">エンジニア副業の現在地【実データ】</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「副業はまだ一部の人のもの」というイメージは、データの上ではすでに過去のものです。パーソル総合研究所「第四回 副業の実態・意識に関する定量調査」（2025年8月実施）によると、<strong>副業を容認する企業は64.0%と調査開始以来の最高値</strong>を更新し、ルールや制限なく全面容認する企業の割合は2018年の約2倍になりました。<strong>正社員の副業実施率も11.0%と過去最高</strong>（前回調査から4.0ポイント上昇）です。
            </p>
            <p>
              企業側の調査でも傾向は同じです。経団連「副業・兼業に関するアンケート調査」（2022年）では、回答企業の<strong>70.5%が社員の社外での副業・兼業を「認めている」（53.1%）または「認める予定」（17.5%）</strong>と回答し、常用労働者5,000人以上の大企業では合計8割を超えます。この流れの起点は2018年1月、厚生労働省がモデル就業規則を「副業原則禁止」から「届出制で原則容認」へ改定したことです。
            </p>
            <p>
              エンジニアはこの流れの恩恵を最も受けやすい職種です。成果物がコードやドキュメントとして明確で、フルリモート・非同期で完結する案件が多く、平日夜や週末の細切れ時間でも価値を出せるからです。収入面でも、副業全体の時給は平均3,617円・中央値2,083円（同調査）と一般のアルバイト水準を大きく上回り、スキルを持つエンジニアはさらに上の水準を狙えます。なお、雇用されずに独立して働く選択肢との違いは<a href="/articles/freelance/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>フリーランスガイド</a>で詳しく解説しています。本記事は「<strong>会社員の安定（給与・社会保険・産休育休）を維持したまま</strong>、副業で収入とスキルを上積みする」働き方に絞って解説します。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>64.0%</p>
              <p className="text-sm font-bold mt-2">副業を容認する企業の割合</p>
              <p className="text-xs text-text-light mt-1">過去最高。全面容認は2018年比で約2倍（パーソル総合研究所2025）</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>11.0%</p>
              <p className="text-sm font-bold mt-2">正社員の副業実施率</p>
              <p className="text-xs text-text-light mt-1">過去最高（前回比+4.0pt）。副業平均月間時間は23.0時間</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>3,617円</p>
              <p className="text-sm font-bold mt-2">副業の平均時給</p>
              <p className="text-xs text-text-light mt-1">中央値は2,083円。スキル次第で大きく差がつく（同調査）</p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: パーソル総合研究所「第四回 副業の実態・意識に関する定量調査」（2025年10月発表）、経団連「副業・兼業に関するアンケート調査結果」（2022年10月）、厚生労働省「モデル就業規則」（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec2 形態比較表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">副業の形態比較表（単価目安つき）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              エンジニアの副業は大きく「開発で稼ぐ」「知識を伝えて稼ぐ」「経験を売って稼ぐ」の3系統に分かれます。<strong>必要な実務経験・拘束のされ方・単価がそれぞれ違う</strong>ため、自分の経験年数と使える時間に合わせて選ぶのが失敗しないコツです。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>形態</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>単価の目安</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>向いている人・特徴</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>週末・平日夜の開発案件（業務委託）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>時給2,000〜6,000円程度（エージェント案件水準=ITプロマガジン）。クラウドソーシングは1,000〜3,000円程度と低め</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>実務2〜3年以上。本業に近いスキルで最も稼ぎやすい王道。週10時間×時給3,000円で月約12万円の計算</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>技術記事の執筆・教材作成</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>1記事5,000円〜3万円程度（公開求人水準の目安）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>納期が緩く、育児中などまとまった時間が取れない人向き。発信実績がそのまま転職時のアピールになる</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>メンター・プログラミング講師</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>時給1,500〜3,000円程度（スクールのメンター公開募集水準の目安）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>時間が読めて両立しやすい。単価は控えめだが、教えることで知識が体系化され本業にも還元される</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>コードレビュー・技術顧問・スポット相談</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>時給4,000円〜1万円程度（公開求人水準の目安）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>実務5年以上の経験を「時間売り」せず高単価で売れる形態。稼働が短くburnoutしにくいのが利点</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Webサイト制作（請負）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>1件5万〜15万円程度（公開求人水準の目安）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>納品物が明確で実績を作りやすい反面、修正対応の範囲を契約で決めないと時給換算が大きく下がりやすい</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: ITプロパートナーズ「ITプロマガジン」（エンジニア副業の時給相場、2026年6月参照）。「公開求人水準の目安」と記載した単価は、各種副業マッチングサービス・スクールの公開募集情報を参考にした概算であり、スキル・実績・契約条件により変動します。
          </p>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>案件はどこで探す？</h3>
            <p className="text-sm text-text-light leading-relaxed">
              開発系の副業案件は、<strong>週1〜2日・リモート前提の案件を扱う副業マッチングサービスやフリーランスエージェント</strong>で探すのが効率的です。クラウドソーシングは始めやすい一方で単価競争になりやすく、時給換算で消耗しがちです。もう一つの有力ルートが<strong>発信からの直接依頼</strong>で、技術ブログ・登壇・GitHubでスキルを可視化しておくと、単価交渉で不利になりにくい「指名され​る側」に回れます。スキルの可視化の作り方は<a href="/articles/portfolio/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>ポートフォリオの作り方</a>を参考にしてください。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 始め方STEP */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">始め方4ステップ（就業規則確認→小さく開始→確定申告）</h2>
          <div className="space-y-4">
            {[
              ["STEP1", "就業規則と届出手続きを確認する（必ず最初に）", "人事規程・就業規則の「副業・兼業」条項を確認し、届出制なら所定の手続きを踏む。厚労省モデル就業規則は届出制で原則容認だが、自社規定が許可制・禁止の場合もある。競合企業の案件・秘密情報に触れる案件は届出が通っても避けるのが鉄則。"],
              ["STEP2", "週5〜10時間で収まる小さな案件から始める", "最初から月10万円を狙わず、技術記事1本・小さな改修1件など「本業に影響が出ないサイズ」で開始する。見積もり→契約→納品→請求の一連を経験することが最初の成果。業務委託契約の場合、報酬・納期・修正回数・著作権の帰属を書面で確認する。"],
              ["STEP3", "稼働ログをつけて継続可否を判断する", "1〜2か月続けたら、かけた時間と報酬を時給換算し、睡眠時間と本業のパフォーマンスに影響が出ていないかを確認する。割に合わない案件は撤退し、単価か形態（開発→レビュー・顧問など）を見直す。家族がいる場合は稼働時間帯の合意も必須。"],
              ["STEP4", "帳簿をつけて税金の手続きをする", "報酬の入金記録と経費（書籍・サブスク・機材など按分含む）を会計ソフト等で記録。副業所得（収入−経費）が年20万円を超えたら所得税の確定申告、20万円以下でも住民税の申告を行う（詳細は次章）。源泉徴収されている報酬は申告で還付されることもある。"],
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
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              副業はフリーランス独立の「試運転」としても最良の手段です。会社員の信用と社会保険を保ったまま、自分のスキルが社外でいくらで売れるかを検証できます。独立まで視野に入れている場合は<a href="/articles/freelance/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性フリーランスエンジニアの始め方</a>で、単価相場と保障の違いを先に確認しておきましょう。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 税金 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">副業の税金：「20万円ルール」の正確な中身</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              副業の税金で最も誤解が多いのが「20万円以下なら何もしなくていい」という理解です。<strong>これは所得税（国税）の確定申告に限ったルールで、住民税（地方税）には適用されません</strong>。正確に整理します。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>所得税：副業「所得」が年20万円超なら確定申告が必要</h3>
              <p className="text-sm text-text-light leading-relaxed">
                国税庁タックスアンサーNo.1900「給与所得者で確定申告が必要な人」によると、給与を1か所から受けていて年末調整を受けている会社員は、<strong>給与所得・退職所得以外の所得金額の合計が年20万円を超える場合</strong>に確定申告が必要です。判定は「収入」ではなく<strong>「所得」（収入−必要経費）</strong>で行います。例えば副業収入25万円・経費8万円なら所得17万円で、所得税の確定申告は不要です。書籍・技術系サブスク・機材・通信費（事業利用分の按分）などは経費として整理できますが、領収書・明細の保存が前提です。
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: "#fff7ed", border: "2px solid #c15f47" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>住民税：20万円以下でも申告が必要（最重要の注意点）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                「20万円以下なら確定申告不要」の特例は<strong>所得税だけのもので、住民税には同様の特例がありません</strong>。副業所得が20万円以下で確定申告をしない場合でも、<strong>お住まいの市区町村への住民税の申告は必要</strong>です（確定申告をすればその内容が自治体に連携されるため、住民税の申告は別途不要になります）。また、医療費控除やふるさと納税（ワンストップ特例を使わない場合）などで確定申告をする場合は、<strong>20万円以下の副業所得も含めてすべての所得を申告</strong>しなければなりません。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>住民税の納付方法と「会社に知られる」経路</h3>
              <p className="text-sm text-text-light leading-relaxed">
                住民税は通常、給与から天引き（特別徴収）されます。副業分の所得が上乗せされると天引き額が増え、勤務先が副業収入の存在に気づく可能性があります。確定申告書・住民税申告書で給与・公的年金以外の所得分を<strong>「自分で納付（普通徴収）」</strong>に選択すると天引きと分離できる場合がありますが、<strong>自治体により取り扱いが異なり、確実な方法ではありません</strong>。「バレない工夫」を前提にするのではなく、届出制なら正式に届け出てから始めるのが本筋です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>継続するなら：開業届と青色申告</h3>
              <p className="text-sm text-text-light leading-relaxed">
                副業を事業として継続する場合、開業届と青色申告承認申請書を税務署に提出し、複式簿記＋電子申告で申告すれば<strong>最大65万円の青色申告特別控除</strong>が受けられます。ただし、会社員の副業は規模・継続性によっては事業所得ではなく<strong>雑所得</strong>と判定される場合があり（その場合は青色申告の対象外）、帳簿書類の保存が事業所得判定の重要な要素とされています。本格的に拡大する段階や、インボイス登録が関わる規模になったら、税務署の無料相談や税理士への相談をおすすめします。
              </p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 国税庁タックスアンサーNo.1900「給与所得者で確定申告が必要な人」、国税庁「確定申告が必要な方」、国税庁「青色申告特別控除」（いずれも2026年6月参照）。住民税の申告手続きは各市区町村の案内をご確認ください。
          </p>
        </div>
      </section>

      {/* sec5 就業規則・競業避止 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">就業規則・競業避止・情報管理の注意点</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              税金より先に確認すべきなのが会社のルールです。厚生労働省のモデル就業規則は2018年1月の改定で、副業・兼業を<strong>「原則禁止」から「届出制で原則容認」</strong>へ転換しました。労働時間以外の時間をどう使うかは基本的に労働者の自由、というのが現在の考え方です（厚生労働省「副業・兼業の促進に関するガイドライン」）。ただし、次の4類型に当たる場合は会社が副業を禁止・制限できるとされています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>会社が制限できる4類型（モデル就業規則第70条）</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>労務提供上の支障がある場合</strong>：深夜稼働で本業に遅刻・居眠りなど、パフォーマンス低下が客観的に生じるケース</li>
                <li>・<strong>企業秘密が漏洩する場合</strong>：本業のソースコード・設計情報・顧客情報を副業に流用するのは論外。NDA違反は法的責任にも直結</li>
                <li>・<strong>会社の名誉・信用を損なう行為、信頼関係を破壊する行為がある場合</strong></li>
                <li>・<strong>競業により企業の利益を害する場合</strong>：本業と同じ事業領域・競合他社の案件は、許可制でも認められないことが多い</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>エンジニアが実務で守るべきライン</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>会社PC・会社アカウントを副業に使わない</strong>：情報漏洩疑義の典型パターン。端末・リポジトリ・クラウド環境は完全分離する</li>
                <li>・<strong>本業の就業時間中に副業の作業・連絡をしない</strong>：職務専念義務違反になり得る</li>
                <li>・<strong>競合判定に迷う案件は事前に確認する</strong>：「業界が近いが顧客層が違う」等のグレーは自己判断せず、届出時に明示して判断を仰ぐ</li>
                <li>・<strong>契約書で著作権・成果物の権利帰属を確認する</strong>：副業側の成果物の権利関係が曖昧だと、本業・副業双方とのトラブルの種になる</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「モデル就業規則」（第70条 副業・兼業）、厚生労働省「副業・兼業の促進に関するガイドライン」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              なお、パーソル総合研究所の調査では、業務委託型の副業者のうち<strong>労働者性に問題があり得る働き方をしている層が55.2%</strong>に上ると指摘されています。「業務委託」という契約名でも、実態として指揮命令を受けて時間管理されているなら雇用に近く、労働時間の通算などの論点が生じます。発注側の管理が強すぎる案件は、契約形態と実態のずれがないか注意してください。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 両立とバーンアウト */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">本業との両立とバーンアウト対策</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              副業の最大のリスクは税金でも規則でもなく、<strong>働きすぎ</strong>です。パーソル総合研究所の調査（2025年）では、本業と副業を合計した労働時間が<strong>月45時間超の時間外労働に相当する人が約3割</strong>おり、その半数以上が副業を会社に申告していません。「隠れて長時間働く」状態が、健康面で最も危険なパターンです。
            </p>
            <p>
              同調査の副業の平均月間時間は23.0時間。<strong>週5〜6時間程度が「続けられる副業」の平均像</strong>です。これを基準に、自分のルールを先に決めてから始めましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>先に決めておくルール</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>週の上限時間</strong>を決める（例: 週8時間まで）。超過が2週続いたら案件量を減らす</li>
                <li>・<strong>睡眠時間は削らない</strong>。削るのは可処分時間（動画・SNS等）から</li>
                <li>・<strong>本業の繁忙期・リリース前は副業を止める</strong>と最初から決めておく</li>
                <li>・<strong>納期に余裕のある非同期型の案件を選ぶ</strong>。「即レス必須」「定例多数」の案件は会社員の副業には不向き</li>
                <li>・育児・介護と並行する場合は、稼働時間帯について家族と合意してから受注する</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>撤退・縮小のサイン</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・本業の業務中に眠気・集中力低下を自覚する／レビュー指摘が増えた</li>
                <li>・休日が「副業の納期に追われる日」になり、休息がない週が続く</li>
                <li>・時給換算が最低賃金水準まで下がる修正地獄に陥っている</li>
                <li>・体調不良やイライラが増えたと家族・同僚に指摘される</li>
                <li>→ 1つでも当てはまったら、<strong>案件を断る・納期を交渉する・単価を上げて量を減らす</strong>のいずれかを即実行</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: パーソル総合研究所「第四回 副業の実態・意識に関する定量調査」（過重労働の実態・副業平均月間時間、2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              通勤時間をなくして副業の時間を捻出する、という順番の工夫も有効です。本業を<a href="/articles/remote-jobs/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>リモートワーク可の職場</a>に移すだけで、平日に往復1〜2時間の可処分時間が生まれます。「副業のために睡眠を削る」のではなく「副業できる生活構造に変える」発想が長続きの鍵です。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 転職での活かし方 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">副業実績を転職市場で活かす方法</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              副業は収入の上積みだけでなく、<strong>転職市場での評価を上げる投資</strong>としても機能します。実際、パーソル総合研究所の調査（2025年）では<strong>副業経験者の6.7%が副業先へ転職</strong>しており、20代では13.6%に達します。副業受け入れ企業の55.6%が「副業人材の転職受け入れ経験あり」と回答しており、副業は事実上の「相互お試し期間つき採用ルート」になりつつあります。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>職務経歴書・面接での見せ方</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>「本業と別の文脈で成果を出した」ことを軸に書く</strong>：本業がSIerなら副業の自社サービス改善経験、本業がバックエンドなら副業のフロントエンド経験など、スキルの幅の証明として整理する</li>
                <li>・<strong>一人称で完結させた範囲を明確にする</strong>：要件整理・見積もり・設計・実装・納品のどこまでを一人で担ったか。これは会社員業務では示しにくい自走力の証拠になる</li>
                <li>・<strong>数字で語る</strong>：「月X時間の稼働で、リリースをN回」「レビュー対応をX件」など。守秘義務に反しない範囲で成果物のスクリーンショットやリポジトリを<a href="/articles/portfolio/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>ポートフォリオ</a>に組み込む</li>
                <li>・<strong>年収交渉の材料にする</strong>：「副業で時給換算X円の値がついている」という事実は、自分の市場価値の客観的な根拠になる。相場感は<a href="/articles/salary/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</a>で確認を</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>女性エンジニアにとっての戦略的な意味</h3>
              <p className="text-sm text-text-light leading-relaxed">
                出産・育児などで本業のキャリアに中断期間が生じやすい人ほど、副業の「社外実績」は効きます。会社の評価制度の外に、自分の名前で積み上がる実績と取引先を持っておくことは、復職・転職・将来の独立のすべてで選択肢を増やします。時短勤務中でも続けられる小さな技術執筆やメンタリングは、ブランクを「空白」にしない手段にもなります。会社員の保障を持ったまま試せるのが副業の最大の利点です。独立まで進む場合の単価相場・保障の違いは<a href="/articles/freelance/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>フリーランスガイド</a>で解説しています。
              </p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: パーソル総合研究所「第四回 副業の実態・意識に関する定量調査」（副業先への転職経験・受け入れ企業の実態、2026年6月参照）
          </p>
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

      {/* sec9 FAQ */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl border overflow-hidden" style={{ borderColor: "#d9c7b8", backgroundColor: "#fff" }}>
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
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>・出典: パーソル総合研究所「第四回 副業の実態・意識に関する定量調査」（2025年10月発表、調査実施2025年8月、2026年6月参照）— 企業の副業容認率64.0%（過去最高、全面容認は2018年比約2倍）、正社員の副業実施率11.0%（過去最高・前回比+4.0pt）、副業の時給 平均3,617円・中央値2,083円、副業平均月間時間23.0時間、本業+副業で月45時間超相当の過重労働者は約3割（半数以上が未申告）、業務委託型副業で労働者性に問題があり得る層55.2%、副業経験者の6.7%が副業先へ転職（20代13.6%）、副業受入企業の55.6%が副業人材の転職受け入れ経験あり</li>
            <li>・出典: 経団連「副業・兼業に関するアンケート調査結果」（2022年10月、2026年6月参照）— 社員の社外での副業・兼業を「認めている」53.1%＋「認める予定」17.5%＝70.5%。常用労働者5,000人以上では合計8割超</li>
            <li>・出典: 厚生労働省「モデル就業規則」（第70条 副業・兼業）／「副業・兼業の促進に関するガイドライン」（2026年6月参照）— 2018年1月改定で届出制・原則容認へ転換。禁止・制限できるのは①労務提供上の支障②企業秘密の漏洩③名誉・信用を損なう行為、信頼関係を破壊する行為④競業により企業の利益を害する場合</li>
            <li>・出典: 国税庁タックスアンサーNo.1900「給与所得者で確定申告が必要な人」／「確定申告が必要な方」（2026年6月参照）— 給与を1か所から受けている給与所得者は、給与所得・退職所得以外の所得金額の合計が20万円を超える場合に確定申告が必要。この20万円基準は所得税のみのもので、住民税の申告は別途必要（手続きは各市区町村）</li>
            <li>・出典: 国税庁「青色申告特別控除」（2026年6月参照）— 複式簿記＋電子申告（e-Tax）等の要件を満たす青色申告で最大65万円の特別控除</li>
            <li>・出典: ITプロパートナーズ「ITプロマガジン」（2026年6月参照）— エンジニア副業の時給相場：フリーランスエージェント経由 約2,000〜6,000円、クラウドソーシング 約1,000〜3,000円</li>
          </ul>
          <p className="text-xs text-text-light mt-4">※単価・割合等の数値は調査時点のものであり、スキル・経験・契約条件・自治体により変動します。「公開求人水準の目安」と記載した単価は各種公開募集情報に基づく概算です。税・社会保険・就業規則の個別判断は、税理士・社会保険労務士・勤務先の人事部門・各自治体窓口にご確認ください。</p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/freelance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性フリーランスエンジニアの始め方</h3>
              <p className="text-sm text-text-light">副業の先にある独立の単価相場・保障・リスク</p>
            </a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3>
              <p className="text-sm text-text-light">平均年収データと年収アップの方法</p>
            </a>
            <a href="/articles/portfolio/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ポートフォリオの作り方</h3>
              <p className="text-sm text-text-light">副業実績をスキルの証明に変える見せ方</p>
            </a>
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リモートワーク求人ガイド</h3>
              <p className="text-sm text-text-light">通勤ゼロで副業の時間を生み出す働き方</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12"><div className="mx-auto max-w-4xl px-4 text-center"><div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}><h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2><p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p><a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a></div></div>
      </section>
    </>
  );
}
