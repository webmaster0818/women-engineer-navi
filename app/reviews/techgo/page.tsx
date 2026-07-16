import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "テックゴー（TechGo）の口コミ・評判｜平均138万円年収アップの実力を検証",
  description:
    "ITエンジニア特化の転職エージェント「テックゴー（TechGo）」を女性エンジニア目線で徹底レビュー。平均138万円の年収アップ実績・無料キャリア面談・企業別の選考対策など、公式情報をもとに強みと注意点を解説します。",
  keywords:
    "テックゴー 口コミ, テックゴー 評判, TechGo 評判, テックゴー 無料キャリア面談, テックゴー 女性 エンジニア",
  alternates: { canonical: "/reviews/techgo/" },
  openGraph: {
    title: "テックゴー（TechGo）の口コミ・評判｜平均138万円年収アップの実力を検証",
    description:
      "ITエンジニア特化の転職エージェント「テックゴー」を女性エンジニア目線で徹底レビュー。年収アップ実績・無料キャリア面談・選考対策の実力を公式情報をもとに検証。",
    url: "https://women-engineer.com/reviews/techgo/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "テックゴー（TechGo）の口コミ・評判｜平均138万円年収アップの実力を検証",
  datePublished: "2026-07-02",
  dateModified: "2026-07-16",
  author: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  description: "ITエンジニア特化の転職エージェント「テックゴー」を女性エンジニア目線で徹底レビュー。年収アップ実績・無料キャリア面談・選考対策の実力を検証。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/reviews/techgo/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "テックゴーの利用は本当に無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、無料です。キャリア面談・求人紹介・書類添削・面接対策・年収交渉から入社後のフォローまで、求職者側の費用負担はありません。転職エージェントは採用企業から紹介手数料を受け取る人材紹介のビジネスモデルのため、求職者は無料でサービスを利用できます。",
      },
    },
    {
      "@type": "Question",
      name: "テックゴーの運営会社はどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "株式会社MyVision（東京都港区虎ノ門4-1-1 神谷町トラストタワー24階）が運営しています。有料職業紹介事業許可番号は13-ユ-314719で、コンサル転職エージェント「MyVision」などの人材紹介サービスも展開している会社です（出典: テックゴー公式サイト会社概要、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "テックゴーの無料キャリア面談では何をしますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "業界に精通したキャリアアドバイザーが、これまでの経験・スキルセット・今後のキャリアの展望や悩みをヒアリングし、市場価値の客観的な把握と転職活動の方向性づくりをサポートします。登録フォームの入力は最短60秒とされています。詳しくは当サイトの「テックゴーの無料キャリア面談とは」の記事で解説しています。",
      },
    },
    {
      "@type": "Question",
      name: "テックゴーは未経験からのエンジニア転職でも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "テックゴーは「ITエンジニアの転職支援に特化」を掲げ、経験を活かした年収アップ・キャリアアップの支援を前面に打ち出しています。未経験からのスキル習得サポート（無料スクールなど）は公式サイトに記載がないため、未経験スタートの方はワークポートなど未経験支援に実績のあるエージェントとの併用をおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "テックゴーに女性エンジニア向けのサポートはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "女性専用のプログラムや女性特化の窓口は公式サイトに記載がありません。一方で、キャリア面談で職場環境や働き方の希望を含めてヒアリングし、技術スタック・組織文化・成長性まで加味して応募先を選定するとされているため、リモート可否や産休育休の取得状況などの希望は面談で具体的に伝えるのがポイントです。女性特化の手厚いサポートを重視する場合はtype女性の転職エージェントとの併用が有力です。",
      },
    },
    {
      "@type": "Question",
      name: "テックゴーの面談を受けた後、応募や転職を断ってもいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "断れます。公式サイトの「ご利用の流れ」では、紹介された求人の中から「興味を持っていただいた求人へ応募」と説明されており、応募するかどうかは求職者が選ぶ設計です。面談を受けた結果「今は転職しない」という結論になった場合も、担当アドバイザーにその旨を率直に伝えれば問題ありません。無理な引き止めや連絡頻度に関する公式の記載はないため、気になる場合は面談時に連絡手段・頻度の希望（メール中心など）を先に伝えておくとスムーズです。",
      },
    },
    {
      "@type": "Question",
      name: "テックゴーの口コミが少ないのはなぜですか？怪しくないですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "テックゴーはサービスの歴史が比較的浅いため、SNSや口コミサイトでの第三者の投稿がまだ少ない段階です。口コミが少ないこと自体は「怪しい」ことを意味しません。運営元の株式会社MyVisionは有料職業紹介事業許可（13-ユ-314719）を取得した実在の人材紹介会社で、コンサル転職エージェント「MyVision」の運営実績もあります。当サイトでは公式サイトの公開情報（実績数値・注記・会社概要）を確認した範囲で本ページを作成しており、掲載情報は2026年7月16日に公式サイトで再確認済みです。第三者の口コミを重視する方は、運営歴が長く情報が豊富なレバテックキャリアとの併用・比較をおすすめします。",
      },
    },
  ],
};

