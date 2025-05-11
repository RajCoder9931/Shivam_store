import React, { useEffect, useState } from 'react';
import { XIcon } from 'lucide-react';
interface BlogFormProps {
  blog?: any;
  onClose: () => void;
}
const BlogForm: React.FC<BlogFormProps> = ({
  blog,
  onClose
}) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    author: 'Admin',
    date: new Date().toISOString().split('T')[0],
    featured: false
  });
  const isEdit = !!blog;
  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        content: blog.content,
        image: blog.image,
        author: blog.author,
        date: new Date(blog.date).toISOString().split('T')[0],
        featured: blog.featured
      });
    }
  }, [blog]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value,
      type
    } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be an API call
    console.log('Form submitted:', formData);
    // Show success message
    alert(`Blog ${isEdit ? 'updated' : 'created'} successfully!`);
    // Close the form
    onClose();
  };
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            {isEdit ? 'Edit Blog' : 'Add Blog'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Blog Title
              </label>
              <input type="text" id="title" name="title" required className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500" value={formData.title} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Content
              </label>
              <textarea id="content" name="content" rows={8} required className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500" value={formData.content} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input type="url" id="image" name="image" required className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500" value={formData.image} onChange={handleChange} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                  Author
                </label>
                <input type="text" id="author" name="author" required className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500" value={formData.author} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input type="date" id="date" name="date" required className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500" value={formData.date} onChange={handleChange} />
              </div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="featured" name="featured" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" checked={formData.featured} onChange={handleChange} />
              <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
                Featured Blog
              </label>
            </div>
            {formData.image && <div>
                <p className="block text-sm font-medium text-gray-700 mb-1">
                  Image Preview
                </p>
                <img src={formData.image} alt="Blog preview" className="h-40 w-auto object-contain border border-gray-300 rounded-md" />
              </div>}
          </div>
          <div className="mt-6 flex items-center justify-end">
            <button type="button" onClick={onClose} className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mr-3">
              Cancel
            </button>
            <button type="submit" className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              {isEdit ? 'Update Blog' : 'Add Blog'}
            </button>
          </div>
        </form>
      </div>
    </div>;
};
export default BlogForm;