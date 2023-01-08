import type BlockType from './block'
import sinon from "sinon";
import proxyquire from "proxyquire";
import {expect} from "chai";

describe.only('Block', () => {
  const eventBusMock = {
    on: sinon.fake(),
    emit: sinon.fake(),
  };
  const { default: Block } = proxyquire('./block', {
    './event-bus': {
      EventBus: class {
        emit = eventBusMock.emit;
        on = eventBusMock.on;
      },
      '@noCallThru': true,
    }
  }) as { default: typeof BlockType };
  class ComponentMock extends Block {}

  it('should fire init event on initialization',  () => {
    new ComponentMock({});

    expect(eventBusMock.emit.calledWith('init')).to.eq(true);
  });
});
