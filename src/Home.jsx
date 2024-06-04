import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName, removeName } from './redux/reducer';

const Home = () => {
  const [name, setName] = useState('');
  const names = useSelector((state) => state.names);
  const dispatch = useDispatch();

  const handleAddName = () => {
    if (name.trim() !== '') {
      dispatch(addName(name));
      setName('');
    }
  };

  const handleRemoveName = (nameToRemove) => {
    dispatch(removeName(nameToRemove));
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
 
      />
      <button onClick={handleAddName}>Add Name</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
