import Head from 'next/head'
import CountButton from "../components/CountButton"
import GitHub from "../components/GitHub"
import Link from "next/link"
import Store from "./store"
import '../styles/global.css'
import '../styles/CountButton.css'
import '../styles/SearchBar.css'
import { useRouter } from 'next/router'

const Page = () => {
    
    const router = useRouter()

    if (router.pathname === '/') {
    return (
    <div>
        <Head>
            <title>My NextJS App</title>
        </Head>

        <h1>
            Welcome to Caitlin's NextJS App!
        </h1>

        <CountButton incrementBy={1} buttonColor={'lightblue'}/>
        <CountButton incrementBy={2} buttonColor={'lightblue'}/>

        <GitHub />
        
        <p><Link href="/store">Fake Store</Link> Link</p>
    </div>
    )
    } else {
        return (
            <Store />
        )
    }
}
export default Page 
