import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアにおすすめの資格10選｜転職で有利になる資格",
  description:
    "女性エンジニアにおすすめの資格10選。転職で有利になるIT資格を難易度・年収効果・取得期間とともに紹介。基本情報技術者からAWS認定まで、キャリアステージ別のおすすめ資格を解説します。",
  alternates: { canonical: "/articles/certification/" },
  openGraph: {
    title: "女性エンジニアにおすすめの資格10選｜転職で有利になる資格",
    description: "女性エンジニアにおすすめの資格10選。転職で有利になるIT資格を難易度・年収効果とともに紹介。",
    url: "https://women-engineer-navi.pages.dev/articles/certification/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアにおすすめの資格10選｜転職で有利になる資格",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  description: "女性エンジニアにおすすめの資格10選。転職で有利になるIT資格を難易度・年収効果とともに紹介。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/articles/certification/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "エンジニアの転職に資格は必要ですか？", acceptedAnswer: { "@type": "Answer", text: "必須ではありませんが、資格はスキルの客観的な証明として転職で有利に働きます。特に未経験からの転職やキャリアチェンジの場合、基本情報技術者試験やAWS認定資格があると選考で大きなアドバンテージになります。実務経験が豊富な場合は、資格よりも実績のアピールが重要です。" } },
    { "@type": "Question", name: "どの資格から取得するのがおすすめですか？", acceptedAnswer: { "@type": "Answer", text: "エンジニア初心者や未経験の方は基本情報技術者試験から始めるのがおすすめです。既にエンジニアとして働いている場合は、AWS認定ソリューションアーキテクトやGoogle Cloud認定資格など、実務に直結するクラウド資格が転職市場で高く評価されます。" } },
    { "@type": "Question", name: "資格の取得にかかる期間はどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "基本情報技術者試験は2〜3ヶ月、応用情報技術者試験は3〜6ヶ月、AWS認定資格は1〜2ヶ月が目安です。仕事をしながらの学習の場合、1日1〜2時間の学習を継続する計画を立てましょう。週末にまとめて学習する方法も効果的です。" } },
    { "@type": "Question", name: "資格取得で年収は上がりますか？", acceptedAnswer: { "@type": "Answer", text: "資格単体で大幅な年収アップは期待しにくいですが、転職時の評価材料としてプラスに働きます。特にAWS認定やPMP資格は、求人の必須条件・歓迎条件に挙げられることが多く、応募できる求人の幅が広がります。SIerでは資格手当として月額5,000〜30,000円が支給されるケースもあります。" } },
    { "@type": "Question", name: "産休育休中に資格を取得するのはおすすめですか？", acceptedAnswer: { "@type": "Answer", text: "はい、産休育休中の資格取得は復帰後のキャリアにプラスになります。赤ちゃんのお世話の合間にオンライン教材で学習を進め、復帰前に受験するスケジュールがおすすめです。ただし、無理のない範囲で取り組むことが大切です。育児を最優先にしながら、隙間時間を活用しましょう。" } },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer-navi.pages.dev" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer-navi.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "おすすめ資格10選", item: "https://women-engineer-navi.pages.dev/articles/certification/" },
  ],
};