export default function TechgoReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "エージェントレビュー", href: "/reviews/" }, { label: "テックゴー" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
              IT特化型
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              テックゴー（TechGo）の口コミ・評判
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                平均138万円年収アップの実力を検証
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月16日（実績数値・サービス内容を公式サイトで同日再確認）</p>
          </div>
        </div>
      </section>

      {/* 総合評価 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6 md:p-8" style={{ borderColor: "#d9c7b8" }}>
            <h2 className="text-2xl font-bold mb-6">総合評価</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-bold" style={{ color: "#7c3a55" }}>4.2</span>
                  <span className="text-text-light text-lg">/ 5.0</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-2xl" style={{ color: star <= 4 ? "#f59e0b" : "#d9c7b8" }}>★</span>
                  ))}
                </div>
                <p className="text-text-light text-sm">
                  ITエンジニア転職に特化した転職エージェント。開発現場出身のアドバイザーによる選考対策と年収交渉力が強みで、経験を年収に変えたいエンジニアに向く。
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "IT求人の専門性", score: 5 },
                  { label: "年収交渉力", score: 5 },
                  { label: "選考対策", score: 5 },
                  { label: "未経験対応", score: 3 },
                  { label: "女性への配慮", score: 3 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="w-32 text-sm font-medium">{item.label}</span>
                    <div className="h-2 flex-1 rounded-full" style={{ backgroundColor: "#e4d6c8" }}>
                      <div className="h-2 rounded-full" style={{ width: `${(item.score / 5) * 100}%`, backgroundColor: "#7c3a55" }} />
                    </div>
                    <span className="text-sm font-bold" style={{ color: "#7c3a55" }}>{item.score}.0</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 基本情報テーブル */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <tbody>
                {[
                  ["サービス名", "テックゴー（TechGo）"],
                  ["運営会社", "株式会社MyVision"],
                  ["有料職業紹介事業許可番号", "13-ユ-314719"],
                  ["タイプ", "ITエンジニア特化型転職エージェント"],
                  ["求人数", "ITエンジニア向け求人10,000件以上"],
                  ["実績", "年収アップ金額 平均138万円※1／年収交渉成功率100%※2"],
                  ["対応職種", "PG・SE・社内SE・Web系・インフラ・クラウド・セキュリティ・データ/AI・PM/PMO・QAなど"],
                  ["利用料金", "無料"],
                  ["登録", "公式フォームから最短60秒"],
                  ["特別選考", "1day選考会・セミナーあり"],
                  ["公式サイト", "tech-go.jp"],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f0e7dd" } : {}}>
                    <th className="px-4 py-3 text-left text-sm font-bold w-40" style={{ borderBottom: "1px solid #d9c7b8", color: "#7c3a55" }}>{label}</th>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d9c7b8" }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3">
            ※1 2025年6〜7月において内定承諾をし、年収アップを実現された方の平均実績　※2 2025年9月時点実績（いずれもテックゴー公式サイトの表記に基づく。2026年7月参照）
          </p>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">テックゴーとは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              テックゴー（TechGo）は、株式会社MyVisionが運営するITエンジニアの転職支援に特化した転職エージェントです。キャリア相談から応募先企業の選定、選考対策、年収交渉まで、内定・入社に至るすべてのステップをキャリアアドバイザーがサポートすると公式サイトで説明されています。
            </p>
            <p>
              保有求人はITエンジニア向けが10,000件以上で、メガベンチャー・大手事業会社・ITコンサルなど幅広い企業を紹介。独占選考ルートや面接確約求人といった独自の求人もあるとされています。
            </p>
            <p>
              実績として公式サイトが掲げるのは「年収アップ金額 平均138万円（2025年6〜7月に内定承諾し年収アップを実現した方の平均実績）」「年収交渉成功率100%（2025年9月時点実績）」という数字です。年代別では20代エンジニアで平均120万円、30代エンジニアで平均160万円の年収アップに成功しているとしています。
            </p>
            <p>
              在籍するキャリアアドバイザーは、メガベンチャーIT部門出身者・ITコンサル出身者・大手エージェント出身者など。公式サイトでは富士通やパーソルキャリア、伊藤忠テクノソリューションズ（CTC）出身のアドバイザーが実名で紹介されており、開発現場と採用現場の両方を知る体制を打ち出しています。
            </p>
            <p>
              運営元の株式会社MyVisionは東京都港区虎ノ門に本社を置き、有料職業紹介事業許可番号13-ユ-314719を取得。コンサル転職エージェント「MyVision」をはじめ、建設・会計士・製造業界向けの人材紹介サービスも展開しているグループです。
            </p>
          </div>
        </div>
      </section>

      {/* 女性エンジニアへの強み */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアから見た強み</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "経験を年収に変える交渉力",
                desc: "内定後は市場相場とスキルに見合った適正年収を判断し、企業側の評価軸を理解したプロが年収アップ交渉を代行。20代平均120万円・30代平均160万円の年収アップ実績を公式に掲げています。自分から年収の話を切り出しにくい方でも任せられます。",
              },
              {
                title: "企業ごとの実践的な選考対策",
                desc: "書類添削に加えて、応募企業ごとの想定質問に基づいた模擬面接を繰り返し実施。面接官（企業人事）の視点を持つアドバイザーが、技術や熱意が伝わるようにブラッシュアップしてくれるとされています。",
              },
              {
                title: "職場環境まで加味した求人選定",
                desc: "条件が合うだけでなく、技術スタック・組織文化・成長性を加味して応募先を選定すると公式に明記。リモート可否や産休育休の実績など、長く働くための条件を面談で伝えれば、それを踏まえた提案を受けられます。",
              },
              {
                title: "非公開求人・独自の選考ルート",
                desc: "通常の公開求人に加えて非公開求人を保有し、独占選考ルートや面接確約求人もあるとされています。1day選考会など、忙しくても効率的に選考を進められる特別イベントも開催されています。",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-light mt-4">
            ※女性専用プログラム・女性特化窓口の記載は公式サイトにありません。女性特化サポートを重視する方は<Link href="/reviews/type-woman/" className="underline hover:text-primary">type女性の転職エージェント</Link>との併用をおすすめします。
          </p>
        </div>
      </section>

      {/* 口コミ・評判 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-2">テックゴーの口コミ・評判</h2>
          <p className="text-xs text-text-light mb-8">
            ※以下はテックゴー公式サイト「ご利用者の声」に掲載されている内容を要約・再構成したものです。出典元の原文とは異なります。サービス内容は調査時点（2026年7月）のものであり、変更される場合があります。
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3a55" }}>公式サイト掲載の利用者の声（要約）</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                reviewer: "30代男性 アプリケーションエンジニア（満足度5）",
                text: "最初の面談で一緒にキャリアプランを考えてくれ、提案が熱心だったためエージェントをTechGo一本に絞った。面接対策は不安がなくなるまで連日実施してもらい、「上手く話す」ではなく「企業にとって印象の良い構図にする」ところまでこだわったアドバイスが内定に直結した。年収交渉も対応してもらい納得の結果になった。",
              },
              {
                reviewer: "20代男性 インフラエンジニア（満足度5）",
                text: "転職するか現職に残るか決めきれずにいたが、面談でのヒアリングとアドバイスを通じて自分の目指す姿を明確化できた。希望条件に合う企業の選考をサポートしてもらい、キャリアのステップアップができる企業から内定を得られた。",
              },
              {
                reviewer: "30代男性 フロントエンドエンジニア（満足度5）",
                text: "希望に沿った勤務地・年収・業務内容の企業に内定。こまめなフォローと連絡で、登録から1か月ほどで内定まで進んだ。計3回の模擬面接で毎回的確なフィードバックをもらい、志望動機や転職軸をはっきり伝えられるようになって複数社から内定を得た。",
              },
            ].map((review, i) => (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #ecdcce" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "#7c3a55" }}>{review.reviewer}</p>
                <p className="text-sm text-text-light leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#c15f47" }}>利用前に知っておきたい注意点</h3>
          <div className="space-y-4 mb-6">
            {[
              {
                reviewer: "第三者の口コミがまだ少ない",
                text: "公式サイト以外の口コミサイト（みん評など）には、大手エージェントと比べてまとまった投稿がまだ少ない状況です。上記の利用者の声も公式サイト掲載のものである点を踏まえ、実際のサポートの相性は無料キャリア面談で確かめるのが確実です。",
              },
              {
                reviewer: "未経験向けの育成サポートは打ち出していない",
                text: "テックゴーはエンジニア経験を活かした年収アップ・キャリアアップの支援を前面に掲げており、無料スクールのような未経験向け育成プログラムの記載は公式サイトにありません。未経験からのスタートを考えている方は、未経験支援に実績のあるエージェントとの併用が安心です。",
              },
            ].map((review, i) => (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "#c15f47" }}>{review.reviewer}</p>
                <p className="text-sm text-text-light leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="text-xs text-text-light mt-4 space-y-1">
            <p>出典・参考:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="https://tech-go.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">テックゴー公式サイト</a></li>
              <li><a href="https://tech-go.jp/service" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">テックゴー公式サイト - サービスのご紹介（ご利用者の声）</a></li>
              <li><a href="https://tech-go.jp/about" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">テックゴー公式サイト - 会社概要</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">メリット・デメリット</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6" style={{ border: "2px solid #7c3a55" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>メリット</h3>
              <ul className="space-y-3">
                {[
                  "平均138万円※の年収アップ実績を公式に掲げる交渉力（20代平均120万円・30代平均160万円）",
                  "開発現場・採用現場出身のアドバイザーによる企業別の書類添削・模擬面接",
                  "非公開求人・独占選考ルート・面接確約求人などIT特化ならではの求人1万件以上",
                  "キャリア相談から入社後フォローまで完全無料（登録は最短60秒）",
                ].map((merit, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span style={{ color: "#7c3a55" }} className="font-bold shrink-0">◎</span>
                    <span className="text-text-light">{merit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "2px solid #c15f47" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#c15f47" }}>デメリット</h3>
              <ul className="space-y-3">
                {[
                  "未経験からの育成サポート（無料スクール等）は公式に記載がなく、経験者向けの色が強い",
                  "女性専用プログラムの記載はなく、女性特化サポート重視なら他社併用が必要",
                  "第三者サイトの口コミがまだ少なく、相性は面談で見極める必要がある",
                ].map((demerit, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span style={{ color: "#c15f47" }} className="font-bold shrink-0">△</span>
                    <span className="text-text-light">{demerit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-text-light mt-3">※2025年6〜7月において内定承諾をし、年収アップを実現された方の平均実績（公式サイト表記）</p>
        </div>
      </section>

      {/* 利用の流れ */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">利用の流れ</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "無料キャリア面談（キャリア相談）", desc: "公式フォーム（最短60秒）から登録し、キャリアアドバイザーと面談。これまでの経験・スキルセット・今後の展望や悩みをヒアリングし、市場価値の把握と転職活動の方向性を固めます。" },
              { step: "2", title: "求人紹介・応募先選定", desc: "志向性や技術レベルに基づき、非公開求人を含む厳選された求人を紹介。技術スタック・組織文化・成長性まで加味して応募先を選定し、応募手続きはエージェントが代行します。" },
              { step: "3", title: "選考対策", desc: "応募企業ごとの想定質問に基づく実践的な面接対策を実施。書類添削と模擬面接を繰り返し、内定獲得率を引き上げます。" },
              { step: "4", title: "内定獲得・条件交渉", desc: "市場相場とスキルに見合った適正年収を判断し、プロが年収アップ交渉を実施。入社日・役職などの条件調整も任せられます。" },
              { step: "5", title: "入社・入社後フォロー", desc: "入社後の定着までサポート。転職後も定期的に状況を確認してもらえ、長期的なキャリア相談が可能です。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold" style={{ backgroundColor: "#7c3a55" }}>{item.step}</div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-text-light mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-light mt-6">
            面談の内容や準備については「<Link href="/articles/techgo-career-mendan/" className="underline hover:text-primary" style={{ color: "#7c3a55" }}>テックゴーの無料キャリア面談とは？内容・流れ・準備を徹底解説</Link>」で詳しく紹介しています。
          </p>
        </div>
      </section>

      {/* おすすめ・向いていない */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">こんな女性におすすめ / 向いていない人</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>おすすめの方</h3>
              <ul className="space-y-2">
                {[
                  "エンジニア経験を活かして年収を上げたい方",
                  "年収交渉を自分でするのが苦手な方",
                  "企業ごとの実践的な面接対策を受けたい方",
                  "メガベンチャー・大手事業会社・ITコンサルも視野に入れたい方",
                  "まず無料キャリア面談で市場価値を知りたい方",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light"><span style={{ color: "#7c3a55" }}>●</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#c15f47" }}>向いていない方</h3>
              <ul className="space-y-2">
                {[
                  "完全未経験からスキル習得も含めて支援してほしい方（ワークポート推奨）",
                  "女性特化の手厚いサポートを最優先したい方（type女性の転職エージェント推奨）",
                  "フルリモート特化で探したい方（ReWorks推奨）",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light"><span style={{ color: "#c15f47" }}>●</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <div className="mx-auto max-w-4xl px-4">
        <div className="bg-[#f0e7dd] border border-[#d9c7b8] rounded-lg p-5 my-8">
          <h3 className="text-base font-bold text-[#7c3a55] mb-3">関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Link href="/articles/techgo-career-mendan/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} テックゴーの無料キャリア面談とは？内容・流れ・準備</Link>
            <Link href="/articles/techgo-vs-levtech/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} テックゴーとレバテックキャリアの違い｜使い分け</Link>
            <Link href="/articles/how-to-choose/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} 転職エージェントの選び方｜7つのチェックポイント</Link>
            <Link href="/articles/specialized-vs-general/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} IT特化型と総合型の使い分け</Link>
            <Link href="/articles/negotiation/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} 年収交渉のやり方ガイド</Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d9c7b8" }}>
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                  <span><span style={{ color: "#7c3a55" }} className="mr-2">Q.</span>{faq.name}</span>
                  <span className="text-text-light group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d9c7b8" }}>
                  <p className="pt-4"><span style={{ color: "#c15f47" }} className="font-bold mr-2">A.</span>{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: "#efe3d8" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">まずは無料キャリア面談で市場価値を知ろう</h2>
          <p className="text-text-light mb-6">経験を活かした年収アップに強いIT特化エージェント。登録は最短60秒、キャリア相談から入社まで完全無料です。</p>
          <a href="//af.moshimo.com/af/c/click?a_id=5663318&p_id=6722&pc_id=19209&pl_id=85793" target="_blank" rel="nofollow noopener" referrerPolicy="no-referrer-when-downgrade" {...({ attributionsrc: "" } as any)} className="btn-cta">テックゴーに無料相談する</a>
          <img src="//i.moshimo.com/af/i/impression?a_id=5663318&p_id=6722&pc_id=19209&pl_id=85793" width={1} height={1} style={{ border: "none" }} loading="lazy" alt="" />
          <p className="mt-3 text-xs text-text-light">PR（アフィリエイト広告）・テックゴー公式サイトへ移動します</p>
        </div>
      </section>
    </>
  );
}
