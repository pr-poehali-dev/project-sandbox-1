import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Морозов",
    role: "Частный инвестор, Москва",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Проверил стоимость трёх квартир перед покупкой. Оценка совпала с реальными ценами сделок — очень точный инструмент для быстрого анализа.",
  },
  {
    name: "Наталья Соколова",
    role: "Агент по недвижимости, Est Group",
    avatar: "/professional-woman-scientist.png",
    content:
      "Использую сервис для быстрой проверки объектов перед выездом. Экономит массу времени — данные всегда актуальные и понятные.",
  },
  {
    name: "Ирина Ван",
    role: "Собственник, продаёт квартиру в Бутово",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Хотела понять, не продешевлю ли я. Сервис дал диапазон и показал аналоги — теперь точно знаю, на какую цену ориентироваться.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят пользователи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Инвесторы, риелторы и обычные москвичи уже оценили своё жильё
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
