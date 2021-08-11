import DashboardPage from './components/DashboardPage';
import AdvancedPage from './components/AdvancedPage';
import BasicsPage from './components/BasicsPage';
import PermissionsPage from './components/PermissionsPage';
import AppearancePage from './components/AppearancePage';
import MailPage from './components/MailPage';
import UserListPage from './components/UserListPage';
import ExtensionPage from './components/ExtensionPage';
import ExtensionPageResolver from './resolvers/ExtensionPageResolver';

/**
 * The `routes` initializer defines the admin app's routes.
 *
 * @param {import('./app').default} app
 */
export default function (app) {
  app.routes = {
    dashboard: { path: '/', component: DashboardPage },
    basics: { path: '/basics', component: BasicsPage },
    advanced: { path: '/advanced', component: AdvancedPage },
    permissions: { path: '/permissions', component: PermissionsPage },
    appearance: { path: '/appearance', component: AppearancePage },
    advanced: { path: '/advanced', component: AdvancedPage },
    mail: { path: '/mail', component: MailPage },
    users: { path: '/users', component: UserListPage },
    extension: { path: '/extension/:id', component: ExtensionPage, resolverClass: ExtensionPageResolver },
  };
}
