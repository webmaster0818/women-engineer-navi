import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "レバテックキャリアとGeeklyの違い｜女性エンジニアの使い分け【2026年】",
  description:
    "レバテックキャリアとGeeklyの違いを公式公開情報で比較。どちらもIT特化型ですが、得意領域（ITエンジニア特化／IT・Web・ゲーム業界特化）と拠点・求人数の公式表示に構造的な違いがあります。職種・志望業界・地域別の向き不向きを出典付きで中立に整理します。",
  alternates: { canonical: "/articles/levtech-vs-geekly/" },
  openGraph: {
    title: "レバテックキャリアとGeeklyの違い｜女性エンジニアの使い分け【2026年】",
    description:
      "レバテックキャリアとGeeklyの違いを公式公開情報で比較。得意領域・拠点・求人数の公式表示の違いと、職種・志望業界・地域別の向き不向きを出典付きで中立に整理します。",
    url: "https://women-engineer.com/articles/levtech-vs-geekly/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "レバテックキャリアとGeeklyの違い｜女性エンジニアの使い分け【2026年】",
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
    "レバテックキャリアとGeeklyの違いを公式公開情報で比較。得意領域・拠点・求人数の公式表示の違いと、職種・志望業界・地域別の向き不向きを出典付きで中立に整理。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/levtech-vs-geekly/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "レバテックキャリアとGeeklyはどちらもIT特化型ですか？何が違うのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "どちらもIT特化型の転職エージェントですが、公式サイトが掲げる得意領域の表現が異なります。レバテックキャリアは「ITエンジニア特化の転職・求人情報」「IT・Webエンジニアの転職に特化」と表示し（レバテックキャリア公式サイト・2026年6月参照）、Geeklyは「IT・WEB・ゲーム業界特化の転職エージェント」と表示、運営会社の事業内容も「IT/Web/ゲーム業界専門特化 人材紹介」と記載しています（Geekly公式サイト・株式会社ギークリー会社概要・2026年6月参照）。どちらが優れているかではなく、公式に打ち出している守備範囲の違いとして捉え、自分の職種・志望業界に近い方を軸に選ぶのが現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "求人数はレバテックキャリアとGeeklyのどちらが多いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイトの表示では、レバテックキャリアは「IT・Webに特化した38,000件以上の求人を保有」と記載し、サイト内の求人検索には「IT・Web特化求人 57,615件・毎日更新」と表示されています（2026年6月12日時点・レバテックキャリア公式サイト参照）。Geeklyは「IT・WEB求人 46,000件以上（2026年5月時点）」と表示しています（Geekly公式サイト・2026年6月参照）。ただし両者は集計基準・集計時点・公開/非公開の区分が異なるため、数字の大小だけで優劣は判断できません。自分の職種・勤務地で検索したときに希望に合う求人がどれだけあるかを確認する方が実用的です。",
      },
    },
    {
      "@type": "Question",
      name: "地方在住の女性エンジニアはどちらを使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "拠点の公式情報では、レバテックキャリアを運営するレバテック株式会社は東京本社のほか札幌・名古屋・大阪・広島・福岡に支店を置いています（レバテック株式会社会社概要・2026年6月参照）。公式サイトの求人検索には東京35,520件・大阪3,736件・福岡2,056件など地域別の求人件数が表示され、「フルリモート求人含め、記載していない都道府県での求人取り扱いもございます」との注記があります（2026年6月12日時点）。Geeklyの運営会社・株式会社ギークリーの拠点は東京（渋谷）の本社・オフィスと大阪オフィスです（会社概要・2026年6月参照）。地方在住の場合は、自分の希望勤務地やリモート可の求人がどれだけあるかを両方の検索で確かめてから登録先を決めるのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "ゲーム業界志望の場合はどちらが向いていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Geeklyは公式サイトで「IT・WEB・ゲーム業界特化の転職エージェント」と掲げ、運営会社の事業内容にも「IT/Web/ゲーム業界専門特化 人材紹介」と明記しており、ゲーム求人特集・クリエイター求人特集も用意されています（Geekly公式サイト・会社概要・2026年6月参照）。一方、レバテックキャリアの求人検索にもゲームプログラマー・ゲームプランナー・3Dデザイナーなどの職種区分があります（2026年6月12日時点）。ゲーム業界を「公式に看板として掲げているか」という打ち出しの違いはありますが、最終的には自分の職種・希望条件での求人の有無を両方で確認するのが確実です。ゲーム業界の働き方はゲーム業界ガイドも参考にしてください。",
      },
    },
    {
      "@type": "Question",
      name: "レバテックキャリアとGeeklyは併用してもいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "併用は可能で、ルール上もマナー上も問題ありません。どちらもIT特化型ですが、得意領域の公式表現や拠点・求人特集の構成が異なるため、併用すると提案の幅と比較の物差しが得られます。注意点は、同じ求人に両方のエージェント経由で重複応募しないことです。応募した企業は自分でスプレッドシート等に一元管理し、併用していること自体は各担当者に正直に伝えて構いません。エージェントは企業からの成功報酬で運営され求職者は無料なので、複数登録しても費用は発生しません。",
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
              { label: "レバテックキャリア vs Geekly" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              比較ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              レバテックキャリアとGeeklyの違い
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
                ① 両方とも<strong>IT特化型</strong>。違いは公式が掲げる得意領域で、レバテックキャリアは「<strong>ITエンジニア特化</strong>」「IT・Webエンジニアの転職に特化」、Geeklyは「<strong>IT・WEB・ゲーム業界特化</strong>」（各公式サイト・2026年6月参照）
              </li>
              <li>
                ② 拠点にも構造差。レバテック株式会社は<strong>東京＋札幌・名古屋・大阪・広島・福岡</strong>の全国拠点、株式会社ギークリーは<strong>東京（渋谷）＋大阪</strong>（各社会社概要・2026年6月参照）
              </li>
              <li>
                ③ 求人数の公式表示はレバテックキャリア「38,000件以上保有」（検索表示は57,615件・2026年6月12日時点）、Geekly「46,000件以上」（2026年5月時点）。<strong>集計基準が異なるため大小で優劣は決められない</strong>
              </li>
              <li>
                ④ 使い方の定石は<strong>併用</strong>。どちらもIT特化で守備範囲が近い分、提案を見比べて自分の市場価値の相場感をつかみやすい。重複応募だけは避けて自分で応募管理を一元化する
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
                  1. 両サービスの基本プロフィール（運営会社）
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>
                  2. 公式公開情報の比較表（全行出典付き）
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>
                  3. レバテックキャリアの公式情報を読み解く
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>
                  4. Geeklyの公式情報を読み解く
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>
                  5. 状況別の向き不向き（職種・志望業界・地域）
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>
                  6. 併用の考え方と注意点
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>
                  7. 女性エンジニアが面談で確認したいこと
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>
                  8. おすすめ転職エージェント
                </a>
              </li>
              <li>
                <a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>
                  9. よくある質問
                </a>
              </li>
              <li>
                <a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>
                  10. 出典・参考資料
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 基本プロフィール */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">両サービスの基本プロフィール（運営会社）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              レバテックキャリアとGeeklyは、どちらも<strong>IT特化型の転職エージェント（有料職業紹介）</strong>です。「IT特化型 vs 総合型」のような大分類の違いではなく、<strong>同じIT特化型の中での得意領域・体制の違い</strong>を比べる組み合わせになります。まず運営会社の公式情報から確認しましょう。
            </p>
            <p>
              <strong>レバテックキャリア</strong>は、レバテック株式会社が運営するサービスです。会社概要によると、本社は東京都渋谷区（渋谷スクランブルスクエア）で、渋谷三丁目支店のほか<strong>札幌・名古屋・大阪・広島・福岡</strong>に支店を置いています。設立は2017年8月1日、事業内容は「IT･Web領域におけるHRサービス事業」などです（出典: レバテック株式会社 会社概要・2026年6月参照）。公式サイトは「ITエンジニア特化の転職・求人情報」を掲げています（出典: レバテックキャリア公式サイト・2026年6月参照）。
            </p>
            <p>
              <strong>Geekly（ギークリー）</strong>は、株式会社ギークリー（Geekly, Inc.）が運営するサービスです。会社概要によると、事業内容は「<strong>IT/Web/ゲーム業界専門特化 人材紹介</strong>」、本社は東京都渋谷区（渋谷アクシュ）で、渋谷に複数のオフィスと<strong>大阪オフィス</strong>を置いています。設立は2011年8月、厚生労働大臣許可の有料職業紹介事業者（許可番号 13-ユ-305272）です（出典: 株式会社ギークリー 会社概要・2026年6月参照）。
            </p>
            <div
              className="rounded-xl border p-6 mt-6"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>
                先に押さえたい「構造の違い」3点
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>
                    <strong>得意領域の公式表現</strong>: レバテックキャリアは「ITエンジニア特化」「IT・Webエンジニアの転職に特化」、Geeklyは「IT・WEB・ゲーム業界特化」（各公式サイト・2026年6月参照）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>
                    <strong>拠点の広がり</strong>: レバテックは全国6都市に拠点、ギークリーは東京＋大阪（各社会社概要・2026年6月参照）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>
                    <strong>切り口の違い</strong>: レバテックは「職種・スキル」軸（約59職種・90スキルから検索）、Geeklyは「業界」軸（ゲーム・クリエイター等の求人特集）の打ち出しが目立つ（各公式サイト・2026年6月参照）
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-sm">
              「そもそもIT特化型と総合型はどう違うのか」「エージェントと転職サイトはどう違うのか」という前提から整理したい人は、先に
              <a href="/articles/specialized-vs-general/" className="underline" style={{ color: "#7c3a55" }}>
                IT特化型と総合型転職エージェントの違い
              </a>
              と
              <a href="/articles/agent-vs-site/" className="underline" style={{ color: "#7c3a55" }}>
                転職エージェントと転職サイトの違い
              </a>
              を読むと全体像がつかみやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 比較表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">公式公開情報の比較表（全行出典付き）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              両サービスの公式サイト・会社概要で確認できた公開情報を並べたのが次の表です。<strong>各社の数値は集計基準・集計時点が異なるため、横並びの大小比較で優劣を判断する表ではありません</strong>。出典の※番号は表の下にまとめています。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>レバテックキャリア</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>Geekly</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>運営会社</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>レバテック株式会社（※1）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>株式会社ギークリー（※2）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>設立</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2017年8月1日（※1）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2011年8月（※2）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>得意領域の公式表現</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「ITエンジニア特化の転職・求人情報」「IT・Webエンジニアの転職に特化」（※3）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「IT・WEB・ゲーム業界特化の転職エージェント」、事業内容「IT/Web/ゲーム業界専門特化 人材紹介」（※2・※4）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>求人数の公式表示</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「IT・Webに特化した38,000件以上の求人を保有」。求人検索の表示は「IT・Web特化求人 57,615件・毎日更新」（2026年6月12日時点）（※3）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「IT・WEB求人 46,000件以上」（2026年5月時点）（※4）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>拠点</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>東京本社・渋谷三丁目支店＋札幌・名古屋・大阪・広島・福岡支店（※1）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>東京本社（渋谷）・渋谷第1〜第3オフィス＋大阪オフィス（※2）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>公式サイトの実績表示</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「3人に2人が年収70万円UPを実現」（2023年1月〜2024年3月の実績。内定承諾者のうち応募時年収と転職後年収の差分が70万円以上の割合）、「希望企業への転職成功率96%」（2023年4月〜2024年3月の実績・注記付き）（※3）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>応募書類サポートの紹介として「書類通過率1.5倍・転職成功率1.2倍」（2025年10月時点）（※4）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>求人の探し方の特徴</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約59職種・90スキルから検索。地域別求人件数を公表（東京35,520件・大阪3,736件・福岡2,056件ほか、2026年6月12日時点）（※3）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ゲーム・クリエイター・リモートワーク可などのテーマ別求人特集。職種×年収図鑑などの診断コンテンツ（※4）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>職業紹介の許可</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>有料職業紹介事業者（許可情報は厚労省「人材サービス総合サイト」で検索可能）（※5）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>有料職業紹介事業 許可番号 13-ユ-305272（※2）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="mt-4 space-y-1 text-xs text-text-light leading-relaxed">
            <li>※1 出典: レバテック株式会社公式サイト 会社概要（2026年6月参照）</li>
            <li>※2 出典: 株式会社ギークリー公式サイト 会社概要（2026年6月参照）</li>
            <li>※3 出典: レバテックキャリア公式サイト（2026年6月参照）</li>
            <li>※4 出典: Geekly公式サイト（2026年6月参照）</li>
            <li>※5 出典: 厚生労働省「人材サービス総合サイト」（2026年6月参照）。許可番号・事業所名から誰でも検索できます</li>
          </ul>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            求人数は両社とも集計の前提（公開/非公開の区分、職種の範囲、集計時点）が異なります。数字の大小を比べるより、<strong>自分の職種・勤務地・働き方の条件で検索したときに何件残るか</strong>を見る方が、判断材料として確実です。
          </p>
        </div>
      </section>

      {/* sec3 レバテックキャリア */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">レバテックキャリアの公式情報を読み解く</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              レバテックキャリアの公式サイトは「<strong>ITエンジニア特化の転職・求人情報</strong>」「IT・Webエンジニアの転職に特化」を掲げ、「IT・Webに特化した38,000件以上の求人を保有」「約59種類、90スキルから自分の経験にあった求人を探せる」と表示しています（出典: レバテックキャリア公式サイト・2026年6月参照）。職種・スキルを細かく刻んで検索できる設計で、Java・Python・AWSなど<strong>技術スタック起点で求人を絞り込みたい人向けの構造</strong>です。
            </p>
            <p>
              実績については「<strong>3人に2人が年収70万円UPを実現</strong>」（※2023年1月〜2024年3月の実績。内定承諾者のうち、応募時年収と転職後年収の差分が70万円以上の割合）、「<strong>希望企業への転職成功率96%</strong>」（※2023年4月〜2024年3月の実績。内定承諾者のうち応募時の志望度アンケートで「ぜひ応募したい」「応募したい」と回答した割合）という注記付きの数値を公式に表示しています（出典: 同上）。注記まで読むと「何の割合か」が明確に定義されており、こうした<strong>定義の透明性は判断材料として評価できる</strong>ポイントです。
            </p>
            <p>
              サポート面では、職種別の専門アドバイザーによるテクニカルヒアリング、職務経歴書の添削、企業ごとの面接対策、年収交渉・入社日調整、LINEでのやりとり、オンライン可のカウンセリング（1〜1.5時間）が公式に案内されています（出典: 同上）。また地域面では、求人検索に<strong>東京35,520件・神奈川1,855件・愛知2,539件・大阪3,736件・福岡2,056件</strong>などの地域別件数が表示され、「フルリモート求人含め、記載していない都道府県での求人取り扱いもございます」と注記されています（2026年6月12日時点・出典: 同上）。運営会社が札幌・名古屋・大阪・広島・福岡に支店を持つ全国拠点型である点（出典: レバテック株式会社 会社概要・2026年6月参照）とあわせて、<strong>首都圏以外も視野に入れやすい構造</strong>と言えます。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 Geekly */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">Geeklyの公式情報を読み解く</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              Geeklyの公式サイトは「<strong>IT・WEB・ゲーム業界特化の転職エージェント</strong>」を掲げ、「他の総合型エージェントにはない専門性の高さが強み」と説明しています。求人数は「<strong>IT・WEB求人 46,000件以上</strong>（2026年5月時点）」の表示です（出典: Geekly公式サイト・2026年6月参照）。運営会社の事業内容にも「IT/Web/ゲーム業界専門特化 人材紹介」と明記されており（出典: 株式会社ギークリー 会社概要・2026年6月参照）、社名のとおり<strong>「業界」を看板に掲げた特化型</strong>です。
            </p>
            <p>
              特に目を引くのが<strong>ゲーム業界を正面から打ち出している点</strong>です。公式サイトにはゲーム求人特集・クリエイター求人特集・リモートワーク可求人特集などテーマ別の特集が用意され、エンジニア職だけでなくクリエイティブ職・営業職などのこだわり条件検索もあります（出典: Geekly公式サイト・2026年6月参照）。エンジニアに限らず、ゲーム・Web業界の<strong>職種横断で選択肢を見たい人に合う構造</strong>です。
            </p>
            <p>
              サポート面では、IT転職専門のキャリアアドバイザーへの無料相談、履歴書・職務経歴書の作成代行・添削サポートが公式に案内されており、応募書類サポートの紹介として「書類通過率1.5倍・転職成功率1.2倍（2025年10月時点）」という表示があります（出典: 同上）。このほか年収診断・仕事タイプ診断・職種×年収図鑑などの診断コンテンツも提供されています。なお、取引企業の表示には「これまで取引実績のある企業のため、現在も求人を募集している企業とは限りません」という注記がある点も、公式情報を読むうえで覚えておきたいポイントです（出典: 同上）。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 状況別の向き不向き */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">状況別の向き不向き（職種・志望業界・地域）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              ここまでの公式公開情報をもとに、「どんな人がどちらを軸にすると合理的か」を整理します。<strong>優劣ではなく、公式に確認できた構造の違いからの推論</strong>です。最終的には両方の求人検索で自分の条件を試すことをおすすめします。
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                職種
              </span>
              <div>
                <h3 className="font-bold mb-1">技術スタック起点で探したいエンジニア → レバテックキャリアの検索構造が合いやすい</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  レバテックキャリアは約59職種・90スキル（Java・Python・AWSなど）から求人を絞り込める検索構造を公式に掲げています（2026年6月参照）。「この言語・このインフラの経験を評価してほしい」というスキル軸の転職では、検索の切り口がそのまま強みの言語化につながります。一方、職種をエンジニアに限定せずWebディレクター・デザイナーなども視野に入れるなら、Geeklyの職種横断のこだわり条件検索も試す価値があります。
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                業界
              </span>
              <div>
                <h3 className="font-bold mb-1">ゲーム業界・Web業界を業界ごと志望 → Geeklyの公式の打ち出しに合致</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  Geeklyは「IT・WEB・ゲーム業界特化」を公式に掲げ、ゲーム求人特集・クリエイター求人特集を用意しています（2026年6月参照）。「業界を決めてから職種を選ぶ」タイプの転職活動なら、業界軸の構造が探しやすいはずです。ただしレバテックキャリアにもゲームプログラマー・ゲームプランナー・3Dデザイナー等の職種区分があるため（2026年6月12日時点）、ゲーム志望でも両方で件数を確認するのが確実です。ゲーム業界の働き方・職種の全体像は
                  <a href="/articles/game-industry/" className="underline" style={{ color: "#7c3a55" }}>
                    ゲーム業界ガイド
                  </a>
                  で解説しています。
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#c15f47" }}>
                地域
              </span>
              <div>
                <h3 className="font-bold mb-1">首都圏・大阪以外で探す → 全国拠点のレバテックを起点に、リモート可求人は両方で</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  運営会社の拠点は、レバテックが東京＋札幌・名古屋・大阪・広島・福岡、ギークリーが東京＋大阪です（各社会社概要・2026年6月参照）。レバテックキャリアは地域別求人件数の公表と「フルリモート求人含め、記載していない都道府県での求人取り扱いもございます」という注記があり（2026年6月12日時点）、地方からの転職活動の見通しを立てやすい情報構造です。ただしリモート前提の働き方なら勤務地の制約自体が緩むため、Geeklyのリモートワーク可求人特集も含めて両方で確認しましょう。
                </p>
              </div>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            なお、どちらもIT特化型なので「未経験からの転職」や「IT業界の外（社内SE・異業種DX部門）も見たい」というケースでは、この2択の外側も検討対象になります。カテゴリ全体の整理は
            <a href="/articles/specialized-vs-general/" className="underline" style={{ color: "#7c3a55" }}>
              IT特化型と総合型の違い
            </a>
            、個社の選び方のチェックリストは
            <a href="/articles/how-to-choose/" className="underline" style={{ color: "#7c3a55" }}>
              転職エージェントの選び方ガイド
            </a>
            を参照してください。
          </p>
        </div>
      </section>

      {/* sec6 併用 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">併用の考え方と注意点</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「結局どっちか1つに決めないといけないのか」と言えば、そんなことはありません。転職エージェントの<strong>複数併用はルール上もマナー上も問題なく</strong>、両社とも求職者は無料で利用できます（エージェントは企業からの成功報酬で運営される有料職業紹介事業です。仕組みの詳細は
              <a href="/articles/specialized-vs-general/" className="underline" style={{ color: "#7c3a55" }}>
                こちらの記事
              </a>
              で出典付きで解説しています）。
            </p>
            <p>
              レバテックキャリアとGeeklyは守備範囲が近いIT特化型同士なので、併用すると<strong>同じ希望条件に対する提案を見比べられる</strong>のが利点です。提案される求人・想定年収・職務経歴書へのフィードバックを2社分並べることで、1社だけでは見えない自分の市場価値の相場感がつかめます。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>
              併用するときの3つのルール
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
                  <strong>併用を隠さない</strong>: 他社も使っていると伝えるのは普通のことで、選考スケジュールの調整もしやすくなります
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>
                  <strong>提案の「理由」を聞き比べる</strong>: 同じ経歴に対して各社がなぜその求人を勧めるのかを聞くと、担当者の理解度と相性が見えます。合う方に比重を移していくのが現実的です
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec7 女性エンジニア視点 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアが面談で確認したいこと</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              レバテックキャリア・Geeklyのどちらを使う場合でも、女性エンジニアのキャリア継続に関わる情報は<strong>求人票だけでは分かりにくい</strong>のが実情です。これはサービスの優劣ではなく、求人票という形式の限界です。面談では次のような項目を具体的に質問し、<strong>どこまで答えられるかを担当者の理解度の試金石</strong>にすることをおすすめします。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>紹介求人の企業での<strong>産休・育休の取得実績と復帰率</strong>（制度の有無ではなく実績）</li>
              <li><strong>時短勤務・フレックスの運用実態</strong>（エンジニア職で実際に使われているか）</li>
              <li><strong>リモートワークの定着度</strong>（出社回帰の動きがないか、チームの運用ルール）</li>
              <li>開発チームの<strong>女性エンジニアの在籍状況</strong>や女性管理職の有無</li>
              <li>評価制度が<strong>労働時間ではなく成果で運用されているか</strong></li>
            </ul>
            <p>
              即答できない場合でも、企業に確認して回答してくれる担当者であれば信頼できます。これらの質問への対応力は担当者個人による差も大きいため、合わないと感じたら担当変更を申し出るのは正当な対応です。確認すべき項目の全体像は
              <a href="/articles/how-to-choose/" className="underline" style={{ color: "#7c3a55" }}>
                転職エージェントの選び方ガイド
              </a>
              にまとめています。
            </p>
          </div>
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
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-3 text-sm text-text-light leading-relaxed">
            <li>
              ・出典: レバテックキャリア公式サイト（2026年6月参照）— 「ITエンジニア特化の転職・求人情報」「IT・Webエンジニアの転職に特化」「IT・Webに特化した38,000件以上の求人を保有」「約59種類、90スキルから探せる」「3人に2人が年収70万円UPを実現」（2023年1月〜2024年3月実績・内定承諾者のうち応募時年収と転職後年収の差分が70万円以上の割合）「希望企業への転職成功率96%」（2023年4月〜2024年3月実績・志望度アンケート回答者ベース）、IT・Web特化求人57,615件および地域別求人件数（2026年6月12日時点の表示）
            </li>
            <li>
              ・出典: レバテック株式会社公式サイト 会社概要（2026年6月参照）— 社名、設立2017年8月1日、本社（東京都渋谷区）、札幌・名古屋・大阪・広島・福岡支店、事業内容
            </li>
            <li>
              ・出典: Geekly公式サイト（2026年6月参照）— 「IT・WEB・ゲーム業界特化の転職エージェント」「IT・WEB求人 46,000件以上」（2026年5月時点）、応募書類サポートの「書類通過率1.5倍・転職成功率1.2倍」（2025年10月時点）、ゲーム・クリエイター・リモートワーク可求人特集、取引実績企業表示の注記
            </li>
            <li>
              ・出典: 株式会社ギークリー公式サイト 会社概要（2026年6月参照）— 社名（Geekly, Inc.）、事業内容「IT/Web/ゲーム業界専門特化 人材紹介」、本社（東京都渋谷区）・大阪オフィス、設立2011年8月、有料職業紹介事業 許可番号 13-ユ-305272
            </li>
            <li>
              ・出典: 厚生労働省「人材サービス総合サイト」（2026年6月参照）— 有料職業紹介事業の許可・届出事業者の検索
            </li>
          </ul>
          <p className="mt-4 text-xs text-text-light">
            ※ 本文中の数値は各社公式サイトの表示時点のものであり、集計基準・対象範囲は各社で異なります。求人数・サービス内容は変動するため、最新情報は必ず各公式サイトでご確認ください。本記事は両サービスの優劣を判定するものではありません。
          </p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/specialized-vs-general/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                IT特化型と総合型エージェントの違い
              </h3>
              <p className="text-sm text-text-light">カテゴリ全体の使い分けを整理</p>
            </a>
            <a
              href="/articles/agent-vs-site/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                転職エージェントと転職サイトの違い
              </h3>
              <p className="text-sm text-text-light">そもそもどちらを使うべきか</p>
            </a>
            <a
              href="/articles/how-to-choose/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                エージェント選び方ガイド
              </h3>
              <p className="text-sm text-text-light">失敗しない選び方のチェックポイント</p>
            </a>
            <a
              href="/articles/game-industry/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                ゲーム業界ガイド
              </h3>
              <p className="text-sm text-text-light">ゲーム業界の職種と働き方</p>
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
