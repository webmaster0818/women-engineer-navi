import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ワークポートとリクルートエージェントの違い｜女性エンジニアの使い分け【2026年】",
  description:
    "ワークポートとリクルートエージェントの違いを公式サイトの公開情報のみで整理。運営会社・求人数の公式表示・サポート体制を出典付きで比較し、未経験・経験者・地方在住など状況別の使い分けを中立に解説します。",
  alternates: { canonical: "/articles/workport-vs-recruit/" },
  openGraph: {
    title: "ワークポートとリクルートエージェントの違い｜女性エンジニアの使い分け【2026年】",
    description:
      "ワークポートとリクルートエージェントの違いを公式サイトの公開情報のみで整理。運営会社・求人数の公式表示・サポート体制を出典付きで比較し、状況別の使い分けを中立に解説します。",
    url: "https://women-engineer.com/articles/workport-vs-recruit/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ワークポートとリクルートエージェントの違い｜女性エンジニアの使い分け【2026年】",
  datePublished: "2026-04-28",
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
    "ワークポートとリクルートエージェントの違いを公式サイトの公開情報のみで整理。運営会社・求人数の公式表示・サポート体制を出典付きで比較し、状況別の使い分けを中立に解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/workport-vs-recruit/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ワークポートとリクルートエージェントはどう違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "どちらも全業界・全職種を扱う総合型の転職エージェントですが、公式サイトの公開情報からは構造の違いが読み取れます。ワークポートは公式サイトで「全国47都道府県に拠点展開している総合型転職エージェント」と説明し、会社情報の事業内容にIT・Web・ゲーム業界の人材紹介を明記しています（求人数は15万件以上・2026年4月1日時点の公式表示）。リクルートエージェントは公式サイトで「業界最大級の求人データベース」を掲げ、公開求人約76万件・非公開求人約27万件（2026年5月30日時点の公式表示）と案内しています。どちらが優れているかではなく、規模感と事業の重心が異なるサービスです。",
      },
    },
    {
      "@type": "Question",
      name: "求人数はどちらが多いですか？単純に比較できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイトの表示では、ワークポートが「求人数15万件以上」（2026年4月1日時点）、リクルートエージェントが「公開求人約76万件・非公開求人約27万件」（2026年5月30日時点）です。ただし、集計時点・公開と非公開の区分・求人数のカウント方法（採用予定人数ベースかどうか等）が各社で異なるため、数値の単純比較で優劣は判断できません。また、表示総数のうち自分の職種・地域・条件に合う求人がどれだけあるかは人によって異なるので、最終的には登録後に紹介される求人で判断するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "リクルートエージェントの運営会社は株式会社リクルートではないのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "現在の運営会社は株式会社インディードリクルートパートナーズです。リクルートグループの体制変更に伴い、2025年4月1日に株式会社リクルートから分割するかたちで設立された会社で、本社は東京都千代田区丸の内です。株式会社リクルートの公式サイトでも、2025年4月1日よりリクルートエージェント等のサービス提供会社が変更となる旨が告知されています。リクルートグループ内での移管であり、サービス名称は「リクルートエージェント」のまま提供されています。",
      },
    },
    {
      "@type": "Question",
      name: "ワークポートとリクルートエージェントはどちらも無料で使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、どちらも求職者は無料で利用できます。ワークポート公式サイトは「ワークポートの転職支援サービスは、すべて無料でご利用いただけます。転職エージェントは人材を募集している企業さまから紹介手数料をいただくことにより事業を運営しています」と説明し、リクルートエージェント公式サイトも「ご利用頂く転職者様からは一切料金を頂いておりません」と明記しています。これは2社に限らず、職業安定法により有料職業紹介事業者が求職者から手数料を取ることが原則禁止されているためです。",
      },
    },
    {
      "@type": "Question",
      name: "ワークポートとリクルートエージェントは併用してもいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "併用は可能で、ルール上もマナー上も問題ありません。両社は規模感や事業の重心が異なるため、紹介される求人や提案の傾向を見比べる材料になります。併用時の注意点は、同じ求人に複数のエージェント経由で重複応募しないこと（応募管理は自分で一元化する）、併用していること自体は隠さず伝えること、登録数を増やしすぎて面談・連絡の管理が破綻しないようにすることの3点です。総合型同士の併用に加えて、IT特化型や女性特化型を組み合わせる考え方もあります。",
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
      name: "ワークポート vs リクルートエージェント比較",
      item: "https://women-engineer.com/articles/workport-vs-recruit/",
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
              { label: "ワークポート vs リクルートエージェント比較" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#c15f47" }}
            >
              エージェント比較
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              ワークポートとリクルートエージェントの違い
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性エンジニアの使い分け【2026年】
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
                ① 2社はどちらも総合型だが構造が異なる。<strong>ワークポート</strong>は事業内容にIT・Web・ゲーム業界の人材紹介を明記する<strong>IT寄りの総合型</strong>（求人数15万件以上・2026年4月1日時点の公式表示）、<strong>リクルートエージェント</strong>は「業界最大級の求人データベース」を掲げる<strong>最大手の総合型</strong>（公開求人約76万件・2026年5月30日時点の公式表示）
              </li>
              <li>
                ② 求人数は<strong>集計時点・公開非公開の区分・カウント方法が各社で異なる</strong>ため、数値の単純比較で優劣は判断できない
              </li>
              <li>
                ③ どちらが良いかは<strong>優劣ではなく状況次第</strong>。IT職種の選択肢を深掘りしたいか、業界横断で母数を最大化したいかで軸を決め、迷うなら<strong>併用して提案を見比べる</strong>のが現実的
              </li>
              <li>
                ④ どちらも<strong>求職者は完全無料</strong>（両社公式サイトに明記）。カテゴリ全体の使い分けの考え方は
                <a href="/articles/specialized-vs-general/" className="underline" style={{ color: "#7c3a55" }}>
                  IT特化型と総合型の違い
                </a>
                も参照
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
                  1. 2社の基本情報（公式サイトの公開情報）
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>
                  2. 公式公開情報の比較表（全行出典付き）
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>
                  3. 構造の違い: IT寄り総合型と最大手総合型
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>
                  4. 運営会社について知っておきたいこと
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>
                  5. 状況別の向き不向きの考え方
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>
                  6. 併用の考え方と注意点
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>
                  7. 比較するときに気をつけたいこと
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>
                  8. よくある質問
                </a>
              </li>
              <li>
                <a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>
                  9. 出典・参考資料
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 基本情報 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">2社の基本情報（公式サイトの公開情報）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              この記事では、ワークポートとリクルートエージェントの違いを<strong>各社公式サイトで確認できた公開情報のみ</strong>で整理します。両社とも全業界・全職種を扱う総合型の転職エージェントであり、どちらが優れているかを断定する記事ではありません。構造の違いを理解して、自分の状況に合う使い方を判断するための材料としてください。
            </p>
            <div className="rounded-xl border p-6 mt-2" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                ワークポート
              </h3>
              <p className="text-sm leading-relaxed">
                株式会社ワークポートが運営する転職エージェント。公式サイトでは「全国47都道府県に拠点展開している総合型転職エージェント」と説明され、求人数は<strong>15万件以上</strong>（2026年4月1日時点）、人材紹介20年以上の実績、転職相談実績100万人（2025年6月1日時点）と表示されています。会社情報の事業内容には<strong>IT・Web・ゲーム業界の人材紹介</strong>が明記されており、専任の「転職コンシェルジュ」が求人紹介から書類添削・面接対策・条件交渉までを支援する体制と、転職活動の進捗を管理できるツール「eコンシェル」を公式に案内しています（出典: ワークポート公式サイト（2026年6月参照））。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                リクルートエージェント
              </h3>
              <p className="text-sm leading-relaxed">
                株式会社インディードリクルートパートナーズ（2025年4月1日に株式会社リクルートから分割により設立）が運営する転職エージェント。公式サイトでは「業界最大級の求人データベース」を掲げ、<strong>公開求人約76万件・非公開求人約27万件</strong>（2026年5月30日時点）と表示されています。「転職支援実績No.1」の表記には「厚生労働省『人材サービス総合サイト』における無期雇用および4ヵ月以上の有期雇用の合計人数（2019年度実績）」という公式注記が付されています。キャリアアドバイザーによる求人紹介・職務経歴書の添削・面接対策が公式に案内されており、職種「SE・ITエンジニア」の求人検索ページやエンジニア向け転職ノウハウのページも公式サイト内に用意されています（出典: リクルートエージェント公式サイト（2026年6月参照））。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 比較表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">公式公開情報の比較表（全行出典付き）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              各社公式サイトで確認できた公開情報を並べると次のとおりです。<strong>求人数は集計時点・区分・カウント方法が各社で異なる</strong>ため、数値の大小だけで優劣を判断しないでください。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ワークポート</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>リクルートエージェント</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>出典</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>運営会社</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>株式会社ワークポート</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>株式会社インディードリクルートパートナーズ（2025年4月1日に株式会社リクルートより分割し設立）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>各社公式サイト会社情報（2026年6月参照）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>公式サイトでの自社説明</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「全国47都道府県に拠点展開している総合型転職エージェント」</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「業界最大級の求人データベース」を持つ転職エージェント</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>各公式サイト（2026年6月参照）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>求人数（公式表示）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>15万件以上（2026年4月1日時点）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>公開求人約76万件・非公開求人約27万件（2026年5月30日時点）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>各公式サイト（2026年6月参照）※時点・集計方法が異なる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ITとの関わり（公式記載）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>事業内容にIT・Web・ゲーム業界の人材紹介を明記</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>職種「SE・ITエンジニア」の求人検索ページ、エンジニア向け転職ノウハウページを公式に用意</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ワークポート公式サイト会社情報／リクルートエージェント公式サイト（2026年6月参照）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>担当者・サポート（公式案内）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>専任「転職コンシェルジュ」による求人紹介・書類添削・面接対策・条件交渉、進捗管理ツール「eコンシェル」</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>キャリアアドバイザーによる求人紹介・職務経歴書添削・面接対策</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>各公式サイト（2026年6月参照）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>実績（公式表示）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>人材紹介20年以上、転職相談実績100万人（2025年6月1日時点）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>転職支援実績No.1（厚労省「人材サービス総合サイト」2019年度実績に基づく公式注記あり）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>各公式サイト（2026年6月参照）※集計対象・期間が異なる</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>利用料金</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>無料（企業からの紹介手数料で運営と公式に説明）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>無料（「転職者様からは一切料金を頂いておりません」と公式に明記）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>各公式サイト（2026年6月参照）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ※ 上表はすべて各社公式サイトの表示に基づきます。数値は参照時点のものであり、最新の値は必ず各公式サイトでご確認ください。エージェントという仕組みそのもの（無料で使える理由や成功報酬モデル）の解説は
            <a href="/articles/agent-vs-site/" className="underline" style={{ color: "#7c3a55" }}>
              転職エージェントと転職サイトの違い
            </a>
            にまとめています。
          </p>
        </div>
      </section>

      {/* sec3 構造の違い */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">構造の違い: IT寄り総合型と最大手総合型</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              比較表からわかるのは、2社が「特化型 vs 総合型」の対立ではなく、<strong>総合型の中での重心の違い</strong>だということです。
            </p>
            <p>
              ワークポートは総合型でありながら、会社情報の事業内容に<strong>IT・Web・ゲーム業界の人材紹介を明記</strong>しています（出典: ワークポート公式サイト会社情報（2026年6月参照））。全職種を扱いつつ、IT領域を事業の柱の一つとして掲げている構造です。
            </p>
            <p>
              リクルートエージェントは<strong>「業界最大級の求人データベース」</strong>を掲げる規模重視の総合型で、公開求人約76万件・非公開求人約27万件（2026年5月30日時点）という公式表示はその規模感を示しています。IT職種についても「SE・ITエンジニア」の求人検索ページが公式に用意されており、全業界の求人の中の一カテゴリとしてIT職種をカバーする構造です（出典: リクルートエージェント公式サイト（2026年6月参照））。
            </p>
            <p>
              つまり女性エンジニアにとっての論点は、「IT領域を柱とする総合型で職種理解の深い提案を受けたいか」「最大規模のデータベースで業界横断の選択肢を最大化したいか」という<strong>軸の置き方</strong>です。どちらの軸が正しいかは人によって異なり、両方を見たい場合は併用という選択肢があります。IT特化型（求人をIT・Web業界に限定するカテゴリ）も含めた全体像は
              <a href="/articles/specialized-vs-general/" className="underline" style={{ color: "#7c3a55" }}>
                IT特化型と総合型転職エージェントの違い
              </a>
              で整理しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 運営会社 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">運営会社について知っておきたいこと</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              社名で比較するサービスだからこそ、運営会社の現在の姿は正確に押さえておきましょう。
            </p>
            <p>
              <strong>ワークポート</strong>の運営会社は株式会社ワークポートです。公式サイトでは人材紹介20年以上の実績と、全国47都道府県への拠点展開が案内されています（出典: ワークポート公式サイト（2026年6月参照））。
            </p>
            <p>
              <strong>リクルートエージェント</strong>は、「リクルート」の名を冠していますが、現在の運営会社は<strong>株式会社インディードリクルートパートナーズ</strong>です。リクルートグループの体制変更に伴い、2025年4月1日に株式会社リクルートから分割するかたちで設立された会社で、本社は東京都千代田区丸の内に置かれています（出典: 株式会社インディードリクルートパートナーズ公式サイト会社概要（2026年6月参照））。株式会社リクルートの公式サイトでも、2025年4月1日よりリクルートエージェント等のサービス提供会社が変更となる旨が告知されています（出典: 株式会社リクルート公式サイト「2025年4月1日より提供会社が変更となるサービス」（2026年6月参照））。グループ内での移管であり、サービスは「リクルートエージェント」の名称のまま提供されています。
            </p>
            <p className="text-sm">
              なお、有料職業紹介事業者は厚生労働大臣の許可制です。利用前に許可事業者かどうかを確認したい場合は、厚生労働省の「人材サービス総合サイト」で事業所名から検索できます（出典: 厚生労働省 人材サービス総合サイト（2026年6月参照））。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 状況別 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">状況別の向き不向きの考え方</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「どちらが合うか」は優劣ではなく、あなたの状況と何を重視するかで決まります。公式公開情報から読み取れる構造差をもとに、状況別の考え方を中立に整理します。<strong>いずれも傾向の話であり、最終的には実際に紹介される求人と担当者との相性で判断してください</strong>。
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                未経験
              </span>
              <div>
                <h3 className="font-bold mb-1">未経験・経験が浅い → 総合型2社は選択肢の入口になり得る。ただし紹介可否は経歴次第</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  両社とも全職種を扱う総合型のため、IT職種に限らず幅広い求人の中から現在の経歴で応募できる選択肢を探せる構造です。ただしエージェントは企業からの成功報酬で運営されるため、どのエージェントでも紹介できる求人がない段階では支援が薄くなることがあります。学習やポートフォリオ作りと並行して進めるのが現実的です。学習ロードマップは
                  <a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>
                    未経験からエンジニアになる完全ガイド
                  </a>
                  を参照してください。
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                経験者
              </span>
              <div>
                <h3 className="font-bold mb-1">実務経験がある → IT領域の提案の深さと求人母数、どちらを軸にするかで選ぶ</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  IT・Web・ゲーム領域を事業の柱とするワークポートの構造はIT職種の深掘りに、業界最大級のデータベースを掲げるリクルートエージェントの構造は社内SE・ITコンサルなど業界横断の比較に、それぞれ向いた作りといえます。ただし担当者個人の力量差はカテゴリ差より大きいことも多いため、提案の質を実際に見比べるのが確実です。
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#c15f47" }}>
                地方在住
              </span>
              <div>
                <h3 className="font-bold mb-1">地方で探したい → 拠点・求人の地域カバレッジを公式サイトで確認する</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  ワークポートは「全国47都道府県に拠点展開」を公式に掲げており（出典: ワークポート公式サイト（2026年6月参照））、リクルートエージェントも都道府県別の求人検索ページを公式に用意しています。地方の場合は表示総数より「自分の県の自分の職種の求人数」が実態に近い指標なので、登録前に各公式サイトの検索で確認しておくと判断しやすくなります。
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                業界横断
              </span>
              <div>
                <h3 className="font-bold mb-1">IT業界以外も視野に入れたい → 求人母数の大きさが比較の材料を増やす</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  事業会社の社内SEや異業種のDX部門などIT業界の外も含めて比較したい場合、選択肢の母数が大きいほど比較材料は増えます。一方で母数が大きいほど絞り込みの軸（働き方の条件・技術環境など）を自分で明確にしておく必要もあります。条件整理のチェックポイントは
                  <a href="/articles/how-to-choose/" className="underline" style={{ color: "#7c3a55" }}>
                    転職エージェントの選び方ガイド
                  </a>
                  にまとめています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sec6 併用 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">併用の考え方と注意点</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「どちらか1社に決めなければならない」というルールはありません。複数エージェントの併用は制度上も実態上も一般的で、構造の異なる2社なら、紹介される求人や提案の傾向を見比べる材料になります。特にこの2社は「IT領域を柱とする総合型」と「最大規模の総合型」という重心の違いがあるため、同じ経歴に対する提案の角度の違いが見えやすい組み合わせです。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>
              併用する場合の3つの注意点
            </h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>
                  <strong>重複応募をしない</strong>: 同じ求人に両方のエージェント経由で応募すると、企業・エージェント双方の信頼を損ないます。応募先は自分でスプレッドシート等に一元管理する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>
                  <strong>併用を隠さない</strong>: 他社も利用していると伝えるのは普通のことで、選考スケジュールの調整もしやすくなります
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>
                  <strong>広げすぎない</strong>: 登録数が多すぎると面談・連絡の管理が破綻します。軸＋サブの2〜3社から始め、提案の質と担当者との相性で比重を移すのが現実的です
                </span>
              </li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            総合型2社の併用に加えて、IT特化型や女性特化型を組み合わせる考え方（「技術の評価」と「働き方の条件」を別の軸で検証する方法）は
            <a href="/articles/specialized-vs-general/" className="underline" style={{ color: "#7c3a55" }}>
              IT特化型と総合型の違い
            </a>
            で詳しく解説しています。
          </p>
        </div>
      </section>

      {/* sec7 注意点 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">比較するときに気をつけたいこと</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                1. 求人数の「単位」は各社で違う
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                公式表示の求人数は、集計時点・公開非公開の区分・カウント方法（求人票単位か採用予定人数単位か等）が各社で異なります。数値の大小をそのまま優劣と読み替えないようにしましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                2. 「No.1」表記は注記まで読む
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                各社が掲げる実績・受賞・No.1表記には、集計対象・期間・調査主体の注記が付いています。何の集計に基づく表記なのかを公式サイトの注記で確認すると、情報を正しく位置づけられます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                3. 口コミより自分の面談体験
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                ネット上の口コミは投稿者の経歴・時期・担当者に依存し、あなたに当てはまるとは限りません。どちらも無料で利用できるので、実際の面談で「自分の職種・条件への理解度」を確かめるのが最も確実な比較方法です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                4. 女性エンジニアならではの確認軸を持つ
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                産休育休の取得実績・時短勤務の運用・リモートワークの定着度など、求人票に出にくい情報をどこまで具体的に答えられるかは、どちらのエージェントでも担当者の力量を測る試金石になります。面談で同じ質問をぶつけて答えを見比べるのがおすすめです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
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
                  className="group rounded-xl border overflow-hidden bg-white"
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
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-3 text-sm text-text-light leading-relaxed">
            <li>
              ・出典: ワークポート公式サイト（2026年6月参照）— 総合型転職エージェントとしての自社説明、全国47都道府県への拠点展開、求人数15万件以上（2026年4月1日時点）、転職相談実績100万人（2025年6月1日時点）、人材紹介20年以上、転職コンシェルジュ・eコンシェル、無料の仕組み（企業からの紹介手数料で運営）
            </li>
            <li>
              ・出典: ワークポート公式サイト 会社情報・事業内容（2026年6月参照）— 運営会社（株式会社ワークポート）、事業内容としてのIT・Web・ゲーム業界の人材紹介
            </li>
            <li>
              ・出典: リクルートエージェント公式サイト（2026年6月参照）— 公開求人約76万件・非公開求人約27万件（2026年5月30日時点）、業界最大級の求人データベース、転職支援実績No.1（厚生労働省「人材サービス総合サイト」2019年度実績に基づく公式注記）、キャリアアドバイザーによるサポート内容、利用無料の明記、SE・ITエンジニアの求人検索ページ
            </li>
            <li>
              ・出典: 株式会社インディードリクルートパートナーズ公式サイト 会社概要（2026年6月参照）— 2025年4月1日に株式会社リクルートより分割し設立、本社所在地（東京都千代田区丸の内）
            </li>
            <li>
              ・出典: 株式会社リクルート公式サイト「2025年4月1日より提供会社が変更となるサービス」（2026年6月参照）— リクルートエージェント等の提供会社変更の告知
            </li>
            <li>
              ・出典: 厚生労働省「人材サービス総合サイト」（2026年6月参照）— 有料職業紹介の許可事業者の検索
            </li>
          </ul>
          <p className="mt-4 text-xs text-text-light">
            ※ 本記事の固有情報は各社公式サイトで確認できた公開情報のみに基づいています。求人数等の数値は参照時点の表示であり、集計時点・カウント方法は各社で異なるため単純比較はできません。最新のサービス内容は必ず各公式サイトでご確認ください。本記事は特定のサービスの優劣を断定するものではありません。
          </p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/type-vs-doda/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                type女性 vs doda比較
              </h3>
              <p className="text-sm text-text-light">女性エンジニアにおすすめはどっち？</p>
            </a>
            <a
              href="/articles/levtech-vs-geekly/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                レバテック vs Geekly比較
              </h3>
              <p className="text-sm text-text-light">IT特化型エージェントの徹底比較</p>
            </a>
            <a
              href="/articles/green-vs-reworks/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                Green vs ReWorks比較
              </h3>
              <p className="text-sm text-text-light">リモート重視の女性エンジニア向け</p>
            </a>
            <a
              href="/articles/how-to-choose/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                エージェント選び方ガイド
              </h3>
              <p className="text-sm text-text-light">失敗しない5つのポイント</p>
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
