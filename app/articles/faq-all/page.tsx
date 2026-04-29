import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの転職よくある質問30選｜総合FAQ",
  description:
    "女性エンジニアの転職に関するよくある質問30選を総合的にまとめました。転職活動の基本・エージェント選び・年収交渉・スキルアップ・働き方など、あらゆる疑問にお答えします。",
  alternates: { canonical: "/articles/faq-all/" },
  openGraph: {
    title: "女性エンジニアの転職よくある質問30選｜総合FAQ",
    description: "女性エンジニアの転職に関するよくある質問30選を総合的にまとめました。あらゆる疑問にお答えします。",
    url: "https://women-engineer-navi.pages.dev/articles/faq-all/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの転職よくある質問30選｜総合FAQ",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" },
  description: "女性エンジニアの転職に関するよくある質問30選を総合的にまとめました。あらゆる疑問にお答えします。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/articles/faq-all/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "女性エンジニアの転職市場は活況ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、2026年現在も女性エンジニアの需要は非常に高い状態です。DX推進やダイバーシティ推進の流れにより、多くの企業が女性エンジニアの採用を強化しています。有効求人倍率はIT業界全体で3倍以上と、売り手市場が続いています。" } },
    { "@type": "Question", name: "転職エージェントは何社に登録すべきですか？", acceptedAnswer: { "@type": "Answer", text: "2〜3社の併用がおすすめです。IT特化型（レバテックキャリア・Geekly等）と女性特化型（type女性の転職エージェント等）を組み合わせることで、より多くの求人にアクセスでき、各エージェントの強みを活かした転職活動ができます。" } },
    { "@type": "Question", name: "転職活動はどのくらいの期間がかかりますか？", acceptedAnswer: { "@type": "Answer", text: "一般的に2〜4ヶ月が目安です。準備期間（自己分析・書類作成）に2〜3週間、求人応募から面接に1〜2ヶ月、内定承諾から入社まで1ヶ月程度です。在職中に活動を始め、焦らず最適な転職先を見つけることが重要です。" } },
    { "@type": "Question", name: "転職で年収アップは可能ですか？", acceptedAnswer: { "@type": "Answer", text: "スキルと経験に見合った転職であれば年収アップは十分可能です。IT特化型エージェントの利用者の中には年収70万円以上アップした事例もあります。市場価値を正しく把握し、エージェントの年収交渉サポートを活用することが重要です。" } },
    { "@type": "Question", name: "エンジニア未経験でも転職できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、未経験からのエンジニア転職も可能です。プログラミングスクールでの学習やポートフォリオの作成が必要ですが、20代であればポテンシャル採用の機会も多いです。ワークポートやdodaなど未経験者向けの求人が多いエージェントを活用しましょう。" } },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer-navi.pages.dev" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer-navi.pages.dev/articles/" },
    { "@type": "ListItem", position: 3, name: "よくある質問30選", item: "https://women-engineer-navi.pages.dev/articles/faq-all/" },
  ],
};

