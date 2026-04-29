import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ゲーム業界への転職ガイド｜女性エンジニアの需要と年収",
  description:
    "ゲーム業界への転職を目指す女性エンジニア向けガイド。ゲーム業界の職種・年収・求められるスキル・働き方を徹底解説。コンシューマー・ソーシャルゲームの違いや女性エンジニアの需要についても紹介します。",
  alternates: { canonical: "/articles/game-industry/" },
  openGraph: {
    title: "ゲーム業界への転職ガイド｜女性エンジニアの需要と年収",
    description:
      "ゲーム業界への転職を目指す女性エンジニア向けガイド。ゲーム業界の職種・年収・求められるスキルを徹底解説。",
    url: "https://women-engineer-navi.pages.dev/articles/game-industry/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ゲーム業界への転職ガイド｜女性エンジニアの需要と年収",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  description: "ゲーム業界への転職を目指す女性エンジニア向けガイド。ゲーム業界の職種・年収・求められるスキルを徹底解説。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/articles/game-industry/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ゲーム業界は女性エンジニアでも転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ゲーム業界では女性エンジニアの需要が高まっています。特にサーバーサイド開発・インフラ・QA・データ分析などの分野ではゲーム以外のIT経験を活かして転職するケースが増えています。ダイバーシティ推進の観点からも、女性エンジニアを積極採用する企業が増加しています。",
      },
    },
    {
      "@type": "Question",
      name: "ゲーム業界の年収はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ゲーム業界のエンジニア年収は企業規模やポジションにより異なりますが、大手ゲーム会社（任天堂・ソニー・バンダイナムコ等）では平均年収600〜900万円程度です。ソーシャルゲーム系（Cygames・DeNA・グリー等）では500〜800万円が目安です。テックリードクラスでは1,000万円以上も狙えます。",
      },
    },
    {
      "@type": "Question",
      name: "ゲーム開発未経験でも転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "サーバーサイドエンジニア・インフラエンジニア・データエンジニアなどの職種では、ゲーム開発未経験でもWebサービスやシステム開発の経験を活かして転職が可能です。ただし、ゲームクライアント開発（Unity・Unreal Engine）は専門性が高いため、独学での事前準備が推奨されます。",
      },
    },
    {
      "@type": "Question",
      name: "ゲーム業界の働き方は過酷ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "かつては長時間労働のイメージが強かったゲーム業界ですが、近年は大幅に改善されています。大手企業を中心にリモートワーク・フレックスタイム制度の導入が進み、残業時間の管理も厳格化されています。ただし、リリース前やメンテナンス時期は繁忙期となることがあります。企業選びの際に働き方の実態を確認することが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "ゲーム業界に強い転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ゲーム業界の転職にはGeeklyが特におすすめです。IT・Web・ゲーム業界に特化しており、大手ゲーム会社からスタートアップまで幅広い求人を保有しています。レバテックキャリアもゲーム業界の求人を扱っており、技術力を重視した求人提案が受けられます。2〜3社のエージェントを併用するのが効果的です。",
      },
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer-navi.pages.dev" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer-navi.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "ゲーム業界への転職ガイド", item: "https://women-engineer-navi.pages.dev/articles/game-industry/" },
  ],
};

