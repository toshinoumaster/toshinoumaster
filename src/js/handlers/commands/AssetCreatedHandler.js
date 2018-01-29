/*
Created by Freshek on 24.01.2018
*/

class AssetCreatedHandler {
  static get ID() {
    return 23109;
  }

  constructor() {
    this._handler = function(e, a) {
      let parsedCmd = JSON.parse(e.detail);

      let typeObj = parsedCmd.type;
      let type = parseInt(typeObj[Object.keys(typeObj)[0]]);
    }
  }

  get handler() {
    return this._handler;
  }

  static get ASSET_TYPE_CBS() {
    return 0;
  }
}
