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

const KanbanApi = {
  async login({ login, senha }: LoginProps) {
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

  async createCard({ titulo, conteudo, lista }: CreateCardProps) {
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

  async changeCard({ id, titulo, conteudo, lista }: CardProps) {
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
