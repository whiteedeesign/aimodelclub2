
import React from 'react';
import { 
  ArrowRight, 
  Target, 
  Map, 
  HelpCircle, 
  Search, 
  CheckCircle2, 
  XCircle, 
  Zap,
  ChevronRight
} from 'lucide-react';

export const DiagnosticCTAChapter: React.FC = () => {
  return (
    <div className="flex flex-col items-center border-t border-gray-100 bg-[#FBFBFD]">
      <div className="max-w-[720px] w-full mx-auto px-6 space-y-16 md:space-y-32 py-12 md:py-32">
        
        {/* Заголовок */}
        <section className="space-y-8 md:space-y-10">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1] md:leading-[0.95]">
              Приглашение на диагностическую сессию
            </h2>
          </div>

          <div className="text-lg md:text-[24px] leading-relaxed text-gray-700 font-medium">
            Сейчас у тебя два варианта.
          </div>
        </section>

        {/* Выбор пути */}
        <section className="grid grid-cols-1 gap-6 md:gap-8">
          {/* Вариант 1 */}
          <div className="p-8 md:p-16 bg-white border border-gray-100 rounded-[2rem] md:rounded-[3rem] space-y-6 md:space-y-8 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">Вариант первый</span>
            <h3 className="text-xl md:text-3xl font-black text-gray-900 leading-tight">Закрыть эту статью и продолжить делать то, что делал раньше.</h3>
            <p className="text-base md:text-xl text-gray-500 leading-relaxed">
              Покупать очередные курсы за 2000 рублей. Смотреть бесплатные видео на YouTube. Генерировать картинки, которые никто не покупает. Надеяться, что «в этот раз точно получится».
            </p>
            <div className="p-5 md:p-6 bg-gray-50 rounded-xl md:rounded-2xl border border-gray-100">
               <p className="text-gray-900 font-bold italic text-sm md:text-base">Спойлер: не получится. Потому что ты будешь повторять те же действия и получать тот же результат.</p>
            </div>
          </div>

          {/* Вариант 2 */}
          <div className="p-8 md:p-16 bg-gray-900 text-white rounded-[2rem] md:rounded-[3rem] space-y-6 md:space-y-8 shadow-2xl shadow-blue-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 md:p-12 opacity-10">
              <Zap className="w-[80px] h-[80px] md:w-[140px] md:h-[140px]" />
            </div>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-apple-blue relative z-10">Вариант второй</span>
            <h3 className="text-xl md:text-4xl font-black relative z-10 leading-tight">Разобраться, что конкретно тебе мешает зарабатывать — и получить план.</h3>
            <p className="text-lg md:text-2xl text-gray-300 font-medium relative z-10 leading-relaxed">
              Я предлагаю бесплатную диагностику твоей ситуации.
            </p>
            <p className="text-base md:text-lg text-gray-400 relative z-10 italic leading-relaxed">Не продающий звонок, где тебя час уговаривают купить. А полноценный разбор под микроскопом.</p>
          </div>
        </section>

        {/* План созвона */}
        <section className="space-y-12 md:space-y-16">
          <h3 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tighter">Что мы сделаем на созвоне:</h3>
          
          <div className="space-y-8 md:space-y-12">
            {[
              { 
                icon: <Search className="text-apple-blue" size={24} />, 
                t: "1. Разберём твой прошлый опыт", 
                d: "Что ты уже пробовал. Какие курсы покупал. Что делал и почему не сработало. Найдём корень проблемы — не симптомы, а причину." 
              },
              { 
                icon: <Target className="text-red-500" size={24} />, 
                t: "2. Найдём «дыры», где ты теряешь деньги", 
                d: "Может, ты делаешь контент, но не тот. Или тот, но не умеешь продавать. Или умеешь продавать, но не той аудитории. Определим твоё слабое звено." 
              },
              { 
                icon: <Map className="text-emerald-500" size={24} />, 
                t: "3. Составим персональную карту действий", 
                d: "Не общие советы из интернета. А конкретный план под твою ситуацию: что делать первым шагом, что вторым, что третьим. С учётом твоего времени, опыта и ресурсов." 
              },
              { 
                icon: <HelpCircle className="text-orange-500" size={24} />, 
                t: "4. Ответим на все твои вопросы", 
                d: "Про нишу, про инструменты, про платформы, про риски — про что угодно. Без воды и отговорок «это есть в курсе»." 
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 md:gap-8 group">
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-white border border-gray-100 rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  {/* Fixed: Render icon directly with size set in the array definition to resolve TypeScript error with cloneElement */}
                  {item.icon}
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-lg md:text-2xl font-black text-gray-900 leading-tight">{item.t}</h4>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Кому подходит / не подходит */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="p-8 md:p-10 bg-emerald-50 rounded-[2rem] md:rounded-[3rem] border border-emerald-100 space-y-4 md:space-y-6">
            <h4 className="text-lg md:text-xl font-black text-emerald-900 flex items-center gap-3">
              <CheckCircle2 size={20} /> Для кого это:
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {[
                "Уже пробовал, но результат — ноль",
                "Готов уделять 2-3 часа в день",
                "Хочешь выйти на $2000-5000/мес",
                "Готов инвестировать в систему"
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-emerald-800 font-medium leading-tight text-sm md:text-base">
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-10 bg-red-50 rounded-[2rem] md:rounded-[3rem] border border-red-100 space-y-4 md:space-y-6">
            <h4 className="text-lg md:text-xl font-black text-red-900 flex items-center gap-3">
              <XCircle size={20} /> Для кого НЕ подходит:
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {[
                "Ищешь «волшебную кнопку»",
                "Не готов менять подход",
                "Просто «интересно послушать»",
                "Не собираешься ничего делать"
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-red-800 font-medium leading-tight opacity-70 text-sm md:text-base">
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-red-300 rounded-full mt-2 shrink-0"></div>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Финальный CTA */}
        <section className="text-center space-y-10 md:space-y-12">
          <div className="space-y-4 md:space-y-6 max-w-[600px] mx-auto">
            <p className="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed">Я ценю своё время. Поэтому на диагностику попадают только те, кто реально настроен на результат.</p>
            <h3 className="text-xl md:text-4xl font-black text-gray-900 leading-tight">Как записаться:</h3>
            <p className="text-base md:text-lg text-gray-400 font-medium italic">Нажми кнопку ниже и заполни короткую анкету. Это займёт 2 минуты.</p>
          </div>

          <div className="flex flex-col items-center space-y-6 md:space-y-8">
             <div className="animate-bounce">
                <ChevronRight className="rotate-90 text-apple-blue" size={24} />
             </div>
             
             <button className="group relative bg-apple-blue hover:bg-blue-600 text-white px-8 md:px-16 py-5 md:py-8 rounded-full text-lg md:text-2xl font-black tracking-tight transition-all shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 flex items-center gap-3 md:gap-4">
               ЗАПИСАТЬСЯ НА ДИАГНОСТИКУ
               <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
             </button>
             
             <p className="text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-widest">
               БЕСПЛАТНО • ТОЛЬКО 5 МЕСТ В НЕДЕЛЮ
             </p>
          </div>

          <div className="pt-12 md:pt-24 space-y-6 md:space-y-8">
             <p className="text-gray-400 font-medium italic text-base md:text-lg leading-relaxed">
              В анкеты я задам несколько вопросов, чтобы понять твою ситуацию до созвона. <br className="hidden md:block"/>
              Так мы не потратим время на базовые вещи и сразу перейдём к делу.
             </p>
             <p className="text-gray-900 font-black text-lg md:text-xl leading-relaxed">
               После анкеты я свяжусь with тобой и назначим удобное время.
             </p>
          </div>
        </section>

      </div>
    </div>
  );
};
