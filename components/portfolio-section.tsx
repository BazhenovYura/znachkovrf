import Image from "next/image"

const clients = [
  "Газпром",
  "Сбербанк",
  "Роснефть",
  "РЖД",
  "Лукойл",
  "Ростех",
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs tracking-widest text-gold uppercase">
            Портфолио
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Нам доверяют
            <span className="text-gold"> лидеры отрасли</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Среди наших клиентов — крупнейшие корпорации и государственные структуры
          </p>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {clients.map((client) => (
            <div
              key={client}
              className="flex h-16 items-center rounded-sm border border-border/30 bg-card px-8 text-sm font-semibold tracking-wider text-muted-foreground uppercase transition-all duration-300 hover:border-gold/30 hover:text-gold"
            >
              {client}
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-square overflow-hidden rounded-sm">
            <Image
              src="/images/gold-badge.jpg"
              alt="Золотые значки с логотипами"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-sm">
            <Image
              src="/images/collection.jpg"
              alt="Коллекция корпоративных значков"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-sm sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/silver-badge.jpg"
              alt="Серебряный значок с гравировкой"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
