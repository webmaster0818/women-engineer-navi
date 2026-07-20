import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "山梨県 やまなし女性デジタル人材プロジェクトを解説｜対象・費用・募集状況【2026年】",
  description:
    "山梨県「やまなし女性デジタル人材プロジェクト」を公式情報をもとに解説。県内在住18歳以上の女性が対象、Web制作・デザインを約150時間で学び企業案件の実務経験まで積める実践型講座です。受講料20,000円（最終課題提出で1万円キャッシュバック・児童扶養手当受給者と住民税非課税世帯は免除）。2026年度の募集は7月8日で締切済み（2026年7月18日確認）。次回募集の確認方法と、今から使える代替の支援制度も整理します。",
  alternates: { canonical: "/articles/yamanashi-women-digital/" },
  openGraph: {
    title: "山梨県 やまなし女性デジタル人材プロジェクトを解説｜対象・費用・募集状況【2026年】",
    description:
      "山梨県「やまなし女性デジタル人材プロジェクト」の対象者（県内在住18歳以上の女性）、講座内容（Web制作・デザイン約150時間+企業案件実務）、費用（20,000円・キャッシュバックと免除制度あり）を公式情報で解説。2026年度募集は締切済み（2026年7月18日確認）。次回募集の確認方法と代替支援も紹介。",
    url: "https://women-engineer.com/articles/yamanashi-women-digital/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "山梨県 やまなし女性デジタル人材プロジェクトを解説｜対象・費用・募集状況【2026年】",
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
    "山梨県「やまなし女性デジタル人材プロジェクト」の対象者・講座内容・費用を公式情報をもとに解説。2026年度の募集は7月8日で締切済み（2026年7月18日確認）。次回募集の確認方法と、今から使える代替の支援制度も整理。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/yamanashi-women-digital/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "やまなし女性デジタル人材プロジェクトは今から申し込めますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2026年度の募集は申し込めません。申込期間は2026年6月8日〜7月8日で、山梨県公式サイト・特設ページとも「募集は締め切りました」と明記されています（2026年7月18日確認）。次回（2027年度以降）の実施・募集については現時点で公式の発表を確認できていません。県公式ページ（産業人材課「やまなしキャリアアップ・ユニバーシティ 非正規雇用者・求職者向け講座について」）が更新される場所なので、定期的に確認するか、産業人材課（055-223-1566）に直接問い合わせるのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "受講は無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "無料ではありません。受講料は20,000円（税込）です。ただし、最終課題を提出した方には奨励金として1万円がキャッシュバックされ、児童扶養手当受給者および住民税非課税世帯は受講料が全額免除されます（免除には事前の書類提出が必要）。このほか受講に使うPC・通信環境は自分で用意する必要があります（出典: 山梨県公式サイト・特設ページ、2026年7月18日確認）。",
      },
    },
    {
      "@type": "Question",
      name: "対象者の条件は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "山梨県公式サイトでは「18歳以上の県内在住の女性で、再就職・転職等を希望する方」が対象とされています（定員30名程度）。特設ページでは「再就職・転職・キャリアチェンジを考えている方」「ITスキルを身につけて働き方を広げたい方」と案内されています。申込後にオンラインでの受講前面談があり、選考を経て受講者が決定される方式です（出典: 公式サイト・特設ページ、2026年7月18日確認）。県外在住の方は対象に含まれないため、お住まいの地域の類似事業を「女性向けITスキル支援マップ」で探してみてください。",
      },
    },
    {
      "@type": "Question",
      name: "託児サービスはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "託児サービスに関する記載は、山梨県公式サイト・特設ページのいずれにも確認できませんでした（2026年7月18日時点）。講座はオンライン中心（eラーニング+LIVE講義、録画視聴可）のため通学は不要ですが、託児の有無や学習中の子育て支援について知りたい方は、山梨県産業政策部産業人材課（055-223-1566）へ直接確認してください。",
      },
    },
    {
      "@type": "Question",
      name: "募集が終わった今、山梨県在住の女性がデジタルスキルを学ぶ方法はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "あります。全国どこからでも使える制度として、国の教育訓練給付（受講費用の一部を給付・年齢上限なし）や、経済産業省のポータル「マナビDX」の無料・低額講座があります。また、同じ山梨県の「やまなしキャリアアップ・ユニバーシティ」には女性限定ではない非正規雇用者・求職者向け講座（大人のしごと学び直し講座など）もあり、県公式ページで募集状況が案内されています（2026年7月18日時点で「受講者募集中」の表示。最新状況は公式サイトで要確認）。全国の女性向け支援は「女性向けITスキル支援マップ」で整理しています。",
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
              { label: "やまなし女性デジタル人材プロジェクト" },
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
              やまなし女性デジタル人材プロジェクトとは？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                対象者・費用・2026年度の募集状況と次回に備える方法【2026年】
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
                <span><strong>どんな事業？</strong> 山梨県が主催する女性向けの実践型デジタル講座（やまなしキャリアアップ・ユニバーシティの一講座）。Web制作・デザインをオンライン中心の約150時間で学び、企業案件を想定した<strong>実務経験</strong>を経て、就職・副業・在宅ワークにつなげます（運営: 株式会社東海道シグマ）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>誰が対象？費用は？</strong> 18歳以上の山梨県内在住の女性で、再就職・転職等を希望する方（定員30名程度・選考あり）。受講料は<strong>20,000円（税込）</strong>で無料ではありませんが、最終課題提出で1万円キャッシュバック、児童扶養手当受給者・住民税非課税世帯は全額免除です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#10007;</span>
                <span><strong>今申し込める？</strong> <strong>2026年度の募集は締切済みです</strong>（申込期間: 2026年6月8日〜7月8日）。次回募集は現時点で未発表のため、この記事では<a href="#sec6" className="underline" style={{ color: "#7c3a55" }}>次回の告知を確認する方法</a>と<a href="#sec7" className="underline" style={{ color: "#7c3a55" }}>今から使える代替の支援制度</a>も紹介します。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://www.pref.yamanashi.jp/rosei-jin/digital-women/recruitment.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>山梨県公式サイト（産業人材課）</a>・<a href="https://sigma-jp.co.jp/education/public/yamanashi-digital2026/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>特設ページ</a>（いずれも2026年7月18日確認）
            </p>
          </div>

          <div className="rounded-xl p-6 mt-4" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>最新の募集状況（2026年7月18日 公式サイト確認）</h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>2026年度の募集は終了:</strong> 申込期間は2026年6月8日（月）〜7月8日（水）で、山梨県公式サイト・特設ページとも「募集は締め切りました」と明記されています。2026年度の講座は7月17日に開始され、LIVE講座は11月中旬まで、就業支援は2027年3月まで実施される予定です。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>次回（2027年度以降）の募集:</strong> 実施・募集の有無は現時点で公式の発表を確認できていません。公式サイトで要確認です（<a href="#sec6" className="underline" style={{ color: "#7c3a55" }}>確認方法はこちら</a>）。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>同県の他講座:</strong> 女性限定ではありませんが、同じやまなしキャリアアップ・ユニバーシティの「大人のしごと学び直し講座（IT活用・生成AI）」は2026年7月18日時点で「受講者募集中」と公式ページに表示されています（先着50名・最新状況は公式サイトで要確認）。</span></li>
            </ul>
            <p className="text-xs text-text-light mt-3">
              ※募集状況は変動します。最新情報は必ず<a href="https://www.pref.yamanashi.jp/rosei-jin/digital-women/recruitment.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>山梨県公式サイト</a>でご確認ください。
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. やまなし女性デジタル人材プロジェクトとは</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 事業概要表（対象者・期間・費用・内容・申込）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 対象者・受講条件</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 講座内容（Web制作・デザイン約150時間+実務経験）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 費用と支援（20,000円の内訳・キャッシュバック・免除）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 申込の流れと次回募集の確認方法</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 注意点と今から使える代替の支援制度</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">やまなし女性デジタル人材プロジェクトとは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「やまなし女性デジタル人材プロジェクト（女性デジタル人材育成講座）」は、山梨県が主催する女性向けの実践型デジタル講座です。県の人材育成事業「やまなしキャリアアップ・ユニバーシティ」の非正規雇用者・求職者向け講座のひとつとして実施されており、公式サイトでは「時間や場所に制約のある女性でも参加しやすいオンライン講座を中心に、Web制作やデザインのスキルを学び、企業案件による実務経験を通じて、就職・副業・在宅ワークなどの実際の仕事につなげる実践型の講座」と説明されています。2026年度の運営は株式会社東海道シグマ（教育事業部）が担っています（公式サイト・特設ページにて2026年7月18日確認）。
            </p>
            <p>
              特徴は、学習だけで終わらない<strong>3段構成</strong>です。①オンライン講座でWeb制作スキルを基礎から体系的に学習し、②企業案件を想定したプログラムでWeb制作の一連の流れ（企画・制作）を体験（希望者は実際の企業案件に挑戦し成果品の納品まで経験）、③キャリアコンサルタントによる就業支援で、企業とのマッチングや案件応募支援を受けて就職・副業・在宅ワークへつなげます。
            </p>
            <p>
              ただし、<strong>2026年度の募集はすでに締め切られています</strong>（申込期間: 6月8日〜7月8日、2026年7月18日確認）。受講料も20,000円（税込・キャッシュバックと免除制度あり）で「完全無料」の事業ではない点が、<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>東京都の女性ITエンジニア育成事業</a>や<a href="/articles/saitama-women-training/" className="underline" style={{ color: "#7c3a55" }}>埼玉県の女性のデジタル人材育成推進事業</a>（いずれも受講料無料）とは異なります。全国の類似事業は<a href="/articles/women-it-support-map/" className="underline" style={{ color: "#7c3a55" }}>女性向けITスキル支援マップ</a>で整理しています。
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
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>内容（公式情報・2026年度）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>正式名称</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>やまなし女性デジタル人材プロジェクト（女性デジタル人材育成講座）。やまなしキャリアアップ・ユニバーシティの非正規雇用者・求職者向け講座のひとつ（主催: 山梨県／運営: 株式会社東海道シグマ 教育事業部）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>対象者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>18歳以上の山梨県内在住の女性で、再就職・転職等を希望する方（特設ページでは「再就職・転職・キャリアチェンジを考えている方」「ITスキルを身につけて働き方を広げたい方」）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>定員・選考</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>30名程度。申込後にオンラインの受講前面談があり、選考を経て受講者を決定</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>講座内容</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>IT基礎（eラーニング30時間）+専門講座（LIVE 120時間: Web制作基礎/デザイン基礎/ワイヤーフレーム・WordPressコーディング/ECサイト・LP）=合計150時間。修了後に企業案件を想定したWeb制作実務経験（希望者向け）と就業支援</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>形式</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>オンライン中心。LIVE講義（2時間講義+1時間質問タイム）は録画での視聴可、アーカイブ配信・課題添削・講義時間外の質問サポートあり</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>期間（2026年度）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受講開始2026年7月17日、LIVE講座は7月17日〜11月中旬（講義10:00〜12:00・自習質問12:00〜13:00）、就業支援は2027年3月まで</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>費用</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>受講料20,000円（税込）。最終課題提出者には奨励金1万円をキャッシュバック。児童扶養手当受給者・住民税非課税世帯は全額免除（事前の書類提出が必要）。PC・通信環境は自己負担</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>募集期間（2026年度）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}><strong>2026年6月8日〜7月8日（締切済み・2026年7月18日確認）</strong>。次回募集は未発表のため公式サイトで要確認</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>託児等の支援</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>託児サービスに関する記載は公式サイト・特設ページで確認できず（2026年7月18日時点）。必要な方は公式サイトで要確認</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>申込方法</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>特設ページの申込フォームからオンライン申請（説明会への参加またはアーカイブ視聴が事前に必要）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>問い合わせ</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>山梨県産業政策部産業人材課（豊かさ共創担当） 055-223-1566</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://www.pref.yamanashi.jp/rosei-jin/digital-women/recruitment.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>山梨県公式サイト</a>・<a href="https://sigma-jp.co.jp/education/public/yamanashi-digital2026/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>特設ページ</a>（いずれも2026年7月18日確認）。次年度の実施内容・条件は変わる可能性があるため、必ず公式サイトで最新情報を確認してください。
          </p>
        </div>
      </section>

      {/* sec3 対象者・要件 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">対象者・受講条件</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              2026年度の公式案内では、次の方が対象とされていました（公式サイト・特設ページにて2026年7月18日確認）。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">1.</span><span><strong>18歳以上の山梨県内在住の女性</strong> — 県公式サイトの表記は「18歳以上の県内在住の女性で、再就職・転職等を希望する方」。県外在住の方は対象に含まれません。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">2.</span><span><strong>再就職・転職・キャリアチェンジを考えている方</strong> — 特設ページの表記。在職中の方が対象に含まれるかは明記がないため、公式サイトで要確認です。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">3.</span><span><strong>ITスキルを身につけて働き方を広げたい方</strong> — 受講にはPC（Windows 11またはmacOS 12以上、メモリ8GB以上等の推奨スペックあり）と安定した通信環境（上り下り10Mbps以上）が必要です。</span></li>
            </ul>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              定員は30名程度で、申込後にオンラインの受講前面談を経て<strong>選考</strong>があります。申し込めば必ず受講できる方式ではない点に注意してください。年齢の上限に関する記載はありません（下限18歳のみ）。なお、在職中でも受講できることが明記されている<a href="/articles/saitama-women-training/" className="underline" style={{ color: "#7c3a55" }}>埼玉県の事業</a>や、求職中であることが要件の東京都の一部事業など、自治体によって条件は大きく異なります。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 講座内容 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">講座内容（Web制作・デザイン約150時間+実務経験）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              2026年度の学習プログラムは、IT基礎（eラーニング30時間）と専門講座（LIVE 120時間）の<strong>合計150時間</strong>で構成されています。専門講座は40日間、1日あたり2時間の講義+1時間の質問タイムで、録画での視聴も可能です。IT基礎は面談時のヒアリングをもとに一人ひとりにおすすめカリキュラムが作成されます（特設ページにて2026年7月18日確認）。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Web制作基礎</h3>
              <p className="text-sm text-text-light leading-relaxed">サイト設計・コンセプト設計、ペルソナ設定、サイトマップ制作など、Webサイト制作の企画工程を学びます。制作課題は「架空サイトのコンセプト設計」。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>デザイン基礎</h3>
              <p className="text-sm text-text-light leading-relaxed">色・余白・レイアウト・UXなど、見やすく伝わるデザインの基本を学びます。制作課題は「架空サイトのデザイン制作」。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ワイヤーフレーム・コーディング</h3>
              <p className="text-sm text-text-light leading-relaxed">ワイヤーフレーム（設計図）を作り、WordPressでの実装方法を学びます。制作課題は「架空サイトのワイヤーフレーム制作・サイトの実装」。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ECサイト・LP</h3>
              <p className="text-sm text-text-light leading-relaxed">ECサイトや様々な業種のサイトを実際に制作します。制作課題は各種サイト・ポートフォリオ等。就職活動や案件応募に使える実績づくりにつながります。</p>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Web制作実務経験（希望者向け実践プログラム）</h3>
            <p className="text-sm text-text-light leading-relaxed">
              実際の企業ヒアリングをもとに、グループでWebサイトのワイヤーフレーム制作に取り組みます。その後、希望者は<strong>実際の企業案件</strong>に挑戦し、成果品の納品までサポートを受けられます。学習で終わらず「仕事としてのWeb制作」を経験できるのがこの事業の核となる部分です。
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>就業支援（2027年3月まで）</h3>
            <p className="text-sm text-text-light leading-relaxed">
              個人の希望に合わせた個別の就業支援が行われます。在宅ワーク希望の方には在宅ワークの探し方からサポート、就業希望の方にはマッチング支援・面接同行等が案内されています。学習面でも、アーカイブ配信・課題提出と添削・グループワーク・講義時間外の質問サポートといった伴走支援が特徴として挙げられています。
            </p>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://sigma-jp.co.jp/education/public/yamanashi-digital2026/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>特設ページ「学習プログラム」「お申込み・受講の流れ」</a>（2026年7月18日確認）
          </p>
        </div>
      </section>

      {/* sec5 費用 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">費用と支援（20,000円の内訳・キャッシュバック・免除）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              受講料は<strong>20,000円（税込）</strong>です。無料の自治体事業が多いなかで受講料がかかる点は事前に押さえておきましょう。ただし、負担を軽くする仕組みが2つ用意されています（公式サイト・特設ページにて2026年7月18日確認）。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>負担を軽くする仕組み</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>奨励金キャッシュバック</strong> — 最終課題を提出した方には奨励金として1万円がキャッシュバックされ、実質負担は10,000円になります。</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>全額免除</strong> — 児童扶養手当受給者および住民税非課税世帯は受講料が全額免除。免除には児童扶養手当証書の写し、または課税証明書の原本を期限までに県へ郵送提出する必要があります（書類を提出しても受講が約束されるものではない旨も明記）。</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>自己負担のもの</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>受講料20,000円（税込・キャッシュバック前）と銀行振込の手数料</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>受講に使うPC（Windows 11またはmacOS 12以上、メモリ8GB以上推奨等）・Webカメラ・マイク</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>通信環境（上り・下りとも10Mbps以上が目安。モバイル通信は非推奨）</span></li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              ※託児サービスに関する記載は公式サイト・特設ページで確認できませんでした（2026年7月18日時点）。また、本事業は就職が保証される制度ではありません。修了後の就職・転職活動では、公的サポートに加えて民間の転職エージェント・転職サイトを併用すると選択肢が広がります。自分に合うサービスは<a href="/diagnosis/" className="underline" style={{ color: "#7c3a55" }}>エージェント無料診断</a>や<a href="/ranking/" className="underline" style={{ color: "#7c3a55" }}>ランキング記事</a>を参考にしてください。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 申込の流れと次回確認方法 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">申込の流れと次回募集の確認方法</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              2026年度の申込は次の流れで行われました。次回募集があった場合の参考にしてください（特設ページにて2026年7月18日確認）。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "説明会に参加（またはアーカイブ視聴）", "申込前に、オンライン（Zoom）説明会への参加またはアーカイブ動画の視聴が必要とされていました。2026年度は6月9日〜7月3日に計4回開催。"],
              ["STEP2", "申込フォームからオンライン申請", "特設ページのフォームから申し込みます（2026年度は6月8日〜7月8日）。免除希望者は児童扶養手当証書の写し等を県へ郵送提出。"],
              ["STEP3", "受講前面談・選考", "オンラインでの面談で受講の適性を確認し、選考を経て受講者が決定されます（2026年度の結果通知は7月9日）。"],
              ["STEP4", "受講料の支払い・受講開始", "決定通知後に銀行振込で受講料を支払い、受講ガイダンスを経てeラーニング・LIVE講座がスタート（2026年度は7月17日開始）。"],
              ["STEP5", "修了・実務経験・就業支援へ", "最終課題の提出で奨励金1万円のキャッシュバック。希望者は企業案件の実務経験に進み、就業支援は2027年3月まで受けられます。"],
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

          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>次回募集の告知を見逃さないための確認方法</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>県公式ページを定期チェック</strong> — <a href="https://www.pref.yamanashi.jp/rosei-jin/digital-women/recruitment.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>産業人材課「やまなしキャリアアップ・ユニバーシティ 非正規雇用者・求職者向け講座について」</a>が募集情報の掲載場所です。2026年度の募集も同ページで告知されました。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>電話で直接確認</strong> — 山梨県産業政策部産業人材課（豊かさ共創担当）055-223-1566。次年度の実施予定を最も確実に確認できます。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>参考</strong> — 2026年度のスケジュールは「6月上旬募集開始→7月上旬締切→7月中旬受講開始」でした。次年度も実施される場合、同時期の告知になる可能性がありますが、実施の有無を含め公式発表をご確認ください。</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec7 注意点と代替 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">注意点と今から使える代替の支援制度</h2>
          <div className="rounded-xl border bg-white p-6 mb-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>申込前に知っておきたい注意点</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span><strong>完全無料ではない</strong> — 受講料20,000円（税込）。キャッシュバックは「最終課題の提出」が条件です。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span><strong>選考がある</strong> — 定員30名程度に対し受講前面談・選定があり、申し込めば必ず受講できるわけではありません。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span><strong>平日日中のLIVE講義が中心</strong> — 2026年度は講義10:00〜12:00+質問13:00まで（録画視聴可）。フルタイム勤務との両立は録画中心になります。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span><strong>第三者の口コミはまだ少ない</strong> — 本プロジェクトの受講者による第三者の口コミ・評判は、当サイトで確認できる範囲ではまだ十分にありません。公式が公開する説明会動画等で雰囲気を確認し、判断に迷う点は県へ直接問い合わせるのが確実です。</span></li>
            </ul>
          </div>

          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「募集が終わっていた」「条件が合わない」という方向けに、今から検討できる制度を挙げます。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/training-benefit-it/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>教育訓練給付（国）</h3><p className="text-sm text-text-light">全国どこからでも利用可。IT系講座の受講費用の一部（制度により20%〜最大80%）を給付。年齢上限なし</p></a>
            <a href="/articles/manabi-dx/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>マナビDX（経済産業省）</h3><p className="text-sm text-text-light">無料・低額のデジタル講座を検索できる国のポータル。オンライン完結の講座多数</p></a>
            <a href="/articles/hello-training-it/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ハロートレーニング（公共職業訓練）</h3><p className="text-sm text-text-light">求職中なら山梨県内でも受講可。要件を満たせば給付金を受けながら学べる</p></a>
            <a href="/articles/women-it-support-map/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性向けITスキル支援マップ</h3><p className="text-sm text-text-light">全国の自治体・国の女性向け支援制度を一覧で整理。お住まいの地域の制度を探せます</p></a>
          </div>
          <p className="text-sm text-text-light leading-relaxed mt-6">
            なお、<a href="/articles/saitama-women-training/" className="underline" style={{ color: "#7c3a55" }}>埼玉県の女性のデジタル人材育成推進事業</a>は「埼玉県在住<strong>または埼玉県内での就業を希望する</strong>女性」が対象のため、山梨県在住のままでは原則対象になりません（埼玉県内への就業を具体的に希望する場合は窓口に確認してください）。地域を問わず使えるのは上記の国の制度です。
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
            <a href="/articles/saitama-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>埼玉県 女性のデジタル人材育成推進事業</h3><p className="text-sm text-text-light">全講座オンライン・受講料無料・在職中も受講可</p></a>
            <a href="/articles/training-benefit-it/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>教育訓練給付でITを学ぶ</h3><p className="text-sm text-text-light">国の給付制度で受講費用を抑える方法</p></a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 山梨県「やまなしキャリアアップ・ユニバーシティ 非正規雇用者・求職者向け講座について」（産業人材課） <a href="https://www.pref.yamanashi.jp/rosei-jin/digital-women/recruitment.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.pref.yamanashi.jp/rosei-jin/digital-women/recruitment.html</a>（2026年7月18日確認・ページ更新日2026年7月15日）</li>
            <li>出典: やまなし女性デジタル人材プロジェクト2026 特設ページ（運営: 株式会社東海道シグマ） <a href="https://sigma-jp.co.jp/education/public/yamanashi-digital2026/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://sigma-jp.co.jp/education/public/yamanashi-digital2026/</a>（2026年7月18日確認）</li>
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
