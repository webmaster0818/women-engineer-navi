import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "女性エンジニア転職ナビのプライバシーポリシーです。当サイトにおける個人情報の取扱いについて定めています。",
  alternates: { canonical: "/privacy-policy/" },
  openGraph: {
    title: "プライバシーポリシー | 女性エンジニア転職ナビ",
    description:
      "女性エンジニア転職ナビのプライバシーポリシーです。当サイトにおける個人情報の取扱いについて定めています。",
    url: "https://women-engineer-navi.pages.dev/privacy-policy/",
    type: "website",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "プライバシーポリシー | 女性エンジニア転職ナビ",
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
    "女性エンジニア転職ナビのプライバシーポリシーです。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer-navi.pages.dev/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
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
              { label: "プライバシーポリシー" },
            ]}
          />
          <div className="mt-4">
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              プライバシーポリシー
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
              株式会社MediaX（以下「当社」といいます。所在地：東京都渋谷区）は、当社が運営するウェブサイト「女性エンジニア転職ナビ」（以下「当サイト」といいます）において、利用者の個人情報の保護に細心の注意を払い、以下のプライバシーポリシー（以下「本ポリシー」といいます）に基づき、適切に取り扱います。
            </p>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                1. 個人情報の定義
              </h2>
              <p>
                本ポリシーにおいて「個人情報」とは、個人情報保護法に定義される個人情報を指し、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別できるもの、または個人識別符号が含まれるものをいいます。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                2. 個人情報の収集方法
              </h2>
              <p>
                当サイトでは、以下の方法で個人情報を収集することがあります。
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>お問い合わせフォームからの情報提供（氏名、メールアドレス等）</li>
                <li>アクセス解析ツールによる閲覧情報の自動収集（IPアドレス、ブラウザ情報、閲覧ページ等）</li>
                <li>Cookie等の技術を利用した情報の収集</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                3. 個人情報の利用目的
              </h2>
              <p>当社は、収集した個人情報を以下の目的で利用します。</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>お問い合わせへの回答・対応</li>
                <li>当サイトの運営・改善</li>
                <li>アクセス解析によるサービス品質の向上</li>
                <li>利用状況の統計・分析</li>
                <li>法令に基づく対応</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                4. 個人情報の第三者提供
              </h2>
              <p>
                当社は、以下の場合を除き、利用者の同意なく個人情報を第三者に提供することはありません。
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合であって、利用者の同意を得ることが困難であるとき</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、利用者の同意を得ることが困難であるとき</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、利用者の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                5. Cookieの使用について
              </h2>
              <p>
                当サイトでは、利用者の利便性向上やアクセス解析のためにCookieを使用しています。Cookieとは、ウェブサーバーから利用者のブラウザに送信される小さなテキストファイルで、利用者のコンピュータに保存されます。
              </p>
              <p className="mt-4">
                利用者はブラウザの設定により、Cookieの受け入れを拒否することができます。ただし、Cookieを無効にした場合、当サイトの一部の機能が利用できなくなる場合があります。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                6. アクセス解析ツールについて
              </h2>
              <p>
                当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
              </p>
              <p className="mt-4">
                この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。Googleアナリティクスの利用規約については、Googleアナリティクスサービス利用規約をご確認ください。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                7. 広告配信サービスについて
              </h2>
              <p>
                当サイトでは、第三者配信の広告サービスを利用しています。広告配信事業者は、利用者の興味に応じた広告を表示するために、当サイトや他のサイトへのアクセスに関する情報（氏名、住所、メールアドレス、電話番号は含まれません）を使用することがあります。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                8. アフィリエイトプログラムについて
              </h2>
              <p>
                当サイトは、転職エージェント等が提供するアフィリエイトプログラムに参加しています。当サイトに掲載されたリンクを通じて転職エージェント等のサービスに申し込まれた場合、当社が報酬を受け取ることがあります。この報酬の有無や金額が、当サイトのコンテンツの内容や評価に影響を与えることはありません。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                9. 個人情報の安全管理
              </h2>
              <p>
                当社は、個人情報の紛失、破壊、改ざん及び漏洩などを防止するため、適切なセキュリティ対策を実施し、個人情報の安全管理に努めます。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                10. 個人情報の開示・訂正・削除
              </h2>
              <p>
                利用者から個人情報の開示、訂正、追加、削除、利用停止を求められた場合には、本人確認を行った上で、遅滞なく対応いたします。ご請求は、下記のお問い合わせ先までご連絡ください。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                11. SSL（Secure Socket Layer）について
              </h2>
              <p>
                当サイトでは、個人情報の保護のため、SSL（Secure Socket Layer）による暗号化通信を導入しています。これにより、利用者の個人情報は安全に送信されます。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                12. 本ポリシーの変更
              </h2>
              <p>
                当社は、法令の改正、社会情勢の変化、その他の事情により、本ポリシーの内容を変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#0891b2" }}>
                13. お問い合わせ
              </h2>
              <p>
                本ポリシーに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
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
