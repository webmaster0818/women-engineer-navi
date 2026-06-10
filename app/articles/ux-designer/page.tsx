import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性UXデザイナー転職ガイド｜仕事内容・年収・未経験からの道",
  description:
    "女性UXデザイナー・UXリサーチャーの転職ガイド。ユーザーリサーチ・情報設計・プロトタイプなどの仕事内容、UI/Webデザイナーとの違い、平均年収（20代345万〜40代507万）、必要スキルとFigma、需要・将来性、未経験ロードマップ、キャリアパスを実データで解説。おすすめ転職エージェントも紹介します。",
  alternates: { canonical: "/articles/ux-designer/" },
  openGraph: {
    title: "女性UXデザイナー転職ガイド｜仕事内容・年収・未経験からの道",
    description:
      "女性UXデザイナー・UXリサーチャーの仕事内容・年収・必要スキル・未経験からのロードマップ・将来性・キャリアパスを実データで徹底解説。",
    url: "https://women-engineer.com/articles/ux-designer/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性UXデザイナー転職ガイド｜仕事内容・年収・未経験からの道",
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
    "女性UXデザイナー・UXリサーチャーの仕事内容・年収・必要スキル・未経験からのロードマップ・将来性・キャリアパスを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/ux-designer/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "UXデザイナーとUIデザイナー・Webデザイナーは何が違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UXデザイナーは「ユーザー体験全体」を設計する職種で、ユーザーリサーチ・情報設計・ワイヤーフレーム・ユーザビリティテストなど、画面の見た目の前段にある『なぜ・どう使うか』を担当します。UIデザイナーは配色・タイポグラフィ・アイコンなど画面の見た目（インターフェース）を、WebデザイナーはコーポレートサイトやLPのビジュアル・レイアウト制作を主に担います。UIはUXの一要素という関係で、UXデザイナーのほうが扱う業務範囲は広く、ビジネス要件やユーザー課題の理解まで踏み込むのが特徴です。コーディング中心のフロントエンドとは異なり、UXは『体験の設計』が軸になります。",
      },
    },
    {
      "@type": "Question",
      name: "女性UXデザイナーの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "求人ボックス（2026年3月時点）によるとUXデザイナーの平均年収は約404万円、年代別では20代約345万円・30代約442万円・40代約507万円・50代以上約622万円が目安です。一方、上流のUXリサーチャーやサービスデザイナー、UI/UX兼任のシニア層では538〜631万円、事業会社のリードクラスでは年収1,000万円以上の求人も珍しくありません。リサーチ設計や事業貢献を数値で示せると評価が上がりやすく、性別ではなくスキルと実績で年収が決まる職種です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもUXデザイナーになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。UXの基礎理論（ユーザー中心設計・情報設計）→ Figmaでのワイヤーフレーム/プロトタイプ → ユーザーリサーチ・ユーザビリティテスト → ケーススタディ型ポートフォリオの順で進めるのが王道です。最初の3カ月で基礎とツール操作、10〜12カ月目で転職活動を本格化させるのが一般的なロードマップ。事務・販売・マーケなどでユーザーと接してきた経験は『ユーザー視点』としてそのまま強みになり、文系・非エンジニアからの転身例も多い職種です。",
      },
    },
    {
      "@type": "Question",
      name: "UXデザイナーは産休・育休後も働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすい職種のひとつです。リサーチ・設計・ドキュメント作成はリモートで完結しやすく、フルリモートやフレックスの求人が増えています。成果がリサーチ結果や改善数値として可視化されるため、時短勤務でも実力が評価されやすいのも利点です。ただし企業差が大きいため、産休育休の取得・復帰実績、デザイン組織の有無、リモート運用の実態を事前に確認しましょう。求人票に出ない実情は、女性のキャリアに詳しいエージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "UXデザイナーの将来性はありますか？AIに代替されませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "需要は高く、求人数は年々増加しています。あらゆる企業がプロダクト・サービスの体験品質で差別化を図るため、ユーザー課題を発見し体験を設計できる人材は不足気味です。AIはUI生成やワイヤーの叩き台作成を効率化しますが、『誰のどんな課題を解くか』を定義するリサーチ・課題定義・意思決定はUXデザイナーの中核として残ります。むしろAIを使いこなしつつ、ユーザー理解と事業貢献を語れる人の価値は高まる見込みです。UXリサーチャーやPdMへの道も開けています。",
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
              { label: "UXデザイナー転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              職種別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性UXデザイナー・UXリサーチャー転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                体験設計・リサーチの仕事内容と年収・未経験からの道のりを実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. UXデザイナーとは（仕事内容・UI/Webデザイナーとの違い）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 女性がUXデザイナーとして活躍しやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 必要なスキルとツール</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. UXデザイナーの年収相場（年代別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 未経験から目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. UXデザイナーのキャリアパス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">UXデザイナーとは（仕事内容・UI/Webデザイナーとの違い）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              UXデザイナーは、製品やサービスを通じてユーザーが得る「体験（User Experience）」全体を設計する職種です。コードを書いて画面を作る仕事ではなく、<strong>「誰の・どんな課題を・どう解決するか」</strong>を起点に、リサーチ→課題定義→情報設計→検証というプロセスでサービスの使いやすさと満足度を高めます。近年は体験設計を専門に担う<strong>UXリサーチャー</strong>として独立した職種も増えています。
            </p>
            <p>
              具体的な業務は、(1)ユーザーインタビュー・アンケート・行動観察などの<strong>ユーザーリサーチ</strong>、(2)集めた情報をもとにサービスの構造を組み立てる<strong>情報設計（IA）</strong>、(3)画面構成と機能配置を描く<strong>ワイヤーフレーム作成</strong>、(4)Figmaなどで作る<strong>プロトタイプ</strong>、(5)試作品を実際のユーザーに触ってもらう<strong>ユーザビリティテスト</strong>、(6)データ分析にもとづく継続的な改善など。開発前にFigmaとMazeでユーザーテストを行い、手戻りを減らす進め方が一般的です。
            </p>
            <p>
              混同されやすい近接職種との違いを押さえておきましょう。<strong>UIデザイナー</strong>は配色・タイポグラフィ・アイコンなど画面の「見た目」を、<strong>Webデザイナー</strong>はコーポレートサイトやLPのビジュアル制作を主に担当します。UIはUXの一要素であり、UXデザイナーはその前段の「体験そのものの設計」まで踏み込むため、扱う範囲が最も広いのが特徴です。コーディング中心のフロントエンドエンジニアとも軸が異なり、UXは<strong>体験設計・課題解決</strong>が主戦場になります。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>UXデザイナーの主な仕事内容</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>ユーザーリサーチ（インタビュー / アンケート / 行動観察）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>ペルソナ・カスタマージャーニーマップ作成</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>情報設計（IA）・サイトマップ・画面遷移の設計</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>ワイヤーフレーム・プロトタイプ作成（Figma）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>ユーザビリティテストの設計・実施・分析</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>データにもとづく継続的な改善提案</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が活躍しやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がUXデザイナーとして活躍しやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされますが、UXは「ユーザーへの共感」と「コミュニケーション」が中核になるため、コーディング経験がなくても入りやすく、女性が強みを発揮しやすい領域です。ダイバーシティ推進とリモートワークの普及で、長くキャリアを築ける環境も整っています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>1. ユーザー視点・共感力が直接活きる</h3>
              <p className="text-text-light text-sm leading-relaxed">事務・販売・接客・マーケなどでユーザーや顧客と向き合ってきた経験は、リサーチやペルソナ設計の土台になります。生活者目線の気づきがそのまま価値になる職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3aed" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>2. コーディング不要で文系・未経験から入りやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">UXの軸は体験設計とリサーチで、プログラミングは必須ではありません。Figmaでの設計とリサーチ手法を学べば、非エンジニアからの転身も現実的です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>3. リモート・フレックスと相性が良い</h3>
              <p className="text-text-light text-sm leading-relaxed">リサーチ・設計・ドキュメント作成はオンラインで完結しやすく、フルリモート求人も豊富。育児・介護と両立しながら働きやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3aed" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>4. 成果が可視化され時短でも評価されやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">リサーチ結果や改善後の数値（離脱率・CVRなど）が客観的に残るため、勤務時間の長さではなく成果で評価されやすく、時短勤務でも実力が認められます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 スキルとツール */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルとツール</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              UXデザイナーは複数のスキルを組み合わせる職種ですが、すべてを最初から完璧にする必要はありません。まず<strong>UXの考え方（ユーザー中心設計）</strong>と<strong>Figmaでの設計</strong>を土台にし、徐々にリサーチ手法を深めていくのが現実的です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>スキル領域</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>具体例</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>UXの基礎理論</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ユーザー中心設計 / ダブルダイヤモンド / ヤコブ・ニールセンの10原則</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>設計判断の拠り所。最初に体系で押さえると応用が利く</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>リサーチ・分析</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ユーザーインタビュー / アンケート / ユーザビリティテスト / GA4</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>UXの中核。定性・定量の両方を扱えると強い</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>設計・ツール</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Figma / FigJam / Maze / Miro</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Figmaは事実上の標準。Mazeで開発前のユーザーテストも可</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>情報設計（IA）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>サイトマップ / 画面遷移 / カードソーティング</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>「迷わない構造」を作る設計力。UXの土台になる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>ソフトスキル</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ヒアリング / ファシリテーション / 言語化・資料化</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>関係者を巻き込み、根拠を伝える力。評価に直結</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            2026年時点では、<strong>Figmaでの設計力</strong>に加えて、<strong>リサーチを設計から実施・分析まで一気通貫できる力</strong>と<strong>事業課題への接続力</strong>が重視されています。HTML/CSSの基礎理解があるとフロントエンドとの連携がスムーズになり、評価が上がります。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">UXデザイナーの年収相場（年代別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              求人ボックス（2026年3月時点）によると、UXデザイナーの平均年収はおよそ<strong>404万円</strong>。年代・経験・担当範囲で差が出ます。下表は各種調査をもとにした目安です（企業・地域・スキルにより変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>平均年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約345万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ジュニア〜実務2〜3年目</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約442万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>リード・シニアになると450万〜700万円も</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約507万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>マネジメント層で600万〜900万円も</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>上流・専門職</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約538万〜631万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>UXリサーチャー・サービスデザイナー。事業会社リードは1,000万円超も</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>リサーチ専門性</strong>を高める（UXリサーチャー／定性・定量の両輪）</li>
              <li>② <strong>事業貢献を数値で語る</strong>（改善後のCVR・継続率・離脱率を実績化）</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。事業会社・SaaSの上流案件を狙う</li>
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
              UI/UXデザイナーは、IT業界の中でも需要の伸びが大きい職種のひとつです。あらゆる企業がプロダクトやサービスの「体験品質」で差別化を図るようになり、ユーザー課題を発見して体験を設計できる人材は不足気味。求人数は年々増加し、UI/UX兼任だけでなく、<strong>UXリサーチャー・サービスデザイナー</strong>といった専門職の募集も増えています。
            </p>
            <p>
              特に伸びているのは、<strong>自社サービスを持つSaaS・事業会社</strong>と、<strong>DXを推進する大手・スタートアップ</strong>。これらはリモート求人も多く、女性が働き方を選びやすい領域です。AIはUI生成やワイヤーの叩き台づくりを効率化しますが、<strong>「誰のどんな課題を解くか」を定義するリサーチ・課題定義・意思決定</strong>はUXデザイナーの中核として残ります。むしろAIを使いこなしつつ、ユーザー理解と事業貢献を語れる人の市場価値は高まる見込みです。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 未経験ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>最初の3カ月で基礎とツール、10〜12カ月目で転職活動を本格化させるのが一般的な流れ。次の順序で進めると挫折しにくいです。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "UXの基礎理論を学ぶ", "ユーザー中心設計、ダブルダイヤモンド、ヤコブ・ニールセンの10原則など。最初に「考え方の地図」を持つと後の学習が一気に楽になります。"],
              ["STEP2", "Figmaで設計の基本を習得", "ワイヤーフレーム→プロトタイプを作れるように。UXの設計はFigmaが事実上の標準。手を動かして形にする力をつけます。"],
              ["STEP3", "情報設計（IA）を学ぶ", "サイトマップ・画面遷移・カードソーティングで「迷わない構造」を設計。UXの土台になる重要スキルです。"],
              ["STEP4", "リサーチ手法を実践する", "ユーザーインタビューやアンケート、Maze等での簡易ユーザビリティテストを実際にやってみる。小さくても一連を回した経験が効きます。"],
              ["STEP5", "GA4・データ分析の基礎", "離脱率・CVRなどの定量データを読み、課題を発見する力を身につける。定性×定量を扱えると評価が上がります。"],
              ["STEP6", "ケーススタディ型ポートフォリオを作る", "「課題→リサーチ→設計→検証→結果」の思考プロセスが伝わる作品を1〜2本。完成画面だけでなく『なぜそう設計したか』が最も効く実績になります。"],
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

      {/* sec7 キャリアパス */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">UXデザイナーのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>UXデザイナーは「ユーザー理解」と「課題解決の設計力」が積み上がる職種で、上流・事業側へキャリアを広げやすいのが魅力です。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>リサーチを深める</h3><p className="text-sm text-text-light">UXリサーチャーとして、ユーザー調査の設計・分析の専門家に。定性・定量を武器に高年収を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>事業・戦略へ広げる</h3><p className="text-sm text-text-light">サービスデザイナー／プロダクトマネージャー（PdM）へ。事業戦略まで踏み込み、サービスの方向性を主導する道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>UIまで担う</h3><p className="text-sm text-text-light">UI/UXデザイナーとして設計から見た目まで一気通貫で担当。フロントエンドとの連携力も付けると市場価値が上がる道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>マネジメント・独立</h3><p className="text-sm text-text-light">デザインマネージャーとして組織をリード、またはフリーランスでリサーチ・設計案件へ。ライフステージに合わせやすい道。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>UXの設計力・リサーチ実績を正当に評価してもらうには、IT・クリエイティブ特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテッククリエイター</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT/クリエイティブ特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界のデザイナー職に特化。UI/UXの求人が豊富で、ポートフォリオの見せ方までアドバイスが得られます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。SaaS・事業会社のUX求人も多く、スピーディーなマッチングと年収交渉力に定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。働き方の条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 成功事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Aさん（20代後半・Webデザイナー→UXデザイナー）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">制作会社のWebデザイナー / 年収360万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}><p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p><p className="text-sm font-bold">SaaS企業のUI/UXデザイナー / 年収500万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">見た目だけでなく「なぜ使いやすいか」を設計したいと考え、Figmaでのプロトタイプとユーザビリティテストを独学。担当LPの改善で離脱率を下げた実績をケーススタディにまとめ、年収140万円アップとフルリモートを実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Bさん（30代前半・マーケ事務→UXリサーチャー）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">EC企業のマーケ事務（デザイン未経験）/ 年収340万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}><p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p><p className="text-sm font-bold">事業会社のUXリサーチャー / 年収480万円</p></div>
              </div>
              <p className="text-sm text-text-light">顧客対応で培ったヒアリング力を強みに、UXの基礎理論とユーザーインタビュー手法をスクールで学習。社内で小さなリサーチを実施した経験をポートフォリオ化し、産休育休実績のある事業会社に転職。コードを書かずに体験設計で長く働ける基盤を得ました。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/web-designer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>Webデザイナー転職ガイド</h3><p className="text-sm text-text-light">UXデザイナーとの違いも解説</p></a>
            <a href="/articles/frontend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>フロントエンドエンジニア転職ガイド</h3><p className="text-sm text-text-light">体験設計とコーディングの違い</p></a>
            <a href="/articles/portfolio/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>ポートフォリオの作り方</h3><p className="text-sm text-text-light">ケーススタディで思考を見せる</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
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
