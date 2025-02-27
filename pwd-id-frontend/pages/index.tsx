import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home page of the PWD ID application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Welcome to the PWD ID Application
        </h1>
        <h1>
          ANG IBUTANG DIRI KAY DROPDOWN SA MGA PROVINCE KUNG ASA GIKAN ANG CUSTOMERS, THEN INSIDE EACH PROVINCE KAY NAA PAY MGA CITY KUNG ASA SILA GIKAN THEN DIDTO NA TA MO FETCH SA DATABASE SA ILANG DATA CHUCHCHUCHUCHU
        </h1>
        <p className="description">
          Get started by uploading your PWD ID
        </p>
        <Link href="/verify" className="button">
        Go to Verify Page
        </Link>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .description {
          margin: 4rem 0;
          font-size: 1.5rem;
        }
        .button {
          padding: 1rem 2rem;
          font-size: 1.25rem;
          color: white;
          background-color: #0070f3;
          border: none;
          border-radius: 5px;
          text-decoration: none;
        }
        .button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}