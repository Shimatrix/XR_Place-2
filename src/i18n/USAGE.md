## Как использовать в поддержку другого языка в компоненте
### 1. Вставляем в файл с компонентом такой импорт
```typescript
import { useTranslation } from 'react-i18next';
```
### 2. В компоненте прописываем
```typescript
const { t } = useTranslation();
```
### 3. Заполняем файлы `en.json` и `ru.json`
```json
  // en.json
{
  "cover": {
    "description": "Convenient tools for property presentations...",
    "button": "Request a Demo"
  }
}
  // ru.json
{

  "cover": {
    "description": "Удобные инструменты для презентации объектов...",
    "button": "Назначить демо"
  }

}
```
### 4. Заменяем в компоненте статичный текст на ключи переводов
```typescript
<div className={styles.description}>
  {t('cover.description')}
</div>
...
<button className={styles.button}>
  {t('cover.button')}
  <img className={styles.button_arrow} src={arrow} alt="arrow" />
</button>
```