const faqCategories = [
  {
    name: "転職活動の基本",
    color: "#0891b2",
    faqs: [
      { q: "女性エンジニアの転職市場は活況ですか？", a: "はい、2026年現在も女性エンジニアの需要は非常に高い状態です。DX推進やダイバーシティ推進の流れにより、多くの企業が女性エンジニアの採用を強化しています。有効求人倍率はIT業界全体で3倍以上と、売り手市場が続いています。", link: "/articles/demand/" },
      { q: "転職活動はどのくらいの期間がかかりますか？", a: "一般的に2〜4ヶ月が目安です。準備期間に2〜3週間、求人応募から面接に1〜2ヶ月、内定承諾から入社まで1ヶ月程度です。在職中に活動を始め、焦らず最適な転職先を見つけることが重要です。", link: "/articles/interview-guide/" },
      { q: "在職中に転職活動はできますか？", a: "はい、多くのエンジニアが在職中に転職活動を行っています。転職エージェントが面接日程の調整を代行してくれるため、仕事と両立しやすいです。有給休暇を活用したり、オンライン面接に対応してもらうことで負担を軽減できます。", link: "/articles/how-to-choose/" },
      { q: "転職回数が多いと不利になりますか？", a: "IT業界では転職回数よりもスキルと経験が重視される傾向があります。ただし、短期離職（1年未満）が連続すると懸念されることがあります。各転職で得たスキルや成長を論理的に説明できれば、転職回数は大きなマイナスにはなりません。", link: "/articles/interview-guide/" },
      { q: "転職すべきタイミングはいつですか？", a: "一般的に、1月〜3月と9月〜10月が求人数が増える時期です。ただし、IT業界は通年で採用を行う企業が多いため、自分の準備が整ったタイミングで始めるのがベストです。スキルアップをしながら市場を観察し、良い機会を逃さないことが大切です。", link: "/articles/career-path/" },
    ],
  },
  {
    name: "転職エージェント",
    color: "#7c3aed",
    faqs: [
      { q: "転職エージェントは何社に登録すべきですか？", a: "2〜3社の併用がおすすめです。IT特化型と女性特化型・総合型を組み合わせることで、より多くの求人にアクセスできます。各エージェントの強みを活かした転職活動が可能になります。", link: "/articles/how-to-choose/" },
      { q: "転職エージェントは無料で利用できますか？", a: "はい、完全無料です。エージェントは企業側から成功報酬を受け取るビジネスモデルのため、転職者には一切費用がかかりません。キャリア相談だけの利用も可能です。", link: "/articles/how-to-choose/" },
      { q: "IT特化型と総合型のどちらがいいですか？", a: "エンジニアの転職にはIT特化型エージェントが有利です。技術を理解したアドバイザーが適切な求人を提案してくれ、年収交渉でも市場価値を正当に評価してもらえます。ただし、総合型は求人数が多いため、併用するのがベストです。", link: "/articles/specialized-vs-general/" },
      { q: "女性特化型エージェントのメリットは？", a: "女性特化型エージェントは、産休育休の取得実績・女性管理職の比率・時短勤務の運用実態など、女性のキャリアに関する情報を詳しく提供してくれます。女性アドバイザーが在籍していることが多く、女性ならではの悩みも相談しやすいです。", link: "/reviews/type-woman/" },
      { q: "エージェントとの面談ではどんなことを聞かれますか？", a: "職歴・スキル・転職理由・希望条件（年収・勤務地・働き方）・キャリアプランなどを聞かれます。正直に伝えることで、ミスマッチのない求人を紹介してもらえます。事前に自分の希望を整理しておくとスムーズです。", link: "/articles/interview-guide/" },
    ],
  },
  {
    name: "年収・待遇",
    color: "#f97066",
    faqs: [
      { q: "転職で年収アップは可能ですか？", a: "スキルと経験に見合った転職であれば年収アップは十分可能です。IT特化型エージェントの利用者の中には年収70万円以上アップした事例もあります。市場価値を正しく把握し、年収交渉サポートを活用することが重要です。", link: "/articles/salary/" },
      { q: "女性エンジニアの平均年収はどのくらいですか？", a: "女性エンジニアの平均年収は約450〜550万円程度です。経験年数・職種・企業規模により大きく異なり、フルスタックエンジニアやテックリードでは800万円以上も珍しくありません。年収アップにはスキルの専門性を高めることが効果的です。", link: "/articles/salary/" },
      { q: "年収交渉はどうすればいいですか？", a: "年収交渉は転職エージェントに任せるのが最も効果的です。市場の相場観を持つアドバイザーが、あなたのスキルと経験に基づいた適正年収を企業に提示してくれます。自分で交渉する場合は、市場データと自分の実績を具体的に示すことが重要です。", link: "/articles/negotiation/" },
      { q: "時短勤務の場合、年収はどのくらい下がりますか？", a: "フルタイムの75〜80%程度になるのが一般的です。例えば8時間勤務を6時間にした場合、年収も75%程度になります。ただし、企業によっては成果主義で評価し、時短でも同水準の年収を維持できる場合もあります。", link: "/articles/mama-engineer/" },
      { q: "副業は可能ですか？", a: "Web系企業やスタートアップでは副業を許可する企業が増えています。SIerでは原則禁止の企業がまだ多いですが、変化の兆しもあります。転職時に副業の可否を確認し、スキルアップや収入増加の手段として活用しましょう。", link: "/articles/side-job/" },
    ],
  },
  {
    name: "スキル・選考",
    color: "#10b981",
    faqs: [
      { q: "エンジニア未経験でも転職できますか？", a: "はい、未経験からのエンジニア転職も可能です。プログラミングスクールでの学習やポートフォリオの作成が必要ですが、20代であればポテンシャル採用の機会も多いです。ワークポートやdodaなどのエージェントを活用しましょう。", link: "/articles/beginner/" },
      { q: "ポートフォリオは必要ですか？", a: "必須ではありませんが、作成することで大きなアドバンテージになります。特に未経験やキャリアチェンジの場合、実際に動くアプリケーションを見せることで技術力を証明できます。GitHubにソースコードを公開し、READMEを充実させましょう。", link: "/articles/portfolio/" },
      { q: "コーディングテストの対策方法は？", a: "LeetCodeやAtCoderで毎日1〜2問ずつ練習するのが効果的です。基本データ構造とアルゴリズムの理解が重要で、2〜3週間の集中的な準備で基本的なパターンをカバーできます。IT特化型エージェントに企業別の出題傾向を確認するのもおすすめです。", link: "/articles/coding-test/" },
      { q: "取得しておくべき資格はありますか？", a: "基本情報技術者試験・AWS認定資格・応用情報技術者試験などが転職で評価されます。ただし、IT業界では資格よりも実務経験とスキルが重視される傾向があります。資格はあくまで補完的なアピール材料として活用しましょう。", link: "/articles/certification/" },
      { q: "技術面接ではどんな質問が出ますか？", a: "使用技術の詳細・過去のプロジェクト経験・技術的な課題解決の事例が中心です。コーディングテストやシステム設計課題が出されることもあります。STAR法で具体的に説明できるように準備し、エージェントの面接対策も活用しましょう。", link: "/articles/technical-interview/" },
    ],
  },
  {
    name: "働き方・ライフイベント",
    color: "#0891b2",
    faqs: [
      { q: "リモートワークの求人は多いですか？", a: "はい、IT業界ではリモートワーク対応の求人が非常に多いです。レバテックキャリアの求人の約60%がリモートワーク対応で、フルリモートの求人も増えています。特にWeb系企業やSaaS企業はリモートワーク率が高い傾向にあります。", link: "/articles/remote-jobs/" },
      { q: "産休育休後の転職は不利ですか？", a: "いいえ、産休育休後の転職は不利ではありません。むしろ、育児経験を通じて得たタイムマネジメント力やマルチタスク能力は評価されます。ブランク期間中に学習を続けていたことを示せると、さらに好印象です。", link: "/articles/after-maternity/" },
      { q: "ママエンジニアでも働きやすい企業はありますか？", a: "はい、リモートワーク・フレックスタイム・時短勤務を導入している企業は多数あります。特にWeb系メガベンチャーや大手SIerは育児支援が充実しています。type女性の転職エージェントやレバテックキャリアで、育児に理解のある企業を紹介してもらえます。", link: "/articles/mama-engineer/" },
      { q: "フリーランスと正社員のどちらがいいですか？", a: "ライフスタイルや収入の安定性に対する考え方によって異なります。正社員は福利厚生・雇用保障が充実し、フリーランスは自由度と高収入の可能性があります。まずは正社員でスキルと人脈を築き、準備が整ってからフリーランスに移行するのがリスクの少ない方法です。", link: "/articles/freelance/" },
      { q: "ブランクがあっても復帰できますか？", a: "はい、IT業界は人手不足のため、ブランクがあっても復帰は可能です。ブランク期間が長い場合は、プログラミングスクールでの再学習やポートフォリオの作成が効果的です。エージェントに相談すれば、復帰しやすい企業を紹介してもらえます。", link: "/articles/return-to-work/" },
    ],
  },
  {
    name: "業界・職種",
    color: "#7c3aed",
    faqs: [
      { q: "Web系とSIerのどちらがいいですか？", a: "目指す働き方やキャリアプランによって異なります。Web系は自由度・技術的な先進性が高く、SIerは安定性・福利厚生が充実しています。フレキシブルな働き方を重視するならWeb系、長期的な安定を重視するならSIerがおすすめです。", link: "/articles/web-industry/" },
      { q: "フロントエンドとバックエンドのどちらがおすすめですか？", a: "どちらも需要が高く、好みや適性で選ぶのが良いでしょう。フロントエンドはUI/UXに興味があり、視覚的な成果を求める方に向いています。バックエンドはシステム設計やデータ処理に興味がある方に向いています。フルスタックを目指すのも一つの選択肢です。", link: "/articles/frontend/" },
      { q: "ゲーム業界への転職は難しいですか？", a: "サーバーサイドやインフラのポジションでは、Web系やSIerの経験を活かして転職が可能です。ゲームクライアント開発はUnity/Unrealの専門性が必要ですが、独学で学びポートフォリオを作れば十分チャレンジできます。", link: "/articles/game-industry/" },
      { q: "データサイエンティストに転職するには？", a: "統計学・機械学習の知識とPython・SQLのスキルが求められます。データ分析の実務経験があれば転職しやすく、Kaggleでの実績やデータ分析のポートフォリオがあると有利です。未経験の場合はデータアナリストから始めるのが現実的です。", link: "/articles/data-scientist/" },
      { q: "PM（プロジェクトマネージャー）に転職するには？", a: "エンジニアとしての実務経験に加え、チームリーダーやプロジェクト管理の経験が求められます。PMP資格や情報処理技術者のプロジェクトマネージャ試験の取得も有効です。まずはエンジニアからリーダーに昇格し、PM経験を積んでからの転職がスムーズです。", link: "/articles/pm-director/" },
    ],
  },
];

