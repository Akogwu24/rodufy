import { Box } from '@chakra-ui/react';
import Footer from '../../components/common/Footer';
import ContactUs from './components/ContactUs';
import Hero from './components/Hero';
import NewAnnouncement from './components/NewAnnounceMent';
import TrainBoySection from './components/TrainBoySection';

const Home = () => {
  return (
    <Box as='main'>
      <NewAnnouncement />
      <Hero />
      <TrainBoySection />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default Home;
