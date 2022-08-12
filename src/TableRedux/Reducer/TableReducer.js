import { ADD_DATA } from "../ActionType/ActionType"

const initialState = {
    tableDataList:{
     tableData : []
    }
}



const TableReducer = (state = initialState , action) => {
   

    switch(action.type){
        case ADD_DATA:
            return {
                ...state,
                tableDataList:{
                    ...state.tableDataList,
                    tableData:[
                        ...state.tableDataList.tableData,
                        {
                            content:action.payload
                        }
                    ]
                }
            }

            
            default:
                return state;
    }
}

export default TableReducer;