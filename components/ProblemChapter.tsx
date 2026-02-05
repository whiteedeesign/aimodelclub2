import React from 'react';
import { 
  MousePointerClick,
  Users2,
  MessageSquareOff,
  TrendingDown,
  Layers
} from 'lucide-react';

export const ProblemChapter: React.FC = () => {
  const holes = [
    {
      id: 1,
      title: "Ты создаёшь контент, а не продукт",
      desc: "Это главная ошибка. Ты генерируешь красивые картинки. Выкладываешь их. Ждёшь, что кто-то придёт и заплатит. Но картинка сама по себе — не продукт. Продукт — это то, за что люди готовы отдать деньги.",
      comparison: {
        bad: "«Вот красивое фото девушки»",
        good: "Эксклюзивность, приватный доступ, кастомы, личное общение."
      },
      icon: <Layers size={20} className="text-red-500 md:w-6 md:h-6" />
    },
    {
      id: 2,
      title: "У тебя нет воронки — есть только аккаунт",
      desc: "Никто не придёт сам. Воронка — это путь от «случайно увидел» до «заплатил деньги». Трафик → Прогрев → Конверсия → Продажа.",
      comparison: {
        bad: "Создал аккаунт, выложил контент и ждёшь.",
        good: "Система привлечения трафика из Twitter/Reddit/TikTok."
      },
      icon: <MousePointerClick size={20} className="text-red-500 md:w-6 md:h-6" />
    },
    {
      id: 3,
      title: "Ты говоришь со всеми — значит, ни с кем",
      desc: "«Все мужчины 18-45» — это не аудитория. Это население планеты. Когда ты пытаешься угодить всем — ты не цепляешь никого. У каждого сегмента (гот, фитнес, азиатки) свои триггеры.",
      comparison: {
        bad: "Размытый, «нормальный» контент.",
        good: "Бить точно в узкий вкус целевой аудитории."
      },
      icon: <Users2 size={20} className="text-red-500 md:w-6 md:h-6" />
    },
    {
      id: 4,
      title: "Ты не умеешь продавать в переписке",
      desc: "Подписчики пришли — дальше что? Вариант А: молчишь и ждёшь. Вариант Б: спамишь «купи-купи». Оба варианта сливают деньги. Продажа в DM — это навык вовлечения.",
      comparison: {
        bad: "Впаривание или гробовая тишина.",
        good: "Коммуникация, которая сама ведёт к сделке."
      },
      icon: <MessageSquareOff size={20} className="text-red-500 md:w-6 md:h-6" />
    }
  ];

  return (
    <div className="flex flex-col items-center border-t border-gray-100 bg-[#FBFBFD]">
      <div className="max-w-[720px] w-full mx-auto px-6 space-y-16 md:space-y-32 py-12 md:py-32">
        
        {/* Заголовок */}
        <section className="space-y-8 md:space-y-10">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1] md:leading-[0.95]">
              4 дыры, через которые утекают твои деньги
            </h2>
            <p className="text-xl md:text-3xl text-gray-400 font-medium tracking-tight">
              У тебя есть контент. Но денег нет. Почему?
            </p>
          </div>

          <div className="text-base md:text-xl leading-relaxed text-gray-700 font-medium space-y-6 md:space-y-8">
            <p>Я разобрал десятки ситуаций таких же людей. И вижу одни и те же ошибки. Четыре дыры, через которые утекает твой потенциальный доход.</p>
            <p className="text-apple-blue font-black italic">Проверь себя.</p>
          </div>
        </section>

        {/* Список дыр */}
        <section className="space-y-12 md:space-y-16">
          {holes.map((hole) => (
            <div key={hole.id} className="relative group">
              <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-red-500/20 to-transparent rounded-full"></div>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                    {hole.icon}
                  </div>
                  <h3 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight">
                    Дыра №{hole.id}: {hole.title}
                  </h3>
                </div>

                <div className="text-base md:text-lg leading-relaxed text-gray-600 space-y-6 md:space-y-8">
                  <p>{hole.desc}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                    <div className="p-5 md:p-8 bg-white border border-gray-100 rounded-2xl md:rounded-3xl space-y-1 md:space-y-3 opacity-60">
                      <span className="text-[9px] md:text-[10px] font-black uppercase text-gray-400 tracking-widest">Как у большинства</span>
                      <p className="text-gray-900 font-bold leading-tight text-sm md:text-base">{hole.comparison.bad}</p>
                    </div>
                    <div className="p-5 md:p-8 bg-apple-blue text-white rounded-2xl md:rounded-3xl space-y-1 md:space-y-3 shadow-lg shadow-blue-500/10">
                      <span className="text-[9px] md:text-[10px] font-black uppercase text-white/50 tracking-widest">Как должно быть</span>
                      <p className="font-black leading-tight text-sm md:text-base">{hole.comparison.good}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Итог раздела */}
        <section className="pt-12 md:pt-20 border-t border-gray-100">
          <div className="p-8 md:p-16 bg-gray-900 text-white rounded-[2rem] md:rounded-[4rem] space-y-6 md:space-y-10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 md:p-12 opacity-10">
                <TrendingDown className="text-red-500 w-[100px] h-[100px] md:w-[180px] md:h-[180px]" />
             </div>
             
             <h3 className="text-2xl md:text-5xl font-black relative z-10 leading-tight tracking-tight">
                Узнал себя?
             </h3>
             
             <p className="text-lg md:text-2xl text-gray-400 font-medium relative z-10">
                Если хотя бы одна из этих дыр — про тебя, не удивляйся, что денег нет.
             </p>
             
             <div className="space-y-4 md:space-y-6 relative z-10">
                <p className="text-xl md:text-2xl font-black text-apple-blue italic">
                   Хорошая новость: все четыре дыры закрываются. Нужна система.
                </p>
                <p className="text-lg md:text-xl font-medium text-gray-300">
                   Сейчас покажу, как она выглядит.
                </p>
             </div>
          </div>

          <div className="pt-16 md:pt-24 flex flex-col items-center">
             <div className="w-[1px] h-20 md:h-32 bg-gradient-to-b from-apple-blue to-transparent"></div>
          </div>
        </section>

      </div>
    </div>
  );
};