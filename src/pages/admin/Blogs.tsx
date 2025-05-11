import React, { useState } from 'react';
import { PlusIcon, SearchIcon, EditIcon, TrashIcon } from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { blogs } from '../../utils/mockData';
import BlogForm from '../../components/admin/BlogForm';
const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<any>(null);
  const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || blog.content.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleEdit = (blog: any) => {
    setCurrentBlog(blog);
    setIsFormOpen(true);
  };
  const handleDelete = (id: number) => {
    // In a real app, this would be an API call
    alert(`Blog with ID ${id} would be deleted`);
  };
  const handleFormClose = () => {
    setIsFormOpen(false);
    setCurrentBlog(null);
  };
  return <div className="bg-gray-100 min-h-screen w-full">
      <div className="flex flex-col md:flex-row">
        <AdminSidebar />
        <div className="flex-1 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
              Blogs
            </h1>
            <button onClick={() => setIsFormOpen(true)} className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md font-medium flex items-center justify-center">
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Blog
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" placeholder="Search blogs..." className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Blog
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Featured
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredBlogs.map(blog => <tr key={blog.id}>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded object-cover" src={blog.image} alt={blog.title} />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {blog.title}
                            </div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">
                              {blog.content.substring(0, 80)}...
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {blog.author}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {new Date(blog.date).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${blog.featured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {blog.featured ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={() => handleEdit(blog)} className="text-blue-600 hover:text-blue-900 mr-3">
                          <EditIcon className="h-5 w-5" />
                        </button>
                        <button onClick={() => handleDelete(blog.id)} className="text-red-600 hover:text-red-900">
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            {filteredBlogs.length === 0 && <div className="text-center py-6">
                <p className="text-gray-500">No blogs found</p>
              </div>}
          </div>
        </div>
      </div>
      {isFormOpen && <BlogForm blog={currentBlog} onClose={handleFormClose} />}
    </div>;
};
export default Blogs;