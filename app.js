const async = require('async');

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
// const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/testMongoose';
//mongodb://denjoyuser:vndkjfn54_fd3fdk3r@157.230.30.115:27011/vending

// Database Name
const dbName = 'testMongoose';

// Use connect method to connect to the server
MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
  // assert.equal(null, err);
  if (err) return console.log('err', err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  let alias = db.collection('alias');
  let datatype = db.collection('datatype');
  let tableheader = db.collection('tableheader');

  // const role = db.collection('role');
  // role.updateMany({name: null}, {$set: {name2: 'admin'}, $unset: {name: ''}, $unset: {collection: ''}}, function(err) {
  //   if (err) console.log('err', err);
  // })


  // return;




  async.waterfall([
    (next) => {
      async.waterfall([
        (cllbck) => {
          db.renameCollection('action', 'Action', function(err) {
            if (err) {
              console.log('err', err);
            };

            alias.updateMany({collection: 'action'}, {$set: {collectionName: 'Action'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'action'}, {$set: {collectionName: 'Action'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'action'}, {$set: {collectionName: 'Action'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  tableheader.updateMany({collection: 'custom'}, {$set: {collectionName: 'custom'}, $unset: {collection: ''}}, function(err) {
                    if (err) console.log(err);
                    cllbck()
                  })
                })
              })
            })

          })
        },
        (cllbck) => {
          db.renameCollection('alias', 'Alias', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias = db.collection('Alias');
            alias.updateMany({collection: 'alias'}, {$set: {collectionName: 'Alias'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'alias'}, {$set: {collectionName: 'Alias'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'alias'}, {$set: {collectionName: 'Alias'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('apikey', 'ApiKey', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'apikey'}, {$set: {collectionName: 'ApiKey'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'apikey'}, {$set: {collectionName: 'ApiKey'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'apikey'}, {$set: {collectionName: 'ApiKey'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('bablomet', 'Bablomet', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'bablomet'}, {$set: {collectionName: 'Bablomet'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'bablomet'}, {$set: {collectionName: 'Bablomet'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'bablomet'}, {$set: {collectionName: 'Bablomet'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('balance', 'Balance', function(err) {
            if (err) {
              console.log('err', err);
            };
            let Balance = db.collection('Balance');

            Balance.dropIndex('organization_1_changedAt_1_monthly_1', function(err) {
              if (err) console.log(err);
              Balance.createIndex({changedAt: -1, organization: 1}, function(err) {
                if (err) console.log(err);
                alias.updateMany({collection: 'balance'}, {$set: {collectionName: 'Balance'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  datatype.updateMany({collection: 'balance'}, {$set: {collectionName: 'Balance'}, $unset: {collection: ''}}, function(err) {
                    if (err) console.log(err);
                    tableheader.updateMany({collection: 'balance'}, {$set: {collectionName: 'Balance'}, $unset: {collection: ''}}, function(err) {
                      if (err) console.log(err);
                      cllbck()
                    })
                  })
                })
              })
            })

          })
        },
        (cllbck) => {
          db.renameCollection('cashflow', 'CashFlow', function(err) {
            if (err) {
              console.log('err', err);
            };
            alias.updateMany({collection: 'cashflow'}, {$set: {collectionName: 'CashFlow'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'cashflow'}, {$set: {collectionName: 'CashFlow'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'cashflow'}, {$set: {collectionName: 'CashFlow'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('category', 'Category', function(err) {
            if (err) {
              console.log('err', err);
            };
            alias.updateMany({collection: 'category'}, {$set: {collectionName: 'Category'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'category'}, {$set: {collectionName: 'Category'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'category'}, {$set: {collectionName: 'Category'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('chart', 'Chart', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'chart'}, {$set: {collectionName: 'Chart'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'chart'}, {$set: {collectionName: 'Chart'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'chart'}, {$set: {collectionName: 'Chart'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('check', 'Check', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'check'}, {$set: {collectionName: 'Check'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'check'}, {$set: {collectionName: 'Check'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'check'}, {$set: {collectionName: 'Check'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('collaborator', 'Collaborator', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            let Collaborator = db.collection('Collaborator');

            Collaborator.dropIndex('organization_1_invisible_1', function(err) {
              if (err) console.log(err);
              Collaborator.createIndex('organization_1', function(err) {
                if (err) console.log(err);
                alias.updateMany({collection: 'collaborator'}, {$set: {collectionName: 'Collaborator'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  datatype.updateMany({collection: 'collaborator'}, {$set: {collectionName: 'Collaborator'}, $unset: {collection: ''}}, function(err) {
                    if (err) console.log(err);
                    tableheader.updateMany({collection: 'collaborator'}, {$set: {collectionName: 'Collaborator'}, $unset: {collection: ''}}, function(err) {
                      if (err) console.log(err);
                      cllbck()
                    })
                  })
                })
              })
            })

          })
        },
        (cllbck) => {
          db.renameCollection('comment', 'Comment', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'comment'}, {$set: {collectionName: 'Comment'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'comment'}, {$set: {collectionName: 'Comment'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'comment'}, {$set: {collectionName: 'Comment'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('component', 'Component', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'component'}, {$set: {collectionName: 'Component'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'component'}, {$set: {collectionName: 'Component'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'component'}, {$set: {collectionName: 'Component'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('config', 'Config', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            let Config = db.collection('Config');
            Config.createIndex({terminal: 1}, function(err) {
              if (err) console.log(err);
              alias.updateMany({collection: 'config'}, {$set: {collectionName: 'Config'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                datatype.updateMany({collection: 'config'}, {$set: {collectionName: 'Config'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  tableheader.updateMany({collection: 'config'}, {$set: {collectionName: 'config'}, $unset: {collection: ''}}, function(err) {
                    if (err) console.log(err);
                    cllbck()
                  })
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('consumption', 'Consumption', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'consumption'}, {$set: {collectionName: 'Consumption'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'consumption'}, {$set: {collectionName: 'Consumption'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'consumption'}, {$set: {collectionName: 'Consumption'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('contribution', 'Contribution', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'contribution'}, {$set: {collectionName: 'Contribution'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'contribution'}, {$set: {collectionName: 'Contribution'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'contribution'}, {$set: {collectionName: 'contribution'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('currency', 'Currency', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'currency'}, {$set: {collectionName: 'Currency'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'currency'}, {$set: {collectionName: 'Currency'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'currency'}, {$set: {collectionName: 'Currency'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('dataset', 'DataSet', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'dataset'}, {$set: {collectionName: 'DataSet'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'dataset'}, {$set: {collectionName: 'DataSet'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'dataset'}, {$set: {collectionName: 'DataSet'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('datatype', 'DataType', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            datatype = db.collection('DataType');
            alias.updateMany({collection: 'datatype'}, {$set: {collectionName: 'DataType'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'datatype'}, {$set: {collectionName: 'DataType'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'datatype'}, {$set: {collectionName: 'DataType'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('debug', 'Debug', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'debug'}, {$set: {collectionName: 'Debug'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'debug'}, {$set: {collectionName: 'Debug'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'debug'}, {$set: {collectionName: 'Debug'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('device', 'Device', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'device'}, {$set: {collectionName: 'Device'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'device'}, {$set: {collectionName: 'Device'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'device'}, {$set: {collectionName: 'Device'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('downtime', 'DownTime', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'downtime'}, {$set: {collectionName: 'DownTime'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'downtime'}, {$set: {collectionName: 'DownTime'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'downtime'}, {$set: {collectionName: 'DownTime'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('encashment', 'Encashment', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'encashment'}, {$set: {collectionName: 'Encashment'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'encashment'}, {$set: {collectionName: 'Encashment'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'encashment'}, {$set: {collectionName: 'encashment'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('event', 'Event', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'event'}, {$set: {collectionName: 'Event'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'event'}, {$set: {collectionName: 'Event'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'events'}, {$set: {collectionName: 'events'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('formula', 'Formula', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'formula'}, {$set: {collectionName: 'Formula'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'formula'}, {$set: {collectionName: 'Formula'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'formula'}, {$set: {collectionName: 'Formula'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('history', 'History', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'history'}, {$set: {collectionName: 'History'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'history'}, {$set: {collectionName: 'History'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'history'}, {$set: {collectionName: 'History'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('idata', 'Idata', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'idata'}, {$set: {collectionName: 'Idata'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'idata'}, {$set: {collectionName: 'Idata'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'idata'}, {$set: {collectionName: 'Idata'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('info', 'Info', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'info'}, {$set: {collectionName: 'Info'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'info'}, {$set: {collectionName: 'Info'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'info'}, {$set: {collectionName: 'Info'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('invite', 'Invite', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'invite'}, {$set: {collectionName: 'Invite'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'invite'}, {$set: {collectionName: 'Invite'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'invite'}, {$set: {collectionName: 'Invite'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('laundry', 'Laundry', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'loundry'}, {$set: {collectionName: 'Laundy'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'loundry'}, {$set: {collectionName: 'Laundy'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'loundry'}, {$set: {collectionName: 'Laundy'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('locality', 'Locality', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'locality'}, {$set: {collectionName: 'Locality'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'locality'}, {$set: {collectionName: 'Locality'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'locality'}, {$set: {collectionName: 'Locality'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('mapdata', 'MapData', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'mapdata'}, {$set: {collectionName: 'MapData'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'mapdata'}, {$set: {collectionName: 'MapData'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'mapdata'}, {$set: {collectionName: 'MapData'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('matrix', 'Matrix', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'matrix'}, {$set: {collectionName: 'Matrix'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'matrix'}, {$set: {collectionName: 'Matrix'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'matrix'}, {$set: {collectionName: 'Matrix'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('matrixtype', 'MatrixType', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'matrixtype'}, {$set: {collectionName: 'MatrixType'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'matrixtype'}, {$set: {collectionName: 'MatrixType'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'matrixtype'}, {$set: {collectionName: 'MatrixType'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('message', 'Message', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'message'}, {$set: {collectionName: 'Message'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'message'}, {$set: {collectionName: 'Message'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'message'}, {$set: {collectionName: 'Message'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('money', 'Money', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'money'}, {$set: {collectionName: 'Money'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'money'}, {$set: {collectionName: 'Money'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'money'}, {$set: {collectionName: 'Money'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('orangedata', 'OrangeData', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'orangedata'}, {$set: {collectionName: 'OrangeData'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'orangedata'}, {$set: {collectionName: 'OrangeData'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'orangedata'}, {$set: {collectionName: 'OrangeData'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('organization', 'Organization', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'organization'}, {$set: {collectionName: 'Organization'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'organization'}, {$set: {collectionName: 'Organization'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'organization'}, {$set: {collectionName: 'Organization'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('parseddata', 'ParsedData', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'parseddata'}, {$set: {collectionName: 'ParsedData'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'parseddata'}, {$set: {collectionName: 'ParsedData'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'parseddata'}, {$set: {collectionName: 'ParsedData'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('parser', 'Parser', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'parser'}, {$set: {collectionName: 'Parser'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'parser'}, {$set: {collectionName: 'Parser'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'parser'}, {$set: {collectionName: 'Parser'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('permission', 'Permission', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'permission'}, {$set: {collectionName: 'Permission'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'permission'}, {$set: {collectionName: 'Permission'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'permission'}, {$set: {collectionName: 'Permission'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('permissiontype', 'PermissionType', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'permissiontype'}, {$set: {collectionName: 'PermissionType'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'permissiontype'}, {$set: {collectionName: 'PermissionType'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'permissiontype'}, {$set: {collectionName: 'PermissionType'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('product', 'Product', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'product'}, {$set: {collectionName: 'Product'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'product'}, {$set: {collectionName: 'Product'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'product'}, {$set: {collectionName: 'Product'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('recipe', 'Recipe', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'recipe'}, {$set: {collectionName: 'Recipe'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'recipe'}, {$set: {collectionName: 'Recipe'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'recipe'}, {$set: {collectionName: 'Recipe'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('refill', 'Refill', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'refill'}, {$set: {collectionName: 'Refill'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'refill'}, {$set: {collectionName: 'Refill'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'refill'}, {$set: {collectionName: 'Refill'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('request', 'Request', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'request'}, {$set: {collectionName: 'Request'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'request'}, {$set: {collectionName: 'Request'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'request'}, {$set: {collectionName: 'Request'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('role', 'Role', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'role'}, {$set: {collectionName: 'Role'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'role'}, {$set: {collectionName: 'Role'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'role'}, {$set: {collectionName: 'Role'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('sale', 'Sale', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            let Sale = db.collection('Sale');

            Sale.dropIndex('terminal_1_changedAt_-1', function(err) {
              if (err) console.log(err);
              Sale.dropIndex('terminal_1_changedAt_1', function(err) {
                if (err) console.log(err);
                Sale.createIndex({changedAt: -1, terminal: 1}, function(err) {
                  if (err) console.log(err);
                  alias.updateMany({collection: 'sale'}, {$set: {collectionName: 'Sale'}, $unset: {collection: ''}}, function(err) {
                    if (err) console.log(err);
                    datatype.updateMany({collection: 'sale'}, {$set: {collectionName: 'Sale'}, $unset: {collection: ''}}, function(err) {
                      if (err) console.log(err);
                      tableheader.updateMany({collection: 'sale'}, {$set: {collectionName: 'sale'}, $unset: {collection: ''}}, function(err) {
                        if (err) console.log(err);
                        cllbck()
                      })
                    })
                  })
                })
              })


            })

          })
        },
        (cllbck) => {
          db.renameCollection('service', 'Service', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'service'}, {$set: {collectionName: 'Service'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'service'}, {$set: {collectionName: 'Service'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'service'}, {$set: {collectionName: 'Service'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('socket', 'Socket', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'socket'}, {$set: {collectionName: 'Socket'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'socket'}, {$set: {collectionName: 'Socket'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'socket'}, {$set: {collectionName: 'Socket'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('socketdowntime', 'SocketDownTime', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'socketdowntime'}, {$set: {collectionName: 'SocketDownTime'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'socketdowntime'}, {$set: {collectionName: 'SocketDownTime'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'socketdowntime'}, {$set: {collectionName: 'SocketDownTime'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('spending', 'Spending', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'spending'}, {$set: {collectionName: 'Spending'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'spending'}, {$set: {collectionName: 'Spending'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'spending'}, {$set: {collectionName: 'Spending'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('statistic', 'Statistic', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'statistic'}, {$set: {collectionName: 'Statistic'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'statistic'}, {$set: {collectionName: 'Statistic'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'statistic'}, {$set: {collectionName: 'Statistic'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('stock', 'Stock', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'stock'}, {$set: {collectionName: 'Stock'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'stock'}, {$set: {collectionName: 'Stock'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'stock'}, {$set: {collectionName: 'stock'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('tableheader', 'TableHeader', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            tableheader = db.collection('TableHeader');
            alias.updateMany({collection: 'tableheader'}, {$set: {collectionName: 'TableHeader'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'tableheader'}, {$set: {collectionName: 'TableHeader'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'tableheader'}, {$set: {collectionName: 'TableHeader'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('tag', 'Tag', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'tag'}, {$set: {collectionName: 'Tag'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'tag'}, {$set: {collectionName: 'Tag'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'tag'}, {$set: {collectionName: 'Tag'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('tagts', 'Tagts', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'tagts'}, {$set: {collectionName: 'Tagts'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'tagts'}, {$set: {collectionName: 'Tagts'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'tagts'}, {$set: {collectionName: 'Tagts'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('tanker', 'Tanker', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'tanker'}, {$set: {collectionName: 'Tanker'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'tanker'}, {$set: {collectionName: 'Tanker'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'tanker'}, {$set: {collectionName: 'Tanker'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('tankerorder', 'TankerOrder', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'tankerorder'}, {$set: {collectionName: 'TankerOrder'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'tankerorder'}, {$set: {collectionName: 'TankerOrder'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'tankerorder'}, {$set: {collectionName: 'TankerOrder'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('task', 'Task', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'task'}, {$set: {collectionName: 'Task'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'task'}, {$set: {collectionName: 'Task'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'task'}, {$set: {collectionName: 'Task'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('techspecification', 'TechSpecification', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'techspecification'}, {$set: {collectionName: 'TechSpecification'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'techspecification'}, {$set: {collectionName: 'TechSpecification'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'techspecification'}, {$set: {collectionName: 'TechSpecification'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('telegram', 'Telegram', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'telegram'}, {$set: {collectionName: 'Telegram'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'telegram'}, {$set: {collectionName: 'Telegram'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'telegram'}, {$set: {collectionName: 'Telegram'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('terminal', 'Terminal', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'terminal'}, {$set: {collectionName: 'Terminal'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'terminal'}, {$set: {collectionName: 'Terminal'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'terminal'}, {$set: {collectionName: 'terminal'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('terminalcontrols', 'TerminalControls', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'terminalcontrols'}, {$set: {collectionName: 'TerminalControls'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'terminalcontrols'}, {$set: {collectionName: 'TerminalControls'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'terminalcontrols'}, {$set: {collectionName: 'TerminalControls'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('terminalparams', 'TerminalParams', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'terminalParams'}, {$set: {collectionName: 'TerminalParams'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'terminalParams'}, {$set: {collectionName: 'TerminalParams'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'terminalParams'}, {$set: {collectionName: 'terminalParams'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('terminaltype', 'TerminalType', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'terminaltype'}, {$set: {collectionName: 'TerminalType'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'terminaltype'}, {$set: {collectionName: 'TerminalType'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'type'}, {$set: {collectionName: 'type'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('user', 'User', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            alias.updateMany({collection: 'user'}, {$set: {collectionName: 'User'}, $unset: {collection: ''}}, function(err) {
              if (err) console.log(err);
              datatype.updateMany({collection: 'user'}, {$set: {collectionName: 'User'}, $unset: {collection: ''}}, function(err) {
                if (err) console.log(err);
                tableheader.updateMany({collection: 'user'}, {$set: {collectionName: 'User'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  cllbck()
                })
              })
            })
          })
        },
        (cllbck) => {
          db.renameCollection('warning', 'Warning', function(err) {
            if (err) {
              console.log('err', cllbck);
            };
            let Warning = db.collection('Warning');

            Warning.dropIndex('terminal_1_createdAt_-1_active_1', function(err) {
              if (err) console.log(err);
              Warning.createIndex({createdAt: -1, terminal: 1}, function(err) {
                if (err) console.log(err);
                alias.updateMany({collection: 'warning'}, {$set: {collectionName: 'Warning'}, $unset: {collection: ''}}, function(err) {
                  if (err) console.log(err);
                  datatype.updateMany({collection: 'warning'}, {$set: {collectionName: 'Warning'}, $unset: {collection: ''}}, function(err) {
                    if (err) console.log(err);
                    tableheader.updateMany({collection: 'warning'}, {$set: {collectionName: 'Warning'}, $unset: {collection: ''}}, function(err) {
                      if (err) console.log(err);
                      cllbck()
                    })
                  })
                })
              })
            })

          })
        },

      ], (err) => {
        next();
      })
    },

    (next) => {
      alias_terminaltype_alias_terminaltype(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      collaborator_comment_user_commentrecipient(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      collaborator_mapdata_subscriber_notification(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      collaborator_permission_collaborator_permission(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      collaborator_tag_collaborator_tag(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      collaborator_terminal_collaborator_terminal(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      invite_mapdata_subscriberininvite_notification(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      invite_permission_invite_permission(db)
        .then(() => {
          next()
        })
    },
    (next) => {
      invite_tag_invite_tag(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      invite_terminal_invite_terminal(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      mapdata_role_notification_role(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      mapdata_terminal_notification_terminal(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      organization_terminal_organization_terminal(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      permission_role_permission_role(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      permission_terminaltype_permission_terminaltype(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      tableheader_terminaltype_tableheader_terminaltype(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      tag_tag_child_parent(db)
        .then(() => {
          next();
        })
    },
    (next) => {
      tag_terminal_tag_terminal(db)
        .then(() => {
          next();
        })
    }
  ], (err) => {
    client.close();
    if (err) console.log('err', err);
    console.log('finish');
  })



  // collaborator.find({}).toArray(function(err, collaborators) {
  //   if (err) console.log('err', err);
  //   console.log('collaborators', collaborators);
  //   // client.close();
  // })

});


function alias_terminaltype_alias_terminaltype(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('alias_terminalstypes__terminaltype_aliases');
    async.waterfall([
      (next) => {

        db.renameCollection('alias_terminalstypes__terminaltype_aliases', 'Alias_TerminalType_alias_terminalType', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('Alias_TerminalType_alias_terminalType');
        collection.updateMany({}, {$rename: {'alias_terminalsTypes': 'alias', 'terminaltype_aliases': 'terminalType'}, $unset: {collection: ''}}, function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        checkDuplicates(collection, 'alias', 'terminalType').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({alias: 1, terminalType: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({alias: 1, terminalType: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({terminalType: 1, alias: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}

function collaborator_comment_user_commentrecipient(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('collaborator_commentsrecipient__comment_users');
    async.waterfall([
      (next) => {

        db.renameCollection('collaborator_commentsrecipient__comment_users', 'Collaborator_Comment_user_commentRecipient', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      // (next) => {
      //   checkDuplicates(collection, 'user', 'terminalType').then(() => {
      //     next();
      //   }, (err) => {
      //     next()
      //   })
      // },
      // (next) => {
      //   collection.createIndex({user: 1, commentRecipient: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({user: 1, commentRecipient: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({commentRecipient: 1, user: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
      // (next) => {
      //   collection.updateMany({}, {$rename: {'alias_terminalsTypes': 'alias', 'terminaltype_aliases': 'terminaltype'}, $unset: {collection: ''}}, function(err, res) {
      //     if (err) {
      //       console.log('err', err);
      //       return next();
      //     }
      //     next();
      //   })
      // }
    ], (err) => {
      resolve();
    })
  })
}

function collaborator_mapdata_subscriber_notification(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('collaborator_notifications__mapdata_subscribers');
    async.waterfall([
      (next) => {

        db.renameCollection('collaborator_notifications__mapdata_subscribers', 'Collaborator_MapData_subscriber_notification', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('Collaborator_MapData_subscriber_notification');
        collection.updateMany({}, {$rename: {'collaborator_notifications': 'subscriber', 'mapdata_subscribers': 'notification'}, $unset: {collection: ''}}, function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        checkDuplicates(collection, 'subscriber', 'notification').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({subscriber: 1, notification: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({subscriber: 1, notification: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({notification: 1, subscriber: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}

function collaborator_permission_collaborator_permission(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('collaborator_permissions__permission_collaborators');
    async.waterfall([
      (next) => {

        db.renameCollection('collaborator_permissions__permission_collaborators', 'Collaborator_Permission_collaborator_permission', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('Collaborator_Permission_collaborator_permission');
        collection.dropIndex('collaborator_permissions_1', function(err) {
          if (err) console.log(err);
          collection.dropIndex('permission_collaborators_1', function(err) {
            if (err) console.log(err);
            collection.updateMany({}, {$rename: {'collaborator_permissions': 'collaborator', 'permission_collaborators': 'permission'}, $unset: {collection: ''}}, function(err, res) {
              if (err) {
                console.log('err', err);
                return next();
              }
              next();
            })
          })
        })

      },
      (next) => {
        checkDuplicates(collection, 'collaborator', 'permission').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({collaborator: 1, permission: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({collaborator: 1, permission: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({permission: 1, collaborator: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}


function collaborator_tag_collaborator_tag(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('collaborator_tags__tag_collaborators');
    async.waterfall([
      (next) => {

        db.renameCollection('collaborator_tags__tag_collaborators', 'Collaborator_Tag_collaborator_tag', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('Collaborator_Tag_collaborator_tag');
        collection.updateMany({}, {$rename: {'collaborator_tags': 'collaborator', 'tag_collaborators': 'tag'}, $unset: {collection: ''}}, function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        checkDuplicates(collection, 'collaborator', 'tag').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({collaborator: 1, tag: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({collaborator: 1, tag: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({tag: 1, collaborator: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}

function collaborator_terminal_collaborator_terminal(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('collaborator_terminals__terminal_collaborators');
    async.waterfall([
      (next) => {

        db.renameCollection('collaborator_terminals__terminal_collaborators', 'Collaborator_Terminal_collaborator_terminal', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('Collaborator_Terminal_collaborator_terminal');
        collection.dropIndex('collaborator_terminals_1', function(err) {
          if (err) console.log(err);
          collection.dropIndex('terminal_collaborators_1', function(err) {
            if (err) console.log(err);
            collection.dropIndex('collaborator_terminals_1_terminal_collaborators_1', function(err) {
              if (err) console.log(err);
              collection.updateMany({}, {$rename: {'collaborator_terminals': 'collaborator', 'terminal_collaborators': 'terminal'}, $unset: {collection: ''}}, function(err, res) {
                if (err) {
                  console.log('err', err);
                  return next();
                }
                next();
              })
            })
          })
        })

      },
      (next) => {
        checkDuplicates(collection, 'collaborator', 'terminal').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({collaborator: 1, terminal: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({collaborator: 1, terminal: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({terminal: 1, collaborator: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}

function invite_mapdata_subscriberininvite_notification(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('invite_notifications__mapdata_subscribersininvite');
    async.waterfall([
      (next) => {

        db.renameCollection('invite_notifications__mapdata_subscribersininvite', 'Invite_MapData_subscriberInInvite_notification', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('Invite_MapData_subscriberInInvite_notification');
        collection.updateMany({}, {$rename: {'invite_notifications': 'subscriberInInvite', 'mapdata_subscribersInInvite': 'notification'}, $unset: {collection: ''}}, function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        checkDuplicates(collection, 'subscriberInInvite', 'notification').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({subscriberInInvite: 1, notification: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({subscriberInInvite: 1, notification: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({notification: 1, subscriberInInvite: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}

function invite_permission_invite_permission(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('invite_permissions__permission_invites');
    async.waterfall([
      (next) => {

        db.renameCollection('invite_permissions__permission_invites', 'Invite_Permission_invite_permission', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('Invite_Permission_invite_permission');
        collection.updateMany({}, {$rename: {'invite_permissions': 'invite', 'permission_invites': 'permission'}, $unset: {collection: ''}}, function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        checkDuplicates(collection, 'invite', 'permission').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({invite: 1, permission: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({invite: 1, permission: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({permission: 1, invite: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}

function invite_tag_invite_tag(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('invite_tags__tag_invites');
    async.waterfall([
      (next) => {

        db.renameCollection('invite_tags__tag_invites', 'Invite_Tag_invite_tag', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('Invite_Tag_invite_tag');
        collection.updateMany({}, {$rename: {'invite_tags': 'invite', 'tag_invites': 'tag'}, $unset: {collection: ''}}, function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        checkDuplicates(collection, 'invite', 'tag').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({invite: 1, tag: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({invite: 1, tag: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({tag: 1, invite: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}


function invite_terminal_invite_terminal(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('invite_terminals__terminal_invites');
    async.waterfall([
      (next) => {

        db.renameCollection('invite_terminals__terminal_invites', 'Invite_Terminal_invite_terminal', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('Invite_Terminal_invite_terminal');
        collection.updateMany({}, {$rename: {'invite_terminals': 'invite', 'terminal_invites': 'terminal'}, $unset: {collection: ''}}, function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        checkDuplicates(collection, 'invite', 'terminal').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({invite: 1, terminal: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({invite: 1, terminal: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({terminal: 1, invite: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}

function mapdata_role_notification_role(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('mapdata_roles__role_notifications');
    async.waterfall([
      (next) => {

        db.renameCollection('mapdata_roles__role_notifications', 'MapData_Role_notification_role', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('MapData_Role_notification_role');
        collection.updateMany({}, {$rename: {'mapdata_roles': 'notification', 'role_notifications': 'role'}, $unset: {collection: ''}}, function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        checkDuplicates(collection, 'notification', 'role').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({notification: 1, role: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({notification: 1, role: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({role: 1, notification: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}

function mapdata_terminal_notification_terminal(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('mapdata_terminals__terminal_notifications');
    async.waterfall([
      (next) => {

        db.renameCollection('mapdata_terminals__terminal_notifications', 'MapData_Terminal_notification_terminal', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('MapData_Terminal_notification_terminal');
        collection.updateMany({}, {$rename: {'mapdata_terminals': 'notification', 'terminal_notifications': 'terminal'}, $unset: {collection: ''}}, function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        checkDuplicates(collection, 'notification', 'terminal').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({notification: 1, terminal: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({notification: 1, terminal: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({terminal: 1, notification: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}

// function mapdata_terminaltype_notification_terminaltype(db) {
//   return new Promise((resolve, reject) => {
//     const collection = db.collection('mapdata_terminaltypes__terminaltype_notifications');
//     async.waterfall([
//       (next) => {
//
//         db.renameCollection('mapdata_terminaltypes__terminaltype_notifications', 'mapdata_terminaltype_notification_terminaltype', function(err, res) {
//           if (err) {
//             console.log('err', err);
//             return next();
//           }
//           next();
//         })
//       },
//       // (next) => {
//       //   collection.updateMany({}, {$rename: {'mapdata_terminals': 'notification', 'terminal_notifications': 'terminal'}, $unset: {collection: ''}}, function(err, res) {
//       //     if (err) {
//       //       console.log('err', err);
//       //       return next();
//       //     }
//       //     next();
//       //   })
//       // },
//     ], (err) => {
//       resolve();
//     })
//   })
// }


function organization_terminal_organization_terminal(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('organization_terminals__terminal_organizations');
    async.waterfall([
      (next) => {

        db.renameCollection('organization_terminals__terminal_organizations', 'Organization_Terminal_organization_terminal', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('Organization_Terminal_organization_terminal');
        collection.dropIndex('organization_terminals_1', function(err) {
          if (err) console.log(err);
          collection.dropIndex('terminal_organizations_1', function(err) {
            if (err) console.log(err);
            collection.updateMany({}, {$rename: {'organization_terminals': 'organization', 'terminal_organizations': 'terminal'}, $unset: {collection: ''}}, function(err, res) {
              if (err) {
                console.log('err', err);
                return next();
              }
              next();
            })
          })
        })
      },
      (next) => {
        checkDuplicates(collection, 'organization', 'terminal').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({organization: 1, terminal: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({organization: 1, terminal: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({terminal: 1, organization: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}

function permission_role_permission_role(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('permission_roles__role_permissions');
    async.waterfall([
      (next) => {

        db.renameCollection('permission_roles__role_permissions', 'Permission_Role_permission_role', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('Permission_Role_permission_role');
        collection.dropIndex('permission_roles_1', function(err) {
          if (err) console.log(err);
          collection.dropIndex('role_permissions_1', function(err) {
            if (err) console.log(err);
            collection.dropIndex('permission_roles_1_role_permissions_1', function(err) {
              if (err) console.log(err);
              collection.updateMany({}, {$rename: {'permission_roles': 'permission', 'role_permissions': 'role'}, $unset: {collection: ''}}, function(err, res) {
                if (err) {
                  console.log('err', err);
                  return next();
                }
                next();
              })
            })
          })
        })


      },
      (next) => {
        checkDuplicates(collection, 'permission', 'role').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({permission: 1, role: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({permission: 1, role: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({role: 1, permission: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}

function permission_terminaltype_permission_terminaltype(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('permission_terminalstypes__terminaltype_permissions');
    async.waterfall([
      (next) => {

        db.renameCollection('permission_terminalstypes__terminaltype_permissions', 'Permission_TerminalType_permission_terminalType', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('Permission_TerminalType_permission_terminalType');

        collection.dropIndex('permission_terminalstypes_1', function(err) {
          if (err) console.log(err);
          collection.dropIndex('terminaltype_permissions_1', function(err) {
            if (err) console.log(err);
            collection.dropIndex('permission_terminalstypes_1_terminaltype_permissions_1', function(err) {
              if (err) console.log(err);
              collection.updateMany({}, {$rename: {'permission_terminalsTypes': 'permission', 'terminaltype_permissions': 'terminalType'}, $unset: {collection: ''}}, function(err, res) {
                if (err) {
                  console.log('err', err);
                  return next();
                }
                next();
              })
            })
          })
        })

      },
      (next) => {
        checkDuplicates(collection, 'permission', 'terminalType').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({permission: 1, terminalType: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({permission: 1, terminalType: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({terminalType: 1, permission: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}

function tableheader_terminaltype_tableheader_terminaltype(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('tableheader_terminaltypes__terminaltype_tableheaders');
    async.waterfall([
      (next) => {

        db.renameCollection('tableheader_terminaltypes__terminaltype_tableheaders', 'TableHeader_TerminalType_tableHeader_terminalType', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('TableHeader_TerminalType_tableHeader_terminalType');

        collection.dropIndex('tableheader_terminaltypes_1', function(err) {
          if (err) console.log(err);
          collection.dropIndex('terminaltype_tableheaders_1', function(err) {
            if (err) console.log(err);
            collection.dropIndex('tableheader_terminaltypes_1_terminaltype_tableheaders_1', function(err) {
              if (err) console.log(err);
              collection.updateMany({}, {$rename: {'tableheader_terminalTypes': 'tableHeader', 'terminaltype_tableHeaders': 'terminalType'}, $unset: {collection: ''}}, function(err, res) {
                if (err) {
                  console.log('err', err);
                  return next();
                }
                next();
              })
            })
          })
        })
      },
      (next) => {
        checkDuplicates(collection, 'tableHeader', 'terminalType').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({tableHeader: 1, terminalType: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({tableHeader: 1, terminalType: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({terminalType: 1, tableHeader: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}


function tag_tag_child_parent(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('tag_parents__tag_childs');
    async.waterfall([
      (next) => {

        db.renameCollection('tag_parents__tag_childs', 'Tag_Tag_child_parent', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('Tag_Tag_child_parent');
        collection.updateMany({}, {$rename: {'tag_parents': 'child', 'tag_childs': 'parent'}, $unset: {collection: ''}}, function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        checkDuplicates(collection, 'child', 'parent').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({child: 1, parent: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({child: 1, parent: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({parent: 1, child: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}


function tag_terminal_tag_terminal(db) {
  return new Promise((resolve, reject) => {
    let collection = db.collection('tag_terminals__terminal_tags');
    async.waterfall([
      (next) => {

        db.renameCollection('tag_terminals__terminal_tags', 'Tag_Terminal_tag_terminal', function(err, res) {
          if (err) {
            console.log('err', err);
            return next();
          }
          next();
        })
      },
      (next) => {
        collection = db.collection('Tag_Terminal_tag_terminal');
        collection.dropIndex('tag_terminals_1', function(err) {
          if (err) console.log(err);
          collection.dropIndex('terminal_tags_1', function(err) {
            if (err) console.log(err);
            collection.updateMany({}, {$rename: {'tag_terminals': 'tag', 'terminal_tags': 'terminal'}, $unset: {collection: ''}}, function(err, res) {
              if (err) {
                console.log('err', err);
                return next();
              }
              next();
            })
          })
        })
      },
      (next) => {
        checkDuplicates(collection, 'tag', 'terminal').then(() => {
          next();
        }, (err) => {
          next()
        })
      },
      // (next) => {
      //   collection.createIndex({tag: 1, terminal: 1}, {unique: true}, function(err) {
      //     if (err) console.log('err', err);
      //     next();
      //   })
      // },
      (next) => {
        collection.createIndex({tag: 1, terminal: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },(next) => {
        collection.createIndex({terminal: 1, tag: 1}, {unique: true}, function(err) {
          if (err) console.log('err', err);
          next();
        })
      },
    ], (err) => {
      resolve();
    })
  })
}


function checkDuplicates(collection, field1, field2) {
  return new Promise((resolve, reject) => {
    async.waterfall([
      (next) => {
        collection.find()
          .sort({[field1]: 1, [field2]: 1})
          .toArray((err, items) => {
            if (err) return next(err);
            // console.log('items', items);
            next(null, items);
          })
      },
      (items, next) => {
        let prevField1 = '';
        let prev = '';
        async.eachSeries(items, (item, cb) => {
          if (prevField1 != item[field1].toString()) {
            prev = item[field2].toString();
            prevField1 = item[field1];
            return cb();
          };
          if (prev != item[field2].toString()) {
            prev = item[field2].toString();
            return cb();
          };
          // console.log(1);
          collection.deleteOne({_id: ObjectId(item._id)}, (err) => {
            if (err) console.log(err);
            console.log('deleted!!!!!!!', item);
            cb();
          })
        }, (err) => {
          if (err) return next(err);
          next();
        })
      }
    ], (err) => {
      if (err) return reject(err);
      resolve();
    })
  })
}
