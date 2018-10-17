class PatentesCientificas {
    constructor(autoresPatentes, anyoPublicacion, vencePatente){
        this.autoresPatentes = autoresPatentes;
        this.anyoPublicacion = anyoPublicacion;
        this.vencePatente = vencePatente;
        this.tipoPatente = true;
    }

    cambiarAutoresPatente(nuevosAutoresPatente){
        this.autoresPatentes = nuevosAutoresPatente;
    }

    cambiarAnyoPublicacion(nuevoAnyoPublicacion){
        this.anyoPublicacion = nuevoAnyoPublicacion;
    }

    cambiarVencePatente(nuevoVencePatente){
        this.vencePatente = nuevoVencePatente;
    }
}

exports.PatentesCientificas = PatentesCientificas;