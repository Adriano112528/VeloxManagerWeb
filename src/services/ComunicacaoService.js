import { ref, onValue } from "firebase/database";
import { realtimeDb } from "../firebase";

class ComunicacaoService {

  ouvirTecnicos(callback){

    const tecnicosRef = ref(realtimeDb,"gps");

    return onValue(tecnicosRef,(snapshot)=>{

      if(!snapshot.exists()){
        callback([]);
        return;
      }

      const dados = snapshot.val();

      const lista = Object.entries(dados).map(([id,item])=>({

        id,

        ...item,

      }));

      callback(lista);

    });

  }

}

export default new ComunicacaoService();