import React from 'react';
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakText,
} from '../tweaks-panel.jsx';
import Sidebar from '../components/Sidebar.jsx';
import TopBar from '../components/TopBar.jsx';
import TodayHero from '../components/TodayHero.jsx';
import TodayTasks from '../components/TodayTasks.jsx';
import DoctorMessage from '../components/DoctorMessage.jsx';
import HealthSnapshot from '../components/HealthSnapshot.jsx';
import RecentResults from '../components/RecentResults.jsx';
import CarePlanTiles from '../components/CarePlanTiles.jsx';
import WellnessTips from '../components/WellnessTips.jsx';
import MyHealth from '../components/MyHealth.jsx';
import Therapy from '../components/Therapy.jsx';
import Library from '../components/Library.jsx';
import Orders from '../components/Orders.jsx';
import Shop from '../components/Shop.jsx';

const TWEAK_DEFAULTS = {
  label_home: 'Home',
  label_today: 'My day',
  label_health: 'My health',
  label_tests: 'My tests',
  label_meds: 'My medications',
  label_messages: 'Messages',
  label_library: 'Library',
  label_profile: 'Profile',
  label_therapy: 'Therapy',
  label_orders: 'Orders',
  label_shop: 'Shop',
};

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = React.useState('home');

  const patient = {
    firstName: 'Hina',
    fullName: 'Hina QAA',
    initials: 'H',
    gender: 'Female',
    programDay: 24,
    center: 'PWZ — DXB',
  };

  const labels = {
    home: t.label_home,
    today: t.label_today,
    health: t.label_health,
    tests: t.label_tests,
    meds: t.label_meds,
    messages: t.label_messages,
    library: t.label_library,
    profile: t.label_profile,
    therapy: t.label_therapy,
    orders: t.label_orders,
    shop: t.label_shop,
  };

  const handleNavigate = (id) => setActive(id);
  const handleAction = (id) => setActive(id);

  return (
    <div className="ph-app">
      <Sidebar active={active} onNavigate={handleNavigate} labels={labels} />

      <main className="ph-main">
        <TopBar patient={patient} onAsk={() => alert('Opening Dr.T assistant…')} />

        {active === 'health' || active === 'tests' ? (
          <MyHealth />
        ) : active === 'therapy' ? (
          <Therapy />
        ) : active === 'library' ? (
          <Library />
        ) : active === 'orders' ? (
          <Orders />
        ) : active === 'shop' ? (
          <Shop />
        ) : (
          <>
            <TodayHero patient={patient} onAction={handleAction} />

            <div className="ph-grid-2">
              <TodayTasks />
              <DoctorMessage onOpen={() => setActive('messages')} />
            </div>

            <div className="ph-grid-2">
              <HealthSnapshot />
              <RecentResults onOpen={() => setActive('tests')} />
            </div>

            <CarePlanTiles
              labels={labels}
              onOpen={(id) => {
                if (id === 'tests' || id === 'meds') setActive('health');
                else if (id === 'therapy') setActive('therapy');
                else handleAction(id);
              }}
            />

            <WellnessTips />
          </>
        )}
      </main>

      <TweaksPanel>
        <TweakSection label="Sidebar labels" />
        <TweakText label="Home" value={t.label_home} onChange={(v) => setTweak('label_home', v)} />
        <TweakText label="My day" value={t.label_today} onChange={(v) => setTweak('label_today', v)} />
        <TweakText label="Health" value={t.label_health} onChange={(v) => setTweak('label_health', v)} />
        <TweakText label="Tests" value={t.label_tests} onChange={(v) => setTweak('label_tests', v)} />
        <TweakText label="Meds" value={t.label_meds} onChange={(v) => setTweak('label_meds', v)} />
        <TweakText label="Messages" value={t.label_messages} onChange={(v) => setTweak('label_messages', v)} />
        <TweakText label="Library" value={t.label_library} onChange={(v) => setTweak('label_library', v)} />
        <TweakText label="Profile" value={t.label_profile} onChange={(v) => setTweak('label_profile', v)} />
        <TweakSection label="Other" />
        <TweakText label="Therapy" value={t.label_therapy} onChange={(v) => setTweak('label_therapy', v)} />
        <TweakText label="Orders" value={t.label_orders} onChange={(v) => setTweak('label_orders', v)} />
        <TweakText label="Shop" value={t.label_shop} onChange={(v) => setTweak('label_shop', v)} />
      </TweaksPanel>
    </div>
  );
}
