import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import { auth, db } from "../firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [usuario, setUsuario] = useState(null);
  const [perfil, setPerfil] = useState(null);
  const [empresa, setEmpresa] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser) => {

        if (!firebaseUser) {

          setUsuario(null);
          setPerfil(null);
          setEmpresa(null);
          setLoading(false);

          return;

        }

        try {

          const referencia = doc(
            db,
            "usuarios",
            firebaseUser.uid
          );

          const snapshot = await getDoc(referencia);

          if (snapshot.exists()) {

            const dados = snapshot.data();

            setUsuario(firebaseUser);
            setPerfil(dados.perfil);
            setEmpresa(dados.empresa);

          } else {

            setUsuario(firebaseUser);
            setPerfil(null);
            setEmpresa(null);

          }

        } catch (erro) {

          console.error(erro);

          setUsuario(firebaseUser);

        }

        setLoading(false);

      }
    );

    return () => unsubscribe();

  }, []);

  async function logout() {

    await signOut(auth);

  }

  return (

    <AuthContext.Provider
      value={{
        usuario,
        perfil,
        empresa,
        loading,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export function useAuth() {

  return useContext(AuthContext);

}