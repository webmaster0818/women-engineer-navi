import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの職務経歴書ガイド｜スキルシートの書き方・ブランクの伝え方【2026年】",
  description:
    "エンジニアの職務経歴書・スキルシートの書き方を実データで解説。プロジェクト単位の構成テンプレ（規模・役割・技術スタック・成果の定量化）、経験が浅い・ブランクあり別の書き方、時短希望の伝え方、厚労省履歴書様式例の性別欄任意化まで、2026年の書類選考対策を出典付きで網羅します。",
  alternates: { canonical: "/articles/resume-guide/" },
  openGraph: {
    title: "女性エンジニアの職務経歴書ガイド｜スキルシートの書き方・ブランクの伝え方【2026年】",
    description:
      "プロジェクト単位の構成テンプレ、成果の定量化、ブランク・時短希望の伝え方、厚労省履歴書様式例の公的事実まで出典付きで解説。",
    url: "https://women-engineer.com/articles/resume-guide/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの職務経歴書ガイド｜スキルシートの書き方・ブランクの伝え方【2026年】",
  datePublished: "2026-04-27",
  dateModified: "2026-06-12",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer.com" },
  description:
    "エンジニアの職務経歴書・スキルシートの書き方ガイド。プロジェクト単位の構成テンプレ、成果の定量化、ブランク・時短希望の伝え方、厚労省履歴書様式例の公的事実を出典付きで解説。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/articles/resume-guide/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "エンジニアの職務経歴書は何枚にまとめるべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A4で2〜3枚程度が一般的な目安です。経験プロジェクトが多い場合は、直近・応募先に関連の深い案件を厚く、古い案件や関連の薄い案件は1〜2行に圧縮してメリハリをつけます。大事なのは枚数より「冒頭の職務要約と直近プロジェクトを読んだだけで、何ができる人か分かる」構成です。書類選考の担当者は多数の書類に目を通すため、1ページ目で要点が伝わらない書類は不利になります。スキルシート形式（プロジェクト一覧表）を求められた場合は枚数が増えても問題ありません。",
      },
    },
    {
      "@type": "Question",
      name: "履歴書の性別欄は書かなくてもいいのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省が2021年4月に公表した履歴書の様式例では、性別欄は「男・女」の選択式ではなく任意記載欄とされており、記載を希望しない場合は未記載とすることも可能です。これは2020年7月に日本規格協会がJIS規格の解説からの履歴書様式例を削除したことを受けて、公正な採用選考の観点から厚労省が新たに作成したものです。同様式例では「通勤時間」「扶養家族数」「配偶者」「配偶者の扶養義務」の欄も設けられていません（出典: 厚生労働省「新たな履歴書の様式例」、2026年6月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "ブランク期間は職務経歴書にどう書けばいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "隠さず時系列のまま書き、その期間に何をしていたか（育児・介護など）と復帰準備として何をしたか（学習した技術・作った成果物・取得資格など）を1〜3行で添えるのが基本です。時系列に不自然な空白があると、確認の手間を嫌って見送られやすくなる一方、理由と準備がセットで書かれていれば懸念はかなり打ち消せます。出産・育児による離職は珍しいことではなく、国立社会保障・人口問題研究所「第16回出生動向基本調査」でも第1子出産を機に約3割の女性が離職しています。採用側が知りたいのは過去の理由より「今すぐ戦力になるか」です。",
      },
    },
    {
      "@type": "Question",
      name: "時短勤務や残業制限の希望は応募書類に書くべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "職務経歴書の本文で長く説明する必要はありません。書くなら本人希望欄・備考欄に「就学前の子どもがおり、残業は月◯時間程度まで可」のように事実と可能ラインを簡潔に1行で示す程度にとどめ、詳細な条件のすり合わせはエージェント経由の事前確認か面接の場で行うのが実務的です。なお法制度上も、2025年4月施行の育児・介護休業法改正で残業免除（所定外労働の制限）の対象が小学校就学前の子を持つ労働者まで拡大されており、制約があること自体を過度に引け目に感じる必要はありません（出典: 厚生労働省「育児・介護休業法改正のポイント」、2026年6月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "ChatGPTなどのAIで職務経歴書を作ってもいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "下書き・添削の道具として使うのは有効ですが、3つの注意点があります。①事実の正確性: AIは経歴を「それらしく」盛る方向に補完しがちです。書かれた数値・役割・技術はすべて自分の実績と照合してください。経歴の誇張は経歴詐称と紙一重です。②機密情報: 前職のプロジェクト名・顧客名・非公開の数値をプロンプトに入れない運用が安全です。③没個性化: AI出力をそのまま使うと定型的な文章になり、他の応募者と差がつきません。構成の整理とてにをはの修正に使い、職務要約と自己PRは自分の言葉で仕上げましょう。dodaの「レジュメビルダー」のような無料の作成ツールを骨組みに使う方法もあります。",
      },
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer.com" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer.com/articles/" },
    { "@type": "ListItem", position: 3, name: "職務経歴書ガイド", item: "https://women-engineer.com/articles/resume-guide/" },
  ],
};

