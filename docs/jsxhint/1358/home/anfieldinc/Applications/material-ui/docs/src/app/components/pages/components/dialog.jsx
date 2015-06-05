var React = require('react');
var mui = require('mui');
var Dialog = mui.Dialog;
var FlatButton = mui.FlatButton;
var RaisedButton = mui.RaisedButton;
var Toggle = mui.Toggle;
var ComponentDoc = require('../../component-doc.jsx');

var ____Class8=React.Component;for(var ____Class8____Key in ____Class8){if(____Class8.hasOwnProperty(____Class8____Key)){DialogPage[____Class8____Key]=____Class8[____Class8____Key];}}var ____SuperProtoOf____Class8=____Class8===null?null:____Class8.prototype;DialogPage.prototype=Object.create(____SuperProtoOf____Class8);DialogPage.prototype.constructor=DialogPage;DialogPage.__superConstructor__=____Class8;

  function DialogPage() {"use strict";
    ____Class8.call(this);
    this.state = {
      modal: false
    };
    this.$DialogPage_handleCustomDialogCancel = this.$DialogPage_handleCustomDialogCancel.bind(this);
    this.$DialogPage_handleCustomDialogSubmit = this.$DialogPage_handleCustomDialogSubmit.bind(this);
    this.handleCustomDialogTouchTap = this.handleCustomDialogTouchTap.bind(this);
    this.handleStandardDialogTouchTap = this.handleStandardDialogTouchTap.bind(this);
    this.$DialogPage_handleToggleChange = this.$DialogPage_handleToggleChange.bind(this);
  }

  Object.defineProperty(DialogPage.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    var code =
      '//Standard Actions\n' +
      'var standardActions = [\n' +
      '  { text: \'Cancel\' },\n' +
      '  { text: \'Submit\', onClick: this._onDialogSubmit, ref: \'submit\' }\n' +
      '];\n\n' +
      '<Dialog\n' +
      '  title="Dialog With Standard Actions"\n' +
      '  actions={standardActions}\n' +
      '  actionFocus="submit"\n' +
      '  modal={this.state.modal}>\n' +
      '  The actions in this window are created from the json that\'s passed in. \n' +
      '</Dialog>\n\n' +
      '//Custom Actions\n' +
      'var customActions = [\n' +
      '  <FlatButton\n' +
      '    label="Cancel"\n' +
      '    secondary={true}\n' +
      '    onTouchTap={this._handleCustomDialogCancel} />,\n' +
      '  <FlatButton\n' +
      '    label="Submit"\n' +
      '    primary={true}\n' +
      '    onTouchTap={this._handleCustomDialogSubmit} />\n' +
      '];\n\n' +
      '<Dialog\n' +
      '  title="Dialog With Custom Actions"\n' +
      '  actions={customActions}\n' +
      '  modal={this.state.modal}>\n' +
      '  The actions in this window were passed in as an array of react objects.\n' +
      '</Dialog>\n';

    var componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'actions',
            type: 'array',
            header: 'optional',
            desc: 'This prop can be either a JSON object containing the actions to render, or an array of react objects.'
          },
          {
            name: 'actionFocus',
            type: 'string',
            header: 'optional',
            desc: 'The ref of the action to focus on when the dialog is displayed.'
          },
          {
            name: 'contentClassName',
            type: 'string',
            header: 'optional',
            desc: 'The className to add to the dialog window content container. This is the Paper ' +
                  'element that is seen when the dialog is shown.'
          },
          {
            name: 'contentInnerStyle',
            type: 'object',
            header: 'optional',
            desc: 'Overrides the inline-styles of the dialog container under the title.'
          },
          {
            name: 'contentStyle',
            type: 'object',
            header: 'optional',
            desc: 'Overrides the inline-styles of the dialog window content container.'
          },
          {
            name: 'openImmediately',
            type: 'bool',
            header: 'default: false',
            desc: 'Set to true to have the dialog automatically open on mount.'
          },
          {
            name: 'title',
            type: 'node',
            header: 'optional',
            desc: 'The title to display on the dialog. Could be number, string, element or an array containing these types.'
          },
          {
            name: 'modal',
            type: 'bool',
            header: 'optional',
            desc: 'Determine if a dialog should display as a modal dialog. Default value is false.'
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of Dialog\'s root element.'
          }
        ]
      },
      {
        name: 'Methods',
        infoArray: [
          {
            name: 'dismiss',
            header: 'Dialog.dismiss()',
            desc: 'Hides the dialog.'
          },
          {
            name: 'show',
            header: 'Dialog.show()',
            desc: 'Shows the dialog.'
          }
        ]
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onDismiss',
            header: 'function()',
            desc: 'Fired when the dialog is dismissed.'
          },
          {
            name: 'onShow',
            header: 'function()',
            desc: 'Fired when the dialog is shown.'
          }
        ]
      }
    ];

    var standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onClick: this.$DialogPage_onDialogSubmit, ref: 'submit' }
    ];

    var customActions = [
      React.createElement(FlatButton, {
        key: 1, 
        label: "Cancel", 
        secondary: true, 
        onTouchTap: this.$DialogPage_handleCustomDialogCancel}),
      React.createElement(FlatButton, {
        key: 2, 
        label: "Submit", 
        primary: true, 
        onTouchTap: this.$DialogPage_handleCustomDialogSubmit})
    ];

    return (
      React.createElement(ComponentDoc, {
        name: "Dialog", 
        code: code, 
        componentInfo: componentInfo}, 

        React.createElement(RaisedButton, {label: "Standard Actions", onTouchTap: this.handleStandardDialogTouchTap}), 
        React.createElement("br", null), React.createElement("br", null), 
        React.createElement(RaisedButton, {label: "Custom Actions", onTouchTap: this.handleCustomDialogTouchTap}), 

        React.createElement(Dialog, {
          ref: "standardDialog", 
          title: "Dialog With Standard Actions", 
          actions: standardActions, 
          actionFocus: "submit", 
          modal: this.state.modal}, 
          "The actions in this window are created from the json that's passed in."
        ), 

        React.createElement(Dialog, {
          ref: "customDialog", 
          title: "Dialog With Custom Actions", 
          actions: customActions, 
          modal: this.state.modal}, 
          "The actions in this window were passed in as an array of react objects."
        ), 

        React.createElement("div", {style: {width: '300px', margin: '0 auto', paddingTop: '20px'}}, 
          React.createElement(Toggle, {
            label: "Is Modal", 
            onToggle: this.$DialogPage_handleToggleChange, 
            defaultToggled: this.state.modal})
        )

      )
    );

  }});

  Object.defineProperty(DialogPage.prototype,"$DialogPage_handleCustomDialogCancel",{writable:true,configurable:true,value:function() {"use strict";
    this.refs.customDialog.dismiss();
  }});

  Object.defineProperty(DialogPage.prototype,"$DialogPage_handleCustomDialogSubmit",{writable:true,configurable:true,value:function() {"use strict";
    this.refs.customDialog.dismiss();
  }});

  Object.defineProperty(DialogPage.prototype,"$DialogPage_handleToggleChange",{writable:true,configurable:true,value:function(e, toggled) {"use strict";
    this.setState({modal: toggled});
  }});

  Object.defineProperty(DialogPage.prototype,"handleCustomDialogTouchTap",{writable:true,configurable:true,value:function() {"use strict";
    this.refs.customDialog.show();
  }});

  Object.defineProperty(DialogPage.prototype,"handleStandardDialogTouchTap",{writable:true,configurable:true,value:function() {"use strict";
    this.refs.standardDialog.show();
  }});



module.exports = DialogPage;
