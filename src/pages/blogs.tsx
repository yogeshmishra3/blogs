import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "@/components/Layout";
import BasicMeta from "@/components/meta/BasicMeta";
import OpenGraphMeta from "@/components/meta/OpenGraphMeta";
import TwitterCardMeta from "@/components/meta/TwitterCardMeta";
import { GetStaticProps } from "next";
import Date from "@/components/Date";
import IntroContent from "@/components/IntroContent";
import TitleBanner from "@/components/TitleBanner";

// Define the type for a single blog item
interface Blog {
  title: string;
  content: string;
  date: Date;
  slug: string; // The filename without the .md extension
}

// Define the props for the Home component
interface HomeProps {
  blogs: Blog[];
}

const Home: React.FC<HomeProps> = ({ blogs }) => {
  return (
    <Layout>
      <BasicMeta url={"https://dailysitecore.blogspot.com"} title="Blogs" description="Sitecore CMS. A technical blog about sitecore learning for sitecore developer. Technologies like Sitecore, SXA, Headless, XM Cloud."/>
      <OpenGraphMeta  url={"https://dailysitecore.blogspot.com"} title="Blogs" description="Sitecore CMS. A technical blog about sitecore learning for sitecore developer. Technologies like Sitecore, SXA, Headless, XM Cloud." />
      <TwitterCardMeta  url={"https://dailysitecore.blogspot.com"} title="Blogs" description="Sitecore CMS. A technical blog about sitecore learning for sitecore developer. Technologies like Sitecore, SXA, Headless, XM Cloud."  />
      <TitleBanner title="Blogs"/>

      <div className="container">
        <div className="container-fluid">
          <div className="main-container">
            <div className="blog-list">
              {blogs.map((blog) => (
                <div key={blog.slug} className="blog-post-card">
                  <h3 className="blog-heading">
                    <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                  </h3>
                  <Date date={blog.date} />
                  <div className="line" />
                  <p className="post-snippet">{blog.content}</p>
                  <Link href={`/blogs/${blog.slug}`} className="button">
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="side-container">
            <IntroContent className="remove-top-margin" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

// Type for getStaticProps
export const getStaticProps: GetStaticProps = async () => {
  // List of files in the blogs folder
  const filesInBlogs = fs.readdirSync("./content/blogs");

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      title: matterData.data.title as string,
      date: matterData.data.date as string,
      content:
        (matterData.content as string).slice(0, 150) +
        (matterData.content.length > 150 ? "..." : ""),
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      blogs,
    },
  };
};
