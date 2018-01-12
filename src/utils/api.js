const getData = function (url) {
  return fetch(url, {method: 'get'}).then(response => {
    return response.json()
  }).catch(err => {
    throw err;
  });
}

export {
  getData
};