import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの応用情報技術者試験ガイド｜難易度・合格率・勉強法・キャリア",
  description:
    "女性エンジニアが応用情報技術者試験を取得するための完全ガイド。試験概要（午前80問・午後記述式）、合格率約20〜25%の難易度、基本情報との違い、勉強時間200〜500時間の勉強法、おすすめ教材、取得後の年収・キャリア（高度試験・支援士への足がかり）を実データで解説します。",
  alternates: { canonical: "/articles/cert-oyojoho/" },
  openGraph: {
    title: "女性エンジニアの応用情報技術者試験ガイド｜難易度・合格率・勉強法・キャリア",
    description:
      "応用情報技術者試験の概要・難易度・合格率・勉強法・教材・取得後の年収とキャリアを実データで徹底解説。女性エンジニアがスキルを証明し市場価値を高める方法。",
    url: "https://women-engineer.com/articles/cert-oyojoho/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの応用情報技術者試験ガイド｜難易度・合格率・勉強法・キャリア",
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
    "応用情報技術者試験の概要・難易度・合格率・勉強法・教材・取得後の年収とキャリアを実データで解説。女性エンジニアがスキルを証明し市場価値を高める方法。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/cert-oyojoho/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "応用情報技術者試験の合格率はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "応用情報技術者試験の合格率は例年おおむね20〜25%で推移しています。令和7年度（2025年度）秋期試験では受験者数44,005人に対し合格者10,792人で合格率24.5%、同年春期は22.1%、令和6年度秋期は28.5%でした。合格率40%台の基本情報技術者試験と比べると難関ですが、受験者は学生から社会人まで幅広く、合否は午前・午後それぞれ100点満点中60点以上で決まります。学歴や年齢に関係なく、勉強時間を確保して過去問演習を積めば社会人でも十分合格できる試験です。",
      },
    },
    {
      "@type": "Question",
      name: "基本情報技術者を持っていなくても応用情報技術者は受けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "受けられます。応用情報技術者試験に受験資格はなく、誰でも申し込めるため、基本情報を飛ばしていきなり応用情報に挑戦することも可能です。ただし応用情報はITSSレベル3に位置づけられ、基本情報（レベル2）の知識を前提に出題されます。IT未経験の方は、まず基本情報やITパスポートで土台を固めてから応用情報に進むと、午後の記述式にも対応しやすくなります。すでに実務経験がある女性エンジニアなら、基本情報を経ずに応用情報から狙うのも効率的な選択肢です。",
      },
    },
    {
      "@type": "Question",
      name: "応用情報技術者の合格に必要な勉強時間はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "目安は、基本情報合格済みなど一定の知識がある人で約200時間、IT初学者では400〜500時間とされます。1日2時間なら3〜5か月程度が一つのペースです。午前は過去問道場などで過去問を繰り返し、午後は記述式のため「午後問題の重点対策」のような専用問題集で読み方と書き方を訓練するのが効率的。働きながらでも、通勤時間や夜の1〜2時間をコツコツ積み上げれば合格圏に届きます。",
      },
    },
    {
      "@type": "Question",
      name: "応用情報技術者を取ると年収や転職にどう影響しますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "応用情報は体系的なIT知識を客観的に証明できる国家資格で、転職市場で「ワンランク上のエンジニア」として評価されやすくなります。資格手当の相場は月5,000〜20,000円、合格報奨金は5万〜20万円が目安で、同年代の未保有者より年収が50万〜100万円高くなる傾向もあります。さらに合格後2年間は高度試験・情報処理安全確保支援士試験の午前Ⅰが免除され、上位資格への足がかりになります。実務経験を数値で語りにくい時期でも、資格はスキルの裏付けとして書類選考や年収交渉を後押しします。",
      },
    },
    {
      "@type": "Question",
      name: "応用情報技術者試験はCBT方式に変わると聞きました。何が変わりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "令和8年度（2026年度）から、応用情報技術者試験・高度試験・情報処理安全確保支援士試験はパソコンで解答するCBT方式に移行します。従来春期に実施していた区分は「前期試験」として2026年11月頃、秋期区分は「後期試験」として2027年2月頃に実施予定です。出題形式（多肢選択式・記述式）、出題数、試験時間、問う知識・技能の範囲そのものに変更はありません。受験機会の柔軟性が高まる一方、画面上で長文を読み解く形式に慣れておくと安心です。最新の日程・要項はIPA公式サイトで必ず確認しましょう。",
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
              { label: "応用情報技術者試験ガイド" },
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
              女性エンジニアの応用情報技術者試験ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                難易度・合格率・勉強法・取得後のキャリアを実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 応用情報技術者試験とは（試験概要）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 難易度・合格率（データで見る）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 基本情報との違いと取得メリット</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 出題範囲（午前・午後）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 勉強時間と勉強法（STEP）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. おすすめ教材</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 取得後の年収・キャリア</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 女性エンジニアに役立つ理由</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. おすすめ転職エージェント</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 試験概要 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">応用情報技術者試験とは（試験概要）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              応用情報技術者試験（AP）は、IPA（独立行政法人 情報処理推進機構）が実施する国家試験「情報処理技術者試験」の一区分です。ITSS（ITスキル標準）の<strong>レベル3</strong>に位置づけられ、「高度IT人材となるために必要な応用的知識・技能を持ち、ワンランク上のITエンジニアであること」を証明します。基本情報技術者（レベル2）の一段上、ITストラテジストやプロジェクトマネージャなど高度試験（レベル4）の手前にあたる、エンジニアの土台を固める王道資格です。
            </p>
            <p>
              試験は<strong>午前（多肢選択式・80問）</strong>と<strong>午後（記述式・11問中5問選択）</strong>の2部構成。それぞれ試験時間は150分で、午前・午後ともに100点満点中<strong>60点以上</strong>が合格基準です。技術だけでなく、マネジメントや経営戦略（ストラテジ）まで幅広く問われるのが特徴で、IT全体を俯瞰する力が身につきます。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>試験の基本データ（早見表）</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>実施機関：IPA（情報処理推進機構）／国家試験</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>難易度：ITSSレベル3（基本情報の一段上）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>午前：多肢選択式80問／150分／60点以上で合格</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>午後：記述式（11問中5問選択）／150分／60点以上で合格</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>受験資格：なし（誰でも受験可能）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>2026年度（令和8年度）よりCBT方式へ移行（前期2026年11月頃／後期2027年2月頃）</span></li>
              </ul>
            </div>
            <p className="text-sm">
              ※令和8年度（2026年度）からCBT（Computer Based Testing）方式に移行します。出題形式・出題数・試験時間・出題範囲そのものに変更はありません。最新の日程・要項はIPA公式サイトで必ず確認してください。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 難易度・合格率 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">難易度・合格率（データで見る）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              応用情報技術者試験の合格率は、例年おおむね<strong>20〜25%</strong>で推移しています。合格率40%台で推移する基本情報技術者試験と比べると、ぐっと難易度が上がる試験です。受験者数も多く、近年は年間8万人前後（2024年度80,973人、2025年度82,668人）が挑戦する人気資格です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>実施回</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>受験者数</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>合格者数</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>合格率</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>令和6年度 秋期</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>—</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>—</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>28.5%</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>令和7年度 春期</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>—</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>—</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>22.1%</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>令和7年度 秋期</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>44,005人</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>10,792人</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>24.5%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ※合格率はおおむね20〜25%で推移。年度・回により変動します。最新の統計はIPA公式の「統計情報」で確認してください。
          </p>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>難しいと言われる3つの理由</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>午後が記述式</strong>。用語暗記だけでは通用せず、問題文を読み解いて自分の言葉で説明する力が必要</li>
              <li>② <strong>出題範囲が広い</strong>。技術だけでなくマネジメント・経営戦略まで網羅され、午後は分野選択の戦略も問われる</li>
              <li>③ <strong>午前・午後の両方で60点</strong>が必須。どちらか一方だけ合格しても次回への持ち越しはできない</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec3 基本情報との違いと取得メリット */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">基本情報との違いと取得メリット</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              基本情報技術者（FE）が「IT人材の登竜門」なら、応用情報技術者（AP）は「高度IT人材への入口」。基本情報がプログラミングや基礎理論など<strong>IT全般の基礎</strong>を問うのに対し、応用情報はそれに加えて<strong>マネジメントやストラテジ（経営戦略・法務）</strong>まで踏み込み、午後が<strong>記述式</strong>になる点が大きな違いです。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>基本情報技術者（FE）</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>応用情報技術者（AP）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ITSSレベル</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>レベル2</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>レベル3</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>合格率の目安</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約40%台</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約20〜25%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>午後の形式</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>多肢選択式</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>記述式</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>問われる視点</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>IT全般の基礎・実装</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>技術＋マネジメント＋戦略</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>上位試験の優遇</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>なし</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>高度試験・支援士の午前Ⅰが2年間免除</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>高度試験への足がかりになる</h3>
              <p className="text-sm text-text-light">合格後2年間は、情報処理安全確保支援士（登録セキスペ）や高度試験（PM・ネットワークスペシャリストなど）の<strong>午前Ⅰが免除</strong>。共通知識を問う関門を飛ばして、専門分野の対策に集中できます。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>スキルを客観的に証明できる</h3>
              <p className="text-sm text-text-light">国家資格として体系的なIT知識を裏付けるため、実務経験を語りにくい時期でも「一定水準のスキルがある」と示せます。官公庁・SIerの案件参画要件になることもあります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>資格手当・報奨金につながる</h3>
              <p className="text-sm text-text-light">資格手当は月5,000〜20,000円、合格報奨金は5万〜20万円が相場（基本情報の約2倍）。企業の評価制度で昇給・昇格の材料になることもあります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>知識が「横断的」に整理される</h3>
              <p className="text-sm text-text-light">技術・マネジメント・戦略を一通り学ぶため、自分の専門以外の全体像が見えるように。設計や要件定義など上流の議論にも入りやすくなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 出題範囲 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出題範囲（午前・午後）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              午前は80問すべて必須の多肢選択式。出題は<strong>テクノロジ系（問1〜50）</strong>、<strong>マネジメント系（問51〜60）</strong>、<strong>ストラテジ系（問61〜80）</strong>の3分野で構成されます。午後は11問中5問を選んで解く記述式で、自分の得意分野を選択できるのが攻略のカギです。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>分野</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>午前の出題</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>主な内容</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>テクノロジ系</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>問1〜50（50問）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>アルゴリズム・DB・ネットワーク・セキュリティ・システム開発</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>マネジメント系</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>問51〜60（10問）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>プロジェクトマネジメント・サービスマネジメント・システム監査</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ストラテジ系</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>問61〜80（20問）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>経営戦略・システム戦略・企業活動・法務</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>午後（記述式・11問中5問選択）</h3>
            <p className="text-sm text-text-light leading-relaxed mb-3">
              午後は「情報セキュリティ」が必須（必答）で、残り10問の中から4問を選択します。プログラミング・DB・ネットワーク・組込みシステム開発・システムアーキテクチャ・経営戦略・プロジェクトマネジメント・システム監査などから、得意分野を選んで解答します。
            </p>
            <p className="text-sm text-text-light leading-relaxed">
              選択戦略のコツは、<strong>事前に「解く分野」を決めて集中対策する</strong>こと。たとえば文系出身でプログラミングに不安があれば、経営戦略・監査・サービスマネジメントなど文章読解で解ける分野を軸にすると合格しやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 勉強時間と勉強法 STEP */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">勉強時間と勉強法（STEP）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              必要な勉強時間の目安は、基本情報合格済みなど基礎がある人で<strong>約200時間</strong>、IT初学者で<strong>400〜500時間</strong>。1日2時間なら<strong>3〜5か月</strong>が一つのペースです。働きながらでも、次の順序で進めれば無理なく合格圏を狙えます。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "全体像をつかむ（インプット）", "まずテキストを1冊通読し、テクノロジ・マネジメント・ストラテジの全体像を把握。完璧を目指さず、まず1周して「地図」を頭に入れます。"],
              ["STEP2", "午前を過去問で固める", "午前は過去問の使い回しが多いのが特徴。『過去問道場』などで過去5〜10回分を繰り返し解き、正答率8割を安定させます。隙間時間にスマホで進めやすいフェーズです。"],
              ["STEP3", "午後の選択分野を決める", "午後は11問中5問選択。情報セキュリティ（必答）に加え、得意・興味のある4分野を早めに固定。あれこれ手を出さず、選んだ分野に集中するのが合格の近道です。"],
              ["STEP4", "午後の記述に慣れる", "『午後問題の重点対策』などで、問題文の読み方と「採点者に伝わる書き方」を訓練。模範解答と自分の答えを照らし合わせ、過不足を埋めていきます。"],
              ["STEP5", "本番形式で時間配分を練習", "午前・午後とも150分の長丁場。本番と同じ時間で過去問を解き、見直しを含めた時間配分とCBT画面での読解に慣れておきます。"],
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
          <h2 className="text-2xl font-bold mb-6">おすすめ教材</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              合格者の定番は<strong>「メインテキスト1冊＋午前過去問＋午後対策1冊」の3冊構成</strong>。過去の合格者アンケートでも「3冊以内で合格」が7割超とされ、教材を絞って繰り返すのが王道です。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">キタミ式イラストIT塾 応用情報技術者</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>入門・インプット</span></div>
              <p className="text-sm text-text-light">すべての解説をイラストで行う定番テキスト。文章だけでは理解しにくいITの概念や仕組みを視覚的に学べ、演習問題・模擬試験も付属。初学者やブランクのある方の1冊目に最適です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">ニュースペックテキスト 応用情報技術者（TAC出版）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>テキスト＋演習</span></div>
              <p className="text-sm text-text-light">オールカラー図解で、午前・午後をこれ1冊でカバーするテキスト＋問題演習一体型。体系的に整理されており、ある程度の基礎がある人がメインに据えるのに向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">午後問題の重点対策</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>午後・記述対策</span></div>
              <p className="text-sm text-text-light">記述式の午後に特化した定番問題集。問題文の読み方と、採点者に評価される記述の書き方が丁寧に解説されており、午後の得点力を底上げします。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">応用情報技術者試験ドットコム「過去問道場」</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>午前・無料Web</span></div>
              <p className="text-sm text-text-light">過去問をWeb・スマホで無料演習できる定番サービス。午前は過去問演習が最重要なので、隙間時間に繰り返し回して正答率を安定させましょう。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 取得後の年収・キャリア */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">取得後の年収・キャリア</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              応用情報技術者は、年収アップとキャリアの選択肢を広げる資格です。資格保有者の年収は<strong>550万〜700万円</strong>がひとつの目安とされ、同年代の未保有者と比べて<strong>50万〜100万円</strong>高くなる傾向も。資格手当（月5,000〜20,000円）や合格報奨金（5万〜20万円）が出る企業も多く、評価制度に直結します。
            </p>
            <p>
              さらに大きいのが<strong>上位資格への展開</strong>。合格後2年間は高度試験・情報処理安全確保支援士の午前Ⅰが免除されるため、次のキャリアを描きやすくなります。たとえばセキュリティに強みを持ちたいなら情報処理安全確保支援士（登録セキスペ。年収目安600万〜1,300万円とされる名称独占資格）、上流に進みたいならプロジェクトマネージャやITストラテジストへ——と、応用情報は「次の一手」の起点になります。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>応用情報を起点とした3つの進路</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>セキュリティの専門家へ</strong>：情報処理安全確保支援士（午前Ⅰ免除を活用）。需要が高く高年収を狙える</li>
              <li>② <strong>上流・マネジメントへ</strong>：プロジェクトマネージャ／ITストラテジストなど高度試験で設計・戦略の専門性を証明</li>
              <li>③ <strong>市場価値を高めて転職・昇給</strong>：体系的知識の裏付けとして書類選考・年収交渉を有利に進める</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec8 女性エンジニアに役立つ理由 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアに役立つ理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされる中、客観的なスキルの証明は女性エンジニアにとって特に大きな武器になります。応用情報は「年齢・学歴・性別に関係なく、点数だけで合否が決まる」フェアな国家試験。次の4点で、女性のキャリアを後押しします。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. スキルを「点数」で客観証明できる</h3>
              <p className="text-text-light text-sm leading-relaxed">主観が入りにくい国家資格なので、実績や経験を割り引いて見られがちな場面でも、一定水準のスキルがあることを揺るぎなく示せます。書類選考の通過率アップにも直結します。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. ブランク期間も自宅学習で前進できる</h3>
              <p className="text-text-light text-sm leading-relaxed">産休・育休などで実務から離れる時期も、テキストと過去問道場で学習を進められます。復職時に「ブランク中も学び続けた証」として資格をアピールでき、復帰のハードルが下がります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 上流・設計の議論に入りやすくなる</h3>
              <p className="text-text-light text-sm leading-relaxed">技術だけでなくマネジメント・戦略まで体系的に学ぶため、要件定義や設計など上流の会話についていきやすくなります。時短勤務でも「設計で評価される」キャリアを築く土台になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 年収交渉・キャリアの幅が広がる</h3>
              <p className="text-text-light text-sm leading-relaxed">資格手当や報奨金、午前Ⅰ免除による上位資格への展開など、年収とキャリアの選択肢が増えます。ライフイベントを経ても長く市場価値を保ちやすくなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec9 エージェント */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>応用情報の取得を年収・キャリアにつなげるには、資格を正当に評価してくれるエージェント選びが重要です。IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーが、応用情報などの資格やスキルを正しく評価したうえで求人を提案してくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと年収交渉力に定評があり、資格をテコにした年収アップを狙う人に向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。資格で高めたスキルを、働き方の条件と両立しながら活かせる職場を探したい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">資格を年収・キャリアに変えるなら</p>
            <p className="text-sm text-text-light mb-4">複数登録して、応用情報を正当に評価してくれるアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
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
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの資格ガイド</h3><p className="text-sm text-text-light">転職・年収に効く資格を総まとめ</p></a>
            <a href="/articles/security/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>セキュリティエンジニア転職ガイド</h3><p className="text-sm text-text-light">支援士の先にある高需要職種</p></a>
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアのキャリアパス</h3><p className="text-sm text-text-light">上流・専門職への進み方</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">資格を活かした転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。応用情報を強みに、あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
