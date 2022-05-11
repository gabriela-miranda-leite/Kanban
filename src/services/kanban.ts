import api from "./api";

interface loginProps {
  login: string;
  senha: string;
}

interface createCardProps {
  titulo: string;
  conteudo: string;
  lista: string;
}

interface cardProps {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
}

const KanbanApi = {
  async login({ login, senha }: loginProps) {
    api
      .post(`/login/`, { login, senha })
      .then(async (response) => {
        if (response.status) {
          return {
            data: response.data,
            ok: true,
          };
        }
        return {
          ok: false,
          message: response.data.message || "Erro",
        };
      })
      .catch((error) => ({
        ok: false,
        message: error.response.data.message || "Erro",
      }));
  },

  async createCard({ titulo, conteudo, lista }: createCardProps) {
    api
      .post(`/cards/`, { titulo, conteudo, lista })
      .then(async (response) => {
        if (response.status) {
          return {
            data: response.data,
            ok: true,
          };
        }
        return {
          ok: false,
          message: response.data.message || "Erro",
        };
      })
      .catch((error) => ({
        ok: false,
        message: error.response.data.message || "Erro",
      }));
  },

  async changeCard({ id, titulo, conteudo, lista }: cardProps) {
    api
      .put(`/cards/${id}`, { id, titulo, conteudo, lista })
      .then(async (response) => {
        if (response.status) {
          return {
            data: response.data,
            ok: true,
          };
        }
        return {
          ok: false,
          message: response.data.message || "Erro",
        };
      })
      .catch((error) => ({
        ok: false,
        message: error.response.data.message || "Erro",
      }));
  },

  async deleteCard(id: string) {
    api
      .delete(`/cards/${id}`)
      .then(async (response) => {
        if (response.status) {
          return {
            data: response.data,
            ok: true,
          };
        }
        return {
          ok: false,
          message: response.data.message || "Erro",
        };
      })
      .catch((error) => ({
        ok: false,
        message: error.response.data.message || "Erro",
      }));
  },

  async listCards() {
    api
      .get(`/cards/`)
      .then(async (response) => {
        if (response.status) {
          return {
            data: response.data,
            ok: true,
          };
        }
        return {
          ok: false,
          message: response.data.message || "Erro",
        };
      })
      .catch((error) => ({
        ok: false,
        message: error.response.data.message || "Erro",
      }));
  },
};

export default KanbanApi;
