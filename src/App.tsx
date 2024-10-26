import React from 'react';
import './App.scss';
import { VideoBlok } from './component/videoBlok/VideoBlok';
import FilmsBlok from './component/filmsBlok/FilmsBlok';
import StoryBlok from './component/storyBlok/storyBlok';
import FounderBlok from './component/founderBlok/FounderBlok';
import FoundingMembers from './component/foundiingMembers/FoundingMembers';
import MembersBenefits from './component/membersBenefits/MembersBenefits';
import FAQBlok from './component/FAQBlok/FAQBlok';
import ContactUs from './component/contactUs/ContactUs';
import StartAnimation from './component/startAnimation/startAnimation';
import Layout from './component/layout/layout';
import Social from './Social/Social';

function App() {
  return (
    <div>

      <div className="App">
        <VideoBlok />
        <section className='global-content'>
          <FilmsBlok />
          <StoryBlok />
          <FounderBlok />
          <FoundingMembers />
          <MembersBenefits />
          <FAQBlok />
          <ContactUs />
        </section>
        <StartAnimation/>
        <Layout/>
        <Social/>
        
      </div>
    </div>

  );
}

export default App;
