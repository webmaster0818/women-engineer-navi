import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性AWSエンジニア転職ガイド｜年収・需要・未経験からのロードマップ【2026年】",
  description:
    "女性AWSエンジニアの転職ガイド2026年版。クラウドエンジニアの平均年収488万円（AWS特化で約580万円）・フリーランス月単価72万円などの実データ、国内クラウド市場の成長（2029年に8.8兆円予測）、EC2/S3基礎→IaC→コンテナ→セキュリティのスキルマップ、インフラ未経験からのロードマップを出典付きで解説します。",
  alternates: { canonical: "/articles/aws-career/" },
  openGraph: {
    title: "女性AWSエンジニア転職ガイド｜年収・需要・未経験からのロードマップ【2026年】",
    description:
      "女性AWSエンジニアの年収・需要・スキルマップ・未経験からのロードマップを実データと出典付きで解説。リモート適性が高くライフイベントと両立しやすい職種です。",
    url: "https://women-engineer.com/articles/aws-career/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性AWSエンジニア転職ガイド｜年収・需要・未経験からのロードマップ【2026年】",
  datePublished: "2026-04-28",
  dateModified: "2026-06-12",
  author: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  description:
    "女性AWSエンジニアの年収・需要・スキルマップ・未経験からのロードマップを実データと出典付きで解説。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/articles/aws-career/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "AWSエンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "クラウドエンジニア（正社員）の平均年収は488万円（求人ボックス 給料ナビ、2026年6月参照）で、ボリュームゾーンは431万〜518万円、全体レンジは344万〜1,040万円と幅があります。AWSに特化したエンジニアではGeeklyの自社データで平均約580万円と、エンジニア全体平均（537万円）より高水準です。フリーランスのAWS案件は平均月単価72万4,081円（レバテックフリーランス、2025年6月時点）で、年収換算では870万円前後になります。IaC・コンテナ・セキュリティまで扱える人材ほど上振れします。",
      },
    },
    {
      "@type": "Question",
      name: "インフラ未経験の女性でもAWSエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。Linux・ネットワークの基礎 → AWSの基本サービス（EC2/S3/VPC/RDS/IAM）→ IaC（Terraform/CloudFormation）→ コンテナ（Docker）の順で学び、自分でAWS上に小さな環境を構築した実績（ハンズオン＋構成図）を用意するのが王道ルートです。学習期間は1日2〜3時間で6ヶ月〜1年が目安。ヘルプデスク・運用監視・社内SEなど隣接職種からの段階的なキャリアチェンジも現実的で、AWS認定資格（CLF→SAA）が知識の証明として有効です。",
      },
    },
    {
      "@type": "Question",
      name: "AWSエンジニアはリモートワークしやすい職種ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "リモート適性が特に高い職種です。クラウドのインフラはすべてインターネット経由のコンソールやコードで管理でき、データセンターへの物理的な出社を前提としません。総務省「令和6年通信利用動向調査」では情報通信業のテレワーク導入率は94.3%（企業全体は47.3%）と全産業で最も高い水準です。育児・介護と両立したい女性にとって、場所に縛られず成果で評価されやすいクラウド領域は有力な選択肢です。",
      },
    },
    {
      "@type": "Question",
      name: "AWSエンジニアの需要は今後も続きますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "高い需要が続く見込みです。IDC Japanは国内パブリッククラウドサービス市場が2024年に4兆1,423億円（前年比26.1%増）に達し、2024〜2029年は年平均16.3%で成長して2029年には約2.1倍の8兆8,164億円になると予測しています。生成AIの活用やクラウドマイグレーションが成長を後押ししており、dodaの転職求人倍率（2026年4月）でもエンジニア（IT・通信）は10倍超と人材不足が続いています。クラウドを設計・運用できる人材の市場価値は当面高止まりする見通しです。",
      },
    },
    {
      "@type": "Question",
      name: "AWSとGCP・Azure、どれから学ぶべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "迷ったらAWSからで問題ありません。Synergy Research Groupの調査では2026年第1四半期の世界クラウドインフラ市場シェアはAWSが28%で首位（Microsoft 21%、Google 14%）。国内でもMM総研の調査でIaaS利用企業の54.7%がAWSを利用しており、求人数・学習教材ともに最も充実しています。クラウドの基本概念（仮想サーバー・ストレージ・IAM・IaC）は3社で共通するため、AWSで土台を作ればAzure/GCPへの応用は容易です。詳しい比較は当サイトのGCP・Azure記事で解説しています。",
      },
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer.com" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer.com/articles/" },
    { "@type": "ListItem", position: 3, name: "女性AWSエンジニア転職ガイド", item: "https://women-engineer.com/articles/aws-career/" },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "女性AWSエンジニア転職ガイド" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>職種別ガイド</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性AWSエンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">年収・需要・未経験からのロードマップ【2026年】</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>この記事の結論</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li>・<strong>需要は実データで右肩上がり</strong>。国内パブリッククラウド市場は2024年に4兆1,423億円（前年比26.1%増）、2029年には約2.1倍の8兆8,164億円と予測（出典: IDC Japan、2026年6月参照）</li>
              <li>・<strong>年収はクラウドエンジニア平均488万円、AWS特化で約580万円</strong>。フリーランスAWS案件は平均月単価72万円で年収換算870万円前後（出典: 求人ボックス・Geekly・レバテックフリーランス、2026年6月参照）</li>
              <li>・<strong>リモート適性が最高クラス</strong>。インフラをコードと画面で管理する職種で、情報通信業のテレワーク導入率は94.3%（出典: 総務省「令和6年通信利用動向調査」、2026年6月参照）</li>
              <li>・スキルは<strong>EC2/S3など基礎 → IaC（Terraform）→ コンテナ（Docker/Kubernetes）→ セキュリティ</strong>の順に積むのが王道。インフラ未経験からでも6ヶ月〜1年で入口に立てる</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. AWSエンジニアとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. クラウド需要の実データ（市場成長とAWSのシェア）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 女性がAWSエンジニアとして長く働きやすい理由</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. AWSエンジニアの年収相場（出典付き）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. スキルマップ（基礎→IaC→コンテナ→セキュリティ）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. インフラ未経験から目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. AWSエンジニアのキャリアパス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. 出典一覧</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">AWSエンジニアとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              AWSエンジニアは、Amazon Web Services（AWS）を使ってサービスの基盤――サーバー・ネットワーク・データベース・セキュリティを設計・構築・運用する職種です。従来は機材を購入してデータセンターに設置していたインフラを、AWSではブラウザ上の操作やコードで構築できるため、「インフラエンジニアのクラウド版」と考えると分かりやすいでしょう。
            </p>
            <p>
              具体的な業務は、(1)システム要件に合わせたAWS構成の設計（どのサービスをどう組み合わせるか）、(2)EC2・S3・VPC・RDSなどを使った環境構築、(3)TerraformやCloudFormationによるインフラのコード化（IaC）、(4)監視・障害対応・コスト最適化などの運用、(5)IAM設計やネットワーク制御などのセキュリティ対策です。設計から運用まで一気通貫で関わるほど市場価値が高くなります。
            </p>
            <p>
              なお、本記事は「AWSエンジニアという職種とキャリア」に焦点を当てています。AWS認定資格（CLF・SAAなど）の難易度や勉強法は<a href="/articles/cert-aws/" className="underline" style={{ color: "#7c3a55" }}>AWS認定資格ガイド</a>で、GCP・Azureとの違いと選び方は<a href="/articles/cloud-gcp-azure/" className="underline" style={{ color: "#7c3a55" }}>GCP・Azureクラウドエンジニアガイド</a>で詳しく解説しています。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>AWSエンジニアの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>クラウドアーキテクチャ設計（可用性・コスト・性能のバランス）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>環境構築（EC2 / S3 / VPC / RDS / Lambda / ECSなど）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>IaC（Terraform / CloudFormation / CDK）によるコード管理</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>CI/CD・自動化（GitHub Actions / CodePipeline）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>監視・運用・コスト最適化（CloudWatch / Cost Explorer）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>セキュリティ（IAM設計 / GuardDuty / Security Hub）</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 需要の実データ */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">クラウド需要の実データ（市場成長とAWSのシェア）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「クラウドの需要が高い」という話は定型句になりがちですが、数字で確認しておきましょう。IDC Japanの予測によると、国内パブリッククラウドサービス市場は<strong>2024年に4兆1,423億円（前年比26.1%増）</strong>に達し、2024〜2029年は<strong>年平均成長率（CAGR）16.3%</strong>で拡大、<strong>2029年には2024年比約2.1倍の8兆8,164億円</strong>に達する見込みです。クラウドマイグレーション、クラウドネイティブ化、生成AI活用が成長の牽引役とされています。
            </p>
            <p className="text-sm">出典: IDC Japan「国内パブリッククラウドサービス市場予測」プレスリリース（2026年6月参照）</p>
            <p>
              その市場の中でAWSは依然として最大手です。Synergy Research Groupの調査では、<strong>2026年第1四半期の世界クラウドインフラ市場シェアはAWSが28%で首位</strong>（Microsoft 21%、Google 14%、上位3社で67%）。同四半期の世界のクラウド支出は1,290億ドルで前年同期比35%増と、成長はむしろ加速しています。国内でも、MM総研の調査でIaaS利用企業の<strong>54.7%がAWSを利用</strong>（Azure 44.0%、GCP 26.2%、2022年6月時点・複数利用含む）しており、求人市場でも「AWS経験」を求める案件が最も多いのが実情です。
            </p>
            <p className="text-sm">出典: Synergy Research Group（2026年第1四半期）、MM総研「国内クラウドサービス需要動向調査」（いずれも2026年6月参照）</p>
            <p>
              一方で人材は足りていません。dodaの転職求人倍率レポート（2026年4月）ではエンジニア（IT・通信）の求人倍率は<strong>10倍超</strong>と全職種で突出しており、経済産業省「IT人材需給に関する調査」も2030年に最大79万人のIT人材不足を試算しています。市場が伸び続ける一方で担い手が不足している――これがAWSエンジニアの需要が高い構造的な理由です。
            </p>
            <p className="text-sm">出典: doda「転職求人倍率レポート（2026年4月）」、経済産業省「IT人材需給に関する調査」（いずれも2026年6月参照）</p>
          </div>
        </div>
      </section>

      {/* sec3 女性が働きやすい理由 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がAWSエンジニアとして長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              クラウドインフラはIT職種の中でも特に「場所を選ばない」仕事です。ライフイベントとキャリアを両立したい女性にとって、構造的に有利な要素が揃っています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. リモート適性が最高クラス</h3>
              <p className="text-text-light text-sm leading-relaxed">クラウドのインフラはコンソールとコードで完結し、データセンターへの出社や機器の物理作業を前提としません。情報通信業のテレワーク導入率は94.3%と全産業トップ（出典: 総務省「令和6年通信利用動向調査」、2026年6月参照）。中でもクラウド運用はフルリモート求人が見つけやすい領域です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 深夜の駆けつけ対応が減っている</h3>
              <p className="text-text-light text-sm leading-relaxed">オンプレミス時代の「障害時にデータセンターへ駆けつける」働き方は、クラウド化と自動復旧の仕組み（オートスケーリング・マネージドサービス）で大きく減りました。体力勝負ではなく設計と自動化の質で勝負する職種に変わっています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. スキルが客観的に証明でき復帰しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">AWS認定資格・IaCのコード・構成図など、スキルが形に残りやすい職種です。産休育休でブランクが空いても「何ができるか」を客観的に示せるため、復帰・再転職の交渉がしやすいのが強みです。資格の選び方は<a href="/articles/cert-aws/" className="underline" style={{ color: "#7c3a55" }}>AWS認定資格ガイド</a>を参照してください。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 需要超過で「会社を選べる」立場になれる</h3>
              <p className="text-text-light text-sm leading-relaxed">エンジニア求人倍率10倍超（出典: doda、2026年4月）の売り手市場では、産休育休実績・リモート運用・時短可否といった条件で企業を選別できます。需要の高い職種ほど、働きやすさを妥協せずに済みます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">AWSエンジニアの年収相場（出典付き）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              クラウドエンジニア（正社員）の平均年収は<strong>488万円</strong>で、ボリュームゾーンは431万〜518万円、全体レンジは344万〜1,040万円と幅があります。AWSに特化したエンジニアでは、Geeklyの自社データで<strong>平均約580万円</strong>と、同社のエンジニア全体平均（537万円）を上回ります。スキルの掛け合わせ次第で上限が大きく伸びる職種です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>出典・備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>クラウドエンジニア（正社員平均）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>488万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>求人ボックス 給料ナビ。ボリュームゾーン431万〜518万円</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>同・政府統計ベース</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>556万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>賃金構造基本統計調査をもとにした求人ボックス掲載値</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>AWSエンジニア（特化）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約580万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Geekly自社データ。エンジニア全体537万円より高水準</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス（AWS案件）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>平均月単価72万4,081円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>レバテックフリーランス（2025年6月時点）。年収換算約870万円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">出典: 求人ボックス 給料ナビ「クラウドエンジニアの年収・時給」、Geekly「AWSエンジニアの年収」、レバテックフリーランス「フリーランスAWSエンジニア案件の単価・年収」（いずれも2026年6月参照）</p>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>IaC・コンテナ・セキュリティを掛け合わせる</strong>。Terraform＋Kubernetes＋セキュリティ設計まで担えると、SRE・アーキテクト級の求人（公開求人では800万円超の水準も）が視野に入る</li>
              <li>② <strong>設計（上流）の経験を積む</strong>。構築・運用だけでなく「なぜこの構成か」を語れる人材は希少</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。他職種の年収水準は<a href="/articles/salary-by-job/" className="underline" style={{ color: "#7c3a55" }}>職種別年収ガイド</a>で比較し、市場価値を客観評価してもらう</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 スキルマップ */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">スキルマップ（基礎→IaC→コンテナ→セキュリティ）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              AWSには200以上のサービスがありますが、全部を覚える必要はありません。実務と年収に直結する順に、4つのフェーズで積み上げるのが効率的です。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>Phase 1</span><h3 className="text-lg font-bold">基礎サービス（EC2 / S3 / VPC / RDS / IAM）</h3></div>
              <p className="text-sm text-text-light leading-relaxed">仮想サーバー（EC2）・ストレージ（S3）・ネットワーク（VPC）・データベース（RDS）・権限管理（IAM）の5つがAWSの土台です。前提としてLinuxコマンドとTCP/IP・DNSの基礎も押さえましょう。無料利用枠で実際に手を動かし、「Webサーバーを建てて公開する」までを自力でできれば合格ラインです。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>Phase 2</span><h3 className="text-lg font-bold">IaC（Terraform / CloudFormation / CDK）</h3></div>
              <p className="text-sm text-text-light leading-relaxed">インフラをコードで定義・管理するIaCは、現在のクラウド求人で事実上の必須スキルです。マルチクラウド対応のTerraformが業界標準的な存在で、AWS純正ならCloudFormation、プログラミング経験者にはTypeScript/Pythonで書けるCDKも選択肢。Gitでのコード管理とセットで身につけます。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>Phase 3</span><h3 className="text-lg font-bold">コンテナ（Docker → ECS / Fargate → EKS / Kubernetes）</h3></div>
              <p className="text-sm text-text-light leading-relaxed">アプリの実行環境をコンテナ化するDockerを基礎に、AWSのコンテナ基盤（ECS / Fargate）、さらに大規模運用のKubernetes（EKS）へ。コンテナ＋CI/CD（GitHub Actions / CodePipeline）まで扱えると、SRE・DevOps系の高単価求人に手が届きます。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>Phase 4</span><h3 className="text-lg font-bold">セキュリティ・運用設計（IAM設計 / GuardDuty / 監視 / コスト）</h3></div>
              <p className="text-sm text-text-light leading-relaxed">最小権限のIAM設計、脅威検知（GuardDuty / Security Hub）、監視設計（CloudWatch）、コスト最適化までカバーできると「任せられるクラウド人材」として評価が一段上がります。クラウドのセキュリティ事故の多くは設定ミス起因のため、この領域の需要は安定して高い状態が続いています。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            学習の節目として、Phase 1の終わりにAWS認定クラウドプラクティショナー（CLF）、Phase 2の頃にソリューションアーキテクトアソシエイト（SAA）を取得すると、知識の抜けを確認しながら転職市場へのアピール材料も作れます。資格の体系・難易度・勉強法は<a href="/articles/cert-aws/" className="underline" style={{ color: "#7c3a55" }}>AWS認定資格ガイド</a>で詳しく解説しています。
          </p>
        </div>
      </section>

      {/* sec6 未経験ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">インフラ未経験から目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              IT未経験・インフラ未経験からでも、1日2〜3時間の学習で<strong>6ヶ月〜1年</strong>がAWSエンジニアの入口に立つ目安です。ヘルプデスク・運用監視・社内SE・事務職からのキャリアチェンジ事例が多い職種で、オンプレミスのインフラ経験者なら3〜6ヶ月程度に短縮できます。従来型インフラからの転身は<a href="/articles/infrastructure/" className="underline" style={{ color: "#7c3a55" }}>インフラエンジニア転職ガイド</a>も参考にしてください。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "Linux・ネットワークの基礎（1〜2ヶ月）", "Linuxの基本コマンド、TCP/IP・DNS・HTTPの仕組みを学びます。クラウドの裏側はLinuxとネットワークなので、ここを飛ばすと後で必ず詰まります。"],
              ["STEP2", "AWSの基礎サービスをハンズオンで（1〜2ヶ月）", "EC2・S3・VPC・RDS・IAMを無料利用枠で実際に構築。「WordPressをEC2＋RDSで公開する」など、定番構成を自分の手で作ってみるのが近道です。"],
              ["STEP3", "資格で知識を体系化（CLF→SAA）", "AWS認定クラウドプラクティショナー（CLF）→ソリューションアーキテクトアソシエイト（SAA）の順で取得。未経験者の書類選考での説得力が大きく変わります。"],
              ["STEP4", "IaCとGitを身につける（1〜2ヶ月）", "STEP2で手動構築した環境をTerraformで作り直してみましょう。コードはGitHubで公開すれば、そのままポートフォリオになります。"],
              ["STEP5", "ポートフォリオを構成図付きでまとめる", "「構成図＋IaCコード＋設計意図の説明」のセットが最強の応募書類です。なぜこの構成にしたか（コスト・可用性・セキュリティ）を自分の言葉で語れるように。"],
              ["STEP6", "IT特化エージェントで求人を絞り込む", "未経験可のクラウド運用・構築ポジションからスタートし、実務でIaC・コンテナ経験を積んで2〜3年でステップアップするのが現実的なルートです。"],
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
          <h2 className="text-2xl font-bold mb-6">AWSエンジニアのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>AWSエンジニアは「クラウドの基礎体力」が身につく職種で、そこからの分岐が豊富です。代表的な進路は次の4つです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>SRE / DevOpsエンジニア</h3><p className="text-sm text-text-light">サービスの信頼性と開発効率を技術で支える花形ポジション。Kubernetes・自動化・監視設計が武器になります。詳しくは<a href="/articles/sre-devops/" className="underline" style={{ color: "#7c3a55" }}>SRE・DevOpsエンジニアガイド</a>へ。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>クラウドアーキテクト</h3><p className="text-sm text-text-light">システム全体の構成を設計する上流職。コスト・可用性・セキュリティのトレードオフを判断する役割で、公開求人では年収レンジの上限が最も高い進路のひとつです。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>マルチクラウド / 専門特化</h3><p className="text-sm text-text-light">Azure・GCPにスキルを広げてマルチクラウド人材になる道や、セキュリティ・データ基盤への特化。比較検討は<a href="/articles/cloud-gcp-azure/" className="underline" style={{ color: "#7c3a55" }}>GCP・Azureガイド</a>を参照。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>フリーランス・柔軟な働き方</h3><p className="text-sm text-text-light">AWS案件の平均月単価は72万円台（レバテックフリーランス、2025年6月時点）。リモート案件が多く、ライフステージに合わせて稼働を調整しやすい進路です。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント（原文維持） */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>AWS関連の求人を探すなら、IT特化型の転職エージェントがおすすめです。レバテックキャリアはインフラ・クラウドエンジニアの求人を多数保有しており、AWS認定資格の評価基準にも詳しいアドバイザーが在籍しています。</p>
            <p>Geeklyも IT・Web業界に強いエージェントで、SREやDevOpsの求人に強みがあります。リクルートエージェントは大手SIerや社内SEのインフラポジションの求人が豊富です。</p>
            <p>女性特化型のtype女性の転職エージェントとIT特化型エージェントを併用すると、技術面と環境面の両方のニーズを満たす企業を見つけやすくなります。クラウドエンジニアの転職では、2〜3社の併用が効果的です。</p>
            <p>インフラエンジニアの転職では、資格とハンズオン経験が重要なアピールポイントになります。AWS認定資格の取得状況と、具体的にどのサービスを使った経験があるかを明確にした上で、エージェントに相談しましょう。</p>
          </div>
        </div>
      </section>

      {/* sec9 FAQ */}
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

      {/* sec10 出典一覧 */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典一覧</h2>
          <ul className="space-y-2 text-sm text-text-light leading-relaxed">
            <li>・出典: IDC Japan「国内パブリッククラウドサービス市場予測」プレスリリース（2026年6月参照）— 2024年市場規模4兆1,423億円（前年比26.1%増）、2024〜2029年CAGR 16.3%、2029年8兆8,164億円（2024年比約2.1倍）</li>
            <li>・出典: Synergy Research Group（2026年第1四半期、2026年6月参照）— 世界クラウドインフラ市場シェア：AWS 28%・Microsoft 21%・Google 14%（上位3社で67%）、四半期支出1,290億ドル（前年同期比35%増）</li>
            <li>・出典: MM総研「国内クラウドサービス需要動向調査」（2022年6月時点、2026年6月参照）— IaaS利用企業のAWS利用率54.7%、Azure 44.0%、GCP 26.2%（複数利用含む）</li>
            <li>・出典: 求人ボックス 給料ナビ「クラウドエンジニアの年収・時給」（2026年6月参照）— 正社員平均年収488万円、ボリュームゾーン431万〜518万円、全体レンジ344万〜1,040万円、賃金構造基本統計調査ベース556万円</li>
            <li>・出典: Geekly「AWSエンジニアの年収」（自社データ、2026年6月参照）— AWSエンジニア平均約580万円、エンジニア全体平均537万円</li>
            <li>・出典: レバテックフリーランス「フリーランスAWSエンジニア案件の単価・年収」（2025年6月時点データ、2026年6月参照）— AWS案件の平均月単価72万4,081円</li>
            <li>・出典: 総務省「令和6年通信利用動向調査」（2026年6月参照）— テレワーク導入率：情報通信業94.3%、企業全体47.3%</li>
            <li>・出典: doda（パーソルキャリア）「転職求人倍率レポート（2026年4月）」（2026年6月参照）— エンジニア（IT・通信）の求人倍率10倍超</li>
            <li>・出典: 経済産業省「IT人材需給に関する調査」（2026年6月参照）— 2030年に最大79万人のIT人材不足を試算</li>
          </ul>
          <p className="text-xs text-text-light mt-4">※ ポジション別の年収レンジ等、出典の明記がない金額は公開求人水準をもとにした目安です。</p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/salary-by-language/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>言語別の年収比較</h3><p className="text-sm text-text-light">言語選びの市場価値を一覧で確認</p></a>
            <a href="/articles/cert-aws/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>AWS認定資格ガイド</h3>
              <p className="text-sm text-text-light">取得すべき順番・難易度・勉強法</p>
            </a>
            <a href="/articles/cloud-gcp-azure/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>GCP・Azureクラウドエンジニアガイド</h3>
              <p className="text-sm text-text-light">AWSとの違いとマルチクラウド戦略</p>
            </a>
            <a href="/articles/infrastructure/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>インフラエンジニア転職ガイド</h3>
              <p className="text-sm text-text-light">クラウド時代の安定職種</p>
            </a>
            <a href="/articles/sre-devops/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>SRE・DevOpsエンジニアガイド</h3>
              <p className="text-sm text-text-light">AWSスキルを活かす上位キャリア</p>
            </a>
            <a href="/articles/salary-by-job/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>職種別年収ガイド</h3>
              <p className="text-sm text-text-light">エンジニア職種ごとの年収比較</p>
            </a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3>
              <p className="text-sm text-text-light">平均年収と年収アップの方法</p>
            </a>
          </div>
        </div>
      </section>

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
