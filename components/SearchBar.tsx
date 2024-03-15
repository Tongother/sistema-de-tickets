import { FC } from 'react';

interface SearchBarProps{
  search:string;
  setSearch: (search:string) => void;
}

const SearchBar:FC<SearchBarProps> = ({search, setSearch}) => {
  
    return (
        <div className="w-full flex justify-center">
            <input type="text" placeholder="Search" 
            className="w-[80%] h-[2.5em] border-2 border-transparent rounded-md p-[10px] 
            focus:outline-none border-gray-300 text-center"
            value={search} onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;