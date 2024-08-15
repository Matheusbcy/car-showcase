import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components"
import { fuels, manufacturers, yearsOfProduction } from "@/constants"
import { fetchCars } from "@/utils"

export default async function Home({ searchParams }) {
  console.log(searchParams)
  const allCars = await fetchCars({ 
    manufacturers: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  })

  const isDataEmpt = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__textcontainer">
          <h1 className="text-4xl font-extrabold">Catálogos de Carros</h1>
          <p>Explore os carros que você pode gostar.</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Fuel" options={fuels}/>
            <CustomFilter title="Year" options={yearsOfProduction}/>

          </div>
        </div>

        {!isDataEmpt ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) =>
                <CarCard car={car} />
              )}
            </div>
            <ShowMore pageNumber={(searchParams.limit || 10) / 10} isNext={(searchParams.limit || 10) > allCars.length}/>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, sem resultados.</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
