import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

const colecao = collection(db, "tecnicos");

/* CADASTRAR */

export async function cadastrarTecnico(tecnico) {
  return await addDoc(colecao, {
    ...tecnico,
    online: false,
    status: "Offline",
    producao: 0,
    latitude: 0,
    longitude: 0,
    ultimaAtualizacao: serverTimestamp(),
    criadoEm: serverTimestamp(),
  });
}

/* LISTAR */

export async function listarTecnicos() {
  const snapshot = await getDocs(colecao);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/* TEMPO REAL */

export function ouvirTecnicos(callback) {
  return onSnapshot(colecao, (snapshot) => {
    const dados = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(dados);
  });
}

/* ATUALIZAR */

export async function atualizarTecnico(id, dados) {
  const referencia = doc(db, "tecnicos", id);

  return await updateDoc(referencia, {
    ...dados,
    ultimaAtualizacao: serverTimestamp(),
  });
}

/* EXCLUIR */

export async function excluirTecnico(id) {
  return await deleteDoc(
    doc(db, "tecnicos", id)
  );
}