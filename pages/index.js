import Head from "next/head";
import CountButton from "../components/CountButton";
import GitHub from "../components/GitHub";
import Link from "next/link";


export default function Home() {
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
}

