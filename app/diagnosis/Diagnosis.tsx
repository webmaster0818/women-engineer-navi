"use client";

import { useState } from "react";
import Link from "next/link";

type Key =
  | "workport"
  | "reworks"
  | "typewoman"
  | "levtech"
  | "recruit"
  | "doda"
  | "geekly"
  | "green";

const AGENTS: Record<
  Key,
  { name: string; tagline: string; href: string; reason: string; accent: string }
> = {
  workport: {
    name: "ワークポート",
    tagline: "未経験からの育成に強い総合型",
    href: "/reviews/workport/",
    reason:
      "未経験からエンジニアを目指すあなたには、無料スクール「みんなのスクール」や東京都の女性ITエンジニア育成事業の受託実績を持つワークポートが向いています。学習から転職までを一貫して支援してもらえます。",
    accent: "#7c3a55",
  },
  reworks: {
    name: "ReWorks（リワークス）",
    tagline: "フルリモート求人に特化",
    href: "/reviews/reworks/",
    reason:
      "フルリモートで働きたいあなたには、フルリモート求人に特化したReWorksが向いています。場所に縛られない柔軟な働き方の求人を効率よく探せます。",
    accent: "#c15f47",
  },
  typewoman: {
    name: "type女性の転職エージェント",
    tagline: "女性の転職支援に25年以上の実績",
    href: "/reviews/type-woman/",
    reason:
      "女性ならではの相談（産休・育休、働き方）を重視するあなたには、女性の転職支援に長年取り組むtype女性の転職エージェントが向いています。ライフイベントを見据えたサポートが受けられます。",
    accent: "#7c3a55",
  },
  levtech: {
    name: "レバテックキャリア",
    tagline: "IT・Web特化で専門性が高い",
    href: "/reviews/levtech/",
    reason:
      "ITの専門性と年収アップを重視するあなたには、IT・Web領域に特化し技術理解の深いレバテックキャリアが向いています。スキルに見合った求人と年収交渉が期待できます。",
    accent: "#bd8a3c",
  },
  recruit: {
    name: "リクルートエージェント",
    tagline: "業界最大手・圧倒的な求人数",
    href: "/reviews/recruit-agent/",
    reason:
      "求人数の多さや大手の安心感を求めるあなたには、業界最大手で非公開求人も豊富なリクルートエージェントが向いています。選択肢を最大限に広げられます。",
    accent: "#c15f47",
  },
  doda: {
    name: "doda（デューダ）",
    tagline: "求人数トップクラスの総合型",
    href: "/reviews/doda/",
    reason:
      "幅広い求人から総合的に比較したいあなたには、業界トップクラスの求人数を持つ総合型のdodaが向いています。エージェントとサイトの両機能を使い分けられます。",
    accent: "#7c3a55",
  },
  geekly: {
    name: "Geekly（ギークリー）",
    tagline: "IT・Web・ゲーム業界に特化",
    href: "/reviews/geekly/",
    reason:
      "ゲーム・エンタメ業界も視野に入れたいあなたには、IT・Web・ゲーム業界に特化したGeeklyが向いています。専門領域に強いアドバイザーから的確な紹介を受けられます。",
    accent: "#bd8a3c",
  },
  green: {
    name: "Green（グリーン）",
    tagline: "IT業界のカジュアル転職",
    href: "/reviews/green/",
    reason:
      "自分のペースでカジュアルに探したいあなたには、IT業界のカジュアル転職に強いGreenが向いています。企業と直接やり取りしながら、気軽に情報収集を進められます。",
    accent: "#c15f47",
  },
};

