import React from 'react';
import Nav from './components/Nav';
import PageLayouts from './components/PageLayouts';
import { FullPage, Slide } from 'react-full-page';

function App() {
  return (
    <div className="App">
      <FullPage>
        <Nav />
        <Slide>
          <PageLayouts title="Model S" description="Order Online for Touchless Delivery" image="/img/model-s.jpg" leftBtntext="Customer order" rightBtntext="Existing inventory" arrowDown="true" />
        </Slide>
        <Slide>
          <PageLayouts title="Model Y" description="Order Online for Touchless Delivery" image="/img/model-y.jpg" leftBtntext="Customer order" rightBtntext="Existing inventory" />
        </Slide>
        <Slide>
          <PageLayouts title="Model 3" description="Order Online for Touchless Delivery" image="/img/model-3.jpg" leftBtntext="Customer order" rightBtntext="Existing inventory" />
        </Slide>
        <Slide>
          <PageLayouts title="Model X" description="Order Online for Touchless Delivery" image="/img/model-x.jpg" leftBtntext="Customer order" rightBtntext="Existing inventory" />
        </Slide>
        <Slide>
          <PageLayouts title="Solar Panels" description="Lowest Cost Solar Panels in America" image="/img/solar-panel.jpg" leftBtntext="order now" rightBtntext="Learn more" />
        </Slide>
        <Slide>
          <PageLayouts title="Solar Roof" description="Produce Clean Energy From Your Roof" image="/img/solar-roof.jpg" leftBtntext="order now" rightBtntext="Learn more" />
        </Slide>
        <Slide>
          <PageLayouts title="Accessories" description="Produce Clean Energy From Your Roof" image="/img/accessories.jpg" leftBtntext="shop now" footer="true" />
        </Slide>
      </FullPage>
    </div>
  );
}

export default App;
