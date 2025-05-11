// ... keep existing imports ...
const Blogs = () => {
  // ... existing state and handlers ...
  return <div className="bg-gray-100 min-h-screen w-full">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 ml-64 p-6 md:p-8"> {/* Added ml-64 for sidebar width */}
          {/* Rest of the blogs page content remains the same */}
          {/* ... existing code ... */}
        </div>
      </div>
      {isFormOpen && <BlogForm blog={currentBlog} onClose={handleFormClose} />}
    </div>;
};
export default Blogs;