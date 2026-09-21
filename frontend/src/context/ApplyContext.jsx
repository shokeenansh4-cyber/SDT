import { createContext, useContext, useState } from "react";

const ApplyContext = createContext(null);

export const ApplyProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <ApplyContext.Provider
      value={{ open, openApply: () => setOpen(true), closeApply: () => setOpen(false) }}
    >
      {children}
    </ApplyContext.Provider>
  );
};

export const useApply = () => useContext(ApplyContext);
