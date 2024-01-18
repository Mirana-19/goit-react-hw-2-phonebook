import React from 'react';
import { Label } from './Filter.styled';

export const Filter = ({ onInputChange, filter }) => {
  return (
    <Label>
      Find contacts by name
      <input
        value={filter}
        onChange={e => onInputChange(e)}
        type="text"
        name="filter"
      />
    </Label>
  );
};
