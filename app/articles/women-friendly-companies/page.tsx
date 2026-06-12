import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性が働きやすいIT企業の見極め方｜認定制度と公開データの読み方【2026年】",
  description:
    "女性が働きやすいIT企業の見極め方を解説。えるぼし・くるみん・なでしこ銘柄・健康経営優良法人の4つの公的認定の違い、厚労省「女性の活躍推進企業データベース」の使い方、女性管理職比率・育休復帰率など公開データの読み方を2026年最新の制度改正情報とともに紹介します。",
  alternates: { canonical: "/articles/women-friendly-companies/" },
  openGraph: {
    title: "女性が働きやすいIT企業の見極め方｜認定制度と公開データの読み方【2026年】",
    description:
      "えるぼし・くるみんなど4つの公的認定の違いと、厚労省「女性の活躍推進企業データベース」の使い方、女性管理職比率・育休復帰率など公開データの読み方を解説。",
    url: "https://women-engineer.com/articles/women-friendly-companies/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性が働きやすいIT企業の見極め方｜認定制度と公開データの読み方【2026年】",
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
    "えるぼし・くるみん・なでしこ銘柄・健康経営優良法人の4つの公的認定と、厚労省「女性の活躍推進企業データベース」の使い方、女性管理職比率・育休復帰率など公開データの読み方を解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/women-friendly-companies/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "えるぼし認定とくるみん認定の違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "えるぼしは女性活躍推進法に基づく認定で、採用・継続就業・労働時間・女性管理職比率・多様なキャリアコースの5基準で「女性のキャリアが伸びる会社か」を評価します（1〜3段階＋最高位プラチナえるぼし）。くるみんは次世代育成支援対策推進法に基づく認定で、育休取得率など「子育てと仕事を両立できる会社か」を評価します（トライくるみん・くるみん・プラチナくるみん）。評価軸が異なるため、キャリアアップ重視ならえるぼし、育児との両立重視ならくるみんを優先して確認するのがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "認定を取得していないIT企業は働きにくいのでしょうか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "そうとは限りません。認定の申請には書類作成などの手間がかかるため、制度や実態が整っていても申請していない企業（特にスタートアップや中小のWeb系企業）は多くあります。認定がない場合は、厚生労働省「女性の活躍推進企業データベース」の公開値、自社サイトの採用データ（育休復帰率・平均勤続年数など）、面接での質問で個別に確認しましょう。逆に、認定があっても部署によって運用実態が異なることもあるため、認定は「スクリーニングの入口」として使うのが正しい位置づけです。",
      },
    },
    {
      "@type": "Question",
      name: "女性管理職比率はどのくらいあれば高いと言えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省「令和6年度雇用均等基本調査」によると、課長相当職に占める女性の割合は全産業平均で12.3%です。これを基準に、12%を大きく超えていれば平均以上、20%以上なら高水準と判断できます。ただし比率だけでなく「数値目標と期限を公表しているか」も重要です。例えばNTTデータグループは2030年度末までに女性管理職比率20%という目標を行動計画で公表しており、目標・期限・実績をセットで開示している企業は本気度が高いと読み取れます。",
      },
    },
    {
      "@type": "Question",
      name: "企業の男女の賃金差異はどこで確認できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省「女性の活躍推進企業データベース」（positive-ryouritsu.mhlw.go.jp）で無料で確認できます。常時雇用301人以上の企業には男女間賃金差異の公表が義務化されており、2026年4月施行の改正女性活躍推進法で、男女間賃金差異と女性管理職比率の公表義務は101人以上の企業にまで拡大されました。全労働者・正規・非正規の3区分で「男性賃金に対する女性賃金の割合」が公表されるため、応募前に必ずチェックしましょう。",
      },
    },
    {
      "@type": "Question",
      name: "求人票や公開データだけでは分からない実態はどう確認すればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公開データで分からないのは「制度の運用実態」です。時短勤務者の評価のされ方、育休復帰後の配属、リモートワークの実際の頻度などは、(1)カジュアル面談や面接の逆質問で具体的な事例を聞く、(2)女性のキャリアに詳しい転職エージェント経由で企業の内情を確認する、の2つが有効です。エージェントは過去の転職者からのフィードバックを蓄積しているため、求人票に載らない情報を持っていることが多く、複数社を併用して情報を照合するのが確実です。",
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
              { label: "女性が働きやすいIT企業の見極め方" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#0891b2" }}
            >
              企業研究
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性が働きやすいIT企業の見極め方
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                認定制度と公開データの読み方【2026年】
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
                ① 「女性が働きやすいIT企業」は主観的なランキングではなく、<strong>公的認定（えるぼし・くるみん等）と法定の公開データ</strong>で見極めるのが最も確実です。
              </li>
              <li>
                ② 厚生労働省<strong>「女性の活躍推進企業データベース」</strong>を使えば、企業ごとの女性管理職比率・男女の賃金差異・育休取得率などを誰でも無料で確認できます。
              </li>
              <li>
                ③ 2026年4月施行の改正女性活躍推進法で、<strong>男女間賃金差異と女性管理職比率の公表義務が101人以上の企業に拡大</strong>。データで比較できる時代になりました。
              </li>
              <li>
                ④ 判断基準の目安は、課長相当職の女性割合の全産業平均<strong>12.3%</strong>（厚労省 令和6年度雇用均等基本調査）。これを上回るかが一つの分岐点です。
              </li>
              <li>
                ⑤ 公開データで分からない「運用実態」は、面接の逆質問と転職エージェント経由の情報収集で補いましょう。
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. ランキングではなく「認定×公開データ」で見極める理由</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 4つの公的認定制度の比較（えるぼし・くるみん・なでしこ銘柄・健康経営優良法人）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 厚労省「女性の活躍推進企業データベース」の使い方</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 公開データの読み方：5つの指標と判断基準</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. IT大手が実際に公開しているデータの例</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 求人票・面接でのチェックリスト</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 見極めの注意点とよくある落とし穴</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 ランキングではなくデータで見極める理由 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ランキングではなく「認定×公開データ」で見極める理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「女性が働きやすいIT企業ランキング」と題した記事は数多くありますが、その多くは順位の根拠が口コミや主観的評価で、<strong>誰が・何を基準に順位づけしたのか検証できない</strong>のが実情です。働きやすさの感じ方は職種・部署・ライフステージで大きく変わるため、他人のランキングをそのまま信じるのはリスクがあります。
            </p>
            <p>
              一方で日本には、企業の女性活躍状況を<strong>法律に基づいて公表させる仕組み</strong>と、<strong>国が基準を定めて認定する制度</strong>が整っています。女性活躍推進法により、常時雇用する労働者が101人以上の企業には行動計画の策定と情報公表が義務づけられており、さらに2026年4月施行の改正で、<strong>男女間賃金差異と女性管理職比率の公表義務が従来の301人以上から101人以上の企業へ拡大</strong>されました（出典: 厚生労働省「女性活躍推進法特集ページ」、2026年6月参照）。
            </p>
            <p>
              つまり2026年現在は、中堅規模のIT企業まで含めて「女性管理職は何%か」「男女の賃金差はどれくらいか」を<strong>一次データで比較できる時代</strong>です。この記事では、特定企業の主観的な順位づけはせず、(1)公的認定制度の見方、(2)厚労省データベースの使い方、(3)公開データの読み方と判断基準、(4)求人票・面接でのチェックリスト、という「自分で見極める方法」を軸に解説します。
            </p>
            <div
              className="rounded-xl border p-6 mt-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>
                見極めに使える「検証可能な情報源」は3つ
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>公的認定</strong>：えるぼし・くるみん・なでしこ銘柄・健康経営優良法人。国（厚労省・経産省）が基準を定めて認定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>法定の公開データ</strong>：厚労省「女性の活躍推進企業データベース」に各社が公表する女性管理職比率・男女間賃金差異・育休取得率など</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>企業の自主公開データ</strong>：サステナビリティレポート・統合報告書・採用サイトのデータ集（育休復帰率・平均勤続年数・リモート実施率など）</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 認定制度の比較 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">4つの公的認定制度の比較</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              まず押さえたいのが、国が基準を定めている4つの認定・選定制度です。それぞれ<strong>評価している軸が違う</strong>ため、「自分が何を重視するか」に合わせて確認する制度を選ぶのがポイントです。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>認定・選定</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>根拠・主体</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>何を評価するか</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>規模感・確認先</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>えるぼし／プラチナえるぼし</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>女性活躍推進法・厚生労働省</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>採用・継続就業・労働時間・女性管理職比率・多様なキャリアコースの5基準。<strong>女性のキャリアが伸びる会社か</strong></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>えるぼし約3,800社・プラチナ約100社（2025年9月末時点）。厚労省DBで検索可</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>くるみん／プラチナくるみん</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>次世代育成支援対策推進法・厚生労働省</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>育休取得率・労働時間など。<strong>子育てと仕事を両立できる会社か</strong>。不妊治療両立の「プラス」認定もあり</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>くるみん約5,000社・プラチナ約770社（2025年時点）。厚労省サイトに都道府県別一覧</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>なでしこ銘柄</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>経済産業省×東京証券取引所</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>女性活躍を<strong>経営戦略として実践する上場企業</strong>を毎年選定。共働き・共育て支援の「Nextなでしこ」も併設</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>令和6年度は23社＋Nextなでしこ16社（2025年3月発表）。経産省サイトで公表</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>健康経営優良法人</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>経済産業省設計・日本健康会議認定</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>従業員の健康管理を経営課題として実践しているか。<strong>女性の健康支援も評価項目</strong>。大規模部門の上位は「ホワイト500」</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>毎年更新制。経産省・ACTION!健康経営ポータルで認定法人を公表</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            出典: 厚生労働省「女性活躍推進法への取組状況」「くるみんマーク・プラチナくるみんマークについて」、経済産業省「令和6年度なでしこ銘柄」「健康経営優良法人認定制度」（いずれも2026年6月参照）
          </p>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>キャリアアップ重視なら「えるぼし」</h3>
              <p className="text-text-light text-sm leading-relaxed">
                えるぼしは女性管理職比率やキャリアコースまで評価対象に含む唯一の認定です。1〜3段階＋プラチナの4水準があり、<strong>段階が高いほど満たした基準が多い</strong>ことを意味します。最高位プラチナえるぼしは2025年9月末時点で約100社と希少で、2026年からは就活生等へのセクハラ防止策の公表も要件に追加され、基準はさらに厳格化されています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>育児との両立重視なら「くるみん」</h3>
              <p className="text-text-light text-sm leading-relaxed">
                くるみんは育休取得実績や働き方の基準を満たした「子育てサポート企業」の証です。プラチナくるみんは継続的に高水準の取り組みを行う企業のみが取得でき、不妊治療と仕事の両立支援を評価する「くるみんプラス」制度もあります。<strong>くるみんは両立支援の認定であり、キャリアアップ支援の評価ではない</strong>点は押さえておきましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 厚労省DBの使い方 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">厚労省「女性の活躍推進企業データベース」の使い方</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              企業ごとの実データを確認する最強の無料ツールが、厚生労働省の<strong>「女性の活躍推進企業データベース」</strong>（positive-ryouritsu.mhlw.go.jp）です。女性活躍推進法に基づいて各社が公表する行動計画と実績データが集約されており、登録不要・無料で誰でも検索できます。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "気になる企業名で検索する", "トップページの検索窓に企業名を入力。応募を検討している企業が情報を公表しているか、まず確認しましょう。公表ページには女性採用比率・女性管理職比率・男女の平均継続勤務年数・育休取得率・男女間賃金差異などが掲載されます。"],
              ["STEP2", "条件検索で「情報通信業」に絞り込む", "企業名が決まっていない場合は、業種で「情報通信業」を選択し、地域・企業規模で絞り込み。えるぼし・プラチナえるぼし認定企業だけに絞る検索や、男女間賃金差異を公表している企業だけを抽出する検索も可能です。"],
              ["STEP3", "数値を「複数社で横並び」にして比較する", "1社の数値だけでは高いか低いか判断できません。同業・同規模の3〜5社で女性管理職比率・継続勤務年数・育休取得率を並べて比較すると、業界内での立ち位置が見えてきます。"],
              ["STEP4", "行動計画の「目標と期限」を読む", "数値の現状だけでなく、行動計画に書かれた目標（例：女性管理職比率を○年までに○%へ）を確認。目標が具体的で期限つきの企業ほど、改善に本気で取り組んでいると判断できます。"],
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
            出典: 厚生労働省「女性の活躍推進企業データベース」（2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec4 公開データの読み方 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">公開データの読み方：5つの指標と判断基準</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              データベースや各社の公開資料で数値を見つけたら、次は「読み方」です。比較の物差しとして、厚生労働省「令和6年度雇用均等基本調査」では<strong>課長相当職に占める女性の割合は全産業平均12.3%</strong>、課長相当職以上の女性管理職がいる企業の割合は54.9%と報告されています（出典: 厚生労働省「令和6年度雇用均等基本調査」、2026年6月参照）。この平均値を基準線として、5つの指標を読み解きましょう。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>指標</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>判断の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>読み方のポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>① 女性管理職比率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>課長級の全産業平均12.3%が基準線。20%以上は高水準</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>現状値より「目標＋期限を公表しているか」が本気度のサイン。<a href="/articles/women-manager/" className="underline" style={{ color: "#0891b2" }}>女性管理職のキャリア解説</a>も参照</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>② 育休取得率・復帰率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>女性取得率はほぼ100%が標準。差がつくのは「復帰率」と「男性取得率」</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>復帰率90%以上＋男性取得率が高い企業は、両立が「お互いさま」の文化。<a href="/articles/maternity-leave-rate/" className="underline" style={{ color: "#0891b2" }}>産休育休復帰率の詳細</a>へ</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>③ 男女間賃金差異</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>男性賃金に対する女性賃金の割合。全労働者・正規・非正規の3区分で公表</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>差が大きい場合、女性が上位職に少ない・勤続が短い等の構造を示唆。注記の説明まで読む</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>④ 平均継続勤務年数の男女差</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>男女差が小さい（女性が男性並みに長い）ほど、出産後も辞めずに続けられている証拠</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>女性だけ極端に短い企業は、両立の壁がある可能性。離職率と合わせて確認</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>⑤ 働き方の柔軟性</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>リモートワーク実施率・フレックス・残業時間・有給取得率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>「制度あり」ではなく「実施率・取得率」の実績数値を公開している企業を選ぶ。<a href="/articles/fullremote-companies/" className="underline" style={{ color: "#0891b2" }}>フルリモート企業の探し方</a>も参考に</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>データを読むときの3原則</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>単年ではなく推移</strong>で見る（改善トレンドにあるか）</li>
              <li>② <strong>同業・同規模と横並び</strong>で見る（絶対値より相対位置）</li>
              <li>③ <strong>実績＋目標＋期限</strong>の3点セットを公開している企業を高く評価する</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 公開データの実例 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">IT大手が実際に公開しているデータの例</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「どんなデータがどこまで公開されているのか」のイメージをつかむため、公式サイト・IR資料で実際に確認できる公開例を紹介します。<strong>これは優良企業ランキングではなく、「公開のしかた」の実例</strong>です。応募先を検討する際は、同じ粒度のデータをその企業が公開しているかを確認しましょう。
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>SCSK（採用サイト データ集・ニュースリリース）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                2025年3月期実績として<strong>育児休業復帰率95.0%</strong>、育休平均取得日数268日（男性86日・女性425日）、平均勤続年数17.2年、有給休暇取得率89.4%、リモートワーク実施率48.1%を採用サイトで公開。プラチナくるみんに加え、2025年11月には不妊治療との両立支援を評価する<strong>「プラチナくるみんプラス」認定を取得</strong>したことを公式リリースで発表しています。育休の「取得率」だけでなく「復帰率」「取得日数」まで開示している点が、データ公開の粒度として参考になります。
              </p>
              <p className="text-xs text-text-light mt-2">出典: SCSK「採用情報 データ集」・ニュースリリース（2025年11月12日）（2026年6月参照）</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>富士通（統合レポート・サステナビリティデータ）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                女性幹部社員比率を毎年度公開しており、<strong>2024年度実績はグループ16.8%（単体11.5%）</strong>。中期経営計画の非財務指標として女性幹部社員比率の引き上げ目標を掲げ、実績と目標をIR資料で開示しています。「実績＋目標＋期限」をセットで公開する典型例で、年度ごとの推移も追えるため、改善トレンドの確認に向いています。
              </p>
              <p className="text-xs text-text-light mt-2">出典: 富士通 統合レポート・人材戦略説明資料（2026年6月参照）</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>NTTデータグループ（DEIページ・行動計画）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                女性活躍推進法に基づく行動計画（2026年4月〜2031年3月）で、<strong>「2030年度末までに女性管理職比率20%」「男性育休等取得率100%の継続」</strong>という期限つきの数値目標を公表。経団連「2030年30%へのチャレンジ」（役員に占める女性比率30%以上）にも賛同しています。行動計画の目標設定がどれだけ具体的かを読むサンプルとして適しています。
              </p>
              <p className="text-xs text-text-light mt-2">出典: NTTデータグループ「ダイバーシティ、エクイティ＆インクルージョン」（2026年6月参照）</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>NTT（なでしこ銘柄選定）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                NTTは経済産業省・東京証券取引所による<strong>令和6年度「なでしこ銘柄」に選定</strong>されたことを2025年3月24日の公式ニュースリリースで発表。なでしこ銘柄は上場企業のみが対象で毎年23社程度と狭き門のため、大手志向の人は毎年3月の発表を企業研究のチェックポイントにできます。
              </p>
              <p className="text-xs text-text-light mt-2">出典: NTTニュースリリース（2025年3月24日）・経済産業省「令和6年度なでしこ銘柄」（2026年6月参照）</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ここに挙げた企業以外でも、サイバーエージェント・メルカリ・freeeなどWeb系各社も人的資本データの公開を進めています。<strong>応募前に「企業名＋サステナビリティ」「企業名＋データ集」で検索し、公開データの有無と粒度を確認する</strong>のが見極めの第一歩です。
          </p>
        </div>
      </section>

      {/* sec6 チェックリスト */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人票・面接でのチェックリスト</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              公開データで一次スクリーニングをしたら、求人票と面接で「運用実態」を確かめます。育児と両立しながら働く先輩の実情は<a href="/articles/mama-engineer/" className="underline" style={{ color: "#0891b2" }}>ママエンジニアの働き方ガイド</a>も参考にしてください。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>求人票で確認する6項目</h3>
              <ul className="space-y-3 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>えるぼし・くるみん等の認定マークの記載があるか（厚労省DBで裏取り）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>リモート・フレックスが「制度あり」ではなく頻度・条件まで書かれているか</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>育休の「取得実績」「復帰実績」の数値が書かれているか</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>時短勤務の対象期間（法定の3歳までか、小学校卒業までかなど）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>みなし残業の有無と平均残業時間の実績値</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>「女性活躍中」だけで具体データがない求人は要注意（イメージ訴求のみの可能性）</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3aed" }}>面接での逆質問6選</h3>
              <ul className="space-y-3 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>「配属予定チームでの直近の育休取得・復帰の事例を教えてください」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>「時短勤務中の方の評価・昇給はどのように行われていますか」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>「リモートと出社の実際の割合はどのくらいですか」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>「女性のエンジニアリングマネージャーやテックリードはいらっしゃいますか」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>「急な子どもの発熱などの際、チームはどう対応していますか」</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>「行動計画の女性管理職目標に対する進捗はいかがですか」（公開値を踏まえた質問は熱意も伝わる）</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 注意点と落とし穴 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">見極めの注意点とよくある落とし穴</h2>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>落とし穴1：認定がない＝働きにくい、ではない</h3>
              <p className="text-text-light text-sm leading-relaxed">
                認定申請には事務負担がかかるため、実態が整っていても申請しないスタートアップ・中小Web系企業は多数あります。認定の有無は入口のスクリーニングにとどめ、未認定企業は公開データと面接で個別に確認しましょう。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>落とし穴2：くるみん＝キャリアも伸びる、ではない</h3>
              <p className="text-text-light text-sm leading-relaxed">
                くるみんが評価するのは両立支援です。「辞めずに働き続けられる」ことと「昇進・昇給の機会が平等にある」ことは別問題。キャリアアップも狙うなら、えるぼしの認定段階と女性管理職比率を併せて確認しましょう。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>落とし穴3：全社データと配属部署のギャップ</h3>
              <p className="text-text-light text-sm leading-relaxed">
                公開データは全社平均です。エンジニア部門だけ見ると女性比率や残業時間が大きく異なることもあります。面接では「配属予定の部門・チーム」の実態を必ず確認してください。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>落とし穴4：自力の情報収集には限界がある</h3>
              <p className="text-text-light text-sm leading-relaxed">
                制度の運用実態や社内の雰囲気は、外からは検証しきれません。女性のキャリアに詳しい転職エージェントは過去の転職者のフィードバックを蓄積しており、求人票に載らない情報源として有効です。選び方は<a href="/articles/how-to-choose/" className="underline" style={{ color: "#0891b2" }}>エージェントの選び方ガイド</a>で解説しています。
              </p>
            </div>
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

      {/* 成功事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                転職成功者Aさん（30代前半）
              </h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">中小IT企業のエンジニア / 年収400万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p>
                  <p className="text-sm font-bold">大手Web企業のシニアエンジニア / 年収580万円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">
                IT特化型エージェントを活用し、技術力を正当に評価してくれる企業に出会いました。年収180万円アップに加え、フルリモート勤務が可能になり、ワークライフバランスが大幅に改善。「エージェントに相談して本当に良かった」と語っています。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                転職成功者Bさん（20代後半）
              </h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">SES企業のエンジニア / 年収350万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p>
                  <p className="text-sm font-bold">自社開発企業のエンジニア / 年収480万円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">
                女性特化型のエージェントを利用し、産休育休制度が充実した自社開発企業に転職。年収130万円アップと働きやすい環境の両方を手に入れました。「女性の悩みに寄り添ったサポートが心強かった」とのこと。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
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
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light leading-relaxed list-disc pl-5">
            <li>出典: 厚生労働省「女性活躍推進法特集ページ」（2026年6月参照）</li>
            <li>出典: 厚生労働省「女性の活躍推進企業データベース」（2026年6月参照）</li>
            <li>出典: 厚生労働省「女性活躍推進法への取組状況（えるぼし・プラチナえるぼし認定状況）」（2026年6月参照）</li>
            <li>出典: 厚生労働省「くるみんマーク・プラチナくるみんマークについて」（2026年6月参照）</li>
            <li>出典: 厚生労働省「令和6年度雇用均等基本調査」（2026年6月参照）</li>
            <li>出典: 経済産業省「令和6年度なでしこ銘柄・Nextなでしこ 共働き・共育て支援企業」（2026年6月参照）</li>
            <li>出典: 経済産業省「健康経営優良法人認定制度」（2026年6月参照）</li>
            <li>出典: SCSK株式会社「採用情報 データ集」・ニュースリリース「プラチナくるみんプラス認定を取得」（2025年11月12日）（2026年6月参照）</li>
            <li>出典: 富士通株式会社「統合レポート・人材戦略説明資料・サステナビリティデータ」（2026年6月参照）</li>
            <li>出典: NTTデータグループ「ダイバーシティ、エクイティ＆インクルージョン」（2026年6月参照）</li>
            <li>出典: NTT「令和6年度『なでしこ銘柄』に選定」ニュースリリース（2025年3月24日）（2026年6月参照）</li>
          </ul>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/maternity-leave-rate/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                産休育休の取得率・復帰率データ
              </h3>
              <p className="text-sm text-text-light">復帰率の高い企業の見つけ方</p>
            </a>
            <a
              href="/articles/fullremote-companies/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                フルリモートで働けるIT企業
              </h3>
              <p className="text-sm text-text-light">柔軟な働き方ができる企業の探し方</p>
            </a>
            <a
              href="/articles/mama-engineer/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                ママエンジニアの働き方ガイド
              </h3>
              <p className="text-sm text-text-light">育児と両立するキャリアの作り方</p>
            </a>
            <a
              href="/articles/women-manager/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                女性エンジニアの管理職キャリア
              </h3>
              <p className="text-sm text-text-light">女性管理職比率の高い職場の選び方</p>
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
