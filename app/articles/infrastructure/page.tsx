import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性インフラエンジニア転職ガイド｜年収・未経験からの道・夜勤の実態【2026年】",
  description:
    "女性インフラエンジニアの転職ガイド2026年版。平均年収475万円（求人ボックス）の実データと運用保守→構築→設計のラダー別年収、未経験から運用監視で入る現実的ルート、夜勤・オンコールの実態と回避策、CCNA/LPIC資格ルート、クラウド化による職種変化まで出典付きで解説します。",
  alternates: { canonical: "/articles/infrastructure/" },
  openGraph: {
    title: "女性インフラエンジニア転職ガイド｜年収・未経験からの道・夜勤の実態【2026年】",
    description:
      "女性インフラエンジニアの年収（ラダー別）・未経験から運用監視で入るルート・夜勤の実態と回避策・資格ルート・クラウド化の影響を実データで解説。",
    url: "https://women-engineer.com/articles/infrastructure/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性インフラエンジニア転職ガイド｜年収・未経験からの道・夜勤の実態【2026年】",
  datePublished: "2026-04-27",
  dateModified: "2026-07-09",
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
    "女性インフラエンジニアの年収（運用保守→構築→設計のラダー別）・未経験からのルート・夜勤オンコールの実態と回避策・資格ルート・クラウド化の影響を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/infrastructure/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "インフラエンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "求人ボックスの統計（2026年時点）では、インフラエンジニア正社員の平均年収は約475万円、給与幅は315万〜962万円と広く、ボリュームゾーンは395万〜476万円です。厚生労働省job tagの「運用・管理（IT）」では平均609.8万円（令和7年賃金構造基本統計調査、平均年齢42.2歳）という数字もあり、経験を積むほど大きく伸びる職種です。担当フェーズで差が大きく、運用監視は300万円台から、構築で450万円前後、設計・上流やクラウド/SREに進むと600万〜1,000万円超も狙えます。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもインフラエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "なれます。インフラはIT職種の中でも未経験の入口が広く、運用監視（サーバーやネットワークの状態をチェックし、異常があれば報告・一次対応する仕事）からスタートするのが定番ルートです。手順書に沿って覚えられるため文系・異業種出身でも始めやすく、CCNAやLPICなどの資格でやる気と基礎知識を示せば採用率が上がります。ただし監視のままでは年収が伸びにくいため、「2〜3年で運用→構築に進む」前提で、構築経験を積める会社を選ぶことが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "インフラエンジニアの夜勤は必ずありますか？女性でも続けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "全員にあるわけではありません。夜勤が発生するのは主に24時間監視や夜間メンテナンスを担う運用・監視フェーズで、2交代制（例: 夜勤17時〜翌朝9時）や3交代制のシフトが一般的です。深夜労働には労働基準法で25%以上の割増賃金が義務付けられており、夜勤手当で若手のうちは収入が増える面もあります。一方、構築・設計などの上流工程、クラウド運用、社内SEは日勤中心です。夜勤を避けたい場合は「日勤のみ」の求人を選ぶか、構築・設計へのステップアップを前提にキャリアを設計しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "インフラエンジニアとSRE・社内SEの違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "インフラエンジニアはサーバー・ネットワーク・クラウドなどIT基盤の設計・構築・運用を幅広く担う職種の総称です。SREはその発展形で、ソフトウェアエンジニアリング（コード・自動化）でサービスの信頼性を高める専門職、社内SEは自社のシステムやIT環境を支える職種です。キャリアの流れとしては、インフラで運用・構築の経験を積んだ後、技術を深めるならSRE・クラウドエンジニア、ワークライフバランスを重視するなら社内SEへ進む人が多く、どちらも女性が長く働きやすい進路です。",
      },
    },
    {
      "@type": "Question",
      name: "クラウド化でインフラエンジニアの仕事はなくなりませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "なくなりませんが、仕事の中身は変わります。IDC Japanによると国内パブリッククラウド市場は2025年に4兆4,930億円（前年比20.3%増）、2030年には10兆962億円と約2.2倍に拡大する見込みで、物理機器の設置・配線のような仕事は減る一方、AWSなどクラウド上での設計・構築やIaC（コードによるインフラ管理）の需要が急増しています。求人ボックスの統計でもクラウド関連の給与水準は全体より高い傾向です。オンプレミスの基礎にクラウドスキルを足すことが、年収と将来性を両立する最短ルートです。",
      },
    },
    {
      "@type": "Question",
      name: "女性のインフラエンジニアは少ないですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "インフラを含むIT基盤系の職種は、一般に男性が多い職場になりやすい傾向があるとされますが、職種単位の公的な女性比率統計はほとんど公表されていません。IT業界全体の女性比率などの統計は、当サイトの「女性エンジニアのデータ集」で出典付きで整理しています。実務で評価されるのは障害対応の正確さ・報告や調整の丁寧さ・段取り力であり、女性が少数派であること自体が不利に働く職種ではありません。むしろ慢性的な人材不足が続く領域のため、資格と経験があれば性別を問わず売り手市場です。",
      },
    },
    {
      "@type": "Question",
      name: "子育てしながらインフラエンジニアを続けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "続けられますが、担当フェーズの選び方が重要です。24時間監視を担う運用フェーズはシフト勤務が基本のため、一般に保育園の送迎など時間の制約とは両立しにくい面があります。一方、構築・設計・クラウド運用・社内SEは日勤中心で、クラウド化によりリモートで完結する業務も増えています。出産・育児を見据えるなら、その前に構築経験を積んで日勤中心のポジションへ移っておくのが現実的な戦略です。時短勤務の実績や夜間対応の扱いは企業ごとに差が大きいため、エージェント経由で運用実態を確認しましょう。",
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
              { label: "インフラエンジニア転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              職種別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性インフラエンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収・未経験からの道・夜勤の実態【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月9日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>この記事の結論</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li>・インフラエンジニアの平均年収は<strong>約475万円</strong>（求人ボックス、2026年時点）。担当フェーズで差が大きく、<strong>運用監視300万円台 → 構築450万円前後 → 設計・上流550万〜800万円</strong>とラダー状に上がる</li>
              <li>・<strong>未経験の入口はIT職種の中でも広い</strong>。運用監視からスタートし、CCNA/LPICを取って2〜3年で構築へ進むのが王道ルート</li>
              <li>・夜勤・オンコールがあるのは主に<strong>運用・監視フェーズ</strong>。構築・設計・クラウド運用・社内SEに進めば日勤中心になり、ライフイベントとも両立しやすい</li>
              <li>・国内クラウド市場は<strong>2030年に約2.2倍</strong>へ拡大見込み（IDC Japan）。オンプレの基礎＋クラウドスキルが年収と将来性を両立する鍵</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. インフラエンジニアとは（仕事内容とSRE・社内SEとの違い）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 年収相場（運用保守→構築→設計のラダー別）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 未経験から入りやすい理由と現実（運用監視スタート）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 夜勤・オンコールの実態と回避策</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 女性が長く働くための両立戦略</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 資格ルート（CCNA・LPIC・AWS）</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. クラウド化で変わる仕事と将来性</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. インフラエンジニアのキャリアパス</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. おすすめ転職エージェント</a></li>
              <li><a href="#sec-women" className="hover:underline" style={{ color: "#7c3a55" }}>10. 女性がインフラエンジニアとして働くリアル</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>11. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">インフラエンジニアとは（仕事内容とSRE・社内SEとの違い）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              インフラエンジニアは、Webサービスや業務システムが動く土台――<strong>サーバー・ネットワーク・OS・データベース・クラウド環境</strong>を設計・構築・運用する職種の総称です。アプリケーションを作る開発エンジニアに対し、「アプリが24時間365日、安全に動き続ける基盤」を支える役割を担います。
            </p>
            <p>
              仕事は大きく3つのフェーズに分かれ、<strong>「運用・保守・監視」→「構築」→「設計（上流）」</strong>の順にステップアップしていくのが一般的です。このラダー構造が、未経験でも入りやすく、かつ経験を積めば着実に年収が上がるというインフラ職の最大の特徴を生んでいます。
            </p>
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#efe3d8" }}>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>フェーズ</th>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>主な仕事</th>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>特徴</th>
                  </tr>
                </thead>
                <tbody className="text-text-light">
                  <tr>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>運用・保守・監視</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>稼働状況のチェック、障害の検知・一次対応、定期メンテナンス</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>未経験の入口。手順書ベースで覚えやすいが、夜勤シフトが発生しやすい</td>
                  </tr>
                  <tr style={{ backgroundColor: "#f0e7dd" }}>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>構築</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>設計書に基づくサーバー・ネットワーク・クラウド環境の構築、設定、テスト</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>技術力が一気に伸びる工程。日勤中心になり年収も上がる</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>設計・要件定義（上流）</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>顧客要件のヒアリング、構成・容量・セキュリティの設計、コスト見積もり</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>高年収ゾーン。経験と対話力が評価され、長く働ける</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              なお、コードと自動化でサービスの信頼性を高める<strong>SRE・DevOps</strong>はインフラ経験者の発展キャリアです（詳しくは<a href="/articles/sre-devops/" className="underline" style={{ color: "#7c3a55" }}>SRE・DevOpsエンジニア転職ガイド</a>）。また、自社のIT基盤を支える<strong>社内SE</strong>もインフラ経験を活かせる人気の進路です（<a href="/articles/internal-se/" className="underline" style={{ color: "#7c3a55" }}>社内SE転職ガイド</a>）。本記事では、その手前にある「インフラエンジニア全般（サーバー・ネットワーク・クラウド運用）」を軸に解説します。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 年収 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収相場（運用保守→構築→設計のラダー別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              求人ボックスの統計（2026年時点）によると、インフラエンジニア正社員の平均年収は<strong>約475万円</strong>。月給換算で約40万円、初任給は23万円程度が相場です。給与幅は<strong>315万〜962万円</strong>と広く、ボリュームゾーンは395万〜476万円。つまり「どのフェーズを担当しているか」で年収が大きく変わる職種です。
            </p>
            <p>
              また、厚生労働省の職業情報提供サイトjob tagでは、「運用・管理（IT）」の平均年収は<strong>609.8万円</strong>（平均年齢42.2歳、令和7年賃金構造基本統計調査）。経験を積んだ層まで含めると、日本の給与所得者平均を大きく上回る水準です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>キャリアラダー</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>運用監視オペレーター</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>300万〜400万円程度</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>未経験の入口。夜勤手当（深夜割増25%以上）で上振れする場合あり</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>運用・保守</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>350万〜500万円程度</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>運用のみだと500万円前後で頭打ちになりやすいとの指摘が多い</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>構築</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>450万〜600万円程度</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>転職市場で「経験者」と評価される分岐点</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>設計・要件定義（上流）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>550万〜800万円程度</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>求人ボックス統計の給与幅上限は962万円</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>クラウド / SRE</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>600万〜1,000万円超</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>クラウド関連求人は給与水準が全体より高い傾向（求人ボックス）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-xs mt-3">
            ※ラダー別の金額は各転職サービスの公開データをもとにした目安で、企業規模・商流・地域により変動します。<br />
            出典: 求人ボックス 給料ナビ「インフラエンジニアの年収・時給」（2026年6月参照）／厚生労働省 職業情報提供サイトjob tag「運用・管理（IT）」（2026年6月参照）
          </p>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>運用から構築・設計へ工程を上げる</strong>。同じ社歴でも担当フェーズで100万円単位の差がつく</li>
              <li>② <strong>クラウド（AWS等）スキルを足す</strong>。クラウド関連求人は給与水準が高め（求人ボックス）</li>
              <li>③ <strong>エージェント経由で商流の良い会社へ移る</strong>。多重下請けの下層から元請け・自社運用側に出るだけで年収が変わる</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec3 未経験 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から入りやすい理由と現実（運用監視スタート）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              インフラエンジニアは、IT職種の中でも<strong>未経験者向けの入口が広い</strong>職種です。理由はシンプルで、24時間365日の運用監視という「人手が常に必要で、手順書に沿って覚えられる仕事」が入口に存在するからです。プログラミングのポートフォリオが事実上必須となる開発職に比べ、文系・異業種出身の女性でも踏み出しやすいルートといえます。
            </p>
            <p>
              ただし、正直にお伝えすべき現実もあります。監視オペレーターの仕事（アラートのチェック、障害の一次報告、定型作業）だけを長く続けても、転職市場で「インフラエンジニア経験」とは評価されにくく、年収も伸びにくいのです。大切なのは<strong>「監視は通過点。2〜3年で運用→構築に進む」前提でキャリアを設計する</strong>こと。最初の会社選びの段階で「構築工程に進める実績があるか」を確認しましょう。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              ["STEP1", "ITインフラの基礎を学ぶ（1〜3ヶ月）", "ネットワークの仕組み（TCP/IP）とLinuxの基本操作から。CCNAやLPIC レベル1の学習がそのまま基礎固めになります。"],
              ["STEP2", "資格を取って未経験求人に応募", "CCNAまたはLPIC（LinuC）を取得して学習意欲を証明。運用監視・運用保守の未経験可求人は通年で多く、20代なら採用ハードルは高くありません。"],
              ["STEP3", "運用監視〜運用保守で経験を積む（1〜2年）", "障害対応の流れ、サーバー・ネットワーク機器の実機、ITILベースの運用プロセスを吸収。「障害の原因を自分で調べる」姿勢が次の工程への切符になります。"],
              ["STEP4", "構築工程へ手を挙げる（2〜3年目）", "手順書作成や検証環境の構築など、運用の中の「構築っぽい仕事」を拾いながら異動・転職で構築ポジションへ。ここで夜勤からも卒業しやすくなります。"],
              ["STEP5", "クラウド・設計へ広げる", "AWS認定資格などでクラウドスキルを足し、設計・上流やクラウド運用へ。年収600万円以上のゾーンが見えてきます。"],
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
          <p className="text-text-light text-sm leading-relaxed mt-4">
            IT業界そのものが初めての方は、職種選びの全体像を<a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>未経験から女性エンジニアになるガイド</a>で先に確認しておくと、インフラが自分に合うか判断しやすくなります。
          </p>
        </div>
      </section>

      {/* sec4 夜勤 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">夜勤・オンコールの実態と回避策</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              インフラ職を検討する女性が最も気にするのが夜勤です。ここは美化せずにお伝えします。<strong>夜勤があるのは主に運用・監視フェーズ</strong>で、理由は (1)システムの24時間365日監視、(2)利用者の少ない夜間に行うアップデートやメンテナンス、(3)夜間の障害・問い合わせ対応が必要だからです。
            </p>
            <p>
              シフトは<strong>2交代制（例: 日勤9時〜18時／夜勤17時〜翌朝9時）や3交代制</strong>が一般的で、頻度は職場により週1〜4回程度。夜勤明けは休みになるシフトが多く、「拘束は長いが残業はほぼない」「夜間は障害がなければ静か」という声がある一方、生活リズムの乱れや肌・体調への影響を理由に長期継続を避けたい人が多いのも実態です。なお深夜労働（22時〜翌5時）には<strong>労働基準法第37条で25%以上の割増賃金</strong>が義務付けられており、若手のうちは夜勤手当で同年代より収入が高くなるケースもあります。
            </p>
            <p>
              オンコール（呼び出し待機）は、構築・運用を兼ねる少人数チームやSRE的なポジションで発生します。こちらも当番制・手当・翌日調整などのルール次第で負担が大きく変わるため、求人段階での確認が必須です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>回避策1: 「日勤のみ」の求人を選ぶ</h3>
              <p className="text-text-light text-sm leading-relaxed">運用でも日勤帯のみのポジションは存在します。求人票だけでは分かりにくいため、エージェント経由で「夜勤・シフトの有無」「オンコール当番の頻度と手当」を確認するのが確実です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>回避策2: 構築・設計へ工程を上げる</h3>
              <p className="text-text-light text-sm leading-relaxed">構築・設計の仕事は基本的に日勤です。「夜勤は最初の2〜3年だけ」と期限を切り、構築経験を積んで卒業するのがインフラ職の王道戦略です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>回避策3: クラウド運用へシフトする</h3>
              <p className="text-text-light text-sm leading-relaxed">クラウド環境は監視・復旧の自動化が進んでおり、深夜の駆けつけ対応が減ります。リモートで完結する仕事も多く、<a href="/articles/aws-career/" className="underline" style={{ color: "#7c3a55" }}>AWSスキルを身につける</a>ことが夜勤回避と年収アップの両方に効きます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>回避策4: 社内SE・情シスへ転身する</h3>
              <p className="text-text-light text-sm leading-relaxed">自社システムを支える社内SEは日勤・土日休みが基本で、インフラ運用経験者の代表的な転身先です。詳しくは<a href="/articles/internal-se/" className="underline" style={{ color: "#7c3a55" }}>社内SE転職ガイド</a>をご覧ください。</p>
            </div>
          </div>
          <p className="text-text-light text-xs mt-4">
            出典: ウズウズカレッジ「インフラエンジニアに夜勤がある理由は？」（2026年6月参照）／労働基準法第37条（深夜割増賃金）
          </p>
        </div>
      </section>

      {/* sec5 両立戦略 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が長く働くための両立戦略</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「夜勤がある職種は出産後に続けられないのでは」という不安はもっともです。しかしインフラ職は、<strong>ライフイベントの前にどのフェーズへ進んでおくかで働き方を設計できる</strong>、数少ない職種でもあります。
            </p>
            <p>
              現実的なモデルは次の通りです。20代のうちに運用監視→構築の経験を積み（夜勤手当で貯蓄もしやすい時期）、出産・育児を見据えるタイミングで<strong>日勤中心の構築・設計、クラウド運用、社内SEのいずれかにポジションを移す</strong>。インフラの知識は陳腐化が遅く、ネットワーク・Linux・クラウドの基礎は10年単位で通用するため、産育休のブランクが技術的な致命傷になりにくいのも強みです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 慢性的な人材不足で復帰しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">経済産業省「IT人材需給に関する調査」（2019年）は2030年に最大79万人のIT人材不足を試算。基盤を支えるインフラ人材は特に採用難が続いており、経験者は時短・リモートなど条件交渉がしやすい売り手市場です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. クラウド化でリモート可能な仕事が増加</h3>
              <p className="text-text-light text-sm leading-relaxed">データセンターへの出社が必須だった時代と違い、クラウド上の構築・運用はリモートで完結します。子どもの急な発熱にも在宅で対応しやすい働き方が選べます。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 「止めない」仕事は評価が安定的</h3>
              <p className="text-text-light text-sm leading-relaxed">インフラは安定稼働そのものが成果。流行を追い続ける消耗戦になりにくく、ITILベースの運用設計や障害対応の経験値が積み上がる「年齢とともに強くなる」職種です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 資格が市場価値の「証明書」になる</h3>
              <p className="text-text-light text-sm leading-relaxed">CCNA・LPIC・AWS認定など、スキルを客観的に示せる資格体系が整っており、ブランク後の復職活動でも実力を証明しやすいのが他職種にない利点です。</p>
            </div>
          </div>
          <p className="text-text-light text-xs mt-4">
            出典: 経済産業省「IT人材需給に関する調査」2019年（2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec6 資格 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">資格ルート（CCNA・LPIC・AWS）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              インフラ職は開発職に比べて<strong>資格が採用・昇給に直結しやすい</strong>のが特徴です。ポートフォリオを作りにくい職種だからこそ、資格が「基礎知識と学習意欲の証明書」として機能します。未経験からの定番は次の3段階です。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>入門</span>
              <div>
                <h3 className="font-bold mb-1">CCNA（ネットワーク）／ LPIC・LinuC レベル1（Linuxサーバー）</h3>
                <p className="text-sm text-text-light leading-relaxed">未経験転職の二大定番。ネットワーク志向ならCCNA、サーバー志向ならLPIC/LinuCから。どちらか1つで運用監視・運用保守の採用率が大きく変わります。学習方法と難易度は<a href="/articles/cert-lpic/" className="underline" style={{ color: "#7c3a55" }}>LPIC・LinuC資格ガイド</a>で詳しく解説しています。</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>実務1〜3年</span>
              <div>
                <h3 className="font-bold mb-1">AWS認定（SAAなど）／ LPICレベル2</h3>
                <p className="text-sm text-text-light leading-relaxed">構築工程・クラウド案件への切符。特にAWS認定ソリューションアーキテクト−アソシエイト（SAA）はクラウド求人で最も言及される資格です。キャリアへの効き方は<a href="/articles/aws-career/" className="underline" style={{ color: "#7c3a55" }}>AWSエンジニアのキャリアガイド</a>を参照してください。</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>中堅以降</span>
              <div>
                <h3 className="font-bold mb-1">AWS認定プロフェッショナル／CCNP／情報処理安全確保支援士など</h3>
                <p className="text-sm text-text-light leading-relaxed">設計・上流やセキュリティ専門職への展開に。ここまで来ると資格より実績が主役になりますが、専門性の対外証明として年収交渉の材料になります。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 クラウド化 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">クラウド化で変わる仕事と将来性</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「クラウドが普及したらインフラエンジニアは不要になる」と言われることがありますが、データはむしろ逆を示しています。IDC Japanの予測（2026年3月発表）によると、国内パブリッククラウドサービス市場は<strong>2025年に4兆4,930億円（前年比20.3%増）、2030年には10兆962億円と約2.2倍</strong>に拡大する見込みです。クラウドを設計・運用する人材の需要は増え続けています。
            </p>
            <p>
              変わるのは仕事の中身です。物理サーバーの設置・配線・据え付けといった作業は減り、<strong>AWSなどクラウド上での構成設計、IaC（Terraform等のコードによるインフラ管理）、コスト最適化、セキュリティ設定</strong>が主戦場になりました。求人ボックスの統計でも、クラウドサービス関連の給与水準は全体より高い傾向が出ています。
            </p>
            <p>
              ここで重要なのは、<strong>クラウド時代でもオンプレミス（自社保有）の基礎知識が武器になる</strong>ことです。ネットワーク・Linux・仮想化の原理はクラウドの中身そのものであり、金融・医療・官公庁などではオンプレとクラウドを併用するハイブリッド構成が主流です。「オンプレの基礎を持ったクラウド人材」は最も採用ニーズの高い人材像であり、運用監視からスタートする従来型のキャリアラダーが決して遠回りでない理由がここにあります。
            </p>
          </div>
          <p className="text-text-light text-xs mt-4">
            出典: IDC Japan「国内パブリッククラウドサービス市場予測」2026年3月発表（2026年6月参照）／求人ボックス 給料ナビ（2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec8 キャリアパス */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">インフラエンジニアのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>構築・設計まで経験したインフラエンジニアには、複数の進路が開けます。ライフプランに合わせて選べる幅の広さが、この職種の最大の資産です。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>クラウドエンジニア / SRE</h3>
              <p className="text-sm text-text-light">AWS・自動化のスキルを深め、信頼性エンジニアリングの専門家へ。年収レンジが最も高い進路です。詳しくは<a href="/articles/sre-devops/" className="underline" style={{ color: "#7c3a55" }}>SRE・DevOps転職ガイド</a>へ。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>社内SE / 情シス</h3>
              <p className="text-sm text-text-light">日勤・土日休み中心でワークライフバランス重視の定番進路。インフラ運用経験者は即戦力として歓迎されます（<a href="/articles/internal-se/" className="underline" style={{ color: "#7c3a55" }}>社内SE転職ガイド</a>）。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>ITアーキテクト / セキュリティ</h3>
              <p className="text-sm text-text-light">設計経験を広げてシステム全体の構成を描くアーキテクトへ、または需要が急増するセキュリティ専門職へ進む道。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>マネジメント / フリーランス</h3>
              <p className="text-sm text-text-light">運用チームリーダーやPMとして組織を率いる道、または構築・クラウド案件で独立する道。設計経験があれば単価交渉力も高まります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec9 エージェント */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              インフラ職の転職では「夜勤・オンコールの実態」「構築工程に進めるか」など求人票に出ない情報が決定的に重要です。IT特化型と女性特化型を併用して、内情を確認しながら選びましょう。
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

      {/* 女性が働くリアル */}
      <section id="sec-women" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がインフラエンジニアとして働くリアル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              夜勤・オンコールの実態は<a href="#sec4" className="underline" style={{ color: "#7c3a55" }}>セクション4</a>、両立戦略は<a href="#sec5" className="underline" style={{ color: "#7c3a55" }}>セクション5</a>で解説したとおりです。ここでは総まとめとして、「女性がインフラという職種を選ぶと実際どうなのか」を、相性・ライフイベント・注意点の視点で率直に整理します。向き不向きは性別で決まりませんが、働き方の設計に効いてくる職種特有の構造があります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 職種との相性: 正確さと段取りが評価される</h3>
              <p className="text-text-light text-sm leading-relaxed">未経験の入口が広く、手順書に沿った正確な作業・丁寧な報告・障害時の冷静な連絡調整といった力がそのまま評価につながります。かつての「データセンターでの力仕事」のイメージは薄れつつあり、クラウド化でリモートで完結する業務が増えているのも追い風です。一方、一般にIT基盤系は男性の多い職場になりやすい傾向があり、現場によっては女性が少数派になることもあります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 産休育休・時短との相性: フェーズ選びがすべて</h3>
              <p className="text-text-light text-sm leading-relaxed">正直なところ、24時間監視のシフト勤務のままでは、保育園の送迎など時間の制約と両立しにくい面があります。逆に、ライフイベントの前に構築・設計・クラウド運用へ進んでおけば日勤中心となり、両立の難易度は大きく下がります。ネットワーク・Linuxなどの基礎知識は陳腐化が遅く、CCNA・LPICなどの資格でブランク後も実力を証明しやすいことは、復職のしやすさという意味で大きな強みです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. キャリアパス: 日勤・リモート中心の進路を選べる</h3>
              <p className="text-text-light text-sm leading-relaxed">経験を積んだ後は、<a href="/articles/cloud-gcp-azure/" className="underline" style={{ color: "#7c3a55" }}>クラウドエンジニア</a>や<a href="/articles/sre-devops/" className="underline" style={{ color: "#7c3a55" }}>SRE・DevOps</a>のように技術を深める道も、<a href="/articles/internal-se/" className="underline" style={{ color: "#7c3a55" }}>社内SE</a>のようにワークライフバランスへ寄せる道も選べます。「20代で夜勤込みの運用・構築経験と資格を貯め、30代で働き方を選ぶ」という時間軸で設計しやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>4. 現実的な注意点</h3>
              <p className="text-text-light text-sm leading-relaxed">夜間メンテナンスやオンコール当番のある現場は今も存在します（主に運用フェーズ）。障害対応は突発的で、当番日は外出や予定が縛られることもあります。応募前に「夜勤・シフトの有無」「オンコールの頻度と手当」「時短勤務の実績」を必ず確認してください。また、運用監視のまま長く働いても市場評価が上がりにくい点は、キャリア設計上の重要な注意点です。</p>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              女性比率や年収などの具体的な数値は、<a href="/articles/data/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアのデータ集</a>・<a href="/articles/salary-by-job/" className="underline" style={{ color: "#7c3a55" }}>職種別年収ガイド</a>・<a href="/articles/demand/" className="underline" style={{ color: "#7c3a55" }}>IT人材の需要データ</a>で出典付きで整理しています。インフラが自分に合うか迷う場合は<a href="/diagnosis/" className="underline" style={{ color: "#7c3a55" }}>転職エージェント無料診断</a>で相性を確かめ、具体的な求人は<a href="/ranking/" className="underline" style={{ color: "#7c3a55" }}>おすすめエージェントランキング</a>から探してみてください。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-3">本記事の主な出典</h2>
            <ul className="space-y-1 text-xs text-text-light leading-relaxed">
              <li>・出典: 求人ボックス 給料ナビ「インフラエンジニアの仕事の年収・時給・給料」（2026年6月参照）</li>
              <li>・出典: 厚生労働省 職業情報提供サイトjob tag「運用・管理（IT）」令和7年賃金構造基本統計調査（2026年6月参照）</li>
              <li>・出典: IDC Japan「国内パブリッククラウドサービス市場予測」2026年3月発表（2026年6月参照）</li>
              <li>・出典: 経済産業省「IT人材需給に関する調査」2019年（2026年6月参照）</li>
              <li>・出典: ウズウズカレッジ「インフラエンジニアに夜勤がある理由は？」（2026年6月参照）</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアのキャリアパス全体像</h3><p className="text-sm text-text-light">職種の全体像と進み方をまとめたガイド</p></a>
            <a href="/articles/cert-lpic/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>LPIC・LinuC資格ガイド</h3>
              <p className="text-sm text-text-light">未経験インフラ転職の定番資格を解説</p>
            </a>
            <a href="/articles/aws-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>AWSエンジニアのキャリアガイド</h3>
              <p className="text-sm text-text-light">クラウドスキルで年収と働き方を変える</p>
            </a>
            <a href="/articles/sre-devops/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>SRE・DevOpsエンジニア転職ガイド</h3>
              <p className="text-sm text-text-light">インフラ経験者の高年収キャリア</p>
            </a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験から女性エンジニアになるには</h3>
              <p className="text-sm text-text-light">職種選びからの完全ロードマップ</p>
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
