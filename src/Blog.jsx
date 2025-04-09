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
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        {posts.map((post) => (
          <div
            key={post.slug}
            className="mb-8 border-b border-slate-200 dark:border-slate-700 pb-4"
          >
            <h2 className="text-2xl font-semibold">
              <Link
                to={`/blog/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Published: {post.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
