import Icon from "@/components/ui/icon";

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

interface RestaurantNavProps {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  fullMenuOpen: boolean;
  setFullMenuOpen: (v: boolean) => void;
}

export default function RestaurantNav({ menuOpen, setMenuOpen, fullMenuOpen, setFullMenuOpen }: RestaurantNavProps) {
  return (
    <>
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-cream/90 backdrop-blur-sm border-b border-charcoal/10">
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
            className="md:hidden text-charcoal z-[60] relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </nav>

      {/* FULL MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[70] bg-charcoal overflow-y-auto transition-all duration-500 ${
          fullMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-16">
            <div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">Maison</p>
              <h2 className="font-cormorant text-5xl font-light text-cream">Полное меню</h2>
            </div>
            <button
              onClick={() => setFullMenuOpen(false)}
              className="text-cream/50 hover:text-cream transition-colors border border-cream/20 hover:border-cream/50 p-3"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
          {MENU_CATEGORIES.map((cat, ci) => (
            <div key={cat.name} className={ci < MENU_CATEGORIES.length - 1 ? "mb-14" : ""}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-gold text-xs tracking-[0.3em] uppercase">{cat.name}</span>
                <div className="flex-1 h-px bg-cream/10" />
              </div>
              {cat.items.map((item, i) => (
                <div
                  key={item.name}
                  className={`flex items-start justify-between py-5 ${i < cat.items.length - 1 ? "border-b border-cream/10" : ""}`}
                >
                  <div>
                    <div className="font-cormorant text-2xl font-light text-cream mb-1">{item.name}</div>
                    <div className="text-xs text-warm-gray tracking-wide">{item.desc}</div>
                  </div>
                  <div className="font-cormorant text-xl text-gold ml-8 whitespace-nowrap">{item.price}</div>
                </div>
              ))}
            </div>
          ))}
          <div className="mt-14 pt-10 border-t border-cream/10 text-center">
            <a
              href="#reservation"
              onClick={() => setFullMenuOpen(false)}
              className="text-xs tracking-[0.2em] uppercase bg-gold text-cream px-10 py-4 hover:bg-cream hover:text-charcoal transition-all duration-300 inline-block"
            >
              Забронировать стол
            </a>
          </div>
        </div>
      </div>

      {/* FULLSCREEN MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[55] bg-charcoal flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ transform: menuOpen ? "translateY(0)" : "translateY(-20px)" }}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="font-cormorant text-3xl font-light tracking-[0.3em] text-gold uppercase mb-6">
            Maison
          </div>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-cormorant text-4xl font-light text-cream hover:text-gold transition-colors duration-300"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setMenuOpen(false)}
            className="mt-6 text-xs tracking-[0.2em] uppercase bg-gold text-cream px-10 py-4 hover:bg-cream hover:text-charcoal transition-colors duration-300"
          >
            Забронировать стол
          </a>
        </div>
        <div className="absolute bottom-10 flex gap-6 text-cream/30 text-xs tracking-widest uppercase">
          <span>Ежедневно</span>
          <span>·</span>
          <span>08:00 — 23:00</span>
        </div>
      </div>
    </>
  );
}