import React from "react";
import { useState } from "react";

// import { Comment } from "../Comment";
import "./style.css"

export const MyCoolButton = props => {
    const [count, setCount] = useState(0);
    const [commentHistory, setCommentHistory] = useState([]);

    const clickHandler = () => {
      setCount(count + 1);
      // alert(`Коммэнт : `+ props.comment)
      setCommentHistory([...commentHistory, props.comment]);
    };
    return (
    <div className="CoolButtonContainer">
      <span className="CoolText">{props.tovchNer ? props.tovchNer : "Үнэхээр гайхалтай"}</span> <br/>
        {/* <span>{`Өнөөдөр : ${new Date()}`}</span> */}
      <br/>
  
      <input type='button' onClick={clickHandler} value={props.text ? count + ')' + props.text : "click me!"}/>

      <div>
        
        {commentHistory.map((el, index) => 
          // <div key={new Date()}>{el}</div>
          <div key={index}>{el}</div>
        )}
      </div>
    </div>
    );
  };