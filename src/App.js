import Navbar from './components/Navbar'
import MasterLife from "./components/MasterLife";
import EQbeatsIQ from "./components/EQbeatsIQ";
import DoesThisSoundFamiliar from "./components/DoesThisSoundFamiliar";
import MeetAheadCard from "./components/MeetAheadCard";
import SelfImprovement from "./components/SelfImprovement";
import BeBestYou from "./components/BeBestYou";
import EverWonder from "./components/EverWonder";
import Test from "./components/Test";
import WorkWithUs from "./components/WorkWithUs";
import Openvacancies from "./components/Openvacancies";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="min-h-screen w-screen">
          <Navbar />
          <MasterLife/>
          <EQbeatsIQ />
          <DoesThisSoundFamiliar />
          <MeetAheadCard />
          <SelfImprovement />
          <BeBestYou />
          <EverWonder />
          <Test />
          <WorkWithUs />
          <Openvacancies />
          <Footer />
    </div>
  )
}