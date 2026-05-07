import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const IMAGES = {
  building: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/18bf6772-2942-49f8-a58e-646ab4f4fa28.jpg",
  interior: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/308b76b5-5fcd-405c-b911-2bcd968ced9b.jpg",
  retail: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/b2c10685-1e6f-4118-8cd8-516c9019aefc.jpg",
  aerial: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/ab0def3f-684a-450a-ba59-a931bd74dcc7.jpg",
};

const OBJECTS = [
  {
    id: 1,
    name: "Бизнес-центр «Горизонт»",
    category: "Коммерческая недвижимость",
    area: "4 800 м²",
    floor: "12 этажей",
    price: "680 000 000 ₽",
    status: "Продажа",
    statusColor: "#1a4d8f",
    image: IMAGES.building,
    description:
      "Современный бизнес-центр класса A+ в деловом квартале города. Панорамное остекление фасада, подземный паркинг на 120 машиномест, развитая инфраструктура. Центральная система управления зданием BMS, индивидуальные климат-системы в каждом офисе.",
    features: ["Класс A+", "Паркинг 120 м/м", "BMS-система", "Охрана 24/7"],
  },
  {
    id: 2,
    name: "Апартаменты «Авеню 14»",
    category: "Жилая недвижимость",
    area: "210 м²",
    floor: "7 этаж из 22",
    price: "42 500 000 ₽",
    status: "Продажа",
    statusColor: "#1a4d8f",
    image: IMAGES.interior,
    description:
      "Представительские апартаменты с авторским интерьером и панорамными видами на реку. Полная меблировка премиум-класса, умный дом, система очистки воздуха и воды. Консьерж-сервис, спа и фитнес-зона в составе комплекса.",
    features: ["Умный дом", "Вид на реку", "Меблированы", "Консьерж 24/7"],
  },
  {
    id: 3,
    name: "Торговый павильон «Центральный»",
    category: "Торговая недвижимость",
    area: "1 200 м²",
    floor: "1 этаж",
    price: "148 000 000 ₽",
    status: "Аренда",
    statusColor: "#b8966e",
    image: IMAGES.retail,
    description:
      "Флагманское торговое помещение в центре пешеходной зоны с потоком 15 000+ человек/день. Потолки 6 м, панорамные витрины, зона разгрузки. Подходит для flagship-формата, автосалона, шоурума, ресторанного пространства.",
    features: ["Поток 15 000/день", "Потолки 6 м", "Витрины 40 м", "Разгрузка"],
  },
  {
    id: 4,
    name: "Индустриальный парк «Восток»",
    category: "Производство и склад",
    area: "18 500 м²",
    floor: "2 здания",
    price: "Договорная",
    status: "Аренда",
    statusColor: "#b8966e",
    image: IMAGES.aerial,
    description:
      "Производственно-складской комплекс с железнодорожной веткой и собственной подстанцией 1 МВт. Ворота для фур, кран-балки до 20 т, отапливаемые и холодные зоны хранения. Охраняемая территория 4,2 га, видеонаблюдение.",
    features: ["Ж/д ветка", "Кран 20 т", "1 МВт мощность", "4.2 га"],
  },
];

const GALLERY = [
  { img: IMAGES.building, caption: "Бизнес-центр «Горизонт» — фасад" },
  { img: IMAGES.interior, caption: "Апартаменты «Авеню 14» — гостиная" },
  { img: IMAGES.retail, caption: "Торговый павильон — торговый зал" },
  { img: IMAGES.aerial, caption: "Индустриальный парк — аэросъёмка" },
];

const SECTIONS = ["Обзор", "Объекты", "Галерея", "Контакты"];

