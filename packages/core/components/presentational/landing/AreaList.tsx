import React, { useState } from 'react';
import styled from 'styled-components';

const AreaUl = styled.ul`
  height: 550px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface AreaLiProps {
  selected: boolean;
}

const AreaLi = styled.li<AreaLiProps>`
  background: ${(props) => (props.selected ? '#d1d1d1' : 'none')};
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
  const [select, setSelect] = useState({});
  return (
    <>
      <AreaUl>
        {props.areaList
          ? props.areaList.map((area, idx) => {
              return (
                <AreaLi
                  key={idx}
                  onClick={() => {
                    if (select[idx]) {
                      setSelect(() => ({
                        [idx]: !select[idx],
                      }));
                    } else {
                      console.log(select, idx);
                      setSelect(() => ({
                        [idx]: true,
                      }));
                    }
                  }}
                  selected={select[idx]}
                >
                  {area}
                </AreaLi>
              );
            })
          : null}
      </AreaUl>
    </>
  );
};

export default AreaListWrapper;
