import React, { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div
      {...props}
      className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 light:bg-gray-800 light:border-gray-700"
    ></div>
  );
};

export default Card;
