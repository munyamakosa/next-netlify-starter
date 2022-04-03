import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kwingy Living in Abundance</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Header title="Welcome to Kwingy" />
        <p className="description">
          The way you Shop is About to Change <code>and we can't wait too.</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
