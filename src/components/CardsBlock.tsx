import React from 'react';
import styled from 'styled-components';
import Dots from '../img/action-menu.svg';
import Card from '../img/card-icon.png';
import {
  TableData,
  TableCellProps,
  CardsBlockProps
} from '../interfaces/interfaces';

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;

  position: relative;
`;

const TableHead = styled.thead`
  font-size: 11px;
  line-height: 12px;

  color: rgba(255, 255, 255, 0.6);
`;

const TableBody = styled.tbody`
  width: 1920px;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

const CardTitle = styled.th<TableCellProps>`
  text-align: ${(props) => props.alignCenter ? 'center' : 'left'};
`;

const TableCell = styled.td<TableCellProps>`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  color: #fff;
  text-align: ${(props) => props.alignCenter ? 'center' : 'left'};
  padding: 16px 0;
  white-space: pre;
`;

const CardTitleContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const CardIconContainer = styled.div`
  width: 28px;
  height: 40px;
`;

const CardIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const TableCellDesc = styled.span`
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;

  color: rgba(255, 255, 255, 0.6);
`;

const IconContainer = styled.div<TableCellProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const OptionIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const CardsBlock: React.FC<CardsBlockProps> = ({ tableData }) => {
  const item = tableData[0];
  const items = Array.from({ length: 5 }, () => item);

  const cardModelText = (text: string) => {
    const first = text.split(' ').slice(0, 2).join(' ');
    const second = text.split(' ').slice(2).join(' ');

    const rebuild = [first, second];

    return rebuild.join('\n');
  };

  const formatDate = (date: string) => {
    const dateParts = date.split('-');

    const dateObj = new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]));

    return dateObj.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <TableWrapper>
      <TableHead>
        <CardTitle>Card model</CardTitle>
        <CardTitle>Card name</CardTitle>
        <CardTitle>Type</CardTitle>
        <CardTitle alignCenter>Limited</CardTitle>
        <CardTitle alignCenter>??? Operations</CardTitle>
        <CardTitle>Date of lost operations</CardTitle>
        <CardTitle>Rating</CardTitle>
        <CardTitle>Status</CardTitle>
        <CardTitle>Price</CardTitle>
        <CardTitle alignCenter>Options</CardTitle>
      </TableHead>

      <TableBody>
        {items.map((item: TableData, index: number) => (
          <TableRow key={index}>
            <TableCell>
              <CardTitleContainer>
                <CardIconContainer>
                  <CardIcon src={Card} alt='card' />
                </CardIconContainer>

                {cardModelText(item.model.name)}
              </CardTitleContainer>
            </TableCell>

            <TableCell>
              {`${item.card_name}\n`}
              <TableCellDesc>{`Card ${item.card_number}`}</TableCellDesc>
            </TableCell>

            <TableCell>{item.type}</TableCell>
            <TableCell alignCenter>{item.limited}</TableCell>
            <TableCell alignCenter>{item.operations}</TableCell>
            <TableCell>{formatDate(item.date)}</TableCell>
            <TableCell>{item.rating}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.price}</TableCell>

            <TableCell>
              <IconContainer>
                <OptionIcon src={Dots} alt='option' />
              </IconContainer>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};

export default CardsBlock;
