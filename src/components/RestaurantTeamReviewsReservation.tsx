import Icon from "@/components/ui/icon";

const CHEF_IMG = "https://cdn.poehali.dev/projects/6a174b0e-6ca2-47a3-ab4c-c0844a261f30/files/af35cf80-9e05-4b68-b5c4-a0b772dc4a9f.jpg";

const NAV_LINKS = [
  { label: "Меню", href: "#menu" },
  { label: "О нас", href: "#about" },
  { label: "Галерея", href: "#gallery" },
  { label: "Команда", href: "#team" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Резервация", href: "#reservation" },
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

interface RestaurantTeamReviewsReservationProps {
  form: { name: string; phone: string; date: string; time: string; guests: string };
  setForm: (form: { name: string; phone: string; date: string; time: string; guests: string }) => void;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function RestaurantTeamReviewsReservation({ form, setForm, handleFormChange }: RestaurantTeamReviewsReservationProps) {
  return (
    <>
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
                <span>Ежедневно: 08:00 — 23:00</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={14} className="text-gold" />
                <span>+8 800 535-35-35</span>
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
    </>
  );
}