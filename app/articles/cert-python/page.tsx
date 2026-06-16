import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアのPython資格ガイド｜基礎・データ分析試験の難易度・合格率・勉強法",
  description:
    "女性エンジニア向けPython資格の取得ガイド。Python3エンジニア認定基礎試験（合格率約78%・受験料1万円）とデータ分析試験（合格率81.5%・1万1000円）の難易度・出題範囲・勉強時間・教材を実データで解説。AI・データ分析需要で広がる年収・キャリアと、女性に役立つ理由・おすすめエージェントも紹介します。",
  alternates: { canonical: "/articles/cert-python/" },
  openGraph: {
    title: "女性エンジニアのPython資格ガイド｜基礎・データ分析試験の難易度・合格率・勉強法",
    description:
      "Python3エンジニア認定基礎試験・データ分析試験の難易度・合格率・受験料・勉強法を実データで解説。女性エンジニアに役立つ理由とキャリア・年収への影響も紹介。",
    url: "https://women-engineer.com/articles/cert-python/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアのPython資格ガイド｜基礎・データ分析試験の難易度・合格率・勉強法",
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
    "Python3エンジニア認定基礎試験・データ分析試験・実践試験の難易度・合格率・受験料・勉強法を実データで解説。女性エンジニアに役立つ理由とキャリア・年収への影響も紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/cert-python/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Python資格は「意味ない」と言われますが、女性エンジニアが取る価値はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "価値はあります。「意味ない」と言われるのは、資格だけで実務力が証明されるわけではないためですが、Python3エンジニア認定基礎試験やデータ分析試験は、文法・標準ライブラリ・NumPy/pandas/Matplotlib/scikit-learnの基礎を体系的に学べる点で、独学の抜け漏れを埋めるのに有効です。特に未経験・ブランクありの女性が「学習を継続しスキルを習得した客観的な証拠」として履歴書やポートフォリオに書けるため、書類選考やカジュアル面談での説得材料になります。資格取得を学習のゴールではなく、ポートフォリオ制作の前段として位置づけるのがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "Python3エンジニア認定基礎試験とデータ分析試験は、どちらを先に受けるべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "プログラミング自体が初めての方は基礎試験から始めるのが王道です。基礎試験はオライリー『Pythonチュートリアル（第4版）』が出題範囲で、文法・データ型・制御構文・例外処理など土台を固められます。すでに文法に慣れていて、データ分析・AI領域を目指す方は、データ分析試験から入っても問題ありません。データ分析試験は『Pythonによるあたらしいデータ分析の教科書（第3版）』が範囲で、約67.5%が第4章のライブラリ実践（NumPy・pandas・Matplotlib・scikit-learn）から出題されます。最終的にはAI・データ分析職を狙うなら両方取得しておくと強いです。",
      },
    },
    {
      "@type": "Question",
      name: "Python資格の合格に必要な勉強時間はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "基礎試験は未経験で40〜50時間、実務経験者なら30時間程度が目安です。1日1.5〜2時間なら1〜1.5カ月で到達できます。データ分析試験は、Pythonの基礎が身についている前提で40〜60時間ほど。NumPyやpandasの操作・統計の基礎・scikit-learnでの機械学習の流れを手を動かして覚える時間が必要です。いずれも公式認定模擬試験（PRIME STUDYやDIVE INTO EXAM）が無料で提供されており、本番形式で繰り返し解くことで合格率が大きく上がります。",
      },
    },
    {
      "@type": "Question",
      name: "Python資格を取ると年収はどのくらい上がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "資格そのものに資格手当が付くケースは多くありませんが、Pythonスキルを身につけることで年収の天井が上がります。paizaの調査ではPythonエンジニアの平均年収は約653万円と、言語別でも上位。データサイエンティストでは600〜1200万円のレンジもあります。資格は「Pythonを業務レベルで扱える人材」への入口として、AI・データ分析・自動化といった高単価領域への転職・配属のきっかけになります。実務経験を積んでフリーランスに移行すると、正社員から年収200〜400万円アップする事例も一般的です。",
      },
    },
    {
      "@type": "Question",
      name: "ブランクのある女性でもPython資格から再就職を目指せますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "目指せます。Pythonは文法がシンプルで学習コストが低く、在宅・スキマ時間で進めやすい言語です。育休・離職でブランクがある方が「学習を再開し、形に残るスキルを身につけた」ことを示すのに、Python資格は分かりやすい指標になります。さらにデータ分析やバックエンド開発はフルリモート求人が多く、復職後も働き方を選びやすい領域です。資格取得→簡単なデータ分析やWebアプリのポートフォリオ公開→IT特化型・女性特化型エージェントへの相談、という流れで再就職の成功率が高まります。",
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
              { label: "Python資格ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              資格ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアのPython資格ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                基礎・データ分析試験の難易度・合格率・勉強法を実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. Python資格とは（種類と全体像）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. Python資格の種類と難易度（比較表）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 女性エンジニアにPython資格が役立つ理由</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 各試験の出題範囲</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 勉強時間と勉強法（STEP）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. おすすめ教材・学習サービス</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 取得後の年収・キャリアへの影響</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. 関連記事</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 Python資格とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Python資格とは（種類と全体像）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Python資格とは、プログラミング言語Pythonの文法・標準ライブラリ・データ分析スキルなどを客観的に証明する民間資格です。代表的なものは、<strong>一般社団法人Pythonエンジニア育成推進協会</strong>が主催する「Python3エンジニア認定試験」シリーズで、<strong>基礎試験</strong>・<strong>データ分析試験</strong>・<strong>実践試験</strong>・<strong>データ分析実践試験</strong>の4種類があります。いずれもオデッセイコミュニケーションズのCBT方式（全国の会場でパソコン受験）で、ほぼ毎日受験でき、結果はその場で分かります。
            </p>
            <p>
              Pythonは2026年現在、<strong>生成AI・LLMエコシステムの事実上の標準言語</strong>であり、データ分析・機械学習・Web開発・業務自動化など幅広い領域で使われています。企業のAI内製化・DX推進が加速する中で需要は中長期的に拡大が見込まれ、Pythonを業務レベルで扱える人材は希少価値が高い状態が続いています。
            </p>
            <p>
              資格は「実務力そのもの」ではありませんが、未経験・ブランクありの方が<strong>学習の抜け漏れを体系的に埋め、習得を客観的に示す</strong>のに有効です。資格取得をゴールにせず、ポートフォリオ制作・実務への橋渡しとして使うのがポイントです。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>Python資格でできるようになること</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Pythonの文法・標準ライブラリの体系的な理解（基礎試験）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>NumPy / pandas / Matplotlib / scikit-learn を使ったデータ分析（データ分析試験）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>実務寄りのライブラリ活用・設計の知識（実践試験）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>履歴書・職務経歴書・ポートフォリオでのスキルアピール</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>AI・データ分析・自動化など高需要領域への足がかり</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 種類と難易度（表） */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Python資格の種類と難易度（比較表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              まず目指すべきは<strong>基礎試験</strong>と<strong>データ分析試験</strong>の2つ。どちらも合格率が高く、独学・社会人でも取り組みやすい難易度です。下表は各試験の概要です（受験料・教材は2026年6月時点の公式情報をもとにした目安です）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>資格</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>受験料(税込)</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>合格率/合格ライン</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>難易度・対象</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Python3エンジニア認定基礎試験</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>11,000円<br />(学割5,500円)</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>合格率 約75〜80%<br />正答率70%以上で合格</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>★☆☆ 入門。文法40問・60分。これから始める人に最適</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Python3エンジニア認定データ分析試験</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>11,000円<br />(学割5,500円)</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>合格率 約81.5%<br />正答率70%以上で合格</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>★★☆ データ分析・AI入門。40問・60分。基礎の次に</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Python3エンジニア認定実践試験</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>13,200円<br />(学割6,600円)</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>正答率70%以上で合格<br />(90%以上でSuper Engineer)</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>★★★ 実務寄り。基礎より難。中級者向け</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データ分析実践試験</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>11,000円<br />(学割6,600円)</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>正答率70%以上で合格</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>★★★ 分析実務寄り。データ分析試験の上位</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            合格率が高めなのは、<strong>出題範囲が公式の指定教材から100%出る</strong>ためで、教材をしっかり押さえれば合格を狙えます。「易しすぎて意味がない」のではなく、<strong>最短で土台を固めるのに向いた資格</strong>だと考えると活用しやすいです。
          </p>
        </div>
      </section>

      {/* sec3 女性に役立つ理由 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアにPython資格が役立つ理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度ですが、AI・データ分析という伸び盛りの領域では、Pythonスキルを起点にキャリアを築く女性が増えています。Python資格は、特に未経験・ブランクありの女性にとって次のような追い風になります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 学習コストが低く在宅で取りやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">Pythonは文法がシンプルで、基礎試験は40〜50時間が目安。1日1.5〜2時間のスキマ学習でも1〜1.5カ月で到達でき、育児・仕事と並行して進めやすい資格です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. ブランクを「学び直しの証拠」に変えられる</h3>
              <p className="text-text-light text-sm leading-relaxed">育休・離職で空白期間がある場合も、資格は「学習を再開し、形に残るスキルを習得した」客観的な証明に。書類選考やカジュアル面談で前向きな印象を与えられます。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. AI・データ分析という成長領域に直結</h3>
              <p className="text-text-light text-sm leading-relaxed">データ分析試験はNumPy・pandas・scikit-learnを学べ、データ分析・機械学習職への入口に。生成AI時代に最も需要が伸びている領域へ、女性も挑戦しやすくなります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. リモート求人が多く働き方を選びやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">Pythonを使うデータ分析・バックエンド・自動化はフルリモート求人が豊富。資格でスキルを示せれば、ライフイベントと両立できる柔軟な働き方を選びやすくなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 出題範囲 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">各試験の出題範囲</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              Python3エンジニア認定試験は、<strong>指定された主教材から出題される</strong>のが大きな特徴です。「どこから出るか」が明確なので、教材を軸に学習を組み立てれば効率よく合格を狙えます。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>基礎試験（主教材：オライリー『Pythonチュートリアル 第4版』）</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">40問・60分・選択式。文法と標準ライブラリの基礎が中心で、出題比率の目安は次の通りです。</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・データ構造（リスト・辞書・タプル・集合）／制御構文：比重大</li>
                <li>・関数・モジュール・パッケージ／例外処理</li>
                <li>・クラス・標準ライブラリ（文字列・ファイル入出力など）</li>
                <li>・仮想環境・エラーとデバッグの基礎</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>データ分析試験（主教材：『Pythonによるあたらしいデータ分析の教科書 第3版』）</h3>
              <p className="text-sm text-text-light leading-relaxed mb-3">40問・60分・選択式。<strong>約67.5%（27問）が第4章「ライブラリによる分析実践」</strong>から出題されます。主要ライブラリの操作が合否を分けます。</p>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・データ分析の概要・実行環境（Jupyter Notebook など）</li>
                <li>・数学の基礎（確率・統計・線形代数の基本）</li>
                <li>・<strong>NumPy</strong>（配列操作）／<strong>pandas</strong>（データ前処理）</li>
                <li>・<strong>Matplotlib</strong>（可視化）／<strong>scikit-learn</strong>（機械学習の基礎）</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>実践試験（主教材：技術評論社『Python実践レシピ』）</h3>
              <p className="text-sm text-text-light leading-relaxed">全19章のうち、7・12・15・19章を除く15章が出題範囲。標準ライブラリの実務的な使い方やパッケージ管理など、現場寄りの内容です。正答率90%以上で「Python Super Engineer」の呼称が使えます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 勉強時間と勉強法（STEP） */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">勉強時間と勉強法（STEP）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              <strong>基礎試験は未経験で40〜50時間（実務経験者は約30時間）、データ分析試験は40〜60時間</strong>が目安。次のステップで進めると、独学でも挫折しにくく合格まで到達できます。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "受ける試験を決め、主教材を入手", "まずは基礎試験から。出題範囲＝主教材なので、オライリー『Pythonチュートリアル 第4版』（基礎）または『あたらしいデータ分析の教科書 第3版』（データ分析）を最初にそろえます。"],
              ["STEP2", "環境構築と写経で手を動かす", "Pythonをインストールし、Jupyter NotebookやVS Codeでコードを実際に書いて動かす。読むだけにせず、教材のサンプルを写経して結果を確認します。"],
              ["STEP3", "主教材を1〜2周し全体像をつかむ", "細部を完璧にせず、まず通読して頻出テーマ（データ構造・関数・例外／データ分析はNumPy・pandas）に当たりをつけます。"],
              ["STEP4", "公式認定模擬試験で実力チェック", "PRIME STUDYやDIVE INTO EXAMの無料模擬試験を本番形式で受験。間違えた分野を教材に戻って復習し、弱点を潰します。"],
              ["STEP5", "模擬試験を繰り返し正答率8割を安定させる", "複数回分の模試を繰り返し、安定して8割以上を取れる状態に。データ分析試験は第4章のライブラリ操作を重点的に固めます。"],
              ["STEP6", "CBT会場で受験・次の資格やポートフォリオへ", "ほぼ毎日受験可能。合格したら、簡単なデータ分析やWebアプリを作って公開し、資格＋成果物で転職準備を進めます。"],
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

      {/* sec6 おすすめ教材 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ教材・学習サービス</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              出題が主教材から出るため、<strong>公式の主教材＋無料の公式認定模擬試験</strong>が最強の組み合わせです。動画で学びたい人はオンライン講座も併用すると効率が上がります。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>教材・サービス</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>対象</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>オライリー『Pythonチュートリアル 第4版』</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基礎試験</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基礎試験の主教材。これが出題範囲そのもの</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>『Pythonによるあたらしいデータ分析の教科書 第3版』</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>データ分析試験</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>データ分析試験の主教材。第4章を重点学習</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>PRIME STUDY（プライム・ストラテジー）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基礎/データ分析</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>無料の模擬試験＋動画解説。協会認定で本番に近い</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>DIVE INTO EXAM（DIVE INTO CODE）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基礎/データ分析</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>無料の模擬試験。会員登録で繰り返し受験可能</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Udemy / 各種オンライン講座</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>全般</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>動画で手を動かしたい人向け。セール時は安価</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            まずは<strong>主教材1冊＋無料模試</strong>で十分合格圏に入れます。費用をかけたくない場合は、図書館や電子書籍も活用しましょう。
          </p>
        </div>
      </section>

      {/* sec7 年収・キャリア */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">取得後の年収・キャリアへの影響</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              資格そのものに資格手当が付くことは多くありませんが、Pythonスキルを身につけることで<strong>年収の天井が上がり、進める職種が広がります</strong>。paizaの調査ではPythonエンジニアの平均年収は<strong>約653万円</strong>と言語別でも上位で、AI・データ活用ニーズの高まりとともに上昇傾向です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>キャリア</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>Python資格との関係</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Pythonエンジニア(平均)</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約653万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基礎・実践試験が土台の証明に</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データアナリスト</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約500〜700万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>データ分析試験がそのまま入口</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データサイエンティスト</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約600〜1,200万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>データ分析試験→上位資格(G検定/E資格)へ</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス(Python)</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>正社員＋200〜400万円も</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>実務経験＋スキル証明で高単価案件へ</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>資格を年収・キャリアに活かす3つのコツ</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>資格＋ポートフォリオ</strong>で「使える」ことを示す（分析ノートやWebアプリを公開）</li>
              <li>② <strong>データ分析試験→G検定/E資格</strong>へとステップアップし、AI領域での市場価値を高める</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。Pythonスキルの市場価値を客観的に評価してもらう</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>Python資格とポートフォリオを正当に評価してもらうには、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーがPython・データ分析のスキルを理解した提案をしてくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと年収交渉力に定評があり、Pythonを軸とした自社開発・データ職への転職に向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。資格取得で再就職を目指すブランクありの方や、働き方の条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。</p>
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
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/python-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>Pythonエンジニアのキャリア</h3><p className="text-sm text-text-light">需要の高いPythonで広がる道</p></a>
            <a href="/articles/data-scientist/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>データサイエンティスト転職ガイド</h3><p className="text-sm text-text-light">データ分析試験の先にある高年収職</p></a>
            <a href="/articles/ai-ml-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>AI・機械学習エンジニアのキャリア</h3><p className="text-sm text-text-light">生成AI時代に伸びる領域</p></a>
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>エンジニアの資格ガイド</h3><p className="text-sm text-text-light">転職に役立つ資格を総まとめ</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">Python資格を武器に、理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。資格とスキルを活かせるキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
