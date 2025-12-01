import { Pressable, StyleSheet, Text } from "react-native";

interface ActionButtonProps {
    active: boolean
    onPress: VoidFunction
    description: string
}

export function ActionButton({ active, onPress, description }: ActionButtonProps) {
    const activeStyle = active ? styles.contextButtonActive : null

    return (
        <Pressable
            style={activeStyle}
            onPress={onPress}
        >
            <Text style={styles.contextButtonText}>{description}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contextButtonText: {
        color: '#fff',
        fontSize: 12.5,
        padding: 8,
    },
    contextButtonActive: {
        backgroundColor: '#144480',
        fontWeight: 'bold',
        borderRadius: 8
    }
})