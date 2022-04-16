 
import './App.css';
import { Stack, Box, Button, Container, styled, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
// import { Add as AddIcon} from '@mui/icons-material';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import Add from './components/Add';

function App() {
 
  return (
    <Box>
      <Navbar />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
      >
          <Sidebar/>
          <Feed/>
          <Rightbar/>
      </Stack>
      <Add />
    </Box>
     
   
  );
}

export default App;


