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

  @Prop() complexProp: Array<{name: string, number: number, tags: string[]}>

  componentWillLoad() {
    console.log('WILL LOAD COMPLEX PROP:', this.complexProp);
    console.log('WILL LOAD SIMPLE PROP:', this.name);
  }

  componentDidLoad() {
    console.log('DID LOAD COMPLEX PROP:', this.complexProp);
    console.log('DID LOAD SIMPLE PROP:', this.name);

  }

  render() {
    return <div>Hello. My name is {this.name}. You {this.action}. Prepare to {this.result}.</div>;
  }
}
