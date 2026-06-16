import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性フリーランスエンジニアの始め方｜単価相場・必要な準備・現実とリスク【2026年】",
  description:
    "女性フリーランスエンジニアの始め方を実データで解説。レバテックフリーランスの職種別単価相場（SE月72万円・PM88万円・ITコンサル102万円等）、会社員との保障の違い（国民健康保険に出産手当金はない等）、2024年11月施行のフリーランス新法の要点、独立までの現実的なステップとリスクまで出典付きで紹介します。",
  alternates: { canonical: "/articles/freelance/" },
  openGraph: {
    title: "女性フリーランスエンジニアの始め方｜単価相場・必要な準備・現実とリスク【2026年】",
    description:
      "職種別単価相場（SE月72万円・PM88万円等=レバテックフリーランス）、会社員との保障比較、フリーランス新法、独立ステップとリスクを実データで解説。",
    url: "https://women-engineer.com/articles/freelance/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性フリーランスエンジニアの始め方｜単価相場・必要な準備・現実とリスク【2026年】",
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
    "職種別単価相場（SE月72万円・PM88万円等=レバテックフリーランス）、会社員との保障比較、フリーランス新法、独立ステップとリスクを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/freelance/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "フリーランスエンジニアの単価相場はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "レバテックフリーランスの公開案件では、システムエンジニア（SE）案件の平均単価は月72万円（年商換算864万円）、フロントエンドエンジニア73万円、データサイエンティスト78万円、プロジェクトマネージャー88万円、ITコンサルタント102万円です（2026年6月参照）。ただしこれは「即戦力としてすぐ価値を出せる人」の相場で、税金・社会保険料・経費を支払う前の金額です。手取りベースでは同じ額面の会社員年収より2〜3割目減りすると考えておくのが現実的で、会社員年収の1.2〜1.5倍程度の年商がないと独立メリットは出にくいといわれます。",
      },
    },
    {
      "@type": "Question",
      name: "実務経験が浅くてもフリーランスになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "制度上は誰でもなれますが、実務経験1〜2年での独立はおすすめしません。エージェント経由の案件の多くは「実務経験3年以上・設計工程を一人称で担当できる」ことを想定した即戦力採用で、経験が浅いと案件の選択肢が極端に狭まり、低単価案件で消耗しやすくなります。また会社員と違って教育・レビューしてくれる先輩はいません。まず会社員のまま副業で1案件を最後まで回し、「自分のスキルが社外でいくらで売れるか」を確かめてから判断するのが安全です。経験が浅い場合は、先に自社開発・受託企業へ転職して経験を積む方が結果的に近道です。",
      },
    },
    {
      "@type": "Question",
      name: "出産・育児とフリーランスは両立できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "時間と場所の自由度が高い点は両立の強みですが、給付面は会社員より確実に手薄です。出産育児一時金（原則50万円）は国民健康保険でも受け取れますが、産休中の収入を補う出産手当金は健康保険（会社員）独自の制度のため国保にはなく、育児休業給付金も雇用保険の制度なのでフリーランスは対象外です。一方、国民年金保険料は産前産後の4か月間免除され（2019年4月〜）、国民健康保険料にも産前産後期間の免除制度があります（2024年1月〜）。また2024年11月施行のフリーランス新法により、6か月以上の継続的業務委託では発注者に育児・介護との両立への配慮が義務付けられました。出産前後の無収入期間を貯蓄でカバーする資金計画が前提になります。",
      },
    },
    {
      "@type": "Question",
      name: "フリーランス保護新法（2024年11月施行）で何が変わりましたか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「フリーランス・事業者間取引適正化等法」が2024年11月1日に施行され、発注事業者に対して①業務内容・報酬額・支払期日等の取引条件を書面やメール等で明示する義務、②納品物の受領日から60日以内に報酬を支払う義務、③1か月以上の業務委託での7つの禁止行為（受領拒否・報酬の減額・買いたたき等）、④募集情報の的確表示、⑤6か月以上の継続的業務委託での育児・介護等との両立への配慮、⑥ハラスメント対策の体制整備、⑦中途解除時の原則30日前までの予告などが義務付けられました。違反があった場合は公正取引委員会等への申出ができ、「フリーランス・トラブル110番」で弁護士に無料相談できます。",
      },
    },
    {
      "@type": "Question",
      name: "インボイス制度には登録すべきですか？確定申告はどうなりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "企業向けのエンジニア案件では、取引先が仕入税額控除をするためにインボイス（適格請求書）発行事業者であることを前提とする場合が多く、エージェント経由の案件では実務上登録が標準的になっています。登録すると免税事業者でも消費税の申告義務が生じますが、納税額を売上税額の2割に抑える「2割特例」が個人事業主は2026年分の申告まで利用できます（国税庁）。特例終了後は簡易課税か本則課税かの選択が必要です。所得税は毎年の確定申告が必須で、青色申告（複式簿記・電子申告）なら最大65万円の特別控除が受けられます。会計ソフトの利用と、初年度は税理士や税務署の無料相談の活用をおすすめします。",
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
              { label: "女性フリーランスエンジニアの始め方" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              状況別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性フリーランスエンジニアの始め方
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                単価相場・必要な準備・現実とリスクを実データで解説【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>この記事の結論</h2>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>単価相場はSE案件で月72万円（年商換算864万円）。</strong>フロントエンド73万円・PM88万円・ITコンサル102万円（レバテックフリーランス公開案件）。会社員エンジニア平均469万円（doda 2025）を大きく上回りますが、税・社会保険料・経費を引く前の「即戦力の相場」です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>保障の差は出産・育児期に最も効きます。</strong>国民健康保険には出産手当金・傷病手当金がなく、育児休業給付金も対象外。一方で出産育児一時金（原則50万円）は受け取れ、国民年金・国保の産前産後の保険料免除もあります。違いを正確に知った上での資金計画が必須です。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>2024年11月施行のフリーランス新法で取引環境は改善。</strong>取引条件の書面明示・報酬の60日以内支払・買いたたき等の禁止・育児介護との両立配慮などが発注者の義務になりました（公正取引委員会・厚生労働省）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span><strong>独立の現実的なルートは「実務3年＋副業で試運転」。</strong>いきなりフリーランスは案件獲得・単価・スキル形成のすべてで不利です。生活費6か月分の貯蓄と、副業での1案件完走を独立のゴーサインにしましょう。</span>
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. フリーランスエンジニアの現在地【実データ】</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 職種別の単価相場テーブル（出典付き）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 会社員との比較表（収入・保障・産休育休）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. フリーランス保護新法（2024年11月施行）の要点</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 始め方4ステップと「いきなりフリーランス」のリスク</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 税金・保険・インボイスの基礎知識</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. ライフイベントとの両立：自由度と保障のトレードオフ</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 独立までのモデルケース</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 現在地 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">フリーランスエンジニアの現在地【実データ】</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              フリーランスエンジニアは、企業と雇用契約ではなく業務委託契約（準委任・請負）を結び、自分のスキルを直接売って働くスタイルです。<a href="/articles/career-path/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>キャリアパス5類型</a>の中では「自由度最大・保障最小」のポジションにあたります。
            </p>
            <p>
              まず良い面のデータから。フリーランス協会「フリーランス白書2025」によると、フリーランスは<strong>「就業環境（働く時間・場所）」「プライベートとの両立」「達成感・充実感」で7〜8割が満足</strong>と回答しており、働き方の自由度への評価は一貫して高い結果です。情報通信業のテレワーク導入率は94.3%（総務省）と、エンジニアはフルリモート案件を選びやすい職種でもあります。
            </p>
            <p>
              一方で厳しい面も同じ調査に表れています。<strong>「収入」に満足している人は34.0%にとどまり、不満（40.2%）が上回ります</strong>。フリーランス全体（エンジニア以外も含む）の年収分布は「200万〜400万円未満」が最多の40.9%で、「会社員より自由で高収入」が自動的に実現するわけではありません。エンジニアは職種の中では高単価側にいますが、それでも<strong>スキルと営業力によって収入の差が極端に開く世界</strong>です。次章で、その「相場」を職種別に見ていきます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>月72万円</p>
              <p className="text-sm font-bold mt-2">SE案件の平均単価</p>
              <p className="text-xs text-text-light mt-1">年商換算864万円（レバテックフリーランス公開案件）</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>7〜8割</p>
              <p className="text-sm font-bold mt-2">就業環境・両立への満足度</p>
              <p className="text-xs text-text-light mt-1">時間・場所の自由度の評価は高い（フリーランス白書2025）</p>
            </div>
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: "#d9c7b8" }}>
              <p className="text-3xl font-bold" style={{ color: "#7c3a55" }}>34.0%</p>
              <p className="text-sm font-bold mt-2">収入への満足度</p>
              <p className="text-xs text-text-light mt-1">不満40.2%が上回る。収入はスキル次第で二極化</p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: レバテックフリーランス「単価相場」、フリーランス協会「フリーランス白書2025」、総務省「令和6年通信利用動向調査」（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec2 単価相場 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">職種別の単価相場テーブル（出典付き）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              フリーランスエンジニアの報酬は「月額単価×稼働月数」で決まります。以下は大手エージェント・レバテックフリーランスが公開している職種別の平均単価です。<strong>上流工程（PM・ITコンサル）ほど高く、テスト・運用寄りほど低い</strong>という構造がはっきり見て取れます。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>職種</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均単価（月額）</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年商換算（12か月稼働）</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>メモ</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ITコンサルタント</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>102万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約1,224万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>最高単価帯。要件定義より上流の経験が必須</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>プロジェクトマネージャー（PM）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>88万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約1,056万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>PMO案件も86万円と高水準</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>データサイエンティスト</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>78万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約936万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>AI・データ基盤需要で単価上昇傾向</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>セキュリティエンジニア</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>76万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約912万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>人材不足が続く高需要領域</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フロントエンドエンジニア</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>73万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約876万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>React/TypeScript案件が中心。リモート比率高</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>システムエンジニア（SE）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>72万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約864万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>案件数が最も多いボリュームゾーン</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>インフラ／サーバーエンジニア</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>68万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約816万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>クラウド（AWS/GCP）設計まで担えると単価上振れ</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>プログラマー（PG）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>66万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約792万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>実装専任。設計まで担えるかが単価の分岐点</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>QAエンジニア／テストエンジニア</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>60万〜63万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>約720万〜756万円</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>テスト自動化スキルで上位帯を狙える</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: レバテックフリーランス「単価相場」（2026年6月参照）。公開案件の平均単価で、スキル・経験年数・商流により変動します。年商換算は単価×12か月の参考値で、税金・社会保険料・経費の控除前です。
          </p>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>「年商864万円」を会社員年収と比べるときの注意</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・年商からは<strong>国民健康保険料・国民年金保険料（全額自己負担）・所得税・住民税・個人事業税・経費</strong>が引かれます。賞与・退職金もありません</li>
              <li>・一般に、<strong>会社員年収の1.2〜1.5倍程度の年商</strong>でようやく手取り・保障込みで同等といわれます。月72万円（年商864万円）は会社員換算でおよそ600万〜700万円台のイメージです</li>
              <li>・案件の空白期間（営業期間）が挟まれば稼働月数は12か月を下回ります。<strong>「単価×12」を当てにした生活設計は危険</strong>です</li>
              <li>・それでも会社員エンジニア平均469万円（doda「平均年収ランキング2025」）との比較では、即戦力スキルがあれば収入面のメリットは十分にあります</li>
            </ul>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              年収1,000万円を目指すルートとしてのフリーランス活用は<a href="/articles/salary-1000man/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性エンジニアが年収1000万円を目指す方法</a>で、会社員のまま収入を増やす選択肢は<a href="/articles/side-job/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>副業ガイド</a>で詳しく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 会社員との比較 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">会社員との比較表（収入・保障・産休育休）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              フリーランス検討で最も誤解が多いのが社会保障の違いです。特に<strong>出産・育児に関わる給付は「会社員（健康保険・雇用保険）にあって、フリーランス（国民健康保険・国民年金）にないもの」が多い</strong>ため、ライフプランと合わせて正確に把握しておきましょう。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>会社員エンジニア</th>
                  <th className="border px-3 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>フリーランスエンジニア</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>収入</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>平均469万円（doda 2025）。毎月安定、賞与・昇給あり</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>SE案件で年商換算864万円。ただし案件が途切れれば収入ゼロ。賞与・退職金なし</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>健康保険</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>健康保険（労使折半）。<strong>傷病手当金あり</strong></td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>国民健康保険（全額自己負担）。<strong>傷病手当金は原則なし</strong>。退職後2年間は任意継続も選択可</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>年金</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>厚生年金（労使折半）。将来の受給額が厚い</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>国民年金のみ。iDeCo・国民年金基金・小規模企業共済での自助上乗せが実質必須</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>出産時の給付</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>出産育児一時金（原則50万円）＋<strong>出産手当金（産前42日・産後56日の収入補填）</strong></td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>出産育児一時金（原則50万円）は受給可。<strong>出産手当金は国保にはない</strong>。国民年金・国保の産前産後保険料免除あり</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>育児休業</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>育児休業給付金（雇用保険）で休業中の収入を補填。社会保険料も免除</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}><strong>育児休業給付金なし</strong>（雇用保険未加入のため）。休めば収入ゼロ。働く時間・量の調整は自由</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>失業・契約終了時</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>雇用保険の基本手当（失業給付）あり。解雇には法的制約</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>失業給付なし。契約終了が即収入減。新法で中途解除は原則30日前予告が義務化</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>労災</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>労災保険（保険料は会社負担）</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>2024年11月からフリーランスも労災保険に特別加入可能に（保険料は自己負担）</td>
                </tr>
                <tr>
                  <td className="border px-3 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>働き方の自由</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>就業規則の範囲内。リモート・フレックスは会社次第</td>
                  <td className="border px-3 py-3" style={{ borderColor: "#d9c7b8" }}>稼働日数・時間帯・案件・休暇を自分で設計できる。週3〜4日稼働の案件も選べる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 厚生労働省・日本年金機構（出産育児一時金、出産手当金、産前産後期間の国民年金保険料免除制度）、doda「平均年収ランキング2025」、レバテックフリーランス「単価相場」（いずれも2026年6月参照）
          </p>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              まとめると、<strong>「平常時の収入と自由度はフリーランス優位、不測の事態とライフイベント時の保障は会社員優位」</strong>という明確なトレードオフです。このトレードオフを埋めるのが貯蓄・民間保険・共済などの自助であり、独立前に設計しておくべき項目になります。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 フリーランス新法 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">フリーランス保護新法（2024年11月施行）の要点</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              2024年11月1日、<strong>「フリーランス・事業者間取引適正化等法」（フリーランス法）</strong>が施行されました。従業員を使用しないフリーランス（特定受託事業者）に業務委託する発注事業者に対し、取引の適正化と就業環境の整備を義務付ける法律で、所管は公正取引委員会・中小企業庁・厚生労働省です。口約束での発注や報酬の支払い遅延といった、フリーランスが個人では交渉しにくかった問題に法的な後ろ盾ができました。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>取引の適正化（公正取引委員会・中小企業庁）</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>取引条件の明示（全取引）</strong>：業務内容・報酬額・支払期日などを書面またはメール等で直ちに明示する義務</li>
                <li>・<strong>報酬の60日以内支払（全取引）</strong>：給付（納品物・役務）を受領した日から60日以内のできる限り早い日に支払期日を設定し、期日内に支払う義務</li>
                <li>・<strong>7つの禁止行為（1か月以上の業務委託）</strong>：①受領拒否 ②報酬の減額 ③返品 ④買いたたき（著しく低い報酬の一方的決定） ⑤物の購入・役務の利用の強制 ⑥不当な経済上の利益の提供要請 ⑦不当な給付内容の変更・やり直し</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>就業環境の整備（厚生労働省）</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>募集情報の的確表示</strong>：広告等で虚偽・誤解を招く表示をしてはならない</li>
                <li>・<strong>育児・介護等との両立への配慮（6か月以上の継続的業務委託）</strong>：妊娠・出産・育児・介護と業務を両立できるよう、フリーランスの申出に応じて打ち合わせ時間の調整やリモート対応などの必要な配慮をする義務</li>
                <li>・<strong>ハラスメント対策の体制整備</strong>：相談対応の体制整備等。ハラスメントの相談を理由とする契約解除等の不利益取扱いも禁止</li>
                <li>・<strong>中途解除等の事前予告・理由開示（6か月以上の継続的業務委託）</strong>：契約の解除・不更新は原則30日前までに予告。理由の開示を求められたら開示する義務</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 公正取引委員会「フリーランス法特設サイト」、公正取引委員会・厚生労働省「特定受託事業者に係る取引の適正化等に関する法律についての考え方」（いずれも2026年6月参照）
          </p>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>トラブルに遭ったら</h3>
            <p className="text-sm text-text-light leading-relaxed">
              報酬の不払い・一方的な減額・契約の突然打ち切りなどに遭った場合は、国が設置する<strong>「フリーランス・トラブル110番」</strong>（弁護士による無料相談、厚生労働省委託事業）に相談できます。また法違反については公正取引委員会・中小企業庁・厚生労働省へ申出が可能で、申出を理由とする契約解除等の不利益取扱いは禁止されています。<strong>女性フリーランスにとって特に重要なのは、妊娠・出産・育児への配慮義務とハラスメント対策が法律に明記された点</strong>です。「子どもの送迎があるので定例を夕方から昼に変えてほしい」といった申出は、6か月以上の継続案件なら法律上の配慮義務の対象になります。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 始め方STEP */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">始め方4ステップと「いきなりフリーランス」のリスク</h2>
          <div className="space-y-4">
            {[
              ["STEP1", "実務経験3年＋「一人称で完結できる工程」を作る（在職中）", "エージェント案件の中心は即戦力採用。設計〜実装〜テストを一人称で回せること、得意領域（フロントエンド・クラウド等）を1つ言語化できることが単価交渉の土台になる。経験が浅いなら、まず転職で経験の質を上げる方が近道。"],
              ["STEP2", "副業で1案件を完走して「社外で売れるか」を検証する", "会社員のまま小さな業務委託案件を受け、見積もり→契約→納品→請求まで一連を経験する。ここで感じた大変さ（営業・交渉・経理）が独立後の日常になる。勤務先の副業規程の確認は必須。詳しくは副業ガイドへ。"],
              ["STEP3", "資金と環境を整える（生活費6か月分・開業届・会計）", "案件の空白や納品トラブルに備え、目安として生活費6か月分の貯蓄を確保。開業届と青色申告承認申請書を税務署に提出し、会計ソフト・事業用口座・基本契約書のひな形を準備する。クレジットカードや住宅ローンの審査は会社員のうちが通りやすい点も忘れずに。"],
              ["STEP4", "エージェントと人脈の両輪で案件を獲得する", "初案件はフリーランスエージェント経由が現実的（営業・契約・請求を代行、支払いサイトも安定）。並行して、フリーランス白書2025で「最も稼げる獲得経路」1位の人脈・2位の過去の取引先を育てる。前職の信頼貯金が最大の営業資産になる。"],
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
          <p className="text-text-light text-sm mt-3">出典: フリーランス協会「フリーランス白書2025」（仕事の獲得経路、2026年6月参照）</p>
          <div className="rounded-xl p-6 mt-6" style={{ backgroundColor: "#fff7ed", border: "2px solid #c15f47" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>「いきなりフリーランス」を正直におすすめしない理由</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・<strong>案件の入口が狭い</strong>：エージェント案件の多くは実務経験3年前後を想定。未経験・経験1年では紹介可能案件が大きく減り、低単価のクラウドソーシング案件で消耗しがち</li>
              <li>・<strong>スキルが育ちにくい</strong>：フリーランスは「できることを売る」働き方。会社員のような教育・レビュー・失敗の許容がなく、未熟なまま独立すると成長が止まりやすい</li>
              <li>・<strong>信用の壁</strong>：賃貸契約・ローン・クレジットカードの審査は開業直後が最も不利。独立前に済ませておくべき手続きが多い</li>
              <li>・<strong>「フリーランス向け養成スクール」への注意</strong>：「未経験から即フリーランスで高収入」を謳う高額スクールにはトラブル事例もあります。まず転職で実務経験を積む方が確実で安全です</li>
            </ul>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              フルリモートで働ける会社員求人という中間解もあります。<a href="/articles/remote-jobs/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>リモートワーク求人ガイド</a>で「自由度と保障の両取り」ができる選択肢も確認してみてください。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 税金・保険 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">税金・保険・インボイスの基礎知識</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              独立すると、会社が代行してくれていた税・保険の手続きがすべて自分の仕事になります。最低限、次の4点を押さえましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>確定申告と青色申告</h3>
              <p className="text-sm text-text-light leading-relaxed">
                所得税は毎年自分で確定申告します。開業時に<strong>青色申告承認申請書</strong>を提出し、複式簿記＋電子申告（e-Tax）で申告すれば<strong>最大65万円の青色申告特別控除</strong>が受けられます。会計ソフトを使えば複式簿記の知識がなくても実務上は対応可能です。PC・書籍・通信費・自宅作業スペースの家賃の一部（家事按分）などは経費にできますが、レシート・請求書の保存が前提です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>インボイス制度（消費税）</h3>
              <p className="text-sm text-text-light leading-relaxed">
                企業向け案件では、取引先の仕入税額控除の関係で<strong>インボイス（適格請求書）発行事業者への登録が実務上標準</strong>になっています。登録すると消費税の申告義務が生じますが、納税額を売上にかかる消費税の2割に抑える<strong>「2割特例」が個人事業主は2026年分の申告まで利用可能</strong>（国税庁）。特例終了後に備え、簡易課税制度の選択も含めて2026年中に方針を決めておきましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>社会保険の切り替え</h3>
              <p className="text-sm text-text-light leading-relaxed">
                退職後14日以内に<strong>国民健康保険・国民年金への切り替え</strong>を市区町村で行います（退職後2年間は前職の健康保険の任意継続も選択可。保険料を比較して有利な方を）。国保・国民年金は全額自己負担で、年商600万〜800万円台なら年間の負担は数十万円規模になります。<strong>出産時は国民年金保険料が産前産後4か月間免除（2019年4月〜）、国民健康保険料にも産前産後免除（2024年1月〜）</strong>があるので忘れず申請を。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>退職金・万一への自助</h3>
              <p className="text-sm text-text-light leading-relaxed">
                退職金がない代わりに、<strong>小規模企業共済</strong>（掛金月1,000〜70,000円が全額所得控除）と<strong>iDeCo</strong>（フリーランスは拠出上限が会社員より大きい）で「自分退職金」を作るのが定番です。病気・ケガで働けないときの傷病手当金がないため、就業不能保険や共済での備え、そして<strong>2024年11月から対象が広がった労災保険の特別加入</strong>も検討対象になります。
              </p>
            </div>
          </div>
          <p className="text-text-light text-sm mt-3">
            出典: 国税庁「2割特例（インボイス発行事業者となる小規模事業者に対する負担軽減措置）の概要」、日本年金機構「国民年金保険料の産前産後期間の免除制度」、厚生労働省（労災保険の特別加入）（いずれも2026年6月参照）
          </p>
        </div>
      </section>

      {/* sec7 ライフイベント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ライフイベントとの両立：自由度と保障のトレードオフ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「子育てと両立しやすいからフリーランスに」という動機はよく聞きますが、実態は<strong>強みと弱みがはっきり分かれます</strong>。どちらか一方だけを見て決めないことが大切です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>両立に効く強み</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>稼働量を自分で設計できる</strong>：週3〜4日稼働・時短稼働の案件を選べば、保育園の送迎や学校行事に合わせた働き方が組める</li>
                <li>・<strong>場所の自由</strong>：フルリモート案件を選べば通勤ゼロ。フリーランス白書2025でも「就業環境」「プライベートとの両立」の満足度は7〜8割と高い</li>
                <li>・<strong>復帰タイミングも自分で決められる</strong>：会社の制度に縛られず、産後の体調と保育状況に合わせて段階的に稼働を戻せる</li>
                <li>・<strong>法的な後ろ盾ができた</strong>：6か月以上の継続案件では、妊娠・出産・育児・介護との両立への配慮が発注者の義務に（フリーランス法）</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>直視すべき弱み</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・<strong>休んだ分だけ収入が消える</strong>：出産手当金・育児休業給付金がないため、産前産後の数か月は原則無収入。給付で補填される会社員との差が最も大きい局面</li>
                <li>・<strong>保活で不利になり得る</strong>：自治体によっては居宅内労働の点数が低い場合がある。就労証明は契約書・開業届等で自分で揃える必要</li>
                <li>・<strong>「自由」は「無限に仕事できてしまう」と裏表</strong>：稼働を抑える勇気と単価を上げる交渉力がないと、育児と仕事の板挟みがむしろ深刻化する</li>
                <li>・<strong>収入の波と教育費の固定費は相性が悪い</strong>：子どもの成長に伴う固定支出に対し、収入が変動するストレスは想像以上に大きい</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              現実的な解は、<strong>出産前後の1〜2年は「会社員の給付の厚さ」を、子どもの生活リズムが安定した後は「フリーランスの自由度」を使う、というように時期で使い分ける</strong>ことです。フリーランス経験は自走力・顧客折衝力として転職市場でも評価されるため、会社員へ戻る選択肢は常に残ります。キャリア全体での位置付けは<a href="/articles/career-path/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>キャリアパス完全マップ</a>で整理してください。
            </p>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>転職を成功させるには、信頼できるエージェントの活用が欠かせません。IT特化型と女性特化型を併用することで、より多くの選択肢からベストな転職先を見つけられます。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web業界に特化し、48,000件以上の求人を保有。年収70万円以上UPの実績多数。リモートワーク求人が約60%を占め、女性アドバイザーの指名も可能です。技術に精通したアドバイザーが的確な提案をしてくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">Geekly</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強みを持つ転職エージェント。平均年収アップ率81%の実績。スピーディーなマッチングで最短2週間での内定実績も。年収交渉力にも定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span>
              </div>
              <p className="text-sm text-text-light">女性のキャリアに特化したサポート体制。産休育休取得実績のある企業を中心に紹介。女性ならではの悩みに寄り添った丁寧なカウンセリングが特徴です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">ワークポート</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span>
              </div>
              <p className="text-sm text-text-light">IT業界の転職支援に強み。未経験からベテランまで幅広い層の求人を保有。レスポンスの速さと手厚いサポートに定評があります。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数のエージェントに登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 モデルケース */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">独立までのモデルケース</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ケース1（30代前半・Web系エンジニア→副業経由で独立）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">独立前</p>
                  <p className="text-sm font-bold">自社開発企業のフロントエンドエンジニア（実務5年）/ 年収520万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>独立後</p>
                  <p className="text-sm font-bold">フリーランス（React案件・フルリモート週5）/ 月単価70万円・年商840万円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">在職中に副業で2案件を完走し、社外でのスキルの値段を確認してから独立。初案件はエージェント経由でフロントエンド案件の相場（平均73万円=レバテックフリーランス）に沿う単価でスタートし、生活費6か月分の貯蓄と青色申告の準備を済ませてから退職届を出した、リスクを抑えた標準ルートです。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>ケース2（30代後半・育児中→週4稼働で再設計）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}>
                  <p className="text-xs font-bold text-text-light mb-1">独立前</p>
                  <p className="text-sm font-bold">SIerのSE（時短勤務・実務10年）/ 年収450万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>独立後</p>
                  <p className="text-sm font-bold">フリーランスSE（週4稼働・リモート）/ 月単価58万円・年商約700万円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">子どもが小学校に上がり生活リズムが安定したタイミングで独立。フルタイム相当のSE相場（平均72万円）より単価を抑える代わりに週4日・リモートの条件を優先し、送迎と学校行事に対応できる働き方を実現。第2子の予定がないこと・配偶者の収入で固定費を賄えることを確認した上で、保障の薄さを許容した設計です。</p>
            </div>
          </div>
          <p className="text-xs text-text-light mt-4">※事例は公開されている単価相場・制度をもとに典型的な独立パターンを構成したモデルケースであり、特定個人の体験談ではありません。</p>
        </div>
      </section>

      {/* sec10 FAQ */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl border overflow-hidden" style={{ borderColor: "#d9c7b8", backgroundColor: "#fff" }}>
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

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-2 text-sm text-text-light">
            <li>・出典: レバテックフリーランス「単価相場」（2026年6月参照）— 公開案件の職種別平均単価：ITコンサルタント102万円、PM88万円、PMO86万円、データサイエンティスト78万円、セキュリティエンジニア76万円、フロントエンドエンジニア73万円、SE72万円、インフラ・サーバーエンジニア68万円、プログラマー66万円、QAエンジニア63万円、テストエンジニア60万円</li>
            <li>・出典: フリーランス協会「フリーランス白書2025」（2026年6月参照）— 満足度（就業環境・プライベートとの両立等は7〜8割が満足、収入の満足34.0%・不満40.2%）、年収分布（200万〜400万円未満が最多40.9%）、最も稼げる仕事獲得経路（1位 人脈、2位 過去・現在の取引先、3位 エージェントサービス）</li>
            <li>・出典: 公正取引委員会「フリーランス法特設サイト」／公正取引委員会・厚生労働省「特定受託事業者に係る取引の適正化等に関する法律についての考え方」（2026年6月参照）— フリーランス・事業者間取引適正化等法（2024年11月1日施行）：取引条件の明示、報酬の60日以内支払、7つの禁止行為、募集情報の的確表示、育児介護等との両立への配慮、ハラスメント対策、中途解除等の30日前予告</li>
            <li>・出典: 厚生労働省（2026年6月参照）— 出産育児一時金（原則50万円、国民健康保険も対象）。出産手当金・傷病手当金・育児休業給付金は健康保険・雇用保険の制度であり国保加入のフリーランスは対象外。「フリーランス・トラブル110番」（弁護士による無料相談）。労災保険の特別加入（2024年11月から対象拡大）</li>
            <li>・出典: 日本年金機構「国民年金保険料の産前産後期間の免除制度」（2026年6月参照）— 2019年4月から、出産予定月の前月から4か月間（多胎は6か月間）の国民年金保険料を免除。国民健康保険料の産前産後免除は2024年1月開始</li>
            <li>・出典: 国税庁「2割特例（インボイス発行事業者となる小規模事業者に対する負担軽減措置）の概要」（2026年6月参照）— 免税事業者からインボイス発行事業者になった場合、納税額を売上税額の2割に軽減。個人事業主は2026年分の申告まで（2026年9月30日の属する課税期間まで）</li>
            <li>・出典: doda（パーソルキャリア）「平均年収ランキング2025」（2026年6月参照）— エンジニア（IT/通信）の平均年収469万円</li>
            <li>・出典: 総務省「令和6年通信利用動向調査」（2026年6月参照）— テレワーク導入率：情報通信業94.3%</li>
          </ul>
          <p className="text-xs text-text-light mt-4">※単価・年収・制度の数値は調査時点のものであり、スキル・経験・商流・自治体により変動します。年商換算は単価×12か月の参考値で、税金・社会保険料・経費の控除前です。税・社会保険の個別判断は税理士・社会保険労務士・各自治体窓口にご確認ください。</p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアのキャリアパス完全マップ</h3>
              <p className="text-sm text-text-light">フリーランスを含む5類型を年収データで比較</p>
            </a>
            <a href="/articles/side-job/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの副業ガイド</h3>
              <p className="text-sm text-text-light">独立前の「試運転」に最適な副業の始め方</p>
            </a>
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リモートワーク求人ガイド</h3>
              <p className="text-sm text-text-light">自由度と保障を両取りできる会社員の選択肢</p>
            </a>
            <a href="/articles/salary-1000man/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>年収1000万円を目指す方法</h3>
              <p className="text-sm text-text-light">フリーランス・PM・外資など高収入ルート比較</p>
            </a>
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
