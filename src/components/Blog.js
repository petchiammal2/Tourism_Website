
import React from "react";
import "./Blog.css";



const Blog = () => {
  // Sample data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the Wonders of Southeast Asia",
      date: "November 5, 2024",
      excerpt: "Discover the rich culture, breathtaking landscapes, and vibrant cities of Southeast Asia in our latest travel guide.",
      image: "southeast_asia.jpg",
      link: "/blog/southeast-asia",
    },
    {
      id: 2,
      title: "The Ultimate Travel Checklist",
      date: "October 22, 2024",
      excerpt: "Everything you need to pack, prepare, and remember before setting off on your next adventure.",
      image: "travel_checklist.jpg", 
      link: "/blog/travel-checklist",
    },
    {
      id: 3,
      title: "Top Travel Apps to Use in 2024",
      date: "October 10, 2024",
      excerpt: "From maps to language tools, discover the top travel apps that will make your journey easier.",
      image: "travel_apps.jpg", 
      link: "/blog/travel-apps-2024",
    },
  ];

  return (

    <div className="blog">
      <h1>Tourism Blog</h1>
      <p>Get the latest travel tips, guides, and destination inspiration.</p>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2>{post.title}</h2>
            <span className="blog-date">{post.date}</span>
            <p>{post.excerpt}</p>
            <a href={post.link} className="read-more">Read More &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Blog;