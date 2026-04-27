import Link from "next/link";

type BreadcrumbItem = {
  href?: string;
  label: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `https://women-engineer-navi.pages.dev${item.href}` }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="パンくずリスト" className="py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-text-light">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && <span className="mx-1">/</span>}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                  style={{ color: undefined }}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-text">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
