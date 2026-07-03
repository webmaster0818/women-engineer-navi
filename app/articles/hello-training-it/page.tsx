import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "求職者支援訓練（ハロートレーニング）でITを学ぶには？受講料・給付金・コースの探し方【女性向け2026年】",
  description:
    "求職者支援訓練・ハロートレーニングでIT分野（Webデザイン・プログラミング等）を無料で学ぶ方法を厚生労働省の公式情報をもとに解説。雇用保険の有無による制度の違い、月10万円の職業訓練受講給付金の要件、IT系コースの探し方（ハローワークインターネットサービス）、申込みの流れ、訓練後の転職活動までまとめました。",
  alternates: { canonical: "/articles/hello-training-it/" },
  openGraph: {
    title: "求職者支援訓練（ハロートレーニング）でITを学ぶには？受講料・給付金・コースの探し方【女性向け2026年】",
    description:
      "求職者支援訓練・ハロートレーニングでIT分野を無料で学ぶ方法を厚労省の公式情報をもとに解説。制度の仕組み、月10万円の給付金要件、IT系コースの探し方、申込みの流れ、訓練後の転職活動まで。",
    url: "https://women-engineer.com/articles/hello-training-it/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "求職者支援訓練（ハロートレーニング）でITを学ぶには？受講料・給付金・コースの探し方【女性向け2026年】",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
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
    "求職者支援訓練・ハロートレーニングでIT分野を無料で学ぶ方法を厚生労働省の公式情報をもとに解説。制度の仕組み、月10万円の職業訓練受講給付金の要件、IT系コースの探し方、申込みの流れ、訓練後の転職活動まで。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/hello-training-it/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "求職者支援訓練（ハロートレーニング）は本当に無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "受講料は無料です。ただしテキスト代等は自己負担と厚生労働省が明記しています。教材費はコースごとに異なるため、受講を検討するコースの募集案内で金額を確認しましょう。加えて、通所の交通費や資格を受験する場合の受験料も基本的に自己負担です。「受講料無料＋テキスト代等は自己負担」と理解しておくと、受講開始後のギャップがありません（出典: 厚生労働省 ハロートレーニング（離職者訓練・求職者支援訓練）ページ、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "パートで働きながらでも求職者支援訓練を受けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "受けられる場合があります。厚生労働省は求職者支援制度の対象として、雇用保険の適用がなかった離職者などに加え、「一定額以下の収入のパートタイムで働きながら、正社員への転職を目指す方」を挙げています。ただし月10万円の職業訓練受講給付金には本人収入月8万円以下などの要件があるため、働きながらの場合は「訓練は受けられるが給付金は対象外」となるケースもあります。自分がどちらに当たるかは、住所地を管轄するハローワークの窓口で確認してください。",
      },
    },
    {
      "@type": "Question",
      name: "月10万円の職業訓練受講給付金は誰でももらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "誰でももらえるわけではありません。本人収入が月8万円以下、世帯全体の収入が月30万円以下、世帯全体の金融資産が300万円以下、現住所以外に土地・建物を所有していない、訓練実施日すべてに出席する（やむを得ない理由がある場合でも8割以上）、世帯の中に同時にこの給付金を受給して訓練している人がいない、過去3年以内に不正受給していない、過去6年以内にこの給付金を受給していない、というすべての要件を満たす必要があります。要件の判定は個々の状況によるため、必ずハローワークで確認してください（出典: 厚生労働省 求職者支援制度ページ、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "雇用保険（失業保険）をもらっている場合はどの訓練を受けるのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "雇用保険を受給している求職者は、主に「公共職業訓練（離職者訓練）」の対象です。訓練期間は概ね3か月〜2年で、受講料は無料（テキスト代等は自己負担）です。一方、雇用保険を受給できない方（受給が終わった方を含む）は主に「求職者支援訓練」の対象になります。どちらもハロートレーニングの一部で、申込み窓口はいずれもハローワークです。自分がどちらの対象かは雇用保険の受給状況で変わるため、まずハローワークで相談しましょう（出典: 厚生労働省、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "IT系の職業訓練コースはどこで探せますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ハローワークインターネットサービスの「職業訓練検索」で、全国の公共職業訓練・求職者支援訓練のコースを検索できます。コース種別・都道府県・訓練期間・フリーワードなどで絞り込みができ、託児サービスの有無をこだわり条件に指定することも可能です。「Web」「プログラミング」「IT」などのキーワードで検索すると、IT分野のコースが探せます。実際の募集時期や選考の詳細は、ハローワーク窓口でも案内してもらえます。",
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
              { label: "求職者支援訓練（ハロートレーニング）でITを学ぶ" },
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
              求職者支援訓練（ハロートレーニング）でITを学ぶには？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                受講料・月10万円給付金・コースの探し方【女性向け2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月4日</p>
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
                <span><strong>どんな制度？</strong> ハロートレーニングは国の公的職業訓練の総称。雇用保険を受給できない人でも、求職者支援訓練なら受講料無料（テキスト代等は自己負担）でWebデザイン・プログラミングなどのIT分野を学べます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>お金の支援は？</strong> 収入・資産などの要件をすべて満たせば、職業訓練受講給付金として<strong>月10万円</strong>＋通所手当を受給しながら訓練を受けられます。要件の判定はハローワークで行われます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>どこで申し込む？</strong> 申込み・相談の窓口はハローワークです。コースはハローワークインターネットサービスの「職業訓練検索」で探せます（託児サービスの有無でも絞り込み可能）。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省「求職者支援制度のご案内」</a>／<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/hellotraining_top.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省「ハロートレーニング」</a>（いずれも2026年7月参照）
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. ハロートレーニングとは？制度の仕組み（雇用保険の有無で分かれる）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 職業訓練受講給付金（月10万円）の要件</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. IT系コースの例と探し方・選び方の観点</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 申込みの流れ（相談から受講開始まで）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 訓練修了後の転職活動の進め方</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. あわせて確認したい公的支援</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 制度の仕組み */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ハロートレーニングとは？制度の仕組み（雇用保険の有無で分かれる）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「ハロートレーニング」は、国（厚生労働省）が実施する公的職業訓練の総称です。希望する仕事に就くために必要なスキルや知識を、原則<strong>受講料無料</strong>で学べます（テキスト代等は自己負担。出典: 厚生労働省、2026年7月参照）。
            </p>
            <p>
              求職者向けの訓練は、<strong>雇用保険（失業保険）を受給できるかどうか</strong>で大きく2つに分かれます。「自分はどちらの対象か」をまず押さえるのが、この制度を理解する近道です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>公共職業訓練（離職者訓練）</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>求職者支援訓練</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>主な対象者</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>主に雇用保険を受給している求職者</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>主に雇用保険を受給できない求職者（受給が終わった方も含む）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>受講料</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>無料（テキスト代等は自己負担）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>無料（テキスト代等は自己負担）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>訓練期間</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>概ね3か月〜2年</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>2〜6か月</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>生活費の支援</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>雇用保険の失業給付を受給しながら受講（条件はハローワークで確認）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>要件を満たせば職業訓練受講給付金（月10万円＋通所手当）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>申込み窓口</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>ハローワーク</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>ハローワーク</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/rishokusha.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省「ハロートレーニング（離職者訓練・求職者支援訓練）」</a>／<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省「求職者支援制度のご案内」</a>（いずれも2026年7月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              ポイントは、<strong>雇用保険の対象にならない働き方をしてきた人にも門戸が開かれている</strong>ことです。厚生労働省は求職者支援制度の対象として、雇用保険の適用がなかった離職者やフリーランスを廃業した方に加え、「一定額以下の収入のパートタイムで働きながら、正社員への転職を目指す方」を挙げています。出産・育児でキャリアが途切れた方、扶養内パートから正社員のITエンジニアを目指したい方にとって、費用をかけずに学び直せる現実的な選択肢です。
            </p>
            <p>
              なお、雇用保険を受給中の方が対象の公共職業訓練でも、委託訓練に「情報処理科」などIT系のコースがあります。どちらの制度の対象になるかは離職時期や雇用保険の加入状況で変わるため、自己判断せず<strong>ハローワークの窓口で確認する</strong>のが確実です。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 給付金要件 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">職業訓練受講給付金（月10万円）の要件</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              求職者支援訓練（または対象の公共職業訓練）を受講する方が一定の要件をすべて満たすと、<strong>職業訓練受講給付金（職業訓練受講手当 月10万円＋通所手当＋寄宿手当）</strong>を受給しながら訓練を受けられます。厚生労働省の公式ページに記載されている支給要件は次のとおりです。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>要件</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>内容（公式情報）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>本人収入</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>月8万円以下</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>世帯全体の収入</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月30万円以下</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>世帯全体の金融資産</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>300万円以下</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>不動産</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>現在住んでいるところ以外に土地・建物を所有していない</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>出席</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>訓練実施日すべてに出席する（やむを得ない理由がある場合でも8割以上）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>世帯内の同時受給</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>世帯の中に同時にこの給付金を受給して訓練を受けている人がいない</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>過去の不正受給</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>過去3年以内に不正受給をしていない</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>過去の受給歴</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>過去6年以内にこの給付金の支給を受けていない</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl p-5 mt-6 bg-white" style={{ border: "2px solid #c15f47" }}>
            <p className="text-sm leading-relaxed text-text-light">
              <strong style={{ color: "#c15f47" }}>重要:</strong> 上記はすべて満たす必要がある要件で、収入や世帯の範囲の判定は個々の状況によって異なります。「自分は対象になるか」「いくら受給できるか」は、<strong>必ず住所地を管轄するハローワークで確認してください</strong>。通所手当（上限あり）・寄宿手当の金額や支給条件も、公式ページとハローワーク窓口で最新情報を確認するのが確実です。
            </p>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省「求職者支援制度のご案内」</a>（2026年7月参照）
          </p>
        </div>
      </section>

      {/* sec3 IT系コースの例と選び方 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">IT系コースの例と探し方・選び方の観点</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              厚生労働省の求職者支援制度ページでは、訓練コースの例としてIT分野の「WEBアプリ開発科」「Android/JAVAプログラマ育成科」、デザイン分野の「WEBデザイナー科」などが紹介されています（2026年7月参照）。実際に開講されるコースは地域・時期によって異なり、募集はコースごとに行われます。
            </p>
            <p>
              現在募集中のコースは、<a href="https://www.hellowork.mhlw.go.jp/kensaku/GECA150010.do?action=initDisp&screenId=GECA150010" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>ハローワークインターネットサービスの「職業訓練検索」</a>で誰でも検索できます。コース種別（公共職業訓練／求職者支援訓練）・都道府県・訓練期間・フリーワードで絞り込みができ、<strong>託児サービスの有無をこだわり条件に指定できる</strong>ため、育児中の方はここをチェックすると候補を効率よく絞れます。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>IT系コースを選ぶときの5つの観点</h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">1.</span><span><strong>目指す職種から逆算する</strong> — Webサイト制作（HTML/CSS・デザイン寄り）か、プログラミング（アプリ・システム開発寄り）かで学ぶ内容が大きく異なります。<a href="/articles/career-path/" className="underline" style={{ color: "#7c3a55" }}>ITエンジニアのキャリアパス</a>を先に眺めて方向を決めましょう。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">2.</span><span><strong>カリキュラムと訓練時間</strong> — 同じ「Web系」でも内容の深さは様々。習得目標・使用ツール・演習の比率を募集案内で確認します。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">3.</span><span><strong>通いやすさと託児</strong> — 訓練は出席が前提の制度です（給付金は原則全日出席が要件）。自宅からの距離、託児サービスの有無を必ず確認しましょう。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">4.</span><span><strong>目指せる資格</strong> — 訓練と並行して<a href="/articles/certification/" className="underline" style={{ color: "#7c3a55" }}>IT資格</a>（基本情報技術者など）の学習を組み合わせると、修了後の転職で証明材料が増えます（受験料は自己負担）。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">5.</span><span><strong>就職支援の内容</strong> — 訓練実施機関やハローワークによる就職支援の内容（キャリアコンサルティング・求人紹介など）も窓口で確認しておくと、修了後の動きがスムーズです。</span></li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            なお、本記事では特定の訓練校・訓練実施機関の推奨は行いません。同名の分野でも実施機関ごとに内容が異なるため、必ず募集案内とハローワークの説明で比較検討してください。
          </p>
        </div>
      </section>

      {/* sec4 申込みの流れ */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">申込みの流れ（相談から受講開始まで）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              求職者支援制度・ハロートレーニングの申込み、相談、問い合わせの窓口は<strong>ハローワーク</strong>です（出典: 厚生労働省、2026年7月参照）。大まかな流れは次のとおりですが、締切や必要書類はコースごとに異なるため、詳細は必ず窓口で確認してください。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "ハローワークで求職申込み・訓練の相談", "住所地を管轄するハローワークで求職申込みを行い、職業訓練を受けたい旨を相談します。自分が公共職業訓練と求職者支援訓練のどちらの対象か、給付金の対象になりそうかもここで確認できます。"],
              ["STEP2", "コースを探す", "ハローワークインターネットサービスの「職業訓練検索」や窓口の案内で、IT系コースの募集状況・訓練期間・場所・託児の有無を確認し、候補を絞ります。"],
              ["STEP3", "受講申込み・選考", "ハローワークを通じて受講を申し込みます。訓練実施機関による選考（面接や筆記試験など）が行われる場合があります。選考方法はコースの募集案内で確認しましょう。"],
              ["STEP4", "受講開始", "訓練が始まったら出席が基本です。給付金を受給する場合は「訓練実施日すべてに出席（やむを得ない理由がある場合でも8割以上）」が要件になるため、生活リズムの設計が重要です。"],
              ["STEP5", "訓練期間中〜修了後の就職支援", "訓練期間中も定期的にハローワークで職業相談を受けながら、修了後の就職に向けて準備を進めます。"],
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
            参考: <a href="https://www.mhlw.go.jp/hellotraining/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省 ハロートレーニング特設サイト</a>（2026年7月参照）
          </p>
        </div>
      </section>

      {/* sec5 訓練後の転職活動 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">訓練修了後の転職活動の進め方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ハロートレーニングは就職を目的とした制度ですが、<strong>修了すれば就職が保証されるわけではありません</strong>。訓練で得た基礎を「採用される形」に変換する転職活動が必要です。次の3つを訓練の終盤から並行して進めると、修了後の空白期間を短くできます。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>1. 訓練の成果物をポートフォリオ化する</h3>
              <p className="text-sm text-text-light leading-relaxed">訓練で作ったWebサイトやアプリの演習課題を整理し、自分なりの改良を加えて職務経歴書に載せられる形にします。数か月の訓練を完走した事実自体も、未経験採用では学習継続力の証明になります。まとめ方は<a href="/articles/portfolio/" className="underline" style={{ color: "#7c3a55" }}>ポートフォリオの作り方</a>を参考にしてください。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>2. 未経験からの転職セオリーを押さえる</h3>
              <p className="text-sm text-text-light leading-relaxed">未経験可の求人の見極め方、応募書類の書き方、面接での学習アピールの方法は<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験からITエンジニアになる方法</a>で体系的に解説しています。訓練内容を「どの職種の入口につなげるか」を決めるのに役立ちます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>3. ハローワーク＋転職エージェントを併用する</h3>
              <p className="text-sm text-text-light leading-relaxed">ハローワークの職業相談に加えて、IT特化型・女性特化型の転職エージェントを併用すると、未経験可・研修あり・産育休実績ありといった軸で求人を比較できます。エージェントは無料で使えるため併用のデメリットはほぼありません。選び方は<a href="/ranking/" className="underline" style={{ color: "#7c3a55" }}>おすすめ転職エージェントランキング</a>をどうぞ。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">訓練で学んだスキルを活かせる企業に出会う</p>
            <p className="text-sm text-text-light mb-4">未経験歓迎・女性のキャリア継続に配慮した求人を扱うエージェントを比較しましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec6 関連公的支援 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">あわせて確認したい公的支援</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ハロートレーニング以外にも、女性がITスキルを身につけるために使える公的支援があります。お住まいの自治体の制度もあわせて確認すると、自分に合う選択肢が広がります。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <a href="/articles/tokyo-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都 女性ITエンジニア育成事業</h3>
              <p className="text-sm text-text-light">都内在住・在勤の女性向け。eラーニング主体6か月の訓練と就職支援を無料で提供（原則39歳以下等の要件あり）。ハロートレーニングと要件を見比べて、自分に合うほうを選びましょう。</p>
            </a>
            <a href="/articles/reskilling-leave/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リスキリング支援・社内制度の活用</h3>
              <p className="text-sm text-text-light">在職中（正社員）の方はハロートレーニングの主対象から外れる場合があります。在職のまま学ぶための制度・支援はこちらで解説しています。</p>
            </a>
            <a href="/articles/programming-school/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性向けプログラミングスクールの選び方</h3>
              <p className="text-sm text-text-light">教育訓練給付の活用を含む民間スクールの比較基準。公的訓練とどちらが合うかの判断材料に。</p>
            </a>
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ITエンジニアの資格マップ</h3>
              <p className="text-sm text-text-light">訓練と並行して学ぶ資格選びの全体像。未経験の証明材料づくりに。</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec7" className="py-10">
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
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からITエンジニアになる方法</h3><p className="text-sm text-text-light">学習〜転職までの完全ロードマップ</p></a>
            <a href="/articles/tokyo-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都 女性ITエンジニア育成事業</h3><p className="text-sm text-text-light">都の無料訓練＋就職支援の中身と申込方法</p></a>
            <a href="/articles/programming-school/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性向けプログラミングスクールの選び方</h3><p className="text-sm text-text-light">公的訓練と民間スクールの比較に</p></a>
            <a href="/articles/portfolio/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ポートフォリオの作り方</h3><p className="text-sm text-text-light">訓練の成果物を採用される形に変換する</p></a>
            <a href="/articles/return-to-work/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ブランクから復職・再就職する方法</h3><p className="text-sm text-text-light">キャリアの空白期間がある人の進め方</p></a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 厚生労働省「求職者支援制度のご案内」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html</a>（2026年7月参照）</li>
            <li>出典: 厚生労働省「ハロートレーニング（離職者訓練・求職者支援訓練）」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/rishokusha.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/rishokusha.html</a>（2026年7月参照）</li>
            <li>出典: 厚生労働省「ハロートレーニング（公的職業訓練）」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/hellotraining_top.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/hellotraining_top.html</a>（2026年7月参照）</li>
            <li>出典: 厚生労働省 ハロートレーニング特設サイト <a href="https://www.mhlw.go.jp/hellotraining/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/hellotraining/</a>（2026年7月参照）</li>
            <li>参考: ハローワークインターネットサービス「職業訓練検索」 <a href="https://www.hellowork.mhlw.go.jp/kensaku/GECA150010.do?action=initDisp&screenId=GECA150010" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.hellowork.mhlw.go.jp/kensaku/GECA150010.do</a>（2026年7月参照）</li>
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
