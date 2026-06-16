import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアが長く働き続けるコツ｜辞める理由とキャリアを続ける7つの習慣",
  description:
    "女性エンジニアが長く働き続けるコツを実データで解説。辞めてしまう理由（ライフイベント・ロールモデル不足・評価・体力）、スキルの陳腐化を防ぐ学び方、キャリアの棚卸し、メンター活用、燃え尽き・体調管理、働き方を変える選択肢まで。長期視点でキャリアを設計する女性向けガイドです。",
  alternates: { canonical: "/articles/long-career-tips/" },
  openGraph: {
    title: "女性エンジニアが長く働き続けるコツ｜辞める理由とキャリアを続ける7つの習慣",
    description:
      "女性エンジニアが辞める理由と長く働き続けるコツを実データで解説。学び続ける習慣・キャリアの棚卸し・メンター・燃え尽き対策・働き方の見直しまで、長期視点のキャリア設計を女性視点でまとめました。",
    url: "https://women-engineer.com/articles/long-career-tips/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアが長く働き続けるコツ｜辞める理由とキャリアを続ける7つの習慣",
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
    "女性エンジニアが辞める理由と長く働き続けるコツを実データで解説。学び続ける習慣・キャリアの棚卸し・メンター・燃え尽き対策・働き方の見直しまでをまとめたキャリアガイド。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/long-career-tips/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性エンジニアが辞めてしまう一番の理由は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "単一の理由というより、複数の要因が重なって辞めるケースが多いです。代表的なのは、(1)結婚・出産・育児・介護などライフイベントと働き方が合わなくなる、(2)女性の上司・管理職がほぼいないためロールモデルやキャリアの見通しを描きにくい、(3)時短や育児中の評価が下がりやすく市場価値が伸び悩む、(4)長時間労働や緊急対応で体力的に続かない、の4つです。IT業界のエンジニアに占める女性比率は2割強、情報通信業の女性管理職比率は約7.5%と低く、構造的に孤立しやすいことが背景にあります。逆に言えば、働き方・評価・ロールモデルの3点を意識して環境を選べば、長く続けられる可能性は大きく高まります。",
      },
    },
    {
      "@type": "Question",
      name: "スキルが古くならないか不安です。どう学び続ければいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ITエンジニアの約46.5%が自分の技術・スキルの陳腐化に不安を感じており、不安自体は普通のことです。大切なのは「全部を追う」ことではなく、(1)変わりにくい土台（設計・DB・ネットワーク・セキュリティの考え方）を厚くする、(2)流行の技術は浅く広く触れて引き出しを増やす、の二段構えです。学習時間が取れない人は、日報に学びを1行書く、開発ついでに公式ドキュメントを5分読むといった既存の行動に紐づける『ハビットスタッキング』が続きます。スキルアップで何らかの効果を実感した人は9割超というデータもあり、少量でも継続する人ほど市場価値が下がりにくくなります。",
      },
    },
    {
      "@type": "Question",
      name: "産休・育休でブランクが空いても復帰できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "復帰しやすい職種です。エンジニアは一度身につけた経験や考え方が現場を離れてすぐ消えるものではなく、知識のアップデートさえすれば戻りやすいと言われます。復帰をスムーズにするコツは、(1)休む前に担当領域・成果を言語化して棚卸ししておく、(2)ブランク中も月数時間でいいので技術記事や公式ドキュメントに触れて『完全に離れない』状態を保つ、(3)復帰直後はフルスロットルにせず時短や軽めのタスクから戻す、の3つです。リスキリング目的の休暇制度や復職支援を持つ企業も増えており、こうした制度の有無を転職時に確認しておくと安心です。",
      },
    },
    {
      "@type": "Question",
      name: "燃え尽きそうなとき、辞める前にできることはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "燃え尽きは『心のSOS』で、根性ではなく環境調整で防ぐものです。辞める判断の前に、(1)まず休む（有給・短期の休職も含め、気力を回復させる時間を確保する）、(2)上司との1on1でタスク量・期待値・評価をすり合わせる、(3)担当範囲を一度狭めて『超えるタスク』を手放す、(4)社外のコミュニティやメンターに話して視点を外に持つ、を試す価値があります。それでも消耗が続く・体調に出るなら、それは個人の弱さではなく環境のミスマッチのサインです。退職ではなく『部署異動』や『働き方を変える転職』で改善するケースも多く、エージェントに相談して選択肢を広げてから決めるのがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "長く働くために、転職はした方がいいのでしょうか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "今の会社で働き方・評価・成長が成立しているなら、無理に転職する必要はありません。ただし、(1)時短や育児で評価が頭打ちになっている、(2)リモートや時短など必要な働き方が制度上できない、(3)女性のロールモデルがおらずキャリアの先が見えない、のいずれかに当てはまるなら、環境を変える方が長期的にプラスです。転職は『年収を上げる』ためだけでなく『続けられる環境を手に入れる』ための手段でもあります。女性のキャリア継続に詳しいエージェントなら、産休育休の実績・復帰率・女性管理職比率など求人票に出ない情報まで確認したうえで提案してくれます。",
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
              { label: "女性エンジニアが長く働き続けるコツ" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              キャリアガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアが長く働き続けるコツ
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                辞める理由を理解し、キャリアを続ける7つの習慣を実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 女性エンジニアが辞めてしまう4つの理由</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 長く働き続けるための7つのコツ</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. スキルの陳腐化を防ぐ学び方</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. キャリアの棚卸しと節目の見直し</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. メンター・コミュニティの活用</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 燃え尽き・体調管理との付き合い方</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 働き方を変えるという選択肢</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 辞める理由 */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアが辞めてしまう4つの理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              長く働き続けるコツを考える前に、まず「なぜ辞めてしまうのか」を知ることが近道です。IT関連産業の女性比率は約24%、エンジニアに占める女性は2割強にとどまり、情報通信業の女性管理職比率は<strong>約7.5%</strong>と低水準。こうした構造のなかで、女性エンジニアが離職に至る背景には、おおむね次の4つが重なっています。
            </p>
            <p>
              逆に言えば、この4つを意識して環境を選び・整えれば、辞めずに済む可能性は大きく高まります。自分がどれに引っかかりやすいかを把握しておきましょう。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>辞める理由</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>何が起きているか</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>対策の方向性</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ライフイベントとの両立</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>結婚・出産・育児・介護で、これまでの働き方が続けられなくなる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>リモート・時短・フレックスが「制度＋実態」で使える環境を選ぶ</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>ロールモデル不足</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>女性の上司・先輩がいないため、5年後10年後の自分像を描けず不安になる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>社外コミュニティ・メンターで会社の外にロールモデルを持つ</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>評価・キャリアの停滞</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>時短・育児期に成果が見えにくく評価が下がり、市場価値が伸び悩む</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>成果を言語化し、社内評価と市場価値を切り分けて管理する</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>体力・燃え尽き</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>長時間労働・障害対応・常時オンの環境で消耗し、心身が続かなくなる</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>休む・範囲を絞る・働き方を変えるなど「環境調整」で予防する</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            重要なのは、これらの多くが<strong>「個人の能力や根性の問題」ではなく「環境とのミスマッチ」</strong>だということ。続けられないと感じたとき、自分を責める前に、環境を変えられないかを先に考えるのが長く働くコツです。
          </p>
        </div>
      </section>

      {/* sec2 7つのコツ */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">長く働き続けるための7つのコツ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              ここからは、女性エンジニアがキャリアを途切れさせずに続けるための具体的な習慣を7つにまとめます。すべてを一度にやる必要はなく、今の自分に効きそうなものから1〜2個始めれば十分です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 少しずつでも学び続ける</h3>
              <p className="text-text-light text-sm leading-relaxed">技術の陳腐化に不安を持つエンジニアは約46.5%。完璧を目指さず、日報に学びを1行書くなど『小さな習慣』で知識を更新し続けることが、ブランクや評価停滞への最大の保険になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 定期的にキャリアを棚卸しする</h3>
              <p className="text-text-light text-sm leading-relaxed">半年〜1年ごとに「できること・成果・次にやりたいこと」を書き出す。市場価値を言語化しておくと、評価交渉でも転職でも産休前後でも、自分の立ち位置を見失いません。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 社外にロールモデルとメンターを持つ</h3>
              <p className="text-text-light text-sm leading-relaxed">社内に女性の先輩がいなくても、コミュニティやSNSで一歩先を行く女性エンジニアに出会える。外の視点を持つことで「自分だけが悩んでいる」感覚から抜け出せます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 成果を可視化して評価につなげる</h3>
              <p className="text-text-light text-sm leading-relaxed">改善した処理速度・担当機能・解決した課題を記録する。時短勤務でも『何を生んだか』が残れば、勤務時間の長さに左右されず正当な評価を得やすくなります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>5. 無理をためない（燃え尽き予防）</h3>
              <p className="text-text-light text-sm leading-relaxed">燃え尽きは心のSOS。気力を測る余裕がなくなる前に休む・抱え込まないことが、結局いちばん長く働ける道。頑張りすぎる人ほど意識的にブレーキを。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>6. ライフステージに合わせ働き方を変える</h3>
              <p className="text-text-light text-sm leading-relaxed">フルタイム・時短・フルリモート・フリーランスを、その時の状況に合わせて行き来する。『辞めるか続けるか』の二択にせず、働き方を変えて続ける発想を持ちましょう。</p>
            </div>
            <div className="rounded-xl border bg-white p-6 md:col-span-2" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>7. 続けられる環境を選び直す</h3>
              <p className="text-text-light text-sm leading-relaxed">どんなにセルフケアをしても、長時間労働が常態化した職場や評価が公平でない職場では続きません。産休育休の取得・復帰実績、女性管理職比率、リモートの運用実態などを基準に環境を選び、合わなければ転職で『続けられる場所』へ移ることも長く働くための立派な戦略です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 学び続ける */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">スキルの陳腐化を防ぐ学び方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「ITスキルはすぐに陳腐化する」と言われ、実際に<strong>約46.5%のエンジニアが自分の技術がいつまで通用するか不安</strong>だと回答しています。一方で、学習に取り組めていない人の多くが理由に挙げるのは「必要性は感じるが時間がない」。つまり、勝てるかどうかは才能ではなく<strong>「少量でも続けられる仕組み」</strong>を持てるかで決まります。
            </p>
            <p>
              ポイントは、追うべきものを2層に分けること。土台になる「変わりにくい知識」を厚くしつつ、流行の技術は浅く広く触れて引き出しを増やす――この組み合わせが、ブランクにも技術トレンドの変化にも強いキャリアを作ります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>厚くすべき「変わりにくい土台」</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span><span>設計・データモデリングの考え方</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span><span>DB・SQL・ネットワークの基礎</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span><span>セキュリティ・テストの基本原則</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span><span>課題を分解して解決する力（言語化できる形で）</span></li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>浅く広く触れる「流行の層」</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span><span>生成AI・LLM/RAGの活用（2026年の必須教養）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span><span>新しいフレームワーク・クラウドの動向</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span><span>業務で使う技術の公式ドキュメント更新</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-0.5 font-bold">&#10003;</span><span>気になる技術は「触ってみた」程度でOK</span></li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#efe3d8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>忙しくても続く「ハビットスタッキング」</h3>
            <p className="text-sm text-text-light leading-relaxed mb-3">
              既にやっている行動に新しい習慣をくっつけると、育児や仕事で時間が取れなくても継続できます。学習効果を実感したエンジニアは9割超。量より「途切れさせないこと」が市場価値を守ります。
            </p>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・日報を書くついでに、その日の学びを<strong>1行だけ</strong>言語化する</li>
              <li>・実装で詰まったら、関連する公式ドキュメントを<strong>5分だけ</strong>読む</li>
              <li>・通勤・家事の時間に技術系ポッドキャストを<strong>ながら聞き</strong>する</li>
              <li>・月1回、気になった技術記事のリンクを<strong>まとめて保存</strong>し週末に拾い読み</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec4 棚卸しSTEP */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">キャリアの棚卸しと節目の見直し</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              長く働く人ほど、定期的に立ち止まって「自分は何ができて、次にどこへ行きたいか」を確認しています。社内での評価と<strong>市場価値は別物</strong>。自分の強みを言語化しておけば、評価交渉でも、産休前後でも、転職でも判断に迷いません。半年〜1年ごと、または結婚・出産・異動などの節目に、次のSTEPで棚卸ししましょう。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "やってきたことを書き出す", "担当プロジェクト・使った技術・役割を時系列で棚卸し。『過小評価しがち』なので、小さな改善や調整役も漏らさず書き出すのがコツです。"],
              ["STEP2", "成果と再現性を言語化する", "売上・処理速度・工数削減など数字に加え、『どんな課題をどう解決したか』を言語化。どこでも通用する再現可能な力として残します。"],
              ["STEP3", "市場価値を客観的に測る", "求人票の年収レンジや求められるスキルと照らし合わせる。エージェント面談やスカウトで、社外から見た自分の評価を確認します。"],
              ["STEP4", "ライフプランと重ねる", "今後数年の結婚・出産・介護などの見通しと、必要な働き方（時短・リモート等）を重ねて、優先順位を整理します。"],
              ["STEP5", "次の一手を1つ決める", "『学ぶ技術を1つ』『評価面談で交渉する』『働き方を変える』など、次の半年で動くアクションを1つだけ決めて実行に移します。"],
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
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            棚卸しは「転職するため」だけのものではありません。<strong>今の会社で続けるか・働き方を変えるか・移るか</strong>を冷静に選ぶための地図になります。年に一度の自分会議として習慣にしましょう。
          </p>
        </div>
      </section>

      {/* sec5 メンター・コミュニティ */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">メンター・コミュニティの活用</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              女性エンジニアが「辞めたい」と感じる大きな要因のひとつが<strong>ロールモデルの不在</strong>です。社内に女性の上司や先輩がいないと、ライフイベントを越えてどうキャリアを続けるのか、手本が見えず不安が募ります。これは個人で頑張って埋めるより、<strong>会社の外に視点を持つ</strong>ことで解消するのが現実的です。
            </p>
            <p>
              一歩先を行く女性エンジニアの話を聞くだけで、「自分だけが悩んでいるわけではない」と分かり、選択肢の解像度が一気に上がります。メンターは身近な誰か一人でなくてもよく、複数の人・場から少しずつ学ぶ形で十分です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>女性エンジニアのコミュニティ</h3>
              <p className="text-sm text-text-light leading-relaxed">勉強会・LT会・Slack/Discordコミュニティに参加。ライフイベントとの両立や復職のリアルな知見が得られ、横のつながりが孤立感を和らげます。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>1on1・メンター制度を使う</h3>
              <p className="text-sm text-text-light leading-relaxed">上司やメンターとの1on1で、成果と成長ポイントを言語化してもらう。褒められた点・伸びた点が明確になると、評価面談や自己効力感の支えになります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>SNS・登壇イベントで学ぶ</h3>
              <p className="text-sm text-text-light leading-relaxed">育児と両立する女性エンジニアやマネージャーの発信を追う。直接の知り合いでなくても、生き方の選択肢を増やす『遠いロールモデル』になります。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>キャリアアドバイザーに相談</h3>
              <p className="text-sm text-text-light leading-relaxed">女性のキャリア継続に詳しいエージェントは、第三者として中長期の相談相手になる。転職前提でなくても、市場視点での助言が得られます。</p>
            </div>
          </div>
          <div className="mt-6 rounded-xl border p-5" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <p className="text-sm text-text-light leading-relaxed">
              関連記事として、<a href="/articles/community/" className="font-bold hover:underline" style={{ color: "#7c3a55" }}>女性エンジニアのコミュニティ・勉強会ガイド</a>もあわせてどうぞ。具体的な参加先や活用法をまとめています。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 燃え尽き・体調 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">燃え尽き・体調管理との付き合い方</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              長く働くうえで避けて通れないのが<strong>燃え尽き（バーンアウト）</strong>です。原因は、過度なプレッシャー・自己管理の余裕の欠如・能力を超えるタスクの三つ。近年は生成AIの普及で個々のタスクが速く片づく分、空いた時間に新しい仕事を詰め込み、休憩との境目が消えて<strong>かえって消耗する</strong>という指摘も出ています。「効率化したのに楽にならない」と感じたら要注意です。
            </p>
            <p>
              燃え尽きは心のSOSであり、根性で乗り切るものではありません。気力を測る余裕がなくなる前に、次のサインと対処を知っておきましょう。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#c15f47" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>こんなサインに気づいたら</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・休んでも疲れが抜けない／朝起きるのがつらい</li>
                <li>・好きだったはずの開発に興味が持てない</li>
                <li>・ミスやイライラが増え、集中できない</li>
                <li>・休憩を取らずに作業し続けてしまう</li>
                <li>・「自分が頑張らないと回らない」と抱え込む</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>辞める前にできる対処</h3>
              <ul className="space-y-2 text-sm text-text-light">
                <li>・まず休む。有給・短期の休職も選択肢に入れる</li>
                <li>・1on1でタスク量・期待値・評価をすり合わせる</li>
                <li>・担当範囲を一度狭め『超えるタスク』を手放す</li>
                <li>・社外コミュニティで視点を外に持つ</li>
                <li>・改善しないなら異動・働き方を変える転職を検討</li>
              </ul>
            </div>
          </div>
          <p className="text-text-light leading-relaxed mt-6 text-sm">
            消耗が続き体調にまで出るなら、それは<strong>個人の弱さではなく環境のミスマッチのサイン</strong>です。退職という極端な選択の前に、部署異動や働き方を変える転職で改善するケースも多くあります。一人で抱えず、第三者に相談して選択肢を広げてから決めましょう。
          </p>
        </div>
      </section>

      {/* sec7 働き方を変える */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">働き方を変えるという選択肢</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「今のフルタイムが続けられない＝エンジニアを辞める」ではありません。エンジニアは<strong>働き方のバリエーションが豊富</strong>な職種です。ライフステージに合わせて働き方を行き来しながら、キャリアそのものは途切れさせない――これが長く働く人の発想です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>働き方</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>向いている時期・状況</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フルリモート</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>育児・介護・通勤負担を減らしたい時</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>サーバーサイド等は完結しやすく求人も豊富。地方在住でも続けやすい</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>時短勤務</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>復職直後・子どもが小さい時期</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>成果が可視化される職種なので、評価が下がりにくい環境を選ぶのが鍵</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フレックス</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>送り迎え・通院と両立したい時</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>コアタイムの運用実態を事前に確認。形骸化していないかが重要</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>裁量を最大化したい・実務経験が十分な時</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>稼働日数を自分で調整可能。週3〜4日案件で生活と両立する選択も</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>復職・学び直し制度の活用</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ブランク明け・キャリアチェンジ時</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>リスキリング休暇や復職支援を持つ企業を選ぶと、戻る不安が減る</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            大事なのは「制度があるか」だけでなく<strong>「実際に使われているか」</strong>。産休育休の取得・復帰実績やリモートの運用実態は求人票に出にくいため、転職時はエージェント経由で確認するのが確実です。働き方の見直しは、後ろ向きな撤退ではなく<strong>キャリアを続けるための前向きな調整</strong>と捉えましょう。
          </p>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>長く働ける環境を選び直すなら、技術を正しく評価するIT特化型と、働き方・キャリア継続に強い女性特化型の併用が効果的です。求人票に出ない『続けやすさ』の実態まで聞き出しましょう。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーが、これまでの経験を正当に評価したうえで提案してくれます。リモートや時短など働き方の条件でも絞り込みやすく、市場価値の確認にも向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと年収交渉力に定評があり、評価が停滞していると感じる人の『仕切り直し』に向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。女性管理職比率や復帰実績など、長く働けるかどうかの実態を踏まえて相談できます。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">『続けられる環境』はエージェント選びで決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、女性のキャリア継続に詳しいアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
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
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアのキャリアパス</h3><p className="text-sm text-text-light">長期視点でのキャリア設計を解説</p></a>
            <a href="/articles/work-life-balance/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ワークライフバランスの保ち方</h3><p className="text-sm text-text-light">仕事と生活を両立させる働き方</p></a>
            <a href="/articles/women-friendly-companies/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性が働きやすい企業の選び方</h3><p className="text-sm text-text-light">続けやすい環境を見極める基準</p></a>
            <a href="/articles/return-to-work/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ブランクからの復職ガイド</h3><p className="text-sm text-text-light">産休育休後にスムーズに戻る方法</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">長く続けられる環境を、一緒に見つけましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。今のままで続けるか、働き方を変えるか――あなたに合った選択肢を整理できます。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
