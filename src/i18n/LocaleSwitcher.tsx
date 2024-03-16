import {useLocale, useTranslations} from 'next-intl';
import {locales} from './config';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';


export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <div className="flex justify-center items-center my-4 mx-5">
      <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
        {locales.map((cur) => (
          <option key={cur} value={cur} className="text-dark">
            {t('locale', { locale: cur })}
          </option>
        ))}
        <option className="text-dark">
            🇨🇳 中文 
          </option>
      </LocaleSwitcherSelect>
    </div>
  );
}
