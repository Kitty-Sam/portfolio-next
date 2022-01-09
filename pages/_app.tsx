import NextNprogress from 'nextjs-progressbar';
import '../styles/global.css'


export default function MyApp({Component, pageProps}) {
    return (
        <>
            <NextNprogress
                color="#ffc107"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            <Component {...pageProps} />
        </>
    )}