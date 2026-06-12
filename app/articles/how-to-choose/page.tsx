import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "転職エージェントの選び方｜公的データで見極める7つのチェックポイント【2026年】",
  description:
    "転職エージェントの選び方を公的に検証できる情報で解説。厚労省「人材サービス総合サイト」での許可確認と就職実績・離職者数データの読み方、職業紹介優良事業者認定制度、面談で担当者を見極める質問リストまで、女性エンジニア向けに7つのチェックポイントで整理します。",
  alternates: { canonical: "/articles/how-to-choose/" },
  openGraph: {
    title: "転職エージェントの選び方｜公的データで見極める7つのチェックポイント【2026年】",
    description:
      "厚労省「人材サービス総合サイト」での許可確認・実績データの読み方、職業紹介優良事業者認定制度、面談での見極め質問リストまで。転職エージェントの選び方を検証可能な情報で解説します。",
    url: "https://women-engineer.com/articles/how-to-choose/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "転職エージェントの選び方｜公的データで見極める7つのチェックポイント【2026年】",
  datePublished: "2026-04-27",
  dateModified: "2026-06-12",
  author: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer.com",
  },
  publisher: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer.com",
  },
  description:
    "厚労省「人材サービス総合サイト」での許可確認・実績データの読み方、職業紹介優良事業者認定制度、面談での見極め質問リストまで、転職エージェントの選び方を検証可能な情報で解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/how-to-choose/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "転職エージェントが厚生労働省の許可を受けているか確認する方法はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "あります。日本で有料の職業紹介を行うには厚生労働大臣の許可が必要で（職業安定法第30条）、許可を受けた事業者は厚生労働省の「人材サービス総合サイト」で誰でも無料で検索できます。事業者名・許可番号（有料職業紹介は「13-ユ-XXXXXX」のような形式）・所在地から検索でき、行政処分を受けた事業者の情報も同サイトで公表されています。登録前に運営会社名で検索し、許可の有無を確認するのが選び方の第一歩です。",
      },
    },
    {
      "@type": "Question",
      name: "職業紹介優良事業者認定制度とは何ですか？認定がないエージェントは避けるべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "職業紹介優良事業者認定制度は、厚生労働省の委託事業として公益社団法人全国民営職業紹介事業協会が運営する認定制度で、法令遵守やマッチング・定着支援などの基準を満たした職業紹介事業者を外部審査で認定するものです。認定事業者数は第1回（平成26年度）27社、第4回（令和5年度）40社、令和7年度審査では2026年2月24日に12事業者の新規認定が発表されるなど、3万を超える有料職業紹介事業所の中ではごく少数です。認定があれば加点材料になりますが、審査申請には負担がかかるため未認定でも優良なエージェントは多数あります。認定がない＝避けるべき、ではなく、許可の有無・公開実績・面談の質と組み合わせて判断しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "エージェントの就職実績や離職者数のデータはどこで見られますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省「人材サービス総合サイト」で確認できます。職業紹介事業者には、年度ごとの就職者数、そのうち無期雇用で就職した人数、無期雇用就職者のうち6か月以内に離職した人数（解雇を除く）、手数料に関する事項、返戻金制度の有無などの情報提供が義務づけられています。特に「6か月以内離職者数」は、そのエージェントの紹介が早期離職につながっていないか、つまりマッチングの質を示す数少ない客観指標です。就職者数に対して離職者数の割合が高くないか、データを公開しているかどうか自体も含めてチェックしましょう。",
      },
    },
    {
      "@type": "Question",
      name: "担当のキャリアアドバイザーが合わないときはどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "担当者の変更を申し出るのが一般的な対応です。多くのエージェントが問い合わせフォームやお客様窓口など変更の受付窓口を用意しています。2022年10月施行の改正職業安定法に基づく指針では、職業紹介事業者に苦情への適切・迅速な対応と相談窓口の明示が求められており、苦情窓口が分かりやすく示されているかは登録前のチェックポイントにもなります。変更を申し出ても改善しない場合は、そのエージェントの利用をやめて別のサービスに比重を移して構いません。複数併用していれば、こうした切り替えもスムーズです。",
      },
    },
    {
      "@type": "Question",
      name: "女性エンジニアがエージェント選びで特に確認すべきことは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「働き方・制度面の情報をどこまで具体的に答えられるか」を面談で確認することです。産休育休の取得・復帰実績、時短勤務の運用、リモートワークの実施率、女性管理職の有無などは求人票だけでは分かりにくく、エージェントの情報力の差が出やすい領域です。2026年4月施行の改正女性活躍推進法で、男女間賃金差異と女性管理職比率の公表義務が常時雇用101人以上の企業に拡大されたため、「厚労省の女性の活躍推進企業データベースの公表値と社内の実態は一致していますか」といった質問への回答ぶりは、担当者の実力を測る試金石になります。企業側データの読み方は「女性が働きやすいIT企業の見極め方」の記事で詳しく解説しています。",
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
        style={{
          background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "転職エージェントの選び方" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#0891b2" }}
            >
              選び方ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              失敗しない転職エージェントの選び方
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                公的データで見極める7つのチェックポイント【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="pt-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}
          >
            <h2 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
              この記事の結論
            </h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li>
                ① エージェント選びは「知名度」や「口コミの印象」ではなく、<strong>公的に検証できる情報</strong>から始めるのが確実。日本の有料職業紹介事業所は30,561か所（令和6年度・厚労省集計）あり、玉石混交が前提です
              </li>
              <li>
                ② 最初のふるいは厚生労働省<strong>「人材サービス総合サイト」</strong>。厚生労働大臣の許可の有無、年度ごとの<strong>就職者数・6か月以内離職者数</strong>などの法定公開データを登録前に無料で確認できます
              </li>
              <li>
                ③ プラスの判断材料として、外部審査を経た<strong>職業紹介優良事業者認定</strong>（認定は1回あたり全国数十社規模と希少）の有無も確認できる
              </li>
              <li>
                ④ データで絞ったら、最後は<strong>面談で担当者を見極める</strong>。女性エンジニアなら「産休育休の取得実績やリモートの運用実態をどこまで具体的に答えられるか」が試金石
              </li>
              <li>
                ⑤ 1社に絞らず<strong>2〜3社で比較</strong>し、合わなければ担当変更・乗り換えをためらわない。これが構造的に最も失敗しにくい選び方です
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}
          >
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. 「なんとなく」で選んではいけない理由</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. チェック1：厚労省の許可を受けた事業者か（確認手順）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. チェック2：法定の公開実績データを読む（就職者数・離職者数）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. チェック3：職業紹介優良事業者認定の有無</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. チェック4・5：守備範囲と表示・窓口の誠実さ</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. チェック6・7：面談での見極めと併用・乗り換え</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 7つのチェックポイント早見表</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. よくある質問</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. 出典・参考資料</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 なんとなくで選ばない */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">「なんとなく」で選んではいけない理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              厚生労働省の集計によると、令和6年度に事業報告を提出した有料職業紹介事業所は<strong>30,561事業所</strong>。同年度の有料職業紹介経由の常用就職は888,993件にのぼります（出典: 厚生労働省「令和6年度職業紹介事業報告書の集計結果（速報）」2026年6月参照）。つまり「転職エージェント」と一口に言っても3万以上の選択肢があり、規模・専門性・サポートの質は大きくばらついているのが実態です。
            </p>
            <p>
              一方で、エージェントは<strong>転職者の入社が決まると企業から成功報酬（厚労省集計で常用就職1件あたり約103万円・全業種平均）を受け取る</strong>ビジネスです。求職者は無料で使えますが、担当者には「早く・確実に決めてもらいたい」という力学が構造的に働きます。仕組みの詳細は<a href="/articles/specialized-vs-general/" className="underline" style={{ color: "#0891b2" }}>IT特化型と総合型エージェントの違い</a>で解説したとおりです。
            </p>
            <p>
              だからこそ、エージェント選びを「広告で見たことがあるから」「口コミの星が多いから」という印象で済ませるのは危険です。幸い日本には、職業紹介事業者を<strong>許可制で管理し、実績データの公開を義務づけ、優良事業者を外部審査で認定する</strong>という公的な仕組みが揃っています。この記事では、その検証可能な情報を使った7つのチェックポイントを、確認手順つきで解説します。
            </p>
            <div
              className="rounded-xl border p-6 mt-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>
                この記事で使う「検証可能な情報源」
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>人材サービス総合サイト</strong>（厚生労働省）: 許可の有無・許可番号・就職実績・離職者数・手数料・行政処分情報を検索できる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>職業紹介優良事業者認定制度</strong>（厚労省委託事業）: 法令遵守・マッチング・定着支援の基準を外部審査で認定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>改正職業安定法のルール</strong>（2022年10月施行）: 実績情報の的確表示義務・苦情窓口の明示など、誠実さを測る物差しになる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>面談での確認</strong>: データで絞ったうえで、最後は担当者個人の質を自分の質問で見極める</span>
                </li>
              </ul>
            </div>
            <p className="text-sm">
              なお、エージェントを使うか転職サイトで自分で応募するか迷っている段階なら、先に<a href="/articles/agent-vs-site/" className="underline" style={{ color: "#0891b2" }}>転職エージェントと転職サイトの違い</a>を読むと全体像がつかめます。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 チェック1 許可確認 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">チェック1：厚労省の許可を受けた事業者か（確認手順）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              日本で有料の職業紹介を行うには、<strong>厚生労働大臣の許可</strong>が必要です（職業安定法第30条）。無許可の「転職支援」をうたうサービスに個人情報を渡すのは論外なので、登録前に必ず許可の有無を確認しましょう。確認は厚生労働省が運営する<strong>「人材サービス総合サイト」</strong>で、登録不要・無料でできます。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "運営会社名を調べる", "サービス名（例: ○○キャリア）と運営会社名（例: 株式会社○○）は異なることが多いので、まず公式サイトのフッターや会社概要で運営会社名と「有料職業紹介事業 許可番号」の記載を確認します。許可番号は「13-ユ-XXXXXX」（13は都道府県コード、ユは有料職業紹介の意）という形式です。"],
              ["STEP2", "人材サービス総合サイトで検索する", "人材サービス総合サイトの「職業紹介事業」検索で、会社名または許可番号を入力。許可を受けた事業者であれば事業所情報が表示されます。サイトに記載された許可番号と検索結果が一致するかまで確認できれば確実です。"],
              ["STEP3", "行政処分情報も見ておく", "同サイトでは、職業安定法等に違反して行政処分（事業停止命令・改善命令など）を受けた事業者の情報も公表されています。検討中のエージェントが過去に処分を受けていないかを併せて確認しましょう。"],
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
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            出典: 厚生労働省「人材サービス総合サイト」、e-Gov法令検索「職業安定法」第30条（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec3 チェック2 公開実績データ */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">チェック2：法定の公開実績データを読む（就職者数・離職者数）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              人材サービス総合サイトは「許可の確認」だけのサイトではありません。職業紹介事業者には、<strong>職業紹介の実績に関する情報を同サイトで提供することが法令で義務づけられて</strong>おり、エージェントの実力を測る一次データがここに集まっています（出典: 厚生労働省「人材サービス総合サイト」・職業安定法に基づく情報提供義務、2026年6月参照）。
            </p>
            <p>
              広告の「満足度No.1」のような表現と違い、これは<strong>全事業者に共通のフォーマットで公開される検証可能な数値</strong>です。少なくとも次の項目を見比べましょう。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>公開項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>何がわかるか</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>読み方のポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>年度ごとの就職者数</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>そのエージェント経由で実際に就職が決まった人数＝支援の規模感</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>広告の「求人数」ではなく「決定実績」。極端に少ない場合は支援体制が薄い可能性</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>うち無期雇用就職者数</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>期間の定めのない（正社員等の）雇用での決定がどれだけあるか</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>正社員転職を目指すなら、就職者数に占める無期雇用の割合を確認</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>6か月以内離職者数（解雇除く）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>紹介された人が半年以内に自己都合等で辞めていないか＝<strong>マッチングの質</strong></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>「とにかく入社させる」型のエージェントはここに表れやすい。無期雇用就職者数に対する割合で見る</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>手数料に関する事項</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>企業から受け取る手数料の体系（求職者は原則無料）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>求職者から手数料を取る職業紹介は原則禁止（職業安定法第32条の3第2項）。請求されたら利用しない</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>返戻金制度の有無</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>早期離職時に手数料の一部を企業へ返金する制度の有無・内容</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>返戻金制度がある事業者は、早期離職を防ぐ動機づけが制度面でも働いている</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
              「6か月以内離職者数」が最重要な理由
            </h3>
            <p className="text-sm text-text-light leading-relaxed">
              年収アップ率や満足度は各社が自社基準で集計した広告数値ですが、6か月以内離職者数は<strong>国の共通ルールで公開される数少ない「マッチングの質」の指標</strong>です。就職者数が多くても早期離職の割合が高ければ、強引な決定が多い可能性を疑えます。逆にこのデータをきちんと公開・更新していること自体が、法令遵守の姿勢を示すシグナルにもなります。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 チェック3 優良事業者認定 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">チェック3：職業紹介優良事業者認定の有無</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              許可・公開データに加えて、プラスアルファの判断材料になるのが<strong>「職業紹介優良事業者認定制度」</strong>です。厚生労働省の委託事業として公益社団法人全国民営職業紹介事業協会が運営しており、法令遵守、適正な業務運営、マッチング・定着支援などの基準を満たした職業紹介事業者を<strong>外部審査で認定</strong>します（出典: 厚生労働省委託事業「職業紹介優良事業者認定制度」公式サイト、2026年6月参照）。
            </p>
            <p>
              認定数は、第1回（平成26年度）27社、第2回（平成30年度）43社、第3回（令和2年度）39社、第4回（令和5年度）40社と、回あたり全国数十社規模。令和7年度の審査では<strong>2026年2月24日に12事業者の新規認定</strong>が発表されました。有料職業紹介事業所が3万を超える中での数十社ですから、取得難度の高い希少な認定といえます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                認定マークの使い方
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                認定事業者は公式サイトの「優良認定事業者をさがす」ページで一覧確認できます。検討中のエージェントが認定を受けていれば、第三者審査を通過した法令遵守・定着支援の裏づけとして加点材料にできます。各社が自社サイトに掲げる認定マークは、許可番号と同様に公式の一覧と突き合わせて確認すると確実です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                未認定＝悪いエージェント、ではない
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                審査の申請には書類準備などの負担がかかるため、優良な運営をしていても申請していない事業者は多数あります。えるぼし・くるみんなど企業向け認定と同じく、「認定はスクリーニングの入口・加点材料」と位置づけ、未認定のエージェントは公開実績データ（チェック2）と面談（チェック6）で個別に判断しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 チェック4・5 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">チェック4・5：守備範囲と表示・窓口の誠実さ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              公的な確認が済んだら、次は「自分に合うか」と「会社として誠実か」の2点です。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                チェック4：自分のフェーズに合う守備範囲か
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                エージェントには、IT・Web業界に絞った<strong>IT特化型</strong>、全業界を扱う<strong>総合型</strong>、女性のキャリア継続支援に焦点を当てた<strong>女性特化型</strong>というカテゴリの違いがあります。実務経験者はIT特化型を軸に、未経験・キャリアチェンジは総合型や未経験向け支援を軸に、というのが基本の考え方です。カテゴリごとの違いと使い分けは<a href="/articles/specialized-vs-general/" className="underline" style={{ color: "#0891b2" }}>IT特化型と総合型エージェントの違い</a>で詳しく解説しています。未経験からの学習ロードマップは<a href="/articles/beginner/" className="underline" style={{ color: "#0891b2" }}>未経験からエンジニアになる完全ガイド</a>を参照してください。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                チェック5：表示の的確さと苦情窓口の明示
              </h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                2022年10月施行の改正職業安定法により、職業紹介事業者には<strong>求人情報や自社の実績情報について虚偽・誤解を生じさせる表示の禁止（的確表示義務）</strong>と、<strong>苦情への適切・迅速な対応と相談窓口の明示</strong>が義務づけられました（出典: 厚生労働省「職業安定法に基づく省令及び指針の一部改正（雇用仲介事業者への新たなルール）」2026年6月参照）。登録前に公式サイトで次を確認しましょう。
              </p>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span>
                  <span>「内定率○%」「年収アップ○%」などの実績表示に集計条件・出典の注記があるか（根拠のない誇大表示は的確表示義務に反する）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span>
                  <span>苦情・相談の窓口（電話・メール・フォーム）が分かりやすく明示されているか</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span>
                  <span>個人情報の利用目的（紹介業務の範囲）が具体的に示されているか</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec6 チェック6・7 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">チェック6・7：面談での見極めと併用・乗り換え</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              データでどれだけ絞り込んでも、最終的な体験を左右するのは<strong>担当者個人の質</strong>です。同じエージェントでも担当者によって提案の質は大きく変わるため、初回面談を「自分が選考する場」として使いましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>チェック6：初回面談で担当者に聞く質問6選</h3>
              <ul className="space-y-3 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>「私と同じ技術スタック・経験年数の方の直近の決定事例を教えてください」（具体例で答えられるか）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>「この求人の開発体制・技術選定の背景を教えてください」（求人票の転記でなく中身を理解しているか）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>「紹介企業の産休育休の取得・復帰実績は確認できますか」（女性のキャリア情報の収集力）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>「リモートワークは制度だけでなく実施率も分かりますか」（運用実態まで踏み込めるか）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>「希望に合わない求人は紹介しないでほしいのですが可能ですか」（意向を尊重する姿勢）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>「選考や回答の期限はこちらの都合に合わせられますか」（急かさないか）</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3aed" }}>チェック7：併用と乗り換えをためらわない</h3>
              <ul className="space-y-3 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>公開調査では転職サイト・エージェントの登録数は<strong>平均2.3社</strong>、7割以上が複数登録（リクナビNEXT掲載・ジャストシステム調査2019、2026年6月参照）。複数併用は制度上もマナー上も問題ない</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>2〜3社に登録して提案を見比べると、紹介の偏りに気づけて市場価値の相場感もつかめる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>担当者が合わなければ<strong>担当変更を申し出る</strong>。改善しなければ利用をやめて他社に比重を移す</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>同じ求人への重複応募だけは厳禁。応募先は自分のスプレッドシート等で一元管理する</span></li>
              </ul>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            なお、エージェント選びと並行して「転職先企業そのもの」を見極めるデータの読み方（女性管理職比率・男女間賃金差異・育休復帰率など）は、<a href="/articles/women-friendly-companies/" className="underline" style={{ color: "#0891b2" }}>女性が働きやすいIT企業の見極め方</a>で解説しています。エージェントの情報と公的データを突き合わせるのが、最も確実な企業研究です。
          </p>
        </div>
      </section>

      {/* sec7 早見表 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">7つのチェックポイント早見表</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              ここまでの内容を、登録前〜面談後の流れで使えるチェックリストにまとめます。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>タイミング</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>チェックポイント</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>確認方法</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" rowSpan={3} style={{ borderColor: "#d1dce5" }}>登録前</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>① 厚労省の許可（許可番号）があるか・行政処分歴がないか</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>人材サービス総合サイトで検索</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>② 就職者数・6か月以内離職者数・返戻金制度などの実績公開</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>人材サービス総合サイトの事業所情報</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>③ 職業紹介優良事業者認定の有無（加点材料）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>認定制度公式サイトの認定事業者一覧</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" rowSpan={2} style={{ borderColor: "#d1dce5" }}>登録時</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>④ 自分のフェーズ（経験者／未経験／復職）に合う守備範囲か</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>カテゴリの整理は特化型vs総合型の記事を参照</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>⑤ 実績表示に根拠の注記があるか・苦情窓口が明示されているか</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>公式サイトの表記・会社概要・プライバシーポリシー</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" rowSpan={2} style={{ borderColor: "#d1dce5" }}>面談以降</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>⑥ 担当者が具体例・運用実態（産休育休・リモート実施率）まで答えられるか</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>初回面談での質問6選</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>⑦ 2〜3社併用で比較し、合わなければ担当変更・乗り換え</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>応募管理は自分で一元化（重複応募は厳禁）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* おすすめ転職エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績が光ります。スピーディーなマッチングで、最短2週間での内定実績も。年収交渉力にも定評があります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>
                  女性特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介してくれるため、長期的なキャリア形成に最適。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT業界の転職支援に強み。未経験からベテランまで幅広い層の求人を保有しています。レスポンスの速さと手厚いサポートに定評があり、特に若手エンジニアの転職支援実績が豊富です。
              </p>
            </div>
          </div>
          <div
            className="mt-8 rounded-xl p-6 text-center"
            style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}
          >
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">
              複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#f97066" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map(
              (
                faq: { name: string; acceptedAnswer: { text: string } },
                i: number
              ) => (
                <details
                  key={i}
                  className="group rounded-xl border overflow-hidden"
                  style={{ borderColor: "#d1dce5" }}
                >
                  <summary
                    className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50"
                    style={{ color: "#0891b2" }}
                  >
                    <span className="pr-4">{faq.name}</span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9662;
                    </span>
                  </summary>
                  <div
                    className="px-6 pb-4 text-sm text-text-light leading-relaxed"
                    style={{ borderTop: "1px solid #d1dce5" }}
                  >
                    <p className="pt-4">{faq.acceptedAnswer.text}</p>
                  </div>
                </details>
              )
            )}
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-3 text-sm text-text-light leading-relaxed">
            <li>
              ・出典: 厚生労働省「人材サービス総合サイト」（2026年6月参照）— 許可・届出事業者の検索、職業紹介事業者の実績情報（就職者数・無期雇用就職者数・6か月以内離職者数・手数料・返戻金制度）の提供、行政処分情報の公表
            </li>
            <li>
              ・出典: 厚生労働省「令和6年度職業紹介事業報告書の集計結果（速報）」令和8年3月31日公表（2026年6月参照）— 有料職業紹介事業所数30,561、常用就職件数888,993件、常用就職1件あたり手数料約103万円（全業種平均）
            </li>
            <li>
              ・出典: 厚生労働省委託事業「職業紹介優良事業者認定制度」公式サイト（公益社団法人全国民営職業紹介事業協会運営）（2026年6月参照）— 制度概要、認定事業者一覧、令和7年度審査による12事業者の新規認定（2026年2月24日発表）
            </li>
            <li>
              ・出典: 厚生労働省「職業紹介優良事業者認定制度」資料（2026年6月参照）— 認定数の推移（第1回27社・第2回43社・第3回39社・第4回40社）
            </li>
            <li>
              ・出典: 厚生労働省「職業安定法に基づく省令及び指針の一部改正（雇用仲介事業者への新たなルール）」（2026年6月参照）— 求人等に関する情報の的確表示義務、苦情処理体制・相談窓口の明示、個人情報の取扱い（2022年10月施行）
            </li>
            <li>
              ・出典: e-Gov法令検索「職業安定法」（昭和22年法律第141号）（2026年6月参照）— 有料職業紹介事業の許可制（第30条）、求職者からの手数料徴収の原則禁止（第32条の3第2項）
            </li>
            <li>
              ・出典: リクナビNEXT「転職サイト・エージェントはいくつ使った？」ジャストシステム調査・2019年・転職経験者199名（2026年6月参照）— 平均登録数2.3社、7割以上が複数登録
            </li>
          </ul>
          <p className="mt-4 text-xs text-text-light">
            ※ 本文中の統計は全業種を対象とした公的集計・公開調査であり、特定のエージェントの数値ではありません。各エージェントの最新のサービス内容・実績データは、人材サービス総合サイトおよび各社公式サイトでご確認ください。
          </p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/specialized-vs-general/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                IT特化型と総合型エージェントの違い
              </h3>
              <p className="text-sm text-text-light">カテゴリ別の比較とフェーズ別の使い分け</p>
            </a>
            <a
              href="/articles/agent-vs-site/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                転職エージェントと転職サイトの違い
              </h3>
              <p className="text-sm text-text-light">そもそもどちらを使うべきかを整理</p>
            </a>
            <a
              href="/articles/women-friendly-companies/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                女性が働きやすいIT企業の見極め方
              </h3>
              <p className="text-sm text-text-light">認定制度と公開データで転職先を見極める</p>
            </a>
            <a
              href="/articles/beginner/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                未経験からエンジニアになる完全ガイド
              </h3>
              <p className="text-sm text-text-light">学習ロードマップと転職の進め方</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              理想の転職を実現しましょう
            </h2>
            <p className="text-white/90 mb-6">
              まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#f97066", color: "#ffffff" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
