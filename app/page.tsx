import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/imageBuilder';
import Link from 'next/link';

async function getPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc) {
    title,
    slug,
    mainImage,
    category,
    "excerpt": array::join(string::split(pt::text(body), "")[0..150], "") + "..."
  }`;
  return await client.fetch(query);
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Red Header Bar */}

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 p-10">
        
        {/* LEFT: Automatic Post Grid (8 Columns) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post: any) => (
            <Link href={`/posts/${post.slug.current}`} key={post.slug.current}>
              <div className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={urlFor(post.mainImage).width(600).url()} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-red-700 font-bold text-xs uppercase tracking-widest">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-serif font-bold mt-2 group-hover:text-red-700 transition">
                    {post.title}
                  </h2>
                  <p className="text-stone-500 text-sm mt-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* RIGHT: Sidebar (4 Columns) */}
        <aside className="lg:col-span-4">
          <div className="bg-white p-8 border border-stone-200 sticky top-10 text-center">
            {/* Using your selfie from Owakudani */}
            <img 
              src="/harsha-profile.jpg" 
              alt="Harsha" 
              className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-red-700 object-cover" 
            />
            <h3 className="text-xl font-serif font-bold">Namaste! I'm Harsha</h3>
            <p className="text-stone-600 text-sm mt-4 leading-relaxed">
              An Indian vegetarian expat living in Kanagawa. 
              I share solo travel guides and vlogs to help you explore Japan with ease.
            </p>
            <div className="mt-6 pt-6 border-t border-stone-100 flex flex-col space-y-2">
               <span className="text-xs font-bold uppercase text-red-700">Follow the Vlogs</span>
               <a href="#" className="text-stone-800 font-bold hover:text-red-700">YouTube</a>
               <a href="#" className="text-stone-800 font-bold hover:text-red-700">Instagram</a>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}