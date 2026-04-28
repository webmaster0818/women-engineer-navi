import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "AWS×女性エンジニア｜クラウドインフラの需要と転職方法",
  description:
    "AWSを活かした女性エンジニアの転職ガイド。クラウドインフラの求人動向・年収・資格・学習方法を詳しく解説。インフラエンジニアやSREを目指す女性向けの情報を網羅します。",
  alternates: { canonical: "/articles/aws-career/" },
  openGraph: {
    title: "AWS×女性エンジニア｜クラウドインフラの需要と転職方法",
    description: "AWSを活かした女性エンジニアの転職ガイド。クラウドインフラの求人動向・年収・資格・学習方法を詳しく解説。",
    url: "https://women-engineer-navi.pages.dev/articles/aws-career/",
    type: "article", siteName: "女性エンジニア転職ナビ", locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "AWS×女性エンジニア｜クラウドインフラの需要と転職方法",
  datePublished: "2026-04-28", dateModified: "2026-04-28",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  description: "AWSを活かした女性エンジニアの転職ガイド。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/articles/aws-career/" },
};

const faqData = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "AWS未経験から転職は可能ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、AWS未経験からでもクラウドエンジニアへの転職は可能です。AWS認定クラウドプラクティショナーやソリューションアーキテクトアソシエイトの資格を取得し、ハンズオンで実践経験を積むことで、未経験からの転職を実現できます。学習期間は3〜6ヶ月が目安です。" } },
    { "@type": "Question", name: "AWSエンジニアの年収はどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "AWSエンジニアの平均年収は約550万〜800万円です。AWS認定資格を複数持ち、IaCやコンテナの経験があると年収700万〜1,000万円以上も期待できます。SREやクラウドアーキテクトのポジションでは年収900万〜1,200万円の求人もあります。" } },
    { "@type": "Question", name: "AWS認定資格は転職に有利ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、AWS認定資格は転職に非常に有利です。特にソリューションアーキテクトアソシエイト（SAA）は、クラウドエンジニアの登竜門として多くの企業で評価されます。プロフェッショナルレベルの資格を持っていると、さらに市場価値が高まります。" } },
    { "@type": "Question", name: "AWSとAzure、GCP、どれを学ぶべきですか？", acceptedAnswer: { "@type": "Answer", text: "2026年現在、クラウド市場のシェアはAWSが最大で、求人数も最も多いです。まずAWSを学び、基礎を固めた上でAzureやGCPにスキルを広げるのがおすすめです。マルチクラウドの知識があると、さらに市場価値が高まります。" } },
    { "@type": "Question", name: "女性のインフラエンジニアは少ないですか？", acceptedAnswer: { "@type": "Answer", text: "女性のインフラエンジニアはまだ少数派ですが、クラウドの普及に伴い増加傾向にあります。従来のオンプレミスインフラと異なり、クラウドインフラはコードで管理するため、物理的な作業が少なく、リモートワークとの相性も良いです。女性エンジニアにとっても働きやすい分野です。" } },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer-navi.pages.dev" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer-navi.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "AWS×女性エンジニア", item: "https://women-engineer-navi.pages.dev/articles/aws-career/" },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "AWS×女性エンジニア" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#0891b2" }}>スキル・言語ガイド</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              AWS×女性エンジニア
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">クラウドインフラの需要と転職方法</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月28日</p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. クラウドインフラの求人動向</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. AWSエンジニアの年収データ</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. AWS認定資格ガイド</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. AWSの主要サービスと学習順序</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. Infrastructure as Code（IaC）の重要性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. SRE・DevOpsのキャリアパス</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 女性AWSエンジニアの転職成功事例</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. 学習ロードマップ</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. おすすめ転職エージェント</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">クラウドインフラの求人動向</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>2026年現在、クラウドインフラの需要は爆発的に伸びています。企業のDX推進やクラウドマイグレーション（オンプレミスからクラウドへの移行）が加速しており、AWSをはじめとするクラウドサービスのスキルを持つエンジニアは引く手あまたの状況です。</p>
            <p>特にAWSは国内クラウド市場でトップシェアを誇り、AWS関連の求人数は年々増加しています。EC2、S3、Lambda、ECSなどの基本サービスに加え、IaC（Terraform/CloudFormation）やコンテナ（Docker/Kubernetes）のスキルがあると、さらに多くの求人にアクセスできます。</p>
            <p>女性のクラウドエンジニアはまだ少数派ですが、だからこそ企業からの注目度は高いです。ダイバーシティの推進を進める大手企業やメガベンチャーでは、女性インフラエンジニアの採用に積極的で、経験の浅い段階でも教育体制が整った企業に入社できるチャンスがあります。</p>
            <p>クラウドインフラの仕事はリモートワークとの相性が良いのも特徴です。クラウドの管理・運用はすべてインターネット経由で行えるため、自宅からでも問題なく作業できます。育児と両立したい女性エンジニアにとって、クラウドインフラは非常に魅力的な分野です。</p>
          </div>
        </div>
      </section>

      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">AWSエンジニアの年収データ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>AWSエンジニアの年収は、IT業界の中でも高水準です。需要に対して人材が不足しているため、スキルに応じた高い年収が期待できます。経験1〜2年で450万〜550万円、経験3〜5年で600万〜800万円、経験5年以上で800万〜1,200万円が目安です。</p>
            <p>特に年収を上げやすいのは、AWS認定資格の上位レベルを取得しているケースです。ソリューションアーキテクトプロフェッショナルやDevOpsエンジニアプロフェッショナルなどの資格を持っていると、年収800万円以上のオファーを受けやすくなります。</p>
            <p>SRE（Site Reliability Engineering）やクラウドアーキテクトのポジションでは、さらに高い年収が期待できます。システム全体の信頼性を担保するSREは、年収900万〜1,200万円の求人も珍しくなく、クラウドアーキテクトでは年収1,000万円以上も可能です。</p>
            <p>フリーランスのAWSエンジニアの場合、月単価70万〜120万円が相場です。Terraform+Docker+Kubernetesのスキルセットがあると、月単価100万円以上の案件も視野に入ります。</p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>ポジション</th>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>年収レンジ</th>
                  <th className="border p-3 text-white text-left" style={{ borderColor: "#d1dce5" }}>求められるスキル</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border p-3" style={{ borderColor: "#d1dce5" }}>クラウドエンジニア（ジュニア）</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>450万〜550万円</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>AWS基礎、Linux</td></tr>
                <tr style={{ backgroundColor: "#f8fafb" }}><td className="border p-3" style={{ borderColor: "#d1dce5" }}>クラウドエンジニア（ミドル）</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>600万〜800万円</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>IaC、コンテナ、CI/CD</td></tr>
                <tr><td className="border p-3" style={{ borderColor: "#d1dce5" }}>SRE</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>800万〜1,200万円</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>Kubernetes、監視、自動化</td></tr>
                <tr style={{ backgroundColor: "#f8fafb" }}><td className="border p-3" style={{ borderColor: "#d1dce5" }}>クラウドアーキテクト</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>900万〜1,500万円</td><td className="border p-3" style={{ borderColor: "#d1dce5" }}>設計力、マルチクラウド</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">AWS認定資格ガイド</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>AWS認定資格は、AWSスキルを客観的に証明する有効な手段です。転職市場では資格保有者が優遇される傾向にあり、特に実務経験が少ない段階では資格の価値が大きくなります。</p>
            <p>まず取得を目指すべきは、AWS認定クラウドプラクティショナー（CLF）です。クラウドの基礎知識を問う入門レベルの資格で、1〜2ヶ月の学習で取得可能です。次に目指すのが、ソリューションアーキテクトアソシエイト（SAA）です。AWSの設計ベストプラクティスを問う資格で、クラウドエンジニアの定番資格として多くの企業で評価されています。</p>
            <p>さらにキャリアアップを目指す場合は、DevOpsエンジニアプロフェッショナルやソリューションアーキテクトプロフェッショナルなどの上位資格を取得しましょう。専門分野の資格（データベース、セキュリティ、ネットワーキングなど）も、専門性を証明する手段として有効です。</p>
            <p>資格取得の学習には、AWS公式のトレーニング、Udemyの模擬試験、書籍、ハンズオンラボなどを活用しましょう。AWSの無料利用枠を使って実際にサービスを触りながら学ぶのが最も効果的です。</p>
          </div>
        </div>
      </section>

      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">AWSの主要サービスと学習順序</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>AWSには200以上のサービスがありますが、まず押さえるべき基本サービスがあります。コンピューティング（EC2, Lambda, ECS）、ストレージ（S3, EBS）、ネットワーキング（VPC, CloudFront, Route 53）、データベース（RDS, DynamoDB）が基礎として重要です。</p>
            <p>次のステップとして、IAM（アクセス管理）、CloudWatch（監視）、CloudFormation/CDK（IaC）、CodePipeline（CI/CD）などの運用・管理系サービスを学びましょう。これらのサービスを使いこなせると、実務で即戦力として活躍できます。</p>
            <p>サーバーレスアーキテクチャ（Lambda, API Gateway, DynamoDB, S3）は、近年特に人気が高まっている分野です。サーバーの管理が不要で、コストも使った分だけという特徴は、効率的なシステム構築に最適です。</p>
            <p>コンテナ技術（ECS, EKS, Fargate）も重要です。Dockerコンテナの基礎を理解した上で、AWSのコンテナサービスを使ったアプリケーションのデプロイ・運用ができると、市場価値が大きく高まります。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>基礎サービス（まず学ぶべき）</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・EC2（仮想サーバー）</li>
                <li>・S3（ストレージ）</li>
                <li>・VPC（ネットワーク）</li>
                <li>・RDS（データベース）</li>
                <li>・IAM（アクセス管理）</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>応用サービス（次に学ぶべき）</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・Lambda（サーバーレス）</li>
                <li>・ECS/EKS（コンテナ）</li>
                <li>・CloudFormation/CDK（IaC）</li>
                <li>・CloudWatch（監視）</li>
                <li>・CodePipeline（CI/CD）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Infrastructure as Code（IaC）の重要性</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>IaC（Infrastructure as Code）は、インフラの構成をコードで管理する手法です。Terraform、AWS CloudFormation、AWS CDKなどのツールを使い、インフラの構築・変更・削除をコードベースで行います。現代のクラウドエンジニアにとって、IaCのスキルは必須と言えます。</p>
            <p>IaCのメリットは、インフラの再現性、バージョン管理、自動化が可能になることです。手動でAWSコンソールから設定するのと異なり、コードで管理することで、環境の再構築やチームでの共同作業が容易になります。</p>
            <p>Terraformは、AWS以外のクラウドサービス（Azure、GCP）にも対応したマルチクラウドIaCツールとして人気が高いです。HCL（HashiCorp Configuration Language）という独自の言語を使いますが、学習コストは低く、数週間で基礎を身につけられます。</p>
            <p>AWS CDKは、TypeScriptやPythonなどのプログラミング言語でAWSインフラを定義できるツールです。プログラミング経験のある方には学習しやすく、ロジックを含むインフラ定義が可能なため、複雑な構成にも対応できます。</p>
          </div>
        </div>
      </section>

      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SRE・DevOpsのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>SRE（Site Reliability Engineering）は、サービスの信頼性を技術的に担保するエンジニアリング分野です。Googleが提唱したコンセプトで、AWSなどのクラウドインフラのスキルをベースに、モニタリング、自動化、インシデント対応などを担当します。</p>
            <p>SREのキャリアパスは、インフラエンジニアやバックエンドエンジニアからの転向が一般的です。AWS+Docker+Kubernetes+Terraform+CI/CDのスキルセットに加え、プログラミング力（Python/Go）と運用経験があると、SREとしてのキャリアを構築しやすくなります。</p>
            <p>DevOpsエンジニアは、開発（Dev）と運用（Ops）の橋渡しをする役割です。CI/CDパイプラインの構築・運用、インフラの自動化、開発チームとの連携など、幅広い業務を担当します。AWSスキルをベースに、Jenkins/GitHub Actions/GitLab CIなどのCI/CDツールの経験が求められます。</p>
            <p>女性SRE/DevOpsエンジニアは非常に少ないですが、だからこそ企業からの注目度は高いです。論理的思考力と問題解決能力が求められる分野で、性別に関係なくスキルで評価される環境が整っています。</p>
          </div>
        </div>
      </section>

      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性AWSエンジニアの転職成功事例</h2>
          <div className="space-y-4">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>Aさん / 29歳 / ヘルプデスクからクラウドエンジニアへ</p>
              <p className="text-sm text-text-light leading-relaxed">「IT企業のヘルプデスクで3年働いた後、AWSの資格取得を目指しました。CLFとSAAを取得し、レバテックキャリア経由でSaaS企業のクラウドエンジニアに転職。Terraformを使ったインフラ構築を担当し、年収は350万から550万にアップしました。」</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#7c3aed" }}>Bさん / 34歳 / SES企業のサーバーエンジニアからSREへ</p>
              <p className="text-sm text-text-light leading-relaxed">「オンプレミスのサーバー運用をしていましたが、クラウドに興味を持ちAWSを独学。Docker+Kubernetes+Terraformのスキルも身につけ、メガベンチャーのSREチームに転職しました。年収は480万から800万と大幅アップ。フルリモートで育児との両立も実現しています。」</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>Cさん / 27歳 / バックエンドエンジニアからDevOpsへ</p>
              <p className="text-sm text-text-light leading-relaxed">「PythonのバックエンドエンジニアとしてAWSを使っていたことがきっかけで、インフラに興味を持ちました。AWS CDKとGitHub Actionsを使ったCI/CD構築の経験をアピールして、DevOpsエンジニアとして転職。年収は520万から700万にアップしました。」</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">学習ロードマップ</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>STEP 1：Linux基礎+ネットワーク基礎（1ヶ月）</h3>
              <p className="text-sm text-text-light leading-relaxed">Linuxのコマンド操作、TCP/IPの基礎、DNSやHTTPの仕組みを学びます。インフラの土台となる知識なので、しっかり固めましょう。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>STEP 2：AWS基礎+CLF取得（1〜2ヶ月）</h3>
              <p className="text-sm text-text-light leading-relaxed">AWSの基本サービス（EC2, S3, VPC, RDS, IAM）を学び、AWS認定クラウドプラクティショナーを取得します。AWSの無料利用枠を使って実際にハンズオンで触りましょう。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>STEP 3：SAA取得+IaC学習（2〜3ヶ月）</h3>
              <p className="text-sm text-text-light leading-relaxed">ソリューションアーキテクトアソシエイト（SAA）を取得しながら、TerraformやCloudFormationでIaCの基礎を学びます。Docker/コンテナの基礎も並行して学習しましょう。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>STEP 4：転職活動（1〜3ヶ月）</h3>
              <p className="text-sm text-text-light leading-relaxed">IT特化型の転職エージェントに登録し、AWS求人を紹介してもらいます。資格とハンズオン経験をアピールし、クラウドエンジニアとしてのキャリアをスタートしましょう。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sec9" className="py-10">
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

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/infrastructure/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>インフラエンジニアガイド</h3>
              <p className="text-sm text-text-light">女性インフラエンジニアの転職事情</p>
            </a>
            <a href="/articles/python-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>Python×女性エンジニア</h3>
              <p className="text-sm text-text-light">求人動向・年収・学習ロードマップ</p>
            </a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの年収ガイド</h3>
              <p className="text-sm text-text-light">平均年収と年収アップの方法</p>
            </a>
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>キャリアパス設計ガイド</h3>
              <p className="text-sm text-text-light">5年後・10年後のキャリア設計</p>
            </a>
          </div>
        </div>
      </section>

      
      {/* 補足情報 1 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#0891b2" }}
            >
              押さえておくべきポイント
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  最新の市場動向を把握し、自分のスキルとの適合度を確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  複数の転職エージェントを活用して求人情報を幅広く収集する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  女性ならではの視点で企業の働きやすさを事前に確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  産休育休制度の取得実績やリモートワークの運用実態をチェックする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  長期的なキャリアプランを見据えた判断をする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  先輩女性エンジニアの体験談やロールモデルから学ぶ
                </span>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0891b2" }}
              >
                メリット
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                IT業界は技術力で評価される実力主義の傾向が強く、性別に関係なくスキルに応じた公正な待遇を受けやすい環境です。転職エージェントを活用することで、自分の市場価値を客観的に把握し、最適な条件での転職を実現できます。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#7c3aed" }}
              >
                注意点
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度の充実度やリモートワークの可否、女性管理職の比率なども含めて総合的に評価しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 補足情報 2 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#0891b2" }}
            >
              押さえておくべきポイント
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  最新の市場動向を把握し、自分のスキルとの適合度を確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  複数の転職エージェントを活用して求人情報を幅広く収集する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  女性ならではの視点で企業の働きやすさを事前に確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  産休育休制度の取得実績やリモートワークの運用実態をチェックする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  長期的なキャリアプランを見据えた判断をする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  先輩女性エンジニアの体験談やロールモデルから学ぶ
                </span>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0891b2" }}
              >
                メリット
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                IT業界は技術力で評価される実力主義の傾向が強く、性別に関係なくスキルに応じた公正な待遇を受けやすい環境です。転職エージェントを活用することで、自分の市場価値を客観的に把握し、最適な条件での転職を実現できます。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#7c3aed" }}
              >
                注意点
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度の充実度やリモートワークの可否、女性管理職の比率なども含めて総合的に評価しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 補足情報 3 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#0891b2" }}
            >
              押さえておくべきポイント
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  最新の市場動向を把握し、自分のスキルとの適合度を確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  複数の転職エージェントを活用して求人情報を幅広く収集する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  女性ならではの視点で企業の働きやすさを事前に確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  産休育休制度の取得実績やリモートワークの運用実態をチェックする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  長期的なキャリアプランを見据えた判断をする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  先輩女性エンジニアの体験談やロールモデルから学ぶ
                </span>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0891b2" }}
              >
                メリット
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                IT業界は技術力で評価される実力主義の傾向が強く、性別に関係なくスキルに応じた公正な待遇を受けやすい環境です。転職エージェントを活用することで、自分の市場価値を客観的に把握し、最適な条件での転職を実現できます。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#7c3aed" }}
              >
                注意点
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度の充実度やリモートワークの可否、女性管理職の比率なども含めて総合的に評価しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 補足情報 4 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#0891b2" }}
            >
              押さえておくべきポイント
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  最新の市場動向を把握し、自分のスキルとの適合度を確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  複数の転職エージェントを活用して求人情報を幅広く収集する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  女性ならではの視点で企業の働きやすさを事前に確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  産休育休制度の取得実績やリモートワークの運用実態をチェックする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  長期的なキャリアプランを見据えた判断をする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  先輩女性エンジニアの体験談やロールモデルから学ぶ
                </span>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0891b2" }}
              >
                メリット
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                IT業界は技術力で評価される実力主義の傾向が強く、性別に関係なくスキルに応じた公正な待遇を受けやすい環境です。転職エージェントを活用することで、自分の市場価値を客観的に把握し、最適な条件での転職を実現できます。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#7c3aed" }}
              >
                注意点
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度の充実度やリモートワークの可否、女性管理職の比率なども含めて総合的に評価しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

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
