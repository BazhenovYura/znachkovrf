"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20">
      {/* Decorative gold line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gold/10" style={{ left: "10%" }} />
      <div className="absolute left-0 top-0 h-full w-px bg-gold/5" style={{ left: "90%" }} />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-sm border border-gold/20 bg-gold/5 px-4 py-2">
            <div className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs tracking-widest text-gold uppercase">
              Премиум производство
            </span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl text-balance">
            Ювелирные значки
            <span className="block text-gold">из золота и серебра</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Создаём уникальные корпоративные значки премиум-класса с логотипом вашей компании.
            Индивидуальный дизайн, ручная работа, драгоценные металлы.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="rounded-sm bg-gold px-8 py-4 text-center text-sm font-semibold tracking-wider text-background uppercase transition-colors hover:bg-gold-light"
            >
              Обсудить проект
            </a>
            <a
              href="#portfolio"
              className="rounded-sm border border-border px-8 py-4 text-center text-sm font-semibold tracking-wider text-foreground uppercase transition-colors hover:border-gold/50 hover:text-gold"
            >
              Смотреть работы
            </a>
          </div>

          <div className="mt-16 flex items-center gap-12">
            <div>
              <div className="font-serif text-3xl font-bold text-gold">500+</div>
              <div className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                Проектов
              </div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-serif text-3xl font-bold text-gold">12</div>
              <div className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                Лет опыта
              </div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-serif text-3xl font-bold text-gold">Au / Ag</div>
              <div className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                Проба 585 / 925
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-sm bg-gold/5" />
          <div className="relative aspect-square w-full max-w-lg overflow-hidden rounded-sm">
            <Image
              src="/images/hero-badge.jpg"
              alt="Премиальный золотой значок с корпоративным логотипом"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-background/10" />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold/60"
        aria-label="Прокрутить вниз"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
