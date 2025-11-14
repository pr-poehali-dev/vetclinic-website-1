import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const specialists = [
  {
    id: 1,
    name: 'Анна Петрова',
    specialty: 'Терапевт',
    experience: '15 лет',
    image: '👩‍⚕️'
  },
  {
    id: 2,
    name: 'Михаил Соколов',
    specialty: 'Хирург',
    experience: '12 лет',
    image: '👨‍⚕️'
  },
  {
    id: 3,
    name: 'Елена Волкова',
    specialty: 'Дерматолог',
    experience: '10 лет',
    image: '👩‍⚕️'
  },
  {
    id: 4,
    name: 'Дмитрий Орлов',
    specialty: 'Стоматолог',
    experience: '8 лет',
    image: '👨‍⚕️'
  }
];

const services = [
  {
    icon: 'Stethoscope',
    title: 'Терапия',
    description: 'Диагностика и лечение заболеваний'
  },
  {
    icon: 'Scissors',
    title: 'Хирургия',
    description: 'Плановые и экстренные операции'
  },
  {
    icon: 'Syringe',
    title: 'Вакцинация',
    description: 'Профилактика инфекционных заболеваний'
  },
  {
    icon: 'Activity',
    title: 'Диагностика',
    description: 'УЗИ, рентген, анализы'
  },
  {
    icon: 'Scissors',
    title: 'Груминг',
    description: 'Стрижка и уход за шерстью'
  },
  {
    icon: 'Pill',
    title: 'Стоматология',
    description: 'Лечение и профилактика зубов'
  }
];

const promotions = [
  {
    title: 'Первичный прием -20%',
    description: 'Скидка для новых клиентов на первую консультацию',
    discount: '20%',
    color: 'bg-green-100'
  },
  {
    title: 'Комплексная вакцинация',
    description: 'Выгодная цена на полный курс прививок',
    discount: '-15%',
    color: 'bg-orange-100'
  },
  {
    title: 'Чипирование питомца',
    description: 'При записи на стерилизацию - чипирование в подарок',
    discount: 'Подарок',
    color: 'bg-purple-100'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Мария Смирнова',
    pet: 'Кот Мурзик',
    rating: 5,
    text: 'Спасибо огромное доктору Анне! Мурзик был очень болен, но благодаря профессионализму и заботе врачей, он быстро пошел на поправку. Очень довольны!',
    date: 'Октябрь 2024'
  },
  {
    id: 2,
    name: 'Алексей Иванов',
    pet: 'Собака Рекс',
    rating: 5,
    text: 'Отличная клиника! Сделали сложную операцию нашему Рексу. Всё прошло успешно, врачи очень внимательные и опытные. Рекомендуем!',
    date: 'Сентябрь 2024'
  },
  {
    id: 3,
    name: 'Екатерина Попова',
    pet: 'Кошка Снежинка',
    rating: 5,
    text: 'Прекрасная атмосфера, чистота, доброжелательный персонал. Снежинка всегда боялась ветеринаров, но здесь чувствует себя спокойно. Наша любимая клиника!',
    date: 'Ноябрь 2024'
  },
  {
    id: 4,
    name: 'Дмитрий Козлов',
    pet: 'Хомяк Чип',
    rating: 5,
    text: 'Думали, что с хомячком никто не возьмется работать, но здесь приняли как родного! Грамотная консультация, эффективное лечение. Спасибо!',
    date: 'Октябрь 2024'
  }
];

