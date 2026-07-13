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

const colecao = collection(db, "empresas");

/* LISTAR */

export async function listarEmpresas() {

  const snapshot = await getDocs(colecao);

  return snapshot.docs.map((doc) => ({

    id: doc.id,

    ...doc.data(),

  }));

}

/* TEMPO REAL */

export function ouvirEmpresas(callback) {

  return onSnapshot(colecao, (snapshot) => {

    const dados = snapshot.docs.map((doc) => ({

      id: doc.id,

      ...doc.data(),

    }));

    callback(dados);

  });

}

/* CADASTRAR */

export async function cadastrarEmpresa(empresa) {

  return await addDoc(colecao, {

    nome: empresa.nome,

    cnpj: empresa.cnpj,

    telefone: empresa.telefone,

    email: empresa.email,

    plano: empresa.plano,

    ativa: true,

    criadoEm: serverTimestamp(),

  });

}

/* EDITAR */

export async function editarEmpresa(id, dados) {

  return await updateDoc(

    doc(db, "empresas", id),

    dados

  );

}

/* EXCLUIR */

export async function excluirEmpresa(id) {

  return await deleteDoc(

    doc(db, "empresas", id)

  );

}