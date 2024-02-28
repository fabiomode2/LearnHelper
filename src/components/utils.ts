export const ShuffleList = ( lista : any[]) => {
    let currentIndex = lista.length,  randomIndex;


    while (currentIndex != 0) {
  

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  

      [lista[currentIndex], lista[randomIndex]] = [
        lista[randomIndex], lista[currentIndex]];
    }
  
    return lista;

}