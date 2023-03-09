import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import styled from 'styled-components';
import ArrowUp from '../img/up.svg';
import ArrowDown from '../img/down.svg';
import Settings from '../img/settings.svg';
import SettingsActive from '../img/settings-active.svg';
import Switch from 'react-switch';
import { DropdownItemProps, DropdownProps } from '../interfaces/interfaces';

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

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const DropdownItemLabel = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #fff;
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

            <DropdownArrow
              src={isOpen ? ArrowUp : ArrowDown}
              active={isOpen}
            />
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
