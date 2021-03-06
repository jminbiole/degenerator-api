'use strict';

const Lucid = use('Lucid');

class Upload extends Lucid {

  user() {
    return this.belongsTo('App/Model/User');
  }

}

module.exports = Upload;
