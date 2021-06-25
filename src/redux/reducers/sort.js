const initialState={
    sortBy:{
        type:'price',
        order:'desc'
    }
}


const sort=(state=initialState,action)=>{
    switch (action.type){
        case 'SORT_BY':{
            return {...state,sortBy:action.payload}
        }

    }
}

export default sort;