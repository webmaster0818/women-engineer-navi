import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの転職成功パターン分析｜データで見る成功の共通点【2026年】",
  description:
    "女性エンジニアの転職成功パターンを公的統計で分析。転職者の40.5%が賃金増・増減差+11.1ポイントは過去10年で最大（厚労省 令和6年雇用動向調査）、成功者の平均応募社数は31.9社（doda）。未経験・経験者・復職の3ルート別戦略と、統計に基づくモデルケースを出典付きで解説します。",
  alternates: { canonical: "/articles/success-stories/" },
  openGraph: {
    title: "女性エンジニアの転職成功パターン分析｜データで見る成功の共通点【2026年】",
    description:
      "転職者の40.5%が賃金増・成功者の平均応募社数31.9社。架空の体験談ではなく、公的統計から見える転職成功の共通要因をパターン別に分析します。",
    url: "https://women-engineer.com/articles/success-stories/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの転職成功パターン分析｜データで見る成功の共通点【2026年】",
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
    "転職者の40.5%が賃金増・成功者の平均応募社数31.9社。架空の体験談ではなく、公的統計から見える転職成功の共通要因をパターン別に分析します。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/success-stories/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "転職で年収が上がる人はどれくらいいますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省「令和6年雇用動向調査」によると、2024年の転職入職者のうち前職より賃金が「増加」した人は40.5%（うち1割以上の増加は29.4%）で、「減少」の29.4%を11.1ポイント上回りました。増加した割合は2015年以降で最も高く、転職が報われやすい市場環境です。年代別では20〜24歳の50.5%を筆頭に、20〜40代はいずれも45〜50%が賃金増を実現しています。",
      },
    },
    {
      "@type": "Question",
      name: "何社くらい応募すれば内定が出ますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "doda「転職成功者の平均応募社数」調査によると、dodaで転職を決めた人の平均応募社数は31.9社で、94.9%が2社以上、66.4%が11社以上に応募しています。書類選考・面接の通過率から、内定1社を得る目安は約27社への応募・5社の面接とされています。数社落ちるのは統計的に当たり前で、「応募数を確保すること」自体が成功者の共通行動です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験からの転職に「成功率」のデータはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "未経験転職の成功率そのものを示す公的統計はありませんが、参考になる公開データはあります。レバテック「IT人材白書2024」ではエンジニア未経験者を「採用している」企業が41.6%、「検討中」を含めると約7割。dodaの転職求人倍率ではエンジニア（IT・通信）は10倍超の売り手市場です。一方、未経験1年目の年収は300万〜400万円程度に一度下がるのが一般的なので、前職スキル×ITで入口の職種を選び、年収の谷を資金計画に織り込むのが定石です。",
      },
    },
    {
      "@type": "Question",
      name: "ネット上の転職体験談はどこまで参考にすべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "匿名の体験談は本人確認も再現性の検証もできないN=1の情報で、うまくいった人だけが語る「生存者バイアス」もかかります。傾向は厚生労働省「雇用動向調査」などの公的統計で確認し、個別の実例は内閣府「理工チャレンジ（リコチャレ）」のロールモデル紹介、東京都「女性ITエンジニア育成事業」、企業公式の採用ブログなど発信元が明確なものを参照するのがおすすめです。なお当記事のモデルケースも統計に基づいて一般化した架空の設定であり、特定個人の体験談ではありません。",
      },
    },
    {
      "@type": "Question",
      name: "育児などのブランクがあっても転職に成功できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。第1子出産前後の妻の就業継続率は69.5%（国立社会保障・人口問題研究所「第16回出生動向基本調査」）、女性の育児休業取得率は86.6%（厚生労働省「令和6年度雇用均等基本調査」）まで上がっており、情報通信業のテレワーク導入率は94.3%（総務省）とエンジニアは復職と相性の良い職種です。教育訓練給付（給付率最大80%・年間上限64万円）などの公的支援でスキルを更新してから動く方法もあります。",
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
              { label: "転職成功パターン分析" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#c15f47" }}
            >
              成功パターン分析
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの転職成功パターン分析
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                データで見る成功の共通点と3つの戦略ルート【2026年】
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
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>この記事の結論｜データから見える成功の3要素</h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>要素①：追い風の市場を味方につける。</strong>転職者の40.5%が前職より賃金増（減少29.4%）で、「増加−減少」の差+11.1ポイントは2015年以降で最大（厚生労働省「令和6年雇用動向調査」）。エンジニア（IT・通信）の求人倍率は10倍超、女性比率は18.8%で企業は採用を強化中です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>要素②：行動量を確保する。</strong>転職成功者の平均応募社数は31.9社、66.4%が11社以上に応募（doda）。「数社落ちたら諦める」は統計的に早すぎます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>要素③：自分のパターンに合った定石を踏む。</strong>未経験から・経験者のキャリアアップ・復職からの3ルートで戦略は別物。20〜40代はいずれの年代も転職者の45〜50%が賃金増を実現しており、定石に沿えば再現性は高い領域です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>本記事は架空の体験談を掲載しません。</strong>公的統計・公開調査に基づくパターン分析と、統計に整合させた「モデルケース」（特定個人の体験談ではない旨を明示）で構成しています。</span>
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. データで見る「転職成功」の現在地</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 年代別データ：賃金が増えた転職者の割合【統計テーブル】</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. パターン別の成功戦略（未経験・経験者・復職）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 成功者に共通する4つの行動</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 統計に基づくモデルケース3例</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 実在の公開事例・ロールモデルの探し方</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 現在地 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データで見る「転職成功」の現在地</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「転職に成功した」という言葉は人によって意味が違いますが、統計で追えるもっとも客観的な指標は<strong>賃金の増減</strong>です。厚生労働省「令和6年雇用動向調査」によると、2024年の転職入職者のうち前職より賃金が「増加」した人は<strong>40.5%</strong>（うち1割以上の増加は29.4%）。「減少」は29.4%で、<strong>増加が減少を11.1ポイント上回りました</strong>。増加した割合は比較可能な2015年以降で最も高く、いまは統計的に「転職が報われやすい」局面です。
            </p>
            <p>
              転職そのものも特別なイベントではなくなっています。dodaの調査では2025年に転職した人の平均年齢は<strong>32.9歳（女性は31.4歳）</strong>で3年連続上昇。同調査の転職入職率を見ても、20〜50代の働き盛り世代では<strong>女性の方が男性より転職入職率が高い</strong>（例：25〜29歳で女性16.8%・男性15.1%、30〜34歳で女性13.2%・男性10.3%）状況です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>40.5%</p>
              <p className="text-sm font-bold mt-2">転職で賃金が増加した人の割合</p>
              <p className="text-xs text-text-light mt-1">2015年以降で最高。減少（29.4%）を11.1pt上回る</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>10倍超</p>
              <p className="text-sm font-bold mt-2">エンジニア（IT・通信）求人倍率</p>
              <p className="text-xs text-text-light mt-1">全職種平均2.38倍に対し圧倒的な売り手市場</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>18.8%</p>
              <p className="text-sm font-bold mt-2">日本のITエンジニア女性比率</p>
              <p className="text-xs text-text-light mt-1">OECD平均20.6%を下回り、企業は女性採用を強化中</p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「令和6年雇用動向調査」、doda「転職者の平均年齢調査【2025年版】」「転職求人倍率レポート（2026年4月）」、ヒューマンリソシア「IT分野のジェンダーギャップに関するグローバル調査」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              つまり「転職成功」は一部の特別な人の物語ではなく、<strong>条件のそろった市場で定石どおりに動いた人に高い確率で起きている現象</strong>です。本記事では、その「定石」を年代別データ・パターン別戦略・成功者の共通行動の順に分解していきます。なお、ネット上に多い匿名の成功体験談は検証ができないため、本記事では一切使わず、出典を明示できるデータのみで構成しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 年代別テーブル */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年代別データ：賃金が増えた転職者の割合【統計テーブル】</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「何歳までなら転職で成功できるのか」という不安に対する、現時点でもっとも信頼できる答えがこの表です。厚生労働省「令和6年雇用動向調査」の年齢階級別データを見ると、<strong>20〜24歳から45〜49歳まで、どの年代でも転職者の45〜50%が賃金増</strong>を実現しています。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年代</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>女性の転職入職率</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>賃金が増加した割合</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>うち1割以上の増加</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>賃金が減少した割合</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20〜24歳</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>14.3%</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>50.5%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>38.5%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>16.8%</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>25〜29歳</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>16.8%</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>46.3%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>37.9%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>29.2%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30〜34歳</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>13.2%</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>46.1%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>36.0%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>24.2%</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>35〜39歳</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>10.5%</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>45.5%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>35.3%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>24.3%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40〜44歳</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>10.2%</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>45.9%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>33.2%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>29.0%</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>45〜49歳</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>10.7%</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>46.4%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>29.1%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>23.8%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>全年代計</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>―</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>40.5%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>29.4%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>29.4%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「令和6年雇用動向調査」（2026年6月参照）。賃金変動は転職入職者（男女計・前職雇用者）、転職入職率は女性の数値。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              注目すべきは2点です。第一に、<strong>賃金増の割合は年代でほとんど下がりません</strong>。「30代後半からは不利」というイメージに反して、45〜49歳でも46.4%が賃金増です。第二に、女性の転職入職率は20代後半の16.8%をピークに緩やかに下がるものの、40代でも10%超。<strong>遅すぎる年代は統計上存在しない</strong>と言えます。年代ごとの具体的な戦い方は<a href="/articles/age-30s/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>30代女性エンジニアの転職ガイド</a>などの年代別ガイドで詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 パターン別戦略 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">パターン別の成功戦略（未経験・経験者・復職）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              データを踏まえると、女性エンジニアの転職成功は大きく3つのパターンに整理できます。スタート地点によって「成功の定義」も「踏むべき定石」も異なるため、まず自分がどのパターンかを確認してください。
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>パターン①：未経験からエンジニアへ</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                エンジニア未経験者を「採用している」企業は41.6%、「検討中」を含めると約7割（レバテック「IT人材白書2024」）。門戸は開いていますが、<strong>1年目の年収は300万〜400万円程度に一度下がるのが一般的</strong>です。このパターンの「成功」は初年度の年収ではなく、「実務経験を最短で積める入口に入れたか」で測るのが正解。前職スキル×IT（営業→セールスエンジニア、事務→社内SE、品質管理→テスト設計など）で入口を選び、半年〜1年の学習とポートフォリオで本気度を示すのが定石です。
              </p>
              <p className="text-sm text-text-light">
                → 学習ロードマップと職種の選び方は<a href="/articles/beginner/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>未経験からエンジニアになるガイド</a>へ
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>パターン②：経験者のキャリアアップ</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                統計上もっとも再現性が高いパターンです。30〜34歳の転職者の46.1%が賃金増（うち1割以上の増加36.0%）で、エンジニア求人倍率10倍超の需要がそれを支えています。定石は「年収・専門性・働き方のどれを上げるか」を1つに決めること。年収ならクラウド・AI・セキュリティなど高需要領域への軸足ずらし、働き方なら情報通信業のテレワーク導入率94.3%（総務省）を活かした「年収維持×リモート」転職が現実的です。
              </p>
              <p className="text-sm text-text-light">
                → 年収相場と交渉の進め方は<a href="/articles/salary/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</a>、年代別戦略は<a href="/articles/age-30s/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>30代の転職ガイド</a>へ
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>パターン③：出産・育児などのブランクからの復職</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                第1子出産前後の妻の就業継続率は69.5%（国立社会保障・人口問題研究所）まで上昇し、女性の育児休業取得率は86.6%。一度離れた人にも、教育訓練給付（給付率最大80%・年間上限64万円）などスキル更新の公的支援が整っています。このパターンの「成功」は復帰直後の条件ではなく、<strong>「キャリアを再接続できたか」と「両立できる環境を選べたか」</strong>。時短・リモートの運用実態を確認し、段階的にフルタイムへ戻す設計が定石です。
              </p>
              <p className="text-sm text-text-light">
                → ブランク期間の説明方法や支援制度は<a href="/articles/return-to-work/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>ブランクからの復職ガイド</a>へ
              </p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「令和6年雇用動向調査」「令和6年度雇用均等基本調査」「教育訓練給付制度」、レバテック「IT人材白書2024」、国立社会保障・人口問題研究所「第16回出生動向基本調査」、総務省「令和6年通信利用動向調査」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              どのパターンでも、5年後・10年後にどの専門性で勝負するかという長期設計があると意思決定がぶれません。<a href="/articles/career-path/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>キャリアパス設計ガイド</a>では、マネジメント・スペシャリストなど5つの方向性を整理しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 共通する行動 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">成功者に共通する4つの行動</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              パターンが違っても、公開調査から見える「成功した転職者の行動」には共通点があります。属人的な才能ではなく、誰でも真似できる行動レベルに分解すると次の4つです。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["行動1", "応募数を確保する", "dodaの調査では転職成功者の平均応募社数は31.9社。94.9%が2社以上、66.4%が11社以上に応募しています。書類・面接の通過率から内定1社の目安は約27社応募・5社面接とされ、「数社落ちた」は失敗のサインではなく統計上の通過点です。"],
              ["行動2", "軸を1つに決める", "年収・専門性・働き方のどれを最優先するかを先に決める。全部を同時に狙うと求人の評価基準がぶれ、転職活動が長期化する最大要因になります。優先軸以外は「現状維持でOK」と割り切るのがコツです。"],
              ["行動3", "実績を定量化して「再現性」で語る", "「障害対応時間を◯%削減」「後輩2名のOJTを担当」など、数字と役割で職務経歴書を書く。採用側が見ているのは過去の成果そのものではなく、同じ成果を自社で再現できる根拠です。"],
              ["行動4", "エージェントを併用し、交渉を任せる", "転職者の40.5%が賃金増という相場を基準に提示額を評価し、自分では言い出しにくい年収交渉はエージェント経由で行う。IT特化型と女性特化型の併用で、技術評価と両立環境の両面から求人を比較できます。"],
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
          <p className="text-text-light text-sm mt-3">
            出典: doda（パーソルキャリア）「『何社受ける？』転職成功者の平均応募社数」、厚生労働省「令和6年雇用動向調査」（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec5 モデルケース */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">統計に基づくモデルケース3例</h2>
          <div className="rounded-xl border p-4 mb-6 text-sm text-text-light" style={{ borderColor: "#c15f47", backgroundColor: "#fdf6ee" }}>
            <strong>【重要】</strong>以下は公的統計・公開調査の数値に前提条件を整合させて作成した<strong>一般化したモデルケース（架空の設定）であり、特定個人の体験談ではありません</strong>。実際の結果はスキル・地域・企業により異なります。
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>モデルケース①：20代後半・未経験からの職種転換</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前（想定）</p>
                  <p className="text-sm font-bold">販売職 / 年収330万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後（想定）</p>
                  <p className="text-sm font-bold">テスト・QA職 / 1年目年収320万円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">
                半年間の学習＋ポートフォリオ作成を経て、接客で培った報告・調整力を活かせるQA職へ。未経験1年目の年収相場（300万〜400万円程度）どおり初年度はほぼ横ばいですが、実務経験2〜3年を積んだ後の2回目の転職で年収増を狙う設計です。25〜29歳は転職者の46.3%が賃金増の年代で、経験を積んだ後の伸びしろが大きいルートです。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>モデルケース②：30代前半・経験者のキャリアアップ</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前（想定）</p>
                  <p className="text-sm font-bold">SIerのシステムエンジニア / 年収450万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後（想定）</p>
                  <p className="text-sm font-bold">自社開発企業のバックエンドエンジニア / 年収510万円・リモート併用</p>
                </div>
              </div>
              <p className="text-sm text-text-light">
                クラウド移行案件の経験を棚卸しし、IT特化型エージェント経由で十数社に応募して年収約13%増を実現する想定です。30〜34歳は転職者の46.1%が賃金増・36.0%が1割以上の増加を実現している年代で、この上げ幅は統計の中央的なレンジに収まります。doda「平均年収ランキング2025」のエンジニア（IT/通信）平均469万円を上回る水準です。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>モデルケース③：30代後半・育児ブランクからの復職</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前（想定）</p>
                  <p className="text-sm font-bold">Web系エンジニア4年→出産・育児で1年半のブランク</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後（想定）</p>
                  <p className="text-sm font-bold">時短正社員のエンジニア / 年収400万円台→段階的にフルタイム復帰</p>
                </div>
              </div>
              <p className="text-sm text-text-light">
                ブランク中に教育訓練給付を活用してスキルを更新し、テレワーク導入率94.3%の情報通信業で時短・リモート前提の求人を選ぶ想定です。復帰直後の年収はフルタイム時より抑えめでも、勤務時間を戻すタイミングで前職水準への回復を設計します。育休取得実績と復帰率の「運用実態」を面接で確認するのがこのパターンの肝です。
              </p>
            </div>
          </div>
          <p className="text-xs text-text-light mt-4">
            ※前提とした数値の出典: 厚生労働省「令和6年雇用動向調査」、doda「平均年収ランキング2025」、ウィルオブテック「未経験からエンジニア転職を叶える全知識」、総務省「令和6年通信利用動向調査」、厚生労働省「教育訓練給付制度」（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec6 実在の公開事例 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">実在の公開事例・ロールモデルの探し方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「実際に働いている女性エンジニアの話を読みたい」という場合は、<strong>発信元が明確で検証可能な公開情報源</strong>にあたるのが確実です。匿名掲示板やSNSの体験談ではなく、次のような場所を起点にしてください。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>公的機関の公開情報</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>内閣府男女共同参画局「理工チャレンジ（リコチャレ）」</strong>：理工系分野で働く女性のロールモデル情報や応援団体の取り組みを公式サイトで公開</li>
                <li>・<strong>東京都「女性ITエンジニア育成事業」</strong>：都が実施する無料の育成・転職支援事業。事業内容は<a href="/articles/tokyo-women-training/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>解説記事</a>で紹介しています</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>企業公式の公開情報</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>企業の採用ブログ・技術ブログの社員インタビュー</strong>：実名・所属つきで公開され、働き方や制度の利用実態まで読み取れる</li>
                <li>・<strong>エージェント各社が公開する転職成功者調査</strong>：個人の物語ではなく集計データとして傾向を確認できる</li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>体験談を読むときの3つの注意</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>N=1である</strong>：1人の成功例はあなたに再現できるとは限らない。傾向は統計で確認する</li>
              <li>② <strong>生存者バイアスがかかる</strong>：公開されるのは基本的に「うまくいった話」。失敗側の分母は見えない</li>
              <li>③ <strong>時期と文脈を確認する</strong>：数年前の体験談は市場環境（求人倍率・年収相場・制度）が現在と異なる場合がある</li>
            </ul>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 内閣府男女共同参画局「理工チャレンジ（リコチャレ）」、東京都「女性ITエンジニア育成事業」（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
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

      {/* sec8 FAQ */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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
            <li>・出典: 厚生労働省「令和6年雇用動向調査」（2026年6月参照）— 転職入職者の賃金変動（増加40.5%・うち1割以上の増加29.4%、減少29.4%、増減差+11.1ポイント。増加の割合は2015年以降で最高）、年齢階級別の賃金増加割合（20〜24歳50.5%、25〜29歳46.3%、30〜34歳46.1%、35〜39歳45.5%、40〜44歳45.9%、45〜49歳46.4%）、女性の転職入職率（20〜24歳14.3%、25〜29歳16.8%、30〜34歳13.2%、35〜39歳10.5%、40〜44歳10.2%、45〜49歳10.7%）</li>
            <li>・出典: doda（パーソルキャリア）「『何社受ける？』転職成功者の平均応募社数」（2026年6月参照）— 転職成功者の平均応募社数31.9社、94.9%が2社以上・66.4%が11社以上に応募、内定1社の目安は約27社応募・5社面接</li>
            <li>・出典: doda（パーソルキャリア）「転職者の平均年齢調査【2025年版】」（2026年6月参照）— 転職者の平均年齢32.9歳（男性33.8歳・女性31.4歳）で3年連続上昇</li>
            <li>・出典: doda（パーソルキャリア）「転職求人倍率レポート（2026年4月）」（2026年6月参照）— 全体2.38倍、エンジニア（IT・通信）は10倍超の高水準</li>
            <li>・出典: doda（パーソルキャリア）「平均年収ランキング2025」（2026年6月参照）— 全体429万円、エンジニア（IT/通信）469万円。集計期間2024年9月〜2025年8月・約60万件</li>
            <li>・出典: レバテック「IT人材白書2024」（2026年6月参照）— エンジニア未経験者を「採用している」企業41.6%、「検討中」含め約7割</li>
            <li>・出典: ヒューマンリソシア「IT分野のジェンダーギャップに関するグローバル調査」（2026年6月参照）— 日本のITエンジニア女性比率18.8%（OECD平均20.6%）</li>
            <li>・出典: 厚生労働省「令和6年度雇用均等基本調査」（2026年6月参照）— 育児休業取得率：女性86.6%</li>
            <li>・出典: 国立社会保障・人口問題研究所「第16回出生動向基本調査」（2026年6月参照）— 第1子出産前後の妻の就業継続率69.5%（2015〜19年出産）</li>
            <li>・出典: 総務省「令和6年通信利用動向調査」（2026年6月参照）— テレワーク導入率：情報通信業94.3%</li>
            <li>・出典: 厚生労働省「教育訓練給付制度」（2026年6月参照）— 専門実践教育訓練給付の給付率最大80%（年間上限64万円）</li>
            <li>・出典: ウィルオブテック「未経験からエンジニア転職を叶える全知識」（2026年6月参照）— 未経験転職1年目の年収相場300万〜400万円</li>
            <li>・出典: 内閣府男女共同参画局「理工チャレンジ（リコチャレ）」（2026年6月参照）— 理工系分野で働く女性のロールモデル情報を公開</li>
            <li>・出典: 東京都「女性ITエンジニア育成事業」（2026年6月参照）— 都が実施する女性向けIT育成・転職支援事業（受託: アデコ株式会社）</li>
          </ul>
          <p className="text-xs text-text-light mt-4">※年収・割合などの数値は調査時点のものであり、企業・地域・スキルにより変動します。本記事のモデルケースは統計に基づく一般化した想定であり、特定個人の体験談ではありません。</p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からエンジニアになるガイド</h3>
              <p className="text-sm text-text-light">学習ロードマップと職種の選び方</p>
            </a>
            <a href="/articles/age-30s/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>30代女性エンジニアの転職ガイド</h3>
              <p className="text-sm text-text-light">年収相場・未経験の現実・両立戦略</p>
            </a>
            <a href="/articles/return-to-work/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ブランクからの復職ガイド</h3>
              <p className="text-sm text-text-light">ブランクの説明方法と公的支援制度</p>
            </a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3>
              <p className="text-sm text-text-light">平均年収と年収アップの方法を解説</p>
            </a>
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>キャリアパス設計ガイド</h3>
              <p className="text-sm text-text-light">5年後・10年後のキャリア設計</p>
            </a>
            <a href="/articles/tokyo-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都「女性ITエンジニア育成事業」解説</h3>
              <p className="text-sm text-text-light">公的な無料育成事業の内容と申込方法</p>
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
