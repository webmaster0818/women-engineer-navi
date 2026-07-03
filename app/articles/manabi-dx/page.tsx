import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "マナビDX（経産省・IPA）の使い方ガイド｜無料講座の探し方と転職準備での活用法【2026年】",
  description:
    "経済産業省とIPAが運営するデジタル人材育成ポータル「マナビDX」を公式情報をもとに解説。デジタルスキル標準（DSS）との関係、受講料無料の講座の絞り込み方、教育訓練給付対象講座の探し方、無料実践プログラム「マナビDX Quest」、女性エンジニア転職の準備での活用法まで紹介します。",
  alternates: { canonical: "/articles/manabi-dx/" },
  openGraph: {
    title: "マナビDX（経産省・IPA）の使い方ガイド｜無料講座の探し方と転職準備での活用法【2026年】",
    description:
      "経産省・IPA運営のポータル「マナビDX」の使い方を公式情報をもとに解説。無料講座の絞り込み方、教育訓練給付対象講座、マナビDX Quest、転職準備での活用法を紹介。",
    url: "https://women-engineer.com/articles/manabi-dx/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "マナビDX（経産省・IPA）の使い方ガイド｜無料講座の探し方と転職準備での活用法【2026年】",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
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
    "経済産業省とIPAが運営するデジタル人材育成ポータル「マナビDX」の使い方を公式情報をもとに解説。無料講座の絞り込み方、教育訓練給付対象講座の探し方、転職準備での活用法を紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/manabi-dx/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "マナビDXの講座はすべて無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "すべてが無料ではありません。マナビDXは講座を紹介するポータルサイトで、サイト自体の利用（講座検索・お気に入り登録）は無料ですが、掲載講座には有料のものと無料のものがあります。2026年7月参照時点の講座検索では掲載777講座のうち受講料無料は49講座で、検索画面の「受講料」条件で「無料」に絞り込めます。有料講座でも、教育訓練給付制度（厚生労働省）や第四次産業革命スキル習得講座（経済産業省）の対象講座であれば、条件を満たせば受講費用の一部給付・補助を受けられる場合があります（出典: マナビDX公式サイト、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "マナビDXは誰でも利用できますか？女性・未経験者向けの講座はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "マナビDXは「すべての人に学びの場を提供」することを掲げたポータルサイトで、性別・職業を問わず誰でも利用できます。女性専用ではありませんが、2026年7月参照時点で739講座が個人申込可能です。未経験者は、講座レベル1にあたる「デジタルリテラシー講座」（DXリテラシー標準〈DSS-L〉に対応）から始めると、DXの背景・データ技術・活用方法を体系的に学べます。レベル1から4まで段階が示されているため、自分の現在地に合わせて選べるのが特徴です（出典: マナビDX公式サイト、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "マナビDX Questとは何ですか？マナビDXとの違いは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "マナビDX Questは、経済産業省が推進する参加無料の実践型デジタル人材育成プログラムです。講座を「探す」ポータルであるマナビDXに対し、Questは実企業の課題データを使って課題特定からソリューション提案までを学ぶケーススタディ教育プログラム（約3か月）と、中小企業と協働して実課題解決に取り組む地域企業協働プログラムで構成されます。デジタル経験の有無を問わず参加でき、修了者にはDX推進スキル標準（DSS-P）に基づくデジタルバッジが発行されます。2026年度はケーススタディ教育プログラムが受講生募集中、地域企業協働プログラムは秋以降開始予定です（出典: マナビDX Quest公式サイト、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "マナビDXの講座はITエンジニア転職に役立ちますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "講座の受講だけで転職が決まるわけではありませんが、活用の仕方次第で転職準備の土台になります。掲載講座は経産省・IPAがデジタルスキル標準などへの対応を審査したもので、修了証が発行される講座も多く、ITパスポート試験や基本情報技術者試験などの資格試験に対応した講座も検索できます。「マナビDXのリテラシー講座で基礎固め→資格取得で客観的な証明→ポートフォリオ作成で実践力の提示」という流れにすると、未経験からの応募書類に一貫したストーリーを持たせられます。学習成果を評価してくれる企業探しは、IT特化型・女性特化型の転職エージェントの併用が近道です。",
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
              { label: "マナビDXの使い方ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              支援制度ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              マナビDX（経産省・IPA）の使い方ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                無料講座の探し方と女性エンジニア転職準備での活用法【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月4日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>先に結論：3つの即答</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>何ができる？</strong> 経済産業省と情報処理推進機構（IPA）が運営するデジタル人材育成のポータルサイト。デジタルスキル標準に対応した講座を、レベル・学習時間・受講料などの条件で検索できます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>いくら？</strong> サイトの利用（検索・お気に入り登録）は無料。掲載講座は有料・無料が混在し、2026年7月参照時点では777講座中49講座が受講料無料。有料講座にも教育訓練給付など公的補助の対象が多数あります。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>誰向け？</strong> 性別・経験を問わず誰でも利用可能。未経験からIT転職を目指す人は、レベル1の「デジタルリテラシー講座」から段階的に学べます。東京都の訓練事業のような年齢・居住地の要件はありません。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://manabi-dx.ipa.go.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>マナビDX 公式サイト</a>（2026年7月参照）
            </p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. マナビDXとは（デジタルスキル標準との関係）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. サービス概要表</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 無料で学べる講座の探し方（絞り込みの観点）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 転職準備での活用法（資格・ポートフォリオとの組み合わせ）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 無料の実践プログラム「マナビDX Quest」</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 他の公的支援との使い分け</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">マナビDXとは（デジタルスキル標準との関係）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「マナビDX（マナビディーエックス）」は、<strong>経済産業省と独立行政法人情報処理推進機構（IPA）が運営する</strong>デジタル人材育成のポータルサイトです。「すべての人に学びの場を提供」することを掲げ、デジタルスキルを身につけられる講座を横断的に検索・比較できます（出典: マナビDX公式サイト、2026年7月参照）。
            </p>
            <p>
              最大の特徴は、掲載講座が<strong>国の「デジタルスキル標準（DSS）」にひもづいている</strong>ことです。デジタルスキル標準は経産省・IPAが策定したスキルの共通ものさしで、全ビジネスパーソン向けの「DXリテラシー標準（DSS-L）」と、DXを推進する人材の役割・スキルを定義した「DX推進スキル標準（DSS-P）」の2階建てになっています。マナビDXでは、スキル標準への対応を経産省・IPAが審査した講座が掲載されるため、「どの講座が体系的な学びとして信頼できるか」を自分で見極める手間を減らせます（出典: IPA「デジタルスキル標準」、2026年7月参照）。
            </p>
            <p>
              講座は「デジタルリテラシー講座」（DXの背景・データ技術・活用方法などの基礎）と「デジタル実践講座」（ビジネス変革・データ活用・テクノロジー・セキュリティなどの専門分野）に大別され、データサイエンティストやソフトウェアエンジニア、サイバーセキュリティ専門家といった<strong>目指すロール（職種）から逆引きで探す</strong>こともできます。
            </p>
            <p>
              なお、マナビDXは特定のスクールが運営する広告サイトではなく国の事業のため、掲載順位が広告費で決まるといった構造がありません。未経験からITエンジニアを目指す人が「まず何をどの順で学ぶか」の地図として使うのに向いています。学習後の転職活動全体の流れは<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験からITエンジニアになる方法</a>で解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 概要表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">サービス概要表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>内容（公式情報）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>名称</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>マナビDX（デジタル人材育成プラットフォーム ポータルサイト）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>運営</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>経済産業省・独立行政法人情報処理推進機構（IPA）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>利用対象</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>制限なし（性別・年齢・居住地・就業状況を問わない。個人申込可能な講座は739講座※）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>掲載講座数</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>777講座※（デジタルリテラシー講座198／デジタル実践講座579）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>費用</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>サイト利用は無料。講座は無料49／有料728※。有料講座の一部は教育訓練給付制度（272講座※）・第四次産業革命スキル習得講座（305講座※）の対象</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>スキル標準</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>DXリテラシー標準（DSS-L）・DX推進スキル標準（DSS-P）に対応。ITスキル標準（ITSS）関連講座も掲載</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>関連プログラム</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>マナビDX Quest（経産省の実践型プログラム・参加無料・2026年度募集中）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            ※講座数はいずれも2026年7月参照時点の講座検索画面の表示値で、掲載の追加・終了により変動します。出典: <a href="https://manabi-dx.ipa.go.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>マナビDX 公式サイト</a>（2026年7月参照）
          </p>
        </div>
      </section>

      {/* sec3 無料講座の探し方 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">無料で学べる講座の探し方（絞り込みの観点）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              マナビDXの講座検索には複数の絞り込み条件があります。「無料で始めたい」「費用をかけるなら給付を使いたい」という目的別に、次の観点で絞り込むのが効率的です。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["観点1", "受講料「無料」で絞る", "検索条件の「受講料」で無料を選ぶと、費用ゼロで受講できる講座だけが表示されます（2026年7月参照時点で49講座）。数は多くありませんが、適性確認の入口として十分です。"],
              ["観点2", "講座レベルを自分に合わせる", "レベル1（リテラシー）からレベル4まで段階表示されます。未経験ならレベル1のデジタルリテラシー講座から。DXの背景（Why）・データと技術（What）・利活用（How）を体系的に押さえられます。"],
              ["観点3", "標準学習時間で現実性を確認", "60分以内／1〜10時間／10時間以上で絞れます。働きながら・育児しながらの場合は、短時間講座で学習習慣を作ってから長時間講座に進むと挫折しにくくなります。"],
              ["観点4", "「国の指定・認定」で給付対象を探す", "有料講座でも、教育訓練給付制度（厚労省）や第四次産業革命スキル習得講座（経産省）の対象講座なら、条件を満たせば受講費用の一部給付・補助が受けられます。本格的な講座に進むときはこの条件で絞ると自己負担を抑えられます。"],
              ["観点5", "資格試験・目指すロールから逆引き", "ITパスポート試験や基本情報技術者試験など対応する試験・検定からも検索できます。目指す職種（ロール）が決まっている人は、データサイエンティスト・ソフトウェアエンジニアなどロール別の入口が便利です。"],
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
          <p className="text-xs text-text-light mt-4">
            出典: マナビDX 講座検索（2026年7月参照）。絞り込み条件・講座数は変更される場合があります。
          </p>
        </div>
      </section>

      {/* sec4 転職準備での活用法 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職準備での活用法（資格・ポートフォリオとの組み合わせ）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              マナビDXは「講座を受けたら転職できる」サービスではありません。未経験からの転職では、<strong>学んだことを採用側に伝わる形に変換する工程</strong>が必要です。次の3ステップで組み合わせると、応募書類に一貫したストーリーが生まれます。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>STEP1. リテラシー講座で「共通言語」を身につける</h3>
              <p className="text-sm text-text-light leading-relaxed">まず無料のリテラシー講座（レベル1）で、DX・データ・セキュリティの基礎用語と全体像を押さえます。国のスキル標準（DSS-L）に沿った学びなので、面接で「何をどこまで学んだか」を客観的な枠組みで説明できるようになります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>STEP2. 資格学習と接続して客観的な証明を作る</h3>
              <p className="text-sm text-text-light leading-relaxed">マナビDXはITパスポートや基本情報技術者などの試験に対応した講座を検索できるため、講座学習をそのまま資格取得につなげられます。修了証だけよりも国家資格のほうが書類選考での証明力は強いので、「講座で学ぶ→資格で証明」をセットにしましょう。どの資格から取るべきかは<a href="/articles/certification/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアの資格ガイド</a>で職種別に整理しています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>STEP3. ポートフォリオで「作れること」を見せる</h3>
              <p className="text-sm text-text-light leading-relaxed">講座と資格はインプットの証明です。開発職を目指すなら、学んだ内容を使った小さな制作物（ポートフォリオ）を用意すると、未経験でも「手を動かせる人」として評価されやすくなります。講座選びの段階から「演習・実践を含む講座」を選んでおくと、成果物をポートフォリオに転用しやすくなります。学習からポートフォリオ、応募までの全体像は<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験からITエンジニアになる方法</a>を参照してください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 マナビDX Quest */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">無料の実践プログラム「マナビDX Quest」</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              マナビDXの姉妹プログラムとして、経済産業省が推進する<strong>参加無料</strong>の実践型プログラム「マナビDX Quest」があります。講座を「探す」ポータルであるマナビDXと違い、Questは実際の企業データ・企業課題を題材に手を動かして学ぶプログラムです（出典: マナビDX Quest公式サイト、2026年7月参照）。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ケーススタディ教育プログラム</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>実企業の課題をもとに「課題特定→ソリューション検討→提案」を約3か月で学ぶPBL（課題解決型学習）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>デジタル経験の有無を問わず参加可能（プログラムにより要件あり）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>2026年度は受講生募集中（2026年7月参照時点）</span></li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>地域企業協働プログラム</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>中小企業と協働し、実課題の解決に2〜3か月取り組むインターンシップ型</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>2026年度は秋以降開始予定・詳細は後日公開（2026年7月参照時点）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>修了者にはDX推進スキル標準（DSS-P）に基づくデジタルバッジを発行</span></li>
              </ul>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            未経験転職では「実務に近い経験」の有無が書類・面接の通過率を左右します。費用をかけずに実課題ベースの経験とデジタルバッジを得られるQuestは、独学のポートフォリオを補強する選択肢になります。募集時期・参加要件は年度ごとに変わるため、必ず<a href="https://dxq.manabi-dx.ipa.go.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>公式サイト</a>で最新情報を確認してください。
          </p>
        </div>
      </section>

      {/* sec6 他の公的支援との使い分け */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">他の公的支援との使い分け</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              未経験からのIT転職に使える公的支援はマナビDXだけではありません。<strong>「自分のペースで学ぶならマナビDX、就職支援まで一体で欲しいなら職業訓練、有料講座の負担を下げるなら教育訓練給付」</strong>という整理で使い分け・併用を考えると迷いません。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>支援</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>性質</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>向いている人</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>マナビDX</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>国が審査した講座の検索ポータル。要件なし・いつでも開始可。無料講座あり</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>在職中・要件外の人も含め、自分のペースで体系的に学びたい人</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>東京都 女性ITエンジニア育成事業</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>6か月の訓練＋就職支援が一体・受講料無料。原則39歳以下・非正社員・都内就職希望など要件あり</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>要件に合致し、伴走型で正社員転職まで進みたい人。詳細は<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>解説記事</a>へ</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>教育訓練給付制度（厚労省）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>雇用保険の給付で有料講座の費用負担を軽減。専門実践は経費の50%（年間上限40万円）、資格取得し就職等で70%、賃金上昇で80%まで</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>雇用保険の加入要件を満たし、本格的な有料講座・スクールで学びたい人</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              併用も現実的です。たとえば「マナビDXの無料リテラシー講座で適性を確認→合いそうなら教育訓練給付対象の実践講座（マナビDX上で272講座※）や<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>東京都の育成事業</a>に応募」という流れなら、大きな出費や6か月のコミットの前に低リスクで試せます。給付の対象講座・支給要件はハローワークでの手続きが必要なため、<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省の教育訓練給付制度ページ</a>で最新の条件を確認してください（2026年7月参照）。
            </p>
            <p className="text-xs">※2026年7月参照時点のマナビDX講座検索の表示値。</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec7" className="py-10">
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
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/tokyo-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都 女性ITエンジニア育成事業ガイド</h3><p className="text-sm text-text-light">受講料無料の訓練＋就職支援を徹底解説</p></a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からITエンジニアになる方法</h3><p className="text-sm text-text-light">学習〜転職までの完全ロードマップ</p></a>
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの資格ガイド</h3><p className="text-sm text-text-light">職種別・目的別の資格マップ</p></a>
            <a href="/articles/reskilling-leave/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リスキリングでエンジニアを目指す</h3><p className="text-sm text-text-light">在職中に学ぶ制度・支援の活用法</p></a>
            <a href="/articles/programming-school/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性向けプログラミングスクールの選び方</h3><p className="text-sm text-text-light">給付金活用と選び方の基準</p></a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 経済産業省・IPA「マナビDX」公式サイト <a href="https://manabi-dx.ipa.go.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://manabi-dx.ipa.go.jp/</a>（2026年7月参照）</li>
            <li>出典: マナビDX「マナビDXとは」 <a href="https://manabi-dx.ipa.go.jp/what" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://manabi-dx.ipa.go.jp/what</a>（2026年7月参照）</li>
            <li>出典: 経済産業省「マナビDX Quest」公式サイト <a href="https://dxq.manabi-dx.ipa.go.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://dxq.manabi-dx.ipa.go.jp/</a>（2026年7月参照）</li>
            <li>出典: IPA「デジタルスキル標準」 <a href="https://www.ipa.go.jp/jinzai/skill-standard/dss/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.ipa.go.jp/jinzai/skill-standard/dss/index.html</a>（2026年7月参照）</li>
            <li>出典: 厚生労働省「教育訓練給付制度」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html</a>（2026年7月参照）</li>
          </ul>
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