const RELATED: Record<Key, { href: string; label: string }[]> = {
  workport: [
    { href: "/articles/beginner/", label: "未経験からエンジニアになる現実のロードマップ" },
    { href: "/articles/tokyo-women-training/", label: "東京都の女性ITエンジニア育成事業（受講料無料）" },
  ],
  reworks: [
    { href: "/articles/remote-jobs/", label: "在宅・リモート転職ガイド" },
    { href: "/articles/regional-remote/", label: "地方在住×フルリモートで転職する" },
  ],
  typewoman: [
    { href: "/articles/mama-engineer/", label: "ママエンジニアの働き方ガイド" },
    { href: "/articles/after-maternity/", label: "産休・育休後の転職｜復帰と転職の判断基準" },
  ],
  levtech: [
    { href: "/articles/salary/", label: "女性エンジニアの年収実データと年収アップ術" },
    { href: "/articles/negotiation/", label: "年収交渉術｜タイミングと伝え方" },
  ],
  recruit: [
    { href: "/articles/how-to-choose/", label: "転職エージェントの選び方7つのチェックポイント" },
    { href: "/articles/schedule/", label: "転職活動のスケジュールと期間の目安" },
  ],
  doda: [
    { href: "/articles/agent-vs-site/", label: "転職エージェントと転職サイトの違い" },
    { href: "/articles/how-to-choose/", label: "転職エージェントの選び方7つのチェックポイント" },
  ],
  geekly: [
    { href: "/articles/game-industry/", label: "ゲーム業界へ転職するガイド" },
    { href: "/articles/salary-by-job/", label: "職種別の年収相場（主要12職種）" },
  ],
  green: [
    { href: "/articles/casual-interview/", label: "カジュアル面談の活用ガイド" },
    { href: "/articles/job-hunting-while-employed/", label: "在職中の転職活動の進め方" },
  ],
};

const QUESTIONS: {
  q: string;
  options: { label: string; scores: Partial<Record<Key, number>> }[];
}[] = [
  {
    q: "今のあなたの経験段階に近いのは？",
    options: [
      { label: "未経験からエンジニアを目指している", scores: { workport: 2, green: 1 } },
      { label: "実務経験があり、キャリアアップしたい", scores: { levtech: 2, recruit: 1 } },
      { label: "ブランクがあり、復職・再挑戦したい", scores: { typewoman: 2, workport: 1 } },
    ],
  },
  {
    q: "エージェントに最も求めるサポートは？",
    options: [
      { label: "女性ならではの相談（産育・働き方）", scores: { typewoman: 2 } },
      { label: "IT・技術への深い理解", scores: { levtech: 2, geekly: 1 } },
      { label: "求人数・選択肢の多さ", scores: { recruit: 2, doda: 1 } },
    ],
  },
  {
    q: "希望する働き方に近いのは？",
    options: [
      { label: "フルリモート中心で働きたい", scores: { reworks: 2 } },
      { label: "ワークライフバランス重視（時短・柔軟）", scores: { typewoman: 1, reworks: 1 } },
      { label: "年収アップを最優先したい", scores: { levtech: 2, recruit: 1 } },
    ],
  },
  {
    q: "興味のある領域は？",
    options: [
      { label: "Web系・自社開発サービス", scores: { green: 2, geekly: 1 } },
      { label: "ゲーム・エンタメ業界", scores: { geekly: 2 } },
      { label: "業界を問わず幅広く比較したい", scores: { doda: 2, recruit: 1 } },
    ],
  },
  {
    q: "転職活動の進め方の希望は？",
    options: [
      { label: "手厚く伴走してほしい", scores: { recruit: 1, typewoman: 1, workport: 1 } },
      { label: "自分のペースでカジュアルに", scores: { green: 2 } },
      { label: "専門特化のエージェントに任せたい", scores: { levtech: 1, geekly: 1 } },
    ],
  },
  {
    q: "あなたの状況に最も近いのは？",
    options: [
      { label: "20代でキャリアの土台を作りたい", scores: { workport: 1, green: 1 } },
      { label: "30代で専門性・年収を高めたい", scores: { levtech: 2 } },
      { label: "育児・家庭と両立したい", scores: { typewoman: 2, reworks: 1 } },
    ],
  },
  {
    q: "希望する勤務地・住まいの状況は？",
    options: [
      { label: "地方在住・Uターンで地元を離れず働きたい", scores: { reworks: 2, doda: 1 } },
      { label: "都市部で求人の選択肢を最大化したい", scores: { recruit: 2, doda: 1 } },
      { label: "場所にはこだわらず良い求人を探したい", scores: { green: 1, levtech: 1 } },
    ],
  },
  {
    q: "現在の就業状況に近いのは？",
    options: [
      { label: "在職中で、自分のペースで情報収集したい", scores: { green: 2, doda: 1 } },
      { label: "早く次を決めたい（離職中・期限がある）", scores: { recruit: 2, workport: 1 } },
      { label: "社会人経験が浅い（第二新卒・20代前半）", scores: { workport: 2, doda: 1 } },
    ],
  },
];

