import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの転職面接対策｜流れ・頻出質問・答え方の組み立て【2026年】",
  description:
    "エンジニア転職の面接対策を実データで解説。選考フロー全体図（カジュアル面談→一次技術面接→最終）、頻出質問4カテゴリの答え方フレーム、本来聞いてはいけない結婚・出産の質問への対処（厚労省「公正な採用選考」準拠）、オンライン面接チェックリストまで2026年の実情を網羅します。",
  alternates: { canonical: "/articles/interview-guide/" },
  openGraph: {
    title: "女性エンジニアの転職面接対策｜流れ・頻出質問・答え方の組み立て【2026年】",
    description:
      "選考フロー全体図・頻出質問4カテゴリの答え方フレーム・結婚出産の質問への対処・オンライン面接チェックリストを出典付きで解説。",
    url: "https://women-engineer.com/articles/interview-guide/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの転職面接対策｜流れ・頻出質問・答え方の組み立て【2026年】",
  datePublished: "2026-04-27",
  dateModified: "2026-06-12",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer.com" },
  description:
    "エンジニア転職の面接対策ガイド。選考フロー全体図、頻出質問4カテゴリの答え方フレーム、結婚・出産の質問への対処、オンライン面接チェックリストを出典付きで解説。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/articles/interview-guide/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "転職の面接は何回くらいありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "マイナビ「中途採用状況調査2025年版」によると、応募者1人あたりの平均面接回数はWeb面接で3.0回、対面面接で2.7回です。エンジニア採用では「一次（現場エンジニア・技術中心）→二次（マネージャー・チームフィット）→最終（役員・意思確認）」の2〜3回構成が典型で、選考前に任意参加のカジュアル面談が挟まるケースも増えています。応募から内定応諾までの合計日数は平均で約1ヶ月（Web面接で31.3日）です。",
      },
    },
    {
      "@type": "Question",
      name: "面接で結婚や出産の予定を聞かれたら、答えなければいけませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "答える義務はありません。厚生労働省は「公正な採用選考の基本」で、採用選考は応募者の適性・能力に基づいて行い、適性・能力と関係のない事項を把握すべきでないとしています。労働局も「結婚や出産後も働き続けようと思っていますか」という質問を、男女雇用機会均等法に抵触するおそれのある不適切な質問の例として挙げています。実際の面接では「ライフイベントにかかわらず働き続けるつもりです。御社の制度を教えてください」のように、仕事への意欲と制度確認に切り返すのが現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "オンライン面接と対面面接、どちらが多いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一次面接はオンラインが主流です。マイナビの調査では、一次面接の50%以上をWeb面接で行う企業は全体の60.5%、IT・通信・インターネット業種では81.6%にのぼります。一方、選考が進むほど対面の比率が上がる傾向があり、最終面接は対面で行う企業も少なくありません。Web・対面の両方を想定して準備しておくのが安全です。",
      },
    },
    {
      "@type": "Question",
      name: "面接対策はいつから始めればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "応募書類を出す前から始めるのが理想です。応募から内定応諾までは平均約1ヶ月（マイナビ調査でWeb面接31.3日）で、応募から一次面接までは平均11.8日しかありません。書類提出後に慌てて準備するのではなく、職務経歴書を書く段階で「転職理由」「定量化した実績」「技術選定の理由」を言語化しておくと、書類と面接の回答が一貫し、そのまま面接対策になります。",
      },
    },
    {
      "@type": "Question",
      name: "技術面接と人事面接で対策は分けるべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "見られるポイントが違うため、分けて準備するのが効率的です。技術面接（主に一次）はコーディング・設計・技術の深掘りが中心で、過去の技術選定を「選定理由→比較した選択肢→トレードオフ→結果」で語れるようにします。人事・マネージャー面接（二次以降）は転職理由・カルチャーフィット・キャリアプランが中心です。ただし「転職理由」と「実績」はどの面接でも聞かれるため、共通の軸として最初に固めておきましょう。",
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
    { "@type": "ListItem", position: 3, name: "面接対策ガイド", item: "https://women-engineer.com/articles/interview-guide/" },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "面接対策ガイド" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#f97066" }}>面接・選考</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの転職面接対策
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">選考の流れ・頻出質問・答え方の組み立て【2026年】</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>先に結論：面接対策はこの4点を押さえる</h2>
            <ul className="space-y-3 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>面接回数は平均2.7〜3.0回。</strong>「一次（技術）→二次（チームフィット）→最終（意思確認）」が典型で、応募から内定応諾までは平均約1ヶ月（出典: マイナビ「中途採用状況調査2025年版」）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>頻出質問は4カテゴリに集約される。</strong>転職理由・実績の定量化・技術の深掘り・カルチャーフィット。回答を丸暗記するのではなく「答え方のフレーム」で準備すれば応用が利きます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>結婚・出産の予定は本来聞いてはいけない質問。</strong>厚労省「公正な採用選考の基本」では適性・能力と関係ない事項の把握は不適切とされます。切り返し方を用意しておけば動揺しません。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>IT業界の一次面接は8割超がWeb面接。</strong>「Web面接が50%以上」の企業はIT・通信業種で81.6%。オンラインの環境準備は面接対策の一部です。</span>
              </li>
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. エンジニア転職の選考フロー全体図【段階別に見られるもの】</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 頻出質問4カテゴリと答え方フレーム</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 「結婚・出産の予定」を聞かれたら【厚労省の基準と切り返し方】</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. オンライン面接の実情と準備チェックリスト</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 面接で落ちる人の共通パターンと前日の最終確認</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 選考フロー全体図 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">エンジニア転職の選考フロー全体図【段階別に見られるもの】</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              マイナビ「中途採用状況調査2025年版（2024年実績）」によると、中途採用における応募者1人あたりの平均面接回数は<strong>Web面接で3.0回、対面面接で2.7回</strong>です。応募から内定応諾までの合計日数は平均で約1ヶ月（Web面接31.3日・対面29.2日）、応募から一次面接までは平均11.8日と、想像以上に短期決戦です（出典: マイナビキャリアリサーチLab「中途採用状況調査2025年版」、人事担当者1,500名回答）。
            </p>
            <p>
              エンジニア採用の場合、面接の前後にカジュアル面談やコーディングテストが挟まるのが特徴です。まず全体像を押さえ、<strong>各段階で「何を見られているか」</strong>を理解してから個別の対策に入りましょう。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>STEP 0</span>
                <h3 className="text-lg font-bold">カジュアル面談（任意・選考前）</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                <strong>建前は「選考ではない」相互理解の場。</strong>合否は出ませんが、ここでの印象が選考に影響することはあります。企業理解と「応募するかどうかの判断材料集め」が目的なので、志望動機を完璧に語る必要はありません。働き方や開発体制を率直に質問できる貴重な機会です。
                → 詳細は<a href="/articles/casual-interview/" className="underline" style={{ color: "#0891b2" }}>カジュアル面談の対策ガイド</a>
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>STEP 1</span>
                <h3 className="text-lg font-bold">書類選考（＋コーディングテスト）</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                <strong>見られるもの: スキルの具体性と実績の再現性。</strong>職務経歴書の内容はそのまま面接の質問リストになります。「書類に書いたことは全て深掘りされる」前提で、盛らずに語れる範囲で書くのが鉄則。Web系企業ではこの段階でコーディングテストが課されることも多くあります。
                → <a href="/articles/resume-guide/" className="underline" style={{ color: "#0891b2" }}>職務経歴書の書き方</a>／<a href="/articles/coding-test/" className="underline" style={{ color: "#0891b2" }}>コーディングテスト対策</a>
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>STEP 2</span>
                <h3 className="text-lg font-bold">一次面接（現場エンジニア・技術中心）</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                <strong>見られるもの: 技術力と「一緒に働けるか」。</strong>面接官は将来の同僚やリーダーであることが多く、過去のプロジェクトの技術的な深掘り、設計の考え方、コードレビューやチーム開発の進め方が中心です。技術質問・設計課題・ライブコーディングの具体的な準備は専用記事で扱っています。
                → 詳細は<a href="/articles/technical-interview/" className="underline" style={{ color: "#0891b2" }}>技術面接対策</a>
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>STEP 3</span>
                <h3 className="text-lg font-bold">二次面接（マネージャー・人事）</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                <strong>見られるもの: 転職理由の一貫性とカルチャーフィット。</strong>「なぜ辞めるのか」「なぜうちなのか」「入社後どう活躍するか」のつながりが問われます。技術の話も出ますが、深掘りの軸は「チームでどう動く人か」。本記事のセクション2のフレームが最も効くのがこの段階です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#f97066" }}>STEP 4</span>
                <h3 className="text-lg font-bold">最終面接（役員・経営層）</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                <strong>見られるもの: 入社意思の強さと長期的な活躍イメージ。</strong>「ほぼ顔合わせ」の企業もあれば、最終で普通に落とす企業もあるため気は抜けません。キャリアの方向性と会社のビジョンの重なりを自分の言葉で語れるかが鍵。逆質問の質が最も効く場面でもあります。
                → <a href="/articles/reverse-questions/" className="underline" style={{ color: "#0891b2" }}>逆質問の例文集</a>
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#f97066" }}>STEP 5</span>
                <h3 className="text-lg font-bold">内定・オファー面談</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                <strong>選考ではなく条件のすり合わせの場。</strong>年収・働き方・入社日のほか、産育休の取得実績や時短勤務の運用実態など、面接中は聞きにくかった制度の詳細を確認できる正式な機会です。
                → 詳細は<a href="/articles/offer-meeting/" className="underline" style={{ color: "#0891b2" }}>オファー面談で確認すべきこと</a>
              </p>
            </div>
          </div>
          <p className="text-xs text-text-light mt-3 leading-relaxed">
            出典: マイナビキャリアリサーチLab「中途採用状況調査2025年版（2024年実績）」（従業員3名以上の企業の人事担当者1,500名、2024年12月調査）— 平均面接回数（Web3.0回・対面2.7回）、応募〜内定応諾の平均日数（Web31.3日・対面29.2日）、応募〜面接の平均日数11.8日
          </p>
        </div>
      </section>

      {/* sec2 頻出質問4カテゴリ */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">頻出質問4カテゴリと答え方フレーム</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              面接の質問は表現こそ無数にありますが、エンジニア転職で深掘りされるのは実質的に次の4カテゴリです。<strong>想定問答の丸暗記は、少しひねられた瞬間に崩れます。</strong>カテゴリごとに「答えの組み立て方（フレーム）」を持っておけば、初見の質問にもその場で組み立てて答えられます。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>カテゴリ1: 転職理由・志望動機 —「不満→学び→実現したいこと」の3段変換</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                「なぜ転職するのですか」「なぜ当社ですか」「現職で解決できなかったのですか」は、ほぼ全ての面接で形を変えて登場します。面接官が見ているのは不満の内容ではなく、<strong>同じ不満がうちでも再発しないか</strong>です。
              </p>
              <ul className="text-sm text-text-light space-y-2 mb-3">
                <li><strong>① 事実としてのきっかけ:</strong> 「レガシー環境で技術的な改善提案が通りにくかった」など、感情を排した事実ベースで短く。</li>
                <li><strong>② そこから取った行動・学び:</strong> 「社内で勉強会を立ち上げた」「個人開発でモダンな構成を試した」など、不満に対して自分が動いた証拠を挟む。</li>
                <li><strong>③ 志望先で実現したいこと:</strong> 「御社の◯◯という開発体制なら△△に貢献できる」と、応募先の具体的な事実（技術ブログ・採用ページ・登壇資料）に接続して締める。</li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">
                ②を挟むだけで「不満を語る人」から「課題に行動できる人」に印象が変わります。前職の悪口で終わる回答が最も評価を下げる典型です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>カテゴリ2: 実績・経験 — STARフレーム＋数字で語る</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                「一番苦労したプロジェクトは」「あなたの貢献は」と聞かれたら、<strong>STAR</strong>（Situation: 状況／Task: 課題／Action: 自分の行動／Result: 結果）の順で60〜90秒にまとめます。ポイントは2つです。
              </p>
              <ul className="text-sm text-text-light space-y-2 mb-3">
                <li><strong>数字を1つ以上入れる:</strong> 「APIレスポンスを平均1.2秒から300msに短縮」「月40時間の手作業をバッチ化」「5人チームでフロントエンドを担当」。規模・期間・改善幅のどれかが入るだけで信頼性が大きく変わります。</li>
                <li><strong>チームの成果と自分の貢献を分ける:</strong> 「チームとしては◯◯を達成し、その中で私は△△を担当しました」。主語を「私たち」だけで通すと、深掘りで答えに詰まります。</li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">
                数字は面接直前には作れません。<a href="/articles/resume-guide/" className="underline" style={{ color: "#0891b2" }}>職務経歴書を書く段階</a>で実績を棚卸しして定量化しておくと、書類と面接の回答が一貫します。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>カテゴリ3: 技術の深掘り —「選定理由→比較→トレードオフ→結果」</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                「なぜその技術を選んだのですか」は、エンジニア面接で最も差がつく質問です。「流行っていたから」「会社の指定で」で止まると評価されません。次の4点セットで答えます。
              </p>
              <ul className="text-sm text-text-light space-y-2 mb-3">
                <li><strong>① 選定理由:</strong> 当時の要件（パフォーマンス・チームのスキルセット・納期）と紐づけて説明する。</li>
                <li><strong>② 比較した選択肢:</strong> 「◯◯も検討したが、△△の理由で見送った」。比較の痕跡が「考えて選ぶ人」の証拠になります。</li>
                <li><strong>③ トレードオフ:</strong> 採用した技術の欠点・運用で困った点を自分から言えると強い。</li>
                <li><strong>④ 結果と振り返り:</strong> 「今やるなら◯◯を選ぶ」まで言えれば、学習し続けている証明になります。</li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">
                会社指定の技術しか使っていない場合も「指定された制約の中でどう工夫したか」は語れます。分からない質問には正直に「分かりません。ただ、調べるなら◯◯から確認します」と返す方が、取り繕うより高評価です。ライブコーディングや設計課題を含む準備は<a href="/articles/technical-interview/" className="underline" style={{ color: "#0891b2" }}>技術面接対策</a>で詳しく解説しています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>カテゴリ4: カルチャーフィット —「自分の働き方の事実」と「相手の文化の事実」を接続する</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                「どんなチームで働きたいですか」「意見が衝突したらどうしますか」は、協調性の有無ではなく<strong>具体的なエピソードの有無</strong>で判断されます。「コミュニケーションを大切にしています」のような抽象論は何も伝えていません。
              </p>
              <ul className="text-sm text-text-light space-y-2 mb-3">
                <li><strong>自分側の事実:</strong> 「設計レビューで先輩と意見が割れたとき、ベンチマークを取って数字で議論した」など、働き方が分かる場面を2〜3個ストックしておく。</li>
                <li><strong>相手側の事実:</strong> 応募先の技術ブログ・開発文化（ドキュメント文化、レビュー体制、リモートの運用）を調べ、「御社の◯◯という進め方は、自分の△△という経験と合う」と接続する。</li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">
                カルチャーフィットは相互評価です。こちらから開発文化を確認する逆質問とセットで準備しましょう。→ <a href="/articles/reverse-questions/" className="underline" style={{ color: "#0891b2" }}>逆質問の例文集</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 結婚・出産の質問 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">「結婚・出産の予定」を聞かれたら【厚労省の基準と切り返し方】</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              まず事実から押さえましょう。厚生労働省は「公正な採用選考の基本」として、採用選考は<strong>「応募者の適性・能力に基づいた基準により行うこと」</strong>を求めており、本人に責任のない事項や適性・能力と関係のない事項は、応募用紙に記載させたり面接で尋ねたりすべきでないとしています。採用基準にしないつもりでも、把握すること自体が採否に影響し就職差別につながるおそれがある、というのが行政の立場です（出典: 厚生労働省 公正採用選考特設サイト「公正な採用選考の基本」「採用選考時に配慮すべき事項」）。
            </p>
            <p>
              さらに労働局は、<strong>「結婚や出産後も働き続けようと思っていますか」という質問を、男女雇用機会均等法に抵触するおそれのある不適切な質問の例として明示</strong>しています（出典: 大阪労働局「就職差別につながるおそれのある不適切な質問の例」）。同法第5条は募集・採用において性別にかかわりなく均等な機会を与えることを事業主に義務づけており、女性にだけ結婚・出産の予定を尋ねることはこの趣旨に反します。
            </p>
            <p>
              つまり、<strong>この質問に答える義務はなく、聞く側に問題があります。</strong>とはいえ実際の面接の場で「その質問は不適切です」と正面から指摘するのは現実的に難しいもの。動揺せずに切り抜けるための現実的な選択肢を3つ用意しておきましょう。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>パターン1: 仕事への意欲に変換して短く返す（推奨）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                「ライフイベントの予定にかかわらず、エンジニアとして長く働き続けるつもりです。そのために◯◯のスキルを伸ばしていきたいと考えています」。<strong>予定そのものには答えず、キャリア継続の意思だけを伝える</strong>返し方です。質問の意図（長く働いてくれるか）にだけ応えるので、角が立ちません。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>パターン2: 制度確認の機会に変える</h3>
              <p className="text-sm text-text-light leading-relaxed">
                「将来どうなるかは分かりませんが、どんなライフステージでも働き続けたいと考えています。御社ではエンジニア職の産育休取得や復帰後の働き方はどのように運用されていますか」。質問を<strong>逆質問に転換</strong>し、制度の実態を確認する材料にしてしまう返し方です。回答の歯切れが悪い企業は、入社後の働きやすさを見極めるシグナルにもなります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#f97066" }}>パターン3: 答えたくないと意思表示する</h3>
              <p className="text-sm text-text-light leading-relaxed">
                「プライベートな予定についてはお答えを控えますが、仕事への取り組みについてはぜひお話しさせてください」。穏やかに線を引く返し方です。これで評価を下げる企業であれば、入社後もライフイベントへの理解は期待しにくいと判断する材料になります。なお、不適切な質問が続くなど対応に疑問を感じた場合は、<strong>都道府県労働局（雇用環境・均等部）に相談できる</strong>ほか、エージェント経由の応募ならエージェントに事実を伝えることで企業側へのフィードバックや判断材料にできます。
              </p>
            </div>
          </div>
          <p className="text-xs text-text-light mt-3 leading-relaxed">
            出典: 厚生労働省 公正採用選考特設サイト「公正な採用選考の基本」「採用選考時に配慮すべき事項」、大阪労働局「就職差別につながるおそれのある不適切な質問の例」、男女雇用機会均等法第5条（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec4 オンライン面接 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">オンライン面接の実情と準備チェックリスト</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              マイナビの調査では、中途採用の一次面接の50%以上をWeb面接で行う企業は全体の60.5%、<strong>IT・通信・インターネット業種では81.6%</strong>にのぼります。採用面接全体でも「Web面接が50%以上」の企業は48.1%（前年比+1.4pt）で、企業がWeb面接を増やす理由の1位は「効率よく面接の実施回数を増やせるから」（31.3%）でした（出典: マイナビキャリアリサーチLab「中途採用状況調査2025年版」）。
            </p>
            <p>
              つまりエンジニア転職では<strong>「一次はWeb、最終に近づくほど対面」が標準形</strong>です。Web面接は移動がなく在職中でも組みやすい一方、通信や環境のトラブルがそのまま印象に直結します。以下を面接前日までに確認しておきましょう。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>Web面接の準備チェックリスト</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-sm mb-2">機材・通信（前日まで）</p>
                <ul className="space-y-2 text-sm text-text-light">
                  <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>カメラはレンズが目線の高さに来るよう調整（ノートPCは台で底上げ。見下ろし角度は印象が悪くなりがち）</span></li>
                  <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>回線は有線または安定したWi-Fi。スマホのテザリングは最後の予備に</span></li>
                  <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>イヤホン・マイクの動作確認（エコー・ノイズはツールのテスト機能で事前チェック）</span></li>
                  <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>PC・イヤホンを充電し、OSやツールの自動アップデートが直前に走らないよう確認</span></li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-sm mb-2">環境（前日まで）</p>
                <ul className="space-y-2 text-sm text-text-light">
                  <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>背景は無地の壁かぼかし機能。生活感の強いものは画角から外す</span></li>
                  <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>照明は顔の正面から。窓を背にすると逆光で表情が見えなくなる</span></li>
                  <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>家族の在宅時間・宅配・スマホ通知など、中断要因を面接時間帯から排除</span></li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-sm mb-2">ツール・当日（30分前〜）</p>
                <ul className="space-y-2 text-sm text-text-light">
                  <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>指定ツール（Zoom・Google Meet・Teamsなど）に事前ログインし、表示名を本名に設定</span></li>
                  <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>接続トラブル時の連絡先（採用担当のメール・電話）を手元に控える</span></li>
                  <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>職務経歴書・逆質問メモを手元に（読み上げにならないよう要点のみ）。画面共有でポートフォリオを見せる可能性があれば、不要なタブ・通知を閉じておく</span></li>
                  <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>入室は開始2〜5分前。回線トラブルで遅れる場合は分かった時点ですぐ連絡</span></li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-sm mb-2">話し方（Web特有の注意）</p>
                <ul className="space-y-2 text-sm text-text-light">
                  <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>結論から話し、1回の発話は短く。音声の遅延があるため、相手の発言終わりに一拍置いてから話す</span></li>
                  <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>相づち・うなずきは対面より大きめに。無反応は画面越しだと「伝わっていない」に見える</span></li>
                  <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>話すときはカメラのレンズを見る意識を。画面の相手の顔だけを見ると目線が下がる</span></li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-xs text-text-light mt-3 leading-relaxed">
            出典: マイナビキャリアリサーチLab「中途採用状況調査2025年版（2024年実績）」— 一次面接「Web面接が50%以上」60.5%・IT・通信・インターネット業種81.6%、採用面接全体「Web面接が50%以上」48.1%、Web面接を増やす理由1位「効率よく面接の実施回数を増やせるから」31.3%
          </p>
        </div>
      </section>

      {/* sec5 落ちるパターンと前日確認 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">面接で落ちる人の共通パターンと前日の最終確認</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>スキルは足りているのに面接で落ちる場合、原因はだいたい次のどれかに当てはまります。逆に言えば、ここを潰すだけで通過率は目に見えて変わります。</p>
          </div>
          <div className="space-y-4">
            {[
              { title: "職務経歴書と回答が食い違う", desc: "書類に書いた技術スタックや役割を深掘りされて答えに詰まるのは、最も避けたい失点です。面接前日に自分の職務経歴書を読み返し、書いてある全項目について「具体例を1つ話せるか」をセルフチェックしましょう。" },
              { title: "応募先を調べていないことが伝わる", desc: "「弊社のプロダクトを使ったことはありますか」「どの事業に興味がありますか」への沈黙は致命的です。最低限、プロダクトに触る・技術ブログを2〜3本読む・直近のリリースやニュースを1つ押さえる、の3点は前日までに済ませます。" },
              { title: "前職の不満で転職理由が終わる", desc: "セクション2のカテゴリ1で解説した「不満→学び→実現したいこと」の3段変換ができていないケースです。話の終点が必ず「志望先で実現したいこと」になっているかを確認しましょう。" },
              { title: "逆質問が「特にありません」", desc: "逆質問の時間は意欲と理解度を測る評価対象です。調べれば分かることや待遇だけの質問も逆効果。フェーズ別の逆質問は専用記事の例文を3つ選んで自分の言葉に直しておけば十分です。" },
              { title: "結果の振り返りをしない", desc: "不採用でも、どの質問で手応えがなかったかをメモしておけば次に活きます。エージェント経由なら不採用理由のフィードバックをもらえることが多いので、必ず確認を依頼しましょう。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#f97066" }}>{i + 1}. {item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#f8fafb", border: "1px solid #d1dce5" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong>前日の最終確認はこの5つだけ:</strong> ①職務経歴書の再読（全項目に具体例）②応募先の直近情報1つ③転職理由の3段変換を声に出して60秒で④逆質問3つ⑤Web面接なら機材・環境チェック（セクション4）。新しいことを詰め込むより、話す内容を「声に出して」確認する方が効きます。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
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

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考</h2>
          <ul className="space-y-2 text-sm text-text-light leading-relaxed">
            <li>・出典: マイナビキャリアリサーチLab「中途採用状況調査2025年版（2024年実績）」（従業員3名以上の企業の人事担当者1,500名、2024年12月調査）— 応募者1人あたりの平均面接回数（Web面接3.0回・対面面接2.7回）、応募〜内定応諾の平均日数（Web31.3日・対面29.2日）、応募〜面接の平均日数11.8日、一次面接「Web面接が50%以上」60.5%（IT・通信・インターネット業種81.6%）、採用面接全体「Web面接が50%以上」48.1%、Web面接を増やす理由1位「効率よく面接の実施回数を増やせるから」31.3%</li>
            <li>・出典: 厚生労働省 公正採用選考特設サイト「公正な採用選考の基本」「採用選考時に配慮すべき事項」（2026年6月参照）— 採用選考は応募者の適性・能力に基づいた基準により行うこと、適性・能力と関係のない事項の把握は就職差別につながるおそれ</li>
            <li>・出典: 大阪労働局「就職差別につながるおそれのある不適切な質問の例」（2026年6月参照）— 「結婚や出産後も働き続けようと思っていますか」は男女雇用機会均等法に抵触するおそれのある質問例</li>
            <li>・参考: 男女雇用機会均等法第5条 — 労働者の募集・採用について性別にかかわりなく均等な機会を与えることを事業主に義務づけ</li>
          </ul>
        </div>
      </section>

      {/* おすすめ転職エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績が光ります。スピーディーなマッチングで、最短2週間での内定実績も。年収交渉力にも定評があります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>
                  女性特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介してくれるため、長期的なキャリア形成に最適。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT業界の転職支援に強み。未経験からベテランまで幅広い層の求人を保有しています。レスポンスの速さと手厚いサポートに定評があり、特に若手エンジニアの転職支援実績が豊富です。
              </p>
            </div>
          </div>
          <div
            className="mt-8 rounded-xl p-6 text-center"
            style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}
          >
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">
              複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#f97066" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/casual-interview/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>カジュアル面談の対策ガイド</h3>
              <p className="text-sm text-text-light">選考前の面談の流れ・NG行動・活用法</p>
            </a>
            <a href="/articles/technical-interview/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>技術面接対策</h3>
              <p className="text-sm text-text-light">コーディングテスト・設計課題の準備法</p>
            </a>
            <a href="/articles/reverse-questions/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>逆質問の例文集</h3>
              <p className="text-sm text-text-light">フェーズ別の好印象な逆質問とNG例</p>
            </a>
            <a href="/articles/resume-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>職務経歴書の書き方</h3>
              <p className="text-sm text-text-light">面接の土台になる実績の棚卸しと書き方</p>
            </a>
            <a href="/articles/offer-meeting/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>オファー面談で確認すべきこと</h3>
              <p className="text-sm text-text-light">内定後の条件交渉・制度確認のチェックリスト</p>
            </a>
            <a href="/articles/coding-test/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>コーディングテスト対策ガイド</h3>
              <p className="text-sm text-text-light">出題形式・難易度・対策ロードマップ</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              理想の転職を実現しましょう
            </h2>
            <p className="text-white/90 mb-6">
              まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#f97066", color: "#ffffff" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
