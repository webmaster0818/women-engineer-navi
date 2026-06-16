import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ブランクから女性エンジニアに復職するには？再就職ロードマップと支援制度【2026年】",
  description:
    "ブランクから女性エンジニアに復職・再就職する方法を解説。第1子出産前後の就業継続率69.5%や正規雇用比率のL字カーブなど公的統計と、教育訓練給付（最大80%）・経産省リスキリング支援（最大56万円）など実在の支援制度を出典付きで紹介。ブランク年数別（1〜2年／3〜5年／5年以上）の戦略とスキルキャッチアップのロードマップがわかります。",
  alternates: { canonical: "/articles/return-to-work/" },
  openGraph: {
    title: "ブランクから女性エンジニアに復職するには？再就職ロードマップと支援制度【2026年】",
    description:
      "第1子出産前後の就業継続率69.5%や正規雇用比率のL字カーブなど公的統計と、教育訓練給付（最大80%）・経産省リスキリング支援（最大56万円）など実在の支援制度を出典付きで解説。ブランク年数別の復職戦略がわかります。",
    url: "https://women-engineer.com/articles/return-to-work/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ブランクから女性エンジニアに復職するには？再就職ロードマップと支援制度【2026年】",
  datePublished: "2026-04-28",
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
    "第1子出産前後の就業継続率69.5%や正規雇用比率のL字カーブなど公的統計と、教育訓練給付（最大80%）・経産省リスキリング支援（最大56万円）など実在の支援制度を出典付きで解説。ブランク年数別の復職戦略とスキルキャッチアップのロードマップを紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/return-to-work/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ブランクが5年以上ありますが、エンジニアに戻れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。経済産業省「IT人材需給に関する調査」では2030年に最大約79万人のIT人材不足が試算されており、実務経験者はブランクがあっても需要があります。プログラミングの基礎・アルゴリズム・SQL・ネットワークといった土台は5年程度では陳腐化しません。一方、クラウドやAIコーディング支援ツールなど開発環境は大きく変わったため、6か月〜1年かけて体系的に学び直すのが現実的です。教育訓練給付（受講費用の最大80%）や求職者支援制度（無料訓練＋条件を満たせば月10万円の給付金）を使えば、費用負担を抑えて学び直せます。いきなりフルタイム正社員に戻らず、時短・派遣・業務委託などから段階的に戻す設計も有効です。",
      },
    },
    {
      "@type": "Question",
      name: "復職後の年収はブランク前より下がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ブランクの長さとキャッチアップの度合いによります。育休相当（1〜2年）のブランクで技術差分を埋めていれば、ブランク前と同水準のオファーも十分あり得ます。3年以上のブランクでは一時的に下がるケースがありますが、エンジニアはコードや成果物で実力が可視化されやすく、復職後1〜2年で取り戻しやすい職種です。注意したいのは雇用形態です。内閣府「令和7年版男女共同参画白書」によると、女性の正規雇用比率は20代後半の60.3%をピークに低下する「L字カーブ」を描いており、一度非正規で再就職すると正規に戻りにくい構造があります。生涯収入の観点では、安易に非正規を選ばず、正規雇用での再就職を軸に検討することをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "ブランク中に何を学び直せばいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「変わったもの」と「変わらないもの」を分けるのが効率的です。変わったのは開発環境で、クラウド（AWS/Azure/Google Cloud）前提のインフラ、コンテナ、GitHub CopilotなどのAIコーディング支援、フロントエンドのReact＋TypeScript主流化などが代表例です。一方、プログラミングの基礎文法、アルゴリズムとデータ構造、SQL・データベース設計、HTTP・ネットワークの基礎、Gitによるバージョン管理は昔のまま通用します。自分の土台を信じて、離れていた期間の「差分」に絞ってキャッチアップしましょう。AI支援ツールの普及で学び直しの速度自体が上がっているのも追い風です。",
      },
    },
    {
      "@type": "Question",
      name: "学び直しに使える給付金や支援制度はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "あります。厚生労働省の教育訓練給付制度では、専門実践教育訓練で受講費用の最大80%（年間上限64万円）が支給されます（2024年10月の改正で給付率が引き上げ）。経済産業省「リスキリングを通じたキャリアアップ支援事業」では、キャリア相談＋講座受講＋転職支援を一体で受けられ、受講費用の最大70%（上限56万円）が補助されます。離職中で雇用保険を受給できない場合は、求職者支援制度により無料の職業訓練（ハロートレーニング）を受けられ、収入等の条件を満たせば月10万円の職業訓練受講給付金も支給されます。東京都在住なら都の女性向けITエンジニア育成事業もあります。利用には条件があるため、各制度の公式情報とハローワークで確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "面接でブランク期間はどう説明すればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "隠さず事実を簡潔に伝えたうえで、「復帰の準備として何をしたか」を具体物で示すのが最も効果的です。出産・育児等での離職は珍しいことではなく、国立社会保障・人口問題研究所「第16回出生動向基本調査」でも第1子出産を機に約3割の女性が離職しています。面接官が知りたいのは過去の理由より「今すぐ戦力になるか」です。学び直した技術の内容、GitHubの個人開発やポートフォリオ、取得した資格、教育訓練の修了実績などを示し、復帰後の働き方（勤務時間・保育の体制）を現実的に説明できれば、ブランクの懸念はかなり打ち消せます。",
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
    { "@type": "ListItem", position: 3, name: "ブランクから女性エンジニアに復職するには", item: "https://women-engineer.com/articles/return-to-work/" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      {/* Hero */}
      <section
        className="relative py-12 md:py-16"
        style={{
          background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "ブランクからの復職・再就職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              状況別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              ブランクから女性エンジニアに復職するには？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                再就職ロードマップと支援制度【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>この記事の結論</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>第1子出産前後の就業継続率は<strong>69.5%</strong>まで上昇した一方、いまも<strong>約3割は出産を機に離職</strong>しています。ブランクからの再就職は決して特殊なケースではありません（出典: 国立社会保障・人口問題研究所）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>女性の労働力率の「M字カーブ」はほぼ解消しましたが、正規雇用比率は<strong>20代後半の60.3%をピークに低下する「L字カーブ」</strong>が課題。再就職では<strong>安易に非正規を選ばず正規雇用を軸に</strong>検討する価値があります（出典: 内閣府「令和7年版男女共同参画白書」）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>IT人材は<strong>2030年に最大約79万人不足</strong>と試算され、実務経験者はブランクがあっても需要があります。基礎は陳腐化しないため、<strong>クラウド・AIなど「差分」のキャッチアップ</strong>に絞るのが効率的です（出典: 経済産業省）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>学び直しには<strong>教育訓練給付（受講費用の最大80%）</strong>・<strong>経産省リスキリング支援（最大56万円）</strong>・<strong>求職者支援制度（無料訓練＋月10万円給付）</strong>など実在の公的支援を活用できます。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}
          >
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li>
                <a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>
                  1. データで見る女性の再就職（M字カーブ・L字カーブと就業継続率）
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>
                  2. ブランク年数別の復職戦略（1〜2年／3〜5年／5年以上）
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>
                  3. スキルキャッチアップ：変わった技術・変わらない基礎
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>
                  4. 復職までの4ステップロードマップ
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>
                  5. 学び直しに使える公的支援制度（給付金・職業訓練）
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>
                  6. 復職先の選び方とブランクの伝え方
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>
                  7. おすすめ転職エージェント
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>
                  8. よくある質問
                </a>
              </li>
              <li>
                <a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>
                  9. 出典・参考資料
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 データで見る現状 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データで見る女性の再就職（M字カーブ・L字カーブと就業継続率）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              まず「出産・育児等で離職した女性の再就職」が、いまどのくらい一般的なのかを公的統計で確認します。国立社会保障・人口問題研究所「第16回出生動向基本調査」によると、第1子出産前後の妻の就業継続率は2015〜19年出産で<strong>69.5%</strong>。かつての5割前後から大きく上昇しましたが、裏を返せば<strong>いまも約3割の女性が第1子出産を機に離職</strong>しています。「育児が落ち着いてから働き方を立て直す」人は、決して少数派ではありません。
            </p>
            <p>
              女性の働き方の構造を示す指標が2つあります。1つは年齢階級別の労働力率が描く「M字カーブ」。出産・育児期にいったん働く人の割合が落ち込む現象ですが、内閣府「令和7年版男女共同参画白書」によると、<strong>令和6年には20歳代から50歳代まで台形に近い形となり、M字カーブはほぼ解消</strong>しました。厚生労働省「働く女性の実情」でも、令和6年の女性の労働力人口は3,157万人と前年から33万人増加しており、「育児期も働く」が標準になりつつあります。
            </p>
            <p>
              もう1つが「L字カーブ」です。<strong>女性の正規雇用比率は20代後半の60.3%をピークに、年齢が上がるにつれて低下し続けます</strong>（2024年・労働力調査）。働く女性は増えたものの、出産・育児で一度離職すると<strong>パート・派遣など非正規での再就職に流れやすい</strong>構造が残っているということです。再就職で雇用形態をどう選ぶかは、生涯収入とキャリアを左右する重要な分岐点になります。
            </p>
            <p>
              そのうえで、エンジニアという職種には明確な追い風があります。経済産業省「IT人材需給に関する調査」では<strong>2030年に最大約79万人のIT人材不足</strong>が試算されており、実務経験者はブランクがあっても採用ニーズがあります。さらに情報通信業のテレワーク導入率は<strong>94.3%と全産業トップ</strong>（総務省「令和6年通信利用動向調査」）で、育児と両立しながら正規雇用で復帰しやすい環境が整っています。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>指標</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>数値・状況</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>出典</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>第1子出産前後の妻の就業継続率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>69.5%（2015〜19年出産。約3割は離職）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>国立社会保障・人口問題研究所「第16回出生動向基本調査」</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>女性の労働力率（M字カーブ）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>令和6年は20〜50歳代で台形に近い形となり、ほぼ解消</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>内閣府「令和7年版男女共同参画白書」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>女性の正規雇用比率（L字カーブ）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>25〜29歳の60.3%をピークに年齢とともに低下（2024年）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>内閣府「令和7年版男女共同参画白書」（労働力調査）</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>IT人材の不足数（試算）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2030年に最大約79万人不足</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>経済産業省「IT人材需給に関する調査」</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>情報通信業のテレワーク導入率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>94.3%（全産業トップ）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>総務省「令和6年通信利用動向調査」</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 国立社会保障・人口問題研究所「第16回出生動向基本調査」、内閣府「令和7年版男女共同参画白書」、厚生労働省「働く女性の実情（令和6年）」、経済産業省「IT人材需給に関する調査」、総務省「令和6年通信利用動向調査」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              まとめると、<strong>「働く女性は増えたが、離職後に正規で戻る道はまだ細い。ただしエンジニアはその細い道を太くできる職種」</strong>というのが2026年の現在地です。育休からの復帰（離職を挟まないケース）は<a href="/articles/after-maternity/" className="underline" style={{ color: "#7c3a55" }}>産休・育休後のキャリアの記事</a>で、復帰後の働き方は<a href="/articles/mama-engineer/" className="underline" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 ブランク年数別の戦略 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ブランク年数別の復職戦略（1〜2年／3〜5年／5年以上）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              復職の難易度と取るべき戦略は、ブランクの長さでまったく変わります。自分の状況に近い行を起点に、準備期間と狙い方を設計しましょう。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ブランク</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>キャッチアップ目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>戦略の軸</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>1〜2年<br />（育休相当）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>数週間〜2か月</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>技術の「差分」だけ埋めて<strong>元の職種・同水準の年収で復帰</strong>。使っていたフレームワークのバージョン差分とAIコーディング支援ツールに触れておけば十分戦えます</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>3〜5年</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>3〜6か月</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>主要技術の再学習＋<strong>小さなアウトプット（個人開発・ポートフォリオ）</strong>で実証。教育訓練給付や経産省リスキリング支援の対象講座を使うと費用を抑えられます。元職種に加えQA・社内SEなど時間の読みやすい職種も視野に</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>5年以上</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>6か月〜1年</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基礎の棚卸しから体系的に学び直し。離職中なら<strong>求職者支援制度（無料訓練＋月10万円給付）</strong>や自治体の育成事業を活用。時短・派遣・業務委託から始めて<strong>段階的に正社員へ戻す</strong>設計も現実的です</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>共通する3つの原則</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>基礎は資産</strong> — プログラミングの基礎・設計・DB・ネットワークの知識は陳腐化しません。「全部忘れた」と感じても、書き始めれば思い出すのが経験者の強みです</li>
              <li>② <strong>L字カーブに飲まれない</strong> — 「ブランクがあるから非正規で」と最初から下げないこと。IT人材不足を背景に、ブランクありの経験者を正社員採用する企業は実在します</li>
              <li>③ <strong>準備を「見える物」にする</strong> — 学び直しの修了証・GitHub・技術記事など、面接で提示できる具体物を1つ用意するだけで説得力が大きく変わります</li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-6">
            実務経験がそもそも浅い（ほぼ未経験に近い）場合は、<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験から女性エンジニアになるロードマップ</a>の手順のほうが適しています。
          </p>
        </div>
      </section>

      {/* sec3 スキルキャッチアップ */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">スキルキャッチアップ：変わった技術・変わらない基礎</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ブランク復帰の学び直しで最も避けたいのは「ゼロから全部やり直す」ことです。技術の世界は速く動きますが、<strong>変わったのは主に開発環境とツールであり、土台となる原理は変わっていません</strong>。「差分」と「不変」を仕分けて、差分だけに学習時間を投資しましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>この数年で変わったもの（差分として学ぶ）</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>クラウド前提のインフラ</strong> — AWS/Azure/Google Cloudが標準。オンプレ経験はそのまま活きるので、クラウドの対応概念を学ぶ</li>
                <li>・<strong>コンテナとCI/CD</strong> — Docker・GitHub Actionsなどによる自動化が当たり前に</li>
                <li>・<strong>AIコーディング支援</strong> — GitHub Copilotなどの普及で書き方・調べ方が変化。逆にキャッチアップ自体も速くなった</li>
                <li>・<strong>フロントエンドの主流交代</strong> — jQuery中心からReact＋TypeScriptへ</li>
                <li>・<strong>リモート前提の開発フロー</strong> — テキストコミュニケーション・非同期レビューが標準化</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>変わらないもの（あなたの資産）</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>プログラミングの基礎</strong> — 変数・制御構造・関数・オブジェクト指向の考え方</li>
                <li>・<strong>アルゴリズムとデータ構造</strong> — 計算量の感覚は一生もの</li>
                <li>・<strong>SQLとデータベース設計</strong> — RDBの基本は数十年変わらない</li>
                <li>・<strong>HTTP・ネットワークの基礎</strong> — Webの仕組みそのもの</li>
                <li>・<strong>Git・チーム開発の作法</strong> — ブランチ運用やレビュー文化の本質は同じ</li>
                <li>・<strong>設計力・デバッグ力・業務知識</strong> — 経験年数でしか得られない、もっとも市場価値の高い部分</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              学習の進め方は「細切れ時間」前提で設計するのが現実的です。子どものそばではドキュメントや技術記事のインプット、1人になれる時間にコーディング、と使い分けましょう。育児中の具体的な学習法は<a href="/articles/reskilling-leave/" className="underline" style={{ color: "#7c3a55" }}>育休中のスキルアップ・リスキリングガイド</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 ロードマップ */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">復職までの4ステップロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              ブランクの長さにかかわらず、復職までの道筋は次の4ステップに整理できます。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>STEP1. スキルの棚卸しと市場の差分把握</h3>
              <p className="text-sm text-text-light">
                過去に使った言語・フレームワーク・担当工程・業務知識をリストアップし、現在の求人票と突き合わせます。求人サイトで自分の元職種を20件ほど眺めるだけで、「何が求められ、何が変わったか」が具体的に見えます。転職エージェントの無料カウンセリングで市場価値を客観評価してもらうのも有効です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>STEP2. 差分の学び直し＋小さなアウトプット</h3>
              <p className="text-sm text-text-light">
                前章で仕分けた「差分」を、ブランク年数別の目安期間で学びます。このとき必ず<strong>成果物を1つ残す</strong>こと。小さなWebアプリ、GitHubのリポジトリ、技術記事1本で構いません。費用がかかる講座は、次章の教育訓練給付・リスキリング支援の対象講座から選ぶと負担を最大8割減らせます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>STEP3. 働き方の設計（保育・勤務条件を先に固める）</h3>
              <p className="text-sm text-text-light">
                保育園・学童の体制、希望勤務時間、リモートの必要度を先に固めます。いきなりフルタイム＋通勤に戻すと負荷が大きいため、<strong>時短×在宅から始めて段階的に広げる</strong>設計が現実的です。情報通信業はテレワーク導入率94.3%（出典: 総務省「令和6年通信利用動向調査」、2026年6月参照）と環境面の追い風があります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>STEP4. エージェント相談・応募・面接</h3>
              <p className="text-sm text-text-light">
                「ブランクあり」を伝えたうえで、時短可・リモート可・復職実績のある企業に絞った求人を紹介してもらいます。職務経歴書はブランク前の実績＋ブランク中の準備（学習・成果物）を時系列で正直に書くのが基本。応募〜内定は通常1〜3か月程度を見込み、保育の入園時期から逆算して動き始めましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 支援制度 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">学び直しに使える公的支援制度（給付金・職業訓練）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              再就職に向けた学び直しは、自費で全額負担する必要はありません。国はリスキリング支援を拡充しており、<strong>2024年10月には教育訓練給付の給付率が最大80%へ引き上げ</strong>られました。代表的な制度を整理します（いずれも支給には加入期間・収入などの条件があります）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>制度</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>支援内容</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>主な対象</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>専門実践教育訓練給付金<br />（厚生労働省）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受講費用の50%（年間上限40万円）を受講中に支給。資格取得して1年以内に就職等で70%、さらに賃金が5%以上上昇すると<strong>最大80%（年間上限64万円）</strong></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>雇用保険の加入期間など条件を満たす在職者・離職者。離職後も一定期間は対象になり得る</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>特定一般・一般教育訓練給付金<br />（厚生労働省）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>特定一般は受講費用の40%（資格取得して就職等で<strong>最大50%</strong>）、一般は20%を支給</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>同上。短期講座・資格講座向け</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>リスキリングを通じたキャリアアップ支援事業<br />（経済産業省）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>キャリア相談＋IT等の講座受講＋転職支援を一体提供。受講修了で費用の50%（上限40万円）、転職して1年継続でさらに20%（上限16万円）＝<strong>最大70%・上限56万円</strong></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>在職中の労働者（雇用形態問わず）。転職を前提とした学び直し向け</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>求職者支援制度／ハロートレーニング<br />（厚生労働省）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}><strong>無料の職業訓練</strong>（テキスト代等除く）を受講でき、収入・資産等の条件を満たせば<strong>月10万円の職業訓練受講給付金</strong>＋通所手当を支給</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>雇用保険を受給できない離職者（長期離職後の再就職者・専業主婦からの再就職など）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>マザーズハローワーク<br />（厚生労働省）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>子育て中の求職者専門の窓口。キッズコーナー併設で、担当者制の職業相談・保育情報の提供・仕事と子育てが両立しやすい求人の紹介を無料で受けられる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>子育てをしながら就職を希望する人</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>東京都の女性向けITエンジニア育成支援<br />（東京都）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>女性向けにITエンジニアとしての就労を支援する東京都の育成事業。詳細は<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>東京都の女性ITエンジニア育成事業の記事</a>を参照</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>東京都在住等の条件を満たす女性</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「教育訓練給付制度」、厚生労働省「求職者支援制度のご案内」、経済産業省「リスキリングを通じたキャリアアップ支援事業」（いずれも2026年6月参照）
          </p>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>制度選びの目安</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・<strong>離職中で雇用保険を受給できない</strong> → まず求職者支援制度（無料訓練＋月10万円）とマザーズハローワークへ</li>
              <li>・<strong>雇用保険の加入歴があり本格的に学び直したい</strong> → 専門実践教育訓練給付（最大80%）の対象講座から選ぶ</li>
              <li>・<strong>現在パート等で在職中・転職前提</strong> → 経産省リスキリング支援（最大56万円）が使いやすい</li>
              <li>・なお2025年10月には、在職中に休暇を取って学ぶ人向けの「教育訓練休暇給付金」も創設されています。育休中・在職中の学び方は<a href="/articles/reskilling-leave/" className="underline" style={{ color: "#7c3a55" }}>リスキリングガイド</a>を参照してください</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec6 復職先の選び方・伝え方 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">復職先の選び方とブランクの伝え方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              復職先選びの基準は「技術がマッチするか」に加えて、<strong>ブランクからの立ち上がりを支えてくれる環境か</strong>です。次の4点を求人票＋エージェント経由の内部情報で確認しましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 復職・ブランクあり採用の実績</h3>
              <p className="text-text-light text-sm leading-relaxed">育休復帰者やブランクあり入社の実例がある企業は、立ち上がり期間への理解とオンボーディング体制が整っている傾向。実績の有無はエージェント経由で確認できます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 時短・リモートの運用実態</h3>
              <p className="text-text-light text-sm leading-relaxed">制度の有無ではなく「育児中の社員が日常的に使えているか」を確認。コアタイムの有無、送迎時間の中抜け可否、子どもの急病時の在宅切り替えの柔軟さが実用上の分かれ目です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 正規雇用での採用か</h3>
              <p className="text-text-light text-sm leading-relaxed">L字カーブの構造上、一度非正規に入ると正規に戻る道は細くなります。「最初は契約社員から」という提案を受けたら、正社員登用の実績・条件を必ず具体的に確認しましょう。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 立ち上がり期間への期待値</h3>
              <p className="text-text-light text-sm leading-relaxed">入社後1〜3か月のキャッチアップ期間をどう見てくれるか、メンターやペア作業の体制があるかを面接で逆質問。ここで誠実な回答が返る企業は復職先として信頼できます。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>面接でのブランクの伝え方（3部構成）</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>事実を簡潔に</strong> — 「出産・育児のため○年離れていました」。理由の弁解は不要。約3割の女性が出産を機に離職しており（出典: 国立社会保障・人口問題研究所「第16回出生動向基本調査」、2026年6月参照）、面接官にとっても珍しい経歴ではありません</li>
              <li>② <strong>準備を具体物で</strong> — 学び直した内容・修了した講座・GitHubや成果物・取得資格を提示。「ブランク中も手を動かしていた」事実が懸念を打ち消します</li>
              <li>③ <strong>これからを現実的に</strong> — 保育体制と勤務可能時間を明確に伝え、入社後3か月・1年でどう貢献するかを語る。曖昧にせず先に開示するほうが信頼されます</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績。スピーディーなマッチングで最短2週間での内定実績も。年収交渉力にも定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span>
              </div>
              <p className="text-sm text-text-light">女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT業界の転職支援に強み。未経験からベテランまで幅広い層の求人を保有。レスポンスの速さと手厚いサポートに定評があります。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec8 FAQ */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl border overflow-hidden bg-white" style={{ borderColor: "#d9c7b8" }}>
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

      {/* sec9 出典 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>・出典: 国立社会保障・人口問題研究所「第16回出生動向基本調査（結婚と出産に関する全国調査）」（2026年6月参照）— 第1子出産前後の妻の就業継続率69.5%（2015〜19年出産）</li>
            <li>・出典: 内閣府「令和7年版男女共同参画白書」（2026年6月参照）— 女性の労働力率のM字カーブがほぼ解消（令和6年は台形に近い形）、女性の正規雇用比率は25〜29歳の60.3%をピークに低下するL字カーブ（2024年・労働力調査）</li>
            <li>・出典: 厚生労働省「働く女性の実情（令和6年）」（2026年6月参照）— 令和6年の女性の労働力人口3,157万人（前年比33万人増）</li>
            <li>・出典: 経済産業省「IT人材需給に関する調査」（2026年6月参照）— 2030年に最大約79万人のIT人材不足の試算</li>
            <li>・出典: 総務省「令和6年通信利用動向調査」（2026年6月参照）— 情報通信業のテレワーク導入率94.3%</li>
            <li>・出典: 厚生労働省「教育訓練給付制度」（2026年6月参照）— 専門実践教育訓練給付の給付率最大80%（年間上限64万円、2024年10月改正）、特定一般最大50%、一般20%</li>
            <li>・出典: 経済産業省「リスキリングを通じたキャリアアップ支援事業」（2026年6月参照）— 受講費用の最大70%（上限56万円）の補助、キャリア相談・講座・転職支援の一体提供</li>
            <li>・出典: 厚生労働省「求職者支援制度のご案内」（2026年6月参照）— 無料の職業訓練と職業訓練受講給付金（月10万円）</li>
          </ul>
          <p className="text-xs text-text-light mt-4">
            ※ 本記事の統計値は上記の公的資料に基づきます。給付金・支援制度には加入期間・収入・資産等の支給条件があり、内容は改正されることがあります。利用前に必ず各制度の公式サイトとハローワークで最新の条件をご確認ください。
          </p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/tokyo-women-training/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>東京都の女性ITエンジニア育成事業</h3>
              <p className="text-sm text-text-light">都の育成事業の内容・費用・申込方法</p>
            </a>
            <a href="/articles/after-maternity/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>産休・育休後のキャリア</h3>
              <p className="text-sm text-text-light">育休からの復帰とキャリアの組み立て方</p>
            </a>
            <a href="/articles/mama-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</h3>
              <p className="text-sm text-text-light">時短・在宅の実態と両立できる職種</p>
            </a>
            <a href="/articles/reskilling-leave/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>育休中のスキルアップ・リスキリング</h3>
              <p className="text-sm text-text-light">復職・転職に向けた学び方</p>
            </a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験から女性エンジニアになるには</h3>
              <p className="text-sm text-text-light">現実のロードマップと職種の選び方</p>
            </a>
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リモートワーク求人ガイド</h3>
              <p className="text-sm text-text-light">在宅勤務のメリットと探し方</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12"><div className="mx-auto max-w-4xl px-4 text-center"><div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}><h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2><p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p><a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a></div></div>
      </section>
    </>
  );
}
