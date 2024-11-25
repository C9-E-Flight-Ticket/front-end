import { forwardRef, useState } from "react";
import { Input, IconButton, Button } from "@material-tailwind/react";

const SearchCityModalContent = forwardRef(function SearchCityModalContent(
  { onOpen, onSave, onClearAll, onRemoveSuggestion, suggestions },
  ref
) {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="w-full mx-auto mt-5 p-4 bg-white rounded-lg">
        <div className="flex items-center space-x-2">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            label="Masukkan Kota atau Negara"
            color="deep-purple"
            className="flex-grow !text-black font-semibold"
          />
          <IconButton
            onClick={() => {
              setSearch("");
              onOpen();
            }}
            size="sm"
            variant="outlined"
            color="red"
            className="rounded-full"
          >
            ✖
          </IconButton>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-700 font-semibold">Pencarian terkini</h3>
            <button
              onClick={onClearAll}
              className="text-red-500 text-sm font-medium hover:underline"
            >
              Hapus
            </button>
          </div>

          {suggestions.length > 0 ? (
            <ul>
              {suggestions.map((city, index) => (
                <div key={index}>
                  <li
                    className="flex justify-between items-center p-2 hover:cursor-pointer hover:bg-gray-100"
                    onClick={() => setSearch(city)}
                  >
                    <span className="text-gray-800">{city}</span>
                    <button
                      onClick={() => onRemoveSuggestion(city)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      ✖
                    </button>
                  </li>
                  <hr className="border-t-borderGrey outline-none mb-2" />
                </div>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">
              Tidak ada pencarian terkini.
            </p>
          )}
        </div>
      </div>
      <div className="my-3 outline-none mx-4 flex justify-end">
        <Button
          variant="filled"
          color="deep-purple"
          className="normal-case bg-primaryPurple disabled:!bg-[#3e1f5c]"
          disabled={!search}
          onClick={() => {
            onSave(search);
            onOpen();
          }}
        >
          Simpan
        </Button>
      </div>
    </>
  );
});

export default SearchCityModalContent;
