import { Box } from '@chakra-ui/react';
import Footer from '../../components/common/Footer';
import ContactUs from './components/ContactUs';
import Hero from './components/Hero';
import NewAnnouncement from './components/NewAnnounceMent';
import TrainBoySection from './components/TrainBoySection';
import { ScaleFade } from '@chakra-ui/react';
import { useState } from 'react';

const Home = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  return (
    <ScaleFade in={true} initialScale={0.7}>
      <Box as='main'>
        {showAnnouncement && (
          <NewAnnouncement setShowAnnouncement={setShowAnnouncement} />
        )}
        <Hero />
        <TrainBoySection />
        <ContactUs />
        <Footer />
      </Box>
    </ScaleFade>
  );
};

export default Home;
