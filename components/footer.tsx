import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                <span className="font-serif text-lg font-bold text-gold">З</span>
              </div>
              <span className="font-serif text-xl font-bold tracking-wide text-foreground">
                Значкофф
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Производство ювелирных значков премиум-класса из золота и серебра.
              Индивидуальный подход к каждому корпоративному заказу.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest text-gold uppercase">
              Навигация
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                О нас
              </a>
              <a href="#products" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                Продукция
              </a>
              <a href="#process" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                Процесс работы
              </a>
              <a href="#portfolio" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                Портфолио
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-xs tracking-widest text-gold uppercase">
              Контакты
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:+79999999999"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                +7 (999) 999-99-99
              </a>
              <a
                href="mailto:info@znachkoff.ru"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4" />
                info@znachkoff.ru
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Значкофф. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">
            Производство ювелирных изделий. ИНН 0000000000
          </p>
        </div>
      </div>
    </footer>
  )
}
