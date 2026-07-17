import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "いわて女性デジタル人材育成プロジェクトを解説｜対象・受講料・申込【2026年】",
  description:
    "令和8年度「いわて女性デジタル人材育成プロジェクト」を公式情報をもとに解説。岩手県内在住の18歳以上の女性が対象、受講料19,800円（税込・Adobe等のライセンス費込み）で無料ではない点に注意。グラフィックフリーランス/Web担当者・広報/ITスキル就転職の3コース（定員60名）、2026年8月10日開講、申込締切7月24日など募集状況を確認日付きで整理します。",
  alternates: { canonical: "/articles/iwate-women-digital/" },
  openGraph: {
    title: "いわて女性デジタル人材育成プロジェクトを解説｜対象・受講料・申込【2026年】",
    description:
      "令和8年度「いわて女性デジタル人材育成プロジェクト」の対象者（岩手県内在住・18歳以上の女性）、3コースの内容、受講料19,800円（税込）、募集期間（2026年6月25日〜7月24日）と申込方法を公式情報をもとに解説。",
    url: "https://women-engineer.com/articles/iwate-women-digital/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "いわて女性デジタル人材育成プロジェクトを解説｜対象・受講料・申込【2026年】",
  datePublished: "2026-07-18",
  dateModified: "2026-07-18",
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
    "令和8年度「いわて女性デジタル人材育成プロジェクト」の対象者・3コースの内容・受講料19,800円（税込）・募集期間・申込方法を公式情報をもとに解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/iwate-women-digital/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "いわて女性デジタル人材育成プロジェクトは無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "無料ではありません。受講料は19,800円（税込）です。運営事務局（デジタルハリウッド株式会社）の公式発表によると、この金額にはAdobe Creative Cloud、Canva、Microsoft365など受講に必要なソフトのライセンス費用が含まれています。約4か月・ソフトライセンス込みでこの金額という組み立てですが、「自治体の講座＝無料」と思い込まず、金額を確認したうえで申し込みましょう（出典: デジタルハリウッド公式プレスリリース・釜石市ページ、2026年7月18日確認）。",
      },
    },
    {
      "@type": "Question",
      name: "申込の締切はいつですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "令和8年度の募集期間は2026年6月25日から7月24日までで、運営事務局の公式発表では申込締切は2026年7月24日（金）23:59とされています（2026年7月18日確認時点で募集中・締切間近）。受講期間は2026年8月10日から12月末までの約4か月です。最新の受付状況は公式サイト（r8iwate-dhw.jp）で確認してください。",
      },
    },
    {
      "@type": "Question",
      name: "パソコン初心者でも受講できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "運営事務局の公式発表では「タイピングができれば、パソコン初心者でも受講可能」とされています。学習はすべてオンラインで24時間いつでも受講できる形式です。ただし受講に使うPC・通信環境の要件など詳細は公式サイトで確認してください（出典: デジタルハリウッド公式プレスリリース、2026年7月18日確認）。",
      },
    },
    {
      "@type": "Question",
      name: "岩手県外に住んでいても受講できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "対象は「岩手県内在住の成人女性（18歳以上）」です。県外在住の方は対象外です。お住まいの地域の類似事業は「女性向けITスキル支援マップ」の記事で探せます。首都圏では東京都（女性ITエンジニア育成事業・原則39歳以下）、埼玉県（女性のデジタル人材育成推進事業・在職中も可）、神奈川県（女性のためのデジタルスキル育成講座・年齢不問）などが実施されています（各事業の要件は各公式サイトで要確認）。",
      },
    },
    {
      "@type": "Question",
      name: "いわて女性デジタル人材育成プロジェクトの口コミ・評判はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "第三者による口コミ・評判は2026年7月18日時点でほとんど確認できませんでした。当サイトでは架空の口コミは掲載しません。事業自体は令和7年度にも実施されており、令和8年度は運営事務局をデジタルハリウッド株式会社が務め、修了後も最大1年間キャリアカウンセラーのサポートと県内企業とのマッチング支援があると公式発表されています。修了者数などの公表統計は確認できなかったため、実績の詳細は説明会や公式サイトで確認することをおすすめします。",
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
              { label: "いわて女性デジタル人材育成プロジェクト" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              支援制度ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              いわて女性デジタル人材育成プロジェクトとは？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                対象者・受講料19,800円の中身・3コースと申込方法【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月18日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>先に結論：3つの即答</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>どんな事業？</strong> 岩手県の委託により、デジタルハリウッド株式会社が運営事務局を務める女性向けデジタルスキル講座（令和8年度）。<strong>グラフィックフリーランス／Web担当者・広報／ITスキル就転職の3コース</strong>（定員計60名）を、2026年8月10日〜12月末の約4か月・完全オンラインで実施し、修了後の就労・案件受注のマッチングまで支援します。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>誰が対象？</strong> 岩手県内在住の成人女性（18歳以上）。県内企業への就職、在宅ワーク、転職、副業、フリーランスを目指す方が対象で、「タイピングができれば、パソコン初心者でも受講可能」とされています。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>無料？</strong> <strong>無料ではありません。受講料19,800円（税込）</strong>です。Adobe Creative Cloud、Canva、Microsoft365など受講に必要なソフトライセンス費用が含まれます。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://r8iwate-dhw.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>令和8年度 いわて女性デジタル人材育成プロジェクト 公式サイト</a>・<a href="https://prtimes.jp/main/html/rd/p/000002695.000000496.html" target="_blank" rel="noopener noreferrer nofollow" className="underline" style={{ color: "#7c3a55" }}>デジタルハリウッド公式プレスリリース（2026年7月1日）</a>・<a href="https://www.city.kamaishi.iwate.jp/docs/2026070900017" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>釜石市の案内ページ</a>（いずれも2026年7月18日確認）
            </p>
          </div>

          <div className="rounded-xl p-6 mt-4" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>最新の募集状況（2026年7月18日確認）</h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>現在募集中です。</strong>令和8年度の募集期間は2026年6月25日〜7月24日で、運営事務局の公式発表では<strong>申込締切は2026年7月24日（金）23:59</strong>とされています。<strong>締切まで残りわずか</strong>です。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>受講期間:</strong> 2026年8月10日〜12月末（約4か月）。定員60名（グラフィックフリーランス10名／Web担当者・広報25名／ITスキル就転職25名）。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span>オンライン説明会（7月7日・7月18日）と体験授業（7月11日）が公式発表に案内されていました。</span></li>
            </ul>
            <p className="text-xs text-text-light mt-3">
              ※募集状況・締切は変動する可能性があります。必ず<a href="https://r8iwate-dhw.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>公式サイト</a>で最新情報を確認してください。
            </p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. いわて女性デジタル人材育成プロジェクトとは</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 事業概要表（対象者・期間・費用・内容・申込）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 対象者・受講条件</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 3コースの内容と定員</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 費用（受講料19,800円の中身）と就業支援</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 募集状況と申込の流れ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 申込前の注意点（口コミ・評判の現状も正直に）</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">いわて女性デジタル人材育成プロジェクトとは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「いわて女性デジタル人材育成プロジェクト」は、岩手県が実施する女性向けのデジタルスキル習得・就労支援事業です。令和8年度は、運営事務局の公式発表に「岩手県から委託を受け」と明記されているとおり、<strong>デジタルハリウッド株式会社</strong>が運営事務局を務めます（2026年7月1日付プレスリリース・2026年7月18日確認）。釜石市・北上市・花巻市など県内市町村の公式サイトでも受講生募集が案内されています。
            </p>
            <p>
              特徴は、学習が<strong>すべてオンラインで24時間いつでも受講できる</strong>こと、そして「タイピングができれば、パソコン初心者でも受講可能」とされている間口の広さです。約4か月の受講期間中に生成AIや各種デジタルツールを使った実践スキルを学び、修了後はキャリアカウンセラーによる<strong>最大1年間のサポート</strong>と、県内企業とのマッチングによる就労・フリーランス受注の支援が受けられます。
            </p>
            <p>
              一方で、受講料は<strong>19,800円（税込）</strong>で、東京都・埼玉県・神奈川県の類似事業のような「受講料無料」の事業ではありません（ソフトライセンス費用込みの設定）。この点は後述の<a href="#sec5" className="underline" style={{ color: "#7c3a55" }}>費用の章</a>で詳しく整理します。全国の類似事業との比較は<a href="/articles/women-it-support-map/" className="underline" style={{ color: "#7c3a55" }}>女性向けITスキル支援マップ</a>を参照してください。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 概要表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">事業概要表（対象者・期間・費用・内容・申込）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>内容（公式情報・令和8年度）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>正式名称</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>令和8年度 いわて女性デジタル人材育成プロジェクト（実施: 岩手県／運営事務局: デジタルハリウッド株式会社）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>対象者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>岩手県内在住の成人女性（18歳以上）。県内企業への就職・在宅ワーク・転職・副業・フリーランスを目指す方。タイピングができればパソコン初心者でも受講可能</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>コース・定員</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>グラフィックフリーランスコース（10名）／Web担当者・広報コース（25名）／ITスキル就転職コース（25名）の計60名</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>形式・期間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>全コースオンライン・24時間いつでも受講可能。受講期間は2026年8月10日〜12月末（約4か月）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>費用</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}><strong>受講料19,800円（税込）</strong>。Adobe Creative Cloud、Canva、Microsoft365など受講に必要なソフトライセンス費用を含む。無料ではない点に注意</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>募集期間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2026年6月25日〜7月24日（公式発表では締切7月24日23:59）。2026年7月18日確認時点で募集中</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>説明会等</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>オンライン説明会: 7月7日（火）20:00〜21:30・7月18日（土）10:00〜11:30／体験授業: 7月11日（土）10:00〜11:30（公式発表より）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>就業支援</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>デジタルハリウッドのキャリアカウンセラーが修了後も最大1年間サポート。県内企業と受講生をマッチングし、就労やフリーランスとしての受注を支援</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>申込方法</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>公式サイト・案内ページの専用フォーム（Microsoft Forms）からオンライン申込</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>託児等</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>託児サービスに関する記載は確認できませんでした（公式サイトで要確認）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://prtimes.jp/main/html/rd/p/000002695.000000496.html" target="_blank" rel="noopener noreferrer nofollow" className="underline" style={{ color: "#7c3a55" }}>デジタルハリウッド公式プレスリリース</a>・<a href="https://www.city.kamaishi.iwate.jp/docs/2026070900017" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>釜石市の案内ページ</a>（いずれも2026年7月18日確認）。日程・定員・募集状況は変わるため、必ず<a href="https://r8iwate-dhw.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>公式サイト</a>で最新情報を確認してください。
          </p>
        </div>
      </section>

      {/* sec3 対象者・要件 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">対象者・受講条件</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              令和8年度の公式発表・市町村の案内では、次のように示されています（2026年7月18日確認）。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">1.</span><span><strong>岩手県内在住の成人女性（18歳以上）</strong> — 県外在住の方は対象外です。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">2.</span><span><strong>県内企業への就職・在宅ワーク・転職・副業・フリーランスを目指す方</strong> — 就職だけでなく、在宅・副業・フリーランス志向でも対象に含まれる書き方です。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">3.</span><span><strong>タイピングができれば、パソコン初心者でも受講可能</strong>（公式発表の表現）— 受講に使うPC・通信環境は自身で用意する前提と考えられますが、機材要件の詳細は公式サイトで確認してください。</span></li>
            </ul>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              在職中の可否や選考の有無について、確認できた公式発表・案内ページには明記がありませんでした。定員（計60名）を超える応募があった場合の取り扱いも含め、詳細は公式サイト・説明会で確認してください。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 コース内容 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">3コースの内容と定員</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              令和8年度は3コース制です。いずれも生成AIの活用が組み込まれているのが特徴です（公式発表より・2026年7月18日確認）。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>グラフィックフリーランスコース（定員10名）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                生成AIやAdobe、Canva、Figmaなどのデザインツールを活用し、チラシ・バナー・SNS投稿画像などの制作スキルを学びます。フリーランス・副業でのデザイン受注を視野に入れたコースです。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Web担当者／広報コース（定員25名）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                生成AIやノーコードツールを活用し、Webサイト制作や情報発信に必要なスキルを実践的に学ぶコースです。企業のWeb担当・広報担当としての就労を想定しています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ITスキル就転職コース（定員25名）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                生成AIやOffice、Canva、WordPressなどのデジタルツールを活用し、業務効率化や情報発信に必要なスキルを習得します。事務・IT事務系の就職・転職を目指す方向けのコースです。
              </p>
            </div>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://prtimes.jp/main/html/rd/p/000002695.000000496.html" target="_blank" rel="noopener noreferrer nofollow" className="underline" style={{ color: "#7c3a55" }}>デジタルハリウッド公式プレスリリース</a>（2026年7月18日確認）。各コースの詳細カリキュラム・時間数は公式サイトで確認してください。
          </p>
        </div>
      </section>

      {/* sec5 費用と支援 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">費用（受講料19,800円の中身）と就業支援</h2>
          <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: "#fffaf4", border: "2px solid #c15f47" }}>
            <p className="text-sm leading-relaxed text-text-light">
              <strong style={{ color: "#c15f47" }}>本事業は無料ではありません。受講料は19,800円（税込）です。</strong>公式発表によると、この金額にはAdobe Creative Cloud、Canva、Microsoft365など「受講に必要なソフトライセンス費用」が含まれています。前年度（令和7年度）も同額の受講料で実施されていました。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>受講料19,800円（税込）に含まれるもの</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>約4か月分の講座受講（オンライン・24時間視聴可）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Adobe Creative Cloud・Canva・Microsoft365など受講に必要なソフトライセンス費用</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>自己負担・要確認のもの</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>受講に使うPC・インターネット環境（機材要件の詳細は公式サイトで要確認）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>託児等の支援の有無は記載を確認できませんでした（公式サイトで要確認）</span></li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>修了後の就業支援（公式発表より）</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>キャリアサポート</strong> — デジタルハリウッドのキャリアカウンセラーが修了後も最大1年間サポート。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>マッチング支援</strong> — 県内企業と受講生をマッチングし、就労やフリーランスとしての受注をサポート。</span></li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            なお、費用を抑えて学びたい場合は、国の<a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付</a>（指定講座の20%〜最大80%給付）や無料講座ポータル<a href="/articles/manabi-dx/" className="underline" style={{ color: "#7c3a55" }}>マナビDX</a>との比較も有効です。修了後の就職・転職活動では民間エージェントの併用も選択肢になります（<a href="/diagnosis/" className="underline" style={{ color: "#7c3a55" }}>エージェント無料診断</a>）。
          </p>
        </div>
      </section>

      {/* sec6 募集状況と申込の流れ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">募集状況と申込の流れ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              2026年7月18日確認時点で<strong>令和8年度の受講生を募集中</strong>です（募集期間: 2026年6月25日〜7月24日、公式発表の締切表記は7月24日23:59）。受講を検討している方は締切に注意してください。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "公式サイト・説明会で内容を確認", "公式サイト（r8iwate-dhw.jp）でコース内容・受講料・要件を確認します。オンライン説明会（7/7・7/18）や体験授業（7/11）も案内されていました。"],
              ["STEP2", "専用フォームから申込", "公式サイト・市町村の案内ページに掲載されている専用フォーム（Microsoft Forms）からオンラインで申し込みます。締切は2026年7月24日（金）23:59です（公式発表より）。"],
              ["STEP3", "受講開始（2026年8月10日〜）", "受講期間は2026年8月10日から12月末までの約4か月。全コースオンラインで24時間いつでも学習できます。"],
              ["STEP4", "修了→最大1年間のキャリアサポート・マッチング", "修了後はキャリアカウンセラーのサポート（最大1年間）を受けながら、県内企業への就労やフリーランスとしての受注を目指します。"],
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
          <p className="text-xs text-text-light mt-4">
            出典: 公式発表・釜石市の案内ページ（2026年7月18日確認）。申込方法・締切の最新情報は必ず<a href="https://r8iwate-dhw.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>公式サイト</a>で確認してください。
          </p>
        </div>
      </section>

      {/* sec7 注意点 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">申込前の注意点（口コミ・評判の現状も正直に）</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#c15f47" }}>1. 「自治体の講座＝無料」ではない</h3>
              <p className="text-sm text-text-light leading-relaxed">
                本事業の受講料は19,800円（税込・ソフトライセンス費込み）です。無料の類似事業（東京都・埼玉県・神奈川県など）とは費用の建て付けが異なるため、「無料だと思っていた」というミスマッチがないよう金額を確認してから申し込みましょう。逆に、Adobe Creative CloudやMicrosoft365のライセンスが含まれる点は、個人でライセンス契約するより負担が小さくなり得る要素です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#c15f47" }}>2. 締切が近い（2026年7月24日）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                2026年7月18日確認時点で募集中ですが、締切（7月24日23:59・公式発表より）まで日がありません。締切後の次回募集（令和9年度以降）が実施されるかは現時点では未確認です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#c15f47" }}>3. コースにより定員が大きく異なる</h3>
              <p className="text-sm text-text-light leading-relaxed">
                グラフィックフリーランスコースは定員10名と、他の2コース（各25名）より狭き門です。希望コースが定員に達した場合の取り扱いは公式サイト・事務局で確認してください。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#c15f47" }}>4. 口コミ・評判はまだ少ない</h3>
              <p className="text-sm text-text-light leading-relaxed">
                本プロジェクトに関する第三者の口コミ・評判は、2026年7月18日時点でほとんど確認できませんでした。当サイトでは架空の口コミは掲載しません。事業は令和7年度にも実施されており（令和7年度も受講料19,800円）、令和8年度の内容・実績の詳細は説明会・公式サイトで直接確認することをおすすめします。修了者数などの公表統計も確認できませんでした。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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
            <a href="/articles/women-it-support-map/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性向けITスキル支援マップ</h3><p className="text-sm text-text-light">全国の自治体・国の支援制度を一覧で整理</p></a>
            <a href="/articles/tokyo-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都 女性ITエンジニア育成事業ガイド</h3><p className="text-sm text-text-light">エンジニア職を目指す6か月の無料訓練</p></a>
            <a href="/articles/saitama-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>埼玉県 女性のデジタル人材育成推進事業を解説</h3><p className="text-sm text-text-light">在職中も受講できるオンデマンド型の無料講座</p></a>
            <a href="/articles/training-benefit-it/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>教育訓練給付でITを学ぶ</h3><p className="text-sm text-text-light">国の給付制度で受講費用を抑える方法</p></a>
          </div>
          <div className="rounded-xl p-6 mt-6 text-center" style={{ backgroundColor: "#efe3d8", border: "1px solid #d9c7b8" }}>
            <p className="text-sm text-text-light mb-3">スキルを学んだあとの転職活動は、自分に合うエージェント選びから。</p>
            <a href="/diagnosis/" className="inline-block rounded-full px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105" style={{ backgroundColor: "#7c3a55" }}>8つの質問でエージェント無料診断</a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 令和8年度 いわて女性デジタル人材育成プロジェクト 公式サイト <a href="https://r8iwate-dhw.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://r8iwate-dhw.jp/</a>（2026年7月18日確認）</li>
            <li>出典: デジタルハリウッド株式会社 プレスリリース「＜受講生募集＞『令和8年度いわて女性デジタル人材育成プロジェクト』2026年8月開講」（2026年7月1日） <a href="https://prtimes.jp/main/html/rd/p/000002695.000000496.html" target="_blank" rel="noopener noreferrer nofollow" className="underline" style={{ color: "#7c3a55" }}>https://prtimes.jp/main/html/rd/p/000002695.000000496.html</a>（2026年7月18日確認）</li>
            <li>出典: 釜石市「令和8年度『いわて女性デジタル人材育成プロジェクト』受講生募集中！」 <a href="https://www.city.kamaishi.iwate.jp/docs/2026070900017" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.city.kamaishi.iwate.jp/docs/2026070900017</a>（2026年7月18日確認）</li>
          </ul>
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
