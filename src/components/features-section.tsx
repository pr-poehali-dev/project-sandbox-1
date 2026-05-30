import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Агрегация с площадок",
    description: "Автоматически собираем актуальные объявления с ЦИАН, Авито, Яндекс Недвижимости и других площадок — всё в одном запросе.",
    icon: "Database",
    badge: "Данные",
  },
  {
    title: "Оценка за 3 клика",
    description: "Введите адрес, выберите параметры квартиры — и получите рыночную стоимость. Никаких регистраций и долгих форм.",
    icon: "MousePointerClick",
    badge: "Быстро",
  },
  {
    title: "Только Москва",
    description: "Глубокая специализация на московском рынке: учитываем район, станцию метро, класс жилья и инфраструктуру.",
    icon: "MapPin",
    badge: "Москва",
  },
  {
    title: "ИИ-анализ рынка",
    description: "Модели машинного обучения анализируют тысячи аналогов и рассчитывают справедливую цену с учётом рыночных трендов.",
    icon: "BrainCircuit",
    badge: "ИИ",
  },
  {
    title: "Актуальные цены",
    description: "Данные обновляются ежедневно — оценка отражает реальное состояние рынка, а не устаревшие справочники.",
    icon: "RefreshCw",
    badge: "Онлайн",
  },
  {
    title: "Отчёт в один клик",
    description: "Готовый PDF-отчёт с аналогами, графиком цен и обоснованием стоимости — для себя или для переговоров.",
    icon: "FileText",
    badge: "Отчёт",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Как это работает</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Быстрая и точная оценка квартиры — без риелторов, без ожидания, без лишних действий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon name={feature.icon} size={28} className="text-red-500" fallback="Star" />
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
