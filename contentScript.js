chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'showBoca') {
      let articles = document.querySelectorAll('article div h3.volanta');
      const display = 'block';
      for (let article of articles) {
        if (article.textContent === 'BOCA ' || article.textContent === 'BOCA') {
          let divs = article.closest('[class^="div"]').querySelectorAll('div');
          for (let div of divs) {
            div.style.display = display;
          }
        }
      }
    } else if (request.action === 'hideBoca') {
      let articles = document.querySelectorAll('article div h3.volanta');
      const display = 'none';
      for (let article of articles) {
        if (article.textContent === 'BOCA ' || article.textContent === 'BOCA') {
          let divs = article.closest('[class^="div"]').querySelectorAll('div');
          for (let div of divs) {
            div.style.display = display;
          }
        }
      }
    } else if (request.action === 'showRiver') {
      let articles = document.querySelectorAll('article div h3.volanta');
      const display = 'block';
      for (let article of articles) {
        if (article.textContent === 'RIVER ' || article.textContent === 'RIVER') {
          let divs = article.closest('[class^="div"]').querySelectorAll('div');
          for (let div of divs) {
            div.style.display = display;
          }
        }
      }
    } else if (request.action === 'hideRiver') {
        let articles = document.querySelectorAll('article div h3.volanta');
        const display = 'none';
        for (let article of articles) {
            if (article.textContent === 'RIVER ' || article.textContent === 'RIVER') {
              let divs = article.closest('[class^="div"]').querySelectorAll('div');
              for (let div of divs) {
                div.style.display = display;
              }
            }
          }
    }
});