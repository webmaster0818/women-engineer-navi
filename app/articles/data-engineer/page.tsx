import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性データエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
  description:
    "女性データエンジニアの転職ガイド。データ基盤・ETL・データパイプライン構築という仕事内容やデータサイエンティストとの違い、年収（20代466万〜40代707万）、必要スキル（SQL/Python/BigQuery/Snowflake/dbt）、未経験ロードマップ、求人動向、キャリアパスを実データで解説します。",
  alternates: { canonical: "/articles/data-engineer/" },
  openGraph: {
    title: "女性データエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
    description:
      "女性データエンジニアの年収・必要スキル・未経験からのロードマップ・求人動向・キャリアパスを実データで徹底解説。データサイエンティストとの違いも明確に。",
    url: "https://women-engineer.com/articles/data-engineer/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性データエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
  author: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer.com",
  },
  publisher: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer.com",
  },
  description:
    "女性データエンジニアの年収・必要スキル・未経験からのロードマップ・求人動向・キャリアパスを実データで解説。データサイエンティストとの違いも明確に。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/data-engineer/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "データエンジニアとデータサイエンティストは何が違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "データエンジニアは「データ活用の土台」を作る職種です。業務システムや外部サービスからデータを集めるETL/ELTの仕組みを構築し、DWH（BigQuery・Snowflakeなど）やデータレイクを設計・運用して、いつでも分析できる状態のデータを供給します。一方データサイエンティストは、そのデータを使って統計・機械学習で分析し、ビジネスの意思決定や施策を提案する職種です。データエンジニアは『分析の前段（基盤・パイプライン）』、データサイエンティストは『分析そのもの』が主戦場という違いがあります。",
      },
    },
    {
      "@type": "Question",
      name: "女性データエンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "データエンジニアの平均年収はおよそ558万円で、ITエンジニア全体の平均（約540万円）より高めです。年代別では20代後半で約466万円、30代前半で約594万円、35〜39歳で約614万円、40代前半で約707万円、40代後半で約773万円が目安で、経験とともに大きく伸びます。最高年収はピークで710万円超に達します。供給が需要に追いついておらず、SQLやクラウドDWHの実務経験者には好条件が提示されやすい職種です。性別による差はスキルと実績で埋められるため、年収交渉やエージェント活用が重要です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもデータエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。まずSQL（JOIN・GROUP BY・サブクエリ）を確実に書けるようにし、次にPython（Pandas）でのデータ加工、データベース基礎、クラウドDWH（BigQueryは無料枠で学習可能）、ETL/パイプラインの考え方の順で学ぶのが王道です。SQLが最重要なので、Webエンジニアや事務・分析系の業務でSQLを触った経験があると強い武器になります。1日2〜3時間の学習で半年〜1年が目安。簡単なデータパイプラインを作るポートフォリオがあると、未経験可・ポテンシャル採用の求人で評価されます。",
      },
    },
    {
      "@type": "Question",
      name: "データエンジニアは産休・育休後も働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすい職種のひとつです。作業の多くがクラウド上で完結するためフルリモート求人が多く、バッチ処理やパイプライン構築は成果（処理時間の短縮・データ品質の向上など）が数値で残るため、時短勤務でも評価されやすいのが特徴です。SQLやデータモデリングの考え方は流行に左右されにくく、ブランクがあっても復帰しやすい土台になります。ただし企業差が大きいため、産休育休の取得実績・復帰率やリモートの運用実態は、女性のキャリアに詳しいエージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "データエンジニア転職におすすめの転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "技術を正当に評価してもらうならIT特化型のレバテックキャリアやGeekly、女性のキャリア継続を重視するならtype女性の転職エージェントがおすすめです。IT特化型はSnowflakeやBigQuery、dbtといったデータ基盤の技術スタックを理解したアドバイザーが多く、年収交渉にも強みがあります。データエンジニアは求人の母数がWeb開発職より少ないため、複数のエージェントを併用して非公開求人にもアクセスするのが効果的です。2〜3社の併用がベストです。",
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
        style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "データエンジニア転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              職種別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性データエンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                データ基盤・ETL・パイプラインを支える高需要職種を実データで解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月10日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. データエンジニアとは（データサイエンティストとの違い）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 女性がデータエンジニアで長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 必要なスキルとツール</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. データエンジニアの年収相場（年代別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 未経験から目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. データエンジニアのキャリアパス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データエンジニアとは（データサイエンティストとの違い）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              データエンジニアは、社内外に散らばったデータを集め、整え、いつでも分析・活用できる「データ基盤」を設計・構築・運用する職種です。業務システムや外部サービスからデータを取り込むETL/ELT（抽出・変換・格納）の仕組みを作り、DWH（データウェアハウス）やデータレイクにデータを貯め、安定して流れ続けるデータパイプラインを維持します。
            </p>
            <p>
              よく混同される<strong>データサイエンティストとは役割が明確に異なります</strong>。データサイエンティストが「集まったデータを統計・機械学習で分析し、施策や意思決定を提案する」のに対し、データエンジニアは「分析できる状態のきれいなデータを、安定して供給する土台側」を担当します。データサイエンティストやアナリストが活躍するためには、その手前でデータエンジニアが整えた基盤が欠かせません。
            </p>
            <p>
              データ基盤は一般に、<strong>ETL層（データ連携）→ DWH層（データ蓄積）→ BI層（データ活用）</strong>の3層で考えます。データエンジニアはこの全体を見渡し、どこにどんな構造でデータを置き、どう流すかを設計します。地味に見えて、企業のデータ活用そのものを左右する基盤的な仕事です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>データエンジニアの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>ETL/ELTパイプラインの設計・実装（dbt / Airflow / Fivetran など）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>DWH・データレイクの設計・運用（BigQuery / Snowflake / Redshift）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>SQLによるデータ抽出・統合・変換、データモデリング</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>Python（Pandas / PySpark）での大規模データ加工・自動化</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>データ品質・監視・パイプラインの安定運用</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>クラウド（AWS / GCP / Azure）でのデータ基盤構築</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がデータエンジニアで長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされますが、データ活用の需要拡大とリモートワークの普及で、女性がデータエンジニアとして長くキャリアを築ける環境は年々整っています。中でもデータエンジニアは、ライフイベントと両立しやすい要素が多い職種です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>1. クラウド完結でフルリモートしやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">BigQueryやSnowflakeなどクラウド上で作業が完結するため、フルリモート求人が豊富。通勤負担を減らし、育児・介護と両立しながら働きやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>2. 成果が数値で残り時短でも評価されやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">パイプラインの処理時間短縮やデータ品質の改善など、成果が客観的な数値で残るため、勤務時間の長さではなく成果で評価されやすく、時短勤務でも実力が認められます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>3. SQL・設計スキルが長く通用する</h3>
              <p className="text-text-light text-sm leading-relaxed">SQLやデータモデリングの「考え方」は流行に左右されにくく、一度身につければ長く武器になります。産休育休でブランクが空いても復帰しやすい土台になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>4. 高需要・人材不足で条件交渉しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">供給が需要に追いついておらず、スキルのある人材には好条件が提示されがち。希少性が高いほど、女性が働き方や年収を交渉できる余地も大きくなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 スキルとツール */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルとツール</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              データエンジニアは複数のスキルを組み合わせる職種ですが、すべてを最初から完璧にする必要はありません。何よりも<strong>SQLを確実に書けること</strong>が最重要の土台で、そこにクラウドDWHとパイプラインの知識を積み上げていきます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>スキル領域</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>具体例</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>SQL</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>JOIN / GROUP BY / サブクエリ / ウィンドウ関数</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>データエンジニアの最重要・必須スキル。まずここを固める</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>クラウドDWH / データレイク</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>BigQuery / Snowflake / Redshift / Databricks</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>実務経験は必須級。BigQueryは無料枠で学習可能</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>ETL/ELT・パイプライン</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>dbt / Airflow / Fivetran</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Modern Data Stack（dbt+Snowflake+Airflow）が主流</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>プログラミング言語</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Python（Pandas / PySpark）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>SQLだけでは難しい高度な加工・自動化に使う</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>クラウド / インフラ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>AWS / GCP / Azure / Git</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>クラウド資格は評価・年収アップに直結。Gitは必須</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            2026年現在は、<strong>dbt + Snowflake + Airflow</strong>に代表されるクラウドネイティブな「Modern Data Stack」の活用がトレンドです。さらにAI基盤の構築が進むなか、<strong>ベクトルデータベース</strong>の知見もデータエンジニアに求められ始めており、これらを扱えると市場価値が大きく上がります。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データエンジニアの年収相場（年代別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              データエンジニアの平均年収はおよそ<strong>558万円</strong>。ITエンジニア全体の平均（約540万円）より高めで、年代別では40代以降が最も高く、20代より100万円以上高いのが特徴です。経験とスキルがそのまま年収に反映されやすい職種です（各種調査をもとにした目安。企業・地域・スキルにより変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>平均年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>20代後半</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約466万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>20代前半は約376万円から</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>30代前半</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約594万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>35〜39歳で約614万円</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>40代前半</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約707万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>40代後半は約773万円</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>全体平均</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約558万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>IT全体平均（約540万円）より高め</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>クラウドDWHの実務経験</strong>（Snowflake / BigQuery）を積み、資格（AWS/GCP/Databricks）で裏づける</li>
              <li>② <strong>Modern Data Stack（dbt/Airflow）やデータ基盤の設計（上流）</strong>を担えるようになる</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。希少性の高い職種ゆえ、市場価値を客観評価してもらう</li>
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
              生成AI・データ活用ブームを背景に、企業がデータ基盤に投資する動きが加速しています。AIや機械学習を使うにも、まずは「きれいなデータが流れ続ける基盤」が前提となるため、それを支えるデータエンジニアの需要は急拡大しています。一方で供給が追いついておらず、スキルのある人材には特別な条件が提示されることも珍しくありません。
            </p>
            <p>
              特に伸びているのは、<strong>SnowflakeやBigQueryといったクラウドDWHを核としたデータ基盤の構築・移行案件</strong>と、<strong>AI/LLM活用に向けたデータ基盤・ベクトルデータベース整備</strong>です。これらはクラウド完結でリモート求人も多く、女性が働き方を選びやすい領域です。データ活用は今後さらに全業界へ広がるため、データエンジニアの将来性は高い水準が続く見込みです。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 未経験ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>1日2〜3時間の学習で<strong>半年〜1年</strong>が一つの目安。SQLを起点に、次の順序で進めると挫折しにくいです。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "SQLを徹底的に身につける", "JOIN・GROUP BY・サブクエリ・ウィンドウ関数まで。データエンジニアの最重要スキルなので、ここを最初に固めるのが最短ルートです。"],
              ["STEP2", "データベース・データモデリングを学ぶ", "正規化やテーブル設計、ファクト/ディメンションの考え方を理解。データを『どう構造化して置くか』の感覚を養います。"],
              ["STEP3", "Pythonでのデータ加工を習得", "Pandasでデータの読み込み・整形・集計を扱えるように。SQLだけでは難しい処理や自動化に使います。"],
              ["STEP4", "クラウドDWHに触れる", "BigQueryは無料枠があり学習に最適。実データを取り込み、SQLで集計するところまで体験します。"],
              ["STEP5", "ETL/パイプラインを理解する", "dbtやAirflowで、データを抽出→変換→格納する流れを作る。Modern Data Stackの基本構成を押さえます。"],
              ["STEP6", "ポートフォリオを作る", "公開データを取り込み、変換し、DWHに貯めて可視化する小さなデータパイプラインを公開。転職活動で最も効く実績になります。"],
            ].map(([step, title, desc], i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d1dce5" }}>
                <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>{step}</span>
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
          <h2 className="text-2xl font-bold mb-6">データエンジニアのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>データエンジニアは「データを扱う基盤力」が積み上がる職種で、データ領域の中でも特に潰しが効くのが魅力です。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>基盤の専門家を極める</h3><p className="text-sm text-text-light">データアーキテクト／データプラットフォームエンジニアへ。大規模データ基盤の設計・最適化の専門家として高年収を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>分析寄りへ広げる</h3><p className="text-sm text-text-light">アナリティクスエンジニア／データサイエンティストへ。基盤の知見を土台に、分析・活用側へ領域を広げる道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>AI/ML基盤へ</h3><p className="text-sm text-text-light">MLエンジニア／MLOps・データプラットフォームへ。AI活用を支えるデータ基盤の希少人材として価値を高める道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>マネジメント・独立</h3><p className="text-sm text-text-light">データ基盤チームのリード／EMへ、あるいはフリーランスとして高単価・リモート中心の働き方へ。ライフステージに合わせやすい。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>データエンジニアの技術を正当に評価してもらうには、IT特化型と女性特化型の併用が効果的です。求人の母数がWeb開発職より少ないため、複数登録で非公開求人にアクセスするのがポイントです。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーがSnowflakeやBigQuery、dbtなどデータ基盤の技術スタックを理解した提案をしてくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。データ領域の職種にも詳しく、スピーディーなマッチングと年収交渉力に定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。働き方の条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 成功事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Aさん（30代前半・BIアナリスト→データエンジニア）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">事業会社のBIアナリスト（SQL中心）/ 年収480万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}><p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p><p className="text-sm font-bold">SaaS企業のデータエンジニア（Snowflake/dbt）/ 年収650万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">業務で培ったSQL力を土台に、dbtとSnowflakeを独学で習得。IT特化型エージェントでデータ基盤構築の意欲とポートフォリオを整理し、年収170万円アップとフルリモートを同時に実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Bさん（20代後半・事務→データエンジニア）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">データ集計を兼ねた事務職（Excel/簡単なSQL）/ 年収330万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}><p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p><p className="text-sm font-bold">自社開発企業のジュニアデータエンジニア（BigQuery/Python）/ 年収440万円</p></div>
              </div>
              <p className="text-sm text-text-light">SQLを本格的に学び直し、BigQueryの無料枠で公開データを使ったパイプラインのポートフォリオを公開。未経験可・ポテンシャル採用の自社開発企業に転職し、産休育休実績のある環境で長く働ける基盤を得ました。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl border overflow-hidden" style={{ borderColor: "#d1dce5" }}>
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50" style={{ color: "#0891b2" }}>
                  <span className="pr-4">{faq.name}</span>
                  <span className="transition-transform group-open:rotate-180">&#9662;</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
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
            <a href="/articles/data-scientist/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>データサイエンティスト転職ガイド</h3><p className="text-sm text-text-light">分析・機械学習で活躍する職種との違い</p></a>
            <a href="/articles/python-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>Pythonエンジニアのキャリア</h3><p className="text-sm text-text-light">データ加工・自動化で広がる道</p></a>
            <a href="/articles/aws-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>AWSエンジニア転職ガイド</h3><p className="text-sm text-text-light">データ基盤を支えるクラウドスキル</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
