const HERO_IMG = "https://cdn.poehali.dev/projects/6a174b0e-6ca2-47a3-ab4c-c0844a261f30/files/30f85fa9-0e47-4d74-8414-695bb93818f8.jpg";
const FOOD_IMG = "https://cdn.poehali.dev/projects/6a174b0e-6ca2-47a3-ab4c-c0844a261f30/files/42fe32c2-d332-48a2-8691-4c172508a509.jpg";
const CHEF_IMG = "https://cdn.poehali.dev/projects/6a174b0e-6ca2-47a3-ab4c-c0844a261f30/files/af35cf80-9e05-4b68-b5c4-a0b772dc4a9f.jpg";

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

interface RestaurantMenuGalleryProps {
  activeMenu: number;
  setActiveMenu: (i: number) => void;
  setFullMenuOpen: (v: boolean) => void;
}

export default function RestaurantMenuGallery({ activeMenu, setActiveMenu, setFullMenuOpen }: RestaurantMenuGalleryProps) {
  return (
    <>
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
            <button
              onClick={() => setFullMenuOpen(true)}
              className="text-xs tracking-[0.2em] uppercase border border-cream/30 text-cream px-8 py-3.5 hover:border-gold hover:text-gold transition-all duration-300"
            >
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
    </>
  );
}
