import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "産休・育休後のエンジニア転職ガイド｜復帰と転職の判断基準・タイミング【2026年】",
  description:
    "産休・育休後のエンジニア転職ガイド。育休からの復職率93.2%・女性の育休取得率86.6%などの公的統計をもとに、「復帰してから転職」と「育休中に転職活動」の違いを育児休業給付金・保育園・現職への心証の3つの論点で整理。ブランク不安への対処や転職タイミングの目安まで出典付きで解説します。",
  alternates: { canonical: "/articles/after-maternity/" },
  openGraph: {
    title: "産休・育休後のエンジニア転職ガイド｜復帰と転職の判断基準・タイミング【2026年】",
    description:
      "育休からの復職率93.2%・女性の育休取得率86.6%などの公的統計をもとに、「復帰してから転職」と「育休中に転職活動」の違いを給付金・保育園・心証の3論点で整理。転職タイミングの判断基準がわかります。",
    url: "https://women-engineer.com/articles/after-maternity/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "産休・育休後のエンジニア転職ガイド｜復帰と転職の判断基準・タイミング【2026年】",
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
    "育休からの復職率93.2%・女性の育休取得率86.6%などの公的統計をもとに、「復帰してから転職」と「育休中に転職活動」の違いを育児休業給付金・保育園・現職への心証の3つの論点で整理。転職タイミングの判断基準を出典付きで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/after-maternity/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "育休中に転職（退職）すると育児休業給付金はどうなりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "育児休業給付金は雇用保険から支給される給付で、休業開始から180日までは賃金の67%、181日以降は50%が支給されます。育休の途中で退職した場合、退職日以降の給付は受けられません。2025年4月の制度改正で、支給単位期間の途中で離職した場合でも離職日までの分が日割りで支給されるようになりましたが、「当初から育休終了後に退職する予定」での取得は給付の対象外とされています。また転職先で育休と給付を継続するには、1日の空白もなく転職先に入社し、転職先がその育休の継続を認めることが必要で、実務上のハードルは非常に高いです。確実なのは復帰後に転職活動を行う方法です。",
      },
    },
    {
      "@type": "Question",
      name: "育休から復帰せずにそのまま転職すると、保育園はどうなりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "多くの自治体では「育休からの復職」を前提に入園を内定・承諾しています。このため、復職しないまま退職・転職すると、入園内定の取り消しや退園の対象になるおそれがあります。安全なのは、いったん元の職場に復帰して復職証明書を自治体に提出し、在園の前提を満たしてから転職する流れです。退職後に求職期間が認められる猶予（おおむね2〜3か月）や必要書類は自治体によって異なるため、転職を考え始めた段階で必ずお住まいの自治体の保育課に確認してください。",
      },
    },
    {
      "@type": "Question",
      name: "育休復帰後、どのくらい経ってから転職するのが良いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "復帰後3〜6か月を一つの目安とする考え方が現実的です。復帰直後は慣らし保育や子どもの体調不良が続きやすく、生活リズムの構築に集中する期間が必要だからです。生活が安定し「今の職場では両立が難しい」と判断できた時点で転職活動を始めれば、面接でも具体的な理由を語れます。なお転職時は保育園の就労証明書の差し替えが必要で、退職から次の就労開始までの空白が長いと退園リスクがあるため、内定を得てから退職する順序を守りましょう。",
      },
    },
    {
      "@type": "Question",
      name: "産休・育休のブランクは転職で不利になりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "大きなマイナスにはなりにくいのが実態です。厚生労働省「令和5年度雇用均等基本調査」では、育休を終えて復職予定だった女性の93.2%が実際に復職しており、育休を挟んで働き続けること自体が標準になっています。IT業界は人材不足が続き、実務経験者は1〜2年のブランクがあっても歓迎される傾向です。面接では「ブランクをどう埋めたか」を具体的に示すことが重要で、使用技術の差分キャッチアップや小さなアウトプット（個人開発・技術記事など）が有効な材料になります。",
      },
    },
    {
      "@type": "Question",
      name: "育休明けの転職で年収は下がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働き方の選択によります。時短勤務（原則6時間）を選ぶと勤務時間に比例して基本給ベースでおおむね25%前後減るのが一般的ですが、2025年4月開始の育児時短就業給付金により、2歳未満の子を育てて時短勤務する場合は時短中の賃金の原則10%が雇用保険から支給されます。フルリモート×フルタイム（フレックス併用）を選べば年収を維持・向上できる余地もあります。情報通信業のテレワーク導入率は94.3%と全産業トップで、エンジニアは選択肢が広い職種です。",
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
              { label: "産休・育休後のエンジニア転職ガイド" },
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
              産休・育休後のエンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                復帰と転職の判断基準・タイミング【2026年】
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
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>この記事の結論</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>育休を終えて復職予定だった女性の<strong>93.2%が実際に復職</strong>。育休を挟んで働き続けることは完全に標準になっています（出典: 厚生労働省「令和5年度雇用均等基本調査」）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>転職するなら基本は<strong>「いったん復帰してから転職」</strong>。育休中の転職（復帰せず退職）は、育児休業給付金の打ち切り・保育園の入園内定取り消しという2つの実害リスクがあります。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>育休中の<strong>情報収集・エージェント相談は自由</strong>で法的にも問題ありません。「準備は育休中・行動は復帰後」が失敗の少ない型です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>IT業界（情報通信業）はテレワーク導入率<strong>94.3%で全産業トップ</strong>（出典: 総務省）。復帰後の転職で「時短×在宅」「フルリモート×フルタイム」など働き方を選び直せるのがエンジニアの強みです。</span>
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
                  1. データで見る育休後の復職・転職の実態
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>
                  2. 「復帰してから転職」vs「育休中に転職」の比較
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>
                  3. 育児休業給付金と保育園——タイミングで失敗しないために
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>
                  4. 復帰後に転職するベストタイミング
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>
                  5. 知っておくべき法制度（2025年改正のポイント）
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>
                  6. ブランク不安への対処——スキルキャッチアップ法
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>
                  7. おすすめ転職エージェント
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>
                  8. よくある質問
                </a>
              </li>
              <li>
                <a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>
                  9. 出典・参考資料
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 データで見る実態 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データで見る育休後の復職・転職の実態</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「育休後に戻れるのか」「ブランクは不利にならないか」という不安は、まず数字で確かめましょう。厚生労働省「令和5年度雇用均等基本調査」によると、育児休業を終了し復職予定だった女性のうち、<strong>実際に復職した人は93.2%</strong>（退職は6.8%）。育休を取って職場に戻ることは、すでに圧倒的多数派です。
            </p>
            <p>
              入口側のデータも同じ傾向です。厚生労働省「令和6年度雇用均等基本調査」では女性の育児休業取得率は<strong>86.6%</strong>（男性は40.5%で過去最高）。国立社会保障・人口問題研究所「第16回出生動向基本調査」では、第1子出産前後の妻の就業継続率は<strong>69.5%</strong>（2015〜19年出産）まで上昇し、就業継続者の79.2%が育児休業制度を利用しています。
            </p>
            <p>
              さらにエンジニアには職種固有の追い風があります。総務省「令和6年通信利用動向調査」によると、情報通信業のテレワーク導入率は<strong>94.3%</strong>と全産業トップ（全産業平均47.3%）。復帰・転職後に「時短×在宅」「フルリモート×フルタイム」といった働き方を選び直せる余地が、他業界より格段に大きいのです。
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
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>育休終了後の女性の復職者割合</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>93.2%（退職6.8%）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>厚生労働省「令和5年度雇用均等基本調査」</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>女性の育児休業取得率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>86.6%（男性は40.5%で過去最高）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>厚生労働省「令和6年度雇用均等基本調査」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>第1子出産前後の妻の就業継続率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>69.5%（2015〜19年出産。継続者の79.2%が育休利用）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>国立社会保障・人口問題研究所「第16回出生動向基本調査」</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>情報通信業のテレワーク導入率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>94.3%（全産業平均47.3%・産業別トップ）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>総務省「令和6年通信利用動向調査」</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「令和5年度・令和6年度雇用均等基本調査」、国立社会保障・人口問題研究所「第16回出生動向基本調査」、総務省「令和6年通信利用動向調査」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              つまり「復帰すること」自体のハードルは下がっています。本当に考えるべきは、<strong>復帰先（現職）で両立できるか、それとも環境を変える（転職する）か</strong>という判断と、その<strong>タイミング</strong>です。育休取得率データの詳しい読み方は<a href="/articles/maternity-leave-rate/" className="underline" style={{ color: "#7c3a55" }}>産休・育休取得率データの記事</a>、復帰後の働き方の全体像は<a href="/articles/mama-engineer/" className="underline" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</a>を参照してください。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 比較 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">「復帰してから転職」vs「育休中に転職」の比較</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              育休後の転職には大きく2つのルートがあります。<strong>A: いったん現職に復帰してから転職する</strong>か、<strong>B: 育休中に転職活動をして復帰せずに転職する</strong>か。育休中に転職活動をすること自体は法律で禁止されていませんが、BにはAにない実害リスクが2つ（給付金・保育園）あります。論点ごとに比較します。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>論点</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>A: 復帰してから転職</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>B: 育休中に転職（復帰せず退職）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>育児休業給付金</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>影響なし。育休期間分を受給したうえで復帰し、その後転職できる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>退職日以降は支給終了。「当初から退職予定」での取得は支給対象外。転職先での給付継続は実務上ほぼ不可能</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>保育園</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>復職証明書を提出して在園が安定。転職時は就労証明書を差し替えればよい（空白期間に注意）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「育休からの復職」前提の入園内定が取り消し・退園になるリスク（自治体の運用による）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>現職への心証</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>復帰・引き継ぎを経るため円満退職しやすい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>育休は復職を前提とした制度のため心証は悪化しやすい。違法ではないが関係悪化は覚悟が必要</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>選考の進めやすさ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>働きながらの活動になるため面接時間の確保が課題（オンライン面接の活用で緩和）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>時間は確保しやすいが、預け先が未確定のままでは入社時期を約束しにくく内定が出にくい</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>向いているケース</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}><strong>ほとんどの人の基本線</strong>。復帰して現職の両立可否を見極めてから動ける</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>現職がリモート不可・転居を伴う配置転換など、復帰しても両立が成立しないことが明確な場合の例外的選択</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>結論: 「準備は育休中・行動は復帰後」</h3>
            <p className="text-sm text-text-light leading-relaxed">
              育休中でも、転職サイトでの情報収集・エージェントとの面談・職務経歴書の準備は自由にできます。給付金にも保育園にも影響しません。リスクが生じるのは「復帰せずに退職する」場合だけです。したがって、<strong>育休中に市場を把握して準備を整え、復帰して生活を安定させてから応募・選考に進む</strong>のが、失敗の少ない型です。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 給付金と保育園 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育児休業給付金と保育園——タイミングで失敗しないために</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              比較表の2大論点を、制度の根拠とともに正確に押さえておきましょう。ここを誤解したまま動くと、数十万円単位の給付や保育園の在園資格を失うおそれがあります。
            </p>
            <h3 className="text-xl font-bold pt-2">育児休業給付金のルール</h3>
            <p>
              育児休業給付金は雇用保険からの給付で、支給額は<strong>休業開始から180日までは賃金（休業開始時賃金日額）の67%、181日以降は50%</strong>です。育休の途中で退職すると、<strong>退職日以降の給付は受けられません</strong>。2025年4月の制度改正により、支給単位期間の途中で離職した場合でも離職日までの分は日割りで支給されるようになりましたが（従来はその支給単位期間がまるごと不支給）、これは「もらい切れる」という意味ではありません。
            </p>
            <p>
              さらに重要なのは、育児休業給付金は<strong>「職場復帰を前提に育休を取得する人」を対象とした制度</strong>であることです。厚生労働省は、当初から育休終了後に退職する予定で取得する場合は支給対象外と明示しています。「復帰の意思があったが、育休中に事情が変わって転職を決めた」ことは問題になりませんが、最初から復帰するつもりのない計画的な取得は不正受給と判断されるおそれがあります。
            </p>
            <p>
              「転職先で育休と給付を続ければよいのでは」と考える人もいますが、これには<strong>退職の翌日に1日の空白もなく転職先へ入社し、かつ転職先がその育児休業の継続を認める</strong>ことが必要で、実務上のハードルは非常に高いのが実情です。
            </p>
            <h3 className="text-xl font-bold pt-2">保育園のルール</h3>
            <p>
              認可保育園の利用は「保護者の就労」を前提に自治体が認定します。育休中に入園が内定している場合、多くの自治体は<strong>「育休からの復職」を条件に入園を承諾</strong>しており、復職せずに退職・転職すると<strong>入園内定の取り消しや退園の対象</strong>になるおそれがあります。復職後に自治体へ「復職証明書」を提出して初めて、在園の前提が満たされます。
            </p>
            <p>
              復帰後に転職する場合も、勤務先変更の届け出と<strong>新しい勤務先の就労証明書</strong>の提出が必要です。退職から次の就労開始までに空白がある場合は「求職活動」扱いとなり、認められる猶予期間はおおむね2〜3か月など自治体によって異なります。<strong>内定を得てから退職する</strong>順序を守り、転職を考え始めた段階でお住まいの自治体の保育課に確認しておきましょう。
            </p>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省・ハローワーク「育児休業給付の内容と支給申請手続」「育児休業給付を受給中に離職した皆さまへ」、各自治体の保育所利用案内（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec4 タイミング */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">復帰後に転職するベストタイミング</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              復帰してから転職する場合、いつ動くか。生活・選考・保育園の3つの観点から、段階で考えるのが現実的です。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>復帰直後〜3か月: 生活の安定を最優先</h3>
              <p className="text-sm text-text-light leading-relaxed">
                慣らし保育、子どもの頻繁な発熱、自身の体力回復が重なる時期です。この段階での転職活動は負荷が大きく、判断も「復帰直後の大変さ」に引きずられがちです。まずは復職証明書を自治体に提出して保育園の在園を安定させ、生活リズムの構築に集中しましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>復帰後3〜6か月: 現職の両立可否を見極める</h3>
              <p className="text-sm text-text-light leading-relaxed">
                生活が回り始めると、現職の課題が具体的に見えてきます。「リモート制度はあるが使えない」「時短だと評価対象から外される」「急な看護休暇に嫌な顔をされる」——こうした<strong>運用実態の問題</strong>が確認できたら、転職理由として面接でも具体的に語れます。このタイミングでエージェントに相談し、市場の選択肢を把握しましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>復帰後6か月以降: 本格的な転職活動へ</h3>
              <p className="text-sm text-text-light leading-relaxed">
                復帰後の実績（時短や在宅での成果の出し方）を職務経歴書に書ける段階です。選考はオンライン面接を活用し、内定→退職→入社の間に就労の空白を作らないようスケジュールを組みます。入社時期は保育園の就労証明書の切り替えと自治体の猶予期間（おおむね2〜3か月）を踏まえて調整しましょう。
              </p>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              なお、現職に明らかなハラスメントや、復帰後の不利益取り扱い（育児・介護休業法10条で禁止されている降格・減給等）がある場合は、この限りではありません。早めにエージェントや労働局の相談窓口に相談してください。復職の具体的なステップは<a href="/articles/return-to-work/" className="underline" style={{ color: "#7c3a55" }}>復職・再就職ガイド</a>、復帰後の1日の時間設計は<a href="/articles/work-childcare-day/" className="underline" style={{ color: "#7c3a55" }}>仕事と保育園送迎の1日の記事</a>で解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 法制度 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">知っておくべき法制度（2025年改正のポイント）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              復帰先・転職先を評価する物差しとして、法律が保障する「最低ライン」を知っておきましょう。2025年4月・10月施行の改正育児・介護休業法で、両立支援は大きく拡充されています。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>制度</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>内容（法定の最低ライン）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>短時間勤務制度</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>3歳未満の子を育てる労働者に対し、1日の所定労働時間を<strong>原則6時間</strong>とする措置を設けることが企業の義務</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>残業免除（2025年4月〜）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>所定外労働の制限の対象が3歳未満から<strong>小学校就学前まで</strong>に拡大</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>子の看護等休暇（2025年4月〜）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>対象が<strong>小学3年生修了まで</strong>に延長。学級閉鎖や入園式・卒園式等も取得理由に追加</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>育児時短就業給付金（2025年4月〜）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2歳未満の子を育てて時短勤務する雇用保険被保険者に、<strong>時短中の賃金の原則10%を支給</strong>。時短による収入減を一部カバー</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>柔軟な働き方の措置（2025年10月〜）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}><strong>3歳〜小学校就学前</strong>の子を育てる労働者向けに、始業時刻変更・テレワーク等（月10日以上）・短時間勤務などから企業が<strong>2つ以上を用意し、労働者が1つを選択</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「育児・介護休業法 改正ポイントのご案内（令和7年4月1日・10月1日施行）」、厚生労働省「育児時短就業給付金」リーフレット（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              転職先選びでは、この法定ラインを<strong>どれだけ超えているか</strong>（例: 時短が小学校卒業まで、看護休暇が有給扱い、フルリモート可）が比較ポイントになります。改正法の詳しい整理は<a href="/articles/mama-engineer/" className="underline" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</a>、時短勤務の収入・キャリアへの影響は<a href="/articles/short-time/" className="underline" style={{ color: "#7c3a55" }}>時短勤務エンジニアの記事</a>で解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 ブランク対処 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ブランク不安への対処——スキルキャッチアップ法</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              産休・育休の1〜2年で、基本的なプログラミング能力や設計力が失われることはありません。変化が大きいのはフレームワークのバージョン、開発支援ツール（特にAIコーディング支援）、チームの開発プロセスといった「差分」です。<strong>ゼロから学び直すのではなく、差分に絞ってキャッチアップする</strong>のが効率的です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 自分の領域の「差分リスト」を作る</h3>
              <p className="text-text-light text-sm leading-relaxed">
                離れていた期間に主要フレームワーク・言語で何が変わったかをリリースノートで確認し、変更点を箇条書きに。フロントエンドならフレームワークのメジャーアップデート、バックエンドなら言語バージョンとクラウドの新機能、共通項としてAIコーディング支援ツールの普及が代表的な差分です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 手を動かして「小さなアウトプット」を残す</h3>
              <p className="text-text-light text-sm leading-relaxed">
                小さな個人開発、OSSへのドキュメント修正、技術記事1本——形は何でも構いません。面接で「ブランク中も技術に触れていた」ことを具体物で示せると、ブランクの懸念は実質的に消えます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 細切れ時間に合わせて学習を設計する</h3>
              <p className="text-text-light text-sm leading-relaxed">
                育児中はまとまった時間が取れない前提で、15〜30分単位で完結する教材（動画講座・技術記事）を選びます。子どものそばではインプット、1人になれる時間にコーディングと使い分けると、細切れ時間が無駄になりません。睡眠を削る学習は続かないため、無理は禁物です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 「伝え方」を準備する</h3>
              <p className="text-text-light text-sm leading-relaxed">
                ブランクは隠すものではなく、説明するものです。「育休◯か月→復帰後は時短×在宅で◯◯を担当→差分キャッチアップとして◯◯を実施」のように時系列で整理すれば、計画性のあるキャリアとして伝わります。伝え方の添削はエージェントの得意分野なので、1人で抱え込まないのが近道です。
              </p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6">
            離職を挟んだ場合を含むブランクからの復帰ステップ全体は<a href="/articles/return-to-work/" className="underline" style={{ color: "#7c3a55" }}>復職・再就職ガイド</a>で詳しく解説しています。
          </p>
        </div>
      </section>

      {/* おすすめエージェント */}
      <section id="sec7" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              あなたの転職を成功に導く、おすすめのエージェントを紹介します。複数登録して比較検討するのが転職成功の秘訣です。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                  女性特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                産休育休後の復帰支援に豊富な実績。時短勤務可能・リモートワーク対応の求人を中心に紹介。女性のライフイベントに寄り添った手厚いキャリア相談が特徴です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                リモートワーク求人が約60%と業界トップクラス。ブランクがあっても技術力を正当に評価した求人を提案。女性アドバイザーの指名も可能です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">リアルミーキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                  ワーママ特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                ワーキングマザーの転職に完全特化。時短勤務前提の求人が豊富で、育児との両立を最優先にした企業マッチングが強みです。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">doda</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                  総合型
                </span>
              </div>
              <p className="text-sm text-text-light">
                業界最大級の求人数。リモートワーク・時短勤務可の求人を効率的に検索可能。スカウト機能で条件に合った企業からオファーも受け取れます。
              </p>
            </div>
          </div>
          <div
            className="mt-8 rounded-xl p-6 text-center"
            style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}
          >
            <p className="font-bold text-lg mb-2">まずは無料相談から始めましょう</p>
            <p className="text-sm text-text-light mb-4">
              複数のエージェントに登録して比較検討するのがおすすめです。
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

      {/* FAQ */}
      <section id="sec8" className="py-10">
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

      {/* sec9 出典 */}
      <section id="sec9" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>・出典: 厚生労働省「令和5年度雇用均等基本調査」（2026年6月参照）— 育児休業を終了し復職予定だった女性の復職者割合93.2%・退職6.8%</li>
            <li>・出典: 厚生労働省「令和6年度雇用均等基本調査」（2026年6月参照）— 女性の育児休業取得率86.6%、男性40.5%</li>
            <li>・出典: 国立社会保障・人口問題研究所「第16回出生動向基本調査（結婚と出産に関する全国調査）」（2026年6月参照）— 第1子出産前後の妻の就業継続率69.5%、就業継続者の育休利用79.2%</li>
            <li>・出典: 総務省「令和6年通信利用動向調査」（2026年6月参照）— テレワーク導入率：企業全体47.3%、情報通信業94.3%</li>
            <li>・出典: 厚生労働省・ハローワーク「育児休業給付の内容と支給申請手続」（2026年6月参照）— 支給率67%（180日まで）・50%（181日以降）、復職を前提としない取得は支給対象外</li>
            <li>・出典: 厚生労働省・ハローワーク「育児休業給付を受給中に離職した皆さまへ」（2026年6月参照）— 2025年4月以降、支給単位期間の途中で離職した場合の離職日までの日割り支給</li>
            <li>・出典: 厚生労働省「育児・介護休業法 改正ポイントのご案内（令和7年4月1日・10月1日施行）」（2026年6月参照）— 残業免除の対象拡大、子の看護等休暇の拡充、柔軟な働き方を実現するための措置等</li>
            <li>・出典: 厚生労働省「育児時短就業給付金」リーフレット（2026年6月参照）— 2歳未満の子を養育する時短就業者へ賃金の原則10%を支給</li>
          </ul>
          <p className="text-xs text-text-light mt-4">
            ※ 本記事の統計値は上記の公的統計・公的資料に基づきます。育児休業給付金・保育園の取り扱いは個別の事情や自治体の運用により異なる場合があるため、最終判断の前にハローワーク・お住まいの自治体・勤務先の規定をご確認ください。
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
              href="/articles/return-to-work/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                復職・再就職ガイド
              </h3>
              <p className="text-sm text-text-light">ブランクからの復帰ステップ</p>
            </a>
            <a
              href="/articles/maternity-leave-rate/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                産休・育休取得率データ
              </h3>
              <p className="text-sm text-text-light">統計から見る取得率・復帰の実態</p>
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
            <a
              href="/articles/work-childcare-day/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                仕事と保育園送迎の1日
              </h3>
              <p className="text-sm text-text-light">送迎と仕事を両立する時間設計</p>
            </a>
            <a
              href="/articles/remote-jobs/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                リモートワーク求人ガイド
              </h3>
              <p className="text-sm text-text-light">在宅勤務のメリットと探し方</p>
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
              産休育休後もキャリアを諦めない
            </h2>
            <p className="text-white/90 mb-6">
              ブランクがあっても大丈夫。あなたに合った復帰先を見つけましょう。
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
