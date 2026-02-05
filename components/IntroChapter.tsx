import React from 'react';
import { Clock, Quote, ArrowDown, Compass, X } from 'lucide-react';

export const IntroChapter: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Эпичный вход */}
      <section className="min-h-[80vh] md:min-h-screen w-full flex flex-col items-center justify-center bg-white relative overflow-hidden px-6">
        <div className="absolute top-0 right-0 p-10 md:p-20 opacity-[0.02] pointer-events-none">
          <Clock className="w-[300px] h-[300px] md:w-[800px] md:h-[800px]" strokeWidth={1} />
        </div>
        
        <div className="max-w-[800px] w-full space-y-6 md:space-y-12 relative z-10 text-center md:text-left">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-[94px] font-black tracking-[-0.05em] leading-[1.1] md:leading-[0.9] text-gray-900">
              «Где твои деньги?»
            </h1>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-[54px] font-medium text-gray-400 leading-tight">
              Почему генерация картинок в ИИ не приносит доход и как превратить ИИ-модель в стабильный актив.
            </p>
          </div>

          <div className="pt-10 md:pt-20 animate-bounce opacity-20 hidden md:flex justify-center md:justify-start">
            <ArrowDown size={32} />
          </div>
        </div>
      </section>

      {/* Контентная часть */}
      <div className="max-w-[720px] w-full mx-auto px-6 space-y-16 md:space-y-32 py-12 md:py-32">
        
        <section className="space-y-8 md:space-y-12 text-lg md:text-2xl leading-[1.55] text-gray-700 font-medium">
          <div className="space-y-6 md:space-y-10">
            <p>Смотрел видео про нейросети. Разбирался с ChatGPT или Nano Banana. Может, даже купил какой-то курс за пару тысяч рублей.</p>
            <p>Генерировал картинки. Радовался результатам. Показывал друзьям: «Смотри, как круто нейронка рисует!»</p>
          </div>

          <div className="py-12 md:py-24 border-y border-gray-100 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4 md:mb-6 leading-tight">
              А потом открывал банковское приложение...
            </h2>
            <p className="text-gray-400 text-lg md:text-3xl font-bold leading-tight">
              — и там всё те же цифры. Ничего не изменилось.
            </p>
          </div>

          <div className="pt-6 text-center md:text-left">
            <h3 className="text-3xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8 md:mb-12">Знакомо?</h3>
            <p className="text-gray-500 text-base md:text-xl">Я постоянно получаю сообщения от таких людей. Они пишут примерно одно и то же:</p>
          </div>
        </section>

        {/* Цитаты-боли */}
        <section className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {[
              "«Я уже пробовал ChatGPT, прикольно, но денег в кармане не прибавилось».",
              "«Купил курс по AI — там одна вода. Общие слова, никакой конкретики».",
              "«Умею генерировать картинки, но не понимаю, как на этом зарабатывать»."
            ].map((quote, i) => (
              <div key={i} className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-gray-100 shadow-sm flex gap-4 md:gap-6 items-start">
                <Quote className="text-apple-blue/20 shrink-0" size={24} />
                <p className="text-lg md:text-2xl font-semibold text-gray-800 italic leading-snug">{quote}</p>
              </div>
            ))}
          </div>
          
          <div className="pt-6 md:pt-10">
            <div className="p-8 md:p-16 bg-red-50 rounded-2xl md:rounded-[3rem] border border-red-100">
               <span className="text-red-500 font-black text-[10px] md:text-xs uppercase tracking-widest block mb-4">Самое болезненное:</span>
               <p className="text-xl md:text-4xl font-black text-red-900 tracking-tight leading-tight">
                «Наверное, это просто не моё. Или я что-то делаю не так».
               </p>
            </div>
          </div>
        </section>

        {/* Момент истины: Карта */}
        <section className="space-y-12 md:space-y-16">
          <div className="flex items-center space-x-4 md:space-x-8">
            <h2 className="text-4xl md:text-[110px] font-black text-apple-blue tracking-tighter leading-none">СТОП.</h2>
            <div className="h-0.5 md:h-1 flex-1 bg-gray-100 rounded-full"></div>
          </div>

          <div className="text-lg md:text-[32px] leading-tight font-black text-gray-900 tracking-tight">
            <p>Давай кое-что проясним прямо сейчас.</p>
          </div>

          <div className="text-base md:text-[24px] leading-relaxed text-gray-600 font-medium space-y-10 md:space-y-12">
            <p>Если ты пробовал и не получилось — это не значит, что ты тупой. Не значит, что у тебя «не те руки». Не значит, что заработок на AI-моделях — это миф для избранных.</p>
            
            <div className="relative pt-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-px bg-gray-100 rounded-2xl md:rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl">
                  {/* Left Side: Wrong Path */}
                  <div className="bg-white p-8 md:p-14 space-y-6 md:space-y-8 flex-1">
                     <div className="flex items-center gap-3 text-red-500">
                        <X size={20} />
                        <span className="font-black uppercase tracking-widest text-[9px] md:text-xs">Что тебе дали</span>
                     </div>
                     <h4 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight leading-none">Неправильная карта</h4>
                     <ul className="space-y-4 md:space-y-6">
                        {[
                           "Генерировать картинки",
                           "Обычные инструменты",
                           "Теоретический «курс»"
                        ].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 md:gap-4 text-gray-400 font-medium line-through decoration-red-500/20 text-sm md:text-base">
                              <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gray-200"></span>
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Right Side: Correct Path */}
                  <div className="bg-gray-900 p-8 md:p-14 space-y-6 md:space-y-8 flex-1">
                     <div className="flex items-center gap-3 text-apple-blue">
                        <Compass size={20} />
                        <span className="font-black uppercase tracking-widest text-[9px] md:text-xs">Чего не хватает</span>
                     </div>
                     <h4 className="text-xl md:text-3xl font-black text-white tracking-tight leading-none">Реальный бизнес</h4>
                     <ul className="space-y-4 md:space-y-6">
                        {[
                           "Превращение в деньги",
                           "Рабочая система",
                           "Бизнес-модель"
                        ].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 md:gap-4 text-white font-black text-sm md:text-base">
                              <span className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-apple-blue shadow-[0_0_10px_rgba(0,122,255,0.8)]"></span>
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            <p className="pt-8 md:pt-10 border-t border-gray-100 font-bold text-gray-400 italic text-sm md:text-base">
              И это не твоя вина. Это вина тех, кто продаёт теорию под видом практики.
            </p>

            <div className="pt-12 md:pt-32 space-y-8 text-center md:text-left">
              <p className="text-2xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight">
                Сейчас я объясню, почему твои прошлые попытки не сработали. 
              </p>
              <p className="text-xl md:text-3xl font-medium text-apple-blue">
                И что нужно сделать по-другому, чтобы наконец увидеть деньги на счету.
              </p>
              
              <div className="pt-12 md:pt-20 flex flex-col items-center md:items-start">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-300 mb-6 md:mb-8">Листай дальше</span>
                 <div className="w-[1px] h-20 md:h-32 bg-gradient-to-b from-apple-blue to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
