
//? State'lerin baslangic durumlarinin belirlenmesi
const initialState = {
      count: 0,
}

//? Pure Function (reducer)
export const countReduser = (state = initialState , action) => {

switch(action.type){
case "INC" :
      return {
            count:state.count + 1  
      }
case "DEC" :
      return  {
            count:state.count - 1  
      }
case "CLEAR" :
      return {
            count:0 
      }
      default:
      return initialState
      //! Reducer fonksiyonu muhakkak bir state objesi dondurmelidir. Yanlis bir type gelse bile state'in ilk halini dondurmelidir.
}

}