export default function ResumeGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "職務経歴書ガイド" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#0891b2" }}>転職ノウハウ</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの職務経歴書ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">スキルシートの書き方・ブランクの伝え方【2026年】</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>先に結論：通る職務経歴書の4原則</h2>
            <ul className="space-y-3 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>プロジェクト単位で書く。</strong> エンジニアの書類は「期間・概要・規模・役割・担当フェーズ・技術スタック・成果」のセットで案件ごとに記述するのが標準（スキルシート文化）。会社単位の業務羅列では評価できません。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>落ちて普通、と知っておく。</strong> dodaの集計（2025年4月〜2026年3月）では転職成功者の平均応募社数は<strong>31.9社</strong>。書類で大半が絞られる前提で、数と質の両方で戦います。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>ブランク・制約は隠さず文脈化。</strong> 空白期間は時系列のまま書き、「期間中の事実＋復帰準備の具体物」を添える。時短・残業制約は本人希望欄に1行＋詳細はエージェント経由か面接で。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>履歴書の性別欄は任意。</strong> 厚労省の履歴書様式例（2021年4月公表）では性別欄は任意記載で未記載も可。「通勤時間」「扶養家族数」「配偶者」欄はそもそも設けられていません（出典: 厚生労働省）。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. 書類選考の実態：どのくらい通るのか【出典付き】</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 応募書類3点セット：履歴書・職務経歴書・スキルシート</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 職務経歴書の構成テンプレ：プロジェクト単位で書く</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 成果を「定量化」する書き方</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 経験が浅い・未経験・ブランクあり別の書き方</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 時短・残業制約はいつ・どう伝えるか</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. AI添削・作成ツールの活用と注意点</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 書類選考の実態 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">書類選考の実態：どのくらい通るのか【出典付き】</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              まず前提となる数字を押さえましょう。dodaを運営するパーソルキャリアの集計（2025年4月〜2026年3月にdodaエージェントサービスを利用して内定を得た人が対象）によると、転職成功者の<strong>平均応募社数は31.9社</strong>で、94.9%の人が2社以上、66.4%の人が11社以上に応募しています。同社はこのデータをもとに「1社以上の内定を得るためには5社の面接を受ける必要があり、そのためには27社の求人に応募する必要がある」という試算を示しています（出典: doda「転職成功者の平均応募社数」、2026年6月参照）。
            </p>
            <p>
              つまり応募の大半は書類段階で絞り込まれるのが普通であり、<strong>書類で落ちること自体は実力不足の証明ではありません</strong>。書類選考は「応募者の能力」だけでなく、求人側の充足状況・年齢構成・予算といった応募者にはどうにもできない事情でも左右されます。だからこそ取るべき戦略は2つです。①応募数を確保する（1〜2社に全てを賭けない）、②書類そのものの質を上げて通過率の分母を改善する。本記事は②を徹底的に扱います。
            </p>
            <p>
              エンジニア採用の書類選考で見られているのは、突き詰めれば<strong>「うちの開発現場で再現できる経験を持っているか」</strong>の一点です。読み手は人事担当者と現場のエンジニアリングマネージャーの両方。人事は経歴の整合性や希望条件を、現場は技術スタック・担当範囲・課題解決の深さを見ます。両方が短時間で判断できる書き方が、次章以降のテンプレートです。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 応募書類3点セット */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">応募書類3点セット：履歴書・職務経歴書・スキルシート</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              エンジニア転職で登場する書類は3種類あります。役割が違うので、どれに力を入れるべきかをまず整理します。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>書類</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>役割</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>力の入れどころ</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>履歴書</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>基本情報・学歴・職歴の「事実確認」書類。様式はほぼ定型</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>誤字脱字ゼロ・日付や社名の正確さ。差がつく書類ではない</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>職務経歴書</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>経験・スキル・成果を自由形式でアピールする「勝負書類」。A4で2〜3枚が目安</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><strong>最重要。</strong>書類選考の合否はほぼここで決まる</td>
                </tr>
                <tr className="bg-white">
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>スキルシート<br /><span className="font-normal text-xs">（技術経歴書）</span></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>プロジェクトごとの期間・規模・役割・担当フェーズ・開発環境を一覧表で示すIT業界特有の書類。SES・派遣・フリーランス案件では必須級</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>技術キーワードの網羅と正確さ。職務経歴書の職務経歴欄をこの形式で書けば兼用できる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3 leading-relaxed">
            参考: リクナビNEXT「ITエンジニア向けスキルシートの書き方」、doda「スキルシートの書き方は？技術経歴書や職務経歴書との違いは？」（いずれも2026年6月参照）
          </p>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>履歴書の公的事実：性別欄は任意、家族欄はそもそも無い</h3>
            <div className="space-y-3 text-sm text-text-light leading-relaxed">
              <p>
                2020年7月に日本規格協会がJIS規格の解説から履歴書の様式例を削除したことを受け、厚生労働省は2021年4月に新たな<strong>「履歴書の様式例」</strong>を公表しました。公正な採用選考の観点から作られたこの様式例には、知っておくと安心できる事実が含まれています。
              </p>
              <ul className="space-y-2">
                <li>・<strong>性別欄は任意記載欄。</strong>「男・女」の選択式ではなく、記載を希望しない場合は<strong>未記載も可</strong>とされています</li>
                <li>・<strong>「通勤時間」「扶養家族数」「配偶者」「配偶者の扶養義務」の欄は設けない</strong>こととされています。家族構成や婚姻状況は本来、応募書類で問われる必要のない情報です</li>
              </ul>
              <p>
                市販の履歴書や転職サイトのフォーマットには古い様式が残っていることもありますが、厚労省様式例に沿った履歴書を使うこと自体はまったく問題ありません（出典: 厚生労働省「新たな履歴書の様式例の作成について」、2026年6月参照）。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 構成テンプレ */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">職務経歴書の構成テンプレ：プロジェクト単位で書く</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              エンジニアの職務経歴書は、次の5ブロック構成が標準です。上から順に「読む人が知りたい順」に並んでいます。
            </p>
          </div>
          <div className="space-y-4">
            {[
              { name: "① 職務要約（3〜5行）", desc: "経験年数・主な領域・代表的な技術・直近の役割を要約。「Web系開発◯年。バックエンド（言語名）を中心に、要件定義〜運用まで一貫して担当。直近は◯名チームのリーダーとして〜」のように、ここだけ読めば人物像が分かる密度にします。書類選考の担当者が最初に読む最重要ブロックです。", color: "#0891b2" },
              { name: "② 活かせるスキル・技術スタック", desc: "言語・フレームワーク・インフラ/クラウド・DB・ツールをカテゴリ別に列挙し、それぞれ「実務年数」または「できることのレベル感」を添えます。「Python（実務3年・APIの設計から実装まで一人称で可）」のように書くと、単なる単語の羅列より格段に伝わります。応募先の求人票にあるキーワードと照合されるブロックなので、求人票で使われている表記（略称・正式名称）に合わせるのも実務的なコツです。", color: "#7c3aed" },
              { name: "③ 職務経歴（プロジェクト単位・新しい順）", desc: "本文の中核。会社ごとの業務説明ではなく、プロジェクト（案件）ごとに「期間／概要／規模／役割・担当フェーズ／技術スタック／成果・工夫」のセットで書きます。書き方の型は下のボックス参照。古い案件・応募先と関連の薄い案件は1〜2行に圧縮し、直近・関連案件を厚くするメリハリが重要です。", color: "#0891b2" },
              { name: "④ 自己PR（3〜10行）", desc: "プロジェクト経歴では伝わらない強みを1〜2点に絞って書きます。技術選定の考え方、品質やチームへの貢献姿勢、キャッチアップの速さなど。「なんでもやります」より「この強みでこう貢献できる」の方が通ります。応募先ごとに差し替える前提のブロックです。", color: "#7c3aed" },
              { name: "⑤ 補足情報（任意）", desc: "保有資格、GitHub・技術ブログ・ポートフォリオのURL、登壇・執筆など。成果物URLは書類の説得力を大きく底上げします。", color: "#0891b2" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: item.color }}>{item.name}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#f8fafb", border: "1px solid #d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>プロジェクト1件の「書き方の型」</h3>
            <p className="text-sm text-text-light leading-relaxed mb-3">
              下記の項目を埋める形で1案件ずつ書きます（◯◯はご自身の実績に置き換えてください）。スキルシート提出を求められた場合も、同じ項目を表形式にすれば対応できます。
            </p>
            <div className="rounded-lg bg-white p-4 text-sm text-text-light leading-relaxed" style={{ border: "1px solid #d1dce5" }}>
              <p><strong>【プロジェクト名・期間】</strong> ◯◯システムの開発（20XX年X月〜20XX年X月）</p>
              <p><strong>【概要】</strong> 何のための、誰が使うシステムか（1〜2行）</p>
              <p><strong>【規模】</strong> チーム◯名（うち開発◯名）／自分のポジション（メンバー・サブリーダー等）</p>
              <p><strong>【担当フェーズ】</strong> 要件定義・設計・実装・テスト・運用のうち担当した範囲</p>
              <p><strong>【技術スタック】</strong> 言語／フレームワーク／DB／インフラ・クラウド／ツール</p>
              <p><strong>【成果・工夫】</strong> 課題→自分の打ち手→結果（できる限り数値で。次章参照）</p>
            </div>
            <p className="text-sm text-text-light leading-relaxed mt-3">
              「規模」と「担当フェーズ」を必ず書くのがポイントです。同じ「ECサイト開発」でも、3名チームで設計から担当したのか、50名体制で詳細設計書どおりに実装したのかで評価はまったく変わります。ここが曖昧な書類は、現場の読み手に「実力が判断できない」と読み飛ばされます。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 定量化 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">成果を「定量化」する書き方</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              書類の説得力を最も左右するのが成果の書き方です。コツは<strong>「課題 → 自分の打ち手 → 数値で測れる結果」</strong>の3点セットにすること。形容詞（大幅に・効率的に・積極的に）を数値・固有名詞に置き換えるだけで、同じ経験が見違えます。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left w-1/2" style={{ borderColor: "#d1dce5" }}>伝わらない書き方</th>
                  <th className="border px-4 py-3 text-left w-1/2" style={{ borderColor: "#d1dce5" }}>伝わる書き方（数値は自分の実績に置き換え）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>パフォーマンス改善を行った</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>スロークエリの特定とインデックス再設計により、一覧画面の表示時間を◯秒→◯秒に短縮</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>テストの効率化に貢献した</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>リグレッションテストを自動化（ツール名）し、リリース前の手動テスト工数を週◯時間削減</td>
                </tr>
                <tr className="bg-white">
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>チームをまとめた</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>開発◯名のサブリーダーとしてタスク分担とコードレビューを担当。新メンバー◯名の立ち上げを◯ヶ月で完了</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>障害対応を行った</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>障害の暫定対応と恒久対策（再発防止の仕組み名）を主導し、同種障害の発生件数を月◯件→0件に</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>数値が手元にない・出せない場合</h3>
            <p className="text-sm text-text-light leading-relaxed">
              売上やKPIに直結しない仕事も多いのがエンジニアの実態です。その場合は<strong>規模・頻度・期間・比較</strong>で代用します。「月◯回のリリースを担当」「◯画面・APIエンドポイント◯本を実装」「従来◯日かかっていた作業を◯時間に」など、絶対値が小さくても構いません。なお守秘義務のある具体的な数値（顧客名・売上額など）は「大手◯◯業向け」「数百万件規模のデータ」のように粒度を落として書くのが安全です。<strong>実績の誇張・水増しは厳禁</strong>です。面接で深掘りされて答えに詰まれば書類全体の信頼が崩れますし、内定後に発覚すれば経歴詐称として扱われるリスクがあります。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 経験別の書き方 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">経験が浅い・未経験・ブランクあり別の書き方</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「書ける実績が少ない」と感じる3つのケースについて、共通する方針は<strong>「隠す・盛るのではなく、不利に見える事実を文脈化する」</strong>ことです。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>実務1〜3年で「書ける実績がない」場合</h3>
              <p className="text-sm text-text-light leading-relaxed">
                若手に大きな実績がないことは採用側も織り込み済みです。見られているのは<strong>担当範囲の正確な記述と、課題への向き合い方</strong>。任されたタスクの中での工夫（テストの観点を増やした、ドキュメントを整備した、レビュー指摘を仕組みで減らした等）を「課題→打ち手→結果」の型で書けば、それ自体が実績になります。技術スタック欄は「研修で触れた」と「実務で使った」を正直に区別して書きましょう。ここを混ぜると面接で必ず露見します。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>未経験・異職種からの転職の場合</h3>
              <p className="text-sm text-text-light leading-relaxed">
                実務経歴の代わりに<strong>学習の経緯と成果物</strong>を職務経歴書に組み込みます。「学習内容（期間・教材・学習時間）」と「作った物（GitHubリポジトリ・公開URL）」をプロジェクト経歴と同じ型（概要・技術スタック・工夫）で書くのがコツです。前職の経験も捨てずに、業務知識（会計・医療・物流など）やコミュニケーション・調整の実績として接続しましょう。成果物の作り方は<a href="/articles/portfolio/" className="underline" style={{ color: "#0891b2" }}>ポートフォリオ作成ガイド</a>で詳しく解説しています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#f97066" }}>育児・介護などでブランクがある場合</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">
                鉄則は<strong>時系列を加工しないこと</strong>。空白を埋めようと期間をぼかすと、社会保険の記録等と突き合わせた際に整合せず、かえって致命的です。書き方は次の3点セットです。
              </p>
              <ul className="text-sm text-text-light space-y-1 mb-3">
                <li>① ブランク期間と理由を1行で事実として書く（「20XX年X月〜20XX年X月: 出産・育児のため離職」）</li>
                <li>② 復帰準備として何をしたかを具体物で添える（学習した技術、作った成果物、取得資格、教育訓練の修了など）</li>
                <li>③ 現在の就業体制（保育の確保状況・可能な勤務形態）を本人希望欄に簡潔に書く</li>
              </ul>
              <p className="text-sm text-text-light leading-relaxed">
                第1子出産を機に約3割の女性が離職しており（出典: 国立社会保障・人口問題研究所「第16回出生動向基本調査」）、ブランクからの応募は決して特殊なケースではありません。採用側が知りたいのは過去の理由より「今すぐ戦力になるか」です。ブランク年数別の準備戦略と支援制度は<a href="/articles/return-to-work/" className="underline" style={{ color: "#0891b2" }}>ブランクからの復職・再就職ガイド</a>を併せてどうぞ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec6 時短・残業制約 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">時短・残業制約はいつ・どう伝えるか</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「時短希望と書いたら書類で落とされるのでは」という不安はよく聞きます。実務的な答えは、<strong>伝える内容を段階で分ける</strong>ことです。隠して入社後に申し出るのはミスマッチと信頼低下のもとであり、かといって書類の本文で長々と説明する必要もありません。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>段階</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>伝えること</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>書き方・伝え方</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>書類段階</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>事実と可能ラインのみ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>本人希望欄・備考欄に「就学前の子どもがおり、残業は月◯時間程度まで可。フルタイム勤務可（または時短勤務を希望）」と<strong>1行で簡潔に</strong>。職務経歴書の本文には書かない</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>エージェント経由</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>詳細条件の事前すり合わせ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>「時短は何歳まで使えるか」「リモートと組み合わせ可か」「過去に時短勤務での中途入社実績はあるか」など、<strong>自分から聞きにくい確認を応募前に代行</strong>してもらう。条件が合わない企業に書類を出す無駄も省ける</td>
                </tr>
                <tr className="bg-white">
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>面接段階</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>働き方の設計と貢献の両方</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>制約だけでなく「その時間内でどう成果を出すか」（業務の優先順位づけ・非同期コミュニケーションの工夫など）をセットで話す。条件交渉は内定前後のオファー面談が本番</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>制度の後ろ盾：2025年の育児・介護休業法改正</h3>
            <p className="text-sm text-text-light leading-relaxed">
              法制度の面でも、子育てと両立する働き方は「特別なお願い」ではなくなりつつあります。2025年4月施行の育児・介護休業法改正で、<strong>残業免除（所定外労働の制限）を請求できる対象が「3歳未満」から「小学校就学前」の子を養育する労働者まで拡大</strong>されました。さらに2025年10月からは、3歳以上小学校就学前の子を持つ労働者向けに、始業時刻等の変更・テレワーク等・短時間勤務制度などから<strong>2つ以上の措置を講じることが事業主に義務化</strong>されています（出典: 厚生労働省「育児・介護休業法 改正のポイント」、2026年6月参照）。制約を伝えること自体に引け目を感じる必要はありません。在職中に転職活動を進める段取りは<a href="/articles/job-hunting-while-employed/" className="underline" style={{ color: "#0891b2" }}>働きながらの転職活動ガイド</a>で解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 AI添削 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">AI添削・作成ツールの活用と注意点</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              2026年現在、職務経歴書づくりにAIを使うのは当たり前の選択肢になりました。うまく使えば「書けない・終わらない」を解消できますが、使い方を誤ると逆効果です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>有効な使い方</h3>
              <ul className="space-y-2 text-sm text-text-light leading-relaxed">
                <li>・<strong>骨組みづくり:</strong> dodaの「レジュメビルダー」（会員登録で無料・Word/PDF出力可）のような作成ツールで構成の抜け漏れを防ぐ（出典: doda「レジュメビルダー」公式ページ、2026年6月参照）</li>
                <li>・<strong>壁打ち:</strong> 生成AIに「このプロジェクト経験の成果を定量化する切り口を10個挙げて」と聞き、書き忘れていた実績を掘り起こす</li>
                <li>・<strong>読みやすさの添削:</strong> 冗長な文の圧縮、誤字脱字、表記ゆれ（フレームワーク名の正式表記など）のチェック</li>
                <li>・<strong>求人票との照合:</strong> 求人票の必須要件と自分の経歴の対応関係を整理させ、職務要約・自己PRを応募先別に調整する</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#f97066" }}>注意点</h3>
              <ul className="space-y-2 text-sm text-text-light leading-relaxed">
                <li>・<strong>「盛り」の混入:</strong> AIは経歴をそれらしく補完します。出力された数値・役割・技術は必ず事実と照合を。誇張は面接での深掘りで崩れ、経歴詐称リスクにもなります</li>
                <li>・<strong>機密情報の入力:</strong> 前職の顧客名・非公開の数値・社内システムの詳細をプロンプトに入れない運用が安全です</li>
                <li>・<strong>没個性化:</strong> AI出力そのままの文章は定型的で、読み手にも見抜かれがちです。職務要約と自己PRは最後に自分の言葉へ書き直しましょう</li>
                <li>・<strong>最終チェックは人間で:</strong> エージェントを使うなら、キャリアアドバイザーの添削（応募先企業を知る人間の目）とAIを併用するのが現実解です</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light text-sm leading-relaxed mt-6">
            書類が通った後の準備は<a href="/articles/interview-guide/" className="underline" style={{ color: "#0891b2" }}>エンジニア面接ガイド</a>へ。職務経歴書に書いた内容は面接での質問の台本になるため、書いたことはすべて口頭で説明できる状態にしておきましょう。
          </p>
        </div>
      </section>

      {/* おすすめ転職エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績が光ります。スピーディーなマッチングで、最短2週間での内定実績も。年収交渉力にも定評があります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>
                  女性特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介してくれるため、長期的なキャリア形成に最適。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT業界の転職支援に強み。未経験からベテランまで幅広い層の求人を保有しています。レスポンスの速さと手厚いサポートに定評があり、特に若手エンジニアの転職支援実績が豊富です。
              </p>
            </div>
          </div>
          <div
            className="mt-8 rounded-xl p-6 text-center"
            style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}
          >
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">
              複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#f97066" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d1dce5" }}>
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                  <span><span style={{ color: "#0891b2" }} className="mr-2">Q.</span>{faq.name}</span>
                  <span className="text-text-light group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                  <p className="pt-4"><span style={{ color: "#f97066" }} className="font-bold mr-2">A.</span>{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考</h2>
          <ul className="space-y-2 text-sm text-text-light leading-relaxed">
            <li>・出典: doda（パーソルキャリア）「『何社受ける？』転職成功者の平均応募社数、書類や面接の通過率は？」（2026年6月参照）— 平均応募社数31.9社、2社以上応募94.9%、11社以上応募66.4%、内定1社＝面接5社＝応募27社の試算（集計期間: 2025年4月〜2026年3月、dodaエージェントサービスで内定を得た人が対象）</li>
            <li>・出典: 厚生労働省「新たな履歴書の様式例の作成について」（2021年4月公表、2026年6月参照）— 性別欄の任意記載化（未記載可）、「通勤時間」「扶養家族数」「配偶者」「配偶者の扶養義務」欄の不設置、JIS規格様式例削除（2020年7月）の経緯</li>
            <li>・出典: 厚生労働省「育児・介護休業法 改正のポイント」（2026年6月参照）— 残業免除（所定外労働の制限）対象の小学校就学前までの拡大（2025年4月施行）、3歳以上就学前の子を持つ労働者への柔軟な働き方措置（2つ以上）の義務化（2025年10月施行）</li>
            <li>・出典: 国立社会保障・人口問題研究所「第16回出生動向基本調査」（2026年6月参照）— 第1子出産を機に約3割の女性が離職</li>
            <li>・出典: doda「レジュメビルダー」公式ページ（2026年6月参照）— 会員登録で無料利用可、Word/PDF形式でのダウンロード対応</li>
            <li>・参考: リクナビNEXT「ITエンジニア向けスキルシートの書き方・職務経歴書との違い」、doda「スキルシートの書き方は？技術経歴書や職務経歴書との違いは？」（いずれも2026年6月参照）— スキルシートの標準項目（期間・規模・概要・担当フェーズ・開発環境）</li>
          </ul>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/portfolio/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>ポートフォリオ作成ガイド</h3>
              <p className="text-sm text-text-light">職務経歴書の説得力を底上げする成果物の作り方</p>
            </a>
            <a href="/articles/interview-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>エンジニア面接ガイド</h3>
              <p className="text-sm text-text-light">書類通過後の選考フローと面接準備</p>
            </a>
            <a href="/articles/return-to-work/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>ブランクからの復職・再就職ガイド</h3>
              <p className="text-sm text-text-light">ブランク年数別の戦略と支援制度</p>
            </a>
            <a href="/articles/job-hunting-while-employed/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>働きながらの転職活動ガイド</h3>
              <p className="text-sm text-text-light">在職中に書類準備と応募を進める段取り</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              理想の転職を実現しましょう
            </h2>
            <p className="text-white/90 mb-6">
              まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#f97066", color: "#ffffff" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
