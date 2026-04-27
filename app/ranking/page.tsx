import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "【2026年最新】女性エンジニアにおすすめの転職エージェント8選を徹底比較",
  description:
    "女性エンジニアにおすすめの転職エージェント8社を徹底比較。産休育休取得率・リモートワーク率・女性アドバイザー有無など独自基準でランキング。IT特化型から女性特化型まで、あなたに最適なエージェントが見つかります。",
  keywords:
    "女性 エンジニア 転職エージェント おすすめ, 女性エンジニア 転職, 女性 IT転職",
  alternates: { canonical: "/ranking/" },
};

/* ─── Agent Data ─── */

type Agent = {
  rank: number;
  name: string;
  slug: string;
  tagline: string;
  type: string;
  score: number;
  jobs: string;
  feature: string;
  maternityLeave: string;
  remoteRate: string;
  femaleAdvisor: string;
  strengths: string[];
  weaknesses: string[];
  description: string;
  detailedReview: string;
  bestFor: string[];
  recommendation: string;
  recommendationScore: number;
};

const agents: Agent[] = [
  {
    rank: 1,
    name: "レバテックキャリア",
    slug: "levtech-career",
    tagline: "IT・Web業界のエンジニア求人に圧倒的な強み",
    type: "IT特化型",
    score: 4.8,
    jobs: "48,000件以上",
    feature: "年収70万円UP実績あり",
    maternityLeave: "紹介先企業の取得率を事前に確認可能",
    remoteRate: "約60%の求人がリモート対応",
    femaleAdvisor: "在籍あり（指名可）",
    strengths: [
      "IT・Web業界に特化しており、エンジニア求人の質と量が業界トップクラス",
      "年収アップ実績が豊富で、年収70万円以上UPの事例も多数",
      "技術に精通したキャリアアドバイザーが在籍し、スキルに合った提案が受けられる",
    ],
    weaknesses: [
      "IT業界以外の求人は取り扱いがない",
      "地方の求人は都市部と比べて少ない傾向",
    ],
    description:
      "レバテックキャリアは、IT・Web業界のエンジニア転職に特化したエージェントです。業界最大級の48,000件以上のエンジニア求人を保有し、年収70万円以上アップの実績も豊富です。技術トレンドに精通したキャリアアドバイザーが、スキルマッチした求人を的確に提案してくれます。女性エンジニアの転職にも力を入れており、女性アドバイザーの指名も可能です。紹介先企業の産休育休取得率も事前に確認でき、リモートワーク対応求人も約60%と、女性のライフスタイルに配慮した転職支援が受けられます。",
    detailedReview:
      "レバテックキャリアの最大の強みは、IT業界に特化したキャリアアドバイザーの質の高さです。フロントエンド・バックエンド・インフラなど技術領域ごとに専門のアドバイザーが在籍しており、求職者のスキルセットを正確に理解した上で最適な求人を提案してくれます。初回面談では技術的なヒアリングが丁寧に行われ、「この技術スタックなら年収〇〇万円が相場です」といった具体的なアドバイスが得られます。女性エンジニア向けの取り組みとしては、紹介先企業の女性比率や産休育休取得率のデータを事前に共有してくれる点が特筆に値します。また、女性アドバイザーの指名が可能で、ライフイベントを踏まえたキャリア相談がしやすい環境が整っています。リモートワーク対応求人も約60%と多く、フレックスタイム制の求人も豊富です。",
    bestFor: [
      "経験3年以上のWebエンジニア",
      "年収アップを目指している方",
      "技術力を正当に評価してほしい方",
      "リモートワークを希望する方",
    ],
    recommendation:
      "技術力を活かしてキャリアアップしたい女性エンジニアに最もおすすめ。年収アップとワークライフバランスの両立を目指す方に最適です。",
    recommendationScore: 5,
  },
  {
    rank: 2,
    name: "type女性の転職エージェント",
    slug: "type-woman",
    tagline: "女性の転職支援に25年以上の実績",
    type: "女性特化型",
    score: 4.7,
    jobs: "29,000件以上",
    feature: "年間5,000名以上のカウンセリング実績",
    maternityLeave: "女性が働きやすい企業を厳選して紹介",
    remoteRate: "約45%の求人がリモート対応",
    femaleAdvisor: "全員女性アドバイザー",
    strengths: [
      "女性の転職支援に特化しており、女性ならではの悩みに寄り添ったサポートが受けられる",
      "アドバイザーが全員女性で、ライフイベントを考慮したキャリア提案に強い",
      "年間5,000名以上のカウンセリング実績による豊富なノウハウ",
    ],
    weaknesses: [
      "IT特化ではないため、高度な技術職の求人は他社に劣る場合がある",
      "首都圏中心の求人が多く、地方求人は少なめ",
    ],
    description:
      "type女性の転職エージェントは、25年以上にわたり女性の転職支援に特化してきた実績あるエージェントです。アドバイザーが全員女性で、結婚・出産・育児などのライフイベントを考慮したキャリアプランの提案に強みがあります。年間5,000名以上のカウンセリング実績を持ち、女性が本当に働きやすい企業を厳選して紹介してくれます。IT・Web系の求人も充実しており、女性エンジニアの転職にも対応しています。面接対策や書類添削も女性目線できめ細かいサポートが受けられます。",
    detailedReview:
      "type女性の転職エージェントは、女性の転職支援に25年以上の歴史を持つ老舗エージェントです。最大の特徴はアドバイザーが全員女性という点で、「産休後に復帰しやすい企業はどこか」「時短勤務でもキャリアアップできるか」といった女性ならではの相談にも的確に答えてくれます。年間5,000名以上のカウンセリング実績から蓄積されたノウハウは他社にはない強みです。IT・Web系の求人も充実しており、特にWebデザイナーやフロントエンドエンジニアなど、クリエイティブ寄りのIT職種に強い印象です。面接対策では、女性が面接で聞かれやすい質問（結婚予定、出産予定など）への対策もしっかり行ってくれます。企業との条件交渉でも、女性が働きやすい環境づくりに配慮した交渉を行ってくれるため、安心して任せられます。",
    bestFor: [
      "結婚・出産を控えている方",
      "女性アドバイザーに相談したい方",
      "ワークライフバランスを重視する方",
      "面接対策を丁寧にサポートしてほしい方",
    ],
    recommendation:
      "ライフイベントを見据えたキャリア設計をしたい方、女性目線での丁寧なサポートを求める方に特におすすめです。",
    recommendationScore: 5,
  },
  {
    rank: 3,
    name: "Geekly（ギークリー）",
    slug: "geekly",
    tagline: "IT・Web・ゲーム業界に特化した転職エージェント",
    type: "IT特化型",
    score: 4.5,
    jobs: "30,000件以上",
    feature: "独占求人が豊富・書類通過率UP",
    maternityLeave: "紹介先企業情報として提供",
    remoteRate: "約55%の求人がリモート対応",
    femaleAdvisor: "在籍あり",
    strengths: [
      "IT・Web・ゲーム業界に特化しており、独占求人が豊富で他では出会えない求人がある",
      "業界に精通したコンサルタントによる書類添削で、書類通過率が大幅にアップ",
      "入社後のミスマッチが少なく、定着率が高い",
    ],
    weaknesses: [
      "首都圏（東京・神奈川・埼玉・千葉）の求人が中心",
      "IT業界以外の求人は取り扱いがない",
    ],
    description:
      "Geekly（ギークリー）は、IT・Web・ゲーム業界に特化した転職エージェントです。30,000件以上の求人を保有し、そのうち多くが独占求人です。業界に精通したコンサルタントが在籍しており、書類添削により書類通過率が大幅にアップします。女性エンジニアの転職にも対応しており、リモートワーク対応求人も約55%と充実しています。入社後のミスマッチが少なく定着率が高い点も特徴で、長期的なキャリア形成を考える女性エンジニアに適しています。",
    detailedReview:
      "Geeklyの最大の魅力は独占求人の多さです。他のエージェントでは出会えない優良企業の求人が多く、特にメガベンチャーやゲーム業界の求人に強みがあります。コンサルタントはIT業界出身者が多く、技術的な会話がスムーズにできる点も評価が高いです。書類添削サービスでは、企業ごとにカスタマイズした職務経歴書の作成をサポートしてくれ、書類通過率が大幅にアップしたという口コミが多数あります。女性エンジニア向けの特別なサービスはありませんが、リモートワーク対応求人が約55%と高く、フレックスタイム制の求人も多いため、柔軟な働き方を求める女性にも適しています。入社後の定着率が高い点は、企業とのマッチング精度の高さを示しており、長期的なキャリア形成を考える方に安心感があります。",
    bestFor: [
      "独占求人で差別化したい方",
      "ゲーム業界に興味がある方",
      "書類選考に不安がある方",
      "首都圏でIT転職を目指す方",
    ],
    recommendation:
      "独占求人で他にはない選択肢を求める方、書類選考に不安がある方におすすめです。",
    recommendationScore: 4,
  },
  {
    rank: 4,
    name: "ワークポート",
    slug: "workport",
    tagline: "IT特化から総合型へ。未経験転職にも強い",
    type: "IT特化+総合型",
    score: 4.4,
    jobs: "95,000件以上",
    feature: "東京都女性ITエンジニア育成事業を受託",
    maternityLeave: "紹介先企業情報として提供",
    remoteRate: "約40%の求人がリモート対応",
    femaleAdvisor: "在籍あり",
    strengths: [
      "元IT特化型のため、IT業界への知見が深く、エンジニア転職に強い",
      "東京都の女性ITエンジニア育成事業を受託しており、女性のIT転職支援に注力",
      "未経験からのエンジニア転職にも対応しており、キャリアチェンジをサポート",
    ],
    weaknesses: [
      "求人数が多い分、質にばらつきがある場合がある",
      "担当アドバイザーの当たり外れがあるとの口コミも",
    ],
    description:
      "ワークポートは、元IT特化型から総合型に転身したエージェントで、IT業界への深い知見を持ちながら幅広い求人を扱っています。95,000件以上の求人を保有し、全国対応しています。特筆すべきは東京都の「女性ITエンジニア育成事業」を受託している点で、女性のIT業界への参入やキャリアアップを積極的に支援しています。未経験からのエンジニア転職にも強く、プログラミングスクール「みんスク」を無料で提供するなど、手厚いサポートが特徴です。",
    detailedReview:
      "ワークポートはもともとIT特化型エージェントとしてスタートした経緯があり、IT業界への深い知見は今も健在です。総合型に転身してからは求人数が大幅に増加し、95,000件以上の求人を保有しています。最大の特徴は東京都の「女性ITエンジニア育成事業」を受託している点です。これは行政から女性のIT人材育成における信頼を得ている証でもあり、女性エンジニアの転職支援に対する本気度がうかがえます。未経験者向けには無料プログラミングスクール「みんスク」を運営しており、基礎的なプログラミングスキルを習得してから転職活動に臨めます。全国に拠点があるため、地方在住の方でも対面でのサポートが受けられる点も強みです。スピーディーな対応にも定評があり、登録後の面談設定や求人紹介が迅速です。",
    bestFor: [
      "未経験からエンジニアを目指す方",
      "地方在住で対面サポートを受けたい方",
      "スピーディーに転職活動を進めたい方",
      "東京都の女性IT支援事業に興味がある方",
    ],
    recommendation:
      "未経験からエンジニアを目指す方、東京都の女性IT支援事業を活用したい方に最適です。",
    recommendationScore: 4,
  },
  {
    rank: 5,
    name: "doda",
    slug: "doda",
    tagline: "業界2位の求人数を誇る総合型エージェント",
    type: "総合型",
    score: 4.3,
    jobs: "240,000件以上",
    feature: "女性向けコンテンツ「Woman Career」運営",
    maternityLeave: "求人検索で産休育休実績ありフィルター可能",
    remoteRate: "約35%の求人がリモート対応",
    femaleAdvisor: "在籍あり",
    strengths: [
      "業界2位の求人数で、IT・エンジニア系の求人も豊富に保有",
      "「Woman Career」で女性向けの転職コンテンツやイベントを提供",
      "求人検索で産休育休実績あり・リモートワーク可などの条件で絞り込みが可能",
    ],
    weaknesses: [
      "総合型のため、IT特化型と比べてエンジニア領域の専門性ではやや劣る",
      "求人数が多すぎて、自分に合った求人を見つけにくいと感じる場合がある",
    ],
    description:
      "dodaは業界2位の求人数240,000件以上を誇る総合型転職エージェントです。IT・エンジニア系の求人も豊富で、「Woman Career」という女性向けの転職支援コンテンツを運営しています。求人検索では産休育休実績あり・リモートワーク可など、女性が重視する条件でフィルタリングできる点が便利です。エージェントサービスだけでなく、スカウト機能や転職サイト機能も備えており、自分のペースで転職活動を進められます。",
    detailedReview:
      "dodaは総合型エージェントならではの圧倒的な求人数が魅力です。IT・エンジニア系だけでも数万件規模の求人があり、大手企業からスタートアップまで幅広い選択肢があります。女性向けの取り組みとして「Woman Career」を運営しており、女性のキャリアに関するコラムやイベント、年収査定ツールなどを提供しています。求人検索機能が優れており、産休育休実績あり・リモートワーク可・フレックスタイム制・女性活躍推進企業などの条件で絞り込みができます。エージェントサービスに加えて、企業から直接オファーが届くスカウト機能も利用でき、自分のペースで転職活動を進められる柔軟性があります。面接対策セミナーやキャリアアドバイスイベントも定期的に開催されており、情報収集の場としても活用できます。",
    bestFor: [
      "幅広い選択肢から比較検討したい方",
      "エージェントとスカウトを併用したい方",
      "自分のペースで転職活動を進めたい方",
      "大手企業への転職を希望する方",
    ],
    recommendation:
      "幅広い選択肢から比較検討したい方、自分のペースで転職活動を進めたい方におすすめです。",
    recommendationScore: 4,
  },
  {
    rank: 6,
    name: "リクルートエージェント",
    slug: "recruit-agent",
    tagline: "業界最大手。圧倒的な求人数と実績",
    type: "総合型",
    score: 4.2,
    jobs: "740,000件以上",
    feature: "業界No.1の求人数と転職支援実績",
    maternityLeave: "大手企業中心に産休育休実績豊富な求人多数",
    remoteRate: "約30%の求人がリモート対応",
    femaleAdvisor: "在籍あり",
    strengths: [
      "業界No.1の求人数74万件以上で、あらゆる選択肢を比較検討できる",
      "転職支援実績No.1で、豊富なノウハウに基づくサポートが受けられる",
      "大手企業の求人が多く、福利厚生の充実した企業への転職に強い",
    ],
    weaknesses: [
      "求人数が膨大で、エンジニア以外の求人も多いため精査が必要",
      "担当者が抱える求職者数が多く、個別サポートが薄くなる場合がある",
    ],
    description:
      "リクルートエージェントは、業界最大の740,000件以上の求人を保有する最大手転職エージェントです。IT・エンジニア系の求人も数万件規模で保有しており、大手企業からスタートアップまで幅広い選択肢があります。転職支援実績もNo.1で、書類添削や面接対策のノウハウが蓄積されています。福利厚生が充実した大手企業の求人が多い点は、ライフイベントを考慮する女性エンジニアにとって大きなメリットです。",
    detailedReview:
      "リクルートエージェントは名実ともに業界No.1のエージェントです。74万件以上という圧倒的な求人数は他の追随を許しません。IT・エンジニア系だけでも数万件規模の求人を保有しており、特に大手SIer、メーカー系IT企業、コンサルティングファームなどの求人が豊富です。転職支援実績No.1の経験から蓄積された面接対策ノウハウは質が高く、過去の面接質問データベースを基にした対策が受けられます。女性特化のサービスは少ないものの、大手企業の求人が多いため、産休育休制度・時短勤務制度・福利厚生が充実した企業への転職に有利です。担当者が抱える求職者数が多いため、能動的にコミュニケーションを取ることがスムーズな転職活動のコツです。非公開求人の割合が高いため、登録しないと見られない求人が多い点も特徴です。",
    bestFor: [
      "大手企業・有名企業への転職を希望する方",
      "幅広い業界の選択肢を見たい方",
      "福利厚生を重視する方",
      "転職活動が初めての方",
    ],
    recommendation:
      "大手企業への転職を視野に入れている方、まずは幅広い選択肢を見たい方におすすめです。",
    recommendationScore: 3,
  },
  {
    rank: 7,
    name: "Green（グリーン）",
    slug: "green",
    tagline: "IT業界のカジュアル転職プラットフォーム",
    type: "IT特化型",
    score: 4.1,
    jobs: "30,000件以上",
    feature: "カジュアル面談で企業と気軽に話せる",
    maternityLeave: "企業ページで福利厚生情報を確認可能",
    remoteRate: "約50%の求人がリモート対応",
    femaleAdvisor: "プラットフォーム型のため該当なし",
    strengths: [
      "カジュアル面談機能で、応募前に企業の雰囲気を確認できる",
      "スタートアップ・ベンチャー企業の求人が豊富で、裁量の大きい仕事に就ける",
      "企業から直接スカウトが届くため、自分の市場価値を把握できる",
    ],
    weaknesses: [
      "エージェント型ではないため、手厚いサポートは期待できない",
      "大手企業の求人は他サービスと比べて少ない",
    ],
    description:
      "Green（グリーン）は、IT業界に特化した転職プラットフォームです。30,000件以上のIT求人を掲載しており、スタートアップやベンチャー企業の求人が特に豊富です。最大の特徴は「カジュアル面談」機能で、正式な選考前に企業と気軽に話すことができます。企業から直接スカウトが届く仕組みで、自分の市場価値を把握するのにも役立ちます。リモートワーク対応求人も約50%と高く、柔軟な働き方を求める女性エンジニアに人気です。",
    detailedReview:
      "Greenはエージェント型ではなくプラットフォーム型のサービスです。そのため、担当アドバイザーによるサポートはありませんが、自分のペースで自由に転職活動を進められます。最大の特徴である「カジュアル面談」機能は、正式な選考に進む前に企業の雰囲気や仕事内容を確認できるため、ミスマッチを防ぐのに非常に有効です。特にスタートアップやベンチャー企業の求人が豊富で、裁量の大きいポジションや最新技術を使ったプロジェクトに参画したい方に最適です。企業から直接スカウトが届く仕組みで、自分の市場価値を客観的に把握できます。リモートワーク対応求人も約50%と高い水準です。社員口コミや企業のカルチャー情報も充実しており、企業選びの参考になります。",
    bestFor: [
      "スタートアップで働きたい方",
      "カジュアルに転職活動を始めたい方",
      "自分のペースで活動したい方",
      "市場価値を把握したい方",
    ],
    recommendation:
      "スタートアップで裁量の大きい仕事をしたい方、カジュアルに転職活動を始めたい方におすすめです。",
    recommendationScore: 3,
  },
  {
    rank: 8,
    name: "ReWorks（リワークス）",
    slug: "reworks",
    tagline: "フルリモート求人に特化した転職サイト",
    type: "フルリモート特化型",
    score: 4.0,
    jobs: "非公開",
    feature: "フルリモート求人100%・女性向けサポート",
    maternityLeave: "フルリモート企業のため柔軟な制度が多い",
    remoteRate: "100%（フルリモート特化）",
    femaleAdvisor: "在籍あり",
    strengths: [
      "すべての求人がフルリモートで、場所を問わず働ける",
      "女性向けの転職サポートが充実しており、ライフスタイルに合った働き方を提案",
      "SEO・マーケティング系のエンジニア求人も豊富",
    ],
    weaknesses: [
      "求人数は大手と比べて少ない",
      "フルリモート以外の求人は取り扱いがない",
    ],
    description:
      "ReWorks（リワークス）は、フルリモート求人に100%特化した転職サイトです。すべての求人がフルリモートのため、地方在住の方や育児中の方でも場所を問わず働けます。女性向けの転職サポートにも力を入れており、キャリアカウンセリングや無料の研修制度も提供しています。SEO・マーケティング系を含むエンジニア求人も豊富で、IT業界でのフルリモートワークを実現したい女性に最適なサービスです。",
    detailedReview:
      "ReWorksはフルリモート求人に100%特化しているという点で、他のエージェントとは一線を画すサービスです。すべての求人がフルリモートのため、地方在住の方や海外在住の方でも利用できます。育児中で出社が難しい方、介護と両立しながら働きたい方にも最適です。女性向けの転職サポートが充実しており、キャリアカウンセリングでは在宅ワークに適したスキルの棚卸しや、フルリモート環境でのキャリアアップ戦略を一緒に考えてくれます。未経験者向けの無料研修制度も提供しており、Webデザインやマーケティングの基礎スキルを習得してから転職活動に臨めます。SEO・マーケティング系のエンジニア求人が特に豊富で、コンテンツマーケティングやデータ分析関連のポジションも多数あります。求人数は大手と比べると少ないものの、フルリモート特化という明確な強みがあります。",
    bestFor: [
      "フルリモートで働きたい方",
      "地方・海外在住の方",
      "育児や介護と両立したい方",
      "未経験からリモートワークを始めたい方",
    ],
    recommendation:
      "フルリモートで働きたい方、地方在住の方、育児と両立しながらエンジニアとして働きたい方に最適です。",
    recommendationScore: 4,
  },
];

