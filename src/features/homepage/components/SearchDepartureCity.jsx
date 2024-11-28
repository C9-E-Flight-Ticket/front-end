import { useState } from "react";
import SearchCityModal from "@/features/homepage/components/SearchCityModal";
import SearchCityModalContent from "@/features/homepage/components/SearchCityModalContent";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDepartureCity,
  removeSuggestion,
  clearSuggestion,
} from "@/services/homepageSlice";

const SearchDepartureCity = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { departureCity, suggestions } = useSelector((state) => state.homepage);

  const dispatch = useDispatch();

  const handleClearAll = () => dispatch(clearSuggestion());

  const handleRemoveSuggestion = (city) => {
    dispatch(removeSuggestion(city));
  };

  function handleMenuOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleSave(value) {
    dispatch(selectDepartureCity(value));
  }

  return (
    <SearchCityModal
      onOpen={handleMenuOpen}
      isOpen={isOpen}
      value={departureCity}
    >
      <SearchCityModalContent
        onOpen={handleMenuOpen}
        isOpen={isOpen}
        onSave={handleSave}
        suggestions={suggestions}
        onClearAll={handleClearAll}
        onRemoveSuggestion={handleRemoveSuggestion}
      />
    </SearchCityModal>
  );
};

export default SearchDepartureCity;
