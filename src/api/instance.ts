import axios from "axios";

const configureInstance = (instanceUrl: string) => ({
    baseURL: `${
        import.meta.env.DEV
            ? import.meta.env.VITE_DEVELOPMENT_SERVER
            : import.meta.env.VITE_PRODUCTION_SERVER
    }/api/${import.meta.env.VITE_API_VERSION}/${instanceUrl}`,
    setTimeout: 1000,
});

export const instance = axios.create(
    configureInstance(``)
);
