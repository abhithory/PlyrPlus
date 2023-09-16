import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PlyrPlus } from "../."

import "../dist/plyrplus.css"

const chaptersData = [
  {
    index: 0,
    timestamp: "00:00",
    chapterName: "Introduction",
    descripiton: "This is random Description",
  },
  {
    index: 1,
    timestamp: "00:30",
    chapterName: "About Backend",
    descripiton: "This is random Description",
  },
  {
    index: 2,
    timestamp: "01:32",
    chapterName: "Frontend",
    descripiton: "This is random Description",
  },
  {
    index: 3,
    timestamp: "02:40",
    chapterName: "Database",
    descripiton: "This is random Description",
  },
  {
    index: 4,
    timestamp: "03:40",
    chapterName: "Deployment",
    descripiton: "This is random Description",
  },
  {
    index: 5,
    timestamp: "04:50",
    chapterName: "Monitoring",
    descripiton: "This is random Description",
  },
  {
    index: 6,
    timestamp: "06:40",
    chapterName: "THE PROJECT",
    descripiton: "This is random Description",
  },
];

const source = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"


const App = () => {
  return (
    <div>
      <h1>aflkfjadsklfjkl</h1>
      <PlyrPlus source={source} chapters={chaptersData} style={
        {
          width: "100%",
        }
      } />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
