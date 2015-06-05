var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var AppLeftNav = require('./app-left-nav.jsx');
var FullWidthSection = require('./full-width-section.jsx');
var mui = require('mui');

var Colors = mui.Styles.Colors;
var Typography = mui.Styles.Typography;
var ThemeManager = new mui.Styles.ThemeManager();

var $__0=       mui,AppBar=$__0.AppBar,AppCanvas=$__0.AppCanvas,Menu=$__0.Menu,IconButton=$__0.IconButton;

var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){Master[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;Master.prototype=Object.create(____SuperProtoOf____Class3);Master.prototype.constructor=Master;Master.__superConstructor__=____Class3;

  function Master() {"use strict";
    ____Class3.call(this);
    this.$Master_onLeftIconButtonTouchTap = this.$Master_onLeftIconButtonTouchTap.bind(this);
  }

  Object.defineProperty(Master.prototype,"getChildContext",{writable:true,configurable:true,value:function() {"use strict";
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }});

  Object.defineProperty(Master.prototype,"getStyles",{writable:true,configurable:true,value:function() {"use strict";
    var darkWhite = Colors.darkWhite;
    return {
      footer: {
        backgroundColor: Colors.grey900,
        textAlign: 'center'
      },
      a: {
        color: darkWhite
      },
      p: {
        margin: '0 auto',
        padding: '0',
        color: Colors.lightWhite,
        maxWidth: '335px'
      },
      iconButton: {
        color: darkWhite
      }
    };
  }});

  Object.defineProperty(Master.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    var styles = this.getStyles();
    var title =
      this.context.router.isActive('get-started') ? 'Get Started' :
      this.context.router.isActive('customization') ? 'Customization' :
      this.context.router.isActive('components') ? 'Components' : '';

    var githubButton = (
      React.createElement(IconButton, {
        iconStyle: styles.iconButton, 
        iconClassName: "muidocs-icon-custom-github", 
        href: "https://github.com/callemall/material-ui", 
        linkButton: true})
    );

    return (
      React.createElement(AppCanvas, {predefinedLayout: 1}, 

        React.createElement(AppBar, {
          onLeftIconButtonTouchTap: this.$Master_onLeftIconButtonTouchTap, 
          title: title, 
          zDepth: 0, 
          iconElementRight: githubButton}), 

        React.createElement(AppLeftNav, {ref: "leftNav"}), 

        React.createElement(RouteHandler, null), 

        React.createElement(FullWidthSection, {style: styles.footer}, 
          React.createElement("p", {style: styles.p}, 
            "Hand crafted with love by the engineers at ", React.createElement("a", {style: styles.a, href: "http://call-em-all.com"}, "Call-Em-All"), " and our" + ' ' +
            "awesome ", React.createElement("a", {style: styles.a, href: "https://github.com/callemall/material-ui/graphs/contributors"}, "contributors"), "."
          ), 
          githubButton
        )

      )
    );
  }});

  Object.defineProperty(Master.prototype,"$Master_onLeftIconButtonTouchTap",{writable:true,configurable:true,value:function() {"use strict";
    this.refs.leftNav.toggle();
  }});


Master.contextTypes = {
  router: React.PropTypes.func
};

Master.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = Master;
