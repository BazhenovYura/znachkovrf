import Image from "next/image"

const products = [
  {
    title: "Золотые значки",
    subtitle: "Au 585 проба",
    description:
      "Значки из золота 585 пробы с вашим логотипом. Идеальны для награждения топ-менеджмента, юбилейных событий и представительских целей.",
    image: "/images/gold-badge.jpg",
    features: ["Золото 585 пробы", "Ручная полировка", "Пробирное клеймо", "Подарочная упаковка"],
  },
  {
    title: "Серебряные значки",
    subtitle: "Ag 925 проба",
    description:
      "Значки из серебра 925 пробы. Отличное решение для массовых корпоративных тиражей, сохраняющее премиальный вид и долговечность.",
    image: "/images/silver-badge.jpg",
    features: ["Серебро 925 пробы", "Родирование", "Сертификат", "Тираж от 50 шт."],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs tracking-widest text-gold uppercase">
            Продукция
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Два благородных металла,
            <span className="text-gold"> безграничные возможности</span>
          </h2>
        </div>

        <div className="mt-20 flex flex-col gap-20">
          {products.map((product, i) => (
            <div
              key={product.title}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={`relative aspect-[4/3] overflow-hidden rounded-sm ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-background/5" />
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-xs tracking-widest text-gold uppercase">
                  {product.subtitle}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                  {product.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <ul className="mt-8 grid grid-cols-2 gap-4">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-block rounded-sm border border-gold/30 px-6 py-3 text-sm font-semibold tracking-wider text-gold uppercase transition-colors hover:bg-gold hover:text-background"
                >
                  Запросить расчёт
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
