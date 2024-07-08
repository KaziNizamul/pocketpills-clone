import SignIn from './components/SignIn';
import GettingStarted from './components/GettingStarted';
import DoctorAppointment from './components/DoctorAppointment';
import CareYouDeserve from './components/CareYouDeserve';
import News from './components/News';
import Switch from './components/Switch';
import styles from './App.module.scss';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className={styles.AppLayout}>
      <SignIn />
      <News />
      <GettingStarted />
      <DoctorAppointment />
      <CareYouDeserve />
      <Switch />
      <Carousel />
    </div>
  )
}

export default App
