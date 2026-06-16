import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの年収交渉術｜タイミング・相場の調べ方・伝え方の実例【2026年】",
  description:
    "女性エンジニアのための年収交渉ガイド。交渉した人の85〜91%が年収アップに成功（マイナビ転職・IT実態調査）。転職時の昇給額には男女差（男性139万円/女性85万円・Forkwell調査）があり、女性こそ交渉すべき理由をデータで解説。交渉のベストタイミング、job tag・dodaを使った相場の調べ方、伝え方のフレーズ例まで紹介します。",
  alternates: { canonical: "/articles/negotiation/" },
  openGraph: {
    title: "女性エンジニアの年収交渉術｜タイミング・相場の調べ方・伝え方の実例【2026年】",
    description:
      "交渉した人の85〜91%が年収アップに成功。転職時の昇給額の男女差データから、交渉のタイミング・相場の調べ方・伝え方の実例まで2026年最新データで解説。",
    url: "https://women-engineer.com/articles/negotiation/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの年収交渉術｜タイミング・相場の調べ方・伝え方の実例【2026年】",
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
    "交渉した人の85〜91%が年収アップに成功。転職時の昇給額の男女差データから、交渉のタイミング・相場の調べ方・伝え方の実例まで2026年最新データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/negotiation/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "年収交渉をすると印象が悪くなったり、内定が取り消されたりしませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "市場相場と実績を根拠にした交渉であれば、印象悪化を過度に恐れる必要はありません。キッカケクリエイションの「ITエンジニアの年収交渉に関する実態調査」（2026年2月、転職経験のあるITエンジニア393名）では、年収交渉をした人の90.8%が年収アップを実現しています。一方、交渉しなかった理由の1位は「印象が悪くなる不安」（30.9%）で、不安が機会損失につながっている実態も示されました。感情的な要求や根拠のない高額提示は避け、公開データに基づいて伝えることが大切です。",
      },
    },
    {
      "@type": "Question",
      name: "年収交渉はいつ切り出すのがベストですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "本番は内定後のオファー面談（条件面談）です。内定前は企業側に選択権があるため、応募書類の希望年収欄や面接で聞かれたときに希望を伝えるにとどめ、自分から金額の引き上げを切り出すのは避けるのが無難です。内定後は企業が「入社してほしい」状態になっており、提示条件も出そろっているため、具体的な交渉がしやすくなります。転職エージェント経由なら、応募から内定までのどの段階でも担当者を通じて条件のすり合わせができます。",
      },
    },
    {
      "@type": "Question",
      name: "どのくらいの年収アップを求めるのが妥当ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "基準は「現年収からの上げ幅」ではなく「市場相場との差」です。厚生労働省「令和6年雇用動向調査」では、転職で賃金が増加した人は40.5%、うち1割以上増加した人は29.4%でした。現年収が相場より低い場合は1〜2割以上のアップも十分に現実的です。job tag（厚生労働省・職業情報提供サイト）やdodaの平均年収ランキングで自分の職種・経験年数の相場を確認し、相場レンジの中で根拠を示せる金額を希望額にしましょう。",
      },
    },
    {
      "@type": "Question",
      name: "転職エージェントは本当に年収交渉をしてくれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "年収交渉の代行は転職エージェントの基本サービスの一つです。エージェントの紹介手数料は入社者の年収に連動する成功報酬型が一般的なため、求職者の年収を上げる方向で動くインセンティブがあります。実際、キッカケクリエイションの調査では年収交渉を行ったITエンジニアの83.7%が転職エージェントを活用していました。ただし任せきりにせず、希望額とその根拠（相場データ・実績）を自分の言葉で担当者に伝えることが交渉の精度を高めます。",
      },
    },
    {
      "@type": "Question",
      name: "年収交渉が通らなかった場合はどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "選択肢は3つあります。(1)非金銭条件を交渉する：リモートワークの頻度、フレックス、時短、副業可否、学習支援、入社一時金などは年収本体より調整余地が大きい項目です。(2)入社後の昇給条件を確認する：昇給・評価のサイクル、等級制度、ストックオプションの有無をオファー面談で確認し、1年後に再評価される道筋を作ります。(3)辞退も含めて比較する：提示額が市場相場を明確に下回り、改善の見込みもない場合は、他社のオファーと比較して判断しましょう。複数社で選考を進めておくことが交渉力の土台になります。",
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
    { "@type": "ListItem", position: 3, name: "女性エンジニアの年収交渉術", item: "https://women-engineer.com/articles/negotiation/" },
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
        style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "女性エンジニアの年収交渉術" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              キャリア知識
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの年収交渉術
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                タイミング・相場の調べ方・伝え方の実例【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl p-6 md:p-8"
            style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}
          >
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
              結論：交渉した人の85〜91%が年収アップに成功している
            </h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>転職時に年収交渉をした人のうち、年収アップに成功した割合は<strong>85.2%</strong>（マイナビ転職調査）。ITエンジニアに限ると<strong>90.8%</strong>（キッカケクリエイション調査）。根拠ある交渉で「下がる」ことを過度に恐れる必要はありません</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>交渉の本番は<strong>内定後のオファー面談</strong>。内定前は希望を「伝える」、内定後に「交渉する」が原則です</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>根拠にすべきは現年収ではなく<strong>市場相場</strong>。job tag（厚労省）やdodaの公開データで職種別相場を調べてから希望額を決めましょう</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>転職時の昇給額には男女差（男性平均139万円／女性平均85万円・Forkwell調査）があり、<strong>女性こそ交渉で差を取り戻せます</strong></span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: マイナビ転職「転職による年収アップの実態調査」（2024年）／キッカケクリエイション「ITエンジニアの年収交渉に関する実態調査」（2026年2月）／Forkwell「ITエンジニアの男女間賃金格差調査」（いずれも2026年6月参照）
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. データで見る年収交渉の実態（実施率・成功率）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 女性エンジニアこそ交渉すべき理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 年収交渉のタイミング比較表</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 伝え方のフレーズ例（場面別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 市場相場の調べ方（job tag・doda）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. エージェント経由の交渉の仕組み</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 交渉で避けるべきNG行動</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 年収以外に交渉・確認できる条件</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. おすすめ転職エージェント</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 実態データ */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データで見る年収交渉の実態（実施率・成功率）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「年収交渉なんてして大丈夫？」という不安に対して、まず公開調査の数字を見てみましょう。マイナビ転職の「転職による年収アップの実態調査」（2024年7〜8月、直近2年以内に転職した20〜50代会社員800名）では、転職時に年収交渉をした人は<strong>55.9%</strong>と半数を超え、交渉した人のうち<strong>85.2%が年収アップに成功</strong>しています。出典: マイナビ転職「転職による年収アップの実態調査」（2026年6月参照）
            </p>
            <p>
              ITエンジニアに絞った調査ではさらに顕著です。キッカケクリエイションの「ITエンジニアの年収交渉に関する実態調査」（2026年2月、転職経験のあるITエンジニア393名）では、<strong>74.5%が年収交渉を経験</strong>し、交渉した人の<strong>90.8%が年収アップを実現</strong>。内訳は「希望通りの額になった」34.5%、「希望額には届かなかったが上がった」56.3%でした。一方で、交渉しなかった人の理由は「印象が悪くなる不安」30.9%、「切り出し方がわからない」26.8%、「自分の市場価値がわからない」24.7%が上位。<strong>交渉の成否を分けるのはスキルや度胸ではなく、「不安」と「情報不足」</strong>だということがわかります。出典: キッカケクリエイション「ITエンジニアの年収交渉に関する実態調査」（PR TIMES、2026年6月参照）
            </p>
            <p>
              転職市場全体の追い風も確認しておきましょう。厚生労働省「令和6年雇用動向調査」によると、転職入職者のうち前職より賃金が<strong>増加した人は40.5%</strong>（うち1割以上の増加は29.4%）で、減少した29.4%を大きく上回り、増加割合は前年から3.3ポイント上昇しました。人手不足を背景に「転職で賃金が上がる」市場が続いており、交渉の通りやすい環境です。出典: 厚生労働省「令和6年雇用動向調査」（2026年6月参照）
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>年収交渉の主要データまとめ（2026年6月参照）</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>転職時に年収交渉をした人: <strong>55.9%</strong>／うち年収アップ成功: <strong>85.2%</strong>（マイナビ転職調査）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ITエンジニアの交渉経験率: <strong>74.5%</strong>／うち年収アップ実現: <strong>90.8%</strong>（キッカケクリエイション調査）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>交渉しなかった理由1位: <strong>「印象が悪くなる不安」30.9%</strong>（同調査）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>転職で賃金が増加した人: <strong>40.5%</strong>（1割以上の増加は29.4%。令和6年雇用動向調査）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>交渉したITエンジニアの転職エージェント活用率: <strong>83.7%</strong>（キッカケクリエイション調査）</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性こそ交渉すべき */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアこそ交渉すべき理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              エンジニア向けサービスForkwellの「ITエンジニアの男女間賃金格差調査」（有効回答260件）には、見過ごせないデータがあります。<strong>転職時の昇給額は男性平均139万円に対し女性平均85万円</strong>と、約54万円の差がありました。同調査ではITエンジニアの平均年収は男性600万円・女性490万円（格差81.7）で、年収800万円以上の割合は男性23%に対し女性4%。つまり男女の年収差は「同じ仕事での賃金差」だけでなく、<strong>転職・交渉のたびに積み上がる「上げ幅の差」</strong>として生まれています。出典: Forkwell「ITエンジニアの男女間賃金格差調査」（2026年6月参照）
            </p>
            <p>
              キッカケクリエイションの調査が示した「交渉しない理由」（印象悪化への不安30.9%・切り出し方がわからない26.8%・市場価値がわからない24.7%）は、いずれも準備と仕組みで解決できるものです。相場データを調べれば「市場価値がわからない」は消え、エージェントに代行してもらえば「切り出し方」と「印象悪化への不安」も回避できます。<strong>交渉した人の9割が上がっている市場で交渉しないことは、それ自体が年収を下げる選択</strong>になってしまいます。
            </p>
            <p>
              なお、女性エンジニアの年収水準そのもの（女性ITエンジニア平均419万円・女性SE約497万円など）と男女差の全体像は <a href="/articles/salary/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</a> で詳しく解説しています。20代の男女差はほぼゼロで、差が開くのは30代以降。交渉はこの差を埋めるための、最も即効性のある手段です。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 タイミング表 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収交渉のタイミング比較表</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              年収交渉には「伝えてよい場面」と「交渉してよい場面」があります。原則は、<strong>内定前は希望を「伝える」、内定後（オファー面談）に「交渉する」</strong>。場面ごとの位置づけを整理すると次の通りです。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>タイミング</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>やること</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>注意点</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>応募時（書類）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>希望年収欄に相場ベースの希望額を記載</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>求人の提示レンジから大きく外れた額は書類段階で不利になりうる</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>面接中</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>聞かれたら現年収と希望額＋根拠を簡潔に答える</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自分から金額の引き上げを切り出すのは避ける。評価が固まる前の交渉は分が悪い</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>内定後・オファー面談</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>交渉の本番。提示条件を確認し、根拠を添えて希望を伝える</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>企業は「入社してほしい」状態。回答期限の延長依頼も可能</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>エージェント経由（全期間）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>希望額と根拠を担当者に伝え、代行交渉してもらう</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>気まずさゼロで交渉できる。任せきりにせず根拠は自分で用意する</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>入社承諾後</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>原則交渉不可</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>労働条件通知書にサインした後の変更は基本的にできない。承諾前に条件を固める</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ※オファー面談で年収以外に確認すべき項目（昇給制度・評価サイクル・残業代の扱いなど）は <a href="/articles/offer-meeting/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>オファー面談で確認すべきこと完全ガイド</a> にチェックリストをまとめています。
          </p>
        </div>
      </section>

      {/* sec4 フレーズ例 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">伝え方のフレーズ例（場面別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              交渉の基本構文は「<strong>感謝＋根拠＋希望額＋相談の姿勢</strong>」です。要求ではなく相談の形にすることで、印象を損なわずに具体的な金額の話ができます。以下は場面別の一般的なフレーズ例です（金額や実績は自分の状況に置き換えてください）。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>面接で希望年収を聞かれたとき</h3>
              <p className="text-sm text-text-light leading-relaxed">
                「現在の年収は◯◯万円です。job tagや転職サービスの公開データを見ると、同職種・同程度の経験では◯◯万円前後が相場のようですので、◯◯万円を希望しています。最終的には業務内容と評価制度を踏まえてご相談できればと思います」
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>オファー面談で提示額を上げてほしいとき</h3>
              <p className="text-sm text-text-light leading-relaxed">
                「ご提示いただいた条件は真摯に受け止めています。その上でご相談ですが、◯◯の経験（例：要件定義からの一貫した担当、AWSでの設計・構築、チームリードなど）を評価いただけるのであれば、◯◯万円をご検討いただくことは可能でしょうか。職種別の公開相場でも◯◯万円程度の水準と認識しています」
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>他社のオファーと比較しているとき</h3>
              <p className="text-sm text-text-light leading-relaxed">
                「他社から◯◯万円のご提示をいただいていますが、事業内容と開発体制の面で御社を第一に考えています。条件面で再度ご検討いただける余地はありますでしょうか」※実在しないオファーを持ち出すのは信頼を失うため厳禁です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>エージェントに交渉を依頼するとき</h3>
              <p className="text-sm text-text-light leading-relaxed">
                「希望年収は◯◯万円でお願いします。根拠は、現年収◯◯万円、job tagでの同職種の相場◯◯万円、直近の◯◯の実績です。現年収ベースではなく市場相場ベースで交渉していただけますか」
              </p>
            </div>
          </div>
          <p className="text-xs text-text-light mt-4">
            ※上記はいずれも一般的な言い回しの例であり、特定の交渉結果を保証するものではありません。
          </p>
        </div>
      </section>

      {/* sec5 相場の調べ方 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">市場相場の調べ方（job tag・doda）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              交渉の説得力は「相場をどれだけ正確に押さえているか」で決まります。無料で使える公開データだけで、職種別の相場は十分に調べられます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>情報源</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>わかること</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>使い方のポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>job tag（厚生労働省・職業情報提供サイト）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>職業別の平均年収（賃金構造基本統計調査ベース）・求人賃金・有効求人倍率・年齢別賃金カーブ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>公的データなので交渉の根拠として最も使いやすい。職種名で検索し全国・都道府県別に確認</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>doda「平均年収ランキング」</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>職種別・年代別・男女別の平均年収（登録者約60万人のデータ）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>転職市場の実勢に近い。技術系（IT/通信）21職種の細分データが見られる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>レバテック等の職種別集計</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>賃金構造基本統計調査をもとにした職種・年齢・男女別の年収集計</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>女性SE約497万円など男女別の水準確認に有用</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>同職種の求人票の提示レンジ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自分と同じスキルセット・経験年数の「今の」募集条件</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>5〜10件集めてレンジの中央値を把握。スカウトの提示額も参考になる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              例えばjob tagで「システムエンジニア（Webサービス開発）」を引くと、平均年収は<strong>578.5万円</strong>（令和7年賃金構造基本統計調査の結果を加工して作成）、ハローワーク求人賃金は月額35.2万円、有効求人倍率は<strong>2.57倍</strong>（令和6年度）と表示されます。求人倍率2倍超は「1人の求職者を2社以上が取り合う」状態で、これ自体が交渉材料になります。出典: 厚生労働省・職業情報提供サイト（job tag）「システムエンジニア（Webサービス開発）」（2026年6月参照）
            </p>
            <p>
              dodaの「平均年収ランキング2025」では技術系（IT/通信）全体の平均は469万円、職種別ではプロジェクトマネジャー707万円など職種で大きく差があります。<strong>自分の職種の相場を知らずに「現年収＋50万円」のような決め方をすると、相場より低く着地するリスク</strong>があります。職種ごとの詳しい相場は <a href="/articles/salary-by-job/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性エンジニアの職種別年収比較</a> を参考にしてください。出典: doda「平均年収ランキング2025」（パーソルキャリア、2026年6月参照）
            </p>
          </div>
        </div>
      </section>

      {/* sec6 エージェント経由の仕組み */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">エージェント経由の交渉の仕組み</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「自分から金額の話を切り出すのは気まずい」という人にとって、最も現実的な解決策が転職エージェント経由の交渉です。キッカケクリエイションの調査でも、年収交渉を行ったITエンジニアの<strong>83.7%が転職エージェントを活用</strong>していました。出典: キッカケクリエイション「ITエンジニアの年収交渉に関する実態調査」（2026年6月参照）
            </p>
            <p>
              仕組みを理解しておきましょう。転職エージェント（有料職業紹介事業者）の紹介手数料は、<strong>入社者の年収に連動する成功報酬型が一般的</strong>です。つまり求職者の年収が上がるほどエージェントの報酬も増えるため、年収を上げる方向で交渉するインセンティブが構造的に組み込まれています。さらに、担当者は同じ企業に何人も紹介してきた実績から「この企業はどこまで上げ余地があるか」という内部相場を知っており、個人では得られない情報で交渉できます。
            </p>
            <p>
              ただし注意点もあります。エージェントには「早く入社を決めたい」というインセンティブも同時に働くため、任せきりにすると提示額のまま話が進むことがあります。<strong>希望額と根拠（相場データ・実績）を自分の言葉で明確に伝え、「市場相場ベースで交渉してほしい」と依頼する</strong>ことが重要です。エージェントと転職サイトの使い分け・併用方法は <a href="/articles/agent-vs-site/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>転職エージェントと転職サイトの違い</a> で詳しく解説しています。
            </p>
            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>エージェント交渉のメリット</h3>
                <p className="text-text-light text-sm leading-relaxed">気まずさなしで交渉できる／企業ごとの上げ余地・内部相場を知っている／年収が上がるほどエージェントの報酬も増える構造で利害が一致する／断られても選考への悪影響を最小化できる。</p>
              </div>
              <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>任せきりにしない</h3>
                <p className="text-text-light text-sm leading-relaxed">「早く決めたい」インセンティブも働くため、希望額・根拠・譲れない条件は必ず自分から明示する。複数エージェントを併用すると相場観の偏りも防げます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 NG行動 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">交渉で避けるべきNG行動</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              交渉した人の9割前後が年収アップに成功している一方で、やり方を間違えると信頼を損ないます。避けるべきは次の5つです。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#7c3a55" }}>1. 根拠のない金額を要求する</h3>
              <p className="text-sm text-text-light leading-relaxed">「とりあえず100万円アップ」のような相場と無関係な要求は、市場を知らない印象を与えます。job tag・dodaなどの公開データで根拠を用意してから臨みましょう。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#7c3a55" }}>2. 現年収や他社オファーを偽る</h3>
              <p className="text-sm text-text-light leading-relaxed">現年収は源泉徴収票の提出で判明することが多く、虚偽申告は内定取り消しや経歴詐称の問題になりえます。実在しない他社オファーをちらつかせるのも厳禁です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#7c3a55" }}>3. 金額の話を何度も蒸し返す</h3>
              <p className="text-sm text-text-light leading-relaxed">交渉は原則1回勝負です。回答をもらった後に何度も再交渉を持ちかけると「条件だけで会社を選ぶ人」という印象になります。希望・根拠・優先順位は1回でまとめて伝えましょう。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#7c3a55" }}>4. 内定承諾後・入社後に交渉する</h3>
              <p className="text-sm text-text-light leading-relaxed">労働条件通知書に合意した後の変更は基本的にできません。条件は承諾前にすべて確定させ、不明点はオファー面談で確認し切ることが大切です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#7c3a55" }}>5. 感情や生活事情だけを理由にする</h3>
              <p className="text-sm text-text-light leading-relaxed">「家賃が上がったので」「頑張るので」は企業が報酬を決める理由になりません。報酬の根拠はあくまで市場相場と提供できる価値（実績・スキル）に置きましょう。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec8 年収以外の交渉 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収以外に交渉・確認できる条件</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              提示年収が動かない場合でも、交渉はそこで終わりではありません。<strong>年収本体より調整余地が大きい条件</strong>は多くあります。特に長くキャリアを続けたい女性エンジニアにとって、非金銭条件は年収と同等以上の価値を持つことがあります。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 入社後の昇給制度・評価サイクルを確認する</h3>
              <p className="text-sm text-text-light leading-relaxed">
                初年度の提示額が希望に届かなくても、昇給が年2回・等級制度が明確な会社なら1〜2年で逆転できます。オファー面談で「評価・昇給のサイクル」「等級ごとの年収レンジ」「直近の昇給実績」を確認し、可能なら「1年後に◯◯を達成した場合の想定年収」を聞いておきましょう。確認項目の全リストは <a href="/articles/offer-meeting/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>オファー面談で確認すべきこと完全ガイド</a> にまとめています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. ストックオプション（SO）・賞与・手当</h3>
              <p className="text-sm text-text-light leading-relaxed">
                スタートアップでは現金年収の代わりにストックオプションが提示されることがあります。付与数だけでなく、発行済株式数に対する割合・行使条件・権利確定（ベスティング）の期間を必ず確認しましょう。賞与の算定方法（業績連動か固定か）や、リモートワーク手当・書籍購入補助・資格取得支援などの福利厚生も実質年収を左右します。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. リモート・フレックス・時短などの働き方条件</h3>
              <p className="text-sm text-text-light leading-relaxed">
                リモートワークの頻度、フレックスのコアタイム、時短勤務の適用条件、副業可否は、通勤コストとキャリア継続性に直結します。出産・育児などのライフイベントをはさんでも働き続けられる環境は、長期の生涯年収を大きく押し上げます。これらは年収交渉よりも通りやすい交渉項目でもあります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 入社日・入社一時金・引っ越し費用</h3>
              <p className="text-sm text-text-light leading-relaxed">
                現職の賞与支給を待ってからの入社日調整、入社一時金（サインオンボーナス）、転居を伴う場合の引っ越し費用補助なども相談可能な項目です。年収テーブルを動かせない企業でも、一時金なら対応できるケースがあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ転職エージェント */}
      <section id="sec9" className="py-10">
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

      {/* FAQ */}
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

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3>
              <p className="text-sm text-text-light">年代・職種別の実データと年収アップ術</p>
            </a>
            <a href="/articles/offer-meeting/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>オファー面談で確認すべきこと完全ガイド</h3>
              <p className="text-sm text-text-light">条件交渉とチェックリスト</p>
            </a>
            <a href="/articles/salary-by-job/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの職種別年収比較</h3>
              <p className="text-sm text-text-light">交渉の基準になる職種別相場一覧</p>
            </a>
            <a href="/articles/agent-vs-site/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>転職エージェントと転職サイトの違い</h3>
              <p className="text-sm text-text-light">交渉代行を含む使い分けガイド</p>
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
