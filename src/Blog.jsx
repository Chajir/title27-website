// src/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      title: "What Is Title Insurance?",
      slug: "what-is-title-insurance",
      excerpt: "Learn the basics of title insurance and how it protects your real estate investment.",
    },
    {
      title: "The Importance of Choosing to Close Deals with a Title Company in Florida",
      slug: "importance-of-title-company",
      excerpt: "Discover why closing with a title company is essential for smooth real estate transactions in Florida.",
    },
  ];

  return (
    <div className="py-16 px-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-6">Our Blog</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border-b pb-4">
            <h2 className="text-xl font-semibold">
              <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-slate-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
