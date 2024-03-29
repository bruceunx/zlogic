import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { ParsedUrlQuery } from "querystring";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { materialDark as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import SEOHead from "../../components/seohead";

interface Params extends ParsedUrlQuery {
  slug: string;
}

type SinglePost = {
  frontMatter: {
    title: string;
    date: string;
  };
  mdxSource: string;
};

const SingleWork: NextPage<SinglePost> = ({
  frontMatter: { title, date },
  mdxSource,
}: SinglePost) => {
  return (
    <>
      <SEOHead title={title} description={title} />
      <div className="min-h-[88vh] text-gray-700 p-5">
        <h3 className="mt-3 text-center font-bold text-2xl">{title}</h3>
        <p className="text-sm text-right mb-2 pr-2">{date}</p>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  style={style}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {mdxSource}
        </ReactMarkdown>
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;
  const markdownwithMeta = fs.readFileSync(
    path.join("works", slug + ".md"),
    "utf-8",
  );
  const { data: frontMatter, content } = matter(markdownwithMeta);
  const mdxSource = content;
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const files = fs.readdirSync(path.join("works"));
  const paths = files.map((file) => {
    return {
      params: {
        slug: file.split(".")[0],
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default SingleWork;
