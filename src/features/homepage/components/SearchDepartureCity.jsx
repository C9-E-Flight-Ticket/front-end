import { useState } from "react";
import SearchCityModal from "@/features/homepage/components/SearchCityModal";
import SearchCityModalContent from "@/features/homepage/components/SearchCityModalContent";
import { Button } from "@material-tailwind/react";

const SearchDepartureCity = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("Jakarta (JKTA)");

  const [suggestions, setSuggestions] = useState([
    "Jakarta",
    "Bandung",
    "Surabaya",
  ]);

  const handleClearAll = () => setSuggestions([]);

  const handleRemoveSuggestion = (city) => {
    setSuggestions((prev) => prev.filter((item) => item !== city));
  };

  function handleMenuOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleSave(value) {
    setValue(value);

    if (suggestions.includes(value)) {
      return setSuggestions((prevArr) => [
        value,
        ...prevArr.filter((city) => city !== value),
      ]);
    }
    setSuggestions((prevArr) => [value, ...prevArr]);
  }

  return (
    <>
      <SearchCityModal onOpen={handleMenuOpen} isOpen={isOpen} value={value}>
        <SearchCityModalContent
          onOpen={handleMenuOpen}
          isOpen={isOpen}
          onSave={handleSave}
          suggestions={suggestions}
          onClearAll={handleClearAll}
          onRemoveSuggestion={handleRemoveSuggestion}
        />
      </SearchCityModal>
    </>
  );
};

export default SearchDepartureCity;
