import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "プログラミングスクールは必要？女性エンジニア転職での選び方と給付金活用【2026年】",
  description:
    "プログラミングスクールは本当に必要かを中立的に解説。独学・民間スクール・公的職業訓練の比較と、専門実践教育訓練給付（最大80%・年間上限64万円）・経産省リスキリング支援（最大70%・上限56万円）・求職者支援制度（無料訓練＋月10万円）など実在の給付金制度、誇大広告に惑わされないスクール選び7つのチェックポイントを出典付きで紹介します。",
  alternates: { canonical: "/articles/programming-school/" },
  openGraph: {
    title: "プログラミングスクールは必要？女性エンジニア転職での選び方と給付金活用【2026年】",
    description:
      "独学・民間スクール・公的職業訓練の比較と、教育訓練給付（最大80%）・経産省リスキリング支援（最大56万円）・求職者支援制度（無料訓練＋月10万円）など実在の給付金制度を出典付きで解説。誇大広告に惑わされないスクール選び7つのチェックポイントを紹介。",
    url: "https://women-engineer.com/articles/programming-school/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "プログラミングスクールは必要？女性エンジニア転職での選び方と給付金活用【2026年】",
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
    "独学・民間スクール・公的職業訓練の比較と、専門実践教育訓練給付（最大80%・年間上限64万円）・経産省リスキリング支援（最大70%・上限56万円）・求職者支援制度（無料訓練＋月10万円）など実在の給付金制度を出典付きで解説。誇大広告に惑わされないスクール選び7つのチェックポイントを紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/programming-school/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "プログラミングスクールに通わないとエンジニアになれませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ、スクールは必須ではありません。独学で転職に成功する人も、求職者支援制度（ハロートレーニング）や東京都の女性ITエンジニア育成事業など無料の公的職業訓練を使う人もいます。スクールが向くのは「独学で2回以上挫折した」「質問相手と学習ペースの強制力にお金を払う価値を感じる」「転職活動の伴走支援まで一体で受けたい」という人です。逆に、自分で計画を立てて学習を継続できる人は、書籍や学習サイト中心の独学でも十分に到達できます。採用企業が見るのは「どこで学んだか」ではなく、ポートフォリオなどの成果物と基礎力です。",
      },
    },
    {
      "@type": "Question",
      name: "プログラミングスクールの費用はどのくらい？給付金でいくら戻りますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "費用は講座によって幅が大きく、短期の入門講座で数万円台から、転職支援付きの長期コースでは数十万円規模になるのが一般的です。重要なのは定価ではなく給付金適用後の実質負担で比較すること。厚生労働省の専門実践教育訓練給付の対象講座なら受講費用の最大80%（年間上限64万円）、経済産業省のリスキリングを通じたキャリアアップ支援事業の対象講座なら最大70%（上限56万円）の支援を受けられます。例えば50万円の対象講座なら、条件を満たせば実質10万〜15万円程度まで下がる計算です。受講したい講座が対象かどうかは、厚生労働省の教育訓練講座検索システムや各事業の公式サイトで必ず事前に確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "「転職成功率98%」のような数字は信用していいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "数字そのものより「分母」を確認してください。転職成功率の分母が「受講者全員」なのか「カリキュラムを完走し、かつスクールの転職支援を利用した人だけ」なのかで意味はまったく変わります。途中離脱者や転職支援を使わなかった人を除いた分母なら、高い数値が出るのは当然です。集計期間・対象コース・「転職成功」の定義（雇用形態を問わないのか、正社員のみか、SES企業への就職を含むのか）まで公式サイトの注記で確認し、明示されていなければ無料カウンセリングで直接質問しましょう。誠実なスクールほど定義を開示しています。",
      },
    },
    {
      "@type": "Question",
      name: "お金をかけずにプログラミングを学べる公的な選択肢はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "あります。代表は厚生労働省の求職者支援制度で、雇用保険を受給できない離職者などが無料の職業訓練（ハロートレーニング）を受講でき、本人収入月8万円以下・世帯収入月25万円以下などの条件を満たせば月10万円の職業訓練受講給付金も支給されます。東京都在住なら、原則39歳以下の女性を対象に受講料無料・PCレンタル無料で6か月のIT訓練と就職支援を一体提供する「女性ITエンジニア育成事業」もあります。いずれも無料な分、募集期間・定員・対象要件があるため、公式サイトやハローワークで最新の募集状況を確認してください。",
      },
    },
    {
      "@type": "Question",
      name: "給付金の対象講座かどうかはどうやって確認できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "教育訓練給付（一般・特定一般・専門実践）の対象講座は、厚生労働省の「教育訓練講座検索システム」で講座名やスクール名から検索できます。IT分野では、経済産業大臣が認定する「第四次産業革命スキル習得講座（Reスキル講座）」のうち厚生労働大臣の指定を受けた講座が専門実践教育訓練給付の対象になっています。経産省リスキリング支援事業の対象講座は事業公式サイトの講座検索で確認できます。注意点は、同じスクールでも対象講座と対象外講座が混在すること、給付には雇用保険の加入期間などの本人側の条件があることの2つです。受講申込の前にハローワークで自分の受給資格も確認しておくと確実です。",
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
    { "@type": "ListItem", position: 3, name: "プログラミングスクールは必要？選び方と給付金活用", item: "https://women-engineer.com/articles/programming-school/" },
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
              { label: "プログラミングスクールの選び方と給付金活用" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#c15f47" }}
            >
              学習ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              プログラミングスクールは必要？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性エンジニア転職での選び方と給付金活用【2026年】
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
                <span><strong>スクールは必須ではありません</strong>。自分で学習計画を立てて継続できる人は独学で足ります。スクールが向くのは「独学で挫折した経験がある」「質問環境とペースの強制力に投資したい」「転職支援まで一体で受けたい」人です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>通う場合は<strong>定価ではなく「給付金適用後の実質負担」で比較</strong>を。専門実践教育訓練給付なら受講費用の<strong>最大80%（年間上限64万円）</strong>、経産省リスキリング支援なら<strong>最大70%（上限56万円）</strong>の支援があります（出典: 厚生労働省・経済産業省）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>無料の公的選択肢</strong>もあります。求職者支援制度（無料訓練＋条件を満たせば月10万円の給付金）や、<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>東京都の女性ITエンジニア育成事業</a>（受講料無料・6か月・就職支援つき）が代表です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span>
                <span>スクール選びは「転職成功率」の数字を鵜呑みにせず、<strong>分母・定義・集計期間の確認</strong>を含む7つのチェックポイントで比較するのが安全です。採用企業が見るのはスクール名ではなく成果物と基礎力です。</span>
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
                  1. プログラミングスクールは必要か：独学で足りる人・スクールが向く人
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>
                  2. 独学・民間スクール・公的職業訓練の比較表
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>
                  3. 給付金・公的支援制度で実質負担を下げる（最大80%支給）
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>
                  4. スクール選び7つのチェックポイント（誇大広告の見分け方）
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>
                  5. 受講を最大限活かす学び方と卒業後の転職活動
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>
                  6. おすすめ転職エージェント
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>
                  7. よくある質問
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>
                  8. 出典・参考資料
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 スクールは必要か */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">プログラミングスクールは必要か：独学で足りる人・スクールが向く人</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              最初に押さえたいのは、<strong>プログラミングスクールはエンジニア転職の必須条件ではない</strong>ということです。採用企業が選考で見るのは「どこで学んだか」ではなく、ポートフォリオなどの成果物・基礎力・学習の継続力です。独学で転職する人も、無料の公的職業訓練を経て転職する人も実際にいます。スクールは「お金で学習環境と伴走を買う」選択肢の1つに過ぎません。
            </p>
            <p>
              一方で、市場環境は学び直しに追い風です。経済産業省「IT人材需給に関する調査」では<strong>2030年に最大約79万人のIT人材不足</strong>が試算されており（出典: 経済産業省、2026年6月参照）、国も後述する給付金・支援制度でリスキリングを後押ししています。「学ぶこと」自体の価値は明確なので、問題は<strong>自分に合う学び方をどう選ぶか</strong>です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>独学で足りる可能性が高い人</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>自分で計画を立てて継続できる</strong> — 資格学習や趣味で「数か月の独習を完走した」経験がある</li>
                <li>・<strong>調べて解決するのが苦にならない</strong> — エラーの自力解決はエンジニアの日常業務そのもの</li>
                <li>・<strong>費用を最小化したい</strong> — 書籍・学習サイト中心なら月数千円程度から始められる</li>
                <li>・<strong>まず適性を確かめたい段階</strong> — 高額契約の前に、無料教材で「楽しく続くか」を試すのが合理的</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>スクール（または公的訓練）が向く人</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>独学で2回以上挫折した</strong> — 質問できる相手と提出期限という「強制力」は挫折の特効薬になり得る</li>
                <li>・<strong>体系的なカリキュラムで最短距離を進みたい</strong> — 何をどの順で学ぶか迷う時間を買う発想</li>
                <li>・<strong>転職支援まで一体で受けたい</strong> — 書類添削・面接対策・求人紹介がセットの講座もある</li>
                <li>・<strong>学習時間の確保に制約がある</strong> — 育児・仕事と両立するなら、ペース設計をプロに任せる価値がある</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              迷ったら、<strong>「まず無料〜低コストで1〜2か月独学し、続いたら本格投資を判断する」</strong>のが失敗の少ない順序です。適性確認の前に数十万円の契約をするのは順序が逆です。未経験からの学習手順全体は<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験から女性エンジニアになるロードマップ</a>で詳しく解説しています。また、実務経験者がブランク明けに学び直す場合は、ゼロから学ぶスクールよりも「差分のキャッチアップ」が効率的です（<a href="/articles/return-to-work/" className="underline" style={{ color: "#7c3a55" }}>ブランクからの復職ガイド</a>参照）。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 比較表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">独学・民間スクール・公的職業訓練の比較表</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              学び方の選択肢は大きく3つです。費用・期間・向く人を整理します。民間スクールの料金は講座により幅が大きいため、ここではカテゴリとしての一般的な傾向を示します（個別の料金・条件は必ず各スクールの公式サイトで確認してください）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>選択肢</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>費用の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>期間の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>向く人・注意点</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>独学</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>書籍・学習サイトで<strong>月数千円程度〜</strong></td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>6か月〜1年（週10時間前後の学習を想定）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>自走できる人。費用最小・自由度最大だが、挫折率と「何を学ぶべきか迷う時間」が最大のコスト</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>民間プログラミングスクール</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>短期講座は数万円台〜、転職支援付き長期コースは<strong>数十万円規模</strong>が一般的。<strong>給付対象講座なら最大80%支給</strong>で実質負担を大幅に下げられる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1か月〜6か月程度（コースによる）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>質問環境・強制力・転職支援に投資したい人。講座の質・転職支援の中身の差が大きく、<strong>選び方（後述7項目）が成否を分ける</strong></td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold bg-white" style={{ borderColor: "#d9c7b8" }}>公的職業訓練<br />（ハロートレーニング・自治体事業）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}><strong>受講料無料</strong>（テキスト代等は自己負担）。求職者支援制度なら条件を満たせば<strong>月10万円の給付金</strong>も</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>2〜6か月程度（コースによる）</td>
                  <td className="border px-4 py-3 bg-white" style={{ borderColor: "#d9c7b8" }}>離職中・費用をかけられない人。募集期間・定員・選考があり、開講時期を自分で選べない点と、コース内容が求人ニーズと合うかの確認が必要</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「教育訓練給付制度」「求職者支援制度のご案内」（いずれも2026年6月参照）。費用・期間の目安はカテゴリ一般の傾向であり、個別講座の条件は各公式サイトでご確認ください。
          </p>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>組み合わせも有効</h3>
            <p className="text-sm text-text-light leading-relaxed">
              3択のどれか1つに決める必要はありません。「独学で基礎文法→公的訓練やスクールで実践と転職支援」「スクールで学びつつ国家試験の<a href="/articles/cert-kihonjoho/" className="underline" style={{ color: "#7c3a55" }}>基本情報技術者試験</a>を並行して客観的な基礎力を証明する」など、組み合わせることで費用対効果を高められます。東京都在住で条件が合う方は、無料で訓練＋就職支援を一体で受けられる<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>女性ITエンジニア育成事業</a>を先に検討する価値があります。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 給付金・支援制度 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">給付金・公的支援制度で実質負担を下げる（最大80%支給）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              スクール検討で最も差がつくのがここです。国はリスキリング支援を拡充しており、<strong>2024年10月には教育訓練給付の給付率が最大80%へ引き上げ</strong>られました。同じ講座でも、給付対象かどうか・自分が受給条件を満たすかどうかで実質負担は数倍変わります。<strong>「定価」ではなく「給付適用後の実質負担」で比較する</strong>のが鉄則です（いずれの制度も雇用保険の加入期間・収入などの支給条件があります）。
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
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受講費用の50%（年間上限40万円）を受講中に支給。資格取得して1年以内に就職等で70%、さらに賃金が5%以上上昇すると<strong>最大80%（年間上限64万円）</strong>。IT分野では経産大臣認定の「第四次産業革命スキル習得講座（Reスキル講座）」のうち厚労大臣指定の講座などが対象</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>雇用保険の加入期間など条件を満たす在職者・離職者。離職後も一定期間は対象になり得る</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>特定一般・一般教育訓練給付金<br />（厚生労働省）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>特定一般は受講費用の40%（資格取得して就職等で<strong>最大50%</strong>）、一般は20%を支給。短期・入門レベルの講座はこちらが対象のことが多い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>同上。短期講座・資格講座向け</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>リスキリングを通じたキャリアアップ支援事業<br />（経済産業省）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>キャリア相談＋IT等の講座受講＋転職支援を一体提供。受講修了で費用の50%（上限40万円）、転職して1年継続でさらに20%（上限16万円）＝<strong>最大70%・上限56万円</strong>。事業は令和8年度末まで継続予定</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>在職中の労働者（雇用形態問わず）。転職を前提とした学び直し向け</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>求職者支援制度／ハロートレーニング<br />（厚生労働省）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}><strong>無料の職業訓練</strong>（テキスト代等除く）を受講でき、本人収入月8万円以下・世帯収入月25万円以下などの条件を満たせば<strong>月10万円の職業訓練受講給付金</strong>＋通所手当を支給</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>雇用保険を受給できない離職者（長期離職後の再就職者・専業主婦からの再就職など）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>東京都「女性ITエンジニア育成事業」<br />（東京都）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}><strong>受講料無料・PCレンタル無料</strong>。eラーニング主体＋月2回の集合型訓練（6か月）と就職支援を一体提供。託児サービスあり。詳細は<a href="/articles/tokyo-women-training/" className="underline" style={{ color: "#7c3a55" }}>解説記事</a>を参照</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>原則39歳以下の女性で、求職中または非正規雇用で就業中、都内IT企業等への正社員就職を希望する方</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「教育訓練給付制度」、厚生労働省「求職者支援制度のご案内」、経済産業省「リスキリングを通じたキャリアアップ支援事業」、経済産業省「第四次産業革命スキル習得講座認定制度」、東京都「令和8年度女性ITエンジニア育成事業」公式サイト（いずれも2026年6月参照）
          </p>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>給付金活用の3ステップ</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>対象講座を確認</strong> — 厚生労働省「教育訓練講座検索システム」で受講したい講座が給付対象か検索。経産省リスキリング支援は事業公式サイトの講座検索で確認。同じスクールでも対象・対象外の講座が混在します</li>
              <li>② <strong>自分の受給資格を確認</strong> — 教育訓練給付は雇用保険の加入期間などの条件あり。受講申込前にハローワークで支給要件照会を。専門実践は原則受講開始1か月前までに手続きが必要です</li>
              <li>③ <strong>実質負担で比較</strong> — 「定価50万円・給付対象（最大80%）」と「定価30万円・対象外」なら前者の実質負担のほうが小さくなり得ます。支給のタイミング（一部は修了・転職後）も資金計画に織り込みましょう</li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            離職中で雇用保険を受給できない方は求職者支援制度＋ハローワーク、在職中で転職前提の方は経産省リスキリング支援、本格的な長期講座なら専門実践教育訓練給付、と<strong>自分の就業状態から逆引きする</strong>のが早道です。ブランクからの学び直しに使う場合の制度比較は<a href="/articles/return-to-work/" className="underline" style={{ color: "#7c3a55" }}>復職ガイドの支援制度の章</a>でも解説しています。
          </p>
        </div>
      </section>

      {/* sec4 7つのチェックポイント */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">スクール選び7つのチェックポイント（誇大広告の見分け方）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              当サイトでは特定のスクールの優劣は断定しません。スクールの価値は「あなたの状況（予算・時間・目標職種）に合うか」で決まるからです。その代わり、<strong>どのスクールにも共通して使える確認項目</strong>を7つに整理しました。無料カウンセリングは「勧誘を受ける場」ではなく「こちらが質問する場」と捉えて、以下を確認しましょう。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>1. 給付金の対象講座か（実質負担がまったく変わる）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                前章の通り、専門実践教育訓練給付の対象なら最大80%、経産省リスキリング支援なら最大70%の支援があります。厚生労働省の教育訓練講座検索システムで講座単位で確認を。対象外の高額講座を選ぶ合理的な理由があるかを自問しましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>2. 「転職成功率」の分母と定義（誇大広告の最重要チェック）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                「転職成功率98%」のような数字は、分母が「受講者全員」か「完走して転職支援を利用した人のみ」かで意味が激変します。集計期間・対象コース・「成功」の定義（正社員のみか、雇用形態不問か）の注記を確認し、明示がなければ直接質問を。<strong>誠実なスクールほど定義を開示しています</strong>。回答を濁す場合は判断材料が無いものとして扱いましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>3. 転職支援の中身（「支援あり」の一言で済ませない）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                書類添削・模擬面接・求人紹介のどこまでをやるのか、紹介求人は自社経由のみか外部エージェント併用可か、紹介先の職種・企業タイプ（自社開発／受託／SES）の傾向はどうかを確認。「転職保証」がある場合は、保証の適用条件（年齢・居住地・紹介求人への応募義務など）を契約前に必ず読み込みましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>4. 総額・支払い方法・中途解約の条件</h3>
              <p className="text-sm text-text-light leading-relaxed">
                受講料以外の費用（入会金・教材費・延長料金）を含む総額と、分割払いの手数料を確認。中途解約時の返金規定も契約前に必ず確認しましょう。なお、特定商取引法の要件を満たす契約は法定書面の受領日から8日以内ならクーリング・オフが可能です。契約トラブルで困ったときは消費者ホットライン「188」に相談できます（出典: 国民生活センター、2026年6月参照）。<strong>借金やローンを組ませる前提の強い勧誘を受けたら、その場で契約しないこと</strong>。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>5. カリキュラムが「成果物」につながるか</h3>
              <p className="text-sm text-text-light leading-relaxed">
                講義を視聴するだけのカリキュラムでは選考で戦えません。オリジナルのポートフォリオ（チュートリアルの模写ではない自分の作品）を作る工程があるか、現場で使われる技術（Git・チーム開発の作法など）を扱うかを確認しましょう。卒業生の成果物が公開されていれば、到達レベルの実物確認ができます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>6. 質問環境とメンターの体制</h3>
              <p className="text-sm text-text-light leading-relaxed">
                スクールに払う費用の大部分は「質問できる環境」への対価です。質問への回答時間帯と速度、メンターは現役エンジニアか、担当は固定か毎回変わるか、を確認。育児や仕事と両立する場合は、夜間・休日の質問対応やレッスン振替の柔軟さが完走率を左右します。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>7. 必要な学習時間と自分の生活の整合</h3>
              <p className="text-sm text-text-light leading-relaxed">
                コースの想定学習時間（週何時間×何か月）を聞き、自分のカレンダーに本当に確保できるか先に検証しましょう。完走できなければどんな名門カリキュラムも無意味で、返金もされないのが普通です。参考として、東京都の育成事業は約142〜148時間／6か月＝週6時間前後の継続を想定しています（出典: 令和8年度女性ITエンジニア育成事業 公式サイト、2026年6月参照）。
              </p>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#fff7ed", border: "2px solid #c15f47" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>こんな勧誘・広告には立ち止まる</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・「誰でも」「必ず」「簡単に」高収入・転職成功をうたう（成果は本人の学習量に依存します）</li>
              <li>・「今日契約すれば割引」と即決を迫る（給付金の事前手続きと両立しない急かし方は不自然です）</li>
              <li>・卒業生の年収例だけを強調し、分母・条件を示さない</li>
              <li>・受講費用のためのローン・借金を当然のように勧める</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 受講を活かす */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">受講を最大限活かす学び方と卒業後の転職活動</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              どの学び方を選んでも、最終的に選考で評価されるのは同じものです。スクール・訓練を「受けること」がゴールにならないよう、次の3点を受講中から意識しましょう。
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. カリキュラム＋αの「自分の作品」を作る</h3>
              <p className="text-sm text-text-light">
                課題をこなすだけでは、同じスクールの卒業生全員と同じ成果物になります。学んだ技術で<strong>自分の課題を解決する小さなオリジナル作品</strong>を1つ作り、GitHubで公開しましょう。採用側はチュートリアルの完走よりも「自分で考えて作った形跡」を見ています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 客観的な基礎力の証明を並行する</h3>
              <p className="text-sm text-text-light">
                スクールの修了証は採用市場での通用度にばらつきがありますが、国家試験は評価が安定しています。<a href="/articles/cert-kihonjoho/" className="underline" style={{ color: "#7c3a55" }}>基本情報技術者試験</a>を学習と並行すれば、コンピュータサイエンスの土台が固まり、未経験採用の書類選考でも基礎力の客観証明になります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 転職活動はスクールの紹介求人「だけ」に頼らない</h3>
              <p className="text-sm text-text-light">
                スクールや訓練の紹介求人は選択肢の一部に過ぎません。IT特化型・女性特化型の転職エージェントを併用すれば、未経験可・研修体制あり・産休育休実績ありといった軸で求人を比較できます。エージェントは無料で利用でき、応募先の幅が広がるほど「学んだスキルを活かせる企業」に出会う確率は上がります。応募〜内定の全体像は<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験転職ロードマップ</a>を参照してください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec6 エージェント */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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

      {/* sec7 FAQ */}
      <section id="sec7" className="py-10">
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

      {/* sec8 出典 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>・出典: 厚生労働省「教育訓練給付制度」（2026年6月参照）— 専門実践教育訓練給付の給付率最大80%（年間上限64万円、2024年10月改正）、特定一般最大50%、一般20%。対象講座は「教育訓練講座検索システム」で検索可能</li>
            <li>・出典: 経済産業省「リスキリングを通じたキャリアアップ支援事業」（2026年6月参照）— キャリア相談・講座受講・転職支援の一体提供、受講費用の最大70%（上限56万円）の補助、事業は令和8年度末まで継続予定</li>
            <li>・出典: 経済産業省「第四次産業革命スキル習得講座認定制度（Reスキル講座）」（2026年6月参照）— 経産大臣認定のIT・データ分野講座のうち要件を満たすものが専門実践教育訓練給付の対象</li>
            <li>・出典: 厚生労働省「求職者支援制度のご案内」（2026年6月参照）— 無料の職業訓練と職業訓練受講給付金（月10万円。本人収入月8万円以下・世帯収入月25万円以下等の条件）</li>
            <li>・出典: 東京都「令和8年度女性ITエンジニア育成事業」公式サイト（2026年6月参照）— 受講料無料・PCレンタル無料、原則39歳以下の女性対象、6か月（約142〜148時間）の訓練と就職支援</li>
            <li>・出典: 経済産業省「IT人材需給に関する調査」（2026年6月参照）— 2030年に最大約79万人のIT人材不足の試算</li>
            <li>・出典: 国民生活センター「副業のためのオンライン講座を借金して契約したが、クーリング・オフできるか（消費者トラブル解説集）」（2026年6月参照）— 特定商取引法に基づくクーリング・オフ（法定書面受領日から8日以内）、消費者ホットライン188</li>
          </ul>
          <p className="text-xs text-text-light mt-4">
            ※ 本記事の制度数値は上記の公的資料に基づきます。給付金・支援制度には雇用保険の加入期間・収入・資産等の支給条件があり、内容は改正されることがあります。利用前に必ず各制度の公式サイトとハローワークで最新の条件をご確認ください。個別スクールの料金・カリキュラム・転職支援の内容は各社公式サイトで直接ご確認ください。
          </p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/tokyo-women-training/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                東京都の女性ITエンジニア育成事業
              </h3>
              <p className="text-sm text-text-light">受講料無料の都の訓練。内容・費用・申込方法</p>
            </a>
            <a
              href="/articles/beginner/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                未経験から女性エンジニアになるには
              </h3>
              <p className="text-sm text-text-light">現実のロードマップと職種の選び方</p>
            </a>
            <a
              href="/articles/return-to-work/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                ブランクからの復職・再就職ガイド
              </h3>
              <p className="text-sm text-text-light">学び直しと支援制度の活用ロードマップ</p>
            </a>
            <a
              href="/articles/cert-kihonjoho/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                基本情報技術者試験ガイド
              </h3>
              <p className="text-sm text-text-light">ITの土台を証明する国家資格</p>
            </a>
            <a
              href="/articles/certification/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                女性エンジニアの資格ガイド
              </h3>
              <p className="text-sm text-text-light">目的別の資格マップと優先順位</p>
            </a>
            <a
              href="/articles/reskilling-leave/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                育休中のスキルアップ・リスキリング
              </h3>
              <p className="text-sm text-text-light">復職・転職に向けた学び方</p>
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
