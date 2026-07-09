import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "../firebase";

const colecao = collection(db, "servicos");

/* NOVA OS */

export async function criarServico(servico) {
  return await addDoc(colecao, {
    ...servico,
    status: "Pendente",
    tecnicoId: "",
    tecnico: "",
    inicio: null,
    fim: null,
    tempoExecucao: 0,
    valorProducao: 0,
    criadoEm: serverTimestamp(),
  });
}

/* INICIAR */

export async function iniciarServico(id, tecnicoId, tecnico) {
  const referencia = doc(db, "servicos", id);

  return await updateDoc(referencia, {
    status: "Em Atendimento",
    tecnicoId,
    tecnico,
    inicio: serverTimestamp(),
  });
}

/* FINALIZAR */

export async function finalizarServico(id, valor) {
  const referencia = doc(db, "servicos", id);

  return await updateDoc(referencia, {
    status: "Finalizado",
    fim: serverTimestamp(),
    valorProducao: valor,
  });
}

/* CANCELAR */

export async function cancelarServico(id, motivo) {
  const referencia = doc(db, "servicos", id);

  return await updateDoc(referencia, {
    status: "Cancelado",
    motivo,
    fim: serverTimestamp(),
  });
}

/* LISTAR */

export async function listarServicos() {
  const consulta = query(
    colecao,
    orderBy("criadoEm", "desc")
  );

  const snapshot = await getDocs(consulta);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/* TEMPO REAL */

export function ouvirServicos(callback) {
  const consulta = query(
    colecao,
    orderBy("criadoEm", "desc")
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

export async function excluirServico(id) {
  return await deleteDoc(
    doc(db, "servicos", id)
  );
}