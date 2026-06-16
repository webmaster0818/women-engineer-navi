import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職エージェントと転職サイトの違い｜女性エンジニアはどっちを使うべき？【2026年】",
  description:
    "転職エージェントと転職サイトの違いを仕組みから徹底解説。職業安定法上の位置づけ（職業紹介事業と募集情報等提供事業）、成功報酬モデル、厚労省の転職者実態調査による利用実態を出典付きで整理し、在職中・未経験・ブランク・急ぎの状況別の使い分けを紹介します。",
  alternates: { canonical: "/articles/agent-vs-site/" },
  openGraph: {
    title: "転職エージェントと転職サイトの違い｜女性エンジニアはどっちを使うべき？【2026年】",
    description:
      "転職エージェントと転職サイトの違いを仕組みと制度から解説。職業安定法上の位置づけ、成功報酬モデル、厚労省の公的調査による利用実態を出典付きで整理し、状況別の使い分けを紹介します。",
    url: "https://women-engineer.com/articles/agent-vs-site/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "転職エージェントと転職サイトの違い｜女性エンジニアはどっちを使うべき？【2026年】",
  datePublished: "2026-04-27",
  dateModified: "2026-06-12",
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
    "転職エージェントと転職サイトの違いを仕組みと制度から解説。職業安定法上の位置づけ、成功報酬モデル、厚労省の公的調査による利用実態を出典付きで整理し、状況別の使い分けを紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/agent-vs-site/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "転職エージェントと転職サイトは法律上どう違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "転職エージェントは職業安定法上の「職業紹介事業」で、有料で行うには厚生労働大臣の許可が必要です（職業安定法第30条）。担当者が求職者と求人企業の間に入り、あっせん（マッチング）を行います。一方の転職サイトは「募集情報等提供事業」で、求人情報を求職者に提供する事業です。利用者の情報を収集する求人メディアは「特定募集情報等提供事業」として届出制の対象になりました（職業安定法第43条の2、令和4年10月施行）。どちらも求人情報の的確な表示（正確かつ最新の内容に保つこと）が法律で義務付けられています。",
      },
    },
    {
      "@type": "Question",
      name: "転職エージェントと転職サイトでは、利用している人が多いのはどちらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省「令和2年転職者実態調査」によると、転職活動の方法（複数回答）は「求人サイト・求人情報専門誌・新聞・チラシ等」が39.4%で最も多く、「ハローワーク等の公的機関」34.3%、「縁故（知人・友人等）」26.8%、「民営の職業紹介機関（転職エージェント等）」14.8%でした。サイト型の利用が最多ですが、複数回答の調査であることからも、複数の手段の併用が転職活動の前提になっていることがわかります。なお25〜34歳では民営の職業紹介機関の利用が21.4%と全体平均より高く、若手・中堅層ほどエージェントも活用している傾向が読み取れます。",
      },
    },
    {
      "@type": "Question",
      name: "非公開求人とはなんですか？なぜ転職サイトには載らないのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "非公開求人とは、企業が求人サイト等で一般公開せず、職業紹介事業者（エージェント）経由でのみ募集する求人の総称です。新規事業や欠員補充を社内外に知られたくない、応募が殺到する職種で書類選考の負荷を下げたい、要件に合う人だけに会いたい、といった企業側の事情で非公開にされるのが一般的です。転職サイトは「公開された募集情報の提供」が仕組みの中心であるため、この種の求人には自分で検索してもたどり着けません。非公開求人の存在は、サイト型と併せてエージェント型も使う理由のひとつです。",
      },
    },
    {
      "@type": "Question",
      name: "エージェントとサイトを併用するとき、同じ求人に両方から応募してもいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いけません。同じ求人にエージェント経由とサイトからの直接応募で重複して応募すると、企業側で応募者情報が二重に登録され、企業・エージェント双方の信頼を損ないます。選考管理上のトラブルになり、最悪の場合どちらの経路でも選考対象外になることがあります。併用自体はまったく問題ありませんが、「どの企業にどの経路で応募したか」はスプレッドシート等で自分が一元管理し、応募済みの企業をエージェントに紹介されたときは正直に伝えましょう。",
      },
    },
    {
      "@type": "Question",
      name: "在職中でも転職エージェントや転職サイトは使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "どちらも在職中に使えます。転職サイトは深夜や週末でも自分のペースで求人を探せるのが利点で、スカウト型サービスには特定企業（現職など）に自分の情報を表示しない設定を用意しているものが一般的です。エージェントは面接日程の調整や企業とのやり取りを担当者が代行するため、平日に時間を取りにくい在職中こそメリットが大きい仕組みです。在職中の転職活動の進め方や情報管理の注意点は、当サイトの「働きながら転職活動を進める方法」で詳しく解説しています。",
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
        style={{
          background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "転職エージェント vs 転職サイト" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              比較ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              転職エージェントと転職サイトの違い
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性エンジニアはどっちを使うべき？【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}
          >
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
              この記事の結論
            </h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li>
                ① エージェントとサイトは<strong>優劣ではなく仕組みの違い</strong>。エージェントは「担当者が間に入るあっせん（職業紹介事業）」、サイトは「自分で探す求人情報の提供（募集情報等提供事業）」で、職業安定法上も別の事業として規律されている
              </li>
              <li>
                ② 公的調査では、転職活動の方法は「求人サイト等」39.4%が最多で、「民営の職業紹介機関（エージェント等）」は14.8%。ただし複数回答での集計であり、<strong>複数の手段の併用が前提</strong>（厚生労働省・令和2年転職者実態調査）
              </li>
              <li>
                ③ 使い方の定石は<strong>併用</strong>。サイトで相場観と選択肢を自分の目で確かめ、エージェントで非公開求人・書類添削・条件交渉のサポートを受けると、両者の弱点を打ち消し合える
              </li>
              <li>
                ④ どちらを軸にするかは<strong>状況で決める</strong>。在職中で時間がない・急いでいる人はエージェント軸、未経験・情報収集段階・自分のペースで進めたい人はサイト軸から始めるのが現実的
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}
          >
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li>
                <a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>
                  1. エージェントとサイトは「仕組み」が違う
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>
                  2. 仕組み比較表（サポート・探し方・非公開求人・交渉・ペース）
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>
                  3. 制度の裏付け（職業安定法上の位置づけとお金の流れ）
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>
                  4. 公的データで見る利用実態
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>
                  5. 仕組みから導く、それぞれの得意・不得意
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>
                  6. 状況別・使い分けの判断フロー
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>
                  7. 併用を機能させる3つのルール
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>
                  8. おすすめ転職エージェント
                </a>
              </li>
              <li>
                <a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>
                  9. よくある質問
                </a>
              </li>
              <li>
                <a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>
                  10. 出典・参考資料
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 仕組みの違い */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">エージェントとサイトは「仕組み」が違う</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「転職エージェントと転職サイト、どっちがいいの？」という質問には、実は前提の誤りがあります。両者は同じ土俵で優劣を競うサービスではなく、<strong>そもそも仕組みが異なる別の事業</strong>だからです。
            </p>
            <p>
              <strong>転職エージェント</strong>は、職業安定法上の<strong>職業紹介事業</strong>です。キャリアアドバイザー（担当者）が求職者と面談し、希望や経歴に合う求人を紹介し、応募書類の添削・面接日程の調整・条件交渉まで、求職者と企業の間に「人」が入ってあっせんを行います。
            </p>
            <p>
              <strong>転職サイト</strong>は、職業安定法上の<strong>募集情報等提供事業</strong>です。企業の求人情報をデータベース化して提供し、求職者は自分で検索・比較して直接応募します。間に担当者は入らず、応募から条件交渉まで自分で進めるのが基本です（近年は企業からスカウトが届く機能を持つサイトも一般的です）。
            </p>
            <p>
              つまり違いの本質は、<strong>「人が介在するマッチング」か「自分で動くための情報提供」か</strong>。この仕組みの違いが、サポートの濃さ、出会える求人の範囲、進むスピード、自由度のすべてを規定します。だからこそ、自分の状況に合わせて使い分け、多くの場合は併用するのが合理的な答えになります。
            </p>
            <div
              className="rounded-xl border p-6 mt-6"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>
                2つの仕組みのざっくりした整理
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>
                    <strong>エージェント型（職業紹介）</strong>: 担当者が間に入る。紹介・添削・日程調整・条件交渉のサポートあり。厚生労働大臣の許可制
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>
                    <strong>サイト型（募集情報等提供）</strong>: 自分で検索して直接応募。マイペースに進められる。利用者情報を扱う事業者は届出制
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>
                    どちらも<strong>求職者は無料</strong>。費用は求人企業側が負担する（仕組みは<a href="#sec3" className="underline" style={{ color: "#7c3a55" }}>3章</a>で解説）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>
                    排他的な選択ではない。公的調査でも転職活動の方法は複数回答で集計されており、併用が前提
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-sm">
              なお、エージェントの中にも「IT特化型」「総合型」というカテゴリの違いがあります。エージェントを使うと決めた後の選び方は
              <a href="/articles/specialized-vs-general/" className="underline" style={{ color: "#7c3a55" }}>
                IT特化型と総合型転職エージェントの違い
              </a>
              で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 比較表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">仕組み比較表（サポート・探し方・非公開求人・交渉・ペース）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              エージェント型・サイト型それぞれの一般的な仕組みの違いを整理すると次のようになります。<strong>個々のサービスによって機能差があるため、カテゴリとしての傾向</strong>として参考にしてください。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>比較項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>転職エージェント（職業紹介）</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>転職サイト（募集情報等提供）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>サポート</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>担当者が面談・書類添削・面接対策・日程調整を支援する仕組み</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基本は自己完結。レジュメ作成ツール等はあるが「人」の支援はない</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>求人の探し方</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>面談内容をもとに担当者が紹介。自分の検索条件の外にある求人にも出会える</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自分で検索・絞り込み。全体の相場観をつかみやすい。スカウト機能を持つサイトも</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>非公開求人</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>紹介経由でのみ募集される非公開求人に出会える可能性がある</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>原則として公開された掲載求人のみ</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>年収交渉</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>担当者が代行・助言する仕組みがある。本人が言い出しにくい条件も伝えやすい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自分で交渉する。交渉材料（相場・他社選考状況）も自分で揃える</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ペース管理</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>担当者と二人三脚で進む。推進力がある反面、ペースが速まりやすい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>完全に自分のペース。止まるも進むも自由な分、推進力は自分次第</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>費用と制度</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>求職者無料（企業の成功報酬で運営）。厚生労働大臣の許可制</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>求職者無料（企業の掲載料等で運営）。特定事業者は届出制</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            この表からわかるとおり、両者の長所と短所はきれいに裏返しの関係にあります。だからこそ「どちらか」ではなく「両方を役割分担で使う」のが定石です。具体的な組み合わせ方は
            <a href="#sec6" className="underline" style={{ color: "#7c3a55" }}>判断フロー</a>
            で解説します。
          </p>
        </div>
      </section>

      {/* sec3 制度の裏付け */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">制度の裏付け（職業安定法上の位置づけとお金の流れ）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「エージェント」と「サイト」の区別は、マーケティング上の呼び分けではなく、<strong>職業安定法という法律上の区別</strong>です。制度を知ると、両者の性格の違いが腹落ちします。
            </p>
            <p>
              転職エージェントの正式な制度名は<strong>有料職業紹介事業</strong>で、営むには<strong>厚生労働大臣の許可</strong>が必要です（職業安定法第30条）。令和6年度に事業報告を提出した有料職業紹介事業所は30,561事業所にのぼります（出典: 厚生労働省「令和6年度職業紹介事業報告書の集計結果（速報）」2026年6月参照）。「有料」という名前ですが、職業安定法第32条の3第2項により<strong>求職者から手数料を取ることは原則禁止</strong>されており（例外は芸能家・家政婦（夫）など一部職種のみで、エンジニアは対象外）、費用を払うのは求人企業の側です。
            </p>
            <p>
              一方の転職サイトは<strong>募集情報等提供事業</strong>に位置づけられます。令和4年10月施行の職業安定法改正で、利用者（求職者）の情報を収集する求人メディアは<strong>特定募集情報等提供事業として届出制</strong>になり（職業安定法第43条の2）、あわせて求人情報を<strong>正確かつ最新の内容に保つ「的確表示」の義務</strong>が職業紹介事業者・募集情報等提供事業者の双方に課されました（出典: 厚生労働省「令和4年職業安定法の改正について」2026年6月参照）。エージェントもサイトも、法律のルールの下で運営されている点は共通です。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>
              お金の流れの違い（どちらも求職者は無料）
            </h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">1.</span>
                <span>
                  <strong>エージェント＝成功報酬モデル</strong>: 紹介した人材の入社が決まったとき、求人企業がエージェントに紹介手数料を支払う。厚労省の集計では、令和6年度の有料職業紹介による常用就職は888,993件・手数料収入は約9,835億円で、<strong>常用就職1件あたり約103万円</strong>（全業種平均）（出典: 厚生労働省「令和6年度職業紹介事業報告書の集計結果（速報）」2026年6月参照）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">2.</span>
                <span>
                  <strong>サイト＝掲載・採用課金モデル</strong>: 求人企業が掲載料や採用時の課金などの形でサイト運営会社に費用を支払うのが一般的。求職者の検索・応募は無料
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">3.</span>
                <span>
                  この収益構造の違いが性格の違いを生む。エージェントは「決まって初めて売上が立つ」ため手厚く支援する動機と早期決定を促す力学の両方を持ち、サイトは中立な情報棚である分、取捨選択も交渉も利用者に委ねられる
                </span>
              </li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            なお、有料職業紹介の許可を受けた事業者かどうかは、厚生労働省の「人材サービス総合サイト」で誰でも検索できます（出典: 厚生労働省 人材サービス総合サイト、2026年6月参照）。エージェントが無料で使える仕組みのより詳しい解説は
            <a href="/articles/specialized-vs-general/" className="underline" style={{ color: "#7c3a55" }}>
              IT特化型と総合型エージェントの違い
            </a>
            の3章も参照してください。
          </p>
        </div>
      </section>

      {/* sec4 利用実態 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">公的データで見る利用実態</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              実際の転職者はどちらを使っているのでしょうか。厚生労働省「令和2年転職者実態調査」によると、転職者が現在の勤め先に就職するために行った転職活動の方法（複数回答）は次のとおりです。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>転職活動の方法（複数回答）</th>
                  <th className="border px-4 py-3 text-right" style={{ borderColor: "#d9c7b8" }}>割合</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>求人サイト・求人情報専門誌・新聞・チラシ等</td>
                  <td className="border px-4 py-3 text-right font-bold" style={{ borderColor: "#d9c7b8" }}>39.4%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ハローワーク等の公的機関</td>
                  <td className="border px-4 py-3 text-right" style={{ borderColor: "#d9c7b8" }}>34.3%</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>縁故（知人・友人等）</td>
                  <td className="border px-4 py-3 text-right" style={{ borderColor: "#d9c7b8" }}>26.8%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>民営の職業紹介機関（転職エージェント等）</td>
                  <td className="border px-4 py-3 text-right font-bold" style={{ borderColor: "#d9c7b8" }}>14.8%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-2">
            出典: 厚生労働省「令和2年転職者実態調査の概況」表17（2026年6月参照）。全業種の転職者が対象。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              最も使われているのは<strong>サイト型（求人サイト等）の39.4%</strong>で、前回調査（平成27年）から15.2ポイント増と大きく伸びています。一方、<strong>エージェント型（民営の職業紹介機関）は14.8%</strong>。ここだけ見ると「サイトが主流」に見えますが、2つの読み方が重要です。
            </p>
            <p>
              第一に、この調査は<strong>複数回答</strong>です。各方法の合計が100%を大きく超えることからわかるとおり、多くの転職者は1つの手段に絞らず併用しています。第二に、年齢層で傾向が異なり、<strong>25〜34歳では民営の職業紹介機関の利用が21.4%</strong>と全体平均（14.8%）を大きく上回ります。キャリアの選択肢が広く、企業側の採用意欲も高い若手・中堅層ほど、サイトで広く探しつつエージェントの支援も受ける、という併用行動を取っていることが公的データから読み取れます。
            </p>
            <p>
              また、女性の転職者に限ると「求人サイト等」の利用は42.8%と男性（36.9%）より高く、自分で情報を集めて比較する行動が広く定着しています（出典: 同調査表17、2026年6月参照）。働き方の条件（産休育休の実績・リモートの運用など）を重視する転職では、サイトで集めた公開情報と、エージェント経由でしか得にくい内部情報を突き合わせる進め方が理にかなっています。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 得意・不得意 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">仕組みから導く、それぞれの得意・不得意</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              比較表と制度の知識を踏まえると、それぞれの得意・不得意は「性格の良し悪し」ではなく<strong>仕組みの必然</strong>として説明できます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                エージェント型が得意なこと
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                成功報酬モデルゆえに「決めるための支援」が手厚くなります。職務経歴書の添削、面接対策、日程調整の代行、年収交渉。とくにエンジニアの場合、技術力の言語化や、求人票に載らない開発体制・残業実態・産休育休の取得実績といった内部情報の確認を担当者経由で行えるのは、仕組み上サイトでは代替できない価値です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55", borderWidth: 1 }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                エージェント型が不得意なこと
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                同じ成功報酬モデルの裏面として、担当者には早期決定を促す力学が構造的に働き得ます。また紹介される求人は「そのエージェントが保有する求人」に限られるため、提案には必ず偏りがあります。急かされたときに回答期限の延長や判断材料の追加確認を求めるのは正当な権利ですし、偏りはサイトや他エージェントとの併用で補えます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                サイト型が得意なこと
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                公開求人の全体を自分の目で見渡せるため、市場の相場観（自分のスキルでどんな求人・年収帯があるか）をつかむのに最適です。深夜でも週末でも自分のペースで進められ、転職するかどうか迷っている情報収集段階でも気軽に使えます。誰かに紹介される前に「自分で選んだ」という納得感を持てるのも利点です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55", borderWidth: 1 }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                サイト型が不得意なこと
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                書類添削も面接対策も年収交渉も、すべて自分で行う必要があります。非公開求人には原則アクセスできず、求人票の文面以上の内部情報も自力では確認しにくいのが実情です。また「いつでもできる」は「いつまでもやらない」と紙一重で、在職中の多忙な時期には活動が止まりやすい点も、仕組み上の弱点といえます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec6 判断フロー */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">状況別・使い分けの判断フロー</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              併用が基本としたうえで、「どちらを軸に始めるか」は今の状況で決めるのが実用的です。次の4パターンを目安にしてください。
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                在職中
              </span>
              <div>
                <h3 className="font-bold mb-1">働きながら転職したい → エージェント軸＋サイトで相場確認</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  平日に時間を取りにくい在職中は、日程調整や企業とのやり取りを代行してくれるエージェントの仕組みが最も効きます。並行してサイトで求人の相場観を確認しておくと、紹介された求人を評価する物差しができます。情報管理を含めた進め方は
                  <a href="/articles/job-hunting-while-employed/" className="underline" style={{ color: "#7c3a55" }}>
                    働きながら転職活動を進める方法
                  </a>
                  にまとめています。
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                未経験
              </span>
              <div>
                <h3 className="font-bold mb-1">未経験からエンジニアを目指す → サイト軸で相場観＋実績ができたらエージェント追加</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  エージェントは成功報酬モデルのため、紹介できる求人がない完全未経験の段階では十分な支援を受けられないことがあります。まずサイトで未経験可求人の要件（言語・ポートフォリオ・年齢層）を自分の目で確かめて学習計画に反映し、実績ができた段階でエージェントを加えるのが現実的です。学習ロードマップは
                  <a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>
                    未経験からエンジニアになる完全ガイド
                  </a>
                  を参照してください。
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#c15f47" }}>
                ブランク
              </span>
              <div>
                <h3 className="font-bold mb-1">産育休・離職からの復職 → エージェントで条件確認＋サイトでじっくり比較</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  復職では時短・リモート・残業実態など「求人票に書ききれない条件」の確認が成否を分けます。内部情報を担当者経由で確認できるエージェントを軸にしつつ、生活と両立できるペースで進めたい時期はサイトで自分のリズムを保つ、という両構えが有効です。
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                急ぎ
              </span>
              <div>
                <h3 className="font-bold mb-1">早く決めたい → エージェント軸で集中的に</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  退職日が決まっている、現職の環境が限界、といった事情で短期決着を狙うなら、求人の選定・日程調整・選考対策を並走してくれるエージェントの推進力が最大の武器になります。ただし急ぐときほど判断が雑になりやすいので、承諾前に労働条件通知の内容（給与・勤務地・残業の扱い）を必ず自分の目で確認しましょう。
                </p>
              </div>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            エージェントを使うと決めたら、次は個社の選び方です。面談で確認すべきチェックポイントは
            <a href="/articles/how-to-choose/" className="underline" style={{ color: "#7c3a55" }}>
              転職エージェントの選び方ガイド
            </a>
            にまとめています。
          </p>
        </div>
      </section>

      {/* sec7 併用ルール */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">併用を機能させる3つのルール</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              エージェントとサイトの併用はルール上もマナー上も問題ありませんが、仕組みが違う2つを並行させる以上、自分側の管理が必要になります。次の3つだけ守れば、併用は安全に機能します。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>
                  <strong>応募経路を一元管理する</strong>: 同じ求人にエージェント経由とサイト直接応募で重複応募すると、企業・エージェント双方の信頼を損ないます。「どの企業にどの経路で応募したか」をスプレッドシート等で自分が管理する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>
                  <strong>併用していることを隠さない</strong>: エージェントに「サイトでも探している」「他社も使っている」と伝えるのは普通のことで、選考スケジュールの調整もしやすくなります
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>
                  <strong>役割を決めて使う</strong>: 「サイト＝相場観と選択肢の確認、エージェント＝非公開求人・選考対策・条件交渉」のように役割を決めると、どちらかに振り回されにくくなります
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* おすすめ転職エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績が光ります。スピーディーなマッチングで、最短2週間での内定実績も。年収交渉力にも定評があります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                  女性特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介してくれるため、長期的なキャリア形成に最適。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
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
            style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}
          >
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">
              複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#c15f47" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map(
              (
                faq: { name: string; acceptedAnswer: { text: string } },
                i: number
              ) => (
                <details
                  key={i}
                  className="group rounded-xl border overflow-hidden"
                  style={{ borderColor: "#d9c7b8" }}
                >
                  <summary
                    className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50"
                    style={{ color: "#7c3a55" }}
                  >
                    <span className="pr-4">{faq.name}</span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9662;
                    </span>
                  </summary>
                  <div
                    className="px-6 pb-4 text-sm text-text-light leading-relaxed"
                    style={{ borderTop: "1px solid #d9c7b8" }}
                  >
                    <p className="pt-4">{faq.acceptedAnswer.text}</p>
                  </div>
                </details>
              )
            )}
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-3 text-sm text-text-light leading-relaxed">
            <li>
              ・出典: 厚生労働省「令和2年転職者実態調査の概況」（2026年6月参照）— 転職活動の方法（複数回答）: 求人サイト・求人情報専門誌・新聞・チラシ等39.4%（前回比+15.2ポイント）、ハローワーク等の公的機関34.3%、縁故26.8%、民営の職業紹介機関14.8%。25〜34歳の民営職業紹介機関利用21.4%、女性の求人サイト等利用42.8%
            </li>
            <li>
              ・出典: 厚生労働省「令和6年度職業紹介事業報告書の集計結果（速報）」令和8年3月31日公表（2026年6月参照）— 有料職業紹介事業所数30,561、常用就職件数888,993件、手数料収入約9,835億円、常用就職1件あたり手数料約103万円
            </li>
            <li>
              ・出典: 厚生労働省「令和4年職業安定法の改正について」（2026年6月参照）— 募集情報等提供の範囲拡大、特定募集情報等提供事業の届出制（第43条の2）、求人等に関する情報の的確な表示の義務化（令和4年10月1日施行）
            </li>
            <li>
              ・出典: e-Gov法令検索「職業安定法」（昭和22年法律第141号）（2026年6月参照）— 有料職業紹介事業の許可制（第30条）、求職者からの手数料徴収の原則禁止（第32条の3第2項）、募集情報等提供の定義（第4条）
            </li>
            <li>
              ・出典: 厚生労働省「人材サービス総合サイト」（2026年6月参照）— 職業紹介事業の許可事業者・特定募集情報等提供事業の届出事業者の検索
            </li>
          </ul>
          <p className="mt-4 text-xs text-text-light">
            ※ 本文中の統計は全業種を対象とした公的調査・集計であり、IT業界・個別のサービスの数値ではありません。各サービスの最新の機能・求人数は各社公式サイトでご確認ください。
          </p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/specialized-vs-general/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                IT特化型と総合型エージェントの違い
              </h3>
              <p className="text-sm text-text-light">エージェントを使うと決めた後の選び分け</p>
            </a>
            <a
              href="/articles/how-to-choose/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                エージェント選び方ガイド
              </h3>
              <p className="text-sm text-text-light">失敗しない選び方のチェックポイント</p>
            </a>
            <a
              href="/articles/job-hunting-while-employed/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                働きながら転職活動を進める方法
              </h3>
              <p className="text-sm text-text-light">在職中の時間管理と情報管理のコツ</p>
            </a>
            <a
              href="/articles/beginner/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                未経験からエンジニアになる完全ガイド
              </h3>
              <p className="text-sm text-text-light">学習ロードマップと転職の進め方</p>
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
              background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)",
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
              style={{ backgroundColor: "#c15f47", color: "#ffffff" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
