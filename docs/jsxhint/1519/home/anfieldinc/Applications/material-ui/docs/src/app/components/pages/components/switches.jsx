var React = require('react');
var mui = require('mui');
var CodeExample = require('../../code-example/code-example.jsx');
var ComponentDoc = require('../../component-doc.jsx');
var Typography = mui.Styles.Typography;
var $__0=         mui,Checkbox=$__0.Checkbox,ClearFix=$__0.ClearFix,RadioButton=$__0.RadioButton,RadioButtonGroup=$__0.RadioButtonGroup,Tab=$__0.Tab,Tabs=$__0.Tabs,Toggle=$__0.Toggle,RaisedButton=$__0.RaisedButton;

var ____Classg=React.Component;for(var ____Classg____Key in ____Classg){if(____Classg.hasOwnProperty(____Classg____Key)){SwitchesPage[____Classg____Key]=____Classg[____Classg____Key];}}var ____SuperProtoOf____Classg=____Classg===null?null:____Classg.prototype;SwitchesPage.prototype=Object.create(____SuperProtoOf____Classg);SwitchesPage.prototype.constructor=SwitchesPage;SwitchesPage.__superConstructor__=____Classg;

  function SwitchesPage(props) {"use strict";
    ____Classg.call(this,props);

    this.codeCheckbox =
      '//Checkboxes\n' +
      '<Checkbox\n' +
      '  name="checkboxName1"\n' +
      '  value="checkboxValue1"\n' +
      '  label="went for a run today" />\n' +
      '<Checkbox\n' +
      '  name="checkboxName2"\n' +
      '  value="checkboxValue2"\n' +
      '  label="fed the dog"\n' +
      '  defaultChecked={true} />\n' +
      '<Checkbox\n' +
      '  name="checkboxName3"\n' +
      '  value="checkboxValue3"\n' +
      '  label="built a house on the moon"\n' +
      '  disabled={true} />';

    this.codeRadioButton =
      '//Radio Buttons\n' +
      '<RadioButtonGroup \n' +
      '  name="shipSpeed"\n' +
      '  defaultSelected="not_light">\n' +
      '    <RadioButton\n' +
      '      value="light"\n' +
      '      label="prepare for light speed" />\n' +
      '    <RadioButton\n' +
      '      value="not_light"\n' +
      '      label="light speed too slow" />\n' +
      '   <RadioButton\n' +
      '      value="ludicrous"\n' +
      '      label="go to ludicous speed"\n'+
      '      disabled={true}/>\n' +
      '</RadioButtonGroup>';

    this.codeToggle =
      '//Toggle\n' +
      '<Toggle\n' +
      '  name="toggleName1"\n' +
      '  value="toggleValue1"\n' +
      '  label="activate thrusters" />\n' +
      '<Toggle\n' +
      '  name="toggleName2"\n' +
      '  value="toggleValue2"\n' +
      '  label="auto-pilot"\n' +
      '  defaultToggled={true} />\n' +
      '<Toggle\n' +
      '  name="toggleName3"\n' +
      '  value="toggleValue3"\n' +
      '  label="initiate self-destruct sequence"\n' +
      '  disabled={true} />\n\n';

    this.desc = 'These components extend their current input elements (checkbox and radio) and ' +
               'will support all of its props and events. Checkboxes and Toggles support ' +
               'checkedLink';

    this.componentInfo = [
    {
      name: 'Checkbox Props',
      infoArray: [
        {
          name: 'defaultChecked',
          type: 'boolean',
          header: 'default:false',
          desc: 'The default state of our checkbox component.'
        },
        {
          name: 'name',
          type: 'string',
          header: 'optional',
          desc: 'This is the name of the checkbox.'
        },
        {
          name: 'iconStyle',
          type: 'object',
          header: 'optional',
          desc: 'Overrides the inline-styles of the icon element.'
        },
        {
          name: 'label',
          type: 'string',
          header: 'optional',
          desc: 'The text that is displayed to the right of the checkbox.'
        },
        {
          name: 'labelPosition',
          type: 'string',
          header: 'default:"right"',
          desc: 'Where the label will be placed next to the checkbox. Options include ' +
                '"left" and "right" (case-sensitive). Default option is "left".'
        },
        {
          name: 'value',
          type: 'string',
          header: 'optional',
          desc: 'The value of our checkbox component.'
        },
        {
          name: 'style',
          type: 'object',
          header: 'optional',
          desc: 'Override the inline-styles of the Checkbox\'s root element.'
        }
      ]
    },
    {
      name: 'Checkbox Methods',
      infoArray: [
        {
          name: 'isChecked',
          header: 'Checkbox.isChecked()',
          desc: 'Returns true if the checkbox is currently checked. Returns false otherwise'
        },
        {
          name: 'setChecked',
          header: 'Checkbox.setChecked(newCheckedValue)',
          desc: 'Sets the checkbox to the value of newCheckedValue. This method cannot be used ' +
                'while "checked" is defined as a property.'
        }
      ]
    },
    {
      name: 'Checkbox Events',
      infoArray: [
        {
          name: 'onCheck',
          type: 'function(e, checked)',
          header: 'optional',
          desc: 'Callback function that is fired when the checkbox is checked.'
        }
      ]
    },
    {
      name: 'Radio Button Props',
      infoArray: [
        {
          name: 'defaultChecked',
          type: 'boolean',
          header: 'default:false',
          desc: 'The default value of the radio button when the page finishes loading.'
        },
        {
          name: 'iconStyle',
          type: 'object',
          header: 'optional',
          desc: 'Overrides the inline-styles of the icon element.'
        },
        {
          name: 'label',
          type: 'string',
          header: 'optional',
          desc: 'The text that is displayed to the right of the radio button.'
        },
        {
          name: 'labelPosition',
          type: 'string',
          header: 'default:"right"',
          desc: 'Where the label will be placed next to the radio button. Options include ' +
                '"left" and "right" (case-sensitive). Default option is "left".'
        },
        {
          name: 'style',
          type: 'object',
          header: 'optional',
          desc: 'Override the inline-styles of the RadioButton\'s root element.'
        },
        {
          name: 'value',
          type: 'string',
          header: 'optional',
          desc: 'The value of our radio button component.'
        }
      ]
    },
    {
      name: 'Radio Button Group',
      infoArray: [
        {
          name: 'defaultSelected',
          type: 'string',
          header: 'optional',
          desc: 'Sets the default radio button to be the one whose value matches ' +
                'defaultSelected (case-sensitive). This will override any individual radio ' +
                'button with the defaultChecked or checked property stated.'
        },
        {
          name: 'labelPosition',
          type: 'string',
          header: 'optional',
          desc: 'Where the label will be placed for all radio buttons. Options include ' +
                '"left" and "right" (case-sensitive). This will override any labelPosition ' +
                'properties defined for an individual radio button.'
        },
        {
          name: 'name',
          type: 'string',
          header: 'required',
          desc: 'The name that will be applied to all radio buttons inside it.'
        },
        {
          name: 'style',
          type: 'object',
          header: 'optional',
          desc: 'Override the inline-styles of the RadioButtonGroup\'s root element.'
        },
        {
          name: 'valueSelected',
          type: 'string',
          header: 'optional',
          desc: 'The value of the currently selected radio button.'
        }
      ]
    },
    {
      name: 'Radio Button Group Methods',
      infoArray: [
        {
          name: 'getSelectedValue',
          header: 'RadioButtonGroup.getSelectedValue()',
          desc: 'Returns the string value of the radio button that is currently selected. If nothing ' +
                'has been selected, an empty string is returned.'
        },
        {
          name: 'setSelectedValue',
          header: 'RadioButtonGroup.setSelectedValue(newSelectionValue)',
          desc: 'Sets the selected radio button to the radio button whose value matches ' +
                'newSelectionValue'
        },
        {
          name: 'clearValue',
          header: 'RadioButtonGroup.clearValue()',
          desc: 'Clears the selected value for the radio button group.'
        }
      ]
    },
    {
      name: 'Radio Button Group Events',
      infoArray: [
        {
          name: 'onChange',
          type: 'function(e, selected)',
          header: 'optional',
          desc: 'Callback function that is fired when a radio button has been clicked. Returns ' +
                'the event and the value of the radio button that has been selected.'
        }
      ]
    },
    {
      name: 'Toggle Props',
      infoArray: [
        {
          name: 'defaultToggled',
          type: 'boolean',
          header: 'default:false',
          desc: 'The value of the toggle button. Is true when toggle has been turned on. ' +
            'False otherwise.'
        },
        {
          name: 'elementStyle',
          type: 'object',
          header: 'optional',
          desc: 'Overrides the inline-styles of the Toggle element.'
        },
        {
          name: 'label',
          type: 'string',
          header: 'optional',
          desc: 'The text that is displayed to the right of the toggle switch.'
        },
        {
          name: 'labelPosition',
          type: 'string',
          header: 'default:"left"',
          desc: 'Where the label will be placed next to the toggle switch. Options include ' +
                '"left" and "right" (case-sensitive). Default option is "left".'
        },
        {
          name: 'name',
          type: 'string',
          header: 'optional',
          desc: 'This is the name of the toggle.'
        },
        {
          name: 'style',
          type: 'object',
          header: 'optional',
          desc: 'Override the inline-styles of the Toggle\'s root element.'
        },
        {
          name: 'value',
          type: 'string',
          header: 'optional',
          desc: 'The value of our toggle component.'
        }
      ]
    },
    {
      name: 'Toggle Methods',
      infoArray: [
        {
          name: 'isToggled',
          header: 'Toggle.isToggled()',
          desc: 'Returns true if the checkbox is currently checked. Returns false otherwise'
        },
        {
          name: 'setToggled',
          header: 'Toggle.setToggled(newToggledValue)',
          desc: 'Sets the toggle to the value of newToggledValue. This method cannot be used ' +
                'while "checked" is defined as a property.'
        }
      ]
    },
    {
      name: 'Toggle Events',
      infoArray: [
        {
          name: 'onToggle',
          type: 'function(e, toggled)',
          header: 'optional',
          desc: 'Callback function that is fired when the toggle switch is toggled.'
        }
      ]
    },
    ];
  }

  Object.defineProperty(SwitchesPage.prototype,"getStyles",{writable:true,configurable:true,value:function() {"use strict";
    return {
      container: {
        textAlign: 'left',
        marginBottom: '16px',
        minHeight: '24px'
      },
      group: {
        float: 'left',
        width: '30%',
        padding: '0 50px',
        boxSizing: 'border-box'
      },
      headline: {
        //mui-font-style-headline
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

  Object.defineProperty(SwitchesPage.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

    return (
      React.createElement("div", null, 
      React.createElement("h2", {styles: this.getStyles().headline}, "Switches"), 
      React.createElement(Tabs, null, 
        React.createElement(Tab, {label: "Checkbox"}, 
          React.createElement(ComponentDoc, {
            name: "", 
            code: this.codeCheckbox, 
            desc: this.desc, 
            componentInfo: this.componentInfo.slice(0,3)}, 
            React.createElement(ClearFix, {elementType: "form"}, 
              this.$SwitchesPage_getCheckboxExample()
            )
          )
        ), 
        React.createElement(Tab, {label: "RadioButtons"}, 
          React.createElement(ComponentDoc, {
            name: "", 
            code: this.codeRadioButton, 
            desc: this.desc, 
            componentInfo: this.componentInfo.slice(3,7)}, 
            React.createElement(ClearFix, {elementType: "form"}, 
              this.$SwitchesPage_getRadioButtonExample()
            )
          )
        ), 
        React.createElement(Tab, {label: "Toggle"}, 
          React.createElement(ComponentDoc, {
            name: "", 
            code: this.codeToggle, 
            desc: this.desc, 
            componentInfo: this.componentInfo.slice(7)}, 
            React.createElement(ClearFix, {elementType: "form"}, 
              this.$SwitchesPage_getToggleExample()
            )
          )
        )
      )
      )
    );
  }});

  Object.defineProperty(SwitchesPage.prototype,"$SwitchesPage_getCheckboxExample",{writable:true,configurable:true,value:function() {"use strict";
    var styles = this.getStyles();
    return (
      React.createElement("div", {style: styles.group}, 
        React.createElement("div", {style: styles.container}, 
          React.createElement(Checkbox, {
            id: "checkboxId1", 
            name: "checkboxName1", 
            value: "checkboxValue1", 
            label: "went for a run today"})
        ), 
        React.createElement("div", {style: styles.container}, 
          React.createElement(Checkbox, {
            id: "checkboxId2", 
            name: "checkboxName2", 
            value: "checkboxValue2", 
            label: "fed the dog", 
            defaultChecked: true})
        ), 
        React.createElement("div", {style: styles.container}, 
          React.createElement(Checkbox, {
            id: "checkboxId3", 
            name: "checkboxName3", 
            value: "checkboxValue3", 
            label: "built a house on the moon", 
            disabled: true})
        )
      )
    );
  }});

  Object.defineProperty(SwitchesPage.prototype,"$SwitchesPage_getToggleExample",{writable:true,configurable:true,value:function() {"use strict";
    var styles = this.getStyles();
    return (
      React.createElement("div", {style: styles.group}, 
        React.createElement("div", {style: styles.container}, 
          React.createElement(Toggle, {
            id: "toggleId1", 
            name: "toggleName1", 
            value: "toggleValue1", 
            label: "activate thrusters"})
        ), 
        React.createElement("div", {style: styles.container}, 
          React.createElement(Toggle, {
            id: "toggleId2", 
            name: "toggleName2", 
            value: "toggleValue2", 
            label: "auto-pilot", 
            defaultToggled: true})
        ), 
        React.createElement("div", {style: styles.container}, 
          React.createElement(Toggle, {
            id: "toggleId3", 
            name: "toggleName3", 
            value: "toggleValue3", 
            label: "initiate self-destruct sequence", 
            disabled: true})
        )
      )
    );
  }});

  Object.defineProperty(SwitchesPage.prototype,"$SwitchesPage_getRadioButtonExample",{writable:true,configurable:true,value:function() {"use strict";
    var styles = this.getStyles();
    return (
      React.createElement("div", {style: styles.group}, 
        React.createElement(RadioButtonGroup, {
          name: "shipSpeed", 
          defaultSelected: "not_light"}, 
            React.createElement(RadioButton, {
              id: "radioButtonId1", 
              value: "light", 
              label: "prepare for light speed"}), 
            React.createElement(RadioButton, {
              id: "radioButtonId2", 
              value: "not_light", 
              label: "light speed too slow"}), 
            React.createElement(RadioButton, {
              id: "radioButtonId3", 
              value: "ludicrous", 
              label: "go to ludicrous speed", 
              disabled: true})
        )
      )
    );
  }});

  Object.defineProperty(SwitchesPage.prototype,"$SwitchesPage_onCheck",{writable:true,configurable:true,value:function(e, checked) {"use strict";
    console.log('Checked: ', checked);
  }});

  Object.defineProperty(SwitchesPage.prototype,"$SwitchesPage_onToggle",{writable:true,configurable:true,value:function(e, toggled) {"use strict";
    console.log('Toggled: ', toggled);
  }});

  Object.defineProperty(SwitchesPage.prototype,"$SwitchesPage_onRadioButtonClick",{writable:true,configurable:true,value:function(e, selected) {"use strict";
    console.log('Selected: ', selected);
  }});


module.exports = SwitchesPage;
