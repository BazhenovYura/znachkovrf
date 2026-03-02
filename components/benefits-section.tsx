import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Собственное производство полного цикла",
  "Работаем с золотом 585 и серебром 925 пробы",
  "3D-моделирование и визуализация до запуска",
  "Тираж от 10 до 10 000 штук",
  "Нанесение логотипа любой сложности",
  "Горячая эмаль, холодная эмаль, гравировка",
  "Индивидуальная подарочная упаковка",
  "Сертификат подлинности на каждое изделие",
  "Доставка по всей России и СНГ",
  "Персональный менеджер проекта",
  "Гарантия на покрытие 5 лет",
  "NDA и полная конфиденциальность",
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs tracking-widest text-gold uppercase">
            Преимущества
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Всё для идеального
            <span className="text-gold"> результата</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-4 rounded-sm border border-border/30 bg-background/50 p-5 transition-all duration-300 hover:border-gold/20"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span className="text-sm leading-relaxed text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
