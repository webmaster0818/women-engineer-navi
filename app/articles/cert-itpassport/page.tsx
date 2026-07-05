import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性のITパスポート試験ガイド｜合格率48.6%・未経験の最初の一歩【2026年】",
  description:
    "ITパスポート試験（iパス）を未経験からITを目指す女性向けに解説。IPA公式データに基づく試験概要（CBT随時・受験料7,500円・100問120分）、令和7年度合格率48.6%、出題範囲と合格基準、勉強の進め方、教育訓練給付・無料講座など費用を抑える公的支援、転職での評価の実際まで。",
  alternates: { canonical: "/articles/cert-itpassport/" },
  openGraph: {
    title: "女性のITパスポート試験ガイド｜合格率48.6%・未経験の最初の一歩【2026年】",
    description:
      "ITパスポート試験をIPA公式データで解説。CBT随時・7,500円・令和7年度合格率48.6%。未経験女性の最初の一歩としての活かし方と公的支援の使い方。",
    url: "https://women-engineer.com/articles/cert-itpassport/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性のITパスポート試験ガイド｜合格率48.6%・未経験の最初の一歩【2026年】",
  datePublished: "2026-07-05",
  dateModified: "2026-07-05",
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
    "ITパスポート試験をIPA公式データで解説。CBT随時・7,500円・令和7年度合格率48.6%。未経験女性の最初の一歩としての活かし方と公的支援の使い方。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/cert-itpassport/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ITパスポートは未経験・文系の女性でも合格できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "十分に狙えます。ITパスポートは「ITを利活用するすべての社会人・学生」を対象とした国家試験で、受験資格や年齢制限はなく、出題はすべて四肢択一（プログラミングの実技はありません）。IPAの統計では令和7年度（2025年4月〜2026年3月）の合格率は48.6%と、受験者のほぼ2人に1人が合格しています（IPA統計情報、2026年7月参照）。IT資格の中では最も入門的な位置づけ（ITスキル標準レベル1）です。",
      },
    },
    {
      "@type": "Question",
      name: "ITパスポートの合格率と合格基準を教えてください。",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPAの統計によると、令和7年度は応募者307,266人・受験者271,352人・合格者132,012人で、合格率は48.6%でした。合格基準は「総合評価点が1,000点満点中600点以上」かつ「ストラテジ系・マネジメント系・テクノロジ系の分野別評価点がそれぞれ300点以上」の両方を満たすこと。採点はIRT（項目応答理論）方式です。苦手分野を捨てると分野別基準で不合格になり得るため、3分野をまんべんなく学ぶ必要があります（IPA公式サイト、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "ITパスポートはいつ・どこで受けられますか？費用はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "全国47都道府県の試験会場で、CBT（Computer Based Testing）方式により年間を通じて随時実施されています。受験手数料は7,500円（税込）、試験時間は120分・100問です。会場により午前・午後・夕方の時間帯があり、都合のよい日時・会場を選んで申し込めます。一斉試験を待つ必要がないため、仕事や育児のスケジュールに合わせて受験日を設定しやすいのが特徴です（IPA公式サイト、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "ITパスポートはエンジニア転職で有利になりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "正直にお伝えすると、ITパスポートは「ITを利活用する社会人向け」の入門資格であり、エンジニア専門の資格ではないため、これ単体でエンジニア転職の決め手にはなりにくいです。ただし、異業種からのキャリアチェンジでは「ITの基礎を体系的に学び始めた証明」として学習意欲を示せます。IPAも企業の採用活動でエントリーシートへの記入を求める動きが広がっていると紹介しています。エンジニア転職で評価される本命は一段上の基本情報技術者試験（レベル2）で、ITパスポート→基本情報の順で進むのが定番ルートです。",
      },
    },
    {
      "@type": "Question",
      name: "ITパスポートの次は何を目指せばよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "エンジニアを目指すなら、同じIPAの基本情報技術者試験（ITスキル標準レベル2）が王道です。ITパスポートで学ぶ3分野の知識がそのまま土台になります。また、学習費用を抑えたい場合は、経済産業省・IPAのポータル「マナビDX」の無料講座や、雇用保険の教育訓練給付制度（対象講座の受講費用の一部が支給）を併用できます。当サイトの公的支援まとめ記事から探せます。",
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
              { label: "ITパスポート試験ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              資格ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性のITパスポート試験ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                合格率48.6%・未経験の「最初の一歩」をIPA公式データで解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月5日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. ITパスポート試験とは（試験概要）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 難易度・合格率（IPA公式データ）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 未経験女性の「最初の一歩」に向く理由</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 出題範囲と合格基準の注意点</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 勉強の進め方（STEP）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 費用を抑える公的支援（無料講座・給付金）</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 転職での評価の実際（正直な話）</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 次に目指す資格</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 試験概要 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ITパスポート試験とは（試験概要）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ITパスポート試験（iパス）は、独立行政法人IPA（情報処理推進機構）が実施する<strong>国家試験</strong>です。「情報処理の促進に関する法律」に基づく情報処理技術者試験のひとつで、<strong>ITを利活用するすべての社会人・これから社会人となる学生が備えておくべき、ITに関する基礎的な知識を証明できる試験</strong>と位置づけられています（IPA公式サイト、2026年7月参照）。ITスキル標準（ITSS）では<strong>レベル1</strong>で、基本情報技術者試験（レベル2）の一段手前にあたる、IT系国家試験の入門です。
            </p>
            <p>
              出題はAI・ビッグデータ・IoTといった新しい技術や、経営戦略・マーケティング・財務・法務などの経営全般、セキュリティ・ネットワークなどのIT知識、プロジェクトマネジメントまで幅広く、<strong>「ITと経営の共通言語」を一度に体系化できる</strong>のが特徴です。2023年のシラバス改訂では生成AIに関する項目・用語も追加され、内容は現在のIT環境に合わせて更新され続けています（最新はシラバスVer.6.5・2026年1月掲載）。
            </p>
            <p>
              試験は<strong>通年のCBT（Computer Based Testing）方式</strong>で、全国47都道府県の試験会場から都合のよい日時を選んで受験できます。プログラミングの実技はなく、すべて四肢択一。「いきなり基本情報はハードルが高い」という未経験の方が、最初に挑戦する試験として定番です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>試験の基本データ（IPA公式サイト・2026年7月確認）</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>主催：IPA（情報処理推進機構）／「情報処理の促進に関する法律」に基づく国家試験</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>方式：通年CBT（全国47都道府県の会場で随時受験・午前/午後/夕方の時間帯）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>出題：100問・四肢択一／試験時間120分（総合評価は92問で実施）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>分野：ストラテジ系 約35問／マネジメント系 約20問／テクノロジ系 約45問</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>合格基準：総合600点以上／1,000点 かつ 3分野それぞれ300点以上（IRT採点）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>受験手数料：7,500円（税込）／受験資格・年齢制限なし</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 難易度・合格率 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">難易度・合格率（IPA公式データ）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IPAが公開する統計によると、<strong>令和7年度（2025年4月〜2026年3月）の合格率は48.6%</strong>。年間30万人以上が応募する人気試験で、受験者のほぼ2人に1人が合格しています。合格率約40%の基本情報技術者試験より一段やさしく、「対策すれば未経験でも十分届く」水準です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>令和7年度実績</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>応募者数</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>307,266人</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>年間30万人超が応募</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>受験者数</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>271,352人</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>受験率88.3%</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>合格者数</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>132,012人</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>—</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>合格率</td><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>48.6%</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月次では44〜53%程度で変動</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>難易度（ITSS）</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>レベル1</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基本情報技術者（Lv2）の一段手前</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-light mt-3">出典: IPA「ITパスポート試験 統計情報（推移表）」令和8年5月時点の掲載データより当サイト集計（2026年7月参照）。</p>
        </div>
      </section>

      {/* sec3 女性に向く理由 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験女性の「最初の一歩」に向く理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              事務職や販売職からITへのキャリアチェンジを考え始めたとき、最初の壁は「何から始めればいいか分からない」こと。ITパスポートは、その<strong>最初の一歩を形にできる試験</strong>です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 実技なし・四肢択一のみで挑戦しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">プログラミングの実技試験はなく、すべて選択式。受験資格や年齢制限もありません。「パソコンは使うけれどITは専門外」という状態からでも、テキスト学習だけで合格ラインに届きます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. CBT随時開催で育児・仕事と両立できる</h3>
              <p className="text-text-light text-sm leading-relaxed">全国47都道府県で年間を通じて随時実施。午前・午後・夕方から時間帯を選べ、一斉試験の日程に生活を合わせる必要がありません。予定が読みにくいライフステージでも、自分のタイミングで受験・再挑戦できます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 生成AI・セキュリティなど「いまの基礎」が学べる</h3>
              <p className="text-text-light text-sm leading-relaxed">シラバスは継続的に改訂されており、生成AIやアジャイルなど現在の職場で話題になる用語・概念もカバー。IT職に進まない場合でも、どの職種でも使える知識として無駄になりません。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 企業の採用・人材育成での活用が広がっている</h3>
              <p className="text-text-light text-sm leading-relaxed">IPAは、社員の人材育成に幅広く活用され、採用活動でエントリーシートへの記入を求める動きが広がっていると紹介しています（IPA公式サイト、2026年7月参照）。履歴書に書ける国家試験として、学習意欲の客観的な証明になります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec4 出題範囲 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出題範囲と合格基準の注意点</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              出題は3分野・100問（四肢択一・120分）。<strong>ストラテジ系（経営全般）約35問、マネジメント系（IT管理）約20問、テクノロジ系（IT技術）約45問</strong>という構成で、ITだけでなく経営・法務の知識も問われるのが特徴です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>分野</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>出題数の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>主な内容</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ストラテジ系</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約35問</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>企業活動・法務・経営戦略・マーケティング・システム戦略</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>マネジメント系</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約20問</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>システム開発・プロジェクトマネジメント・サービスマネジメント・監査</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>テクノロジ系</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約45問</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>基礎理論・アルゴリズム・ハードウェア・データベース・ネットワーク・セキュリティ・AI</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>注意：「苦手分野の捨て問戦略」は使えない</h3>
            <p className="text-sm text-text-light leading-relaxed">
              合格には総合600点以上に加えて、<strong>3分野すべてで分野別評価点300点以上</strong>が必要です（IRT採点）。「経営は苦手だからテクノロジで稼ぐ」といった偏った戦略では、総合点が足りていても分野別基準で不合格になり得ます。3分野をまんべんなく学びましょう。ITが初めての方はテクノロジ系、経営知識が初めての方はストラテジ系に学習時間を多めに配分するのがコツです。
            </p>
          </div>
        </div>
      </section>

      {/* sec5 勉強法 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">勉強の進め方（STEP）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              前提知識によって必要な学習期間は大きく変わりますが、進め方の型はシンプルです。<strong>テキスト1冊＋過去問演習</strong>が王道で、通学は必須ではありません。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { step: "STEP 1", title: "シラバス・公式情報を確認する", body: "IPA公式サイトで最新シラバス（Ver.6.5）と試験概要を確認。出題範囲の全体像を先に見ておくと、テキストの読み方が変わります。" },
              { step: "STEP 2", title: "市販テキストを1冊決めて通読する", body: "ITパスポート対策のテキストを1冊選び、まず全体を通読。完璧に覚えようとせず、3分野の地図を頭に入れることを優先します。" },
              { step: "STEP 3", title: "IPA公式の過去問題で演習する", body: "IPAは過去問題を公式サイトで公開しています。分からなかった問題をテキストに戻って潰す、の繰り返しが最短ルート。無料の過去問演習サイトをスキマ時間に使うのも定番です。" },
              { step: "STEP 4", title: "CBT疑似体験ソフトウェアで操作に慣れる", body: "IPAが公式提供するCBT疑似体験ソフトウェアで、本番のパソコン操作（解答・見直し・後回し）を体験しておくと、当日慌てません。" },
              { step: "STEP 5", title: "受験日を先に申し込む", body: "CBTは随時開催なので「勉強が終わったら申し込む」だと先延ばしになりがち。先に受験日を決めて申し込むと、学習ペースが固まります。不合格でも再受験できます。" },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border bg-white p-6 flex gap-4" style={{ borderColor: "#d9c7b8" }}>
                <span className="shrink-0 font-bold" style={{ color: "#c15f47" }}>{s.step}</span>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>{s.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* sec6 公的支援 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">費用を抑える公的支援（無料講座・給付金）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              独学なら受験料7,500円＋テキスト代で挑戦できますが、「独学は続かない」という方は<strong>公的支援を使って講座費用を抑える</strong>選択肢があります。
            </p>
            <ul className="space-y-3 mt-2">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>マナビDX（経済産業省・IPA）</strong>：デジタルスキル講座のポータルで、無料で学べる講座も掲載されています。ITパスポート級の基礎から探せます。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>教育訓練給付制度（厚生労働省）</strong>：雇用保険の加入者等が対象で、指定講座の受講費用の一部が支給されます。ITパスポート対策講座も指定対象に含まれており、対象講座は厚労省の「教育訓練講座検索システム」で確認できます。</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span><strong>自治体・ハロートレーニングの職業訓練</strong>：離職中の方はハロートレーニング（公共職業訓練・求職者支援訓練）でIT基礎を学べるコースがあります。</span></li>
            </ul>
          </div>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            <a href="/articles/manabi-dx/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1 text-sm" style={{ color: "#7c3a55" }}>マナビDXの使い方</h3><p className="text-xs text-text-light">無料講座の探し方を解説</p></a>
            <a href="/articles/training-benefit-it/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1 text-sm" style={{ color: "#7c3a55" }}>教育訓練給付制度ガイド</h3><p className="text-xs text-text-light">給付の種類と講座の探し方</p></a>
            <a href="/articles/hello-training-it/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1 text-sm" style={{ color: "#7c3a55" }}>ハロートレーニング活用法</h3><p className="text-xs text-text-light">離職中に無料で学ぶ方法</p></a>
          </div>
        </div>
      </section>

      {/* sec7 転職での評価 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職での評価の実際（正直な話）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ここは正直にお伝えします。ITパスポートは「ITを利活用する社会人向け」の入門資格であり、<strong>これ単体でエンジニア転職の決め手になる資格ではありません</strong>。エンジニア採用で評価される国家資格の本命は、一段上の基本情報技術者試験（レベル2）です。
            </p>
            <p>
              それでもITパスポートに意味があるのは、<strong>「ゼロではない」ことを最初に証明できる</strong>からです。異業種からのキャリアチェンジでは、応募書類に書ける学習実績があるかどうかで、ポテンシャル採用の説得力が変わります。「ITパスポート合格→基本情報の学習中」という状態は、未経験者が作れる最も分かりやすい成長ストーリーのひとつです。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>場面</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ITパスポートの効き方</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>異業種→IT未経験転職</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>学習意欲・基礎知識の証明として有効。基本情報の学習中であることを添えるとさらに良い</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>エンジニア経験者の転職</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>評価への影響はほぼなし。実務経験・ポートフォリオが優先される</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>事務・企画など非IT職</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>DX推進・社内システム担当への異動や、IT企業の非エンジニア職への応募で基礎力の証明になる</td></tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40代からのキャリアチェンジ</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「ITパスポート→基本情報」の順で本気度を可視化する定番ルートの起点になる</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>ITパスポートの学習と並行してエージェントに登録しておくと、「未経験からどの職種を狙えるか」「次に何を学ぶべきか」を市場目線で確認しながら進められます。未経験に強いエージェントと女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">ワークポート</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>未経験に強い</span></div>
              <p className="text-sm text-text-light">IT・Web業界への転職支援に実績があり、未経験・異業種からのキャリアチェンジ相談に強いのが特徴。学習中の資格や取り組みを踏まえて、現実的に狙える求人を提案してもらえます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">女性の転職支援に特化した老舗エージェント。ライフイベントを踏まえたキャリア設計の相談がしやすく、IT職への一歩を女性目線でサポートしてもらえます。</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 次に目指す資格 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">次に目指す資格</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>ITパスポートはゴールではなくスタート地点。エンジニアを目指すなら、そのまま学習を続けて次の資格へつなげましょう。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#7c3a55" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>基本情報技術者試験（FE）— 本命</h3><p className="text-sm text-text-light">エンジニアの登竜門となる国家試験（ITSSレベル2）。ITパスポートで学んだ3分野がそのまま土台になります。エンジニア転職を目指すなら、ここまで到達するのがおすすめです。<a href="/articles/cert-kihonjoho/" className="underline font-bold" style={{ color: "#7c3a55" }}>基本情報技術者試験ガイドへ</a></p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>目的別の資格マップ</h3><p className="text-sm text-text-light">クラウド（AWS）・インフラ（LPIC）・データ（Python・データベース）など、方向性別のおすすめ資格を整理しています。<a href="/articles/certification/" className="underline font-bold" style={{ color: "#7c3a55" }}>資格ガイド（目的別マップ）へ</a></p></div>
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
            <a href="/articles/cert-kihonjoho/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>基本情報技術者試験ガイド</h3><p className="text-sm text-text-light">ITパスポートの次に目指す本命資格</p></a>
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの資格ガイド</h3><p className="text-sm text-text-light">取るべき資格を目的別に整理</p></a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>未経験からエンジニア転職</h3><p className="text-sm text-text-light">学習ロードマップと始め方</p></a>
            <a href="/articles/women-it-support-map/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>全国の女性向けIT訓練・支援まとめ</h3><p className="text-sm text-text-light">無料・低額で学べる公的支援</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">最初の一歩を、キャリアの形に</h2>
            <p className="text-white/90 mb-6">ITパスポートの学習と並行して、未経験からの現実的なルートをプロに相談してみませんか。診断ツールなら30秒であなたに合うエージェントがわかります。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
