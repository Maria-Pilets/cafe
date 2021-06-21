/*
export const setDishes =(dispatch)=>{
    dispatch( {type:'SET_LOADED',
        payload:false})
    fetch(`https://cafe-bcb3d-default-rtdb.firebaseio.com/dishes.json`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })

        .then(res => res.json())
        .then(
            (data) => {
                dispatch( {type:'SET_LOADED',
                    payload:true})
                setDishes(data)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
}*/
