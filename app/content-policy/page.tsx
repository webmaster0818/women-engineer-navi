import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "記事制作ポリシー",
  description:
    "女性エンジニア転職ナビの記事制作ポリシーです。当サイトのコンテンツ制作における方針、情報の正確性、評価基準について説明しています。",
  alternates: { canonical: "/content-policy/" },
  openGraph: {
    title: "記事制作ポリシー | 女性エンジニア転職ナビ",
    description:
      "女性エンジニア転職ナビの記事制作ポリシーです。コンテンツ制作の方針と評価基準について説明しています。",
    url: "https://women-engineer-navi.pages.dev/content-policy/",
    type: "website",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "記事制作ポリシー | 女性エンジニア転職ナビ",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  author: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer-navi.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer-navi.pages.dev",
  },
  description:
    "女性エンジニア転職ナビの記事制作ポリシーです。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer-navi.pages.dev/content-policy/",
  },
};

export default function ContentPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
              { label: "記事制作ポリシー" },
            ]}
          />
          <div className="mt-4">
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              記事制作ポリシー
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月27日</p>
          </div>
        </div>
      </section>

      {/* 本文 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-gray max-w-none space-y-8 text-text-light leading-relaxed">
            <p>
              「女性エンジニア転職ナビ」（運営: 株式会社MediaX、東京都渋谷区）は、女性エンジニアの転職活動を支援するための情報サイトです。当サイトでは、読者の皆様に信頼性の高い情報をお届けするため、以下の方針に基づいてコンテンツを制作しています。
            </p>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                1. コンテンツ制作の基本方針
              </h2>
              <p>当サイトは以下の基本方針に基づいてコンテンツを制作しています。</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>正確性：</strong>
                  公式サイト、公的機関のデータ、信頼性の高い調査報告書等を情報源として使用し、正確な情報提供に努めます。
                </li>
                <li>
                  <strong>客観性：</strong>
                  特定の転職エージェントやサービスに偏らず、客観的な視点で情報を提供します。
                </li>
                <li>
                  <strong>有用性：</strong>
                  読者の転職活動に実際に役立つ、実践的な情報を提供することを目指します。
                </li>
                <li>
                  <strong>最新性：</strong>
                  定期的にコンテンツを見直し、最新の情報に更新するよう努めます。
                </li>
                <li>
                  <strong>読みやすさ：</strong>
                  専門用語の解説を交えながら、IT業界に詳しくない方にも分かりやすい文章を心がけます。
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                2. 情報源と調査方法
              </h2>
              <p>当サイトのコンテンツは、以下の情報源に基づいて制作しています。</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>各転職エージェントの公式サイト・公式発表</li>
                <li>厚生労働省、経済産業省等の公的機関のデータ・統計</li>
                <li>IPA（情報処理推進機構）等の業界団体の調査報告書</li>
                <li>信頼性の高い民間調査会社のレポート</li>
                <li>IT業界で働く女性エンジニアへのヒアリング・アンケート</li>
                <li>編集部メンバーの実体験・業界知識</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                3. 転職エージェントの評価基準
              </h2>
              <p>
                当サイトでは、転職エージェントを以下の基準で評価しています。評価はアフィリエイト報酬の有無や金額に左右されることはありません。
              </p>
              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse rounded-lg overflow-hidden">
                  <thead>
                    <tr style={{ backgroundColor: "#0891b2" }}>
                      <th className="px-4 py-3 text-left text-sm font-bold text-white">
                        評価項目
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-white">
                        評価内容
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["求人の質・量", "保有求人数、求人の多様性、非公開求人の割合"],
                      ["サポート体制", "アドバイザーの専門性、対応の丁寧さ、面接対策の充実度"],
                      ["女性への配慮", "女性アドバイザーの有無、産休育休対応、女性向け求人の充実度"],
                      ["年収アップ実績", "年収アップ率、交渉力、実績データの有無"],
                      ["リモート求人", "リモートワーク対応求人の割合、フルリモート求人の有無"],
                      ["利用者の評判", "口コミ・評判、利用者満足度、推薦意向"],
                    ].map(([item, detail], i) => (
                      <tr
                        key={item}
                        className={i % 2 === 0 ? "bg-white" : ""}
                        style={i % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}
                      >
                        <td
                          className="px-4 py-3 text-sm font-bold"
                          style={{ borderBottom: "1px solid #d1dce5", color: "#0891b2" }}
                        >
                          {item}
                        </td>
                        <td
                          className="px-4 py-3 text-sm"
                          style={{ borderBottom: "1px solid #d1dce5" }}
                        >
                          {detail}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                4. アフィリエイト広告について
              </h2>
              <p>
                当サイトは、転職エージェント等が提供するアフィリエイトプログラムに参加しています。当サイトに掲載されたリンクを通じてサービスに申し込まれた場合、当社が報酬を受け取ることがあります。
              </p>
              <p className="mt-4">
                ただし、アフィリエイト報酬の有無や金額が、コンテンツの内容や評価に影響を与えることは一切ありません。当サイトでは、独自の調査と評価基準に基づいて客観的な情報提供を行っています。
              </p>
              <p className="mt-4">
                アフィリエイトリンクが含まれるページには、その旨を明示しています。読者の皆様が透明性を持って情報を判断できるよう努めています。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                5. コンテンツの更新・修正方針
              </h2>
              <p>当サイトは、以下の方針でコンテンツの更新・修正を行っています。</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  定期的な情報確認：主要な記事は3ヶ月に1回以上、情報の正確性を確認し、必要に応じて更新します。
                </li>
                <li>
                  速やかな修正：情報に誤りがあることが判明した場合は、速やかに修正を行います。
                </li>
                <li>
                  更新日の明示：各記事に「最終更新日」を記載し、情報の鮮度を読者に明示します。
                </li>
                <li>
                  読者からのフィードバック：読者からの情報提供や修正依頼にも積極的に対応します。
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                6. ランキング・おすすめの掲載基準
              </h2>
              <p>
                当サイトに掲載するランキングやおすすめ情報は、上記の評価基準に基づいて編集部が総合的に判断して作成しています。ランキングの順位やおすすめの選定は、アフィリエイト報酬の有無に左右されません。
              </p>
              <p className="mt-4">
                ランキング作成にあたっては、求人の質・量、サポート体制、女性への配慮、年収アップ実績、リモート求人の充実度、利用者の評判を総合的に評価し、女性エンジニアにとっての有用性を最優先に判断しています。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                7. 編集体制
              </h2>
              <p>
                当サイトの記事は、IT業界での実務経験を持つ編集メンバーが執筆・編集しています。記事公開前には、事実確認と品質チェックを行い、正確性と読みやすさを確保しています。
              </p>
              <p className="mt-4">
                編集チームは、女性エンジニアとしての経験を持つメンバーを含み、女性ならではの視点でのコンテンツ制作に努めています。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                8. 景品表示法等の法令遵守
              </h2>
              <p>
                当サイトは、景品表示法、薬機法、その他関連法令を遵守してコンテンツを制作しています。誇大な表現や消費者を誤認させるような表現は使用しません。
              </p>
              <p className="mt-4">
                転職エージェントの実績や数値データを掲載する際は、出典を明示し、正確な情報提供に努めています。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                9. お問い合わせ
              </h2>
              <p>
                当サイトのコンテンツに関するご質問、情報の誤りに関するご指摘、その他のお問い合わせは、サイト内のお問い合わせフォームよりご連絡ください。いただいたフィードバックは、コンテンツの品質向上に活用させていただきます。
              </p>
            </div>

            <div
              className="rounded-xl border p-6 mt-8"
              style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}
            >
              <h2 className="text-lg font-bold mb-4">運営者情報</h2>
              <table className="w-full">
                <tbody>
                  {[
                    ["運営会社", "株式会社MediaX"],
                    ["所在地", "東京都渋谷区"],
                    ["サイト名", "女性エンジニア転職ナビ"],
                    ["URL", "https://women-engineer-navi.pages.dev"],
                  ].map(([label, value]) => (
                    <tr key={label}>
                      <th
                        className="px-4 py-2 text-left text-sm font-bold w-32"
                        style={{ color: "#0891b2" }}
                      >
                        {label}
                      </th>
                      <td className="px-4 py-2 text-sm">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-center mt-8">
              制定日: 2026年4月27日
              <br />
              最終改定日: 2026年4月27日
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
