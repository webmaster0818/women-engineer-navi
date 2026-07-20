import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "埼玉県 女性のデジタル人材育成推進事業を解説｜対象・費用・申込【2026年】",
  description:
    "埼玉県「女性のデジタル人材育成推進事業」を公式情報をもとに解説。埼玉県在住または県内就業を希望する女性が対象（在職中も受講可）、全講座オンライン・受講料無料。基礎・応用講座（データ分析/WEB/CAD/Office）、実践講座（WordPress・生成AI・Figma等）、自営型テレワーク講座の内容から申込方法、東京都事業・教育訓練給付との違いまで一次情報で整理します。",
  alternates: { canonical: "/articles/saitama-women-training/" },
  openGraph: {
    title: "埼玉県 女性のデジタル人材育成推進事業を解説｜対象・費用・申込【2026年】",
    description:
      "埼玉県「女性のデジタル人材育成推進事業」の対象者（県内在住・県内就業希望の女性、在職中も可）、講座内容、費用（受講料無料・通信費のみ自己負担）、申込方法を公式情報をもとに解説。東京都の女性向け事業や教育訓練給付との違いも比較表で整理。",
    url: "https://women-engineer.com/articles/saitama-women-training/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "埼玉県 女性のデジタル人材育成推進事業を解説｜対象・費用・申込【2026年】",
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
    "埼玉県「女性のデジタル人材育成推進事業」の対象者・講座内容・費用（受講料無料）・申込方法を公式情報をもとに解説。東京都の女性向け事業や教育訓練給付との違いも比較表で整理。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/saitama-women-training/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "埼玉県の女性のデジタル人材育成推進事業は本当に無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "受講料はすべて無料です。公式Q&Aにも「通信費等はかかりますが、受講料は無料です」と明記されています。ただし、配信を視聴するための通信料、使用するPC等のデバイス、Wi-Fiなどのインターネット環境は自己負担で準備する必要があります。また、基礎講座・応用講座のテキストは自分でダウンロード・印刷する方式です（実践講座のテキストは自宅に郵送されます）（出典: 女性のデジタル人材育成推進事業 公式サイト、2026年7月確認）。",
      },
    },
    {
      "@type": "Question",
      name: "在職中（働きながら）でも受講できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "受講できます。公式サイトの受講条件に「埼玉県在住又は埼玉県内での就業を希望する女性（在職中の方も受講できます）」と明記されています。基礎講座・応用講座は全てオンラインのオンデマンド配信で24時間視聴でき、埼玉県女性キャリアセンターのキャリア相談（1回45分・対面/Zoom）も在職者を含む受講生なら誰でも利用可能です。求職中でないと受けられない東京都の女性デジタルカレッジ事業などとは異なる点です（出典: 公式サイト、2026年7月確認）。",
      },
    },
    {
      "@type": "Question",
      name: "埼玉県外に住んでいても受講できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "対象は「埼玉県在住又は埼玉県内での就業を希望する女性」です。県外在住でも、埼玉県内での就業を希望する方であれば受講条件に含まれます。逆に、県内在住・県内就業希望のいずれにも当てはまらない場合は対象外です。判断に迷うケースは埼玉県女性キャリアセンター（048-601-5810）に直接確認してください。お住まいの都道府県の類似事業は「女性向けITスキル支援マップ」の記事でも探せます。",
      },
    },
    {
      "@type": "Question",
      name: "実践講座だけを受講することはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "できません。公式Q&Aに「実践講座のみの受講はできません。令和6年度～令和8年度の基礎講座・応用講座の修了証をお持ちの方が選考を経て実践講座の受講対象となります」と明記されています。実践講座（Officeテクニカル/WEBクリエイター/生成AI活用/デジタルデザイン）は、対応する基礎・応用コースの修了が前提で、定員は各コースライブ受講生25名・アーカイブ受講生25名です（出典: 公式サイトQ&A・実践講座案内、2026年7月確認）。",
      },
    },
    {
      "@type": "Question",
      name: "年齢制限はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイトの受講条件に年齢制限の記載はありません（2026年7月確認）。条件は、埼玉県在住または県内就業希望の女性であること、デジタルスキルを習得して働くことを考えていること、eラーニングでの受講が可能な環境があることの3点です。原則39歳以下という年齢要件がある東京都の女性ITエンジニア育成事業とは異なります。最新の要件は必ず公式サイトで確認してください。",
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
              { label: "埼玉県の女性のデジタル人材育成推進事業" },
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
              埼玉県の女性のデジタル人材育成推進事業とは？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                対象者・費用・申込方法と東京都事業・国の制度との違い【2026年】
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
                <span><strong>どんな事業？</strong> 埼玉県が主催する女性向けのデジタルスキル講座＋就職支援。基礎・応用講座（データ分析/WEB/CAD/Office）、実践講座（WordPress・生成AI・Figma等）、自営型テレワーク講座を<strong>全てオンライン</strong>で提供します（運営受託: パーソルビジネスプロセスデザイン株式会社）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>誰が対象？</strong> 埼玉県在住または埼玉県内での就業を希望する女性。<strong>在職中でも受講できます</strong>。公式サイトに年齢制限の記載はありません。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>無料？</strong> 受講料はすべて無料。配信を視聴する通信料と、PC等のデバイス・インターネット環境のみ自己負担です。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://woman-jobtraining-pref-saitama.com/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>女性のデジタル人材育成推進事業 公式サイト</a>（公式サイトにて2026年7月確認）
            </p>
          </div>

          <div className="rounded-xl p-6 mt-4" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>最新の募集状況（2026年7月5日 公式サイト確認）</h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>基礎・応用講座:</strong> 月ごとの募集で2027年2月生まで受付予定。7月1日より8月受講生（申込期間: 2026年7月1日〜7月25日、受講期間: 8月1日〜8月31日）の申込受付が始まっています。定員は各月1,000名（定員に達し次第受付終了）。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>自営型テレワーク講座（新設）:</strong> 8月受講生から視聴可能。基礎・応用講座と同一フォームで申込できます。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>実践講座:</strong> 1期（Officeテクニカル/WEBクリエイター）は2026年8月17日〜9月14日、2期（生成AI活用/デジタルデザイン）は2026年11月9日〜12月7日に実施予定です。</span></li>
            </ul>
            <p className="text-xs text-text-light mt-3">
              ※募集状況・日程は変動します。最新情報は必ず<a href="https://woman-jobtraining-pref-saitama.com/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>公式サイト</a>でご確認ください。
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 女性のデジタル人材育成推進事業とは</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 事業概要表（対象者・期間・費用・内容・申込）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 対象者・受講条件</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 講座・コース内容（基礎応用／実践／自営型テレワーク）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 費用と支援（無料の範囲と自己負担・就職サポート）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 申込方法と受講までのステップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 東京都事業・国の制度との違い（比較表）</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性のデジタル人材育成推進事業とは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「女性のデジタル人材育成推進事業」は、埼玉県が主催する女性向けのデジタルスキル講座・就職支援事業です。公式サイトでは「デジタル技術を身につけ就職を目指す女性を対象に、スキルの習得をサポートし、就職活動やキャリア形成を支援します」と説明されています。運営は埼玉県から委託を受けたパーソルビジネスプロセスデザイン株式会社が担い、問い合わせ・就職サポートの窓口は埼玉県女性キャリアセンターです（公式サイトにて2026年7月確認）。
            </p>
            <p>
              最大の特徴は、講座が<strong>全てオンライン</strong>で、コンテンツを<strong>24時間いつでも視聴できる</strong>こと。公式サイトでも「子育て・介護があるのでスクールには通えないが、実務に役立つデジタルスキルを身に付けたい」方などにおすすめの講座として案内されています。受講料は全講座無料（通信費は自己負担）で、条件を満たせば修了証（PDF）も発行されます。
            </p>
            <p>
              講座は3階層で構成されています。エントリーレベルの<strong>基礎講座・応用講座</strong>（データ分析/WEB/CADエンジニア/Office）、その修了者が選考を経て進める発展レベルの<strong>実践講座</strong>（Officeテクニカル/WEBクリエイター/生成AI活用/デジタルデザイン）、そして2026年度に新設された<strong>自営型テレワーク講座</strong>（8月開講予定）です。
            </p>
            <p>
              なお、東京都が実施する<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>（6か月・エンジニア職向け）とは、対象地域も内容も異なる別の事業です（<a href="#sec7" className="underline" style={{ color: "#7c3a55" }}>比較表はこちら</a>）。全国の類似事業は<a href="/articles/women-it-support-map/" className="underline" style={{ color: "#7c3a55" }}>女性向けITスキル支援マップ</a>で整理しています。
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
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>女性のデジタル人材育成推進事業（主催: 埼玉県／運営受託: パーソルビジネスプロセスデザイン株式会社）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>対象者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>埼玉県在住または埼玉県内での就業を希望する女性（在職中の方も受講可）／デジタルスキルを習得して働くことを考えている方／eラーニングでの受講が可能な環境がある方。年齢制限の記載なし</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>講座構成</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>基礎講座・応用講座（エントリーレベル・オンデマンド）／実践講座（発展レベル・ライブまたはアーカイブ）／自営型テレワーク講座（新設・オンデマンド・8月開講予定）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>形式</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>全てオンライン。基礎・応用講座は24時間視聴可能なオンデマンド配信（アカウント有効期間は1か月）。実践講座はZoomライブ講座またはアーカイブ配信</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>期間</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>基礎・応用講座: 令和8年6月2日〜令和9年3月15日（毎月月初開講・月末まで学習可能）。実践講座: 1期=令和8年8月17日〜9月14日／2期=令和8年11月9日〜12月7日（各16日程）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>定員</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基礎・応用講座: 各月1,000名（2027年2月生まで募集・定員に達し次第受付終了）。実践講座: 各コースライブ受講生25名＋アーカイブ受講生25名</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>費用</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>受講料はすべて無料。通信料・PC等のデバイス・インターネット環境は自己負担</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>修了証</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>講義動画の視聴完了＋確認テスト8割以上でコースごとに修了証（PDF）を発行（自営型テレワーク講座は修了証なし）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>就職支援</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>埼玉県女性キャリアセンターによるキャリア相談（要予約・1回45分・対面/Zoom）、合同企業説明会等のイベント、応募書類・ポートフォリオ作成や面接練習のアフターサポート、マッチングコーディネーターによる企業・求人情報の提供</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>申込方法</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>公式サイトの申込フォームからオンライン申請（月ごとの募集・令和8年6月1日受付開始）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>問い合わせ</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>埼玉県女性キャリアセンター 048-601-5810（月〜土 9:30〜17:30、休業日: 日祝・毎月第3木曜・年末年始）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://woman-jobtraining-pref-saitama.com/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>女性のデジタル人材育成推進事業 公式サイト</a>（公式サイトにて2026年7月確認）。日程・定員・募集状況は変わるため、必ず公式サイトで最新情報を確認してください。
          </p>
        </div>
      </section>

      {/* sec3 対象者・要件 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">対象者・受講条件</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              公式サイトでは、次の条件に<strong>すべて</strong>当てはまる方が対象と案内されています（公式サイトにて2026年7月確認）。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">1.</span><span><strong>埼玉県在住または埼玉県内での就業を希望する女性</strong> — 在職中の方も受講できます。県外在住でも県内就業希望であれば対象に含まれます。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">2.</span><span><strong>デジタルスキルを習得して働くことをお考えの女性</strong></span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">3.</span><span><strong>eラーニングでの受講が可能な環境をお持ちの方</strong> — 基礎講座はPC・タブレット・スマートフォンで受講可能。応用講座も同様ですが、操作しながら受講する場合はPCが必要です。</span></li>
            </ul>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              東京都の女性向け訓練（<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>は原則39歳以下、<a href="/articles/women-digital-college/" className="underline" style={{ color: "#7c3a55" }}>女性デジタルカレッジ事業</a>は求職中であることが要件）と比べると、<strong>在職中でも受講でき、年齢制限の記載がない</strong>点が特徴です。ただし実践講座は「令和6〜8年度の基礎講座・応用講座の修了証を持つ方が選考を経て受講対象」となるため、いきなり実践講座だけを受けることはできません。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 講座・コース内容 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">講座・コース内容（基礎応用／実践／自営型テレワーク）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              エントリーレベルの基礎講座・応用講座では、必修の「PC総合」（約3時間）を受講したうえで、興味のあるコースを選びます。申し込めばすべてのコースを学習でき、複数コースの受講も可能です。基礎講座の合計受講時間は約7時間（PC総合3時間＋各コース3〜4時間）で、公式サイトでは「1つのコースあたり1日1時間だと約10日、1日2時間だと約5日で修了」が目安として示されています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>データ分析 基礎・応用コース</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Excelの基本操作・関数・グラフ機能・データベース機能</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>応用では集計マクロ・VBAまで学習</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>修了後は実践講座「Officeテクニカル」「生成AI活用」へ進める</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">データ集計業務はどの業界にも存在するため、公式サイトでも「就職の即戦力になるスキル」が欲しい方向けと案内されています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>WEB 基礎・応用コース</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>HTML/CSSによるWebページ構築・Visual Studio Codeの基本操作</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>レスポンシブWebデザイン、サイトのアップロード・公開まで</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>修了後は実践講座「WEBクリエイター」「デジタルデザイン」へ進める</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">見本サイトを構築しながらコードの記述方法を身につける構成で、公式サイトでは他講座より難易度が高めと案内されています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>CADエンジニア 基礎・応用コース</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>無料アプリケーションJw_CADのインストール方法から指導</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>基本的な図面の読み書き・作図コマンド・編集コマンド</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>建築理論・製図の基礎知識も学べる</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">専門性の高い分野で働きたい方、モノづくりに興味がある方、訓練校に通う前の予習をしたい方向けのエントリー講座です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Office 応用コース</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Word・Excel・PowerPointの横断的な操作</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>送付状・名簿・差し込み印刷・見積書・プレゼン資料の作成</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>事務職にキャリアチェンジしたい方向け</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">データ分析基礎コースと合わせて修了すると、実践講座「Officeテクニカル」「生成AI活用」に申し込めます。</p>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>実践講座（発展レベル・選考あり）</h3>
            <p className="text-sm text-text-light leading-relaxed mb-4">
              基礎・応用コースの修了者（令和6〜8年度の修了証保持者）が選考を経て進める講座です。テクニカル講義40時間＋セミナー講義6時間の計46時間で、講座内で就職活動に使える<strong>ポートフォリオ（実績資料）</strong>を作成します。Zoomでのライブ受講（各コース25名）とアーカイブ配信受講（各コース25名）を申込時に選択でき、テキストは自宅に郵送されます。雇用保険受給用の利用証明書はライブ受講の場合のみ発行されます。
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>Officeテクニカルコース</strong>（1期: 8/17〜9/14）— Excel・Word・PowerPointの実務スキル＋Copilotを使った業務時短</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>WEBクリエイターコース</strong>（1期: 8/17〜9/14）— WordPressでのサイト構築、サーバ契約から自分のサイト公開まで</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>生成AI活用コース</strong>（2期: 11/9〜12/7）— プロンプトの基礎、生成AI×Excel/VBA/PowerPoint、Power Automate Desktop、Power BI</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>デジタルデザインコース</strong>（2期: 11/9〜12/7）— Figmaでのバナー・Webデザイン、UI/UX、JavaScriptで動きを付ける</span></li>
            </ul>
          </div>

          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>自営型テレワーク講座（2026年度新設・8月開講予定）</h3>
            <p className="text-sm text-text-light leading-relaxed">
              自営型テレワーカー（業務委託等で在宅で働く働き方）として働くための基礎を学べるオンデマンド講座です。合計約5時間で、自営型テレワークの基礎理解・始め方・主要スキル・仕事の受注・法律や契約の基礎を扱います。この講座だけの受講も可能で、スマートフォンでも視聴できます（修了証の発行はありません）。
            </p>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: 公式サイト「基礎講座・応用講座」「実践講座」「自営型テレワーク講座」各ページ（公式サイトにて2026年7月確認）
          </p>
        </div>
      </section>

      {/* sec5 費用と支援 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">費用と支援（無料の範囲と自己負担・就職サポート）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              受講料は<strong>すべて無料</strong>です。公式Q&Aにも「通信費等はかかりますが、受講料は無料です」と明記されています。ただし「全部タダ」ではないので、自己負担になるものを正確に押さえておきましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>無料のもの</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>受講料（基礎・応用／実践／自営型テレワークの全講座）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>実践講座のテキスト（自宅に郵送）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>修了証の発行（PDF・発行申請は不要）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>キャリア相談・合同企業説明会・アフターサポート等の就職支援</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>自己負担のもの</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>配信を視聴するための通信料</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>使用するPC等のデバイス、Wi-Fiなどのインターネット環境（推奨スペック: メモリ8GB等は公式サイトに記載）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>基礎・応用講座のテキスト印刷（ダウンロードして自身で印刷する方式）</span></li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>就職サポート（埼玉県女性キャリアセンター）</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>キャリア相談</strong> — 受講生なら在職者を含め誰でも利用可能。1回45分、対面またはZoomで実施（要電話予約: 048-601-5810）。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>講座と連動したイベント</strong> — DX人材を求める企業との説明会や、自営型テレワーカー向けのマッチング交流会を実施予定。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>修了後のアフターサポート・お仕事紹介</strong> — 応募書類・ポートフォリオの作成や面接練習の支援、マッチングコーディネーターからの企業・求人情報の提供。</span></li>
            </ul>
            <p className="text-xs text-text-light mt-3">
              ※託児サービスに関する記載は公式サイトで確認できませんでした（2026年7月時点）。必要な方は事前に問い合わせ窓口へ確認してください。
            </p>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            なお、本事業は就職が保証される制度ではありません。修了後の就職・転職活動では、公的サポートに加えて民間の転職エージェント・転職サイトを併用すると求人の選択肢が広がります。自分に合うサービスの選び方は<a href="/ranking/" className="underline" style={{ color: "#7c3a55" }}>おすすめ転職エージェント・転職サイトランキング</a>を参考にしてください。
          </p>
        </div>
      </section>

      {/* sec6 申込ステップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">申込方法と受講までのステップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              基礎・応用講座と自営型テレワーク講座は、公式サイトの申込フォームから<strong>月ごとの募集</strong>で申し込みます（同一フォーム・令和8年6月1日受付開始、2027年2月生まで募集）。例えば8月受講生の申込期間は2026年7月1日〜7月25日、受講期間は8月1日〜8月31日です。募集期間中でも定員（各月1,000名）に達し次第締め切られることがあります。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "公式サイトで申込スケジュールを確認", "受講したい月の申込期間・受講期間・オリエンテーション日程を確認します。受講希望者多数の場合は新規受講の方が優先されます。"],
              ["STEP2", "申込フォームからオンライン申請", "基礎・応用講座と自営型テレワーク講座は同一フォームで申込できます。受講条件（県内在住または県内就業希望の女性等）も事前にセルフチェックしましょう。"],
              ["STEP3", "受講開始案内メールを受け取る", "受講開始案内メールで研修システムのログインID・パスワードが通知されます。まずはZoomライブ配信のオリエンテーション（アーカイブ視聴も可）で受講方法を確認します。"],
              ["STEP4", "学習スタート（アカウント有効期間1か月）", "オンデマンド講義を好きなタイミングで視聴します。アカウントの有効期間は1か月で、月が変わると学習状況はリセットされるため計画的に進めましょう。"],
              ["STEP5", "修了証を取得し、就職サポート・実践講座へ", "動画の視聴完了＋確認テスト8割以上でコースごとに修了証（PDF）を取得。女性キャリアセンターの就職サポートを利用でき、基礎・応用の修了者は選考を経て実践講座にも進めます。"],
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
            出典: 公式サイト「お申し込み」ページ（公式サイトにて2026年7月確認）。申込期間・定員は変動するため、必ず<a href="https://woman-jobtraining-pref-saitama.com/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>公式サイト</a>で最新情報を確認してください。
          </p>
        </div>
      </section>

      {/* sec7 他制度との違い */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">東京都事業・国の制度との違い（比較表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              女性向けのデジタル・IT訓練は自治体や国にも複数あり、対象者・目指す仕事・かかる時間が大きく異なります。埼玉県の本事業と、東京都の<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>・<a href="/articles/women-digital-college/" className="underline" style={{ color: "#7c3a55" }}>女性デジタルカレッジ事業</a>、国の<a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付</a>を並べて整理します。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>埼玉県 女性のデジタル人材育成推進事業</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}><a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>東京都 女性ITエンジニア育成事業</a></th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}><a href="/articles/women-digital-college/" className="underline" style={{ color: "#7c3a55" }}>東京都 女性デジタルカレッジ事業</a></th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}><a href="/articles/training-benefit-it/" className="underline" style={{ color: "#7c3a55" }}>教育訓練給付（国）</a></th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>対象</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>埼玉県在住または県内就業希望の女性。<strong>在職中も可</strong>・年齢制限の記載なし</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>原則39歳以下の女性。求職中または非正規で就業中（申込時点で正社員でない方）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>結婚・出産・育児等で退職し再就職を希望する求職中の女性</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>男女問わず。雇用保険の加入期間等の要件あり</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>学ぶ内容</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>データ分析（Excel/VBA）・WEB（HTML/CSS）・CAD・Office。実践講座でWordPress・生成AI・Figma等</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>プログラミング（Java/Web）またはインフラクラウド（サーバ/AWS）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Word・Excel・PowerPoint・Excel VBA・生成AI活用など実務デジタルスキル</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>厚労省指定講座から自分で選択（IT系講座多数）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>形式・期間</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>全てオンライン。基礎・応用は1か月単位のオンデマンド（合計約7時間〜）。実践講座は約1か月・46時間</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>6か月。eラーニング主体＋月2回の集合型訓練（新宿会場）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>通学5日間（入門）／15日間＋2か月フォローアップ（基礎及び応用）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>講座により通学・オンライン・期間さまざま</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>費用</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受講料すべて無料（通信費・デバイスは自己負担）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受講料・PCレンタル無料（交通費・資格受験料は自己負担）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受講料・託児無料（入門のみテキスト2,640円自己負担）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受講費用の一部（制度により20%〜最大80%）を給付。自己負担あり</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>向いている人</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>埼玉で、働きながら・育児しながら自分のペースでデジタルスキルを身につけたい人</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>都内IT企業へエンジニアとして正社員就職したい39歳以下の人</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>育児等のブランクから託児付きで再就職準備をしたい人（東京）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>学びたい講座が決まっていて、費用補助を受けながら本格的に学びたい人</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: 各事業の公式サイト（いずれも2026年7月確認）。制度の詳細・最新の要件は各リンク先の記事と公式サイトで確認してください。全国の支援制度は<a href="/articles/women-it-support-map/" className="underline" style={{ color: "#7c3a55" }}>女性向けITスキル支援マップ</a>、無料・低額で学べる国の講座は<a href="/articles/manabi-dx/" className="underline" style={{ color: "#7c3a55" }}>マナビDX</a>の記事でも整理しています。
          </p>
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
            <a href="/articles/training-benefit-it/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>教育訓練給付でITを学ぶ</h3><p className="text-sm text-text-light">国の給付制度で受講費用を抑える方法</p></a>
            <a href="/articles/manabi-dx/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>マナビDX活用ガイド</h3><p className="text-sm text-text-light">無料で学べるデジタル講座の探し方</p></a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 埼玉県「女性のデジタル人材育成推進事業」公式サイト <a href="https://woman-jobtraining-pref-saitama.com/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://woman-jobtraining-pref-saitama.com/</a>（2026年7月確認）</li>
            <li>出典: 同公式サイト「基礎講座・応用講座」 <a href="https://woman-jobtraining-pref-saitama.com/course/basic_advanced/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://woman-jobtraining-pref-saitama.com/course/basic_advanced/</a>（2026年7月確認）</li>
            <li>出典: 同公式サイト「実践講座」 <a href="https://woman-jobtraining-pref-saitama.com/course/practical/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://woman-jobtraining-pref-saitama.com/course/practical/</a>（2026年7月確認）</li>
            <li>出典: 同公式サイト「自営型テレワーク講座」 <a href="https://woman-jobtraining-pref-saitama.com/course/selfemployed/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://woman-jobtraining-pref-saitama.com/course/selfemployed/</a>（2026年7月確認）</li>
            <li>出典: 同公式サイト「お申し込み」 <a href="https://woman-jobtraining-pref-saitama.com/apply/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://woman-jobtraining-pref-saitama.com/apply/</a>（2026年7月確認）</li>
            <li>出典: 同公式サイト「よくあるご質問」 <a href="https://woman-jobtraining-pref-saitama.com/faq/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://woman-jobtraining-pref-saitama.com/faq/</a>（2026年7月確認）</li>
            <li>出典: 埼玉県女性キャリアセンター <a href="https://www.pref.saitama.lg.jp/swcc/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.pref.saitama.lg.jp/swcc/</a>（2026年7月確認）</li>
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
