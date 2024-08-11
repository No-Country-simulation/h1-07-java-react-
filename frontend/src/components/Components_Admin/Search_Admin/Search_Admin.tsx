import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Institucion_Admin } from '../Instituciones_Admin/Institucion_Admin';
import { Patalogia_Admin } from '../Patologia_Admin/Patalogia_Admin';
import { Medicament_Admin } from '../Medicament_Admin/Medicament_Admin';
import { Farmaceuticas_Admin } from '../Farmaceutica_Admin/Farmaceutica_Admin';
import { Financiadores_Admin } from '../Financiadores_Admin/Financiadores_Admin';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


export function Search_Admin() {
    const [value, setValue] = useState(0);

    function CustomTabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
            </div>
        );
    }

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'orange' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    scrollButtons
                    variant="scrollable"
                    sx={{
                        width: '100%',
                        borderBottom: 'none',
                        '& .MuiTabs-indicator': {
                            display: 'none',
                            color: 'white'
                        },
                        '& .MuiTab-root': {
                            flexGrow: 1,

                        },
                        '& .Mui-selected': {
                            backgroundColor: 'orange',
                            color: 'white',
                            borderRadius: 1,
                        },
                        '& .MuiTab-root:not(.Mui-selected)': {
                            backgroundColor: 'transparent',

                        },
                    }}
                >
                    <Tab label="Instituciones" {...a11yProps(0)} />
                    <Tab label="Medicamentos" {...a11yProps(1)} />
                    <Tab label="Patologias" {...a11yProps(2)} />
                    <Tab label="Farmaceutica" {...a11yProps(3)} />
                    <Tab label="Financiadores" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Institucion_Admin />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Medicament_Admin />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Patalogia_Admin />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Farmaceuticas_Admin />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
               <Financiadores_Admin />
            </CustomTabPanel>
        </Box>
    );
}
