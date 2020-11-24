var axios = require("axios");
var convert = require("xml-js");

const getDescription = async (id) => {
  let result = null;
  await axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/isbn/${id}?key=uEyzrPUw11xUApxG97dTgQ`
    )
    .then((response) => {
      result = JSON.parse(
        convert.xml2json(response.data, { compact: true, spaces: 4 })
      );
    });
  return result.GoodreadsResponse.book.description._cdata;
};

export default getDescription;
