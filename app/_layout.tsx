import { TasksProvider } from '@/components/context/task-provider';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <TasksProvider>
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#021123'
          },
          headerTintColor: '#fff',
          drawerLabelStyle: {
            color: '#fff'
          },
          headerStyle: {
            backgroundColor: '#021123',
          }
        }}>
        <Drawer.Screen
          name='add-task/index'
          options={{
            drawerItemStyle: {
              display: 'none',
            },
            headerTitleStyle: {
              display: 'none'
            },
            headerLeft: () => {
              return <Ionicons
                name='arrow-back'
                color='#fff'
                size={24}
                style={{ marginLeft: 16 }}
                onPress={() => router.navigate('/tasks')}
              />
            }
          }}
        />
        <Drawer.Screen
          name='index'
          options={{
            headerShown: false,
            drawerItemStyle: {
              display: 'none'
            }
          }}
        />
        <Drawer.Screen
          name='pomodoro'
          options={{
            drawerLabel: 'Timer',
            headerTitleStyle: {
              display: 'none'
            }
          }}
        />
        <Drawer.Screen
          name='tasks/index'
          options={{
            drawerLabel: 'Lista de tarefas',
            headerTitleStyle: {
              display: 'none'
            }
          }}
        />
        <Drawer.Screen
          name='edit-task/[id]'
          options={{
            drawerItemStyle: {
              display: 'none',
            },
            headerTitleStyle: {
              display: 'none'
            },
            headerLeft: () => {
              return <Ionicons
                name='arrow-back'
                color='#fff'
                size={24}
                style={{ marginLeft: 16 }}
                onPress={() => router.navigate('/tasks')}
              />
            }
          }}
        />
      </Drawer>
    </TasksProvider>
  )
}