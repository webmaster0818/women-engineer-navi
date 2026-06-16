import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "エンジニア技術面接の対策ガイド｜ライブコーディング・設計質問・深掘りへの備え【2026年】",
  description:
    "エンジニア転職の技術面接対策を実情ベースで解説。ライブコーディング・システム設計・技術深掘り・ペアプロの4形式と評価観点、詰まったときの立ち回り、STAR法での経験整理、未経験者のポートフォリオ連携まで。AI協働時代の技術面接の変化も出典付きで網羅します。",
  alternates: { canonical: "/articles/technical-interview/" },
  openGraph: {
    title: "エンジニア技術面接の対策ガイド｜ライブコーディング・設計質問・深掘りへの備え【2026年】",
    description:
      "ライブコーディング・システム設計・技術深掘り・ペアプロの4形式と評価観点、詰まったときの立ち回りを出典付きで解説。",
    url: "https://women-engineer.com/articles/technical-interview/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "エンジニア技術面接の対策ガイド｜ライブコーディング・設計質問・深掘りへの備え【2026年】",
  datePublished: "2026-04-29",
  dateModified: "2026-06-12",
  author: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  description:
    "エンジニア技術面接の対策ガイド。ライブコーディング・システム設計・技術深掘り・ペアプロの4形式と評価観点、詰まったときの立ち回り、経験レベル別の準備法を出典付きで解説。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/articles/technical-interview/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "技術面接とコーディングテストは何が違うのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "コーディングテストは自宅などで一人で受ける自動採点型の試験で、書類選考の直後に課されることが多いステップです。一方、技術面接は面接官（現場エンジニア）と対話しながら進む選考で、ライブコーディング・システム設計・過去プロジェクトの深掘りなどが行われます。コーディングテストが「解けたか」を測るのに対し、技術面接は「どう考えて解くか」「チームで一緒に働けるか」を見る場です。HireRooのように、コーディングテストの提出コードを面接官が参照しながら深掘り質問をする「スキル面接」形式を提供するサービスもあり、テストと面接は地続きになりつつあります。",
      },
    },
    {
      "@type": "Question",
      name: "ライブコーディングで頭が真っ白になったらどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "黙り込まないことが最重要です。技術面接は会話の場なので、「入力の範囲を確認させてください」「まず愚直な解法から考えます」と声に出すだけで思考が再起動し、面接官も軌道修正のヒントをくれます。具体例を2〜3個手で書いてパターンを探す、解けなくても部分的に動くコードを書く、計算量が悪い解法でも「まずこれで動かして、ここがボトルネックなので改善します」と宣言する、という立ち回りで「詰まったときにどう動く人か」をむしろプラスに評価してもらえます。",
      },
    },
    {
      "@type": "Question",
      name: "システム設計の面接は経験が浅くても出題されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "本格的なシステム設計面接は主にミドル〜シニア層やテックリード候補が対象で、未経験・ジュニア層の選考で大規模分散システムの設計をゼロから問われることは多くありません。ただし「あなたのポートフォリオはなぜこの構成にしたのか」「テーブル設計をどう考えたか」という小さな設計質問はレベルを問わず出ます。自分の作ったものの構成図を描いて、選択理由とトレードオフ（他の選択肢を選ばなかった理由）を説明できるようにしておけば、ジュニア層の設計質問はカバーできます。",
      },
    },
    {
      "@type": "Question",
      name: "知らない技術について質問されたら「分かりません」と答えていいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "知ったかぶりよりはるかに良い回答です。技術面接の面接官は現場エンジニアなので、曖昧な知識で取り繕うとすぐに見抜かれ、信頼を失います。「その技術は実務で使った経験がありません」と正直に伝えた上で、「類似の◯◯なら経験があります。共通点から推測すると…」と既知の知識から考える姿勢を見せるのが理想です。エンジニアの実務は「知らないことを調べて解決する」ことの連続なので、未知の問題への向き合い方そのものが評価対象になっています。",
      },
    },
    {
      "@type": "Question",
      name: "技術面接でGitHub CopilotなどのAIツールを使ってもいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "面接官・企業の指示に従うのが鉄則です。2026年現在、対応は二極化しています。HireRooのようにAIツールの利用を前提に「AIと協働して解く力」ごと評価する形式を提供するサービスがある一方、AI利用を禁止し、その場の思考力を見るためにあえてライブ形式・対面形式で実施する企業もあります。無断利用は不正行為とみなされるリスクがあるため、案内に明記がなければ面接冒頭に「AIツールや検索の利用は可能ですか」と確認しましょう。この確認自体が、ルールを確かめてから動く実務的な姿勢として好印象です。",
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
    { "@type": "ListItem", position: 3, name: "技術面接対策", item: "https://women-engineer.com/articles/technical-interview/" },
  ],
};

