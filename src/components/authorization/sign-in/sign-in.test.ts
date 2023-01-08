import proxyquire from 'proxyquire';
import {expect} from "chai";
import sinon from "sinon";

describe('Sign-in page', () => {
  const signinFake = sinon.fake();

  const { SignIn } = proxyquire('./sign-in',{
    '../../../controllers/auth-controller': {
      signin: signinFake,
      '@noCallThru': true,
    }
  });

  it('should call AuthController.signin on auth button click', () => {
    const page = new SignIn();
    const element = page.element;

    const button = element.querySelector('.sign-in') as HTMLButtonElement;

    button.click();

    expect(signinFake.callCount).to.eq(1);


  })
})
