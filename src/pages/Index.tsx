import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const IMG = {
  livingRoom: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/000665f4-5d4e-4030-985e-6b48daab5828.jpg",
  bedroom: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/33c27c15-965d-4ee8-9f1d-9621050139c6.jpg",
  facade: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/b1cf8993-8d6d-4d0b-beaf-1d5a400f8223.jpg",
  parkView: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/1db7cda2-feca-4ecf-88f1-6d9987ea3fce.jpg",
};

const APT = {
  title: "Victory Park Residences",
  subtitle: "4-комнатные апартаменты с видом на Парк Победы",
  area: "179,08 м²",
  livingArea: "90 м²",
  kitchen: "60 м²",
  rooms: "4",
  floor: "10 / 14",
  building: "Корпус 2",
  status: "Свободная продажа",
  type: "Квартира",
  balcony: "Нет",
  liftCargo: "Нет",
  description:
    "Редкий видовой лот в одном из самых престижных комплексов Москвы. Уникальная 4-комнатная квартира 179,08 м² на 10 этаже 2 корпуса Victory Park Residences с панорамным видом на Парк Победы и центр Москвы. Дом сдан, акт приёма-передачи подписан. Премиальный дизайнерский ремонт от застройщика в стиле Неодеко — в квартире никто не проживал.",
  views: [
    "Музей и Монумент Победы",
    "Храм Георгия Победоносца",
    "Фонтан «Годы войны»",
    "Триумфальные ворота",
    "Москва-Сити",
  ],
  layout: [
    { icon: "ChefHat", title: "Кухня-гостиная 60 м²", text: "Просторная зона для жизни и приёма гостей" },
    { icon: "BedDouble", title: "3 мастер-спальни", text: "С санузлами и гардеробными" },
    { icon: "Sparkles", title: "Стиль Неодеко", text: "Премиальный дизайнерский ремонт" },
    { icon: "Sun", title: "Панорамные окна", text: "Максимум света и пространства" },
  ],
  amenities: [
    { icon: "Dumbbell", title: "Фитнес-центр с бассейном" },
    { icon: "Heart", title: "Wellness и салон красоты" },
    { icon: "Flower2", title: "Аэройога и пилатес" },
    { icon: "Trees", title: "Закрытая озеленённая территория" },
    { icon: "Baby", title: "Детский сад и площадки" },
    { icon: "Car", title: "Подземный паркинг и автомойка" },
  ],
  location: [
    { val: "Напротив", label: "Парк Победы" },
    { val: "15 мин", label: "до Кремля" },
    { val: "10 мин", label: "до Москва-Сити" },
    { val: "5 мин", label: "до Лужников" },
  ],
  gallery: [
    { img: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/000665f4-5d4e-4030-985e-6b48daab5828.jpg", caption: "Кухня-гостиная 60 м² · Стиль Неодеко" },
    { img: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/33c27c15-965d-4ee8-9f1d-9621050139c6.jpg", caption: "Мастер-спальня с гардеробной" },
    { img: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/b1cf8993-8d6d-4d0b-beaf-1d5a400f8223.jpg", caption: "Victory Park Residences · фасад" },
    { img: "https://cdn.poehali.dev/projects/1ccda9f4-d47a-42c5-9008-9a33cfe198d2/files/1db7cda2-feca-4ecf-88f1-6d9987ea3fce.jpg", caption: "Вид на Парк Победы из окон" },
  ],
};

const SLIDE_NAMES = ["Титул", "О квартире", "Локация и ЖК", "Галерея", "Паркинг", "Контакты"];
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
      className="w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-8"
      style={{
        fontFamily: "'Montserrat', sans-serif",
        background: "linear-gradient(135deg, #1f2937 0%, #0d2d5e 100%)",
      }}
    >
      {/* HEADER */}
      <div className="w-full max-w-[1240px] flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center" style={{ width: 32, height: 32, background: "var(--corp-gold)", borderRadius: 2 }}>
            <Icon name="Building2" size={16} style={{ color: "#fff" }} />
          </div>
          <div>
            <div className="text-white font-semibold text-xs tracking-wider">Victory Park Residences</div>
            <div className="font-medium" style={{ color: "var(--corp-gold)", fontSize: 9, letterSpacing: "0.3em" }}>
              ПРЕЗЕНТАЦИЯ ОБЪЕКТА
            </div>
          </div>
        </div>
        <div className="text-xs font-medium tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
          {SLIDE_NAMES[slide]} · {String(slide + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </div>
      </div>

      {/* SLIDE 16:9 */}
      <div
        className="w-full max-w-[1240px] relative bg-white overflow-hidden"
        style={{
          aspectRatio: "16 / 9",
          borderRadius: 4,
          boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* SLIDE 1 — TITLE */}
        {slide === 0 && (
          <div key="s1" className="absolute inset-0 flex">
            <div
              className="flex-1 relative overflow-hidden"
              style={{ backgroundImage: `url(${IMG.livingRoom})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0" style={{ background: "linear-gradient(115deg, rgba(13,45,94,0.93) 30%, rgba(13,45,94,0.35) 100%)" }} />
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
                  <span className="inline-block text-xs font-medium mb-5" style={{ color: "var(--corp-gold)", letterSpacing: "0.32em", textTransform: "uppercase" }}>
                    Эксклюзивное предложение · 2026
                  </span>
                </div>
                <h1
                  className="fade-up fade-up-delay-2 font-light text-white mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px, 5.4vw, 68px)", lineHeight: 1 }}
                >
                  Victory Park <br />
                  <span style={{ fontStyle: "italic", color: "var(--corp-gold)" }}>Residences</span>
                </h1>
                <p className="fade-up fade-up-delay-3 max-w-md text-sm leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.78)" }}>
                  4-комнатная видовая квартира 179,08 м² с панорамным видом на Парк Победы
                </p>
                <p className="fade-up fade-up-delay-3 text-xs italic" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Премиальный ремонт в стиле Неодеко · никто не проживал
                </p>

                <div className="fade-up fade-up-delay-4 flex gap-8 mt-8">
                  {[
                    { val: "179", label: "м² общая" },
                    { val: "60", label: "м² гостиная" },
                    { val: "10/14", label: "этаж" },
                  ].map(({ val, label }) => (
                    <div key={label}>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, color: "#fff", lineHeight: 1, fontWeight: 600 }}>{val}</div>
                      <div className="text-[10px] mt-1 font-medium tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
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
                  Ключевое
                </div>
                <div className="text-white font-semibold text-base mb-1">Видовой лот</div>
                <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Один из лучших панорамных видов в Москве — на Парк Победы и центр города
                </div>
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.32)" }}>
                  Статус
                </div>
                <div className="text-white text-sm font-medium mb-3">Дом сдан · АПП подписан</div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase"
                  style={{ background: "var(--corp-gold)", color: "#fff", borderRadius: 2 }}
                >
                  <Icon name="Sparkles" size={11} />
                  Новая квартира
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 2 — ABOUT */}
        {slide === 1 && (
          <div key="s2" className="absolute inset-0 flex flex-col p-8 md:p-12 bg-white">
            <div className="fade-up fade-up-delay-1 flex items-end justify-between mb-4">
              <div>
                <span className="accent-line mb-3 block" />
                <div className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--corp-gray-mid)" }}>
                  Слайд 02 · О квартире
                </div>
              </div>
              <span
                className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5"
                style={{ background: "var(--corp-navy)", color: "#fff", borderRadius: 2 }}
              >
                {APT.status}
              </span>
            </div>

            <h2
              className="fade-up fade-up-delay-2 font-light mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(26px, 3.4vw, 40px)", color: "var(--corp-navy)", lineHeight: 1.1 }}
            >
              Просторная резиденция <span style={{ fontStyle: "italic", color: "var(--corp-gold)" }}>в стиле Неодеко</span>
            </h2>
            <div className="fade-up fade-up-delay-2 text-xs font-medium tracking-wide uppercase mb-5" style={{ color: "var(--corp-gold)" }}>
              {APT.subtitle}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 flex-1 min-h-0">
              <div className="md:col-span-2 fade-up fade-up-delay-3 relative overflow-hidden" style={{ borderRadius: 2 }}>
                <img src={IMG.livingRoom} alt="Кухня-гостиная" className="w-full h-full object-cover" style={{ minHeight: 220 }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,45,94,0.55) 0%, transparent 50%)" }} />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-white font-semibold text-xs" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                    Кухня-гостиная 60 м²
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 fade-up fade-up-delay-4 flex flex-col">
                <p className="text-[13px] leading-relaxed mb-4" style={{ color: "var(--corp-gray)" }}>
                  {APT.description}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[
                    { icon: "DoorOpen", label: "Комнат", val: APT.rooms },
                    { icon: "Maximize2", label: "Площадь", val: APT.area },
                    { icon: "Sofa", label: "Жилая", val: APT.livingArea },
                    { icon: "ChefHat", label: "Кухня", val: APT.kitchen },
                    { icon: "Layers", label: "Этаж", val: APT.floor },
                    { icon: "Building", label: "Корпус", val: APT.building },
                  ].map(({ icon, label, val }) => (
                    <div
                      key={label}
                      className="p-2.5"
                      style={{ background: "rgba(26,77,143,0.05)", borderLeft: "3px solid var(--corp-blue)", borderRadius: 2 }}
                    >
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <Icon name={icon} size={10} style={{ color: "var(--corp-blue-mid)" }} />
                        <span className="text-[9px] font-medium tracking-widest uppercase" style={{ color: "var(--corp-gray-mid)" }}>
                          {label}
                        </span>
                      </div>
                      <div className="font-semibold" style={{ color: "var(--corp-navy)", fontSize: 12 }}>
                        {val}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {APT.layout.map((f) => (
                    <div key={f.title} className="flex items-start gap-2">
                      <div className="flex items-center justify-center shrink-0" style={{ width: 28, height: 28, background: "var(--corp-navy)", borderRadius: 2 }}>
                        <Icon name={f.icon} size={13} style={{ color: "var(--corp-gold)" }} />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold leading-tight" style={{ color: "var(--corp-navy)" }}>{f.title}</div>
                        <div className="text-[10px]" style={{ color: "var(--corp-gray-mid)" }}>{f.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 3 — LOCATION + AMENITIES */}
        {slide === 2 && (
          <div key="s3" className="absolute inset-0 flex" style={{ background: "#eef2f8" }}>
            <div className="flex-1 relative overflow-hidden">
              <img src={IMG.parkView} alt="Парк Победы" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(13,45,94,0.85) 25%, rgba(13,45,94,0.15) 100%)" }} />
              <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12">
                <div className="fade-up fade-up-delay-1">
                  <span className="accent-line mb-4 block" />
                  <div className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Слайд 03 · Локация
                  </div>
                </div>
                <h2
                  className="fade-up fade-up-delay-2 font-light text-white mb-5"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3.8vw, 46px)", lineHeight: 1.05 }}
                >
                  Лучший вид <br />
                  <span style={{ fontStyle: "italic", color: "var(--corp-gold)" }}>в столице</span>
                </h2>

                <div className="fade-up fade-up-delay-3 mb-6">
                  <div className="text-[10px] font-medium tracking-widest uppercase mb-3" style={{ color: "var(--corp-gold)" }}>
                    Из окон видно
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {APT.views.map((v) => (
                      <div key={v} className="flex items-center gap-2">
                        <Icon name="Eye" size={12} style={{ color: "var(--corp-gold)" }} />
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.85)" }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="fade-up fade-up-delay-4 grid grid-cols-2 gap-3">
                  {APT.location.map(({ val, label }) => (
                    <div key={label} className="p-3" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(6px)", borderRadius: 2, borderLeft: "2px solid var(--corp-gold)" }}>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: "#fff", fontWeight: 600, lineHeight: 1 }}>{val}</div>
                      <div className="text-[10px] tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-col p-10 shrink-0" style={{ width: 380, background: "#fff" }}>
              <span className="accent-line mb-4 block" />
              <h3
                className="font-light mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: "var(--corp-navy)", lineHeight: 1.1 }}
              >
                Инфраструктура <span style={{ fontStyle: "italic", color: "var(--corp-gold)" }}>ЖК</span>
              </h3>
              <p className="text-[11px] mb-5" style={{ color: "var(--corp-gray-mid)" }}>
                Закрытая территория с дизайнерским ландшафтом
              </p>

              <div className="flex flex-col gap-3">
                {APT.amenities.map((a) => (
                  <div key={a.title} className="flex items-center gap-3 p-2.5" style={{ background: "rgba(26,77,143,0.04)", borderRadius: 2 }}>
                    <div className="flex items-center justify-center shrink-0" style={{ width: 32, height: 32, background: "var(--corp-navy)", borderRadius: 2 }}>
                      <Icon name={a.icon} size={14} style={{ color: "var(--corp-gold)" }} />
                    </div>
                    <div className="text-xs font-semibold" style={{ color: "var(--corp-navy)" }}>{a.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 4 — GALLERY */}
        {slide === 3 && (
          <div key="s4" className="absolute inset-0 flex flex-col p-8 md:p-12" style={{ background: "#eef2f8" }}>
            <div className="fade-up fade-up-delay-1 mb-4">
              <span className="accent-line mb-3 block" />
              <div className="flex items-end justify-between">
                <h2 className="font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3.6vw, 44px)", color: "var(--corp-navy)", lineHeight: 1.1 }}>
                  Галерея <span style={{ fontStyle: "italic", color: "var(--corp-gold)" }}>фотографий</span>
                </h2>
                <div className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--corp-gray-mid)" }}>
                  Слайд 04 · Съёмка 24.04.2026
                </div>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-3 min-h-0">
              <div className="md:col-span-3 gallery-card relative overflow-hidden" style={{ borderRadius: 2 }}>
                <img src={APT.gallery[galleryIdx].img} alt={APT.gallery[galleryIdx].caption} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,45,94,0.65) 0%, transparent 50%)" }} />
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="inline-block text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 mb-2"
                    style={{ background: "var(--corp-gold)", color: "#fff", borderRadius: 2 }}
                  >
                    {galleryIdx + 1} / {APT.gallery.length}
                  </div>
                  <div className="text-white font-semibold text-base" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                    {APT.gallery[galleryIdx].caption}
                  </div>
                </div>
                <button
                  onClick={() => setGalleryIdx((p) => (p - 1 + APT.gallery.length) % APT.gallery.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center"
                  style={{ width: 36, height: 36, background: "rgba(13,45,94,0.85)", color: "#fff", borderRadius: 2, border: "none", cursor: "pointer" }}
                >
                  <Icon name="ChevronLeft" size={16} />
                </button>
                <button
                  onClick={() => setGalleryIdx((p) => (p + 1) % APT.gallery.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center"
                  style={{ width: 36, height: 36, background: "rgba(13,45,94,0.85)", color: "#fff", borderRadius: 2, border: "none", cursor: "pointer" }}
                >
                  <Icon name="ChevronRight" size={16} />
                </button>
              </div>

              <div className="flex md:flex-col gap-3 overflow-auto">
                {APT.gallery.map((g, idx) => (
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

        {/* SLIDE 5 — PARKING */}
        {slide === 4 && (
          <div key="s5" className="absolute inset-0 flex flex-col md:flex-row" style={{ background: "var(--corp-white)" }}>
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <div className="fade-up fade-up-delay-1">
                <span className="accent-line mb-4 block" />
                <div className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "var(--corp-gray-mid)" }}>
                  Слайд 05 · Дополнительно
                </div>
              </div>
              <h2
                className="fade-up fade-up-delay-2 font-light mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3.8vw, 46px)", color: "var(--corp-navy)", lineHeight: 1.05 }}
              >
                3 машино-места <br />
                <span style={{ fontStyle: "italic", color: "var(--corp-gold)" }}>одним блоком</span>
              </h2>

              <p className="fade-up fade-up-delay-3 text-sm leading-relaxed mb-6 max-w-md" style={{ color: "var(--corp-gray)" }}>
                В продаже также три машино-места, расположенные рядом друг с другом одним блоком — для вашего парка автомобилей.
                Подземный охраняемый паркинг с прямым доступом с любого этажа комплекса.
              </p>

              <div className="fade-up fade-up-delay-4 grid grid-cols-2 gap-3 mb-5 max-w-md">
                <div className="p-4" style={{ background: "var(--corp-navy)", borderRadius: 2 }}>
                  <div className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>3 машино-места</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: "#fff", fontWeight: 600, lineHeight: 1 }}>
                    50 млн ₽
                  </div>
                  <div className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Не входит в стоимость квартиры</div>
                </div>
                <div className="p-4" style={{ background: "rgba(184,150,110,0.12)", border: "1px solid var(--corp-gold)", borderRadius: 2 }}>
                  <div className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--corp-gold)" }}>Опционально</div>
                  <div className="text-sm font-semibold leading-tight" style={{ color: "var(--corp-navy)" }}>
                    Можно купить только квартиру — на машино-места уже есть покупатель
                  </div>
                </div>
              </div>

              <div className="fade-up fade-up-delay-4 flex flex-col gap-2 max-w-md">
                {[
                  { icon: "ShieldCheck", t: "Охраняемый подземный паркинг 24/7" },
                  { icon: "Sparkles", t: "Автомойка на территории комплекса" },
                  { icon: "ArrowDown", t: "Прямой доступ с любого этажа" },
                ].map(({ icon, t }) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="flex items-center justify-center shrink-0" style={{ width: 28, height: 28, background: "var(--corp-navy)", borderRadius: 2 }}>
                      <Icon name={icon} size={13} style={{ color: "var(--corp-gold)" }} />
                    </div>
                    <span className="text-xs font-medium" style={{ color: "var(--corp-navy)" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="hidden md:block relative shrink-0"
              style={{ width: 420, backgroundImage: `url(${IMG.facade})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(255,255,255,1) 0%, transparent 30%)" }} />
            </div>
          </div>
        )}

        {/* SLIDE 6 — CONTACTS */}
        {slide === 5 && (
          <div key="s6" className="absolute inset-0 flex" style={{ background: "var(--corp-navy)" }}>
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
                  Слайд 06 · Связаться
                </div>
              </div>
              <h2
                className="fade-up fade-up-delay-2 font-light mb-3 text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3.8vw, 48px)", lineHeight: 1.05 }}
              >
                Готовы показать <br />
                <span style={{ fontStyle: "italic", color: "var(--corp-gold)" }}>квартиру лично</span>
              </h2>
              <p className="fade-up fade-up-delay-3 text-sm max-w-md mb-7 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                Звоните или пишите — отвечу максимально быстро. Расскажу подробности, согласую удобное время просмотра и пришлю полный пакет документов.
              </p>

              <div className="fade-up fade-up-delay-3 flex flex-col gap-3 mb-7">
                {[
                  { icon: "Phone", label: "Телефон", val: "+7 (___) ___-__-__" },
                  { icon: "MessageCircle", label: "Telegram / WhatsApp", val: "@username" },
                  { icon: "Mail", label: "Email", val: "info@example.ru" },
                ].map(({ icon, label, val }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex items-center justify-center shrink-0" style={{ width: 36, height: 36, background: "rgba(255,255,255,0.07)", borderRadius: 2, marginTop: 2 }}>
                      <Icon name={icon} size={15} style={{ color: "var(--corp-gold)" }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-medium tracking-widest uppercase mb-0.5" style={{ color: "rgba(255,255,255,0.32)" }}>
                        {label}
                      </div>
                      <div className="text-base font-semibold" style={{ color: "rgba(255,255,255,0.92)" }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="fade-up fade-up-delay-4 self-start py-3 px-6 font-semibold text-sm tracking-wide flex items-center gap-3 transition-all duration-200 hover:opacity-90"
                style={{ background: "var(--corp-gold)", color: "#fff", borderRadius: 2, border: "none", cursor: "pointer" }}
              >
                <Icon name="Calendar" size={14} />
                Записаться на просмотр
              </button>
            </div>

            <div className="hidden md:flex flex-col justify-between shrink-0 p-10" style={{ width: 380, background: "rgba(0,0,0,0.25)", borderLeft: "1px solid rgba(255,255,255,0.05)" }}>
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--corp-gold)" }}>
                  Резюме объекта
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Объект", val: "4-комн. квартира" },
                    { label: "Площадь", val: "179,08 м²" },
                    { label: "Этаж", val: "10 / 14, корпус 2" },
                    { label: "Состояние", val: "Новая · стиль Неодеко" },
                    { label: "Статус", val: "Свободная продажа" },
                    { label: "Готовность", val: "Ключи на руках" },
                  ].map(({ label, val }) => (
                    <div key={label} className="flex justify-between items-start gap-3 pb-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</span>
                      <span className="text-[11px] font-semibold text-right" style={{ color: "rgba(255,255,255,0.85)" }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4" style={{ background: "rgba(184,150,110,0.12)", border: "1px solid rgba(184,150,110,0.3)", borderRadius: 2 }}>
                <div className="flex items-start gap-2">
                  <Icon name="AlertCircle" size={14} style={{ color: "var(--corp-gold)", marginTop: 2 }} />
                  <div>
                    <div className="text-[11px] font-bold tracking-wide uppercase mb-1" style={{ color: "var(--corp-gold)" }}>Редкое предложение</div>
                    <div className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                      Видовых лотов такого формата на рынке единицы. Ответим оперативно.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CONTROLS */}
      <div className="w-full max-w-[1240px] flex items-center justify-between mt-4">
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

        <div className="flex items-center gap-1.5">
          {SLIDE_NAMES.map((name, idx) => (
            <button
              key={name}
              onClick={() => setSlide(idx)}
              className="flex flex-col items-center gap-1.5 px-2 py-1"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <span
                className="text-[9px] font-medium tracking-widest uppercase transition-colors"
                style={{ color: idx === slide ? "var(--corp-gold)" : "rgba(255,255,255,0.32)" }}
              >
                {name}
              </span>
              <div
                style={{
                  width: idx === slide ? 32 : 16,
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
