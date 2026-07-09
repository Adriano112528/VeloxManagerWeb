import {
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

import { db } from "../firebase";

const colecao = collection(db, "alertas");

/* NOVO ALERTA */

export async function criarAlerta({
  nivel,
  titulo,
  descricao,
  tecnico = "",
  tipo = "",
}) {
  return await addDoc(colecao, {
    nivel,
    titulo,
    descricao,
    tecnico,
    tipo,
    visualizado: false,
    criadoEm: serverTimestamp(),
  });
}

/* TEMPO REAL */

export function ouvirAlertas(callback) {
  const consulta = query(
    colecao,
    orderBy("criadoEm", "desc"),
    limit(30)
  );

  return onSnapshot(consulta, (snapshot) => {
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  });
}

/* EXCLUIR */

export async function excluirAlerta(id) {
  return await deleteDoc(doc(db, "alertas", id));
}