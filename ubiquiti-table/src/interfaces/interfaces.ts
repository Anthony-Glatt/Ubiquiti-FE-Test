import { Dispatch, SetStateAction } from "react";

type DeviceData = {
  guids: string[];
  icon: {
    id: string;
    resolutions: number[][];
  };
  id: string;
  line: {
    id: string;
    name: string;
  };
  product: {
    abbrev: string;
    name: string;
  };
  shortnames: string[];
  sysids: [];
  triplets: [];
  uisp: {
    bleServices: {};
    firmware: {
      board: [];
      platform: null;
      line: string;
    };
    nameLegacy: [];
  }
};

interface TableDevice  {
  id: string;
  product: string;
  name: string;
  shortName: string[];
  icon: {
    id: string;
    resolutions: number[][];
    url25: string;
    url129: string;
    url257: string;
  }
};

interface NavProps {
  title: string;
  author: string;
}

interface TableContainerProps {
  data: TableDevice[];
  isTable: boolean;
  setSearchBarValue: Dispatch<SetStateAction<string>>;
  setFilterValue: Dispatch<SetStateAction<string[]>>;
  setIsTable: Dispatch<SetStateAction<boolean>>;
}

interface TableProps {
  data: TableDevice[];
}

interface SearchInputProps {
  searchValue: string;
  handleChange(e: { target: { value: string; }; }): void;
}

interface TableNavProps {
  count: number;
  setSearchBarValue: Dispatch<SetStateAction<string>>;
  setFilterValue: Dispatch<SetStateAction<string[]>>;
  setIsTable: Dispatch<SetStateAction<boolean>>;
}

interface FilterProps {
  setFilterValue: Dispatch<SetStateAction<string[]>>;
}

interface CardGridProps {
  data: TableDevice[];
}

interface CardProps {
  id: string;
  product: string;
  name: string;
  shortName: string[];
  icon: {
    id: string;
    resolutions: number[][];
    url25: string;
    url129: string;
    url257: string;
  }
}

interface DevicePageProps {
  data: TableDevice[];
}

export type {
  DeviceData,
  NavProps,
  TableDevice,
  TableContainerProps,
  TableProps,
  SearchInputProps,
  TableNavProps,
  FilterProps,
  CardGridProps,
  CardProps,
  DevicePageProps,
}