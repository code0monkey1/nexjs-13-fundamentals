'use client';

import { useEffect, useState } from 'react';

import PromptCard from '../PromptCard';

import axios from 'axios';
import { useDebounce } from 'use-debounce';

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);

  const [debouncedValue] = useDebounce(searchText, 500);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await axios.get('/api/prompt');

      if (response.status === 200) {
        setData(response.data);
        setFilteredData(response.data);
      } else {
        throw new Error('Prompts could not be fetched');
      }
    };

    fetchPrompts();
  }, []);

  useEffect(() => {
    setFilteredData(
      data?.filter(
        (d) =>
          d.prompt.toLowerCase().includes(debouncedValue.toLowerCase()) ||
          d.tag.toLowerCase() === debouncedValue.toLowerCase()
      )
    );
  }, [debouncedValue]);

  const handleSearchChange = ({ target }) => {
    // go through the data and display either tag or content or username

    setSearchText(target.value);
  };

  const handleTagClick = (tag) => {
    setSearchText(tag);
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
      <PromptCardList data={filteredData} handleTagClick={handleTagClick} />
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
