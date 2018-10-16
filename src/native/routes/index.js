import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import RecipesContainer from '../../containers/Recipes';
import RecipesComponent from '../components/Recipes';
import RecipeViewComponent from '../components/Recipe';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/Profile';

import HomeComponent from '../components/About';
import HomeContainer from '../../containers/Home';

import EventComponent from '../components/Event';
import EventContainer from '../../containers/Event';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Stack
        key="profile"
        title="PRINCIPAL"
        icon={() => <Icon name="contact" {...DefaultProps.icons} />}
        {...DefaultProps.navbarProps}
      >
        <Scene
          key="profileHome"
          component={MemberContainer}
          Layout={ProfileComponent}
        />
        <Scene
          back
          key="signUp"
          title="Crear Usuario"
          {...DefaultProps.navbarProps}
          component={SignUpContainer}
          Layout={SignUpComponent}
        />
        <Scene
          back
          key="login"
          title="LOGIN"
          {...DefaultProps.navbarProps}
          component={LoginContainer}
          Layout={LoginComponent}
        />
        <Scene
          back
          key="forgotPassword"
          title="Olvidé Contraseña"
          {...DefaultProps.navbarProps}
          component={ForgotPasswordContainer}
          Layout={ForgotPasswordComponent}
        />
      </Stack>
      <Stack
        key="home"
        title={AppConfig.appName.toUpperCase()}
        icon={() => <Icon name="planet" {...DefaultProps.icons} />}
        {...DefaultProps.navbarProps}
      >
        <Scene
          back={false}
          key="home"
          {...DefaultProps.navbarProps}
          component={HomeContainer}
          Layout={HomeComponent}
        />
        <Scene
          back={true}
          key="event"
          title="Evento"
          {...DefaultProps.navbarProps}
          component={EventContainer}
          Layout={EventComponent}
        />
      </Stack>
    </Scene>
  </Stack>
);

export default Index;
