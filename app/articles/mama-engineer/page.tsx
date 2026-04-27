import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ママエンジニアの転職・復職ガイド｜育児と仕事の両立方法",
  description:
    "ママエンジニアの転職・復職ガイド。育児と仕事の両立方法女性エンジニアの転職を成功させるための情報を徹底解説。おすすめの転職エージェントや成功事例も紹介します。",
  alternates: { canonical: "/articles/mama-engineer/" },
  openGraph: {
    title: "ママエンジニアの転職・復職ガイド｜育児と仕事の両立方法",
    description:
      "ママエンジニアの転職・復職ガイド。育児と仕事の両立方法女性エンジニアの転職を成功させるための情報を徹底解説。おすすめの転職エージェントや成功事例も紹介します。",
    url: "https://women-engineer-navi.pages.dev/articles/mama-engineer/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ママエンジニアの転職・復職ガイド｜育児と仕事の両立方法",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  author: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer-navi.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer-navi.pages.dev",
  },
  description:
    "ママエンジニアの転職・復職ガイド。育児と仕事の両立方法女性エンジニアの転職を成功させるための情報を徹底解説。おすすめの転職エージェントや成功事例も紹介します。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer-navi.pages.dev/articles/mama-engineer/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ママエンジニアが転職するベストなタイミングは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "子どもが保育園に入り預けられる環境が整ったタイミングがベスト。転職活動はその数ヶ月前から始めておくとスムーズです。産休育休中に情報収集やスキルアップに取り組む方も増えています。",
      },
    },
    {
      "@type": "Question",
      name: "時短勤務でもエンジニア転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、時短勤務可能なエンジニア求人は増えています。リモートワーク対応企業では柔軟な勤務形態を提供するケースが多く、時短＋リモートで効率的に働けます。エージェントに時短希望を伝えましょう。",
      },
    },
    {
      "@type": "Question",
      name: "ブランクがあっても転職は可能？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。IT業界は人材不足のためブランクがあっても実務経験者は歓迎されます。ブランク中に技術キャッチアップや個人開発を行い、アピールすることでマイナスイメージを軽減できます。",
      },
    },
    {
      "@type": "Question",
      name: "ママエンジニアにおすすめのエージェントは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "type女性の転職エージェントやリアルミーキャリアがおすすめ。育児中の女性の転職支援に特化したサポートが受けられます。リモートワーク求人が豊富なレバテックキャリアの併用も効果的です。",
      },
    },
    {
      "@type": "Question",
      name: "育児しながらスキルアップするには？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "子どもの昼寝時間や就寝後の1〜2時間を活用して、オンライン教材で学習するのが現実的です。Udemy、Progate、YouTube等の短時間で学べる教材を活用しましょう。週末にまとまった学習時間を確保することも大切です。",
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
          background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "ママエンジニアの転職・復職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              状況別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              ママエンジニアの転職・復職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                育児と仕事の両立方法を徹底解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月27日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}
          >
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li>
                <a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>
                  1. ママエンジニアの現状と課題
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>
                  2. 育児と仕事を両立するための働き方
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>
                  3. ママエンジニアが転職で重視すべきポイント
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>
                  4. リモートワーク・時短勤務の企業の探し方
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>
                  5. ブランクからの復帰方法
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>
                  6. 育児中のスキルアップ術
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>
                  7. 先輩ママエンジニアの1日のスケジュール
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>
                  8. おすすめ転職エージェント
                </a>
              </li>
              <li>
                <a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>
                  9. 転職成功事例
                </a>
              </li>
              <li>
                <a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>
                  10. よくある質問
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ママエンジニアの現状と課題</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>ママエンジニアの現状と課題について、女性エンジニアの視点から詳しく解説します。IT業界で活躍する女性エンジニアにとって、正確な情報と適切な戦略を持つことは、キャリアを成功させるための鍵となります。</p>
            <p>2026年現在、IT業界では女性エンジニアの活躍が急速に広がっています。ダイバーシティ推進の流れに加え、リモートワークの普及やフレックスタイム制度の充実により、女性がエンジニアとして長く活躍できる環境が整いつつあります。</p>
            <p>実際のデータを見ると、女性エンジニアの需要は年々高まっており、企業の採用意欲も強い状況が続いています。特にWeb系企業やSaaS企業では、女性エンジニアの比率を高めるための施策を積極的に行っています。</p>
            <p>ここでは、ママエンジニアの現状と課題に関する最新情報をもとに、女性エンジニアが知っておくべきポイントを具体的に解説していきます。転職エージェントの活用方法や実際の成功事例も交えながら、実践的なアドバイスをお伝えします。</p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>押さえておくべきポイント</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>ママエンジニアの現状と課題に関する最新の市場動向を把握する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>自分のスキルセットと市場価値を客観的に分析する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>複数の転職エージェントを活用して情報を集める</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>長期的なキャリアプランを見据えた判断をする</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>女性ならではの視点で企業の働きやすさを確認する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>先輩女性エンジニアの体験談から学ぶ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育児と仕事を両立するための働き方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>育児と仕事を両立するための働き方について、女性エンジニアの視点から詳しく解説します。IT業界で活躍する女性エンジニアにとって、正確な情報と適切な戦略を持つことは、キャリアを成功させるための鍵となります。</p>
            <p>2026年現在、IT業界では女性エンジニアの活躍が急速に広がっています。ダイバーシティ推進の流れに加え、リモートワークの普及やフレックスタイム制度の充実により、女性がエンジニアとして長く活躍できる環境が整いつつあります。</p>
            <p>実際のデータを見ると、女性エンジニアの需要は年々高まっており、企業の採用意欲も強い状況が続いています。特にWeb系企業やSaaS企業では、女性エンジニアの比率を高めるための施策を積極的に行っています。</p>
            <p>ここでは、育児と仕事を両立するための働き方に関する最新情報をもとに、女性エンジニアが知っておくべきポイントを具体的に解説していきます。転職エージェントの活用方法や実際の成功事例も交えながら、実践的なアドバイスをお伝えします。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>ポイント1</h3>
              <p className="text-text-light text-sm leading-relaxed">育児と仕事を両立するための働き方で最も重要なのは、自分の強みと市場ニーズをマッチさせることです。IT業界は技術の進歩が速いため、常にトレンドを意識しながらスキルをアップデートしましょう。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>ポイント2</h3>
              <p className="text-text-light text-sm leading-relaxed">女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度やリモートワークの可否も含めて評価しましょう。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>ポイント3</h3>
              <p className="text-text-light text-sm leading-relaxed">IT特化型と女性特化型のエージェントを併用することで、技術面と生活面の両方のニーズに合った求人を見つけやすくなります。複数登録が転職成功の秘訣です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>ポイント4</h3>
              <p className="text-text-light text-sm leading-relaxed">転職に成功した女性エンジニアの多くが「エージェントに相談して良かった」と語っています。市場価値を客観的に把握し、適正な年収で転職するためにプロのアドバイスを活用しましょう。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ママエンジニアが転職で重視すべきポイント</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>ママエンジニアが転職で重視すべきポイントについて、女性エンジニアの視点から詳しく解説します。IT業界で活躍する女性エンジニアにとって、正確な情報と適切な戦略を持つことは、キャリアを成功させるための鍵となります。</p>
            <p>2026年現在、IT業界では女性エンジニアの活躍が急速に広がっています。ダイバーシティ推進の流れに加え、リモートワークの普及やフレックスタイム制度の充実により、女性がエンジニアとして長く活躍できる環境が整いつつあります。</p>
            <p>実際のデータを見ると、女性エンジニアの需要は年々高まっており、企業の採用意欲も強い状況が続いています。特にWeb系企業やSaaS企業では、女性エンジニアの比率を高めるための施策を積極的に行っています。</p>
            <p>ここでは、ママエンジニアが転職で重視すべきポイントに関する最新情報をもとに、女性エンジニアが知っておくべきポイントを具体的に解説していきます。転職エージェントの活用方法や実際の成功事例も交えながら、実践的なアドバイスをお伝えします。</p>
          </div>
        </div>
      </section>

      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">リモートワーク・時短勤務の企業の探し方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>リモートワーク・時短勤務の企業の探し方について、女性エンジニアの視点から詳しく解説します。IT業界で活躍する女性エンジニアにとって、正確な情報と適切な戦略を持つことは、キャリアを成功させるための鍵となります。</p>
            <p>2026年現在、IT業界では女性エンジニアの活躍が急速に広がっています。ダイバーシティ推進の流れに加え、リモートワークの普及やフレックスタイム制度の充実により、女性がエンジニアとして長く活躍できる環境が整いつつあります。</p>
            <p>実際のデータを見ると、女性エンジニアの需要は年々高まっており、企業の採用意欲も強い状況が続いています。特にWeb系企業やSaaS企業では、女性エンジニアの比率を高めるための施策を積極的に行っています。</p>
            <p>ここでは、リモートワーク・時短勤務の企業の探し方に関する最新情報をもとに、女性エンジニアが知っておくべきポイントを具体的に解説していきます。転職エージェントの活用方法や実際の成功事例も交えながら、実践的なアドバイスをお伝えします。</p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>押さえておくべきポイント</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>リモートワーク・時短勤務の企業の探し方に関する最新の市場動向を把握する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>自分のスキルセットと市場価値を客観的に分析する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>複数の転職エージェントを活用して情報を集める</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>長期的なキャリアプランを見据えた判断をする</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>女性ならではの視点で企業の働きやすさを確認する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>先輩女性エンジニアの体験談から学ぶ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ブランクからの復帰方法</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>ブランクからの復帰方法について、女性エンジニアの視点から詳しく解説します。IT業界で活躍する女性エンジニアにとって、正確な情報と適切な戦略を持つことは、キャリアを成功させるための鍵となります。</p>
            <p>2026年現在、IT業界では女性エンジニアの活躍が急速に広がっています。ダイバーシティ推進の流れに加え、リモートワークの普及やフレックスタイム制度の充実により、女性がエンジニアとして長く活躍できる環境が整いつつあります。</p>
            <p>実際のデータを見ると、女性エンジニアの需要は年々高まっており、企業の採用意欲も強い状況が続いています。特にWeb系企業やSaaS企業では、女性エンジニアの比率を高めるための施策を積極的に行っています。</p>
            <p>ここでは、ブランクからの復帰方法に関する最新情報をもとに、女性エンジニアが知っておくべきポイントを具体的に解説していきます。転職エージェントの活用方法や実際の成功事例も交えながら、実践的なアドバイスをお伝えします。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>ポイント1</h3>
              <p className="text-text-light text-sm leading-relaxed">ブランクからの復帰方法で最も重要なのは、自分の強みと市場ニーズをマッチさせることです。IT業界は技術の進歩が速いため、常にトレンドを意識しながらスキルをアップデートしましょう。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>ポイント2</h3>
              <p className="text-text-light text-sm leading-relaxed">女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度やリモートワークの可否も含めて評価しましょう。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>ポイント3</h3>
              <p className="text-text-light text-sm leading-relaxed">IT特化型と女性特化型のエージェントを併用することで、技術面と生活面の両方のニーズに合った求人を見つけやすくなります。複数登録が転職成功の秘訣です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>ポイント4</h3>
              <p className="text-text-light text-sm leading-relaxed">転職に成功した女性エンジニアの多くが「エージェントに相談して良かった」と語っています。市場価値を客観的に把握し、適正な年収で転職するためにプロのアドバイスを活用しましょう。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育児中のスキルアップ術</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>育児中のスキルアップ術について、女性エンジニアの視点から詳しく解説します。IT業界で活躍する女性エンジニアにとって、正確な情報と適切な戦略を持つことは、キャリアを成功させるための鍵となります。</p>
            <p>2026年現在、IT業界では女性エンジニアの活躍が急速に広がっています。ダイバーシティ推進の流れに加え、リモートワークの普及やフレックスタイム制度の充実により、女性がエンジニアとして長く活躍できる環境が整いつつあります。</p>
            <p>実際のデータを見ると、女性エンジニアの需要は年々高まっており、企業の採用意欲も強い状況が続いています。特にWeb系企業やSaaS企業では、女性エンジニアの比率を高めるための施策を積極的に行っています。</p>
            <p>ここでは、育児中のスキルアップ術に関する最新情報をもとに、女性エンジニアが知っておくべきポイントを具体的に解説していきます。転職エージェントの活用方法や実際の成功事例も交えながら、実践的なアドバイスをお伝えします。</p>
          </div>
        </div>
      </section>

      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">先輩ママエンジニアの1日のスケジュール</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>先輩ママエンジニアの1日のスケジュールについて、女性エンジニアの視点から詳しく解説します。IT業界で活躍する女性エンジニアにとって、正確な情報と適切な戦略を持つことは、キャリアを成功させるための鍵となります。</p>
            <p>2026年現在、IT業界では女性エンジニアの活躍が急速に広がっています。ダイバーシティ推進の流れに加え、リモートワークの普及やフレックスタイム制度の充実により、女性がエンジニアとして長く活躍できる環境が整いつつあります。</p>
            <p>実際のデータを見ると、女性エンジニアの需要は年々高まっており、企業の採用意欲も強い状況が続いています。特にWeb系企業やSaaS企業では、女性エンジニアの比率を高めるための施策を積極的に行っています。</p>
            <p>ここでは、先輩ママエンジニアの1日のスケジュールに関する最新情報をもとに、女性エンジニアが知っておくべきポイントを具体的に解説していきます。転職エージェントの活用方法や実際の成功事例も交えながら、実践的なアドバイスをお伝えします。</p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>押さえておくべきポイント</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>先輩ママエンジニアの1日のスケジュールに関する最新の市場動向を把握する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>自分のスキルセットと市場価値を客観的に分析する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>複数の転職エージェントを活用して情報を集める</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>長期的なキャリアプランを見据えた判断をする</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>女性ならではの視点で企業の働きやすさを確認する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>先輩女性エンジニアの体験談から学ぶ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績。スピーディーなマッチングで最短2週間での内定実績も。年収交渉力にも定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>女性特化型</span>
              </div>
              <p className="text-sm text-text-light">女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT業界の転職支援に強み。未経験からベテランまで幅広い層の求人を保有。レスポンスの速さと手厚いサポートに定評があります。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>転職成功者Aさん（30代前半）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">中小IT企業のエンジニア / 年収400万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p>
                  <p className="text-sm font-bold">大手Web企業のシニアエンジニア / 年収580万円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">IT特化型エージェントを活用し、技術力を正当に評価してくれる企業に転職。年収180万円アップに加えフルリモート勤務が可能に。ワークライフバランスが大幅に改善し、「エージェントに相談して本当に良かった」と語っています。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>転職成功者Bさん（20代後半）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">SES企業のエンジニア / 年収350万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p>
                  <p className="text-sm font-bold">自社開発企業のエンジニア / 年収480万円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">女性特化型エージェントを利用し、産休育休制度が充実した自社開発企業に転職。年収130万円アップと働きやすい環境の両方を手に入れました。「女性の悩みに寄り添ったサポートが心強かった」とのこと。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ママエンジニアの転職で確認すべき5つの企業条件</h2>
          <div className="space-y-4">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>1. 時短勤務制度の有無と適用期間</h3>
              <p className="text-sm text-text-light">
                法律では3歳まで時短勤務が義務化されていますが、企業によっては小学校卒業まで延長できる制度を設けているところもあります。転職先を選ぶ際は、制度の有無だけでなく「何歳まで適用されるか」を必ず確認しましょう。エージェントを通じて内部情報を聞くのが確実です。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>2. フレックス・リモートワークの実態</h3>
              <p className="text-sm text-text-light">
                制度としてフレックスやリモートワークがあっても、実際にはほとんど利用されていない企業もあります。求人票の表記だけでなく、「実際のリモート率」「フレックスのコアタイム」「チーム内での利用状況」をエージェント経由で確認することが重要です。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>3. 産休育休の取得実績と復帰率</h3>
              <p className="text-sm text-text-light">
                産休育休制度があるだけでは不十分です。実際の取得率と、復帰後に元のポジションに戻れているかが重要なポイントです。復帰率が低い企業は、制度はあっても実態としてキャリアが断絶するリスクがあります。女性特化型エージェントなら、こうした内部情報にも詳しいです。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>4. 急な子供の病気時の対応</h3>
              <p className="text-sm text-text-light">
                子供の急な発熱や体調不良は避けられません。そんな時に在宅勤務への切り替えが柔軟にできるか、看護休暇が有給で取れるかは、ママエンジニアにとって最も重要な条件の一つです。面接では聞きにくい質問ですが、エージェントを通じて事前に確認しておきましょう。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>5. 女性管理職比率</h3>
              <p className="text-sm text-text-light">
                女性管理職の比率は、その企業でキャリアアップの天井（ガラスの天井）がないかを判断する重要な指標です。女性管理職が多い企業は、出産・育児を経てもキャリアを継続できる環境が整っている傾向があります。長期的なキャリアを考える上で必ずチェックしましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの年収ガイド</h3>
              <p className="text-sm text-text-light">平均年収と年収アップの方法</p>
            </a>
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>キャリアパス設計ガイド</h3>
              <p className="text-sm text-text-light">5年後・10年後のキャリア設計</p>
            </a>
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>リモートワーク求人ガイド</h3>
              <p className="text-sm text-text-light">在宅勤務のメリットと探し方</p>
            </a>
            <a href="/articles/how-to-choose/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>エージェント選び方ガイド</h3>
              <p className="text-sm text-text-light">失敗しない5つのポイント</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
