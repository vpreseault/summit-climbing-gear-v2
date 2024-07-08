import React from "react";
interface BlogParagraphProps {
  subtitle: string;

  paragraph: string;
}

const BlogParagraph: React.FC<BlogParagraphProps> = ({
  subtitle,
  paragraph,
}) => {
  return (
    <div className="blog-paragraph">
      <h3>{subtitle}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default BlogParagraph;
