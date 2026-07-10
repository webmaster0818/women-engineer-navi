import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性 社内SE 転職ガイド｜仕事内容・年収・未経験から目指す道",
  description:
    "女性に人気の社内SE（情シス）への転職ガイド。仕事内容（社内インフラ・ヘルプデスク・業務システム・ベンダー管理・DX推進）、平均年収（20代450万〜40代600万）、必要スキル、求人動向、未経験からのロードマップを実データで解説。残業少なめ・WLB良好で腰を据えて働ける理由とおすすめエージェントも紹介します。",
  alternates: { canonical: "/articles/internal-se/" },
  openGraph: {
    title: "女性 社内SE 転職ガイド｜仕事内容・年収・未経験から目指す道",
    description:
      "女性に人気の社内SEの仕事内容・年収・必要スキル・未経験からのロードマップ・求人動向を実データで徹底解説。残業少なめでWLBが良好な理由も紹介。",
    url: "https://women-engineer.com/articles/internal-se/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性 社内SE 転職ガイド｜仕事内容・年収・未経験から目指す道",
  datePublished: "2026-06-10",
  dateModified: "2026-07-09",
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
    "女性に人気の社内SEの仕事内容・年収・必要スキル・未経験からのロードマップ・求人動向を実データで解説。残業少なめでWLBが良好な理由も紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/internal-se/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "社内SEの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "社内SEの平均年収はおよそ500万〜580万円が目安です（求人ボックスで約510万円、Geekly独自データで約580万円）。年代別では20代で約450万円、30代で約550万円、40代で約600万円と、経験とともに上がります。社内SEは業務範囲が広く年収幅が大きいのが特徴で、ヘルプデスク中心だと低めに、システム企画やDX推進など上流工程を担うと高くなります。IT戦略を担うITマネージャー層になると年収800万〜1000万円も狙え、JAC Recruitmentの実績では平均826万円という調査もあります。",
      },
    },
    {
      "@type": "Question",
      name: "なぜ社内SEは女性に人気なのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "残業が少なくワークライフバランスを取りやすいことが最大の理由です。社内SEはSIer（受託開発）と違って厳しい納期やクライアント都合に振り回されにくく、月の残業時間が平均8時間程度に収まる職場も多いとされます。業務がルーティン中心で計画的に進めやすく、突発対応が起きにくいため、子育てや介護とも両立しやすいのが魅力です。自社に腰を据えて長く働けるため離職率が低めで、産休育休からの復帰実績がある企業も多く、女性が安心してキャリアを継続できる職種として人気が高まっています。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でも社内SEになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能ですが、完全未経験からの直接転職はやや難しいのが実情です。即戦力が求められるため、まずはヘルプデスクやインフラ運用、SIer/SESでエンジニア経験を1〜2年積んでから社内SEを目指す『ステップ転職』が王道ルートです。事務やサポート職からなら、ITパスポートや基本情報技術者試験で基礎を証明し、社内のシステム担当・情シス補助からキャリアチェンジする方法もあります。マネジメントや調整・コミュニケーションの経験は社内SEで強く評価されるため、これまでの社会人経験を活かしやすい職種です。",
      },
    },
    {
      "@type": "Question",
      name: "社内SEは本当に残業が少なくて長く働けますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "傾向としては残業が少なく長く働きやすい職種ですが、企業差が大きい点に注意が必要です。情シスの人数が少ない企業では一人に負担が集中したり、システム障害時に対応が発生したりすることもあります。求人票だけでは実態が分からないため、残業の平均時間、情シスの人員体制、産休育休の取得・復帰実績、リモートやフレックスの運用状況を事前に確認しましょう。これらの情報は、企業の内情に詳しい転職エージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "社内SE転職におすすめの転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "社内SE求人を正当に評価してもらうなら、IT特化型のレバテックキャリアやGeekly、女性のキャリア継続を重視するならtype女性の転職エージェントがおすすめです。IT特化型は社内SEのポジション（情シス・ITヘルプデスク・DX推進など）の違いを理解したアドバイザーが多く、年収交渉にも強みがあります。女性特化型は残業の少なさや産休育休実績、リモートなど働き方の条件で求人を絞り込めます。社内SEは人気職で競争率が高いため、求人情報の早さでも複数登録（2〜3社）がおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "子育て中の女性でも社内SEは続けやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一般に続けやすい傾向のある職種です。業務がルーティン中心で計画的に進めやすく、突発の納期に振り回されにくいため、時短勤務や保育園の送迎とも両立しやすいとされます。運用手順をドキュメント化する文化が根付きやすく、産休育休の引き継ぎもしやすい仕事です。ただし『一人情シス』（情シス担当が自分だけ）の企業では業務が属人化して休みにくいことがあるため、情シスの人員体制と育休の取得・復帰実績は応募前に必ず確認しましょう。実態は企業差が大きいため、内情に詳しい転職エージェント経由での確認が確実です。",
      },
    },
    {
      "@type": "Question",
      name: "社内SEに夜間対応や休日出勤はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "企業によります。システム障害の対応や、業務を止めないためのメンテナンス作業（サーバー更新・システム切替など）は、夜間や休日に発生することがあります。ただし頻度は体制次第で、監視や一次対応を外部ベンダーに委託していたり、複数名の輪番制にしていたりする企業では負担は限定的です。応募時には『障害発生時の対応体制』『夜間・休日対応の頻度と代休の運用』を確認しておくと、入社後のギャップを防げます。",
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
              { label: "社内SE転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              職種別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性のための社内SE転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                残業少なめ・WLB良好で腰を据えて働ける人気職を実データで解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月9日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 社内SEとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 社内SEが女性に人気の理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 必要なスキルと資格</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 社内SEの年収相場（年代別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験から目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 社内SEのキャリアパス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec-women" className="hover:underline" style={{ color: "#7c3a55" }}>10. 女性が社内SEとして働くリアル</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>11. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">社内SEとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              社内SE（社内システムエンジニア／情報システム部門）は、自社の業務を支えるITシステムを企画・導入・運用・改善する職種です。外部のクライアント向けにシステムを請け負うSIer（受託開発）と違い、「自社のために自社のシステムを良くする」のが仕事。エンドユーザーである同僚の声を直接聞きながら、腰を据えて自社のITに向き合えるのが大きな特徴です。
            </p>
            <p>
              業務範囲は幅広く、(1)サーバー・ネットワークなど社内インフラの構築・保守、(2)PCやアカウント・トラブル対応を担うヘルプデスク、(3)勤怠・会計・販売管理などの業務システムの導入・運用、(4)開発を外注する際のベンダー（外部の開発会社）管理、(5)ペーパーレス化やクラウド移行といったDX（デジタルトランスフォーメーション）推進まで多岐にわたります。
            </p>
            <p>
              近年は単なる「IT便利屋」ではなく、経営とITをつなぎ、業務効率化やDXを主導する企業の中核人材として位置づけられるようになっています。技術力に加えて、現場の課題をヒアリングし、各部署やベンダーと調整する「コミュニケーション力」が評価される――この点が、社内SEが女性に向いていると言われる理由のひとつです。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>社内SEの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>社内インフラ構築・保守（サーバー / ネットワーク / クラウド）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ヘルプデスク（PC・アカウント・トラブル対応、社内問い合わせ）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>業務システムの導入・運用（勤怠 / 会計 / 販売・在庫管理 / SaaS）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ベンダー管理（外注先の選定・進捗管理・要件のとりまとめ）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>DX推進（ペーパーレス化・業務自動化・クラウド移行・データ活用）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>情報セキュリティ・社内ルール整備</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が人気の理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">社内SEが女性に人気の理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              社内SEは「勝ち組」「ホワイト」と語られることが多い人気職で、ワークライフバランスを重視する女性から特に支持されています。IT人材における女性比率はまだ2割程度ですが、社内SEはライフイベントと両立しやすい要素が多く、長くキャリアを築ける土台になります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 残業が少なくWLBが良好</h3>
              <p className="text-text-light text-sm leading-relaxed">SIerのような厳しい納期やクライアント対応に振り回されにくく、月の残業が平均8時間程度に収まる職場も。ルーティン中心で計画的に働け、子育て・介護とも両立しやすいのが最大の魅力です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 自社に腰を据えて長く働ける</h3>
              <p className="text-text-light text-sm leading-relaxed">客先常駐や頻繁な現場異動がなく、同じ会社・同じシステムに継続して関われます。離職率が低めで産休育休からの復帰実績がある企業も多く、キャリアを途切れさせにくい環境です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. コミュニケーション力が活きる</h3>
              <p className="text-text-light text-sm leading-relaxed">各部署の困りごとをヒアリングし、ベンダーや経営層と調整するのが社内SEの要。ゴリゴリの開発力よりも「人と業務をつなぐ力」が評価されるため、事務・サポート職の経験を活かしやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. リモート・フレックスも広がる</h3>
              <p className="text-text-light text-sm leading-relaxed">クラウド化が進み、運用・ヘルプデスクの一部や業務システム改善はリモートで対応できる企業が増加。フレックス導入企業も多く、通勤負担を減らしながら働きやすい環境が整いつつあります。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong style={{ color: "#7c3a55" }}>注意：</strong>人気職ゆえに「楽すぎる」というイメージが先行しがちですが、情シスの人員が少ない企業では一人に負担が集中することも。求人を選ぶ際は<strong>残業の実態・人員体制・産休育休の取得実績</strong>を必ず確認しましょう。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 スキルと資格 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルと資格</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              社内SEは「広く浅く＋調整力」が基本。最先端の開発スキルよりも、<strong>幅広いITの基礎知識</strong>と<strong>業務理解・コミュニケーション力</strong>がバランスよく求められます。すべてを完璧にする必要はなく、下表の領域を少しずつ押さえていくのが近道です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>スキル領域</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>具体例</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ITの基礎知識</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ネットワーク / サーバー / OS / セキュリティ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>幅広い領域の全体像を理解。深さより広さが大切</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>業務システム・SaaS</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>勤怠 / 会計 / 販売管理 / Microsoft 365 / Salesforce</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>導入・設定・運用の経験が即戦力になる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>コミュニケーション・調整力</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>要件ヒアリング / ベンダー折衝 / 社内説明</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>社内SE最大の評価ポイント。文系・事務出身の強み</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>クラウド・DXツール</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>AWS / Azure / Google Workspace / RPA / kintone</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>DX推進の中心。扱えると市場価値・年収が上がる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>おすすめ資格</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ITパスポート / 基本情報技術者 / 応用情報技術者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>未経験はITパスポート→基本情報で基礎を証明</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            未経験から目指すなら、まず<strong>ITパスポート</strong>でIT全般の基礎を、次に国家資格の<strong>基本情報技術者試験</strong>で「SEなら持っていて当たり前」と言われる技術知識を証明するのが王道。実務では業務システムやSaaSの運用経験、そして<strong>各部署の課題を聞き出して形にする調整力</strong>が何よりの武器になります。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">社内SEの年収相場（年代別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              社内SEの平均年収はおよそ<strong>510万〜580万円</strong>（求人ボックスで約510万円、Geekly独自データで約580万円）。日本人全体の平均（約460万円）を上回ります。年代・役割・企業規模で差が出ますが、特に<strong>ヘルプデスク中心か、システム企画・DX推進など上流工程か</strong>で大きく変わるのが社内SEの特徴です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約450万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>運用・ヘルプデスク中心。経験を積む時期</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約550万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>設計・プロジェクト推進を任され始める</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約600万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>企画・管理層。50歳前後で約760万円が最高水準</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>マネージャー / 情シス責任者</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>800万〜1000万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>IT戦略・DXを主導。ハイクラス層は平均826万円の調査も</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>上流工程へ広げる</strong>（運用→設計→企画・管理）。役割が上がるほど評価と年収が上がる</li>
              <li>② <strong>DX推進・クラウド経験</strong>を積む（AWS/Azure、業務自動化、データ活用）。希少性が高い</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。社内SEは人気職で相場が読みづらいため客観評価が有効</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 求人動向・将来性 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向と将来性</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              社内SEは全業界でニーズが高まっている職種です。経済産業省はIT人材の慢性的な不足を指摘しており、業種を問わずあらゆる企業がDX（デジタルトランスフォーメーション）に取り組む中、自社のITを担う社内SEの需要は今後さらに高まる見込みです。製造・小売・金融・医療まで、ITと無縁な業界がなくなったことで、社内SEの活躍の場は広がり続けています。
            </p>
            <p>
              一方で社内SEは「ホワイトで働きやすい人気職」として求職者からの人気も非常に高く、<strong>良い求人ほど競争率が高い</strong>のが実情です。残業が少なく産休育休実績のある優良企業の求人は、公開されてすぐに応募が集まることも珍しくありません。だからこそ、求人情報をいち早くキャッチできる転職エージェントの活用が、希望の条件で転職するための鍵になります。
            </p>
            <p>
              将来性の面では、ペーパーレス化やクラウド移行といった守りのITだけでなく、<strong>データ活用・業務自動化・生成AIの社内導入</strong>といった攻めのDXを主導できる社内SEの価値が高まっています。こうした上流・企画寄りのスキルを身につけることが、長期的に市場価値と年収を伸ばす近道です。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 未経験ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>社内SEは即戦力が求められるため、完全未経験からの直接転職はやや難関。<strong>まずIT経験を積んでから社内SEへ</strong>という「ステップ転職」が現実的で成功率の高いルートです。次の順序で進めましょう。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "ITの基礎を学び資格で証明する", "ITパスポート→基本情報技術者試験で、IT全般とSEの基礎知識を習得。未経験者が書類選考を突破する武器になります。"],
              ["STEP2", "IT職で実務経験を積む", "ヘルプデスク・インフラ運用・SES/SIerなどでまず1〜2年。社内SEに必要な現場感覚と幅広いIT知識が身につきます。"],
              ["STEP3", "業務システム・SaaSに触れる", "勤怠・会計・Microsoft 365・kintoneなど、企業で使われるシステムの導入・運用を経験。社内SEの即戦力スキルになります。"],
              ["STEP4", "クラウド・DXツールを学ぶ", "AWS/Azureの基礎やRPA・業務自動化に触れておくと、DX推進を担える人材として評価が上がります。"],
              ["STEP5", "調整・コミュニケーション実績を整理", "部署横断の業務改善や外部ベンダーとのやり取りなど、人と業務をつないだ経験を言語化。社内SE最大の評価ポイントです。"],
              ["STEP6", "エージェントで社内SE求人に応募", "人気職で競争率が高いため、エージェントで非公開求人を含めて早めに動く。残業・育休実績など働き方の条件で絞り込みます。"],
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

      {/* sec7 キャリアパス */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">社内SEのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>社内SEは「運用 → 設計 → 企画・管理」と役割を広げるほど評価と年収が上がる職種です。技術と経営の両方に近いポジションだからこそ、進路の選択肢が豊富にあります。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>マネジメントへ</h3><p className="text-sm text-text-light">情シスリーダー → ITマネージャー → 情報システム部長／CIO。IT戦略を主導し年収800万〜1000万円も狙える道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>DX・企画の専門家</h3><p className="text-sm text-text-light">DX推進担当／ITコンサル寄りへ。業務改善・データ活用・生成AI導入を主導する希少人材として市場価値を高める道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>技術を深める</h3><p className="text-sm text-text-light">インフラ／クラウド／セキュリティのスペシャリストへ。専門領域を持つことで安定して長く働ける道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>働き方を軸にする</h3><p className="text-sm text-text-light">残業少なめ・リモート可の社内SEを軸に、ライフステージに合わせて腰を据えて働く。長く安定したキャリアを築く道。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>社内SEは人気職で競争率が高い分、求人の早さと働き方条件の見極めが重要です。IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。情シス・ITヘルプデスク・DX推進など社内SEのポジションの違いを理解したアドバイザーが提案してくれます。働き方の条件交渉にも強く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、社内SEの年収相場データにも詳しいエージェント。スピーディーなマッチングと年収アップ実績が豊富で、人気の社内SE求人を早めにキャッチしたい人に向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモート、残業の少なさなど、女性のキャリア継続に配慮した求人を中心に紹介。社内SEを「長く働ける環境かどうか」で絞り込みたい人に最適です。</p>
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
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・SES→社内SE）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SESの客先常駐エンジニア / 年収430万円・残業多め</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">メーカーの社内SE（情シス）/ 年収520万円・残業月10時間</p></div>
              </div>
              <p className="text-sm text-text-light">客先常駐で残業が多く将来の働き方に不安を感じ、IT特化型エージェントに相談。インフラ運用の経験を強みに自社情シスへ転職し、年収90万円アップと残業大幅減を同時に実現。産休育休実績のある企業を選び、長く働ける土台を得ました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（20代後半・事務職→社内SE）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">営業事務（社内システム担当を兼務）/ 年収330万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">IT企業の社内SE（ヘルプデスク＋業務システム）/ 年収420万円</p></div>
              </div>
              <p className="text-sm text-text-light">営業事務として勤怠・販売管理システムの運用やトラブル対応を担当していた経験を棚卸し。ITパスポートと基本情報技術者を取得して基礎を証明し、未経験可の社内SE求人へ。業務理解と調整力を評価され、ヘルプデスク＋業務システム担当としてキャリアチェンジに成功しました。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 女性が働くリアル */}
      <section id="sec-women" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が社内SEとして働くリアル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ここまで仕事内容や年収を見てきましたが、実際に女性が社内SEとして働くうえで気になるのは「働き方の実態」と「ライフイベントとの両立」ではないでしょうか。求人票だけでは見えにくいポイントを、一般的な傾向として正直に整理します（実態は企業ごとに差が大きいため、最終的には個別の企業で確認してください）。
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>① 働き方との相性（リモート・夜間対応・体力面）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                社内SEはデスクワーク中心で体力的な負担が少なく、業務がルーティン中心で計画的に働きやすい傾向があります。一方で、ヘルプデスクや機器のキッティング（PCのセットアップ）など出社が前提になりやすい業務も含むため、フルリモートよりは「リモート併用」の働き方が一般的です。また、社内システムの障害対応やメンテナンスは業務時間外（夜間・休日）に発生することがあり、その頻度は情シスの人員体制やベンダーへの委託範囲によって大きく変わります。応募時には「障害時の対応体制」「リモートの運用実態」を確認しましょう。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>② 産休育休・時短との相性</h3>
              <p className="text-sm text-text-light leading-relaxed">
                社内SEの業務は、運用手順やシステム構成をドキュメント化して引き継ぐ文化が根付きやすく、一般に産休育休の引き継ぎがしやすい職種といえます。突発対応が比較的少なくスケジュールを立てやすいため、時短勤務とも相性が良い傾向です。ただし注意したいのは「一人情シス」（情シス担当が自分だけ）の企業。業務が属人化して休みを取りにくく、育休取得のハードルも上がりがちです。産休育休との両立を重視するなら、情シスが複数名いる体制か、育休の取得・復帰実績があるかを必ず確認してください。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>③ 社内SEからのキャリアパス</h3>
              <p className="text-sm text-text-light leading-relaxed">
                社内SEは「業務とITの両方がわかる」経験が積み上がるため、情シスリーダー→ITマネージャーという管理職の道のほか、DX推進担当・ITコンサルタント方面へ広げる道があります。また、ベンダー管理や業務システムの経験を足がかりに、<a href="/articles/backend/" className="underline" style={{ color: "#7c3a55" }}>バックエンドエンジニア</a>などの開発職へ転向する人もいます。腰を据えて働きながら選択肢を広げられるのは、社内SEならではの強みです。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>④ 現実的な注意点</h3>
              <p className="text-sm text-text-light leading-relaxed">
                正直な注意点として、(1)人気職のため良い求人ほど競争率が高い、(2)ヘルプデスク中心のポジションに長くとどまるとスキルと年収が伸びにくい、(3)「ホワイトで楽」というイメージが先行しがちだが実態は企業差が非常に大きい、の3点は押さえておきましょう。「社内SEだから働きやすい」のではなく「働きやすい体制の会社の社内SEだから働きやすい」のが実情です。年収や需給の具体的な数値は、<a href="/articles/salary-by-job/" className="underline" style={{ color: "#7c3a55" }}>職種別年収ガイド</a>・<a href="/articles/data/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアのデータ集</a>・<a href="/articles/demand/" className="underline" style={{ color: "#7c3a55" }}>需要と将来性のデータ</a>で出典付きで確認できます。
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">自分に合った働き方から探すなら</p>
            <p className="text-sm text-text-light mb-4">8つの質問で相性の良い転職エージェントがわかる無料診断も活用してください。</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/diagnosis/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#7c3a55" }}>無料エージェント診断を試す</a>
              <a href="/ranking/" className="inline-block rounded-full px-8 py-3 font-bold transition-transform hover:scale-105" style={{ border: "2px solid #7c3a55", color: "#7c3a55" }}>ランキングを見る</a>
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
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアのキャリアパス全体像</h3><p className="text-sm text-text-light">職種の全体像と進み方をまとめたガイド</p></a>
            <a href="/articles/work-life-balance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアのワークライフバランス</h3><p className="text-sm text-text-light">残業少なめで長く働ける職場の選び方</p></a>
            <a href="/articles/sier-industry/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>SIer業界 転職ガイド</h3><p className="text-sm text-text-light">社内SEとの違いと働き方を比較</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすいIT企業の見極め方</h3><p className="text-sm text-text-light">産休育休・復帰実績のチェックポイント</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
