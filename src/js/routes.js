
import HomePage from '../pages/Home/index.js';
import GalleryPage from '../pages/Gallery/index.js';
import MePage from '../pages/Me/index.js';

import AboutPage from '../pages/about.jsx';
import FormPage from '../pages/form.jsx';
import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import NotFoundPage from '../pages/404.jsx';

const TransitionType = "f7-fade"

var routes = [
  {
    path: '/',
    component: HomePage,
    on: {
      pageAfterIn(e, page) {
        page.router.clearPreviousHistory();
      },
    },
    options: {
      transition: TransitionType
    }
  },
  {
    path: '/gallery',
    component: GalleryPage,
    on: {
      pageAfterIn(e, page) {
        page.router.clearPreviousHistory();
      },
    },
    options: {
      transition: TransitionType
    }
  },
  {
    path: '/me',
    component: MePage,
    on: {
      pageAfterIn(e, page) {
        page.router.clearPreviousHistory();
      },
    },
    options: {
      transition: TransitionType
    }
  },


  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },


  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
