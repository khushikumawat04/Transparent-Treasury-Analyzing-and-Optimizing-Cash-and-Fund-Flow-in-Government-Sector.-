import './App.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import { useEffect , useState } from 'react';
import Popup1 from './Component/Navbar/Login/Popup1';
import LoginSignupContainer from './Component/Navbar/Login/LoginSignupContainer';
import Slider1 from './Component/Slider/Slider1';
import Cards from './Component/Cards/Cards';
import Hello from './Component/Hello/Hello';
import Contact from './Component/Contactpage/Contact';
import Footer1 from './Component/Footer/Footer';
import Khargone from "./Component/Nextpage/khargoneTehsil/Khargone";
import ViewLess from "./Component/Carts/VeiwLess";

// import Servpop from "./Component/Servpop/Artculture";

// Schme Routes
import ArtScheme from "./Component/Carts/schemes/Art&culture/ArtScheme";
import AgricultureScheme from "./Component/Carts/schemes/Agriculture/AgricultureScheme";
import EducationScheme from "./Component/Carts/schemes/Education/EducationScheme";
import AnimalHusbandryScheme from "./Component/Carts/schemes/AnimalHubandry/AnimalHumbandryScheme";
import EconomyScheme from "./Component/Carts/schemes/Economy/EconomyScheme";
import HealthAndFamilyScheme from "./Component/Carts/schemes/HealthAndFamily/HealthAndFamilyScheme";
import RuralAndDevelopmentScheme from "./Component/Carts/schemes/RuralAndDevelopment/RuralDevelopmentScheme";
import WomenScheme from "./Component/Carts/schemes/Women&Child/WomenScheme";
import ScienceAndTechnologyScheme from "./Component/Carts/schemes/ScienceAndTechnology/ScienceAndTechnologyScheme";
import WaterScheme from "./Component/Carts/schemes/Water Resources/WaterScheme";
import TransportScheme from "./Component/Carts/schemes/Transport/TransportScheme";
import HomeScheme from "./Component/Carts/schemes/HomeAffair/HomeScheme";
import HousingScheme from "./Component/Carts/schemes/Urban&Housing/HousingScheme";
import BiotechnologyScheme from "./Component/Carts/schemes/Biotechnology/BiotechnologyScheme";
import YuthAndSportsScheme from "./Component/Carts/schemes/YuthAndSports/YuthAndSportsScheme";
import FoodScheme from "./Component/Carts/schemes/Food/FoodScheme";
import Financescheme from "./Component/Carts/schemes/Finance/Financescheme";
import GovernanceAndAdministrationScheme from "./Component/Carts/schemes/GovernaceAndAdministration/GovernaceAndAdministrationScheme";
import PowerandEnergyScheme from "./Component/Carts/schemes/PowerAndEnergy/PowerAndEnergyScheme";
import CommerceScheme from "./Component/Carts/schemes/Commerce/CommerceScheme";
import LabourAndEmploymentScheme from "./Component/Carts/schemes/LabourAndEmployment/LabourAndEmploymentScheme";
import DefenceScheme from "./Component/Carts/schemes/defence/DefenceScheme";
import IndustriesScheme from "./Component/Carts/schemes/Industries/IndustriesScheme";
import InfrastructureScheme from "./Component/Carts/schemes/Infastructure/InfastructureScheme";
import EnvironmentScheme from "./Component/Carts/schemes/Environment&Forest/EnvironmentScheme";
import LowOfJusticeScheme from "./Component/Carts/schemes/LowOfJustice/LowOfJusticeScheme";
import InformationAndBoardScheme from "./Component/Carts/schemes/InformationAndBoard/InformationAndBoardScheme";
import SocialDevelopmentScheme from "./Component/Carts/schemes/SocialDevelopment/SocialDevelopmentScheme";
import MinesScheme from "./Component/Carts/schemes/Mines/MinesScheme";
import TourismScheme from "./Component/Carts/schemes/Tourasim.js/TourismScheme";

