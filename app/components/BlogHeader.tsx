import React from "react";
import Image from "next/image";

type BlogHeaderProps = {
  title: string;
  date: string;
  imageUrl: string;
};

const BlogHeader = ({ title, date, imageUrl }: BlogHeaderProps) => {
  return (
    <div className="blog-header">
      <h1>{title}</h1>
      <p>{date}</p>
      <Image src={imageUrl} alt={title} width={800} height={600} />
    </div>
  );
};

export default BlogHeader;
