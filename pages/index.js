import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kwingy is Launching soon</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Header title="Welcome to Kwingy" />
        <p className="description">
          Our Team is Finalizing and will be done in the next 24hours
        </p>
        <div id="smart-button-container">
      <div style="text-align: center;">
        <div id="paypal-button-container"></div>
      </div>
    </div>
  

        <iframe width="560" height="315" src="https://www.youtube.com/embed/6M6laYC0fow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </main>

      <Footer />
    </div>
  )
}
