import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
import imgEngFlag from '@/assets/images/common/img-eng-flag.png';
import imgVietNamFlag from '@/assets/images/common/img-vietnam-flag.png';
import './lang-switcher.scss';
import { Image } from '../Image/image';

const { Option } = Select;

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: imgEngFlag },
  { code: 'vi', name: 'Tiếng Việt', flag: imgVietNamFlag },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleLanguageChange}
      size="middle"
      className="language-switcher-circle"
      suffixIcon={null}
      dropdownStyle={{
        minWidth: 40,
      }}
      popupClassName="change-language"
    >
      {languages.map((language) => (
        <Option
          key={language.code}
          value={language.code}
          label={
            <Image
              src={language.flag}
              alt={language.name}
              width={30}
              height={30}
            />
          }
        >
          <Image
            src={language.flag}
            alt={language.name}
            width={24}
            height={24}
          />
        </Option>
      ))}
    </Select>
  );
};

export default LanguageSwitcher;
