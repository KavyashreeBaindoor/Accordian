import React from 'react';
import SingleQuestion from './Question';
import questions from './data';

const App = () => {
  return (
    <main>
<div className="container">
        <h3>Q & A</h3>
        <section>  
{questions.map((q)=>{
         return <SingleQuestion  {...q}/>
})}


        </section>
      
</div>

    </main>
  )
}

export default App