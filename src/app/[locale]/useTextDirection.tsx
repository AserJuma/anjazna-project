import { useLocale } from 'next-intl';
// eslint-disable-next-line import/no-extraneous-dependencies
import { isRtlLang } from 'rtl-detect';

export default function useTextDirection(locale: string | undefined) {
  const defaultLocale = useLocale();
  // eslint-disable-next-line no-param-reassign
  if (!locale) locale = defaultLocale;
  return isRtlLang(locale) ? 'rtl' : 'ltr';
}
