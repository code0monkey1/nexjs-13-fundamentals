import React from 'react';
import PromptCard from '../PromptCard';

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-fu ll">
      <h1 className="head_text text-left">
        {name && (
          <span className="blue_gradient">
            {name}
            {name !== 'Your' ? "'s" : ''} Profile
          </span>
        )}
      </h1>
      {name && <p className="desc text-left">{desc}</p>}
      <div className="mt-16 prompt_layout">
        {data.map((d) => (
          <PromptCard
            key={d._id}
            post={d}
            handleEdit={() => handleEdit && handleEdit(d)}
            handleDelete={() => handleDelete && handleDelete(d)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
