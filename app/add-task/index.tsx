import { useTaskContext } from "@/components/context/use-task-context";
import { IconSave } from "@/components/icons";
import { router } from "expo-router";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

export default function AddTask() {
    const [description, setDescription] = useState<string>('')
    const { addTask } = useTaskContext()

    const submitTask = () => {
        if (!description) {
            return
        }
        addTask(description)
        setDescription('')
        router.navigate('/tasks')
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, width: '100%', alignItems: 'center', gap: 32 }}>
                    <Text style={styles.text}>
                        Adicionar uma tarefa:
                    </Text>
                    <View style={styles.inner}>
                        <Text style={styles.label}>
                            No que você está trabalhando?
                        </Text>
                        <TextInput
                            style={styles.input}
                            numberOfLines={10}
                            multiline={true}
                            value={description}
                            onChangeText={(text) => setDescription(text)}
                        />
                        <View style={styles.actions}>
                            <Pressable style={styles.button} onPress={submitTask}>
                                <IconSave />
                                <Text>
                                    Salvar
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        gap: 16,
        alignItems: 'center'
    },
    text: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 26
    },
    inner: {
        backgroundColor: '#98A0A8',
        width: '90%',
        borderRadius: 8,
        padding: 16,
        gap: 32
    },
    label: {
        fontWeight: 600,
        fontSize: 18
    },
    input: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        height: 100
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})