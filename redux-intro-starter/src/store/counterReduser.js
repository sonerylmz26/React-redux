// ? alternatif 
//? counter type declarations
//* string'ler hataya meyillidir.Bu hatalari minimize etmek icin string type'lari degiskenlere saklanir ve degisken olarak kullanilabilir.
export const INC = "INC"
export const DEC = "DEC"
export const CLR = "CLR"

//! action islemlerini basitlestirmek icin fonksiyonlar yazilabilir. dispatch kolaylaştırmak için. 
export const decrement = (payload) => {
  return {type:DEC, payload}
}
export const increment = () => {
  return {type:INC}
}
export const clear = () => {
  return {type:CLR}
}


//? State'lerin baslangic durumlarinin belirlenmesi
const initialState = {
      count: 0,
}

//? Pure Function (reducer)
export const counterReducer = (state = initialState , action) => {

switch(action.type){
case INC :
      return {
            count:state.count + 1  
      }
case DEC :
      return  {
        count: state.count <= 0 ? alert("0dan küçük olamaz") : state.count - 1 
      }
case CLR :
      return {
            count:0 
      }
      default:
      return initialState
      //! Reducer fonksiyonu muhakkak bir state objesi dondurmelidir. Yanlis bir type gelse bile state'in ilk halini dondurmelidir.
}

}