export default function GameIndustryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "ゲーム業界への転職ガイド" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>業界ガイド</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              ゲーム業界への転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">女性エンジニアの需要と年収を徹底解説</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月29日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. ゲーム業界の現状と将来性</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. ゲーム業界の主な職種</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 女性エンジニアの需要と活躍</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. ゲーム業界の年収相場</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 求められるスキルと技術</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. ゲーム業界の働き方</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 異業種からの転職方法</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. ゲーム業界に強いエージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* ゲーム業界の現状 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ゲーム業界の現状と将来性</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              日本のゲーム業界は世界的に見ても非常に存在感が大きく、2026年時点で国内ゲーム市場規模は約2兆円に達しています。コンシューマーゲーム・モバイルゲーム・PCゲーム・クラウドゲーミングと、プラットフォームの多様化が進んでいます。
            </p>
            <p>
              特にモバイルゲーム市場は引き続き成長を続けており、サーバーサイド技術やデータ分析、リアルタイム通信技術など、ゲーム以外のIT分野の技術が求められる場面が増えています。これは異業種からの転職チャンスが広がっていることを意味します。
            </p>
            <p>
              また、AI技術の進化によりNPC（ノンプレイヤーキャラクター）の行動制御やプロシージャル生成、ゲームテストの自動化など、新しい技術領域も生まれています。VR・AR・メタバースといった分野も含め、ゲーム業界のエンジニア需要は今後も拡大が見込まれます。
            </p>
            <p>
              さらに、ゲーム技術の非ゲーム分野への応用（シリアスゲーム・建築ビジュアライゼーション・医療シミュレーション等）も進んでおり、ゲーム業界での経験が他業界でも評価されるようになっています。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>ゲーム業界の市場トレンド</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>モバイルゲーム市場が引き続き拡大中</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>クラウドゲーミング・ストリーミングの普及</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>AI・機械学習のゲームへの活用が加速</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>VR・AR・メタバース関連の開発が拡大</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>サーバーサイド・インフラの高度化に伴うエンジニア需要増</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 主な職種 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ゲーム業界の主な職種</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>ゲーム業界にはエンジニア職だけでも多くの専門職種があります。自分のスキルや経験と照らし合わせて、目指すポジションを検討しましょう。</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            {[
              { title: "クライアントエンジニア", desc: "Unity・Unreal Engineを使ったゲーム本体の開発。グラフィックス・UI・ゲームロジックの実装を担当。C++・C#のスキルが必要。", color: "#0891b2" },
              { title: "サーバーサイドエンジニア", desc: "ゲームのバックエンド開発。ユーザーデータ管理・課金システム・マッチング機能などを担当。Go・Java・Pythonなどを使用。", color: "#7c3aed" },
              { title: "インフラエンジニア", desc: "大規模トラフィックに耐えるインフラ構築。AWS・GCPでの環境構築・監視・チューニングを担当。負荷対策の経験が重要。", color: "#0891b2" },
              { title: "QAエンジニア", desc: "ゲームの品質保証。テスト計画・自動テスト構築・不具合管理を担当。テスト設計スキルとゲームへの理解が求められる。", color: "#7c3aed" },
              { title: "データエンジニア・分析", desc: "ゲーム内の行動データ分析・KPI設計・分析基盤の構築を担当。Python・SQL・BigQuery等のスキルが必要。", color: "#0891b2" },
              { title: "テクニカルアーティスト", desc: "アートとプログラミングの橋渡し役。シェーダー開発・ツール制作・パイプライン構築を担当。DCCツールとプログラミングの両方の知識が必要。", color: "#7c3aed" },
            ].map((job, i) => (
              <div key={i} className="rounded-xl border bg-white p-5" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-base font-bold mb-2" style={{ color: job.color }}>{job.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 女性エンジニアの需要 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアの需要と活躍</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ゲーム業界における女性エンジニアの割合は年々増加しています。2026年現在、大手ゲーム企業のエンジニア職における女性比率は約15〜25%程度で、IT業界全体と比較しても遜色のない水準です。
            </p>
            <p>
              女性ユーザーの増加に伴い、女性の視点を取り入れたゲーム開発の重要性が認識されています。ゲームのUI/UX設計やストーリー制作、キャラクターデザインだけでなく、技術面でも女性エンジニアの視点が求められる場面が増えています。
            </p>
            <p>
              特にサーバーサイドやインフラ、データ分析の分野では、ゲーム開発未経験の女性エンジニアがWebサービスやシステム開発の経験を活かして転職するケースが急増しています。ゲームクライアント開発の専門知識がなくても活躍できる領域が広がっているのです。
            </p>
            <p>
              大手ゲーム会社では、ダイバーシティ推進の一環として女性エンジニアの採用強化や社内環境の整備を進めています。メンタリング制度やWomen in Tech社内コミュニティ、育児支援制度の充実など、具体的な施策を展開する企業が増えています。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>女性エンジニアが活躍しやすいポイント</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>サーバーサイド・インフラなど異業種経験が活きる職種が多い</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>大手企業は福利厚生・育児支援が充実している</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>実力主義の評価で、性別に関係なくスキルが評価される</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>リモートワーク・フレックスの導入が進んでいる</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 年収相場 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ゲーム業界の年収相場</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">職種</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">大手ゲーム会社</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">中堅・ソシャゲ系</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">スタートアップ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["クライアントエンジニア", "500〜900万円", "450〜750万円", "400〜700万円"],
                  ["サーバーサイドエンジニア", "500〜850万円", "450〜700万円", "400〜650万円"],
                  ["インフラエンジニア", "500〜800万円", "450〜700万円", "400〜650万円"],
                  ["テックリード", "800〜1,200万円", "700〜1,000万円", "650〜900万円"],
                  ["QAエンジニア", "400〜650万円", "350〜550万円", "350〜500万円"],
                  ["データエンジニア", "550〜900万円", "450〜750万円", "400〜700万円"],
                ].map(([job, large, mid, startup], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
                    <td className="px-4 py-3 text-sm font-bold" style={{ borderBottom: "1px solid #d1dce5" }}>{job}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{large}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{mid}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{startup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              ゲーム業界の年収は、ヒットタイトルのボーナスで大幅にアップするケースがあるのが特徴です。また、グローバルに展開する大手企業では、海外拠点でのキャリアを通じてさらに高い報酬を得る機会もあります。
            </p>
            <p>
              転職時の年収交渉では、前職の経験やスキルレベルに加え、ゲーム業界特有の専門知識（ゲームエンジン・リアルタイム通信等）の有無が年収に大きく影響します。IT特化型エージェントを活用することで、適正な年収での転職が実現しやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* 求められるスキル */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求められるスキルと技術</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ゲーム業界で求められるスキルは職種によって異なりますが、共通して重視されるのは「パフォーマンスへの意識」と「チーム開発力」です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>ゲーム特有のスキル</h3>
              <ul className="text-sm text-text-light space-y-2">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span><span>Unity（C#）/ Unreal Engine（C++）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span><span>リアルタイム通信（WebSocket・gRPC）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span><span>3Dグラフィックス・シェーダープログラミング</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span><span>物理エンジン・衝突判定</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span><span>メモリ管理・パフォーマンス最適化</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>汎用的なITスキル</h3>
              <ul className="text-sm text-text-light space-y-2">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span><span>Go / Python / Java（サーバーサイド）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span><span>AWS / GCPでのインフラ構築</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span><span>MySQL / Redis / DynamoDB</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span><span>CI/CD・Docker・Kubernetes</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span><span>データ分析（BigQuery・Python）</span></li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              右側の汎用的なITスキルを持っていれば、ゲーム開発未経験でもサーバーサイドやインフラのポジションで転職が可能です。入社後にゲーム特有の知識を身につけていく形でキャリアを構築できます。
            </p>
          </div>
        </div>
      </section>

      {/* 働き方 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ゲーム業界の働き方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ゲーム業界の働き方は、かつての「デスマーチ」のイメージから大きく変化しています。2026年現在、大手ゲーム企業の多くは働き方改革に積極的に取り組んでおり、エンジニアにとって働きやすい環境が整備されています。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { title: "リモートワークの普及", desc: "コロナ禍以降、ゲーム業界でもリモートワークが定着しました。完全フルリモートの企業は少ないですが、週2〜3日の在宅勤務を認める企業がほとんどです。インフラやサーバーサイドのエンジニアは比較的リモートワークがしやすい傾向にあります。" },
              { title: "フレックスタイム制度", desc: "コアタイムなしのスーパーフレックスを導入している企業も増えています。朝型・夜型を問わず自分のリズムで働けるため、育児中のエンジニアにとっても柔軟な勤務が可能です。" },
              { title: "繁忙期と閑散期", desc: "ゲームのリリース前やメンテナンス時期は繁忙期になりやすいですが、それ以外の期間は比較的落ち着いています。事前にスケジュールが分かるため、計画的にワークライフバランスを保つことが可能です。" },
              { title: "クリエイティブな環境", desc: "ゲーム会社のオフィスにはゲームコーナーや休憩スペースが充実しており、クリエイティブな雰囲気が特徴です。社内で最新ゲームを試遊できる環境があり、エンターテインメント好きにはたまらない職場です。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 異業種からの転職 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">異業種からの転職方法</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Web系やSIerなど、ゲーム以外のIT業界からゲーム業界への転職は十分可能です。特にサーバーサイドやインフラのポジションでは、ゲーム開発未経験者の採用が積極的に行われています。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { step: "STEP 1", title: "自分のスキルと目標を整理", desc: "現在のスキルセットを棚卸しし、ゲーム業界のどの職種にマッチするかを検討します。サーバーサイド・インフラ・データ分析の経験はそのまま活かせます。クライアント開発を目指す場合はUnity/Unrealの学習が必要です。" },
              { step: "STEP 2", title: "ゲーム業界の知識を習得", desc: "転職先のゲームを実際にプレイし、業界のトレンドを把握しましょう。技術カンファレンス（CEDEC等）の資料を読むと、ゲーム開発特有の課題と技術が理解できます。" },
              { step: "STEP 3", title: "ポートフォリオの準備", desc: "サーバーサイド志望ならAPI設計やインフラ構築の実績をGitHubで公開します。クライアント志望ならUnityで簡単なゲームを作り公開すると効果的です。技術ブログの執筆もアピールになります。" },
              { step: "STEP 4", title: "ゲーム業界に強いエージェントに登録", desc: "GeeklyやレバテックキャリアなどIT・ゲームに強いエージェントに登録します。ゲーム業界の求人動向や選考のポイントをアドバイスしてもらい、効率的に転職活動を進めましょう。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>{item.step}</span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめエージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ゲーム業界に強いエージェント</h2>
          <div className="space-y-4 mt-4">
            {[
              { name: "Geekly", badge: "ゲーム業界特化", color: "#7c3aed", desc: "IT・Web・ゲーム業界特化の転職エージェント。大手ゲーム会社からインディーゲームスタジオまで幅広い求人を保有。書類選考通過率3.4倍の実績。", link: "/reviews/geekly/" },
              { name: "レバテックキャリア", badge: "IT特化型", color: "#0891b2", desc: "IT業界全般に強いエージェントで、ゲーム業界の求人も豊富。技術力を重視した求人提案が特徴で、年収交渉にも強い。", link: "/reviews/levtech/" },
              { name: "Green", badge: "スカウト型", color: "#10b981", desc: "ゲーム会社からの直接スカウトが届くプラットフォーム。カジュアル面談から始められるため、まずは業界の雰囲気を知りたい方におすすめ。", link: "/reviews/green/" },
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
              { profile: "28歳・Web系バックエンド → 大手ゲーム会社サーバーサイドエンジニア", before: "年収450万円（Web系・Go/Python開発3年）", after: "年収600万円（大手ゲーム会社・サーバーサイド）", point: "Web系でのGo言語経験とマイクロサービス設計の実績が高く評価された。ゲーム開発未経験だったが、大規模トラフィック処理の経験が決め手に。フレックス制度を活用し、趣味のゲーム開発も継続中。" },
              { profile: "32歳・SIerインフラ → ソーシャルゲーム企業インフラエンジニア", before: "年収500万円（SIer・AWS/Azure運用5年）", after: "年収650万円（ソシャゲ企業・インフラリード）", point: "SIerでのAWS運用経験を活かし、大規模ゲームのインフラチームにジョイン。リリース時の負荷対策やコスト最適化で成果を出し、1年でリードに昇格。リモートワーク中心の働き方で育児との両立も実現。" },
              { profile: "26歳・QAテスター → ゲーム会社QAエンジニア", before: "年収350万円（Web系・QA2年）", after: "年収480万円（ゲーム会社・QAエンジニア）", point: "Web系でのテスト自動化経験をゲーム業界に持ち込み、テスト効率化に貢献。Seleniumの経験を応用してゲームのUIテスト自動化を推進。ゲーム好きという動機も面接で好印象だった。" },
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
                <p className="text-sm text-text-light leading-relaxed"><span className="font-bold" style={{ color: "#7c3aed" }}>成功のポイント: </span>{story.point}</p>
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
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d1dce5" }}>
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                  <span><span style={{ color: "#0891b2" }} className="mr-2">Q.</span>{faq.name}</span>
                  <span className="text-text-light group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                  <p className="pt-4"><span style={{ color: "#f97066" }} className="font-bold mr-2">A.</span>{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* コンシューマーとソシャゲの違い */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">コンシューマーとソーシャルゲームの違い</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ゲーム業界への転職を考える際、コンシューマーゲーム（家庭用ゲーム）とソーシャルゲーム（モバイルゲーム）の違いを理解しておくことが重要です。開発規模・期間・技術スタック・働き方のすべてが異なります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">比較項目</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">コンシューマーゲーム</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">ソーシャルゲーム</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["開発期間", "2〜5年の長期プロジェクト", "6ヶ月〜1年程度"],
                  ["チーム規模", "数十〜数百人の大規模チーム", "10〜30人程度の小〜中規模"],
                  ["主な技術", "C++・Unreal Engine・独自エンジン", "Unity・Go・Python・サーバーサイド"],
                  ["リリース後", "DLC・アップデート対応", "運営・イベント開発が継続"],
                  ["収益モデル", "パッケージ販売・DLC課金", "基本無料・ガチャ課金"],
                  ["働き方", "出社中心が多い", "リモートワーク対応が進んでいる"],
                  ["求められる力", "最適化・グラフィックス技術", "サーバーサイド・データ分析"],
                ].map(([item, console_g, social], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
                    <td className="px-4 py-3 text-sm font-bold" style={{ borderBottom: "1px solid #d1dce5", color: "#0891b2" }}>{item}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{console_g}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{social}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              異業種からの転職の場合、サーバーサイドやインフラの経験が活かしやすいソーシャルゲーム企業への転職がスムーズです。コンシューマーゲーム開発はC++やグラフィックスの専門知識が必要なため、ゲーム業界内でのキャリアアップとして目指すのが現実的です。
            </p>
            <p>
              女性エンジニアの視点では、ソーシャルゲーム企業の方がリモートワークやフレックス制度が充実している傾向があり、育児との両立がしやすい環境です。ただし、コンシューマーゲームの大手企業（任天堂・ソニー等）は福利厚生が非常に充実しているため、長期的なキャリアで見ると魅力的な選択肢です。
            </p>
          </div>
        </div>
      </section>

      {/* ゲーム業界で使える資格 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ゲーム業界で評価される資格・スキル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ゲーム業界では資格よりも実務経験やポートフォリオが重視されますが、一部の資格やスキル認定が評価されることもあります。特に異業種からの転職では、スキルの客観的な証明として活用できます。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            {[
              { name: "Unity認定資格", desc: "Unityの公式認定資格。Associate・Professional・Expertの3段階があり、クライアントエンジニア志望者に有利。" },
              { name: "AWS認定資格", desc: "ゲームのインフラにAWSを利用する企業が多く、SAA資格はインフラエンジニア志望者に必須レベル。" },
              { name: "基本情報技術者試験", desc: "IT全般の基礎知識を証明する国家資格。未経験からゲーム業界を目指す場合のスキル証明に有効。" },
              { name: "TOEIC 700点以上", desc: "グローバル展開する大手ゲーム企業では英語力が重視される。海外チームとの連携やドキュメント読解に必要。" },
            ].map((cert, i) => (
              <div key={i} className="rounded-xl border bg-white p-5" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-base font-bold mb-2" style={{ color: "#0891b2" }}>{cert.name}</h3>
                <p className="text-sm text-text-light leading-relaxed">{cert.desc}</p>
              </div>
            ))}
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
            <a href="/articles/coding-test/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>コーディングテスト対策</h3>
              <p className="text-sm text-text-light">頻出問題と解き方ガイド</p>
            </a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>年収ガイド</h3>
              <p className="text-sm text-text-light">女性エンジニアの平均年収と年収アップ方法</p>
            </a>
            <a href="/articles/technical-interview/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>技術面接対策</h3>
              <p className="text-sm text-text-light">コーディングテスト・設計課題の準備法</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">ゲーム業界への転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">ゲーム業界に強いエージェントに無料相談して、理想のポジションを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
