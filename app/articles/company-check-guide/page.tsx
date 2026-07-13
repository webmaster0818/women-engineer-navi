import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性が働きやすいIT企業の見極め方・実務編｜公式データベースの使い方・面接での聞き方文例【2026年】",
  description:
    "求人票の「女性活躍中」を鵜呑みにせず、入社前に実態を確かめる具体手順を解説。厚生労働省「女性の活躍推進企業データベース」で管理職比率・勤続年数の男女差・残業時間・育休取得率を確認する方法、えるぼし・くるみん認定の読み方、有価証券報告書（EDINET）の探し方、面接で産休育休について角を立てずに聞く文例まで。",
  alternates: { canonical: "/articles/company-check-guide/" },
  openGraph: {
    title: "女性が働きやすいIT企業の見極め方・実務編｜公式データベースの使い方・面接での聞き方文例【2026年】",
    description:
      "「女性活躍中」の求人票を印象で信じない。厚労省の公式データベース・えるぼし/くるみん認定・有価証券報告書という公表データの見方と、面接での聞き方文例で、入社前に女性の働きやすさを確かめる実務手順を解説します。",
    url: "https://women-engineer.com/articles/company-check-guide/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性が働きやすいIT企業の見極め方・実務編｜公式データベースの使い方・面接での聞き方文例【2026年】",
  datePublished: "2026-07-13",
  dateModified: "2026-07-13",
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
    "厚生労働省「女性の活躍推進企業データベース」・えるぼし/くるみん認定・有価証券報告書（EDINET)という公表データの確認手順と、面接での聞き方文例で、入社前に女性の働きやすさを見極める実務ガイド。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/company-check-guide/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "求人票の「女性活躍中」という表記は信用してよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「女性活躍中」は法律で定義された表示ではなく、各社が自由に書ける印象表現です。信用する・しないの前に、数値で確かめるのが確実です。厚生労働省「女性の活躍推進企業データベース」で管理職に占める女性割合・男女の平均継続勤務年数の差異・平均残業時間・育児休業取得率などの公表実績を確認し、上場企業なら有価証券報告書（EDINET）の女性管理職比率・男女間賃金差異もあわせて見ると、印象と実態のギャップを入社前に把握できます（出典: 厚生労働省 女性の活躍推進企業データベース、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "女性の活躍推進企業データベースに載っていない企業は避けるべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "載っていない＝悪い会社、とは言えません。女性活躍推進法で行動計画の策定・情報公表が義務なのは常時雇用101人以上の企業で、100人以下は努力義務です。また、情報公表の方法はこのデータベースへの掲載が推奨されているものの、自社ホームページなどでの公表も認められています。小規模なスタートアップや、自社サイトで公表している企業はデータベースに出てこないことがあります。その場合は採用ページ・カジュアル面談・面接での質問など、他の手段で確かめましょう（出典: 厚生労働省 女性活躍推進法特集ページ、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "面接で産休・育休について質問すると不利になりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「必ず不利になる」とも「まったく不利にならない」とも断定できないのが実情で、受け止め方は企業や面接官によって異なります。ただし、聞き方とタイミングで印象が変わるのは確かです。制度の有無を単刀直入に聞くより「女性エンジニアの方の育休後の復帰事例があれば伺いたいです」のように実績・事例を尋ねる形にする、選考の場では仕事への関心とセットで聞く、条件の詳細は内定後のオファー面談で確認する、といった工夫でリスクを抑えつつ必要な情報を得られます。制度自体は公表データで事前に確認できるので、面接では「実際に使われているか」を確かめるのが効率的です。",
      },
    },
    {
      "@type": "Question",
      name: "えるぼし・くるみん認定がない会社は、女性が働きにくい会社ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "そうとは限りません。えるぼし・くるみんはいずれも企業が自ら申請して初めて審査・認定される制度で、実態が良くても申請していない企業は認定を持ちません。特に中小企業やスタートアップでは、申請の手間から取得していないケースが考えられます。認定は「あればプラスの根拠になる」ものとして扱い、認定がない場合はデータベースの公表実績や面接での質問で個別に確かめるのが現実的です（出典: 厚生労働省 女性活躍推進法特集ページ／くるみんマークについて、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "非上場のスタートアップは、どうやって実態を調べればよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "非上場企業は有価証券報告書の開示義務がないため、①女性の活躍推進企業データベース（常時雇用101人以上なら情報公表義務があります）、②自社の採用ページ・技術ブログでの制度や社員紹介の記載、③カジュアル面談での質問、の組み合わせで確かめます。人数が少ない会社は「制度の整備状況」より「経営陣が両立にどういう考えを持っているか」「前例がない場合どう対応するつもりか」を面談で直接聞くほうが実態に近い情報を得られます。",
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
              { label: "女性が働きやすいIT企業の見極め方・実務編" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              企業の見極めガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性が働きやすいIT企業の見極め方・実務編
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                公式データベースの使い方・認定の読み方・面接での聞き方文例【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月13日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>先に結論：印象ではなく「公表データ＋面接での確認」で見極められる</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>求人票の「女性活躍中」は印象表現。</strong>法律で定義された表示ではなく、各社が自由に書けます。信じる・疑うの前に、数値で確かめる手段が公式に用意されています。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>公表データは3つ。</strong>①厚生労働省「女性の活躍推進企業データベース」（管理職女性比率・勤続年数の男女差・残業時間・育休取得率など）②えるぼし・くるみん認定 ③上場企業なら有価証券報告書（EDINET）。いずれも無料で誰でも見られます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>データで分からない「実際に使われているか」は面接・面談で。</strong>制度の有無ではなく復帰事例・チームの働き方を聞く形にすれば、角を立てずに実態を確認できます（文例は本文で紹介）。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://positive-ryouritsu.mhlw.go.jp/positivedb/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省「女性の活躍推進企業データベース」</a>／<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000091025.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>女性活躍推進法特集ページ</a>（いずれも2026年7月参照）
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 「女性活躍中」の求人票だけでは分からない理由と、見極めの全体像</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 厚労省「女性の活躍推進企業データベース」の使い方</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. えるぼし認定・くるみん認定の読み方</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 上場企業なら有価証券報告書（EDINET）も見る</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 面接・面談での聞き方（文例とタイミングの使い分け）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 全体像 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">「女性活躍中」の求人票だけでは分からない理由と、見極めの全体像</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「女性活躍中」「産休・育休取得実績あり」——求人票でよく見かける言葉ですが、これらは法律で基準が定められた表示ではありません。実績が1件でも「実績あり」と書けますし、「活躍中」に至っては定義そのものがありません。<a href="/articles/women-friendly-companies/" className="underline" style={{ color: "#7c3a55" }}>女性が働きやすいIT企業の特徴</a>を頭に入れたうえで、個別の企業がそれに当てはまるかは、<strong>印象ではなくデータと質問で確かめる</strong>必要があります。
            </p>
            <p>
              幸い、いまは確かめる手段が公式に整っています。女性活躍推進法により、常時雇用する労働者101人以上の企業は、自社の女性の活躍に関する状況把握・行動計画の策定・情報公表（年1回のデータ更新）が義務付けられており（100人以下は努力義務）、その公表の受け皿として厚生労働省が「女性の活躍推進企業データベース」を運営しています。さらに上場企業なら、有価証券報告書でも女性管理職比率などの開示が求められています（出典: 厚生労働省 女性活躍推進法特集ページ、2026年7月参照）。
            </p>
            <p>チェック手順の全体像は次の4ステップです。上から順に、机上で調べられるものから面接で確かめるものへ進みます。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "公式データベースで実績数値を見る", "厚労省「女性の活躍推進企業データベース」で企業名を検索し、管理職に占める女性割合・男女の平均継続勤務年数の差異・平均残業時間・有休取得率・育休取得率などの公表実績を確認します。"],
              ["STEP2", "えるぼし・くるみん認定の有無を見る", "厚生労働大臣の認定制度。あれば第三者基準を満たした根拠になります。ただし申請ベースの制度なので「認定なし＝悪い会社」ではありません。"],
              ["STEP3", "上場企業なら有価証券報告書も見る", "EDINET（金融庁の開示システム）で、女性管理職比率・男性育児休業取得率・男女間賃金差異を確認します。法定開示書類なので信頼性が高い情報源です。"],
              ["STEP4", "面接・面談で「実際に使われているか」を確かめる", "データは制度と実績の存在までしか教えてくれません。復帰事例・チームの働き方・カバー体制など、数値の裏側はカジュアル面談・逆質問・オファー面談で確認します。"],
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
            ※本記事で扱う制度・公表項目は2026年7月時点で公式サイトを確認した内容です。制度や公表項目は改正で変わることがあるため、応募時には必ず各公式ページで最新情報を確認してください。
          </p>
        </div>
      </section>

      {/* sec2 データベースの使い方 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">厚労省「女性の活躍推進企業データベース」の使い方</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              <a href="https://positive-ryouritsu.mhlw.go.jp/positivedb/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>女性の活躍推進企業データベース</a>は、女性活躍推進法に基づいて各企業が行動計画と女性活躍に関する実績データを公表する、厚生労働省の公式データベースです。2026年7月時点のトップページでは、データ公表企業43,003社・行動計画公表企業58,625社が登録されていると表示されています。登録・閲覧とも無料で、会員登録なしに企業名で検索できます（出典: 同データベース、2026年7月参照）。
            </p>
            <p>
              使い方はシンプルで、トップページの「企業情報の検索」から<strong>企業名・業種・所在地などで検索</strong>するだけです。「女性管理職比率」「男女の平均継続勤務年数」などのランキング機能や、公表データの一括ダウンロード機能もあります。
            </p>
          </div>
          <h3 className="text-lg font-bold mb-3">公表される項目（主なもの）</h3>
          <p className="text-sm text-text-light leading-relaxed mb-4">
            企業が公表する項目は同データベースの「各項目の定義」ページで定められています。求職者目線で特に見たい項目を整理すると次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>公表項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>何が分かるか・見方のポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>採用した労働者に占める女性割合／採用の競争倍率の男女比</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>入口で女性を採っているか。「女性活躍中」と言いながら採用実績が乏しい場合はここに表れます。</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>男女の平均継続勤務年数の差異／採用10年前後の男女別継続雇用割合</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>女性だけ早く辞めていないか。絶対年数よりも<strong>男女差の小ささ</strong>が「続けられる職場か」のシグナルになります。</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>男女別の育児休業取得率</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>女性の取得率は分母が「出産した労働者数」のため高く出やすい項目です。<strong>男性の取得率</strong>もあわせて見ると、両立を職場全体で支える文化かどうかの手がかりになります。</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>一月当たりの平均残業時間（雇用管理区分ごとの数値がある場合も）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>法定時間外・法定休日労働の平均。育児との両立可能性に直結します。えるぼし認定の労働時間基準が「各月すべて45時間未満」であることも、水準感の参考になります。</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>年次有給休暇の取得率</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>休みを取れる職場かどうかの基礎データです。</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>係長級・管理職・役員に占める女性割合</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>昇進の道が実際に開いているか＝ロールモデルの存在。管理職は「課長級以上」で定義されています。係長級も見ると「次の世代が育っているか」まで分かります。</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>男女の賃金の差異</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>女性の平均年間賃金÷男性の平均年間賃金（%）。301人以上の企業は2022年7月から公表義務。2026年4月施行の改正で101〜300人の企業も必須項目になりました。</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>男女別の職種・雇用形態の転換実績／再雇用・中途採用実績</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>非正規から正社員への転換や、30歳以上の女性の正社員採用など、キャリアの入り直しに寛容かが分かります。転職者には見逃せない項目です。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://positive-ryouritsu.mhlw.go.jp/positivedb/common/definition.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>女性の活躍推進企業データベース「各項目の定義」</a>（2026年7月参照）。企業がどの項目を公表するかは選択制の部分があり、全企業が全項目を公表しているわけではありません。公表項目は制度改正で変わることがあります。
          </p>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>ITエンジニア職で読むときのコツ</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>全社数値は職種の混合値です。</strong>営業・事務・エンジニアを合算した数値のため、たとえば「女性比率が高い」会社でも技術部門は別、ということがあり得ます。「雇用管理区分ごと」の数値（総合職・技術職など区分別）が公表されていれば、そちらを優先して見ましょう。区分別がない場合、エンジニア職の実態は面接で確認する項目に回します。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>勤続年数は「絶対値」より「男女差」。</strong>転職によるキャリアアップが一般的な業界では平均勤続年数そのものは短めに出ることがあります。男女で差が大きい場合に「女性だけ辞めている理由」を面接で確かめる、という使い方が実践的です。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>残業時間は繁忙の偏りに注意。</strong>公表値は年間平均のため、リリース前や障害対応など時期による偏りは見えません。平均値を入口に、繁忙期の実態を面接で聞くのがセットです。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">&#8226;</span><span><strong>データが古くないかを確認。</strong>公表データには対象期間が示されます。法律上は年1回の更新が求められているので、極端に古いまま放置されている場合、公表への熱意そのものが一つの判断材料になります。</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec3 えるぼし・くるみん */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">えるぼし認定・くるみん認定の読み方</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              データベースの数値とあわせて見たいのが、厚生労働大臣による2つの認定マークです。どちらも<strong>国の基準を満たしたことの第三者証明</strong>で、求人票の自称表現とは信頼性が異なります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>えるぼし認定（女性活躍推進法）</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                行動計画を策定・届出した企業のうち、女性の活躍推進の取組状況が優良な企業を認定する制度。<strong>「採用」「継続就業」「労働時間等の働き方」「管理職比率」「多様なキャリアコース」の5つの基準</strong>のうち、満たした数に応じて段階が決まります。
              </p>
              <ul className="space-y-2 text-sm text-text-light mb-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>1段階目:</strong> 5基準のうち1〜2つを満たす（満たさない基準も改善状況の公表等が必要）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>2段階目:</strong> 3〜4つを満たす</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>3段階目:</strong> 5つすべてを満たし、実績をデータベースで毎年公表</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>プラチナえるぼし:</strong> えるぼし認定企業のうち、行動計画の目標達成など取組が特に優良な企業。管理職比率などの基準がさらに厳しくなります</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">
                労働時間の基準は「残業＋休日労働の平均が各月すべて45時間未満」、継続就業は「女性÷男性の平均継続勤務年数が7割以上」など、具体的な数値基準です。マークの段階（星の数）を見れば、どこまで満たした企業かが読み取れます。なお2026年4月からは、女性の健康支援の基準も満たす企業への「えるぼしプラス」認定が加わりました。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>くるみん認定（次世代育成支援対策推進法）</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                「子育てサポート企業」として厚生労働大臣が認定するマークです。企業が行動計画を策定し、計画に定めた目標を達成するなど一定の基準を満たした場合に、申請により認定されます。
              </p>
              <ul className="space-y-2 text-sm text-text-light mb-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>くるみん:</strong> 基本の認定</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>プラチナくるみん:</strong> より高い水準の取組を行う企業の特例認定</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>トライくるみん:</strong> 2022年4月に新設された認定類型</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>プラス認定:</strong> 不妊治療と仕事の両立支援に取り組む企業への追加認定</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">
                えるぼしが「女性の活躍」全般の認定であるのに対し、くるみんは「子育てとの両立支援」に焦点があります。産休・育休後も働き続けたい人は、両方の認定状況を見ると立体的に判断できます。認定基準は2025年4月施行の改正で見直されているため、詳細は公式ページで確認してください。
              </p>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>正直な注意点：「認定なし＝悪い会社」ではない</h3>
            <p className="text-sm text-text-light leading-relaxed">
              どちらの認定も<strong>企業が自ら申請して初めて審査される</strong>制度です。実態が良くても、申請の手間やコストから取得していない企業（特に中小・スタートアップ）は珍しくありません。したがって「認定あり」は加点材料として確度が高い一方、「認定なし」から悪い評価を導くのは早計です。認定がない企業は、データベースの公表実績と面接での質問で個別に確かめましょう。逆に、認定マークだけを見て公表実績を確認しないのも避けたいところです。
            </p>
            <p className="text-xs text-text-light mt-3">
              出典: <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000091025.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>厚生労働省「女性活躍推進法特集ページ」</a>／<a href="https://www.mhlw.go.jp/content/11900000/001677221.pdf" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>えるぼし認定、プラチナえるぼし認定の概要（PDF）</a>／<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kodomo/shokuba_kosodate/kurumin/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>くるみんマーク・プラチナくるみんマーク・トライくるみんマークについて</a>（いずれも2026年7月参照）
            </p>
          </div>
        </div>
      </section>

      {/* sec4 有価証券報告書 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">上場企業なら有価証券報告書（EDINET）も見る</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              応募先が上場企業（または有価証券報告書の提出会社）なら、もう一つ強力な情報源があります。2023年1月に「企業内容等の開示に関する内閣府令」が改正され、<strong>2023年3月期決算から、有価証券報告書の「従業員の状況」欄で女性管理職比率・男性の育児休業取得率・男女間賃金差異といった多様性の指標の開示</strong>が求められるようになりました（出典: 金融庁「サステナビリティ情報の開示に関する情報」、2026年7月参照）。
            </p>
            <p>
              有価証券報告書は金融商品取引法に基づく法定開示書類であり、虚偽記載には罰則があるため、情報の信頼性が高いのが特徴です。閲覧は金融庁の電子開示システム<a href="https://disclosure2.edinet-fsa.go.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>EDINET</a>で、誰でも無料でできます。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>EDINETでの探し方</h3>
            <ol className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">1.</span><span>EDINET（disclosure2.edinet-fsa.go.jp）の書類検索で、企業名を入力し「有価証券報告書」で絞り込む</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">2.</span><span>最新の有価証券報告書を開き、「従業員の状況」の項目へ（多様性指標はここに記載されます）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">3.</span><span>女性管理職比率・男性育休取得率・男女間賃金差異を確認。過年度の報告書と比べれば<strong>改善傾向かどうか</strong>も分かります</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">4.</span><span>「サステナビリティに関する考え方及び取組」欄に人材育成・社内環境整備の方針が書かれていることも多く、あわせて読むと会社の姿勢がつかめます</span></li>
            </ol>
            <p className="text-xs text-text-light mt-3">
              ※開示の対象範囲（提出会社単体か、連結子会社を含むか等）には細かなルールがあり、企業により記載のされ方が異なります。また非上場企業の多くは有価証券報告書の提出義務がないため、その場合はデータベースと面接での確認が中心になります。
            </p>
          </div>
          <p className="text-sm text-text-light leading-relaxed mt-6">
            データベース・認定・有価証券報告書の3点で「数値と制度」は確認できます。ただし、これらが教えてくれるのは<strong>過去の実績と制度の存在まで</strong>。配属先チームで実際にどう運用されているかは、次のステップ＝面接・面談で確かめます。産休・育休の取得実績データの全国的な水準は<a href="/articles/maternity-leave-rate/" className="underline" style={{ color: "#7c3a55" }}>産休・育休取得率の実態</a>で解説しているので、比較の物差しに使ってください。
          </p>
        </div>
      </section>

      {/* sec5 面接での聞き方 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">面接・面談での聞き方（文例とタイミングの使い分け）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <h3 className="text-lg font-bold text-text">「産休・育休について聞くと不利になる？」への現実的な整理</h3>
            <p>
              まず前提を整理します。<strong>「聞いたら必ず不利になる」とも「絶対に不利にならない」とも断定できない</strong>のが実情です。両立支援に力を入れている企業なら質問を歓迎することも多い一方、受け止め方が面接官個人に左右される場面も現実にはあり得ます。企業や面接官によって異なる、という前提で戦略を立てるのが現実的です。
            </p>
            <p>そのうえで、リスクを抑えつつ必要な情報を得るコツは3つあります。</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>制度の有無はデータで先に調べ、面接では「運用実態」を聞く。</strong>制度の有無自体はここまで見てきた公表データで分かります。面接で聞くべきは、データでは分からない「実際に使われているか」「復帰後どう働いているか」です。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>自分の予定ではなく、事例・実績を尋ねる形にする。</strong>「私は取れますか」ではなく「取得・復帰された方の事例」を聞けば、職場全体の実態を知る質問になり、答える側も話しやすくなります。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>聞くタイミングを設計する。</strong>選考の場では仕事・チームへの関心を軸にした聞き方にとどめ、条件の詳細確認は内定後（オファー面談）に回すのが定石です。</span></li>
            </ul>
          </div>

          <h3 className="text-lg font-bold mb-3">聞き方の文例：そのまま聞くより、こう変える</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>&#215; そのままだと角が立ちやすい聞き方</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>&#9675; 改善例</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>「産休・育休は取れますか？」</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>「女性エンジニアの方で、産休・育休から復帰して活躍されている事例があれば伺いたいです」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「残業は多いですか？」</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「開発チームの繁忙期はどの時期ですか。リリース前後の働き方がどう変わるかも教えていただけますか」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>「時短勤務はできますか？」</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>「時短勤務やフレックスで働かれているエンジニアの方は、チーム内でどのように業務分担をされていますか」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「女性社員は何人いますか？」</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「配属予定のチーム構成を伺えますか。女性エンジニアの方がどのようなキャリアを歩まれているかにも関心があります」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>「子どもが熱を出したら休めますか？」</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>「急な休みが必要になった際、チームではどのようにカバーし合う体制になっていますか」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「リモートワークは何日できますか？」</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「開発チームでは出社とリモートをどのように使い分けていますか。実際の運用ルールを伺いたいです」</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            ※文例は一般的な面接マナーの範囲での言い換え例であり、特定の聞き方の有利・不利を保証するものではありません。<a href="/articles/reverse-questions/" className="underline" style={{ color: "#7c3a55" }}>逆質問の組み立て方</a>もあわせて参考にしてください。
          </p>

          <h3 className="text-lg font-bold mb-3 mt-8">聞くタイミングの使い分け</h3>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h4 className="font-bold mb-2" style={{ color: "#7c3a55" }}>カジュアル面談：働き方・実態を最も聞きやすい場</h4>
              <p className="text-sm text-text-light leading-relaxed">選考ではないと位置づけられている面談なら、働き方や職場の雰囲気に関する質問の中心をここに置くのが効率的です。現場エンジニアが相手なら「チームに時短の方はいますか」「復帰された方はどんな働き方をされていますか」と実態ベースで聞けます。ただし企業によっては面談の印象が後の選考に影響しないとは言い切れないため、聞き方の丁寧さは面接と同じ水準を保ちましょう。詳しくは<a href="/articles/casual-interview/" className="underline" style={{ color: "#7c3a55" }}>カジュアル面談の活用法</a>で解説しています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h4 className="font-bold mb-2" style={{ color: "#7c3a55" }}>一次〜最終面接：仕事への関心とセットで、逆質問の一部として</h4>
              <p className="text-sm text-text-light leading-relaxed">選考中は、技術・事業・チームに関する質問を主軸に置き、働き方の質問は上の文例のように「チームの実態を知りたい」という文脈で1〜2問に絞るのがバランスの良い配分です。制度の細部をこの場で詰める必要はありません。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h4 className="font-bold mb-2" style={{ color: "#7c3a55" }}>内定後（オファー面談）：条件・制度の詳細を確認する正式な場</h4>
              <p className="text-sm text-text-light leading-relaxed">内定後の条件面談は、給与・勤務条件とあわせて<strong>制度の詳細を確認するために用意された場</strong>です。産休・育休の取得要件、時短勤務の対象期間、復帰後の評価の考え方など、具体的な質問はここで遠慮なく確認しましょう。入社を決める前の最終チェックリストは<a href="/articles/offer-meeting/" className="underline" style={{ color: "#7c3a55" }}>オファー面談で確認すべきこと</a>にまとめています。</p>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              なお、こうした確認を自分で聞きにくい場合、転職エージェント経由なら企業に代わりに確認してもらう方法もあります。どのエージェントが自分に合うかは<a href="/diagnosis/" className="underline font-bold" style={{ color: "#7c3a55" }}>8つの質問でわかる無料エージェント診断</a>で確かめられます。また、転職とライフイベントの時期の重なりが気になる方は<a href="/articles/career-lifeevent-timing/" className="underline" style={{ color: "#7c3a55" }}>転職とライフイベントのタイミング設計</a>、産休・育休中の収入面は<a href="/articles/maternity-money-guide/" className="underline" style={{ color: "#7c3a55" }}>産休・育休のお金ガイド</a>もあわせてどうぞ。
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
              <details key={i} className="group rounded-xl border bg-white overflow-hidden" style={{ borderColor: "#d9c7b8" }}>
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
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすいIT企業の特徴</h3><p className="text-sm text-text-light">そもそもどんな企業を探すべきかの基準編</p></a>
            <a href="/articles/career-lifeevent-timing/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>転職とライフイベントのタイミング設計</h3><p className="text-sm text-text-light">転職×妊娠・出産の制度要件を整理</p></a>
            <a href="/articles/maternity-money-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>産休・育休のお金ガイド</h3><p className="text-sm text-text-light">出産手当金・育児休業給付金のしくみ</p></a>
            <a href="/articles/maternity-leave-rate/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>産休・育休取得率の実態</h3><p className="text-sm text-text-light">全国水準を知って比較の物差しにする</p></a>
            <a href="/articles/reverse-questions/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>面接での逆質問の組み立て方</h3><p className="text-sm text-text-light">評価を上げつつ実態を確かめる質問術</p></a>
            <a href="/articles/casual-interview/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>カジュアル面談の活用法</h3><p className="text-sm text-text-light">選考前に職場の実態を知る機会に</p></a>
            <a href="/articles/offer-meeting/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>オファー面談で確認すべきこと</h3><p className="text-sm text-text-light">入社を決める前の最終チェック</p></a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 厚生労働省「女性の活躍推進企業データベース」 <a href="https://positive-ryouritsu.mhlw.go.jp/positivedb/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://positive-ryouritsu.mhlw.go.jp/positivedb/</a>（2026年7月参照）</li>
            <li>出典: 女性の活躍推進企業データベース「各項目の定義」 <a href="https://positive-ryouritsu.mhlw.go.jp/positivedb/common/definition.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://positive-ryouritsu.mhlw.go.jp/positivedb/common/definition.html</a>（2026年7月参照）</li>
            <li>出典: 厚生労働省「女性活躍推進法特集ページ（えるぼし認定・プラチナえるぼし認定）」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000091025.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000091025.html</a>（2026年7月参照）</li>
            <li>出典: 厚生労働省「えるぼし認定、プラチナえるぼし認定の概要」 <a href="https://www.mhlw.go.jp/content/11900000/001677221.pdf" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/content/11900000/001677221.pdf</a>（2026年7月参照）</li>
            <li>出典: 厚生労働省「くるみんマーク・プラチナくるみんマーク・トライくるみんマークについて」 <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kodomo/shokuba_kosodate/kurumin/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kodomo/shokuba_kosodate/kurumin/index.html</a>（2026年7月参照）</li>
            <li>出典: 金融庁「サステナビリティ情報の開示に関する情報」 <a href="https://www.fsa.go.jp/policy/kaiji/sustainability-kaiji.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.fsa.go.jp/policy/kaiji/sustainability-kaiji.html</a>（2026年7月参照）</li>
            <li>出典: 金融庁「EDINET」 <a href="https://disclosure2.edinet-fsa.go.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://disclosure2.edinet-fsa.go.jp/</a>（2026年7月参照）</li>
          </ul>
          <p className="text-xs text-text-light mt-4">※本記事の制度・認定基準・公表項目は2026年7月時点で各公式サイトを確認した内容に基づきます。制度や公表項目は法改正等で変わることがあるため、応募・入社判断の際は必ず最新の公式情報を確認してください。面接での質問文例は一般的なマナーの範囲での言い換え例であり、特定の結果を保証するものではありません。</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">データで見極めたら、次は出会い方</h2>
            <p className="text-white/90 mb-6">公表データと面接での確認で「入社してから違った」を減らせます。女性エンジニアの転職に強いエージェントを比較して、聞きにくい確認ごとはプロに任せるのも一つの方法です。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
