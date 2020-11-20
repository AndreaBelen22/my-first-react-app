import React from "react";

 export default function AwesomeAnimals() {
    const awesomeAnimals =
    ["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"];

    const animal = awesomeAnimals.map((animal, i) => {
        return (
            <div key={i}>
                <ul>
                    <li>Awesomeness level {i}: {animal}</li>
                </ul>
            </div>
        )
        
    });
    return animal
    }

    
  
    // const anAnimal = awesomeAnimals.map((animal, index) => {  
    // return (
    // <div key={index}> 
    //    <ol>
    //    <li> Awesomeness level {index}:{anAnimal}</li> 
    //    </ol>
    //     </div>)}
    //     )
    //     return anAnimal;


//


 
 

// {/* <ul>
//   <li>Awesomeness level 1: Chicken</li>
//   <li>Awesomeness level 2: Sloth</li>
//   <li>Awesomeness level 3: Porcupine</li>
//   <li>Awesomeness level 4: Killer whale</li>
//   <li>Awesomeness level 5: Velociraptor</li>
// </ul> */}





