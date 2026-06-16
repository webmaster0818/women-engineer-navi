import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニア転職【名古屋・東海】製造業DX・社内SEで広がる選択肢｜年収相場と働きやすい企業",
  description:
    "名古屋・東海で女性エンジニアが転職するためのガイド。自動車・製造業のDXや社内SE・組み込み・SIerが強い地域特性、年収相場（IT平均約500万・上位700万超）、育休やリモートが整う東海企業、未経験からのステップ、おすすめエージェントを実データで解説します。",
  alternates: { canonical: "/articles/nagoya/" },
  openGraph: {
    title: "女性エンジニア転職【名古屋・東海】製造業DX・社内SEで広がる選択肢",
    description:
      "名古屋・東海のIT転職市場、年収相場、女性が働きやすい東海企業、未経験からのステップを実データで解説。製造業DXとリモートで広がる選択肢を紹介します。",
    url: "https://women-engineer.com/articles/nagoya/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "女性エンジニア転職【名古屋・東海】製造業DX・社内SEで広がる選択肢｜年収相場と働きやすい企業",
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
    "名古屋・東海で女性エンジニアが転職するためのガイド。地域のIT求人特性、年収相場、働きやすい企業、未経験からのステップを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/nagoya/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "名古屋・東海のITエンジニアの年収相場はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "名古屋・東海のITエンジニアの平均年収はおよそ450万〜520万円で、全国平均と大きくは変わりません。背景には、自動車・製造業の賃金水準が高く、IT業界の給与もそれに引っ張られて首都圏に近い水準が保たれているという東海特有の事情があります。トヨタシステムズや中電シーティーアイ（CTI）といった大手グループSIerでは600万〜800万円台のポジションもあり、社内SEで上流（DX企画・要件定義）を担えると年収が一段上がります。一方で地場の中小企業は350万〜450万円が中心で、中小から大手・グループ会社への転職で年収が1.5倍以上になるケースもあります。",
      },
    },
    {
      "@type": "Question",
      name: "名古屋・東海はどんなIT求人が多いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "東海は日本最大の製造業集積地で、トヨタ・デンソー・アイシン・ブラザー工業など自動車・製造業のシステムを支える求人が中心です。具体的には、(1)製造業の社内SE・情報システム部門、(2)車載・FA機器の組み込みエンジニア、(3)トヨタシステムズや中電シーティーアイなどグループSIer、(4)製造業DX（工場IoT・生産管理・MES・基幹刷新）案件が多くを占めます。Web系・自社開発スタートアップは首都圏より少ない一方、製造業DXの需要は全国トップクラスで、上流から関われる安定したポジションが豊富なのが東海の強みです。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でも名古屋でエンジニア転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。東海はデジタル人材が慢性的に不足しており、製造業の情報システム部門やヘルプデスク・社内SE枠ではポテンシャル採用や未経験可の求人が出ています。事務職や品質管理から社内SEへ、という社内異動・転職ルートも多いのが地域の特徴です。まずはITパスポートや基本情報技術者で基礎を固め、Excel/SQLでのデータ活用やノーコード・業務改善の実績を作ると、製造業DXの現場で評価されやすくなります。地元志向の場合はマイナビ転職東海版やdoda、技術評価を重視するならIT特化型エージェントの併用が有効です。",
      },
    },
    {
      "@type": "Question",
      name: "名古屋で働く女性エンジニアに働きやすい企業はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "あります。NTTデータ東海はテレワーク・フレックス・時短勤務・育児休暇など個々に合わせた働き方ができ、愛知県の『あいち女性の活躍促進応援サイト』にも女性活躍企業として掲載されています。トヨタテクニカルディベロップメントは有給消化率やホワイト度ランキングで上位、トヨタシステムズや中電シーティーアイ（CTI）といったグループSIerも福利厚生・育休制度が手厚いのが特徴です。大手・グループ会社は産休育休の取得実績と復帰率が高く、ライフイベントと両立しながら長く働きやすい傾向があります。",
      },
    },
    {
      "@type": "Question",
      name: "名古屋在住でも東京の企業にフルリモートで転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "できます。フルリモート求人を選べば、名古屋に住みながら首都圏のWeb系・SaaS企業に転職し、東京水準の年収を得ることも可能です。生活コストが首都圏より低い名古屋に住みつつ高い給与を得られるため、可処分所得の面ではむしろ有利になります。地元の製造業DX案件と、フルリモートのWeb系案件の両方を比較できると選択肢が大きく広がります。リモート求人はIT特化型エージェントが豊富に扱っているため、地域でフィルタせず『フルリモート可』の条件で探すのがおすすめです。",
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
              { label: "名古屋・東海の女性エンジニア転職ガイド" },
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
              名古屋・東海の女性エンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                製造業DX・社内SEで広がる選択肢を、年収・企業・実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 名古屋・東海のIT転職市場の全体像</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 求人動向と特徴（製造業DXが牽引）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 名古屋・東海の年収相場（表）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 女性が働きやすい東海の企業</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 未経験から名古屋で転職するには（STEP）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. リモートで選択肢を広げる</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 名古屋での転職成功事例</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 市場の全体像 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">名古屋・東海のIT転職市場の全体像</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              名古屋を中心とする東海エリア（愛知・岐阜・三重・静岡）は、トヨタ自動車をはじめとする日本最大の製造業集積地です。その産業構造がそのままIT転職市場の色を決めており、「Web系・スタートアップが多い首都圏」とは性格が大きく異なります。東海のキーワードは<strong>「製造業 × IT」</strong>。自動車・部品・機械メーカーの社内システムや、ものづくりのデジタル化（DX）を支える人材の需要が圧倒的に強い地域です。
            </p>
            <p>
              この地域の大きな魅力は、<strong>製造業の高い賃金水準にIT職の給与も引っ張られ、年収が首都圏に近い水準で保たれている</strong>こと。にもかかわらず生活コストは首都圏より低く、可処分所得や暮らしやすさの面で有利です。さらに東海はデジタル人材が慢性的に不足しており、Uターン・Iターン人材を歓迎する企業が多く、自治体によっては首都圏からの移住に60万〜100万円規模の支援金を出すケースもあります。
            </p>
            <p>
              女性エンジニアにとっては、<strong>転勤の少ない地域密着の大手・グループ企業</strong>が多く、腰を据えて長く働きやすいのもポイント。製造業の大手は福利厚生・育休制度が手厚く、ライフイベントと両立しながらキャリアを積める土台が整っています。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>名古屋・東海ならではの3つの特徴</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>製造業DXの需要が全国トップクラス</strong>。工場IoT・生産管理・基幹刷新の上流案件が豊富</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>賃金が首都圏に近い水準</strong>。製造業の高給与がIT職にも波及し、生活コストは低い</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>転勤の少ない地域密着企業</strong>が多く、女性が腰を据えて長く働きやすい</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 求人動向と特徴 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向と特徴（製造業DXが牽引）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              東海のIT求人は、首都圏で目立つWeb系・SaaS開発よりも、<strong>製造業を支える4タイプ</strong>が中心です。「華やかな自社サービス」より「ものづくりを止めない縁の下のシステム」が主役で、その分だけ安定性と上流関与のチャンスが大きいのが特徴です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 製造業の社内SE・情報システム</h3>
              <p className="text-text-light text-sm leading-relaxed">自動車・部品・機械メーカーの基幹システム（ERP・生産管理）の運用や刷新、ベンダーコントロールを担当。残業が少なく転勤なしの求人が多く、女性が長く働きやすい代表格です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 組み込み・車載エンジニア</h3>
              <p className="text-text-light text-sm leading-relaxed">クルマやFA機器・家電の制御ソフト（C/C++）を開発。トヨタ・デンソー・アイシン・ブラザーの開発を支える案件が豊富で、東海ならではの専門性が積み上がります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. グループSIer・受託開発</h3>
              <p className="text-text-light text-sm leading-relaxed">トヨタシステムズ、中電シーティーアイ（CTI）、NTTデータ東海など、大手グループのSIerが地域の開発を牽引。安定した基盤の上で上流工程に関われます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 製造業DX・データ活用</h3>
              <p className="text-text-light text-sm leading-relaxed">工場IoT・MES・生産データ分析・基幹刷新など、ものづくりのデジタル化を進める成長領域。IT投資が遅れていた製造業ほど、中長期のDXを描ける人材を強く求めています。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong>ポイント：</strong>東海は「情報システム部門を立ち上げたい」「中長期のDX計画を提案できる中核人材が欲しい」という製造業からの引き合いが特に強い地域です。コードを書く力だけでなく、<strong>業務を理解して改善を提案する力</strong>が高く評価されるため、事務・品質管理・生産管理などの現場経験がそのまま武器になります。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 年収相場 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">名古屋・東海の年収相場</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              名古屋・東海のITエンジニアの平均年収はおよそ<strong>450万〜520万円</strong>で、全国平均と大きくは変わりません。製造業の高い賃金水準に引っ張られ、首都圏に近い水準が保たれているのが東海の特徴です。下表は求人傾向・各種調査をもとにした目安です（企業・スキル・職種により変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>地場の中小IT・SES</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約350万〜450万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>未経験・若手の入口。大手転職で1.5倍以上になる例も</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>製造業の社内SE</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約450万〜650万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>転勤なし・残業少なめ。上流ほど高い</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>組み込み・車載</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約450万〜700万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>東海ならではの専門性。経験で大きく上がる</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>大手グループSIer</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約500万〜800万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>トヨタシステムズ・中電CTI等。福利厚生が手厚い</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>製造業DX・上流／PM</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約600万〜900万円超</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>DX企画・要件定義を担える中核人材は希少で高待遇</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>東海で年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>中小から大手・グループ会社へ</strong>。同じスキルでも年収が1.5倍以上になるケースがある</li>
              <li>② <strong>製造業DXの上流（DX企画・要件定義）</strong>に踏み込む。中核人材は希少で高待遇</li>
              <li>③ <strong>フルリモートで首都圏のWeb系へ</strong>。東京水準の年収を低コストの名古屋で得る</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec4 働きやすい企業 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が働きやすい東海の企業</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              東海は転勤の少ない地域密着の大手・グループ企業が多く、産休育休の取得実績と復帰率が高い傾向があります。愛知県の<strong>「あいち女性の活躍促進応援サイト」</strong>では女性活躍企業が公開されており、企業選びの参考になります。代表的な企業タイプを紹介します。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">NTTデータ東海</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性活躍企業</span></div>
              <p className="text-sm text-text-light leading-relaxed">テレワーク・フレックス・時短勤務・育児休暇など、個々に合わせた働き方ができるNTTデータグループの東海拠点。名古屋・伏見の好立地で、自治体・金融・民間まで幅広いシステムを手がけます。愛知県の女性活躍企業としても掲載されています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">トヨタシステムズ／中電シーティーアイ（CTI）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>大手グループSIer</span></div>
              <p className="text-sm text-text-light leading-relaxed">トヨタグループ各社のITを担うトヨタシステムズ、中部電力グループでエネルギーDXを支える中電CTI。いずれも経営基盤が安定し、福利厚生・育休制度が手厚く、上流工程に長く携われます。腰を据えてキャリアを積みたい女性に向きます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">トヨタテクニカルディベロップメント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>ホワイト企業</span></div>
              <p className="text-sm text-text-light leading-relaxed">有給消化率・ホワイト度ランキングで上位に挙がるトヨタ系の技術会社。働き方の整備が進んでおり、ワークライフバランスを重視する人に評価されています。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong>確認ポイント：</strong>求人票だけでは育休取得実績・復帰率・リモートの運用実態・女性管理職比率まではわかりません。<strong>名古屋・東海の事情に詳しいエージェント経由</strong>で、企業ごとの実態を確認するのが確実です。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 未経験STEP */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から名古屋で転職するには</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              東海はデジタル人材が不足しており、製造業の情報システム部門やヘルプデスク・社内SE枠で<strong>未経験可・ポテンシャル採用</strong>の求人が出ています。事務・品質管理・生産管理から社内SEへ、という転身ルートが多いのも地域の特徴。次のステップで進めると現実的です。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "IT基礎を資格で固める", "ITパスポート → 基本情報技術者で土台づくり。製造業の社内SE採用では基礎資格が評価されやすく、学習意欲の証明にもなります。"],
              ["STEP2", "今の現場経験を棚卸しする", "事務・品質管理・生産管理などの業務知識は、製造業DXの現場で大きな武器。『業務を理解している』ことは未経験でも強い差別化になります。"],
              ["STEP3", "Excel/SQL・業務改善の実績を作る", "データ集計・SQL・ノーコードでの業務効率化など、身近な改善実績を用意。製造業の社内SEで即戦力イメージを持たれます。"],
              ["STEP4", "地元志向か全国志向かを決める", "地元密着なら製造業の社内SE・グループSIer。年収・キャリア優先ならフルリモートで首都圏のWeb系も視野に。方針で受ける求人が変わります。"],
              ["STEP5", "地域に強いエージェントに登録する", "マイナビ転職東海版・dodaなど地元求人に強い媒体と、技術評価に強いIT特化型を併用。名古屋の実情に詳しい担当に相談するのが近道です。"],
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

      {/* sec6 リモート */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">リモートで選択肢を広げる</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              名古屋に住みながら働くなら、地元の製造業・グループSIerだけでなく、<strong>フルリモートで首都圏のWeb系・SaaS企業に転職する</strong>という道も大きな選択肢です。地元案件は安定とワークライフバランスに強く、リモート案件は年収と職種の幅に強い――この2つを比較できると、条件交渉の余地が一気に広がります。
            </p>
            <p>
              特に注目したいのが<strong>生活コストの差</strong>。家賃をはじめ名古屋の生活費は首都圏より低いため、フルリモートで東京水準の年収を得られれば、可処分所得の面ではむしろ有利になります。育児・介護と両立しながら、通勤ゼロで高めの年収を得られるのは、女性にとって大きなメリットです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>地元・東海で働く</h3>
              <p className="text-text-light text-sm leading-relaxed">製造業の社内SE・組み込み・グループSIer。転勤が少なく、福利厚生と安定性が高い。地域に根ざして長く働きたい人向き。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>フルリモートで首都圏へ</h3>
              <p className="text-text-light text-sm leading-relaxed">Web系・SaaSの自社開発に名古屋から参加。東京水準の年収を低コストの名古屋で。職種・技術スタックの幅も広がる。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            リモート求人はIT特化型エージェントが豊富に扱っています。地域でフィルタせず<strong>「フルリモート可」</strong>の条件で探すと、選べる企業数が大きく増えます。
          </p>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>名古屋・東海では、技術を正当に評価してもらうIT特化型と、女性のキャリア継続を重視する女性特化型の併用が効果的です。地元求人に強い総合型も合わせると、地域案件とリモート案件の両方を比較できます。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーが提案してくれます。フルリモート求人も多く、名古屋在住で首都圏の案件を狙う場合に有効。女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと年収交渉力に定評があり、中小から大手・グループ会社への年収アップ転職と相性が良いです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。働き方の条件で絞り込みたい人に最適です。東海の働きやすい企業の実態確認にも役立ちます。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、名古屋・東海の事情に詳しいアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec8 成功事例 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">名古屋での転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・品質管理→製造業の社内SE）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">自動車部品メーカーの品質管理 / 年収400万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">大手製造業の社内SE（生産管理DX）/ 年収560万円・転勤なし</p></div>
              </div>
              <p className="text-sm text-text-light">現場の業務知識とExcel/SQLでの改善実績を評価され、製造業DXの社内SEへ。基本情報技術者を取得して基礎を補強し、年収160万円アップと転勤なしの安定環境を同時に実現しました。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（20代後半・地場SES→フルリモートWeb系）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">名古屋の地場SES（常駐）/ 年収380万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">首都圏SaaS企業の開発（フルリモート）/ 年収540万円</p></div>
              </div>
              <p className="text-sm text-text-light">IT特化型エージェントで「フルリモート可」に絞って活動。名古屋に住んだまま首都圏のSaaS企業へ転職し、通勤ゼロのまま年収160万円アップ。生活コストの低さも相まって、可処分所得が大きく改善しました。</p>
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
            <a href="/articles/internal-se/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>社内SE転職ガイド</h3><p className="text-sm text-text-light">製造業で人気の働きやすい職種</p></a>
            <a href="/articles/embedded/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>組み込みエンジニア転職ガイド</h3><p className="text-sm text-text-light">車載・FA機器で東海に強い職種</p></a>
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リモートワーク求人ガイド</h3><p className="text-sm text-text-light">名古屋から首都圏案件を狙う</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすい企業の選び方</h3><p className="text-sm text-text-light">育休・復帰率の見極め方</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">名古屋・東海で理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。地元の製造業DXからフルリモートまで、あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
