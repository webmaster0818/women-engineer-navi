import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアが週3・週4・時短で働ける求人の探し方｜形態・収入・注意点",
  description:
    "女性エンジニアが週3〜週4日・時短で働ける求人の探し方を実データで解説。業務委託・フリーランス・時短正社員の違い、可能な職種・スキル、収入の目安（月単価40〜60万円台）、ITプロパートナーズなど案件サイトの使い方、育児と両立する選択肢とメリデメ・注意点まで網羅します。",
  alternates: { canonical: "/articles/short-week/" },
  openGraph: {
    title: "女性エンジニアが週3・週4・時短で働ける求人の探し方｜形態・収入・注意点",
    description:
      "週3〜週4日・時短で働ける女性エンジニア求人のリアル。業務委託・フリーランス・時短正社員の違い、可能な職種、収入の目安、探し方のSTEP、育児両立の選択肢を実データで解説。",
    url: "https://women-engineer.com/articles/short-week/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "女性エンジニアが週3・週4・時短で働ける求人の探し方｜形態・収入・注意点",
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
    "週3〜週4日・時短で働ける女性エンジニア求人の探し方を、業務委託・フリーランス・時短正社員の形態別に実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/short-week/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "週3・週4で働くエンジニアの収入はどれくらいになりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "フリーランス・業務委託の場合、フルタイム（週5）の月単価平均が約77〜80万円なので、稼働日数に比例して週4で月48〜64万円、週3で月36〜48万円が一つの目安です。ただし週3以下の低稼働案件は単価が1.2〜1.5倍に上がる「低稼働プレミアム」が乗ることが多く、時給6,000円以上のハイスキル層では週3日でも月50〜60万円台に届くケースがあります。時短正社員の場合は、8時間を6時間に短縮するとノーワーク・ノーペイの原則で基本給が約75%（4分の3）になるのが一般的です。",
      },
    },
    {
      "@type": "Question",
      name: "週3・週4の案件が多いのはどんな職種ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "成果物や担当範囲を切り出しやすい職種ほど低稼働案件が多くなります。具体的にはバックエンド・サーバーサイド開発、インフラ構築・運用、PM/ディレクター、UI/UXデザイナー、Webマーケター、QA・テストなど。ITプロパートナーズではUI/UXデザイナーやマーケターの週2〜3案件が数百件単位でヒットします。逆に常駐前提の大規模開発や、チーム密着の上流要件定義は週5フル稼働を求められやすい傾向です。",
      },
    },
    {
      "@type": "Question",
      name: "週3・週4の業務委託で気をつけることは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "会社員と違い、国民健康保険・国民年金への加入と納付、確定申告を自分で行う必要があります。事業所得が48万円（副業なら20万円）を超えると確定申告が必須で、青色申告にすると最大65万円の特別控除が使えます。また有給・産休育休がない、収入が案件次第で不安定、契約終了リスクがある点もデメリットです。手取りを正社員と単純比較せず、社会保険料や税金を差し引いた額で判断しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "育児中の女性が週3・週4で働くには正社員と業務委託どちらが良いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "安定とブランク回避を優先するなら時短正社員、収入効率と時間の自由度を優先するなら業務委託が向きます。2025年10月施行の改正育児・介護休業法で、企業は柔軟な働き方の措置から2つ以上を選ぶことが義務化され、子が小学校入学まで時短勤務しやすい環境が広がりました。まずは時短正社員で社会保険と育児制度を確保し、お子さんの手が離れてきたら業務委託で稼働を増やす、という二段構えも現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "週3・週4で働ける求人はどこで探せばいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "業務委託・フリーランスなら、週3〜4日案件に強いITプロパートナーズ、大手で高単価のレバテックフリーランス、柔軟稼働が多いクラウドワークステックなどのエージェントが中心です。時短正社員なら、女の転職type（時短勤務OKのエンジニア求人特集あり）、マイナビ転職 女性のおしごと、リモート・フレックス求人が多いLIBZ（リブズ）が探しやすく、育児経験のあるアドバイザーが条件交渉まで支援してくれます。2〜3サービスの併用が基本です。",
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
              { label: "週3-4・時短で働ける求人の探し方" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              働き方ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアが週3・週4・時短で働ける求人の探し方
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                業務委託・フリーランス・時短正社員の形態・収入・探し方を実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 週3・週4で働くエンジニアのリアル</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. どんな形態なら週3・週4で働ける？（比較表）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 低稼働で働きやすい職種・スキル</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 収入の目安（週3・週4・時短別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 求人の探し方（5STEP）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. メリット・デメリットと注意点</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント・案件サイト</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 育児と両立した転職事例</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 リアル */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">週3・週4で働くエンジニアのリアル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「フルタイムは難しいけれど、スキルを活かして働き続けたい」――育児や介護、自分の時間とのバランスを考える女性エンジニアにとって、<strong>週3〜週4日・時短</strong>という働き方は現実的な選択肢になっています。とくにエンジニア職は成果が可視化されやすく、リモートで完結しやすいため、低稼働の求人・案件が他職種より見つけやすいのが大きな強みです。
            </p>
            <p>
              市場データを見ても、フリーランスエンジニアの平均月単価は2026年時点で約<strong>77〜80万円</strong>（時間単価で約5,300円）。そのうえで、時間単価6,000円以上のハイスキル層では「週3日以下」で稼働する人の割合が増えており、<strong>高単価と柔軟な稼働を両立する働き方が定着</strong>しつつあります。「週3=収入が大きく下がる」とは限らないのが今の市場です。
            </p>
            <p>
              一方で、低稼働で働く道は大きく3つ――<strong>(1)フリーランス・業務委託</strong>、<strong>(2)時短正社員</strong>、<strong>(3)正社員の週4日制（選択的週休3日）</strong>に分かれ、それぞれ収入・安定性・必要なスキルが異なります。この記事では、女性が育児やライフイベントと両立する視点で、形態の違い・可能な職種・収入の目安・具体的な探し方を整理します。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>この働き方が向いている人</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>保育園・学童の送り迎えや家庭の都合で、フルタイム勤務が難しい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ブランクを作らず、エンジニアとしてのスキルを継続したい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>1〜3年程度の実務経験があり、ある程度自走できる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>収入は下げてでも、時間の自由とゆとりを優先したい</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 形態比較表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">どんな形態なら週3・週4で働ける？（比較表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              週3・週4を実現する方法は1つではありません。下表で、収入効率・安定性・育児との相性を比較します。「正社員で身分は守りたい」のか「収入効率を最大化したい」のかで最適解が変わります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>働き方</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>雇用形態</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>収入効率</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>安定性・保障</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>向いている人</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス・業務委託</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>個人事業主（準委任）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>◎ 単価が高く時間あたり効率が良い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>△ 社保・税は自己負担、有給/育休なし</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>実務2〜3年以上・自走できる人</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>時短正社員（育児短時間勤務）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>正社員（1日6時間など）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>○ 基本給は約4分の3に</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>◎ 社保・賞与・育休あり、最も安定</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>安定とブランク回避を最優先する人</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>正社員の週4日制</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>正社員（選択的週休3日）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>○ 日数比で減（多くは8割前後）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>◎ 正社員の保障を維持できる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>制度がある企業に在籍/転職できる人</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>パート・契約社員（週3〜4）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>パート/有期</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>△ 時給制で総額は低め</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>○ 条件次第で社保加入可</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>まず無理なく復職したい人</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ポイントは、<strong>「準委任契約の業務委託」</strong>が週3・週4案件の中心という点。成果物の納品ではなく稼働（時間）に対して報酬が払われるため、「週○日・1日○時間」と稼働を区切りやすく、低稼働の働き方と相性が良いのです。
          </p>
        </div>
      </section>

      {/* sec3 職種・スキル */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">低稼働で働きやすい職種・スキル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              週3・週4の案件は、<strong>担当範囲を切り出しやすく、リモートで完結しやすい職種</strong>ほど豊富です。逆に常駐前提の大規模開発や、チームに密着する要件定義などはフル稼働を求められがち。まずは自分のスキルがどこに位置するかを確認しましょう。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>職種</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>低稼働案件の多さ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>求められるスキル例</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>バックエンド / サーバーサイド</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>多い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>PHP / Ruby / Python / Go・API設計・DB設計</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>インフラ / クラウド構築・運用</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>多い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>AWS / GCP・IaC・監視・運用自動化</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>PM / ディレクター</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>多い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>進行管理・要件整理・複数案件の掛け持ちに向く</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>UI/UXデザイナー</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>非常に多い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Figma・デザインシステム・成果物が切り出しやすい</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フロントエンド</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>中程度</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>React / TypeScript / Next.js・コンポーネント開発</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>QA / テスト</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>中程度</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>テスト設計・自動テスト・工程単位で切りやすい</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データ分析 / Webマーケ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>多い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>SQL / GA4 / 施策設計・成果ベースで評価されやすい</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#fff" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>低稼働で選ばれるために大事な3つの条件</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>実務経験2〜3年以上</strong>：週3だと教育コストをかけにくいため、自走力が前提になりやすい</li>
              <li>② <strong>得意領域の明確化</strong>：「決済まわりのバックエンド」など、切り出しやすい専門があると強い</li>
              <li>③ <strong>非同期コミュニケーション力</strong>：少ない稼働でもチームに迷惑をかけない報連相・ドキュメント力</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec4 収入の目安 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">収入の目安（週3・週4・時短別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              フリーランスエンジニアの月単価平均は週5フル稼働で約<strong>77〜80万円</strong>。単純に稼働日数で按分すると下表のようになりますが、<strong>週3以下は単価が1.2〜1.5倍に上がる「低稼働プレミアム」</strong>が乗りやすく、ハイスキル層は表の額を上回ることもあります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>働き方</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>月収/月単価の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>業務委託・週5（フル）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約77〜80万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2026年の平均月単価。基準値</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>業務委託・週4</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約48〜64万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>稼働8割。最も案件数が多い帯</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>業務委託・週3</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約36〜48万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>プレミアムで月50〜60万円台の例も</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>時短正社員（6時間）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基本給の約75%</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ノーワーク・ノーペイで時間比減額。賞与・社保あり</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>正社員・週4日制</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月給の約8割</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>日数比で減額する企業が多い</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>「手取り」で比べるのが鉄則</h3>
            <p className="text-sm text-text-light leading-relaxed mb-3">
              業務委託は月単価が高く見えても、<strong>国民健康保険・国民年金・所得税・住民税を自分で負担</strong>します。会社員のように会社が社会保険料を半分払ってくれる仕組みはありません。額面だけで「正社員より得」と判断せず、税金・保険を差し引いた手取りと、有給・育休・賞与といった保障の有無まで含めて比較しましょう。
            </p>
            <p className="text-sm text-text-light leading-relaxed">
              なお、2025年10月開始の<strong>育児時短就業給付</strong>により、時短勤務で賃金が下がった被保険者に給付が出る制度も整いました。時短正社員を選ぶ場合は、こうした公的支援も収入の一部として考慮できます。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 探し方STEP */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人の探し方（5STEP）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>やみくもに探すと「週3で探したのに週5案件ばかり紹介された」となりがち。次の順序で、希望の稼働条件に的を絞って進めましょう。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "希望条件を数値で言語化する", "「週3・1日6時間・フルリモート・月40万円以上・稼働は10〜16時」のように、譲れない条件と妥協できる条件を分けて書き出します。最初に基準が決まっていると、エージェントの提案精度が上がります。"],
              ["STEP2", "形態を決める（委託か正社員か）", "安定・育休を取りたいなら時短正社員、収入効率と自由度なら業務委託。迷うなら両方の窓口に登録し、出てくる求人・案件を見比べてから決めても構いません。"],
              ["STEP3", "形態に合ったサービスに2〜3社登録する", "業務委託ならITプロパートナーズ・レバテックフリーランス・クラウドワークステック。時短正社員なら女の転職type・マイナビ転職 女性のおしごと・LIBZ。1社だけだと案件が偏るため複数併用が基本です。"],
              ["STEP4", "面談で「週3・週4が前提」と明言する", "後から条件を出すのではなく、初回面談で稼働条件をはっきり伝えるのが重要。低稼働可の案件は数が限られるため、最初に希望を共有しておくとミスマッチを防げます。"],
              ["STEP5", "稼働実態と更新条件を確認して決める", "『週3OK』でも繁忙期にフル稼働を求められる案件もあります。実際の稼働時間帯・会議の頻度・契約更新の見込み・リモート可否を確認し、育児スケジュールと合うかをすり合わせて契約しましょう。"],
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

      {/* sec6 メリデメ・注意点 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">メリット・デメリットと注意点</h2>
          <div className="grid gap-6 md:grid-cols-2 mt-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>メリット</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>育児・介護・自分の時間と両立しやすい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ブランクを作らずスキルを継続できる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>業務委託は低稼働プレミアムで時間効率が高い</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>複数案件の掛け持ちで収入を調整できる</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>デメリット</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">!</span><span>業務委託は有給・産休育休・賞与がない</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">!</span><span>社保・税を自己負担し、手取りが目減りしやすい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">!</span><span>契約終了・案件減のリスクがあり収入が不安定</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">!</span><span>時短正社員は昇給・評価で不利になる場合も</span></li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>業務委託で必ず押さえたい注意点</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・<strong>確定申告</strong>：事業所得が48万円（副業なら20万円）超で必須。<strong>青色申告</strong>なら最大65万円の特別控除が使える</li>
              <li>・<strong>社会保険</strong>：退職後は国民健康保険・国民年金へ。手続きが遅れると遡って請求され、無保険期間は医療費全額負担になる</li>
              <li>・<strong>保険料は前年所得で決まる</strong>：稼いだ翌年に保険料が上がるため、納税分は手元に残しておく</li>
              <li>・<strong>時短正社員の評価</strong>：労働時間が短い分、フルタイムと同じ目標のままだと不利。評価基準が時間比で調整されるか面接で確認を</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント・案件サイト</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>週3・週4の求人は数が限られるため、形態に合ったサービスを複数併用するのが成功の近道です。業務委託系と女性特化の時短正社員系を組み合わせましょう。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">ITプロパートナーズ</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>業務委託・週3〜4特化</span></div>
              <p className="text-sm text-text-light">他社と比べて週3〜4日稼働の案件が多いと評判。エンド直案件が中心で高単価。エンジニアに加え、UI/UXデザイナーやマーケターの低稼働案件も豊富で、PM・インフラ・システム開発まで幅広くカバーします。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックフリーランス</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>業務委託・大手</span></div>
              <p className="text-sm text-text-light">取引社数1万社超の大手で、大企業からの直接案件・高単価が強み。「週3日から可能」の案件特集もあり、母数が多い分、希望条件に合う案件を見つけやすいのが魅力です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">クラウドワークステック</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>業務委託・柔軟稼働</span></div>
              <p className="text-sm text-text-light">週3〜4日稼働やリモート案件を多く扱い、柔軟に働きたい人向け。フルリモート案件の割合が高く、地方在住・育児中でも働きやすい案件を探せます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">女の転職type</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>時短正社員・女性特化</span></div>
              <p className="text-sm text-text-light">正社員で長く働きたい女性向けの転職サイト。「時短勤務OKのエンジニア求人」「フルリモート×時短」の特集があり、育休復帰前提で安定して働きたい人に向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">LIBZ（リブズ）</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>リモート・フレックス特化</span></div>
              <p className="text-sm text-text-light">リモート・フレックスなど柔軟な働き方の求人が中心。育児経験のあるアドバイザーが面談から条件交渉まで支援し、時短や週4日制の正社員ポジションを探しやすいのが特徴です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">複数登録で「週3・週4」の選択肢を最大化</p>
            <p className="text-sm text-text-light mb-4">低稼働案件は数が限られます。業務委託系＋女性特化系を併用して、希望に合う1件を見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec8 事例 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">育児と両立した転職事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代後半・正社員→週3業務委託）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SIerのバックエンド（PHP/Laravel）/ 週5フルタイム・年収520万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SaaS企業の業務委託（API開発）/ 週3・フルリモート・月単価45万円</p></div>
              </div>
              <p className="text-sm text-text-light">2人目の育休復帰を機に、ITプロパートナーズで「週3・フルリモート」案件に絞って参画。稼働は子どもが学校・園にいる10〜16時に集中させ、午後の送り迎えと両立。単価プレミアムで時間あたりの効率はフルタイム時より上がりました。社保・税は自分で管理し、青色申告で節税しています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（30代前半・フルタイム→時短正社員）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">受託開発のフロントエンド / 残業多めの週5・年収450万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">自社開発企業の時短正社員（1日6時間）/ フルリモート・基本給は約75%</p></div>
              </div>
              <p className="text-sm text-text-light">安定と育休の再取得を重視し、女の転職type経由で時短勤務OKの自社開発企業へ。給与は時間比で下がったものの、社会保険・賞与・育児短時間勤務制度が維持でき、2025年開始の育児時短就業給付も活用。子が小学校に入るまで時短を続けられる環境で、長く働く土台を整えました。</p>
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
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/freelance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>フリーランスエンジニア転職ガイド</h3><p className="text-sm text-text-light">独立・業務委託で柔軟に働く道</p></a>
            <a href="/articles/mama-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ママエンジニアの働き方ガイド</h3><p className="text-sm text-text-light">育児と両立するキャリア戦略</p></a>
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>フルリモート求人の探し方</h3><p className="text-sm text-text-light">在宅で完結する働き方を実現</p></a>
            <a href="/articles/work-life-balance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ワークライフバランス重視の転職</h3><p className="text-sm text-text-light">無理なく長く働ける会社の選び方</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">あなたに合った働き方を見つけましょう</h2>
            <p className="text-white/90 mb-6">週3・週4・時短――まずはエージェントに無料相談。希望の稼働条件で働ける求人・案件を一緒に探しましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
