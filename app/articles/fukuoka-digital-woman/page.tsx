import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "福岡県 でじたる女子プロジェクトとは？内容・費用・現在の募集状況【2026年】",
  description:
    "福岡県「でじたる女子（でじたる女性）プロジェクト」（福岡県女性デジタル人材育成・就業支援事業）を公式情報をもとに解説。県内在住の成人女性向けに無料でSAP・RPAを学べた伴走型支援の内容と、2026年7月18日時点の募集状況（公式サイトに「本事業は終了しました」と表示・令和8年度の募集は確認できず）、代わりに使える支援制度まで正直に整理します。",
  alternates: { canonical: "/articles/fukuoka-digital-woman/" },
  openGraph: {
    title: "福岡県 でじたる女子プロジェクトとは？内容・費用・現在の募集状況【2026年】",
    description:
      "福岡県「でじたる女子（でじたる女性）プロジェクト」の事業内容（無料・SAP/RPA・約4か月・PC貸与）と、2026年7月時点の募集状況（公式サイトでは終了と表示・次期は未確認）、代替になる女性向け支援制度を一次情報で解説。",
    url: "https://women-engineer.com/articles/fukuoka-digital-woman/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "福岡県 でじたる女子プロジェクトとは？内容・費用・現在の募集状況【2026年】",
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
    "福岡県「でじたる女子（でじたる女性）プロジェクト」（福岡県女性デジタル人材育成・就業支援事業）の内容・対象者・費用と、2026年7月時点の募集状況（公式サイトでは終了と表示）、代替の支援制度を解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/fukuoka-digital-woman/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "福岡県のでじたる女子プロジェクトは今から申し込めますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2026年7月18日時点では申し込めません。公式サイト（ふくおかでじたる女子コンソーシアム運営）には「本事業は終了しました」と表示されており、直近の第3期（令和7年度）の申込は2025年7月22日で締め切られています。令和8年度（2026年度）の募集情報は、公式サイト・福岡県女性活躍推進課のページのいずれでも確認できませんでした。次期実施の有無は未定のため、最新情報は福岡県の公式サイトで確認してください。",
      },
    },
    {
      "@type": "Question",
      name: "でじたる女子プロジェクトの受講は無料でしたか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "無料でした。福岡県の報道発表（第3期生募集・2025年5月19日）に、費用は無料（通信費等は自己負担）と記載されています。台数限定ながらパソコンの貸与サービスもありました。受講が無料になるのは、福岡県が事業費を負担する県の委託事業（福岡県女性デジタル人材育成・就業支援事業）だったためです（出典: 福岡県報道発表・公式サイト、2026年7月18日確認）。",
      },
    },
    {
      "@type": "Question",
      name: "対象者はどんな条件でしたか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "直近の第3期（令和7年度）では、福岡県内在住の成人女性（18歳以上）で、就労意欲があり、Gmailアドレスを持っていることが条件でした。あわせて福岡県ママと女性の就業支援センターへの登録が必要とされていました。定員は50名（SAPコース35名・RPAコース15名）で、応募多数の場合は選考がありました（出典: 公式サイト・福岡県報道発表、2026年7月18日確認）。",
      },
    },
    {
      "@type": "Question",
      name: "でじたる女子プロジェクトの口コミ・評判は確認できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "第三者による口コミは2026年7月18日時点でほとんど確認できませんでした。当サイトでは架空の口コミは掲載しません。公式サイトに掲載されている実績としては、卒業生コミュニティに約1,000名が参加していること、修了認定試験の合格者へ時給1,500円からの企業案件（テレワーク・ワークシェアリング対応）を紹介する仕組みがあったことが確認できます。修了者数・就業者数などの統計値は公式ページには掲載されていませんでした。",
      },
    },
    {
      "@type": "Question",
      name: "福岡在住の女性が今から使える類似の支援制度はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "全国どこからでも使える制度として、国の教育訓練給付（受講費用の20%〜最大80%を給付）や、経産省ポータル「マナビDX」の無料講座があります。ハローワークの公共職業訓練・求職者支援訓練も選択肢です。地域別の女性向け支援は当サイトの「女性向けITスキル支援マップ」で整理しています。福岡県の最新の女性就業支援は、福岡県ママと女性の就業支援センターや県の公式サイトで確認してください。",
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
              { label: "福岡県のでじたる女子プロジェクト" },
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
              福岡県の「でじたる女子プロジェクト」とは？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                事業内容・費用と現在の募集状況・代わりに使える制度【2026年】
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
                <span><strong>どんな事業？</strong> 福岡県の「女性デジタル人材育成・就業支援事業」の通称で、公式サイトでは「福岡県でじたる女性プロジェクト」と表記されます。県内在住の成人女性が<strong>無料</strong>で約4か月、ビジネススキル＋SAPまたはRPAを学び、修了後の就労マッチングまで一体で支援する伴走型事業でした（受託: ふくおかでじたる女子コンソーシアム＝NPO法人AIP＋株式会社MAIA）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>今申し込める？</strong> <strong>申し込めません。</strong>公式サイトには「本事業は終了しました」と表示されており（2026年7月18日確認）、令和8年度（2026年度）の募集情報は確認できませんでした。次期実施は未定です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>代わりは？</strong> 全国対象の<a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付</a>や<a href="/articles/manabi-dx/" className="underline" style={{ color: "#7c3a55" }}>マナビDX</a>、他自治体の類似事業（<a href="/articles/women-it-support-map/" className="underline" style={{ color: "#7c3a55" }}>支援マップ</a>参照）が候補になります。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://digital-women.maia.co.jp/fukuoka/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>福岡県でじたる女性プロジェクト 公式サイト</a>・<a href="https://www.pref.fukuoka.lg.jp/press-release/degital-josei.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>福岡県報道発表（第3期生募集）</a>（いずれも2026年7月18日確認）
            </p>
          </div>

          <div className="rounded-xl p-6 mt-4" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>最新の募集状況（2026年7月18日 公式サイト確認）</h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span>公式サイトのタイトル直下と申込セクションに<strong>「本事業は終了しました」</strong>と明記されています。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span>直近の募集は<strong>第3期（令和7年度）</strong>: 申込期間2025年5月20日〜7月22日・定員50名。この申込はすでに終了しています。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>令和8年度（2026年度）の募集情報は確認できませんでした。</strong>福岡県女性活躍推進課の新着情報にも本事業の掲載はありません（2026年7月18日確認）。次期実施の有無は公式サイトで要確認です。</span></li>
            </ul>
            <p className="text-xs text-text-light mt-3">
              ※今後、後継事業が発表される可能性があります。最新情報は<a href="https://www.pref.fukuoka.lg.jp/soshiki/5200416/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>福岡県女性活躍推進課</a>・<a href="https://digital-women.maia.co.jp/fukuoka/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>公式サイト</a>でご確認ください。
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. でじたる女子（でじたる女性）プロジェクトとは</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 事業概要表（直近・第3期の内容）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 対象者だった方の条件</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 講座内容（ビジネススキル＋SAP/RPA）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 費用と支援内容（無料・PC貸与・伴走支援）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 募集状況と申込の流れ（参考: 第3期）</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 注意点と代わりに使える支援制度</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">でじたる女子（でじたる女性）プロジェクトとは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「でじたる女子プロジェクト」は、福岡県が実施してきた<strong>「福岡県女性デジタル人材育成・就業支援事業」</strong>の通称です。公式サイトでは「福岡県でじたる女性プロジェクト」と表記されており、県の報道発表等では「でじたる女子」の表記も使われています。福岡県から事業を受託した「ふくおかでじたる女子コンソーシアム」（全体統括: 特定非営利活動法人AIP／eラーニング提供: 株式会社MAIA）が運営してきました（公式サイトにて2026年7月18日確認）。
            </p>
            <p>
              福岡県の報道発表によると、県は令和5年度から子育て女性等を対象に「就労に直結するITスキルの研修」と「スキル習得後に就労可能な仕事とのマッチングの機会」を一体型で提供する伴走型の就労支援として本事業を実施してきました。研修は24時間いつでも自宅等で受講でき、研修終了後はキャリアヒアリングを経て、生活実態に合わせて柔軟な働き方を選択できる就労機会を提供する、という設計です。
            </p>
            <p>
              ただし冒頭のとおり、<strong>公式サイトには「本事業は終了しました」と表示されており、2026年7月18日時点で申し込むことはできません</strong>。本記事では、今後の再開・後継事業に備えた参考情報として直近（第3期・令和7年度）の内容を整理し、あわせて今から使える代替の支援制度を紹介します。福岡でのIT転職事情全般は<a href="/articles/fukuoka/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアの福岡転職ガイド</a>もあわせてどうぞ。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 概要表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">事業概要表（直近・第3期の内容）</h2>
          <p className="text-sm text-text-light mb-4">以下は直近の第3期（令和7年度）の公式情報です。募集は終了しています。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>内容（公式情報・第3期）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>正式名称</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>福岡県女性デジタル人材育成・就業支援事業（通称: 福岡県でじたる女性プロジェクト／でじたる女子プロジェクト。主催: 福岡県／受託: ふくおかでじたる女子コンソーシアム＝NPO法人AIP＋株式会社MAIA）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>対象者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>福岡県内在住の成人女性（18歳以上）で就労意欲のある方。Gmailアドレス保有、福岡県ママと女性の就業支援センターへの登録が必要</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>講座構成</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>ビジネススキルプログラム（全員必修・約35時間）＋ITスキルプログラム（選択制: 業務知識＋SAP基礎コース約140時間／業務改善＋RPA開発コース約160時間）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>形式・期間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約4か月。eラーニング中心（24時間いつでも自宅等で受講可）＋集合研修3回（計13時間）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>定員</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>50名（SAPコース35名・RPAコース15名）。定員超過時は選考</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>費用</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>無料（通信費等は自己負担）。パソコン貸与サービスあり（台数限定）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>直近の日程</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>第3期: 申込期間2025年5月20日〜7月22日／受講期間は令和7年9月〜令和8年1月の約4か月（募集終了）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>修了後の支援</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>修了認定試験の合格者に企業案件を紹介（時給1,500円〜・テレワーク／ワークシェアリング対応）、卒業生コミュニティ（約1,000名参加）へ無料参加</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>現在の状況</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}><strong>公式サイトに「本事業は終了しました」と表示（2026年7月18日確認）。</strong>令和8年度の募集情報は未確認</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://digital-women.maia.co.jp/fukuoka/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>公式サイト</a>・<a href="https://www.pref.fukuoka.lg.jp/press-release/degital-josei.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>福岡県報道発表「第3期生を募集します」（2025年5月19日）</a>（いずれも2026年7月18日確認）
          </p>
        </div>
      </section>

      {/* sec3 対象者 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">対象者だった方の条件</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              第3期（令和7年度）の公式情報では、次の条件が示されていました（2026年7月18日確認）。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">1.</span><span><strong>福岡県内在住の成人女性（18歳以上）</strong>で、就労の意向がある方</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">2.</span><span><strong>Gmailアドレスを持っている方</strong>（受講システムの利用に必要）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">3.</span><span><strong>福岡県ママと女性の就業支援センターへの登録</strong>が必要</span></li>
            </ul>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              事業の背景として、県の報道発表では「子育て女性等を対象に」した伴走型就労支援と説明されており、時間的・場所的制約のある方でも受講しやすいよう、eラーニング中心の設計になっていました。県外在住者は対象外です。全国の地域別支援は<a href="/articles/women-it-support-map/" className="underline" style={{ color: "#7c3a55" }}>女性向けITスキル支援マップ</a>で確認できます。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 講座内容 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">講座内容（ビジネススキル＋SAP/RPA）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              カリキュラムは全員必修のビジネススキルプログラムと、選択制のITスキルプログラムの2階建てでした。学習期間は約4か月です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ビジネススキルプログラム（全員必修・約35時間）</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>集合研修3回（計13時間）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>eラーニング（約22時間）</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">就労に向けた土台となるビジネススキルを先に固める構成です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ITスキルプログラム（いずれか選択）</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>業務知識＋SAP基礎コース</strong>（約140時間・定員35名）— 企業の基幹システムとして広く使われるSAPの基礎</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>業務改善＋RPA開発コース</strong>（約160時間・定員15名）— 定型業務を自動化するRPAの開発スキル</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">いずれも在宅・リモートでの就労につながりやすい業務システム系スキルです。</p>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>学習を支える伴走支援</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Slackでの伴走支援（24時間質問受付）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>月1回のオンライン対面型相談会、先輩卒業生によるサポート</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>受講生同士の交流会「ざっくばらん会」</span></li>
            </ul>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://digital-women.maia.co.jp/fukuoka/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>公式サイト</a>（2026年7月18日確認）
          </p>
        </div>
      </section>

      {/* sec5 費用と支援 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">費用と支援内容（無料・PC貸与・伴走支援）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              受講は<strong>無料</strong>でした（福岡県報道発表に明記・通信費等は自己負担）。台数限定ながらパソコンの貸与サービスもあり、機材面のハードルが低い設計だった点が特徴です。
            </p>
          </div>
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>修了後の就労支援（公式サイト記載）</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>案件紹介</strong> — 修了認定試験の合格者に企業案件を紹介。時給1,500円〜（経験により昇給可能）、テレワーク・ワークシェアリング対応と案内されていました。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>卒業生コミュニティ</strong> — 約1,000名が参加するコミュニティに無料で参加できるとされていました。</span></li>
            </ul>
            <p className="text-xs text-text-light mt-3">
              ※修了者数・就業者数などの統計値は公式ページに掲載されていません（2026年7月18日時点）。託児サービスに関する記載も確認できませんでした。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 募集状況と申込の流れ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">募集状況と申込の流れ（参考: 第3期）</h2>
          <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: "#fffaf4", border: "2px solid #c15f47" }}>
            <p className="text-sm leading-relaxed text-text-light">
              <strong style={{ color: "#c15f47" }}>2026年7月18日時点で募集はありません。</strong>公式サイトに「本事業は終了しました」と表示されており、令和8年度の実施・募集は確認できませんでした。以下は再開時の参考として、第3期（令和7年度）の申込フローです。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "オンライン説明会に参加（必須）", "オンライン説明会への参加、またはアーカイブ動画の視聴が申込の前提とされていました。"],
              ["STEP2", "申込フォームから申請", "公式サイトの申込フォームに必要情報を入力します。福岡県ママと女性の就業支援センターへの登録も必要でした。"],
              ["STEP3", "選考・合否発表", "定員（50名）超過時は選考が実施され、合格後に受講意思の確認がありました。第3期は申込2025年5月20日〜7月22日、選考を経て9月開講のスケジュールでした。"],
              ["STEP4", "受講（約4か月）→修了認定試験→案件紹介", "ビジネススキル＋選択コース（SAP/RPA）を受講し、修了認定試験の合格者に企業案件が紹介される流れでした。"],
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
            出典: 公式サイト・福岡県報道発表（2026年7月18日確認）。再開時は条件・フローが変わる可能性があります。
          </p>
        </div>
      </section>

      {/* sec7 注意点と代替 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">注意点と代わりに使える支援制度</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#c15f47" }}>1. 「無料で学べる」情報の日付に注意</h3>
              <p className="text-sm text-text-light leading-relaxed">
                本事業を「現在募集中」として紹介している古い記事・SNS投稿が残っている場合がありますが、公式サイトは「本事業は終了しました」としています（2026年7月18日確認）。申込を検討する場合は必ず公式サイト・福岡県の発表で日付を確認してください。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#c15f47" }}>2. 口コミ・評判はまだ少ない</h3>
              <p className="text-sm text-text-light leading-relaxed">
                第三者による口コミ・評判は2026年7月18日時点でほとんど確認できませんでした。当サイトでは架空の口コミは掲載しません。公式発表で確認できる実績は、卒業生コミュニティ約1,000名参加、修了認定試験合格者への時給1,500円〜の案件紹介という仕組みの記載です（修了者数等の統計値は非掲載）。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#7c3a55" }}>3. 今から使える代替の支援制度</h3>
              <ul className="space-y-2 text-sm text-text-light mt-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付（国）</a> — 厚労省指定講座の受講費用の20%〜最大80%を給付。全国どこからでも利用可</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><a href="/articles/manabi-dx/" className="underline" style={{ color: "#7c3a55" }}>マナビDX（経産省ポータル）</a> — 無料のデジタル講座を検索して学べる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><a href="/articles/hello-training-it/" className="underline" style={{ color: "#7c3a55" }}>ハロートレーニング（公共職業訓練）</a> — 求職中ならIT分野の訓練を原則無料で受講できる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><a href="/articles/women-it-support-map/" className="underline" style={{ color: "#7c3a55" }}>女性向けITスキル支援マップ</a> — 東京都・埼玉県など他自治体の女性向け事業を一覧で比較</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed mt-3">
                福岡県の女性就業支援の窓口としては「福岡県ママと女性の就業支援センター」が公式情報で言及されています。最新の県事業は<a href="https://www.pref.fukuoka.lg.jp/soshiki/5200416/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>福岡県女性活躍推進課</a>のページで確認してください。
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
            <li>出典: 福岡県でじたる女性プロジェクト 公式サイト（ふくおかでじたる女子コンソーシアム） <a href="https://digital-women.maia.co.jp/fukuoka/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://digital-women.maia.co.jp/fukuoka/</a>（2026年7月18日確認）</li>
            <li>出典: 福岡県報道発表「『福岡県でじたる女性プロジェクト』第３期生を募集します！」（2025年5月19日） <a href="https://www.pref.fukuoka.lg.jp/press-release/degital-josei.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.pref.fukuoka.lg.jp/press-release/degital-josei.html</a>（2026年7月18日確認）</li>
            <li>出典: 福岡県女性活躍推進課 <a href="https://www.pref.fukuoka.lg.jp/soshiki/5200416/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.pref.fukuoka.lg.jp/soshiki/5200416/</a>（2026年7月18日確認・本事業の令和8年度掲載なし）</li>
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

      {/* 次のステップ（橋渡し導線） */}
      <section className="py-8" style={{ backgroundColor: "#efe3d8" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#7c3a55" }}>受講の前後で迷ったら（次のステップ）</h2>
          <div className="grid gap-3 md:grid-cols-3">
            <a href="/articles/training-not-selected/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold text-sm mb-1" style={{ color: "#7c3a55" }}>選考に落ちたら？</h3><p className="text-xs text-text-light">無料の代替ルートと研修付き転職という選択肢</p></a>
            <a href="/articles/training-after-graduation/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold text-sm mb-1" style={{ color: "#7c3a55" }}>修了後の転職活動ガイド</h3><p className="text-xs text-text-light">進路パターンとエージェントの活用法</p></a>
            <a href="/articles/learn-vs-transfer/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold text-sm mb-1" style={{ color: "#7c3a55" }}>先に学ぶ vs 転職して学ぶ</h3><p className="text-xs text-text-light">2つのルートを費用・時間で比較</p></a>
          </div>
        </div>
      </section>

    </>
  );
}
