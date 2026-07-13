import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { db, auth } from "../firebase";

const colecao = collection(db, "tecnicos");

/* ============================================
   CADASTRAR
============================================ */

export async function cadastrarTecnico(dados) {

  // Cria usuário no Firebase Authentication

  const credenciais =
    await createUserWithEmailAndPassword(

      auth,

      dados.email,

      dados.senha

    );

  // Salva no Firestore

  return await addDoc(colecao, {

    uid: credenciais.user.uid,

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

    bateria: 0,

    velocidade: 0,

    precisao: 0,

    ultimaAtualizacao: serverTimestamp(),

    criadoEm: serverTimestamp(),

  });

}

/* ============================================
   EDITAR
============================================ */

export async function editarTecnico(id, dados) {

  const referencia =
    doc(db, "tecnicos", id);

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

  const referencia =
    doc(db, "tecnicos", id);

  return await deleteDoc(referencia);

}