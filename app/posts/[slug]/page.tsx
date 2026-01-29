import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/imageBuilder';
import YouTubeEmbed from '../../components/YouTubeEmbed';
import { PortableText } from '@portabletext/react';

// This function fetches the specific data for whatever post is clicked
async function getPost(slug: string) {
  console.log("slug", slug)
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    youtubeUrl,
    body,
    category
  }`;
  return await client.fetch(query, { slug });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  // 1. Unwrapping params for Next.js 15 compatibility
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // 2. Passing the unwrapped slug to your fetch function
  const post = await getPost(slug);

  if (!post) return <div className="p-20 text-center">Post not found</div>;

  // Extracting YouTube ID from the full URL
  const videoId = post.youtubeUrl?.split('v=')[1] || post.youtubeUrl?.split('/').pop();

  return (
    <article className="min-h-screen bg-white pb-20">
      {/* Generic Hero Header */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={urlFor(post.mainImage).url()} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-12">
          <div className="max-w-4xl">
            <span className="bg-red-700 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
              {post.category}
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-serif font-bold mt-4">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 md:px-12 py-16">
        
        {/* Main Content Area */}
        <div className="lg:col-span-8">
          {/* YouTube Section - Only shows if a link exists */}
          {videoId && (
            <div className="mb-12">
              <h2 className="text-xl font-bold border-l-4 border-red-700 pl-4 mb-6 uppercase tracking-widest text-stone-800">
                The Vlog Experience
              </h2>
              <YouTubeEmbed videoId={videoId} />
            </div>
          )}

          {/* Body Text Section */}
          <div className="prose prose-lg prose-red max-w-none text-stone-700 leading-relaxed">
            <PortableText value={post.body} />
          </div>
        </div>

        {/* Sidebar - Consistent for your brand */}
        <aside className="lg:col-span-4">
          <div className="sticky top-10 bg-stone-50 p-8 border-t-4 border-red-700 shadow-sm text-center">
            <img 
              src="/harsha-profile.jpg" 
              alt="Harsha" 
              className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-red-700 object-cover"
            />
            <h4 className="text-2xl font-serif font-bold text-stone-900">Namaste! I'm Harsha</h4>
            <p className="text-stone-600 text-sm mt-4 leading-relaxed">
              I am an Indian vegetarian traveler living in Kanagawa. 
              I share detailed Japan itineraries and vlogs to help you explore this beautiful 
              country with ease.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}