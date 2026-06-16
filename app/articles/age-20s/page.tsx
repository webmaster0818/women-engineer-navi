import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "20代女性エンジニアの転職ガイド｜年収相場・第二新卒・未経験の選択肢【2026年】",
  description:
    "20代女性エンジニアの転職を実データで解説。20代の平均年収365万円・IT/通信業種の20代は381万円（doda 2025）、20〜24歳の転職者の50.5%が賃金増、女性の転職入職率は25〜29歳で16.8%と全年代トップクラス。第二新卒・ポテンシャル採用の動向、未経験からの選択肢まで出典付きで紹介します。",
  alternates: { canonical: "/articles/age-20s/" },
  openGraph: {
    title: "20代女性エンジニアの転職ガイド｜年収相場・第二新卒・未経験の選択肢【2026年】",
    description:
      "20代女性エンジニアの年収相場・転職市場・20代前半/後半の戦略・第二新卒とポテンシャル採用・未経験からの選択肢を公的統計と実データで解説。",
    url: "https://women-engineer.com/articles/age-20s/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "20代女性エンジニアの転職ガイド｜年収相場・第二新卒・未経験の選択肢【2026年】",
  datePublished: "2026-04-27",
  dateModified: "2026-06-12",
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
    "20代女性エンジニアの年収相場・転職市場・20代前半/後半の戦略・第二新卒とポテンシャル採用・未経験からの選択肢を公的統計と実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/age-20s/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "20代女性エンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "doda「平均年収ランキング2025」によると、20代全体の平均年収は365万円（20代男性392万円・20代女性341万円）、IT/通信業種の20代は381万円です。エンジニア（IT/通信）職種全体の平均は469万円で、実務経験を2〜3年積んだ20代後半なら400万円台、クラウドやモダンなWeb技術のスキルがあれば500万円台も射程に入ります。未経験からの転職1年目は300万〜400万円程度が目安です。",
      },
    },
    {
      "@type": "Question",
      name: "第二新卒でもエンジニアに転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "できます。マイナビ「企業人材ニーズ調査」によると、第二新卒を今後採用する予定の企業は80.9%（うち「積極的に採用する予定」33.7%）、従業員1000人以上の大企業では87.9%にのぼります。新卒採用の充足難と若手の離職増を背景に、第二新卒は中途市場で歓迎される存在になっています。社会人経験1〜3年で身についたビジネス基礎力に加え、学習意欲と「次は辞めない理由」を語れれば、未経験職種への挑戦も十分可能です。",
      },
    },
    {
      "@type": "Question",
      name: "20代の転職で年収は上がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "上がる人が多数派で、しかも全年代で最も上がりやすい年代です。厚生労働省「令和6年雇用動向調査」によると、転職で賃金が増加した人の割合は20〜24歳で50.5%（うち1割以上の増加は38.5%）、25〜29歳で46.3%。減少した人（16.8%・29.2%）を大きく上回ります。エンジニア（IT・通信）の求人倍率は10倍超の売り手市場が続いており、20代は転職による年収アップの再現性が高い状況です。",
      },
    },
    {
      "@type": "Question",
      name: "20代未経験からエンジニアになるには何から始めればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「学習→ポートフォリオ→資格→応募」の順が定石です。まずProgateやUdemy等で基礎を1〜3か月学び、オリジナルのWebアプリを作ってGitHubで公開します。並行してITパスポート→基本情報技術者を取得すると、書類選考で学習の本気度を客観的に示せます。レバテック「IT人材白書2024」では未経験者を採用している企業が41.6%、検討中を含め約7割で、20代はポテンシャル採用の恩恵を最も受けられる年代です。独学が不安ならプログラミングスクールの活用も選択肢になります。",
      },
    },
    {
      "@type": "Question",
      name: "20代で転職するベストなタイミングはいつですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "実務経験2〜3年を積んだ25〜28歳前後が最も選択肢の多い時期です。実際、女性の転職入職率は25〜29歳で16.8%と働き盛り世代の中で最高水準（厚生労働省「令和6年雇用動向調査」）。基礎スキルとポテンシャルの両方を評価してもらえるため、自社開発への転籍や職種転換が通りやすくなります。一方、第二新卒（入社1〜3年）にも独自の採用枠があるため、「3年待つべき」と固定的に考える必要はありません。心身を消耗する環境なら早期の転職も合理的です。",
      },
    },
  ],
};

