const axios = require('axios')

const getAddress = async ({
    postalCode = '609776',
    returnGeom = 'N',
    getAddrDetails = 'Y',
    pageNum = '1'
} = {}) => {
  try {
      let params = {
        searchVal: postalCode,
        returnGeom: returnGeom,
        getAddrDetails: getAddrDetails,
        pageNum: pageNum
      }
      const response = await axios.get('https://developers.onemap.sg/commonapi/search', { params });

      let json = response.data;
        if (json.error) {
            throw new Error(json.error)
        }

        if (json.found) {
        let { BLK_NO, ROAD_NAME, POSTAL, BUILDING } = json.results[0]

        let res = { 
            postalCode: POSTAL, 
            blockNo: BLK_NO, 
            streetName: ROAD_NAME, 
            buildingName: BUILDING
        }
        
        res.address = json.results.map(item => {
            let { BUILDING, ADDRESS } = item
            return { BUILDING, ADDRESS }
        })

        return res
    }
  } catch (error) {
    return [];
  }
};

module.exports = { getAddress };