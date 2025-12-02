import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext<TasksProviderProps | undefined>(undefined)

interface TasksProviderProps {
    tasks: Task[]
    addTask: (description: string) => void
    toggleTaskCompleted: (id: number) => void
    deleteTask: (id: number) => void
    updateTask: (id: number, newDescription: string) => void
}

export interface Task {
    description: string
    id: number
    completed?: boolean
}

const TASKS_STORAGE_KEY = 'focus-tasks';

export function TasksProvider({ children }: any) {
    const [tasks, setTasks] = useState<Task[]>([])
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    const addTask = (description: string) => {
        setTasks(state => [...state, {
            description, id: state.length + 1
        }])
    }

    const toggleTaskCompleted = (id: number) => {
        setTasks(oldState => oldState.map(task => {
            if (task.id === id) {
                task.completed = !task.completed
            }
            return task
        }))
    }

    const deleteTask = (id: number) => {
        setTasks(oldState => oldState.filter(task => task.id !== id))
    }

    const updateTask = (id: number, newDescription: string) => {
        setTasks(oldState =>
            oldState.map(t => {
                if (t.id === id) {
                    return { ...t, description: newDescription }
                }
                return t
            })
        )
    }

    useEffect(() => {
        const fetchData = async () => {
            const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
            const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
            setTasks(loadedData);
            setIsLoaded(true);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const storeData = async (value: Task[]) => {
            try {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonValue);
            } catch (e) {
                console.error(e)
            }
        };
        if (isLoaded) {
            storeData(tasks)
        }
    }, [tasks, isLoaded])

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleTaskCompleted, deleteTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    )
}