import React from 'react';
import { 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Globe, 
  Zap, 
  DollarSign, 
  Star,
  Award
} from 'lucide-react';

export const ProofChapter: React.FC = () => {
  const cases = [
    {
      id: 1,
      title: "$200 за один день — через 3 недели после старта",
      desc: "Этот участник пришёл с типичной проблемой: модель уже была создана, но денег не приносила. Он умел генерировать картинки. Разобрался с нейросетями. Но не понимал, как превратить это в доход.",
      impact: "Что изменилось? Он перестал просто «делать контент» и начал его продавать. По системе, которая работает.",
      metric: "$200/день",
      icon: <DollarSign className="text-emerald-500" />
    },
    {
      id: 2,
      title: "+1900 целевых подписчиков за 3 дня",
      desc: "Один из участников применил стратегию из раздела по трафику. Результат через 3 дня: почти 2000 новых подписчиков. Не ботов. Не случайных людей. Целевую аудиторию, которая готова платить.",
      impact: "Разница — в системе. Когда знаешь, что делать — результаты приходят быстро.",
      metric: "+1900 чел",
      icon: <Users className="text-apple-blue" />
    },
    {
      id: 3,
      title: "$1500/мес на автопилоте — через 3 месяца",
      desc: "Этот участник пошёл дальше. За 3 месяца он не просто вышел на доход — он выстроил систему, которая работает без его постоянного участия.",
      impact: "Нанял ассистента по инструкциям из раздела масштабирования. Теперь получает $1500 в месяц, тратя минимум времени.",
      metric: "Автопилот",
      icon: <Zap className="text-yellow-500" />
    },
    {
      id: 4,
      title: "Первая продажа на 11-й день — полный новичок",
      desc: "Этот кейс важен для тех, кто думает: «У меня нет опыта, я не разберусь». Человек пришёл полным новичком. Не понимал ничего в нейросетях. Никогда не зарабатывал онлайн.",
      impact: "Просто следовал пошаговым инструкциям. Шаг за шагом, без самодеятельности. На 11-й день — первый платёж.",
      metric: "11 дней",
      icon: <Award className="text-orange-500" />
    },
    {
      id: 2, // Typo in original content (id:5 in logic but was 5 in content)? Correcting to 5 for sequential consistency as requested keep info
      title: "$3000/мес из России на рынке USA",
      desc: "Частый вопрос: «А можно ли работать на американский рынок, находясь в СНГ?» Можно. Вот живой пример. Участник работает удалённо из России. Выходит на американскую аудиторию.",
      impact: "Один раздел системы решил проблему монетизации трафика. Теперь он точно знает, как превращать подписчиков в платящих клиентов.",
      metric: "$3000/мес",
      icon: <Globe className="text-indigo-500" />
    },
    {
      id: 6,
      title: "Первый кастомный заказ на $50 — через 14 дней",
      desc: "Ещё один новичок. Две недели в системе. Следовал скриптам из раздела продаж. Не выдумывал своё — просто делал по инструкции.",
      impact: "Результат: клиент сам попросил сделать кастомный сет. Это важный момент — он не «впаривал», клиент сам захотел купить.",
      metric: "За 2 недели",
      icon: <Star className="text-purple-500" />
    }
  ];

  return (
    <div className="flex flex-col items-center border-t border-gray-100 bg-[#FBFBFD]">
      <div className="max-w-[1000px] w-full mx-auto px-6 space-y-16 md:space-y-32 py-12 md:py-32">
        
        {/* Шапка раздела */}
        <section className="max-w-[760px] mx-auto space-y-6 md:space-y-10 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1] md:leading-[0.95]">
              Кейсы тех, кто «дожал»
            </h2>
          </div>

          <div className="text-base md:text-xl leading-relaxed text-gray-700 font-medium space-y-6 md:space-y-8">
            <p>Теория — это хорошо. Но ты наверняка думаешь: «А есть ли реальные примеры? Люди, которые были в моей ситуации — и у них получилось?»</p>
            <p className="text-gray-400 italic">Есть. И это не выдуманные истории «для красоты». Это реальные результаты участников <span className="text-gray-900 font-bold">AI Model Club.</span></p>
          </div>
        </section>

        {/* Сетка кейсов */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white p-6 md:p-12 rounded-2xl md:rounded-[3rem] border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    {item.icon}
                  </div>
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                    Кейс {idx + 1}
                  </span>
                </div>
                
                <h3 className="text-lg md:text-2xl font-black text-gray-900 leading-tight tracking-tight">
                  {item.title}
                </h3>
                
                <div className="space-y-4 md:space-y-6">
                  <p className="text-gray-500 font-medium leading-relaxed italic text-sm md:text-base">
                    {item.desc}
                  </p>
                  <p className="text-gray-900 font-bold leading-relaxed border-l-2 border-apple-blue pl-4 text-sm md:text-base">
                    {item.impact}
                  </p>
                </div>
              </div>

              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-50 flex items-center justify-between">
                <span className="text-apple-blue font-black text-xl md:text-2xl tracking-tighter">{item.metric}</span>
                <CheckCircle2 className="text-gray-200 group-hover:text-apple-blue transition-colors" size={20} />
              </div>
            </div>
          ))}
        </section>

        {/* Резюме кейсов */}
        <section className="max-w-[760px] mx-auto space-y-12 md:space-y-16">
          <div className="p-8 md:p-16 bg-gray-900 text-white rounded-[2rem] md:rounded-[4rem] space-y-8 md:space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 md:p-12 opacity-10">
              <TrendingUp className="w-[80px] h-[80px] md:w-[160px] md:h-[160px]" />
            </div>
            
            <h3 className="text-2xl md:text-5xl font-black relative z-10 leading-tight tracking-tight">
              Что общего у всех этих людей?
            </h3>
            
            <p className="text-lg md:text-2xl text-gray-400 font-medium relative z-10 leading-relaxed">
              Они не гении. Не «особенные». Некоторые — полные новички, которые до этого ничего не зарабатывали онлайн.
            </p>

            <div className="space-y-4 md:space-y-6 relative z-10">
              <p className="text-xl font-black text-apple-blue">Они просто:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {[
                  "Получили работающую систему",
                  "Следовали ей шаг за шагом",
                  "Не пытались изобретать велосипед",
                  "Использовали поддержку"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-apple-blue rounded-full"></div>
                    <span className="font-bold text-base md:text-lg">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8 text-lg md:text-[26px] leading-relaxed text-gray-700 text-center md:text-left">
            <p>Это не «кнопка бабло». Это работа по выверенному алгоритму.</p>
            <p className="text-gray-900 font-black">
              Но это работа, которая даёт результат. В отличие от бесконечного просмотра бесплатных видео и покупки курсов за 2000 рублей.
            </p>
          </div>

          {/* Переход к юридической части */}
          <div className="pt-12 md:pt-24 flex flex-col items-center text-center">
            <p className="text-xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 px-4 leading-tight">
              Возможно, у тебя остался ещё один вопрос. Я слышу его постоянно:
            </p>
            
            <div className="bg-blue-50 px-6 py-4 rounded-xl md:rounded-2xl mb-8 md:mb-12">
               <p className="text-lg md:text-2xl font-black text-apple-blue leading-tight">
                «А это вообще легально? Не будет проблем?»
               </p>
            </div>
            
            <p className="text-lg font-bold text-gray-400 mb-8 md:mb-12 italic">Давай разберём.</p>
            
            <div className="w-[1px] h-20 md:h-32 bg-gradient-to-b from-apple-blue to-transparent"></div>
          </div>
        </section>

      </div>
    </div>
  );
};