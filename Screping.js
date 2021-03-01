
// const puppeteer = require('puppeteer');
// const $ = require('cheerio');

// const url = 'https://www.kompas.com/';
    
//     puppeteer
//       .launch()
//       .then(function(browser) {
//         return browser.newPage();
//       })
//       .then(function(page) {
//         return page.goto(url).then(function() {
//           return page.content();
//         });
//       })
//       .then(function(html) {
//         $('h2', html).each(function() {
//           console.log($(this).text());
//         });
//       })
//       .catch(function(err) {
//         //handle error
//       });


      const request = require("request");
      const cheerio = require("cheerio");
      
      request("https://www.kompas.com/", (err, res, html) => {
        if (!err && res.statusCode == 200) {
          const $ = cheerio.load(html);
      
          $(".most__list.clearfix").each((i, el) => {
            const title = $(el).find(".most__title").text();
            const link = $(el).find("a").attr("href");
            console.log(title, link);
          });
        }
      });