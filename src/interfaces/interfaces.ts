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

// DataTypeDropdown for styled

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

// 

