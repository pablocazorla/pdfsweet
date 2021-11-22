import Head from "next/head";
import { useState, useCallback } from "react";
import Initial from "views/initial";
import Doc from "views/doc";

export default function Layout() {
  const [doc, setDoc] = useState(null);
  const [title, setTitle] = useState("PDF Sweet");

  const createDoc = useCallback((newDoc) => {
    setTitle(newDoc.config.name + " | PDF Sweet");
    setDoc(newDoc);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main id="main">
        {doc ? <Doc doc={doc} /> : <Initial createDoc={createDoc} />}
      </main>
    </>
  );
}
