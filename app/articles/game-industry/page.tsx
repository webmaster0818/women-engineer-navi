import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ゲーム業界で働く女性エンジニア｜年収・職種・必要スキルと転職ルート【2026年】",
  description:
    "ゲーム業界への転職を目指す女性エンジニア向け決定版ガイド。国内市場規模2兆3,961億円（ファミ通ゲーム白書2025）、ゲームプログラマー平均年収517万円、女性開発者比率21.9%（CESA調査）など実データで、職種マップ・必要スキル・働き方の実態・転職ルートを解説します。",
  alternates: { canonical: "/articles/game-industry/" },
  openGraph: {
    title: "ゲーム業界で働く女性エンジニア｜年収・職種・必要スキルと転職ルート【2026年】",
    description:
      "国内市場規模・職種別年収・必要スキル・働き方の実態を、ファミ通ゲーム白書やCESA調査などの実データで解説。女性エンジニアがゲーム業界へ転職する現実的なルートを紹介します。",
    url: "https://women-engineer.com/articles/game-industry/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ゲーム業界で働く女性エンジニア｜年収・職種・必要スキルと転職ルート【2026年】",
  datePublished: "2026-04-29",
  dateModified: "2026-06-12",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer.com" },
  description:
    "国内市場規模・職種別年収・必要スキル・働き方の実態を、ファミ通ゲーム白書やCESA調査などの実データで解説。女性エンジニアがゲーム業界へ転職する現実的なルートを紹介。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/articles/game-industry/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ゲーム業界のエンジニアの年収はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "求人ボックス給料ナビ（2026年5月時点）によると、ゲームプログラマーの平均年収は517万円で、年収幅は354万〜797万円、ボリュームゾーンは520万〜575万円です。一方、CEDEC「ゲーム開発者の就業とキャリア形成2025」では回答者（現役開発者が中心）の個人年収平均は674.21万円と高く、経験を積んだ層の水準はさらに上がります。統計により「求人掲載額ベース」か「現役開発者の実績ベース」かで数値が大きく変わるため、複数の統計を見比べて自分の経験年数に近い数字を目安にするのが現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "ゲーム業界で働く女性エンジニアはどのくらいいますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CESA「ゲーム開発者の就業とキャリア形成2023」によると、ゲーム開発者全体に占める女性の割合は21.9%（回答者658名中144名）です。ただし職種別に見ると女性はアーティスト職が最も多く、エンジニア職は男性比率が高いのが実態です。裏を返せば女性エンジニアはまだ希少で、ダイバーシティ推進を掲げる大手を中心に採用ニーズがあります。同調査では年収599万円以下の層が女性64.6%・男性42.1%と差があることも示されており、統計を知った上で職種選び・年収交渉に臨むことが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "ゲーム開発未経験でもゲーム業界に転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。最も現実的なのはサーバーサイド・インフラ・QAの3職種で、Webサービスやシステム開発の経験（Go/Python/Java、AWS、テスト自動化など）がほぼそのまま通用します。運営型のスマホゲームはWebサービスと技術構成が近いためです。一方、クライアントエンジニア（Unity/Unreal Engine）は専門性が高く、未経験から狙う場合はUnity＋C#で小さなゲームを1本完成させて公開するポートフォリオが事実上の必須条件になります。",
      },
    },
    {
      "@type": "Question",
      name: "クランチ（リリース前の長時間労働）は今もありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "業界全体では労働環境の改善が進んでいますが、マスターアップ（開発完了）前や大型アップデート前に負荷が上がる傾向は今も残っており、企業・プロジェクトによる差が大きいのが実態です。運営型タイトルはイベントサイクルに沿って繁閑が読みやすい一方、新規開発はリリース直前に集中しがちです。転職時は平均残業時間の実績、リリース後の代休・リフレッシュ制度、繁忙期の頻度を面接やエージェント経由で具体的に確認しましょう。なおCEDECの2025年調査では転職経験者が55.2%と人材流動性が高く、環境が合わなければ移りやすい業界でもあります。",
      },
    },
    {
      "@type": "Question",
      name: "ゲーム業界に強い転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ゲーム業界の転職にはIT・Web・ゲーム業界特化のGeeklyが代表的で、大手ゲーム会社からスタートアップまで幅広い求人を保有しています。レバテックキャリアもゲーム業界の求人を扱っており、技術力を重視した提案が受けられます。働き方の条件（産休育休・リモート等）を重視する場合は女性特化型エージェントの併用も有効です。各社で得意領域が異なるため、2〜3社を併用して求人と提案を比較するのが効果的です。",
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
    { "@type": "ListItem", position: 3, name: "ゲーム業界で働く女性エンジニア", item: "https://women-engineer.com/articles/game-industry/" },
  ],
};

