import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "オファー面談で確認すべきこと完全ガイド｜女性エンジニアの条件交渉・チェックリスト",
  description:
    "オファー面談（内定後の条件確認面談）で確認すべきことを女性エンジニア向けに解説。年収内訳・評価制度・配属・残業・リモート・産休育休実績など必須チェックリスト、年収交渉のコツ、辞退の可否、ライフプランの確認ポイント、当日の進め方まで実例つきで紹介します。",
  alternates: { canonical: "/articles/offer-meeting/" },
  openGraph: {
    title: "オファー面談で確認すべきこと完全ガイド｜女性エンジニアの条件交渉・チェックリスト",
    description:
      "内定後のオファー面談で確認すべき項目チェックリスト、年収交渉のコツ、辞退の対応、女性のライフプラン確認ポイントを実データで解説。",
    url: "https://women-engineer.com/articles/offer-meeting/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "オファー面談で確認すべきこと完全ガイド｜女性エンジニアの条件交渉・チェックリスト",
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
    "内定後のオファー面談で確認すべき項目チェックリスト、年収交渉のコツ、辞退の対応、女性のライフプラン確認ポイントを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/offer-meeting/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "オファー面談は選考の一部ですか？落ちることはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "オファー面談は選考フローではありません。すでに内定（採用意思）が確定した後に行われる「条件のすり合わせの場」であり、処遇面談・条件面談・入社前面談などとも呼ばれます。ここでの受け答えによって内定が取り消されることは原則ありませんので、合否を気にして遠慮する必要はありません。むしろ、年収内訳・配属・残業・リモートなど気になる点を遠慮なく質問し、入社前に認識を一致させるための場です。ただし、極端に不誠実な態度や、提示条件と大きくかけ離れた要求は印象を損ねるため、感謝と根拠をセットで伝える姿勢が大切です。",
      },
    },
    {
      "@type": "Question",
      name: "オファー面談で年収交渉をしても大丈夫ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "内定を承諾する前のオファー面談であれば、年収交渉は問題ありません。むしろこのタイミングが交渉の最大のチャンスです。ポイントは、(1)感謝を伝えたうえで希望額とその根拠（現職年収・保有スキル・市場価値）をセットで示す、(2)額に幅を持たせて柔軟に伝える、(3)オファーレターはその場でサインせず一度持ち帰る、の3点です。企業の初回提示は前職年収や社内給与テーブルを基準に算出されることが多く、スキルや実績が反映しきれていない場合があります。エージェント経由なら、給与テーブルの上限内かを事前確認したうえで、言いづらい金額交渉を代行してもらえます。一方、内定承諾書にサインした後の交渉は非常に難しくなります。",
      },
    },
    {
      "@type": "Question",
      name: "女性として産休・育休や働き方を質問すると評価が下がりませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "オファー面談は選考ではないため、産休・育休やリモート・時短について質問しても合否に影響しません。むしろ「取得率」「復帰率」「時短勤務者の人数」「女性管理職比率」といった具体的な数字で聞くことで、制度が形だけでなく実際に機能しているかを見極められます。目安として、育休取得率80%以上・復帰率90%以上・女性管理職比率20%以上が活躍しやすい企業のラインです。もし数字を濁されたり「ケースバイケース」とだけ返ってくる場合は、運用が伴っていないサインの可能性があります。聞きにくい場合は、女性のキャリアに詳しいエージェントを通じて事前に確認するのも有効です。",
      },
    },
    {
      "@type": "Question",
      name: "オファー面談の後で内定を辞退してもいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "問題ありません。オファー面談は条件を確認したうえで入社を最終判断するための場なので、面談の結果「条件が合わない」「ライフプランと両立できない」と感じたら辞退できます。内定承諾書にサインする前であれば、法的にも辞退に問題はありません。辞退する場合は、できるだけ早く・電話やメールで丁寧に・お詫びと感謝を伝えるのがマナーです。エージェント経由で応募した場合は、担当アドバイザーに連絡すれば辞退の連絡を代行してもらえるため、角が立ちにくく精神的な負担も減ります。回答期限（通常1週間前後）を必ず確認し、迷う場合は早めに延長を相談しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "オファー面談当日までに何を準備すればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "まずオファーレター（労働条件通知書・雇用契約書案）を熟読し、基本給と賞与・みなし残業の有無・想定年収の内訳を分解して把握します。次に、確認したい質問をチェックリスト化しておきましょう。年収内訳、昇給・評価制度、配属部署とポジション、残業時間の実態、リモート/フレックスの運用、産休育休の取得率・復帰率などが定番です。さらに、年収交渉をする場合は希望額と根拠（現職年収・スキル・市場価値）を整理し、複数社の選考状況も手元にまとめておきます。質問は5〜8個程度に絞り、優先度の高いものから聞くと面談がスムーズです。",
      },
    },
  ],
};

