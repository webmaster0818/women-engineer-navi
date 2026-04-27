import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "女性エンジニア転職ナビ | 女性ITエンジニアのための転職エージェント比較サイト",
  description:
    "女性エンジニアに特化した転職エージェント比較サイト。産休育休取得率・リモートワーク率・女性アドバイザー有無など、女性ならではの視点で徹底比較。あなたに最適な転職エージェントが見つかります。",
  alternates: { canonical: "/" },
};

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "女性特化の比較基準",
    description: "産休育休取得率・女性アドバイザー在籍・女性向けサポートなど、女性エンジニアが本当に知りたい情報で比較できます。",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "産休育休データ掲載",
    description: "紹介先企業の産休育休取得実績や復帰率など、ライフイベントを見据えたキャリア設計に役立つデータを掲載。",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "リモートワーク率",
    description: "各エージェントが扱うリモートワーク可能な求人の割合を独自調査。柔軟な働き方を実現する転職をサポートします。",
  },
];

const stats = [
  { value: "8社+", label: "掲載エージェント" },
  { value: "6つ", label: "比較項目" },
  { value: "多数", label: "口コミ掲載" },
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
      "可能です。ワークポートやReWorksなど、未経験者向けの研修制度やサポートが充実したエージェントを活用することで、未経験からのエンジニア転職も実現できます。",
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
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
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
      <section className="section-primary-light py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-gradient">あなたらしいキャリアを、</span>
            <br />
            <span className="text-gradient">IT業界で。</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
            女性エンジニアのための転職エージェント比較サイト。
            <br className="hidden md:block" />
            産休育休・リモートワーク・女性アドバイザーなど、
            <br className="hidden md:block" />
            女性ならではの視点で最適なエージェントが見つかります。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ranking/" className="btn-cta text-base">
              おすすめエージェントを見る
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/age-guide/" className="btn-outline text-base">
              年代別ガイドを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            <span className="text-gradient">女性エンジニア転職ナビ</span>の特徴
          </h2>
          <p className="mt-4 text-center text-text-light">
            他の比較サイトにはない、女性エンジニアに特化した情報をお届けします
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="card text-center">
                <div className="w-16 h-16 mx-auto bg-primary-light rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
                <p className="mt-3 text-sm text-text-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-text-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            よくある質問
          </h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card">
                <h3 className="font-bold text-base flex items-start gap-3">
                  <span className="text-primary font-bold text-lg leading-none mt-0.5">Q</span>
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm text-text-light leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-primary-light py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            あなたに最適なエージェントを見つけよう
          </h2>
          <p className="mt-4 text-text-light">
            女性エンジニアの転職に強い8社を徹底比較。今すぐチェック！
          </p>
          <div className="mt-8">
            <Link href="/ranking/" className="btn-cta text-base">
              おすすめランキングを見る
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
