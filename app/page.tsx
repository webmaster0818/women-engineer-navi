import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CareeHUB for woman | 女性ITエンジニアのための転職エージェント比較サイト",
  description:
    "女性エンジニアに特化した転職エージェント比較サイト。産休育休取得率・リモートワーク率・女性アドバイザー有無など、女性ならではの視点で徹底比較。あなたに最適な転職エージェントが見つかります。",
  alternates: { canonical: "/" },
};

const reasons = [
  {
    no: "01",
    title: "女性視点の比較基準",
    description:
      "産休育休の取得実績、女性アドバイザーの在籍、復職後のキャリア支援。一般的な比較サイトが見落とす、女性エンジニアが本当に知りたい観点で各社を読み解きます。",
  },
  {
    no: "02",
    title: "数字は、すべて出典つき",
    description:
      "年収も求人倍率も、厚生労働省・経済産業省などの公的統計を一次資料から確認して掲載。印象論ではなく、確かなデータをもとに判断できます。",
  },
  {
    no: "03",
    title: "ライフイベントと歩む設計",
    description:
      "出産・育児・リモートへの移行まで見据えた長期のキャリア設計を前提に。一度の転職ではなく、これからの働き方そのものをともに考えます。",
  },
];

const stats = [
  { value: "100", unit: "本超", label: "実データで書いた記事" },
  { value: "8", unit: "社", label: "女性視点で比較" },
  { value: "全", unit: "出典明記", label: "公的統計に準拠" },
];

const themes = [
  { label: "職種別キャリア", desc: "バックエンド・データ・AI ほか", href: "/articles/career-path/" },
  { label: "年収・単価データ", desc: "年代別・職種別・言語別の実額", href: "/articles/salary/" },
  { label: "資格・学習", desc: "基本情報・AWS・Python ほか", href: "/articles/certification/" },
  { label: "未経験から転職", desc: "ロードマップと現実", href: "/articles/beginner/" },
  { label: "年代別の転職", desc: "20代・30代・40代の戦略", href: "/articles/age-30s/" },
  { label: "リモート・働き方", desc: "在宅・時短・フリーランス", href: "/articles/remote-jobs/" },
  { label: "産休育休・両立", desc: "ライフイベントとキャリア", href: "/articles/mama-engineer/" },
  { label: "選考・面接対策", desc: "職務経歴書・技術面接ほか", href: "/articles/interview-guide/" },
];

