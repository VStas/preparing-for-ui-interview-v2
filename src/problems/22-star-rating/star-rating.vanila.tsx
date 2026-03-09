/**
 * Expected input:
 * {
 *   root: HTMLElement,
 *   className: string[],
 *   value: number,
 *   onValueChange: (value: number) => void,
 *   readOnly?: boolean
 * }
 *
 * Steps to complete:
 * 1. Define properties (value, STAR constant, STARS_COUNT)
 * 2. Init constructor - pass config with className, listeners
 * 3. Provide toHTML template - render star buttons with proper attributes
 * 4. Handle click event - update value and re-render
 * 5. Add afterRender - set ARIA attributes on container
 * 6. Add CSS styles for stars (opacity, cursor, transitions)
 */
import { AbstractComponent, type TComponentConfig } from '@course/utils'
import styles from './star-rating.module.css'
import flex from '@course/styles'

type TStarRatingProps = {
  value: number
  onValueChange: (value: number) => void
  readOnly?: boolean
}

const STAR = '⭐️'
const STARS_COUNT = 5

export class StarRating extends AbstractComponent<TStarRatingProps> {
  // TODO: define properties

  constructor(config: TComponentConfig<TStarRatingProps>) {
    // TODO: call super with className and listeners
    super(config)
  }

  // TODO: implement onClick handler

  toHTML(): string {
    // TODO: render star buttons with proper data attributes and ARIA
    return '<div>Star Rating</div>'
  }

  // TODO: implement afterRender for ARIA attributes
}
