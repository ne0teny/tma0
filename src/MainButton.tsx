import React, { useEffect } from 'react';
import * as WebApp from '@twa-dev/sdk';

interface MainButtonProps {
  text: string; // Текст на кнопке
  onClick: (link: string) => void; // Функция обратного вызова при клике
}

const MainButton: React.FC<MainButtonProps> = ({ text, onClick }) => {
  useEffect(() => {
    WebApp.MainButton.setText(text); // Устанавливаем текст кнопки
    WebApp.MainButton.show(); // Показываем кнопку

    const handleClick = () => {
      WebApp.sendData(text); // Отправляем текст кнопки в Telegram
      // Здесь вы можете добавить логику для получения ссылки и вызова функции обратного вызова onClick
    };

    WebApp.MainButton.onClick(handleClick);

    return () => {
      WebApp.MainButton.hide(); // Скрываем кнопку при размонтировании компонента
      WebApp.MainButton.offClick(handleClick); // Удаляем обработчик клика
    };
  }, [text, onClick]); // Зависимости для обновления текста и обработчика

  return null; // Компонент не рендерит ничего, только управляет MainButton
};

export default MainButton;
