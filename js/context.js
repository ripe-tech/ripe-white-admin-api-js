export const ContextAPI = superclass =>
    class extends superclass {
        async listContexts(options) {
            const url = this.baseUrl + "contexts";
            const contents = await this.get(url, options);
            return contents;
        }

        async createContext(payload) {
            const url = this.baseUrl + "contexts";
            const contents = await this.post(url, { dataJ: payload });
            return contents;
        }

        async getContext(id) {
            const url = this.baseUrl + `contexts/${id}`;
            const contents = await this.get(url);
            return contents;
        }

        async updateContext(id, payload) {
            const url = this.baseUrl + `contexts/${id}`;
            const contents = await this.put(url, { dataJ: payload });
            return contents;
        }

        async deleteContext(id) {
            const url = this.baseUrl + `contexts/${id}`;
            const contents = await this.delete(url);
            return contents;
        }

        getStyleUrlContext(id) {
            return this.baseUrl + `contexts/${id}/style.css`;
        }
    };

export default ContextAPI;
