// ... keep existing imports ...
const Dashboard = () => {
  const {
    user
  } = useAuth();
  return <div className="bg-gray-100 min-h-screen w-full">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 ml-64 p-6 md:p-8"> {/* Added ml-64 for sidebar width */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, {user?.name}
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your store today.
            </p>
          </div>
          {/* Rest of the dashboard content remains the same */}
          {/* ... existing code ... */}
        </div>
      </div>
    </div>;
};
export default Dashboard;