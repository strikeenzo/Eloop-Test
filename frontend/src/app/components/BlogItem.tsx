const BlogItem = () => {
  return (
    <div className='border-b-2 py-5 grid grid-cols-4'>
      <div className='col-span-4 md:col-span-3'>
        <span className='text-gray-400'>Apr 9, 2020</span>
        <h3 className='text-[20px] font-medium my-3'>
          Alle wichtigen Infos & Tipps zum Laden der ELOOP-Autos
        </h3>
        <p>
          Schritt für Schritt zum vollen Akku! Für viele Leute sind Elektroautos noch ungewohnt.
          Besonders mit dem Laden der Fahrzeuge haben die meisten noch keine Erfahrungen gemacht.
          Dabei kann man besonders in Wien das Laden und Parken hervorragend kombinieren und spart
          sich so oft die nervige Parkplatz-Sucherei. …
        </p>
      </div>
      <div className='col-span-4 md:col-span-1 mx-auto my-auto'>
        <img src='https://miro.medium.com/v2/resize:fill:112:112/1*b6nrizRSNL1bIPhaYCDwKg.jpeg' />
      </div>
    </div>
  )
}

export default BlogItem
