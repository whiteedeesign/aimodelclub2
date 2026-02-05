import React from 'react';
import { 
  Scale, 
  AlertTriangle, 
  CheckCircle2, 
  Ban, 
} from 'lucide-react';

export const LegalityChapter: React.FC = () => {
  return (
    <div className="flex flex-col items-center border-t border-gray-100 bg-white">
      <div className="max-w-[760px] w-full mx-auto px-6 space-y-16 md:space-y-32 py-12 md:py-32">
        
        {/* Заголовок */}
        <section className="space-y-8 md:space-y-10">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1] md:leading-[0.95]">
              Это вообще легально?
            </h2>
          </div>

          <div className="text-base md:text-xl leading-relaxed text-gray-700 font-medium space-y-6 md:space-y-8">
            <p>Я понимаю, почему ты спрашиваешь.</p>
            <p>В интернете полно «схем заработка», которые заканчиваются блокировками, штрафами или чем похуже. Обжёгшись пару раз, начинаешь с подозрением смотреть на всё новое.</p>
            <p className="text-apple-blue font-black italic text-xl md:text-3xl leading-tight">Поэтому давай разберём этот вопрос честно и без понтов.</p>
          </div>
        </section>

        {/* Суть AI-модели */}
        <section className="space-y-8 md:space-y-12">
          <div className="p-6 md:p-16 bg-gray-50 rounded-2xl md:rounded-[3rem] border border-gray-100 space-y-6 md:space-y-10">
            <div className="flex items-center gap-4 md:gap-6">
              <Scale size={32} className="text-gray-900 md:w-10 md:h-10" />
              <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                Что такое AI-модель с точки зрения закона?
              </h3>
            </div>

            <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed text-gray-700">
              <p>Ты создаёшь цифрового персонажа с помощью нейросетей. Этот персонаж <span className="font-bold text-gray-900 underline decoration-apple-blue/30 decoration-2 md:decoration-4">не существует в реальности.</span> Это не фото реального человека. Это сгенерированное изображение.</p>
              <p>Затем ты создаёшь контент с этим персонажам и продаёшь его на платформах, которые для этого предназначены.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 pt-2 md:pt-4">
                {["Никакого обмана", "Никакого мошенничества", "Никаких серых схем"].map((t, i) => (
                  <div key={i} className="bg-white px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border border-gray-100 flex items-center gap-2 md:gap-3">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span className="text-[10px] md:text-sm font-black uppercase tracking-tight">{t}</span>
                  </div>
                ))}
              </div>
              <p className="font-bold text-gray-900 pt-2 md:pt-4">Ты продаёшь цифровой продукт. Люди покупают цифровой продукт. Сделка честная с обеих сторон.</p>
            </div>
          </div>
        </section>

        {/* Платформы */}
        <section className="space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">А как же платформы? Они разрешают AI-контент?</h3>
            <p className="text-lg md:text-2xl font-black text-apple-blue italic leading-tight">Да. И это важный момент.</p>
          </div>

          <div className="text-base md:text-lg leading-relaxed text-gray-700 space-y-6 md:space-y-8">
            <p>Платформы типа <span className="font-bold">Fanvue</span>, <span className="font-bold">Fansly</span> и другие официально работают с AI-креаторами. Это не лазейка, которую «пока не прикрыли». Это часть их бизнес-модели.</p>
            
            <div className="bg-gray-900 text-white p-8 md:p-16 rounded-2xl md:rounded-[3rem] space-y-6 md:space-y-8">
               <p className="text-xl md:text-2xl font-black">Почему? Потому что им выгодно.</p>
               <p className="text-gray-400">AI-креаторы генерируют много контента. Много контента — много подписчиков. Много подписчиков — много комиссий для платформы.</p>
               
               <div className="p-6 md:p-8 bg-white/5 rounded-xl md:rounded-3xl border border-white/10 flex items-start gap-4 md:gap-6">
                  <AlertTriangle className="text-yellow-400 shrink-0" size={24} />
                  <p className="text-sm md:text-lg leading-relaxed font-medium">
                    <span className="text-white font-black block mb-1 md:mb-2 text-base md:text-lg">Единственное правило:</span>
                    Не выдавать AI за реального человека в контексте мошенничества (не обещать встреч, не просить деньги на «билет»).
                  </p>
               </div>
            </div>
            <p className="italic text-gray-500 font-medium text-sm md:text-base">Но это и так очевидно. Мы продаём контент, а не строим отношения под чужой личиной.</p>
          </div>
        </section>

        {/* Блокировки */}
        <section className="space-y-8 md:space-y-12">
          <div className="flex items-center gap-4 md:gap-6">
            <Ban size={32} className="text-red-500 md:w-10 md:h-10" />
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">А что с блокировками?</h3>
          </div>

          <div className="text-base md:text-lg leading-relaxed text-gray-700 space-y-6 md:space-y-8">
            <p>Блокировки бывают. Но не из-за того, что это «нелегально».</p>
            <p>Блокируют за нарушение правил конкретной платформы. Например, за спам в Twitter или за неправильные хештеги в Instagram.</p>
            
            <div className="p-6 md:p-8 bg-blue-50 border border-apple-blue/10 rounded-2xl md:rounded-3xl space-y-4 md:space-y-6">
               <p className="text-lg md:text-xl font-bold text-gray-900">В клубе мы разбираем, как работать безопасно:</p>
               <ul className="space-y-3 md:space-y-4">
                  {[
                    "Как минимизировать риски на каждой платформе",
                    "Какой контент публиковать, какой — нет",
                    "Как обходить ограничения алгоритмов"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 md:gap-4">
                      <div className="w-1.5 h-1.5 bg-apple-blue rounded-full"></div>
                      <span className="font-medium text-sm md:text-base">{item}</span>
                    </li>
                  ))}
               </ul>
            </div>
            
            <p className="font-bold text-gray-900 border-l-4 border-gray-900 pl-4 md:pl-6 leading-relaxed italic">Если аккаунт всё-таки заблокировали — создаёшь новый и продолжаешь. Это часть игры. Не катастрофа, а рабочий момент.</p>
          </div>
        </section>

        {/* Главный риск */}
        <section className="pt-12 md:pt-20 border-t border-gray-100">
          <div className="p-8 md:p-16 bg-red-50 rounded-[2rem] md:rounded-[4rem] space-y-8 md:space-y-10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 md:p-12 opacity-10 rotate-12">
                <AlertTriangle className="text-red-500 w-[100px] h-[100px] md:w-[180px] md:h-[180px]" />
             </div>
             <h3 className="text-2xl md:text-5xl font-black text-red-900 tracking-tight relative z-10 leading-none">
              Главный риск — не в легальности
             </h3>
             <p className="text-xl md:text-3xl font-black text-red-900/60 relative z-10 leading-tight">Главный риск — в тебе.</p>
             
             <ul className="space-y-6 md:space-y-8 relative z-10">
                {[
                  "Что ты начнёшь и бросишь через две недели",
                  "Что будешь искать «идеальный момент» вместо того, чтобы действовать",
                  "Что снова купишь дешёвый курс и снова получишь ноль"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 md:gap-6">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-red-900/10 flex items-center justify-center shrink-0">
                      <Ban size={14} className="text-red-900" />
                    </div>
                    <span className="text-lg md:text-2xl font-bold text-red-900 tracking-tight leading-tight">{text}</span>
                  </li>
                ))}
             </ul>
          </div>

          <div className="pt-16 md:pt-24 space-y-10 md:space-y-12 text-center">
            <p className="text-lg md:text-[24px] leading-relaxed text-gray-700 font-medium">
              Окей. Ты понял, что это работает. Понял, что это легально. Понял, что другие люди уже получают результат.
            </p>
            
            <p className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
              Вопрос: что дальше?
            </p>

            <div className="pt-12 md:pt-16 flex flex-col items-center">
                 <div className="w-[1px] h-20 md:h-32 bg-gradient-to-b from-apple-blue to-transparent"></div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};