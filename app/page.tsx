import { Hero, SearchBar, CustomFilter } from "@/components"

export default function Home() {
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
            <CustomFilter title="Fuel" />
            <CustomFilter title="Year" />

          </div>
        </div>
      </div>
    </main>
  )
}
