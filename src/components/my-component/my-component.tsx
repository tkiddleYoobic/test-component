import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() name: string;
  @Prop() action: string;
  @Prop() result: string;

  render() {
    return <div>Hello. My name is {this.name}. You {this.action}. Prepare to {this.result}.</div>;
  }
}
