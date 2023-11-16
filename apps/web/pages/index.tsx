import { useAppStore } from "@/store/useAppStore"
import { useEffect } from "react"
import {API} from '../lib/API'
export default function Home() {
  const {appStore} = useAppStore()
  console.log("APP STORE: ", appStore)
  useEffect(() => {
    API("/api/v1/ask","GET").then((res) => {console.log('API res: ', res)})
  },[])
  return(<div>Home screen</div>)
}
