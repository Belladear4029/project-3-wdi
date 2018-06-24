function Router($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: './views/auth/register.html',
      controller: 'AuthRegisterCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/auth/login.html',
      controller: 'AuthLoginCtrl'
    })
    .state('userShow', {
      url: '/users/:id',
      templateUrl: './views/users/show.html',
      controller: 'UsersShowCtrl'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
