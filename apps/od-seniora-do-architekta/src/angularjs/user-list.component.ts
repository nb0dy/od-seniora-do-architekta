import angular from 'angular';

declare global {
  interface Window {
    pubSub: {
      subscribe: () => {};
      next: () => {};
    };
  }
}

window.pubSub = {
  subscribe: () => {},
  next: () => {},
};

const app = angular.module('app', []);

app.component('userList', {
  template: 'angularjs test <react-app test="test"></react-app>',
  controller: () => {
    window.pubSub.next();
  }
});
