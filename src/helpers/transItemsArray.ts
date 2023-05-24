import { useTranslation } from 'react-i18next';

export const GetTranslatedItemsArray = (): Array<any> => {
  const { t } = useTranslation();
  const objItems = t('items', { returnObjects: true }) as Array<any>;
  const arrItems = [...objItems];
  return arrItems;
};
