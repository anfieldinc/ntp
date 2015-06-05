
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

// Here we define all our material-ui ReactComponents.
var Master = require('./components/master.jsx');
var Home = require('./components/pages/home.jsx');
var GetStarted = require('./components/pages/get-started.jsx');

var Customization = require('./components/pages/customization.jsx');
var Colors = require('./components/pages/customization/colors.jsx');
var Themes = require('./components/pages/customization/themes.jsx'); 
var InlineStyles = require('./components/pages/customization/inline-styles.jsx'); 

var Components = require('./components/pages/components.jsx');
var AppBar = require('./components/pages/components/app-bar.jsx');
var Buttons = require('./components/pages/components/buttons.jsx');
var DatePicker = require('./components/pages/components/date-picker.jsx');
var Dialog = require('./components/pages/components/dialog.jsx');
var DropDownMenu = require('./components/pages/components/drop-down-menu.jsx');
var Icons = require('./components/pages/components/icons.jsx');
var IconButtons = require('./components/pages/components/icon-buttons.jsx');
var LeftNav = require('./components/pages/components/left-nav.jsx');
var Menus = require('./components/pages/components/menus.jsx');
var Paper = require('./components/pages/components/paper.jsx');
var Progress = require('./components/pages/components/progress.jsx');
var Sliders = require('./components/pages/components/sliders.jsx');
var Snackbar = require('./components/pages/components/snackbar.jsx');
var Switches = require('./components/pages/components/switches.jsx');
var Tabs = require('./components/pages/components/tabs.jsx');
var TextFields = require('./components/pages/components/text-fields.jsx');
var TimePicker = require('./components/pages/components/time-picker.jsx');
var Toolbars = require('./components/pages/components/toolbars.jsx');


/** Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
  * 
  * Routes are used to declare your view hierarchy.
  *
  * Say you go to http://material-ui.com/#/components/paper
  * The react router will search for a route named 'paper' and will recursively render its 
  * handler and its parent handler like so: Paper > Components > Master
  */

var AppRoutes = (
  React.createElement(Route, {name: "root", path: "/", handler: Master}, 
    React.createElement(Route, {name: "home", handler: Home}), 
    React.createElement(Route, {name: "get-started", handler: GetStarted}), 
    React.createElement(Route, {name: "customization", handler: Customization}, 
      React.createElement(Route, {name: "colors", handler: Colors}), 
      React.createElement(Route, {name: "themes", handler: Themes}), 
      React.createElement(Route, {name: "inline-styles", handler: InlineStyles}), 
      React.createElement(Redirect, {from: "/customization", to: "themes"})
    ), 

    React.createElement(Route, {name: "components", handler: Components}, 
      React.createElement(Route, {name: "appbar", handler: AppBar}), 
      React.createElement(Route, {name: "buttons", handler: Buttons}), 
      React.createElement(Route, {name: "date-picker", handler: DatePicker}), 
      React.createElement(Route, {name: "dialog", handler: Dialog}), 
      React.createElement(Route, {name: "dropdown-menu", handler: DropDownMenu}), 
      React.createElement(Route, {name: "icons", handler: Icons}), 
      React.createElement(Route, {name: "icon-buttons", handler: IconButtons}), 
      React.createElement(Route, {name: "left-nav", handler: LeftNav}), 
      React.createElement(Route, {name: "menus", handler: Menus}), 
      React.createElement(Route, {name: "paper", handler: Paper}), 
      React.createElement(Route, {name: "progress", handler: Progress}), 
      React.createElement(Route, {name: "sliders", handler: Sliders}), 
      React.createElement(Route, {name: "switches", handler: Switches}), 
      React.createElement(Route, {name: "snackbar", handler: Snackbar}), 
      React.createElement(Route, {name: "tabs", handler: Tabs}), 
      React.createElement(Route, {name: "text-fields", handler: TextFields}), 
      React.createElement(Route, {name: "time-picker", handler: TimePicker}), 
      React.createElement(Route, {name: "toolbars", handler: Toolbars}), 
      React.createElement(Redirect, {from: "/components", to: "appbar"})
    ), 

    React.createElement(DefaultRoute, {handler: Home})
  )
);

module.exports = AppRoutes;
