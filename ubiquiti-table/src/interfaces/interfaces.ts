import { Dispatch, SetStateAction } from "react";

type Device = {
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
  product: string;
  name: string;
  icon: {
    id: string;
    resolutions: number[][];
    url: string;
  }
};

interface TableDeviceProps {
  data: TableDevice[];
}

interface SearchInputProps {
  searchValue: string;
  handleChange(e: { target: { value: string; }; }): void;
}

interface TableNavProps {
  count: number;
  searchBarValue: Dispatch<SetStateAction<string>>;
  setFilterValue: Dispatch<SetStateAction<string[]>>;
  // filterValue: string[];
}

interface FilterProps {
  setFilterValue: Dispatch<SetStateAction<string[]>>;
}

export type {
  Device,
  TableDevice,
  TableDeviceProps,
  SearchInputProps,
  TableNavProps,
  FilterProps,
}