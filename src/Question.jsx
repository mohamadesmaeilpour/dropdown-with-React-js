import React from 'react';
import { useState } from 'react';

export const Question = ({ title, text }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="dropdown-parent">
      <div
        className="dropdown-header"
        onClick={() => {
          setShowText(!showText);
        }}
      >
        {title}
      </div>
      {showText && <div className="dropdown-body">{text}</div>}
    </div>
  );
};
