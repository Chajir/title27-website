import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Buffer } from 'buffer';
window.Buffer = Buffer;

export default function BlogPost({ postPath }) {
  const [post, setPost] = useState({ content: "", data: {} });

  useEffect(() => {
    fetch(postPath)
      .then((res) => res.text())
      .then((text) => {
        const parsed = matter(text);
        setPost({ content: parsed.content, data: parsed.data });
      });
  }, [postPath]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
     <div className="max-w-3xl mx-auto p-6">
      {post.data.banner && (
        <img
          src={post.data.banner}
          alt="Banner"
          className="w-full max-w-4xl h-64 object-cover rounded-lg mx-auto mb-6 shadow"
          />
      )}
      <h1 className="text-4xl font-bold mb-2">{post.data.title}</h1>
      <p className="text-slate-500 text-sm mb-6">Published: {post.data.date}</p>

      <div className="prose prose-lg text-slate-700 dark:prose-invert">
       <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
       {post.content}
       </ReactMarkdown>
      </div>
    </div>
  </div>
  );
}
