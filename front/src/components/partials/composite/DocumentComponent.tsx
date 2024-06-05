import React from 'react';
import SectionComponent from './SectionComponent';
import ParagraphComponent from './ParagraphComponent';
import ImageComponent from './ImageComponent';

const DocumentComponent: React.FC = () => {
  return (
    <div>
      <SectionComponent>
        <ParagraphComponent text="This is a paragraph in section 1" />
        <ParagraphComponent text="Another paragraph in section 1" />
        <ImageComponent src="image1.jpg" alt="Image 1" />
      </SectionComponent>
      <SectionComponent>
        <ParagraphComponent text="Paragraph in section 2" />
        <ImageComponent src="image2.jpg" alt="Image 2" />
      </SectionComponent>
    </div>
  );
};

export default DocumentComponent;
