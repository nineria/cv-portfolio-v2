import {
  Container2,
  Container3,
  Container4,
  Container5,
  HeaderContainer,
  Text1,
} from '../Interface/Header';
import '../style.css';

import { motion } from 'framer-motion';
import ReactTyped from 'react-typed';
function HomePage() {
  return (
    <HeaderContainer>
      <Container2>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          Welcome To My Portfolio.
        </motion.h1>
      </Container2>
      <Container2>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          Hello There! I'm Pankorn Front-end Developerπ»
        </motion.h1>
        <ReactTyped
          strings={[
            'Front-End Developer, Day Trader, Reader and Listener.',
            'Looking For Internship in Front-end position.',
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop={true}
        />
      </Container2>
      <Container3
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <h3>Get to know me better π</h3>
        <Text1>π¨βπ Full Name: Pankorn Wangsakun</Text1>
        <p>π Nickname: Toon</p>
        <p>πͺ Born on: 9 Obtober 2000 </p>
        <p>π¦ Passionate: Trading, Investing, Reading </p>
      </Container3>
      <Container4
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <h3>Brief Experiences π»ββοΈ</h3>
        <p>π΅ Front-end experience: 1 Years with self study.</p>
        <p>π Team collaboration experience: 1 Years with BU-MIT LAB.</p>
        <p>π³ Real work experience: - </p>
      </Container4>
      <Container5
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <h3>Currently Looking For Internship Positions π»ββοΈ</h3>
        <h4>π Front-end Developer</h4>
        <h4>π UX/UI Design</h4>
        <h4>
          π Any position. I'm ready for learning new things but it might take
          some times.
        </h4>
      </Container5>
    </HeaderContainer>
  );
}

export default HomePage;
