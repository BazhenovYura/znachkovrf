export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Gold accent lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-px w-full bg-gold/10" />
      </div>
      <div className="absolute left-1/4 top-0 h-full w-px bg-gold/5" />
      <div className="absolute right-1/4 top-0 h-full w-px bg-gold/5" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs tracking-widest text-gold uppercase">
          Начните сейчас
        </span>
        <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
          Готовы создать уникальные
          <span className="block text-gold">значки для вашей компании?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Расскажите нам о вашем проекте. Мы подготовим визуализацию и коммерческое предложение
          в течение 48 часов.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-sm bg-gold px-10 py-4 text-sm font-semibold tracking-wider text-background uppercase transition-colors hover:bg-gold-light"
          >
            Обсудить проект
          </a>
          <a
            href="tel:+79999999999"
            className="rounded-sm border border-border px-10 py-4 text-sm font-semibold tracking-wider text-foreground uppercase transition-colors hover:border-gold/50 hover:text-gold"
          >
            Позвонить нам
          </a>
        </div>
      </div>
    </section>
  )
}
