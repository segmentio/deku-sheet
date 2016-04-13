
import element from 'virtual-element';
import assert from 'assert';
import { tree, render } from 'deku';
import trigger from 'compat-trigger-event';
import Sheet from '../src';

const fixture = document.createElement('div');

describe('<Sheet />', function() {
  before(function() {
    document.body.appendChild(fixture);
  });

  beforeEach(function() {
    fixture.innerHTML = '';
  });

  after(function() {
    document.body.appendChild(fixture);
  });

  it('should render', function() {
    const el = mount(<Sheet>hello</Sheet>);
    const sheet = el.querySelector('.Sheet');
    assert(sheet);
  });

  it('should have an overlay', function() {
    const el = mount(<Sheet>hello</Sheet>);
    const overlay = el.querySelector('.SheetOverlay');
    assert(overlay);
  });

  it('should have a close button', function() {
    const el = mount(<Sheet>hello</Sheet>);
    const button = el.querySelector('.SheetOverlay-close');
    assert(button);
  });

  it('should mount children', function() {
    const el = mount(<Sheet>hello</Sheet>);
    const sheet = el.querySelector('.Sheet');
    assert.equal(sheet.innerText, 'hello');
  });

  describe('clicking the overlay', function() {
    it('should call `onClose`', function(done) {
      const el = mount(<Sheet onClose={onClose}>hello</Sheet>);
      const overlay = el.querySelector('.SheetOverlay');

      trigger(overlay, 'click');

      function onClose() {
        done();
      }
    });
  });

  describe('clicking the close button', function() {
    it('should call `onClose`', function(done) {
      const el = mount(<Sheet onClose={onClose}>hello</Sheet>);
      const button = el.querySelector('.SheetOverlay-close');

      trigger(button, 'click');

      function onClose() {
        done();
      }
    });
  });
});

function mount(n) {
  const app = tree(n);
  render(app, fixture);
  return fixture;
}
