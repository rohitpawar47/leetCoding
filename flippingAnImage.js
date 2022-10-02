// 832. Flipping an Image

console.log(`_Flipping an Image_`);

var flipAndInvertImage = function (image) {
    // debugger
    for (let i = 0; i < image.length; i++) {

        let end = image[i].length - 1;

        for (let start = 0; start < (image[i].length) / 2; start++) {
            let temp = image[i][start] ^ 1;
            image[i][start] = image[i][end - start] ^ 1;
            image[i][end - start] = temp;

        }
    }

    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            if (image[i][j] === 0) {
                image[i][j] = 1;
            } else {
                image[i][j] = 0;
            }
        }

    }
    return image;
};

var image = [
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0]
];

console.log(flipAndInvertImage(image));
