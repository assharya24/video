import React from 'react';
import Video from '../src/components/Video';
import './App.css'
function App() {
  const videoId = '3ioQQQrnw4Q';
  const apiKey = 'AIzaSyCw3XHZQYCIPfBcBQHaTGg9Kn-wtthJkCM';

  return (
    <div className="App">
      <h1>YouTube Video App</h1>
      <Video videoId={videoId} apiKey={apiKey} />
    </div>
  );
}

export default App;