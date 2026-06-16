import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "SIerで働く女性エンジニアのリアル｜年収・安定性・Web系との違い【2026年】",
  description:
    "SIer業界の構造（元請け〜多重下請けピラミッド）と女性エンジニアの働きやすさを実データで解説。大手SIerの有価証券報告書ベースの平均年収（788万〜1,322万円）、プラチナくるみん等の認定実績、配属ガチャ・客先常駐の注意点、Web系との違いまで出典付きでまとめました。",
  alternates: { canonical: "/articles/sier-industry/" },
  openGraph: {
    title: "SIerで働く女性エンジニアのリアル｜年収・安定性・Web系との違い【2026年】",
    description:
      "SIer業界の構造と女性エンジニアの働きやすさを実データで解説。大手SIerの有報平均年収・産育休の認定実績・注意点まで出典付き。",
    url: "https://women-engineer.com/articles/sier-industry/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "SIerで働く女性エンジニアのリアル｜年収・安定性・Web系との違い【2026年】",
  datePublished: "2026-04-29",
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
    "SIer業界の構造と女性エンジニアの働きやすさを実データで解説。大手SIerの有報平均年収・産育休の認定実績・注意点まで出典付き。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/sier-industry/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "SIer業界の「多重下請け構造」とは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "顧客から直接受注した元請けSIerが、開発工程を一次下請け・二次下請けへと多段階に再委託していくピラミッド型の産業構造のことです。公正取引委員会の「ソフトウェア業の下請取引等に関する実態調査報告書」（令和4年6月）は、この構造の下で買いたたきや無償のやり直し要求、中抜き事業者による多層化といった問題が生じていると指摘しています。同じ「SIer」でも、元請けか下請けかで年収・裁量・働き方が大きく変わるため、転職時は応募先がどの層に位置するかの確認が不可欠です。",
      },
    },
    {
      "@type": "Question",
      name: "大手SIerの年収は実際どのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "各社の有価証券報告書（2025年3月期）によると、平均年間給与は野村総合研究所1,322万円、日立製作所961万円、富士通929万円、NTTデータグループ（持株会社）923万円、TIS807万円、SCSK788万円です。いずれもエンジニア以外を含む全社員平均で、富士通・日立はIT以外の部門も含む点に注意が必要です。一方、二次請け以下の中小SIerはこの水準を大きく下回ることが多く、同じ業界でも所属する層によって年収差が大きいのが実態です。",
      },
    },
    {
      "@type": "Question",
      name: "SIerは女性エンジニアが働きやすい業界ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "大手SIerは制度面の充実を公式データで確認できる企業が多いです。例えばNTTデータはプラチナくるみん（2019年）とえるぼし3段階目（2017年）を取得済みで、行動計画では2030年度末までに女性管理職比率20%という数値目標を公表しています。SCSKは育児休業復帰率95.0%・有給休暇取得率89.4%（2025年3月期）を採用サイトで開示し、2025年11月にはプラチナくるみんプラスを取得しました。ただしこれは大手・元請け層の話で、下請け層や客先常駐中心の企業では制度はあっても使いにくい場合があるため、取得・復帰の実績数値まで確認することをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "SIerとWeb系企業はどちらを選ぶべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "重視する軸によります。SIer（特に大手）は教育制度・産育休などの制度の厚さ、雇用の安定性、大規模プロジェクト経験が強みで、未経験者の研修制度も手厚い傾向です。一方Web系は技術スタックの新しさ、リモートワークの柔軟さ、開発スピードが強みです。SIerはJavaなど堅実な技術が中心で要件定義・設計など上流スキルが積み上がる反面、配属によってはレガシー技術が続くリスクもあります。「制度の充実と安定」を優先するならSIer、「モダン技術と柔軟な働き方」を優先するならWeb系が候補になります。",
      },
    },
    {
      "@type": "Question",
      name: "SIerから社内SEやWeb系への転職は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。SIerで培った要件定義・設計・ベンダー管理・プロジェクト推進の経験は、社内SE（事業会社の情報システム部門）では特に高く評価されます。Web系へ移る場合は、React・Docker・CI/CDなどモダンな技術スタックの自習とポートフォリオで補強するのが定石です。経済産業省「IT人材需給に関する調査」は2030年に最大79万人のIT人材不足を試算しており、SIer出身者の受け皿は広い状況です。IT特化型エージェントを使うと、SIer経験の棚卸しと移籍先の選定がスムーズになります。",
      },
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://women-engineer.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "転職コラム",
      item: "https://women-engineer.com/articles/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SIerで働く女性エンジニアのリアル",
      item: "https://women-engineer.com/articles/sier-industry/",
    },
  ],
};

