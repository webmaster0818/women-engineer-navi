import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "30代女性エンジニアの転職ガイド｜年収相場・未経験の現実・両立戦略【2026年】",
  description:
    "30代女性エンジニアの転職を実データで解説。30代の平均年収454万円・エンジニア469万円（doda 2025）、30代女性の転職入職率は同年代男性より高く、転職者の約46%が賃金増。30代前半/後半の戦略の違い、未経験挑戦の現実、出産・育児との両立まで出典付きで紹介します。",
  alternates: { canonical: "/articles/age-30s/" },
  openGraph: {
    title: "30代女性エンジニアの転職ガイド｜年収相場・未経験の現実・両立戦略【2026年】",
    description:
      "30代女性エンジニアの年収相場・転職市場・30代前半/後半の戦略・未経験挑戦の現実・ライフイベントとの両立を公的統計と実データで解説。",
    url: "https://women-engineer.com/articles/age-30s/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "30代女性エンジニアの転職ガイド｜年収相場・未経験の現実・両立戦略【2026年】",
  datePublished: "2026-04-27",
  dateModified: "2026-06-12",
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
    "30代女性エンジニアの年収相場・転職市場・30代前半/後半の戦略・未経験挑戦の現実・ライフイベントとの両立を公的統計と実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/age-30s/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "30代女性エンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "doda「平均年収ランキング2025」によると、30代全体の平均年収は454万円（30代女性は393万円）、職種別のエンジニア（IT/通信）は469万円です。エンジニア経験者の30代は500万円台が現実的なレンジで、クラウド・AIなど需要の高いスキルやリーダー・マネジメント経験があれば600万〜700万円台も狙えます。未経験からの転職では1年目300万〜400万円程度に一度下がるのが一般的ですが、数年で回復するケースが多いです。",
      },
    },
    {
      "@type": "Question",
      name: "30代未経験でもITエンジニアに転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。レバテック「IT人材白書2024」では、エンジニア未経験者を「採用している」企業が41.6%、「検討中」を含めると約7割にのぼります。ただし20代のポテンシャル採用と違い、30代は「前職スキル×IT」の掛け合わせと学習実績の提示が必須です。半年〜1年の学習でポートフォリオを作り、営業経験→カスタマーエンジニア、事務経験→社内SE・テスト設計など、前職の強みを活かせる職種から入るのが現実的なルートです。",
      },
    },
    {
      "@type": "Question",
      name: "30代の転職で年収は上がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "上がる人が多数派です。厚生労働省「令和6年雇用動向調査」によると、30〜34歳の転職者の46.1%が前職より賃金が増加（減少は24.2%）、35〜39歳でも45.5%が増加しています。エンジニア（IT・通信）の求人倍率は10倍超の高水準が続いており、スキルの棚卸しとエージェント経由の年収交渉を行えば、30代は年収アップを狙いやすい年代です。",
      },
    },
    {
      "@type": "Question",
      name: "出産・育児を控えていても転職して大丈夫ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "戦略的に進めれば問題ありません。女性の育児休業取得率は86.6%（厚生労働省・令和6年度雇用均等基本調査）まで上がっており、30代女性が前職を辞めた理由でも「出産・育児」は3〜4%にとどまります。むしろ「労働時間・休日等の労働条件」を理由とする離職の方が多く、両立しやすい環境へ転職すること自体が有効な両立戦略です。ただし入社1年未満は労使協定により育休の対象外となる場合があるため、転職タイミングと就業規則の確認は必須です。",
      },
    },
    {
      "@type": "Question",
      name: "30代後半からの転職は遅すぎますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "遅くありません。令和6年雇用動向調査では35〜39歳女性の転職入職率は10.5%で、同年代男性の7.9%より高く、転職者の45.5%が賃金増を実現しています。30代後半はポテンシャルではなく「再現性のある実績」で評価される年代なので、専門領域の深さ、リーダー・育成経験、改善の定量成果を職務経歴書で示せれば、管理職・ハイクラス案件も十分狙えます。",
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
          background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "30代女性エンジニアの転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              年代別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              30代女性エンジニアの転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収相場・未経験の現実・両立戦略を実データで解説【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>この記事の結論</h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>30代は「不利な年代」ではなくデータ上は転職適齢期。</strong>30〜34歳女性の転職入職率13.2%・35〜39歳10.5%は同年代男性（10.3%・7.9%）より高く、30代転職者の約46%が賃金増を実現しています（厚生労働省「令和6年雇用動向調査」）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>年収の目安：</strong>30代全体の平均は454万円、エンジニア（IT/通信）は469万円（doda「平均年収ランキング2025」）。経験者は500万円台、クラウド・マネジメント経験で600万〜700万円台が射程。未経験は1年目300万〜400万円からの再スタートが現実です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>戦略は前半と後半で変える。</strong>30代前半は「実務経験×ポテンシャル」で職種転換・未経験挑戦も可能。30代後半は専門性とリーダー経験など「再現性のある実績」で勝負するのが鉄則です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>ライフイベントは「両立できる会社へ移る」が正解。</strong>30代女性の離職理由は「出産・育児」（3〜4%）より「労働時間・休日等の労働条件」（13〜15%）が多数。働き方を変える転職そのものが最大の両立戦略です。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}
          >
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 30代女性エンジニアの転職市場【実データ】</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 30代女性エンジニアの年収相場（経験者・未経験別）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 30代前半と30代後半で変わる転職戦略</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 経験者のキャリアアップ転職（3つの方向性）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 30代未経験からのIT転職の現実と攻略法</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. ライフイベントとの両立戦略</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 30代の転職活動の進め方</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 転職市場 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">30代女性エンジニアの転職市場【実データ】</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「30代の転職は厳しい」というイメージは、少なくとも女性×ITエンジニアに関してはデータと一致しません。厚生労働省「令和6年雇用動向調査」によると、2024年の女性の転職入職率は<strong>30〜34歳で13.2%、35〜39歳で10.5%</strong>。同年代男性（10.3%・7.9%）を上回っており、30代女性の転職は珍しいことではなく、ごく一般的なキャリア行動になっています。
            </p>
            <p>
              さらに求人側の需要も強い状態が続いています。dodaの転職求人倍率（2026年4月）は全体で2.38倍ですが、<strong>エンジニア（IT・通信）は10倍を超える高水準</strong>を維持。1人の求職者に対して10件以上の求人がある計算で、経験者はもちろん、ポテンシャル層にも門戸が開かれやすい状況です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>13.2%</p>
              <p className="text-sm font-bold mt-2">30〜34歳女性の転職入職率</p>
              <p className="text-xs text-text-light mt-1">同年代男性は10.3%。女性の方が活発に転職している</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>10倍超</p>
              <p className="text-sm font-bold mt-2">エンジニア（IT・通信）求人倍率</p>
              <p className="text-xs text-text-light mt-1">全職種平均2.38倍に対し圧倒的な売り手市場</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>18.8%</p>
              <p className="text-sm font-bold mt-2">日本のITエンジニア女性比率</p>
              <p className="text-xs text-text-light mt-1">OECD加盟国中17位。企業は女性採用を強化中</p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「令和6年雇用動向調査」、doda「転職求人倍率レポート（2026年4月）」、ヒューマンリソシア「IT分野のジェンダーギャップに関するグローバル調査」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              日本のITエンジニアに占める女性比率は18.8%とまだ2割弱で、OECD平均（20.6%）を下回ります。これは裏を返せば、ダイバーシティ目標を掲げる企業にとって<strong>30代の女性エンジニアは「採りたいのに採れない」希少人材</strong>だということ。実務経験のある30代女性エンジニアは、年収・働き方の両面で条件交渉の余地が大きい立場にあります。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 年収相場 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">30代女性エンジニアの年収相場（経験者・未経験別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              doda「平均年収ランキング2025」（集計期間2024年9月〜2025年8月、約60万件）によると、30代全体の平均年収は<strong>454万円</strong>（30代男性510万円・30代女性393万円）。一方、職種別のエンジニア（IT/通信）は<strong>469万円</strong>、業種別のIT/通信は466万円で、いずれも全体平均（429万円）を上回ります。エンジニア職は30代女性の平均（393万円）より高い水準を狙いやすい職種です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均年収・目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代全体（全職種）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>454万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>男性510万円・女性393万円</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>エンジニア（IT/通信）全体</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>469万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>全体平均429万円を40万円上回る</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代・エンジニア経験者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>500万円台が現実的レンジ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>クラウド・AI・リーダー経験で600万〜700万円台も</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代・未経験からの転職1年目</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>300万〜400万円程度</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>一時的に下がるが、数年で前職水準を超える設計が一般的</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: doda（パーソルキャリア）「平均年収ランキング2025」、ウィルオブテック「未経験からエンジニア転職を叶える全知識」（いずれも2026年6月参照）。経験者レンジは公開統計と求人水準をもとにした目安です。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              注目すべきは「転職で年収が上がるか」のデータです。厚生労働省「令和6年雇用動向調査」によると、転職で賃金が増加した人の割合は<strong>30〜34歳で46.1%</strong>（うち1割以上の増加は36.0%）、<strong>35〜39歳で45.5%</strong>。減少した人（24.2%・24.3%）の約2倍にのぼり、転職者全体でも「増加」が「減少」を上回る差は過去10年で最大水準になっています。需要の強いエンジニア職であれば、30代の転職は年収アップの再現性が高い選択肢です。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>30代で年収を上げる3つのレバー</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>市場価値の高いスキルを足す</strong>：クラウド（AWS/GCP）、AI・データ活用、セキュリティは30代の年収を一段引き上げる定番領域</li>
              <li>② <strong>リーダー・育成経験を言語化する</strong>：「後輩2名のOJT担当」「レビュー体制の整備」も立派なマネジメント実績</li>
              <li>③ <strong>エージェント経由で年収交渉する</strong>：30代女性エンジニアは希少人材。自分で言いにくい条件交渉こそプロに任せる</li>
            </ul>
            <p className="text-sm text-text-light mt-4">
              年代別の詳しい年収データは<a href="/articles/salary-by-age/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>年代別年収ガイド</a>で解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 前半/後半の戦略 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">30代前半と30代後半で変わる転職戦略</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              同じ30代でも、企業が見るポイントは前半と後半で明確に変わります。データ上も、女性の転職入職率は30〜34歳の13.2%から35〜39歳の10.5%へ緩やかに下がり、求人側の期待値は「伸びしろ」から「即戦力・再現性」へシフトします。自分がどちらのフェーズにいるかで、アピールの軸を切り替えましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>30代前半（30〜34歳）：実務経験×ポテンシャルの最終ゾーン</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>職種転換（SES→自社開発、SIer→Web系など）がまだ通りやすい</strong>。培った基礎力＋学習意欲で評価される</li>
                <li>・未経験からのIT転職に挑戦できる実質的なラストゾーン。挑戦するなら1日でも早く動く</li>
                <li>・転職者の46.1%が賃金増。市場価値の確認だけでも価値がある</li>
                <li>・この時期に「クラウド」「設計経験」を積んでおくと30代後半の選択肢が大きく広がる</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>30代後半（35〜39歳）：「再現性のある実績」で勝負</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・ポテンシャルではなく<strong>専門領域の深さ・定量成果・リーダー経験</strong>が評価軸</li>
                <li>・「障害対応時間を◯%削減」「メンバー3名のチームでリリースを主導」など数字と役割で語る</li>
                <li>・35〜39歳でも転職者の45.5%が賃金増。実績が示せれば年齢はハンデにならない</li>
                <li>・管理職・テックリード候補としての採用が増え、むしろ年収の上げ幅が大きいケースも</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">出典: 厚生労働省「令和6年雇用動向調査」（2026年6月参照）</p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              前後の年代の戦略も知っておくと、いま打つべき手が明確になります。<a href="/articles/age-20s/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>20代女性エンジニアの転職ガイド</a>では基礎づくり、<a href="/articles/age-40s/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>40代女性エンジニアの転職ガイド</a>では専門性の換金フェーズを解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 経験者キャリアアップ */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">経験者のキャリアアップ転職（3つの方向性）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              実務経験のある30代女性エンジニアの転職は、「何を上げたいか」で方向性を決めるのが成功の近道です。年収・専門性・働き方のどれを優先するかによって、選ぶべき企業も職務経歴書の書き方も変わります。
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>① マネジメント方向：リーダー・EM・PMへ</h3>
              <p className="text-sm text-text-light leading-relaxed">
                30代はマネジメント転身の最適期です。日本の課長級に占める女性割合はまだ1〜2割台で、女性管理職の登用目標を掲げる企業ではリーダー経験のある女性エンジニアの争奪戦が起きています。チームリード・後輩育成・進捗管理の経験は小さくても書き出し、PMP・スクラムマスター等の資格で補強を。詳しくは<a href="/articles/women-manager/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性エンジニアの管理職キャリアガイド</a>で解説しています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>② スペシャリスト方向：クラウド・AI・セキュリティで単価を上げる</h3>
              <p className="text-sm text-text-light leading-relaxed">
                マネジメントをやらずに年収を上げるなら、需要の高い技術領域への「軸足ずらし」が有効です。2026年時点ではクラウドアーキテクチャ（AWS/GCP）、AI・データ基盤（Python/LLM活用）、セキュリティの3領域が高単価。現職で関連タスクを拾って実績化し、資格（AWS認定、情報処理安全確保支援士など）で客観性を持たせると、30代後半〜40代の市場価値が大きく変わります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>③ 働き方方向：年収維持×フルリモート・フレックスへ</h3>
              <p className="text-sm text-text-light leading-relaxed">
                総務省「令和6年通信利用動向調査」によると情報通信業のテレワーク導入率は94.3%（企業全体は47.3%）。エンジニアは「年収を下げずに働き方だけ変える」転職が最も実現しやすい職種です。30代女性の離職理由の上位が「労働時間・休日等の労働条件」（13〜15%）であることを踏まえると、消耗する前に環境を変えるのは合理的な選択です。
              </p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">出典: 総務省「令和6年通信利用動向調査」、厚生労働省「令和6年雇用動向調査」（いずれも2026年6月参照）</p>
        </div>
      </section>

      {/* sec5 未経験の現実 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">30代未経験からのIT転職の現実と攻略法</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              まず現実から。レバテック「IT人材白書2024」によると、エンジニア未経験者を「採用している」企業は<strong>41.6%</strong>、「検討中」を含めると<strong>約7割</strong>にのぼります。経験者採用が難しくなった企業が未経験採用に舵を切っており、門戸自体は確実に開いています。
            </p>
            <p>
              一方で、30代の未経験転職は20代のポテンシャル採用とは別物です。未経験可求人の多くは20代を想定しており、30代には「なぜ今ITなのか」の説得力と、<strong>前職スキルとの掛け合わせ</strong>が求められます。年収も1年目は300万〜400万円程度に一度下がるのが大半で、ここを受け入れられるかが最初の分岐点です。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>30代未経験の攻略法5箇条</h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>前職×ITで入口を選ぶ</strong>：営業→カスタマーエンジニア/セールスエンジニア、事務・経理→社内SE/業務システム、製造・品質管理→テスト設計/QA。ゼロからの勝負を避け、前職知識が武器になる職種から入る</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>学習は半年〜1年・ポートフォリオ必須</strong>：1日2〜3時間の学習を継続し、動くものを公開する。30代は「口より実物」で学習能力を証明する</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>資格で土台を可視化する</strong>：ITパスポート→基本情報技術者の順で取得すると、書類選考での「本気度」の証明になる</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>SES・受託も踏み台として検討する</strong>：最初から理想の自社開発を狙わず、実務経験2〜3年を最短で積んで2回目の転職で条件を取りに行く設計が現実的</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>年収ダウンの期間を資金計画に織り込む</strong>：1〜2年は年収300万円台を覚悟し、生活費の見通しを立ててから動く。回復後は前職を超えるケースが多い</span>
              </li>
            </ul>
          </div>
          <p className="text-text-light text-sm mt-3">出典: レバテック「IT人材白書2024」、ウィルオブテック「未経験からエンジニア転職を叶える全知識」（いずれも2026年6月参照）</p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              学習ロードマップや職種の選び方は<a href="/articles/beginner/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>未経験からエンジニアになるガイド</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 両立戦略 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ライフイベントとの両立戦略</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              30代の転職で最も気になるのが、結婚・出産・育児とのタイミングでしょう。ここもデータで見ると、イメージと実態のずれがはっきりします。厚生労働省「令和6年雇用動向調査」によると、30代女性が前職を辞めた理由のうち<strong>「出産・育児」は30〜34歳で3.4%、35〜39歳で4.0%にすぎません</strong>。一方「労働時間、休日等の労働条件が悪かった」は13.3%・15.0%、「職場の人間関係」は11.8%・12.7%。つまり<strong>女性のキャリアを止めているのは出産そのものではなく、両立できない働き方</strong>です。
            </p>
            <p>
              制度面の環境は大きく改善しています。女性の育児休業取得率は<strong>86.6%</strong>（男性も40.5%と過去最高）。さらに情報通信業のテレワーク導入率は94.3%と全業種トップクラスで、エンジニアはもともとライフイベントと両立させやすい職種です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>転職タイミングの考え方</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>出産前に「両立できる会社」へ移っておく</strong>のが王道。育休は復帰先の環境で価値が決まる</li>
                <li>・入社1年未満は労使協定により育休の対象外となる場合がある。妊娠を考える時期から逆算して動く</li>
                <li>・転職直後の妊娠でも法律上の不利益取り扱いは禁止。ただし就業規則・取得実績の事前確認は必須</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>企業選びの確認ポイント</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・育休の取得実績「人数」と復帰率（制度の有無ではなく運用実態）</li>
                <li>・リモート・フレックスの利用率と中抜け可否</li>
                <li>・時短勤務者の評価制度とマネージャー登用事例</li>
                <li>・求人票に出ない実態は女性のキャリアに詳しいエージェント経由で確認</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「令和6年雇用動向調査」「令和6年度雇用均等基本調査」、総務省「令和6年通信利用動向調査」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              出産後のキャリア設計・時短復帰のリアルは<a href="/articles/mama-engineer/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 進め方 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">30代の転職活動の進め方</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              30代の転職活動は在職中に進めるのが原則です。エンジニアの売り手市場が続いているとはいえ、準備の質で結果は大きく変わります。標準的な期間は<strong>準備1か月＋応募〜内定2〜3か月</strong>の計3〜4か月が目安です。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "スキルと実績の棚卸し（2週間）", "担当システム・使用技術・役割・定量成果を書き出す。「リーダーではなかった」人も、レビュー・OJT・改善提案など役割の芽を拾い上げるのが30代のコツ。"],
              ["STEP2", "軸を1つに決める", "年収・専門性・働き方のどれを最優先にするか決める。全部を狙うと判断がぶれ、長期化の最大要因になる。"],
              ["STEP3", "エージェント登録・市場価値の確認", "IT特化型＋女性特化型の2〜3社に登録し、想定年収レンジを確認。30〜34歳の転職者の46.1%が賃金増という相場感を基準に提示額を評価する。"],
              ["STEP4", "職務経歴書を「再現性」で書く", "「何をやったか」ではなく「どんな状況で、何を考え、どう成果を出したか」。30代は同じ成果を新しい環境で再現できる根拠が問われる。"],
              ["STEP5", "面接・条件交渉", "両立関連の質問は「制度はありますか」ではなく「直近3年の取得実績・復帰率」を聞くと実態がわかる。年収交渉はエージェント経由で。"],
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
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績。スピーディーなマッチングで最短2週間での内定実績も。年収交渉力にも定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span>
              </div>
              <p className="text-sm text-text-light">女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT業界の転職支援に強み。未経験からベテランまで幅広い層の求人を保有。レスポンスの速さと手厚いサポートに定評があります。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 成功事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Aさん（30代前半・経験者のキャリアアップ）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">中小SIerのシステムエンジニア / 年収420万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p>
                  <p className="text-sm font-bold">SaaS企業のバックエンドエンジニア / 年収560万円・フルリモート</p>
                </div>
              </div>
              <p className="text-sm text-text-light">現職で担当していたAWS移行の経験を棚卸しし、IT特化型エージェント経由でクラウド経験者として応募。30代前半の「実務×伸びしろ」評価で年収140万円アップとフルリモートを同時に実現しました。「転職者の半数近くが賃金増というデータを見て、市場価値の確認だけでもと思ったのがきっかけでした」</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Bさん（30代後半・両立軸の転職）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">受託開発のリーダー職（残業多め）/ 年収530万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p>
                  <p className="text-sm font-bold">自社開発企業のテックリード / 年収580万円・フレックス＋リモート併用</p>
                </div>
              </div>
              <p className="text-sm text-text-light">5名チームのリーダー経験と障害対応の改善実績を定量化して職務経歴書に反映。女性特化型エージェントで育休取得実績と復帰率を事前確認し、出産を見据えて「両立できる会社」へ先回りの転職をしました。年収を維持どころか上げながら、労働時間の課題を解消しています。</p>
            </div>
          </div>
          <p className="text-xs text-text-light mt-4">※事例は30代女性エンジニアの典型的な転職パターンをもとに構成したモデルケースです。</p>
        </div>
      </section>

      {/* sec10 FAQ */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>・出典: 厚生労働省「令和6年雇用動向調査」（2026年6月参照）— 女性の転職入職率（30〜34歳13.2%、35〜39歳10.5%）、転職者の賃金変動（30〜34歳46.1%増加・35〜39歳45.5%増加）、前職を辞めた理由（30代女性の「出産・育児」3.4〜4.0%、「労働時間・休日等の労働条件」13.3〜15.0%）</li>
            <li>・出典: 厚生労働省「令和6年度雇用均等基本調査」（2026年6月参照）— 育児休業取得率：女性86.6%、男性40.5%</li>
            <li>・出典: doda（パーソルキャリア）「平均年収ランキング2025」（2026年6月参照）— 全体429万円、30代454万円（男性510万円・女性393万円）、エンジニア（IT/通信）469万円、IT/通信業種466万円。集計期間2024年9月〜2025年8月・約60万件</li>
            <li>・出典: doda（パーソルキャリア）「転職求人倍率レポート（2026年4月）」（2026年6月参照）— 全体2.38倍、エンジニア（IT・通信）は10倍超の高水準</li>
            <li>・出典: ヒューマンリソシア「IT分野のジェンダーギャップに関するグローバル調査」（2026年6月参照）— 日本のITエンジニア女性比率18.8%（OECD加盟国中17位、OECD平均20.6%）</li>
            <li>・出典: レバテック「IT人材白書2024」（2026年6月参照）— エンジニア未経験者を「採用している」企業41.6%、「検討中」含め約7割</li>
            <li>・出典: 総務省「令和6年通信利用動向調査」（2026年6月参照）— テレワーク導入率：情報通信業94.3%、企業全体47.3%</li>
            <li>・出典: ウィルオブテック「未経験からエンジニア転職を叶える全知識」（2026年6月参照）— 未経験転職1年目の年収相場300万〜400万円</li>
          </ul>
          <p className="text-xs text-text-light mt-4">※年収・割合などの数値は調査時点のものであり、企業・地域・スキルにより変動します。</p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/age-20s/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>20代女性エンジニアの転職ガイド</h3>
              <p className="text-sm text-text-light">基礎づくりとポテンシャル転職の戦略</p>
            </a>
            <a href="/articles/age-40s/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>40代女性エンジニアの転職ガイド</h3>
              <p className="text-sm text-text-light">専門性を最大限に活かす転職術</p>
            </a>
            <a href="/articles/salary-by-age/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>年代別年収ガイド</h3>
              <p className="text-sm text-text-light">20代〜40代の年収相場と上げ方</p>
            </a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からエンジニアになるガイド</h3>
              <p className="text-sm text-text-light">学習ロードマップと職種の選び方</p>
            </a>
            <a href="/articles/mama-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</h3>
              <p className="text-sm text-text-light">育児と両立する転職・復帰戦略</p>
            </a>
            <a href="/articles/women-manager/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの管理職キャリア</h3>
              <p className="text-sm text-text-light">30代からのマネジメント転身</p>
            </a>
          </div>
        </div>
      </section>

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
