import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職のコーディングテスト対策ガイド｜出題形式・難易度・対策ロードマップ【2026年】",
  description:
    "転職のコーディングテスト対策を実データで解説。paiza（採用企業3,000社以上）・Track Test（導入400社以上）・HireRoo・AtCoder PASTなど実在サービスの形式と難易度、レベル別の対策ロードマップ、落ちやすいポイント、AI利用ルールまで2026年の最新事情を網羅します。",
  alternates: { canonical: "/articles/coding-test/" },
  openGraph: {
    title: "転職のコーディングテスト対策ガイド｜出題形式・難易度・対策ロードマップ【2026年】",
    description:
      "paiza・Track Test・HireRoo・AtCoder PASTなど実在サービスの形式比較と、レベル別対策ロードマップを出典付きで解説。",
    url: "https://women-engineer.com/articles/coding-test/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "転職のコーディングテスト対策ガイド｜出題形式・難易度・対策ロードマップ【2026年】",
  datePublished: "2026-04-29",
  dateModified: "2026-07-07",
  author: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  description:
    "転職のコーディングテスト対策ガイド。paiza・Track Test・HireRoo・AtCoder PASTなど実在サービスの形式比較、レベル別対策ロードマップ、落ちやすいポイントを出典付きで解説。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/articles/coding-test/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "転職のコーディングテストではどんな問題が出ますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "中心はアルゴリズム・データ構造の問題（配列・文字列操作、探索、動的計画法など）と、仕様どおりに動くコードを書く実装問題です。プラットフォームによって構成は異なり、Track Testはクイズ・実装・アルゴリズム・関数などを組み合わせた出題、paizaスキルチェックはS〜Eのランク別アルゴリズム問題、HireRooはAIツールを使いながら実務に近い課題を解く形式です。SQLや言語知識を問う設問が併用されることもあります。制限時間は60〜120分・2〜4問程度の構成が一般的です。",
      },
    },
    {
      "@type": "Question",
      name: "どのくらいのレベルまで対策すれば通過できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ひとつの目安はpaizaスキルチェックのBランク（上位30%）です。paizaはBランクを実務スキル相当と位置づけており、経験者採用求人の多くがBランクレベルを目安としています。標準入出力・配列・文字列・連想配列を使った処理を制限時間内に正確に実装できることが土台で、メガベンチャーや人気企業を狙うならAランク相当（計算量を意識した解法選択）まで上げると安心です。経験者なら2〜4週間、基礎からなら2〜3ヶ月の対策が目安です。",
      },
    },
    {
      "@type": "Question",
      name: "コーディングテストでChatGPTなどのAIを使ってもいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "企業・プラットフォームの指示に従うのが鉄則です。2026年は方針が二極化しており、HireRooのようにAIツールの利用を前提に「AIと協働して解く力」ごと評価するサービスがある一方、Track Testは受験中の操作を記録するアクションログ機能やWebカメラモニタリング機能でAI利用や不正を検出する仕組みを提供しています。許可されていない環境での無断利用は不正行為とみなされ不合格や選考辞退扱いになるリスクがあるため、受験案内のルールを必ず確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "ブランクがあってもコーディングテスト対策はできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "できます。育休や介護などでブランクがある場合は、まずpaizaスキルチェックのD〜C問題（無料）で手を動かす感覚を取り戻すのがおすすめです。1日30分〜1時間でも毎日続ければ、1〜2ヶ月でBランク水準まで戻せるケースは珍しくありません。AtCoderのアルゴリズム実技検定（PAST）に合格すれば「現在の実力」を客観的な認定（有効期間2年）として示せるため、ブランクの不安を補う材料になります。書類では語りにくい実力をテストのスコアで証明できるのは、ブランクがある人にとってむしろ追い風です。",
      },
    },
    {
      "@type": "Question",
      name: "コーディングテストに落ちたら、もう挑戦できませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "企業によりますが、一定期間を空ければ再応募・再受験を受け付けるケースは多くあります。まず落ちた原因（時間切れ・特定分野の弱さ・エッジケース漏れなど）を振り返り、弱点に絞って練習し直しましょう。なおpaizaスキルチェックのランクアップ問題は同じ問題に一度しか提出できないため、腕試しは練習問題で十分に積んでから挑むのが安全です。再受験の可否や時期は、転職エージェント経由で企業に確認してもらうこともできます。",
      },
    },
    {
      "@type": "Question",
      name: "コーディングテストで特に対策すべき頻出パターンは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "使用言語を問わず出やすいのは、(1)配列・累積和（区間の合計や条件を満たす要素の集計）、(2)文字列操作・パース（分割・変換・出現回数の集計）、(3)ハッシュマップによる集計・重複検出（連想配列で数える）、(4)ソート＋二分探索（並べ替えてから境界を探す）、(5)スタック/キュー・BFS/DFS（グリッドやグラフの探索）、(6)動的計画法（DP）の基本形の6パターンです。まずは各パターンの『典型問題』を1問ずつ、解法を暗記ではなく手を動かして再現できる状態にし、次に制限時間を計って初見問題を解く順で仕上げると効率的です。",
      },
    },
    {
      "@type": "Question",
      name: "コーディングテスト当日の時間配分はどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最初の数分で全問に目を通し、解けそうな順に並べ替えるのが鉄則です。90分3問なら『全問確認5分→易しい問題から着手し1問あたり25〜30分を上限→残り10分でテストと見直し』が目安。1問に固執して時間を溶かすのが最悪パターンなので、上限時間を超えたら一旦次へ進み、確実に取れる得点を先に固めます。最適解が浮かばなくても、まず愚直な全探索で『動くコード』を出せば部分点が入る形式が多いので、動くものを先に、最適化は後にが基本方針です。",
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
    { "@type": "ListItem", position: 3, name: "コーディングテスト対策", item: "https://women-engineer.com/articles/coding-test/" },
  ],
};

