import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Web系企業への転職ガイド｜女性エンジニアが活躍する理由",
  description:
    "Web系企業への転職を目指す女性エンジニア向けガイド。Web系企業の特徴・年収・働き方・求められるスキルを徹底解説。自社開発・受託・SESの違いや、女性が活躍しやすい理由も紹介します。",
  alternates: { canonical: "/articles/web-industry/" },
  openGraph: {
    title: "Web系企業への転職ガイド｜女性エンジニアが活躍する理由",
    description:
      "Web系企業への転職を目指す女性エンジニア向けガイド。Web系企業の特徴・年収・働き方・求められるスキルを徹底解説。",
    url: "https://women-engineer-navi.pages.dev/articles/web-industry/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Web系企業への転職ガイド｜女性エンジニアが活躍する理由",
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
    "Web系企業への転職を目指す女性エンジニア向けガイド。Web系企業の特徴・年収・働き方・求められるスキルを徹底解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer-navi.pages.dev/articles/web-industry/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Web系企業とSIerの違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web系企業は自社サービスの開発・運営を行う企業が多く、アジャイル開発やモダンな技術スタックを採用する傾向があります。一方SIerはクライアントからの受託開発が中心で、ウォーターフォール型の開発が多いです。働き方もWeb系は私服勤務・フレックスが一般的で、自由度が高い傾向にあります。",
      },
    },
    {
      "@type": "Question",
      name: "Web系企業に転職するために必要なスキルは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "フロントエンドならReact・Vue.js・TypeScript、バックエンドならGo・Python・Node.js・Ruby on Railsなどのモダンな技術が求められます。加えてGit・Docker・CI/CDなどの開発ツールの経験、アジャイル開発の理解も重要です。ポートフォリオやGitHubでのアウトプットがあると選考で有利になります。",
      },
    },
    {
      "@type": "Question",
      name: "Web系企業は女性エンジニアが働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、Web系企業は女性エンジニアにとって働きやすい環境が整っている傾向があります。リモートワークやフレックスタイム制度が充実しており、育児との両立がしやすいです。また、成果主義の評価制度を採用する企業が多く、性別に関係なくスキルで評価される文化があります。",
      },
    },
    {
      "@type": "Question",
      name: "SIerからWeb系企業への転職は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "十分可能です。SIerで培ったシステム設計力・要件定義力・プロジェクト管理スキルはWeb系企業でも高く評価されます。ただし、モダンな技術スタックの習得が必要なため、転職前にReactやDockerなどを独学で学んでおくと有利です。IT特化型エージェントを活用すれば、SIer出身者歓迎の求人を紹介してもらえます。",
      },
    },
    {
      "@type": "Question",
      name: "Web系企業の年収はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web系企業のエンジニア年収は経験年数やスキルにより幅がありますが、中央値は約500〜700万円程度です。メガベンチャーやテック企業では800万円以上も珍しくありません。スタートアップではストックオプションが付くケースもあります。SIerと比較するとベース給はやや低い場合もありますが、福利厚生やリモート環境を含めた総合的な条件で判断することが大切です。",
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
      name: "Web系企業への転職ガイド",
      item: "https://women-engineer-navi.pages.dev/articles/web-industry/",
    },
  ],
};

