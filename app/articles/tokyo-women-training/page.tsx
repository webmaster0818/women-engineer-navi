import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "東京都の女性ITエンジニア育成事業とは？内容・費用・申込方法と評判【2026年】",
  description:
    "東京都「女性ITエンジニア育成事業」を公式情報をもとに解説。対象者（原則39歳以下の女性）、プログラミング/インフラクラウドの2コース、6か月の訓練内容、受講料無料の範囲、申込方法、就職支援、応募前のチェックポイントまで。事業終了後の転職活動の進め方も紹介します。",
  alternates: { canonical: "/articles/tokyo-women-training/" },
  openGraph: {
    title: "東京都の女性ITエンジニア育成事業とは？内容・費用・申込方法と評判【2026年】",
    description:
      "東京都「女性ITエンジニア育成事業」の対象者・コース内容・費用（受講料無料）・申込方法・就職支援を公式情報をもとに解説。応募前のチェックポイントと修了後の転職活動の進め方も紹介。",
    url: "https://women-engineer.com/articles/tokyo-women-training/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "東京都の女性ITエンジニア育成事業とは？内容・費用・申込方法と評判【2026年】",
  datePublished: "2026-06-12",
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
    "東京都「女性ITエンジニア育成事業」の対象者・コース内容・費用・申込方法・就職支援を公式情報をもとに解説。応募前のチェックポイントと修了後の転職活動の進め方も紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/tokyo-women-training/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "東京都の女性ITエンジニア育成事業は本当に無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "受講料は無料です。訓練に使うパソコンのレンタルも無料で、集合型訓練の会場（新宿）には事前予約制の託児サービスもあります。ただし、集合型訓練に通う交通費と、資格を受験する場合の受験費用は自己負担です。完全にゼロ円ではなく「受講料・PC無料＋交通費・受験料は自己負担」と理解しておくと、応募後のギャップがありません（出典: 令和8年度女性ITエンジニア育成事業 公式サイト、2026年6月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "女性ITエンジニア育成事業の対象者は誰ですか？40歳以上でも応募できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "対象は「原則39歳以下の女性」で、求職中または非正規雇用で就業中の方（申込時点で正社員でない方）、都内のIT関連企業等への正社員就職を希望する方、学生でない方という条件があります。年齢は「原則」39歳以下とされているため、40歳以上の方は運営事務局（0120-630-023）に直接確認するのが確実です。対象外だった場合も、東京都には女性デジタルカレッジ事業など別の訓練もあるほか、民間スクールや教育訓練給付の活用という選択肢があります。",
      },
    },
    {
      "@type": "Question",
      name: "働きながらでも受講できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "非正規雇用で就業中の方も対象に含まれており、訓練はeラーニングが主体で集合型訓練は月2回（新宿会場）です。自分のペースで学習を進めやすい設計のため、パート・派遣などで働きながらの受講も想定されています。ただしプログラミングコースで約148時間、インフラクラウドコースで約142時間の学習時間が目安とされており、6か月で割ると週6時間前後の学習を継続する必要があります。就業中の方は学習時間を確保できるかを先に見積もっておきましょう。",
      },
    },
    {
      "@type": "Question",
      name: "女性ITエンジニア育成事業の口コミ・評判はどこで確認できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "行政の委託訓練のため、民間スクールのような口コミサイトのまとまった評価はほとんど存在しません。確実なのは一次情報での確認です。公式サイトでカリキュラム・スケジュール・就職支援の内容を確認し、不明点は運営事務局（0120-630-023）に直接質問するのが最も正確です。個人ブログやSNSの体験談は参考になりますが、年度によって運営事業者が変わる事業（令和6年度ワークポート、令和7年度からアデコ）のため、古い年度の感想が現行の内容と異なる場合がある点に注意してください。",
      },
    },
    {
      "@type": "Question",
      name: "修了したら必ずITエンジニアとして就職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "就職が保証される制度ではありません。キャリアアドバイザーによるキャリアカウンセリング、履歴書・職務経歴書の作成サポート、面接対策、職業紹介・マッチングといった就職支援が訓練と一体的に提供されますが、最終的には本人の学習成果と転職活動次第です。事業の職業紹介だけに頼らず、レバテックキャリアなどのIT特化型エージェントやtype女性の転職エージェントを併用して求人の選択肢を広げると、訓練で得たスキルを活かせる企業に出会える確率が上がります。",
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
        style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "東京都の女性ITエンジニア育成事業" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              支援制度ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              東京都の女性ITエンジニア育成事業とは？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                内容・費用・申込方法と応募前に知るべきポイント【2026年】
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
            <h2 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>先に結論：3つの即答</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>どんな事業？</strong> 東京都（産業労働局）が実施する職業訓練。未経験からITエンジニアを目指す女性向けに、eラーニング＋月2回の集合型訓練（6か月）と就職支援を一体で提供します。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>誰が対象？</strong> 原則39歳以下の女性で、求職中または非正規雇用で就業中（申込時点で正社員でない）、都内のIT関連企業等への正社員就職を希望する方（学生は除く）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>無料？</strong> 受講料は無料、PCレンタルも無料。交通費と資格受験費用のみ自己負担です。</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              出典: <a href="https://women-tokyo-en.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0891b2" }}>令和8年度女性ITエンジニア育成事業 公式サイト</a>（2026年6月参照）
            </p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. 女性ITエンジニア育成事業とは</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 事業概要表（対象者・期間・費用・内容・申込）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 2つのコース内容（プログラミング／インフラクラウド）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 費用は無料？自己負担になるもの</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 申込方法と受講までのステップ</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 口コミ・評判の調べ方と応募前のチェックポイント</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 向いている人・向いていない人</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. 事業終了後の転職活動の進め方</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. おすすめ転職エージェント</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性ITエンジニア育成事業とは</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「女性ITエンジニア育成事業」は、東京都（産業労働局）が実施する女性向けの職業訓練・就職支援事業です。未経験からITエンジニアを目指す女性を対象に、プログラミングやITインフラの基礎に関する訓練と、職業紹介等の就職支援を<strong>一体的に</strong>提供するのが特徴です（出典: TOKYOはたらくネット、2026年6月参照）。
            </p>
            <p>
              訓練はeラーニングが主体で、月2回の集合型訓練を新宿の会場（新宿サンエービル）で実施。期間は6か月で、集合型訓練の会場には事前予約制の託児サービスも用意されています。育児中の方や、非正規雇用で働きながら学びたい方でも参加しやすい設計です。
            </p>
            <p>
              運営は年度ごとに東京都から委託された民間事業者が担っており、令和6年度（2024年度）は株式会社ワークポート、令和7年度（2025年度）からはアデコ株式会社が受託しています。令和8年度（2026年度）は2026年4月30日に募集が開始されました（出典: 各社プレスリリース・公式サイト、2026年6月参照）。
            </p>
            <p>
              「都の事業」という安心感に加え、訓練（スキル習得）と就職支援（キャリアカウンセリング〜職業紹介）がセットになっている点が、独学や一般的な<a href="/articles/programming-school/" className="underline" style={{ color: "#0891b2" }}>プログラミングスクール</a>との大きな違いです。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 概要表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">事業概要表（対象者・期間・費用・内容・申込）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>内容（公式情報）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d1dce5" }}>正式名称</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d1dce5" }}>女性ITエンジニア育成事業（東京都産業労働局）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>対象者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>原則39歳以下の女性／求職中または非正規雇用で就業中（申込時点で正社員でない方）／都内のIT関連企業等への正社員就職を希望する方／学生でない方</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d1dce5" }}>コース</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d1dce5" }}>プログラミングコース（約148時間）／インフラクラウドコース（約142時間）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>期間・形式</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>6か月。eラーニング主体＋月2回の集合型訓練（新宿会場）。託児サービスあり（事前予約制・定員あり）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d1dce5" }}>費用</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d1dce5" }}>受講料無料・PCレンタル無料（交通費・資格受験費用は自己負担）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>就職支援</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>キャリアアドバイザーによるカウンセリング、履歴書・職務経歴書作成サポート、面接対策、職業紹介・マッチング</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d1dce5" }}>申込方法</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d1dce5" }}>公式サイト（women-tokyo-en.metro.tokyo.lg.jp）から申込。期ごとに募集（2026年6月時点: 前期2期生は2026年7月1日開始・申込期限6月24日）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>運営・問い合わせ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>アデコ株式会社（東京都から受託）／運営事務局 0120-630-023（火〜金 10:00〜18:00、土 10:00〜17:00）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: <a href="https://women-tokyo-en.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0891b2" }}>令和8年度女性ITエンジニア育成事業 公式サイト</a>／<a href="https://www.hataraku.metro.tokyo.lg.jp/kyushokusha-kunren/etc/jyosei_en/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0891b2" }}>TOKYOはたらくネット</a>（いずれも2026年6月参照）。募集状況・定員は期ごとに変わるため、必ず公式サイトで最新情報を確認してください。
          </p>
        </div>
      </section>

      {/* sec3 コース内容 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">2つのコース内容（プログラミング／インフラクラウド）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              コースは2つから選択します。どちらも「基礎知識→専門分野→演習→試験対策」という流れで、未経験を前提に組まれています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>プログラミングコース</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>学習時間の目安: 約148時間</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>内容: 基礎知識／Web制作（HTML・CSS）／Java／開発演習／試験対策</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>Java・Web系の開発エンジニアを目指す人向け</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">Javaは業務システムやWebサービスで広く使われる言語で、求人数が多いのが特徴。開発職に進みたい人の標準的な入口です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>インフラクラウドコース</h3>
              <ul className="space-y-2 text-sm text-text-light mb-4">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>学習時間の目安: 約142時間</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>内容: 基礎知識／サーバ基礎／クラウド（AWS）／構築演習／試験対策</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3aed" }} className="mt-1 font-bold">&#10003;</span><span>サーバー・クラウド領域のインフラエンジニアを目指す人向け</span></li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">AWSをはじめとするクラウドスキルは需要が高く、未経験採用の枠も比較的多い領域。コードを書くより仕組みづくりに興味がある人に向きます。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            どちらのコースにも試験対策が含まれています。IT全般の土台を固めたい人は、国家試験である<a href="/articles/cert-kihonjoho/" className="underline" style={{ color: "#0891b2" }}>基本情報技術者試験</a>の学習を並行すると、訓練内容の理解も転職時のアピールも強くなります。
          </p>
        </div>
      </section>

      {/* sec4 費用 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">費用は無料？自己負担になるもの</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              受講料は<strong>無料</strong>です。一般的なプログラミングスクールが数十万円かかることを考えると、これが本事業の最大のメリットです。ただし「全部タダ」ではないため、無料の範囲と自己負担を正確に押さえておきましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>無料のもの</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>受講料（eラーニング・集合型訓練とも）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>パソコンのレンタル</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>就職支援（カウンセリング・書類添削・面接対策・職業紹介）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>託児サービス（集合型訓練時・事前予約制・定員あり）</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#f97066" }}>自己負担のもの</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-1 font-bold">&#8226;</span><span>集合型訓練（新宿会場・月2回）への交通費</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-1 font-bold">&#8226;</span><span>資格を受験する場合の受験費用</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-1 font-bold">&#8226;</span><span>自宅学習用の通信環境などの生活インフラ</span></li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-text-light mt-4">
            出典: 令和8年度女性ITエンジニア育成事業 公式サイト（2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec5 申込ステップ */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">申込方法と受講までのステップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              申込は公式サイトから行います。期ごとに募集が区切られており、2026年6月時点では前期2期生（2026年7月1日開始）の申込期限が<strong>6月24日</strong>と案内されています。コースによっては「残りわずか」「募集終了」となるため、検討中の人は早めの行動が安全です。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "公式サイトで募集状況を確認", "コース（プログラミング／インフラクラウド）ごとに募集状況が異なります。希望コースの開始時期・申込期限をまず確認しましょう。"],
              ["STEP2", "対象要件をセルフチェック", "原則39歳以下／正社員でない／都内IT企業等への正社員就職希望／学生でない、の4条件を確認。判断に迷う場合は運営事務局（0120-630-023）へ。"],
              ["STEP3", "公式サイトから申込", "公式サイト（women-tokyo-en.metro.tokyo.lg.jp）の申込フォームからエントリーします。"],
              ["STEP4", "訓練開始（6か月）", "eラーニング主体で学習を進め、月2回の集合型訓練（新宿）に参加。学習時間の目安は約142〜148時間です。"],
              ["STEP5", "就職支援を受けて転職活動へ", "キャリアアドバイザーの伴走のもと、書類作成・面接対策・職業紹介を受けながら、都内IT企業への正社員就職を目指します。"],
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
        </div>
      </section>

      {/* sec6 口コミ・評判とチェックポイント */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">口コミ・評判の調べ方と応募前のチェックポイント</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「東京都 女性ITエンジニア育成事業 口コミ」と検索する人は多いものの、行政の委託訓練のため、民間スクールのような口コミサイトのまとまった評価は<strong>ほとんど存在しません</strong>。個人ブログやSNSに体験談が散見される程度です。
            </p>
            <p>
              さらに注意したいのは、この事業は<strong>年度ごとに運営事業者が変わる</strong>点です（令和6年度は株式会社ワークポート、令和7年度からはアデコ株式会社が受託）。過去の体験談がそのまま現行のカリキュラム・運営に当てはまるとは限りません。口コミを探すより、次のチェックポイントを一次情報（公式サイト・運営事務局）で確認するほうが、応募判断として確実です。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>応募前に公式で確認したい7つのチェックポイント</h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">1.</span><span><strong>学習時間を確保できるか</strong> — 約142〜148時間／6か月。週6時間前後の継続が必要</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">2.</span><span><strong>月2回、新宿に通えるか</strong> — 集合型訓練は新宿会場。交通費は自己負担</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">3.</span><span><strong>託児の空き状況</strong> — 事前予約制・定員ありのため、育児中の人は早めに確認</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">4.</span><span><strong>どちらのコースが自分の志向に合うか</strong> — 開発（Java/Web）かインフラ（サーバ/AWS）か</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">5.</span><span><strong>目指せる資格と受験費用</strong> — 試験対策は含まれるが受験料は自己負担</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">6.</span><span><strong>職業紹介で扱う求人の傾向</strong> — どんな企業への紹介実績があるかを事務局に質問</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">7.</span><span><strong>申込期限と次の期の予定</strong> — 期ごとに募集が締め切られるため、逃した場合の次回も確認</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec7 向いている人 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">向いている人・向いていない人</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>向いている人</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>39歳以下で、都内のIT企業に正社員として就職したい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>スクール費用をかけずに体系的な訓練を受けたい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>非正規で働きながら、eラーニング中心で学びたい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>託児サービスを使いながら学習時間を確保したい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>学習だけでなく就職支援まで伴走してほしい</span></li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#f97066" }}>別の選択肢を検討したほうがよい人</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-1 font-bold">&#8226;</span><span>現在正社員の人（申込時点で正社員でないことが条件）→ 在職のまま学ぶなら<a href="/articles/reskilling-leave/" className="underline" style={{ color: "#0891b2" }}>リスキリング休暇・社内制度の活用</a>や民間スクールを検討</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-1 font-bold">&#8226;</span><span>40歳以上の人（原則39歳以下）→ 東京都の他の職業訓練や教育訓練給付つきの<a href="/articles/programming-school/" className="underline" style={{ color: "#0891b2" }}>プログラミングスクール</a>を検討</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-1 font-bold">&#8226;</span><span>都外での就職を希望する人（都内IT関連企業等への就職希望が条件）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#f97066" }} className="mt-1 font-bold">&#8226;</span><span>今すぐ転職したい人 → 訓練6か月を待たず、<a href="/articles/beginner/" className="underline" style={{ color: "#0891b2" }}>未経験からのITエンジニア転職ガイド</a>を参考にポテンシャル採用を狙う方法も</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec8 事業終了後の転職活動 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">事業終了後の転職活動の進め方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              本事業にはキャリアアドバイザーによる職業紹介・マッチングが含まれますが、<strong>就職が保証される制度ではありません</strong>。最終的に内定を取るのは自分自身の転職活動です。訓練の終盤からは、次の3つを並行して進めると成功率が上がります。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>1. 学習成果を「見せられる形」にする</h3>
              <p className="text-sm text-text-light leading-relaxed">開発演習・構築演習の成果物を整理し、ポートフォリオや職務経歴書に落とし込みます。「6か月・約150時間の都の訓練を完走した」こと自体が、未経験採用では継続力の証明になります。資格（試験対策の延長で取得できるもの）があれば書類通過率がさらに上がります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>2. 事業の職業紹介＋転職エージェントを併用する</h3>
              <p className="text-sm text-text-light leading-relaxed">事業の紹介求人だけに絞ると選択肢が限られます。IT特化型・女性特化型の転職エージェントを併用すれば、未経験可・研修ありの求人や、産休育休実績のある企業まで比較できます。エージェントは無料で使えるため、併用にデメリットはほぼありません。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>3. 東京のIT求人市場を把握する</h3>
              <p className="text-sm text-text-light leading-relaxed">本事業は都内IT企業への就職が前提です。東京の求人動向・年収相場・働きやすい企業の見極め方は<a href="/articles/tokyo/" className="underline" style={{ color: "#0891b2" }}>東京の女性エンジニア転職ガイド</a>で詳しく解説しています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec9 エージェント */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>訓練で身につけたスキルを評価してくれる企業に出会うには、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し、東京の自社開発・メガベンチャー求人が豊富。技術に精通したアドバイザーが、年収相場の高い東京で適正な年収交渉をサポートしてくれます。リモート求人や女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、東京のスタートアップ〜大手まで幅広い求人を保有。スピーディーなマッチングと年収アップ実績に定評があり、東京の高年収求人を狙う人に向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">首都圏（東京・神奈川・千葉・埼玉）に強く、産休育休やリモートなど女性のキャリア継続に配慮した求人を中心に紹介。保活や通勤を踏まえた働き方の条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
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

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>未経験からITエンジニアになる方法</h3><p className="text-sm text-text-light">学習〜転職までの完全ロードマップ</p></a>
            <a href="/articles/tokyo/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>東京の女性エンジニア転職ガイド</h3><p className="text-sm text-text-light">求人動向・年収相場・企業の選び方</p></a>
            <a href="/articles/programming-school/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性向けプログラミングスクールの選び方</h3><p className="text-sm text-text-light">公的訓練と民間スクールの比較に</p></a>
            <a href="/articles/cert-kihonjoho/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>基本情報技術者試験ガイド</h3><p className="text-sm text-text-light">ITの土台を証明する国家資格</p></a>
            <a href="/articles/reskilling-leave/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>リスキリングでエンジニアを目指す</h3><p className="text-sm text-text-light">在職中に学ぶ制度・支援の活用法</p></a>
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>出典: 東京都「令和8年度女性ITエンジニア育成事業」公式サイト <a href="https://women-tokyo-en.metro.tokyo.lg.jp/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0891b2" }}>https://women-tokyo-en.metro.tokyo.lg.jp/</a>（2026年6月参照）</li>
            <li>出典: TOKYOはたらくネット「女性ITエンジニア育成事業」 <a href="https://www.hataraku.metro.tokyo.lg.jp/kyushokusha-kunren/etc/jyosei_en/index.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0891b2" }}>https://www.hataraku.metro.tokyo.lg.jp/kyushokusha-kunren/etc/jyosei_en/index.html</a>（2026年6月参照）</li>
            <li>出典: アデコ株式会社「東京都の令和7年度『女性ITエンジニア育成事業』の運営を開始」 <a href="https://www.adeccogroup.jp/pressroom/2025/0501_03" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0891b2" }}>https://www.adeccogroup.jp/pressroom/2025/0501_03</a>（2026年6月参照）</li>
            <li>出典: 株式会社ワークポート「東京都の『女性ITエンジニア育成事業』を受託」 <a href="https://www.workport.co.jp/corporate/news/detail/891.html" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0891b2" }}>https://www.workport.co.jp/corporate/news/detail/891.html</a>（2026年6月参照）</li>
          </ul>
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
