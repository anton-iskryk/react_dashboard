import React, { useState } from 'react';
import styled from 'styled-components';

const ratingData: Data[] = [
  {
    id: 1,
    percent: '94%',
    sales: 116,
    color: '#18A0FB',

  },
  {
    id: 2,
    percent: '94%',
    sales: 116,
    color: '#ED2D95',
  },
  {
    id: 3,
    percent: '94%',
    sales: 116,
    color: '#3CDC86',
  },
  {
    id: 4,
    percent: '94%',
    sales: 116,
    color: '#F4A732',
  },
  {
    id: 5,
    percent: '94%',
    sales: 116,
    color: '#9B53F8',
  },
];

interface Data {
  id: number;
  percent: string;
  sales: number;
  color: string;
}

// interface Props {
//   ratingData: Data[];
// }

const ButtonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ButtonItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 10px 0;
`;

interface ButtonProps {
  isSelected: boolean;
  backgroundColor: string;
}

const Button = styled.button<ButtonProps>`
  display: block;
  width: 24px;
  height: 24px;

  background-color: ${(props) => (props.isSelected ? props.backgroundColor : 'transparent')};

  outline: 2px solid ${(props) => props.backgroundColor};
  border: 2px double #242731;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.backgroundColor)};
  }
`;

const ButtonTitle = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const ButtonTitlePercentage = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  color: #fff;
`;

const ButtonTitleSales = styled.span`
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;

  color: rgba(255, 255, 255, 0.6);
`;

const DataTypeRating: React.FC = () => {
  const [selectedButtons, setSelectedButtons] = useState<number[]>([1, 2, 3]);

  const handleButtonClick = (buttonId: number) => {
    if (selectedButtons.includes(buttonId)) {
      setSelectedButtons(selectedButtons.filter((id) => id !== buttonId));
    } else {
      setSelectedButtons([...selectedButtons, buttonId]);
    }
  };

  return (
    <ButtonList>
      {ratingData.map((data) => (
        <ButtonItem key={data.id}>
          <Button
            onClick={() => handleButtonClick(data.id)}
            isSelected={selectedButtons.includes(data.id)}
            backgroundColor={data.color}
          />
          <ButtonTitle>
            <ButtonTitlePercentage>
              {`Rating ${data.percent}`}
            </ButtonTitlePercentage>

            <ButtonTitleSales>
              {`${data.sales} sales`}
            </ButtonTitleSales>
          </ButtonTitle> 
        </ButtonItem>
      ))}
    </ButtonList>
  );
};

export default DataTypeRating;
