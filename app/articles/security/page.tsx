import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性セキュリティエンジニア転職ガイド｜年収・資格・未経験からの道",
  description:
    "女性セキュリティエンジニアの転職ガイド。平均年収（20代後半445万〜40代620万・全体600万前後）や脆弱性診断・SOC・CSIRTなどの仕事内容、情報処理安全確保支援士やCISSPなど必要資格、未経験ロードマップ、需要・将来性、キャリアパスを実データで解説。長く働きやすい理由とおすすめ転職エージェントも紹介します。",
  alternates: { canonical: "/articles/security/" },
  openGraph: {
    title: "女性セキュリティエンジニア転職ガイド｜年収・資格・未経験からの道",
    description:
      "女性セキュリティエンジニアの年収・必要資格・未経験からのロードマップ・需要・キャリアパスを実データで徹底解説。",
    url: "https://women-engineer.com/articles/security/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性セキュリティエンジニア転職ガイド｜年収・資格・未経験からの道",
  datePublished: "2026-06-10",
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
    "女性セキュリティエンジニアの年収・必要資格・未経験からのロードマップ・需要・キャリアパスを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/security/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性セキュリティエンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "セキュリティエンジニア全体の平均年収はおよそ600万円前後で、ITエンジニアの中でも高めの水準です。年代別では20代後半で約445万円、30代で約530万円、40代で約620万円が目安。さらにセキュリティマネージャーやCISO（最高情報セキュリティ責任者）クラスでは1,000万円超も狙えます。フリーランスでは月単価の平均が約66万円（年収換算790万円前後）で、PE-BANKの案件は月70万〜120万円、ペネトレーションテストなど高度な案件では月150万〜200万円に達するものもあります。給与はスキルと資格で決まる職種で、性別差は実力で埋められます。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもセキュリティエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "セキュリティエンジニアは「ITエンジニアの上級職」とされ、完全未経験から直接なるのは難しい職種です。王道は、まずネットワーク・サーバーの基礎（TCP/IP・DNS・Linux）を学びCCNAやLPIC-1を取得 → インフラ／サーバーエンジニアとして2〜3年経験を積む → 情報セキュリティマネジメント試験や情報処理安全確保支援士を取得 → SOC（監視）や脆弱性診断のポジションでセキュリティ実務に入る、というステップです。事務職やヘルプデスクからでも、ネットワーク経験を経由すれば十分に目指せます。需要が大きく人材不足のため、未経験可のSOCアナリスト求人も増えています。",
      },
    },
    {
      "@type": "Question",
      name: "セキュリティエンジニアに資格は必須ですか？どの資格がおすすめ？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "資格は必須ではありませんが、専門性を客観的に示せるため転職と年収アップに有効です。入門は国家資格のITパスポート・情報セキュリティマネジメント試験、中核は情報処理安全確保支援士（登録セキスペ・合格率15〜20％の難関国家資格）。グローバルや高年収を狙うなら国際資格のCISSP、攻撃技術ならCEH（認定ホワイトハッカー）やCompTIA Security+も評価されます。経済産業省は登録セキスペを2030年までに5万人へ増やす目標を掲げており、有資格者の需要は今後さらに高まる見込みです。",
      },
    },
    {
      "@type": "Question",
      name: "セキュリティエンジニアは産休・育休後も女性が働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすい要素が多い職種です。脆弱性診断やコンサル、設計・監査などはリモートと相性がよく、フルリモートや在宅中心の求人も豊富。専門性が高く替えが効きにくいため、産休育休でブランクが空いても復帰しやすく、時短勤務でも専門職として評価されやすいのが特徴です。ただしSOCの24時間監視のように交代制シフトの現場もあるため、働き方は事前確認が必須。産休育休の取得実績や復帰率、夜勤の有無は、女性のキャリアに詳しいエージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "セキュリティ転職におすすめの転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "技術と資格を正当に評価してもらうならIT特化型のレバテックキャリアやGeekly、女性のキャリア継続を重視するならtype女性の転職エージェントがおすすめです。IT特化型はセキュリティの技術領域（SOC・診断・CSIRT）を理解したアドバイザーが多く、高年収帯の非公開求人や年収交渉に強みがあります。女性特化型は産休育休・リモート・夜勤なしなど働き方の条件で求人を絞り込めます。専門性が高い職種ほど提案の質に差が出るため、2〜3社の併用がベストです。",
      },
    },
    {
      "@type": "Question",
      name: "夜勤なしでセキュリティエンジニアとして働けますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。セキュリティの中でもSOC（24時間監視）は交代制シフトの現場が多い一方、脆弱性診断・セキュリティコンサルティング・設計・監査・ガバナンス系の業務は一般に日中中心で、夜勤のない働き方を選びやすい領域です。キャリアの入り口としてSOCを経験する場合も、日勤中心のポジションを選ぶ、数年後に診断・設計へ移る前提でキャリアを組むといった方法があります。応募時には、シフトの有無に加えて、インシデント発生時の緊急呼び出し体制（当番制か・頻度はどの程度か）も確認しておきましょう。",
      },
    },
    {
      "@type": "Question",
      name: "出産・育児のブランクがあってもセキュリティ分野に復帰できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "復帰しやすい要素が多い職種です。土台となるネットワーク・認証・リスク評価の考え方は陳腐化しにくく、情報処理安全確保支援士（登録セキスペ）などの資格はブランク後も専門性の客観的な証明として機能します。登録セキスペには継続講習の制度があり、知識を更新しながら資格を維持できます。一方で攻撃手法や脆弱性情報は日々更新されるため、復帰前にセキュリティニュースや脆弱性情報のキャッチアップ期間を設けると安心です。人材不足が続く分野のため、経験者の復帰は一般に歓迎されやすい状況です。",
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
              { label: "セキュリティエンジニア転職ガイド" },
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
              女性セキュリティエンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収・必要資格・未経験からの道のりを実データで解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月9日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. セキュリティエンジニアとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 女性がセキュリティで長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 必要なスキルと資格</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. セキュリティの年収相場（年代別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験から目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. セキュリティのキャリアパス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
              <li><a href="#sec11" className="hover:underline" style={{ color: "#7c3a55" }}>11. 女性がセキュリティエンジニアとして働くリアル</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">セキュリティエンジニアとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              セキュリティエンジニアは、システムやネットワークをサイバー攻撃・情報漏えいから守る専門職です。攻撃に強い仕組みを設計し、24時間体制で監視し、インシデント（事故）が起きれば調査・復旧まで担当します。攻撃手法を熟知したうえで「守る側」に立つ、ITエンジニアの中でも専門性の高い上級職と位置づけられます。
            </p>
            <p>
              業務は大きく、(1)<strong>セキュリティ設計・構築</strong>（認証基盤・アクセス管理・SIEMなど監視システムの設計）、(2)<strong>運用・監視（SOC）</strong>（ログ監視・アラート対応）、(3)<strong>インシデント対応（CSIRT）</strong>（攻撃発生時の調査・封じ込め・復旧・フォレンジック）、(4)<strong>脆弱性診断・ペネトレーションテスト</strong>（実際の攻撃者と同じ手法で弱点を洗い出す）に分かれます。
            </p>
            <p>
              フロントエンドやバックエンドが「サービスを作る」のに対し、セキュリティは「作られたものを守り、攻撃に備える」役割です。攻撃手法やリスク評価の知識は陳腐化しにくく、専門性が積み上がるほど替えの効かない人材になれる――それがこの職種の最大の魅力です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>セキュリティエンジニアの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>セキュリティ設計・構築（認証・アクセス管理・SIEM／ログ基盤）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>SOC運用（監視・ログ分析・アラート対応）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>CSIRT・インシデント対応（調査・封じ込め・復旧・フォレンジック）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>脆弱性診断（スキャンツール＋手動検査）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ペネトレーションテスト（実攻撃を模した侵入検証）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>セキュアコーディング・脅威インテリジェンス分析</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がセキュリティで長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度ですが、セキュリティは深刻な人材不足（国内で約11万人不足の民間調査も）が続く売り手市場。だからこそ女性が条件を選びやすく、専門性で長く戦える職種です。次の4つが「長く働きやすい」理由です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 専門性が高く替えが効きにくい</h3>
              <p className="text-text-light text-sm leading-relaxed">脆弱性診断・診断レポート・リスク評価などの専門スキルは習得者が限られ、需要過多。希少人材になれるため、ライフイベントを挟んでも市場価値が落ちにくく、復帰交渉も有利です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. リモートと相性が良い領域が多い</h3>
              <p className="text-text-light text-sm leading-relaxed">脆弱性診断・セキュリティコンサル・設計・監査はオンライン完結しやすく、フルリモート求人も豊富。通勤負担を抑えつつ育児・介護と両立しやすい働き方が選べます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 資格でスキルを可視化でき時短でも評価</h3>
              <p className="text-text-light text-sm leading-relaxed">情報処理安全確保支援士やCISSPなど資格で専門性を客観的に示せるため、勤務時間の長さではなく専門職として評価されやすく、時短勤務でも実力が認められます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 年収水準が高く将来性も安定</h3>
              <p className="text-text-light text-sm leading-relaxed">平均年収はITエンジニアの中でも高め（全体約600万円前後）。国内セキュリティ市場は2027年まで年平均7.2％成長見込みで、長く稼げる安定したキャリアを築けます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 スキルと資格 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルと資格</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              セキュリティは<strong>ネットワーク・サーバーの基礎</strong>の上に専門知識を積む職種です。資格は必須ではありませんが、専門性を客観的に示せるため転職・年収アップに直結します。まず土台のインフラ知識を固め、その上にセキュリティの資格・実務を重ねるのが王道です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>スキル・資格</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>具体例</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ネットワーク基礎</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>TCP/IP・DNS・サブネット / CCNA</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>すべての土台。攻撃も防御も通信の理解が前提</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>サーバー・OS</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Linuxコマンド / LPIC-1</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ログ調査・脆弱性対応にLinux必須</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>入門資格（国家）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ITパスポート / 情報セキュリティマネジメント試験</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>未経験者の最初の一歩に最適</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>中核資格（国家）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>情報処理安全確保支援士（登録セキスペ）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>合格率15〜20％の難関。国内最高峰の信頼度</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>上級・国際資格</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>CISSP / CEH / CompTIA Security+</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>CISSPは実務経験必須・グローバル評価。高年収・海外向け</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            2026年時点では、<strong>クラウドセキュリティ</strong>・<strong>インシデントレスポンス／フォレンジック</strong>・<strong>脅威インテリジェンス分析</strong>・<strong>AIセキュリティ</strong>でスキルギャップが大きく、これらを扱えると希少価値が一気に上がります。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">セキュリティの年収相場（年代別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              セキュリティエンジニア全体の平均年収はおよそ<strong>600万円前後</strong>で、ITエンジニアの中でも高めの水準です。経験・資格・専門領域で差が大きく、20代と40代では約400万円近い差がつくことも。下表は各種調査をもとにした目安です（企業・地域・スキルにより変動します）。
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
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代前半</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約339万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>SOC・運用からのスタートが中心</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代後半</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約445万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>診断・設計など実務の幅が広がる</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約530万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>上流工程・要件定義・マネジメントに参画</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約620万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Geekly自社データでは40代で865万円の例も</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>管理職・CISO</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1,000万円超</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>マネジメント＋経営視点で到達可能</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月単価 約66万円〜</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>年収換算790万円前後。診断系は月70〜120万円、高度案件は150〜200万円も</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>難関資格を取る</strong>（情報処理安全確保支援士・CISSPで専門性を証明）</li>
              <li>② <strong>希少領域に踏み込む</strong>（クラウドセキュリティ・フォレンジック・ペネトレーションテスト）</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。非公開の高年収求人を紹介してもらう</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 求人動向・将来性 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向と将来性</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              サイバー攻撃の高度化とDX推進で、セキュリティ人材の不足は深刻化しています。民間調査では国内で約11万人が不足するとされ、経済産業省も2025年5月の「サイバーセキュリティ人材の育成促進に向けた検討会 最終取りまとめ」で、情報処理安全確保支援士（登録セキスペ）を2030年までに5万人へ増やす目標を掲げました（2025年4月時点で約2.4万人）。需要が供給を大きく上回る、希少性の高い職種です。
            </p>
            <p>
              IDC Japanの調査では、国内セキュリティ市場は<strong>2027年まで年平均7.2％成長</strong>する見込み。特に<strong>クラウドセキュリティ</strong>・<strong>インシデントレスポンス／フォレンジック</strong>・<strong>脅威インテリジェンス分析</strong>・<strong>AIセキュリティ</strong>でスキルギャップが大きく、これらを担える人材は今後さらに重宝されます。AIが進化しても「リスク判断と最終対応」は人が担う領域で、長期的な将来性は非常に高い職種です。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 未経験ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>セキュリティは上級職のため、いきなりではなく<strong>インフラ経由</strong>が王道。基礎固めに半年〜1年、インフラ実務に2〜3年が一つの目安です。次の順序で進めると挫折しにくいです。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "ネットワーク・サーバーの基礎を学ぶ", "TCP/IP・DNS・サブネット・Linuxコマンドを習得。攻撃も防御も通信とOSの理解が前提になります。"],
              ["STEP2", "入門資格を取得する", "ITパスポート・情報セキュリティマネジメント試験（国家資格）で基礎を体系化。未経験の最初の一歩に最適です。"],
              ["STEP3", "インフラ／サーバーエンジニアとして経験を積む", "CCNAやLPIC-1を取り、まずインフラ職へ転職。2〜3年の実務がセキュリティへの最短の橋渡しになります。"],
              ["STEP4", "情報処理安全確保支援士に挑戦", "国内最高峰の国家資格（合格率15〜20％）。取得できれば一気にセキュリティ転職の説得力が増します。"],
              ["STEP5", "SOC・脆弱性診断でセキュリティ実務へ", "監視（SOC）や診断のポジションでセキュリティ実務をスタート。未経験可のSOCアナリスト求人も増えています。"],
              ["STEP6", "専門領域を深める／上級資格へ", "クラウドセキュリティ・フォレンジックなど希少領域や、CISSP・CEHなど上級資格で市場価値を最大化します。"],
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
          <h2 className="text-2xl font-bold mb-6">セキュリティのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>セキュリティは専門性が積み上がるほど替えの効かない人材になれる職種で、進路の幅が広いのが魅力です。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>技術を極める</h3><p className="text-sm text-text-light">セキュリティアナリスト → ペネトレーションテスター（ホワイトハッカー）。高い技術力が評価され、高額案件では月200万円に届くことも。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>上流・経営へ</h3><p className="text-sm text-text-light">セキュリティマネージャー → CISO（最高情報セキュリティ責任者）。マネジメントと経営視点で年収1,000万円超を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>コンサル・支援へ</h3><p className="text-sm text-text-light">セキュリティコンサルタント／監査。企業のリスク評価・体制構築を支援。在宅・リモート中心の働き方も実現しやすい。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>独立・柔軟な働き方</h3><p className="text-sm text-text-light">フリーランスとして高単価の診断・コンサル案件へ。月70〜120万円規模も多く、ライフステージに合わせやすい。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>セキュリティの専門性・資格を正当に評価してもらうには、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。SOC・脆弱性診断・CSIRTなどセキュリティの技術領域を理解したアドバイザーが、資格・経験を正しく評価した提案をしてくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。セキュリティ職の年収データを自社で公開するほど職種理解が深く、スピーディーなマッチングと高年収帯の年収交渉力に定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモート、夜勤なしなど、女性のキャリア継続に配慮した求人を中心に紹介。SOCの交代制シフトを避けたい場合など、働き方の条件で絞り込みたい人に最適です。</p>
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
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Aさん（30代前半・インフラ→セキュリティ）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">SIerのインフラエンジニア / 年収480万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">セキュリティベンダーの脆弱性診断 / 年収640万円・リモート中心</p></div>
              </div>
              <p className="text-sm text-text-light">ネットワーク経験を土台に情報処理安全確保支援士を取得。IT特化型エージェントで診断経験者を求める企業を紹介してもらい、年収160万円アップとリモート中心の働き方を同時に実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Bさん（20代後半・ヘルプデスク→SOC）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">社内ヘルプデスク / 年収340万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">SOCアナリスト（自社運用）/ 年収450万円</p></div>
              </div>
              <p className="text-sm text-text-light">情報セキュリティマネジメント試験とCCNAを取得し、未経験可のSOCアナリストへ転職。日勤シフト中心で産休育休実績のある環境を女性特化型エージェントで見つけ、長く働ける基盤を得ました。</p>
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

      {/* sec11 女性が働くリアル（2026-07-09追記） */}
      <section id="sec11" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がセキュリティエンジニアとして働くリアル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              最後に、実際に女性がセキュリティエンジニアとして働くうえで気になりやすいポイントを、働き方の観点から補足します。年収や女性比率、職種別の需要などの具体的な数値は<a href="/articles/data/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアのデータ集</a>・<a href="/articles/salary-by-job/" className="underline" style={{ color: "#7c3a55" }}>職種別の年収ガイド</a>・<a href="/articles/demand/" className="underline" style={{ color: "#7c3a55" }}>需要の高いエンジニア職種</a>に出典付きでまとめています。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>職種との相性｜「資格が効く職種」はライフイベントに強い</h3>
              <p className="text-sm text-text-light leading-relaxed">セキュリティは需要の増加が続く一方で担い手が不足しており、資格と専門知識でスキルを客観的に示しやすい職種です。一般に、こうした「資格が効く職種」は、産休育休や転居などライフイベントを挟んでも市場価値を証明し直しやすい傾向があります。また業務のうち脆弱性診断・監査・コンサルティングはリモートと相性が良く、働く場所の制約が小さい領域を選べるのも特徴です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>産休育休・時短との相性｜知識が陳腐化しにくい土台を持てる</h3>
              <p className="text-sm text-text-light leading-relaxed">ネットワーク・認証・リスク評価・法令やガイドラインへの対応といったセキュリティの土台は変化が緩やかで、ブランクがあっても失われにくい資産です。情報処理安全確保支援士は継続講習で知識を更新しながら維持できる国家資格で、復帰時の証明として機能します。時短勤務でも「専門職として」評価されやすい構造は、長く働くうえで大きな支えになります。復帰の進め方は<a href="/articles/return-to-work/" className="underline" style={{ color: "#7c3a55" }}>仕事復帰ガイド</a>も参考にしてください。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>キャリアパス｜両立期は「時間が読める領域」を選べる</h3>
              <p className="text-sm text-text-light leading-relaxed">入り口は<a href="/articles/infrastructure/" className="underline" style={{ color: "#7c3a55" }}>インフラエンジニア</a>経由が王道ですが、セキュリティ内部でもキャリアの選び直しができます。一般に、監査・ガバナンス・コンサルティング系は計画的に進む業務が中心で勤務時間が読みやすい傾向があり、育児との両立期の選択肢になります。フルタイムで攻めたい時期は診断・インシデント対応で技術を深める、というように、同じ専門性の中で働き方の強弱を付けられるのがこの職種の強みです。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>現実的な注意点｜事前に確認しておきたい3つのこと</h3>
              <p className="text-sm text-text-light leading-relaxed">正直な注意点として、(1)SOC（監視）は24時間の交代制シフトの現場が多く、夜勤を避けたい場合はポジション選びが必須なこと、(2)インシデント対応は性質上、突発対応が発生し得ること（体制・当番制の有無を要確認）、(3)上級職ゆえに未経験からはインフラ経験を挟む数年単位の道のりになること、の3点は押さえておきましょう。働き方の実態は求人票に出にくいため、エージェント経由での確認が確実です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <p className="text-sm text-text-light leading-relaxed">夜勤なし・リモート・時短など働き方の条件を重視した転職では、エージェント選びが結果を左右します。<a href="/diagnosis/" className="underline font-bold" style={{ color: "#7c3a55" }}>無料のエージェント診断</a>で自分の状況に合うエージェントを確認し、<a href="/ranking/" className="underline font-bold" style={{ color: "#7c3a55" }}>おすすめエージェントランキング</a>と併せて活用してください。</p>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/infrastructure/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>インフラエンジニア転職ガイド</h3><p className="text-sm text-text-light">セキュリティ転職の土台になる職種</p></a>
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>エンジニアの資格ガイド</h3><p className="text-sm text-text-light">転職に役立つ資格を厳選紹介</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/demand/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>需要の高いエンジニア職種</h3><p className="text-sm text-text-light">将来性で選ぶキャリアの考え方</p></a>
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
