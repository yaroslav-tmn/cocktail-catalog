import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const useKeyboardsNavigation = (items, onSelectItem) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const getDrinkByName = useCallback(
    async (drinkId) => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
        );
        onSelectItem(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    [onSelectItem]
  );

  useEffect(() => {
    const selectionHandler = (event) => {
      if (event.key === 'ArrowDown') {
        setActiveIndex(activeIndex !== items.length - 1 ? activeIndex + 1 : 0);
      }

      if (event.key === 'ArrowUp') {
        setActiveIndex(activeIndex > 0 ? activeIndex - 1 : items.length - 1);
      }

      if (event.key === 'Enter') {
        getDrinkByName(items[activeIndex].idDrink);
      }
    };

    document.addEventListener('keydown', selectionHandler);
    return () => {
      document.removeEventListener('keydown', selectionHandler);
    };
  }, [items, getDrinkByName, activeIndex]);

  return { activeIndex, getDrinkByName };
};
