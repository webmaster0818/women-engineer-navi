import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性ITコンサルタント転職ガイド｜年収・必要スキル・エンジニアからの道",
  description:
    "女性ITコンサルタントの転職ガイド。平均年収（20代500万〜40代780万）や上流・要件定義・DX・PMO・SAPの仕事内容、エンジニアから目指すロードマップ、求人動向・将来性、キャリアパスを実データで解説。働き方の実態やおすすめ転職エージェントも紹介します。",
  alternates: { canonical: "/articles/it-consultant/" },
  openGraph: {
    title: "女性ITコンサルタント転職ガイド｜年収・必要スキル・エンジニアからの道",
    description:
      "女性ITコンサルタントの年収・必要スキル・エンジニアからのロードマップ・求人動向・キャリアパス・働き方の実態を実データで徹底解説。",
    url: "https://women-engineer.com/articles/it-consultant/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性ITコンサルタント転職ガイド｜年収・必要スキル・エンジニアからの道",
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
    "女性ITコンサルタントの年収・必要スキル・エンジニアからのロードマップ・求人動向・キャリアパス・働き方の実態を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/it-consultant/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性ITコンサルタントの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ITコンサルタントの平均年収は各種調査でおよそ595万〜748万円とエンジニアより高めです。年代別の目安は20代で約500万円（アナリスト）、30代で約630万〜750万円（コンサルタント〜マネージャー）、40代で約700万〜800万円（マネージャー〜シニア）。役職が上がるごとに階段状に年収が跳ね上がるのが特徴で、マネージャー昇格で1,000万円超も珍しくありません。年収は職位連動の度合いが強く、性別による差はつきにくい職種です。SAPなど専門領域のフリーランスでは月単価120万〜180万円（年収換算1,500万円超）の案件もあります。",
      },
    },
    {
      "@type": "Question",
      name: "エンジニアからITコンサルタントへ転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "エンジニア・SEからの転身はむしろ王道ルートです。システム開発の知見をすでに持つため、上流（要件定義・設計）の経験やDX・SAP・ERPの知識がそのまま武器になります。選考で最も重視されるのはロジカルシンキングと顧客折衝・コミュニケーション力、そして経営視点での課題解決力です。技術力に加えてこの3点を示せるかが合否を分けます。要件定義やベンダー折衝の経験を職務経歴書で具体的に言語化し、コンサル特化のケース面接対策を行うのが近道です。",
      },
    },
    {
      "@type": "Question",
      name: "ITコンサルタントは激務で女性には続けにくいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "プロジェクトの繁忙期（提案・カットオーバー前など）は忙しくなりますが、近年は働き方改革とリモート常駐の普及で実態は大きく変わっています。総合系・SAP系を中心に産休育休の取得実績や時短・リモートを整える企業が増え、NTTデータ・NEC・富士通など大手は女性管理職育成にも力を入れています。プロジェクト単位で稼働が読みやすいため、ライフイベントに合わせてアサインを調整しやすい面もあります。企業差・部署差が大きいので、稼働実態・復帰率・リモート可否は事前確認が必須です。",
      },
    },
    {
      "@type": "Question",
      name: "ITコンサルタントになるのに資格は必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "必須資格はありませんが、専門性を示す資格は選考や案件獲得で有利になります。代表的なのはITストラテジスト・プロジェクトマネージャ（高度情報処理試験）、PMP、ITIL、そしてSAP認定コンサルタント資格です。特にSAPは2027年問題（保守期限）で導入需要が集中しており、SAP認定があると未経験領域でも高単価案件に入りやすくなります。資格より重視されるのは実務の上流経験と論理的思考力なので、資格は補強材料と捉えるのが現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "ITコンサル転職におすすめの転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "上流志向・年収重視ならIT特化型のレバテックキャリアやGeekly、女性のキャリア継続を重視するならtype女性の転職エージェントの併用がおすすめです。IT特化型はDX・SAP・PMOなど案件の中身を理解したアドバイザーが多く、エンジニアからのキャリアチェンジを年収交渉まで含めて支援してくれます。女性特化型は産休育休・リモートなど働き方の条件で求人を絞り込めます。コンサルは情報の非対称性が大きい業界なので、2〜3社併用で内情を比較するのが安全です。",
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
              { label: "ITコンサルタント転職ガイド" },
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
              女性ITコンサルタント転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収・必要スキル・エンジニアからの道のりを実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. ITコンサルタントとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 女性がITコンサルで活躍できる理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 必要なスキル（表）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. ITコンサルの年収相場（年代別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 求人動向と将来性・働き方の実態</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. エンジニアから目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. ITコンサルのキャリアパス</a></li>
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
          <h2 className="text-2xl font-bold mb-6">ITコンサルタントとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ITコンサルタントは、企業の経営課題をITで解決する「上流の専門職」です。エンジニアが「どう作るか（How）」を担うのに対し、ITコンサルは「何を・なぜ作るか（What / Why）」を経営者と一緒に決めるところから関わります。IT戦略の策定、システム構想、DX（デジタルトランスフォーメーション）推進支援が中心で、開発フェーズの上流をリードする役割です。
            </p>
            <p>
              典型的な業務の流れは、(1)経営課題・業務課題のヒアリングと分析、(2)IT戦略・システム構想の策定、(3)要件定義の取りまとめ、(4)システム構成案の策定とベンダー選定支援、(5)PMO（プロジェクトマネジメントオフィス）としての進捗・コスト・品質管理。要件定義から本番稼働まで、プロジェクト全体を経営目線で伴走します。
            </p>
            <p>
              案件のタイプは大きく、<strong>戦略・DXコンサル</strong>（IT戦略立案・新規事業のデジタル化）、<strong>PMOコンサル</strong>（大規模プロジェクトの管理・推進）、<strong>パッケージ導入コンサル（SAPなどERP）</strong>の3系統に分かれます。中でもSAPは世界シェアNo.1のERPで、保守期限に伴う「2027年問題」で導入需要が集中しており、専門人材の不足が続いています。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>ITコンサルタントの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>IT戦略・システム構想の策定（経営課題のIT化）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>DX推進支援（業務改革・データ活用・新規事業）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>要件定義の取りまとめ・システム構成案の策定</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ベンダー選定支援・RFP作成</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>PMO（進捗・コスト・品質・リスク管理）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ERP（SAP）など業務パッケージの導入支援</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が活躍できる理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がITコンサルで活躍できる理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT業界の女性比率はまだ2割程度ですが、ITコンサルは「技術力＋対人力」が武器になる職種で、女性の強みが評価されやすい領域です。マイナビ転職でも女性歓迎のITコンサル求人が多数掲載され、NTTデータ・NEC・富士通など大手で女性の採用・登用が進んでいます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 役職連動で性別の年収差がつきにくい</h3>
              <p className="text-text-light text-sm leading-relaxed">アナリスト→コンサルタント→マネージャーと職位で年収が決まる構造のため、成果を出せば性別に関係なく昇進・昇給します。同年代の他職種より高年収を狙いやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 傾聴・調整力という強みが活きる</h3>
              <p className="text-text-light text-sm leading-relaxed">顧客の本音を引き出すヒアリング、部門間の利害調整、合意形成はコンサルの核。きめ細かいコミュニケーションが評価される場面が多く、対人力を武器にできます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. リモート常駐・働き方改革が進んでいる</h3>
              <p className="text-text-light text-sm leading-relaxed">近年はリモート常駐が一般化し、総合系・SAP系を中心に産休育休や時短の実績を積む企業が増加。プロジェクト単位で稼働が読めるため、ライフイベントとの両立がしやすくなっています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 上流スキルは長く・幅広く通用する</h3>
              <p className="text-text-light text-sm leading-relaxed">要件定義・PM・課題解決のスキルは特定技術の流行に左右されず、事業会社のDX推進やPMOへも転身可能。ブランクが空いても価値が落ちにくく、長期キャリアを築けます。</p>
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
              ITコンサルの選考で最も重視されるのは、技術力そのものよりも<strong>ロジカルシンキングとコミュニケーション力（コンサル適性）</strong>です。エンジニア出身者は技術と上流経験を土台に、ここを意識的に鍛えると強くなります。
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
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ロジカルシンキング</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>仮説思考 / 構造化 / MECE / 課題分析</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>選考のケース面接で最重視。コンサル適性の核</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>コミュニケーション</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ヒアリング / プレゼン / 折衝 / 合意形成</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>顧客に行動を促す力。女性の強みが活きる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>IT・技術知識</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>システム開発 / クラウド / DB / セキュリティ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>エンジニア経験がそのまま土台になる</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>プロジェクト管理</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>要件定義 / WBS / 進捗・コスト・リスク管理</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>PMO案件で必須。上流SE経験が活かせる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>業務・経営知識</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>会計 / 業務フロー / ERP（SAP）/ 業界知識</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>経営指標で課題を語れると評価が跳ね上がる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            資格は必須ではありませんが、<strong>ITストラテジスト・PMP・ITIL・SAP認定コンサルタント</strong>は専門性の証明になります。特にSAP認定は2027年問題で需要が集中しており、高単価案件への入口になります。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ITコンサルの年収相場（年代別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ITコンサルタントの平均年収は各種調査でおよそ<strong>595万〜748万円</strong>とエンジニアより高めです。最大の特徴は、職位（アナリスト→コンサルタント→マネージャー）が上がるごとに<strong>年収が階段状に跳ね上がる</strong>こと。下表は各種調査をもとにした目安です（企業・役職・スキルにより変動します）。
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
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約500万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>アナリスト。早い昇進で900万円台も</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約630万〜750万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>コンサル〜マネージャー。昇格で1,000万円超も</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約700万〜800万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>マネージャー〜シニア。プリンシパルで更に上振れ</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス（SAP等）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月単価 約120万〜180万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>年収換算1,500万円超。専門領域・上流で上振れ</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>職位を上げる</strong>。マネージャー昇格が最大の年収ジャンプ（1,000万円超の分岐点）</li>
              <li>② <strong>専門領域を持つ</strong>（SAP・DX・データ活用）。希少性の高い領域ほど単価が上がる</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。コンサルは情報の非対称性が大きく、適正評価が重要</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 求人動向・将来性・働き方 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向と将来性・働き方の実態</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              全業界でDXが加速し、IT戦略を描ける上流人材は慢性的に不足しています。経済産業省もIT人材不足を指摘しており、ITコンサルの需要・将来性は高い水準が続く見込みです。特にSAPは「2027年問題」で導入が集中し、SAPジャパンが「数年で数千人規模の人材不足が顕在化する」と予想するほど。2027年以降も保守・運用でSAP人材の求人はコンスタントに続くと見られています。
            </p>
            <p>
              働き方については「激務」のイメージが先行しがちですが、実態は変わってきています。提案やカットオーバー前など繁忙期は忙しくなる一方、近年は<strong>働き方改革とリモート常駐の普及</strong>で稼働の読みやすさが増しました。需要が高く人材が大切に扱われるため、就業環境はむしろ整いやすい側面も。プロジェクト単位でアサインを調整できるため、産休育休からの復帰や時短との両立もしやすくなっています。ただし企業差・部署差が大きいため、実際の稼働時間・復帰率・リモート可否は応募前に確認しましょう。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 エンジニアからのロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">エンジニアから目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>エンジニア・SEからの転身は王道ルート。技術力という土台に「上流・経営視点・伝える力」を足していく流れです。次の順序で準備すると選考を突破しやすくなります。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "上流経験を棚卸しする", "要件定義・基本設計・顧客折衝・ベンダー管理など、これまでの上流経験を職務経歴書に具体的に言語化。コンサルで通用する実績を可視化します。"],
              ["STEP2", "ロジカルシンキングを鍛える", "仮説思考・構造化・MECEを書籍やケース問題で訓練。技術力があっても論理的に課題を語れないと選考で落ちるため最優先です。"],
              ["STEP3", "経営・業務知識を補う", "会計の基礎、業務フロー、ERP（SAP）の概要を学習。経営指標（売上・コスト・生産性）で課題を語れると評価が一気に上がります。"],
              ["STEP4", "専門領域を1つ決める", "DX・PMO・SAPなど狙う領域を絞る。SAPは2027年問題で需要が集中しており、認定資格があると未経験領域でも入りやすい。"],
              ["STEP5", "資格で専門性を証明", "ITストラテジスト・PMP・ITIL・SAP認定など、狙う領域に合った資格を取得。書類選考と単価交渉で効きます。"],
              ["STEP6", "ケース面接対策と応募", "IT特化型エージェントでケース面接対策と求人の内情確認。総合系・SAP系・事業会社のDX部門など複数を比較して応募します。"],
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
          <h2 className="text-2xl font-bold mb-6">ITコンサルのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>ITコンサルは「上流・経営視点」が積み上がる職種で、その後の選択肢が非常に広いのが魅力です。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>コンサルで昇進する</h3><p className="text-sm text-text-light">コンサルタント→マネージャー→プリンシパル／パートナー。職位連動で年収が大きく伸び、1,000万円超を狙える王道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#7c3a55" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>事業会社のDX・IT部門へ</h3><p className="text-sm text-text-light">事業会社のDX推進・情報システム部門・PMOへ。腰を据えて働きやすく、ワークライフバランスを取りやすい道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>専門コンサルへ広げる</h3><p className="text-sm text-text-light">SAP／業務改善／経営コンサルなど。専門領域を深め、希少性と単価を高めていく道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#7c3a55" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>独立・フリーランス</h3><p className="text-sm text-text-light">SAP・PMOなどでフリーコンサルへ。月単価120万〜180万円の高単価・リモート案件でライフステージに合わせて働く道。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>ITコンサルは情報の非対称性が大きい業界。案件の中身を理解したIT特化型と、働き方を相談できる女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。DX・PMO・SAPなど案件の中身を理解したアドバイザーが、エンジニアからのキャリアチェンジを上流志向で提案してくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。コンサル・PMO案件のマッチングと年収交渉力に定評があり、職位連動の年収レンジを踏まえた提案が受けられます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。コンサルの稼働実態や復帰率など、求人票に出ない働き方の情報を確認したい人に最適です。</p>
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
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・SE→ITコンサル）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SIerの上流SE（要件定義担当）/ 年収520万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">総合系ファームのITコンサル（DX）/ 年収720万円・リモート常駐</p></div>
              </div>
              <p className="text-sm text-text-light">要件定義とベンダー管理の経験を職務経歴書で具体的に言語化し、IT特化型エージェントでケース面接を対策。論理的思考力を示せた結果、年収200万円アップで上流コンサルへ転身しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（30代後半・インフラエンジニア→SAPコンサル）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">事業会社のインフラエンジニア / 年収550万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SAP導入コンサル / 年収780万円・産休育休後に時短復帰</p></div>
              </div>
              <p className="text-sm text-text-light">SAP認定コンサルタント資格を取得し、2027年問題で需要の高いERP導入領域へ。専門性を武器に高年収を実現し、産休育休の実績がある環境で時短勤務に復帰。長く働ける基盤を得ました。</p>
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
            <a href="/articles/pm-director/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>PM・ディレクター転職ガイド</h3><p className="text-sm text-text-light">エンジニアの次のキャリアの選択肢</p></a>
            <a href="/articles/sier-industry/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>SIer業界の転職ガイド</h3><p className="text-sm text-text-light">上流志向のキャリアと相性が良い業界</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアのキャリアパス</h3><p className="text-sm text-text-light">長く活躍するための進路の描き方</p></a>
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
