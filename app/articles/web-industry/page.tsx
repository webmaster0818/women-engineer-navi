import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Web業界で働く女性エンジニアのリアル｜年収・文化・SIerとの違い【2026年】",
  description:
    "Web業界（自社サービス・メガベンチャー・受託・スタートアップ）の構造と年収相場を公的データで解説。doda調査ではインターネット業界の平均年収440万円とSIer481万円より低い一方、job tagのWebサービス開発SEは578.5万円。SIerとの文化差や女性比率18.8%の実態、未経験では入りにくい現実まで正直に整理します。",
  alternates: { canonical: "/articles/web-industry/" },
  openGraph: {
    title: "Web業界で働く女性エンジニアのリアル｜年収・文化・SIerとの違い【2026年】",
    description:
      "Web業界の構造・年収相場・SIerとの文化差・女性比率を公的データと出典付きで解説。未経験転職の現実的なルートも正直に紹介します。",
    url: "https://women-engineer.com/articles/web-industry/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Web業界で働く女性エンジニアのリアル｜年収・文化・SIerとの違い【2026年】",
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
    "Web業界の構造・年収相場・SIerとの文化差・女性比率を公的データと出典付きで解説。未経験転職の現実的なルートも正直に紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/web-industry/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Web系企業の年収はSIerより高いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "業種平均で見ると必ずしも高くありません。doda「平均年収ランキング2025」では、インターネット/広告/メディア業界の平均年収は440万円で、システムインテグレータ（481万円）やITコンサルティング（505万円）を下回ります。一方、厚生労働省job tagではシステムエンジニア（Webサービス開発）の年収は578.5万円とされており、同じWeb業界でも企業規模・職種・スキルによる差が非常に大きいのが実態です。メガベンチャーや上場テック企業では高水準ですが、「Web系なら誰でも高年収」ではない点に注意が必要です。",
      },
    },
    {
      "@type": "Question",
      name: "Web業界とSIer、女性エンジニアにはどちらが働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一概にどちらが良いとは言えず、重視する条件次第です。Web業界は技術選定の裁量・私服勤務・リモートやフレックスの柔軟さに強みがあり、総務省の令和6年通信利用動向調査では情報通信業のテレワーク導入率は94.3%と全産業で最も高い水準です。一方、大手SIerは体系的な研修制度・産休育休の取得実績・雇用の安定性に強みがあります。教育を受けながら着実に育ちたい人はSIer、裁量とスピードを求める人はWeb系が合いやすい傾向です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験からWeb系自社開発企業に転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "正直に言うと、完全未経験からの自社開発企業への直接転職は狭き門です。自社開発企業の中途採用は即戦力（実務経験者）が中心で、未経験者は経験者と同じ枠で比較されるためです。現実的なのは、(1)受託開発やSIerで1〜3年の実務経験を積んでから移る、(2)ポートフォリオと学習実績を作りポテンシャル採用枠を狙う、(3)テスター・サポートなど周辺職種から開発に近づく、という段階的なルートです。遠回りに見えても、実務経験を挟む方が結果的に早く確実です。",
      },
    },
    {
      "@type": "Question",
      name: "Web業界の女性エンジニア比率はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "日本のITエンジニア全体の女性比率は18.8%（OECD加盟33カ国中17位、OECD平均は20.6%）という調査があります。また情報サービス産業協会（JISA）の基本統計調査では、会員企業のITエンジニアのうち女性は22.6%で、女性エンジニア数は2013年の約3.1万人から2023年の約4.6万人へ10年間で約46%増加しています。まだ少数派ではあるものの増加傾向が続いており、リモートワークの普及した Web業界はライフイベントと両立しやすい環境が整いつつあります。",
      },
    },
    {
      "@type": "Question",
      name: "SIerからWeb系への転職では何が評価されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "要件定義・基本設計などの上流経験、データベース設計、大規模システムの品質管理、顧客折衝・プロジェクト推進の経験は、Web系企業でも高く評価されます。一方で、React/TypeScriptやGo、Docker・CI/CDなどのモダンスタックは入社前にキャッチアップしておく必要があります。SIerでの経験＋自主学習のポートフォリオという組み合わせが定番の合格パターンで、IT特化型エージェント経由でSIer出身者歓迎求人を探すのが効率的です。",
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
      name: "Web業界で働く女性エンジニアのリアル",
      item: "https://women-engineer.com/articles/web-industry/",
    },
  ],
};

