// https://stackoverflow.com/questions/62436814/react-drag-corner-of-element-to-resize-contents

import {React, useState} from "react"
import "./Resizeable.css"

function Resizeable(props) {
  const [size, setSize] = useState({ x: 400, y: 300 });

  const handler = (mouseDownEvent) => {
    const startSize = size;
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };
    
    function onMouseMove(mouseMoveEvent) {
      setSize(currentSize => ({ 
        x: startSize.x - startPosition.x + mouseMoveEvent.pageX, 
       // y: startSize.y - startPosition.y + mouseMoveEvent.pageY 
      }));
    }
    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
      // uncomment the following line if not using `{ once: true }`
      // document.body.removeEventListener("mouseup", onMouseUp);
    }
    
    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };

  return (
    <div id="container" style={{ width: size.x }}>
        <div className={" " + props.className}>
            {props.children}
        </div>
        <button className="noselect" id="draghandle" type="button" onMouseDown={handler} >⇥</button>
    </div>
  );
}

export default Resizeable;