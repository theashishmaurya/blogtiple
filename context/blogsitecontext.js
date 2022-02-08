import React, { useState, createContext, useEffect } from "react";

export const MarkdownContext = createContext(false);

export const ShowMarkdownProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <MarkdownContext.Provider value={[show, setShow]}>
      {children}
    </MarkdownContext.Provider>
  );
};
