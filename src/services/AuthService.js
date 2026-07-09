import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
} from "firebase/auth";

import { auth } from "../firebase";

/* LOGIN */

export async function login(email, senha) {
  return await signInWithEmailAndPassword(auth, email, senha);
}

/* LOGOUT */

export async function logout() {
  return await signOut(auth);
}

/* CRIAR USUÁRIO */

export async function criarUsuario(email, senha) {
  return await createUserWithEmailAndPassword(
    auth,
    email,
    senha
  );
}

/* ALTERAR SENHA */

export async function alterarSenha(novaSenha) {
  if (!auth.currentUser) return;

  return await updatePassword(
    auth.currentUser,
    novaSenha
  );
}

/* RECUPERAR SENHA */

export async function recuperarSenha(email) {
  return await sendPasswordResetEmail(
    auth,
    email
  );
}

/* USUÁRIO LOGADO */

export function usuarioAtual() {
  return auth.currentUser;
}