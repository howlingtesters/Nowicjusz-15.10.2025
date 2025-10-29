// You don't need to take a look at this file - it is just Promise declaration for example purposes.

import test from "playwright/test";

const myExecutor = (resolve: any, reject: any) => {
    if (Math.random() > 0.5) {
        resolve('Sure thing!');
    } else {
        reject('No way!'); 
    }
}
  
export const proposeToHer = () => {
    return new Promise(myExecutor);
}

export const giveHerAllYourAssets = () => {
    return console.log('Transfer assets!');
}


test("Promise", async () => {
    // This test fail randomly at 50% ratio
    // proposeToHer() returns Promise<value> not value it self! In this case it is Promise<{ 'Sure thing!' }> or Promise { <rejected> 'No way!' }
    let iWillMarryYouForSure = proposeToHer()
    console.log(iWillMarryYouForSure)

    // So it migh be not good idea do give her all of your assets
    giveHerAllYourAssets()

    // Since the actual value is resolved here not when the promise is returned
    console.log(await iWillMarryYouForSure)
});