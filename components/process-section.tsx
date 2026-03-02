import Image from "next/image"
import { MessageSquare, Paintbrush, Factory, Package } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Бриф и консультация",
    description:
      "Обсуждаем задачу, материалы, тираж и сроки. Определяем технические параметры будущего значка.",
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "Дизайн и 3D-модель",
    description:
      "Создаём эскиз и 3D-модель значка. Согласовываем каждую деталь до запуска в производство.",
  },
  {
    number: "03",
    icon: Factory,
    title: "Производство",
    description:
      "Литьё, шлифовка, полировка, нанесение покрытия. Полный цикл на собственном производстве.",
  },
  {
    number: "04",
    icon: Package,
    title: "Контроль и доставка",
    description:
      "Проверка каждого изделия, упаковка в фирменные коробки и доставка в любую точку страны.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs tracking-widest text-gold uppercase">
              Процесс работы
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              От идеи до готового
              <span className="text-gold"> изделия</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Прозрачный процесс на каждом этапе. Вы всегда знаете, на какой стадии находится ваш заказ.
            </p>

            <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/crafting.jpg"
                alt="Процесс изготовления ювелирного значка"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/10" />
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:pt-16">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="group relative flex gap-6 rounded-sm border border-border/50 bg-card p-6 transition-all duration-300 hover:border-gold/30"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-gold/10 font-serif text-lg font-bold text-gold transition-colors group-hover:bg-gold/20">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute -bottom-4 left-12 h-4 w-px bg-gold/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
