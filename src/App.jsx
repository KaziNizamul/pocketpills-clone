import SignIn from './components/SignIn';
import GettingStarted from './components/GettingStarted';
import DoctorAppointment from './components/DoctorAppointment';
import CareYouDeserve from './components/CareYouDeserve';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.AppLayout}>
      <SignIn />
      <GettingStarted />
      <DoctorAppointment />
      <CareYouDeserve />
    </div>
  )
}

export default App
