import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

export default function BlogPost({ postPath }) {
  const [post, setPost] = useState({ content: "", data: {} });

  useEffect(() => {
    fetch(postPath)
      .then(res => res.text())
      .then(text => {
        const { content, data } = matter(text);
        setPost({ content, data });
      });
  }, [postPath]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      {post.data.banner && (
        <img
          src={post.data.banner}
          alt="Banner"
          className="rounded mb-4 w-full object-cover"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{post.data.title}</h1>
      <p className="text-sm text-slate-500 mb-6">Published: {post.data.date}</p>
      <ReactMarkdown className="prose prose-lg text-slate-700">
        {post.content}
      </ReactMarkdown>
    </div>
  );
}