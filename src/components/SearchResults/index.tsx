import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@ant-design/react-native';
import { RootState } from '@redux/store';

interface SearchResultsProps {
  onPlaceClick: (place: any) => void;
}

const getColor = (index: number): string => {
  return index % 2 === 0 ? '#D3D3D3' : '#E5E4E2';
};

const SearchResults: React.FC<SearchResultsProps> = ({ onPlaceClick }) => {
  const places = useSelector((state: RootState) => state.places.places);

  const handlePlaceClick = (place: any) => {
    onPlaceClick(place);
  };

  return (
    <List>
      {places.map((place, index) => (
        <List.Item
          key={index}
          style={{ backgroundColor: getColor(index) }}
          onPress={() => handlePlaceClick(place)}
        >
          {place.description}
        </List.Item>
      ))}
    </List>
  );
};

export default SearchResults;