export default function WebIndustryPage() {
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
              { label: "Web業界で働く女性エンジニアのリアル" },
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
              Web業界で働く女性エンジニアのリアル
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収・文化・SIerとの違いを実データで解説【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}
          >
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
              この記事の結論
            </h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li>
                ・Web業界は<strong>自社サービス／メガベンチャー／Web受託／スタートアップ</strong>の4タイプで働き方が大きく異なる。「Web系」と一括りにせずタイプで選ぶことが重要
              </li>
              <li>
                ・年収は<strong>「Web系＝高年収」は半分神話</strong>。業種平均ではインターネット/広告/メディア440万円とSIer（481万円）より低い一方、Webサービス開発SEの年収は578.5万円（厚労省job tag）と職種・企業差が極めて大きい
              </li>
              <li>
                ・文化面はモダン技術・裁量・私服・リモート（情報通信業のテレワーク導入率94.3%）が強み。逆に<strong>研修制度や雇用の安定性はSIerに分がある</strong>ことも多い
              </li>
              <li>
                ・女性ITエンジニア比率は18.8%とまだ少数派だが、10年間で女性エンジニア数は約46%増。リモート普及でライフイベントとの両立環境は改善傾向
              </li>
              <li>
                ・<strong>完全未経験から自社開発企業への直接転職は狭き門</strong>。受託・SIerで実務経験を積んでから移る段階ルートが現実的
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
                  1. Web業界の構造｜4タイプの企業を整理
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>
                  2. 実データで見るWeb業界の市場と需要
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>
                  3. Web業界の年収相場｜「Web系＝高年収」は半分神話
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>
                  4. SIerとの文化の違い｜どちらが良いかは人による
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>
                  5. 女性エンジニアから見たWeb業界
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>
                  6. Web業界転職の現実的なルート
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>
                  7. Web系転職に強いエージェント
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>
                  8. よくある質問
                </a>
              </li>
              <li>
                <a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>
                  9. 出典一覧
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 Web業界の構造 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Web業界の構造｜4タイプの企業を整理</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「Web業界」と一括りに語られがちですが、実際には事業モデルによって働き方・年収・求められるスキルが大きく異なります。転職で後悔しないために、まず次の4タイプを区別して考えましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                ① 自社サービス企業（中堅Web系）
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                自社でECサイト・SaaS・メディアなどを開発・運営する企業。プロダクトの企画から運用・改善まで一気通貫で関われるのが最大の魅力です。ユーザーの反応が数字で返ってくるため、改善のサイクルを回す面白さがあります。技術選定の裁量が大きい反面、事業の浮き沈みが処遇に直結しやすい側面もあります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                ② メガベンチャー・大手テック
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                大規模な自社サービスを複数展開する上場企業群。大規模トラフィックを支える技術的挑戦と、大手ならではの福利厚生・産休育休制度の両方を得やすいタイプです。給与水準はWeb業界の中で最も高い層に入りますが、その分中途採用の選考難易度も高く、即戦力の実務経験が前提になります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>
                ③ Web受託開発企業
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                クライアントのWebサービス・アプリを受託で開発する企業。多様な業界・技術に触れられ、実務経験を積む入口として現実的な選択肢です。一方で納期・予算はクライアント次第で、担当案件によって労働環境が変わりやすい点は把握しておきましょう。SES（客先常駐）との違いは
                <a href="/articles/ses-vs-jisha/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>SES・受託・自社開発の違い</a>
                で詳しく解説しています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#10b981" }}>
                ④ スタートアップ
              </h3>
              <p className="text-sm text-text-light leading-relaxed">
                資金調達をしながら急成長を目指す少人数組織。裁量の大きさ・成長速度・ストックオプションの可能性が魅力ですが、制度の未整備や事業リスクと表裏一体です。産休育休の「制度はあるが前例がない」企業も少なくないため、女性のキャリア継続の観点では見極めが特に重要です。詳しくは
                <a href="/articles/startup/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>スタートアップ転職ガイド</a>
                をご覧ください。
              </p>
            </div>
          </div>
          <div className="overflow-x-auto mt-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>タイプ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年収の傾向</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>働き方の傾向</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>向いている人</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>自社サービス</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>業界平均並み〜やや上。事業の成長に連動</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>リモート・フレックスが浸透。改善サイクル中心</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>プロダクトを育てたい人</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>メガベンチャー</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>業界内で最高水準の層。選考難易度も高い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>制度・福利厚生が充実。産休育休実績も豊富</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>大規模開発と安定を両立したい人</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Web受託</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>業界平均〜やや下から始まることが多い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>案件次第で繁閑差。多様な技術に触れられる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>実務経験を積みたい人・幅を広げたい人</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>スタートアップ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>幅が大きい。SOなど株式報酬の可能性あり</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>裁量最大・制度は未整備のことも</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>変化とスピードを楽しめる人</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3">
            ※年収の傾向は後述のdoda「平均年収ランキング2025」・厚生労働省job tagの公開データをもとにした定性的整理です。個別企業の条件は必ず求人・面談で確認してください。
          </p>
        </div>
      </section>

      {/* sec2 市場と需要 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">実データで見るWeb業界の市場と需要</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Web業界の事業基盤であるEC・ネットサービス市場は拡大が続いています。経済産業省の「令和6年度電子商取引に関する市場調査」によると、2024年の日本のBtoC-EC（消費者向け電子商取引）市場規模は<strong>26.1兆円</strong>（前年比5.1%増）、BtoB-ECは<strong>514.4兆円</strong>（同10.6%増）に達しました。Webサービスを支えるエンジニアの仕事の土台となる市場そのものが、毎年伸び続けている状況です。
            </p>
            <p className="text-xs">出典: 経済産業省「令和6年度電子商取引に関する市場調査」（2026年6月参照）</p>
            <p>
              人材需要も高水準です。厚生労働省の職業情報提供サイトjob tagでは、システムエンジニア（Webサービス開発）の<strong>有効求人倍率は2.57倍</strong>（令和6年度）とされ、求職者1人に対して2.5件以上の求人がある売り手市場が続いています。また経済産業省「IT人材需給に関する調査」（2019年3月）は、2030年にIT人材が最大約79万人不足する可能性を試算しており、中長期でも需要が大きく崩れにくい職種といえます。
            </p>
            <p className="text-xs">出典: 厚生労働省 職業情報提供サイトjob tag「システムエンジニア（Webサービス開発）」／経済産業省「IT人材需給に関する調査」（いずれも2026年6月参照）</p>
            <div className="grid gap-4 md:grid-cols-3 mt-4">
              <div className="rounded-xl border bg-white p-5 text-center" style={{ borderColor: "#d9c7b8" }}>
                <p className="text-2xl font-bold" style={{ color: "#7c3a55" }}>26.1兆円</p>
                <p className="text-xs text-text-light mt-1">2024年BtoC-EC市場規模（前年比+5.1%）</p>
              </div>
              <div className="rounded-xl border bg-white p-5 text-center" style={{ borderColor: "#d9c7b8" }}>
                <p className="text-2xl font-bold" style={{ color: "#7c3a55" }}>2.57倍</p>
                <p className="text-xs text-text-light mt-1">Webサービス開発SEの有効求人倍率（令和6年度）</p>
              </div>
              <div className="rounded-xl border bg-white p-5 text-center" style={{ borderColor: "#d9c7b8" }}>
                <p className="text-2xl font-bold" style={{ color: "#c15f47" }}>最大79万人</p>
                <p className="text-xs text-text-light mt-1">2030年のIT人材不足試算（経産省）</p>
              </div>
            </div>
            <p className="mt-4">
              ただし「業界が伸びている＝誰でも入れる」ではありません。需要の中心は実務経験者であり、未経験者にとっての門の狭さは後述の通りです。この点を踏まえて戦略を立てることが、Web業界転職の成否を分けます。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 年収相場 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Web業界の年収相場｜「Web系＝高年収」は半分神話</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              SNSでは「Web系に行けば年収が上がる」という言説をよく見かけますが、公開データを見るとそう単純ではありません。doda「平均年収ランキング2025」によると、ITエンジニア全体の平均年収は<strong>469万円</strong>（正社員全体の平均は429万円）。業種別ではむしろ<strong>インターネット/広告/メディア業界（440万円）はシステムインテグレータ（481万円）より低い</strong>のが実態です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均年収</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>出典</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>正社員全体</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>429万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }} rowSpan={6}>doda「平均年収ランキング2025」（パーソルキャリア、2025年12月発表）</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ITエンジニア全体</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>469万円</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>インターネット/広告/メディア業界</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>440万円</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>システムインテグレータ（SIer）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>481万円</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ソフトウェア/パッケージベンダ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>493万円</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ITコンサルティング</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>505万円</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>システムエンジニア（Webサービス開発）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>578.5万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>厚生労働省 job tag（令和7年賃金構造基本統計調査ベース）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              注目すべきは数字の「ズレ」です。転職サービスの登録者ベース（doda）ではインターネット業界の平均は440万円にとどまる一方、国の賃金統計をもとにしたjob tagでは、Webサービス開発を担うシステムエンジニアの年収は<strong>578.5万円</strong>（平均年齢37.1歳）。つまりWeb業界は、<strong>経験の浅い層と経験豊富な層・大手と中小の年収差が非常に大きい業界</strong>だということです。
            </p>
            <p>
              メガベンチャーや上場テック企業のシニアエンジニアは高水準ですが、若手中心の中小Web企業や広告・メディア系は平均を押し下げています。「Web系だから高い／低い」ではなく、<strong>どのタイプの企業で・どの職種スキルを持つか</strong>で決まると考えてください。職種別の詳しい年収は
              <a href="/articles/frontend/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>フロントエンド</a>
              ・
              <a href="/articles/backend/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>バックエンド</a>
              の各ガイドで解説しています。
            </p>
            <p className="text-xs">
              出典: doda「平均年収ランキング2025」（パーソルキャリア）／厚生労働省 職業情報提供サイトjob tag「システムエンジニア（Webサービス開発）」（いずれも2026年6月参照）
            </p>
          </div>
        </div>
      </section>

      {/* sec4 SIerとの文化差 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">SIerとの文化の違い｜どちらが良いかは人による</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Web業界とSIerは同じ「ITエンジニア」でも文化が大きく異なります。ネット上では「SIer＝古い、Web系＝先進的」という単純化が目立ちますが、実際には<strong>それぞれに合理性のあるトレードオフ</strong>です。公平に比較します。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>Web業界の傾向</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>SIerの傾向</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>技術スタック</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>React/TypeScript・Go・クラウドネイティブなど自社で選定。新技術の採用が速い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>顧客システムの要件に従う。Java・実績ある枯れた技術が中心で堅実</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>開発スタイル</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>アジャイル・小さくリリースして改善。裁量が大きい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ウォーターフォール中心。ドキュメントと品質管理が体系的</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>評価制度</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>成果・技術力ベースが主流。昇給の上下動が大きめ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>等級・年次ベースの要素が残る。緩やかだが着実に上がる</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>服装・社風</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>私服・フラットな組織が多い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ビジネスカジュアル〜スーツ。顧客対応上の規律あり</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>リモートワーク</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>浸透度が高い（情報通信業のテレワーク導入率94.3%）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>導入は進むが、客先常駐案件では顧客の方針に左右される</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>教育・研修</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>OJT・自走前提。体系的な研修は薄い企業が多い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>新人研修・資格支援が体系的。未経験育成の実績が厚い</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>安定性</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>事業の浮き沈みが処遇に直結しやすい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>長期契約・大手親会社などで雇用が安定しやすい</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3">
            出典: テレワーク導入率は総務省「令和6年通信利用動向調査」（企業全体47.3%、情報通信業94.3%）（2026年6月参照）。その他は両業界の一般的傾向の整理であり、企業による差があります。
          </p>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Web業界が合う人</h3>
              <ul className="text-sm text-text-light space-y-2">
                <li>・モダンな技術を自分で選び、速いサイクルで作りたい</li>
                <li>・成果ベースの評価で年功に縛られたくない</li>
                <li>・リモート・フレックスなど働き方の柔軟さを最優先したい</li>
                <li>・自走して学び続けることが苦にならない</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>SIerが合う人</h3>
              <ul className="text-sm text-text-light space-y-2">
                <li>・体系的な研修で着実に育ちたい（未経験・第二新卒含む）</li>
                <li>・雇用と収入の安定性を重視したい</li>
                <li>・社会インフラ級の大規模プロジェクトに関わりたい</li>
                <li>・要件定義などの上流工程・マネジメントを目指したい</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6">
            SIerの働き方・年収の詳細は
            <a href="/articles/sier-industry/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>SIerへの転職ガイド</a>
            、契約形態ごとの違いは
            <a href="/articles/ses-vs-jisha/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>SES・受託・自社開発の違い</a>
            をあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* sec5 女性エンジニアから見たWeb業界 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアから見たWeb業界</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              まず現状の数字を直視すると、日本のITエンジニアに占める女性の比率は<strong>18.8%</strong>で、OECD加盟33カ国中17位（OECD平均20.6%）という調査があります。情報サービス産業協会（JISA）の会員企業調査でも、ITエンジニアのうち女性は<strong>22.6%</strong>。Web業界を含むIT業界全体で、女性はまだ少数派です。
            </p>
            <p>
              一方で変化も明確です。JISAの統計では女性エンジニア数は2013年の約3.1万人から2023年には約4.6万人へと<strong>10年間で約46%増加</strong>。さらに総務省の調査では、情報通信業のテレワーク導入率は<strong>94.3%</strong>と全産業トップで（企業全体は47.3%）、通勤や転居の制約を受けにくい働き方が業界標準になりつつあります。
            </p>
            <p className="text-xs">
              出典: ヒューマンホールディングス「ITエンジニアの女性比率に関する調査」（2025年）／情報サービス産業協会（JISA）「情報サービス産業基本統計調査」／総務省「令和6年通信利用動向調査」（いずれも2026年6月参照）
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Web業界のプラス面</h3>
              <p className="text-sm text-text-light leading-relaxed">
                リモート・フレックスの浸透により、育児・介護との両立や時短勤務の選択肢が広い。成果が可視化されやすい開発職は、勤務時間の長さではなくアウトプットで評価されやすく、時短でも実力が認められやすい構造です。メガベンチャーを中心にD&I施策や産休育休の取得実績を公開する企業も増えています。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>注意すべき点</h3>
              <p className="text-sm text-text-light leading-relaxed">
                企業差が極めて大きいのがWeb業界です。スタートアップや小規模企業では「制度はあるが取得前例がない」ケースが現実にあります。求人票だけでは分からない、産休育休の取得・復帰実績、時短勤務者の評価運用、女性管理職の有無は、エージェント経由や面談で必ず確認しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec6 現実的なルート */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Web業界転職の現実的なルート</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              ここは正直にお伝えします。<strong>完全未経験から人気の自社開発企業へ直接転職するのは狭き門</strong>です。自社開発企業の中途採用は即戦力が中心で、未経験者は経験者と同じ土俵で比較されるためです。「未経験OK・Web系」を強調する求人の中には、実態がSES（客先常駐）であるケースも混ざっているため注意が必要です。その上で、現在地別の現実的なルートは次の通りです。
            </p>
          </div>
          <div className="space-y-4">
            {[
              [
                "ルートA",
                "IT実務経験者（SIer・SESなど）→ Web系",
                "最も成功率が高いルート。要件定義・DB設計・品質管理などの経験は評価対象になります。React/TypeScript・Go・Docker/CI/CDなどモダンスタックを自主学習し、小さくてもポートフォリオを用意してから応募するのが定番。IT特化型エージェントで「SIer出身者歓迎」の求人を絞り込めます。",
              ],
              [
                "ルートB",
                "完全未経験 → 受託・SIerで経験 → Web系",
                "遠回りに見えて確実なルート。研修のある受託・SIerで1〜3年の実務経験を積み、開発の基礎体力（Git・チーム開発・テスト）を付けてからWeb系へ移ります。job tagの有効求人倍率2.57倍が示す通り経験者の需要は高く、実務経験さえあれば選択肢は大きく開けます。",
              ],
              [
                "ルートC",
                "完全未経験 → ポテンシャル採用で直接Web系",
                "不可能ではありませんが、20代など若手が中心で、学習実績とポートフォリオの完成度勝負になります。独学・スクールで半年〜1年学び、公開できる制作物を作った上で挑戦を。書類で落ち続ける場合は、ルートBへの切り替えを早めに判断するのが賢明です。",
              ],
              [
                "ルートD",
                "周辺職種から開発へ（社内異動・ジョブチェンジ）",
                "テスター・QA・カスタマーサポート・Webディレクターなどの職種でWeb企業に入り、社内で開発にスライドする方法。企業文化への適応が済んでいる分、異動のハードルは外部転職より低いことがあります。入社前に異動実績の有無を確認しておきましょう。",
              ],
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
          <p className="text-text-light leading-relaxed mt-6">
            目指す職種を先に決めると学習が迷子になりません。画面・UIを作りたい人は
            <a href="/articles/frontend/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>フロントエンドエンジニア転職ガイド</a>
            、API・データベースなど仕組み側に興味がある人は
            <a href="/articles/backend/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>バックエンドエンジニア転職ガイド</a>
            で、必要スキルとロードマップを確認してください。
          </p>
        </div>
      </section>

      {/* sec7 おすすめエージェント */}
      <section id="sec7" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Web系転職に強いエージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Web系企業への転職を成功させるには、Web系の求人に強いIT特化型エージェントの活用が不可欠です。Web系企業の内部情報や選考のポイントを熟知したアドバイザーのサポートを受けることで、転職成功率が大幅に向上します。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              {
                name: "レバテックキャリア",
                badge: "IT特化型",
                color: "#7c3a55",
                desc: "Web系・自社開発企業の求人が豊富。技術に精通したアドバイザーがスキルを正当に評価し、最適な求人を提案。年収70万円以上アップの実績多数。",
                link: "/reviews/levtech/",
              },
              {
                name: "Geekly",
                badge: "IT・Web特化",
                color: "#7c3a55",
                desc: "Web系・ゲーム業界に強みを持つIT特化型エージェント。書類選考通過率3.4倍の実績を持ち、レジュメ作成のサポートが手厚い。",
                link: "/reviews/geekly/",
              },
              {
                name: "Green",
                badge: "IT企業直結",
                color: "#10b981",
                desc: "IT・Web企業からの直接スカウトが届く転職プラットフォーム。カジュアル面談から始められるため、気軽にWeb系企業の雰囲気を知れる。",
                link: "/reviews/green/",
              },
            ].map((agent, i) => (
              <div
                key={i}
                className="rounded-xl border bg-white p-6"
                style={{ borderColor: "#d9c7b8" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: agent.color }}
                  >
                    {agent.badge}
                  </span>
                  <h3 className="text-lg font-bold">{agent.name}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed mb-3">{agent.desc}</p>
                <a
                  href={agent.link}
                  className="text-sm font-bold hover:underline"
                  style={{ color: "#7c3a55" }}
                >
                  {agent.name}の詳細レビューを見る →
                </a>
              </div>
            ))}
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              Web系企業への転職では、複数のエージェントを並行利用するのが効果的です。各エージェントが持つ独自の求人にアクセスでき、より多くの選択肢の中から最適な転職先を見つけられます。2〜3社の併用がおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* sec8 FAQ */}
      <section id="sec8" className="py-10">
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
                  className="group rounded-xl bg-white"
                  style={{ border: "1px solid #d9c7b8" }}
                >
                  <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                    <span>
                      <span style={{ color: "#7c3a55" }} className="mr-2">
                        Q.
                      </span>
                      {faq.name}
                    </span>
                    <span className="text-text-light group-open:rotate-180 transition-transform">
                      &#9662;
                    </span>
                  </summary>
                  <div
                    className="px-6 pb-4 text-sm text-text-light leading-relaxed"
                    style={{ borderTop: "1px solid #d9c7b8" }}
                  >
                    <p className="pt-4">
                      <span style={{ color: "#c15f47" }} className="font-bold mr-2">
                        A.
                      </span>
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                </details>
              )
            )}
          </div>
        </div>
      </section>

      {/* sec9 出典一覧 */}
      <section id="sec9" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典一覧</h2>
          <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・出典: 経済産業省「令和6年度電子商取引に関する市場調査」2025年8月公表（2026年6月参照）</li>
              <li>・出典: doda「平均年収ランキング2025」パーソルキャリア、2025年12月発表（2026年6月参照）</li>
              <li>・出典: 厚生労働省 職業情報提供サイトjob tag「システムエンジニア（Webサービス開発）」令和7年賃金構造基本統計調査ベース（2026年6月参照）</li>
              <li>・出典: 総務省「令和6年通信利用動向調査」（2026年6月参照）</li>
              <li>・出典: ヒューマンホールディングス「ITエンジニアの女性比率に関する調査」2025年（2026年6月参照）</li>
              <li>・出典: 一般社団法人情報サービス産業協会（JISA）「情報サービス産業基本統計調査」（2026年6月参照）</li>
              <li>・出典: 経済産業省「IT人材需給に関する調査」2019年3月（2026年6月参照）</li>
            </ul>
            <p className="text-xs text-text-light mt-4">
              ※本記事の年収・統計データは上記公開資料に基づく参考値です。調査主体・対象・時期により数値は異なり、個別の求人条件を保証するものではありません。
            </p>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/sier-industry/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                SIerへの転職ガイド
              </h3>
              <p className="text-sm text-text-light">SIerの働き方と女性エンジニアの活躍</p>
            </a>
            <a
              href="/articles/ses-vs-jisha/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                SES・受託・自社開発の違い
              </h3>
              <p className="text-sm text-text-light">契約形態ごとの働き方を徹底比較</p>
            </a>
            <a
              href="/articles/startup/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                スタートアップ転職ガイド
              </h3>
              <p className="text-sm text-text-light">スタートアップ企業の魅力とリスク</p>
            </a>
            <a
              href="/articles/frontend/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                フロントエンドエンジニア転職
              </h3>
              <p className="text-sm text-text-light">フロントエンド特化のキャリアガイド</p>
            </a>
            <a
              href="/articles/backend/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                バックエンドエンジニア転職ガイド
              </h3>
              <p className="text-sm text-text-light">年収・必要スキル・未経験からの道</p>
            </a>
            <a
              href="/articles/game-industry/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                ゲーム業界への転職ガイド
              </h3>
              <p className="text-sm text-text-light">ゲーム業界の需要と年収を解説</p>
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
              Web系企業への転職を実現しましょう
            </h2>
            <p className="text-white/90 mb-6">
              IT特化型エージェントに無料相談して、あなたに合ったWeb系企業を見つけましょう。
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
