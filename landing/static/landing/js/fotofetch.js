var albumBucketName = 'ca-project-image-bucket';
var bucketRegion = 'ap-southeast-1';
var IdentityPoolId = 'ap-southeast-1:5d77e533-9a70-4642-bbab-4b3cc4275a0d';

// Initialize the Amazon Cognito credentials provider
AWS.config.region = bucketRegion; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId,
});

var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: 'ca-project-image-bucket'}
});
function viewAlbum() {
  var albumName = "album"
  var albumPhotosKey = encodeURIComponent(albumName) + '/';
  s3.listObjects({Prefix: albumPhotosKey}, function(err, data) {
    if (err) {
      return alert('There was an error viewing your album: ' + err.message);
    }
    // `this` references the AWS.Response instance that represents the response
    var href = this.request.httpRequest.endpoint.href;
    var bucketUrl = href + albumBucketName + '/';
    
    var photos = data.Contents.map(function(photo) {
      var photoKey = photo.Key;
      var photoUrl = bucketUrl + encodeURIComponent(photoKey);
      return getHtml([
        // '<span>',
          // '<div>',
            // '<img style="width:128px;height:128px;" src="' + photoUrl + '"/>',
            '<img src="' + photoUrl + '" style="width:100%">',
          // '</div>',
          // '<div>',
          //   '<span onclick="deletePhoto(\'' + albumName + "','" + photoKey + '\')">',
          //     'X',
          //   '</span>',
          //   '<span>',
          //     photoKey.replace(albumPhotosKey, ''),
          //   '</span>',
          // '</div>',
        // '</span>',
      ]);
    });
    photos.shift();
    var message = photos.length ?
      '<p>Click on the X to delete the photo</p>' :
      '<p>You do not have any photos in this album. Please add photos.</p>';
    var htmlTemplate = [
      '<div class="row">',
      '<div class="column">',
      getHtml(photos),
      '</div class="column">',
      '</div class="row">',

      // '<h2>',
      //   'Album: ' + albumName,
      // '</h2>',
      // message,
      // '<div>',
      //   getHtml(photos),
      // '</div>',
      // '<input id="photoupload" type="file" accept="image/*">',
      // '<button id="addphoto" onclick="addPhoto(\'' + albumName +'\')">',
      //   'Add Photo',
      // '</button>',
      // '<button onclick="listAlbums()">',
      //   'Back To Albums',
      // '</button>',
    ]
    document.getElementById('Gallery').innerHTML = getHtml(htmlTemplate);
  });
}
