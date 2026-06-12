import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアコミュニティまとめ｜つながりがキャリアを変える理由と選び方【2026年】",
  description:
    "女性エンジニア向けコミュニティを2026年6月時点で実在確認したものだけ紹介。PyLadies Tokyo・Java女子部・TECH PLAY女子部・JAWS-UGクラウド女子会・Rails Girls等の対象・活動内容・参加方法と、Women Who Code国際組織の解散（2024年）など最新状況、参加メリット・選び方を解説します。",
  alternates: { canonical: "/articles/community/" },
  openGraph: {
    title: "女性エンジニアコミュニティまとめ｜つながりがキャリアを変える理由と選び方【2026年】",
    description:
      "2026年6月時点で活動を確認できた女性エンジニア向けコミュニティのみを紹介。対象・活動内容・参加方法、解散・休止情報まで正直に解説。",
    url: "https://women-engineer.com/articles/community/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアコミュニティまとめ｜つながりがキャリアを変える理由と選び方【2026年】",
  datePublished: "2026-04-28",
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
    "2026年6月時点で活動を確認できた女性エンジニア向けコミュニティのみを紹介。対象・活動内容・参加方法、解散・休止情報、参加メリットと選び方を解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/community/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Women Who Codeはまだ活動していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "国際組織のWomen Who Code（本部・米国アトランタ）は、資金難を理由に2024年4月に解散を発表し、活動を終了しました。最盛期には145カ国・約36万人が参加する世界最大級の女性テックコミュニティでしたが、現在は新規参加できません。過去の記事で「日本支部があるWomen Who Code」と紹介されていることがありますが、2026年6月時点では国際組織自体が存在しないため注意してください。代替としては、日本国内で現在も活動中のPyLadies TokyoやTECH PLAY女子部、JAWS-UGクラウド女子会などが選択肢になります。",
      },
    },
    {
      "@type": "Question",
      name: "コミュニティ活動は転職に役立ちますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "役立ちます。勉強会でのLT登壇やイベント運営の経験は職務経歴書・面接でアピールできる実績になり、connpassやDoorkeeperの参加履歴・登壇資料はそのまま学習意欲の証拠になります。また、コミュニティでつながった現役エンジニアから企業の実際の働き方を聞けるため、求人票だけでは分からない情報を得られます。ただし非公開求人の紹介や年収交渉はコミュニティの役割ではないので、転職活動自体はIT特化型・女性特化型の転職エージェントと併用するのが現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験・学習中でも女性エンジニアコミュニティに参加できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "参加できるコミュニティが複数あります。Rails Girlsはプログラミング未経験の女性を主な対象にした無料ワークショップで、2026年も東京（2月）・名古屋（3月）で開催されました。PyLadies TokyoもPython初心者を歓迎しており、ハンズオン形式のイベントがあります。エンジニア向け勉強会は「実務経験者向け」と思われがちですが、女性向けコミュニティは初心者歓迎を明記しているものが多いので、イベントページの対象者欄を確認してから申し込めば問題ありません。",
      },
    },
    {
      "@type": "Question",
      name: "人見知りでも参加できますか？最初の一歩はどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "聞くだけの参加（聴講）から始められます。connpassやTECH PLAYで「女性限定」「初心者歓迎」のオンラインイベントを探し、カメラ・マイクオフで視聴するのが最もハードルの低い一歩です。次の段階として、懇親会付きイベントで1人と話す、SlackやDiscordで自己紹介チャンネルに書き込む、と少しずつ広げれば十分です。発表は義務ではなく、慣れてから5分程度のLTに挑戦すれば登壇実績にもなります。",
      },
    },
    {
      "@type": "Question",
      name: "コミュニティ選びで失敗しないためのポイントは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3点を確認しましょう。(1)直近の活動実績：connpass・Doorkeeper・公式SNSで直近1年以内にイベント開催があるかを必ず確認する（解散・休止したコミュニティが古い記事で紹介され続けているケースがあります）。(2)対象との一致：技術特化型（Python・Java・AWS等）か、キャリア・交流型かを自分の目的と合わせる。(3)参加形式：オンライン中心か、東京などオフライン中心かを生活スタイルと合わせる。まずは単発イベントに1回参加し、雰囲気が合うかを確かめてから継続を決めるのが安全です。",
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
    { "@type": "ListItem", position: 3, name: "女性エンジニアコミュニティまとめ", item: "https://women-engineer.com/articles/community/" },
  ],
};

