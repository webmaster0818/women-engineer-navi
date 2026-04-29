import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "エンジニア転職のコーディングテスト対策｜頻出問題と解き方ガイド",
  description:
    "エンジニア転職のコーディングテスト対策ガイド。頻出のアルゴリズム問題・データ構造・解法パターンを徹底解説。LeetCode・AtCoderの活用法や企業別の出題傾向も紹介します。",
  alternates: { canonical: "/articles/coding-test/" },
  openGraph: {
    title: "エンジニア転職のコーディングテスト対策｜頻出問題と解き方ガイド",
    description: "エンジニア転職のコーディングテスト対策ガイド。頻出のアルゴリズム問題・データ構造・解法パターンを徹底解説。",
    url: "https://women-engineer-navi.pages.dev/articles/coding-test/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "エンジニア転職のコーディングテスト対策｜頻出問題と解き方ガイド",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  description: "エンジニア転職のコーディングテスト対策ガイド。頻出のアルゴリズム問題・データ構造・解法パターンを徹底解説。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/articles/coding-test/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "コーディングテストはどの企業で実施されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web系企業やメガベンチャーの多くがコーディングテストを実施しています。特にサイバーエージェント・メルカリ・LINE・楽天・DeNAなどの大手は必ずと言っていいほど実施します。SIerでは技術面接はありますが、コーディングテストの実施は企業によって異なります。転職エージェントに事前に確認するのがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "コーディングテストの言語は何がおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Python・JavaScript（TypeScript）・Javaが最もおすすめです。Pythonは記述量が少なく素早く解答できるため、コーディングテストでは特に有利です。多くの企業は使用言語を自由に選べるため、自分が最も得意な言語を使いましょう。",
      },
    },
    {
      "@type": "Question",
      name: "コーディングテストの準備期間はどのくらい必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "基本的なアルゴリズムの知識がある場合は2〜3週間、ゼロから始める場合は1〜2ヶ月の準備期間を見込みましょう。毎日1〜2問のペースで練習すれば、2週間で基本的なパターンをカバーできます。重要なのは毎日コンスタントに取り組むことです。",
      },
    },
    {
      "@type": "Question",
      name: "LeetCodeとAtCoderのどちらがおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "転職のコーディングテスト対策にはLeetCodeがおすすめです。実際の面接で出題されるタイプの問題が多く、企業別の出題傾向も確認できます。AtCoderは競技プログラミング寄りですが、アルゴリズムの基礎力を鍛えるのに最適です。両方を並行して活用するのが理想的です。",
      },
    },
    {
      "@type": "Question",
      name: "コーディングテストで落ちてしまった場合はどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "まず落ちた原因を分析しましょう。時間切れなら解答スピードの改善、特定の分野が弱いなら集中的な学習が必要です。多くの企業では一定期間（3〜6ヶ月）後に再受験が可能です。その間に弱点を克服し、再挑戦しましょう。転職エージェントにフィードバックを確認してもらうのも効果的です。",
      },
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer-navi.pages.dev" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer-navi.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "コーディングテスト対策", item: "https://women-engineer-navi.pages.dev/articles/coding-test/" },
  ],
};

