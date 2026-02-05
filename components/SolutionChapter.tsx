import React from 'react';
import { 
  User,
  Navigation,
  Crosshair,
  MessageSquare
} from 'lucide-react';

export const SolutionChapter: React.FC = () => {
  return (
    <div className="flex flex-col items-center border-t border-gray-100 bg-white">
      <div className="max-w-[720px] w-full mx-auto px-6 py-12 md:py-32 space-y-16 md:space-y-24">
        
        {/* Вступление */}
        <section className="space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter leading-[1.1] md:leading-[1.05]">
            Как выглядит система, которая приносит деньги
          </h2>
          <div className="text-base md:text-xl leading-relaxed text-gray-600 space-y-4 md:space-y-6">
            <p>Окей, ты понял, где дыры. Теперь давай разберём, как их закрыть.</p>
            <p>Я покажу тебе схему, по которой работают те, кто реально зарабатывает на AI-моделях. Не теорию из головы — а систему, которую я выстроил сам и которую внедряют мои ученики.</p>
          </div>
        </section>

        {/* Уровень 1 */}
        <section className="space-y-8 md:space-y-12">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-900 text-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-lg md:text-2xl shrink-0 shadow-lg shadow-gray-200">
              1
            </div>
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Фундамент — продукт, а не картинки
            </h3>
          </div>

          <div className="text-base md:text-lg leading-relaxed text-gray-600 space-y-6 md:space-y-8">
            <p>Первое, что нужно сделать — перестать думать категориями «контент» и начать думать категориями «продукт». Твой продукт — это не фотографии. Твой продукт — это <span className="text-gray-900 font-bold">персонаж.</span></p>
            
            <div className="bg-gray-50 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-gray-100">
              <p className="font-bold text-gray-900 mb-6 text-sm md:text-base uppercase tracking-widest">У персонажа есть:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  { t: "Внешность", d: "Уникальная и узнаваемая." },
                  { t: "Характер", d: "Стиль общения и реакции." },
                  { t: "История", d: "То, что делает её интересной." },
                  { t: "Линейка", d: "От бесплатных до кастомов." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <User size={18} className="text-apple-blue mt-1 shrink-0" />
                    <div>
                      <span className="font-bold text-gray-900 block text-sm md:text-base">{item.t}</span>
                      <span className="text-xs md:text-sm text-gray-500">{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg md:text-xl font-bold text-gray-900 italic border-l-4 border-apple-blue pl-4 md:pl-6 leading-relaxed">
              Когда у тебя есть персонаж — люди подписываются не на картинки. Они подписываются на неё. Хотят видеть больше, общаться и получать эксклюзив.
            </p>
          </div>
        </section>

        {/* Уровень 2 */}
        <section className="space-y-8 md:space-y-12">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-900 text-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-lg md:text-2xl shrink-0 shadow-lg shadow-gray-200">
              2
            </div>
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Воронка — путь от «увидел» до «заплатил»
            </h3>
          </div>

          <div className="space-y-6 md:space-y-10">
            {[
              { s: "Шаг 1: Трафик", d: "Создание аккаунтов-крючков в Twitter, Reddit, TikTok. Задача — вызвать желание увидеть больше." },
              { s: "Шаг 2: Переход", d: "Ссылка на платную платформу в профиле. Конвертируем любопытство в подписку." },
              { s: "Шаг 3: Прогрев", d: "Даём ценность, общение и внимание внутри платформы. Создаём связь." },
              { s: "Шаг 4: Монетизация", d: "Продажа эксклюзива, кастомных сетов и чаевые. Логичный итог вовлечения." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 md:gap-6 group">
                <div className="mt-1">
                  <Navigation size={18} className="text-apple-blue group-hover:scale-110 transition-transform md:w-5 md:h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-black text-gray-900 text-base md:text-xl">{step.s}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Уровень 3 */}
        <section className="space-y-8 md:space-y-12">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-900 text-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-lg md:text-2xl shrink-0 shadow-lg shadow-gray-200">
              3
            </div>
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Сегментация — бить точно в цель
            </h3>
          </div>

          <div className="text-base md:text-lg leading-relaxed text-gray-600 space-y-6 md:space-y-8">
            <p>Ты не можешь нравиться всем. Твоя задача — выбрать сегмент и стать лучшим выбором для него.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {[
                "Определи типаж модели",
                "Найди, где тусуется аудитория",
                "Говори на их языке",
                "Дай им то, что они хотят"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Crosshair size={18} className="text-apple-blue shrink-0" />
                  <span className="font-bold text-gray-800 text-sm md:text-base">{text}</span>
                </div>
              ))}
            </div>

            <p className="bg-gray-900 text-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] font-medium leading-relaxed italic text-base md:text-lg">
              Когда ты бьёшь в узкий сегмент — ты перестаёшь быть «одним из тысячи». Ты становишься <span className="text-apple-blue font-black">«тем самым аккаунтом»</span> для своей аудитории.
            </p>
          </div>
        </section>

        {/* Уровень 4 */}
        <section className="space-y-8 md:space-y-12">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-900 text-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-lg md:text-2xl shrink-0 shadow-lg shadow-gray-200">
              4
            </div>
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Продажи — превращаем подписчиков в деньги
            </h3>
          </div>

          <div className="space-y-6 md:space-y-8">
            <p className="text-base md:text-lg leading-relaxed text-gray-600">Коммуникация, которая продаёт. Это не «впаривание», а обмен ценностями.</p>
            
            <div className="space-y-3 md:space-y-4">
              {[
                { t: "Приветствие", d: "Тёплое, личное, без призывов купить сразу." },
                { t: "Вовлечение", d: "Общение, внимание к интересам подписчика." },
                { t: "Предложение", d: "Нативная продажа в контексте разговора." },
                { t: "Закрытие", d: "Сделка, благодарность и удержание клиента." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 md:p-6 rounded-2xl border border-gray-100 flex items-start gap-4 shadow-sm">
                  <MessageSquare size={18} className="text-apple-blue mt-1 shrink-0 md:w-5 md:h-5" />
                  <div>
                    <span className="font-black text-gray-900 block text-base md:text-lg leading-none mb-1">{item.t}</span>
                    <span className="text-gray-500 text-xs md:text-base leading-relaxed">{item.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Собираем всё вместе */}
        <section className="pt-12 md:pt-16 border-t border-gray-100 text-center space-y-10 md:space-y-12">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">Собираем всё вместе</h3>
            <p className="text-sm md:text-lg text-gray-500 font-medium italic leading-relaxed">Когда все четыре элемента на месте — деньги появляются. <br className="hidden md:block" /> <span className="text-gray-900 font-black not-italic uppercase tracking-widest text-[10px] md:text-sm">Это не магия. Это математика.</span></p>
          </div>

          <div className="space-y-6 md:space-y-8">
            <p className="text-xl md:text-3xl font-black text-gray-900 leading-tight">
              Звучит логично. Но сработает ли это у тебя?
            </p>
            <p className="text-apple-blue font-black text-lg md:text-xl">
              Давай посмотрим на тех, у кого уже сработало.
            </p>
            <div className="flex flex-col items-center">
               <div className="w-px h-20 md:h-32 bg-gradient-to-b from-apple-blue to-transparent"></div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};