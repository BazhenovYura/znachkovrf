"use client"

import { useState } from "react"
import { Send, Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs tracking-widest text-gold uppercase">
              Связаться с нами
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              Обсудим ваш
              <span className="text-gold"> проект</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение 2 часов в рабочее время.
              Расскажите о вашей задаче — подготовим коммерческое предложение.
            </p>

            <div className="mt-12 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-gold/10 text-gold">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs tracking-wider text-muted-foreground uppercase">
                    Телефон
                  </div>
                  <a
                    href="tel:+79999999999"
                    className="mt-1 text-base font-medium text-foreground transition-colors hover:text-gold"
                  >
                    +7 (999) 999-99-99
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-gold/10 text-gold">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs tracking-wider text-muted-foreground uppercase">
                    Email
                  </div>
                  <a
                    href="mailto:info@znachkoff.ru"
                    className="mt-1 text-base font-medium text-foreground transition-colors hover:text-gold"
                  >
                    info@znachkoff.ru
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-gold/10 text-gold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs tracking-wider text-muted-foreground uppercase">
                    Адрес
                  </div>
                  <div className="mt-1 text-base font-medium text-foreground">
                    Москва, ул. Ювелирная, 1
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-border/50 bg-background p-8 lg:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                  <Send className="h-7 w-7 text-gold" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
                  Заявка отправлена
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Мы свяжемся с вами в ближайшее время для обсуждения деталей проекта.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Оставить заявку
                </h3>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs tracking-wider text-muted-foreground uppercase"
                  >
                    Имя *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="company"
                    className="text-xs tracking-wider text-muted-foreground uppercase"
                  >
                    Компания *
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    placeholder="Название компании"
                    className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-xs tracking-wider text-muted-foreground uppercase"
                    >
                      Телефон *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs tracking-wider text-muted-foreground uppercase"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="email@company.ru"
                      className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="material"
                    className="text-xs tracking-wider text-muted-foreground uppercase"
                  >
                    Материал
                  </label>
                  <select
                    id="material"
                    className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Выберите материал
                    </option>
                    <option value="gold">Золото 585 пробы</option>
                    <option value="silver">Серебро 925 пробы</option>
                    <option value="both">Золото + Серебро</option>
                    <option value="other">Нужна консультация</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs tracking-wider text-muted-foreground uppercase"
                  >
                    Описание проекта
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Расскажите о задаче: тираж, дизайн, сроки..."
                    className="resize-none rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/50"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-semibold tracking-wider text-background uppercase transition-colors hover:bg-gold-light"
                >
                  <Send className="h-4 w-4" />
                  Отправить заявку
                </button>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
