
import React from 'react';

interface FeatureSectionHeaderProps {
  title: string;
  description: string;
}

const FeatureSectionHeader = ({ title, description }: FeatureSectionHeaderProps) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {title}
        </span>
      </h2>
      <p className="text-slate-700 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default FeatureSectionHeader;
