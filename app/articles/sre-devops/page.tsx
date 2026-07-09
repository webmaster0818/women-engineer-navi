import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性SRE・DevOpsエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
  description:
    "女性SRE・DevOpsエンジニアの転職ガイド。平均年収（SRE約850万〜950万、DevOps約678万）や年代別相場、Terraform・Kubernetes・SLO/SLIなど必要スキル、インフラからの移行ロードマップ、求人動向、キャリアパスを実データで解説。長く働きやすい理由とおすすめエージェントも紹介します。",
  alternates: { canonical: "/articles/sre-devops/" },
  openGraph: {
    title: "女性SRE・DevOpsエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
    description:
      "女性SRE・DevOpsエンジニアの年収・必要スキル・インフラからのロードマップ・求人動向・キャリアパスを実データで徹底解説。",
    url: "https://women-engineer.com/articles/sre-devops/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性SRE・DevOpsエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
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
    "女性SRE・DevOpsエンジニアの年収・必要スキル・インフラからのロードマップ・求人動向・キャリアパスを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/sre-devops/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性SRE・DevOpsエンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SREエンジニアの平均年収はおよそ850万〜950万円と、エンジニア職種の中でも高水準です。年代別の目安は20代で420万〜850万円、30代で700万〜1,400万円、40代で1,100万〜1,800万円超。DevOpsエンジニアの平均は約678万円で、東京の都市部では初年度から年収1,000万円以上を提示する求人もあります。Terraform・Kubernetes・クラウド・可観測性のスキルが揃うほど単価が上がり、フリーランスでは月単価70万〜120万円の案件も珍しくありません。性別による給与差はスキルと経験で埋められる職種で、エージェント経由の年収交渉が有効です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもSRE・DevOpsエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "完全未経験からいきなりSRE・DevOpsを目指すのは難易度が高く、まずインフラエンジニアまたは開発エンジニアとして1〜2年の実務経験を積むのが王道です。Linux（LPIC/LinuC）→ネットワーク（CCNA）→AWS認定クラウドプラクティショナー（CLF）→ソリューションアーキテクト（SAA）の順で資格を取りつつ、Docker・Git・CI/CDを実務で触れていきます。その後、KubernetesやTerraform、SLO/SLI運用の経験を積むとSRE・DevOpsへ移行できます。インフラ運用や情報システム部門の経験がある女性は、その土台を活かして移行しやすい職種です。",
      },
    },
    {
      "@type": "Question",
      name: "SREとDevOpsエンジニアは何が違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DevOpsは「開発（Dev）と運用（Ops）の壁をなくして、速く安全にリリースし続ける」ための文化・手法で、DevOpsエンジニアはCI/CDパイプライン構築やIaC、コンテナ運用で開発生産性を高めます。SRE（Site Reliability Engineering）はGoogleが提唱した、DevOpsを具体的に実装する方法論で、SLO・エラーバジェット・トイル削減といった指標でシステムの信頼性をエンジニアリングします。両者は重なる部分が多く、求人でも近い技術スタック（Kubernetes・Terraform・Prometheusなど）を求められます。どちらも信頼性と自動化を軸にする点が共通です。",
      },
    },
    {
      "@type": "Question",
      name: "SRE・DevOpsはオンコールがあって女性は働きにくいのでは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "確かに障害対応のオンコール当番がある現場もありますが、SREの本質はトイル（手作業の繰り返し業務）を自動化で減らし、計画的に信頼性を高めることにあります。SLOやエラーバジェットで「どこまで止まってよいか」を数値合意するため、無制限の深夜対応を前提としない設計が進んでいます。フルリモート求人が多く、オンコールも輪番・手当・代休とセットで運用する企業が増加。応募時に、オンコールの頻度・体制・自動化の進み具合を確認すれば、育児と両立しやすい現場を選べます。",
      },
    },
    {
      "@type": "Question",
      name: "SRE・DevOps転職におすすめの転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "クラウド・コンテナのスキルを正当に評価してもらうならIT特化型のレバテックキャリアやGeekly、女性のキャリア継続を重視するならtype女性の転職エージェントがおすすめです。IT特化型はKubernetesやTerraformといった技術スタックを理解したアドバイザーが多く、高単価のSRE・DevOps求人と年収交渉に強みがあります。女性特化型はリモート・オンコール体制・産休育休実績などの働き方条件で求人を絞り込めます。技術評価と働きやすさの両面を担保するため、2〜3社の併用がベストです。",
      },
    },
    {
      "@type": "Question",
      name: "育児中でもSREのオンコール当番はこなせますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "現場の体制次第です。一般に、輪番の人数が多く自動化が進んでいる現場ほど1人あたりの負担は小さく、育児中のメンバーが担当時間帯を調整できる運用をとる企業もあります。逆に少人数のチームで24時間対応している現場では負担が大きくなりがちです。応募時には、輪番の人数と頻度・深夜アラートの実際の発生状況・当番の交代やスキップの柔軟性・手当や代休の有無を確認しましょう。社内基盤の担当や日中のみの対応など、オンコールのない（少ない）SREポジションも存在するため、条件を諦める必要はありません。",
      },
    },
    {
      "@type": "Question",
      name: "「SRE募集」の求人で入社前に確認すべきポイントは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "求人名がSREでも、実態が従来型の運用監視（手順書ベースの障害一次対応）に近いケースがあるため、業務内容の確認が重要です。具体的には、(1)SLOやエラーバジェットを実際に運用しているか、(2)トイル削減・自動化にどの程度の時間を使えているか、(3)IaCやCI/CDの整備状況、(4)オンコールの体制と頻度、を面接で質問しましょう。回答が具体的な企業ほどSREの考え方が根付いている可能性が高いといえます。働き方の条件と合わせて、エージェント経由で現場の実態を確認するのも有効です。",
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
              { label: "SRE・DevOpsエンジニア転職ガイド" },
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
              女性SRE・DevOpsエンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収・必要スキル・インフラからの道のりを実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. SRE・DevOpsエンジニアとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 女性がSRE・DevOpsで長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 必要なスキルとツール</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. SRE・DevOpsの年収相場（年代別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験・インフラから目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. SRE・DevOpsのキャリアパス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
              <li><a href="#sec11" className="hover:underline" style={{ color: "#7c3a55" }}>11. 女性がSRE・DevOpsエンジニアとして働くリアル</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SRE・DevOpsエンジニアとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SRE（Site Reliability Engineering＝サイト信頼性エンジニアリング）は、Googleが2003年に提唱した、ソフトウェアエンジニアリングの考え方でシステムの「信頼性」を維持・向上させる職種です。一方DevOpsは、開発（Dev）と運用（Ops）の壁をなくし、速く・安全にリリースし続けるための文化・手法で、DevOpsエンジニアはその仕組みづくりを担います。両者は重なる部分が多く、求人でもほぼ同じ技術スタックが求められます。
            </p>
            <p>
              具体的な業務は、(1)<strong>SLI/SLOの設計と監視</strong>（どこまで止まってよいかを数値で定義）、(2)<strong>CI/CDパイプラインの構築</strong>（GitHub Actions・GitLab CI・Jenkinsで自動テスト・自動デプロイ）、(3)<strong>IaC（Infrastructure as Code）</strong>によるインフラのコード化（Terraform・Ansible）、(4)<strong>コンテナ運用</strong>（Docker・Kubernetes）、(5)<strong>オブザーバビリティ基盤の構築</strong>（Prometheus＋Grafana・Datadog・New Relic）など。
            </p>
            <p>
              SREの中核概念が<strong>エラーバジェット</strong>です。たとえば「SLO 99.9%」なら月間43.2分まで障害が許容され、この予算が残るうちは新機能リリースを進め、使い切ったら信頼性改善に集中する、という意思決定の仕組みになります。さらにSREは<strong>トイル（価値を生まない繰り返しの手作業）</strong>を自動化で減らし、業務時間の50%以上をエンジニアリングに充てることを目指します。「壊れにくく、直しやすく、勝手に回る」仕組みを作るのが、この職種の面白さです。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>SRE・DevOpsの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>信頼性設計（SLI / SLO / エラーバジェット / インシデント対応）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>CI/CDパイプライン構築（GitHub Actions / GitLab CI / Jenkins）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>IaC・自動化（Terraform / Ansible）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>コンテナ・オーケストレーション（Docker / Kubernetes）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>監視・可観測性（Prometheus / Grafana / Datadog / ELK）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>クラウド構築・運用（AWS / GCP / Azure）</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がSRE・DevOpsで長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材の女性比率はまだ2割程度ですが、SRE・DevOpsは「自動化で人手と属人性を減らす」という思想そのものが、ライフイベントと両立しやすい働き方につながります。高単価かつリモート中心の求人が多く、女性がキャリアを長く伸ばしやすい領域です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. フルリモートが多く高単価</h3>
              <p className="text-text-light text-sm leading-relaxed">クラウド・コンテナ運用はオンラインで完結しやすく、フルリモート求人が豊富。SREの平均年収は約850万〜950万円と高く、通勤負担を減らしながら高い収入を得られます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. トイル削減＝深夜対応を減らす職種</h3>
              <p className="text-text-light text-sm leading-relaxed">SREは手作業の繰り返し（トイル）を自動化で減らすのが本分。オンコールもSLOとエラーバジェットで「止めてよい範囲」を数値合意するため、無制限の深夜対応を前提としない設計が進んでいます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 成果がダッシュボードで可視化される</h3>
              <p className="text-text-light text-sm leading-relaxed">削減したトイル時間、改善した稼働率、デプロイ頻度などが数値・ダッシュボードに残るため、勤務時間ではなく成果で評価されやすく、時短勤務でも実力が認められます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 慢性的な人材不足で交渉力が高い</h3>
              <p className="text-text-light text-sm leading-relaxed">SRE・プラットフォームエンジニアは2026年のIT職種で上限レンジが特に高い希少職。人材が足りないからこそ、リモート・時短・オンコール体制といった働き方の条件を女性側から交渉しやすくなります。</p>
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
              SRE・DevOpsは「開発」と「運用」の両方にまたがる職種ですが、すべてを最初から完璧にする必要はありません。まず<strong>Linux・ネットワーク・クラウドの基礎</strong>を固め、そこに<strong>コンテナ（Docker / Kubernetes）とIaC（Terraform）</strong>を積み上げていくのが定石です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>スキル領域</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>代表的なツール</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>OS・ネットワーク基礎</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Linux / TCP-IP / DNS / Bash</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>すべての土台。LPIC/LinuC・CCNAで体系化できる</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>クラウド</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>AWS / GCP / Azure</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>AWS認定（CLF→SAA）が書類通過率を上げる定番</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>コンテナ・基盤</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Docker / Kubernetes</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>K8sはSRE/DevOpsの中核。CKA資格で証明できる</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>IaC・CI/CD</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Terraform / Ansible / GitHub Actions / Jenkins</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自動化スキルは単価アップに直結。高需要</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>監視・可観測性</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Prometheus / Grafana / Datadog / ELK</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>SLI/SLOを計測しエラーバジェットを可視化する</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>プログラミング</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Python / Go / シェルスクリプト</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自動化ツール作成に必須。Go・Pythonが主流</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            2026年時点では、<strong>Terraform×Kubernetes×クラウド</strong>のスキルセットが揃うと市場価値が一気に上がり、月単価が70万円から120万円へアップした事例もあります。加えて、開発・運用チームの橋渡しをする<strong>コミュニケーション力</strong>も評価される、技術と対人の両方が活きる職種です。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SRE・DevOpsの年収相場（年代別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SREエンジニアの平均年収はおよそ<strong>850万〜950万円</strong>で、エンジニア職種の中でも上位。DevOpsエンジニアの平均は<strong>約678万円</strong>です。年代・経験・扱うツールで大きく差が出ます。下表は各種調査をもとにしたSREの目安です（企業・地域・スキルにより変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約420万〜850万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ジュニア〜ミドル。基礎＋クラウドで上振れ</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約700万〜1,400万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>K8s・Terraform・SLO運用で大きく伸びる層</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約1,100万〜1,800万円超</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>リード・アーキテクト・プラットフォーム責任者</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月単価 約70万〜120万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Terraform×K8s×自動化で上限が大きく上がる</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            経験年数別では、ジュニア（3年未満）が400万〜550万円、ミドル（3〜7年）が600万〜800万円、シニア（7年以上）が850万〜1,200万円が目安。東京の都市部では、初年度から年収1,000万円以上を提示するSRE求人も見られます。
          </p>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>Kubernetes×Terraform×クラウド</strong>の3点セットを実務で固める（最も単価が動く）</li>
              <li>② <strong>SLO/エラーバジェット運用・可観測性設計</strong>など、信頼性の「設計」経験を積む</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。希少職ゆえ市場価値を客観評価してもらう</li>
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
              企業のクラウド移行とマイクロサービス化が全業界で進み、SRE・DevOpsの需要は急増しています。SRE／プラットフォームエンジニアは、2026年のIT職種の中で年収の上限レンジが特に高い領域とされ、その背景には「事業KPIへの影響を可視化しやすいこと」と「慢性的な人材不足」があります。
            </p>
            <p>
              特に伸びているのは、<strong>SaaS・スタートアップ（Kubernetesでのコンテナ基盤・GitOps）</strong>と、<strong>大規模Webサービス（SLO運用・オブザーバビリティ強化）</strong>。近年はAIによる運用自動化（AIOps）の文脈でも需要が拡大しています。これらはフルリモート求人が多く、女性が働き方を選びやすい領域です。一方で、信頼性の「設計」やプラットフォーム全体を担える人材は希少で、年収も高水準になります。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 未経験・インフラからのロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験・インフラから目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              SRE・DevOpsは「いきなり未経験から」は難易度が高い職種です。まず<strong>インフラエンジニアか開発エンジニアとして1〜2年の実務経験</strong>を積み、そこから移行するのが王道。インフラ運用や情報システム部門の経験がある女性は、その土台を活かせます。次の順序で進めると挫折しにくいです。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "Linux・ネットワークの基礎を固める", "LPIC/LinuCレベル1、CCNAで土台を体系化。コマンド操作・サーバー・ネットワークの仕組みを理解します。"],
              ["STEP2", "クラウドの基礎を学ぶ（AWS）", "AWS認定クラウドプラクティショナー（CLF）→ソリューションアーキテクト（SAA）。SAAは学習意欲と技術基礎の証明になり、書類通過率が上がります。"],
              ["STEP3", "インフラ/開発で1〜2年の実務", "運用・構築や開発の現場で経験を積む。「どんな現場を経験したか」が市場価値を決めます。Git・CI/CDにも実務で触れます。"],
              ["STEP4", "コンテナとIaCを習得", "Docker→Kubernetes（CKA資格）、Terraformでインフラのコード化を学ぶ。ここがSRE/DevOpsへの分岐点です。"],
              ["STEP5", "監視・SLO/SLI運用を経験", "Prometheus＋GrafanaやDatadogで監視を構築し、SLO・エラーバジェットの考え方を実務で身につけます。"],
              ["STEP6", "ポートフォリオ・実績を整理", "TerraformでのIaC・CI/CDパイプライン・K8sマニフェストなどをGitHubで公開。改善したトイル・稼働率を数値で語れるようにします。"],
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
          <h2 className="text-2xl font-bold mb-6">SRE・DevOpsのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>SRE・DevOpsは「信頼性と自動化の設計力」が積み上がる職種で、希少性が高いぶんキャリアの選択肢も広いのが魅力です。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>技術を深める</h3><p className="text-sm text-text-light">シニアSRE → プラットフォームエンジニア／クラウドアーキテクト。大規模システムの信頼性を設計する専門家として、年収1,000万円超を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>マネジメント</h3><p className="text-sm text-text-light">SREマネージャー／エンジニアリングマネージャー（EM）。信頼性方針やオンコール体制、チームの開発生産性をリードする道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>領域を広げる</h3><p className="text-sm text-text-light">セキュリティ（DevSecOps）／データ基盤／クラウドコスト最適化（FinOps）へ。希少スキルを掛け合わせて市場価値を高める道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>独立・柔軟な働き方</h3><p className="text-sm text-text-light">フリーランスSRE/DevOpsとして月単価70万〜120万円の高単価・リモート案件へ。ライフステージに合わせて働き方を選べる。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>SRE・DevOpsのクラウド／コンテナスキルを正当に評価してもらうには、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーがKubernetesやTerraformといった技術スタックを理解した提案をしてくれます。高単価のSRE・DevOps求人やリモート案件も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと年収交渉力に定評があり、希少なSRE・DevOps人材の市場価値を引き出してくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモート、オンコール体制など、女性のキャリア継続に配慮した求人を中心に紹介。働き方の条件で絞り込みたい人に最適です。</p>
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
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Aさん（30代前半・インフラ運用→SRE）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SESのインフラ運用エンジニア / 年収450万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SaaS企業のSRE（AWS／K8s）/ 年収750万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">運用の傍らAWS SAAとCKAを取得し、Terraformでの自動化実績を整理。IT特化型エージェントで「トイルを削減した稼働改善」を数値で訴求し、年収300万円アップとフルリモートを同時に実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Bさん（20代後半・バックエンド→DevOps）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">受託開発のバックエンドエンジニア / 年収430万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">自社開発企業のDevOpsエンジニア / 年収620万円</p></div>
              </div>
              <p className="text-sm text-text-light">開発経験を土台にDocker／GitHub ActionsでのCI/CD構築を独学し、Terraformのポートフォリオを公開。産休育休とオンコール輪番の実績がある自社開発企業に転職し、長く働ける基盤を得ました。</p>
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
          <h2 className="text-2xl font-bold mb-6">女性がSRE・DevOpsエンジニアとして働くリアル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              最後に、実際に女性がSRE・DevOpsエンジニアとして働くうえで気になりやすいポイントを、働き方の観点から補足します。年収や女性比率などの具体的な数値は<a href="/articles/data/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアのデータ集</a>と<a href="/articles/salary-by-job/" className="underline" style={{ color: "#7c3a55" }}>職種別の年収ガイド</a>に出典付きでまとめています。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>職種との相性｜働きやすさは「自動化の成熟度」でほぼ決まる</h3>
              <p className="text-sm text-text-light leading-relaxed">SRE・DevOpsは一般にリモート親和性の高い職種ですが、同じ職種名でも現場の負荷は大きく異なります。分かれ目は自動化と信頼性設計の成熟度です。トイル削減が進みSLOで対応範囲を数値合意している現場では計画的に働きやすい一方、自動化が進んでいない現場では突発対応に追われがちです。つまり「SREだから働きやすい」のではなく「SREの思想が実践されている現場だから働きやすい」——この違いを見極めることが、育児・介護と両立したい人ほど重要になります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>産休育休・時短との相性｜属人化を排除する文化が引き継ぎを助ける</h3>
              <p className="text-sm text-text-light leading-relaxed">SREの文化（IaC・手順の自動化・ポストモーテムの文書化）は属人化の排除そのものなので、一般に休業前の引き継ぎがしやすく、復帰後も構成やインシデント履歴がコードと文書で追える傾向があります。一方でツールの更新は速いため、復帰時には主要ツールのバージョン差分をキャッチアップする期間を見込んでおくと安心です。復帰の進め方は<a href="/articles/after-maternity/" className="underline" style={{ color: "#7c3a55" }}>産休・育休後の復帰ガイド</a>も参考にしてください。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>キャリアパス｜時期に応じて「軸足」を移せる</h3>
              <p className="text-sm text-text-light leading-relaxed"><a href="/articles/infrastructure/" className="underline" style={{ color: "#7c3a55" }}>インフラエンジニア</a>や<a href="/articles/backend/" className="underline" style={{ color: "#7c3a55" }}>バックエンド</a>からSREへ、SREから<a href="/articles/cloud-gcp-azure/" className="underline" style={{ color: "#7c3a55" }}>クラウドアーキテクト</a>やプラットフォームエンジニアへと、隣接領域と行き来しやすい職種です。時短勤務の期間は可観測性の改善や自動化ツール整備など区切りを付けやすい業務に軸足を置き、フルタイム復帰後に信頼性設計やオンコールを含む役割へ戻す、といった調整をしている現場もあります（体制は企業差が大きいため要確認）。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>現実的な注意点｜事前に確認しておきたい3つのこと</h3>
              <p className="text-sm text-text-light leading-relaxed">正直な注意点として、(1)「SRE募集」でも実態が従来型の運用監視に近い求人が混ざっていること（SLO運用・自動化の実態を面接で質問して見極める）、(2)オンコールの負担は輪番人数・アラート件数・代休運用で大きく変わるため具体的な数字で確認が必要なこと、(3)ツールチェーンの進化が速く継続的な学習が前提になること、の3点は押さえておきましょう。求人票で判断できない部分はエージェント経由での確認が確実です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <p className="text-sm text-text-light leading-relaxed">オンコール体制・リモート・時短など働き方の条件を重視した転職では、エージェント選びが結果を左右します。<a href="/diagnosis/" className="underline font-bold" style={{ color: "#7c3a55" }}>無料のエージェント診断</a>で自分の状況に合うエージェントを確認し、<a href="/ranking/" className="underline font-bold" style={{ color: "#7c3a55" }}>おすすめエージェントランキング</a>と併せて活用してください。</p>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/infrastructure/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>インフラエンジニア転職ガイド</h3><p className="text-sm text-text-light">SRE・DevOpsへの土台となる職種</p></a>
            <a href="/articles/aws-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>AWSエンジニアのキャリア</h3><p className="text-sm text-text-light">クラウドスキルで広がる道</p></a>
            <a href="/articles/backend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>バックエンドエンジニア転職ガイド</h3><p className="text-sm text-text-light">DevOpsと相性の良いサーバーサイド</p></a>
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