const checklist = [
  ["年収・給与の内訳", "提示額のうち基本給はいくらか／賞与の有無・支給実績・みなし残業代が含まれるか", "「想定年収◯◯万円」の中身を分解。みなし残業や賞与込みだと固定給が低い場合あり"],
  ["昇給・評価制度", "昇給の頻度と幅／評価基準と査定タイミング／グレード（等級）制度の有無", "入社後の年収の伸びを左右。中途入社者の昇給実例を聞けると具体的"],
  ["配属部署・ポジション", "配属先チーム／担当プロダクト／役割と裁量／使用する技術スタック", "求人と実態がズレることが多い領域。誰の下で何を任されるかを明確に"],
  ["残業・労働時間", "平均残業時間／繁忙期の実態／みなし残業の時間数と超過分の支払い", "「みなし45時間」などは固定残業の前提。実残業との差を確認"],
  ["リモート・フレックス", "リモート可否と頻度（週◯日）／フルリモートの条件／コアタイム", "求人票の『リモート可』が出社必須の例外つきでないかを運用ベースで確認"],
  ["産休・育休の実績", "取得率・復帰率・時短勤務者の人数／復帰後のポジション", "制度の有無でなく『実績の数字』で。育休復帰率90%以上が目安"],
  ["試用期間・条件", "試用期間の長さ／試用期間中の給与・条件の違い／本採用の基準", "試用期間中だけ給与が下がる、条件が変わるケースに注意"],
  ["入社日・回答期限", "入社希望日の調整可否／内定承諾の回答期限", "現職の引き継ぎ期間を確保。期限は延長相談が可能な場合も多い"],
];

