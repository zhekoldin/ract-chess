import React, { useEffect, useState } from 'react';
import "./App.css";
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';

const App = () => {
    const [board, setBoard] = useState(new Board());

    useEffect(() => {
      restart();
    }, []);

    function restart () {

      // создадим доску
      const new_board = new Board();
      new_board.initCells();
      setBoard(new_board);
    }

  return (
    <div className='app'>
        <BoardComponent/>
    </div>
  );
};

export default App;
