const SearchBar = ({ setSearchInput, onSearch }) => {
  return (
    <div className="flex right-4 md:right-1/4 items-center top-14 fixed z-20 w-3/4 md:w-2/4">
      <form className="relative pl-6  bg-primary w-full  rounded-2xl opacity-90 flex justify-between">
        <input
          className="bg-transparent bg-none w-2/4 md:w-5/6 focus:outline-none text-bg"
          type="text"
          placeholder="Search Movies"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            onSearch();
          }}
          className="bg-secondary hover:bg-secondary font-semibold hover:text-nav py-2 px-4 border border-secondary rounded w-max"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
