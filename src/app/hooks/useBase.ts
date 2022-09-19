import { useTranslation } from "react-i18next";

export const useBase = () => {
  const { t } = useTranslation();
  return { t };
};
