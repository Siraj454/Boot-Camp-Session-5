  const counterReducer=(state,action)=>{
       switch (action) {
           case 'INCREMENT':
               return state +1 
           case 'Plus2':
               return state +2 
           case 'RESET':
               return state =0 
           default :
               return state =0             
       } 
}
export default counterReducer;