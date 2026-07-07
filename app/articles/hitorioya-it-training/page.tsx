import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ひとり親のIT資格取得に使える給付金｜高等職業訓練促進給付金のデジタル分野を解説【2026年】",
  description:
    "シングルマザー・シングルファザーがIT資格取得で使える給付制度を、こども家庭庁の公式情報をもとに解説。高等職業訓練促進給付金（訓練期間中 月額10万円・シスコ/LPI等のデジタル分野の民間資格も対象例に明記）、自立支援教育訓練給付金（受講費の60%）の支給内容・対象者・申請窓口（都道府県・市区町村）、一般の教育訓練給付や求職者支援制度との違いまでまとめました。",
  alternates: { canonical: "/articles/hitorioya-it-training/" },
  openGraph: {
    title: "ひとり親のIT資格取得に使える給付金｜高等職業訓練促進給付金のデジタル分野を解説【2026年】",
    description:
      "ひとり親がIT資格取得で使える給付制度をこども家庭庁の公式情報をもとに解説。高等職業訓練促進給付金（月額10万円・シスコ/LPI等デジタル分野も対象例）、自立支援教育訓練給付金、申請窓口、他制度との違いまで。",
    url: "https://women-engineer.com/articles/hitorioya-it-training/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ひとり親のIT資格取得に使える給付金｜高等職業訓練促進給付金のデジタル分野を解説【2026年】",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
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
    "シングルマザー・シングルファザーがIT資格取得で使える給付制度を、こども家庭庁の公式情報をもとに解説。高等職業訓練促進給付金（訓練期間中 月額10万円・デジタル分野の民間資格も対象例に明記）、自立支援教育訓練給付金の支給内容・対象者・申請窓口まで。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/hitorioya-it-training/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "高等職業訓練促進給付金はIT系の資格でも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "使える可能性があります。こども家庭庁の公式案内では、対象資格の例として看護師・保育士などの国家資格に加えて「シスコシステムズ認定資格、LPI認定資格等のデジタル分野等の民間資格」が明記されています。ただし対象は「就職の際に有利となる資格で、養成機関において6月以上修業するもの」という条件があり、個別の講座・資格が対象になるかは自治体の判断によります。受講を検討する段階で、必ずお住まいの都道府県・市区町村の窓口に事前相談してください（出典: こども家庭庁「高等職業訓練促進給付金のご案内」、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "高等職業訓練促進給付金の月額10万円は誰でももらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "誰でもではありません。こども家庭庁の公式案内によると、対象は「児童扶養手当の支給を受けているか、同等の所得水準にある方（例: お子さんが1人の場合、1年間の収入が385万円未満）」「養成機関において6月以上のカリキュラムを修業し、対象資格の取得等が見込まれる方」「仕事または育児と修業の両立が困難であると認められる方」の要件を満たすひとり親の方です。支給額は訓練期間中 月額10万円（住民税課税世帯は月額70,500円）で、訓練の最後の1年間は4万円増額、修了後に5万円（課税世帯は25,000円）が支給されます。要件の判定・支給の可否はお住まいの自治体の窓口で確認してください（出典: 同上、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "働きながら（在職中）でも高等職業訓練促進給付金の対象になりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式の対象者要件には「仕事または育児と修業の両立が困難であると認められる方」という条件があります。つまり就業の有無そのものではなく「両立が困難と認められるか」がポイントで、この判定は申請先の自治体が行います。パートで働きながら資格取得を目指したい場合なども、自己判断で諦めたり見切り発車したりせず、まずお住まいの都道府県・市区町村の窓口に相談してください。",
      },
    },
    {
      "@type": "Question",
      name: "シングルファザー（父子家庭）も対象になりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "対象です。高等職業訓練促進給付金・自立支援教育訓練給付金はいずれも「ひとり親」向けの制度で、こども家庭庁の事業名も「母子家庭自立支援給付金及び父子家庭自立支援給付金事業」となっており、母子家庭の母と父子家庭の父の両方が対象と明記されています。当サイトは女性のITキャリアを主に扱っていますが、制度自体は父子家庭でも同様に利用を検討できます（出典: こども家庭庁「母子家庭自立支援給付金及び父子家庭自立支援給付金事業について」、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "自立支援教育訓練給付金と雇用保険の教育訓練給付は両方もらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "二重に満額もらえる仕組みではありません。こども家庭庁の公式案内には「雇用保険法に基づく教育訓練給付金の支給を受けることができる者は、その支給額との差額（下限は1万2千1円）を支給」と記載されています。つまり雇用保険の教育訓練給付を受けられる方は、自立支援教育訓練給付金からはその差額分が支給される調整の仕組みです。自分の場合にいくらになるかは、受講前に必ずお住まいの自治体の窓口で確認してください（出典: 同上、2026年7月参照）。",
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
              { label: "ひとり親のIT資格取得に使える給付金" },
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
              ひとり親のIT資格取得に使える給付金
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                高等職業訓練促進給付金のデジタル分野を解説【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月5日</p>
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
                <span><strong>いくら支援される？</strong> ひとり親限定の「高等職業訓練促進給付金」は、資格取得を目指して養成機関で修業する期間の生活費として<strong>月額10万円</strong>（住民税課税世帯は月額70,500円）を支給。最後の1年間は4万円増額、修了後にはさらに5万円（課税世帯は25,000円）が支給されます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>ITでも使える？</strong> 対象資格の例として、看護師・保育士などの国家資格に加えて<strong>「シスコシステムズ認定資格、LPI認定資格等のデジタル分野等の民間資格」</strong>がこども家庭庁の公式案内に明記されています（養成機関で6月以上修業するものが対象）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>どこに申し込む？</strong> 申込み・問い合わせの窓口は<strong>お住まいの都道府県・市区町村</strong>です。対象になる講座・資格や具体的な運用は自治体により異なるため、受講を決める前の事前相談が必須です。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://www.cfa.go.jp/policies/hitori-oya/syokugyou-kunren/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>こども家庭庁「高等職業訓練促進給付金のご案内」</a>（2026年7月参照）。支給要件・金額・対象講座の運用は自治体・年度で異なる場合があるため、必ずお住まいの市区町村（町村在住の方は都道府県）の窓口で最新情報を確認してください。
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 高等職業訓練促進給付金とは（月額・対象者・デジタル分野）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 対象になるIT系資格の例（公式に列挙されているもの）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 自立支援教育訓練給付金（受講費の60%）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 一般の教育訓練給付・求職者支援制度との違い（比較表）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 申請の流れ（窓口は市区町村・事前相談が必須）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 高等職業訓練促進給付金とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">高等職業訓練促進給付金とは（月額・対象者・デジタル分野）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              高等職業訓練促進給付金は、<strong>ひとり親の方が就職の際に有利となる資格の取得を目指して養成機関で修業する期間の「生活費」を支援する制度</strong>です（出典: こども家庭庁「高等職業訓練促進給付金のご案内」、2026年7月参照）。
            </p>
            <p>
              <a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付</a>のような「受講費用の一部が戻る」制度ではなく、<strong>学んでいる期間の毎月の生活費そのものを支える給付</strong>である点が最大の特徴です。「学費は用意できても、勉強に充てる期間の収入が途絶えるのが怖い」というひとり親の事情に正面から応える設計になっています。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>内容（公式情報）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>訓練期間中の支給額</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>月額10万円（住民税課税世帯は月額70,500円）。訓練を受けている期間の最後の1年間は支給額を4万円増額</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>修了後の支給</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>訓練修了後、5万円を支給（住民税課税世帯は25,000円）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>対象者</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>訓練開始日以降、次の要件を満たすひとり親の方。①児童扶養手当の支給を受けているか、同等の所得水準にある（例: お子さんが1人の場合、1年間の収入が385万円未満。所得水準を超過した場合も1年に限り引き続き対象） ②養成機関において6月以上のカリキュラムを修業し、対象資格の取得等が見込まれる ③仕事または育児と修業の両立が困難であると認められる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>対象資格</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>就職の際に有利となる資格で、養成機関において6月以上修業するもの。（例）看護師、准看護師、保育士、介護福祉士、理学療法士、作業療法士、調理師、製菓衛生師等の国家資格や、シスコシステムズ認定資格、LPI認定資格等のデジタル分野等の民間資格</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>申込み・問い合わせ</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>お住まいの都道府県、市区町村まで</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://www.cfa.go.jp/policies/hitori-oya/syokugyou-kunren/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>こども家庭庁「高等職業訓練促進給付金のご案内」</a>（2026年7月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              注目したいのは対象資格の書きぶりです。看護師・保育士など従来イメージの強い国家資格と並んで、<strong>「シスコシステムズ認定資格、LPI認定資格等のデジタル分野等の民間資格」が、期間限定の特例としてではなく制度本体の対象資格の例として明記</strong>されています（2026年7月時点の公式案内）。ITエンジニアを目指すひとり親の方にとって、この制度は「看護・介護系の人向け」ではなく、自分ごととして検討できる選択肢になっています。
            </p>
            <p>
              あわせて、給付金の受給中に子が20歳に到達した場合も引き続き同等の給付を受けられる<strong>「高等職業訓練促進継続給付金」</strong>や、入学準備金・就職準備金を貸し付け、取得した資格を生かして5年間就労を継続すると償還免除になる<strong>「償還免除付のひとり親家庭高等職業訓練促進資金貸付」</strong>も同じ公式ページで案内されています。生活費・初期費用の両面で支援を組み合わせられる可能性があるため、窓口相談の際にまとめて確認するのがおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 対象IT系資格の例 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">対象になるIT系資格の例（公式に列挙されているもの）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              こども家庭庁の公式案内が対象資格の例として名指しで挙げているIT系（デジタル分野）の資格は、次の2つです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>シスコシステムズ認定資格</h3>
              <p className="text-sm text-text-light leading-relaxed">ネットワーク機器大手シスコシステムズによる認定資格群。ネットワークの構築・運用スキルを証明する資格として知られ、<a href="/articles/infrastructure/" className="underline" style={{ color: "#7c3a55" }}>インフラエンジニア</a>系の職種で評価されやすい領域です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>LPI認定資格</h3>
              <p className="text-sm text-text-light leading-relaxed">Linux Professional Institute（LPI）によるLinux技術者の認定資格。サーバー運用の基盤であるLinuxのスキルを証明でき、こちらもインフラ・サーバー系のキャリアの入口になり得ます。</p>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6 bg-white" style={{ border: "2px solid #c15f47" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>誤解しやすいポイント</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>公式に列挙されているのは「例」です。</strong>上記2つ以外のIT資格・講座が対象になるか、逆に上記の資格でもどの講座なら認められるかは、「養成機関において6月以上修業するもの」という条件と自治体の判断によります。公式案内にも「教育訓練給付の対象講座を受講して取得する資格（一部を除く）など」という注記があります。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>短期講座は対象外の可能性があります。</strong>対象は6月（6か月）以上のカリキュラムを修業するものに限られるため、数週間〜数か月の短期講座は要件を満たさない場合があります。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>受講を決める前に必ず窓口へ。</strong>「この講座は対象になりますか」という確認は、申込み前にお住まいの都道府県・市区町村の窓口で行ってください。自治体により運用が異なります。</span></li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            なお、資格そのものの選び方は<a href="/articles/certification/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアの資格マップ</a>で、IT学習の最初の一歩として人気の国家試験は<a href="/articles/cert-itpassport/" className="underline" style={{ color: "#7c3a55" }}>ITパスポート試験ガイド</a>で解説しています。
          </p>
        </div>
      </section>

      {/* sec3 自立支援教育訓練給付金 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">自立支援教育訓練給付金（受講費の60%）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              高等職業訓練促進給付金が「生活費の支援」なら、同じくひとり親向けの<strong>自立支援教育訓練給付金は「受講費用の支援」</strong>です。こども家庭庁の「母子家庭自立支援給付金及び父子家庭自立支援給付金事業」として、各都道府県・市・福祉事務所設置町村が実施しています（出典: こども家庭庁「母子家庭自立支援給付金及び父子家庭自立支援給付金事業について」、2026年7月参照）。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>内容（公式情報）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>支給額</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>対象教育訓練を受講・修了した場合、経費の60%（下限12,001円）。上限は、雇用保険の一般教育訓練給付・特定一般教育訓練給付の対象講座で最大20万円、専門実践教育訓練給付の対象講座で修学年数×40万円・最大160万円</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>専門実践の上乗せ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>専門実践教育訓練給付の対象講座を受講し、修了後1年以内に資格取得・就職等した場合は経費の85%（上限は修業年数×60万円、最大240万円）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>雇用保険の給付との調整</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>雇用保険法に基づく教育訓練給付金の支給を受けることができる方は、その支給額との差額（下限12,001円）を支給</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>対象者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>母子家庭の母または父子家庭の父で、現に児童（20歳に満たない者）を扶養し、①自立に向けた計画（母子・父子自立支援プログラム）の策定等を受けている ②就業経験・技能・資格の取得状況や労働市場の状況などから、当該教育訓練が適職に就くために必要と認められる、の要件をすべて満たす方</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>対象講座</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>雇用保険制度の教育訓練給付の指定教育訓練講座と、その他都道府県等の長が地域の実情に応じて対象とする講座</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>手続きの注意</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受講前に都道府県等から講座の指定を受ける必要があるため、必ず事前にお住まいの市（町村在住の方は都道府県）に相談</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://www.cfa.go.jp/policies/hitori-oya/jiritsu-shien-kyuufukin/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>こども家庭庁「母子家庭自立支援給付金及び父子家庭自立支援給付金事業について」</a>（2026年7月参照）。制度を設けていない都道府県等に居住されている場合は支給の対象とならない旨が公式に明記されています。実施状況・詳細は必ずお住まいの自治体の窓口で確認してください。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              対象講座に「雇用保険制度の教育訓練給付の指定教育訓練講座」が含まれるため、<a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付制度の解説記事</a>で紹介している教育訓練講座検索システムで探せるIT系の指定講座が、この給付金の対象候補にもなります。一般の教育訓練給付（一般教育訓練は受講費用の20%・上限10万円）と比べて<strong>給付率60%・上限20万円〜</strong>と手厚く、雇用保険の給付を受けられる方でも差額支給の仕組みがあるのが、ひとり親限定制度ならではの強みです。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 他制度との違い比較表 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">一般の教育訓練給付・求職者支援制度との違い（比較表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「ITを学ぶ費用・期間を公的制度で支える」選択肢は、ひとり親限定の2制度のほかに、誰でも要件を満たせば使える<a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付制度</a>と<a href="/articles/hello-training-it/" className="underline" style={{ color: "#7c3a55" }}>求職者支援制度（ハロートレーニング）</a>があります。それぞれ支援の性質と窓口が異なるため、まず全体像を整理します。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>制度</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>誰向け？</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>何を支援？</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>窓口</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>高等職業訓練促進給付金<span className="block text-xs font-normal mt-1">（本記事）</span></td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>ひとり親限定（児童扶養手当受給または同等の所得水準等の要件あり）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>養成機関で6月以上修業する期間の生活費（月額10万円、課税世帯70,500円。最後の1年は4万円増額）＋修了後5万円</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>お住まいの都道府県・市区町村</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>自立支援教育訓練給付金<span className="block text-xs font-normal mt-1">（本記事）</span></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ひとり親限定（自立支援プログラムの策定等の要件あり）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受講費用の60%（上限20万円〜、専門実践対象講座は最大160万円。資格取得・就職等で85%・最大240万円）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>お住まいの都道府県・市区町村（受講前に講座の指定が必要）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}><a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付制度</a></td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>雇用保険の被保険者（在職中OK）または離職後1年以内で、加入期間要件を満たす方。ひとり親に限らない</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>受講費用の20%〜最大80%（一般20%・特定一般40〜50%・専門実践50〜80%）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>ハローワーク</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}><a href="/articles/hello-training-it/" className="underline" style={{ color: "#7c3a55" }}>求職者支援制度（ハロートレーニング）</a></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>主に雇用保険を受給できない求職者。ひとり親に限らない</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受講料無料の職業訓練（テキスト代等は自己負担）＋収入等の要件を満たせば月10万円の職業訓練受講給付金</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ハローワーク</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: こども家庭庁「高等職業訓練促進給付金のご案内」「母子家庭自立支援給付金及び父子家庭自立支援給付金事業について」、厚生労働省「教育訓練給付制度」「求職者支援制度のご案内」（いずれも2026年7月参照）
          </p>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>使い分けの考え方</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>学習期間中の生活費が最大の不安</strong>なら、まず高等職業訓練促進給付金（月額10万円等）を軸に窓口相談。生活費支援はハローワーク系の制度では求職者支援制度の給付金（収入・資産要件あり）に限られます。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>受講費用を抑えたい</strong>なら、自立支援教育訓練給付金（60%）と雇用保険の教育訓練給付を窓口で突き合わせて確認。雇用保険の給付を受けられる方は差額支給の調整があるため、「どちらか一方だけ調べて申し込む」のは損になり得ます。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>制度間の併用可否・支給額の計算は個々の状況次第</strong>です。ひとり親向け2制度は市区町村、教育訓練給付・求職者支援制度はハローワークと窓口が分かれているため、両方に相談して自分のケースの組み合わせを確認するのが確実です。</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 申請の流れ */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">申請の流れ（窓口は市区町村・事前相談が必須）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              高等職業訓練促進給付金・自立支援教育訓練給付金の申込み・問い合わせ窓口は、いずれも<strong>お住まいの都道府県・市区町村</strong>です（出典: こども家庭庁、2026年7月参照）。特に自立支援教育訓練給付金は「受講前に都道府県等から講座の指定を受ける必要がある」と公式に明記されており、<strong>講座に申し込んでからでは手遅れになる可能性</strong>があります。順番を間違えないことが何より重要です。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "お住まいの市区町村窓口に事前相談", "市区町村（町村在住の方は都道府県）のひとり親家庭支援・児童福祉の担当窓口へ。児童扶養手当の受給状況・所得水準など自分が対象者要件を満たしそうか、検討中のIT講座・資格が対象になり得るかを確認します。"],
              ["STEP2", "講座・資格を具体化して対象可否を確認", "「養成機関で6月以上修業」「就職の際に有利となる資格」という条件に照らして、受講したい講座が対象と認められるかを窓口で確認します。自立支援教育訓練給付金は受講前の講座指定が必須です。"],
              ["STEP3", "必要な手続き・書類を確認して申請", "必要書類・申請時期・支給方法は自治体により異なります。自立支援教育訓練給付金では自立に向けた計画（母子・父子自立支援プログラム）の策定等が対象者要件になっているため、その手続きも窓口の案内に従って進めます。"],
              ["STEP4", "受講・修業", "高等職業訓練促進給付金は訓練期間中の生活費として月額で支給される制度です。修業と仕事・育児の両立設計を窓口相談の段階から詰めておきましょう。"],
              ["STEP5", "修了・資格取得と就職活動", "高等職業訓練促進給付金では修了後に5万円（課税世帯25,000円）の支給があります。資格を取ったら、それを評価してくれる求人への転職活動につなげます。"],
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
          <div className="rounded-xl p-5 mt-6" style={{ backgroundColor: "#fffaf4", border: "2px solid #c15f47" }}>
            <p className="text-sm leading-relaxed text-text-light">
              <strong style={{ color: "#c15f47" }}>重要:</strong> 本記事の金額・要件はこども家庭庁の公式案内（2026年7月参照）に基づく国の制度概要です。<strong>支給要件・金額・対象講座の運用は自治体・年度によって異なる場合があるため、受講を決める前に必ずお住まいの市区町村（町村在住の方は都道府県）の窓口で最新の情報を確認してください。</strong>自立支援教育訓練給付金については、制度を設けていない都道府県等に居住されている場合は支給の対象とならない旨も公式に明記されています。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl border overflow-hidden bg-white" style={{ borderColor: "#d9c7b8" }}>
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
            <a href="/articles/training-benefit-it/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>教育訓練給付制度でITスキルを学ぶ</h3><p className="text-sm text-text-light">一般・特定一般・専門実践の違いと最大80%の条件</p></a>
            <a href="/articles/hello-training-it/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>求職者支援訓練（ハロートレーニング）でITを学ぶ</h3><p className="text-sm text-text-light">受講料無料＋月10万円給付金の要件と探し方</p></a>
            <a href="/articles/women-it-support-map/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性向けIT学習支援マップ</h3><p className="text-sm text-text-light">全国の公的支援・無料講座を一望できるハブ</p></a>
            <a href="/articles/tokyo-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都 女性ITエンジニア育成事業</h3><p className="text-sm text-text-light">受講料・PC無料＋託児つきの都の育成事業（募集状況つき）</p></a>
            <a href="/articles/cert-itpassport/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ITパスポート試験ガイド</h3><p className="text-sm text-text-light">IT学習の最初の一歩になる国家試験の中身</p></a>
            <a href="/articles/mama-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ママエンジニアの働き方</h3><p className="text-sm text-text-light">子育てとITキャリアの両立のリアル</p></a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からITエンジニアになる方法</h3><p className="text-sm text-text-light">学習〜転職までの完全ロードマップ</p></a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: こども家庭庁「高等職業訓練促進給付金のご案内」 <a href="https://www.cfa.go.jp/policies/hitori-oya/syokugyou-kunren/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.cfa.go.jp/policies/hitori-oya/syokugyou-kunren/</a>（2026年7月参照）</li>
            <li>出典: こども家庭庁「母子家庭自立支援給付金及び父子家庭自立支援給付金事業について」 <a href="https://www.cfa.go.jp/policies/hitori-oya/jiritsu-shien-kyuufukin/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.cfa.go.jp/policies/hitori-oya/jiritsu-shien-kyuufukin/</a>（2026年7月参照）</li>
            <li>参考: 厚生労働省「教育訓練給付制度」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/kyouiku.html</a>（2026年7月参照）</li>
            <li>参考: 厚生労働省「求職者支援制度のご案内」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html</a>（2026年7月参照）</li>
          </ul>
          <p className="text-xs text-text-light mt-4">※本記事の金額・要件は2026年7月時点でこども家庭庁の公式ページで確認した制度概要に基づきます。支給要件・金額・対象講座の運用は自治体・年度で異なる場合があるため、必ずお住まいの市区町村（町村在住の方は都道府県）の窓口で最新情報を確認してください。</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">資格を取ったら、活かせる職場を見つけましょう</h2>
            <p className="text-white/90 mb-6">給付制度で負担を抑えて学んだ後は、子育てとの両立に理解のある企業への転職活動へ。まずはエージェントに無料相談して、あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
