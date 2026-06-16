import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアが地方在住×フルリモートで転職するガイド｜東京水準の年収を地方で得る方法",
  description:
    "地方在住の女性エンジニアがフルリモートで東京水準の年収を得る方法を実データで解説。家賃96万円差の地理的アービトラージ、フルリモート求人の現状、受かりやすい職種・条件、求人の探し方STEP、移住のリアルな注意点、育児・介護との両立、転職事例とFAQまで網羅します。",
  alternates: { canonical: "/articles/regional-remote/" },
  openGraph: {
    title: "女性エンジニアが地方在住×フルリモートで転職するガイド｜東京水準の年収を地方で得る方法",
    description:
      "地方在住の女性エンジニアがフルリモートで東京水準の年収を得る方法・求人の探し方・移住の注意点・育児介護との両立を実データで徹底解説。",
    url: "https://women-engineer.com/articles/regional-remote/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "女性エンジニアが地方在住×フルリモートで転職するガイド｜東京水準の年収を地方で得る方法",
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
    "地方在住の女性エンジニアがフルリモートで東京水準の年収を得る方法・求人の探し方・移住の注意点・育児介護との両立を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/regional-remote/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "地方に住みながら東京の企業にフルリモートで転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。全国どこからでも応募できる「居住地不問・全国フルリモート」の求人がエンジニア領域で増えており、フルリモート対応求人は2023年比で約28%増、AI・クラウド領域では30%超の伸びとされています。dodaの調査では上場・非上場あわせて約62%の企業がリモート採用を戦略的に位置づけています。求人票で『居住地不問』『フルリモート（出社なし）』『地方在住可』と明記されたものを選べば、北海道や九州に住みながら東京本社の開発チームに所属することも現実的です。応募時は『将来も出社義務が発生しないか』を必ず確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "地方在住でフルリモートだと年収は下がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "東京本社のフルリモート求人は勤務地に関係なく東京水準の給与テーブルが適用されることが多く、年収は下がりません。むしろ重要なのは「実質的な手取りの豊かさ」です。同じスキルでも、地元企業に勤めた場合と東京企業にフルリモートで勤めた場合では、経験5年で年収が200〜400万円変わるケースもあります。さらに家賃は地方都市なら東京の半額程度（東京15万円のワンルームが地方では同予算で2LDK、1LDK比較で年間約96万円の差）になり、同じ年収でも貯蓄・投資に回せる額が大きく増えます。これが地理的アービトラージと呼ばれる戦略です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験や経験浅めでも地方からフルリモート転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "フルリモートかつ全国採用の求人は人気が高く倍率も上がるため、完全未経験での即フルリモートはややハードルが高めです。多くの全国フルリモート求人は実務経験2年以上を目安に求めます。現実的なルートは、(1)まず出社可能な範囲やハイブリッドで1〜2年の実務経験を積む、(2)そのうえでバックエンド・インフラ・QAなどリモート親和性の高い職種でフルリモートに移る、という二段構えです。未経験の場合は、地方移住を急がず、現職や通勤可能な企業で経験を積んでからフルリモートに切り替えると成功率が上がります。",
      },
    },
    {
      "@type": "Question",
      name: "地方移住×フルリモートは育児・介護と両立しやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "相性は非常に良いです。通勤がゼロになることで往復の時間がそのまま可処分時間になり、保育園の送迎や子どもの急な発熱、親の通院付き添いに柔軟に対応できます。フレックスや裁量労働制を併用できる求人なら、中抜けして家事・育児・介護をこなし、夜に作業を戻すといった働き方も可能です。地方都市は東京に比べて待機児童が少ない地域や保育料の負担が軽い地域もあり、広い住居で在宅ワーク用の個室を確保しやすいのも利点です。ただし会社のリモート方針が将来変わらないか、子の体調不良時の働き方が認められるかは入社前に確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "地方からフルリモート求人を探すのにおすすめの方法は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "求人サイトの『フルリモート』『完全在宅』『居住地不問』での絞り込みと、IT特化型・女性特化型エージェントの併用が効率的です。Remoguやpaiza転職、Green、女の転職typeなどはフルリモート求人の特集や時短×フルリモートの絞り込みがあり、地方在住者でも探しやすくなっています。ただし求人票には出ない『出社頻度の実態』『地方在住者の在籍実績』『リモート手当や帰省時の交通費』などは、エージェントに確認してもらうのが確実です。レバテックキャリアなどIT特化型は技術を正当に評価し東京水準の年収交渉に強く、女性特化型は働き方の条件で絞り込みやすいので2〜3社の併用がおすすめです。",
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
              { label: "地方在住×フルリモートで転職するガイド" },
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
              女性エンジニアが地方在住×フルリモートで転職するガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                東京水準の年収を地方で得る方法を実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 地方在住×フルリモートのリアル</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. フルリモート求人の現状（求人数・割合）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 地方在住で東京水準の年収を得るメリット</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. フルリモートで受かりやすい職種・条件</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. フルリモート求人の探し方（STEP）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 移住前に知るべき注意点</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 女性のライフプランとの相性（育児・介護）</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 地方在住×フルリモートのリアル */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">地方在住×フルリモートのリアル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「地方に住みながら、東京の企業でフルリモートで働く」――数年前まで一部の人だけの働き方でしたが、いまは現実的な選択肢になりました。クラウド・チャット・ビデオ会議の普及で、開発業務はインターネットさえあれば場所を問わず完結します。企業側もオフィスコストの削減と全国規模の人材確保を狙い、<strong>居住地不問の「全国フルリモート」求人</strong>を積極的に出し始めています。
            </p>
            <p>
              この記事が扱うのは、リモートワーク全般ではなく<strong>「地方に住む女性エンジニアが、フルリモートで東京水準の収入を得る」</strong>という軸です。ポイントは、給与は勤務地ではなく所属企業の水準で決まるのに対し、生活コスト（特に家賃）は住む場所で決まるという「ねじれ」を味方につけること。これを<strong>地理的アービトラージ</strong>と呼びます。
            </p>
            <p>
              実際、同じスキルのエンジニアが地元企業に勤めた場合と東京企業にフルリモートで勤めた場合では、経験5年で<strong>年収が200〜400万円変わる</strong>ケースもあります。さらに家賃の差が貯蓄に直結するため、「東京で働くより手元に残るお金が多い」という逆転も起こり得ます。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>この働き方が成り立つ3つの前提</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>開発業務はオンラインで完結し、成果がコード・チケットとして残る</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>企業が「居住地不問・出社なし」を制度として明文化している</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>自走できる実務スキル（目安：実務2年以上）と非同期コミュニケーション力</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 フルリモート求人の現状（表） */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">フルリモート求人の現状（求人数・割合）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              フルリモート対応のエンジニア求人は<strong>2023年比で約28%増</strong>、AI・クラウド領域では<strong>30%超</strong>の伸びとされ、dodaの調査では上場・非上場あわせて<strong>約62%</strong>の企業がリモート採用を戦略的に位置づけています。主要求人サイトの「フルリモート」掲載状況を整理すると、地方在住者が応募できる母数は十分にあります（件数は変動するため目安です）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>探し方・媒体</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>特徴</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>地方在住者の使いどころ</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>大手総合（doda / マイナビ）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「フルリモート・完全在宅」の専用検索あり。年収900万円以上の高待遇も</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>母数が多い。勤務地で弾かれない「居住地不問」を軸に絞る</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>IT特化（paiza転職 / Green）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>フルリモート特集・技術スタックで検索可能</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>東京水準の自社開発・SaaSが多く年収を落とさず探せる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>リモート専門（Remogu 等）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>掲載が原則フルリモート。地方・海外在住者前提の運用</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「出社なし」が標準。条件のミスマッチが起きにくい</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>女性特化（女の転職type 等）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「完全在宅×時短勤務」など働き方条件で絞り込み可</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>育児・介護と両立する条件を最優先で探せる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス（Remogu / 各種）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>フルリモート案件が豊富。実務経験者向け</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>地方在住でも東京単価の案件を受けられる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            注意したいのは、「リモート可」と書かれていても実態は<strong>ハイブリッド（週数日出社）</strong>のことがある点です。地方在住者は<strong>「フルリモート＝出社なし／居住地不問」</strong>と明記された求人だけを母数として扱いましょう。
          </p>
        </div>
      </section>

      {/* sec3 メリット（年収・生活コスト） */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">地方在住で東京水準の年収を得るメリット</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              最大のメリットは、<strong>収入は東京水準・支出は地方水準</strong>という組み合わせです。下表は東京と地方都市の生活コスト差のイメージです（地域・物件で変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>東京</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>地方都市</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>家賃（1LDK目安）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約15万円/月</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約7万円/月（年約96万円安）</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>同予算で借りられる広さ</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ワンルーム</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2LDK（在宅用の個室を確保しやすい）</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>通勤</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>満員電車・片道1時間も</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>フルリモートなら通勤ゼロ</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>給与テーブル</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>東京水準</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>東京本社の求人なら同じ東京水準</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>地理的アービトラージで得られる3つの実利</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>貯蓄・投資余力の増加</strong>：家賃差の年約96万円がそのまま手元に残る</li>
              <li>② <strong>住環境の向上</strong>：広い住居で在宅ワーク用の個室を確保でき集中力が上がる</li>
              <li>③ <strong>時間の創出</strong>：通勤ゼロで往復2時間が家事・育児・学習・休息に回せる</li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            関東のフルスタックエンジニアが456万〜755万円のレンジである一方、九州・沖縄の地元求人は398万〜406万円というデータもあり、地方の<strong>地元企業に限定すると年収は下がりがち</strong>。だからこそ「地方に住んだまま東京企業にフルリモートで所属する」ことに大きな意味があります。
          </p>
        </div>
      </section>

      {/* sec4 受かりやすい職種・条件 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">フルリモートで受かりやすい職種・条件</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              フルリモートは人気が高く倍率も上がりやすいため、<strong>成果がオンラインで完結し可視化されやすい職種</strong>ほど採用が通りやすい傾向です。多くの全国フルリモート求人は<strong>実務経験2年以上</strong>を目安に求めます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>バックエンドエンジニア</h3>
              <p className="text-text-light text-sm leading-relaxed">サーバー・API・DBはオンラインで完結。Python・Goなど高需要言語＋SaaS/自社開発はフルリモート求人が特に多く、東京水準の年収を保ちやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>インフラ・クラウドエンジニア</h3>
              <p className="text-text-light text-sm leading-relaxed">クラウド普及で構築・運用がリモート化。AWS/Azure/GCP・Terraformの経験が評価され、求人サイトに2万件超のフルリモート求人が並ぶ需要の高い領域です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>フロントエンド／フルスタック</h3>
              <p className="text-text-light text-sm leading-relaxed">画面実装も完全オンライン。React/TypeScriptの実績があると強く、地方在住フルスタックでも東京水準の年収レンジを狙えます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>QA／テストエンジニア</h3>
              <p className="text-text-light text-sm leading-relaxed">テスト設計・自動化は在宅と相性が良く、開発職より未経験寄りでも入りやすい入り口。まず経験を積んで他職種へ広げる足がかりにも。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>地方在住で通過率を上げる条件・準備</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・<strong>実務2年以上の自走力</strong>を示す（指示待ちでなく自分でタスクを進められる）</li>
              <li>・<strong>非同期コミュニケーション</strong>の実績（Slack/ドキュメントで進捗を可視化した経験）</li>
              <li>・<strong>GitHub・ポートフォリオ</strong>でコードを見せ、地理的なハンデを実力で打ち消す</li>
              <li>・募集が「居住地不問・出社なし」かを最初に確認し、ミスマッチ応募を避ける</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 探し方 STEP */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">フルリモート求人の探し方（STEP）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>「地方在住でも受かるフルリモート求人」にたどり着くための実践手順です。出社実態のミスマッチを防ぐことが最重要です。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "条件を「フルリモート×居住地不問」に固定する", "検索条件で『フルリモート』『完全在宅』『居住地不問』を必須に。『リモート可』だけの求人は週数日出社のハイブリッドが混ざるため、地方在住者は明確に除外する。"],
              ["STEP2", "媒体を役割で使い分ける", "母数は大手総合（doda/マイナビ）、技術で絞るならpaiza転職/Green、出社なし前提ならRemogu、働き方条件なら女の転職type。最低2〜3媒体を並行する。"],
              ["STEP3", "IT特化×女性特化のエージェントに登録する", "求人票に出ない『出社頻度の実態』『地方在住者の在籍実績』『リモート手当』を確認してもらう。IT特化は東京水準の年収交渉、女性特化は時短・両立条件に強い。"],
              ["STEP4", "応募前に『フルリモートの持続性』を確認する", "経営陣がリモートをどう位置づけているか、過去に出社回帰がなかったかを質問。将来のポリシー変更リスクを面接で潰しておく。"],
              ["STEP5", "オンライン前提で選考に臨む", "面接・コーディングテストもオンライン。GitHubやポートフォリオ、非同期で進めた実績を提示し、『離れていても問題なく働ける』ことを具体的に示す。"],
              ["STEP6", "内定後は労働条件通知書で『勤務地・出社義務』を書面確認", "口頭の『フルリモートでOK』だけで決めない。雇用契約・就業規則でフルリモートが制度化されているかを必ず文書で確認してから入社する。"],
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

      {/* sec6 注意点 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">移住前に知るべき注意点</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>地方移住×フルリモートは魅力的ですが、メリットだけを見て移住すると後悔します。先に現実的なコストとリスクを把握しておきましょう。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. リモート方針が将来変わるリスク</h3>
              <p className="text-text-light text-sm leading-relaxed">入社後に出社回帰となると、地方在住者は退職か遠距離通勤かの二択に。経営陣のリモートへの本気度と過去の方針変更を、入社前に必ず確認します。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 車の費用が新たに発生</h3>
              <p className="text-text-light text-sm leading-relaxed">車社会の地域では購入費100〜300万円＋維持費（ガソリン・保険・税金・駐車場で月3〜5万円）がかかります。家賃が下がっても、この分は計算に入れておく必要があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. コミュニケーションが希薄になりがち</h3>
              <p className="text-text-light text-sm leading-relaxed">雑談や対面の偶発的な相談が減り、孤立や情報格差が生まれやすい。意識的にテキストで発信し、定例・1on1を活用して関係性を保つ工夫が必要です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. ネット回線・住環境への先行投資</h3>
              <p className="text-text-light text-sm leading-relaxed">安定した光回線、静かな作業部屋、予備の通信手段は仕事の前提条件。移住先で確保できるかを契約前に確認します。地域コミュニティとの相性も下見を。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            こうした実態は求人票に書かれません。<strong>家賃で浮いた分を車・回線・住環境の初期費用に取られないか</strong>を試算し、エージェントにも在籍者のリアルを確認してもらうのが安全です。
          </p>
        </div>
      </section>

      {/* sec7 女性のライフプランとの相性 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性のライフプランとの相性（育児・介護）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              地方移住×フルリモートは、女性のライフイベントと特に相性が良い働き方です。通勤ゼロで往復の時間がそのまま可処分時間になり、<strong>保育園の送迎・子どもの急な発熱・親の通院付き添い</strong>に柔軟に対応できます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>育児との両立</h3>
              <p className="text-sm text-text-light">フルリモート＋フレックス／裁量労働なら、中抜けで送迎や看病をこなし夜に作業を戻せます。地方は待機児童が少ない地域や保育料負担の軽い地域もあり、広い住居で在宅用の個室も確保しやすい。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>介護との両立</h3>
              <p className="text-sm text-text-light">実家近くに住みながら東京水準で働けるため、親の介護・見守りとキャリアを両立しやすい。Uターン・地元志向の女性にとって、収入を落とさず家族の近くで暮らせる現実解になります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>ブランクに強い職種特性</h3>
              <p className="text-sm text-text-light">エンジニアはスキルがあれば住む場所や就業ブランクに関係なく活躍しやすく、産休育休後の復帰先としてもフルリモートは有力。正社員・フリーランスの両方で選択肢があります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>確認しておきたいこと</h3>
              <p className="text-sm text-text-light">子の体調不良時の中抜けが認められるか、時短×フルリモートの実績、女性・育児中社員の在籍状況。これらは女性特化型エージェントに確認してもらうと確実です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント（流用） */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>地方在住×フルリモートは、東京水準の年収交渉に強いIT特化型と、両立条件で絞り込める女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術を理解したアドバイザーが、地方在住でも東京水準の給与テーブルが適用されるフルリモート求人を提案。年収交渉に強みがあります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングで、居住地不問のフルリモート求人を効率よく紹介してくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">完全在宅×時短など、育児・介護と両立しやすい条件で求人を絞り込めます。地方在住者の在籍実態やリモートの持続性も確認してもらえて安心です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 成功事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・福岡在住／地元SIer→東京SaaS）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">地元SIerのバックエンド / 年収400万円・出社</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">東京本社SaaSのバックエンド（Go）/ 年収620万円・福岡からフルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">IT特化型エージェント経由で『居住地不問』のSaaS求人に応募。福岡に住んだまま東京水準の給与テーブルが適用され、年収220万円アップ。家賃は東京の半額のままで、貯蓄ペースが一気に上がりました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（30代後半・長野へUターン／育児と両立）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">東京の自社開発フロントエンド / 年収560万円・通勤往復2時間</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">東京本社のフルスタック / 年収560万円維持・長野からフルリモート＋時短可</p></div>
              </div>
              <p className="text-sm text-text-light">女性特化型エージェントで『完全在宅×時短』の求人を紹介され、長野の実家近くへUターン。年収を維持したまま2LDKの広い家へ。通勤がゼロになり、保育園の送迎と親の見守りを両立できるようになりました。</p>
            </div>
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
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リモートワーク求人ガイド</h3><p className="text-sm text-text-light">フルリモート全般の探し方と働き方</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/work-life-balance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ワークライフバランスガイド</h3><p className="text-sm text-text-light">育児・介護と両立する働き方</p></a>
            <a href="/articles/freelance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>フリーランスエンジニアガイド</h3><p className="text-sm text-text-light">地方から東京単価の案件を受ける</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。地方在住でも東京水準で働けるフルリモート求人を一緒に探しましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
