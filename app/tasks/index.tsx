import { useTaskContext } from "@/components/context/use-task-context";
import { FocusButton } from "@/components/focus-button";
import { IconPlus } from "@/components/icons";
import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TaskItem } from "../task-item";

export default function Tasks() {
    const { deleteTask, toggleTaskCompleted, tasks } = useTaskContext()

    function addNewTask() {
        router.navigate('/add-task')
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.inner}>
                    <FlatList
                        data={tasks}
                        renderItem={({ item }) => (
                            <TaskItem
                                key={item.id}
                                completed={!!item.completed}
                                text={item.description}
                                onPressDelete={() => deleteTask(item.id)}
                                onPressEdit={() => router.navigate(`/edit-task/${item.id}` as any)}
                                onToggleComplete={() => toggleTaskCompleted(item.id)}
                            />
                        )}
                        ListEmptyComponent={() => (<Text style={styles.emptyListText}>Ainda não há tarefas na sua lista, que tal adicionar?</Text>)}
                        keyExtractor={(item) => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                        ListHeaderComponent={<Text style={styles.text}>Lista de tarefas:</Text>}
                        ListFooterComponent={<View style={{ marginTop: 16 }}><FocusButton
                            title="Adicionar nova tarefa"
                            icon={<IconPlus />}
                            outline
                            onPress={addNewTask}
                        /></View>}
                    />
                </View>
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
    },
    emptyListText: {
        fontSize: 24,
        textAlign: 'center',
        color: '#98A0A8'
    }
})