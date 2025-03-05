
function test(){
  let page = "https://www.smartbear.com/";
  Browsers.Item(btChrome).Run(page);
  Sys.Browser().Page("https://smartbear.com/").FindElement("//li[contains(., 'Products')]").Click();
  Sys.Browser().Page("https://smartbear.com/").FindElement("//a[contains(., 'TestComplete')]").Click();
  
  if (Sys.Browser().Page("https://smartbear.com/product/testcomplete/").WaitElement("//a[.='Start My Free Trial']", 5000).Exists) {
    Sys.Browser().Page("https://smartbear.com/product/testcomplete/").FindElement("//a[.='Start My Free Trial']").Click();
  }
}
