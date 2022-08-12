export const ADD_DATA  = "ADD_DATA";


export function tableDataAction(data){
console.log(data , "data coming from table page")



   

    
//    console.log(data, "data received from api response ")
    return {
        type : ADD_DATA,
        payload: data
    }
}

