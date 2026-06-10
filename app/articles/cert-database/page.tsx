import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアのデータベース資格ガイド｜OSS-DB・ORACLE MASTER・DBスペシャリストを徹底比較",
  description:
    "女性エンジニアがデータベース系資格を取得するためのガイド。OSS-DB Silver/Gold、ORACLE MASTER Bronze/Silver/Gold、データベーススペシャリスト（IPA高度）の難易度・受験料・勉強時間・勉強法を実データで比較。取得後の年収・キャリアへの影響、女性に役立つ理由、おすすめ教材・転職エージェントまで解説します。",
  alternates: { canonical: "/articles/cert-database/" },
  openGraph: {
    title: "女性エンジニアのデータベース資格ガイド｜OSS-DB・ORACLE MASTER・DBスペシャリストを徹底比較",
    description:
      "OSS-DB・ORACLE MASTER・データベーススペシャリストの難易度・受験料・勉強時間・勉強法・年収への影響を実データで比較。女性エンジニアがDB資格で市場価値を上げる方法を解説。",
    url: "https://women-engineer.com/articles/cert-database/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアのデータベース資格ガイド｜OSS-DB・ORACLE MASTER・DBスペシャリストを徹底比較",
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
    "OSS-DB・ORACLE MASTER・データベーススペシャリストの難易度・受験料・勉強時間・勉強法・年収への影響を実データで比較。女性エンジニアがDB資格で市場価値を上げる方法を解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/cert-database/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "未経験の女性が最初に取るべきデータベース資格はどれですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "実務未経験なら、まず「ORACLE MASTER Bronze DBA」か「OSS-DB Silver」のどちらかがおすすめです。ORACLE MASTERは企業の基幹システムで使われるOracle Databaseが対象で、知名度・求人での評価が高いのが強み。OSS-DBはPostgreSQLが対象で、Webサービスやスタートアップとの相性が良く、PostgreSQLの普及で評価が伸びています。志望する業界がSIerや大企業ならORACLE MASTER、自社開発・Web系ならOSS-DBという選び方が目安です。どちらも勉強時間は1〜3ヶ月程度で、SQLとDB運用の基礎が体系的に身につきます。",
      },
    },
    {
      "@type": "Question",
      name: "データベーススペシャリスト試験は女性エンジニアでも合格できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "合格できます。データベーススペシャリスト（IPA高度・スキルレベル4）は合格率15〜18％の難関で、実務経験者でも約200時間の学習が必要とされますが、性別による有利不利はありません。論述ではなく記述・設計問題が中心で、テーブル設計（正規化・ER図）やSQLの理解を積み上げれば到達できます。受験料は7,500円と安く、国家試験のため転職や社内評価で長く通用する強力な肩書きになります。育休中などまとまった時間が取りにくい時期は、午前II対策を隙間時間で進め、午後対策を集中期間に充てると無理なく進められます。",
      },
    },
    {
      "@type": "Question",
      name: "OSS-DBとORACLE MASTERは両方取る必要がありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "両方は必須ではありません。まずは志望業界に合う1つを取り、実務で使うDBに合わせて選ぶのが効率的です。OSS-DB（PostgreSQL）とORACLE MASTER（Oracle）は思想が共通する部分が多く、片方を学べばもう片方の学習コストは下がります。Web系で経験を積んだ後にSIer案件へ広げたい、あるいはその逆、というように扱えるDBの幅を広げたいタイミングで2つ目に挑戦すると、対応できる求人が一気に増えて市場価値が上がります。SQLという共通言語が土台なので、知識は無駄になりません。",
      },
    },
    {
      "@type": "Question",
      name: "データベース資格を取ると年収はどのくらい上がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "資格そのものが直接年収を決めるわけではありませんが、DBスキルの証明は年収アップに効きます。データベースエンジニアの平均年収はおよそ420万〜450万円が目安で、設計・チューニングなど上流を担えると600万円以上、DBスペシャリストとして希少性が高まると700万円台も狙えます。資格手当（月5,000〜1万円程度）を設ける企業もあり、特にORACLE MASTER GoldやDBスペシャリストは評価が高い傾向です。資格は書類選考の通過率や年収交渉の材料として効くため、エージェント経由で市場価値を客観評価してもらうと適正額を得やすくなります。",
      },
    },
    {
      "@type": "Question",
      name: "産休・育休中にデータベース資格の勉強をするのは現実的ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "現実的で、むしろ相性の良い選択です。DB資格はOSS-DB SilverやORACLE MASTER Bronzeなら1〜3ヶ月、隙間時間でも進めやすく、Ping-tやWeb問題集をスマホで解けるため細切れ学習に向いています。手を動かす演習も、自宅PCにPostgreSQLやOracle XE（無償版）を入れれば無料で環境を作れます。ブランク期間に資格を取っておくと、復職時に「学び続けていた」証明になり、書類選考でのブランクの不安を打ち消せます。DBスキルは流行に左右されにくく、一度身につければ長く通用するため、復帰後のキャリア継続の土台になります。",
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
        style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "データベース資格ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              資格ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアのデータベース資格ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                OSS-DB・ORACLE MASTER・DBスペシャリストを難易度・受験料・年収で徹底比較
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月10日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. データベース資格とは（何が証明できるのか）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 主要なDB資格の種類と難易度（比較表）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 女性エンジニアにDB資格が役立つ理由</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 各資格の出題範囲（何が問われるか）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 勉強時間と勉強法（STEPで解説）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. おすすめ教材・問題集</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 取得後の年収・キャリアへの影響</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. よくある質問</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. 関連記事</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">データベース資格とは（何が証明できるのか）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              データベース（DB）資格は、テーブル設計・SQL・運用管理・パフォーマンスチューニングといった「データを正しく安全に扱う力」を客観的に証明する資格です。バックエンドやデータエンジニアの仕事は、突き詰めればデータの保存・取得・整合性の担保が中心。DBスキルはあらゆるWebサービス・業務システムの土台であり、流行り廃りの少ない「資産になるスキル」です。
            </p>
            <p>
              代表的なのが、PostgreSQLを対象とする<strong>OSS-DB技術者認定（Silver / Gold）</strong>、企業基幹システムで広く使われるOracle Databaseを対象とする<strong>ORACLE MASTER（Bronze / Silver / Gold / Platinum）</strong>、そしてIPA（情報処理推進機構）の国家試験で最高難度レベル4にあたる<strong>データベーススペシャリスト試験</strong>の3系統です。
            </p>
            <p>
              これらの資格は「SQLが書ける」だけでなく、<strong>正規化・ER図に基づくテーブル設計</strong>、<strong>インデックス・実行計画によるチューニング</strong>、<strong>バックアップ・リカバリなどの運用管理</strong>まで体系的に学べる点が強みです。実務では断片的になりがちな知識を、試験勉強を通じて「抜け漏れなく」整理できるため、独学エンジニアの弱点補強にも向いています。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>DB資格で証明できるスキル</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>SQL（SELECT / JOIN / 集計 / サブクエリ / トランザクション）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>テーブル設計・正規化・ER図によるデータモデリング</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>インデックス設計・実行計画の読解・パフォーマンスチューニング</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>バックアップ・リカバリ・障害対応などの運用管理</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span>PostgreSQL / Oracle といった製品固有の知識</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 種類と難易度 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">主要なDB資格の種類と難易度（比較表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              DB資格は「対象DB」と「難易度レベル」で整理すると選びやすくなります。下表は2026年時点の主要資格の概要です（受験料は税込・改定される場合があります）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>資格</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>対象DB</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>難易度</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>受験料</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>勉強時間の目安</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>ORACLE MASTER Bronze</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Oracle</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>入門（易しめ）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約41,773円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>1〜3ヶ月</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>OSS-DB Silver</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>PostgreSQL</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>初級〜中級</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>16,500円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>1〜3ヶ月</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>ORACLE MASTER Silver</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Oracle</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>中級</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約41,773円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>2〜4ヶ月</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>OSS-DB Gold</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>PostgreSQL</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>中級〜上級</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>17,600円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>半年〜1年</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>ORACLE MASTER Gold</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Oracle</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>上級</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>約41,773円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>半年〜1年</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>データベーススペシャリスト</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>製品非依存（国家試験）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>最難関（レベル4）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>7,500円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>200時間以上</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            ポイントは、<strong>国家試験のデータベーススペシャリストは受験料7,500円と最も安いのに評価が最も高い</strong>こと。一方ベンダー資格のORACLE MASTERは1試験あたり約4万円と高額ですが、Oracleを使う大企業・SIerでの知名度が抜群です。OSS-DBはPostgreSQLの普及とともに評価が伸びており、Web系・自社開発と相性が良い資格です。
          </p>
        </div>
      </section>

      {/* sec3 女性に役立つ理由 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアにDB資格が役立つ理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされますが、DBスキルはその中でも「長く・柔軟に働く」を後押ししてくれる領域です。狙うキーワード「女性エンジニア データベース 資格 取得」の観点で、役立つ理由を整理します。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>1. スキルが陳腐化しにくくブランク復帰に強い</h3>
              <p className="text-text-light text-sm leading-relaxed">SQLや正規化・ER図の考え方は数十年通用する普遍的な技術。産休育休でブランクが空いても価値が落ちにくく、資格はその力を客観的に証明してくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3aed" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>2. 隙間時間で取得しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">OSS-DB SilverやORACLE MASTER BronzeはPing-tやWeb問題集をスマホで解け、1〜3ヶ月で取得可能。育児・家事の合間でも積み上げやすい資格です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>3. 実力が客観評価され交渉材料になる</h3>
              <p className="text-text-light text-sm leading-relaxed">資格は書類選考の通過率を上げ、年収交渉の根拠になります。性別ではなくスキルで判断されやすくなり、適正な評価を得る後押しになります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3aed" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>4. リモート・上流職種への足がかりになる</h3>
              <p className="text-text-light text-sm leading-relaxed">DB設計・チューニングは上流寄りで、リモート求人も豊富。DBスペシャリストなどを取ると、時間ではなく成果で評価される職域に移りやすくなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 出題範囲 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">各資格の出題範囲（何が問われるか）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>資格ごとに「どこまでの深さ」が問われるかが異なります。志望業界と現在のレベルに合わせて選びましょう。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>OSS-DB Silver / Gold（PostgreSQL）</h3>
              <p className="text-sm text-text-light leading-relaxed">Silverは全50問・CBT形式で、出題は「一般知識16％／運用管理52％／開発・SQL32％」の構成。インストール・設定・基本的な運用とSQLが中心で、難易度は基本情報技術者のDB分野と同程度です。Goldはサーバー構築・高度な運用管理・性能監視・パフォーマンスチューニング・障害対応など、PostgreSQLの内部構造に踏み込んだ実務的な内容で、応用情報技術者に近い難度です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>ORACLE MASTER Bronze / Silver / Gold（Oracle）</h3>
              <p className="text-sm text-text-light leading-relaxed">BronzeはOracle Databaseの基礎とSQL、DBA（データベース管理者）として最低限必要な管理知識が範囲。Silverはそこに日常的な運用管理とより実践的なSQLが加わり、Goldはバックアップ・リカバリ、性能管理、より高度な運用設計まで問われます。Oracleは企業の基幹システムで広く使われるため、SIer・大企業での評価・知名度が特に高い系統です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>データベーススペシャリスト（IPA・レベル4）</h3>
              <p className="text-sm text-text-light leading-relaxed">製品に依存しない国家試験で、午前I・午前II・午後I・午後IIの4区分すべてで100点満点中60点以上が必要。午後は概念データモデル・正規化・ER図に基づくデータベース設計、SQL、物理設計や運用設計を記述式で問う本格的な内容です。合格率は15〜18％と難関ですが、設計力そのものを証明できるため評価が高く、DB職のキャリアの「到達点」として位置づけられます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 勉強時間と勉強法 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">勉強時間と勉強法（STEPで解説）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              目安は、<strong>OSS-DB SilverやORACLE MASTER Bronzeで1〜3ヶ月</strong>、<strong>OSS-DB GoldやORACLE MASTER Goldで半年〜1年</strong>、<strong>データベーススペシャリストで200時間以上</strong>。次の順序で進めると、未経験からでも挫折しにくいです。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "SQLとDBの基礎を固める", "SELECT・JOIN・集計・サブクエリ、トランザクション、正規化の基本を理解。ここが全資格に共通する土台です。SQLが初めてなら本サイトのSQL/DB記事で全体像をつかんでから進めましょう。"],
              ["STEP2", "目標資格を1つ決める", "Web系・自社開発志望ならOSS-DB Silver、SIer・大企業志望ならORACLE MASTER Bronze、設計力を国家資格で示したいならDBスペシャリスト。あれこれ手を出さず1つに集中するのが合格の近道です。"],
              ["STEP3", "公式範囲に沿った参考書を1冊通読", "OSS-DBなら『OSS教科書』、ORACLE MASTERなら黒本（翔泳社）、DBスペシャリストなら『情報処理教科書』など定番1冊を、最後まで通読して全体像を把握します。"],
              ["STEP4", "問題演習を繰り返す（Ping-t・過去問）", "ORACLE MASTERやOSS-DBはPing-tや各種Web問題集で反復。DBスペシャリストはIPA公開の過去問を年度ごとに解き、午後の記述に慣れます。間違えた論点はノート化。"],
              ["STEP5", "無料環境で手を動かす", "PostgreSQLやOracle Database XE（無償版）を自宅PCに入れ、実際にSQLを実行・テーブルを設計。手を動かすと知識が定着し、実務でも即戦力になります。"],
              ["STEP6", "模試・直前演習で仕上げる", "本番形式（CBTや時間配分）に慣れる。DBスペシャリストは午後IIの長文に時間がかかるため、時間を計って解く練習を必ず行いましょう。"],
            ].map(([step, title, desc], i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d1dce5" }}>
                <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>{step}</span>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* sec6 おすすめ教材 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ教材・問題集</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>定番の「テキスト1冊＋問題演習サービス」の組み合わせが、もっとも効率的で費用も抑えられます。</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>資格</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>定番テキスト</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>演習</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>OSS-DB Silver / Gold</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>『OSS教科書 OSS-DB Silver / Gold』（翔泳社）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Ping-t（無料範囲あり）・公式サンプル問題</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>ORACLE MASTER</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>黒本『オラクルマスター教科書』（翔泳社）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>Ping-t・白本（問題集）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>データベーススペシャリスト</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>『情報処理教科書 データベーススペシャリスト』（翔泳社）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>IPA公開の過去問・db-siken.com（無料）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>費用を抑えるコツ</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>過去問・無料問題集を主軸に</strong>（DBスペシャリストはIPA公開過去問・db-siken.comが無料）</li>
              <li>② <strong>練習環境はOSS・無償版を活用</strong>（PostgreSQLは無料、Oracle XEは無償ライセンス）</li>
              <li>③ <strong>会社の資格支援制度を確認</strong>（受験料補助・合格報奨金・資格手当がある企業も多い）</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec7 年収・キャリア */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">取得後の年収・キャリアへの影響</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              データベースエンジニアの平均年収はおよそ<strong>420万〜450万円</strong>が目安。設計・チューニングなどの上流や、希少性の高いDBスペシャリスト人材になると<strong>600万〜700万円台</strong>も狙える、伸びしろの大きい職域です。下表は資格取得が効きやすいキャリア像です（企業・経験により変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>フェーズ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>効く資格</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>未経験〜若手</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>350万〜450万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ORACLE MASTER Bronze / OSS-DB Silver</td></tr>
                <tr style={{ backgroundColor: "#f8fafb" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>運用・開発の実務者</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>450万〜600万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ORACLE MASTER Silver / OSS-DB Gold</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>設計・チューニング担当</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>600万〜750万円</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>ORACLE MASTER Gold / DBスペシャリスト</td></tr>
                <tr style={{ backgroundColor: "#f8fafb" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>DBスペシャリスト / フリーランス</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>700万円〜</td><td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>DBスペシャリスト＋実務実績</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>キャリアの広がり方</h3>
            <p className="text-sm text-text-light leading-relaxed">
              DBスキルは応用が利き、<strong>データベースエンジニア／DBA</strong>はもちろん、<strong>バックエンドエンジニア</strong>（設計力で差別化）、<strong>データエンジニア</strong>（データ基盤・ETL）、<strong>SRE</strong>（高可用性・性能）へと横展開できます。資格手当（月5,000〜1万円程度）や合格報奨金を設ける企業も多く、特にORACLE MASTER GoldとDBスペシャリストは社内評価・転職市場の両方で武器になります。
            </p>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>取得した資格を正当に評価してもらうには、DBスキルを理解できるIT特化型と、女性のキャリア継続に強い女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。OSS-DBやORACLE MASTER、DBスペシャリストといった資格の意味を理解したアドバイザーが、設計・チューニングのスキルを踏まえた提案をしてくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。DB資格を年収交渉の材料として活かす提案に長け、スピーディーなマッチングに定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。資格で得たスキルを、働き方の条件と両立させながら活かしたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <p className="font-bold text-lg mb-2">資格を活かせるかはエージェント選びで決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、DBスキルを正しく評価してくれるアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl border overflow-hidden" style={{ borderColor: "#d1dce5" }}>
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50" style={{ color: "#0891b2" }}>
                  <span className="pr-4">{faq.name}</span>
                  <span className="transition-transform group-open:rotate-180">&#9662;</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                  <p className="pt-4">{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/sql-database/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>SQL・データベースの基礎ガイド</h3><p className="text-sm text-text-light">資格学習の土台になるSQLとDB設計</p></a>
            <a href="/articles/data-engineer/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>データエンジニア転職ガイド</h3><p className="text-sm text-text-light">DBスキルを活かせる伸びしろの大きい職種</p></a>
            <a href="/articles/backend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>バックエンドエンジニア転職ガイド</h3><p className="text-sm text-text-light">DB設計が中核になるサーバーサイド職</p></a>
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性エンジニアの資格ガイド</h3><p className="text-sm text-text-light">転職に効く資格を分野別に解説</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">DB資格を活かして理想の転職を</h2>
            <p className="text-white/90 mb-6">取得した資格を正しく評価してくれるエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
