import Image from 'next/image'
import { Footer, PageHeader, SiteHeader } from '@/components/site-shell'

const posts = [
  {
    slug: 'avoid-getting-scammed',
    image: 'michigan',
    title: 'Buying Fake IDs: How to Avoid Getting Scammed',
    date: 'March 3, 2022',
    tags: ['buy fake id michigan', 'fake id maker michigan', 'fake id michigan', 'idgod', 'michigan fake id'],
    excerpt:
      'A fake id is an identification that has been created or altered to represent someone other than the person who owns it. Michigan fake id is often used by underage people who want to buy alcohol or get into clubs, but they can also be used for more serious purposes like identity theft. There are...',
  },
  {
    slug: 'how-to-buy-a-fake-id',
    image: 'newyork',
    title: 'How to Buy a Fake ID: A Comprehensive Guide',
    date: 'March 3, 2022',
    tags: ['buy fake id new york', 'fake id maker new york', 'fake id new york', 'fake ids new york', 'new york fake id'],
    excerpt:
      "It's no secret that young adults like to drink. And while many are of legal drinking age, some still want to drink underage. For those people, a New York fake id is a solution. But with so many scams and shady businesses out there, it can be hard to know where to buy a fake...",
  },
  {
    slug: 'essential-questions-georgia',
    image: 'georgia',
    title: 'Essential Questions to Ask for the Best Fake ID Purchasing Experience',
    date: 'March 3, 2022',
    tags: ['buy fake id georgia', 'fake id georgia', 'fake id maker georgia', 'fake ids georgia', 'georgia fake id'],
    excerpt:
      'When it comes to obtaining a Georgia fake id, you need to ask a few essential questions to ensure you have a positive purchasing experience. In addition, you can avoid being scammed or receiving a fake id Georgia that doesn\'t scan by asking the right questions. Here are the top questions to ask when buying...',
  },
  {
    slug: 'types-of-fake-ids-florida',
    image: 'florida',
    title: 'Buying Fake IDs: Different Types of Fake IDs Available on the Market',
    date: 'March 3, 2022',
    tags: ['buy fake id', 'buy fake id florida', 'fake id', 'fake id florida', 'fake id maker florida', 'fake ids florida', 'florida fake id'],
    excerpt:
      'In recent years, the number of teenagers and young adults trying to buy Florida fake id has increased significantly. While some people view fake id Florida as a harmless way to have a little fun, others see it as a serious crime. Whatever your opinion on the matter may be, it\'s important to be aware...',
  },
  {
    slug: 'tips-buying-fake-id-california',
    image: 'california',
    title: 'Tips and Tricks on Buying Fake Identification',
    date: 'March 3, 2022',
    tags: ['buy fake id california', 'california fake id', 'fake id california', 'fake id maker california', 'fake ids california'],
    excerpt:
      "So you're looking to buy a California fake id? Whether it's for fun, for a party, or to help you get into bars and clubs, you're in the right place! This blog post will provide tips and tricks on how to buy fake id California and where to find the best deals. We'll also give...",
  },
  {
    slug: 'common-mistakes-fake-id',
    image: 'texas',
    title: 'Common Mistakes People Make When It Comes to Buying Fake IDs. How to Avoid Them.',
    date: 'March 3, 2022',
    tags: ['buy fake id texas', 'fake id texas', 'fake id maker texas', 'texas fake id'],
    excerpt:
      "Buying a fake id can be a tricky process. There are many things to consider, and it's easy to make mistakes. In this blog post, we'll go over the most common mistakes people make when trying to buy a fake id, and we'll give you some tips on how to avoid them...",
  },
]

export default function BlogPage() {
  return (
    <>
      <SiteHeader active="Blog" />
      <main>
        <PageHeader title="BLOG" />

        <div className="blog-page shell">
          <div className="blog-list">
            {posts.map((post) => (
              <article className="blog-card" key={post.slug}>
                <div style={{ position: 'relative', minHeight: '200px', flexShrink: 0 }}>
                  <Image
                    src={`/images/${post.image}.jpg`}
                    alt={post.title}
                    width={260}
                    height={200}
                    style={{ width: '260px', height: '100%', minHeight: '200px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div className="blog-card-body">
                  <h3>{post.title}</h3>
                  <div className="blog-meta">
                    <span>✏️ By LunaCardsVault</span>
                    <span> | </span>
                    <span>📅 {post.date}</span>
                    <span> | </span>
                  </div>
                  <p className="blog-tags">🏷️ {post.tags.join(', ')}</p>
                  <p>{post.excerpt}</p>
                  <a href={`/blog/${post.slug}`} className="btn-read-more">
                    READ MORE »
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
