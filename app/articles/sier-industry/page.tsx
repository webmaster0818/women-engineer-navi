import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "SIer（システムインテグレーター）への転職ガイド｜女性エンジニアの働き方",
  description:
    "SIer（システムインテグレーター）への転職を目指す女性エンジニア向けガイド。SIerの種類・年収・キャリアパス・働き方を徹底解説。大手SIerとWeb系の違いや女性エンジニアが活躍するポイントも紹介します。",
  alternates: { canonical: "/articles/sier-industry/" },
  openGraph: {
    title: "SIer（システムインテグレーター）への転職ガイド｜女性エンジニアの働き方",
    description:
      "SIerへの転職を目指す女性エンジニア向けガイド。SIerの種類・年収・キャリアパス・働き方を徹底解説。",
    url: "https://women-engineer-navi.pages.dev/articles/sier-industry/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SIer（システムインテグレーター）への転職ガイド｜女性エンジニアの働き方",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer-navi.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer-navi.pages.dev",
  },
  description:
    "SIerへの転職を目指す女性エンジニア向けガイド。SIerの種類・年収・キャリアパス・働き方を徹底解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer-navi.pages.dev/articles/sier-industry/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "SIerとは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SIer（System Integrator）とは、企業や官公庁のシステム開発・運用を請け負うIT企業のことです。顧客の業務課題をヒアリングし、要件定義からシステム設計・開発・テスト・保守運用まで一貫して対応します。NTTデータ・富士通・NEC・日立などの大手企業がSIerの代表例です。",
      },
    },
    {
      "@type": "Question",
      name: "SIerは女性エンジニアが働きやすい環境ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "大手SIerは福利厚生が充実しており、産休育休取得率が高く、女性エンジニアにとって長期的なキャリア形成がしやすい環境です。特にメーカー系・ユーザー系SIerは安定した経営基盤を持ち、時短勤務制度や在宅勤務制度なども整備されています。ただし、プロジェクト単位で客先常駐になる場合もあるため、事前に確認することをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "SIerからWeb系への転職は難しいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SIerで培った設計力・要件定義力・プロジェクト管理スキルはWeb系企業でも高く評価されるため、適切な準備をすれば十分可能です。ただし、モダンな技術スタック（React・Docker・CI/CDなど）の習得が必要で、ポートフォリオの作成もおすすめです。IT特化型エージェントを利用すればSIer出身者向けの求人を紹介してもらえます。",
      },
    },
    {
      "@type": "Question",
      name: "SIerの年収はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SIerの年収は企業の規模やポジションによって大きく異なります。大手SIer（NTTデータ・富士通など）の平均年収は600〜800万円程度で、管理職クラスでは1,000万円以上も珍しくありません。中堅SIerは400〜600万円、独立系SIerは350〜550万円が目安です。",
      },
    },
    {
      "@type": "Question",
      name: "SIerで役立つ資格は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "基本情報技術者試験・応用情報技術者試験はSIerでは必須レベルで求められることが多いです。加えて、プロジェクトマネージャ試験、ITストラテジスト、AWS認定資格、Oracle認定資格なども評価されます。SIerでは資格取得支援制度が充実している企業が多く、資格手当が支給されるケースもあります。",
      },
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://women-engineer-navi.pages.dev",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "転職コラム",
      item: "https://women-engineer-navi.pages.dev/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SIerへの転職ガイド",
      item: "https://women-engineer-navi.pages.dev/articles/sier-industry/",
    },
  ],
};

