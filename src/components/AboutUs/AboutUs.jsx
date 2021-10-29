import React, {useContext, useState} from 'react';
import './index.scss';
import avatar1 from '../../assets/images/avatar_1.png';
import avatar2 from '../../assets/images/avatar_2.png';
import avatar3 from '../../assets/images/avatar_3.png';
import {AuthContext} from "../../context";
import classNames from "classnames";

export const AboutUs = (props) => {
  const {setHideSidebar, setIsAuthPage} = useContext(AuthContext);
  setHideSidebar(false);
  setIsAuthPage(false);
  const [aboutDobroActive, setAboutDobroActive] = useState(false);
  const people = [
    {
      name: 'Founders',
      list: [
        {
          fullName: 'Birzhan Shakarim',
          position: 'Основатель проекта',
          avatar: avatar1,
        },
      ]
    },
    {
      name: 'Команда Media',
      list: [
        {
          fullName: 'Monica Winslow',
          position: 'Руководитель PR-отдела',
          avatar: avatar1,
        },
        {
          fullName: 'Lauren Phillips',
          position: 'Руководитель HR-отдела',
          avatar: avatar2,
        },
        {
          fullName: 'Scott Matthews',
          position: 'Руководитель отдела разработки',
          avatar: avatar3,
        },
      ]
    },
    {
      name: 'Команда Copywriting',
      list: [
        {
          fullName: 'Jessica Hudson',
          position: 'Руководитель SMM-отдела',
          avatar: avatar3,
        },
        {
          fullName: 'Jonathan Pippens',
          position: 'Ведущий дизайнер',
          avatar: avatar2,
        },
        {
          fullName: 'Christine Harlow',
          position: 'Ведущий копирайтер',
          avatar: avatar1,
        },
      ]
    },
  ]
  return (
    <div className="about">
      <div className="about-top">
        <div className="w-100">
          <div className="about__title">
            Как устроен наш проект?
          </div>
          <div className="about__desc">
            Garyshker.com - магический проект, посвященный истории культуры.
            Мы рассказываем самыми разными способами о литературе,
            искусстве, истории и других гуманитарных науках,
            то есть о самом интересном в мире.
          </div>
        </div>
        <div className="w-100">
          <div className="about__title about-mt-96">
            Из чего состоит Garyshker?
          </div>
          <div className="d-flex about-mt-32">
            <div
              className={classNames([
                'about-tab',
                !aboutDobroActive && 'about-tab--active',
              ])}
              onClick={() => setAboutDobroActive(false)}
            >
              Garyshker.education
            </div>
            <div
              className={classNames([
                'about-tab',
                aboutDobroActive && 'about-tab--active',
              ])}
              onClick={() => setAboutDobroActive(true)}
            >
              Garyshker.dobro
            </div>
          </div>
          {aboutDobroActive ? (
              <div>
                <div className="about__desc">
                  Garyshker.dobro – магический проект, посвященный истории культуры. Мы рассказываем самыми разными способами о литературе, искусстве, истории и других гуманитарных науках, то есть о самом интересном в мире.
                </div>
                <button className="about-btn">
                  Перейти —
                </button>
              </div>
          ) : (
              <div>
                <div className="about__desc">
                  Garyshker.com – магический проект, посвященный истории культуры. Мы рассказываем самыми разными способами о литературе, искусстве, истории и других гуманитарных науках, то есть о самом интересном в мире.
                </div>
                <button className="about-btn">
                  Перейти —
                </button>
              </div>
          )}
        </div>
        <div className="about-people w-100 about-mt-96">
          <div className="about__title">
            Из чего состоит Garyshker?
          </div>
          <div className="d-flex flex-column">
            {people.map((n, index) => (
              <div className="about-people__item" key={index}>
                <div className="about-people__item__title">
                  {n.name}
                </div>
                <div className="about-people__list d-flex flex-row flex-wrap">
                  {n.list.map((person, i) => (
                    <div className="about-person__item d-flex flex-column">
                      <img className="about-person__item__img" src={person.avatar} alt="person avatar"/>
                      <div className="about-person__item__name">
                        {person.fullName}
                      </div>
                      <div className="about-person__item__job">
                        {person.position}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-divider" />
      <div className="about-bottom">
        <div className="about-bottom__title">
          Благодарности
        </div>
        <div>
          <div className="about-bottom__desc">
            Спасибо всем нашим бывшим коллегам, без которых Arzamas не был бы таким, какой он есть: Юлии Алексеевой, Надежде Бирюковой, Анастасии Блиновой, Евгению Бунтману, Сергею Бурухину, Дмитрию Голубовскому, Максиму Драчёву, Екатерине Дрязгиной, Рашель Землинской, Дарье Ивановой, Анастасии Индриковой, Михаилу Казинику, Олегу Коронному, Кристине Крыжановской, Анне Лернер, Юлии Логачевой, Игорю Макарову, Алексею Мунипову, Алексею Пономареву, Грише Пророкову, Аполлинарии Острожковой, Юрию Остроменцкому, Данилу Перушеву, Марии Сапожниковой, Варе Скопиной, Ивану Степаненко, Соне Ступеньковой, Петру Сутупову, Асе Тереховой, Андрею Усенко, Леониду Шихалкину и Ивану Шмелеву.
          </div>
          <div className="about-bottom__desc">
            Спасибо всем, кто работал над созданием видеокурсов: Александру Уржанову, Екатерине Ламм, Михаилу Велижеву, Сергею Нурмамеду и его команде — Роману Штыль-Битынь­шу, Дмитрию Альтшулеру, Анатолию Нурмамеду, Юрию Мелюшину, Роману Бахареву.
          </div>
          <div className="about-bottom__desc">
            Спасибо всем фактчекерам, корректорам, расшифровщикам, звукорежиссерам и другим внештатным сотрудникам, с которыми мы постоянно работаем. Без вас мы совсем никуда.
          </div>
        </div>
      </div>
    </div>
  );
};
