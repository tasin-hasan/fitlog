import React from 'react';

interface SortByProps {
    sortBy: string,
    setSortBy: (value: string)=> void;
}

const SortBy = ({sortBy, setSortBy}: SortByProps) => {
    return (
        <div className="flex items-center gap-2 ml-auto">
        <span className="text-gray-500 text-sm whitespace-nowrap">Sort by</span>

        <select
        value={sortBy}
          className="select select-sm select-ghost"
          onChange={(e)=> setSortBy(e.target.value)}
        >
          <option value="Duration">Duration</option>
          <option value="Calories">Calories</option>
          <option value="Rating">Rating</option>
        </select>
      </div>
    );
};

export default SortBy;