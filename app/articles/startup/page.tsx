import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "スタートアップで働く女性エンジニア｜年収・SO・フェーズ別の現実【2026年】",
  description:
    "スタートアップ転職を考える女性エンジニア向けの実データガイド。2025年の国内資金調達総額7,613億円（スピーダ調べ）の市況、フェーズ別（シード〜レイター）の給与・裁量・リスク、税制適格ストックオプションの仕組み（令和6年度改正対応）、産休育休が法定制度として小規模企業でも使える事実まで出典付きで解説します。",
  alternates: { canonical: "/articles/startup/" },
  openGraph: {
    title: "スタートアップで働く女性エンジニア｜年収・SO・フェーズ別の現実【2026年】",
    description:
      "国内スタートアップの資金調達動向、フェーズ別の働き方の違い、税制適格ストックオプションの正確な仕組み、産育休の法定制度まで実データ・出典付きで解説。",
    url: "https://women-engineer.com/articles/startup/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "スタートアップで働く女性エンジニア｜年収・SO・フェーズ別の現実【2026年】",
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
    "国内スタートアップの資金調達動向、フェーズ別の給与・裁量・リスク、税制適格ストックオプションの仕組み、産育休の法定制度を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/startup/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "スタートアップ転職で年収は下がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "フェーズによります。シード〜シリーズA初期は現金給与が前職より下がる（または同水準にとどまる）代わりにストックオプションを付与するオファーが中心です。一方、シリーズB以降〜レイターでは制度や報酬テーブルが整い、エンジニア平均（dodaの平均年収ランキング2025でIT/通信エンジニア469万円）を上回る提示も珍しくありません。基本給・SO・昇給スピード・福利厚生を分けて総報酬で比較し、生活に必要な額は現金給与だけで賄えるかを基準に判断するのが安全です。",
      },
    },
    {
      "@type": "Question",
      name: "ストックオプションをもらえば一攫千金を狙えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOはIPOやM&Aが成立して初めて価値が生まれる権利で、確実な報酬ではありません。会社が上場・売却に至らなければ行使機会がなく価値ゼロで終わることも普通にあります。また在籍年数に応じて段階的に権利が確定するベスティング条項や、退職時に失効する設計が一般的です。「上場すれば数千万円」という期待だけで現金給与の不足を受け入れるのは危険で、SOはあくまで成功時の上乗せと位置づけ、付与数・発行済株式数に対する割合・行使価額・退職時の扱いを契約書で確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "税制適格ストックオプションとは何ですか？非適格と何が違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "租税特別措置法の要件を満たしたSOで、権利行使時には課税されず、株式売却時にまとめて譲渡所得（税率約20%）として課税されます。非適格SOは行使時点の含み益に給与所得等として課税され（最大税率約55%）、売却前に納税が発生し得るのが大きな違いです。主な適格要件は、無償発行、付与決議から2年経過後〜10年以内の行使（設立5年未満の非上場会社は15年以内）、年間の権利行使価額の上限（令和6年度改正で設立5年未満は2,400万円、設立5年以上20年未満の非上場または上場5年未満の会社は3,600万円に引き上げ）などです（出典: 経済産業省）。",
      },
    },
    {
      "@type": "Question",
      name: "産休育休制度が就業規則にないスタートアップでも取得できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "取得できます。産前産後休業は労働基準法、育児休業は育児・介護休業法に基づく法律上の権利で、育児・介護休業法は企業規模や業種を問わずすべての事業主に適用され、中小企業の例外はありません。出産手当金（健康保険）や育児休業給付金（雇用保険）も加入していれば会社の規模に関係なく受け取れます。ただし「取れるか」と「取りやすいか」は別問題なので、取得実績・復帰者の有無・経営陣の姿勢・代替要員の考え方を面接や面談で確認することをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "スタートアップへの転職にはどのエージェントがおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Greenはスタートアップ・ベンチャー企業の求人が豊富で、カジュアル面談から始めやすいのが特徴です。IT特化型のレバテックキャリアやGeeklyもスタートアップ求人を多数保有し、技術スタックを理解した提案や年収交渉に強みがあります。産育休の取得実績やリモートの運用実態など、求人票に出ない情報を確認したい場合は、type女性の転職エージェントのような女性特化型の併用が有効です。フェーズや資金調達状況を踏まえた提案を受けるため、2〜3社の併用をおすすめします。",
      },
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer.com" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer.com/articles/" },
    { "@type": "ListItem", position: 3, name: "スタートアップで働く女性エンジニア", item: "https://women-engineer.com/articles/startup/" },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "スタートアップで働く女性エンジニア" },
            ]}
          />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>働き方</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              スタートアップで働く女性エンジニア
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収・ストックオプション・フェーズ別の現実【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>この記事の結論</h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>2025年の国内スタートアップ資金調達総額は7,613億円で前年ほぼ横ばい。</strong>ただし1社あたり調達額の中央値は6,240万円へ低下し、「調達できる会社」と「できない会社」の二極化が進行（スピーダ「Japan Startup Finance 2025」）。転職先の資金状況を見る目利きが以前より重要になっています。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>「スタートアップ」と一括りにせず、フェーズで判断する。</strong>シードとレイターでは給与水準・裁量・リスク・制度の整い度がまったく別物です。シリーズB以降は大手並みの給与提示も増えています。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>ストックオプションは宝くじではなく「条件付きの権利」。</strong>税制適格SOなら行使時非課税・売却時に約20%の譲渡課税で済みますが、IPO/M&Aに至らなければ価値ゼロ、退職で失効する設計が一般的です。付与割合・ベスティング・行使期限を契約書で必ず確認しましょう。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>産休・育休は会社の福利厚生ではなく法律上の権利。</strong>育児・介護休業法は企業規模を問わず全事業主に適用され、社員数人のスタートアップでも取得できます。確認すべきは「制度の有無」ではなく「取得実績と運用」です。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. 2026年のスタートアップ市場の現在地【実データ】</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. フェーズ別比較表（給与・裁量・リスク・制度）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. スタートアップの年収の現実</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. ストックオプション（SO）の仕組みを正確に</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 女性視点：産休育休と制度未整備の会社の見極め方</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 大手・Web系との比較と向き不向き</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 転職前に確認すべきポイント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. よくある質問</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. 出典・参考資料</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 市場の現在地 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">2026年のスタートアップ市場の現在地【実データ】</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              スタートアップ転職を考えるとき、最初に押さえるべきは「いまスタートアップにお金が集まっているのか」という市況です。給与もストックオプションの価値も、最終的には会社が資金を調達し成長できるかに依存するからです。
            </p>
            <p>
              スピーダ（ユーザベース）の「Japan Startup Finance 2025」によると、2025年の国内スタートアップ資金調達総額は<strong>7,613億円（デット除く・速報値）で、前年からほぼ横ばい</strong>でした。一方で中身は大きく変化しています。1社あたりの調達額は平均3.1億円と変わらないものの、<strong>中央値は前年の7,760万円から6,240万円へ低下</strong>。特定の有力企業に資金が集中し、それ以外は小粒化するという「選別」が進んでいます。
            </p>
            <p>
              EXIT（出口）面では、上場維持基準の見直しを背景に<strong>質の高いIPOへのシフト</strong>が進む一方、M&Aは件数ベースで高水準を維持しています。つまり「とりあえず上場」が難しくなり、SOの出口もIPO一辺倒からM&Aを含めた設計に変わりつつあります。
            </p>
            <p>
              働く側にとっての意味はシンプルです。<strong>勢いのあるスタートアップとそうでないスタートアップの差が開いており、「どの会社を選ぶか」の目利きが数年前より重要になった</strong>ということ。後述する資金調達状況の確認方法（<a href="#sec7" className="font-bold hover:underline" style={{ color: "#0891b2" }}>7章</a>）まで含めて判断材料にしてください。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d1dce5" }}>
              <p className="text-3xl font-bold" style={{ color: "#0891b2" }}>7,613億円</p>
              <p className="text-sm font-bold mt-2">2025年の国内資金調達総額</p>
              <p className="text-xs text-text-light mt-1">デット除く速報値。前年からほぼ横ばい</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d1dce5" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3aed" }}>6,240万円</p>
              <p className="text-sm font-bold mt-2">1社あたり調達額の中央値</p>
              <p className="text-xs text-text-light mt-1">前年7,760万円から低下。二極化が進行</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d1dce5" }}>
              <p className="text-3xl font-bold" style={{ color: "#0891b2" }}>3.1億円</p>
              <p className="text-sm font-bold mt-2">1社あたり調達額の平均</p>
              <p className="text-xs text-text-light mt-1">平均は維持＝大型調達が総額を下支え</p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: スピーダ（ユーザベース）「Japan Startup Finance 2025」（2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec2 フェーズ別比較 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">フェーズ別比較表（給与・裁量・リスク・制度）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「スタートアップ」と一括りに語られがちですが、<strong>シード期とレイター期の会社は、働く環境としてはほぼ別の業態</strong>です。資金調達のフェーズ（シード→シリーズA→B→C→レイター）が進むほど社員数・売上・制度が整い、その分だけ個人の裁量とSOの妙味は薄れていきます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>フェーズ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>給与水準</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>裁量</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>リスク</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>制度の整い度</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>シード〜シリーズA<br /><span className="font-normal text-xs">社員数人〜数十人</span></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>低め〜同水準。SO比重が大きい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>最大。技術選定から採用まで関与</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>高い。資金枯渇・事業転換あり</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>未整備が多い。就業規則も最低限</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>シリーズB〜C<br /><span className="font-normal text-xs">社員数十人〜百数十人</span></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>同水準〜高め。報酬テーブル整備が進む</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>大きいが役割分担が始まる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>中。次の調達・成長率に依存</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>人事・労務の専任が入り急速に整う</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>レイター〜上場準備<br /><span className="font-normal text-xs">社員百数十人〜</span></td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>大手並みの提示も。SOの妙味は減少</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>チーム単位。専門性で勝負</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>比較的低い。ただし上場延期リスク</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>上場審査対応でほぼ大手並みに整備</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>（参考）大手・上場企業</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>安定。昇給は緩やか</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>限定的。分業が前提</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>低い</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>整備済み。取得実績も豊富</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            ※フェーズの区分・社員数は一般的な目安で、企業により大きく異なります。
          </p>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>フェーズ選びの考え方</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>とにかく成長スピードと裁量が欲しい</strong> → シード〜シリーズA。ただし現金給与とリスクはシビアに見る</li>
              <li>② <strong>挑戦と生活の安定を両立したい</strong> → シリーズB〜C。制度整備とプロダクト成長が同時に体験できる「いいとこ取り」になりやすい</li>
              <li>③ <strong>ライフイベントが近い・安定重視</strong> → レイター〜上場準備、または<a href="/articles/web-industry/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>Web系の中堅以上</a>。制度の運用実績まで確認できる</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec3 年収の現実 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">スタートアップの年収の現実</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              比較の基準として、エンジニア（IT/通信）全体の平均年収は<strong>469万円</strong>（doda「平均年収ランキング2025」）です。スタートアップの報酬はこの基準に対して「現金給与＋SO」の組み合わせで構成され、フェーズによって配分が変わります。
            </p>
            <p>
              シード〜アーリー期は、現金給与を抑えてSOで報いる設計が中心です。役員クラスでも、スタートアップ専門エージェントのアンテロープは<strong>「シリーズAのCxOで800万〜1,000万円程度が中央値」</strong>としており、メンバークラスのエンジニアであれば前職同水準〜やや下がる提示も珍しくありません。一方、同社が引用する日本経済新聞の記事では<strong>創業10年未満の企業に転職した人の平均年収は720万円超</strong>とされており、「スタートアップ＝薄給」という旧来のイメージは、人材獲得競争が激しいエンジニア職では崩れつつあります。
            </p>
            <p>
              シリーズB以降になると報酬テーブル・等級制度が整備され、資金調達済みの会社は大手と同等以上の提示で人材を採りにきます。<strong>年収を上げる手段としてスタートアップを使うなら、「調達直後の成長企業×需要の高い技術スタック」の組み合わせ</strong>が現実的な狙い目です。年収1,000万円を目指すルート全体は<a href="/articles/salary-1000man/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>年収1,000万円を目指す方法</a>で整理しています。
            </p>
            <p>
              注意したいのは、スタートアップの年収レンジは公的統計が存在せず、エージェント各社の公表値や個別オファーに依存することです。<strong>「基本給」「賞与の有無」「SOの想定価値」を必ず分解して比較</strong>し、SOの想定価値は生活設計に組み込まない——これが失敗しない原則です。
            </p>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: doda（パーソルキャリア）「平均年収ランキング2025」、アンテロープ「スタートアップの給与水準について」（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec4 SOの仕組み */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ストックオプション（SO）の仕組みを正確に</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ストックオプションは、<strong>自社の株式をあらかじめ決められた価格（行使価額）で将来購入できる権利</strong>です。入社時の行使価額が1株1,000円で、上場後に株価が5,000円になっていれば、差額の4,000円×株数が利益になります。逆に会社がIPOやM&Aに至らなければ行使する機会自体がなく、<strong>価値はゼロのまま終わります</strong>。
            </p>
            <p>
              重要なのが税金の扱いです。SOには<strong>「税制適格」と「非適格」</strong>があり、手取りが大きく変わります。税制適格SO（租税特別措置法の要件を満たすもの）は<strong>権利行使時には課税されず、株式を売却した時点でまとめて譲渡所得（税率約20%）として課税</strong>されます。非適格SOは行使した時点の含み益が給与所得等として総合課税（最大税率約55%）の対象になり、株を売る前に納税資金が必要になるケースもあります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>税制適格SOの主な要件</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>内容（令和6年度税制改正反映）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>付与対象者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>自社・子会社の取締役・執行役・使用人（大口株主等を除く）。認定を受けた社外高度人材も対象</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>発行形態</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>無償で発行されること</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>権利行使期間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>付与決議日から2年経過後〜10年以内。<strong>設立5年未満の非上場会社は15年以内</strong>に延長</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>年間の権利行使価額の上限</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}><strong>設立5年未満: 2,400万円／設立5年以上20年未満の非上場会社または上場後5年未満の上場会社: 3,600万円</strong>／それ以外: 1,200万円（令和6年度改正で引き上げ）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>行使価額</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>契約締結時の1株あたり価額（時価）以上であること</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>譲渡・管理</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>他人への譲渡は禁止。取得株式は証券会社等への保管委託、または令和6年度改正で認められた<strong>発行会社自身による株式管理</strong>が必要</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 経済産業省「ストックオプション税制」、財務省「令和6年度税制改正」（いずれも2026年6月参照）
          </p>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>「一攫千金神話」に流されないためのチェック項目</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・<strong>付与数より「割合」</strong>：発行済株式数（潜在株式込み）に対して自分のSOが何%かを確認。割合が分からないと価値の試算すらできません</li>
              <li>・<strong>ベスティング条項</strong>：在籍1年で25%、その後毎月積み上げなど、権利確定のスケジュールを確認。入社直後の退職では何も残らない設計が一般的です</li>
              <li>・<strong>退職時の扱い</strong>：多くの設計では退職すると未確定分（場合によっては確定分も）が失効します。転職の自由度とトレードオフになる点は冷静に</li>
              <li>・<strong>行使期限と出口</strong>：付与決議から10年（設立5年未満の非上場は15年）の期限内にIPO/M&Aが起きなければ行使機会がないまま終わる可能性があります</li>
              <li>・<strong>SOは「成功時の上乗せ」</strong>：生活に必要な額は現金給与だけで賄えるオファーかどうかを判断基準にしましょう</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 女性視点 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性視点：産休育休と制度未整備の会社の見極め方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「小さい会社だと産休育休が取れないのでは」という不安をよく聞きますが、まず事実から。<strong>産前産後休業（労働基準法）と育児休業（育児・介護休業法）は法律上の権利で、育児・介護休業法は企業規模・業種を問わずすべての事業主に適用されます。中小企業の例外はありません</strong>。出産手当金（健康保険）・育児休業給付金（雇用保険）も、加入していれば社員数人のスタートアップでも受け取れます。就業規則に書かれていなくても、法定の要件を満たせば取得を拒否することはできません。
            </p>
            <p>
              さらに2025年4月施行の改正で、<strong>子の看護休暇は「子の看護等休暇」となり対象が小学校3年生修了まで拡大</strong>（学級閉鎖や入卒園式も対象に）、<strong>残業免除の対象も3歳未満から小学校就学前までに拡大</strong>。同年10月からは、3歳〜就学前の子を持つ社員向けに柔軟な働き方（テレワーク等）の選択肢を用意することが事業主に義務付けられました（厚生労働省）。
            </p>
            <p>
              ただし、「取れる」と「取りやすい」は別問題です。育休取得状況の公表義務は従業員300人超の企業が対象のため、<strong>多くのスタートアップは取得実績を公表していません。自分で確認するしかない</strong>のが実情です。面接・カジュアル面談で次のポイントを確認しましょう。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>制度が未整備な会社で確認すべき6つのポイント</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span><strong>取得実績</strong>：産休・育休を取得した社員（男女とも）が実際にいるか。第1号になる場合は経営陣の考え方を直接聞く</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span><strong>復帰者の有無と働き方</strong>：復帰後に時短・リモートでどう働いているか、具体例を聞く</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span><strong>経営陣の姿勢</strong>：「制度はこれから一緒に作る」と言えるか、ライフイベントを織り込んだ組織設計を考えているか</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span><strong>属人化の度合い</strong>：自分が数か月抜けても回る体制（ドキュメント文化・引き継ぎ）があるか。属人化が極端だと休みにくい</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span><strong>就業規則・社会保険の整備</strong>：就業規則の有無、社会保険・雇用保険への加入は最低限の確認事項</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span><strong>SOと育休の関係</strong>：ベスティングが休業中も進むか、評価・昇給への影響はどう扱われるか</span></li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-4">
            制度の運用実績まで公表されている企業から選びたい場合は、<a href="/articles/women-friendly-companies/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>女性が働きやすいIT企業の見つけ方</a>で紹介している「くるみん認定」や女性活躍データベースの活用も有効です。
          </p>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省「育児・介護休業法について」（2025年4月・10月施行の改正内容を含む）（2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec6 大手・Web系との比較 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">大手・Web系との比較と向き不向き</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              スタートアップを検討する人の比較対象は、多くの場合「大手SIer・メーカー系」か「Web系の中堅〜大手」です。Web系業界全体の構造は<a href="/articles/web-industry/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>Web業界転職ガイド</a>で詳しく解説していますが、スタートアップとの違いを要約すると次の通りです。
            </p>
            <p>
              <strong>大手</strong>は給与・制度・教育の安定感が最大の強みで、その代わり技術選定や事業への関与は限定的。<strong>Web系中堅〜大手</strong>はモダンな技術と整った制度のバランス型。<strong>スタートアップ</strong>は裁量と成長速度が最大で、安定性・制度の完成度を会社の成長と一緒に作っていく働き方です。どれが優れているかではなく、<strong>いまの自分のキャリア段階とライフプランにどれが合うか</strong>で選ぶのが正解です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>スタートアップが向いている人</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・技術選定・設計から運用まで一気通貫で経験したい</li>
                <li>・役割の境界が曖昧でも「全部やる」を楽しめる</li>
                <li>・事業の数字とプロダクトの両方に興味がある</li>
                <li>・環境変化（方針転換・組織変更）を許容できる</li>
                <li>・現金給与の一部をSOという「挑戦の対価」に置き換えられる</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>大手・Web系中堅以上が向いている人</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・教育・メンター制度の中で着実に育ちたい（特に経験3年未満）</li>
                <li>・近くライフイベントを予定しており、制度の運用実績を重視したい</li>
                <li>・収入の安定性を最優先したい</li>
                <li>・大規模システム・大きなユーザー基盤の経験を積みたい</li>
                <li>・専門領域を深掘りしてキャリアを築きたい</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-4">
            なお「まず大手やWeb系で基礎体力をつけ、シリーズB前後のスタートアップに移って裁量を取りに行く」のは王道のキャリア戦略の一つです。長期のキャリア設計は<a href="/articles/career-path/" className="font-bold hover:underline" style={{ color: "#0891b2" }}>キャリアパス設計ガイド</a>を参考にしてください。
          </p>
        </div>
      </section>

      {/* sec7 確認ポイント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職前に確認すべきポイント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>市況が「選別」の局面にあるいま（<a href="#sec1" className="font-bold hover:underline" style={{ color: "#0891b2" }}>1章</a>）、入社前のデューデリジェンス（自分なりの企業調査）は必須です。最低限、次の5点を確認しましょう。</p>
          </div>
          <div className="space-y-4">
            {[
              ["POINT1", "資金調達の状況と時期", "直近の調達ラウンド・金額・時期はプレスリリースやスタートアップ情報データベース（スピーダ スタートアップ情報リサーチ等）で確認できます。最終調達から2年以上空いていて大きな黒字化ニュースもない場合は、面談で資金繰り（ランウェイ）の考え方を率直に聞いて構いません。"],
              ["POINT2", "事業の収益構造", "「誰がいくら払っているサービスか」を説明できるか。売上が立っているか、単一顧客への依存はないか。IR資料がない分、面談での質問が唯一の情報源です。"],
              ["POINT3", "SOの条件（口頭ではなく書面で）", "税制適格か否か、付与数と発行済株式数に対する割合、行使価額、ベスティング、退職時の扱い。オファー面談で書面提示を求めるのは失礼ではなく、誠実な会社ほどきちんと説明してくれます。"],
              ["POINT4", "労務の基本整備", "雇用契約書・就業規則・社会保険の整備状況、みなし残業の範囲と実態の乖離。ここが雑な会社は他も雑である可能性が高い、シンプルで強力なシグナルです。"],
              ["POINT5", "産育休・働き方の運用実態", "5章のチェックリスト（取得実績・復帰者・属人化の度合い等）を面接とカジュアル面談で確認。回答を渋る会社はその時点で判断材料になります。"],
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

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績。スピーディーなマッチングで最短2週間での内定実績も。年収交渉力にも定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>女性特化型</span>
              </div>
              <p className="text-sm text-text-light">女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT業界の転職支援に強み。未経験からベテランまで幅広い層の求人を保有。レスポンスの速さと手厚いサポートに定評があります。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 FAQ */}
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

      {/* sec10 出典 */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-3 text-sm text-text-light leading-relaxed">
            <li>・出典: スピーダ（株式会社ユーザベース）「Japan Startup Finance 2025」（2026年6月参照）— 2025年の国内スタートアップ資金調達総額7,613億円（デット除く・速報値、前年ほぼ横ばい）、1社あたり調達額の平均3.1億円・中央値6,240万円（前年7,760万円から低下）、質の高いIPOへのシフトとM&A件数の高水準維持、ファンド設立は超大型が総額を下支え</li>
            <li>・出典: 経済産業省「ストックオプション税制」（2026年6月参照）— 税制適格ストックオプションの要件（無償発行、付与決議日から2年経過後〜10年以内の行使［設立5年未満の非上場会社は15年以内］、行使価額は契約時の時価以上、譲渡禁止、保管委託または発行会社自身による株式管理）、令和6年度税制改正による年間権利行使価額上限の引き上げ（設立5年未満2,400万円、設立5年以上20年未満の非上場会社または上場後5年未満の上場会社3,600万円、それ以外1,200万円）、社外高度人材への付与対象拡大</li>
            <li>・出典: 財務省「令和6年度税制改正」（2026年6月参照）— ストックオプション税制の拡充（年間権利行使価額の限度額引き上げ、発行会社自身による株式管理スキームの容認）</li>
            <li>・出典: 厚生労働省「育児・介護休業法について」（2026年6月参照）— 育児・介護休業法は企業規模・業種を問わず全事業主に適用。2025年4月施行の改正（子の看護等休暇の対象を小学校3年生修了まで拡大、残業免除の対象を小学校就学前まで拡大、育児休業取得状況の公表義務を300人超の企業に拡大）、2025年10月施行の柔軟な働き方を実現するための措置の義務化</li>
            <li>・出典: doda（パーソルキャリア）「平均年収ランキング2025」（2026年6月参照）— エンジニア（IT/通信）の平均年収469万円</li>
            <li>・出典: アンテロープ「スタートアップの給与水準について」（2026年6月参照）— シリーズAのCxOで800万〜1,000万円程度が中央値、創業10年未満の企業に転職した人の平均年収720万円超（日本経済新聞記事の引用）</li>
          </ul>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/web-industry/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>Web業界転職ガイド</h3><p className="text-sm text-text-light">Web系企業の構造とスタートアップとの違い</p></a>
            <a href="/articles/salary-1000man/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>年収1,000万円を目指す方法</h3><p className="text-sm text-text-light">高年収を実現する現実的なルート</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>女性が働きやすいIT企業の見つけ方</h3><p className="text-sm text-text-light">制度の運用実績を公開データで確認する方法</p></a>
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>キャリアパス設計ガイド</h3><p className="text-sm text-text-light">5年後・10年後のキャリア設計</p></a>
          </div>
        </div>
      </section>

      <section className="py-12"><div className="mx-auto max-w-4xl px-4 text-center"><div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}><h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2><p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p><a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a></div></div>
      </section>
    </>
  );
}
