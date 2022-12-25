import React from 'react';
import { Question } from './Question';
import data from './data';
import './style.scss';

export default function App() {
  return (
    <main>
      <div className="question-box">
        {data.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </div>
    </main>
  );
}