// 2026年6月12日時点で公式サイト・公式イベントページにて活動を確認したコミュニティのみ掲載
const communities = [
  {
    name: "PyLadies Tokyo",
    target: "Pythonを使う・学ぶ女性（初心者歓迎）",
    activity: "月例Meetup・ハンズオン・合宿（2026年6月合宿、7月にクラウド女子会コラボ開催予定を確認）",
    join: "connpassでイベント申込",
    url: "pyladies-tokyo.connpass.com",
    status: "活動中（2026年6月確認）",
    active: true,
  },
  {
    name: "Java女子部（Javajo）",
    target: "Javaに関心のある女性（女性限定）",
    activity: "Java関連の勉強会・交流会。2014年発足、Doorkeeperメンバー約840名",
    join: "Doorkeeperでイベント申込",
    url: "javajo.doorkeeper.jp",
    status: "直近開催は2025年8月を確認（2025年10月予定回は中止）",
    active: true,
  },
  {
    name: "TECH PLAY女子部",
    target: "IT・Web業界で働く女性全般",
    activity: "もくもく会・キャリアMeetup・技術イベント（2026年2月・3月の開催を確認）",
    join: "TECH PLAYのコミュニティページからイベント申込",
    url: "techplay.jp/community/tp_girls",
    status: "活動中（2026年6月確認）",
    active: true,
  },
  {
    name: "JAWS-UG クラウド女子会",
    target: "AWS・クラウドに興味のある女性（職種不問）",
    activity: "LT大会・AWS BuilderCards会など（2026年3月に第30回開催を確認）",
    join: "connpassでイベント申込",
    url: "jawsug-cloudgirl.connpass.com",
    status: "活動中（2026年6月確認）",
    active: true,
  },
  {
    name: "Rails Girls（Tokyo / Nagoya ほか）",
    target: "プログラミング未経験〜初心者の女性",
    activity: "Ruby on Railsでアプリを作る無料ワークショップ（2026年2月東京18th・3月名古屋7th開催を確認。託児スポンサー付きの回あり）",
    join: "各開催回の公式ページから応募（抽選制が多い）",
    url: "railsgirls.jp",
    status: "活動中（2026年6月確認）",
    active: true,
  },
  {
    name: "Waffle（NPO法人）",
    target: "女子・ノンバイナリーの中高生・大学生",
    activity: "Waffle Camp（コーディング講座）・Waffle College・起業家育成プログラム（2026年も新プログラム募集を確認）",
    join: "公式サイトの各プログラム募集ページから応募",
    url: "waffle-waffle.org",
    status: "活動中（2026年6月確認）",
    active: true,
  },
];

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "女性エンジニアコミュニティまとめ" },
            ]}
          />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>
              キャリア知識
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアコミュニティまとめ
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                つながりがキャリアを変える理由と選び方【2026年】
              </span>
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
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>本記事で紹介するのは、<strong>2026年6月時点で公式サイト・公式イベントページで活動を確認できたコミュニティのみ</strong>。PyLadies Tokyo・TECH PLAY女子部・JAWS-UGクラウド女子会・Rails Girlsなどは現在も活動中です。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>かつて世界最大級だった<strong>Women Who Code（国際組織）は2024年4月に解散済み</strong>。古い記事の情報には注意が必要です。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>コミュニティは「学習仲間」「ロールモデル探し」「企業のリアルな情報収集」に有効。まずは<strong>オンラインの聴講参加</strong>から始めれば心理的ハードルは低くできます。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>選ぶときは<strong>「直近1年以内の活動実績」を必ず確認</strong>。connpass・Doorkeeper・公式SNSの最終イベント日時が判断材料になります。</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. コミュニティがキャリアを変える理由</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 実在確認済み・女性エンジニアコミュニティ一覧表</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 各コミュニティの詳細（技術系・初心者向け・学生向け）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 解散・活動状況に注意が必要なコミュニティ</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 女性向けカンファレンス・大型イベント</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 失敗しないコミュニティの選び方</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. コミュニティ活用法（学習・転職・ロールモデル）</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. 参加の心理的ハードルを下げる方法</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 メリット */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">コミュニティがキャリアを変える理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              情報処理推進機構（IPA）などの調査でも指摘されている通り、日本のIT技術職に占める女性の割合はまだ少数派です。職場に同性のエンジニアがほとんどいない場合、「育児と両立しながら技術職を続けられるのか」「管理職になった女性はどう働いているのか」といった疑問を、身近な先輩に聞くことができません。社外のコミュニティは、この<strong>「職場では得られない視点」を補う場</strong>として機能します。
            </p>
            <p>
              具体的なメリットは大きく4つです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>1. ロールモデルに出会える</h3>
              <p className="text-text-light text-sm leading-relaxed">育児と両立している人、マネジメントに進んだ人、フリーランスになった人——多様なキャリアの実例に直接触れられます。1人のロールモデルを真似るのではなく、複数の人から「使える部分」を集めるのが現実的です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>2. 学習が続く環境ができる</h3>
              <p className="text-text-light text-sm leading-relaxed">もくもく会やハンズオンは「1人だと挫折しやすい学習」を続ける仕組みとして有効です。質問できる相手がいるだけで、独学のつまずきが解消しやすくなります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>3. 企業のリアルな情報が入る</h3>
              <p className="text-text-light text-sm leading-relaxed">「産休育休から復帰した人が実際にどう働いているか」「リモートの運用実態」など、求人票に書かれない情報を現役社員から聞けるのはコミュニティならではです。転職の意思決定の質が上がります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>4. 登壇・運営が実績になる</h3>
              <p className="text-text-light text-sm leading-relaxed">LT登壇の資料や勉強会の運営経験は、職務経歴書に書ける具体的な実績です。「社外でも学び続けている」ことの客観的な証拠として、面接でも伝えやすくなります。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            孤立しがちな環境でモチベーションを保つ方法は、<a href="/articles/long-career-tips/" className="underline" style={{ color: "#0891b2" }}>女性エンジニアが長く働き続けるためのコツ</a>でも詳しく解説しています。
          </p>
        </div>
      </section>

      {/* sec2 一覧表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">実在確認済み・女性エンジニアコミュニティ一覧表</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              下表は、<strong>2026年6月12日時点で当サイトが各公式サイト・公式イベントページ（connpass / Doorkeeper / TECH PLAY等）にて活動状況を確認したコミュニティ</strong>です。確認できなかったもの・解散したものは表に含めず、<a href="#sec4" className="underline" style={{ color: "#0891b2" }}>第4章</a>で別途扱っています。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>コミュニティ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>対象</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>主な活動</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>参加方法</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>活動状況</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                {communities.map((c, i) => (
                  <tr key={c.name} style={i % 2 === 1 ? { backgroundColor: "#fff" } : undefined}>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>{c.name}<span className="block text-xs font-normal mt-1">{c.url}</span></td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>{c.target}</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>{c.activity}</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>{c.join}</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>{c.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3">
            出典: 各コミュニティ公式ページ（PyLadies Tokyo connpass、Java女子部 Doorkeeper、TECH PLAY女子部、JAWS-UGクラウド女子会 connpass、Rails Girls Japan、NPO法人Waffle公式サイト）（いずれも2026年6月参照）。活動状況は変わる可能性があるため、参加前に各公式ページで最新のイベント開催情報をご確認ください。
          </p>
        </div>
      </section>

      {/* sec3 詳細 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">各コミュニティの詳細（技術系・初心者向け・学生向け）</h2>

          <h3 className="text-xl font-bold mb-4 mt-2" style={{ color: "#0891b2" }}>技術特化型（特定の言語・分野を深めたい人向け）</h3>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3 flex-wrap"><h4 className="text-lg font-bold">PyLadies Tokyo</h4><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>Python</span></div>
              <p className="text-sm text-text-light leading-relaxed">
                Pythonを使う・学びたい女性のための国際コミュニティ「PyLadies」の東京グループ。月例のMeetupやハンズオンに加え、泊まりがけでもくもく開発する合宿（2026年6月開催）など活動が活発です。2026年7月にはJAWS-UGクラウド女子会とのコラボイベント（Meetup #110）も予定されており、地方向けの出張イベント「PyLadies Caravan」の実績もあります。初心者向けハンズオンの開催歴があり、Python学習を始めたばかりでも参加しやすいのが特徴です。
              </p>
              <p className="text-xs text-text-light mt-3">出典: PyLadies Tokyo（pyladies-tokyo.connpass.com）（2026年6月参照）</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3 flex-wrap"><h4 className="text-lg font-bold">Java女子部（Javajo）</h4><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>Java</span></div>
              <p className="text-sm text-text-light leading-relaxed">
                2014年1月に発足した女性限定のJavaユーザーコミュニティで、Doorkeeperのメンバーは約840名。Java周辺技術の勉強会や交流会を東京中心に開催してきました。当サイトで確認できた直近の開催イベントは2025年8月の「言語大乱闘! スマッシュシスターズ!」で、2025年10月に予定されていた技術書典関連イベントは中止となっています。参加を検討する場合は、Doorkeeperページで最新の開催予定を確認してください。
              </p>
              <p className="text-xs text-text-light mt-3">出典: Java女子部 Doorkeeper（javajo.doorkeeper.jp）（2026年6月参照）</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3 flex-wrap"><h4 className="text-lg font-bold">JAWS-UG クラウド女子会</h4><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>AWS・クラウド</span></div>
              <p className="text-sm text-text-light leading-relaxed">
                AWSユーザーグループ（JAWS-UG）の女性向け支部。運営メンバーは全員女性で、エンジニアに限らずデザイナーやマーケターなど「女性と自認する人」なら職種を問わず参加できます。LT大会、AWS re:Inventの振り返り会、カードゲーム「AWS BuilderCards」で学ぶ会など企画が多彩で、2026年3月に第30回が開催されるなど継続的に活動しています。クラウドスキルは求人需要が高い領域なので、キャリアアップ目的との相性も良いコミュニティです。
              </p>
              <p className="text-xs text-text-light mt-3">出典: JAWS-UG クラウド女子会（jawsug-cloudgirl.connpass.com）（2026年6月参照）</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 mt-10" style={{ color: "#7c3aed" }}>初心者・キャリア交流型（これから学ぶ人・働く女性全般向け）</h3>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3 flex-wrap"><h4 className="text-lg font-bold">Rails Girls（Tokyo / Nagoya ほか）</h4><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>未経験OK・無料</span></div>
              <p className="text-sm text-text-light leading-relaxed">
                フィンランド発の国際的ムーブメントで、プログラミング未経験の女性がRuby on RailsでWebアプリを作る無料ワークショップを世界各地で開催しています。日本では2026年も東京（2月・Rails Girls Tokyo 18th）、名古屋（3月・Nagoya 7th）で開催されました。現役エンジニアがコーチとしてマンツーマンに近い形でサポートし、託児スポンサーが付いた回もあるなど、子育て中でも参加しやすい配慮があります。「エンジニアという仕事を体験してみたい」段階の人に最適です。
              </p>
              <p className="text-xs text-text-light mt-3">出典: Rails Girls Japan（railsgirls.jp）（2026年6月参照）</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3 flex-wrap"><h4 className="text-lg font-bold">TECH PLAY女子部</h4><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>交流・キャリア</span></div>
              <p className="text-sm text-text-light leading-relaxed">
                IT勉強会プラットフォーム「TECH PLAY」上のコミュニティで、2015年8月発足。技術の話からキャリア相談、人脈づくりまでテーマが幅広く、もくもく会・キャリアMeetup・他コミュニティとのコラボイベント（Snowflake女子会など）が2026年に入ってからも開催されています。特定技術に縛られないため、「まず同じ立場の女性エンジニアとつながりたい」という人の入り口に向いています。
              </p>
              <p className="text-xs text-text-light mt-3">出典: TECH PLAY女子部（techplay.jp/community/tp_girls）（2026年6月参照）</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 mt-10" style={{ color: "#0891b2" }}>学生・次世代向け</h3>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3 flex-wrap"><h4 className="text-lg font-bold">NPO法人Waffle</h4><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>中高生・大学生</span></div>
              <p className="text-sm text-text-light leading-relaxed">
                「IT分野のジェンダーギャップを解消する」をミッションに掲げるNPO法人。女子中高生向けの無料コーディング講座「Waffle Camp」、大学生・大学院生向けの「Waffle College」、国際アプリコンテスト「Technovation Girls」の国内参加支援などを行っています。2026年には女子・ノンバイナリーの学生向けグローバル起業家育成プログラム「Waffle Empower Next Program」の募集も開始しており、活動は拡大傾向です。社会人向けではありませんが、妹や娘・後輩に紹介できる団体として知っておく価値があります。
              </p>
              <p className="text-xs text-text-light mt-3">出典: NPO法人Waffle公式サイト（waffle-waffle.org）（2026年6月参照）</p>
            </div>
          </div>

          <div className="rounded-xl border p-6 mt-10" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h3 className="text-lg font-bold mb-3">補足: コミュニティではなく「スクール」の選択肢</h3>
            <p className="text-sm text-text-light leading-relaxed">
              女性向けをうたうサービスの中には、無料のコミュニティではなく<strong>有料の教育サービス</strong>もあります。たとえばMs.Engineer（ミズエンジニア）は女性向けのオンラインコーディングブートキャンプを運営する企業で、経済産業省「リスキリングを通じたキャリアアップ支援事業」への採択実績があります（出典: Ms.Engineer公式サイト・プレスリリース、2026年6月参照）。本格的に費用をかけて学ぶ選択肢の一つですが、コミュニティとは性質が異なるため、料金・カリキュラム・給付金の適用条件を公式サイトで確認した上で検討してください。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 解散・注意 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">解散・活動状況に注意が必要なコミュニティ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              コミュニティ紹介記事の多くは一度書かれた後に更新されず、<strong>解散・休止したコミュニティが「活動中」として紹介され続けている</strong>のが実情です。当サイトで確認した範囲では、以下の点に注意が必要です。
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#f97066", borderWidth: "2px" }}>
              <div className="flex items-center gap-3 mb-3 flex-wrap"><h3 className="text-lg font-bold">Women Who Code（国際組織）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#f97066" }}>2024年4月 解散</span></div>
              <p className="text-sm text-text-light leading-relaxed">
                2011年にサンフランシスコで生まれ、最盛期には145カ国・約36万人が参加した世界最大級の女性テックコミュニティでしたが、運営資金の問題により<strong>2024年4月に理事会が解散を決議し、活動を終了</strong>しました。日本語の古い記事では「日本支部のあるグローバルコミュニティ」として今も紹介されていることがありますが、国際組織自体が既に存在しないため、新規に参加することはできません。
              </p>
              <p className="text-xs text-text-light mt-3">出典: Women Who Code公式ブログ「The End of an Era: Women Who Code Closing」（womenwhocode.com）（2026年6月参照）</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3 flex-wrap"><h3 className="text-lg font-bold">Code Polaris</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>公開イベントは2023年12月が直近</span></div>
              <p className="text-sm text-text-light leading-relaxed">
                現役の女性エンジニア3名が2020年に立ち上げた女性限定の技術コミュニティで、connpassグループには約730名が登録しています。Slackでの交流とアプリ開発の実践を軸に活動してきましたが、<strong>connpass上で確認できる公開イベントは2023年12月開催が直近</strong>です（2026年6月時点）。Slack内の活動状況までは外部から確認できないため、参加を検討する場合は公式X（@codepolarisjp）等で現在の運営状況を確認することをおすすめします。
              </p>
              <p className="text-xs text-text-light mt-3">出典: Code Polaris（code-polaris.connpass.com）（2026年6月参照）</p>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>参加前の「生存確認」チェックリスト</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>connpass / Doorkeeper / TECH PLAYで<strong>直近1年以内のイベント開催</strong>があるか</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>公式X・公式サイトの<strong>最終更新日</strong>が極端に古くないか</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>「次回イベント」の募集ページが実際に存在するか（紹介記事の記述だけで判断しない）</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 カンファレンス */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性向けカンファレンス・大型イベント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              定期的なコミュニティ活動とは別に、年1回規模の大型カンファレンスもロールモデル探しや情報収集に有効です。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3 flex-wrap"><h3 className="text-lg font-bold">Grace Hopper Celebration（GHC）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>国際・米国開催</span></div>
              <p className="text-sm text-text-light leading-relaxed">
                米国の非営利団体AnitaB.orgが主催する、世界最大級の「テクノロジー分野の女性」のためのカンファレンス。技術セッション・キャリア支援・採用ブースが一体になっており、世界中から技術者・研究者・学生が集まります。2026年は<strong>10月27日〜30日に米国アナハイム</strong>での開催が公式サイトで告知されています。参加費・渡航費はかかりますが、企業によっては研修・スポンサー枠で社員を派遣する例もあるため、所属企業の制度を確認する価値があります。
              </p>
              <p className="text-xs text-text-light mt-3">出典: AnitaB.org GHC公式サイト（ghc.anitab.org）（2026年6月参照）</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3 flex-wrap"><h3 className="text-lg font-bold">IT Women Summit（旧 Women Developers Summit）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>国内・オンライン無料</span></div>
              <p className="text-sm text-text-light leading-relaxed">
                翔泳社（CodeZine）が主催してきた女性ITエンジニア向けカンファレンス「Women Developers Summit」（2021年初開催）と「Enterprise IT Womenフォーラム」が統合され、2026年5月26日に「IT Women Summit」としてオンラインで初開催されました。参加無料・オンライン形式のため、地方在住や育児中でも視聴しやすいのが特徴です。過去のWomen Developers Summitの講演資料はCodeZine上で公開されており、登壇者のキャリアの歩み方を知る資料としても活用できます。
              </p>
              <p className="text-xs text-text-light mt-3">出典: 翔泳社イベントページ・CodeZineニュース（event.shoeisha.jp / codezine.jp）（2026年6月参照）</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec6 選び方 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">失敗しないコミュニティの選び方</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>「合わないコミュニティに入って疲れてしまう」ことを避けるには、次の3軸で絞り込むのが有効です。</p>
          </div>
          <div className="space-y-4">
            {[
              ["軸1", "目的で選ぶ", "技術を深めたい→PyLadies Tokyo・JAWS-UGクラウド女子会など技術特化型。キャリアの視野を広げたい・仲間が欲しい→TECH PLAY女子部など交流型。まず体験したい→Rails Girlsのような単発ワークショップ。目的と場のミスマッチが、続かない最大の原因です。"],
              ["軸2", "参加形式で選ぶ", "オンライン中心なら地方在住・育児中でも続けやすく、オフライン中心なら人間関係が深まりやすい傾向があります。託児スポンサー付きイベント（Rails Girlsの開催回など）のように、子連れ参加に配慮した企画もあるので、募集ページの記載を確認しましょう。"],
              ["軸3", "活動の「鮮度」で選ぶ", "直近1年以内にイベント開催実績があるかを必ず確認します。本記事の一覧表には確認日（2026年6月）を明記していますが、状況は変わるため、申し込み前に公式ページの最新情報を見るのが確実です。"],
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
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            これから学習を始める段階の人は、コミュニティ選びと並行して<a href="/articles/beginner/" className="underline" style={{ color: "#0891b2" }}>未経験からのIT転職ガイド</a>で学習ロードマップ全体を確認しておくと、参加するイベントの優先順位を付けやすくなります。
          </p>
        </div>
      </section>

      {/* sec7 活用法 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">コミュニティ活用法（学習・転職・ロールモデル）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              せっかく参加するなら、「行って聞いて終わり」ではなく、目的別に使い分けるとリターンが大きくなります。
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>学習に使う: 「締め切り」と「質問相手」を手に入れる</h3>
              <p className="text-sm text-text-light leading-relaxed">
                もくもく会は「この日までにここまでやる」という外部の締め切りとして機能します。ハンズオンイベントでは、独学で何時間も詰まるようなエラーを、その場で経験者に聞いて解決できるのが最大の価値です。LT登壇は「人に説明できるレベルまで理解する」最良の学習法でもあるので、ネタは小さくても挑戦する価値があります。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>転職に使う: 求人票に出ない情報を集める</h3>
              <p className="text-sm text-text-light leading-relaxed">
                懇親会などで聞ける「あの会社は時短勤務の人が実際に何人いる」「リモートと言いつつ週3出社になった」といった一次情報は、転職の意思決定で最も価値があります。ただし、求人紹介・年収交渉・選考対策はコミュニティの役割ではありません。情報収集はコミュニティ、選考の実務はエージェントと役割を分けるのが効率的です。実際の転職成功パターンは<a href="/articles/success-stories/" className="underline" style={{ color: "#0891b2" }}>転職成功パターン分析</a>で解説しています。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>ロールモデル探しに使う: 「完コピ」せず部分的に集める</h3>
              <p className="text-sm text-text-light leading-relaxed">
                登壇者やコミュニティの先輩の中から、「育児との両立はAさん、技術の深め方はBさん」のように<strong>複数の人から部分的に学ぶ</strong>のが現実的です。1人のロールモデルと自分の状況が完全に一致することはまずありません。管理職というキャリアに興味が出てきたら、<a href="/articles/women-manager/" className="underline" style={{ color: "#0891b2" }}>女性エンジニアの管理職キャリアガイド</a>も参考にしてください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec8 心理的ハードル */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">参加の心理的ハードルを下げる方法</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「自分のレベルで行っていいのか」「知り合いがいないのに浮かないか」という不安は、初参加ではほぼ全員が感じるものです。段階を踏めばハードルは確実に下げられます。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "オンラインで「聞くだけ」参加", "カメラ・マイクオフで視聴できるオンラインイベントから。発言義務はありません。IT Women Summitのような無料オンラインカンファレンスや、過去の講演資料・録画を見るだけでも十分な一歩です。"],
              ["STEP2", "「初心者歓迎」明記のイベントへ", "connpassやTECH PLAYのイベントページには対象者が書かれています。「初心者歓迎」「未経験OK」の表記がある回を選べば、レベルの心配は不要です。女性限定イベントは少人数で丁寧な運営のものが多い傾向があります。"],
              ["STEP3", "ハンズオン・もくもく会で手を動かす", "交流が苦手でも、作業が主役のイベントなら会話のプレッシャーが小さくて済みます。「何をしている人ですか」と聞かれたら、学習中ならそのまま伝えれば大丈夫。同じ段階の参加者は必ずいます。"],
              ["STEP4", "懇親会で1人と話す・Slackに書き込む", "全員と仲良くなる必要はありません。1回のイベントで1人と話せれば成功と考えましょう。オンラインコミュニティなら自己紹介チャンネルへの書き込みが最初の接点になります。"],
              ["STEP5", "5分LTに挑戦する", "「学習でつまずいた話」のような身近なテーマで十分です。登壇すると顔を覚えてもらえて以後の参加が楽になるうえ、資料は職務経歴書に書ける実績になります。"],
            ].map(([step, title, desc], i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d1dce5" }}>
                <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>{step}</span>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            無理のないペース（月1回程度）で長く続けることが、結果的に最も大きな資産になります。働き方やキャリアを長期で考えるヒントは<a href="/articles/long-career-tips/" className="underline" style={{ color: "#0891b2" }}>長く働き続けるためのコツ</a>もあわせてどうぞ。
          </p>
        </div>
      </section>

      {/* sec9 FAQ */}
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

      {/* 出典 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
            <h2 className="text-lg font-bold mb-4">本記事の出典・確認方法</h2>
            <p className="text-sm text-text-light leading-relaxed mb-3">
              本記事で紹介したコミュニティ・イベントは、すべて以下の公式ソースで活動状況を確認しています（確認日: 2026年6月12日）。活動状況は変わる可能性があるため、参加前に必ず各公式ページをご確認ください。
            </p>
            <ul className="space-y-1 text-xs text-text-light">
              <li>出典: PyLadies Tokyo connpass（pyladies-tokyo.connpass.com）（2026年6月参照）</li>
              <li>出典: Java女子部 Doorkeeper（javajo.doorkeeper.jp）（2026年6月参照）</li>
              <li>出典: TECH PLAY女子部 コミュニティページ（techplay.jp/community/tp_girls）（2026年6月参照）</li>
              <li>出典: JAWS-UG クラウド女子会 connpass（jawsug-cloudgirl.connpass.com）（2026年6月参照）</li>
              <li>出典: Rails Girls Japan（railsgirls.jp / railsgirls.com）（2026年6月参照）</li>
              <li>出典: NPO法人Waffle 公式サイト（waffle-waffle.org）（2026年6月参照）</li>
              <li>出典: Code Polaris connpass（code-polaris.connpass.com）（2026年6月参照）</li>
              <li>出典: Women Who Code 公式ブログ（womenwhocode.com）（2026年6月参照）</li>
              <li>出典: AnitaB.org Grace Hopper Celebration（ghc.anitab.org）（2026年6月参照）</li>
              <li>出典: 翔泳社 IT Women Summit / CodeZine（event.shoeisha.jp / codezine.jp）（2026年6月参照）</li>
              <li>出典: Ms.Engineer 公式サイト・プレスリリース（ms-engineer.jp / prtimes.jp）（2026年6月参照）</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/long-career-tips/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>長く働き続けるためのコツ</h3><p className="text-sm text-text-light">キャリアを途切れさせない働き方</p></a>
            <a href="/articles/women-manager/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの管理職キャリア</h3><p className="text-sm text-text-light">マネジメントへ進む選択肢</p></a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>未経験からのIT転職ガイド</h3><p className="text-sm text-text-light">ゼロからエンジニアになる方法</p></a>
            <a href="/articles/success-stories/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>転職成功パターン分析</h3><p className="text-sm text-text-light">統計データから見る成功の共通点</p></a>
          </div>
        </div>
      </section>

      <section className="py-12"><div className="mx-auto max-w-4xl px-4 text-center"><div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}><h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2><p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p><a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a></div></div>
      </section>
    </>
  );
}
