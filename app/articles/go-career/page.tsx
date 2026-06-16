import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性Goエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
  description:
    "女性Go（Golang）エンジニアの転職ガイド。提示年収トップクラス（平均710万円台）の高単価言語の仕事内容、年代別年収、求人倍率19.8倍の需要・将来性、必要スキル、他言語・未経験からのロードマップ、キャリアパスを実データで解説。長く働きやすい理由とおすすめ転職エージェントも紹介します。",
  alternates: { canonical: "/articles/go-career/" },
  openGraph: {
    title: "女性Goエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
    description:
      "女性Go（Golang）エンジニアの年収・必要スキル・他言語からのロードマップ・求人動向・キャリアパスを実データで徹底解説。",
    url: "https://women-engineer.com/articles/go-career/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性Goエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
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
    "女性Go（Golang）エンジニアの年収・必要スキル・他言語からのロードマップ・求人動向・キャリアパスを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/go-career/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性Goエンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Goは企業が提示する想定年収が最も高い言語のひとつで、調査では平均約710万円とプログラミング言語の中でトップクラスです。年代別ではバックエンド全体の20代約460万円・30代約560万円が目安ですが、Goスキルを持つとJavaやPHPの同経験者より50万〜100万円ほど高くなる傾向があります。フリーランスのGoエンジニアは年齢を問わず平均900万円台、月単価でも上位帯で、50代以上では1,000万円を超えるケースもあります。性別による差はスキルと経験で埋められる職種なので、年収交渉やエージェント活用で適正額を得ることが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもGoエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能ですが、Goはいきなりの完全未経験よりも「Webの基礎＋他言語を少し触ってから」挑戦するのが挫折しにくいルートです。HTTP/APIの基礎 → A Tour of Goで文法 → SQL・データベース → Gin/EchoでAPI開発 → Docker・Gitの順で学び、REST APIを備えたポートフォリオを公開するのが王道です。Goは文法がシンプルで覚える機能が少なく、他言語経験者なら数週間で基礎を押さえられるのが強み。学習期間は1日2〜3時間で半年〜1年が目安で、未経験可・ポテンシャル採用の自社開発求人もあります。",
      },
    },
    {
      "@type": "Question",
      name: "Goと他のバックエンド言語、どれを学ぶべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "高単価・将来性を最優先するならGoが有力です。Goは提示年収トップクラスで、求人も過去3年で約1.5倍に増加、正社員求人倍率は19.8倍（2024年12月時点）と人材が圧倒的に不足しています。学習しやすさを優先するならPython・Ruby・PHPが入りやすく、まず1言語で基礎を固めてからGoを第二言語に加える進め方も現実的です。Goはマイクロサービス・SaaS・クラウド領域で需要が集中しているため、その領域で長く働きたい人ほど投資価値が高い言語です。",
      },
    },
    {
      "@type": "Question",
      name: "Goエンジニアは産休・育休後も働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすい職種のひとつです。Goはメルカリ・メルペイ・サイバーエージェントなどモダンな自社開発企業やSaaSスタートアップでの採用が中心で、フルリモートやフレックスを導入する企業が多いのが特徴。サーバーサイド開発は成果が可視化されやすく、時短勤務とも両立しやすいです。ただし企業差が大きいため、産休育休の取得実績・復帰率、リモートの運用実態、女性管理職比率などは事前に確認しましょう。求人票に出ない実態は、女性のキャリアに詳しいエージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "Go転職におすすめの転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Goは技術力が年収に直結するため、IT特化型のレバテックキャリアやGeeklyのように技術スタックを理解したアドバイザーがいるエージェントが有利です。GoはSaaS・スタートアップ求人が多く、こうしたエージェントは非公開求人や年収交渉に強みがあります。働き方の条件（産休育休・リモート）を重視するならtype女性の転職エージェントを併用すると、Goの高単価と働きやすさを両立した企業を絞り込めます。2〜3社の併用がベストです。",
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
              { label: "Goエンジニア転職ガイド" },
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
              女性Goエンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                提示年収トップクラスの高単価言語。年収・必要スキル・未経験からの道のりを実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. Goエンジニアとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 女性がGoで長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 必要なスキルと周辺技術</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. Goエンジニアの年収相場（年代別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験・他言語から目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. Goエンジニアのキャリアパス</a></li>
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
          <h2 className="text-2xl font-bold mb-6">Goエンジニアとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Goエンジニアは、Googleが開発したプログラミング言語<strong>Go（Golang）</strong>を使い、WebサービスのサーバーサイドやAPI、クラウド基盤を設計・開発する職種です。Goはシンプルな文法・高速な処理速度・並行処理（goroutine）の扱いやすさを兼ね備え、大量のアクセスを高速にさばくバックエンドに最適な言語として広く採用されています。
            </p>
            <p>
              代表的な活躍領域は、(1)<strong>マイクロサービス・API開発</strong>（gRPCなどでサービス間連携を構築）、(2)<strong>SaaS・スタートアップのバックエンド</strong>、(3)<strong>大手テック企業の大規模トラフィック処理</strong>、(4)<strong>クラウド・インフラ系ツール</strong>です。実際、コンテナ技術の代表である<strong>Docker</strong>や<strong>Kubernetes</strong>はGoで書かれており、クラウドネイティブ時代の中心言語になっています。
            </p>
            <p>
              国内でも、<strong>メルカリ・メルペイ</strong>（決済基盤をGoのマイクロサービスで構築）、<strong>サイバーエージェント</strong>（新規事業の標準言語として「Go Academy」で育成）、<strong>Gunosy・はてな・カヤック</strong>など、モダンな自社開発企業の大規模サービスでGoが採用されています。「処理速度・スケーラビリティ・開発のしやすさ」を同時に満たすため、新規プロダクトの第一選択になりやすいのが特徴です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>Goエンジニアの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>マイクロサービス・API開発（REST / gRPC / GraphQL）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>SaaS・スタートアップのサーバーサイド開発</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>高トラフィックなバックエンドの設計・パフォーマンス改善</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>データベース設計・SQL（MySQL / PostgreSQL）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>クラウド（AWS / GCP）・コンテナ（Docker / Kubernetes）運用</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>CLIツール・ミドルウェア・インフラ系ツールの開発</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がGoで長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされますが、Goが使われるのはメルカリ・サイバーエージェントなどダイバーシティ推進やリモートワークに積極的なモダンな企業が中心。Goという言語選び自体が、女性が長くキャリアを築きやすい職場につながりやすいのが特徴です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. フルリモート求人が豊富な企業が多い</h3>
              <p className="text-text-light text-sm leading-relaxed">GoはSaaS・スタートアップ・自社開発企業での採用が中心で、フルリモートやフレックスを前提とする企業が多数。リモート普及で東京以外のエリアでもGo案件が増え、住む場所を選ばず働けます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 高単価で時短でも収入を確保しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">Goは提示年収トップクラスの言語。同じ稼働時間でも単価が高いため、時短勤務や育児との両立期でも収入を維持しやすく、ライフイベントで働き方を調整しても市場価値が落ちにくいのが強みです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. シンプルな言語仕様で復帰しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">Goは覚える機能が少なく文法がシンプルで、コードが読みやすい設計。チームで書き方が揃いやすく、産休育休でブランクが空いても感覚を取り戻しやすく、復帰のハードルが低い言語です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 人材不足で交渉の余地が大きい</h3>
              <p className="text-text-light text-sm leading-relaxed">正社員求人倍率は19.8倍と、Go人材は圧倒的に不足。求人が多いほど「働きやすい会社」を選べ、年収や働き方の条件を交渉できる余地も大きくなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 スキルと周辺技術 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルと周辺技術</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Goは言語自体がシンプルなので、習得すべき機能は多くありません。<strong>Goの基本文法＋並行処理</strong>を押さえたうえで、Web開発に必要な周辺技術（フレームワーク・DB・クラウド）を組み合わせるのが実務への近道です。
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
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Goの基本文法</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>型 / 構造体 / interface / エラー処理</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>機能が少なくシンプル。「A Tour of Go」で短期間に習得可能</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>並行処理</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>goroutine / channel</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Go最大の強み。高トラフィック処理で差がつく重要スキル</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Webフレームワーク</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Gin / Echo</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>軽量で高速。求人で需要が多いのはGin、Echoも増加中</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データベース / ORM</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>MySQL / PostgreSQL / GORM</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>テーブル設計とSQLは必須。GORMでDB操作を効率化</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>API・通信</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>REST / gRPC / HTTP / 認証</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>マイクロサービスではgRPC経験が評価されやすい</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>インフラ / クラウド</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Docker / Kubernetes / AWS / GCP / Git</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>GoはDocker/K8sと相性抜群。クラウド経験は年収に直結</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            2026年時点では、<strong>Gin/EchoでのAPI開発</strong>に加え、<strong>gRPCによるマイクロサービス連携</strong>や<strong>Docker/Kubernetesでの運用経験</strong>があると単価・年収が大きく上がりやすい傾向です。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Goエンジニアの年収相場（年代別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Goは<strong>企業が提示する想定年収が最も高い言語のひとつ（平均約710万円）</strong>。バックエンド全体より明確に高単価で、Go経験3年以上の平均年収は600万円を超え、Java・PHPの同経験者より50万〜100万円ほど高い水準です。下表は各種調査をもとにした目安です（企業・地域・スキルにより変動します）。
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
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約480万〜550万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>バックエンド平均より高め。Goスキルで上振れ</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約600万〜700万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>経験3年以上で600万円超が目安</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約700万〜900万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>テックリード・設計で大手は800万円超も</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>提示年収（全体）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>平均 約710万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>主要言語の中で最高水準</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>年収 約900万円台〜</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>年齢問わず高水準。50代以上で1,000万円超も</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>マイクロサービス・gRPC経験</strong>を積む（大規模トラフィック対応で評価が上がる）</li>
              <li>② <strong>クラウド・コンテナ（Docker/Kubernetes/AWS）</strong>を掛け合わせる</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。Go人材は希少で交渉余地が大きい</li>
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
              Goの求人は伸び続けています。国内のGo関連求人は<strong>過去3年で約1.5倍</strong>に増加し、レバテックの調査では<strong>正社員の求人倍率19.8倍、フリーランス案件倍率3.3倍（2024年12月時点）</strong>と、人材が圧倒的に不足している状態です。リモートワークの普及で東京以外でもGo案件が増えています。
            </p>
            <p>
              背景にあるのは、<strong>クラウド・マイクロサービスの急速な普及</strong>です。Docker・KubernetesがGoで作られていることもあり、クラウドネイティブな新規プロダクトの標準言語としてGoが選ばれ続けています。メルカリ・サイバーエージェント・Gunosyなど、Goを採用する企業はモダンな自社開発・SaaS企業が中心で、リモート・フレックスなど女性が働き方を選びやすい求人が多いのも特徴です。学習する人がまだ追いついておらず、需給ギャップは当面続く見込みで、将来性は高い水準が続くと考えられます。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験・他言語から目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>Goは「Webの基礎を押さえてから」挑戦すると挫折しにくい言語です。他言語経験者なら基礎は数週間で習得可能。1日2〜3時間の学習で<strong>半年〜1年</strong>が一つの目安です。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "Web・HTTP・APIの基礎を知る", "リクエスト/レスポンスやAPIの仕組みを理解。Goはここが曖昧だと難しいので、先に全体像をつかむと後が楽になります。"],
              ["STEP2", "Goの文法を習得する", "公式の「A Tour of Go」で型・構造体・interface・エラー処理を学ぶ。機能が少ないので短期間で一周できます。"],
              ["STEP3", "並行処理（goroutine）を理解", "Go最大の強みであるgoroutine/channelを学習。高トラフィック処理で差がつく重要ポイントです。"],
              ["STEP4", "DB・SQLとORMを学ぶ", "MySQL/PostgreSQLのテーブル設計とSQL、GORMでのDB操作。バックエンドの中核なので丁寧に。"],
              ["STEP5", "Gin/EchoでAPIを作る", "軽量フレームワークでREST APIを構築。求人で需要の多いGinから始めるのがおすすめです。"],
              ["STEP6", "Docker・Git・ポートフォリオ", "Dockerでコンテナ化し、認証付きCRUD APIを公開。GoらしいAPIの実績が転職活動で最も効きます。"],
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
            ※ PHP・Ruby・Java・Pythonなど他のバックエンド言語の経験がある人は、STEP2〜3を一気に進められます。「他言語＋Go」の二刀流は市場価値が高く、年収アップの転職で武器になります。
          </p>
        </div>
      </section>

      {/* sec7 キャリアパス */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Goエンジニアのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>Goは「設計力＋クラウド」が積み上がる職種で、高年収帯への道が広いのが魅力です。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>技術を深める</h3><p className="text-sm text-text-light">テックリード → ソフトウェアアーキテクト。マイクロサービスや大規模システムの設計者として高年収を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>インフラ・SRE方向</h3><p className="text-sm text-text-light">GoはDocker/Kubernetesと相性が良く、SRE／プラットフォームエンジニアへ。クラウド基盤の専門家として希少価値が高い道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>マネジメント</h3><p className="text-sm text-text-light">エンジニアリングマネージャー（EM）／PM。チームや開発プロセスをリードする道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>独立・柔軟な働き方</h3><p className="text-sm text-text-light">高単価なGoフリーランスとして、リモート中心・週稼働調整など、ライフステージに合わせた働き方へ。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>Goは技術力が年収に直結する言語。IT特化型と女性特化型の併用で、高単価と働きやすさを両立した求人を狙うのが効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。Goの市場動向や求人倍率に関する調査も発信しており、技術に精通したアドバイザーがGoの技術スタックを理解した提案をしてくれます。SaaS・スタートアップの非公開求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。Goのような高単価言語の市場価値を理解しており、スピーディーなマッチングと年収交渉力に定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。Goの高単価を活かしつつ、働き方の条件で絞り込みたい人に最適です。</p>
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
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">受託開発のPHPエンジニア / 年収440万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SaaS企業のGoバックエンド / 年収650万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">既存のWeb開発経験を活かしつつ、Gin＋GORMでREST APIを自作してポートフォリオ化。IT特化型エージェントで「Go経験のある即戦力」として提案してもらい、年収210万円アップとフルリモートを同時に実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Bさん（20代後半・未経験→Go）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">事務職（IT未経験）/ 年収330万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">自社開発スタートアップのGoエンジニア / 年収450万円</p></div>
              </div>
              <p className="text-sm text-text-light">まずWeb基礎とSQLを固め、A Tour of Go＋EchoでDocker化したAPIを公開。Go人材が不足する自社開発スタートアップにポテンシャル採用で転職し、産休育休実績のある環境で長く働ける基盤を得ました。</p>
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
            <a href="/articles/backend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>バックエンドエンジニア転職ガイド</h3><p className="text-sm text-text-light">Goを含むサーバーサイド全体を解説</p></a>
            <a href="/articles/sre-devops/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>SRE・DevOpsエンジニア転職ガイド</h3><p className="text-sm text-text-light">GoとK8sが活きるクラウド基盤の道</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/demand/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>需要の高いエンジニア職種</h3><p className="text-sm text-text-light">これから伸びるスキルと領域</p></a>
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
