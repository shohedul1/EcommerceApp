// 'use client';

// import { IoSearchOutline } from "react-icons/io5";


// const Search = () => {

//     return (
//         <div className='flex items-center gap-2'>
//             <div className={`overflow-hidden transition-all duration-500 ${showSearch ? 'w-52 opacity-100' : 'w-0 opacity-0'}`}>
//                 <input
//                     type="text"
//                     placeholder='Search Food...'
//                     className='w-full border p-2 rounded-md outline-none'
//                 />
//             </div>
//             <IoSearchOutline
//                 size={24}
//                 className="cursor-pointer text-gray-600 hover:text-black transition-colors"
//                 onClick={() => setShowSearch(!showSearch)}
//             />
//         </div>
//     )
// }

// export default Search

"use client";
import { IoSearchOutline } from "react-icons/io5";

interface SearchProps {
  showSearch: boolean;
  setShowSearch: (value: boolean) => void;
}

const Search: React.FC<SearchProps> = ({ showSearch, setShowSearch }) => {
  return (
    <div className='flex items-center gap-2'>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          showSearch ? "w-52 opacity-100" : "w-0 opacity-0"
        }`}
      >
        <input
          type="text"
          placeholder="Search Food..."
          className="w-full border dark:border-white border-black p-2 rounded-md outline-none"
        />
      </div>
      <IoSearchOutline
        size={24}
        className="cursor-pointer text-black font-bold dark:text-white transition-colors"
        onClick={() => setShowSearch(!showSearch)}
      />
    </div>
  );
};

export default Search;