const gallery = [
  {
    id: 1,
    url: 'https://cdn.poehali.dev/projects/58a0892d-26c2-4306-86d6-b04a3739c254/files/e2e4730f-65d0-4880-b970-8333244347eb.jpg',
    title: 'Наша ресепшн-зона',
    description: 'Комфортное пространство для ожидания'
  },
  {
    id: 2,
    url: 'https://cdn.poehali.dev/projects/58a0892d-26c2-4306-86d6-b04a3739c254/files/8ad987a4-b8e7-4dd8-9266-dbd406475743.jpg',
    title: 'Кабинет приема',
    description: 'Современное оборудование для диагностики'
  },
  {
    id: 3,
    url: 'https://cdn.poehali.dev/projects/58a0892d-26c2-4306-86d6-b04a3739c254/files/e762b4ed-6273-48b0-8170-5a60a9221450.jpg',
    title: 'Операционная',
    description: 'Стерильная среда для операций'
  }
];

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    petName: '',
    ownerName: '',
    phone: '',
    specialist: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Запись успешно создана! 🎉',
      description: `Мы ждем вас и ${formData.petName} ${formData.date} в ${formData.time}`,
    });
    setFormData({
      petName: '',
      ownerName: '',
      phone: '',
      specialist: '',
      date: '',
      time: '',
      notes: ''
    });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🐾</span>
            <span className="text-2xl font-bold text-primary">ВетКлиника</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#promotions" className="hover:text-primary transition-colors">Акции</a>
            <a href="#specialists" className="hover:text-primary transition-colors">Специалисты</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
          </nav>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full shadow-lg hover:shadow-xl transition-all">
                <Icon name="Calendar" size={18} className="mr-2" />
                Записаться
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Онлайн-запись на прием</DialogTitle>
                <DialogDescription>
                  Заполните форму, и мы свяжемся с вами для подтверждения
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="petName">Имя питомца *</Label>
                  <Input
                    id="petName"
                    required
                    value={formData.petName}
                    onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                    placeholder="Барсик"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ownerName">Ваше имя *</Label>
                  <Input
                    id="ownerName"
                    required
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="Иван Иванов"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialist">Специалист</Label>
                  <Select value={formData.specialist} onValueChange={(value) => setFormData({ ...formData, specialist: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите специалиста" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialists.map((spec) => (
                        <SelectItem key={spec.id} value={spec.name}>
                          {spec.name} - {spec.specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Дата *</Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Время *</Label>
                    <Input
                      id="time"
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Причина обращения</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Опишите симптомы или причину визита"
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full rounded-full">
                  Отправить заявку
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-secondary to-background opacity-60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Забота о здоровье ваших питомцев
              </h1>
              <p className="text-lg text-muted-foreground">
                Современная ветеринарная клиника с опытными врачами и новейшим оборудованием
              </p>
              <div className="flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="rounded-full shadow-lg">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Записаться на прием
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Онлайн-запись на прием</DialogTitle>
                      <DialogDescription>
                        Заполните форму, и мы свяжемся с вами для подтверждения
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="petName2">Имя питомца *</Label>
                        <Input
                          id="petName2"
                          required
                          value={formData.petName}
                          onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                          placeholder="Барсик"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ownerName2">Ваше имя *</Label>
                        <Input
                          id="ownerName2"
                          required
                          value={formData.ownerName}
                          onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone2">Телефон *</Label>
                        <Input
                          id="phone2"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="specialist2">Специалист</Label>
                        <Select value={formData.specialist} onValueChange={(value) => setFormData({ ...formData, specialist: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите специалиста" />
                          </SelectTrigger>
                          <SelectContent>
                            {specialists.map((spec) => (
                              <SelectItem key={spec.id} value={spec.name}>
                                {spec.name} - {spec.specialty}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date2">Дата *</Label>
                          <Input
                            id="date2"
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time2">Время *</Label>
                          <Input
                            id="time2"
                            type="time"
                            required
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes2">Причина обращения</Label>
                        <Textarea
                          id="notes2"
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="Опишите симптомы или причину визита"
                          rows={3}
                        />
                      </div>
                      <Button type="submit" className="w-full rounded-full">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" className="rounded-full">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/58a0892d-26c2-4306-86d6-b04a3739c254/files/7709fd00-2d1a-4707-8c41-3f90b5c87606.jpg"
                alt="Ветеринарная клиника"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">О нашей клинике</h2>
              <p className="text-lg text-muted-foreground">
                Более 15 лет мы заботимся о здоровье домашних животных. Наша команда — это профессиональные 
                ветеринары с большим опытом работы, которые искренне любят животных и делают всё возможное 
                для их здоровья и комфорта.
              </p>
              <div className="grid md:grid-cols-3 gap-8 pt-8">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">10 000+</div>
                  <div className="text-muted-foreground">счастливых питомцев</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground">скорая помощь</div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Фотогалерея клиники</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Посмотрите, как выглядит наша клиника изнутри
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((photo, index) => (
              <AnimateOnScroll key={photo.id} delay={100 + index * 100}>
                <Card className="overflow-hidden group hover:shadow-xl transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={photo.url} 
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{photo.title}</CardTitle>
                    <CardDescription>{photo.description}</CardDescription>
                  </CardHeader>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Наши услуги</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Полный спектр ветеринарных услуг для ваших любимцев
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimateOnScroll key={index} delay={100 + index * 100}>
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 border-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name={service.icon} className="text-primary" size={24} />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="promotions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Акции и специальные предложения</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Выгодные условия для наших клиентов
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <AnimateOnScroll key={index} delay={100 + index * 100}>
                <Card className={`${promo.color} border-0 hover:shadow-lg transition-all hover:-translate-y-1`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{promo.title}</CardTitle>
                      <Badge variant="secondary" className="text-lg font-bold">
                        {promo.discount}
                      </Badge>
                    </div>
                    <CardDescription className="text-foreground/80">
                      {promo.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="specialists" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Наши специалисты</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Команда профессионалов с большим опытом работы
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialists.map((specialist, index) => (
              <AnimateOnScroll key={specialist.id} delay={100 + index * 100}>
                <Card className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="text-7xl mb-4">{specialist.image}</div>
                    <CardTitle>{specialist.name}</CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="font-semibold text-primary">{specialist.specialty}</div>
                      <div className="text-sm">Опыт: {specialist.experience}</div>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Готовы позаботиться о вашем питомце?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Запишитесь на прием прямо сейчас и получите консультацию опытного ветеринара
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="rounded-full shadow-lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться онлайн
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Онлайн-запись на прием</DialogTitle>
                <DialogDescription>
                  Заполните форму, и мы свяжемся с вами для подтверждения
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="petName3">Имя питомца *</Label>
                  <Input
                    id="petName3"
                    required
                    value={formData.petName}
                    onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                    placeholder="Барсик"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ownerName3">Ваше имя *</Label>
                  <Input
                    id="ownerName3"
                    required
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="Иван Иванов"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone3">Телефон *</Label>
                  <Input
                    id="phone3"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialist3">Специалист</Label>
                  <Select value={formData.specialist} onValueChange={(value) => setFormData({ ...formData, specialist: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите специалиста" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialists.map((spec) => (
                        <SelectItem key={spec.id} value={spec.name}>
                          {spec.name} - {spec.specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date3">Дата *</Label>
                    <Input
                      id="date3"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time3">Время *</Label>
                    <Input
                      id="time3"
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes3">Причина обращения</Label>
                  <Textarea
                    id="notes3"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Опишите симптомы или причину визита"
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full rounded-full">
                  Отправить заявку
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Отзывы наших клиентов</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Что говорят о нас владельцы питомцев
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll key={testimonial.id} delay={100 + (index % 2) * 100}>
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.pet}</CardDescription>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <CardDescription className="text-foreground/80 leading-relaxed">
                      "{testimonial.text}"
                    </CardDescription>
                    <div className="text-sm text-muted-foreground mt-2">{testimonial.date}</div>
                  </CardHeader>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🐾</span>
                <span className="text-xl font-bold">ВетКлиника</span>
              </div>
              <p className="text-muted-foreground">
                Забота о здоровье ваших питомцев — наша главная миссия
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@vetklinika.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Режим работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Пн-Пт: 9:00 - 21:00</div>
                <div>Сб-Вс: 10:00 - 19:00</div>
                <div className="text-primary font-semibold">Скорая помощь: 24/7</div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 ВетКлиника. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}