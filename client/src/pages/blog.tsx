import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, ArrowRight, Clock, Tag } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Carbon Capture Technology",
      excerpt: "Exploring innovative approaches to carbon capture and storage that could revolutionize climate action.",
      category: "Technology",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Carbon Capture", "Climate Technology", "Innovation"],
      featured: true,
    },
    {
      title: "Renewable Energy Investment Trends",
      excerpt: "Analysis of global renewable energy markets and emerging investment opportunities in clean technology.",
      category: "Finance",
      date: "December 12, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Renewable Energy", "Investment", "Market Analysis"],
      featured: false,
    },
    {
      title: "Biodiversity Conservation Strategies",
      excerpt: "Effective approaches to protecting ecosystems and endangered species in urban and rural environments.",
      category: "Conservation",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Biodiversity", "Conservation", "Ecosystems"],
      featured: false,
    },
    {
      title: "Sustainable Urban Planning Best Practices",
      excerpt: "How cities are incorporating green infrastructure and sustainable design principles into urban development.",
      category: "Urban Planning",
      date: "December 8, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Urban Planning", "Green Infrastructure", "Sustainability"],
      featured: false,
    },
    {
      title: "Water Scarcity Solutions for Industrial Applications",
      excerpt: "Innovative water conservation and recycling technologies helping industries reduce their environmental impact.",
      category: "Water Management",
      date: "December 5, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Water Management", "Industrial", "Conservation"],
      featured: false,
    },
    {
      title: "Environmental Regulations Update 2024",
      excerpt: "Key changes in environmental legislation that businesses need to know about for compliance planning.",
      category: "Regulatory",
      date: "December 3, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Regulations", "Compliance", "Policy"],
      featured: false,
    },
  ];

  const categories = ["All", "Technology", "Finance", "Conservation", "Urban Planning", "Water Management", "Regulatory"];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <OrganicBlob className="absolute top-10 right-10 opacity-15" size="lg" />
        <OrganicBlob className="absolute bottom-10 left-10 opacity-10" size="md" delay={2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-heading font-bold text-dark-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Latest <span className="text-sea-green">Insights</span>
            </motion.h1>
            <motion.p
              className="text-xl text-dark-slate/70 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Stay updated with the latest environmental trends, regulations, and sustainable practices through our expert insights and industry analysis.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="glassmorphic glassmorphic-hover px-6 py-2 rounded-full text-sea-green font-semibold text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gradient-to-b from-soft-blue/20 to-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">Featured Article</h2>
          </div>

          <GlassmorphicCard className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-sea-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Рекомендуемая
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-dark-slate/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span>{blogPosts[0].category}</span>
                  </div>
                </div>

                <h3 className="text-3xl font-heading font-bold text-dark-slate">
                  {blogPosts[0].title}
                </h3>

                <p className="text-lg text-dark-slate/70 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {blogPosts[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-sea-green/10 text-sea-green text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Read Full Article
                </button>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">Recent Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <GlassmorphicCard key={post.title} delay={index * 0.1}>
                <article className="space-y-4">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-sea-green">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-dark-slate line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-dark-slate/70 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-sea-green/10 text-sea-green text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-sea-green font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </article>
              </GlassmorphicCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="glassmorphic glassmorphic-hover px-8 py-4 rounded-full text-sea-green font-semibold">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphicCard className="text-center">
            <motion.h2
              className="text-4xl font-heading font-bold text-dark-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Stay <span className="text-sea-green">Informed</span>
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Subscribe to our newsletter for the latest environmental insights, industry trends, and sustainable solutions delivered directly to your inbox.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-dark-slate/20 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sea-green focus:border-transparent"
              />
              <button className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300">
                Subscribe
              </button>
            </motion.div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
}