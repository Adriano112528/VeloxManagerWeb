import {
  ref,
  set,
  update,
  onValue,
  remove,
} from "firebase/database";

import { realtimeDb } from "../firebase";

/* ATUALIZA POSIÇÃO */

export async function atualizarGps(
  tecnicoId,
  dados
) {
  return await update(
    ref(realtimeDb, `gps/${tecnicoId}`),
    {
      ...dados,
      ultimaAtualizacao: Date.now(),
    }
  );
}

/* ENTRAR ONLINE */

export async function entrarOnline(
  tecnicoId,
  tecnico
) {
  return await set(
    ref(realtimeDb, `gps/${tecnicoId}`),
    {
      nome: tecnico.nome,
      equipe: tecnico.equipe,
      status: "Online",

      latitude: 0,
      longitude: 0,

      velocidade: 0,

      bateria: 100,

      ultimaAtualizacao: Date.now(),
    }
  );
}

/* SAIR */

export async function sairOnline(
  tecnicoId
) {
  return await remove(
    ref(realtimeDb, `gps/${tecnicoId}`)
  );
}

/* OUVIR GPS */

export function ouvirGps(callback) {

  const referencia = ref(realtimeDb, "gps");

  return onValue(referencia, (snapshot) => {

    const dados = snapshot.val() || {};

    callback(dados);

  });

}