// EncryptionDecorator.tsx
import React from 'react';
import { encrypt } from './utils/encryptionUtils'; // Importez la fonction encrypt depuis un fichier encryptionUtils

interface EncryptionDecoratorProps {
  content: string;
}

const EncryptionDecorator: React.FC<EncryptionDecoratorProps> = ({ content }) => {
  const encryptedContent = encrypt(content); // Utilisez la fonction encrypt

  return (
    <div>
      <p>Encrypted Content:</p>
      <p>{encryptedContent}</p>
    </div>
  );
};

export default EncryptionDecorator;
