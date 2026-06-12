import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニア転職のFAQ総まとめ｜年収・未経験・両立の疑問に全回答【2026年】",
  description:
    "女性エンジニア転職のよくある質問を実データで総まとめ。平均年収419万〜約497万円、求人倍率10.68倍、育休取得率86.6%、テレワーク導入率94.3%など公的統計・公開調査に基づき、年収・未経験・両立・選考・働き方の19の疑問に出典付きで回答します。",
  alternates: { canonical: "/articles/faq-all/" },
  openGraph: {
    title: "女性エンジニア転職のFAQ総まとめ｜年収・未経験・両立の疑問に全回答【2026年】",
    description:
      "平均年収419万〜約497万円、求人倍率10.68倍、育休取得率86.6%など実データに基づき、女性エンジニア転職の19の疑問に出典付きで回答するFAQハブです。",
    url: "https://women-engineer.com/articles/faq-all/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニア転職のFAQ総まとめ｜年収・未経験・両立の疑問に全回答【2026年】",
  datePublished: "2026-04-29",
  dateModified: "2026-06-12",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer.com" },
  description:
    "平均年収419万〜約497万円、求人倍率10.68倍、育休取得率86.6%など実データに基づき、女性エンジニア転職の19の疑問に出典付きで回答するFAQハブ。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/articles/faq-all/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性エンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "転職サービスdodaの「平均年収ランキング2025」では、技術系（IT/通信）職種の女性の平均年収は419万円です。厚生労働省「賃金構造基本統計調査」をもとにした集計では女性システムエンジニアは約497万円で、おおむね420万〜500万円が目安。日本の女性全体の平均370万円（doda調べ）を大きく上回ります。",
      },
    },
    {
      "@type": "Question",
      name: "女性エンジニアと男性エンジニアの年収差はどのくらいありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "賃金構造基本統計調査をもとにした集計では、女性SE約497万円に対し男性SE約584万円で、女性は男性の約85%の水準です。全産業の男女間賃金格差（男性100に対し女性75.8・令和6年調査）と比べると差は小さく、20代ではほとんど差がありません（20〜24歳では女性が上回るデータもあります）。",
      },
    },
    {
      "@type": "Question",
      name: "転職や年収交渉で年収は上がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "上がる人が多数派です。厚生労働省「令和6年雇用動向調査」では転職で賃金が増えた人は40.5%。キッカケクリエイションの調査（転職経験のあるITエンジニア393名）では、年収交渉をした人の90.8%が年収アップを実現しています。転職時の昇給額には男女差（男性平均139万円／女性平均85万円・Forkwell調査）があるため、女性こそ交渉が重要です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験から女性エンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。エンジニア（IT・通信）の転職求人倍率は10.68倍（全職種平均2.39倍・doda 2026年3月）と突出した売り手市場で、経済産業省の試算では2030年に最大約79万人のIT人材が不足します。ただし学習ゼロでの内定はほぼなく、学習実績とポートフォリオを作ってから応募するのが大前提です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験からエンジニアになるには学習期間はどのくらい必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1日2〜3時間の学習を前提に6ヶ月〜1年、転職活動に1〜3ヶ月が現実的な目安です。「1ヶ月でなれる」といった宣伝は実態と乖離していることが多いため、トータルで半年〜1年半の計画を立てましょう。プログラミングスクールを使えば学習を3〜6ヶ月に短縮できるケースもあります。",
      },
    },
    {
      "@type": "Question",
      name: "30代・40代の未経験でもエンジニアに転職できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。レバテック「IT人材白書2024」では、エンジニア未経験者を「採用している」企業が41.6%、検討中を含めると約7割にのぼります。ただしポテンシャル採用が中心の20代と違い、「前職スキル×IT」の掛け合わせと学習実績の提示が必須です。QAテスターやサポートエンジニアなど未経験ハードルの低い職種から段階的に進むルートも有効です。",
      },
    },
    {
      "@type": "Question",
      name: "女性エンジニアは出産後も働き続けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省「令和6年度雇用均等基本調査」によると、女性の育児休業取得率は86.6%で、取得者の9割以上が6か月以上取得しています。第1子出産前後の妻の就業継続率も69.5%まで上昇しており（国立社会保障・人口問題研究所「第16回出生動向基本調査」）、「出産＝退職」の時代は終わりつつあります。",
      },
    },
    {
      "@type": "Question",
      name: "時短勤務はいつまで使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "育児・介護休業法により、3歳未満の子を育てる労働者への短時間勤務制度（原則6時間）は企業の義務です。さらに2025年施行の改正で、残業免除は小学校就学前まで拡大し、3歳〜就学前の子を育てる労働者にもテレワーク等を含む柔軟な働き方の措置が義務化されました。企業独自に小学校卒業まで延長できる会社もあるため、転職時は法定を超える部分を確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "転職のコーディングテストはどのレベルまで対策すべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ひとつの目安はpaizaスキルチェックのBランク（上位30%・実務スキル相当）です。経験者なら2〜4週間、基礎からなら2〜3ヶ月の対策が目安。なおAI利用の可否は企業・プラットフォームで方針が二極化しているため、受験案内のルール確認が必須です。",
      },
    },
    {
      "@type": "Question",
      name: "女性エンジニアはどのくらいリモートワークできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "総務省「令和6年通信利用動向調査」では、情報通信業のテレワーク導入率は94.3%と全産業（47.3%）の約2倍で産業別トップです。ただし働き方の主流は週2〜3日出社のハイブリッド型で、完全在宅のフルリモートは企業・職種を選ぶ必要があります。",
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
    { "@type": "ListItem", position: 3, name: "FAQ総まとめ", item: "https://women-engineer.com/articles/faq-all/" },
  ],
};

