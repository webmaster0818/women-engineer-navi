import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "神奈川県 女性のためのデジタルスキル育成講座を解説｜対象・費用・申込【2026年】",
  description:
    "神奈川県「女性のためのデジタルスキル育成講座」（かながわjob就業支援事業）を公式情報をもとに解説。県内在住または県内就業を希望する女性（年齢不問）が対象、受講料無料。e-ラーニングコース（Webデザイン/マーケティング/事務・実務/IT実務基礎の4コース・2か月）とグループ講座（Webデザイン実践・全10回）の内容、募集スケジュール、申込方法を一次情報で整理します。",
  alternates: { canonical: "/articles/kanagawa-women-digital/" },
  openGraph: {
    title: "神奈川県 女性のためのデジタルスキル育成講座を解説｜対象・費用・申込【2026年】",
    description:
      "神奈川県「女性のためのデジタルスキル育成講座」の対象者（県内在住・県内就業希望の女性、年齢不問）、e-ラーニング4コースとグループ講座の内容、費用（受講料無料・通信費等のみ自己負担）、募集スケジュールと申込方法を公式情報をもとに解説。",
    url: "https://women-engineer.com/articles/kanagawa-women-digital/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "神奈川県 女性のためのデジタルスキル育成講座を解説｜対象・費用・申込【2026年】",
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
    "神奈川県「女性のためのデジタルスキル育成講座」の対象者・講座内容（e-ラーニング4コース/グループ講座）・費用（受講料無料）・募集スケジュール・申込方法を公式情報をもとに解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/kanagawa-women-digital/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "神奈川県の女性のためのデジタルスキル育成講座は本当に無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "受講料は無料です。公式サイトのよくある質問に「通信費等はご負担いただきますが、受講料は無料です」と明記されています。ただし、受講にはPC・タブレット・スマートフォン等の機器とインターネット環境を自分で用意する必要があります。グループ講座はデザイン制作やポートフォリオ作成があるため、PCの用意が推奨されています（出典: 神奈川県公式サイト、2026年7月18日確認）。",
      },
    },
    {
      "@type": "Question",
      name: "神奈川県外に住んでいても受講できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "対象は「神奈川県在住または県内で就業を希望する女性（年齢不問）」です。県外在住でも、神奈川県内での就業を希望する方であれば対象に含まれます。このほか「早期に就職・副業等に向けた就職活動が可能な方」「PCをお持ちでオンライン受講が可能な環境の方」という要件があります。判断に迷う場合は、かながわjobイベント事務局（0120-703-785、平日9:30〜18:00）に確認してください（出典: 神奈川県公式サイト、2026年7月18日確認）。",
      },
    },
    {
      "@type": "Question",
      name: "年齢制限はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ありません。公式サイトのよくある質問に「年齢制限はありません。幅広い年齢層の方に受講いただいています」と明記されており、対象者の要件にも「年齢不問」と記載されています。原則39歳以下という年齢要件がある東京都の女性ITエンジニア育成事業とは異なる点です（出典: 神奈川県公式サイト、2026年7月18日確認）。",
      },
    },
    {
      "@type": "Question",
      name: "e-ラーニングコースとグループ講座は両方申し込めますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "両方申し込めます。公式サイトに「両方のお申し込みが可能です」と明記されています。ただし、いずれも公正な選考を実施のうえ受講者が決定されます。e-ラーニングコースは一人1コースのみの申し込みで、グループ講座は書類選考と面接があります。なお、雇用保険受給に使う就職活動証明書はグループ講座の受講修了後のみ発行され、e-ラーニングは発行対象外です（出典: 神奈川県公式サイト、2026年7月18日確認）。",
      },
    },
    {
      "@type": "Question",
      name: "働きながら（在職中）でも受講できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイトの対象者要件に在職中の可否は明記されていませんが、「早期に就職・副業等に向けた就職活動が可能な方」が要件とされています。副業を目指す方も対象に含まれる書き方ですが、いずれの講座も選考があるため、在職中で受講を検討する場合は事前にかながわjobイベント事務局（0120-703-785）へ確認するのが確実です。在職中でも受講できると公式に明記されている埼玉県の女性のデジタル人材育成推進事業と比べると、この点は公式サイトで要確認です（2026年7月18日確認時点）。",
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
              { label: "神奈川県の女性のためのデジタルスキル育成講座" },
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
              神奈川県の「女性のためのデジタルスキル育成講座」とは？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                対象者・費用・e-ラーニングとグループ講座の内容・申込方法【2026年】
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
                <span><strong>どんな事業？</strong> 神奈川県が「かながわjob」就業支援事業の一環として実施する女性向けデジタルスキル講座。<strong>e-ラーニングコース</strong>（2か月・Webデザイン/マーケティング/事務・実務/IT実務基礎の4コース）と<strong>グループ講座</strong>（Webデザイン実践・全10回）の2本立てで、修了後の就職・副業に向けたサポートまでつながります（運営受託: パーソルビジネスプロセスデザイン株式会社）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>誰が対象？</strong> 神奈川県在住または県内で就業を希望する女性。<strong>年齢不問</strong>です。早期に就職・副業等に向けた就職活動が可能な方、PCを持ちオンライン受講が可能な環境の方という要件があります。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>無料？</strong> 受講料は無料。公式FAQに「通信費等はご負担いただきますが、受講料は無料です」と明記されています。PC等の機器・通信環境は自己負担です。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://www.pref.kanagawa.jp/osirase/0607/kanagawa-gosetsu/digital_woman/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>神奈川県「女性のためのデジタルスキル育成講座」公式ページ</a>（2026年7月18日確認）
            </p>
          </div>

          <div className="rounded-xl p-6 mt-4" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>最新の募集状況（2026年7月18日 公式サイト確認）</h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>e-ラーニングコース第1回:</strong> 申込は終了（申込期間: 5月22日〜6月22日）。現在は受講期間中（7月1日〜8月31日）です。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>e-ラーニングコース第2回:</strong> 申込期間は<strong>8月10日〜9月10日</strong>（受講期間: 9月18日〜11月17日）。第3回は申込10月23日〜11月24日（受講12月3日〜2月2日）です。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>グループ講座（Webデザイン実践）:</strong> 申込期間は<strong>8月25日〜10月5日</strong>。講座は10月28日〜11月27日の全10回で、定員30名程度（書類選考・面接あり）です。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span>つまり2026年7月18日時点で申込受付中の枠はなく、<strong>次の申込開始はe-ラーニング第2回の8月10日</strong>です。</span></li>
            </ul>
            <p className="text-xs text-text-light mt-3">
              ※募集状況・日程は変動します。最新情報は必ず<a href="https://www.pref.kanagawa.jp/osirase/0607/kanagawa-gosetsu/digital_woman/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>公式ページ</a>でご確認ください。
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 女性のためのデジタルスキル育成講座とは</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 事業概要表（対象者・期間・費用・内容・申込）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 対象者・受講条件</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 講座内容（e-ラーニング4コース／グループ講座）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 費用と就職サポート</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 募集スケジュールと申込の流れ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 申込前の注意点（口コミ・評判の現状も正直に）</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性のためのデジタルスキル育成講座とは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「女性のためのデジタルスキル育成講座」は、神奈川県（主催: 産業労働局 労働部雇用労政課）が就業支援事業「かながわjob」の一環として実施する、女性向けのデジタルスキル講座です。公式サイトには「当事業は神奈川県より委託を受け、パーソルビジネスプロセスデザイン株式会社が運営しています」と記載されており、講座の運営・問い合わせ窓口は「かながわjobイベント事務局」が担います（公式ページにて2026年7月18日確認）。
            </p>
            <p>
              講座は目的や関心に応じた2つのコースで構成されています。ひとつは<strong>e-ラーニングコース</strong>（2か月間・録画配信を各自視聴・全4コースから一人1コース選択）、もうひとつは<strong>グループ講座</strong>（Webデザイン実践講座・オンライン授業・全10回）です。両方に申し込むことも可能ですが、いずれも「公正な選考を実施のうえ受講者を決定します」とされており、申し込めば必ず受講できるわけではない点が特徴です。
            </p>
            <p>
              公式サイトではグループ講座について「学ぶだけで終わらない、就業までを支える実践プログラム」と説明されており、受講後は神奈川県の就業支援施設でのキャリア相談や、就職支援イベント「かながわjobフェア」への参加など、就職・副業に向けたサポートにつながる設計です。
            </p>
            <p>
              なお、東京都の<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>（6か月・エンジニア職向け）や埼玉県の<a href="/articles/saitama-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性のデジタル人材育成推進事業</a>（オンデマンド講座・在職中も可）とは、対象地域も内容も異なる別の事業です。全国の類似事業は<a href="/articles/women-it-support-map/" className="underline" style={{ color: "#7c3a55" }}>女性向けITスキル支援マップ</a>で整理しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 概要表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">事業概要表（対象者・期間・費用・内容・申込）</h2>
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
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>正式名称</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>女性のためのデジタルスキル育成講座（かながわjob就業支援事業／主催: 神奈川県 産業労働局 労働部雇用労政課／運営受託: パーソルビジネスプロセスデザイン株式会社）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>対象者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>神奈川県在住または県内で就業を希望する女性（年齢不問）／早期に就職・副業等に向けた就職活動が可能な方／PCをお持ちでオンライン受講が可能な環境の方</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>講座構成</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>e-ラーニングコース（2か月・Web系/オフィス系 全4コース・各30時間程度・一人1コース）／グループ講座（Webデザイン実践講座・全10回・1日4時間程度）。両方の申込可（各選考あり）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>形式</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>e-ラーニング: オンライン視聴（授業の録画配信を各自受講）。グループ講座: オンライン授業＋事前ガイダンスは対面</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>2026年度日程</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>e-ラーニング: 第1回7/1〜8/31・第2回9/18〜11/17・第3回12/3〜2/2（各2か月）。グループ講座: 10/28〜11/27の全10回（事前ガイダンス10/23）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>定員・選考</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>e-ラーニング: 申込時の回答をもとに選考（定員の記載なし）。グループ講座: 30名程度（書類選考・面接あり）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>費用</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>受講料は無料（「通信費等はご負担いただきますが、受講料は無料です」）。PC等の機器・インターネット環境は自己負担</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>就職活動証明書</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>グループ講座は受講修了後に発行。e-ラーニングは発行対象外</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>就職支援</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>神奈川県の就業支援施設でのキャリア相談（無料個別相談）、セミナー、就職支援イベント「かながわjobフェア」参加など。グループ講座は11/16のかながわjobフェア就職面接会への参加が日程に組み込まれています</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>申込方法</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>公式ページの申込フォームからオンライン申請（e-ラーニングは事前登録→講座説明動画視聴→本申込の流れ）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>問い合わせ</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>かながわjobイベント事務局 0120-703-785（平日9:30〜18:00）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://www.pref.kanagawa.jp/osirase/0607/kanagawa-gosetsu/digital_woman/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>神奈川県「女性のためのデジタルスキル育成講座」公式ページ</a>（2026年7月18日確認）。日程・定員・募集状況は変わるため、必ず公式ページで最新情報を確認してください。
          </p>
        </div>
      </section>

      {/* sec3 対象者・要件 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">対象者・受講条件</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              公式ページでは「次の全ての要件を満たす方」が対象と案内されています（2026年7月18日確認）。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">1.</span><span><strong>神奈川県在住または県内で就業を希望する女性（年齢不問）</strong> — 県外在住でも県内就業希望であれば対象に含まれます。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">2.</span><span><strong>早期に就職・副業等に向けた就職活動が可能な方</strong></span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">3.</span><span><strong>PCをお持ちでオンライン受講が可能な環境の方</strong> — e-ラーニングの視聴のみであればスマートフォン・タブレットも使えますが、一部PCブラウザ専用のサービスがあります。グループ講座はデザイン制作・ポートフォリオ作成があるためPCの用意が求められます。</span></li>
            </ul>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              グループ講座はこれに加えて<strong>原則全日程に参加できること</strong>（11月16日の就職面接会を含む）が要件で、書類選考と面接（原則対面・平日10:00〜17:00）があります。
            </p>
            <p>
              年齢について公式FAQは「年齢制限はありません。幅広い年齢層の方に受講いただいています」としており、原則39歳以下の年齢要件がある東京都の<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>とは異なります。一方、在職中の方が受講できるかどうかは公式ページに明記がなく、「早期に就職・副業等に向けた就職活動が可能な方」という要件との兼ね合いになるため、該当する方は事務局へ事前確認してください。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 講座内容 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">講座内容（e-ラーニング4コース／グループ講座）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              e-ラーニングコースは2か月間・各コース30時間程度の録画配信で、一人1コースのみ申し込めます。公式FAQでは「週5時間程度を目安とし、ご自身で2か月間の学習計画を立てていただく必要があります」とされ、学習中の質問はサポート窓口に可能、期間中1回のオンライン交流会もあります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Aコース: Webデザインコース</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>生成AIやCanva、UIデザインツールを活用</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Web・UI・資料・ビジュアル制作を実務視点で学ぶ</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">Webデザイン補助・UI補助を目指す方向けのコースです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Bコース: マーケティングコース</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>デジタルマーケティングの全体像を理解</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>SNS・SEO・広告・コンテンツ・メール施策を通じて「誰に、何を、どう届けるか」を考える力を習得</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">マーケティング補助・Web担当を目指す方向けのコースです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cコース: 事務・実務コース</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Excel・Word・PowerPointの実務スキル</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Microsoft Copilotを活用した業務効率化・資料作成・情報整理</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">一般事務・営業事務・IT事務を目指す方向けのコースです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dコース: IT実務基礎コース</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Excel VBAによる業務自動化、Javaによる業務システムの基礎</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ITパスポートレベルのIT全体知識で「ITの言葉で説明できる力」を習得</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">IT事務、運用補助、社内SE補助を目指す方向けのコースです。IT系資格の入口は<a href="/articles/cert-itpassport/" className="underline" style={{ color: "#7c3a55" }}>ITパスポート試験ガイド</a>も参考にしてください。</p>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>グループ講座: Webデザイン実践講座（全10回・定員30名程度）</h3>
            <p className="text-sm text-text-light leading-relaxed mb-4">
              CanvaとWordPressを中心に、バナー等の制作、WordPressでのサイト構築（環境構築〜テーマ・プラグイン設定）、生成AIを使ったデザイン・記事構成案の演習、そして就職活動に使える<strong>ポートフォリオ作成</strong>までを10月28日〜11月27日の全10回（1日4時間程度・オンライン授業）で行います。事前ガイダンス（10月23日）は対面実施、11月16日には就職支援イベント「かながわjobフェア」の就職面接会への参加が組み込まれています。
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Canva徹底活用（基礎編）・ブランディングを意識した制作ワーク</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>WordPress入門〜テーマ選定・カスタマイズ・必須プラグイン（セキュリティ、SEO、フォーム）の導入</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>生成AI・コンテンツ戦略、ポートフォリオ作成とブラッシュアップ、個人ポートフォリオの講評</span></li>
            </ul>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: 公式ページのコース別ガイド・グループ講座カリキュラム（2026年7月18日確認）
          </p>
        </div>
      </section>

      {/* sec5 費用と支援 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">費用と就職サポート</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              受講料は<strong>無料</strong>です。公式FAQに「通信費等はご負担いただきますが、受講料は無料です」と明記されています。自己負担になるものも正確に押さえておきましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>無料のもの</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>受講料（e-ラーニングコース・グループ講座とも）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>就職・副業に向けた個別相談などのサポート（公式FAQに「無料の個別相談をご利用ください」と記載）</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>自己負担のもの</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>通信費等</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>PC・タブレット・スマートフォン等の機器とインターネット環境（受講の必須要件）</span></li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>受講後の就職サポート</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>キャリア相談</strong> — 神奈川県の就業支援施設で無料の個別相談を利用できます。「何から始めたらいいかわからない」「書類の書き方が分からない」といった相談が例示されています。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>セミナー・面接会</strong> — 就職支援イベント「かながわjobフェア」等に参加できます。グループ講座は11月16日の就職面接会参加が日程に組み込まれています。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>就職活動証明書</strong> — 雇用保険の受給に使う就職活動証明書はグループ講座の受講修了後に発行されます（e-ラーニングは対象外）。</span></li>
            </ul>
            <p className="text-xs text-text-light mt-3">
              ※託児サービスに関する記載は公式ページで確認できませんでした（2026年7月18日時点）。必要な方は、かながわjobイベント事務局（0120-703-785）へ事前に確認してください。
            </p>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            なお、本講座は受講すれば就職が保証される制度ではありません。修了後の就職・転職活動では、公的サポートに加えて民間の転職エージェント・転職サイトを併用すると求人の選択肢が広がります。自分に合うサービスは<a href="/diagnosis/" className="underline" style={{ color: "#7c3a55" }}>エージェント無料診断</a>や<a href="/ranking/" className="underline" style={{ color: "#7c3a55" }}>おすすめランキング</a>を参考にしてください。
          </p>
        </div>
      </section>

      {/* sec6 募集スケジュールと申込の流れ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">募集スケジュールと申込の流れ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              e-ラーニングコースは年3回の募集です（2026年度: 第1回申込5/22〜6/22・第2回申込8/10〜9/10・第3回申込10/23〜11/24）。申込は「事前登録→講座説明動画の視聴→本申込」の流れで、申込時の回答をもとに選考が行われます。以下はe-ラーニングコースのステップです。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "事前登録", "公式ページの申込フォームから事前登録すると、メールで動画視聴URLと本申込用URLが届きます。"],
              ["STEP2", "講座説明動画の視聴＋本申込", "講座説明用の動画を視聴したうえで本申込します。コースは一人1コースのみ選択できます。"],
              ["STEP3", "選考・受講決定通知", "申込時の回答を総合的に判断のうえ受講可否が決定され、受講可否に関わらず開始日の数日前までに通知されます（選考結果の内容に関する問い合わせには回答されません）。"],
              ["STEP4", "受講（2か月）", "録画配信を各自のペースで視聴します。週5時間程度を目安に学習計画を立て、わからない点はサポート窓口に質問できます。期間中1回、受講者同士のオンライン交流会があります。"],
              ["STEP5", "受講修了→キャリア相談・就職支援イベントへ", "修了後は神奈川県の就業支援施設でのキャリア相談や、随時開催の就職支援イベントに参加し、就職・副業を目指します。"],
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
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>グループ講座の選考ステップ（申込期間: 8/25〜10/5）</h3>
            <p className="text-sm text-text-light leading-relaxed">
              申込→一次選考（申込から5営業日以内に結果通知）→二次選考（面接・原則対面・平日10:00〜17:00）→結果通知（10/16まで）→参加意向回答（10/21まで）→事前ガイダンス（対面・10/23）→受講（全10回）という流れです。受講期間中は進捗フォロー等を目的とした面談も実施されます。
            </p>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: 公式ページ「申し込みから受講開始までの流れ」「申し込み・受講・就活サポートの流れ」（2026年7月18日確認）。申込期間・日程は変動するため、必ず<a href="https://www.pref.kanagawa.jp/osirase/0607/kanagawa-gosetsu/digital_woman/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>公式ページ</a>で最新情報を確認してください。
          </p>
        </div>
      </section>

      {/* sec7 注意点 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">申込前の注意点（口コミ・評判の現状も正直に）</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#c15f47" }}>1. 申し込めば必ず受講できるわけではない</h3>
              <p className="text-sm text-text-light leading-relaxed">
                e-ラーニング・グループ講座とも選考があります。特にグループ講座は定員30名程度で書類選考・面接（原則対面）があり、原則全日程参加が要件です。日程が合わない場合は、自分のペースで学べるe-ラーニングコースや、オンデマンド型の<a href="/articles/saitama-women-training/" className="underline" style={{ color: "#7c3a55" }}>埼玉県の事業</a>（県内在住・就業希望者向け）など他の選択肢も検討しましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#c15f47" }}>2. 申込期間が限られている</h3>
              <p className="text-sm text-text-light leading-relaxed">
                2026年7月18日時点では申込受付中の枠がなく、次はe-ラーニング第2回（8月10日〜9月10日）、グループ講座（8月25日〜10月5日）です。申込期間を逃すと次の回まで待つことになるため、受講したい方はスケジュールを控えておきましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#c15f47" }}>3. エンジニア職への転職を直接目指す訓練ではない</h3>
              <p className="text-sm text-text-light leading-relaxed">
                各コースが想定する出口は「Webデザイン補助」「マーケティング補助」「一般事務・IT事務」「IT事務・運用補助・社内SE補助」などで、プログラマー・エンジニア職への就職を直接目指す訓練（例: 東京都の<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>）とは位置づけが異なります。エンジニア職を目指す場合は、国の<a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付</a>の活用も含めて比較検討してください。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-base font-bold mb-2" style={{ color: "#c15f47" }}>4. 口コミ・評判はまだ少ない</h3>
              <p className="text-sm text-text-light leading-relaxed">
                本講座について、第三者による口コミ・評判は2026年7月18日時点でほとんど確認できませんでした。修了者数などの公表実績値も公式ページには掲載されていません。公式FAQに「幅広い年齢層の方に受講いただいています」との記載がある程度です。当サイトでは架空の口コミは掲載しない方針のため、検討の際は公式ページの一次情報と、無料の個別相談・講座説明動画（申込前に視聴する流れ）で確認することをおすすめします。
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
            <li>出典: 神奈川県「女性のためのデジタルスキル育成講座」公式ページ（かながわjob） <a href="https://www.pref.kanagawa.jp/osirase/0607/kanagawa-gosetsu/digital_woman/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.pref.kanagawa.jp/osirase/0607/kanagawa-gosetsu/digital_woman/</a>（2026年7月18日確認）</li>
            <li>出典: 神奈川県「かながわjob（就業支援）」トップページ <a href="https://www.pref.kanagawa.jp/osirase/0607/kanagawa-gosetsu/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.pref.kanagawa.jp/osirase/0607/kanagawa-gosetsu/index.html</a>（2026年7月18日確認）</li>
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
