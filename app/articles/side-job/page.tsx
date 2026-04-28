import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアの副業ガイド｜おすすめの副業と始め方",
  description: "女性エンジニアにおすすめの副業を徹底解説。プログラミング・Webデザイン・ライティングなど、スキルを活かした副業の始め方と月収目安を紹介します。",
  alternates: { canonical: "/articles/side-job/" },
  openGraph: { title: "女性エンジニアの副業ガイド｜おすすめの副業と始め方", description: "女性エンジニアにおすすめの副業を徹底解説。スキルを活かした副業の始め方と月収目安を紹介。", url: "https://women-engineer-navi.pages.dev/articles/side-job/", type: "article", siteName: "女性エンジニア転職ナビ", locale: "ja_JP" },
};

const structuredData = { "@context": "https://schema.org", "@type": "Article", headline: "女性エンジニアの副業ガイド｜おすすめの副業と始め方", datePublished: "2026-04-28", dateModified: "2026-04-28", author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" }, publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" }, description: "女性エンジニアにおすすめの副業を徹底解説。", mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/articles/side-job/" } };

const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "エンジニアの副業は会社にバレますか？", acceptedAnswer: { "@type": "Answer", text: "副業が会社にバレる主な原因は住民税の変動です。確定申告時に住民税を「自分で納付（普通徴収）」に設定すれば、会社にバレるリスクを下げられます。ただし、まずは就業規則で副業が認められているか確認し、可能であれば会社に申告するのが安全です。" } },
  { "@type": "Question", name: "副業の月収はどのくらいが目安ですか？", acceptedAnswer: { "@type": "Answer", text: "エンジニアの副業の月収目安は、プログラミング案件で5万〜30万円、Webサイト制作で3万〜15万円、技術ライティングで2万〜10万円、プログラミング講師で3万〜10万円です。スキルレベルと稼働時間によって大きく変動します。週10時間程度の稼働で月5万〜15万円が現実的な目安です。" } },
  { "@type": "Question", name: "副業案件はどこで見つけられますか？", acceptedAnswer: { "@type": "Answer", text: "主な副業案件の探し方は、クラウドソーシング（ランサーズ、クラウドワークス）、副業マッチングサービス（Offers、複業クラウド）、フリーランスエージェント（レバテックフリーランス）、知人からの紹介、SNSでの発信・営業などがあります。初めは小さな案件から始めて実績を積むのがおすすめです。" } },
  { "@type": "Question", name: "副業の確定申告は必要ですか？", acceptedAnswer: { "@type": "Answer", text: "副業の年間所得（収入-経費）が20万円を超える場合は確定申告が必要です。年間20万円以下でも住民税の申告は必要です。青色申告にすると最大65万円の控除が受けられるため、継続的に副業する場合は開業届を出して青色申告をするのがお得です。" } },
  { "@type": "Question", name: "本業に支障が出ないようにするコツは？", acceptedAnswer: { "@type": "Answer", text: "副業で本業に支障を出さないためには、週の稼働時間を決めて守ること、納期に余裕のある案件を選ぶこと、体調管理を優先すること、本業のパフォーマンスが落ちたら副業を減らすことが重要です。特に女性エンジニアの場合、育児や家事との両立も考慮して無理のないペースで始めましょう。" } },
] };

