import {createContext,useContext} from 'react'

interface HomeContextProps {
  betValue: number;
  setBetvalue: React.Dispatch<React.SetStateAction<number>>;
  multiplier: number;
  setMultiplier: React.Dispatch<React.SetStateAction<number>>;
  walletAmount: number;
  setWalletAmount: React.Dispatch<React.SetStateAction<number>>;
  betOn: boolean | undefined;
  setBetOn: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  mines: number;
  setMines: React.Dispatch<React.SetStateAction<number>>;
  cashOut: () => void;
  
}

 export const HomeContext = createContext<HomeContextProps | null>(null);
export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used inside HomeContext.Provider");
  }
  return context;
};