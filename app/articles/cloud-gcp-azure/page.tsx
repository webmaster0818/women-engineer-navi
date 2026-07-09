import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性クラウドエンジニア転職ガイド（GCP・Azure）｜年収・資格・未経験から",
  description:
    "GCP・Azureを軸にした女性クラウドエンジニアの転職ガイド。AWSとの違い、マルチクラウド需要、平均年収（20代約480万〜40代約700万）、Google Cloud認定・Azure認定（AZ-104/AZ-305）、未経験・インフラからのロードマップ、キャリアパスを実データで解説します。",
  alternates: { canonical: "/articles/cloud-gcp-azure/" },
  openGraph: {
    title: "女性クラウドエンジニア転職ガイド（GCP・Azure）｜年収・資格・未経験から",
    description:
      "GCP・Azure中心の女性クラウドエンジニア転職ガイド。AWSとの違い・マルチクラウド需要・年収・Google Cloud/Azure認定資格・ロードマップを実データで解説。",
    url: "https://women-engineer.com/articles/cloud-gcp-azure/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性クラウドエンジニア転職ガイド（GCP・Azure）｜年収・資格・未経験から",
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
    "GCP・Azure中心の女性クラウドエンジニア転職ガイド。AWSとの違い・マルチクラウド需要・年収・Google Cloud/Azure認定資格・ロードマップ・キャリアパスを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/cloud-gcp-azure/",
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer.com" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer.com/articles/" },
    { "@type": "ListItem", position: 3, name: "クラウドエンジニア（GCP・Azure）転職ガイド", item: "https://women-engineer.com/articles/cloud-gcp-azure/" },
  ],
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "GCPとAzure、女性が転職で学ぶならどちらがおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "目指す業界で選ぶのがおすすめです。BigQueryによるデータ分析基盤や機械学習・Kubernetes（GKE発祥）に強いGCPは、Web系・SaaS・データ活用企業で需要が伸びています。一方Azureは、Microsoft 365やActive Directoryと統合でき、Windows資産を持つ大企業・製造業・金融などエンタープライズで採用が拡大中です。2026年時点では企業の約8〜9割がマルチクラウドを採用しているため、片方を深く学んだ後にもう片方へ広げると市場価値が上がります。まずAZ-900（Azure基礎）やGoogle Cloud Digital Leaderなど入門資格で全体像をつかむのが王道です。",
      },
    },
    {
      "@type": "Question",
      name: "GCP・Azureエンジニアの年収はAWSと比べて高いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "クラウドエンジニア全体の平均年収はおよそ550万〜600万円で、ITエンジニア全体平均（約460万円）を大きく上回ります。プラットフォーム別の正社員相場はAWSが約400〜600万円、GCPが約500〜800万円、Azureが約600〜800万円とされ、GCP・Azureは扱える人材が相対的に希少なため高めに出る傾向があります。設計・構築の上流を担うと650〜800万円超、クラウドアーキテクトやハイクラスでは1,000万円以上も現実的。フリーランスではAWS/Azure/GCPいずれも平均単価73〜76万円台（年収換算884万〜912万円）です。",
      },
    },
    {
      "@type": "Question",
      name: "インフラ未経験・他職種からでもGCP/Azureクラウドエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。ネットワーク・OS・Linuxの基礎 → クラウドの入門資格（AZ-900 / Google Cloud Digital Leader）→ 仮想マシン・ストレージ・ネットワークなどIaaSの構築 → IaC（Terraform）→ コンテナ（Docker/Kubernetes）の順で進めるのが定石です。AZ-104（Azure管理者）やAssociate Cloud Engineer（GCP）まで取り、無料枠で実際に環境を構築した手順をポートフォリオ化すると、未経験・ポテンシャル採用でも評価されます。学習期間は1日2〜3時間で半年〜1年が目安です。",
      },
    },
    {
      "@type": "Question",
      name: "クラウドエンジニアは女性が産休・育休後も働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすい職種のひとつです。クラウドはコード（IaC）で構築・運用するため物理的なデータセンター作業がほぼなく、フルリモート求人が豊富。Terraformの構成ファイルやアーキテクチャ図など成果が客観的に残るので、時短勤務でも評価されやすいのが特徴です。ただし運用監視やオンコール（障害対応の当番）の有無は企業差が大きいため、リモート運用の実態・夜間対応の体制・女性管理職比率を事前に確認しましょう。求人票に出ない実態は女性のキャリアに詳しいエージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "GCP/Azure転職におすすめの認定資格は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Azureは役割別に体系化されており、入門のAZ-900（Fundamentals）→ AZ-104（Administrator）→ 上流設計のAZ-305（Solutions Architect Expert）が王道ルートです。GCPはGoogle Cloud Digital Leader → Associate Cloud Engineer → Professional Cloud Architect（クラウド業界3年以上・GCP構築1年以上が推奨）の順。最短で転職を狙うならAZ-104やAssociate Cloud Engineer、上流志向ならAZ-305やProfessional Cloud Architectが評価されます。データ分析職を狙うならProfessional Data Engineer（BigQuery中心）も有効です。",
      },
    },
    {
      "@type": "Question",
      name: "クラウドエンジニアはオンコールや夜間対応が必ずあるのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "必ずあるわけではなく、担当領域と企業の体制次第です。一般に、設計・構築が中心のポジションや社内向けシステムではオンコールがない現場も多い一方、24時間稼働のサービスを運用するポジションでは輪番制のオンコールや夜間メンテナンスが発生することがあります。輪番の人数・頻度・手当・代休の有無で負担は大きく変わるため、応募前に「オンコールの有無と体制」「夜間作業の頻度」を確認しましょう。求人票に書かれていないことも多いので、エージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "時短勤務や子育て中でもクラウドエンジニアとして評価されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "評価されやすい構造を持つ職種です。クラウドはTerraformの構成やアーキテクチャ図、削減したクラウド費用など成果が客観的な形で残るため、一般に勤務時間の長さよりアウトプットで評価されやすい傾向があります。またGoogle Cloud認定・Azure認定は世界共通の基準としてスキルを証明してくれるので、時短勤務中や復帰直後でも実力を示しやすいのが強みです。ただし評価制度の運用は企業差が大きいため、時短勤務者の昇給・昇格の実例や、育児中社員の働き方を面接やエージェント経由で確認しておくと安心です。",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
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
              { label: "クラウドエンジニア（GCP・Azure）転職ガイド" },
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
              女性クラウドエンジニア転職ガイド（GCP・Azure）
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                AWS以外のGCP・Azure・マルチクラウドで広がるキャリアを実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. クラウドエンジニアとは（GCP・AzureとAWSの違い）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 女性がクラウド分野で長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 必要なスキルと認定資格（GCP・Azure）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 年収相場（年代別・プラットフォーム別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 求人動向とマルチクラウドの将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験・インフラから目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. クラウドエンジニアのキャリアパス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
              <li><a href="#sec11" className="hover:underline" style={{ color: "#7c3a55" }}>11. 女性がクラウドエンジニアとして働くリアル</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">クラウドエンジニアとは（GCP・AzureとAWSの違い）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              クラウドエンジニアは、Google Cloud（GCP）・Microsoft Azure・AWSといったパブリッククラウド上に、サーバー・ネットワーク・データベース・データ分析基盤などのインフラを設計・構築・運用する職種です。従来のオンプレミス（自社サーバー）と違い、物理機器を触らず、すべてをコード（IaC）と管理画面で操作するのが特徴です。
            </p>
            <p>
              業務は、(1)仮想マシン・ストレージ・ネットワークなどIaaSの構築、(2)Terraformによるインフラのコード化（IaC）、(3)DockerやKubernetesを使ったコンテナ基盤の運用、(4)権限・ID設計とセキュリティ、(5)オンプレからクラウドへの移行（マイグレーション）やマルチクラウド連携の設計、(6)BigQueryやSynapse Analyticsなどのデータ分析基盤の構築など。AWS以外のGCP・Azureを軸にすると、扱える人材が相対的に希少で市場価値が出やすいのがポイントです。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>AWS・GCP・Azureの違い（ざっくり比較）</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#efe3d8" }}>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>クラウド</th>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>強み・特徴</th>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>多い導入先</th>
                  </tr>
                </thead>
                <tbody className="text-text-light">
                  <tr>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>AWS</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>サービス数とシェアが最大。求人数も最多で情報が豊富</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Web系・スタートアップ全般</td>
                  </tr>
                  <tr style={{ backgroundColor: "#f0e7dd" }}>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#7c3a55", color: "#7c3a55" }}>GCP</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>BigQueryのデータ分析・機械学習・Kubernetes（GKE発祥）に強い</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>データ活用企業・SaaS・広告/メディア</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#7c3a55", color: "#7c3a55" }}>Azure</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Microsoft 365・Active Directory連携。Windows資産との親和性が高い</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>大企業・製造業・金融・公共</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-text-light text-sm mt-4 leading-relaxed">
              この記事は、シェア最大のAWSではなく、<strong>需要が伸びるGCP・Azure、そして両方をまたぐマルチクラウド</strong>を軸に解説します。たとえば「Office 365のデータをGCPのBigQueryで分析する」といった、Azure＋GCPのニッチで強力な構成は大企業を中心に増えています。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がクラウド分野で長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材の女性比率はまだ2割程度ですが、クラウドはオンプレ時代のインフラと違い「物理作業がない」ことから、女性が長くキャリアを築きやすい分野です。GCP・Azureはこれから扱える人を増やしたい企業が多く、未経験・第二新卒の採用枠も広がっています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. コードで構築するからフルリモート求人が豊富</h3>
              <p className="text-text-light text-sm leading-relaxed">クラウドはTerraformなどのコード（IaC）と管理画面で完結。データセンターでの物理作業がなく、フルリモート求人が多いため、育児・介護と両立しながら働けます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 成果がコードと構成図で残り時短でも評価される</h3>
              <p className="text-text-light text-sm leading-relaxed">構築したTerraform構成、アーキテクチャ図、削減したクラウド費用など成果が客観的に残るため、勤務時間の長さではなく実力で評価されやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 認定資格でスキルを客観的に証明できる</h3>
              <p className="text-text-light text-sm leading-relaxed">Google Cloud認定・Azure認定は世界共通の基準。資格でスキルを示せるため、ブランクや非IT出身でも実力を正当に評価してもらいやすく、復帰時の交渉材料になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. マルチクラウド需要で選択肢が多い</h3>
              <p className="text-text-light text-sm leading-relaxed">企業の約8〜9割がマルチクラウドを採用する時代。GCP・Azureを扱える人材は不足気味で、求人が多いほど「働きやすい会社」を選びやすく、条件交渉の余地も広がります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 スキルと資格 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルと認定資格（GCP・Azure）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              クラウドエンジニアは「ネットワーク・OSの基礎」を土台に、各クラウドのサービス、IaC、コンテナを積み上げます。GCP・Azureとも<strong>入門 → 構築（Associate）→ 上流設計（Architect/Expert）</strong>と役割別に資格が体系化されているので、現在地に合わせて段階的に取得するのが効率的です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>領域・資格</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>具体例</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>基礎スキル</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ネットワーク / Linux / OS / セキュリティ・権限設計</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>どのクラウドでも土台。CCNAレベルの知識があると有利</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#7c3a55", color: "#7c3a55" }}>Azure認定</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>AZ-900（基礎）→ AZ-104（管理者）→ AZ-305（アーキテクト）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>AZ-104で転職、AZ-305で上流設計。VM/ストレージ/Entra ID（旧Azure AD）が範囲</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#7c3a55", color: "#7c3a55" }}>Google Cloud認定</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Digital Leader → Associate Cloud Engineer → Professional Cloud Architect</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Architectは業界3年・GCP構築1年が推奨。データ職はProfessional Data Engineerも</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>IaC・自動化</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Terraform / Git / CI/CD</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>GCP公式もTerraformを推奨。マルチクラウド対応で必須スキル化</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>コンテナ・データ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Docker / Kubernetes（GKE/AKS）/ BigQuery / Synapse</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Kubernetesとデータ分析基盤は年収アップに直結</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            実務に直結させるコツは、<strong>「OS＋クラウド」の組み合わせ</strong>で資格を取り、無料枠で実際に環境を構築してみること。Terraform・Kubernetesまで触れると、AWS人材との差別化になり単価が上がりやすくなります。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収相場（年代別・プラットフォーム別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              クラウドエンジニア全体の平均年収はおよそ<strong>550万〜600万円</strong>で、ITエンジニア全体平均（約460万円）を大きく上回ります。GCP・Azureは扱える人材が相対的に少なく、相場が高めに出やすいのが特徴です。下表は各種調査をもとにした目安です（企業・地域・スキルで変動します）。
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
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約480万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>入門資格＋構築経験で早期に上振れも</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約620万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>設計・構築の上流で700万円超も</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約700万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>アーキテクト／ハイクラスは1,000万円以上も</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月単価 約73〜76万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>年収換算884万〜912万円。AWS/Azure/GCPほぼ同水準</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>プラットフォーム別の正社員相場</h3>
            <ul className="space-y-2 text-sm text-text-light mb-5">
              <li>・<strong>AWS</strong>：約400〜600万円（求人数最多。1,000万円以上の求人も一定数）</li>
              <li>・<strong style={{ color: "#7c3a55" }}>GCP</strong>：約500〜800万円（データ基盤・機械学習で高単価化）</li>
              <li>・<strong style={{ color: "#7c3a55" }}>Azure</strong>：約600〜800万円（エンタープライズ案件で高め）</li>
            </ul>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>上流資格</strong>（AZ-305 / Professional Cloud Architect）で設計を担う</li>
              <li>② <strong>希少スキル</strong>（Terraform×Kubernetes、BigQueryデータ基盤、マルチクラウド設計）を掛け合わせる</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。GCP/Azure人材の市場価値を客観評価してもらう</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 求人動向・将来性 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向とマルチクラウドの将来性</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              全業界のDXとクラウド移行が進み、クラウド人材は慢性的に不足しています。2026年現在、調査対象企業の<strong>約87%が何らかの形でマルチクラウドを利用</strong>しており、企業の関心は「どのクラウドを使うか」から「複数をどう使い分けるか」へ移行。マルチクラウドは“挑戦的アーキテクチャ”から“標準的アーキテクチャ”になりつつあり、各クラウドの得意分野を選定・連携できる<strong>設計力を持つ人材の希少価値</strong>が高まっています。
            </p>
            <p>
              伸びている領域は、<strong style={{ color: "#7c3a55" }}>GCPのデータ分析基盤（BigQueryによるペタバイト級分析・機械学習）</strong>と、<strong style={{ color: "#7c3a55" }}>AzureのエンタープライズDX（Microsoft 365・Active Directory連携、製造業・金融）</strong>。「Office 365のデータをGCPで分析する」といったAzure＋GCP構成や、BigQuery OmniでAWS/Azureのデータを横断分析する案件も増加中です。ベンダーロックインを避けるため、コンテナ・オープンソースを活用したクラウド非依存の設計ができる人は今後さらに重宝されます。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験・インフラから目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>1日2〜3時間の学習で<strong>半年〜1年</strong>が目安。インフラ経験者はSTEP1を短縮できます。GCP・Azureのどちらを軸にするかは、行きたい業界（データ活用＝GCP／エンタープライズ＝Azure）で選びましょう。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "ネットワーク・Linux・OSの基礎を固める", "クラウドの土台はインフラの基礎。IPアドレス・DNS・Linux操作・セキュリティ/権限の考え方を理解。CCNAレベルがあると後が楽です。"],
              ["STEP2", "入門資格で全体像をつかむ", "Azure志望はAZ-900、GCP志望はGoogle Cloud Digital Leaderを取得。クラウドの主要サービスと用語を体系的にインプット。"],
              ["STEP3", "IaaSを無料枠で構築する", "仮想マシン・ストレージ・仮想ネットワークを実際に作成。AzureならVM＋Entra ID、GCPならCompute Engine＋VPCで手を動かす。"],
              ["STEP4", "構築系の資格を取る", "AZ-104（Azure管理者）またはAssociate Cloud Engineer（GCP）。転職市場で最も評価されやすい実務レベルの証明になります。"],
              ["STEP5", "IaC・コンテナを習得", "Terraformでインフラをコード化し、Docker→Kubernetes（AKS/GKE）へ。AWS人材と差別化でき、単価アップに直結します。"],
              ["STEP6", "構築手順をポートフォリオ化", "Terraform構成・アーキテクチャ図・構築手順をGitHubやブログで公開。データ志望ならBigQueryで簡単な分析基盤を作ると強い実績に。"],
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
          <h2 className="text-2xl font-bold mb-6">クラウドエンジニアのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>クラウドは「設計力」と「希少スキル」が積み上がる職種で、キャリアの選択肢が広いのが魅力です。GCP・Azureを軸にした代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>上流・設計を極める</h3><p className="text-sm text-text-light">クラウドアーキテクト（AZ-305 / Professional Cloud Architect）。マルチクラウドの全体設計を担い高年収を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>SRE / DevOps</h3><p className="text-sm text-text-light">Kubernetes・IaC・CI/CDを武器に、信頼性と自動化を担うSRE／DevOpsエンジニアへ。需要が非常に高い領域。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>データ領域へ広げる</h3><p className="text-sm text-text-light">BigQueryやSynapseを軸にデータエンジニア／データ基盤へ。GCPの強みを活かせる伸び盛りの進路。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>独立・柔軟な働き方</h3><p className="text-sm text-text-light">フリーランスとして月単価70万円台〜の高単価・リモート案件へ。ライフステージに合わせやすい働き方。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>GCP・Azureの技術を正当に評価してもらうには、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーがGCP/Azureの認定資格や構築経験を理解した提案をしてくれます。クラウド系のリモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。クラウド・インフラ職のマッチングと年収交渉力に定評があります。マルチクラウド人材の市場価値を引き出すのが得意です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やフルリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。オンコールの有無など、求人票に出ない働き方の実態を確認したい人に最適です。</p>
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
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・オンプレ運用→Azure）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SIerでオンプレ運用監視 / 年収440万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">大手製造業のAzureクラウド移行担当 / 年収640万円・週4リモート</p></div>
              </div>
              <p className="text-sm text-text-light">AZ-900→AZ-104→AZ-305と段階的に取得し、Microsoft 365連携の知識を活かしてエンタープライズのクラウド移行案件へ。年収200万円アップと週4リモートを実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（20代後半・データ事務→GCP）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">マーケ部門のデータ集計事務 / 年収360万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SaaS企業のGCPクラウド／データ基盤 / 年収520万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">Google Cloud Digital Leader→Associate Cloud Engineerを取得し、BigQueryで分析基盤を作る学習をポートフォリオ化。データ事務の経験を強みに、未経験可のSaaS企業へ転職しフルリモート環境を得ました。</p>
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

      {/* sec11 女性が働くリアル（2026-07-09追記） */}
      <section id="sec11" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がクラウドエンジニアとして働くリアル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              最後に、実際に女性がクラウドエンジニアとして働くうえで気になりやすいポイントを、働き方の観点から補足します。なお、年収や女性比率などの具体的な数値は<a href="/articles/data/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアのデータ集</a>と<a href="/articles/salary-by-job/" className="underline" style={{ color: "#7c3a55" }}>職種別の年収ガイド</a>に出典付きでまとめています。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>職種との相性｜リモート親和性は高いが「担当領域」で働き方が変わる</h3>
              <p className="text-sm text-text-light leading-relaxed">クラウドの構築・運用はコード（IaC）と管理画面で完結しやすく、一般にリモートワークとの相性が高い職種です。一方で、運用監視を含むポジションではオンコール（障害対応の当番）や夜間メンテナンスの有無が現場によって分かれます。「クラウド＝必ず自由な働き方」ではなく、設計・構築中心か、運用・監視中心かという担当領域で働き方が大きく変わる点は、応募前に押さえておきましょう。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>産休育休・時短との相性｜IaCと資格が復帰のしやすさを支える</h3>
              <p className="text-sm text-text-light leading-relaxed">構築プロジェクトは案件単位で区切りを付けやすく、IaC化された環境は構成がコードとして残るため作業が属人化しにくく、一般に引き継ぎ・復帰がしやすい傾向があります。Google Cloud認定・Azure認定は、ブランク後も客観的なスキル証明として機能します（有効期限と更新条件は要確認）。復帰の進め方は<a href="/articles/after-maternity/" className="underline" style={{ color: "#7c3a55" }}>産休・育休後の復帰ガイド</a>や<a href="/articles/mama-engineer/" className="underline" style={{ color: "#7c3a55" }}>ママエンジニアの働き方</a>も参考にしてください。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>キャリアパス｜隣接職種と行き来しながら負荷を調整できる</h3>
              <p className="text-sm text-text-light leading-relaxed"><a href="/articles/infrastructure/" className="underline" style={{ color: "#7c3a55" }}>インフラエンジニア</a>からクラウドへ、クラウドから<a href="/articles/sre-devops/" className="underline" style={{ color: "#7c3a55" }}>SRE・DevOps</a>や<a href="/articles/data-engineer/" className="underline" style={{ color: "#7c3a55" }}>データエンジニア</a>へ——クラウドは隣接職種と行き来しやすいのが特徴です。時短勤務の期間は運用改善やコスト最適化に軸足を置き、フルタイム復帰後に設計・アーキテクチャへ広げる、といったライフステージに合わせた調整もしやすい構造です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>現実的な注意点｜事前に確認しておきたい3つのこと</h3>
              <p className="text-sm text-text-light leading-relaxed">正直な注意点として、(1)クラウドサービスは機能更新が速く、継続的なキャッチアップが働き続ける前提になること、(2)「クラウドエンジニア募集」でも実態が夜勤シフトの監視オペレーターに近い求人が混ざっていること、(3)時短勤務者の評価運用は企業差が大きいこと、の3点は事前確認が必要です。求人票だけで判断が難しい部分は、面接で具体的に質問するか、エージェント経由で実態を確認しましょう。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <p className="text-sm text-text-light leading-relaxed">リモート・オンコール・時短など働き方の条件を重視した転職では、エージェント選びが結果を左右します。<a href="/diagnosis/" className="underline font-bold" style={{ color: "#7c3a55" }}>無料のエージェント診断</a>で自分の状況に合うエージェントを確認し、<a href="/ranking/" className="underline font-bold" style={{ color: "#7c3a55" }}>おすすめエージェントランキング</a>と併せて活用してください。</p>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/aws-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>AWS×女性エンジニア</h3><p className="text-sm text-text-light">シェア最大のAWSで目指すクラウド転職</p></a>
            <a href="/articles/infrastructure/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>インフラエンジニア転職ガイド</h3><p className="text-sm text-text-light">クラウドの土台になる基礎職種</p></a>
            <a href="/articles/sre-devops/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>SRE・DevOpsエンジニア転職ガイド</h3><p className="text-sm text-text-light">Kubernetes・IaCを活かす次の一歩</p></a>
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの資格ガイド</h3><p className="text-sm text-text-light">転職に効くIT資格の選び方</p></a>
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
