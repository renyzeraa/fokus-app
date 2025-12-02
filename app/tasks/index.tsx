import { FocusButton } from "@/components/focus-button";
import { IconPlus } from "@/components/icons";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { TaskItem } from "../task-item";

export default function Tasks() {
    function handleDelete() {

    }

    function handleEdit() {

    }

    function handleCompleted() {

    }

    function addNewTask() {
        router.navigate('/add-task')
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>Lista de tarefas:</Text>
                <View style={styles.inner}>
                    <TaskItem
                        completed
                        text='Estudar React'
                        onPressDelete={handleDelete}
                        onPressEdit={handleEdit}
                        onToggleComplete={handleCompleted}
                    />
                    <TaskItem
                        completed={false}
                        text='Estudar React Native'
                        onPressDelete={handleDelete}
                        onPressEdit={handleEdit}
                        onToggleComplete={handleCompleted}
                    />
                </View>
                <FocusButton
                    title="Adicionar nova tarefa"
                    icon={<IconPlus />}
                    outline
                    onPress={addNewTask}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        alignItems: 'center'
    },
    wrapper: {
        gap: 40,
        width: '90%'
    },
    text: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 26,
        marginBottom: 16
    },
    inner: {
        gap: 8
    }
})