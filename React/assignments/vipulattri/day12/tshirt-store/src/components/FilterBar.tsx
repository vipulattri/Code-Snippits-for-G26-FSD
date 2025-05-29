import React from 'react';
import styled from '@emotion/styled';
import { FilterState } from '../types';
import { PRICE_RANGES, GENDER_OPTIONS } from '../constants/filters';

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 150px;
`;

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filterType: keyof FilterState, value: string) => void;
  colorOptions: string[];
  typeOptions: string[];
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  colorOptions,
  typeOptions
}) => {
  return (
    <Container>
      <FilterGroup>
        <Label>Gender</Label>
        <Select
          value={filters.gender}
          onChange={(e) => onFilterChange('gender', e.target.value)}
        >
          {GENDER_OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FilterGroup>

      <FilterGroup>
        <Label>Color</Label>
        <Select
          value={filters.color}
          onChange={(e) => onFilterChange('color', e.target.value)}
        >
          <option value="">All Colors</option>
          {colorOptions.map(color => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </Select>
      </FilterGroup>

      <FilterGroup>
        <Label>Type</Label>
        <Select
          value={filters.type}
          onChange={(e) => onFilterChange('type', e.target.value)}
        >
          <option value="">All Types</option>
          {typeOptions.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </FilterGroup>

      <FilterGroup>
        <Label>Price Range</Label>
        <Select
          value={filters.priceRange}
          onChange={(e) => onFilterChange('priceRange', e.target.value)}
        >
          {PRICE_RANGES.map(range => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </Select>
      </FilterGroup>
    </Container>
  );
}; 