// district
import ProperKhargone from "./Component/Nextpage/ProperDistrict/ProperKhargone";
import ProperBarwani from "./Component/Nextpage/ProperDistrict/ProperBarwani";
import ProperKhandwa from "./Component/Nextpage/ProperDistrict/ProperKandwa";
import ProperDhar from "./Component/Nextpage/ProperDistrict/ProperDhar";
import ProperAlirajpur from "./Component/Nextpage/ProperDistrict/ProperAlirajpur";
// tehsil
// khargone
import Barwaha from "./Component/Nextpage/khargoneTehsil/Barwaha";
import Bhagwanpura from "./Component/Nextpage/khargoneTehsil/Bhagwanpura";
import Bhikangaon from "./Component/Nextpage/khargoneTehsil/Bhikangaon";
import Gogaon from "./Component/Nextpage/khargoneTehsil/Gogaon";
import Jhiranya from "./Component/Nextpage/khargoneTehsil/Jhiranya";
import Kasrawad from "./Component/Nextpage/khargoneTehsil/Kasrawad";
import Maheshwar from "./Component/Nextpage/khargoneTehsil/Maheshwar";
import Segaon from "./Component/Nextpage/khargoneTehsil/Segaon";
// barwani
import Anjad from "./Component/Nextpage/BarwaniTehsil/Anjad";
import Thikri from "./Component/Nextpage/BarwaniTehsil/Thikri";
import Rajpur from "./Component/Nextpage/BarwaniTehsil/Rajpur";
import Sendhwa from "./Component/Nextpage/BarwaniTehsil/Sendhwa";
import Niwali from "./Component/Nextpage/BarwaniTehsil/Niwali";
import Pansemal from "./Component/Nextpage/BarwaniTehsil/Pansemal";
import Varla from "./Component/Nextpage/BarwaniTehsil/Varla"
import Barwani from "./Component/Nextpage/BarwaniTehsil/Barwani"
import Pati from "./Component/Nextpage/BarwaniTehsil/Pati"
// Alirajpur
import Alirajpur from "./Component/Nextpage/AlirajpurTehsil/Alirajpur";
import Bhavra from "./Component/Nextpage/AlirajpurTehsil/Bhavra";
import Jobat from "./Component/Nextpage/AlirajpurTehsil/Jobat";
// khandwa
import Harsud from "./Component/Nextpage/KhandwaTehsil/Harsud"
import Khalwa from "./Component/Nextpage/KhandwaTehsil/Khalwa"
import Khandwa from "./Component/Nextpage/KhandwaTehsil/Khandwa"
import Pandhana from "./Component/Nextpage/KhandwaTehsil/Pandhana"
import Punasa from "./Component/Nextpage/KhandwaTehsil/Punasa"

// Dhar
import Badnawar from "./Component/Nextpage/DharTehsil/Badnawar"
import Dahi from "./Component/Nextpage/DharTehsil/Dahi";
import Dhar from "./Component/Nextpage/DharTehsil/Dhar";
import Dharmpuri from "./Component/Nextpage/DharTehsil/Dharmpuri";
import Gandhwani from "./Component/Nextpage/DharTehsil/Gandhwani";
import Kukshi from "./Component/Nextpage/DharTehsil/Kukshi";
import Manawar from "./Component/Nextpage/DharTehsil/Manawar";
import Sadarpur from "./Component/Nextpage/DharTehsil/Sadarpur";

//Maharashtra
import ProperAhemednagar from "./Component/Maharashtra/Properdisrtict/ProperAhmednagar";
import ProperAkola from "./Component/Maharashtra/Properdisrtict/ProperAkola";
import ProperAmravati from "./Component/Maharashtra/Properdisrtict/ProperAmravati";
import ProperAurangabad from "./Component/Maharashtra/Properdisrtict/ProperAurangabad";
import ProperBeed from "./Component/Maharashtra/Properdisrtict/ProperBeed";

