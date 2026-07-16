import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "テックゴーとレバテックキャリアの違い｜女性エンジニアの使い分け【2026年】",
  description:
    "テックゴー（TechGo）とレバテックキャリアの違いを公式公開情報で比較。年収アップ実績の公表方法、求人数（1万件以上／約58,000件）、サービスの成熟度に構造的な違いがあります。数値の正しい読み方と、状況別の向き不向き・併用の順番を出典付きで中立に整理します。",
  keywords:
    "テックゴー レバテック 比較, テックゴー レバテックキャリア どっち, TechGo レバテック 違い, テックゴー 比較, 女性エンジニア 転職エージェント 比較",
  alternates: { canonical: "/articles/techgo-vs-levtech/" },
  openGraph: {
    title: "テックゴーとレバテックキャリアの違い｜女性エンジニアの使い分け【2026年】",
    description:
      "テックゴーとレバテックキャリアの違いを公式公開情報で比較。年収アップ実績の公表方法・求人数・成熟度の違いと、状況別の向き不向き・併用の順番を出典付きで整理。",
    url: "https://women-engineer.com/articles/techgo-vs-levtech/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "テックゴーとレバテックキャリアの違い｜女性エンジニアの使い分け【2026年】",
  datePublished: "2026-07-16",
  dateModified: "2026-07-16",
  author: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  description:
    "テックゴーとレバテックキャリアの違いを公式公開情報で比較。年収アップ実績の公表方法・求人数・成熟度の違いと、状況別の向き不向き・併用の順番を出典付きで整理。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/articles/techgo-vs-levtech/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "テックゴーとレバテックキャリアはどちらが年収アップに強いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公表されている数値の「意味」が異なるため、単純な優劣比較はできません。テックゴーは平均年収アップ138万円（2025年6〜7月に内定承諾し年収アップを実現した方の平均実績）と年収交渉成功率100%（2025年9月時点）を公表しています。レバテックキャリアは年収70万円以上アップの実績が多数あると紹介されていますが、これは平均値ではなく実績例です。「平均」と「実績例」は比較の土台が違う数値であることを理解した上で、両方の面談で自分のケースの見込み額を聞き比べるのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "テックゴーとレバテックキャリアは併用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "併用できます。どちらも無料で、複数エージェントの併用は一般的な転職活動の進め方です。同じ求人に別々のエージェントから重複応募しないことだけ注意してください（応募管理表を作るのがおすすめです）。求人の幅はレバテックキャリア（約58,000件・2026年7月時点）、年収交渉の実績打ち出しはテックゴーという公式公開情報の違いがあるため、両方の面談を受けて提案の質で選ぶ方法が合理的です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験からのエンジニア転職ならどちらを使うべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "どちらも実務経験者向けの色が濃いサービスです。テックゴーは経験を活かした年収アップ・キャリアアップを前面に打ち出しており、未経験向け育成サポートの記載は公式サイトにありません。完全未経験の方は、未経験支援に実績のあるワークポートなどを起点にし、実務経験を積んでからテックゴー・レバテックキャリアで年収を上げる、という段階の分け方が現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "女性向けのサポートはどちらが手厚いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2026年7月時点で、テックゴー・レバテックキャリアのどちらにも女性専用プログラムの記載は公式サイトにありません。産休育休の取得実績・時短勤務・チームの女性比率などは、どちらを使う場合も面談で個別に確認する必要があります。女性特化の求人・サポートを重視するなら、type女性の転職エージェントなど女性特化型を併用する選択肢もあります。",
      },
    },
  ],
};