export default function Index() {
  const [activeSection, setActiveSection] = useState("Обзор");
  const [selectedObject, setSelectedObject] = useState<number | null>(null);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section");
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.4 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (name: string) => {
    sectionRefs.current[name]?.scrollIntoView({ behavior: "smooth" });
  };

  const obj = selectedObject !== null ? OBJECTS.find((o) => o.id === selectedObject) : null;

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif", background: "var(--corp-white)" }}>

      {/* NAVIGATION */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16"
        style={{ height: 64, background: "var(--corp-navy)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center shrink-0"
            style={{ width: 36, height: 36, background: "var(--corp-gold)", borderRadius: 2 }}
          >
            <Icon name="Building2" size={18} style={{ color: "#fff" }} />
          </div>
          <div>
            <div className="text-white font-semibold text-sm tracking-wider">ГК «Альфа Девелопмент»</div>
            <div className="font-medium" style={{ color: "var(--corp-gold)", fontSize: 9, letterSpacing: "0.3em" }}>
              КОРПОРАТИВНАЯ ПРЕЗЕНТАЦИЯ
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`nav-link ${activeSection === s ? "active text-white" : "text-white/70 hover:text-white"}`}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Montserrat', sans-serif" }}
            >
              {s}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("Контакты")}
          className="hidden md:flex items-center gap-2 px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90"
          style={{ background: "var(--corp-gold)", color: "#fff", borderRadius: 2, border: "none", cursor: "pointer" }}
        >
          <Icon name="Phone" size={13} />
          Связаться
        </button>
      </nav>

      {/* HERO */}
      <section
        ref={(el) => { sectionRefs.current["Обзор"] = el; }}
        data-section="Обзор"
        className="relative flex flex-col items-start justify-end overflow-hidden"
        style={{ minHeight: "100vh", paddingTop: 64 }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${IMAGES.building})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(110deg, rgba(13,45,94,0.93) 42%, rgba(13,45,94,0.55) 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16 pb-20">
          <div className="fade-up fade-up-delay-1">
            <span
              className="inline-block text-xs font-medium mb-6"
              style={{ color: "var(--corp-gold)", letterSpacing: "0.32em", textTransform: "uppercase" }}
            >
              Портфель объектов 2026
            </span>
          </div>
          <h1
            className="fade-up fade-up-delay-2 font-light leading-tight mb-6 text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px, 6vw, 82px)", lineHeight: 1.1 }}
          >
            Инвестиции <br />
            <span style={{ fontStyle: "italic", color: "var(--corp-gold)" }}>в надёжную</span>
            <br />
            недвижимость
          </h1>
          <p
            className="fade-up fade-up-delay-3 max-w-lg text-sm leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.65)", fontSize: 15 }}
          >
            Коммерческая и жилая недвижимость премиального сегмента. Объекты с подтверждёнными
            характеристиками, прозрачными условиями сделки и юридическим сопровождением.
          </p>
          <div className="fade-up fade-up-delay-4 flex flex-wrap gap-10">
            {[
              { val: "22+", label: "Объекта в портфеле" },
              { val: "₽ 4,2 млрд", label: "Общая стоимость" },
              { val: "98%", label: "Заполняемость" },
            ].map(({ val, label }) => (
              <div key={label}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, color: "#fff", lineHeight: 1, fontWeight: 600 }}>
                  {val}
                </div>
                <div className="text-xs mt-1 font-medium tracking-wide uppercase" style={{ color: "rgba(255,255,255,0.42)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>
            Прокрутить
          </span>
          <div className="animate-bounce" style={{ width: 1, height: 36, background: "linear-gradient(to bottom, rgba(255,255,255,0.28), transparent)" }} />
        </div>
      </section>

      {/* ОБЪЕКТЫ */}
      <section
        ref={(el) => { sectionRefs.current["Объекты"] = el; }}
        data-section="Объекты"
        className="py-24 px-8 md:px-16"
        style={{ background: "var(--corp-white)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="accent-line mb-4 block" />
            <h2
              className="font-light mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", color: "var(--corp-navy)" }}
            >
              Описание объектов
            </h2>
            <p className="text-sm" style={{ color: "var(--corp-gray-mid)", maxWidth: 480 }}>
              Подробные характеристики каждого актива из актуального портфеля
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OBJECTS.map((item) => (
              <div
                key={item.id}
                className="object-card bg-white cursor-pointer"
                style={{ border: "1px solid var(--corp-gray-light)", boxShadow: "0 2px 16px rgba(13,45,94,0.05)", borderRadius: "var(--radius)" }}
                onClick={() => setSelectedObject(item.id)}
              >
                <div className="relative overflow-hidden" style={{ height: 220, borderRadius: "var(--radius) var(--radius) 0 0" }}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,45,94,0.55) 0%, transparent 60%)" }} />
                  <div
                    className="absolute top-4 left-4 text-xs font-semibold tracking-widest uppercase px-3 py-1"
                    style={{ background: item.statusColor, color: "#fff", borderRadius: 2 }}
                  >
                    {item.status}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs font-medium tracking-wide uppercase mb-1" style={{ color: "var(--corp-gold)" }}>
                      {item.category}
                    </div>
                    <div className="text-white font-semibold" style={{ fontSize: 17 }}>{item.name}</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-5">
                    {[
                      { icon: "Maximize2", val: item.area, label: "Площадь" },
                      { icon: "Layers", val: item.floor, label: "Этажность" },
                      { icon: "Tag", val: item.price, label: "Цена" },
                    ].map(({ icon, val, label }) => (
                      <div key={label}>
                        <div className="flex items-center gap-1.5 mb-1">
                          <Icon name={icon} size={12} style={{ color: "var(--corp-blue-mid)" }} />
                          <span className="text-xs font-medium tracking-wide uppercase" style={{ color: "var(--corp-gray-mid)" }}>
                            {label}
                          </span>
                        </div>
                        <div className="text-sm font-semibold" style={{ color: "var(--corp-navy)" }}>{val}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--corp-gray)", fontSize: 13 }}>
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs px-3 py-1 font-medium"
                        style={{ background: "rgba(26,77,143,0.07)", color: "var(--corp-blue)", borderRadius: 2, border: "1px solid rgba(26,77,143,0.12)" }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <button
                    className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-85"
                    style={{ background: "var(--corp-navy)", color: "#fff", borderRadius: 2, border: "none", cursor: "pointer" }}
                  >
                    Подробнее об объекте
                    <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section
        ref={(el) => { sectionRefs.current["Галерея"] = el; }}
        data-section="Галерея"
        className="py-24 px-8 md:px-16"
        style={{ background: "#eef2f8" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="accent-line mb-4 block" />
            <h2
              className="font-light mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", color: "var(--corp-navy)" }}
            >
              Галерея фотографий
            </h2>
            <p className="text-sm" style={{ color: "var(--corp-gray-mid)", maxWidth: 480 }}>
              Профессиональная фотосъёмка всех объектов
            </p>
          </div>

          <div className="gallery-card rounded mb-4" style={{ height: "clamp(280px, 42vw, 500px)" }}>
            <img
              src={GALLERY[galleryIdx].img}
              alt={GALLERY[galleryIdx].caption}
              className="w-full h-full object-cover"
            />
            <div className="overlay" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 opacity-100">
              <div
                className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 mb-2"
                style={{ background: "var(--corp-gold)", color: "#fff", borderRadius: 2 }}
              >
                {galleryIdx + 1} / {GALLERY.length}
              </div>
              <div className="text-white font-semibold text-lg" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                {GALLERY[galleryIdx].caption}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {GALLERY.map((g, idx) => (
              <div
                key={idx}
                className="gallery-card cursor-pointer overflow-hidden"
                style={{
                  height: 88,
                  borderRadius: "var(--radius)",
                  border: idx === galleryIdx ? "2px solid var(--corp-blue)" : "2px solid transparent",
                }}
                onClick={() => setGalleryIdx(idx)}
              >
                <img src={g.img} alt={g.caption} className="w-full h-full object-cover" />
                <div className="overlay" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {GALLERY.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setGalleryIdx(idx)}
                  className={`slide-dot ${idx === galleryIdx ? "active" : ""}`}
                  style={{ border: "none", cursor: "pointer", padding: 0 }}
                />
              ))}
            </div>
            <div className="flex gap-3">
              {[
                { icon: "ChevronLeft", fn: () => setGalleryIdx((p) => (p - 1 + GALLERY.length) % GALLERY.length) },
                { icon: "ChevronRight", fn: () => setGalleryIdx((p) => (p + 1) % GALLERY.length) },
              ].map(({ icon, fn }) => (
                <button
                  key={icon}
                  onClick={fn}
                  className="flex items-center justify-center transition-all duration-200 hover:opacity-80"
                  style={{ width: 42, height: 42, background: "var(--corp-navy)", color: "#fff", borderRadius: 2, border: "none", cursor: "pointer" }}
                >
                  <Icon name={icon} size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section
        ref={(el) => { sectionRefs.current["Контакты"] = el; }}
        data-section="Контакты"
        className="py-24 px-8 md:px-16"
        style={{ background: "var(--corp-navy)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="accent-line mb-6 block" />
              <h2
                className="font-light mb-5 text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.15 }}
              >
                Контакты <br />
                <span style={{ fontStyle: "italic", color: "var(--corp-gold)" }}>и реквизиты</span>
              </h2>
              <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.5)", maxWidth: 420 }}>
                Свяжитесь с нами для получения подробных условий по любому из представленных объектов.
                Работаем с корпоративными клиентами, инвестиционными фондами и частными инвесторами.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: "MapPin", label: "Адрес", val: "г. Москва, Пресненская набережная, 12, офис 2801" },
                  { icon: "Phone", label: "Телефон", val: "+7 (495) 000-00-00" },
                  { icon: "Mail", label: "Email", val: "info@alpha-dev.ru" },
                  { icon: "Clock", label: "Часы работы", val: "Пн–Пт: 09:00–19:00, Сб: 10:00–16:00" },
                ].map(({ icon, label, val }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{ width: 38, height: 38, background: "rgba(255,255,255,0.07)", borderRadius: 2, marginTop: 2 }}
                    >
                      <Icon name={icon} size={15} style={{ color: "var(--corp-gold)" }} />
                    </div>
                    <div>
                      <div className="text-xs font-medium tracking-widest uppercase mb-0.5" style={{ color: "rgba(255,255,255,0.32)" }}>
                        {label}
                      </div>
                      <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.82)" }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                className="p-8 mb-5"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 2 }}
              >
                <div className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--corp-gold)" }}>
                  Реквизиты компании
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Полное наименование", val: 'ООО "Альфа Девелопмент"' },
                    { label: "ИНН / КПП", val: "7700000000 / 770001001" },
                    { label: "ОГРН", val: "1027700000000" },
                    { label: "Расчётный счёт", val: "40702810000000000000" },
                    { label: "Банк", val: "АО «Сбербанк России», г. Москва" },
                    { label: "БИК", val: "044525225" },
                  ].map(({ label, val }) => (
                    <div
                      key={label}
                      className="flex justify-between items-start gap-4 pb-3"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>{label}</span>
                      <span className="text-xs font-semibold text-right" style={{ color: "rgba(255,255,255,0.78)" }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="w-full py-4 font-semibold text-sm tracking-wide flex items-center justify-center gap-3 transition-all duration-200 hover:opacity-90"
                style={{ background: "var(--corp-gold)", color: "#fff", borderRadius: 2, border: "none", cursor: "pointer" }}
              >
                <Icon name="FileText" size={15} />
                Запросить коммерческое предложение
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-5 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-3"
        style={{ background: "#060f1f", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
          © 2026 ГК «Альфа Девелопмент». Все права защищены.
        </div>
        <div className="text-xs" style={{ color: "rgba(255,255,255,0.16)" }}>
          Информация носит ознакомительный характер и не является публичной офертой
        </div>
      </footer>

      {/* МОДАЛЬНОЕ ОКНО */}
      {obj && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(6,15,31,0.85)", backdropFilter: "blur(4px)" }}
          onClick={() => setSelectedObject(null)}
        >
          <div
            className="bg-white w-full max-w-2xl overflow-y-auto"
            style={{ borderRadius: 2, maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative" style={{ height: 260 }}>
              <img src={obj.image} alt={obj.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,45,94,0.7) 0%, transparent 60%)" }} />
              <button
                className="absolute top-4 right-4 flex items-center justify-center"
                style={{ width: 36, height: 36, background: "rgba(0,0,0,0.4)", borderRadius: 2, border: "none", cursor: "pointer", color: "#fff" }}
                onClick={() => setSelectedObject(null)}
              >
                <Icon name="X" size={16} />
              </button>
              <div className="absolute bottom-5 left-6">
                <div className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: "var(--corp-gold)" }}>
                  {obj.category}
                </div>
                <div className="text-white font-semibold" style={{ fontSize: 20 }}>{obj.name}</div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-3 gap-6 mb-6 pb-6" style={{ borderBottom: "1px solid var(--corp-gray-light)" }}>
                {[
                  { label: "Площадь", val: obj.area },
                  { label: "Этажность", val: obj.floor },
                  { label: "Стоимость", val: obj.price },
                ].map(({ label, val }) => (
                  <div key={label}>
                    <div className="text-xs uppercase tracking-wide mb-1" style={{ color: "var(--corp-gray-mid)" }}>{label}</div>
                    <div className="font-bold" style={{ color: "var(--corp-navy)", fontSize: 15 }}>{val}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--corp-gray)" }}>{obj.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {obj.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1.5 font-medium"
                    style={{ background: "rgba(26,77,143,0.07)", color: "var(--corp-blue)", borderRadius: 2, border: "1px solid rgba(26,77,143,0.12)" }}
                  >
                    {f}
                  </span>
                ))}
              </div>
              <button
                className="w-full py-3.5 font-semibold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
                style={{ background: "var(--corp-navy)", color: "#fff", borderRadius: 2, border: "none", cursor: "pointer" }}
              >
                <Icon name="Phone" size={14} />
                Связаться по этому объекту
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}