import Link from 'next/link'
import BlogHeader from '@/components/blog/BlogHeader'
import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'
import rehypeClassNames from 'rehype-class-names'
import type { Metadata } from 'next'
import BaseLayout from "@/components/BaseLayout";
import Footer from '@/components/page-1/Footer'
async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), 'src', 'content', `${slug}.md`)

  let raw: string
  try {
    raw = await fs.readFile(filePath, 'utf8')
  } catch {
    return null
  }

  const { data, content } = matter(raw)

  const html = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeClassNames, {
      h2: 'text-2xl font-semibold mt-10 mb-4 scroll-mt-24',
      h3: 'text-xl font-semibold mt-8 mb-3 text-neutral-900 dark:text-neutral-100 scroll-mt-24',
      p: 'text-base leading-7 text-neutral-700 dark:text-neutral-300 mb-4',
      ul: 'list-disc pl-6 space-y-2 mb-4',
      ol: 'list-decimal pl-6 space-y-2 mb-4',
      li: 'text-neutral-700 dark:text-neutral-300 leading-6',
      a: 'text-neutral-700 hover:underline dark:text-blue-400',
      table: 'w-full border-collapse text-sm my-6 min-w-[786px]',
      thead: 'bg-neutral-100 dark:bg-neutral-800 w-full',
      th: 'border border-neutral-200 dark:border-neutral-700 px-3 py-2 text-left font-medium',
      td: 'border border-neutral-200 dark:border-neutral-700 px-3 py-2',
      strong: 'font-semibold text-neutral-900 dark:text-neutral-100',
    })
    .use(rehypeStringify)
    .process(content)

  return { meta: data as PostMeta, html: html.toString() }
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const { meta } = await getPost(params.slug)
  return { title: meta.title, description: meta.description }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { meta, html } = await getPost(params.slug)

  return (
    <BaseLayout>
        <BlogHeader title={meta.title} description={meta.description} />
        <article className="mx-auto max-w-3xl px-4 py-6">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol
            className="flex flex-wrap items-center gap-1.5 text-sm font-space-grotesk text-muted-foreground"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link
                href="/"
                itemProp="item"
                className="text-accent hover:text-accent-hover transition-colors duration-150 hover:underline underline-offset-2"
              >
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>

            <li aria-hidden="true" className="select-none text-muted-foreground/40">/</li>

            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link
                href="/blog"
                itemProp="item"
                className="text-accent hover:text-accent-hover transition-colors duration-150 hover:underline underline-offset-2"
              >
                <span itemProp="name">Blog</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>

            <li aria-hidden="true" className="select-none text-muted-foreground/40">/</li>

            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="truncate max-w-[200px] sm:max-w-xs md:max-w-none"
            >
              <span
                itemProp="name"
                aria-current="page"
                className="text-foreground font-medium"
              >
                {meta.title}
              </span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        <div
          className="max-w-none [&_table]:block [&_table]:overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        </article>
        <Footer/>
    </BaseLayout>
  )
}