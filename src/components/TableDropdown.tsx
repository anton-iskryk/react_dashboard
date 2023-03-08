import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ArrowUp from '../img/up.svg';
import ArrowDown from '../img/down.svg';
import Settings from '../img/settings.svg';
import SettingsActive from '../img/settings-active.svg';
import Switch from 'react-switch';

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  items: DropdownItem[];
}

interface DropdownItemProps {
  active: boolean;
}

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownTitle = styled.div<DropdownItemProps>`
display: flex;
align-items: center;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: ${props => (props.active ? '#76B2EA' : '#fff')};
  
  cursor: pointer;
  user-select: none;
`;

const DropdownSettings = styled.img<DropdownItemProps>`
  width: 24px;
  height: 24px;
  margin-right: 9px;
`;

const DropdownArrow = styled.img<DropdownItemProps>`
  width: 10px;
  height: 10px;
  margin-left: 8px;
`;

const DropdownList = styled.ul`
  position: absolute;
  right: 0;
  left: auto;

  width: 300px;
  max-height: 288px;
  padding: 14px 28px;
  margin: 6px 0 0;

  color: #fff;
  background: #242731;
  box-shadow:
    0px 4px 12px rgba(0, 0, 0, 0.4),
    0px 2px 4px rgba(0, 0, 0, 0.25),
    0px 8px 48px rgba(0, 0, 0, 0.6),
    0px 2px 4px rgba(36, 38, 53, 0.08),
    0px 4px 12px rgba(36, 38, 53, 0.1),
    0px 16px 24px rgba(55, 58, 83, 0.16)
  ;
  border-radius: 8px;

  z-index: 1;
  list-style: none;
  overflow-y: auto;
`;

const DropdownItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #fff;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const DropdownItemLabel = styled.label`
  /* margin-right: 10px; */
`;

const TableDropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (value: string) => {
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter(item => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        <DropdownTitle active={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <DropdownSettings src={isOpen ? SettingsActive : Settings} active={isOpen} />

          {'Table Settings'}

          <DropdownArrow src={isOpen ? ArrowUp : ArrowDown} active={isOpen} />
        </DropdownTitle>
      </DropdownHeader>

      {isOpen && (
        <DropdownList>
          {items.map(item => (
            <DropdownItemWrapper key={item.value}>
              <DropdownItemLabel>{item.label}</DropdownItemLabel>
              <Switch
                checked={selectedItems.includes(item.value)}
                onChange={() => handleItemClick(item.value)}
                offColor='#60677A'
                onColor='#8941FF'
                height={20}
                width={28}
                uncheckedIcon={false}
                checkedIcon={false}
                handleDiameter={14}
                offHandleColor='#242731'
                onHandleColor='#242731'
                activeBoxShadow='none'
              />
            </DropdownItemWrapper>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default TableDropdown;

// import React, { useState, useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import ArrowUp from '../img/up.svg';
// import ArrowDown from '../img/down.svg';
// import Tick from '../img/green-tick.svg';

// interface DropdownItemProps {
//   active: boolean;
// }

// const DropdownContainer = styled.div`
//   position: relative;
//   display: inline-block;
// `;

// const DropdownHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const DropdownTitle = styled.div<DropdownItemProps>`
//   font-weight: 400;
//   font-size: 13px;
//   line-height: 20px;
//   color: ${props => (props.active ? '#76B2EA' : '#fff')};
  
//   cursor: pointer;
//   user-select: none;
// `;

// const DropdownArrow = styled.img<DropdownItemProps>`
//   width: 10px;
//   height: 10px;
//   margin-left: 8px;
// `;

// const DropdownList = styled.ul`
//   position: absolute;
//   right: 0;
//   left: auto;

//   width: 237px;
//   height: 236px;
//   padding: 8px;
//   margin: 6px 0 0;

//   background: #242731;
//   box-shadow:
//     0px 4px 12px rgba(0, 0, 0, 0.4),
//     0px 2px 4px rgba(0, 0, 0, 0.25),
//     0px 8px 48px rgba(0, 0, 0, 0.6);
//   border-radius: 8px;

//   z-index: 1;
//   list-style: none;
// `;

// const DropdownItem = styled.li<DropdownItemProps>`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 12px 16px;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 20px;
//   border-radius: 4px;

//   color: ${(props) => props.active ? '#fff' : '#a2a4a8'};
//   cursor: pointer;

//   &:hover {
//     background-color: #31343D;
//     color: #fff;
//   }
// `;

// const DropdownChooseTick = styled.img<DropdownItemProps>`
//   display: ${(props) => props.active ? 'block' : 'none'};
//   width: 12px;
//   height: 12px;

//   cursor: pointer;
// `;

// const options = ['Charlottetown', 'Halifax', 'Naperville', 'Vernon', 'Montreal'];

// const TableDropdown = () => {
//   const [selectedOption, setSelectedOption] = useState(options[2]);
//   const [dropdownActive, setDropdownActive] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const handleItemClick = (option: string) => {
//     setSelectedOption(option);
//     setDropdownActive(false);
//   };

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownActive(false);
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (
//     <DropdownContainer ref={dropdownRef}>
//       <DropdownHeader onClick={() => setDropdownActive(!dropdownActive)}>
//         <DropdownTitle active={dropdownActive} onClick={() => setDropdownActive(!dropdownActive)}>
//           {selectedOption}
//           <DropdownArrow src={dropdownActive ? ArrowUp : ArrowDown} active={dropdownActive} />
//         </DropdownTitle>
//       </DropdownHeader>
//       {dropdownActive && (
//         <DropdownList>
//           {options.map((option) => (
//             <DropdownItem
//               key={option}
//               active={selectedOption === option}
//               onClick={() => handleItemClick(option)}
//             >
//               {option}
//               <DropdownChooseTick src={Tick} active={selectedOption === option} />
//             </DropdownItem>
//           ))}
//         </DropdownList>
//       )}
//     </DropdownContainer>
//   );
// };

// export default TableDropdown;
