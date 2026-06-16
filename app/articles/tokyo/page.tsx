import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニア 転職 東京ガイド｜求人動向・年収相場・働きやすい企業",
  description:
    "東京で女性エンジニアが転職するための完全ガイド。全国最多の求人数や自社開発・メガベンチャー・スタートアップの集積、全国比で高い年収相場（東京567万円前後）、女性が働きやすい企業の見極め方、未経験からのステップ、リモートと保活・通勤事情まで実データで解説します。",
  alternates: { canonical: "/articles/tokyo/" },
  openGraph: {
    title: "女性エンジニア 転職 東京ガイド｜求人動向・年収相場・働きやすい企業",
    description:
      "東京の女性エンジニア転職を実データで解説。全国最多の求人、高い年収相場、働きやすい企業、未経験ステップ、リモートと保活・通勤事情まで。",
    url: "https://women-engineer.com/articles/tokyo/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニア 転職 東京ガイド｜求人動向・年収相場・働きやすい企業",
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
    "東京の女性エンジニア転職を実データで解説。全国最多の求人、高い年収相場、働きやすい企業、未経験ステップ、リモートと保活・通勤事情まで。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/tokyo/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "東京の女性エンジニアの年収はどれくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "東京のITエンジニアの平均年収はおよそ562万〜580万円で、全国の都道府県で最も高い水準です。求人ボックスの調査では東京都のシステムエンジニアの平均年収は約579万円で、全国平均の約516万円を60万円以上上回ります。地方都市（約450万円）との差は最大で130万〜200万円に達します。理由は、自社開発企業・メガベンチャー・上場IT企業が集中し、高待遇の求人が多いためです。性別による差はスキルと経験、そして年収交渉で埋められるため、エージェントを活用して適正額を得ることが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "東京は他の地域より女性エンジニアの求人が多いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。東京はIT・Web企業の本社が最も集中する地域で、エンジニア求人数は全国で群を抜いて多いのが特徴です。自社開発のWebサービス、SaaS、メガベンチャー、スタートアップ、SIer、コンサルまで業態が幅広く、求人ボックスやIndeedでは東京都のリモート可IT求人だけで数万件規模が掲載されています。求人が多いほど『働きやすい会社』を選べる余地が広がり、産休育休の実績やリモート可否など、女性が条件で絞り込みやすくなります。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でも東京でエンジニアに転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。東京は未経験可・ポテンシャル採用の求人が全国で最も多く、プログラミングスクールや勉強会・コミュニティも集中しているため、学習環境が整っています。言語を1つ習得し、Web基礎・Git・小さなポートフォリオを用意すれば挑戦できます。ただし企業数が多いぶん玉石混交でもあるため、研修体制や女性の定着率、産休育休の実績を見極めることが大切です。IT特化型・女性特化型のエージェントを併用し、実態を確認しながら進めるのが安全です。",
      },
    },
    {
      "@type": "Question",
      name: "東京で子育てしながらエンジニアを続けるのは大変ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "通勤ラッシュや一部の区での保活（保育園探し）の競争など、東京特有の負担はあります。世田谷区・江戸川区など待機児童が比較的多い区もあり、共働きでは送り迎えと通勤の両立が課題になりがちです。一方でエンジニアはフルリモートやフレックスを導入する企業が多く、通勤負担そのものを減らせる職種です。東京都も育児中のテレワーク導入助成や女性ITエンジニア育成事業を進めており、リモート前提で会社を選べば、東京の高い年収を得ながら子育てと両立しやすくなります。",
      },
    },
    {
      "@type": "Question",
      name: "東京で女性が働きやすいIT企業はどう見分ければいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "客観的な指標として、厚生労働省の『くるみん』『えるぼし』認定や、女性管理職比率、女性エンジニア比率、産休育休の取得・復帰実績を確認しましょう。たとえばサイバーエージェントは女性従業員比率33.7%・女性管理職比率24.9%と公表し、メルカリやDeNAもDE&I（多様性）施策に積極的です。求人票に出ない実態（リモートの運用、時短の取りやすさ、復帰後の働き方）は、女性のキャリアに詳しいエージェント経由やOpenWorkなどの口コミで確認するのが確実です。",
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
              { label: "東京の女性エンジニア転職ガイド" },
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
              東京の女性エンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                全国最多の求人・高い年収相場・働きやすい企業を実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 東京のIT転職市場の特徴</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 求人動向と特徴（業態の幅広さ）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 東京のエンジニア年収相場（地域比較表）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 女性が働きやすい東京の企業</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 未経験から東京で転職するには</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. リモートという選択肢（保活・通勤事情）</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 転職成功事例</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 東京のIT転職市場 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">東京のIT転職市場の特徴</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              東京は、日本のIT・Web企業の本社が最も集中する地域です。自社開発のWebサービス企業、メルカリ・サイバーエージェント・DeNAなどのメガベンチャー、急成長中のスタートアップ、大手SIer、ITコンサルまで、ありとあらゆる業態が揃い、エンジニア求人数は全国で群を抜いています。求人ボックスやIndeedでは、東京都のリモート可IT求人だけで数万件規模が常時掲載されています。
            </p>
            <p>
              「女性エンジニア 転職 東京」というキーワードで探す人にとって最大のメリットは、<strong>選択肢の多さ</strong>です。求人が多いほど、年収・働き方・企業文化を比較して「自分に合う会社」を選びやすくなります。産休育休の実績が豊富な企業、フルリモート前提の企業、女性管理職が多い企業など、条件で絞り込んでも十分な数の求人が残るのは、東京ならではの強みです。
            </p>
            <p>
              さらに東京都は、女性のIT人材育成に行政としても力を入れています。東京都が運営する「女性ITエンジニア育成事業」のように、未経験から学び直してエンジニアを目指す女性向けの公的な支援も存在し、学習・キャリア形成の土台が整っているのも特徴です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>東京で転職する3つのメリット</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>求人数が全国最多。条件で絞り込んでも選択肢が豊富</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>年収相場が全国トップ（東京567万円前後 / 全国平均537万円）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>勉強会・コミュニティ・スクールが集積し学習環境が整う</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 求人動向と特徴 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向と特徴（業態の幅広さ）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              dodaのITエンジニア中途採用マーケットレポートでは、求人数は前年から増加傾向が続いています。DX推進や基幹システム刷新によるIT投資需要が背景にあり、その需要が最も顕著に表れるのが東京です。転職希望者が重視する「上流工程への挑戦」「身につく技術の幅」「自社開発の割合の高さ」を満たす求人が東京に集中しています。
            </p>
            <p>
              東京の求人は、同じ「エンジニア」でも業態によって働き方も年収も大きく異なります。女性が働きやすさで選ぶなら、業態ごとの傾向を知っておくと求人選びがスムーズです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>自社開発・メガベンチャー</h3>
              <p className="text-text-light text-sm leading-relaxed">サイバーエージェント・メルカリ・DeNAなど。年収が高く、リモート・フレックスや女性活躍制度が充実。技術力で評価されやすく、長期キャリアを築きやすい。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>スタートアップ・SaaS</h3>
              <p className="text-text-light text-sm leading-relaxed">少人数で裁量が大きく、Go/Python/TypeScriptなど新しめの技術に触れやすい。フルリモートも多い。制度は会社差が大きいので産休育休実績の確認が重要。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>大手SIer・社内SE</h3>
              <p className="text-text-light text-sm leading-relaxed">福利厚生・休暇制度が手厚く、安定志向の女性に人気。社内SEは自社業務を支える役割で、残業が読みやすくライフイベントと両立しやすい傾向。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ITコンサル・受託開発</h3>
              <p className="text-text-light text-sm leading-relaxed">上流工程に関われ年収も高め。一方で繁忙期の負荷やプロジェクト常駐の有無は要確認。リモート可否を必ずチェックしたい業態。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 年収相場 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">東京のエンジニア年収相場（地域比較表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              東京のITエンジニア年収は<strong>全国で最も高い</strong>のが大きな魅力です。各種調査では、東京のITエンジニア平均年収は<strong>約562万〜580万円</strong>で、全国平均（約537万円）を上回ります。地方都市（約450万円）との差は最大で130万〜200万円に達します。下表は各種調査をもとにした地域別の目安です（職種・スキル・企業により変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>地域</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ITエンジニア平均年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>東京都</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約562万〜580万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>全国トップ。SE単体では約579万円との調査も</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>関東（東京除く）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約500万〜520万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>神奈川・千葉・埼玉。東京通勤圏で高め</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>大阪府</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約520万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>関西の中心。東京に次ぐ求人規模</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>地方都市</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約450万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>東京との差は最大130万〜200万円</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>全国平均</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約537万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2024年9月〜2025年8月調査</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>東京で年収を最大化する3つの視点</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>自社開発・メガベンチャー</strong>を狙う。同じ職種でも年収レンジが高い</li>
              <li>② <strong>東京の求人を、地方在住のままフルリモートで受ける</strong>。地方在住でも東京水準の年収を得られる</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。求人が多い東京は交渉余地が大きい</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec4 女性が働きやすい東京の企業 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が働きやすい東京の企業</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              東京には女性活躍に積極的なIT企業が多く、客観的な指標で見極めやすいのも利点です。たとえばサイバーエージェントは女性従業員比率<strong>33.7%</strong>・女性管理職比率<strong>24.9%</strong>を公表し、「ママがCAで長く働く」ための制度パッケージや、技術担当役員直下の「Tech DE&Iプロジェクト」で開発組織のジェンダーギャップ解消に取り組んでいます。メルカリやDeNAもDE&I（多様性）施策に積極的で、女性向けカンファレンスの協賛などを行っています。
            </p>
            <p>
              企業選びでは、次のような<strong>客観指標</strong>を確認すると失敗しにくくなります。求人票に出ない実態は、女性のキャリアに詳しいエージェントやOpenWorkなどの口コミで補完しましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. くるみん・えるぼし認定</h3>
              <p className="text-text-light text-sm leading-relaxed">厚生労働省による、子育て支援・女性活躍に積極的な企業の認定。取得企業は産休育休や両立支援の体制が整っている目安になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 女性管理職比率・女性エンジニア比率</h3>
              <p className="text-text-light text-sm leading-relaxed">数字が高いほど、ロールモデルがいて長期的に活躍できる土壌がある証拠。IR資料やサステナビリティページで公表している企業が増えています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 産休育休の取得・復帰実績</h3>
              <p className="text-text-light text-sm leading-relaxed">「制度がある」だけでなく、実際の取得率・復帰率が重要。復帰後に時短やリモートで活躍している事例があるかを確認しましょう。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. リモート・フレックスの運用実態</h3>
              <p className="text-text-light text-sm leading-relaxed">制度として有名でも、実際に使えるかは別問題。週何日出社か、コアタイムの有無、時短との併用可否まで踏み込んで確認すると安心です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 未経験から東京で */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から東京で転職するには</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              東京は未経験可・ポテンシャル採用の求人が全国で最も多く、スクールや勉強会も集中しているため、未経験からの挑戦に向いた環境です。1日2〜3時間の学習で<strong>半年〜1年</strong>を目安に、次のステップで進めると挫折しにくくなります。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "目指す職種・業態を決める", "東京は業態が幅広いぶん、まず方向性を決めると学習が定まります。自社開発・SaaS・社内SEなど、働き方の希望から逆算しましょう。"],
              ["STEP2", "言語を1つ習得する", "未経験はPython・Ruby・PHP・JavaScriptが学びやすい。東京の求人で需要が高い言語から1つに集中して学びます。"],
              ["STEP3", "Web基礎・Git・DBを学ぶ", "Webの仕組み、Gitでのコード管理、データベースとSQLの基礎を押さえる。実務で必ず使う土台です。"],
              ["STEP4", "ポートフォリオを作る", "ログイン機能やCRUD・APIを備えた小さなWebアプリを公開。東京の選考でも実績として最も効きます。"],
              ["STEP5", "勉強会・コミュニティに参加", "東京は技術勉強会やもくもく会、女性エンジニアコミュニティが豊富。情報収集と人脈づくりで転職が有利になります。"],
              ["STEP6", "エージェントで求人を絞り込む", "未経験可かつ研修・女性活躍制度が整った企業を、IT特化型・女性特化型エージェントで紹介してもらいます。"],
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

      {/* sec6 リモートという選択肢 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">リモートという選択肢（保活・通勤事情）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              東京で働くうえで避けて通れないのが、<strong>通勤ラッシュと保活（保育園探し）</strong>です。世田谷区・江戸川区・目黒区など待機児童が比較的多い区もあり、共働き家庭では「保育園の送り迎え＋通勤」の両立が大きな負担になりがちです。始業9時・通勤1時間の場合、保育園送迎を含めると7時40分前後には家を出る必要がある、という試算もあります。
            </p>
            <p>
              ここで強力な選択肢になるのが<strong>リモートワーク</strong>です。エンジニアはフルリモートやフレックスを導入する企業が多く、通勤時間そのものを削減できます。東京都は育児中のテレワーク導入を促進する助成金も用意しており、リモート前提で会社を選べば、東京の高い年収を得ながら子育てと両立しやすくなります。
            </p>
            <p>
              さらに見逃せないのが、<strong>「地方在住のまま東京の求人をフルリモートで受ける」</strong>という働き方です。住居費や保活の負担が軽い地域に住みながら、東京水準の年収（地方比で最大130万〜200万円高い）を得られるため、ライフプランの自由度が大きく広がります。
            </p>
            <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>リモートを軸に東京求人を選ぶときのチェック点</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・「リモート可」が週何日か、フルリモートか（出社頻度を必ず確認）</li>
                <li>・地方在住OKの求人か（居住地条件・出社必須日の有無）</li>
                <li>・フレックス／コアタイムの有無、時短勤務との併用可否</li>
                <li>・チャットや非同期コミュニケーションの文化が根付いているか</li>
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
            <p>東京は求人数が多いぶん、自分に合う1社を見つけるにはエージェントの力が効きます。技術を正当に評価してもらうIT特化型と、働き方を重視する女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し、東京の自社開発・メガベンチャー求人が豊富。技術に精通したアドバイザーが、年収相場の高い東京で適正な年収交渉をサポートしてくれます。リモート求人や女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、東京のスタートアップ〜大手まで幅広い求人を保有。スピーディーなマッチングと年収アップ実績に定評があり、東京の高年収求人を狙う人に向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">首都圏（東京・神奈川・千葉・埼玉）に強く、産休育休やリモートなど女性のキャリア継続に配慮した求人を中心に紹介。保活や通勤を踏まえた働き方の条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで東京転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec8 成功事例 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・地方SIer→東京の自社開発）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">地方SIerのSE / 年収420万円・常駐勤務</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">東京の自社開発SaaS / 年収580万円・フルリモート（地方在住のまま）</p></div>
              </div>
              <p className="text-sm text-text-light">IT特化型エージェント経由で、地方在住可のフルリモート求人に応募。引っ越さず東京水準の年収を得て、保活の負担が軽い地元で子育てしながら働く環境を実現しました。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（20代後半・未経験→東京のメガベンチャー）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">都内の事務職（IT未経験）/ 年収340万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">東京のメガベンチャー（バックエンド）/ 年収480万円・フレックス</p></div>
              </div>
              <p className="text-sm text-text-light">東京の勉強会やコミュニティに参加しながら独学＋スクールでPythonを習得し、CRUD＋API付きのポートフォリオを公開。女性活躍制度が整った企業に未経験から転職し、女性管理職のロールモデルがいる環境で長期キャリアの土台を得ました。</p>
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
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リモート求人の探し方</h3><p className="text-sm text-text-light">フルリモートで働くための条件</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすい企業の見つけ方</h3><p className="text-sm text-text-light">くるみん・えるぼしで見極める</p></a>
            <a href="/articles/how-to-choose/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>転職エージェントの選び方</h3><p className="text-sm text-text-light">失敗しないエージェント選び</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">東京で理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