export default function SierIndustryPage() {
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
              { label: "SIerで働く女性エンジニアのリアル" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              業界ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              SIerで働く女性エンジニアのリアル
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収・安定性・Web系との違いを実データで解説【2026年】
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
                <span><strong>SIerは「どの会社か」より先に「どの層か」で働き方が決まる業界。</strong>元請け→一次→二次と続く多重下請け構造は公正取引委員会の実態調査（令和4年6月）でも買いたたき・中抜き等の問題が指摘されており、同じSIerでも層によって年収・裁量・常駐の有無が大きく変わります。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>大手・元請け層の待遇は有価証券報告書で確認できる。</strong>2025年3月期の平均年間給与（全社員平均）は野村総合研究所1,322万円、NTTデータグループ923万円、TIS 807万円、SCSK 788万円など。一方で下請け層はこの水準を大きく下回ることが多いのが実態です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>女性にとっての強みは「制度が実績数値で確認できる」こと。</strong>NTTデータはプラチナくるみん＋えるぼし3段階目、SCSKは育休復帰率95.0%・プラチナくるみんプラス（2025年11月）と、公式に検証できる実績を持つ大手が多い業界です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>注意点は配属ガチャ・レガシー技術・客先常駐の3つ。</strong>入社前に「常駐比率」「担当できる工程」「使用技術」を確認すれば回避可能性が大きく上がります。確認方法は本文で解説します。</span>
              </li>
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. SIerとは｜元請け〜下請けピラミッドの実態</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. SIerの4分類と「層」の見分け方</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 大手SIerの平均年収（有価証券報告書ベース）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. SIerが女性エンジニアに向く面（実データ）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 注意点｜配属ガチャ・レガシー技術・客先常駐</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. SIerとWeb系の違い</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. SIer経験者のキャリアパス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. SIer転職に強いエージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. 出典・参考資料</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 構造 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIerとは｜元請け〜下請けピラミッドの実態</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SIer（System Integrator、システムインテグレーター）は、企業や官公庁の情報システムの企画・要件定義から設計・開発・テスト・保守運用までを請け負うIT企業です。金融機関の勘定系、官公庁の行政システム、製造業の基幹システムなど、社会インフラ級の大規模システムを支えているのがSIer業界です。
            </p>
            <p>
              この業界を理解するうえで避けて通れないのが<strong>多重下請け構造</strong>です。顧客から直接受注する元請けSIerがプロジェクト全体を管理し、開発工程を一次下請けへ、一次下請けがさらに二次下請けへと再委託していくピラミッド型の構造が広く存在します。公正取引委員会が令和4年6月に公表した「ソフトウェア業の下請取引等に関する実態調査報告書」は、この構造の下で<strong>下請代金の買いたたき、無償の仕様変更・やり直し要求、自ら開発をほとんど行わない「中抜き事業者」による構造の多層化</strong>といった問題が生じていると指摘しています（出典: 公正取引委員会・令和4年6月29日公表、2026年6月参照）。
            </p>
            <p>
              経済産業省も「情報サービス・ソフトウェア産業における下請適正取引等の推進のためのガイドライン」を策定し、取引適正化を促してきました。つまり<strong>「下請け構造の問題は公的機関が公式に認めている業界課題」</strong>であり、転職時に応募先がピラミッドのどの層にいるかを確認するのは、決して失礼な質問ではなく必須の自衛策です。
            </p>
            <div
              className="rounded-xl border p-6 mt-6"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>
                層によってこう変わる（ピラミッドの実態）
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>元請け（プライム）</strong>: 顧客と直接契約。要件定義・全体設計・プロジェクト管理が中心で、年収水準・制度・裁量が最も大きい層</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>一次下請け</strong>: 元請けから特定サブシステムや工程を受託。設計〜開発を担い、企業によっては元請け案件も持つ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>二次下請け以降</strong>: 製造（コーディング）・テストなど細分化された工程が中心。客先常駐の比率が上がり、単価のしわ寄せを受けやすい層</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                  <span><strong>確認方法</strong>: 面接で「プライム案件の比率」「商流（何次請けか）」「常駐と自社内開発の比率」を質問する。明確に答えない企業は要注意</span>
                </li>
              </ul>
            </div>
            <p className="mt-4">
              なお、客先に常駐して労働力を提供する契約形態（SES）とSIerの請負の違いは、<a href="/articles/ses-vs-jisha/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>SESと自社開発の比較記事</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 4分類 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIerの4分類と「層」の見分け方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SIerは出自によって大きく4タイプに分類されます。ただし重要なのは分類そのものより、<strong>そのタイプが構造上どの層に入りやすいか</strong>です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            {[
              {
                type: "メーカー系SIer",
                color: "#7c3a55",
                examples: "富士通・NEC・日立製作所（のIT部門/グループ）",
                features: ["ハードウェアメーカー本体またはそのIT子会社", "官公庁・金融など超大規模案件の元請けが多い", "親会社水準の制度・福利厚生", "グループ内子会社は一次請け的な位置づけのことも"],
              },
              {
                type: "ユーザー系SIer",
                color: "#7c3a55",
                examples: "NTTデータ・SCSK・BIPROGY など",
                features: ["商社・通信などの情報システム部門が独立した系譜", "親会社・グループ案件という安定基盤", "業界（金融・流通など）特化の知見が蓄積", "元請け比率が高い企業が多い"],
              },
              {
                type: "独立系SIer",
                color: "#c15f47",
                examples: "TIS・大塚商会・オービック など",
                features: ["特定の親会社を持たない独立資本", "大手独立系は元請け、中小は下請け中心と二極化", "技術選定の自由度が比較的高い", "企業規模による待遇差が最も大きいタイプ"],
              },
              {
                type: "コンサル系SIer",
                color: "#10b981",
                examples: "アクセンチュア・アビームコンサルティング など",
                features: ["戦略・業務コンサルとIT実装を一体提供", "企画・構想策定などの最上流から参画", "年収水準は高いが稼働も高くなりがち", "成果主義の色が濃く、制度より個人裁量の文化"],
              },
            ].map((sier, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: sier.color }}>{sier.type}</h3>
                <p className="text-xs text-text-light mb-3">代表例: {sier.examples}</p>
                <ul className="text-sm text-text-light space-y-1">
                  {sier.features.map((f, j) => (
                    <li key={j}>- {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            ※ 同じ「メーカー系」「ユーザー系」でも、グループ内の開発子会社・孫会社は親会社より待遇水準が下がるのが一般的です。求人票の社名がグループ名を冠していても、<strong>「本体か子会社か」「何次請けの案件が中心か」</strong>は必ず分けて確認しましょう。
          </p>
        </div>
      </section>

      {/* sec3 年収 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">大手SIerの平均年収（有価証券報告書ベース）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「SIerの年収」は推計値が氾濫していますが、上場企業については<strong>有価証券報告書に記載される「平均年間給与」</strong>という公式の一次データが存在します。2025年3月期（2024年度）の主要各社の数値は次のとおりです。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#7c3a55" }}>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">企業名</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">平均年間給与</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">平均年齢</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["野村総合研究所（NRI）", "1,322万円", "39.9歳", "コンサル＋ITの一体提供"],
                  ["日立製作所", "961万円", "42.6歳", "IT以外の部門を含む全社平均"],
                  ["富士通", "929万円", "42.0歳", "IT以外の部門を含む全社平均"],
                  ["NTTデータグループ", "923万円", "39.7歳", "持株会社の従業員の数値"],
                  ["TIS", "807万円", "40.6歳", "独立系大手"],
                  ["SCSK", "788万円", "44.9歳", "住友商事グループ"],
                ].map(([name, salary, age, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f0e7dd" } : {}}>
                    <td className="px-4 py-3 text-sm font-bold" style={{ borderBottom: "1px solid #d9c7b8" }}>{name}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d9c7b8" }}>{salary}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d9c7b8" }}>{age}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d9c7b8" }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-2">出典: 各社有価証券報告書（2025年3月期）の「平均年間給与」（2026年6月参照）</p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              読み方の注意点が3つあります。第一に、これらは<strong>エンジニア以外（営業・管理部門等）を含む全社員平均</strong>であり、若手エンジニア個人の年収ではありません。第二に、富士通・日立はITサービス以外の事業も含む会社全体の数値、NTTデータグループは持株会社の数値です。第三に、ここに載るのは<strong>ピラミッドの最上位層だけ</strong>という点です。二次請け以下の中小SIerの給与水準はこの表とは別世界であることが多く、公正取引委員会の実態調査が指摘する「下流へのしわ寄せ」は年収にも表れます。
            </p>
            <p>
              逆に言えば、SIer業界で年収を上げる最短ルートは「同じ層の中で頑張る」ことではなく、<strong>より上の層（元請け・一次請け）へ移ること</strong>です。下請けSIerで設計・リーダー経験を積み、大手SIerの中途採用に応募するのは王道のキャリア戦略です。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 女性に向く面 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIerが女性エンジニアに向く面（実データ）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「大手SIerは制度が手厚い」と言われますが、重要なのはそれが<strong>公式に検証できる実績数値として公開されている</strong>ことです。代表例を見てみましょう。
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>NTTデータ｜プラチナくるみん＋えるぼし3段階目</h3>
              <p className="text-sm text-text-light leading-relaxed">
                2017年に女性活躍推進法に基づく<strong>「えるぼし」最上位の3段階目</strong>に認定され、2019年には子育てサポート企業の上位認定<strong>「プラチナくるみん」</strong>を取得（いずれも公式ニュースリリースで確認可能）。さらに現在の行動計画（2026年4月〜2031年3月）では<strong>「2030年度末までに女性管理職比率20%」「男性育休等取得率100%の継続」</strong>という期限付きの数値目標を公表しています。
              </p>
              <p className="text-xs text-text-light mt-2">出典: NTTデータ ニュースリリース（2017年9月・2019年11月）、NTTデータグループ「ダイバーシティ、エクイティ＆インクルージョン」（2026年6月参照）</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>SCSK｜育休復帰率95.0%・残業削減の先進企業</h3>
              <p className="text-sm text-text-light leading-relaxed">
                採用サイトのデータ集で2025年3月期実績として<strong>育児休業復帰率95.0%、有給休暇取得率89.4%、平均勤続年数17.2年</strong>を公開。2013年から続く「スマートワーク・チャレンジ」により残業削減を進め、2015〜2020年度には月平均残業20時間以下を達成したことを公式サイトで紹介しています。2025年11月には不妊治療との両立支援も評価する<strong>「プラチナくるみんプラス」</strong>を取得しました。
              </p>
              <p className="text-xs text-text-light mt-2">出典: SCSK「採用情報 データ集」「働き方改革」・ニュースリリース（2025年11月12日）（2026年6月参照）</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>富士通｜女性幹部比率を毎年開示</h3>
              <p className="text-sm text-text-light leading-relaxed">
                女性幹部社員比率を毎年度公開しており、<strong>2024年度実績はグループ16.8%（単体11.5%）</strong>。厚生労働省「令和6年度雇用均等基本調査」による課長相当職の女性割合の全産業平均12.3%と比較する基準として使えます。中期経営計画の非財務指標として目標値も掲げており、「実績＋目標＋期限」をセットで開示する典型例です。
              </p>
              <p className="text-xs text-text-light mt-2">出典: 富士通 統合レポート・人材戦略説明資料、厚生労働省「令和6年度雇用均等基本調査」（2026年6月参照）</p>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>構造的にSIer大手が女性に向きやすい3つの理由</h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>教育制度が体系化されている</strong>: 新卒一括採用の歴史が長く、階層別研修・資格取得支援（受験料補助・報奨金）が制度として整備されている企業が多い。文系出身・未経験からエンジニアを育てるノウハウの蓄積はWeb系より厚い傾向</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>プロジェクトが長期で計画的</strong>: 数年単位の大規模案件が多く、工程と要員計画が事前に引かれるため、産育休・時短のスケジュールを組み込みやすい。厚生労働省の調査では女性の育休取得率は全産業で86.6%まで上昇しており、制度の整った大手SIerでは取得がほぼ前提になっている</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>評価される能力が長持ちする</strong>: 要件定義・設計・品質管理・顧客折衝といった上流スキルは技術トレンドに左右されにくく、ブランクの影響を受けにくい。復職後も「設計力・調整力」で勝負できる</span>
              </li>
            </ul>
            <p className="text-xs text-text-light mt-3">出典: 厚生労働省「令和6年度雇用均等基本調査」（2026年6月参照）</p>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            制度の充実した企業の具体的な見極め方（くるみん・えるぼしの調べ方、行動計画の読み方）は、<a href="/articles/women-friendly-companies/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性が働きやすいIT企業の見極め方</a>で詳しく解説しています。
          </p>
        </div>
      </section>

      {/* sec5 注意点 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">注意点｜配属ガチャ・レガシー技術・客先常駐</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SIerのメリットは主に「大手・元請け層」のものです。公平を期すため、業界全体に共通する3つのリスクと、入社前にできる対策を整理します。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              {
                title: "1. 配属ガチャ｜同じ会社でも部署で別世界",
                desc: "大手SIerは事業部ごとに顧客業界・技術・働き方が大きく異なります。最新のクラウド案件を扱うDX部門もあれば、20年稼働の基幹システムを保守し続ける部門もあり、配属によってキャリアの方向が大きく変わります。対策: 中途採用は部署・案件を特定して採用する「ジョブ型」求人を選ぶこと。配属先を確約しない「総合職一括採用」型の中途求人は、面接で配属プロセスを必ず確認しましょう。",
              },
              {
                title: "2. レガシー技術の長期化リスク",
                desc: "経済産業省「DXレポート」（2018年）は、複雑化・老朽化したレガシーシステムが残存した場合の経済損失を指摘し（いわゆる「2025年の崖」）、基幹系の刷新を促してきました。裏を返せば、SIerにはレガシーシステムの保守・移行案件が今も大量に存在します。COBOLや古いJavaの保守だけが長く続くと市場価値の更新が止まるリスクがあります。対策: モダナイゼーション（クラウド移行・再構築）案件は「レガシーとモダン両方の経験」が積める狙い目です。面接で「移行先の技術スタック」を質問しましょう。",
              },
              {
                title: "3. 客先常駐の可能性",
                desc: "SIerでも、特に下請け層では顧客先に常駐して開発する形態が珍しくありません。常駐自体が悪いわけではありませんが、自社の評価者から働きぶりが見えにくい、リモートワークや時短の運用が常駐先のルールに左右される、といった制約が生じがちです。対策: 面接で「自社内開発と常駐の比率」「常駐の場合のリモート可否」「評価は誰がするのか」を確認すること。回答が曖昧な場合、実態はSESに近い可能性があります。",
              },
              {
                title: "4. 下請け層の構造的な待遇差",
                desc: "公正取引委員会の実態調査（令和4年6月）が指摘するとおり、多重下請け構造の下流では単価の買いたたきや無償のやり直しが起きやすく、それは従業員の年収・残業に直結します。対策: 応募先の「プライム（元請け）案件比率」を確認し、二次請け以下が中心の企業は慎重に検討すること。エージェント経由なら商流の実態を事前に確認してもらえます。",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#c15f47" }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-light mt-4">出典: 公正取引委員会「ソフトウェア業の下請取引等に関する実態調査報告書」（令和4年6月）、経済産業省「DXレポート」（2018年）（2026年6月参照）</p>
        </div>
      </section>

      {/* sec6 Web系との違い */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIerとWeb系の違い</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              転職先として比較されることの多いSIerとWeb系（自社サービス）企業。どちらが上という話ではなく、<strong>得られるものと求められるものが違う</strong>と理解するのが正確です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr style={{ backgroundColor: "#7c3a55" }}>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">比較軸</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">SIer（大手・元請け）</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-white">Web系（自社サービス）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["開発スタイル", "ウォーターフォール中心・長期計画型", "アジャイル中心・高速リリース型"],
                  ["主な技術", "Java・C#・Oracle など堅実・実績重視", "TypeScript・Go・クラウドネイティブ"],
                  ["積み上がるスキル", "要件定義・設計・PM・顧客折衝（上流）", "実装力・モダン技術・プロダクト思考"],
                  ["教育制度", "体系的な研修・資格支援が手厚い傾向", "OJT中心・自走前提の企業が多い"],
                  ["制度・福利厚生", "産育休・時短など制度が厚く実績も公開", "企業差が大きい（柔軟な企業は非常に柔軟）"],
                  ["働く場所", "自社・客先（常駐の可能性あり）", "リモートワーク比率が高い傾向"],
                  ["評価のされ方", "工程責任・マネジメントで昇給", "技術力・プロダクト貢献で昇給"],
                ].map(([axis, sier, web], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f0e7dd" } : {}}>
                    <td className="px-4 py-3 text-sm font-bold" style={{ borderBottom: "1px solid #d9c7b8" }}>{axis}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d9c7b8" }}>{sier}</td>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d9c7b8" }}>{web}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              SIerの中核技術であるJavaは求人数が安定して多く、金融・公共系で長く使える武器になります。詳しくは<a href="/articles/java-career/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>Javaエンジニアのキャリアガイド</a>を参照してください。Web系業界の働き方・年収・企業の選び方は<a href="/articles/web-industry/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>Web系企業への転職ガイド</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 キャリアパス */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIer経験者のキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SIerで積み上がる「要件定義・設計・プロジェクト推進・顧客折衝」は、業界の内外で換金性の高いスキルセットです。経済産業省「IT人材需給に関する調査」は2030年に最大79万人のIT人材不足を試算しており、SIer経験者の受け皿は広い状況が続いています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>上の層へ移る（SIer内ステップアップ）</h3>
              <p className="text-sm text-text-light leading-relaxed">下請けSIer→大手元請けSIerへの転職は年収・裁量の改善幅が大きい王道ルート。設計経験＋応用情報・PM系資格が武器になります。大手の中途採用はジョブ型が増えており、部署を選んで応募できます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>社内SE（事業会社の情シス）へ</h3>
              <p className="text-sm text-text-light leading-relaxed">SIerでのベンダー管理・要件定義経験がそのまま活きる人気進路。発注側に回るため納期プレッシャーが緩和され、ワークライフバランスを重視する女性に選ばれやすい選択肢です。詳しくは<a href="/articles/internal-se/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>社内SE転職ガイド</a>へ。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>Web系・自社開発へ</h3>
              <p className="text-sm text-text-light leading-relaxed">設計力・品質管理の素養は評価されますが、モダンスタック（クラウド・CI/CD・モダンフレームワーク）の自習とポートフォリオで「実装も追いついている」ことを示すのが鍵。20代〜30代前半なら未経験スタックでもポテンシャル評価が期待できます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>ITコンサル・PMOへ</h3>
              <p className="text-sm text-text-light leading-relaxed">大規模プロジェクトの推進経験を最も高く買うのがコンサル業界。年収レンジは上がる一方、稼働や成果プレッシャーも上がるため、ライフプランと相談して選びたい進路です。</p>
            </div>
          </div>
          <p className="text-xs text-text-light mt-4">出典: 経済産業省「IT人材需給に関する調査」（2019年）（2026年6月参照）</p>
        </div>
      </section>

      {/* おすすめエージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIer転職に強いエージェント</h2>
          <div className="space-y-4 mt-6">
            {[
              {
                name: "レバテックキャリア",
                badge: "IT特化型",
                color: "#7c3a55",
                desc: "IT業界特化の転職エージェント。SIerの求人も豊富に取り扱い、大手SIerからの非公開求人も保有。技術力を正当に評価した年収交渉が強み。",
                link: "/reviews/levtech/",
              },
              {
                name: "doda",
                badge: "総合型",
                color: "#7c3a55",
                desc: "業界最大級の求人数を誇る総合転職エージェント。SIer求人は数千件規模で保有しており、大手から中堅まで幅広い選択肢を提供。女性向けの転職支援にも力を入れている。",
                link: "/reviews/doda/",
              },
              {
                name: "リクルートエージェント",
                badge: "最大手",
                color: "#c15f47",
                desc: "転職支援実績No.1のエージェント。大手SIerとの太いパイプがあり、非公開求人も多数。幅広い業界知識を持つアドバイザーが、SIer各社の特徴を詳しく教えてくれる。",
                link: "/reviews/recruit-agent/",
              },
            ].map((agent, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: agent.color }}>{agent.badge}</span>
                  <h3 className="text-lg font-bold">{agent.name}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed mb-3">{agent.desc}</p>
                <a href={agent.link} className="text-sm font-bold hover:underline" style={{ color: "#7c3a55" }}>{agent.name}の詳細レビューを見る →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map(
              (faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
                <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d9c7b8" }}>
                  <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                    <span><span style={{ color: "#7c3a55" }} className="mr-2">Q.</span>{faq.name}</span>
                    <span className="text-text-light group-open:rotate-180 transition-transform">&#9662;</span>
                  </summary>
                  <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d9c7b8" }}>
                    <p className="pt-4"><span style={{ color: "#c15f47" }} className="font-bold mr-2">A.</span>{faq.acceptedAnswer.text}</p>
                  </div>
                </details>
              )
            )}
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light leading-relaxed list-disc pl-5">
            <li>出典: 公正取引委員会「ソフトウェア業の下請取引等に関する実態調査報告書」（令和4年6月29日公表）（2026年6月参照）</li>
            <li>出典: 経済産業省「情報サービス・ソフトウェア産業における下請適正取引等の推進のためのガイドライン」（2026年6月参照）</li>
            <li>出典: 経済産業省「DXレポート 〜ITシステム『2025年の崖』克服とDXの本格的な展開〜」（2018年）（2026年6月参照）</li>
            <li>出典: 経済産業省「IT人材需給に関する調査」（2019年）（2026年6月参照）</li>
            <li>出典: 野村総合研究所・日立製作所・富士通・NTTデータグループ・TIS・SCSK 各社有価証券報告書（2025年3月期）「平均年間給与」（2026年6月参照）</li>
            <li>出典: NTTデータ ニュースリリース「『えるぼし』企業に認定」（2017年9月）・「優良な子育てサポート企業として『プラチナくるみん』を取得」（2019年11月）（2026年6月参照）</li>
            <li>出典: NTTデータグループ「ダイバーシティ、エクイティ＆インクルージョン」（2026年6月参照）</li>
            <li>出典: SCSK「採用情報 データ集」・「働き方改革（サステナビリティ）」・ニュースリリース「プラチナくるみんプラス認定を取得」（2025年11月12日）（2026年6月参照）</li>
            <li>出典: 富士通「統合レポート・人材戦略説明資料・サステナビリティデータ」（2026年6月参照）</li>
            <li>出典: 厚生労働省「令和6年度雇用均等基本調査」（2026年6月参照）</li>
          </ul>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/web-industry/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>Web系企業への転職ガイド</h3>
              <p className="text-sm text-text-light">SIerと比較されるWeb系の働き方と特徴</p>
            </a>
            <a href="/articles/ses-vs-jisha/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>SES vs 自社開発の比較</h3>
              <p className="text-sm text-text-light">客先常駐との契約形態の違いを整理</p>
            </a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすいIT企業の見極め方</h3>
              <p className="text-sm text-text-light">くるみん・えるぼし・公開データの読み方</p>
            </a>
            <a href="/articles/internal-se/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>社内SE転職ガイド</h3>
              <p className="text-sm text-text-light">SIer経験が活きる人気のキャリアパス</p>
            </a>
            <a href="/articles/java-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>Javaエンジニアのキャリアガイド</h3>
              <p className="text-sm text-text-light">SIerの中核技術Javaで築くキャリア</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">SIerへの転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったSIer企業を見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
