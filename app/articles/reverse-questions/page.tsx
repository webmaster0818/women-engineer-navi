import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "エンジニア面接の逆質問 例文集｜好印象・NG例・フェーズ別の聞き方ガイド",
  description:
    "エンジニア転職の面接で使える逆質問の例文を、技術・チーム・評価・働き方のカテゴリ別、一次/最終/役員のフェーズ別で網羅。NG逆質問や、女性が産休育休・リモートを角を立てずに確認する聞き方、準備法まで実例豊富に解説します。",
  alternates: { canonical: "/articles/reverse-questions/" },
  openGraph: {
    title: "エンジニア面接の逆質問 例文集｜好印象・NG例・フェーズ別の聞き方ガイド",
    description:
      "エンジニア転職の面接で評価される逆質問の例文を、カテゴリ別・フェーズ別で網羅。NG例や女性がキャリア継続を確認する聞き方、準備法まで実例豊富に解説。",
    url: "https://women-engineer.com/articles/reverse-questions/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "エンジニア面接の逆質問 例文集｜好印象・NG例・フェーズ別の聞き方ガイド",
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
    "エンジニア転職の面接で評価される逆質問の例文を、カテゴリ別・フェーズ別で網羅。NG例や女性がキャリア継続を確認する聞き方、準備法まで実例豊富に解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/reverse-questions/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "エンジニア面接の逆質問は何個くらい用意すればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "実際に聞くのは2〜3問が目安ですが、用意は5〜7問しておくと安心です。面接の会話の中で答えが出てしまう質問もあるため、技術・チーム・評価・働き方など複数カテゴリから幅広く準備しておくと、状況に応じて差し替えられます。フェーズ（一次・最終・役員）によって相手が答えやすいテーマも変わるので、それぞれ向けに数問ずつストックしておくのが理想です。逆質問は『何かありますか？』と聞かれて沈黙するのが最もマイナスなので、最低でも各面接3問は準備しておきましょう。",
      },
    },
    {
      "@type": "Question",
      name: "逆質問で給与や残業・産休育休のことを聞くと印象が悪くなりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "聞き方次第です。給与・残業・休暇など待遇面ばかりを並べると『業務への関心が薄い』と見られがちですが、これらは入社後のミスマッチを防ぐ大切な情報でもあります。コツは、まず技術や業務への関心を示す質問を先に出し、その後に『長く貢献したいので確認させてください』と前置きしてから働き方を尋ねること。さらに『差し支えなければ』『可能であれば』といったクッション言葉を添えると、配慮が伝わり角が立ちません。産休育休やリモートも、待遇要求ではなく『長期就業の意欲』の文脈で聞けばマイナスにはなりません。",
      },
    },
    {
      "@type": "Question",
      name: "技術面接（一次）と役員・最終面接で逆質問は変えるべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "変えるべきです。相手の立場によって答えられる範囲が違うためです。現場のエンジニアや技術面接官には、技術スタック・開発体制・CI/CD・コードレビュー・オンボーディングなど具体的で実務的な質問が刺さります。最終・役員面接では、相手は経営や事業全体を見ているため、事業の方向性・今後注力する領域・組織が目指す姿・エンジニア組織への投資方針といった抽象度の高い質問が適切です。同じ質問を全フェーズで使い回すと『相手を見ていない』印象になるので、面接官の役割に合わせて質問のレイヤーを上げていきましょう。",
      },
    },
    {
      "@type": "Question",
      name: "女性として、ライフイベントとの両立を面接で確認しても大丈夫ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "問題ありません。むしろ入社後のギャップを防ぐために確認しておくべき項目です。ポイントは『辞めないか不安』ではなく『長く働きたいから知りたい』という前向きな姿勢で聞くこと。たとえば『長期的に技術者として貢献したいと考えています。産休育休からの復帰実績や、時短勤務で活躍されている方の事例があれば伺えますか』のように、貢献意欲とセットで質問すると好印象です。実績の数字や復帰後のポジション、リモートの運用実態などは、面接で聞きにくければ女性のキャリアに詳しい転職エージェント経由で確認するのも有効です。",
      },
    },
    {
      "@type": "Question",
      name: "逆質問が思いつかないときや、聞きたいことがもうない場合はどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "『特にありません』はできるだけ避けましょう。面接での会話を踏まえて『先ほど伺った◯◯について、もう少し詳しく教えていただけますか』と深掘りするのが自然で好印象です。それも難しい場合は、入社後を見据えた質問が無難で評価されやすいです。たとえば『入社までに勉強しておくと役立つ技術や領域はありますか』『活躍されている方に共通する特徴はありますか』など。これらは意欲が伝わるうえ、どの企業・どのフェーズでも使える汎用ストックになるので、最後の一手として常に1つ持っておくと安心です。",
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
              { label: "面接の逆質問ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              選考対策ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              エンジニア面接の逆質問 例文集
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                好印象な質問・NG例・フェーズ別の聞き方を実例で解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. 逆質問とは？なぜ合否を左右するのか</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 好印象な逆質問例（カテゴリ別）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. フェーズ別の逆質問（一次・最終・役員）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. やってはいけないNG逆質問</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 女性がキャリア継続を角を立てず確認する聞き方</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 逆質問の準備法（5STEP）</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 終わり方・締めのひと言</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 逆質問とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">逆質問とは？なぜ合否を左右するのか</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              逆質問とは、面接の終盤に面接官から「何か質問はありますか？」と聞かれたときに、応募者側から投げかける質問のことです。一見おまけのようですが、エンジニア面接ではここが評価の対象になっており、答え方次第で印象が大きく変わります。実際、ほぼすべての面接で聞かれるパートでありながら、「特にありません」で終えてしまう人も多く、ここで差がつきます。
            </p>
            <p>
              面接官が逆質問を通して見ているのは、主に「志望度の高さ」「業務・技術への理解と意欲」「自社とのカルチャーフィット」「一緒に働くイメージが持てるか」の4点です。良い逆質問は、それ自体が「この人はうちの開発をちゃんとイメージできている」という自己PRになります。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>面接官が逆質問で評価している4つのこと</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span><strong>志望度</strong>：本気で入社を考えているか。調べ込んだうえでの質問か</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span><strong>業務・技術理解</strong>：開発の実態を具体的にイメージできているか</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span><strong>カルチャーフィット</strong>：チームの価値観や働き方に合いそうか</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span><strong>就業の継続性</strong>：長く働く意思があるか、入社後に活躍する姿が描けるか</span></li>
            </ul>
          </div>
          <div className="rounded-xl p-5 mt-6" style={{ backgroundColor: "#ecfeff" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong style={{ color: "#0891b2" }}>POINT</strong>　逆質問は「企業を審査する」だけの場ではありません。質問内容を通じて「あなたがどんなエンジニアか」を伝える、最後の自己PRの時間だと考えると質が上がります。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 好印象な逆質問例（カテゴリ別） */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">好印象な逆質問例（カテゴリ別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              評価される逆質問は、「技術」「チーム」「評価・成長」「働き方」「女性のキャリア継続」のテーマに分けて準備すると整理しやすくなります。以下、それぞれそのまま使える例文を挙げます。会話の流れに合わせて言葉を足し引きして使ってください。
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-4"><h3 className="text-lg font-bold" style={{ color: "#0891b2" }}>① 技術・開発体制について</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>意欲が伝わる</span></div>
              <ul className="space-y-3 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5">▶</span><span>「現在のメインの技術スタックと、今後の技術選定の方針について教えていただけますか？」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5">▶</span><span>「コードレビューやテストはどのような運用になっていますか？」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5">▶</span><span>「CI/CDや開発環境の自動化はどの程度進んでいますか？」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5">▶</span><span>「技術的負債に対して、チームではどのように向き合っていますか？」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5">▶</span><span>「新しい技術の導入は、どのような流れで意思決定されていますか？」</span></li>
              </ul>
              <p className="text-xs text-text-light mt-4 leading-relaxed">技術的負債や品質への質問は「長期目線で良いものを作りたい人」という印象につながり、評価されやすいテーマです。</p>
            </div>

            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-4"><h3 className="text-lg font-bold" style={{ color: "#7c3aed" }}>② チーム・働き方の実態について</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>カルチャー確認</span></div>
              <ul className="space-y-3 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-0.5">▶</span><span>「配属予定チームの構成（人数・役割）や、1日の業務の流れを教えていただけますか？」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-0.5">▶</span><span>「チーム内でのコミュニケーションは、どのようなツールや頻度で行われていますか？」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-0.5">▶</span><span>「入社後のオンボーディングや、キャッチアップの体制について伺えますか？」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-0.5">▶</span><span>「開発はチームでの協業が中心ですか、それとも個人で完結する形が多いですか？」</span></li>
              </ul>
            </div>

            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-4"><h3 className="text-lg font-bold" style={{ color: "#0891b2" }}>③ 評価制度・成長について</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>成長意欲</span></div>
              <ul className="space-y-3 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5">▶</span><span>「エンジニアの評価は、どのような基準・サイクルで行われていますか？」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5">▶</span><span>「技術を深める道と、マネジメントに進む道、両方のキャリアパスは用意されていますか？」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5">▶</span><span>「活躍されているエンジニアの方に共通する特徴があれば教えてください。」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5">▶</span><span>「勉強会や書籍・カンファレンス参加など、学習を支援する制度はありますか？」</span></li>
              </ul>
            </div>

            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-4"><h3 className="text-lg font-bold" style={{ color: "#7c3aed" }}>④ 入社後を見据えた質問（汎用ストック）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>どこでも使える</span></div>
              <ul className="space-y-3 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-0.5">▶</span><span>「入社までに勉強しておくと役立つ技術や領域があれば教えてください。」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-0.5">▶</span><span>「入社後、最初の3か月で期待される役割やゴールはどのようなものですか？」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-0.5">▶</span><span>「先ほど伺った◯◯について、もう少し具体的にお聞きしてもよろしいですか？」</span></li>
              </ul>
              <p className="text-xs text-text-light mt-4 leading-relaxed">これらは意欲が伝わり、どの企業・どのフェーズでも使える便利な質問です。「思いつかない時の最後の一手」として常に1つ持っておきましょう。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 フェーズ別 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">フェーズ別の逆質問（一次・最終・役員）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              面接が進むほど、相手の立場と「答えられる範囲」が変わります。現場のエンジニアには具体的・実務的に、役員には経営や事業の視点で——というように、<strong>段階が上がるほど質問の抽象度を上げる</strong>のが鉄則です。同じ質問を全フェーズで使い回すと「相手を見ていない」印象になります。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>フェーズ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>主な相手</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>聞くべきテーマ</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>一次（人事・現場）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>人事・現場エンジニア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>技術スタック・開発体制・チーム構成・1日の業務の流れなど具体的な実務</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>二次（マネージャー）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>開発リーダー・部門長</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>評価制度・キャリアパス・チームの目標・育成方針</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>最終・役員</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>役員・社長・CTO</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>事業の方向性・組織が目指す姿・今後注力する領域・長期就業のビジョン</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-6 md:grid-cols-1 mt-8">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>一次面接（人事・現場）で使える例</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・「配属予定のチームでは、どんな技術スタックで開発されていますか？」</li>
                <li>・「入社後のオンボーディングはどのような流れになっていますか？」</li>
                <li>・「現場で今いちばん課題に感じている開発テーマは何でしょうか？」</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>二次面接（マネージャー）で使える例</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・「エンジニアの評価はどのような観点で行われ、どう昇給・昇格に反映されますか？」</li>
                <li>・「チームとして、これから半年〜1年で達成したい目標は何ですか？」</li>
                <li>・「メンバーの成長のために、マネージャーとして意識されていることはありますか？」</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>最終・役員面接で使える例</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・「今後3〜5年で、エンジニア組織をどのような姿にしていきたいとお考えですか？」</li>
                <li>・「事業として、これから最も注力していきたい領域はどこでしょうか？」</li>
                <li>・「長く技術者として貢献したいと考えています。御社で長く活躍されている方の共通点があれば伺えますか？」</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 NG逆質問 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">やってはいけないNG逆質問</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              良かれと思った質問が、逆に印象を下げてしまうこともあります。NGになりやすいのは次の4タイプ。「聞きたいこと」より先に「これは避けるべきか」をチェックしておきましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-base font-bold mb-3" style={{ color: "#f97066" }}>✕ 調べればわかる質問</h3>
              <p className="text-sm text-text-light leading-relaxed mb-2">求人票や採用サイトに載っている内容を聞くと「事前に調べていない＝志望度が低い」と見られます。</p>
              <p className="text-xs text-text-light">NG例：「事業内容を教えてください」「設立は何年ですか？」</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-base font-bold mb-3" style={{ color: "#f97066" }}>✕ 待遇・休みばかりの質問</h3>
              <p className="text-sm text-text-light leading-relaxed mb-2">残業・有給・給与だけを並べると「業務以外にしか関心がない」印象に。聞くなら業務系の質問の後に、文脈を添えて。</p>
              <p className="text-xs text-text-light">NG例：「残業は多いですか？」「有給は取りやすいですか？」を真っ先に聞く</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-base font-bold mb-3" style={{ color: "#f97066" }}>✕ すでに話に出た内容の質問</h3>
              <p className="text-sm text-text-light leading-relaxed mb-2">面接中に説明済みのことを聞くと「話を聞いていなかった」と受け取られます。会話のメモを取り、深掘りに切り替えましょう。</p>
              <p className="text-xs text-text-light">対策：「先ほどの◯◯について、さらに伺うと…」と接続する</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-base font-bold mb-3" style={{ color: "#f97066" }}>✕ 相手が答えにくい・失礼な質問</h3>
              <p className="text-sm text-text-light leading-relaxed mb-2">他社批判や、相手の役職で答えられないことを聞くのは逆効果。役員に現場の細かい運用を聞くなどはミスマッチです。</p>
              <p className="text-xs text-text-light">NG例：「競合のA社と比べて劣っている点は？」</p>
            </div>
          </div>
          <div className="rounded-xl p-5 mt-6 bg-white border" style={{ borderColor: "#f97066" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong style={{ color: "#f97066" }}>最大のNGは「特にありません」</strong>　質問ゼロは志望度が低いと見なされる最も避けたいパターンです。どうしても出ない時は、入社後を見据えた汎用質問（②章④）を1つ用意しておきましょう。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 女性がキャリア継続を確認する聞き方 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がキャリア継続を角を立てず確認する聞き方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              産休育休・時短・リモートなど、長く働くうえで欠かせない情報は、入社後のミスマッチを防ぐためにも確認しておきたいところです。大切なのは聞く<strong>順番</strong>と<strong>前置き</strong>。「辞めないか不安だから」ではなく「長く貢献したいから知りたい」という姿勢で、技術・業務の質問を済ませた後に切り出すのがコツです。
            </p>
          </div>

          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>角を立てない3つのコツ</h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">1.</span><span><strong>貢献意欲とセットにする</strong>：「長く技術者として貢献したいので」を前置きに添える</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">2.</span><span><strong>クッション言葉を使う</strong>：「差し支えなければ」「可能であれば」で配慮を伝える</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">3.</span><span><strong>制度より実績を聞く</strong>：「制度はありますか」ではなく「取得・活躍の事例」を尋ねると実態がわかる</span></li>
            </ul>
          </div>

          <div className="space-y-5 mt-8">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-base font-bold mb-3" style={{ color: "#7c3aed" }}>産休・育休からの復帰について</h3>
              <p className="text-sm text-text-light leading-relaxed">「長期的に技術者として貢献したいと考えています。<strong>差し支えなければ</strong>、産休・育休から復帰されて活躍されている方の事例や、復帰率について伺えますか？」</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-base font-bold mb-3" style={{ color: "#7c3aed" }}>時短勤務・両立について</h3>
              <p className="text-sm text-text-light leading-relaxed">「将来的にライフイベントを迎えても長く開発を続けたいと考えています。時短勤務をされながら活躍されているエンジニアの方は、どのような働き方をされていますか？」</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-base font-bold mb-3" style={{ color: "#7c3aed" }}>リモート・フレックスの実態について</h3>
              <p className="text-sm text-text-light leading-relaxed">「腰を据えて成果で貢献していきたいと考えています。<strong>可能であれば</strong>、リモートやフレックスが実際にどの程度活用されているか、運用の実態を教えていただけますか？」</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-base font-bold mb-3" style={{ color: "#7c3aed" }}>女性エンジニアの活躍・ロールモデルについて</h3>
              <p className="text-sm text-text-light leading-relaxed">「長くキャリアを築きたいと考えています。御社で長く活躍されている女性エンジニアの方や、ロールモデルとなる方はいらっしゃいますか？」</p>
            </div>
          </div>

          <div className="rounded-xl p-5 mt-6" style={{ backgroundColor: "#ecfeff" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong style={{ color: "#0891b2" }}>面接で聞きにくいときは</strong>　復帰率の数字や女性管理職比率、リモートの本当の運用実態など、本人には聞きづらい情報は、女性のキャリアに詳しい転職エージェント経由で確認するのが確実です。求人票に出ない実態を代わりに引き出してもらえます。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 準備法 STEP */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">逆質問の準備法（5STEP）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>実際に聞くのは2〜3問でも、用意は<strong>5〜7問</strong>。会話の中で答えが出てしまっても差し替えられるよう、複数カテゴリ・複数フェーズ分をストックしておくと安心です。次の順序で準備しましょう。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "企業研究で「調べてわかること」を潰す", "採用サイト・求人票・技術ブログ・登壇資料に目を通し、調べればわかる質問は除外。そのうえで『もっと知りたくなった点』を質問の種にします。"],
              ["STEP2", "カテゴリ別に質問をリストアップ", "技術／チーム／評価・成長／働き方／キャリア継続の5テーマから、各1〜2問ずつ書き出します。偏りがなくなり、状況に応じて選べます。"],
              ["STEP3", "フェーズ別に振り分ける", "現場には具体的な実務、役員には事業・組織の視点——と、どの面接で誰に聞くかを割り当て。抽象度を相手に合わせます。"],
              ["STEP4", "『なぜ聞くのか』を添える形にする", "質問に意図（貢献意欲・長期就業など）を添えると、ただの確認が自己PRに変わります。待遇系はクッション言葉も準備。"],
              ["STEP5", "面接中はメモを取り、深掘りに備える", "会話で出た話題は最良の質問の素。『先ほどの◯◯について』と深掘りできるよう、聞きながらキーワードをメモします。"],
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

      {/* sec7 終わり方 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">終わり方・締めのひと言</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              逆質問は終わり方でも印象が変わります。質問が一通り済んだら、回答へのお礼と入社意欲を簡潔に添えて締めると、好印象のまま面接を終えられます。だらだら質問を続けるより、潔く感謝で締めるほうがスマートです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#0891b2" }}>質問がもう無いとき</h3>
              <p className="text-sm text-text-light leading-relaxed">「丁寧にお答えいただきありがとうございました。疑問に思っていた点がクリアになり、より一層入社したいという気持ちが強まりました。」</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#7c3aed" }}>意欲を添えて締めるとき</h3>
              <p className="text-sm text-text-light leading-relaxed">「お話を伺い、◯◯の領域で自分の経験を活かして貢献できそうだと感じました。本日はありがとうございました。」</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>逆質問の精度を上げるには、その企業の開発体制や女性の働き方の実態を事前に知っておくことが近道です。IT特化型と女性特化型のエージェントを併用すると、面接で聞きにくい情報も補えます。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し、企業の技術スタックや開発体制に精通したアドバイザーが在籍。逆質問のネタになる「現場のリアル」を事前に共有してくれるため、面接対策に強みがあります。女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、面接ごとの傾向や過去の質問例の情報が豊富。フェーズ別にどんな逆質問が刺さるかまで踏み込んだアドバイスがもらえ、年収交渉力にも定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休の取得・復帰実績やリモートの運用実態など、面接で聞きにくい情報を代わりに確認してくれます。女性のキャリア継続に配慮した求人を中心に、安心して長く働ける企業を絞り込めます。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <p className="font-bold text-lg mb-2">面接対策はエージェント活用が近道</p>
            <p className="text-sm text-text-light mb-4">複数登録して、逆質問のネタになる企業情報を集めましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066" }}>おすすめエージェントランキングを見る</a>
          </div>
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
            <a href="/articles/interview-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>エンジニア転職の面接対策ガイド</h3><p className="text-sm text-text-light">よく聞かれる質問と答え方の基本</p></a>
            <a href="/articles/casual-interview/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>カジュアル面談の進め方</h3><p className="text-sm text-text-light">選考前の情報収集で差をつける</p></a>
            <a href="/articles/technical-interview/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>技術面接の対策ガイド</h3><p className="text-sm text-text-light">技術質問への備え方を解説</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性が働きやすいIT企業の選び方</h3><p className="text-sm text-text-light">長く働ける会社を見極める</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。面接対策から逆質問の準備まで、あなたに合ったサポートを受けられます。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
