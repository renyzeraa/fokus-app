import { Pressable, StyleSheet, Text } from "react-native";

interface FocusButtonProps {
    onPress: VoidFunction
    title: string
    icon?: () => React.JSX.Element
}

export function FocusButton({ onPress, title, icon: Icon }: FocusButtonProps) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            {Icon && <Icon />}
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#B872FF',
        borderRadius: 32,
        padding: 8,
        gap: 12,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#021123',
        fontWeight: 'bold',
        fontSize: 18
    },
})