/* ─── Comparison Criteria ─── */

type CriterionRow = {
  name: string;
  values: string[];
};

const comparisonCriteria: { label: string; rows: CriterionRow[] } = {
  label: "6基準比較表",
  rows: [
    {
      name: "IT求人の専門性",
      values: ["◎", "○", "◎", "◎", "○", "○", "◎", "○"],
    },
    {
      name: "求人数",
      values: [
        "48,000+",
        "29,000+",
        "30,000+",
        "95,000+",
        "240,000+",
        "740,000+",
        "30,000+",
        "非公開",
      ],
    },
    {
      name: "産休育休サポート",
      values: ["◎", "◎", "○", "○", "◎", "○", "△", "◎"],
    },
    {
      name: "リモートワーク率",
      values: ["60%", "45%", "55%", "40%", "35%", "30%", "50%", "100%"],
    },
    {
      name: "女性アドバイザー",
      values: ["○", "◎", "○", "○", "○", "○", "−", "○"],
    },
    {
      name: "未経験者対応",
      values: ["△", "○", "△", "◎", "○", "○", "○", "◎"],
    },
  ],
};

/* ─── Type-based recommendations ─── */

const typeRecommendations = [
  {
    type: "技術力を活かしてキャリアアップしたい方",
    agents: ["レバテックキャリア", "Geekly（ギークリー）"],
    reason:
      "IT特化型のエージェントが最適。技術に精通したアドバイザーが、スキルに見合った年収アップを実現します。",
  },
  {
    type: "ライフイベントを考慮した転職がしたい方",
    agents: ["type女性の転職エージェント", "doda"],
    reason:
      "女性特化型や女性向けサービスが充実したエージェントがおすすめ。産休育休取得率の高い企業を紹介してもらえます。",
  },
  {
    type: "未経験からエンジニアを目指す方",
    agents: ["ワークポート", "ReWorks（リワークス）"],
    reason:
      "未経験者向けの研修制度やサポートが充実。特にワークポートは無料プログラミングスクールも運営しています。",
  },
  {
    type: "フルリモートで働きたい方",
    agents: ["ReWorks（リワークス）", "Green（グリーン）"],
    reason:
      "リモートワーク求人が豊富なサービスを選びましょう。ReWorksは100%フルリモート求人です。",
  },
  {
    type: "幅広い選択肢から選びたい方",
    agents: ["リクルートエージェント", "doda"],
    reason:
      "総合型の大手エージェントなら、IT以外の選択肢も含めて幅広く比較検討できます。",
  },
];

