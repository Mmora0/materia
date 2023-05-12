const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const jugadores = []
class Jugador {
    constructor(id) {
        this.id = id
    }
    asignarMateria(materia) {
        this.materia = materia
    }
    actualizarPosicion(x, y) {
        this.x = x
        this.y = y
    }
}

class Materia {
    constructor(nombre) {
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`
    const jugador = new Jugador(id)
    jugadores.push(jugador)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(id)
})

app.post("/materia/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.materia || ""
    const materia = new Materia(nombre)

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarMateria(materia)
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/materia/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }
    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)

    res.send({
        enemigos
    })
})

app.listen(5500, () => {
    console.log("servidor funcionando")
})