const faqs = [
  {
    question: "女性エンジニアが転職エージェントを選ぶポイントは？",
    answer:
      "女性エンジニアの転職では、IT業界への専門性に加えて、産休育休制度の充実度・リモートワーク対応・女性アドバイザーの在籍など、女性ならではの視点でエージェントを選ぶことが重要です。当サイトではこれらの基準で各社を比較しています。",
  },
  {
    question: "転職エージェントは複数登録した方がいいですか？",
    answer:
      "はい、2〜3社の登録がおすすめです。IT特化型と女性特化型を組み合わせることで、求人の幅が広がり、各エージェントの強みを活かした転職活動ができます。",
  },
  {
    question: "未経験からでも女性エンジニアとして転職できますか？",
    answer:
      "可能です。未経験者向けの研修制度やサポートが充実したエージェントを活用することで、未経験からのエンジニア転職も実現できます。職種ごとの難易度や学習ロードマップも記事で解説しています。",
  },
  {
    question: "転職エージェントの利用に費用はかかりますか？",
    answer:
      "いいえ、転職エージェントの利用は完全無料です。エージェントは企業側から紹介手数料を受け取るビジネスモデルのため、求職者が費用を負担することはありません。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="section-primary-light relative overflow-hidden">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 -top-10 select-none text-[12rem] md:text-[20rem] leading-none text-[#e3cdbb]/50"
          style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic" }}
        >
          &amp;
        </span>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow">For Women in Tech</p>
            <h1 className="mt-7 text-[2.1rem] md:text-[3.4rem] leading-[1.34] text-text">
              あなたらしい働き方を、
              <br />
              <span className="text-gradient">IT業界で</span>かなえる。
            </h1>
            <p className="mt-7 text-base md:text-lg text-text-light max-w-xl leading-[2]">
              産休育休、リモートワーク、女性アドバイザー。
              働く楽しさを手放さないための転職を、確かなデータと女性の視点でそっと後押しします。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/ranking/" className="btn-cta text-base">
                おすすめエージェントを見る
              </Link>
              <Link href="/diagnosis/" className="btn-outline text-base">
                あなたに合う1社を無料診断
              </Link>
            </div>
          </div>

          {/* Editorial manifesto panel */}
          <div className="md:col-span-5">
            <figure className="relative bg-[#fffaf4] border border-border rounded-sm p-8 md:p-9">
              <span aria-hidden className="absolute -top-3 left-7 text-secondary text-2xl leading-none">
                &#8220;
              </span>
              <blockquote
                className="text-lg md:text-xl text-text leading-[1.9]"
                style={{ fontFamily: "var(--font-shippori), serif" }}
              >
                キャリアも、暮らしも。
                <br />
                どちらかをあきらめないという選択を。
              </blockquote>
              <figcaption className="mt-7 pt-6 border-t border-border space-y-3">
                {[
                  "実データと公的統計にもとづく比較",
                  "すべての数値に出典と参照日を明記",
                  "女性エンジニアの視点で読み解く",
                ].map((t) => (
                  <p key={t} className="flex items-start gap-3 text-sm text-text-light">
                    <span aria-hidden className="text-secondary mt-0.5 leading-none">
                      &#9670;
                    </span>
                    {t}
                  </p>
                ))}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="eyebrow">Why We Are Different</p>
            <h2 className="mt-5 text-2xl md:text-[2.1rem] text-text leading-snug">
              比較サイトにはない、
              <span className="text-gradient">女性のための視点</span>
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-x-10 gap-y-12">
            {reasons.map((r) => (
              <div key={r.no} className="border-t border-border pt-6">
                <span className="numeral text-2xl">{r.no}</span>
                <h3 className="mt-3 text-xl text-text">{r.title}</h3>
                <p className="mt-4 text-sm text-text-light leading-[2]">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="section-light py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 divide-x divide-border">
            {stats.map((s) => (
              <div key={s.label} className="px-3 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className="text-4xl md:text-5xl text-primary"
                    style={{ fontFamily: "var(--font-shippori), serif", fontWeight: 700 }}
                  >
                    {s.value}
                  </span>
                  <span className="text-sm text-secondary font-medium">{s.unit}</span>
                </div>
                <div className="mt-3 text-xs md:text-sm text-text-light tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pickup agent */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="eyebrow">Pickup</p>
            <h2 className="mt-5 text-2xl md:text-[2.1rem] text-text leading-snug">
              注目の<span className="text-gradient">IT特化エージェント</span>
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-12 gap-8 items-center border border-border rounded-sm bg-[#fffaf4] p-8 md:p-10">
            <div className="md:col-span-7">
              <p
                className="text-xs tracking-[0.2em] text-secondary uppercase"
                style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic" }}
              >
                New Review
              </p>
              <h3
                className="mt-4 text-xl md:text-2xl text-text"
                style={{ fontFamily: "var(--font-shippori), serif" }}
              >
                テックゴー（TechGo）
              </h3>
              <p className="mt-5 text-sm md:text-base text-text-light leading-[2]">
                ITエンジニア転職に特化した転職エージェント。開発現場出身のアドバイザーによる企業別の選考対策と年収交渉力が強みで、公式サイトでは年収アップ金額
                平均138万円※を掲げています。経験を活かして年収を上げたい方は、まず無料キャリア面談で市場価値の把握から。
              </p>
              <p className="mt-3 text-xs text-text-light">
                ※2025年6〜7月において内定承諾をし、年収アップを実現された方の平均実績（テックゴー公式サイトの表記に基づく）
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-4">
              <Link href="/reviews/techgo/" className="btn-cta text-base text-center">
                テックゴーの口コミ・評判を読む
              </Link>
              <Link href="/articles/techgo-career-mendan/" className="btn-outline text-base text-center">
                無料キャリア面談の内容を知る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by theme */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="eyebrow">Find Your Path</p>
            <h2 className="mt-5 text-2xl md:text-[2.1rem] text-text leading-snug">
              目的から、記事を探す
            </h2>
            <p className="mt-4 text-text-light leading-[2]">
              職種・年収・資格・働き方まで。女性エンジニアの転職とキャリアを、テーマ別にまとめています。
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
            {themes.map((t) => (
              <Link key={t.href} href={t.href} className="card group block">
                <h3 className="text-sm md:text-base text-text group-hover:text-primary transition-colors">
                  {t.label}
                </h3>
                <p className="mt-2 text-xs text-text-light leading-relaxed">{t.desc}</p>
                <span className="mt-4 inline-block text-xs tracking-[0.2em] text-secondary uppercase"
                  style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic" }}>
                  Read
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/articles/category-index/" className="btn-cta text-base">
              すべての記事を見る
            </Link>
            <Link href="/articles/faq-all/" className="btn-outline text-base">
              よくある質問をまとめて見る
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <p className="eyebrow justify-center">Questions</p>
            <h2 className="mt-5 text-2xl md:text-[2.1rem] text-text">よくある質問</h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card">
                <h3 className="text-base text-text flex items-start gap-3">
                  <span className="numeral text-lg leading-none mt-0.5">Q</span>
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm text-text-light leading-[2] pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-footer py-20 text-center">
        <div className="rule-motif mb-8 opacity-80">
          <span aria-hidden>&#9670; &#9670; &#9670;</span>
        </div>
        <div className="relative max-w-2xl mx-auto px-4">
          <h2
            className="text-2xl md:text-[2rem] text-[#f3e7dd] leading-relaxed"
            style={{ fontFamily: "var(--font-shippori), serif" }}
          >
            あなたに合うエージェントを、見つけよう
          </h2>
          <p className="mt-5 text-[#c4ab9e] leading-[2]">
            女性エンジニアの転職に強い8社を、女性視点の6項目で徹底比較しています。
          </p>
          <div className="mt-9">
            <Link href="/ranking/" className="btn-cta text-base">
              おすすめランキングを見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
