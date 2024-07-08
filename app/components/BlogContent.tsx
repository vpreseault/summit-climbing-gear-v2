import React from "react";
import BlogHeader from "./BlogHeader";
import BlogParagraph from "./BlogParagraph";

const BlogContent = () => {
  return (
    <div className="blog-content">
      <BlogHeader
        title="Blog Post Title"
        date="Release Date"
        imageUrl="/shoes1.avif" // replace with actual image URL
      />
      <BlogParagraph
        subtitle="What is Lorem Ipsum?"
        paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
      />
      <BlogParagraph
        subtitle="Why do we use it?"
        paragraph="It is a long established fact that a reader will be distracted by the readable content..."
      />
      <BlogParagraph
        subtitle="Where does it come from?"
        paragraph="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature..."
      />
      <BlogParagraph
        subtitle="Where can I get some?"
        paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form..."
      />
    </div>
  );
};

export default BlogContent;
