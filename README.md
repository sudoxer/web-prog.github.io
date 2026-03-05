# web-prog

Учебный макет интернет-магазина без backend-логики.

## Структура
- `frontend/` — все HTML, CSS и JS файлы.
- `resources/images/` — папка под изображения и прочие ресурсы.

## Страницы
- `frontend/index.html` — главная.
- `frontend/electronics.html` — каталог электроники (9 товаров, сетка 3x3).
- `frontend/clothing.html` — каталог одежды (9 товаров, сетка 3x3).
- `frontend/home.html` — каталог бытовых товаров (9 товаров, сетка 3x3).

## Запуск
Откройте любой HTML файл напрямую в браузере или поднимите локальный сервер:

```bash
cd frontend
python3 -m http.server 8000
```

После этого сайт будет доступен по адресу `http://localhost:8000`.
