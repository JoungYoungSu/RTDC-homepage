const CODE = require("../modules/status-code");
const MSG = require("../modules/response-message");
const UTIL = require("../modules/util");

const request = require("request");

const mtdzLog = {};

mtdzLog.index = async function(req, res, next) {
    try {
        const url = 'https://th-api.klaytnapi.com/v2/contract/nft/0x46dbdc7965cf3cd2257c054feab941a05ff46488/token?size=1000';

        const getAllMtdzNft = {
            uri: url,
            headers: {
                'Content-Type': 'application/json',
                'x-chain-id': '8217',
                'Authorization': 'Basic S0FTS0pWWUJFOE1YSjJIMTNINDVRODlaOl9IY181Q2pWeGdOSHJfY3psc1EzMm5HMUE0cy1rQ09tdmhRTXpNZWQ='
            }
        }
        request(getAllMtdzNft,function(err,response,body){
            var jsonArray = JSON.parse(body).items;
            var mtdzArray = [];

            for(json of jsonArray){
                request(json.tokenUri,function(err,response,body){
                    // console.log(JSON.parse(body));
                    mtdzArray.push(body);
                })
            }
            mtdzArray.push({'test':'123'});
            const mtdzJson = JSON.stringify(mtdzArray);
            console.log(mtdzArray);
            console.log(mtdzJson);
            return res.send(mtdzJson);
        });
        //res.status(CODE.OK).send(UTIL.success(MSG.SEARCH_SUCCESS));
        //return res.send("hello");
    } catch (error) {
        console.log(error);
        return res.status(CODE.INTERNAL_SERVER_ERROR).send(UTIL.fail(MSG.SEARCH_FAIL));
    }
}

module.exports = mtdzLog;