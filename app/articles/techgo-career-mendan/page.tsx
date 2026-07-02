import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "テックゴーの無料キャリア面談とは？内容・流れ・準備を徹底解説【2026年】",
  description:
    "テックゴー（TechGo）の無料キャリア面談を公式情報をもとに解説。面談で聞かれること、キャリア面談が無料の理由、登録（最短60秒）から内定・入社までの5ステップ、面談前の準備、女性エンジニアが面談で確認したいポイントまで紹介します。",
  keywords:
    "テックゴー 無料キャリア面談, テックゴー キャリア面談 無料, TechGo キャリア面談, テックゴー 面談 内容, テックゴー 登録",
  alternates: { canonical: "/articles/techgo-career-mendan/" },
  openGraph: {
    title: "テックゴーの無料キャリア面談とは？内容・流れ・準備を徹底解説【2026年】",
    description:
      "テックゴー（TechGo）の無料キャリア面談を公式情報をもとに解説。面談で聞かれること、無料の理由、登録から内定までの5ステップ、面談前の準備まで紹介。",
    url: "https://women-engineer.com/articles/techgo-career-mendan/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "テックゴーの無料キャリア面談とは？内容・流れ・準備を徹底解説【2026年】",
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
  author: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "CareeHUB for woman", url: "https://women-engineer.com" },
  description:
    "テックゴー（TechGo）の無料キャリア面談を公式情報をもとに解説。面談で聞かれること、無料の理由、登録から内定までの5ステップ、面談前の準備まで紹介。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/articles/techgo-career-mendan/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "テックゴーのキャリア面談は本当に無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、無料です。キャリア面談だけでなく、求人紹介・書類添削・模擬面接・年収交渉・入社後のフォローまで、求職者側の費用負担はありません。転職エージェントは採用企業側から紹介手数料を受け取る人材紹介のビジネスモデルのため、求職者は全サービスを無料で利用できます。運営元の株式会社MyVisionは有料職業紹介事業許可（13-ユ-314719）を取得しています。",
      },
    },
    {
      "@type": "Question",
      name: "テックゴーの登録にはどれくらい時間がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "公式サイトでは登録フォームの入力は「最短60秒」とされています。登録後にキャリアアドバイザーと面談の日程を調整し、キャリア面談に進む流れです（出典: テックゴー公式サイト、2026年7月参照）。",
      },
    },
    {
      "@type": "Question",
      name: "転職するか決めていなくてもキャリア面談を受けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "受けられます。テックゴーはキャリア・転職全般に関する相談から対応するとしており、面談では「漠然とした悩み」も含めてヒアリングし、市場価値の把握と方向性づくりをサポートすると公式サイトに明記されています。公式掲載の利用者の声にも「転職するか現職に残るか決めきれずにいたが、面談を通じて目指す姿を明確化できた」という例があります。",
      },
    },
    {
      "@type": "Question",
      name: "キャリア面談を受けたら必ず応募しないといけませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ。公式サイトの「ご利用の流れ」では、紹介された求人の中から「興味を持っていただいた求人へ応募」と説明されています。面談と求人紹介を受けた上で、応募するかどうかは自分で選べます。",
      },
    },
    {
      "@type": "Question",
      name: "未経験でもテックゴーのキャリア面談を受けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "テックゴーはITエンジニアの転職支援に特化し、経験を活かした年収アップ・キャリアアップを前面に打ち出しているサービスです。無料スクールなど未経験向けの育成サポートは公式サイトに記載がないため、完全未経験からのスタートを考えている方は、未経験支援に実績のあるワークポートなどとの併用をおすすめします。",
      },
    },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/category-index/" },
              { label: "テックゴーの無料キャリア面談" },
            ]}
          />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>
              エージェント活用
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              テックゴーの無料キャリア面談とは？
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                内容・流れ・準備を徹底解説【2026年】
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月2日</p>
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#7c3a55" }}>この記事の結論</h2>
            <ul className="space-y-2 text-sm text-text-light leading-relaxed">
              <li className="flex gap-2"><span style={{ color: "#7c3a55" }} className="font-bold shrink-0">◆</span>テックゴー（TechGo）のキャリア面談は完全無料。登録フォームは最短60秒で、面談から入社後フォローまで費用は一切かからない</li>
              <li className="flex gap-2"><span style={{ color: "#7c3a55" }} className="font-bold shrink-0">◆</span>面談では経験・スキルセット・キャリアの展望や悩みをヒアリングし、エンジニアとしての市場価値の把握と転職活動の方向性づくりをサポートしてもらえる</li>
              <li className="flex gap-2"><span style={{ color: "#7c3a55" }} className="font-bold shrink-0">◆</span>転職を決めていなくても相談可能。面談後に紹介求人へ応募するかどうかは自分で選べる</li>
              <li className="flex gap-2"><span style={{ color: "#7c3a55" }} className="font-bold shrink-0">◆</span>運営は株式会社MyVision（有料職業紹介事業許可番号 13-ユ-314719）。年収アップ金額は平均138万円※と公式が公表している</li>
            </ul>
            <p className="text-xs text-text-light mt-4">※2025年6〜7月において内定承諾をし、年収アップを実現された方の平均実績（テックゴー公式サイト表記、2026年7月参照）</p>
          </div>
        </div>
      </section>

      {/* テックゴーとは */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">テックゴーとは｜ITエンジニア特化の転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              テックゴー（TechGo）は、株式会社MyVisionが運営するITエンジニアの転職支援に特化した転職エージェントです。ITエンジニア向け求人を10,000件以上保有し、メガベンチャー・大手事業会社・ITコンサルなどの求人を紹介しています。
            </p>
            <p>
              公式サイトでは「年収アップ金額 平均138万円」「年収交渉成功率100%（2025年9月時点実績）」を掲げ、キャリア相談から求人紹介・選考対策・年収交渉・入社後フォローまでを一貫してサポートするとしています。その入り口になるのが、この記事で解説する無料キャリア面談です。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <tbody>
                {[
                  ["サービス名", "テックゴー（TechGo）"],
                  ["運営会社", "株式会社MyVision（有料職業紹介事業許可番号 13-ユ-314719）"],
                  ["タイプ", "ITエンジニア特化型転職エージェント"],
                  ["求人数", "ITエンジニア向け10,000件以上"],
                  ["キャリア面談", "無料（登録フォームは最短60秒）"],
                  ["公式サイト", "tech-go.jp"],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : ""} style={i % 2 !== 0 ? { backgroundColor: "#f0e7dd" } : {}}>
                    <th className="px-4 py-3 text-left text-sm font-bold w-40" style={{ borderBottom: "1px solid #d9c7b8", color: "#7c3a55" }}>{label}</th>
                    <td className="px-4 py-3 text-sm" style={{ borderBottom: "1px solid #d9c7b8" }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-light mt-4">
            サービス全体の評価は「<Link href="/reviews/techgo/" className="underline hover:text-primary" style={{ color: "#7c3a55" }}>テックゴーの口コミ・評判</Link>」で詳しくレビューしています。
          </p>
        </div>
      </section>

      {/* 面談の内容 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">無料キャリア面談では何をする？</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              テックゴーの公式サイトによると、キャリア面談（キャリア相談）では業界に精通したキャリアアドバイザーが次の内容を深くヒアリングするとされています。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            {[
              { title: "これまでの経験・スキルセット", desc: "担当してきた開発・使用技術・役割などを整理しながら伝えます。" },
              { title: "今後のキャリアの展望", desc: "目指す職種・働き方・年収など、これからの希望を共有します。" },
              { title: "漠然とした悩みの言語化", desc: "「転職すべきか迷っている」段階の相談でもOKと公式に明記されています。" },
              { title: "市場価値の客観的な把握", desc: "面談を通じて自分の市場価値を把握し、転職活動の方向性を確立します。" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-5" style={{ border: "1px solid #d9c7b8" }}>
                <h3 className="text-base font-bold mb-2" style={{ color: "#7c3a55" }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              面談を担当するのは、メガベンチャーIT部門出身者・ITコンサル出身者・大手エージェント出身者などのアドバイザーです。公式サイトでは富士通・パーソルキャリア・伊藤忠テクノソリューションズ（CTC）出身のアドバイザーが実名・経歴付きで紹介されており、開発現場を知る担当者に相談できるのが特徴です。
            </p>
          </div>
        </div>
      </section>

      {/* 無料の理由 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">キャリア面談が無料なのはなぜ？</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「無料」と聞くと後から費用を請求されないか不安になりますが、転職エージェントが求職者に無料でサービスを提供できるのは、採用が決まった際に<strong>採用企業側から紹介手数料を受け取る</strong>人材紹介のビジネスモデルだからです。求職者側は、キャリア面談・求人紹介・書類添削・模擬面接・年収交渉・入社後フォローまで、すべて無料で利用できます。
            </p>
            <p>
              テックゴーを運営する株式会社MyVisionは、厚生労働大臣の有料職業紹介事業許可（許可番号: 13-ユ-314719）を取得した人材紹介会社です。これは職業安定法に基づく許可制の事業であり、求職者から手数料を取ることは原則禁止されています。この仕組みは、当サイトで紹介している他の転職エージェントも同様です。
            </p>
          </div>
        </div>
      </section>

      {/* 流れ */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">登録から入社までの流れ｜5つのステップ</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "無料登録・キャリア面談", desc: "公式フォームから登録（最短60秒）し、面談の日程を調整。アドバイザーが経験・スキル・キャリアの悩みをヒアリングし、市場価値の把握と方向性づくりをサポートします。" },
              { step: "2", title: "求人紹介・応募先選定", desc: "面談で明確になった志向性や技術レベルに基づき、非公開求人を含む厳選求人を紹介。技術スタック・組織文化・成長性まで加味して応募先を選定し、応募手続きは代行してもらえます。" },
              { step: "3", title: "選考対策", desc: "応募企業ごとの想定質問に基づいた実践的な面接対策を実施。書類添削と模擬面接を繰り返し、内定獲得率を高めます。公式掲載の利用者の声には「計3回の模擬面接」「連日の面接対策」という例があります。" },
              { step: "4", title: "内定獲得・条件交渉", desc: "市場相場とスキルに見合った適正年収をもとに、アドバイザーが年収アップ交渉を実施。入社日や役職などの条件調整も任せられます。" },
              { step: "5", title: "入社・入社後フォロー", desc: "入社後の定着まで定期的にフォロー。転職後も長期的なキャリア相談ができるとされています。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold" style={{ backgroundColor: "#7c3a55" }}>{item.step}</div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-text-light mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 準備 */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">キャリア面談前に準備しておきたいこと</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              キャリア面談は準備なしでも受けられますが、次の4点を整理しておくと、限られた面談時間で市場価値の把握と具体的な求人提案まで進みやすくなります。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: "経験・スキルの棚卸し", desc: "携わったプロジェクト・使用言語やフレームワーク・チーム規模・役割をメモにまとめておくと、アドバイザーが市場価値を判断しやすくなります。職務経歴書は完成していなくても構いません。" },
              { title: "希望条件の優先順位", desc: "年収・職種・リモート可否・残業時間など、譲れない条件と妥協できる条件を分けておきましょう。優先順位が明確なほど、紹介求人の精度が上がります。" },
              { title: "転職理由（現状の不満）の言語化", desc: "「なぜ今の職場を離れたいのか」を整理しておくと、同じ不満を繰り返さない企業選びにつながります。迷っている段階なら、迷っている理由をそのまま伝えて大丈夫です。" },
              { title: "アドバイザーへの質問リスト", desc: "自分の市場価値・想定年収レンジ・応募を検討する企業の開発体制や職場環境など、聞きたいことを事前にリスト化しておくと聞き漏らしを防げます。" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-5" style={{ border: "1px solid #d9c7b8" }}>
                <h3 className="text-base font-bold mb-2" style={{ color: "#7c3a55" }}>{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 女性エンジニア視点 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアがキャリア面談で確認したいポイント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              テックゴーは求人紹介の際に「技術スタック・組織文化・成長性」まで加味して応募先を選定するとしています。つまり、面談で伝えた条件が求人選定に反映される設計です。長く働ける職場を見極めるために、次のような点は面談で具体的に確認・共有しておきましょう。
            </p>
          </div>
          <ul className="space-y-3">
            {[
              "リモートワーク・時短勤務など働き方の柔軟性（制度の有無だけでなく実際の利用状況）",
              "紹介先企業の産休・育休の取得実績と復帰後のキャリアパス",
              "開発チームの女性比率や、女性エンジニアの管理職登用の事例",
              "残業時間の実態と、評価制度（成果とプロセスのどちらを重視するか)",
              "年収アップ交渉でどこまでの金額が現実的か（テックゴーは20代平均120万円・30代平均160万円のアップ実績を公表）",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-text-light rounded-lg bg-white p-4" style={{ border: "1px solid #d9c7b8" }}>
                <span style={{ color: "#7c3a55" }} className="font-bold shrink-0">◆</span>{item}
              </li>
            ))}
          </ul>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p>
              なお、テックゴーには女性専用プログラムの記載はありません。女性特化の手厚いサポートも並行して受けたい場合は、<Link href="/reviews/type-woman/" className="underline hover:text-primary" style={{ color: "#7c3a55" }}>type女性の転職エージェント</Link>など女性特化型との併用も検討してみてください。複数エージェントの併用は一般的な転職活動の進め方で、<Link href="/articles/how-to-choose/" className="underline hover:text-primary" style={{ color: "#7c3a55" }}>転職エージェントの選び方</Link>でも解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">テックゴーの無料キャリア面談に関するよくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d9c7b8" }}>
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                  <span><span style={{ color: "#7c3a55" }} className="mr-2">Q.</span>{faq.name}</span>
                  <span className="text-text-light group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d9c7b8" }}>
                  <p className="pt-4"><span style={{ color: "#c15f47" }} className="font-bold mr-2">A.</span>{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="text-xs text-text-light mt-6 space-y-1">
            <p>出典・参考:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="https://tech-go.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">テックゴー公式サイト</a></li>
              <li><a href="https://tech-go.jp/service" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">テックゴー公式サイト - サービスのご紹介</a></li>
              <li><a href="https://tech-go.jp/service/flow" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">テックゴー公式サイト - ご利用の流れ</a></li>
              <li><a href="https://tech-go.jp/about" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-primary">テックゴー公式サイト - 会社概要</a></li>
            </ul>
            <p className="mt-2">※本記事のサービス内容・実績数値は2026年7月時点の公式サイトの記載に基づきます。最新の情報は公式サイトでご確認ください。</p>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <div className="mx-auto max-w-4xl px-4">
        <div className="bg-[#f0e7dd] border border-[#d9c7b8] rounded-lg p-5 my-8">
          <h3 className="text-base font-bold text-[#7c3a55] mb-3">関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Link href="/reviews/techgo/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} テックゴーの口コミ・評判｜徹底レビュー</Link>
            <Link href="/articles/how-to-choose/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} 転職エージェントの選び方｜7つのチェックポイント</Link>
            <Link href="/articles/specialized-vs-general/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} IT特化型と総合型の使い分け</Link>
            <Link href="/articles/negotiation/" className="text-sm text-gray-700 hover:text-[#7c3a55] transition-colors">{"→"} 年収交渉のやり方ガイド</Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: "#efe3d8" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">まずは無料キャリア面談から</h2>
          <p className="text-text-light mb-6">登録は最短60秒。転職を決めていなくても、市場価値の把握とキャリアの整理に活用できます。</p>
          <a href="https://tech-go.jp/" target="_blank" rel="noopener noreferrer" className="btn-cta">テックゴーの無料キャリア面談を予約する</a>
        </div>
      </section>
    </>
  );
}
