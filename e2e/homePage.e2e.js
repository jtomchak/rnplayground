describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have home screen', async () => {
    await expect(element(by.text('Home screen'))).toBeVisible();
  });

  it('should show details screen after tap', async () => {
    await element(by.id('go_to_details_button')).tap();
    await expect(element(by.text('Details!'))).toBeVisible();
  });
});
