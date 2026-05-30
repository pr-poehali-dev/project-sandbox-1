import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Icon from "@/components/ui/icon"

interface EstimateModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EstimateModal({ open, onOpenChange }: EstimateModalProps) {
  const [step, setStep] = useState(1)
  const [address, setAddress] = useState("")
  const [rooms, setRooms] = useState("")
  const [area, setArea] = useState("")
  const [floor, setFloor] = useState("")
  const [condition, setCondition] = useState("")
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleNext = () => {
    if (step === 1 && address.trim()) setStep(2)
  }

  const handleSubmit = () => {
    if (!rooms || !area) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDone(true)
    }, 2000)
  }

  const handleClose = (val: boolean) => {
    if (!val) {
      setStep(1)
      setAddress("")
      setRooms("")
      setArea("")
      setFloor("")
      setCondition("")
      setDone(false)
    }
    onOpenChange(val)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-zinc-950 border border-red-500/30 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-orbitron text-white">
            {done ? "Ваша заявка принята" : "Оценить квартиру"}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {done
              ? "Мы свяжемся с вами, как только сервис будет запущен."
              : step === 1
              ? "Укажите адрес квартиры в Москве"
              : "Уточните параметры для точной оценки"}
          </DialogDescription>
        </DialogHeader>

        {done ? (
          <div className="flex flex-col items-center py-6 gap-4">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
              <Icon name="CheckCircle" size={36} className="text-red-500" />
            </div>
            <p className="text-gray-300 text-center text-sm leading-relaxed">
              Спасибо! Когда сервис оценки будет готов — вы узнаете первыми.
            </p>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white w-full mt-2"
              onClick={() => handleClose(false)}
            >
              Закрыть
            </Button>
          </div>
        ) : step === 1 ? (
          <div className="flex flex-col gap-4 py-2">
            <div className="flex flex-col gap-2">
              <Label className="text-gray-300">Адрес квартиры</Label>
              <Input
                placeholder="Например: ул. Тверская, 10, кв. 5"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-500"
                onKeyDown={(e) => e.key === "Enter" && handleNext()}
              />
            </div>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white w-full"
              onClick={handleNext}
              disabled={!address.trim()}
            >
              Далее
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-4 py-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2">
                <Label className="text-gray-300">Комнат</Label>
                <Select value={rooms} onValueChange={setRooms}>
                  <SelectTrigger className="bg-zinc-900 border-zinc-700 text-white focus:border-red-500">
                    <SelectValue placeholder="Выберите" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-700 text-white">
                    <SelectItem value="studio">Студия</SelectItem>
                    <SelectItem value="1">1 комната</SelectItem>
                    <SelectItem value="2">2 комнаты</SelectItem>
                    <SelectItem value="3">3 комнаты</SelectItem>
                    <SelectItem value="4+">4 и более</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-gray-300">Площадь, м²</Label>
                <Input
                  placeholder="Например: 54"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  type="number"
                  className="bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-gray-300">Этаж</Label>
                <Input
                  placeholder="Например: 5"
                  value={floor}
                  onChange={(e) => setFloor(e.target.value)}
                  type="number"
                  className="bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-gray-300">Состояние</Label>
                <Select value={condition} onValueChange={setCondition}>
                  <SelectTrigger className="bg-zinc-900 border-zinc-700 text-white focus:border-red-500">
                    <SelectValue placeholder="Выберите" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-700 text-white">
                    <SelectItem value="new">Новостройка</SelectItem>
                    <SelectItem value="euro">Евроремонт</SelectItem>
                    <SelectItem value="good">Хорошее</SelectItem>
                    <SelectItem value="avg">Среднее</SelectItem>
                    <SelectItem value="raw">Без ремонта</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              <Button
                variant="outline"
                className="border-zinc-700 text-gray-300 hover:bg-zinc-800 bg-transparent"
                onClick={() => setStep(1)}
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад
              </Button>
              <Button
                className="bg-red-500 hover:bg-red-600 text-white flex-1"
                onClick={handleSubmit}
                disabled={!rooms || !area || loading}
              >
                {loading ? (
                  <>
                    <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                    Считаем...
                  </>
                ) : (
                  "Получить оценку"
                )}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
