import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

const colecao = collection(db, "tecnicos");

/* ============================================
   CADASTRAR
============================================ */

export async function cadastrarTecnico(dados) {

  return await addDoc(colecao, {

    nome: dados.nome,

    email: dados.email,

    telefone: dados.telefone,

    cpf: dados.cpf,

    cidade: dados.cidade,

    equipe: dados.equipe,

    veiculo: dados.veiculo,

    placa: dados.placa,

    status: "Offline",

    online: false,

    producao: 0,

    latitude: null,

    longitude: null,

    gps: false,

    ultimaAtualizacao: serverTimestamp(),

    criadoEm: serverTimestamp(),

  });

}

/* ============================================
   EDITAR
============================================ */

export async function editarTecnico(id, dados) {

  const referencia = doc(db, "tecnicos", id);

  return await updateDoc(referencia, {

    nome: dados.nome,

    email: dados.email,

    telefone: dados.telefone,

    cpf: dados.cpf,

    cidade: dados.cidade,

    equipe: dados.equipe,

    veiculo: dados.veiculo,

    placa: dados.placa,

    ultimaAtualizacao: serverTimestamp(),

  });

}

/* ============================================
   EXCLUIR
============================================ */

export async function excluirTecnico(id) {

  const referencia = doc(db, "tecnicos", id);

  return await deleteDoc(referencia);

}