// ContentComponent.tsx
import React from 'react';

interface ContentProps {
  content: string;
}

const ContentComponent: React.FC<ContentProps> = ({ content }) => {
  return (
    <div>
      <p>Content:</p>
      <p>{content}</p>
    </div>
  );
};

export default ContentComponent;
