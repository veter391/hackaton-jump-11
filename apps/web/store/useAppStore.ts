import { atom, useAtom } from 'jotai'

const AppAtom = atom("App context")

export const useAppStore = () => {
  const [appStore, setAppStore] = useAtom(AppAtom)

  return { appStore, setAppStore }
}