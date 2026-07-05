import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "全国の女性向けITリスキリング・訓練支援まとめ【公的制度ハブ・2026年】",
  description:
    "女性がITスキルを公的支援で学ぶ方法を全国版で整理。全国どこでも使える教育訓練給付・求職者支援訓練・マナビDXの3制度と、東京都の女性ITエンジニア育成事業・女性デジタルカレッジを、対象・費用・形式・公式リンクの統一フォーマットで比較。他の道府県での探し方、在職中/離職中別の制度の選び方まで解説します。",
  alternates: { canonical: "/articles/women-it-support-map/" },
  openGraph: {
    title: "全国の女性向けITリスキリング・訓練支援まとめ【公的制度ハブ・2026年】",
    description:
      "全国共通3制度（教育訓練給付・求職者支援訓練・マナビDX）と東京都の2事業を、対象・費用・形式・公式リンクで比較。他の道府県での探し方と在職中/離職中別の選び方も解説。",
    url: "https://women-engineer.com/articles/women-it-support-map/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "全国の女性向けITリスキリング・訓練支援まとめ【公的制度ハブ・2026年】",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
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
    "女性向けITリスキリング・職業訓練の公的支援を全国版で整理。全国共通の教育訓練給付・求職者支援訓練・マナビDXと、東京都の女性ITエンジニア育成事業・女性デジタルカレッジを統一フォーマットで比較し、他の道府県での探し方と制度の選び方を解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/women-it-support-map/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性しか使えない制度なのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "制度によって異なります。国の教育訓練給付・求職者支援訓練（求職者支援制度）・マナビDXは性別を問わず利用できる全国共通の制度です。一方、東京都の女性ITエンジニア育成事業・女性デジタルカレッジ、埼玉県の女性のデジタル人材育成推進事業などの自治体事業は女性限定で設計されており、託児サービスや再就職支援など、出産・育児でキャリアが中断した人を想定したサポートが手厚いのが特徴です。まず全国共通の3制度を土台に、お住まいの自治体に女性向け事業があれば上乗せで検討するのが効率的です（出典: 厚生労働省・各事業公式サイト、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "働きながら（在職中に）使える支援はどれですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "在職中でも使いやすいのは教育訓練給付とマナビDXです。教育訓練給付は雇用保険の加入期間など一定の要件を満たせば在職中でも講座費用の一部（一般20%〜専門実践は最大80%）の給付を受けられます。マナビDXは経済産業省とIPAが運営する学習ポータルで、誰でも利用でき無料講座も掲載されています。埼玉県の女性のデジタル人材育成推進事業も在職者の受講が可能です。一方、東京都の女性ITエンジニア育成事業は「求職中または非正規雇用で就業中（正社員でない）」が条件、女性デジタルカレッジは求職中の方限定（就業中は申込不可）、求職者支援訓練も原則として離職中の方向けの制度です（出典: 各公式サイト、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "完全無料でITスキルを学べる公的制度はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "あります。求職者支援訓練は受講料無料（テキスト代等は自己負担）で、収入・資産などの要件を満たせば月10万円の職業訓練受講給付金を受けながら学べます。東京都の女性ITエンジニア育成事業（受講料・PCレンタル無料）と女性デジタルカレッジ（受講料無料・無料託児つき）、埼玉県の女性のデジタル人材育成推進事業（受講料無料）も無料です。マナビDXにも受講料無料の講座カテゴリがあります。ただし「無料」でも交通費・受験料・通信費などは自己負担になるのが一般的なので、申込前に公式サイトで自己負担の範囲を確認してください（出典: 厚生労働省・各事業公式サイト、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "自分の住んでいる県に女性向けのデジタル訓練事業があるか調べるには？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3つの方法があります。(1)「自治体名＋女性＋デジタル」「自治体名＋女性＋職業訓練」で検索する（例: 埼玉県の「女性のデジタル人材育成推進事業」はこの方法で見つかります）。(2)お住まいの地域の男女共同参画センター（女性センター）に問い合わせる。自治体の女性向け就業支援の窓口・共催会場になっていることが多い機関です。(3)都道府県労働局・ハローワークで職業訓練（ハロートレーニング）の案内を受ける。自治体の女性向け事業は年度単位で実施され、福岡県の「でじたる女性プロジェクト」のように年度をもって終了する事業もあるため、必ず最新年度の募集状況を公式サイトで確認してください。",
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
              { label: "全国の女性向けITリスキリング支援まとめ" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              支援制度ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              全国の女性向けITリスキリング・訓練支援まとめ
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                公的制度ハブ｜対象・費用・公式リンクで比較【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">公開日: 2026年7月4日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>先に結論：まず押さえる5つの制度</h2>
            <p className="text-sm text-text-light leading-relaxed mb-4">
              「女性向けのIT学習支援」は、<strong>全国どこでも使える国の制度</strong>と、<strong>自治体（都道府県）の女性向け事業</strong>の二層構造です。次の3＋2をまず確認しましょう。
            </p>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>教育訓練給付（全国・厚労省）</strong>: 講座費用の20〜最大80%を給付。在職中でも使える。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>求職者支援訓練（全国・厚労省）</strong>: 受講料無料。要件を満たせば月10万円の給付金つきで学べる。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>マナビDX（全国・経産省/IPA）</strong>: デジタル講座の公式ポータル。無料講座あり・誰でも今日から使える。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>女性ITエンジニア育成事業（東京都）</strong>: 原則39歳以下の女性向け。無料6か月訓練＋就職支援。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>女性デジタルカレッジ（東京都）</strong>: 出産・育児等で退職した女性の再就職向け。無料・託児つき。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              本記事に掲載した制度は、すべて公式ページへの到達を確認済みです（2026年7月参照）。
            </p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 公的支援の全体像：国の制度×自治体の事業の二層構造</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 全国どこでも使える3制度（教育訓練給付／求職者支援訓練／マナビDX）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 東京都の女性向け2事業</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 他の道府県での探し方（実在確認できた事業＋探し方3ステップ）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. どれを選ぶ？状況別の制度選びチャート</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 各制度の詳細ガイド記事（サイト内）</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 全体像 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">公的支援の全体像：国の制度×自治体の事業の二層構造</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「未経験からITを学びたい。でもスクール代は高い」——この悩みに対して、公的支援は大きく2つの層で用意されています。
            </p>
            <p>
              <strong>1層目は国（厚生労働省・経済産業省）の全国共通制度</strong>です。講座費用の一部を給付する「教育訓練給付」、無料の職業訓練＋生活支援給付金の「求職者支援制度」、そして公式のデジタル学習ポータル「マナビDX」。住んでいる場所を問わず、誰でも入口にできます。
            </p>
            <p>
              <strong>2層目は都道府県が実施する女性向けのデジタル人材育成事業</strong>です。国も「女性デジタル人材育成プラン」（内閣府男女共同参画局）を掲げて自治体の取り組みを後押ししており、東京都の「女性ITエンジニア育成事業」「女性デジタルカレッジ」のように、託児つき・就職支援つきで無料という手厚い事業があります。ただし自治体事業は<strong>年度単位</strong>で実施されるため、募集時期・継続の有無は毎年変わります（出典: 内閣府男女共同参画局「女性デジタル人材育成プラン」、2026年7月参照）。
            </p>
            <p>
              この記事では、公式ページに実際に到達確認できた制度だけを「対象／費用／形式／公式リンク」の統一フォーマットで整理します。まず全国共通の3制度から見ていきましょう。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 全国共通3制度 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">全国どこでも使える3制度</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>制度</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>対象</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>費用</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>形式</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>公式リンク</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>教育訓練給付</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>雇用保険の加入期間など要件を満たす人（在職中も可・性別不問）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>受講費用の20%〜最大80%を給付（種類による）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>厚労大臣指定の講座（通学・オンライン）を自分で選んで受講</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省</a></td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>求職者支援訓練</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>雇用保険を受給できない離職者・フリーランス廃業者・一定収入以下のパートの方など（性別不問）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受講料無料。要件を満たせば月10万円の職業訓練受講給付金</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ハローワーク経由で申込む職業訓練（IT・Web系コースあり）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省</a></td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>マナビDX</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>誰でも利用可（初学者〜実践者・性別不問）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>無料講座あり（有料講座も掲載）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>オンライン学習ポータル。講座を検索して受講</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}><a href="https://manabi-dx.ipa.go.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>マナビDX（IPA）</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mb-8">
            出典: 厚生労働省「教育訓練給付制度」「求職者支援制度」、IPA「マナビDX」各公式ページ（いずれも2026年7月参照）
          </p>

          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 教育訓練給付 — 在職中でも「講座費用の一部が戻る」</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                厚生労働大臣が指定した講座を受講すると、費用の一部がハローワークから給付される制度です。給付率は3段階あり、<strong>一般教育訓練で20%（上限10万円）</strong>、<strong>特定一般教育訓練で40%（上限20万円・資格取得＋就職等で50%）</strong>、<strong>専門実践教育訓練で50%（年間上限40万円・資格取得＋就職等で70%、さらに賃金上昇で最大80%＝上限64万円）</strong>です。IT分野の指定講座も多く、働きながらスクールで学びたい人の第一候補になります。
              </p>
              <p className="text-sm text-text-light leading-relaxed">
                雇用保険の加入期間などの受給要件があるため、受講前にハローワークで確認しましょう。詳しくは<a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付でITを学ぶ完全ガイド</a>で解説しています（出典: 厚生労働省「教育訓練給付制度」、2026年7月参照）。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 求職者支援訓練 — 無料訓練＋条件を満たせば月10万円</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                雇用保険を受給できない求職者（離職後ブランクのある方、フリーランスを廃業した方、一定額以下の収入のパートの方など）のための制度で、<strong>訓練は無料</strong>（テキスト代等は自己負担）。さらに本人月収8万円以下・世帯月収30万円以下・世帯の金融資産300万円以下・訓練実施日に全て出席（やむを得ない理由がある場合でも8割以上）などの要件を満たすと、<strong>月10万円の職業訓練受講給付金</strong>と通所手当（上限あり）を受けながら学べます。
              </p>
              <p className="text-sm text-text-light leading-relaxed">
                出産・育児で雇用保険の受給資格がないまま離職期間が長くなった女性が、生活費の支えを得ながらITを学び直せる制度です。IT・Web系コースの探し方は<a href="/articles/hello-training-it/" className="underline" style={{ color: "#7c3a55" }}>ハロートレーニングでITを学ぶガイド</a>を参照してください（出典: 厚生労働省「求職者支援制度」、2026年7月参照）。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. マナビDX — 今日から使える公式デジタル学習ポータル</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                経済産業省と独立行政法人情報処理推進機構（IPA）が運営する「デジタル知識・スキルが身につく学びの場」の公式ポータルです。デジタルリテラシーの基礎からデータサイエンス、ソフトウェア開発、セキュリティまでの講座を検索でき、<strong>受講料無料の講座カテゴリ</strong>も用意されています。手続き不要・誰でも利用できるため、「まず自分にITが向いているか試したい」段階の最初の一歩に最適です。
              </p>
              <p className="text-sm text-text-light leading-relaxed">
                講座の選び方・活用手順は<a href="/articles/manabi-dx/" className="underline" style={{ color: "#7c3a55" }}>マナビDX活用ガイド</a>で詳しく解説しています（出典: マナビDX公式サイト、2026年7月参照）。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 東京都 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">東京都の女性向け2事業</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              自治体の女性向けデジタル訓練で最も手厚いのが東京都です。東京都産業労働局は、目指すレベルの異なる2つの事業を実施しています。どちらも<strong>受講料無料</strong>です。
            </p>
          </div>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>女性ITエンジニア育成事業</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>女性デジタルカレッジ</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>対象</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>原則39歳以下の女性。求職中または非正規雇用で就業中（正社員でない方）。都内IT関連企業等への正社員就職を希望する方（学生除く）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>結婚・出産・育児等による退職後、再就職を希望する女性。求職中の方（就業中・就業が決まっている方は申込不可）。ハローワークまたは東京しごとセンター登録が必要</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>費用</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受講料無料・PCレンタル無料（交通費・資格受験費用は自己負担）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受講料無料・無料託児サービスあり（生後6か月以上の未就学児。施設により1歳以上）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>形式・内容</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>6か月。eラーニング主体＋月2回の集合型訓練（新宿）。プログラミング／インフラクラウドの2コース＋就職支援</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>入門コース（Word・Excel基礎・5日間通学）と基礎及び応用コース（15日間通学＋約2か月の就職支援。Office 365・Zoom・生成AI活用等）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>目指す先</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ITエンジニア（開発・インフラ）としての正社員就職</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>デジタルスキルを使った事務系等での再就職</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>公式リンク</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}><a href="https://women-tokyo-en.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>women-tokyo-en.metro.tokyo.lg.jp</a></td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}><a href="https://tokyo-woman-d.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>tokyo-woman-d.metro.tokyo.lg.jp</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mb-6">
            出典: 東京都「令和8年度女性ITエンジニア育成事業」公式サイト、東京都「女性デジタルカレッジ事業」公式サイト・TOKYOはたらくネット（いずれも2026年7月参照）
          </p>
          <div className="rounded-xl p-6" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>どちらを選ぶ？（2026年7月時点の状況）</h3>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>ITエンジニア職を目指すなら女性ITエンジニア育成事業</strong>。2026年7月時点では後期1期生（8月1日受講開始）がプログラミング・インフラクラウド両コースとも募集中です。詳細は<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業の完全ガイド</a>へ。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>ブランクからの再就職・PC基礎からなら女性デジタルカレッジ</strong>。訓練場所と同じ施設での無料託児があり、育児中でも通いやすい設計です。詳細は<a href="/articles/women-digital-college/" className="underline" style={{ color: "#7c3a55" }}>女性デジタルカレッジの完全ガイド</a>へ。</span></li>
            </ul>
            <p className="text-xs text-text-light mt-3">
              ※募集状況は期・年度ごとに変わります。必ず各公式サイトで最新情報を確認してください。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 他の道府県 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">他の道府県での探し方</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              女性向けのデジタル人材育成事業は東京都だけのものではありません。内閣府の「女性デジタル人材育成プラン」を背景に、各道府県でも同種の事業が実施されています。ただし<strong>年度単位の事業のため、実施の有無・募集時期は毎年変わります</strong>。2026年7月時点で公式ページに到達確認できた例と、お住まいの地域での探し方を紹介します。
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">埼玉県「女性のデジタル人材育成推進事業」</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>募集中（2026年7月確認）</span></div>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>対象:</strong> 埼玉県在住または県内で就業を希望する女性。<strong>在職中でも受講可</strong></span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>費用:</strong> 受講料無料（通信費は自己負担）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>形式:</strong> オンライン（eラーニング・24時間視聴可）。基礎・応用講座は毎月開講、実践講座はライブ＋アーカイブ配信。月ごとの定員制</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>公式:</strong> <a href="https://woman-jobtraining-pref-saitama.com/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>woman-jobtraining-pref-saitama.com</a>（令和8年度、2026年7月参照）</span></li>
              </ul>
              <p className="mt-3 text-sm"><a href="/articles/saitama-women-training/" className="font-bold underline" style={{ color: "#7c3a55" }}>→ 埼玉県事業の詳細解説（コース内容・申込の流れ）はこちら</a></p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">福岡県「でじたる女性プロジェクト」</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#c15f47" }}>事業終了表示（2026年7月確認）</span></div>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                福岡県の「女性デジタル人材育成・就業支援事業」として、県内在住で就労意向のある成人女性を対象に、約4か月の無料eラーニング＋集合研修を実施していた事業です。ただし公式ページには<strong>「本事業は終了しました」と表示されています</strong>（令和7年度・第3期生まで実施。2026年7月参照）。
              </p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span><strong>公式:</strong> <a href="https://digital-women.maia.co.jp/fukuoka/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>digital-women.maia.co.jp/fukuoka</a>／<a href="https://www.pref.fukuoka.lg.jp/press-release/josei-digital.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>福岡県庁 報道発表</a></span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>このように自治体事業は年度で入れ替わります。福岡県にお住まいの方は、県公式サイトで最新年度の女性向け事業の有無を確認してください</span></li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>お住まいの地域で探す3ステップ</h3>
            <div className="space-y-4">
              {[
                ["STEP1", "「自治体名＋女性＋デジタル」で検索する", "「◯◯県 女性 デジタル」「◯◯県 女性 職業訓練」で検索すると、その年度の事業ページが見つかります。埼玉県の事業もこの方法で確認できます。事業名は「女性デジタル人材育成」「女性向けデジタルスキル習得訓練」など自治体ごとに異なります。"],
                ["STEP2", "男女共同参画センター（女性センター）に聞く", "多くの自治体にある男女共同参画センターは、女性向け就業支援講座の窓口・共催会場になっていることが多い機関です。地域の女性向け事業の情報がここに集まります。"],
                ["STEP3", "都道府県労働局・ハローワークで職業訓練を案内してもらう", "自治体独自の女性向け事業が見つからなくても、全国共通の求職者支援訓練・公共職業訓練（ハロートレーニング）はどの都道府県でも受けられます。ハローワークの窓口で「IT系の訓練コース」を相談しましょう。"],
              ].map(([step, title, desc], i) => (
                <div key={i} className="flex gap-4 rounded-xl border p-5" style={{ borderColor: "#d9c7b8" }}>
                  <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>{step}</span>
                  <div>
                    <h4 className="font-bold mb-1">{title}</h4>
                    <p className="text-sm text-text-light leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-text-light mt-4">
              ※大阪府・愛知県については、2026年7月時点で「女性限定のITリスキリング訓練事業」の公式ページを確認できませんでした（中小企業向けのデジタル人材育成支援等は実施）。上記3ステップで最新情報を確認してください。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 チャート */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">どれを選ぶ？状況別の制度選びチャート</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「在職中かどうか」と「費用をかけられるかどうか」の2軸で考えると、使うべき制度がほぼ決まります。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>Q1. いま在職中？（正社員として働いている）</h3>
              <ul className="space-y-3 text-sm text-text-light leading-relaxed">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">→</span><span><strong>YES・費用をある程度かけられる:</strong> <strong>教育訓練給付</strong>が第一候補。指定講座なら費用の20〜最大80%が給付されるため、実質負担を抑えてスクール・講座で学べます。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">→</span><span><strong>YES・費用をかけたくない:</strong> <strong>マナビDXの無料講座</strong>から。埼玉県在住・県内就業希望なら在職者も受講できる<strong>県の無料事業</strong>も併用できます。</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>Q2. 非正規で就業中、または求職中？</h3>
              <ul className="space-y-3 text-sm text-text-light leading-relaxed">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">→</span><span><strong>都内でエンジニア就職を目指す・原則39歳以下:</strong> <strong>東京都 女性ITエンジニア育成事業</strong>（無料6か月＋就職支援）が最有力。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">→</span><span><strong>出産・育児等のブランクから再就職したい（東京都）:</strong> <strong>女性デジタルカレッジ</strong>（無料・託児つき）でPCスキルから立て直す。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">→</span><span><strong>東京都以外・雇用保険を受給できない:</strong> <strong>求職者支援訓練</strong>。無料訓練＋要件を満たせば月10万円の給付金。あわせて自治体の女性向け事業を「探し方3ステップ」で確認。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">→</span><span><strong>まだ方向性を迷っている:</strong> まず<strong>マナビDXの無料講座</strong>で適性を試してから、訓練への応募を判断するのが失敗しない順序です。</span></li>
              </ul>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            訓練修了後の転職活動の進め方は<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験からITエンジニアになる方法</a>を、在職のまま学ぶ制度の全体像は<a href="/articles/reskilling-leave/" className="underline" style={{ color: "#7c3a55" }}>リスキリング支援の活用ガイド</a>を参照してください。
          </p>
        </div>
      </section>

      {/* sec6 ハブリンク */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">各制度の詳細ガイド記事（サイト内）</h2>
          <p className="text-text-light leading-relaxed text-sm mb-6">
            本記事は全体マップです。各制度の申込方法・注意点・体験レベルの深掘りは、それぞれの専用ガイドで解説しています。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/tokyo-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都 女性ITエンジニア育成事業ガイド</h3><p className="text-sm text-text-light">対象・2コースの内容・申込方法・応募前チェック</p></a>
            <a href="/articles/women-digital-college/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都 女性デジタルカレッジガイド</h3><p className="text-sm text-text-light">入門/基礎及び応用コース・無料託児・申込の流れ</p></a>
            <a href="/articles/training-benefit-it/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>教育訓練給付でITを学ぶ完全ガイド</h3><p className="text-sm text-text-light">3種類の給付率・対象講座の探し方・申請手順</p></a>
            <a href="/articles/hello-training-it/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ハロートレーニングでITを学ぶガイド</h3><p className="text-sm text-text-light">求職者支援訓練・月10万円給付金・コースの探し方</p></a>
            <a href="/articles/manabi-dx/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>マナビDX活用ガイド</h3><p className="text-sm text-text-light">無料講座の選び方・学習の始め方・活用手順</p></a>
            <a href="/articles/programming-school/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性向けプログラミングスクールの選び方</h3><p className="text-sm text-text-light">公的訓練と民間スクールの使い分けに</p></a>
            <a href="/articles/hitorioya-it-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ひとり親のIT資格取得に使える給付金</h3><p className="text-sm text-text-light">高等職業訓練促進給付金（月10万円・デジタル分野）を解説</p></a>
            <a href="/articles/women-digital-plan/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>新・女性デジタル人材育成プランとは</h3><p className="text-sm text-text-light">国のプランから個人が使える支援への入口を整理</p></a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec7" className="py-10">
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
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 厚生労働省「教育訓練給付制度」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html</a>（2026年7月参照）</li>
            <li>出典: 厚生労働省「求職者支援制度のご案内」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html</a>（2026年7月参照）</li>
            <li>出典: 経済産業省・IPA「マナビDX」 <a href="https://manabi-dx.ipa.go.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://manabi-dx.ipa.go.jp/</a>（2026年7月参照）</li>
            <li>出典: 東京都「令和8年度女性ITエンジニア育成事業」公式サイト <a href="https://women-tokyo-en.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://women-tokyo-en.metro.tokyo.lg.jp/</a>（2026年7月参照）</li>
            <li>出典: 東京都「女性デジタルカレッジ事業」公式サイト <a href="https://tokyo-woman-d.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://tokyo-woman-d.metro.tokyo.lg.jp/</a>（2026年7月参照）</li>
            <li>出典: TOKYOはたらくネット「女性デジタルカレッジ事業」 <a href="https://www.hataraku.metro.tokyo.lg.jp/kyushokusha-kunren/etc/jyosei_digital/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.hataraku.metro.tokyo.lg.jp/kyushokusha-kunren/etc/jyosei_digital/index.html</a>（2026年7月参照）</li>
            <li>出典: 埼玉県「女性のデジタル人材育成推進事業」公式サイト <a href="https://woman-jobtraining-pref-saitama.com/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://woman-jobtraining-pref-saitama.com/</a>（2026年7月参照）</li>
            <li>出典: 福岡県「でじたる女性プロジェクト」公式サイト・福岡県庁報道発表 <a href="https://digital-women.maia.co.jp/fukuoka/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://digital-women.maia.co.jp/fukuoka/</a>（2026年7月参照・事業終了表示）</li>
            <li>出典: 内閣府男女共同参画局「女性デジタル人材育成プラン」 <a href="https://www.gender.go.jp/policy/digital/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.gender.go.jp/policy/digital/index.html</a>（2026年7月参照）</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">学んだスキルを、理想の転職につなげましょう</h2>
            <p className="text-white/90 mb-6">公的訓練とあわせて転職エージェントに無料相談すれば、スキルを活かせる求人の選択肢が広がります。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
