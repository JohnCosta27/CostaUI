//============================================================
// Essential Imports
//============================================================

import React from 'react';
import clsx from 'clsx';

//============================================================
// Component
//============================================================

const HeaderDiv = ({ className, children, header }) => {
  return (
    <div className={clsx('flex flex-col', className)}>
      <div className="w-full">
        <h1 className="text-5xl text-aurora-red">{header}</h1>
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
};
export default HeaderDiv;
