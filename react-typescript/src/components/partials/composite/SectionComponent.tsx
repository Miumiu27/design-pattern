import React from 'react';

interface SectionProps {
  children: React.ReactNode;
}

const SectionComponent: React.FC<SectionProps> = ({ children }) => {
  return (
    <section>
      {children}
    </section>
  );
};

export default SectionComponent;
