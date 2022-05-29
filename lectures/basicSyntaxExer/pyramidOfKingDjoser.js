function pyramidOfKingDjoser(height, width) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;

    let stoneH = height;
    let marbleH = height;

    let stoneFinal = 0;
    let marbleFinal = 0;

    let row = Math.ceil(height / 2);

    for (let i = 1; i < row; i++) {
        marbleH = marbleH - 2;
        marble = (marbleH * 4) - 4;
        marbleFinal += marble * width;
        if(i > 4) {
            lapisLazuli += (marble * width);
            continue;
        }
    }

    for (let i = 1; i < row; i++) {
        stoneH = stoneH - 2;
        stone = stoneH * stoneH;
        stoneFinal += stone * width;
    }




    console.log(`Stone required: ${Math.ceil(stoneFinal)}`);
    console.log(`Marble required: ${marbleFinal}`);
    console.log(`Lapis Lazuli required: ${lapisLazuli}`);


}
pyramidOfKingDjoser(11, 1);

