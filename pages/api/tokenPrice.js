const Moralis = require("moralis").default;

Moralis.start({
  apiKey: process.env.MORALIS_KEY,
})

export default async (req, res) => {

  const {query} = req;

  if(query.addressOne !== undefined){
    const responseOne = await Moralis.EvmApi.token.getTokenPrice({
      address: query.addressOne
    })
  
    const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
      address: query.addressTwo
    })
  
    const usdPrices = {
      tokenOne: responseOne.raw.usdPrice,
      tokenTwo: responseTwo.raw.usdPrice,
      ratio: responseOne.raw.usdPrice/responseTwo.raw.usdPrice
    }

    res.status(200).json(usdPrices);
  }
};