export default function GameIndustryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "ゲーム業界で働く女性エンジニア" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>業界ガイド</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              ゲーム業界で働く女性エンジニア
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">年収・職種・必要スキルと転職ルートを実データで解説【2026年】</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>この記事の結論</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>国内ゲームコンテンツ市場は<strong>2兆3,961億円</strong>（2024年・前年比3.4%増）と拡大が続き、エンジニア需要は底堅い（出典: ファミ通ゲーム白書2025）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>ゲームプログラマーの平均年収は<strong>517万円</strong>（求人掲載ベース・2026年5月時点）。現役開発者中心の調査では平均<strong>674万円</strong>と、経験を積むほど水準が上がる</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>女性開発者比率は<strong>21.9%</strong>。エンジニア職の女性はまだ少数派で、だからこそ採用ニーズがある（出典: CESA調査）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>異業種からの最短ルートは<strong>サーバーサイド・インフラ・QA</strong>。Web系の経験がほぼそのまま通用する。クライアント開発志望ならUnity＋C#のポートフォリオが事実上必須</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span><span>働き方は改善傾向だが、リリース前の繁忙（クランチ）は企業差が大きい。<strong>残業実績と代休制度の確認</strong>が転職成功の鍵</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. ゲーム業界の今（市場規模と動向）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. データで見る女性ゲーム開発者の現在地</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 職種マップ（クライアント／サーバ／ツール／QA）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 年収相場と統計の読み方</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 必要なスキルと学習ルート</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 働き方の実態（魅力とクランチを公平に）</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 未経験・異業種からの現実的な入り方</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. ゲーム業界に強いエージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 市場規模と動向 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ゲーム業界の今（市場規模と動向）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              角川アスキー総合研究所が発刊する業界データ年鑑「ファミ通ゲーム白書2025」によると、2024年の国内ゲームコンテンツ市場は前年比3.4%増の<strong>2兆3,961億円</strong>。世界のゲームコンテンツ市場は前年比5.0%増の<strong>31兆42億円</strong>と推計されており、国内・世界ともに拡大が続いています。ゲーム機本体や周辺機器に加え、サブスクリプションやアイテム課金を含む市場全体の値上げも市場規模の押し上げ要因と分析されています。
            </p>
            <p className="text-sm">出典: 角川アスキー総合研究所「ファミ通ゲーム白書2025」（2026年6月参照）</p>
            <p>
              エンジニアの働き口という観点では、ゲーム業界は大きく<strong>コンシューマー（家庭用）</strong>と<strong>モバイル（スマホ・運営型）</strong>に分かれます。コンシューマーは2〜5年単位の大規模開発でC++やグラフィックス技術の専門性が問われる一方、運営型のモバイルゲームはサーバー・インフラ・データ分析などWebサービスに近い技術構成で、<strong>異業種のIT経験者が入りやすい領域</strong>です。
            </p>
            <p>
              また、AIによるゲームテスト自動化やプロシージャル生成、ゲームエンジン技術の非ゲーム分野への応用（建築ビジュアライゼーション・シミュレーション等）など、エンジニアの活躍領域は業界の外側にも広がっています。ゲーム業界で身につけたリアルタイム処理・最適化のスキルは、他業界でも評価される資産になります。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 女性開発者の現在地 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データで見る女性ゲーム開発者の現在地</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              業界団体CESA（コンピュータエンターテインメント協会）の「ゲーム開発者の就業とキャリア形成2023」によると、ゲーム開発者に占める女性の割合は<strong>21.9%</strong>（回答者658名中144名）。職種別では女性はアーティスト職が最も多く、<strong>エンジニア職は男性比率が高い</strong>のが現状です。つまり「ゲーム業界の女性エンジニア」はまだ希少な存在で、ダイバーシティ推進を掲げる大手企業を中心に採用ニーズがあります。
            </p>
            <p>
              一方で、知っておくべきデータもあります。同調査ではゲーム開発者の個人年収は平均621.6万円（2022年）ですが、年収599万円以下の層が<strong>女性は64.6%</strong>を占めるのに対し男性は42.1%にとどまり、男女差が存在します。背景には職種構成の違い（女性は相対的に年収水準の低い職種に多い）や、現在の職場での就業年数の差（女性平均5.66年・男性平均8.11年）があります。
            </p>
            <p className="text-sm">出典: CESA「ゲーム開発者の就業とキャリア形成2023」（2026年6月参照）</p>
            <p>
              この差は「女性だから給与が低い」と単純化できるものではなく、エンジニアなど年収水準の高い職種を選び、経験を積み、転職時に適正な交渉をすることで埋めていける性質のものです。実際、CEDEC（ゲーム開発者カンファレンス）の2025年調査では、転職経験者の<strong>77.9%が年収が上がった</strong>と回答しており、スキルを持つ人材が正当に評価される流動性の高い市場であることが示されています。
            </p>
            <p className="text-sm">出典: CEDEC「ゲーム開発者の就業とキャリア形成2025」（ゲームメーカーズ報道、2026年6月参照）</p>
          </div>
        </div>
      </section>

      {/* sec3 職種マップ */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">職種マップ（クライアント／サーバ／ツール／QA）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              ゲーム業界のエンジニア職は、大きく4つに整理できます。<strong>どの職種を狙うかで、必要なスキルと入りやすさが大きく変わる</strong>のがポイントです。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>職種</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>主な仕事</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>主な技術</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>年収の目安</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>クライアント</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ゲーム本体（画面・操作・演出）の実装。プレイヤーが触れる部分すべて</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Unity（C#）/ Unreal Engine（C++）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>平均517万円・幅354万〜797万円（ゲームプログラマー全体）</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>サーバーサイド</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ユーザーデータ・課金・マッチング・ランキング。大規模トラフィック処理</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Go / Python / Java、AWS / GCP</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>バックエンド全体で平均500万〜520万円が目安</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>ツール・TA</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>開発効率化ツール・アセットパイプライン構築。アートと開発の橋渡し（テクニカルアーティスト）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>C# / Python、DCCツール連携</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>公開統計が少なく、ゲームプログラマー全体の幅（354万〜797万円）の中で経験により決まる</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>QA・テスター</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>品質保証・テスト計画・テスト自動化・不具合管理</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>テスト設計 / 自動化ツール</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>テスター平均426万円・QAエンジニア平均481万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-light mt-3">
            出典: 求人ボックス 給料ナビ「ゲームプログラマーの年収」（2026年5月時点データ、2026年6月参照）、ウィルオブテック「QAエンジニアの年収は低い？」（2026年6月参照）。サーバーサイドは当サイト<a href="/articles/backend/" className="hover:underline font-bold" style={{ color: "#0891b2" }}>バックエンドエンジニア転職ガイド</a>掲載の各種統計に基づく目安。企業規模・経験により変動します。
          </p>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>入りやすさの目安</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>サーバーサイド・インフラ</strong>: Web系経験がほぼそのまま通用。異業種からの最短ルート</li>
              <li>② <strong>QA</strong>: テスト自動化経験があれば未経験業界でも評価されやすい。<a href="/articles/qa-tester/" className="hover:underline font-bold" style={{ color: "#0891b2" }}>QA・テスターから始めるキャリア</a>も参照</li>
              <li>③ <strong>クライアント</strong>: Unity＋C#のポートフォリオが事実上必須。専門性が高いぶん代えがきかない人材になれる</li>
              <li>④ <strong>ツール・TA</strong>: 求人数は少なめだが競合も少ない。クライアント経験からの横展開が一般的</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec4 年収相場 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収相場と統計の読み方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ゲーム業界の年収は「どの統計を見るか」で印象が大きく変わります。主要な公開統計を並べると次の通りです。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>統計</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>数値</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>性質</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>求人ボックス 給料ナビ<br />（ゲームプログラマー）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>平均517万円<br />幅354万〜797万円<br />ボリュームゾーン520万〜575万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>求人掲載給与ベース（2026年5月時点）。「これから採用する人」への提示額</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>レバテックキャリア統計<br />（Unityに関わるエンジニア）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>平均417万円<br />中央値450万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>転職サービス登録者の実績ベース。若手・転職検討層が多く含まれ低めに出る</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>CEDEC調査2025<br />（ゲーム開発者全体）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>個人年収平均674.21万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>現役開発者（カンファレンス参加層中心・エンジニアが43.1%）の回答。経験者の実態に近く高めに出る</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-light mt-3">
            出典: 求人ボックス 給料ナビ「ゲームプログラマーの年収」（2026年6月参照）、レバテックキャリア「Unityに関わるエンジニアの平均年収・給料の統計」（2026年6月参照）、CEDEC「ゲーム開発者の就業とキャリア形成2025」（ゲームメーカーズ報道、2026年6月参照）
          </p>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>統計から読み取れる3つのこと</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>入口の水準は400万円台</strong>。未経験〜若手のうちは他のIT職種と大きな差はない</li>
              <li>② <strong>経験を積むと600万円台後半以上が現実的</strong>。現役開発者中心の調査では平均674万円。CEDEC調査では前年から年収が上がった人が77.9%にのぼる</li>
              <li>③ <strong>転職が年収を上げる主要手段</strong>。転職経験者は55.2%と流動性が高く、スキルの市場価値を転職時に評価し直してもらう文化がある。エージェント経由の年収交渉が有効</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 スキルと学習ルート */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルと学習ルート</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              職種別に必要スキルは異なりますが、共通して重視されるのは「パフォーマンスへの意識」と「チーム開発力」です。狙う職種を決めてから学習に入ると遠回りしません。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>クライアント志望（ゲームを作る側の王道）</h3>
              <ul className="text-sm text-text-light space-y-2">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span><span><strong>Unity＋C#</strong>: スマホゲーム中心。無料で始められ学習資料が豊富。未経験からの入口に最適</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span><span><strong>Unreal Engine＋C++</strong>: コンシューマー・ハイエンド向け。専門性が高く競合が少ない</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span><span>3D数学の基礎（ベクトル・行列）、メモリ管理・最適化の意識</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#9654;</span><span>小さくても「完成させて公開した」ゲームのポートフォリオ</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>サーバー・QA志望（異業種経験が活きる側）</h3>
              <ul className="text-sm text-text-light space-y-2">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span><span>Go / Python / Java でのAPI開発経験</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span><span>AWS / GCP、MySQL / Redis、大規模トラフィック対応</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span><span>リアルタイム通信（WebSocket / gRPC）があれば加点</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="font-bold">&#9654;</span><span>QAはテスト設計＋自動化（Selenium等の経験はゲームにも応用可）</span></li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              未経験からクライアントエンジニアを目指すなら、<strong>Unity＋C#から入るのが最短ルート</strong>です。C#は文法が体系的で学びやすく、同じ言語で業務系システム開発にも通用するため、仮にゲーム業界が合わなくてもキャリアが潰しにくいのが利点です。C#のキャリア全体像は<a href="/articles/csharp-career/" className="hover:underline font-bold" style={{ color: "#0891b2" }}>女性C#エンジニアの転職ガイド</a>で詳しく解説しています。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              ["STEP1", "Unityをインストールして公式チュートリアルを1本完走", "公式の学習教材（Unity Learn）が無料で充実。まず「動くものを作る」体験を最優先に。"],
              ["STEP2", "C#の基礎文法を固める", "変数・制御構文・クラスまで。Unityのスクリプトを「写経」ではなく自分で書けるレベルへ。"],
              ["STEP3", "小さなゲームを1本完成させる", "2Dのパズルやアクションで十分。「完成させて公開した」事実が選考で最も効きます。"],
              ["STEP4", "公開とポートフォリオ化", "unityroomやitch.io等で公開し、GitHubにコードを置く。工夫した点を言語化しておく。"],
              ["STEP5", "ゲーム業界に強いエージェントに相談", "ポートフォリオの見せ方・狙える求人レンジを客観評価してもらい、応募戦略を立てる。"],
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

      {/* sec6 働き方の実態 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">働き方の実態（魅力とクランチを公平に）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ゲーム業界の働き方は「好きを仕事にできる」魅力と、「リリース前の繁忙」という現実が同居しています。良い面と注意点の両方をデータと合わせて押さえておきましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>魅力</h3>
              <ul className="text-sm text-text-light space-y-2 leading-relaxed">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#10003;</span><span>自分の作ったものをユーザーが「楽しんでくれる」実感が直接得られる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#10003;</span><span>転職経験者55.2%・転職で年収が上がった人77.9%（CEDEC調査2025）。実力が流動性の高い市場で評価される</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#10003;</span><span>フレックス・リモートの導入が進み、特にサーバー・インフラ職は在宅と相性が良い</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="font-bold">&#10003;</span><span>最適化・リアルタイム処理のスキルは他業界でも通用する資産になる</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#f97066" }}>注意点</h3>
              <ul className="text-sm text-text-light space-y-2 leading-relaxed">
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="font-bold">&#9888;</span><span>マスターアップ前・大型アップデート前は負荷が上がりやすい（いわゆるクランチ）。改善傾向にあるが企業差・プロジェクト差が大きい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="font-bold">&#9888;</span><span>運営型タイトルはイベントサイクルやメンテナンス対応で不定期の対応が発生しうる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="font-bold">&#9888;</span><span>現在の職場での就業年数は女性平均5.66年と男性（8.11年）より短い（CESA調査2023）。長く働ける制度の実態確認が重要</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="font-bold">&#9888;</span><span>プロジェクトの中止・方針転換が起こりうる業界特性も理解しておく</span></li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>転職前に確認すべき5項目</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① 平均残業時間の<strong>実績値</strong>（「みなし」ではなく直近の実測）</li>
              <li>② リリース後の代休・リフレッシュ休暇の運用実態</li>
              <li>③ 配属タイトルが<strong>新規開発か運営か</strong>（繁忙の波が大きく異なる）</li>
              <li>④ 産休育休の取得実績・復帰率（制度の有無ではなく実績）</li>
              <li>⑤ リモート・フレックスの運用ルール（職種によって扱いが違う企業が多い）</li>
            </ul>
            <p className="text-sm text-text-light mt-3">求人票に出ない実態は、ゲーム業界の内情に詳しいエージェント経由で確認するのが確実です。</p>
          </div>
        </div>
      </section>

      {/* sec7 未経験・異業種からの入り方 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験・異業種からの現実的な入り方</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「ゲーム業界＝狭き門」のイメージがありますが、入口を選べば現実的です。特に運営型のスマホゲームはWebサービスと技術構成が近いため、<strong>Web業界での経験がほぼそのまま評価されます</strong>。Web業界との比較は<a href="/articles/web-industry/" className="hover:underline font-bold" style={{ color: "#0891b2" }}>Web系企業への転職ガイド</a>も参考にしてください。
            </p>
          </div>
          <div className="space-y-4">
            {[
              { step: "ルート1", title: "Web系サーバーサイド → ゲームサーバー（最短）", desc: "Go/Python/JavaのAPI開発・AWS運用経験があれば、ゲーム開発未経験でも応募可能な求人が多数あります。大規模トラフィックやリアルタイム通信の経験があれば強力な加点要素です。" },
              { step: "ルート2", title: "QA・テスト自動化 → ゲームQAエンジニア", desc: "テスト設計・自動化の経験はゲーム業界でも通用します。QA組織の内製化を進める企業が増えており、自動化人材の需要は安定。QA職の全体像は当サイトのQA・テスターガイドで解説しています。" },
              { step: "ルート3", title: "Unityポートフォリオ → クライアントエンジニア", desc: "完全未経験からクライアント職を狙う場合は、Unity＋C#で小さなゲームを完成・公開するポートフォリオが事実上の必須条件です。学習期間は1日2〜3時間で半年程度が一つの目安です。" },
              { step: "ルート4", title: "業界研究 + エージェント活用で選考対策", desc: "応募先のゲームを実際にプレイし、CEDECの講演資料などで業界特有の技術課題を把握すると、面接の説得力が大きく上がります。求人の探し方は業界特化エージェントの併用が効率的です。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>{item.step}</span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめエージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ゲーム業界に強いエージェント</h2>
          <div className="space-y-4 mt-4">
            {[
              { name: "Geekly", badge: "ゲーム業界特化", color: "#7c3aed", desc: "IT・Web・ゲーム業界特化の転職エージェント。大手ゲーム会社からインディーゲームスタジオまで幅広い求人を保有。書類選考通過率3.4倍の実績。", link: "/reviews/geekly/" },
              { name: "レバテックキャリア", badge: "IT特化型", color: "#0891b2", desc: "IT業界全般に強いエージェントで、ゲーム業界の求人も豊富。技術力を重視した求人提案が特徴で、年収交渉にも強い。", link: "/reviews/levtech/" },
              { name: "Green", badge: "スカウト型", color: "#10b981", desc: "ゲーム会社からの直接スカウトが届くプラットフォーム。カジュアル面談から始められるため、まずは業界の雰囲気を知りたい方におすすめ。", link: "/reviews/green/" },
            ].map((agent, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: agent.color }}>{agent.badge}</span>
                  <h3 className="text-lg font-bold">{agent.name}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed mb-3">{agent.desc}</p>
                <a href={agent.link} className="text-sm font-bold hover:underline" style={{ color: "#0891b2" }}>{agent.name}の詳細レビューを見る →</a>
              </div>
            ))}
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p className="text-sm">
              レバテックキャリアとGeeklyのどちらに登録すべきか迷う場合は、両社の特徴を並べて比較した<a href="/articles/levtech-vs-geekly/" className="hover:underline font-bold" style={{ color: "#0891b2" }}>レバテックキャリアとGeeklyの比較記事</a>が参考になります。ゲーム業界を含むかどうか・サポートの進め方など、公開情報ベースで違いを整理しています。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d1dce5" }}>
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                  <span><span style={{ color: "#0891b2" }} className="mr-2">Q.</span>{faq.name}</span>
                  <span className="text-text-light group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                  <p className="pt-4"><span style={{ color: "#f97066" }} className="font-bold mr-2">A.</span>{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 出典一覧 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">本記事の出典</h2>
          <ul className="space-y-2 text-sm text-text-light leading-relaxed">
            <li>・角川アスキー総合研究所「ファミ通ゲーム白書2025」（2026年6月参照）— 国内・世界ゲームコンテンツ市場規模</li>
            <li>・CESA「ゲーム開発者の就業とキャリア形成2023」（2026年6月参照）— 女性比率、個人年収、男女別年収分布、就業年数</li>
            <li>・CEDEC「ゲーム開発者の就業とキャリア形成2025」（ゲームメーカーズ報道、2026年6月参照）— 個人年収平均、転職経験率、年収上昇率、職種構成</li>
            <li>・求人ボックス 給料ナビ「ゲームプログラマーの年収」（2026年5月時点データ、2026年6月参照）— 平均年収・年収幅・ボリュームゾーン</li>
            <li>・レバテックキャリア「Unityに関わるエンジニアの平均年収・給料の統計」（2026年6月参照）— Unityエンジニアの平均・中央値</li>
            <li>・ウィルオブテック「QAエンジニアの年収は低い？」（2026年6月参照）— テスター・QAエンジニアの平均年収</li>
          </ul>
          <p className="text-sm text-text-light mt-4">※年収は統計の取得方法（求人掲載額・登録者実績・開発者アンケート）により差があります。本文ではそれぞれの性質を明記した上で併記しています。</p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/csharp-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性C#エンジニアの転職ガイド</h3>
              <p className="text-sm text-text-light">Unityゲーム開発と業務系、C#で広がる2つの道</p>
            </a>
            <a href="/articles/web-industry/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>Web系企業への転職ガイド</h3>
              <p className="text-sm text-text-light">ゲームサーバーに近い技術構成のWeb業界を知る</p>
            </a>
            <a href="/articles/qa-tester/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>QAエンジニア・テスター転職ガイド</h3>
              <p className="text-sm text-text-light">ゲーム業界への入口にもなるQA職の全体像</p>
            </a>
            <a href="/articles/levtech-vs-geekly/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>レバテックキャリアとGeeklyを比較</h3>
              <p className="text-sm text-text-light">ゲーム業界に強いのはどっち？公開情報で比較</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">ゲーム業界への転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">ゲーム業界に強いエージェントに無料相談して、理想のポジションを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
