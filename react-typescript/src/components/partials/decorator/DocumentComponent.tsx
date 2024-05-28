// Usage in DocumentComponent.tsx
import React from 'react';
import ContentComponent from './ContentComponent';
import EncryptionDecorator from './EncryptionDecorator';
import CompressionDecorator from './CompressionDecorator';

const DocumentComponent: React.FC = () => {
  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.";

  return (
    <div>
      <ContentComponent content={content} />
      <EncryptionDecorator content={content} />
      <CompressionDecorator content={content} />
    </div>
  );
};

export default DocumentComponent;
