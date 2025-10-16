import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const crafts = [
    {
      title: "Гончарное дело",
      description: "Традиционное изготовление керамической посуды и изделий",
      icon: "Circle"
    },
    {
      title: "Ткачество",
      description: "Создание тканей на традиционных ткацких станках",
      icon: "Box"
    },
    {
      title: "Резьба по дереву",
      description: "Художественная обработка древесины",
      icon: "Trees"
    },
    {
      title: "Роспись",
      description: "Традиционная роспись по дереву и керамике",
      icon: "Paintbrush"
    }
  ];

  const events = [
    {
      title: "Мастер-класс по гончарному делу",
      date: "25 октября 2025",
      time: "14:00",
      description: "Научитесь создавать керамические изделия своими руками"
    },
    {
      title: "Фестиваль народных ремесел",
      date: "2 ноября 2025",
      time: "10:00",
      description: "Большой праздник традиционного творчества"
    },
    {
      title: "Выставка народных костюмов",
      date: "10 ноября 2025",
      time: "12:00",
      description: "Коллекция аутентичных традиционных костюмов"
    }
  ];

  const tours = [
    {
      title: "Обзорная экскурсия",
      duration: "1 час",
      price: "500 руб",
      description: "Знакомство со всеми мастерскими и экспозициями"
    },
    {
      title: "Мастер-класс + экскурсия",
      duration: "2 часа",
      price: "1200 руб",
      description: "Экскурсия с практическим занятием по выбранному ремеслу"
    },
    {
      title: "Детская экскурсия",
      duration: "45 минут",
      price: "300 руб",
      description: "Интерактивная программа для детей от 5 до 12 лет"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80 border-b border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-2xl">🏺</span>
              </div>
              <h1 className="text-2xl font-bold text-primary-foreground">Живинка в деле</h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Главная" },
                { id: "crafts", label: "Ремесла" },
                { id: "events", label: "Мероприятия" },
                { id: "tours", label: "Экскурсии" },
                { id: "gallery", label: "Галерея" },
                { id: "about", label: "О нас" },
                { id: "contacts", label: "Контакты" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-primary-foreground hover:text-accent transition-colors ${
                    activeSection === item.id ? "text-accent font-semibold" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button variant="outline" className="md:hidden bg-primary-foreground text-primary">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-secondary rotate-45"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 border-4 border-primary opacity-30 rounded-lg rotate-3"></div>
                <h2 className="text-5xl md:text-7xl font-bold text-primary relative">
                  Дом ремесел
                </h2>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Сохраняем традиции народного творчества и передаем мастерство из поколения в поколение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-secondary text-primary-foreground"
                onClick={() => scrollToSection("tours")}
              >
                Записаться на экскурсию
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("events")}
              >
                Мероприятия
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="crafts" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="border-4 border-primary px-6 py-2 rotate-1">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">Наши ремесла</h2>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мастерские, где живут древние традиции народного творчества
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crafts.map((craft, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden hover:shadow-lg transition-shadow border-2 border-primary/20 hover:border-primary/40"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/30 rounded-bl-full"></div>
                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={craft.icon} size={32} className="text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center text-xl">{craft.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{craft.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="border-4 border-secondary px-6 py-2 -rotate-1">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">Мероприятия</h2>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Праздники, мастер-классы и выставки народного творчества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="border-2 border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Calendar" size={20} className="text-secondary" />
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{event.time}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{event.description}</CardDescription>
                  <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="border-4 border-primary px-6 py-2 rotate-1">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">Экскурсии</h2>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Познавательные туры по мастерским и экспозициям
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tours.map((tour, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{tour.title}</CardTitle>
                  <div className="flex justify-center gap-4 text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Wallet" size={16} />
                      <span>{tour.price}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">{tour.description}</CardDescription>
                  <Button className="w-full bg-primary hover:bg-secondary">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="border-4 border-secondary px-6 py-2 -rotate-1">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">Галерея</h2>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Работы наших мастеров и участников мастер-классов
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div 
                key={item}
                className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg hover:scale-105 transition-transform cursor-pointer border-2 border-primary/10 hover:border-primary/30 flex items-center justify-center"
              >
                <Icon name="Image" size={48} className="text-primary/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <div className="border-4 border-primary px-6 py-2 rotate-1">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary">О нас</h2>
                </div>
              </div>
            </div>

            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-center mb-6">
                    Дом ремесел "Живинка в деле" — это центр сохранения и развития традиционных народных промыслов.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon name="Users" size={32} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Опытные мастера</h3>
                      <p className="text-muted-foreground">Профессионалы своего дела с многолетним опытом</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon name="Award" size={32} className="text-secondary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Традиции</h3>
                      <p className="text-muted-foreground">Бережное сохранение народных техник и методов</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon name="Heart" size={32} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Душа в работе</h3>
                      <p className="text-muted-foreground">Каждое изделие создается с любовью и вниманием</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <div className="border-4 border-secondary px-6 py-2 -rotate-1">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary">Контакты</h2>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Народная, д. 10</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@zhivinka.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Вс: 10:00 - 20:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20">
                <CardHeader>
                  <CardTitle>Мы в соцсетях</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <Icon name="MessageCircle" size={20} />
                    Telegram
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <Icon name="Share2" size={20} />
                    ВКонтакте
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <Icon name="Instagram" size={20} />
                    Instagram
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <Icon name="Youtube" size={20} />
                    YouTube
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 border-t-4 border-accent">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Дом ремесел "Живинка в деле"</p>
            <p className="text-sm opacity-80">Сохраняем традиции народного творчества</p>
            <div className="mt-4 pt-4 border-t border-primary-foreground/20">
              <p className="text-xs opacity-60">© 2025 Все права защищены</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
