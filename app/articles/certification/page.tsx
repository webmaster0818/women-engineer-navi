import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの資格ガイド｜目的別おすすめ資格マップと優先順位【2026年】",
  description:
    "女性エンジニアの資格ガイド決定版。基本情報・応用情報（IPA受験料7,500円）、AWS認定（SAA 150USD）、LPIC・LinuC、Python認定、データベース系資格を目的×レベル別マップで整理。受験料・試験形式を公式情報の出典付きでまとめ、資格が転職で効く場面・効かない場面、産休育休中の学習法まで解説します。",
  alternates: { canonical: "/articles/certification/" },
  openGraph: {
    title: "女性エンジニアの資格ガイド｜目的別おすすめ資格マップと優先順位【2026年】",
    description:
      "基本情報・応用情報・AWS・LPIC・Python・データベース系資格を目的×レベル別マップで整理。受験料・形式を公式出典付きで解説する決定版ガイド。",
    url: "https://women-engineer.com/articles/certification/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの資格ガイド｜目的別おすすめ資格マップと優先順位【2026年】",
  datePublished: "2026-04-29",
  dateModified: "2026-06-12",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer.com" },
  description:
    "基本情報・応用情報・AWS・LPIC・Python・データベース系資格を目的×レベル別マップで整理。受験料・形式を公式出典付きで解説する決定版ガイド。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/articles/certification/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性エンジニアはどの資格から取るのがおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "目的を1つに絞り、それに直結する資格を1つずつ取るのが鉄則です。未経験・異業種からの転職なら、IT全般の基礎を国家資格として証明できる基本情報技術者試験（受験料7,500円・通年CBT）が第一候補。すでにエンジニアとして働いているなら、インフラ志向はLPIC・LinuC、クラウド志向はAWS認定（SAA）、データ・AI志向はPython3エンジニア認定試験やデータベース系資格など、目指す職種に直結するものを選びましょう。複数を同時に勉強するより、1つ取得して実務やポートフォリオに反映してから次へ進む方が転職での評価につながります。",
      },
    },
    {
      "@type": "Question",
      name: "主要なIT資格の受験料はそれぞれいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2026年6月時点の公式情報では、IPAの情報処理技術者試験（基本情報・応用情報・データベーススペシャリスト等）は全区分7,500円です。AWS認定はFoundationalが100USD（日本では15,000円）、Associateが150USD（20,000円）、Professional・Specialtyが300USD（40,000円）。LPICは1科目15,000円、LinuCは1試験16,500円（税込）で、どちらもレベル1認定には101・102の2科目合格が必要です。Python3エンジニア認定基礎試験・データ分析試験は各11,000円（税込）、統計検定2級はCBT方式で7,000円（税込）です。受験料は改定されることがあるため、申込前に必ず公式サイトで最新額を確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "資格がなくてもエンジニア転職はできますか？資格はどんな場面で効きますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "資格なしでも転職は可能で、実務経験者の中途採用では実績・ポートフォリオの方が重視されます。資格が特に効くのは、(1)未経験・異業種からの応募で基礎力を客観的に証明したいとき、(2)大手・SIerなど資格を評価制度に組み込んでいる企業の書類選考、(3)求人票の歓迎要件（AWS認定歓迎など）を満たして応募の幅を広げたいとき、(4)産休育休やブランク明けに学習継続をアピールしたいとき、です。一方、Web系自社開発企業ではGitHubやポートフォリオが重視される傾向があり、資格単体での大幅な年収アップも期待しにくいため、実務・成果物とセットで活用するのが現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "産休・育休中やブランク中でも資格は取得できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "取得できます。基本情報技術者試験は通年CBT方式で全国のテストセンターから都合のよい日時を選べるため、育児の状況に合わせて受験日を決められます。AWS認定・LPIC/LinuC・Python認定・統計検定もCBT方式で随時受験が可能です。未経験から基本情報なら約200時間が学習目安なので、1日1〜2時間の隙間学習でも数か月で到達できます。復職時の面接で「ブランク中も学習を続けていた」という客観的な証明になり、復帰後のキャリアの選択肢も広がります。ただし育児を最優先に、無理のない計画で取り組むことが大切です。",
      },
    },
    {
      "@type": "Question",
      name: "2026年のIT資格試験で制度が変わる点はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "大きな変更は、IPAの応用情報技術者試験・高度試験（データベーススペシャリスト等）・情報処理安全確保支援士試験が2026年度（令和8年度）からCBT方式に移行することです。従来の春期区分は「前期試験」として2026年11月頃、秋期区分は「後期試験」として2027年2月頃の実施が予定されています。出題形式・出題数・試験時間・出題範囲そのものに変更はありません。基本情報技術者試験はすでに通年CBT化済みで随時受験できます。最新の日程・要項は必ずIPA公式サイトで確認してください。",
      },
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer.com" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer.com/articles/" },
    { "@type": "ListItem", position: 3, name: "女性エンジニアの資格ガイド", item: "https://women-engineer.com/articles/certification/" },
  ],
};

