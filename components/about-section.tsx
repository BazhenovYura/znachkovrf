import { Shield, Award, Gem, Clock } from "lucide-react"

const features = [
  {
    icon: Gem,
    title: "Драгоценные металлы",
    description:
      "Используем золото 585 пробы и серебро 925 пробы. Каждое изделие сопровождается сертификатом качества и пробирным клеймом.",
  },
  {
    icon: Award,
    title: "Индивидуальный дизайн",
    description:
      "Разрабатываем уникальный дизайн под бренд вашей компании. 3D-моделирование и утверждение макета перед запуском.",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description:
      "Полный контроль на каждом этапе. Гарантия на покрытие и конструкцию. Замена при обнаружении дефектов.",
  },
  {
    icon: Clock,
    title: "Сроки от 14 дней",
    description:
      "Собственное производство позволяет выполнять заказы в кратчайшие сроки без посредников и задержек.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs tracking-widest text-gold uppercase">
            Почему мы
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Производство, которому
            <span className="text-gold"> доверяют</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Более 12 лет мы создаём ювелирные значки для крупнейших компаний России.
            Собственное производство и контроль качества на каждом этапе.
          </p>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-sm border border-border/50 bg-card p-8 transition-all duration-300 hover:border-gold/30 hover:bg-gold/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
