import {ValuesType} from "./state/state";

export const repository = {
    getUserData: () => {
        const data = localStorage.getItem("_values");
        if (data) {
            return JSON.parse(data);
        }
    },
    setUserData: (values: ValuesType) => {
        localStorage.setItem("_values", JSON.stringify(values))
    }
}