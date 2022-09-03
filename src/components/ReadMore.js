import { useState } from "react";

const ReadMore = ({limit, children}) => {
    const text = children;
    
    const[isReadMoreShown, setReadMoreShown] = useState(false)

const toggleBtn = ()=>{
    setReadMoreShown(prevState => !prevState)
}
  return (
    <div className="read-more-read-less">
        {isReadMoreShown ? text : text.substr(0, limit)}
        <button className="btn" onClick={toggleBtn}>{isReadMoreShown ? 'Read less':'...Read More'}</button>
        
    </div>
  );
};
export default ReadMore;