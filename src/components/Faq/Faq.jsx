import React, {useContext} from 'react';
import './index.scss';
import {FaqItem} from "./libs/FaqItem";
import {AuthContext} from "../../context";

export const Faq = () => {
  const {setHideSidebar} = useContext(AuthContext);
  setHideSidebar(false);
  const items = [
    {
      title: 'Что такое Гарышкер?',
      description: 'После установки ламп регулировка фар не требуется, так как мы лишь меняем лампы, не трогая регулировочные винты.',
    },
    {
      title: 'Вопросы туда сюда?',
      description: 'После установки ламп регулировка фар не требуется, так как мы лишь меняем лампы, не трогая регулировочные винты.',
    },
    {
      title: 'Какие еще есть вопросы?',
      description: 'После установки ламп регулировка фар не требуется, так как мы лишь меняем лампы, не трогая регулировочные винты.',
    },
    {
      title: 'Как войти в личный кабинет?',
      description: 'После установки ламп регулировка фар не требуется, так как мы лишь меняем лампы, не трогая регулировочные винты.',
    },
  ]
  return (
    <div className="faq">
      <div className="faq__title">Часто задаваемые вопросы</div>
      <div className="faq-items d-flex flex-column">
        {items.map((item) => (
          <FaqItem item={item} />
        ))}
      </div>
      <div className="faq__desc">* Если вы не нашли ответ на свой вопрос в нашем FAQ, вы всегда можете <a href="#">связатся с нами</a> и мы вам ответим. </div>
    </div>
  );
};
