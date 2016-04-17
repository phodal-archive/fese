import fese from '../../src/fese';

describe('fese', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(fese, 'greet');
      fese.greet();
    });

    it('should have been run once', () => {
      expect(fese.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(fese.greet).to.have.always.returned('hello');
    });
  });
});
