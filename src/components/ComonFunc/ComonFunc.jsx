export function checkImageRatio(imageUrl) {
  var img = new Image();

  img.onload = function () {
    var width = img.naturalWidth;
    var height = img.naturalHeight;

    var ratio = width / height;

    console.log('Image width:', width);
    console.log('Image height:', height);
    console.log('Image ratio:', ratio);
    return ratio;
  };

  img.onerror = function () {
    console.log('Failed to load the image.');
  };

  img.src = imageUrl;
}


export function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function convertDate(date) {
  const postDate = new Date(date);

  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = postDate.toLocaleDateString('en-GB', options);

  // console.log(formattedDate); // Output: 30 Mar 2024
  return formattedDate;
}