import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowUp from '../img/up.svg';
import ArrowDown from '../img/down.svg';
import Tick from '../img/green-tick.svg';

interface DropdownItemProps {
  active: boolean;
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownTitle = styled.div<DropdownItemProps>`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: ${props => (props.active ? '#76B2EA' : '#fff')};
  
  cursor: pointer;
  user-select: none;
`;

const DropdownArrow = styled.img`
  width: 10px;
  height: 10px;
  margin-left: 8px;
`;

const DropdownList = styled.ul`
  position: absolute;
  right: 0;
  left: auto;

  width: 237px;
  height: 236px;
  padding: 8px;
  margin: 6px 0 0;

  background: #242731;
  box-shadow:
    0px 4px 12px rgba(0, 0, 0, 0.4),
    0px 2px 4px rgba(0, 0, 0, 0.25),
    0px 8px 48px rgba(0, 0, 0, 0.6);
  border-radius: 8px;

  z-index: 1;
  list-style: none;
`;

const DropdownItem = styled.li<DropdownItemProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;

  color: ${(props) => props.active ? '#fff' : '#a2a4a8'};
  cursor: pointer;

  &:hover {
    background-color: #31343D;
    color: #fff;
  }
`;

const DropdownChooseTick = styled.img<DropdownItemProps>`
  display: ${(props) => props.active ? 'block' : 'none'};
  width: 12px;
  height: 12px;

  cursor: pointer;
`;

const options = ['Charlottetown', 'Halifax', 'Naperville', 'Vernon', 'Montreal'];

const LocationDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(options[1]);
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleItemClick = (option: string) => {
    setSelectedOption(option);
    setDropdownActive(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setDropdownActive(!dropdownActive)}>
        <DropdownTitle active={dropdownActive} onClick={() => setDropdownActive(!dropdownActive)}>
          {selectedOption}
          <DropdownArrow src={dropdownActive ? ArrowUp : ArrowDown} active={dropdownActive} />
        </DropdownTitle>
      </DropdownHeader>
      {dropdownActive && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option}
              active={selectedOption === option}
              onClick={() => handleItemClick(option)}
            >
              {option}
              <DropdownChooseTick src={Tick} active={selectedOption === option} />
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default LocationDropdown;
