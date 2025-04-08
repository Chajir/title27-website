// src/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "what-is-title-insurance",
    title: "What Is Title Insurance?",
    date: "April 7, 2025",
  },
  {
    slug: "importance-of-title-company",
    title: "The Importance of Choosing to Close Deals with a Title Company in Florida",
    date: "April 8, 2025",
  },
];

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} className="mb-8">
          <h2 className="text-2xl font-semibold">
            <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </h2>
          <p className="text-sm text-slate-500 mb-2">Published: {post.date}</p>
        </div>
      ))}
    </div>
  );
}
