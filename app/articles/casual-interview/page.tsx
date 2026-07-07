import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "カジュアル面談の対策ガイド｜エンジニア転職の流れ・逆質問例・NG行動",
  description:
    "エンジニア転職のカジュアル面談を徹底対策。面接との違い（合否なし・双方向）、目的と当日の流れ、事前準備のSTEP、聞くべき逆質問例、やってはいけないNG行動、面接選考に進むコツまで具体例で解説。女性が働き方・制度を確認する場としての活用法とおすすめ転職エージェントも紹介します。",
  alternates: { canonical: "/articles/casual-interview/" },
  openGraph: {
    title: "カジュアル面談の対策ガイド｜エンジニア転職の流れ・逆質問例・NG行動",
    description:
      "エンジニア転職のカジュアル面談を徹底対策。面接との違い・目的・当日の流れ・事前準備・逆質問例・NG行動・面接に進むコツを具体例で解説。女性の働き方確認の活用法も。",
    url: "https://women-engineer.com/articles/casual-interview/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "カジュアル面談の対策ガイド｜エンジニア転職の流れ・逆質問例・NG行動",
  datePublished: "2026-06-10",
  dateModified: "2026-07-07",
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
    "エンジニア転職のカジュアル面談を徹底対策。面接との違い・目的・当日の流れ・事前準備・逆質問例・NG行動・面接に進むコツを具体例で解説。女性の働き方確認の活用法も紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/casual-interview/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "エンジニアのカジュアル面談に合否はありますか？落ちることはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "カジュアル面談は本来「非選考」で、その場で合否がつくものではありません。目的はお互いを知る相互理解で、面談後に「選考に進むか」を双方が判断します。ただし企業によっては実質的に評価しているケースもあり、極端にやる気がない・志望度ゼロの態度・遅刻や無断欠席・攻撃的な質問などは、その後のスカウトや選考案内が来ない要因になります。つまり「審査される場ではないが、印象は残る場」と考え、リラックスしつつ最低限の礼儀と関心は示すのが安全です。",
      },
    },
    {
      "@type": "Question",
      name: "カジュアル面談の服装はどうすればいいですか？私服でいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "オンライン・オフラインともにビジネスカジュアルが無難です。女性ならブラウスやきれいめのニットに、ジャケットやカーディガンを羽織り、きれいめのパンツやスカートを合わせれば十分です。スーツでなくてもよい一方、ヨレた部屋着やすっぴんに近い状態は避けましょう。「私服OK」「服装自由」と案内された場合でも、清潔感のある服装を選べば失礼になりません。オンライン面談では、上半身だけでなく背景や照明、ネット環境も事前にチェックしておくと安心です。",
      },
    },
    {
      "@type": "Question",
      name: "カジュアル面談で残業・年収・産休育休を聞いてもいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "聞いて問題ありません。カジュアル面談は条件のミスマッチを早い段階で防ぐ場でもあるため、残業時間・リモートの運用実態・産休育休の取得実績や復帰率などはむしろ確認すべき項目です。ただし聞き方が大切で、開口一番に年収だけを尋ねたり、福利厚生の話に終始したりすると印象を損ねます。『長く働き続けたいので、ライフイベント後も活躍されている方がいるか伺いたい』のように、働き方への前向きな関心とセットで質問するのがコツです。年収はレンジ確認程度にとどめ、詳細条件はエージェント経由で確認すると角が立ちません。",
      },
    },
    {
      "@type": "Question",
      name: "カジュアル面談から面接選考に進むにはどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "面談の最後に、自分から『ぜひ選考に進みたい』と意思表示するのが最も確実です。多くの企業は、候補者の志望度が高いと感じると次のステップを案内します。終了時に『選考に進む場合の流れを教えてください』『次のステップに進むには何をすればよいですか』と質問しておくと、企業側も動きやすくなります。面談後は当日中〜翌日にお礼のメッセージを送り、興味を持ったポイントを一言添えると印象が残ります。エージェント経由の場合は、面談直後に担当へ『志望度が上がった』と伝えると、後押しの推薦をしてもらえます。",
      },
    },
    {
      "@type": "Question",
      name: "カジュアル面談の前に、どこまで準備しておけばいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最低限、(1)自己紹介と転職を考えた背景を1〜2分で話せるよう整理、(2)企業のサービス・技術スタック・採用ページに目を通す、(3)聞きたい質問を5〜10個リスト化、の3点を準備しておけば十分です。エンジニアの場合は、技術ブログやGitHub、使用言語・フレームワーク、開発体制（チーム規模・開発手法）まで見ておくと、踏み込んだ会話ができ評価につながります。志望動機を完璧に固める必要はありませんが、『なぜこの会社の話を聞きたいと思ったか』だけは言語化しておきましょう。",
      },
    },
    {
      "@type": "Question",
      name: "カジュアル面談を受けたら、必ず選考に進まないといけませんか？辞退できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "進む義務はありません。カジュアル面談は『応募するか／選考に進むか』を判断するための場なので、話を聞いた結果ミスマッチだと感じたら辞退して問題ありません。辞退の連絡は、面談のお礼を述べたうえで『検討した結果、今回は見送らせていただきたい』と簡潔に伝えれば十分です。エージェント経由の場合は担当者に理由（社風・働き方・技術領域が合わなかった等）を伝えると、次の求人紹介の精度が上がります。逆に、その場で答えを出す必要もないので、持ち帰って落ち着いて見極めてから判断しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "カジュアル面談が終わった後、その企業に進むかどうかは何で見極めればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "『働き方の実態』『チーム体制』『成長機会』『相性』の4点で振り返るのがおすすめです。担当者が制度や現場の課題を具体的に答えられたか、リモートや時短などの運用実態を数字や事例で示せたか、質問への回答に一貫性があったか、そして話していて価値観が合いそうかを確認します。逆に、待遇の話を濁す・現場のリアルを語れない・高圧的だった場合は、入社後のギャップに注意が必要です。求人票に出ない女性の働きやすさ（復帰率・女性管理職比率など）は、女性のキャリアに詳しいエージェント経由で裏取りすると確実です。",
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
              { label: "カジュアル面談の対策ガイド" },
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
              カジュアル面談の対策ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                エンジニア転職の流れ・逆質問例・NG行動を具体例で解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月7日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. カジュアル面談とは（面接との違い）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 目的と当日の流れ</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 事前準備のSTEP</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 聞くべき質問・逆質問例</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. やってはいけないNG行動</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 面接選考に進むコツ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 女性が働き方を確認する活用法</a></li>
              <li><a href="#sec-judge" className="hover:underline" style={{ color: "#7c3a55" }}>8. カジュアル面談後の見極め（進む／見送る）</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>9. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>11. 関連記事</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは・面接との違い */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">カジュアル面談とは（面接との違い）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              カジュアル面談とは、本格的な選考に入る前に、企業の社員と候補者がフラットに情報交換をする<strong>非選考型の面談</strong>です。エンジニア採用では、スカウトサービス（LinkedIn・Wantedly・転職ドラフトなど）や転職エージェント経由で「まずは一度お話ししませんか」と打診され、30分〜1時間ほどオンラインで行われるのが一般的です。
            </p>
            <p>
              最大の特徴は、企業が一方的に評価する「面接」と違い、<strong>合否がつかず、双方向で相互理解を深める場</strong>であること。候補者の側も「この会社は自分に合うか」を見極める権利があり、むしろ気になる点を遠慮なく確認してよい場です。「面談」と「面接」を一文字違いで混同しがちですが、両者は目的もスタンスも大きく異なります。
            </p>
            <p>
              ただし注意したいのは、企業によっては<strong>実質的に評価しているケースもある</strong>こと。あからさまにやる気のない態度や、遅刻・無断欠席、攻撃的な質問は、その後のスカウトや選考案内が来ない原因になります。「審査される場ではないが、印象は残る場」と捉え、リラックスしつつ最低限の礼儀と関心は示すのが正解です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>カジュアル面談</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>面接（選考）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>目的</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>相互理解・情報交換</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>採否の判断・見極め</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>合否</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>原則なし（次へ進むかを双方が判断）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>あり（合格・不合格が決まる）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>主導権</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>双方向（候補者からも質問が中心）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>企業側が質問しリード</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>志望動機</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>不要（話を聞きたい理由で十分）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>必須（深掘りされる）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>服装</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ビジネスカジュアルでOK</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>スーツ〜オフィスカジュアル</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>担当者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>現場エンジニア・人事など</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>面接官・役員・人事</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* sec2 目的と当日の流れ */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">目的と当日の流れ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              企業がカジュアル面談を行う目的は、いきなり選考のハードルを上げず、まず自社を知ってもらい候補者の志望度を高めること。エンジニア採用では人材獲得競争が激しいため、「口説く」ニュアンスの面談も少なくありません。候補者側の目的は、<strong>求人票に載らない実態を確認し、応募するか／選考に進むかを判断する</strong>ことです。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>当日の典型的な流れ（30分〜1時間）</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">1.</span><span><strong>アイスブレイク・自己紹介（5分）</strong>：担当者と候補者がお互いに簡単に自己紹介。緊張をほぐす雑談から入ることも多い。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">2.</span><span><strong>企業・事業・ポジションの説明（10〜15分）</strong>：会社のサービス、開発組織、募集ポジション、技術スタックなどの紹介。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">3.</span><span><strong>候補者の経歴・スキルの共有（5〜10分）</strong>：これまでの開発経験や得意領域を1〜2分で説明。深掘りされることもある。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">4.</span><span><strong>質疑応答・逆質問（15〜20分）</strong>：面談の中心。候補者からの質問で相互理解を深める最重要パート。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">5.</span><span><strong>今後の流れの説明（5分）</strong>：選考に進む場合のフローや、連絡のタイミングを確認。</span></li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            時間の半分前後が質疑応答にあてられるため、<strong>質問を用意していないと一気に間が持たなくなり、志望度が低いと受け取られます</strong>。逆に言えば、質問の質と量がそのまま面談の成否を左右します。
          </p>
        </div>
      </section>

      {/* sec3 事前準備STEP */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">事前準備のSTEP</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>志望動機を完璧に固める必要はありませんが、最低限この5ステップを押さえておくと、当日落ち着いて臨めます。準備時間は30分〜1時間で十分です。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "企業の基本情報をリサーチ", "コーポレートサイト・採用ページ・サービスに目を通す。求人票に書いてある内容を質問するのは準備不足とみなされるため、ここで一通り把握しておく。"],
              ["STEP2", "技術・開発体制を確認", "技術ブログ・GitHub・登壇資料・使用言語/フレームワーク・チーム規模・開発手法（スクラム等）まで見ておくと、踏み込んだ会話ができ評価につながる。"],
              ["STEP3", "自己紹介を1〜2分で整理", "現在の仕事の概要、得意分野やスキル、転職を考えている背景を簡潔に話せるように。長すぎず、相手が質問しやすい余白を残すのがコツ。"],
              ["STEP4", "聞きたい質問を5〜10個リスト化", "技術・チーム・働き方・キャリアの観点でバランスよく用意。優先順位をつけ、時間内に聞きたい順に並べておく。"],
              ["STEP5", "オンライン環境・服装を整える", "ネット回線・カメラ・マイク・背景・照明を事前テスト。服装はビジネスカジュアル。開始5分前には入室できる状態にしておく。"],
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

      {/* sec4 聞くべき質問・逆質問例 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">聞くべき質問・逆質問例</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              逆質問は単なる疑問解消だけでなく、<strong>「会社をよく調べている」「入社後を具体的にイメージしている」というアピール</strong>にもなります。エンジニアの転職では技術力に加えてヒューマンスキルやカルチャーフィットも見られるため、観点をバランスよく散らすのがコツです。下のカテゴリーから自分の関心に合わせて選びましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>技術・開発に関する質問</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・現在の技術スタックと、今後置き換えを検討している技術はありますか？</li>
                <li>・コードレビューやテスト、CI/CDはどのように運用されていますか？</li>
                <li>・技術的負債やレガシーコードへの向き合い方を教えてください。</li>
                <li>・新しい技術の導入は、現場の提案からどのくらい採用されますか？</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>チーム・カルチャーに関する質問</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・開発チームの構成（人数・役割・年齢層）を教えてください。</li>
                <li>・開発手法はスクラムですか？スプリントの進め方は？</li>
                <li>・エンジニアと他職種（PdM・デザイナー）の連携はどんな雰囲気ですか？</li>
                <li>・入社後、最初の3か月でどんな立ち上がりを期待されますか？</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>働き方・制度に関する質問</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・リモートワークの制度と、実際の利用率を教えてください。</li>
                <li>・フレックスの有無やコアタイム、平均残業時間はどのくらいですか？</li>
                <li>・繁忙期の働き方や、オンコール対応の有無は？</li>
                <li>・有給休暇の取得率はどのくらいですか？</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>キャリア・評価に関する質問</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・エンジニアの評価制度や、グレードの考え方を教えてください。</li>
                <li>・マネジメントとスペシャリスト、両方のキャリアパスはありますか？</li>
                <li>・社内で活躍されている方に共通する特徴はありますか？</li>
                <li>・スキルアップ支援（書籍・カンファレンス・学習時間）はありますか？</li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#7c3a55", borderWidth: "2px" }}>
            <h3 className="text-base font-bold mb-2" style={{ color: "#7c3a55" }}>印象に残る逆質問のフレーム</h3>
            <p className="text-sm text-text-light leading-relaxed">
              「（調べてわかった事実）＋（自分の解釈・感想）＋（質問）」の順で話すと、調べていることが伝わります。例：「技術ブログでマイクロサービス移行の記事を拝見しました。移行はかなり進んでいる印象でしたが、現場では今どんな課題に取り組まれていますか？」
            </p>
          </div>
        </div>
      </section>

      {/* sec5 NG行動 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">やってはいけないNG行動</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>「カジュアル」という言葉に油断すると、知らないうちに印象を下げていることがあります。次のNG行動は避けましょう。</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border p-5" style={{ borderColor: "#fecaca", backgroundColor: "#fef2f2" }}>
              <h3 className="font-bold mb-1" style={{ color: "#dc2626" }}>1. 求人票・HPに書いてあることを質問する</h3>
              <p className="text-sm text-text-light">「社員数は何名ですか」「どんな事業をされていますか」など、調べればわかることを聞くと準備不足とみなされます。</p>
            </div>
            <div className="rounded-xl border p-5" style={{ borderColor: "#fecaca", backgroundColor: "#fef2f2" }}>
              <h3 className="font-bold mb-1" style={{ color: "#dc2626" }}>2. 開口一番に年収・福利厚生の話ばかりする</h3>
              <p className="text-sm text-text-light">条件確認は大切ですが、最初から待遇の話に終始すると志望度が低い印象に。働き方への前向きな関心とセットで聞きましょう。</p>
            </div>
            <div className="rounded-xl border p-5" style={{ borderColor: "#fecaca", backgroundColor: "#fef2f2" }}>
              <h3 className="font-bold mb-1" style={{ color: "#dc2626" }}>3. ネガティブ・詰問口調の質問をする</h3>
              <p className="text-sm text-text-light">「競合に劣っている点は？」「離職率が高いと聞きましたが？」など攻撃的な聞き方は印象を損ねます。気になる点も柔らかく確認を。</p>
            </div>
            <div className="rounded-xl border p-5" style={{ borderColor: "#fecaca", backgroundColor: "#fef2f2" }}>
              <h3 className="font-bold mb-1" style={{ color: "#dc2626" }}>4. 「特に質問はありません」で終える</h3>
              <p className="text-sm text-text-light">質疑応答が中心の面談で質問ゼロは、関心がないサインに見えます。最低でも3〜5個は用意しておきましょう。</p>
            </div>
            <div className="rounded-xl border p-5" style={{ borderColor: "#fecaca", backgroundColor: "#fef2f2" }}>
              <h3 className="font-bold mb-1" style={{ color: "#dc2626" }}>5. 遅刻・ラフすぎる態度・環境の不備</h3>
              <p className="text-sm text-text-light">「カジュアル＝何でもあり」ではありません。遅刻、ヨレた部屋着、雑音だらけの環境、ながら参加はマイナス評価につながります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec6 面接選考に進むコツ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">面接選考に進むコツ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              カジュアル面談を「話を聞いて終わり」にせず、興味があるなら選考につなげましょう。企業は候補者の志望度が高いと感じると、次のステップを案内しやすくなります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>1. 自分から選考希望を伝える</h3>
              <p className="text-sm text-text-light">面談の終盤で「お話を伺ってより興味が湧きました。ぜひ選考に進みたいです」と意思表示を。受け身では話が進まないことも多いです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>2. 次の流れを確認する</h3>
              <p className="text-sm text-text-light">「選考に進む場合の流れを教えてください」「いつ頃ご連絡いただけますか」と聞いておくと、企業側も動きやすく、こちらも予定が立てられます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>3. 当日中〜翌日にお礼を送る</h3>
              <p className="text-sm text-text-light">面談で印象に残った点を一言添えてお礼メッセージを。志望度の高さが伝わり、後押しになります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>4. エージェント経由なら担当に共有</h3>
              <p className="text-sm text-text-light">面談直後に「志望度が上がった」と担当へ伝えると、推薦コメントを添えて企業に後押ししてもらえます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 女性が働き方を確認する活用法 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が働き方を確認する活用法</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              カジュアル面談は、女性エンジニアにとって<strong>求人票に出ない「働き方の実態」を確認できる貴重な場</strong>です。「フルリモート可」と書いてあっても、実際は都内在住者しかいない、入社1年は出社必須、といったギャップは珍しくありません。選考前のフラットな場だからこそ、ライフイベントとの両立に関わる点を早めに確認しておきましょう。
            </p>
            <p>
              ポイントは<strong>聞き方</strong>です。「長く働き続けたいので確認したい」という前向きな姿勢とセットで尋ねれば、印象を損ねることはありません。次のような質問が有効です。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>女性が確認しておきたい質問例</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>リモートワークは制度だけでなく、実際にどのくらいの方が利用していますか？地方在住でも可能ですか？</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>育休からの復帰実績や、時短勤務で活躍されているエンジニアの方はいらっしゃいますか？</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ライフイベント後も評価やキャリアアップの機会は変わらず得られますか？</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>女性エンジニアやマネージャーはどのくらいの比率ですか？</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>子どもの急な発熱などで中抜け・調整がしやすい雰囲気ですか？</span></li>
            </ul>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#efe3d8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong>補足：</strong>担当者の答え方や、現場エンジニアが同席するかどうかも判断材料になります。制度の数字をスラスラ答えられる、実際に時短や育休復帰の事例を具体的に語れる企業は、運用が根づいている可能性が高いです。逆に言葉を濁す場合は、入社後のギャップに注意。気になる詳細条件は、女性のキャリアに詳しいエージェント経由でも裏取りしておくと安心です。
            </p>
          </div>
        </div>
      </section>

      {/* sec-judge 面談後の見極め */}
      <section id="sec-judge" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">カジュアル面談後の見極め（進む／見送る）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              カジュアル面談は「受けて終わり」ではなく、<strong>その企業の選考に進むか、見送るかを判断するための材料集め</strong>でもあります。その場で結論を出す必要はありません。面談後に落ち着いて、次の4つの軸で振り返りましょう。合否のない面談だからこそ、候補者側が主体的に見極める姿勢が大切です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#7c3a55" }}>1. 働き方の実態は具体的だったか</h3>
              <p className="text-sm text-text-light leading-relaxed">リモート・時短・残業・繁忙期について、平均値や制度名だけでなく「実際どう運用されているか」を事例で語れたか。数字や具体例で答えられた企業は運用が根づいている可能性が高い。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#7c3a55" }}>2. チーム体制は持続可能か</h3>
              <p className="text-sm text-text-light leading-relaxed">属人化していないか、相談やレビューがしやすい雰囲気か、特定の人に負荷が偏っていないか。急な休みや時短でも回る体制かは、長く働くうえで重要なシグナル。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#7c3a55" }}>3. 成長・キャリアの機会があるか</h3>
              <p className="text-sm text-text-light leading-relaxed">任される役割や技術的なチャレンジ、評価・キャリアパスの考え方が自分の希望と合うか。ライフイベント後も評価やキャリアアップの機会が続くかも確認しておきたい。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#7c3a55" }}>4. 話していて相性が良かったか</h3>
              <p className="text-sm text-text-light leading-relaxed">担当者や現場の雰囲気に無理がなかったか、価値観が合いそうか。第一印象の違和感は入社後に効いてくることも多いので軽視しない。</p>
            </div>
          </div>

          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#c15f47", borderWidth: "2px" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>見送りを検討したい「注意サイン」</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">!</span><span>働き方や待遇の質問をはぐらかす・具体例を出せない</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">!</span><span>現場の課題を語れず、良い面しか話さない</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">!</span><span>質問に対する回答に一貫性がない・高圧的だった</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">!</span><span>「フルリモート可」等の記載と、面談で聞いた実態が食い違う</span></li>
            </ul>
          </div>

          <div className="rounded-xl p-5 mt-6" style={{ backgroundColor: "#efe3d8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong style={{ color: "#7c3a55" }}>進むと決めたら</strong>　選考に進む意思が固まったら、次は本選考の面接対策へ。逆質問はフェーズ（一次・最終）で作り分けると効果的なので、<a href="/articles/reverse-questions/" className="underline" style={{ color: "#7c3a55" }}>面接の逆質問 例文集</a>で準備を。内定後には条件をすり合わせる<a href="/articles/offer-meeting/" className="underline" style={{ color: "#7c3a55" }}>オファー面談（条件面談）</a>も控えています。どの企業・エージェントが自分に合うか整理したいときは、<a href="/diagnosis/" className="underline" style={{ color: "#7c3a55" }}>無料のエージェント診断</a>もあわせて活用してください。
            </p>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>カジュアル面談の調整や、面談で聞きにくい条件の裏取りは、エージェントを使うとスムーズです。IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーが、面談で確認すべき技術スタックや開発体制のポイントを事前に整理してくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと、面談後の選考への橋渡し・年収交渉力に定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。面談で聞きにくい育休復帰率や時短の実態を、担当者が代わりに確認してくれます。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
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
            <a href="/articles/interview-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>エンジニア面接対策ガイド</h3><p className="text-sm text-text-light">よく聞かれる質問と回答のコツ</p></a>
            <a href="/articles/technical-interview/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>技術面接の対策</h3><p className="text-sm text-text-light">コーディング・設計質問への備え方</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすい企業の選び方</h3><p className="text-sm text-text-light">制度と実態を見抜くチェックポイント</p></a>
            <a href="/articles/negotiation/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>年収・条件交渉のコツ</h3><p className="text-sm text-text-light">適正な条件を引き出す交渉術</p></a>
            <a href="/articles/reverse-questions/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>面接の逆質問 例文集</h3><p className="text-sm text-text-light">フェーズ別・好印象な逆質問とNG例</p></a>
            <a href="/articles/offer-meeting/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>オファー面談（条件面談）の進め方</h3><p className="text-sm text-text-light">内定後に条件をすり合わせるコツ</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。カジュアル面談の調整から条件の裏取りまでサポートしてもらえます。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
