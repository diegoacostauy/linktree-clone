import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Linktree clone with Next, Typescript and Tailwindcss" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className="">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
}
