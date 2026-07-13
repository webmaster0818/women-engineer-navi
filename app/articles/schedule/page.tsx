import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "エンジニア転職のスケジュール完全ガイド｜平均期間・逆算プラン・在職中の進め方【2026年】",
  description:
    "エンジニア転職のスケジュールを実データで解説。全体3〜6ヶ月の標準モデル、フェーズ別タイムライン（準備2〜4週→応募・選考1〜2ヶ月→内定・退職交渉→引き継ぎ・入社）、入社希望日からの逆算プラン、ボーナス月・保育園入園などタイミングの考え方、民法627条と就業規則の関係まで出典付きで網羅します。",
  alternates: { canonical: "/articles/schedule/" },
  openGraph: {
    title: "エンジニア転職のスケジュール完全ガイド｜平均期間・逆算プラン・在職中の進め方【2026年】",
    description:
      "全体3〜6ヶ月の標準モデル、フェーズ別タイムライン、入社希望日からの逆算プラン、ボーナス月・ライフイベントのタイミング、退職の法的ルールまで出典付きで解説。",
    url: "https://women-engineer.com/articles/schedule/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "エンジニア転職のスケジュール完全ガイド｜平均期間・逆算プラン・在職中の進め方【2026年】",
  datePublished: "2026-04-27",
  dateModified: "2026-07-13",
  author: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  description:
    "エンジニア転職のスケジュールガイド。全体3〜6ヶ月の標準モデル、フェーズ別タイムライン、入社希望日からの逆算プラン、ボーナス月・ライフイベントのタイミング、民法627条と就業規則の関係を出典付きで解説。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/articles/schedule/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "エンジニアの転職活動は全体でどのくらいの期間がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "準備から入社まで3〜6ヶ月が標準的な目安です。内訳は、準備（実績の棚卸し・書類作成・エージェント登録）に2〜4週間、応募〜選考に1〜2ヶ月、内定後の意思決定と退職交渉に2週間〜1ヶ月、引き継ぎ・有給消化を経て入社までにさらに2週間〜1ヶ月です。マイナビの調査では1社あたりの応募から内定応諾までの平均日数は約1ヶ月（Web面接で31.3日）、厚生労働省「令和2年転職者実態調査」でも転職活動開始から離職までの期間は「1ヶ月以上3ヶ月未満」が28.8%で最多と、選考自体は短期決戦です。エンジニアはコーディングテストや技術面接が挟まる分、1〜2週間長めに見ておくと安心です。",
      },
    },
    {
      "@type": "Question",
      name: "退職は本当に2週間前の申し出で可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "法律上は可能です。期間の定めのない雇用（正社員）の場合、民法627条1項により、解約の申入れの日から2週間を経過することで雇用は終了し、会社の承諾は不要です。就業規則に「退職は1ヶ月前までに申し出ること」とあっても、民法の規定が優先するというのが一般的な解釈です。ただし円満退職を目指すなら、就業規則の予告期間と引き継ぎ・有給消化を踏まえ、退職希望日の1〜1.5ヶ月前に切り出すのが実務的です。スケジュール上は「2週間で辞められる」を前提にせず、退職交渉〜退職に1〜2ヶ月を確保して逆算しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "ボーナスをもらってから退職するのは問題ありませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "問題ありません。賞与は支給日に在籍していれば受け取る権利があり、受給後に退職を申し出ても法的な問題はありません。逆に注意すべきは「支給日在籍要件」です。就業規則等で「支給日に在籍する者に支給する」と定めることは判例上有効とされており（最高裁昭和57年10月7日・大和銀行事件）、支給日前に退職するとその賞与は受け取れないのが原則です。国家公務員の賞与が6月30日・12月10日支給と定められているように、民間も夏は6月下旬〜7月上旬、冬は12月上旬の支給が多いため、賞与を受け取ってから退職を切り出す場合は7月・12月以降に退職交渉→1〜2ヶ月後の入社、という時間軸になります。",
      },
    },
    {
      "@type": "Question",
      name: "転職活動を始めるのに有利な時期・避けるべき時期はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "エンジニアの中途採用は通年で行われており、「この月でないと不利」という決定的な時期はありません。一般論として、4月・10月の期初入社に合わせて求人や選考が活発になる傾向はありますが、欠員補充や増員の求人は年間を通じて出ます。時期よりも重要なのは自分側の固定点です。賞与支給日（受け取ってから退職交渉するか）、保育園の4月入園（多くの自治体で前年秋に申込）、育休復帰のタイミング、現職の繁忙期（引き継ぎのしやすさ）から逆算して、無理のない開始時期を決めるのが現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "転職した直後に妊娠した場合、育休は取れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "取れる可能性が高いですが、2つの注意点があります。第一に、育児・介護休業法では労使協定により「入社1年未満の労働者」を育児休業の対象から除外できるため、転職先にこの労使協定があると入社1年未満では育休を取得できない場合があります。第二に、育児休業給付金には「休業開始前2年間に賃金支払基礎日数11日以上の月が12ヶ月以上」という要件があり、前職と通算できるケースもありますが、離職期間や雇用保険の加入状況によっては給付を受けられないことがあります。近い将来の出産を考えている場合は、オファー面談で労使協定の有無と育休の取得実績を確認しておくと安心です。",
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
    { "@type": "ListItem", position: 3, name: "転職スケジュール完全ガイド", item: "https://women-engineer.com/articles/schedule/" },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "転職スケジュール完全ガイド" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>転職ガイド</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              エンジニア転職のスケジュール完全ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">平均期間・逆算プラン・在職中の進め方【2026年】</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>先に結論：転職スケジュールはこの4点で決まる</h2>
            <ul className="space-y-3 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>全体は3〜6ヶ月が標準。</strong>準備2〜4週間→応募・選考1〜2ヶ月→内定・退職交渉2週間〜1ヶ月→引き継ぎ・入社2週間〜1ヶ月。1社あたりの応募から内定応諾までは平均約1ヶ月です（出典: マイナビ「中途採用状況調査2025年版」Web面接31.3日）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>国の統計でも選考は短期決戦。</strong>転職活動開始から離職までの期間は「1ヶ月以上3ヶ月未満」が28.8%で最多。離職から次の就職までも「離職期間なし」26.1%＋「1ヶ月未満」27.6%で半数超がほぼブランクなしで移っています（出典: 厚生労働省「令和2年転職者実態調査」）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>起点は「入社希望日」からの逆算。</strong>退職は法律上2週間前の申し出で可能ですが（民法627条1項）、就業規則の1〜2ヶ月規定と引き継ぎ・有給消化を踏まえ、内定から入社まで1.5〜2ヶ月を見込むのが現実的です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>ライフイベントは動かせない固定点。</strong>賞与支給日（支給日在籍要件）、保育園の4月入園（申込は前年秋）、育休復帰、転職直後の育休制約（入社1年未満は労使協定で除外可）を先にカレンダーへ置いてから計画を組みます。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. データで見る転職活動の期間【出典付き】</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. フェーズ別タイムラインと逆算プラン</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 在職中に進める場合のスケジュール調整</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 開始時期の決め方：ボーナス・期初・ライフイベント</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 退職〜入社の法的ルール（民法627条・就業規則・有給消化）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 データで見る期間 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データで見る転職活動の期間【出典付き】</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「転職には半年も1年もかかる」というイメージは、データで見ると半分正しく半分誤りです。厚生労働省「令和2年転職者実態調査」によると、転職活動を始めてから直前の勤め先を離職するまでの期間は<strong>「1ヶ月以上3ヶ月未満」が28.8%で最多</strong>、「1ヶ月未満」も18.3%あります。また、離職してから次の勤め先に就職するまでの期間は「離職期間なし」が26.1%、「1ヶ月未満」が27.6%で、<strong>半数超（53.7%）がほぼブランクなしで次の職場へ移っています</strong>（出典: 厚生労働省「令和2年転職者実態調査の概況」）。
            </p>
            <p>
              選考そのものの所要時間も短くなっています。マイナビ「中途採用状況調査2025年版（2024年実績）」では、<strong>1社あたりの応募から内定応諾までの平均日数はWeb面接で31.3日・対面で29.2日</strong>、応募から一次面接までは平均11.8日、面接回数は平均2.7〜3.0回です。つまり、応募してしまえば1社の決着は約1ヶ月でつきます。
            </p>
            <p>
              一方で「全体が短い」わけではありません。dodaの集計（2025年4月〜2026年3月）では転職成功者の<strong>平均応募社数は31.9社</strong>で、複数社への応募・並行選考が前提です。書類準備や企業研究などの準備期間、内定後の退職交渉・引き継ぎを含めると、<strong>準備開始から入社まで3〜6ヶ月</strong>が現実的な標準レンジになります。マイナビ「転職活動実態調査（2025年）」でも、転職活動者が想定する活動期間は「3ヶ月以上半年未満」が28.1%で最多でした。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>指標</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>データ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>出典</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>活動開始〜離職までの期間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「1ヶ月以上3ヶ月未満」28.8%（最多）、「1ヶ月未満」18.3%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>厚労省「令和2年転職者実態調査」</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>離職〜次の就職までの期間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「離職期間なし」26.1%＋「1ヶ月未満」27.6%＝53.7%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>厚労省「令和2年転職者実態調査」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1社の応募〜内定応諾</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>平均約1ヶ月（Web面接31.3日・対面29.2日）、応募〜一次面接11.8日</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>マイナビ「中途採用状況調査2025年版」</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>面接回数</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>平均2.7回（対面）〜3.0回（Web）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>マイナビ「中途採用状況調査2025年版」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>平均応募社数</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>31.9社（2025年4月〜2026年3月の転職成功者）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>doda「転職成功者の平均応募社数」</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3 leading-relaxed">
            出典: 厚生労働省「令和2年転職者実態調査の概況」、マイナビキャリアリサーチLab「中途採用状況調査2025年版（2024年実績）」、doda（パーソルキャリア）「転職成功者の平均応募社数」、マイナビキャリアリサーチLab「転職活動実態調査（2025年）」（いずれも2026年6月参照）
          </p>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#f0e7dd", border: "1px solid #d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong>エンジニア特有の補正:</strong> Web系を中心にコーディングテストや技術面接・カジュアル面談が選考に挟まるため、書類と面接だけで進む職種より<strong>1〜2週間長め</strong>に見積もるのが安全です。選考フローの全体像と各段階の対策は<a href="/articles/interview-guide/" className="underline" style={{ color: "#7c3a55" }}>面接対策ガイド</a>で解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 フェーズ別タイムライン */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">フェーズ別タイムラインと逆算プラン</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              スケジュールは「いつ始めるか」ではなく<strong>「いつ入社したいか」から逆算</strong>して組みます。全体を4フェーズに分けると、それぞれの所要期間と「詰まりやすいポイント」が見えてきます。
            </p>
          </div>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse bg-white">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>フェーズ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>目安期間</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>主なタスク</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>① 準備</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2〜4週間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>実績の棚卸し・職務経歴書/スキルシート作成・エージェント登録・希望条件の整理</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>② 応募・選考</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1〜2ヶ月</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>複数社へ並行応募・コーディングテスト・面接2〜3回（1社あたり応募〜内定応諾は平均約1ヶ月）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>③ 内定・退職交渉</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2週間〜1ヶ月</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>オファー面談で条件確認→内定承諾→入社日合意→直属の上司へ退職を申し出</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>④ 引き継ぎ・入社</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2週間〜1ヶ月</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>引き継ぎ資料の整備・有給消化・退職手続き・入社書類の準備</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>PHASE 1</span>
                <h3 className="text-lg font-bold">準備（2〜4週間）— ここで全体の質が決まる</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                実績の棚卸しと書類作成が中心です。職務経歴書に書いた内容はそのまま面接の質問リストになるため、<strong>「数字つきの実績」をこの段階で言語化しておくと、後のフェーズ全てが速くなります</strong>。dodaの集計では転職成功者の平均応募社数は31.9社。書類は一度作って終わりではなく、応募しながら磨く前提で「8割の完成度でまず出せる状態」を目指しましょう。
                → 書き方の詳細は<a href="/articles/resume-guide/" className="underline" style={{ color: "#7c3a55" }}>職務経歴書・スキルシートの書き方</a>
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>PHASE 2</span>
                <h3 className="text-lg font-bold">応募・選考（1〜2ヶ月）— 並行で進めて足並みを揃える</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                応募から一次面接まで平均11.8日、内定応諾まで約1ヶ月（出典: マイナビ「中途採用状況調査2025年版」）。1社ずつ順番に受けると応募社数×1ヶ月かかってしまうため、<strong>5〜10社程度を同時並行で進め、選考の進度を揃える</strong>のが鉄則です。本命の選考が遅れている間に他社の内定回答期限が来る「時間切れ」が最も多い失敗パターン。エージェント経由なら選考スピードの調整を依頼できます。面接は平均2.7〜3.0回、IT業種の一次面接は8割超がWeb面接です。
                → 面接の準備は<a href="/articles/interview-guide/" className="underline" style={{ color: "#7c3a55" }}>面接対策ガイド</a>
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>PHASE 3</span>
                <h3 className="text-lg font-bold">内定・退職交渉（2週間〜1ヶ月）— 順番を間違えない</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                安全な順番は<strong>「(1)労働条件通知書を書面で確認→(2)入社日を合意→(3)内定承諾→(4)現職に退職を申し出る」</strong>です。退職の意思表示は必ず内定承諾の後。内定の回答期限は一般に数日〜1週間程度なので、オファー面談で年収・働き方・産育休の運用などを確認し、迷う材料を潰しておきます。退職の切り出しは退職希望日の1〜1.5ヶ月前が実務的な目安です。
                → 条件確認の項目は<a href="/articles/offer-meeting/" className="underline" style={{ color: "#7c3a55" }}>オファー面談で確認すべきこと</a>
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#c15f47" }}>PHASE 4</span>
                <h3 className="text-lg font-bold">引き継ぎ・入社（2週間〜1ヶ月）— エンジニアは引き継ぎが重い</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                エンジニアはコード・運用手順・アカウント権限・暗黙知のドキュメント化など、引き継ぎ資料の整備に時間がかかります。残有給の消化期間も含めて、<strong>退職日と入社日の間に余裕を持たせる</strong>のがトラブル回避のコツ。社会保険の空白を作らないため、退職日の翌日を入社日にする（月末退職→翌月1日入社）設計が一般的です。
                → 円満退職の手順は<a href="/articles/amicable-resignation/" className="underline" style={{ color: "#7c3a55" }}>円満退職・退職交渉の進め方</a>
              </p>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #7c3a55" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>逆算プランの例：10月1日入社にしたい場合</h3>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li><strong>6月上旬:</strong> 準備開始（棚卸し・書類・エージェント登録）</li>
              <li><strong>6月下旬〜8月上旬:</strong> 応募・選考（5〜10社並行、技術面接・コーディングテスト含む）</li>
              <li><strong>8月中旬:</strong> オファー面談→内定承諾→入社日合意→退職を申し出（就業規則の1ヶ月前規定をクリア）</li>
              <li><strong>8月下旬〜9月末:</strong> 引き継ぎ＋有給消化、9月30日退職</li>
              <li><strong>10月1日:</strong> 入社（社会保険の空白なし）</li>
            </ul>
            <p className="text-sm text-text-light leading-relaxed mt-3">
              選考が想定より延びることは普通にあるので、<strong>入社希望日には±1ヶ月のバッファ</strong>を持たせておくと精神的にも交渉的にも楽になります。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 在職中の進め方 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">在職中に進める場合のスケジュール調整</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              収入を維持しながら焦らず選べるという理由から、転職活動は<strong>在職中に進めるのが基本形</strong>です。実際、厚労省の調査でも半数超が離職期間ほぼなしで次の職場へ移っており（出典: 厚生労働省「令和2年転職者実態調査」）、「辞めてから探す」は少数派です。ただし在職中は使える時間が限られるため、スケジュール面では次の3点を織り込みます。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>1. 全体期間は長め（3〜6ヶ月）に見積もる</h3>
              <p className="text-sm text-text-light leading-relaxed">
                平日夜と週末しか使えない分、書類準備や企業研究のペースは離職後活動より遅くなります。「準備2週間」を「準備1ヶ月」に、選考も面接日程の調整分だけ後ろ倒しになる前提で組みましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>2. 面接はWeb面接・夜間枠に寄せて消耗を減らす</h3>
              <p className="text-sm text-text-light leading-relaxed">
                IT・通信業種では一次面接の8割超がWeb面接です（出典: マイナビ「中途採用状況調査2025年版」）。一次〜二次はオンライン・平日夜に集約し、有給や半休は最終面接など対面が必要な場面に温存するのが効率的。エージェントに「平日夜・オンライン希望」と最初に伝えておくと日程調整がまとまります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#c15f47" }}>3. 現職の繁忙期と退職時期の衝突を先に避ける</h3>
              <p className="text-sm text-text-light leading-relaxed">
                リリース直前やプロジェクトの山場に退職交渉が重なると、引き止めが強くなり円満退職が難しくなります。逆算の段階で「この月に退職を切り出すことになるが、現職のカレンダー的に現実的か」を確認しておきましょう。
              </p>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#f0e7dd", border: "1px solid #d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              会社に知られない進め方、平日面接の具体的な日程調整術、育児と両立する時間の作り方など、<strong>在職中ならではの実務テクニック</strong>は<a href="/articles/job-hunting-while-employed/" className="underline" style={{ color: "#7c3a55" }}>在職中の転職活動の進め方ガイド</a>で詳しく解説しています。本記事は全体スケジュールの設計図として併せてお使いください。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 タイミング論 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">開始時期の決め方：ボーナス・期初・ライフイベント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              エンジニアの中途採用は通年で行われており、「絶対に有利な月」はありません。それよりも、<strong>自分側の動かせない固定点をカレンダーに置き、そこから逆算する</strong>方がスケジュールの精度は上がります。固定点になりやすいのは次の3つです。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>固定点1: 賞与支給日 —「支給日在籍要件」を確認する</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                多くの企業は就業規則等で「賞与は支給日に在籍する者に支給する」と定めており、この<strong>支給日在籍要件は判例上有効</strong>とされています（最高裁昭和57年10月7日・大和銀行事件）。支給日前に退職すると、算定期間を満勤していても賞与は受け取れないのが原則です。国家公務員の賞与（期末・勤勉手当）が6月30日・12月10日支給と定められているように、民間でも夏は6月下旬〜7月上旬・冬は12月上旬の支給が多数派です。
              </p>
              <p className="text-sm text-text-light leading-relaxed">
                賞与を受け取ってから動く場合の典型形は「<strong>6月末〜7月に賞与受給→7月に退職交渉→9〜10月入社</strong>」「<strong>12月に賞与受給→年明けに退職交渉→2〜4月入社</strong>」。受給後すぐの退職申し出は法的に問題ありませんが、自社の就業規則で支給日と在籍要件を必ず確認してから逆算しましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>固定点2: 期初入社（4月・10月）— こだわりすぎない</h3>
              <p className="text-sm text-text-light leading-relaxed">
                4月・10月の期初は組織変更や予算の関係で受け入れ態勢が整いやすく、中途入社者が複数同時に入るためオンボーディングが手厚い傾向があります。一方、エンジニアの求人は欠員補充・増員とも通年で出ており、<strong>期初を待つために2〜3ヶ月活動を止める合理性は薄い</strong>のが実情です。「結果的に期初になればラッキー」程度に考え、選考の進度を優先しましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>固定点3: ライフイベント — 保育園・育休・出産の時間軸</h3>
              <ul className="text-sm text-text-light space-y-3 mb-3">
                <li>
                  <strong>保育園の4月入園:</strong> 認可保育園の4月一斉入園は、多くの自治体で<strong>前年の10〜12月に申込、1〜2月に結果通知</strong>というスケジュールです。申込時点の就労状況が利用調整（点数）に影響するため、入園申込の直前に離職期間を作るのはリスクがあります。転職するなら「申込前に入社を済ませる」か「内定通知書を就労予定の証明に使えるか自治体に確認する」のどちらかを先に決めましょう。
                </li>
                <li>
                  <strong>育休からの復帰直後:</strong> 復帰→保育園の慣らし保育→生活リズムの安定までは想定外の欠勤も多く、転職活動と並行するのは負荷が高い時期です。復帰後数ヶ月は現職で勤務実績を作り、生活が回り始めてから動く方がスケジュールは崩れにくくなります。働き方の選択肢は<a href="/articles/mama-engineer/" className="underline" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</a>を参考にしてください。
                </li>
                <li>
                  <strong>転職直後の妊娠・育休:</strong> 育児・介護休業法では、労使協定により<strong>入社1年未満の労働者を育児休業の対象から除外できます</strong>。また育児休業給付金には「休業開始前2年間に賃金支払基礎日数11日以上の月が12ヶ月以上」という要件があります（出典: 厚生労働省「育児・介護休業法のあらまし」、ハローワーク「育児休業給付」）。近い将来の出産を考えている場合は、労使協定の有無と育休取得実績をオファー面談で確認しておくと、入社後のギャップを避けられます。
                </li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">
                ライフイベントは「転職を諦める理由」ではなく「スケジュールの制約条件」です。固定点を先に置けば、動ける期間は必ず見つかります。
              </p>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6 bg-white" style={{ border: "1px solid #7c3a55" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong style={{ color: "#7c3a55" }}>タイミング設計をさらに詳しく</strong>　転職と妊娠・出産のタイミングには、育休の入社1年未満除外（労使協定）や育児休業給付金の12か月要件と前職通算など、制度上の分岐点がある場合があります。順番ごとの整理は<a href="/articles/career-lifeevent-timing/" className="underline" style={{ color: "#7c3a55" }}>転職と妊娠・出産のタイミング設計ガイド</a>で、産休・育休・時短期間の収入の考え方は<a href="/articles/maternity-money-guide/" className="underline" style={{ color: "#7c3a55" }}>産休・育休・時短勤務のお金ガイド</a>で解説しています。
            </p>
          </div>
          <p className="text-xs text-text-light mt-3 leading-relaxed">
            出典: 最高裁昭和57年10月7日判決（大和銀行事件）— 賞与の支給日在籍要件を有効と判断、人事院「期末手当・勤勉手当」— 国家公務員の賞与支給日は6月30日・12月10日、厚生労働省「育児・介護休業法のあらまし」— 労使協定による入社1年未満の労働者の育休除外、ハローワークインターネットサービス「育児休業給付」— みなし被保険者期間12ヶ月以上の要件（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec5 退職の法的整理 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">退職〜入社の法的ルール（民法627条・就業規則・有給消化）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              スケジュールの最終盤で効いてくるのが退職の法的ルールです。誤解が多いポイントなので、事実関係を整理しておきます。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>法律上の最短は「申し出から2週間」（民法627条1項）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                期間の定めのない雇用（正社員）の場合、民法627条1項は「解約の申入れの日から二週間を経過することによって終了する」と定めており、<strong>会社の承諾がなくても退職は成立します</strong>。「退職は認めない」「後任が決まるまで辞めさせない」という引き止めに法的な拘束力はありません（出典: e-Gov法令検索「民法」第627条、2026年6月参照）。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>就業規則の「1ヶ月前」とどちらが優先か</h3>
              <p className="text-sm text-text-light leading-relaxed">
                就業規則に「退職は1ヶ月前（2ヶ月前）までに申し出ること」とある企業は多くあります。民法627条の2週間との関係では、<strong>民法の規定が優先するというのが一般的な解釈</strong>です。ただし円満退職と引き継ぎの観点では就業規則の予告期間を尊重するのが現実的で、スケジュール設計上は「法律上の最短2週間」を前提にせず、<strong>退職の申し出から退職日まで1〜2ヶ月</strong>を確保しておくのが安全です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>有給消化は労働者の権利 — ただし期間を計算に入れる</h3>
              <p className="text-sm text-text-light leading-relaxed">
                年次有給休暇は労働基準法39条に基づく権利で、退職前にまとめて取得することも可能です。会社には時季変更権がありますが、退職日を越えて時季を変更することはできないため、<strong>退職日までの残日数消化を会社が拒むことは原則できません</strong>。一方スケジュール面では、残有給が20日あれば実質約1ヶ月分の勤務日が消えるため、「最終出社日」と「退職日」が大きくずれます。引き継ぎ完了→有給消化→退職日→入社日の順で、退職交渉の最初に時系列を共有しておくと揉めません（出典: 労働基準法第39条、厚生労働省「年次有給休暇の取得促進」、2026年6月参照）。
              </p>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#f0e7dd", border: "1px solid #d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              退職の切り出し方、引き止め（カウンターオファー）への対応、ソースコードや権限まわりのエンジニア特有の注意点は<a href="/articles/amicable-resignation/" className="underline" style={{ color: "#7c3a55" }}>円満退職・退職交渉の進め方ガイド</a>で具体的に解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d9c7b8" }}>
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                  <span><span style={{ color: "#7c3a55" }} className="mr-2">Q.</span>{faq.name}</span>
                  <span className="text-text-light group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d9c7b8" }}>
                  <p className="pt-4"><span style={{ color: "#c15f47" }} className="font-bold mr-2">A.</span>{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考</h2>
          <ul className="space-y-2 text-sm text-text-light leading-relaxed">
            <li>・出典: 厚生労働省「令和2年転職者実態調査の概況」（2026年6月参照）— 転職活動開始から離職までの期間「1ヶ月以上3ヶ月未満」28.8%・「1ヶ月未満」18.3%、離職から就職までの期間「離職期間なし」26.1%・「1ヶ月未満」27.6%</li>
            <li>・出典: マイナビキャリアリサーチLab「中途採用状況調査2025年版（2024年実績）」（従業員3名以上の企業の人事担当者1,500名、2024年12月調査、2026年6月参照）— 応募〜内定応諾の平均日数（Web面接31.3日・対面29.2日）、応募〜面接の平均日数11.8日、平均面接回数（Web3.0回・対面2.7回）、IT・通信・インターネット業種の一次面接「Web面接が50%以上」81.6%</li>
            <li>・出典: doda（パーソルキャリア）「『何社受ける？』転職成功者の平均応募社数、書類や面接の通過率は？」（集計期間: 2025年4月〜2026年3月、2026年6月参照）— 転職成功者の平均応募社数31.9社</li>
            <li>・出典: マイナビキャリアリサーチLab「転職活動実態調査（2025年）」（2025年7月調査、2026年6月参照）— 転職活動者の想定活動期間は「3ヶ月以上半年未満」28.1%で最多</li>
            <li>・出典: e-Gov法令検索「民法」第627条1項（2026年6月参照）— 期間の定めのない雇用は解約申入れから2週間の経過で終了</li>
            <li>・出典: 労働基準法第39条、厚生労働省「年次有給休暇の取得促進」特設サイト（2026年6月参照）— 年次有給休暇の権利と取得ルール</li>
            <li>・参考: 最高裁昭和57年10月7日判決（大和銀行事件）— 賞与の支給日在籍要件を有効と判断</li>
            <li>・参考: 人事院「期末手当・勤勉手当」（2026年6月参照）— 国家公務員の賞与支給日は6月30日・12月10日</li>
            <li>・参考: 厚生労働省「育児・介護休業法のあらまし」、ハローワークインターネットサービス「育児休業給付」（いずれも2026年6月参照）— 労使協定による入社1年未満の労働者の育休除外、育児休業給付金の被保険者期間要件</li>
          </ul>
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

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からエンジニアになる方法</h3><p className="text-sm text-text-light">学習〜転職の完全ロードマップ</p></a>
            <a href="/articles/job-hunting-while-employed/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>在職中の転職活動の進め方</h3>
              <p className="text-sm text-text-light">面接の日程調整術・会社に知られない注意点</p>
            </a>
            <a href="/articles/amicable-resignation/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>円満退職・退職交渉の進め方</h3>
              <p className="text-sm text-text-light">切り出し方・引き止め対応・引き継ぎの手順</p>
            </a>
            <a href="/articles/resume-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>職務経歴書の書き方</h3>
              <p className="text-sm text-text-light">準備フェーズの土台になる実績の棚卸し</p>
            </a>
            <a href="/articles/interview-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>面接対策ガイド</h3>
              <p className="text-sm text-text-light">選考フロー全体図と頻出質問の答え方</p>
            </a>
            <a href="/articles/offer-meeting/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>オファー面談で確認すべきこと</h3>
              <p className="text-sm text-text-light">内定後の条件交渉・制度確認のチェックリスト</p>
            </a>
            <a href="/articles/mama-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</h3>
              <p className="text-sm text-text-light">育児と両立する働き方と法制度</p>
            </a>
            <a href="/articles/career-lifeevent-timing/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>転職と妊娠・出産のタイミング設計ガイド</h3>
              <p className="text-sm text-text-light">育休・給付金の制度上の分岐点から逆算する</p>
            </a>
            <a href="/articles/maternity-money-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>産休・育休・時短勤務のお金ガイド</h3>
              <p className="text-sm text-text-light">出産手当金・育児休業給付金と手取りの考え方</p>
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
