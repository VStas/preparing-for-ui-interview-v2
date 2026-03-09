import React, { useState, type PropsWithChildren, type ReactElement, type RefObject } from 'react'
import flex from '@course/styles'
import tabs from './tabs.module.css'
import cx from '@course/cx'
import { createPortal } from 'react-dom'

type TTabProps = PropsWithChildren<{
  name: string
}>

type TTabsProps = {
  target?: RefObject<HTMLElement>
  defaultTab?: string
  children: ReactElement<TTabProps, typeof Tab>[]
}

/**
 * Step 1: Implement Tab component
 * - Render a <li> with a <button> inside
 * - Set data-tab-name={name} on the button
 */
export function Tab({ name }: TTabProps) {
  // TODO: implement
  return null
}

/**
 * Expected input:
 * <Tabs defaultTab="Tab 1">
 *   <Tab name="Tab 1">Content for tab 1</Tab>
 *   <Tab name="Tab 2">Content for tab 2</Tab>
 * </Tabs>
 *
 * Optional: <Tabs target={ref}> to render content into an external container via portal
 *
 * Step 2: Implement Tabs component
 * - Track activeTab with useState (default: defaultTab or first child's name)
 * - Render <nav> with <ul> containing children (Tab components)
 * - Handle click on <ul> to detect button clicks and update activeTab
 * - Find content of active tab from children props
 * - If target ref exists, use createPortal; otherwise render <section> inline
 */
export function Tabs({ defaultTab, children, target }: TTabsProps) {
  // TODO: implement
  return <div>TODO: Implement Tabs</div>
}
