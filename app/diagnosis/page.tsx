import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import Diagnosis from "./Diagnosis";

export const metadata: Metadata = {
  title: "女性エンジニア向け転職エージェント診断｜6つの質問で無料診断【2026年】",
  description:
    "6つの質問に答えるだけで、女性エンジニアにおすすめの転職エージェント8社からあなたに合う1社を無料診断。経験段階・重視するサポート・働き方・志望領域から相性の良いエージェントが分かります。登録不要・完全無料。",
  alternates: { canonical: "https://women-engineer.com/diagnosis/" },
  openGraph: {
    title: "女性エンジニア向け転職エージェント診断｜6つの質問で無料診断",
    description:
      "6つの質問で、女性エンジニア向け転職エージェント8社からあなたに合う1社を無料診断。",
    url: "https://women-engineer.com/diagnosis/",
    type: "website",
  },
};

const faqs = [
  {
    question: "エージェント診断は無料ですか？",
    answer:
      "はい、完全無料でご利用いただけます。会員登録や個人情報の入力は不要で、6つの質問に答えるだけですぐに結果が分かります。",
  },
  {
    question: "診断結果のエージェントは必ず登録しないといけませんか？",
    answer:
      "いいえ、登録の義務はありません。診断結果は各エージェントの特徴をもとにした「相性の目安」です。結果を参考に、ランキングや各社の詳細ページで比較してご検討ください。",
  },
  {
    question: "診断結果はどう活用すればよいですか？",
    answer:
      "診断で相性の良いエージェントを軸に、ランキングで2〜3社を比較して併用するのがおすすめです。複数社に登録することで求人の比較や担当者との相性も見極めやすくなります。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const agents = [
  { name: "ワークポート", tag: "未経験からの育成に強い", href: "/reviews/workport/" },
  { name: "type女性の転職エージェント", tag: "女性の転職支援に長年の実績", href: "/reviews/type-woman/" },
  { name: "レバテックキャリア", tag: "IT・Web特化で専門性が高い", href: "/reviews/levtech/" },
  { name: "ReWorks", tag: "フルリモート求人に特化", href: "/reviews/reworks/" },
  { name: "リクルートエージェント", tag: "業界最大手・求人数No.1級", href: "/reviews/recruit-agent/" },
  { name: "doda", tag: "求人数トップクラスの総合型", href: "/reviews/doda/" },
  { name: "Geekly", tag: "IT・Web・ゲーム業界に特化", href: "/reviews/geekly/" },
  { name: "Green", tag: "IT業界のカジュアル転職", href: "/reviews/green/" },
];

export default function DiagnosisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4">
        <Breadcrumb
          items={[{ href: "/", label: "トップ" }, { label: "エージェント診断" }]}
        />
      </div>

      {/* Hero */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="eyebrow justify-center">Agent Diagnosis</p>
          <h1 className="mt-3 text-2xl md:text-4xl font-bold leading-tight">
            あなたに合う
            <span className="text-gradient">転職エージェント</span>
            を無料診断
          </h1>
          <p className="mt-4 text-text-light leading-relaxed">
            6つの質問に答えるだけ。女性エンジニアに人気の8社から、あなたの状況・希望に合った1社を無料で診断します。登録不要・所要1分。
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="py-10">
        <div className="max-w-2xl mx-auto px-4">
          <Diagnosis />
        </div>
      </section>

      {/* 8社の特徴 */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center">
            診断で比較する8つの転職エージェント
          </h2>
          <p className="mt-2 text-sm text-text-light text-center">
            それぞれ強みやサポートの特徴が異なります
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {agents.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="block rounded-lg border border-border bg-white p-4 hover:border-primary transition-colors group"
              >
                <p className="text-sm font-bold text-text group-hover:text-primary">
                  {a.name}
                </p>
                <p className="mt-1 text-xs text-text-light">{a.tag}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/ranking/" className="btn-outline text-sm">
              8社の詳しい比較ランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.question} className="group card">
                <summary className="cursor-pointer text-sm font-bold text-text list-none flex justify-between items-center">
                  {f.question}
                  <span className="ml-4 shrink-0 text-primary transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-3 text-sm text-text-light leading-relaxed">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
