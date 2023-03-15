import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import A from '../asset/11.png';
import B from '../asset/12.png';
import C from '../asset/13.png';
import D from '../asset/14.png';
import E from '../asset/15.png';
import F from '../asset/16.png';
import G from '../asset/17.png';
import H from '../asset/18.png';
import I from '../asset/19.png';
import J from '../asset/20.png';
import K from '../asset/21.png';
import L from '../asset/22.png';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div className='justify-content-center align-item-center'
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example ">
          <Tab label="ALL" {...a11yProps(0)} />
          <Tab label="APP" {...a11yProps(1)} />
          <Tab label="CMS" {...a11yProps(2)} />
          <Tab label="DESIGN" {...a11yProps(3)} />
          <Tab label="E-COMMERCE" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='row '>
          <div className='col '>
       <img src={A} className='w-50'/>
       </div>
       <div className='col '>
       <img src={B} className='w-50'/>
       </div>
       <div className='col'>
       <img src={C}className='w-50'/>
       </div>
       </div>
       <div className='row my-4'>
       <div className='col'>
       <img src={D}className='w-50'/>
       </div>
       <div className='col'>
       <img src={E}className='w-50'/>
       </div>
       <div className='col'>
       <img src={F} className='w-50'/>
       </div>
       </div>
       <div className='row my-4'>
       <div className='col'>
       <img src={G}className='w-50'/>
       </div>
       <div className='col'>
       <img src={H}className='w-50'/>
       </div>
       <div className='col'>
       <img src={I}className='w-50'/>
       </div>
       </div>
       <div className='row my-4'>
       <div className='col'>
       <img src={J}className='w-50'/>
       </div>
       <div className='col'>
       <img src={K}className='w-50'/>
       </div>
       <div className='col'>
       <img src={L}className='w-50'/>
       </div>
       </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='row'>
          <div className='col'>
       <img src={D}className='w-50'/>
       </div>
       <div className='col'>
       <img src={B}className='w-50'/>
       </div>
       <div className='col'>
       <img src={C}className='w-50'/>
       </div>
       </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className='row'>
          <div className='col'>
       <img src={E}className='w-50'/>
       </div>
       <div className='col'>
       <img src={C}className='w-50'/>
       </div>
       <div className='col'>
       <img src={I}className='w-50'/>
       </div>
       </div>
      </TabPanel><TabPanel value={value} index={3}>
      <div className='row'>
          <div className='col'>
       <img src={A}className='w-50'/>
       </div>
       <div className='col'>
       <img src={B}className='w-50'/>
       </div>
       <div className='col'>
       <img src={C}className='w-50'/>
       </div>
       </div>
      </TabPanel><TabPanel value={value} index={4}>
      <div className='row'>
      <div className='col'>
       <img src={J}className='w-50'/>
       </div>
       <div className='col'>
       <img src={K}className='w-50'/>
       </div>
       <div className='col'>
       <img src={L}className='w-50'/>
       </div>
       </div>
      </TabPanel>
    </Box>
  );
}
