exports.handler = function(event, context, callback) {
  console.log("EVENT", event)
  console.log("CONTEXT", context)
  const tokenId = event.queryStringParameters.tokenId
    ? event.queryStringParameters.tokenId
    : event.path.split("/")[2];
  const metadata =  {
    "name": "MTT #" + tokenId,
    "external_url": "https://dazzling-davinci-894f72.netlify.com/",
    "home_url": "https://dazzling-davinci-894f72.netlify.com/",
    "description": "Describes the asset to which this token represents",
    "image": "https://dummyimage.com/400x400/000000/fff/&text=MTT%20" + tokenId + "%20(C" + character(tokenId) + ")",
    "image_url": "https://dummyimage.com/400x400/000000/fff/&text=MTT%20" + tokenId + "%20(C" + character(tokenId) + ")",
    "attributes": [
      {
        "trait_type": "character",
        "value": character(tokenId)
      }
    ],
    "tags": ["cool","hot","mild"]
  }
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(metadata)
  });
};

function character(tokenId) {
  const c = ((tokenId - 1) %17) + 1
  return '' + c;
}
