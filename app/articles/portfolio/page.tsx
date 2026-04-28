import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアのポートフォリオ作成ガイド｜転職で差をつける方法",
  description: "女性エンジニアのポートフォリオ作成ガイド。転職で評価されるポートフォリオの作り方、必須要素、GitHubの活用法を詳しく解説します。",
  alternates: { canonical: "/articles/portfolio/" },
  openGraph: { title: "女性エンジニアのポートフォリオ作成ガイド｜転職で差をつける方法", description: "女性エンジニアのポートフォリオ作成ガイド。転職で評価されるポートフォリオの作り方、必須要素、GitHubの活用法を詳しく解説します。", url: "https://women-engineer-navi.pages.dev/articles/portfolio/", type: "article", siteName: "女性エンジニア転職ナビ", locale: "ja_JP" },
};

const structuredData = { "@context": "https://schema.org", "@type": "Article", headline: "女性エンジニアのポートフォリオ作成ガイド｜転職で差をつける方法", datePublished: "2026-04-28", dateModified: "2026-04-28", author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" }, publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer-navi.pages.dev" }, description: "女性エンジニアのポートフォリオ作成ガイド。転職で評価されるポートフォリオの作り方、必須要素、GitHubの活用法を詳しく解説します。", mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer-navi.pages.dev/articles/portfolio/" } };

const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "ポートフォリオは何作品あればいいですか？", acceptedAnswer: { "@type": "Answer", text: "3〜5作品が目安です。数よりも質が重要で、自分の技術力を最大限にアピールできる力作を2〜3作品用意し、残りは小規模なプロジェクトでも構いません。各プロジェクトにはREADMEを丁寧に書き、使用技術・工夫したポイント・デモURLを明記しましょう。" } },
  { "@type": "Question", name: "実務経験がなくてもポートフォリオは作れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、実務経験がなくてもポートフォリオは作れます。オリジナルのWebアプリケーションやツール、既存サービスのクローンアプリ、API連携のダッシュボードなど、学習過程で作成したプロジェクトもポートフォリオになります。大切なのは、コードの質と技術選定の理由を説明できることです。" } },
  { "@type": "Question", name: "ポートフォリオサイトはどの技術で作るべきですか？", acceptedAnswer: { "@type": "Answer", text: "自分が得意な技術で作るのがベストです。フロントエンドエンジニアならReact+Next.js+Vercel、バックエンドエンジニアならAPIの設計と実装を含めたフルスタック構成がおすすめです。転職先で使われている技術スタックに合わせて作ると、即戦力としてのアピールになります。" } },
  { "@type": "Question", name: "GitHubの草（コントリビューション）は見られますか？", acceptedAnswer: { "@type": "Answer", text: "はい、採用担当者がGitHubのコントリビューショングラフを確認するケースはあります。毎日コミットする必要はありませんが、継続的にコードを書いていることが分かると好印象です。ただし、草の量よりもコードの質やREADMEの充実度の方が重要です。" } },
  { "@type": "Question", name: "ポートフォリオの著作権やセキュリティで注意すべきことは？", acceptedAnswer: { "@type": "Answer", text: "業務で作成したコードをそのままポートフォリオに使うことは避けてください。著作権は会社に帰属するケースがほとんどです。個人プロジェクトとして新たに作成しましょう。また、APIキーやパスワードなどの機密情報をGitHubに公開しないよう、環境変数で管理することも重要です。" } },
] };

