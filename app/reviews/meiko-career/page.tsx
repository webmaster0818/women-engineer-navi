import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "明光キャリアパートナーズの評判・口コミ｜エンジニアからM&A・コンサル転職という選択肢を検証",
  description:
    "株式会社明光キャリアパートナーズ（STRATEGY CAREER・Reverse）を女性エンジニア目線でレビュー。M&A・コンサルティングファーム・ファンド領域特化の人材紹介で、IT実務の転職エージェントではない点も含め、公式情報をもとに正直に解説します。",
  keywords:
    "明光キャリアパートナーズ 評判, 明光キャリアパートナーズ 口コミ, STRATEGY CAREER 評判, Reverse コンサル 評判, エンジニア M&A 転職",
  alternates: { canonical: "/reviews/meiko-career/" },
  openGraph: {
    title: "明光キャリアパートナーズの評判・口コミ｜エンジニアからM&A・コンサル転職という選択肢を検証",
    description:
      "M&A・コンサルティングファーム・ファンド領域特化の人材紹介「明光キャリアパートナーズ」を女性エンジニア目線でレビュー。IT実務エージェントとの違いも正直に解説。",
    url: "https://women-engineer.com/reviews/meiko-career/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "明光キャリアパートナーズの評判・口コミ｜エンジニアからM&A・コンサル転職という選択肢を検証",
  datePublished: "2026-07-17",
  dateModified: "2026-07-17",
  author: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  description:
    "M&A・コンサルティングファーム・ファンド領域特化の人材紹介「明光キャリアパートナーズ」を女性エンジニア目線でレビュー。IT実務エージェントとの違いも正直に解説。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/reviews/meiko-career/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "明光キャリアパートナーズはどんな人に向いていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "M&Aブティック・コンサルティングファーム・ファンドといったハイキャリア領域へのキャリアチェンジを目指す方向けのサービスです。公式サイトでは、リスキリング講座を用いた学習からスタートする人材紹介「STRATEGY CAREER」と、外資系戦略コンサル・外資系投資銀行向けの合格コーチング「Reverse」を展開すると説明されています。エンジニア経験を活かしてM&AアドバイザーやITコンサルタントなどへ転身したい方が、選択肢のひとつとして検討できるサービスです。",
      },
    },
    {
      "@type": "Question",
      name: "エンジニアの実務転職（IT職のままの転職）にも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "向きません。明光キャリアパートナーズの人材紹介はコンサルティングファーム・M&Aブティック・ファンド領域が中心で、ITエンジニアの実務求人に特化したサービスではありません（公式サイト事業紹介の記載に基づく・2026年7月参照）。エンジニアのままキャリアアップ・年収アップを目指す方には、IT特化型のテックゴーやレバテックキャリアの利用をおすすめします。一方、M&A転職向けLPの相談フォームには現在の職種として「ITエンジニア（システム開発・SE・インフラ）」の選択肢があり、エンジニアからのキャリアチェンジ相談は受け付ける設計になっています。",
      },
    },
    {
      "@type": "Question",
      name: "明光キャリアパートナーズの利用は無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "M&A転職LPの無料相談フォームなど、相談自体は無料と案内されています。人材紹介（転職エージェント）は採用企業から紹介手数料を受け取るビジネスモデルのため求職者は無料で利用できるのが一般的です。ただし、グループの「Reverse」は合格に向けたコーチングサービスであり、体験談でも有料サービスとして言及されています。コーチング系サービスの料金体系は公式サイトにまとまった掲載が確認できなかったため、利用前に無料相談などで直接確認することをおすすめします（2026年7月時点）。",
      },
    },
    {
      "@type": "Question",
      name: "女性エンジニア向けのサポートはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "女性専用プログラムや女性特化の窓口に関する記載は、公式サイトに確認できませんでした（2026年7月時点）。IT特化や女性特化のサポートを重視する方は、当サイトで紹介しているIT特化型・女性特化型エージェントとの併用・比較をおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "明光キャリアパートナーズの運営会社はどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "株式会社明光キャリアパートナーズ（東京都千代田区麹町5-4 JPR麹町ビル3階）です。設立2022年9月・資本金5,000万円・代表取締役社長は中川拓哉氏。有料職業紹介事業許可番号13-ユ-314857、労働者派遣事業許可番号派13-316441を取得しています。教育事業40年の実績をうたう「明光グループ」の一員として、ハイキャリア人材紹介のほか外国籍人材紹介・研修事業、外国人向け日本語学習サービス「Japany」も展開しています（出典: 公式サイト会社概要・事業紹介、2026年7月参照）。",
      },
    },
  ],
};

