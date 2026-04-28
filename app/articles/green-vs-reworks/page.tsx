import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Green vs ReWorks比較｜リモート重視の女性エンジニア向け",
  description:
    "GreenとReWorksをリモートワーク重視の女性エンジニア視点で徹底比較。求人の特徴・リモート求人の充実度・サポート体制など、在宅勤務を希望する女性エンジニアに必要な情報を解説します。",
  alternates: { canonical: "/articles/green-vs-reworks/" },
  openGraph: {
    title: "Green vs ReWorks比較｜リモート重視の女性エンジニア向け",
    description:
      "GreenとReWorksをリモートワーク重視の女性エンジニア視点で徹底比較。求人の特徴・リモート求人の充実度・サポート体制など、在宅勤務を希望する女性エンジニアに必要な情報を解説します。",
    url: "https://women-engineer-navi.pages.dev/articles/green-vs-reworks/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Green vs ReWorks比較｜リモート重視の女性エンジニア向け",
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
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
    "GreenとReWorksをリモートワーク重視の女性エンジニア視点で徹底比較。求人の特徴・リモート求人の充実度・サポート体制など、在宅勤務を希望する女性エンジニアに必要な情報を解説します。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer-navi.pages.dev/articles/green-vs-reworks/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "GreenとReWorksはどちらがリモートワーク求人に強いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ReWorksはフルリモートワーク求人に特化したサービスのため、完全在宅勤務を希望する場合はReWorksが適しています。Greenはリモートワーク可能な求人も多いですが、IT・Web業界全般をカバーする転職サイトのため、ハイブリッド勤務や出社ベースの求人も含まれます。フルリモート限定で探すならReWorks、選択肢を広くしたいならGreenがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "Greenはエンジニア転職にどのくらい強いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GreenはIT・Web業界に特化した転職サイトで、エンジニア求人が全体の約6割を占めます。スタートアップからメガベンチャーまで幅広いIT企業の求人を掲載しており、企業から直接スカウトが届く機能も人気です。カジュアル面談という形で気軽に企業と話せるのも、エンジニア転職に適した特徴です。",
      },
    },
    {
      "@type": "Question",
      name: "ReWorksは未経験でも利用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ReWorksは未経験者向けのリモートワーク求人も取り扱っています。キャリア相談やリモートワークに必要なスキルの習得支援も行っており、リモートワーク未経験の方でもサポートを受けながら在宅勤務の仕事を見つけることができます。IT業界以外のリモートワーク求人もあるのが特徴です。",
      },
    },
    {
      "@type": "Question",
      name: "Greenのスカウト機能はどのように活用すればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Greenのスカウト機能を活用するには、プロフィールを充実させることが重要です。特に技術スキル、これまでの開発経験、ポートフォリオなどを詳しく記載しましょう。企業の採用担当者がプロフィールを見てスカウトを送るため、情報が充実しているほど質の高いスカウトが届きやすくなります。",
      },
    },
    {
      "@type": "Question",
      name: "リモートワークで注意すべき点は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "リモートワーク求人を選ぶ際は、フルリモートかハイブリッドかを確認しましょう。また、リモートワーク手当の有無、通信環境の要件、コアタイムの有無なども重要なチェックポイントです。入社後のオンボーディング体制や、チームのコミュニケーションツール、定期的なオフライン交流の機会があるかも確認しておくと安心です。",
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
      name: "Green vs ReWorks比較",
      item: "https://women-engineer-navi.pages.dev/articles/green-vs-reworks/",
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
              { label: "Green vs ReWorks比較" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#f97066" }}
            >
              エージェント比較
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Green vs ReWorks比較
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                リモート重視の女性エンジニア向け徹底比較
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月28日</p>
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. GreenとReWorksの基本情報</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. リモートワーク求人の充実度</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. IT・エンジニア求人の比較</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. サービスの使い方と機能比較</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 女性エンジニアへのサポート</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 利用者の口コミ・評判</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. リモートワーク成功のポイント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. タイプ別おすすめ判定</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. 併用と他サービスとの組み合わせ</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">GreenとReWorksの基本情報</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              GreenはIT・Web業界に特化した転職サイトとして、多くのエンジニアに利用されています。企業と求職者が直接つながるダイレクトリクルーティング型のサービスで、企業からのスカウトやカジュアル面談を通じて、自分に合った企業を見つけることができます。スタートアップからメガベンチャーまで、IT業界の成長企業が多数利用しています。
            </p>
            <p>
              ReWorksはフルリモートワーク求人に特化した転職支援サービスです。完全在宅勤務が可能な求人のみを取り扱っており、場所を選ばない働き方を実現したい方に最適なサービスです。キャリアカウンセリングやリモートワークに必要なスキルの習得支援も提供しており、リモートワークが初めての方でも安心して利用できます。
            </p>
            <p>
              女性エンジニアがこの2つのサービスを検討する背景には、リモートワークへの強いニーズがあります。育児との両立、通勤時間の削減、地方在住でのキャリア構築など、リモートワークは女性エンジニアの多様な働き方を実現する重要な選択肢です。
            </p>
            <p>
              2026年現在、IT業界ではリモートワークが定着しており、フルリモート・ハイブリッド勤務を採用する企業が増え続けています。この流れは女性エンジニアにとって追い風であり、GreenやReWorksを活用することで、理想の働き方を実現しやすい環境が整っています。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>比較項目</th>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>Green</th>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>ReWorks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>タイプ</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>IT特化型転職サイト</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>フルリモート特化型</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>リモート求人</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>多数あり（ハイブリッド含む）</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>全求人がフルリモート</td>
                </tr>
                <tr>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>IT求人</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>エンジニア求人が約6割</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>IT系含む幅広い職種</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>スカウト</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>企業から直接スカウト</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>キャリア相談型</td>
                </tr>
                <tr>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>カジュアル面談</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>あり（気軽に企業と対話）</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>キャリアカウンセリング対応</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border p-3 font-bold" style={{ borderColor: "#d1dce5" }}>料金</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>完全無料</td>
                  <td className="border p-3" style={{ borderColor: "#d1dce5" }}>完全無料</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* sec2 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">リモートワーク求人の充実度</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              リモートワーク求人に関しては、ReWorksが圧倒的な強みを持っています。ReWorksのすべての求人がフルリモートワーク対応であり、完全在宅勤務を前提とした求人のみが掲載されています。地方在住の方や、通勤が難しい状況にある方にとって、非常に使いやすいサービスです。
            </p>
            <p>
              Greenのリモートワーク求人は、フルリモートからハイブリッド（週1〜3日出社）まで幅広い形態が含まれています。「リモートワーク可」で検索できるため、リモートワーク対応の企業を効率的に探すことができます。ただし、求人によってリモートワークの条件が異なるため、詳細を確認する必要があります。
            </p>
            <p>
              女性エンジニアがリモートワークを重視する理由はさまざまです。育児との両立はもちろん、通勤ストレスの軽減、集中できる環境での開発、地方でのキャリア構築など、ライフスタイルに合わせた働き方を実現したいという思いがあります。
            </p>
            <p>
              ReWorksでは、リモートワークに特化したキャリアサポートも提供しています。自宅での作業環境の整え方、リモートでのコミュニケーションスキル、自己管理のコツなど、在宅勤務を成功させるためのアドバイスも受けられます。Greenでは、企業のリモートワーク実態を企業ページで確認でき、社員のリモートワーク体験談が掲載されている企業もあります。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">IT・エンジニア求人の比較</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT・エンジニア求人に関しては、GreenがReWorksを大きく上回っています。Greenのエンジニア求人は全体の約6割を占め、フロントエンド、バックエンド、インフラ、モバイル、データサイエンスなど、あらゆるエンジニア職種をカバーしています。
            </p>
            <p>
              ReWorksのIT求人は、フルリモートで対応可能なポジションが中心です。Webエンジニア、フロントエンドエンジニア、バックエンドエンジニアなどの求人がありますが、インフラエンジニアやハードウェア関連のエンジニア求人は少ない傾向にあります。IT以外の職種（カスタマーサクセス、マーケティング、事務など）のリモート求人も取り扱っています。
            </p>
            <p>
              技術スタック別に見ると、Greenではモダンな技術（React、TypeScript、Go、Rust、Kubernetes）を使う企業の求人が多く、技術志向のエンジニアに人気があります。ReWorksの IT求人は、実務で即戦力として働ける技術（PHP、Ruby、Python、JavaScript）を求めるものが中心です。
            </p>
            <p>
              年収レンジで見ると、Greenは年収500万円〜900万円がボリュームゾーンで、スタートアップのCTO候補など年収1,000万円以上の求人もあります。ReWorksは年収400万円〜600万円が中心ですが、フルリモートの利点（通勤費・居住費の削減）を考慮すると実質的な待遇は悪くありません。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>GreenのIT求人の特徴</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・エンジニア求人が全体の約6割</li>
                <li>・モダン技術を使う成長企業が多い</li>
                <li>・スカウト機能で企業から直接アプローチ</li>
                <li>・カジュアル面談で気軽に企業を知れる</li>
                <li>・年収500万〜900万がボリュームゾーン</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>ReWorksのIT求人の特徴</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・すべてフルリモート対応</li>
                <li>・Webエンジニア系の求人が中心</li>
                <li>・未経験者向けのIT求人もあり</li>
                <li>・リモートワークスキルの習得支援</li>
                <li>・地方在住でも応募可能</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">サービスの使い方と機能比較</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Greenの最大の特徴は、企業からのスカウト機能です。プロフィールを登録しておくだけで、企業の採用担当者から直接スカウトメッセージが届きます。気になるスカウトには「気になる」ボタンで反応でき、カジュアル面談につなげることができます。選考前に企業の雰囲気を知れるのは、転職先選びで大きなメリットです。
            </p>
            <p>
              ReWorksはキャリアカウンセリング型のサービスです。登録後、キャリアアドバイザーとの面談を通じて、リモートワークに適した求人を紹介してもらえます。自分のスキルや経験、希望する働き方をヒアリングした上で、最適な求人をマッチングしてくれるため、効率的に転職活動を進められます。
            </p>
            <p>
              Greenでは、企業ページに社員インタビューや開発環境の情報が掲載されている場合があり、企業研究に役立ちます。応募前に企業の技術スタックや社風を確認できるのは、エンジニアにとって重要なポイントです。
            </p>
            <p>
              ReWorksでは、リモートワークに必要なスキルの習得支援も行っています。オンラインでの学習コンテンツや、リモートワーク経験者からのアドバイスなど、在宅勤務をスムーズに始めるためのサポートが充実しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアへのサポート</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Greenは女性特化型のサービスではありませんが、IT業界で活躍する女性エンジニアの利用者が多いです。企業ページでは、女性社員のインタビューや、ダイバーシティへの取り組みを掲載している企業もあり、女性が働きやすい環境かどうかを事前に確認できます。
            </p>
            <p>
              ReWorksは女性の利用者が多いサービスで、ワーキングマザーや育児中の女性への理解があるキャリアアドバイザーが在籍しています。フルリモートワークは育児との両立に最適な働き方であり、ReWorksはその点を強みとしてサービスを展開しています。
            </p>
            <p>
              女性エンジニアがリモートワークを選ぶ際に気になるのは、キャリアアップの機会が維持されるかどうかです。リモートワークだと評価されにくいのではないか、昇進に不利にならないかという不安を持つ方も多いでしょう。Greenに掲載されている企業の多くは、リモートワーク前提の評価制度を導入しており、成果ベースの公正な評価が行われています。
            </p>
            <p>
              ReWorksでは、リモートワークでのキャリアアップ事例も紹介しており、在宅勤務でもキャリアを伸ばせることを具体的に示しています。フルリモートでマネージャーに昇進した事例や、地方在住で都内企業のリードエンジニアとして活躍している事例など、女性エンジニアのロールモデルとなる情報が得られます。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">利用者の口コミ・評判</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>Green利用者 / 29歳 / フロントエンドエンジニア</p>
              <p className="text-sm text-text-light leading-relaxed">
                「スカウト機能が便利で、自分では見つけられなかったスタートアップから声がかかりました。カジュアル面談で実際の開発環境や働き方を聞けたのが良かったです。結果、リモートワーク中心のSaaS企業に転職し、技術力を活かしながら育児との両立もできています。」
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#7c3aed" }}>ReWorks利用者 / 34歳 / バックエンドエンジニア</p>
              <p className="text-sm text-text-light leading-relaxed">
                「地方に住んでいるため、フルリモートの求人を探していました。ReWorksではすべての求人がフルリモートなので、検索の手間が省けて効率的でした。アドバイザーもリモートワーク事情に詳しく、自宅での環境整備のアドバイスまでもらえました。」
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>Green利用者 / 26歳 / バックエンドエンジニア</p>
              <p className="text-sm text-text-light leading-relaxed">
                「企業ページで社員インタビューや技術ブログが見れるので、企業の雰囲気がよく分かりました。女性エンジニアの社員インタビューがある企業を中心にチェックしていました。React+TypeScriptの経験を活かして、リモート可のメガベンチャーに転職できました。」
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#7c3aed" }}>ReWorks利用者 / 31歳 / Webエンジニア（育児中）</p>
              <p className="text-sm text-text-light leading-relaxed">
                「出産後に育児と両立できる仕事を探していて、ReWorksを見つけました。フルリモートに特化しているだけあって、子育て中の方への理解がある企業が多い印象です。時間に融通が利く環境で、スキルを維持しながら働けています。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">リモートワーク成功のポイント</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              リモートワークを成功させるためには、環境整備とコミュニケーションスキルが重要です。自宅での作業スペースを確保し、安定したインターネット接続環境を整えましょう。デスクやチェア、モニターなどの作業環境にも投資する価値があります。
            </p>
            <p>
              コミュニケーション面では、Slack、Zoom、Notionなどのツールを使いこなすスキルが求められます。テキストベースのコミュニケーションが増えるため、分かりやすい文章を書くスキルや、適切なタイミングでの報連相が重要になります。
            </p>
            <p>
              自己管理も大切なポイントです。オフィスに通勤しない分、オンとオフの切り替えが難しくなることがあります。作業時間を決めて規則正しく働く、定期的に休憩を取る、終業時間を守るなど、自分なりのルーティンを作ることが長期的なリモートワークの成功につながります。
            </p>
            <p>
              女性エンジニアの場合、育児との両立でリモートワークを選ぶケースも多いですが、「在宅だから子どもの面倒を見ながら仕事ができる」と考えるのは注意が必要です。保育園やシッターサービスの活用も含めて、仕事に集中できる環境を整えましょう。
            </p>
          </div>
          <div
            className="rounded-xl border p-6 mt-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>
              リモートワーク成功のチェックリスト
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span>安定したインターネット環境を確保する</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span>専用の作業スペースを設ける</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span>コミュニケーションツールを使いこなす</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span>オンとオフの切り替えルーティンを作る</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span>定期的にチームメンバーと1on1を設定する</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec8 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">タイプ別おすすめ判定</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>Greenがおすすめの人</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・IT・Web業界でエンジニアとして転職したい</li>
                <li>・リモートワーク可能な求人を幅広く探したい</li>
                <li>・企業からのスカウトを受けて選択肢を広げたい</li>
                <li>・モダンな技術スタックを使う企業で働きたい</li>
                <li>・カジュアル面談で企業の雰囲気を確認したい</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>ReWorksがおすすめの人</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・フルリモートワークを絶対条件にしたい</li>
                <li>・地方在住で通勤が難しい</li>
                <li>・育児との両立のために完全在宅で働きたい</li>
                <li>・リモートワークが初めてでサポートが欲しい</li>
                <li>・IT以外の職種でもリモートワークを検討している</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec9 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">併用と他サービスとの組み合わせ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              GreenとReWorksは特徴が大きく異なるため、併用することで転職の選択肢を最大限に広げることができます。Greenでモダンな技術を使うIT企業からのスカウトを待ちながら、ReWorksでフルリモートの求人を探すという使い方がおすすめです。
            </p>
            <p>
              さらに効果的なのは、転職エージェントとの併用です。レバテックキャリアやGeeklyなどのIT特化型エージェントに登録し、専門アドバイザーのサポートを受けながら、GreenやReWorksの求人もチェックするという方法が、多くの女性エンジニアに支持されています。
            </p>
            <p>
              女性特化型のtype女性の転職エージェントとの併用も効果的です。type女性の転職エージェントで女性ならではのキャリア相談を受けつつ、Greenでスカウトを活用し、ReWorksでフルリモートの選択肢を確保するという3本立ての転職活動が理想的です。
            </p>
            <p>
              注意点として、複数のサービスを利用する場合は、同じ企業に異なるサービスから重複応募しないよう管理しましょう。また、転職活動が広がりすぎて疲弊しないよう、自分のペースを大切にすることも重要です。
            </p>
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
                <details key={i} className="group rounded-xl border overflow-hidden" style={{ borderColor: "#d1dce5" }}>
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50" style={{ color: "#0891b2" }}>
                    <span className="pr-4">{faq.name}</span>
                    <span className="transition-transform group-open:rotate-180">&#9662;</span>
                  </summary>
                  <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                    <p className="pt-4">{faq.acceptedAnswer.text}</p>
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
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>リモートワーク求人ガイド</h3>
              <p className="text-sm text-text-light">在宅勤務のメリットと探し方</p>
            </a>
            <a href="/articles/type-vs-doda/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>type女性 vs doda比較</h3>
              <p className="text-sm text-text-light">女性エンジニアにおすすめはどっち？</p>
            </a>
            <a href="/articles/workport-vs-recruit/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>ワークポート vs リクルートエージェント</h3>
              <p className="text-sm text-text-light">女性IT転職向けの比較ガイド</p>
            </a>
            <a href="/articles/work-life-balance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>ワークライフバランスガイド</h3>
              <p className="text-sm text-text-light">仕事とプライベートの両立方法</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
