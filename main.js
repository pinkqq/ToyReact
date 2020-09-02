import { createElement, Component, render } from "./toy-react";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>my component</h1>
        {this.children}
      </div>
    );
  }
}

render(
  <MyComponent id="qq" class="xqq">
    <div>div</div>
    <div>
      <span>span</span>
    </div>
    <div></div>
  </MyComponent>,
  document.body
);
