import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性Rubyエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
  description:
    "女性Rubyエンジニア（Ruby on Rails）の転職ガイド。平均年収（20代約480万〜40代約650万）や必要スキル、未経験からのロードマップ、求人動向・将来性、キャリアパスを実データで解説。スタートアップ・自社開発で働きやすい理由とおすすめ転職エージェントも紹介します。",
  alternates: { canonical: "/articles/ruby-career/" },
  openGraph: {
    title: "女性Rubyエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
    description:
      "女性Rubyエンジニア（Ruby on Rails）の年収・必要スキル・未経験からのロードマップ・求人動向・キャリアパスを実データで徹底解説。",
    url: "https://women-engineer.com/articles/ruby-career/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性Rubyエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
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
    "女性Rubyエンジニア（Ruby on Rails）の年収・必要スキル・未経験からのロードマップ・求人動向・キャリアパスを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/ruby-career/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性Rubyエンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "正社員のRubyエンジニアの平均年収はおよそ600万〜700万円台で、Web系の自社開発企業では経験5年以上で800万〜1,000万円に届くケースもあります。年代別では20代で約480万円、30代で約600万円、40代で約650万円が目安です。Rubyはプログラミング言語別の案件平均年収ランキングで上位（3位前後）に入る高単価言語で、フリーランスでは月単価70万〜90万円（年収換算800万〜1,000万円）が中心です。性別による給与差はスキルと経験で埋められる職種のため、エージェントを通じた年収交渉で適正額を得ることが大切です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもRuby on Railsエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。Rubyは文法が読みやすく初学者に学びやすい言語で、フレームワークのRuby on Railsは「設定より規約」の思想でWebアプリを素早く形にできるため、未経験からの定番ルートとして人気です。Ruby文法→Rails（MVC）→データベース／SQL→Git→RSpec（テスト）→ポートフォリオ公開の順で、合計800〜1,000時間（1日2〜3時間で半年〜1年）が一つの目安。ログイン・投稿・CRUDを備えたWebアプリを作って公開すれば、未経験可の自社開発・受託企業に挑戦できます。",
      },
    },
    {
      "@type": "Question",
      name: "Rubyは将来性がないと言われますが転職して大丈夫ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「オワコン」と言われることもありますが、実態は需要が安定した言語です。Ruby on Railsはクックパッド・食べログ・GitHub・Shopifyなど国内外の大規模サービスで使われ、既存サービスの保守・機能追加の案件が豊富にあります。スタートアップのMVP（最小限の製品）開発にも選ばれ続けており、フリーランス案件数ランキングでも上位（5位前後、案件比率約10%）です。AWS・GCPなどクラウドやAI関連スキルを掛け合わせれば市場価値はさらに上がり、長く働ける土台になります。",
      },
    },
    {
      "@type": "Question",
      name: "Rubyエンジニアは産休・育休後も働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすい職種のひとつです。RubyはWeb系の自社開発・スタートアップでの採用が中心で、こうした企業はリモートワークやフレックス、副業可の制度を整えている割合が高い傾向にあります。Railsは規約に沿って書くため引き継ぎやキャッチアップがしやすく、ブランクからの復帰もしやすいのが利点です。ただし制度の有無や運用実態は企業差が大きいため、産休育休の取得・復帰実績やリモートの実態、女性エンジニア比率を事前に確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "Ruby転職におすすめの転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "技術を正当に評価してもらうならIT特化型のレバテックキャリアやGeekly、女性のキャリア継続を重視するならtype女性の転職エージェントがおすすめです。レバテックはRuby on Railsの自社開発・スタートアップ求人に強く、技術を理解したアドバイザーが提案してくれます。Geeklyは年収交渉力に定評があります。女性特化型は産休育休やリモートなど働き方の条件で求人を絞り込めます。2〜3社の併用がベストです。",
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
              { label: "Rubyエンジニア転職ガイド" },
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
              女性Rubyエンジニア転職ガイド
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
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. Rubyエンジニアとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 女性がRubyで長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 必要なスキルと知識</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. Rubyエンジニアの年収相場（年代別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験から目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. Rubyエンジニアのキャリアパス</a></li>
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
          <h2 className="text-2xl font-bold mb-6">Rubyエンジニアとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Rubyエンジニアは、日本生まれのプログラミング言語<strong>Ruby</strong>と、そのWebアプリケーションフレームワーク<strong>Ruby on Rails（Rails）</strong>を使って、Webサービスのサーバーサイドを開発する職種です。ECサイト・SNS・予約システム・SaaSなど、ユーザー登録やログイン、投稿、決済といった「サービスの中身」を作るのが主な仕事です。
            </p>
            <p>
              Railsは「設定より規約（Convention over Configuration）」という思想を持ち、決められた作法に沿って書くだけでデータベース連携やCRUD（作成・閲覧・更新・削除）機能を素早く実装できます。少人数でもスピーディに開発できるため、<strong>スタートアップのMVP（最小限の製品）開発</strong>や、<strong>Web系自社開発企業のサービス開発</strong>で特に重宝されてきました。
            </p>
            <p>
              実際にRuby on Railsは、クックパッド・食べログ（カカクコム）など国内の大規模サービス、海外ではGitHubやShopifyといった巨大プラットフォームでも採用されています。新規開発だけでなく、こうした既存サービスの機能追加・保守・改善も大きな仕事の柱です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>Rubyエンジニアの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Ruby on RailsによるWebアプリのサーバーサイド開発</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ユーザー認証・投稿・決済・通知などの機能実装</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>データベース設計・SQL（MySQL / PostgreSQL）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>API（REST / GraphQL）設計・実装、フロントとの連携</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>RSpecなどによるテストコードの作成・品質担保</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>既存サービスの保守・機能追加・パフォーマンス改善</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がRubyで長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされますが、RubyはWeb系の自社開発・スタートアップでの採用が中心で、柔軟な働き方を整える企業が多い領域です。ライフイベントと両立しながらキャリアを築きたい女性にとって、相性の良いポジションといえます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. Web系自社開発でリモートと相性が良い</h3>
              <p className="text-text-light text-sm leading-relaxed">RubyはWeb系自社開発・スタートアップでの採用が多く、フルリモートやフレックス、副業可の制度を整えた企業の割合が高め。通勤負担を減らし、育児・介護と両立しながら働きやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 規約ベースで引き継ぎ・復帰がしやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">Railsは「設定より規約」で書き方が標準化されているため、他人のコードも読みやすく引き継ぎやキャッチアップが容易。産休育休でブランクが空いても、復帰時に流れを取り戻しやすいのが強みです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 成果が可視化され時短でも評価されやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">担当した機能・コード・テストが客観的に残るため、勤務時間の長さではなく成果で評価されやすい職種。時短勤務でも実力が正当に認められ、キャリアを止めずに済みます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 高単価・需要安定で条件交渉しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">Rubyは案件単価が高く、既存サービスの保守需要も安定。求人の選択肢が多いほど「働きやすい会社」を選びやすく、女性が年収や働き方を交渉できる余地も大きくなります。</p>
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
              Rubyエンジニアは複数のスキルを組み合わせますが、すべてを最初から完璧にする必要はありません。まず<strong>RubyとRailsを軸</strong>に、データベースとテストを扱えるようになることが土台です。
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
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Ruby（言語）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基本文法 / オブジェクト指向 / ブロック・メソッド</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>読みやすく初学者向き。土台となる必須スキル</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Ruby on Rails</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>MVC / ルーティング / Active Record</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Ruby求人の中核。規約に沿った高速開発が武器</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データベース / SQL</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>MySQL / PostgreSQL</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>テーブル設計とSQLは実務で必ず使う基礎</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>テスト</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>RSpec / Minitest</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自社開発では必須レベル。書けると評価が大きく上がる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>バージョン管理 / 周辺</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Git / GitHub / Docker / API（REST）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>チーム開発で必須。Gitは最初に身につける</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>インフラ / クラウド</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>AWS / GCP / CircleCI</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>クラウド経験は年収アップに直結。+100〜200万円の例も</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            2026年時点では、<strong>Rails＋AWS／GCP（クラウド）</strong>や<strong>RSpec（テスト）</strong>を扱えると評価が高く、年収交渉の武器になります。<strong>Ruby技術者認定試験（Silver / Gold）</strong>を取得しておくと、未経験からの転職でスキルの証明にもなります。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Rubyエンジニアの年収相場（年代別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              正社員Rubyエンジニアの平均年収はおよそ<strong>600万〜700万円台</strong>。プログラミング言語別の案件平均年収ランキングでも上位（3位前後）に入る高単価言語です。年代・経験で差が出ます。下表は各種調査をもとにした目安です（企業・地域・スキルにより変動します）。
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
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約480万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>若手は400万円台スタートも</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約600万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自社開発・スタートアップで上振れ</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約650万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>上流・リードで800万〜1,000万円も</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月単価 約70万〜90万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>年収換算800万〜1,000万円。上流・高需要案件で上振れ</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>クラウド（AWS/GCP）</strong>を掛け合わせる。Rails＋クラウドで+100〜200万円の例も</li>
              <li>② <strong>設計・テスト・リード（上流）</strong>の経験を積む（アーキテクチャ設計・RSpec・チームリード）</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。Rubyの市場価値を客観評価してもらう</li>
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
              「Rubyはオワコン」と言われることもありますが、実態は<strong>需要が安定した言語</strong>です。Ruby on Railsはクックパッド・食べログ・GitHub・Shopifyなど国内外の大規模サービスで使われ続けており、既存サービスの保守・機能追加の案件が豊富にあります。フリーランス案件数ランキングでも上位（5位前後、案件比率約10%）に位置します。
            </p>
            <p>
              特に伸びているのは、<strong>スタートアップのMVP・新規サービス開発</strong>と、<strong>Web系自社開発企業のSaaS・プロダクト開発</strong>。Railsは少人数で素早く作れるため、これらの領域で選ばれ続けています。リモート求人も多く、女性が働き方を選びやすい領域です。一方で、要件定義・設計（上流）やクラウドを担える人材は希少で、年収も高くなります。AWS・GCPやAI関連スキルを掛け合わせれば、Rubyエンジニアとしての市場価値はさらに高まります。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 未経験ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>合計<strong>800〜1,000時間</strong>（1日2〜3時間で<strong>半年〜1年</strong>）が一つの目安。次の順序で進めると挫折しにくいです。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "Web・HTTPの基礎を知る", "Webの仕組み（リクエスト/レスポンス、サーバーとは）を理解。最初に全体像をつかむと後が楽になります。"],
              ["STEP2", "Rubyの文法を習得する", "変数・条件分岐・繰り返し・オブジェクト指向まで。読みやすい言語なので、まずはRubyに集中して基礎を固めます。"],
              ["STEP3", "Ruby on Railsを学ぶ", "MVC・ルーティング・Active Recordを理解し、簡単なWebアプリを動かせるように。Ruby求人の中核スキルです。"],
              ["STEP4", "データベースとSQLを学ぶ", "テーブル設計とSQL（検索・追加・更新）。RailsのActive Recordと合わせて理解すると実務に直結します。"],
              ["STEP5", "Git・テスト・Dockerに触れる", "Gitでのコード管理は必須。RSpecでテストを書き、Dockerにも少し触れておくと自社開発で評価が上がります。"],
              ["STEP6", "ポートフォリオを作る", "ログイン・投稿・CRUD・APIを備えたWebアプリをAWS等に公開。RSpecやDocker・CI(CircleCI)まで入れると差がつきます。"],
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
          <h2 className="text-2xl font-bold mb-6">Rubyエンジニアのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>RubyエンジニアはWebサービスの「中身」を作る経験が積み上がる職種で、キャリアの選択肢が広いのが魅力です。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>技術を深める</h3><p className="text-sm text-text-light">テックリード → ソフトウェアアーキテクト／SRE。設計・大規模Railsサービスの専門家として高年収を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>マネジメント</h3><p className="text-sm text-text-light">エンジニアリングマネージャー（EM）／PM。チームや開発プロセスをリードする道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>領域を広げる</h3><p className="text-sm text-text-light">フルスタック（React等＋Rails）／Go・Pythonへ多言語化。市場価値の高いスキルを掛け合わせる道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>独立・柔軟な働き方</h3><p className="text-sm text-text-light">フリーランスとして高単価のRails案件・リモート中心の働き方へ。ライフステージに合わせやすい。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>Rubyの技術を正当に評価してもらうには、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。Ruby on Railsの自社開発・スタートアップ求人に強く、技術に精通したアドバイザーが提案してくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
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
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・SES→自社開発Rails）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SESのJavaエンジニア / 年収430万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SaaS企業の自社開発（Rails）/ 年収620万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">IT特化型エージェントでRails＋RSpec・AWSの学習実績とポートフォリオを整理。需要の安定したRubyの自社開発に軸足を移し、年収190万円アップとフルリモートを同時に実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（20代後半・未経験→Railsエンジニア）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">販売職（IT未経験）/ 年収310万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">スタートアップのRailsエンジニア / 年収440万円</p></div>
              </div>
              <p className="text-sm text-text-light">独学＋スクールで約900時間Ruby on Railsを学習し、ログイン・投稿機能とAPI・Dockerを備えたポートフォリオを公開。未経験可のスタートアップに転職し、副業可・フレックスで柔軟に働ける環境を得ました。</p>
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
            <a href="/articles/backend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>バックエンドエンジニア転職ガイド</h3><p className="text-sm text-text-light">Rubyを含むサーバーサイド全体像</p></a>
            <a href="/articles/startup/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>スタートアップ転職ガイド</h3><p className="text-sm text-text-light">Railsが活きる開発環境</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/programming-school/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>プログラミングスクールの選び方</h3><p className="text-sm text-text-light">未経験からの学習をサポート</p></a>
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
