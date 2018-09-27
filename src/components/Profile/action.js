// module.exports = handleName = data => ({
//   type: "HANDLE_NAME_CHANGE",
//   data
// });

// module.exports = handleAddress = data => ({
//   type: "HANDLE_ADDRESS_CHANGE",
//   data
// });

// module.exports = handleCell = data => ({
//     type: "HANDLE_CELL_CHANGE",
//     data
// });

// module.exports = handleChange= (data,dataType)=>(
//     {
//       type:'HANDLE_CHANGE',
//       data,
//       dataType
//     }
// )

export function handleChange(data,dataType){
  return{
    type:'HANDLE_CHANGE',
    data,
    dataType
  }
}