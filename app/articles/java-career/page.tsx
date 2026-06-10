import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性Javaエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
  description:
    "女性Javaエンジニアの転職ガイド。平均年収（20代約430万〜40代約580万）や必要スキル（Java・Spring・SQL・設計）、未経験からのロードマップ、求人動向と将来性、キャリアパスを実データで解説。金融・大規模業務系で長く働きやすい理由とおすすめ転職エージェントも紹介します。",
  alternates: { canonical: "/articles/java-career/" },
  openGraph: {
    title: "女性Javaエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
    description:
      "女性Javaエンジニアの年収・必要スキル・未経験からのロードマップ・求人動向・キャリアパスを実データで徹底解説。",
    url: "https://women-engineer.com/articles/java-career/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性Javaエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
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
    "女性Javaエンジニアの年収・必要スキル・未経験からのロードマップ・求人動向・キャリアパスを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/java-career/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性Javaエンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Javaエンジニアの平均年収はおよそ450万〜520万円が目安です。年代別では20代で約430万円、30代で約520万円、40代で約580万円と、経験とともに上がっていきます。Javaは金融・保険・通信などの大規模・基幹システムで使われることが多く、上流工程（設計・要件定義）を担える人材は年収700万円以上も狙えます。フリーランスでは月単価60万〜80万円がボリュームゾーンで、年収換算800万〜960万円。性別による給与差はスキルと経験で埋められる職種なので、年収交渉やエージェント活用で適正額を得ることが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもJavaエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。Javaの基本文法 → オブジェクト指向 → データベースとSQL → Spring Boot（フレームワーク）→ Git・ターミナル操作の順で学び、ログイン機能やCRUDを備えたWebアプリのポートフォリオを用意するのが王道ルートです。1日2〜3時間の学習で半年〜1年が目安。途中でJava Silver（Oracle認定資格）を取ると、未経験でも一定のスキルを客観的に証明でき、書類選考で有利になります。Javaは未経験可・研修ありの求人が多く、SIerや業務系開発の入り口として狙いやすい言語です。",
      },
    },
    {
      "@type": "Question",
      name: "Javaは将来性がない言語と聞きましたが本当ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "誤解です。Javaは求人数で常にトップクラスを維持し、フリーランス案件でも数万件規模で安定して存在します。日本の基幹システムの多くがJavaで構築されており、銀行の勘定系、保険の契約管理、通信キャリアの顧客基盤など「止められないシステム」を支えています。近年はこれら大規模システムをマイクロサービスへ移行するプロジェクトが増え、Spring Bootを扱えるエンジニアの需要はむしろ高まっています。学習者が多く情報も豊富なので、未経験から始める言語としても適しています。",
      },
    },
    {
      "@type": "Question",
      name: "Javaエンジニアは産休・育休後も働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすい職種のひとつです。Javaが使われる金融・大手SIer・自社開発企業は福利厚生が手厚く、産休育休や時短勤務の制度が整っている企業が多いのが特徴です。Javaと設計のスキルは流行に左右されにくく長く通用するため、ブランクが空いても復帰しやすいという声もあります。ただし企業差が大きいため、産休育休の取得実績・復帰率、リモートの運用実態、女性管理職比率などを事前に確認しましょう。求人票に出ない実態は、女性のキャリアに詳しいエージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "Java転職におすすめの転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "技術を正当に評価してもらうならIT特化型のレバテックキャリアやGeekly、女性のキャリア継続を重視するならtype女性の転職エージェントがおすすめです。IT特化型はJava・Springの技術スタックや上流工程の経験を理解したアドバイザーが多く、年収交渉にも強みがあります。女性特化型は産休育休やリモートなど働き方の条件で求人を絞り込めます。Javaは大手・金融系の求人も多いため、2〜3社を併用して幅広く比較するのがベストです。",
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
              { label: "Javaエンジニア転職ガイド" },
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
              女性Javaエンジニア転職ガイド
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. Javaエンジニアとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 女性がJavaで長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 必要なスキルと知識</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. Javaエンジニアの年収相場（年代別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 未経験から目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. Javaエンジニアのキャリアパス</a></li>
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
          <h2 className="text-2xl font-bold mb-6">Javaエンジニアとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Javaエンジニアは、プログラミング言語Javaを用いて業務システムやWebアプリケーション、大規模な基幹システムを設計・開発する職種です。1990年代に登場したJavaは「一度書けばどこでも動く」という特性と高い安定性から、銀行の勘定系、保険会社の契約管理、通信キャリアの顧客基盤といった「絶対に止められないシステム」で長年採用されてきました。
            </p>
            <p>
              具体的な業務は、(1)サーバーサイドのプログラム開発、(2)Spring / Spring Bootを使ったWeb・APIの実装、(3)データベース設計とSQL、(4)要件定義・基本設計・詳細設計といった上流工程、(5)テスト・保守・運用など。プロジェクトはチーム開発が基本で、フロントエンドやインフラの担当者と連携しながら、1つの大きなシステムを形にしていきます。
            </p>
            <p>
              Javaは金融・公共・大手メーカーなど<strong>堅実な業界の大規模システム</strong>で使われることが多く、納期や品質管理がしっかりしている現場が多いのが特徴です。設計やオブジェクト指向の考え方は流行に左右されにくく、一度身につければ長く通用するため、スキルが資産になりやすい言語です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>Javaエンジニアの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>業務系・基幹システム開発（金融・保険・通信・公共）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>Spring / Spring Boot を使ったWeb・API開発</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>データベース設計・SQL（Oracle / MySQL / PostgreSQL）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>要件定義・基本設計・詳細設計などの上流工程</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>大規模システムのマイクロサービス化・クラウド移行（AWS）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>テスト・保守・運用、Androidアプリ開発（Kotlin併用）</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がJavaで長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされますが、Javaが活躍する金融・大手SIer・自社開発企業は制度が整っている企業が多く、女性が長くキャリアを築きやすい環境がそろっています。Javaならではの「働きやすさ」を4つの観点で見てみましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>1. 大手・金融系は福利厚生と制度が手厚い</h3>
              <p className="text-text-light text-sm leading-relaxed">Javaは銀行・保険・大手メーカーなど安定した企業で使われることが多く、産休育休・時短勤務・復帰支援などの制度が整った職場が豊富。ライフイベントと両立しながら働きやすい環境です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>2. スキルが長く通用しブランク復帰しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">JavaとSpring、設計の考え方は20年以上現役で、トレンドの移り変わりが緩やか。一度身につければ長く武器になり、産休育休でブランクが空いても復帰しやすい土台になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>3. 計画的に進む現場が多く予定を立てやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">大規模システム開発はスケジュール・品質管理がしっかりしており、突発的な徹夜が比較的少なめ。お迎えや家庭の予定を組みやすく、ワークライフバランスを保ちやすい現場が多いのも魅力です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>4. 求人数が多く転職の選択肢が豊富</h3>
              <p className="text-text-light text-sm leading-relaxed">Javaは求人数で常にトップクラス。選択肢が多いほど「働きやすい会社」を選びやすく、リモートや時短など女性が条件交渉できる余地も大きくなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 スキルと知識 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルと知識</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Javaエンジニアは複数のスキルを組み合わせる職種ですが、すべてを最初から完璧にする必要はありません。まず<strong>Javaの文法とオブジェクト指向</strong>を固め、データベースとSpringを扱えるようになることが土台です。
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
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>Java言語・オブジェクト指向</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>基本構文 / クラス / 継承 / インターフェース / 例外処理</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>オブジェクト指向の理解がJavaの核。ここが最重要</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>フレームワーク</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Spring / Spring Boot / Spring MVC</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Java案件の主流。Springが扱えると案件が一気に広がる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>データベース / SQL</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Oracle / MySQL / PostgreSQL / JPA</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>業務系では必須。テーブル設計とSQLは中核スキル</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>設計・上流工程</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>要件定義 / 基本設計 / 詳細設計 / UML</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>上流を担えると年収が大きく上がる。長く活きるスキル</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>ツール / クラウド</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Git / Maven・Gradle / Docker / AWS</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Gitは必須。クラウド移行案件の増加でAWS経験が評価される</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            スキルを客観的に示すなら、Oracle認定の<strong>Java Silver（中級の入口・転職で評価されやすい）</strong>、実務3年以上なら<strong>Java Gold</strong>の取得が有効。未経験者がJava Silverを取ると、書類選考でスキルレベルを証明でき通過率が上がります。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Javaエンジニアの年収相場（年代別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Javaエンジニアの平均年収はおよそ<strong>450万〜520万円</strong>。年代・経験・担当工程で差が出ます。下表は各種調査をもとにした目安です（企業・地域・スキルにより変動します）。
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
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約430万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>未経験・研修ありの入口求人が多い</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約520万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>設計・リーダーで600万円超も</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約580万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>上流・PM経験で700万円以上</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>フリーランス</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>月単価 60万〜80万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>年収換算800万〜960万円。上流・AWSで100万円超も</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>上流工程（設計・要件定義）</strong>を担えるようになる。Javaは上流の評価が高い</li>
              <li>② <strong>Spring Boot＋クラウド（AWS）</strong>のスキルを足す。マイクロサービス移行案件で高単価</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。金融・大手の好待遇求人を客観評価してもらう</li>
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
              「Javaはもう古い」という声を聞くことがありますが、実態は逆です。Javaは<strong>求人数で常にトップクラス</strong>を維持し、フリーランス案件でも数万件規模で安定して存在します。日本の基幹システムの多くがJavaで構築されており、銀行の勘定系・保険の契約管理・通信キャリアの顧客基盤といった巨大システムを支え続けています。
            </p>
            <p>
              近年特に増えているのが、メガバンクや証券会社の勘定系システムを、レガシーなモノリシック構造から<strong>マイクロサービスへ移行する大規模プロジェクト</strong>です。この流れでSpring Bootを扱えるエンジニアの需要はむしろ高まっており、金融・通信業界がJavaを選び続ける理由になっています。経済産業省もIT人材の慢性的な不足を指摘しており、Javaの需要・将来性は高い水準が続く見込みです。
            </p>
            <p>
              さらにJavaはAndroidアプリ開発（Kotlinと併用）でも使われ、応用範囲が広いのも強み。学習者が多く情報も豊富なため、未経験から始めて求人の多い領域でキャリアを築ける、堅実で「食いっぱぐれにくい」言語と言えます。
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
              ["STEP1", "Javaの基本文法を学ぶ", "変数・データ型・for文・条件分岐など、プログラムの基礎を習得。最初の20〜50時間で文法に慣れることが土台になります。"],
              ["STEP2", "オブジェクト指向を理解する", "クラス・継承・インターフェースなどJavaの核となる考え方をマスター。ここが他言語より少し難しいポイントなので丁寧に。"],
              ["STEP3", "データベースとSQLを学ぶ", "テーブル設計とSQL（検索・追加・更新）。業務系Javaでは必須なので、簡単なデータ操作まで手を動かして学びます。"],
              ["STEP4", "Spring Bootを習得する", "Java案件の主流フレームワーク。Spring Bootで簡単なWebアプリやAPIを動かせるようにすると、実務レベルに近づきます。"],
              ["STEP5", "Git・ターミナル操作を学ぶ", "Gitでのコード管理は開発現場で必須。基本的なコマンド操作とブランチの使い方を押さえておきます。"],
              ["STEP6", "ポートフォリオを作る／Java Silver取得", "ログイン機能やCRUD・API付きのWebアプリを公開。並行してJava Silverを取ると、未経験でもスキルを証明でき選考通過率が上がります。"],
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
          <h2 className="text-2xl font-bold mb-6">Javaエンジニアのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>Javaは「設計力」と「上流工程」が積み上がる職種で、キャリアの選択肢が広いのが魅力です。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>上流・設計を極める</h3><p className="text-sm text-text-light">システムアーキテクト／テックリードへ。大規模システムの設計を担い、高年収を狙う王道ルート。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>マネジメント</h3><p className="text-sm text-text-light">プロジェクトマネージャー（PM）／PL。大規模開発のチームと進捗をリードする道。Java現場で需要が高い。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>領域を広げる</h3><p className="text-sm text-text-light">クラウドエンジニア／フルスタックへ。Spring Boot＋AWSでマイクロサービス移行案件の中心人材に。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>独立・柔軟な働き方</h3><p className="text-sm text-text-light">フリーランスとして月単価60万〜80万円の安定案件へ。Java案件は数が多く、ライフステージに合わせやすい。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>Javaの技術と上流工程の経験を正当に評価してもらうには、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーがJava・Springの技術スタックや上流工程の経験を理解した提案をしてくれます。金融・大手の好待遇求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。Java案件のマッチング精度が高く、スピーディーな選考と年収交渉力に定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。福利厚生の手厚いJava企業を働き方の条件で絞り込みたい人に最適です。</p>
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
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Aさん（30代前半・SES Java→金融系自社開発）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SESのJavaプログラマー / 年収440万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}><p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p><p className="text-sm font-bold">金融系企業の自社開発（Spring Boot）/ 年収620万円・産休実績あり</p></div>
              </div>
              <p className="text-sm text-text-light">IT特化型エージェントでSpring Bootと基本設計の経験を整理。上流工程に踏み込める金融系の自社開発に移り、年収180万円アップと、将来の出産も見据えた制度の整った環境を同時に手に入れました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Bさん（20代後半・未経験→Java）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">販売職（IT未経験）/ 年収310万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}><p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p><p className="text-sm font-bold">SIerのJavaエンジニア（研修あり）/ 年収400万円</p></div>
              </div>
              <p className="text-sm text-text-light">独学＋スクールでJava・Spring Bootを学び、Java Silverを取得。CRUD＋API付きのWebアプリを公開し、研修制度の整った業務系SIerに転職。育休からの復帰実績がある現場で、長く働ける基盤を得ました。</p>
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
            <a href="/articles/backend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>バックエンドエンジニア転職ガイド</h3><p className="text-sm text-text-light">Javaも含むサーバーサイドの全体像</p></a>
            <a href="/articles/sier-industry/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>SIer業界の転職ガイド</h3><p className="text-sm text-text-light">Javaが活躍する大規模開発の世界</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>エンジニアの資格ガイド</h3><p className="text-sm text-text-light">Java Silver/Goldなど転職に効く資格</p></a>
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
