import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorState, setCursorState] = useState('default');
  const [cursorText, setCursorText] = useState('');

  const setCursor = (state, text = '') => {
    setCursorState(state);
    setCursorText(text);
  };

  const resetCursor = () => {
    setCursorState('default');
    setCursorText('');
  };

  return (
    <CursorContext.Provider value={{ cursorState, cursorText, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
