import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性バックエンドエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
  description:
    "女性バックエンドエンジニアの転職ガイド。平均年収（20代460万〜40代558万）や必要な言語・スキル、未経験からのロードマップ、求人動向、キャリアパスを実データで解説。長く働きやすい理由とおすすめ転職エージェントも紹介します。",
  alternates: { canonical: "/articles/backend/" },
  openGraph: {
    title: "女性バックエンドエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
    description:
      "女性バックエンドエンジニアの年収・必要スキル・未経験からのロードマップ・求人動向・キャリアパスを実データで徹底解説。",
    url: "https://women-engineer.com/articles/backend/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性バックエンドエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
  datePublished: "2026-06-10",
  dateModified: "2026-07-09",
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
    "女性バックエンドエンジニアの年収・必要スキル・未経験からのロードマップ・求人動向・キャリアパスを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/backend/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性バックエンドエンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "バックエンドエンジニア全体の平均年収はおよそ500万〜520万円です。年代別では20代で約460万円、30代で約560万円、40代で約558万円が目安で、経験とともに上がっていきます。フリーランスでは月単価の平均が約76万円（年収換算で900万円前後）と高く、PythonやGoなど需要の高い言語を扱えると単価がさらに上がる傾向です。性別による給与差はスキルと経験で埋められる職種で、年収交渉やエージェント活用で適正額を得ることが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもバックエンドエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。Web/HTTPの基礎 → プログラミング言語を1つ（Python・Ruby・PHPが学習しやすい）→ データベースとSQL → フレームワーク → Git・基本的なクラウドの順で学び、APIやCRUD機能を作るポートフォリオを用意するのが王道ルートです。学習期間は1日2〜3時間で半年〜1年が目安。未経験可の求人やポテンシャル採用もあり、スクールやIT特化型エージェントの活用で転職成功率が上がります。",
      },
    },
    {
      "@type": "Question",
      name: "バックエンドとフロントエンドはどちらが女性に向いていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "向き不向きは個人差が大きく、どちらが女性向きとは一概に言えません。目に見えるUIを作りたい人はフロントエンド、データ設計やロジック・仕組みづくりに面白さを感じる人はバックエンドが向いています。バックエンドはトレンドの移り変わりが比較的緩やかでスキルが長く活きやすく、設計力が評価されるため、ライフイベントでブランクが生じても復帰しやすいという声もあります。",
      },
    },
    {
      "@type": "Question",
      name: "バックエンドエンジニアは産休・育休後も働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすい職種のひとつです。リモートワークやフレックスを導入する企業が多く、成果が可視化されやすいため時短勤務とも両立しやすいのが特徴です。ただし企業差が大きいため、産休育休の取得実績・復帰率、リモートの運用実態、女性管理職比率などを事前に確認しましょう。求人票に出ない実態は、女性のキャリアに詳しいエージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "バックエンド転職におすすめの転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "技術を正当に評価してもらうならIT特化型のレバテックキャリアやGeekly、女性のキャリア継続を重視するならtype女性の転職エージェントがおすすめです。IT特化型はバックエンドの技術スタックを理解したアドバイザーが多く、年収交渉にも強みがあります。女性特化型は産休育休やリモートなど働き方の条件で求人を絞り込めます。2〜3社の併用がベストです。",
      },
    },
    {
      "@type": "Question",
      name: "バックエンドエンジニアに夜間対応（オンコール）はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "サービスの本番障害に備えるオンコール（呼び出し待機）当番を設けている企業はあります。ただし運用は企業差が大きく、SREや運用チームが一次対応を担い開発者はほとんど呼ばれない体制から、開発者が輪番で待機する体制までさまざまです。深夜リリースの有無も含め、応募時に『障害対応・リリースの体制』を確認しましょう。育児中はオンコール当番の免除・調整に応じる企業もあるため、面談で相談する価値があります。",
      },
    },
    {
      "@type": "Question",
      name: "時短勤務でもバックエンドエンジニアとして評価されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "評価されやすい傾向のある職種です。実装した機能・コード・改善した処理速度など成果が客観的に残るため、一般に労働時間の長さではなくアウトプットで評価されやすいとされます。プルリクエストやドキュメントなど非同期のテキストコミュニケーションが中心の開発チームであれば、勤務時間帯のズレも吸収しやすい環境です。ただし評価制度の実態は企業差が大きいため、時短勤務者の在籍実績や評価の仕組みを事前に確認するのがおすすめです。",
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
              { label: "バックエンドエンジニア転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              職種別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性バックエンドエンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収・必要スキル・未経験からの道のりを実データで解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月9日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. バックエンドエンジニアとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 女性がバックエンドで長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 必要なスキルと言語</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. バックエンドの年収相場（年代別・言語別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験から目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. バックエンドのキャリアパス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec-women" className="hover:underline" style={{ color: "#7c3a55" }}>10. 女性がバックエンドエンジニアとして働くリアル</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>11. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">バックエンドエンジニアとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              バックエンドエンジニアは、Webサービスやアプリの「裏側」――サーバー・データベース・API・業務ロジックを設計・開発する職種です。ユーザーの目に直接触れる画面（フロントエンド）に対し、データの保存・取得・認証・決済処理・外部連携など、サービスを支える仕組みを担当します。
            </p>
            <p>
              具体的な業務は、(1)サーバーサイドのプログラム開発、(2)データベースの設計・運用、(3)API（アプリ間でデータをやり取りする窓口）の設計・実装、(4)パフォーマンスやセキュリティの担保、(5)クラウド環境の構築・運用など。フロントエンドと連携しながら、1つのサービスを形にしていきます。
            </p>
            <p>
              フロントエンドが「見た目・使い心地」を作るのに対し、バックエンドは「データの正確さ・処理速度・安全性」という、サービスの信頼性そのものを支える役割です。トレンドの移り変わりが比較的緩やかで、設計・データモデリングの考え方は長く通用するため、スキルが資産になりやすいのも特徴です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>バックエンドの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>サーバーサイド開発（Python / Ruby / PHP / Java / Go など）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>データベース設計・SQL（MySQL / PostgreSQL など）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>API設計・実装（REST / GraphQL）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>認証・決済・外部サービス連携</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>クラウド（AWS / GCP / Azure）でのインフラ構築・運用</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>セキュリティ・パフォーマンスチューニング</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がバックエンドで長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされますが、ダイバーシティ推進やリモートワークの普及で、女性が長くキャリアを築ける環境は年々整っています。中でもバックエンドは、ライフイベントと両立しやすい要素が多い職種です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. リモート・フレックスと相性が良い</h3>
              <p className="text-text-light text-sm leading-relaxed">サーバーサイド開発はオンラインで完結しやすく、フルリモート求人が豊富。通勤負担を減らし、育児・介護と両立しながら働きやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 成果が可視化され時短でも評価されやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">担当機能・コード・改善した処理速度などが客観的に残るため、勤務時間の長さではなく成果で評価されやすく、時短勤務でも実力が認められます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. スキルが長く通用しブランク復帰しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">DB設計やAPI設計などの「考え方」は流行に左右されにくく、一度身につければ長く武器になります。産休育休でブランクが空いても復帰しやすい土台になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 需要が高く転職の選択肢が多い</h3>
              <p className="text-text-light text-sm leading-relaxed">あらゆる業界のDXでサーバーサイド人材は不足気味。求人が多いほど「働きやすい会社」を選びやすく、女性が条件交渉できる余地も大きくなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 スキルと言語 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルと言語</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              バックエンドは複数のスキルを組み合わせる職種ですが、すべてを最初から完璧にする必要はありません。まず<strong>言語を1つ深く</strong>習得し、データベースを扱えるようになることが土台です。
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
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>プログラミング言語</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Python / Ruby / PHP / Java / Go / Node.js</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>未経験はPython・Ruby・PHPが学びやすい。Python・Goは高単価傾向</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データベース / SQL</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>MySQL / PostgreSQL / Oracle</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>テーブル設計とSQLはバックエンドの中核スキル</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フレームワーク</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Django / Ruby on Rails / Laravel / Spring</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>言語に対応したものを1つ。開発効率が大きく上がる</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>API・Web基礎</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>REST / GraphQL / HTTP / 認証</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>フロントや外部サービスとの連携に必須</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>インフラ / クラウド</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>AWS / GCP / Docker / Git</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>クラウド経験は年収アップに直結。Gitは必須</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            2026年時点では、<strong>Python（AI・データ活用・LLM/RAG開発）</strong>と<strong>Go（マイクロサービス・SaaS）</strong>の需要が特に高く、これらを扱えると単価・年収が上がりやすい傾向です。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">バックエンドの年収相場（年代別・言語別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              バックエンドエンジニア全体の平均年収はおよそ<strong>500万〜520万円</strong>。年代・経験・扱う言語で差が出ます。下表は各種調査をもとにした目安です（企業・地域・スキルにより変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約460万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>最高744万円程度</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約561万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>最高840万円程度</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約558万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>最高803万円程度</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月単価 約76万円〜</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>年収換算900万円前後。上流・高需要言語で上振れ</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>高需要言語</strong>（Python×AI、Go×マイクロサービス）を扱えるようにする</li>
              <li>② <strong>クラウド・設計（上流）</strong>の経験を積む（AWS/アーキテクチャ設計）</li>
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
              企業のDX化が全業界で進み、Webサービス・SaaS・業務システムを支えるバックエンド人材は慢性的に不足しています。経済産業省もIT人材の不足を指摘しており、バックエンドの需要・将来性は高い水準が続く見込みです。
            </p>
            <p>
              特に伸びているのは、<strong>SaaS・スタートアップ（Go/Pythonでのマイクロサービス）</strong>と、<strong>AI・データ活用領域（PythonでのLLM/RAG・データ基盤）</strong>。これらはリモート求人も多く、女性が働き方を選びやすい領域です。一方で、要件定義・設計（上流）やクラウドを担える人材は希少で、年収も高くなります。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 未経験ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>1日2〜3時間の学習で<strong>半年〜1年</strong>が一つの目安。次の順序で進めると挫折しにくいです。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "Web・HTTPの基礎を知る", "Webの仕組み（リクエスト/レスポンス、サーバーとは）を理解。最初に全体像をつかむと後が楽になります。"],
              ["STEP2", "言語を1つ習得する", "未経験はPython・Ruby・PHPが学びやすい。基本文法→簡単なプログラム作成まで。あれこれ手を出さず1つに集中。"],
              ["STEP3", "データベースとSQLを学ぶ", "テーブル設計とSQL（検索・追加・更新）。バックエンドの中核なので丁寧に。"],
              ["STEP4", "フレームワークを習得", "Django / Rails / Laravel など言語に対応したものを1つ。Webアプリを動かせるように。"],
              ["STEP5", "Git・基本的なクラウド", "Gitでのコード管理は必須。AWSなどクラウドに少し触れておくと評価が上がります。"],
              ["STEP6", "ポートフォリオを作る", "ログイン機能やCRUD・APIを備えた小さなWebアプリを公開。転職活動で最も効く実績になります。"],
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
          <h2 className="text-2xl font-bold mb-6">バックエンドのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>バックエンドは「設計力」が積み上がる職種で、キャリアの選択肢が広いのが魅力です。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>技術を深める</h3><p className="text-sm text-text-light">テックリード → ソフトウェアアーキテクト／SRE。設計・大規模システムの専門家として高年収を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>マネジメント</h3><p className="text-sm text-text-light">エンジニアリングマネージャー（EM）／PM。チームや開発プロセスをリードする道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>領域を広げる</h3><p className="text-sm text-text-light">フルスタック／データエンジニア／クラウドエンジニアへ。市場価値の高いスキルを掛け合わせる道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>独立・柔軟な働き方</h3><p className="text-sm text-text-light">フリーランスとして高単価案件・リモート中心の働き方へ。ライフステージに合わせやすい。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>バックエンドの技術を正当に評価してもらうには、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーがバックエンドの技術スタックを理解した提案をしてくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと年収交渉力に定評があります。</p>
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
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Aさん（30代前半・PHP→Go）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">受託開発のPHPエンジニア / 年収420万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SaaS企業のバックエンド（Go）/ 年収600万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">IT特化型エージェントでGoの学習実績とポートフォリオを整理。需要の高い言語に軸足を移し、年収180万円アップとフルリモートを同時に実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Bさん（20代後半・未経験→Python）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">事務職（IT未経験）/ 年収320万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">自社開発企業のバックエンド（Python）/ 年収430万円</p></div>
              </div>
              <p className="text-sm text-text-light">独学＋スクールでPython/Djangoを学び、CRUD＋API付きのポートフォリオを公開。未経験可の自社開発企業に転職し、産休育休実績のある環境で長く働ける基盤を得ました。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 女性が働くリアル */}
      <section id="sec-women" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がバックエンドエンジニアとして働くリアル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              2章で「長く働きやすい理由」を紹介しましたが、ここでは実際に働くうえで気になる「夜間対応の有無」「産休育休との相性」「現実的な注意点」まで、一歩踏み込んで一般的な傾向を正直に整理します（実態は企業ごとに差が大きいため、最終的には個別の企業で確認してください）。
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>① 働き方との相性（リモート・夜間対応・体力面）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                バックエンド開発はコードを書く・レビューする作業がオンラインで完結しやすく、一般にリモートワークとの相性が良い職種です。体力面もデスクワーク中心で、力仕事はほぼありません。一方で正直に触れておきたいのが、本番サービスの障害に備える<strong>オンコール（呼び出し待機）当番や深夜リリース</strong>の存在です。運用チームが一次対応を担い開発者はほぼ呼ばれない企業もあれば、開発者が輪番で待機する企業もあり、体制次第で負担が大きく変わります。応募時には「障害対応とリリースの体制」を必ず確認しましょう。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>② 産休育休・時短との相性</h3>
              <p className="text-sm text-text-light leading-relaxed">
                バックエンド開発には、コードレビュー・プルリクエスト・設計ドキュメントといった「仕事の中身をテキストで残す」文化が根付きやすく、業務の属人性を下げやすい傾向があります。担当機能の引き継ぎもコードとドキュメントを軸に進められるため、一般に産休育休の計画は立てやすい仕事です。復帰後も、DB設計やAPI設計といった中核スキルは流行に左右されにくく、ブランクで価値が落ちにくいのが強み。成果がアウトプットで残るため、時短勤務でも評価されやすい傾向です。ただし時短の評価運用は企業差が大きいため、時短勤務者の在籍実績を確認しておくと安心です。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>③ バックエンドからのキャリアパス</h3>
              <p className="text-sm text-text-light leading-relaxed">
                7章で紹介したテックリード・アーキテクト・EMの道に加え、女性のキャリア設計の観点では「働き方を軸にした転向」も選択肢です。データベースやSQLの経験を活かして<a href="/articles/data-engineer/" className="underline" style={{ color: "#7c3a55" }}>データエンジニア</a>へ広げる道は市場価値を高めやすく、腰を据えた働き方を重視するなら<a href="/articles/internal-se/" className="underline" style={{ color: "#7c3a55" }}>社内SE</a>へ移る道もあります。開発経験はどちらでも強く評価されるため、「バックエンドで数年経験を積むこと」自体が将来の選択肢を増やす投資になります。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>④ 現実的な注意点</h3>
              <p className="text-sm text-text-light leading-relaxed">
                正直な注意点は3つ。(1)技術の学習を続けることが前提の職種で、業務外のキャッチアップ時間をどれだけ確保できるかが長期的な差になりやすい、(2)オンコールや障害対応の負担は企業差が大きく、求人票だけでは分からない、(3)開発チームの女性比率が低い職場もあり、ロールモデルの有無やチーム構成は面談・カジュアル面談で確認する価値がある、という点です。年収や需給の具体的な数値は、<a href="/articles/salary-by-job/" className="underline" style={{ color: "#7c3a55" }}>職種別年収ガイド</a>・<a href="/articles/data/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアのデータ集</a>・<a href="/articles/demand/" className="underline" style={{ color: "#7c3a55" }}>需要と将来性のデータ</a>で出典付きで確認できます。
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">自分に合った働き方から探すなら</p>
            <p className="text-sm text-text-light mb-4">8つの質問で相性の良い転職エージェントがわかる無料診断も活用してください。</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/diagnosis/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#7c3a55" }}>無料エージェント診断を試す</a>
              <a href="/ranking/" className="inline-block rounded-full px-8 py-3 font-bold transition-transform hover:scale-105" style={{ border: "2px solid #7c3a55", color: "#7c3a55" }}>ランキングを見る</a>
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
            <a href="/articles/python-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>Pythonエンジニアのキャリア</h3><p className="text-sm text-text-light">需要の高いPythonで広がる道</p></a>
            <a href="/articles/infrastructure/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>インフラエンジニア転職ガイド</h3><p className="text-sm text-text-light">クラウド時代の安定職種</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/frontend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>フロントエンドエンジニア転職ガイド</h3><p className="text-sm text-text-light">バックエンドとの違いも解説</p></a>
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