export default function TechnicalInterviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "技術面接対策" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#c15f47" }}>面接・選考</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              エンジニア技術面接の対策ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">ライブコーディング・設計質問・深掘りへの備え【2026年】</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>先に結論：技術面接で見られているのは「正解」ではない</h2>
            <ul className="space-y-3 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>形式は主に4つ。</strong> ライブコーディング／システム設計／技術知識・経験の深掘り／ペアプログラミング・ホワイトボード。どれも面接官（現場エンジニア）との<strong>対話</strong>で進みます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>評価の中心は思考プロセス。</strong> 完答できなくても、考えを声に出し、制約を確認し、トレードオフに言及できれば評価されます。逆に、黙って正解だけ出すスタイルは損をします。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>経験者は過去プロジェクトの深掘り、未経験者は学習過程の説明</strong>が主戦場。それぞれSTAR法とポートフォリオで事前に整理しておくのが最短の対策です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>2026年の変化:</strong> 生成AIの普及で自動採点テストだけでは実力を測りにくくなり、対話型のライブ評価を重視する企業が増えています。AIツールの扱いは企業ごとに異なるため、<strong>面接前のルール確認が必須</strong>です。</span>
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 技術面接の位置づけ：コーディングテストとの違い</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 技術面接の4形式と評価観点【一覧表】</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 評価されるのは「正解」より思考プロセス</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 経験者向け：プロジェクト深掘りに備えるSTAR整理</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 未経験・経験が浅い人向け：学習過程とポートフォリオで戦う</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. ライブコーディング・設計面接の練習方法</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 当日の立ち回りとやりがちなNG</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 位置づけ */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">技術面接の位置づけ：コーディングテストとの違い</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              エンジニア転職の選考は、おおむね「書類選考 → コーディングテスト（オンライン・自動採点） → 技術面接（1〜2回） → 最終面接」という流れで進みます。このうち<strong>技術面接</strong>は、現場のエンジニアが面接官となり、対話しながら技術力と働き方を確かめる選考です。一人で受けて自動採点される<a href="/articles/coding-test/" className="underline" style={{ color: "#7c3a55" }}>コーディングテスト</a>とは、見られているものが根本的に違います。
            </p>
            <p>
              コーディングテストが「制限時間内に正しく動くコードを書けたか」という<strong>結果</strong>を測るのに対し、技術面接は「どう考えてその解にたどり着くか」「分からないとき・詰まったときにどう振る舞うか」「技術的な判断を言葉で説明できるか」という<strong>過程と対話</strong>を見ます。採用側にとって技術面接は、入社後に一緒に働く場面のシミュレーションです。設計の議論ができるか、コードレビューでのやり取りが成立するか、を面接という形で確かめています。
            </p>
            <p>
              2026年の特徴として、テストと面接の境界が薄れつつあります。技術面接サービスのHireRooは、コーディングテストで候補者が提出したコードや設計書を解析し、面接で深掘りすべき質問と模範解答を自動生成する「スキル面接」機能を2025年3月にリリースしました（出典: 株式会社ハイヤールー プレスリリース、2025年3月11日）。つまり<strong>テストで書いたコードが、そのまま面接の質問材料になる</strong>運用が広がっています。テストを「通過したら終わり」と考えず、自分の提出コードの設計判断を説明できる状態で面接に臨むことが、2026年の標準的な備えです。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 4形式と評価観点 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">技術面接の4形式と評価観点【一覧表】</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              技術面接の形式は企業によって異なりますが、大きく次の4つに整理できます。どの形式が来るかは選考案内や転職エージェント経由で事前に確認できることが多いので、志望企業の形式に合わせて準備の重心を変えましょう。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>形式</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>内容</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>主な評価観点</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ライブコーディング</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>面接官の前で（オンラインなら共有エディタで）リアルタイムにコードを書く。アルゴリズム問題や小さな実装課題が題材。HireRooのライブコーディング機能はビデオ・チャット・リアルタイム編集エディタを備え、解答過程を記録して後から再生できる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>思考の言語化、制約確認の質問力、詰まったときのリカバリー、コードの読みやすさ</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>システム設計</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「URL短縮サービスを設計して」のようなお題で、要件整理→全体構成→詳細化→スケール戦略を面接官と議論。作図ツールやホワイトボードで構成図を描きながら進む。主にミドル〜シニア層対象</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>要件を質問で具体化する力、非機能要件（可用性・整合性・スケーラビリティ）への目配り、トレードオフの説明</td>
                </tr>
                <tr className="bg-white">
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>技術知識・経験の深掘り</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>職務経歴書やポートフォリオをもとに「なぜその技術を選んだのか」「障害時にどう対応したか」を掘り下げる質疑。レベルを問わず最も広く行われる形式</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>技術選定の判断根拠、課題解決の再現性、失敗からの学習、経歴の一貫性</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ペアプログラミング／ホワイトボード</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>面接官とペアになって実務に近い課題を一緒に進める形式や、対面でホワイトボードに擬似コード・図を書きながら解く形式。実際の開発風景に最も近い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>協働のしやすさ、フィードバックの受け止め方、抽象化・図解の力、コミュニケーションの自然さ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3 leading-relaxed">
            出典: HireRoo公式サイト・ヘルプセンター（ライブコーディング機能・出題形式、2026年6月参照）、CodeZine「エンジニア採用のためのコーディング試験サービス『HireRoo』、ライブコーディング機能を大幅アップデート」（2023年3月22日）
          </p>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2026年の潮流：対話型評価への回帰</h3>
            <p className="text-sm text-text-light leading-relaxed">
              生成AIの普及で、自宅受験の自動採点テストだけでは「本人の実力」を測りにくくなりました。その結果、<strong>面接官が同席するライブ形式の比重が上がっています</strong>。対応は二極化しており、HireRooのようにAIツールの利用を前提に「AIと協働して解く力」ごと評価する流れと、AIを遮断してその場の思考力を見るライブ・対面形式を強化する流れの両方があります（出典: HireRoo公式サイト、2026年6月参照。コーディングテスト側のAI利用ルールは<a href="/articles/coding-test/" className="underline" style={{ color: "#7c3a55" }}>コーディングテスト対策ガイド</a>参照）。どちらの企業に当たっても困らないよう、「AIなしで考え切る練習」と「AIに的確な指示を出し出力を検証する練習」の両方をしておくのが安全です。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 思考プロセス */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">評価されるのは「正解」より思考プロセス</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              技術面接で最も多い誤解が「完答できなければ落ちる」というものです。実際には、面接官は<strong>一緒に働いたときの姿</strong>を見ています。実務では初見で正解が分かる問題のほうが珍しく、「分からない状態からどう前進するか」こそが日常です。だからこそ、詰まった場面はマイナスではなく、立ち回り次第で<strong>最大のアピール機会</strong>になります。
            </p>
          </div>
          <div className="space-y-4">
            {[
              { name: "1. 考えていることを声に出す（最重要）", desc: "「まず全探索なら確実に解けます。ただ計算量がO(N²)なので、Nが大きいと厳しい。ソートして二分探索に置き換えられないか考えます」——このように思考を実況するだけで、面接官はあなたの頭の中を評価できます。黙って3分悩むのと、声に出して3分悩むのとでは、得られる評価がまったく違います。沈黙が続くと面接官は助け舟すら出せません。", color: "#7c3a55" },
              { name: "2. 書き始める前に制約を確認する", desc: "「入力の最大サイズはどのくらいですか」「重複や空入力は考慮すべきですか」「実行速度と読みやすさ、どちらを優先しますか」。要件を質問で具体化する行動は、実務の要件定義そのものとして高く評価されます。逆に、思い込みで書き始めて後から仕様違いに気づくのは典型的な減点パターンです。", color: "#7c3a55" },
              { name: "3. トレードオフに言及する", desc: "「ハッシュマップを使えば検索はO(1)になりますが、メモリを余分に使います。今回はデータ量が小さいのでこちらを選びます」。技術に万能の正解はなく、選択には必ず代償があります。メリットだけでなく「何を捨てたか」を言える人は、設計を任せられる人として一段上の評価を受けます。これはライブコーディングでも設計面接でも経験の深掘りでも共通する、技術面接全体の採点軸です。", color: "#7c3a55" },
              { name: "4. 詰まったら「現在地」を宣言してから動く", desc: "「いま、この条件分岐の整理で詰まっています。具体例を2つ書いて確かめます」と現在地を言葉にすると、自分の思考も整理され、面接官もヒントを出しやすくなります。面接官のヒントを素直に受け取って軌道修正できるかどうかも評価対象です。ヒントをもらうこと自体は減点ではありません。実務でレビュー指摘を受け入れられるかを見ています。", color: "#c15f47" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: item.color }}>{item.name}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#f0e7dd", border: "1px solid #d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong>補足:</strong> 解答過程そのものが採点対象になる傾向は、ツール側の進化からも裏づけられます。HireRooのライブコーディング機能は解答過程を記録し、面接官が後からプレイバックして評価項目に沿って振り返れる仕組みを備えています（出典: CodeZine、2023年3月22日）。「最後に動いたコード」だけでなく「そこに至る道筋」が記録され、評価される時代です。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 経験者向け */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">経験者向け：プロジェクト深掘りに備えるSTAR整理</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              実務経験者の技術面接で最も時間を割かれるのが、過去プロジェクトの深掘りです。「経歴書に書いてあることを話せばいい」と油断すると、「なぜ？」を3回重ねられたところで言葉に詰まります。面接官は経歴の事実ではなく、<strong>あなた自身の判断と貢献がどこにあったか</strong>を知りたいからです。主要プロジェクト2〜3本を、STAR法で事前に分解しておきましょう。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>STAR法によるプロジェクト整理テンプレート</h3>
            <div className="space-y-4">
              {[
                { step: "S（Situation）状況", desc: "どんなサービス・チーム規模・技術スタックだったか。「BtoB SaaSの管理画面、エンジニア5名、React+Rails」のように30秒で説明できる粒度に圧縮します。" },
                { step: "T（Task）課題と自分の役割", desc: "何が問題で、自分は何を任されたか。「一覧画面の表示に10秒かかりユーザーから改善要望が多発。パフォーマンス改善を担当」のように、課題は可能なら数値で語ります。" },
                { step: "A（Action）自分の行動と判断", desc: "深掘りの本丸。「何をしたか」だけでなく「他にどんな選択肢があり、なぜそれを選んだか」まで用意します。「キャッシュ導入も検討したが、データ更新頻度が高く不整合リスクがあるため、まずN+1クエリの解消とインデックス追加を選んだ」のように、捨てた選択肢とその理由がセットで語れると強いです。" },
                { step: "R（Result）結果と学び", desc: "結果は数値で（表示時間10秒→1.5秒、エラー率など）。うまくいかなかった場合も「この経験から、計測してから最適化する習慣がついた」のように学びで締めれば十分評価されます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-white flex-shrink-0 mt-1" style={{ backgroundColor: "#7c3a55" }}>{i + 1}</span>
                  <div>
                    <h4 className="font-bold text-sm">{item.step}</h4>
                    <p className="text-sm text-text-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              深掘りで頻出の追撃質問は「なぜその技術を選んだのか」「他の選択肢は検討したか」「もう一度やるなら何を変えるか」「チームの反対はなかったか」の4つです。STARのA（Action）を厚めに準備しておけば、どの追撃にも同じ素材で答えられます。失敗談・障害対応の経験はむしろ強力な持ち札です。隠さず、対応プロセスと再発防止まで語れるように整理しておきましょう。
            </p>
            <p>
              なお、技術面接の終盤には逆質問の時間がほぼ必ずあります。「技術的な関心の深さ」を示す最後のチャンスなので、<a href="/articles/reverse-questions/" className="underline" style={{ color: "#7c3a55" }}>逆質問の準備ガイド</a>で開発体制・技術選定・レビュー文化について聞く質問を用意しておきましょう。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 未経験・浅い経験向け */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験・経験が浅い人向け：学習過程とポートフォリオで戦う</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              実務経験がない・浅い場合、深掘りの対象はポートフォリオと学習過程になります。ここで差がつくのは作品の完成度そのものより、<strong>「自分で考えて作った」ことを自分の言葉で説明できるか</strong>です。生成AIで見栄えの良い作品を作れる時代だからこそ、面接官は「この人は中身を理解しているか」を対話で確かめにきます。
            </p>
          </div>
          <div className="space-y-4">
            {[
              { title: "ポートフォリオの全行に責任を持つ", desc: "面接官は「この処理はなぜこう書いたのですか」とピンポイントで聞いてきます。AIや教材のコードを写した部分が残っているなら、最低限「何をしているか」を説明できる状態にしておくこと。説明できない箇所が見つかると、ポートフォリオ全体の信頼が崩れます。AIを使ったなら使ったと正直に言い、「AIの出力のここが間違っていたので直した」と語れるほうが、2026年の面接ではむしろ評価されます。" },
              { title: "「なぜ」を3階層で用意する", desc: "なぜこのテーマか（課題意識）、なぜこの技術構成か（選定理由）、なぜこの設計か（実装判断）。この3階層の「なぜ」に答えられれば、ジュニア層の技術面接の深掘りはほぼカバーできます。作品の構成図を1枚描いておくと、設計質問にもそのまま使えます。" },
              { title: "学習過程を「再現性のある物語」として語る", desc: "「3ヶ月で◯◯を作れるようになった人は、入社後も同じ速度で吸収する」と面接官に思わせるのがゴールです。何から始め、どこで詰まり、どう調べて解決したか。エラーとの格闘の具体例を1つ話せるだけで、学習の解像度が伝わります。学習記録（ブログ・GitHubの草・学習ログ）は客観的な裏づけになります。" },
              { title: "客観指標で土台を補強する", desc: "経歴で語れない分、コーディングテストのスコアが効きます。paizaスキルチェックのBランク（上位30%・実務スキル相当）を取っておけば、基礎実装力の客観的な証明になり、面接でも「Bランク相当の実装力がある前提」で話が進みます（出典: paiza公式サイト、2026年6月参照）。取得までの道筋は別記事で解説しています。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>{i + 1}. {item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-text-light text-sm leading-relaxed mt-6">
            ポートフォリオの作り方（README・テスト・デプロイまで含めた仕上げ方）は<a href="/articles/portfolio/" className="underline" style={{ color: "#7c3a55" }}>ポートフォリオ作成ガイド</a>、paizaランクの上げ方を含むテスト対策は<a href="/articles/coding-test/" className="underline" style={{ color: "#7c3a55" }}>コーディングテスト対策ガイド</a>を参照してください。
          </p>
        </div>
      </section>

      {/* sec6 練習方法 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ライブコーディング・設計面接の練習方法</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              ライブコーディングの練習で重要なのは、問題を解く練習（インプット）と<strong>「人前で声に出しながら解く」練習（アウトプット）を分けて積む</strong>ことです。一人で黙々と解けるのに本番で固まる人は、後者の練習が足りていないだけです。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>Step 1</span>
                <h3 className="text-lg font-bold">解く力の土台づくり</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                AtCoder Beginner Contest（ABC）のA〜C問題やLeetCodeのEasy〜Medium、paizaスキルチェックの練習問題を毎日1〜2問。ライブコーディングの題材はコーディングテストと重なるため、この土台は共通です。詳しい難易度の目安とロードマップは<a href="/articles/coding-test/" className="underline" style={{ color: "#7c3a55" }}>コーディングテスト対策ガイド</a>に譲ります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>Step 2</span>
                <h3 className="text-lg font-bold">「声に出して解く」を習慣化する</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                普段の練習の最後の1問を「実況モード」に切り替えます。制約確認→方針宣言→実装→テストの流れを、独り言でいいので必ず声に出す。スマホで録画して聞き返すと、沈黙の長さや説明の飛びが客観視できます。これだけで本番の振る舞いが大きく変わります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#c15f47" }}>Step 3</span>
                <h3 className="text-lg font-bold">対人の模擬面接で仕上げる</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                最も手軽なのは<strong>IT特化型転職エージェントの模擬面接</strong>です。志望企業の面接形式・過去の質問傾向を踏まえた練習ができ、無料です。エンジニアの友人・同僚に面接官役を頼むのも有効です。英語に抵抗がなければ、海外のピア模擬面接サービスPramp（2024年7月以降はExponentのプラットフォームに統合され、無料のピア面接を継続提供）でライブコーディングの実戦経験を積めます（出典: Exponent公式サイト、2026年6月参照）。
              </p>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>システム設計面接の学習リソース（ミドル〜シニア向け）</h3>
            <p className="text-sm text-text-light leading-relaxed mb-3">
              設計面接が予告されている場合は、定番の学習リソースで「進め方の型」を身につけるのが近道です。型とは、要件の明確化→概算見積もり→全体構成→詳細化→スケール戦略、という議論の順序のことです。
            </p>
            <ul className="text-sm text-text-light space-y-2">
              <li>・書籍『システム設計の面接試験』（Alex Xu著、ソシム）— URL短縮・チャット・ニュースフィードなど頻出お題の設計プロセスを解説した定番書の日本語版</li>
              <li>・書籍『世界で闘うプログラミング力を鍛える本』（マイナビ出版）— コーディング面接全般の古典。アルゴリズム面接の質問例が豊富</li>
              <li>・The System Design Primer（GitHubで公開されている無料の英語教材）— 設計面接の頻出トピックを体系的にカバー</li>
            </ul>
            <p className="text-sm text-text-light leading-relaxed mt-3">
              読むだけでなく、頻出お題（URL短縮サービス・チャットアプリ・通知システムなど）について、自分で紙に構成図を描いて15分話す練習をすると定着します。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 当日の立ち回り */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">当日の立ち回りとやりがちなNG</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>実力どおりの評価を受けられない原因の多くは、技術力ではなく当日の振る舞いにあります。頻出のNGパターンを知っておけば、それだけで回避できます。</p>
          </div>
          <div className="space-y-4">
            {[
              { title: "黙り込む・考え込みすぎる", desc: "技術面接最大のNG。沈黙が1分続いたら、現在地の宣言（「◯◯の整理で悩んでいます」）か質問に切り替えましょう。面接官はあなたの思考が見えないと評価のしようがありません。" },
              { title: "知ったかぶり", desc: "面接官は現場エンジニアです。曖昧な理解で専門用語を使うと、追撃質問で必ず露呈し、正直さへの信頼まで失います。「使ったことはありませんが、概念としては◯◯と理解しています」が正解です。" },
              { title: "仕様を確認せずに書き始める", desc: "出題直後にいきなりコードを書き出すのは、要件を聞かずに実装する人という印象を与えます。最初の1〜2分は制約・入出力・優先事項の確認に使いましょう。確認の質問は減点ではなく加点です。" },
              { title: "面接官のヒントを無視する", desc: "面接官が「◯◯の場合はどうなりますか？」と聞くのは、多くの場合バグや考慮漏れへの誘導です。自分の方針に固執せず、いったん立ち止まって検討する柔軟さを見せましょう。協働できるかの試金石です。" },
              { title: "AI・検索のルールを確認しない", desc: "オンライン面接で許可なくAI補完や検索を使うのは不正と受け取られかねません。案内に明記がなければ冒頭に確認を。逆にAI利用前提の面接なら、堂々と使いつつ出力の検証過程を声に出すことが評価につながります。" },
              { title: "環境トラブルで時間を溶かす", desc: "オンラインの場合、カメラ・マイク・画面共有・指定エディタの動作は前日までに確認。使い慣れたエディタ設定とブラウザで臨み、当日は静かな環境と安定した回線を確保しましょう。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#c15f47" }}>{i + 1}. {item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-text-light text-sm leading-relaxed mt-6">
            技術面接の前後には、人事面接やカジュアル面談など別種の面接も挟まります。選考フロー全体の流れと各ステップの位置づけは<a href="/articles/interview-guide/" className="underline" style={{ color: "#7c3a55" }}>エンジニア面接ガイド</a>で確認しておきましょう。面接後は、聞かれた質問・自分の回答・解けなかった問題をすぐ記録しておくと、二次面接や他社選考にそのまま活きます。
          </p>
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
            <li>・出典: HireRoo公式サイト・ヘルプセンター（2026年6月参照）— ライブコーディング機能（ビデオ・チャット・リアルタイム編集エディタ・ドローイングツール）、アルゴリズム／システムデザイン形式の出題、AI協働を前提としたスキル評価</li>
            <li>・出典: 株式会社ハイヤールー プレスリリース（PR TIMES、2025年3月11日）— 「スキル面接」機能リリース。候補者の提出コード・設計書を解析し、面接で深掘りすべき質問と模範解答を自動生成</li>
            <li>・出典: CodeZine「エンジニア採用のためのコーディング試験サービス『HireRoo』、ライブコーディング機能を大幅アップデート」（2023年3月22日）— 解答過程の記録・プレイバック、面接中のリアルタイム評価記録</li>
            <li>・出典: paiza「プログラミングスキルチェック」公式ページ（2026年6月参照）— Bランク=上位30%・実務スキル相当のランク定義</li>
            <li>・出典: Exponent公式サイト（2026年6月参照）— ピア模擬面接サービスPrampは2024年7月以降Exponentのプラットフォームに統合され、無料のピア面接を継続提供</li>
          </ul>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/coding-test/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>コーディングテスト対策</h3>
              <p className="text-sm text-text-light">技術面接の前段に多いWebテストの形式と対策ロードマップ</p>
            </a>
            <a href="/articles/portfolio/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ポートフォリオ作成ガイド</h3>
              <p className="text-sm text-text-light">深掘り質問に耐えるポートフォリオの作り方</p>
            </a>
            <a href="/articles/interview-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>面接ガイド</h3>
              <p className="text-sm text-text-light">エンジニア選考フローの全体像と各ステップの位置づけ</p>
            </a>
            <a href="/articles/reverse-questions/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>逆質問の準備ガイド</h3>
              <p className="text-sm text-text-light">技術面接の終盤で差がつく逆質問の組み立て方</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">エージェントの面接対策を活用しよう</h2>
            <p className="text-white/90 mb-6">IT特化型エージェントなら、企業ごとの技術面接の傾向をアドバイスしてもらえます。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