type FaqItem = {
  q: string;
  a: string;
  links: { label: string; href: string }[];
};

type FaqCategory = {
  name: string;
  color: string;
  start: number;
  faqs: FaqItem[];
};

const faqCategories: FaqCategory[] = [
  {
    name: "年収・待遇",
    color: "#f97066",
    start: 1,
    faqs: [
      {
        q: "女性エンジニアの平均年収はいくらですか？",
        a: "dodaの「平均年収ランキング2025」では、技術系（IT/通信）職種の女性の平均年収は419万円。厚生労働省「賃金構造基本統計調査」をもとにした集計では女性SEは約497万円で、おおむね420万〜500万円が目安です。日本の女性全体の平均370万円（doda調べ）を大きく上回り、女性が稼ぎやすい職種のひとつといえます。",
        links: [{ label: "女性エンジニアの年収ガイド", href: "/articles/salary/" }],
      },
      {
        q: "男性エンジニアとの年収差はどのくらいありますか？",
        a: "賃金構造基本統計調査ベースの集計では、女性SE約497万円・男性SE約584万円で、女性は男性の約85%の水準です。全産業の男女間賃金格差（男性100に対し女性75.8・令和6年調査）と比べると差は小さく、20代ではほとんど差がありません（20〜24歳では女性が上回るデータも）。差が開くのは30代以降で、職種選択・スキル・交渉で縮められる差です。",
        links: [{ label: "男女賃金差の実データと埋め方", href: "/articles/salary/" }],
      },
      {
        q: "転職や年収交渉で年収は上がりますか？",
        a: "上がる人が多数派です。厚生労働省「令和6年雇用動向調査」では転職で賃金が増えた人は40.5%。さらにキッカケクリエイションの調査（転職経験のあるITエンジニア393名）では、年収交渉をした人の90.8%が年収アップを実現しています。転職時の昇給額には男女差（男性平均139万円／女性平均85万円・Forkwell調査）があるため、女性こそ交渉が重要です。",
        links: [{ label: "女性エンジニアの年収交渉術", href: "/articles/negotiation/" }],
      },
      {
        q: "年収が高い職種はどれですか？",
        a: "dodaの「平均年収ランキング2025」では、技術系（IT/通信）の1位はプロジェクトマネジャーの707万円。各種調査の代表値ではSRE/クラウドエンジニア約660万円、データサイエンティスト約650万円〜、セキュリティエンジニア約629万円が高水準です。上流工程・クラウド・AI・セキュリティなど人材が足りない領域ほど年収が上がりやすい傾向があります。",
        links: [
          { label: "職種別の年収比較", href: "/articles/salary-by-job/" },
          { label: "年収1000万を目指す方法", href: "/articles/salary-1000man/" },
        ],
      },
    ],
  },
  {
    name: "未経験・学習",
    color: "#0891b2",
    start: 5,
    faqs: [
      {
        q: "未経験から女性エンジニアになれますか？",
        a: "可能です。エンジニア（IT・通信）の転職求人倍率は10.68倍（全職種平均2.39倍・doda 2026年3月）と突出した売り手市場で、経済産業省の試算では2030年に最大約79万人のIT人材が不足します。ただし学習ゼロでの内定はほぼなく、学習実績とポートフォリオを作ってから応募するのが大前提です。",
        links: [{ label: "未経験からのロードマップ", href: "/articles/beginner/" }],
      },
      {
        q: "学習期間はどのくらい必要ですか？",
        a: "1日2〜3時間の学習を前提に6ヶ月〜1年、転職活動に1〜3ヶ月が現実的な目安です。「1ヶ月でなれる」といった宣伝は実態と乖離していることが多いため、トータルで半年〜1年半の計画を立てましょう。重要なのは、あれこれ手を出さず言語1つ＋フレームワーク1つを完了させることです。",
        links: [{ label: "学習ロードマップ（期間の目安つき）", href: "/articles/beginner/" }],
      },
      {
        q: "独学とプログラミングスクール、どちらがいいですか？",
        a: "費用を抑えたい・自走力に自信があるなら独学（無料〜数千円/月）、効率と挫折防止を優先するならスクール（数十万円規模。給付金対象講座なら自己負担を圧縮できる場合も）です。おすすめは「まず独学で1〜2ヶ月試し、適性を確認してからスクールを検討する」順番。適性を確かめる前に大金を払うのはリスクが大きいためです。",
        links: [{ label: "プログラミングスクール選びガイド", href: "/articles/programming-school/" }],
      },
      {
        q: "30代・40代の未経験でも転職できますか？",
        a: "可能です。レバテック「IT人材白書2024」では、エンジニア未経験者を「採用している」企業が41.6%、検討中を含めると約7割にのぼります。ただしポテンシャル採用が中心の20代と違い、「前職スキル×IT」の掛け合わせと学習実績の提示が必須。QAテスターやサポートエンジニアなど未経験ハードルの低い職種から段階的に進むルートも有効です。",
        links: [
          { label: "30代女性エンジニアの転職ガイド", href: "/articles/age-30s/" },
          { label: "40代の転職戦略", href: "/articles/age-40s/" },
        ],
      },
    ],
  },
  {
    name: "両立・ライフイベント",
    color: "#7c3aed",
    start: 9,
    faqs: [
      {
        q: "出産後も働き続けられますか？育休の実態は？",
        a: "厚生労働省「令和6年度雇用均等基本調査」によると、女性の育児休業取得率は86.6%で、取得者の9割以上が6か月以上取得しています。第1子出産前後の妻の就業継続率も69.5%まで上昇しており（国立社会保障・人口問題研究所の調査）、「出産＝退職」の時代は終わりつつあります。",
        links: [{ label: "ママエンジニアの働き方ガイド", href: "/articles/mama-engineer/" }],
      },
      {
        q: "時短勤務はいつまで使えますか？",
        a: "法律上、3歳未満の子を育てる労働者への短時間勤務制度（原則6時間）は企業の義務です。さらに2025年施行の改正育児・介護休業法で、残業免除は小学校就学前まで拡大し、3歳〜就学前にもテレワーク等を含む柔軟な働き方の措置が義務化されました。企業独自に小学校卒業まで延長できる会社もあるため、転職時は法定を超える部分を確認しましょう。",
        links: [
          { label: "2025年法改正のポイント", href: "/articles/mama-engineer/" },
          { label: "時短勤務エンジニアガイド", href: "/articles/short-time/" },
        ],
      },
      {
        q: "時短勤務だと収入はどのくらい減りますか？",
        a: "8時間勤務を6時間にした場合、基本給ベースでおおむね25%前後減るのが一般的です（賞与・手当の扱いは企業により異なります）。2025年4月開始の「育児時短就業給付金」（雇用保険）により、2歳未満の子を育てて時短勤務する場合は時短中の賃金の原則10%が支給されます。エンジニアは成果が可視化されやすく、時短でも評価を維持しやすい職種です。",
        links: [{ label: "時短の収入とキャリアへの影響", href: "/articles/short-time/" }],
      },
      {
        q: "ブランクがあっても復帰できますか？",
        a: "可能です。IT業界は人材不足が続いており、実務経験者はブランクがあっても歓迎される傾向にあります。重要なのは技術の変化を「差分」でキャッチアップし、個人開発や技術記事など小さなアウトプットで準備を示すこと。復帰直後は時短×在宅から始めて段階的に戻す設計が現実的です。",
        links: [
          { label: "復職・再就職ガイド", href: "/articles/return-to-work/" },
          { label: "産休・育休後のキャリア", href: "/articles/after-maternity/" },
        ],
      },
    ],
  },
  {
    name: "選考対策",
    color: "#10b981",
    start: 13,
    faqs: [
      {
        q: "転職活動はどのくらいの期間がかかりますか？",
        a: "応募から内定までは1〜3ヶ月、準備（自己分析・書類作成）と入社準備を含めると2〜4ヶ月が一般的な目安です。在職中に活動を始め、2〜3社を並行して進めて内定後に条件を比較するのが基本の進め方です。",
        links: [{ label: "面接対策ガイド", href: "/articles/interview-guide/" }],
      },
      {
        q: "コーディングテストはどのレベルまで対策すべきですか？",
        a: "ひとつの目安はpaizaスキルチェックのBランク（上位30%・実務スキル相当）です。経験者なら2〜4週間、基礎からなら2〜3ヶ月の対策が目安。なおAI利用の可否は企業・プラットフォームで方針が二極化しているため、受験案内のルールを必ず確認しましょう。",
        links: [{ label: "コーディングテスト対策ガイド", href: "/articles/coding-test/" }],
      },
      {
        q: "ポートフォリオは必要ですか？",
        a: "未経験・キャリアチェンジの場合は実質的な職務経歴書として必須級です。ログイン機能・CRUD・公開URL・GitHubのREADMEをそろえた作品が1〜2個あれば十分で、数より「自分の頭で考えて作ったか」が見られます。経験者は職務経歴書での定量的な成果の記載が中心になります。",
        links: [
          { label: "ポートフォリオの作り方", href: "/articles/portfolio/" },
          { label: "職務経歴書の書き方", href: "/articles/resume-guide/" },
        ],
      },
      {
        q: "転職エージェントは何社使うべき？費用はかかりますか？",
        a: "完全無料で利用できます（エージェントは企業側から成功報酬を受け取るため）。IT特化型と女性特化型・総合型を2〜3社併用するのが定石です。キッカケクリエイションの調査では、年収交渉を行ったITエンジニアの83.7%が転職エージェントを活用していました。",
        links: [{ label: "エージェントの選び方", href: "/articles/how-to-choose/" }],
      },
    ],
  },
  {
    name: "働き方",
    color: "#0891b2",
    start: 17,
    faqs: [
      {
        q: "エンジニアはどのくらいリモートワークできますか？",
        a: "総務省「令和6年通信利用動向調査」では、情報通信業のテレワーク導入率は94.3%と全産業（47.3%）の約2倍で産業別トップです。ただし働き方の主流は週2〜3日出社のハイブリッド型で、完全在宅のフルリモートは企業・職種を選ぶ必要があります。",
        links: [{ label: "在宅・リモート転職ガイド", href: "/articles/remote-jobs/" }],
      },
      {
        q: "フルリモート求人は減っていますか？",
        a: "減少傾向は事実です。レバレジーズの調査では、フルリモート求人はピークだった2023年6月比で約30%減少し、「原則出社」の求人は2年で約3.4倍に増えました。一方でIT人材の転職求人倍率は11.2倍と強い売り手市場が続いており、フルリモート前提の企業も一定数あります。特化サイトやIT特化型エージェントで効率的に探しましょう。",
        links: [
          { label: "出社回帰の実態と探し方", href: "/articles/remote-jobs/" },
          { label: "フルリモート企業ガイド", href: "/articles/fullremote-companies/" },
        ],
      },
      {
        q: "女性が働きやすい企業はどう見極めればいいですか？",
        a: "「制度の有無」より運用実態を見ることが重要です。具体的には、育休の取得実績と復帰率、時短勤務の適用年齢（法定超えか）、子どもの急病時の在宅切り替え可否、育児中社員・女性管理職の在籍状況を確認しましょう。求人票に出ないこれらの実態は、転職エージェント経由で確認するのが確実です。",
        links: [{ label: "女性が働きやすいIT企業の見極め方", href: "/articles/women-friendly-companies/" }],
      },
    ],
  },
];

