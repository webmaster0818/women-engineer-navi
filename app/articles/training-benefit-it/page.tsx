import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "教育訓練給付制度でITスキルを学ぶ方法｜給付の種類・最大80%の条件・講座の探し方【2026年】",
  description:
    "教育訓練給付制度を厚生労働省の公式情報をもとに解説。一般（20%・上限10万円）・特定一般（40〜50%）・専門実践（50〜最大80%）の3種類の違い、雇用保険の加入期間などの支給要件、ハローワークでの手続き、IT関連講座の探し方（教育訓練講座検索システム）まで。在職中の女性がITスキル習得に活用する方法を紹介します。",
  alternates: { canonical: "/articles/training-benefit-it/" },
  openGraph: {
    title: "教育訓練給付制度でITスキルを学ぶ方法｜給付の種類・最大80%の条件・講座の探し方【2026年】",
    description:
      "教育訓練給付制度の3種類（一般・特定一般・専門実践）の給付率と上限額、支給要件、ハローワークでの手続き、IT関連講座の探し方を厚生労働省の公式情報をもとに解説。在職中でも使える学び直しの公的支援です。",
    url: "https://women-engineer.com/articles/training-benefit-it/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "教育訓練給付制度でITスキルを学ぶ方法｜給付の種類・最大80%の条件・講座の探し方【2026年】",
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
    "教育訓練給付制度の3種類（一般・特定一般・専門実践）の給付率と上限額、支給要件、ハローワークでの手続き、IT関連講座の探し方を厚生労働省の公式情報をもとに解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/training-benefit-it/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "教育訓練給付制度は在職中（働きながら）でも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "使えます。教育訓練給付は雇用保険の被保険者（在職中の方）と、離職後1年以内の方が対象です。会社を辞める必要はなく、働きながら夜間・オンラインの指定講座を受講して給付を受けることができます。受講開始日時点で雇用保険の加入期間が3年以上（初めて利用する場合は、一般・特定一般は1年以上、専門実践は2年以上）あることが条件です（出典: ハローワークインターネットサービス「教育訓練給付制度」、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "パートや派遣で働いていても教育訓練給付の対象になりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "雇用形態そのものではなく「雇用保険に加入しているか」と「その加入期間」で判定されます。パート・派遣・契約社員でも、勤務先で雇用保険に加入していれば被保険者として対象になり得ます。自分の加入期間が要件を満たすかどうかは、ハローワークで支給要件照会ができるので、受講を検討する段階で確認しておくと確実です。",
      },
    },
    {
      "@type": "Question",
      name: "給付金はいつ受け取れますか？先に受講料を払う必要はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "教育訓練給付は、支払った教育訓練経費の一定割合が後から支給される仕組みです。受講料はいったん自分で支払う必要があり、「最初から割引価格で受講できる」制度ではありません。支給申請はハローワークで行い、申請期限が定められているため、受講前にハローワークまたは講座の実施機関で申請の流れと期限を確認しておきましょう。",
      },
    },
    {
      "@type": "Question",
      name: "どの講座が教育訓練給付の対象か調べる方法はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省の「教育訓練講座検索システム」（https://www.kyufu.mhlw.go.jp/kensaku/）で、厚生労働大臣の指定を受けた講座を検索できます。給付の種類（一般・特定一般・専門実践）、分野、受講形態（通学・通信）、地域などの条件で絞り込めるため、プログラミング・クラウド・データ分析などIT関連の講座もここから探せます。個別のスクールの広告ではなく、まず公式の検索システムで対象講座を確認するのが確実です（出典: 厚生労働省 教育訓練講座検索システム、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "専門実践教育訓練で給付率が最大80%になる条件は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "専門実践教育訓練は、まず受講費用の50%（年間上限40万円）が支給され、資格取得等をして修了後1年以内に雇用された場合などに70%（年間上限56万円）に引き上がります。さらに2024年（令和6年）10月以降の受講開始者は、訓練修了後の賃金が受講開始前と比較して5%以上上昇した場合に、教育訓練経費の80%相当額（年間上限64万円）との差額が追加支給されます。80%は無条件ではなく「資格取得・就職・賃金上昇」という段階的な条件を満たした場合の最大値である点に注意してください（出典: 厚生労働省「教育訓練給付制度」、2026年7月参照）。",
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
              { label: "教育訓練給付制度でITスキルを学ぶ" },
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
              教育訓練給付制度でITスキルを学ぶ
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                3種類の給付の違い・最大80%の条件・IT講座の探し方【2026年】
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
                <span><strong>何が戻る？</strong> 厚生労働大臣が指定した講座の受講費用の一部が、雇用保険から支給されます。一般教育訓練で20%（上限10万円）、特定一般で40〜50%、専門実践なら50%〜条件を満たせば最大80%（年間上限64万円）です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>誰が対象？</strong> 雇用保険の被保険者（在職中OK）または離職後1年以内の方で、加入期間が原則3年以上（初回は1〜2年以上に緩和）ある方。パート・派遣でも雇用保険に加入していれば対象になり得ます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>どこで探す？</strong> 対象講座は厚生労働省の「教育訓練講座検索システム」で検索できます。プログラミング・クラウド・データ分析などIT関連講座もここから絞り込めます。手続きの窓口はハローワークです。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省「教育訓練給付制度」</a>／<a href="https://www.kyufu.mhlw.go.jp/kensaku/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>教育訓練講座検索システム</a>（いずれも2026年7月参照）
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 教育訓練給付制度とは</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 3種類の給付の違い（一般／特定一般／専門実践）比較表</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. ITスキル講座での活用イメージ（Web系・インフラ系・データ系）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 利用手順（ハローワークでの手続き）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 女性のキャリアと併用しやすい理由</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. あわせて検討したい関連の公的支援</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">教育訓練給付制度とは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              教育訓練給付制度は、働く人の主体的な能力開発・キャリア形成を支援するために、<strong>雇用保険制度の一環</strong>として実施されている国の給付制度です。厚生労働大臣が指定した教育訓練講座を受講・修了すると、支払った受講費用の一部が支給されます（出典: 厚生労働省「教育訓練給付制度」、2026年7月参照）。
            </p>
            <p>
              ポイントは、これが<strong>失業者向けの制度ではない</strong>ことです。対象は雇用保険の被保険者、つまり在職中の会社員・パート・派遣の方（雇用保険加入者）と、離職後1年以内の方。「会社を辞めずに、働きながらITスキルを学ぶ費用を国が一部負担してくれる」制度として使えます。
            </p>
            <p>
              給付には「一般教育訓練」「特定一般教育訓練」「専門実践教育訓練」の3種類があり、講座のレベル・分野によって給付率と上限額が異なります。2024年（令和6年）10月からは給付率の引上げが行われ、専門実践教育訓練では条件を満たすと<strong>受講費用の最大80%</strong>（年間上限64万円）まで支給されるようになりました。数十万円かかるIT系の講座でも、自己負担を大きく抑えられる可能性があります。
            </p>
            <p>
              未経験からのエンジニア転職では「学習費用」が最初のハードルになりがちですが、この制度を知っているかどうかで負担が大きく変わります。<a href="/articles/programming-school/" className="underline" style={{ color: "#7c3a55" }}>プログラミングスクールの選び方</a>を検討する際も、まず「その講座が教育訓練給付の指定を受けているか」を確認するのがおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 3種類の比較表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">3種類の給付の違い（一般／特定一般／専門実践）比較表</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              3種類の給付率・上限額・要件を比較します。いずれも2024年（令和6年）10月の給付率引上げ後の現行制度です。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>一般教育訓練</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>特定一般教育訓練</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>専門実践教育訓練</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>基本の給付率</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>受講費用の20%（上限10万円）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>受講費用の40%（上限20万円）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>受講費用の50%（年間上限40万円）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>追加の給付</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>なし</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>資格取得等＋修了後の就職等で50%（上限25万円）に引上げ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>資格取得等＋修了後1年以内の雇用で70%（年間上限56万円）。さらに賃金が受講前より5%以上上昇で80%相当（年間上限64万円）との差額を支給</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>雇用保険の加入期間</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>3年以上（初回は1年以上）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>3年以上（初回は1年以上）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>3年以上（初回は2年以上）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>受講前の手続き</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>原則不要（修了後に支給申請）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>訓練前キャリアコンサルティング＋ジョブ・カード交付のうえ、受講開始日の2週間前までにハローワークで受給資格確認</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>訓練前キャリアコンサルティング＋ジョブ・カード交付のうえ、受講開始日の2週間前までにハローワークで受給資格確認</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>講座のイメージ</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>幅広い分野の入門・スキルアップ講座</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>速やかな再就職・キャリア形成に資する講座（IT資格の取得を目指す講座など）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>中長期的なキャリア形成に資する専門的・実践的な講座（デジタル分野の講座など）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省「教育訓練給付制度」</a>／<a href="https://www.hellowork.mhlw.go.jp/insurance/insurance_education.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>ハローワークインターネットサービス「教育訓練給付制度」</a>（いずれも2026年7月参照）。特定一般の50%・専門実践の80%は2024年（令和6年）10月1日以降に受講開始した場合が対象です。個別の講座がどの給付に該当するか、自分が支給要件を満たすかは、必ず検索システムとハローワークで確認してください。
          </p>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>誤解しやすいポイント</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>「最大80%」は無条件ではありません。</strong>専門実践の80%は「資格取得等→修了後1年以内の雇用→賃金5%以上上昇」という段階的な条件を満たした場合の最大値です。基本は50%と理解しておきましょう。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>割引ではなく後払いです。</strong>受講料はいったん自分で支払い、後からハローワークへの申請で支給を受ける仕組みです。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>特定一般・専門実践は受講前の手続きが必須です。</strong>受講開始日の2週間前までの受給資格確認を忘れると給付を受けられないため、申込前に必ずハローワークへ。</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec3 IT講座での活用イメージ */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ITスキル講座での活用イメージ（Web系・インフラ系・データ系）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              指定講座には、資格取得を目指す講座やデジタル分野の専門知識の向上に役立つ講座が含まれており、IT関連の講座も<a href="https://www.kyufu.mhlw.go.jp/kensaku/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>教育訓練講座検索システム</a>で探せます（出典: 同システム、2026年7月参照）。ここでは「どんな方向性の講座を探すか」の整理として、女性エンジニア転職で狙われやすい3つの領域を紹介します。特定のスクール・講座の優劣を示すものではなく、<strong>必ず検索システムで指定講座かどうか・給付の種類を確認してください</strong>。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Web開発系</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>プログラミング言語・Webアプリ開発を学ぶ講座</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>フロントエンド／バックエンドの開発職を目指す人向け</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">求人数が多く未経験採用の入口になりやすい領域。<a href="/articles/frontend/" className="underline" style={{ color: "#7c3a55" }}>フロントエンド</a>・<a href="/articles/backend/" className="underline" style={{ color: "#7c3a55" }}>バックエンド</a>の仕事内容も参考に。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>インフラ・クラウド系</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ネットワーク・サーバー・クラウドの知識や関連資格の取得を目指す講座</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>インフラエンジニア・クラウドエンジニアを目指す人向け</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">資格が評価に直結しやすい領域。<a href="/articles/infrastructure/" className="underline" style={{ color: "#7c3a55" }}>インフラエンジニア</a>・<a href="/articles/aws-career/" className="underline" style={{ color: "#7c3a55" }}>AWSのキャリア</a>もあわせてどうぞ。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>データ・AI系</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>データ分析・統計・AI活用などデジタル分野の専門知識を学ぶ講座</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>データ分析職・AI関連職への足がかりにしたい人向け</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">需要の伸びが大きい領域。<a href="/articles/data-scientist/" className="underline" style={{ color: "#7c3a55" }}>データサイエンティスト</a>・<a href="/articles/ai-ml-career/" className="underline" style={{ color: "#7c3a55" }}>AI・機械学習のキャリア</a>も参考に。</p>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>講座の探し方（検索システムの使い方）</h3>
            <ol className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">1.</span><span><a href="https://www.kyufu.mhlw.go.jp/kensaku/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>教育訓練講座検索システム</a>（kyufu.mhlw.go.jp）にアクセス</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">2.</span><span>給付の種類（一般／特定一般／専門実践）や分野・キーワード（プログラミング、クラウド、データ分析など）、受講形態（通学・通信）で絞り込み</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">3.</span><span>気になる講座の受講費用・期間・目標資格を確認し、給付率をあてはめて自己負担額を試算</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">4.</span><span>候補が決まったら、申込前にハローワークで支給要件と手続きを確認</span></li>
            </ol>
            <p className="text-xs text-text-light mt-3">
              資格取得を軸に選ぶ場合は、<a href="/articles/cert-kihonjoho/" className="underline" style={{ color: "#7c3a55" }}>基本情報技術者試験</a>など資格側から逆算するのも有効です（<a href="/articles/certification/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアの資格マップ</a>参照）。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 利用手順 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">利用手順（ハローワークでの手続き）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              手続きの窓口は<strong>住所地を管轄するハローワーク</strong>です。特に特定一般・専門実践は「受講開始前」の手続きが必須なので、講座に申し込む前にハローワークに行く、という順番を覚えておきましょう。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "支給要件を確認する", "自分の雇用保険の加入期間が要件（原則3年以上、初回は一般・特定一般1年以上／専門実践2年以上）を満たすか、ハローワークで支給要件照会ができます。離職中の方は「離職後1年以内の受講開始」も要チェック。"],
              ["STEP2", "検索システムで講座を選ぶ", "教育訓練講座検索システムで指定講座を検索し、給付の種類（一般／特定一般／専門実践）を確認。同じ分野でも講座によって給付の種類が異なります。"],
              ["STEP3", "（特定一般・専門実践）訓練前キャリアコンサルティング", "訓練対応キャリアコンサルタントによる訓練前キャリアコンサルティングを受け、ジョブ・カードの交付を受けます。そのうえで受講開始日の2週間前までにハローワークで受給資格確認の手続きを行います。"],
              ["STEP4", "受講・修了", "受講料はいったん自分で支払って受講します。修了要件（出席率・課題など）は講座ごとに定められているため、実施機関に確認しましょう。"],
              ["STEP5", "ハローワークに支給申請", "修了後、必要書類を揃えてハローワークに支給申請します。申請には期限が定められているため、受講前に申請時期と必要書類を確認しておくと安心です。"],
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
            出典: <a href="https://www.hellowork.mhlw.go.jp/insurance/insurance_education.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>ハローワークインターネットサービス「教育訓練給付制度」</a>（2026年7月参照）。手続きの詳細・必要書類は変更される場合があるため、最新情報は必ずハローワークで確認してください。
          </p>
        </div>
      </section>

      {/* sec5 女性のキャリアと併用しやすい理由 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性のキャリアと併用しやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              教育訓練給付は、キャリアの節目が多くなりがちな女性にとって、次の点で使い勝手のよい制度です。いずれも制度上の事実に基づくポイントです。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>1. 在職中に使える＝辞めずに準備できる</h3>
              <p className="text-sm text-text-light leading-relaxed">対象は雇用保険の被保険者本人。退職せずに、今の仕事を続けながら通信・オンラインの指定講座で学ぶ、という使い方ができます。収入を保ったまま転職準備を進められるのは大きな安心材料です。<a href="/articles/job-hunting-while-employed/" className="underline" style={{ color: "#7c3a55" }}>働きながらの転職活動の進め方</a>ともあわせてどうぞ。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>2. パート・派遣でも雇用保険加入なら対象になり得る</h3>
              <p className="text-sm text-text-light leading-relaxed">支給要件は雇用形態ではなく「雇用保険の加入期間」で判定されます。非正規で働きながらITスキルを身につけて正社員転職を目指すルートでも、要件を満たせば給付を使えます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>3. 離職後1年以内なら退職後でも使える</h3>
              <p className="text-sm text-text-light leading-relaxed">出産・育児などでいったん離職した場合も、離職後1年以内に受講を開始すれば対象になり得ます。復職・再就職の準備として学び直したい人は、離職からの期間を早めに確認しましょう。<a href="/articles/return-to-work/" className="underline" style={{ color: "#7c3a55" }}>ブランクからの復職ガイド</a>も参考になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>4. 自己負担を抑えて「資格＋スキル」を作れる</h3>
              <p className="text-sm text-text-light leading-relaxed">特定一般・専門実践には資格取得等で給付率が上がる仕組みがあり、制度自体が「資格を取って就職する」動きを後押しする設計です。未経験からの転職では学習の証明が重要になるため、給付で費用を抑えつつ資格とポートフォリオを作る流れと相性が良いといえます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec6 関連公的支援 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">あわせて検討したい関連の公的支援</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「費用を抑えてITスキルを学ぶ」選択肢は教育訓練給付だけではありません。自分の状況（年齢・居住地・就業状態）によっては、より条件の合う公的支援があります。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>東京都「女性ITエンジニア育成事業」（受講料無料）</h3>
              <p className="text-sm text-text-light leading-relaxed">原則39歳以下・正社員でない女性が対象の、東京都による無料の職業訓練＋就職支援。受講料無料でPCレンタルもあり、条件が合えば教育訓練給付より自己負担を抑えられます。詳細は<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>東京都の女性ITエンジニア育成事業ガイド</a>で解説しています。対象外の方（40歳以上・在職正社員・都外就職希望）は本記事の教育訓練給付が有力な代替になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>給付対象のプログラミングスクールを選ぶ</h3>
              <p className="text-sm text-text-light leading-relaxed">民間スクールの中にも教育訓練給付の指定講座があります。スクール選びの基準と給付金活用の考え方は<a href="/articles/programming-school/" className="underline" style={{ color: "#7c3a55" }}>女性向けプログラミングスクールの選び方</a>で詳しく解説しています。スクールの広告表示だけで判断せず、検索システムで指定状況と給付の種類を確認しましょう。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>在職中の学び直し・社内制度</h3>
              <p className="text-sm text-text-light leading-relaxed">勤務先にリスキリング支援や休暇制度がある場合は、教育訓練給付と組み合わせて学習時間を確保する方法もあります。<a href="/articles/reskilling-leave/" className="underline" style={{ color: "#7c3a55" }}>リスキリングでエンジニアを目指す</a>を参考にしてください。</p>
            </div>
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
            <a href="/articles/tokyo-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都の女性ITエンジニア育成事業</h3><p className="text-sm text-text-light">受講料無料の都の職業訓練＋就職支援</p></a>
            <a href="/articles/programming-school/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性向けプログラミングスクールの選び方</h3><p className="text-sm text-text-light">給付金活用と失敗しない選び方の基準</p></a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からITエンジニアになる方法</h3><p className="text-sm text-text-light">学習〜転職までの完全ロードマップ</p></a>
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの資格マップ</h3><p className="text-sm text-text-light">キャリア別に取るべき資格を整理</p></a>
            <a href="/articles/reskilling-leave/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リスキリングでエンジニアを目指す</h3><p className="text-sm text-text-light">在職中に学ぶ制度・支援の活用法</p></a>
            <a href="/articles/return-to-work/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ブランクからの復職ガイド</h3><p className="text-sm text-text-light">離職後の学び直しと再就職の進め方</p></a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 厚生労働省「教育訓練給付制度」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html</a>（2026年7月参照）</li>
            <li>出典: 厚生労働省「教育訓練講座検索システム」 <a href="https://www.kyufu.mhlw.go.jp/kensaku/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.kyufu.mhlw.go.jp/kensaku/</a>（2026年7月参照）</li>
            <li>出典: ハローワークインターネットサービス「教育訓練給付制度」 <a href="https://www.hellowork.mhlw.go.jp/insurance/insurance_education.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.hellowork.mhlw.go.jp/insurance/insurance_education.html</a>（2026年7月参照）</li>
          </ul>
          <p className="text-xs text-text-light mt-4">※給付率・上限額・手続きは2026年7月時点で確認した現行制度（2024年10月の給付率引上げ後）に基づきます。制度は改正される場合があるため、受講前に必ず厚生労働省・ハローワークの最新情報を確認してください。</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">学んだスキルを活かせる職場を見つけましょう</h2>
            <p className="text-white/90 mb-6">給付制度で費用を抑えて学んだら、次は転職活動。まずはエージェントに無料相談して、あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
