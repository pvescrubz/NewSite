import React, { useState } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTranslation } from "react-i18next";
import { Price } from "../components/Price";

export const Pay = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('1');
  const [newContext, setNewContext] = useState('ux');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setNewContext(getCourseTypeFromValue(newValue));
  };

  const getCourseTypeFromValue = (value: string) => {
    switch (value) {
      case '1':
        return 'ux';
      case '2':
        return 'graph_design';
      case '3':
        return 'd3';
      case '4':
        return 'Illustration';
      default:
        return 'ux';
    }
  };

  return (

      <div className="pay">
        <div className="pay-left">
          <Box sx={{ width: '98vw', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="">
                  <Tab label="UX/UI курс" value="1" />
                  <Tab label="Графический Дизайн курс" value="2" />
                <Tab label="3D художник курс" value="3" />
                  <Tab label="Иллюстратор курс" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Price context={newContext} t={t} />
              </TabPanel>
              <TabPanel value="2">
                <Price context={newContext} t={t} />
              </TabPanel>
              <TabPanel value="3">
                <Price context={newContext} t={t} />
              </TabPanel>
              <TabPanel value="4">
                <Price context={newContext} t={t} />
              </TabPanel>
            </TabContext>
          </Box>
        </div>
        <div className="pay-right">
        </div>
      </div>
    
  )
}