import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアのAWS認定資格ガイド｜取得すべき順番・難易度・勉強法",
  description:
    "女性エンジニアのAWS認定資格取得ガイド。Foundational/Associate/Professional/Specialtyの体系、CLF・SAAの難易度・受験料・勉強時間・勉強法を実データで解説。クラウド需要と年収アップ、女性に役立つ理由、どれから取るべきか、おすすめ教材・エージェントまで網羅します。",
  alternates: { canonical: "/articles/cert-aws/" },
  openGraph: {
    title: "女性エンジニアのAWS認定資格ガイド｜取得すべき順番・難易度・勉強法",
    description:
      "AWS認定の体系・難易度・受験料・勉強時間・勉強法・年収アップ効果を実データで解説。女性エンジニアがどの資格から取るべきかも紹介。",
    url: "https://women-engineer.com/articles/cert-aws/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアのAWS認定資格ガイド｜取得すべき順番・難易度・勉強法",
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
    "女性エンジニア向けにAWS認定の体系・難易度・受験料・勉強時間・勉強法・年収アップ効果を実データで解説。どの資格から取るべきかも紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/cert-aws/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性エンジニアはAWS認定をどれから取るべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "未経験・初学者はまず基礎レベルのAWS Certified Cloud Practitioner（CLF-C02）から始めるのがおすすめです。技術的な事前経験が不要で、クラウドの全体像とAWSの主要サービス・料金体系を体系的に学べます。実務でAWSに触れている人や転職で評価されたい人は、いきなりAssociateのSolutions Architect – Associate（SAA-C03）を狙っても構いません。SAAは設計スキルを証明でき、転職市場で最も評価されやすい人気資格です。王道はCLF→SAAの順で、CLFで土台を作ってからSAAで設計力を身につける流れです。",
      },
    },
    {
      "@type": "Question",
      name: "AWS Cloud Practitioner（CLF）の勉強時間はどれくらい必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "目安はIT未経験者で40〜60時間前後、エンジニア経験者で20〜40時間前後です。1日2時間の学習なら未経験でも約1か月で合格圏に入ります。Cloud Practitioner Essentials（公式無料デジタルトレーニング）で全体像をつかみ、Ping-tやWEB問題集で演習、公式のPractice Question Setで本番形式に慣れる、という3段構えで進めると効率的です。CLFは概念理解が中心なので、暗記より「なぜそのサービスを使うのか」を理解することが合格の近道です。",
      },
    },
    {
      "@type": "Question",
      name: "AWS認定を取ると年収は上がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "上がりやすくなります。クラウドエンジニアの平均年収は約545万〜600万円で、ITエンジニア全体の平均（約460万円）を大きく上回ります。特にSAA（ソリューションアーキテクト アソシエイト）を持っていると転職時に年収50万〜100万円アップするケースも珍しくなく、Associate以上の資格には資格手当を支給する企業も多くあります。ただし資格だけで年収が上がるわけではなく、実務経験と組み合わせて初めて市場価値が高まります。資格は「クラウドを体系的に理解している証明」として、面接や年収交渉で強い武器になります。",
      },
    },
    {
      "@type": "Question",
      name: "AWS認定は産休・育休のブランク中でも取得できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "むしろブランク期間の学習に向いています。AWS認定は自宅のオンライン受験（OnVUE）にも対応しており、子どもが寝た後の細切れ時間でも学習・受験を進められます。Cloud Practitioner Essentialsなど公式の無料教材が充実しているため費用も抑えられ、合格証は3年間有効です。復職時に「ブランク中もクラウドをキャッチアップしていた」という客観的な証明になり、空白期間の不安を実績で打ち消せるのが大きなメリットです。クラウドは知識の陳腐化が早い分、最新資格を持っていること自体が学習意欲のアピールになります。",
      },
    },
    {
      "@type": "Question",
      name: "AWS認定取得後、転職に強いエージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "クラウドスキルを正当に評価してもらうなら、IT特化型のレバテックキャリアやGeeklyがおすすめです。AWSの技術スタックや資格レベルを理解したアドバイザーが多く、クラウド求人が豊富で年収交渉にも強みがあります。働き方の条件（リモート・時短・産休育休実績）を重視したい場合は、type女性の転職エージェントを併用すると、女性のキャリア継続に配慮した求人を絞り込めます。資格は持っているだけでなく「どう実務に活かすか」を語れると評価が上がるため、ポートフォリオやハンズオン実績の整理もアドバイザーに相談しましょう。2〜3社の併用がベストです。",
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
              { label: "AWS認定資格ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              資格ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアのAWS認定資格ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                取得すべき順番・難易度・勉強法を実データで解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月10日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. AWS認定資格とは</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. AWS認定の資格体系と難易度（一覧表）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 女性エンジニアにAWS認定が役立つ理由</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. どれから取るべきか（おすすめルート）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 勉強時間と勉強法（STEP）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. おすすめ教材・模擬試験</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 取得後の年収・キャリア</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. 関連記事</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">AWS認定資格とは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              AWS認定資格（AWS Certification）は、Amazon Web Services（AWS）が公式に提供するクラウドスキルの認定制度です。世界トップシェアのクラウドであるAWSを「設計・構築・運用できる力」を客観的に証明でき、IT業界の中でも需要・知名度の高い資格群として広く認知されています。
            </p>
            <p>
              2026年時点でAWS認定は全12種類。難易度・想定経験別に、<strong>Foundational（基礎）／Associate（中級）／Professional（上級）／Specialty（専門分野）</strong>の4つのレベルに分かれています。クラウドの基本概念だけを問う入門レベルから、5年以上の実務経験を前提とする専門レベルまで、段階的にステップアップできるのが特徴です。
            </p>
            <p>
              受験はオンライン（自宅受験のOnVUE）またはテストセンターで可能。合格すると認定は<strong>3年間有効</strong>で、期限前に再認定で更新します。クラウドは技術の移り変わりが速いため、「最新のAWS認定を保有している」こと自体が、学び続けている証明として評価されます。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>AWS認定で証明できること</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>クラウドの基本概念とAWS主要サービス・料金体系の理解（CLF）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>可用性・コスト・セキュリティを考えたアーキテクチャ設計力（SAA）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>サーバーレス・コンテナを使ったアプリ開発（DVA）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>本番環境の運用・監視・自動化（SOA）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>機械学習・ネットワークなど専門領域の高度なスキル（Specialty）</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 資格体系・難易度 表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">AWS認定の資格体系と難易度（一覧表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              AWS認定は4レベルに整理されています。受験料は<strong>Foundationalが100USD（約15,000円）、Associateが150USD（約20,000円）、ProfessionalとSpecialtyが300USD（約40,000円）</strong>。下表は主要な認定の難易度・想定経験・受験料の目安です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>レベル</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>代表的な認定（略称）</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>想定経験</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>受験料</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Foundational<br />（基礎）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Cloud Practitioner（CLF）<br />AI Practitioner（AIF）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>実務経験不要。学習40〜80時間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>100USD（約15,000円）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Associate<br />（中級）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Solutions Architect（SAA）<br />Developer（DVA）<br />SysOps Administrator（SOA）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1年以上の実務経験が目安</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>150USD（約20,000円）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Professional<br />（上級）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Solutions Architect Professional（SAP）<br />DevOps Engineer（DOP）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2年以上の高度な実務経験</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>300USD（約40,000円）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Specialty<br />（専門）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Machine Learning（MLS）<br />Advanced Networking（ANS）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>5年以上の専門的な実務経験</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>300USD（約40,000円）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            内訳はFoundationalが2種類、Associateが5種類、Professionalが3種類、Specialtyが2種類です。まずはFoundationalのCLFかAssociateのSAA、この2つのどちらかを起点にするのが定番です。
          </p>
        </div>
      </section>

      {/* sec3 女性に役立つ理由 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアにAWS認定が役立つ理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされますが、クラウドスキルは性別・経歴に関係なく「資格と実力」で評価される領域です。とくにAWS認定は、女性がキャリアを築き直したり、長く働き続けたりするうえで強い味方になります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. スキルを客観的に証明できる</h3>
              <p className="text-text-light text-sm leading-relaxed">クラウド需要が高い一方で評価がブラックボックスになりがちな世界で、AWS認定は世界共通の「実力の物差し」。職歴に自信がなくても、資格が公平な評価軸になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 自宅・細切れ時間で取得できる</h3>
              <p className="text-text-light text-sm leading-relaxed">オンライン受験（OnVUE）に対応し、公式無料教材も充実。育児や仕事の合間、子どもが寝た後の時間でも学習・受験を進められ、費用も抑えられます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. ブランク復帰の不安を打ち消せる</h3>
              <p className="text-text-light text-sm leading-relaxed">産休育休中に最新のAWS認定を取れば、「ブランク中もクラウドをキャッチアップしていた」客観的な証明に。空白期間の不安を実績で埋められます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. リモート求人・年収アップに直結</h3>
              <p className="text-text-light text-sm leading-relaxed">クラウドエンジニアはフルリモート求人が多く、平均年収もIT全体を上回ります。SAA保有で転職時に年収50万〜100万円アップする例もあり、働き方と収入を同時に改善しやすい領域です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 どれから取るべきか */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">どれから取るべきか（おすすめルート）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              全12種類あるとどれから手を付けるか迷いますが、女性エンジニアが最初に狙うべきは<strong>CLF（基礎）かSAA（中級・設計）</strong>のどちらかです。経験レベルに応じて、次の3パターンから選ぶと迷いません。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="rounded-xl border p-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>未経験・初学者</h3>
              <p className="text-sm text-text-light mb-2"><strong>CLF →（SAA）</strong></p>
              <p className="text-sm text-text-light">まずCloud Practitionerで全体像と用語を固める。実務経験ゼロでも取得でき、転職活動の最初の一歩に最適。</p>
            </div>
            <div className="rounded-xl border p-6 bg-white" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>転職で評価されたい</h3>
              <p className="text-sm text-text-light mb-2"><strong>SAA一点突破</strong></p>
              <p className="text-sm text-text-light">転職市場で最も人気・評価が高いのがSAA。設計力を証明でき、年収交渉でも武器に。実務が少しでもあるなら直接狙う価値あり。</p>
            </div>
            <div className="rounded-xl border p-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>専門を深めたい</h3>
              <p className="text-sm text-text-light mb-2"><strong>SAA → DVA/SOA → 上位</strong></p>
              <p className="text-sm text-text-light">開発寄りはDVA、運用寄りはSOA。さらにProfessionalや機械学習などSpecialtyへ進み、希少人材を目指す。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>迷ったらこの判断軸</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・<strong>クラウド未経験</strong> → CLFから。用語と料金体系の土台づくりが先</li>
              <li>・<strong>インフラ/サーバー経験あり</strong> → SAAから直接。最短で市場価値を上げられる</li>
              <li>・<strong>アプリ開発が主</strong> → SAAの次にDVA（Developer）で開発力を証明</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 勉強時間と勉強法 STEP */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">勉強時間と勉強法（STEP）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              勉強時間の目安は、<strong>CLF（基礎）が未経験40〜60時間／経験者20〜40時間</strong>、<strong>SAA（設計）が未経験150〜300時間（約2〜5か月）／経験者80〜120時間（約1〜3か月）</strong>。1日2時間ならCLFは約1か月で合格圏です。効率的な進め方は「全体像 → 問題演習 → 弱点補強 → 模擬練習」の順。次のSTEPで進めると挫折しにくいです。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "全体像をつかむ（公式デジタルトレーニング）", "公式無料の「Cloud Practitioner Essentials」などで、クラウドの考え方とAWS主要サービスの役割を一気に把握。最初に地図を持つと後の暗記が楽になります。"],
              ["STEP2", "主要サービスを理解する", "EC2・S3・VPC・IAM・RDSなど頻出サービスを「何のために使うか」で理解。暗記ではなく用途で覚えるのが合格の近道です。"],
              ["STEP3", "問題演習で出題傾向に慣れる", "Ping-tやWEB問題集（CloudCamp等）で繰り返し演習。間違えた問題は必ず解説を読み、関連サービスごと理解し直します。"],
              ["STEP4", "弱点を補強する", "正答率が低い分野（ネットワーク・セキュリティ・料金など）を集中的に復習。苦手領域をつぶすことが安定合格の鍵です。"],
              ["STEP5", "ハンズオンで手を動かす（SAA以上）", "SAAは設計力が問われるため、実際にAWSの無料枠でEC2やVPCを構築。手を動かすと記憶への定着が段違いになります。"],
              ["STEP6", "本番形式の模擬試験で仕上げる", "公式のPractice Question SetやUdemy模試で本番同様に演習。時間配分を体に覚えさせ、安定して合格ラインを超えてから受験を予約します。"],
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

      {/* sec6 おすすめ教材 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ教材・模擬試験</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              AWS認定は<strong>無料・低コストの教材だけでも十分合格を狙えます</strong>。CLFなら「公式デジタルトレーニング＋問題集＋公式模試」の3点で試験範囲を網羅できます。役割ごとに教材を使い分けるのがコツです。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>役割</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>教材例</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>全体像の把握</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>AWS公式 Cloud Practitioner Essentials（無料）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>公式デジタルトレーニング。まず最初に一周</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>問題演習</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Ping-t / CloudCamp等のWEB問題集</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>無料〜低コストで反復。間違いの解説が要</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>本番形式の模試</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>公式 Practice Question Set / Udemy模試</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>本番の難易度・時間配分に慣れる仕上げ用</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>体系的な参考書</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>CLF-C02対応の市販テキスト・問題集</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1冊あると安心。読み物として弱点補強に</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ハンズオン（SAA以上）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>AWS無料利用枠での実機構築</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>設計問題は手を動かすと定着が段違い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            まずは無料教材で始め、本番感覚に不安があれば模試を1つ追加する——これがコストを抑えた王道です。新規アカウントには学習・受験に使えるクーポンや無料枠もあるため、賢く活用しましょう。
          </p>
        </div>
      </section>

      {/* sec7 取得後の年収・キャリア */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">取得後の年収・キャリア</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              クラウドエンジニアの平均年収は<strong>約545万〜600万円</strong>で、ITエンジニア全体の平均（約460万円）を大きく上回ります。AWSエンジニアの平均は約580万円。設計・構築層になると650万〜800万円超、ハイクラス層では1,000万円以上も現実的です。
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
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>クラウドエンジニア平均</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約545万〜600万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>IT全体平均（約460万円）を上回る</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>設計・構築層</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>650万〜800万円超</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>SAA/SAPの設計スキルが評価される層</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ハイクラス層</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1,000万円以上</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Professional＋豊富な実務経験</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>SAA保有の転職効果</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>＋50万〜100万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>転職時の年収アップ例。資格手当の企業も多い</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収・キャリアを伸ばす3つのポイント</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>SAAで設計力を証明</strong>。最も需要が高く、年収交渉の起点になる</li>
              <li>② <strong>資格＋実務</strong>をセットに。資格だけでなくハンズオン実績を語れると評価が跳ねる</li>
              <li>③ <strong>専門で希少性を出す</strong>。DevOps・機械学習などSpecialtyで代替の効かない人材へ</li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ただし、資格取得だけで年収が上がるわけではありません。<strong>実務経験と組み合わせて初めて市場価値が高まる</strong>点は押さえておきましょう。資格は「クラウドを体系的に理解している証明」として、面接・年収交渉での説得力を大きく高めてくれます。
          </p>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>AWS認定を活かして転職するなら、クラウドスキルを正当に評価できるIT特化型と、働き方に配慮した女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。AWSの技術スタックや資格レベルを理解したアドバイザーが多く、クラウド求人・リモート求人の提案に強み。女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。クラウド人材の市場価値を理解した提案と、スピーディーなマッチング・年収交渉力に定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。資格を活かしつつ、働き方の条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">資格を「年収」につなげるならエージェント活用が近道</p>
            <p className="text-sm text-text-light mb-4">複数登録して、クラウドに詳しいアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* 関連記事 */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/aws-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>AWSエンジニアのキャリアガイド</h3><p className="text-sm text-text-light">資格の先にある仕事内容と年収</p></a>
            <a href="/articles/cloud-gcp-azure/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>GCP・Azureとの比較</h3><p className="text-sm text-text-light">3大クラウドの違いと選び方</p></a>
            <a href="/articles/infrastructure/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>インフラエンジニア転職ガイド</h3><p className="text-sm text-text-light">クラウド時代の安定職種</p></a>
            <a href="/articles/sre-devops/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>SRE・DevOpsエンジニア</h3><p className="text-sm text-text-light">AWS認定を活かす次のキャリア</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">AWS認定を、理想の転職につなげましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。資格を活かせる求人とキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
