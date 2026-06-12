import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "未経験から女性エンジニアになるには？現実のロードマップと職種の選び方【2026年】",
  description:
    "未経験から女性エンジニアへの転職は可能？IT人材不足（2030年最大79万人・経産省）や求人倍率10.68倍（doda）など実データをもとに、現実的な学習期間、職種別の未経験ハードル比較、独学vsスクール、転職活動の進め方まで2026年最新情報で解説します。",
  alternates: { canonical: "/articles/beginner/" },
  openGraph: {
    title: "未経験から女性エンジニアになるには？現実のロードマップと職種の選び方【2026年】",
    description:
      "IT人材不足や求人倍率の実データをもとに、未経験から女性エンジニアになる現実的なロードマップと職種の選び方を解説。",
    url: "https://women-engineer.com/articles/beginner/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "未経験から女性エンジニアになるには？現実のロードマップと職種の選び方【2026年】",
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
    "IT人材不足や求人倍率の実データをもとに、未経験から女性エンジニアになる現実的なロードマップと職種の選び方を解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/beginner/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "未経験からエンジニアになるには何ヶ月かかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "学習に6ヶ月〜1年、転職活動に1〜3ヶ月が一般的な目安です。1日2〜3時間の学習を継続できるかが最大の分かれ目で、プログラミングスクールを使えば3〜6ヶ月に短縮できるケースもあります。「1ヶ月でエンジニアになれる」といった宣伝は実態と乖離していることが多いため、トータルで半年〜1年半の計画を立てるのが現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "30代・40代の未経験でもエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能ですが、20代に比べてポテンシャル採用の枠は減るため、戦略が重要になります。具体的には、(1)前職の経験（業務知識・マネジメント・顧客折衝）を活かせる職種や業界を選ぶ、(2)ポートフォリオで学習量を客観的に示す、(3)QAエンジニアやサポートエンジニアなど未経験ハードルが比較的低い職種から入って開発へ進む、の3つが有効です。IT人材不足を背景に年齢不問の求人も増えています。",
      },
    },
    {
      "@type": "Question",
      name: "文系出身・数学が苦手でもエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "なれます。Web開発の実務で高度な数学が必要になる場面は限られており、必要なのは「手順を分解して考える論理的思考」と「調べて解決する力」です。文系出身で活躍しているエンジニアは多く、ドキュメント作成力やコミュニケーション力はチーム開発でむしろ強みになります。機械学習など数学が前提となる分野を最初から選ばなければ、出身学部はハンデになりません。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の場合、最初はどの職種を選ぶべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「最初から開発職」と「隣接職種から段階的に」の2ルートがあります。学習時間を確保できるならフロントエンドやバックエンドの開発職に直接挑戦、働きながら早くIT業界に入りたいならQAテスターやサポートエンジニア、インフラの監視・運用からスタートして社内で開発へ近づく方法が現実的です。どちらが正解かは生活状況と学習に割ける時間で決まります。",
      },
    },
    {
      "@type": "Question",
      name: "独学とプログラミングスクール、どちらがおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "費用を抑えたい・自走力に自信があるなら独学、効率と挫折防止を優先するならスクールです。独学は無料〜数千円の教材で始められる一方、エラー解決で詰まりやすいのが難点。スクールは数十万円かかりますが、カリキュラムとメンターのサポートで学習効率が上がります。まず独学で1〜2ヶ月試して適性を確かめてからスクールを検討する順番が、費用対効果の面でおすすめです。",
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
          background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "未経験からエンジニアになるには" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#f97066" }}
            >
              未経験者向け
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              未経験から女性エンジニアになるには？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                現実のロードマップと職種の選び方【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>結論：未経験からのエンジニア転職は可能。ただし「半年〜1年の学習」と「職種選び」が前提</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li>・IT人材は構造的に不足しており（経済産業省の試算で2030年に最大約79万人不足）、エンジニア（IT・通信）の転職求人倍率は<strong>10.68倍</strong>（doda・2026年3月）。未経験者を育てる前提の採用は今も続いています。</li>
              <li>・ただし「1ヶ月でなれる」は幻想。<strong>1日2〜3時間×6ヶ月〜1年の学習＋ポートフォリオ</strong>が現実的な条件です。</li>
              <li>・日本のITエンジニアの女性比率は<strong>18.8%</strong>とまだ少数派ですが、だからこそ採用・育成に積極的な企業が増えています。</li>
              <li>・いきなり開発職が難しければ、QAテスターやサポートエンジニアなど<strong>未経験ハードルの低い職種から段階的に</strong>進むルートもあります（後述の比較表参照）。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}
          >
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. 未経験からエンジニアになれるのか（実データで検証）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 知っておくべき「未経験転職の現実」</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 職種別・未経験ハードル比較（どこから入るか）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 学習ロードマップ（期間の目安つき）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 独学かスクールか・資格は必要か</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. ポートフォリオの作り方</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 転職活動の進め方と求人の見極め方</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 実データで検証 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験からエンジニアになれるのか（実データで検証）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「未経験からエンジニアになれる」という言葉は広告でよく見かけますが、実際の市場データはどうなっているのでしょうか。まず採用側の事情を数字で確認します。
            </p>
            <p>
              経済産業省の委託調査「IT人材需給に関する調査」（みずほ情報総研実施）では、IT需要が高い伸びで推移する高位シナリオの場合、<strong>2030年に最大約79万人のIT人材が不足</strong>すると試算されています。企業のDX投資は全業界に広がっており、経験者の採用だけでは人材をまかなえないのが現状です。
            </p>
            <p>
              転職市場の体感に近いデータとして、dodaの転職求人倍率レポート（2026年4月発行版）では、全職種平均の求人倍率2.39倍に対し、<strong>エンジニア（IT・通信）は10.68倍</strong>。1人の転職希望者に対して約10件の求人がある計算で、職種別で突出した売り手市場が続いています。この需給ギャップこそが、未経験者を採用して育てる「ポテンシャル採用」が成立し続けている理由です。
            </p>
            <p>
              一方、女性の状況はどうか。ヒューマンリソシアの「データで見る世界のITエンジニアレポート」によると、<strong>日本のITエンジニアに占める女性比率は18.8%</strong>（2023年データ）。OECD平均の20.6%を下回り、33カ国中17位です。まだ少数派であることは事実ですが、裏を返せば、ダイバーシティ推進を掲げる企業にとって女性エンジニアの採用・育成は優先課題であり、産休育休制度やリモートワークの整備を進めて女性を迎え入れようとする企業は着実に増えています。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>数字で見る未経験転職の追い風</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>IT人材は2030年に最大約79万人不足の試算（需給ギャップが採用の門戸を開いている）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>エンジニア（IT・通信）の転職求人倍率は10.68倍（全職種平均は2.39倍）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                  <span>女性比率は18.8%と少数派ゆえに、女性採用・定着に投資する企業が増加中</span>
                </li>
              </ul>
              <p className="text-xs text-text-light mt-4">
                出典: 経済産業省「IT人材需給に関する調査」（2019年4月公表、2026年6月参照）／パーソルキャリア「doda転職求人倍率レポート」2026年4月発行版（2026年6月参照）／ヒューマンリソシア「データで見る世界のITエンジニアレポート」（2026年6月参照）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 現実 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">知っておくべき「未経験転職の現実」</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              追い風があるのは事実ですが、楽観だけで飛び込むと挫折します。事前に知っておくべき現実を、良い面・厳しい面の両方から整理します。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>現実1. 学習ゼロでの内定はほぼない</h3>
              <p className="text-text-light text-sm leading-relaxed">「未経験可」の求人でも、応募時点での学習実績（独学・スクール・ポートフォリオ）は見られます。求人倍率が高いのは経験者市場の話で、未経験枠には応募が集中します。学習の証拠を作ってから応募するのが大前提です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>現実2. 最初の年収は下がることが多い</h3>
              <p className="text-text-light text-sm leading-relaxed">未経験入社の初年度は前職より年収が下がるケースが珍しくありません。ただしエンジニアは経験年数とスキルで年収が伸びやすい職種です。相場感は<a href="/articles/salary/" className="underline" style={{ color: "#0891b2" }}>女性エンジニアの年収ガイド</a>で確認し、2〜3年スパンで回収する計画を立てましょう。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>現実3. 入社先の「タイプ」で経験の質が変わる</h3>
              <p className="text-text-light text-sm leading-relaxed">同じ「エンジニア募集」でも、自社開発・受託開発・SES（客先常駐）では働き方も身につくスキルも大きく異なります。未経験向け求人にはSESが多く、配属先によっては開発経験を積みにくいことも。求人の見極め方はセクション7で解説します。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>現実4. 入社後も学び続ける仕事である</h3>
              <p className="text-text-light text-sm leading-relaxed">エンジニアは「なってから」も技術のキャッチアップが続く職業です。逆に言えば、学び続けた分だけ市場価値が上がり、リモートワークや時短など働き方の選択肢が広がります。学習を楽しめるかどうかを、転職前の独学期間で見極めましょう。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 職種別ハードル比較 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">職種別・未経験ハードル比較（どこから入るか）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「エンジニア」と一口に言っても職種はさまざまで、<strong>未経験から入りやすい職種とそうでない職種の差はかなり大きい</strong>のが実情です。最初の職種選びが学習計画と転職難易度を決めるため、まず全体像を比較しましょう。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>職種</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>未経験ハードル</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>特徴・向いている人</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>詳細ガイド</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>QAテスター／QAエンジニア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>低い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>コーディング経験が浅くても始めやすい。丁寧さ・気づく力が武器。テスト設計へ進めば専門職に</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><a href="/articles/qa-tester/" className="underline" style={{ color: "#0891b2" }}>QAテスターガイド</a></td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>サポートエンジニア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>低い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>前職の接客・事務経験を直接活かせるIT業界の入口。製品知識を深めて上位職へ進める</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><a href="/articles/support-engineer/" className="underline" style={{ color: "#0891b2" }}>サポートエンジニアガイド</a></td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>インフラエンジニア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>中</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>監視・運用から段階的にキャリアを積める。資格（LinuC・AWS認定など）が評価に直結しやすい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><a href="/articles/infrastructure/" className="underline" style={{ color: "#0891b2" }}>インフラエンジニアガイド</a></td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>フロントエンドエンジニア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>中</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>成果が画面に見えるため学習を継続しやすい。人気職種ゆえ未経験枠の競争は激しめ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><a href="/articles/frontend/" className="underline" style={{ color: "#0891b2" }}>フロントエンドガイド</a></td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>バックエンドエンジニア</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>中〜高</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>学習範囲は広いが、DB設計など一度身につけたスキルが長く資産になる。腰を据えて学べる人向け</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><a href="/articles/backend/" className="underline" style={{ color: "#0891b2" }}>バックエンドガイド</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>2つの入り方：「直行ルート」と「段階ルート」</h3>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li><strong>直行ルート：</strong>学習時間を確保できる人向け。半年〜1年学習し、ポートフォリオを武器にフロントエンドやバックエンドの開発職へ直接応募する。</li>
              <li><strong>段階ルート：</strong>早く業界に入りたい・学習時間が取りにくい人向け。QAテスターやサポートエンジニア、インフラの運用監視からIT業界に入り、働きながら学んで開発職へ近づく。収入を絶やさずキャリアチェンジできるのが利点。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec4 学習ロードマップ */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">学習ロードマップ（期間の目安つき）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              Web開発職を目指す場合の標準的な流れです。<strong>1日2〜3時間の学習を前提に、合計6ヶ月〜1年</strong>が目安。重要なのは「あれこれ手を出さず、1つずつ完了させる」ことです。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "Webの仕組みを理解する（〜2週間）", "ブラウザとサーバーの関係、リクエスト/レスポンス、HTML/CSSの基礎。最初に全体像をつかむと、後の学習で「いま何をやっているか」を見失いません。"],
              ["STEP2", "プログラミング言語を1つ習得（2〜3ヶ月）", "フロントエンド志望ならJavaScript、バックエンド志望ならPython・Ruby・PHPが学びやすい定番。基本文法から簡単なプログラム作成まで。言語の浮気は挫折のもとです。"],
              ["STEP3", "データベースとSQLの基礎（〜1ヶ月）", "データの保存・検索はどの職種でも使う土台。テーブルの考え方と基本的なSQL（SELECT/INSERT/UPDATE）を押さえます。"],
              ["STEP4", "フレームワークでWebアプリを作る（2〜3ヶ月）", "React（フロントエンド）やDjango・Rails・Laravel（バックエンド）など、言語に対応したフレームワークを1つ。チュートリアルを写経で終わらせず、自分で小さな改造を加えるのがコツ。"],
              ["STEP5", "Gitと公開の仕組みを覚える（〜2週間）", "GitHubでのコード管理は実務の必須スキルであり、採用担当者が学習実績を確認する場所でもあります。学習の最初期から日々の成果をpushする習慣をつけると一石二鳥です。"],
              ["STEP6", "ポートフォリオ制作（1〜2ヶ月）", "ログイン・データの登録/編集/削除（CRUD）を備えた小さなWebアプリを作って公開。ここまで来れば応募準備は完了です（詳細はセクション6）。"],
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
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            ※ QAテスターやサポートエンジニアなど段階ルートの職種を目指す場合は、STEP1〜3レベルの基礎学習＋ITパスポートや基本情報技術者などの資格学習に置き換えると効率的です。
          </p>
        </div>
      </section>

      {/* sec5 独学vsスクール・資格 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">独学かスクールか・資格は必要か</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              学習手段は大きく「独学」と「プログラミングスクール」の2択です。どちらにも明確な向き不向きがあります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>&nbsp;</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>独学</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>プログラミングスクール</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>費用</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>無料〜数千円/月（書籍・学習サイト）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>数十万円規模（給付金対象講座なら自己負担を圧縮できる場合も）</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>期間の目安</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>6ヶ月〜1年</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>3〜6ヶ月</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>つまずき対応</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>自力で検索・解決（ここで挫折しやすい）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>メンターに質問できる</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>向いている人</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>費用を抑えたい・自分で調べて解決するのが苦でない人</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>効率優先・期限を決めて確実に転職したい人</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              おすすめの順番は「<strong>まず独学で1〜2ヶ月試す → 続けられそうか・好きかを確認してからスクールを検討</strong>」。適性を確かめる前に大金を払うのはリスクが大きいためです。スクールの選び方・費用相場・給付金の使い方は<a href="/articles/programming-school/" className="underline font-bold" style={{ color: "#0891b2" }}>プログラミングスクール選びガイド</a>で詳しく解説しています。
            </p>
            <p>
              資格については、開発職なら「必須ではないがあれば学習の証明になる」、インフラ・サポート系なら「評価に直結しやすい」のが実情です。国家試験の<a href="/articles/cert-kihonjoho/" className="underline font-bold" style={{ color: "#0891b2" }}>基本情報技術者試験</a>はIT全般の基礎を体系的に学べるため、未経験者の知識の土台づくりと書類選考対策を兼ねられます。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 ポートフォリオ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ポートフォリオの作り方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              職務経歴で語れない未経験者にとって、ポートフォリオ（自作アプリ）は<strong>実質的な職務経歴書</strong>です。採用担当者は「完成度」よりも「自分の頭で考えて作ったか」「学習を継続できる人か」を見ています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>最低限そろえる要素</h3>
              <ul className="space-y-2 text-sm text-text-light leading-relaxed">
                <li>・ログイン機能（ユーザー認証）</li>
                <li>・データの登録・一覧・編集・削除（CRUD）</li>
                <li>・公開URL（実際に触れる状態）</li>
                <li>・GitHubのソースコードとREADME（何を・なぜ作ったか）</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>評価が上がる工夫</h3>
              <ul className="space-y-2 text-sm text-text-light leading-relaxed">
                <li>・「自分や身近な人の困りごと」を解決する題材を選ぶ（動機を面接で語れる）</li>
                <li>・チュートリアルの写経で終わらせず、独自機能を1つ足す</li>
                <li>・コミット履歴を継続的に残す（学習の継続性の証明になる）</li>
                <li>・つまずいた点と解決方法をREADMEやブログに書く</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            数は1〜2個で十分です。中途半端な作品を並べるより、説明できる作品を1つ磨き込むほうが選考では強く働きます。
          </p>
        </div>
      </section>

      {/* sec7 転職活動 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職活動の進め方と求人の見極め方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ポートフォリオができたら転職活動です。期間の目安は1〜3ヶ月。未経験者の転職活動で最も重要なのは、<strong>「未経験可」求人の中身を見極めること</strong>です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>企業タイプ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>特徴</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>未経験者が確認すべき点</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>自社開発</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>自社サービスを開発。腰を据えてスキルを積みやすい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>未経験枠は人気で競争率が高い。教育体制・メンター制度の有無</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafb" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>受託開発</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>顧客のシステムを開発。多様な案件で経験を積める</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>納期によっては繁忙の波がある。残業時間の実態</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>SES（客先常駐）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>顧客先に常駐して働く。未経験可の求人が最も多い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>配属先により業務内容の差が極端（開発に携われない現場もある）。配属実績と希望の通りやすさを必ず確認</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>女性が面接前に確認しておきたいポイント</h3>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li>・研修・OJT体制が具体的に説明されるか（「現場で覚えて」だけの会社は要注意）</li>
              <li>・産休育休の取得実績・復帰率、リモートワークの運用実態</li>
              <li>・女性エンジニアの在籍数とロールモデルの有無</li>
              <li>・求人票に出ないこれらの実態は、転職エージェント経由で確認するのが確実（次セクション）</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績。スピーディーなマッチングで最短2週間での内定実績も。年収交渉力にも定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>女性特化型</span>
              </div>
              <p className="text-sm text-text-light">女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT業界の転職支援に強み。未経験からベテランまで幅広い層の求人を保有。レスポンスの速さと手厚いサポートに定評があります。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 成功事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Aさん（20代後半・事務職→バックエンド）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">一般事務（IT未経験）</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p>
                  <p className="text-sm font-bold">自社開発企業のバックエンドエンジニア（Python）</p>
                </div>
              </div>
              <p className="text-sm text-text-light">働きながら独学でPythonを開始し、3ヶ月続いたことを確認してからスクールへ。CRUD＋ログイン機能付きのWebアプリをポートフォリオとして公開し、約10ヶ月で内定。IT特化型エージェント経由で「教育体制が整った未経験可求人」に絞って応募したことが、入社後のミスマッチ回避につながりました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>Bさん（30代前半・販売職→QA→開発）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">アパレル販売職（IT未経験）</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p>
                  <p className="text-sm font-bold">QAテスター → 2年後に社内異動で開発エンジニアへ</p>
                </div>
              </div>
              <p className="text-sm text-text-light">長時間の学習時間を確保しづらかったため「段階ルート」を選択。ITパスポート取得とテスト技法の基礎学習でQAテスターとしてIT業界に入り、収入を維持しながら社内でプログラミングを学習。テスト自動化の担当を経て開発チームへ異動しました。女性特化型エージェントで産休育休実績のある企業を選んだことで、長く働ける環境も確保しています。</p>
            </div>
          </div>
          <p className="text-sm text-text-light mt-4">※ 成功パターンを再構成したモデルケースです。共通点は「学習の証拠を作ってから応募」「エージェントで企業の実態を確認」の2点です。</p>
        </div>
      </section>

      {/* sec10 FAQ */}
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

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考データ</h2>
          <ul className="space-y-2 text-sm text-text-light leading-relaxed">
            <li>・出典: 経済産業省「IT人材需給に関する調査」（みずほ情報総研、2019年4月公表）— 2030年に最大約79万人のIT人材不足の試算（2026年6月参照）</li>
            <li>・出典: パーソルキャリア「doda転職求人倍率レポート」2026年4月発行版 — 2026年3月の転職求人倍率は全体2.39倍、エンジニア（IT・通信）10.68倍（2026年6月参照）</li>
            <li>・出典: ヒューマンリソシア「データで見る世界のITエンジニアレポート」— 日本のITエンジニアの女性比率18.8%（2023年データ）、OECD平均20.6%、33カ国中17位（2026年6月参照）</li>
          </ul>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/programming-school/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>プログラミングスクール選びガイド</h3>
              <p className="text-sm text-text-light">費用相場と失敗しない選び方</p>
            </a>
            <a href="/articles/cert-kihonjoho/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>基本情報技術者試験ガイド</h3>
              <p className="text-sm text-text-light">未経験者の知識の土台づくりに</p>
            </a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの年収ガイド</h3>
              <p className="text-sm text-text-light">平均年収と年収アップの方法</p>
            </a>
            <a href="/articles/how-to-choose/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>エージェント選び方ガイド</h3>
              <p className="text-sm text-text-light">失敗しない5つのポイント</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
