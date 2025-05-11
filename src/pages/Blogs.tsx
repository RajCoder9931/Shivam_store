import React, { useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { blogs } from '../utils/mockData';
import BlogCard from '../components/BlogCard';
const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || blog.content.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="bg-gray-50 min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Blog</h1>
          <p className="mt-2 text-lg text-gray-600">
            Tips, insights, and updates from Shivam General Store
          </p>
        </div>
        {/* Search */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" placeholder="Search blogs..." className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
        </div>
        {/* Blogs Grid */}
        {filteredBlogs.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map(blog => <BlogCard key={blog.id} {...blog} />)}
          </div> : <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">
              No blogs found
            </h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search to find what you're looking for.
            </p>
          </div>}
      </div>
    </div>;
};
export default Blogs;