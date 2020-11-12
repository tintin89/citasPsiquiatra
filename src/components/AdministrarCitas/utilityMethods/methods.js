
export const verificar=(arreglo,valor)=>{
    if(arreglo.length>0) {
        for (let i = 0; i < arreglo.length; i++) {
          if(arreglo[i].ok===valor){
              return true
          }

        }
        return false
    }else{return false}
}