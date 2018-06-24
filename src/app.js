import angular from 'angular';
import '@uirouter/angularjs';
import 'satellizer';

import Router from './config/routes';
import Auth from './config/satellizer';

import 'bulma';

import AuthRegisterCtrl from './controllers/auth/register';
import AuthLoginCtrl from './controllers/auth/login';

angular.module('bundleApi', ['ui.router', 'satellizer'])
  .config(Router)
  .config(Auth)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl);
