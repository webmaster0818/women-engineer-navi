import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "SESと自社開発の違い｜女性エンジニアのキャリアへの影響と見極め方【2026年】",
  description:
    "SES・受託・自社開発の違いを契約形態（準委任・請負）から正確に解説。日本のIT人材の約7割がベンダー側所属（IPA）という構造、多重下請け（経産省資料）、産育休・リモートが常駐先に左右される仕組みまで、女性エンジニアのキャリア視点で公平に比較します。",
  alternates: { canonical: "/articles/ses-vs-jisha/" },
  openGraph: {
    title: "SESと自社開発の違い｜女性エンジニアのキャリアへの影響と見極め方【2026年】",
    description:
      "SES・受託・自社開発の違いを契約形態から正確に解説。産育休・リモートの決まり方など女性エンジニア視点の固有論点と、求人票での見極めチェックリストつき。",
    url: "https://women-engineer.com/articles/ses-vs-jisha/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SESと自社開発の違い｜女性エンジニアのキャリアへの影響と見極め方【2026年】",
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
    "SES・受託・自社開発の違いを契約形態から正確に解説。産育休・リモートの決まり方など女性エンジニア視点の固有論点と、求人票での見極めチェックリストつき。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/ses-vs-jisha/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "「SESはやめとけ」と言われるのはなぜですか？本当ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「やめとけ」の根拠は多くの場合、SESという仕組みそのものではなく、多重下請け構造の深い位置にいる一部企業の待遇・案件の質の問題です。経済産業省の資料でも、多重下請けの下層で労働環境や待遇が悪化しやすい課題が指摘されています。一方で、SESには未経験の入口が広い・多様な現場を経験できるという実利もあります。重要なのは「SESか否か」ではなく、商流の浅さ・還元率や評価制度の透明性・案件選択の自由度など「その会社の質」を見極めることです。",
      },
    },
    {
      "@type": "Question",
      name: "SESと派遣の違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最大の違いは指揮命令権の所在です。SES（準委任契約）ではエンジニアへの指揮命令権は所属するSES企業にあり、常駐先が直接業務指示を出すことはできません。一方、労働者派遣では派遣先企業が直接指揮命令できます。SES契約なのに常駐先が直接指揮命令している状態は「偽装請負」と呼ばれ、労働者派遣法に抵触するおそれがあります。働く側から見ると、現場の実態が似ていても法的な保護や責任の枠組みが異なるため、入社前にどの契約形態で常駐するのかを確認しておくことが大切です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の場合、SESから始めるのはありですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "選択肢として十分ありです。未経験可の求人はSESに最も多く、実務経験を積む入口として機能してきた実態があります。ただし配属先によって業務内容の差が極端で、テスト実行や運用監視だけが続くと開発スキルが貯まりにくいのも事実です。応募前に「未経験者の配属実績（具体的な業務内容）」「案件希望の通りやすさ」「研修期間と内容」の3点を確認し、入社後も2〜3年で経験を棚卸しして次のステップを考える前提で入るのがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "SES企業でも産休・育休は取れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "取れます。産休・育休は雇用主（所属するSES企業）との関係で法律上保障される権利であり、常駐先の意向で左右されるものではありません。実際、育児休業取得率は女性86.6%（厚生労働省・令和6年度雇用均等基本調査）と定着しています。ただしSES特有の論点は「復帰後」です。時短勤務やリモート希望の社員を受け入れてくれる常駐案件を会社が確保できるかどうかで復帰後の働きやすさが決まるため、面接では取得実績に加えて「復帰した社員がその後どんな案件にアサインされたか」を確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "SESから自社開発企業へ転職するベストなタイミングは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一般に実務経験2〜3年が一つの目安です。設計から実装・テストまで一連の工程を語れる経験が貯まると、経験者採用の土俵に乗りやすくなります。ただし年数より中身が重要で、「どの工程を」「どんな技術で」「どんな役割で」担当したかを職務経歴書で具体化できることが条件です。テスト・運用のみの現場が長く続いている場合は、案件変更を所属会社に交渉する、個人開発で補完するなどの動きを早めに取りましょう。求人票に出ない開発体制の実態はIT特化型エージェント経由で確認するのが確実です。",
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
              { label: "SESと自社開発の違い" },
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
              SESと自社開発の違い
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性エンジニアのキャリアへの影響と見極め方【2026年】
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
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>結論：「SESか自社開発か」より先に「契約の仕組み」を理解する。働く場所・スキル・産育休の決まり方はビジネスモデルで構造的に変わる</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li>・SESは<strong>準委任契約</strong>で客先に常駐する働き方、受託は<strong>請負契約</strong>で成果物を納める働き方、自社開発は<strong>自社サービス</strong>を作る働き方。どれが上という話ではなく、収益の仕組みが違います。</li>
              <li>・日本ではIT人材の<strong>約7割がベンダー側（IT企業）に所属</strong>しており（IPA調査）、SES・受託が多いのは個人の選択以前の産業構造です。</li>
              <li>・女性のキャリア視点での最大の違いは、<strong>リモート可否や復帰後の働き方が「自社の制度」で決まるか「常駐先の方針」に左右されるか</strong>という点です。</li>
              <li>・SESは未経験の入口が広く多様な現場を経験できる一方、多重下請け構造の深い位置の案件では待遇・スキルが伸びにくいリスクも。<strong>「SESかどうか」より「商流の浅さと会社の質」</strong>を見極めましょう（チェックリストはセクション6）。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}
          >
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. SES・受託・自社開発の違い（契約形態から正確に理解する）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. なぜ日本はSESが多いのか（産業構造のデータ）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. SESが向くケースと注意すべき構造</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 自社開発・受託のリアル（理想化しすぎない）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 女性エンジニア固有の論点（産育休・リモートは「どこで」決まるか）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 求人票でのSES見極めチェックリスト</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. キャリア戦略：SESから自社開発への移り方</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 契約形態から理解する */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SES・受託・自社開発の違い（契約形態から正確に理解する）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「SESはやめとけ」「自社開発が勝ち組」といった単純化された言説がSNSにはあふれていますが、転職の判断材料にするには粗すぎます。3つの働き方の本質的な違いは、<strong>会社がどうやって売上を立てているか（ビジネスモデル）と、顧客とどんな契約を結んでいるか（契約形態）</strong>にあります。ここを理解すると、働く場所・スキルの貯まり方・産育休やリモートの決まり方まで、すべて構造的に説明がつきます。
            </p>
            <p>
              <strong>SES（システムエンジニアリングサービス）</strong>は、所属会社が顧客と<strong>準委任契約</strong>（民法上の準委任）を結び、エンジニアの「労働力の提供」に対して時間ベースで報酬を受け取るモデルです。成果物の完成責任は負わず、エンジニアは顧客先（常駐先）で働くのが一般的です。重要なのは、<strong>エンジニアへの指揮命令権は所属するSES企業側にある</strong>こと。常駐先が直接業務指示を出すと、労働者派遣との区分基準（昭和61年労働省告示第37号）に照らして「偽装請負」と判断されるおそれがあります。
            </p>
            <p>
              <strong>受託開発</strong>は、顧客のシステムを<strong>請負契約</strong>中心で開発するモデルです。請負では「成果物の完成」に責任を負うため、納期と品質のプレッシャーがかかる代わりに、開発は基本的に自社オフィスで行われます。SIer（システムインテグレーター）の多くがこの形態です（業界全体像は<a href="/articles/sier-industry/" className="underline font-bold" style={{ color: "#7c3a55" }}>SIer業界ガイド</a>参照）。
            </p>
            <p>
              <strong>自社開発</strong>は、顧客から開発を請け負うのではなく、<strong>自社のサービスやプロダクトそのものが収益源</strong>のモデルです。Web系・SaaS企業が典型で、エンジニアは自社の一員として1つのプロダクトを継続的に開発・改善します（<a href="/articles/web-industry/" className="underline font-bold" style={{ color: "#7c3a55" }}>Web業界ガイド</a>参照）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>比較項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>SES（客先常駐）</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>受託開発</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>自社開発</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>顧客との契約形態</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>準委任契約（労働の提供に対し時間ベースで報酬。完成責任なし）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>請負契約が中心（成果物の完成に責任を負う）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>顧客との開発契約なし（自社サービスが収益源）</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>働く場所</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>常駐先のオフィス等。案件が変わると勤務地も変わる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基本は自社オフィス（一部、客先常駐の工程もある）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自社オフィス・自宅（会社の制度どおり）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>指揮命令権</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>所属会社にある（常駐先の直接指示は偽装請負のおそれ）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自社にある</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自社にある</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>年収の決まり方</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>案件単価×還元率。商流（何次請けか）が深いほど中間マージンが累積し原資が減りやすい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受注額と利益率に連動。元請けか下請けかで差が出やすい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>事業の収益力に連動。伸びている事業なら昇給余地が大きい一方、業績悪化の影響も直接受ける</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>スキルの貯まり方</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>案件次第。多様な業界・技術に触れられる反面、テスト・運用のみ等に偏るリスクも</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>多様な顧客の開発を上流〜下流まで経験しやすい。納期駆動で深掘りの時間は取りにくいことも</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1つのプロダクトを深く。運用・改善・グロースまで一気通貫。技術が自社スタックに偏る面も</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>産育休・リモートの決まり方</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>制度は所属会社のものが適用されるが、日々の働き方（リモート可否等）は常駐先の方針に左右される</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自社制度で決まる。納期前の繁忙期は取得・時短の運用に影響が出ることも</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自社制度がそのまま日々の働き方に直結する</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            ※ 未経験からの転職活動全体の流れと3形態の入門的な整理は<a href="/articles/beginner/" className="underline font-bold" style={{ color: "#7c3a55" }}>未経験からエンジニアになるにはガイド</a>で解説しています。本記事はその「企業タイプ」部分の深掘り版です。
          </p>
        </div>
      </section>

      {/* sec2 産業構造 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">なぜ日本はSESが多いのか（産業構造のデータ）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              転職サイトでエンジニア求人を検索すると、SES・客先常駐の求人が目立つことに気づくはずです。これは偶然ではなく、日本のIT産業の構造そのものを反映しています。
            </p>
            <p>
              IPA（情報処理推進機構）の調査によると、日本ではIT人材の<strong>約7割（2020年時点で73.6%）がITベンダー側の企業に所属</strong>しており、事業会社（ユーザー企業）側は約26%にとどまります。米国はほぼ逆で、IT企業側は35.1%（2021年）、約65%が事業会社側に所属しています。つまり日本では、システムを使う企業が自前でエンジニアを抱えず、外部のIT企業に開発を委託する商習慣が定着しており、その受け皿としてSES・受託という業態が大きく育ちました。
            </p>
            <p>
              さらに、委託された仕事は元請けから二次請け、三次請けへと流れる<strong>多重下請け構造</strong>になりがちです。経済産業省の資料「IT産業における下請の現状・課題について」（2015年）では、IT産業で元請と下請の両方を行う企業が半数を占めること、下請のみの企業も約4社に1社あること、そして<strong>多重下請けの下層では労働環境・雇用条件・待遇が悪化しやすい</strong>課題が指摘されています。SESの待遇問題として語られる話の多くは、実はこの「商流の深さ」の問題です。
            </p>
            <p>
              年収面では、SES・受託・自社開発を直接区分して比較した公的統計は存在しませんが、参考になる公開データとして、dodaの「平均年収ランキング2025」ではIT/通信の業種分類別平均年収はITコンサルティング505万円、ハードウェア/ソフトウェア/パッケージベンダー493万円、システムインテグレータ481万円。SES企業の給与原資は「案件単価×自社の還元率」で決まり、商流が深いほど中間マージンが累積して単価自体が下がるため、<strong>同じ仕事内容でも所属企業の商流ポジションによって年収が変わりうる</strong>のがこの業界の構造的な特徴です。
            </p>
            <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>数字で見る構造</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                  <span>日本のIT人材の約7割（73.6%・2020年）がITベンダー側に所属。米国は約35%で逆の構造</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                  <span>IT産業では元請と下請の両方を行う企業が半数、下請のみの企業も約4社に1社（経産省資料）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                  <span>多重下請けの下層では労働環境・待遇が悪化しやすいことが公的資料でも課題として指摘されている</span>
                </li>
              </ul>
              <p className="text-xs text-text-light mt-4">
                出典: IPA「DX白書2023」情報処理・通信に携わる人材の所属比較（2026年6月参照）／経済産業省 情報処理振興課「IT産業における下請の現状・課題について」（2015年3月、2026年6月参照）／パーソルキャリア「doda平均年収ランキング2025」（2026年6月参照）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 SESの公平な評価 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SESが向くケースと注意すべき構造</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SESという働き方そのものは、悪でも善でもありません。仕組み上の長所と短所がはっきりしているだけです。両面を正確に把握して、自分の状況に合うかを判断しましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>SESが向くケース（仕組み上の長所）</h3>
              <ul className="space-y-3 text-sm text-text-light leading-relaxed">
                <li><strong>・未経験の入口が広い：</strong>時間ベースで対価を得るモデルのため、企業側は完成責任を負わずに人を育てながら現場に出せます。未経験可の求人が3形態の中で最も多いのはこのためです。</li>
                <li><strong>・多様な現場を経験できる：</strong>金融・製造・官公庁など、1社にいながら複数の業界・技術環境を渡り歩けます。「自分が何に向いているかまだ分からない」段階では、これは明確な利点です。</li>
                <li><strong>・大手の現場に入れる：</strong>新卒・中途の正面入口では入りにくい大手企業のプロジェクトに、常駐という形で参画できることがあります。大規模開発の進め方を内側から学べます。</li>
                <li><strong>・残業が常駐先の契約時間で管理されやすい：</strong>精算幅（例: 140〜180時間）が契約で決まっているため、無限残業になりにくい現場も多くあります。</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>注意すべき構造（仕組み上の短所）</h3>
              <ul className="space-y-3 text-sm text-text-light leading-relaxed">
                <li><strong>・働く環境が常駐先依存：</strong>リモート可否、使うPC、職場の雰囲気まで常駐先で決まります。案件が変わるたびに環境がリセットされ、自分でコントロールしにくいのが最大の構造的弱点です。</li>
                <li><strong>・スキルが案件次第で偏る：</strong>テスト実行や運用監視だけの現場に長く置かれると、年数の割に開発経験が貯まらない「経験年数と市場価値のねじれ」が起きえます。</li>
                <li><strong>・商流が深いと待遇が伸びにくい：</strong>三次請け・四次請けの案件は単価が低く、昇給の原資も限られます（前セクションの経産省資料の指摘どおり）。</li>
                <li><strong>・帰属意識・評価の難しさ：</strong>自社の上司が日々の働きを直接見ていないため、評価制度が整っていない会社では頑張りが昇給に反映されにくいことがあります。</li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#efe3d8", border: "1px solid #7c3a55" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong style={{ color: "#7c3a55" }}>ポイント：</strong>同じ「SES」でも、エンド直・元請け直の案件中心で還元率や単価を社員に開示し、案件選択権を持たせる会社と、深い商流の案件に未経験者をまとめて送り込む会社では、働く実態がまったく別物です。「SESだから」で判断せず、<strong>商流・還元の透明性・案件選択の自由度</strong>という会社の質を見てください（見極め方はセクション6）。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 自社開発・受託のリアル */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">自社開発・受託のリアル（理想化しすぎない）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SESの構造的な弱点を知ると「やはり自社開発一択」と思いがちですが、自社開発・受託にもそれぞれの現実があります。隣の芝生を正確に見ておきましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>自社開発のリアル</h3>
              <ul className="space-y-3 text-sm text-text-light leading-relaxed">
                <li><strong>・良い面：</strong>プロダクトに長期で関われる、リモートや時短など自社制度がそのまま働き方になる、改善の成果がユーザーの反応として返ってくる。</li>
                <li><strong>・厳しい面：</strong>中途採用は即戦力前提が基本で、未経験枠は少なく競争率が高い。事業の業績がそのまま雇用・待遇に響く（サービスのクローズ・事業縮小のリスクを直接受ける）。技術スタックが自社のものに固定されがちで、意識しないと技術の幅が狭まる。</li>
                <li><strong>・誤解しやすい点：</strong>「自社開発＝モダンで快適」とは限りません。長年運用された自社システムのレガシー改修が中心の会社も多くあります。</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>受託開発のリアル</h3>
              <ul className="space-y-3 text-sm text-text-light leading-relaxed">
                <li><strong>・良い面：</strong>多様な業界のシステムを要件定義〜リリースまで経験でき、開発の基礎体力がつく。自社オフィス勤務が基本で、SESより環境が安定。</li>
                <li><strong>・厳しい面：</strong>請負契約は完成責任を負うため、納期前の繁忙の波が構造的に避けにくい。プロジェクト末期と育児・介護の繁忙が重なると負荷が高い。</li>
                <li><strong>・誤解しやすい点：</strong>受託会社の中にもSES（準委任での常駐）を併営する企業は多く、「受託開発企業」と書かれていても配属次第で常駐になることがあります。入社後の配属比率を確認しましょう。</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            3形態は「どれが偉い」ではなく、<strong>キャリアの段階によって最適解が変わる選択肢</strong>です。未経験の入口としてのSES→開発経験を積んで受託または自社開発へ、という移行は実際に多いルートですし、逆に自社開発からSES・フリーランス（準委任）に移って単価と自由度を取る人もいます。
          </p>
        </div>
      </section>

      {/* sec5 女性視点 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニア固有の論点（産育休・リモートは「どこで」決まるか）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ライフイベントを見据えてキャリアを設計する場合、3形態の違いは「年収」や「スキル」以上に重要な意味を持ちます。鍵になるのは、<strong>制度の「権利」と日々の「運用」が、別の場所で決まることがある</strong>という点です。
            </p>
            <h3 className="text-xl font-bold mt-8 mb-3">産休・育休：権利は所属会社、復帰後の現実は案件次第（SESの場合）</h3>
            <p>
              まず大前提として、産休・育休は<strong>雇用主（所属会社）との関係で法律上保障される権利</strong>です。SESだから取れない、ということは制度上ありません。育児休業取得率は女性86.6%・男性40.5%（厚生労働省・令和6年度雇用均等基本調査）と、取得自体は社会全体で定着しています。
            </p>
            <p>
              SES特有の論点は<strong>「復帰後」</strong>にあります。自社開発なら復帰後も同じチーム・同じプロダクトに戻り、自社の時短・リモート制度をそのまま使えます。一方SESでは、復帰後に働くのは常駐先です。時短勤務やリモート希望の社員を受け入れる常駐案件を会社の営業が確保できるかどうかで、復帰後の働きやすさが事実上決まります。面接で確認すべきは「育休取得実績がありますか」ではなく、<strong>「復帰した社員は、その後どんな案件に・どんな勤務形態でアサインされましたか」</strong>です。
            </p>
            <h3 className="text-xl font-bold mt-8 mb-3">リモートワーク：業界平均の高さに惑わされない</h3>
            <p>
              総務省の令和6年通信利用動向調査では、<strong>情報通信業のテレワーク導入率は94.3%</strong>と全産業（47.3%）の中で突出しています。ただしこの数字が自分に適用されるかは形態で異なります。自社開発・受託（自社勤務）なら自社の制度どおりですが、SESでは<strong>常駐先のルールが適用される</strong>ため、所属会社が「リモート可」を掲げていても、常駐先が金融機関や官公庁などセキュリティ要件の厳しい現場なら毎日出社になります。求人票の「リモート可」は「リモート可の案件も存在する」という意味で読み、<strong>案件全体の何割がリモート可か・希望は通るか</strong>を確認しましょう。
            </p>
            <h3 className="text-xl font-bold mt-8 mb-3">勤務地の変動と生活設計</h3>
            <p>
              SESは案件が変わると通勤先が変わります。独身期には気にならなくても、保育園の送迎時間から逆算して通勤時間を組む生活では、「次の案件で通勤が片道30分延びる」ことが生活全体に響きます。勤務地の希望をどこまで考慮してもらえるか（通勤時間の上限を約束する制度の有無）は、女性に限らず生活設計を重視する人がSES企業を選ぶ際の重要な確認項目です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>形態別・ライフイベント耐性の確認ポイント</h3>
              <ul className="space-y-2 text-sm text-text-light leading-relaxed">
                <li><strong>・自社開発：</strong>制度＝日々の運用なので、制度の充実度と取得実績をそのまま見ればよい。確認すべきは「エンジニア職での」時短・リモートの実例。</li>
                <li><strong>・受託：</strong>制度は自社のものが使えるが、納期前の繁忙と両立支援の運用が衝突しないか。プロジェクトアサインで配慮された実例を聞く。</li>
                <li><strong>・SES：</strong>制度の有無に加えて「復帰後のアサイン実例」「リモート案件の比率」「通勤時間への配慮」の3点セットで確認する。</li>
                <li>・いずれの形態でも、女性エンジニアの在籍数・ロールモデルの有無は定着しやすさのシグナルになる（<a href="/articles/women-friendly-companies/" className="underline font-bold" style={{ color: "#7c3a55" }}>女性が働きやすいIT企業の見分け方</a>参照）。</li>
              </ul>
              <p className="text-xs text-text-light mt-4">
                出典: 厚生労働省「令和6年度雇用均等基本調査」育児休業取得率 女性86.6%・男性40.5%（2026年6月参照）／総務省「令和6年通信利用動向調査」企業のテレワーク導入率 全体47.3%・情報通信業94.3%（2026年6月参照）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec6 見極めチェックリスト */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人票でのSES見極めチェックリスト</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              求人票に「SES」と明記されていることは少なく、「ITエンジニア（自社内開発あり）」のような表現の奥に客先常駐が隠れていることがあります。以下のシグナルが複数当てはまる場合、SES（客先常駐）の可能性が高いと判断できます。<strong>SESだから応募をやめるのではなく、「SESだと認識した上で会社の質を確認する」</strong>のがこのリストの目的です。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>SESを示すシグナル（求人票・採用サイト）</h3>
            <ul className="space-y-3 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9744;</span><span><strong>勤務地が「プロジェクトによる」「東京23区内」「首都圏各所」</strong>など特定の住所でない（常駐先で働く前提の書き方）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9744;</span><span>事業内容に<strong>「システムエンジニアリングサービス」「技術支援」「開発支援」「ITアウトソーシング」</strong>の文言がある</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9744;</span><span><strong>「大手企業の最先端プロジェクトに参画できる」</strong>など、仕事の主語が自社でなく「参画先」になっている</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9744;</span><span>自社のサービス名・プロダクト名がどこにも出てこない（「実績: 金融系システム、官公庁系システム」のような業界名のみ）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9744;</span><span>社員数に対して<strong>採用予定人数が多い・通年で大量募集</strong>している（人数がそのまま売上になるモデルの特徴）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9744;</span><span>福利厚生や社内行事に<strong>「帰社日」</strong>がある（普段は自社にいない働き方の裏返し）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9744;</span><span>取引先一覧が大手SIer中心（エンド企業でなくSIerが顧客＝二次請け以降の商流が中心の可能性）</span></li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>SESだと分かったら：会社の質を確認する質問</h3>
            <ul className="space-y-3 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9744;</span><span><strong>商流：</strong>「エンド直・元請け直の案件は何割ですか」（深い商流中心なら待遇・環境が構造的に厳しい）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9744;</span><span><strong>透明性：</strong>「案件単価や還元率は社員に開示されますか」「評価制度はどう運用されていますか」</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9744;</span><span><strong>案件選択：</strong>「案件は選べますか。断った場合どうなりますか」「待機期間中の給与は全額支給ですか」</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9744;</span><span><strong>未経験者の実例：</strong>「未経験入社の方は最初どんな業務から始め、2〜3年後どうなっていますか」（テスト・監視のみが続いていないか）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9744;</span><span><strong>女性の働き方：</strong>「育休から復帰した方の、復帰後のアサイン実例を教えてください」「リモート可の案件は何割ですか」</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#9744;</span><span><strong>契約形態：</strong>「常駐は準委任ですか、派遣ですか」（派遣なら労働者派遣事業の許可があるか。曖昧な回答は偽装請負リスクのシグナル）</span></li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            これらは面接で聞きにくい質問も含まれます。転職エージェント経由なら、商流や還元率の実態、女性社員の復帰実例といった<strong>求人票に出ない情報を代わりに確認してもらえます</strong>（エージェントの選び方は<a href="/articles/how-to-choose/" className="underline font-bold" style={{ color: "#7c3a55" }}>エージェント選び方ガイド</a>参照）。
          </p>
        </div>
      </section>

      {/* sec7 キャリア戦略 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">キャリア戦略：SESから自社開発への移り方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「SESで経験を積んで自社開発へ」は実際に多くの人が歩むルートですが、漫然と年数を重ねても移れません。採用側が見るのは年数ではなく<strong>「語れる経験の中身」</strong>です。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              ["STEP1", "現在地を棚卸しする（いつでも）", "担当した工程（要件定義/設計/実装/テスト/運用）、使用技術、チーム規模、自分の役割を案件ごとに書き出します。「テスト・運用のみが2年以上」なら、転職活動より先に案件変更の交渉か自己学習での補完が必要なサインです。"],
              ["STEP2", "開発工程に踏み込む（1〜2年目）", "今の常駐先で実装・設計に近づける余地を探します。レビューへの参加、テスト自動化の提案など、現場内での小さな越境が職務経歴の材料になります。難しければ所属会社の営業に案件変更を具体的に依頼しましょう（「開発工程のある案件」と明確に）。"],
              ["STEP3", "ポートフォリオと学習の証拠を作る（並行）", "業務でカバーできない領域（モダンなフレームワーク、クラウド等）は個人開発や資格で補完します。SES出身者の応募では「業務外でも手を動かす人か」が特に見られます。"],
              ["STEP4", "実務2〜3年を目安に経験者枠で応募（タイミング）", "一連の開発工程を語れるようになったら経験者採用の土俵です。自社開発は即戦力前提が基本のため、応募先のプロダクト・技術スタックと自分の経験の接点を職務経歴書で明示します。"],
              ["STEP5", "エージェントで「開発体制の実態」を確認（応募時）", "自社開発と書かれていても受託・SES併営の会社はあります。配属の比率、開発チームの体制、女性エンジニアの在籍状況など、求人票に出ない情報はエージェント経由で確認してから応募しましょう。"],
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
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            なお、移る先は自社開発だけが正解ではありません。上流工程やマネジメントを志向するならSIer（<a href="/articles/sier-industry/" className="underline font-bold" style={{ color: "#7c3a55" }}>SIer業界ガイド</a>）、プロダクト志向ならWeb系自社開発（<a href="/articles/web-industry/" className="underline font-bold" style={{ color: "#7c3a55" }}>Web業界ガイド</a>）と、自分が積みたい経験から逆算して選びましょう。
          </p>
        </div>
      </section>

      {/* おすすめ転職エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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

      {/* FAQ */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map(
              (
                faq: { name: string; acceptedAnswer: { text: string } },
                i: number
              ) => (
                <details
                  key={i}
                  className="group rounded-xl border overflow-hidden"
                  style={{ borderColor: "#d9c7b8" }}
                >
                  <summary
                    className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50"
                    style={{ color: "#7c3a55" }}
                  >
                    <span className="pr-4">{faq.name}</span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9662;
                    </span>
                  </summary>
                  <div
                    className="px-6 pb-4 text-sm text-text-light leading-relaxed"
                    style={{ borderTop: "1px solid #d9c7b8" }}
                  >
                    <p className="pt-4">{faq.acceptedAnswer.text}</p>
                  </div>
                </details>
              )
            )}
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考データ</h2>
          <ul className="space-y-2 text-sm text-text-light leading-relaxed">
            <li>・出典: IPA（情報処理推進機構）「DX白書2023」— 情報処理・通信に携わる人材の所属比率：日本はIT企業側73.6%（2020年）、米国はIT企業側35.1%（2021年）（2026年6月参照）</li>
            <li>・出典: 経済産業省 情報処理振興課「IT産業における下請の現状・課題について」（2015年3月）— 元請・下請を併営する企業が半数、下請のみは約4社に1社。多重下請けの下層での労働環境・待遇悪化の課題を指摘（2026年6月参照）</li>
            <li>・出典: パーソルキャリア「doda平均年収ランキング2025」— IT/通信の業種分類別平均年収：ITコンサルティング505万円、ハードウェア/ソフトウェア/パッケージベンダー493万円、システムインテグレータ481万円（2026年6月参照）</li>
            <li>・出典: 厚生労働省「令和6年度雇用均等基本調査」— 育児休業取得率：女性86.6%、男性40.5%（2026年6月参照）</li>
            <li>・出典: 総務省「令和6年通信利用動向調査」— 企業のテレワーク導入率：全体47.3%、情報通信業94.3%（2026年6月参照）</li>
            <li>・参考: 「労働者派遣事業と請負により行われる事業との区分に関する基準」（昭和61年労働省告示第37号）— 指揮命令の所在による派遣と請負（準委任を含む）の区分（2026年6月参照）</li>
          </ul>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/beginner/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                未経験からエンジニアになるには
              </h3>
              <p className="text-sm text-text-light">現実のロードマップと職種の選び方</p>
            </a>
            <a
              href="/articles/women-friendly-companies/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                女性が働きやすいIT企業の見分け方
              </h3>
              <p className="text-sm text-text-light">制度と運用実態のチェックポイント</p>
            </a>
            <a
              href="/articles/sier-industry/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                SIer業界ガイド
              </h3>
              <p className="text-sm text-text-light">業界構造と働き方の特徴</p>
            </a>
            <a
              href="/articles/web-industry/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                Web業界ガイド
              </h3>
              <p className="text-sm text-text-light">自社開発・Web系企業の働き方</p>
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