const certGuides = [
  { href: "/articles/cert-kihonjoho/", name: "基本情報技術者試験（FE）", tag: "未経験の証明", color: "#0891b2", desc: "ITの登竜門となる国家資格。合格率約40%・受験料7,500円・通年CBT。未経験からの第一歩はここから。" },
  { href: "/articles/cert-oyojoho/", name: "応用情報技術者試験（AP）", tag: "ワンランク上へ", color: "#0891b2", desc: "基本情報の上位国家資格。合格率20〜25%。2026年度からCBT方式へ移行。高度試験への足がかりに。" },
  { href: "/articles/cert-aws/", name: "AWS認定（CLF・SAA）", tag: "クラウド", color: "#7c3aed", desc: "転職市場で評価の高いクラウド資格。CLFは100USD、SAAは150USD。リモート求人の多い領域と好相性。" },
  { href: "/articles/cert-lpic/", name: "LPIC・LinuC", tag: "インフラ", color: "#7c3aed", desc: "Linux技術の証明。LPICは1科目15,000円、LinuCは16,500円（税込）。インフラ・サーバー職の土台。" },
  { href: "/articles/cert-python/", name: "Python3エンジニア認定試験", tag: "開発・データ", color: "#f97066", desc: "基礎試験・データ分析試験とも11,000円（税込）で合格率が高め。AI・データ分析への入口に。" },
  { href: "/articles/cert-database/", name: "データベース系資格", tag: "データ", color: "#f97066", desc: "OSS-DB・ORACLE MASTER・DBスペシャリスト（7,500円・合格率15〜18%）を比較。設計力の証明に。" },
];

