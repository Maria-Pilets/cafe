const initialState={
    items:[],
    sortBy:{
        type:'price',
        order:'desc'
    }
}


const sort=(state=initialState,action)=>{
    switch (action.type){
        case 'SORT': {
            return {...state, sortBy: action.payload}
        }
        default:{
            return state
        }

    }
}

export default sort;