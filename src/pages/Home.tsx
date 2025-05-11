import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, NewspaperIcon } from 'lucide-react';
import { products, blogs } from '../utils/mockData';
import ProductCard from '../components/ProductCard';
import BlogCard from '../components/BlogCard';
const Home = () => {
  const featuredProducts = products.filter(product => product.featured);
  const featuredBlogs = blogs.filter(blog => blog.featured);
  return <div className="bg-gray-50 w-full">
      {/* Hero Section */}
      <section className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Shivam General Store
            </h1>
            <p className="text-lg mb-6">
              Your one-stop shop for all daily needs. We offer quality products
              at affordable prices.
            </p>
            <div className="flex space-x-4">
              <Link to="/shop" className="bg-white text-green-700 hover:bg-gray-100 px-6 py-2 rounded-md font-medium flex items-center">
                <ShoppingBagIcon className="h-5 w-5 mr-2" />
                Shop Now
              </Link>
              <Link to="/blogs" className="border border-white text-white hover:bg-green-600 px-6 py-2 rounded-md font-medium flex items-center">
                <NewspaperIcon className="h-5 w-5 mr-2" />
                Read Blogs
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Grocery Store" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium quality products for
              your daily needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => <ProductCard key={product.id} {...product} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/shop" className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md font-medium inline-flex items-center">
              <ShoppingBagIcon className="h-5 w-5 mr-2" />
              View All Products
            </Link>
          </div>
        </div>
      </section>
      {/* Featured Blogs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest From Our Blog
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest articles on product tips, healthy
              living, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBlogs.map(blog => <BlogCard key={blog.id} {...blog} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/blogs" className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md font-medium inline-flex items-center">
              <NewspaperIcon className="h-5 w-5 mr-2" />
              Read All Blogs
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-xl">
                  R
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Rahul Sharma</h4>
                  <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
                </div>
              </div>
              <p className="text-gray-600">
                "Great quality products and excellent customer service. I've
                been shopping here for years!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-xl">
                  P
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Priya Patel</h4>
                  <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
                </div>
              </div>
              <p className="text-gray-600">
                "I love the organic range of products. Fresh and healthy options
                at reasonable prices."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-xl">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Amit Singh</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(4)}
                    {'☆'}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Very convenient WhatsApp ordering system. Makes shopping so
                much easier!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;