export default function WebIndustryPage() {
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
              { label: "Web系企業への転職ガイド" },
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
              Web系企業への転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性エンジニアが活躍する理由を徹底解説
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
              <li>
                <a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>
                  1. Web系企業とは？基本的な特徴
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>
                  2. Web系企業の種類と分類
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>
                  3. Web系企業で女性エンジニアが活躍する理由
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>
                  4. Web系企業の年収相場
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>
                  5. 求められるスキルと技術スタック
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>
                  6. Web系企業の働き方・福利厚生
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>
                  7. SIerからWeb系への転職ロードマップ
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>
                  8. Web系転職に強いエージェント
                </a>
              </li>
              <li>
                <a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>
                  9. 転職成功事例
                </a>
              </li>
              <li>
                <a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>
                  10. よくある質問
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Web系企業とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Web系企業とは？基本的な特徴</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Web系企業とは、インターネットを通じてサービスやプロダクトを提供する企業の総称です。EC・SNS・SaaS・メディア・フィンテックなど、Webサービスの開発・運営を主な事業とする企業が該当します。自社サービスを持つ企業が多く、開発から運用まで一貫して携われるのが大きな魅力です。
            </p>
            <p>
              Web系企業の最大の特徴は、技術やイノベーションに対するオープンな姿勢です。新しい技術を積極的に取り入れ、エンジニアが技術選定に関与できる文化が根付いています。2026年現在、AI・クラウドネイティブ・マイクロサービスなど最先端の技術に触れられる環境は、エンジニアとしての成長を加速させます。
            </p>
            <p>
              また、Web系企業はSIerと比較して組織がフラットな傾向があり、エンジニアの裁量が大きいのも特徴です。コードレビュー文化やテスト自動化、CI/CDパイプラインの整備など、モダンな開発プラクティスが日常的に実践されています。女性エンジニアにとっても、実力主義の評価制度は大きなメリットです。
            </p>
            <p>
              さらに、リモートワークやフレックスタイム制度を早期に導入した企業が多く、柔軟な働き方ができる点も見逃せません。育児や介護との両立を考える女性エンジニアにとって、Web系企業は非常に魅力的な選択肢となっています。
            </p>
            <div
              className="rounded-xl border p-6 mt-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>
                Web系企業の主な特徴
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>自社サービスの開発・運営が中心で、ユーザーの反応をダイレクトに感じられる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>モダンな技術スタック（React・Go・Kubernetesなど）を採用する傾向</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>アジャイル開発・スクラム手法が主流で、開発サイクルが速い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>リモートワーク・フレックスタイム制度が充実している企業が多い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>成果主義の評価制度で、性別に関係なくスキルで評価される</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Web系企業の種類 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Web系企業の種類と分類</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              一口にWeb系企業といっても、事業モデルや規模によって大きく特徴が異なります。転職先を選ぶ際には、自分が求める環境と企業タイプのマッチングが重要です。ここでは主な3つのカテゴリに分けて解説します。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                メガベンチャー
              </h3>
              <p className="text-sm text-text-light mb-3">
                サイバーエージェント・楽天・Yahoo!・メルカリ・LINEなど、大規模なWebサービスを展開する企業です。
              </p>
              <ul className="text-sm text-text-light space-y-1">
                <li>- 安定した経営基盤と福利厚生</li>
                <li>- 大規模サービスの開発経験が積める</li>
                <li>- 年収600〜1,000万円以上も</li>
                <li>- 産休育休の取得実績が豊富</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                成長スタートアップ
              </h3>
              <p className="text-sm text-text-light mb-3">
                シリーズA〜C程度の資金調達済みで急成長中のスタートアップ企業です。SaaS・フィンテック・ヘルステックなど分野は多様です。
              </p>
              <ul className="text-sm text-text-light space-y-1">
                <li>- 少人数で裁量権が大きい</li>
                <li>- 最新技術を積極採用</li>
                <li>- ストックオプションの付与も</li>
                <li>- リモートフルフレックスが多い</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#f97066" }}>
                Web受託開発
              </h3>
              <p className="text-sm text-text-light mb-3">
                クライアントのWebサービスやアプリの受託開発を行う企業です。多様なプロジェクトに携われるのが特徴です。
              </p>
              <ul className="text-sm text-text-light space-y-1">
                <li>- 様々な業界の開発経験が積める</li>
                <li>- 技術選定の幅が広い</li>
                <li>- プロジェクト単位で業務が変わる</li>
                <li>- チーム開発のスキルが磨ける</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              メガベンチャーは安定性と規模が魅力ですが、組織が大きい分、意思決定のスピードはスタートアップに劣ることがあります。一方、スタートアップは成長機会が豊富ですが、福利厚生や経営の安定性では劣る場合があります。Web受託開発は様々な技術に触れられる反面、自社プロダクトへの愛着は持ちにくいかもしれません。
            </p>
            <p>
              女性エンジニアとして長期的なキャリアを考える場合、産休育休の取得実績や復帰後のポジション保証、時短勤務制度の有無なども確認しておきましょう。メガベンチャーはこれらの制度が整っている企業が多い傾向にあります。
            </p>
          </div>
        </div>
      </section>

      {/* 女性が活躍する理由 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Web系企業で女性エンジニアが活躍する理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Web系企業は、従来のIT企業と比較して女性エンジニアが活躍しやすい環境が整っています。その理由は単に制度面だけではなく、組織文化や評価制度にも関係しています。具体的な理由を見ていきましょう。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              {
                title: "リモートワーク・フレックスの充実",
                desc: "Web系企業の約70%がリモートワークを導入しており、フルリモートの企業も珍しくありません。フレックスタイム制度と組み合わせることで、育児や家事との両立が格段にしやすくなります。通勤時間がなくなることで、1日あたり1〜2時間の余裕が生まれるケースが多いです。",
              },
              {
                title: "実力主義の評価制度",
                desc: "Web系企業では年功序列ではなく、スキルと成果で評価される文化が根付いています。性別や年齢に関係なく、技術力やプロダクトへの貢献度で昇進・昇給が決まるため、女性エンジニアにとって公正な環境です。コードの品質やチームへの貢献が可視化されやすい開発体制も特徴です。",
              },
              {
                title: "ダイバーシティの推進",
                desc: "多くのWeb系企業がダイバーシティ＆インクルージョンを経営方針として掲げており、女性エンジニアの採用・育成に積極的です。メンタリングプログラムや社内コミュニティの整備、女性エンジニア向けイベントの開催など、具体的な施策を展開する企業が増えています。",
              },
              {
                title: "副業・兼業OKの企業が多い",
                desc: "Web系企業は副業を認めている企業が多く、本業以外でのスキルアップや収入増加が可能です。フリーランスとしての案件獲得やOSS活動、技術ブログの執筆など、エンジニアとしての市場価値を高める活動がしやすい環境です。",
              },
              {
                title: "スキルアップ支援が充実",
                desc: "カンファレンス参加費の補助、書籍購入費の支給、オンライン学習プラットフォームのライセンス提供など、エンジニアのスキルアップを支援する制度が充実しています。技術勉強会やハッカソンを社内で開催する企業も多く、常に最新技術をキャッチアップできる環境があります。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border bg-white p-6"
                style={{ borderColor: "#d1dce5" }}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>
                  {i + 1}. {item.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              これらの要因が重なることで、Web系企業は女性エンジニアが長期的にキャリアを築きやすい環境となっています。実際に、メガベンチャーでは女性エンジニア比率が20〜30%に達する企業も出てきており、ロールモデルとなる先輩女性エンジニアも増えています。
            </p>
          </div>
        </div>
      </section>

      {/* 年収相場 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Web系企業の年収相場</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Web系企業のエンジニア年収は、経験年数・スキル・企業規模によって大きく異なります。2026年の最新データをもとに、職種別・経験年数別の年収相場を解説します。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">経験年数</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">フロントエンド</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">バックエンド</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">フルスタック</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1〜3年", "350〜500万円", "400〜550万円", "400〜550万円"],
                  ["3〜5年", "500〜700万円", "550〜750万円", "550〜750万円"],
                  ["5〜8年", "650〜900万円", "700〜950万円", "700〜1,000万円"],
                  ["8年以上", "800〜1,200万円", "850〜1,300万円", "900〜1,400万円"],
                ].map(([exp, fe, be, fs], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : ""}
                    style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}
                  >
                    <td className="px-4 py-3 text-sm font-bold" style={{ borderBottom: "1px solid #d1dce5" }}>
                      {exp}
                    </td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>
                      {fe}
                    </td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>
                      {be}
                    </td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>
                      {fs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              上記はあくまで目安であり、特にメガベンチャーやテック系上場企業ではこれ以上の年収も珍しくありません。年収アップのためには、技術力の向上に加えて、リーダー経験やアーキテクチャ設計の実績が重要です。
            </p>
            <p>
              Web系企業では年収以外にも、ストックオプション・RSU（制限付き株式ユニット）・各種手当など、給与以外の報酬が充実しているケースがあります。転職時にはこれらの総合的な条件を比較することをおすすめします。
            </p>
            <p>
              女性エンジニアの場合、時短勤務を利用する場合の年収への影響も事前に確認しておきましょう。フルタイム復帰後の年収回復プランがある企業を選ぶことで、長期的なキャリアにおける年収ダウンを最小限に抑えられます。
            </p>
          </div>
        </div>
      </section>

      {/* 求められるスキル */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求められるスキルと技術スタック</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Web系企業で求められるスキルは、ポジションによって異なりますが、共通して重視されるのは「モダンな技術スタックの実務経験」と「自走力」です。2026年現在のトレンドを踏まえた必須スキルを整理します。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                フロントエンドエンジニア
              </h3>
              <ul className="text-sm text-text-light space-y-2">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span>
                  <span>React / Next.js / Vue.js / Nuxt.js</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span>
                  <span>TypeScript（必須レベル）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span>
                  <span>HTML/CSS / Tailwind CSS / CSS-in-JS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span>
                  <span>テスト（Jest・Testing Library・Playwright）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span>
                  <span>パフォーマンス最適化・Core Web Vitals</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                バックエンドエンジニア
              </h3>
              <ul className="text-sm text-text-light space-y-2">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span>
                  <span>Go / Python / Ruby / Node.js / Java</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span>
                  <span>REST API / GraphQL設計</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span>
                  <span>RDB（MySQL・PostgreSQL）/ NoSQL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span>
                  <span>Docker / Kubernetes / マイクロサービス</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span>
                  <span>AWS / GCP / Azure（いずれか）</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="rounded-xl border p-6 mt-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>
              共通で求められるスキル
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                  &#10003;
                </span>
                <span>Git / GitHub を使ったチーム開発経験</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                  &#10003;
                </span>
                <span>CI/CD パイプラインの構築・運用経験</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                  &#10003;
                </span>
                <span>アジャイル開発・スクラムの実践経験</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                  &#10003;
                </span>
                <span>コードレビューの経験（レビュアー・被レビュアー両方）</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                  &#10003;
                </span>
                <span>技術的な課題の自走的な解決力</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              すべてのスキルを最初から持っている必要はありません。まずは自分が目指すポジションに必要な技術を優先的に学び、入社後にスキルの幅を広げていく戦略が効果的です。ポートフォリオやGitHubでの実績を示せると、選考でも大きなアドバンテージになります。
            </p>
          </div>
        </div>
      </section>

      {/* 働き方・福利厚生 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Web系企業の働き方・福利厚生</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Web系企業は従来のIT企業と比較して、柔軟で先進的な働き方を提供しています。特に女性エンジニアにとって重要な制度面を中心に、Web系企業の働き方を解説します。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">項目</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">Web系企業</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">従来型SIer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["リモートワーク", "フルリモート〜ハイブリッド", "週1〜2回程度が中心"],
                  ["勤務時間", "フレックスタイム制が主流", "固定勤務が多い"],
                  ["服装", "私服・カジュアル", "ビジネスカジュアル〜スーツ"],
                  ["副業", "許可する企業が多い", "原則禁止が多い"],
                  ["産休育休", "取得率高く復帰率も高い", "制度はあるが実績に差"],
                  ["時短勤務", "柔軟に対応する企業が多い", "制度はあるが利用しにくい場合も"],
                  ["スキルアップ支援", "書籍購入・カンファ参加費補助", "資格取得支援が中心"],
                ].map(([item, web, sier], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : ""}
                    style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}
                  >
                    <td className="px-4 py-3 text-sm font-bold" style={{ borderBottom: "1px solid #d1dce5", color: "#0891b2" }}>
                      {item}
                    </td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>
                      {web}
                    </td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>
                      {sier}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              特にメガベンチャーでは、育児支援として企業内保育所の設置やベビーシッター補助、病児保育サポートなどを提供している企業もあります。これらの福利厚生は転職エージェント経由で詳しく確認できるため、求人票だけでは分からない実態を把握するためにもエージェントの活用をおすすめします。
            </p>
            <p>
              また、Web系企業特有の福利厚生として、最新スペックのPC貸与、デュアルモニター環境の提供、リモートワーク手当、コワーキングスペース利用補助などがあります。エンジニアが快適に開発に集中できる環境が整備されているのが特徴です。
            </p>
          </div>
        </div>
      </section>

      {/* SIerからの転職ロードマップ */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIerからWeb系への転職ロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SIerからWeb系企業への転職は、多くのエンジニアが検討するキャリアチェンジです。計画的に準備すれば、SIerでの経験を活かしながらWeb系でのキャリアをスタートできます。以下のステップで進めていきましょう。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              {
                step: "STEP 1",
                title: "自己分析と目標設定（1〜2週間）",
                desc: "現在のスキルを棚卸しし、Web系で活かせる強みを整理します。SIerでの設計経験・チームマネジメント・顧客折衝力は強いアピールポイントになります。目指すポジション（フロントエンド・バックエンド・フルスタック）を決めましょう。",
              },
              {
                step: "STEP 2",
                title: "技術スキルの習得（1〜3ヶ月）",
                desc: "React・TypeScriptなどのモダンフロントエンド、またはGo・Pythonなどのバックエンド技術を学びます。UdemyやProgateで基礎を固め、実際にアプリケーションを作ってみることが重要です。DockerやGitHub Actionsなどの開発ツールにも慣れておきましょう。",
              },
              {
                step: "STEP 3",
                title: "ポートフォリオ作成（2〜4週間）",
                desc: "学んだ技術を使って実際のWebアプリケーションを開発し、GitHubに公開します。READMEに技術選定の理由や設計思想を記載すると、技術力のアピールになります。デプロイまで行い、実際に動くものを見せられるようにしましょう。",
              },
              {
                step: "STEP 4",
                title: "転職エージェント登録・求人選定（1〜2週間）",
                desc: "レバテックキャリアやGeeklyなどIT特化型エージェントに登録し、Web系企業の求人を紹介してもらいます。SIer出身者歓迎の求人も多く、未経験のWeb系技術でもポテンシャル採用を行う企業があります。複数のエージェントを並行利用するのがおすすめです。",
              },
              {
                step: "STEP 5",
                title: "選考・内定（1〜2ヶ月）",
                desc: "コーディングテストや技術面接の対策を行い、選考に臨みます。SIerでの経験とWeb系への熱意をバランスよく伝えることがポイントです。年収交渉はエージェントに任せることで、客観的な市場価値に基づいた条件を引き出せます。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border bg-white p-6"
                style={{ borderColor: "#d1dce5" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: "#0891b2" }}
                  >
                    {item.step}
                  </span>
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
          <h2 className="text-2xl font-bold mb-6">Web系転職に強いエージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Web系企業への転職を成功させるには、Web系の求人に強いIT特化型エージェントの活用が不可欠です。Web系企業の内部情報や選考のポイントを熟知したアドバイザーのサポートを受けることで、転職成功率が大幅に向上します。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              {
                name: "レバテックキャリア",
                badge: "IT特化型",
                color: "#0891b2",
                desc: "Web系・自社開発企業の求人が豊富。技術に精通したアドバイザーがスキルを正当に評価し、最適な求人を提案。年収70万円以上アップの実績多数。",
                link: "/reviews/levtech/",
              },
              {
                name: "Geekly",
                badge: "IT・Web特化",
                color: "#7c3aed",
                desc: "Web系・ゲーム業界に強みを持つIT特化型エージェント。書類選考通過率3.4倍の実績を持ち、レジュメ作成のサポートが手厚い。",
                link: "/reviews/geekly/",
              },
              {
                name: "Green",
                badge: "IT企業直結",
                color: "#10b981",
                desc: "IT・Web企業からの直接スカウトが届く転職プラットフォーム。カジュアル面談から始められるため、気軽にWeb系企業の雰囲気を知れる。",
                link: "/reviews/green/",
              },
            ].map((agent, i) => (
              <div
                key={i}
                className="rounded-xl border bg-white p-6"
                style={{ borderColor: "#d1dce5" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: agent.color }}
                  >
                    {agent.badge}
                  </span>
                  <h3 className="text-lg font-bold">{agent.name}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed mb-3">{agent.desc}</p>
                <a
                  href={agent.link}
                  className="text-sm font-bold hover:underline"
                  style={{ color: "#0891b2" }}
                >
                  {agent.name}の詳細レビューを見る →
                </a>
              </div>
            ))}
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              Web系企業への転職では、複数のエージェントを並行利用するのが効果的です。各エージェントが持つ独自の求人にアクセスでき、より多くの選択肢の中から最適な転職先を見つけられます。2〜3社の併用がおすすめです。
            </p>
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
                profile: "30歳・SIer SE → メガベンチャー バックエンドエンジニア",
                before: "年収450万円（SIer・Java開発5年）",
                after: "年収650万円（自社Webサービス・Go言語）",
                point: "SIerでの設計経験を評価され、ポテンシャル採用。独学でGoを習得し、ポートフォリオを作成したことが決め手に。フルリモートで育児との両立も実現。",
              },
              {
                profile: "28歳・受託開発 → SaaSスタートアップ フロントエンドエンジニア",
                before: "年収380万円（受託開発・jQuery/PHP）",
                after: "年収550万円（自社SaaS・React/TypeScript）",
                point: "受託開発で培った顧客視点でのUI設計力が評価された。ReactとTypeScriptは独学で3ヶ月学習。ストックオプションも付与され、将来的な報酬アップにも期待。",
              },
              {
                profile: "35歳・SIer PM → Eコマース テックリード",
                before: "年収600万円（SIer・PM歴3年）",
                after: "年収800万円（EC企業・テックリード）",
                point: "PM経験を活かしてテックリードポジションに。技術選定やチームビルディングの実績がフルスタックの技術力と合わせて高く評価された。フレックス制度を活用し、子供の送迎にも対応。",
              },
            ].map((story, i) => (
              <div
                key={i}
                className="rounded-xl border bg-white p-6"
                style={{ borderColor: "#d1dce5" }}
              >
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                  事例{i + 1}: {story.profile}
                </h3>
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
                  <span className="font-bold" style={{ color: "#7c3aed" }}>成功のポイント: </span>
                  {story.point}
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
              (
                faq: { name: string; acceptedAnswer: { text: string } },
                i: number
              ) => (
                <details
                  key={i}
                  className="group rounded-xl bg-white"
                  style={{ border: "1px solid #d1dce5" }}
                >
                  <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                    <span>
                      <span style={{ color: "#0891b2" }} className="mr-2">
                        Q.
                      </span>
                      {faq.name}
                    </span>
                    <span className="text-text-light group-open:rotate-180 transition-transform">
                      &#9662;
                    </span>
                  </summary>
                  <div
                    className="px-6 pb-4 text-sm text-text-light leading-relaxed"
                    style={{ borderTop: "1px solid #d1dce5" }}
                  >
                    <p className="pt-4">
                      <span style={{ color: "#f97066" }} className="font-bold mr-2">
                        A.
                      </span>
                      {faq.acceptedAnswer.text}
                    </p>
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
            <a
              href="/articles/sier-industry/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                SIerへの転職ガイド
              </h3>
              <p className="text-sm text-text-light">SIerの働き方と女性エンジニアの活躍</p>
            </a>
            <a
              href="/articles/game-industry/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                ゲーム業界への転職ガイド
              </h3>
              <p className="text-sm text-text-light">ゲーム業界の需要と年収を解説</p>
            </a>
            <a
              href="/articles/startup/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                スタートアップ転職ガイド
              </h3>
              <p className="text-sm text-text-light">スタートアップ企業の魅力とリスク</p>
            </a>
            <a
              href="/articles/frontend/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                フロントエンドエンジニア転職
              </h3>
              <p className="text-sm text-text-light">フロントエンド特化のキャリアガイド</p>
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
              background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Web系企業への転職を実現しましょう
            </h2>
            <p className="text-white/90 mb-6">
              IT特化型エージェントに無料相談して、あなたに合ったWeb系企業を見つけましょう。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#f97066", color: "#ffffff" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