export default function Age20sArticlePage() {
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
              { label: "20代女性エンジニアの転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              年代別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              20代女性エンジニアの転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収相場・第二新卒・未経験の選択肢を実データで解説【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>この記事の結論</h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>20代はデータ上、最も転職が動き、最も年収が上がりやすい年代。</strong>女性の転職入職率は20〜24歳14.3%・25〜29歳16.8%と働き盛り世代でトップクラス、20〜24歳の転職者の50.5%が賃金増を実現しています（厚生労働省「令和6年雇用動向調査」）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>年収の目安：</strong>20代全体の平均は365万円（女性341万円）、IT/通信業種の20代は381万円（doda「平均年収ランキング2025」）。エンジニア職は20代女性の平均より高い水準を狙いやすく、経験2〜3年＋モダンスキルで400万〜500万円台が射程です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>戦略は前半と後半で変える。</strong>20代前半は第二新卒・ポテンシャル採用の枠を最大限活用（企業の80.9%が第二新卒の採用予定）。20代後半は実務経験2〜3年を軸に、職種転換・年収アップ・キャリアの専門軸づくりへ動くのが鉄則です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>未経験からの挑戦は20代が最有利。</strong>未経験者を採用している企業は41.6%・検討中を含め約7割（レバテック）。「学習→ポートフォリオ→資格」の順で土台を作れば、ポテンシャル採用の恩恵をフルに受けられます。</span>
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 20代女性エンジニアの転職市場【実データ】</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 20代女性エンジニアの年収相場（経験者・未経験別）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 20代前半と20代後半で変わる転職戦略</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 第二新卒・ポテンシャル採用の活かし方</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 未経験から20代でエンジニアになる方法</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 20代のうちに作るキャリアの土台</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 20代の転職活動の進め方</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 転職市場 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">20代女性エンジニアの転職市場【実データ】</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「最初の会社で3年は我慢すべき」という常識は、データの上ではすでに過去のものです。厚生労働省「令和6年雇用動向調査」によると、2024年の女性の転職入職率は<strong>20〜24歳で14.3%、25〜29歳で16.8%</strong>。25〜29歳は働き盛り世代（20〜50代）の中で最も高く、同年代男性（13.4%・15.1%）も上回ります。20代女性にとって転職は、もはや例外ではなく標準的なキャリア行動です。
            </p>
            <p>
              求人側の需要も強い状態が続いています。dodaの転職求人倍率（2026年4月）は全体で2.38倍ですが、<strong>エンジニア（IT・通信）は10倍を超える高水準</strong>を維持。1人の求職者に対して10件以上の求人がある計算で、経験の浅い若手やポテンシャル層にも門戸が大きく開かれています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>16.8%</p>
              <p className="text-sm font-bold mt-2">25〜29歳女性の転職入職率</p>
              <p className="text-xs text-text-light mt-1">働き盛り世代で最高水準。20〜24歳も14.3%</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>50.5%</p>
              <p className="text-sm font-bold mt-2">20〜24歳転職者の賃金増加割合</p>
              <p className="text-xs text-text-light mt-1">全年代トップ。減少は16.8%にとどまる</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>10倍超</p>
              <p className="text-sm font-bold mt-2">エンジニア（IT・通信）求人倍率</p>
              <p className="text-xs text-text-light mt-1">全職種平均2.38倍に対し圧倒的な売り手市場</p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「令和6年雇用動向調査」、doda「転職求人倍率レポート（2026年4月）」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              加えて、日本のITエンジニアに占める女性比率は18.8%（ヒューマンリソシア調査、OECD平均20.6%）とまだ2割弱。ダイバーシティ目標を掲げる企業にとって<strong>20代の女性エンジニア・エンジニア志望者は「これから長く活躍してくれる希少人材」</strong>であり、採用・育成への投資意欲が高い層です。同調査の女性比率の低さは、裏を返せば20代女性にとっての追い風になっています。
            </p>
            <p>
              なお、20代女性が前職を辞めた理由を見ると、25〜29歳では「労働時間、休日等の労働条件が悪かった」15.2%、「職場の人間関係」14.0%が上位で、「結婚」は8.1%、「出産・育児」は1.7%にすぎません（同調査）。20代の転職の主戦場は、ライフイベントよりも<strong>働き方と環境の改善</strong>にあります。
            </p>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: ヒューマンリソシア「IT分野のジェンダーギャップに関するグローバル調査」、厚生労働省「令和6年雇用動向調査」（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec2 年収相場 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">20代女性エンジニアの年収相場（経験者・未経験別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              doda「平均年収ランキング2025」（集計期間2024年9月〜2025年8月、約60万件）によると、20代全体の平均年収は<strong>365万円</strong>（20代男性392万円・20代女性341万円）。一方、<strong>IT/通信業種の20代は381万円</strong>と20代全体を16万円上回り、職種別のエンジニア（IT/通信）全体では469万円です。エンジニア職は20代女性の平均（341万円）より高い水準を最初から狙いやすい職種だと言えます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均年収・目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代全体（全職種）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>365万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>男性392万円・女性341万円</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>IT/通信業種の20代</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>381万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>20代全体を16万円上回る</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>エンジニア（IT/通信）職種全体</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>469万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>経験2〜3年の20代後半で400万円台が射程</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代・未経験からの転職1年目</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>300万〜400万円程度</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ポテンシャル採用。経験を積めば数年で挽回しやすい</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: doda（パーソルキャリア）「平均年収ランキング2025」、ウィルオブテック「未経験からエンジニア転職を叶える全知識」（いずれも2026年6月参照）。経験者レンジは公開統計と求人水準をもとにした目安です。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              「転職で年収が上がるか」のデータはさらに心強い結果です。厚生労働省「令和6年雇用動向調査」によると、転職で賃金が増加した人の割合は<strong>20〜24歳で50.5%</strong>（うち1割以上の増加は38.5%）と全年代で最も高く、<strong>25〜29歳でも46.3%</strong>（1割以上の増加37.9%）。減少した人（16.8%・29.2%）を大きく上回ります。またdodaの「年代別 転職時の年収変動レポート（2025年度上期）」では、20代の転職時の平均決定年収は2019年度同期比で13%上昇しており、若手の市場価値そのものが底上げされています。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>20代で年収を上げる3つのレバー</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>モダンな技術スタックに寄せる</strong>：クラウド（AWS/GCP）、TypeScript/React、Python・データ活用は20代でも年収500万円台の求人が出やすい領域</li>
              <li>② <strong>「自社開発・元請け」側へ動く</strong>：SES・多重下請けから自社開発/元請けへ移るだけで、同じスキルでも待遇水準が変わるケースが多い</li>
              <li>③ <strong>エージェント経由で年収交渉する</strong>：20代は自分の市場価値を過小評価しがち。相場を知るプロに交渉を任せる</li>
            </ul>
            <p className="text-sm text-text-light mt-4">
              年代別の詳しい年収データは<a href="/articles/salary-by-age/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>年代別年収ガイド</a>で解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 前半/後半の戦略 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">20代前半と20代後半で変わる転職戦略</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              同じ20代でも、企業が見るポイントは前半と後半で大きく異なります。20代前半は「第二新卒・ポテンシャル」、20代後半は「実務経験×伸びしろ」が評価の軸。自分がどちらのフェーズにいるかで、アピールの組み立てを切り替えましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>20代前半（20〜24歳）：第二新卒・ポテンシャルの黄金期</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>スキルよりも学習意欲・基礎力・人柄で評価される</strong>。実績ゼロでも勝負できる唯一の時期</li>
                <li>・第二新卒の採用予定企業は80.9%。「短期離職＝不利」はもはや過去の常識</li>
                <li>・転職者の50.5%が賃金増・減少は16.8%のみ。低待遇からの仕切り直しに最適</li>
                <li>・未経験からのIT転職もこの時期が最有利。研修制度の厚い企業を選び、基礎を固める</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>20代後半（25〜29歳）：実務経験を武器にキャリアを構築</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・女性の転職入職率16.8%と最も転職が活発な時期。<strong>実務2〜3年＋伸びしろの両取り評価</strong></li>
                <li>・SES→自社開発、保守運用→開発など、キャリアの軸を作る職種転換のベストタイミング</li>
                <li>・転職者の46.3%が賃金増、1割以上の増加も37.9%。年収交渉の材料が揃う時期</li>
                <li>・30代を見据えて「専門領域」を1つ決め、深掘りできる環境を選ぶ</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">出典: 厚生労働省「令和6年雇用動向調査」、マイナビキャリアリサーチLab「2025年以降の第二新卒採用ニーズは8割超」（いずれも2026年6月参照）</p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              20代で作った土台は30代で「換金」されます。30代の評価軸や年収相場は<a href="/articles/age-30s/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>30代女性エンジニアの転職ガイド</a>で解説しているので、5年後の自分を想像しながら読み比べてみてください。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 第二新卒・ポテンシャル採用 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">第二新卒・ポテンシャル採用の活かし方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              新卒入社1〜3年程度で転職する「第二新卒」は、いまや採用市場の主役の一角です。マイナビ「企業人材ニーズ調査」によると、<strong>第二新卒を今後採用する予定の企業は80.9%</strong>（「積極的に採用する予定」33.7%＋「積極的ではないが採用する予定」47.2%）。従業員1000人以上の大企業に限ると<strong>87.9%</strong>にのぼります。新卒採用の充足難と若手離職の常態化を背景に、企業側が第二新卒を「新卒の二次募集」として明確に位置づけるようになりました。
            </p>
            <p>
              ポテンシャル採用で企業が見ているのは、現時点のスキルではなく「ビジネス基礎力＋学習の再現性」です。社会人経験で身についた報連相・納期意識は新卒にない武器であり、そこに学習実績（ポートフォリオ・資格）を重ねれば、未経験職種への転換も現実的になります。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>第二新卒の面接を通す3つのポイント</h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>退職理由は「不満」ではなく「方向転換」で語る</strong>：「残業が多かった」で終わらせず、「◯◯を実現できる環境で△△に取り組みたい」と次の選択理由に変換する</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>「次は辞めない根拠」を用意する</strong>：企業側の最大の懸念は再離職。企業選びの軸と、その会社がなぜ軸に合うかを具体的に示す</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>小さくても学習の実物を見せる</strong>：GitHubの公開リポジトリ、資格、技術ブログ。「勉強中です」より「作りました」が10倍強い</span>
              </li>
            </ul>
          </div>
          <p className="text-text-light text-sm mt-3">出典: マイナビキャリアリサーチLab「2025年以降の第二新卒採用ニーズは8割超」（2026年6月参照）</p>
        </div>
      </section>

      {/* sec5 未経験から */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から20代でエンジニアになる方法</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              未経験からのエンジニア転職は、20代が最も有利です。レバテック「IT人材白書2024」によると、エンジニア未経験者を「採用している」企業は<strong>41.6%</strong>、「検討中」を含めると<strong>約7割</strong>。そして未経験可求人の多くは20代を想定したポテンシャル採用です。30代以降は「前職スキル×IT」の掛け合わせが必須になるのに対し、20代は学習意欲と基礎力だけで挑戦の土俵に立てます。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              ["STEP1", "基礎学習（1〜3か月）", "Progate・Udemy等でHTML/CSS・JavaScriptまたはPythonの基礎を学ぶ。1日2時間の継続が目安。独学が不安な場合はスクールの利用も選択肢。"],
              ["STEP2", "ポートフォリオ作成（1〜2か月）", "オリジナルのWebアプリを作り、GitHubでコードを公開してデプロイまで行う。チュートリアルの写経ではなく「自分の課題を解決する何か」が評価される。"],
              ["STEP3", "資格で土台を可視化", "ITパスポート→基本情報技術者の順で取得。書類選考での「本気度」の客観的な証明になり、ポテンシャル採用の通過率を底上げする。"],
              ["STEP4", "エージェント登録・応募", "未経験向け求人に強いエージェントに2〜3社登録。研修制度の充実度・配属先の実態を必ず確認し、「入社後に育つ環境」を基準に選ぶ。"],
              ["STEP5", "面接対策・入社", "「なぜエンジニアか」「なぜこの会社か」「入社後どう学び続けるか」の3点を自分の言葉で。学習の記録（ブログ・GitHubの草）はそのまま説得力になる。"],
            ].map(([step, title, desc], i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
                <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#c15f47" }}>{step}</span>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-text-light text-sm mt-3">出典: レバテック「IT人材白書2024」（2026年6月参照）</p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              学習ロードマップの全体像は<a href="/articles/beginner/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>未経験からエンジニアになるガイド</a>、スクールの選び方は<a href="/articles/programming-school/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>プログラミングスクールの選び方</a>、資格の勉強法は<a href="/articles/cert-kihonjoho/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>基本情報技術者試験ガイド</a>でそれぞれ詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 キャリアの土台 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">20代のうちに作るキャリアの土台</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              20代の転職は「次の会社」だけでなく「30代の選択肢」を決める投資です。30代の転職市場では専門性とリーダー経験が評価軸になるため（<a href="/articles/age-30s/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>30代ガイド</a>参照）、20代のうちに次の4つを意識して環境を選ぶと、後のキャリアが大きく変わります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>① 専門性の軸を1つ決める</h3>
              <p className="text-sm text-text-light leading-relaxed">バックエンド・フロントエンド・インフラ・データのどれか1つで「これは任せられる」と言われる深さを作る。軸が1本あると、30代での年収交渉と職種展開が一気に楽になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>② モダンな開発環境に身を置く</h3>
              <p className="text-sm text-text-light leading-relaxed">クラウド（AWS/GCP）、コンテナ、CI/CD、コードレビュー文化のある環境を選ぶ。レガシー保守だけの20代と、モダン開発を経験した20代では、30代の求人レンジが変わります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>③ 小さなリーダー経験を拾う</h3>
              <p className="text-sm text-text-light leading-relaxed">後輩のOJT、レビュー担当、小さな機能のリード。20代後半でこの経験があると、30代でのテックリード・マネジメント路線への扉が開きます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>④ 長く働ける環境かを見ておく</h3>
              <p className="text-sm text-text-light leading-relaxed">育休の取得実績・復帰率、リモートやフレックスの利用率、女性エンジニアの在籍数。20代女性の離職理由の上位は「労働条件」（25〜29歳で15.2%）。消耗しない環境選びは20代から始まっています。</p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">出典: 厚生労働省「令和6年雇用動向調査」（2026年6月参照）</p>
        </div>
      </section>

      {/* sec7 進め方 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">20代の転職活動の進め方</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              20代の転職活動は在職中に進めるのが原則です。売り手市場とはいえ、勢いだけの転職は「不満の引っ越し」になりがち。標準的な期間は<strong>準備2〜4週間＋応募〜内定2〜3か月</strong>の計3〜4か月が目安です。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "転職理由を言語化する（1週間）", "「何が嫌か」ではなく「何を得たいか」に変換する。年収・スキル・働き方・環境のどれが最優先かを1つに絞ると、企業選びの軸がぶれない。"],
              ["STEP2", "経験の棚卸し", "担当業務・使用技術・工夫した点を書き出す。経験が浅くても「研修で学んだこと」「改善提案」「学習の継続」は立派な材料になる。"],
              ["STEP3", "エージェント登録・市場価値の確認", "IT特化型＋女性特化型の2〜3社に登録し、想定年収レンジを確認。20〜24歳の転職者の50.5%が賃金増という相場感を基準に提示額を評価する。"],
              ["STEP4", "応募・面接", "20代は「伸びしろの根拠」が問われる。学習習慣・キャッチアップの速さ・素直さをエピソードで示す。面接は場数で上達するので、本命の前に2〜3社受けておく。"],
              ["STEP5", "条件確認・意思決定", "年収だけでなく、研修・配属・残業実態・育成文化を確認。迷ったら「3年後の自分が強くなっている方」を選ぶのが20代の鉄則。交渉はエージェント経由で。"],
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
          <div
            className="mt-8 rounded-xl border-l-4 p-5"
            style={{ borderColor: "#c15f47", backgroundColor: "#fdf6ee" }}
          >
            <h3 className="font-bold mb-2" style={{ color: "#c15f47" }}>注意点</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・転職回数が多すぎるとマイナス評価になることも。20代で3回以上の転職は慎重に。</li>
              <li>・「なんとなく」の転職は避け、明確な転職理由を持つことが大切です。</li>
              <li>・年収だけで判断せず、成長環境や将来性も考慮しましょう。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec8 おすすめエージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">
            20代女性エンジニアにおすすめの転職エージェント
          </h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              20代の転職活動では、エージェント選びが成功のカギを握ります。以下に、20代女性エンジニアにおすすめの転職エージェントを紹介します。
            </p>
          </div>

          <div className="mt-6 space-y-6">
            {[
              {
                name: "レバテックキャリア",
                type: "IT特化型",
                point: "IT業界トップクラスの求人数48,000件以上。20代後半のキャリアアップ転職に最適。年収70万円以上UPの実績多数。",
              },
              {
                name: "Geekly",
                type: "IT特化型",
                point: "IT・Web・ゲーム業界に強み。平均年収アップ率81%。20代の若手エンジニアの転職支援実績が豊富。",
              },
              {
                name: "ワークポート",
                type: "IT特化型",
                point: "未経験からのエンジニア転職に強い。20代前半や未経験者でも利用しやすく、手厚いサポートが特徴。",
              },
              {
                name: "type女性の転職エージェント",
                type: "女性特化型",
                point: "女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介してくれるため、長期的なキャリア形成に最適。",
              },
            ].map((agent) => (
              <div
                key={agent.name}
                className="rounded-xl border p-6"
                style={{ borderColor: "#d9c7b8" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-bold">{agent.name}</h3>
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: "#7c3a55" }}
                  >
                    {agent.type}
                  </span>
                </div>
                <p className="text-sm text-text-light">{agent.point}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-8 rounded-xl p-6 text-center"
            style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}
          >
            <p className="font-bold text-lg mb-2">
              20代女性エンジニアの転職エージェント選び
            </p>
            <p className="text-sm text-text-light mb-4">
              複数のエージェントに登録して比較検討するのがおすすめです。IT特化型と女性特化型を併用することで、幅広い選択肢が得られます。
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

      {/* sec9 成功事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Aさん（20代後半・経験者の職種転換）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">SES企業の保守運用エンジニア / 年収330万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p>
                  <p className="text-sm font-bold">自社開発企業のWebエンジニア / 年収420万円・リモート併用</p>
                </div>
              </div>
              <p className="text-sm text-text-light">実務2年半の保守運用経験に加え、業務外でReactを学習しポートフォリオを公開。IT特化型エージェント経由で「実務基礎×学習意欲」のポテンシャル評価を受け、開発職への転換と年収90万円アップを同時に実現したケースです。25〜29歳は転職者の46.3%が賃金増・職種転換も通りやすい時期で、最も典型的な成功パターンです。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Bさん（20代前半・第二新卒の未経験挑戦）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">新卒2年目の一般事務 / 年収290万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p>
                  <p className="text-sm font-bold">研修制度のあるWeb系企業のバックエンドエンジニア / 年収340万円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">事務職のかたわら半年間Pythonを学習し、ITパスポートを取得して第二新卒枠で応募。「事務で培った業務理解×学習の継続実績」を評価され、研修制度の厚い企業に入社したケースです。第二新卒の採用予定企業は80.9%にのぼり、20代前半なら実務未経験でもポテンシャル採用の対象になります。</p>
            </div>
          </div>
          <p className="text-xs text-text-light mt-4">※事例は20代女性エンジニアの典型的な転職パターンをもとに構成したモデルケースです。</p>
        </div>
      </section>

      {/* sec10 FAQ */}
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

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>・出典: 厚生労働省「令和6年雇用動向調査」（2026年6月参照）— 女性の転職入職率（20〜24歳14.3%、25〜29歳16.8%。男性は13.4%・15.1%）、転職者の賃金変動（増加：20〜24歳50.5%・25〜29歳46.3%、うち1割以上の増加38.5%・37.9%。減少：16.8%・29.2%）、前職を辞めた理由（25〜29歳女性：労働時間・休日等の労働条件15.2%、職場の人間関係14.0%、結婚8.1%、出産・育児1.7%）</li>
            <li>・出典: doda（パーソルキャリア）「平均年収ランキング2025」（2026年6月参照）— 全体429万円、20代365万円（男性392万円・女性341万円）、IT/通信業種の20代381万円、エンジニア（IT/通信）職種469万円。集計期間2024年9月〜2025年8月・約60万件</li>
            <li>・出典: doda（パーソルキャリア）「転職求人倍率レポート（2026年4月）」（2026年6月参照）— 全体2.38倍、エンジニア（IT・通信）は10倍超の高水準</li>
            <li>・出典: パーソルキャリア「年代別 転職時の年収変動レポート（2025年度上期）」（2026年6月参照）— 20代の転職時の平均決定年収は2019年度同期比で13%アップ</li>
            <li>・出典: マイナビキャリアリサーチLab「2025年以降の第二新卒採用ニーズは8割超」（2026年6月参照）— 第二新卒を今後採用する予定の企業80.9%（積極的に採用33.7%・積極的ではないが採用47.2%）、従業員1000人以上では87.9%</li>
            <li>・出典: レバテック「IT人材白書2024」（2026年6月参照）— エンジニア未経験者を「採用している」企業41.6%、「検討中」含め約7割</li>
            <li>・出典: ヒューマンリソシア「IT分野のジェンダーギャップに関するグローバル調査」（2026年6月参照）— 日本のITエンジニア女性比率18.8%（OECD平均20.6%）</li>
            <li>・出典: ウィルオブテック「未経験からエンジニア転職を叶える全知識」（2026年6月参照）— 未経験転職1年目の年収相場300万〜400万円</li>
          </ul>
          <p className="text-xs text-text-light mt-4">※年収・割合などの数値は調査時点のものであり、企業・地域・スキルにより変動します。</p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/age-30s/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>30代女性エンジニアの転職ガイド</h3>
              <p className="text-sm text-text-light">年収相場・未経験の現実・両立戦略</p>
            </a>
            <a href="/articles/salary-by-age/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>年代別年収ガイド</h3>
              <p className="text-sm text-text-light">20代〜40代の年収相場と上げ方</p>
            </a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からエンジニアになるガイド</h3>
              <p className="text-sm text-text-light">学習ロードマップと職種の選び方</p>
            </a>
            <a href="/articles/programming-school/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>プログラミングスクールの選び方</h3>
              <p className="text-sm text-text-light">失敗しないスクール選びの基準</p>
            </a>
            <a href="/articles/cert-kihonjoho/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>基本情報技術者試験ガイド</h3>
              <p className="text-sm text-text-light">20代の土台づくりに効く定番資格</p>
            </a>
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアのキャリアパス</h3>
              <p className="text-sm text-text-light">5年後・10年後のキャリア設計を解説</p>
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
              20代の今がチャンス！理想の転職を実現しよう
            </h2>
            <p className="text-white/90 mb-6">
              20代女性エンジニアの転職は選択肢が豊富。
              <br />
              まずはエージェントに相談して、あなたの市場価値を確認してみませんか？
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
