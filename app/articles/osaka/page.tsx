import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニア転職 大阪・関西ガイド｜求人動向・年収相場・働きやすい企業",
  description:
    "大阪・関西で転職したい女性エンジニア向けガイド。東京に次ぐ全国2位の求人規模、SIer・受託が多い市場特性、年収相場（大阪のSE平均約620万円）、さくらインターネット・ラクスなど働きやすい関西企業、リモートで東京案件を受ける選択肢を実データで解説します。",
  alternates: { canonical: "/articles/osaka/" },
  openGraph: {
    title: "女性エンジニア転職 大阪・関西ガイド｜求人動向・年収相場・働きやすい企業",
    description:
      "大阪・関西の女性エンジニア転職を実データで解説。求人動向・年収相場・働きやすい関西企業・リモートで東京案件を受ける選択肢まで網羅。",
    url: "https://women-engineer.com/articles/osaka/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニア転職 大阪・関西ガイド｜求人動向・年収相場・働きやすい企業",
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
    "大阪・関西の女性エンジニア転職を、求人動向・年収相場・働きやすい関西企業・リモート活用まで実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/osaka/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "大阪・関西は東京と比べてエンジニアの求人は少ないですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "東京と比べると総量は少なくなりますが、大阪のIT求人は約1,500件規模で、東京（約8,000件）に次ぐ全国2位です。求人が少なくて転職できないというより、東京ほどモダンな自社開発・スタートアップ求人の割合が多くなく、SIer・受託（SES）の比率が高いのが特徴です。職種や技術スタックを絞ると選択肢が限られる場面はありますが、リモートで首都圏案件を受ける前提に立てば選択肢は大きく広がります。女性が条件で絞り込んでも十分に動ける市場です。",
      },
    },
    {
      "@type": "Question",
      name: "大阪と東京ではエンジニアの年収はどのくらい違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "システムエンジニアの平均年収は東京が約706万円、大阪が約620万円で、80万〜90万円ほどの差があります。情報通信業全体でも東京約719万円に対し大阪約645万円と、おおむね10〜15%ほど低めです。ただし大阪は家賃をはじめ生活コストが東京より安く、可処分所得ベースで見ると差は縮まります。さらに、リモートで東京企業のフルリモート求人に就けば、大阪に住みながら東京水準の年収を得ることも現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "関西で女性が長く働きやすいIT企業はどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "大阪市に本社を置くさくらインターネットは、産休・育休後の時短勤務やリモートワークが整い、女性管理職も多いと評判です。メール共有・楽楽精算などSaaSを展開するラクス、グランフロント大阪に開発拠点を持つLINEヤフーやサイバーエージェントグループも働き方の柔軟性が高い傾向です。老舗SIerのNCS&Aは平均勤続年数16年超とブランクなく長く働ける環境で知られます。ただし制度の実態は企業差が大きいため、育休復帰率やリモートの運用実態をエージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "大阪に住みながら東京の案件をリモートで受けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。コロナ禍以降フルリモートが定着し、地方在住でも首都圏と同等の単価を得るケースが増えています。2026年時点で主要エージェントのリモート対応案件比率は55〜65%程度を維持。特にReact・Next.js・TypeScript・AWS・Python・Goなどモダンな技術を扱えると、大阪在住でも月単価80万〜120万円の東京案件を獲得しやすい状況です。育児や介護で転居が難しい女性にとって、住む場所を変えずにキャリアと年収を伸ばせる有力な選択肢です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験から大阪でエンジニアに転職するのは難しいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "東京より未経験可・ポテンシャル採用の母数は少ないものの、大阪はSIer・受託企業が多く、研修制度を整えた企業が一定数あるため未経験の受け皿はあります。まずPython・PHP・Rubyなど学びやすい言語を1つ習得し、CRUDやAPIを備えた小さなポートフォリオを作るのが王道です。難波・本町・梅田周辺にスクールやIT勉強会も多く、関西の勉強会コミュニティで人脈を作ると紹介につながることもあります。IT特化型・女性特化型エージェントを併用し、関西求人に強いアドバイザーを付けると成功率が上がります。",
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
              { label: "大阪・関西の女性エンジニア転職ガイド" },
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
              女性エンジニア転職 大阪・関西ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                求人動向・年収相場・働きやすい企業・リモート活用を実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 大阪・関西のIT転職市場の全体像</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 求人動向と大阪ならではの特徴</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 大阪・関西の年収相場（東京との比較表）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 女性が働きやすい関西の企業</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 未経験から大阪で転職するには（STEP）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. リモートで選択肢を広げる（東京案件）</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 転職成功事例</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 市場の全体像 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">大阪・関西のIT転職市場の全体像</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              大阪は、IT求人数で<strong>全国2位</strong>を誇る西日本最大のIT集積地です。求人件数はおよそ<strong>1,500件規模</strong>で、東京（約8,000件）には及ばないものの、名古屋・福岡など他都市を大きく引き離しています。関西全体では大阪を中心に、京都（任天堂・京セラなどものづくり×IT）、神戸（医療・バイオ系IT）と特色ある都市がそろい、選択肢は意外なほど広がっています。
            </p>
            <p>
              拠点はJR大阪駅前の<strong>グランフロント大阪・うめきた（梅田）</strong>と、SIer・受託が集まる<strong>本町・淀屋橋</strong>、ゲーム・Web系が点在する<strong>難波・心斎橋</strong>に分かれます。グランフロント大阪にはLINEヤフーやサイバーエージェントグループ（Cygamesなど）が開発拠点を構え、近年はモダンな自社開発企業の関西拠点も増えています。
            </p>
            <p>
              一方で、IT人材における女性比率は全国的にまだ2割程度。関西も同様ですが、ダイバーシティ推進とリモート普及で、女性が長くキャリアを築ける環境は着実に整いつつあります。「東京に出ないとエンジニアとして伸びない」という時代は終わりつつあり、<strong>大阪に住みながら東京水準の仕事をする</strong>選択肢も現実的になりました。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>大阪・関西で働く3つの強み</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>東京に次ぐ全国2位の求人規模。西日本では圧倒的な選択肢</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>家賃・生活費が東京より安く、同じ年収でも可処分所得が多い</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>リモートを使えば大阪在住のまま東京案件・東京水準の年収も狙える</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 求人動向と特徴 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向と大阪ならではの特徴</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              大阪の求人を東京と比べたとき、最大の違いは<strong>SIer・受託開発（SES含む）の比率が高い</strong>ことです。doda・マイナビ転職（関西版）では「SIer」を含むエンジニア求人だけで大阪府に約1,000件。金融・製造・流通・公共といった既存業界の基幹システムを支える案件が中心で、業務系の上流（要件定義・設計）を経験しやすいのが関西の特徴です。
            </p>
            <p>
              一方、モダンな自社開発（React/Next.js・Go・SaaS）やスタートアップの絶対数は東京に集中しており、最新技術でゴリゴリ開発したい人には物足りなく感じる場面もあります。とはいえ、さくらインターネット（クラウド基盤）やラクス（楽楽精算などSaaS）のような自社開発の有力企業が大阪に本社を構えており、「関西＝SIerしかない」は誤解です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. SIer・受託が多く上流を経験しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">TISや関西系SIerが多く、要件定義・設計など上流工程に関われる求人が豊富。設計力は流行に左右されにくく、女性のブランク復帰時にも武器になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 自社開発・SaaSの有力企業も本社を構える</h3>
              <p className="text-text-light text-sm leading-relaxed">さくらインターネット、ラクス、カプコンなど大阪本社の自社開発企業が存在。グランフロント大阪にはLINEヤフー・サイバーエージェント系の拠点もあります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 大手の安定×ホワイトな社風</h3>
              <p className="text-text-light text-sm leading-relaxed">NCS&Aは平均勤続年数16年超、公共案件中心で経営が安定。有給取得・育休取得率が高水準の企業が多く、腰を据えて長く働きたい女性に向きます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. ゲーム・Web業界の集積</h3>
              <p className="text-text-light text-sm leading-relaxed">カプコン（大阪本社）をはじめ、難波・心斎橋にゲーム・Web系が点在。クリエイティブ職やQA、Unityエンジニアなど多様な職種の入り口があります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 年収相場 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">大阪・関西の年収相場（東京との比較表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              システムエンジニアの平均年収は、東京が約706万円に対し大阪が約620万円。情報通信業全体でも<strong>東京約719万円・大阪約645万円</strong>で、おおむね10〜15%（年額で約74万〜86万円）低い水準です。ただし<strong>家賃や生活コストが安い</strong>ため、手取りで使えるお金の差はもっと縮まります。下表は各種調査をもとにした目安です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>大阪・関西の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>東京の目安／備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>SE平均年収</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約620万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>東京 約706万円（差 約86万円）</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>情報通信業 平均</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約645万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>東京 約719万円（差 約74万円）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>大手SIer（例）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>700万〜800万円台</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>TIS約803万円・NCS&A約723万円</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス単価</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>常駐は東京比 約10〜20%低め</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>東京案件をリモート受注すれば差は解消</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>「東京より低い」を覆す3つの考え方</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>可処分所得で比較</strong>。大阪は家賃が東京の6〜7割程度。額面の差ほど生活は苦しくない</li>
              <li>② <strong>リモートで東京案件を受ける</strong>。住所は大阪のまま、年収だけ東京水準にできる</li>
              <li>③ <strong>高需要スキルで地域差を埋める</strong>。AWS・Python・Go・上流設計は大阪でも高評価</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec4 女性が働きやすい関西の企業 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が働きやすい関西の企業</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              関西には、産休・育休やリモートの制度が整い、女性が長く働ける企業が複数あります。代表的な企業を、女性視点の働きやすさとあわせて紹介します（制度の実態は配属や時期で変わるため、最終確認はエージェント経由が安全です）。
            </p>
          </div>
          <div className="space-y-5">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-2"><h3 className="text-lg font-bold">さくらインターネット（大阪市・自社開発）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>クラウド基盤</span></div>
              <p className="text-sm text-text-light leading-relaxed">大阪本社の東証プライム上場企業。産休・育休後の時短勤務やリモートワークが整い、女性管理職も多いと社員口コミで評価されています。多様な働き方を掲げる社風で、ライフイベントと両立しながらインフラ・クラウドの専門性を深めたい人に向きます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-2"><h3 className="text-lg font-bold">ラクス（大阪発・SaaS）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>自社開発SaaS</span></div>
              <p className="text-sm text-text-light leading-relaxed">「楽楽精算」「メールディーラー」などBtoB SaaSを展開。プロダクト開発に長く携われ、自社サービスゆえ仕様理解が積み上がるのが魅力。成果が可視化されやすく、時短勤務でも評価されやすい職場です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-2"><h3 className="text-lg font-bold">NCS&A（大阪市・老舗SIer）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>安定・長期就業</span></div>
              <p className="text-sm text-text-light leading-relaxed">平均勤続年数16年超、公共案件中心で経営が安定。腰を据えて長く働きたい、ブランクなくキャリアを継続したい女性に向く堅実な環境です。上流の業務知識が資産になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-2"><h3 className="text-lg font-bold">LINEヤフー／サイバーエージェント系（グランフロント大阪）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>大手Web</span></div>
              <p className="text-sm text-text-light leading-relaxed">うめきたのグランフロント大阪に開発拠点。大手ならではの制度の手厚さとリモート・フレックスの柔軟性があり、モダンな技術スタックに関西で触れたい女性にとって貴重な選択肢です。Cygamesなどゲーム系拠点もあります。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            企業を選ぶ際は、求人票に出ない<strong>育休取得率・復帰率、女性管理職比率、リモートの実運用</strong>を必ず確認しましょう。これらは関西求人に詳しいエージェント経由が最も正確です。
          </p>
        </div>
      </section>

      {/* sec5 未経験STEP */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から大阪で転職するには</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              大阪は未経験可・ポテンシャル採用の母数こそ東京より少ないものの、研修制度のあるSIer・受託企業が一定数あり受け皿は存在します。1日2〜3時間の学習で<strong>半年〜1年</strong>を目安に、次の順序で進めると挫折しにくいです。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "学習言語を1つに絞る", "未経験はPython・PHP・Rubyが学びやすい。あれこれ手を出さず、まず基本文法から1つを深く。"],
              ["STEP2", "データベースとSQLを学ぶ", "大阪に多い業務系・SIer案件はDB設計が中核。テーブル設計とSQL（検索・追加・更新）を丁寧に。"],
              ["STEP3", "ポートフォリオを作る", "ログイン機能やCRUD・APIを備えた小さなWebアプリを公開。未経験採用で最も効く実績になります。"],
              ["STEP4", "関西の勉強会・コミュニティに参加", "梅田・本町・難波で開かれるIT勉強会やもくもく会に参加。人脈から紹介につながることもあります。"],
              ["STEP5", "未経験可×研修ありの求人を狙う", "大阪のSIer・受託は研修が手厚い企業が多い。育休実績や復帰率も同時にチェック。"],
              ["STEP6", "エージェントで関西求人を絞り込む", "IT特化型＋女性特化型を併用。関西に強いアドバイザーに、働き方の条件で求人を絞ってもらう。"],
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

      {/* sec6 リモートで選択肢を広げる */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">リモートで選択肢を広げる（東京案件）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              大阪在住の女性にとって、いま最も効くキャリア戦略が<strong>「住所は大阪、仕事は東京」</strong>です。コロナ禍以降フルリモートが定着し、地方在住でも首都圏と同等の単価を得るケースが急増。2026年時点で主要エージェントのリモート対応案件（フルリモート＋ハイブリッド）比率は<strong>55〜65%程度</strong>を維持しています。
            </p>
            <p>
              特に<strong>React・Next.js・TypeScript・AWS・Python・Go</strong>といったモダンな技術を扱えるエンジニアは、大阪に住みながら月単価<strong>80万〜120万円</strong>の東京案件を獲得しやすい状況です。これは、求人数・単価ともに東京が優位という地域差を、転居せずに埋められることを意味します。
            </p>
            <p>
              育児・介護で転勤や上京が難しい女性ほど、この選択肢の恩恵は大きくなります。地元の人間関係を保ちながら、東京水準の仕事・年収・最新技術にアクセスできるからです。フルリモート求人や首都圏案件に強いエージェントに登録し、「大阪在住・フルリモート可」で求人を絞り込むのが第一歩です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>大阪で働く × 大阪企業</h3>
              <p className="text-sm text-text-light">通勤前提だが地元密着。SIer・受託や大阪本社の自社開発が中心。生活コストの安さと両立しやすさが魅力。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>大阪に住む × 東京企業（リモート）</h3>
              <p className="text-sm text-text-light">モダン技術・高単価・最新案件にアクセス。可処分所得を最大化できる。地方在住女性に特に相性が良い。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>大阪・関西の求人を正しく評価してもらうには、IT特化型と女性特化型の併用が効果的です。関西拠点・リモート案件の両方を見られるアドバイザーを選びましょう。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。大阪オフィスもあり関西求人に強く、フルリモートで東京案件を受ける相談もしやすい。女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、関西IT企業の情報も豊富。年収アップ実績が多く、スピーディーなマッチングと年収交渉力に定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。関西の働きやすい企業を、働き方の条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、関西求人とリモート案件の両方に強いアドバイザーを見つけましょう。</p>
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
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・大阪在住／SIer→東京SaaSのリモート）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">大阪・本町のSIerで業務系開発 / 年収480万円・出社</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">東京SaaS企業のバックエンド（TypeScript/AWS）/ 年収640万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">SIerで培った設計力に、独学でAWSとTypeScriptを上乗せ。IT特化型エージェント経由で東京企業のフルリモート求人に応募し、大阪から一度も引っ越さず年収160万円アップを実現しました。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（20代後半・未経験→大阪の自社開発企業）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">関西の販売職（IT未経験）/ 年収310万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">大阪本社の自社開発企業（PHP/Laravel）/ 年収400万円</p></div>
              </div>
              <p className="text-sm text-text-light">スクールでPHP/Laravelを学びCRUD＋API付きのポートフォリオを公開。梅田の勉強会で得たつながりも活かし、育休実績のある大阪本社の自社開発企業へ。通勤圏内で長く働ける基盤を得ました。</p>
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
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リモートワーク求人ガイド</h3><p className="text-sm text-text-light">大阪在住で東京案件を受ける選択肢</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすい企業の選び方</h3><p className="text-sm text-text-light">育休・復帰率の見極め方</p></a>
            <a href="/articles/sier-industry/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>SIer業界の転職ガイド</h3><p className="text-sm text-text-light">関西に多いSIerの実態と働き方</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">大阪・関西で理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。関西求人もリモート案件も、あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
