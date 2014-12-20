describe('Wizard', function () {
  it('should have a link to wizard', function () {
    browser.get('/welcome');
    var link = element(By.css('a'));
    expect(link.getAttribute('href')).toContain('/steps/start');
  });
  it('should go through wizard pages', function () {
    // welcome page
    browser.get('/welcome');
    var link = element(By.css('a'));
    expect(link.getAttribute('href')).toContain('/steps/start');
    link.click();

    // step 1
    var nameInput = element(By.css('input[type="text"]'));
    nameInput.sendKeys('My Test Name');
    var nextLink = element(By.css('a[link-rel="next"]'));
    expect(nextLink.getAttribute('href')).toContain('/steps/regular');
    nextLink.click();

    // step 2
    var emailInput = element(By.css('input[type="email"]'));
    emailInput.sendKeys('email@example.com');
    var nextLink = element(By.css('a[link-rel="next"]'));
    expect(nextLink.getAttribute('href')).toContain('/steps/finish');
    nextLink.click();

    // step 3
    var agreeToTosInput = element(By.css('input[type="checkbox"]'));
    agreeToTosInput.click();
    var nextLink = element(By.css('a[link-rel="next"]'));
    expect(nextLink.getAttribute('href')).toContain('/success');
    nextLink.click();

    // success
    var header = element(By.css('h2'));
    expect(header.getInnerHtml()).toEqual('Success');
  });
});
