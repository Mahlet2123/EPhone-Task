"use client";
import { useState } from 'react';


const MenuExtraction = ({ onExtractedNodes }: any) => {
  const [inputText, setInputText] = useState('');
  const [menuItems, setMenuItems] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  // format "<number>. <Menu Text>"
  const menuItemRegex = /^\d+\.\s(.+)$/gm;

  const extractMenuItems = () => {
    const matches = inputText.match(menuItemRegex);

    if (matches) {
      setMenuItems(matches);
      setErrorMessage('');

      // Convert matches to nodes
      const extractedNodes = matches.map((item, index) => {
        const [id, ...label] = item.split('. ');
        return {
          id,
          
          data: { label: label.join('. ') },
          position: { x: index * 100, y: index * 100 },
        };
      });

      onExtractedNodes(extractedNodes);
    } else {
      setMenuItems([]);
      setErrorMessage('No valid menu items found');
    }
  };

  return (
    <div className='p-4'>
      <h2>Menu Extraction</h2>
      <textarea
        className='border w-full p-2'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Text containing menu structures here... (format example = 1. MenuItem )"
        rows={10}
      />
      <br />
      <button className='border' onClick={extractMenuItems}>Extract</button>
      <br />
      {menuItems.length > 0 ? (
        <div>
          <h3>Extracted Menu Items:</h3>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-[red] text-xs">{errorMessage}</p>
      )}
    </div>
  );
};

export default MenuExtraction;
