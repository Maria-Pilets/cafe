export const sort= ({type,order})=>{
    return{
        type:'SORT',
        payload:{type,order}
    }

}