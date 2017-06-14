
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New user connected')

    socket.on('newMessage', (data) => {
      console.log('New message', data)
      socket.emit('broadcast message', data)
    })

    socket.on('newUser', (data) => {
      console.log('New message', data)
      io.emit('broadcast location', data)
    })
  })
}
