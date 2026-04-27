import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "産休育休後のエンジニア復帰ガイド｜ブランクを埋める方法",
  description:
    "産休育休後にエンジニアとして復帰するための完全ガイド。ブランク期間の技術キャッチアップ方法、復帰先企業の選び方、時短勤務やリモートワーク可能な求人の探し方まで徹底解説します。スムーズな職場復帰を実現するためのノウハウを紹介します。",
  alternates: { canonical: "/articles/after-maternity/" },
  openGraph: {
    title: "産休育休後のエンジニア復帰ガイド｜ブランクを埋める方法",
    description:
      "産休育休後にエンジニアとして復帰するための完全ガイド。ブランク期間の技術キャッチアップ方法、復帰先企業の選び方、時短勤務やリモートワーク可能な求人の探し方まで徹底解説します。スムーズな職場復帰を実現するためのノウハウを紹介します。",
    url: "https://women-engineer-navi.pages.dev/articles/after-maternity/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "産休育休後のエンジニア復帰ガイド｜ブランクを埋める方法",
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
    "産休育休後にエンジニアとして復帰するための完全ガイド。ブランク期間の技術キャッチアップ方法、復帰先企業の選び方、時短勤務やリモートワーク可能な求人の探し方まで徹底解説します。スムーズな職場復帰を実現するためのノウハウを紹介します。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer-navi.pages.dev/articles/after-maternity/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "産休育休後のブランクは転職に不利ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT業界では人材不足が続いているため、産休育休による1〜2年のブランクは大きなマイナスにはなりません。ブランク中の技術キャッチアップの努力（自己学習、資格取得、個人開発など）をアピールすることで、より好条件での転職が可能になります。エージェントにブランク期間の活動を伝えることが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "復帰時に年収が下がることはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "元の職場に復帰する場合、基本給は維持されることが多いですが、時短勤務を選択すると勤務時間に応じて給与が減額されることがあります。転職の場合は、スキルと経験に見合った年収交渉が可能です。エージェントを活用して適正な年収で転職しましょう。時短勤務でも年収450万円以上の求人は多数あります。",
      },
    },
    {
      "@type": "Question",
      name: "復帰前にどのくらいの準備期間が必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "復帰の2〜3ヶ月前から準備を始めるのが理想です。技術のキャッチアップ、開発環境の構築、転職エージェントへの登録などを計画的に進めましょう。毎日30分〜1時間の学習で十分な準備ができます。無理のないペースで進めることが大切です。",
      },
    },
    {
      "@type": "Question",
      name: "育休中に転職活動を始めてもいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、育休中に転職活動を始めることは法的にも問題ありません。ただし、現職の育休制度の規定を確認し、復帰義務期間がある場合はそれを考慮しましょう。エージェントへの相談や情報収集は育休中から始めておくと、復帰後の転職活動がスムーズに進みます。",
      },
    },
    {
      "@type": "Question",
      name: "復帰後に転職するベストなタイミングは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "復帰後3〜6ヶ月が一つの目安です。復帰直後は生活リズムの構築に集中し、ペースが掴めてから転職活動を始めるのが理想的です。ただし、復帰先の環境に明らかな問題がある場合は、早めにエージェントに相談して次の選択肢を検討しましょう。",
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
          background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "産休育休後のエンジニア復帰ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3aed" }}
            >
              状況別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              産休育休後のエンジニア復帰ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                ブランクを埋めてスムーズに復帰する方法
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年4月27日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}
          >
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li>
                <a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>
                  1. 産休育休後の復帰が不安な理由
                </a>
              </li>
              <li>
                <a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>
                  2. ブランク中の技術変化にどう対応するか
                </a>
              </li>
              <li>
                <a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>
                  3. 復帰前にやっておくべき準備5つ
                </a>
              </li>
              <li>
                <a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>
                  4. 復帰先の選び方と確認ポイント
                </a>
              </li>
              <li>
                <a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>
                  5. 時短勤務とリモートワークの活用
                </a>
              </li>
              <li>
                <a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>
                  6. スキルキャッチアップの具体的方法
                </a>
              </li>
              <li>
                <a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>
                  7. おすすめ転職エージェント
                </a>
              </li>
              <li>
                <a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>
                  8. 復帰成功事例
                </a>
              </li>
              <li>
                <a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>
                  9. よくある質問
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* 産休育休後の復帰が不安な理由 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">産休育休後の復帰が不安な理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              産休育休を取得した女性エンジニアの多くが、復帰に対して大きな不安を感じています。IT業界は技術の移り変わりが早く、半年〜2年のブランクでも「浦島太郎状態」になるのではないかという心配がつきものです。
            </p>
            <p>
              実際に、産休育休を取得した女性エンジニアを対象とした調査では、約70%が「復帰後のスキルギャップ」を最大の不安として挙げています。次いで「育児と仕事の両立」「復帰後のポジション・待遇」「同僚や上司の理解」などが上位に来ています。
            </p>
            <p>
              しかし、基本的なプログラミングスキルや論理的思考力は数年のブランクで失われるものではありません。変化が大きいのはフレームワークのバージョンアップやツールの進化など表面的な部分が中心であり、計画的にキャッチアップすれば問題なく復帰できます。
            </p>
            <p>
              IT業界は慢性的な人材不足であり、実務経験のあるエンジニアは産休育休のブランクがあっても歓迎されます。復帰に対する不安を解消するために、正しい情報収集と計画的な準備が重要です。
            </p>
            <div
              className="rounded-xl border p-6 mt-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>
                復帰に対する主な不安
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>ブランク中の技術進歩への不安</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>復帰後のポジション・待遇への不安</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>育児と仕事の両立への心配</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>同僚や上司の理解が得られるかの不安</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>時短勤務でのキャリアアップの可否</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>急な子どもの体調不良への対応</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>保育園の送迎と勤務時間の調整</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ブランク中の技術変化にどう対応するか */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ブランク中の技術変化にどう対応するか</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT業界の技術は日々進化していますが、すべての変化を網羅する必要はありません。自分の専門分野における主要な変化に絞って学習するのが最も効率的です。
            </p>
            <p>
              フロントエンドエンジニアであれば、使用しているフレームワーク（React、Vue.js等）のメジャーアップデート内容を確認し、新しいAPIやパターンを理解しましょう。バックエンドエンジニアであれば、使用言語のバージョンアップ内容やクラウドサービスの新機能に注目します。
            </p>
            <p>
              技術トレンドの把握には、Qiita、Zenn、はてなブログなどの技術メディアをフォローするのが効果的です。RSSリーダーやXのリストを活用して、効率的に情報を収集しましょう。
            </p>
            <p>
              また、技術カンファレンスのアーカイブ動画を視聴するのもおすすめです。最新の技術動向を短時間で把握でき、復帰後の会話についていけるようになります。育休中の隙間時間を活用して少しずつ情報収集しておくと、復帰時のキャッチアップがスムーズです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                フロントエンド分野
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                React/Next.jsのApp Router対応、Server Components、CSS-in-JSの動向、TypeScriptの新機能、テストフレームワーク（Vitest等）の進化をチェックしましょう。
              </p>
            </div>
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                バックエンド分野
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                使用言語のバージョンアップ、クラウドサービスの新機能、コンテナ技術（Docker/Kubernetes）の進化、CI/CDパイプラインのトレンドを確認しましょう。
              </p>
            </div>
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                インフラ分野
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                AWS/GCP/Azureの新サービス、IaCツール（Terraform/Pulumi）の進化、ゼロトラストセキュリティ、可観測性（Observability）のトレンドをキャッチアップしましょう。
              </p>
            </div>
            <div
              className="rounded-xl border bg-white p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                共通スキル
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                AI/ChatGPTの業務活用、GitHub Copilotなどの開発支援ツール、アジャイル/スクラムの最新プラクティスは分野を問わず押さえておきたいトピックです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 復帰前にやっておくべき準備5つ */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">復帰前にやっておくべき準備5つ</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              スムーズな復帰のために、以下の5つの準備を計画的に進めましょう。復帰の2〜3ヶ月前から始めるのが理想的ですが、育児の状況に合わせて無理のないペースで取り組みましょう。
            </p>
            <p>
              第一に、技術のキャッチアップです。毎日30分〜1時間、子どもの昼寝中や就寝後に技術ブログを読んだり、ハンズオンで手を動かしたりしましょう。完璧を目指す必要はなく、「何が変わったのか」を把握する程度で十分です。
            </p>
            <p>
              第二に、開発環境の構築です。最新のツールやフレームワークをローカル環境にセットアップし、簡単なサンプルアプリを動かしてみましょう。手が覚えている感覚を取り戻すのに効果的です。
            </p>
            <p>
              第三に、保育園や家庭の体制の整備です。保育園の送迎ルート、病気時の対応策（病児保育、祖父母のサポート等）、家事の分担など、生活面の準備も欠かせません。
            </p>
            <p>
              第四に、キャリアプランの再検討です。復帰後にどのようなキャリアを歩みたいか、現職に復帰するか転職するかを含めて考えましょう。エージェントに相談して市場動向を把握するのも良い方法です。
            </p>
            <p>
              第五に、メンタル面の準備です。復帰後しばらくは育児と仕事の両立に苦労することもあります。完璧を求めず、周囲の助けを借りることを事前に心がけておきましょう。
            </p>
          </div>
        </div>
      </section>

      {/* 復帰先の選び方と確認ポイント */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">復帰先の選び方と確認ポイント</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              復帰先を選ぶ際には、制度の有無だけでなく、実際の運用実態を確認することが最も重要です。産休育休制度は法律で義務付けられていますが、実際に活用されているかどうかは企業によって大きく異なります。
            </p>
            <p>
              面接や企業研究の段階で、以下のポイントを確認しましょう。エージェントを通じて聞くことで、直接聞きにくい情報も入手できます。
            </p>
            <div
              className="rounded-xl border p-6 mt-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>
                復帰先選びのチェックポイント
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>産休育休の取得率と復帰率（具体的な数字を確認）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>時短勤務制度の詳細（子どもが何歳まで可能か）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>リモートワーク制度（フルリモートかハイブリッドか）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>フレックスタイム制度（コアタイムの有無と時間帯）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>看護休暇の日数と有給扱いかどうか</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>子育て中の女性エンジニアの在籍数</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>急な休みや早退への対応体制</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#0891b2" }} className="mt-1 font-bold">
                    &#10003;
                  </span>
                  <span>くるみん認定・えるぼし認定の取得状況</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 時短勤務とリモートワークの活用 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">時短勤務とリモートワークの活用</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              産休育休後の復帰では、時短勤務とリモートワークを組み合わせることで、育児との両立がしやすくなります。
            </p>
            <p>
              時短勤務は、1日の所定労働時間を6時間に短縮する制度で、法律上は子どもが3歳になるまで利用できます。企業によっては小学校入学まで、あるいはそれ以降まで延長できるケースもあります。
            </p>
            <p>
              リモートワークと時短勤務を組み合わせれば、通勤時間がなくなるため、実質的な自由時間が大幅に増えます。例えば、9時〜15時の6時間勤務をフルリモートで行えば、保育園の送迎も余裕を持って対応できます。
            </p>
            <p>
              ただし、時短勤務を選択すると給与が減額されることがあるため、事前に確認しておきましょう。転職時にエージェントを通じて年収交渉を行うことで、時短でも適正な待遇を得ることが可能です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>
                時短＋リモートの組み合わせ
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                9時〜15時の6時間勤務をフルリモートで実施。通勤時間ゼロで、保育園の送迎にも余裕が生まれます。最も人気の高い働き方です。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                フルタイム＋フレックス
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                コアタイムなしのフレックスで、朝8時〜16時の勤務など。フルタイムの給与を維持しながら、夕方早めに切り上げて育児の時間を確保できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* スキルキャッチアップの具体的方法 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">スキルキャッチアップの具体的方法</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              限られた時間の中で効率的にスキルをキャッチアップするための具体的な方法を紹介します。
            </p>
            <p>
              最も効果的なのは「手を動かすこと」です。技術ブログを読むだけでなく、実際にコードを書いて動かしてみましょう。復帰前に小さな個人プロジェクトを立ち上げて、最新の技術スタックで開発してみるのがおすすめです。
            </p>
            <p>
              オンライン学習プラットフォーム（Udemy、Coursera、freeCodeCamp等）を活用して、体系的に学び直すのも効果的です。動画教材なら家事をしながらでも耳で学べます。
            </p>
            <p>
              GitHubでのコントリビューションも復帰準備として有効です。オープンソースプロジェクトのバグ修正やドキュメント改善に取り組むことで、実践的なスキルを取り戻せます。転職時のアピール材料にもなります。
            </p>
            <p>
              また、同じ境遇のママエンジニアのコミュニティに参加することで、情報交換やモチベーション維持ができます。復帰に成功した先輩の体験談は大きな参考になります。
            </p>
          </div>
        </div>
      </section>

      {/* おすすめエージェント */}
      <section id="sec7" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              あなたの転職を成功に導く、おすすめのエージェントを紹介します。複数登録して比較検討するのが転職成功の秘訣です。
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">type女性の転職エージェント</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  女性特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                産休育休後の復帰支援に豊富な実績。時短勤務可能・リモートワーク対応の求人を中心に紹介。女性のライフイベントに寄り添った手厚いキャリア相談が特徴です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">レバテックキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  IT特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                リモートワーク求人が約60%と業界トップクラス。ブランクがあっても技術力を正当に評価した求人を提案。女性アドバイザーの指名も可能です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">リアルミーキャリア</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  ワーママ特化型
                </span>
              </div>
              <p className="text-sm text-text-light">
                ワーキングマザーの転職に完全特化。時短勤務前提の求人が豊富で、育児との両立を最優先にした企業マッチングが強みです。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-bold">doda</h3>
                <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>
                  総合型
                </span>
              </div>
              <p className="text-sm text-text-light">
                業界最大級の求人数。リモートワーク・時短勤務可の求人を効率的に検索可能。スカウト機能で条件に合った企業からオファーも受け取れます。
              </p>
            </div>
          </div>
          <div
            className="mt-8 rounded-xl p-6 text-center"
            style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}
          >
            <p className="font-bold text-lg mb-2">まずは無料相談から始めましょう</p>
            <p className="text-sm text-text-light mb-4">
              複数のエージェントに登録して比較検討するのがおすすめです。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#f97066" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>

      {/* 成功事例 */}
      <section id="sec8" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">成功事例・体験談</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                Kさん（32歳・育休1年半後に転職）
              </h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">Web企業のバックエンドエンジニア / 年収450万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p>
                  <p className="text-sm font-bold">SaaS企業のバックエンドエンジニア（フルリモート）/ 年収480万円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">
                1年半の育休後、元の職場がフルリモート非対応だったため転職を決意。育休中にPythonの最新フレームワークを独学し、レバテックキャリア経由でフルリモートのSaaS企業に転職。年収30万円アップに加え、通勤時間がなくなり育児との両立がスムーズになりました。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>
                Lさん（35歳・育休2年後に転職）
              </h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f8fafb" }}>
                  <p className="text-xs font-bold text-text-light mb-1">転職前</p>
                  <p className="text-sm font-bold">SIer企業のSE / 年収420万円</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#ecfeff" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#0891b2" }}>転職後</p>
                  <p className="text-sm font-bold">IT企業のフロントエンドエンジニア（時短勤務）/ 年収400万円</p>
                </div>
              </div>
              <p className="text-sm text-text-light">
                2年のブランク後、時短勤務を条件に転職活動を開始。type女性の転職エージェントで、育児に理解のある企業を紹介してもらいReactの開発チームに参加。年収は若干下がったものの、残業ゼロで17時退社を実現し、家庭との両立を果たしています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec9" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
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
                  style={{ borderColor: "#d1dce5" }}
                >
                  <summary
                    className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50"
                    style={{ color: "#0891b2" }}
                  >
                    <span className="pr-4">{faq.name}</span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9662;
                    </span>
                  </summary>
                  <div
                    className="px-6 pb-4 text-sm text-text-light leading-relaxed"
                    style={{ borderTop: "1px solid #d1dce5" }}
                  >
                    <p className="pt-4">{faq.acceptedAnswer.text}</p>
                  </div>
                </details>
              )
            )}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/articles/mama-engineer/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                ママエンジニアの転職・復職ガイド
              </h3>
              <p className="text-sm text-text-light">育児と仕事の両立方法を解説</p>
            </a>
            <a
              href="/articles/remote-jobs/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                リモートワーク求人ガイド
              </h3>
              <p className="text-sm text-text-light">在宅勤務のメリットと探し方</p>
            </a>
            <a
              href="/articles/maternity-leave-rate/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                産休育休取得率が高いIT企業
              </h3>
              <p className="text-sm text-text-light">女性エンジニアの企業選び</p>
            </a>
            <a
              href="/articles/work-life-balance/"
              className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>
                エンジニアと育児の両立方法
              </h3>
              <p className="text-sm text-text-light">先輩ママエンジニアのリアル</p>
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
              background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              産休育休後もキャリアを諦めない
            </h2>
            <p className="text-white/90 mb-6">
              ブランクがあっても大丈夫。あなたに合った復帰先を見つけましょう。
            </p>
            <a
              href="/ranking/"
              className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: "#f97066", color: "#ffffff" }}
            >
              おすすめエージェントランキングを見る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}