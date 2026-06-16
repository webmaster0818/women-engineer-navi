import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性のテクニカルサポート・カスタマーサクセス転職ガイド｜年収・なり方・将来性",
  description:
    "女性に人気のテクニカルサポート／カスタマーサクセス（IT・SaaS）転職ガイド。仕事内容や平均年収（20代495万〜30代740万）、未経験からなる方法、SaaS拡大で伸びる求人動向・将来性、CS→PdM/セールスエンジニアへのキャリアパスを実データで解説。おすすめエージェントも紹介します。",
  alternates: { canonical: "/articles/support-engineer/" },
  openGraph: {
    title: "女性のテクニカルサポート・カスタマーサクセス転職ガイド｜年収・なり方・将来性",
    description:
      "女性に人気のテクニカルサポート／カスタマーサクセス転職を実データで徹底解説。年収・未経験からのなり方・SaaS拡大による求人動向・キャリアパス。",
    url: "https://women-engineer.com/articles/support-engineer/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性のテクニカルサポート・カスタマーサクセス転職ガイド｜年収・なり方・将来性",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
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
    "女性に人気のテクニカルサポート／カスタマーサクセス（IT・SaaS）の年収・未経験からのなり方・求人動向・将来性・キャリアパスを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/support-engineer/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "テクニカルサポートとカスタマーサクセスの違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "テクニカルサポートは、顧客からの問い合わせや不具合に対して受動的に「問題を解決する」仕事で、技術的な正解がある対応が中心です。一方カスタマーサクセスは、顧客が製品で成果を出せるよう能動的に先回りして支援し、オンボーディング（導入定着）・活用促進・解約防止までを担い、LTV（顧客生涯価値）の最大化を目指します。SaaS企業ではこの2つが顧客対応の両輪で、テクニカルサポートで製品知識を深めてからカスタマーサクセスへ広げるキャリアも一般的です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもカスタマーサクセスやテクニカルサポートに転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。SaaS企業はサブスク型で「使い続けてもらう」ことが収益の核のため、未経験歓迎・ポテンシャル採用の求人が多く、ITの入り口として女性に人気の職種です。販売・接客・営業事務・コールセンターなどで培った傾聴力や顧客折衝力がそのまま評価されます。未経験スタートの年収は350万〜450万円程度が一般的で、入社後にSaaSの製品知識・SQL・ツール（CRM等）を学びながら成長できます。",
      },
    },
    {
      "@type": "Question",
      name: "カスタマーサクセスの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "カスタマーサクセスの平均年収はおよそ540万〜650万円（Indeedで約543万円、JAC Recruitment調査で650万円前後）です。年代別では20代で約495万円、30代でリーダー・マネージャー職が増え約740万円、40代では役職者で900万円台も狙えます。テクニカルサポートはやや低めで20代後半〜30代で350万〜500万円程度が目安。SaaS市場の拡大で需要が高く、成果（解約率・アップセル）が数字で残るため、実績を出せば年収を上げやすい職種です。",
      },
    },
    {
      "@type": "Question",
      name: "カスタマーサクセスやテクニカルサポートは女性が働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすい職種のひとつです。オンライン会議・チャット・メールでの対応が中心のためフルリモート求人が多く、育児・介護との両立がしやすいのが特徴です。SaaS企業はフレックスや時短に理解のあるところが多く、解約率やアップセルなど成果が数字で可視化されるため、勤務時間ではなく成果で評価されやすい点も女性に向いています。ただし企業差があるため、リモートの運用実態や産休育休の取得実績はエージェント経由で確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "カスタマーサクセスからどんなキャリアに進めますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "顧客の課題と製品を深く理解できる職種のため、キャリアの選択肢が広いのが魅力です。代表的な進路は、(1)CSマネージャー／VP of CSへのマネジメント、(2)顧客の声を製品に反映するプロダクトマネージャー（PdM）、(3)技術提案を担うセールスエンジニア（プリセールス）やソリューションアーキテクト、(4)インサイドセールス・マーケティングへの横展開です。SQLやAPIなど技術寄りのスキルを足すと、より上流・高年収のポジションへ進みやすくなります。",
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
              { label: "テクニカルサポート・カスタマーサクセス転職ガイド" },
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
              女性のテクニカルサポート・カスタマーサクセス転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                未経験からITに入りやすい人気職種を、年収・なり方・将来性まで実データで解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月10日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. テクニカルサポート・カスタマーサクセスとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. この職種が女性に人気の理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 必要なスキル</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 年収相場（年代別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 求人動向と将来性（SaaS拡大）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験からなるためのロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. キャリアパス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">テクニカルサポート・カスタマーサクセスとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              テクニカルサポートとカスタマーサクセス（CS）は、IT・SaaS企業で「導入した顧客にサービスを使いこなしてもらい、成果を出してもらう」ことを担う職種です。エンジニアが作った製品と顧客のあいだに立ち、技術と現場をつなぐ役割で、未経験からITに入りやすく女性に人気があります。
            </p>
            <p>
              <strong>テクニカルサポート</strong>は、顧客からの問い合わせ・不具合・操作の質問に答え、「問題を解決する」のが主な仕事です。受動的（顧客起点）で、多くのケースに技術的な正解があります。エラーの切り分け、再現確認、開発チームへのエスカレーションなどを行います。
            </p>
            <p>
              <strong>カスタマーサクセス</strong>は、顧客が製品で成果を出せるよう能動的に先回りして支援する仕事です。SaaSはサブスク（月額・年額の継続課金）が収益の核のため、「契約して終わり」ではなく「使い続けて成功してもらう」ことが事業の生命線になります。導入直後のオンボーディング（定着支援）、利用状況のモニタリング、解約（チャーン）の兆候を早期に発見しての防止、アップセル・クロスセルの提案までを担います。
            </p>
            <p>
              両者はSaaS企業の顧客対応の「両輪」で、テクニカルサポートで製品知識を深めてからカスタマーサクセスへ広げる人も多くいます。営業・サポート・マーケティングの中間に位置し、顧客とプロダクトの両方を理解できるポジションです。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>問い合わせ対応・トラブルシューティング（テクニカルサポート）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>オンボーディング（導入・初期設定・活用定着の支援）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>利用状況のモニタリングと定例ミーティング・ヘルスチェック</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>解約（チャーン）防止と継続率・更新率の向上</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>アップセル・クロスセルでLTV（顧客生涯価値）を最大化</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>顧客の声を開発・プロダクトチームへフィードバック</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性に人気の理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">この職種が女性に人気の理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              テクニカルサポート・カスタマーサクセスは、未経験からITに入りやすく、女性が長くキャリアを築ける要素が多い職種です。コードを書く開発職ほど学習のハードルが高くなく、これまでの接客・営業・事務経験を活かして「ITの世界」へ移れる入り口として注目されています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 未経験から挑戦しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">SaaS企業は未経験歓迎・ポテンシャル採用の求人が多く、ITの入り口として最適。販売・接客・営業事務・コールセンターの経験が評価され、文系・非エンジニアからの転職も豊富です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. リモート・フレックスと相性が良い</h3>
              <p className="text-text-light text-sm leading-relaxed">対応はオンライン会議・チャット・メールが中心でフルリモート求人が多く、通勤負担を減らせます。育児・介護と両立しながら働きやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 強みの「傾聴力・折衝力」が活きる</h3>
              <p className="text-text-light text-sm leading-relaxed">顧客の課題を聞き出し、信頼関係を築いて伴走する力が中核スキル。これまでの接客・営業で培ったコミュニケーション力がそのまま武器になり、活躍しやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 成果が数字で残り評価されやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">解約率・継続率・アップセル額など成果が数値で可視化されるため、勤務時間の長さではなく成果で評価され、時短勤務でも実力が認められやすいのが特徴です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 スキル */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              この職種は「人と向き合う力」と「ITの基礎理解」の掛け合わせです。すべてを最初から完璧にする必要はなく、まず<strong>コミュニケーション・課題解決</strong>の土台を活かしつつ、入社後にSaaSの製品知識やツールを学んでいくのが王道です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>スキル領域</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>具体例</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>コミュニケーション</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>傾聴 / 課題ヒアリング / 折衝・関係構築</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>接客・営業経験が直結。最重要の中核スキル</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>IT・SaaSの基礎理解</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Web/クラウドの仕組み / 製品知識 / API・連携の概念</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>未経験は入社後でもOK。基礎理解が信頼につながる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データ・数値分析</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>SQL / Excel / 利用状況・チャーン分析 / KPI管理</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>SQLが使えると技術寄りCS・高年収に近づく</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ツール活用</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Salesforce / Zendesk / Intercom / Notion</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>CRM・サポートツールは現場で習得できる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>課題解決・改善提案</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>トラブルシューティング / 活用提案 / 業務改善</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「成功に導く」提案力がCSの差別化ポイント</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            2026年時点では、<strong>SQLでの利用データ分析</strong>や<strong>APIなど技術連携の理解</strong>を備えた「技術が分かるカスタマーサクセス」の需要が特に高く、こうしたスキルを持つ人は年収・ポジションともに上がりやすい傾向です。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収相場（年代別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              カスタマーサクセスの平均年収はおよそ<strong>540万〜650万円</strong>（Indeedで約543万円、JAC Recruitment調査で650万円前後）。テクニカルサポートはやや低めで、年代・役職・扱う製品で差が出ます。下表は各種調査をもとにした目安です（企業・地域・スキルにより変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>未経験スタート</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約350万〜450万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>SaaS企業は未経験でも比較的高めの設定</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約495万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>300万〜500万円のレンジが中心</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約740万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>リーダー・マネージャー職で上昇</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約900万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>役職者・マネジメント層が中心</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>成果（数字）を出す</strong>。解約率の低下・継続率・アップセル額など実績を定量で示す</li>
              <li>② <strong>技術スキルを足す</strong>。SQL・API理解で「技術が分かるCS」になり希少価値を上げる</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。SaaS・CSに強いアドバイザーに市場価値を客観評価してもらう</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 求人動向・将来性 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向と将来性（SaaS拡大）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              日本のSaaS市場は成長を続け、<strong>2026年には約1兆6,681億円規模</strong>に達すると予測されています。サブスク型のSaaSは「契約後に使い続けてもらえるか」が収益を左右するため、顧客の定着・成功を支えるカスタマーサクセスとテクニカルサポートの採用ニーズが右肩上がりに伸びています。
            </p>
            <p>
              特に2020年9月以降、カスタマーサクセスとインサイドセールスの求人が急増。dodaやエン転職、Indeedなどでは未経験歓迎の求人も多数掲載されています。今後もSaaSの普及が続く限り需要は伸び続ける見込みで、<strong>「未経験からITに入りたい女性」にとって入りやすく、将来性の高い領域</strong>といえます。
            </p>
            <p>
              一方で、利用データを読み解き解約を防ぐ「分析力のあるCS」や、APIなど技術連携まで踏み込める「技術が分かるテクニカルサポート」は希少で、年収も高くなります。入り口は未経験でも、スキルを伸ばせば市場価値を大きく上げられるのが魅力です。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 未経験ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験からなるためのロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>開発職ほど長い学習期間は不要で、これまでの接客・営業経験を活かせば<strong>数週間〜数か月の準備</strong>で挑戦できます。次の順序で進めると転職活動がスムーズです。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "職種理解と自己分析", "テクニカルサポート/カスタマーサクセスの違いと、SaaS・サブスクの基本を理解。接客・営業・事務など、自分の経験のどこが活かせるかを棚卸しします。"],
              ["STEP2", "IT・SaaSの基礎を学ぶ", "Web/クラウドの仕組み、API・連携の概念をざっくり把握。代表的なSaaS（Salesforce、Slack、freeeなど）を実際に触ると理解が早まります。"],
              ["STEP3", "強みを成果で語れるようにする", "前職で「顧客の課題を聞き出し解決した」「継続・リピートにつなげた」エピソードを数字付きで整理。CS・サポートの成果指標に翻訳します。"],
              ["STEP4", "数値・ツールに慣れる", "Excelでの集計、可能ならSQLの基礎、Zendesk/Intercom等のサポートツールに触れておくと、未経験でも評価が上がります。"],
              ["STEP5", "未経験歓迎求人に応募", "SaaS企業の未経験歓迎・ポテンシャル採用を中心に。IT特化型エージェントに相談すると、求人票に出ない働き方の実態まで確認できます。"],
              ["STEP6", "面接で『成功支援』の姿勢を示す", "『問い合わせをさばく』ではなく『顧客を成功に導く』視点で志望動機を語ると刺さります。リモート・時短など希望条件も率直に共有を。"],
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
        </div>
      </section>

      {/* sec7 キャリアパス */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">キャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>顧客の課題と製品の両方を深く理解できるため、キャリアの選択肢が広いのが魅力です。ITの入り口として始めて、技術・事業・マネジメントのいずれにも広げられます。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>CSを極める・束ねる</h3><p className="text-sm text-text-light">シニアCSM → CSマネージャー → VP of CS。チームと継続率・LTVをリードし、高年収を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#7c3a55" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>プロダクトへ（PdM）</h3><p className="text-sm text-text-light">顧客の声を最もよく知る立場を活かし、プロダクトマネージャーへ。製品の方向性を決める上流へ進む道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>技術提案へ（セールスエンジニア）</h3><p className="text-sm text-text-light">技術理解を深め、セールスエンジニア（プリセールス）／ソリューションアーキテクトへ。技術と商談をつなぐ希少職へ。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#7c3a55" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>事業サイドへ横展開</h3><p className="text-sm text-text-light">インサイドセールス／マーケティング／事業企画へ。顧客理解を武器に、SaaSの成長エンジンを担う道。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>SaaS・IT業界の求人を扱う特化型と、働き方を重視する女性特化型の併用が効果的です。未経験歓迎求人やリモートの実態を引き出してもらいましょう。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。SaaS企業のテクニカルサポート・カスタマーサクセス求人にも詳しく、製品や技術背景を理解したアドバイザーが提案してくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。SaaS・スタートアップのCS求人も扱い、スピーディーなマッチングと年収交渉力に定評があります。未経験からのキャリアチェンジ相談にも対応します。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。接客・営業からのキャリアチェンジ支援にも強く、働き方の条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 成功事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Aさん（20代後半・販売職→カスタマーサクセス）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">アパレル販売（IT未経験）/ 年収330万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SaaS企業のカスタマーサクセス / 年収450万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">接客で培った傾聴力と、リピーターを増やした実績を「継続率向上」の文脈で言語化。IT特化型エージェントの紹介で未経験歓迎のSaaS企業に転職し、年収120万円アップとフルリモートを同時に実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Bさん（30代前半・テクニカルサポート→技術が分かるCS）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SIerのテクニカルサポート / 年収430万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SaaSのカスタマーサクセス（SQL活用）/ 年収600万円・時短可</p></div>
              </div>
              <p className="text-sm text-text-light">サポートで身につけた製品知識に加えてSQLで利用データを分析できる強みを整理。解約防止の実績を数字で示し、産休育休実績のあるSaaS企業へ。年収170万円アップと時短勤務の両立を実現しました。</p>
            </div>
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

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からのIT転職ガイド</h3><p className="text-sm text-text-light">ゼロから始める女性のIT入門</p></a>
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアのキャリアパス</h3><p className="text-sm text-text-light">職種から広がる将来の選択肢</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすい企業の選び方</h3><p className="text-sm text-text-light">産休育休・リモートの見極め方</p></a>
            <a href="/articles/work-life-balance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>IT職のワークライフバランス</h3><p className="text-sm text-text-light">リモート・時短で両立する働き方</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
