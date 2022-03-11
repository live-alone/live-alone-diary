import React from 'react';
import styled from 'styled-components';

const AreaUl = styled.ul``;

const AreaLi = styled.li`
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  border-top: solid 1px;
  cursor: pointer;
`;

interface AreaListProps {
  areaList: string[];
}

const AreaListWrapper = (props: AreaListProps) => {
  return (
    <>
      <AreaUl>
        {props.areaList
          ? props.areaList.map((area) => {
              return <AreaLi>{area}</AreaLi>;
            })
          : null}
      </AreaUl>
    </>
  );
};

export default AreaListWrapper;
