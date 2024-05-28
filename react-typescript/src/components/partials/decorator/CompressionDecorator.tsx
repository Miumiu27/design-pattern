// CompressionDecorator.tsx
import React from 'react';
import { compress } from './utils/compressionUtils'; // Importez la fonction compress depuis un fichier compressionUtils

interface CompressionDecoratorProps {
  content: string;
}

const CompressionDecorator: React.FC<CompressionDecoratorProps> = ({ content }) => {
  const compressedContent = compress(content); // Utilisez la fonction compress

  return (
    <div>
      <p>Compressed Content:</p>
      <p>{compressedContent}</p>
    </div>
  );
};

export default CompressionDecorator;
