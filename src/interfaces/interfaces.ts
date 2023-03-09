// Dashboard

export interface Data {
  statistic: {
    iam_users: number;
    iam_roles: number;
    iam_policies: number;
    compute_resources: number;
    games: number;
  };
  chartData: {
    blue: number;
    red: number;
    green: number;
    date: string;
  }[];
  users: {
    name: string;
    date: string;
  }[];
  general_sales_time: {
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
  }[];
}

export interface Statistic {
  iam_users: number;
  iam_roles: number;
  iam_policies: number;
  compute_resources: number;
  games: number;
}

export interface ChartData {
  blue: number;
  red: number;
  green: number;
  date: string;
}

export interface Users {
  name: string;
  date: string;
}

// UpperFramesBlock

export interface StatisticProps {
  statistic: Statistic;
}

// CardsBlock

export interface TableData {
  model: {
    image: null | string;
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
}

// for styled

export interface TableCellProps {
  alignCenter?: boolean;
}

export interface CardsBlockProps {
  tableData: TableData[];
}

// DataTypeDropdown, LocationDropdown, TableDropdown for styled

export interface DropdownItemProps {
  active: boolean;
}

// DataTypeRating

export interface RatingData {
  id: number;
  percent: string;
  sales: number;
  color: string;
}

export interface ButtonProps {
  isSelected: boolean;
  backgroundColor: string;
}

// DataTypeUsers

export type Props = {
  name: string,
  date: string,
};

export interface DataTypeUsersProps {
  users: Users[];
}

// GameStatsLeftBlock

export interface GameStatsLeftBlockProps {
  chartData: ChartData[];
  users: Users[];
}

// GeneralSalesBlock

export interface GeneralSalesBlockProps {
  tableData: TableData[];
};

// LeftChart

export interface ChartDataProps {
  chartData: ChartData[];
}

// RightChart

export interface CustomLabelProps {
  title: string;
  percent: string;
  desc: string;
  days: string;
}

// TableDropDown

interface DropdownItem {
  label: string;
  value: string;
}

export interface DropdownProps {
  items: DropdownItem[];
}

