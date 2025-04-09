import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Rise of Luxury Real Estate in Nairobi",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaSUyMGVsZXBoYW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      content: "Nairobi's real estate market is booming with luxury developments. Discover the latest trends and investment opportunities in Kenya's capital.",
      date: "April 9, 2025",
    },
    {
      id: 2,
      title: "Sustainable Living: Eco-Friendly Homes in Kenya",
      image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVjb25vbW9kZWwlMjBiYW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      content: "Explore the growing trend of eco-friendly homes in Kenya. Learn about sustainable building practices and their impact on the environment.",
      date: "April 8, 2025",
    },
    {
      id: 3,
      title: "Investing in Kenya's Coastal Real Estate",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29hc3RhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      content: "Kenya's coastal regions offer stunning views and lucrative investment opportunities. Find out why now is the perfect time to invest in coastal properties.",
      date: "April 7, 2025",
    },
  ];

  return (
    <section id="blog" className="blog-section">
      <h2 className="blog-title">Real Estate Blog</h2>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content}</p>
            <p className="post-date">{post.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
