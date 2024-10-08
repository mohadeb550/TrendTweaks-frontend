

const loading = () => {
    return (
        <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center w-full">
         
          <nav className="space-x-4 flex">
            <div className="h-4 w-20 bg-gray-100 rounded"></div> {/* Nav Item Placeholder */}
            <div className="h-4 w-20 bg-gray-100 rounded"></div>
            <div className="h-4 w-20 bg-gray-100 rounded"></div>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 bg-gray-100 rounded-full"></div> {/* Notification Icon Placeholder */}
            <div className="h-8 w-8 bg-gray-100 rounded-full"></div> {/* User Avatar Placeholder */}
          </div>
        </header>
  
        <div className="flex mt-4 w-full">
          {/* Sidebar */}
          <aside className="w-1/5 bg-white h-screen shadow hidden md:block">
            <nav className="p-4">
              <ul className="space-y-8">
                <li className="h-9 w-24 bg-gray-100 rounded"></li> {/* Sidebar Item Placeholder */}
                <li className="h-9 w-24 bg-gray-100 rounded"></li>
                <li className="h-9 w-24 bg-gray-100 rounded"></li>
                <li className="h-9 w-24 bg-gray-100 rounded"></li>
                <li className="h-9 w-24 bg-gray-100 rounded"></li>
                <li className="h-9 w-24 bg-gray-100 rounded"></li>
              </ul>
            </nav>
          </aside>
  
          {/* Main Content */}
          <main className="w-full bg-white p-4">
            {/* Create Post Section */}
  
            {/* Post Section */}
            <div className="bg-white h-screen shadow rounded-lg p-4 mb-4 w-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-gray-100 rounded-full"></div> {/* User Avatar Placeholder */}
                  <div>
                    <div className="h-4 w-24 bg-gray-100 rounded"></div> {/* Username Placeholder */}
                    <div className="h-4 w-16 bg-gray-100 rounded mt-1"></div> {/* Timestamp Placeholder */}
                  </div>
                </div>
                <div className="h-4 w-4 bg-gray-100 rounded-full"></div> {/* Options Placeholder */}
              </div>
  
              <div className="mt-2">
                <div className="h-4 w-32 bg-gray-100 rounded mb-2"></div> {/* Title Placeholder */}
                <div className="h-4 w-full bg-gray-100 rounded"></div> {/* Content Placeholder */}
              </div>
  
              <div className="mt-4 ">
                <div className="h-screen w-full bg-gray-100 rounded"></div> {/* Image Placeholder */}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
};

export default loading;