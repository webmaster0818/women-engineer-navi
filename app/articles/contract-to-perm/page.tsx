import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニア｜契約社員から正社員を目指すガイド｜無期転換・登用の道筋",
  description:
    "契約社員エンジニアの女性が正社員を目指すための完全ガイド。無期転換ルール（通算5年）と正社員登用制度の違い、正社員になる具体ステップ、契約社員のメリット・デメリット、正社員転職という別ルート、女性が安定を得る戦略を実データと制度名で解説します。",
  alternates: { canonical: "/articles/contract-to-perm/" },
  openGraph: {
    title: "女性エンジニア｜契約社員から正社員を目指すガイド｜無期転換・登用の道筋",
    description:
      "契約社員エンジニアの女性が正社員を目指すためのガイド。無期転換ルール・正社員登用制度・具体ステップ・メリデメ・転職という別ルート・安定戦略を実データで解説。",
    url: "https://women-engineer.com/articles/contract-to-perm/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニア｜契約社員から正社員を目指すガイド｜無期転換・登用の道筋",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
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
    "契約社員エンジニアの女性が正社員を目指すためのガイド。無期転換ルール・正社員登用制度・具体ステップ・メリデメ・転職という別ルート・安定戦略を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/contract-to-perm/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "契約社員エンジニアは5年働けば自動的に正社員になれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ、自動的に正社員になるわけではありません。労働契約法の無期転換ルール（5年ルール）で得られるのは「無期労働契約」への転換であり、雇用期間の定めがなくなるだけで、正社員になることとは別物です。実際、企業の約37.3%は契約期間のみを無期にして給与・賞与・労働条件は契約社員時代のまま据え置く方針とされ、いわゆる『無期契約社員（限定正社員）』にとどまるケースが多くあります。賞与・退職金・昇給を含む正社員待遇を得たい場合は、別途その企業の正社員登用制度に応募するか、正社員求人へ転職する必要があります。なお無期転換の申込権は、契約期間1年なら5回目の更新後（通算5年超）に発生します。",
      },
    },
    {
      "@type": "Question",
      name: "無期転換ルールと正社員登用制度はどう違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "無期転換ルールは、有期契約が通算5年を超えたとき労働者本人の申込みで無期契約に転換できる法律上の権利で、会社は拒否できません。ただし変わるのは『契約期間』だけで、待遇は原則として転換前と同じです。一方、正社員登用制度は会社が任意で設ける制度で、面接や試験に合格すれば賞与・退職金・昇給・福利厚生を含む正社員待遇になります。前者は『安定（雇い止めの不安解消）』、後者は『待遇の引き上げ』が主な効果と理解すると整理しやすいです。両者は併用も可能で、まず無期転換で雇用を安定させ、並行して登用試験を狙う進め方が現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "同じ仕事をしているのに契約社員だと給与が低いのは違法ではないのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2020年4月施行（中小企業は2021年4月適用）のパートタイム・有期雇用労働法により『同一労働同一賃金』が義務化され、正社員と契約社員の間の不合理な待遇差は禁止されています。職務内容や責任、配置変更の範囲が同じなら、基本給・賞与・各種手当で不合理な差をつけることは違法です。ただし、責任の範囲や転勤の有無など『働き方の違い』に応じた合理的な差は認められます。賞与ゼロや手当の不支給に納得できない場合は、待遇差の理由を会社に説明させる権利（説明義務）があるので、まず根拠を確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "産休・育休を取りたい女性は契約社員と正社員のどちらが安心ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "制度上は契約社員でも育児・介護休業や産休は取得でき、一定要件を満たせば育児休業給付金も受け取れます。ただし契約社員は契約更新が前提のため、休業中の更新や復帰ポジションに不安が残りやすいのが実情です。長期的な安定や住宅ローン審査、昇給・賞与・退職金まで考えると、無期転換で雇用を確定させたうえで正社員登用を目指すか、産休育休の取得実績が豊富な企業へ正社員転職するのが安心です。求人票に出ない復帰率や時短勤務の運用実態は、女性のキャリアに詳しい転職エージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "契約社員のエンジニア経験は正社員転職で評価されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "十分に評価されます。エンジニアは雇用形態よりも『何を作れるか・どんな技術スタックで何を担当したか』が問われる職種で、契約社員として現場で積んだ実装・設計・運用の実績はそのまま職務経歴になります。むしろ契約社員は特定領域に集中しやすく、特定言語やフレームワーク、クラウドの深い経験を積めることも多いです。職務経歴書では『参画したプロジェクトの規模・役割・成果（改善した処理速度や担当機能）』を具体的な数値で示し、ポートフォリオやGitHubを添えると、未経験スタートでも正社員求人で戦えます。IT特化型エージェントに技術の棚卸しを手伝ってもらうと評価ポイントを言語化しやすくなります。",
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
              { label: "契約社員から正社員を目指すガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              働き方ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              契約社員から正社員を目指す女性エンジニアのガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                無期転換ルール・正社員登用・転職で「安定」を手に入れる道筋を実データで解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月10日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 契約社員エンジニアの実態</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 正社員登用と無期転換ルール（5年）の違い</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 正社員になる具体ステップ</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 契約社員のメリット・デメリット</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 「正社員転職」という選択肢</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 女性が安定を得るための戦略</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 正社員化の成功事例</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 実態 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">契約社員エンジニアの実態</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              契約社員とは、あらかじめ契約期間が定められた「有期雇用」で働く社員のこと。契約期間が満了すれば労働契約は自動的に終了し、更新されるかどうかは保証されていません。日本全体では有期労働契約で働く人が約<strong>1,560万人</strong>いるとされ、そのうち約<strong>3割が通算5年を超えて</strong>有期契約を更新しながら働いている実態があります。
            </p>
            <p>
              IT・エンジニア領域でも、第二新卒や未経験スタート、ブランクからの復帰、ライフイベントとの両立を理由に、まず契約社員として現場に入る女性は少なくありません。エンジニアは「雇用形態」より「何を作れるか」で評価される職種のため、契約社員でも実装・設計・運用の実務経験を着実に積めるのが強みです。一方で、契約更新の不安や、賞与・退職金・昇給で正社員との待遇差が生じやすいのが課題になります。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>契約社員エンジニアが「正社員」を意識し始めるタイミング</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>契約更新のたびに「次も続くか」不安を感じるようになった</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>結婚・出産・住宅ローンなど、長期の安定が必要になった</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>正社員と同じ業務なのに賞与・退職金がない待遇差に気づいた</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>実務経験が貯まり、技術的に正社員ポジションを狙える自信がついた</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>通算5年（無期転換の申込権）が近づいてきた</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 無期転換と登用 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">正社員登用と無期転換ルール（5年）の違い</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              契約社員から「安定」を得る道は、大きく分けて<strong>(1)無期転換ルール</strong>と<strong>(2)正社員登用制度</strong>の2つ。混同されがちですが、効果がまったく異なります。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>(1) 無期転換ルール（5年ルール）</h3>
              <p className="text-text-light text-sm leading-relaxed">
                2013年4月施行の改正労働契約法で定められた制度。同じ会社との有期契約が<strong>通算5年を超えた</strong>とき、労働者本人の申込みで無期労働契約に転換できます。会社は拒否できません（契約期間1年なら5回目の更新後に申込権が発生）。ただし変わるのは「契約期間」だけで、給与・賞与・労働条件は原則として転換前のまま。<strong>「正社員になる」ことと同じではありません。</strong>
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>(2) 正社員登用制度</h3>
              <p className="text-text-light text-sm leading-relaxed">
                会社が任意で設ける制度。面接や登用試験、上司推薦などの選考を通過すれば、<strong>賞与・退職金・昇給・福利厚生を含む正社員待遇</strong>に切り替わります。無期転換が「雇用の安定」なら、登用は「待遇そのものの引き上げ」。制度の有無・実績は会社によって差が大きいため、就業規則や募集要項で必ず確認しましょう。
              </p>
            </div>
          </div>

          <div className="overflow-x-auto mt-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>無期転換ルール</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>正社員登用制度</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>根拠</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>法律上の権利（労働契約法）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>会社が任意で設ける制度</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>条件</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>通算5年超＋本人の申込み</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>登用試験・面接・推薦などの選考</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>会社の拒否</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>不可（要件を満たせば権利発生）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>選考で不合格はあり得る</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>変わるもの</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>契約期間（無期化）のみ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>賞与・退職金・昇給・福利厚生など待遇全般</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>主な効果</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>雇い止めの不安が消える</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>収入・福利厚生が正社員水準に</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border p-6 mt-8 bg-white" style={{ borderColor: "#7c3a55" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>注意：無期転換＝正社員ではない</h3>
            <p className="text-sm text-text-light leading-relaxed">
              ある調査では、企業の約<strong>37.3%</strong>が「契約期間だけを無期にして、給与や労働条件は契約社員時代のまま据え置く」方針とされています。この場合、肩書きは「無期契約社員」や「限定正社員（職務・勤務地・時間が限定された無期社員）」にとどまり、賞与や退職金がフルの正社員と同じになるとは限りません。無期転換の案内が来たら、<strong>転換後の労働条件（賞与・退職金・昇給・就業規則の適用範囲）を必ず書面で確認</strong>しましょう。2024年4月からは、雇入れ時や契約更新時に「更新上限」「無期転換の申込機会」「転換後の労働条件」の明示が会社に義務づけられています。
            </p>
          </div>

          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>同一労働同一賃金も味方になる</h3>
            <p className="text-sm text-text-light leading-relaxed">
              2020年4月施行（中小企業は2021年4月適用）の<strong>パートタイム・有期雇用労働法</strong>により、正社員と契約社員の間の「不合理な待遇差」は禁止されています。職務内容・責任・配置変更の範囲が同じなら、基本給や賞与、各種手当で不合理な差をつけることは違法です。さらに会社には待遇差の理由を説明する義務があるため、「同じ仕事なのに賞与がない」と感じたら、まず根拠を確認できます。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 STEP */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">正社員になる具体ステップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>「今の会社で正社員登用を狙う」場合の現実的な進め方です。受け身で待つより、自分から制度を確認し、実績を見える化することが成功率を大きく上げます。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "登用制度の有無と実績を確認する", "就業規則・社内ポータル・人事に、正社員登用制度があるか、過去の登用実績（人数・頻度）があるかを確認。制度はあっても実績ゼロの会社もあるため、ここで現実性を見極めます。"],
              ["STEP2", "登用の要件と評価軸を把握する", "勤続年数、評価ランク、上司推薦、登用試験（職務知識・小論文・面接）など、合格条件を具体的に把握。求められる技術レベルやマネジメント期待値を逆算します。"],
              ["STEP3", "上司・人事に「正社員になりたい」と意思表示する", "登用は本人の意欲が前提のことが多く、黙っていると候補に上がりません。評価面談などで明確に希望を伝え、何を満たせば登用対象になるかを握ります。"],
              ["STEP4", "実績を数値で見える化する", "担当した機能、改善した処理速度や障害削減、参画プロジェクトの規模・役割を数値で整理。エンジニアは成果が客観的に残るので、登用試験・面接の最大の武器になります。"],
              ["STEP5", "無期転換の申込権も並行して確保する", "通算5年が近いなら、まず無期転換で雇用を安定させ、その上で登用試験に挑むのが安全。転換後の労働条件は書面で必ず確認します。"],
              ["STEP6", "登用が難しければ正社員転職に切り替える", "登用実績が乏しい・待遇が上がらない場合は固執しない。契約社員で積んだ実務経験はそのまま職務経歴になるため、正社員求人への転職が近道になることも多いです。"],
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

      {/* sec4 メリデメ */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">契約社員のメリット・デメリット</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>正社員を目指す前に、契約社員という働き方の長所・短所を冷静に整理しておきましょう。ライフステージによっては、あえて契約社員を選ぶ合理性もあります。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>メリット</h3>
              <ul className="space-y-3 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>勤務日数・時間を調整しやすく、育児・介護と両立しやすい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>転勤・異動が少なく、特定の技術領域に集中できる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>マネジメントや調整業務を任されにくく、開発に専念しやすい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>未経験・ブランクからでも現場に入りやすい入口になる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>同一労働同一賃金で、不合理な待遇差は是正の対象</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>デメリット</h3>
              <ul className="space-y-3 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9888;</span><span>契約満了で雇用が終わる可能性があり、雇い止めの不安がある</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9888;</span><span>賞与・退職金が支給されないことが多く、生涯収入で差が出やすい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9888;</span><span>昇給・昇進の機会が限られ、キャリアの上限を感じやすい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9888;</span><span>住宅ローンなど社会的信用の審査で不利になりやすい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9888;</span><span>産休育休は取得可だが、更新・復帰ポジションに不安が残りやすい</span></li>
              </ul>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            ポイントは、契約社員を「目的地」ではなく「通過点」と位置づけること。今は両立のために契約社員を選んでいても、技術力という資産は確実に積み上がります。安定が必要になったタイミングで、無期転換・登用・転職のいずれかへ動けるよう準備しておくのが賢い使い方です。
          </p>
        </div>
      </section>

      {/* sec5 正社員転職 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">「正社員転職」という選択肢</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「今の会社で正社員になる（登用）」だけが道ではありません。<strong>別の会社の正社員求人へ転職する</strong>ルートは、特にエンジニアにとって現実的かつ近道になることが多い選択肢です。
            </p>
            <p>
              理由はシンプルで、エンジニアは雇用形態よりも<strong>技術スキルと実務経験</strong>で評価される職種だから。契約社員として現場で積んだ実装・設計・運用の経験は、そのまま職務経歴になります。登用実績が乏しい会社で何年も待つより、最初から正社員前提・実務経験者歓迎の求人へ応募したほうが、賞与・退職金を含む待遇を一気に引き上げられるケースが少なくありません。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>正社員転職を選んだほうがよいサイン</h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>今の会社に正社員登用制度がない、または過去の登用実績がほぼない</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>無期転換しても賞与・退職金が正社員と同水準にならない見込み</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>産休育休の取得実績や時短勤務の運用が、今の会社では不安</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>すでに2〜3年以上の実務経験があり、即戦力として通用する</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>年収を大きく上げたい・リモートなど働き方を選びたい</span></li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            正社員転職では、職務経歴書で「契約社員＝補助的」という先入観を持たれないよう、担当範囲と成果を主体的な表現で記載するのがコツ。GitHubやポートフォリオを添え、IT特化型エージェントに技術の棚卸しを手伝ってもらうと、評価ポイントを言語化しやすくなります。
          </p>
        </div>
      </section>

      {/* sec6 女性が安定を得る戦略 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が安定を得るための戦略</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              女性エンジニアにとっての「安定」は、雇用形態だけでなく<strong>ライフイベントを越えて働き続けられる環境</strong>を含みます。次の4つの視点を組み合わせると、納得感のある選択ができます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 「技術の資産化」で雇用形態に縛られない</h3>
              <p className="text-text-light text-sm leading-relaxed">特定言語・フレームワーク・クラウドの深い経験を積めば、契約社員でも転職・登用・フリーランスのどの道も選べます。設計やDBの考え方は流行に左右されにくく、ブランク後の復帰の土台にもなります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 「安定」と「待遇」を分けて考える</h3>
              <p className="text-text-light text-sm leading-relaxed">無期転換で雇い止めの不安を消し（安定）、登用や転職で賞与・退職金を得る（待遇）。2つは別問題なので、まず無期転換で土台を固め、並行して待遇アップを狙う二段構えが現実的です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 産休育休・時短の「実績」で会社を選ぶ</h3>
              <p className="text-text-light text-sm leading-relaxed">制度の有無ではなく、取得実績・復帰率・女性管理職比率・時短の運用実態を確認。求人票に出ない情報は、女性のキャリアに詳しいエージェント経由で聞くのが確実です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. リモート・成果評価の環境を優先する</h3>
              <p className="text-text-light text-sm leading-relaxed">エンジニアは成果が可視化されやすく、フルリモートやフレックスとも相性が良い職種。勤務時間ではなく成果で評価される環境なら、時短でも実力が認められ、長く働き続けられます。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #7c3a55" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong style={{ color: "#7c3a55" }}>まとめると</strong>――「今すぐ安定が必要なら無期転換＋登用」「待遇と環境を一気に変えたいなら正社員転職」。どちらの道でも、契約社員で積んだ技術経験が交渉力になります。自分の市場価値を一度客観的に評価してもらい、最適なルートを選びましょう。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>正社員転職を視野に入れるなら、技術を正当に評価してくれるIT特化型と、女性の働き方に配慮した女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーが、契約社員で積んだ経験を正社員ポジション向けに翻訳して提案してくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと年収交渉力に定評があり、契約社員から正社員への待遇引き上げ交渉でも頼りになります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。「正社員かつ両立しやすい環境」という条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec8 成功事例 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">正社員化の成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・社内登用で正社員へ）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">自社サービス企業の契約社員（PHP）/ 年収380万円・賞与なし</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">同社の正社員（登用試験合格）/ 年収500万円・賞与・退職金あり</p></div>
              </div>
              <p className="text-sm text-text-light">通算4年目に上司へ正社員希望を明確に伝え、担当機能の改修実績と障害削減を数値で整理。登用試験（小論文＋面接）に合格し、賞与・退職金を含む正社員待遇に。まず無期転換の申込権も確保したうえで挑んだのが安心材料になりました。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（20代後半・正社員転職を選択）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">受託開発の契約社員（Java）/ 年収360万円・登用実績ほぼなし</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SaaS企業の正社員バックエンド / 年収480万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">在籍企業に登用実績がないと分かり、無期転換を待たずに正社員転職へ切り替え。IT特化型エージェントで契約社員時代のプロジェクト規模・役割を職務経歴書に言語化し、産休育休実績のあるSaaS企業に内定。安定とリモートを同時に手に入れました。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec9" className="py-10">
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
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアのキャリアパス</h3><p className="text-sm text-text-light">長く働き続けるための進路設計</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすい企業の選び方</h3><p className="text-sm text-text-light">産休育休・復帰率で見極める</p></a>
            <a href="/articles/resume-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>職務経歴書の書き方ガイド</h3><p className="text-sm text-text-light">契約社員の経験を正社員転職で活かす</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">契約社員から、安定したキャリアへ</h2>
            <p className="text-white/90 mb-6">無期転換・登用・正社員転職――あなたに合った道を、エージェントへの無料相談から見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
