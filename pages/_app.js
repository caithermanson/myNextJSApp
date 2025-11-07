import Head from 'next/head'
import CountButton from "../components/CountButton";
import GitHub from "../components/GitHub";
import Link from "next/link";

const App = () => {
    return (
        <div>
        <Head>
            <title>My NextJS App</title>
        </Head>

        <h1>
            Welcome to Caitlin's NextJS App!
        </h1>

        <CountButton />
        <CountButton />

        <GitHub />

        <p><Link href="/store">Fake Store</Link> Link</p>
    </div>
    )
}

export default App