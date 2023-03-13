import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import Head from "next/head"
export const MainLayout = ({children}) =>{
    return(
        <>
        <Head>
            <title>Events App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
            <main>{children}</main>
        <Footer/>
        </>
    )
}