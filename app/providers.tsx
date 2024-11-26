"use client";

import { createContext, useReducer } from "react";

type ScentType = {
  library: any[];
  wishlist: any[];
  scentOfTheDay: any[];
};

export const ScentContext = createContext(null);
export const ScentReducerContext = createContext(null);

export function UserProvider({ children }) {
  const [scents, dispatch] = useReducer(scentReducer, initialScents);
  return (
    <ScentContext.Provider value={scents}>
      <ScentReducerContext.Provider value={dispatch}>
        {children}
      </ScentReducerContext.Provider>
    </ScentContext.Provider>
  );
}

const initialScents = {
  library: [],
  wishlist: [],
  scentOfTheDay: [],
};

const scentReducer = (scents: ScentType, action: any) => {
  switch (action.type) {
    case "library:add": {
      const newLibrary = [...scents.library, action.payload];
      return { ...scents, library: newLibrary };
    }
    case "library:remove": {
      const newLibrary = scents.library.filter(
        (scent) => scent.id !== action.payload.id
      );
      return { ...scents, library: newLibrary };
    }
    case "wishlist:add": {
      const newWishlist = [...scents.wishlist, action.payload];
      return { ...scents, wishlist: newWishlist };
    }
    case "wishlist:remove": {
      const newWishlist = scents.wishlist.filter(
        (scent) => scent.id !== action.payload.id
      );
      return { ...scents, wishlist: newWishlist };
    }
    case "scentOfTheDay:add": {
      const newScentOfTheDay = [...scents.scentOfTheDay, action.payload];
      return { ...scents, scentOfTheDay: newScentOfTheDay };
    }
    case "scentOfTheDay:remove": {
      const newScentOfTheDay = scents.scentOfTheDay.filter(
        (scent) => scent.id !== action.payload.id
      );
      return { ...scents, scentOfTheDay: newScentOfTheDay };
    }
  }
};
