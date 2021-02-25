
class Logger {
    INFO        = `INFO`
    WARNING     = `WARNING`
    NOTICE      = `NOTICE`
    ERROR       = `ERROR`
    DEBUG       = `DEBUG`
    ALERT       = `ALERT`
    CRITICAL    = `CRITICAL`
    EMERGENCY   = `EMERGENCY`
    #array      = []

    cetaklog () {
        console.log (this.#array)
    }
    #createmessege (msg) {

        const date = new Date()
        const pesan = `[${date}] ${msg}`
        this.#array.push (pesan)

    }
    info (msg) {
    
       this.#createmessege(`${this.INFO} : ${msg}`)
    } 
    warning(msg) {

        this.#createmessege(`${this.WARNING} : ${msg}`)
    }
    notice (msg) {
       
        this.#createmessege(`${this.NOTICE} : ${msg}`)
    }
    error (msg) {
       
        this.#createmessege(`${this.ERROR} : ${msg}`)
    }
    alert (msg) {
       
        this.#createmessege(`${this.ALERT} : ${msg}`)
    }
    debug (msg) {
       
        this.#createmessege(`${this.DEBUG} : ${msg}`)
    }
    emergency (msg) {
       
        this.#createmessege(`${this.EMERGENCY} : ${msg}`)
    }
    critical (msg) {
       
        this.#createmessege(`${this.CRITICAL} : ${msg}`)
    }
}
const calllog = new Logger

calllog.info ("This is an information about something")
calllog.warning ("Insufficient funds")
calllog.notice ("Someone loves your status.")
calllog.error ("We can't divide any numbers by zero.")
calllog.debug ("This is debug message.")
calllog.alert ("Achtung! Achtung!")
calllog.critical ("Medic!! We've got critical damages.")
calllog.emergency ("System hung. Contact system administrator immediately!")
calllog.cetaklog()
