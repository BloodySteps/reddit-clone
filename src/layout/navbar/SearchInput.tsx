import { Select } from '@mantine/core';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchInput: React.FC = () => {
  return (
    <Select
      placeholder="Search Reddit"
      style={{ width: '100%', maxWidth: '500px' }}
      icon={<FiSearch />}
      rightSection=" "
      searchable
      nothingFound="Search Result not found"
      data={[
        {
          value: 'rick',
          label:
            'Nuclear power plants are struggling to stay cool - Climate change is reducing output and raising safety concerns at nuclear facilities.',
          group: 'TRENDING TODAY',
        },
      ]}
    />
  );
};
export default SearchInput;
