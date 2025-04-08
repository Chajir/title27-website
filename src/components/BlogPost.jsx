import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
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
    <div className="max-w-3xl mx-auto p-6">
      {post.data.banner && (
        <img
          src={post.data.banner}
          alt="Banner"
          className="w-full h-auto mb-6 rounded-lg shadow"
        />
      )}
      <h1 className="text-4xl font-bold mb-2">{post.data.title}</h1>
      <p className="text-slate-500 text-sm mb-6">Published: {post.data.date}</p>

      {/* Use a wrapper div to style markdown instead */}
      <div className="prose prose-lg text-slate-700">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}