/* ─── FAQ ─── */

const rankingFaqs = [
  {
    question: "女性エンジニアが転職エージェントを使うメリットは？",
    answer:
      "非公開求人へのアクセス、年収交渉の代行、面接対策、書類添削など、個人での転職活動では得られないサポートが受けられます。特に女性エンジニアの場合、産休育休制度や女性の活躍状況など、求人票だけではわからない企業の内部情報を教えてもらえる点が大きなメリットです。",
  },
  {
    question: "転職エージェントは何社登録すべき？",
    answer:
      "2〜3社の登録がおすすめです。IT特化型（レバテックキャリアやGeekly）と女性特化型（type女性の転職エージェント）を組み合わせるのが理想的です。各社の非公開求人は重複しないことが多いため、複数登録することで選択肢が広がります。",
  },
  {
    question: "女性エンジニアの平均年収はどのくらい？",
    answer:
      "経験やスキル、勤務地域によって大きく異なりますが、経験3年以上のWebエンジニアで450〜600万円、経験5年以上のシニアエンジニアで600〜800万円が一つの目安です。転職エージェントを活用することで、年収アップが期待できます。",
  },
  {
    question: "育児中でも転職活動はできる？",
    answer:
      "はい、可能です。多くのエージェントがオンライン面談に対応しており、育児の合間に転職活動を進められます。特にtype女性の転職エージェントやReWorksは、育児中の女性の転職支援に力を入れています。",
  },
  {
    question: "未経験からエンジニアに転職するならどのエージェントがいい？",
    answer:
      "ワークポートがおすすめです。無料プログラミングスクール「みんスク」を運営しており、学習から転職までワンストップでサポートしてくれます。東京都の女性ITエンジニア育成事業も受託しています。ReWorksもフルリモートで未経験対応の求人があります。",
  },
  {
    question: "30代女性エンジニアにおすすめのエージェントは？",
    answer:
      "30代はキャリアの方向性を固める重要な時期です。技術力を活かしたい方はレバテックキャリア、マネジメントも視野に入れたい方はdodaやリクルートエージェントがおすすめです。ライフイベントを考慮するならtype女性の転職エージェントも検討してください。",
  },
  {
    question: "転職エージェントを利用する際の注意点は？",
    answer:
      "希望条件は明確に伝えること、複数社を比較すること、紹介された求人は自分でも調べること、担当者との相性が合わなければ変更を依頼することが大切です。また、転職を急かされても自分のペースを守りましょう。",
  },
  {
    question: "リモートワーク求人の多いエージェントは？",
    answer:
      "ReWorks（リワークス）はフルリモート求人100%で圧倒的です。IT特化型ではレバテックキャリア（約60%）、Geekly（約55%）、Green（約50%）がリモート求人が豊富です。dodaやリクルートエージェントでもリモート可で検索できます。",
  },
  {
    question: "転職エージェント経由で年収アップは可能？",
    answer:
      "はい、可能です。エージェントは企業との年収交渉を代行してくれます。特にレバテックキャリアでは年収70万円以上アップの実績があります。市場価値に見合った適正年収を提示してもらえるため、自分では交渉しにくい年収面の改善が期待できます。",
  },
  {
    question: "地方在住でも利用できるエージェントは？",
    answer:
      "オンライン面談対応のエージェントなら全国どこからでも利用可能です。求人が全国対応しているのはワークポート、doda、リクルートエージェントです。ReWorksはフルリモート求人のため居住地を問いません。Greenも全国のリモート求人を扱っています。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: rankingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* ─── Helper Components ─── */

function StarRating({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${score}/${max}点`}>
      {Array.from({ length: max }, (_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < Math.floor(score) ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-sm font-bold text-text">{score}</span>
    </div>
  );
}

function RankBadge({ rank }: { rank: number }) {
  const colors: Record<number, string> = {
    1: "bg-yellow-400 text-yellow-900",
    2: "bg-gray-300 text-gray-700",
    3: "bg-amber-600 text-white",
  };
  const colorClass = colors[rank] || "bg-primary-light text-primary-dark";

  return (
    <span
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg ${colorClass}`}
    >
      {rank}
    </span>
  );
}

function RecommendationBadge({ score }: { score: number }) {
  const labels: Record<number, { text: string; color: string }> = {
    5: { text: "非常におすすめ", color: "bg-primary text-white" },
    4: { text: "おすすめ", color: "bg-teal-100 text-teal-800" },
    3: { text: "条件付きおすすめ", color: "bg-blue-100 text-blue-800" },
  };
  const badge = labels[score] || labels[3];

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${badge.color}`}
    >
      {badge.text}
    </span>
  );
}

/* ─── Page ─── */

export default function RankingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4">
        <Breadcrumb
          items={[
            { href: "/", label: "トップ" },
            { label: "おすすめ転職エージェント" },
          ]}
        />
      </div>

      {/* Title Section */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-primary font-bold mb-3">
            2026年4月最新
          </p>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            女性エンジニアにおすすめの
            <br />
            <span className="text-gradient">転職エージェント8選</span>
            を徹底比較
          </h1>
          <p className="mt-4 text-text-light leading-relaxed">
            「女性向け転職サイト」と「ITエンジニア向け転職サイト」はたくさんありますが、
            <strong className="text-text">「女性エンジニア」に特化した比較情報</strong>
            はほとんどありません。当サイトでは、産休育休取得率・リモートワーク率・女性アドバイザー有無など、
            女性エンジニアが本当に知りたい6つの基準で8社を徹底比較しています。
          </p>
          <p className="mt-4 text-text-light leading-relaxed">
            IT特化型エージェントから女性特化型、フルリモート特化型まで、
            それぞれの強みと弱みを客観的に分析。あなたの経験・スキル・ライフスタイルに合った
            最適なエージェントが見つかります。すべてのエージェントは<strong className="text-text">完全無料</strong>で利用可能です。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-block px-3 py-1.5 rounded-full bg-white/80 text-sm text-primary-dark font-medium">
              IT特化型 3社
            </span>
            <span className="inline-block px-3 py-1.5 rounded-full bg-white/80 text-sm text-primary-dark font-medium">
              女性特化型 1社
            </span>
            <span className="inline-block px-3 py-1.5 rounded-full bg-white/80 text-sm text-primary-dark font-medium">
              総合型 2社
            </span>
            <span className="inline-block px-3 py-1.5 rounded-full bg-white/80 text-sm text-primary-dark font-medium">
              IT特化+総合型 1社
            </span>
            <span className="inline-block px-3 py-1.5 rounded-full bg-white/80 text-sm text-primary-dark font-medium">
              フルリモート特化型 1社
            </span>
          </div>
          <p className="mt-6 text-sm text-text-light">
            最終更新: 2026年4月13日 | 比較対象: 8社 | 比較基準: 6項目
          </p>
        </div>
      </section>

      {/* 選び方ポイント */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <span className="text-primary">&#9670;</span>
            女性エンジニアの転職エージェント選び方ポイント
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "1. IT業界への専門性があるか",
                desc: "エンジニアの技術スタックやキャリアパスを理解しているアドバイザーがいるエージェントを選びましょう。IT特化型エージェントなら、スキルに見合った求人を的確に紹介してもらえます。",
              },
              {
                title: "2. 女性向けのサポートがあるか",
                desc: "女性アドバイザーの在籍、産休育休取得率の情報提供、女性向けイベントの開催など、女性ならではの不安や希望に寄り添えるサポート体制があるかを確認しましょう。",
              },
              {
                title: "3. リモートワーク求人が豊富か",
                desc: "柔軟な働き方を実現するために、リモートワーク対応求人の割合を確認しましょう。フルリモートを希望するなら、リモート特化型のサービスも検討の価値があります。",
              },
              {
                title: "4. 求人の質と量のバランス",
                desc: "求人数だけでなく、独占求人や非公開求人の質も重要です。複数のエージェントを併用して、求人の幅を広げるのがおすすめです。",
              },
              {
                title: "5. 未経験者向けのサポート体制",
                desc: "未経験からエンジニアを目指す場合は、研修制度やプログラミングスクールの提供、ポートフォリオ作成サポートなど、未経験者向けの支援が充実しているかを確認しましょう。",
              },
              {
                title: "6. サポートの手厚さとレスポンス速度",
                desc: "担当アドバイザーのレスポンスの速さ、面接対策の質、書類添削の丁寧さなど、サポートの手厚さもエージェント選びの重要なポイントです。口コミや評判を参考にしましょう。",
              },
            ].map((point) => (
              <div key={point.title} className="card">
                <h3 className="font-bold text-base text-primary-dark">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8社比較表 */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <span className="text-primary">&#9670;</span>
            おすすめ転職エージェント8社 一覧比較表
          </h2>
          <p className="mt-3 text-sm text-text-light">
            横スクロールで全8社を比較できます
          </p>
          <div className="mt-6 overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[800px] bg-white border border-border rounded-lg text-sm">
              <thead>
                <tr className="bg-primary-light">
                  <th className="px-4 py-3 text-left font-bold text-primary-dark border-b border-border">
                    順位
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-primary-dark border-b border-border">
                    サービス名
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-primary-dark border-b border-border">
                    タイプ
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-primary-dark border-b border-border">
                    求人数
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-primary-dark border-b border-border">
                    リモート率
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-primary-dark border-b border-border">
                    女性アドバイザー
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-primary-dark border-b border-border">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                {agents.map((agent) => (
                  <tr
                    key={agent.slug}
                    className="border-b border-border hover:bg-primary-light/30 transition-colors"
                  >
                    <td className="px-4 py-3 font-bold text-center">
                      {agent.rank}
                    </td>
                    <td className="px-4 py-3 font-bold">
                      <a
                        href={`#${agent.slug}`}
                        className="text-primary hover:underline"
                      >
                        {agent.name}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-text-light">{agent.type}</td>
                    <td className="px-4 py-3">{agent.jobs}</td>
                    <td className="px-4 py-3">{agent.remoteRate}</td>
                    <td className="px-4 py-3">{agent.femaleAdvisor}</td>
                    <td className="px-4 py-3 text-text-light text-xs">
                      {agent.feature}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 各社詳細 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 mb-10">
            <span className="text-primary">&#9670;</span>
            各社の詳細レビュー
          </h2>

          <div className="space-y-12">
            {agents.map((agent) => (
              <article
                key={agent.slug}
                id={agent.slug}
                className="card scroll-mt-24"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start gap-4 mb-6">
                  <RankBadge rank={agent.rank} />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">{agent.name}</h3>
                      <span className="text-xs px-2 py-0.5 rounded bg-primary-light text-primary-dark font-bold">
                        {agent.type}
                      </span>
                    </div>
                    <p className="text-sm text-text-light">{agent.tagline}</p>
                    <div className="mt-2">
                      <StarRating score={agent.score} />
                    </div>
                  </div>
                  <RecommendationBadge score={agent.recommendationScore} />
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-text-light mb-4">
                  {agent.description}
                </p>

                {/* Detailed Review */}
                <div className="bg-section-bg rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-sm text-primary-dark mb-2">
                    詳細レビュー
                  </h4>
                  <p className="text-sm leading-relaxed text-text-light">
                    {agent.detailedReview}
                  </p>
                </div>

                {/* Best For */}
                <div className="mb-6">
                  <h4 className="font-bold text-sm mb-3">こんな方におすすめ</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.bestFor.map((item, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1.5 rounded-full bg-primary-light text-primary-dark text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-section-bg rounded-lg p-4">
                    <p className="text-xs text-text-light mb-1">求人数</p>
                    <p className="font-bold text-sm">{agent.jobs}</p>
                  </div>
                  <div className="bg-section-bg rounded-lg p-4">
                    <p className="text-xs text-text-light mb-1">
                      リモートワーク率
                    </p>
                    <p className="font-bold text-sm">{agent.remoteRate}</p>
                  </div>
                  <div className="bg-section-bg rounded-lg p-4">
                    <p className="text-xs text-text-light mb-1">
                      産休育休サポート
                    </p>
                    <p className="font-bold text-sm">{agent.maternityLeave}</p>
                  </div>
                  <div className="bg-section-bg rounded-lg p-4">
                    <p className="text-xs text-text-light mb-1">
                      女性アドバイザー
                    </p>
                    <p className="font-bold text-sm">{agent.femaleAdvisor}</p>
                  </div>
                </div>

                {/* Merits & Demerits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold">
                        &#9675;
                      </span>
                      メリット
                    </h4>
                    <ul className="space-y-2">
                      {agent.strengths.map((s, i) => (
                        <li
                          key={i}
                          className="text-sm text-text-light flex items-start gap-2"
                        >
                          <span className="text-teal-500 mt-1 shrink-0">
                            &#10003;
                          </span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold">
                        &#9651;
                      </span>
                      デメリット
                    </h4>
                    <ul className="space-y-2">
                      {agent.weaknesses.map((w, i) => (
                        <li
                          key={i}
                          className="text-sm text-text-light flex items-start gap-2"
                        >
                          <span className="text-red-400 mt-1 shrink-0">
                            &#9651;
                          </span>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-primary-light rounded-lg p-4">
                  <h4 className="font-bold text-sm text-primary-dark mb-2">
                    女性エンジニアへのおすすめ度
                  </h4>
                  <p className="text-sm text-text-light leading-relaxed">
                    {agent.recommendation}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6基準比較表 */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <span className="text-primary">&#9670;</span>
            {comparisonCriteria.label}
          </h2>
          <p className="mt-3 text-sm text-text-light">
            6つの基準で8社を横断比較。横スクロールで全社を確認できます。
          </p>
          <div className="mt-6 overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[800px] bg-white border border-border rounded-lg text-sm">
              <thead>
                <tr className="bg-primary-light">
                  <th className="px-4 py-3 text-left font-bold text-primary-dark border-b border-border sticky left-0 bg-primary-light z-10">
                    比較項目
                  </th>
                  {agents.map((agent) => (
                    <th
                      key={agent.slug}
                      className="px-3 py-3 text-center font-bold text-primary-dark border-b border-border text-xs whitespace-nowrap"
                    >
                      {agent.name.replace(/（.*）/, "")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonCriteria.rows.map((row) => (
                  <tr
                    key={row.name}
                    className="border-b border-border hover:bg-primary-light/30"
                  >
                    <td className="px-4 py-3 font-bold sticky left-0 bg-white z-10 border-r border-border">
                      {row.name}
                    </td>
                    {row.values.map((val, i) => (
                      <td key={i} className="px-3 py-3 text-center">
                        <span
                          className={
                            val === "◎"
                              ? "text-primary font-bold"
                              : val === "○"
                                ? "text-teal-600"
                                : val === "△"
                                  ? "text-yellow-600"
                                  : val === "−"
                                    ? "text-gray-400"
                                    : ""
                          }
                        >
                          {val}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 女性エンジニア転職市場の動向 */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <span className="text-primary">&#9670;</span>
            2026年 女性エンジニア転職市場の動向
          </h2>
          <div className="mt-8 space-y-6">
            <div className="card">
              <h3 className="font-bold text-base text-primary-dark">
                IT人材不足の深刻化と女性エンジニアへの期待
              </h3>
              <p className="mt-3 text-sm text-text-light leading-relaxed">
                経済産業省の調査によると、2030年にはIT人材が最大79万人不足すると予測されています。
                この人材不足を背景に、女性エンジニアの採用に積極的な企業が増加しています。
                特にDX推進やAI活用が急速に進む中、多様な視点を持つ女性エンジニアへの期待は高まる一方です。
                企業側も女性が働きやすい環境整備を進めており、産休育休制度の充実やリモートワークの導入が加速しています。
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-base text-primary-dark">
                リモートワーク定着による転職市場の変化
              </h3>
              <p className="mt-3 text-sm text-text-light leading-relaxed">
                コロナ禍以降、IT業界ではリモートワークが急速に普及しました。2026年現在、
                IT企業の約70%がハイブリッドワークまたはフルリモートを導入しています。
                これにより、地方在住の女性エンジニアでも都市部の企業に転職できるケースが増えています。
                また、育児や介護と両立しやすいリモートワーク求人の増加は、
                女性エンジニアにとって転職のハードルを大きく下げる要因となっています。
                転職エージェント各社もリモートワーク求人の取り扱いを強化しており、
                当サイトで比較しているエージェントのリモート率は30%〜100%と幅広い選択肢があります。
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-base text-primary-dark">
                女性エンジニアの年収トレンド
              </h3>
              <p className="mt-3 text-sm text-text-light leading-relaxed">
                IT人材不足を背景に、エンジニアの年収は上昇傾向にあります。
                特にクラウド・AI・セキュリティ分野のスキルを持つエンジニアの年収上昇が顕著です。
                女性エンジニアの場合、経験3年以上で450〜600万円、5年以上で600〜800万円が目安です。
                テックリード・エンジニアリングマネージャーなどのポジションでは1,000万円以上も珍しくありません。
                転職エージェントを活用することで、市場価値に見合った年収を提示してもらえるため、
                特に年収交渉に不安がある方はエージェントの利用がおすすめです。
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-base text-primary-dark">
                注目のスキル・技術領域
              </h3>
              <p className="mt-3 text-sm text-text-light leading-relaxed">
                2026年の転職市場で特に需要が高いスキル・技術領域は以下の通りです。
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "クラウド（AWS / GCP / Azure） - クラウドインフラの設計・構築・運用スキル",
                  "AI / 機械学習 - データサイエンス、MLOps、生成AI活用",
                  "セキュリティ - サイバーセキュリティ、DevSecOps",
                  "SRE / DevOps - インフラ自動化、CI/CD、モニタリング",
                  "フロントエンド（React / Next.js / TypeScript） - モダンなWeb開発スキル",
                  "モバイル（Flutter / React Native / Swift / Kotlin） - クロスプラットフォーム開発",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-text-light flex items-start gap-2"
                  >
                    <span className="text-primary mt-1 shrink-0">&#8226;</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* エージェント活用のコツ */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <span className="text-primary">&#9670;</span>
            転職エージェントを最大限活用する5つのコツ
          </h2>
          <div className="mt-8 space-y-6">
            <div className="card">
              <h3 className="font-bold text-base">
                <span className="text-primary mr-2">1.</span>
                希望条件は具体的かつ正直に伝える
              </h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">
                「リモートワーク週3日以上」「年収550万円以上」「産休育休取得実績のある企業」など、
                具体的な条件を伝えることで、マッチ度の高い求人を紹介してもらえます。
                ライフイベントの予定がある場合も、事前に伝えておくことで適切な求人を提案してもらえます。
                遠慮せず正直に希望を伝えることが、良いマッチングの第一歩です。
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-base">
                <span className="text-primary mr-2">2.</span>
                複数のエージェントを並行して利用する
              </h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">
                2〜3社の登録が理想的です。IT特化型（レバテックキャリア、Geekly）と
                女性特化型（type女性の転職エージェント）を組み合わせることで、
                非公開求人を含む幅広い選択肢にアクセスできます。
                各エージェントの非公開求人は重複しないことが多いため、
                複数登録することで求人の網羅性が大幅に上がります。
                ただし、4社以上になると管理が大変になるため、2〜3社が適正数です。
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-base">
                <span className="text-primary mr-2">3.</span>
                ポートフォリオ・GitHubを充実させる
              </h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">
                エンジニアの転職では、技術力を可視化することが重要です。
                ポートフォリオサイトやGitHubのリポジトリを充実させておくことで、
                アドバイザーが適切な求人を提案しやすくなります。
                また、面接時の技術力アピールにも直結します。
                個人開発やOSS貢献の実績があれば、積極的にアピールしましょう。
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-base">
                <span className="text-primary mr-2">4.</span>
                担当者との相性を見極める
              </h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">
                エージェントの質は担当アドバイザーによって大きく変わります。
                技術的な理解が浅い、レスポンスが遅い、希望と合わない求人ばかり紹介するなど、
                相性が悪いと感じたら遠慮なく担当変更を申し出ましょう。
                多くのエージェントは担当変更に対応しています。
                女性アドバイザーを希望する場合も、初回面談時に伝えれば対応してもらえます。
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-base">
                <span className="text-primary mr-2">5.</span>
                紹介された企業は自分でもリサーチする
              </h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">
                エージェントから紹介された企業についても、口コミサイトやSNS、
                企業の技術ブログなどで自分でもリサーチしましょう。
                特に女性の働きやすさについては、口コミサイトの「女性の働きやすさ」スコアや、
                くるみん認定・えるぼし認定の取得状況を確認するのがおすすめです。
                実際に働いている女性エンジニアのブログやSNSの投稿も参考になります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* タイプ別おすすめ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <span className="text-primary">&#9670;</span>
            タイプ別おすすめエージェント
          </h2>
          <p className="mt-3 text-sm text-text-light">
            あなたの希望に合ったエージェントを見つけましょう
          </p>
          <div className="mt-8 space-y-6">
            {typeRecommendations.map((rec) => (
              <div key={rec.type} className="card">
                <h3 className="font-bold text-base text-primary-dark">
                  {rec.type}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {rec.agents.map((name) => (
                    <span
                      key={name}
                      className="inline-block px-3 py-1 rounded-full bg-primary-light text-primary-dark text-sm font-bold"
                    >
                      {name}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-text-light leading-relaxed">
                  {rec.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 年代別のポイント */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <span className="text-primary">&#9670;</span>
            年代別・転職エージェント活用のポイント
          </h2>
          <div className="mt-8 space-y-6">
            <div className="card">
              <h3 className="font-bold text-base text-primary-dark">
                20代の女性エンジニア
              </h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">
                20代は技術スキルを幅広く身につけるチャンスの時期です。
                未経験からのキャリアチェンジも20代なら選択肢が豊富です。
                ワークポートの無料プログラミングスクール「みんスク」や、
                レバテックキャリアでの年収アップ転職を検討してみましょう。
                将来のライフイベントを見据えて、産休育休制度が整った企業を選ぶのも賢い選択です。
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-base text-primary-dark">
                30代の女性エンジニア
              </h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">
                30代はキャリアの方向性を固める重要な時期です。
                スペシャリストとして技術を深めるか、マネジメントに移行するか、
                フリーランスとして独立するかなど、選択肢が多い年代です。
                レバテックキャリアやGeeklyで技術力を活かした転職を、
                type女性の転職エージェントでライフイベントを考慮した転職を検討しましょう。
                30代後半になると選択肢が狭まる傾向があるため、早めの行動がおすすめです。
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-base text-primary-dark">
                40代以降の女性エンジニア
              </h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">
                40代以降は、豊富な経験と専門性を活かしたポジションを狙いましょう。
                テックリード、アーキテクト、エンジニアリングマネージャーなど、
                リーダーシップポジションの求人が多いリクルートエージェントやdodaが有力です。
                また、リモートワークを活用して柔軟に働きたい場合は、
                ReWorksやGreenも選択肢に入ります。
                年齢よりもスキルと経験で評価されるのがIT業界の特徴ですので、
                自信を持って転職活動に臨みましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <span className="text-primary">&#9670;</span>
            よくある質問（FAQ）
          </h2>
          <div className="mt-8 space-y-4">
            {rankingFaqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-bold text-sm flex items-start gap-3">
                  <span className="text-primary font-bold text-base leading-none mt-0.5 shrink-0">
                    Q{index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm text-text-light leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 転職活動のステップ */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <span className="text-primary">&#9670;</span>
            女性エンジニアの転職活動ステップ
          </h2>
          <p className="mt-3 text-sm text-text-light">
            エージェント登録から内定承諾まで、一般的な転職活動の流れを解説します
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                step: "STEP 1",
                title: "エージェントへの登録（所要時間：5〜10分）",
                desc: "まずは気になるエージェントのWebサイトから無料登録しましょう。登録情報は氏名・連絡先・希望条件・職務経歴の概要です。2〜3社に登録するのがおすすめです。IT特化型と女性特化型を組み合わせることで、求人の幅が大きく広がります。",
              },
              {
                step: "STEP 2",
                title: "キャリアアドバイザーとの面談（1〜2週間以内）",
                desc: "登録後、担当のキャリアアドバイザーから連絡が来ます。オンラインまたは対面で60〜90分程度の面談を行い、これまでの経験やスキル、転職の希望条件、キャリアプランについてヒアリングされます。産休育休やリモートワークなどの希望も遠慮なく伝えましょう。",
              },
              {
                step: "STEP 3",
                title: "求人紹介・書類準備（2〜3週間）",
                desc: "面談の内容をもとに、マッチする求人を紹介してもらいます。気になる求人があれば詳細を確認し、応募するかどうかを決めます。並行して職務経歴書の添削も受けられます。エージェントの添削を受けることで、書類通過率が大幅にアップします。",
              },
              {
                step: "STEP 4",
                title: "応募・面接（3〜6週間）",
                desc: "書類選考を通過したら面接に進みます。面接対策もエージェントがサポートしてくれます。過去の面接質問データや企業の面接傾向を教えてもらえるため、準備がしやすくなります。複数社を並行して受けることで、比較検討の材料が増えます。",
              },
              {
                step: "STEP 5",
                title: "内定・年収交渉・入社準備（2〜4週間）",
                desc: "内定が出たら、年収や入社日の交渉をエージェントが代行してくれます。自分では言い出しにくい年収交渉もプロに任せられるのはエージェント利用の大きなメリットです。現職の退職手続きや引き継ぎについてもアドバイスを受けられます。",
              },
            ].map((item) => (
              <div key={item.step} className="card">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary text-white text-xs font-bold whitespace-nowrap shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-bold text-base">{item.title}</h3>
                    <p className="mt-2 text-sm text-text-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 card bg-primary-light border-primary/20">
            <p className="text-sm leading-relaxed text-text-light">
              <strong className="text-text">転職活動の全体スケジュール：</strong>
              登録から内定承諾まで、一般的に2〜3ヶ月程度です。
              ただし、在職中の場合はスケジュールに余裕を持って3〜4ヶ月を見込んでおくと安心です。
              エージェントは無料で利用でき、転職しなくても料金は発生しませんので、
              まずは情報収集の気持ちで登録してみることをおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* まとめ & CTA */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <span className="text-primary">&#9670;</span>
            まとめ：女性エンジニアの転職を成功させるために
          </h2>
          <div className="mt-6 space-y-4">
            <div className="card">
              <h3 className="font-bold text-sm text-primary-dark mb-2">
                当サイトの比較結果
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                女性エンジニアの転職では、IT業界への専門性と女性向けサポートの両方を兼ね備えたエージェント選びが重要です。
                当サイトでは、産休育休取得率・リモートワーク率・女性アドバイザー有無など、
                女性エンジニアが本当に必要とする6つの基準で8社を比較しました。
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-sm text-primary-dark mb-2">
                おすすめの組み合わせ
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                <strong className="text-text">
                  IT特化型（レバテックキャリアまたはGeekly）+
                  女性特化型（type女性の転職エージェント）の2〜3社登録
                </strong>
                が最も効果的です。各社の非公開求人は重複しないことが多いため、
                複数登録することで選択肢が大きく広がります。
                フルリモートを希望する方はReWorksも合わせて検討してください。
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-sm text-primary-dark mb-2">
                最後に
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                すべてのエージェントが完全無料で利用できます。転職しなくても料金は一切発生しません。
                まずは気になるエージェントに登録して、キャリアアドバイザーに相談してみることから始めてみましょう。
                あなたらしいキャリアを、IT業界で実現するための第一歩を応援しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-primary-light py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold">
            あなたのキャリアの第一歩を踏み出そう
          </h2>
          <p className="mt-4 text-sm text-text-light">
            女性エンジニアの転職に強い8社を厳選比較。
            <br />
            まずは気になるエージェントに無料登録して、キャリア相談から始めてみましょう。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#levtech-career" className="btn-cta text-sm">
              1位 レバテックキャリアを見る
            </a>
            <a href="#type-woman" className="btn-outline text-sm">
              2位 type女性の転職エージェントを見る
            </a>
          </div>
          <p className="mt-6 text-xs text-text-light">
            ※当サイトのランキングは、独自の評価基準に基づいて作成しています。
            <br />
            ※各エージェントの求人数やサービス内容は2026年4月時点の情報です。
          </p>
        </div>
      </section>
    </>
  );
}