const feeTable = [
  ["基本情報技術者試験（FE）", "IPA（国家試験）", "7,500円（税込）", "通年CBT・随時受験", "IPA公式サイト"],
  ["応用情報技術者試験（AP）", "IPA（国家試験）", "7,500円（税込）", "2026年度からCBT移行（前期2026年11月頃／後期2027年2月頃）", "IPA公式サイト"],
  ["データベーススペシャリスト試験", "IPA（国家試験・高度）", "7,500円（税込）", "高度試験として2026年度からCBT移行", "IPA公式サイト"],
  ["AWS認定 クラウドプラクティショナー（CLF）", "Amazon Web Services", "100USD（日本では15,000円）", "テストセンターまたは自宅オンライン監督試験", "AWS認定公式（試験の料金）"],
  ["AWS認定 ソリューションアーキテクト アソシエイト（SAA）", "Amazon Web Services", "150USD（日本では20,000円）", "テストセンターまたは自宅オンライン監督試験", "AWS認定公式（試験の料金）"],
  ["LPIC-1（101・102の2科目）", "LPI", "1科目 15,000円", "CBT・2科目合格で認定", "LPI公式（試験価格）"],
  ["LinuC レベル1（101・102の2科目）", "LPI-Japan（認定発行はEDUCO）", "1試験 16,500円（税込）", "CBT・2科目を5年以内に合格で認定", "LinuC公式サイト"],
  ["Python3エンジニア認定基礎試験", "Pythonエンジニア育成推進協会", "11,000円（税込）／学割5,500円", "CBT・40問選択式・正答率70%で合格", "Pythonエンジニア育成推進協会公式"],
  ["Python3エンジニア認定データ分析試験", "Pythonエンジニア育成推進協会", "11,000円（税込）／学割5,500円", "CBT・40問選択式・正答率70%で合格", "Pythonエンジニア育成推進協会公式"],
  ["統計検定2級", "統計質保証推進協会", "7,000円（税込）／学割5,000円", "CBT・随時受験", "統計検定公式サイト"],
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
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "女性エンジニアの資格ガイド" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#f97066" }}>スキルアップ</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの資格ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">目的別おすすめ資格マップと優先順位【2026年】</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>この記事の結論</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>資格は数を集めるものではなく、<strong>「目的別に1つずつ」</strong>取るのが鉄則。取得→実務・ポートフォリオに反映→次の資格、の順で積み上げる</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span><strong>未経験・異業種からの転職なら基本情報技術者試験から</strong>（国家資格・受験料7,500円・通年CBTでいつでも受験可）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>経験者は職種に直結する資格を選ぶ：インフラ→LPIC・LinuC／クラウド→AWS認定（SAA）／開発・データ→Python認定・DB系資格</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>資格が効くのは「未経験の証明」「大手・SIerの書類選考」「歓迎要件の充足」「ブランク明けの学習証明」。Web系自社開発ではポートフォリオが優先</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>主要資格はすべてCBT化が進み、<strong>産休・育休中やブランク中でも自分のペースで受験しやすい</strong>環境が整っている</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. 目的×レベル別の資格マップ</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 個別ガイド：主要6資格の詳細解説</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 受験料・試験形式の一覧（公式情報・出典付き）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 資格が転職で効く場面・効かない場面</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 取得の優先順位とロードマップ</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 産休・育休中・ブランク中の資格学習</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. よくある質問</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. 出典一覧</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 目的×レベル別マップ */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">目的×レベル別の資格マップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT資格は数が多く、「どれから取ればいいのか」で迷いがちです。選び方の軸はシンプルで、<strong>「いま何を証明したいか（目的）」×「いまの自分のレベル」</strong>の掛け合わせで決まります。下表で自分の現在地に合う資格を見つけ、各資格の詳細は個別ガイドで確認してください。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>目的</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>入門〜基礎レベル</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>中級〜上級レベル</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5", color: "#0891b2" }}>未経験の証明（IT基礎）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><a href="/articles/cert-kihonjoho/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>基本情報技術者試験</a>（7,500円・通年CBT・合格率約40%）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><a href="/articles/cert-oyojoho/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>応用情報技術者試験</a>（7,500円・合格率20〜25%）</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5", color: "#0891b2" }}>インフラ（Linux・サーバー）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><a href="/articles/cert-lpic/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>LPIC-1／LinuC レベル1</a>（LPIC 1科目15,000円・LinuC 1試験16,500円）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>LPIC・LinuCのレベル2以上＋クラウド資格の組み合わせ</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5", color: "#0891b2" }}>クラウド</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><a href="/articles/cert-aws/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>AWS認定 CLF</a>（100USD・日本では15,000円）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><a href="/articles/cert-aws/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>AWS認定 SAA</a>（150USD・日本では20,000円）→ Professional（300USD）</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5", color: "#0891b2" }}>開発（プログラミング）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><a href="/articles/cert-python/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>Python3エンジニア認定基礎試験</a>（11,000円・正答率70%で合格）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><a href="/articles/cert-python/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>Python3エンジニア認定データ分析試験</a>（11,000円）＋実務・ポートフォリオ</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5", color: "#0891b2" }}>データ（DB・統計）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><a href="/articles/cert-database/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>OSS-DB Silver／ORACLE MASTER Bronze</a>・統計検定2級（7,000円）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><a href="/articles/cert-database/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>データベーススペシャリスト試験</a>（7,500円・合格率15〜18%）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ※受験料は2026年6月時点で各実施団体の公式サイトで確認した金額です（詳細と出典は<a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>受験料一覧</a>を参照）。改定される場合があるため、申込前に公式サイトで最新額を確認してください。
          </p>
        </div>
      </section>

      {/* sec2 個別ガイド6本 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">個別ガイド：主要6資格の詳細解説</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              当サイトでは、女性エンジニアの転職・キャリアの観点から主要6資格の個別ガイドを公開しています。難易度・合格率・勉強時間・教材・取得後の年収への影響まで、それぞれ実データで詳しく解説しています。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {certGuides.map((g, i) => (
              <a key={i} href={g.href} className="block rounded-xl border bg-white p-6 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: g.color }}>{g.tag}</span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>{g.name}</h3>
                <p className="text-sm text-text-light leading-relaxed">{g.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* sec3 受験料・形式一覧 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">受験料・試験形式の一覧（公式情報・出典付き）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              主要資格の受験料と試験形式を、2026年6月時点で各実施団体の公式サイトで確認できた情報のみでまとめました。IPAの国家試験は全区分7,500円と安価で、ベンダー資格はおおむね1万〜4万円台です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>資格名</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>実施団体</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>受験料</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>試験形式</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>出典</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                {feeTable.map(([name, org, fee, format, source], i) => (
                  <tr key={i} style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>{name}</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>{org}</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>{fee}</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>{format}</td>
                    <td className="border px-4 py-3 text-xs" style={{ borderColor: "#d1dce5" }}>{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ※AWS認定の試験料金は為替レートを反映して少なくとも年1回（5月）更新されると公式に案内されています。各受験料は改定されることがあるため、申込前に必ず公式サイトで最新情報を確認してください。
          </p>
        </div>
      </section>

      {/* sec4 効く場面・効かない場面 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">資格が転職で効く場面・効かない場面</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT業界の中途採用は基本的に「実務で何ができるか」で評価されます。資格は万能ではありませんが、<strong>使いどころを押さえれば確実に効果がある</strong>武器です。実態ベースで「効く場面」と「効かない場面」を整理します。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#0891b2" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>効く場面</h3>
              <ul className="space-y-3 text-sm text-text-light leading-relaxed">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span><strong>未経験・異業種からの応募</strong>：職歴で実力を示せない段階では、国家資格の合格が「基礎を体系的に学んだ証明」として書類通過率を高める</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span><strong>大手・SIerの選考と社内評価</strong>：資格を評価制度・昇格要件に組み込む企業が多く、資格手当（基本情報で月5,000〜10,000円が相場）や合格報奨金も期待できる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span><strong>求人の歓迎要件の充足</strong>：「AWS認定保有者歓迎」「基本情報以上歓迎」のような歓迎要件を満たすと、応募できる求人の幅と選考での印象が変わる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span><strong>キャリアチェンジの意思表示</strong>：開発→インフラ、SIer→クラウドなど職種転換時に、未経験領域への本気度を客観的に示せる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span><strong>ブランク明けの学習証明</strong>：産休育休・離職期間中の合格実績は「学習を継続していた」最も分かりやすい証拠になる</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#f97066" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#f97066" }}>効かない（効きにくい）場面</h3>
              <ul className="space-y-3 text-sm text-text-light leading-relaxed">
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-0.5 font-bold">!</span><span><strong>Web系自社開発企業の選考</strong>：GitHub・ポートフォリオ・実務での成果が重視される傾向が強く、資格は補助的な扱いになりやすい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-0.5 font-bold">!</span><span><strong>実務経験者の即戦力採用</strong>：経験3年以上の中途採用では「何を作り、どう改善したか」の実績が主役。資格だけ増やしても評価は伸びない</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-0.5 font-bold">!</span><span><strong>資格単体での大幅な年収アップ</strong>：資格は交渉材料にはなるが、それだけで年収が大きく上がるわけではない。実務・成果物との組み合わせが前提</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-0.5 font-bold">!</span><span><strong>目的のない「数集め」</strong>：方向性のばらばらな資格を並べても専門性は伝わらない。職務経歴書では志望職種に直結する資格が光る</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-0.5 font-bold">!</span><span><strong>実技力が問われる選考</strong>：コーディングテストや技術面接は資格では代替できない。手を動かす練習は別途必要</span></li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>結論：資格は「証明書」、主役は実務とポートフォリオ</h3>
            <p className="text-sm text-text-light leading-relaxed">
              資格の本質的な価値は「体系的に学んだことの客観的な証明」です。未経験・ブランク・キャリアチェンジなど<strong>実績で語れない局面ほど効果が大きく</strong>、実績が積み上がるほど相対的な重みは下がります。自分の現在地に合わせて、資格と実務・成果物のバランスを設計しましょう。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 優先順位とロードマップ */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">取得の優先順位とロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              迷ったら次の順序で考えましょう。ポイントは<strong>「同時に複数を追わない」</strong>こと。1つ取得するごとに実務やポートフォリオへ反映し、評価される形に変えてから次へ進みます。
            </p>
          </div>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "土台：基本情報技術者試験（未経験〜1年目）", desc: "未経験・異業種からの転職や経験の浅い時期は、まず基本情報でIT全般の基礎を国家資格として証明。通年CBTでいつでも受験でき、未経験の学習目安は約200時間です。詳しくは基本情報技術者試験ガイドへ。", color: "#0891b2", href: "/articles/cert-kihonjoho/" },
              { step: "STEP 2", title: "専門の入口：職種に直結する資格を1つ（1〜3年目）", desc: "インフラならLPIC-1／LinuCレベル1、クラウドならAWS認定（CLF→SAA）、開発・データならPython3エンジニア認定試験。求人票の歓迎要件に挙がる資格を優先すると転職効果が高まります。", color: "#7c3aed", href: "/articles/cert-aws/" },
              { step: "STEP 3", title: "ワンランク上：応用情報・上位資格（3年目以降）", desc: "応用情報技術者試験で「ワンランク上のエンジニア」を証明。合格後2年間は高度試験の午前Ⅰが免除されるため、データベーススペシャリストなど高度試験への足がかりになります。", color: "#f97066", href: "/articles/cert-oyojoho/" },
              { step: "STEP 4", title: "専門の確立：高度試験・上位ベンダー資格（5年目以降）", desc: "データ領域ならデータベーススペシャリスト、クラウドならAWS Professionalなど、専門性の「到達点」となる資格へ。希少性が高まり、年収交渉やリーダー職への足がかりになります。", color: "#10b981", href: "/articles/cert-database/" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: item.color }}>{item.step}</span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed">{item.desc} <a href={item.href} className="font-bold hover:underline" style={{ color: "#0891b2" }}>→ 詳細ガイド</a></p>
              </div>
            ))}
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            これからITキャリアを始める方は、学習の全体像を<a href="/articles/beginner/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>未経験からエンジニア転職ガイド</a>でも解説しています。
          </p>
        </div>
      </section>

      {/* sec6 産休育休・ブランク */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">産休・育休中・ブランク中の資格学習</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              主要なIT資格はCBT化が進み、<strong>「決まった試験日に会場へ行く」必要のない資格が大半</strong>になりました。基本情報技術者試験は通年CBTで全国のテストセンターから日時を選べ、AWS認定は自宅でのオンライン監督試験も選択できます。体調や育児の状況に合わせて受験日を決められるため、産休・育休中やブランク中のスキル維持と相性のよい環境です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>ブランク期間と相性がよい理由</h3>
              <ul className="space-y-2 text-sm text-text-light leading-relaxed">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>CBT・随時受験のため、仕上がってから受験日を決められる（不合格でも再受験可能）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>過去問サイトやオンライン教材中心で、隙間時間のスマホ学習で進めやすい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>復職・転職の面接で「ブランク中も学習を継続した」客観的な証明になる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>復帰後の配属・職種転換（例：インフラ→クラウド）の希望を伝える材料になる</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>無理なく続けるコツ</h3>
              <ul className="space-y-2 text-sm text-text-light leading-relaxed">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-0.5 font-bold">&#10003;</span><span>育児・体調を最優先に、「1日30分でも継続」を目標にする（合格期限はない）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-0.5 font-bold">&#10003;</span><span>受験料が安く範囲が体系的な国家試験（7,500円）か、合格率の高いPython認定あたりから始める</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-0.5 font-bold">&#10003;</span><span>復帰時期から逆算して「受験は復帰の1〜2か月前」を目安にスケジュールを引く</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-0.5 font-bold">&#10003;</span><span>勤務先の資格取得支援（受験料補助・報奨金）が育休中も使えるか確認しておく</span></li>
              </ul>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            ブランクからの復職全体の進め方は<a href="/articles/return-to-work/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>ブランクから復職するためのガイド</a>で詳しく解説しています。
          </p>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>資格を取得したら、その資格や学習実績を正しく評価してもらえる場で活かすことが大切です。IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人が豊富。技術に精通したアドバイザーが、資格や学習中の取り組みも含めて強みを言語化し、企業へアピールしてくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと年収交渉力に定評があり、資格手当の充実した企業の紹介も期待できます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。未経験からIT職を目指す人や、ブランクからの復職にも親身に伴走してくれます。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec8 FAQ */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl border overflow-hidden bg-white" style={{ borderColor: "#d1dce5" }}>
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

      {/* sec9 出典 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典一覧</h2>
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li>出典: IPA 独立行政法人情報処理推進機構「試験実施スケジュール・受験手数料」「基本情報技術者試験」（2026年6月参照）— 全区分の受験手数料7,500円、基本情報の通年CBT実施、応用情報・高度試験の2026年度CBT移行（前期2026年11月頃／後期2027年2月頃）</li>
              <li>出典: AWS認定 公式サイト「試験の料金」（2026年6月参照）— Foundational 100USD（15,000円）、Associate 150USD（20,000円）、Professional・Specialty 300USD（40,000円）</li>
              <li>出典: LPI（Linux Professional Institute）公式サイト「試験価格」（2026年6月参照）— LPIC-1 101・102 各15,000円</li>
              <li>出典: LinuC公式サイト（LPI-Japan）「LinuCレベル1」（2026年6月参照）— 1試験16,500円（税込）、101・102の2試験を5年以内に合格で認定</li>
              <li>出典: 一般社団法人Pythonエンジニア育成推進協会 公式サイト「試験概要」（2026年6月参照）— 基礎試験・データ分析試験とも一般10,000円（税別）・学割5,000円（税別）、40問選択式・正答率70%で合格</li>
              <li>出典: 統計検定公式サイト（統計質保証推進協会）「統計検定2級」（2026年6月参照）— CBT方式、一般7,000円（税込）・学割5,000円（税込）</li>
            </ul>
            <p className="text-xs text-text-light mt-4">※受験料・実施方式は改定されることがあります。受験申込の前に必ず各実施団体の公式サイトで最新情報をご確認ください。合格率・勉強時間などの詳細データは各資格の個別ガイドに出典とあわせて掲載しています。</p>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/cert-kihonjoho/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>基本情報技術者試験ガイド</h3>
              <p className="text-sm text-text-light">難易度・合格率・勉強法を実データで解説</p>
            </a>
            <a href="/articles/cert-oyojoho/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>応用情報技術者試験ガイド</h3>
              <p className="text-sm text-text-light">ワンランク上を証明する国家資格</p>
            </a>
            <a href="/articles/cert-aws/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>AWS認定資格ガイド</h3>
              <p className="text-sm text-text-light">CLF・SAAの難易度と年収への影響</p>
            </a>
            <a href="/articles/cert-lpic/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>LPIC・LinuC資格ガイド</h3>
              <p className="text-sm text-text-light">インフラ職の土台になるLinux資格</p>
            </a>
            <a href="/articles/cert-python/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>Python資格ガイド</h3>
              <p className="text-sm text-text-light">基礎・データ分析試験の合格率と勉強法</p>
            </a>
            <a href="/articles/cert-database/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>データベース資格ガイド</h3>
              <p className="text-sm text-text-light">OSS-DB・ORACLE MASTER・DBスペシャリスト比較</p>
            </a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>未経験からエンジニアへ</h3>
              <p className="text-sm text-text-light">未経験からの転職を徹底解説</p>
            </a>
            <a href="/articles/return-to-work/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>ブランクからの復職ガイド</h3>
              <p className="text-sm text-text-light">ブランク期間を強みに変える方法</p>
            </a>
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
