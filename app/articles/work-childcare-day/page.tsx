import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "育児と両立する女性エンジニアの1日｜リアルなタイムスケジュール（リモート・出社・時短）",
  description:
    "育児と両立する女性エンジニアのリアルな1日を、平日リモート例・出社例のタイムスケジュール表で具体的に解説。子の看護休暇や時短勤務・在宅勤務などの制度（2025年改正対応）、家事分担・時短家電・病児保育の工夫、両立のコツと本音、メンタル維持まで紹介します。",
  alternates: { canonical: "/articles/work-childcare-day/" },
  openGraph: {
    title: "育児と両立する女性エンジニアの1日｜リアルなタイムスケジュール（リモート・出社・時短）",
    description:
      "育児中の女性エンジニアの1日を、リモート例・出社例のタイムスケジュール表で具体的に解説。使える制度・両立の工夫・病児対応・本音・メンタル維持まで。",
    url: "https://women-engineer.com/articles/work-childcare-day/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "育児と両立する女性エンジニアの1日｜リアルなタイムスケジュール",
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
    "育児と両立する女性エンジニアのリアルな1日を、リモート例・出社例のタイムスケジュールで解説。使える制度・両立の工夫・病児対応・本音・メンタル維持まで。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/work-childcare-day/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "育児中の女性エンジニアは1日に何時間くらい働いていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働き方によって異なります。短時間勤務（時短）制度を使う場合は1日6時間（例：10時〜16時）が一般的で、所定の8時間からマイナス2時間が目安です。フルタイム＋フレックス＋フルリモートを組み合わせる人も多く、その場合は通勤時間がない分、早朝に1時間作業して延長保育を使わずお迎えに行く、寝かしつけ後に残りの作業をする、といった分割した働き方をしています。エンジニア職は成果が可視化されやすいため、時短でも評価されやすいのが特徴です。",
      },
    },
    {
      "@type": "Question",
      name: "子どもが急に熱を出したとき、エンジニアはどう対応していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "在宅勤務が可能な職場では、午前は看病して午後だけ在宅で稼働する、会議だけオンラインで参加する、夫婦で午前担当・午後担当に分ける、といった柔軟な対応が取りやすいのが強みです。制度面では「子の看護等休暇」（2025年改正で対象が小学校3年生修了まで拡大、感染症による学級閉鎖も取得理由に追加）を使えます。加えて、自治体の病児保育・病後児保育、ファミリーサポート、訪問型のベビーシッターを事前登録しておくと、いざというときに使えます。登録漏れや書類不備で当日使えないケースが多いため、元気なうちの登録が重要です。",
      },
    },
    {
      "@type": "Question",
      name: "リモートワークなら育児と両立しやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "両立のしやすさは大きく上がります。通勤時間（往復で1〜2時間）がそのまま家事・育児・自分の時間に変わり、保育園の送迎の負担も減ります。子どもの急な体調不良にも、自宅で看ながら稼働するなどの対応が取りやすくなります。一方で、仕事と家庭の境界が曖昧になりやすい、就業時間外も対応してしまいがち、という注意点もあります。始業・終業を明確にし、作業スペースを分けるなどの工夫が、リモートで長く両立を続けるコツです。",
      },
    },
    {
      "@type": "Question",
      name: "育児と両立しながら働ける制度にはどんなものがありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "主に「短時間勤務制度（1日原則6時間）」「子の看護等休暇」「所定外労働（残業）の免除」「フレックスタイム」「テレワーク」があります。2025年4月・10月施行の育児・介護休業法改正により、3歳未満の子を育てる人へのテレワークが事業主の努力義務化され、3歳以上小学校就学前の子については始業時刻の変更・テレワーク・短時間勤務など2つ以上の柔軟な働き方の措置が企業に義務づけられました。残業免除の対象も「3歳未満」から「小学校就学前」まで拡大しています。利用できる制度は会社によって差があるため、入社前に育休復帰率や時短・在宅の運用実態を確認するのが大切です。",
      },
    },
    {
      "@type": "Question",
      name: "育児とエンジニアの仕事を両立できる職場を見つけるには？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "求人票だけでは「制度はあるが実際は使われていない」職場かどうかを見抜きにくいため、女性のキャリアに詳しいエージェントを活用するのが確実です。具体的には、育休からの復帰率、時短・在宅勤務の実利用者の有無、女性管理職比率、コアタイムの有無などを質問しましょう。IT特化型エージェント（レバテックキャリアなど）で技術を正当に評価してもらいつつ、女性特化型（type女性の転職エージェント）で働き方の条件を絞り込む、2〜3社の併用がおすすめです。エンジニア職はリモート・成果評価と相性が良く、両立できる求人が比較的見つけやすい職種です。",
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
              { label: "育児と両立する女性エンジニアの1日" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              キャリアガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              育児と両立する女性エンジニアの1日
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                リアルなタイムスケジュールで見る、両立の工夫と本音
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 育児とエンジニアの両立のリアル</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 1日のタイムスケジュール例（リモート／出社）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 両立を支える働き方・制度</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 両立の工夫・時短術</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 病児・急な休みへの備え</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 両立のコツと本音</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 体験談</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 両立のリアル */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育児とエンジニアの両立のリアル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「育児と仕事、本当に両立できるの？」――産休・育休を経て復帰する女性エンジニアの多くが、最初に抱える不安です。結論から言えば、エンジニア職は<strong>両立しやすい職種のひとつ</strong>。リモートワークやフレックスを導入する企業が多く、コードや担当機能といった成果が客観的に残るため、勤務時間の長さではなく成果で評価されやすいからです。時短勤務でも実力が認められやすいのは、他職種にはない大きな強みです。
            </p>
            <p>
              とはいえ、現実は楽ではありません。ワーママにとって最大の課題は<strong>「時間の使い方」</strong>。朝の準備、保育園の送迎、お迎え後の家事・寝かしつけが固定で時間を奪うなか、限られた稼働時間で成果を出す必要があります。子どもの急な発熱で予定が崩れることも日常茶飯事です。
            </p>
            <p>
              この記事では、育児中の女性エンジニアの<strong>リアルな1日</strong>を「リモート例」「出社例」のタイムスケジュールで具体的に紹介し、両立を支える制度（2025年改正対応）、時短の工夫、病児対応、そして続けるためのメンタルの保ち方まで、本音ベースで解説します。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>エンジニアが育児と両立しやすい3つの理由</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>リモート求人が豊富</strong>：通勤の往復1〜2時間がそのまま育児・家事の時間になる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>成果が可視化される</strong>：時間ではなくアウトプットで評価されるため時短と相性が良い</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>スキルが資産になる</strong>：設計力やコードは流行に左右されにくく、ブランク後も復帰しやすい</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 タイムスケジュール */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">1日のタイムスケジュール例（リモート／出社）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              ここでは、保育園に通う子ども（4歳）を育てる女性エンジニアの<strong>平日の1日</strong>を、「フルリモート＋フレックス」と「出社＋時短勤務」の2パターンで紹介します。どちらも実際によくある時間配分です。働き方によって、朝の余裕やお迎え時間が大きく変わるのがわかります。
            </p>
          </div>

          {/* リモート例 */}
          <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>パターンA：フルリモート＋フレックス（実働8時間を分割）</h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>時間</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>やること</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>6:30</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>起床・朝食準備・身支度</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>通勤がない分、起床に余裕がある</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>7:30</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>子どもと朝食・保育園の送り（夫と分担）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>送り＝夫、迎え＝自分で固定化</td></tr>
                <tr><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>8:30</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>始業（早めに開始）。メール確認・実装</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>朝の集中時間にコーディングを集約</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>10:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>朝会（デイリースクラム）・レビュー</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>会議はオンラインで完結</td></tr>
                <tr><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>12:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>昼休憩。昼食＋夕食の下ごしらえ・洗濯</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>家事を昼に前倒しして夜を軽くする</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>13:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>実装・設計・ドキュメント作成</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>集中作業ブロックを確保</td></tr>
                <tr><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>16:30</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>一旦中断、保育園のお迎え</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>延長保育を使わずに済む</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>17:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>子どもと過ごす・夕食・お風呂</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>仕事から完全に離れる時間</td></tr>
                <tr><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>20:30</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>寝かしつけ</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>—</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>21:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>残りの作業（30〜60分）／キャッチアップ</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>中断した分をここで補完（フレックス）</td></tr>
                <tr><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>22:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自分の時間・就寝準備</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>終業を明確にしてオン・オフを切る</td></tr>
              </tbody>
            </table>
          </div>

          {/* 出社例 */}
          <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>パターンB：出社＋時短勤務（1日6時間／10:00〜16:00）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#f1e6da" }}>
                  <th className="border px-4 py-3 text-left whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>時間</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>やること</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>6:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>起床・朝食／お弁当準備・身支度</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>通勤がある分、早起きが必須</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>8:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>子どもの支度・保育園へ送り</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>—</td></tr>
                <tr><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>9:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>通勤（電車内で技術記事・Slack確認）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>移動時間をインプットに活用</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>10:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>始業。タスク整理・実装</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>時短のため最初に優先順位づけ</td></tr>
                <tr><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>12:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>昼休憩（短め）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>—</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>12:45</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>会議・レビュー・実装</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>会議は午前〜昼過ぎに寄せてもらう</td></tr>
                <tr><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>16:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>終業（時短）・退勤</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>残タスクは翌朝へ。残業はしない設計</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>17:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>保育園お迎え・買い物</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>延長保育を使う日もある</td></tr>
                <tr><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>18:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>夕食・お風呂・遊び</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>時短家電に家事を任せる</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>20:30</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>寝かしつけ</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>—</td></tr>
                <tr><td className="border px-4 py-3 font-bold whitespace-nowrap" style={{ borderColor: "#d9c7b8" }}>21:00</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>翌日準備・自分の時間・就寝</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>—</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ※同じ「実働」でも、フルリモートは通勤がなく朝晩に余裕が生まれ、時短勤務は勤務時間そのものを短くする働き方です。どちらが合うかは、子どもの年齢・夫婦の分担・職場の制度によって変わります。<strong>フレックス＋リモートを併用できると、急な中断にも柔軟に対応しやすく</strong>なります。
          </p>
        </div>
      </section>

      {/* sec3 制度 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">両立を支える働き方・制度</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              育児との両立を支える法律上の制度は、<strong>2025年4月・10月施行の育児・介護休業法の改正</strong>で大きく拡充されました。エンジニアとして両立を続けるうえで、これらの制度を正しく知っておくことは欠かせません。主なものを整理します。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>制度</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>内容</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>2025年改正のポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>短時間勤務（時短）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1日原則6時間に勤務時間を短縮できる（3歳未満が対象）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>3歳以降も柔軟な働き方の選択肢として継続を後押し</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>子の看護等休暇</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>子の看病・予防接種・健診などで取得できる休暇</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>対象が<strong>小学校3年生修了まで</strong>に拡大。感染症による学級閉鎖・入園/卒園式も理由に追加</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>所定外労働（残業）の免除</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>申請により残業を免除してもらえる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>対象が「3歳未満」から<strong>「小学校就学前」</strong>まで拡大</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>テレワーク（在宅勤務）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自宅などから勤務できる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>3歳未満の子を育てる人への導入が<strong>事業主の努力義務</strong>に</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>柔軟な働き方の措置</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>始業時刻変更・テレワーク・時短・養育両立支援休暇・保育費用補助 等</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>3歳〜就学前の子について<strong>2つ以上の措置が企業に義務化</strong></td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フレックスタイム</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>始業・終業を自分で調整できる（法定制度ではなく企業導入）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>コアタイムなしなら送迎・中断に柔軟に対応しやすい</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#fffbeb" }}>
            <h3 className="text-base font-bold mb-2" style={{ color: "#b45309" }}>注意：制度が「あること」と「使えること」は別</h3>
            <p className="text-sm text-text-light leading-relaxed">
              法改正で制度は整いましたが、実際に時短や在宅が運用されているかは会社によって差が大きいのが実情です。求人票に「時短可」「リモート可」と書いてあっても、<strong>実際の利用者がいるか・育休からの復帰率はどうか</strong>を入社前に確認しましょう。求人票に出ない実態は、女性のキャリアに詳しいエージェント経由で確認するのが確実です。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 工夫・時短術 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">両立の工夫・時短術</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              限られた時間で両立を回すには、<strong>「時間を生み出す仕組み」</strong>を作ることが鍵です。気合や根性ではなく、家事の自動化・分担・タスクの前倒しで、構造的に余白を作っている人が長続きしています。実際によく使われている工夫を紹介します。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 時短家電に家事を任せる</h3>
              <p className="text-text-light text-sm leading-relaxed">ドラム式洗濯乾燥機（干す・取り込む工程をゼロに）、食洗機、ロボット掃除機、自動調理鍋の「新・三種の神器」。家事の絶対量を減らし、その分を仕事・子ども・睡眠に回します。投資対効果がもっとも高い工夫です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 家事・育児を夫婦で「固定分担」する</h3>
              <p className="text-text-light text-sm leading-relaxed">送り＝夫・迎え＝自分、朝担当・夜担当のように役割を固定し、タスクの属人化と毎回の調整コストを減らします。「気づいた方がやる」だと負担が偏りがち。家族会議でルール化するのが両立の土台です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. すきま時間をインプット・家事に充てる</h3>
              <p className="text-text-light text-sm leading-relaxed">通勤中の技術記事チェック、昼休みに夕食の下ごしらえ、寝かしつけ後の30分でキャッチアップ。まとまった時間が取れない前提で、細切れ時間を設計に組み込みます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 仕事は「集中作業ブロック」を死守する</h3>
              <p className="text-text-light text-sm leading-relaxed">時短・中断ありきだからこそ、午前など割り込みの少ない時間に実装を集約。会議はなるべく特定の時間帯に寄せてもらい、コーディングのまとまった時間を確保します。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>5. 食事は「作らない選択肢」も持つ</h3>
              <p className="text-text-light text-sm leading-relaxed">ミールキット、宅配冷凍弁当、ネットスーパー、作り置き。毎日手作りにこだわらず、疲れた日は外部サービスに頼ることを「サボり」ではなく戦略として組み込みます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>6. 学童・延長保育を上手に使う</h3>
              <p className="text-text-light text-sm leading-relaxed">小学校入学後は学童保育、保育園では延長保育を確保しておくと、急な打ち合わせやリリース対応にも対応できます。使える受け皿を複数持っておくことが安心につながります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 病児・急な休み */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">病児・急な休みへの備え</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              両立で最大の壁になるのが<strong>子どもの急な発熱</strong>です。保育園は発熱すると預かってもらえず、登園してもお迎えコールが来ることも。「今日は大事な会議があるのに」と心が折れそうになる日もあります。だからこそ、<strong>元気なうちに複数の受け皿を用意しておく</strong>ことが何より重要です。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              ["STEP1", "在宅勤務・中抜けで対応できる体制を作る", "エンジニアの強みはここ。午前は看病して午後だけ在宅で稼働、会議だけオンライン参加、夫婦で午前・午後を分担、といった柔軟な対応が取りやすい。事前に上長と「子の体調不良時はリモート対応」と握っておくと動きやすい。"],
              ["STEP2", "子の看護等休暇を把握しておく", "2025年改正で対象が小学校3年生修了まで拡大。感染症による学級閉鎖も取得理由に。年に何日使えるか、時間単位で取れるかを就業規則で確認しておく。"],
              ["STEP3", "病児保育・病後児保育に事前登録する", "施設型と訪問型がある。訪問型は当日依頼が可能な場合も。ただし『登録していなかった』『書類が間に合わなかった』で当日使えないケースが多い。元気なうちに登録・かかりつけ医の確認まで済ませておく。"],
              ["STEP4", "ファミリーサポート・自治体支援を登録する", "ファミリーサポートセンターは多くの市区町村で病児・緊急対応に対応。自治体の緊急サポート事業も合わせて登録し、預け先の選択肢を増やしておく。"],
              ["STEP5", "夫婦・実家とルールを決めておく", "『発熱したらどちらが休むか』を毎回ゼロから相談すると消耗する。交代制にする、年間で等分する、頼れる実家があれば連携する、と事前にルール化しておく。"],
            ].map(([step, title, desc], i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
                <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>{step}</span>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* sec6 コツと本音 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">両立のコツと本音</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              制度や時短術を整えても、両立を長く続けるには<strong>「気持ちの持ち方」</strong>が大きく影響します。先輩エンジニアたちの本音から見えてくる、メンタルを守りながら続けるコツをまとめました。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>「100点を目指さない」と決める</h3>
              <p className="text-text-light text-sm leading-relaxed">仕事も家事も育児も完璧にやろうとすると必ず潰れます。「今日は60点で合格」「掃除は週末でいい」と意図的に基準を下げる。手を抜く場所を自分で決めることが、続けるための最大のコツです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>罪悪感を手放す</h3>
              <p className="text-text-light text-sm leading-relaxed">「お迎えが最後になってしまった」「総菜に頼ってしまった」と自分を責めがち。でも、働く姿を見せること自体が子どもにとって価値ある教育です。罪悪感は両立を一番すり減らす感情だと知っておく。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>「頼る・任せる」を技術として磨く</h3>
              <p className="text-text-light text-sm leading-relaxed">夫、家電、外部サービス、職場のチーム。一人で抱え込まず任せられる人は強い。仕事でもチームに作業を割り振るのと同じで、家庭でも『誰に何を任せるか』の設計力が効きます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>自分だけの「オフ時間」を確保する</h3>
              <p className="text-text-light text-sm leading-relaxed">寝かしつけ後の15分でも、自分のためだけの時間を死守する。コーヒーを飲む、好きな技術記事を読むなど、小さなご褒美がメンタルを支えます。燃え尽きを防ぐのは『余白』です。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-base font-bold mb-3" style={{ color: "#7c3a55" }}>本音のひとこと</h3>
            <p className="text-sm text-text-light leading-relaxed">
              「正直、毎日ギリギリ。でもエンジニアでよかったと思うのは、リモートと成果評価のおかげで<strong>『時間』ではなく『成果』で勝負できる</strong>こと。子どもが熱を出しても在宅でカバーできるし、時短でも担当機能をしっかり出せば評価される。完璧じゃなくていい、続けられる働き方を選べたことが一番の財産です。」
            </p>
          </div>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>「今の会社では両立が難しい」と感じたら、時短・在宅が実際に運用されている職場への転職も選択肢です。求人票に出ない働き方の実態を確認するには、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーが、スキルを正当に評価したうえでリモート・フレックス求人を提案してくれます。両立しやすい開発組織を技術面から見極められるのが強みです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングに定評があり、働き方の希望条件を整理して求人を絞り込みたい人に向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休からの復帰実績やリモート・時短など、女性のキャリア継続に配慮した求人を中心に紹介。育休復帰率や時短利用の実態など、求人票に出ない情報を確認したい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">「両立できる職場」は、エージェント選びで決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、働き方の条件に合った求人とアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec8 体験談 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">体験談</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代・フロントエンド／2歳児ママ・フルリモート＋フレックス）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">復帰前の不安</p><p className="text-sm font-bold">出社必須・残業前提の職場でフルタイム復帰できるか不安だった</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">フルリモート＋コアタイムなしのSaaS企業へ。延長保育なしで両立</p></div>
              </div>
              <p className="text-sm text-text-light leading-relaxed">「通勤がなくなって、朝も夕方も子どもとの時間が増えました。フレックスなので、お迎えで中断した分は寝かしつけ後に補完。会議はオンラインで完結するので、急な発熱の日も午後だけ稼働して乗り切れています。『時間』ではなく『出したコード』で評価される文化が、本当にありがたいです。」</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（30代・バックエンド／小1児ママ・出社＋時短勤務）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">課題</p><p className="text-sm font-bold">「小1の壁」で学童後のお迎え時間に追われていた</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>工夫</p><p className="text-sm font-bold">10〜16時の時短＋学童＋家事の固定分担で安定稼働</p></div>
              </div>
              <p className="text-sm text-text-light leading-relaxed">「時短で6時間勤務にし、会議は午前〜昼に寄せてもらって、実装は割り込みの少ない時間に集中。ドラム式洗濯乾燥機と食洗機で家事を半分以下に減らしました。子の看護休暇も時間単位で使えるので、通院だけサッと抜けられるのが助かります。完璧は目指さず『続けられること』を最優先にしています。」</p>
            </div>
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
            <a href="/articles/mama-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</h3><p className="text-sm text-text-light">育児と仕事を両立する女性エンジニアのリアル</p></a>
            <a href="/articles/short-time/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>時短勤務で働くエンジニア</h3><p className="text-sm text-text-light">制度の使い方と時短可の求人の探し方</p></a>
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リモートワーク求人ガイド</h3><p className="text-sm text-text-light">フルリモートで働ける職種と探し方</p></a>
            <a href="/articles/work-life-balance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ワークライフバランスの実現法</h3><p className="text-sm text-text-light">無理なく続けられる働き方の選び方</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">「両立できる働き方」を一緒に見つけましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。時短・リモートなど、あなたのライフステージに合った求人を提案してもらえます。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