//Akola tahsil
import Akola from "./Component/Maharashtra/AkolaTehsil/Akola/Akola";
import Akot from "./Component/Maharashtra/AkolaTehsil/Akola/Akot";
import Balapur from "./Component/Maharashtra/AkolaTehsil/Akola/Balapur";
import Barshitakali from "./Component/Maharashtra/AkolaTehsil/Akola/Barshitakali";
import Murtizapur from "./Component/Maharashtra/AkolaTehsil/Akola/Murtizapur";
import Patur from "./Component/Maharashtra/AkolaTehsil/Akola/Patur";
import Telhara from "./Component/Maharashtra/AkolaTehsil/Akola/Telhara";

// Ahemdhnagar tahsil
import Akole from "./Component/Maharashtra/AhemdhnagarTehsil/Akole";
import Jamkhed from "./Component/Maharashtra/AhemdhnagarTehsil/Jamkhed";
import Karjat from "./Component/Maharashtra/AhemdhnagarTehsil/Karjat";
import Kopargaon from "./Component/Maharashtra/AhemdhnagarTehsil/Kopargaon";
import Nagar from "./Component/Maharashtra/AhemdhnagarTehsil/Nagar";
import Newasa from "./Component/Maharashtra/AhemdhnagarTehsil/Newasa";
import Parner from "./Component/Maharashtra/AhemdhnagarTehsil/Parner";
import Pathardi from "./Component/Maharashtra/AhemdhnagarTehsil/Pathardi";
import Rahata from "./Component/Maharashtra/AhemdhnagarTehsil/Rahata";
import Rahuri from "./Component/Maharashtra/AhemdhnagarTehsil/Rahuri";
import Sangamner from "./Component/Maharashtra/AhemdhnagarTehsil/Sangamner";
import Shevgaon from "./Component/Maharashtra/AhemdhnagarTehsil/Shevgaon";
import Shrigonda from "./Component/Maharashtra/AhemdhnagarTehsil/Shrigonda";
import Shrirampur from "./Component/Maharashtra/AhemdhnagarTehsil/Shrirampur";


// Amravati tahsil
import Achalpur from "./Component/Maharashtra/AmravatiTehsil/Achalpur";
import Amravati from "./Component/Maharashtra/AmravatiTehsil/Amravati";
import AnjangaonSurji from "./Component/Maharashtra/AmravatiTehsil/AnjangaonSurji";
import Bhatkuli from "./Component/Maharashtra/AmravatiTehsil/Bhatkuli";
import Chandurbazar from "./Component/Maharashtra/AmravatiTehsil/Chandurbazar";
import ChandurRailway from "./Component/Maharashtra/AmravatiTehsil/ChandurRailway";
import Chikhaldara from "./Component/Maharashtra/AmravatiTehsil/Chikhaldara";
import Daryapur from "./Component/Maharashtra/AmravatiTehsil/Daryapur";
import DhamangaonRailway from "./Component/Maharashtra/AmravatiTehsil/DhamangaonRailway";
import Dharni from "./Component/Maharashtra/AmravatiTehsil/Dharni";
import Morshi from "./Component/Maharashtra/AmravatiTehsil/Morshi";
import NandgaonKhandeshwar from "./Component/Maharashtra/AmravatiTehsil/NandgaonKhandeshwar";
import Teosa from "./Component/Maharashtra/AmravatiTehsil/Teosa";
import Warud from "./Component/Maharashtra/AmravatiTehsil/Warud";
import SuccessfullStory from './Component/SuccessfullStory/SuccessfullStory';
import JobExams from './Component/JobExams/JobExams';
import Job from './Component/Job & Carrier/JobData2/Job';
import GraphForm from './Component/TrendingData/GraphForm';
// import MpStory from './Component/SuccessfullStory/MpStory/MpStory';
import BankExams from './Component/JobExams/BankExams/BankExams';
import DefenceExams from './Component/JobExams/DefenceExams/DefenceExams';
import Success from './Component/SuccessfullStory/Pagination/Success';
import ChatButton from './Component/Feedback/feedback';
import UkSuccess from './Component/SuccessfullStory/Uttrakhand/UkSuccess';
import TgSuccess from './Component/SuccessfullStory/Telangana/TgSuccess';