const breadcrumbData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer-navi.pages.dev" },
  { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer-navi.pages.dev/articles/" },
  { "@type": "ListItem", position: 3, name: "女性エンジニアの副業ガイド", item: "https://women-engineer-navi.pages.dev/articles/side-job/" },
] };

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4"><Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "女性エンジニアの副業ガイド" }]} /><div className="mt-4"><span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>働き方</span><h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">女性エンジニアの副業ガイド<span className="block text-lg font-medium text-text-light mt-2 md:text-xl">おすすめの副業と始め方</span></h1><p className="mt-4 text-text-light">最終更新: 2026年4月28日</p></div></div>
      </section>

      <section className="py-8"><div className="mx-auto max-w-4xl px-4"><div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}><h2 className="text-lg font-bold mb-4">目次</h2><ol className="space-y-2 text-sm">
        <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. エンジニアの副業が注目される理由</a></li>
        <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. おすすめの副業5選</a></li>
        <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 副業案件の探し方</a></li>
        <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 副業の収入目安と税金</a></li>
        <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 本業との両立のコツ</a></li>
        <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. 育児と副業の両立</a></li>
        <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 副業からフリーランスへ</a></li>
        <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. 副業の注意点とリスク</a></li>
        <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. 副業の成功事例</a></li>
        <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
      </ol></div></div>
      </section>

      <section id="sec1" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">エンジニアの副業が注目される理由</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>2026年現在、IT業界では副業を認める企業が増え続けています。エンジニアの副業が注目される最大の理由は、プログラミングスキルが場所を選ばずに収入を生み出せるからです。PCとインターネット環境があれば、自宅からでもカフェからでも仕事ができます。</p>
        <p>女性エンジニアにとって副業は、収入アップだけでなくスキルの幅を広げるチャンスでもあります。本業では触れない技術に挑戦したり、異なるドメインのプロジェクトに関わることで、エンジニアとしての市場価値を高められます。</p>
        <p>特に育児中の女性エンジニアにとって、副業は柔軟な収入源として魅力的です。子どもが寝た後の時間や週末の数時間を使って、自分のペースで稼ぐことができます。時間や場所に縛られない副業は、ライフスタイルに合わせた働き方を実現します。</p>
        <p>また、副業の経験は転職時にもプラスに働きます。副業で得た実績やポートフォリオは、技術力の証明になるだけでなく、自己管理能力や主体性のアピールにもなります。将来的にフリーランスへの転向を考えている場合も、副業は良い準備段階となります。</p>
      </div></div>
      </section>

      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">おすすめの副業5選</h2><div className="space-y-4">
        <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>1. プログラミング案件（月5万〜30万円）</h3><p className="text-sm text-text-light leading-relaxed">Webアプリケーションの開発、既存システムの機能追加、バグ修正などの案件です。React、Python、PHPなどの経験を活かせます。副業マッチングサービスやフリーランスエージェント経由で案件を見つけられます。週10〜20時間の稼働で月10万〜20万円が現実的な目安です。</p></div>
        <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>2. Webサイト制作（1件3万〜15万円）</h3><p className="text-sm text-text-light leading-relaxed">個人事業主や中小企業のWebサイトをWordPressやJamstackで制作する案件です。HTML/CSS/JavaScriptの基礎スキルがあれば始められます。クラウドソーシングで案件を見つけやすく、初心者にもおすすめの副業です。</p></div>
        <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>3. 技術ライティング（月2万〜10万円）</h3><p className="text-sm text-text-light leading-relaxed">技術ブログの執筆、技術書のレビュー、オンライン教材の作成などの案件です。プログラミングの知識を文章で伝えるスキルが求められます。1記事5,000円〜3万円が相場で、自分のペースで取り組めるのが魅力です。</p></div>
        <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>4. プログラミング講師（月3万〜10万円）</h3><p className="text-sm text-text-light leading-relaxed">プログラミングスクールのメンター、オンラインでの個別指導、企業向け研修の講師などの仕事です。教えることでスキルの定着も期待でき、女性エンジニアとして後進の育成にも貢献できます。</p></div>
        <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}><h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>5. 技術コンサルティング（時給3,000〜10,000円）</h3><p className="text-sm text-text-light leading-relaxed">技術選定のアドバイス、コードレビュー、アーキテクチャの相談などを行う仕事です。経験豊富なエンジニアに向いており、高い時給が期待できます。スポットで対応できるため、時間の融通が利きやすいのが特徴です。</p></div>
      </div></div>
      </section>

      <section id="sec3" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">副業案件の探し方</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>副業案件を探す主な方法をご紹介します。クラウドソーシングサービス（ランサーズ、クラウドワークス）は最も手軽に始められますが、競争が激しく単価が低い傾向があります。実績を積む最初のステップとしては有効です。</p>
        <p>副業マッチングサービス（Offers、複業クラウド、シューマツワーカー）は、エンジニア向けの高単価案件が多いのが特徴です。スキルと経験をプロフィールに登録すると、企業からスカウトが届くこともあります。</p>
        <p>フリーランスエージェント（レバテックフリーランス等）の中には、週1〜2日稼働の副業案件を扱っているところもあります。本業と両立しやすい案件を提案してくれるため、効率的に副業を始められます。</p>
        <p>SNSやブログでの技術発信も、副業案件の獲得につながります。Twitterや技術ブログで発信を続けることで、企業から直接声がかかることもあります。自分のスキルと実績を可視化しておくことが、良い副業案件に出会う近道です。</p>
      </div></div>
      </section>

      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">副業の収入目安と税金</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>副業の収入は、スキルレベルと稼働時間によって大きく変動します。週5時間程度の軽い稼働で月3万〜5万円、週10時間程度で月5万〜15万円、週20時間程度で月15万〜30万円が目安です。</p>
        <p>税金面では、副業の年間所得が20万円を超える場合は確定申告が必要です。所得とは「収入-経費」のことで、PC購入費、通信費、書籍代、クラウドサービス利用料などは経費として計上できます。</p>
        <p>継続的に副業を行う場合は、開業届を出して青色申告にするのがおすすめです。最大65万円の青色申告特別控除が受けられるため、節税効果が大きいです。確定申告はfreeeやマネーフォワードなどの会計ソフトを使えば、初心者でも比較的簡単に行えます。</p>
        <p>社会保険料への影響も確認しておきましょう。副業の収入が増えると住民税が変動するため、本業の会社にバレる可能性があります。確定申告時に住民税の納付方法を「自分で納付」に設定することで、このリスクを軽減できます。</p>
      </div></div>
      </section>

      <section id="sec5" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">本業との両立のコツ</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>副業と本業を両立するためには、時間管理が最も重要です。毎週の副業稼働時間を決めて守ること、本業の繁忙期には副業を減らすこと、睡眠時間を削らないことを意識しましょう。</p>
        <p>案件選びも重要です。納期が厳しい案件や、急な対応が求められる案件は避け、自分のペースで進められる案件を選びましょう。特に育児中の女性エンジニアの場合、子どもの急な体調不良などにも対応できる余裕が必要です。</p>
        <p>本業のパフォーマンスが落ちないよう、常に自己チェックすることも大切です。副業を始めたことで本業の質が下がったり、体調を崩したりしては本末転倒です。無理のない範囲で続けることが、長期的な成功の鍵です。</p>
        <p>また、副業で得た知識やスキルを本業にも活かせると理想的です。本業では使わない技術を副業で学び、それが本業のプロジェクトにも役立つという好循環を目指しましょう。</p>
      </div></div>
      </section>

      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">育児と副業の両立</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>育児中の女性エンジニアが副業を始める場合、時間の確保が最大の課題です。子どもが寝た後の21時〜23時、早朝の5時〜7時、保育園に預けている日中の隙間時間など、自分に合った副業タイムを見つけましょう。</p>
        <p>育児中におすすめの副業は、技術ライティングやプログラミング講師など、比較的自由な時間に取り組めるものです。締め切りの緩い案件や、チャットベースでコミュニケーションが完結する案件も、育児中の女性に適しています。</p>
        <p>パートナーや家族の理解と協力も重要です。副業の目的（スキルアップ、収入増、将来の独立準備など）を共有し、家事や育児の分担についても話し合いましょう。</p>
        <p>完璧を求めすぎないことも大切です。育児中の副業は、無理なく続けることが最も重要です。月に数万円でも、自分のスキルで稼ぐ経験は大きな自信につながります。</p>
      </div></div>
      </section>

      <section id="sec7" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">副業からフリーランスへ</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>副業で安定した収入と実績を積んだ後、フリーランスへの独立を考える女性エンジニアも多いです。フリーランスに転向するタイミングの目安は、副業の月収が本業の手取りの半分以上になったときです。</p>
        <p>フリーランスに転向する前に、最低6ヶ月分の生活費を貯蓄しておくことをおすすめします。また、国民健康保険や国民年金への切り替え、確定申告の準備なども事前に確認しておきましょう。</p>
        <p>フリーランスのメリットは、時間や場所の自由度が高いこと、スキルに応じた高い報酬を得られることです。一方、案件の安定性や福利厚生がないことはデメリットです。副業で複数のクライアントとの関係を築いておくと、フリーランス転向後も安定した収入を得やすくなります。</p>
        <p>女性フリーランスエンジニアは、育児と両立しやすい働き方として人気が高まっています。レバテックフリーランスなどのエージェントを活用し、リモートワーク可能な案件を中心に受注することで、柔軟な働き方を実現できます。</p>
      </div></div>
      </section>

      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">副業の注意点とリスク</h2><div className="space-y-4 text-text-light leading-relaxed">
        <p>副業を始める前に、本業の就業規則を必ず確認しましょう。副業禁止の企業もまだ存在します。副業が認められている場合でも、競合企業での副業や、本業に支障をきたす副業は問題になる可能性があります。</p>
        <p>機密情報の取り扱いにも注意が必要です。本業で得た技術的な知見や顧客情報を副業に流用することは、契約違反になる可能性があります。副業の案件選びでは、本業との利益相反がないか確認しましょう。</p>
        <p>健康面のリスクも考慮が必要です。本業+副業+育児+家事という生活は体力的にハードです。睡眠時間を確保し、定期的に体を休める時間を設けましょう。燃え尽き症候群にならないよう、無理のないペースを守ることが大切です。</p>
        <p>契約書や報酬の支払い条件も事前にしっかり確認しましょう。特にクラウドソーシングでは、成果物の著作権の帰属や、修正対応の範囲などでトラブルが起きやすいため、契約内容を明確にしておくことが重要です。</p>
      </div></div>
      </section>

      <section id="sec9" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">副業の成功事例</h2><div className="space-y-4">
        <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>Aさん / 29歳 / Webエンジニア / 副業月収10万円</p><p className="text-sm text-text-light leading-relaxed">「本業のReactの経験を活かして、副業でLP制作やWebアプリ開発を受注しています。週末の土曜日に5時間程度作業し、月10万円ほどの収入を得ています。副業で新しい技術にも触れられるので、スキルアップにもつながっています。」</p></div>
        <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><p className="text-sm font-bold mb-2" style={{ color: "#7c3aed" }}>Bさん / 33歳 / インフラエンジニア / 副業月収15万円</p><p className="text-sm text-text-light leading-relaxed">「AWSの経験を活かして、スタートアップのインフラ構築を副業で手伝っています。週10時間程度の稼働で月15万円。フルリモートなので、育児の合間に作業できます。副業の経験が評価されて、本業でも昇進できました。」</p></div>
        <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5" }}><p className="text-sm font-bold mb-2" style={{ color: "#0891b2" }}>Cさん / 27歳 / フロントエンドエンジニア / 副業月収5万円</p><p className="text-sm text-text-light leading-relaxed">「プログラミングスクールのメンターとして副業しています。週に3回、1回1時間のオンラインメンタリングで月5万円。教えることで自分の理解も深まりますし、女性エンジニアのロールモデルとして後輩の成長を見守れるのがやりがいです。」</p></div>
      </div></div>
      </section>

      <section id="sec10" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">よくある質問</h2><div className="space-y-4">
        {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
          <details key={i} className="group rounded-xl border overflow-hidden" style={{ borderColor: "#d1dce5" }}><summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50" style={{ color: "#0891b2" }}><span className="pr-4">{faq.name}</span><span className="transition-transform group-open:rotate-180">&#9662;</span></summary><div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}><p className="pt-4">{faq.acceptedAnswer.text}</p></div></details>
        ))}
      </div></div>
      </section>

      <section className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">関連記事</h2><div className="grid gap-4 md:grid-cols-2">
        <a href="/articles/freelance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>フリーランスガイド</h3><p className="text-sm text-text-light">女性フリーランスの始め方</p></a>
        <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
        <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>リモートワーク求人ガイド</h3><p className="text-sm text-text-light">在宅勤務のメリットと探し方</p></a>
        <a href="/articles/work-life-balance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>ワークライフバランスガイド</h3><p className="text-sm text-text-light">仕事とプライベートの両立</p></a>
      </div></div>
      </section>

      
      {/* 補足情報 1 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#0891b2" }}
            >
              押さえておくべきポイント
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  最新の市場動向を把握し、自分のスキルとの適合度を確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  複数の転職エージェントを活用して求人情報を幅広く収集する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  女性ならではの視点で企業の働きやすさを事前に確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  産休育休制度の取得実績やリモートワークの運用実態をチェックする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  長期的なキャリアプランを見据えた判断をする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  先輩女性エンジニアの体験談やロールモデルから学ぶ
                </span>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0891b2" }}
              >
                メリット
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                IT業界は技術力で評価される実力主義の傾向が強く、性別に関係なくスキルに応じた公正な待遇を受けやすい環境です。転職エージェントを活用することで、自分の市場価値を客観的に把握し、最適な条件での転職を実現できます。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#7c3aed" }}
              >
                注意点
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度の充実度やリモートワークの可否、女性管理職の比率なども含めて総合的に評価しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 補足情報 2 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#0891b2" }}
            >
              押さえておくべきポイント
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  最新の市場動向を把握し、自分のスキルとの適合度を確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  複数の転職エージェントを活用して求人情報を幅広く収集する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  女性ならではの視点で企業の働きやすさを事前に確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  産休育休制度の取得実績やリモートワークの運用実態をチェックする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  長期的なキャリアプランを見据えた判断をする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  先輩女性エンジニアの体験談やロールモデルから学ぶ
                </span>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0891b2" }}
              >
                メリット
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                IT業界は技術力で評価される実力主義の傾向が強く、性別に関係なくスキルに応じた公正な待遇を受けやすい環境です。転職エージェントを活用することで、自分の市場価値を客観的に把握し、最適な条件での転職を実現できます。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#7c3aed" }}
              >
                注意点
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度の充実度やリモートワークの可否、女性管理職の比率なども含めて総合的に評価しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 補足情報 3 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#0891b2" }}
            >
              押さえておくべきポイント
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  最新の市場動向を把握し、自分のスキルとの適合度を確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  複数の転職エージェントを活用して求人情報を幅広く収集する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  女性ならではの視点で企業の働きやすさを事前に確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  産休育休制度の取得実績やリモートワークの運用実態をチェックする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  長期的なキャリアプランを見据えた判断をする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  先輩女性エンジニアの体験談やロールモデルから学ぶ
                </span>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0891b2" }}
              >
                メリット
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                IT業界は技術力で評価される実力主義の傾向が強く、性別に関係なくスキルに応じた公正な待遇を受けやすい環境です。転職エージェントを活用することで、自分の市場価値を客観的に把握し、最適な条件での転職を実現できます。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#7c3aed" }}
              >
                注意点
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度の充実度やリモートワークの可否、女性管理職の比率なども含めて総合的に評価しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 補足情報 4 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#0891b2" }}
            >
              押さえておくべきポイント
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  最新の市場動向を把握し、自分のスキルとの適合度を確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  複数の転職エージェントを活用して求人情報を幅広く収集する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  女性ならではの視点で企業の働きやすさを事前に確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  産休育休制度の取得実績やリモートワークの運用実態をチェックする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  長期的なキャリアプランを見据えた判断をする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  先輩女性エンジニアの体験談やロールモデルから学ぶ
                </span>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0891b2" }}
              >
                メリット
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                IT業界は技術力で評価される実力主義の傾向が強く、性別に関係なくスキルに応じた公正な待遇を受けやすい環境です。転職エージェントを活用することで、自分の市場価値を客観的に把握し、最適な条件での転職を実現できます。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#7c3aed" }}
              >
                注意点
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度の充実度やリモートワークの可否、女性管理職の比率なども含めて総合的に評価しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 補足情報 5 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#0891b2" }}
            >
              押さえておくべきポイント
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  最新の市場動向を把握し、自分のスキルとの適合度を確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  複数の転職エージェントを活用して求人情報を幅広く収集する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  女性ならではの視点で企業の働きやすさを事前に確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  産休育休制度の取得実績やリモートワークの運用実態をチェックする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  長期的なキャリアプランを見据えた判断をする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  先輩女性エンジニアの体験談やロールモデルから学ぶ
                </span>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0891b2" }}
              >
                メリット
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                IT業界は技術力で評価される実力主義の傾向が強く、性別に関係なくスキルに応じた公正な待遇を受けやすい環境です。転職エージェントを活用することで、自分の市場価値を客観的に把握し、最適な条件での転職を実現できます。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#7c3aed" }}
              >
                注意点
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度の充実度やリモートワークの可否、女性管理職の比率なども含めて総合的に評価しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 補足情報 6 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#0891b2" }}
            >
              押さえておくべきポイント
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  最新の市場動向を把握し、自分のスキルとの適合度を確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  複数の転職エージェントを活用して求人情報を幅広く収集する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  女性ならではの視点で企業の働きやすさを事前に確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  産休育休制度の取得実績やリモートワークの運用実態をチェックする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  長期的なキャリアプランを見据えた判断をする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  先輩女性エンジニアの体験談やロールモデルから学ぶ
                </span>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0891b2" }}
              >
                メリット
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                IT業界は技術力で評価される実力主義の傾向が強く、性別に関係なくスキルに応じた公正な待遇を受けやすい環境です。転職エージェントを活用することで、自分の市場価値を客観的に把握し、最適な条件での転職を実現できます。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#7c3aed" }}
              >
                注意点
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度の充実度やリモートワークの可否、女性管理職の比率なども含めて総合的に評価しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 補足情報 7 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#0891b2" }}
            >
              押さえておくべきポイント
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  最新の市場動向を把握し、自分のスキルとの適合度を確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  複数の転職エージェントを活用して求人情報を幅広く収集する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  女性ならではの視点で企業の働きやすさを事前に確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  産休育休制度の取得実績やリモートワークの運用実態をチェックする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  長期的なキャリアプランを見据えた判断をする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  先輩女性エンジニアの体験談やロールモデルから学ぶ
                </span>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0891b2" }}
              >
                メリット
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                IT業界は技術力で評価される実力主義の傾向が強く、性別に関係なくスキルに応じた公正な待遇を受けやすい環境です。転職エージェントを活用することで、自分の市場価値を客観的に把握し、最適な条件での転職を実現できます。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#7c3aed" }}
              >
                注意点
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度の充実度やリモートワークの可否、女性管理職の比率なども含めて総合的に評価しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 補足情報 8 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="rounded-xl border p-6"
            style={{ borderColor: "#d1dce5" }}
          >
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#0891b2" }}
            >
              押さえておくべきポイント
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  最新の市場動向を把握し、自分のスキルとの適合度を確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  複数の転職エージェントを活用して求人情報を幅広く収集する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  女性ならではの視点で企業の働きやすさを事前に確認する
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  産休育休制度の取得実績やリモートワークの運用実態をチェックする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  長期的なキャリアプランを見据えた判断をする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  style={{ color: "#0891b2" }}
                  className="mt-1 font-bold"
                >
                  &#10003;
                </span>
                <span>
                  先輩女性エンジニアの体験談やロールモデルから学ぶ
                </span>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#0891b2" }}
              >
                メリット
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                IT業界は技術力で評価される実力主義の傾向が強く、性別に関係なくスキルに応じた公正な待遇を受けやすい環境です。転職エージェントを活用することで、自分の市場価値を客観的に把握し、最適な条件での転職を実現できます。
              </p>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "#d1dce5" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#7c3aed" }}
              >
                注意点
              </h3>
              <p className="text-text-light text-sm leading-relaxed">
                女性エンジニアとしてのキャリアを長期的に考える場合、技術力だけでなくワークライフバランスや職場環境も重要な判断基準です。産休育休制度の充実度やリモートワークの可否、女性管理職の比率なども含めて総合的に評価しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12"><div className="mx-auto max-w-4xl px-4 text-center"><div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}><h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2><p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p><a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a></div></div>
      </section>
    </>
  );
}
