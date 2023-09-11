import React, { useState, useEffect } from "react";
import { FilterProps } from "../../interfaces/interfaces";

const Filter: React.FC<FilterProps> = ({setFilterValue}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [filterState, setFilterState] = useState<string[]>([]);
  
  const categories = [
    'UniFi',
    'UniFi LTE',
    'UniFi Protect',
    'UniFi Access',
    'airMAX',
    'EdgeMAX'
  ];

  function updateFilters(checked: boolean, categoryFilter: string) {
    if (checked) setFilterState([...filterState, categoryFilter]);
    if (!checked) {
      const clearedFilter = filterState.filter(e => e !== categoryFilter);
      setFilterState(clearedFilter);
    }
  };

  function resetFilters() {
    const boxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    for (let i = 0; i < boxes.length; ++i) {boxes[i].checked = false; }
    setFilterState([]);
  };

  useEffect(() => {
    setFilterValue(filterState);
  }, [filterState]);

  return (
    <div>
      <button className="filter-btn" onClick={() => setIsActive(!isActive)}>Filter</button>
      {isActive ?
        <div>
          {categories.map((elm, index) => {
            return (
              <div className="form-check" key={index}>
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={(e) => updateFilters(e.target.checked, elm)}
                  />
                  {elm}
                </label>
              </div>
            );
          })}
          <button onClick={() => {resetFilters()}}>Reset</button>
        </div>
        :
        null
      }
    </div>
  );
};

export default Filter;
