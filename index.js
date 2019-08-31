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
	return _walk_through_and_pluck_keys(data, objectPathString.split('.'));
}

/*
@private
Util function to check object is array 
*/
function _isArray(input) {
		if(input && input.constructor === Array)
		return true;
	else
		false;
}

/*
@private
Recursively Walks through the oData and traverse in keyList order
@params {object} oData
@params {Array} keyList
@return object
*/
function _walk_through_and_pluck_keys(oData,keyList) {

	if (!oData || !keyList || keyList.length <= 0)
		return oData;

	if (_isArray(oData)) {
		
		const currentkey = keyList[0];
		let dataList = [];
		for (let i = 0; i < oData.length; i++) {
			let op;
			if (keyList.length == 1) {
				op = oData[i][currentkey];
			} else {
				op =  _walk_through_and_pluck_keys(oData[i][currentkey], keyList.slice(1));
			}

			//if array then loop and get keys to avoid flattening array finally
			if(_isArray(op)){
				let length = op.length;
				let index = 0;
				while(index < length){
					dataList.push(op[index]);
					++index;
				}
			}else{
				dataList.push(op);
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
