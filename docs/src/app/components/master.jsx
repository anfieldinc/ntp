var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var AppLeftNav = require('./app-left-nav.jsx');
var FullWidthSection = require('./full-width-section.jsx');
var mui = require('mui');

var CustomColors = mui.Styles.CustomColors;
var Colors = mui.Styles.Colors;
var Typography = mui.Styles.Typography;
var ThemeManager = new mui.Styles.ThemeManager();

var { AppBar, AppCanvas, Menu, IconButton } = mui;
ThemeManager.setTheme(ThemeManager.types.CUSTOM);

class Master extends React.Component {

  constructor() {
    super();
    this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  getStyles() {
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
  }

  render() {
    var styles = this.getStyles();
    var title =
      this.context.router.isActive('get-started') ? 'Get Started' :
      this.context.router.isActive('customization') ? 'Customization' :
      this.context.router.isActive('components') ? 'Components' : '';

    var githubButton = (
      <IconButton
        iconStyle={styles.iconButton}
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/callemall/material-ui"
        linkButton={true} />
    );

    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title={title}
          zDepth={0}
          iconElementRight={githubButton}/>

        <AppLeftNav ref="leftNav" />

        <RouteHandler />

        <FullWidthSection style={styles.footer}>
          <p style={styles.p}>
            © <a style={styles.a} href="http://ingersollrand.com">Ingersoll-Rand</a> plc, 2015.
          </p>
          {githubButton}
        </FullWidthSection>

      </AppCanvas>
    );
  }

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }
}

Master.contextTypes = {
  router: React.PropTypes.func
};

Master.childContextTypes = {
  muiTheme: React.PropTypes.object
};


module.exports = Master;
