import { useState } from "react";
import SearchCityModal from "@/features/homepage/components/SearchCityModal";
import SearchCityModalContent from "@/features/homepage/components/SearchCityModalContent";
import { useDispatch, useSelector } from "react-redux";
import {
  selectReturnCity,
  removeSuggestion,
  clearSuggestion,
} from "@/services/homepageSlice";

const SearchReturnCity = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { returnCity, suggestions } = useSelector((state) => state.homepage);

  const dispatch = useDispatch();

  const handleClearAll = () => dispatch(clearSuggestion());

  const handleRemoveSuggestion = (city) => {
    dispatch(removeSuggestion(city));
  };

  function handleMenuOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleSave(value) {
    dispatch(selectReturnCity(value));
  }

  return (
    <SearchCityModal onOpen={handleMenuOpen} isOpen={isOpen} value={returnCity}>
      <SearchCityModalContent
        onOpen={handleMenuOpen}
        isOpen={isOpen}
        onSave={handleSave}
        suggestions={suggestions}
        onClearAll={handleClearAll}
        onRemoveSuggestion={handleRemoveSuggestion}
        storedSearch={returnCity}
      />
    </SearchCityModal>
  );
};

export default SearchReturnCity;
