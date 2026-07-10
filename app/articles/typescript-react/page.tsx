import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性TypeScript・Reactエンジニア転職ガイド｜年収・型安全・モダンフロント",
  description:
    "女性のTypeScript・Reactエンジニア転職ガイド。JavaScriptとの違い（型安全）やReact/Next.jsの実務、平均月単価76.9万円という高単価の実態、年代別年収、必要スキル、未経験・JSからのロードマップ、キャリアパスを実データで解説します。",
  alternates: { canonical: "/articles/typescript-react/" },
  openGraph: {
    title: "女性TypeScript・Reactエンジニア転職ガイド｜年収・型安全・モダンフロント",
    description:
      "女性のTypeScript・Reactエンジニアの年収・必要スキル・JSからのロードマップ・求人動向・キャリアパスを実データで徹底解説。型安全なモダンフロント開発の魅力を紹介。",
    url: "https://women-engineer.com/articles/typescript-react/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性TypeScript・Reactエンジニア転職ガイド｜年収・型安全・モダンフロント",
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
    "女性のTypeScript・Reactエンジニアの年収・必要スキル・JSからのロードマップ・求人動向・キャリアパスを実データで解説。型安全なモダンフロント開発の魅力を紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/typescript-react/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "TypeScript・Reactエンジニアの平均年収はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TypeScript案件はフリーランスの平均月単価が約76.9万円（年収換算で約923万円）と、主要言語の中でも上位の高単価です。正社員のReactフロントエンドでは20代後半で約445万円、30代前半で約533万円、40代前半で約621万円が目安で、年齢とともに上がります。同じフロントエンドでも、素のJavaScriptだけより『TypeScript＋React/Next.js』を扱えるほうが単価・年収が上がりやすく、Next.js案件は月単価76.1万円、React案件は77.2万円という調査結果もあります。年収交渉やエージェント活用で適正額を得ることが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "なぜReactにTypeScriptを組み合わせると有利なのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TypeScriptはJavaScriptに静的型付けを加えた上位互換言語で、コンポーネントのpropsやAPIのレスポンスに『型』を付けられます。これにより、実行前（コンパイル時）にミスを検知でき、ランタイムエラーが減り、エディタの補完も効くため大規模なReact開発でも安全に書けます。現在のモダンフロント現場ではReact＋TypeScriptがほぼ標準で、求人票でも『TypeScript必須』が増加中。型安全を扱えることが、素のJavaScriptしか書けない人との差別化＝市場価値になります。",
      },
    },
    {
      "@type": "Question",
      name: "JavaScript（素のJS）からTypeScript・Reactへステップアップできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "できます。むしろ最も自然なキャリアアップ経路です。TypeScriptはJavaScriptのスーパーセットなので、JSが書ける人は文法をゼロから学び直す必要はなく、型注釈・interface・ジェネリクスを上乗せしていくイメージです。流れとしては、JS基礎（ES6+・非同期）→Reactの基礎（JSX・props・state・Hooks）→TypeScriptで型を付ける→Next.jsでSSR/SSGまで、と進めます。Reactの基礎理解に約40〜60時間、Next.jsの基本に約50〜70時間、実践アプリ開発とデプロイに約100〜150時間が一つの目安です。",
      },
    },
    {
      "@type": "Question",
      name: "TypeScript・Reactは女性でもリモートで働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすい職種のひとつです。TypeScript案件の調査ではフルリモートが42.8％、一部リモートが51.7％と、リモート可の案件が9割以上を占めます。モダンフロント開発はオンラインで完結しやすく、GitHubのPRやコンポーネント単位で成果が可視化されるため、時短勤務でも実力が評価されやすいのが特徴です。育児・介護と両立しながら長く続けやすく、産休育休後の復帰もしやすい領域といえます。ただし企業差は大きいため、リモートの運用実態や女性の在籍状況は事前に確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "TypeScript・React転職におすすめの転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "モダンフロントの技術を正当に評価してもらうなら、IT特化型のレバテックキャリアやGeekly（ギークリー）がおすすめです。React/Next.js・TypeScriptの技術スタックを理解したアドバイザーが多く、高単価のSaaS・自社開発求人や年収交渉に強みがあります。女性のキャリア継続を重視するならtype女性の転職エージェントが、産休育休・リモートなど働き方の条件で求人を絞り込めて便利です。技術評価と働きやすさの両面を満たすため、IT特化型と女性特化型を2〜3社併用するのがベストです。",
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
              { label: "TypeScript・Reactエンジニア転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              言語別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性TypeScript・Reactエンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                型安全なモダンフロント開発で年収と働きやすさを両立する
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. TypeScript・Reactエンジニアとは（JS/TSの違い）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 女性がモダンフロントで長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 必要なスキルと技術スタック</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 年収相場（年代別・案件別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験・JSから目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. TypeScript・Reactのキャリアパス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">TypeScript・Reactエンジニアとは（JS/TSの違い）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              TypeScript・Reactエンジニアは、<strong>React</strong>（UIをコンポーネント単位で組み立てるライブラリ）と<strong>TypeScript</strong>（型安全なJavaScript）を軸に、Webアプリの画面側を設計・実装するモダンフロントエンドの専門職です。ページ遷移なしで画面を動的に切り替える<strong>SPA（シングルページアプリケーション）</strong>や、ReactをベースにSSR/SSGまで備えた<strong>Next.js</strong>を使った開発が中心になります。
            </p>
            <p>
              「素のJavaScript」だけのフロントエンドとの最大の違いは、<strong>型（type）の有無</strong>です。TypeScriptはMicrosoftが開発したJavaScriptの上位互換（スーパーセット）で、変数・関数・コンポーネントのprops・APIのレスポンスに「型」を付けられます。JavaScriptが動的型付けなのに対し、TypeScriptは静的型付けを採用しているため、<strong>コードを実行する前（コンパイル時）にミスを検知</strong>でき、エディタの補完も効きます。
            </p>
            <p>
              この「型安全」が効いてくるのが、画面数が多くチームで保守する大規模なReact開発です。propsの渡し間違いやAPIのデータ構造の取り違えといった、JavaScriptでは実行して初めて気づくバグを、書いている最中に潰せます。だからこそ現在のモダンフロント現場では<strong>React＋TypeScriptがほぼ標準</strong>で、求人票でも「TypeScript必須」が当たり前になりつつあります。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>TypeScript・Reactエンジニアの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Reactによるコンポーネント設計・UI実装（JSX / Hooks）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>TypeScriptで型を付けた保守性の高いコード（interface / 型推論 / ジェネリクス）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Next.jsでのSSR / SSG / ISR・ルーティング・画像最適化</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>状態管理（Redux / Zustand / Context API）とAPI通信の実装</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>SPAの設計・パフォーマンス改善・UI/UXの最適化</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Next.jsのAPI Routes等を使ったフルスタック寄りの開発</span></li>
              </ul>
            </div>
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#efe3d8" }}>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>観点</th>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>JavaScript（素のJS）</th>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>TypeScript</th>
                  </tr>
                </thead>
                <tbody className="text-text-light">
                  <tr>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>型付け</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>動的型付け（実行時に判明）</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>静的型付け（実行前に検知）</td>
                  </tr>
                  <tr style={{ backgroundColor: "#f0e7dd" }}>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>バグの発見</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>実行して初めて気づくことが多い</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>コンパイル時・記述中に検知できる</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>大規模・チーム開発</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>規模が大きいほど保守が難しい</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>可読性・保守性が高く生産性が上がる</td>
                  </tr>
                  <tr style={{ backgroundColor: "#f0e7dd" }}>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>求人での扱い</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基礎としては必須だが単体では差が付きにくい</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「TypeScript必須」が増加。単価・市場価値が高い</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がモダンフロントで長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされますが、リモートワークの普及とダイバーシティ推進で、女性が長くキャリアを築ける環境は年々整っています。中でもTypeScript・Reactを使うモダンフロント開発は、ライフイベントと両立しやすい要素が多い領域です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. リモート案件が9割超で柔軟に働ける</h3>
              <p className="text-text-light text-sm leading-relaxed">TypeScript案件の調査ではフルリモートが42.8％、一部リモートが51.7％。リモート可が9割を超え、通勤負担を減らして育児・介護と両立しながら働きやすい領域です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 成果が可視化され時短でも評価される</h3>
              <p className="text-text-light text-sm leading-relaxed">GitHubのPRやコンポーネント単位で担当範囲が客観的に残るため、勤務時間の長さではなく成果で評価されやすく、時短勤務でも実力が認められます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 型安全でブランク後も復帰しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">TypeScriptの型がドキュメント代わりになり、久しぶりに触ってもコードの意図を追いやすいのが特徴。産休育休でブランクが空いても、Reactの設計力は長く武器になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 需要が高く働きやすい会社を選べる</h3>
              <p className="text-text-light text-sm leading-relaxed">Reactは案件数13,327件とフロント系で断トツ。求人が多いほど「働きやすい会社」を選びやすく、女性が働き方や年収を交渉できる余地も大きくなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 スキルと技術スタック */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルと技術スタック</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              すべてを最初から完璧にする必要はありません。まず<strong>JavaScriptの基礎を固め、Reactを理解し、そこにTypeScriptの型を上乗せ</strong>していくのが王道です。Next.jsや状態管理はその先で身につけます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>スキル領域</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>具体例</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>JavaScript基礎</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ES6+構文 / 非同期処理 / DOM操作</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>すべての土台。ここを飛ばすとReactで詰まりやすい</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>React</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>JSX / コンポーネント / props・state / Hooks</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>useState・useEffectなど中核。SPAの設計力が問われる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>TypeScript</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>型注釈 / interface / 型推論 / ジェネリクス</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>素のJSとの差別化＝市場価値。求人で必須化が進む</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Next.js</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>SSR / SSG / ISR / ルーティング / API Routes</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>フルスタック寄りで即戦力。月単価76.1万円と高単価</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>状態管理 / API</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Redux / Zustand / Context API / REST</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>中規模以上の開発で必須。データ取得の実装経験が評価される</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>周辺ツール</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Git / GitHub / Vite / ESLint / Vercel</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Gitは必須。デプロイ・CI/CDの理解で評価が上がる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            2026年時点では、<strong>React＋TypeScript＋Next.js</strong>の3点セットを実務レベルで扱えることが、モダンフロントで最も価値の高い専門性の一つとされています。さらに<strong>UI/UXへの理解</strong>を掛け合わせると、市場価値がぐっと高まります。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収相場（年代別・案件別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ポイントは、同じフロントでも<strong>「TypeScript＋React/Next.js」を扱えるほうが単価が上がりやすい</strong>こと。フリーランスのTypeScript案件は平均月単価<strong>約76.9万円（年収換算で約923万円）</strong>と、主要言語の中でも上位の高単価です。下表は各種調査をもとにした目安です（企業・地域・スキルにより変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年収・単価の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代後半（正社員）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約445万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>20代前半は約339万円</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代（正社員）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約533万〜573万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>30代前半533万・後半573万が目安</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代（正社員）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約621万〜651万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>40代前半621万・後半651万が目安</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス（TypeScript）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月単価 約76.9万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>年収換算で約923万円。高需要言語の上位</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>案件別（参考）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>React 約77.2万円 / Next.js 約76.1万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>いずれもフリーランス月単価の目安</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>型安全＋Next.js</strong>まで扱えるようにし「TypeScript必須」求人を狙う</li>
              <li>② <strong>状態管理・パフォーマンス改善・UI/UX設計</strong>など上流の経験を積む</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。React/TS人材の市場価値を客観評価してもらう</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 求人動向・将来性 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向と将来性</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              フロントエンドのライブラリ別の案件数では<strong>React（約13,327件）</strong>が断トツの首位で、Vue.js（約6,477件）、Node.js（約3,753件）と続きます。TypeScriptも案件数ランキングで上位（シェア約10.22％）に入り、需要・将来性ともに高い水準です。Webサイトやアプリの使いやすさ（UI/UX）がビジネスの成否に直結するため、専門性の高いフロントエンド人材の需要は今後も高まる見込みです。
            </p>
            <p>
              特に伸びているのは、<strong>SaaS・自社開発企業（React＋TypeScript＋Next.jsでのプロダクト開発）</strong>と、<strong>Next.jsでSSR/SSGまで担えるフルスタック寄りの領域</strong>。これらはリモート求人も多く、女性が働き方を選びやすい領域です。一方で、設計・UI/UX・パフォーマンス改善まで担える人材は希少で、年収も高くなります。AIツールでコードを書く時代でも、<strong>型を意識した設計力やレビュー力</strong>を持つReact/TS人材の価値は下がりにくいといえます。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験・JSから目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>Reactの基礎理解に約<strong>40〜60時間</strong>、Next.jsの基本に約<strong>50〜70時間</strong>、実践アプリ開発とデプロイに約<strong>100〜150時間</strong>が目安。次の順序で進めると挫折しにくいです。すでにJavaScriptが書ける人はSTEP2から始められます。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "JavaScript基礎を固める", "ES6+構文・非同期処理（Promise/async await）・DOM操作まで。ここがReactとTypeScriptの土台になります。"],
              ["STEP2", "Reactの基礎を学ぶ", "JSX・コンポーネント・props・state・Hooks（useState/useEffect）。小さなUIを自分で組めるように。"],
              ["STEP3", "SPAとAPI通信を作る", "React RouterでのSPA構築、fetch/axiosでのAPI通信、状態管理（Context/Zustand）まで。動くアプリにする段階。"],
              ["STEP4", "TypeScriptで型を付ける", "型注釈・interface・型推論・ジェネリクス。Reactのpropsやイベントに型を付け、型安全に書き直してみる。"],
              ["STEP5", "Next.jsを習得する", "SSR/SSG/ISR・ルーティング・画像最適化・API Routes。実務で最も使われるフレームワークを押さえる。"],
              ["STEP6", "ポートフォリオを公開する", "TypeScript＋React/Next.jsで作ったアプリをVercel等にデプロイしGitHubで公開。転職で最も効く実績になります。"],
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

      {/* sec7 キャリアパス */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">TypeScript・Reactのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>TypeScript・Reactは「設計力」と「UI/UXの感覚」が積み上がる職種で、キャリアの選択肢が広いのが魅力です。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>技術を深める</h3><p className="text-sm text-text-light">フロントエンドのテックリード → アーキテクト。設計・パフォーマンス・大規模なReact基盤の専門家として高年収を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>領域を広げる（フルスタック）</h3><p className="text-sm text-text-light">Next.jsのAPI Routesやサーバーサイドへ広げ、フロント〜簡易バックエンドまで一通り担えるフルスタックエンジニアへ。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>UI/UX・プロダクト</h3><p className="text-sm text-text-light">UIデザインやプロダクト視点を強め、UXエンジニアやプロダクト寄りの役割へ。女性ならではの生活者目線が活きる道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>独立・柔軟な働き方</h3><p className="text-sm text-text-light">高単価のReact/TS案件でフリーランスへ。リモート中心の案件が多く、ライフステージに合わせて働きやすい。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>React/Next.js・TypeScriptの技術を正当に評価してもらうには、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーがReact/Next.js・TypeScriptの技術スタックを理解した提案をしてくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly（ギークリー）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。モダンフロントの高単価なSaaS・自社開発求人の紹介と、スピーディーなマッチング・年収交渉力に定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。働き方の条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 成功事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・素のJS→TypeScript＋React）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">受託のフロントエンド（JavaScript中心）/ 年収430万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SaaS企業のフロント（React＋TypeScript＋Next.js）/ 年収600万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">既存のReactアプリをTypeScriptに型付けし直した経験をポートフォリオに整理。IT特化型エージェントで「TypeScript必須」の自社開発求人に絞り、年収170万円アップとフルリモートを同時に実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（20代後半・Web制作→モダンフロント）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">Web制作会社のコーダー（HTML/CSS）/ 年収330万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">自社開発企業のフロント（TypeScript＋React）/ 年収450万円</p></div>
              </div>
              <p className="text-sm text-text-light">独学でReact→TypeScript→Next.jsの順に学び、型安全なSPAをVercelに公開。未経験可の自社開発企業に転職し、産休育休実績のある環境で長く働ける基盤を得ました。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/salary-by-language/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>言語別の年収比較</h3><p className="text-sm text-text-light">言語選びの市場価値を一覧で確認</p></a>
            <a href="/articles/frontend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>フロントエンドエンジニア転職ガイド</h3><p className="text-sm text-text-light">女性に人気の理由と求人動向</p></a>
            <a href="/articles/javascript-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>JavaScript×女性エンジニア</h3><p className="text-sm text-text-light">フロントエンド転職の始め方</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/portfolio/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ポートフォリオの作り方</h3><p className="text-sm text-text-light">転職で最も効く実績の作り方</p></a>
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
