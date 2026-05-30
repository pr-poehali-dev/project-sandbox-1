import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Откуда берутся данные для оценки?",
      answer:
        "Мы агрегируем актуальные объявления о продаже квартир с крупнейших российских площадок: ЦИАН, Авито, Яндекс Недвижимость и других. Данные обновляются ежедневно.",
    },
    {
      question: "Насколько точна оценка?",
      answer:
        "Точность зависит от количества аналогов в районе. В большинстве районов Москвы погрешность составляет 3–7%. Мы всегда показываем диапазон цен и количество объявлений-аналогов.",
    },
    {
      question: "Нужно ли регистрироваться?",
      answer:
        "Нет. Базовая оценка доступна без регистрации. Для скачивания PDF-отчёта и сохранения истории оценок потребуется создать аккаунт.",
    },
    {
      question: "Сервис работает только по Москве?",
      answer:
        "На данный момент — только Москва и ближайшее Подмосковье. Это позволяет нам поддерживать высокое качество данных. Другие регионы — в планах развития.",
    },
    {
      question: "Чем сервис отличается от оценки на ЦИАН?",
      answer:
        "Мы собираем данные сразу с нескольких площадок и применяем ИИ-модель, которая учитывает реальные факторы: этаж, состояние, тип дома, инфраструктуру. ЦИАН показывает только свои объявления без аналитики.",
    },
    {
      question: "Можно ли использовать оценку для банка или сделки?",
      answer:
        "Наш сервис предоставляет рыночный ориентир, а не официальный отчёт оценщика. Для ипотеки или суда нужна оценка лицензированного специалиста. Мы помогаем понять рынок перед принятием решения.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что нужно знать о сервисе оценки квартир в Москве.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
