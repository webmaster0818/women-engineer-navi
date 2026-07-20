import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "先に学ぶ vs 転職して実務で学ぶ｜女性エンジニアのルート比較【2026年】",
  description:
    "未経験の女性がITエンジニアを目指すとき、「先にスクール・育成事業で学ぶ」ルートと「未経験可の会社に転職して実務で学ぶ」ルートのどちらが合うかを比較。年齢・貯蓄・学習時間による向き不向き、費用と時間の考え方、両取り（学んでから研修付き求人）まで整理し、両ルートで役立つエージェント活用も解説します。",
  alternates: { canonical: "/articles/learn-vs-transfer/" },
  openGraph: {
    title: "先に学ぶ vs 転職して実務で学ぶ｜女性エンジニアのルート比較【2026年】",
    description:
      "「先に学ぶ」と「転職して実務で学ぶ」を、年齢・貯蓄・学習時間の観点で比較。費用と時間の考え方、両取り、エージェント活用まで解説します。",
    url: "https://women-engineer.com/articles/learn-vs-transfer/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "先に学ぶ vs 転職して実務で学ぶ｜女性エンジニアのルート比較【2026年】",
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
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
    "未経験の女性がITエンジニアを目指すときの「先に学ぶ」ルートと「転職して実務で学ぶ」ルートを、年齢・貯蓄・学習時間の観点で比較し、両取りやエージェント活用まで解説します。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/learn-vs-transfer/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "先に学ぶのと、転職して実務で学ぶのはどちらがおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一概にどちらが良いとは言えず、年齢・貯蓄・学習に使える時間によって向き不向きが変わります。学習期間の生活の見通しがあり、基礎を固めてから応募したい人は「先に学ぶ」が合いやすく、早く収入を得たい・座学より実務で覚えたい人は「転職して実務で学ぶ」が合いやすい傾向です。両者は排他的ではなく、無料の公的ルートで基礎だけ固めてから研修付き求人に応募する『両取り』も現実的な選択肢です。",
      },
    },
    {
      "@type": "Question",
      name: "無料の育成事業なら、費用はまったくかからないのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "受講料が無料でも、通学の交通費や、学習に充てる数か月間の機会損失（その間の収入）は発生します。たとえば東京都の女性ITエンジニア育成事業は受講料・PCレンタルが無料ですが、集合型訓練の交通費や資格受験費用は自己負担です。『無料＝完全にゼロ円』ではなく、時間という見えないコストも含めて考えると、転職して給料をもらいながら学ぶルートとの比較がしやすくなります。",
      },
    },
    {
      "@type": "Question",
      name: "年齢が高いと「転職して実務で学ぶ」は難しいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "未経験可・研修ありの求人は、若手ほど門戸が広い傾向があるのは事実です。ただし年齢だけで決まるわけではなく、これまでの職務経験や身につけた基礎スキルの見せ方で評価は変わります。年齢が気になる場合は、まず無料の学び直しで基礎とポートフォリオを用意し、そのうえで求人に応募する『両取り』が現実的です。自分の年代での可能性は、年代別の転職ガイドやエージェントへの相談で具体的に確認するのがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "「両取り」とは具体的にどう進めるのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "無料〜低負担の公的ルート（他自治体の育成事業・マナビDXの無料講座・教育訓練給付・ハロートレーニングなど）で基礎を固め、成果物を作ったうえで、未経験可・研修ありの求人に応募する進み方です。基礎を持って応募することで書類・面接で伝えられる材料が増え、入社後は会社の研修・OJTでさらに実務力を積み上げられます。学習と転職活動は並行して進められるため、学びながら求人市場を見ておくと動き出しがスムーズです。",
      },
    },
    {
      "@type": "Question",
      name: "どちらのルートでも転職エージェントは使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、両ルートで役立ちます。『先に学ぶ』人は、学習の途中から求人市場を見ておくことで学ぶ方向性を定められますし、修了後の応募でエージェントの書類添削・面接対策・求人紹介を活用できます。『転職して実務で学ぶ』人は、研修が名ばかりでない会社を見極めるうえでIT特化型エージェントの情報が有効です。登録は無料で、必ず転職しなければならないわけではないため、情報収集の窓口として早めに使うのが得策です。",
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
              { label: "先に学ぶ vs 転職して学ぶ" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              ルート比較ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              先に学ぶ vs 転職して実務で学ぶ
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性エンジニアの2つのルートを比較【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月21日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>先に結論：分岐は「年齢・貯蓄・学習時間」</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>先に学ぶ</strong>が向くのは、学習期間の生活の見通しがあり、基礎を固めてから応募したい人。目指す領域を自分で選びたい人にも合います。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>転職して実務で学ぶ</strong>が向くのは、早く収入を得たい・座学より実務で覚えたい人。給料をもらいながらスキルを積めます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>両取り</strong>も現実的 — 無料の公的ルートで基礎だけ固めてから、研修付き求人に応募する進み方が、多くの人にとって無理のない選択肢です。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 2つのルートの全体像</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 向き不向き（年齢・貯蓄・学習時間で分岐）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 費用と時間の比較表</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 両取り：学んでから研修付き求人へ</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. エージェントは両ルートで役立つ</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 全体像 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">2つのルートの全体像</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              未経験からITエンジニアを目指す道は、大きく2つに分かれます。1つは<strong>先にスクールや育成事業で学んでから転職する</strong>ルート、もう1つは<strong>未経験可の会社に転職して実務のなかで学ぶ</strong>ルートです。どちらが優れているという話ではなく、あなたの状況によって合う道が変わります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ルートA：先に学ぶ</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">スクール、あるいは<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>公的な育成事業</a>で基礎を身につけてから、求人に応募します。準備を整えてから転職市場に出る進み方です。</p>
              <p className="text-sm text-text-light leading-relaxed">土台を作ってから応募できる安心感がある一方、学習期間中は収入や時間のコストがかかります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ルートB：転職して実務で学ぶ</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">未経験を採用して社内研修・OJTで育てる会社に転職し、給料をもらいながら実務のなかでスキルを積みます。先に学ぶ工程を挟まない進み方です。</p>
              <p className="text-sm text-text-light leading-relaxed">早く収入を得られる一方、配属領域は会社が決めることが多く、研修の手厚さは企業差が大きい点に注意が必要です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 向き不向き */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">向き不向き（年齢・貯蓄・学習時間で分岐）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              どちらのルートが合うかは、主に<strong>年齢・貯蓄（生活の見通し）・学習に使える時間</strong>の3点で分かれます。以下は一般的な傾向です。自分に当てはめて確認してみてください。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>「先に学ぶ」が向く人</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>学習期間中の生活・収入の見通しが立てられる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>まとまった学習時間を確保できる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>基礎を固め、自信を持って面接に臨みたい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>目指す領域（開発／インフラ等）を自分で選びたい</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>「転職して実務で学ぶ」が向く人</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>無収入の学習期間を作りにくい・早く収入が必要</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>まとまった学習時間を確保しづらい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>座学より、実務のなかで覚えるほうが合っている</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>まず現場に入り、そこから専門を決めていきたい</span></li>
              </ul>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            年齢による違いも押さえておきましょう。未経験可・研修ありの求人は若手ほど門戸が広い傾向があります。ただし、これまでの職務経験や基礎スキルの見せ方で評価は変わるため、年齢だけで諦める必要はありません。自分の年代での可能性は<a href="/articles/age-30s/" className="underline" style={{ color: "#7c3a55" }}>30代の転職ガイド</a>や<a href="/articles/age-40s/" className="underline" style={{ color: "#7c3a55" }}>40代の転職ガイド</a>もあわせてご確認ください。
          </p>
        </div>
      </section>

      {/* sec3 費用と時間の比較表 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">費用と時間の比較表</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              費用は「受講料」だけを見ると判断を誤ります。<strong>学習に充てる時間の機会損失（その間の収入）</strong>という見えないコストまで含めて比べると、実像がつかめます。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>観点</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>先に学ぶ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>転職して実務で学ぶ</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>直接の費用</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>民間スクールは有料。公的な育成事業は受講料無料の場合も（交通費・受験料等は自己負担）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>基本的にかからない（入社後に研修を受ける）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>学習期間中の収入</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>学習に専念する場合は無収入になりうる（時間の機会損失）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>給料をもらいながら学べる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>学ぶ内容の選択</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>コース・領域を自分で選びやすい</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>配属領域は会社が決めることが多い</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>応募時のアピール</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>成果物・修了実績を用意して応募できる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ポテンシャル・人柄が評価の中心になりやすい</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>研修・学びの質</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>カリキュラムが体系立っている</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>会社差が大きい（手厚い会社も名ばかりの会社もある）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>向いている状況</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>生活の見通し・学習時間を確保できる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>早く収入が必要・実務で覚えたい</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            ※費用・無料の範囲は事業・スクールによって異なります。たとえば東京都の育成事業の費用の内訳は<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>育成事業の解説記事</a>を、給付制度は<a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付</a>をご確認ください。
          </p>
        </div>
      </section>

      {/* sec4 両取り */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">両取り：学んでから研修付き求人へ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              2つのルートは、実は排他的ではありません。多くの人にとって現実的なのが<strong>「両取り」</strong>——無料〜低負担の公的ルートで基礎だけ固め、成果物を用意したうえで、未経験可・研修ありの求人に応募する進み方です。
            </p>
            <p>
              基礎を持って応募することで、書類・面接で伝えられる材料が増えます。入社後は会社の研修・OJTでさらに実務力を積み上げられるため、「先に学ぶ」の準備性と「実務で学ぶ」の収入面の両方の良さを取り込めます。
            </p>
          </div>
          <div className="rounded-xl p-6" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>両取りで使える無料〜低負担の学びの入口</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><a href="/articles/manabi-dx/" className="underline" style={{ color: "#7c3a55" }}>マナビDX</a>の無料オンライン講座で基礎に触れる</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><a href="/articles/hello-training-it/" className="underline" style={{ color: "#7c3a55" }}>ハロートレーニング（公共職業訓練）</a>のIT分野</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付</a>で費用を抑えて民間講座を受ける</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><a href="/articles/women-it-support-map/" className="underline" style={{ color: "#7c3a55" }}>全国の女性IT支援マップ</a>から自治体事業を探す</span></li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            なお、選考のある育成事業に落ちた・受けられなかった場合の動き方は<a href="/articles/training-not-selected/" className="underline" style={{ color: "#7c3a55" }}>育成事業に落ちたら？代替ルートと研修付き転職</a>、修了後の転職の進め方は<a href="/articles/training-after-graduation/" className="underline" style={{ color: "#7c3a55" }}>育成事業の修了後の転職活動ガイド</a>で解説しています。
          </p>
        </div>
      </section>

      {/* sec5 エージェントは両ルートで役立つ */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">エージェントは両ルートで役立つ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              転職エージェントは、どちらのルートを選んでも役立ちます。登録は無料で、必ず転職しなければならないわけではないため、<strong>情報収集の窓口として早めに使う</strong>のが得策です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>「先に学ぶ」人の使い方</h3>
              <p className="text-sm text-text-light leading-relaxed">学習の途中から求人市場を見ておくと、「どの領域が入りやすいか」「どんなスキルが評価されるか」が分かり、学ぶ方向性を定められます。修了後は書類添削・面接対策・求人紹介をそのまま活用できます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>「実務で学ぶ」人の使い方</h3>
              <p className="text-sm text-text-light leading-relaxed">研修が名ばかりでない会社を見極めるのは、求人票だけでは難しいもの。未経験からの入社実績や研修の実態を把握しているIT特化型エージェントの情報が、会社選びの助けになります。</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">ワークポート</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>未経験サポート</span></div>
              <p className="text-sm text-text-light">IT・Web業界に強く、未経験者向けの求人紹介やサポートに定評があります。研修付きの求人を含め、未経験の入口を広く見たい人の軸になりやすいエージェントです。</p>
              <p className="text-sm mt-3"><a href="/reviews/workport/" className="underline font-bold" style={{ color: "#7c3a55" }}>ワークポートの口コミ・評判を見る →</a></p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">テックゴー</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>無料キャリア面談</span></div>
              <p className="text-sm text-text-light">運営は株式会社MyVision。無料のキャリア面談で、「先に学ぶべきか、実務で学ぶべきか」を含めて方向性を第三者と整理できます。ルート選びに迷う段階の相談先として活用できます。</p>
              <p className="text-sm mt-3"><a href="/reviews/techgo/" className="underline font-bold" style={{ color: "#7c3a55" }}>テックゴーの口コミ・評判を見る →</a></p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">どのルート・どのエージェントが合うか診断</p>
            <p className="text-sm text-text-light mb-4">経験段階・重視するサポート・働き方などの質問に答えると、相性の目安になるエージェントが分かります（無料・登録不要）。</p>
            <a href="/diagnosis/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>エージェント診断を受けてみる</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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
            <a href="/articles/tokyo-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都の女性ITエンジニア育成事業とは</h3><p className="text-sm text-text-light">内容・費用・申込方法と募集状況</p></a>
            <a href="/articles/training-not-selected/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性IT育成事業に落ちたら？</h3><p className="text-sm text-text-light">無料の代替ルートと研修付き転職</p></a>
            <a href="/articles/training-after-graduation/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>育成事業の修了後の転職活動ガイド</h3><p className="text-sm text-text-light">修了直後にやること・進路・エージェント活用</p></a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からITエンジニアになる方法</h3><p className="text-sm text-text-light">学習〜転職までの完全ロードマップ</p></a>
            <a href="/articles/programming-school/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性向けプログラミングスクールの選び方</h3><p className="text-sm text-text-light">「先に学ぶ」ルートの手段比較に</p></a>
            <a href="/articles/how-to-choose/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>転職エージェントの選び方</h3><p className="text-sm text-text-light">両ルートで役立つ併用の考え方</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">自分に合うルートで、一歩を踏み出す</h2>
            <p className="text-white/90 mb-6">先に学ぶ・実務で学ぶ・両取り、どの道もエージェントに無料で相談できます。まずは相性の良いエージェントを探しましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
