import { ActionButton } from "@/components/action-button";
import { FocusButton } from "@/components/focus-button";
import { IconPause, IconPlay } from "@/components/icons";
import { Timer } from "@/components/timer";
import { useRef, useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

export interface Pomodoro {
  id: string;
  initialValue: number;
  image: ImageSourcePropType;
  description: string;
}

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    image: require('./assets/foco.png'),
    description: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    image: require('./assets/descanso-curto.png'),
    description: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15 * 60,
    image: require('./assets/descanso-longo.png'),
    description: 'Pausa longa'
  }
]

export default function Index() {
  const [timerType, setTimerType] = useState<Pomodoro>(pomodoro[0])
  const [timerRunning, setTimerRunning] = useState<boolean>(false)
  const [seconds, setSeconds] = useState<number>(pomodoro[0].initialValue)
  const timerRef = useRef<null | NodeJS.Timeout>(null)

  function clearCurrentTimer() {
    if (timerRef.current != null) {
      setTimerRunning(false)
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  function toggleTimerType(newTimerType: Pomodoro) {
    clearCurrentTimer()
    setSeconds(newTimerType.initialValue)
    setTimerType(newTimerType)
  }

  function toggleTimer() {
    if (timerRef.current) {
      clearCurrentTimer()
      return
    }

    setTimerRunning(true)

    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clearCurrentTimer()
          return timerType.initialValue
        }
        return oldState - 1
      })
    }, 1000)
    timerRef.current = id
  }

  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((item) => {
            const active = item.id === timerType.id
            return (
              <ActionButton
                key={item.id}
                active={active}
                onPress={() => toggleTimerType(item)}
                description={item.description}
              />
            )
          })}
        </View>
        <Timer totalSeconds={seconds} />
        <FocusButton
          title={timerRunning ? 'Pausar' : 'Começar'}
          icon={timerRunning ? IconPause : IconPlay}
          onPress={toggleTimer}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto fictício e sem fins comerciais.</Text>
        <Text style={styles.footerText}>Desenvolvido por Renan</Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 32
  },
  actions: {
    backgroundColor: '#14448080',
    paddingVertical: 24,
    paddingHorizontal: 24,
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  }
})