import React from "react";
import AppContent from "./Components/AppContent/AppContent";

import { DataProvider } from "./Context/DataContext";

export default function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}
