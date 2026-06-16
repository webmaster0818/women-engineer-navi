import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "フルリモート企業の見極め方ガイド｜“なんちゃってリモート”を見抜く選び方",
  description:
    "本当に働きやすいフルリモート企業の見極め方を女性視点で解説。“なんちゃってリモート”の特徴、出社頻度・コアタイム・評価制度・オンボーディング・リモート手当（平均3,683円）のチェックリスト、面接で聞くべき質問、口コミの集め方まで具体的に紹介します。",
  alternates: { canonical: "/articles/fullremote-companies/" },
  openGraph: {
    title: "フルリモート企業の見極め方ガイド｜“なんちゃってリモート”を見抜く選び方",
    description:
      "本当に働きやすいフルリモート企業の見極め方。出社頻度・評価制度・オンボーディング・リモート手当のチェックリスト、面接で聞くべき質問、口コミの集め方を女性視点で解説。",
    url: "https://women-engineer.com/articles/fullremote-companies/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "フルリモート企業の見極め方ガイド｜“なんちゃってリモート”を見抜く選び方",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
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
    "本当に働きやすいフルリモート企業の見極め方を女性視点で解説。出社頻度・評価制度・オンボーディング・リモート手当のチェックリスト、面接で聞くべき質問、口コミの集め方を紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/fullremote-companies/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "“フルリモート”と“リモート可”は何が違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「フルリモート（完全リモート）」は原則として一切出社しない勤務形態を指し、「リモートワーク可」は週1〜数回や月数回の出社を前提にしているケースが多くあります。求人票の言葉だけでは判断できず、同じ「リモート可」でも実態は『出社メインで在宅は月数回』という企業から『ほぼフルリモート』までさまざまです。求人票に『リモートワーク中心』『ハイブリッド』とある場合は、必ず選考で平均的な月の出社日数を数字で確認しましょう。さらに『恒久的にフルリモートか、いつでも出社命令に切り替わり得るのか（出社回帰の方針）』まで聞くと、入社後のギャップを防げます。",
      },
    },
    {
      "@type": "Question",
      name: "面接でリモートの条件を聞くと評価が下がりませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "聞き方とタイミングを工夫すれば、評価は下がりません。ポイントは、まず自分のスキルや成果でリモートでも貢献できることを伝えた後に、働き方の確認に入ること。『リモートで成果を出すために、チームの連携方法を教えてください』のように“成果を出す前提”の質問にすると、むしろ自走できる人材として好印象につながります。逆に冒頭から『出社は絶対に無理です』と条件だけを押し出すと敬遠されがちです。条件確認は、内定前の最終面接や、エージェント経由で間接的に確認する方法も有効です。",
      },
    },
    {
      "@type": "Question",
      name: "リモート手当（在宅勤務手当）の相場はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "在宅勤務手当の支給額は月1,000円〜5,000円未満が最も多く（全体の約44％）、平均額はおよそ3,683円とされています。月4,000円〜20,000円程度を支給する企業もあり、金額にはかなり幅があります。注目すべきは金額の大小だけでなく『手当を制度として用意しているか』という姿勢です。リモート手当やPC・モニター・通信費の補助が整っている企業は、リモートを一時的な対応ではなく恒久的な制度として運用している可能性が高く、“なんちゃってリモート”を見分ける一つの目安になります。",
      },
    },
    {
      "@type": "Question",
      name: "女性が長く働けるフルリモート企業はどう見分ければいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "リモートの有無だけでなく、『時短×リモートの両立実績』『産休育休からのリモート復帰実績』『フルフレックスやコアタイムの柔軟さ』『成果で評価される制度』の4点を確認しましょう。ある調査では、給与が同じならフルリモートを希望する女性は男性より多い一方、給与が下がるなら50.3％の女性が『希望しない』と回答しており、女性にとってリモートは“働き続けるための条件”であると同時に、待遇とのバランスも重視されていることが分かります。求人票に出ない実績は、女性のキャリアに詳しいエージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "口コミサイトの情報はどこまで信じていいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "口コミは“傾向”を読むために使い、鵜呑みにしないのが鉄則です。OpenWorkや転職会議などの口コミは、退職者の不満が強く出やすい・投稿時期が古いといった偏りがあります。見るべきは、(1)『リモート』『在宅』で絞った投稿の最新1〜2年分、(2)出社頻度や評価制度に関する複数人の共通点、(3)投稿日付。1件の極端な意見ではなく、複数の声に共通するパターンを拾いましょう。最終的には、口コミで得た仮説を面接やエージェントへの質問で“裏取り”することが、ミスマッチを防ぐ最も確実な方法です。",
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
              { label: "フルリモート企業の見極め方ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              働き方ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              フルリモート企業の見極め方ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                “なんちゃってリモート”を見抜き、本当に働きやすい会社を選ぶ
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. なぜ「フルリモート企業の見極め」が必要なのか</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. “なんちゃってリモート”企業の5つの特徴</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 入社前に確認すべきチェックリスト（一覧表）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 面接で聞くべき質問（角を立てない聞き方）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 口コミ・実態情報の集め方（4ステップ）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 女性が長く働けるリモート企業の特徴</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 見極めの成功・失敗事例</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. 関連記事</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 なぜ見極めが必要か */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">なぜ「フルリモート企業の見極め」が必要なのか</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「フルリモート可」と書かれた求人に応募して入社したら、実際は<strong>月に何度も出社が必要だった</strong>――こうしたミスマッチは珍しくありません。求人票の「リモートワーク可」は、<strong>週1〜数回や月数回の出社を前提</strong>にしているケースも多く、言葉だけでは実態を判断できないのが現実です。
            </p>
            <p>
              さらに近年は、コロナ禍で一気に広がったリモートを縮小する<strong>「出社回帰（RTO）」の動き</strong>も出ています。入社時はフルリモートでも、会社方針の転換で「来月から週3出社」に変わる可能性もある――だからこそ、<strong>制度として恒久的にリモートが根づいているか</strong>を見極める必要があります。
            </p>
            <p>
              特に女性にとってリモートは、育児・介護との両立や通勤負担の軽減など「働き続けるための条件」になりやすい働き方です。ある調査では、<strong>給与が同じならフルリモートを希望する女性は男性より多い</strong>一方で、<strong>給与が下がるなら50.3％の女性が「希望しない」</strong>と回答しています。リモートは譲れないが、待遇とのバランスも大事――この両立を叶えるには、「リモートの有無」だけでなく「中身」を見抜く目利きが欠かせません。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>このガイドで身につく「見極めの目」</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>求人票の「リモート可」の裏にある“本当の出社頻度”を読み解く</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>制度・評価・オンボーディングから「リモートの本気度」を判断する</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>面接や口コミで実態を“裏取り”する具体的な方法を知る</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>女性が長くキャリアを続けられるリモート企業の条件を押さえる</span></li>
              </ul>
            </div>
            <p className="text-sm">
              ※リモート求人全般の探し方は<a href="/articles/remote-jobs/" className="underline" style={{ color: "#7c3a55" }}>「女性エンジニアのリモート求人ガイド」</a>、地方在住での働き方は<a href="/articles/regional-remote/" className="underline" style={{ color: "#7c3a55" }}>「地方在住エンジニアのリモート転職」</a>もあわせてご覧ください。本記事は「企業選びの目利き」に絞って解説します。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 なんちゃってリモートの特徴 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">“なんちゃってリモート”企業の5つの特徴</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「フルリモート」と謳いながら、実態が伴っていない企業には共通のサインがあります。求人票・面接・選考プロセスのなかで、次のような“危険信号”が見えたら要注意です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 出社頻度を数字で答えてくれない</h3>
              <p className="text-text-light text-sm leading-relaxed">「基本リモートです」と言うのに、平均の月出社日数を聞いても明言を避ける・「状況による」と濁す。実態が定まっていない＝出社が増えやすいサインです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 制度・手当が一切ない</h3>
              <p className="text-text-light text-sm leading-relaxed">リモート手当・PC/モニター・通信費補助・在宅環境支援が皆無。リモートを“制度”ではなく“その場しのぎの黙認”で運用している可能性があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 「重要な打ち合わせは出社」が口癖</h3>
              <p className="text-text-light text-sm leading-relaxed">通常はリモートでも、「大事な会議・キックオフ・締めは出社」が前提。“ここぞ”の頻度が読めず、結局は不定期に出社が発生します。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 評価が「勤務時間・在席」ベース</h3>
              <p className="text-text-light text-sm leading-relaxed">常時オンライン表示やこまめな勤怠報告を求められる。成果ではなく“見えている時間”で評価される文化は、リモートと相性が悪く出社圧力につながります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>5. リモート社員が「最近の入社者だけ」</h3>
              <p className="text-text-light text-sm leading-relaxed">フルリモートで長く働いている先輩がいない・管理職は全員出社。制度が浅く、出社回帰でいつ方針転換されてもおかしくない状態です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>+α. オンボーディングが「出社前提」</h3>
              <p className="text-text-light text-sm leading-relaxed">入社直後の研修やOJTが対面のみで、オンラインの受け入れ体制が整っていない。最初でつまずきやすく、孤立の原因にもなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 チェックリスト 表 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">入社前に確認すべきチェックリスト（一覧表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              “リモートの本気度”は、次の7項目で総合的に判断します。求人票・面接・口コミ・エージェントを使い、<strong>各項目を「数字」または「具体的な制度名」で確認できるか</strong>がカギです。曖昧なまま放置せず、1つずつ潰していきましょう。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>確認項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>何を聞く・見るか</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>安心できる目安</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>出社頻度の実態</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「平均で月に何日出社しますか？」を数字で</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「原則ゼロ／年数回」と即答できる</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>恒久リモートの方針</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>出社回帰の予定・就業規則上の位置づけ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>制度として明文化されている</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>コアタイム／勤務時間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>フルフレックスか、コアタイムの有無と時間帯</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>コアタイムが短い／中抜けOK</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>評価制度</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>何で評価されるか（成果か、在席時間か）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>目標・成果ベースのMBO等が明確</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>オンボーディング</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>入社直後の研修・OJTがオンライン対応か</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>メンター制度・ドキュメント整備あり</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>コミュニケーション</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Slack/Teams・1on1・非同期文化の有無</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>テキスト文化＋定例1on1が定着</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>リモート手当・環境</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>在宅手当・PC/モニター・通信費補助</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>手当（平均月3,683円目安）や貸与あり</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ※在宅勤務手当は<strong>月1,000〜5,000円未満が最多（全体の約44％）、平均およそ3,683円</strong>が目安です。金額そのものより、<strong>「制度として用意しているか」</strong>がリモート本気度のバロメーターになります。
          </p>
        </div>
      </section>

      {/* sec4 面接で聞くべき質問 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">面接で聞くべき質問（角を立てない聞き方）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              リモートの条件は、聞き方を間違えると「条件ばかり気にする人」と見られかねません。コツは、<strong>まず自分がリモートで成果を出せることを示し、そのうえで「成果を出すために知っておきたい」という前提で質問する</strong>こと。タイミングは、スキルが評価された後半〜最終面接が安全です。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-2" style={{ color: "#7c3a55" }}>Q1. 出社頻度の実態を引き出す</h3>
              <p className="text-sm text-text-light leading-relaxed">「このポジションの方は、<strong>平均すると月に何日くらい出社</strong>されていますか？ オンライン中心で成果を出せるよう準備したいので教えてください」――“平均日数”を数字で聞くのがポイント。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-2" style={{ color: "#7c3a55" }}>Q2. 恒久性・出社回帰の方針を確認</h3>
              <p className="text-sm text-text-light leading-relaxed">「フルリモートは<strong>制度として恒久的なもの</strong>でしょうか。今後、出社方針が変わる可能性があれば教えていただけますか？」――会社の本気度と将来リスクを同時に確認できます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-2" style={{ color: "#7c3a55" }}>Q3. 評価のされ方を聞く</h3>
              <p className="text-sm text-text-light leading-relaxed">「リモートでも正当に評価いただけるよう、<strong>どういった点で評価される</strong>のか伺いたいです。成果や目標の置き方を教えてください」――在席時間ベースか成果ベースかが分かります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-2" style={{ color: "#7c3a55" }}>Q4. オンボーディング体制を確認</h3>
              <p className="text-sm text-text-light leading-relaxed">「<strong>入社直後のキャッチアップ</strong>は、オンラインでどのように進められますか？ メンターやドキュメントの整備状況を教えてください」――立ち上がりのしやすさが見えます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-2" style={{ color: "#7c3a55" }}>Q5. コミュニケーション文化を聞く</h3>
              <p className="text-sm text-text-light leading-relaxed">「チームの<strong>コミュニケーションは非同期（テキスト）中心ですか、同期（会議）中心ですか？</strong> 1on1の頻度も教えてください」――孤立しにくい環境かを判断できます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-2" style={{ color: "#7c3a55" }}>Q6. 女性の両立・復帰実績を確認</h3>
              <p className="text-sm text-text-light leading-relaxed">「<strong>時短×リモートや、産休育休後にリモートで復帰された方</strong>はいらっしゃいますか？ ロールモデルがいると安心なので伺いたいです」――長く働ける土壌があるかが分かります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 口コミ・情報の集め方 STEP */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">口コミ・実態情報の集め方（4ステップ）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>面接で聞けることには限りがあります。外部情報を使って“裏取り”すると、見極めの精度がぐっと上がります。次の順番で進めましょう。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "口コミサイトで“傾向”をつかむ", "OpenWork・転職会議・ライトハウスなどで、「リモート」「在宅」で絞り、最新1〜2年分の投稿を確認。退職者の不満は強く出やすいので、1件の極端な声ではなく複数人の共通点を拾います。"],
              ["STEP2", "公式の一次情報を確認する", "企業の採用ページ・テックブログ・社員インタビュー・カルチャーデックをチェック。リモート前提のドキュメント文化や、地方在住社員の登場は“本気度”の好材料です。"],
              ["STEP3", "現場の声を取りに行く", "Wantedlyやカジュアル面談、X(旧Twitter)の社員発信、勉強会・登壇情報から、実際の働き方を生の言葉で確認。可能なら現役社員にリモートの実態を質問します。"],
              ["STEP4", "エージェントで“求人票に出ない実態”を裏取り", "出社頻度の実態・評価制度・女性のリモート復帰実績など、聞きにくい点はエージェント経由で確認。複数の応募者を見てきたアドバイザーは社内事情に詳しく、ミスマッチ回避に有効です。"],
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
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>口コミを読むときの3つの注意点</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>投稿日付を必ず見る</strong>。リモート方針は変わりやすく、古い情報は当てにならない</li>
              <li>② <strong>1件の極端な評価で判断しない</strong>。複数人に共通するパターンだけを信じる</li>
              <li>③ <strong>最後は面接・エージェントで裏取り</strong>。口コミは“仮説”、確定情報ではない</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec6 女性が長く働けるリモート企業の特徴 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が長く働けるリモート企業の特徴</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「フルリモートかどうか」だけで選ぶと、ライフイベントを越えて働き続けられるとは限りません。女性が長くキャリアを築けるリモート企業には、次の4つの共通点があります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 時短×リモートの両立実績がある</h3>
              <p className="text-text-light text-sm leading-relaxed">フルリモートに加え、時短勤務やフルフレックスを“併用”できる実例があるか。育児期も無理なく働ける制度の重ね掛けが、辞めない決め手になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 産休育休からのリモート復帰実績</h3>
              <p className="text-text-light text-sm leading-relaxed">取得率だけでなく“復帰率”と、復帰後にリモートで働いている人がいるか。ロールモデルの存在は、自分の数年後を具体的に描ける安心材料です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 成果で評価される文化が根づく</h3>
              <p className="text-text-light text-sm leading-relaxed">在席時間ではなく成果で評価されれば、時短や中抜けがあっても正当に認められます。女性の昇進・管理職比率もあわせて確認しましょう。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 待遇とリモートが両立している</h3>
              <p className="text-text-light text-sm leading-relaxed">調査でも、給与が下がるなら50.3％の女性がフルリモートを「希望しない」と回答。リモートを“給与ダウンの口実”にしない、待遇とのバランスが取れた企業を選びましょう。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              より広い「女性が働きやすい会社」の見極め軸は<a href="/articles/women-friendly-companies/" className="underline" style={{ color: "#7c3a55" }}>「女性が働きやすいIT企業の選び方」</a>、自分に合う企業の総合的な選び方は<a href="/articles/how-to-choose/" className="underline" style={{ color: "#7c3a55" }}>「失敗しない転職先の選び方」</a>もあわせてご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 エージェント（流用） */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>出社頻度の実態や女性のリモート復帰実績など、求人票に出ない情報は、社内事情に詳しいエージェント経由で確認するのが確実です。IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。リモート可の求人も多く、技術に精通したアドバイザーが「本当にフルリモートで働けるか」の実態まで踏み込んで確認してくれます。女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、内部情報の蓄積が豊富。出社頻度・評価制度・カルチャーといった“求人票に出ない実態”の確認に強みがあり、スピーディーなマッチングと年収交渉力にも定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。時短×リモートの両立実績や、産休育休からのリモート復帰実績といった、女性が気になる観点で求人を絞り込めます。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">“リモートの実態”はエージェントに確認するのが近道</p>
            <p className="text-sm text-text-light mb-4">複数登録して、社内事情に詳しいアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec8 事例 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">見極めの成功・失敗事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代・育児中／見極め成功）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">見極めポイント</p><p className="text-sm font-bold">「平均の月出社日数」を数字で確認＋復帰実績を質問</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>結果</p><p className="text-sm font-bold">原則出社ゼロのSaaS企業／時短×フルリモートで両立</p></div>
              </div>
              <p className="text-sm text-text-light">面接で「月の平均出社日数」と「産休育休からのリモート復帰者がいるか」を確認。在宅手当・PC貸与・非同期コミュニケーションが制度として整っていたことが決め手となり、育児と両立しながら正当に評価される環境に転職できました。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（20代後半／見極め不足の反省）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">起きたこと</p><p className="text-sm font-bold">「フルリモート可」で入社→実際は週2〜3出社が前提だった</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>その後</p><p className="text-sm font-bold">再転職時に“数字での確認”を徹底し、原則リモート企業へ</p></div>
              </div>
              <p className="text-sm text-text-light">「フルリモート可」という言葉だけで判断し、出社頻度・評価制度・恒久性を確認しないまま入社。「重要な打ち合わせは出社」が頻繁で、実態は週2〜3出社でした。再転職では本記事のチェックリストで数字と制度を確認し、ミスマッチを解消しました。</p>
            </div>
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
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアのリモート求人ガイド</h3><p className="text-sm text-text-light">リモート求人全般の探し方と注意点</p></a>
            <a href="/articles/regional-remote/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>地方在住エンジニアのリモート転職</h3><p className="text-sm text-text-light">地方から都心の仕事に就く方法</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすいIT企業の選び方</h3><p className="text-sm text-text-light">制度・実績で見抜く企業選び</p></a>
            <a href="/articles/work-life-balance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>エンジニアのワークライフバランス</h3><p className="text-sm text-text-light">両立しながら長く働く工夫</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">本当に働きやすいリモート企業を見極めよう</h2>
            <p className="text-white/90 mb-6">求人票に出ない“リモートの実態”は、エージェントに無料相談。あなたに合った働き方を一緒に見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
