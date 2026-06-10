import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "育休中のスキルアップ・リスキリングガイド｜エンジニアが復職・転職に向けて学ぶ方法",
  description:
    "育休中のエンジニアがスキルアップ・リスキリングに取り組むためのガイド。育児を優先しながら無理なく学ぶ意義と注意点、おすすめ分野（クラウド・AI・言語アップデート）、スキマ時間の学習法、役立つ資格、教育訓練給付金など支援制度、復職・転職への活かし方を実データで解説します。",
  alternates: { canonical: "/articles/reskilling-leave/" },
  openGraph: {
    title: "育休中のスキルアップ・リスキリングガイド｜エンジニアが復職・転職に向けて学ぶ方法",
    description:
      "育休中のエンジニアがスキルアップ・リスキリングに取り組む方法を実データで解説。おすすめ学習分野・スキマ時間の学習法・資格・教育訓練給付金などの支援制度・復職/転職への活かし方まで。",
    url: "https://women-engineer.com/articles/reskilling-leave/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "育休中のスキルアップ・リスキリングガイド｜エンジニアが復職・転職に向けて学ぶ方法",
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
    "育休中のエンジニアがスキルアップ・リスキリングに取り組む方法、おすすめ学習分野、資格、教育訓練給付金などの支援制度、復職・転職への活かし方を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/reskilling-leave/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "育休中にスキルアップの勉強をするのは大変ではないですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最優先は赤ちゃんの育児と自分の体の回復で、勉強は「できる範囲で」が大原則です。新生児期（生後0〜2か月）は睡眠も細切れで学習どころではないため、無理に始める必要はありません。多くの先輩ママエンジニアは、生活リズムが少し整う生後4〜6か月頃から、1日15〜30分のスキマ時間で再開しています。月単位の資格期限ではなく『毎日5分でも触れる』を目標にし、できない日があっても自分を責めない設計にすることが、育児と両立しながら続けるコツです。",
      },
    },
    {
      "@type": "Question",
      name: "育休中のエンジニアは何を勉強するのがおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "復職後に直結する『今の延長線上の学び』が最も現実的でおすすめです。具体的には、(1)AWS認定クラウドプラクティショナー・ソリューションアーキテクトなどクラウド資格、(2)Python×生成AI（LLM/RAG）やG検定などAI領域、(3)担当言語のメジャーバージョンアップ（例: Python・Java・Reactの新機能）のキャッチアップの3つが鉄板です。ブランクで一番怖いのは技術の浦島太郎状態なので、まずは使っていた技術スタックの最新動向を追うだけでも復職時の不安が大きく減ります。",
      },
    },
    {
      "@type": "Question",
      name: "育休中でも教育訓練給付金は使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "在職中（育休中）で雇用保険の被保険者であれば、対象の指定講座を受講・修了することで教育訓練給付金を利用できます。一般教育訓練給付は受講費用の20%（上限10万円）、専門実践教育訓練給付は最大で経費の80%（年間上限64万円）が支給されます。給付金は『受講開始日時点で支給要件を満たすか』が条件のため、申し込み前にハローワークで受給資格を確認するのが確実です。育児休業給付金（賃金のおおむね67%相当）とは別制度なので、併用しても育休給付には影響しません。",
      },
    },
    {
      "@type": "Question",
      name: "育休中に取っておくと復職・転職で評価される資格は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "学習時間が読みやすく、復職後の実務や転職市場で評価されやすいのは、AWS認定クラウドプラクティショナー（合格目安30〜50時間）、基本情報技術者・応用情報技術者、Python 3 エンジニア認定基礎試験、JDLA のG検定（生成AI・ディープラーニングの基礎）あたりです。クラウドとAIの基礎資格は近年求人要件でも目にする機会が増えており、ブランクがあっても『学び続けている人』という客観的な証明になります。1冊の参考書とオンライン講座1本で完結できるものから始めるのが挫折しないコツです。",
      },
    },
    {
      "@type": "Question",
      name: "育休中のリスキリングは転職活動でアピールになりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "なります。育休というブランク期間に、空白ではなく『学び直しの期間』としての実績があると、面接での印象が大きく変わります。資格の取得や、スキマ時間で作った小さなポートフォリオ（個人開発アプリやGitHubの草）は、自走力と学習意欲の客観的な証拠になります。ただし無理は禁物で、転職の軸（働き方の希望・年収・職種）が固まっていないうちは、まずIT特化型や女性特化型のエージェントに相談し、市場が求めるスキルを聞いてから学習分野を決めると、努力が無駄になりません。",
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
              { label: "育休中のスキルアップ・リスキリングガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              働き方ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              育休中のスキルアップ・リスキリングガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                エンジニアが育児を優先しながら、復職・転職に向けて無理なく学ぶ方法
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. 育休中に学ぶ意義と注意点（無理しないが大前提）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 育休中エンジニアにおすすめの学習分野</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. スキマ時間でできる学習方法（STEP）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 復職・転職に役立つ資格</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. リスキリング支援制度・給付金</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 学んだことを復職・転職に活かす</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. 育休リスキリングの体験事例</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 意義と注意点 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育休中に学ぶ意義と注意点（無理しないが大前提）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT・Web業界は技術の移り変わりが速く、1年の育休でも「気づけばライブラリやクラウドのサービスが大きく変わっていた」ということが起こります。育休中の少しずつのスキルアップ・リスキリングは、この<strong>ブランクへの不安をやわらげ、復職や転職時の自信につながる</strong>のが最大の意義です。AI・データ・クラウドなどデジタル分野の需要は拡大しており、この時期の学び直しは自分の市場価値を保つ・高める効果があります。
            </p>
            <p>
              ただし、忘れてはいけない大前提があります。<strong>育休はあくまで「育児と体の回復のための休業」</strong>であり、スキルアップは義務ではありません。新生児期は睡眠も細切れで、まとまった学習時間は取れないのが普通です。「学べない時期があって当たり前」という前提で、できる範囲で取り組むことが、結果的に長く続けるコツになります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>学ぶメリット</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>技術の浦島太郎状態を防ぎ、復職初日の不安を減らせる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>資格・ポートフォリオがブランクを埋める客観的な実績になる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>復職後により働きやすい職種・条件への転職の選択肢が広がる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>「コードに触れる時間」が自分のリフレッシュ・自己肯定感にもなる</span></li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#f3c6c2", backgroundColor: "#fff5f4" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#f97066" }}>注意点（育児優先・無理しない）</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-1 font-bold">!</span><span>育児・睡眠・体調回復が最優先。学習は「余力があれば」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-1 font-bold">!</span><span>「毎日2時間」など重い目標は禁物。15分でも継続を重視</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-1 font-bold">!</span><span>できない日があっても自分を責めない。比較・焦りは逆効果</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-1 font-bold">!</span><span>パートナーと家事育児を分担し、学習時間を「もらう」前提で</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 おすすめ学習分野 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育休中エンジニアにおすすめの学習分野</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              何を学ぶか迷ったら、まずは<strong>「今の仕事の延長線上」</strong>を選ぶのが現実的です。ゼロから新分野に挑戦するより、使っていた技術スタックの最新動向や、隣接する高需要スキルを押さえる方が、復職後すぐに役立ち挫折もしにくいからです。下表は2026年時点で特に需要が高く、育休中の学び直しにおすすめの分野です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>学習分野</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>具体例</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>こんな人におすすめ</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>クラウド</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>AWS / Google Cloud / Azure、認定クラウドプラクティショナー</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>需要が高く求人要件にも頻出。資格で学習が可視化しやすい</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>AI・生成AI</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Python × LLM / RAG、データ分析、G検定（JDLA）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>エンジニアの幅を広げたい人。今いちばん伸びる領域</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>言語のアップデート</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>担当言語の新バージョン（Python / Java / React / TypeScript）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>復職前提でブランクを最小化したい人。最優先で着手しやすい</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>基礎・上流の体系化</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>基本情報 / 応用情報技術者、設計・データモデリング</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>我流で来た知識を体系化したい人。長く効く土台になる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>周辺スキル</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Webマーケティング、英語、SQL / データベース</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>論理的思考を活かして職種の幅を広げたい人</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            迷ったときの優先順位は <strong>(1)担当言語の最新動向 →(2)クラウド資格 →(3)AI・生成AI</strong> がおすすめ。まず復職時の不安を消し、次に市場価値を上げる順番です。
          </p>
        </div>
      </section>

      {/* sec3 スキマ時間STEP */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">スキマ時間でできる学習方法（STEP）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              育児中の学習は「まとまった2時間」ではなく「<strong>細切れの15〜30分をどう積むか</strong>」が勝負です。授乳中・寝かしつけ後・お昼寝中など、スマホ1台で進められる方法を中心に組み立てましょう。次の順序で無理なく軌道に乗せていきます。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "体と生活リズムが整ってから始める", "新生児期（生後0〜2か月）は無理に始めない。睡眠が少し読めてくる生後4〜6か月頃を目安に、まずは『1日5分スマホで技術記事を読む』からでOK。"],
              ["STEP2", "学習時間を“家族と決める”", "パートナーと相談し『土日の午前にお昼寝中の30分』など枠を確保。一時保育やファミリーサポートを使う日を作るのも有効。罪悪感を持たない仕組み化が大切。"],
              ["STEP3", "スマホで完結する教材を使う", "Udemyの動画講座やオンライン学習サービスはセクションが細かく分かれ、授乳中でも1本ずつ進められる。倍速・字幕・オフライン保存を活用してスキマに最適化。"],
              ["STEP4", "資格を“ゴール”にして区切る", "AWSクラウドプラクティショナーや基本情報など、ゴールが明確な資格を1つ設定。月単位の期限ではなく『合格まで毎日少し』で、進捗が見えてモチベが続く。"],
              ["STEP5", "もくもく会・コミュニティで孤独を防ぐ", "ママエンジニアのオンラインもくもく会やSNSコミュニティに参加。同じ境遇の仲間がいると継続率が上がり、復職・転職の情報も得られる。"],
              ["STEP6", "小さなアウトプットを残す", "学んだことでミニアプリを作る・GitHubに草を生やす・学習ログを書く。完璧でなくてOK。この“形に残る実績”が後の転職活動で効く。"],
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

      {/* sec4 資格 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">復職・転職に役立つ資格</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              育休中の学習は「ゴールが見える資格」と相性が良いです。下表は学習時間が読みやすく、復職後の実務や転職市場でも評価されやすい資格をまとめたものです（学習時間はIT実務経験者の目安）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>資格</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>学習時間の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>特徴</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>AWS認定クラウドプラクティショナー</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約30〜50時間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>クラウドの入門資格。需要が高く、まず1つ取るのに最適</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>G検定（JDLA）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約30〜40時間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>AI・ディープラーニングの基礎を体系化。生成AI時代の入口</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>基本情報技術者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約100〜150時間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>国家資格。我流知識の体系化に。通年受験(CBT)で予定を組みやすい</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>応用情報技術者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約200時間〜</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>上流・設計の知識を強化。年2回の試験日が学習のペース作りに</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>Python 3 エンジニア認定基礎試験</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約30〜40時間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>需要の高いPythonの基礎を再確認。AI・データ分野への足がかり</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>育休中の資格選び・3つのコツ</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>1冊＋オンライン講座1本で完結</strong>する資格から。教材を絞ると挫折しにくい</li>
              <li>② <strong>CBT方式・通年受験</strong>の資格を優先。子の体調で受験日を動かせる安心感がある</li>
              <li>③ <strong>今の仕事や行きたい職種に直結</strong>するものを。役立つ実感が継続の燃料になる</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 支援制度・給付金 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">リスキリング支援制度・給付金</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              育休中の学び直しは、自費だけで頑張る必要はありません。国や自治体には講座費用を補助する制度が複数あります。在職中（育休中）で雇用保険の被保険者であれば、対象講座を受講・修了することで給付を受けられるケースが多く、<strong>育児休業給付金（賃金のおおむね67%相当）とは別制度なので併用しても育休給付には影響しません</strong>。代表的な制度は次の通りです。
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">教育訓練給付金（厚生労働省）</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>国の制度</span>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                厚生労働大臣の指定講座を修了すると受講費の一部が戻る制度。<strong>一般教育訓練給付は受講費用の20%（上限10万円）</strong>、より専門的な<strong>専門実践教育訓練給付は経費の50%（年間上限40万円）、資格取得＋就業で70%（上限56万円）、賃金が5%以上上昇すれば最大80%（年間上限64万円）</strong>が支給されます。受講開始日時点で支給要件を満たすかが条件のため、申し込み前にハローワークで受給資格を確認しましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">リスキリングを通じたキャリアアップ支援事業（経済産業省）</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>国の制度</span>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                在職者の学び直し〜転職までを伴走支援する事業。キャリア相談・リスキリング講座・転職支援をパッケージで受けられ、<strong>講座受講費用の最大70%（上限56万円）</strong>が補助されます（転職達成時の追加給付を含む）。クラウドやAIなどデジタル講座も対象で、復職後のキャリアチェンジを見据える人に向いています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">自治体・企業の制度</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>地域・社内</span>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                東京都は<strong>「育業中スキルアップ助成金」</strong>で育休中の社員の学び直しを後押しする企業を支援するなど、自治体独自の制度もあります。また、日本リスキリングコンソーシアムでは多数のデジタル講座が無料・割引で提供されています。<strong>勤務先の資格手当・受講費補助・育休中eラーニング</strong>など社内制度も要チェック。まずは人事に確認してみましょう。
              </p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-xs">
            ※給付額・要件は年度や個人の被保険者期間により異なります。最新の正確な情報は、ハローワーク・各制度の公式窓口で必ずご確認ください。
          </p>
        </div>
      </section>

      {/* sec6 復職・転職に活かす */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">学んだことを復職・転職に活かす</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              せっかくの学びは、形にして次のキャリアにつなげましょう。復職か転職かで活かし方は少し変わります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>復職に活かす</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>復職前に上司・チームへ「学んだこと・できること」を共有し、配属やタスクの相談材料にする</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>取得資格を社内の手当・評価制度に反映できないか人事に確認</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>時短勤務でも成果を出しやすいクラウド・自動化の知識は即戦力になる</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>転職に活かす</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>ブランク期間を「リスキリング期間」として職務経歴書・面接で前向きに語る</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>資格・GitHub・ミニアプリを自走力と学習意欲の証拠として提示</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>リモート・時短など働き方の希望を軸に、女性に理解のある企業を選ぶ</span></li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong>学習分野を決める前にエージェントに相談するのも有効です。</strong>転職の軸（働き方・年収・職種）が固まらないうちに闇雲に学ぶより、市場が求めるスキルを聞いてから学習テーマを決めた方が、限られた育休中の時間とエネルギーを無駄にせずに済みます。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>復職後のキャリアや転職を見据えるなら、技術を正当に評価してくれるIT特化型と、女性の働き方に寄り添う女性特化型の併用が効果的です。育休中の情報収集だけでも登録しておくと安心です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーが、学んだスキルやブランクを踏まえた提案をしてくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと年収交渉力に定評があり、復職後のキャリアアップ転職にも向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモート・時短など、女性のキャリア継続に配慮した求人を中心に紹介。育児と両立できる働き方の条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <p className="font-bold text-lg mb-2">育休中のうちに情報収集だけでも始めよう</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。相談は無料です。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec8 体験事例 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育休リスキリングの体験事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Cさん（30代前半・フロントエンド→AI領域へ幅を広げ復職）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}><p className="text-xs font-bold text-text-light mb-1">育休前</p><p className="text-sm font-bold">フロントエンドエンジニア / AIは未経験</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}><p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>育休中〜復職後</p><p className="text-sm font-bold">G検定・データ系資格を取得 / 課題解決を牽引する役割へ</p></div>
              </div>
              <p className="text-sm text-text-light">生後半年頃から子のお昼寝中にオンライン講座でAI・ディープラーニングの基礎を学習。G検定とデータ系の検定に合格し、復職後は『エンジニアとしての幅を広げ、課題解決を牽引する人材』としてキャリアの軸を太くしました。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Dさん（20代後半・事務職→育休中にプログラミング学習で転職）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}><p className="text-xs font-bold text-text-light mb-1">育休前</p><p className="text-sm font-bold">事務職（IT未経験）</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}><p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>育休中〜転職後</p><p className="text-sm font-bold">独学でプログラミング学習 / Webエンジニアへ転職</p></div>
              </div>
              <p className="text-sm text-text-light">育休中のリスキリングとしてスキマ時間にプログラミングを独学。小さなWebアプリを作りながら学び、復職を機にWebエンジニアへキャリアチェンジしました。『無理のない範囲で毎日少しずつ』を続けたことが、未経験からの転職を実現させた最大の要因だったと振り返っています。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-xs">
            ※体験事例は、公開されている育休リスキリングの体験談・インタビューをもとに構成した一般的なケースです。成果には個人差があります。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec9" className="py-10">
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
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/after-maternity/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>産休・育休後の働き方ガイド</h3><p className="text-sm text-text-light">復帰後のキャリアと両立のコツ</p></a>
            <a href="/articles/return-to-work/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>復職・職場復帰ガイド</h3><p className="text-sm text-text-light">ブランクからスムーズに戻る準備</p></a>
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの資格ガイド</h3><p className="text-sm text-text-light">転職に役立つ資格を厳選紹介</p></a>
            <a href="/articles/mama-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>ママエンジニアの働き方</h3><p className="text-sm text-text-light">育児と両立しながら働くリアル</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">育休明けのキャリアを、今から準備しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたのペースに合った働き方とキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
