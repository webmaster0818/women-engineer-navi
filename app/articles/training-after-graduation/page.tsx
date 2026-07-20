import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性IT育成事業の修了後の転職活動ガイド｜進路とエージェント活用【2026年】",
  description:
    "東京都の女性ITエンジニア育成事業やデジタルカレッジなどを修了した女性向けの転職活動ガイド。修了直後にやること（成果物のポートフォリオ化・職務経歴書）、修了生の進路パターン（受託／自社開発／SES）を正直に整理し、未経験〜微経験の転職で定石となるエージェント併用の使い方まで解説します。",
  alternates: { canonical: "/articles/training-after-graduation/" },
  openGraph: {
    title: "女性IT育成事業の修了後の転職活動ガイド｜進路とエージェント活用【2026年】",
    description:
      "女性IT育成事業を修了した人向けの転職活動ガイド。修了直後にやること・進路パターン・エージェント活用を、未経験からの転職の実情に即して解説します。",
    url: "https://women-engineer.com/articles/training-after-graduation/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性IT育成事業の修了後の転職活動ガイド｜進路とエージェント活用【2026年】",
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
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
    "女性IT育成事業を修了した人向けの転職活動ガイド。修了直後にやること、修了生の進路パターン、エージェント活用を、未経験からの転職の実情に即して解説します。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/training-after-graduation/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "育成事業を修了したら必ずITエンジニアとして就職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "就職が保証される制度ではありません。多くの公的育成事業には、キャリアカウンセリング・書類作成サポート・面接対策・職業紹介といった就職支援が付きますが、最終的に内定を得るのは本人の転職活動次第です。事業の職業紹介だけに頼らず、IT特化型・女性特化型の転職エージェントを併用して求人の選択肢を広げると、訓練で得たスキルを活かせる企業に出会える確率が上がります。",
      },
    },
    {
      "@type": "Question",
      name: "修了直後にまずやるべきことは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2つあります。1つ目は、訓練の演習で作った成果物をポートフォリオとして見せられる形に整理すること。2つ目は、職務経歴書に「修了した訓練名・学習内容・作った成果物」を具体的に落とし込むことです。未経験採用では、6か月・約150時間の訓練を完走したこと自体が継続力の証明になります。書類の作り込みは初動で差がつくため、修了直後に着手するのがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "育成事業の修了生はどんな会社に進むことが多いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "受託開発（クライアントの案件を受けて開発する会社）、自社開発（自社サービスを持つ会社）、SES（客先常駐でシステム開発を支援する形態）などが主な進路です。未経験からの入口としてはSESや受託が多い傾向にありますが、どこが良い・悪いと一概には言えません。研修体制・任される業務・キャリアの積み上げ方は会社ごとに差が大きいため、形態だけで判断せず、個社の実態を確認することが大切です。各形態の違いはSES・自社開発の比較記事で解説しています。",
      },
    },
    {
      "@type": "Question",
      name: "転職エージェントは使ったほうがいいですか？事業の職業紹介だけでは足りませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "事業の職業紹介は心強い一方、扱う求人の範囲が限られることがあります。未経験〜微経験の転職では、複数の無料エージェントを併用して求人の選択肢を広げるのが定石です。IT特化型なら技術やキャリアパスの相談がしやすく、女性特化型なら産休育休・時短など働き方の条件で絞りやすくなります。事業の紹介＋エージェント2〜3社の併用で、比較できる求人を増やすのが現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験・微経験だと、転職活動はどれくらい大変ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "書類選考の通過率が経験者より低くなりやすいのは事実ですが、訓練修了という実績と、丁寧に作り込んだ成果物・職務経歴書があれば十分に戦えます。ポイントは、応募を1社ずつに絞らず、エージェントの力も借りて母数を確保すること、そして未経験・研修ありの求人を中心に狙うことです。焦って条件を妥協するより、複数の窓口から求人を集めて比較する姿勢が、結果的に納得のいく転職につながります。",
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
              { label: "育成事業 修了後の転職活動" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              修了後の転職ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性IT育成事業の修了後の転職活動ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                進路パターンとエージェント活用の進め方【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月21日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>先に結論：修了後の3つの要点</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>初動で差がつく</strong> — 修了直後は「成果物のポートフォリオ化」と「職務経歴書への落とし込み」を最優先。訓練を完走した実績を、見せられる形に整えます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>進路は形態で決めない</strong> — 受託・自社開発・SESなど進路はさまざま。形態だけでなく、研修体制と任される業務という個社の実態で判断します。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>エージェント併用が定石</strong> — 未経験〜微経験の転職は、事業の職業紹介＋無料エージェント2〜3社の併用で求人の選択肢を広げるのが現実的です。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 修了直後にやること（ポートフォリオ・職務経歴書）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 修了生の進路パターン（受託／自社／SES）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. エージェント活用が定石な理由</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. どのエージェントを併用するか</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 修了後の転職スケジュール例</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 修了直後にやること */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">修了直後にやること（ポートフォリオ・職務経歴書）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              <a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>東京都の女性ITエンジニア育成事業</a>や<a href="/articles/women-digital-college/" className="underline" style={{ color: "#7c3a55" }}>デジタルカレッジ</a>のような育成事業には、就職支援が一体で付くことが多いものの、内定を取るのは本人の転職活動です。修了の余韻が残るうちに、次の2つを最優先で進めます。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>1. 成果物を「見せられる形」にする</h3>
              <p className="text-sm text-text-light leading-relaxed">開発演習・構築演習で作ったものを、ポートフォリオとして整理します。何を作ったか・どんな技術を使ったか・工夫した点をまとめておくと、書類・面接でそのまま使えます。作り方の型は<a href="/articles/portfolio/" className="underline" style={{ color: "#7c3a55" }}>ポートフォリオの作り方ガイド</a>を参考にしてください。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>2. 職務経歴書に訓練実績を落とし込む</h3>
              <p className="text-sm text-text-light leading-relaxed">「◯◯（訓練名）を修了」「学習内容：△△」「成果物：□□」を具体的に書きます。未経験採用では、6か月・約150時間の訓練を完走したこと自体が継続力の証明です。書類の型は<a href="/articles/resume-guide/" className="underline" style={{ color: "#7c3a55" }}>職務経歴書の書き方ガイド</a>にまとめています。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            この2つは、応募先が決まる前でも進められます。むしろ<strong>求人を探し始める前に土台を作っておく</strong>ほうが、良い求人が出たときにすぐ動けます。訓練の試験対策で資格取得まで届いた人は、それも職務経歴書に加えると書類通過率が上がります。
          </p>
        </div>
      </section>

      {/* sec2 進路パターン */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">修了生の進路パターン（受託／自社／SES）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              未経験からの進路は一つではありません。代表的な受け皿を正直に整理します。どれが良い・悪いという単純な優劣はなく、<strong>研修体制・任される業務・キャリアの積み方は会社ごとに差が大きい</strong>点が最も重要です。形態のラベルだけで判断しないでください。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>受託開発</h3>
              <p className="text-sm text-text-light leading-relaxed">クライアントの案件を受けて開発する会社。幅広い技術・業界に触れられる一方、案件次第で忙しさに波が出ることもあります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>自社開発</h3>
              <p className="text-sm text-text-light leading-relaxed">自社サービスを持つ会社。プロダクトに腰を据えて関われますが、未経験からの採用枠は相対的に狭い傾向があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>SES（客先常駐）</h3>
              <p className="text-sm text-text-light leading-relaxed">客先に常駐して開発を支援する形態。未経験の入口として門戸が広い一方、配属先・任される業務の見極めが特に重要になります。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            それぞれの違いと見極め方は<a href="/articles/ses-vs-jisha/" className="underline" style={{ color: "#7c3a55" }}>SESと自社開発の比較記事</a>で詳しく解説しています。未経験からのキャリアの積み上げ方全体は<a href="/articles/career-path/" className="underline" style={{ color: "#7c3a55" }}>ITエンジニアのキャリアパス</a>もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* sec3 エージェント活用が定石な理由 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">エージェント活用が定石な理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              育成事業の職業紹介は心強い支援ですが、扱う求人の範囲には限りがあります。未経験〜微経験の転職では、<strong>事業の紹介に加えて、無料の転職エージェントを併用して求人の母数を確保する</strong>のが定石です。エージェントは無料で使えるため、併用のデメリットはほとんどありません。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>併用するメリット</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>未経験可・研修ありの求人まで比較できる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>書類添削・面接対策を複数の視点で受けられる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>産休育休・時短など働き方の条件で絞り込める</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>相性の良いアドバイザーに出会える確率が上がる</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>使うときの注意</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>まずは2〜3社に絞り、担当との相性を見る</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>訓練で学んだ領域・希望条件を最初に明確に伝える</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>紹介された求人は形態だけでなく実態を確認する</span></li>
              </ul>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            エージェントの選び方・併用の考え方は<a href="/articles/how-to-choose/" className="underline" style={{ color: "#7c3a55" }}>転職エージェントの選び方</a>、未経験からの転職全体の進め方は<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験からITエンジニアになる方法</a>で解説しています。
          </p>
        </div>
      </section>

      {/* sec4 どのエージェントを併用するか */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">どのエージェントを併用するか</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>訓練修了後は、未経験サポートに強いエージェントを軸にするのが現実的です。まずは各社の口コミ・特徴を見て、相性の良さそうな2〜3社に登録しましょう。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">ワークポート</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>未経験サポート</span></div>
              <p className="text-sm text-text-light">IT・Web業界に強く、未経験者向けの求人紹介やサポートに定評があります。訓練修了後に「未経験・研修ありの求人を幅広く見たい」人の軸になりやすいエージェントです。</p>
              <p className="text-sm mt-3"><a href="/reviews/workport/" className="underline font-bold" style={{ color: "#7c3a55" }}>ワークポートの口コミ・評判を見る →</a></p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">テックゴー</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>無料キャリア面談</span></div>
              <p className="text-sm text-text-light">運営は株式会社MyVision。無料のキャリア面談で、修了後の進路や求人の方向性を第三者と整理できます。「どの形態・どの領域を狙うべきか」を相談したい人に向いています。</p>
              <p className="text-sm mt-3"><a href="/reviews/techgo/" className="underline font-bold" style={{ color: "#7c3a55" }}>テックゴーの口コミ・評判を見る →</a></p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">自分に合うエージェントを診断で確認</p>
            <p className="text-sm text-text-light mb-4">経験段階・重視するサポート・働き方などの質問に答えると、相性の目安になるエージェントが分かります（無料・登録不要）。</p>
            <a href="/diagnosis/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>エージェント診断を受けてみる</a>
          </div>
        </div>
      </section>

      {/* sec5 スケジュール例 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">修了後の転職スケジュール例</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>あくまで一例ですが、修了前後から動き始めると流れがスムーズです。実際のペースは各自の状況に合わせて調整してください。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "修了前後：土台づくり", "成果物のポートフォリオ化と職務経歴書の作成を進める。訓練の就職支援（キャリアカウンセリング・書類添削）も活用する。"],
              ["STEP2", "修了直後：窓口を増やす", "事業の職業紹介に加えて、未経験サポートに強いエージェント2〜3社に登録。訓練で学んだ領域と希望条件を明確に伝える。"],
              ["STEP3", "応募・選考：母数を確保", "未経験可・研修ありの求人を中心に、複数社へ応募。書類・面接のフィードバックを受けて改善しながら進める。"],
              ["STEP4", "内定・比較：実態で選ぶ", "複数の選択肢を、形態のラベルでなく研修体制・任される業務・働き方で比較して決める。迷ったらアドバイザーに相談。"],
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
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            進路選びに迷ったときは、<a href="/articles/learn-vs-transfer/" className="underline" style={{ color: "#7c3a55" }}>先に学ぶ vs 転職して実務で学ぶ</a>の比較も参考になります。もし修了ではなく選考に落ちた・受けられなかった場合は<a href="/articles/training-not-selected/" className="underline" style={{ color: "#7c3a55" }}>育成事業に落ちたら？代替ルートと研修付き転職</a>をご覧ください。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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
            <a href="/articles/tokyo-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都の女性ITエンジニア育成事業とは</h3><p className="text-sm text-text-light">内容・費用・申込方法と募集状況</p></a>
            <a href="/articles/training-not-selected/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性IT育成事業に落ちたら？</h3><p className="text-sm text-text-light">無料の代替ルートと研修付き転職</p></a>
            <a href="/articles/learn-vs-transfer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>先に学ぶ vs 転職して実務で学ぶ</h3><p className="text-sm text-text-light">2ルートの向き不向き・費用と時間の比較</p></a>
            <a href="/articles/portfolio/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ポートフォリオの作り方</h3><p className="text-sm text-text-light">成果物を評価される形に整える</p></a>
            <a href="/articles/resume-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>職務経歴書の書き方</h3><p className="text-sm text-text-light">訓練実績を書類に落とし込む</p></a>
            <a href="/articles/ses-vs-jisha/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>SESと自社開発の違い</h3><p className="text-sm text-text-light">進路の見極め方</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">修了した学びを、転職につなげましょう</h2>
            <p className="text-white/90 mb-6">事業の職業紹介＋無料エージェントの併用で、求人の選択肢を広げましょう。まずは相性の良いエージェントを探すところから。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
