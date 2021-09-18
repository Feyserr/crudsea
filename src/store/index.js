import { createStore } from 'redux';

const INITIAL_STATE = { modules:[
    {
        id:1,
        name:"t.i",
        cargos:[
            {name: "dev"},
            {name: "QA"}
        ]
    },
    {
        id:2,
        name:"CEO",
        cargos:[
            {name:"back-end"},
            {name:"Scrum master"}
        ]
    }
  ]
}



 function reducer(state = INITIAL_STATE, action){
    switch (action.type){
        case "GET_SETOR":
            
         console.log(action.payload);
         return action.payload;
         
        default:
             return state;
    }
} 


 
 
 const store = createStore(reducer);

 export default store;