import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアが年収1000万を目指す方法｜届く職種・スキル・5つの戦略",
  description:
    "女性エンジニアが年収1000万円を実現する方法を実データで解説。1000万に届く職種（SRE・データサイエンティスト・ITコンサル・EM・高単価フリーランス・外資）、必要なスキルと経験年数、達成ルート、女性のための5つの戦略、現実的な割合まで具体的に紹介します。",
  alternates: { canonical: "/articles/salary-1000man/" },
  openGraph: {
    title: "女性エンジニアが年収1000万を目指す方法｜届く職種・スキル・5つの戦略",
    description:
      "女性エンジニアが年収1000万円に到達できる職種・必要スキル・達成ルート・5つの戦略を実データで徹底解説。",
    url: "https://women-engineer.com/articles/salary-1000man/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアが年収1000万を目指す方法｜届く職種・スキル・5つの戦略",
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
    "女性エンジニアが年収1000万円に到達できる職種・必要スキル・達成ルート・5つの戦略を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/salary-1000man/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性エンジニアで年収1000万円を超えている人の割合はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "エンジニア全体でも年収1000万円超は少数派で、30代エンジニアでは1〜2%程度とされます。女性に限ると母数自体が小さく（IT人材の女性比率は約22%）、1000万円到達者はさらに希少です。ただしこれは「女性だから無理」という意味ではありません。SREやデータサイエンティスト、ITコンサル、エンジニアリングマネージャー、外資、高単価フリーランスなど、1000万円が現実的なレンジに入る職種に身を置けば、性別に関係なく到達は十分可能です。実力で評価される領域を選ぶことが最大のポイントです。",
      },
    },
    {
      "@type": "Question",
      name: "女性エンジニアが年収1000万を目指すなら、どの職種が一番近道ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "中心レンジが1000万円に最も近いのはエンジニアリングマネージャー（EM、年収目安900〜1200万円）とITコンサルタント（シニア・マネージャー級で1000〜1700万円）です。技術を深めたいならSRE（シニアで850〜1200万円、外資はさらに上）、データ志向ならデータサイエンティスト、独立志向なら高単価フリーランスが有力です。自分が「マネジメントで伸びるか」「専門性で伸びるか」を見極め、得意な軸に絞るのが近道です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験や20代の女性でも年収1000万を狙えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "未経験スタートから即1000万円は現実的ではありませんが、20代での到達例は存在します。特に外資系テック企業やコンサルファームは実力主義で、優秀であれば20代でマネージャーに昇進し1000万円を超える人もいます。まずは需要の高い言語・クラウド・データなどの専門性を3〜5年で固め、上流・マネジメント・外資・独立のいずれかにステップアップするのが王道です。20代のうちは「年収」より「市場価値が上がる経験が積めるか」で会社を選ぶと、結果的に最短ルートになります。",
      },
    },
    {
      "@type": "Question",
      name: "外資系エンジニアとフリーランスは、どちらが1000万に届きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "どちらも1000万円が射程に入りますが、性質が異なります。外資系テック企業は基本給に加えRSU（自社株）やサインオンボーナスが乗り、トータルで2000万円超になるケースもある一方、英語力と高い技術力・選考突破が前提です。高単価フリーランスは月単価80〜100万円超（年収換算1000万円前後）が見込め、SREやEM級では月100万円超の案件もありますが、案件獲得や事務・社会保険を自分で担う必要があります。安定と最大値の外資、自由度と早期到達のフリーランス、という整理で自分の優先順位に合う方を選びましょう。",
      },
    },
    {
      "@type": "Question",
      name: "ライフイベントと両立しながら年収1000万を目指すのは無理がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "無理ではありません。鍵は「時間の長さ」ではなく「単価・専門性・上流度」で勝負することです。SRE・データ・クラウド設計などはリモート求人が多く成果が可視化されやすいため、時短でも高い評価を得やすい領域です。高単価フリーランスやフラクショナルな業務委託EMなら、稼働日数を調整しながら高単価を維持する働き方も可能です。長時間労働で積み上げるのではなく、希少な専門性で単価を上げる戦略にすれば、育児や介護と両立しながら1000万円を狙えます。エージェントに働き方の条件を伝えて、両立できる高年収求人を絞り込むのが近道です。",
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
              { label: "女性エンジニアが年収1000万を目指す方法" },
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
              女性エンジニアが年収1000万を目指す方法
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                届く職種・必要スキル・達成ルートと5つの戦略を実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 年収1000万のリアル（達成できる割合）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 1000万に届く職種・ルート（一覧表）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 必要なスキルと経験年数</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 女性が1000万を目指す5つの戦略</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 外資・フリーランスという選択</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 年収を上げる転職事例</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. よくある質問</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 関連記事</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 リアル・割合 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収1000万のリアル（達成できる割合）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              まず現実から。エンジニア全体でも年収1000万円超は<strong>少数派</strong>で、30代エンジニアで1000万円を超える割合は<strong>1〜2%程度</strong>とされます。女性に絞ると、そもそもIT人材の女性比率が約<strong>22%</strong>（JISA正会員企業で22.6%）と母数が小さく、1000万円到達者はさらに希少です。
            </p>
            <p>
              ただし、これは「女性だから難しい」という話ではありません。職種別の平均を見ると、ソフトウェア作成者（プログラマー）の女性平均は約458万円である一方、システムコンサルタント・設計者の女性平均は約561万円と、<strong>担当する工程・職種によって100万円以上の差</strong>が生まれています。つまり、1000万円に届くかどうかは「性別」ではなく<strong>「どの職種・どのレイヤーで働くか」</strong>でほぼ決まります。
            </p>
            <p>
              重要なのは、コンサルファームや外資系テックのように<strong>年齢・性別に関係なく成果で評価される領域</strong>を選ぶこと。実際、20代でマネージャーに昇進し1000万円以上を得ている女性も存在します。本記事では、その「届く場所」と「届くための具体的なルート」を順に解説します。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>年収1000万に到達するための3条件</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>高年収レンジの職種</strong>に身を置く（SRE / データ / コンサル / EM / 外資 / 高単価フリーランス）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>希少な専門性</strong>または<strong>上流・マネジメント</strong>のどちらかで突き抜ける</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>市場価値を正しく評価</strong>してくれる環境（実力主義の企業・適正単価の案件）に移る</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 職種・ルート表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">1000万に届く職種・ルート（一覧表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              年収1000万円が「現実的なレンジ」に入る代表的な職種とルートをまとめました。中心レンジが1000万円に最も近いのは<strong>エンジニアリングマネージャー（EM）</strong>と<strong>ITコンサルタント</strong>、技術で突き抜けるなら<strong>SRE</strong>や<strong>外資系エンジニア</strong>です（金額は各種調査をもとにした目安）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>職種・ルート</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年収レンジの目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>1000万への近道</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>エンジニアリングマネージャー（EM）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>900〜1200万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>開発力＋チーム/組織のマネジメント。中心レンジが1000万に最も近い</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ITコンサルタント</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>シニア/マネージャー級 1000〜1700万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>上流（IT戦略・要件定義）×経営層提案。30歳前後でマネージャー昇進例も</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>SRE / DevOps</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>シニアで850〜1200万円（外資はさらに上）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>クラウド×IaC×Kubernetesの大規模運用。フリーランス平均は約991万円</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データサイエンティスト</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>上位層で1000万円超</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>機械学習×ビジネス成果の実績。外資なら20代到達例も</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>外資系テックエンジニア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基本給＋RSUでトータル2000万円超も</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>英語力＋高い技術力。実力主義で性別・年齢に依存しにくい</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>高単価フリーランス</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月80〜100万円超（年収換算1000万円前後）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>EM/SRE級は月100万円超の案件も。稼働調整しながら高単価維持が可能</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            一般的なプログラマー（ソフトウェア作成者）の平均は400万円台で、ここに留まると1000万円は遠くなります。<strong>「上流に上がる」「専門性で希少になる」「マネジメントに広げる」「外資・独立で単価を上げる」</strong>のいずれかへ意識的に動くことが、1000万円への分岐点です。
          </p>
        </div>
      </section>

      {/* sec3 スキルと経験年数 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルと経験年数</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              1000万円レンジの職種は、いずれも<strong>「土台となる開発経験（3〜5年）」＋「希少性を生む専門スキル」</strong>の組み合わせで成り立っています。職種ごとに求められるものを整理します。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>職種</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>必要スキル</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>経験年数の目安</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>SRE / DevOps</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>AWS/GCP/Azure設計運用、Terraform等のIaC、Docker/Kubernetesの大規模運用</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>シニア（7年以上）で1000万円が視野</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データサイエンティスト</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Python、統計・機械学習、SQL、ビジネス課題への翻訳力</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>3年以上＋明確な成果実績（外資なら20代も）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ITコンサルタント</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>要件定義・IT戦略立案、業務知識、経営層への提案・折衝力</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>シニア/マネージャー級（30歳前後の昇進例あり）</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>エンジニアリングマネージャー</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>技術力＋ピープルマネジメント、採用・評価、プロジェクト推進</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>開発5年以上＋リード/マネジメント経験</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>外資系エンジニア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>高い技術力＋ビジネス英語、アルゴリズム/設計の選考対策</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>3〜5年＋強みの専門領域</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            共通して効くのが<strong>クラウド（AWS/GCP）</strong>と<strong>上流・設計の経験</strong>です。SREに必要なAWS設計やIaCは、データ基盤・コンサル・外資のいずれでも評価されます。「需要の高い言語・クラウドで土台を固め、希少スキルを1つ深掘りする」のが、どの職種でも1000万円への共通ルートです。
          </p>
        </div>
      </section>

      {/* sec4 女性が目指す5つの戦略 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が1000万を目指す5つの戦略</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              ここまでの職種・スキルを踏まえ、女性が1000万円に近づくための具体的な戦略を5つに整理します。<strong>長時間労働で積み上げるのではなく、単価・専門性・上流度で勝負する</strong>のが共通の考え方です。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["戦略1", "専門性で希少な存在になる", "SRE・データサイエンス・セキュリティなど、人材が不足している領域を1つ深掘りする。希少性が高いほど時短・リモートでも高評価を得やすく、女性比率が低い領域ほど突き抜けやすい。"],
              ["戦略2", "上流（要件定義・IT戦略）に上がる", "プログラマーの平均458万円に対し、コンサル・設計の女性平均は561万円。経営課題やIT戦略に関わる上流工程ほど単価が高い。実装だけでなく『何を作るかを決める側』へ移る。"],
              ["戦略3", "マネジメント（EM）に広げる", "開発力にピープルマネジメントを足すとEM（900〜1200万円）が射程に。成果が可視化される領域なので、勤務時間の長さではなくチームの成果で評価されやすい。"],
              ["戦略4", "外資・実力主義の環境を選ぶ", "外資系テックやコンサルファームは年齢・性別ではなく成果で評価する文化。RSU込みでトータル2000万円超の例もあり、20代女性のマネージャー昇進・1000万円到達例も存在する。"],
              ["戦略5", "独立して単価を自分で決める", "高単価フリーランスなら月80〜100万円超（年収換算1000万円前後）。フラクショナルな業務委託EMなど、稼働日数を調整しながら高単価を維持し、ライフイベントと両立する道もある。"],
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
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>5つの戦略を貫く一本の軸</h3>
            <p className="text-sm text-text-light leading-relaxed">
              いずれの戦略も、<strong>「替えがきかない人になる」</strong>という一点に収束します。女性比率が低い領域ほど、希少性で価値が際立ちます。育児・介護で稼働に制約があっても、専門性と単価で勝負すれば1000万円は十分に狙えます。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 外資・フリーランス */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">外資・フリーランスという選択</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              日系企業の昇給ペースで1000万円に届くには時間がかかりがちです。早期到達を狙うなら、<strong>外資</strong>と<strong>フリーランス</strong>という2つの近道を検討する価値があります。性質が大きく異なるので、自分の優先順位で選びましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>外資系テック企業</h3>
              <p className="text-text-light text-sm leading-relaxed mb-3">基本給に加え<strong>RSU（自社株）やサインオンボーナス</strong>が乗り、トータルコンペンセーションが2000万円を超えるケースもあります。実力主義で年齢・性別に依存しにくく、優秀なら20代で1000万円に届く可能性も。</p>
              <p className="text-text-light text-sm leading-relaxed"><strong>条件:</strong> ビジネス英語、アルゴリズム/システム設計の選考対策、専門領域での明確な実績。腰を据えてキャリアの最大値を取りに行きたい人向け。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>高単価フリーランス</h3>
              <p className="text-text-light text-sm leading-relaxed mb-3">月単価80〜100万円超（年収換算1000万円前後）が目安。SREやEM級では<strong>月100万円超の案件</strong>もあり、フリーランスSREの平均年収は約991万円。稼働日数を調整しながら高単価を維持できます。</p>
              <p className="text-text-light text-sm leading-relaxed"><strong>条件:</strong> 即戦力の専門スキル、案件獲得力、税務・社会保険の自己管理。早期到達と働き方の自由度を重視する人向け。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            どちらも「専門性が単価に直結する」点は同じです。まずは社員として希少スキルを固め、そのうえで外資への転職、または独立を選ぶ――という順序が、リスクを抑えながら1000万円に届く堅実なルートです。
          </p>
        </div>
      </section>

      {/* sec6 転職事例 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収を上げる転職事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・インフラ→SRE）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SIerのインフラ運用 / 年収520万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SaaS企業のSRE / 年収920万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">AWSとTerraform（IaC）、Kubernetesの運用経験を業務外でも積み上げ、SREへ職種転換。希少性の高い領域に移ったことで、時短勤務を維持しつつ年収400万円アップとフルリモートを同時に実現しました。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（30代後半・SE→ITコンサル）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">業務系SE（実装中心）/ 年収600万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">ITコンサル（要件定義・IT戦略）/ 年収1080万円</p></div>
              </div>
              <p className="text-sm text-text-light">実装スキルに加え、要件定義・上流での顧客折衝の実績を職務経歴書で整理。実力主義のコンサルファームに上流人材として転職し、シニア級として1000万円の大台を突破しました。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Eさん（40代・テックリード→独立EM）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">独立前</p><p className="text-sm font-bold">自社開発のテックリード / 年収780万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>独立後</p><p className="text-sm font-bold">業務委託EM（月単価100万円）/ 年収換算1100万円超</p></div>
              </div>
              <p className="text-sm text-text-light">開発リード＋組織マネジメントの経験を武器に、フラクショナルな業務委託EMとして独立。月100万円前後の案件を組み合わせ、稼働日数を調整しながら育児と両立しつつ1000万円超を実現しています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>年収1000万円を狙うなら、ハイクラス求人と年収交渉に強いエージェントの活用が近道です。技術を正当に評価してもらうIT特化型と、働き方を両立させる女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーがSRE・データ・クラウドなど高年収領域の技術スタックを理解した提案をしてくれます。年収交渉にも強く、リモート求人も多数です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。EMやハイクラス求人にも対応し、スピーディーなマッチングと年収交渉力に定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。高年収と働きやすさを両立させたい人に最適で、条件で絞り込みやすいのが強みです。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで年収交渉の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分の市場価値を客観的に評価してくれるアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
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
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの基本</p></a>
            <a href="/articles/salary-by-job/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>職種別の年収比較</h3><p className="text-sm text-text-light">どの職種が高年収か一覧で解説</p></a>
            <a href="/articles/it-consultant/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ITコンサルタント転職ガイド</h3><p className="text-sm text-text-light">上流で1000万を狙える職種</p></a>
            <a href="/articles/freelance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>フリーランスという働き方</h3><p className="text-sm text-text-light">高単価で独立する道</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">年収1000万への一歩を踏み出しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたの市場価値と最短ルートを一緒に見極めましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
