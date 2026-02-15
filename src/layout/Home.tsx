import { useNavigate } from "react-router-dom"
// import PropsDriling from "../pages/PropsDriling"

const colors = [
  "bg-gradient-to-br from-purple-600 to-indigo-700",
  "bg-gradient-to-br from-pink-600 to-rose-700",
  "bg-gradient-to-br from-blue-600 to-cyan-700",
  "bg-gradient-to-br from-green-600 to-emerald-700",
  "bg-gradient-to-br from-orange-500 to-red-600",
  "bg-gradient-to-br from-teal-600 to-sky-700"
]

const cards = [
  { id: 1, title: "Counter Project", path: "/count" },
  { id: 1, title: "Toggle Project", path: "/toggle" },

].map(card => ({
  ...card,
  color: colors[Math.floor(Math.random() * colors.length)]
}))

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-[#111] flex items-center justify-center p-10">     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cards.map(card => (
          <div
            key={card.id}
            onClick={() => navigate(card.path)}
            className={`
              cursor-pointer
              backdrop-blur-xl
              bg-white/10
              border border-white/20
              shadow-xl
              rounded-2xl
              p-8
              text-white
              transition-all duration-500
              hover:-translate-y-4
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]
              ${card.color}
            `}
          >
            <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
            <p className="text-sm opacity-80">
              Click to open {card.title}
            </p>
          </div>
        ))}
      </div>
      {/* <PropsDriling name="john doe" age={23} /> */}
    </div>
  )
}

export default Home