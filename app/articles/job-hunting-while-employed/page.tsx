import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "在職中の転職活動の進め方ガイド｜エンジニアのスケジュール・面接調整・退職交渉",
  description:
    "在職中の転職活動の進め方を女性エンジニア向けに解説。収入を維持しながら進めるメリット、3〜6ヶ月の全体スケジュール、平日面接の日程調整術（有給・半休・オンライン面接）、会社にバレない注意点、育児と両立する効率化のコツ、退職交渉のタイミングまで具体的に紹介します。",
  alternates: { canonical: "/articles/job-hunting-while-employed/" },
  openGraph: {
    title: "在職中の転職活動の進め方ガイド｜エンジニアのスケジュール・面接調整・退職交渉",
    description:
      "在職中の転職活動の進め方を女性エンジニア向けに解説。スケジュール・面接日程の調整術・バレない注意点・退職交渉のタイミングを実例つきで紹介。",
    url: "https://women-engineer.com/articles/job-hunting-while-employed/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "在職中の転職活動の進め方ガイド｜エンジニアのスケジュール・面接調整・退職交渉",
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
    "在職中の転職活動の進め方を女性エンジニア向けに解説。スケジュール・面接日程の調整術・バレない注意点・退職交渉のタイミングを実例つきで紹介。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/job-hunting-while-employed/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "在職中の転職活動はどのくらいの期間がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "在職中は活動に使える時間が限られるため、準備から内定・退職・入社まで3〜6ヶ月が一般的な目安です。内訳は、自己分析・書類準備・エージェント登録に約2週間、応募〜面接（複数社並行）に約1〜1.5ヶ月、内定後の意思決定・退職交渉・引き継ぎ・有給消化に約1〜1.5ヶ月です。退職は法律上、申し出から2週間で可能ですが、就業規則では「1〜2ヶ月前」と定める企業が多いため、入社希望日から逆算して動くのが安全です。エンジニアはコーディングテストや技術面接が挟まる分、書類だけの職種より1〜2週間長めに見ておくと安心です。",
      },
    },
    {
      "@type": "Question",
      name: "在職中の面接で平日に休めない場合はどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "選択肢は主に4つです。(1)オンライン面接をお願いする（Zoom・Google Meetが主流。一次・二次はリモートで対応する企業が増えています）、(2)始業前・終業後・昼休みの時間帯に設定してもらう、(3)有給ではなく半休（午前休・午後休）で時間を作る、(4)1日に2〜3社をまとめて受けて有給の消費を抑える、です。エージェント経由なら「平日夜・オンライン希望」といった条件を企業へまとめて伝えてくれるため、自分で角を立てずに調整できます。日程変更を依頼するメールでは『貴重な機会をいただきありがとうございます』と前置きし、候補日を複数提示するのがマナーです。",
      },
    },
    {
      "@type": "Question",
      name: "在職中の転職活動が会社にバレないためのコツはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "(1)有給・半休は理由を聞かれても『私用』『家庭の事情』で問題ありません（法律上、取得理由を伝える義務はありません）。ただし毎週同じ曜日に休むと不自然なので間隔を不規則にします。(2)スーツ出社や急な身だしなみの変化は避け、面接日はオフィスカジュアル可の企業を選ぶか着替えを持参します。(3)転職サイトやエージェントとのやり取りは会社のPC・メール・Wi-Fiを使わず、私物のスマホ・個人メールで行います。(4)職務経歴をスカウト型サービスに登録する際は『現職企業をブロック（非公開）』設定を必ず使います。(5)同僚や社内チャットでは転職の話を一切しないことが鉄則です。",
      },
    },
    {
      "@type": "Question",
      name: "育児をしながら在職中に転職活動を進めるコツは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "限られた時間を仕組みで生み出すのがポイントです。(1)通勤電車・子の昼寝中・寝かしつけ後の30分など『スキマ時間』をスマホでの求人チェックやスカウト返信に充てる、(2)面接はオンライン中心にして移動時間ゼロにする（自宅の静かな部屋から参加）、(3)食材宅配やミールキットで家事時間を圧縮して活動時間を捻出する、(4)書類添削や日程調整はエージェントに任せて自分は意思決定に集中する、が有効です。企業選びでは、残業の少なさだけでなくフルリモート・フレックス・時短勤務・看護休暇の実績を求人票やエージェント経由で確認しましょう。全国23ヶ所のマザーズハローワークも、託児スペース付きで相談できる無料の選択肢です。",
      },
    },
    {
      "@type": "Question",
      name: "退職を切り出すのは内定が出る前と後、どちらがいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "必ず『内定承諾後』に切り出してください。内定前に退職の意思を伝えてしまうと、万一選考が不調に終わったときに現職にも居づらくなり、収入の途切れるリスクを負います。流れとしては、(1)内定通知を受け取る→(2)労働条件通知書で年収・勤務地・働き方を書面確認→(3)入社日を企業と合意→(4)その日から逆算して直属の上司に退職を申し出る、が安全な順番です。申し出のタイミングは、就業規則の規定（多くは退職日の1〜2ヶ月前）と引き継ぎ・有給消化を考え、退職希望日の1.5ヶ月前を目安にすると円満に進みやすいです。引き止めに備え、退職理由は前向きで具体的すぎない内容を準備しておきましょう。",
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
              { label: "在職中の転職活動の進め方ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              選考対策ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              在職中の転職活動の進め方ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                働きながら進めるスケジュール・面接調整・退職交渉を実例で解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 在職中に転職活動するメリット</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 在職中転職の全体スケジュール（3〜6ヶ月）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 平日面接の日程調整術</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 会社にバレないための注意点</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 仕事と両立する効率化のコツ（6STEP）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 内定後〜退職交渉のタイミング</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ転職エージェント</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 在職中転職の成功事例</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 メリット */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">在職中に転職活動するメリット</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「辞めてから探したほうが集中できるのでは？」と考える人は少なくありませんが、エンジニアの転職では<strong>在職中に進めるのが基本</strong>です。理由は、活動が長引いても収入が途切れず、心理的に追い込まれないため、条件の良い1社をじっくり選べるからです。特に育児中など生活費の余裕が限られる時期ほど、在職中の活動が安全策になります。
            </p>
            <p>
              下のカードは、在職中に活動する代表的なメリットです。退職してからの活動は焦りから「とりあえず内定が出た1社」に妥協しやすく、結果的に短期離職につながるリスクもあります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 収入が途切れず生活が安定する</h3>
              <p className="text-text-light text-sm leading-relaxed">毎月の給与が入り続けるため、家賃・保育料・生活費の不安がありません。貯金を切り崩さずに済み、社会保険や厚生年金の空白期間も生まれないので、ローン審査などにも影響しません。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 焦らず条件で妥協しない</h3>
              <p className="text-text-light text-sm leading-relaxed">「早く決めなきゃ」という金銭的プレッシャーがないため、年収・働き方・技術スタックを冷静に比較できます。納得できる求人が出るまで待てるのが最大の武器です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. ブランクなしで職務経歴を保てる</h3>
              <p className="text-text-light text-sm leading-relaxed">離職期間が空かないため、職務経歴書に説明しづらい空白が生まれません。採用側も「現職で活躍中の人材」として評価しやすく、年収交渉でも有利に働きます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 「現職に残る」も選択肢に残せる</h3>
              <p className="text-text-light text-sm leading-relaxed">市場価値を客観的に確かめられるのも在職中ならでは。他社のオファーと比べた結果「やっぱり今の会社が良い」と判断したり、現職に条件交渉する材料にもできます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 スケジュール */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">在職中転職の全体スケジュール（3〜6ヶ月）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              在職中は1日に使える時間が限られるため、活動全体は<strong>3〜6ヶ月</strong>が現実的な目安です。エンジニアはコーディングテストや技術面接が挟まる分、書類だけで進む職種より1〜2週間長めに見積もると安心です。下表は、入社希望日から逆算する際のフェーズ別の目安です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>フェーズ</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>期間の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>在職中にやること</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>① 準備・書類作成</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約2週間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>自己分析・希望条件の整理、職務経歴書とポートフォリオの更新、エージェント登録・面談</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>② 応募・書類選考</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約2〜3週間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>5〜10社へ並行応募、スカウト対応、コーディングテスト（GitHub課題やHackerRank形式）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>③ 面接</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約1ヶ月</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>一次〜最終（多くは2〜3回）。技術面接・カジュアル面談含む。平日夜・オンラインで調整</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>④ 内定・条件確認</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約1〜2週間</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>労働条件通知書で年収・リモート・時短の可否を確認、年収交渉、入社日合意</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>⑤ 退職交渉・引き継ぎ</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約1〜1.5ヶ月</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>上司へ退職申し出、引き継ぎ資料作成、有給消化、入社</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>逆算のコツ</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>入社希望日を先に決める</strong>。そこから⑤→①へ逆算してスタート時期を割り出す</li>
              <li>② エンジニア求人が増える<strong>1〜3月・9〜10月</strong>（期初・下期スタート）を狙うと選択肢が広がる</li>
              <li>③ ボーナス支給後に退職したい場合は、<strong>支給月＋翌月退職</strong>を想定して逆算する</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec3 面接日程の調整術 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">平日面接の日程調整術</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              在職中の最大の壁が「平日昼間の面接にどう出るか」です。すべてを有給で乗り切ろうとすると休みが足りず、頻繁な欠勤で勘ぐられる原因にもなります。次の4つを組み合わせて、有給の消費を最小限に抑えましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. オンライン面接を依頼する</h3>
              <p className="text-text-light text-sm leading-relaxed">Zoom・Google Meetでの面接が標準化し、一次・二次はリモート対応の企業が大半です。「在職中のため可能であればオンラインを希望」と最初に伝えればほぼ調整可能。移動ゼロで昼休みや終業後の枠に収まります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 始業前・終業後・昼休みに設定</h3>
              <p className="text-text-light text-sm leading-relaxed">18時以降や朝イチの枠を出してくれる企業も多くあります。エージェントに「平日18時以降・土曜午前希望」と伝えれば、企業へまとめて打診してくれるため自分で交渉する必要がありません。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 有給より半休（午前・午後休）</h3>
              <p className="text-text-light text-sm leading-relaxed">1日休む必要がなければ半休で十分。面接の時間帯に合わせて午前休・午後休を選び、終業間際の面接なら数時間の中抜けで対応できる場合もあります。丸1日の有給が続くより自然です。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 1日に2〜3社まとめて受ける</h3>
              <p className="text-text-light text-sm leading-relaxed">どうしても対面が必要な場合は、同じ日に複数社の面接を入れて有給の取得日数を圧縮します。エージェントに日程を集約してもらうと効率的に組めます。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>日程変更を依頼するメール例</h3>
            <p className="text-text-light text-sm leading-relaxed">
              「貴重な面接の機会をいただき誠にありがとうございます。あいにく現職の都合で<strong>ご提示日時での参加が難しく</strong>、大変恐縮ですが下記の候補日からご調整いただけますと幸いです。<br />
              ・◯月◯日（火）18:30以降<br />・◯月◯日（木）18:30以降<br />・◯月◯日（土）終日<br />
              なお<strong>オンラインでの面接も可能</strong>でしたら、そちらも希望いたします。」
            </p>
            <p className="text-text-light text-xs leading-relaxed mt-3">※ 候補日は必ず複数提示し、辞退と受け取られないよう「参加したい意思」を添えるのがマナーです。</p>
          </div>
        </div>
      </section>

      {/* sec4 バレない注意点 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">会社にバレないための注意点</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              在職中の活動が現職に知られると、引き止めや人事評価への影響など気まずい状況を招きます。法律上、<strong>有給休暇の取得理由を会社に伝える義務はなく</strong>「私用」で問題ありませんが、日常の小さな油断から発覚することが多いため、次の点を徹底しましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>休みの取り方を不規則に</h3>
              <p className="text-text-light text-sm leading-relaxed">毎週同じ曜日に有給・半休を取ると勘ぐられます。間隔と曜日をばらけさせ、理由は「私用」「家庭の事情」で統一。仮病は後で辻褄が合わなくなるので避けます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>会社の設備で活動しない</h3>
              <p className="text-text-light text-sm leading-relaxed">転職サイト・エージェントとの連絡は<strong>会社のPC・メール・社内Wi-Fiを使わない</strong>のが鉄則。私物スマホと個人メールで完結させ、勤務中の閲覧履歴を残さないようにします。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>スカウトは現職を非公開に</h3>
              <p className="text-text-light text-sm leading-relaxed">ビズリーチやレバテックなどのスカウト型に登録する際は、<strong>現職企業をブロック（非公開）</strong>設定に。設定漏れで自社人事に経歴を見られる事故が起きやすいので最優先で確認します。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>身だしなみと言動に注意</h3>
              <p className="text-text-light text-sm leading-relaxed">普段着が私服の職場で急にスーツ出社すると目立ちます。オフィスカジュアル可の企業を選ぶか着替えを持参。同僚や社内チャットで転職の話を絶対に漏らさないことも徹底します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 効率化STEP */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">仕事と両立する効率化のコツ（6STEP）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              在職中・育児中は「まとまった時間」が取りにくいぶん、<strong>スキマ時間とアウトソーシング</strong>で活動を回すのが成功の鍵です。次の順で仕組み化すると、平日夜と週末だけでも無理なく進められます。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "スキマ時間を活動枠に充てる", "通勤電車・子の昼寝中・寝かしつけ後の30分など、細切れ時間をスマホでの求人チェックやスカウト返信に固定化。「いつやるか」を決めると続きます。"],
              ["STEP2", "エージェントに丸投げできる作業を任せる", "求人探し・書類添削・企業との日程調整・年収交渉はエージェントへ。自分は意思決定と面接準備という『代えのきかない作業』に集中します。"],
              ["STEP3", "面接はオンライン中心に組む", "移動時間をゼロにし、自宅の静かな部屋から参加。育児中でも子の生活リズムの合間に面接を入れやすくなります。"],
              ["STEP4", "家事を仕組みで圧縮する", "食材宅配・ミールキット・家事代行を一時的に使い、捻出した時間をポートフォリオ整備や面接対策に回します。活動期間限定の投資と割り切るのがコツ。"],
              ["STEP5", "ポートフォリオ・職務経歴書を使い回せる形に", "担当機能・使用技術・改善した数値（処理速度◯%短縮など）をテンプレ化。応募ごとに少し調整するだけで済み、1社あたりの準備時間を短縮できます。"],
              ["STEP6", "複数社を並行で進める", "1社ずつ受けると活動が長期化します。5〜10社を同時並行で進め、選考フェーズを揃えると比較がしやすく、内定の時期も揃えられます。"],
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
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <p className="text-text-light text-sm leading-relaxed">
              育児と両立する場合は、全国23ヶ所の<strong>マザーズハローワーク</strong>も選択肢です。託児スペース付きで、子連れでもキャリア相談・求人紹介を無料で受けられます。エージェントと併用して、相談できる窓口を増やしておくと安心です。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 退職交渉のタイミング */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">内定後〜退職交渉のタイミング</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              在職中転職で最も失敗しやすいのが退職交渉の順番です。鉄則は<strong>「内定承諾後に退職を切り出す」</strong>こと。内定が出る前に退職を伝えてしまうと、選考が不調に終わったときに現職にも居づらくなり、収入が途切れるリスクを負います。次の順番を守れば、収入を一切途切れさせずに移れます。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              ["1", "内定通知を受け取る", "口頭ではなく書面（内定通知書）で受領。複数社の場合は返事の期限を確認し、比較できるよう期日を揃える交渉をする。"],
              ["2", "労働条件を書面で確認する", "労働条件通知書で年収・勤務地・残業・リモート/時短の可否を必ず確認。求人票と相違がないか、口頭約束を書面化してもらう。"],
              ["3", "入社日を合意する", "現職の引き継ぎ・有給消化を見込んで入社日を設定。一般に内定から1.5〜2ヶ月後が現実的。"],
              ["4", "直属の上司に退職を申し出る", "退職希望日の1.5ヶ月前を目安に、まず直属の上司へ口頭で。法律上は2週間前で退職可能だが、就業規則の『1〜2ヶ月前』規定と円満退職を優先。"],
              ["5", "引き継ぎ・有給消化・退職", "引き継ぎ資料を作成し計画的に有給を消化。退職理由は前向きで具体的すぎない内容にし、強い引き止めにも意思を変えない準備をしておく。"],
            ].map(([num, title, desc], i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
                <span className="flex-shrink-0 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>{num}</span>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#7c3a55" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>女性が押さえておきたいポイント</h3>
            <p className="text-text-light text-sm leading-relaxed">
              育児中の転職では、入社後すぐに看護休暇や時短勤務を使う可能性があります。<strong>時短勤務・フレックス・看護休暇の取得実績を内定承諾前に確認</strong>しておくと、入社後のギャップを防げます。求人票に出ない実態は、女性のキャリアに詳しいエージェント経由で確認するのが確実です。
            </p>
          </div>
        </div>
      </section>

      {/* sec7 エージェント */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>在職中の活動は時間との戦い。求人探し・日程調整・年収交渉を代行してくれるエージェントを使うほど、本業と両立しやすくなります。IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術を理解したアドバイザーが、平日夜・オンライン面接などの条件を企業へまとめて打診してくれるため、在職中でも日程調整がスムーズです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、スピーディーなマッチングと年収交渉力に定評。複数社を並行で効率よく進めたい在職中の活動と相性が良いエージェントです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休・リモート・時短など、女性のキャリア継続に配慮した求人を中心に紹介。育児と両立できる働き方の実態を、求人票に出ない部分まで確認したい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">在職中こそエージェント活用が効く</p>
            <p className="text-sm text-text-light mb-4">面倒な日程調整や交渉を任せ、自分は意思決定に集中しましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec8 成功事例 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">在職中転職の成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・SES→自社開発・育児と両立）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">活動前</p><p className="text-sm font-bold">SESのJavaエンジニア / 出社必須・残業多め / 年収450万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>活動後</p><p className="text-sm font-bold">自社開発企業 / フルリモート・時短可 / 年収520万円</p></div>
              </div>
              <p className="text-sm text-text-light">寝かしつけ後の30分でスカウト返信、面接はすべてオンラインに統一。エージェントに平日夜の枠を集約してもらい、有給は半休3回のみで完結。約4ヶ月で内定承諾後に退職を切り出し、収入を途切れさせず移籍しました。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（20代後半・受託→SaaS・バレずに完走）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">活動前</p><p className="text-sm font-bold">受託開発のフロントエンド / 年収400万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>活動後</p><p className="text-sm font-bold">SaaS企業のフロントエンド / フレックス / 年収500万円</p></div>
              </div>
              <p className="text-sm text-text-light">スカウト型サービスで現職を非公開設定にし、連絡はすべて個人スマホで実施。1日に2社の面接をまとめて受け有給を節約。半年で複数内定を獲得し、条件を比較したうえで年収100万円アップを実現しました。</p>
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
            <a href="/articles/schedule/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>転職活動のスケジュールガイド</h3><p className="text-sm text-text-light">いつから始める？期間と流れ</p></a>
            <a href="/articles/interview-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>面接対策ガイド</h3><p className="text-sm text-text-light">よく聞かれる質問と答え方</p></a>
            <a href="/articles/resume-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>職務経歴書の書き方ガイド</h3><p className="text-sm text-text-light">通過率を上げる書き方</p></a>
            <a href="/articles/negotiation/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>年収交渉ガイド</h3><p className="text-sm text-text-light">内定後の条件交渉のコツ</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">働きながら、無理なく転職を成功させましょう</h2>
            <p className="text-white/90 mb-6">面倒な日程調整も交渉もエージェントにお任せ。まずは無料相談から始めましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
