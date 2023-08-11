import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'fbc-button',
  styleUrl: 'fbc-button.css',
  shadow: true,
})
export class FbcButton {
@Prop() color: string;
@Prop() variant: string;
@Prop() fullWidth?: boolean
@Prop() underline?: boolean
@Prop() loading?: boolean
@Prop() rest: HTMLButtonElement

  render() {
    return (
      <Host>
        <slot>
          <button>Click</button>
        </slot>
      </Host>
    );
  }
}
