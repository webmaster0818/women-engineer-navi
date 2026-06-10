import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの基本情報技術者試験ガイド｜難易度・合格率・勉強法・取得メリット",
  description:
    "女性エンジニアが基本情報技術者試験を取得するためのガイド。IPA国家資格の試験概要（科目A・B／CBT通年）、合格率（約40%）、勉強時間200時間の目安と勉強法、おすすめ教材、資格手当や転職での評価、女性に役立つ理由を実データで解説します。",
  alternates: { canonical: "/articles/cert-kihonjoho/" },
  openGraph: {
    title: "女性エンジニアの基本情報技術者試験ガイド｜難易度・合格率・勉強法・取得メリット",
    description:
      "基本情報技術者試験の概要・合格率・勉強時間・勉強法・おすすめ教材・取得メリット・年収への影響を、女性エンジニア視点で実データ解説。",
    url: "https://women-engineer.com/articles/cert-kihonjoho/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの基本情報技術者試験ガイド｜難易度・合格率・勉強法・取得メリット",
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
    "基本情報技術者試験の概要・合格率・勉強時間・勉強法・おすすめ教材・取得メリット・年収への影響を、女性エンジニア視点で実データ解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/cert-kihonjoho/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "基本情報技術者試験は未経験の女性でも合格できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。基本情報技術者試験はITスキル標準（ITSS）でレベル2に位置づけられる入門〜基礎レベルの国家資格で、IT未経験者でも約200時間（1日2〜3時間で2〜3か月強）の学習で合格を狙えます。文系・未経験から1か月半で合格した例もあります。鬼門は科目Bのアルゴリズムとプログラミングですが、疑似言語のトレースに慣れれば突破できます。まずは科目Aの知識をインプットし、科目Bは「過去問道場」などで早めに手を動かすのが合格の近道です。",
      },
    },
    {
      "@type": "Question",
      name: "基本情報技術者試験の合格率と合格基準を教えてください。",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CBT方式となった令和6年度（2024年4月〜2025年3月）の通年合格率は約40.8%でした。CBT導入直後の2023年は56.4%と高水準でしたが、難易度調整を経て現在は35〜41%前後で推移しています。合格基準は科目A・科目Bともに1,000点満点中600点以上（IRT＝項目応答理論で採点）。両方をクリアして初めて合格となります。受験料は7,500円（税込）です。",
      },
    },
    {
      "@type": "Question",
      name: "基本情報技術者試験はいつ・どこで受けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2023年度から通年のCBT（Computer Based Testing）方式になり、全国のテストセンターで都合のよい日時を選んで受験できます。年に2回の一斉試験を待つ必要がなく、申込みも随時受け付けています。育児や仕事の合間にスケジュールを組みやすいため、ライフイベントを抱えながら学ぶ女性にとって挑戦しやすい資格です。合格発表も後日Webで確認でき、不合格でも一定期間後に再受験できます。",
      },
    },
    {
      "@type": "Question",
      name: "基本情報技術者試験を取ると転職や年収で有利になりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "特に異業種からIT職へ転職する際に効果的です。国家資格としてITの基礎知識を客観的に証明でき、ベンチャーより大手・SIerで評価される傾向があります。多くの企業が資格手当（月5,000〜10,000円）や合格報奨金（2万〜10万円、企業によっては数十万円）を用意しており、保有者の年収目安は600万円前後とされます。資格そのものより「基礎を体系的に学んだ証明」として、未経験採用やポテンシャル採用の後押しになる点が大きなメリットです。",
      },
    },
    {
      "@type": "Question",
      name: "基本情報技術者試験の次は何を目指せばよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "王道は同じIPAの応用情報技術者試験（AP・レベル3）です。基本情報で身につけた基礎の上に、設計・マネジメント・記述式の応用力が加わり、評価も年収も一段上がります。実務志向ならAWS認定（クラウド）やLPIC／Linux、データ活用ならデータベーススペシャリストなど、目指すキャリアに合わせて選ぶのがおすすめです。まず基本情報で土台を固め、現場経験を積みながら次の資格に挑戦するとスキルが着実に積み上がります。",
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
              { label: "基本情報技術者試験ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              資格ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの基本情報技術者試験ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                難易度・合格率・勉強法・取得メリットを実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. 基本情報技術者試験とは（試験概要）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 難易度・合格率（データで見る）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 女性エンジニアに役立つ理由</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 出題範囲と科目A・科目B</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 勉強時間の目安と勉強法（STEP）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. おすすめ教材</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 取得後の年収・キャリアへの影響</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. 次に目指す資格</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 試験概要 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">基本情報技術者試験とは（試験概要）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              基本情報技術者試験（FE：Fundamental Information Technology Engineer Examination）は、独立行政法人IPA（情報処理推進機構）が実施する<strong>国家試験</strong>です。経済産業省認定の情報処理技術者試験のひとつで、ITエンジニアの登竜門として広く認知されています。ITスキル標準（ITSS）では<strong>レベル2</strong>に位置づけられ、ITパスポート（レベル1）の一段上、応用情報技術者（レベル3）の一段下にあたります。
            </p>
            <p>
              試験は<strong>「科目A試験」と「科目B試験」</strong>の2部構成。2023年度の制度改定で旧「午前・午後試験」から刷新され、出題数・試験時間がコンパクトになりました。最大の特徴は、<strong>通年のCBT（Computer Based Testing）方式</strong>であること。全国のテストセンターで、自分の都合のよい日時を選んで受験できます。年2回の一斉試験を待つ必要がないため、仕事や育児と両立しながら挑戦しやすいのが魅力です。
            </p>
            <p>
              「IT全般の基礎知識」と「アルゴリズム・プログラミングの基本的な思考力」をバランスよく問う試験で、特定の言語に縛られないため、これからエンジニアを目指す未経験者にも、現場の知識を体系的に整理したい実務者にも適しています。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>試験の基本データ（2026年時点）</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>主催：IPA（情報処理推進機構）／経済産業省認定の国家試験</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>方式：通年CBT（全国のテストセンターで随時受験）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>構成：科目A（60問・四肢択一）＋ 科目B（20問・多肢選択）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>合格基準：科目A・科目Bとも1,000点満点中600点以上（IRT採点）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>受験料：7,500円（税込）／受験資格・年齢制限なし</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>科目A免除制度：IPA認定講座の修了で科目Aが1年間免除</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 難易度・合格率 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">難易度・合格率（データで見る）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              基本情報技術者試験の合格率は、<strong>おおむね35〜41%</strong>で推移しています。CBT方式に移行した2023年4月は56.4%と高水準でスタートしましたが、その後の難易度調整で落ち着き、令和6年度（2024年4月〜2025年3月）の通年合格率は<strong>約40.8%</strong>でした。国家資格としては「しっかり対策すれば十分合格できる」現実的な難易度です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>時期・区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>合格率の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>2023年4月（CBT初月）</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約56.4%</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>新制度スタート直後で高水準</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>令和6年度（2024〜25）</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約40.8%</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>通年合計。現在の標準的な水準</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>2025年12月（月次例）</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約35.1%</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>月により変動あり</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>難易度（ITSS）</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>レベル2</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ITパスポート（Lv1）の上位</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>難所は「科目B」</h3>
            <p className="text-sm text-text-light leading-relaxed">
              受験者がつまずきやすいのは、論理的思考力が直接問われる<strong>科目B（アルゴリズムとプログラミング・情報セキュリティ）</strong>です。知識の暗記で乗り切れる科目Aと違い、科目Bは疑似言語のトレース（プログラムの動きを1行ずつ追う作業）に慣れが必要。逆に言えば、科目Bを早めに繰り返し練習しておけば、合格はぐっと近づきます。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 女性に役立つ理由 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアに役立つ理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされますが、未経験からのキャリアチェンジや、ブランクからの復職を目指す女性にとって、基本情報技術者試験は<strong>「客観的な実力の証明書」</strong>として大きな武器になります。特に次の点で、女性のキャリア形成と相性のよい資格です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>1. 異業種からの転職で「基礎」を証明できる</h3>
              <p className="text-text-light text-sm leading-relaxed">事務職や別業界からITへ移る際、職歴では実力が伝わりにくいもの。国家資格の合格は「ITの基礎を体系的に学んだ証拠」として、未経験・ポテンシャル採用の通過率を高めてくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3aed" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>2. 通年CBTで自分のペースに合わせられる</h3>
              <p className="text-text-light text-sm leading-relaxed">一斉試験ではないため、育児や仕事の合間に受験日を設定可能。体調や予定が読みにくいライフステージでも、無理なく挑戦・再受験できます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>3. 学んだ知識が現場で長く効く</h3>
              <p className="text-text-light text-sm leading-relaxed">ネットワーク・DB・セキュリティ・アルゴリズムなど、特定言語に依存しない普遍的な土台を学べます。ブランクが空いても色あせにくく、復職後の理解の速さにつながります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3aed" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>4. 資格手当・報奨金で待遇に直結しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">多くの企業が月5,000〜10,000円の資格手当や合格報奨金を用意。性別に関係なく支給されるため、成果が待遇に反映されやすく、年収交渉の材料にもなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 出題範囲・科目 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出題範囲と科目A・科目B</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              出題は<strong>「テクノロジ系・マネジメント系・ストラテジ系」</strong>の3分野から構成されます。科目Aで幅広い知識を、科目Bでアルゴリズムとセキュリティの実践力を問う形です。下表で全体像を押さえましょう。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>科目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>出題数・形式</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>主な出題範囲</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>科目A</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>60問・四肢択一</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>テクノロジ系41問（基礎理論・DB・ネットワーク・セキュリティ等）／マネジメント系7問（PM・サービスマネジメント）／ストラテジ系12問（経営・法務）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>科目B</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>20問・多肢選択</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>アルゴリズムとプログラミング（約8割・疑似言語）／情報セキュリティ（約2割）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            採点は<strong>IRT（項目応答理論）</strong>方式で、「1問○点」という素点配点は公開されていません。各科目1,000点満点中<strong>600点以上</strong>で合格。両科目を同日に続けて受験する形式です。科目Bは特定のプログラミング言語ではなく<strong>IPA独自の「疑似言語」</strong>で出題されるため、言語経験がなくても対策できます。
          </p>
        </div>
      </section>

      {/* sec5 勉強時間と勉強法（STEP） */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">勉強時間の目安と勉強法</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              目安となる勉強時間は、<strong>IT未経験者で約200時間</strong>（1日2〜3時間で2〜3か月強）、<strong>基礎知識がある人で50〜100時間</strong>ほど。文系・未経験から1か月半で合格した例もあり、進め方しだいで短縮も可能です。次のSTEPで進めると挫折しにくくなります。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "全体像をテキストでつかむ", "まずは1冊のテキストを通読し、IT用語と分野の全体像を把握。完璧を目指さず「こういう話があるんだ」と俯瞰するのが目的。イラスト系の入門書が向いています。"],
              ["STEP2", "科目Aを過去問でインプット", "科目Aは知識勝負。Web問題集「過去問道場」で繰り返し解き、間違えた分野だけテキストに戻る。同じ問題が形を変えて再出題されるため、過去問演習が最も効率的です。"],
              ["STEP3", "科目Bを早めに着手する", "最大の難所・科目Bは後回し厳禁。疑似言語のトレース（プログラムを1行ずつ追う）に早く慣れることが合否を分けます。サンプル問題・公開問題で手を動かしましょう。"],
              ["STEP4", "アルゴリズム＆セキュリティを反復", "科目Bの8割はアルゴリズム、2割はセキュリティ。配列・ループ・条件分岐の典型パターンを繰り返し、解法の型を体に入れます。1日1問でも継続が効きます。"],
              ["STEP5", "本番形式で時間を計って演習", "科目A・Bを通しで解き、時間配分の感覚をつかむ。CBTは画面操作にも慣れが必要なので、IPA公開のサンプルやCBT体験で操作感を確認しておくと安心です。"],
              ["STEP6", "苦手分野を直前に総ざらい", "受験日が自由に選べるのがCBTの強み。仕上がりを見て日程を確定し、直前は間違えた問題と苦手分野を集中復習。自信がついたタイミングで申込みましょう。"],
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

      {/* sec6 おすすめ教材 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ教材</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              基本情報は<strong>「定番テキスト1冊 ＋ 無料の過去問サイト」</strong>で独学合格を狙える資格です。お金をかけすぎず、王道の組み合わせで進めるのが効率的です。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">キタミ式イラストIT塾 基本情報技術者</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>入門テキスト</span></div>
              <p className="text-sm text-text-light">イラストが豊富で、完全なIT初心者でも読み進めやすい定番書。難しい用語をやさしくかみ砕いて解説してくれます。ただし科目B対策は手薄なので、後述の問題演習と組み合わせるのが前提です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">栢木先生の基本情報技術者教室</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>入門テキスト</span></div>
              <p className="text-sm text-text-light">「イメージ＆クレバー方式」で要点を覚えやすいロングセラー。キタミ式と並ぶ定番で、コンパクトにまとまっているため短期間で全体を回したい人に向いています。好みで1冊選べばOKです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">基本情報技術者試験ドットコム（過去問道場）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>無料・問題演習</span></div>
              <p className="text-sm text-text-light">科目A対策の最有力。無料でスマホからも解け、分野別の演習や正答率の記録も可能です。「過去問道場だけで合格できた」という声もあるほど。テキストと併用して、解説がわかりにくい問題だけ書籍で補うのが王道です。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            科目B（アルゴリズム）が不安な場合は、科目B専用の問題集を1冊足すと安心です。育児や仕事の合間に学ぶなら、<strong>スマホで進められる無料の過去問サイト＋通学不要のテキスト独学</strong>が、時間とお金の両面で現実的です。
          </p>
        </div>
      </section>

      {/* sec7 年収・キャリアへの影響 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">取得後の年収・キャリアへの影響</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              基本情報技術者試験は、それ単体で年収が跳ね上がる「魔法の資格」ではありません。しかし<strong>転職市場での評価・社内待遇・キャリアの土台</strong>という3つの面で、着実にプラスに働きます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>影響する領域</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>具体的な効果</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>転職・就職</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>異業種→IT職で特に有利。大手・SIerで評価されやすく、未経験採用の通過率が上がる</td></tr>
                <tr style={{ backgroundColor: "#f8fafb" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>資格手当</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>月5,000〜10,000円が相場。毎月の固定給アップにつながる</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>合格報奨金</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>2万〜10万円が相場。企業によっては数十万円の一時金も</td></tr>
                <tr style={{ backgroundColor: "#f8fafb" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>年収目安</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>保有エンジニアの目安は600万円前後（SE平均は431万〜592万円）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>「資格＋実績」で価値が最大化する</h3>
            <p className="text-sm text-text-light leading-relaxed">
              基本情報の本当の価値は、<strong>基礎を体系的に学んだ証明</strong>にあります。資格だけで高年収になるわけではなく、ポートフォリオや実務経験と組み合わせることで効果が最大化します。女性が年収交渉やキャリアアップを進める際の「客観的な裏づけ」として活用し、次のステップ（応用情報や専門資格）につなげていくのが理想です。
            </p>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>基本情報を取得したら、その資格や学習実績を正しく評価してもらえる場で活かすことが大切です。IT特化型と女性特化型の併用が効果的です。</p>
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

      {/* sec9 次に目指す資格 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">次に目指す資格</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>基本情報で土台を固めたら、キャリアの方向性に合わせて次の資格に挑戦しましょう。王道は同じIPAの応用情報技術者試験です。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>応用情報技術者試験（AP）</h3><p className="text-sm text-text-light">基本情報の正統な上位資格（ITSSレベル3）。設計・マネジメント・記述式が加わり、評価・年収ともに一段アップ。次の一歩の本命です。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>AWS認定／クラウド系</h3><p className="text-sm text-text-light">実務直結の人気資格。クラウド経験は年収に直結しやすく、リモート求人とも相性◎。インフラ志向の女性に好相性です。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>データベーススペシャリスト</h3><p className="text-sm text-text-light">DB設計の専門性を証明する高度試験。バックエンドやデータ領域でキャリアを深めたい人の指標になります。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>情報処理安全確保支援士／LPIC</h3><p className="text-sm text-text-light">セキュリティやLinux/インフラを深めたい人向け。需要が高く長く通用する領域で、専門性を武器にできます。</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの資格ガイド</h3><p className="text-sm text-text-light">取るべき資格を目的別に整理</p></a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>未経験からエンジニア転職</h3><p className="text-sm text-text-light">学習ロードマップと始め方</p></a>
            <a href="/articles/programming-school/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>プログラミングスクール活用法</h3><p className="text-sm text-text-light">独学とスクールの使い分け</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">資格を活かして理想の転職へ</h2>
            <p className="text-white/90 mb-6">基本情報で得た基礎を強みに。まずはエージェントに無料相談し、あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
