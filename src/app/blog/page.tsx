import Link from 'next/link'
import BlogHeader from '@/components/blog/BlogHeader'
import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import type { Metadata } from 'next'
import BaseLayout from '@/components/BaseLayout'
import Footer from '@/components/page-1/Footer'
import { ArrowRight, Calendar, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roofing Blog | Tips, Guides & Advice | Canadian Roofers',
  description:
    'Expert roofing articles, cost guides, repair tips, and homeowner advice from the team at Canadian Roofers. Serving Toronto & the GTA.',
}

type PostMeta = {
  title: string
  description: string
  slug: string
  date: string
}

async function getAllPosts(): Promise<PostMeta[]> {
  const contentDir = path.join(process.cwd(), 'src', 'content')
  let files: string[]
  try {
    files = await fs.readdir(contentDir)
  } catch {
    return []
  }

  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith('.md'))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(contentDir, file), 'utf8')
        const { data } = matter(raw)
        return {
          title: data.title ?? '',
          description: data.description ?? '',
          slug: data.slug ?? file.replace(/\.md$/, ''),
          date: data.date ?? '',
        } as PostMeta
      })
  )

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogIndex() {
  const posts = await getAllPosts()

  return (
    <BaseLayout>
      <BlogHeader
        title="Roofing Blog"
        description="Tips, guides, cost breakdowns, and expert advice to help Ontario homeowners make informed roofing decisions."
      />

      {/* Posts grid */}
      <main className="bg-surface">
        <div className="container py-16 md:py-20">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen size={48} className="mx-auto text-muted-foreground/40 mb-4" />
              <p className="text-muted-foreground text-lg">No posts published yet. Check back soon.</p>
            </div>
          ) : (
            <>
              {/* <p className="text-muted-foreground text-sm font-space-grotesk mb-10">
                {posts.length} {posts.length === 1 ? 'article' : 'articles'}
              </p> */}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="group flex flex-col rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                  >
                    {/* Card top accent bar */}
                    <div className="h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex flex-col flex-1 p-6 md:p-7">
                      {/* Date */}
                      {post.date && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-space-grotesk mb-4">
                          <Calendar size={12} className="text-accent" />
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="font-playfair-display font-bold text-xl text-foreground leading-snug mb-3 group-hover:text-accent transition-colors duration-200">
                        <Link href={`/blog/${post.slug}`} className="focus:outline-none focus-visible:underline">
                          {post.title}
                        </Link>
                      </h2>

                      {/* Description */}
                      {post.description && (
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                          {post.description}
                        </p>
                      )}

                      {/* CTA */}
                      <div className="mt-6 pt-5 border-t border-border">
                        <Link
                          href={`/blog/${post.slug}`}
                          aria-label={`Read ${post.title}`}
                          className="inline-flex items-center gap-1.5 text-sm font-space-grotesk font-semibold text-accent hover:gap-3 transition-all duration-200"
                        >
                          Read Article
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </BaseLayout>
  )
}
