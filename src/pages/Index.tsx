import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/6a174b0e-6ca2-47a3-ab4c-c0844a261f30/files/30f85fa9-0e47-4d74-8414-695bb93818f8.jpg";
const FOOD_IMG = "https://cdn.poehali.dev/projects/6a174b0e-6ca2-47a3-ab4c-c0844a261f30/files/42fe32c2-d332-48a2-8691-4c172508a509.jpg";
const CHEF_IMG = "https://cdn.poehali.dev/projects/6a174b0e-6ca2-47a3-ab4c-c0844a261f30/files/af35cf80-9e05-4b68-b5c4-a0b772dc4a9f.jpg";

const NAV_LINKS = [
  { label: "Меню", href: "#menu" },
  { label: "О нас", href: "#about" },
  { label: "Галерея", href: "#gallery" },
  { label: "Команда", href: "#team" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Резервация", href: "#reservation" },
];

const MENU_CATEGORIES = [
  {
    name: "Закуски",
    items: [
      { name: "Тартар из лосося", desc: "Авокадо, икра, микрозелень", price: "980 ₽" },
      { name: "Фуа-гра на бриоши", desc: "Инжировый конфитюр, флёр де сель", price: "1 450 ₽" },
      { name: "Карпаччо из говядины", desc: "Пармезан, руккола, трюфельное масло", price: "1 200 ₽" },
    ],
  },
  {
    name: "Основные блюда",
    items: [
      { name: "Филе утки", desc: "Соус из вишни, пюре из пастернака", price: "2 100 ₽" },
      { name: "Морской окунь", desc: "Фенхель, томаты конкасе, шафрановый бульон", price: "2 400 ₽" },
      { name: "Рибай на углях", desc: "Картофель Дофинуа, соус Борделез", price: "3 200 ₽" },
    ],
  },
  {
    name: "Десерты",
    items: [
      { name: "Шоколадный фондан", desc: "Ваниль Бурбон, ягодный соус", price: "680 ₽" },
      { name: "Крем-брюле", desc: "Лаванда, свежие ягоды", price: "580 ₽" },
      { name: "Тарт Татен", desc: "Яблоко, карамель, мороженое", price: "720 ₽" },
    ],
  },
];

const GALLERY_ITEMS = [
  { img: HERO_IMG, label: "Интерьер" },
  { img: FOOD_IMG, label: "Кухня" },
  { img: CHEF_IMG, label: "Команда" },
  { img: HERO_IMG, label: "Атмосфера" },
  { img: FOOD_IMG, label: "Блюда" },
  { img: CHEF_IMG, label: "Мастерство" },
];

const TEAM = [
  { name: "Александр Морeau", role: "Шеф-повар", img: CHEF_IMG, bio: "20 лет опыта в Париже и Милане. Ученик Пьера Ганьера." },
  { name: "Мария Соколова", role: "Су-шеф", img: CHEF_IMG, bio: "Специалист по классической французской технике." },
  { name: "Дмитрий Лаврентьев", role: "Сомелье", img: CHEF_IMG, bio: "Сертифицированный сомелье WSET Level 4." },
];

const REVIEWS = [
  { name: "Анна К.", text: "Безупречный вечер. Каждое блюдо — произведение искусства. Обязательно вернёмся.", stars: 5 },
  { name: "Михаил Р.", text: "Лучший ресторан Москвы по соотношению качества и атмосферы. Рибай — выше всяких похвал.", stars: 5 },
  { name: "Елена В.", text: "Отмечали годовщину. Персонал предусмотрел каждую деталь. Незабываемо.", stars: 5 },
];

const TIME_SLOTS = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

export default function Index() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2" });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-cream font-golos">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-cormorant text-2xl font-light tracking-[0.2em] text-charcoal uppercase">
            Maison
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase text-warm-gray hover:text-charcoal transition-colors duration-300 font-golos"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#reservation"
            className="hidden md:block text-xs tracking-[0.15em] uppercase bg-charcoal text-cream px-5 py-2.5 hover:bg-gold transition-colors duration-300"
          >
            Забронировать
          </a>
          <button
            className="md:hidden text-charcoal"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-cream border-t border-charcoal/10 px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-[0.12em] uppercase text-warm-gray hover:text-charcoal"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-[0.15em] uppercase bg-charcoal text-cream px-5 py-3 text-center mt-2 hover:bg-gold transition-colors duration-300"
            >
              Забронировать
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative h-screen flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6 animate-fade-up opacity-0 delay-100">
              Изысканная кухня · Москва
            </p>
            <h1 className="font-cormorant text-7xl md:text-9xl font-light text-cream leading-none mb-6 animate-fade-up opacity-0 delay-200">
              Maison
            </h1>
            <p className="text-cream/70 text-sm tracking-[0.1em] max-w-md leading-relaxed animate-fade-up opacity-0 delay-300">
              Пространство, где каждый вечер становится событием. Французская техника, локальные продукты, безупречный сервис.
            </p>
            <div className="flex items-center gap-6 mt-10 animate-fade-up opacity-0 delay-400">
              <a
                href="#reservation"
                className="text-xs tracking-[0.15em] uppercase bg-cream text-charcoal px-8 py-3.5 hover:bg-gold hover:text-cream transition-all duration-300"
              >
                Забронировать стол
              </a>
              <a href="#menu" className="text-cream/80 text-xs tracking-[0.15em] uppercase flex items-center gap-2 hover:text-gold transition-colors">
                Смотреть меню
                <Icon name="ArrowRight" size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">О ресторане</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-charcoal leading-tight mb-8">
              Гастрономия<br />
              <em>как искусство</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="text-warm-gray text-sm leading-relaxed mb-6">
              Maison открылся в 2019 году с одной идеей — создать место, где французская кулинарная традиция встречается с лучшими российскими продуктами. Каждое блюдо — результат многолетней работы и безграничного уважения к ингредиентам.
            </p>
            <p className="text-warm-gray text-sm leading-relaxed mb-10">
              Наш интерьер разработан в концепции «меньше значит больше»: чистые линии, натуральные материалы и живой свет создают атмосферу уюта и элегантности.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-charcoal/10">
              {[{ num: "5+", label: "Лет опыта" }, { num: "40+", label: "Авторских блюд" }, { num: "98%", label: "Довольных гостей" }].map((stat) => (
                <div key={stat.label}>
                  <div className="font-cormorant text-4xl font-light text-charcoal">{stat.num}</div>
                  <div className="text-xs text-warm-gray tracking-[0.1em] uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={HERO_IMG} alt="О ресторане" className="w-full aspect-[3/4] object-cover" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/40" />
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Наше меню</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-cream">
              Авторская кухня
            </h2>
          </div>
          <div className="flex justify-center mb-14">
            {MENU_CATEGORIES.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveMenu(i)}
                className={`px-8 py-3 text-xs tracking-[0.15em] uppercase border transition-all duration-300 ${
                  activeMenu === i
                    ? "bg-gold border-gold text-cream"
                    : "border-cream/20 text-cream/50 hover:text-cream hover:border-cream/50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="max-w-2xl mx-auto">
            {MENU_CATEGORIES[activeMenu].items.map((item, i) => (
              <div
                key={item.name}
                className={`flex items-start justify-between py-6 ${i < MENU_CATEGORIES[activeMenu].items.length - 1 ? "border-b border-cream/10" : ""}`}
              >
                <div>
                  <div className="font-cormorant text-2xl font-light text-cream mb-1">{item.name}</div>
                  <div className="text-xs text-warm-gray tracking-wide">{item.desc}</div>
                </div>
                <div className="font-cormorant text-xl text-gold ml-8 whitespace-nowrap">{item.price}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <button className="text-xs tracking-[0.2em] uppercase border border-cream/30 text-cream px-8 py-3.5 hover:border-gold hover:text-gold transition-all duration-300">
              Полное меню
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Галерея</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-charcoal">
              Атмосфера
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`relative group overflow-hidden ${i === 0 ? "row-span-2" : ""}`}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 0 ? "h-full min-h-[400px]" : "aspect-square"}`}
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-end p-4">
                  <span className="text-cream text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Наша команда</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-charcoal">
              Мастера своего дела
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
                <h3 className="font-cormorant text-2xl font-light text-charcoal mb-1">{member.name}</h3>
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">{member.role}</p>
                <p className="text-warm-gray text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Отзывы гостей</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-charcoal">
              Что говорят гости
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="border border-charcoal/10 p-8 hover:border-gold/40 transition-colors duration-300">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Icon key={j} name="Star" size={12} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="font-cormorant text-xl font-light text-charcoal leading-relaxed mb-8 italic">
                  «{review.text}»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-gold" />
                  <span className="text-xs tracking-[0.15em] uppercase text-warm-gray">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section id="reservation" className="py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Онлайн-бронирование</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-cream mb-6">
              Забронируйте<br />
              <em>ваш стол</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <div className="space-y-4 text-sm text-cream/60">
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={14} className="text-gold" />
                <span>ул. Пречистенка, 17, Москва</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={14} className="text-gold" />
                <span>Ежедневно: 18:00 — 23:00</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={14} className="text-gold" />
                <span>+7 (495) 123-45-67</span>
              </div>
            </div>
          </div>
          <div className="bg-cream/5 border border-cream/10 p-8">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs tracking-[0.1em] uppercase text-cream/50 block mb-2">Имя</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="Ваше имя"
                  className="w-full bg-transparent border border-cream/20 px-4 py-3 text-cream text-sm placeholder:text-cream/30 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.1em] uppercase text-cream/50 block mb-2">Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleFormChange}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-transparent border border-cream/20 px-4 py-3 text-cream text-sm placeholder:text-cream/30 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs tracking-[0.1em] uppercase text-cream/50 block mb-2">Дата</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleFormChange}
                  className="w-full bg-transparent border border-cream/20 px-4 py-3 text-cream text-sm focus:border-gold focus:outline-none transition-colors [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.1em] uppercase text-cream/50 block mb-2">Время</label>
                <select
                  name="time"
                  value={form.time}
                  onChange={handleFormChange}
                  className="w-full bg-charcoal border border-cream/20 px-4 py-3 text-cream text-sm focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="">Выберите время</option>
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="text-xs tracking-[0.1em] uppercase text-cream/50 block mb-2">Количество гостей</label>
              <div className="flex gap-2">
                {["1", "2", "3", "4", "5", "6+"].map((n) => (
                  <button
                    key={n}
                    onClick={() => setForm({ ...form, guests: n })}
                    className={`flex-1 py-2.5 text-xs border transition-all duration-200 ${
                      form.guests === n
                        ? "bg-gold border-gold text-cream"
                        : "border-cream/20 text-cream/50 hover:border-cream/50 hover:text-cream"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
            <button className="w-full bg-gold text-cream py-4 text-xs tracking-[0.2em] uppercase hover:bg-cream hover:text-charcoal transition-all duration-300">
              Забронировать стол
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal border-t border-cream/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-cormorant text-2xl font-light tracking-[0.2em] text-cream uppercase">
            Maison
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.12em] uppercase text-cream/40 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="text-xs text-cream/30 tracking-wide">
            © 2024 Maison. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
