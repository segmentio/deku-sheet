
/**
 * Module dependencies.
 */

import element from 'virtual-element';
import { Icon } from '@segment/icons';

/**
 * Exports.
 */

export default {
  beforeUnmount,
  afterMount,
  render
};

/**
 * After mount, do not allow body to scoll.
 */

function afterMount() {
  document.body.classList.add('NoScroll');
}

/**
 * Before unmount, allow body to scroll.
 */

function beforeUnmount() {
  document.body.classList.remove('NoScroll');
}

/**
 * Render.
 */

function render({ props }) {
  const { onClose, children } = props;

  return (
    <div class="SheetOverlay" onClick={onClose}>
      <div class="SheetOverlay-close">
        <Icon type="close" size="52px" />
      </div>

      <div class="Sheet" onClick={returnFalse}>
        {children}
      </div>
    </div>
  );
}

/**
 * Return false. This is apparently the equiv. of
 * `Event#stopPropagation()` for deku?
 */

function returnFalse() {
  return false;
}
