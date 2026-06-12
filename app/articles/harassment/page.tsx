import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "職場のハラスメント対処ガイド｜女性エンジニアが知っておく法律・相談窓口・転職判断【2026年】",
  description:
    "職場のハラスメント対処ガイド。パワハラ防止法（労働施策総合推進法）・男女雇用機会均等法・育児介護休業法による防止措置義務と、2026年10月施行のカスハラ対策義務化を出典付きで解説。記録の取り方、総合労働相談コーナー・みんなの人権110番などの実在する相談窓口、転職で環境を変える判断基準まで整理します。",
  alternates: { canonical: "/articles/harassment/" },
  openGraph: {
    title: "職場のハラスメント対処ガイド｜女性エンジニアが知っておく法律・相談窓口・転職判断【2026年】",
    description:
      "パワハラ・セクハラ・マタハラの防止措置義務と2026年10月施行のカスハラ対策義務化を出典付きで解説。記録の取り方、実在する公的相談窓口、転職で環境を変える判断基準まで整理します。",
    url: "https://women-engineer.com/articles/harassment/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "職場のハラスメント対処ガイド｜女性エンジニアが知っておく法律・相談窓口・転職判断【2026年】",
  datePublished: "2026-04-28",
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
    "パワハラ防止法・男女雇用機会均等法・育児介護休業法による防止措置義務と、2026年10月施行のカスハラ対策義務化を出典付きで解説。記録の取り方、実在する公的相談窓口、転職判断の基準まで整理。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/harassment/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ハラスメントを受けたら、まず何をすべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "まず安全の確保と記録です。日時・場所・相手・具体的な言動・周囲にいた人を、その日のうちにメモに残しましょう。チャットやメールはスクリーンショットを個人の端末にも保存し、体調に影響が出ている場合は受診記録も残します。記録は社内窓口・労働局・弁護士のいずれに相談する場合でも基礎資料になります。並行して、一人で抱え込まずに信頼できる人や相談窓口（社内窓口、総合労働相談コーナーなど）へ早めに相談することが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "会社に相談窓口がない、または機能していない場合はどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "パワハラ防止法（労働施策総合推進法）により、相談体制の整備を含む防止措置は中小企業を含む全企業の義務です（2022年4月から全面義務化）。窓口がない・機能しない場合は、都道府県労働局・労働基準監督署内の「総合労働相談コーナー」（無料・予約不要）に相談できます。労働局には助言・指導や紛争調整委員会によるあっせん・調停の制度もあり、会社が措置義務を果たしていない場合は労働局が行政指導を行うこともあります。",
      },
    },
    {
      "@type": "Question",
      name: "ハラスメントを相談したことで、不利益な扱いを受けることはありませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "法律で禁止されています。2020年6月施行の改正で、パワハラ・セクハラ・マタハラいずれについても、労働者が相談したことや、会社の調査で事実を述べたことを理由とする解雇その他の不利益な取り扱いが明文で禁止されました（労働施策総合推進法第30条の2第2項、男女雇用機会均等法第11条第2項など）。万一、相談後に不利益な扱いを受けた場合は、その事実も記録し、労働局に相談してください。",
      },
    },
    {
      "@type": "Question",
      name: "客先常駐（SES）や顧客からのハラスメントにも、会社は対応してくれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。2025年6月に成立した改正労働施策総合推進法により、2026年10月1日から、顧客や取引先など第三者からのカスタマーハラスメントについても、相談体制の整備や被害者への配慮などの雇用管理上の措置を講じることが全事業主の義務になります。また派遣労働者については、派遣元だけでなく派遣先の企業にもセクハラ・パワハラ等の防止措置義務が適用されます。常駐先・顧客からの被害も自社（雇用主）に対応を求められる問題です。",
      },
    },
    {
      "@type": "Question",
      name: "ハラスメントが原因で退職する場合、会社都合になりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "自己都合で退職届を出した場合でも、上司・同僚等からの故意の排斥や著しい嫌がらせが離職理由であるとハローワークが認めた場合は、雇用保険の「特定受給資格者」に該当し、給付制限なし・所定給付日数が手厚くなる可能性があります。判断には客観的な記録（日時入りのメモ、メール・チャットの保存、受診記録、社内相談の記録など）が重要です。退職前にハローワークや総合労働相談コーナーで確認することをおすすめします。",
      },
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer.com" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer.com/articles/" },
    { "@type": "ListItem", position: 3, name: "職場のハラスメント対処ガイド", item: "https://women-engineer.com/articles/harassment/" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
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
              { label: "職場のハラスメント対処ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              キャリア知識
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              職場のハラスメント対処ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性エンジニアが知っておく法律・相談窓口・転職判断【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>この記事の結論 — 3つの原則</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>一人で抱えない。</strong>ハラスメントは被害を受けた側の責任ではなく、防止措置を講じることは法律で定められた<strong>会社の義務</strong>です（労働施策総合推進法・男女雇用機会均等法など）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>記録を残す。</strong>日時・場所・言動のメモ、チャット・メールの保存が、社内相談・行政相談・退職手続きすべての土台になります。記録は「その日のうちに」が原則です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>外部窓口がある。</strong>社内で解決しなくても、<strong>総合労働相談コーナー（都道府県労働局）</strong>や<strong>みんなの人権110番（法務局）</strong>など、無料で使える公的窓口が実在します。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>解決を待たずに<strong>転職で環境を変えることも正当な選択肢</strong>です。我慢し続けることを前提にせず、心身の安全を最優先に判断しましょう。</span>
              </li>
            </ul>
          </div>
          <p className="text-xs text-text-light mt-3">
            ※ 本記事は公的機関の公開情報に基づく一般的な制度解説であり、個別の事案に対する法的助言ではありません。具体的な対応は本文で紹介する公的窓口や弁護士にご相談ください。
          </p>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}
          >
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. データで見る職場ハラスメントの現状</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. ハラスメントの類型と法的根拠（整理表）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 対処ステップ1: 記録を残す</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 対処ステップ2: 社内窓口に相談する</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 対処ステップ3: 外部の公的相談窓口を使う</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 2026年10月施行: カスハラ・就活セクハラ対策の義務化</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 転職で環境を変える判断基準</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. よくある質問</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. 出典・参考資料</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 データで見る現状 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データで見る職場ハラスメントの現状</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              職場のハラスメントは「ごく一部の不運な人の問題」ではありません。厚生労働省の委託事業として実施された「令和5年度 職場のハラスメントに関する実態調査」によると、過去3年間にハラスメントを受けたと回答した労働者の割合は、<strong>パワハラが19.3%</strong>、<strong>顧客等からの著しい迷惑行為（カスハラ）が10.8%</strong>、<strong>セクハラが6.3%</strong>でした。およそ5人に1人がパワハラを経験している計算であり、誰にでも起こりうる問題です。
            </p>
            <p>
              相談の多さも公的データに表れています。厚生労働省「令和6年度 個別労働紛争解決制度の施行状況」によると、全国の総合労働相談コーナーが受けた相談は<strong>120万1,881件</strong>。民事上の個別労働紛争の相談内容では<strong>「いじめ・嫌がらせ」が5万4,987件で13年連続の最多</strong>となっています。それだけ多くの人が外部窓口を実際に利用しているということでもあります。
            </p>
            <p>
              最初に確認しておきたいのは、<strong>ハラスメントは受けた側の責任ではない</strong>ということです。「自分にも原因があるのでは」と抱え込む必要はありません。後述のとおり、ハラスメントを防止する措置を講じることは法律で定められた会社側の義務であり、相談したことを理由に不利益な扱いをすることも法律で禁止されています。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>指標</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>数値</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>出典</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>過去3年間にパワハラを受けた労働者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>19.3%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>厚生労働省委託事業「令和5年度 職場のハラスメントに関する実態調査」</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>過去3年間にカスハラを受けた労働者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>10.8%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>同上</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>過去3年間にセクハラを受けた労働者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>6.3%</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>同上</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>「いじめ・嫌がらせ」の相談件数</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>5万4,987件（13年連続最多）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>厚生労働省「令和6年度 個別労働紛争解決制度の施行状況」</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省委託事業「令和5年度 職場のハラスメントに関する実態調査」、厚生労働省「令和6年度 個別労働紛争解決制度の施行状況」（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec2 類型と法的根拠 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ハラスメントの類型と法的根拠（整理表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              日本では、主要なハラスメントについて<strong>「事業主が雇用管理上の措置（防止方針の明確化・相談体制の整備・事後の適切な対応など）を講じる義務」</strong>が法律で定められています。どの法律が、いつから、何を義務付けているかを正確に押さえておくと、会社に対応を求めるときの根拠になります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>類型</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>概要</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>根拠法</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>防止措置義務の施行時期</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>パワーハラスメント</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>①優越的な関係を背景とした言動で、②業務上必要かつ相当な範囲を超え、③就業環境を害するもの（3要素すべてを満たすもの）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>労働施策総合推進法 第30条の2（通称: パワハラ防止法）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>大企業2020年6月1日、中小企業2022年4月1日（<strong>現在は全企業が義務</strong>）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>セクシュアルハラスメント</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>性的な言動への対応により労働条件で不利益を受ける（対価型）、または性的な言動により就業環境が害される（環境型）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>男女雇用機会均等法 第11条</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>2007年4月に措置義務化（2020年6月の改正で相談を理由とする不利益取扱い禁止など対策強化）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>マタニティハラスメント（妊娠・出産・育休等）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>妊娠・出産や産休・育休等の制度利用に関する上司・同僚からの就業環境を害する言動</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>男女雇用機会均等法 第11条の3、育児・介護休業法 第25条</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>2017年1月1日に措置義務化</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>カスタマーハラスメント（顧客・取引先等から）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>顧客・取引先など第三者からの著しい迷惑行為により就業環境が害されるもの</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>改正労働施策総合推進法（令和7年法律第63号・2025年6月成立）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><strong>2026年10月1日施行</strong>（全事業主に措置義務。指針は2026年2月26日策定）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>求職者等へのセクハラ（就活等セクハラ）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>就職活動中の学生や求職者に対する性的な言動</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>同改正法（令和7年法律第63号）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><strong>2026年10月1日施行</strong>（事業主に措置義務）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「職場におけるハラスメントの防止のために」、厚生労働省「令和7年労働施策総合推進法等の一部改正について」（いずれも2026年6月参照）
          </p>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>知っておくべき2つの共通ルール</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>相談を理由とする不利益取扱いは禁止。</strong>2020年6月施行の改正で、ハラスメントを相談したことや、会社の調査で事実を述べたことを理由とする解雇その他の不利益な取り扱いが、パワハラ・セクハラ・マタハラのいずれについても明文で禁止されました。</li>
              <li>② <strong>派遣・常駐でも保護される。</strong>派遣労働者については、派遣元だけでなく<strong>派遣先の企業にも</strong>セクハラ・マタハラ・パワハラの防止措置義務が適用されます（労働者派遣法第47条の2〜第47条の4による読み替え適用）。客先常駐が多いIT業界でも「常駐先のことだから」と泣き寝入りする必要はありません。</li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            なお「コードレビューでの人格否定」「女性だからと技術的な仕事を任せない」といったIT現場で起こりがちな言動も、上の3要素を満たせばパワハラに、性別を理由とする配置・昇進の差別であれば均等法第6条の問題に該当しうるものです。名称が「テクハラ」など俗称であっても、法律上の類型に当てはめて考えることが対処の第一歩です。
          </p>
        </div>
      </section>

      {/* sec3 ステップ1 記録 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">対処ステップ1: 記録を残す</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              どの窓口に相談する場合でも、土台になるのは<strong>客観的な記録</strong>です。社内調査・労働局のあっせん・弁護士相談・退職時の離職理由の判定まで、すべての場面で「いつ・どこで・誰に・何をされたか」が問われます。記憶は時間とともに曖昧になるため、<strong>その日のうちに記録する</strong>ことが原則です。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>記録に残す項目（5W1H）</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>日時</strong>（できれば時刻まで）と<strong>場所</strong>（会議室、チャットのチャンネル名、オンライン会議名など）</li>
                <li>・<strong>相手</strong>（氏名・役職）と<strong>同席者・目撃者</strong>の有無</li>
                <li>・<strong>具体的な言動</strong>（発言はできるだけ原文のまま。要約より引用が有効）</li>
                <li>・<strong>自分への影響</strong>（業務への支障、体調の変化など）</li>
                <li>・<strong>前後の経緯</strong>（どんな業務の場面で起きたか）</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>エンジニアの職場で有効な証拠の残し方</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>チャット・メールはスクリーンショットで保存。</strong>Slack等のメッセージは後から編集・削除される可能性があるため、日時とチャンネル名が写る形で保存します。会社端末しか使えない場合も、退職や端末返却でアクセスできなくなる前に保全を。ただし<strong>業務上の機密情報（ソースコード・顧客情報等）を社外に持ち出すのは別の問題になる</strong>ため、保存するのはハラスメント言動の記録に限定しましょう。</li>
                <li>・<strong>口頭での言動は直後にメモ。</strong>自分宛てのメールや日時が自動記録されるメモアプリに送っておくと、作成日時の裏付けになります。</li>
                <li>・<strong>体調に影響が出たら受診し、記録を残す。</strong>診断書や受診歴は、被害の深刻さを示す客観資料になります。</li>
                <li>・<strong>社内に相談した事実も記録。</strong>「いつ・誰に・何を相談し、どんな回答だったか」は、会社が措置義務を果たしたかの判断材料になります。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 ステップ2 社内窓口 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">対処ステップ2: 社内窓口に相談する</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              パワハラ防止法をはじめとする各法律は、会社に対して<strong>相談窓口の設置を含む相談体制の整備</strong>を義務付けています。就業規則やイントラネットに「ハラスメント相談窓口」「コンプライアンス窓口」などの記載があるはずなので、まず確認しましょう。窓口が人事部内の場合も、外部委託（弁護士事務所や専門会社）の場合もあります。
            </p>
            <p>
              相談時のポイントは次の3つです。
            </p>
            <ul className="space-y-2">
              <li>・<strong>記録を持って相談する。</strong>ステップ1の記録があると、窓口は事実確認を進めやすくなります。</li>
              <li>・<strong>希望する対応を伝える。</strong>「加害者と業務上関わらない配置にしてほしい」「事実調査をしてほしい」「まずは話を聞いてほしいだけ」など、希望を明確にすると対応がぶれにくくなります。調査を望まない段階の相談も可能です。</li>
              <li>・<strong>相談記録を自分でも残す。</strong>相談日時・対応者・回答内容をメモしておきます。</li>
            </ul>
            <p>
              繰り返しになりますが、<strong>相談したことを理由とする解雇や不利益な取り扱いは法律で禁止されています</strong>（労働施策総合推進法第30条の2第2項など）。また、上司本人が加害者の場合は、その上司を飛ばして窓口や別の管理職に相談して問題ありません。社内窓口が機能しない・信頼できない場合は、無理に社内で完結させず、次のステップの外部窓口に進みましょう。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 ステップ3 外部窓口 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">対処ステップ3: 外部の公的相談窓口を使う</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              社内で解決しない場合、あるいは最初から社内に相談しづらい場合は、公的な外部窓口を利用できます。いずれも<strong>無料</strong>で、匿名での相談が可能な窓口もあります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>窓口</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>運営主体</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>特徴</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>総合労働相談コーナー</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>厚生労働省（各都道府県労働局・労働基準監督署内）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ハラスメントを含むあらゆる労働問題のワンストップ窓口。<strong>無料・予約不要</strong>で、専門の相談員が面談または電話で対応。労働局の助言・指導やあっせん制度への橋渡しも</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>都道府県労働局 雇用環境・均等部（室）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>厚生労働省（都道府県労働局）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>セクハラ・マタハラ・パワハラの措置義務を所管。会社が義務を果たしていない場合の<strong>行政指導</strong>や、紛争調整委員会による<strong>調停・あっせん</strong>の申請窓口</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>みんなの人権110番（0570-003-110）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>法務省（法務局・地方法務局）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ハラスメントを含む人権問題全般の電話相談（平日8:30〜17:15）。従来の「女性の人権ホットライン」は<strong>2025年10月1日に本窓口へ統合</strong>され、音声ガイダンスで女性の人権相談を選択可能</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>法テラス（日本司法支援センター）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>国が設立した法的トラブル解決の総合案内所</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>損害賠償請求など法的手続きを検討する場合の入口。問い合わせ内容に応じた制度・相談窓口の案内のほか、収入等の条件を満たせば<strong>無料の法律相談</strong>も利用可能</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>こころの耳</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>厚生労働省（働く人のメンタルヘルス・ポータルサイト）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ハラスメントで心身の不調を感じたときの電話・SNS・メール相談窓口を案内。<strong>体調への影響が出ている場合は労働問題の解決と並行して早めに利用を</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「総合労働相談コーナーのご案内」、法務省「女性の人権に関する相談について」、厚生労働省「こころの耳」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              迷ったら、まず<strong>総合労働相談コーナー</strong>に行く（または電話する）のが現実的です。状況を整理したうえで、行政指導・あっせん・法的手段など次の選択肢を案内してもらえます。「会社と争うかどうか決めていない」段階の相談でも問題ありません。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 2026年法改正 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">2026年10月施行: カスハラ・就活セクハラ対策の義務化</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              2025年6月に成立・公布された改正労働施策総合推進法（令和7年法律第63号）により、<strong>2026年10月1日から、カスタマーハラスメント対策と求職者等へのセクシュアルハラスメント対策が全事業主の義務</strong>になります。施行日は政令（令和8年政令第17号）で定められ、厚生労働省は2026年2月26日に事業主が講ずべき措置の指針を策定しました。
            </p>
            <p>
              これまでの措置義務が「社内の上司・同僚」によるハラスメントを主な対象としていたのに対し、今回の改正で<strong>顧客・取引先など社外の第三者からの著しい迷惑行為</strong>についても、相談体制の整備や被害を受けた労働者への配慮などの雇用管理上の措置が会社に義務付けられます。
            </p>
            <p>
              これはIT業界で働く女性エンジニアにとって特に意味のある変化です。客先常駐や受託開発では、ハラスメントの相手が「自社の人間ではない」ケースが起こりえますが、改正後は<strong>「相手が顧客だから対応できない」という言い訳が通用しなくなります</strong>。常駐先や顧客からの著しい迷惑行為も、自社の窓口に相談し、対応（常駐先との調整・体制変更など）を求められる問題になります。なお前述のとおり、派遣契約の場合は現行法でも派遣先にハラスメント防止措置義務が適用されています。
            </p>
            <p>
              また、就職・転職活動中の人へのセクハラ（いわゆる就活セクハラ）対策も同日から義務化されます。カジュアル面談やOG訪問の場での性的な言動も、企業が防止措置を講じるべき対象です。
            </p>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「令和7年労働施策総合推進法等の一部改正について」、政府広報オンライン「カスハラとは？法改正により義務化されるカスハラ対策」（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec7 転職判断 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職で環境を変える判断基準</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              社内外の窓口を使って解決を目指すことと並んで、<strong>転職して環境そのものを変えることも正当な選択肢</strong>です。「逃げ」ではありません。ハラスメントが続く環境に留まり続けて心身を損なうことのほうが、キャリアにとってはるかに大きな損失です。次のような状態に当てはまるなら、解決を待たずに転職活動を始めることを検討しましょう。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>転職を真剣に検討すべきサイン</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・社内窓口に相談しても調査・対応が行われない、または形だけで状況が変わらない</li>
                <li>・加害者が経営層・組織の中心人物で、社内での是正が構造的に期待できない</li>
                <li>・睡眠・食欲・出社時の体調など、<strong>心身に影響が出始めている</strong>（この場合はまず受診を）</li>
                <li>・相談後にかえって扱いが悪くなった（不利益取扱いとして労働局相談の対象でもあります）</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>転職活動で押さえる3つのポイント</h3>
              <ul className="space-y-3 text-sm text-text-light">
                <li>
                  <strong>① 在職中に動き始める。</strong>収入が途切れない状態で選考を進めるほうが、焦らず企業を選べます。体調的に在職継続が難しい場合は無理せず、退職・休職と並行して進めましょう。なお、ハラスメントが離職理由とハローワークに認められた場合、雇用保険の<strong>特定受給資格者</strong>に該当し給付面で有利になる可能性があります（ここでもステップ1の記録が効きます）。
                </li>
                <li>
                  <strong>② エージェントには「環境要件」として伝える。</strong>面談で被害の詳細を細かく話す必要はありません。「心理的安全性のあるチームで働きたい」「ハラスメント対応体制が整った企業を希望する」「〇〇な環境は避けたい」と<strong>次の職場への要件の形で伝える</strong>と、エージェントは社風・離職率・組織体制といった内部情報で絞り込んでくれます。応募先企業に退職理由を伝えるときも、前職への非難ではなく「働く環境を重視して選んでいる」という前向きな軸に変換するのが定石です。
                </li>
                <li>
                  <strong>③ 次の職場は「制度と実態」で選ぶ。</strong>ハラスメント相談窓口の整備状況、女性管理職の在籍、離職率、口コミでの組織風土の評判などを確認しましょう。見極めの観点は<a href="/articles/women-friendly-companies/" className="underline" style={{ color: "#0891b2" }}>女性が働きやすい企業の見極め方</a>と<a href="/articles/how-to-choose/" className="underline" style={{ color: "#0891b2" }}>転職エージェントの選び方</a>で詳しく解説しています。
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              退職を決めた場合の引き継ぎ・退職交渉の進め方は<a href="/articles/amicable-resignation/" className="underline" style={{ color: "#0891b2" }}>円満退職ガイド</a>を参考にしてください（ハラスメント事案では、円満さよりも自分の安全と権利の確保を優先して構いません）。また、転職後に無理なく働き続けるための環境づくりは<a href="/articles/work-life-balance/" className="underline" style={{ color: "#0891b2" }}>ワークライフバランスガイド</a>にまとめています。
            </p>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績。スピーディーなマッチングで最短2週間での内定実績も。年収交渉力にも定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>女性特化型</span>
              </div>
              <p className="text-sm text-text-light">女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT業界の転職支援に強み。未経験からベテランまで幅広い層の求人を保有。レスポンスの速さと手厚いサポートに定評があります。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 FAQ */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl border overflow-hidden" style={{ borderColor: "#d1dce5" }}>
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50" style={{ color: "#0891b2" }}>
                  <span className="pr-4">{faq.name}</span>
                  <span className="transition-transform group-open:rotate-180">&#9662;</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                  <p className="pt-4">{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* sec10 出典 */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>・出典: 厚生労働省委託事業「令和5年度 職場のハラスメントに関する実態調査」（2026年6月参照）— 過去3年間のハラスメント経験率: パワハラ19.3%、カスハラ10.8%、セクハラ6.3%</li>
            <li>・出典: 厚生労働省「令和6年度 個別労働紛争解決制度の施行状況」（2026年6月参照）— 総合労働相談120万1,881件、「いじめ・嫌がらせ」相談5万4,987件で13年連続最多</li>
            <li>・出典: 厚生労働省「職場におけるハラスメントの防止のために（セクシュアルハラスメント・妊娠・出産等に関するハラスメント・パワーハラスメント）」（2026年6月参照）— 各ハラスメントの定義と事業主の措置義務、不利益取扱いの禁止</li>
            <li>・出典: 厚生労働省「令和7年労働施策総合推進法等の一部改正について」（2026年6月参照）— カスタマーハラスメント対策・求職者等へのセクシュアルハラスメント対策の義務化（2026年10月1日施行）、関係指針（2026年2月26日策定）</li>
            <li>・出典: 厚生労働省「総合労働相談コーナーのご案内」（2026年6月参照）— 都道府県労働局・労働基準監督署内の無料・予約不要の相談窓口</li>
            <li>・出典: 法務省「女性の人権に関する相談について」（2026年6月参照）— みんなの人権110番（0570-003-110）への女性の人権ホットライン統合（2025年10月1日）</li>
          </ul>
          <p className="text-xs text-text-light mt-4">
            ※ 本記事は上記の公的情報に基づく一般的な制度解説であり、個別の事案に対する法的助言ではありません。法制度の適用条件・施行時期の詳細は厚生労働省・法務省の最新情報をご確認のうえ、具体的な対応は公的窓口や弁護士にご相談ください。
          </p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性が活躍する企業ガイド</h3>
              <p className="text-sm text-text-light">働きやすい企業の見つけ方</p>
            </a>
            <a href="/articles/how-to-choose/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>エージェント選び方ガイド</h3>
              <p className="text-sm text-text-light">失敗しない5つのポイント</p>
            </a>
            <a href="/articles/amicable-resignation/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>円満退職ガイド</h3>
              <p className="text-sm text-text-light">退職の切り出し方と引き継ぎの進め方</p>
            </a>
            <a href="/articles/work-life-balance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>ワークライフバランスガイド</h3>
              <p className="text-sm text-text-light">仕事とプライベートの両立</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