export default function FaqAllPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "よくある質問30選" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#0891b2" }}>総合FAQ</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの転職よくある質問30選
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">転職に関するあらゆる疑問にお答えします</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月29日</p>
          </div>
        </div>
      </section>

      {/* 概要 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <p className="text-text-light leading-relaxed">
              女性エンジニアの転職に関してよく寄せられる質問を30個厳選し、6つのカテゴリに分けて回答しています。転職活動の基本、エージェント選び、年収・待遇、スキル・選考、働き方・ライフイベント、業界・職種の6つの観点から、転職に必要な知識を網羅しています。各質問には関連記事へのリンクも掲載しているので、より詳しく知りたい場合はそちらも合わせてご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* キーポイント */}
      <section className="py-8" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">転職を考えたらまず知っておくべきこと</h2>
          <div className="grid gap-4 md:grid-cols-3 mt-4">
            {[
              { icon: "&#128200;", title: "売り手市場", desc: "IT業界の有効求人倍率は3倍以上。女性エンジニアの需要は非常に高い状態が続いています。" },
              { icon: "&#128176;", title: "年収アップ可能", desc: "エージェント経由の転職で約70%が年収アップを実現。市場価値を正しく把握することが重要です。" },
              { icon: "&#127968;", title: "柔軟な働き方", desc: "リモートワーク対応求人が約65%。育児との両立も可能な環境が急速に整備されています。" },
              { icon: "&#128218;", title: "スキルアップ支援", desc: "書籍購入補助やカンファレンス参加費支援など、学習環境が充実した企業が増加中。" },
              { icon: "&#128101;", title: "ダイバーシティ推進", desc: "女性エンジニアの採用を強化する企業が増加。女性管理職比率も年々向上しています。" },
              { icon: "&#127919;", title: "キャリアの選択肢", desc: "マネジメント・スペシャリスト・フリーランスなど、多様なキャリアパスが選べます。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-5 text-center" style={{ borderColor: "#d1dce5" }}>
                <p className="text-3xl mb-2" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <h3 className="text-sm font-bold mb-1" style={{ color: "#0891b2" }}>{item.title}</h3>
                <p className="text-xs text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">カテゴリ別 目次</h2>
            <ol className="space-y-2 text-sm">
              {faqCategories.map((cat, i) => (
                <li key={i}>
                  <a href={`#cat${i + 1}`} className="hover:underline" style={{ color: "#0891b2" }}>
                    {i + 1}. {cat.name}（Q{i * 5 + 1}〜Q{i * 5 + 5}）
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ カテゴリ */}
      {faqCategories.map((category, catIdx) => (
        <section key={catIdx} id={`cat${catIdx + 1}`} className="py-10" style={catIdx % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
          <div className="mx-auto max-w-4xl px-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-1 h-8 rounded-full" style={{ backgroundColor: category.color }} />
              <h2 className="text-2xl font-bold">{category.name}</h2>
            </div>
            <div className="space-y-4">
              {category.faqs.map((faq, faqIdx) => (
                <details key={faqIdx} className="group rounded-xl bg-white" style={{ border: "1px solid #d1dce5" }}>
                  <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                    <span>
                      <span style={{ color: "#0891b2" }} className="mr-2">Q{catIdx * 5 + faqIdx + 1}.</span>
                      {faq.q}
                    </span>
                    <span className="text-text-light group-open:rotate-180 transition-transform">&#9662;</span>
                  </summary>
                  <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                    <p className="pt-4">
                      <span style={{ color: "#f97066" }} className="font-bold mr-2">A.</span>
                      {faq.a}
                    </p>
                    <a href={faq.link} className="inline-block mt-3 text-xs font-bold hover:underline" style={{ color: "#0891b2" }}>
                      関連記事を読む →
                    </a>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* 転職成功のポイント */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアの転職成功率を上げるコツ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              上記のFAQを踏まえて、女性エンジニアの転職成功率を高めるための具体的なコツを紹介します。これらのポイントを押さえることで、より良い条件での転職が実現しやすくなります。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            {[
              { title: "技術力のアピール方法を工夫する", desc: "職務経歴書では定量的な成果を記載しましょう。「レスポンス速度を50%改善」「テストカバレッジを80%に向上」など、数値で示すと説得力が増します。ポートフォリオやGitHubでの活動も効果的です。" },
              { title: "企業研究を徹底する", desc: "志望企業の技術ブログ・カンファレンス登壇資料・GitHub上のOSSなどを事前にチェックしましょう。面接で「御社の技術ブログの〇〇の記事を読みました」と伝えると好印象です。" },
              { title: "カジュアル面談を活用する", desc: "正式応募前にカジュアル面談を申し込める企業が増えています。社内の雰囲気や実際の働き方を知る良い機会です。Greenなどのプラットフォームでカジュアル面談を申し込めます。" },
              { title: "条件交渉はエージェントに任せる", desc: "年収やリモートワークの頻度などの条件交渉は、エージェントを介した方が上手くいきます。自分では言いにくい要望も、エージェントが企業に代弁してくれます。" },
              { title: "複数の内定を持って比較する", desc: "1社ずつ受けるのではなく、2〜3社を並行して受けることで、内定後に条件を比較検討できます。結果的により良い条件での転職につながります。" },
              { title: "退職交渉も計画的に", desc: "内定承諾後の退職交渉もスムーズに進めることが大切です。引き継ぎ期間を十分に確保し、円満に退職することで、業界内でのレピュテーションを保てます。エージェントが退職交渉のアドバイスもしてくれます。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-5" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-base font-bold mb-2" style={{ color: "#0891b2" }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">まとめ：転職成功のための5つのポイント</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              この記事で紹介した30の質問と回答から、女性エンジニアの転職を成功させるための重要なポイントをまとめます。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { num: "01", title: "IT特化型エージェントを活用する", desc: "レバテックキャリアやGeeklyなど、IT業界に精通したエージェントを利用することで、技術力を正当に評価した求人提案と年収交渉が受けられます。2〜3社の併用がベストです。" },
              { num: "02", title: "自分の市場価値を把握する", desc: "年収ガイドや職種別の相場を参考に、自分のスキルと経験の市場価値を客観的に把握しましょう。エージェントのキャリア相談でプロの意見を聞くのも効果的です。" },
              { num: "03", title: "長期的なキャリアプランを描く", desc: "目先の年収だけでなく、5年後・10年後のキャリアを見据えた転職先選びが重要です。産休育休制度や時短勤務の実績なども確認しておきましょう。" },
              { num: "04", title: "スキルアップを継続する", desc: "転職活動中もスキルアップを怠らないことが大切です。ポートフォリオの作成や資格の取得、技術ブログの執筆など、アウトプットを通じて市場価値を高めましょう。" },
              { num: "05", title: "焦らず複数社を比較する", desc: "在職中に転職活動を行い、複数の企業の内定を得た上で比較検討するのが理想的です。エージェントが退職交渉のサポートもしてくれるため、安心して転職に臨めます。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold text-white flex-shrink-0" style={{ backgroundColor: "#0891b2" }}>{item.num}</span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめエージェント */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>この記事で紹介した質問の多くは、転職エージェントに相談することでより具体的なアドバイスが得られます。以下のエージェントがおすすめです。</p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { name: "レバテックキャリア", badge: "IT特化型", desc: "技術力を正当に評価した求人提案と年収交渉が強み。年収70万円以上アップの実績多数。", href: "/reviews/levtech/", color: "#0891b2" },
              { name: "type女性の転職エージェント", badge: "女性特化型", desc: "女性のキャリア支援に特化。産休育休の取得実績や女性管理職比率など、女性に必要な情報を提供。", href: "/reviews/type-woman/", color: "#7c3aed" },
              { name: "Geekly", badge: "IT・Web特化", desc: "Web系・ゲーム業界に強い。書類選考通過率3.4倍の実績。レジュメ作成のサポートが手厚い。", href: "/reviews/geekly/", color: "#f97066" },
              { name: "ワークポート", badge: "未経験OK", desc: "IT未経験者向けの求人が豊富。転職決定人数No.1の実績。スピーディーな求人紹介が特徴。", href: "/reviews/workport/", color: "#10b981" },
            ].map((agent, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: agent.color }}>{agent.badge}</span>
                  <h3 className="text-lg font-bold">{agent.name}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed mb-3">{agent.desc}</p>
                <a href={agent.href} className="text-sm font-bold hover:underline" style={{ color: "#0891b2" }}>{agent.name}の詳細レビューを見る {"\u2192"}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 転職成功のチェックリスト */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職準備チェックリスト</h2>
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
            <div className="space-y-3">
              {[
                "自己分析とキャリアの棚卸しを行った",
                "希望条件（年収・勤務地・働き方）を整理した",
                "職務経歴書・履歴書を最新の状態に更新した",
                "ポートフォリオまたはGitHubを整備した",
                "転職エージェント2〜3社に登録した",
                "面接対策（技術質問・コーディングテスト）を行った",
                "志望企業の産休育休・リモートワーク制度を確認した",
                "年収の市場相場を把握した",
                "退職のタイミングと引き継ぎの計画を立てた",
                "内定後の条件交渉のポイントを理解した",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-text-light">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded border flex-shrink-0 mt-0.5" style={{ borderColor: "#d1dce5" }}>
                    <span style={{ color: "#0891b2" }} className="font-bold text-xs">&#10003;</span>
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/category-index/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>記事カテゴリ一覧</h3>
              <p className="text-sm text-text-light">すべての記事にアクセスできるハブページ</p>
            </a>
            <a href="/articles/how-to-choose/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>エージェントの選び方</h3>
              <p className="text-sm text-text-light">失敗しない5つのポイント</p>
            </a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>未経験からエンジニアへ</h3>
              <p className="text-sm text-text-light">未経験からの転職を徹底解説</p>
            </a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>年収ガイド</h3>
              <p className="text-sm text-text-light">平均年収と年収アップの方法</p>
            </a>
          </div>
        </div>
      </section>

      {/* 転職市場の現状 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">2026年 女性エンジニア転職市場の現状</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              2026年現在、女性エンジニアの転職市場は過去最高水準の売り手市場が続いています。DX推進の加速やAI・クラウド技術の普及により、IT人材の需要は高止まりしています。ダイバーシティ推進の流れも追い風となり、女性エンジニアの採用を強化する企業が増加しています。
            </p>
            <p>
              以下のFAQでは、転職活動の基本からエージェント選び、年収交渉、スキルアップ、働き方まで、女性エンジニアが転職で成功するために必要な知識を30の質問と回答にまとめています。それぞれの回答には関連する詳細記事へのリンクも掲載していますので、気になるテーマがあればぜひ合わせてご覧ください。
            </p>
            <p>
              特に注目すべきは、リモートワークの定着によって地方在住でも都市部の企業に転職できるようになった点です。勤務地の制約がなくなることで、女性エンジニアの転職の選択肢が大幅に広がっています。
            </p>
            <p>
              年収面でもポジティブな変化が見られます。IT人材の不足を背景に、エンジニアの年収水準は年々上昇しており、女性エンジニアの平均年収も上昇傾向にあります。適切なスキルと経験があれば、年収600万円以上のポジションも十分に狙えます。
            </p>
            <p>
              産休育休制度の整備も進んでおり、大手IT企業の多くが育休取得率90%以上を達成しています。復帰後のポジション保証や、時短勤務制度の充実など、女性エンジニアが長期的にキャリアを築ける環境が整いつつあります。転職先を選ぶ際には、これらの制度の実績を必ず確認しましょう。
            </p>
            <p>
              副業・兼業を認める企業も増加しており、本業以外でのスキルアップや収入増加の機会が広がっています。フリーランスへの転身を視野に入れたキャリア設計も可能で、多様な働き方が選べる時代になっています。
            </p>
          </div>
        </div>
      </section>

      {/* エージェント比較表 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">主要転職エージェント比較表</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>FAQでよく質問されるエージェントの特徴を比較表にまとめました。自分に合ったエージェントを見つける参考にしてください。</p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#0891b2" }}>
                  <th className="px-3 py-3 text-left text-xs font-bold text-white">エージェント</th>
                  <th className="px-3 py-3 text-left text-xs font-bold text-white">タイプ</th>
                  <th className="px-3 py-3 text-left text-xs font-bold text-white">強み</th>
                  <th className="px-3 py-3 text-left text-xs font-bold text-white">おすすめの方</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["レバテックキャリア", "IT特化", "技術力評価・年収交渉", "経験者・年収アップ"],
                  ["type女性の転職", "女性特化", "女性キャリア支援", "育児両立・女性目線"],
                  ["Geekly", "IT・Web特化", "Web・ゲーム求人", "Web系・ゲーム志望"],
                  ["ワークポート", "IT・総合", "未経験OK・スピード", "未経験・20代"],
                  ["doda", "総合型", "求人数・幅広い業界", "幅広く検討したい方"],
                  ["リクルートエージェント", "最大手", "実績No.1・大手求人", "大手企業志望"],
                  ["Green", "スカウト型", "直接スカウト", "カジュアルに探したい方"],
                  ["リワークス", "リモート特化", "フルリモート求人", "在宅勤務希望"],
                ].map(([name, type, strength, target], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
                    <td className="px-3 py-3 text-xs font-bold" style={{ borderBottom: "1px solid #d1dce5" }}>{name}</td>
                    <td className="px-3 py-3 text-xs" style={{ borderBottom: "1px solid #d1dce5" }}>{type}</td>
                    <td className="px-3 py-3 text-xs" style={{ borderBottom: "1px solid #d1dce5" }}>{strength}</td>
                    <td className="px-3 py-3 text-xs" style={{ borderBottom: "1px solid #d1dce5" }}>{target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 転職タイムライン */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職活動のタイムライン</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>女性エンジニアの転職活動の一般的なスケジュールを時系列で紹介します。全体で2〜4ヶ月が目安です。</p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { period: "1〜2週目", title: "準備期間", tasks: ["自己分析とキャリアの棚卸し", "希望条件の整理（年収・勤務地・働き方）", "転職エージェント2〜3社に登録", "職務経歴書・履歴書の作成"] },
              { period: "3〜4週目", title: "求人選定", tasks: ["エージェントとのキャリア面談", "求人の紹介を受ける", "応募する企業を決定", "書類のブラッシュアップ"] },
              { period: "5〜8週目", title: "選考期間", tasks: ["書類選考", "コーディングテスト・技術面接", "一次面接・二次面接", "面接対策の実施"] },
              { period: "9〜12週目", title: "内定・入社準備", tasks: ["内定承諾と条件交渉", "退職の申し出と引き継ぎ", "入社に向けた準備", "新しい環境のリサーチ"] },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>{item.period}</span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <ul className="text-sm text-text-light space-y-1">
                  {item.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span style={{ color: "#0891b2" }} className="font-bold">&#10003;</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 年代別アドバイス */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年代別の転職アドバイス</h2>
          <div className="grid gap-6 md:grid-cols-3 mt-4">
            {[
              { age: "20代", color: "#0891b2", advice: "ポテンシャル採用の機会が多い年代です。技術力の基礎固めと、将来のキャリアパスを見据えた企業選びが重要。未経験からの転職も十分可能で、成長環境を重視しましょう。", link: "/articles/age-20s/" },
              { age: "30代", color: "#7c3aed", advice: "即戦力として最も市場価値が高い年代です。専門性を活かした転職で年収アップを狙えます。ライフイベント（結婚・出産）を見据えた制度の確認も重要です。", link: "/articles/age-30s/" },
              { age: "40代", color: "#f97066", advice: "マネジメント経験や深い専門性が評価されます。PM・テックリード・アーキテクトなどの上位ポジションを狙い、安定性と待遇のバランスが取れた企業を選びましょう。", link: "/articles/age-40s/" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: item.color }}>{item.age}の転職</h3>
                <p className="text-sm text-text-light leading-relaxed mb-3">{item.advice}</p>
                <a href={item.link} className="text-xs font-bold hover:underline" style={{ color: "#0891b2" }}>詳しく読む {"\u2192"}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">転職の疑問はエージェントに相談しよう</h2>
            <p className="text-white/90 mb-6">転職エージェントなら、あなたの状況に合わせた具体的なアドバイスがもらえます。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
