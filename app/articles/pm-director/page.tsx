import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性PM・Webディレクター転職ガイド｜年収・エンジニアからのキャリアパス【2026年】",
  description:
    "女性PM・PdM・Webディレクターの転職ガイド。プロジェクトマネジャーの平均年収707万円（doda2025・IT技術職1位）、PdM約774万円、Webディレクター約495万円など実データで3職種の違い・エンジニアからの移行ルート・必要スキル（PMP）・ライフイベント両立の実態を解説します。",
  alternates: { canonical: "/articles/pm-director/" },
  openGraph: {
    title: "女性PM・Webディレクター転職ガイド｜年収・エンジニアからのキャリアパス【2026年】",
    description:
      "PM平均年収707万円（doda2025）・PdM約774万円・Webディレクター約495万円。3職種の違いとエンジニアからの移行ルート、両立の実態を実データで解説。",
    url: "https://women-engineer.com/articles/pm-director/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性PM・Webディレクター転職ガイド｜年収・エンジニアからのキャリアパス【2026年】",
  datePublished: "2026-04-27",
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
    "女性PM・PdM・Webディレクターの年収・3職種の違い・エンジニアからの移行ルート・必要スキルとPMP資格・ライフイベント両立の実態を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/pm-director/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "PM（プロジェクトマネジャー）の平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "doda「平均年収ランキング2025」によると、プロジェクトマネジャーの平均年収は707万円で、IT/通信系技術職の中で1位です。同調査のITエンジニア全体の平均469万円・正社員全体の平均429万円を大きく上回ります。求人ボックスの集計でも約692万円と高水準です。マネジメント経験を積み大規模案件を担当できるようになると、年収800万〜1,000万円も現実的なレンジになります。",
      },
    },
    {
      "@type": "Question",
      name: "PMとPdM（プロダクトマネージャー）はどう違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PM（プロジェクトマネジャー）は決められたゴールに向けてプロジェクトを品質・コスト・納期どおりに完遂させる役割、PdM（プロダクトマネージャー）は「何を作るべきか」というプロダクトの戦略・価値そのものに責任を持つ役割です。PMは計画とリスク管理・進行が中心、PdMはユーザー理解・仮説検証・事業KPIが中心になります。年収はPdMのほうが高い傾向で、求人ボックス集計では約774万円とされています。",
      },
    },
    {
      "@type": "Question",
      name: "エンジニア経験がなくてもPM・Webディレクターになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。特にWebディレクターは制作進行管理が中心で、デザイナー・ライター・営業など非エンジニア出身者も多く、未経験から挑戦しやすい入口です。一方、システム開発のPMは技術的な判断や工数見積もりが求められるため、エンジニア経験者が圧倒的に有利です。エンジニア経験がない場合は、Webディレクター→大規模案件のディレクション→PMという段階的なルートが現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "PM・ディレクター職は育児と両立できますか？リモートワークは可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "両立している女性は増えています。会議や調整が多い職種ですが、オンライン会議とドキュメント共有が普及したことでリモートでの進行管理は一般的になり、フルリモートや時短のPM・ディレクター求人も存在します。ただしリリース直前やトラブル時に負荷が集中しやすいため、チームに権限委譲できる体制か、代理を立てられる文化かを事前に確認することが重要です。エージェント経由で残業実態や時短勤務者の在籍実績を聞くのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "PMP資格は取得すべきですか？費用はどのくらいかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PMP（Project Management Professional）は米国PMIが認定する国際資格で、PM転職での評価は高めです。受験には35時間以上の公式なPM研修の修了と、実務経験（4年制大学卒で36カ月以上、高卒等で60カ月以上のプロジェクトリーダー経験）が必要です。受験料はPMI会員405米ドル・非会員555米ドルで、研修費用も別途かかります。必須ではありませんが、実務経験を体系的な知識で裏付けたい人、大手SIerやコンサル系を狙う人には投資価値があります。",
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
              { label: "PM・Webディレクター転職ガイド" },
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
              女性PM・Webディレクター転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収・PdMとの違い・エンジニアからのキャリアパスを実データで解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>この記事の結論</h2>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・<strong>プロジェクトマネジャー（PM）の平均年収は707万円</strong>。doda「平均年収ランキング2025」でIT/通信系技術職の<strong>1位</strong>（ITエンジニア全体平均469万円）</li>
              <li>・<strong>PdM（プロダクトマネージャー）は約774万円</strong>とさらに高水準。<strong>Webディレクターは約495万円</strong>で、未経験からの入口になりやすい</li>
              <li>・エンジニア→リーダー→PMが王道ルート。<strong>技術がわかるPMは希少</strong>で、開発経験はそのまま強みになる</li>
              <li>・調整中心の仕事はオンライン会議の普及でリモートと両立可能に。ただし<strong>締切前の負荷集中</strong>への備え（権限委譲できる体制か）は要確認</li>
              <li>・迷ったら、技術を深めるか管理へ進むかの比較は<a href="/articles/long-career-tips/" className="underline" style={{ color: "#7c3a55" }}>長く働くためのキャリア戦略</a>も参考に</li>
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. PM・PdM・Webディレクターの違い（整理表）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 年収相場（職種別・出典付き）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. エンジニアからPMへの移行ルート</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 必要なスキルと資格（PMP）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 調整業務とライフイベント両立の実態</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 求人動向と将来性</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. PM転職で評価されるポイント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. PM・ディレクターのその先のキャリア</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 3職種の違い */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">PM・PdM・Webディレクターの違い（整理表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「マネジメント系の職種」とひとくくりにされがちですが、PM（プロジェクトマネジャー）・PdM（プロダクトマネージャー）・Webディレクターは、責任を持つ対象がまったく異なります。転職活動で職種を取り違えるとミスマッチの原因になるため、最初に整理しておきましょう。
            </p>
            <p>
              ひとことで言うと、<strong>PMは「決まったゴールに正しく到達させる人」</strong>、<strong>PdMは「どこをゴールにすべきか決める人」</strong>、<strong>Webディレクターは「Web制作・運用の現場を回す人」</strong>です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>PM（プロジェクトマネジャー）</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>PdM（プロダクトマネージャー）</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>Webディレクター</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>責任の対象</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>プロジェクトのQCD（品質・コスト・納期）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>プロダクトの価値・事業成果（KPI）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Webサイト・コンテンツの品質と進行</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>主な仕事</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>計画立案・工数見積もり・進捗/リスク管理・顧客折衝</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ユーザー調査・ロードマップ策定・優先順位の意思決定</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>要件整理・制作チームの進行管理・品質チェック</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>平均年収の目安</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>707万円（doda 2025）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約774万円（求人ボックス集計）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約495万円（求人ボックス）</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>向いている人</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>段取り・リスク察知・関係者調整が得意な人</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>データと仮説検証が好きで「何を作るか」を考えたい人</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>マルチタスクが得意で制作物のクオリティにこだわれる人</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>未経験からの入りやすさ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>低（開発・リーダー経験が前提になりやすい）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>低（エンジニア/PM/マーケ等からの転向が中心）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>中（アシスタントディレクターから入る道がある）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3">
            出典: doda「平均年収ランキング2025」（パーソルキャリア、2026年6月参照）／求人ボックス 給料ナビ（2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec2 年収 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">年収相場（職種別・出典付き）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              doda「平均年収ランキング2025」（2024年9月〜2025年8月の登録者約60万人を集計）によると、<strong>プロジェクトマネジャーの平均年収は707万円で、IT/通信系技術職の1位</strong>です。ITエンジニア全体の平均469万円・正社員全体の平均429万円と比べても、マネジメント職の市場価値の高さが際立ちます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>職種</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均年収</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>出典・備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>プロジェクトマネジャー（PM）</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>707万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>doda 2025。IT/通信系技術職1位。求人ボックス集計では約692万円</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>プロダクトマネージャー（PdM）</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>約774万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>求人ボックス集計。業界調査では年収600万〜899万円が約46%のボリュームゾーン、1,000万円以上も2割超</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Webディレクター</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>約495万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>求人ボックス。年収幅は303万〜917万円と広く、経験で大きく伸びる</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>（参考）ITエンジニア全体</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>469万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>doda 2025。IT/通信系技術職全体の平均</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>（参考）正社員全体</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>429万円</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>doda 2025。3年連続で上昇し過去8年間の最高値</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3">
            出典: doda「平均年収ランキング2025」（パーソルキャリア、2026年6月参照）／求人ボックス 給料ナビ（2026年6月参照）／PM Career「日本のプロダクトマネージャー年収2025最新統計」・日本で働くプロダクトマネージャー大規模調査（2026年6月参照）
          </p>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収データの読み方</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>PMはIT技術職の年収トップ</strong>。エンジニアからの転向は年収アップの王道ルート（職種別の比較は<a href="/articles/salary-by-job/" className="underline" style={{ color: "#7c3a55" }}>職種別年収ランキング</a>を参照）</li>
              <li>② <strong>PdMはさらに上振れしやすい</strong>。シニアPdMや外資系SaaSでは1,000万円超も珍しくなく、<a href="/articles/salary-1000man/" className="underline" style={{ color: "#7c3a55" }}>年収1,000万円への道</a>に最も近い職種のひとつ</li>
              <li>③ <strong>Webディレクターは入口の年収こそ控えめ</strong>だが、大規模案件・プロデューサー職へ進めば700万円以上も狙える</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec3 移行ルート */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">エンジニアからPMへの移行ルート</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              PMへの最も一般的なルートは、<strong>エンジニア → チームリーダー/PL → PM</strong>という段階的なステップです。工数見積もりの妥当性を判断できる、技術的リスクを早期に察知できる、エンジニアと共通言語で話せる――技術がわかるPMは希少で、開発経験はそのまま市場価値になります。
            </p>
            <p>
              「マネジメントは技術から離れること」と捉えられがちですが、実際はコードレビューの視点が品質管理に、設計経験がリスク管理に活きる、技術の延長線上にあるキャリアです。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "現職でリーダー経験を積む", "小さくてOK。機能単位のリード、後輩のレビュー、顧客との仕様調整など「人と進行に責任を持った経験」を作る。これがPM転職の最重要素材になります。"],
              ["STEP2", "見積もり・計画に関わる", "工数見積もり、WBS作成、スケジュール調整に手を挙げる。開発者として「計画される側」から「計画する側」の視点を経験します。"],
              ["STEP3", "PM知識を体系化する", "PMBOKベースの知識（スコープ・リスク・ステークホルダー管理）を学習。資格ならPMPやプロジェクトマネージャ試験（IPA）が定番です。"],
              ["STEP4", "実績を言語化する", "「何人規模・何カ月・どんな困難をどう乗り越えたか」を数字で語れるように整理。面接ではトラブル対応の具体例が最も問われます。"],
              ["STEP5", "PM・PMO求人へ応募する", "いきなり大規模PMでなく、小規模案件のPMやPMO（PM支援）からの入り口も有効。IT特化型エージェントでマネジメント志向を伝えると選択肢が広がります。"],
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
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>PdM・Webディレクターへのルート</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・<strong>PdMへ</strong>: エンジニア/PMからの転向が中心。自社プロダクト企業で開発しながらユーザー要望の優先順位付けに関わるのが近道。データ分析・ユーザーインタビューの経験が評価されます。</li>
              <li>・<strong>Webディレクターへ</strong>: 制作会社・事業会社のアシスタントディレクターから入る道があり、3職種の中では未経験からの間口が最も広い職種。フロントエンドやデザインの素養があると重宝されます。</li>
              <li>・社内での昇進ルート（EM・管理職）と迷う場合は<a href="/articles/women-manager/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアの管理職キャリアガイド</a>を、より上流のコンサル職は<a href="/articles/it-consultant/" className="underline" style={{ color: "#7c3a55" }}>女性ITコンサルタント転職ガイド</a>を参照してください。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec4 スキルと資格 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルと資格（PMP）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              PM・ディレクター職の核は「人と計画を動かす力」です。技術的な専門知識に加えて、次のスキルが評価されます。
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
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>計画・進行管理</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>WBS・工数見積もり・スケジュール管理・アジャイル/スクラム</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>PMの中核。アジャイル経験はWeb系で特に評価が高い</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ステークホルダー調整</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>顧客折衝・社内調整・合意形成・交渉</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>利害が対立する関係者の落とし所を作る力。面接で具体例を問われる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>リスク・品質管理</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>リスクの早期検知・課題管理・品質基準の設定</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>エンジニア出身者の強みが最も活きる領域</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ドキュメント・可視化</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>要件定義書・議事録・進捗レポート・ダッシュボード</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>リモート時代のPMは「書いて伝える力」が生命線</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データ・事業理解（PdM寄り）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>KPI設計・SQL/BIツール・ユーザーインタビュー</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>PdMを目指すなら必須。PMからの差別化要素</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>代表的な資格: PMPとプロジェクトマネージャ試験</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・<strong>PMP（Project Management Professional）</strong>: 米国PMI認定の国際資格。受験には35時間以上の公式PM研修の修了＋実務経験（4年制大学卒で36カ月以上、高卒等で60カ月以上のプロジェクトリーダー経験）が必要。受験料はPMI会員405米ドル・非会員555米ドル。2026年7月9日から新試験に改訂予定です。</li>
              <li>・<strong>プロジェクトマネージャ試験（IPA）</strong>: 情報処理技術者試験の高度区分。国内SIer・大手企業での評価が高く、受験料7,500円と費用を抑えられます。</li>
              <li>・資格は「実務経験の裏付け」であり、資格単体でPMになれるわけではない点に注意。リーダー経験とセットで初めて効果を発揮します。</li>
            </ul>
            <p className="text-xs text-text-light mt-3">出典: PMI公式サイト・PMP試験要項（2026年6月参照）／IPA 情報処理技術者試験（2026年6月参照）</p>
          </div>
        </div>
      </section>

      {/* sec5 両立の実態 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">調整業務とライフイベント両立の実態</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「会議と調整だらけのPMは育児と両立できないのでは」という不安はよく聞かれます。実態は<strong>「リモートとの相性は良いが、負荷の波への備えが必要」</strong>です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>両立しやすい要素</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・進行管理・会議・レビューはオンラインで完結しやすく、<strong>フルリモートのPM/ディレクター求人も一般化</strong></li>
                <li>・成果が「プロジェクトの完遂」で明確に測れるため、勤務時間の長さではなく結果で評価されやすい</li>
                <li>・ドキュメント文化が根付いた組織なら、時短勤務でも情報格差が生まれにくい</li>
                <li>・調整力・傾聴力・マルチタスクなど、これまで培った折衝経験がそのまま強みになる</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>注意すべき要素と対策</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・リリース直前・トラブル時に<strong>負荷が集中</strong>しやすい → 副PM/PMOを置く体制か、権限委譲の文化があるかを確認</li>
                <li>・顧客都合で夕方以降の会議が入る案件もある → 客先常駐型か自社内開発かで働き方が大きく変わる</li>
                <li>・「自分が止まるとプロジェクトが止まる」プレッシャー → 時短PM・復帰PMの在籍実績がある会社を選ぶ</li>
                <li>・求人票では実態がわからない → エージェント経由で残業実態・急な休みへの対応事例を確認</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            産休・育休後の復帰やブランクからの再開を含めた長期戦略は<a href="/articles/long-career-tips/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアが長く働くためのキャリア戦略</a>で詳しく解説しています。
          </p>
        </div>
      </section>

      {/* sec6 求人動向 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向と将来性</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IPA「DX動向2025」によると、<strong>日本企業の85.1%がDXを推進する人材の不足</strong>を訴えており、米国（23.8%）・ドイツ（44.6%）と比べても突出しています。DXプロジェクトの成否を握るのはまさにPM・PdMであり、プロジェクトを完遂まで導ける人材の需要は構造的に高い状態が続いています。
            </p>
            <p>
              また、AIによるコード生成が普及するほど、「何を作るか決める」「人と計画を動かす」というマネジメント側の仕事は代替されにくく、相対的な価値が上がるという見方が一般的です。エンジニア経験にマネジメントを掛け合わせるキャリアは、2026年以降も有力な選択肢といえます。
            </p>
            <p className="text-xs">
              出典: IPA「DX動向2025」（2026年6月参照）
            </p>
          </div>
        </div>
      </section>

      {/* sec7 評価されるポイント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">PM転職で評価されるポイント</h2>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>1. 規模と役割を数字で語れること</h3>
              <p className="text-sm text-text-light">「何人チームを・何カ月・どの工程で」率いたか。小規模でも、責任範囲が明確な経験は高く評価されます。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>2. トラブル対応の具体例</h3>
              <p className="text-sm text-text-light">遅延・仕様変更・メンバー離脱にどう対処したか。面接で最も深掘りされる定番の質問です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>3. 技術がわかること</h3>
              <p className="text-sm text-text-light">見積もりの妥当性判断・技術的リスクの察知は、エンジニア出身PMの最大の差別化要素です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>4. 体系的な知識（PMP等）</h3>
              <p className="text-sm text-text-light">経験を PMBOK などの共通言語で説明できると、未知の案件への再現性を示せます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
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

      {/* sec9 その先のキャリア */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">PM・ディレクターのその先のキャリア</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>PM・ディレクター経験は応用範囲が広く、その先の選択肢が豊富です。代表的な進路は次の4つです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>大規模PM・PMO</h3>
              <p className="text-sm text-text-light">より大きな予算・人数のプロジェクトへ。大手SIerや事業会社のPMO組織で、年収800万〜1,000万円台を狙う道。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>PdM・プロダクト責任者</h3>
              <p className="text-sm text-text-light">「作り方」から「何を作るか」へ軸足を移す道。CPO・VPoPなどプロダクト組織の責任者は<a href="/articles/salary-1000man/" className="underline" style={{ color: "#7c3a55" }}>年収1,000万円超</a>も視野に入ります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>管理職（EM・部門長）</h3>
              <p className="text-sm text-text-light">プロジェクト単位から組織のマネジメントへ。詳しくは<a href="/articles/women-manager/" className="underline" style={{ color: "#7c3a55" }}>女性エンジニアの管理職キャリアガイド</a>を参照。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>ITコンサルタント</h3>
              <p className="text-sm text-text-light">PM経験はコンサル転職の有力な武器。より上流の戦略・構想策定へ進む道は<a href="/articles/it-consultant/" className="underline" style={{ color: "#7c3a55" }}>女性ITコンサルタント転職ガイド</a>で解説しています。</p>
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
            <a href="/articles/women-manager/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの管理職キャリア</h3>
              <p className="text-sm text-text-light">EM・部門長への昇進ルートと年収</p>
            </a>
            <a href="/articles/it-consultant/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性ITコンサルタント転職ガイド</h3>
              <p className="text-sm text-text-light">PM経験が活きる上流キャリア</p>
            </a>
            <a href="/articles/salary-by-job/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>IT職種別の年収ランキング</h3>
              <p className="text-sm text-text-light">PM・PdMは何位？職種別に比較</p>
            </a>
            <a href="/articles/salary-1000man/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>年収1,000万円への道</h3><p className="text-sm text-text-light">マネジメント職で目指す高年収</p>
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
