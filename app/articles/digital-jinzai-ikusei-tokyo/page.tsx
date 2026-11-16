import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "デジカレTOKYO（デジタル人材育成支援事業）の費用・評判は？女性向け2事業との違い【2026年】",
  description:
    "東京都のデジタル人材育成支援事業「デジカレTOKYO」を公式情報で解説。原則35歳以下・求職中または非正規雇用の方が対象。受講料とテキスト代は無料ですが交通費・通信費は自己負担です。3コースと選考の流れ、女性限定2事業との違いを比較表で整理します。",
  alternates: { canonical: "/articles/digital-jinzai-ikusei-tokyo/" },
  openGraph: {
    images: ["/og-default.png"],
    title: "デジカレTOKYO（デジタル人材育成支援事業）の費用・評判は？女性向け2事業との違い【2026年】",
    description:
      "東京都のデジタル人材育成支援事業「デジカレTOKYO」の対象・費用・3コース・選考の流れを公式情報で解説。女性限定の2事業との違いも比較表で整理します。",
    url: "https://women-engineer.com/articles/digital-jinzai-ikusei-tokyo/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "デジカレTOKYO（デジタル人材育成支援事業）の費用・評判は？女性向け2事業との違い【2026年】",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
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
    "東京都のデジタル人材育成支援事業「デジカレTOKYO」の対象・費用・3コース・選考の流れを公式情報で解説。女性限定の2事業との違いも比較表で整理します。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/digital-jinzai-ikusei-tokyo/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "デジカレTOKYOの費用はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式Q&Aには「受講料やテキスト代は無料です」と記載されています。オンライン校（バーチャルオフィス利用）でパソコンのレンタルを希望する場合も無料で貸し出されます。ただし新宿キャンパスの方は訓練会場へ通う交通費、オンライン校の方は通信費が自己負担です。またオンライン校のWi-Fi環境は自身で準備する必要があります（出典: デジカレTOKYO 公式サイト、2026年11月16日確認）。",
      },
    },
    {
      "@type": "Question",
      name: "デジカレTOKYOで受講手当や給付金はもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "もらえません。公式Q&Aには「本事業は『技能習得手当』(受講手当・通所手当)、『職業訓練受講給付金』の対象外です。交通費は自己負担でのご参加となります」と明記されています。手当や給付金を受けながら学びたい場合は、ハロートレーニング（公的職業訓練）など別の制度を検討してください（出典: デジカレTOKYO 公式サイト、2026年11月16日確認）。",
      },
    },
    {
      "@type": "Question",
      name: "デジカレTOKYOの倍率や定員は公表されていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公表されていません。当サイトが公式サイトを確認した時点では、選考の倍率や各コースの定員数は掲載されていませんでした。募集枠については「定員に達した場合は早期終了の可能性もございます。締め切り日は状況により変更になる場合もございます」という注記のみが確認できます。選考結果は合否に関わらず全員にメールで通知されます（出典: デジカレTOKYO 公式サイト、2026年11月16日確認）。",
      },
    },
    {
      "@type": "Question",
      name: "女性ITエンジニア育成事業や女性デジタルカレッジ事業とは何が違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "デジカレTOKYOは女性限定ではなく、原則35歳以下で求職中または非正規雇用で就業中の方が対象です。訓練期間は1.5か月または2か月で、現在は12月生を募集しています。一方、女性ITエンジニア育成事業は女性限定の約6か月の訓練で令和8年度の募集は終了しており、女性デジタルカレッジ事業は結婚・出産・育児等で退職して再就職を目指す女性向けで無料託児が付きます。年齢・期間・託児の有無・募集時期が異なるため、このページの比較表で確認してください。",
      },
    },
    {
      "@type": "Question",
      name: "職業訓練だけを受けることはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "できません。公式Q&Aには「本事業は、未経験の方が短期間でデジタルスキルを習得し、IT関連業界等への就業を目指していただくことを目的としておりますので、学習のみを目的とする場合は、ご参加いただくことができません」と記載されています。就職支援と一体の事業であることが前提です（出典: デジカレTOKYO 公式サイト、2026年11月16日確認）。",
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
              { label: "転職コラム", href: "/articles/category-index/" },
              { label: "デジカレTOKYO（デジタル人材育成支援事業）" },
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
              デジカレTOKYO（デジタル人材育成支援事業）の費用・評判は？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                対象・3コース・選考の流れと、女性限定2事業との違い【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年11月16日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>デジカレTOKYOの概要（対象・費用・期間）</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li><strong>どんな事業？</strong> 東京都が支援する「デジタル人材育成支援事業」の愛称です。公式サイトでは「原則35歳以下で、求職中の方または非正規雇用で就業している方が、今後さらなる成長が見込まれるIT分野に就職できるよう、デジタル関連のスキルを習得できる職業訓練と就職支援を一体的に行います」と説明されています。</li>
              <li><strong>女性限定？</strong> いいえ。<strong>女性限定ではありません</strong>。当サイトが扱う女性ITエンジニア育成事業・女性デジタルカレッジ事業とは別の事業です。</li>
              <li><strong>対象は？</strong> 原則35歳以下（訓練開始日の時点で35歳まで）／求職中または非正規雇用で就業中／IT関連業務の経験がない、または少ない／都内のIT関連業界・職種への就職希望／1.5か月または2か月の訓練に参加可能（平日9:30〜17:30）。学生は対象外です。</li>
              <li><strong>費用は？</strong> 受講料・テキスト代は無料。オンライン校はパソコンを無料で貸し出し。ただし<strong>新宿キャンパスは交通費、オンライン校は通信費が自己負担</strong>です。</li>
              <li><strong>手当は？</strong> <strong>技能習得手当・職業訓練受講給付金の対象外</strong>です。</li>
              <li><strong>倍率は？</strong> 公式サイトに<strong>掲載されていません</strong>（当サイト確認日時点）。</li>
            </ul>
            <p className="mt-4 text-xs text-text-light">
              出典: <a href="https://digital-tokyo.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>デジカレTOKYO 公式サイト</a>（トップページ・参加対象者・よくあるご質問、2026年11月16日確認）
            </p>
          </div>

          <div className="mt-6 rounded-xl p-5" style={{ backgroundColor: "#fff6ef", border: "2px solid #c15f47" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>最新の募集状況（2026年11月16日 公式サイト確認）</h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li><strong>12月生を募集中</strong>です。</li>
              <li>デジタル人材育成コース（1.5か月・新宿キャンパス）: 申込締切 11月30日／入校日 12月2日</li>
              <li>インフラ・AWSコース／プログラミング・Javaコース（2か月・オンライン校）: 申込締切 11月30日／入校日 12月2日</li>
              <li>公式サイトには「定員に達した場合は早期終了の可能性もございます。締め切り日は状況により変更になる場合もございます」と注記されています。</li>
            </ul>
            <p className="mt-3 text-xs text-text-light">日程は期ごとに変わります。申込前に必ず公式サイトで最新の締切と入校日を確認してください。</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="underline" style={{ color: "#7c3a55" }}>1. デジカレTOKYOとは（デジタル人材育成支援事業）</a></li>
              <li><a href="#sec2" className="underline" style={{ color: "#7c3a55" }}>2. 参加できる人の条件</a></li>
              <li><a href="#digikare-hiyou" className="underline" style={{ color: "#7c3a55" }}>3. 費用と自己負担になるもの</a></li>
              <li><a href="#sec4" className="underline" style={{ color: "#7c3a55" }}>4. 3つのコース内容</a></li>
              <li><a href="#sec5" className="underline" style={{ color: "#7c3a55" }}>5. 申込から受講・就職までの流れ</a></li>
              <li><a href="#hikaku" className="underline" style={{ color: "#7c3a55" }}>6. 女性限定2事業との違い（比較表）</a></li>
              <li><a href="#digikare" className="underline" style={{ color: "#7c3a55" }}>7. 口コミ・評判の探し方</a></li>
              <li><a href="#sec8" className="underline" style={{ color: "#7c3a55" }}>8. 対象外・選考に通らなかった場合</a></li>
              <li><a href="#sec9" className="underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">デジカレTOKYOとは（デジタル人材育成支援事業）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「デジカレTOKYO」は、東京都が支援する<strong>デジタル人材育成支援事業</strong>の愛称です。公式サイトのタイトルは「未経験からITエンジニアへ｜東京都の無料職業訓練 デジカレTOKYO［短期集中］」で、職業訓練と就職支援を一体で行う短期集中型の事業として案内されています。
            </p>
            <p>
              当サイトでくわしく扱っている<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>や<a href="/articles/women-digital-college/" className="underline" style={{ color: "#7c3a55" }}>女性デジタルカレッジ事業</a>は、どちらも同じ東京都の事業ですが<strong>女性限定</strong>です。デジカレTOKYOは<strong>男女を問わず、原則35歳以下</strong>が対象という点が最も大きな違いです。「デジカレ東京」「デジカレ」という呼び方で検索した場合、この事業と女性デジタルカレッジ事業が混ざって出てくることがあるため、応募前にどちらの事業かを確認してください。
            </p>
            <p>
              就職支援は訓練期間中だけではありません。公式サイトには、訓練が終わって就職が決まっていない場合でも<strong>2027年3月31日までは、面接対策を相談したり、専用求人サイトから応募するなど、引き続き就職支援を受けることができる</strong>と記載されています。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">参加できる人の条件</h2>
          <p className="mb-4 text-sm text-text-light">公式サイトの「参加対象者」には、<strong>以下すべてに該当する方が対象</strong>と記載されています。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#7c3a55" }}>
                  <th className="px-4 py-3 text-left text-white font-bold">条件</th>
                  <th className="px-4 py-3 text-left text-white font-bold">公式サイトの記載</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: "#d9c7b8" }}>
                  <td className="px-4 py-3 font-bold">年齢</td>
                  <td className="px-4 py-3">原則35歳以下であること（訓練開始日の時点で35歳までの方が対象）</td>
                </tr>
                <tr className="border-b" style={{ borderColor: "#d9c7b8" }}>
                  <td className="px-4 py-3 font-bold">就業状況</td>
                  <td className="px-4 py-3">求職中または非正規雇用で就業中であること</td>
                </tr>
                <tr className="border-b" style={{ borderColor: "#d9c7b8" }}>
                  <td className="px-4 py-3 font-bold">IT経験</td>
                  <td className="px-4 py-3">IT関連業務の経験がない、または少ない方</td>
                </tr>
                <tr className="border-b" style={{ borderColor: "#d9c7b8" }}>
                  <td className="px-4 py-3 font-bold">就職の希望先</td>
                  <td className="px-4 py-3">都内のIT関連業界やIT関係職種へ就職希望であること</td>
                </tr>
                <tr className="border-b" style={{ borderColor: "#d9c7b8" }}>
                  <td className="px-4 py-3 font-bold">参加できる期間</td>
                  <td className="px-4 py-3">1.5か月または2か月の職業訓練に参加が可能であること（職業訓練時間 平日9:30〜17:30）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold">対象外</td>
                  <td className="px-4 py-3">学生は対象外です</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-text-light">
            出典: <a href="https://digital-tokyo.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>デジカレTOKYO 公式サイト「ENTRY 参加対象者」</a>（2026年11月16日確認）
          </p>
        </div>
      </section>

      {/* 費用 */}
      <section id="digikare-hiyou" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">費用と自己負担になるもの</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              公式Q&amp;Aには「<strong>受講料やテキスト代は無料です</strong>」と記載されています。オンライン校（バーチャルオフィス利用）でパソコンのレンタルを希望する場合も無料で貸し出されます。
            </p>
            <p>
              一方で、次のものは<strong>自己負担</strong>です。
            </p>
            <ul className="space-y-2 text-sm">
              <li>・新宿キャンパスで受講する場合: 訓練会場へ通う<strong>交通費</strong></li>
              <li>・オンライン校で受講する場合: <strong>通信費</strong>（Wi-Fi環境は自身で準備）</li>
            </ul>
            <p>
              また、手当については公式Q&amp;Aに「本事業は『技能習得手当』(受講手当・通所手当)、『職業訓練受講給付金』の<strong>対象外</strong>です。交通費は自己負担でのご参加となります」と明記されています。生活費の支給を受けながら学びたい場合は、<a href="/articles/hello-training-it/" className="underline" style={{ color: "#7c3a55" }}>ハロートレーニング（公的職業訓練）</a>や<a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付制度</a>など別の制度を確認してください。
            </p>
            <p className="text-xs">
              出典: <a href="https://digital-tokyo.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>デジカレTOKYO 公式サイト「FAQ よくあるご質問」</a>（2026年11月16日確認）
            </p>
          </div>
        </div>
      </section>

      {/* コース */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">3つのコース内容</h2>
          <p className="mb-4 text-sm text-text-light">公式サイトでは「基礎から学べる3つのコース。どのコースも、就職支援を受けながら学べます」と案内されています。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#7c3a55" }}>
                  <th className="px-4 py-3 text-left text-white font-bold">コース</th>
                  <th className="px-4 py-3 text-left text-white font-bold">期間・会場</th>
                  <th className="px-4 py-3 text-left text-white font-bold">学ぶ内容（公式の説明）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: "#d9c7b8" }}>
                  <td className="px-4 py-3 font-bold">デジタル人材育成コース</td>
                  <td className="px-4 py-3">1.5か月／新宿キャンパス</td>
                  <td className="px-4 py-3">ITのしくみ、プログラミング（Python）、生成AIまで幅広く学ぶ</td>
                </tr>
                <tr className="border-b" style={{ borderColor: "#d9c7b8" }}>
                  <td className="px-4 py-3 font-bold">インフラ・AWSコース</td>
                  <td className="px-4 py-3">2か月／オンライン校・新宿キャンパス</td>
                  <td className="px-4 py-3">サーバーやネットワーク、クラウド（AWS）のしくみを手を動かしながら学ぶ</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold">プログラミング・Javaコース</td>
                  <td className="px-4 py-3">2か月／オンライン校・新宿キャンパス</td>
                  <td className="px-4 py-3">プログラミング言語「Java」を基本から学び、アプリを作る練習を重ねる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-text-light">
            出典: <a href="https://digital-tokyo.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>デジカレTOKYO 公式サイト「COURSE どんなことを学ぶ？」</a>（2026年11月16日確認）。開講するコースと会場は期によって変わります。
          </p>
        </div>
      </section>

      {/* 流れ */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">申込から受講・就職までの流れ</h2>
          <p className="mb-4 text-sm text-text-light">公式サイトの「FLOW 受講までの流れ」に記載されている手順です。</p>
          <ol className="space-y-3 text-sm">
            <li className="rounded-xl bg-white border p-4" style={{ borderColor: "#d9c7b8" }}><strong>STEP 1 面談にお申込み</strong><br />ホームページから相談・受講の申込みを予約します。</li>
            <li className="rounded-xl bg-white border p-4" style={{ borderColor: "#d9c7b8" }}><strong>STEP 2 面談に参加</strong><br />入校を希望する場合は、説明会のあとに申込フォームを入力し、カジュアル面談を実施します。</li>
            <li className="rounded-xl bg-white border p-4" style={{ borderColor: "#d9c7b8" }}><strong>STEP 3 選考結果通知</strong><br /><strong>合否に関わらず全員に後日メールで通知</strong>されます。</li>
            <li className="rounded-xl bg-white border p-4" style={{ borderColor: "#d9c7b8" }}><strong>STEP 4 受講開始</strong><br />スキル習得と就職支援を一体で進めます。平日9:30〜17:30（土日祝日・年末年始を除く）。</li>
          </ol>
          <p className="mt-4 mb-4 text-sm text-text-light">入校後は、初日に担当メンターと面談し、カリキュラムと就職支援を並行して進めます。公式サイトには<strong>毎週金曜日が「就職支援日」</strong>で、未経験者を積極採用する企業と出会える就職イベントを実施すると記載されています。</p>
          <p className="text-xs text-text-light">
            出典: <a href="https://digital-tokyo.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>デジカレTOKYO 公式サイト「FLOW 受講までの流れ」「REASON 選ばれる3つの理由」</a>（2026年11月16日確認）
          </p>
        </div>
      </section>

      {/* 比較表 */}
      <section id="hikaku" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性限定2事業との違い（比較表）</h2>
          <p className="mb-4 text-sm text-text-light">東京都には似た名前の事業が複数あります。自分がどれに応募できるのかを、年齢・期間・託児の有無で確認してください。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#7c3a55" }}>
                  <th className="px-3 py-3 text-left text-white font-bold">項目</th>
                  <th className="px-3 py-3 text-left text-white font-bold">デジカレTOKYO<br />（このページ）</th>
                  <th className="px-3 py-3 text-left text-white font-bold">女性ITエンジニア<br />育成事業</th>
                  <th className="px-3 py-3 text-left text-white font-bold">女性デジタル<br />カレッジ事業</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b" style={{ borderColor: "#d9c7b8" }}>
                  <td className="px-3 py-3 font-bold">性別の条件</td>
                  <td className="px-3 py-3">男女を問わない</td>
                  <td className="px-3 py-3">女性限定</td>
                  <td className="px-3 py-3">女性限定</td>
                </tr>
                <tr className="border-b" style={{ borderColor: "#d9c7b8" }}>
                  <td className="px-3 py-3 font-bold">年齢</td>
                  <td className="px-3 py-3">原則35歳以下</td>
                  <td className="px-3 py-3">公式の要件を確認</td>
                  <td className="px-3 py-3">公式の要件を確認</td>
                </tr>
                <tr className="border-b" style={{ borderColor: "#d9c7b8" }}>
                  <td className="px-3 py-3 font-bold">期間</td>
                  <td className="px-3 py-3">1.5か月または2か月</td>
                  <td className="px-3 py-3">約6か月</td>
                  <td className="px-3 py-3">入門5日／基礎及び応用15日</td>
                </tr>
                <tr className="border-b" style={{ borderColor: "#d9c7b8" }}>
                  <td className="px-3 py-3 font-bold">託児</td>
                  <td className="px-3 py-3">公式に記載なし</td>
                  <td className="px-3 py-3">公式の案内を確認</td>
                  <td className="px-3 py-3">無料託児あり</td>
                </tr>
                <tr className="border-b" style={{ borderColor: "#d9c7b8" }}>
                  <td className="px-3 py-3 font-bold">受講料</td>
                  <td className="px-3 py-3">無料（交通費・通信費は自己負担）</td>
                  <td className="px-3 py-3">無料</td>
                  <td className="px-3 py-3">無料</td>
                </tr>
                <tr>
                  <td className="px-3 py-3 font-bold">募集状況<br />（2026年11月16日確認）</td>
                  <td className="px-3 py-3"><strong>12月生 募集中</strong></td>
                  <td className="px-3 py-3">令和8年度の募集は終了</td>
                  <td className="px-3 py-3">各コースの公式サイトで確認</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text-light">
            くわしくは各事業のページをご覧ください: <a href="/articles/tokyo-women-training/" className="underline font-bold" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>／<a href="/articles/women-digital-college/" className="underline font-bold" style={{ color: "#7c3a55" }}>女性デジタルカレッジ事業</a>
          </p>
          <p className="mt-3 text-xs text-text-light">
            出典: <a href="https://digital-tokyo.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>デジカレTOKYO 公式サイト</a>（2026年11月16日確認）／<a href="https://women-tokyo-en.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業 公式サイト</a>（2026年10月27日確認）／<a href="https://tokyo-woman-d.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>女性デジタルカレッジ事業 公式サイト</a>（2026年11月15日確認）
          </p>
        </div>
      </section>

      {/* 口コミ */}
      <section id="digikare" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">口コミ・評判の探し方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              当サイトでは、出典を示せない口コミや、年代・地域を差し替えた体験談は掲載していません。デジカレTOKYOについて確認できたのは、<strong>公式サイトの「VOICE 受講生の声」に修了生のインタビューが掲載されている</strong>という事実です。公式サイト上では、営業職から開発エンジニアへ（デジタル人材育成コース修了・20代女性・令和8年8月入社）、接客業からインフラエンジニアへ（インフラ・AWSコース修了・30代女性・令和8年9月入社）など、<strong>女性の転職事例が複数</strong>紹介されています。
            </p>
            <p>
              ただし公式サイトに載る声は運営側が選んだものなので、良い評価が中心になります。応募前に見ておきたいのは次の3点です。
            </p>
            <ul className="space-y-2 text-sm">
              <li>・<strong>自分が条件に当てはまるか</strong>（原則35歳以下・求職中または非正規雇用・学生は対象外）</li>
              <li>・<strong>平日9:30〜17:30に1.5〜2か月通えるか</strong>（働きながらの受講は想定されていません）</li>
              <li>・<strong>手当が出ないこと</strong>（技能習得手当・職業訓練受講給付金の対象外）</li>
            </ul>
            <p>
              説明会と無料相談が用意されているので、条件や雰囲気に不安があれば先に相談するのが確実です。公式サイトには問い合わせ先として 0120-522-633（受付時間 平日9:00〜18:00、土日祝・年末年始を除く）が記載されています。
            </p>
            <p className="text-xs">
              出典: <a href="https://digital-tokyo.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>デジカレTOKYO 公式サイト「VOICE 受講生の声」「FAQ」</a>（2026年11月16日確認）
            </p>
          </div>
        </div>
      </section>

      {/* 対象外の場合 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">対象外・選考に通らなかった場合</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              36歳以上の方、正社員として就業中の方、平日の日中に通えない方は、デジカレTOKYOの対象にはなりません。その場合でも、ほかの選択肢があります。
            </p>
            <ul className="space-y-2 text-sm">
              <li>・<a href="/articles/women-digital-college/" className="underline" style={{ color: "#7c3a55" }}>女性デジタルカレッジ事業</a>（女性限定・無料託児あり・入門5日／基礎及び応用15日）</li>
              <li>・<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>（女性限定・約6か月。令和8年度の募集は終了）</li>
              <li>・<a href="/articles/hello-training-it/" className="underline" style={{ color: "#7c3a55" }}>ハロートレーニング（公的職業訓練）</a>（手当の対象になる場合があります）</li>
              <li>・<a href="/articles/women-it-support-map/" className="underline" style={{ color: "#7c3a55" }}>全国の女性向けIT訓練・支援まとめ</a>（他の自治体の事業を探す）</li>
              <li>・<a href="/articles/training-not-selected/" className="underline" style={{ color: "#7c3a55" }}>選考に落ちた場合の代替ルート</a>（研修のある会社に入るという選択肢も含めて整理しています）</li>
            </ul>
            <p>
              学んでから転職するか、研修のある会社に入ってから学ぶかで迷う場合は、<a href="/articles/learn-vs-transfer/" className="underline" style={{ color: "#7c3a55" }}>先に学ぶ vs 転職して学ぶ</a>で費用と時間を比べています。
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
            <a href="/articles/tokyo-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都 女性ITエンジニア育成事業ガイド</h3><p className="text-sm text-text-light">女性限定・約6か月の無料訓練</p></a>
            <a href="/articles/women-digital-college/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性デジタルカレッジ事業ガイド</h3><p className="text-sm text-text-light">女性限定・無料託児つきの再就職向け訓練</p></a>
            <a href="/articles/women-it-support-map/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>全国の女性向けIT訓練・支援まとめ</h3><p className="text-sm text-text-light">公的支援の全体像ハブ</p></a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からITエンジニアになる方法</h3><p className="text-sm text-text-light">学習〜転職までのロードマップ</p></a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 東京都「デジタル人材育成支援事業（デジカレTOKYO）」公式サイト <a href="https://digital-tokyo.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://digital-tokyo.metro.tokyo.lg.jp/</a>（トップページ・ABOUT・COURSE・FLOW・REASON・VOICE・FAQ・ENTRY、2026年11月16日確認）</li>
            <li>出典: 東京都「令和8年度女性ITエンジニア育成事業」公式サイト <a href="https://women-tokyo-en.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://women-tokyo-en.metro.tokyo.lg.jp/</a>（2026年10月27日確認）</li>
            <li>出典: 東京都「女性デジタルカレッジ事業」公式サイト <a href="https://tokyo-woman-d.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://tokyo-woman-d.metro.tokyo.lg.jp/</a>（2026年11月15日確認）</li>
          </ul>
          <p className="mt-4 text-xs text-text-light">当サイトは本事業の運営者ではありません。募集状況・締切・コース内容は期ごとに変わるため、申込前に必ず公式サイトで最新情報をご確認ください。</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しませんか</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えます。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>女性エンジニアにおすすめの転職サイトランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
