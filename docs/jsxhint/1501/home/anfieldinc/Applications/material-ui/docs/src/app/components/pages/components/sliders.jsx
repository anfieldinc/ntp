var React = require('react');
var mui = require('mui');
var Slider = mui.Slider;
var ComponentDoc = require('../../component-doc.jsx');

var ____Classe=React.Component;for(var ____Classe____Key in ____Classe){if(____Classe.hasOwnProperty(____Classe____Key)){SlidersPage[____Classe____Key]=____Classe[____Classe____Key];}}var ____SuperProtoOf____Classe=____Classe===null?null:____Classe.prototype;SlidersPage.prototype=Object.create(____SuperProtoOf____Classe);SlidersPage.prototype.constructor=SlidersPage;SlidersPage.__superConstructor__=____Classe;function SlidersPage(){"use strict";if(____Classe!==null){____Classe.apply(this,arguments);}}

  Object.defineProperty(SlidersPage.prototype,"handleMouseDown",{writable:true,configurable:true,value:function(e){"use strict";
    console.log('hmd', e);
  }});

  Object.defineProperty(SlidersPage.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

    var code =
      '// Default\n' +
      '<Slider name="slider1" />\n\n' +
      '// With starting value\n' +
      '<Slider name="slider2" defaultValue={0.5} />\n' +
      '<Slider name="slider3" defaultValue={1} />\n\n' +
      '// Disabled with fixed value\n' +
      '<Slider name="slider1" disabled={true} />\n' +
      '<Slider name="slider2" disabled={true} value={0.5} />\n' +
      '<Slider name="slider3" disabled={true} value={1} />';

    var componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'max',
            type: 'number',
            header: 'default: 1',
            desc: 'The maximum value the slider can slide to on a scale from ' +
                  '0 to 1 inclusive.'
          },
          {
            name: 'min',
            type: 'number',
            header: 'default: 0',
            desc: 'The minimum value the slider can slide to on a scale from ' +
                  '0 to 1 inclusive.'
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Slider\'s root element.'
          }
        ]
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onChange',
            type: 'function(e, value)',
            header: 'optional',
            desc: 'Callback function that is fired when the user changes the ' +
                  'slider\'s value.'
          }         
        ]
      },
    ];

    return (
      React.createElement(ComponentDoc, {
        name: "Sliders", 
        code: code, 
        componentInfo: componentInfo}, 

        React.createElement(Slider, {name: "slider1"}), 
        React.createElement(Slider, {onMouseDown: this.handleMouseDown, name: "slider2", value: 0.5}), 
        React.createElement(Slider, {name: "slider3", value: 1}), 
        React.createElement(Slider, {name: "slider1", disabled: true}), 
        React.createElement(Slider, {name: "slider2", disabled: true, value: 0.5}), 
        React.createElement(Slider, {name: "slider3", disabled: true, value: 1})

      )
    );
  }});



module.exports = SlidersPage;
