

const BlogHeader = () => {
  // Sample blog post data - in a real app, this would come from props or an API
  const featuredPosts = [
    {
      id: 1,
      title: "Enhancing Safety and Workmanship with ScrewFast Construction Services",
      subtitle: "Quality construction services for lasting results",
      author: "Brad",
      date: "Feb 10, 2024",
      image: "https://images.unsplash.com/photo-1490332695540-5acc256ec383?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Maximizing Efficiency with ScrewFast's Cutting-Edge Tools",
      subtitle: "Innovating Construction Efficiency with Precision Tools & Support",
      author: "Jacob",
      date: "Feb 5, 2024",
      image: "https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="w-full bg-neutral-100 px-4 py-16">
      {/* Header Section */}
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h1 className="text-5xl font-bold text-neutral-900 mb-6">
          Your Gateway to Construction Excellence
        </h1>
        <p className="text-lg text-neutral-600">
          Explore the latest news, tips, and insights from ScrewFast to enhance your construction projects. 
          From product spotlights to project management strategies, our blog is your go-to resource for all 
          things hardware and construction.
        </p>
      </div>

      {/* Featured Posts Grid */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredPosts.map((post) => (
          <div key={post.id} className="relative rounded-xl overflow-hidden bg-neutral-900 group">
            {/* Background Image */}
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 object-cover opacity-80"
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-t from-black/70 to-transparent">
              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden">
                  <img 
                    src="/api/placeholder/40/40" 
                    alt={post.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">{post.author}</span>
                  <span className="text-neutral-300 text-sm">{post.date}</span>
                </div>
              </div>

              {/* Post Title and Subtitle */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-neutral-200">
                  {post.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogHeader;