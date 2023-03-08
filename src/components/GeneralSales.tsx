import React, { useState } from 'react';
import styled from 'styled-components';
import TableDropdown from '../components/TableDropdown';
import CardsBlock from '../components/CardsBlock';
import InfoIcon from '../img/info.svg';

const GameSalesBlock = styled.div`
  width: 1756px;
  height: 480px;
  padding: 24px 32px 32px;

  background: #242731;
  border-radius: 4px;
`;

const DropdownTitle = styled.div`
  display: flex;
  gap: 16px;
`;

const GameSalesHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 14px;
`;

const GameSalesTitle = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  color: #fff;
`;

const InfoBlock = styled.div`
  display: flex;
  align-self: start;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 20px;
  height: 20px;

  cursor: pointer;
  margin-right: 8px;
`;

const InfoText = styled.div<{ visible: boolean }>`
  opacity: ${(props) => (props.visible ? '1' : '0')};
  width: 200px;
  background: #242731;
  font-size: 12px;
  color: #fff;
  box-shadow:
    0px 4px 9px rgba(0, 0, 0, 0.2),
    0px 2px 4px rgba(0, 0, 0, 0.25),
    0px 8px 30px rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  padding: 8px;

  transition: opacity .3s;
`;

const TableSettings = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  color: rgba(255, 255, 255, 0.6);
`;

interface TableData {
  model: {
    image: string | null;
    name: string;
  };
  card_name: string;
  card_number: string;
  type: string;
  limited: number;
  operations: number;
  date: string;
  rating: number;
  status: string;
  price: string;
};

interface GeneralSalesBlockProps {
  tableData: TableData[];
};

const GeneralSales: React.FC<GeneralSalesBlockProps> = ({ tableData }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <GameSalesBlock>
      <GameSalesHeader>
        <TitleContainer>
          <GameSalesTitle>General Sales / Time</GameSalesTitle>
          <InfoBlock>
            <IconContainer
              onMouseEnter={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
            >
              <Icon src={InfoIcon} />
            </IconContainer>
              <InfoText visible={showInfo}>
                This is the general sales block
              </InfoText>
          </InfoBlock>
        </TitleContainer>

        <DropdownTitle>
          <TableSettings>Table settings</TableSettings>
          <TableDropdown />
        </DropdownTitle>
      </GameSalesHeader>

      <CardsBlock tableData={tableData} />
    </GameSalesBlock>
  );
};

export default GeneralSales;
