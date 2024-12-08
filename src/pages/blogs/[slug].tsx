import fs from "fs";
import React from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "@/components/Layout";
import Date from "@/components/Date";
import IntroContent from "@/components/IntroContent";
import TitleBanner from "@/components/TitleBanner";
import BasicMeta from "@/components/meta/BasicMeta";
import OpenGraphMeta from "@/components/meta/OpenGraphMeta";
import TwitterCardMeta from "@/components/meta/TwitterCardMeta";

// Define the frontmatter type
interface Frontmatter {
  title: string;
  description: string;
  metaDescription: string;
  keywords: string;
  date: Date;
}

// Define the props for the Blog component
interface BlogProps {
  frontmatter: Frontmatter;
  markdown: string;
  slug: string;
}

const Blog: React.FC<BlogProps> = ({ frontmatter, markdown, slug }) => {
  return (
    <Layout>
      <BasicMeta url={`/blogs/${slug}`} title={frontmatter.title} description={frontmatter.description} keywords={[`${frontmatter.keywords}`]}/>
      <OpenGraphMeta url={"/"} title={frontmatter.title} description={frontmatter.metaDescription} />
      <TwitterCardMeta url={"/"} title={frontmatter.title} description={frontmatter.metaDescription} />
      
      <TitleBanner title={frontmatter.title} className="blog-page" />
      <div className="container">
        <div className="container-fluid">
          <div className="blog-container">
            <Date date={frontmatter.date} />
            <hr />
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
          <div className="blog-side-container">
            <IntroContent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

// Define the type for getStaticProps
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string; // Ensure slug is a string
  const fileContent = matter(
    fs.readFileSync(`./content/blogs/${slug}.md`, "utf8")
  );
  const frontmatter = fileContent.data as Frontmatter; // Ensure correct type
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown, slug },
  };
};

// Define the type for getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  const filesInProjects = fs.readdirSync("./content/blogs");
  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf("."));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
};
