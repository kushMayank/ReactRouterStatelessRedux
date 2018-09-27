export function handleChange(data,dataType){
    return{
        type:'HANDLE_CHANGE_DASH',
        data,
        dataType    
    }        
}


export function handleSubmit(data,dataType){
    return{
        type:'HANDLE_POST',
        data,
        dataType
    }
}