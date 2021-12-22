//============================================================
// Essential Imports
//============================================================

import React from 'react';
import clsx from 'clsx';

//============================================================
// Component
//============================================================

const FlexBox = ({ className, children, justifyContent, alignItems }) => {
  let classes = clsx('flex', className);

  if (justifyContent) {
    classes = clsx(classes, justifyContent);
  } else {
    classes = clsx(classes, 'justify-center');
  }

  if (alignItems) {
    classes = clsx(classes, alignItems);
  } else {
    classes = clsx(classes, 'items-center');
  }

  return <div className={classes}>{children}</div>;
};
export default FlexBox;
