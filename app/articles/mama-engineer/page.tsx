import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ママエンジニアの働き方ガイド｜時短・在宅の実態と両立できる職種【2026年】",
  description:
    "ママエンジニアの働き方ガイド。女性の育休取得率86.6%・IT業界のテレワーク導入率94.3%などの公的統計と、2025年施行の改正育児・介護休業法（時短勤務・テレワーク・残業免除）を出典付きで解説。育児と両立しやすい職種の比較や時短×在宅のモデルケースも紹介します。",
  alternates: { canonical: "/articles/mama-engineer/" },
  openGraph: {
    title: "ママエンジニアの働き方ガイド｜時短・在宅の実態と両立できる職種【2026年】",
    description:
      "女性の育休取得率86.6%・IT業界のテレワーク導入率94.3%などの公的統計と、2025年施行の改正育児・介護休業法を出典付きで解説。育児と両立しやすい職種・働き方がわかります。",
    url: "https://women-engineer.com/articles/mama-engineer/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ママエンジニアの働き方ガイド｜時短・在宅の実態と両立できる職種【2026年】",
  datePublished: "2026-04-27",
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
    "女性の育休取得率86.6%・IT業界のテレワーク導入率94.3%などの公的統計と、2025年施行の改正育児・介護休業法を出典付きで解説。育児と両立しやすい職種・働き方の比較も紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/mama-engineer/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "時短勤務は法律上いつまで使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "育児・介護休業法により、3歳未満の子を育てる労働者に対して、1日の所定労働時間を原則6時間とする短時間勤務制度を設けることが事業主の義務です。さらに2025年10月施行の改正で、3歳から小学校就学前の子を育てる労働者にも「柔軟な働き方を実現するための措置」（始業時刻変更・テレワーク等・短時間勤務などから企業が2つ以上を用意し、労働者が1つ選択）が義務化されました。企業独自に小学校卒業まで時短を延長できる制度を設けている会社もあるため、転職時は法定を超える部分を確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "育休を取って復帰する女性エンジニアは実際どのくらいいますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省「令和6年度雇用均等基本調査」によると、女性の育児休業取得率は86.6%で、取得者の9割以上が6か月以上取得しています。また国立社会保障・人口問題研究所「第16回出生動向基本調査」では、第1子出産前後の妻の就業継続率は69.5%（2015〜19年出産）まで上昇し、就業継続者の79.2%が育児休業制度を利用しています。IT業界（情報通信業）はテレワーク導入率94.3%（総務省「令和6年通信利用動向調査」）と全産業トップで、復帰後も柔軟に働きやすい環境です。",
      },
    },
    {
      "@type": "Question",
      name: "子どもが3歳になったら時短もテレワークも使えなくなりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ。2025年4月施行の改正育児・介護休業法で、残業免除（所定外労働の制限）の対象が3歳未満から「小学校就学前まで」に拡大されました。さらに2025年10月からは、3歳〜小学校就学前の子を育てる労働者向けに、始業時刻等の変更・テレワーク等（月10日以上）・短時間勤務などから企業が2つ以上の措置を用意することが義務化され、労働者はその中から1つを選んで利用できます。3歳以降も法律上の両立支援が続く時代になっています。",
      },
    },
    {
      "@type": "Question",
      name: "時短勤務だと収入はどのくらい減りますか？補う給付はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "フルタイム8時間から6時間の時短にすると、基本給ベースでおおむね25%前後減るのが一般的です（賞与・手当の扱いは企業により異なります）。収入減を補う制度として、2025年4月から雇用保険の「育児時短就業給付金」が始まり、2歳未満の子を育てて時短勤務する被保険者に、時短中の賃金の原則10%が支給されます。またエンジニアは成果が可視化されやすく、時短でも評価・昇給を維持しやすい職種です。",
      },
    },
    {
      "@type": "Question",
      name: "ママエンジニアにおすすめの転職エージェントは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "女性のキャリア継続に特化したtype女性の転職エージェントと、リモートワーク求人が豊富なレバテックキャリアの併用がおすすめです。時短勤務の適用年齢や育休復帰率、子どもの急病時の在宅切り替え可否といった求人票に出ない情報は、エージェント経由で事前に確認するのが確実です。IT特化型と女性特化型を2〜3社併用すると、技術面と働き方の両方の条件を満たす求人を見つけやすくなります。",
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
        style={{
          background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "ママエンジニアの働き方ガイド" },
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
              ママエンジニアの働き方ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                時短・在宅の実態と両立できる職種【2026年】
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
                <span>女性の育児休業取得率は<strong>86.6%</strong>、第1子出産前後の就業継続率は<strong>69.5%</strong>まで上昇。「出産＝退職」の時代は終わりつつあります（出典: 厚生労働省・国立社会保障・人口問題研究所）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>IT業界（情報通信業）のテレワーク導入率は<strong>94.3%で全産業トップ</strong>。エンジニアは育児と両立しやすい職業の代表格です（出典: 総務省）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>2025年施行の改正育児・介護休業法で、<strong>残業免除は小学校就学前まで拡大</strong>、3歳〜就学前にも<strong>テレワーク等を含む柔軟な働き方の措置が義務化</strong>。法制度は大きく前進しました。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>両立の成否は「制度の有無」より<strong>職種選び×企業の運用実態</strong>で決まります。本文の比較表と5つの確認条件をチェックしましょう。</span>
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
                  1. データで見るママエンジニアの現状（育休取得率・復帰率）
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>
                  2. 知っておくべき法制度（時短勤務・2025年改正のポイント）
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>
                  3. 育児と両立しやすい職種・働き方の比較
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>
                  4. 転職で確認すべき5つの企業条件
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>
                  5. ママエンジニアの1日（時短×在宅のモデルケース）
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>
                  6. ブランクからの復帰方法
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>
                  7. 育児中のスキルアップ術
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>
                  8. おすすめ転職エージェント
                </a>
              </li>
              <li>
                <a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>
                  9. よくある質問
                </a>
              </li>
              <li>
                <a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>
                  10. 出典・参考資料
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 データで見る現状 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データで見るママエンジニアの現状（育休取得率・復帰率）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              まず、公的統計で「出産後も働き続ける」ことがどれだけ一般的になったかを確認します。厚生労働省「令和6年度雇用均等基本調査」によると、女性の育児休業取得率は<strong>86.6%</strong>（前年度84.1%）。取得した女性の9割以上が6か月以上の育休を取得しており、育休を取って復帰するキャリアはすでに標準的な選択肢です。男性の取得率も<strong>40.5%</strong>と初めて4割を超え、夫婦で育児を分担しやすい環境整備が進んでいます。
            </p>
            <p>
              出産を機に仕事を続けられるかを示す指標としては、国立社会保障・人口問題研究所「第16回出生動向基本調査」があります。第1子出産前後の妻の就業継続率は、かつて5割前後で推移していましたが、2015〜19年に出産した妻では<strong>69.5%</strong>まで上昇。就業を継続した人の<strong>79.2%が育児休業制度を利用</strong>しており、「育休を使って復帰する」が両立の王道ルートになっています。
            </p>
            <p>
              そしてエンジニアにとって追い風なのが、IT業界の働き方の柔軟さです。総務省「令和6年通信利用動向調査」によると、テレワークを導入している企業は全産業平均で47.3%なのに対し、<strong>情報通信業は94.3%と全産業トップ</strong>。通勤時間をゼロにできる在宅勤務は、保育園の送迎や子どもの急な体調不良への対応と相性がよく、エンジニアは「育児と両立しやすい職業」の代表格といえます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>指標</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>数値</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>出典</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>女性の育児休業取得率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>86.6%（9割以上が6か月以上取得）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>厚生労働省「令和6年度雇用均等基本調査」</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>男性の育児休業取得率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>40.5%（過去最高）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>同上</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>第1子出産前後の妻の就業継続率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>69.5%（2015〜19年出産。継続者の79.2%が育休利用）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>国立社会保障・人口問題研究所「第16回出生動向基本調査」</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>情報通信業のテレワーク導入率</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>94.3%（全産業平均47.3%・産業別トップ）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>総務省「令和6年通信利用動向調査」</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「令和6年度雇用均等基本調査」、国立社会保障・人口問題研究所「第16回出生動向基本調査」、総務省「令和6年通信利用動向調査」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              一方で課題も残ります。男性の育休は約4割が2週間未満の短期取得にとどまり、育児負担が母親側に偏りやすい構造は続いています。だからこそママエンジニア側は、<strong>法制度を正しく知り、両立しやすい職種と企業を選ぶ</strong>ことが重要になります。育休取得率の統計の詳しい読み方は<a href="/articles/maternity-leave-rate/" className="underline" style={{ color: "#7c3a55" }}>産休・育休取得率データの記事</a>で解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 法制度 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">知っておくべき法制度（時短勤務・2025年改正のポイント）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              両立支援の制度は「会社の善意」ではなく、育児・介護休業法で定められた<strong>事業主の義務</strong>です。土台となるのが短時間勤務制度（時短勤務）で、<strong>3歳未満の子を育てる労働者に対し、1日の所定労働時間を原則6時間とする措置を設けることが企業に義務付けられています</strong>。労使協定による適用除外などの例外を除き、申し出を企業は基本的に拒否できません。
            </p>
            <p>
              さらに2025年4月と10月に施行された改正育児・介護休業法で、両立支援は大きく拡充されました。主な改正点は次の通りです。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>施行時期</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>改正内容</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>2025年4月</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>残業免除（所定外労働の制限）の対象拡大</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>3歳未満 → <strong>小学校就学前まで</strong>に拡大</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>2025年4月</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>子の看護等休暇の拡充</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>対象を<strong>小学3年生修了まで</strong>に延長。感染症による学級閉鎖や入園式・卒園式等も取得理由に追加</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>2025年4月</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>3歳未満の子を育てる労働者のテレワーク（努力義務）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>テレワークを選択できる措置を講ずることが企業の努力義務に</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>2025年4月</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>育児時短就業給付金の創設（雇用保険）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2歳未満の子を育てて時短勤務する被保険者に、<strong>時短中の賃金の原則10%を支給</strong></td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>2025年10月</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>柔軟な働き方を実現するための措置（義務）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}><strong>3歳〜小学校就学前</strong>の子を育てる労働者向けに、①始業時刻等の変更 ②テレワーク等（月10日以上）③保育施設の設置運営等 ④養育両立支援休暇 ⑤短時間勤務制度——から企業が<strong>2つ以上を用意し、労働者が1つを選択</strong></td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>2025年10月</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>個別の意向聴取・配慮（義務）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>妊娠・出産の申出時や子が3歳になる前に、勤務時間帯や勤務地等に関する労働者の意向を企業が個別に聴取し配慮することが義務に</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「育児・介護休業法 改正ポイントのご案内（令和7年4月1日・10月1日施行）」、厚生労働省「育児時短就業給付金」リーフレット（いずれも2026年6月参照）
          </p>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>実務上のポイント</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① 「3歳の壁」は法改正で緩和。<strong>残業免除は就学前まで</strong>、3歳〜就学前も柔軟な働き方の措置を選べる</li>
              <li>② 時短による収入減は<strong>育児時短就業給付金（賃金の10%）</strong>で一部カバーできる（2歳未満）</li>
              <li>③ 法定はあくまで最低ライン。<strong>「小学校卒業まで時短可」など法定超えの制度がある企業</strong>を選ぶと長期的に安心</li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-6">
            時短勤務の収入・キャリアへの影響は<a href="/articles/short-time/" className="underline" style={{ color: "#7c3a55" }}>時短勤務エンジニアの記事</a>で、産休・育休からの復帰プロセスは<a href="/articles/after-maternity/" className="underline" style={{ color: "#7c3a55" }}>産休・育休後のキャリアの記事</a>で詳しく解説しています。
          </p>
        </div>
      </section>

      {/* sec3 両立しやすい職種比較 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育児と両立しやすい職種・働き方の比較</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              同じ「エンジニア」でも、職種によって両立のしやすさは大きく変わります。鍵になるのは、(1)リモートワークのしやすさ、(2)勤務時間の予測可能性（突発対応・夜間対応の少なさ）、(3)成果の可視化されやすさ（時短でも評価されるか）の3点です。下表は一般的な傾向の比較で、実際は企業・チームによって差があります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>職種</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>リモート適性</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>時間の読みやすさ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>両立の観点でのポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Web系開発（バックエンド／フロントエンド）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>◎</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>○</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>フルリモート求人が多く、コード・成果物で評価されるため時短と相性が良い。リリース前は繁忙になりやすい点に注意</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>社内SE・情報システム</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>○</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>◎</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>納期プレッシャーが比較的小さく残業が少ない傾向。社内対応のため出社頻度は企業による</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>QA・テストエンジニア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>○</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>◎</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>テスト計画に沿って進めやすく、スケジュールが立てやすい。未経験からの入口にもなりやすい</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>インフラ・クラウド（SRE含む）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>○</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>△</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>需要・年収は高いが、障害対応や夜間・休日のオンコール当番の有無を必ず確認</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>SES・客先常駐</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>△（案件次第）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>△</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>働き方が客先のルールに左右される。時短・リモートの可否が案件ごとに変わる点がリスク</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              職種に加えて「働き方の制度」も比較しましょう。両立のしやすさを大きく左右するのは、<strong>フルリモート可否</strong>、<strong>フレックスタイム（特にコアタイムなし）</strong>、<strong>中抜け（送迎時間の離席）の許容</strong>の3つです。フルリモート企業の探し方は<a href="/articles/fullremote-companies/" className="underline" style={{ color: "#7c3a55" }}>フルリモート企業の記事</a>にまとめています。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 5つの企業条件 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職で確認すべき5つの企業条件</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              制度が「ある」ことと「使える」ことは別問題です。転職・復職先を選ぶときは、次の5条件を求人票＋エージェント経由の内部情報で確認しましょう。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 時短勤務制度の適用期間（法定超えか）</h3>
              <p className="text-sm text-text-light">
                法律上の義務は3歳未満（原則6時間）で、2025年10月以降は3歳〜就学前にも柔軟な働き方の措置が義務化されました。一方、企業によっては「小学校3年生まで」「小学校卒業まで」など法定を超える期間を設けています。制度の有無だけでなく<strong>「何歳まで適用されるか」</strong>を必ず確認しましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. フレックス・リモートワークの実態</h3>
              <p className="text-sm text-text-light">
                情報通信業のテレワーク導入率は94.3%（出典: 総務省「令和6年通信利用動向調査」、2026年6月参照）ですが、「導入している」ことと「育児中の社員が日常的に使えている」ことは別です。実際のリモート率、フレックスのコアタイム、送迎時間の中抜け可否、チーム内での利用状況を確認しましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 産休育休の取得実績と復帰率</h3>
              <p className="text-sm text-text-light">
                女性の育休取得率は全国平均86.6%（出典: 厚生労働省「令和6年度雇用均等基本調査」、2026年6月参照）まで来ていますが、重要なのは<strong>復帰後に元のポジション・評価で働き続けられているか</strong>です。取得実績の人数、復帰率、復帰後の昇進事例の有無を確認しましょう。従業員300人超の企業は男性育休取得率の公表が義務化されており、公開情報からも企業姿勢を読み取れます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 子どもの急病時の対応（看護等休暇・在宅切り替え）</h3>
              <p className="text-sm text-text-light">
                子どもの急な発熱は避けられません。法定の「子の看護等休暇」は2025年4月から小学3年生修了まで・学級閉鎖や入卒園式も対象に拡大されましたが、<strong>有給扱いか無給か</strong>は企業によって異なります。当日の在宅勤務への切り替えが柔軟にできるかと合わせて、面接前にエージェント経由で確認しておきましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>5. 育児中社員・女性管理職の在籍状況</h3>
              <p className="text-sm text-text-light">
                育児中のエンジニアが実際にチームにいるか、女性管理職がいるかは、制度が機能しているかを測る実態指標です。出産・育児を経て管理職になった事例がある企業は、時短中の評価制度やキャリアパスが整っている傾向があります。長期的なキャリアを考えるうえで必ずチェックしましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 1日のモデルケース */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ママエンジニアの1日（時短×在宅のモデルケース）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「時短6時間×在宅勤務」で働く場合の1日の流れを示します。なお、以下は法定の時短勤務（原則6時間）と一般的な保育園の開所時間をもとに作成した<strong>一般化したモデルケースであり、特定個人の体験談ではありません</strong>。実際のスケジュールは家庭環境・企業の制度によって変わります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left w-28" style={{ borderColor: "#d9c7b8" }}>時間</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>行動</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>6:00〜8:30</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>起床・朝食・身支度。保育園へ送り（在宅勤務のため送り後すぐ業務に入れる）</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>9:00〜12:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>始業。朝会（デイリースタンドアップ）→ 集中して開発タスク。会議は午前〜昼に寄せてもらう調整が効果的</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>12:00〜13:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>昼休憩（在宅のため家事を一部済ませることも可能）</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>13:00〜16:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>午後の業務。コードレビュー・実装の続き。終業前に進捗をテキストで共有し、チームへの引き継ぎを明確に</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>16:00〜16:30</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>終業（6時間勤務）。保育園へお迎え</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>17:00〜21:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>夕食・お風呂・寝かしつけ</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>21:00〜</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自由時間。余力があれば技術キャッチアップや学習に充てる人も（無理は禁物）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              ポイントは、<strong>在宅勤務によって通勤時間（往復1〜2時間）がそのまま育児・家事・自分の時間に変わる</strong>ことです。テレワーク導入率94.3%のIT業界は、この時間構造を作りやすい点で他業界より有利です。保育園の送迎と仕事の両立の工夫は<a href="/articles/work-childcare-day/" className="underline" style={{ color: "#7c3a55" }}>仕事と保育園送迎の1日の記事</a>でさらに詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 ブランク復帰 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ブランクからの復帰方法</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              育休や離職でブランクがあっても、エンジニアの復帰は十分可能です。IT業界は人材不足が続いており、実務経験者はブランクがあっても歓迎される傾向にあります。重要なのは「ブランクをゼロに見せる」ことではなく、<strong>復帰までの準備を具体的に示す</strong>ことです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 技術の変化を「差分」で把握する</h3>
              <p className="text-text-light text-sm leading-relaxed">離れていた期間に自分の領域で何が変わったか（フレームワークのバージョン、AIコーディング支援ツールの普及など）を整理。ゼロから学び直すのではなく差分のキャッチアップに絞ると効率的です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 小さなアウトプットを残す</h3>
              <p className="text-text-light text-sm leading-relaxed">個人開発・OSSへの小さなコントリビュート・技術記事など、ブランク中も手を動かしていた証拠を1つ用意。面接での「ブランクの懸念」を具体物で打ち消せます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 復帰直後の働き方を現実的に設計する</h3>
              <p className="text-text-light text-sm leading-relaxed">いきなりフルタイム＋通勤に戻すと負荷が大きいため、時短×在宅から始めて段階的に戻す設計が現実的。2025年改正で3歳以降も柔軟な働き方の措置を選べるようになり、設計の自由度は上がっています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 復帰前提のエージェントに相談する</h3>
              <p className="text-text-light text-sm leading-relaxed">育児中・ブランクありの転職支援に慣れたエージェントなら、時短可・リモート可の求人に絞った提案や、ブランクの伝え方の添削まで受けられます。1人で抱え込まないことが近道です。</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6">
            復職の具体的なステップは<a href="/articles/return-to-work/" className="underline" style={{ color: "#7c3a55" }}>復職・再就職ガイド</a>で、育休復帰後のキャリアの組み立て方は<a href="/articles/after-maternity/" className="underline" style={{ color: "#7c3a55" }}>産休・育休後のキャリアの記事</a>で詳しく解説しています。
          </p>
        </div>
      </section>

      {/* sec7 スキルアップ */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育児中のスキルアップ術</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              育児中はまとまった学習時間が取れないのが普通です。前提を「細切れ時間しかない」に置き換えて、学習方法をそれに合わせて設計しましょう。
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>15〜30分単位で完結する教材を選ぶ</strong> — 動画講座や対話型学習サービスなど、中断・再開しやすい形式が育児中向き。1時間×週2回より、20分×毎日のほうが継続しやすい傾向があります。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>「読む学習」と「書く学習」を分ける</strong> — 子どものそばでは技術記事・ドキュメントのインプット、1人になれる時間にコーディングと使い分けると、細切れ時間が無駄になりません。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>業務に直結するテーマに絞る</strong> — 復帰・転職で評価されるのは網羅性より実務との接続。今のチームで使う技術＋AIコーディング支援ツールの活用など、投資対効果の高いテーマを優先しましょう。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>学習をやめる勇気も持つ</strong> — 睡眠を削る学習は長続きしません。子どもの生活リズムが安定するまでは「維持」に徹し、安定後に「拡張」へ切り替えるのが現実的です。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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

      {/* sec9 FAQ */}
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

      {/* sec10 出典 */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>・出典: 厚生労働省「令和6年度雇用均等基本調査」（2026年6月参照）— 女性の育児休業取得率86.6%、男性40.5%ほか</li>
            <li>・出典: 国立社会保障・人口問題研究所「第16回出生動向基本調査（結婚と出産に関する全国調査）」（2026年6月参照）— 第1子出産前後の妻の就業継続率69.5%、就業継続者の育休利用79.2%</li>
            <li>・出典: 総務省「令和6年通信利用動向調査」（2026年6月参照）— テレワーク導入率：企業全体47.3%、情報通信業94.3%</li>
            <li>・出典: 厚生労働省「育児・介護休業法 改正ポイントのご案内（令和7年4月1日・10月1日施行）」（2026年6月参照）— 残業免除の対象拡大、子の看護等休暇の拡充、テレワーク努力義務、柔軟な働き方を実現するための措置等</li>
            <li>・出典: 厚生労働省「短時間勤務等の措置（育児休業制度特設サイト）」（2026年6月参照）— 3歳未満・原則6時間の短時間勤務制度</li>
            <li>・出典: 厚生労働省「育児時短就業給付金」リーフレット（2026年6月参照）— 2歳未満の子を養育する時短就業者へ賃金の原則10%を支給</li>
          </ul>
          <p className="text-xs text-text-light mt-4">
            ※ 本記事の統計値は上記の公的統計に基づきます。法制度の適用条件の詳細は厚生労働省の最新情報をご確認ください。職種比較・モデルケースは一般的な傾向を整理したもので、個別の企業・家庭環境により異なります。
          </p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/short-time/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>時短勤務エンジニアガイド</h3>
              <p className="text-sm text-text-light">時短の制度・収入・キャリアへの影響</p>
            </a>
            <a href="/articles/work-childcare-day/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>仕事と保育園送迎の1日</h3>
              <p className="text-sm text-text-light">送迎と仕事を両立する時間設計</p>
            </a>
            <a href="/articles/after-maternity/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>産休・育休後のキャリア</h3>
              <p className="text-sm text-text-light">復帰後のキャリアの組み立て方</p>
            </a>
            <a href="/articles/maternity-leave-rate/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>産休・育休取得率データ</h3>
              <p className="text-sm text-text-light">統計から見る取得率・復帰の実態</p>
            </a>
            <a href="/articles/fullremote-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>フルリモート企業ガイド</h3>
              <p className="text-sm text-text-light">在宅で働ける企業の探し方</p>
            </a>
            <a href="/articles/return-to-work/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>復職・再就職ガイド</h3>
              <p className="text-sm text-text-light">ブランクからの復帰ステップ</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