const certifications = [
  { rank: 1, name: "基本情報技術者試験（FE）", org: "IPA（情報処理推進機構）", difficulty: "初級", period: "2〜3ヶ月", effect: "高い", desc: "ITエンジニアの登竜門とされる国家資格。アルゴリズム・データ構造・ネットワーク・セキュリティなどIT全般の基礎知識を証明できます。SIerでは入社後の取得が必須の企業も多く、転職市場でも幅広く評価されます。2023年からCBT方式になり、随時受験が可能になりました。", target: "未経験〜経験1-2年" },
  { rank: 2, name: "AWS認定ソリューションアーキテクト - アソシエイト（SAA）", org: "Amazon Web Services", difficulty: "中級", period: "1〜2ヶ月", effect: "非常に高い", desc: "AWSのサービスを使ったシステム設計能力を証明するクラウド資格。2026年現在、最も転職市場で評価されるIT資格の一つです。クラウドエンジニアだけでなく、バックエンド・インフラエンジニアにとっても必須レベルの資格です。", target: "経験1年以上" },
  { rank: 3, name: "応用情報技術者試験（AP）", org: "IPA（情報処理推進機構）", difficulty: "中級", period: "3〜6ヶ月", effect: "高い", desc: "基本情報技術者の上位資格で、ITエンジニアとしてのより高度な知識を証明します。技術だけでなくマネジメント・ストラテジの知識も問われるため、リーダーやマネージャーを目指す方にも有用です。", target: "経験2-3年以上" },
  { rank: 4, name: "Google Cloud認定 Professional Cloud Architect", org: "Google Cloud", difficulty: "中〜上級", period: "1〜3ヶ月", effect: "非常に高い", desc: "Google Cloudを使ったクラウドアーキテクチャの設計・管理能力を証明する資格です。GCPを採用する企業が増えており、転職市場での評価が急上昇中。AWS資格との併せ持ちでさらに市場価値が高まります。", target: "経験2年以上" },
  { rank: 5, name: "Linux技術者認定（LPIC / LinuC）", org: "LPI / LPI-Japan", difficulty: "初〜中級", period: "1〜3ヶ月", effect: "高い", desc: "Linuxの技術力を証明する資格で、インフラエンジニアには必須レベルです。Level 1から始めてLevel 2・3と段階的にスキルを証明できます。サーバー管理の基礎知識はすべてのエンジニアに役立ちます。", target: "全レベル" },
  { rank: 6, name: "PMP（Project Management Professional）", org: "PMI", difficulty: "上級", period: "3〜6ヶ月", effect: "非常に高い", desc: "プロジェクトマネジメントの国際的な資格で、PM職を目指すエンジニアにとって最も評価される資格です。受験にはPM経験の実績が必要ですが、取得後は年収アップに直結しやすい資格です。", target: "PM経験者" },
  { rank: 7, name: "情報処理安全確保支援士（登録セキスペ）", org: "IPA（情報処理推進機構）", difficulty: "上級", period: "3〜6ヶ月", effect: "高い", desc: "情報セキュリティの専門家を認定する国家資格です。セキュリティの重要性が増す中、需要が高まっている資格で、セキュリティエンジニアやコンサルタントを目指す方に最適です。", target: "経験3年以上" },
  { rank: 8, name: "Oracle認定Java資格（Oracle Certified Java Programmer）", org: "Oracle", difficulty: "中級", period: "1〜3ヶ月", effect: "中程度", desc: "Javaプログラミング能力を証明する資格で、SIerやエンタープライズ系企業で特に評価されます。Silver → Gold → Platinumと段階的に取得でき、Java開発の実務経験と組み合わせることで転職で有利になります。", target: "Java開発者" },
  { rank: 9, name: "TOEIC（730点以上）", org: "IIBC", difficulty: "中級", period: "3〜6ヶ月", effect: "中〜高い", desc: "英語力を証明するTOEICは、外資系IT企業やグローバル展開する企業への転職で重視されます。730点以上あれば英語でのコミュニケーションが可能なレベルとして評価されます。技術ドキュメントの読解にも役立ちます。", target: "外資系志望者" },
  { rank: 10, name: "データベーススペシャリスト試験", org: "IPA（情報処理推進機構）", difficulty: "上級", period: "3〜6ヶ月", effect: "高い", desc: "データベースの設計・管理・運用の専門知識を証明する国家資格です。データエンジニアやDBAを目指す方に最適で、SIerやデータ分析企業で高く評価されます。SQLの深い知識と設計力が問われます。", target: "DB関連職種" },
];

