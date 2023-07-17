'use client';

import { useEffect, useState } from 'react';

import PromptCard from '../PromptCard';

import axios from 'axios';
import { useDebounce } from 'use-debounce';

const Feed = () => {
  const [searchText, setSearchText] = useState('');

  const [data, setData] = useState([]);

  const [debouncedValue] = useDebounce(searchText, 3000);

  let filteredData = data;

  useEffect(() => {
    filteredData = data?.filter((d) =>
      d.prompt.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [debouncedValue]);

  const handleSearchChange = ({ target }) => {
    // go through the data and display either tag or content or username

    setSearchText(target.value);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          placeholder="Search for a Tag or a UserName"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={filteredData} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((d) => (
        <PromptCard key={d._id} post={d} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};