const breadcrumbData = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer-navi.pages.dev" },
  { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer-navi.pages.dev/articles/" },
  { "@type": "ListItem", position: 3, name: "女性エンジニアのポートフォリオ作成ガイド", item: "https://women-engineer-navi.pages.dev/articles/portfolio/" },
] };

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4"><Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "女性エンジニアのポートフォリオ作成ガイド" }]} /><div className="mt-4"><span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>キャリア知識</span><h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">女性エンジニアのポートフォリオ作成ガイド<span className="block text-lg font-medium text-text-light mt-2 md:text-xl">転職で差をつける方法</span></h1><p className="mt-4 text-text-light">最終更新: 2026年4月28日</p></div></div>
      </section>

      <section className="py-8"><div className="mx-auto max-w-4xl px-4"><div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}><h2 className="text-lg font-bold mb-4">目次</h2><ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. ポートフォリオが転職に重要な理由</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 評価されるポートフォリオの要素</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 職種別のポートフォリオ作成法</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. GitHubの活用方法</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. 技術ブログの書き方</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. ポートフォリオサイトの構築</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 初心者向けプロジェクトアイデア</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. 失敗しないポートフォリオのコツ</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#0891b2" }}>9. 転職での活用方法</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#0891b2" }}>10. よくある質問</a></li>
          </ol></div></div>
      </section>

      <section id="sec1" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">ポートフォリオが転職に重要な理由</h2><div className="space-y-4 text-text-light leading-relaxed">
            <p>エンジニアの転職において、ポートフォリオは最も強力なアピール材料です。職務経歴書や面接での説明だけでは伝わりにくい「実際のコーディング力」を、ポートフォリオなら直接示すことができます。特に転職を考える女性エンジニアにとって、ポートフォリオは技術力を客観的に証明する武器になります。</p>
            <p>未経験からの転職やキャリアチェンジの場合、実務経験がない分、ポートフォリオの重要性はさらに高まります。採用担当者は、ポートフォリオを通じて応募者の学習意欲、問題解決能力、コードの品質を評価します。</p>
            <p>良いポートフォリオの条件は、技術的な質の高さ、ユーザー視点のUI/UXデザイン、分かりやすいドキュメント（README）の3つです。特にREADMEには、プロジェクトの概要、使用技術、工夫したポイント、デモURLなどを丁寧に記載しましょう。</p>
            <p>女性エンジニアの場合、ポートフォリオのテーマ選びも大切です。自分が日常的に使いたいと思えるアプリケーションや、社会課題の解決に取り組むプロジェクトは、面接でも話が盛り上がりやすく、プラスの印象を与えます。</p>
          </div></div>
      </section>

      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">評価されるポートフォリオの要素</h2><div className="space-y-4 text-text-light leading-relaxed">
            <p>転職で評価されるポートフォリオには、いくつかの共通する要素があります。まず、クリーンなコードです。命名規則の統一、適切なコメント、関数やコンポーネントの分割など、可読性の高いコードを心がけましょう。</p>
            <p>テストコードの存在も大きなプラスポイントです。Jest、React Testing Library、Cypressなどを使ったユニットテストやE2Eテストがあると、品質に対する意識の高さをアピールできます。</p>
            <p>デプロイまで完了していることも重要です。VercelやNetlifyなどのホスティングサービスを使って、実際に動作するデモURLを用意しましょう。採用担当者がすぐに動作を確認できる状態にしておくことで、評価の機会を逃しません。</p>
            <p>CI/CD（GitHub Actions等）の設定、Docker環境の構築、API設計書の作成など、実務に近い開発プラクティスを取り入れると、即戦力としての印象を強められます。</p>
          </div></div>
      </section>

      <section id="sec3" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">職種別のポートフォリオ作成法</h2><div className="space-y-4 text-text-light leading-relaxed">
            <p>職種別のポートフォリオ作成法について、女性エンジニアの視点から詳しく解説します。IT業界で活躍する女性エンジニアにとって、正確な情報と適切な戦略を持つことは、キャリアを成功させるための鍵となります。</p>
            <p>2026年現在、IT業界では女性エンジニアの活躍が急速に広がっています。ダイバーシティ推進の流れに加え、リモートワークの普及やフレックスタイム制度の充実により、女性がエンジニアとして長く活躍できる環境が整いつつあります。</p>
            <p>実際のデータを見ると、女性エンジニアの需要は年々高まっており、企業の採用意欲も強い状況が続いています。特にWeb系企業やSaaS企業では、女性エンジニアの比率を高めるための施策を積極的に行っています。</p>
            <p>ここでは、職種別のポートフォリオ作成法に関する最新情報をもとに、女性エンジニアが知っておくべきポイントを具体的に解説していきます。転職エージェントの活用方法や、実際の成功事例も交えながら、実践的なアドバイスをお伝えします。</p>
          </div></div>
      </section>

      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">GitHubの活用方法</h2><div className="space-y-4 text-text-light leading-relaxed">
            <p>GitHubの活用方法について、女性エンジニアの視点から詳しく解説します。IT業界で活躍する女性エンジニアにとって、正確な情報と適切な戦略を持つことは、キャリアを成功させるための鍵となります。</p>
            <p>2026年現在、IT業界では女性エンジニアの活躍が急速に広がっています。ダイバーシティ推進の流れに加え、リモートワークの普及やフレックスタイム制度の充実により、女性がエンジニアとして長く活躍できる環境が整いつつあります。</p>
            <p>実際のデータを見ると、女性エンジニアの需要は年々高まっており、企業の採用意欲も強い状況が続いています。特にWeb系企業やSaaS企業では、女性エンジニアの比率を高めるための施策を積極的に行っています。</p>
            <p>ここでは、GitHubの活用方法に関する最新情報をもとに、女性エンジニアが知っておくべきポイントを具体的に解説していきます。転職エージェントの活用方法や、実際の成功事例も交えながら、実践的なアドバイスをお伝えします。</p>
          </div></div>
      </section>

      <section id="sec5" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">技術ブログの書き方</h2><div className="space-y-4 text-text-light leading-relaxed">
            <p>技術ブログの書き方について、女性エンジニアの視点から詳しく解説します。IT業界で活躍する女性エンジニアにとって、正確な情報と適切な戦略を持つことは、キャリアを成功させるための鍵となります。</p>
            <p>2026年現在、IT業界では女性エンジニアの活躍が急速に広がっています。ダイバーシティ推進の流れに加え、リモートワークの普及やフレックスタイム制度の充実により、女性がエンジニアとして長く活躍できる環境が整いつつあります。</p>
            <p>実際のデータを見ると、女性エンジニアの需要は年々高まっており、企業の採用意欲も強い状況が続いています。特にWeb系企業やSaaS企業では、女性エンジニアの比率を高めるための施策を積極的に行っています。</p>
            <p>ここでは、技術ブログの書き方に関する最新情報をもとに、女性エンジニアが知っておくべきポイントを具体的に解説していきます。転職エージェントの活用方法や、実際の成功事例も交えながら、実践的なアドバイスをお伝えします。</p>
          </div></div>
      </section>

      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">ポートフォリオサイトの構築</h2><div className="space-y-4 text-text-light leading-relaxed">
            <p>ポートフォリオサイトの構築について、女性エンジニアの視点から詳しく解説します。IT業界で活躍する女性エンジニアにとって、正確な情報と適切な戦略を持つことは、キャリアを成功させるための鍵となります。</p>
            <p>2026年現在、IT業界では女性エンジニアの活躍が急速に広がっています。ダイバーシティ推進の流れに加え、リモートワークの普及やフレックスタイム制度の充実により、女性がエンジニアとして長く活躍できる環境が整いつつあります。</p>
            <p>実際のデータを見ると、女性エンジニアの需要は年々高まっており、企業の採用意欲も強い状況が続いています。特にWeb系企業やSaaS企業では、女性エンジニアの比率を高めるための施策を積極的に行っています。</p>
            <p>ここでは、ポートフォリオサイトの構築に関する最新情報をもとに、女性エンジニアが知っておくべきポイントを具体的に解説していきます。転職エージェントの活用方法や、実際の成功事例も交えながら、実践的なアドバイスをお伝えします。</p>
          </div></div>
      </section>

      <section id="sec7" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">初心者向けプロジェクトアイデア</h2><div className="space-y-4 text-text-light leading-relaxed">
            <p>初心者向けプロジェクトアイデアについて、女性エンジニアの視点から詳しく解説します。IT業界で活躍する女性エンジニアにとって、正確な情報と適切な戦略を持つことは、キャリアを成功させるための鍵となります。</p>
            <p>2026年現在、IT業界では女性エンジニアの活躍が急速に広がっています。ダイバーシティ推進の流れに加え、リモートワークの普及やフレックスタイム制度の充実により、女性がエンジニアとして長く活躍できる環境が整いつつあります。</p>
            <p>実際のデータを見ると、女性エンジニアの需要は年々高まっており、企業の採用意欲も強い状況が続いています。特にWeb系企業やSaaS企業では、女性エンジニアの比率を高めるための施策を積極的に行っています。</p>
            <p>ここでは、初心者向けプロジェクトアイデアに関する最新情報をもとに、女性エンジニアが知っておくべきポイントを具体的に解説していきます。転職エージェントの活用方法や、実際の成功事例も交えながら、実践的なアドバイスをお伝えします。</p>
          </div></div>
      </section>

      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">失敗しないポートフォリオのコツ</h2><div className="space-y-4 text-text-light leading-relaxed">
            <p>失敗しないポートフォリオのコツについて、女性エンジニアの視点から詳しく解説します。IT業界で活躍する女性エンジニアにとって、正確な情報と適切な戦略を持つことは、キャリアを成功させるための鍵となります。</p>
            <p>2026年現在、IT業界では女性エンジニアの活躍が急速に広がっています。ダイバーシティ推進の流れに加え、リモートワークの普及やフレックスタイム制度の充実により、女性がエンジニアとして長く活躍できる環境が整いつつあります。</p>
            <p>実際のデータを見ると、女性エンジニアの需要は年々高まっており、企業の採用意欲も強い状況が続いています。特にWeb系企業やSaaS企業では、女性エンジニアの比率を高めるための施策を積極的に行っています。</p>
            <p>ここでは、失敗しないポートフォリオのコツに関する最新情報をもとに、女性エンジニアが知っておくべきポイントを具体的に解説していきます。転職エージェントの活用方法や、実際の成功事例も交えながら、実践的なアドバイスをお伝えします。</p>
          </div></div>
      </section>

      <section id="sec9" className="py-10"><div className="mx-auto max-w-4xl px-4"><h2 className="text-2xl font-bold mb-6">転職での活用方法</h2><div className="space-y-4 text-text-light leading-relaxed">
            <p>転職での活用方法について、女性エンジニアの視点から詳しく解説します。IT業界で活躍する女性エンジニアにとって、正確な情報と適切な戦略を持つことは、キャリアを成功させるための鍵となります。</p>
            <p>2026年現在、IT業界では女性エンジニアの活躍が急速に広がっています。ダイバーシティ推進の流れに加え、リモートワークの普及やフレックスタイム制度の充実により、女性がエンジニアとして長く活躍できる環境が整いつつあります。</p>
            <p>実際のデータを見ると、女性エンジニアの需要は年々高まっており、企業の採用意欲も強い状況が続いています。特にWeb系企業やSaaS企業では、女性エンジニアの比率を高めるための施策を積極的に行っています。</p>
            <p>ここでは、転職での活用方法に関する最新情報をもとに、女性エンジニアが知っておくべきポイントを具体的に解説していきます。転職エージェントの活用方法や、実際の成功事例も交えながら、実践的なアドバイスをお伝えします。</p>
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
            <a href="/articles/javascript-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>JavaScript×女性エンジニア</h3><p className="text-sm text-text-light">フロントエンド転職の始め方</p></a>
            <a href="/articles/python-career/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>Python×女性エンジニア</h3><p className="text-sm text-text-light">求人動向・年収・学習ロードマップ</p></a>
            <a href="/articles/resume-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>職務経歴書の書き方</h3><p className="text-sm text-text-light">エンジニア向け書類作成ガイド</p></a>
            <a href="/articles/interview-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}><h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>面接対策ガイド</h3><p className="text-sm text-text-light">技術面接の準備と対策</p></a>
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
