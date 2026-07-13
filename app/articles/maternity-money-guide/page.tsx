import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "産休・育休・時短勤務のお金ガイド｜出産手当金・育児休業給付金の計算式と手取りの実際【2026年】",
  description:
    "産休・育休・時短勤務中の収入がどう決まるかを公式情報だけで整理。出産手当金（標準報酬月額の平均÷30×2/3）、育児休業給付金（休業開始時賃金の67%・181日目以降50%・非課税）、2025年4月開始の出生後休業支援給付金（+13%で最大28日間80%）と育児時短就業給付金（賃金の10%）の計算の基礎を、女性エンジニアの転職・年収交渉の前提知識として解説します。",
  alternates: { canonical: "/articles/maternity-money-guide/" },
  openGraph: {
    title: "産休・育休・時短勤務のお金ガイド｜出産手当金・育児休業給付金の計算式と手取りの実際【2026年】",
    description:
      "産休中の出産手当金、育休中の育児休業給付金（67%→50%・非課税・社会保険料免除）、2025年4月開始の出生後休業支援給付金・育児時短就業給付金まで、収入の決まり方を公式の計算式で整理。転職タイミングと年収交渉の前提知識に。",
    url: "https://women-engineer.com/articles/maternity-money-guide/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "産休・育休・時短勤務のお金ガイド｜出産手当金・育児休業給付金の計算式と手取りの実際【2026年】",
  datePublished: "2026-07-13",
  dateModified: "2026-07-13",
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
    "産休・育休・時短勤務中の収入の決まり方を、出産手当金・育児休業給付金・出生後休業支援給付金・育児時短就業給付金の公式計算式で整理。女性エンジニアの転職タイミング・年収交渉の前提知識として解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/maternity-money-guide/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "育児休業給付金に税金や社会保険料はかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "育児休業等給付は非課税所得のため、所得税・住民税の課税対象になりません。また、産前産後休業中・育児休業中は、申出により健康保険・厚生年金保険の保険料が本人負担分・事業主負担分とも免除され、免除期間は将来の年金額の計算上、保険料を納めた期間として扱われます。勤務先から給与が支給されなければ雇用保険料の負担もありません。このため、額面の給付率は67%でも、手取りベースでは休業前賃金の約8割相当になると厚生労働省が説明しています（出典: 厚生労働省「Q&A～育児休業等給付～」・日本年金機構、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "転職した直後に産休・育休に入っても給付はもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "育児休業給付金には「休業開始日前2年間に、賃金支払基礎日数11日以上の月が12か月以上あること」という要件があり、転職直後は満たせない場合があります。前職の雇用保険加入期間の扱いには細かなルールがあるため、必ず事前にハローワークで確認してください。また、給付以前に育児休業の取得自体についても、入社1年未満の労働者を労使協定で対象外にできる仕組みがあり、会社によって扱いが異なります。妊娠・出産と転職の順番の考え方は、姉妹記事「転職とライフイベントのタイミング設計」で詳しく解説しています。",
      },
    },
    {
      "@type": "Question",
      name: "育児休業給付金はいつまでもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "原則として子が1歳になる日（誕生日の前日）の前日までの育児休業期間が対象です。パパ・ママ育休プラス制度を利用する場合は1歳2か月まで、保育所に入所できない等の要件を満たす場合は1歳6か月まで、さらに2歳まで延長できる場合があります。延長には要件と手続きがあるため、詳細はハローワークで確認してください（出典: 厚生労働省「Q&A～育児休業等給付～」、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "時短勤務にすると将来の年金は減りますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "時短勤務で給与が下がると標準報酬月額が下がり、そのままでは将来の厚生年金額の計算にも影響します。ただし「養育期間の従前標準報酬月額のみなし措置」という救済制度があり、3歳未満の子を養育していて標準報酬月額が養育開始月の前月より下がった場合、申出により、年金額の計算上は従前（低下前）の標準報酬月額とみなされます。申出書は原則として勤務先（事業主）を経由して提出します（出典: 日本年金機構「養育期間の従前標準報酬月額のみなし措置」、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "育児休業給付金の上限額はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "育児休業等給付の給付額には上限（支給限度額）があり、休業前の賃金が高い場合は「賃金×67%」の計算どおりには受け取れません。支給限度額は毎年8月1日に改定されるため、本記事では具体額を記載していません。最新の上限額は厚生労働省・ハローワークの公式情報で確認し、自分のケースの見込額はハローワークまたは勤務先の担当部署に確認してください（出典: 厚生労働省「Q&A～育児休業等給付～」、2026年7月参照）。",
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
              { label: "産休・育休・時短のお金ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              ライフイベントとお金
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              産休・育休・時短勤務のお金ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                出産手当金・育児休業給付金の計算式と手取りの実際【女性エンジニア版】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月13日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>先に結論：3つの即答</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>収入は3段階で切り替わる。</strong>産前産後休業中は健康保険から「出産手当金」（賃金ベースの約2/3）、育児休業中は雇用保険から「育児休業給付金」（休業開始時賃金の67%、181日目以降50%）、時短復帰後は「給与＋場合により育児時短就業給付金（賃金の10%を限度）」です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>手取りベースでは額面の率より高くなる。</strong>育児休業等給付は非課税で、産休・育休中は申出により健康保険・厚生年金の保険料が免除されます。額面67%でも手取りでは約8割相当、2025年4月開始の出生後休業支援給付金の要件を満たせば、最大28日間は80%＝手取り10割相当です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>給付は「休業開始前の賃金」で決まる。</strong>だからこそ、転職のタイミングと年収交渉は出産前から設計する価値があります。転職直後の育休は要件を満たせない場合もあるため、<a href="/articles/career-lifeevent-timing/" className="underline" style={{ color: "#7c3a55" }}>タイミング設計の記事</a>とセットで読んでください。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://www.kyoukaikenpo.or.jp/benefit/childbirth/001/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>全国健康保険協会「出産手当金について」</a>／<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000158500.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省「Q&amp;A～育児休業等給付～」</a>（いずれも2026年7月参照）。金額・料率は改定されるため、最新情報は必ず公式で確認してください。
            </p>
          </div>
          <div className="rounded-xl border p-4 mt-4" style={{ borderColor: "#d9c7b8", backgroundColor: "#fffaf4" }}>
            <p className="text-xs text-text-light leading-relaxed">
              本記事は公的制度の概要を公式情報に基づいて整理した一般的な解説であり、個別の税・社会保険・給付額の助言は行いません。支給の可否や具体的な金額は、勤務先の担当部署・加入している健康保険の保険者（協会けんぽ・健康保険組合など）・ハローワークで必ず確認してください。
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 全体マップ：産休→育休→時短復帰で収入はこう変わる</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 出産手当金（健康保険）：支給期間と計算式</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 育児休業給付金（雇用保険）：67%→50%と「手取りの実際」</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 2025年4月開始の2つの給付（出生後休業支援・育児時短就業）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 時短勤務の年収への影響と年金の救済制度</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. シミュレーション：額面月30万円の場合（目安）</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 転職の意思決定にどうつながるか</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 全体マップ */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">全体マップ：産休→育休→時短復帰で収入はこう変わる</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              産休・育休・時短の期間中、収入は「給与」ではなく<strong>公的な給付</strong>に置き換わります。どの給付がいつ・どの制度から・どんな計算式で支払われるかは法令で決まっており、会社の裁量ではありません。まずこの全体像を時系列で押さえると、個々の計算式が理解しやすくなります。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>時期</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>主な収入</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>支給元の制度</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>水準の目安</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 bg-white font-bold" style={{ borderColor: "#d9c7b8" }}>産前産後休業<br />（出産日以前42日〜出産翌日以後56日）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>出産手当金</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>健康保険</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>標準報酬月額ベースで日額の約2/3</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>育児休業<br />（原則子が1歳まで・延長あり）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>育児休業給付金</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>雇用保険</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>休業開始時賃金の67%（181日目以降50%）・非課税</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 bg-white font-bold" style={{ borderColor: "#d9c7b8" }}>子の出生直後<br />（要件を満たす場合のみ）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>＋出生後休業支援給付金</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>雇用保険（2025年4月開始）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>13%上乗せで最大28日間80%（手取り10割相当）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>時短で復帰<br />（2歳未満の子を養育）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>給与＋育児時短就業給付金</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>給与＋雇用保険（2025年4月開始）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>時短後の給与＋各月の賃金の10%を限度に支給</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://www.kyoukaikenpo.or.jp/benefit/childbirth/001/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>全国健康保険協会「出産手当金について」</a>／<a href="https://www.hellowork.mhlw.go.jp/insurance/insurance_childcareleave.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>ハローワークインターネットサービス「育児休業等給付」</a>（いずれも2026年7月参照）。育児休業等給付は「出生時育児休業給付金・育児休業給付金・出生後休業支援給付金・育児時短就業給付金」の4つで構成されます。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              エンジニア職は産育休の取得実績が比較的公開されやすい業界ですが（<a href="/articles/maternity-leave-rate/" className="underline" style={{ color: "#7c3a55" }}>産休・育休取得率の調べ方</a>参照）、「取れるか」と「その間いくら入るか」は別の話です。以下、各給付の計算式を公式情報どおりに確認していきます。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 出産手当金 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出産手当金（健康保険）：支給期間と計算式</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              出産手当金は、<strong>健康保険の被保険者</strong>が出産のため会社を休み、その間に給与の支払いを受けなかった場合に支給されます。支給されるのは、<strong>出産の日（出産が予定日より後になった場合は出産予定日）以前42日（多胎妊娠の場合98日）から、出産の翌日以後56日目までの範囲内</strong>で会社を休んだ期間です。出産が予定日より遅れた場合は、その遅れた期間についても支給されます（出典: 全国健康保険協会、2026年7月参照）。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>1日あたりの支給額（支給開始日以前の被保険者期間が12か月以上ある場合）</h3>
            <p className="rounded-lg p-4 text-sm font-bold leading-relaxed" style={{ backgroundColor: "#efe3d8", color: "#7c3a55" }}>
              支給開始日以前12か月間の各月の標準報酬月額を平均した額 ÷ 30日 × 2/3
            </p>
            <ul className="space-y-2 text-sm text-text-light mt-4">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>標準報酬月額</strong>は、社会保険料の計算に使われる区分値で、給与明細の保険料から逆引きできるほか、勤務先の担当部署で確認できます。残業代等を含む報酬をもとに決まるため、「基本給」とは一致しません。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#8226;</span><span>支給開始日以前の被保険者期間が12か月に満たない場合は、別の計算方法が定められています（詳細は保険者の公式ページで確認してください）。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#8226;</span><span>休んだ期間に給与の支払いがあっても、その日額が出産手当金の日額より少ない場合は<strong>差額が支給</strong>されます。</span></li>
            </ul>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://www.kyoukaikenpo.or.jp/benefit/childbirth/001/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>全国健康保険協会「出産手当金について」</a>（2026年7月参照）。健康保険組合に加入している場合は付加給付など独自の上乗せがあることもあるため、自分の保険者（保険証・マイナポータル等で確認できます）の案内を必ず確認してください。
          </p>
        </div>
      </section>

      {/* sec3 育児休業給付金 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育児休業給付金（雇用保険）：67%→50%と「手取りの実際」</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              産後休業が終わると、収入源は健康保険の出産手当金から<strong>雇用保険の育児休業給付金</strong>に切り替わります。支給要件の基本は「<strong>育児休業を開始した日前2年間に、賃金支払基礎日数11日以上の月が12か月以上あること</strong>」。支給対象は原則、子が1歳になる日（誕生日の前日）の前日までの休業期間で、保育所に入所できない等の場合は1歳6か月・2歳までの延長制度があります（出典: 厚生労働省「Q&amp;A～育児休業等給付～」、2026年7月参照）。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>支給額の計算式</h3>
            <p className="rounded-lg p-4 text-sm font-bold leading-relaxed" style={{ backgroundColor: "#efe3d8", color: "#7c3a55" }}>
              休業開始時賃金日額 × 支給日数 × 67%（育児休業の開始から181日目以降は50%）
            </p>
            <ul className="space-y-2 text-sm text-text-light mt-4">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>休業開始時賃金日額</strong>＝原則として、育児休業開始前6か月間の総支給額（保険料等が控除される前の額。賞与は除く）÷180。<strong>「額面ベース・残業代込み・直近6か月」</strong>で決まるのがポイントです。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#8226;</span><span>給付額には<strong>上限（支給限度額）</strong>があります。上限額は改定されるため本記事では記載しません。最新額は公式で確認してください。</span></li>
            </ul>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>「67%」を額面どおりに受け取らない：手取りベースでは約8割相当</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>非課税：</strong>育児休業等給付は非課税所得のため、所得税・住民税の課税対象になりません。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>社会保険料の免除：</strong>産前産後休業中・育児休業中は、申出により健康保険・厚生年金保険の保険料が本人負担分・事業主負担分とも免除されます。しかも免除期間は、将来の年金額の計算上「保険料を納めた期間」として扱われます。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>雇用保険料：</strong>勤務先から給与が支給されなければ雇用保険料の負担もありません。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span>この結果、額面の給付率67%でも<strong>手取りベースでは休業前賃金の約8割相当</strong>になると厚生労働省が説明しています。「67%に減る」ではなく「手取り8割程度」で見積もるのが実態に近い計算です。</span></li>
            </ul>
            <p className="text-xs text-text-light mt-3">
              出典: <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000158500.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省「Q&amp;A～育児休業等給付～」</a>／<a href="https://www.nenkin.go.jp/service/kounen/hokenryo/menjo/sankyu-menjo/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>日本年金機構「産前産後休業期間中の保険料免除」</a>（いずれも2026年7月参照）
            </p>
          </div>
        </div>
      </section>

      {/* sec4 2025年4月開始の2つの給付 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">2025年4月開始の2つの給付（出生後休業支援・育児時短就業）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              2025年（令和7年）4月1日から、育児休業等給付に2つの給付が加わりました。比較的新しい制度のため、勤務先の説明資料が更新されていないこともあります。知らないまま設計すると数十万円単位で見積もりがずれる可能性があるので、必ず押さえておきましょう。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>出生後休業支援給付金：最大28日間「80%＝手取り10割相当」</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>内容：</strong>子の出生直後の一定期間に<strong>両親がともに14日以上の育児休業</strong>を取得した場合（配偶者が就労していない場合などは本人のみで可）、出生時育児休業給付金または育児休業給付金に<strong>13%を上乗せ</strong>して最大28日間支給。計算式は「休業開始時賃金日額×支給日数（上限28日）×13%」です。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>効果：</strong>67%＋13%＝<strong>80%</strong>。非課税・社会保険料免除と合わせて、この期間は<strong>手取り10割相当</strong>になると厚生労働省が説明しています。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>対象期間：</strong>本人が産後休業をした場合は「子の出生日から16週間を経過する日の翌日まで」、産後休業をしなかった場合は「8週間を経過する日の翌日まで」の育児休業が対象です。母親は産後休業がある分、対象期間が長く設定されています。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>実務上のポイント：</strong>「夫婦とも14日以上」が原則要件のため、<strong>パートナーの育休取得計画が自分の給付額に直結</strong>します。妊娠がわかったら早めに夫婦で取得計画をすり合わせるのが得策です。細かな例外要件は公式の簡易診断・ハローワークで確認してください。</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>育児時短就業給付金：時短勤務中の賃金に10%を上乗せ</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>内容：</strong><strong>2歳未満の子を養育するために所定労働時間を短縮して就業</strong>する雇用保険の被保険者に対し、時短勤務中に支払われた<strong>各月の賃金の10%を限度</strong>に支給されます。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>条件：</strong>各月の賃金が、時短開始時の賃金水準（原則として時短開始前6か月の賃金から算定した賃金日額×30）より低下していることが前提です。支給限度額があり、毎年8月1日に改定されます。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>実務上のポイント：</strong>「時短にすると収入が下がる」の下がり幅を1割分緩和してくれる制度です。詳細な要件・手続きはハローワークの公式ページで確認してください。</span></li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://hoken.hellowork.mhlw.go.jp/static/ikuji_shusshogo_shien.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>ハローワークインターネットサービス「出生後休業支援給付金」</a>／<a href="https://hoken.hellowork.mhlw.go.jp/static/ikuji_jitan.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>同「育児時短就業給付金」</a>／<a href="https://www.mhlw.go.jp/content/11600000/001461102.pdf" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省リーフレット「育児休業等給付の内容と支給申請手続」（2025年8月1日改訂版）</a>（いずれも2026年7月参照）
          </p>
        </div>
      </section>

      {/* sec5 時短勤務の年収影響 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">時短勤務の年収への影響と年金の救済制度</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>1. 給与は「労働時間比例の減額」が一般的（ただし会社による）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                時短勤務中の給与について法律上の一律ルールはなく、多くの会社では働かなかった時間分を減額する（例：8時間→6時間勤務なら基本給の6/8）運用が一般的です。ただし<strong>減額の対象（基本給のみか、各種手当も含むか）・賞与や評価への反映は会社の規定次第</strong>です。就業規則・賃金規程を確認し、不明点は人事に確認してください。転職先を選ぶ段階でここを見極める方法は<a href="/articles/company-check-guide/" className="underline" style={{ color: "#7c3a55" }}>制度で会社を見抜くチェックガイド</a>で解説しています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>2. 給与が下がると社会保険の「標準報酬月額」も下がり得る</h3>
              <p className="text-sm text-text-light leading-relaxed">
                時短で報酬が下がると、手続きを経て標準報酬月額が下がることがあります。毎月の保険料負担は軽くなる一方、標準報酬月額は<strong>将来の厚生年金額や、次の出産時の出産手当金の計算ベース</strong>でもあるため、下がったままでは長期の受取りに影響します。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>3. 年金には救済制度がある：「養育期間の従前標準報酬月額のみなし措置」</h3>
              <p className="text-sm text-text-light leading-relaxed">
                <strong>3歳未満の子を養育</strong>していて標準報酬月額が養育開始月の前月より下がった場合、申出により、<strong>年金額の計算上は従前（低下前）の標準報酬月額とみなされます</strong>。つまり「保険料の負担は下がった報酬ベースに、将来の年金は下がる前のベースに」できる制度です。対象期間は養育開始月から子が3歳に達する月の前月まで。申出書は原則として勤務先（事業主）経由で提出します（退職後は本人提出も可）。自動適用ではなく<strong>申出が必要</strong>な点に注意してください（出典: 日本年金機構、2026年7月参照）。
              </p>
            </div>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/menjo/20150120.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>日本年金機構「養育期間の従前標準報酬月額のみなし措置」</a>（2026年7月参照）。時短中の実際の収入と両立の工夫は<a href="/articles/mama-engineer/" className="underline" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</a>もあわせてどうぞ。
          </p>
        </div>
      </section>

      {/* sec6 シミュレーション */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">シミュレーション：額面月30万円の場合（目安）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              公式の計算式を「額面月30万円」に当てはめた<strong>概算の目安</strong>です。前提：標準報酬月額30万円、育児休業開始前6か月の総支給額180万円（月30万円×6）、賞与・残業変動・端数処理・上限額は考慮しません。<strong>実際の支給額は標準報酬月額の区分・賃金の変動・上限額・端数処理で必ず変わります。</strong>自分の金額は勤務先・保険者・ハローワークで確認してください。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>期間</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>計算式の当てはめ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>目安額</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 bg-white font-bold" style={{ borderColor: "#d9c7b8" }}>出産手当金（1日あたり）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>30万円 ÷ 30日 × 2/3</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>約6,667円／日</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>出産手当金（産前42日＋産後56日＝98日取得の場合）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約6,667円 × 98日</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約65万円</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 bg-white font-bold" style={{ borderColor: "#d9c7b8" }}>育児休業給付金（開始〜180日）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>賃金日額1万円（180万円÷180）× 30日 × 67%</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>約20.1万円／30日</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>＋出生後休業支援給付金（要件を満たす28日間）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1万円 × 28日 × 13%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>＋約3.6万円（この期間は80%）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 bg-white font-bold" style={{ borderColor: "#d9c7b8" }}>育児休業給付金（181日目以降）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>1万円 × 30日 × 50%</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>約15万円／30日</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>時短復帰後（例：賃金が月24万円に低下・2歳未満）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>給与24万円 ＋ 育児時短就業給付金（24万円 × 10%を限度）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約24万円＋最大約2.4万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>この表を読むときの注意</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span>あくまで<strong>公式計算式の当てはめによる概算</strong>です。各給付には上限額・下限額や端数処理があり、ここでは反映していません。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span>育児休業給付金は非課税・社会保険料免除のため、給与と単純比較すると<strong>手取りベースの実質は表の額面比率より高く</strong>なります（最初の180日は手取り約8割相当）。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span>賃金日額は「直近6か月の総支給額÷180」なので、残業代の多寡や休業に入る直前の働き方でも変わります。</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec7 転職の意思決定への接続 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職の意思決定にどうつながるか</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              ここまでの計算式には、転職の意思決定に直結する共通構造があります。<strong>どの給付も「休業（時短）開始前の賃金・標準報酬月額」をベースに決まる</strong>という点です。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>1. 交渉で上げた年収は、給付額にもそのまま効く</h3>
              <p className="text-sm text-text-light leading-relaxed">
                育児休業給付金のベースは「休業開始前6か月の総支給額」、出産手当金のベースは「標準報酬月額」。つまり転職や交渉で額面を上げておくことは、<strong>産育休中の給付額を底上げすること</strong>でもあります。年収交渉の進め方は<a href="/articles/negotiation/" className="underline" style={{ color: "#7c3a55" }}>年収交渉ガイド</a>、相場の把握は<a href="/articles/salary/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアの年収データ</a>を参照してください。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>2. 転職直後の産休・育休は「要件」と「ベース賃金」の両方に注意</h3>
              <p className="text-sm text-text-light leading-relaxed">
                育児休業給付金には「休業開始前2年間に賃金支払基礎日数11日以上の月が12か月以上」という要件があり、転職直後は満たせないケースがあります（前職の期間の扱いには細かなルールがあるためハローワークで要確認）。また、転職で年収が上がった直後に休業に入れば給付ベースは前職より上がり、逆に下がる転職なら給付も下がります。さらに、育児休業の取得自体を入社1年未満の労働者について労使協定で対象外にできる仕組みもあり、会社ごとの確認が必須です。「いつ転職し、いつ妊娠・出産を迎えるか」の順番の設計は、姉妹記事<a href="/articles/career-lifeevent-timing/" className="underline" style={{ color: "#7c3a55" }}>転職とライフイベントのタイミング設計</a>で詳しく扱っています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>3. 「復帰後の年収」まで含めて交渉・会社選びをする</h3>
              <p className="text-sm text-text-light leading-relaxed">
                時短勤務の減額ルール・賞与や評価への反映・リモート可否は会社によって大きく違い、復帰後数年の実質年収を左右します。オファー面談で確認すべき点は<a href="/articles/company-check-guide/" className="underline" style={{ color: "#7c3a55" }}>制度で会社を見抜くチェックガイド</a>を、産育休と両立しやすいエージェント選びは<a href="/diagnosis/" className="underline" style={{ color: "#7c3a55" }}>8つの質問でわかる無料エージェント診断</a>を活用してください。学び直しを挟んで復帰する選択肢は<a href="/articles/reskilling-leave/" className="underline" style={{ color: "#7c3a55" }}>リスキリングでエンジニアを目指す</a>も参考になります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl border overflow-hidden bg-white" style={{ borderColor: "#d9c7b8" }}>
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
            <a href="/articles/career-lifeevent-timing/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>転職とライフイベントのタイミング設計</h3><p className="text-sm text-text-light">妊娠・出産と転職の順番を制度要件から考える姉妹記事</p></a>
            <a href="/articles/company-check-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>制度で会社を見抜くチェックガイド</h3><p className="text-sm text-text-light">両立しやすい会社を入社前に見極める姉妹記事</p></a>
            <a href="/articles/negotiation/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>年収交渉ガイド</h3><p className="text-sm text-text-light">給付のベースになる「休業前賃金」を上げる交渉術</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収データ</h3><p className="text-sm text-text-light">交渉の前提になる相場を実データで確認</p></a>
            <a href="/articles/mama-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</h3><p className="text-sm text-text-light">復帰後の時短・リモート両立の実際</p></a>
            <a href="/articles/maternity-leave-rate/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>産休・育休取得率の調べ方</h3><p className="text-sm text-text-light">「取れるか」を公開データで確認する方法</p></a>
            <a href="/articles/reskilling-leave/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リスキリングでエンジニアを目指す</h3><p className="text-sm text-text-light">休業・復帰の間に使える学び直し支援</p></a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 全国健康保険協会（協会けんぽ）「出産手当金について」 <a href="https://www.kyoukaikenpo.or.jp/benefit/childbirth/001/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.kyoukaikenpo.or.jp/benefit/childbirth/001/index.html</a>（2026年7月参照）</li>
            <li>出典: ハローワークインターネットサービス「育児休業等給付について」 <a href="https://www.hellowork.mhlw.go.jp/insurance/insurance_childcareleave.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.hellowork.mhlw.go.jp/insurance/insurance_childcareleave.html</a>（2026年7月参照）</li>
            <li>出典: 厚生労働省「Q&amp;A～育児休業等給付～」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000158500.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000158500.html</a>（2026年7月参照）</li>
            <li>出典: ハローワークインターネットサービス「出生後休業支援給付金」 <a href="https://hoken.hellowork.mhlw.go.jp/static/ikuji_shusshogo_shien.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://hoken.hellowork.mhlw.go.jp/static/ikuji_shusshogo_shien.html</a>（2026年7月参照）</li>
            <li>出典: ハローワークインターネットサービス「育児時短就業給付金」 <a href="https://hoken.hellowork.mhlw.go.jp/static/ikuji_jitan.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://hoken.hellowork.mhlw.go.jp/static/ikuji_jitan.html</a>（2026年7月参照）</li>
            <li>出典: 厚生労働省リーフレット「育児休業等給付の内容と支給申請手続」（2025年8月1日改訂版） <a href="https://www.mhlw.go.jp/content/11600000/001461102.pdf" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/content/11600000/001461102.pdf</a>（2026年7月参照）</li>
            <li>出典: 日本年金機構「養育期間の従前標準報酬月額のみなし措置」 <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/menjo/20150120.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.nenkin.go.jp/service/kounen/hokenryo/menjo/20150120.html</a>（2026年7月参照）</li>
            <li>出典: 日本年金機構「産前産後休業期間中の保険料免除」 <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/menjo/sankyu-menjo/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.nenkin.go.jp/service/kounen/hokenryo/menjo/sankyu-menjo/index.html</a>（2026年7月参照）</li>
          </ul>
          <p className="text-xs text-text-light mt-4">※本記事の計算式・給付率・要件は2026年7月時点で公式ページを確認した内容に基づきます。金額・料率・上限額は改定されるため、最新情報は必ず厚生労働省・ハローワーク・保険者・日本年金機構の公式情報で確認してください。個別の支給可否・金額の判定は、勤務先の担当部署・加入する健康保険の保険者・ハローワークにお問い合わせください。</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">給付のベースは「休業前の年収」。だから今の一歩が効きます</h2>
            <p className="text-white/90 mb-6">産育休中の給付額は休業開始前の賃金で決まります。ライフイベントの前にキャリアと年収を整えたい方は、産育休の実績や両立支援に詳しいエージェントに無料相談してみましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
