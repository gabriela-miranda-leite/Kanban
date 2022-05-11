import api from "./api";

interface LoginProps {
  login: string;
  senha: string;
}

interface CreateCardProps {
  titulo: string;
  conteudo: string;
  lista: string;
}

interface CardProps {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
}

if (typeof window !== "undefined") {
  api.defaults.headers.common.Authorization = `JWT ${localStorage.getItem(
    "token"
  )}`;
}

const KanbanApi = {
  async login({ login, senha }: LoginProps) {
    return api
      .post(`/login/`, { login, senha })
      .then(async (response) => {
        if (response.status) {
          localStorage.setItem("token", response.data);
          return {
            data: response,
            ok: true,
          };
        }
        return {
          ok: false,
          message: response?.data.message || "erro",
          data: [],
        };
      })
      .catch((error) => ({
        ok: false,
        data: error.response?.data,
        message: error.response?.message || "erro",
      }));
  },

  async createCard({ titulo, conteudo, lista }: CreateCardProps) {
    return api
      .post(`/cards/`, { titulo, conteudo, lista })
      .then(async (response) => {
        if (response.status) {
          return {
            data: response,
            ok: true,
          };
        }
        return {
          ok: false,
          message: response?.data.message || "erro",
          data: [],
        };
      })
      .catch((error) => ({
        ok: false,
        data: error.response?.data,
        message: error.response?.message || "erro",
      }));
  },

  async changeCard({ id, titulo, conteudo, lista }: CardProps) {
    return api
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
          message: response?.data.message || "erro",
          data: [],
        };
      })
      .catch((error) => ({
        ok: false,
        data: error.response?.data,
        message: error.response?.message || "erro",
      }));
  },

  async deleteCard(id: string) {
    return api
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
          message: response?.data.message || "erro",
          data: [],
        };
      })
      .catch((error) => ({
        ok: false,
        data: error.response?.data,
        message: error.response?.message || "erro",
      }));
  },

  async listCards() {
    return api
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
          message: response?.data.message || "erro",
          data: [],
        };
      })
      .catch((error) => ({
        ok: false,
        data: error.response?.data,
        message: error.response?.message || "erro",
      }));
  },
};

export default KanbanApi;
