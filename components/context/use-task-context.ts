import { useContext } from "react";
import { TaskContext } from "./task-provider";

export function useTaskContext() {
    const context = useContext(TaskContext)

    if (!context) {
        throw new Error('Tentando acessar o contexto fora do Provider')
    }

    return context
}