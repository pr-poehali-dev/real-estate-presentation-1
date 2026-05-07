import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const IMAGES = {
  building: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/18bf6772-2942-49f8-a58e-646ab4f4fa28.jpg",
  interior: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/308b76b5-5fcd-405c-b911-2bcd968ced9b.jpg",
  retail: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/b2c10685-1e6f-4118-8cd8-516c9019aefc.jpg",
  aerial: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/ab0def3f-684a-450a-ba59-a931bd74dcc7.jpg",
};

const OBJECT_DATA = {
  name: "Бизнес-центр «Горизонт»",
  category: "Коммерческая недвижимость · Класс A+",
  image: IMAGES.building,
  area: "4 800 м²",
  floor: "12 этажей",
  parking: "120 м/м",
  price: "680 000 000 ₽",
  status: "Продажа",
  description:
    "Современный бизнес-центр класса A+ в деловом квартале города. Панорамное остекление фасада, подземный паркинг на 120 машиномест, развитая инфраструктура. Центральная система управления зданием BMS, индивидуальные климат-системы в каждом офисе.",
  features: [
    { icon: "ShieldCheck", title: "Класс A+", text: "Высочайший стандарт инженерных систем" },
    { icon: "Car", title: "Паркинг 120 м/м", text: "Подземный охраняемый паркинг" },
    { icon: "Cpu", title: "BMS-система", text: "Единое управление зданием" },
    { icon: "Lock", title: "Охрана 24/7", text: "Контроль доступа и видеонаблюдение" },
  ],
  gallery: [
    { img: IMAGES.building, caption: "Фасад здания" },
    { img: IMAGES.interior, caption: "Холл и зоны ожидания" },
    { img: IMAGES.retail, caption: "Лобби первого этажа" },
    { img: IMAGES.aerial, caption: "Аэросъёмка территории" },
  ],
};

const SLIDE_NAMES = ["Титул", "Описание", "Галерея", "Контакты"];
const TOTAL = SLIDE_NAMES.length;