const ZERO: Record<Key, number> = {
  workport: 0,
  reworks: 0,
  typewoman: 0,
  levtech: 0,
  recruit: 0,
  doda: 0,
  geekly: 0,
  green: 0,
};

export default function Diagnosis() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<Key, number>>({ ...ZERO });

  const choose = (s: Partial<Record<Key, number>>) => {
    setScores((prev) => {
      const next = { ...prev };
      (Object.keys(s) as Key[]).forEach((k) => (next[k] += s[k] || 0));
      return next;
    });
    setStep((p) => p + 1);
  };

  const reset = () => {
    setScores({ ...ZERO });
    setStep(0);
  };

  const done = step >= QUESTIONS.length;
  const ranked = (Object.keys(scores) as Key[]).sort((a, b) => scores[b] - scores[a]);
  const best = ranked[0];
  const result = AGENTS[best];
  const second = AGENTS[ranked[1]];
  const related = RELATED[best];

  if (done) {
    return (
      <div className="rounded-lg border border-border bg-white p-6 md:p-8 text-center">
        <p className="eyebrow">Your Match</p>
        <p className="mt-3 text-xs text-text-light">あなたと相性が良いのは</p>
        <h3 className="mt-1 text-2xl font-bold" style={{ color: result.accent }}>
          {result.name}
        </h3>
        <p className="mt-1 text-sm text-text-light">{result.tagline}</p>
        <p className="mt-4 text-sm text-text leading-relaxed text-left">{result.reason}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href={result.href} className="btn-cta text-sm">
            {result.name}の詳細・口コミを見る
          </Link>
          <Link href="/ranking/" className="btn-outline text-sm">
            ランキングで全社を比較する
          </Link>
        </div>
        <div className="mt-6 rounded-lg border border-border bg-[#fffaf4] p-4 text-left">
          <p className="text-xs font-bold text-secondary">2社目の候補（併用がおすすめ）</p>
          <p className="mt-1.5 text-sm text-text">
            <span className="font-bold" style={{ color: second.accent }}>{second.name}</span>
            <span className="ml-2 text-xs text-text-light">{second.tagline}</span>
          </p>
          <p className="mt-1.5 text-xs text-text-light leading-relaxed">
            エージェントは2〜3社を併用すると求人の幅と比較の精度が上がります。
            <Link href={second.href} className="ml-1 underline font-semibold text-primary">
              {second.name}の詳細・口コミを見る
            </Link>
          </p>
        </div>
        <div className="mt-4 rounded-lg border border-border bg-white p-4 text-left">
          <p className="text-xs font-bold text-secondary">あなたの結果に合わせて読みたい記事</p>
          <div className="mt-2 space-y-1.5">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="block text-sm text-text hover:text-primary underline-offset-2 hover:underline">
                → {r.label}
              </Link>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={reset}
          className="mt-5 text-xs text-text-light underline hover:text-text"
        >
          もう一度診断する
        </button>
        <p className="mt-4 text-xs text-text-light leading-relaxed">
          ※ 本診断は各社の公開情報・特徴をもとにした相性の目安です。実際の求人やサポートには個人差があります。2〜3社を併用して比較するのが効果的です。
        </p>
      </div>
    );
  }

  const cur = QUESTIONS[step];
  return (
    <div className="rounded-lg border border-border bg-white p-6 md:p-8">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-bold text-primary">
          質問 {step + 1} / {QUESTIONS.length}
        </p>
        <div className="flex gap-1">
          {QUESTIONS.map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-6 rounded-full"
              style={{ backgroundColor: i <= step ? "#7c3a55" : "#ead9df" }}
            />
          ))}
        </div>
      </div>
      <h3 className="text-lg font-bold text-text mb-5">{cur.q}</h3>
      <div className="space-y-3">
        {cur.options.map((o) => (
          <button
            key={o.label}
            type="button"
            onClick={() => choose(o.scores)}
            className="block w-full text-left rounded-lg border border-border px-5 py-4 text-sm font-medium text-text hover:border-primary hover:bg-[#fffaf4] transition-colors"
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
