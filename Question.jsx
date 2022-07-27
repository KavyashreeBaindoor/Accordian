import React from 'react';

import { FaChevronRight} from 'react-icons/fa';
import { useState } from 'react';

const Question = ({info,title}) => {
         const [info1,setInfo]=useState(false);


         
return(
         <>
         <article className='question'>
                  <header>
                           <h4>{title}</h4>
                           <button className='btn' onClick={()=>{setInfo(!info1)}} >
                                    <FaChevronRight/>
                           </button>
                           
                  </header>
                  {info1 && <p>{info}</p>}
                  
         </article>
        
         </>
)    
        
  
}

export default Question