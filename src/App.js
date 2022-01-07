import React from 'react';
import Nav from './components/Nav';
import PageLayouts from './components/PageLayouts';
import { FullPage, Slide } from 'react-full-page';
import modelsBG from './img/model-s.jpg'
import modelyBG from './img/model-y.jpg'
import model3BG from './img/model-3.jpg'
import modelxBG from './img/model-x.jpg'
import solarpanelBG from './img/solar-panel.jpg'
import solarroofBG from './img/solar-roof.jpg'
import accessoriesBG from './img/accessories.jpg'


function App() {
  return (
    <div className="App">
      <FullPage>
        <Nav />
        <Slide>
          <PageLayouts title="Model S" description="Order Online for Touchless Delivery" image={modelsBG} leftBtntext="Customer order" rightBtntext="Existing inventory" arrowDown="true" />
        </Slide>
        <Slide>
          <PageLayouts title="Model Y" description="Order Online for Touchless Delivery" image={modelyBG} leftBtntext="Customer order" rightBtntext="Existing inventory" />
        </Slide>
        <Slide>
          <PageLayouts title="Model 3" description="Order Online for Touchless Delivery" image={model3BG} leftBtntext="Customer order" rightBtntext="Existing inventory" />
        </Slide>
        <Slide>
          <PageLayouts title="Model X" description="Order Online for Touchless Delivery" image={modelxBG} leftBtntext="Customer order" rightBtntext="Existing inventory" />
        </Slide>
        <Slide>
          <PageLayouts title="Solar Panels" description="Lowest Cost Solar Panels in America" image={solarpanelBG} leftBtntext="order now" rightBtntext="Learn more" />
        </Slide>
        <Slide>
          <PageLayouts title="Solar Roof" description="Produce Clean Energy From Your Roof" image={solarroofBG} leftBtntext="order now" rightBtntext="Learn more" />
        </Slide>
        <Slide>
          <PageLayouts title="Accessories" description="Produce Clean Energy From Your Roof" image={accessoriesBG} leftBtntext="shop now" footer="true" />
        </Slide>
      </FullPage>
    </div>
  );
}

export default App;
