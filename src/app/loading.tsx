

const loading = () => {
    return (
        <div className="min-h-screen  max-w-[1500px] mx-auto bg-gray-100 dark:bg-gray-800">
        {/* Header */}
        <header className="bg-white dark:bg-gray-700/30 p-4 flex justify-between items-center w-full">
         
          <nav className="space-x-4 flex">
            <div className="h-4 w-28 bg-gray-100 dark:bg-gray-800 rounded"></div> {/* Nav Item Placeholder */}
       
          </nav>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 bg-gray-100 dark:bg-gray-800 rounded-full"></div> {/* Notification Icon Placeholder */}
            <div className="h-8 w-8 bg-gray-100 dark:bg-gray-800 rounded-full"></div> {/* User Avatar Placeholder */}
          </div>
        </header>
  
        <div className="flex mt-4 w-full">
          {/* Sidebar */}
          <aside className="w-1/5 bg-white dark:bg-gray-700/30 h-screen  hidden md:block">
            
          </aside>
  
          {/* Main Content */}
          <main className="w-full bg-white dark:bg-gray-700/30 p-4">
            {/* Create Post Section */}
  
            {/* Post Section */}
            <div className="bg-white dark:bg-gray-700/30 h-screen animate-pulse rounded-lg p-4 mb-4 w-full">
           
  
              <div className="mt-2">
                <div className="h-4 w-full bg-gray-100 dark:bg-gray-800 rounded"></div> {/* Content Placeholder */}
              </div>
  
              <div className="mt-4 ">
                <div className="h-screen w-full bg-gray-100 dark:bg-gray-800 rounded"></div> {/* Image Placeholder */}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
};

export default loading;