import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const API_ENDPOINT = "https://stablediffusionapi.com/api/v3/text2img";
  const handleSubmit = async () => {
    try {
      const response = await axios.post(API_ENDPOINT, {
        text: inputText,
      });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleSubmit}>Generate</button>
      <div>{result}</div>
    </div>
  );
}

export default App;
