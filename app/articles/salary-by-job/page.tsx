import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの職種別年収比較｜フロントからデータサイエンスまで一覧",
  description:
    "女性エンジニアの職種別年収を一覧比較。フロントエンド523万・バックエンド・インフラ497万・SRE/クラウド660万・データサイエンティスト・セキュリティ629万・ITコンサル595万・PM等を実データで比較。高年収職種の傾向、女性が年収を上げる戦略、年代別推移、未経験から高年収を狙う道、転職事例も解説。",
  alternates: { canonical: "/articles/salary-by-job/" },
  openGraph: {
    title: "女性エンジニアの職種別年収比較｜フロントからデータサイエンスまで一覧",
    description:
      "主要IT職種の平均年収を女性視点で一覧比較。高年収職種の傾向・年収を上げる戦略・年代別推移・未経験からの道を実データで解説。",
    url: "https://women-engineer.com/articles/salary-by-job/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアの職種別年収比較｜フロントからデータサイエンスまで一覧",
  datePublished: "2026-06-10",
  dateModified: "2026-07-07",
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
    "主要IT職種の平均年収を女性視点で一覧比較。高年収職種の傾向・女性が年収を上げる戦略・年代別推移・未経験からの道を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/salary-by-job/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "エンジニアの職種で一番年収が高いのはどれですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "平均年収で上位に来るのは、QAエンジニア（東京の事業会社で約700万円）、SRE/クラウドエンジニア（約660万円）、データサイエンティスト（クラウドエンジニアと同水準でランキング上位5位）、セキュリティエンジニア（約629万円）、ITコンサルタント（約595万円）、PM（年収中央値550万〜750万円）です。一方フロントエンドは約523万円、システムエンジニアは約516万円、インフラエンジニアは約497万円が目安。上流工程・希少スキル（クラウド設計、AI、セキュリティ）に近い職種ほど高年収になる傾向があり、シニアやマネジメントに進めばどの職種でも700万〜1,000万円超が見えてきます。",
      },
    },
    {
      "@type": "Question",
      name: "女性が職種選びで年収を上げるにはどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "(1)高年収職種に近いスキルを足すこと。たとえばフロントやインフラからクラウド（AWS/GCP）やデータ領域へ広げると単価が上がります。(2)上流工程（要件定義・設計・PM）の経験を積むこと。一次請け・自社開発・SaaS企業ほど単価が高い傾向です。(3)AI関連スキルを足すこと。AIは全職種の共通言語になりつつあり、Python×データ/LLMの経験は評価が高い。(4)エージェント経由で年収交渉すること。女性は20代まで男女差がほぼ無く、30代以降に差が広がりやすいため、ライフイベント前後でも市場価値を客観評価してもらい、適正額で交渉することが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "女性エンジニアの年代別の平均年収はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "女性SEの平均年収はおよそ497万円。年代別では20代前半が約343万円、30代前半で約496万円、40代前半が最も高く約613万円という調査があります。20代までは男女で給与差がほとんどなく、30代以降に少しずつ差が広がる傾向です。つまり30代がキャリアの分岐点で、この時期に上流工程・高年収職種・マネジメントへ舵を切れるかが、その後の年収カーブを大きく左右します。ブランクが生じても復帰しやすいスキル（設計・DB・クラウド）を持っておくと、年収の回復も早くなります。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でも高年収の職種を目指せますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能ですが、戦略が必要です。データサイエンティストやセキュリティ、SREなどの高年収職種は、いきなり未経験で就くのは難しいことが多いです。現実的なのは、まず未経験可で入りやすい職種（社内SE・テスト/QA・インフラ運用・バックエンドなど）で実務経験を積み、そこから高年収職種へステップアップする2段階ルート。たとえばインフラ運用→クラウド/SRE、バックエンド→データエンジニア→データサイエンティスト、QA→QAリード/SETといった流れです。最初の1社目は「伸びる業界・上流に近い環境」を選ぶと、その後の年収カーブが変わります。",
      },
    },
    {
      "@type": "Question",
      name: "職種別の年収比較で転職におすすめのエージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "職種ごとの相場と求人を比較したいなら、IT特化型のレバテックキャリアやGeeklyが有力です。職種ごとの年収レンジや技術スタックを理解したアドバイザーが、あなたのスキルでどの職種なら年収が上がるかを具体的に提案してくれます。年収交渉にも強みがあります。あわせて、産休育休・リモートなど働き方の条件で絞り込みたいなら、女性のキャリアに詳しいtype女性の転職エージェントを併用するのがおすすめ。高年収職種は激務なイメージもありますが、働き方とのバランスは企業差が大きいため、2〜3社併用して実態を確認しましょう。",
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
              { label: "職種別エンジニア年収比較" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              年収ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアの職種別年収比較
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                フロントからデータサイエンスまで、稼げる職種を一覧で見極める
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月10日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 職種別年収の全体像（なぜ職種で年収が変わるのか）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 主要IT職種の年収比較表（大きな一覧）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 高年収な職種とその理由</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 女性が年収を上げる5つの方法</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 年代別の年収推移（20代〜40代）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験から高年収職種を目指すには</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 転職での年収アップ事例</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 全体像 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">職種別年収の全体像（なぜ職種で年収が変わるのか）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「エンジニア」とひと口に言っても、職種によって平均年収は100万〜200万円以上の差があります。ITエンジニア全体の平均年収はおよそ<strong>462万〜478万円</strong>とされますが、これはあくまで全職種をならした数字。実際には、フロントエンド・バックエンドのような<strong>開発系</strong>、インフラ・SREのような<strong>基盤系</strong>、データサイエンティスト・セキュリティのような<strong>専門系</strong>、PM・ITコンサルのような<strong>上流系</strong>で、年収レンジは大きく分かれます。
            </p>
            <p>
              年収を決める要素はおおむね次の4つです。<strong>(1)上流工程に近いか</strong>（要件定義・設計・マネジメントほど高い）、<strong>(2)スキルの希少性</strong>（クラウド・AI・セキュリティは人材不足で単価が高い）、<strong>(3)業界・契約形態</strong>（一次請け・自社開発・SaaS・外資は高め）、<strong>(4)年代・経験</strong>。これらを意識して職種を選ぶ・スキルを足すことで、同じ「エンジニア」でも年収は大きく変わります。
            </p>
            <p>
              この記事では、女性が「今の職種からどこへ動けば年収が上がるか」を判断できるよう、主要IT職種の年収を<strong>一覧で比較</strong>します。総合的な年収相場は<a href="/articles/salary/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</a>もあわせてご覧ください。本記事は「職種ごとの比較」に特化しています。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>年収を左右する4つの要素</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>上流度</strong>：要件定義・設計・PMに近いほど高年収（ITコンサル・PMが上位）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>希少性</strong>：クラウド・AI・セキュリティは人材不足で単価が高い</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>業界・契約</strong>：一次請け／自社開発／SaaS／外資は同職種でも高め</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>年代・経験</strong>：シニア・マネジメントに進めば職種を問わず700万〜1,000万円超も</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 比較表（大きな表） */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">主要IT職種の年収比較表（大きな一覧）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              主要12職種の平均年収を一覧にしました。求人ボックス・Morgan McKinley・各種転職メディアの2026年データをもとにした目安です（企業規模・地域・経験・スキルにより変動します）。<strong>「高め／中位／入門」</strong>のレンジ感もあわせて確認してください。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>職種</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均年収の目安</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>レンジ</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>特徴・女性視点メモ</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>QAエンジニア</td>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>約550万〜700万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>高め</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>東京の事業会社で約700万円の事例。品質設計や自動化（SET）で高単価。未経験から入りやすく女性に人気</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>SRE / クラウド</td>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>約660万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>高め</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>職種別ランキング上位5位。シニアで1,000万円超も。リモート求人が多くインフラから移行しやすい</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データサイエンティスト</td>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>約650万円〜</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>高め</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>クラウドと同水準でランキング上位5位。AI需要で伸びる。統計×Pythonの専門性が武器に</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>セキュリティエンジニア</td>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>約629万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>高め</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>セキュリティエキスパートの全国平均628.9万円。人材不足で需要安定、資格が評価されやすい</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ITコンサルタント</td>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>約595万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>高め</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>最上流。要件定義・提案力が評価され高年収。激務傾向もあり働き方は企業差が大きい</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>プロジェクトマネージャー</td>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>約550万〜750万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>高め</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>中央値で550万〜750万円とIT内で高水準。マネジメントは女性が年収を伸ばす王道ルート</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データエンジニア（DB）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約544万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>中位〜高め</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>データベースエンジニアの平均544万円。データ基盤の需要増。データサイエンスへの足がかりにも</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フロントエンド</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約523万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>中位</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>UI/UXに関心がある人に人気。React/TypeScriptで単価が上がる。デザイン領域とも親和性</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>システムエンジニア / 社内SE</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約516万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>中位</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>社内SEはSEの範疇で約516万円が目安。社内SEは残業が少なく両立しやすいと女性に人気</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>バックエンド</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約500万〜520万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>中位</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>Python・GoやSaaSで上振れ。28歳370万→35歳820万に伸びた事例も。設計力が積み上がる</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ソフトウェアエンジニア</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約511万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>中位</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>製品開発全般。組み込み・SaaS等で幅広い。専門領域を掛け合わせると年収が伸びる</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>インフラエンジニア</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約497万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>入門〜中位</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>未経験から入りやすい。経験5年以上のシニアは700万〜1,000万円も。クラウド/SREへの登竜門</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ※平均年収は各種調査の代表値です。同じ職種でも、一次請け・自社開発・SaaS・外資ほど高く、SES・多重下請けでは低めになる傾向があります。AI関連スキルは「全職種の共通言語」になりつつあり、どの職種でもAI実装力があると評価が上がります。
          </p>
        </div>
      </section>

      {/* sec3 高年収な職種とその理由 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">高年収な職種とその理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              比較表で上位に来た職種には共通点があります。<strong>「上流に近い」「スキルが希少」「需要が伸びている」</strong>の3つです。それぞれの職種がなぜ稼げるのかを見ていきましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>SRE / クラウド（約660万円）</h3>
              <p className="text-text-light text-sm leading-relaxed">クラウド（AWS/GCP/Azure）移行が全業界で進み、信頼性を支えるSREは慢性的に不足。インフラ運用の延長で目指せて、シニアになると1,000万円超も。リモート求人が多いのも女性に嬉しいポイントです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>データサイエンティスト（約650万円〜）</h3>
              <p className="text-text-light text-sm leading-relaxed">AIブームで需要が急増。統計・機械学習・Pythonという掛け算スキルが希少なため高単価。バックエンドやデータエンジニアから段階的に移行する女性も増えています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>セキュリティ（約629万円）</h3>
              <p className="text-text-light text-sm leading-relaxed">サイバー攻撃の増加と法規制強化で需要は安定的に高水準。資格（情報処理安全確保支援士など）が年収に直結しやすく、知識が陳腐化しにくいため長く稼げる職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ITコンサル / PM（約595万〜750万円）</h3>
              <p className="text-text-light text-sm leading-relaxed">最上流の「何を作るか・どう進めるか」を担う職種。技術力に加えて課題整理・調整力が評価されます。マネジメントは女性が年収を大きく伸ばせる王道で、40代でマネージャーに就くと800万〜1,000万円も視野に入ります。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            ポイントは、これらの高年収職種が<strong>「いまの職種からの延長線上」</strong>にあること。インフラ→SRE、バックエンド→データ、開発全般→PMと、足がかりは身近にあります。詳しくは<a href="/articles/career-path/" className="underline" style={{ color: "#7c3a55" }}>キャリアパスの記事</a>も参考に。
          </p>
        </div>
      </section>

      {/* sec4 女性が年収を上げる方法 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が年収を上げる5つの方法</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              職種を変えなくても、また大幅に変えなくても、年収を上げる方法はあります。女性が特に意識したい5つを紹介します。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["1", "高年収職種に近いスキルを足す", "フロントやインフラのままでも、クラウド（AWS/GCP）やデータ領域を足すと単価が上がります。職種を丸ごと変えるより、いまの強みに希少スキルを掛け算するのが現実的です。"],
              ["2", "上流工程（設計・PM）を経験する", "実装だけでなく要件定義・設計・進行管理に関わると、評価軸が一段上がります。マネジメント系（リーダー→PM→管理職）は、女性が40代で800万〜1,000万円を狙える王道ルートです。"],
              ["3", "AIスキルを掛け合わせる", "AIは全職種の共通言語になりつつあり、AI実装スキルを持つ人材は高く評価されます。Python×データ/LLMの経験は、どの職種にいても年収を底上げします。"],
              ["4", "一次請け・自社開発・SaaSへ移る", "同じ職種でも、多重下請けのSESより一次請け・自社開発・SaaS・外資のほうが単価が高い傾向。契約形態と業界を変えるだけで年収が上がることもあります。"],
              ["5", "エージェント経由で年収交渉する", "女性は20代まで男女差がほぼ無く、30代以降に差が広がりがち。市場価値を客観評価してもらい、適正額で交渉することが、見えない損を防ぐ最短ルートです。"],
            ].map(([num, title, desc], i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
                <span className="flex-shrink-0 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>{num}</span>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            年収交渉の具体的な進め方は<a href="/articles/negotiation/" className="underline" style={{ color: "#7c3a55" }}>年収交渉の記事</a>で詳しく解説しています。
              <div className="mt-3 rounded-lg p-4" style={{ backgroundColor: "#efe3d8", border: "1px solid #d9c7b8" }}>
                <p className="text-sm text-text-light leading-relaxed">
                  <strong>年収交渉をプロに任せたいなら</strong>、交渉実績を数値で公表しているエージェントが有力です。テックゴー（TechGo）は年収交渉成功率100%（2025年9月時点実績）・平均年収アップ138万円（2025年6〜7月実績）を公式で掲げています。詳しくは<a href="/reviews/techgo/" className="font-bold underline" style={{ color: "#7c3a55" }}>テックゴーの口コミ・評判</a>、他社との比較は<a href="/ranking/" className="font-bold underline" style={{ color: "#7c3a55" }}>おすすめランキング</a>をご覧ください。
                </p>
              </div>
          </p>
        </div>
      </section>

      {/* sec5 年代別の年収推移 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年代別の年収推移（20代〜40代）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              職種選びと並んで重要なのが「いつ動くか」です。女性SEの平均年収はおよそ<strong>497万円</strong>。年代別の推移を見ると、<strong>30代がキャリアの分岐点</strong>であることがよくわかります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年代</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>女性の平均年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>この時期のポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代前半</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約343万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>男女差ほぼなし。伸びる業界・上流に近い環境を選ぶ</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代前半</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約496万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>分岐点。高年収職種・上流・マネジメントへ舵を切る時期</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代前半</td><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8", color: "#7c3a55" }}>約613万円（最も高い）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>専門性・マネジメントで差がつく。800万〜1,000万円も視野</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年代別の年収戦略</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>20代</strong>：男女差が小さいうちに、伸びる業界（SaaS・AI・クラウド）と上流に近い環境を選ぶ</li>
              <li>② <strong>30代</strong>：ライフイベントと重なりやすい分岐点。ブランクに強いスキル（設計・DB・クラウド）を持ち、高年収職種・PMへ動く</li>
              <li>③ <strong>40代</strong>：専門性かマネジメントで差がつく。実績を棚卸しし、エージェントで適正額に引き上げる</li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            20代までは男女で給与差がほとんどなく、30代以降に少しずつ差が広がる傾向です。だからこそ、差が開く前の30代でどの職種・働き方を選ぶかが、その後の年収カーブを決めます。
          </p>
        </div>
      </section>

      {/* sec6 未経験から高年収職種 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から高年収職種を目指すには</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              データサイエンティストやSRE、セキュリティといった高年収職種に、未経験でいきなり就くのは難しいのが現実です。おすすめは、<strong>入りやすい職種で実務を積み→高年収職種へステップアップ</strong>する2段階ルート。代表的な流れを紹介します。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["ROUTE 1", "インフラ運用 → クラウド / SRE", "未経験可の多いインフラ運用（約497万円）でサーバー・ネットワークの基礎を固め、AWS等のクラウド資格を取得。SRE/クラウド（約660万円）へ移行して年収を引き上げる王道です。"],
              ["ROUTE 2", "バックエンド → データエンジニア → データサイエンティスト", "Python・SQLでバックエンド経験を積み、データ基盤（データエンジニア・約544万円）へ。統計・機械学習を足してデータサイエンティスト（約650万円〜）を狙う、AI時代の伸びるルート。"],
              ["ROUTE 3", "QA / テスト → QAリード / SET", "未経験から入りやすいQA（テスト）で品質設計を学び、テスト自動化（SET）やQAリードへ。QAは東京の事業会社で約700万円の事例もあり、開発に戻らず高年収を狙えます。"],
              ["ROUTE 4", "社内SE → PM / ITコンサル", "残業が少なく両立しやすい社内SE（約516万円）で業務知識と調整力を磨き、プロジェクト管理へ。PM（約550万〜750万円）・ITコンサル（約595万円）の上流ルートへ進みます。"],
            ].map(([route, title, desc], i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
                <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>{route}</span>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            最初の1社目は「伸びる業界・上流に近い環境」を選ぶことが、その後の年収を大きく左右します。未経験からの始め方は<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験ガイド</a>も参考に。
          </p>
        </div>
      </section>

      {/* sec7 転職での年収アップ事例 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職での年収アップ事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・インフラ運用 → SRE）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SESのインフラ運用 / 年収430万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SaaS企業のSRE / 年収650万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">AWS資格を取得しIaC（Terraform）の学習実績を整理。職種を運用からSREへ移し、年収220万円アップとフルリモートを同時に実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（30代後半・バックエンド → データエンジニア）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">受託開発のバックエンド / 年収520万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">事業会社のデータエンジニア / 年収640万円</p></div>
              </div>
              <p className="text-sm text-text-light">Python・SQLの強みにデータ基盤（BigQuery）の経験を足し、データ領域へ移行。育休復帰後に時短勤務のまま年収120万円アップを実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Eさん（40代前半・社内SE → PM）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">社内SE / 年収540万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">自社開発企業のPM / 年収780万円</p></div>
              </div>
              <p className="text-sm text-text-light">業務知識と調整力を武器に、上流のプロジェクト管理へ。マネジメント職へ移ることで年収240万円アップ。40代でのキャリアの伸びを示す好例です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>職種ごとの年収相場と求人を比較するには、IT特化型と女性特化型の併用が効果的です。あなたのスキルでどの職種なら年収が上がるかを、相場を踏まえて提案してもらいましょう。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。職種ごとの年収レンジや技術スタックに精通したアドバイザーが、「どの職種に動けば年収が上がるか」を具体的に提案してくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。職種転換（インフラ→SRE、バックエンド→データなど）の支援に強く、スピーディーなマッチングと年収交渉力に定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。高年収職種でも働き方とのバランスを取りたい人に最適。年収と働き方の両立を相談できます。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">職種選びで生涯年収が大きく変わる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、相場を踏まえた最適な一手を見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec9" className="py-10">
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
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの全体像</p></a>
            <a href="/articles/data-scientist/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>データサイエンティスト転職ガイド</h3><p className="text-sm text-text-light">AI時代の高年収職種を解説</p></a>
            <a href="/articles/security/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>セキュリティエンジニア転職ガイド</h3><p className="text-sm text-text-light">需要が安定する高年収職種</p></a>
            <a href="/articles/negotiation/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>エンジニアの年収交渉ガイド</h3><p className="text-sm text-text-light">適正額を引き出す交渉のコツ</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">あなたの職種、まだ年収を上げられます</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。相場を踏まえた最適なキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
