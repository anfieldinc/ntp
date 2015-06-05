var React = require('react');
var hljs = require('highlight.js');
var mui = require('mui');
var Spacing = mui.Styles.Spacing;

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){CodeBlock[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;CodeBlock.prototype=Object.create(____SuperProtoOf____Class1);CodeBlock.prototype.constructor=CodeBlock;CodeBlock.__superConstructor__=____Class1;

  function CodeBlock() {"use strict";
    ____Class1.call(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  Object.defineProperty(CodeBlock.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
    hljs.highlightBlock(React.findDOMNode(this));
  }});

  Object.defineProperty(CodeBlock.prototype,"componentDidUpdate",{writable:true,configurable:true,value:function(prevProps, prevState) {"use strict";
    hljs.highlightBlock(React.findDOMNode(this));
  }});

  Object.defineProperty(CodeBlock.prototype,"getStyles",{writable:true,configurable:true,value:function() {"use strict";
    var borderColor = this.context.muiTheme.palette.borderColor;
    return {
      padding: Spacing.desktopGutter,
      margin: '0',
      borderRadius: '0 0 2px 2px',
      borderTop: 'solid 1px ' + borderColor
    };
  }});

  Object.defineProperty(CodeBlock.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return (
      React.createElement("pre", {style: this.getStyles()}, 
        React.createElement("code", null, this.props.children)
      )
    );
  }});


CodeBlock.contextTypes = {
  muiTheme: React.PropTypes.object
}

module.exports = CodeBlock;
