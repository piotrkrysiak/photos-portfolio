import * as React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }: any) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <>
      {posts.map((post: any) => {
        const { title, date, description } = post.frontmatter;
        return (
          <div key={date}>
            <h1>
              {title} {date} {description}
            </h1>
          </div>
        );
      })}
    </>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          description
          title
        }
      }
    }
  }
`;

export default IndexPage;