const keyStats = [
  { value: "10.68倍", label: "エンジニア（IT・通信）の転職求人倍率", source: "doda 2026年3月（全職種平均2.39倍）" },
  { value: "419万〜約497万円", label: "女性エンジニアの平均年収の目安", source: "doda／賃金構造基本統計調査ベース" },
  { value: "86.6%", label: "女性の育児休業取得率", source: "厚労省 令和6年度雇用均等基本調査" },
  { value: "94.3%", label: "情報通信業のテレワーク導入率", source: "総務省 令和6年通信利用動向調査" },
  { value: "90.8%", label: "年収交渉をした人の年収アップ率", source: "キッカケクリエイション調査（ITエンジニア393名）" },
  { value: "18.8%", label: "日本のITエンジニアの女性比率", source: "ヒューマンリソシア（2023年データ）" },
];

export default function FaqAllPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "FAQ総まとめ" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#0891b2" }}>総合FAQ</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニア転職のFAQ総まとめ
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">年収・未経験・両立の疑問に全回答【2026年】</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 概要 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>このページの使い方</h2>
            <p className="text-sm text-text-light leading-relaxed">
              女性エンジニアの転職でよく寄せられる質問を「年収・待遇」「未経験・学習」「両立・ライフイベント」「選考対策」「働き方」の5カテゴリ・19問に整理し、公的統計・公開調査の実データに基づいて即答するFAQハブです。各回答には数値の出典と、より詳しく解説した記事へのリンクを付けています。まず気になるカテゴリの回答で全体像をつかみ、深掘りしたいテーマはリンク先の詳細記事をご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* 数字で見る現状 */}
      <section className="py-8" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold mb-4">数字で見る女性エンジニア転職（2026年6月時点）</h2>
          <div className="grid gap-4 md:grid-cols-3 mt-4">
            {keyStats.map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-5 text-center" style={{ borderColor: "#d1dce5" }}>
                <p className="text-xl font-bold mb-1" style={{ color: "#0891b2" }}>{item.value}</p>
                <p className="text-xs font-bold mb-1">{item.label}</p>
                <p className="text-xs text-text-light">出典: {item.source}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-light mt-4">
            ※ いずれも本サイトの各詳細記事で出典付きで解説している公開データです（2026年6月参照）。
          </p>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">カテゴリ別 目次</h2>
            <ol className="space-y-2 text-sm">
              {faqCategories.map((cat, i) => (
                <li key={i}>
                  <a href={`#cat${i + 1}`} className="hover:underline" style={{ color: "#0891b2" }}>
                    {i + 1}. {cat.name}（Q{cat.start}〜Q{cat.start + cat.faqs.length - 1}）
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ カテゴリ */}
      {faqCategories.map((category, catIdx) => (
        <section key={catIdx} id={`cat${catIdx + 1}`} className="py-10" style={catIdx % 2 !== 0 ? { backgroundColor: "#f8fafb" } : {}}>
          <div className="mx-auto max-w-4xl px-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-1 h-8 rounded-full" style={{ backgroundColor: category.color }} />
              <h2 className="text-2xl font-bold">{category.name}</h2>
            </div>
            <div className="space-y-4">
              {category.faqs.map((faq, faqIdx) => (
                <details key={faqIdx} className="group rounded-xl bg-white" style={{ border: "1px solid #d1dce5" }}>
                  <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                    <span>
                      <span style={{ color: "#0891b2" }} className="mr-2">Q{category.start + faqIdx}.</span>
                      {faq.q}
                    </span>
                    <span className="text-text-light group-open:rotate-180 transition-transform">&#9662;</span>
                  </summary>
                  <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                    <p className="pt-4">
                      <span style={{ color: "#f97066" }} className="font-bold mr-2">A.</span>
                      {faq.a}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                      {faq.links.map((link, linkIdx) => (
                        <a key={linkIdx} href={link.href} className="inline-block text-xs font-bold hover:underline" style={{ color: "#0891b2" }}>
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* テーマ別の深掘りガイド */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">テーマ別の深掘りガイド</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              FAQで全体像をつかんだら、自分の状況に近いテーマの詳細記事へ進むのがおすすめです。いずれも公的統計・公開調査の実データと出典に基づいて解説しています。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            {[
              { title: "年収の実データを知りたい", desc: "年代別・職種別の年収表、男女賃金差の実態、差を埋める3つの具体策。", href: "/articles/salary/", label: "女性エンジニアの年収ガイド" },
              { title: "未経験から目指したい", desc: "求人倍率10.68倍の市場データ、職種別の未経験ハードル比較、学習ロードマップ。", href: "/articles/beginner/", label: "未経験からのロードマップ" },
              { title: "育児と両立したい", desc: "育休取得率86.6%・2025年法改正のポイント、両立しやすい職種の比較、時短×在宅のモデルケース。", href: "/articles/mama-engineer/", label: "ママエンジニアの働き方ガイド" },
              { title: "リモートで働きたい", desc: "テレワーク導入率94.3%の実態、職種別のリモートのしやすさ、フルリモート求人の探し方。", href: "/articles/remote-jobs/", label: "在宅・リモート転職ガイド" },
              { title: "年収交渉に踏み出したい", desc: "交渉した人の90.8%が年収アップ。タイミング・相場の調べ方・伝え方のフレーズ例。", href: "/articles/negotiation/", label: "年収交渉術" },
              { title: "選考を突破したい", desc: "paiza・Track Testなど実在サービスの形式比較とレベル別対策ロードマップ。", href: "/articles/coding-test/", label: "コーディングテスト対策" },
            ].map((item, i) => (
              <a key={i} href={item.href} className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
                <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>{item.title}</h3>
                <p className="text-sm text-text-light mb-2">{item.desc}</p>
                <span className="text-xs font-bold" style={{ color: "#0891b2" }}>{item.label} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* おすすめエージェント */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>この記事で紹介した質問の多くは、転職エージェントに相談することでより具体的なアドバイスが得られます。以下のエージェントがおすすめです。</p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { name: "レバテックキャリア", badge: "IT特化型", desc: "技術力を正当に評価した求人提案と年収交渉が強み。年収70万円以上アップの実績多数。", href: "/reviews/levtech/", color: "#0891b2" },
              { name: "type女性の転職エージェント", badge: "女性特化型", desc: "女性のキャリア支援に特化。産休育休の取得実績や女性管理職比率など、女性に必要な情報を提供。", href: "/reviews/type-woman/", color: "#7c3aed" },
              { name: "Geekly", badge: "IT・Web特化", desc: "Web系・ゲーム業界に強い。書類選考通過率3.4倍の実績。レジュメ作成のサポートが手厚い。", href: "/reviews/geekly/", color: "#f97066" },
              { name: "ワークポート", badge: "未経験OK", desc: "IT未経験者向けの求人が豊富。転職決定人数No.1の実績。スピーディーな求人紹介が特徴。", href: "/reviews/workport/", color: "#10b981" },
            ].map((agent, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: agent.color }}>{agent.badge}</span>
                  <h3 className="text-lg font-bold">{agent.name}</h3>
                </div>
                <p className="text-sm text-text-light leading-relaxed mb-3">{agent.desc}</p>
                <a href={agent.href} className="text-sm font-bold hover:underline" style={{ color: "#0891b2" }}>{agent.name}の詳細レビューを見る {"\u2192"}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/category-index/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>記事カテゴリ一覧</h3>
              <p className="text-sm text-text-light">すべての記事にアクセスできるハブページ</p>
            </a>
            <a href="/articles/how-to-choose/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>エージェントの選び方</h3>
              <p className="text-sm text-text-light">失敗しない5つのポイント</p>
            </a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>未経験からエンジニアへ</h3>
              <p className="text-sm text-text-light">未経験からの転職を徹底解説</p>
            </a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>年収ガイド</h3>
              <p className="text-sm text-text-light">平均年収と年収アップの方法</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">転職の疑問はエージェントに相談しよう</h2>
            <p className="text-white/90 mb-6">転職エージェントなら、あなたの状況に合わせた具体的なアドバイスがもらえます。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
