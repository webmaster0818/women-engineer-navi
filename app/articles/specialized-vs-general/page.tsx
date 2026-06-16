import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "IT特化型と総合型転職エージェントの違い｜女性エンジニアの使い分け方【2026年】",
  description:
    "IT特化型と総合型転職エージェントの違いを徹底解説。求人の専門性・サポート・担当者の知識をカテゴリ別に比較し、経験者・未経験・ブランクありのフェーズ別の使い分けを紹介。厚労省の職業紹介制度に基づく「無料で使える理由」も出典付きで解説します。",
  alternates: { canonical: "/articles/specialized-vs-general/" },
  openGraph: {
    title: "IT特化型と総合型転職エージェントの違い｜女性エンジニアの使い分け方【2026年】",
    description:
      "IT特化型と総合型転職エージェントの違いをカテゴリ別に比較。フェーズ別の使い分け方と、転職エージェントが無料で使える仕組みを厚労省の制度に基づき出典付きで解説します。",
    url: "https://women-engineer.com/articles/specialized-vs-general/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IT特化型と総合型転職エージェントの違い｜女性エンジニアの使い分け方【2026年】",
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
    "IT特化型と総合型転職エージェントの違いをカテゴリ別に比較。フェーズ別の使い分け方と、転職エージェントが無料で使える仕組みを厚労省の制度に基づき解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/specialized-vs-general/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "転職エージェントはなぜ無料で使えるのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "転職エージェント（有料職業紹介事業）は、採用が決まった際に求人企業から成功報酬として手数料を受け取るビジネスモデルだからです。職業安定法第32条の3第2項により、求職者から手数料を徴収することは原則禁止されています（例外は芸能家・家政婦（夫）など一部職種のみで、エンジニアは対象外）。厚生労働省の集計では、常用就職1件あたりの手数料は約103万円（令和6年度・全業種平均）で、企業側がこの費用を負担しています。求職者は登録から内定まで完全無料で利用できます。",
      },
    },
    {
      "@type": "Question",
      name: "IT特化型と総合型の転職エージェントはどう違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT特化型はIT・Web業界の求人に絞り、技術スタックや開発現場を理解した担当者が職務経歴の言語化や技術面のマッチングを支援するカテゴリです。総合型は全業界・全職種を扱うため求人の母数が多く、事業会社の社内SEや異業種への選択肢も含めて幅広く探せるカテゴリです。どちらが優れているかではなく守備範囲の違いなので、自分の経験・志望に合わせて使い分けるか、併用するのが一般的です。",
      },
    },
    {
      "@type": "Question",
      name: "転職エージェントは何社くらい併用するのが一般的ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "リクナビNEXTが紹介する転職経験者199名への調査（ジャストシステム・2019年）では、転職サイト・エージェントの登録数は平均2.3社で、1社のみの利用は約26%にとどまり、7割以上が複数登録していました。厚生労働省の職業紹介事業の集計でも、求職者が複数の事業者を利用することは制度上の前提とされています。ただし、同じ求人に複数のエージェントから重複応募すると企業・エージェント双方に迷惑がかかるため、応募管理は自分で一元化しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性エンジニア志望でもIT特化型エージェントを使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "使えますが、エージェントは企業からの成功報酬で運営されるため、紹介できる求人がない完全未経験の段階では十分な支援を受けられない場合があります。学習前〜学習初期は未経験向け支援に強いサービスや総合型で裾野の広い求人を探し、ポートフォリオなど実績ができた段階でIT特化型に登録すると、技術を評価したマッチングを受けやすくなります。学習ロードマップは未経験からエンジニアになる完全ガイドも参考にしてください。",
      },
    },
    {
      "@type": "Question",
      name: "エージェントに応募や内定承諾を急かされたらどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "成功報酬モデルの性質上、担当者が早期決定を促す力学が働くことは構造的にあり得ます。急かされても、納得できるまで回答期限の延長を依頼する、判断材料（社風・残業実態・産休育休の取得実績など）の追加確認を依頼する、別のエージェントの求人と比較する、といった対応は求職者の正当な権利です。意思に反する応募・承諾を強要された場合は担当変更を申し出るか、利用をやめて構いません。許可を受けた事業者かどうかは厚生労働省の人材サービス総合サイトで確認できます。",
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
              { label: "IT特化型 vs 総合型エージェント" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              比較ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              IT特化型と総合型転職エージェントの違い
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                女性エンジニアのフェーズ別の使い分け方【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}
          >
            <h2 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
              この記事の結論
            </h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li>
                ① IT特化型と総合型は<strong>優劣ではなく守備範囲の違い</strong>。特化型は「技術の理解とマッチングの深さ」、総合型は「求人の母数と選択肢の広さ」が持ち味
              </li>
              <li>
                ② 使い方の定石は<strong>併用</strong>。公開調査では転職サイト・エージェントの登録数は平均2.3社で、7割以上が複数登録（リクナビNEXT掲載・ジャストシステム調査2019）
              </li>
              <li>
                ③ どちらを軸にするかは<strong>フェーズで決める</strong>。実務経験者はIT特化型を軸に、未経験・キャリアチェンジは総合型＋未経験向け支援、ブランクからの復職は働き方の条件に強いサービスを組み合わせる
              </li>
              <li>
                ④ エージェントは<strong>求職者完全無料</strong>。企業からの成功報酬で運営される仕組み（職業安定法）を理解しておくと、急かされたときも冷静に判断できる
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
              <li>
                <a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>
                  1. IT特化型と総合型はなにが違うのか
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>
                  2. カテゴリ比較表（専門性・サポート・向くフェーズ）
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>
                  3. 転職エージェントの仕組み（無料で使える理由）
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>
                  4. 仕組みからわかる利用時の注意点
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>
                  5. フェーズ別・使い分けの判断フロー
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>
                  6. 併用の実態とうまく併用するコツ
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>
                  7. 女性エンジニアが確認したい「第3の軸」
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>
                  8. おすすめ転職エージェント
                </a>
              </li>
              <li>
                <a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>
                  9. よくある質問
                </a>
              </li>
              <li>
                <a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>
                  10. 出典・参考資料
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 違いとは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">IT特化型と総合型はなにが違うのか</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              転職エージェント（有料職業紹介事業者）は、扱う求人の範囲によって大きく2つのカテゴリに分かれます。<strong>IT特化型</strong>は、IT・Web業界のエンジニア・クリエイター職などに対象を絞ったエージェント。<strong>総合型</strong>は、業界・職種を限定せず幅広い求人を扱うエージェントです。
            </p>
            <p>
              この違いは「どちらが良いエージェントか」という優劣ではなく、<strong>守備範囲の違い</strong>です。特化型は対象を絞る分、担当者が技術や開発現場の事情に通じやすく、職務経歴書のスキル表現や技術面のマッチングが深くなりやすいのが一般的な傾向です。一方の総合型は、全業界を扱うため求人の母数が大きく、IT企業以外の選択肢（事業会社の社内SE、ITコンサルタント、異業種のDX部門など）も視野に入れた提案が受けやすいのが特徴です。
            </p>
            <p>
              なお、日本国内で職業紹介を有料で行うには<strong>厚生労働大臣の許可</strong>が必要で（職業安定法第30条）、令和6年度に事業報告を提出した有料職業紹介事業所は30,561事業所にのぼります（出典: 厚生労働省「令和6年度職業紹介事業報告書の集計結果（速報）」2026年6月参照）。これだけの数があるからこそ、「カテゴリの違い」を理解して自分に合う組み合わせを選ぶことが重要になります。
            </p>
            <div
              className="rounded-xl border p-6 mt-6"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>
                2つのカテゴリのざっくりした整理
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>
                    <strong>IT特化型</strong>: IT・Web業界に限定。技術スタック・開発体制・エンジニアの市場価値に詳しい担当者が多い傾向
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>
                    <strong>総合型</strong>: 全業界・全職種を扱う。求人の母数が大きく、IT業界以外も含めた幅広い選択肢を比較できる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>
                    さらに第3のカテゴリとして、女性のキャリア継続支援に焦点を当てた<strong>女性特化型</strong>もある（働き方・制度面の条件に強い）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>
                    いずれも求職者は無料。違いは「何に強いか」であり、併用して互いの弱点を補うのが定石
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-sm">
              エージェントを使うか転職サイトで自分で応募するか迷っている段階の人は、先に
              <a href="/articles/agent-vs-site/" className="underline" style={{ color: "#7c3a55" }}>
                転職エージェントと転職サイトの違い
              </a>
              を読むと全体像がつかみやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 比較表 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">カテゴリ比較表（専門性・サポート・向くフェーズ）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT特化型・総合型それぞれの一般的な傾向を整理すると次のようになります。<strong>個々のエージェント・担当者によって差があるため、あくまでカテゴリとしての傾向</strong>として参考にしてください。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>比較項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>IT特化型</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>総合型</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>求人の専門性</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>IT・Web業界に集中。技術スタックや開発体制まで求人情報が詳しい傾向</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>全業界をカバー。社内SE・ITコンサル・異業種DX部門など幅が広い</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>担当者の知識</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>技術・開発現場への理解が深い担当者が多く、スキルの言語化を支援しやすい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>業界横断の転職市場全体に明るい。技術の深掘りは担当者により差が出やすい</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>サポートの傾向</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>職務経歴書の技術表現・技術面接・年収交渉などエンジニア向けに最適化</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>書類・面接対策の標準的な型が整備され、大手は拠点・ツールも充実</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>選択肢の広さ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>IT業界内では深いが、業界の外には広がりにくい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>母数が大きく、キャリアチェンジや地方・異業種も含めて探せる</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>向いているフェーズ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>実務経験があり、技術を正当に評価してほしい人。年収・技術環境を上げたい人</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>未経験・経験が浅い人、職種転換や業界をまたいだ選択肢を見たい人</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            重要なのは、この表のどちらか一方を選ぶ話ではないということです。実務経験者でも「IT業界の外の社内SE」という選択肢を総合型で確認する価値はありますし、未経験者でも実績ができた段階でIT特化型に切り替える戦略が有効です。具体的な組み合わせ方は
            <a href="#sec5" className="underline" style={{ color: "#7c3a55" }}>判断フロー</a>
            で解説します。
          </p>
        </div>
      </section>

      {/* sec3 仕組み */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職エージェントの仕組み（無料で使える理由）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              特化型・総合型の使い分けを考える前に、転職エージェントという仕組みそのものを理解しておきましょう。これを知っているかどうかで、エージェントとの付き合い方が大きく変わります。
            </p>
            <p>
              転職エージェントの正式な制度名は<strong>有料職業紹介事業</strong>で、職業安定法に基づき<strong>厚生労働大臣の許可</strong>を受けて運営されています（職業安定法第30条）。「有料」という名前ですが、お金を払うのは求人企業の側です。職業安定法第32条の3第2項により、<strong>求職者から手数料を徴収することは原則禁止</strong>されており（例外は芸能家・家政婦（夫）・配ぜん人・調理士・モデル・マネキンの6職種のみ）、エンジニアの転職支援で求職者が費用を請求されることはありません（出典: 厚生労働省「職業紹介事業の業務運営要領」第6 手数料、2026年6月参照）。
            </p>
            <p>
              エージェントの収益は、紹介した人材の入社が決まったときに求人企業から受け取る<strong>成功報酬（紹介手数料）</strong>です。厚生労働省の集計によると、令和6年度の有料職業紹介事業による常用就職件数は888,993件、手数料収入は約9,835億円で、<strong>常用就職1件あたりの手数料は約103万円</strong>（全業種平均）でした（出典: 厚生労働省「令和6年度職業紹介事業報告書の集計結果（速報）」令和8年3月31日公表、2026年6月参照）。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>
              お金の流れ（成功報酬モデル）
            </h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">1.</span>
                <span>求職者がエージェントに登録 → キャリア面談・求人紹介・書類添削・面接調整・年収交渉などのサポートを受ける（<strong>すべて無料</strong>）</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">2.</span>
                <span>入社が決まると、<strong>求人企業がエージェントに紹介手数料を支払う</strong>（厚労省集計では常用就職1件あたり約103万円・全業種平均）</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">3.</span>
                <span>手数料は「届出制手数料」など職業安定法で定められた枠組みの中で設定される（出典: 厚生労働省「職業紹介事業の業務運営要領」2026年6月参照）</span>
              </li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            つまりエージェントは「あなたの転職が決まって初めて売上が立つ」ビジネスです。だからこそ手厚いサポートが無料で受けられる一方、この構造には次のセクションで述べる注意点も伴います。
          </p>
        </div>
      </section>

      {/* sec4 注意点 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">仕組みからわかる利用時の注意点</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              成功報酬モデルは求職者にとって合理的な仕組みですが、構造上、<strong>担当者には「早く決めてもらいたい」という力学が働き得ます</strong>。これはどのエージェントが良い・悪いという話ではなく、業界全体に共通する構造です。仕組みを理解した上で、次の点を押さえておきましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                1. 急かされても自分のペースを守る
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                応募や内定承諾を急かされたと感じたら、回答期限の延長依頼、判断材料（残業実態・産休育休の取得実績・リモートの運用など）の追加確認、他社求人との比較は、求職者の正当な権利です。納得できないまま承諾する必要はありません。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                2. 担当者は変更できる
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                提案の質や相性は担当者個人による差が大きいのが実情です。合わないと感じたら担当変更を申し出るのは一般的な対応で、多くのエージェントが窓口を用意しています。遠慮して我慢するより、率直に伝えた方が双方にとって建設的です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                3. 許可事業者かどうかは公的に確認できる
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                有料職業紹介は厚生労働大臣の許可制です。利用を検討しているサービスが許可を受けた事業者かどうかは、厚生労働省の「人材サービス総合サイト」で許可番号・事業所名から誰でも検索できます（出典: 厚生労働省 人材サービス総合サイト、2026年6月参照）。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>
                4. 紹介求人が偏る可能性を併用で補う
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                1社だけに頼ると、そのエージェントが保有する求人・得意な業界の範囲でしか提案を受けられません。特化型と総合型を併用して提案を見比べることで、偏りに気づきやすくなり、自分の市場価値の客観的な相場感もつかめます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 判断フロー */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">フェーズ別・使い分けの判断フロー</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「自分はどれを軸にすべきか」は、現在のキャリアフェーズで考えるのが最も実用的です。次の3パターンを目安にしてください。
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                経験者
              </span>
              <div>
                <h3 className="font-bold mb-1">実務経験がある（目安3年以上）→ IT特化型を軸に、総合型をサブで</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  技術スタックを理解した担当者に職務経歴を言語化してもらい、年収・技術環境の向上を狙うフェーズ。IT特化型を軸にしつつ、総合型で「事業会社の社内SE」「ITコンサル」などIT業界の外の選択肢も確認しておくと、比較の物差しができます。
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
                未経験
              </span>
              <div>
                <h3 className="font-bold mb-1">未経験・経験が浅い → 総合型＋未経験向け支援を軸に、実績ができたら特化型へ</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  エージェントは企業からの成功報酬で運営されるため、紹介できる求人がない段階では支援が薄くなりがちです。まず学習とポートフォリオ作りを進めながら、裾野の広い総合型や未経験支援に強いサービスで選択肢を確保し、実績ができた段階でIT特化型を加えるのが現実的です。学習の進め方は
                  <a href="/articles/beginner/" className="underline" style={{ color: "#7c3a55" }}>
                    未経験からエンジニアになる完全ガイド
                  </a>
                  を参照してください。
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
              <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#c15f47" }}>
                ブランク
              </span>
              <div>
                <h3 className="font-bold mb-1">産育休・離職からの復職 → 働き方の条件に強いサービスを軸に、特化型で技術評価を補う</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  ブランクからの復職では、時短・リモート・残業など「働き方の条件」と「技術の評価」を両立させる必要があります。女性のキャリア継続に焦点を当てたサービスで制度面の実態を確認しつつ、IT特化型でブランク前のスキルを正当に評価してもらう組み合わせが有効です。詳しくは
                  <a href="/articles/return-to-work/" className="underline" style={{ color: "#7c3a55" }}>
                    ブランクから復職するためのガイド
                  </a>
                  で解説しています。
                </p>
              </div>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            どのフェーズでも共通するのは、「1社に絞らず、軸＋サブの2〜3社で始めて、合う担当者に比重を移していく」という進め方です。エージェント個社の選び方のチェックポイントは
            <a href="/articles/how-to-choose/" className="underline" style={{ color: "#7c3a55" }}>
              転職エージェントの選び方ガイド
            </a>
            にまとめています。
          </p>
        </div>
      </section>

      {/* sec6 併用 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">併用の実態とうまく併用するコツ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              複数のエージェントを併用することは、ルール上もマナー上も問題ありません。厚生労働省の職業紹介事業の集計でも「求職者は複数の職業紹介事業者を利用する場合がある」ことが集計上の前提として明記されており（出典: 厚生労働省「令和6年度職業紹介事業報告書の集計結果（速報）」2026年6月参照）、制度として複数利用が織り込まれています。
            </p>
            <p>
              実態としても、リクナビNEXTが紹介する転職経験者199名へのアンケート（ジャストシステム調査・2019年）では、転職サイト・エージェントの登録数は<strong>平均2.3社</strong>。最多は「2社」（約30%）で、1社のみの利用は約26%にとどまり、<strong>7割以上が複数登録</strong>という結果でした（出典: リクナビNEXT「転職サイト・エージェントはいくつ使った？」2026年6月参照）。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>
              併用を機能させる3つのルール
            </h3>
            <ul className="space-y-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>
                  <strong>重複応募をしない</strong>: 同じ求人に複数のエージェント経由で応募すると、企業・エージェント双方の信頼を損ないます。応募した企業はスプレッドシート等で自分が一元管理する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>
                  <strong>併用していることを隠さない</strong>: 他社も利用していると伝えるのは普通のことです。むしろ選考スケジュールの調整がしやすくなります
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span>
                <span>
                  <strong>広げすぎない</strong>: 多すぎると面談・連絡の管理が破綻します。軸＋サブの2〜3社で始め、提案の質と担当者との相性を見て比重を移すのが現実的です
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec7 第3の軸 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアが確認したい「第3の軸」</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ここまで「IT特化型か総合型か」という軸で整理してきましたが、女性エンジニアの場合、もう1つの軸として<strong>「働き方・制度面の情報にどれだけ強いか」</strong>を確認することをおすすめします。
            </p>
            <p>
              産休育休の取得実績や復帰率、時短勤務の運用実態、リモートワークの定着度、女性管理職の有無といった情報は、求人票だけでは分かりにくい項目です。カテゴリを問わず、面談時に「これらの情報をどこまで具体的に答えられるか」を試金石にすると、担当者・エージェントの実力が見えやすくなります。
            </p>
            <p>
              IT特化型・総合型に加えて、女性のキャリア継続支援に焦点を当てた<strong>女性特化型</strong>のサービスを組み合わせれば、「技術の評価」と「働き方の条件」の両面から求人を検証できます。3つのカテゴリは排他的ではなく、組み合わせて使えるピースだと考えてください。
            </p>
          </div>
        </div>
      </section>

      {/* おすすめ転職エージェント */}
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

      {/* FAQ */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map(
              (
                faq: { name: string; acceptedAnswer: { text: string } },
                i: number
              ) => (
                <details
                  key={i}
                  className="group rounded-xl border overflow-hidden"
                  style={{ borderColor: "#d9c7b8" }}
                >
                  <summary
                    className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50"
                    style={{ color: "#7c3a55" }}
                  >
                    <span className="pr-4">{faq.name}</span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9662;
                    </span>
                  </summary>
                  <div
                    className="px-6 pb-4 text-sm text-text-light leading-relaxed"
                    style={{ borderTop: "1px solid #d9c7b8" }}
                  >
                    <p className="pt-4">{faq.acceptedAnswer.text}</p>
                  </div>
                </details>
              )
            )}
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考資料</h2>
          <ul className="space-y-3 text-sm text-text-light leading-relaxed">
            <li>
              ・出典: 厚生労働省「令和6年度職業紹介事業報告書の集計結果（速報）」令和8年3月31日公表（2026年6月参照）— 有料職業紹介事業所数30,561、常用就職件数888,993件、手数料収入約9,835億円、常用就職1件あたり手数料約103万円
            </li>
            <li>
              ・出典: 厚生労働省「職業紹介事業の業務運営要領」第6 手数料（2026年6月参照）— 求職者からの手数料徴収の原則禁止（職業安定法第32条の3第2項）と例外6職種、求人者から徴収する手数料の枠組み
            </li>
            <li>
              ・出典: e-Gov法令検索「職業安定法」（昭和22年法律第141号）（2026年6月参照）— 有料職業紹介事業の許可制（第30条）
            </li>
            <li>
              ・出典: 厚生労働省「人材サービス総合サイト」（2026年6月参照）— 許可・届出事業者の検索
            </li>
            <li>
              ・出典: リクナビNEXT「転職サイト・エージェントはいくつ使った？」ジャストシステム調査・2019年・転職経験者199名（2026年6月参照）— 平均登録数2.3社、1社のみ約26%
            </li>
          </ul>
          <p className="mt-4 text-xs text-text-light">
            ※ 本文中の統計は全業種を対象とした公的集計であり、IT業界・個別のエージェントの数値ではありません。各エージェントの最新のサービス内容・求人数は各社公式サイトでご確認ください。
          </p>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/agent-vs-site/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                転職エージェントと転職サイトの違い
              </h3>
              <p className="text-sm text-text-light">そもそもどちらを使うべきかを整理</p>
            </a>
            <a
              href="/articles/how-to-choose/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                エージェント選び方ガイド
              </h3>
              <p className="text-sm text-text-light">失敗しない選び方のチェックポイント</p>
            </a>
            <a
              href="/articles/beginner/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                未経験からエンジニアになる完全ガイド
              </h3>
              <p className="text-sm text-text-light">学習ロードマップと転職の進め方</p>
            </a>
            <a
              href="/articles/return-to-work/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d9c7b8" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>
                ブランクからの復職ガイド
              </h3>
              <p className="text-sm text-text-light">産育休・離職後の復帰戦略</p>
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
