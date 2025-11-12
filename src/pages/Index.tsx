import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([80]);
  const [quality, setQuality] = useState('1080p');
  const [subtitle, setSubtitle] = useState('Русский');

  const movies = [
    {
      id: 1,
      title: 'Ночной Город',
      genre: 'Триллер',
      year: 2024,
      duration: '2ч 15м',
      rating: 8.5,
      image: 'https://cdn.poehali.dev/projects/da5eeb70-9b42-4fd0-b494-46e4f9a5956f/files/ef651f64-327d-4008-86a9-4c9d285eae9a.jpg',
      description: 'Напряженный триллер о детективе, раскрывающем преступления в темных переулках мегаполиса.'
    },
    {
      id: 2,
      title: 'Взрывная Волна',
      genre: 'Боевик',
      year: 2024,
      duration: '1ч 58м',
      rating: 7.8,
      image: 'https://cdn.poehali.dev/projects/da5eeb70-9b42-4fd0-b494-46e4f9a5956f/files/395216d6-2bb0-4431-922f-5fda27afe6d9.jpg',
      description: 'Захватывающий боевик с головокружительными спецэффектами и динамичным сюжетом.'
    },
    {
      id: 3,
      title: 'Киберпространство',
      genre: 'Фантастика',
      year: 2024,
      duration: '2ч 30м',
      rating: 9.1,
      image: 'https://cdn.poehali.dev/projects/da5eeb70-9b42-4fd0-b494-46e4f9a5956f/files/9a7a6724-df4d-4112-af50-8355ca9fbfe2.jpg',
      description: 'Погружение в футуристический мир высоких технологий и виртуальной реальности.'
    },
    {
      id: 4,
      title: 'Тень Прошлого',
      genre: 'Драма',
      year: 2023,
      duration: '2ч 5м',
      rating: 8.2,
      image: 'https://cdn.poehali.dev/projects/da5eeb70-9b42-4fd0-b494-46e4f9a5956f/files/ef651f64-327d-4008-86a9-4c9d285eae9a.jpg',
      description: 'Трогательная история о семейных тайнах и поиске истины.'
    },
    {
      id: 5,
      title: 'Огненный Рубеж',
      genre: 'Боевик',
      year: 2023,
      duration: '1ч 45м',
      rating: 7.5,
      image: 'https://cdn.poehali.dev/projects/da5eeb70-9b42-4fd0-b494-46e4f9a5956f/files/395216d6-2bb0-4431-922f-5fda27afe6d9.jpg',
      description: 'Адреналиновый экшен на грани возможного.'
    },
    {
      id: 6,
      title: 'Неоновый Рассвет',
      genre: 'Фантастика',
      year: 2023,
      duration: '2ч 20м',
      rating: 8.7,
      image: 'https://cdn.poehali.dev/projects/da5eeb70-9b42-4fd0-b494-46e4f9a5956f/files/9a7a6724-df4d-4112-af50-8355ca9fbfe2.jpg',
      description: 'Визуально потрясающее путешествие в будущее человечества.'
    }
  ];

  const genres = ['Все', 'Боевик', 'Драма', 'Триллер', 'Фантастика', 'Комедия', 'Ужасы'];
  const [activeGenre, setActiveGenre] = useState('Все');

  const filteredMovies = activeGenre === 'Все' 
    ? movies 
    : movies.filter(m => m.genre === activeGenre);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Film" size={28} />
              КИНОЗАЛ
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="text-muted-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#genres" className="text-muted-foreground hover:text-primary transition-colors">Жанры</a>
              <a href="#new" className="text-muted-foreground hover:text-primary transition-colors">Новинки</a>
              <a href="#collections" className="text-muted-foreground hover:text-primary transition-colors">Подборки</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Bell" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section className="relative h-[70vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${movies[0].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl space-y-6 animate-fade-in">
              <Badge className="bg-primary text-primary-foreground">Хит сезона</Badge>
              <h2 className="text-6xl font-bold">{movies[0].title}</h2>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                  {movies[0].rating}
                </span>
                <span>{movies[0].year}</span>
                <span>{movies[0].duration}</span>
                <Badge variant="outline">{movies[0].genre}</Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-xl">
                {movies[0].description}
              </p>
              <div className="flex items-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => setSelectedVideo(movies[0])}
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Мой список
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="genres" className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-8">Жанры</h3>
          <div className="flex gap-3 overflow-x-auto pb-4">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={activeGenre === genre ? 'default' : 'outline'}
                onClick={() => setActiveGenre(genre)}
                className="whitespace-nowrap"
              >
                {genre}
              </Button>
            ))}
          </div>
        </section>

        <section id="catalog" className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">Каталог фильмов</h3>
            <Button variant="ghost" className="gap-2">
              <Icon name="SlidersHorizontal" size={20} />
              Фильтры
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMovies.map((movie) => (
              <Card 
                key={movie.id}
                className="group cursor-pointer overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                onClick={() => setSelectedVideo(movie)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                          <Icon name="Play" size={24} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="font-bold text-lg">{movie.title}</h4>
                    <div className="flex items-center gap-1 text-accent">
                      <Icon name="Star" size={16} className="fill-accent" />
                      <span className="text-sm font-semibold">{movie.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{movie.year}</span>
                    <span>•</span>
                    <span>{movie.duration}</span>
                    <span>•</span>
                    <Badge variant="secondary" className="text-xs">{movie.genre}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="new" className="container mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold mb-8">Новинки 2024</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {movies.filter(m => m.year === 2024).map((movie) => (
              <Card 
                key={movie.id}
                className="group cursor-pointer overflow-hidden bg-card border-border hover:border-primary transition-all"
                onClick={() => setSelectedVideo(movie)}
              >
                <div className="relative aspect-[2/3] overflow-hidden">
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="collections" className="container mx-auto px-4 py-12 mb-20">
          <h3 className="text-3xl font-bold mb-8">Популярные подборки</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-primary/20 to-background border-primary/50">
              <Icon name="TrendingUp" size={32} className="text-primary mb-4" />
              <h4 className="text-2xl font-bold mb-2">Топ 10 недели</h4>
              <p className="text-muted-foreground mb-4">Самые популярные фильмы за последние 7 дней</p>
              <Button variant="outline">Смотреть подборку</Button>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-accent/20 to-background border-accent/50">
              <Icon name="Award" size={32} className="text-accent mb-4" />
              <h4 className="text-2xl font-bold mb-2">Призеры фестивалей</h4>
              <p className="text-muted-foreground mb-4">Награжденные фильмы международных кинофестивалей</p>
              <Button variant="outline">Смотреть подборку</Button>
            </Card>
          </div>
        </section>
      </main>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-6xl h-[90vh] p-0 bg-background border-border">
          {selectedVideo && (
            <div className="h-full flex flex-col">
              <div className="relative aspect-video bg-black">
                <img 
                  src={selectedVideo.image} 
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button 
                    size="lg"
                    className="w-20 h-20 rounded-full bg-primary hover:bg-primary/90"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} size={32} className={isPlaying ? "" : "ml-1"} />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <div className="flex items-center gap-4 mb-4">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <Icon name="SkipForward" size={20} />
                    </Button>
                    <div className="flex items-center gap-2 ml-auto">
                      <Icon name="Volume2" size={20} className="text-white" />
                      <Slider 
                        value={volume}
                        onValueChange={setVolume}
                        max={100}
                        step={1}
                        className="w-24"
                      />
                    </div>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <Icon name="Settings" size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <Icon name="Maximize" size={20} />
                    </Button>
                  </div>
                  <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/3" />
                  </div>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{selectedVideo.title}</h2>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Star" size={18} className="text-accent fill-accent" />
                            {selectedVideo.rating}
                          </span>
                          <span>{selectedVideo.year}</span>
                          <span>{selectedVideo.duration}</span>
                          <Badge>{selectedVideo.genre}</Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="icon">
                        <Icon name="Plus" size={20} />
                      </Button>
                    </div>
                    <p className="text-muted-foreground">{selectedVideo.description}</p>
                  </div>

                  <Tabs defaultValue="quality" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="quality">Качество</TabsTrigger>
                      <TabsTrigger value="subtitles">Субтитры</TabsTrigger>
                    </TabsList>
                    <TabsContent value="quality" className="space-y-2">
                      {['4K', '1080p', '720p', '480p'].map((q) => (
                        <Button
                          key={q}
                          variant={quality === q ? 'default' : 'outline'}
                          className="w-full justify-start"
                          onClick={() => setQuality(q)}
                        >
                          <Icon name="MonitorPlay" size={18} className="mr-2" />
                          {q}
                          {quality === q && <Icon name="Check" size={18} className="ml-auto" />}
                        </Button>
                      ))}
                    </TabsContent>
                    <TabsContent value="subtitles" className="space-y-2">
                      {['Русский', 'English', 'Español', 'Без субтитров'].map((sub) => (
                        <Button
                          key={sub}
                          variant={subtitle === sub ? 'default' : 'outline'}
                          className="w-full justify-start"
                          onClick={() => setSubtitle(sub)}
                        >
                          <Icon name="Subtitles" size={18} className="mr-2" />
                          {sub}
                          {subtitle === sub && <Icon name="Check" size={18} className="ml-auto" />}
                        </Button>
                      ))}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
