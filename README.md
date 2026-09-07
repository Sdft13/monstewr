# Monster Hunter Portfolio

Учебный веб-проект по теме «Организация рабочей среды для веб-проекта».

## Структура

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
└── README.md
```

## Использованные инструменты

- Figma — планирование дизайна/макета;
- Visual Studio Code — написание кода;
- Google Chrome — проверка страницы;
- Chrome DevTools — проверка адаптивности и элементов;
- Git — контроль версий;
- GitHub — хранение и публикация репозитория.

## Запуск

1. Открыть папку проекта в Visual Studio Code.
2. Открыть `index.html` в Google Chrome.
3. Для проверки DevTools нажать `F12` или `Ctrl + Shift + I`.
4. Переключить режим устройства через иконку телефона/планшета.

## Git

```bash
git init
git add .
git commit -m "Первоначальная версия проекта"
```

После создания репозитория на GitHub:

```bash
git branch -M main
git remote add origin ССЫЛКА_НА_ВАШ_GITHUB_РЕПОЗИТОРИЙ
git push -u origin main
```

После небольшого изменения:

```bash
git add .
git commit -m "Обновил главную страницу"
git push
```

## История изменений

Пример:

```text
* Обновил главную страницу
* Первоначальная версия проекта
```

Проверить историю можно командой:

```bash
git log --oneline
```

## Публикация

Для публикации через GitHub Pages:
1. Открыть Settings → Pages.
2. В разделе Source выбрать `Deploy from a branch`.
3. Выбрать ветку `main` и папку `/ (root)`.
4. Сохранить настройки.
