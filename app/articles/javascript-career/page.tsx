import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "JavaScriptで女性エンジニア転職｜年収・需要・TypeScript時代の学び方【2026年】",
  description:
    "JavaScriptで転職したい女性エンジニア向けの決定版ガイド。求人ニーズ1位（paiza調査14.4%）の実データ、経験年数別年収（300万〜800万円超）、TypeScript併用での市場価値差、React/Vue/Next.jsのフレームワーク需要、未経験からの学習ロードマップまで出典付きで解説します。",
  alternates: { canonical: "/articles/javascript-career/" },
  openGraph: {
    title: "JavaScriptで女性エンジニア転職｜年収・需要・TypeScript時代の学び方【2026年】",
    description:
      "JavaScript転職の年収・求人数・TypeScriptとの市場価値差・フレームワーク需要・学習ロードマップを実データと出典付きで解説。",
    url: "https://women-engineer.com/articles/javascript-career/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "JavaScriptで女性エンジニア転職｜年収・需要・TypeScript時代の学び方【2026年】",
  datePublished: "2026-04-28",
  dateModified: "2026-06-12",
  author: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  description:
    "JavaScript転職の年収・求人数・TypeScriptとの市場価値差・フレームワーク需要・学習ロードマップを実データと出典付きで解説。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/articles/javascript-career/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "JavaScriptだけで転職できますか？TypeScriptは必須ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JavaScriptだけでも転職は可能です。paizaの「プログラミング言語に関する調査（2025年）」では、企業の求人ニーズが最も高い言語はJavaScript（14.4%）で、未経験可・JS中心の求人も一定数あります。ただし市場はTypeScript併用へ急速に移行しており、State of JavaScript 2025調査ではコードをTypeScriptのみで書く開発者が40%（2022年は28%）に達しています。入口はJavaScriptで問題ありませんが、転職活動と並行してTypeScriptの基礎（型注釈・interface・ジェネリクス）まで学んでおくと、応募できる求人数と提示年収の両方が大きく変わります。",
      },
    },
    {
      "@type": "Question",
      name: "JavaScriptエンジニアの年収はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "正社員のJavaScriptエンジニアの平均年収は450万〜500万円が目安です。経験別では未経験・初年度300万〜350万円、1〜2年で350万〜450万円、3〜5年（TypeScript＋フレームワーク習得）で450万〜600万円、6年以上のフルスタック・リーダー級で600万〜800万円以上が相場とされます。フリーランスではフリーランスボードの調査（2026年3月）でJavaScript案件の平均月額単価72.7万円・年収換算873万円というデータがあり、経験を積んでから独立する道も現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験からJavaScriptエンジニアになるにはどれくらいかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1日2〜3時間の学習で6ヶ月〜1年が目安です。HTML/CSSとJavaScriptの基礎（1〜2ヶ月）→ DOM操作と非同期処理（1〜2ヶ月）→ TypeScriptの基礎（1ヶ月）→ Reactなどのフレームワークでのアプリ開発（2〜3ヶ月）→ ポートフォリオ作成と転職活動（1〜3ヶ月）という順序が王道です。JavaScriptはブラウザだけで動かせて学習開始のハードルが低く、教材・コミュニティも豊富なため、未経験の女性が最初に選ぶ言語として適しています。",
      },
    },
    {
      "@type": "Question",
      name: "ReactとVue.js、どちらを学ぶべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "迷ったらReactがおすすめです。フリーランスボードのJavaScript案件調査（2026年3月）では、フレームワーク別案件数はReactが25,102件でVue.jsの10,185件の約2.5倍。State of JavaScript 2025でもReactの使用率は83.6%と最多で、Next.jsも59%が使用しています。求人の母数が多いほど「リモート可」「時短可」など働き方の条件で絞り込める余地が大きくなるため、女性のキャリア戦略としてもReactが有利です。一方Vue.jsは日本の中小・BtoB企業で根強い需要があり、すでにVueの現場にいる場合は深めてから横展開する形でも問題ありません。",
      },
    },
    {
      "@type": "Question",
      name: "JavaScriptの仕事はリモートワークや育児と両立しやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "両立しやすい部類です。フリーランスボードの調査（2026年3月）では、JavaScript案件のリモート比率は84.5%（フルリモート27.4%・一部リモート57.1%）と高水準でした。Web開発はPCとネット環境があれば場所を選ばないため、正社員求人でもリモート可・フレックスの割合が高めです。産休・育休後の復帰やお迎えとの両立を重視するなら、求人数の多いJavaScript系職種は条件交渉の選択肢が広く、女性が長くキャリアを続けやすい領域と言えます。",
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
    { "@type": "ListItem", position: 3, name: "JavaScriptキャリアガイド", item: "https://women-engineer.com/articles/javascript-career/" },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "JavaScriptキャリアガイド" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>言語別ガイド</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              JavaScriptで女性エンジニア転職
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">年収・需要・TypeScript時代の学び方【2026年】</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
              結論：JavaScriptは求人ニーズ国内1位。ただし伸ばすなら「JS＋TypeScript」
            </h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>paizaの調査では、企業の求人ニーズが最も高い言語は<strong>JavaScript（14.4%）</strong>。2位Java（13.9%）・3位PHP（11.0%）を上回り、未経験の入口としても求人の裾野が最大級</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>正社員の平均年収は<strong>450万〜500万円</strong>が目安。フリーランスのJavaScript案件は<strong>平均月額単価72.7万円（年収換算873万円）</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>市場はTypeScript併用へ移行中。TypeScriptの平均提示年収は<strong>714万円（言語別2位）</strong>で、「JSだけ」との差は年収で数十万円規模。JSを学んだらTSまで足すのが2026年の最適解</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: paiza「プログラミング言語に関する調査（2025年）」（@IT掲載、2026年6月参照）／フリーランスボード「JavaScriptエンジニア案件調査 2026年3月」（INSTANTROOM、2026年6月参照）
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. JavaScriptエンジニアとは（仕事内容とキャリアの広がり）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 女性がJavaScriptで長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 年収相場と求人数【実データ】</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 「JSだけ」と「JS＋TypeScript」の市場価値差</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. フレームワーク需要（React・Next.js・Vue）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験から目指す学習ロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. ポートフォリオと転職活動の進め方</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. JavaScriptエンジニアのキャリアパス</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. おすすめ転職エージェント</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">JavaScriptエンジニアとは（仕事内容とキャリアの広がり）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              JavaScriptは、Webブラウザで動く唯一の標準プログラミング言語です。私たちが毎日使うWebサイトやWebアプリの「動き」——ボタンを押したときの反応、画面の切り替え、入力フォームのチェック——は、ほぼすべてJavaScriptで作られています。Webが存在する限り需要がなくならない、土台の言語と言えます。
            </p>
            <p>
              かつては「画面の装飾用」の言語でしたが、現在のJavaScriptの守備範囲ははるかに広く、(1)ReactやVue.jsを使ったフロントエンド開発、(2)Node.jsによるサーバーサイド（バックエンド）開発、(3)React Nativeなどでのモバイルアプリ開発、(4)Electronを使ったデスクトップアプリまで、<strong>1つの言語でWebのほぼ全領域</strong>をカバーします。最初にJavaScriptを選んでおくと、フロントエンドにもバックエンドにも進路を変えられる——これがキャリア戦略上の最大の強みです。
            </p>
            <p>
              本記事は「JavaScriptという言語でキャリアを作る」ことを軸に、年収・求人データから学習の道筋までを扱います。TypeScript×Reactのモダンフロントエンド特化の詳細（技術スタック・案件単価など）は<a href="/articles/typescript-react/" className="underline" style={{ color: "#7c3a55" }}>TypeScript・Reactエンジニア転職ガイド</a>を、フロントエンド職種そのものの解説は<a href="/articles/frontend/" className="underline" style={{ color: "#7c3a55" }}>フロントエンドエンジニア転職ガイド</a>をあわせてご覧ください。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>JavaScript 1つで広がる4つの領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>フロントエンド</strong>：React / Vue.js / Next.js でのWeb画面・UI開発（求人の中心）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>バックエンド</strong>：Node.js でのAPI・サーバー開発。フルスタックへの足がかり</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>モバイルアプリ</strong>：React Native などクロスプラットフォーム開発</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>型付き開発（TypeScript）</strong>：JSの知識をそのまま活かして市場価値を一段上げる</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がJavaScriptで長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              JavaScript系の職種は、働き方の柔軟性という点で女性がキャリアを継続しやすい条件がそろっています。実データを交えて4つの観点で見てみましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. リモート比率84.5%の高さ</h3>
              <p className="text-text-light text-sm leading-relaxed">フリーランスボードの調査（2026年3月）では、JavaScript案件のリモート比率は84.5%（フルリモート27.4%・一部リモート57.1%）。Web開発は場所を選ばず、産休育休後の復帰や育児との両立がしやすい領域です。出典: フリーランスボード「JavaScriptエンジニア案件調査」（2026年6月参照）</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 求人ニーズ1位＝選択肢の多さ</h3>
              <p className="text-text-light text-sm leading-relaxed">paiza調査で企業の求人ニーズ1位（14.4%）。求人の母数が多いほど「リモート可」「時短可」「産育休実績あり」といった働き方の条件で絞り込んでも選択肢が残り、条件交渉の余地が大きくなります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 成果物が目に見えて評価されやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">画面・UIという「目に見える成果物」を作る仕事のため、ポートフォリオでスキルを客観的に示しやすく、学歴・職歴・性別より実力で評価されやすいのが特徴。ブランクからの再挑戦でも作品が語ってくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 学習開始のハードルが最も低い言語</h3>
              <p className="text-text-light text-sm leading-relaxed">ブラウザさえあれば環境構築なしで動かせて、無料教材・日本語情報・コミュニティが豊富。仕事や家事育児と並行した「すきま時間学習」と相性がよく、未経験スタートの挫折率を下げられます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 年収・求人数 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収相場と求人数【実データ】</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              まず求人数から。paizaが2025年12月に発表した「プログラミング言語に関する調査（2025年）」では、企業からの求人ニーズが最も高い言語は<strong>JavaScript（14.4%）</strong>で、2位のJava（13.9%）、3位のPHP（11.0%）を抑えて1位でした。フリーランス市場でも、フリーランスボードの集計（調査対象42,270件、2026年3月時点）でJavaScript案件は<strong>案件数4位・市場全体の9.21%</strong>を占めます。出典: paiza「プログラミング言語に関する調査（2025年）」（@IT掲載、2026年6月参照）／フリーランスボード「JavaScriptエンジニア案件調査 2026年3月」（INSTANTROOM、2026年6月参照）
            </p>
            <p>
              年収は、正社員で<strong>平均450万〜500万円</strong>が目安。経験年数とスキルの掛け算で大きく変わります。出典: CAREER COMPASS「JavaScript開発者への転職完全ガイド」（2026年6月参照）
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>経験・区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>求められるスキル</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>未経験・初年度</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>300万〜350万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>JS基礎・HTML/CSS・TypeScript入門</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>1〜2年（初級）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>350万〜450万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>React または Vue.js の基礎</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>3〜5年（中級）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>450万〜600万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>TypeScript＋フレームワーク実務</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>6年以上（上級）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>600万〜800万円超</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>フルスタック・リーダー経験</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>平均月額単価72.7万円（年収換算873万円）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>実務3年以上＋React等の専門性</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3">
            出典: 経験別はCAREER COMPASS「JavaScript開発者への転職完全ガイド」、フリーランスはフリーランスボード「JavaScriptエンジニア案件調査 2026年3月」（いずれも2026年6月参照）。企業・地域・スキルにより変動します。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-4">
            <p>
              他の言語との比較や「年収の上がりやすい言語」の全体像は、<a href="/articles/salary-by-language/" className="underline" style={{ color: "#7c3a55" }}>言語別年収ランキング</a>で詳しく整理しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 JSだけ vs JS+TS */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">「JSだけ」と「JS＋TypeScript」の市場価値差</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              2026年のJavaScriptキャリアで最も重要な分岐点が、<strong>TypeScript（TS）を併用できるかどうか</strong>です。TypeScriptはJavaScriptに「型」を足した上位互換の言語で、JSの知識はそのまま使えます。開発の現場は急速にTSへ移行しており、世界最大級の開発者調査「State of JavaScript 2025」では、コードを<strong>TypeScriptのみで書く開発者が40%</strong>（2024年34%→2025年40%、2022年は28%）に達し、素のJavaScriptのみで書く開発者はわずか6%でした。出典: State of JavaScript 2025（InfoQ、2026年6月参照）
            </p>
            <p>
              市場価値の差も数字に表れています。paiza調査の言語別「平均提示年収」では<strong>TypeScriptは714万円で2位</strong>（1位はGoの723万円）。一方JavaScriptは求人数こそ1位ですが、学習者・経験者の母数が多いぶん競争が激しく、提示年収の水準は相対的に低めです。フリーランス市場でも、フリーランスボードの同一調査内で<strong>TypeScript案件の平均年収換算952万円に対しJavaScript案件は873万円</strong>と、約80万円の差がつきます。出典: paiza「プログラミング言語に関する調査（2025年）」（@IT掲載）／フリーランスボード「TypeScriptエンジニア案件調査 2026年3月」（いずれも2026年6月参照）
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>指標</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>JavaScript</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>TypeScript</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>求人ニーズ（paiza）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1位（14.4%）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>上位（年収とのバランス良）</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>平均提示年収（paiza）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>上位圏外（競争多）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>714万円（言語別2位）</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス平均単価</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月72.7万円（年873万円）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月79.3万円（年952万円）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3">出典: paiza「プログラミング言語に関する調査（2025年）」（@IT掲載）／フリーランスボード「JavaScript／TypeScriptエンジニア案件調査 2026年3月」（いずれも2026年6月参照）</p>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>結論：JSを学んだら、TSまで足して止める</h3>
            <p className="text-sm text-text-light leading-relaxed">
              JavaScriptの基礎を固めたら、TypeScriptの型注釈・interface・ジェネリクスまでを1ヶ月程度で上乗せするのが、学習コストに対するリターンが最も大きい投資です。「JSだけ」で応募するのと「JS＋TS」で応募するのとでは、応募できる求人の幅と提示額が変わります。TypeScript×Reactの技術スタックや案件相場の詳細は<a href="/articles/typescript-react/" className="underline" style={{ color: "#7c3a55" }}>TypeScript・Reactエンジニア転職ガイド</a>で解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 フレームワーク需要 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">フレームワーク需要（React・Next.js・Vue）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              実務のJavaScriptは、ほぼ必ずフレームワークとセットで使われます。どれを学ぶかで応募できる求人が変わるため、需要データを見て選びましょう。フリーランスボードのJavaScript案件調査（2026年3月、対象42,270件）によるフレームワーク別の案件数は次の通りです。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>フレームワーク</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>案件数</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均月額単価</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>特徴</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>React</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>25,102件（1位）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>79.2万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>需要最大。SaaS・スタートアップの標準</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Vue.js</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>10,185件（2位）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>—</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>日本の中小・BtoBで根強い需要</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Node.js</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>6,734件（3位）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>79.1万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>JSでのバックエンド。フルスタックへの道</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Next.js</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>6,200件（4位）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>80.6万円（単価1位）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Reactベース。単価が最も高い</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Angular</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2,473件（5位）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>—</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>大企業の業務システムで一定の需要</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3">出典: フリーランスボード「JavaScriptエンジニア案件調査 2026年3月」（INSTANTROOM、2026年6月参照）</p>
          <div className="space-y-4 text-text-light leading-relaxed mt-4">
            <p>
              ReactはVue.jsの約2.5倍の案件数があり、開発者調査「State of JavaScript 2025」でも<strong>使用率83.6%で最多、Next.jsも59%</strong>と、React系エコシステムの優位は当面揺るがない見込みです。迷ったら「React → Next.js」の順で学ぶのが、求人数・単価の両面で最も合理的です。出典: State of JavaScript 2025（InfoQ、2026年6月参照）
            </p>
            <p>
              フロントエンド職種全体の仕事内容や働き方は<a href="/articles/frontend/" className="underline" style={{ color: "#7c3a55" }}>フロントエンドエンジニア転職ガイド</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 学習ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から目指す学習ロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              1日2〜3時間の学習で<strong>6ヶ月〜1年</strong>が目安です。JavaScriptはブラウザだけで動かせるため、PythonやJavaに比べて「書いたものがすぐ画面に出る」楽しさがあり、挫折しにくいのが利点。次の順序で進めましょう（IT業界の全体像から知りたい方は<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験からの転職ガイド</a>もどうぞ）。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "HTML/CSSとJavaScriptの基礎（1〜2ヶ月）", "変数・関数・配列・オブジェクトなどの基本文法と、Webページの構造（HTML/CSS）を学びます。ブラウザの開発者ツールで動かしながら覚えるのが近道です。"],
              ["STEP2", "DOM操作と非同期処理（1〜2ヶ月）", "ボタンクリックで画面を書き換えるDOM操作、APIからデータを取るfetchとasync/await。JavaScriptの「実務で毎日使う部分」です。"],
              ["STEP3", "TypeScriptの基礎（1ヶ月）", "型注釈・interface・ジェネリクスの基本まで。JSの知識がそのまま活き、ここを足すだけで応募できる求人が大きく広がります。"],
              ["STEP4", "React＋Next.jsでアプリ開発（2〜3ヶ月）", "コンポーネント・State・Hooksを学び、小さなアプリを複数作ります。需要データ上、最初のフレームワークはReactが最も合理的です。"],
              ["STEP5", "Git・チーム開発の基本", "GitHubでのコード管理・ブランチ運用・プルリクエスト。現場では必須スキルで、ポートフォリオの公開にもそのまま使います。"],
              ["STEP6", "ポートフォリオ作成と転職活動（1〜3ヶ月）", "React＋TypeScriptのWebアプリを公開し、エージェントに登録。働き方の条件（リモート・産育休実績）も並行して確認していきます。"],
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

      {/* sec7 ポートフォリオと転職活動 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ポートフォリオと転職活動の進め方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              JavaScript系の転職では、資格よりも<strong>ポートフォリオ（動く作品）</strong>が最大のアピール材料です。画面という目に見える成果物を作る仕事なので、採用側も「実際に作ったもの」でスキルを判断します。未経験・微経験の場合は特に、職務経歴書だけでは伝わらない実力を作品で示しましょう。
            </p>
            <p>
              評価されやすいポートフォリオの条件は、(1)React＋TypeScriptで構築されている、(2)APIとの連携やログインなど「実用的な機能」がある、(3)スマホ対応（レスポンシブ）されている、(4)GitHubでコードが公開され、コミット履歴やREADMEが整っている、の4点です。チュートリアルの写経で終わらず、自分の課題を解決する小さなアプリ（家計簿・献立管理・学習記録など）に発展させると、面接で「なぜ作ったか」を語れて強くなります。
            </p>
            <p>
              転職活動は、ポートフォリオが7割完成した時点で始めて構いません。エージェント面談で市場の評価を聞き、足りないスキルを逆算して埋めるほうが、独学で完璧を目指すより早く決まります。
            </p>
          </div>
        </div>
      </section>

      {/* sec8 キャリアパス */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">JavaScriptエンジニアのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>JavaScriptは1つの言語でフロントエンドにもバックエンドにも進めるため、キャリアの分岐が豊富です。代表的な4つの進路を紹介します。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>フロントエンド特化（React/Next.js）</h3><p className="text-sm text-text-light">React/Next.jsを極めてシニアフロントエンド・テックリードへ。Next.jsは案件単価1位（月80.6万円）で、専門性がそのまま収入に直結します。</p></div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>フルスタック（JS＋Node.js）</h3><p className="text-sm text-text-light">Node.jsでバックエンドまで担当。1言語で前後両方を書けるのはJSだけの強みで、スタートアップで特に重宝されます。サーバーサイドの全体像は<a href="/articles/backend/" className="underline" style={{ color: "#7c3a55" }}>バックエンドエンジニア転職ガイド</a>へ。</p></div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>デザイン×エンジニアリング</h3><p className="text-sm text-text-light">UI実装力にデザイン感覚を掛け合わせるUXエンジニア・デザインエンジニアへ。Webデザイナーからの転身ルートとしても人気です。</p></div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>フリーランス・柔軟な働き方</h3><p className="text-sm text-text-light">JS案件は平均月単価72.7万円・リモート比率84.5%。実務3年程度の経験を積めば、育児やライフステージに合わせた独立も現実的な選択肢になります。</p></div>
          </div>
        </div>
      </section>

      {/* sec9 エージェント */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>フロントエンドエンジニアの転職では、IT特化型のエージェントが最もおすすめです。React、TypeScript、Next.jsなどの技術スキルを正しく評価し、適切な求人を紹介してくれます。</p>
            <p>レバテックキャリアはフロントエンド求人を多数保有しており、技術面の深いヒアリングに定評があります。GeeklyもWeb系・IT企業の求人に強く、フロントエンドエンジニアの転職実績が豊富です。女性特化型のtype女性の転職エージェントとの併用もおすすめです。</p>
            <p>転職エージェントの活用ポイントは、ポートフォリオのURLとGitHubアカウントを事前に共有しておくことです。技術力を客観的に示す材料があると、アドバイザーもより適切な求人を提案しやすくなります。</p>
            <p>複数のエージェントに登録し、求人の質やアドバイザーとの相性を比較することも重要です。IT特化型2社+女性特化型1社の3社併用が、女性フロントエンドエンジニアの転職ではベストな組み合わせです。</p>
          </div>
        </div>
      </section>

      {/* sec10 FAQ */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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

      {/* 出典一覧 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">本記事の主な出典・データソース</h2>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・paiza「プログラミング言語に関する調査（2025年）」（@IT 2026年1月掲載記事、2026年6月参照）— 求人ニーズ・平均提示年収</li>
              <li>・INSTANTROOM「フリーランスボード」JavaScriptエンジニア案件調査 2026年3月（2026年6月参照）— 案件数・単価・リモート比率・フレームワーク別データ</li>
              <li>・INSTANTROOM「フリーランスボード」TypeScriptエンジニア案件調査 2026年3月（2026年6月参照）— TypeScript案件の単価・年収</li>
              <li>・State of JavaScript 2025（InfoQ 2026年3月記事、2026年6月参照）— TypeScript採用率・フレームワーク使用率</li>
              <li>・CAREER COMPASS「JavaScript開発者への転職完全ガイド」（2026年6月参照）— 正社員の経験年数別年収目安</li>
            </ul>
            <p className="text-xs text-text-light mt-4">年収・案件数は調査時点のものであり、企業・地域・個人のスキルにより変動します。</p>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/typescript-react/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>TypeScript・Reactエンジニア転職ガイド</h3>
              <p className="text-sm text-text-light">モダンフロント特化の技術スタックと年収</p>
            </a>
            <a href="/articles/frontend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>フロントエンドエンジニア転職ガイド</h3>
              <p className="text-sm text-text-light">職種としてのフロントエンドの全体像</p>
            </a>
            <a href="/articles/salary-by-language/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>言語別年収ランキング</h3>
              <p className="text-sm text-text-light">JavaScript/TypeScript/Go等の年収比較</p>
            </a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からのエンジニア転職ガイド</h3>
              <p className="text-sm text-text-light">IT業界の全体像と最初の一歩</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