const steps = [
  ["STEP1", "冒頭の挨拶・アイスブレイク", "人事や配属予定の上長と顔合わせ。和やかな雰囲気で進むことが多く、選考のような緊張は不要です。"],
  ["STEP2", "労働条件・オファー内容の説明", "企業側から年収内訳・配属・勤務形態・福利厚生など、オファーレターの内容に沿った説明があります。手元の通知書と照らし合わせましょう。"],
  ["STEP3", "業務内容・チームの紹介", "配属予定チームの体制、担当プロダクト、開発フローや技術スタックの説明。配属予定の上長が同席する場合は積極的に質問を。"],
  ["STEP4", "内定者からの質問タイム", "ここが本番。準備したチェックリストに沿って、年収内訳・評価制度・残業・リモート・産休育休実績などを確認します。"],
  ["STEP5", "年収・条件のすり合わせ", "希望条件がある場合は、感謝＋根拠をセットで伝えて交渉。エージェント経由なら事前にこの場で交渉する旨を共有しておきます。"],
  ["STEP6", "今後の流れ・回答期限の確認", "内定承諾の回答期限、入社日、必要書類を確認。その場でサインを求められても一度持ち帰り、冷静に判断しましょう。"],
];

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
              { label: "オファー面談の活用法ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              選考対策ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              オファー面談で確認すべきこと完全ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                内定後の条件確認面談を、女性エンジニアが味方につける活用法
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. オファー面談とは（選考ではなく条件すり合わせ）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 確認すべき項目チェックリスト（一覧表）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 年収・条件交渉のコツ</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 女性がライフプランを確認するポイント</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 当日の進め方・流れ（STEP解説）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 辞退する場合の対応とマナー</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. オファー面談の活用事例</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">オファー面談とは（選考ではなく条件すり合わせ）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              オファー面談とは、内定（採用意思）が確定した後に企業と内定者が行う面談です。<strong>処遇面談・条件面談・入社前面談</strong>などとも呼ばれ、雇用条件の提示と認識のすり合わせ、入社への不安や疑問の解消を目的としています。最大のポイントは、<strong>これは選考フローではない</strong>ということ。企業側の採用意思はすでに固まっているため、ここでの受け答えで合否がひっくり返ることは原則ありません。
            </p>
            <p>
              つまりオファー面談は「評価される場」ではなく、<strong>あなたが企業を見極め、条件を確認・交渉する場</strong>です。年収の内訳、配属先、残業の実態、リモートや産休育休の運用など、求人票や面接だけでは見えなかった部分を入社前に確認できる貴重な機会。遠慮して質問を飲み込むのは、最ももったいない過ごし方です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>面接とオファー面談は目的が真逆</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>面接</strong>＝企業があなたを評価する場（合否が決まる）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>オファー面談</strong>＝あなたが企業を見極め、条件をすり合わせる場（合否は決まらない）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>「内定承諾の<strong>前</strong>」に行うオファー面談は条件交渉が可能。「承諾<strong>後</strong>」は条件確定済みで交渉は難しい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>配属予定の上長が同席することも多く、入社後のリアルを聞ける貴重な機会</span></li>
              </ul>
            </div>
            <p className="text-sm">
              注意したいのは<strong>タイミング</strong>です。内定を承諾する前のオファー面談なら条件交渉の余地がありますが、内定承諾書にサインした後は労働条件が確定しており、新たな交渉はほぼ通りません。気になる点は「サインする前」にすべて出し切るのが鉄則です。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 チェックリスト表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">確認すべき項目チェックリスト（一覧表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              オファー面談で押さえておきたい確認項目を、<strong>質問の中身</strong>と<strong>つまずきやすいポイント</strong>に分けて一覧化しました。この表を印刷・スクショして当日手元に置いておくと聞き漏らしを防げます。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>確認項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>具体的に聞くこと</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>つまずきやすいポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                {checklist.map(([item, ask, point], i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 1 ? "#fff" : undefined }}>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>{item}</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>{ask}</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>{point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>聞きそびれNo.1は「年収の内訳」</h3>
            <p className="text-sm text-text-light leading-relaxed">
              「想定年収500万円」と言われても、その中に賞与（変動）やみなし残業代（例：固定残業45時間分）が含まれていると、毎月手取りで入る固定給は思ったより低いことがあります。<strong>基本給・賞与・固定残業・各種手当に分解して</strong>確認しましょう。賞与は「支給実績」を聞くのがコツ。制度上は「年2回」でも、業績連動で実績ゼロの年がある企業もあります。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 年収交渉のコツ */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収・条件交渉のコツ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              年収交渉の最大のチャンスは<strong>「内定後・承諾前」のオファー面談</strong>です。内定前に交渉すると選考自体が白紙になるリスクがあり、承諾後では条件が固まっていて動かせません。この一点のタイミングを逃さないことが第一です。
            </p>
            <p>
              企業の初回提示は、あなたのスキルや実績ではなく<strong>前職年収や社内の給与テーブルを基準</strong>に算出されることがほとんど。つまり、根拠を示せば上振れの余地があります。交渉の鉄則は「穏やかに、しかし明確に」。感謝の言葉と根拠をセットで、丁寧に伝えましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>1. 希望額＋根拠をセットで</h3>
              <p className="text-sm text-text-light">「現職が◯◯万円で、Python/AWSの実務◯年と〇〇の改善実績があるため、◯◯万円を希望します」のように、現職年収・スキル・市場価値を紐づけて伝える。数字には幅を持たせて柔軟に。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>2. その場でサインしない</h3>
              <p className="text-sm text-text-light">オファーレターが希望通りでも、その場で承諾サインはしない。「一度持ち帰って検討します」と伝え、上積みの余地や他社比較を冷静に見極める。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>3. 年収以外も交渉材料に</h3>
              <p className="text-sm text-text-light">給与テーブルの上限で年収が動かない場合は、リモート頻度・入社日・グレード・サイニングボーナスなど、年収以外の条件で折り合う方法もある。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>4. エージェントに代行してもらう</h3>
              <p className="text-sm text-text-light">言いづらい金額交渉は、エージェント経由が圧倒的にラク。希望額がテーブル上限内かを事前に確認したうえで、プロが角を立てずに交渉してくれる。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#c15f47", backgroundColor: "#fdf6ee" }}>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#c15f47" }}>女性こそ「遠慮しない交渉」を</h3>
            <p className="text-sm text-text-light leading-relaxed">
              「強く要求すると印象が悪いのでは」と交渉を控えてしまう女性は少なくありません。しかしオファー面談は選考ではなく、交渉は当然の権利です。初回提示をそのまま受け入れた場合と交渉した場合では、入社後の昇給を積み重ねた生涯年収に大きな差が生まれます。エージェントを盾に使えば、あなた自身は「お願いする側」にならずに済みます。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 女性のライフプラン確認 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がライフプランを確認するポイント</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              結婚・出産・育児など、ライフイベントと長く両立できるかを見極めるなら、オファー面談は<strong>絶好の確認の場</strong>です。選考ではないので、産休育休やリモートについて踏み込んで質問しても合否に影響しません。大切なのは、制度の「有無」ではなく<strong>「実績の数字」</strong>で聞くこと。下の目安を頭に入れておくと、制度が実際に機能しているかを判断できます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>確認する数字</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>活躍しやすい目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>聞き方の例</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>育休取得率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>80%以上</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「直近の育休取得率を教えてください」</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>育休後の復帰率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>90%以上</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「復帰後はどんなポジションで働いていますか？」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>時短勤務者の人数</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>複数名が継続</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「時短で働く方は何名くらいいますか？」</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>女性管理職比率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>20%以上（10%未満は要注意）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「女性のリーダー・管理職はいらっしゃいますか？」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>リモートの運用実態</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>週の頻度・例外条件が明確</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「子の急な発熱時はリモートに切り替えられますか？」</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>「ケースバイケース」で濁されたら要注意</h3>
            <p className="text-sm text-text-light leading-relaxed">
              数字を尋ねて明確に答えられない、あるいは「人による」「ケースバイケース」とだけ返ってくる場合、制度はあっても運用が伴っていないサインのことがあります。逆に、具体的な人数や復帰後の実例をスラスラ話せる企業は、ライフイベント後も働き続けられる環境が整っている可能性が高いです。テレワーク導入企業では20〜30代女性の離職率が半減した事例もあり、リモートの運用実態は長く働くうえで特に重要な確認ポイントです。聞きにくいテーマは、女性のキャリアに詳しいエージェントを通じて事前に確認しておくのも有効です。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 当日の流れ STEP */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">当日の進め方・流れ（STEP解説）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>オファー面談は30分〜1時間程度。多くは次のような流れで進みます。「STEP4の質問タイム」と「STEP5の条件すり合わせ」がメインの活用ポイントです。</p>
          </div>
          <div className="space-y-4">
            {steps.map(([step, title, desc], i) => (
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

      {/* sec6 辞退 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">辞退する場合の対応とマナー</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              オファー面談は条件を確認したうえで入社を<strong>最終判断</strong>するための場です。面談の結果「条件が合わない」「ライフプランと両立できない」と感じたら、辞退して構いません。<strong>内定承諾書にサインする前であれば、辞退に法的な問題はありません。</strong>「せっかく面談してもらったのに」と気に病む必要はなく、ミスマッチを入社前に防ぐことは双方にとって良いことです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>できるだけ早く</h3>
              <p className="text-sm text-text-light">決めたら速やかに連絡。企業は採用枠を空けて待っているため、回答期限（通常1週間前後）内でも早いほど誠実です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>電話＋メールで丁寧に</h3>
              <p className="text-sm text-text-light">基本は電話で一報を入れ、記録としてメールも送る。お詫びと、選考・面談への感謝を必ず添える。辞退理由は簡潔で構いません。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>エージェントに代行依頼</h3>
              <p className="text-sm text-text-light">エージェント経由なら担当者が辞退連絡を代行。角が立たず、精神的な負担も大きく減ります。迷う場合は期限延長の相談も任せられます。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong>迷っているなら、まず回答期限の延長を相談しましょう。</strong>複数社の選考が並行している、家族と相談したいといった理由は珍しくなく、数日の延長に応じてもらえるケースは多くあります。焦ってその場でサインするより、納得して決めることが、入社後のミスマッチを防ぐ最善策です。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>オファー面談での年収交渉や条件確認は、エージェントを味方につけると圧倒的に有利です。技術を正当に評価してもらうIT特化型と、女性の働き方に配慮する女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーが、オファー内容（技術スタック・年収内訳）を理解したうえで条件交渉を代行。給与テーブルの上限を踏まえた現実的な交渉に強みがあります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと年収交渉力に定評があり、オファー面談前の希望額のすり合わせも丁寧です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。オファー面談で聞きにくい育休復帰率や時短勤務の実態を、事前に確認しておきたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">条件交渉はエージェントを盾にするのが正解</p>
            <p className="text-sm text-text-light mb-4">複数登録して、年収交渉に強いアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec8 事例 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">オファー面談の活用事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・年収内訳を分解して交渉）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">面談前の提示</p><p className="text-sm font-bold">想定年収520万円（固定残業45時間・賞与込み）</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>交渉後</p><p className="text-sm font-bold">基本給を引き上げ年収560万円・残業実態は月10時間と確認</p></div>
              </div>
              <p className="text-sm text-text-light">オファー面談で内訳を分解したところ、提示額が固定残業45時間込みと判明。実残業は月10時間程度と確認したうえで、現職年収とAWS/Pythonの実績を根拠にレバテックキャリア経由で交渉。基本給ベースで40万円の上積みに成功しました。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（20代後半・育休復帰率を確認して入社を決断）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">面談前の不安</p><p className="text-sm font-bold">求人票は「育休制度あり」のみで実態が不明</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>面談で確認後</p><p className="text-sm font-bold">育休復帰率95%・時短復帰者が同チームに在籍と判明し入社</p></div>
              </div>
              <p className="text-sm text-text-light">オファー面談で配属予定の上長に育休復帰率と時短勤務者の人数を質問。復帰率95%、同じチームに時短で活躍中の先輩がいると具体的に説明され、長く働けるイメージが持てたため内定を承諾しました。</p>
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
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/negotiation/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収交渉術</h3><p className="text-sm text-text-light">市場価値を正しく伝える交渉のコツ</p></a>
            <a href="/articles/interview-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>面接対策ガイド</h3><p className="text-sm text-text-light">よく聞かれる質問と回答例</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすい企業ランキング</h3><p className="text-sm text-text-light">産休育休・リモート率で比較</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">納得のいくオファーを引き出しましょう</h2>
            <p className="text-white/90 mb-6">年収交渉も条件確認も、エージェントを味方につければ安心。まずは無料相談から始めましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
