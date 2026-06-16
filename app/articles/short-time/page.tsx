import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニア 時短勤務で転職・継続するガイド｜制度・求人の探し方・年収への影響",
  description:
    "女性エンジニアが時短勤務でキャリアを続ける・時短で転職する方法を実データで解説。育児・介護休業法の短時間勤務制度（1日6時間）、2025年新設の育児時短就業給付金、時短可求人の探し方、年収・キャリアへの影響と対策、時短OK企業の見極め方、注意点まで女性視点でまとめました。",
  alternates: { canonical: "/articles/short-time/" },
  openGraph: {
    title: "女性エンジニア 時短勤務で転職・継続するガイド｜制度・求人の探し方・年収への影響",
    description:
      "育児・介護休業法の短時間勤務制度や育児時短就業給付金、時短可求人の探し方、年収・キャリアへの影響と対策、時短OK企業の見極め方を女性視点で実データ解説。",
    url: "https://women-engineer.com/articles/short-time/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニア 時短勤務で転職・継続するガイド｜制度・求人の探し方・年収への影響",
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
    "女性エンジニアが時短勤務でキャリアを続ける・時短で転職する方法を、制度・求人の探し方・年収への影響・企業の見極め方まで実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/short-time/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "エンジニアの時短勤務は子どもが何歳まで利用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "育児・介護休業法では、3歳に満たない子を養育する労働者が申し出れば、事業主は所定労働時間を原則1日6時間に短縮する短時間勤務制度を講じる義務があります。これは法律上の最低ラインで、企業によっては小学校就学前（6歳）や小学3年生まで時短を認める独自制度を設けています。さらに2025年10月施行の改正で、3歳から小学校就学前の子を持つ労働者向けに「柔軟な働き方を実現するための措置」（時短・テレワーク・フレックスなど5つから2つ以上）を選択させることが企業に義務付けられました。何歳まで時短可能かは企業差が大きいため、就業規則や求人票で必ず確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "時短勤務にすると年収はどのくらい下がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "多くの企業では時短勤務中の給与は働いた時間に比例（ノーワーク・ノーペイ）するため、8時間勤務から6時間勤務にすると基本給はおおむね25%程度下がります。ただし2025年4月に新設された育児時短就業給付金により、2歳未満の子を養育して時短勤務をし賃金が減った雇用保険被保険者は、時短中に支払われた賃金のおおむね10%が補填されます。また、時短は一時的な働き方であり、フルタイムに戻せば年収も戻ります。女性エンジニア（システムエンジニア）の平均年収は約497万円という調査もあり、時短期間も成果を残してスキルを落とさないことが、復帰後の年収回復の鍵です。",
      },
    },
    {
      "@type": "Question",
      name: "エンジニアはなぜ時短勤務と相性が良いのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "エンジニアは成果物（コード・担当機能・改善した処理速度など）が客観的に残るため、勤務時間の長さではなく成果で評価されやすい職種です。さらにリモートワークとの親和性が非常に高く、通勤時間をまるごと育児や生活に充てられるため、6時間勤務でも実質的な可処分時間が大きく増えます。タスクが機能単位で分割しやすく、限られた時間でも区切りよく担当を持てる点も、時短勤務に向いている理由です。",
      },
    },
    {
      "@type": "Question",
      name: "時短勤務だとマミートラックに乗ってキャリアが止まりませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "時短だからといって必ずキャリアが止まるわけではありませんが、対策は必要です。重要度の低い仕事ばかり任される「マミートラック」を避けるには、(1)時短でも責任ある機能・設計タスクを希望すると上司に明言する、(2)成果を数値や成果物で見える化して定期的に共有する、(3)クラウドや高需要言語など市場価値の高いスキルを時短中も少しずつ磨く、の3点が効果的です。今の会社で評価が頭打ちなら、時短前提でも裁量ある仕事を任せる企業へ転職するのも有力な選択肢です。",
      },
    },
    {
      "@type": "Question",
      name: "時短勤務OKの企業はどう見極めればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "求人票の「時短勤務可」という記載だけでなく、実態を確認することが大切です。チェックすべきは、(1)時短利用者が実際にいるか・利用率、(2)女性管理職や時短中の評価・昇給の実績、(3)フルリモートやフレックスの併用可否、(4)育休からの復帰率、(5)時短利用者がどんな職種・役割で働いているか、です。これらは求人票に載らないことが多いため、面接で質問するか、女性のキャリアに詳しい転職エージェント経由で内情を確認するのが確実です。なお時短やリモートを希望する場合は、選考のできるだけ早い段階で伝えるのが望ましいとされています。",
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
              { label: "時短勤務でエンジニアを続けるガイド" },
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
              女性エンジニア「時短勤務」で続ける・転職するガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                制度・求人の探し方・年収への影響と対策を実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 時短勤務とは（制度の基本）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. エンジニアが時短に向いている理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 時短可の求人の探し方（STEP）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 時短での年収・キャリアへの影響と対策</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 時短OK企業の見極め方</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 時短勤務の注意点と乗り越え方</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 時短転職の体験事例</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 時短勤務とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">時短勤務とは（制度の基本）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              時短勤務（短時間勤務制度）とは、育児や介護をしながら働き続けられるよう、1日の所定労働時間を短くして働く制度です。<strong>育児・介護休業法</strong>では、3歳に満たない子を養育する労働者が申し出た場合、事業主は所定労働時間を<strong>原則1日6時間</strong>に短縮する措置を講じる義務があります。「子育てか、仕事か」の二択を迫られないための、法律で守られた働き方です。
            </p>
            <p>
              押さえておきたいのが、近年の法改正で制度がさらに手厚くなっている点です。<strong>2025年4月</strong>には時短中の収入減を補う<strong>育児時短就業給付金</strong>が新設され、<strong>2025年10月</strong>からは3歳〜小学校就学前の子を持つ労働者向けに「柔軟な働き方を実現するための措置」が企業に義務化されました。エンジニアにとって追い風となる変化です。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>時短に関わる主な制度（2026年時点）</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#efe3d8" }}>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>制度</th>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>対象</th>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>内容</th>
                  </tr>
                </thead>
                <tbody className="text-text-light">
                  <tr>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>短時間勤務制度</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>3歳未満の子を養育する労働者</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>所定労働時間を原則1日6時間に短縮（企業の義務）</td>
                  </tr>
                  <tr style={{ backgroundColor: "#f0e7dd" }}>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>柔軟な働き方を実現するための措置<br /><span className="text-xs font-normal">（2025年10月施行）</span></td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>3歳〜小学校就学前の子を養育する労働者</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>時短・テレワーク・フレックスなど5つから企業が2つ以上を選択し提供</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>育児時短就業給付金<br /><span className="text-xs font-normal">（2025年4月新設）</span></td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2歳未満の子を養育する雇用保険被保険者</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>時短で賃金が減った場合、支払われた賃金のおおむね10%を補填</td>
                  </tr>
                  <tr style={{ backgroundColor: "#f0e7dd" }}>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>介護のための短時間勤務</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>要介護状態の家族を介護する労働者</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>利用開始から連続3年以上の期間で2回以上の時短措置</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-text-light leading-relaxed mt-4 text-sm">
              ※上記は法律上の最低ライン。企業によっては小学校就学前（6歳）や小学3年生まで時短を認める独自制度を設けている場合もあります。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 エンジニアが時短に向く理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">エンジニアが時短に向いている理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              数ある職種の中でも、エンジニアは時短勤務と特に相性が良い職種です。「時間が短いと戦力にならないのでは」という不安は、エンジニアの仕事の性質を知ると小さくなります。働いた時間ではなく、生み出した価値で勝負できるからです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 成果が可視化され時間で測られにくい</h3>
              <p className="text-text-light text-sm leading-relaxed">担当した機能・書いたコード・改善した処理速度などが客観的に残るため、「何時間いたか」ではなく「何を作ったか」で評価されやすい職種です。6時間でも区切りよく成果を出せます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. リモートワークとの親和性が極めて高い</h3>
              <p className="text-text-light text-sm leading-relaxed">在宅での開発が可能なため、通勤時間をまるごと育児や生活に充てられます。6時間勤務＋フルリモートなら、実質の可処分時間はフルタイム出社より大きく増えるケースも珍しくありません。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. タスクが分割しやすく区切りやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">開発タスクはチケットや機能単位で分割しやすく、「ここまで」と区切って引き継ぎやすいのが特徴。お迎えの時間で切り上げても、業務が中途半端になりにくい働き方ができます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 人材不足で交渉余地が大きい</h3>
              <p className="text-text-light text-sm leading-relaxed">IT人材は慢性的に不足しており、企業は優秀なエンジニアを手放したくありません。だからこそ時短やリモートといった働き方の条件を交渉しやすく、女性が条件を通せる余地が大きい職種です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 求人の探し方 STEP */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">時短可の求人の探し方（STEP）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「時短勤務OK」のエンジニア求人は確かに存在しますが、フルタイム求人に比べると数が限られます。やみくもに探すと消耗するため、次の順序で進めると効率的に良い求人にたどり着けます。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "希望条件を「数字」で整理する", "勤務時間（例: 9〜16時の6時間）・出社頻度（フルリモート/週1出社）・年収の下限・お迎え時刻などを具体的な数字で書き出します。条件が曖昧だと求人を絞り込めません。"],
              ["STEP2", "条件で絞れる求人サイト・特化サービスを使う", "「女の転職type」など時短勤務OKのエンジニア求人を条件で絞れるサービスや、IT特化の転職サイトを併用。『時短』『リモート』『ママ歓迎』などのキーワードで検索します。"],
              ["STEP3", "女性のキャリアに強いエージェントに登録する", "求人票に出ない『時短利用者の実態』『時短中の評価・昇給』を知るには、内情に詳しいエージェントが近道。type女性の転職エージェントなど女性特化型と、レバテック・GeeklyなどIT特化型を併用します。"],
              ["STEP4", "希望は選考の早い段階で必ず伝える", "時短やリモートを希望するなら、書類提出時など選考のできるだけ早い段階で会社に伝えるのが望ましいとされています。後出しはミスマッチや内定取り消しの原因になります。"],
              ["STEP5", "面接で『成果で評価する文化か』を確認する", "時短希望者は『限られた時間で成果を出せるか』を見られます。逆にこちらも、時短利用者がどんな役割で働いているか、評価が時間ではなく成果ベースかを面接で確認しましょう。"],
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

      {/* sec4 年収・キャリアへの影響と対策 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">時短での年収・キャリアへの影響と対策</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              時短勤務を選ぶうえで一番気になるのが、年収とキャリアへの影響です。事実から目を背けず、そのうえで具体的な対策を打つことが、長くキャリアを続けるコツです。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>年収はどのくらい変わる？（8時間→6時間の例）</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#efe3d8" }}>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>内容</th>
                  </tr>
                </thead>
                <tbody className="text-text-light">
                  <tr>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>基本給</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>多くの企業は時間に比例（ノーワーク・ノーペイ）。6時間勤務なら<strong>おおむね25%減</strong>が目安</td>
                  </tr>
                  <tr style={{ backgroundColor: "#f0e7dd" }}>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>育児時短就業給付金</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2歳未満の子を養育し賃金が9割以下に減った場合、支払われた賃金の<strong>約10%を補填</strong>（2025年4月〜）</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>賞与・評価</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>企業により減額対象になる場合あり。成果ベースの企業ほど影響が小さい</td>
                  </tr>
                  <tr style={{ backgroundColor: "#f0e7dd" }}>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>復帰後</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>時短は一時的な働き方。フルタイムに戻せば年収も戻る。スキルを落とさないことが回復の鍵</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-text-light leading-relaxed mt-4 text-sm">
              ※女性システムエンジニアの平均年収は約497万円（男性は約584万円）という調査もあり、もともとの男女差を埋めるためにも、時短期間に市場価値を落とさない工夫が重要です。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>マミートラックを避ける3つの対策</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>裁量を手放さない</strong>：時短でも責任ある機能・設計タスクを希望すると上司に明言する</li>
              <li>② <strong>成果を見える化する</strong>：担当機能・改善数値・コードを定期的に共有し、時間ではなく成果で語る</li>
              <li>③ <strong>スキルを磨き続ける</strong>：クラウド（AWS等）や高需要言語など、市場価値の高いスキルを少しずつ積み上げる</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 時短OK企業の見極め方 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">時短OK企業の見極め方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              求人票に「時短勤務可」と書いてあっても、実態が伴わない企業は残念ながら存在します。「制度はあるが誰も使っていない」「時短にすると評価が下がる」では本末転倒です。次のポイントを確認して、本当に時短で長く働ける会社かを見極めましょう。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>確認したいチェックポイント</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>時短利用者が実際にいるか・利用率</strong>。制度の有無ではなく「使われているか」を確認</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>時短中の評価・昇給の実績</strong>。時短利用者が昇進・昇給した例があるか</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>女性管理職の比率</strong>。ロールモデルがいる組織は時短後のキャリアも描きやすい</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>フルリモート・フレックスの併用可否</strong>。時短＋柔軟な勤務地・時間で負担が大きく変わる</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>育休からの復帰率</strong>。復帰率が高い＝両立しやすい環境が整っている目安</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>時短利用者の職種・役割</strong>。サポート業務に偏らず、開発・設計の主力として働けているか</span></li>
            </ul>
          </div>
          <div className="rounded-xl p-5 mt-6" style={{ backgroundColor: "#efe3d8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              これらの多くは求人票には載りません。面接で直接質問するか、企業の内情に詳しい<strong>女性特化型の転職エージェント</strong>経由で確認するのが確実です。聞きにくい『時短中の評価実態』も、エージェントが代わりに探ってくれます。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 注意点と乗り越え方 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">時短勤務の注意点と乗り越え方</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              時短勤務は心強い制度ですが、知らずに使うと思わぬ落とし穴にはまることもあります。事前に注意点を知り、対策をセットで持っておきましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-1">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>注意1：業務量が時短に見合っていない</h3>
              <p className="text-text-light text-sm leading-relaxed">勤務時間は減ったのに、任される業務量がフルタイムのままだと結局残業や持ち帰りに。<strong>乗り越え方</strong>＝着手前にタスク量を上司とすり合わせ、「6時間で終わる範囲」を合意しておく。優先度の低いタスクは引き継ぐ前提で。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>注意2：リモートで働きすぎてしまう</h3>
              <p className="text-text-light text-sm leading-relaxed">いつでも仕事ができる在宅環境は、逆に「土日や夜中まで働いてしまう」リスクがあります。<strong>乗り越え方</strong>＝作業終了時刻を明確に決め、終業後は通知をオフにするなどのセルフマネジメントを徹底する。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>注意3：評価軸が時間のままの会社だと不利</h3>
              <p className="text-text-light text-sm leading-relaxed">「長く居る人＝頑張っている」という文化の会社では、時短だと評価で損をしがち。<strong>乗り越え方</strong>＝成果を数値・成果物で見える化して共有する。それでも報われないなら、成果ベースで評価する企業への転職を検討する。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>注意4：周囲への遠慮で抱え込む</h3>
              <p className="text-text-light text-sm leading-relaxed">「早く帰って申し訳ない」と抱え込むと、心身ともに消耗します。<strong>乗り越え方</strong>＝時短は法律で守られた正当な権利。チームでの分担・引き継ぎを前提に、ドキュメント化や非同期コミュニケーションで連携を整える。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>時短可の求人は数が限られるため、技術を正しく評価してもらえるIT特化型と、働き方の条件で絞り込める女性特化型を併用するのが効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーが、時短でも担える役割や成果ベースで評価する企業を提案してくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。時短で年収が下がりやすいぶん、復帰後を見据えた年収交渉やキャリア設計の相談に向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">時短・リモートなど働き方の条件で求人を絞り込め、求人票に出ない『時短利用者の実態』『復帰後の評価』まで踏み込んで確認してくれます。女性のキャリア継続を重視する人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">時短求人は「探し方」と「内情の確認」で差がつく</p>
            <p className="text-sm text-text-light mb-4">複数登録して、働き方の希望を理解してくれるアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec8 体験事例 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">時短転職の体験事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・SE→自社開発バックエンド）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SIerのSE / 時短制度はあるが利用者ゼロ・出社必須</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">自社開発企業のバックエンド / 9〜16時の時短＋フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">復帰後、時短利用者がいない職場で肩身が狭く転職を決意。女性特化エージェントで『時短利用率』『時短中の昇給実績』を確認し、成果ベースで評価する自社開発企業へ。基本給は約2割下がったものの、育児時短就業給付金とフルリモートで生活はむしろ安定し、設計タスクも任され続けています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（30代後半・フロントエンド・転職せず社内で時短継続）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">課題</p><p className="text-sm font-bold">時短にしたら重要度の低い改修ばかり任されマミートラック化</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>結果</p><p className="text-sm font-bold">裁量ある機能開発に復帰 / フルタイム復帰後に昇給</p></div>
              </div>
              <p className="text-sm text-text-light">上司に「時短でも責任ある機能を担当したい」と明言し、担当機能の改善数値を毎月共有して成果を見える化。時短中もReact/TypeScriptのスキルを磨き続けた結果、子の入園を機にフルタイムへ戻すと同時に昇給。転職せず社内でキャリアを立て直した事例です。</p>
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
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/work-life-balance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ワークライフバランスの実現ガイド</h3><p className="text-sm text-text-light">両立しやすい働き方と企業選び</p></a>
            <a href="/articles/mama-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</h3><p className="text-sm text-text-light">育児と開発を両立するコツ</p></a>
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リモートワーク求人の探し方</h3><p className="text-sm text-text-light">フルリモートで時短を活かす</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすい企業の見極め方</h3><p className="text-sm text-text-light">制度の実態を見抜くポイント</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">時短でも、キャリアはあきらめない</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。時短・リモートの希望を理解してくれるアドバイザーと、あなたに合った働き方を見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
