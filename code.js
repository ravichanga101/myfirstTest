const spinner = document.querySelector('#js-spinner');
const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';


 function getQuote() {
    spinner.classList.remove('hidden');
    newQuoteButton.disabled = true;
  
    try { 
        var response = fetch(endpoint).then((data)=>{
                
                if (!data.ok) {
                    throw Error(data.statusText);
                }
                const p_json = data.json().then((obj)=>{
                    displayQuote(obj.message);
                  }); 
                return data; 
        });
        
    } catch {
      alert('Failed to fetch new quote');
    } finally {
      newQuoteButton.disabled = false;
      spinner.classList.add('hidden');
    }
  }

/*
async function getQuote() {
  spinner.classList.remove('hidden');
  newQuoteButton.disabled = true;

  try {
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    displayQuote(json.message);
  } catch {
    alert('Failed to fetch new quote');
  } finally {
    newQuoteButton.disabled = false;
    spinner.classList.add('hidden');
  }
}
*/

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}