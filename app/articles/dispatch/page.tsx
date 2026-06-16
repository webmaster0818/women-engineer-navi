import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性派遣エンジニアという働き方ガイド｜時給・年収相場・正社員化の道",
  description:
    "女性が派遣エンジニアとして働くためのガイド。一般派遣・常用型・SESの違い、時給相場（平均2,188円・Python2,568円）や年収（約400〜450万円）、残業少なめ・勤務地が選べる・ブランク後に入りやすいメリットと不安定さ・スキル偏りのデメリット、紹介予定派遣での正社員化（直接雇用56%）まで実データで解説します。",
  alternates: { canonical: "/articles/dispatch/" },
  openGraph: {
    title: "女性派遣エンジニアという働き方ガイド｜時給・年収相場・正社員化の道",
    description:
      "女性派遣エンジニアの仕組み・時給年収相場・メリットデメリット・正社員化の道・向いている人を実データで徹底解説。",
    url: "https://women-engineer.com/articles/dispatch/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性派遣エンジニアという働き方ガイド｜時給・年収相場・正社員化の道",
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
    "女性派遣エンジニアの仕組み・時給年収相場・メリットデメリット・正社員化の道・向いている人を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/dispatch/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "派遣エンジニアの時給・年収の相場はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT系派遣の平均時給はおおむね2,000円前後で、リクルートITスタッフィングの調査では派遣エンジニアの平均時給単価は約2,188円です。一般事務派遣の約1,500円と比べて1.5倍ほど高い水準です。フルタイム（1日8時間・月20日）で働いた場合の年収はおよそ400〜450万円が目安。言語別ではPythonが下限時給約2,568円、Javaが約2,468円と高く、上流工程やAI・データ領域を担えると時給がさらに上がります。",
      },
    },
    {
      "@type": "Question",
      name: "派遣エンジニアとSESは何が違うのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最大の違いは「指揮命令権が誰にあるか」です。派遣（労働者派遣契約）では派遣先企業があなたに直接指示を出せますが、SES（準委任契約）では指示を出すのは所属するSES企業側で、派遣先が直接指示することは原則できません。雇用主は派遣・SESとも自社（派遣会社／SES企業）ですが、派遣には同じ部署で働けるのは原則3年までという「3年ルール」があり、SESや常用型派遣はその対象外です。時給・条件が契約に明示される派遣のほうが、待遇の透明性は高い傾向があります。",
      },
    },
    {
      "@type": "Question",
      name: "ブランクがあっても派遣エンジニアとして復帰できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "復帰しやすい働き方です。派遣は正社員採用ほど選考のハードルが高くなく、登録時のコーディネーターがキャリア相談や復帰前研修、スキルの棚卸しをサポートしてくれます。出産・育児で一度離れた人でも、時短・週4・残業少なめなど条件を細かく指定して仕事を選べるため、いきなりフルコミットせず段階的に勘を取り戻せます。まずは保守運用やテスト、社内SE的な役割から再開し、徐々に開発業務へ広げていく復帰の仕方が現実的です。",
      },
    },
    {
      "@type": "Question",
      name: "派遣から正社員になることはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。代表的なのが紹介予定派遣で、最長6か月の派遣期間を経て双方が合意すれば直接雇用（正社員・契約社員）に切り替わります。ある調査では紹介予定派遣でスタートした人の56%が直接雇用に切り替わり、打診まで含めると74%（約4人に3人）に社員登用のチャンスがありました。常用型派遣（派遣会社の正社員として派遣される形）を選べば最初から無期雇用で安定し、3年ルールの対象外で長く同じ現場に関わることもできます。",
      },
    },
    {
      "@type": "Question",
      name: "派遣エンジニアは女性にとってどんなメリットがありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "残業が少ない案件を選びやすく、勤務地・勤務日数・期間を自分のライフスタイルに合わせられる点が大きなメリットです。家庭や育児と両立したい人、ワークライフバランスを重視したい人に向いています。未経験やブランクからでも入りやすく、複数の現場を経験して自分に合う環境や技術を見極められるのも利点です。一方で雇用が不安定になりがち・特定の作業に偏りスキルが広がりにくいといった面もあるため、計画的に経験を積み、正社員化や上流工程へのステップアップを意識することが大切です。",
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
              { label: "派遣エンジニアという働き方ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              働き方ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性派遣エンジニアという働き方ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                時給・年収相場・正社員化の道のりを実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 派遣エンジニアとは（一般派遣・常用型・SESの違い）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 時給・年収相場（言語別・他職種比較）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 派遣エンジニアのメリット・デメリット</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 女性が派遣という働き方を選ぶ理由</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 派遣から正社員を目指すには</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 向いている人・始める前の注意点</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 体験事例</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">派遣エンジニアとは（一般派遣・常用型・SESの違い）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              派遣エンジニアとは、人材派遣会社と雇用契約を結び、派遣先の企業で開発・運用・テストなどのIT業務に従事する働き方です。給与の支払い元（雇用主）は派遣会社ですが、実際に働く現場は派遣先企業――この「雇用と就業が分かれている」点が、正社員やフリーランスと大きく異なります。
            </p>
            <p>
              派遣には大きく<strong>一般派遣（登録型）</strong>と<strong>常用型派遣（無期雇用型）</strong>の2種類があります。さらに、似た形態でよく混同されるのが<strong>SES（システムエンジニアリングサービス）</strong>です。SESは派遣ではなく「準委任契約」で、もっとも大きな違いは<strong>指揮命令権が誰にあるか</strong>。派遣では派遣先が直接あなたに指示を出せますが、SESでは指示を出すのは所属するSES企業側で、派遣先が直接指示することは原則できません。
            </p>
            <p>
              なお、かつて存在した「特定派遣」は2015年の法改正で2018年9月末に廃止され、現在は常用型派遣に一本化されています。働き方を選ぶときは、雇用が登録型か無期雇用かを必ず確認しましょう。
            </p>
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#efe3d8" }}>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>一般派遣（登録型）</th>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>常用型派遣（無期雇用）</th>
                    <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>SES（準委任）</th>
                  </tr>
                </thead>
                <tbody className="text-text-light">
                  <tr>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>雇用主</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>派遣会社（案件ごと）</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>派遣会社（無期）</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>SES企業（多くは正社員）</td>
                  </tr>
                  <tr style={{ backgroundColor: "#f0e7dd" }}>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>指揮命令</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>派遣先企業</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>派遣先企業</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>所属するSES企業</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>3年ルール</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>適用（同部署は原則3年）</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>対象外（長く就業可）</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>対象外</td>
                  </tr>
                  <tr style={{ backgroundColor: "#f0e7dd" }}>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>雇用の安定</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>案件終了で契約が切れる</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>案件がなくても給与あり</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>比較的安定（自社雇用）</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>向いている人</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>条件を柔軟に選びたい人</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>安定して長く働きたい人</td>
                    <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>幅広い現場を経験したい人</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 時給・年収 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">時給・年収相場（言語別・他職種比較）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT系派遣の平均時給はおおむね<strong>2,000円前後</strong>。リクルートITスタッフィングの調査では派遣エンジニアの平均時給単価は<strong>約2,188円</strong>とされ、一般事務派遣の約1,500円、IT系アルバイトの約1,000円前後と比べて<strong>1.5〜2倍近い水準</strong>です。フルタイム（1日8時間・月20日）で換算すると年収はおよそ<strong>400〜450万円</strong>が目安になります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>時給の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>IT派遣の平均</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約2,188円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>年収換算で約400〜450万円</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Python</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>下限 約2,568円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>AI・ビッグデータ需要で高単価</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Java</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>下限 約2,468円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>業務系・上流工程で上振れ</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>一般事務派遣</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約1,500円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>比較用。IT派遣との差は大きい</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>IT系アルバイト</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約1,000円前後</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>比較用。スキルで差がつく</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>時給を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>高需要言語</strong>（Python×AI・データ、Java×業務系）の実務経験を積む</li>
              <li>② <strong>上流工程</strong>（要件定義・設計・テスト設計）を担えるようにする</li>
              <li>③ <strong>登録会社を複数活用</strong>して同条件でも時給の高い案件を比較する</li>
            </ul>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            なお、エンジニアの時給は性別ではなく経験・スキル・担当工程・勤務地で決まります。同じ案件でも交渉や会社選びで時給に差が出るため、適正額を把握しておくことが大切です。
          </p>
        </div>
      </section>

      {/* sec3 メリット・デメリット */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">派遣エンジニアのメリット・デメリット</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>派遣という働き方には、ライフスタイルに合わせやすい一方で、計画的に動かないと埋もれやすい側面もあります。両面を理解したうえで選びましょう。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border p-6" style={{ borderColor: "#7c3a55", backgroundColor: "#efe3d8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>メリット</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>残業少なめを選べる</strong>。定時で帰れる案件を条件指定でき、プライベートと両立しやすい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>勤務地・日数・期間を選べる</strong>。自宅近く、週4、時短など希望に合わせやすい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>ブランク・未経験から入りやすい</strong>。正社員採用よりハードルが低く、コーディネーターの支援がある</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>時給が高め</strong>。一般事務派遣の1.5倍前後で、スキル次第でさらに上がる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>複数の現場を経験できる</strong>。自分に合う技術・職場を見極められる</span></li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#c15f47", backgroundColor: "#fdf6ee" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#c15f47" }}>デメリット</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&times;</span><span><strong>雇用が不安定になりがち</strong>。登録型は案件終了で契約が切れ、次が決まるまで収入が途切れることも</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&times;</span><span><strong>スキルが偏りやすい</strong>。特定の作業・運用に固定され、上流や新技術に触れにくい現場もある</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&times;</span><span><strong>3年ルール</strong>で同じ部署に居続けられず、慣れた頃に環境が変わることがある</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&times;</span><span><strong>賞与・昇給が限定的</strong>。正社員と比べ生涯年収やキャリアの積み上げで差がつきやすい</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">&times;</span><span><strong>裁量が小さい場合がある</strong>。指示された範囲の業務が中心になりやすい</span></li>
              </ul>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            デメリットの多くは、<strong>常用型（無期雇用）派遣を選ぶ・上流工程に挑戦する・正社員化を視野に入れる</strong>ことで軽減できます。「派遣だから」と受け身にならず、経験を資産化する姿勢が長く働く鍵です。
          </p>
        </div>
      </section>

      {/* sec4 女性が選ぶ理由 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が派遣という働き方を選ぶ理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度ですが、派遣は「働く条件を自分で決められる」ことから、ライフイベントを抱える女性に選ばれてきた働き方です。とくに次のような理由で支持されています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 育児・家庭と両立しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">残業少なめ・時短・週4・自宅近くなど、条件を細かく指定して案件を選べます。子どもの送り迎えや家庭の予定に合わせた働き方を実現しやすいのが最大の理由です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. ブランク後の社会復帰の入口になる</h3>
              <p className="text-text-light text-sm leading-relaxed">出産・育児で離れた後でも、コーディネーターのキャリア相談や復帰前研修を受けながら段階的に戻れます。いきなり正社員より心理的ハードルが低いのが利点です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 未経験から実務経験を積める</h3>
              <p className="text-text-light text-sm leading-relaxed">未経験可の案件やポテンシャル枠があり、現場で実務経験を積みながらスキルを伸ばせます。職務経歴に「実務」を書けるようになると、その後の選択肢が広がります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 自分に合う環境を見極められる</h3>
              <p className="text-text-light text-sm leading-relaxed">複数の現場を経験することで、女性が働きやすい職場・両立しやすいチームの雰囲気を体感できます。紹介予定派遣なら「お試し」を経て正社員を判断できます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 正社員を目指すには */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">派遣から正社員を目指すには</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              派遣は「正社員になれない働き方」ではありません。むしろ、現場の実務経験を積みながら直接雇用へ移る現実的なルートがいくつもあります。代表的な3つの道を押さえておきましょう。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              ["STEP1", "紹介予定派遣を活用する", "最長6か月の派遣期間を経て、双方の合意で正社員・契約社員へ。ある調査では紹介予定派遣スタートの56%が直接雇用に切り替わり、打診まで含めると74%（約4人に3人）にチャンスがありました。"],
              ["STEP2", "常用型（無期雇用）派遣を選ぶ", "登録型ではなく派遣会社の正社員として就業する形。最初から無期雇用で安定し、3年ルールの対象外。腰を据えて経験を積みながら直接雇用のオファーを待てます。"],
              ["STEP3", "派遣先からの正社員登用を狙う", "現場で評価されると、3年の抵触日前後に派遣先から直接雇用を打診されることがあります。担当業務で成果を出し、上流工程にも手を挙げておくと声がかかりやすくなります。"],
              ["STEP4", "実務経験を武器に転職する", "派遣で得た実務経験とポートフォリオを携え、IT特化型エージェント経由で正社員転職へ。『派遣での実務◯年』は未経験よりはるかに強い武器になります。"],
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

      {/* sec6 向いている人・注意点 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">向いている人・始める前の注意点</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>派遣エンジニアが向いている人</h3>
              <ul className="space-y-3 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>育児・介護と両立し、勤務時間や日数を自分で決めたい人</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ブランクや未経験から、まず実務経験を積みたい人</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>いろいろな現場を見て、自分に合う環境を探したい人</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>残業を抑えてワークライフバランスを重視したい人</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>将来は紹介予定派遣などで正社員も視野に入れたい人</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#c15f47" }}>始める前の注意点</h3>
              <ul className="space-y-3 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">!</span><span>「登録型か常用型か」を契約前に必ず確認する（安定性が大きく異なる）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">!</span><span>SES案件は派遣と仕組みが違う。指揮命令や契約形態を確認する</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">!</span><span>担当業務がスキルアップにつながるか（運用一辺倒に固定されないか）を見る</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">!</span><span>残業実態・産休育休の取得実績など、求人票に出ない情報を担当者に確認する</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="mt-1 font-bold">!</span><span>受け身にならず、上流工程や正社員化を意識して経験を資産化する</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>派遣登録だけでなく、将来の正社員化や条件交渉まで見据えるなら、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。派遣で積んだ実務経験を正社員転職につなげたいときに、技術を理解したアドバイザーが提案してくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと年収交渉力に定評があり、派遣から正社員へのステップアップ相談にも向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。残業少なめ・時短など働き方の条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">登録先選びで働き方の質が変わる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合った担当者と案件を見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec8 体験事例 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">体験事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代後半・育児中・派遣→紹介予定派遣で正社員）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">出産で離職・ブランク2年 / 時給1,500円の事務派遣</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">社内SEとして正社員登用 / 残業ほぼなし・時短可</p></div>
              </div>
              <p className="text-sm text-text-light">復帰前研修でExcel・SQLを学び直し、まずIT派遣の運用サポートから再開。紹介予定派遣の案件で半年勤務した後、双方合意で社内SEとして直接雇用に。残業少なめ・時短勤務OKの環境を確保しました。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（20代後半・未経験→常用型派遣でPython）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">販売職（IT未経験）/ 年収300万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">常用型派遣のPython開発 / 時給2,400円・無期雇用</p></div>
              </div>
              <p className="text-sm text-text-light">未経験可の常用型派遣に登録し、研修後にデータ処理の案件へ。無期雇用で案件の合間も給与が出る安定性に納得しつつ、Python×データの実務を積んで時給を引き上げ。次は正社員のデータエンジニアを目指しています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec9" className="py-10">
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
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/ses-vs-jisha/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>SES・派遣・自社開発の違い</h3><p className="text-sm text-text-light">働き方ごとの仕組みを比較</p></a>
            <a href="/articles/work-life-balance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ワークライフバランスの実現</h3><p className="text-sm text-text-light">残業を抑えて長く働くコツ</p></a>
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアのキャリアパス</h3><p className="text-sm text-text-light">派遣から正社員・上流への道</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">自分に合った働き方を見つけましょう</h2>
            <p className="text-white/90 mb-6">派遣からのスタートも、正社員化も。まずはエージェントに無料相談して、あなたに合うキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
