import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアが管理職・マネージャーを目指すガイド｜比率・年収・課題と対策",
  description:
    "女性エンジニアが管理職・マネージャーを目指すための実践ガイド。IT業界の女性管理職比率（情報サービス産業8.2%）の現状、EM・PMへのルート、管理職の年収（EM900〜1,200万円）、必要なスキル、ロールモデル不足など女性特有の課題と乗り越え方、えるぼし認定など企業の見極め方を実データで解説します。",
  alternates: { canonical: "/articles/women-manager/" },
  openGraph: {
    title: "女性エンジニアが管理職・マネージャーを目指すガイド｜比率・年収・課題と対策",
    description:
      "IT業界の女性管理職比率、EM・PMへのルート、管理職の年収、必要なスキル、女性特有の課題と対策、えるぼし認定企業の見極め方を実データで徹底解説。",
    url: "https://women-engineer.com/articles/women-manager/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアが管理職・マネージャーを目指すガイド｜比率・年収・課題と対策",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
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
    "IT業界の女性管理職比率、EM・PMへのルート、管理職の年収、必要なスキル、女性特有の課題と対策、企業の見極め方を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/women-manager/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "IT業界の女性管理職比率はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "情報サービス産業協会（JISA）の2024年版基本統計調査では、情報サービス産業の管理職に占める女性比率は約8.2%です。日本全体でも課長級13.9%・部長級8.2%（男女共同参画白書）と低水準で、政府は2030年までに女性管理職比率30%を目標に掲げています。ITエンジニアの女性比率自体が18.8%（OECD加盟国中17位）と母数が少ないことが、管理職比率の低さの背景にあります。逆に言えば、女性エンジニアが管理職を目指すことは希少価値が高く、企業のダイバーシティ推進の追い風も受けやすい状況です。",
      },
    },
    {
      "@type": "Question",
      name: "エンジニアから管理職になるとどのくらい年収が上がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "エンジニアリングマネージャー（EM）の年収は900〜1,200万円が中心レンジで、転職者の平均は1,100万円前後、上位では2,000万円を超えるケースもあります。30代前半までは600〜700万円、30代後半から800万円前後が中央値です。一般的な管理職（部長職596万円・課長職490万円）と比べてもIT管理職の水準は高く、メンバークラスのエンジニアからEMになると100万〜300万円程度の年収アップが見込めます。VPoEやCTOまで進めばさらに上振れします。",
      },
    },
    {
      "@type": "Question",
      name: "女性が管理職になりにくい理由は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "企業向け調査では、女性を課長相当職に昇進させる課題として「女性自身が目指していない」（47.2%）、「要件を満たす女性が少ない」（45.2%）、「女性従業員の数自体が少ない」（28.7%）、「ロールモデルが少ない」（26.1%）、「アンコンシャスバイアス（無意識の偏見）が根強い」（15.1%）が挙がっています。特に管理職志望の女性では72.0%がロールモデル不在を課題と感じています。女性の管理職意向は33.6%（男性50.5%）と低く、ライフイベントとの両立不安や「自分には無理」という思い込みも壁になっています。",
      },
    },
    {
      "@type": "Question",
      name: "ロールモデルとなる女性管理職が社内にいない場合どうすればよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "社内に限定せず外部にロールモデルを求めるのが有効です。Women Who Code TokyoやJapan Women in Technology（JWiT）、各種テックカンファレンスの女性登壇者、SNSで発信する女性EM・CTOなど、社外には参考にできる先輩が多数います。複数の人の「一部分」を組み合わせて自分なりのモデルを作る考え方も推奨されています。また、ロールモデルが少ない企業よりも、女性管理職が実際にいる企業へ転職することも選択肢です。えるぼし認定企業や女性管理職比率を開示している企業を、IT・女性特化型のエージェント経由で探すと効率的です。",
      },
    },
    {
      "@type": "Question",
      name: "管理職を目指すうえで女性が確認すべき企業の制度は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "まず女性活躍推進法に基づく「えるぼし認定」（採用・継続就業・働き方・管理職比率・多様なキャリアコースの5基準、3段階＋プラチナえるぼし）と、子育て支援の「くるみん認定」の有無を確認しましょう。2026年4月の改正でえるぼしには「えるぼしプラス」も新設されました。あわせて、有価証券報告書や統合報告書で開示される女性管理職比率の実数値、昇進・評価基準の透明性、女性向けリーダー研修やメンター制度、産休育休からの管理職復帰実績を確認すると、「掛け声だけ」でない本気度を見極められます。",
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
              { label: "女性エンジニアが管理職を目指すガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              キャリアガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアが管理職・マネージャーを目指す道
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                比率・年収・必要スキルと、女性特有の課題の乗り越え方を実データで解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月10日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. IT業界の女性管理職比率の現状</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 管理職への代表的なルート（EM・PMなど）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. IT管理職の年収相場（役職別）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 管理職に必要なスキル</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 女性が管理職になる課題と対策</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 管理職を目指すステップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 女性管理職を推進する企業の見極め方</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. 昇進・転職の成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 女性管理職比率の現状 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">IT業界の女性管理職比率の現状</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              情報サービス産業協会（JISA）の「2024年版 情報サービス産業 基本統計調査」によると、IT業界（情報サービス産業）の管理職に占める女性の比率はおよそ<strong>8.2%</strong>。日本全体でも課長級13.9%、部長級8.2%（内閣府『男女共同参画白書』）と、女性管理職は依然として少数派です。政府は<strong>2030年までに女性管理職比率30%</strong>という目標を掲げていますが、上場・大手企業でも「30%以上」と回答した企業は25.7%にとどまり、達成への道のりは長いのが実情です。
            </p>
            <p>
              背景には、そもそも<strong>ITエンジニアの女性比率が18.8%（OECD加盟国中17位）</strong>と母数が少ないこと、そして女性自身の管理職意向が<strong>33.6%（男性は50.5%）</strong>と低いことがあります。「目指す人が少ない」ことが「ロールモデルが育たない」ことにつながる、構造的な悪循環が起きています。
            </p>
            <p>
              一方でこれは、<strong>女性エンジニアが管理職を目指すことの希少価値が高い</strong>ことの裏返しでもあります。ダイバーシティ経営やえるぼし認定の広がりで企業の登用意欲は高まっており、意志を持って準備すれば、女性こそチャンスをつかみやすい局面とも言えます。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>数字で見る現状</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>情報サービス産業の女性管理職比率：<strong>約8.2%</strong>（JISA 2024年版）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>全産業の課長級13.9%／部長級8.2%（男女共同参画白書）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>ITエンジニアの女性比率：<strong>18.8%</strong>（OECD中17位）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>女性の管理職意向33.6%／男性50.5%</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>政府目標：2030年までに女性管理職比率<strong>30%</strong></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 管理職への代表的なルート */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">管理職への代表的なルート（EM・PMなど）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「管理職」と一口に言っても、エンジニアからの道は一本ではありません。コードを書く力を活かしながらチームを率いる道、プロダクトやプロジェクトを動かす道など、複数のルートがあります。自分の強みと志向に合わせて選べるのが、エンジニア発キャリアの強みです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>1. エンジニアリングマネージャー（EM）</h3>
              <p className="text-text-light text-sm leading-relaxed">開発チームの「人・組織・開発プロセス」を率いる役割。1on1や評価、採用、技術的な意思決定支援を担います。テックリードを経て30〜35歳で転向する人が多く、VPoE・CTOへの登竜門でもあります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3aed" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>2. プロジェクトマネージャー（PM／PdM）</h3>
              <p className="text-text-light text-sm leading-relaxed">プロジェクト全体のQCD（品質・コスト・納期）やプロダクトの方向性を管理。技術理解を武器に、顧客折衝や要件定義をリードします。エンジニア出身者は実装可否の判断が速く重宝されます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>3. テックリード／リーダー</h3>
              <p className="text-text-light text-sm leading-relaxed">少人数チームの技術的な舵取りを担う最初のマネジメント経験の場。設計レビューやメンバー育成を通じ、人を動かす感覚を養えます。EM・PMへの前段としても最適です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3aed" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>4. 課長・部長・VPoE／CTO（上級管理職）</h3>
              <p className="text-text-light text-sm leading-relaxed">複数チームや組織全体を統括する道。EM・PMで実績を積んだ先に、開発部門の責任者や経営に近いポジションが見えてきます。女性役員30%という社会的潮流の追い風も受けます。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong>典型的な流れ：</strong> メンバー（実装）→ テックリード／リーダー → EM・PM → 課長・部長 → VPoE・CTO。多くの企業では「技術を極めるスペシャリスト職」と「マネジメント職」が分かれており、両者を行き来できる<strong>複線型キャリア（デュアルラダー）</strong>を整える企業も増えています。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 年収 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">IT管理職の年収相場（役職別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              管理職になる最大のメリットの一つが年収です。<strong>エンジニアリングマネージャー（EM）の年収は900〜1,200万円が中心レンジ</strong>で、転職者の平均は約1,100万円。一般的な管理職（部長596万円・課長490万円）と比べてもIT管理職の水準は高めです。下表は各種調査をもとにした目安です（企業規模・地域・実績で変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>役職</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>テックリード</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約650〜850万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>最初のマネジメント経験。実装も継続</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>エンジニアリングマネージャー（EM）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約900〜1,200万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>転職者平均約1,100万円。30代前半は600〜700万円が中央値</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>プロジェクトマネージャー（PM）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約700〜1,000万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>規模が大きいほど上振れ。上流・顧客折衝で高評価</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>部長・開発責任者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約1,000〜1,500万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>複数チーム統括。組織規模で大きく変動</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>VPoE／CTO</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約1,200〜2,000万円超</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>経営に近い役割。ストックオプションが付くことも</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>女性が適正年収を得るための3つのポイント</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>マネジメント実績を数値化</strong>。「チーム人数」「離職率改善」「リリース件数」などで成果を可視化する</li>
              <li>② <strong>年収交渉はエージェント経由</strong>。女性は自己評価を控えめに伝えがちなので、第三者に市場価値を提示してもらう</li>
              <li>③ <strong>役職定義を確認</strong>。同じ「マネージャー」でも管掌範囲が企業で異なる。job descriptionで実態を見極める</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec4 必要なスキル */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">管理職に必要なスキル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              管理職に求められるのは「人をマネジメントする力」です。技術力をゼロにする必要はありませんが、軸足は<strong>個人の生産性からチームの成果へ</strong>移ります。次の4領域をバランスよく備えることが目標です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>スキル領域</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>具体例</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>ピープルマネジメント</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>1on1 / 目標設定 / 動機づけ / 心理的安全性</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>傾聴と対話。女性が得意とされる共感力が強みになる</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>評価・育成</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>人事評価 / フィードバック / キャリア支援</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>公平で透明な評価基準の運用。バイアスを排除する意識</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>採用・組織づくり</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>面接 / チーム編成 / オンボーディング</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>必要な人材を見極め、定着させる力。採用広報も担う</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>技術・プロジェクト判断</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>技術選定支援 / 進捗管理 / 優先順位づけ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>エンジニア出身の強み。実現可否を素早く判断できる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            技術を細部まで自分で書く必要は減りますが、<strong>技術的な意思決定を支える「目利き」</strong>は引き続き重要です。加えて、経営層とメンバーをつなぐ<strong>翻訳力・交渉力</strong>が管理職の評価を大きく左右します。
          </p>
        </div>
      </section>

      {/* sec5 女性が管理職になる課題と対策 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が管理職になる課題と対策</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              女性が管理職を目指すうえでは、男性とは異なる固有の壁があります。企業向け調査で挙がる主な課題と、その乗り越え方を整理しました。原因の多くは「個人の能力不足」ではなく、構造や環境にあります。
            </p>
          </div>
          <div className="space-y-5 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>課題1：ロールモデルの不在（志望者の72.0%が課題と認識）</h3>
              <p className="text-sm text-text-light leading-relaxed mb-2">身近に女性管理職がいないと「自分の将来像」が描けず、踏み出しにくくなります。</p>
              <p className="text-sm text-text-light leading-relaxed"><strong>対策：</strong>社外にモデルを求める。Women Who Code TokyoやJapan Women in Technology（JWiT）、技術カンファレンスの女性登壇者、SNSで発信する女性EM・CTOなどを参考に。複数の人の「良い部分」を組み合わせ、自分なりのモデルを作るのも有効です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>課題2：アンコンシャスバイアス（無意識の偏見）</h3>
              <p className="text-sm text-text-light leading-relaxed mb-2">「女性は管理職を望まないだろう」「育児中だから無理だろう」という周囲の思い込みが、昇進機会を遠ざけます。</p>
              <p className="text-sm text-text-light leading-relaxed"><strong>対策：</strong>昇進意欲を上司に明確に言語化して伝える。評価基準が透明で、バイアス研修を行っている企業を選ぶことも重要です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>課題3：ライフイベントとの両立不安</h3>
              <p className="text-sm text-text-light leading-relaxed mb-2">「管理職になると長時間労働になり、育児と両立できない」という不安が、女性の管理職意向（33.6%）を下げています。</p>
              <p className="text-sm text-text-light leading-relaxed"><strong>対策：</strong>リモート・フレックスが整い、時短管理職や育休からの管理職復帰実績がある企業を選ぶ。IT職はもともと成果が可視化されやすく、両立しやすい職種です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>課題4：自己評価の低さ・「自分には無理」という思い込み</h3>
              <p className="text-sm text-text-light leading-relaxed mb-2">要件を100%満たさないと応募をためらう傾向が、女性に強く見られます（インポスター症候群）。</p>
              <p className="text-sm text-text-light leading-relaxed"><strong>対策：</strong>「7割できれば手を挙げる」を基準にする。メンターやエージェントに客観評価をもらい、自分の市場価値を正しく把握することが第一歩です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec6 管理職を目指すステップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">管理職を目指すステップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>管理職への道は、ある日突然始まるものではありません。日々の業務の中で少しずつ「人を動かす経験」を積み重ねることが王道です。次の順序を意識すると進みやすくなります。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "プレイヤーとして実績と信頼を築く", "まずは技術者として成果を出し、メンバーから信頼される土台を作る。管理職の説得力は現場での実績に支えられます。"],
              ["STEP2", "小さなリーダー経験を取りに行く", "新人のメンター、レビュー担当、小規模プロジェクトのリーダーなど、手を挙げて「人を動かす」経験を積む。実績の言語化を意識。"],
              ["STEP3", "昇進意欲を上司に明確に伝える", "「管理職を目指したい」と言語化して伝える。女性は意欲を控えめに示しがちなので、面談やキャリア面談で明確に意思表示を。"],
              ["STEP4", "マネジメントスキルを学ぶ", "1on1・評価・採用の知識を書籍や社内外の研修で習得。女性向けリーダー研修やメンター制度があれば積極的に活用する。"],
              ["STEP5", "ロールモデル・メンターを持つ", "社内外に相談できる先輩を見つける。コミュニティやカンファレンスで女性管理職とつながり、リアルな働き方を知る。"],
              ["STEP6", "登用される環境を選ぶ（必要なら転職）", "今の会社で機会が乏しければ、女性管理職比率を開示しえるぼし認定を持つ企業へ。エージェント経由で実態を確認して動く。"],
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

      {/* sec7 企業の見極め方 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性管理職を推進する企業の見極め方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「女性活躍」を掲げる企業は多いですが、実態は様々です。本気で女性の登用を進めている企業かどうかは、<strong>公的な認定</strong>と<strong>開示された数値</strong>で見極められます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#0891b2" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>えるぼし認定</h3>
              <p className="text-sm text-text-light leading-relaxed">女性活躍推進法に基づく認定。「採用」「継続就業」「働き方」「管理職比率」「多様なキャリアコース」の5基準のうち、満たす数で3段階に分かれます。最上位は<strong>プラチナえるぼし</strong>。2026年4月の改正で「えるぼしプラス」も新設されました。管理職比率の基準を満たす企業は、女性の登用に実績があるサインです。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#7c3aed" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>くるみん認定</h3>
              <p className="text-sm text-text-light leading-relaxed">次世代育成支援対策推進法に基づく、子育てサポート企業の認定。上位の<strong>プラチナくるみん</strong>もあります。産休育休を取りながら管理職を続けやすい環境かを判断する材料になります。えるぼしと両方持つ企業は両立支援に厚いと言えます。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>女性管理職比率の開示数値</h3>
              <p className="text-sm text-text-light leading-relaxed">有価証券報告書や統合報告書、女性活躍推進企業データベースで公開される実数値を確認。業界平均（IT約8.2%）を上回るか、目標値と達成計画があるかを見ると本気度がわかります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>制度の「運用実態」</h3>
              <p className="text-sm text-text-light leading-relaxed">女性向けリーダー研修・メンター制度の有無、育休からの管理職復帰実績、評価基準の透明性。制度があっても使われていなければ意味がないため、面接や口コミ、エージェント経由で実態を確認します。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <p className="text-sm text-text-light leading-relaxed">
              求人票には出にくい「女性管理職が実際にいるか」「昇進ルートが機能しているか」といった生の情報は、<strong>女性のキャリアに詳しいエージェント経由で確認するのが最も確実</strong>です。
            </p>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>管理職を目指す転職では、技術を正当に評価しつつ、女性のキャリア継続にも配慮できるエージェントを併用するのが効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人が豊富。EM・PMなどマネジメント求人にも強く、技術に精通したアドバイザーが管理職ポジションの実態（管掌範囲・年収）を踏まえた提案をしてくれます。女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。マネジメント層の求人やスタートアップのEM・VPoEポジションにも対応し、年収交渉力に定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">えるぼし・くるみん認定企業や女性管理職比率の高い企業など、女性のキャリア継続・登用に配慮した求人を中心に紹介。両立しながら管理職を目指したい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 成功事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">昇進・転職の成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Cさん（30代後半・テックリード→EM）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SES企業のテックリード / 年収620万円・管理職機会なし</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}><p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p><p className="text-sm font-bold">自社開発SaaSのEM / 年収950万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">新人メンターやレビュー担当の実績を「離職率改善」「立ち上げ期間短縮」として数値で整理。IT特化型エージェント経由でえるぼし認定企業のEMポジションに転職し、育児と両立しながら初の管理職に。年収も330万円アップしました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Dさん（40代前半・育休復帰→PM・課長）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}><p className="text-xs font-bold text-text-light mb-1">昇進前</p><p className="text-sm font-bold">育休復帰後の時短PMメンバー / 「管理職は無理」と諦め</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}><p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>昇進後</p><p className="text-sm font-bold">開発課の課長（時短勤務のまま）/ 年収790万円</p></div>
              </div>
              <p className="text-sm text-text-light">社外の女性管理職コミュニティでロールモデルと出会い「時短でも管理職はできる」と知ったことが転機。上司に昇進意欲を明確に伝え、女性向けリーダー研修を受講。時短勤務のまま課長に登用され、後進女性のロールモデルにもなっています。</p>
            </div>
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
            <a href="/articles/pm-director/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>PM・ディレクター転職ガイド</h3><p className="text-sm text-text-light">エンジニアの次のキャリア</p></a>
            <a href="/articles/salary-1000man/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>年収1000万円を目指すには</h3><p className="text-sm text-text-light">管理職・高年収への道筋</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性が働きやすい企業の選び方</h3><p className="text-sm text-text-light">えるぼし認定や制度の見極め</p></a>
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアのキャリアパス</h3><p className="text-sm text-text-light">技術・管理・専門の進路を整理</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">管理職への一歩を踏み出しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。女性が活躍できる企業とマネジメントキャリアを一緒に描きましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
