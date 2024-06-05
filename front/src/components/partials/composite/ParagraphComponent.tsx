import React from 'react';

interface ParagraphProps {
  text: string;
}

const ParagraphComponent: React.FC<ParagraphProps> = ({ text }) => {
  return (
    <p>{text}</p>
  );
};

export default ParagraphComponent;
