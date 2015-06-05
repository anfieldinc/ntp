var React = require('react');
var CodeExample = require('../../code-example/code-example.jsx');
var mui = require('mui');
var Router = require('react-router');
var ComponentDoc = require('../../component-doc.jsx');
var RouteHandler = Router.RouteHandler;

var $__0=   mui,Tabs=$__0.Tabs,Tab=$__0.Tab;
var Typography = mui.Styles.Typography;

var ____Classh=React.Component;for(var ____Classh____Key in ____Classh){if(____Classh.hasOwnProperty(____Classh____Key)){TabsPage[____Classh____Key]=____Classh[____Classh____Key];}}var ____SuperProtoOf____Classh=____Classh===null?null:____Classh.prototype;TabsPage.prototype=Object.create(____SuperProtoOf____Classh);TabsPage.prototype.constructor=TabsPage;TabsPage.__superConstructor__=____Classh;

  function TabsPage() {"use strict";
    ____Classh.call(this);
    this.$TabsPage_onActive = this.$TabsPage_onActive.bind(this);
  }

  Object.defineProperty(TabsPage.prototype,"getStyles",{writable:true,configurable:true,value:function() {"use strict";
    return {
      headline: {
        fontSize: '24px',
        lineHeight: '32px',
        paddingTop: '16px',
        marginBottom: '12px',
        letterSpacing: '0',
        fontWeight: Typography.fontWeightNormal,
        color: Typography.textDarkBlack
      }
    }
  }});

  Object.defineProperty(TabsPage.prototype,"render",{writable:true,configurable:true,value:function(){"use strict";
    var code =  '<Tabs> \n' +
                '  <Tab label="Item One" > \n' +
                '    <div> \n' +
                '      <h2 style={this.getStyles().headline}>Tab One Template Example</h2> \n' +
                '      <p> \n' +
                '        This is an example of a tab template! \n' +
                '      </p> \n' +
                '      <p> \n' +
                '        You can put any sort of HTML or react component in here. \n' +
                '      </p> \n' +
                '    </div> \n' +
                '  </Tab> \n' +
                '  <Tab label="Item Two" > \n' +
                '    <div> \n' +
                '      <h2 style={this.getStyles().headline}>Tab Two Template Example</h2> \n' +
                '      <p> \n' +
                '        This is another example of a tab template! \n' +
                '      </p> \n' +
                '      <p> \n' +
                '        Fair warning - the next tab routes to home! \n' +
                '      </p> \n' +
                '    </div> \n' +
                '  </Tab> \n' +
                '  <Tab \n' +
                '    label="Item Three" \n' +
                '    route="home" \n' +
                '    onActive={this._onActive} /> \n' +
                '</Tabs> \n' +
                '\n' +
                '_onActive: function(tab){ \n' +
                '  this.context.router.transitionTo(tab.props.route); \n' +
                '}';

    var desc = 'Refs cannot be set on individual Tab components as cloneWithProps is being ' +
      'used to extend the individual tab components under the hood. However, ' +
      'refs can be passed to the Tabs container and to any element or component within the template. ' +
      'If you need to access a tab directly - you can do so with the first argument of onActive or ' +
      'by accessing the props.children array by passing refs to the Tabs container.';

    var componentInfo = [
      {
        name: 'Tabs Props',
        infoArray: [
          {
            name: 'initialSelectedIndex',
            type: 'number',
            header: 'optional',
            desc: 'Specify initial visible tab index. Initial selected index is set by default to 0. If initialSelectedIndex is set but larger than the total amount of specified tabs, initialSelectedIndex will revert back to default'
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Tabs\' root element.'
          },
          {
            name: 'tabWidth',
            type: 'number',
            header: 'optional',
            desc: 'Specifiy tabWidth to set each tab to a set number of pixels. Tab Width is set by default to an even distribution of the parent Tabs container. If tabWidth is set but the total width of all tabs is greater than the container, tabWidth will revert back to default'
          }
        ]
      },
      {
        name: 'Tabs Events',
        infoArray: [
          {
            name: 'onChange',
            type: 'function(tabIndex, tab)',
            header: 'optional',
            desc: 'Fired on touch or tap of a tab.'
          }
        ]
      },
      {
        name: 'Tab Props',
        infoArray: [
          {
            name: 'label',
            type: 'string',
            header: 'optional',
            desc: 'Sets the text value of the tab item to the string specified.'
          },
          {
            name: 'route',
            type: 'string',
            header: 'optional',
            desc: 'Specifies a router RouteName if included.'
          }
        ]
      },
      {
        name: 'Tab Events',
        infoArray: [
          {
            name: 'onActive',
            type: 'function(tab)',
            header: 'optional',
            desc: 'Fired when the active tab changes by touch or tap. Use this event to specify any functionality when an active tab changes. For example - we are using this to route to home when the third tab becomes active. This function will always recieve the active tab as it\'s first argument.'
          }
        ]
      }
    ];

    return (
      React.createElement(ComponentDoc, {
        name: "Tabs", 
        code: code, 
        desc: desc, 
        componentInfo: componentInfo}, 

        React.createElement("div", null, 
          React.createElement(Tabs, {onChange: this.$TabsPage_onChange}, 
            React.createElement(Tab, {label: "Item One"}, 
              React.createElement("div", null, 
                React.createElement("h2", {style: this.getStyles().headline}, "Tab One Template Example"), 
                React.createElement("p", null, 
                  "This is an example of a tab template!"
                ), 
                React.createElement("p", null, 
                  "You can put any sort of HTML or react component in here."
                )
              )
            ), 
            React.createElement(Tab, {label: "Item Two"}, 
              React.createElement("div", null, 
                React.createElement("h2", {style: this.getStyles().headline}, "Tab Two Template Example"), 
                React.createElement("p", null, 
                  "This is another example of a tab template!"
                ), 
                React.createElement("p", null, 
                  "Fair warning - the next tab routes to home!"
                )
              )
            ), 
            React.createElement(Tab, {
              label: "Item Three", 
              route: "home", 
              onActive: this.$TabsPage_onActive})
          )
        )

      )
    );
  }});

  Object.defineProperty(TabsPage.prototype,"$TabsPage_onActive",{writable:true,configurable:true,value:function(tab){"use strict";
    this.context.router.transitionTo(tab.props.route);
  }});


TabsPage.contextTypes = {
  router: React.PropTypes.func
};

module.exports = TabsPage;
