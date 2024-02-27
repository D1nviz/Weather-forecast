import React, { useState, createContext, useContext, useEffect } from 'react';
import { exampleCities } from 'src/configs/cities';
import type { TripDetailsT } from 'src/types';

type TripDetailsContextType = {
  tripDetails: TripDetailsT[] | null;
  setTripDetails: React.Dispatch<React.SetStateAction<TripDetailsT[] | null>>;
};

type TripDetailsProviderProps = {
  children: React.ReactNode;
};

export const TripDetailsContext = createContext<TripDetailsContextType | null>(null);

export default function TripDetailsProvider({ children }: TripDetailsProviderProps) {
  const initialTripDetails = localStorage.getItem('tripDetails')
    ? JSON.parse(localStorage.getItem('tripDetails') as string)
    : exampleCities;

  const [tripDetails, setTripDetails] = useState<TripDetailsT[] | null>(initialTripDetails);

  useEffect(() => {
    localStorage.setItem('tripDetails', JSON.stringify(tripDetails));
  }, [tripDetails]);

  return (
    <TripDetailsContext.Provider value={{ tripDetails, setTripDetails }}>
      {children}
    </TripDetailsContext.Provider>
  );
}

export function useTripDetailsContext() {
  const context = useContext(TripDetailsContext);

  if (context === null) {
    throw new Error('useTripDetailsContext must be used within a TripDetailsProvider');
  }

  return context;
}