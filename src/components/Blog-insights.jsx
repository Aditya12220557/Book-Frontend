

const InsightCard = ({ title, description, image, link }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
    <div className="aspect-[4/3] overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-neutral-800 mb-3">
        {title}
      </h3>
      <p className="text-neutral-600 mb-4">
        {description}
      </p>
      <a 
        href={link} 
        className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
      >
        Read more
        <svg 
          className="ml-2 w-4 h-4" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
);

const InsightsSection = () => {
  const insights = [
    {
      id: 1,
      title: "The Future of Construction Technology",
      description: "Explore ScrewFast's pioneering role in revolutionizing construction through advanced technology and innovative solutions.",
      image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#"
    },
    {
      id: 2,
      title: "The Importance of Collaboration",
      description: "Explore how collaboration is central to ScrewFast's construction approach, driving effective communication and teamwork to achieve outstanding outcomes.",
      image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#"
    },
    {
      id: 3,
      title: "The Impact of Sustainable Practices",
      description: "Discover how ScrewFast is leading the charge in promoting sustainability within the construction industry",
      image: "https://images.unsplash.com/photo-1456315138460-858d1089ddba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#"
    }
  ];

  return (
    <section className="bg-neutral-100 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Insights
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Stay up-to-date with the latest trends and developments in the construction industry with 
            insights from ScrewFast s team of industry experts.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <InsightCard
              key={insight.id}
              title={insight.title}
              description={insight.description}
              image={insight.image}
              link={insight.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;