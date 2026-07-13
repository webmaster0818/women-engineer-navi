import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職と妊娠・出産、どちらが先？タイミング設計ガイド｜育休・給付金の制度上の分岐点【2026年】",
  description:
    "「転職と妊娠、どちらを先にすべき？」を制度要件ベースで整理する意思決定ガイド。育児休業は労使協定により入社1年未満だと取得できない場合があること、育児休業給付金は離職後1年以内の転職なら前職の雇用保険期間を通算できること、産前産後休業は勤続期間に関係なく取得できることを、厚生労働省・ハローワークの公式情報をもとに解説。ケース別シナリオ4例つき。",
  alternates: { canonical: "/articles/career-lifeevent-timing/" },
  openGraph: {
    title: "転職と妊娠・出産、どちらが先？タイミング設計ガイド｜育休・給付金の制度上の分岐点【2026年】",
    description:
      "転職とライフイベントの順番に「正解」はありませんが、制度上の分岐点はあります。育児休業の労使協定による入社1年未満除外、育児休業給付金の被保険者期間通算ルール、産前産後休業の取得要件を公式情報ベースで整理し、ケース別に解説します。",
    url: "https://women-engineer.com/articles/career-lifeevent-timing/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "転職と妊娠・出産、どちらが先？タイミング設計ガイド｜育休・給付金の制度上の分岐点【2026年】",
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
    "「転職と妊娠、どちらを先にすべき？」を制度要件ベースで整理する意思決定ガイド。育児休業の労使協定による入社1年未満除外、育児休業給付金の被保険者期間通算ルール、産前産後休業の取得要件を厚生労働省・ハローワークの公式情報をもとに解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/career-lifeevent-timing/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "転職して1年未満でも育児休業は取れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "法律上、育児休業は原則として1歳未満の子を養育する労働者が取得できる権利で、勤続年数そのものは要件ではありません。ただし育児・介護休業法では、会社が労使協定を締結している場合に「継続雇用1年未満の労働者」からの申出を拒めるとされています。労使協定の有無は会社により異なるため、転職直後の取得可否は勤務先の育児・介護休業規程と労使協定を確認してください（出典: 厚生労働省 育児休業制度特設サイト、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "転職して1年未満でも育児休業給付金はもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "育児休業給付金は、原則として育児休業開始日前2年間に賃金支払基礎日数11日以上（ない場合は就業時間80時間以上）の月が12か月以上あることが要件です。今の会社だけで12か月に満たなくても、前職の離職日から1年以内に再就職しており、その間に基本手当（失業給付）の受給資格決定を受けていなければ、前職の雇用保険の被保険者期間と通算できます。自分のケースで要件を満たすかは、ハローワークで確認できます（出典: 厚生労働省Q&A・働く女性の心とからだの応援サイト、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "妊娠中に転職活動をしてもいいのでしょうか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "妊娠中の転職活動を禁止する法律はありません。また、妊娠・出産等を理由とする解雇などの不利益取扱いは男女雇用機会均等法等で禁止されています。ただし、入社時期によっては育児休業が労使協定の対象外となる可能性や、育児休業給付金の被保険者期間要件を満たせない可能性があるため、入社日から出産予定日・育休開始予定日までの期間を逆算して確認することが重要です。産前産後休業は勤続期間に関係なく取得できます（出典: 厚生労働省、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "産休（産前産後休業）には勤続期間の条件はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ありません。産前産後休業は労働基準法第65条に基づく制度で、産前6週間（多胎妊娠は14週間）は本人の請求により、産後8週間は原則就業禁止として、正社員・パート・派遣社員など働き方の違いに関係なくすべての女性労働者が対象です。入社直後でも取得できます。なお、休業中のお金（出産手当金など）は健康保険等の別制度で、それぞれ要件があります（出典: 厚生労働省 働く女性の心とからだの応援サイト、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "面接で妊娠の予定を聞かれたら、答える義務はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "妊娠の予定を面接で申告する法的な義務を定めた規定はありません。男女雇用機会均等法は雇用における男女の均等な機会の確保を目的としており、厚生労働省は男女均等な採用選考ルールを示しています。また、妊娠・出産等を理由とする不利益取扱いは法律で禁止されています。一方で、伝えるかどうか・いつ伝えるかは入社後の働きやすさにも関わるため、正解は一つではありません。企業の実態の見極め方は別記事で詳しく解説しています（出典: 厚生労働省、2026年7月参照）。",
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
              { label: "転職とライフイベントのタイミング設計" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              ライフイベントと転職
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              転職と妊娠・出産、どちらが先？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                育休・給付金の「制度上の分岐点」から考えるタイミング設計【2026年】
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
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>先に結論：順番に「正解」はない。ただし分岐点はある</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>「転職が先」「妊娠が先」のどちらが正しいという答えはありません。</strong>キャリア・年齢・家庭の事情は人それぞれです。ただし、順番によって「使える制度」が変わる分岐点が制度上存在するため、それを知ってから決めるのが後悔しない進め方です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>分岐点1（育休の取得権）:</strong> 育児休業は原則誰でも取得できますが、会社が労使協定を結んでいる場合、<strong>継続雇用1年未満の労働者は対象外にできる</strong>ため、転職直後の妊娠では育休が取れない可能性があります。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>分岐点2（育休中のお金）:</strong> 育児休業給付金は休業開始前2年間に雇用保険の対象となる月が12か月以上必要ですが、<strong>離職後1年以内の転職で失業給付を受けていなければ前職の期間を通算できる</strong>ため、転職しても給付を受けられるケースは多くあります。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>産休（産前産後休業）に勤続要件はありません。</strong>入社直後でも、雇用形態を問わず取得できます。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://www.mhlw.go.jp/seisakunitsuite/bunya/koyou_roudou/koyoukintou/ryouritsu/ikuji/childcare/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省 育児休業制度特設サイト</a>／<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000158500.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省「Q&A～育児休業等給付～」</a>（いずれも2026年7月参照）。労使協定の有無は会社により異なります。
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 制度上の分岐点 早見表（産休・育休・給付金の要件比較）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 育児休業の取得要件——転職直後は育休が取れない可能性がある根拠</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 育児休業給付金の受給要件——転職しても給付が受けられるケース</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. ケース別シナリオ：あなたはどのパターン？</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 面接で妊娠の予定は伝えるべき？——法的整理と現実的な考え方</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 決める前の確認リスト（会社規程・ハローワーク）</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 早見表 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">制度上の分岐点 早見表（産休・育休・給付金の要件比較）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「転職と妊娠のどちらを先にするか」で実際に影響を受けるのは、大きく分けて<strong>「休みを取る権利」と「休んでいる間のお金」</strong>の2つです。しかも、それぞれ根拠となる法律・制度が異なり、要件も別々に判定されます。まずこの3つを分けて理解するのが出発点です。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>制度</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>根拠</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>勤続期間に関わる要件</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>転職直後への影響</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>産前産後休業（産休）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>労働基準法</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>なし。雇用形態を問わずすべての女性労働者が対象</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>入社直後でも取得できる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>育児休業（育休）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>育児・介護休業法</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>原則なし。ただし<strong>労使協定がある場合、継続雇用1年未満は対象外にできる</strong>。有期雇用は契約満了見込みに関する要件あり</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>会社の労使協定次第で、入社1年未満だと取得できない可能性がある</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>育児休業給付金</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>雇用保険</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>休業開始前2年間に賃金支払基礎日数11日以上（ない場合は就業80時間以上）の月が12か月以上</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}><strong>離職後1年以内の転職で、失業給付の受給資格決定を受けていなければ前職と通算可</strong>。空白期間が長い・失業給付を受けた場合は要注意</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>出産手当金など</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>健康保険 等</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>制度ごとに要件が異なる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>詳細は<a href="/articles/maternity-money-guide/" className="underline" style={{ color: "#7c3a55" }}>産休・育休のお金ガイド</a>で解説</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://www.bosei-navi.mhlw.go.jp/gimu/kyugyo.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省 働く女性の心とからだの応援サイト「産前・産後休業」</a>／<a href="https://www.mhlw.go.jp/seisakunitsuite/bunya/koyou_roudou/koyoukintou/ryouritsu/ikuji/childcare/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省 育児休業制度特設サイト</a>／<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000158500.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省「Q&A～育児休業等給付～」</a>（いずれも2026年7月参照）。制度は改正されることがあるため、最新の要件は必ず公式情報で確認してください。
          </p>
        </div>
      </section>

      {/* sec2 育休の取得要件 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育児休業の取得要件——転職直後は育休が取れない可能性がある根拠</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              育児休業は、育児・介護休業法に基づき、<strong>原則として1歳に満たない子を養育する男女の労働者（日々雇用を除く）</strong>が取得できる法律上の権利です。期間は原則として子が1歳に達するまでで、保育所に入所できない等の場合は最長2歳まで延長できます（出典: 厚生労働省 育児休業制度特設サイト、2026年7月参照）。
            </p>
            <p>
              「勤続1年以上でないと育休は取れない」と思われがちですが、正確には違います。無期雇用（正社員など）の場合、<strong>法律上の原則としては勤続年数の要件はありません</strong>。ポイントは次の2つです。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>ポイント1: 労使協定があると「継続雇用1年未満」は対象外にできる</h3>
            <p className="text-sm text-text-light leading-relaxed mb-3">
              育児・介護休業法では、会社と労働者の代表が<strong>労使協定を締結している場合</strong>に限り、次の労働者からの育児休業の申出を会社が拒むことができるとされています（出典: 厚生労働省 育児休業制度特設サイト、2026年7月参照）。
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>継続雇用1年未満の労働者</strong>（＝転職直後の人が該当し得る）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span>申出の日から1年以内に雇用関係が終了することが明らかな労働者</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span>1週間の所定労働日数が2日以下の労働者</span></li>
            </ul>
            <p className="text-sm text-text-light leading-relaxed mt-3">
              つまり、<strong>転職して1年未満で育休を取れるかどうかは「その会社が労使協定を結んでいるか」で決まります</strong>。労使協定がなければ入社1年未満でも取得でき、労使協定があれば取得できない可能性があります。協定の有無・内容は会社により異なるため、就業規則や育児・介護休業規程、人事への確認が必須です。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-4" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>ポイント2: 有期雇用（契約社員・派遣など）には別の要件がある</h3>
            <p className="text-sm text-text-light leading-relaxed">
              有期雇用労働者は、上記に加えて<strong>「子が1歳6か月に達する日までに、労働契約（更新される場合には更新後の契約）の期間が満了し、更新されないことが明らかでないこと」</strong>という要件を満たす必要があります（出典: 厚生労働省 育児休業制度特設サイト、2026年7月参照）。契約更新の見込みが立たない状態だと育休を取得できない場合があるため、契約社員・派遣で働きながら妊娠・転職を考えている方は、契約期間と更新見込みをあわせて確認しましょう。
            </p>
          </div>
          <div className="rounded-xl p-6 mt-4" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong>実務上の含意:</strong> 「転職してすぐ妊娠したら育休が取れないかもしれない」というのは、この労使協定の仕組みが根拠です。逆にいえば、応募先の労使協定・規程を確認できれば、この不確実性は入社前にかなり潰せます。企業への確認方法は<a href="/articles/company-check-guide/" className="underline" style={{ color: "#7c3a55" }}>産育休実績・両立支援の見極めガイド</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 給付金 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育児休業給付金の受給要件——転職しても給付が受けられるケース</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              育児休業を取得できても、休業中のお金は別の制度＝<strong>雇用保険の育児休業給付金</strong>で判定されます。「育休が取れる＝給付金がもらえる」ではない点に注意してください。
            </p>
            <p>
              受給の中心的な要件は、原則として<strong>育児休業を開始した日前2年間に、賃金支払基礎日数が11日以上ある（ない場合は就業した時間数が80時間以上の）月が12か月以上あること</strong>です。なお、この2年間に本人の疾病や第1子の育児休業などにより引き続き30日以上賃金の支払いを受けられなかった期間がある場合は、要件が緩和されて満たせることがあります（出典: 厚生労働省「Q&A～育児休業等給付～」、2026年7月参照）。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>転職者に重要: 前職の雇用保険期間は「通算」できる</h3>
            <p className="text-sm text-text-light leading-relaxed mb-3">
              「転職して1年未満だと12か月要件を満たせないのでは？」と心配になりますが、雇用保険の被保険者期間は次の条件を満たせば<strong>前職の期間と通算できます</strong>（出典: 厚生労働省 働く女性の心とからだの応援サイト「専門家がお答えします」、2026年7月参照）。
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>前職の離職日から1年以内に再就職している</strong>こと</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>その間に<strong>基本手当（いわゆる失業給付）の受給資格の決定を受けていない</strong>こと</span></li>
            </ul>
            <p className="text-sm text-text-light leading-relaxed mt-3">
              つまり、<strong>間を空けずに（または1年以内に）転職し、失業給付の手続きをしていなければ、前職で雇用保険に入っていた期間が活きる</strong>ため、転職後すぐの妊娠でも給付金の要件を満たせるケースは十分あります。逆に、転職の合間に失業給付を受けた場合や、離職から再就職まで1年を超えた場合は、それ以前の期間は通算されず、新しい会社での期間だけで判定されることになります。
            </p>
          </div>
          <div className="rounded-xl p-6 mt-4" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>給付の水準と関連給付（概要）</h3>
            <p className="text-sm text-text-light leading-relaxed">
              育児休業給付金の支給額は、休業開始から180日目までは休業開始前の賃金月額の約67%、181日目以降は約50%です。また、一定の要件を満たす場合に支給される出生後休業支援給付金（13%）とあわせて80%相当となる仕組みもあります。有期雇用の方には「子が1歳6か月までの間に労働契約が満了することが明らかでないこと」という追加要件があります（出典: 厚生労働省「Q&A～育児休業等給付～」、2026年7月参照）。金額の計算方法や出産手当金・社会保険料免除など「お金」の全体像は、姉妹記事の<a href="/articles/maternity-money-guide/" className="underline" style={{ color: "#7c3a55" }}>産休・育休中のお金ガイド</a>にまとめています。
            </p>
          </div>
          <p className="text-xs text-text-light mt-4">
            ※自分の被保険者期間が要件を満たすかどうかの個別判定は、勤務先を管轄するハローワークで確認できます。ここでの説明は原則の整理であり、個別のケースの結論を保証するものではありません。
          </p>
        </div>
      </section>

      {/* sec4 ケース別シナリオ */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ケース別シナリオ：あなたはどのパターン？</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              ここまでの分岐点を、実際によくある4つの状況にあてはめて整理します。いずれも「取得の権利（育休）」「お金（給付金）」「産休」を分けて見るのがコツです。労使協定の有無など会社ごとに異なる条件が結論を左右するため、<strong>最終的な確認は必ず勤務先の規程とハローワークで</strong>行ってください。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ケース1: 転職して間もなく妊娠が分かった</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">産休:</span><span>勤続期間に関係なく取得できます。まずここは心配いりません。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">育休:</span><span>育休開始予定日の時点で継続雇用1年未満なら、労使協定がある会社では取得できない可能性があります。出産予定日から逆算すると、育休開始は産後8週間後以降になるため、「入社から育休開始までに1年経過しているか」が実際の分かれ目になります。まず会社の規程・労使協定を確認しましょう。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">給付金:</span><span>前職の離職から1年以内の転職で、間に失業給付の受給資格決定を受けていなければ、前職の被保険者期間と通算して12か月要件を満たせる可能性が高いです。ハローワークで確認を。</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ケース2: 妊娠中だが、今の会社を離れて転職したい</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">産休:</span><span>転職先でも勤続期間に関係なく取得できます。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">育休:</span><span>入社から育休開始まで1年未満になる可能性が高いため、応募先に労使協定による除外があるかどうかが最大の確認ポイントです。除外がない会社なら取得できます。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">給付金:</span><span>離職〜再就職の間隔を1年以内に収め、失業給付の受給資格決定を受けなければ通算の道が残ります。妊娠中の転職活動自体を禁じる法律はなく、妊娠等を理由とする不利益取扱いは禁止されていますが、選考・入社時期の設計は慎重に。<a href="/articles/schedule/" className="underline" style={{ color: "#7c3a55" }}>転職活動のスケジュール設計</a>もあわせてどうぞ。</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ケース3: 育休から復帰した後に転職したい</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">権利面:</span><span>復帰後の転職はまったく問題ありません。取得済みの育休・受給済みの給付金を返す必要もありません。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">注意点:</span><span>次の子を考えている場合は、転職先で再び「入社1年未満の労使協定除外」と「給付金の12か月要件」の判定をやり直すことになります。第2子のタイミングまで視野に入れるなら、転職先の規程確認が重要です。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">進め方:</span><span>育児と両立できる職場選びは<a href="/articles/after-maternity/" className="underline" style={{ color: "#7c3a55" }}>産後・育休明けの転職ガイド</a>と<a href="/articles/mama-engineer/" className="underline" style={{ color: "#7c3a55" }}>ママエンジニアの働き方</a>で詳しく解説しています。</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ケース4: 転職も妊娠もこれから——順番を設計できる</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">考え方:</span><span>制度面だけを見れば、「転職→（労使協定除外を外れる時期まで働く）→妊娠」の順が最も分岐点に引っかかりにくい設計です。ただし妊娠のタイミングは計画どおりになるものではなく、年齢や家庭の事情との兼ね合いもあるため、制度を「妊娠を遅らせる理由」にする必要はありません。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">代替策:</span><span>順番にこだわるより、「労使協定除外のない会社・産育休実績が豊富な会社を選ぶ」ほうが本質的な解決になります。産育休取得実績のデータは<a href="/articles/maternity-leave-rate/" className="underline" style={{ color: "#7c3a55" }}>IT企業の産休・育休取得率</a>を参考にしてください。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">導線:</span><span>両立サポートを重視したエージェント選びは<a href="/diagnosis/" className="underline" style={{ color: "#7c3a55" }}>8つの質問でわかる無料エージェント診断</a>が近道です。</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 面接での妊娠予定 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">面接で妊娠の予定は伝えるべき？——法的整理と現実的な考え方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              <strong>法的な整理:</strong> 男女雇用機会均等法は雇用における男女の均等な機会と待遇の確保を目的とする法律で、厚生労働省は男女均等な採用選考のルールを示しています。また、<strong>妊娠・出産・育児休業等を理由とする解雇などの不利益取扱いは法律で禁止</strong>されており、妊娠・出産等に関するハラスメントの防止措置も事業主に義務付けられています（出典: 厚生労働省「雇用における男女の均等な機会と待遇の確保のために」、2026年7月参照）。妊娠の予定を面接で申告する義務を定めた法規定はありません。
            </p>
            <p>
              <strong>現実的な考え方:</strong> 一方で、「伝えない権利がある」ことと「伝えるかどうかの判断」は別問題です。入社直後の産休・育休は制度上の分岐点（前述）に加えて業務の引き継ぎ設計にも関わるため、伝えるタイミングを内定後・入社後のどの時点にするかは、体調・時期・職場との信頼関係を踏まえた個別の判断になります。ここに万人共通の正解はありません。
            </p>
            <p>
              むしろ面接の場で有効なのは、自分の妊娠予定を開示することよりも、<strong>「その会社の産育休運用の実態」を質問や公開情報で見極めること</strong>です。厚生労働省の公開データベースやくるみん認定の調べ方、角が立たない質問の仕方は、姉妹記事の<a href="/articles/company-check-guide/" className="underline" style={{ color: "#7c3a55" }}>産育休実績・両立支援の見極めガイド</a>で具体的に解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 確認リスト */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">決める前の確認リスト（会社規程・ハローワーク）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              本記事で整理した分岐点は、最終的には「その会社の規程」と「自分の雇用保険の記録」で決まります。転職・妊娠のどちらを先にするか決める前に、次の点を確認しておきましょう。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["確認1", "応募先・勤務先の労使協定と育児・介護休業規程", "「継続雇用1年未満の労働者を育児休業の対象外とする労使協定」があるかどうか。就業規則・育児介護休業規程の閲覧、人事・労務への質問、または選考中ならエージェント経由での確認が考えられます。"],
              ["確認2", "自分の雇用保険の被保険者期間", "前職の離職日、再就職までの期間、失業給付（基本手当）の受給資格決定を受けたかどうか。育児休業給付金の12か月要件を満たすかは、ハローワークで個別に確認できます。"],
              ["確認3", "有期雇用の場合は契約期間と更新見込み", "子が1歳6か月に達する日までに契約が満了し更新されないことが明らかだと、育休を取得できない場合があります。契約更新の運用実態も含めて確認を。"],
              ["確認4", "お金の全体像", "出産手当金（健康保険）・出産育児一時金・育児休業給付金・社会保険料免除など、産休育休中の収入は複数の制度の組み合わせです。試算の考え方は産休・育休中のお金ガイドへ。"],
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
          <p className="text-xs text-text-light mt-4">
            ※本記事は制度の一般的な整理であり、個別の法解釈・受給可否を保証するものではありません。個別事情については、勤務先の人事・労務、ハローワーク、都道府県労働局雇用環境・均等部（室）などの公的窓口で確認してください。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec7" className="py-10">
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
            <a href="/articles/maternity-money-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>産休・育休中のお金ガイド</h3><p className="text-sm text-text-light">出産手当金・給付金・社会保険料免除の全体像</p></a>
            <a href="/articles/company-check-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>産育休実績・両立支援の見極めガイド</h3><p className="text-sm text-text-light">公開データベースと面接での聞き方</p></a>
            <a href="/articles/schedule/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>転職活動のスケジュール設計</h3><p className="text-sm text-text-light">応募から入社までの期間と逆算の考え方</p></a>
            <a href="/articles/mama-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ママエンジニアの働き方</h3><p className="text-sm text-text-light">育児と両立するキャリアの実際</p></a>
            <a href="/articles/after-maternity/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>産後・育休明けの転職ガイド</h3><p className="text-sm text-text-light">復帰後のキャリアチェンジの進め方</p></a>
            <a href="/articles/maternity-leave-rate/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>IT企業の産休・育休取得率</h3><p className="text-sm text-text-light">公開データで見る両立しやすい業界の実態</p></a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 厚生労働省 育児休業制度特設サイト「育児休業」 <a href="https://www.mhlw.go.jp/seisakunitsuite/bunya/koyou_roudou/koyoukintou/ryouritsu/ikuji/childcare/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/seisakunitsuite/bunya/koyou_roudou/koyoukintou/ryouritsu/ikuji/childcare/</a>（2026年7月参照。育児休業の対象者・期間・有期雇用の要件・労使協定による適用除外）</li>
            <li>出典: 厚生労働省「育児・介護休業法について」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000130583.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000130583.html</a>（2026年7月参照。法改正情報・「育児・介護休業法のあらまし」等の資料）</li>
            <li>出典: ハローワークインターネットサービス「育児休業等給付について」 <a href="https://www.hellowork.mhlw.go.jp/insurance/insurance_childcareleave.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.hellowork.mhlw.go.jp/insurance/insurance_childcareleave.html</a>（2026年7月参照。育児休業等給付の全体像）</li>
            <li>出典: 厚生労働省「Q&A～育児休業等給付～」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000158500.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000158500.html</a>（2026年7月参照。12か月要件・要件緩和・給付率・有期雇用の追加要件）</li>
            <li>出典: 厚生労働省 働く女性の心とからだの応援サイト「専門家がお答えします（転職と育児休業給付金）」 <a href="https://www.bosei-navi.mhlw.go.jp/senmon/senmon25.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.bosei-navi.mhlw.go.jp/senmon/senmon25.html</a>（2026年7月参照。被保険者期間の通算条件）</li>
            <li>出典: 厚生労働省 働く女性の心とからだの応援サイト「産前・産後休業」 <a href="https://www.bosei-navi.mhlw.go.jp/gimu/kyugyo.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.bosei-navi.mhlw.go.jp/gimu/kyugyo.html</a>（2026年7月参照。産前産後休業の内容・対象）</li>
            <li>出典: 厚生労働省「雇用における男女の均等な機会と待遇の確保のために」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyoukintou/danjokintou/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyoukintou/danjokintou/index.html</a>（2026年7月参照。妊娠・出産等を理由とする不利益取扱いの禁止等）</li>
          </ul>
          <p className="text-xs text-text-light mt-4">※本記事の制度記述は2026年7月時点で上記の公式情報を確認して作成した一般的な整理です。制度は改正されることがあるため、最新の要件・手続きは必ず厚生労働省・ハローワークの公式情報で確認してください。労使協定の有無など会社ごとに異なる事項は、勤務先・応募先の規程や公的窓口で個別に確認してください。</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">ライフイベントと両立できる職場を、制度に強いプロと探しませんか</h2>
            <p className="text-white/90 mb-6">産育休の取得実績や両立支援の実態は、エージェント経由なら選考前に確認しやすくなります。まずは無料相談で、あなたのタイミング設計に合った求人を紹介してもらいましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
