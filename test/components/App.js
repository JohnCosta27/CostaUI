import React from 'react';

import { FlexBox, TextFade, HeaderDiv } from '../../src/index';

const App = () => {
  return (
    <div className="w-full h-screen bg-polar-night-400 flex justify-center items-center p-4">
      <div className="w-full h-full grid grid-cols-4 gap-2">
        <div className="border-2 border-aurora-red rounded flex justify-center items-center">
          <FlexBox className="w-full h-48 bg-snow-storm-100 rounded">
            <div className="w-12 h-12 bg-aurora-yellow"></div>
          </FlexBox>
        </div>
        <div className="border-2 border-aurora-red rounded flex justify-center items-center">
          <TextFade text="Hello World" delay={1000} className="text-5xl text-aurora-red" />
        </div>
        <div className="border-2 border-aurora-red rounded flex justify-center items-center">
          <HeaderDiv header="Hello World" className="border-2 border-aurora-purple p-2">
            <div className="w-full h-52"></div>
          </HeaderDiv>
        </div>
      </div>
    </div>
  );
};
export default App;
