import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export function DataProvider({ children }) {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // handle resize the screen to 1024
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // true = opensidebar; false = closesidebar
  const handleSidebar = () => {
    if (!isSidebar) setIsSidebar(true);
    if (isSidebar) setIsSidebar(false);
  };
  return (
    <DataContext.Provider
      value={{
        //Handle Sidebar
        isSidebar,
        setIsSidebar,
        handleSidebar,

        // Handle change icon for large screen
        isLargeScreen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
