import React from 'react';

export const Filter = ({ onInputChange, filter }) => {
  return (
    <label>
      Find contacts by name
      <input
        value={filter}
        onChange={e => onInputChange(e)}
        type="text"
        name="filter"
      />
    </label>
  );
};
