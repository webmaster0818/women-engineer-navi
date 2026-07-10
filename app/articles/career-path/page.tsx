import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアのキャリアパス完全マップ｜5つの方向性と年収・選び方【2026年】",
  description:
    "女性エンジニアのキャリアパスを実データで徹底解説。スペシャリスト・マネジメント・PM/PdM・社内SE・フリーランスの5類型を年収データ付きで比較（PM707万円・PdM約774万円=doda/PM Career、社内SE約510万〜580万円等）。課長相当職の女性割合12.3%という現状や、時短期・復帰期を織り込んだキャリア設計まで出典付きで紹介します。",
  alternates: { canonical: "/articles/career-path/" },
  openGraph: {
    title: "女性エンジニアのキャリアパス完全マップ｜5つの方向性と年収・選び方【2026年】",
    description:
      "スペシャリスト・マネジメント・PM/PdM・社内SE・フリーランスの5類型を年収データ付きで比較。ライフイベントを織り込んだキャリア設計まで公的統計と実データで解説。",
    url: "https://women-engineer.com/articles/career-path/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアのキャリアパス完全マップ｜5つの方向性と年収・選び方【2026年】",
  datePublished: "2026-04-27",
  dateModified: "2026-06-12",
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
    "スペシャリスト・マネジメント・PM/PdM・社内SE・フリーランスの5類型を年収データ付きで比較。ライフイベントを織り込んだキャリア設計まで公的統計と実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/career-path/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性エンジニアのキャリアパスにはどんな選択肢がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "大きく5つに整理できます。①技術を究めるスペシャリスト、②チームを率いるマネジメント（EM・管理職）、③プロジェクト/プロダクトを推進するPM・PdM、④事業会社のIT部門を担う社内SE・コーポレートIT、⑤独立して働くフリーランスです。年収の伸ばしやすさはPM・PdM／マネジメント、働き方の安定性は社内SE、裁量と時間の自由はフリーランスに分があり、どれか1つを早く確定する必要はありません。土台となる技術力はすべての路線で共通して効くため、20代〜30代前半は実務経験を厚くしながら、向き不向きを見極めるのが現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "スペシャリストとマネジメントはどちらが年収が上がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "平均値で見るとマネジメント側が高く出ます。doda「平均年収ランキング2025」ではエンジニア（IT/通信）全体の平均が469万円なのに対し、プロジェクトマネジャーは707万円でIT/通信系技術職の1位です。ただしスペシャリストもクラウド・AI・セキュリティなど需要の高い領域では600万〜800万円台の求人が珍しくなく、フリーランスのITコンサル・PM案件は月単価88万〜102万円（レバテックフリーランス）に達します。「マネジメントでないと年収が頭打ち」という時代ではないため、人と向き合うのが得意ならマネジメント、技術探求が好きならスペシャリストと、適性で選ぶのが長続きのコツです。",
      },
    },
    {
      "@type": "Question",
      name: "出産・育児があってもキャリアアップは続けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "続けられます。女性の育児休業取得率は86.6%（厚生労働省・令和6年度雇用均等基本調査）まで上がり、情報通信業のテレワーク導入率は94.3%（総務省・令和6年通信利用動向調査）と全業種トップクラスで、エンジニアはもともと両立させやすい職種です。実際、30代女性の離職理由は「出産・育児」（3〜4%）より「労働時間・休日等の労働条件」（13〜15%）の方が多く、キャリアを止める主因は出産ではなく両立できない環境です。時短期は「評価が積み上がる領域」に業務を寄せ、復帰後1〜2年で実績を再蓄積してから昇進・転職に動く設計にすれば、ライフイベントを挟んでもキャリアの傾きは維持できます。",
      },
    },
    {
      "@type": "Question",
      name: "フリーランスに転向するベストなタイミングはいつですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "目安は実務経験3年以上、できれば設計工程まで一人称で担当できるようになってからです。フリーランス市場はスキルがそのまま単価に直結し、レバテックフリーランスの公開案件ではSE案件の平均単価が月72万円（年商換算864万円）、PM案件88万円、ITコンサル案件102万円です。一方で経験の浅い層は案件獲得自体が難しく、会社員のような育成環境もありません。また収入が不安定になるため、産休・育休の給付（出産手当金・育児休業給付金）が会社員より手薄になる点は出産を考えている場合の重要な検討材料です。まず副業で1案件回してみてから判断するのが安全です。",
      },
    },
    {
      "@type": "Question",
      name: "キャリアパスは何歳までに決めるべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「何歳までに決めないと手遅れ」という期限はありませんが、30代前半までに方向性の仮決めをしておくと選択肢が最大化します。20代は技術の土台づくりに集中し、30代前半でリーダー補佐やPM補佐など小さく試して向き不向きを確認、30代後半以降は選んだ路線の「再現性のある実績」を深める、というのが標準的な時間軸です。実際、転職市場でも30〜34歳女性の転職入職率は13.2%と高く（厚生労働省・令和6年雇用動向調査）、30代は路線変更のコストが最も低い年代です。迷っている段階なら、エージェントへのキャリア相談で市場価値と選択肢を棚卸しするだけでも判断材料になります。",
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
              { label: "女性エンジニアのキャリアパス完全マップ" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              キャリア知識
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアのキャリアパス完全マップ
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                5つの方向性と年収・選び方を実データで解説【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>この記事の結論</h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>キャリアパスは「スペシャリスト／マネジメント／PM・PdM／社内SE／フリーランス」の5類型。</strong>年収の伸ばしやすさはPM・PdM（プロジェクトマネジャー707万円=doda 2025・IT技術職1位、PdM約774万円）、安定と両立は社内SE（約510万〜580万円）、自由度はフリーランス（SE案件平均単価 月72万円）に分があります。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>女性のマネジメント人材は構造的に不足。</strong>課長相当職に占める女性割合は12.3%・部長相当職は8.7%（厚生労働省・令和6年度雇用均等基本調査）。リーダー経験のある女性エンジニアは「採りたいのに採れない」希少人材で、管理職・PM路線は年収交渉の余地が大きい状況です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>ライフイベントは「キャリアの中断」ではなく設計変数。</strong>女性の育休取得率は86.6%、情報通信業のテレワーク導入率は94.3%。時短期は評価が積み上がる業務に寄せ、復帰後1〜2年で実績を再蓄積する設計にすれば、出産を挟んでも路線は維持できます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>決めるのは「30代前半までに仮決め」で十分。</strong>20代は土台づくり、30代前半で小さく試し、30代後半から深める。どの路線でも土台になる技術力と「再現性のある実績」が共通通貨です。</span>
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 女性エンジニアのキャリアを取り巻く現状【実データ】</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. キャリアパス5類型の比較表（年収・働き方・向き不向き）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 5つのキャリアパス徹底解説</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. ライフイベントを織り込んだキャリア設計（時短期・復帰期）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 年代別ロードマップ：いつ・何を決めるか</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 自分に合うキャリアパスの選び方3ステップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. キャリアチェンジのモデルケース</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 現状データ */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアのキャリアを取り巻く現状【実データ】</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              キャリアパスを考える前提として、まず市場の現在地を数字で押さえましょう。dodaの転職求人倍率（2026年4月）は全体で2.38倍に対し、<strong>エンジニア（IT・通信）は10倍超</strong>。1人の求職者に10件以上の求人がある状態が続いており、エンジニアは「選べる側」にいる職種です。
            </p>
            <p>
              一方で、日本のITエンジニアに占める女性比率は<strong>18.8%</strong>（ヒューマンリソシア調査、OECD平均20.6%）にとどまります。さらに管理職に目を向けると、全産業で課長相当職に占める女性は<strong>12.3%</strong>、部長相当職は<strong>8.7%</strong>（厚生労働省・令和6年度雇用均等基本調査）。つまり「経験のある女性エンジニア」も「マネジメントできる女性人材」も構造的に不足しており、ダイバーシティ目標を掲げる企業との間で需給ギャップが生まれています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>10倍超</p>
              <p className="text-sm font-bold mt-2">エンジニア（IT・通信）求人倍率</p>
              <p className="text-xs text-text-light mt-1">全職種平均2.38倍に対し圧倒的な売り手市場</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>18.8%</p>
              <p className="text-sm font-bold mt-2">日本のITエンジニア女性比率</p>
              <p className="text-xs text-text-light mt-1">OECD平均20.6%を下回り、企業は採用を強化中</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>12.3%</p>
              <p className="text-sm font-bold mt-2">課長相当職の女性割合</p>
              <p className="text-xs text-text-light mt-1">女性マネジメント人材は構造的に不足</p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: doda「転職求人倍率レポート（2026年4月）」、ヒューマンリソシア「IT分野のジェンダーギャップに関するグローバル調査」、厚生労働省「令和6年度雇用均等基本調査」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              この需給ギャップは、キャリアパスを選ぶ女性エンジニアにとって追い風です。どの路線を選んでも「実務経験のある女性エンジニア」というだけで希少性があり、特にマネジメント・PM路線では争奪戦に近い状況が起きています。だからこそ、<strong>流されて決めるのではなく、自分の適性とライフプランから逆算して路線を選ぶ</strong>ことが、5年後・10年後の差になります。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 比較表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">キャリアパス5類型の比較表（年収・働き方・向き不向き）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              女性エンジニアのキャリアパスは、次の5類型に整理すると選びやすくなります。年収目安は公開データに基づく参考値で、企業規模・地域・スキルにより変動します。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>キャリアパス</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年収目安（出典）</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>働き方の特徴</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>向いている人</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>① スペシャリスト<br /><span className="font-normal text-xs">技術を究める</span></td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>エンジニア平均469万円（doda 2025）。クラウド・AI・セキュリティ等の高需要領域は600万〜800万円台の求人も（求人水準の目安）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>技術力＝市場価値。リモート・時短と最も相性が良い</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>技術探求が好き。深い集中時間を確保したい人</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>② マネジメント<br /><span className="font-normal text-xs">EM・管理職</span></td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>600万〜800万円台が目安（EM・開発マネージャー求人の水準）。課長相当職の女性は12.3%で希少（厚労省）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>会議・調整が増えるが裁量も大。登用目標を掲げる企業で需要大</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>人の成長に喜びを感じる。チームで成果を出したい人</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>③ PM・PdM<br /><span className="font-normal text-xs">プロジェクト/プロダクト推進</span></td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>プロジェクトマネジャー707万円=IT技術職1位（doda 2025）、PdM約774万円（PM Career調査）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>関係者調整が中心。年収レンジが最も高い路線のひとつ</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>段取り・調整が得意。ビジネス側にも興味がある人</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>④ 社内SE・コーポレートIT<br /><span className="font-normal text-xs">事業会社のIT部門</span></td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約510万〜580万円（求人ボックス約510万円、Geekly独自データ約580万円）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>納期プレッシャーが比較的小さく残業少なめ。両立人気が高い</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>安定と両立を重視。業務改善・調整が得意な人</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>⑤ フリーランス<br /><span className="font-normal text-xs">独立・業務委託</span></td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>SE案件の平均単価 月72万円（年商換算864万円）、PM案件88万円、ITコンサル案件102万円（レバテックフリーランス公開案件）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>時間・場所・案件を自分で選べる。収入と保障は不安定</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>実務3年以上で自走できる。自由度を最優先したい人</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: doda（パーソルキャリア）「平均年収ランキング2025」、PM Career「日本のプロダクトマネージャー年収2025最新統計」、求人ボックス 給料ナビ、Geekly、レバテックフリーランス「単価相場」、厚生労働省「令和6年度雇用均等基本調査」（いずれも2026年6月参照）。フリーランスの年商は単価×12か月の換算値で、税・保険・経費控除前の金額です。
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              重要なのは、<strong>5類型は排他的な一方通行ではない</strong>ということです。スペシャリストからPMへ、社内SEからマネジメントへ、会社員からフリーランスを経て再び会社員へ——技術の土台さえあれば行き来できます。職種別の詳しい年収比較は<a href="/articles/salary-by-age/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>年代別年収ガイド</a>もあわせてご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 5類型の詳細 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">5つのキャリアパス徹底解説</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>① スペシャリスト：技術を深めて市場価値で勝負する</h3>
              <p className="text-sm text-text-light leading-relaxed">
                特定の技術領域を深掘りし、テックリード・アーキテクトとして評価される路線です。2026年時点で単価を押し上げているのは<strong>クラウド（AWS/GCP）、AI・データ基盤、セキュリティ</strong>の3領域。スキルがそのまま市場価値になるため、時短勤務・リモートワークとの相性が5類型で最も良く、ライフイベントを挟んでも価値が落ちにくいのが強みです。一方、技術の陳腐化リスクと学習の継続が前提になります。現職で高需要領域のタスクを拾って実績化し、AWS認定や情報処理安全確保支援士などの資格で客観性を持たせるのが定石です。長く技術で食べていく戦略は<a href="/articles/long-career-tips/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>長く活躍するためのキャリア戦略</a>で詳しく解説しています。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>② マネジメント：希少性が最も高く、企業が最も探している路線</h3>
              <p className="text-sm text-text-light leading-relaxed">
                エンジニアリングマネージャー（EM）・開発課長としてチームの成果と育成に責任を持つ路線です。課長相当職の女性割合は<strong>12.3%</strong>（厚労省・令和6年度雇用均等基本調査）にとどまり、女性管理職比率の目標を公表する企業が増えた今、リーダー経験のある女性エンジニアは需給が最も逼迫している人材です。「マネジメント=長時間労働」のイメージは過去のものになりつつあり、リモート・フレックスで運用するEMポジションも一般化しています。後輩2名のOJT、レビュー体制の整備といった小さな実績も立派な一歩です。詳しくは<a href="/articles/women-manager/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性エンジニアの管理職キャリアガイド</a>へ。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>③ PM・PdM：年収レンジが最も高い「推進役」</h3>
              <p className="text-sm text-text-light leading-relaxed">
                プロジェクトマネジャー（PM）はdoda「平均年収ランキング2025」で<strong>707万円とIT/通信系技術職の1位</strong>。プロダクトマネージャー（PdM）はさらに高く<strong>約774万円</strong>（PM Career調査）で、エンジニア平均469万円から200万〜300万円の上積みが狙える路線です。コードを書く時間は減りますが、要件定義・優先順位付け・関係者調整といった「翻訳能力」が価値になるため、エンジニア出身者は強い武器を持ってスタートできます。PMO・PM補佐から小さく始められるのも特徴です。仕事内容・必要スキル・転職ルートは<a href="/articles/pm-director/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>PM・Webディレクターへのキャリアチェンジガイド</a>で解説しています。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>④ 社内SE・コーポレートIT：両立と安定を最優先するなら</h3>
              <p className="text-sm text-text-light leading-relaxed">
                事業会社のIT部門で、システム企画・ベンダー管理・業務改善・DX推進を担う路線です。平均年収は<strong>約510万〜580万円</strong>（求人ボックス約510万円、Geekly独自データ約580万円）。受託開発のような納期プレッシャーが比較的小さく残業が少ない傾向があり、育児との両立を重視する女性エンジニアから一貫して人気の高い職種です。ヘルプデスク中心の求人とDX推進など上流を担う求人で年収もキャリアの広がりも大きく違うため、求人の業務範囲の見極めが重要です。詳しくは<a href="/articles/internal-se/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>社内SE転職ガイド</a>へ。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>⑤ フリーランス：自由度最大、ただし「実務3年」が分岐点</h3>
              <p className="text-sm text-text-light leading-relaxed">
                レバテックフリーランスの公開案件では、SE案件の平均単価は<strong>月72万円（年商換算864万円）</strong>、PM案件88万円、ITコンサル案件102万円。会社員平均を大きく上回る水準ですが、これは「即戦力としてすぐ価値を出せる人」の相場です。目安は実務経験3年以上・設計工程を一人称で担当できること。収入の波、営業・経理の自己管理、出産手当金や育児休業給付が会社員より手薄になる点はライフプランと合わせて検討が必要です。まず副業で1案件回して感触を確かめるのが安全な入り方です。独立準備・案件獲得のコツは<a href="/articles/freelance/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性フリーランスエンジニアガイド</a>で解説しています。
              </p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: doda「平均年収ランキング2025」、PM Career「日本のプロダクトマネージャー年収2025最新統計」、求人ボックス 給料ナビ、Geekly、レバテックフリーランス「単価相場」、厚生労働省「令和6年度雇用均等基本調査」（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec4 ライフイベント */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ライフイベントを織り込んだキャリア設計（時短期・復帰期）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              女性エンジニアのキャリア設計で最大の誤解は「出産=キャリアの中断」という思い込みです。データを見ると、30代女性が前職を辞めた理由のうち<strong>「出産・育児」は3〜4%にすぎず、「労働時間・休日等の労働条件」（13〜15%）の方がはるかに多い</strong>（厚生労働省・令和6年雇用動向調査）。キャリアを止めるのは出産そのものではなく、両立できない環境です。
            </p>
            <p>
              環境側の条件は揃いつつあります。女性の育児休業取得率は<strong>86.6%</strong>（男性も40.5%と過去最高）、情報通信業のテレワーク導入率は<strong>94.3%</strong>と全業種トップクラス。エンジニアは「ライフイベントとキャリアの両立難易度」が構造的に低い職種です。だからこそ、出産を「想定外の中断」ではなく「あらかじめ織り込む設計変数」として扱いましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>時短期の戦略：「評価が積み上がる業務」に寄せる</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・時間勝負の障害対応・突発対応より、<strong>設計・レビュー・自動化・ドキュメント整備</strong>など成果が資産として残る業務へ寄せる</li>
                <li>・スペシャリスト路線は時短と最も相性が良い。深い専門領域を1つ持つと時短でも代替されにくい</li>
                <li>・「時短だから補助業務」を受け入れない。成果の定量化（削減時間・改善件数）を続けて評価の土俵に乗り続ける</li>
                <li>・時短勤務者の評価制度・マネージャー登用事例がある会社かどうかで、この時期の難易度は大きく変わる</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>復帰期の戦略：1〜2年で実績を再蓄積→次の一手</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・復帰直後に焦って転職しない。まず<strong>1〜2年で「復帰後の実績」を作って</strong>から昇進・転職に動くと選択肢が広がる</li>
                <li>・ブランク中の技術キャッチアップは2〜3か月の集中で十分戻る。休業中に完全に切らないのがコツ</li>
                <li>・転職するなら入社1年未満は労使協定により育休対象外になり得る点に注意。第2子以降の計画から逆算する</li>
                <li>・復帰を機にPM・社内SEなど「調整力が活きる路線」へ転換する人も多い。育児で磨かれた段取り力は実務スキル</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「令和6年雇用動向調査」「令和6年度雇用均等基本調査」、総務省「令和6年通信利用動向調査」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              妊娠・育休・復帰それぞれの実務は<a href="/articles/mama-engineer/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</a>、出産前後の転職タイミングは<a href="/articles/age-30s/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>30代女性エンジニアの転職ガイド</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 年代別ロードマップ */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年代別ロードマップ：いつ・何を決めるか</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              キャリアパスは一度に決めるものではなく、年代ごとに「決める粒度」を上げていくものです。30〜34歳女性の転職入職率は13.2%と同年代男性（10.3%）より高く、30代転職者の約46%が賃金増を実現しているように（厚生労働省・令和6年雇用動向調査）、<strong>路線変更のコストが最も低いのは30代</strong>。逆算すると、次のような時間軸が標準形になります。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["20代", "土台づくり：技術力という共通通貨を貯める", "どの路線に進んでも効くのは技術力。設計〜実装〜運用を一通り経験し、得意領域の芽を1つ見つける。年収より経験の質で職場を選ぶ時期。"],
              ["30代前半", "仮決め：小さく試して向き不向きを確認する", "リーダー補佐・PM補佐・社内公募などで各路線を低リスクに試せる最後のゾーン。出産を考えているなら「両立できる会社」への移動もこの時期が動きやすい。"],
              ["30代後半", "深掘り：選んだ路線の「再現性のある実績」を作る", "ポテンシャル評価から実績評価へ完全に切り替わる。専門領域の深さ、チーム規模、定量成果など、次の環境でも再現できる根拠を蓄積する。"],
              ["40代以降", "換金と継承：実績を年収・裁量に換える", "マネジメント・スペシャリスト・フリーランスいずれも、蓄積した実績がそのまま交渉力になる。後進育成の実績は市場価値をさらに高める。"],
            ].map(([age, title, desc], i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
                <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>{age}</span>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-text-light text-sm mt-3">出典: 厚生労働省「令和6年雇用動向調査」（2026年6月参照）</p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              各年代の具体的な転職戦略は<a href="/articles/age-30s/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>30代の転職ガイド</a>を中心に、年収の現在地確認は<a href="/articles/salary-by-age/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>年代別年収ガイド</a>、50代まで見据えた長期戦略は<a href="/articles/long-career-tips/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>長く活躍するためのキャリア戦略</a>をご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 選び方3ステップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">自分に合うキャリアパスの選び方3ステップ</h2>
          <div className="space-y-4">
            {[
              ["STEP1", "「エネルギーが湧く瞬間」で適性を仮判定する", "技術的な難問を解いた時か、メンバーが成長した時か、リリースが事業数字に効いた時か。年収表より先に、自分がどの瞬間に手応えを感じるかを振り返ると、スペシャリスト/マネジメント/PM・PdMの向きが見えてくる。"],
              ["STEP2", "ライフプランの制約条件を先に置く", "出産・介護・転居の可能性と時期をざっくり置き、「その時期に無理がない路線か」を確認する。時短と相性が良いのはスペシャリスト・社内SE、収入の安定が必要な時期にフリーランス転向をぶつけない、など制約から逆算すると消去法でも絞れる。"],
              ["STEP3", "現職で小さく試す→市場価値を外部で確認する", "リーダー補佐・PM補佐・高需要技術のタスクなど、現職で各路線の「お試し」を仕掛ける。並行してエージェントのキャリア面談で想定年収レンジを確認すれば、思い込みではなく相場で意思決定できる。"],
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
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>迷ったときの判断基準</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・<strong>決めきれない→スペシャリスト寄りで保留</strong>：技術力はすべての路線の土台。深めて損になる選択肢がない</li>
              <li>・<strong>年収を最優先→PM・PdM</strong>：エンジニア平均から200万〜300万円の上積みが狙える唯一の「平均値で高い」路線</li>
              <li>・<strong>両立を最優先→社内SE or リモート前提のスペシャリスト</strong>：労働時間の予見性が高い</li>
              <li>・<strong>裁量を最優先→フリーランス</strong>：ただし実務3年・副業での試運転を経てから</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績が光ります。スピーディーなマッチングで、最短2週間での内定実績も。年収交渉力にも定評があります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                  女性特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介してくれるため、長期的なキャリア形成に最適。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
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
            style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}
          >
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">
              複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#c15f47" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>

      {/* sec8 モデルケース */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">キャリアチェンジのモデルケース</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ケース1（30代前半・開発エンジニア→PM路線）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転換前</p>
                  <p className="text-sm font-bold">SIerのシステムエンジニア / 年収470万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転換後</p>
                  <p className="text-sm font-bold">事業会社のPM / 年収620万円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">
                現職で要件定義と顧客折衝を担当していた経験を「PM補佐の実績」として棚卸し。エンジニア出身で技術側と会話できる点が評価され、PM職へ転換しました。プロジェクトマネジャーの平均年収707万円（doda 2025）の市場相場を踏まえ、エージェント経由で年収交渉を実施したパターンです。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ケース2（30代後半・育休復帰→社内SE経由でマネジメント路線）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転換前</p>
                  <p className="text-sm font-bold">受託開発エンジニア（時短勤務）/ 年収430万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転換後</p>
                  <p className="text-sm font-bold">メーカー社内SE→IT企画リーダー / 年収550万円・フルフレックス</p>
                </div>
              </div>
              <p className="text-sm text-text-light">
                育休復帰後、労働時間の予見性が高い社内SEへ転職して両立基盤を確保。復帰後2年で業務システム刷新プロジェクトを主導した実績を作り、IT企画チームのリーダーへ昇格しました。時短期に「評価が積み上がる業務」へ寄せ、復帰期に実績を再蓄積する設計の典型例です。
              </p>
            </div>
          </div>
          <p className="text-xs text-text-light mt-4">※事例は公開統計・市場相場をもとに典型的なキャリア転換パターンを構成したモデルケースであり、特定個人の体験談ではありません。</p>
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

      {/* 出典 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>・出典: doda（パーソルキャリア）「平均年収ランキング2025」（2026年6月参照）— 全体429万円、エンジニア（IT/通信）469万円、プロジェクトマネジャー707万円（IT/通信系技術職1位）、30代454万円。集計期間2024年9月〜2025年8月・約60万件</li>
            <li>・出典: doda（パーソルキャリア）「転職求人倍率レポート（2026年4月）」（2026年6月参照）— 全体2.38倍、エンジニア（IT・通信）は10倍超の高水準</li>
            <li>・出典: PM Career「日本のプロダクトマネージャー年収2025最新統計」（2026年6月参照）— プロダクトマネージャー平均年収 約774万円</li>
            <li>・出典: 求人ボックス 給料ナビ／Geekly（2026年6月参照）— 社内SEの平均年収 約510万円（求人ボックス）〜約580万円（Geekly独自データ）</li>
            <li>・出典: レバテックフリーランス「単価相場」（2026年6月参照）— 公開案件の平均単価：SE 月72万円、プロジェクトマネージャー 月88万円、ITコンサルタント 月102万円</li>
            <li>・出典: 厚生労働省「令和6年度雇用均等基本調査」（2026年6月参照）— 管理職等に占める女性の割合：課長相当職12.3%、部長相当職8.7%。育児休業取得率：女性86.6%、男性40.5%</li>
            <li>・出典: 厚生労働省「令和6年雇用動向調査」（2026年6月参照）— 女性の転職入職率（30〜34歳13.2%）、転職者の賃金変動（30〜34歳46.1%増加）、前職を辞めた理由（30代女性の「出産・育児」3.4〜4.0%、「労働時間・休日等の労働条件」13.3〜15.0%）</li>
            <li>・出典: 総務省「令和6年通信利用動向調査」（2026年6月参照）— テレワーク導入率：情報通信業94.3%、企業全体47.3%</li>
            <li>・出典: ヒューマンリソシア「IT分野のジェンダーギャップに関するグローバル調査」（2026年6月参照）— 日本のITエンジニア女性比率18.8%（OECD平均20.6%）</li>
          </ul>
          <p className="text-xs text-text-light mt-4">※年収・単価・割合などの数値は調査時点のものであり、企業・地域・スキルにより変動します。マネジメント路線・高需要技術領域の年収レンジは公開求人水準をもとにした目安です。</p>
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">職種別ガイド一覧</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <a href="/articles/frontend/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>フロントエンドエンジニア転職ガイド</p></a>
            <a href="/articles/backend/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>バックエンドエンジニア転職ガイド</p></a>
            <a href="/articles/infrastructure/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>インフラエンジニア転職ガイド</p></a>
            <a href="/articles/mobile-app/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>モバイルアプリエンジニア転職ガイド</p></a>
            <a href="/articles/data-scientist/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>データサイエンティスト転職ガイド</p></a>
            <a href="/articles/data-engineer/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>データエンジニア転職ガイド</p></a>
            <a href="/articles/ai-ml-career/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>AI・機械学習エンジニア転職ガイド</p></a>
            <a href="/articles/security/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>セキュリティエンジニア転職ガイド</p></a>
            <a href="/articles/sre-devops/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>SRE・DevOpsエンジニア転職ガイド</p></a>
            <a href="/articles/embedded/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>組み込み・IoTエンジニア転職ガイド</p></a>
            <a href="/articles/qa-tester/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>QAエンジニア・テスター転職ガイド</p></a>
            <a href="/articles/it-consultant/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>ITコンサルタント転職ガイド</p></a>
            <a href="/articles/support-engineer/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>テクニカルサポート・カスタマーサクセス転職ガイド</p></a>
            <a href="/articles/web-designer/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>Webデザイナーからエンジニアへのキャリアチェンジ</p></a>
            <a href="/articles/ux-designer/" className="block rounded-xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><p className="text-sm font-bold" style={{ color: "#7c3a55" }}>UXデザイナー転職ガイド</p></a>
          </div>
        </div>
      </section>


      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすいIT企業の見極め方</h3><p className="text-sm text-text-light">職場環境選びの総合ガイド</p></a>
            <a href="/articles/women-manager/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの管理職キャリア</h3>
              <p className="text-sm text-text-light">マネジメント路線の実態と転身戦略</p>
            </a>
            <a href="/articles/pm-director/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>PM・Webディレクターへのキャリアチェンジ</h3>
              <p className="text-sm text-text-light">年収707万円のPM路線へ進む方法</p>
            </a>
            <a href="/articles/internal-se/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>社内SE転職ガイド</h3>
              <p className="text-sm text-text-light">両立しやすい人気職種の年収と転職術</p>
            </a>
            <a href="/articles/freelance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性フリーランスエンジニアガイド</h3>
              <p className="text-sm text-text-light">独立のタイミングと案件獲得のコツ</p>
            </a>
            <a href="/articles/long-career-tips/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>長く活躍するためのキャリア戦略</h3>
              <p className="text-sm text-text-light">50代まで見据えた技術キャリアの作り方</p>
            </a>
            <a href="/articles/age-30s/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>30代女性エンジニアの転職ガイド</h3>
              <p className="text-sm text-text-light">路線変更コストが最も低い年代の戦略</p>
            </a>
            <a href="/articles/salary-by-age/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>年代別年収ガイド</h3>
              <p className="text-sm text-text-light">20代〜40代の年収相場と上げ方</p>
            </a>
            <a href="/articles/mama-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</h3>
              <p className="text-sm text-text-light">育児と両立する転職・復帰戦略</p>
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
              background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)",
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
              style={{ backgroundColor: "#c15f47", color: "#ffffff" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
