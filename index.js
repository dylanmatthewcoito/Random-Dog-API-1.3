'use strict';


function fetchRandomImage(breed) {
  return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(
      (r) => {
        if (!r.ok)
          throw Error(r.status);
        return r.json();
      }
    );
}


function main() {
  $('#dogForm').submit((event) => {
    event.preventDefault();
    const breed = $('#breed').val();
    fetchRandomImage(breed).then(
      (data) => {
        $('#result').html(
          `<img src='${data.message}' alt="dog">`
        );
      }
    ).catch(
      (e) => {
        if (e.message === '404')
          alert('No such breed');
        else
          alert('sorry, an error has occurred')
      }
    );
  })
}


 $(main);
