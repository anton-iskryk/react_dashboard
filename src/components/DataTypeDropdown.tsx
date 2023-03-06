// import React, { useState } from 'react';
// import styled from 'styled-components';

// const DropdownContainer = styled.div`
//   position: relative;
//   display: inline-block;
// `;

// const DropdownHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   font-weight: 400;
//   font-size: 13px;
//   line-height: 20px;
//   color: ${(props) => (props.isOpen ? '#76B2EA' : '#fff')};
//   cursor: pointer;
//   user-select: none;
//   display: flex;
//   align-items: center;
//   padding: 10px;
//   border: 1px solid #ccc;
//   cursor: pointer;
// `;

// const DropdownTitle = styled.div`
//   font-weight: 400;
//   font-size: 13px;
//   line-height: 20px;
//   color: ${(props) => (props.isOpen ? '#76B2EA' : '#fff')};
//   cursor: pointer;
// `;

// const DropdownArrow = styled.span`
//   margin-left: auto;
//   border: solid ${(props) => (props.isOpen ? '#76B2EA' : '#fff')};
//   border-width: 0 2px 2px 0;
//   display: inline-block;
//   padding: 3px;
//   transform: ${props => (props.isOpen ? 'rotate(-135deg)' : 'rotate(45deg)')};
//   transition: transform 0.3s;
// `;

// const DropdownList = styled.ul`
//   position: absolute;
//   right: 0;
//   left: auto;
//   width: 300px;
//   height: 168px;
//   background: #242731;
//   color: #fff;
//   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.25), 0px 8px 48px rgba(0, 0, 0, 0.6), 0px 2px 4px rgba(36, 38, 53, 0.08), 0px 4px 12px rgba(36, 38, 53, 0.1), 0px 16px 24px rgba(55, 58, 83, 0.16);
//   border-radius: 8px;
//   z-index: 1;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const DropdownItem = styled.li`
//   padding: 10px;
//   cursor: pointer;
//   user-select: none;

//   input[type='radio'] {
//     margin-right: 17px;
//   }
// `;

// const options = [
//   { value: 'Diagrams', label: 'Diagrams' },
//   { value: 'Graph', label: 'Graph' },
//   { value: 'Table', label: 'Table' },
//   { value: 'Paragraph', label: 'Paragraph' },
// ];

// const DataTypeDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('Graph');

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//   };

//   return (
//     <DropdownContainer>
//       <DropdownHeader onClick={toggleDropdown}>
//         <DropdownTitle>
//           {selectedOption}
//         </DropdownTitle>
//         <DropdownArrow isOpen={isOpen} />
//       </DropdownHeader>

//       {isOpen && (
//         <DropdownList>
//           {options.map(option => (
//             <DropdownItem key={option.value} onClick={() => handleOptionSelect(option)}>
//               <input type="radio" name="option" checked={selectedOption?.value === option.value} readOnly />
//               {option.label}
//             </DropdownItem>
//           ))}
//         </DropdownList>
//       )}
//     </DropdownContainer>
//   );
// };

import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowUp from '../img/up.svg';
import ArrowDown from '../img/down.svg';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: ${(isOpen) => (isOpen ? '#fff' : '#76B2EA')};
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

  &::before {
    position: absolute;
    /* text-align: center; */
    left: -25%;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    display: block;
    width: 22px;
    height: 22px;
    border: 1px solid #60677A;
    border-radius: 50%;
  }
`;

// const DropdownInput = styled.input`
//   margin-right: 17px;
//   cursor: pointer;
// `;

const options = ['Diagrams', 'Graph', 'Table', 'Paragraph'];

const DataTypeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[1]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <DropdownArrow src={isOpen ? ArrowUp : ArrowDown} />
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option}
              // selected={option === selectedOption}
              onClick={() => handleOptionClick(option)}
            >
              {/* <DropdownInput type="radio" name="option" checked={selectedOption === option} readOnly /> */}
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default DataTypeDropdown;

/* import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowUp from '../img/up.svg';
import ArrowDown from '../img/down.svg';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: ${(isOpen) => (isOpen ? 'green' : 'red')};
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
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  z-index: 1;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const DropdownItem = styled.li`
  padding: 12px 24px;
  font-size: 16px;
  color: ${(selected) => (selected ? '#fff' : '#333')};
  background-color: ${(selected) => (selected ? '#007bff' : '#fff')};
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const options = ['Option 1', 'Option 2', 'Option 3'];

const DataTypeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <DropdownArrow src={isOpen ? ArrowUp : ArrowDown} />
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option}
              selected={option === selectedOption}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default DataTypeDropdown; */