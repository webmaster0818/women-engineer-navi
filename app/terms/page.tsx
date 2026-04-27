import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "利用規約",
  description:
    "女性エンジニア転職ナビの利用規約です。当サイトをご利用いただく前に、本利用規約をよくお読みください。",
  alternates: { canonical: "/terms/" },
  openGraph: {
    title: "利用規約 | 女性エンジニア転職ナビ",
    description:
      "女性エンジニア転職ナビの利用規約です。当サイトをご利用いただく前に、本利用規約をよくお読みください。",
    url: "https://women-engineer-navi.pages.dev/terms/",
    type: "website",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "利用規約 | 女性エンジニア転職ナビ",
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
    "女性エンジニア転職ナビの利用規約です。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer-navi.pages.dev/terms/",
  },
};

export default function TermsPage() {
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
              { label: "利用規約" },
            ]}
          />
          <div className="mt-4">
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              利用規約
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
              この利用規約（以下「本規約」といいます）は、株式会社MediaX（以下「当社」といいます。所在地：東京都渋谷区）が運営するウェブサイト「女性エンジニア転職ナビ」（以下「当サイト」といいます）の利用条件を定めるものです。当サイトをご利用いただく全てのお客様（以下「利用者」といいます）には、本規約に同意のうえ、当サイトをご利用いただくものとします。
            </p>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                第1条（適用）
              </h2>
              <p>
                本規約は、利用者と当社との間の当サイトの利用に関わる一切の関係に適用されるものとします。当社が当サイト上で掲載する個別規定や追加規定は、本規約の一部を構成するものとします。本規約と個別規定が矛盾する場合には、個別規定が優先されるものとします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                第2条（当サイトの目的）
              </h2>
              <p>
                当サイトは、女性エンジニアの転職活動を支援する情報提供を目的としています。転職エージェントの比較情報、キャリアに関するコラム、求人情報などを掲載していますが、これらの情報は参考情報として提供するものであり、特定の転職エージェントやサービスの利用を推奨・保証するものではありません。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                第3条（禁止事項）
              </h2>
              <p>利用者は、当サイトの利用にあたり、以下の行為をしてはなりません。</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当サイトの運営を妨害するおそれのある行為</li>
                <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
                <li>他の利用者に成りすます行為</li>
                <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>当サイトに掲載されたコンテンツの無断転載・複製・改変</li>
                <li>当サイトの情報を利用した営業活動、営利を目的とした情報提供行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                第4条（当サイトの提供の停止等）
              </h2>
              <p>
                当社は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく当サイトの全部または一部の提供を停止または中断することができるものとします。
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>当サイトにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、当サイトの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当社が当サイトの提供が困難と判断した場合</li>
              </ul>
              <p className="mt-4">
                当社は、当サイトの提供の停止または中断により、利用者または第三者が被ったいかなる不利益または損害について、理由を問わず一切の責任を負わないものとします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                第5条（著作権）
              </h2>
              <p>
                当サイトに掲載されている文章、画像、デザイン、ロゴ、その他のコンテンツ（以下「コンテンツ」といいます）の著作権は、当社または正当な権利を有する第三者に帰属します。利用者は、当社の事前の書面による承諾なく、コンテンツの全部または一部を複製、転載、改変、配布、公衆送信等をしてはなりません。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                第6条（広告・アフィリエイトについて）
              </h2>
              <p>
                当サイトは、転職エージェント等のサービスのアフィリエイトプログラムに参加しています。当サイトに掲載されているリンクを通じてサービスに申し込まれた場合、当社が報酬を受け取ることがあります。ただし、報酬の有無がコンテンツの内容や評価に影響を与えることはありません。当サイトでは、独自の調査と評価基準に基づいて、客観的な情報提供を行っています。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                第7条（免責事項）
              </h2>
              <p>
                当社は、当サイトに掲載されている情報の正確性、完全性、有用性等について、いかなる保証もいたしません。利用者が当サイトの情報を利用して行った判断や行動の結果について、当社は一切の責任を負いません。
              </p>
              <p className="mt-4">
                当サイトからリンクされている外部サイトについては、当社は一切の責任を負いません。転職エージェント等の外部サービスの利用にあたっては、各サービスの利用規約をご確認ください。
              </p>
              <p className="mt-4">
                当社は、当サイトに関して、利用者と他の利用者または第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                第8条（情報の正確性）
              </h2>
              <p>
                当サイトに掲載されている転職エージェントの情報（求人数、サービス内容、料金等）は、執筆時点の情報に基づいています。最新の情報については、各転職エージェントの公式サイトをご確認ください。当社は、情報の更新に努めますが、リアルタイムでの正確性を保証するものではありません。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                第9条（本規約の変更）
              </h2>
              <p>
                当社は、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。変更後の利用規約は、当サイトに掲載した時点から効力を生じるものとします。本規約の変更後、当サイトの利用を継続した場合には、利用者は変更後の規約に同意したものとみなします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                第10条（個人情報の取扱い）
              </h2>
              <p>
                当サイトにおける個人情報の取扱いについては、別途定める「プライバシーポリシー」に従うものとします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                第11条（準拠法・管轄裁判所）
              </h2>
              <p>
                本規約の解釈にあたっては、日本法を準拠法とします。当サイトに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
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
                    ["お問い合わせ", "サイト内のお問い合わせフォームよりご連絡ください"],
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
