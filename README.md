# PlyrPlus: Chapterized Seekbar Player

PlyrPlus is a custom video player seekbar that allows you to divide your video into sections, each representing different parts of the video's duration. It comes with several fantastic features and improvements:

- Real-time drag on the seekbar ✨
- Real-time time display while hovering as a popup hover ⏱️
- Support for m3u8 files 📦
- Improved code quality 🛠️
- Added Chapter Menu on Player 📚
- Mobile responsiveness and functions 📱

**Demo Link:** [PlyrPlus Demo](https://plyr-plus-demo.vercel.app)

## Installation

To get started with PlyrPlus, follow these simple steps:

Install PlyrPlus via npm:

```shell
npm install plyrplus
```

## Usage

### Now that you have PlyrPlus installed, you can easily integrate it into your project by following these steps:

1. Import the PlyrPlus CSS in your project:
   ```javascript
   import 'plyrplus/dist/plyrplus.css';
   ```
2. Import the PlyrPlus component:
   ```javascript
   import { PlyrPlus } from 'plyrplus';
   ```
3. Use it in a Component like this

```javascript
import React from 'react';
import { PlyrPlus } from 'plyrplus';

const MyVideoPlayer = () => {
  // Define your video source URL
  const source = 'https://example.com/your-video.mp4';

  // Create an array of chapter data
  const chaptersData = [
    {
      index: 0,
      timestamp: '00:00',
      chapterName: 'Introduction',
      description: 'This is a random description.',
    },
    {
      index: 1,
      timestamp: '00:30',
      chapterName: 'About Backend',
      description: 'This is a random description.',
    },
    {
      index: 2,
      timestamp: '01:32',
      chapterName: 'Frontend',
      description: 'This is a random description.',
    },
    // Add more chapters as needed
  ];

  // Define your custom styles for the player (optional)
  const playerStyle = {
    width: '100%',
    // Add more styles as needed
  };

  return (
    <PlyrPlus source={source} chapters={chaptersData} style={playerStyle} />
  );
};

export default MyVideoPlayer;
```

In the code above, replace the source variable with the URL of your video file, and customize the chaptersData array to include the chapters and descriptions relevant to your video content. You can also adjust the playerStyle object to customize the player's appearance.

That's it! You now have PlyrPlus integrated into your project, complete with a chapterized seekbar, real-time drag functionality, and mobile responsiveness, making it easy for your users to navigate and enjoy your video content.
