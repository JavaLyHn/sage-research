"use client";

import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

interface Props {
  slug: string;
  content: string;
}

export default function ReportContent({ slug, content }: Props) {
  const transformImageUrl = (url: string) => {
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    const cleaned = url.replace(/^\.\//, "").replace(/^\//, "");
    return `/products/${slug}/${cleaned}`;
  };

  return (
    <article className="mx-auto w-full max-w-4xl px-6 py-12 lg:px-12 lg:py-16">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        urlTransform={(url) => url}
        components={{
          h1: ({ children, ...props }) => (
            <h1
              {...props}
              className="mb-10 mt-2 font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl"
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2
              {...props}
              className="mt-14 mb-5 scroll-mt-20 border-b border-border pb-3 font-serif text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl"
            >
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3
              {...props}
              className="mt-10 mb-3 scroll-mt-20 font-serif text-xl font-semibold leading-snug text-foreground sm:text-2xl"
            >
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4
              {...props}
              className="mt-8 mb-2 scroll-mt-20 font-serif text-lg font-semibold text-foreground"
            >
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="my-4 text-[15px] leading-7 text-secondary">
              {children}
            </p>
          ),
          a: ({ children, href, ...props }) => {
            const isExternal = href?.startsWith("http");
            return (
              <a
                {...props}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-accent underline-offset-4 transition-colors hover:underline"
              >
                {children}
              </a>
            );
          },
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          ul: ({ children }) => (
            <ul className="my-4 ml-1 list-none space-y-2 text-[15px] leading-7 text-secondary">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 ml-5 list-decimal space-y-2 text-[15px] leading-7 text-secondary marker:text-muted-foreground">
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => {
            // For ul: prefix with bullet; for ol: native numbering
            const isOrdered =
              (props as { ordered?: boolean }).ordered === true;
            if (isOrdered) {
              return <li className="pl-1">{children}</li>;
            }
            return (
              <li className="relative pl-5">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[0.7em] inline-block h-1 w-1 -translate-y-1/2 rounded-full bg-muted-foreground"
                />
                {children}
              </li>
            );
          },
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-2 border-accent bg-muted/40 px-4 py-3 text-[14px] italic leading-7 text-secondary">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-12 border-0 border-t border-border" />,
          code: ({ children, className }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <code className={`${className} font-mono text-[13px]`}>
                  {children}
                </code>
              );
            }
            return (
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto rounded-lg border border-border bg-muted/60 p-4 text-[13px] leading-6">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-lg border border-border">
              <table className="w-full border-collapse text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted/60">{children}</thead>
          ),
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => (
            <tr className="border-b border-border last:border-0">{children}</tr>
          ),
          th: ({ children, style }) => (
            <th
              style={style}
              className="px-3 py-2 text-left text-[11px] font-bold uppercase tracking-widest text-muted-foreground"
            >
              {children}
            </th>
          ),
          td: ({ children, style }) => (
            <td
              style={style}
              className="border-t border-border px-3 py-2 align-top text-[14px] leading-6 text-secondary"
            >
              {children}
            </td>
          ),
          img: ({ src, alt }) => {
            const finalSrc = typeof src === "string" ? transformImageUrl(src) : "";
            return (
              <img
                src={finalSrc}
                alt={alt ?? ""}
                loading="lazy"
                className="my-6 max-w-full rounded-lg border border-border bg-card shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
              />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