export default function SierIndustryPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      {/* Hero */}
      <section
        className="relative py-12 md:py-16"
        style={{
          background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "SIerへの転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              業界ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              SIer（システムインテグレーター）への転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性エンジニアの働き方を徹底解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月29日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}
          >
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. SIerの基本知識と業界構造</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. SIerの種類と特徴</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. SIerで女性エンジニアが働くメリット</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. SIerの年収と待遇</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. SIerのキャリアパス</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. SIerで求められるスキル</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. SIerの注意点とデメリット</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. SIer転職に強いエージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* SIerの基本知識 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIerの基本知識と業界構造</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SIer（System Integrator、システムインテグレーター）は、企業や官公庁の情報システムの企画・設計・開発・運用を一括して請け負うIT企業です。日本のIT業界において非常に大きな存在で、IT市場全体の約半分を占めると言われています。
            </p>
            <p>
              SIerの主な業務は、クライアント企業の業務課題をITで解決することです。ヒアリングによる課題抽出、要件定義、基本設計・詳細設計、プログラミング、テスト、本番リリース、保守運用と、システム開発のライフサイクル全体に関わります。
            </p>
            <p>
              2026年現在、SIer業界はDX（デジタルトランスフォーメーション）需要の拡大により、活況を呈しています。官公庁や金融機関のシステム刷新、レガシーシステムのモダナイゼーション、クラウド移行プロジェクトなど、大規模な案件が相次いでいます。
            </p>
            <p>
              SIer業界は多重下請け構造が特徴的で、大手SIer（元請け）が受注したプロジェクトを二次請け・三次請けのSIerに発注する形態が一般的です。転職する際は、自分がどの階層で働くことになるかを確認することが重要です。
            </p>
            <div
              className="rounded-xl border p-6 mt-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>
                SIer業界の基本構造
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>元請けSIer：顧客から直接受注し、プロジェクト全体を管理</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>二次請け：元請けから発注を受け、特定工程の開発を担当</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>三次請け以降：さらに細分化された作業を担当</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>上流工程ほど年収が高く、裁量も大きい傾向</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIerの種類 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIerの種類と特徴</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SIerは大きく4つの種類に分類され、それぞれ特徴や強みが異なります。転職先を選ぶ際には、各タイプの違いを理解した上で、自分のキャリアプランに合った企業を選びましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            {[
              {
                type: "メーカー系SIer",
                color: "#0891b2",
                examples: "富士通・NEC・日立製作所",
                features: ["ハードウェアメーカーのIT部門が独立", "親会社のブランド力と安定経営", "大規模案件が多い", "福利厚生が非常に充実", "平均年収: 600〜800万円"],
              },
              {
                type: "ユーザー系SIer",
                color: "#7c3aed",
                examples: "NTTデータ・SCSK・BIPROGY",
                features: ["親会社（ユーザー企業）のIT部門が独立", "親会社や同グループ企業の案件が安定", "業界特化の知見が蓄積", "働き方改革に積極的", "平均年収: 550〜750万円"],
              },
              {
                type: "独立系SIer",
                color: "#f97066",
                examples: "TIS・大塚商会・オービック",
                features: ["特定の親会社を持たず独立経営", "幅広い業界の案件を受注", "技術選定の自由度が比較的高い", "企業規模による差が大きい", "平均年収: 400〜700万円"],
              },
              {
                type: "コンサル系SIer",
                color: "#10b981",
                examples: "アクセンチュア・アビームコンサルティング",
                features: ["経営コンサルとIT開発を一体提供", "上流工程（企画・戦略）に強い", "グローバル案件も多い", "年収水準が高い", "平均年収: 700〜1,200万円"],
              },
            ].map((sier, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: sier.color }}>{sier.type}</h3>
                <p className="text-xs text-text-light mb-3">代表例: {sier.examples}</p>
                <ul className="text-sm text-text-light space-y-1">
                  {sier.features.map((f, j) => (
                    <li key={j}>- {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 女性エンジニアのメリット */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIerで女性エンジニアが働くメリット</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SIer、特に大手企業は福利厚生が充実しており、女性エンジニアが長期的にキャリアを築ける環境が整っています。Web系企業とは異なる強みがありますので、具体的に見ていきましょう。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              {
                title: "充実した福利厚生と安定性",
                desc: "大手SIerは上場企業が多く、経営基盤が安定しています。住宅手当・家族手当・退職金制度・企業年金など、長期雇用を前提とした福利厚生が充実しており、ライフステージの変化に合わせた柔軟な働き方が可能です。",
              },
              {
                title: "産休育休の取得実績が豊富",
                desc: "大手SIerの産休育休取得率は90%以上の企業がほとんどで、育休からの復帰率も高水準です。育児時短勤務は子供が小学校入学まで利用可能な企業も多く、男性の育休取得も推進されています。",
              },
              {
                title: "体系的なキャリアパス",
                desc: "SIerでは「SE→リーダー→マネージャー→部長」という明確なキャリアパスが用意されています。技術力を磨くスペシャリストコースも整備されている企業が多く、自分の志向に合わせたキャリア選択が可能です。",
              },
              {
                title: "大規模プロジェクトの経験",
                desc: "数十億円規模のシステム開発プロジェクトに携われることはSIerならではの経験です。金融・通信・官公庁などの社会インフラを支えるシステムの開発は、やりがいと専門性の両方を得られます。",
              },
              {
                title: "資格取得支援制度",
                desc: "SIerでは資格取得を積極的に支援する企業が多く、受験費用の補助や合格時の報奨金が支給されます。基本情報技術者から高度情報処理技術者まで、段階的にスキルアップできる環境が整っています。",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>{i + 1}. {item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 年収と待遇 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIerの年収と待遇</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SIerの年収は企業規模とポジションによって大きく異なります。以下に2026年の最新データをもとにした年収目安を示します。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">ポジション</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">大手SIer</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">中堅SIer</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">独立系SIer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["新卒〜3年目", "400〜500万円", "350〜420万円", "300〜400万円"],
                  ["SE（4〜7年目）", "500〜700万円", "420〜550万円", "400〜520万円"],
                  ["リーダー・主任", "650〜850万円", "520〜680万円", "480〜620万円"],
                  ["マネージャー・課長", "800〜1,000万円", "650〜800万円", "580〜750万円"],
                  ["部長以上", "1,000〜1,400万円", "800〜1,000万円", "700〜900万円"],
                ].map(([pos, large, mid, indie], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
                    <td className="px-4 py-3 text-sm font-bold" style={{ borderBottom: "1px solid #d1dce5" }}>{pos}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{large}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{mid}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{indie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              大手SIerは年功序列の要素が残る企業が多いため、若手のうちは年収が低めに感じることもありますが、長期的にはWeb系企業と同等以上の年収に達するケースも多いです。また、退職金や企業年金を含めた生涯賃金では大手SIerが有利になることが多いです。
            </p>
            <p>
              女性エンジニアの場合、時短勤務期間中は年収が下がることがありますが、フルタイム復帰後に元の水準に戻る企業がほとんどです。昇格・昇進においても性別による差を設けない企業が増えており、女性管理職の比率も年々上昇しています。
            </p>
          </div>
        </div>
      </section>

      {/* キャリアパス */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIerのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SIerでのキャリアパスは大きく「マネジメントコース」と「スペシャリストコース」の2つに分かれます。自分の志向や強みに合わせて選択できる体制を整えている企業が増えています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>マネジメントコース</h3>
              <div className="space-y-3">
                {["SE（1〜3年目）: プログラミング・テスト", "SE（4〜6年目）: 詳細設計・基本設計", "リーダー（7〜10年目）: チーム管理・顧客折衝", "マネージャー（10年目〜）: プロジェクト管理・予算管理", "部長・事業部長: 事業戦略・組織マネジメント"].map((step, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-text-light">
                    <span className="inline-block rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: "#0891b2" }}>{i + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>スペシャリストコース</h3>
              <div className="space-y-3">
                {["SE（1〜3年目）: 基礎技術の習得", "シニアSE（4〜7年目）: 専門技術の深堀り", "エキスパート（8〜12年目）: 技術リード・アーキテクト", "プリンシパル（12年目〜）: 技術戦略・全社的な技術指針", "フェロー: 業界をリードする技術者"].map((step, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-text-light">
                    <span className="inline-block rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: "#7c3aed" }}>{i + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              女性エンジニアの場合、産休育休を挟んでもキャリアパスを維持できる制度が整っている企業を選ぶことが重要です。大手SIerでは「育児中のプロジェクトアサイン配慮」や「復帰後のキャッチアッププログラム」を用意している企業もあります。
            </p>
            <p>
              また、SIerでの経験を活かしてコンサルタント・社内SE・フリーランスなどにキャリアチェンジする選択肢もあります。SIerで得た業務知識と技術力は、どのキャリアパスでも強力な武器になります。
            </p>
          </div>
        </div>
      </section>

      {/* 求められるスキル */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIerで求められるスキル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SIerでは技術力に加えて、コミュニケーション力やドキュメント作成力が重視されます。クライアントとの折衝が発生する場面も多いため、総合的なビジネススキルが求められます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>技術スキル</h3>
              <ul className="text-sm text-text-light space-y-2">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span><span>Java / C# / Python / COBOL</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span><span>Oracle / SQL Server / PostgreSQL</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span><span>AWS / Azure / GCPなどクラウド技術</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span><span>Linux / Windows Server</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span><span>ネットワーク・セキュリティの基礎</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>ビジネススキル</h3>
              <ul className="text-sm text-text-light space-y-2">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span><span>要件定義・設計書の作成力</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span><span>顧客折衝・プレゼンテーション</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span><span>プロジェクト管理（WBS・進捗管理）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span><span>品質管理・テスト計画</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span><span>チームビルディング・人材育成</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 注意点とデメリット */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIerの注意点とデメリット</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SIerにはメリットが多い反面、転職前に知っておくべきデメリットや注意点もあります。以下のポイントを理解した上で、自分に合っているかを判断しましょう。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              {
                title: "客先常駐のリスク",
                desc: "SIerの中にはエンジニアをクライアント先に常駐させる形態をとる企業があります。客先常駐の場合、自社のチームとの交流が減り、キャリア形成が難しくなることがあります。転職前に常駐比率を確認しましょう。",
                color: "#f97066",
              },
              {
                title: "技術のレガシー化",
                desc: "大手SIerでは金融や官公庁の基幹系システムを扱うことが多く、COBOLやJavaの古いバージョンなど、レガシーな技術を使い続けるケースがあります。最新技術を学びたい場合は、DX部門やクラウド推進部門を目指すと良いでしょう。",
                color: "#f97066",
              },
              {
                title: "残業が多くなりやすい",
                desc: "プロジェクトの納期前やシステムの本番リリース前には、残業が増加しやすい傾向があります。ただし近年は働き方改革により改善が進んでおり、大手SIerでは月平均残業時間が20時間以下の企業も増えています。",
                color: "#f97066",
              },
              {
                title: "多重下請け構造の影響",
                desc: "二次請け・三次請けのSIerでは、元請けのSIerと比較して年収が低く、作業の裁量も限られることがあります。転職先の企業がどの階層に位置するかを事前に確認することが重要です。",
                color: "#f97066",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめエージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIer転職に強いエージェント</h2>
          <div className="space-y-4 mt-6">
            {[
              {
                name: "レバテックキャリア",
                badge: "IT特化型",
                color: "#0891b2",
                desc: "IT業界特化の転職エージェント。SIerの求人も豊富に取り扱い、大手SIerからの非公開求人も保有。技術力を正当に評価した年収交渉が強み。",
                link: "/reviews/levtech/",
              },
              {
                name: "doda",
                badge: "総合型",
                color: "#7c3aed",
                desc: "業界最大級の求人数を誇る総合転職エージェント。SIer求人は数千件規模で保有しており、大手から中堅まで幅広い選択肢を提供。女性向けの転職支援にも力を入れている。",
                link: "/reviews/doda/",
              },
              {
                name: "リクルートエージェント",
                badge: "最大手",
                color: "#f97066",
                desc: "転職支援実績No.1のエージェント。大手SIerとの太いパイプがあり、非公開求人も多数。幅広い業界知識を持つアドバイザーが、SIer各社の特徴を詳しく教えてくれる。",
                link: "/reviews/recruit-agent/",
              },
            ].map((agent, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: agent.color }}>{agent.badge}</span>
                  <h3 className="text-lg font-bold">{agent.name}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed mb-3">{agent.desc}</p>
                <a href={agent.link} className="text-sm font-bold hover:underline" style={{ color: "#0891b2" }}>{agent.name}の詳細レビューを見る →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 転職成功事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            {[
              {
                profile: "29歳・独立系SIer → 大手メーカー系SIer SE",
                before: "年収380万円（独立系SIer・Java開発4年）",
                after: "年収520万円（メーカー系SIer・クラウド案件）",
                point: "独立系SIerでの開発経験とAWS資格を活かし、大手SIerのクラウド推進部門に転職。年収140万円アップに加え、リモートワーク制度と充実した福利厚生を獲得。",
              },
              {
                profile: "33歳・Web系企業 → ユーザー系SIer PM",
                before: "年収550万円（Web系企業・リードエンジニア）",
                after: "年収650万円（ユーザー系SIer・PM）",
                point: "Web系企業でのマネジメント経験を評価され、SIerのPMポジションに。安定した環境で産休育休を取得し、復帰後もPMとして活躍中。退職金制度もあり長期的な安心感を得た。",
              },
              {
                profile: "26歳・SES企業 → 大手独立系SIer SE",
                before: "年収320万円（SES・テスト工程中心）",
                after: "年収450万円（独立系SIer・上流工程）",
                point: "SESでのテスト経験を基礎として評価されつつ、基本情報技術者資格の取得とポテンシャルで大手独立系に採用。設計工程から携われるようになり、キャリアの幅が大きく広がった。",
              },
            ].map((story, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>事例{i + 1}: {story.profile}</h3>
                <div className="grid gap-4 md:grid-cols-2 mb-3">
                  <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}>
                    <p className="text-xs font-bold mb-1" style={{ color: "#f97066" }}>転職前</p>
                    <p className="text-sm text-text-light">{story.before}</p>
                  </div>
                  <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}>
                    <p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p>
                    <p className="text-sm text-text-light">{story.after}</p>
                  </div>
                </div>
                <p className="text-sm text-text-light leading-relaxed">
                  <span className="font-bold" style={{ color: "#7c3aed" }}>成功のポイント: </span>{story.point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map(
              (faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
                <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d1dce5" }}>
                  <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                    <span><span style={{ color: "#0891b2" }} className="mr-2">Q.</span>{faq.name}</span>
                    <span className="text-text-light group-open:rotate-180 transition-transform">&#9662;</span>
                  </summary>
                  <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                    <p className="pt-4"><span style={{ color: "#f97066" }} className="font-bold mr-2">A.</span>{faq.acceptedAnswer.text}</p>
                  </div>
                </details>
              )
            )}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/web-industry/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>Web系企業への転職ガイド</h3>
              <p className="text-sm text-text-light">Web系企業の特徴と女性が活躍する理由</p>
            </a>
            <a href="/articles/ses-vs-jisha/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>SES vs 自社開発の比較</h3>
              <p className="text-sm text-text-light">SESと自社開発の違いを徹底比較</p>
            </a>
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>おすすめ資格10選</h3>
              <p className="text-sm text-text-light">転職で有利になる資格を紹介</p>
            </a>
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>キャリアパス設計ガイド</h3>
              <p className="text-sm text-text-light">5年後・10年後のキャリア設計</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">SIerへの転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったSIer企業を見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
