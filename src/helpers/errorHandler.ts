import { errorMessages } from "./errorMessages";

export function getErrorMessage(code: number): string {
    return errorMessages[code.toString()] || "Error desconocido";
}