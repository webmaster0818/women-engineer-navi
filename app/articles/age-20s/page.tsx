import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "20代女性エンジニアの転職ガイド｜キャリアアップの始め方",
  description:
    "20代女性エンジニアのための転職完全ガイド。未経験からのキャリアチェンジ、年収アップの方法、おすすめ転職エージェントまで徹底解説。20代だからこそできるキャリア戦略を紹介します。",
  keywords:
    "20代 女性エンジニア 転職, 20代 エンジニア キャリアアップ, 女性エンジニア 20代 年収",
  alternates: { canonical: "/articles/age-20s/" },
  openGraph: {
    title: "20代女性エンジニアの転職ガイド｜キャリアアップの始め方",
    description:
      "20代女性エンジニアのための転職完全ガイド。未経験からのキャリアチェンジ、年収アップの方法、おすすめ転職エージェントまで徹底解説。",
    url: "https://women-engineer-navi.pages.dev/articles/age-20s/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "20代女性エンジニアの転職ガイド｜キャリアアップの始め方",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
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
    "20代女性エンジニアのための転職完全ガイド。未経験からのキャリアチェンジ、年収アップの方法、おすすめ転職エージェントまで徹底解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer-navi.pages.dev/articles/age-20s/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "20代女性エンジニアの平均年収はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "20代女性エンジニアの平均年収は約350万〜450万円です。スキルや経験、企業規模によって差がありますが、転職によって50万〜100万円以上の年収アップを実現するケースも多いです。特にWeb系やクラウド関連のスキルがあると高年収を狙いやすくなります。",
      },
    },
    {
      "@type": "Question",
      name: "20代で転職するベストなタイミングはいつですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一般的に、実務経験2〜3年を積んだタイミングが最適とされています。基礎的なスキルが身につき、かつ若さによるポテンシャルも評価されるため、好条件の求人にチャレンジしやすい時期です。25歳〜28歳がもっとも求人数が多い傾向にあります。",
      },
    },
    {
      "@type": "Question",
      name: "20代未経験からエンジニアに転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、20代は未経験からのエンジニア転職がもっとも成功しやすい年代です。ポテンシャル採用を行う企業が多く、プログラミングスクールで基礎を学んだ後に転職する方法が人気です。特にWeb系やインフラ系は未経験者の受け入れが活発です。",
      },
    },
    {
      "@type": "Question",
      name: "20代女性エンジニアにおすすめの転職エージェントは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "20代女性エンジニアには、IT特化型のレバテックキャリアやGeeklyがおすすめです。若手向けの求人が豊富で、未経験者にはワークポートも適しています。女性特化型のtype女性の転職エージェントも、女性ならではの悩みに寄り添ったサポートが受けられます。",
      },
    },
    {
      "@type": "Question",
      name: "20代のうちに身につけておくべきスキルは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "プログラミング言語（Python、JavaScript、TypeScriptなど）の実務スキルに加え、Git、Docker、AWSなどのインフラ知識も重要です。また、コミュニケーション力やチームでの開発経験も評価されます。20代のうちに幅広い技術に触れておくと、30代以降のキャリアの選択肢が広がります。",
      },
    },
  ],
};

