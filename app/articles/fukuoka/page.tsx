import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの福岡転職ガイド｜年収相場・働きやすい企業・移住の選択肢",
  description:
    "福岡で転職したい女性エンジニア向けガイド。スタートアップ都市・エンジニアフレンドリーシティ福岡の求人動向、年収相場（SE約523万・東京比較）、LINEヤフー・ヌーラボ・Fusicなど働きやすい企業、移住支援金100万円やリモート移住、未経験ロードマップ、転職事例まで実データで解説します。",
  alternates: { canonical: "/articles/fukuoka/" },
  openGraph: {
    title: "女性エンジニアの福岡転職ガイド｜年収相場・働きやすい企業・移住の選択肢",
    description:
      "福岡のIT転職市場・年収相場・女性が働きやすい企業・リモート移住・転職事例を実データで徹底解説。「女性エンジニア 転職 福岡」の決定版ガイド。",
    url: "https://women-engineer.com/articles/fukuoka/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの福岡転職ガイド｜年収相場・働きやすい企業・移住の選択肢",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
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
    "福岡で転職したい女性エンジニア向けに、IT転職市場・年収相場・働きやすい企業・移住支援・リモート移住・転職事例を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/fukuoka/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "福岡の女性エンジニアの年収は東京と比べてどのくらい低いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "福岡県のシステムエンジニアの平均年収は約523万円、プログラマーは約455万円で、東京の同職種より50万〜80万円ほど低い傾向です。ただし福岡は生活コストが大幅に安く、特に家賃は天神エリアの1LDKで6万〜8万円（東京23区の同等物件は12万〜16万円）。生活費の差は年間で約80万〜120万円に達するため、額面年収が下がっても手元に残るお金はむしろ増えるケースが多く、可処分所得ベースでは福岡が有利になりやすいです。",
      },
    },
    {
      "@type": "Question",
      name: "福岡には女性エンジニアが働きやすいIT企業はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "あります。LINEヤフーコミュニケーションズ（LINE Fukuoka）、ヌーラボ、Fusic、GMOペパボ、さくらインターネット福岡オフィスなど、福岡に開発拠点を置く企業が多数あります。ヌーラボは「Woman's Career in Fukuoka」など女性のキャリアを考えるイベントを開催し、多様な人材が活躍できる社内環境づくりに取り組んでいます。福岡県も企業と連携して女性IT人材を育成する『my work step』プログラムを実施しており、女性が長く働ける土壌が整いつつあります。",
      },
    },
    {
      "@type": "Question",
      name: "東京から福岡に移住して転職すると支援金はもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "条件を満たせば福岡県移住支援金の対象になります。東京23区在住または東京圏から23区へ通勤していた方が、指定市町へ移住し対象求人に就業（またはテレワーク継続・起業）すると、世帯で100万円・単身で60万円が支給されます。さらに18歳未満の子ども1人につき最大100万円が加算されます。申請は移住後3ヶ月以上1年以内が要件。テレワークでの移住も対象になり得るため、東京の企業に勤めたまま福岡へ移住するケースでも活用できる可能性があります。",
      },
    },
    {
      "@type": "Question",
      name: "未経験から福岡でエンジニア転職するのは難しいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "福岡は『エンジニアフレンドリーシティ福岡』を掲げ、エンジニアやエンジニアを目指す人が無料で使えるコワーキングスペース『エンジニアカフェ』（赤煉瓦文化館内）や勉強会・交流イベントが充実しているため、未経験から学び始めやすい都市です。求人面でも有効求人倍率が高く即戦力ニーズが強いため、AWSやJava・Kotlin・Pythonなど需要の高いスキルを1つ習得しポートフォリオを用意すれば、未経験可・ポテンシャル採用の自社開発企業やスタートアップを狙えます。IT特化型・女性特化型エージェントの併用で成功率が上がります。",
      },
    },
    {
      "@type": "Question",
      name: "福岡は子育てしながらエンジニアを続けやすい街ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "続けやすい街として人気が高まっています。福岡市は都市の利便性とコンパクトな移動圏が両立し、通勤時間が短く保育施設や医療機関へのアクセスも良好です。福岡県内には保育所の待機児童ゼロや子ども医療費助成に積極的な自治体が多く、子育て支援が手厚いことで知られます。リモート・フレックスを導入する福岡拠点のIT企業も増えており、時短勤務や在宅と両立しながらキャリアを継続しやすい環境です。具体的な制度の運用実態は、女性のキャリアに詳しいエージェント経由で確認しましょう。",
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
              { label: "福岡の女性エンジニア転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              地域別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              福岡の女性エンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収相場・働きやすい企業・移住という選択肢を実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 福岡のIT転職市場（スタートアップ都市・特区）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 求人動向と福岡ならではの特徴</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 福岡のエンジニア年収相場（表）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 女性が働きやすい福岡のIT企業</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 未経験から福岡で転職するには（STEP）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. リモート移住という選択肢</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 福岡への転職・移住事例</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 福岡のIT転職市場 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">福岡のIT転職市場（スタートアップ都市・特区）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              福岡市は2012年に「スタートアップ都市・ふくおか」を宣言し、2014年には国家戦略特区「グローバル創業・雇用創出特区」に選定されました。起業家支援施設「スタートアップカフェ」や創業支援、外国人の起業を後押しする<strong>スタートアップビザ</strong>などの規制改革を進めた結果、福岡市の開業率は全国21の主要都市の中でもトップクラス（2015年度に約7％）まで上昇。新しいサービスを生み出す企業が次々と立ち上がる、エンジニアにとって挑戦しやすい都市になっています。
            </p>
            <p>
              さらに福岡市は<strong>「エンジニアフレンドリーシティ福岡」</strong>を掲げ、産学官連携でエンジニアが集まり・活躍し・成長する街づくりを推進。勉強会や交流イベント、外国人エンジニアの在留資格審査の短縮サポート、エンジニア向けの取り組みを行う企業・コミュニティの表彰など、技術者を中心に据えた施策が充実しています。女性エンジニアにとっても、孤立せずコミュニティとつながりながらキャリアを築ける環境が整っているのが大きな魅力です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>福岡がエンジニアに選ばれる理由</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>スタートアップ都市宣言＋国家戦略特区で起業・新規事業が活発</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>「エンジニアフレンドリーシティ福岡」による産学官の手厚い支援</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>無料コワーキング「エンジニアカフェ」（赤煉瓦文化館内）で学び・交流</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>LINE Fukuokaやメルカリ、GMOペパボなど大手の開発拠点が集積</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>コンパクトな都市構造で通勤が短く、子育てと両立しやすい</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 求人動向と特徴 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向と福岡ならではの特徴</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              福岡のIT求人は、即戦力として活躍できる人材を求める<strong>スキル重視型</strong>が増加傾向。求人ではAWS・Java・Kotlin・Pythonなどの開発経験が求められることが多く、これらを扱えるエンジニアへの需要が高まっています。2026年初頭時点でソフトウェア・IT業界の有効求人倍率は3倍超と高水準で、特に「AIを事業に実装できるエンジニア」「プロダクトをグロースできるPM」「DXを主導できる人材」の3カテゴリにニーズが集中しています。
            </p>
            <p>
              東京のように求人の絶対数が多いわけではありませんが、その分<strong>1社あたりの裁量が大きく、上流から関われるポジションが多い</strong>のが福岡の特徴。地場の老舗SIerから福岡発スタートアップ、東京大手の開発拠点まで選択肢が幅広く、自分の働き方に合わせて企業文化を選びやすい環境です。女性視点では、リモート・フレックスを導入する企業が増えていること、コミュニティ経由でリアルな職場の雰囲気を確認しやすいことが、ミスマッチの少ない転職につながります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>需要の高いスキル</h3>
              <p className="text-text-light text-sm leading-relaxed">AWS等のクラウド、Java・Kotlin・Python・PHP、AI/データ活用、PM/PdM。これらを持つと福岡でも年収レンジが上振れしやすい。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1人あたりの裁量が大きい</h3>
              <p className="text-text-light text-sm leading-relaxed">少数精鋭の現場が多く、企画・設計から運用まで幅広く担当できる。早くスキルの幅を広げたい人に向く。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>大手拠点〜スタートアップまで</h3>
              <p className="text-text-light text-sm leading-relaxed">安定志向は大手開発拠点、成長したいならスタートアップと、ライフプランに合わせて企業タイプを選べる。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>コミュニティで実態を確認</h3>
              <p className="text-text-light text-sm leading-relaxed">エンジニアカフェや勉強会で現場の声を聞きやすく、求人票に出ない働きやすさを事前に把握できる。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 年収相場 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">福岡のエンジニア年収相場（表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              福岡のエンジニア年収は東京より<strong>50万〜80万円ほど低め</strong>の水準ですが、生活コストの安さを加味すると体感はむしろ豊かになります。下表は各種調査をもとにした福岡県の目安です（企業・スキル・経験により変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>福岡の年収目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>システムエンジニア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約523万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>福岡県平均。東京比で50万〜80万円ほど低め</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>プログラマー</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約455万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>未経験〜若手の入口レンジが中心</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>クラウド／セキュリティ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約600万〜800万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>専門性が高く福岡でも高年収を狙える</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>PM／PL</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約700万〜925万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>上流・マネジメント人材は希少で高待遇</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>「額面」より「手取り×暮らし」で考える</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>家賃が安い</strong>：天神エリアの1LDKで6万〜8万円（東京23区の同等物件は12万〜16万円）</li>
              <li>② <strong>生活費の差は年間80万〜120万円</strong>：額面が50万円下がっても可処分所得はむしろ増えるケースが多い</li>
              <li>③ <strong>通勤が短い</strong>：コンパクトな都市で移動時間が少なく、その時間を学習や育児に回せる</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec4 女性が働きやすい企業 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が働きやすい福岡のIT企業</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              福岡には大手の開発拠点から地場の自社開発企業まで、女性が長くキャリアを築ける企業が増えています。代表的な企業と、女性視点でのチェックポイントを紹介します（働き方の制度は時期により変わるため、最新の実態はエージェント経由で確認しましょう）。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">LINEヤフーコミュニケーションズ（LINE Fukuoka）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>大手拠点</span></div>
              <p className="text-sm text-text-light">福岡を代表する大規模開発拠点。開発だけでなく企画・人事までそろう一拠点で、福利厚生や働き方の制度が整備されているのが安心材料。女性エンジニアの在籍も多く、ロールモデルを見つけやすい環境です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">ヌーラボ（Nulab）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>自社開発</span></div>
              <p className="text-sm text-text-light">Backlog・Cacooなど自社プロダクトを展開する福岡発の企業。「Woman&apos;s Career in Fukuoka」など女性のキャリアを考えるイベントを主催し、多様な人材が活躍できる社内環境の整備に継続的に取り組んでいます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Fusic（フュージック）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>自社・受託</span></div>
              <p className="text-sm text-text-light">福岡に本社を構え、ソフトウェア開発・クラウドインフラ構築・テクノロジーコンサルティングを手がける企業。エンジニア目線の開発環境づくりに力を入れており、技術にしっかり向き合いたい人に向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">GMOペパボ／メルカリ／さくらインターネット 福岡拠点</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>大手拠点</span></div>
              <p className="text-sm text-text-light">いずれも福岡に開発拠点を構える有力IT企業。リモート・フレックスなど柔軟な働き方を導入する企業が多く、東京水準に近い制度のまま福岡で働けるのが魅力です。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>福岡県の女性IT人材支援も活用を</h3>
            <p className="text-sm text-text-light leading-relaxed">福岡県は企業・団体と一体で女性のIT人材育成・就職を応援する「my work step」プログラムを実施しています。学び直しや職場環境の整備を後押しする取り組みで、ブランクからの復帰や未経験チャレンジの心強い支えになります。</p>
          </div>
        </div>
      </section>

      {/* sec5 未経験ロードマップ STEP */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から福岡で転職するには（STEP）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>福岡は学びの場と求人の入口が両方そろう都市。次の順序で進めると、未経験からでも現実的に転職を狙えます。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "需要の高い言語を1つ習得する", "福岡の求人で求められやすいPython・Java・PHPなどから1つを選び、基本文法〜簡単なアプリ作成まで。あれこれ手を出さず1つに集中するのが近道です。"],
              ["STEP2", "エンジニアカフェ・勉強会を使い倒す", "無料コワーキング『エンジニアカフェ』や各種勉強会・connpassイベントに参加。学習を継続でき、現役エンジニアの生の情報や人脈が得られます。"],
              ["STEP3", "ポートフォリオを作って公開する", "ログイン機能やCRUD・APIを備えた小さなWebアプリを作り公開。未経験採用では実績が最も効きます。"],
              ["STEP4", "福岡に強いエージェントに登録する", "IT特化型と女性特化型を併用し、未経験可・ポテンシャル採用の福岡求人を紹介してもらう。働き方の条件も伝えて絞り込みます。"],
              ["STEP5", "コミュニティ経由で実態を確認して応募", "勉強会やイベントで企業の雰囲気を確かめつつ、自社開発企業・スタートアップ・大手拠点を比較して応募。条件交渉はエージェントに任せましょう。"],
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
        </div>
      </section>

      {/* sec6 リモート移住 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">リモート移住という選択肢</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              福岡転職を考えるとき、見落としがちなのが<strong>「東京の企業にフルリモートで勤めながら福岡に住む」</strong>という選択肢です。これは<strong>東京水準の給与 × 福岡の生活コスト</strong>という、可処分所得の面で最も有利な組み合わせ。家賃や生活費が年間80万〜120万円安くなる分、同じ年収でも手元に残るお金が大きく増えます。
            </p>
            <p>
              さらに福岡県は移住者向けの支援が手厚いのも魅力です。条件を満たせば<strong>福岡県移住支援金</strong>の対象になり、世帯で100万円・単身で60万円、加えて18歳未満の子ども1人につき最大100万円が加算されます。テレワークでの移住も対象になり得るため、勤務先を変えずに福岡へ移るケースでも活用できる可能性があります（申請は移住後3ヶ月以上1年以内など要件あり。最新条件は各自治体で確認を）。
            </p>
            <p>
              子育て世帯にとっても、福岡県内には保育所の待機児童ゼロや子ども医療費助成に積極的な自治体が多く、コンパクトな都市で通勤・送り迎えの負担が小さいことは大きなメリット。<strong>キャリアを止めずに、暮らしの質を上げる</strong>――福岡のリモート移住は、女性エンジニアにとって現実的で前向きな選択肢になります。
            </p>
            <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>リモート移住で押さえたいポイント</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>東京水準の給与を維持できるフルリモート求人を選ぶ</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>福岡県移住支援金（世帯100万・単身60万＋子ども加算）の対象条件を確認</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>将来出社の可能性に備え、福岡空港〜都心の近さ（地下鉄で短時間）も活かす</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>子育て支援・待機児童・医療費助成は移住先の市町村ごとに比較する</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>福岡の求人や働き方の実態を正しくつかむには、IT特化型と女性特化型の併用が効果的です。地方求人やフルリモート求人の有無もエージェントに直接確認しましょう。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーが福岡の開発拠点やスタートアップの技術スタックを理解した提案をしてくれます。フルリモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと年収交渉力に定評があり、東京水準の給与でのリモート求人探しにも頼りになります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモート・時短など、女性のキャリア継続に配慮した求人を中心に紹介。福岡での子育てと両立できる働き方を条件に絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、福岡・リモート求人に強いアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec8 転職・移住事例 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">福岡への転職・移住事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・東京→福岡へUターン移住）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">東京の受託開発・Webエンジニア / 年収540万円・家賃14万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">福岡の自社開発企業 / 年収500万円・家賃7万円・移住支援金活用</p></div>
              </div>
              <p className="text-sm text-text-light">額面は40万円下がったものの、家賃が月7万円安くなり生活費全体では年間100万円ほど節約。移住支援金（世帯）も受け取り、可処分所得はむしろ増加。通勤も短くなり、育児との両立がしやすくなりました。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（20代後半・福岡在住・未経験→自社開発）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">福岡の事務職（IT未経験）/ 年収310万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">福岡の自社開発企業（PHP）/ 年収430万円・フレックス</p></div>
              </div>
              <p className="text-sm text-text-light">エンジニアカフェに通いながら独学でPHPとSQLを習得し、CRUD＋API付きのポートフォリオを公開。勉強会で知った企業文化を決め手に、未経験可の自社開発企業へ転職。地元を離れずキャリアチェンジを実現しました。</p>
            </div>
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
            <a href="/articles/regional-remote/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>地方在住×フルリモート転職ガイド</h3><p className="text-sm text-text-light">地域を問わず働く選択肢の入口</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リモートワーク求人ガイド</h3><p className="text-sm text-text-light">在宅で働く女性エンジニアの探し方</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすいIT企業の選び方</h3><p className="text-sm text-text-light">産休育休・リモートで見極める</p></a>
            <a href="/articles/how-to-choose/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>転職エージェントの選び方</h3><p className="text-sm text-text-light">失敗しない併用のコツ</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">福岡で理想の働き方を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。福岡の求人・リモート移住も含め、あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
