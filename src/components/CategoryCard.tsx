"use client";

import { IoCloseCircleSharp } from "react-icons/io5";

interface CategoryCardProps {
  categoryName: string;
  onClick: (categoryName: string) => void;
  onCategoryClear: () => void;
  isSelected?: boolean;
}

const CategoryCard = ({
  categoryName,
  onClick,
  onCategoryClear,
  isSelected,
}: CategoryCardProps) => {
  return (
    <div
      className={`bg-main-red p-3 rounded-full text-main-text font-bold hover:bg-white hover:text-main-red hover:outline hover:outline-2 flex items-center gap-2 ${
        isSelected && "bg-black"
      }`}
    >
      <button type="button" onClick={() => onClick(categoryName)}>
        <div>{categoryName}</div>
      </button>
      {isSelected ? (
        <button type="button" onClick={onCategoryClear}>
          <IoCloseCircleSharp size={20} />
        </button>
      ) : null}
    </div>
  );
};

export default CategoryCard;
