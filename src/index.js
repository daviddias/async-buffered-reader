exports = module.exports = read

function read (stream, size, cb) {
  tryRead()

  function tryRead () {
    var chunk = stream.read(size)
    if (chunk) {
      return cb(chunk)
    }
    stream.once('readable', tryRead)
  }
}
