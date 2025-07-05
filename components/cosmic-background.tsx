"use client"

export function CosmicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Aurora Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/40 via-pink-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 via-purple-500/40 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Secondary Light Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-3000"></div>

      {/* Starfield */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
