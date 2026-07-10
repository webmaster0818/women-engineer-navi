import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性データベースエンジニア（DBA）転職ガイド｜年収・必要スキル・未経験からの道",
  description:
    "女性データベースエンジニア・DBAの転職ガイド。DB設計・SQL・RDBMS運用・パフォーマンスチューニングという仕事内容やデータエンジニアとの違い、平均年収（20代373万〜40代600万）、必要スキル・資格（ORACLE MASTER/OSS-DB）、未経験ロードマップ、求人動向、キャリアパスを実データで解説します。",
  alternates: { canonical: "/articles/sql-database/" },
  openGraph: {
    title: "女性データベースエンジニア（DBA）転職ガイド｜年収・必要スキル・未経験からの道",
    description:
      "女性データベースエンジニア・DBAの年収・必要スキル・資格・未経験からのロードマップ・求人動向・キャリアパスを実データで徹底解説。データエンジニアとの違いも明確に。",
    url: "https://women-engineer.com/articles/sql-database/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性データベースエンジニア（DBA）転職ガイド｜年収・必要スキル・未経験からの道",
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
    "女性データベースエンジニア・DBAの年収・必要スキル・資格・未経験からのロードマップ・求人動向・キャリアパスを実データで解説。データエンジニアとの違いも明確に。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/sql-database/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "データベースエンジニア（DBA）とデータエンジニアは何が違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "データベースエンジニア・DBAは、Oracle・MySQL・PostgreSQL・SQL ServerなどのRDBMS（リレーショナルデータベース）を中心に、テーブル設計・正規化・SQLチューニング・バックアップ／リカバリ・冗長化・障害対応といった『業務データベースそのものの設計・運用・性能担保』を担う職種です。一方データエンジニアは、BigQuery・Snowflake・dbtなどを使い、複数のデータをETL/ELTで集約してDWH・データ基盤を構築する『分析データ活用の土台づくり』が主戦場です。DBAは『動いている業務システムのDBを止めず速く安全に保つ運用・チューニング』、データエンジニアは『分析用データパイプラインの構築』という軸で異なります。",
      },
    },
    {
      "@type": "Question",
      name: "女性データベースエンジニア・DBAの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "データベースエンジニア全体の平均年収はおよそ544万〜593万円です。年代別では20代で約373万円、30代で約536万円、40代で600万円以上が目安で、設計・チューニングなど上流工程を担えると600万〜700万円台に届きます。フリーランスでは月単価の平均が約70万円（年収換算600万〜800万円、ハイスキル案件で1,200万円超）と高く、Oracle運用やSQLチューニング、大規模DBの経験があると単価がさらに上がります。性別による給与差は実務経験とスキルで埋められる職種で、エージェント活用での年収交渉が有効です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもデータベースエンジニア・DBAになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。SQL（SELECT/JOIN/集計）→ テーブル設計・正規化 → RDBMSを1つ（MySQL・PostgreSQLが学びやすい）→ バックアップ／リカバリ・運用 → 実行計画とインデックスによるチューニングの順で学ぶのが王道です。学習と並行してOSS-DB SilverやORACLE MASTER Bronze/Silverを取ると、未経験でも基礎力の証明になります。まずは運用・監視のオペレーターから入り、設計・チューニングへステップアップする人が多く、インフラやSES経由でDBA寄りの案件に入る道もあります。",
      },
    },
    {
      "@type": "Question",
      name: "データベースエンジニア・DBAは産休・育休後も働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすい職種のひとつです。設計・SQLチューニングはオンラインで完結しやすくリモート求人もあり、DB設計や正規化の考え方は流行に左右されにくいためブランク後も復帰しやすいのが強みです。一方で、本番DBの障害対応や夜間バッチの監視が絡む現場では当番制・オンコールがある場合もあるため、運用体制やオンコールの有無、リモート可否を事前に確認しましょう。設計・チューニング中心のポジションを選ぶと、時短や在宅と両立しやすくなります。",
      },
    },
    {
      "@type": "Question",
      name: "データベースエンジニア・DBA転職におすすめの資格とエージェントは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "資格はPostgreSQLならOSS-DB Silver/Gold、OracleならORACLE MASTER Bronze/Silver/Goldが王道で、基本情報技術者やデータベーススペシャリスト（国家資格）も評価されます。エージェントは、技術スタックを正しく評価してもらうならIT特化型のレバテックキャリアやGeekly、女性のキャリア継続を重視するならtype女性の転職エージェントがおすすめです。IT特化型はOracle運用やSQLチューニングといった専門スキルを年収に反映させる交渉に強く、2〜3社の併用がベストです。",
      },
    },
    {
      "@type": "Question",
      name: "バックエンドやデータエンジニアからデータベースエンジニアに転向できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "転向できます。バックエンドエンジニアならアプリケーション側から見たSQL・テーブル設計の経験が、データエンジニアならデータモデリングやSQLでの集計・変換の経験が、そのまま土台として活きます。そこにバックアップ／リカバリ・冗長化・実行計画を使ったチューニングといったRDBMS運用の知識を足せば、DBA寄りのポジションに手が届きます。逆にDBエンジニアからバックエンドやデータ基盤側へ広げるキャリアも一般的で、相互に行き来しやすい職種群です。ライフイベントに合わせて働き方を変えたいときに選択肢が多いのは、この職種群の強みです。",
      },
    },
    {
      "@type": "Question",
      name: "データベースエンジニアの夜間対応・オンコールは避けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ポジション選びで避けられます。本番DBの障害対応や夜間メンテナンスが当番制になっている運用中心の現場がある一方、DB設計・SQLチューニング・性能改善が中心のポジションではオンコールが無いか限定的なことも多くあります。転職時は、運用体制（当番の有無・頻度・免除制度）と担当工程（運用中心か設計中心か）を求人票と面接で具体的に確認しましょう。育児などで夜間対応が難しい場合は、その旨をエージェントに伝えて設計・チューニング寄りの求人に絞り込むのが確実です。",
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
              { label: "データベースエンジニア転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              言語別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性データベースエンジニア（DBA）転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                SQL・DB設計・RDBMS運用とチューニングを実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. データベースエンジニア・DBAとは（データエンジニアとの違い）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 女性がDBエンジニアで長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 必要なスキルと資格</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. DBエンジニアの年収相場（年代別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験から目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. DBエンジニアのキャリアパス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec-women-real" className="hover:underline" style={{ color: "#7c3a55" }}>10. 女性がデータベースエンジニアとして働くリアル</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>11. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データベースエンジニア・DBAとは（データエンジニアとの違い）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              データベースエンジニア（DBA：データベース管理者）は、Oracle・MySQL・PostgreSQL・Microsoft SQL ServerといったRDBMS（リレーショナルデータベース）を対象に、業務データを<strong>正しく・速く・安全に</strong>扱えるよう、データベースそのものを設計・運用・チューニングする職種です。基幹システム・ECサイト・金融システムなど、データを止められないサービスの土台を支えます。
            </p>
            <p>
              仕事は大きく<strong>「設計」「開発（構築）」「運用管理」</strong>の3つに分かれます。設計ではテーブル定義・正規化・インデックス設計を行い、運用管理ではバックアップ／リカバリ、パフォーマンス監視、障害対応を担当。さらに、遅いSQLを実行計画から見直してインデックスを最適化する<strong>パフォーマンスチューニング</strong>は、DBAの腕の見せどころです。
            </p>
            <p>
              よく混同される<strong>データエンジニア</strong>とは役割が異なります。データエンジニアはBigQueryやSnowflake、dbtを使い、複数システムのデータをETL/ELTで集約して<strong>分析用のデータ基盤（DWH）</strong>を作るのが主戦場。対してDBエンジニア・DBAは、<strong>稼働中の業務DBを止めずに速く安全に保つRDBMS運用・チューニング</strong>が中心という違いがあります（当ナビの<a href="/articles/data-engineer/" style={{ color: "#7c3a55" }} className="hover:underline">データエンジニア転職ガイド</a>もあわせてご覧ください）。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>DBエンジニア・DBAの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>DB設計・テーブル設計・正規化・インデックス設計</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>SQLの作成・実行計画の確認・クエリ最適化</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>RDBMS構築・運用（Oracle / MySQL / PostgreSQL / SQL Server）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>パフォーマンスチューニング・性能監視</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>バックアップ／リカバリ・冗長化・障害対応</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>セキュリティ・アクセス権限・データ保護</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がDBエンジニアで長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされますが、DB領域は「設計・チューニングという考え方」が長く通用し、ライフイベントと両立しやすい要素が多い職種です。データはあらゆるシステムの中心にあるため、専門性が一度身につくと安定して長く活かせます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 設計・チューニングはリモートと相性が良い</h3>
              <p className="text-text-light text-sm leading-relaxed">DB設計・SQLチューニング・運用設計はオンラインで完結しやすく、リモート求人も増加。障害対応の当番が無いポジションを選べば、育児・介護と両立しながら働きやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 成果が数字で見え時短でも評価されやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">「クエリ応答を3秒→0.3秒に短縮」「障害ゼロで運用」など、成果が処理速度や稼働率といった客観的な数値で残るため、勤務時間ではなく実力で評価されやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. スキルが長く通用しブランク復帰しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">正規化・インデックス設計・トランザクションといったRDBMSの基礎は流行に左右されにくく、一度身につければ長く武器に。産休育休でブランクが空いても復帰しやすい土台になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 専門性が高く代替されにくい</h3>
              <p className="text-text-light text-sm leading-relaxed">DB設計・チューニングは経験がものを言う専門職。担い手が限られるため希少価値が高く、女性が条件交渉できる余地も大きくなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 スキルと資格 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルと資格</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              DBエンジニア・DBAは複数のスキルを組み合わせる職種ですが、すべてを最初から完璧にする必要はありません。まず<strong>SQLとテーブル設計</strong>を土台にし、RDBMSを1つ深く扱えるようになることがスタートです。資格は基礎力の証明として効果的です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>スキル・資格</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>具体例</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>SQL</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>SELECT / JOIN / 集計 / サブクエリ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>DBエンジニアの中核。実行計画を読めると一段上</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>DB設計</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>正規化 / ER図 / インデックス設計</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>設計力は流行に左右されず長く通用する</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>RDBMS製品</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Oracle / MySQL / PostgreSQL / SQL Server</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>未経験はMySQL・PostgreSQLが学びやすい。Oracleは高単価傾向</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>運用・チューニング</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>バックアップ／リカバリ / 監視 / 冗長化</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>本番DBを止めない運用設計はDBAの専門領域</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>OSS-DB認定</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>OSS-DB Silver / Gold（PostgreSQL）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Goldは内部構造・チューニング・セキュリティまで問う</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ORACLE MASTER</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Bronze / Silver / Gold DBA</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Silverは日常運用、Goldは上級DBA向け。Oracle案件で強い</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>国家資格</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基本情報技術者 / データベーススペシャリスト</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>DBスペシャリストは設計・運用の上流で高評価</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            未経験からの第一歩としては、学習しながら取れる<strong>OSS-DB Silver</strong>や<strong>ORACLE MASTER Bronze/Silver</strong>が定番。実務経験を積みながら段階的に上位資格やデータベーススペシャリストを狙うと、市場価値が着実に上がります。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">DBエンジニアの年収相場（年代別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              データベースエンジニア全体の平均年収はおよそ<strong>544万〜593万円</strong>で、日本の平均より高い水準です。年代・経験・担当工程で差が出ます。下表は各種調査をもとにした目安です（企業・地域・スキルにより変動します）。
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
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約373万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>運用・監視からスタートが多い</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約536万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>設計・チューニングを任され始める層</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>600万円以上</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>上流設計・DBA／リードで600〜700万円台も</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月単価 約70万円〜</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>年収換算600〜800万円。ハイスキル案件は1,200万円超</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>SQLチューニング・性能設計</strong>を武器にする（実行計画から遅いクエリを改善できる人材は希少）</li>
              <li>② <strong>Oracle運用・大規模DB</strong>の経験を積む（金融・基幹系は単価が高い）</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。専門スキルを市場価値として客観評価してもらう</li>
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
              「データベースエンジニア専業」という肩書きの単純な構築案件は、クラウド化により以前よりやや減少傾向にあります。一方で、データドリブン経営・AI活用の進展でデータの重要性はむしろ増しており、経済産業省もIT人材の不足を指摘。<strong>設計力・SQLチューニング・運用設計</strong>を担えるDBA人材の価値はむしろ高まっています。
            </p>
            <p>
              特に求められるのは、<strong>Oracle・SQL Serverの基幹系運用とチューニング</strong>、そして<strong>クラウドDB（Amazon RDS / Aurora / Cloud SQL）の設計・運用</strong>です。ビッグデータを扱う業界では案件数・単価ともに高く、フリーランス市場でも大規模・ハイスキル案件が目立ちます。AI時代にデータの土台を支えるDBスキルは、長期的に安定した需要が見込めます。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 未経験ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>1日2〜3時間の学習で<strong>半年〜1年</strong>が一つの目安。次の順序で進めると挫折しにくいです。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "SQLの基礎を習得する", "SELECT・JOIN・集計・サブクエリなど、データを取り出す基本操作から。DBエンジニアの中核なので最初に丁寧に。"],
              ["STEP2", "テーブル設計・正規化を学ぶ", "ER図・正規化・主キー／外部キーといったDB設計の考え方を習得。流行に左右されず長く通用する土台です。"],
              ["STEP3", "RDBMSを1つ動かす", "MySQLやPostgreSQLを自分の環境で構築し、テーブル作成からデータ操作まで。あれこれ手を出さず1つに集中。"],
              ["STEP4", "資格で基礎を証明する", "OSS-DB SilverやORACLE MASTER Bronze/Silverを取得。未経験でも基礎力の客観的な証明になります。"],
              ["STEP5", "運用・チューニングに触れる", "バックアップ／リカバリ、インデックスによる高速化、実行計画の読み方を学習。DBAの実務に直結します。"],
              ["STEP6", "実務に近い成果物を作る", "サンプルDBを設計→SQLで集計→遅いクエリを改善する流れをまとめる。転職活動で実力を示す材料になります。"],
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
          <h2 className="text-2xl font-bold mb-6">DBエンジニアのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>DBエンジニア・DBAは「設計力」と「運用の信頼性」が積み上がる職種で、専門を深める道も領域を広げる道も選べます。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>専門を深める（DBA）</h3><p className="text-sm text-text-light">シニアDBA → データベーススペシャリスト。大規模DBの設計・チューニングのプロとして高年収を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>上流・マネジメント</h3><p className="text-sm text-text-light">データアーキテクト／PM。データ設計の方針決定やプロジェクトをリードする道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>領域を広げる</h3><p className="text-sm text-text-light">データエンジニア／クラウド（RDS/Aurora）／インフラへ。SQL×クラウドの掛け合わせで市場価値を高める道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>独立・柔軟な働き方</h3><p className="text-sm text-text-light">フリーランスDBAとして高単価の設計・チューニング案件へ。ライフステージに合わせやすい。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>DB設計・SQLチューニング・Oracle運用といった専門スキルを正当に評価してもらうには、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーがDB設計・チューニングといった専門スキルを理解した提案をしてくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。Oracle運用やSQLチューニングなど専門性を年収に反映させるスピーディーなマッチングと交渉力に定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。障害対応の当番有無や働き方の条件で絞り込みたい人に最適です。</p>
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
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Aさん（30代前半・運用監視→DBA／チューニング）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">運用監視オペレーター / 年収400万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">事業会社のDBA（Oracle）/ 年収580万円・一部リモート</p></div>
              </div>
              <p className="text-sm text-text-light">ORACLE MASTER Silverを取得し、遅いSQLを実行計画から改善した実績を整理。IT特化型エージェント経由で設計・チューニングを担うDBAに転職し、年収180万円アップを実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Bさん（20代後半・未経験→DBエンジニア）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">経理事務（IT未経験）/ 年収330万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SIerのDBエンジニア（PostgreSQL）/ 年収430万円</p></div>
              </div>
              <p className="text-sm text-text-light">独学でSQL・正規化を学びOSS-DB Silverを取得。サンプルDBの設計とクエリ改善をまとめた成果物を提示し、未経験可のDB運用ポジションに転職。産休育休実績のある環境で長く働ける基盤を得ました。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 女性が働くリアル */}
      <section id="sec-women-real" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がデータベースエンジニアとして働くリアル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「長く働きやすい理由」で制度・スキル面は紹介した通りです。ここでは、これから<strong>データベースエンジニアへのキャリア</strong>を考える女性に向けて、業務の質感・ライフイベントとの両立・キャリアの築き方・注意点をもう一歩踏み込んで整理します。女性エンジニアの比率や年収の実数は<a href="/articles/data/" style={{ color: "#7c3a55" }} className="hover:underline font-bold">女性エンジニアの実データ集</a>と<a href="/articles/salary-by-job/" style={{ color: "#7c3a55" }} className="hover:underline font-bold">職種別年収ガイド</a>を参照してください。
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>① 安定需要×計画的な業務という相性の良さ</h3>
              <p className="text-sm text-text-light leading-relaxed">
                データベースはあらゆる業務システムの土台にあるため、流行の移り変わりで仕事が急に消えにくい領域です（需要動向の実データは<a href="/articles/demand/" style={{ color: "#7c3a55" }} className="hover:underline font-bold">エンジニアの需要・将来性</a>参照）。加えて、DB設計・チューニング・リリース作業は「計画を立てて、検証して、実施する」<strong>計画駆動</strong>の進め方が基本で、本番作業ほど事前準備が重視されます。スケジュールの見通しを立てて働きたい人、家庭の予定と仕事を両立させたい人と相性の良い業務特性です。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>② 産休・育休・時短との相性</h3>
              <p className="text-sm text-text-light leading-relaxed">
                設計・チューニング中心のポジションは業務を時間で区切りやすく、時短勤務との相性が良好です。正規化やトランザクションといったRDBMSの基礎は陳腐化しにくいため、<strong>ブランク後のキャッチアップ負荷が小さい</strong>のも復帰のしやすさにつながります。一方で、復帰後の負荷は「当番・オンコールの有無」で大きく変わります。復帰や時短を見据えるなら、制度の有無だけでなく運用体制と担当工程まで確認して選びましょう。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>③ データベースエンジニアへのキャリアの築き方</h3>
              <p className="text-sm text-text-light leading-relaxed">
                未経験からは、本文のロードマップの通り運用・監視から入って設計・チューニングへ進むのが王道です。隣接職種からの転向も現実的で、<a href="/articles/backend/" style={{ color: "#7c3a55" }} className="hover:underline font-bold">バックエンドエンジニア</a>ならアプリ側から見たSQL・設計経験が、<a href="/articles/data-engineer/" style={{ color: "#7c3a55" }} className="hover:underline font-bold">データエンジニア</a>ならデータモデリング経験がそのまま土台になります。学習を職種転換につなげたい場合は、<a href="/articles/cert-database/" style={{ color: "#7c3a55" }} className="hover:underline font-bold">データベース資格ガイド</a>で基礎力の証明から橋を架けるのが着実です。専門性は労働時間ではなく設計力・改善実績で評価されるため、時短期間があってもキャリアの積み上げが消えにくいのがこの職種の実利です。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>④ 現実的な注意点（正直に）</h3>
              <ul className="text-sm text-text-light space-y-2 leading-relaxed">
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="font-bold">&#9888;</span><span>本番DBの障害対応・夜間メンテナンスが当番制の現場では、生活リズムへの影響がある（設計・チューニング中心のポジション選びで回避可能）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="font-bold">&#9888;</span><span>金融・基幹系にはオンプレミス環境や客先常駐の現場も残っており、リモート可否は案件差が大きい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="font-bold">&#9888;</span><span>運用オペレーターの業務範囲にとどまると評価も年収も伸びにくい。設計・チューニングへ意識的にステップアップする計画が必要</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="font-bold">&#9888;</span><span>オンコールの有無・頻度・免除制度は求人票に書かれていないことが多く、面接やエージェント経由での個別確認が必須</span></li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p className="text-sm">
              自分の経験・希望する働き方に合うエージェントを整理したい方は<a href="/diagnosis/" style={{ color: "#7c3a55" }} className="hover:underline font-bold">エージェント無料診断</a>で相性を確認できます。各社の比較は<a href="/ranking/" style={{ color: "#7c3a55" }} className="hover:underline font-bold">おすすめ転職エージェントランキング</a>をご覧ください。
            </p>
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
            <a href="/articles/salary-by-language/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>言語別の年収比較</h3><p className="text-sm text-text-light">言語選びの市場価値を一覧で確認</p></a>
            <a href="/articles/data-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>データエンジニア転職ガイド</h3><p className="text-sm text-text-light">データ基盤・ETLとの違いを解説</p></a>
            <a href="/articles/backend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>バックエンドエンジニア転職ガイド</h3><p className="text-sm text-text-light">SQL・DB設計を活かすサーバーサイド</p></a>
            <a href="/articles/infrastructure/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>インフラエンジニア転職ガイド</h3><p className="text-sm text-text-light">クラウドDB運用と相性の良い職種</p></a>
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>エンジニア資格ガイド</h3><p className="text-sm text-text-light">OSS-DB・ORACLE MASTERなど</p></a>
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
