// Simple test again whether or not line numbering from any subordinate directories is working correctly
// Credit to : https://medium.com/@lacolaco/setting-up-angular-2-testing-environment-with-karma-and-webpack-e9b833befd99
describe('sub test', () => {
    it('always fails', () => {
        expect(0).toBe(1);
    });
});