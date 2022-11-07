import React, { useEffect, useState } from 'react';

export function Tictactoe() {
  const [cells, setCells] = useState({
    a1: null,
    a2: null,
    a3: null,
    b1: null,
    b2: null,
    b3: null,
    c1: null,
    c2: null,
    c3: null,
  })

  const [player, setPlayer] = useState('X')



  const handleMouseDown = (e) => {
    e.preventDefault()
    if (!cells[e.target.id]) {
      let obj = cells
      obj[e.target.id] = player
      player === 'X' ? setPlayer('O') : setPlayer('X')

      setCells(obj)
    }
  }

  const handleReset = () => {
    setCells({
      a1: null,
      a2: null,
      a3: null,
      b1: null,
      b2: null,
      b3: null,
      c1: null,
      c2: null,
      c3: null,
  
  
    })
    setPlayer('X')
  }

    return (
      <body>
        <div class='game' >
          <div class='hori'>
            <div class='cell' onMouseDown={handleMouseDown} id='a1' ><h1>{cells.a1}</h1></div>
            <div class='cell' onMouseDown={handleMouseDown} id='a2' ><h1>{cells.a2}</h1></div>
            <div class='cell' onMouseDown={handleMouseDown} id='a3' ><h1>{cells.a3}</h1></div>
          </div>
          <div class='hori'>
            <div class='cell' onMouseDown={handleMouseDown} id='b1'><h1>{cells.b1}</h1></div>
            <div class='cell' onMouseDown={handleMouseDown} id='b2'><h1>{cells.b2}</h1></div>
            <div class='cell' onMouseDown={handleMouseDown} id='b3'><h1>{cells.b3}</h1></div>
          </div>
          <div class='hori'>
            <div class='cell' onMouseDown={handleMouseDown} id='c1'><h1>{cells.c1}</h1></div>
            <div class='cell' onMouseDown={handleMouseDown} id='c2'><h1>{cells.c2}</h1></div>
            <div class='cell' onMouseDown={handleMouseDown} id='c3'><h1>{cells.c3}</h1></div>
          </div>

        </div>
        {(cells.a1 && cells.a2 && cells.a3 && cells.b1 && cells.b2 && cells.b3 && cells.c1 && cells.c2 && cells.c3) || (cells.a1 && cells.a1===cells.a2 && cells.a1===cells.a3) || (cells.b1 && cells.b1===cells.b2 && cells.b1===cells.b3) || (cells.c1 && cells.c1===cells.c2 && cells.c1===cells.c3) || (cells.a1 && cells.a1===cells.b1 && cells.a1===cells.c1) || (cells.a2 && cells.a2===cells.b2 && cells.a2===cells.c2) || (cells.a3 && cells.a3===cells.b3 && cells.a3===cells.c3) || (cells.a1 && cells.a1===cells.b2 && cells.a1===cells.c3) || (cells.a3 && cells.a3===cells.b2 && cells.a3===cells.c1) ? <div class='gameoverlay'><h2 style={{fontFamily: 'sans-serif', textAlign: 'center' }}>Gameover</h2><button onMouseDown={handleReset}>Reset</button></div> : <></>}
      </body>
    )
  
}