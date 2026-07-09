import {
  collection,
  onSnapshot,
} from "firebase/firestore";

import { db, realtimeDb } from "../firebase";

import {
  ref,
  onValue,
} from "firebase/database";

import { ouvirAlertas } from "./AlertasService";

class DashboardService {

  /* ============================================
     GPS (Realtime Database)
  ============================================ */

  ouvirTecnicos(callback) {

    const referencia = ref(realtimeDb, "gps");

    return onValue(referencia, (snapshot) => {

      if (!snapshot.exists()) {
        callback([]);
        return;
      }

      const dados = snapshot.val();

      const lista = Object.entries(dados).map(([id, tecnico]) => ({
        id,
        ...tecnico,
      }));

      callback(lista);

    });

  }

  /* ============================================
     CADASTRO DE TÉCNICOS (Firestore)
  ============================================ */

  ouvirCadastroTecnicos(callback) {

    return onSnapshot(

      collection(db, "tecnicos"),

      (snapshot) => {

        const lista = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        callback(lista);

      }

    );

  }

  /* ============================================
     TÉCNICOS ONLINE
  ============================================ */

  ouvirTecnicosOnline(callback) {

    return this.ouvirTecnicos((lista) => {

      callback(
        lista.filter((t) => t.online === true)
      );

    });

  }

  /* ============================================
     SERVIÇOS
  ============================================ */

  ouvirServicos(callback) {

    return onSnapshot(

      collection(db, "servicos"),

      (snapshot) => {

        const lista = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        callback(lista);

      }

    );

  }

  /* ============================================
     ALERTAS
  ============================================ */

  ouvirAlertas(callback) {

    return ouvirAlertas(callback);

  }

  /* ============================================
     GPS
  ============================================ */

  ouvirGps(callback) {

    return this.ouvirTecnicos(callback);

  }

  /* ============================================
     PRODUÇÃO
  ============================================ */

  ouvirProducao(callback) {

    return onSnapshot(

      collection(db, "producao"),

      (snapshot) => {

        const lista = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        callback(lista);

      }

    );

  }

  /* ============================================
     DASHBOARD COMPLETO
  ============================================ */

  ouvirDashboard(callback) {

    const dados = {

      tecnicos: [],
      cadastro: [],
      servicos: [],
      alertas: [],
      gps: [],
      producao: [],

    };

    const atualizar = () => {

      callback({
        ...dados,
      });

    };

    const stopGps = this.ouvirTecnicos((lista) => {

      dados.tecnicos = lista;
      dados.gps = lista;

      atualizar();

    });

    const stopCadastro =
      this.ouvirCadastroTecnicos((lista) => {

        dados.cadastro = lista;

        atualizar();

      });

    const stopServicos =
      this.ouvirServicos((lista) => {

        dados.servicos = lista;

        atualizar();

      });

    const stopAlertas =
      this.ouvirAlertas((lista) => {

        dados.alertas = lista;

        atualizar();

      });

    const stopProducao =
      this.ouvirProducao((lista) => {

        dados.producao = lista;

        atualizar();

      });

    return () => {

      stopGps();
      stopCadastro();
      stopServicos();
      stopAlertas();
      stopProducao();

    };

  }

}

export default new DashboardService();