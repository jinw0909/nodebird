const {isLoggedIn, isNotLoggedIn} = require('./middlewares')
describe('isLoggedIn', () => {
    const req = {
        isAuthenticated: jest.fn(() => true),
    };
    const res = {
        status: jest.fn(() => res),
        send: jest.fn()
    };
    const next = jest.fn();
    test('로그인되어있으면 isLoggedIn이 next를 호출해야함', () => {
        isLoggedIn(req, res, next);
        expect(next).toBeCalledTimes(1);
    }); 
    test('로그인되어있지않으면 isLoggedIn이 에러를 응답해야함', () => {
        expect(isLoggedIn()).toEqual();
    }); 
})
describe('isNotLoggedIn', () => {
    test('로그인되어있으면 isNotLoggedIn이 next를 호출해야함', () => {
        expect(isNotLoggedIn(req, res, next)).toEqual();
    }); 
    test('로그인되어있지않으면 isNotLoggedIn이 에러를 응답해야함', () => {
        expect(isNotLoggedIn()).toEqual();
    }); 
})