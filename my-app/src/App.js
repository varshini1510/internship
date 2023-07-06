import { useState } from "react"
import React from "react"


function App(){

    const [cards] = useState([
        {
            title:'Animals',
            text:'Unlimited Jokes On Animal',
        },
        {
            title:'Career',
            text:'Unlimited Jokes On Career',
        },
        {
            title:'Celebrity',
            text:'Unlimited Jokes On Celebrity',
        },
        {
            title:'Dev',
            text:'Unlimited Jokes On Dev',
        },
        {
            title:'Explicit',
            text:'Unlimited Jokes On Explicit',
        },
        {
            title:'Fashion',
            text:'Unlimited Jokes On Fashion',
        },
        {
            title:'Food',
            text:'Unlimited Jokes On Food',
        },
        {
            title:'History',
            text:'Unlimited Jokes On History',
        },
        {
            title:'Money',
            text:'Unlimited Jokes On Money',
        },
        {
            title:'Movie',
            text:'Unlimited Jokes On Movie',
        },
        {
            title:'Music',
            text:'Unlimited Jokes On Music',
        }, {
            title:'Political',
            text:'Unlimited Jokes On Political',
        }, {
            title:'Religion',
            text:'Unlimited Jokes On Religion   ',
        }, {
            title:'Science',
            text:'Unlimited Jokes On Science',
        }, {
            title:'Sport',
            text:'Unlimited Jokes On Sport',
        }, {
            title:'Travel',
            text:'Unlimited Jokes On Travel',
        },
    ])
    return(
        <div>
          <section>
                <div className="container">
                <h1 className="text">Chuck Norries</h1>
                <div className="cards">
                    {
                        cards.map((card,i)=>(
                            <div  key={i}className="card">
                            <h3>{card.title}</h3>
                            <h4>{card.text}</h4>
                </div> ))
                            
                       
                    }
                  
                    
                    
                </div>
                </div>
            
            </section>
      </div>
       
    )
}



export default App;