export default function CodingTestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "コーディングテスト対策" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#c15f47" }}>面接・選考</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              転職のコーディングテスト対策ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">出題形式・難易度・対策ロードマップを実データで解説【2026年】</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月7日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>先に結論：何が出る？どのくらい対策すればいい？</h2>
            <ul className="space-y-3 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>何が出る？</strong> 中心はアルゴリズム・実装問題（60〜120分・2〜4問程度）。paizaスキルチェック、Track Test、HireRoo、HackerRank・Codilityなどのオンラインプラットフォームで実施されるのが主流です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>通過ラインの目安は？</strong> paizaスキルチェックの<strong>Bランク（上位30%・実務スキル相当）</strong>が一つの基準。人気企業・メガベンチャー志望ならAランク相当まで。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>対策期間は？</strong> 実務経験者なら<strong>2〜4週間</strong>（毎日1〜2問）、基礎文法から始めるなら<strong>2〜3ヶ月</strong>が目安です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>2026年の注意点は？</strong> AI利用の扱いが二極化。AI協働を前提に評価する企業（HireRoo型）と、アクションログ等で不正利用を検知する企業（Track Test型）があるため、<strong>受験案内のルール確認が必須</strong>です。</span>
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 転職選考におけるコーディングテストの位置づけ</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 実際に使われている主要サービス比較【出典付き】</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 出題形式の傾向（2026年）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 難易度の目安：どこまでやれば足りるか</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. レベル別・対策ロードマップ</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 落ちやすいポイントと当日の注意</a></li>
              <li><a href="#sec-patterns" className="hover:underline" style={{ color: "#7c3a55" }}>7. 頻出パターン別の対策（言語非依存）</a></li>
              <li><a href="#sec-flow" className="hover:underline" style={{ color: "#7c3a55" }}>8. 当日の進め方：受験開始から提出まで</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>9. ブランクからの再挑戦という選択肢</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 位置づけ */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職選考におけるコーディングテストの位置づけ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              コーディングテストは、エンジニア転職の選考で候補者のプログラミング能力を測る技術試験です。書類選考の直後〜一次面接の前後に課されることが多く、オンラインのテストプラットフォーム上で制限時間内に問題を解く形式が主流です。Web系企業・SaaS企業・メガベンチャーを中心に広く使われており、コーディングテスト専用ツールの市場も拡大しています。国内ではTrack Testだけで導入企業400社以上・累計受験者100万人以上、paizaのスキルチェックは総受験回数1,700万回以上という規模です（出典: ギブリー・paiza各公式サイト、2026年6月参照）。
            </p>
            <p>
              重要なのは、コーディングテストが<strong>「対策した分だけ確実にスコアが伸びる」選考ステップ</strong>だという点です。面接のように相性や運に左右される部分が小さく、出題パターンは有限で、練習量がそのまま結果に反映されます。学歴や職歴ではなく「いま書けるコード」で評価されるため、経歴に自信がない人やキャリアにブランクがある人にとっては、むしろ実力を示すチャンスになります。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>一般的な実施形式</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>受験方法:</strong> 企業から送られるURLにアクセスし、自宅でオンライン受験（期限内の好きなタイミング）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>時間・問題数:</strong> 60〜120分で2〜4問程度の構成が一般的</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>使用言語:</strong> 多くの場合、対応言語から自由に選択可（paizaは15言語、Track TestはPython3・Java・JavaScript・Go・SQLなど20以上に対応）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>採点:</strong> テストケースによる自動採点が基本。正答数に加え、計算量やコードの読みやすさが見られることも</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>プラットフォーム:</strong> どのサービスで受けるかは企業側が指定。受験者が選ぶことはできない</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec2 サービス比較 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">実際に使われている主要サービス比較【出典付き】</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              2026年6月時点で公式サイトの情報を確認できた、転職・採用の現場で実際に使われている代表的なサービスを比較します。志望企業がどれを使うかは選考案内で判明しますが、それぞれの傾向を知っておくと準備の精度が上がります。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>サービス</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>形式・特徴</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>規模・実績（公式発表）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>paizaスキルチェック<br /><span className="font-normal text-xs">（paiza転職）</span></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>S〜Eの6段階ランク認定。S=上位1%、A=上位10%、B=上位30%、C=上位60%。ランクに応じて応募できる求人が広がる転職サイト一体型。15言語対応</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>採用企業3,000社以上・総受験回数1,700万回以上</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Track Test<br /><span className="font-normal text-xs">（ギブリー）</span></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>企業が候補者に課す採用試験プラットフォーム。クイズ・実装・アルゴリズム・関数など複数形式を組み合わせた出題。公式問題1,000問以上。アクションログによるAI利用検出やWebカメラモニタリング機能あり</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>導入400社以上・累計受験者100万人以上</td>
                </tr>
                <tr className="bg-white">
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>HireRoo</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「AI時代のスキル面接」を掲げ、AIツールを使いながら実務に近い課題を解く形式。解答プロセスを全記録・タイムライン再生し、実装力とAI協働力の両方を評価</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>導入200社以上（DMM・freee・GREEなど）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>アルゴリズム実技検定 PAST<br /><span className="font-normal text-xs">（AtCoder）</span></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>5時間15問・100点満点のオンライン検定。エントリー（25点〜）〜エキスパート（90点〜）の5段階認定、有効期間2年。受験料8,800円（税込）。履歴書に書ける客観的な実力証明として活用可能</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>AtCoderが運営。AtCoderJobsでレーティングを活かした転職も可能</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3 leading-relaxed">
            出典: paiza「paizaスキルチェック」公式ページ、ギブリー「Track Test」公式サイト・ニュースリリース、HireRoo公式サイト、AtCoder「アルゴリズム実技検定（PAST）」公式サイト（いずれも2026年6月参照）。数値は各社の公式発表に基づきます。
          </p>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>練習用プラットフォームとの使い分け</h3>
            <p className="text-sm text-text-light leading-relaxed">
              上の表は「企業が選考で使う」サービスです。対策の練習には、<strong>AtCoder</strong>（日本語の問題が豊富。毎週のABCコンテストのA〜C問題が転職対策に好適）や<strong>LeetCode</strong>（英語中心。面接型の問題が2,000問以上）、そして<strong>paizaスキルチェックの練習問題</strong>（無料・日本語・ランクで到達度が分かる）を組み合わせるのが定番です。外資系やグローバル企業を受けるならHackerRank・Codility系のUIにも触れておくと安心です。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 出題形式の傾向 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出題形式の傾向（2026年）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>転職のコーディングテストで出題される問題は、大きく次の4タイプに分けられます。</p>
          </div>
          <div className="space-y-4">
            {[
              { name: "1. アルゴリズム問題（最頻出）", desc: "配列・文字列の操作、探索（二分探索・幅優先探索）、動的計画法などを使って、制約条件を満たす解を制限時間内に実装するタイプ。paizaのランク問題やAtCoderの形式が代表例で、計算量（O記法）を意識した解法選択が問われます。", color: "#7c3a55" },
              { name: "2. 実装問題", desc: "仕様書どおりに動くプログラムを正確に書くタイプ。高度なアルゴリズムより「条件分岐の漏れなく、バグなく書き切る力」が問われます。Track Testでは実装・関数形式として出題されるカテゴリです。", color: "#7c3a55" },
              { name: "3. 知識問題（クイズ・SQL）", desc: "言語仕様・計算量・データベース（SQL）などの知識を問う選択式・記述式の設問。Track Testはクイズ3,000問以上を備え、コーディングと組み合わせて出題されます。バックエンド職ではSQLが課されるケースもあります。", color: "#7c3a55" },
              { name: "4. 実務シナリオ・AI協働型（2026年の新潮流）", desc: "「通知システムの不具合を安定化させる」のような実務に近い課題を、AIツールを使いながら解くタイプ。HireRooが代表で、AIの出力を検証する力・指示の的確さといった「AIと協働する力」も評価対象になります。生成AIが普及した2026年ならではの形式です。", color: "#c15f47" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: item.color }}>{item.name}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-light mt-3">出典: ギブリー「Track Test」公式サイト、HireRoo公式サイト（2026年6月参照）</p>
        </div>
      </section>

      {/* sec4 難易度の目安 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">難易度の目安：どこまでやれば足りるか</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「どこまで対策すればいいのか」の物差しとして使いやすいのが、paizaスキルチェックのランクです。paizaは各ランクの相対位置を公開しており、<strong>Bランク（上位30%）を「実務スキル相当」</strong>と位置づけ、経験者採用求人の多くがBランクレベルを目安としています（出典: paiza「プログラミングスキルチェック」公式ページ、2026年6月参照）。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>paizaランク</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>相対位置</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>レベル感と転職での目安</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white"><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>S</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>上位1%</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>最適なアルゴリズム設計・実装力。競技プログラミング経験者レベル</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>A</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>上位10%</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>複雑なロジックを時間内に設計・実装できる。人気企業・メガベンチャーを狙うならここを目標に</td></tr>
                <tr className="bg-white"><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>B</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>上位30%</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}><strong>実務スキル相当。経験者転職の標準的な目標ライン</strong></td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>C</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>上位60%</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基礎的な実装力。未経験・ポテンシャル採用の入口、対策開始地点の確認に</td></tr>
                <tr className="bg-white"><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>D・E</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>—</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基本文法の理解段階。まず基礎固めから（後述のロードマップ参照）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3">出典: paiza「プログラミングスキルチェック」公式ページ（2026年6月参照）</p>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>客観的な「実力証明」が欲しい場合はPAST</h3>
            <p className="text-sm text-text-light leading-relaxed">
              AtCoderのアルゴリズム実技検定（PAST）は、5時間15問・100点満点で、得点に応じてエントリー（25〜39点）／初級（40〜59点）／中級（60〜79点）／上級（80〜89点）／エキスパート（90〜100点）の5段階で認定されます。認定は受験日から2年間有効で、履歴書・職務経歴書に書ける客観的な実力証明になります（出典: AtCoder「アルゴリズム実技検定」公式サイト、2026年6月参照）。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 ロードマップ */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">レベル別・対策ロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              現在地に応じて始める場所が変わります。実務経験者ならPhase 2から、ブランク明け・学習中の人はPhase 1から。<strong>毎日1〜2問を続けること</strong>が、まとめて週末にやるより圧倒的に効きます。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>Phase 1</span>
                <h3 className="text-lg font-bold">基礎文法と標準入出力（目安: 2〜4週間）</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                言語を1つに絞り（記述量が少なく解答が速い<strong>Python</strong>が定番。<a href="/articles/cert-python/" className="underline" style={{ color: "#7c3a55" }}>Python資格の活用法はこちら</a>）、標準入力の読み取り・配列・文字列・連想配列（辞書）・ループと条件分岐を確実にします。paizaスキルチェックのD〜C問題が無料の練習台としてちょうど良いレベルです。実務経験者はこのPhaseはスキップ可。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>Phase 2</span>
                <h3 className="text-lg font-bold">アルゴリズムの定番パターン（目安: 4〜8週間）</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                頻出パターンを「見たら手が動く」状態にします。優先度の高い順に:
              </p>
              <ul className="text-sm text-text-light space-y-1 mb-3">
                <li>・計算量（O記法）の見積もり — 制約から解法を逆算する基礎体力</li>
                <li>・全探索・二分探索／ソートの使い分け</li>
                <li>・ハッシュマップ（辞書）による集計・重複検出</li>
                <li>・幅優先探索（BFS）・深さ優先探索（DFS）</li>
                <li>・動的計画法（DP）の基本形・貪欲法</li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">
                AtCoder Beginner Contest（ABC）のA〜C問題やLeetCodeのEasy〜Mediumを毎日1〜2問。paizaならB問題が安定して解けることが目標です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#c15f47" }}>Phase 3</span>
                <h3 className="text-lg font-bold">本番形式の実戦練習（目安: 2週間〜）</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                制限時間を計って解く練習に切り替えます。AtCoderの過去コンテスト（バーチャル参加）や、paizaのランクアップ問題（<strong>同じ問題には一度しか提出できない</strong>ので、練習問題で十分仕上げてから）で時間配分の感覚を作ります。志望企業がTrack TestやHireRooを使うと分かったら、各公式サイトのサンプル・体験問題でUIに慣れておくと当日の動揺が減ります。並行して<a href="/articles/technical-interview/" className="underline" style={{ color: "#7c3a55" }}>技術面接対策</a>と<a href="/articles/portfolio/" className="underline" style={{ color: "#7c3a55" }}>ポートフォリオ</a>も整えると、選考全体の通過率が上がります。
              </p>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#f0e7dd", border: "1px solid #d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong>所要期間のまとめ:</strong> 実務経験者はPhase 2〜3を圧縮して<strong>2〜4週間</strong>、基礎からなら<strong>2〜3ヶ月</strong>が現実的な見積もりです。1日の学習時間が30分でも、毎日続ければ到達できます。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 落ちやすいポイントと当日の注意 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">落ちやすいポイントと当日の注意</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>実力はあるのにスコアを落とす典型パターンは決まっています。事前に知っておくだけで防げるものばかりです。</p>
          </div>
          <div className="space-y-4">
            {[
              { title: "時間配分のミス：1問目に固執して全滅", desc: "最初に全問をざっと見て、解けそうな問題から着手するのが鉄則。1問あたりの上限時間を決め、超えたら次に移りましょう。確実に取れる問題で得点を固めてから難問に戻ります。" },
              { title: "エッジケースの見落とし", desc: "空入力・要素1個・最大値・負の数・重複値。非公開テストケースはここを突いてきます。提出前に境界値で必ず手元実行を。" },
              { title: "制約条件の読み飛ばし", desc: "入力サイズの制約（Nの上限）は解法のヒントです。Nが10万ならO(N²)の二重ループは間に合いません。問題文とサンプルケースを2回読んでから書き始めましょう。" },
              { title: "完璧主義で部分点を捨てる", desc: "最適解が浮かばないとき、何も提出しないのが最悪手。まず愚直な全探索でも「動く解」を出せば部分点が入る形式が多くあります。動くものを先に、最適化は後に。" },
              { title: "AI・検索利用ルールの違反（2026年の最重要注意）", desc: "受験案内に書かれたルールが絶対です。Track Testには受験中の操作からAI利用等を検出するアクションログ機能やWebカメラモニタリング機能があり、無断利用は不正行為として扱われるリスクがあります。逆にHireRooのようにAI利用が前提の形式なら、普段からAIに的確な指示を出し出力を検証する練習をしておきましょう（出典: ギブリー・HireRoo各公式サイト、2026年6月参照）。" },
              { title: "受験環境の不備", desc: "期限ギリギリの深夜受験、不安定なWi-Fi、通知が鳴るスマホ。オンラインでも「試験」です。静かな時間帯を確保し、ブラウザの自動更新や通知を切り、余裕のある日程で受けましょう。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#c15f47" }}>{i + 1}. {item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-text-light text-sm leading-relaxed mt-6">
            コーディングテストの先には技術面接・カジュアル面談が待っています。選考フロー全体の流れは<a href="/articles/interview-guide/" className="underline" style={{ color: "#7c3a55" }}>エンジニア面接ガイド</a>で確認しておきましょう。
          </p>
        </div>
      </section>

      {/* sec-patterns 頻出パターン別の対策 */}
      <section id="sec-patterns" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">頻出パターン別の対策（言語非依存）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              出題は無限に見えて、実は<strong>解法の型（パターン）はほぼ決まっています</strong>。使用言語に関係なく、以下のパターンを「典型問題を見たら手が動く」状態にしておくと、初見問題でも解法の当たりをつけられます。各パターンは<strong>①典型問題を1問、解法を再現できるまで手を動かす → ②似た問題を数問こなす → ③制限時間を計って初見に挑む</strong>の順で仕上げると効率的です。
            </p>
          </div>
          <div className="space-y-4">
            {[
              { name: "1. 配列・累積和", cue: "区間の合計・平均、条件を満たす要素の抽出", how: "まず素直な二重ループで解けるかを確認し、Nが大きい（10万以上）なら累積和で区間合計をO(1)にする、という『愚直→高速化』の型を体に入れます。範囲の和・最大部分和が典型。" },
              { name: "2. 文字列操作・パース", cue: "分割・変換・文字の出現回数、フォーマット整形", how: "入力を区切り文字で分割し、1文字ずつ走査して集計する処理を素早く書けるように。回文判定・文字種のカウント・単語の並べ替えが頻出。言語の標準的な文字列/正規表現APIに慣れておくと差が出ます。" },
              { name: "3. ハッシュマップ（連想配列）での集計・重複検出", cue: "「何回出たか」「ペアが存在するか」を高速に判定", how: "配列を1回走査しながら辞書に登録し、既出かどうかを見る型。『合計が目標値になる2数の探索』『重複要素の検出』が代表。二重ループO(N²)をO(N)に落とせる最頻出テクニックです。" },
              { name: "4. ソート＋二分探索", cue: "並べ替えた後に境界・しきい値を探す", how: "まずソートしてから、条件を満たす最小/最大を二分探索で絞り込む型。『ある値以上の要素数』『答えを二分探索する』問題で威力を発揮します。計算量O(N log N)の見積もりもセットで覚えます。" },
              { name: "5. スタック/キュー・BFS/DFS", cue: "グリッド・グラフの探索、対応関係のチェック", how: "括弧の対応判定はスタック、最短経路や連結成分はBFS/DFS、という対応を覚えます。グリッドを上下左右に探索する定型コードを1つ手元に持っておくと、迷路・島の数え上げ系に即応できます。" },
              { name: "6. 動的計画法（DP）の基本形", cue: "「場合の数」「最小コスト」「達成可能か」", how: "『前の状態から次の状態を埋める』表の作り方が肝。フィボナッチ・階段の登り方・ナップサックの基本形を写経レベルで再現できるように。ここまで来ればBランク〜Aランク帯の問題に手が届きます。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>{item.name}</h3>
                <p className="text-sm text-text-light leading-relaxed"><strong>よく出る形：</strong>{item.cue}</p>
                <p className="text-sm text-text-light leading-relaxed mt-1"><strong>練習手順：</strong>{item.how}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong style={{ color: "#7c3a55" }}>パターン学習のコツ</strong>　新しいパターンは「解法を読む」だけでは身につきません。一度自力で詰まり、解説を見て、<strong>翌日に何も見ずに再現</strong>する——このサイクルで長期記憶に定着します。1〜6を各3〜5問ずつこなせば、多くの企業のテストで戦える土台ができます。
            </p>
          </div>
        </div>
      </section>

      {/* sec-flow 当日の進め方 */}
      <section id="sec-flow" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">当日の進め方：受験開始から提出まで</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              実力が同じでも、<strong>解く順番と時間の使い方</strong>でスコアは大きく変わります。ここでは「90分・3問」を例に、受験開始から提出までの進め方を時系列で示します。時間や問題数が違っても考え方は同じです。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["最初の5分", "全問を読んで難易度を仕分け", "いきなり1問目から書き始めず、まず全問にざっと目を通します。各問の『解けそう／要検討／たぶん無理』をメモし、解けそうな問題から着手する順番を決めます。得点しやすい問題を後回しにするのが最大の機会損失です。"],
              ["問題を解く前の数分", "制約とサンプルを2回読む", "入力サイズの制約（Nの上限）は解法選択のヒントです。Nが10万ならO(N²)は間に合いません。サンプル入出力を手でなぞり、仕様を取り違えていないか確認してから書き始めます。"],
              ["1問あたり25〜30分を上限", "『動く解』を先に出す", "最適解にこだわらず、まず愚直でも動くコードで部分点を確保。上限時間を超えたら潔く次の問題へ移り、確実な得点を積み上げます。時間が余ったら戻って最適化します。"],
              ["提出前の各回", "エッジケースで自己テスト", "空入力・要素1個・最大値・負の数・重複値で手元実行してから提出。非公開テストケースはこの境界値を突いてきます。提出＝終わりではなく、通らなければログを見て修正します。"],
              ["残り10分", "見直しと未提出の回収", "手をつけていない問題に部分点狙いで一言でも書けないか、提出済みコードにケアレスミスがないかを確認。1点でも多く拾いにいきます。"],
            ].map(([time, title, desc], i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
                <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#c15f47" }}>{time}</span>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-text-light text-sm leading-relaxed mt-6">
            自分に合う対策の進め方やレベル感がつかめないときは、<a href="/diagnosis/" className="underline" style={{ color: "#7c3a55" }}>無料のエージェント診断</a>で相性の良いIT特化型エージェントを探し、企業ごとのテスト傾向を教えてもらうのが近道です。テストの先に控える<a href="/articles/technical-interview/" className="underline" style={{ color: "#7c3a55" }}>技術面接</a>までまとめて対策できます。
          </p>
        </div>
      </section>

      {/* sec7 ブランクから */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ブランクからの再挑戦という選択肢</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              育休・介護などでコードを書かない期間が空くと、「コーディングテストなんて無理」と感じがちです。しかし実際には、コーディングテストは<strong>ブランクがある人にこそ有利に働く選考形式</strong>です。職務経歴書では空白期間に目が行きますが、テストは「いまの実力」だけで評価されるからです。
            </p>
            <p>
              再開のコツは小さく始めること。paizaスキルチェックのC〜D問題は無料で1問10〜20分程度から取り組め、ランクという形で回復度が見えるので、子どもが寝た後の30分でも続けやすい設計です。感覚が戻ったらPhase 2のパターン練習に進み、自信がついたらPAST（5時間・オンライン・認定2年有効）で客観的な認定を取っておくと、ブランクを補う強い材料になります。
            </p>
            <p>
              また、IT特化型の転職エージェントは「この企業のテストはこの形式・このレベル」という選考情報を持っていることが多く、ブランク明けの効率的な対策に直結します。独力で戦う必要はありません。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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
            <li>・出典: paiza「paizaスキルチェック」「プログラミングスキルチェック」公式ページ（2026年6月参照）— ランク定義（S=上位1%／A=上位10%／B=上位30%／C=上位60%）、採用企業3,000社以上、総受験回数1,700万回以上、15言語対応</li>
            <li>・出典: 株式会社ギブリー「Track Test」公式サイト・ニュースリリース（2026年6月参照）— 導入400社以上、累計受験者100万人以上、公式問題1,000問以上、アクションログ機能・Webカメラモニタリング機能</li>
            <li>・出典: HireRoo公式サイト（2026年6月参照）— AI協働型スキル評価、解答プロセスの全記録・タイムライン再生、導入200社以上</li>
            <li>・出典: AtCoder「アルゴリズム実技検定（PAST）」公式サイト（2026年6月参照）— 5時間15問100点満点、5段階認定の点数基準、受験料8,800円（税込）、認定有効期間2年</li>
          </ul>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/technical-interview/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>技術面接対策</h3>
              <p className="text-sm text-text-light">コーディングテストの次に待つ技術面接の準備法</p>
            </a>
            <a href="/articles/portfolio/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ポートフォリオ作成ガイド</h3>
              <p className="text-sm text-text-light">エンジニア転職に効くポートフォリオ</p>
            </a>
            <a href="/articles/interview-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>面接ガイド</h3>
              <p className="text-sm text-text-light">エンジニア選考フローの全体像</p>
            </a>
            <a href="/articles/cert-python/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>Python資格ガイド</h3>
              <p className="text-sm text-text-light">テスト対策と相性の良いPython学習・資格</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">エージェントの面接対策を活用しよう</h2>
            <p className="text-white/90 mb-6">IT特化型エージェントなら、企業ごとのコーディングテストの傾向をアドバイスしてもらえます。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
