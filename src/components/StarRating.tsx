import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface StarRatingProps {
  rate: number;
  color: string;
  size: string;
}

const StarRating = ({ rate, color, size }: StarRatingProps) => {
  const calculateStarCount = (num: number) => {
    const roundHalf = Math.round(num * 2) / 2;
    const intPart = Math.trunc(roundHalf);
    const decimalPart = roundHalf.toString().split(".")[1];

    if (roundHalf)
      return (
        <>
          {[...Array(intPart)].map((e, i) => (
            <BsStarFill key={i} color={color} size={size} />
          ))}
          {decimalPart ? <BsStarHalf color={color} size={size} /> : null}
        </>
      );
    else return <BsStar color={color} size={size} />;
  };

  return <div className="flex">{calculateStarCount(rate)}</div>;
};

export default StarRating;
