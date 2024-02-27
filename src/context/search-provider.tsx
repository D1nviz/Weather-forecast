import React, { useState, createContext, useContext } from 'react';

type SearchContextType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

type SearchProviderProps = {
  children: React.ReactNode;
};

export const SearchContext = createContext<SearchContextType | null>(null);

export function SearchProvider({ children }: SearchProviderProps) {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);

  if (context === null) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }

  return context;
}