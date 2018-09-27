const initialState ={
    jobtype:'',
    joblocation:'',
    jobsalary:'',
    jobIndustry:'',
    jobpost:false,

}

const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'HANDLE_CHANGE_DASH':
            return {
                ...state,[action.dataType]:action.data
            }
        case 'HANDLE_POST':
            return {
                ...state,[action.dataType]:action.data
            }
        default: return state
            
    }
}

export default reducer;