function App() {
  const[TimePopup, setTimePopup]=useState(false);
  const [user, setLoginUser] = useState({})
  const [data, setData] = useState("");
  const [villagetable, setVillagetable] = useState();
  const [particulardistrict, setParticulardistrict] = useState();
  useEffect(()=>{
    setTimeout(() => {
      setTimePopup(true);
    },3000)
  },[]);

  
  return (
    <div className='body'>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={
       <>
        <Slider1/>
        <Cards/>
        <About/>
        <GraphForm/>
          
        <ViewLess 
                setVillagetable={setVillagetable}
                setData={setData}
                setParticulardistrict={setParticulardistrict}
                particulardistrict={particulardistrict}
                />
                <SuccessfullStory/>
        {user && user._id ? 
          (<Hello setLoginUser={setLoginUser}/>) :
           (<Popup1 setTimePopup={setTimePopup} TimePopup={TimePopup} setLoginUser={setLoginUser} >
            <LoginSignupContainer setLoginUser={setLoginUser}  />
             
              </Popup1>)}
              <ChatButton/>
             </>
          
        }
        />
          <Route
            path="/village"
            element={
              villagetable === "Khargone" ? (
                <Khargone />
              ) : villagetable === "Barwaha" ? (
                <Barwaha />
              ) : villagetable === "Bhagwanpura" ? (
                <Bhagwanpura />
              ) : villagetable === "Bhikangaon" ? (
                <Bhikangaon />
              ) : villagetable === "Gogaon" ? (
                <Gogaon />
              ) : villagetable === "Jhiranya" ? (
                <Jhiranya />
              ) : villagetable === "Kasrawad" ? (
                <Kasrawad />
              ) : villagetable === "Maheshwar" ? (
                <Maheshwar />
              ) : villagetable === "Segaon" ? (
                <Segaon />
              ) :  villagetable === "B_Anjad" ? (
                <Anjad />
              ) : villagetable === "B_Thikri" ? (
                <Thikri />
              ) :
              villagetable === "B_Rajpur" ? (
                <Rajpur />
              ) :
              villagetable === "B_Sendhwa" ? (
                <Sendhwa />
              ) :
              villagetable === "B_Niwali" ? (
                <Niwali />
              ) :
              villagetable === "B_Pansemal" ? (
                <Pansemal />
              ) :
              villagetable === "B_Varla" ? (
                <Varla />
              ) :
              villagetable === "B_Barwani" ? (
                <Barwani />
              ) :
              villagetable === "B_Pati" ? (
                <Pati />
              ) :villagetable==="kh_Khandawa"?(
                <Khandwa/>
              ):villagetable==="kh_Pandhana"?(
                <Pandhana/>
              ):villagetable==="kh_Punasa"?(
                <Punasa/>
              ):villagetable==="kh_Harsud"?(
                <Harsud/>
              )
              :villagetable==="kh_Khalwa"?(
                <Khalwa/>
              )
              :villagetable==="A_Alirajpur"?(
                <Alirajpur/>
              ): villagetable === "A_Bhavra"?(
                <Bhavra/>
              ):villagetable==="A_Jobat"?(
                <Jobat/>
              ):villagetable==="D_Badnawar"?(
                <Badnawar/>
              ):villagetable==="D_Dahi"?(
                <Dahi/>
              ):villagetable==="D_Dhar"?(
                <Dhar/>
              ):villagetable==="D_Dharampuri"?(
                <Dharmpuri/>
              ):villagetable==="D_Gandhwani"?(
                <Gandhwani/>
              ):villagetable==="D_Kukshi"?(
                <Kukshi/>
              ):villagetable==="D_Manawar"?(
                <Manawar/>
              ):villagetable==="D_Sadarpur"?(
                <Sadarpur/>
              ): 
              
              //Maharastra
              villagetable==="MD_Akola"?(
                <Akola/>
              ):
              villagetable==="MD_Akot"?(
                <Akot/>
              ):
              villagetable==="MD_Balapur"?(
                <Balapur/>
              ):
              villagetable==="MD_Barshitakali"?(
                <Barshitakali/>
              ):
              villagetable==="MD_Murtizapur"?(
                <Murtizapur/>
              ):
              villagetable==="MD_Patur"?(
                <Patur/>
              ):
              villagetable==="MD_Telhara"?(
                <Telhara/>
              ):


              villagetable==="MD_Nagar"?(
                <Nagar/>
              ):
              villagetable==="MD_Newasa"?(
                <Newasa/>
              ):
              villagetable==="MD_Karjat"?(
                <Karjat/>
              ):
              villagetable==="MD_Jamkhed"?(
                <Jamkhed/>
              ):
              villagetable==="MD_Pathardi"?(
                <Pathardi/>
              ):
              villagetable==="MD_Shevgaon"?(
                <Shevgaon/>
              ):
              villagetable==="MD_Shrigonda"?(
                <Shrigonda/>
              ):
              villagetable==="MD_Parner"?(
                <Parner/>
              ):
              villagetable==="MD_Sangamner"?(
                <Sangamner/>
              ):
              villagetable==="MD_Akole"?(
                <Akole/>
              ):
              villagetable==="MD_Rahata"?(
                <Rahata/>
              ):
              villagetable==="MD_Kopargaon"?(
                <Kopargaon/>
              ):
              villagetable==="MD_Shrirampur"?(
                <Shrirampur/>
              ):
              villagetable==="MD_Rahuri"?(
                <Rahuri/>
              ):



              villagetable==="MD_Achalpur"?(
                <Achalpur/>
              ):
              villagetable==="MD_Amravati"?(
                <Amravati/>
              ):
              villagetable==="MD_AnjangaonSurji"?(
                <AnjangaonSurji/>
              ):
              villagetable==="MD_Bhatkuli"?(
                <Bhatkuli/>
              ):
              villagetable==="MD_ChandurRailway"?(
                <ChandurRailway/>
              ):
              villagetable==="MD_Chandurbazar"?(
                <Chandurbazar/>
              ):
              villagetable==="MD_Chikhaldara"?(
                <Chikhaldara/>
              ):
              villagetable==="MD_Daryapur"?(
                <Daryapur/>
              ):
              villagetable==="MD_DhamangaonRailway"?(
                <DhamangaonRailway/>
              ):
              villagetable==="MD_Dharni"?(
                <Dharni/>
              ):
              villagetable==="MD_Morshi"?(
                <Morshi/>
              ):
              villagetable==="MD_NandgaonKhandeshwar"?(
                <NandgaonKhandeshwar/>
              ):
              villagetable==="MD_Teosa"?(
                <Teosa/>
              ):
              villagetable==="MD_Warud"?(
                <Warud/>
              ):


              (
                <ViewLess
                  setVillagetable={setVillagetable}
                  setData={setData}
                  setParticulardistrict={setParticulardistrict}
                  particulardistrict={particulardistrict}
                />
              )
            }
          />
          <Route
            path="/particulardistrict"
            element={
              particulardistrict === "ProperKhargone" ? (
                <ProperKhargone />
              ) : particulardistrict === "ProperBarwani" ? (
                <ProperBarwani />
              ) : particulardistrict === "ProperKhandwa" ? (
                <ProperKhandwa/>
              ) : particulardistrict === "ProperDhar" ? (
                <ProperDhar />
              ) : particulardistrict === "ProperAlirajpur" ? (
                <ProperAlirajpur/>
              ) : 
              particulardistrict === "ProperAhemdnagar" ? (
                <ProperAhemednagar/>
              ) :
              particulardistrict === "ProperAkola" ? (
                <ProperAkola/>
              ) :
              particulardistrict === "ProperAmravati" ? (
                <ProperAmravati/>
              ) :
              particulardistrict === "ProperAurangabad" ? (
                <ProperAurangabad/>
              ) :
              particulardistrict === "ProperBeed" ? (
                <ProperBeed/>
              ) :
               (
                <ViewLess
                  setVillagetable={setVillagetable}
                  setData={setData}
                  setParticulardistrict={setParticulardistrict}
                  particulardistrict={particulardistrict}
                />
              )
            }
          />
          <Route path="/Art&culture" element={<ArtScheme />} />
          <Route path="/Agriculture" element={<AgricultureScheme />} />
          <Route path="/education" element={<EducationScheme />} />
          <Route path="/Economy" element={<EconomyScheme />} />
          <Route path="/Health" element={<HealthAndFamilyScheme />} />
          <Route path="/Animal" element={<AnimalHusbandryScheme />} />
          <Route path="/Rural" element={<RuralAndDevelopmentScheme />} />
          <Route path="/Women" element={<WomenScheme />} />
          <Route path="/Science" element={<ScienceAndTechnologyScheme />} />
          <Route path="/Water" element={<WaterScheme />} />
          <Route path="/Transport" element={<TransportScheme />} />
          <Route path="/HomeAffair" element={<HomeScheme />} />
          <Route path="/HousingUrban" element={<HousingScheme />} />
          <Route path="/Bio" element={<BiotechnologyScheme />} />
          <Route path="/Youth" element={<YuthAndSportsScheme />} />
          <Route path="/Food" element={<FoodScheme />} />
          <Route path="/Finance" element={<Financescheme />} />
          <Route
            path="/Governance"
            element={<GovernanceAndAdministrationScheme />}
          />
          <Route path="/Power" element={<PowerandEnergyScheme />} />
          <Route path="/Commerce" element={<CommerceScheme />} />
          <Route path="/Labour" element={<LabourAndEmploymentScheme />} />
          <Route path="/Defence" element={<DefenceScheme />} />
          <Route path="/Industry" element={<IndustriesScheme />} />
          <Route path="/Infrastructure" element={<InfrastructureScheme />} />
          <Route path="/Environment" element={<EnvironmentScheme />} />
          <Route path="/LawOfJustice" element={<LowOfJusticeScheme />} />
          <Route
            path="/InformationAndBroadcasting"
            element={<InformationAndBoardScheme />}
          />
          <Route path="/Social" element={<SocialDevelopmentScheme />} />
          <Route path="/Mining" element={<MinesScheme />} />
          <Route path="/Travel" element={<TourismScheme />} />
        <Route path='/login' element={<LoginSignupContainer setLoginUser={setLoginUser}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/trendingdata' element={<GraphForm/>}/>
        <Route path='/sector' element={<ViewLess
                setVillagetable={setVillagetable}
                setData={setData}
                setParticulardistrict={setParticulardistrict}
                particulardistrict={particulardistrict}
                />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/successfull' element={<SuccessfullStory/>}/>
        <Route path='/vaccancy' element={<JobExams/>}/>
        <Route path='/job' element={<Job/>}/>
        <Route path='/successStory' element={<Success/>}/>
        <Route path='/bankexam' element={<BankExams/>}/>
        <Route path='/defenceexam' element={<DefenceExams/>}/>
        <Route path="/successStory1" element={<UkSuccess/>}/>
        <Route path="/successStory2" element={<TgSuccess/>}/>
        {/* <Route path="/successStory2" element={<TgSuccess/>}/> */}
      </Routes>
      <div style={{position:"fixed", right:"10px", bottom:"10px"}}>
        <ChatButton/>
      </div>
      <Footer1 />
    </Router>
    </div>
  );
}

export default App;
