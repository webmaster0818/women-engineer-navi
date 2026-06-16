import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "エンジニアの円満退職・退職交渉の進め方ガイド｜民法ルールから引き継ぎ・有給消化まで",
  description:
    "エンジニアが円満退職するための退職交渉の進め方を実務ベースで解説。民法627条（2週間ルール）と就業規則の関係、退職を切り出すタイミングと伝え方、退職交渉のSTEP、カウンターオファー（引き止め）への対応、引き継ぎ・有給消化、ソースや権限などエンジニア特有の注意点まで。女性がスムーズに退職する工夫も紹介します。",
  alternates: { canonical: "/articles/amicable-resignation/" },
  openGraph: {
    title: "エンジニアの円満退職・退職交渉の進め方ガイド｜民法ルールから引き継ぎ・有給消化まで",
    description:
      "民法627条と就業規則の関係、退職の切り出し方、退職交渉のSTEP、カウンターオファー対応、引き継ぎ・有給消化、エンジニア特有の注意点まで実務ベースで解説。",
    url: "https://women-engineer.com/articles/amicable-resignation/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "エンジニアの円満退職・退職交渉の進め方ガイド｜民法ルールから引き継ぎ・有給消化まで",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
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
    "エンジニアが円満退職するための退職交渉の進め方を実務ベースで解説。民法627条と就業規則、退職の切り出し方、引き止め対応、引き継ぎ・有給消化、エンジニア特有の注意点まで。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/amicable-resignation/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "就業規則に「退職は2ヶ月前まで」とありますが、2週間で辞められますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "法律上は2週間で退職できます。期間の定めのない正社員の場合、民法627条1項により「解約の申入れの日から2週間を経過することによって雇用は終了する」と定められており、これは強行規定のため就業規則の「1ヶ月前」「2ヶ月前」という社内ルールより優先されます。会社の承諾がなくても退職は成立します。ただし円満退職を目指すなら、就業規則の予告期間を尊重し、引き継ぎが終わる時期から逆算して申し出るのが現実的です。実務では退職希望日の1ヶ月〜1ヶ月半前に切り出すのが一般的で、エンジニアは引き継ぎ資料の整備に時間がかかるため、余裕を持つほどトラブルになりにくくなります。",
      },
    },
    {
      "@type": "Question",
      name: "退職を引き止められ「年収を上げる」と言われました。受けるべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "慎重に判断すべきです。退職を申し出た直後に提示される年収アップやポジション変更は「カウンターオファー」と呼ばれます。一時的に待遇が改善しても、退職を考えた根本的な理由（技術領域・働き方・人間関係など）が解決されないケースが多く、一度退職意思を示したことで社内での信頼関係が変わってしまうこともあります。海外調査では、カウンターオファーを受けて残った人の多くが結局1年以内に再び退職する傾向が報告されています。「金額の問題ではなく、挑戦したい技術領域を変えたい」など、お金以外の軸で意思を伝えると引き止められにくくなります。",
      },
    },
    {
      "@type": "Question",
      name: "引き継ぎが終わらないと有給を消化できないと言われました。本当ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "それは誤りです。年次有給休暇は労働基準法39条で保障された労働者の権利であり、退職時に残った有給を消化することを会社が一方的に拒むことはできません。退職時は「時季変更権（別の日に振り替える会社の権利）」を行使する先の労働日が存在しないため、原則として希望どおり消化できます。トラブルを避けるには、退職交渉の最初の段階で『最終出社日』と『有給消化期間』をセットで提示し、最終出社日までに引き継ぎが完了するスケジュールを逆算して組むのがコツです。それでも拒否される場合は、人事部、次に労働基準監督署、最終的に弁護士の順で相談しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "エンジニアが退職するとき、特に気をつけることは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "業務で扱ったソースコードやアカウント・権限の扱いです。会社のリポジトリのコードを個人のGitHubに転載・公開すると、著作権・秘密保持義務違反になり、転職先にも悪印象です。退職時はGitHub/GitLab・AWS・各種SaaSの権限を漏れなく洗い出し、後任への移譲とアカウント無効化に協力しましょう。貸与PCやVPN・2要素認証の端末も確実に返却します。引き継ぎは『手順書』だけでなく、なぜその設計にしたのかという『判断の背景』をドキュメント化すると後任が困りません。退職時に秘密保持・競業避止の誓約書を求められることもありますが、サインしなくても退職自体は可能で、内容に納得できない条項は確認・相談してから対応します。",
      },
    },
    {
      "@type": "Question",
      name: "女性がスムーズに退職するために工夫できることはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "退職理由を『前向き・私的・確定的』に整えるとスムーズです。結婚・出産・配偶者の転勤・育児との両立といったライフイベントが理由の場合でも、引き止めの口実を与えないよう『次の入社日が決まっている』『家庭の事情で時期は動かせない』と確定事項として伝えるのが有効です。会社批判や待遇への不満は口にせず、感謝を前面に出すと角が立ちません。産休・育休からの復帰可否で迷っている段階なら、退職を決める前に時短・リモートなど制度の利用余地を確認するのも選択肢です。次の職場探しは在職中から進め、内定（入社日）を確定させてから退職を切り出すと、引き止めや延期要請を断る強い根拠になります。",
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
              { label: "円満退職・退職交渉の進め方ガイド" },
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
              エンジニアの円満退職・退職交渉の進め方
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                民法のルールから切り出し方・引き止め対応・引き継ぎ・有給消化まで
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 退職の基本ルール（民法627条と就業規則）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 退職を切り出すタイミングと伝え方</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 退職交渉の進め方（5STEP）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 引き止め（カウンターオファー）への対応</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 引き継ぎ・有給消化のすすめ方</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. エンジニア特有の注意点（ソース・権限）</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 女性がスムーズに退職する工夫</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 円満退職の事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 退職の基本ルール */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">退職の基本ルール（民法627条と就業規則）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「就業規則に1ヶ月前と書いてあるから、それより早くは辞められない」と思い込んでいる人は少なくありません。しかし<strong>法律上、無期雇用（正社員）の退職は、申し入れから2週間で成立します</strong>。まずは自分の権利を正しく知ることが、落ち着いて退職交渉を進める第一歩です。
            </p>
            <p>
              根拠は<strong>民法627条1項</strong>。「当事者が雇用の期間を定めなかったときは、各当事者は、いつでも解約の申入れをすることができる。この場合において、雇用は、解約の申入れの日から2週間を経過することによって終了する」と定められています。これは<strong>強行規定</strong>のため、就業規則で「退職は1ヶ月前まで」「2ヶ月前まで」と定めていても、法的には2週間前の申し出で退職が成立し、<strong>会社の承諾は不要</strong>です。
            </p>
            <p>
              ただし「2週間で辞められる＝2週間で辞めるべき」ではありません。エンジニアは引き継ぎ資料の整備に時間がかかり、急な退職は後任や転職先からの印象を損ないます。円満退職を目指すなら、法律上の権利を踏まえつつ、<strong>就業規則の予告期間を尊重して1ヶ月〜1ヶ月半前に申し出る</strong>のが現実的です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>雇用形態・状況</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>退職できる時期の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>根拠・ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>無期雇用（正社員）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>申し入れから2週間後</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>民法627条1項。就業規則より優先（承諾不要）</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>月給制で完全月給など</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>当期前半に申し出れば当期末</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>民法627条2項。実務では2週間ルールが優先される場面が多い</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>有期雇用（契約社員）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>原則は契約期間満了まで</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「やむを得ない事由」や勤続1年超で例外あり（民法628条等）</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>円満退職の推奨ライン</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>退職希望日の1ヶ月〜1ヶ月半前</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>引き継ぎ・有給消化を逆算。法律＋社会通念のバランス</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>覚えておきたい3つの権利</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>退職の自由</strong>：会社は退職を拒否できない。予告期間を理由に辞めさせない・働かせ続けることは違法。</li>
              <li>② <strong>有給消化の権利</strong>：残った年次有給休暇は退職時に消化できる（労働基準法39条）。</li>
              <li>③ <strong>退職届の効力</strong>：退職届は提出（到達）した時点で意思表示が成立。受理されなくても2週間で退職は成立する。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec2 切り出すタイミングと伝え方 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">退職を切り出すタイミングと伝え方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              円満退職の8割は「切り出し方」で決まります。<strong>最初に伝える相手は必ず直属の上司</strong>。同僚や人事に先に話すと「順番を飛ばされた」と受け取られ、上司の心証を損ねます。SNSや雑談で漏らすのも厳禁です。
            </p>
            <p>
              伝えるのは<strong>退職希望日の1ヶ月〜1ヶ月半前</strong>が目安。最初の一言はメールで完結させず、「今後のことでご相談したいので、お時間をいただけますか」と<strong>口頭または短いメッセージでアポイントを取り、退職の意思そのものは対面（オンライン会議含む）で伝える</strong>のが基本マナーです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>良いタイミングの例</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="font-bold">&#10003;</span><span>リリースや大型案件が一段落した直後</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="font-bold">&#10003;</span><span>1on1や定例の後など、上司と話す機会が自然にある時</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="font-bold">&#10003;</span><span>週の前半・午後の落ち着いた時間帯</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="font-bold">&#10003;</span><span>次の職場の内定（入社日）が確定した後</span></li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>避けたいタイミング</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="font-bold">&#10007;</span><span>繁忙期・リリース直前（引き継ぎ時間が取れない）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="font-bold">&#10007;</span><span>チームに障害・トラブル対応が走っている最中</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="font-bold">&#10007;</span><span>上司が多忙で余裕のない朝一・金曜夕方</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="font-bold">&#10007;</span><span>内定が出る前に勢いで切り出す</span></li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>切り出しの一言・伝え方の型</h3>
            <div className="space-y-3 text-sm text-text-light">
              <p>● アポ取り：「ご相談したいことがあり、15分ほどお時間をいただけますか」</p>
              <p>● 本題：「私事で恐縮ですが、◯月末で退職させていただきたく、ご相談に参りました」</p>
              <p>● ポイント：<strong>「相談」ではなく「決定事項」として伝える</strong>。「迷っている」と言うと引き止めの余地を与えます。退職理由は会社批判を避け、「挑戦したい技術領域がある」「家庭の事情」など前向き・私的な理由にまとめましょう。賞与支給後に辞めたい場合は、支給日とのバランスも考慮して時期を設計します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 退職交渉の進め方 STEP */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">退職交渉の進め方（5STEP）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              退職交渉は「最終出社日・有給消化・引き継ぎ・退職日・退職理由」の5点を<strong>自分の中で先に固めてから臨む</strong>のが鉄則。条件を決めずに切り出すと、会社のペースで時期を引き延ばされます。次の順序で進めましょう。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "条件を固めてから切り出す", "退職日・最終出社日・有給消化日数・引き継ぎ期間・退職理由を事前に決定。とくに『次の入社日』を確定させておくと、延期要請を断る最強の根拠になります。"],
              ["STEP2", "直属の上司に口頭で伝える", "アポを取り、対面（オンライン可）で退職の意思を伝達。決定事項として、感謝とともに簡潔に。この場では退職『日』の希望も合わせて提示します。"],
              ["STEP3", "退職日・引き継ぎ計画を合意する", "上司と最終出社日・有給消化期間をすり合わせ。引き継ぎスケジュールを逆算して、最終出社日までに完了する計画を一緒に作ります。"],
              ["STEP4", "退職届（退職願）を提出する", "合意した退職日で書面を提出。受理・撤回トラブルを避けるため、提出日と退職日を明記し、控えやメール記録を残しておくと安心です。"],
              ["STEP5", "引き継ぎ→有給消化→退職", "後任へドキュメントとセットで引き継ぎ、最終出社日以降に有給を消化。貸与PC・各種アカウント権限の返却・移譲も漏れなく完了させます。"],
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
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#efe3d8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              <strong>退職届と退職願の違い：</strong>「退職願」は退職を願い出る書面で、受理されるまでは撤回の余地があります。「退職届」は退職の意思を一方的に通告する書面で、提出（到達）した時点で効力が生じ、原則撤回できません。確実に辞めたい場合は<strong>退職届</strong>を、まずは相談ベースなら退職願を使い分けます。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 カウンターオファー */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">引き止め（カウンターオファー）への対応</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              スキルの高いエンジニアほど強く引き止められます。退職を申し出た直後に提示される好条件を<strong>カウンターオファー</strong>と呼び、その狙いは「年収アップ」「ポジション変更」「時期の延期」のほぼ3パターンに集約されます。一見ありがたい提案ですが、<strong>退職を考えた根本理由が解決しないまま残ると、多くの人が結局1年以内に再び退職する</strong>と海外調査でも指摘されています。残るにせよ辞めるにせよ、感情ではなく事前に決めた軸で判断しましょう。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>引き止めパターン</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>会社の言い分（例）</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>切り返しの定石</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>年収アップ提案</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「給与を上げるから残ってほしい」</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「金額の問題ではなく、挑戦したい技術領域を変えたいんです」とお金以外の軸で返す</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ポジション変更</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「異動させる」「リーダーに」</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「以前から相談していれば別ですが、今回は意思が固まっています」と一貫性を示す</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>時期の延期要請</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「人手が足りないから時期をずらして」</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「次の入社日が確定しているので動かせません」と入社日を盾にする</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>情に訴える</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>「君がいないと回らない」</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>感謝を伝えつつ「引き継ぎは責任を持って完了させます」と行動で返す</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>引き止めに負けないための3つの準備</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>入社日を先に確定させる</strong>：転職先の入社日が決まっていれば、延期要請をきっぱり断れます。</li>
              <li>② <strong>退職理由を「私的・前向き」に</strong>：待遇への不満を理由にすると「では改善する」とカウンターオファーの口実になります。</li>
              <li>③ <strong>意思は一度だけ明確に</strong>：何度も交渉すると「揺れている」と見られます。決定として淡々と伝えるのが効果的です。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 引き継ぎ・有給消化 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">引き継ぎ・有給消化のすすめ方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              円満退職の評価は「最後の仕事ぶり」で決まります。エンジニアの引き継ぎは<strong>手順書だけでは不十分</strong>。「なぜこの設計にしたのか」「過去にどんな障害があったのか」という<strong>判断の背景</strong>まで残すと、後任が安心して引き継げます。属人化している処理ほど丁寧にドキュメント化しましょう。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>引き継ぎドキュメントに含めたい項目</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>担当機能・システムの概要と全体構成（アーキテクチャ図）</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>開発環境の構築手順・ビルド／デプロイ手順</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>設計判断の背景・既知の不具合・運用上の注意点</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>外部サービス／API・連携先・契約や認証情報の所在</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>定常作業・障害対応の手順とエスカレーション先</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>関係者リスト（社内・取引先の連絡窓口）</span></li>
            </ul>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-8">
            <p>
              <strong>有給消化</strong>は労働基準法39条で保障された正当な権利です。退職時は会社が別日へ振り替える「時季変更権」を行使する先がないため、原則として希望どおり消化できます。「引き継ぎが終わるまで取らせない」という主張に法的根拠はありません。
            </p>
            <p>
              トラブルを防ぐコツは、退職交渉の最初の段階で<strong>「最終出社日」と「有給消化期間」をセットで提示</strong>すること。最終出社日までに引き継ぎが完了するよう逆算してスケジュールを組めば、双方納得のうえで全部消化しやすくなります。買い取りは会社の任意なので、まずは消化を前提に計画しましょう。
            </p>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#efe3d8" }}>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>困ったときの相談先（優先順）</h3>
            <p className="text-sm text-text-light">退職届を受理しない／有給消化を拒否される／離職票や私物が返ってこない等のトラブル時は、社内で抱え込まず <strong>① 人事部 → ② 労働基準監督署（総合労働相談コーナー） → ③ 弁護士</strong> の順で相談しましょう。どうしても自力で進まない場合は退職代行という選択肢もありますが、まずは公的窓口が低コストです。</p>
          </div>
        </div>
      </section>

      {/* sec6 エンジニア特有の注意点 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">エンジニア特有の注意点（ソース・権限）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              エンジニアの退職には、一般職にはない<strong>「ソースコード」と「アカウント・権限」</strong>という固有の論点があります。ここを軽く扱うと、円満退職どころか法的トラブルや次の職場での信用問題に発展しかねません。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>ソースコードは持ち出さない</h3>
              <p className="text-text-light text-sm leading-relaxed">業務で書いたコードの著作権は原則として会社に帰属します。会社リポジトリのコードを個人のGitHubに転載・公開すると、<strong>著作権侵害・秘密保持義務違反</strong>になります。「自分の実績だから」とポートフォリオに流用するのも厳禁です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>権限・アカウントの棚卸し</h3>
              <p className="text-text-light text-sm leading-relaxed">GitHub/GitLab・AWS/GCP・各種SaaS・社内システムなど、自分に付与された権限を一覧化し、後任への移譲とアカウント無効化に協力します。退職後に権限が残るとセキュリティリスクになります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>貸与端末・デバイスの返却</h3>
              <p className="text-text-light text-sm leading-relaxed">貸与PC・スマホ・社員証に加え、<strong>2要素認証アプリ・ハードウェアキー・VPN設定</strong>もリセット／返却対象。リモート勤務の場合は返送手順と期日を早めに確認しましょう。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>誓約書・競業避止は内容を確認</h3>
              <p className="text-text-light text-sm leading-relaxed">退職時に秘密保持・競業避止の誓約書を求められることがあります。<strong>サインしなくても退職自体は可能</strong>。職業選択の自由を不当に制限する条項もあるため、納得できない内容は確認・相談してから対応します。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>転職活動で「実績」を語るときの線引き</h3>
            <p className="text-sm text-text-light leading-relaxed">面接で前職の経験を伝えること自体は問題ありません。ただし<strong>具体的なコード・設計書・顧客名・未公開の数値</strong>は機密情報にあたる可能性があります。「どんな課題をどう解決し、何を学んだか」という<strong>抽象化したストーリー</strong>で語れば、守秘義務を守りつつ実力をアピールできます。</p>
          </div>
        </div>
      </section>

      {/* sec7 女性がスムーズに退職する工夫 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がスムーズに退職する工夫</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              結婚・出産・配偶者の転勤・育児との両立など、女性はライフイベントが退職の引き金になることもあります。こうした理由は<strong>「前向き・私的・確定的」</strong>に整えると、引き止めの口実を与えず角も立ちません。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>1. 退職理由は「確定事項」で</h3>
              <p className="text-sm text-text-light">「家庭の事情で時期は動かせない」「次の入社日が決まっている」と確定形で伝えると、延期要請やカウンターオファーを断りやすくなります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>2. 不満ではなく感謝を前面に</h3>
              <p className="text-sm text-text-light">会社批判や待遇への不満は口にしない。お世話になった感謝を伝えると、退職後もリファレンスや再会で良い関係が続きます。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>3. 制度利用の余地も先に確認</h3>
              <p className="text-sm text-text-light">育休復帰や両立に迷う段階なら、退職前に時短・リモート・短時間勤務など社内制度の利用可否を確認。辞めずに解決できる場合もあります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>4. 在職中に次を固めてから動く</h3>
              <p className="text-sm text-text-light">空白期間を作らないよう、内定（入社日）を確定させてから退職を切り出すのが鉄則。経済的にも精神的にも余裕を持って交渉できます。</p>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#efe3d8" }}>
            <p className="text-sm text-text-light leading-relaxed">
              退職交渉と並行して次の職場を探すなら、<strong>女性のキャリアに詳しいエージェント</strong>を活用すると、入社日の調整・年収交渉・産休育休実績の確認まで任せられ、円満退職と好条件の転職を両立しやすくなります。
            </p>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>退職交渉をスムーズに進める鍵は「次の入社日を先に確定させること」。エージェントは入社日の調整や退職時期のアドバイスもしてくれます。IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーが入社日の調整や年収交渉まで伴走し、退職交渉のスケジュール設計にも強みがあります。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと交渉力に定評があり、退職時期と入社日のすり合わせもサポートしてくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。ライフイベントを踏まえた退職・転職時期の相談がしやすく、働き方の条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">円満退職は「次が決まっていること」から</p>
            <p className="text-sm text-text-light mb-4">複数登録して、入社日まで伴走してくれるアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">円満退職の事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Cさん（30代前半・自社開発バックエンド）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">退職交渉の状況</p><p className="text-sm font-bold">退職申し出時に「年収を50万上げる」とカウンターオファー</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>結果</p><p className="text-sm font-bold">入社日を盾に引き止めを辞退／有給20日を全消化して退職</p></div>
              </div>
              <p className="text-sm text-text-light">転職先の入社日を確定させてから、退職希望日の1ヶ月半前に直属の上司へ口頭で報告。年収アップの提案には「金額ではなく挑戦したい技術を変えたい」と返し、引き継ぎ資料を背景込みで整備。最終出社日後に有給を全消化し、関係を保ったまま円満に退職しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Dさん（20代後半・SES／客先常駐）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">退職交渉の状況</p><p className="text-sm font-bold">「常駐先の契約が残っている」と時期の延期を要請される</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>結果</p><p className="text-sm font-bold">民法627条を踏まえつつ余裕ある引き継ぎ計画を提示し合意</p></div>
              </div>
              <p className="text-sm text-text-light">就業規則は「2ヶ月前」でしたが、民法上は2週間で退職可能と理解したうえで、常駐先にも配慮し1ヶ月半前に申し出。最終出社日までに常駐先のドキュメントを整備し、権限・アカウントの移譲も完了。会社・常駐先双方に角を立てず、産休育休実績のある自社開発企業へ移りました。</p>
            </div>
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
            <a href="/articles/job-hunting-while-employed/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>在職中の転職活動の進め方</h3><p className="text-sm text-text-light">退職前に次を固める段取り</p></a>
            <a href="/articles/negotiation/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>年収・条件交渉のコツ</h3><p className="text-sm text-text-light">入社日と年収の交渉術</p></a>
            <a href="/articles/schedule/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>転職スケジュールの立て方</h3><p className="text-sm text-text-light">退職日から逆算する計画術</p></a>
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアのキャリアパス</h3><p className="text-sm text-text-light">次の一歩の選択肢を整理</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">円満退職で、次のキャリアへ気持ちよく踏み出そう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。入社日の調整から退職時期のアドバイスまで伴走してもらえます。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
