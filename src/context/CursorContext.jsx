import React, { createContext, useContext } from 'react';

// Lightweight, zero-overhead CursorContext to satisfy existing component signatures
// without forcing state re-renders across the whole DOM tree.
const CursorContext = createContext({
  cursorState: 'default',
  cursorText: '',
  setCursor: () => {},
  resetCursor: () => {}
});

export const CursorProvider = ({ children }) => {
  return (
    <CursorContext.Provider value={{ cursorState: 'default', cursorText: '', setCursor: () => {}, resetCursor: () => {} }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  return useContext(CursorContext);
};
