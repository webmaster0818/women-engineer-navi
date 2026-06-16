import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの年代別年収【20代〜50代】実額と推移を徹底解説",
  description:
    "女性エンジニアの年代別年収を実データで解説。20代前半376万円→30代前半500万円台→40代前半600万円超→50代までの推移、男女差約110万円とその理由、ライフイベントの影響、年代ごとの年収アップ戦略を年代別年収表とともに紹介します。",
  alternates: { canonical: "/articles/salary-by-age/" },
  openGraph: {
    title: "女性エンジニアの年代別年収【20代〜50代】実額と推移を徹底解説",
    description:
      "女性エンジニアの20代〜50代の年収推移を実額で解説。男女差の理由・ライフイベントの影響・年代別の年収アップ戦略を年代別年収表とともに紹介。",
    url: "https://women-engineer.com/articles/salary-by-age/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの年代別年収【20代〜50代】実額と推移を徹底解説",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
  author: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer.com",
  },
  publisher: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer.com",
  },
  description:
    "女性エンジニアの20代〜50代の年代別年収を実額で解説。年収推移・男女差の理由・ライフイベントの影響・年代別の年収アップ戦略を年代別年収表とともに紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/salary-by-age/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性エンジニアの年収は何歳がピークですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "賃金構造基本統計調査をもとにしたシステムエンジニアの年齢別データでは、年収は45〜49歳前後でピークを迎える傾向があります。男女総計では45〜49歳で約760万円に達しますが、女性に絞ると30代後半以降に男女差が広がるため、女性のピークは40代前半〜半ばで頭打ちになりやすいのが実情です。ただし、上流工程やマネジメント、フリーランスへ進んだ人は50代でも年収を伸ばしており、キャリアの選び方次第でピークの年齢と金額は大きく変わります。",
      },
    },
    {
      "@type": "Question",
      name: "女性エンジニアと男性エンジニアの年収差はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Forkwell（Grooves）の調査では、ITエンジニア全世代の平均年収は男性約600万円・女性約490万円で、約110万円の差があります。年収800万円以上の割合は男性23%に対し女性は4%にとどまります。20代までは男女差はほとんどありませんが、30代で出産・育児によるブランクや時短勤務が重なり差が広がります。転職時の昇給幅も男性平均139万円に対し女性は85万円と差があるため、女性は意識的に年収交渉やエージェント活用で適正評価を得ることが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "30代でブランクがあると年収はどのくらい下がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "下げ幅は企業やブランク期間によりますが、産休育休や時短勤務で一時的に年収が10〜20%下がるケースは珍しくありません。30代後半では男性平均564万円に対し女性平均413万円と約150万円の差が出る年代であり、ブランクが固定化すると差が広がりやすくなります。一方、バックエンドやインフラなど設計スキルが資産になる職種では復帰後のキャッチアップが早く、フルリモート・時短可の自社開発企業へ移ることで年収を維持・回復させた事例も多くあります。",
      },
    },
    {
      "@type": "Question",
      name: "40代・50代の女性エンジニアでも年収を上げられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "上げられます。40代以降は実務スキルだけでなく、要件定義・設計などの上流工程、PM/PL、技術選定やレビューといったマネジメント・リード経験が年収を左右します。これらの経験を職務経歴書で言語化できると、年収600万〜800万円台のポジションも狙えます。また、フリーランスへ転向して月単価70万円以上（年収換算800万〜900万円）を得る女性も増えています。年齢ではなく『再現性のある実績』を示せるかが鍵です。",
      },
    },
    {
      "@type": "Question",
      name: "年代別の年収アップで一番効果が高い方法は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "20代はスキルの幅を広げて経験社数より深さを作ること、30代は需要の高い言語・クラウドへ軸足を移しつつ働き方を確保すること、40代以降は上流・マネジメント経験の言語化が効果的です。共通して効果が高いのは『転職時の年収交渉』です。女性は昇給幅が男性より小さい傾向があるため、IT特化型エージェントに市場価値を客観評価してもらい、提示年収を引き上げてもらうことで、同じスキルでも年収50万〜150万円の差が生まれます。",
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
              { label: "年代別の女性エンジニア年収" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              年収ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの年代別年収【20代〜50代】
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                20代から50代までの年収の実額と推移を実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 年代別年収の全体像（20代〜50代の推移）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 年代別年収の実額（大きな比較表）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 20代の年収と上げ方</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 30代の年収とライフイベント</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 40代・50代の年収とピークの作り方</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 男女の年収差とその対策</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 年代別の転職・年収アップ戦略</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 全体像 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年代別年収の全体像（20代〜50代の推移）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              女性エンジニアの年収は、年代によって「上がり方」がはっきり分かれます。厚生労働省の賃金構造基本統計調査によると、女性システムエンジニアの平均年収は<strong>約497万円（平均年齢36.2歳）</strong>。これは全女性労働者の平均を大きく上回り、IT職が女性にとって相対的に高収入を得やすい職種であることを示しています。
            </p>
            <p>
              年齢の推移で見ると、システムエンジニア（男女総計）は20〜24歳で<strong>約377万円</strong>からスタートし、30〜34歳で約500万円台、40〜44歳で約600万円台、<strong>45〜49歳前後でピーク（約760万円）</strong>を迎えるのが典型的なカーブです。ただしこれは男女を合わせた数字で、女性に絞ると30代後半から男性との差が広がり、カーブの傾きがゆるやかになります。
            </p>
            <p>
              ポイントは、<strong>20代までは男女でほとんど年収差がない</strong>こと。差が生まれるのは30代以降で、出産・育児というライフイベントがちょうど昇給カーブが急になる時期と重なることが大きな要因です。つまり、年収の伸びは「年齢」だけでなく「ライフイベントとどう向き合い、どんなスキル・働き方を選ぶか」で決まります。この記事では各年代の実額を示しながら、年代ごとの年収アップ戦略を具体的に解説します。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>年代別 年収カーブの特徴（女性エンジニア）</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>20代</strong>：スタートは350〜400万円台。男女差はほぼなく、スキル習得で一気に伸びる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>30代</strong>：500万円台に到達。一方でライフイベントの影響が出始め、個人差が最も大きくなる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>40代</strong>：600万円台へ。上流・マネジメント経験で大きく差がつく</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>50代</strong>：実績次第で維持・上昇。フリーランスや管理職で年収を伸ばす人も</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 年代別年収の実額（大表） */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年代別年収の実額（大きな比較表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              下表は、賃金構造基本統計調査（システムエンジニア・男女総計の年齢階級別データ）と、女性エンジニアの平均年収・男女差に関する各種調査をもとにまとめた年代別年収の目安です。女性の実額は、30代後半以降の男女差データを反映した推計を含みます（企業規模・地域・職種・スキルで変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年代</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>女性の年収目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>男女総計の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>この年代の特徴</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代前半<br />（20〜24歳）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約350〜377万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約377万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>新卒・第二新卒。男女差ほぼなし。手取り月20〜25万円が目安</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代後半<br />（25〜29歳）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約420〜460万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約470万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>実務2〜5年。スキル習得と1回目の転職で最も伸びやすい</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代前半<br />（30〜34歳）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約480〜500万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約500万円台</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>リーダー・設計を任され始める。ライフイベントの分岐点</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代後半<br />（35〜39歳）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約413〜520万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約560万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>男女差が顕著に（女性413万円／男性564万円）。働き方で大きく分岐</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代前半<br />（40〜44歳）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約540〜613万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約739万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>上流・PM経験で大きく差。女性の年収ピーク帯になりやすい</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代後半<br />（45〜49歳）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約560〜650万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約760万円（ピーク）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>管理職・スペシャリストで700万円超も。実績の言語化が鍵</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>50代<br />（50〜59歳）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約540〜650万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約740〜760万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>横ばい〜微減が一般的。フリーランス・管理職で維持・上昇も</td>
                </tr>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>大企業（1000人〜）<br />勤務の女性</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>約688万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>—</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>同じ年代でも企業規模で大きく差が出る</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ※システムエンジニア（男女総計）の年齢別データ例：20〜24歳 約377万円／30〜34歳 約647万円／40〜44歳 約739万円／45〜49歳 約760万円（賃金構造基本統計調査）。女性の実額は男女差データを反映した目安であり、職種・スキル・働き方によって上下します。
          </p>
        </div>
      </section>

      {/* sec3 20代 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">20代の年収と上げ方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              20代前半は<strong>約350〜377万円</strong>、20代後半で<strong>約420〜460万円</strong>が目安です。この年代の最大の特徴は、<strong>男女の年収差がほとんどない</strong>こと。Forkwellの調査でも、経験年数1〜5年未満では男女間に差が見られず、実力とスキルがそのまま評価に反映されやすい時期です。
            </p>
            <p>
              逆に言えば、20代は「土台作りの黄金期」。ここで何を身につけたかが、30代以降の年収カーブの傾きを決めます。やみくもに転職を繰り返すより、<strong>1社で実務を深く経験し、その後1回目の転職で年収を一気に引き上げる</strong>のが効果的なパターンです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 需要の高いスキルに早く投資する</h3>
              <p className="text-text-light text-sm leading-relaxed">Python（AI・データ）、Go、クラウド（AWS）など、30代以降に高単価へつながるスキルへ20代のうちに触れておくと、年収カーブの傾きが変わります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 「深さ」を作ってから転職する</h3>
              <p className="text-text-light text-sm leading-relaxed">1つの言語・領域で設計や運用まで経験すると、20代後半の転職で年収+50〜100万円が現実的に。経験社数より実績の深さが評価されます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. ライフプランを見据えて土台を選ぶ</h3>
              <p className="text-text-light text-sm leading-relaxed">設計力が資産になる職種（バックエンド・インフラ等）は、30代でブランクが生じても復帰しやすい。20代の選択がライフイベント耐性を決めます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 最初の年収交渉に慣れておく</h3>
              <p className="text-text-light text-sm leading-relaxed">女性は転職時の昇給幅が男性より小さい傾向（後述）。20代のうちにエージェントと組んで交渉を経験しておくと、以降の交渉が有利になります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 30代 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">30代の年収とライフイベント</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              30代前半は<strong>約480〜500万円</strong>。リーダーや設計を任され、本来であれば年収カーブが最も急になる時期です。ところが、ここで男女差が一気に開きます。30代後半では<strong>女性の平均が約413万円なのに対し、男性は約564万円</strong>と、約150万円もの差が生まれます。
            </p>
            <p>
              理由はシンプルで、<strong>出産・育児というライフイベントが、昇給カーブが急になる時期と重なる</strong>からです。産休・育休で1年以上現場を離れたり、時短勤務や非正規への切り替え、一時離職を選ぶ女性が少なくありません。勤続が途切れにくい男性に比べ昇進・昇給の機会を逃しやすく、これが年収差として表面化します。
            </p>
            <p>
              ただし、これは「女性だから下がる」のではなく「働き方の選択肢が年収に直結する」ということ。30代は、<strong>年収・スキル・働き方のどれを優先するかを意識的に設計する分岐点</strong>です。下記のように立ち回ることで、ブランクがあっても年収を維持・回復できます。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>30代でライフイベントと年収を両立する立ち回り</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① 産休・育休前に<strong>設計・上流の経験</strong>を積んでおく（復帰後のキャッチアップが早い）</li>
              <li>② <strong>フルリモート・時短可の自社開発企業</strong>へ早めに移り、ブランク中も価値が落ちない環境を確保</li>
              <li>③ 復帰のタイミングで<strong>エージェント経由の転職</strong>を検討。時短でも成果評価の企業を選ぶ</li>
              <li>④ 育休中に<strong>需要の高い言語・クラウド</strong>を学び直し、復帰＝年収アップのきっかけにする</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 40-50代 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">40代・50代の年収とピークの作り方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              40代前半は<strong>約540〜613万円</strong>、40代後半は男女総計でピーク（約760万円）を迎える年代です。女性の場合、この帯が年収のピークになりやすく、ここで<strong>700万円台に届くか、500万円台で頭打ちになるか</strong>が、それまでの経験の質で決まります。
            </p>
            <p>
              40代以降に効くのは、実装スキルそのものよりも<strong>要件定義・設計などの上流工程、PM/PLとしてのプロジェクト推進、技術選定やレビューといったリード・マネジメント経験</strong>です。これらは年齢を重ねるほど価値が上がり、年収600万〜800万円台のポジションへの入り口になります。
            </p>
            <p>
              50代は横ばい〜微減が一般的ですが、ここでも下げ止まらせる手はあります。1つは<strong>管理職・スペシャリスト（アーキテクト等）として組織の中核を担う</strong>道、もう1つは<strong>フリーランスへの転向</strong>です。経験豊富なエンジニアは月単価70万円以上（年収換算800万〜900万円）の案件も狙え、年齢よりも「再現性のある実績」が評価されます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>上流・設計を武器にする</h3><p className="text-sm text-text-light">要件定義・アーキテクチャ設計の実績は40代以降に最も評価される。年収700万円台への王道ルート。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>マネジメントで価値を上げる</h3><p className="text-sm text-text-light">PM/PL・EMとしてチームを率いた経験は、実装スキルが陳腐化しても年収を支える資産になる。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>フリーランスで単価を取る</h3><p className="text-sm text-text-light">経験者は月単価70万円以上も。リモート中心でライフステージに合わせた働き方と高収入を両立。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>実績を言語化して棚卸しする</h3><p className="text-sm text-text-light">「何を、どう改善し、どんな成果を出したか」を数字で示せると、年齢に関係なく評価される。</p></div>
          </div>
        </div>
      </section>

      {/* sec6 男女差と対策 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">男女の年収差とその対策</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Forkwell（Grooves）の調査によると、ITエンジニア全世代の平均年収は<strong>男性約600万円・女性約490万円で、約110万円の差</strong>があります。これは一般労働者の男女間賃金格差よりも大きい水準です。年収800万円以上の割合は<strong>男性23%に対し女性はわずか4%</strong>で、女性の半数超が年収500万円以下に分布しています。
            </p>
            <p>
              注目すべきは差が生まれるメカニズムです。経験年数1〜5年未満では男女差がほぼなく、<strong>5〜10年未満で格差が深刻になり、10年以上で再び縮小</strong>する傾向があります。つまり差は「能力」ではなく、ちょうどライフイベントが重なる中堅期の評価機会の差で広がっているのです。さらに、<strong>転職時の昇給幅も男性平均139万円に対し女性は85万円</strong>と、交渉の場面でも差が出ています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>対策1：市場価値を客観的に把握する</h3>
              <p className="text-text-light text-sm leading-relaxed">自分の年収が市場相場より低いことに気づいていないケースは多い。IT特化型エージェントに査定してもらい、適正額の根拠を持つことが交渉の第一歩です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>対策2：昇給幅の差を交渉で埋める</h3>
              <p className="text-text-light text-sm leading-relaxed">女性は転職時の昇給を控えめに見積もりがち。エージェント経由で年収交渉を代行してもらうと、提示額が50〜150万円変わることもあります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>対策3：成果が可視化される職場を選ぶ</h3>
              <p className="text-text-light text-sm leading-relaxed">勤務時間ではなくアウトプットで評価される環境なら、時短でも実力が反映され、ライフイベントによる年収ダウンを最小化できます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>対策4：中堅期に評価機会を逃さない</h3>
              <p className="text-text-light text-sm leading-relaxed">格差が広がる5〜10年目こそ、設計・リード経験を積み実績を残すことが重要。ここでの一手が40代以降の年収を左右します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 年代別の転職・年収アップ戦略 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年代別の転職・年収アップ戦略</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>年代ごとに「年収を上げる打ち手」は変わります。自分のフェーズに合った一手を選ぶのが近道です。</p>
          </div>
          <div className="space-y-4">
            {[
              ["20代", "スキルの深さを作り、1回目の転職で引き上げる", "需要の高い言語・クラウドに早く投資。1社で設計・運用まで経験してから転職し、+50〜100万円を狙う。男女差がない時期に土台を固める。"],
              ["30代前半", "ライフイベント前に上流経験＋働き方を確保", "産休育休前に設計・リード経験を積み、フルリモート/時短可の自社開発企業へ。ブランク中も価値が落ちない環境を先に用意する。"],
              ["30代後半", "復帰＝年収アップのタイミングに変える", "育休中に高需要スキルを学び直し、復帰時にエージェント経由で転職。成果評価の企業を選び、男女差が広がる前に手を打つ。"],
              ["40代", "上流・マネジメント経験を言語化して700万円台へ", "要件定義・PM/PL・技術選定の実績を数字で棚卸し。年収600〜800万円台のポジションへ。ピーク帯で最大化する。"],
              ["50代", "管理職かフリーランスで下げ止まらせる", "アーキテクト・管理職として中核を担うか、月単価70万円以上のフリーランスへ。年齢より再現性のある実績で勝負する。"],
            ].map(([age, title, desc], i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
                <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>{age}</span>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>年代別の年収アップで効果が最も高いのは「転職時の年収交渉」です。女性は昇給幅が小さくなりがちなため、市場価値を客観評価し交渉を代行してくれるエージェントの活用が重要。IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術を理解したアドバイザーが市場価値を客観評価し、年代に合った年収レンジの求人を提案。年収交渉にも強く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。男女差が出やすい昇給幅をしっかり交渉してくれるため、適正年収での転職を目指す中堅層に向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモート・時短など、ライフイベントと年収を両立させたい女性向けの求人が中心。30代の働き方の分岐点で、条件を絞り込んで探したい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで年収が変わる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、あなたの年代・キャリアに合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
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
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの全体像</p></a>
            <a href="/articles/salary-by-job/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>職種別の女性エンジニア年収</h3><p className="text-sm text-text-light">職種で変わる年収の違いを比較</p></a>
            <a href="/articles/age-30s/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>30代女性エンジニアの転職</h3><p className="text-sm text-text-light">ライフイベントとキャリアの両立</p></a>
            <a href="/articles/negotiation/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>年収交渉の進め方</h3><p className="text-sm text-text-light">男女差を埋める交渉のコツ</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">あなたの年代に合った年収アップを</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。市場価値を客観評価してもらい、適正な年収での転職を実現しましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
