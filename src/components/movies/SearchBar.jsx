const SearchBar = ({ setSearchInput, onSearch }) => {
  return (
    <div className="relative top-10 mb-10 text-center">
      <input
        type="text"
        placeholder="Search Movies"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        onClick={onSearch}
        className="bg-transparent hover:bg-secondary font-semibold hover:text-nav py-2 px-4 border border-secondary rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
