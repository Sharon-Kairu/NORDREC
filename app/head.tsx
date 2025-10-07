export default function Head() {
  return (
    <>
      <title>NORDREC - Northern Dryland Resource Centre</title>
      <meta name="description" content="Advancing sustainable dryland regeneration across Northern Kenya through training, research, and innovation." />

      {/* Open Graph */}
      <meta property="og:title" content="NORDREC - Northern Dryland Resource Centre" />
      <meta property="og:description" content="Empowering dryland communities with sustainable farming and regeneration practices." />
      <meta property="og:image" content="https://nordrec.org/logo-removebg-preview.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://nordrec.org/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="NORDREC" />

      {/* Twitter/X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="NORDREC - Northern Dryland Resource Centre" />
      <meta name="twitter:description" content="Empowering dryland communities with sustainable farming and regeneration practices." />
      <meta name="twitter:image" content="https://nordrec.org/logo-removebg-preview.png" />

      {/* favicon (optional) */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