export default function Index() {
  const [slide, setSlide] = useState(0);
  const [galleryIdx, setGalleryIdx] = useState(0);

  const next = useCallback(() => setSlide((s) => Math.min(s + 1, TOTAL - 1)), []);
  const prev = useCallback(() => setSlide((s) => Math.max(s - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-10"
      style={{
        fontFamily: "'Montserrat', sans-serif",
        background: "linear-gradient(135deg, #1f2937 0%, #0d2d5e 100%)",
      }}
    >
      {/* HEADER BAR */}
      <div className="w-full max-w-[1200px] flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center" style={{ width: 32, height: 32, background: "var(--corp-gold)", borderRadius: 2 }}>
            <Icon name="Building2" size={16} style={{ color: "#fff" }} />
          </div>
          <div>
            <div className="text-white font-semibold text-xs tracking-wider">ГК «Альфа Девелопмент»</div>
            <div className="font-medium" style={{ color: "var(--corp-gold)", fontSize: 9, letterSpacing: "0.3em" }}>
              КОРПОРАТИВНАЯ ПРЕЗЕНТАЦИЯ
            </div>
          </div>
        </div>
        <div className="text-xs font-medium tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
          {SLIDE_NAMES[slide]} · {String(slide + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </div>
      </div>

      {/* SLIDE FRAME — 16:9 */}
      <div
        className="w-full max-w-[1200px] relative bg-white overflow-hidden"
        style={{
          aspectRatio: "16 / 9",
          borderRadius: 4,
          boxShadow: "0 40px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* SLIDE 1 — TITLE */}
        {slide === 0 && (
          <div key="s1" className="absolute inset-0 flex">
            <div
              className="flex-1 relative overflow-hidden"
              style={{
                backgroundImage: `url(${OBJECT_DATA.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0" style={{ background: "linear-gradient(115deg, rgba(13,45,94,0.92) 35%, rgba(13,45,94,0.35) 100%)" }} />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-14">
                <div className="fade-up fade-up-delay-1">
                  <span
                    className="inline-block text-xs font-medium mb-5"
                    style={{ color: "var(--corp-gold)", letterSpacing: "0.32em", textTransform: "uppercase" }}
                  >
                    Презентация объекта · 2026
                  </span>
                </div>
                <h1
                  className="fade-up fade-up-delay-2 font-light text-white mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px, 5.2vw, 64px)", lineHeight: 1.05 }}
                >
                  Бизнес-центр <br />
                  <span style={{ fontStyle: "italic", color: "var(--corp-gold)" }}>«Горизонт»</span>
                </h1>
                <p className="fade-up fade-up-delay-3 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Коммерческая недвижимость премиального сегмента. Класс A+ в деловом квартале с полной инфраструктурой.
                </p>

                <div className="fade-up fade-up-delay-4 flex gap-8 mt-8">
                  {[
                    { val: "4 800", label: "м² общая площадь" },
                    { val: "A+", label: "Класс здания" },
                    { val: "12", label: "этажей" },
                  ].map(({ val, label }) => (
                    <div key={label}>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, color: "#fff", lineHeight: 1, fontWeight: 600 }}>{val}</div>
                      <div className="text-[10px] mt-1 font-medium tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.42)" }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-between p-10 shrink-0" style={{ width: 280, background: "var(--corp-navy)" }}>
              <div>
                <span className="accent-line mb-6 block" />
                <div className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Подготовлено для
                </div>
                <div className="text-white font-semibold text-base mb-1">Корпоративных клиентов</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                  и инвесторов
                </div>
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.32)" }}>
                  Дата
                </div>
                <div className="text-white text-sm font-medium">Май 2026</div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 2 — DESCRIPTION */}
        {slide === 1 && (
          <div key="s2" className="absolute inset-0 flex flex-col p-8 md:p-12 bg-white">
            <div className="fade-up fade-up-delay-1 flex items-center justify-between mb-6">
              <div>
                <span className="accent-line mb-3 block" />
                <div className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--corp-gray-mid)" }}>
                  Слайд 02 · Подробное описание
                </div>
              </div>
              <span
                className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5"
                style={{ background: "var(--corp-navy)", color: "#fff", borderRadius: 2 }}
              >
                {OBJECT_DATA.status}
              </span>
            </div>

            <h2
              className="fade-up fade-up-delay-2 font-light mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3.6vw, 44px)", color: "var(--corp-navy)", lineHeight: 1.1 }}
            >
              {OBJECT_DATA.name}
            </h2>
            <div className="fade-up fade-up-delay-2 text-xs font-medium tracking-wide uppercase mb-6" style={{ color: "var(--corp-gold)" }}>
              {OBJECT_DATA.category}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 flex-1">
              <div className="md:col-span-2 fade-up fade-up-delay-3 relative overflow-hidden" style={{ borderRadius: 2 }}>
                <img src={OBJECT_DATA.image} alt={OBJECT_DATA.name} className="w-full h-full object-cover" style={{ minHeight: 240 }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,45,94,0.5) 0%, transparent 50%)" }} />
              </div>

              <div className="md:col-span-3 fade-up fade-up-delay-4 flex flex-col">
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--corp-gray)" }}>
                  {OBJECT_DATA.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { icon: "Maximize2", label: "Площадь", val: OBJECT_DATA.area },
                    { icon: "Layers", label: "Этажность", val: OBJECT_DATA.floor },
                    { icon: "Car", label: "Паркинг", val: OBJECT_DATA.parking },
                    { icon: "Tag", label: "Стоимость", val: OBJECT_DATA.price },
                  ].map(({ icon, label, val }) => (
                    <div
                      key={label}
                      className="p-3"
                      style={{ background: "rgba(26,77,143,0.05)", borderLeft: "3px solid var(--corp-blue)", borderRadius: 2 }}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon name={icon} size={11} style={{ color: "var(--corp-blue-mid)" }} />
                        <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: "var(--corp-gray-mid)" }}>
                          {label}
                        </span>
                      </div>
                      <div className="font-semibold" style={{ color: "var(--corp-navy)", fontSize: 14 }}>
                        {val}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {OBJECT_DATA.features.map((f) => (
                    <div key={f.title} className="flex items-start gap-2">
                      <div
                        className="flex items-center justify-center shrink-0"
                        style={{ width: 28, height: 28, background: "var(--corp-navy)", borderRadius: 2 }}
                      >
                        <Icon name={f.icon} size={13} style={{ color: "var(--corp-gold)" }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold" style={{ color: "var(--corp-navy)" }}>{f.title}</div>
                        <div className="text-[11px]" style={{ color: "var(--corp-gray-mid)" }}>{f.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 3 — GALLERY */}
        {slide === 2 && (
          <div key="s3" className="absolute inset-0 flex flex-col p-8 md:p-12" style={{ background: "#eef2f8" }}>
            <div className="fade-up fade-up-delay-1 mb-5">
              <span className="accent-line mb-3 block" />
              <div className="flex items-end justify-between">
                <h2 className="font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3.6vw, 44px)", color: "var(--corp-navy)", lineHeight: 1.1 }}>
                  Галерея <span style={{ fontStyle: "italic", color: "var(--corp-gold)" }}>фотографий</span>
                </h2>
                <div className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--corp-gray-mid)" }}>
                  Слайд 03
                </div>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-3 min-h-0">
              <div className="md:col-span-3 gallery-card relative overflow-hidden" style={{ borderRadius: 2 }}>
                <img src={OBJECT_DATA.gallery[galleryIdx].img} alt={OBJECT_DATA.gallery[galleryIdx].caption} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,45,94,0.65) 0%, transparent 50%)" }} />
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="inline-block text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 mb-2"
                    style={{ background: "var(--corp-gold)", color: "#fff", borderRadius: 2 }}
                  >
                    {galleryIdx + 1} / {OBJECT_DATA.gallery.length}
                  </div>
                  <div className="text-white font-semibold text-base" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                    {OBJECT_DATA.gallery[galleryIdx].caption}
                  </div>
                </div>
                <button
                  onClick={() => setGalleryIdx((p) => (p - 1 + OBJECT_DATA.gallery.length) % OBJECT_DATA.gallery.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 hover:opacity-100"
                  style={{ width: 36, height: 36, background: "rgba(13,45,94,0.85)", color: "#fff", borderRadius: 2, border: "none", cursor: "pointer", opacity: 0.7 }}
                >
                  <Icon name="ChevronLeft" size={16} />
                </button>
                <button
                  onClick={() => setGalleryIdx((p) => (p + 1) % OBJECT_DATA.gallery.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 hover:opacity-100"
                  style={{ width: 36, height: 36, background: "rgba(13,45,94,0.85)", color: "#fff", borderRadius: 2, border: "none", cursor: "pointer", opacity: 0.7 }}
                >
                  <Icon name="ChevronRight" size={16} />
                </button>
              </div>

              <div className="flex md:flex-col gap-3 overflow-auto">
                {OBJECT_DATA.gallery.map((g, idx) => (
                  <div
                    key={idx}
                    className="gallery-card cursor-pointer overflow-hidden flex-1 relative"
                    style={{
                      borderRadius: 2,
                      border: idx === galleryIdx ? "2px solid var(--corp-gold)" : "2px solid transparent",
                      minHeight: 70,
                      minWidth: 80,
                    }}
                    onClick={() => setGalleryIdx(idx)}
                  >
                    <img src={g.img} alt={g.caption} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: idx === galleryIdx ? "rgba(13,45,94,0)" : "rgba(13,45,94,0.4)", transition: "all 0.3s" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 4 — CONTACTS */}
        {slide === 3 && (
          <div key="s4" className="absolute inset-0 flex" style={{ background: "var(--corp-navy)" }}>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-center">
              <div className="fade-up fade-up-delay-1">
                <span className="accent-line mb-4 block" />
                <div className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Слайд 04 · Контакты и реквизиты
                </div>
              </div>
              <h2
                className="fade-up fade-up-delay-2 font-light mb-6 text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3.8vw, 48px)", lineHeight: 1.1 }}
              >
                Связаться <br />
                <span style={{ fontStyle: "italic", color: "var(--corp-gold)" }}>с нами</span>
              </h2>

              <div className="fade-up fade-up-delay-3 flex flex-col gap-4 mb-7">
                {[
                  { icon: "MapPin", label: "Адрес", val: "г. Москва, Пресненская набережная, 12, офис 2801" },
                  { icon: "Phone", label: "Телефон", val: "+7 (495) 000-00-00" },
                  { icon: "Mail", label: "Email", val: "info@alpha-dev.ru" },
                ].map(({ icon, label, val }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex items-center justify-center shrink-0" style={{ width: 34, height: 34, background: "rgba(255,255,255,0.07)", borderRadius: 2, marginTop: 2 }}>
                      <Icon name={icon} size={14} style={{ color: "var(--corp-gold)" }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-medium tracking-widest uppercase mb-0.5" style={{ color: "rgba(255,255,255,0.32)" }}>
                        {label}
                      </div>
                      <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="fade-up fade-up-delay-4 self-start py-3 px-6 font-semibold text-sm tracking-wide flex items-center gap-3 transition-all duration-200 hover:opacity-90"
                style={{ background: "var(--corp-gold)", color: "#fff", borderRadius: 2, border: "none", cursor: "pointer" }}
              >
                <Icon name="FileText" size={14} />
                Запросить коммерческое предложение
              </button>
            </div>

            <div className="hidden md:flex flex-col justify-center shrink-0 p-10" style={{ width: 360, background: "rgba(0,0,0,0.2)", borderLeft: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--corp-gold)" }}>
                Реквизиты компании
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Наименование", val: 'ООО "Альфа Девелопмент"' },
                  { label: "ИНН / КПП", val: "7700000000 / 770001001" },
                  { label: "ОГРН", val: "1027700000000" },
                  { label: "Расчётный счёт", val: "40702810000000000000" },
                  { label: "Банк", val: "АО «Сбербанк России»" },
                  { label: "БИК", val: "044525225" },
                ].map(({ label, val }) => (
                  <div
                    key={label}
                    className="flex justify-between items-start gap-3 pb-2.5"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.38)" }}>{label}</span>
                    <span className="text-[11px] font-semibold text-right" style={{ color: "rgba(255,255,255,0.78)" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CONTROLS */}
      <div className="w-full max-w-[1200px] flex items-center justify-between mt-5">
        <button
          onClick={prev}
          disabled={slide === 0}
          className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200"
          style={{
            background: slide === 0 ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.1)",
            color: slide === 0 ? "rgba(255,255,255,0.3)" : "#fff",
            borderRadius: 2,
            border: "1px solid rgba(255,255,255,0.1)",
            cursor: slide === 0 ? "not-allowed" : "pointer",
          }}
        >
          <Icon name="ChevronLeft" size={14} />
          Назад
        </button>

        <div className="flex items-center gap-2">
          {SLIDE_NAMES.map((name, idx) => (
            <button
              key={name}
              onClick={() => setSlide(idx)}
              className="flex flex-col items-center gap-1.5 px-2 py-1 transition-all duration-200"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <span
                className="text-[10px] font-medium tracking-widest uppercase transition-colors"
                style={{ color: idx === slide ? "var(--corp-gold)" : "rgba(255,255,255,0.35)" }}
              >
                {name}
              </span>
              <div
                style={{
                  width: idx === slide ? 36 : 18,
                  height: 3,
                  background: idx === slide ? "var(--corp-gold)" : "rgba(255,255,255,0.18)",
                  borderRadius: 2,
                  transition: "all 0.3s",
                }}
              />
            </button>
          ))}
        </div>

        <button
          onClick={next}
          disabled={slide === TOTAL - 1}
          className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200"
          style={{
            background: slide === TOTAL - 1 ? "rgba(255,255,255,0.05)" : "var(--corp-gold)",
            color: slide === TOTAL - 1 ? "rgba(255,255,255,0.3)" : "#fff",
            borderRadius: 2,
            border: "none",
            cursor: slide === TOTAL - 1 ? "not-allowed" : "pointer",
          }}
        >
          Далее
          <Icon name="ChevronRight" size={14} />
        </button>
      </div>

      <div className="text-[10px] tracking-widest uppercase mt-3" style={{ color: "rgba(255,255,255,0.25)" }}>
        Используйте стрелки ← → для навигации
      </div>
    </div>
  );
}
