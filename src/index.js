
/**
 * Module dependencies.
 */

import element from 'virtual-element';
import Icon from '@segment/icons';
import keyname from 'keyname';

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
  const { wide, onClose, children } = props;
  return (
    <div class="SheetOverlay" onClick={onClose} onKeyDown={handleKeydown}>
      <div class="SheetOverlay-close">
        <Icon type="close" size="52px" />
      </div>
      <div class="Sheet" onClick={returnFalse} data-wide={wide}>
        {children}
      </div>
    </div>
  );

  function handleKeydown(e) {
    if (keyname(e.which) === 'esc') {
      if (onClose) onClose();
    }
  }
}

/**
 * Return false. This is apparently the equiv. of
 * `Event#stopPropagation()` for deku?
 */

function returnFalse() {
  return false;
}