export default function Age20sArticlePage() {
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
          background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "20代女性エンジニアの転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              年代別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              20代女性エンジニアの転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                キャリアアップの始め方を徹底解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月27日</p>
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
                <a href="#why-20s" className="hover:underline" style={{ color: "#0891b2" }}>
                  1. 20代女性エンジニアが転職を考える理由
                </a>
              </li>
              <li>
                <a href="#market" className="hover:underline" style={{ color: "#0891b2" }}>
                  2. 20代エンジニアの転職市場と年収相場
                </a>
              </li>
              <li>
                <a href="#career-strategy" className="hover:underline" style={{ color: "#0891b2" }}>
                  3. 20代だからこそできるキャリア戦略
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:underline" style={{ color: "#0891b2" }}>
                  4. 20代のうちに身につけるべきスキル
                </a>
              </li>
              <li>
                <a href="#inexperienced" className="hover:underline" style={{ color: "#0891b2" }}>
                  5. 未経験から20代でエンジニアになる方法
                </a>
              </li>
              <li>
                <a href="#agent" className="hover:underline" style={{ color: "#0891b2" }}>
                  6. 20代女性エンジニアにおすすめの転職エージェント
                </a>
              </li>
              <li>
                <a href="#success" className="hover:underline" style={{ color: "#0891b2" }}>
                  7. 転職成功事例
                </a>
              </li>
              <li>
                <a href="#tips" className="hover:underline" style={{ color: "#0891b2" }}>
                  8. 転職活動のポイントと注意点
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline" style={{ color: "#0891b2" }}>
                  9. よくある質問
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* 20代が転職を考える理由 */}
      <section id="why-20s" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">
            20代女性エンジニアが転職を考える理由
          </h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              20代は社会人としてのキャリアをスタートさせたばかりの時期ですが、だからこそ「このままでいいのか」という悩みを抱える方が多くいます。特に女性エンジニアの場合、職場環境やキャリアパスに関する不安が転職のきっかけになることが少なくありません。
            </p>
            <p>
              IT業界は依然として男性比率が高く、女性エンジニアがロールモデルを見つけにくい環境にある企業も多いのが現状です。「将来のキャリアイメージが持てない」「女性が活躍している実績がない」といった不安から、より女性が活躍できる環境を求めて転職を検討するケースが増えています。
            </p>

            <div
              className="rounded-xl border p-6 mt-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>
                20代女性エンジニアが転職を考える主な理由
              </h3>
              <ul className="space-y-3">
                {[
                  "年収が市場相場と比較して低いと感じている",
                  "スキルアップの機会が少なく成長実感がない",
                  "残業が多くワークライフバランスが取れない",
                  "女性のロールモデルや先輩が職場にいない",
                  "将来のライフイベント（結婚・出産）を考慮した働き方をしたい",
                  "SES（客先常駐）から自社開発に移りたい",
                  "リモートワークやフレックスタイムなど柔軟な働き方をしたい",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                      &#10003;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              20代のうちに転職することの大きなメリットは、「ポテンシャル採用」の恩恵を受けられることです。30代以降になると即戦力としての実績が強く求められますが、20代は「成長性」を評価してもらえるため、キャリアチェンジのハードルが比較的低いのが特徴です。
            </p>
            <p>
              また、IT業界ではエンジニア不足が続いているため、20代女性エンジニアの需要は非常に高い状況にあります。企業のダイバーシティ推進の流れもあり、女性エンジニアの採用に積極的な企業が増えています。
            </p>
          </div>
        </div>
      </section>

      {/* 転職市場と年収 */}
      <section id="market" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">
            20代エンジニアの転職市場と年収相場
          </h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              2026年現在、IT業界のエンジニア不足は深刻化しており、20代エンジニアの転職市場は非常に活発です。経済産業省の調査によれば、2030年までにIT人材が最大79万人不足するとされており、若手エンジニアの需要は今後も高まり続けると予測されています。
            </p>

            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr style={{ backgroundColor: "#0891b2" }}>
                    <th className="px-4 py-3 text-left text-sm font-bold text-white">
                      年代・経験
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-bold text-white">
                      平均年収
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-bold text-white">
                      転職後の期待年収
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["20代前半（1〜3年経験）", "300万〜380万円", "350万〜430万円"],
                    ["20代後半（3〜5年経験）", "380万〜480万円", "430万〜550万円"],
                    ["20代後半（5年以上+リーダー経験）", "450万〜550万円", "500万〜650万円"],
                  ].map(([exp, avg, expected], i) => (
                    <tr
                      key={exp}
                      className={i % 2 === 0 ? "bg-white" : ""}
                      style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}
                    >
                      <td
                        className="px-4 py-3 text-sm font-medium"
                        style={{ borderBottom: "1px solid #d1dce5" }}
                      >
                        {exp}
                      </td>
                      <td
                        className="px-4 py-3 text-sm"
                        style={{ borderBottom: "1px solid #d1dce5" }}
                      >
                        {avg}
                      </td>
                      <td
                        className="px-4 py-3 text-sm font-bold"
                        style={{ borderBottom: "1px solid #d1dce5", color: "#0891b2" }}
                      >
                        {expected}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              特にクラウド（AWS、GCP、Azure）、コンテナ技術（Docker、Kubernetes）、フロントエンド（React、Next.js）などのモダンな技術スタックを持つエンジニアは、20代でも500万円以上の年収を提示されるケースが増えています。
            </p>
            <p>
              女性エンジニアの場合、同じスキルレベルでも男性と比較して年収が低い傾向にあるというデータもあります。転職はこのギャップを埋める良い機会でもあり、適正な市場価値で評価してもらえるエージェントの活用が重要です。
            </p>
          </div>
        </div>
      </section>

      {/* キャリア戦略 */}
      <section id="career-strategy" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">
            20代だからこそできるキャリア戦略
          </h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              20代は将来のキャリアの基盤を築く最も重要な時期です。この時期にどのような経験を積むかによって、30代以降のキャリアの選択肢が大きく変わってきます。20代女性エンジニアが取るべきキャリア戦略について解説します。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-6">
            {[
              {
                title: "専門性の軸を作る",
                desc: "バックエンド、フロントエンド、インフラなど、まずは1つの分野で深い専門性を身につけましょう。20代のうちに専門性の軸ができると、30代でのキャリアアップや年収交渉がスムーズになります。",
                color: "#0891b2",
              },
              {
                title: "モダンな技術スタックに挑戦",
                desc: "レガシーな技術だけでなく、クラウドやコンテナ、CI/CDなどモダンな技術に積極的に触れましょう。20代は吸収力が高く、新しい技術を学ぶのに最適な時期です。",
                color: "#7c3aed",
              },
              {
                title: "リーダー経験を積む",
                desc: "小さなプロジェクトでもリーダーやメンター役を経験しておくと、30代でのPMやテックリードへのキャリアパスが開けます。20代後半からは積極的にリーダーシップを発揮する場を求めましょう。",
                color: "#0891b2",
              },
              {
                title: "女性が働きやすい環境を選ぶ",
                desc: "産休育休制度の充実度、リモートワークの可否、女性管理職の比率など、長期的に働ける環境かどうかを重視しましょう。20代で良い環境に移ることで、キャリアの継続性が高まります。",
                color: "#7c3aed",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border p-6"
                style={{ borderColor: "#d1dce5" }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-text-light leading-relaxed">
            <p>
              20代の転職では、「年収アップ」だけでなく「成長環境」を重視することも大切です。多少年収が下がったとしても、技術力が飛躍的に伸びる環境に身を置くことで、3年後、5年後に大きなリターンが得られます。
            </p>
            <p>
              また、20代のうちから将来のライフイベントを見据えた企業選びをすることも賢い選択です。実際に産休育休を取得した女性エンジニアがいるか、復帰後のキャリアパスが整備されているかなどを確認しておくことで、長期的なキャリア形成がスムーズになります。
            </p>
          </div>
        </div>
      </section>

      {/* 身につけるべきスキル */}
      <section id="skills" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">
            20代のうちに身につけるべきスキル
          </h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              20代は学習能力が高く、新しいスキルを効率よく身につけられる時期です。転職市場で評価されるスキルを計画的に習得することで、キャリアアップのチャンスが大きく広がります。
            </p>
          </div>

          <div className="mt-6 space-y-6">
            {[
              {
                category: "プログラミング言語",
                skills: [
                  { name: "Python", reason: "AI/ML、データ分析、Web開発と幅広い分野で需要が高い" },
                  { name: "TypeScript / JavaScript", reason: "フロントエンドからバックエンドまでフルスタック開発に必須" },
                  { name: "Go", reason: "マイクロサービスやクラウドネイティブ開発で急速に需要が伸びている" },
                ],
              },
              {
                category: "インフラ・クラウド",
                skills: [
                  { name: "AWS / GCP / Azure", reason: "クラウドインフラの基本知識は職種問わず必須に" },
                  { name: "Docker / Kubernetes", reason: "コンテナ技術はモダンな開発環境の標準" },
                  { name: "Terraform / IaC", reason: "インフラのコード化スキルで差別化できる" },
                ],
              },
              {
                category: "ソフトスキル",
                skills: [
                  { name: "チーム開発・コードレビュー", reason: "協調性やコミュニケーション力の証明になる" },
                  { name: "技術ドキュメント作成", reason: "知識を体系化し、チームに共有する力が評価される" },
                  { name: "プロジェクト管理の基礎", reason: "リーダーへのステップとして不可欠" },
                ],
              },
            ].map((group) => (
              <div
                key={group.category}
                className="rounded-xl border p-6"
                style={{ borderColor: "#d1dce5" }}
              >
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: "#0891b2" }}
                >
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex items-start gap-3">
                      <span
                        className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white whitespace-nowrap"
                        style={{ backgroundColor: "#7c3aed" }}
                      >
                        {skill.name}
                      </span>
                      <span className="text-sm text-text-light">
                        {skill.reason}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 未経験から */}
      <section id="inexperienced" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">
            未経験から20代でエンジニアになる方法
          </h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              20代は未経験からエンジニアに転職するのに最も有利な年代です。多くの企業が20代の若手を「ポテンシャル採用」として受け入れており、プログラミング未経験でもエンジニアキャリアをスタートできます。
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4" style={{ color: "#0891b2" }}>
              未経験からの転職ステップ
            </h3>
            <div className="space-y-4">
              {[
                {
                  step: "STEP 1",
                  title: "プログラミングの基礎を学ぶ（1〜3ヶ月）",
                  desc: "Progate、Udemyなどのオンライン教材やプログラミングスクールで基礎を学びます。HTML/CSS、JavaScriptから始めるのが一般的です。女性向けのプログラミングスクールも増えており、同じ境遇の仲間と一緒に学べる環境があります。",
                },
                {
                  step: "STEP 2",
                  title: "ポートフォリオを作成する（1〜2ヶ月）",
                  desc: "学んだ技術を使ってオリジナルのWebアプリケーションを作成します。GitHubでソースコードを公開し、デプロイまで行うことで、面接での技術的なアピールポイントになります。",
                },
                {
                  step: "STEP 3",
                  title: "転職エージェントに登録する",
                  desc: "未経験者向けの求人を豊富に持つ転職エージェントに登録します。ワークポートやリクルートエージェントは未経験エンジニアの転職支援実績が豊富です。",
                },
                {
                  step: "STEP 4",
                  title: "書類対策・面接対策を行う",
                  desc: "エージェントのサポートを受けながら、職務経歴書の作成や面接対策を行います。なぜエンジニアを目指すのか、これまでの経験がどう活かせるかを明確に伝えられるようにしましょう。",
                },
                {
                  step: "STEP 5",
                  title: "企業選び・応募・面接（1〜2ヶ月）",
                  desc: "研修制度が充実している企業を中心に応募します。SES企業からスタートして経験を積む方法もありますが、自社開発や受託開発企業に直接入社できるケースも20代なら十分あります。",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 items-start rounded-xl border p-5"
                  style={{ borderColor: "#d1dce5" }}
                >
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white whitespace-nowrap"
                    style={{ backgroundColor: "#f97066" }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-text-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6">
              未経験からの転職では、「なぜエンジニアになりたいのか」という動機と、「自分で学び続けられる姿勢」が重視されます。プログラミングスクールの卒業だけでは差別化が難しいため、自主的にアプリを開発したり、技術ブログを書いたりするなどの取り組みが評価されます。
            </p>
          </div>
        </div>
      </section>

      {/* おすすめエージェント */}
      <section id="agent" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">
            20代女性エンジニアにおすすめの転職エージェント
          </h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              20代の転職活動では、エージェント選びが成功のカギを握ります。以下に、20代女性エンジニアにおすすめの転職エージェントを紹介します。
            </p>
          </div>

          <div className="mt-6 space-y-6">
            {[
              {
                name: "レバテックキャリア",
                type: "IT特化型",
                point: "IT業界トップクラスの求人数48,000件以上。20代後半のキャリアアップ転職に最適。年収70万円以上UPの実績多数。",
              },
              {
                name: "Geekly",
                type: "IT特化型",
                point: "IT・Web・ゲーム業界に強み。平均年収アップ率81%。20代の若手エンジニアの転職支援実績が豊富。",
              },
              {
                name: "ワークポート",
                type: "IT特化型",
                point: "未経験からのエンジニア転職に強い。20代前半や未経験者でも利用しやすく、手厚いサポートが特徴。",
              },
              {
                name: "type女性の転職エージェント",
                type: "女性特化型",
                point: "女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介してくれるため、長期的なキャリア形成に最適。",
              },
            ].map((agent) => (
              <div
                key={agent.name}
                className="rounded-xl border p-6"
                style={{ borderColor: "#d1dce5" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-bold">{agent.name}</h3>
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: "#0891b2" }}
                  >
                    {agent.type}
                  </span>
                </div>
                <p className="text-sm text-text-light">{agent.point}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-8 rounded-xl p-6 text-center"
            style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}
          >
            <p className="font-bold text-lg mb-2">
              20代女性エンジニアの転職エージェント選び
            </p>
            <p className="text-sm text-text-light mb-4">
              複数のエージェントに登録して比較検討するのがおすすめです。IT特化型と女性特化型を併用することで、幅広い選択肢が得られます。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#f97066" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>

      {/* 成功事例 */}
      <section id="success" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            {[
              {
                name: "Aさん（25歳）",
                before: "SES企業のJavaエンジニア / 年収320万円",
                after: "自社開発Web企業のフロントエンドエンジニア / 年収420万円",
                story:
                  "SES企業で2年間Javaの保守運用を担当していましたが、モダンな技術を使った開発がしたいと思い転職を決意。独学でReactを学び、ポートフォリオを作成してレバテックキャリア経由で自社開発企業に転職。年収100万円アップを実現しました。",
              },
              {
                name: "Bさん（28歳）",
                before: "一般事務 / 年収280万円",
                after: "Web系企業のバックエンドエンジニア / 年収380万円",
                story:
                  "事務職として働きながら、プログラミングスクールで6ヶ月間Pythonを学習。ワークポートに登録して未経験OK の求人を紹介してもらい、研修制度の充実したWeb企業に入社。リモートワーク制度もあり、働きやすい環境を手に入れました。",
              },
            ].map((case_) => (
              <div
                key={case_.name}
                className="rounded-xl border p-6"
                style={{ borderColor: "#d1dce5" }}
              >
                <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                  {case_.name}
                </h3>
                <div className="grid gap-4 md:grid-cols-2 mb-4">
                  <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}>
                    <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                    <p className="text-sm font-bold">{case_.before}</p>
                  </div>
                  <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}>
                    <p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>
                      転職後
                    </p>
                    <p className="text-sm font-bold">{case_.after}</p>
                  </div>
                </div>
                <p className="text-sm text-text-light">{case_.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 転職のポイント */}
      <section id="tips" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">
            転職活動のポイントと注意点
          </h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              20代の転職活動を成功させるために、以下のポイントを押さえておきましょう。
            </p>

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              {[
                {
                  title: "複数エージェントに登録する",
                  desc: "1社だけでなく、2〜3社のエージェントに登録して求人の幅を広げましょう。IT特化型と総合型を併用するのがおすすめです。",
                },
                {
                  title: "現職を辞めずに転職活動する",
                  desc: "焦りから条件の悪い転職をしてしまわないよう、在職中に転職活動を行うのが安全です。有給やリモートワークを活用しましょう。",
                },
                {
                  title: "技術面だけでなく環境も重視する",
                  desc: "年収だけでなく、リモートワークの可否、残業時間、産休育休制度、女性の管理職比率なども確認しましょう。",
                },
                {
                  title: "長期的なキャリアビジョンを持つ",
                  desc: "「3年後、5年後にどうなりたいか」を明確にしておくと、企業選びの軸がぶれにくくなります。面接でも好印象を与えられます。",
                },
              ].map((tip) => (
                <div
                  key={tip.title}
                  className="rounded-xl border bg-white p-6"
                  style={{ borderColor: "#d1dce5" }}
                >
                  <h3 className="font-bold mb-2" style={{ color: "#0891b2" }}>
                    {tip.title}
                  </h3>
                  <p className="text-sm text-text-light">{tip.desc}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-8 rounded-xl border-l-4 p-5"
              style={{ borderColor: "#f97066", backgroundColor: "#fff5f5" }}
            >
              <h3 className="font-bold mb-2" style={{ color: "#f97066" }}>
                注意点
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  ・転職回数が多すぎるとマイナス評価になることも。20代で3回以上の転職は慎重に。
                </li>
                <li>
                  ・「なんとなく」の転職は避け、明確な転職理由を持つことが大切です。
                </li>
                <li>
                  ・年収だけで判断せず、成長環境や将来性も考慮しましょう。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map(
              (faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
                <details
                  key={i}
                  className="group rounded-xl border overflow-hidden"
                  style={{ borderColor: "#d1dce5" }}
                >
                  <summary
                    className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50"
                    style={{ color: "#0891b2" }}
                  >
                    <span className="pr-4">{faq.name}</span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9662;
                    </span>
                  </summary>
                  <div
                    className="px-6 pb-4 text-sm text-text-light leading-relaxed"
                    style={{ borderTop: "1px solid #d1dce5" }}
                  >
                    <p className="pt-4">{faq.acceptedAnswer.text}</p>
                  </div>
                </details>
              )
            )}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                href: "/articles/age-30s/",
                title: "30代女性エンジニアの転職ガイド",
                desc: "年収アップと働き方の両立を実現する方法",
              },
              {
                href: "/articles/beginner/",
                title: "未経験から女性エンジニアになるには？",
                desc: "最短ルートと必要スキルを徹底解説",
              },
              {
                href: "/articles/salary/",
                title: "女性エンジニアの年収ガイド",
                desc: "平均年収と年収アップの方法を紹介",
              },
              {
                href: "/articles/career-path/",
                title: "女性エンジニアのキャリアパス",
                desc: "5年後・10年後のキャリア設計を解説",
              },
            ].map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
                style={{ borderColor: "#d1dce5" }}
              >
                <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                  {article.title}
                </h3>
                <p className="text-sm text-text-light">{article.desc}</p>
              </a>
            ))}
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
              20代の今がチャンス！理想の転職を実現しよう
            </h2>
            <p className="text-white/90 mb-6">
              20代女性エンジニアの転職は選択肢が豊富。
              <br />
              まずはエージェントに相談して、あなたの市場価値を確認してみませんか？
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
