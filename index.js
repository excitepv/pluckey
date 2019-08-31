/*!
 * plucky
 * A tiny util library to pluck key from deep arrays and objects
 * Copyright(c) 2019 Vigneshwaran P
 * MIT Licensed
*/
'use strict';
/*
Plucks the key from deep objects and arrays
@params {object || array} data
@params {string} object path string refer test.js for example
@return array || string || object based on the objectPathString
*/
module.exports = function plucky(data, objectPathString){
	if(!data || typeof objectPathString !== 'string'){
		throw Error("Invalid parameters");
		return;
	}
	let parsedData = _walk_through_and_pluck_keys(data, objectPathString.split('.'));
	if(Array.isArray(parsedData))
		return parsedData.flat(Infinity);
	else
		return parsedData;
}

/*
@private
Recursively Walks through the oData and traverse in keyList order
*/
function _walk_through_and_pluck_keys(oData,keyList) {

	if (!oData || !keyList || keyList.length <= 0)
		return oData;

	if (Array.isArray(oData)) {
		
		const currentkey = keyList[0];
		let dataList = [];
		for (let i = 0; i < oData.length; i++) {
			if (keyList.length == 1) {
				dataList.push(oData[i][currentkey]);
			} else {
				dataList.push(_walk_through_and_pluck_keys(oData[i][currentkey], keyList.slice(1)));
			}
		}
		keyList.splice(0, 1);
		return dataList;
	} else {
		if (!oData[keyList[0]])
			return null;

		if (keyList.length == 1) {
			return oData[keyList[0]];
		}
		oData = oData[keyList[0]];
		keyList.splice(0, 1);

		return _walk_through_and_pluck_keys(oData, keyList);

	}
}
