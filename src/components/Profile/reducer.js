let initialState={
    name:'tfyuf',
    address:'',
    cell:''
}

const profileReducer =(state=initialState,action)=>{
    switch(action.type){
        case "HANDLE_CHANGE":
        return  {
            ...state,
           [action.dataType]:action.data       
        };


        // case 'HANDLE_ADDRESS_CHANGE':
        // return {
        //     ...state,address:action.data
        // }
        // ;

        // case'HANDLE_CELL_CHANGE':
        // return{
        //     ...state, address:action.data
        // }



        default: return state;
        
    }
}

export default profileReducer;