import { Box } from '@chakra-ui/react';
import Footer from '../../components/common/Footer';
import ContactUs from './components/ContactUs';
import Hero from './components/Hero';
import NewAnnouncement from './components/NewAnnounceMent';
import TrainBoySection from './components/TrainBoySection';
import { ScaleFade } from '@chakra-ui/react';

const Home = () => {
  return (
    <ScaleFade in={true} initialScale={0.7}>
      <Box as='main'>
        <NewAnnouncement />
        <Hero />
        <TrainBoySection />
        <ContactUs />
        <Footer />
      </Box>
    </ScaleFade>
  );
};

export default Home;