export default function MeikoCareerReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "エージェントレビュー", href: "/reviews/" }, { label: "明光キャリアパートナーズ" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
              ハイキャリア領域特化型
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              明光キャリアパートナーズの評判・口コミ
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                エンジニアからM&A・コンサル転職という選択肢を検証
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月17日（会社情報・サービス内容を公式サイトで同日確認）</p>
          </div>
        </div>
      </section>

      {/* 先に結論 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #d9c7b8" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>先に結論: IT実務の転職エージェントではありません</h2>
            <p className="text-sm text-text-light leading-relaxed">
              明光キャリアパートナーズは、コンサルティングファーム・M&Aブティック・ファンド領域を中心としたハイキャリア人材紹介の会社です。女性エンジニア向けのIT実務求人を扱うエージェントではなく、当サイトでは「エンジニア経験を活かしてM&A・コンサルティング・金融などのハイキャリア領域へキャリアチェンジしたい方」向けの選択肢として紹介します。エンジニアのまま転職したい方は、IT特化型の<Link href="/reviews/techgo/" className="underline hover:text-primary" style={{ color: "#7c3a55" }}>テックゴー</Link>や<Link href="/reviews/levtech/" className="underline hover:text-primary" style={{ color: "#7c3a55" }}>レバテックキャリア</Link>のレビューをご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 総合評価 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6 md:p-8" style={{ borderColor: "#d9c7b8" }}>
            <h2 className="text-2xl font-bold mb-6">総合評価（女性エンジニア目線）</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-bold" style={{ color: "#7c3a55" }}>3.0</span>
                  <span className="text-text-light text-lg">/ 5.0</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-2xl" style={{ color: star <= 3 ? "#f59e0b" : "#d9c7b8" }}>★</span>
                  ))}
                </div>
                <p className="text-text-light text-sm">
                  M&A・コンサル・ファンド領域のキャリアチェンジ支援としては学習型の独自性があるが、IT実務求人の専門性はスコアの対象外レベル（扱う領域が異なる）。当サイトの読者層には「キャリアチェンジしたい場合のみ検討する選択肢」という位置づけの評価です。
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "IT実務求人の専門性", score: 1 },
                  { label: "ハイキャリア領域の専門性", score: 4 },
                  { label: "学習・選考対策サポート", score: 4 },
                  { label: "実績・情報の公開度", score: 3 },
                  { label: "女性への配慮", score: 2 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="w-40 text-sm font-medium">{item.label}</span>
                    <div className="h-2 flex-1 rounded-full" style={{ backgroundColor: "#e4d6c8" }}>
                      <div className="h-2 rounded-full" style={{ width: `${(item.score / 5) * 100}%`, backgroundColor: "#7c3a55" }} />
                    </div>
                    <span className="text-sm font-bold" style={{ color: "#7c3a55" }}>{item.score}.0</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-text-light mt-4">
              ※「IT実務求人の専門性」が低いのは欠点というより対象領域の違いです。M&A・コンサル領域の支援品質を示すものではありません。
            </p>
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
                  ["会社名", "株式会社明光キャリアパートナーズ"],
                  ["所在地", "東京都千代田区麹町5-4 JPR麹町ビル3階"],
                  ["設立", "2022年9月"],
                  ["資本金", "5,000万円"],
                  ["代表取締役社長", "中川 拓哉"],
                  ["有料職業紹介事業許可番号", "13-ユ-314857"],
                  ["労働者派遣事業許可番号", "派13-316441"],
                  ["タイプ", "ハイキャリア領域（M&A・コンサル・ファンド）特化の人材紹介＋合格コーチング"],
                  ["主なサービス", "STRATEGY CAREER（ハイクラス人材紹介）／Reverse（外資系戦略コンサル・外資系投資銀行向け合格コーチング）"],
                  ["公表実績", "STRATEGY CAREER: 2023年上期内定率40%（公式は業界平均5%と対比）※1"],
                  ["利用料金", "無料相談あり。人材紹介は求職者無料が一般的だが、コーチング系サービスの料金体系は公式サイトで要確認"],
                  ["公式サイト", "meiko-career.jp"],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f0e7dd" } : {}}>
                    <th className="px-4 py-3 text-left text-sm font-bold w-44" style={{ borderBottom: "1px solid #d9c7b8", color: "#7c3a55" }}>{label}</th>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d9c7b8" }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3">
            ※1 明光キャリアパートナーズ公式サイト「事業紹介」ページの表記に基づく（2026年7月参照）。会社情報は公式サイト「会社概要」ページを2026年7月17日に確認したものです。
          </p>
        </div>
      </section>

      {/* とは */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">明光キャリアパートナーズとは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              株式会社明光キャリアパートナーズは、2022年9月設立の人材サービス会社です。教育事業40年の実績をうたう「明光グループ」の一員で、「教育のノウハウ・経験を生かし、世界の人材と日本の企業を繋ぐ」ことをコンセプトに掲げています。有料職業紹介事業（13-ユ-314857）と労働者派遣事業（派13-316441）の許可を取得した実在の人材紹介会社です。
            </p>
            <p>
              事業は大きく3つ。①コンサルティングファーム・M&Aブティック・ファンド領域を中心としたハイキャリア人材紹介事業、②外国籍人材紹介・研修事業、③外国人向けオンライン日本語学習サービス「Japany」です。当ページで取り上げるのは①のハイキャリア人材紹介事業です。
            </p>
            <p>
              ハイキャリア人材紹介は2つのサービスで構成されています。ひとつは「STRATEGY CAREER」。コンサルティングファーム・M&Aブティックを中心としたハイクラス特化の人材紹介で、「人対人」のマッチングだけでなくリスキリング講座を用いた学習からスタートする点が特徴とされ、公式サイトは2023年上期の内定率40%（業界平均5%と対比）を掲げています。
            </p>
            <p>
              もうひとつは「Reverse」。外資系戦略コンサルティングファーム・外資系投資銀行への合格に向けたコーチングサービスで、新卒・中途の両方を支援しています。明光キャリアパートナーズの事業紹介ページではNPS 82.2、外資系戦略コンサルの内定者・現役社員・OB約50名、外資系投資銀行の内定者・OB約20名のメンター体制を公表しています（なおReverse公式サイトの現行表記ではNPS 67.7となっており、計測時点により数値が異なります。2026年7月確認）。
            </p>
            <p>
              M&A転職向けのランディングページでは、M&A転職決定年収平均880万円以上（公式表記）、大手コンサルティングファーム監修の動画コンテンツ50本以上、キャリアアドバイザーとメンターの2on1による面接対策、現役M&Aアドバイザーによる選考対策サポートが紹介されています。
            </p>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: 明光キャリアパートナーズ公式サイト（会社概要・事業紹介・M&A転職LP）、2026年7月参照。
          </p>
        </div>
      </section>

      {/* 女性エンジニアから見た位置づけ */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアから見た位置づけ</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "IT実務求人のエージェントではない",
                desc: "扱う領域はコンサルティングファーム・M&Aブティック・ファンドが中心で、開発・インフラなどIT実務職の求人紹介に特化したサービスではありません。エンジニアのまま年収アップ・キャリアアップを目指すなら、IT特化型エージェントが本命です。",
              },
              {
                title: "エンジニアからの転身相談は受け付ける設計",
                desc: "M&A転職LPの無料相談フォームには、現在の職種の選択肢に「ITエンジニア（システム開発・SE・インフラ）」があります。論理的思考力やDX文脈の知見を武器に、M&AアドバイザーやITコンサルタントへキャリアチェンジしたい方の相談口として使える設計です。",
              },
              {
                title: "学習からスタートする支援スタイル",
                desc: "STRATEGY CAREERは求人を紹介するだけでなく、リスキリング講座を用いた学習から始める点が特徴とされています。ケース面接など業界特有の選考がある未経験領域への挑戦では、この「学んでから挑む」設計は合理的です。",
              },
              {
                title: "IT特化・女性専用プログラムの記載はなし",
                desc: "公式サイトに、IT職向けの特化サポートや女性専用プログラム・女性特化窓口の記載は確認できませんでした（2026年7月時点）。産休育休や時短など女性の働き方に関する情報を重視する方は、面談で個別に確認する必要があります。",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-light mt-4">
            ※IT実務のまま転職したい方は<Link href="/reviews/techgo/" className="underline hover:text-primary">テックゴー</Link>・<Link href="/reviews/levtech/" className="underline hover:text-primary">レバテックキャリア</Link>のレビューを、キャリアチェンジ先としてのITコンサルの仕事内容は<Link href="/articles/it-consultant/" className="underline hover:text-primary">ITコンサルタントの職種ガイド</Link>をご覧ください。
          </p>
        </div>
      </section>

      {/* 口コミ・評判 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-2">明光キャリアパートナーズの口コミ・評判</h2>
          <p className="text-xs text-text-light mb-8">
            ※明光キャリアパートナーズ本体（STRATEGY CAREER）について、公式サイトに利用者の声のまとまった掲載は確認できませんでした（2026年7月時点）。以下は、グループのコーチングサービス「Reverse」公式サイトの「お客様体験談」に掲載されているインタビューを要約・再構成したものです。ReverseはSTRATEGY CAREER本体（人材紹介）とは別のコーチングサービスであり、いずれも公式発信の内容（氏名は原文でも仮名）です。出典元の原文とは異なります。
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3a55" }}>Reverse公式サイト掲載の体験談（要約）</h3>
          <div className="space-y-4 mb-8">
            {[
              {
                reviewer: "佐藤さん（仮名）非ビジネス職から業界未経験でMBB内定（コーチング利用2ヶ月）",
                source: "https://reverse-inc.jp/career/userinterview/3263/",
                sourceLabel: "Reverse 体験談vol.3（2022年8月公開）",
                text: "前職は非ビジネス職で、コンサルティング業界も全くの未経験。独学で選考を受けて全落ちした経験からケース力に課題意識を持ち、Reverseを利用。内定までに約500問のケース問題を解き、仕事後に1日3〜4時間の対策を継続した。「実際に志望先の選考を突破した内定者から、志願者目線のフィードバックを受けられた点が最も良かった」と語り、複数メンターの視点で回答を修正できたことを重要ポイントに挙げている。",
              },
              {
                reviewer: "西尾さん（仮名）総合コンサルからTier2外資系戦略コンサルへ転職（コーチング利用2ヶ月）",
                source: "https://reverse-inc.jp/career/userinterview/3742/",
                sourceLabel: "Reverse 体験談vol.9（2022年10月公開）",
                text: "現職が総合コンサルでも「戦略コンサルの面接レベルは高く、決して楽ではなかった」と率直に振り返る。トータル200問ほどのケース対策をこなし、馴染みのないテーマを意識的に演習。「転職エージェントの担当者は戦略コンサル出身でないことも多く対策回数も限られるが、Reverseのメンターは自分の弱いところを指摘して改善してくれた」と、中途対応への当初の不安が解消されたことを語っている。",
              },
            ].map((review, i) => (
              <div key={i} className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #ecdcce" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "#7c3a55" }}>{review.reviewer}</p>
                <p className="text-sm text-text-light leading-relaxed">{review.text}</p>
                <p className="text-xs text-text-light mt-3">
                  出典: <a href={review.source} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">{review.sourceLabel}</a>（公式発信の内容・2026年7月参照）
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: "#c15f47" }}>利用前に知っておきたい注意点</h3>
          <div className="space-y-4 mb-6">
            {[
              {
                reviewer: "第三者の口コミはまだ少ない（設立2022年）",
                text: "明光キャリアパートナーズは設立2022年9月と新しい会社で、口コミサイトやSNSでの第三者のまとまった投稿はまだ少ない段階です。上記の体験談も公式サイト掲載のインタビューである点を踏まえ、支援の相性は無料相談で直接確かめるのが確実です。",
              },
              {
                reviewer: "体験談はReverse（コーチング）のもので、人材紹介本体の声ではない",
                text: "上記の体験談はグループの合格コーチングサービス「Reverse」の利用者インタビューであり、人材紹介サービス「STRATEGY CAREER」本体の利用者の声ではありません。STRATEGY CAREERの利用者の声は公式サイトに確認できなかったため（2026年7月時点）、紹介先企業の傾向やサポート内容は面談時に具体的に質問することをおすすめします。",
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
              <li><a href="https://meiko-career.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">明光キャリアパートナーズ公式サイト</a></li>
              <li><a href="https://meiko-career.jp/company/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">明光キャリアパートナーズ公式サイト - 会社概要</a></li>
              <li><a href="https://meiko-career.jp/business/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">明光キャリアパートナーズ公式サイト - 事業紹介（STRATEGY CAREER・Reverse）</a></li>
              <li><a href="https://reverse-inc.jp/customer-reviews/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">Reverse公式サイト - お客様体験談</a></li>
            </ul>
            <p className="pt-1">いずれも2026年7月参照。掲載内容は調査時点のものであり、変更される場合があります。</p>
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
                  "リスキリング講座を用いた学習からスタートする支援設計（STRATEGY CAREER）で、未経験領域への挑戦と相性が良い",
                  "STRATEGY CAREERは2023年上期内定率40%（公式は業界平均5%と対比）を公表※1",
                  "M&A転職LPではM&A転職決定年収平均880万円以上・動画50本以上・2on1面接対策など具体的な支援内容を明示※2",
                  "Reverseは外資系戦略コンサル・外資系投資銀行の内定者らによるメンター体制とNPS 82.2を公表※1（Reverse公式サイトの現行表記は67.7・時点差あり）",
                  "M&A転職LPの相談フォームに「ITエンジニア」の職種選択肢があり、エンジニアからの転身相談を想定した設計",
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
                  "IT実務求人のエージェントではないため、エンジニアのまま転職したい人には不向き",
                  "女性専用プログラム・女性特化窓口の記載が公式サイトにない",
                  "設立2022年と新しく、第三者の口コミがまだ少ない",
                  "コーチング系サービス（Reverse）の料金体系は公式サイトにまとまった掲載がなく、要確認",
                ].map((demerit, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span style={{ color: "#c15f47" }} className="font-bold shrink-0">△</span>
                    <span className="text-text-light">{demerit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-text-light mt-3">
            ※1 明光キャリアパートナーズ公式サイト「事業紹介」の表記　※2 M&A転職LP（meiko-career.jp/lp2/ma4/）の表記（いずれも2026年7月参照）
          </p>
        </div>
      </section>

      {/* 利用の流れ */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">利用の流れ（M&A転職の場合）</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "無料相談申し込み", desc: "M&A転職LPの無料相談フォームから申し込み。現在の職種（ITエンジニアの選択肢あり）や連絡先を入力すると、専任のアドバイザーから3営業日以内に連絡が来るとされています。" },
              { step: "2", title: "講座受講", desc: "業界理解や選考対策のための講座を受講。大手コンサルティングファーム監修の50本以上の動画コンテンツで、M&A業界への転職に必要なスキル習得をサポートするとされています。" },
              { step: "3", title: "転職先の企業紹介", desc: "非公開求人や特別選考ルートを含む求人の紹介を受けます。M&Aブティック・コンサルティングファームなどが中心です。" },
              { step: "4", title: "面接～内定", desc: "キャリアアドバイザーとメンターの2on1体制で面接対策を実施。現役のM&Aアドバイザー・コンサルタントによるメンタリングも受けられるとされています。" },
              { step: "5", title: "オファー条件交渉", desc: "内定後の年収などの条件交渉までサポートを受けられます。" },
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
          <p className="text-xs text-text-light mt-6">
            ※M&A転職LP「内定までの流れ」の記載に基づく（2026年7月参照）。キャリアチェンジ先の職種理解には「<Link href="/articles/it-consultant/" className="underline hover:text-primary" style={{ color: "#7c3a55" }}>ITコンサルタントの職種ガイド</Link>」もあわせてご覧ください。
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
                  "エンジニア経験を活かしてM&A・コンサル・金融領域へキャリアチェンジしたい方",
                  "リスキリング講座など「学習から始める」支援スタイルに魅力を感じる方",
                  "外資系戦略コンサル・外資系投資銀行への挑戦でコーチング（Reverse）を検討したい方",
                  "M&A業界の年収水準（公式表記で転職決定年収平均880万円以上）に関心がある方",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-light"><span style={{ color: "#7c3a55" }}>●</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#c15f47" }}>向いていない方</h3>
              <ul className="space-y-2">
                {[
                  "エンジニアのままIT実務で転職・年収アップしたい方（テックゴー・レバテックキャリア推奨）",
                  "女性特化の手厚いサポートを最優先したい方",
                  "第三者の口コミが豊富な、運営歴の長いサービスを使いたい方",
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
            <Link href="/articles/it-consultant/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} ITコンサルタントとは？仕事内容・年収・キャリアパス</Link>
            <Link href="/reviews/techgo/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} テックゴー（TechGo）の口コミ・評判</Link>
            <Link href="/reviews/levtech/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} レバテックキャリアの口コミ・評判</Link>
            <Link href="/articles/career-path/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} 女性エンジニアのキャリアパス5類型マップ</Link>
            <Link href="/ranking/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} 女性エンジニア向け転職エージェント・転職サイトランキング</Link>
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
          <h2 className="text-2xl font-bold mb-4">キャリアチェンジを考えるなら、まず公式サイトで詳細を確認</h2>
          <p className="text-text-light mb-6">エンジニア経験を活かしたM&A・コンサル領域への転身に関心がある方は、公式サイトでサービス内容と無料相談の詳細を確認できます。IT実務のまま転職したい方はIT特化型エージェントのレビューをご覧ください。</p>
          <a href="https://meiko-career.jp/" target="_blank" rel="noopener noreferrer nofollow" className="btn-cta">明光キャリアパートナーズ公式サイトへ</a>
          <p className="mt-3 text-xs text-text-light">公式サイトへ移動します（アフィリエイト広告ではありません）</p>
        </div>
      </section>
    </>
  );
}
