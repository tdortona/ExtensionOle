chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let articles = document.querySelectorAll('article div h3.volanta');
  let articlesBoca = [];
  let articlesRiver = [];
  
  for (let article of articles) {
    if (article.textContent === 'BOCA ' || article.textContent === 'BOCA') {
      articlesBoca.push(article);
    } else if (article.textContent === 'RIVER ' || article.textContent === 'RIVER') {
      articlesRiver.push(article)
    }
  }

  if (request.action === 'showBoca') {
    for (let article of articlesBoca) {

      let divs = article.closest('[class^="div"]').querySelectorAll('div');
      console.log(divs);
      for (let div of divs) {
        div.style.cssText = div.style.cssText.replace('display: none;', '')
      }
    }
  } else if (request.action === 'hideBoca') {
    const display = 'none';
    for (let article of articlesBoca) {
      let divs = article.closest('[class^="div"]').querySelectorAll('div');

      for (let div of divs) {
        div.style.display = display;
      }
    }
  } else if (request.action === 'showRiver') {
    for (let article of articlesRiver) {
      let divs = article.closest('[class^="div"]').querySelectorAll('div');
      for (let div of divs) {
        div.style.cssText = div.style.cssText.replace('display: none;', '')
      }
    }
  } else if (request.action === 'hideRiver') {
    const display = 'none';
    for (let article of articlesRiver) {
      let divs = article.closest('[class^="div"]').querySelectorAll('div');
      for (let div of divs) {
        div.style.display = display;
      }
    }
  }
});