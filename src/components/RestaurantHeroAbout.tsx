import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/6a174b0e-6ca2-47a3-ab4c-c0844a261f30/files/30f85fa9-0e47-4d74-8414-695bb93818f8.jpg";

export default function RestaurantHeroAbout() {
  return (
    <>
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
    </>
  );
}
