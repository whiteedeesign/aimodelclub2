
import React from 'react';
import { 
  PlayCircle, 
  ArrowRight, 
  Target, 
  Globe, 
  MessageSquare, 
  UserCheck, 
  Clock,
  ChevronRight
} from 'lucide-react';

export const BonusChapter: React.FC = () => {
  return (
    <div className="flex flex-col items-center border-t border-gray-100 bg-white">
      <div className="max-w-[720px] w-full mx-auto px-6 space-y-16 md:space-y-32 py-12 md:py-32">
        
        {/* Заголовок */}
        <section className="space-y-8 md:space-y-10">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1] md:leading-[0.95]">
              Что ты получишь сразу после заполнения анкеты
            </h2>
          </div>

          <p className="text-lg md:text-[24px] leading-relaxed text-gray-700 font-medium text-center md:text-left">
            Я хочу, чтобы ты получил пользу ещё до нашего созвона.
          </p>
        </section>

        {/* Карточка бонуса */}
        <section className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-apple-blue rounded-[2.5rem] md:rounded-[3.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative p-8 md:p-16 bg-white border border-gray-100 rounded-2xl md:rounded-[3rem] space-y-8 md:space-y-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-50 rounded-2xl md:rounded-3xl flex items-center justify-center text-purple-600 shrink-0 shadow-inner">
                <PlayCircle size={40} className="md:w-[48px] md:h-[48px]" />
              </div>
              <div className="space-y-2 md:space-y-4">
                <span className="bg-purple-100 text-purple-600 text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">ЗАКРЫТЫЙ УРОК</span>
                <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                  «Сегментация аудитории: кому продавать, чтобы платили»
                </h3>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8 text-base md:text-[21px] leading-relaxed text-gray-700">
              <div className="space-y-3 md:space-y-4">
                <p className="font-bold text-gray-900 text-lg md:text-xl">Почему это важно?</p>
                <p>Большинство новичков делают одну и ту же ошибку: создают контент <span className="text-gray-400 italic">«для всех»</span>.</p>
                <p className="text-xl md:text-2xl font-black text-red-500 italic leading-tight">А «для всех» — значит ни для кого.</p>
              </div>

              <div className="space-y-4 md:space-y-6 pt-4 md:pt-6">
                <p className="font-black text-gray-900 uppercase tracking-tight text-sm md:text-base">В этом уроке я разбираю:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:grid-cols-2 md:gap-6">
                  {[
                    { icon: <Target className="text-red-500" size={18} />, t: "Дорогие сегменты", d: "Кто платит больше всего и почему." },
                    { icon: <UserCheck className="text-emerald-500" size={18} />, t: "Свой клиент", d: "Как говорить на его языке." },
                    { icon: <Globe className="text-apple-blue" size={18} />, t: "Рынок USA", d: "Как достучаться до тех, кто платит в 10 раз больше." },
                    { icon: <MessageSquare className="text-purple-500" size={18} />, t: "Кейсы позиционирования", d: "Конкретные примеры, работающие сейчас." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 md:gap-4 items-start">
                      <div className="mt-1 shrink-0">
                        {/* Fixed: Render icon directly with size set in the array definition to resolve TypeScript error with cloneElement */}
                        {item.icon}
                      </div>
                      <div className="space-y-0.5 md:space-y-1">
                        <p className="font-bold text-gray-900 text-xs md:text-sm">{item.t}</p>
                        <p className="text-gray-500 text-[11px] md:text-sm leading-snug">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 md:p-8 bg-gray-50 rounded-2xl md:rounded-3xl border border-gray-100 italic text-sm md:text-base">
                <p>Это не теория. Это выжимка из реального опыта — моего и учеников. После этого урока ты наконец поймёшь, кому и как продавать свой контент. Даже если до этого месяцами генерировал картинки в пустоту.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Инструкция и CTA */}
        <section className="space-y-12 md:space-y-16 text-center md:text-left">
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tighter leading-none">Как получить:</h3>
            <div className="space-y-3 md:space-y-4">
              {[
                "Нажми кнопку ниже",
                "Заполни анкету (2 минуты)",
                "Получи урок в личные сообщения сразу после отправки"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4 justify-center md:justify-start group">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-gray-100 flex items-center justify-center font-black text-[10px] md:text-xs text-gray-300 group-hover:border-apple-blue group-hover:text-apple-blue transition-colors">
                    {i + 1}
                  </div>
                  <p className="text-lg md:text-2xl font-bold text-gray-800">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium pt-2 md:pt-4">Всё просто. 👇</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-8 md:gap-12">
            <button className="w-full md:w-auto bg-gray-900 text-white px-8 md:px-12 py-5 md:py-8 rounded-full text-lg md:text-2xl font-black tracking-tight hover:bg-black transition-all shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-3 md:gap-4">
              ЗАПОЛНИТЬ АНКЕТУ И ПОЛУЧИТЬ УРОК
              <ArrowRight size={20} className="text-apple-blue md:w-[24px] md:h-[24px]" />
            </button>

            <div className="pt-8 md:pt-10 border-t border-gray-100 w-full space-y-8 md:space-y-12">
              <div className="bg-red-50 p-8 md:p-10 rounded-2xl md:rounded-[3rem] border border-red-100 space-y-4 md:space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5">
                   <Clock className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]" />
                </div>
                <p className="text-base md:text-xl font-bold text-red-900 italic leading-relaxed">
                  P.S. Количество диагностик ограничено. Я провожу их лично, а не делегирую ассистентам. Поэтому беру максимум 10 человек в неделю.
                </p>
                <p className="text-gray-900 font-medium text-sm md:text-base leading-relaxed">
                  Если ты читаешь это — значит, места ещё есть. Но я не знаю, сколько их осталось прямо сейчас.
                </p>
                <p className="text-xl md:text-2xl font-black text-gray-900 tracking-tight leading-tight">
                  Не откладывай на «потом». <span className="text-red-500 underline underline-offset-4 md:underline-offset-8 decoration-2 decoration-red-500/30">«Потом» — это место, где живут нереализованные планы.</span>
                </p>
              </div>

              <div className="flex justify-center">
                <button className="group bg-apple-blue text-white px-8 md:px-12 py-5 md:py-8 rounded-full text-lg md:text-2xl font-black tracking-tight hover:bg-blue-600 transition-all shadow-xl hover:scale-[1.02] flex items-center gap-3 md:gap-4">
                  ЗАПИСАТЬСЯ НА ДИАГНОСТИКУ
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform md:w-[24px] md:h-[24px]" />
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
