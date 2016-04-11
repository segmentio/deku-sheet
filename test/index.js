
import element from 'virtual-element';
import assert from 'assert-element';
import Mock from 'component-mock';
import Sheet from '../src';

const mock = Mock(Sheet);

describe('Sheet', function() {
  describe('.render', function() {
    it('should use the expected element structure', function() {
      const props = {};
      const node = mock.render({ props });
      assert.hasClass(node, 'SheetOverlay');
      assert.isNode(node, 'div');
    });

    describe('with props', function() {
      describe('.onClose', function() {
        it('should add a click handler', function() {
          const props = { onClose() {} };
          const node = mock.render({ props });
          assert.hasAttribute(node, 'onClick', props.onClose);
        });
      });
    });

    describe('with children', function() {
      it('should include the children', function() {
        const props = { children: 'Hello World' };
        const node = mock.render({ props });
        assert.hasChild(node, 1, function(content) {
          assert.hasChildren(content, props.children);
        });
      });
    });
  });
});