export default function CertificationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "おすすめ資格10選" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#f97066" }}>スキルアップ</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアにおすすめの資格10選
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">転職で有利になる資格を徹底解説</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月29日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. エンジニアの転職と資格の関係</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. おすすめ資格10選</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. キャリアステージ別おすすめ資格</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 職種別おすすめ資格</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 資格取得の学習方法</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 資格を活かした転職戦略</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 資格取得支援がある企業</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* 資格と転職の関係 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">エンジニアの転職と資格の関係</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT業界では「資格よりも実務経験」が重視される傾向がありますが、資格は転職において確実にプラスの効果があります。特に以下のような場面で資格の価値が発揮されます。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { title: "スキルの客観的な証明", desc: "資格は第三者機関が技術力を認定するため、面接官に対してスキルレベルを客観的に示すことができます。特に書類選考の段階で、資格の有無が通過率に影響することがあります。" },
              { title: "応募資格の充足", desc: "求人票の「必須条件」や「歓迎条件」に特定の資格が記載されていることがあります。AWS認定資格やPMPなどは、求人の応募条件に含まれるケースが増えており、保有していることで応募できる求人の幅が広がります。" },
              { title: "学習意欲のアピール", desc: "資格取得の過程で体系的に知識を学ぶため、スキルアップへの意欲や自己成長力をアピールできます。特に産休育休中に資格を取得した場合、ブランクを埋める積極的な姿勢として好印象です。" },
              { title: "年収・待遇の向上", desc: "SIerを中心に、資格手当として月額5,000〜30,000円が支給される企業があります。また、転職時の年収交渉においても、資格保有は市場価値の裏付けとして活用できます。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめ資格10選 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ資格10選</h2>
          <div className="space-y-6">
            {certifications.map((cert) => (
              <div key={cert.rank} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold text-white" style={{ backgroundColor: cert.rank <= 3 ? "#0891b2" : cert.rank <= 6 ? "#7c3aed" : "#f97066" }}>
                    {cert.rank}
                  </span>
                  <h3 className="text-lg font-bold">{cert.name}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed mb-4">{cert.desc}</p>
                <div className="grid gap-2 md:grid-cols-5">
                  {[
                    { label: "認定機関", value: cert.org },
                    { label: "難易度", value: cert.difficulty },
                    { label: "取得期間", value: cert.period },
                    { label: "転職効果", value: cert.effect },
                    { label: "対象者", value: cert.target },
                  ].map((info, j) => (
                    <div key={j} className="rounded-lg p-2 text-center" style={{ backgroundColor: "#f8fafb" }}>
                      <p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>{info.label}</p>
                      <p className="text-xs text-text-light">{info.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* キャリアステージ別 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">キャリアステージ別おすすめ資格</h2>
          <div className="grid gap-6 md:grid-cols-3 mt-4">
            {[
              { stage: "未経験〜1年目", color: "#0891b2", certs: ["基本情報技術者試験", "LPIC Level 1", "ITパスポート"] },
              { stage: "経験2〜5年", color: "#7c3aed", certs: ["AWS認定 SAA", "応用情報技術者試験", "Oracle Java Silver/Gold"] },
              { stage: "経験5年以上", color: "#f97066", certs: ["PMP", "情報処理安全確保支援士", "Google Cloud Professional", "データベーススペシャリスト"] },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: item.color }}>{item.stage}</h3>
                <ul className="text-sm text-text-light space-y-2">
                  {item.certs.map((cert, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span style={{ color: item.color }} className="font-bold">&#9654;</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 職種別 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">職種別おすすめ資格</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">職種</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">おすすめ資格</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["フロントエンド", "基本情報技術者、Google Analytics認定"],
                  ["バックエンド", "AWS SAA、Oracle Java、基本情報技術者"],
                  ["インフラ", "AWS SAA/SAP、LPIC、CCNA"],
                  ["データエンジニア", "Google Cloud Professional、データベーススペシャリスト"],
                  ["セキュリティ", "情報処理安全確保支援士、CISSP"],
                  ["PM・マネージャー", "PMP、プロジェクトマネージャ試験"],
                  ["SIer SE", "基本情報/応用情報技術者、Oracle Java"],
                ].map(([job, certs], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
                    <td className="px-4 py-3 text-sm font-bold" style={{ borderBottom: "1px solid #d1dce5", color: "#0891b2" }}>{job}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{certs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 学習方法 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">資格取得の学習方法</h2>
          <div className="space-y-4 mt-4">
            {[
              { title: "公式教材・参考書を活用する", desc: "各資格の公式テキストや定番の参考書で体系的に学習します。基本情報技術者試験なら「キタミ式イラストIT塾」、AWSなら公式トレーニングがおすすめです。1周目はざっと読み、2周目で理解を深める方法が効果的です。" },
              { title: "オンライン学習プラットフォーム", desc: "Udemy・AWS Skill Builder・Progate・Schooなどのオンライン教材を活用しましょう。動画形式で学べるため、通勤時間や隙間時間を活用した学習に最適です。セール時にUdemyのコースを購入するとコスパが良いです。" },
              { title: "模擬試験を繰り返す", desc: "実際の試験形式に近い模擬試験を繰り返し解くことで、出題傾向に慣れ、時間配分を身につけます。基本情報技術者なら過去問道場、AWSならWhizlabsやTutorialsDojo、応用情報技術者なら午後問題の演習が重要です。" },
              { title: "学習スケジュールを立てる", desc: "受験日を先に決め、逆算して学習スケジュールを立てましょう。1日30分〜1時間の学習を毎日継続することが重要です。週末にまとめて学習する方法も効果的ですが、毎日少しでも触れることで記憶の定着が良くなります。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>{i + 1}. {item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 転職戦略 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">資格を活かした転職戦略</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>資格を取得しただけでは転職に活かしきれません。以下のポイントを押さえて、資格を最大限に活用しましょう。</p>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>職務経歴書に資格を目立つ位置に記載し、取得年月も明記する</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>資格の知識を実務でどう活用したか（活用予定か）を説明できるようにする</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>求人の必須条件・歓迎条件に合致する資格を優先的に取得する</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>資格手当が支給される企業をエージェントに確認する</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>ポートフォリオと組み合わせることで、知識と実践力の両方をアピールする</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 資格取得支援企業 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">資格取得支援がある企業</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              資格取得支援制度が充実した企業に転職すれば、入社後もスキルアップを続けやすくなります。特にSIerや大手IT企業では資格取得を積極的に推進しています。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">企業タイプ</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">支援内容</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">資格手当</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["大手SIer", "受験費用全額補助・社内勉強会・研修制度", "月額5,000〜30,000円"],
                  ["メガベンチャー", "書籍購入費・カンファ参加費・学習サービス補助", "一時金（合格報奨金）"],
                  ["外資系IT", "資格取得休暇・受験費用全額補助", "昇進条件に含まれることも"],
                  ["スタートアップ", "学習費用の一部補助", "企業による（なしの場合も）"],
                ].map(([type, support, allowance], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
                    <td className="px-4 py-3 text-sm font-bold" style={{ borderBottom: "1px solid #d1dce5", color: "#0891b2" }}>{type}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{support}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{allowance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              資格取得支援制度の詳細は、転職エージェントを通じて確認するのがおすすめです。求人票には記載されていない制度を教えてもらえることがあります。
            </p>
          </div>
        </div>
      </section>

      {/* 資格取得の体験談 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">資格取得の体験談</h2>
          <div className="space-y-6">
            {[
              { profile: "28歳・フロントエンドエンジニア", cert: "AWS認定ソリューションアーキテクト取得", story: "フロントエンド中心のキャリアでしたが、フルスタックを目指してAWS資格に挑戦しました。Udemyの講座と模擬試験を2ヶ月かけて取り組み、一発合格。転職活動では「クラウドも理解しているフロントエンジニア」として差別化でき、年収100万円アップで転職が決まりました。" },
              { profile: "33歳・SIer SE（育休中）", cert: "応用情報技術者試験合格", story: "育休中のスキルアップとして応用情報技術者試験に挑戦。赤ちゃんのお昼寝中や夜間に毎日1時間ずつ学習し、4ヶ月で合格しました。復帰後の昇格審査でも有利に働き、チームリーダーに昇格。資格手当として月15,000円もプラスになりました。" },
              { profile: "25歳・未経験からエンジニア転職", cert: "基本情報技術者試験合格", story: "事務職からエンジニア転職を目指し、プログラミングスクールと並行して基本情報技術者試験を取得。未経験ながらもIT基礎知識があることを証明でき、SIerの中堅企業にSEとして採用されました。独学3ヶ月で合格できたので、コスパが非常に良い資格だと思います。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>{item.profile}</span>
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: "#7c3aed" }}>{item.cert}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 資格取得の注意点 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">資格取得の注意点</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              資格取得は転職において確実にプラスになりますが、以下の点に注意しましょう。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span style={{ color: "#f97066" }} className="mt-1 font-bold">!</span>
                <span className="text-sm text-text-light">資格だけに頼らず、実務経験やポートフォリオとのバランスが重要</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#f97066" }} className="mt-1 font-bold">!</span>
                <span className="text-sm text-text-light">転職先で求められる資格を優先的に取得する（求人票を確認）</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#f97066" }} className="mt-1 font-bold">!</span>
                <span className="text-sm text-text-light">有効期限のある資格（AWS認定等）は更新を忘れずに</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#f97066" }} className="mt-1 font-bold">!</span>
                <span className="text-sm text-text-light">難易度の高い資格に最初から挑むより、段階的にステップアップ</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#f97066" }} className="mt-1 font-bold">!</span>
                <span className="text-sm text-text-light">Web系企業では資格よりもGitHubやポートフォリオが重視される傾向</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              IT業界では「資格を持っているが実務経験がない」よりも「実務経験は豊富だが資格は持っていない」方が評価される場合があります。理想的には、実務経験を積みながら関連する資格を取得していくアプローチが最も効果的です。
            </p>
            <p>
              また、資格の取得は自分への投資でもあります。学習過程で体系的な知識が身につくため、実務のパフォーマンスも向上します。資格を「転職のためだけのもの」と捉えず、エンジニアとしての成長の一環として取り組むことをおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec8" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d1dce5" }}>
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                  <span><span style={{ color: "#0891b2" }} className="mr-2">Q.</span>{faq.name}</span>
                  <span className="text-text-light group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                  <p className="pt-4"><span style={{ color: "#f97066" }} className="font-bold mr-2">A.</span>{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">まとめ</h2>
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <div className="space-y-4 text-text-light leading-relaxed">
              <p>
                女性エンジニアにとって、資格取得は転職市場での競争力を高める有効な手段です。ただし、資格だけに頼るのではなく、実務経験やポートフォリオとのバランスを取ることが重要です。
              </p>
              <p>
                まずは自分のキャリアステージと目指す方向性に合った資格から始め、段階的にスキルアップしていきましょう。資格の取得過程で得られる体系的な知識は、日常の業務にも確実に活きてきます。
              </p>
              <p>
                転職エージェントに相談すれば、志望企業で求められる資格や、資格取得支援制度がある企業の情報を教えてもらえます。効率的にキャリアアップを目指しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>未経験からエンジニアへ</h3>
              <p className="text-sm text-text-light">未経験からの転職を徹底解説</p>
            </a>
            <a href="/articles/sier-industry/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>SIerへの転職ガイド</h3>
              <p className="text-sm text-text-light">SIerの種類・年収・キャリアパス</p>
            </a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>年収ガイド</h3>
              <p className="text-sm text-text-light">平均年収と年収アップの方法</p>
            </a>
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>キャリアパス設計ガイド</h3>
              <p className="text-sm text-text-light">5年後・10年後のキャリア設計</p>
            </a>
          </div>
        </div>
      </section>

      {/* 資格取得ロードマップ */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">資格取得ロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>キャリアの段階に合わせた資格取得の順番を紹介します。無理なくステップアップしていきましょう。</p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { step: "STEP 1", title: "IT基礎資格（未経験〜1年目）", desc: "基本情報技術者試験でIT全般の基礎知識を固めます。合格すると「ITの基本を理解している」という証明になり、未経験からの転職でも大きなアドバンテージになります。並行してITパスポートから始めるのも有効です。", color: "#0891b2" },
              { step: "STEP 2", title: "専門分野の資格（2〜3年目）", desc: "自分の専門分野に合わせた資格を取得します。バックエンドならOracle Java、インフラならLPICやAWS SAA、セキュリティなら情報セキュリティマネジメントがおすすめです。実務経験と組み合わせることで転職市場での評価が格段に上がります。", color: "#7c3aed" },
              { step: "STEP 3", title: "上位資格（5年目以上）", desc: "応用情報技術者試験・PMP・高度情報処理技術者など、より専門性の高い資格に挑戦します。マネジメント志向ならPMP、技術志向ならデータベーススペシャリストや情報処理安全確保支援士がキャリアに直結します。", color: "#f97066" },
              { step: "STEP 4", title: "グローバル資格（キャリア発展期）", desc: "AWS認定プロフェッショナルレベル・Google Cloud Professional・CISSPなど、グローバルに通用する資格を取得します。外資系企業への転職や海外でのキャリアを見据えた選択肢です。TOEIC 730点以上もあると理想的です。", color: "#10b981" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: item.color }}>{item.step}</span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 費用まとめ */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">資格取得にかかる費用まとめ</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">資格名</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">受験料</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">教材費目安</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">合計目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["基本情報技術者試験", "7,500円", "3,000〜5,000円", "約12,000円"],
                  ["応用情報技術者試験", "7,500円", "3,000〜5,000円", "約12,000円"],
                  ["AWS SAA", "22,000円", "3,000〜10,000円", "約30,000円"],
                  ["LPIC Level 1", "16,500円", "5,000〜8,000円", "約24,000円"],
                  ["Oracle Java Silver", "37,730円", "5,000〜8,000円", "約45,000円"],
                  ["PMP", "約80,000円", "50,000〜100,000円", "約150,000円"],
                  ["TOEIC", "7,810円", "3,000〜10,000円", "約15,000円"],
                ].map(([name, fee, material, total], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
                    <td className="px-4 py-3 text-sm font-bold" style={{ borderBottom: "1px solid #d1dce5" }}>{name}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{fee}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d1dce5" }}>{material}</td>
                    <td className="px-4 py-3 text-sm font-bold" style={{ borderBottom: "1px solid #d1dce5", color: "#0891b2" }}>{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              資格取得支援制度がある企業に在籍している場合は、受験料や教材費の全額または一部が補助される可能性があります。転職後に取得する場合も、支援制度の有無を確認しておきましょう。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">資格を活かした転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">IT特化型エージェントなら、あなたの資格とスキルを最大限に評価した求人を紹介してもらえます。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
