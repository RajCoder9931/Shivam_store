import React from 'react';
interface BlogProps {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
}
const BlogCard: React.FC<BlogProps> = ({
  id,
  title,
  content,
  image,
  author,
  date
}) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <span>{author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{content}</p>
        <button className="text-green-700 font-medium hover:underline">
          Read More
        </button>
      </div>
    </div>;
};
export default BlogCard;