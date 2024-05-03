import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import Folder from '@mui/icons-material/Folder';
import WorkIcon from '@mui/icons-material/Work';
import LanguageIcon from '@mui/icons-material/Language';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { useTranslation } from "react-i18next";



export const AdvantagesBlock: React.FC = () => {
    const { t } = useTranslation();

    return (
      <div className="container">
        <div className="advantages-block white-round">
          <ul className="advantages-block__list">
            <li className="advantages-block__item">
              <div className="advantages-block__item-svg">
                <EditIcon />
              </div>
              <p className="advantages-block__item-text">
                {t("advantagesBlock.textBlock.text1")}
              </p>
            </li>
            <li className="advantages-block__item">
              <div className="advantages-block__item-svg">
                <StarIcon />
              </div>
              <p className="advantages-block__item-text">
                {t("advantagesBlock.textBlock.text2")}
              </p>
            </li>
            <li className="advantages-block__item">
              <div className="advantages-block__item-svg">
                <Folder />
              </div>
              <p className="advantages-block__item-text">
                {t("advantagesBlock.textBlock.text3")}
              </p>
            </li>
            <li className="advantages-block__item">
              <div className="advantages-block__item-svg">
                <WorkIcon />
              </div>
              <p className="advantages-block__item-text">
                {t("advantagesBlock.textBlock.text4")}
              </p>
            </li>
            <li className="advantages-block__item">
              <div className="advantages-block__item-svg">
                <MarkEmailUnreadIcon />
              </div>
              <p className="advantages-block__item-text">
                {t("advantagesBlock.textBlock.text5")}
              </p>
            </li>
            <li className="advantages-block__item">
              <div className="advantages-block__item-svg">
                <LanguageIcon />
              </div>
              <p className="advantages-block__item-text">
                {t("advantagesBlock.textBlock.text6")}
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
};
