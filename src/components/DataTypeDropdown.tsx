import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowUp from '../img/up.svg';
import ArrowDown from '../img/down.svg';

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
  /* color: ${(dropdownActive) => (dropdownActive ? '#fff' : '#76B2EA')}; */
  cursor: pointer;
  user-select: none;
`;

const DropdownArrow = styled.img`
  width: 10px;
  height: 5px;
  margin-left: 8px;
  &:before {
    content: '';
    display: inline-block;
    border-top: 6px solid #333;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    margin-right: 8px;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  right: 0;
  left: auto;

  width: 300px;
  height: 168px;
  padding: 13px 68px;

  background: #242731;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.25), 0px 8px 48px rgba(0, 0, 0, 0.6), 0px 2px 4px rgba(36, 38, 53, 0.08), 0px 4px 12px rgba(36, 38, 53, 0.1), 0px 16px 24px rgba(55, 58, 83, 0.16);
  border-radius: 8px;

  z-index: 1;
  list-style: none;
`;

const DropdownItem = styled.li`
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #fff;
  cursor: pointer;

  &:not(last-child) {
    margin-bottom: 20px;
  }
`;

const DropdownChooseButton = styled.button<DropdownItemProps>`
  position: absolute;
  left: -25%;
  top: 50%;
  transform: translateY(-50%);

  display: block;
  width: 22px;
  height: 22px;
  border: 1.5px double ${props => (props.active ? '#242731' : 'transparent')};
  outline: 1.5px solid ${props => (props.active ? '#8941FF' : '#60677A')};
  border-radius: 50%;
  background-color: ${props => (props.active ? '#8941FF' : 'transparent')};;

  cursor: pointer;
  transition: background-color 0.3s;

  &:hover, &:active, &:focus {
    outline-color: #8941FF;
    border-color: #242731;
    background-color: #8941FF;
  }
`;

const options = ['Diagrams', 'Graph', 'Table', 'Paragraph'];

const DataTypeDropdown = () => {
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
              <DropdownChooseButton active={selectedOption === option} />
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default DataTypeDropdown;
