import { Link } from 'react-router-dom'

export default function Donations() {
  return (
    <footer className="mt-5 flex justify-center items-center flex-col">
    <h2 className="text-center font-inter font-bold text-2xl">
      Donaciones
    </h2>
    <img
      src="JustinaLogo_2.png"
      width={150}
      height={150}
      alt="JustinaLogo"
    />
    <Link to={"/donations"}>
      <button className="my-4 bg-[#E08733] px-24 text-white font-inter py-3 rounded-lg">
        Acceder
      </button>
    </Link>
  </footer>
    )
}
