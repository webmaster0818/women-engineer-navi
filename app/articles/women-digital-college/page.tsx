import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "東京都 女性デジタルカレッジ事業とは？対象者・費用・申込方法【2026年度】",
  description:
    "東京都「女性デジタルカレッジ事業」を公式情報をもとに解説。結婚・出産・育児等で退職し再就職を目指す女性向けに、入門コース（Word・Excel基礎/5日間）と基礎及び応用コース（VBA・生成AIまで/15日間）を無料託児付きで提供。費用、申込方法、選考、女性ITエンジニア育成事業との違いまで一次情報で整理します。",
  alternates: { canonical: "/articles/women-digital-college/" },
  openGraph: {
    title: "東京都 女性デジタルカレッジ事業とは？対象者・費用・申込方法【2026年度】",
    description:
      "東京都「女性デジタルカレッジ事業」の対象者・2コースの内容・費用（受講料無料）・無料託児・申込方法・選考を公式情報をもとに解説。女性ITエンジニア育成事業との違いも比較表で整理。",
    url: "https://women-engineer.com/articles/women-digital-college/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "東京都 女性デジタルカレッジ事業とは？対象者・費用・申込方法【2026年度】",
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
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
    "東京都「女性デジタルカレッジ事業」の対象者・2コースの内容・費用・無料託児・申込方法・選考を公式情報をもとに解説。女性ITエンジニア育成事業との違いも比較表で整理。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/women-digital-college/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性デジタルカレッジ事業は本当に無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "受講料と託児サービスは両コースとも無料です。訓練で使うパソコンも会場に用意されています。ただし入門コースのみ、テキスト「よくわかる Microsoft Word2024 & Excel2024 & PowerPoint2024」（富士通ラーニングメディア・定価2,640円）を受講決定後に自身で購入する必要があります。基礎及び応用コースは受講料・テキスト代・託児料のすべてが無料と公式Q&Aに明記されています（出典: 女性デジタルカレッジ事業 公式サイト、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "女性デジタルカレッジ事業に年齢制限はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイトに年齢制限の記載はありません（2026年7月参照）。対象は「結婚、出産、育児等による退職後、再就職を希望する女性」で、求職中であること（訓練開始時点で就業していないこと）、ハローワークの求職登録または東京しごとセンターの利用者登録があること、全日程に出席できること、修了後に職業相談を受けて再就職活動ができることが要件です。原則39歳以下という年齢要件がある女性ITエンジニア育成事業とは異なる点です。最新の要件は必ず公式サイトで確認してください。",
      },
    },
    {
      "@type": "Question",
      name: "申し込めば必ず受講できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "必ず受講できるわけではありません。入門コースは先着順ではなく抽選で受講者を決定し、結果は申込締切後1週間程度で全員にメール通知されます。基礎及び応用コースは募集期間終了後に原則オンラインでの選考（応募内容等のヒアリング）を実施して受講者を決定します。落選した場合も、他の会場や次回以降の回に再度申し込むことができます（出典: 各コースの公式Q&A、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "託児サービスはどんな内容ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "生後6か月以上（一部の施設では1歳以上）6歳までの未就学のお子様を、訓練実施場所と同じ施設で、保育士等の資格を持つ者を含む経験豊富なスタッフが複数名で預かります。託児料は無料ですが、食事・ミルク・おむつ等は受講者が持参します。利用を希望する場合は、受講決定後に託児申込書を速やかに提出する必要があります（出典: 公式Q&A、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "女性デジタルカレッジと女性ITエンジニア育成事業はどちらを選ぶべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "目指す仕事で選びます。事務職などでWord・Excel・生成AIといった実務デジタルスキルを短期間（5日間または15日間）で身につけて再就職したいなら女性デジタルカレッジ事業、ITエンジニア（プログラミング・インフラクラウド）として都内IT企業への正社員就職を目指すなら6か月間の女性ITエンジニア育成事業（原則39歳以下）が対応します。どちらも東京都産業労働局の事業で受講料は無料です。要件や日程は年度・期で変わるため、それぞれの公式サイトで最新情報を確認してください。",
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
              { label: "東京都の女性デジタルカレッジ事業" },
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
              東京都の女性デジタルカレッジ事業とは？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                対象者・費用・申込方法と女性ITエンジニア育成事業との違い【2026年度】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月4日</p>
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
                <span><strong>どんな制度？</strong> 東京都（産業労働局）が実施する女性向けの職業訓練。結婚・出産・育児等で退職し再就職を目指す女性に、Word・Excelから生成AI活用までの実践的デジタルスキル訓練を<strong>無料託児付き</strong>で提供します（運営受託: 学校法人大原学園）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>誰が対象？</strong> 再就職を希望する求職中の女性（訓練開始時点で就業していないこと）。ハローワークの求職登録または東京しごとセンターの利用者登録が必要。公式サイトに年齢制限の記載はありません。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>無料？</strong> 受講料・託児料は両コースとも無料。入門コースのみテキスト代2,640円が自己負担です（基礎及び応用コースはテキスト代も無料）。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://tokyo-woman-d.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>女性デジタルカレッジ事業 公式サイト</a>／<a href="https://www.hataraku.metro.tokyo.lg.jp/kyushokusha-kunren/etc/jyosei_digital/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>TOKYOはたらくネット</a>（いずれも2026年7月参照）
            </p>
          </div>

          <div className="rounded-xl p-6 mt-4" style={{ backgroundColor: "#fffaf4", border: "1px solid #d9c7b8" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#c15f47" }}>最新の募集状況（2026年7月4日 公式サイト確認）</h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>入門コース:</strong> 第2期（2026年8月〜10月開催）のスケジュールが7月1日に公開され、<strong>7月13日より各募集期間内で申込受付</strong>と案内されています（第1期は5月7日募集開始・計8回）。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-0.5 font-bold">◆</span><span><strong>基礎及び応用コース:</strong> 8月17日開講の渋谷・港会場が申込受付中、8月24日開講の三鷹、8月31日開講の千代田・港会場も受付開始済み。10月〜12月開催分のスケジュールも7月1日に公開されています。</span></li>
            </ul>
            <p className="text-xs text-text-light mt-3">
              ※募集状況・日程は変動します。最新情報は必ず<a href="https://tokyo-woman-d.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>公式サイト</a>でご確認ください。
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 女性デジタルカレッジ事業とは</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 事業概要表（対象者・期間・費用・内容・申込）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 2つのコース内容（入門／基礎及び応用）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 費用は無料？自己負担になるもの</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 女性ITエンジニア育成事業との違い（比較表）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 申込方法と受講までのステップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 修了後の再就職・転職活動の進め方</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性デジタルカレッジ事業とは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「女性デジタルカレッジ事業」は、東京都（産業労働局）が実施する女性向けの職業訓練です。公式サイトでは「結婚、出産、育児等による退職後、再就職を希望する女性を対象とした、再就職に役立つ実践的なデジタルスキルを身に付ける職業訓練」と説明されています。運営は東京都から委託を受けた学校法人大原学園が担っています（出典: 公式サイト、2026年7月参照）。
            </p>
            <p>
              コースは2つ。Word・Excelの基礎を通学5日間で学ぶ<strong>入門コース</strong>と、Word・Excel等に加えてオンラインツール（Zoom・Teams・Microsoft 365）、Excel VBA、ChatGPT等の生成AI活用まで通学15日間で学ぶ<strong>基礎及び応用コース</strong>（＋自宅での2か月間の就職支援）です。
            </p>
            <p>
              最大の特徴は、両コースとも<strong>訓練会場と同じ施設での無料託児サービス</strong>が付くこと。未就学のお子様を保育スタッフが預かる体制が用意されており、育児で一度キャリアを離れた方がブランクを埋めて再就職を目指す設計になっています。東京都の報道発表（2026年4月）によると、令和8年度の定員は両コース合計670名です。
            </p>
            <p>
              なお、同じ東京都の女性向け事業でも、ITエンジニア職を目指す<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>とは対象者・内容が大きく異なります（<a href="#sec5" className="underline" style={{ color: "#7c3a55" }}>比較表はこちら</a>）。
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
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>女性デジタルカレッジ事業（東京都産業労働局／運営受託: 学校法人大原学園）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>対象者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>結婚・出産・育児等による退職後、再就職を希望する女性。求職中であること（訓練開始時点で就業していないこと）／ハローワーク求職登録または東京しごとセンター利用者登録済み／全日程に出席可能／修了後にハローワーク・しごとセンターで職業相談し再就職活動が可能な方。過去に同等訓練を受講した方は不可。年齢制限の記載なし</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>コース</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>入門コース（通学5日間・Word/Excel基礎）／基礎及び応用コース（通学15日間・基礎10日＋応用5日、基礎のみ受講も可）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>訓練時間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>10:00〜15:00（昼休憩1時間含む）。会場は三鷹・千代田・港・渋谷など都内複数（期により異なる）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>費用</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>受講料無料・託児料無料。入門コースのみテキスト代2,640円を自己購入。訓練用PCは会場に用意</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>託児</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>生後6か月以上（一部施設は1歳以上）〜6歳の未就学児を訓練会場と同施設で無料預かり（食事・ミルク・おむつ等は持参）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>就職支援</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>基礎及び応用コースは修了後2か月間のフォローアップ（ノートPC・Wi-Fi無料貸与、eラーニング復習、キャリアコンサルティング、応募書類添削・模擬面接）。入門コースはハローワークによる就職支援講義</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>定員</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>令和8年度 両コース合計670名（入門: 各回10名、基礎及び応用: 各回11名程度）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>申込方法</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>公式サイトのWeb申込または郵送。入門コースは抽選、基礎及び応用コースは原則オンライン選考で受講者決定</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>問い合わせ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>入門コース 03-6261-7524／基礎及び応用コース 03-3230-2445（いずれも平日9:00〜17:00）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://tokyo-woman-d.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>女性デジタルカレッジ事業 公式サイト</a>／<a href="https://www.hataraku.metro.tokyo.lg.jp/kyushokusha-kunren/etc/jyosei_digital/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>TOKYOはたらくネット</a>／<a href="https://www.metro.tokyo.lg.jp/information/press/2026/04/2026043015" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>東京都報道発表（2026年4月）</a>（いずれも2026年7月参照）。日程・会場・募集状況は期ごとに変わるため、必ず公式サイトで最新情報を確認してください。
          </p>
        </div>
      </section>

      {/* sec3 コース内容 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">2つのコース内容（入門／基礎及び応用）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              コースは習熟度と目的に応じて2段構えになっています。パソコンにほとんど触れてこなかった方は入門コースから、事務職への再就職で武器になるスキルまで一気に身につけたい方は基礎及び応用コースが対応します。入門コース修了後に基礎及び応用コースへ申し込むことも可能です（訓練日程が重複する申込は不可）。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>入門コース（通学5日間）</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>内容: Word（基本操作・文書作成・表作成）／Excel（基本操作・データ入力・表作成・グラフ作成・データ分析）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>5日間・計20時間（10:00〜15:00）。各回定員10名・抽選制</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>講師2名体制でパソコン操作をフォロー。Word・Excel初心者が対象</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">公式Q&Aでは「Word・Excelの初心者の方にご受講いただいております」と明記。ブランクが長く、まず基本操作から始めたい方の入口です。修了後はハローワークによる就職支援講義があります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>基礎及び応用コース（通学15日間）</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>基礎10日間: パソコン操作／Word／PowerPoint／Excel／Microsoft 365／Zoom・Teams</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>応用5日間: Excel VBA／生成AI（ChatGPT等）の活用</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>修了後2か月間のフォローアップ: ノートPC・Wi-Fi無料貸与、eラーニング復習、キャリアコンサルティング、書類添削・模擬面接</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">各回定員11名程度・原則オンライン選考。事情がある場合は基礎10日間のみの修了も可能です（修了証は「基礎コース」名義）。訓練期間中はキャリアコンサルタントが会場で相談に対応し、1人2回（各30分程度）のキャリアカウンセリングも受けられます。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            事務系スキルの先で「開発やインフラの仕事」に興味が出てきた方は、同じ東京都の<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>（6か月・プログラミング／インフラクラウド）という選択肢もあります。
          </p>
        </div>
      </section>

      {/* sec4 費用 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">費用は無料？自己負担になるもの</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              受講料は両コースとも<strong>無料</strong>です。基礎及び応用コースは公式Q&Aで「受講料、テキスト代、託児サービスともに無料です」と明記されています。入門コースのみ、指定テキストを受講決定後に自身で購入して持参する必要があります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>無料のもの</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>受講料（両コースとも）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>託児サービス（両コースとも・訓練会場と同施設）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>訓練で使用するパソコン（会場に用意）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>基礎及び応用コースのテキスト代</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>修了後2か月間のノートPC・Wi-Fi貸与と就職支援（基礎及び応用コース）</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>自己負担のもの</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>入門コースのテキスト代: 「よくわかる Microsoft Word2024 & Excel2024 & PowerPoint2024」（富士通ラーニングメディア）定価2,640円</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>通学の交通費</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&#8226;</span><span>託児利用時の食事・ミルク・おむつ等</span></li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://tokyo-woman-d.metro.tokyo.lg.jp/about2" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>入門コース案内</a>／<a href="https://tokyo-woman-d.metro.tokyo.lg.jp/qanda" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>基礎及び応用コースQ&A</a>（いずれも2026年7月参照）
          </p>
        </div>
      </section>

      {/* sec5 育成事業との違い */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性ITエンジニア育成事業との違い（比較表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              東京都には名前の似た女性向け訓練事業が複数あり、特に混同しやすいのが<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>です。どちらも東京都産業労働局の無料職業訓練ですが、<strong>目指す仕事がまったく違います</strong>。デジタルカレッジは事務職等での再就職に向けた実務デジタルスキル、ITエンジニア育成事業はエンジニア職への正社員就職に向けた開発・インフラスキルです。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>女性デジタルカレッジ事業</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>女性ITエンジニア育成事業</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>目指す仕事</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>事務職等での再就職（実務デジタルスキル）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>ITエンジニアとして都内IT関連企業等へ正社員就職</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>対象者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>結婚・出産・育児等で退職し再就職を希望する求職中の女性（年齢制限の記載なし。訓練開始時点で就業していないこと）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>原則39歳以下の女性。求職中または非正規雇用で就業中（申込時点で正社員でない方）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>学ぶ内容</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>Word／Excel／PowerPoint／Microsoft 365／Zoom・Teams／Excel VBA／生成AI活用</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>プログラミング（Java・Web）またはインフラクラウド（サーバ・AWS）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>期間・形式</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>通学5日間（入門）／通学15日間＋2か月フォローアップ（基礎及び応用）。10:00〜15:00</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>6か月。eラーニング主体＋月2回の集合型訓練（新宿会場）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>費用</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>受講料・託児無料（入門のみテキスト2,640円自己負担）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>受講料・PCレンタル無料（交通費・資格受験料は自己負担）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>託児</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>両コースとも訓練会場と同施設で無料（生後6か月以上〜未就学児）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>集合型訓練時に事前予約制の託児サービスあり</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>令和8年度定員</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>670名</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>500名</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>選考</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>入門: 抽選／基礎及び応用: 原則オンライン選考</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>公式サイトから期ごとに申込</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>運営受託</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>学校法人大原学園</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>アデコ株式会社（令和7年度〜）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://tokyo-woman-d.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>女性デジタルカレッジ事業 公式サイト</a>／<a href="https://women-tokyo-en.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業 公式サイト</a>／<a href="https://www.metro.tokyo.lg.jp/information/press/2026/04/2026043015" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>東京都報道発表（2026年4月）</a>（いずれも2026年7月参照）
          </p>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>どちらを選ぶ？の目安</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>短期間でデジタルスキルを固めて事務系で再就職したい</strong> → 女性デジタルカレッジ事業。5日または15日で完結し、託児が全日程に付きます。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>ITエンジニアという専門職に踏み出したい（39歳以下）</strong> → <a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>。6か月かけて開発・インフラを学び、職業紹介まで受けられます。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>まだ迷っている</strong> → デジタルカレッジで基礎を固めてから、エンジニア職への挑戦は<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験からのITエンジニア転職ガイド</a>で情報収集する順番も選べます。</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec6 申込ステップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">申込方法と受講までのステップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              申込は公式サイトのWebフォームまたは郵送で行います。同一募集期間中に申し込めるのは1会場のみで、入門コースは抽選、基礎及び応用コースは原則オンライン選考で受講者が決まります。落選しても次の回・別会場に再応募できます。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "ハローワークまたは東京しごとセンターに登録", "申込要件として、ハローワークの求職登録または東京しごとセンター（飯田橋・多摩）の利用者登録が必要です。未登録の方は先に手続きを済ませましょう。"],
              ["STEP2", "公式サイトで日程・会場・募集期間を確認", "会場（三鷹・千代田・港・渋谷など）と開講日が期ごとに公開されます。託児利用の可否（月齢条件が施設で異なる）もあわせて確認を。"],
              ["STEP3", "Webまたは郵送で申込", "公式サイトの申込フォームからエントリー（郵送申込も可）。同じ募集期間には1会場のみ申込可能です。"],
              ["STEP4", "抽選・選考の結果を待つ", "入門コースは抽選（締切後1週間程度でメール通知）、基礎及び応用コースは原則オンラインでのヒアリング選考です。受講決定後、託児希望者は託児申込書を提出します。"],
              ["STEP5", "訓練受講→修了後の就職支援へ", "10:00〜15:00の通学訓練（入門5日・基礎及び応用15日）を修了。基礎及び応用コースは修了後2か月間、PC・Wi-Fi貸与つきのフォローアップと就職支援を受けながら再就職活動を進めます。"],
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
            出典: 女性デジタルカレッジ事業 公式サイト 各コース案内・Q&A（2026年7月参照）。申込期限・空き状況は期ごとに変わるため、必ず<a href="https://tokyo-woman-d.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>公式サイト</a>で確認してください。
          </p>
        </div>
      </section>

      {/* sec7 修了後 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">修了後の再就職・転職活動の進め方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              本事業は<strong>就職が保証される制度ではありません</strong>。基礎及び応用コースには2か月間のフォローアップ（キャリアコンサルティング・書類添削・模擬面接）が付きますが、最終的に内定を取るのは自分自身の就職活動です。訓練の成果を活かすために、次の3つを意識しましょう。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>1. 習得スキルを職務経歴書に具体的に書く</h3>
              <p className="text-sm text-text-light leading-relaxed">「Word・Excel・PowerPointの実務操作」「Excel VBAによる作業効率化」「ChatGPT等生成AIの業務活用」など、訓練で扱った項目をそのままスキル欄に落とし込めます。都の職業訓練を修了した事実自体が、ブランク明けの学習意欲の証明になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>2. ハローワーク・しごとセンターと民間サービスを併用する</h3>
              <p className="text-sm text-text-light leading-relaxed">修了後はハローワークまたは東京しごとセンターでの職業相談が前提ですが、民間の転職エージェント・転職サイトを併用すると求人の選択肢が広がります。自分に合うサービスの選び方は<a href="/ranking/" className="underline" style={{ color: "#7c3a55" }}>おすすめ転職エージェント・転職サイトランキング</a>を参考にしてください。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>3. その先の「IT職種」への道も視野に入れる</h3>
              <p className="text-sm text-text-light leading-relaxed">デジタルカレッジで基礎を固めた後、開発・インフラといった専門職に興味が湧いたら、<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>（39歳以下）や独学・スクールでのステップアップという道もあります。未経験からの進み方は<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験からITエンジニアになる方法</a>で全体像を確認できます。</p>
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
            <a href="/articles/women-it-support-map/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>全国の女性向けIT訓練・支援まとめ</h3><p className="text-sm text-text-light">公的支援の全体像ハブ</p></a>
            <a href="/articles/tokyo-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都 女性ITエンジニア育成事業ガイド</h3><p className="text-sm text-text-light">エンジニア職を目指す6か月の無料訓練</p></a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からITエンジニアになる方法</h3><p className="text-sm text-text-light">学習〜転職までの完全ロードマップ</p></a>
            <a href="/articles/return-to-work/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ブランクからの復職ガイド</h3><p className="text-sm text-text-light">育児等のブランク明けの再就職戦略</p></a>
            <a href="/articles/mama-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ママエンジニアの働き方</h3><p className="text-sm text-text-light">育児と両立するキャリアの作り方</p></a>
            <a href="/articles/tokyo/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京の女性エンジニア転職ガイド</h3><p className="text-sm text-text-light">求人動向・年収相場・企業の選び方</p></a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 東京都「女性デジタルカレッジ事業（入門コース・基礎及び応用コース）」公式サイト <a href="https://tokyo-woman-d.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://tokyo-woman-d.metro.tokyo.lg.jp/</a>（2026年7月参照）</li>
            <li>出典: 同公式サイト「入門コース」案内 <a href="https://tokyo-woman-d.metro.tokyo.lg.jp/about2" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://tokyo-woman-d.metro.tokyo.lg.jp/about2</a>（2026年7月参照）</li>
            <li>出典: 同公式サイト「基礎及び応用コース」案内 <a href="https://tokyo-woman-d.metro.tokyo.lg.jp/about" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://tokyo-woman-d.metro.tokyo.lg.jp/about</a>（2026年7月参照）</li>
            <li>出典: TOKYOはたらくネット「女性デジタルカレッジ事業」 <a href="https://www.hataraku.metro.tokyo.lg.jp/kyushokusha-kunren/etc/jyosei_digital/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.hataraku.metro.tokyo.lg.jp/kyushokusha-kunren/etc/jyosei_digital/index.html</a>（2026年7月参照）</li>
            <li>出典: 東京都報道発表「デジタルスキルの習得やキャリアチェンジ等支援 受講生募集」（2026年4月30日） <a href="https://www.metro.tokyo.lg.jp/information/press/2026/04/2026043015" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://www.metro.tokyo.lg.jp/information/press/2026/04/2026043015</a>（2026年7月参照）</li>
            <li>出典: 東京都「令和8年度女性ITエンジニア育成事業」公式サイト <a href="https://women-tokyo-en.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#7c3a55" }}>https://women-tokyo-en.metro.tokyo.lg.jp/</a>（2026年7月参照）</li>
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
