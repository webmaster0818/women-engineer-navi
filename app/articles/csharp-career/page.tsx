import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性C#エンジニア転職ガイド｜年収・必要スキル・未経験からの道",
  description:
    "女性C#エンジニアの転職ガイド。.NET業務系・Unityゲーム・Windowsアプリの仕事内容、平均年収（20代約400万〜40代約600万）や必要スキル、未経験からのロードマップ、求人動向と将来性、キャリアパスを実データで解説。長く働きやすい理由とおすすめ転職エージェントも紹介します。",
  alternates: { canonical: "/articles/csharp-career/" },
  openGraph: {
    title: "女性C#エンジニア転職ガイド｜年収・必要スキル・未経験からの道",
    description:
      "女性C#エンジニアの年収・必要スキル・未経験からのロードマップ・求人動向・将来性・キャリアパスを実データで徹底解説。",
    url: "https://women-engineer.com/articles/csharp-career/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性C#エンジニア転職ガイド｜年収・必要スキル・未経験からの道",
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
    "女性C#エンジニアの年収・必要スキル・未経験からのロードマップ・求人動向・将来性・キャリアパスを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/csharp-career/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性C#エンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "C#エンジニアの年収は年代別で、20代が約350万〜400万円、30代が約450万〜550万円、40代が約550万〜600万円が目安で、40代でピークを迎える傾向です。C#は大規模な業務系システム開発が多く、上流工程やマネジメント経験を積むと年収500万円以上が見えてきます。フリーランスの想定平均年収は約903万円（言語別ランキング12位）と高水準です。性別による給与差はスキルと経験で埋められる職種で、年収交渉やエージェント活用で適正額を得ることが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもC#エンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。C#はVisual Studioという無料の統合開発環境（IDE）が充実し、文法もJavaに似て体系的なため、未経験者でも学習しやすい言語です。プログラミング基礎 → C#文法 → オブジェクト指向 → データベース・SQL → ASP.NET CoreまたはUnityのいずれか → ポートフォリオ作成の順で、1日2〜3時間の学習なら半年〜1年が目安です。業務系を狙うならWebアプリ、ゲームを狙うならUnityの簡単なゲームを公開すると、転職活動で強い実績になります。",
      },
    },
    {
      "@type": "Question",
      name: "C#は業務系とゲーム（Unity）どちらに進むべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "どちらも将来性のある道で、適性と希望する働き方で選びましょう。安定性・長期就業を重視するなら、SIerや自社開発企業の.NET業務系がおすすめで、リモートや時短の求人も比較的多く、女性が長く働きやすい環境が整っています。ものづくりの面白さや成長領域を求めるならUnityゲーム開発で、スマホゲーム・VR/AR・産業用シミュレーションまで活躍の場が広がっています。C#は同じ言語で両方の世界に通用するため、まず一方で経験を積み、後から横展開することも可能です。",
      },
    },
    {
      "@type": "Question",
      name: "C#エンジニアは産休・育休後も働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすい職種のひとつです。C#は業務系システムやBtoBの自社サービスで長期運用される案件が多く、突発的な仕様変更や深夜対応が少ない現場も多いため、生活リズムを保ちやすいのが特徴です。.NETの設計・実装スキルは流行に左右されにくく長く通用するので、ブランクが空いても復帰しやすい土台になります。ただし企業差が大きいため、産休育休の取得実績・復帰率、リモートや時短の運用実態、女性管理職比率を事前に確認しましょう。求人票に出ない実態は、女性のキャリアに詳しいエージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "C#転職におすすめの転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "技術を正当に評価してもらうならIT特化型のレバテックキャリアやGeekly、女性のキャリア継続を重視するならtype女性の転職エージェントがおすすめです。レバテックキャリアは.NET業務系の求人が豊富でアドバイザーが技術を理解しており、Geeklyはゲーム業界（Unity）に強く年収交渉力に定評があります。女性特化型は産休育休やリモートなど働き方の条件で求人を絞り込めます。2〜3社の併用がベストです。",
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
              { label: "C#エンジニア転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              言語別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性C#エンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収・必要スキル・未経験からの道のりを実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. C#エンジニアとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 女性がC#で長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 必要なスキルと技術</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. C#エンジニアの年収相場（年代別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 未経験から目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. C#エンジニアのキャリアパス</a></li>
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
          <h2 className="text-2xl font-bold mb-6">C#エンジニアとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              C#（シーシャープ）は、Microsoftが開発したオブジェクト指向のプログラミング言語です。実行基盤の「.NET」上で動き、開発には無料の統合開発環境「Visual Studio」を使うのが一般的。1つの言語で<strong>業務系システム・Webアプリ・Windowsデスクトップアプリ・スマホアプリ・ゲーム</strong>まで幅広く作れる、応用範囲の広さが最大の特徴です。
            </p>
            <p>
              C#エンジニアの仕事は、大きく4つの領域に分かれます。最も求人が多いのが<strong>業務系システム開発</strong>。金融・製造・流通などの企業向けに、在庫管理・販売管理・基幹システムといった大規模システムをASP.NET Coreなどで構築します。次に多いのが<strong>Unityを使ったゲーム開発</strong>で、Unityのスクリプト言語はC#。スマホゲーム・コンシューマー・VR/ARまで担当します。
            </p>
            <p>
              加えて、社内ツールや専用端末向けの<strong>Windowsデスクトップアプリ開発</strong>（WPF / WinForms / .NET MAUI）、ML.NETを使った<strong>AI・機械学習</strong>領域でも活躍の場が広がっています。トレンドの移り変わりが緩やかで、業務系は長期運用される案件が多いため、設計・実装スキルが資産になりやすいのも魅力です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>C#エンジニアの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>業務系システム開発（ASP.NET Core / 基幹・販売・在庫管理など）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>ゲーム開発（Unity / スマホ・コンシューマー・VR/AR）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>Windowsデスクトップアプリ（WPF / WinForms / .NET MAUI）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>Webアプリ・API開発（ASP.NET Core Web API / Blazor）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>クラウド連携（Microsoft Azure）・AI（ML.NET）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>設計・要件定義などの上流工程、テスト・保守運用</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がC#で長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされますが、C#（.NET）の現場は業務系を中心に長期運用される案件が多く、生活リズムを保ちながらキャリアを積みやすいのが特徴です。Microsoft系の安定した技術基盤の上で、女性が長く働ける要素が揃っています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>1. 業務系は腰を据えて働きやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">C#の主戦場である業務系システムは長期運用が前提で、突発的な深夜対応や急な仕様変更が比較的少ない現場が多め。計画的に働けて、育児・介護とも両立しやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3aed" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>2. スキルが長く通用し復帰しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">.NETの設計やオブジェクト指向の考え方は流行に左右されにくく、一度身につければ長く武器になります。Microsoftがバージョンアップを続ける安定基盤のため、産休育休でブランクが空いても復帰しやすい土台になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>3. 学習環境が整い独学しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">無料のVisual Studioや公式ドキュメント、Unity学習教材が充実。情報量が多く独学の挫折が少ないため、家事・育児の合間に学び直してキャリアチェンジする女性も少なくありません。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3aed" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>4. 進める道が広く選択肢が多い</h3>
              <p className="text-text-light text-sm leading-relaxed">業務系・ゲーム・Windowsアプリ・AIと活躍領域が広く、ライフステージに合わせて働き方を選びやすいのが強み。求人が多いほど「働きやすい会社」を選べ、条件交渉の余地も大きくなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 スキルと技術 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルと技術</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              C#エンジニアはまず<strong>C#の文法とオブジェクト指向</strong>を土台に、目指す領域（業務系かゲームか）に応じてフレームワークを習得します。すべてを最初から完璧にする必要はなく、1つずつ積み上げていけば十分です。
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
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>C#・オブジェクト指向</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>C#文法 / クラス / LINQ / 非同期(async/await)</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>すべての土台。Javaに似て体系的で学びやすい</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>業務系フレームワーク</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ASP.NET Core / Entity Framework / Blazor</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>業務系・Web求人で最頻出。最重要スキル</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>ゲーム開発</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Unity / ゲームロジック / 物理・UI実装</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ゲーム業界を目指すなら必須。C#がそのまま活きる</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>データベース / SQL</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>SQL Server / MySQL / PostgreSQL</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>業務系では必須。SQL Serverと相性が良い</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>開発環境 / クラウド</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Visual Studio / Git / Azure</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Gitは必須。Azure経験は年収アップに直結</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            2026年時点では、業務系なら<strong>ASP.NET Core × Azure</strong>、クロスプラットフォームなら<strong>.NET MAUI</strong>や<strong>Blazor</strong>、AI領域では<strong>ML.NET</strong>のスキルが市場価値を高めます。Unityは<strong>VR/AR・産業シミュレーション</strong>でも需要が拡大しています。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">C#エンジニアの年収相場（年代別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              C#エンジニアの年収は年代・経験・担当領域で差が出ます。C#は大規模な業務系システム開発が多く、上流工程やマネジメント経験を積むほど年収が上がりやすいのが特徴。下表は各種調査をもとにした目安です（企業・地域・スキルにより変動します）。
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
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約350万〜400万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>基礎を固めながら経験を積む時期</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約450万〜550万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>リーダー経験で500万円以上も狙える</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約550万〜600万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>上流・マネジメントで年収ピーク</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>フリーランス</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>想定年収 約903万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>言語別ランキング12位。高需要案件で上振れ</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>上流工程・マネジメント</strong>へ。要件定義や設計、チームリードの経験を積む</li>
              <li>② <strong>クラウド（Azure）・新技術</strong>（.NET MAUI / Blazor / ML.NET）を扱えるようにする</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。市場価値を客観評価してもらう</li>
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
              C#の将来性は高い水準が続く見込みです。Stack Overflowの開発者調査でも人気言語の上位にランクインし続け、利用者の6割以上が「来年も使いたい」と回答しています。SIerからの安定した需要に加え、自社開発のIT企業・Web企業・ゲーム企業からのニーズも旺盛で、C#エンジニアの転職市場は活況です。
            </p>
            <p>
              特に伸びているのは、<strong>Unityを使ったゲーム・VR/AR・産業シミュレーション</strong>と、<strong>.NET MAUI / Blazorによるクロスプラットフォーム開発</strong>、そして<strong>ML.NETを活用したAI領域</strong>。一方で、業務系では要件定義・設計（上流）やAzureを担える人材が希少で、年収も高くなります。Microsoftの継続的な投資により、.NETエコシステムは今後も拡大が見込まれます。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 未経験ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>1日2〜3時間の学習で<strong>半年〜1年</strong>が一つの目安。次の順序で進めると挫折しにくいです。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "開発環境を整え基礎を学ぶ", "無料のVisual Studioを導入し、C#の基本文法（変数・条件分岐・繰り返し）を習得。まず簡単なコンソールアプリを動かして全体像をつかみます。"],
              ["STEP2", "オブジェクト指向を理解する", "クラス・継承・インターフェースなどC#の核となる考え方を学ぶ。ここを丁寧にやると後の開発が一気に楽になります。"],
              ["STEP3", "データベースとSQLを学ぶ", "SQL Serverなどでテーブル設計とSQL（検索・追加・更新）を習得。業務系では中核スキルになります。"],
              ["STEP4", "目指す領域のフレームワークを習得", "業務系・Webを目指すならASP.NET Core、ゲームを目指すならUnity。どちらか1つに絞って深く学びます。"],
              ["STEP5", "Git・クラウドに触れる", "Gitでのコード管理は必須。Microsoft Azureに少し触れておくと、業務系求人で評価が上がります。"],
              ["STEP6", "ポートフォリオを作る", "業務系ならログイン・CRUD付きのWebアプリ、ゲームならUnityの小さなゲームを公開。転職活動で最も効く実績になります。"],
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
          <h2 className="text-2xl font-bold mb-6">C#エンジニアのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>C#は応用範囲が広く、進める道が多いのが魅力です。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>業務系のスペシャリスト</h3><p className="text-sm text-text-light">ASP.NET Core × Azureを極め、テックリードやアーキテクトへ。大規模システムの設計者として高年収を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>ゲームエンジニア</h3><p className="text-sm text-text-light">Unityを軸にスマホゲーム・コンシューマー・VR/ARへ。ものづくりの面白さと成長領域を両取りする道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>上流・マネジメント</h3><p className="text-sm text-text-light">要件定義・設計を担うSE、プロジェクトマネージャー（PM）やエンジニアリングマネージャーへ。チームをリードする道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>独立・柔軟な働き方</h3><p className="text-sm text-text-light">フリーランスとして高単価の.NET案件やリモート中心の働き方へ。ライフステージに合わせやすい。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>C#の技術を正当に評価してもらうには、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。.NET業務系の求人が多く、技術に精通したアドバイザーがC#のスキルスタックを理解した提案をしてくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、Unity案件にも詳しいのが特徴。年収アップ実績が豊富で、スピーディーなマッチングと年収交渉力に定評があります。</p>
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
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Aさん（30代前半・SES→自社開発の.NET業務系）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SESのC#エンジニア / 年収400万円・常駐</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}><p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p><p className="text-sm font-bold">自社開発企業の.NET業務系 / 年収550万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">IT特化型エージェントでASP.NET CoreとAzureの実績を整理。上流寄りの自社開発に軸足を移し、年収150万円アップとフルリモートを同時に実現。産休育休実績のある環境で長く働ける基盤を得ました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Bさん（20代後半・未経験→Unityゲーム）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">販売職（IT未経験）/ 年収320万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}><p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p><p className="text-sm font-bold">ゲーム会社のUnityエンジニア（C#）/ 年収400万円</p></div>
              </div>
              <p className="text-sm text-text-light">独学でC#とUnityを学び、ミニゲームを公開してポートフォリオに。ゲーム業界に強いエージェント経由で未経験可の求人に応募し、好きを仕事にするキャリアチェンジを成功させました。</p>
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
            <a href="/articles/backend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>バックエンドエンジニア転職ガイド</h3><p className="text-sm text-text-light">サーバーサイドで長く働く道</p></a>
            <a href="/articles/game-industry/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>ゲーム業界の転職ガイド</h3><p className="text-sm text-text-light">Unity・C#で目指すゲーム開発</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアのキャリアパス</h3><p className="text-sm text-text-light">長く活躍するための道筋</p></a>
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
