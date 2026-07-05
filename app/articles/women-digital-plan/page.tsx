import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "新・女性デジタル人材育成プランとは？個人が使える支援への入口を解説【2026年】",
  description:
    "内閣府男女共同参画局の「新・女性デジタル人材育成プラン」（令和7年6月10日決定）を一次資料をもとに解説。プランの狙い、4つの活躍パターン別支援メニューの内容、そして個人がこのプランの下で実際に使える窓口——自治体の女性向けデジタル訓練・教育訓練給付・公的職業訓練・マナビDX——への入口を整理します。",
  alternates: { canonical: "/articles/women-digital-plan/" },
  openGraph: {
    title: "新・女性デジタル人材育成プランとは？個人が使える支援への入口を解説【2026年】",
    description:
      "内閣府「新・女性デジタル人材育成プラン」（令和7年6月10日決定）の狙いと4つのパターン別支援を公式資料に忠実に解説。個人が実際に使える制度（自治体事業・教育訓練給付・職業訓練・マナビDX）への入口も整理。",
    url: "https://women-engineer.com/articles/women-digital-plan/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "新・女性デジタル人材育成プランとは？個人が使える支援への入口を解説【2026年】",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
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
    "内閣府男女共同参画局「新・女性デジタル人材育成プラン」（令和7年6月10日決定）の概要と4つの活躍パターン別支援メニューを一次資料をもとに解説し、個人が実際に使える制度への入口を整理する。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/women-digital-plan/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "新・女性デジタル人材育成プランとは何ですか？以前のプランと何が違うのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "新・女性デジタル人材育成プランは、令和7年（2025年）6月10日にすべての女性が輝く社会づくり本部・男女共同参画推進本部の合同会議で決定された政府のプランで、内閣府男女共同参画局が公表しています。前身の「女性デジタル人材育成プラン」（令和4年4月策定）は、コロナ禍が女性の雇用・就業面に大きな影響を及ぼした状況を踏まえ、就労に直結するデジタルスキルを身につけた女性人材の育成の加速化を目的としていました。新プランは、その後3年間のデジタル技術の進展（生成AI等）を踏まえて意義を整理し直したうえで、「デジタルスキルを活かした女性活躍の具体的な姿」を4つのパターンに分け、パターン別にスキル向上・就業支援などの支援メニューを示した点が特徴です（出典: 内閣府男女共同参画局、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "個人が「プランに申し込む」ことはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "できません。プラン自体は政府の政策文書であり、個人向けの申込窓口はありません。個人にとっての実際の入口は、プランに支援メニューとして盛り込まれている個別の制度・事業です。具体的には、(1)教育訓練給付（厚生労働省。プランではAIを含むデジタル講座の対象拡大が明記）、(2)公的職業訓練（求職者支援訓練・ハロートレーニング。デジタル分野コースの設定促進が明記）、(3)自治体が実施する女性デジタル人材育成のセミナー・相談支援・マッチング支援（東京都や埼玉県の女性向けデジタル訓練事業など）、(4)学習ポータルのマナビDX（プラン公式ページから関連リンクとして案内）などが該当します。各制度の使い方は本文の比較表とリンク先の解説記事を参照してください。",
      },
    },
    {
      "@type": "Question",
      name: "プランに挙げられた制度は女性しか使えないのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ。プランは女性デジタル人材の育成と活躍を目的とした政策文書ですが、支援メニューに挙げられている国の制度の多く——教育訓練給付、公的職業訓練、マナビDXなど——は性別を問わず利用できる一般制度です。一方、プランが後押しする自治体の事業には、東京都の女性ITエンジニア育成事業・女性デジタルカレッジや埼玉県の女性のデジタル人材育成推進事業のように女性限定で設計されたものがあり、託児サービスや再就職支援など、育児等でキャリアが中断した人を想定した支援が手厚いのが特徴です（出典: 内閣府男女共同参画局・各事業公式サイト、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "ひとり親家庭向けの支援もプランに含まれていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "含まれています。プラン本文の支援メニューには、ひとり親家庭の親が雇用保険の教育訓練給付金の対象となる講座等を受講・修了した場合にその経費の一部を補助する施策と、シスコシステムズ認定資格・LPI認定資格等のデジタル分野等の民間資格を含む就職に有利となる資格を取得するため養成機関で修業する場合に修業期間中の生活費を支援する施策（いずれもこども家庭庁）が明記されています。具体的な給付額・対象要件・申請窓口はお住まいの自治体（ひとり親家庭支援の担当窓口）で確認してください（出典: 新・女性デジタル人材育成プラン本文、2026年7月参照）。",
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
              { label: "新・女性デジタル人材育成プランとは" },
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
              新・女性デジタル人材育成プランとは？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                個人が使える支援への入口を一次資料で解説【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">公開日: 2026年7月5日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>先に結論：プランとは何か・個人には何が関係あるか</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>何のプラン？</strong> 令和7年（2025年）6月10日に、すべての女性が輝く社会づくり本部・男女共同参画推進本部の合同会議で決定された政府のプラン（公表: 内閣府男女共同参画局）。就労に直結するデジタルスキルの習得支援と、それを活かして働ける環境の整備を、女性活躍の4つのパターン別に体系化したものです。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>個人が申し込むもの？</strong> いいえ。プラン自体に申込窓口はありません。実際の入口は、プランに盛り込まれた<strong>個別の制度</strong>——自治体の女性向けデジタル訓練、教育訓練給付、公的職業訓練、マナビDXなど——です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>この記事の使い方:</strong> プランの中身（4パターン）を公式資料に忠実に押さえたうえで、「自分はどの制度から使えばよいか」の比較表と各制度の解説記事への入口を用意しています。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://www.gender.go.jp/policy/digital/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>内閣府男女共同参画局「女性デジタル人材育成プラン」</a>および同ページ掲載の概要・本文PDF（2026年7月参照）
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. プランの概要（決定日・所管・狙い）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 4つの活躍パターン別支援の内容（公式資料より）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 個人が使える制度への入口（比較表）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 企業・地域側の動き（事例集と環境整備）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 概要 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">プランの概要（決定日・所管・狙い）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「新・女性デジタル人材育成プラン」は、<strong>令和7年（2025年）6月10日、すべての女性が輝く社会づくり本部・男女共同参画推進本部の合同会議で決定</strong>された政府のプランで、内閣府男女共同参画局のサイトで概要・本文・事例集が公開されています（出典: 内閣府男女共同参画局、2026年7月参照）。
            </p>
            <p>
              前身の「女性デジタル人材育成プラン」は令和4年（2022年）4月に策定されました。新型コロナウイルス感染症の感染拡大が特に女性の雇用・就業面に多大な影響を及ぼした状況を踏まえ、<strong>「就労に直結するデジタルスキルを身につけた女性人材の育成の加速化」</strong>を目的としたものです。プラン本文によれば、育児や介護等で時間的・場所的な制約のある女性がデジタルスキルを習得し収入を得られるよう支援する取組は各地で広がった一方、女性デジタル人材の育成と活躍の広がりは依然として限定的と総括されています。
            </p>
            <p>
              新プランはこの3年間のデジタル技術の進展（生成AI等の普及）を概観し、女性がデジタルスキルを身につけることの意義を、<strong>①経験年数に応じた着実な所得向上、②育児・介護等と両立させた経済的自立の実現、③企業等におけるキャリアアップ等、④起業の促進</strong>の4点に整理。そのうえで、デジタルスキルを活かした女性活躍の具体的な姿を4つのパターンに分け、パターン別にスキル向上・就業支援などの支援メニューを提示しています。あわせて、地域におけるデジタルの仕事の創出や柔軟な働き方の推進など、<strong>社会基盤・環境の整備</strong>も盛り込まれています（出典: 新・女性デジタル人材育成プラン概要・本文、2026年7月参照）。
            </p>
            <p>
              なお、プラン本文には「策定の3年後を目途に、各種統計を用いて実績を把握したうえで施策の在り方の見直しを行う」ことも明記されています。つまり期限のある固定文書ではなく、実績を見ながら更新されていく政策枠組みです。
            </p>
          </div>
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
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>新・女性デジタル人材育成プラン</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>決定</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>令和7年（2025年）6月10日 すべての女性が輝く社会づくり本部・男女共同参画推進本部決定（合同会議）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>公表</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>内閣府男女共同参画局（概要・本文・事例集PDFを公開）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>目指す姿</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>女性デジタル人材が多様な形で育成され、かつ存分に活躍できる社会の実現</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>構成</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>活躍パターン別の支援（4パターン）＋社会基盤・環境の整備（マインド改革／地域にデジタルの仕事を創る／働き方改革）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>見直し</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>策定3年後を目途に実績を把握し、施策の在り方を見直し</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: 内閣府男女共同参画局「女性デジタル人材育成プラン」ページおよび「新・女性デジタル人材育成プラン」概要・本文PDF（2026年7月参照）
          </p>
        </div>
      </section>

      {/* sec2 4パターン */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">4つの活躍パターン別支援の内容（公式資料より）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              新プランの核は、「デジタルスキルを活かした女性活躍の具体的な姿」を次の4パターンに分け、それぞれに支援メニューを示したことです。以下は概要・本文PDFの記載を要約したものです（主な施策のみ抜粋）。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>パターン1. デジタル人材として就業し、活躍する</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                ITエンジニアなど「デジタル人材そのもの」として就業する女性を増やすパターンです。こども・若者段階からの底上げが中心で、中学・高校のプログラミング教育の充実、理工系分野の女子学生割合向上に向けた産学官・地域一体の取組、大学等の数理・データサイエンス・AI教育プログラムの文部科学大臣認定、若手セキュリティ人材（セキュリティイノベーター）の育成などが挙げられています。
              </p>
              <p className="text-sm text-text-light leading-relaxed">
                背景として、概要資料にはIT技術者に占める女性の割合が約21%にとどまるデータ（厚生労働省「令和5年賃金構造基本統計調査」より作成）が示されており、デジタル分野は「女性活躍の成長分野」と位置づけられています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>パターン2. 育児・介護等と両立させながらデジタルを活用して働く</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                時間的・場所的な制約のある女性が、デジタルスキルを取得し、それを活かした仕事を得て所得向上を目指すパターンです。<strong>個人にとって最も入口の多いパターン</strong>で、次の施策が明記されています。
              </p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>自治体の育成事業への支援（内閣府）:</strong> 地方公共団体が行う、女性デジタル人材を育成するためのセミナー・就労につなげる相談支援・企業とのマッチングへの支援</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>公的職業訓練（厚生労働省）:</strong> デジタル分野の訓練コースの設定促進等を通じたデジタル人材の育成</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>教育訓練給付（厚生労働省）:</strong> 対象講座のうち、AIを含むデジタルスキルに関する講座を拡大</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>ひとり親家庭支援（こども家庭庁）:</strong> 教育訓練給付対象講座等の経費の一部補助、デジタル分野等の資格取得のため養成機関で修業する場合の生活費支援</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>パターン3. デジタルスキルを身につけてキャリアアップ等を図る</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                いま働いている女性が、デジタルスキル習得でキャリアアップ・キャリアチェンジを図るパターンです。パターン2の施策（自治体事業・公的職業訓練・教育訓練給付等）が再掲されているほか、事業主等が行う職業訓練（IT分野含む）への訓練経費等の助成、非正規雇用労働者の正社員転換に取り組む事業主への助成の拡充、在職者へのキャリア相談からリスキリング・転職までの一体的支援（経済産業省）、IT・データ分野の専門的・実践的な教育訓練講座の経済産業大臣認定、「地方創生カレッジ」でのeラーニング提供などが挙げられています。
              </p>
              <p className="text-sm text-text-light leading-relaxed">
                在職中の読者にとっては、「会社経由の助成つき訓練」と「個人で使う教育訓練給付」の両ルートがこのパターンに束ねられている、と理解するのが実用的です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>パターン4. デジタル技術を活用して起業・事業展開を図る</h3>
              <p className="text-sm text-text-light leading-relaxed">
                デジタルを活用して「やりたい仕事、やりがいのある仕事」を自ら創出するパターンです。全国の男女共同参画センター等でのデジタルを活用した販路拡大講習など、女性の起業の裾野拡大に向けた取組を<strong>地域女性活躍推進交付金をはじめとする財政支援</strong>で後押しすること、男女共同参画機構による外部専門人材データベースの整備とマッチング、J-Startup（政府・民間の集中支援プログラム）における女性起業家の割合を2033年までに20%以上とする目標、「女性、若者／シニア起業家支援資金」等による資金調達支援などが明記されています。
              </p>
            </div>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: 「新・女性デジタル人材育成プラン」概要・本文PDF（内閣府男女共同参画局、2026年7月参照）。各施策の実施時期・詳細は公式資料で要確認。
          </p>
        </div>
      </section>

      {/* sec3 個人が使える制度への入口 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">個人が使える制度への入口（比較表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              ここからが本題です。プランは政策文書なので「プランに申し込む」ことはできませんが、プランに支援メニューとして盛り込まれた制度は、<strong>今日から個人が調べて使える実在の窓口</strong>です。IT転職・リスキリングを目指す読者が使いやすい順に整理します。
            </p>
          </div>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>制度・事業</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>プランでの位置づけ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>こんな人の入口</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>当サイトの解説</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>自治体の女性向けデジタル訓練</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>パターン2・3（自治体のセミナー・相談支援・マッチング支援を国が後押し）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>無料＋伴走支援つきで学びたい人（女性限定設計が多い）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}><a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>東京都 女性ITエンジニア育成事業</a>／<a href="/articles/women-digital-college/" className="underline" style={{ color: "#7c3a55" }}>東京都 女性デジタルカレッジ</a>／埼玉県事業は<a href="/articles/women-it-support-map/" className="underline" style={{ color: "#7c3a55" }}>全国ハブ記事</a>で解説</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>教育訓練給付</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>パターン2・3（AIを含むデジタル講座の対象拡大を明記）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>在職中に費用を抑えて講座・スクールで学びたい人</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}><a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付でITを学ぶ完全ガイド</a></td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>公的職業訓練（求職者支援訓練等）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>パターン2・3（デジタル分野の訓練コース設定促進を明記）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>離職中・雇用保険を受給できない人（無料訓練＋要件を満たせば給付金）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}><a href="/articles/hello-training-it/" className="underline" style={{ color: "#7c3a55" }}>ハロートレーニングでITを学ぶガイド</a></td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>マナビDX</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>プラン公式ページの関連リンクとして案内（経産省・IPAの学習ポータル）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>今日から無料で適性を試したい人（要件なし・誰でも利用可）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}><a href="/articles/manabi-dx/" className="underline" style={{ color: "#7c3a55" }}>マナビDX活用ガイド</a></td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>ひとり親家庭向け支援</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>パターン2・3（講座経費の一部補助・資格取得中の生活費支援を明記）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>ひとり親家庭の親（給付額・要件は自治体窓口で要確認）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>お住まいの自治体のひとり親家庭支援窓口へ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mb-8">
            出典: 「新・女性デジタル人材育成プラン」概要・本文PDF（2026年7月参照）。「プランでの位置づけ」はプラン記載の支援メニューの要約であり、各制度の詳細条件は各公式サイトで要確認。
          </p>
          <div className="rounded-xl p-6" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>迷ったらこの順番で</h3>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>STEP1:</strong> まず<a href="/articles/manabi-dx/" className="underline" style={{ color: "#7c3a55" }}>マナビDX</a>の無料講座で適性を確認（要件なし・今日から可能）。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>STEP2:</strong> お住まいの自治体に女性向けデジタル訓練事業がないか確認。東京都なら<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>・<a href="/articles/women-digital-college/" className="underline" style={{ color: "#7c3a55" }}>女性デジタルカレッジ</a>、他の道府県での探し方は<a href="/articles/women-it-support-map/" className="underline" style={{ color: "#7c3a55" }}>全国ハブ記事</a>へ。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>STEP3:</strong> 本格的に学ぶ費用は、在職中なら<a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付</a>、離職中なら<a href="/articles/hello-training-it/" className="underline" style={{ color: "#7c3a55" }}>求職者支援訓練（ハロートレーニング）</a>で軽減する。</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec4 企業側の動き */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">企業・地域側の動き（事例集と環境整備）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              プランは個人向けの支援メニューだけでなく、女性デジタル人材が「働き続けられる」環境の整備も扱っています。第3章「社会基盤・環境の整備」では、<strong>①地域社会や人々のマインドを変える</strong>（デジタルへの抵抗感の払拭、経営層の意識改革）、<strong>②地域にデジタルの仕事を創る</strong>（中小企業のDX推進などによる需要創出）、<strong>③働き方改革を進める</strong>（育児・介護等と両立できる柔軟な働き方の推進、長時間労働の是正、テレワークの普及促進等）が挙げられています。転職先を選ぶ立場から見ると、テレワークや多様な正社員制度の広がりを政策が後押ししている、という追い風の文脈です。
            </p>
            <p>
              また、内閣府男女共同参画局のプランページでは<strong>「女性デジタル人材育成プラン事例集」（令和7年11月21日更新）</strong>が公開されており、企業・自治体等の取組事例がまとめられています。個人が直接使う資料ではありませんが、「どんな地域・企業でどんな育成の取組が動いているか」を知る参考になります（出典: 内閣府男女共同参画局、2026年7月参照）。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec5" className="py-10">
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
            <a href="/articles/women-it-support-map/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>全国の女性向けITリスキリング支援まとめ</h3><p className="text-sm text-text-light">全国共通3制度＋自治体事業を統一フォーマットで比較</p></a>
            <a href="/articles/tokyo-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都 女性ITエンジニア育成事業ガイド</h3><p className="text-sm text-text-light">無料6か月訓練＋就職支援の対象・申込方法</p></a>
            <a href="/articles/training-benefit-it/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>教育訓練給付でITを学ぶ完全ガイド</h3><p className="text-sm text-text-light">3種類の給付率・対象講座の探し方・申請手順</p></a>
            <a href="/articles/hello-training-it/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ハロートレーニングでITを学ぶガイド</h3><p className="text-sm text-text-light">求職者支援訓練・月10万円給付金・コースの探し方</p></a>
            <a href="/articles/manabi-dx/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>マナビDX活用ガイド</h3><p className="text-sm text-text-light">無料講座の選び方・転職準備での活用法</p></a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からITエンジニアになる方法</h3><p className="text-sm text-text-light">学習〜転職までの完全ロードマップ</p></a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 内閣府男女共同参画局「女性デジタル人材育成プラン」 <a href="https://www.gender.go.jp/policy/digital/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.gender.go.jp/policy/digital/index.html</a>（2026年7月参照）</li>
            <li>出典: 「新・女性デジタル人材育成プラン（概要）」（令和7年6月10日 すべての女性が輝く社会づくり本部・男女共同参画推進本部決定） <a href="https://www.gender.go.jp/policy/digital/pdf/digital_outline.pdf" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.gender.go.jp/policy/digital/pdf/digital_outline.pdf</a>（2026年7月参照）</li>
            <li>出典: 「新・女性デジタル人材育成プラン（本文）」 <a href="https://www.gender.go.jp/policy/digital/pdf/digital_plan.pdf" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.gender.go.jp/policy/digital/pdf/digital_plan.pdf</a>（2026年7月参照）</li>
            <li>出典: 「女性デジタル人材育成プラン事例集」（令和7年11月21日更新） <a href="https://www.gender.go.jp/policy/digital/pdf/digital_cases.pdf" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.gender.go.jp/policy/digital/pdf/digital_cases.pdf</a>（2026年7月参照）</li>
            <li>出典: 厚生労働省「教育訓練給付制度」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html</a>（2026年7月参照）</li>
            <li>出典: 経済産業省・IPA「マナビDX」 <a href="https://manabi-dx.ipa.go.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://manabi-dx.ipa.go.jp/</a>（2026年7月参照）</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">身につけたスキルを、理想の転職につなげましょう</h2>
            <p className="text-white/90 mb-6">公的支援で学びながら転職エージェントに無料相談すれば、スキルを活かせる求人の選択肢が広がります。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
