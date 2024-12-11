import type { FC } from "react";

export interface LinkedInPostsProps {
  className?: string;
}

const LinkedInPosts: FC<LinkedInPostsProps> = ({ className }) => {
  return (
    <div className={`linkedin-posts${className || ""}`}>
      <div className="component-title">
        <h2>Linkedin Posts</h2>
      </div>
      <div className="container">
        <ul className="post-list card-list three-column">
          <li className="post-card card-item" key={`post1`}>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7232804914576424961"
              allowFullScreen
              title="Embedded post"
            ></iframe>
          </li>
          <li className="post-card card-item" key={`post2`}>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7080867136792895488"
              allowFullScreen
              title="Embedded post"
            ></iframe>
          </li>
          <li className="post-card card-item" key={`post3`}>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6962811048605159424"
              allowFullScreen
              title="Embedded post"
            ></iframe>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LinkedInPosts;
