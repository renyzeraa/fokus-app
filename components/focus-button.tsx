import { Pressable, StyleSheet, Text } from "react-native";

interface FocusButtonProps {
    onPress: VoidFunction
    title: string
    icon?: React.JSX.Element
    outline?: boolean
}

export function FocusButton({ onPress, title, icon: Icon, outline }: FocusButtonProps) {
    return (
        <Pressable style={[styles.button, outline && styles.outlineButton]} onPress={onPress}>
            {Icon}
            <Text style={[styles.buttonText, outline && styles.outlineButtonText]}>{title}</Text>
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
    outlineButton: {
        backgroundColor: 'transparent',
        borderColor: '#B872FF',
        borderWidth: 2
    },
    outlineButtonText: {
        color: '#B872FF',
    },
})