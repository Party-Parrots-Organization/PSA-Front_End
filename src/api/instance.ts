import axios from "axios";

const configureInstance = (instanceUrl: string, withCredentials?: boolean) => ({
    baseURL: `${
        import.meta.env.DEV
            ? import.meta.env.VITE_DEVELOPMENT_SERVER
            : import.meta.env.VITE_PRODUCTION_SERVER
    }/api/${import.meta.env.VITE_API_VERSION}/${instanceUrl}`,
    setTimeout: 1000,
    withCredentials: withCredentials,
});

export const generalInstance = axios.create(configureInstance("/", false));