export default function CodingTestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "コーディングテスト対策" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#f97066" }}>面接・選考</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              エンジニア転職のコーディングテスト対策
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">頻出問題と解き方ガイドを徹底解説</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月29日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. コーディングテストとは</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 頻出データ構造の解説</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 頻出アルゴリズムの解説</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 解法パターン別攻略法</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 企業別の出題傾向</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 練習の進め方とスケジュール</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. おすすめ練習サイト</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. 本番で使えるテクニック</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. 言語別のポイント</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* コーディングテストとは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">コーディングテストとは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              コーディングテストは、エンジニア採用において候補者のプログラミング能力を評価するための技術試験です。与えられた問題を制限時間内にプログラムで解決する形式が一般的で、アルゴリズムとデータ構造の知識が問われます。
            </p>
            <p>
              2026年現在、Web系企業やメガベンチャーの約80%がコーディングテストを採用選考に取り入れています。オンラインで実施されることがほとんどで、HackerRank・Codility・自社プラットフォームなどが使用されます。
            </p>
            <p>
              テストの難易度は企業によって異なりますが、一般的にはLeetCodeのEasy〜Medium程度の問題が中心です。一部の企業ではHard相当の難問も出題されますが、全問正解を求められるわけではなく、部分点が得られるケースも多いです。
            </p>
            <p>
              コーディングテストは事前に対策をすれば確実にスコアが向上する選考ステップです。アルゴリズムの基礎を学び、練習問題を繰り返し解くことで、パターンを認識する力が身につきます。継続的な準備が成功の鍵です。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>コーディングテストの形式</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>オンライン形式：自宅で制限時間内に解答（60〜120分が多い）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>問題数：2〜4問が一般的</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>使用言語：多くの場合自由に選択可能</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>評価基準：正答数・計算量の効率性・コードの品質</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>テストケース：公開テストと非公開テストで評価</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 頻出データ構造 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">頻出データ構造の解説</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>コーディングテストで頻出するデータ構造を理解し、適切に使い分けることが高得点への第一歩です。</p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { name: "配列・文字列", desc: "最も基本的なデータ構造。ソート・検索・部分配列の操作が頻出。二分探索・スライディングウィンドウ・Two Pointers手法と組み合わせて出題されることが多い。", freq: "非常に高い" },
              { name: "ハッシュマップ（辞書）", desc: "キーと値のペアを高速に検索・挿入できるデータ構造。出現回数のカウント、重複検出、グルーピングなど幅広く使用される。O(1)の検索速度が特徴。", freq: "非常に高い" },
              { name: "スタック・キュー", desc: "スタックはLIFO（後入れ先出し）、キューはFIFO（先入れ先出し）のデータ構造。括弧の対応確認・BFS・逆ポーランド記法などで使用される。", freq: "高い" },
              { name: "連結リスト", desc: "ノードが次のノードへの参照を持つデータ構造。リストの反転・環の検出・マージなどが頻出。Two Pointers手法（fast/slow pointer）と組み合わせることが多い。", freq: "高い" },
              { name: "二分木・BST", desc: "各ノードが最大2つの子を持つ木構造。前順・中順・後順の走査、深さ優先探索（DFS）・幅優先探索（BFS）の実装が求められる。再帰的な解法が基本。", freq: "高い" },
              { name: "グラフ", desc: "ノードとエッジで構成されるデータ構造。最短経路・連結成分・トポロジカルソートなどが出題される。隣接リストでの表現とBFS/DFSの実装が重要。", freq: "中程度" },
              { name: "ヒープ（優先度付きキュー）", desc: "最大値・最小値を効率的に取得できるデータ構造。Top K問題・中央値の取得・スケジューリング問題などで使用される。", freq: "中程度" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold" style={{ color: "#0891b2" }}>{item.name}</h3>
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: "#ecfeff", color: "#0891b2" }}>出題頻度: {item.freq}</span>
                </div>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 頻出アルゴリズム */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">頻出アルゴリズムの解説</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>コーディングテストで頻出するアルゴリズムのパターンを理解しておくと、初見の問題でも適切なアプローチを見つけやすくなります。</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            {[
              { name: "Two Pointers", desc: "2つのポインタを使って配列や文字列を効率的に走査する手法。ソート済み配列の合計値検索、回文判定、水量問題などに使用。", color: "#0891b2" },
              { name: "スライディングウィンドウ", desc: "固定長または可変長のウィンドウを配列上でスライドさせて解く手法。部分配列の最大和、最長部分文字列の検索などに効果的。", color: "#7c3aed" },
              { name: "二分探索", desc: "ソート済み配列で高速に検索する手法。O(log n)の計算量。探索空間を半分に絞り込むことで効率的に解を見つける。", color: "#0891b2" },
              { name: "BFS/DFS", desc: "グラフや木の探索アルゴリズム。BFSは最短経路、DFSは全探索に適する。再帰またはスタック/キューで実装。", color: "#7c3aed" },
              { name: "動的計画法（DP）", desc: "大きな問題を小さな部分問題に分割し、結果をメモ化して解く手法。最長増加部分列・ナップサック問題・経路数の計算などに使用。", color: "#0891b2" },
              { name: "貪欲法", desc: "各ステップで局所的に最適な選択を繰り返す手法。区間スケジューリング・コイン問題（特定条件下）などに適用。", color: "#7c3aed" },
              { name: "バックトラッキング", desc: "解の候補を探索し、条件を満たさない場合に戻って別の候補を試す手法。順列・組み合わせの列挙、数独の解法などに使用。", color: "#0891b2" },
              { name: "分割統治法", desc: "問題を小さな部分問題に分割し、各部分を再帰的に解いて統合する手法。マージソート・クイックソートが代表例。", color: "#7c3aed" },
            ].map((algo, i) => (
              <div key={i} className="rounded-xl border bg-white p-5" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-base font-bold mb-2" style={{ color: algo.color }}>{algo.name}</h3>
                <p className="text-sm text-text-light leading-relaxed">{algo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 解法パターン */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">解法パターン別攻略法</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>問題を見たときに、どの解法パターンを適用すべきかを判断する力が重要です。以下のキーワードに注目してパターンを見極めましょう。</p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">問題のキーワード</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">適用パターン</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">典型的な問題例</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["「ソート済み配列」「2つの合計」", "Two Pointers", "Two Sum（ソート済み）"],
                  ["「連続部分配列」「最長」", "スライディングウィンドウ", "最長重複なし部分文字列"],
                  ["「最小・最大を求めよ」「O(log n)」", "二分探索", "回転ソート配列の探索"],
                  ["「最短経路」「レベル順」", "BFS", "迷路の最短距離"],
                  ["「すべての組み合わせ」「パス列挙」", "DFS/バックトラッキング", "N-Queens問題"],
                  ["「最適解」「部分問題の重複」", "動的計画法", "コイン問題"],
                  ["「区間」「局所最適で全体最適」", "貪欲法", "会議室の割り当て"],
                  ["「出現回数」「重複検出」", "ハッシュマップ", "Anagram検出"],
                ].map(([keyword, pattern, example], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{keyword}</td>
                    <td className="px-4 py-3 text-sm font-bold" style={{ borderBottom: "1px solid #d1dce5", color: "#0891b2" }}>{pattern}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 企業別出題傾向 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">企業別の出題傾向</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>企業によってコーディングテストの難易度や形式が異なります。志望企業の傾向を事前に把握し、効率的に対策しましょう。</p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { type: "メガベンチャー", desc: "LeetCode Medium〜Hard相当の問題が多い。アルゴリズムの最適化が求められ、計算量の意識が重要。制限時間は60〜90分で2〜3問。", examples: "サイバーエージェント・メルカリ・LINE・楽天", color: "#0891b2" },
              { type: "スタートアップ", desc: "実務に近い課題（API設計・データ処理等）が出されることが多い。アルゴリズムよりも実装力とコードの品質が重視される傾向。", examples: "各種SaaS企業・フィンテック企業", color: "#7c3aed" },
              { type: "外資系企業", desc: "LeetCode Hard相当の問題も出題される。複数回のコーディング面接があり、ホワイトボードコーディングが実施されることも。", examples: "Google・Amazon・Microsoft日本法人", color: "#f97066" },
              { type: "ゲーム会社", desc: "アルゴリズムに加え、数学的な問題（幾何・確率等）が出されることがある。パフォーマンスへの意識も評価ポイント。", examples: "Cygames・DeNA・グリー", color: "#10b981" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: item.color }}>{item.type}</h3>
                <p className="text-sm text-text-light leading-relaxed mb-2">{item.desc}</p>
                <p className="text-xs text-text-light">代表企業: {item.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 練習の進め方 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">練習の進め方とスケジュール</h2>
          <div className="space-y-4 mt-4">
            {[
              { week: "第1週", title: "基礎固め", desc: "配列・文字列・ハッシュマップを使ったEasy問題を毎日2問解きます。LeetCodeのTop Interview Questionsから始めるのがおすすめです。計14問を目標に、各問題の解法を理解することが重要です。" },
              { week: "第2週", title: "パターン習得", desc: "Two Pointers・スライディングウィンドウ・二分探索のパターンをEasy〜Mediumで練習します。各パターンで3〜4問ずつ解き、パターン認識力を養います。計14問を目標。" },
              { week: "第3週", title: "応用力強化", desc: "BFS/DFS・動的計画法・バックトラッキングのMedium問題に挑戦します。解けなかった問題は解説を読んで理解し、翌日に再挑戦します。計10〜14問を目標。" },
              { week: "第4週", title: "模擬テスト", desc: "LeetCodeの模擬面接やAtCoderのバーチャルコンテストを使って、時間制限ありの練習を行います。本番と同じ環境で3〜5回の模擬テストを実施し、時間配分の感覚を身につけます。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>{item.week}</span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめ練習サイト */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ練習サイト</h2>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            {[
              { name: "LeetCode", desc: "世界最大のコーディング練習プラットフォーム。2,000問以上の問題を収録。企業別の出題傾向やDiscussionでの解法共有が充実。Premium版では面接で実際に出された問題が確認可能。", color: "#0891b2" },
              { name: "AtCoder", desc: "日本発の競技プログラミングサイト。日本語の問題文が多く、初心者にも取り組みやすい。ABCコンテストのA〜C問題がコーディングテスト対策に適している。", color: "#7c3aed" },
              { name: "HackerRank", desc: "多言語対応の練習サイト。実際のコーディングテストでも使用されることが多いため、UIに慣れておくメリットがある。Problem Solving分野がおすすめ。", color: "#f97066" },
              { name: "Codility", desc: "企業のコーディングテストプラットフォームとしても広く使われている。Lessons機能で体系的にアルゴリズムを学べる。実際のテスト環境に近い形で練習可能。", color: "#10b981" },
            ].map((site, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: site.color }}>{site.name}</h3>
                <p className="text-sm text-text-light leading-relaxed">{site.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 本番テクニック */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">本番で使えるテクニック</h2>
          <div className="space-y-4 mt-4">
            {[
              { title: "まず問題文を丁寧に読む", desc: "問題文の制約条件（入力範囲・データ型・計算量の制限）を確認します。制約からどの程度の計算量が許されるかを見積もり、適切なアルゴリズムを選択します。N ≤ 10^5ならO(N log N)以下が目安です。" },
              { title: "簡単な問題から着手する", desc: "複数問題がある場合、簡単そうな問題から解くのが鉄則です。確実に解ける問題で得点を確保してから、難しい問題に挑戦しましょう。時間配分を意識し、1問に固執しすぎないことが重要です。" },
              { title: "まず愚直な解法を書く", desc: "最適解が思い浮かばない場合、まず計算量が大きくても正しい解法（ブルートフォース）を書きます。部分点が得られるケースも多く、その上で最適化を考えることで冷静に取り組めます。" },
              { title: "エッジケースを確認する", desc: "空配列・1要素・最大値・負の数・重複値などのエッジケースをテストします。本番のテストケースではこれらのエッジケースが含まれることが多いため、見落としがないか最終確認しましょう。" },
              { title: "コードにコメントを書く", desc: "思考プロセスや各処理の意図をコメントとして残します。採点者がコードの意図を理解しやすくなり、正解でなくても部分評価に繋がることがあります。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>{i + 1}. {item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 言語別ポイント */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">言語別のポイント</h2>
          <div className="grid gap-6 md:grid-cols-3 mt-4">
            {[
              { lang: "Python", points: ["記述量が少なく解答が速い", "内蔵のcollections・heapqが便利", "リスト内包表記で簡潔に書ける", "実行速度が遅いのがデメリット", "計算量が厳しい問題は注意"], color: "#0891b2" },
              { lang: "JavaScript/TS", points: ["Web系企業との親和性が高い", "Mapオブジェクトが高速", "配列メソッドが豊富", "BigIntで大きな数に対応", "sort()のデフォルト動作に注意"], color: "#7c3aed" },
              { lang: "Java", points: ["型安全で大規模問題に強い", "PriorityQueueが標準搭載", "SIer系企業との親和性が高い", "コード量がやや多くなる", "Stream APIで簡潔に書ける場合も"], color: "#f97066" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: item.color }}>{item.lang}</h3>
                <ul className="text-sm text-text-light space-y-1">
                  {item.points.map((point, j) => (
                    <li key={j}>- {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d1dce5" }}>
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                  <span><span style={{ color: "#0891b2" }} className="mr-2">Q.</span>{faq.name}</span>
                  <span className="text-text-light group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                  <p className="pt-4"><span style={{ color: "#f97066" }} className="font-bold mr-2">A.</span>{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* よくある失敗と対策 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある失敗と対策</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              コーディングテストで多くの受験者がやりがちな失敗パターンとその対策を紹介します。事前に知っておくことで、本番でのミスを防ぎましょう。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { title: "時間配分のミス", desc: "最初の問題に時間をかけすぎて、後半の問題に手が回らないケース。各問題に時間制限を設定し、制限時間を超えたら一旦次の問題に移りましょう。すべての問題を見てから解く順番を決めるのも有効です。", color: "#f97066" },
              { title: "エッジケースの見落とし", desc: "空配列・1要素・負の数・最大値などのエッジケースを考慮しないと、非公開テストケースで落ちます。解答を提出する前に、最低でも空入力・最小入力・境界値のテストを行いましょう。", color: "#f97066" },
              { title: "最適解にこだわりすぎる", desc: "最適な計算量の解法が思い浮かばない場合に、愚直な解法（ブルートフォース）を書かないのは大きな損失です。まず動く解法を書いて部分点を確保し、その上で最適化を考えましょう。", color: "#f97066" },
              { title: "問題文の読み間違い", desc: "焦りから問題文を正確に読まず、異なる問題を解いてしまうケース。入力形式・出力形式・制約条件を必ず確認し、サンプルケースで動作を確認してから本格的にコーディングを始めましょう。", color: "#f97066" },
              { title: "デバッグ力の不足", desc: "テストケースが通らない際に、効率的にデバッグできないケース。printデバッグやデバッガーの使い方に慣れておくこと、小さな入力で手動トレースする技術が重要です。", color: "#f97066" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 計算量の目安 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">計算量（O記法）の目安</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              コーディングテストでは、制約条件からどの計算量の解法が求められているかを判断する力が重要です。以下の目安を覚えておきましょう。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">Nの範囲</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">許容される計算量</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">代表的なアルゴリズム</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["N &le; 20", "O(2^N), O(N!)", "全探索・バックトラッキング"],
                  ["N &le; 1,000", "O(N^2)", "二重ループ・DP"],
                  ["N &le; 100,000", "O(N log N)", "ソート・二分探索"],
                  ["N &le; 1,000,000", "O(N)", "線形探索・ハッシュマップ"],
                  ["N &le; 10^9", "O(log N), O(1)", "二分探索・数学的解法"],
                ].map(([range, complexity, algo], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
                    <td className="px-4 py-3 text-sm font-bold" style={{ borderBottom: "1px solid #d1dce5" }} dangerouslySetInnerHTML={{ __html: range }} />
                    <td className="px-4 py-3 text-sm font-bold" style={{ borderBottom: "1px solid #d1dce5", color: "#0891b2" }}>{complexity}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{algo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              一般的に、1秒あたり約10^8回の計算が実行できると考えます。制約条件のNが10^5なら、O(N log N)以下の解法が求められている可能性が高いです。この判断力は練習を重ねることで自然に身につきます。
            </p>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/technical-interview/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>技術面接対策</h3>
              <p className="text-sm text-text-light">コーディングテスト・設計課題の準備法</p>
            </a>
            <a href="/articles/portfolio/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>ポートフォリオ作成ガイド</h3>
              <p className="text-sm text-text-light">エンジニア転職に効くポートフォリオ</p>
            </a>
            <a href="/articles/web-industry/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>Web系企業への転職ガイド</h3>
              <p className="text-sm text-text-light">Web系企業の特徴と女性が活躍する理由</p>
            </a>
            <a href="/articles/interview-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>面接ガイド</h3>
              <p className="text-sm text-text-light">エンジニア面接の全体像</p>
            </a>
          </div>
        </div>
      </section>

      {/* 練習問題の解き方テンプレート */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">問題を解くときのテンプレート</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>コーディングテストの問題を効率的に解くためのステップバイステップのテンプレートを紹介します。このフレームワークに沿って考えることで、冷静に問題に取り組めます。</p>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <div className="space-y-4">
              {[
                { step: "1. 問題を理解する", desc: "問題文を2回読み、入力・出力・制約条件を確認。サンプルケースを手動でトレースして問題の意味を把握する。" },
                { step: "2. パターンを特定する", desc: "制約条件とキーワードから、適用すべきアルゴリズムパターン（Two Pointers・DP・BFS等）を特定する。" },
                { step: "3. 愚直な解法を考える", desc: "まずは計算量を気にせず、正しい解法（ブルートフォース）を考える。これで部分点を確保できる。" },
                { step: "4. 最適化を検討する", desc: "愚直な解法のボトルネックを特定し、データ構造の変更やアルゴリズムの改良で計算量を改善する。" },
                { step: "5. コーディング", desc: "変数名を分かりやすくし、コメントで意図を記載しながらコードを書く。" },
                { step: "6. テスト・検証", desc: "サンプルケース + エッジケース（空配列・1要素・最大値・負の数）でテストを行い、提出する。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="inline-block rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-white flex-shrink-0 mt-1" style={{ backgroundColor: "#0891b2" }}>{i + 1}</span>
                  <div>
                    <h4 className="font-bold text-sm">{item.step}</h4>
                    <p className="text-sm text-text-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">エージェントの面接対策を活用しよう</h2>
            <p className="text-white/90 mb-6">IT特化型エージェントなら、企業ごとのコーディングテストの傾向をアドバイスしてもらえます。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
