import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AreaListWrapper from '@presentational/landing/AreaList';
import axios from 'axios';

const SearchBox = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 15px;
`;

const SelectArea = styled.article`
  display: flex;
  justify-content: center;
`;

const SelectAreaItem = styled.article`
  width: 300px;
  height: 600px;
  margin: 0 15px;
  border: solid 1px;
  background: #fff;
`;

interface SelectAreaProps {}

const SelectAreaWrapper = (props: SelectAreaProps) => {
  interface Area {
    town: string[];
    district: string[];
  }
  const [area, setArea] = useState<Area>({
    town: [],
    district: [],
  });
  interface SearchText {
    townSearch: string;
    districtSearch: string;
  }
  const [searchText, setSearchText] = useState<SearchText>({
    townSearch: '',
    districtSearch: '',
  });

  const getArea = async () => {
    const town = await axios.get(`http://localhost:4000/area?modelName=town`);
    const district = await axios.get(
      `http://localhost:4000/area?modelName=district`,
    );
    return { town: town.data, district: district.data };
  };
  useEffect(() => {
    getArea().then((res) => {
      setArea(res);
    });
  }, []);

  return (
    <>
      <SelectArea>
        <SelectAreaItem>서울</SelectAreaItem>
        <SelectAreaItem>
          <SearchBox
            value={searchText.districtSearch}
            onChange={(e) => {
              setSearchText({
                ...searchText,
                districtSearch: e.target.value.replace(/[^가-힣|^ㄱ-ㅎ]/, ''),
              });
            }}
          />
          <AreaListWrapper
            areaList={area.district.filter(
              (t) => t.indexOf(searchText.districtSearch) + 1,
            )}
          />
        </SelectAreaItem>
        <SelectAreaItem>
          <SearchBox
            value={searchText.townSearch}
            onChange={(e) =>
              setSearchText({
                ...searchText,
                districtSearch: e.target.value.replace(/[^가-힣|^ㄱ-ㅎ]/, ''),
              })
            }
          />
          <AreaListWrapper
            areaList={area.town.filter(
              (t) => t.indexOf(searchText.townSearch) + 1,
            )}
          />
        </SelectAreaItem>
      </SelectArea>
    </>
  );
};

export default SelectAreaWrapper;
