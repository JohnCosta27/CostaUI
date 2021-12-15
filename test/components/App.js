import React from 'react';

import { Button, Cdiv, TextFade } from '../../src/index';

const App = () => {
  return (
    <div className="w-full h-screen bg-polar-night-400 flex justify-center items-center p-4">
      <div className="w-full h-full grid grid-cols-4 gap-2">
        <div className="border-2 border-aurora-red rounded flex justify-center items-center">
          <Button />
        </div>
        <div className="border-2 border-aurora-red rounded flex justify-center items-center">
          <Cdiv>
            <div className="w-12 h-12 bg-aurora-yellow"></div>
          </Cdiv>
        </div>
        <div className="border-2 border-aurora-red rounded flex justify-center items-center">
          <TextFade text="Hello World" delay={1000} className="text-7xl text-aurora-red" />
        </div>
      </div>
    </div>
  );
};
export default App;
