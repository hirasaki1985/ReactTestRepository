import React from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  securityLevel: "loose",
  themeCSS: `
    g.node > rect.label-container {
      stroke: #15b72f;
      fill: #e0ffea;
    }
    g.node > .nodeLabel {
      color: white;
      fill: white;
    }
    .edgeLabel {
      display: inline-block;
      background-color: #e9edff;
      border: 1px solid #4b31d8;
      border-radius: 50%;
      padding: 5px;
      text-align:center;
      width: 15px;
      height :15px;
      line-height: 15px;
    }
  `,
  fontFamily: "Fira Code",
});

export default class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
  }
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}
