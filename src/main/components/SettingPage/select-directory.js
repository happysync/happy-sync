const ipc = require('electron').ipcMain
const dialog = require('electron').dialog

var chokidar = require('chokidar')
var moment = require('moment')
var watcher

var request = require('request')

request({
  method: 'HEAD',
  uri: 'https://www.baidu.com/nocache/fesplg/time.gif'
}, function (error, response, body) {
  // body is the decompressed response body
  console.log('time is ' + moment(response.headers['date']).format('YYYY-MM-DD-HH-mm-ss'))
  // console.log('the decoded data is: ' + body)
  console.log(error)
})

ipc.on('open-file-dialog', function (event) {
  console.log('nodejs require OK')
  dialog.showOpenDialog({
    properties: ['openDirectory']
  }, function (files) {
    if (files && files.length) {
      event.sender.send('selected-directory', files[0])

      if (watcher) watcher.close()
      watcher = chokidar.watch(files[0], {
        ignored: /[/\\]\./,
        awaitWriteFinish: {
          stabilityThreshold: 2000,
          pollInterval: 200
        },
        ignoreInitial: true,
        followSymlinks: false
      })
      var log = console.log.bind(console)
      watcher
        .on('add', path => log(`File ${path} has been added`))
        .on('change', path => log(`File ${path} has been changed`))
        .on('unlink', path => log(`File ${path} has been removed`))

      watcher.on('change', (path, stats) => {
        if (stats) console.log(`File ${path} changed size to ${stats.size},modified on ${+moment(stats.mtime)}`)
      })
    }
  })
})
