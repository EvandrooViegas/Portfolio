import Gallery from "./Gallery";
import Home from "./Home";

export default async function Page() {
  return (
    <main className="flex flex-col gap-12">
      <Home />
      <Gallery />
    </main>
  )
}
