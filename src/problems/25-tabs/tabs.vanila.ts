import { AbstractComponent, type TComponentConfig } from '@course/utils'
import flex from '@course/styles'
import cx from '@course/cx'
import css from './tabs.module.css'

export type TTabProps = {
  name: string
  content: string
}

export type TTabsProps = {
  target?: HTMLElement
  defaultTab?: string
  tabs: TTabProps[]
}

/**
 * Expected input:
 * {
 *   "tabs": [
 *     { "name": "Tab 1", "content": "<p>Content for tab 1</p>" },
 *     { "name": "Tab 2", "content": "<p>Content for tab 2</p>" }
 *   ],
 *   "defaultTab": "Tab 1",
 *   "target": HTMLElement (optional, external container for tab content)
 * }
 *
 * Extend AbstractComponent<TTabsProps>
 * - Call super() with config, adding listeners: ['click']
 * - Store the default tab name (from config.defaultTab or first tab's name)
 */
export class Tabs extends AbstractComponent<TTabsProps> {
  constructor(config: TComponentConfig<TTabsProps>) {
    super({
      ...config,
      listeners: ['click'],
    })
    // TODO: store default tab name
  }

  /**
   * Implement toHTML
   * - Render a <nav> with a <ul> containing tab buttons (use #getTabs helper)
   * - If no external target, render a <section> for content below the nav
   * - Use cx() and flex utilities for layout (flexRowStart, flexGap16)
   */
  toHTML(): string {
    // TODO: implement
    return ''
  }

  /**
   * Implement afterRender
   * - If no external target, query the content container from this.container
   * - Activate the default tab
   */
  afterRender(): void {
    // TODO: implement
  }

  /**
   * Implement onClick
   * - Find the closest <button> from event.target
   * - Read data-tab-name attribute
   * - If tab name changed, activate the new tab
   */
  onClick(event: MouseEvent): void {
    // TODO: implement
  }
}
