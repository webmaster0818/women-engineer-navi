import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性PHPエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
  description:
    "女性PHPエンジニアの転職ガイド。仕事内容（Web開発/EC/CMS/Laravel/WordPress）や平均年収（20代373万〜40代605万）、必要スキル、未経験ロードマップ、求人動向と将来性、キャリアパスを実データで解説。学習しやすく求人も多いPHPで、女性が長く働く方法とおすすめエージェントを紹介します。",
  alternates: { canonical: "/articles/php-career/" },
  openGraph: {
    title: "女性PHPエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
    description:
      "女性PHPエンジニアの仕事内容・年収・必要スキル・未経験ロードマップ・求人動向・将来性・キャリアパスを実データで徹底解説。",
    url: "https://women-engineer.com/articles/php-career/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性PHPエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
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
    "女性PHPエンジニアの仕事内容・年収・必要スキル・未経験ロードマップ・求人動向・将来性・キャリアパスを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/php-career/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性PHPエンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "会社員のPHPエンジニアの平均年収はおよそ470万〜500万円です。年代別では20代で約373万円、30代で約509万円、40代で約605万円が目安で、経験とともに着実に上がります。フリーランスでは月単価の平均が約70万円台前半、フレームワークのLaravel案件では平均約75万円（年収換算で860万円前後）と高水準です。PHPはスキルと実績で評価される職種で、年収交渉やエージェント活用で適正額を得ることが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもPHPエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。PHPは文法がシンプルで日本語の情報も豊富なため、未経験から最も入りやすい言語の一つです。HTML/CSS・Webの基礎 → PHPの基本文法 → データベースとSQL（MySQL）→ Laravelなどフレームワーク → Git の順で学び、ログインやCRUD機能を備えたWebアプリやWordPressサイトを作るのが王道ルートです。学習期間は1日2〜3時間で半年〜1年が目安。Web制作会社やEC・受託開発には未経験可の求人も多く、スクールやIT特化型エージェントの活用で成功率が上がります。",
      },
    },
    {
      "@type": "Question",
      name: "PHPは時代遅れ・将来性がないと聞きますが本当ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「やめとけ」と言われることもありますが、データは逆です。世界のWebサイトの約4割で使われ、CMSシェア43％超のWordPressもPHP製。求人数でもPHPは主要言語の上位（4位前後）に常に入り、EC・CMS・受託・自社サービスと案件の母数が非常に多い言語です。古い書き方が残る現場がある一方、Laravelによるモダン開発が主流化しており、API設計やクラウドまで担えれば月100万円超の高単価案件も豊富。求人が多い＝働きやすい会社を選びやすいという点で、女性にとってメリットの大きい言語です。",
      },
    },
    {
      "@type": "Question",
      name: "PHPエンジニアは産休・育休後も働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすい職種のひとつです。Web開発はオンラインで完結しやすくフルリモート・フレックス求人が豊富で、PHPは求人の母数が多いぶん「育休実績あり・時短可」といった条件で会社を選びやすいのが強みです。WordPressや受託案件は在宅・副業とも相性が良く、ブランク後の復帰やフリーランス転向もしやすい言語です。ただし企業差は大きいため、産休育休の取得・復帰実績、リモートの運用実態、女性管理職比率は事前に確認しましょう。求人票に出ない実態は女性のキャリアに詳しいエージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "PHP転職におすすめの転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "技術を正当に評価してもらうならIT特化型のレバテックキャリアやGeekly、女性のキャリア継続を重視するならtype女性の転職エージェントがおすすめです。IT特化型はLaravelやWordPress、EC構築などPHPの技術スタックを理解したアドバイザーが多く、年収交渉にも強みがあります。女性特化型は産休育休やリモートなど働き方の条件で求人を絞り込めます。求人母数が多いPHPだからこそ、2〜3社を併用して条件の良い会社を比較するのがベストです。",
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
              { label: "PHPエンジニア転職ガイド" },
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
              女性PHPエンジニア転職ガイド
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. PHPエンジニアとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 女性がPHPで長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 必要なスキルと周辺技術</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. PHPエンジニアの年収相場（年代別・働き方別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 未経験から目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. PHPエンジニアのキャリアパス</a></li>
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
          <h2 className="text-2xl font-bold mb-6">PHPエンジニアとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              PHPエンジニアは、PHPという言語を使ってWebサイトやWebサービスのサーバーサイド（裏側）を開発する職種です。PHPはWeb開発のために生まれた言語で、HTMLに埋め込んで動的なページを作るのが得意。問い合わせフォーム・会員機能・予約システムから、ECサイトや大規模Webサービスまで、幅広い「Webの仕組み」を担当します。
            </p>
            <p>
              中でも代表的なのが、<strong>WordPress</strong>（PHP製のCMSで、世界のWebサイトのCMSシェア43％超）を使ったサイト制作・カスタマイズと、<strong>Laravel</strong>などのモダンなフレームワークを使ったWebサービス・業務システム開発です。EC（ネットショップ）構築、CMS開発、受託開発、自社サービスの機能追加・保守など、案件のバリエーションが非常に豊富なのが特徴です。
            </p>
            <p>
              PHPは文法がシンプルで日本語の学習情報が豊富なため、未経験から最も入りやすい言語の一つとされます。Web制作会社・受託開発・スタートアップなど受け皿が広く、「まずWeb系エンジニアとして手に職をつけたい」という女性の最初の一歩として選ばれることが多い言語です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>PHPエンジニアの主な仕事</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>Webサービス・業務システムのサーバーサイド開発（Laravel / CakePHP / Symfony）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>WordPressサイトの制作・テーマ/プラグイン開発・保守</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>ECサイト（EC-CUBE等）の構築・カスタマイズ</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>会員・予約・問い合わせなど各種機能の実装</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>データベース（MySQL）設計・API開発・外部サービス連携</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>既存システムの保守・機能追加・パフォーマンス改善</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がPHPで長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされますが、Web系の現場はリモートワークや柔軟な働き方が浸透しており、女性が長くキャリアを築きやすい環境が整っています。中でもPHPは「学びやすさ」と「求人の多さ」を兼ね備え、ライフイベントと両立しやすい要素が多い言語です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>1. 学習コストが低く未経験から入りやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">PHPは文法がシンプルで日本語情報が豊富。環境構築も手軽で、未経験者が最初の成功体験を得やすい言語です。異業種からの転職組も多く、心理的なハードルが低いのが魅力です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3aed" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>2. 求人が多く働きやすい会社を選べる</h3>
              <p className="text-text-light text-sm leading-relaxed">PHPは求人数で主要言語の上位に入り、案件の母数が大きい言語。選択肢が多いほど「育休実績あり・リモート可・時短OK」など、女性が条件交渉できる余地が広がります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>3. リモート・在宅・副業と相性が良い</h3>
              <p className="text-text-light text-sm leading-relaxed">WordPress制作や受託開発はオンラインで完結しやすく、フルリモート求人や在宅副業が豊富。通勤負担を減らし、育児・介護と両立しながら働けます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>4. ブランク復帰・フリーランス転向がしやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">PHPは案件数が多くWordPress等の保守需要も安定しているため、出産・育児でブランクが空いても復帰先を見つけやすい言語。在宅フリーランスとしてライフステージに合わせた働き方も選べます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 スキル */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルと周辺技術</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              PHPエンジニアは複数のスキルを組み合わせますが、すべてを最初から完璧にする必要はありません。まず<strong>PHPの基本文法</strong>とデータベースを扱えるようになり、そこに<strong>Laravel</strong>を加えるのが、市場価値を高める王道の順番です。
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
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>PHP本体</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>変数・配列・関数・クラス（PHP 8系）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>まずはここを確実に。PHP 8系のモダンな書き方を学ぶ</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>フレームワーク</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Laravel / CakePHP / Symfony</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>実務はLaravelが主流。最も高単価につながりやすい</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>データベース / SQL</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>MySQL / MariaDB / PostgreSQL</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>テーブル設計とSQLはWeb開発の中核スキル</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>フロント・Web基礎</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>HTML / CSS / JavaScript / HTTP</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>WordPressや画面実装で必須。フルスタックへの土台に</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>CMS / EC</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>WordPress / EC-CUBE</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>案件数が多く、未経験の入口になりやすい領域</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>開発環境 / インフラ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Git / Docker / Linux / AWS</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Gitは必須。クラウド経験は年収アップに直結</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            2026年時点では、<strong>Laravelによるモダン開発</strong>や<strong>API設計・AWS等のクラウド構築</strong>まで担えるPHPエンジニアの需要が高く、これらを扱えると単価・年収が大きく上がる傾向です。WordPress一本よりも「PHP＋Laravel＋クラウド」へ広げるとキャリアの幅が広がります。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">PHPエンジニアの年収相場（年代別・働き方別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              会社員PHPエンジニアの平均年収はおよそ<strong>470万〜500万円</strong>。年代・経験・扱う技術（Laravelやクラウドの有無）で差が出ます。下表は各種調査をもとにした目安です（企業・地域・スキルにより変動します）。
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
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約373万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>新卒・若手は300万円台からスタート</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約509万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Laravel・設計経験で上振れ</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約605万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>リーダー・管理職で600万円超</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>フリーランス</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>月単価 約70万円台〜</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Laravel案件は平均約75万円。上流・クラウドで月100万円超も</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>Laravelを深める</strong>。保守中心から新規開発・設計へ移ると単価が跳ね上がる</li>
              <li>② <strong>API設計・クラウド（AWS/GCP）</strong>の経験を積む。月100万円超の案件も視野に</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。求人母数の多いPHPは比較で適正額を引き出しやすい</li>
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
              「PHPはオワコン」と言われることもありますが、実態は逆です。PHPは求人数で主要プログラミング言語の上位（4位前後）に常に入り、Indeedでは「PHP Laravel」だけで数千件規模の求人が出るなど、案件の母数が圧倒的に多い言語です。Web制作・EC・受託・自社サービスと受け皿が広く、未経験可の求人も豊富です。
            </p>
            <p>
              将来性の根拠もはっきりしています。世界のWebサイトの約8割がサーバーサイドにPHPを採用し、<strong>CMSシェア43％超のWordPress</strong>もPHP製。WordPressやECサイトが使われ続ける限り、制作・保守・機能追加の仕事はなくなりません。さらに近年は<strong>Laravelによるモダンな自社サービス開発</strong>が増え、API設計やクラウドまで担える人材は希少で高単価。「学びやすい入口」と「伸ばせる天井」を両立できるのがPHPの強みです。
            </p>
            <p>
              女性視点で見ると、求人が多いほど「リモート可・育休実績あり・時短OK」といった働きやすい会社を選びやすくなります。母数の多さは、そのまま条件交渉のしやすさにつながります。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 未経験ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>1日2〜3時間の学習で<strong>半年〜1年</strong>が一つの目安。PHPは情報が多く、次の順序で進めると挫折しにくいです。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "HTML/CSSとWebの基礎を知る", "Webの仕組み（リクエスト/レスポンス、サーバーとは）と画面を作るHTML/CSSを理解。全体像をつかむと後が楽になります。"],
              ["STEP2", "PHPの基本文法を習得する", "変数・配列・条件分岐・関数・クラスまで。フォーム処理など簡単な動的ページを作れるように。PHP 8系のモダンな書き方で学ぶのがおすすめ。"],
              ["STEP3", "データベースとSQLを学ぶ", "MySQLでのテーブル設計とSQL（検索・追加・更新）。PHPからDBを操作してデータを保存・表示できるように。"],
              ["STEP4", "Laravelを習得する", "実務で主流のフレームワーク。ルーティング・MVC・Eloquentを学び、会員機能付きのWebアプリを動かせるように。市場価値が大きく上がります。"],
              ["STEP5", "Git・基本的なクラウド", "Gitでのコード管理は必須。DockerやAWSに少し触れておくと、評価される現場の幅が広がります。"],
              ["STEP6", "ポートフォリオを作る", "ログイン＋CRUD＋APIを備えた小さなWebアプリや、自作WordPressサイトを公開。未経験の転職活動で最も効く実績になります。"],
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
          <h2 className="text-2xl font-bold mb-6">PHPエンジニアのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>PHPは入口が広く、その後の進路も多彩です。Web開発の経験を軸に、技術・マネジメント・領域拡大・独立など幅広い選択肢があります。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>技術を深める</h3><p className="text-sm text-text-light">Laravelのスペシャリスト → テックリード／Webアーキテクト。設計・大規模Webサービスの専門家として高年収を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>マネジメント</h3><p className="text-sm text-text-light">プロジェクトマネージャー（PM）／エンジニアリングマネージャー。チームや開発プロセスをリードする道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>領域を広げる</h3><p className="text-sm text-text-light">フロント（JavaScript/React）を足してフルスタックへ、あるいはクラウド・インフラへ。市場価値を掛け合わせる道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>独立・柔軟な働き方</h3><p className="text-sm text-text-light">WordPress制作やLaravel案件のフリーランスへ。在宅・副業からの独立もしやすく、ライフステージに合わせやすい。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>PHPの技術を正当に評価してもらうには、IT特化型と女性特化型の併用が効果的です。求人母数が多いPHPだからこそ、複数社で条件を比較しましょう。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。LaravelやWordPress、EC構築などPHPの技術スタックを理解したアドバイザーが、適切な求人を提案してくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。Web系の案件に明るく、スピーディーなマッチングと年収交渉力に定評があります。</p>
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
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Aさん（20代後半・未経験→PHP/WordPress）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">アパレル販売（IT未経験）/ 年収300万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}><p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p><p className="text-sm font-bold">Web制作会社のPHPエンジニア / 年収380万円・週2在宅</p></div>
              </div>
              <p className="text-sm text-text-light">独学＋スクールでPHPとWordPressを学び、自作のWordPressサイトと簡単なCRUDアプリをポートフォリオに。未経験可の求人が多いPHPの強みを活かし、在宅も取り入れられる制作会社に転職しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Bさん（30代前半・受託PHP→Laravel自社開発）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">受託開発のPHPエンジニア / 年収430万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}><p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p><p className="text-sm font-bold">SaaS企業のLaravelエンジニア / 年収580万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">IT特化型エージェントの助言でLaravelとAWSの実績を整理。保守中心から新規開発・API設計に軸足を移し、年収150万円アップとフルリモートを同時に実現。育休実績のある環境で長く働ける基盤を得ました。</p>
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
            <a href="/articles/backend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>バックエンドエンジニア転職ガイド</h3><p className="text-sm text-text-light">PHPも含むサーバーサイドの全体像</p></a>
            <a href="/articles/web-industry/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>Web業界への転職ガイド</h3><p className="text-sm text-text-light">PHPが活躍するWeb系の働き方</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>未経験からエンジニア転職</h3><p className="text-sm text-text-light">学びやすいPHPで踏み出す第一歩</p></a>
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
