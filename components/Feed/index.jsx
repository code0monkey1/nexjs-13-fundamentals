'use client';

import { useEffect, useState } from 'react';

import PromptCard from '../PromptCard';

import axios from 'axios';

const Feed = () => {
  const [searchText, setSearchText] = useState('');

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await axios.get('/api/prompt');

      if (response.status === 200) {
        setData(response.data);
      } else {
        throw new Error('Prompts could not be fetched');
      }
    };

    fetchPrompts();
  }, []);

  const handleSearchChange = ({ target }) => {
    // go through the data and display either tag or content or username
    clearTimeout(value);

    let value = setTimeout(() => {
      setSearchText(target.value);
    }, 3000);
  };

  const filteredData = data?.filter((d) =>
    d.prompt.toLowerCase().includes(searchText.toLowerCase())
  );

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
