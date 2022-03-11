import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AreaListWrapper from '@presentational/landing/AreaList';
import axios from 'axios';

const SearchBox = styled.input`
  width: 300px;
  height: 50px;
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
  overflow: hidden;
`;

interface SelectAreaProps {}

const SelectAreaWrapper = (props: SelectAreaProps) => {
  interface Area {
    town: string[];
    district: string[];
  }
  const [area, setArea] = useState<Area>({
    town: undefined,
    district: undefined,
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
  });
  return (
    <>
      <SelectArea>
        <SelectAreaItem>서울</SelectAreaItem>
        <SelectAreaItem>
          <SearchBox></SearchBox>
          <AreaListWrapper areaList={area.district} />
        </SelectAreaItem>
        <SelectAreaItem>
          <SearchBox></SearchBox>
          <AreaListWrapper areaList={area.town} />
        </SelectAreaItem>
      </SelectArea>
    </>
  );
};

export default SelectAreaWrapper;
