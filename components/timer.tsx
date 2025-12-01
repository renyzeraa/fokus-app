import { StyleSheet, Text } from "react-native";

interface TimerProps {
    totalSeconds: number
}

export function Timer({ totalSeconds }: TimerProps) {
    const date = new Date(totalSeconds * 1000 * 60)
        .toLocaleTimeString('pt-BR',
            { minute: "2-digit", second: "2-digit" }
        )

    return (
        <Text style={styles.timer}>{date}</Text>
    )
}

const styles = StyleSheet.create({
    timer: {
        fontSize: 54,
        fontWeight: 800,
        color: '#ffffff',
        textAlign: 'center'
    }
})