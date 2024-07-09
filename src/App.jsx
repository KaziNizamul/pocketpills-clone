import SignIn from './components/SignIn';
import GettingStarted from './components/GettingStarted';
import DoctorAppointment from './components/DoctorAppointment';
import CareYouDeserve from './components/CareYouDeserve';
import News from './components/News';
import Switch from './components/Switch';
import styles from './App.module.scss';
import Prices from './components/Prices';
import Carousel from './components/Carousel';
import Footer from './molecules/Footer';

function App() {
  return (
    <div className={styles.AppLayout}>
      <SignIn />
      <News />
      <GettingStarted />
      <DoctorAppointment />
      <CareYouDeserve />
      <Prices />
      <Switch />
      <Carousel />
      <Footer />
      
    </div>
  )
}

export default App
