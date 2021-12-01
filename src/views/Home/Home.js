import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [align, setAlign] = useState('');
  const [font, setFont] = useState('');
  const [text, setText] = useState('');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, align, font, text }} />
      <Editor {...{ setTitle, setSubtitle, setAlign, setFont, setText }} />
    </main>
  );
}