const compareRows = [
  {
    label: "特化領域",
    techgo: "ITエンジニア特化",
    levtech: "IT・Web業界特化",
    source: "両公式サイト",
  },
  {
    label: "公開求人数",
    techgo: "1万件以上",
    levtech: "約58,000件",
    source: "テックゴー公式トップ／レバテック公式求人検索（2026年7月時点）",
  },
  {
    label: "年収アップの公表実績",
    techgo: "平均138万円（2025年6〜7月実績）・20代平均120万円・30代平均160万円",
    levtech: "年収70万円以上アップの実績多数（平均値ではなく実績例）",
    source: "両公式サイト（数値の意味が異なる点に注意・本文参照）",
  },
  {
    label: "年収交渉成功率",
    techgo: "100%（2025年9月時点）",
    levtech: "公式記載なし",
    source: "テックゴー公式トップ",
  },
  {
    label: "スピードの打ち出し",
    techgo: "登録フォーム最短60秒",
    levtech: "最短2週間での内定実績",
    source: "両公式サイト",
  },
  {
    label: "運営会社",
    techgo: "株式会社MyVision（有料職業紹介 13-ユ-314719）",
    levtech: "レバテック株式会社",
    source: "両公式サイト会社概要",
  },
  {
    label: "女性専用プログラム",
    techgo: "公式記載なし",
    levtech: "公式記載なし",
    source: "両公式サイト（2026年7月確認）",
  },
  {
    label: "第三者の口コミの量",
    techgo: "少なめ（サービスの歴史が浅い）",
    levtech: "多数（運営歴が長く情報が豊富）",
    source: "当サイト調査時点の所感（各レビュー記事参照）",
  },
];

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/category-index/" },
              { label: "テックゴーとレバテックキャリアの違い" },
            ]}
          />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
              エージェント比較
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              テックゴーとレバテックキャリアの違い
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性エンジニアの使い分け【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月16日（両サービスの公式サイト掲載内容を同日確認）</p>
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#7c3a55" }}>この記事の結論</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex gap-2"><span style={{ color: "#7c3a55" }} className="font-bold shrink-0">◆</span>どちらもIT特化の実務経験者向けエージェント。<strong>実務経験を活かして年収交渉に強くこだわるならテックゴー起点、求人の選択肢の広さと運営の実績・情報量で選ぶならレバテックキャリア起点</strong>が公式公開情報から見た使い分け</li>
              <li className="flex gap-2"><span style={{ color: "#7c3a55" }} className="font-bold shrink-0">◆</span>年収アップの数値は<strong>「平均138万円（テックゴー）」と「70万円以上の実績多数（レバテック）」で意味が異なる</strong>ため単純比較はできない。両方の面談で自分のケースの見込みを聞き比べるのが確実</li>
              <li className="flex gap-2"><span style={{ color: "#7c3a55" }} className="font-bold shrink-0">◆</span>女性専用プログラムはどちらも公式記載なし。産休育休の実績・時短・女性比率は<strong>どちらを使う場合も面談で個別確認</strong>。両方無料なので併用も一般的な進め方</li>
            </ul>
          </div>
        </div>
      </section>

      {/* プロフィール */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">両サービスの基本プロフィール</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>テックゴー（TechGo）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                株式会社MyVision（有料職業紹介事業許可 13-ユ-314719）が運営するITエンジニア特化の転職エージェント。公式サイトで<strong>平均年収アップ138万円（2025年6〜7月実績）・年収交渉成功率100%（2025年9月時点）</strong>という交渉実績を前面に打ち出しているのが最大の特徴です。求人は1万件以上で、独占選考ルートや面接確約求人の記載もあります。サービスの歴史は比較的浅く、第三者の口コミはまだ少なめです。
              </p>
              <Link href="/reviews/techgo/" className="mt-3 inline-block text-sm font-bold underline" style={{ color: "#7c3a55" }}>
                → テックゴーの詳細レビューを見る
              </Link>
            </div>
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>レバテックキャリア</h3>
              <p className="text-sm text-text-light leading-relaxed">
                レバテック株式会社が運営するIT・Web業界特化の転職エージェント。<strong>公開求人約58,000件（2026年7月時点の公式求人検索）</strong>と選択肢の広さが強みで、非公開求人も多数。年収70万円以上アップの実績が多数紹介されており、最短2週間での内定実績もあります。運営歴が長く、口コミ・体験談などの第三者情報が豊富なため、事前に評判を調べやすいサービスです。
              </p>
              <Link href="/reviews/levtech/" className="mt-3 inline-block text-sm font-bold underline" style={{ color: "#7c3a55" }}>
                → レバテックキャリアの詳細レビューを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">公式公開情報の比較表</h2>
          <div className="overflow-x-auto rounded-xl bg-white" style={{ border: "1px solid #d9c7b8" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#7c3a55" }} className="text-white text-left">
                  <th className="px-4 py-3 font-bold whitespace-nowrap">項目</th>
                  <th className="px-4 py-3 font-bold">テックゴー</th>
                  <th className="px-4 py-3 font-bold">レバテックキャリア</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label} className="border-t" style={{ borderColor: "#d9c7b8" }}>
                    <td className="px-4 py-3 font-bold whitespace-nowrap align-top" style={{ color: "#7c3a55" }}>{row.label}</td>
                    <td className="px-4 py-3 text-text-light align-top">{row.techgo}</td>
                    <td className="px-4 py-3 text-text-light align-top">{row.levtech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3">
            ※出典: テックゴー公式サイト（トップ・サービス紹介・会社概要）、レバテックキャリア公式サイト（トップ・求人検索）。数値・サービス内容は2026年7月時点の各公式サイトの記載に基づきます（テックゴーの実績数値の対象期間は公式の注記どおり: 平均138万円=2025年6〜7月に内定承諾し年収アップを実現した方の平均実績、成功率100%=2025年9月時点実績）。最新の情報は各公式サイトでご確認ください。
          </p>
        </div>
      </section>

      {/* 数値の読み方 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">「138万円 vs 70万円」を鵜呑みにしない｜数値の正しい読み方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              数字だけを並べると「テックゴーの方が2倍近く上がる」ように見えますが、<strong>この2つの数値は定義が異なるため、そのまま優劣として比較できません</strong>。
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm rounded-lg bg-white p-4" style={{ border: "1px solid #d9c7b8" }}>
                <span style={{ color: "#7c3a55" }} className="font-bold shrink-0">◆</span>
                <span>テックゴーの「平均138万円」は、<strong>2025年6〜7月に内定承諾し、年収アップを実現した方の平均実績</strong>（公式サイトの注記どおり）。年収が上がった人だけを母集団にした平均であり、対象期間も2か月間です。</span>
              </li>
              <li className="flex gap-3 text-sm rounded-lg bg-white p-4" style={{ border: "1px solid #d9c7b8" }}>
                <span style={{ color: "#7c3a55" }} className="font-bold shrink-0">◆</span>
                <span>レバテックキャリアの「70万円以上アップの実績多数」は<strong>平均値ではなく実績例の紹介</strong>。全利用者の平均が70万円という意味ではありません。</span>
              </li>
              <li className="flex gap-3 text-sm rounded-lg bg-white p-4" style={{ border: "1px solid #d9c7b8" }}>
                <span style={{ color: "#7c3a55" }} className="font-bold shrink-0">◆</span>
                <span>あなた自身の年収がどれだけ上がるかは、経験・スキル・現年収・応募先で決まります。<strong>両方の無料面談で「自分のケースの現実的な見込み額」を聞き比べる</strong>のが、数字に振り回されないいちばん確実な方法です。交渉の基礎は<Link href="/articles/negotiation/" className="underline hover:text-primary" style={{ color: "#7c3a55" }}>年収交渉のやり方ガイド</Link>にまとめています。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 状況別 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">状況別の向き不向き</h2>
          <div className="space-y-4">
            {[
              {
                t: "実務経験があり、年収交渉を強く重視する → テックゴー起点",
                d: "年収交渉の実績数値（平均138万円・成功率100%）を公式に打ち出しているのはテックゴー。内定獲得後にオファー年収アップを目的に企業人事と交渉するプロセスが公式の利用の流れに組み込まれています。登録は最短60秒です。",
              },
              {
                t: "求人の選択肢を広く見てから決めたい → レバテックキャリア起点",
                d: "公開求人約58,000件（2026年7月時点）はテックゴーの公式表示（1万件以上）を大きく上回ります。技術スタックや条件で検索して市場感をつかみ、比較の物差しを作ってから面談に臨めます。",
              },
              {
                t: "事前に口コミ・評判をしっかり調べてから使いたい → レバテックキャリアが調べやすい",
                d: "レバテックキャリアは運営歴が長く第三者の口コミが豊富。テックゴーはサービスの歴史が浅く口コミがまだ少ないため、当サイトのレビューでは公式掲載の利用者の声と公式情報を基に強み・注意点を整理しています。",
              },
              {
                t: "転職するか迷っている段階 → どちらも面談だけの利用が可能",
                d: "テックゴーはキャリア・転職全般の相談から対応と公式に明記。レバテックキャリアもオンライン面談に対応しています。迷っている段階なら、市場価値の把握を目的に面談を使い、応募は納得してからで問題ありません。",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white p-5" style={{ border: "1px solid #d9c7b8" }}>
                <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>{item.t}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 併用 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">併用の考え方｜おすすめの順番</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              どちらも無料のため、<strong>2社併用は現実的で一般的な進め方</strong>です。順番の一例としては、①レバテックキャリアで求人の幅と市場感を把握 → ②テックゴーの面談で年収アップの見込み額を確認 → ③提案の質・担当者との相性で軸足を決める、という流れが公式公開情報の強みを活かした組み合わせです。
            </p>
            <p>
              併用時の注意は1点だけ。<strong>同じ求人に別々のエージェント経由で重複応募しない</strong>ことです。応募済みの企業を一覧にして両方の担当者に共有すればトラブルは防げます。エージェント選び全般の基準は<Link href="/articles/how-to-choose/" className="underline hover:text-primary" style={{ color: "#7c3a55" }}>転職エージェントの選び方</Link>、特化型と総合型の組み合わせは<Link href="/articles/specialized-vs-general/" className="underline hover:text-primary" style={{ color: "#7c3a55" }}>IT特化型と総合型の使い分け</Link>で解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* 女性視点 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアが面談で確認したいこと（両サービス共通）</h2>
          <p className="text-text-light leading-relaxed mb-6">
            テックゴー・レバテックキャリアとも、女性専用プログラムの記載は公式サイトにありません（2026年7月確認）。つまり、働きやすさの見極めは<strong>面談での質問の質</strong>にかかっています。次の点は紹介求人ごとに具体的に確認しましょう。
          </p>
          <ul className="space-y-3">
            {[
              "紹介先企業の産休・育休の取得実績と、復帰後のポジション・評価の事例",
              "リモートワーク・時短勤務の制度の有無ではなく「実際の利用状況」",
              "開発チームの女性比率と、女性エンジニアの管理職登用事例",
              "残業時間の実態（部署単位）と評価制度",
              "年収交渉で現実的に狙える金額と、その根拠（市場相場・社内レンジ）",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-text-light rounded-lg bg-white p-4" style={{ border: "1px solid #d9c7b8" }}>
                <span style={{ color: "#7c3a55" }} className="font-bold shrink-0">◆</span>{item}
              </li>
            ))}
          </ul>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            女性特化の手厚いサポートを重視する場合は、<Link href="/reviews/type-woman/" className="underline hover:text-primary" style={{ color: "#7c3a55" }}>type女性の転職エージェント</Link>との併用も選択肢です。企業の公式データで働きやすさを事前確認する方法は<Link href="/articles/company-check-guide/" className="underline hover:text-primary" style={{ color: "#7c3a55" }}>女性が働きやすいIT企業の見極め方・実務編</Link>で解説しています。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">テックゴーとレバテックキャリアの比較でよくある質問</h2>
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
          <div className="text-xs text-text-light mt-6 space-y-1">
            <p>出典・参考:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="https://tech-go.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">テックゴー公式サイト</a></li>
              <li><a href="https://tech-go.jp/about" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">テックゴー公式サイト - 会社概要</a></li>
              <li><a href="https://career.levtech.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">レバテックキャリア公式サイト</a></li>
            </ul>
            <p className="mt-2">※本記事のサービス内容・実績数値は2026年7月16日時点の各公式サイトの記載に基づきます。当サイトはテックゴー・レバテックキャリアの運営会社とは関係のない情報メディアであり、掲載内容は中立の比較を目的としています。最新の情報は各公式サイトでご確認ください。</p>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <div className="mx-auto max-w-4xl px-4">
        <div className="bg-[#f0e7dd] border border-[#d9c7b8] rounded-lg p-5 my-8">
          <h3 className="text-base font-bold text-[#7c3a55] mb-3">関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Link href="/reviews/techgo/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} テックゴーの口コミ・評判｜徹底レビュー</Link>
            <Link href="/reviews/levtech/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} レバテックキャリアの口コミ・評判</Link>
            <Link href="/articles/techgo-career-mendan/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} テックゴーの無料キャリア面談とは</Link>
            <Link href="/articles/negotiation/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} 年収交渉のやり方ガイド</Link>
            <Link href="/articles/levtech-vs-geekly/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} レバテックキャリアとGeeklyの違い</Link>
            <Link href="/ranking/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} 女性エンジニア向け転職エージェントおすすめランキング</Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: "#efe3d8" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">迷ったら、両方の無料面談で聞き比べを</h2>
          <p className="text-text-light mb-6">
            数字の意味を知った上で、自分のケースの見込みを両方に聞くのが最短です。テックゴーの登録は最短60秒です。
          </p>
          <a href="//af.moshimo.com/af/c/click?a_id=5663318&p_id=6722&pc_id=19209&pl_id=85793" target="_blank" rel="nofollow noopener" referrerPolicy="no-referrer-when-downgrade" {...({ attributionsrc: "" } as any)} className="btn-cta">テックゴーの無料キャリア面談を予約する</a>
          <img src="//i.moshimo.com/af/i/impression?a_id=5663318&p_id=6722&pc_id=19209&pl_id=85793" width={1} height={1} style={{ border: "none" }} loading="lazy" alt="" />
          <p className="mt-3 text-xs text-text-light">PR（アフィリエイト広告）・テックゴー公式サイトへ移動します</p>
          <p className="mt-4">
            <Link href="/reviews/levtech/" className="text-sm font-bold underline" style={{ color: "#7c3a55" }}>
              レバテックキャリアのレビューを見る（登録リンクあり）→
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
